// project image slider

    // project image slider
    // properties-search-tab
    function openTab2(evt, tabName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("content-tab2");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab2");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" is-active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " is-active";
    }
    
    /** Download Brochure form data start */
    $(document).on("click", ".project_brochure_bind", function() {
        $('#brochure_common_frm_submit')[0].reset();
        $("#fcountrycode").val("IN").change();
        $(".brochurehide_infromation").removeClass("is-hidden");
        $(".brochurebind_hidden_name").text("");
        $(".brochurebindbind_hidden_number").text("");
        $(".brochurebindbind_hidden_email").text("");
        $(".brochureshow_infromation").addClass("is-hidden");
        $(".brochure_submit_btn").removeClass("is-hidden");
        $("#brochrenquiryotp_dd").val("");
    });
    $("#brochure_common_frm_submit").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            enquiryname: {
                "required": true,
                textOnly: true
            },
            enquirynumber: {
                "required": true,
                minlength: 9
            },
            enquiry_country: {
                "required": true
            },
            enquiryemail: {
                "required": true
            },
            agree_to_be_contacted : {
              "required": true
            }

        },
        messages: {
            enquiryname: {
                required: "<span class='error-msg'>Please Enter Name</span>",
                textOnly: "<span class='error-msg'>Please enter only text</span>"
            },
            enquirynumber: {
                required: "<span class='error-msg'>Please Enter Mobile number</span>",
                minlength: "<span class='error-msg'>Please Edit Digits</span>"
            },
            enquiry_country: "<span class='error-msg'>Please Enter Country Code</span>",
            enquiryemail: "<span class='error-msg'>Please Enter Email</span>",
             agree_to_be_contacted: "<span class='error-msg is-static mt-1 w-fit-content'>Please Accept</span>",
        },
        errorPlacement: function(error, element) {
          if (element.attr("name") == "agree_to_be_contacted") {
            error.addClass("is-static");
            error.appendTo(element.closest('.checkbox-item-update'));
          } else {
            error.insertAfter(element);
          }
        },
        submitHandler: function(form) {
            var $submitBtn = $(form).find(".common_submit_btn");
            var formdata = {};
             if ($("#whatsapp_brochure").is(":checked")) {
                initSocket(); // Ensure socketId is set
                activeWhatsAppCallback = downloadbrochureenquiry;
                activeWhatsAppFormSelector = "#brochure_common_frm_submit";

                var waMobileNo    = $("#enquirynumber").filter(function() { return $(this).val() != ""; }).first().val();
                var waCountryCode = $("#fcountrycode option:selected").attr("data-contry_code_add");
                if (!waCountryCode) { waCountryCode = $("#booking_country").val() || "+91"; }
                var wa_age_consent       = $(form).find("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                var wa_marketing_consent = $(form).find("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

                // Step 1: validatemarketingconsent before WhatsApp generate
                var waConsentData = {};
                waConsentData["dynamicurl"]                    = "lead/v1/validatemarketingconsent";
                waConsentData["Mobile_No"]                    = waMobileNo;
                waConsentData["Mobile_CountryCode"]           = waCountryCode;
                waConsentData["is_age_consent_accepted"]      = wa_age_consent;
                waConsentData["is_marketing_consent_accepted"]= wa_marketing_consent;

                $submitBtn.html("Submitting..").attr("disabled", true);

                $.ajax({
                    method: "POST",
                    url: "https://www.prestigeconstructions.com/api/apicall",
                    dataType: "json",
                    data: waConsentData,
                    headers: { 'Authorization': token },
                    success: function(consentResp) {
                        if (consentResp.success == true) {
                            generateWhatsAppLink(waMobileNo, waCountryCode, wa_age_consent, wa_marketing_consent);
                        } else {
                            showToast("Message", consentResp.message || "Consent validation failed.");
                            var restoreText = $("#whatsapp_brochure").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                            $submitBtn.html(restoreText).attr("disabled", false);
                        }
                    },
                    error: function() {
                        showToast("Error", "Something went wrong during consent validation. Please try again.");
                        var restoreText = $("#whatsapp_brochure").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                        $submitBtn.html(restoreText).attr("disabled", false);
                    }
                });

                function generateWhatsAppLink(waMobileNo, waCountryCode, wa_age_consent, wa_marketing_consent) {
                    var currentUrl = window.location.href;
                    var updatedUrl = currentUrl.split('?')[0];
                    var pathArray = updatedUrl.split('/').filter(function(el) { return el.length != 0; });
                    var lastPart = pathArray.pop();

                    var formdata = {};
                    formdata["dynamicurl"]         = "lead/v1/common/whatsapp/verification/generate";
                    formdata["Mobile_No"]          = waMobileNo;
                    formdata["Mobile_CountryCode"] = waCountryCode;
                    formdata["Page_Name"]          = lastPart + " - Book a Site Visit";
                    formdata["Plateform_Name"]     = "web";
                    formdata["RequestFrom"]        = "Website";
                    formdata["Session_ID"]         = socketId;
                    formdata["Type"]               = "Enquiry Now";

                    // // console.log("WhatsApp API payload:", formdata); // debug

                    // Open window NOW (user gesture) — navigate after response to avoid popup blocker
                    var whatsappWindow = window.open('about:blank', '_blank');

                    $.ajax({
                        method: "POST",
                        url: "https://www.prestigeconstructions.com/api/apicall",
                        dataType: "json",
                        data: formdata,
                        headers: { 'Authorization': token },
                        success: function(response) {
                            // // console.log("WhatsApp API response:", response); // debug
                            if (response.success == true) {
                                var whatsappUrl = "";
                                if (response.data) {
                                    if (typeof response.data === 'string') {
                                        whatsappUrl = response.data;
                                    } else if (response.data.url) {
                                        whatsappUrl = response.data.url;
                                    } else if (Array.isArray(response.data) && response.data.length > 0) {
                                        var d = response.data[0];
                                        whatsappUrl = d.url || d.link || d.qrcode || d.whatsapp_url
                                                    || d.redirect_url || d.verification_url
                                                    || (typeof d === 'string' ? d : "");
                                    }
                                }
                                if (whatsappUrl) {
                                    if (whatsappWindow) {
                                        whatsappWindow.location.href = whatsappUrl; // navigate pre-opened window
                                    } else {
                                        window.open(whatsappUrl, '_blank');
                                    }
                                    showToastsuccess("Success", "WhatsApp link generated successfully.");
                                    $("#enquire-sidebar").removeClass("active");
                                } else {
                                    if (whatsappWindow) { whatsappWindow.close(); }
                                    console.warn("No URL found. Full response:", JSON.stringify(response));
                                    showToast("Message", response.message || "Request sent. Check WhatsApp.");
                                }
                            } else {
                                if (whatsappWindow) { whatsappWindow.close(); }
                                showToast("Message", response.message);
                            }
                        },
                        complete: function() {
                            $submitBtn.attr("disabled", false);
                            var restoreText = $("#whatsapp_brochure").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                            $submitBtn.html(restoreText);
                        },
                        error: function(xhr, status, err) {
                            if (whatsappWindow) { whatsappWindow.close(); }
                            console.error("WhatsApp API error:", status, err, xhr.responseText);
                            showToast("Error", "Something went wrong. Please try again.");
                        }
                    });
                } // end generateWhatsAppLink

                return;
            }

            var mobileNo = $("#enquirynumber").filter(function() { return $(this).val() != ""; }).first().val();
            var countryCodeAttr = $("#fcountrycode option:selected").attr("data-contry_code_add");
            var is_age_consent       = $(form).find("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
            var is_marketing_consent = $(form).find("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

            // Step 1: Validate marketing consent before sending OTP
            var consentData = {};
            consentData["dynamicurl"]                   = "lead/v1/validatemarketingconsent";
            consentData["Mobile_No"]                    = mobileNo;
            consentData["Mobile_CountryCode"]           = countryCodeAttr;
            consentData["is_age_consent_accepted"]      = is_age_consent;
            consentData["is_marketing_consent_accepted"]= is_marketing_consent;

            $submitBtn.html("Submitting..").attr("disabled", true);

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: consentData,
                headers: { 'Authorization': token },
                success: function(consentResponse) {
                    if (consentResponse.success == true) {
                        sendEnquiryOtp(mobileNo, countryCodeAttr);
                    } else {
                        showToast("Message", consentResponse.message || "Consent validation failed.");
                        $submitBtn.html("Submit").attr("disabled", false);
                    }
                },
                error: function() {
                    showToast("Error", "Something went wrong during consent validation. Please try again.");
                    $submitBtn.html("Submit").attr("disabled", false);
                }
            });

      function sendEnquiryOtp(mobileNo, countryCodeAttr) {
            formdata["dynamicurl"] = "employee/v2/customersendotp";
            formdata["Mobile_No"] = $("#enquirynumber").val();
            formdata["Mobile_CountryCode"] = $("#fcountrycode option:selected").attr("data-contry_code_add");
            var emailbind = $("#fcountrycode option:selected").attr("data-contry_code_add");
            if (emailbind !== "+91") {
                formdata["Email"] = $("#enquiryemail").val();
            }
            formdata["whatsapp_nri"] = $("#whatsapp_nri_brochure").is(":checked") ? 1 : 0;


            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".theme-loader").addClass("active");
                    $(".brochure_submit_btn").html("Submitting..");
                    $(".brochure_submit_btn").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                        $.each(response.data, function(i, item) {
                            var userId = item._id;
                            $("#brochureotp_verify").val(userId);
                        });
                        $(".brochurehide_infromation").addClass("is-hidden");
                        $(".brochurebind_hidden_name").text($("#enquiryname").val());
                        $(".brochurebindbind_hidden_number").text($("#enquirynumber").val());
                        $(".brochurebindbind_hidden_email").text($("#enquiryemail").val());
                        $(".brochureshow_infromation").removeClass("is-hidden");
                        showToast("Success", response.message);

                        if (formdata["whatsapp_nri"] === 0) {
                           $(".timer_display").hide();
                        $(".resend_otp_container").addClass("is-hidden");
                        // console.log("WhatsApp NRI is false. Timer and resend OTP button will not be displayed.");
                        } else {
                        // Start the OTP timer and show the resend button
                        startOtpTimer();
                        // $("#resend_otp_container").removeClass("is-hidden");
                        }

                    } else {
                        showToast("Message", response.message);

                    }
                    $(".brochure_submit_btn").addClass("is-hidden");
                },
                complete: function() {
                    $(".brochure_submit_btn").html("Submit");
                    $(".brochure_submit_btn").attr("disabled", false);
                    $("#enquire-now-sidebar").removeClass("active");
                    $(".theme-loader").removeClass("active");
                },
                error: function(response) {}
            });
            } // end sendEnquiryOtp
        }
    });
    function brochureresendOtp() {
        const mobileNumber = $("#enquirynumber").val();
        const mobileCountryCode = $("#fcountrycode option:selected").attr("data-contry_code_add");
        const email = $("#enquiryemail").val();
        const whatsappNri = 0;

        // Prepare form data
        const formdata = {
            dynamicurl: "employee/v2/customersendotp",
            Mobile_No: mobileNumber,
            Mobile_CountryCode: mobileCountryCode,
            whatsapp_nri: whatsappNri
        };

        // Add email only if the country code is not +91
        if (mobileCountryCode !== "+91") {
            formdata.Email = email;
        }

        // AJAX call to resend OTP
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                Authorization: token
            },
            beforeSend: function () {
                $(".resend_otp_btn_brohure").text("Resending...").attr("disabled", true);
            },
            success: function (response) {
                if (response.success) {
                  // Update the OTP ID in the hidden input field
                  $("#whatsapp_nri_brochure").prop("checked",false);
                  const newOtpId = response.data[0]._id;
                    $("#brochureotp_verify").val(newOtpId);
                    // console.log("New OTP _id:", newOtpId);
                    showToast("Success", "OTP sent successfully in Email.");
                    // startOtpTimer(); // Restart the timer after a successful resend
                } else {
                    showToast("Error", response.message || "Failed to resend OTP.");
                }
            },
            complete: function () {
                $(".resend_otp_btn_brohure").text("Resend OTP").attr("disabled", false).hide();
                // setTimeout(() => {
                //   $(".resend_otp_btn_brohure").text("Resending...").attr("disabled", true).hide();
                // }, 2000);
            },
            error: function (xhr) {
                console.error(xhr);
                showToast("Error", "Something went wrong. Please try again.");
            }
        });
    }

    // Event Listener for Resend OTP button
    $(".resend_otp_btn_brohure").on("click", function () {
      brochureresendOtp();
    });

    $("#brohureotp_verify_frm").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            brochrenquiryotp_dd: {
                "required": true
            },
        },
        messages: {
            brochrenquiryotp_dd: "<span class='error-msg'>Please Enter OTP</span>",
        },
        submitHandler: function(form) {
            var formdata = {};
            formdata["dynamicurl"] = "employee/v1/customerverifyotp";
            formdata["otp"] = $("#brochrenquiryotp_dd").val();
            formdata["_id"] = $("#brochureotp_verify").val();

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".theme-loader").addClass("active");
                    $(".brochure_submit_btn").html("Submitting..");
                    $(".brochure_submit_btn").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                        downloadbrochureenquiry()
                        var consentSaveData = {};
                        consentSaveData["dynamicurl"]                    = "lead/v1/common/consent/save";
                        consentSaveData["Mobile_No"]                     = $("#enquirynumber").filter(function() { return $(this).val() != ""; }).first().val();
                        consentSaveData["Mobile_CountryCode"]            = $("#fcountrycode option:selected").attr("data-contry_code_add");
                        consentSaveData["is_age_consent_accepted"]       = $("#brochure_common_frm_submit input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                        consentSaveData["is_marketing_consent_accepted"] = $("#brochure_common_frm_submit input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";
                        consentSaveData["VerifiedFrom"]                  = "Website";
                        consentSaveData["From"]                          = "Web";

                        $.ajax({
                            method: "POST",
                            url: "https://www.prestigeconstructions.com/api/apicall",
                            dataType: "json",
                            data: consentSaveData,
                            headers: { 'Authorization': token }
                        });
                        $('#brochure_common_frm_submit')[0].reset();
                        $("#fcountrycode").val("IN").change();
                        $(".brochurehide_infromation").removeClass("is-hidden");
                        $(".brochurebind_hidden_name").text("");
                        $(".brochurebindbind_hidden_number").text("");
                        $(".brochurebindbind_hidden_email").text("");
                        $(".brochureshow_infromation").addClass("is-hidden");
                        $(".brochure_submit_btn").removeClass("is-hidden");
                        $("#brochrenquiryotp_dd").val("");
                        // showToast("Success", response.message);
                    } else {
                        showToast("Message", response.message);
                        $("#brochrenquiryotp_dd").val("");
                    }

                },
                complete: function() {
                    $(".theme-loader").removeClass("active");
                    $(".brochure_submit_btn").html("Send OTP");
                    $(".brochure_submit_btn").attr("disabled", false);
                    if(projectid=="prestige-jasdan-classic" || projectid=="prestige-somerville" || projectid=="bellanza" || projectid=="siesta" || projectid=="prestige-ocean-pearl" || projectid=="prestige-eden-garden" || projectid=="prestige-valley-crest" || projectid=="bellagio" || projectid=="apartment" ){
                    downloadbrochure_uet_report_conversion();
                }
                },
                error: function(response) {}
            });
        }
    });

    function downloadbrochureenquiry() {
        var formdata = {};
        var queryParams = getQueryParams();
        // formdata["dynamicurl"] = "managecontent/v2/enquire/create";
        formdata["dynamicurl"] = "managecontent/v2/enquire/create";
        formdata["type"] = "downloadbrochure";
        formdata["projectid"] = ProjectID;
        formdata["project_name"] = project_name_download;
        formdata["project_type"] = "residentialprojects";
        formdata["requestfrom"] = "web";
        formdata["mobileno"] = $("#enquirynumber").val();
        formdata["name"] = $("#enquiryname").val();
        formdata["countrycode"] = $("#fcountrycode option:selected").attr("data-contry_code_add");
        formdata["country"] = $("#fcountrycode").val();
        formdata["email"] = $("#enquiryemail").val();
        formdata["page_url"] = window.location.href;
        if ($("#brochure_common_frm_submit input[name='agree_to_be_contacted']").is(":checked")) {
            formdata["marketing_update_received"] = "yes";
        }
        formdata["whatsapp_nri"] = $("#whatsapp_nri_brochure").is(":checked") ? 1 : 0;
         
        $.extend(formdata, serializeHiddenFields());
        $.extend(formdata, getAllQueryStringParams());
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(response) {
                if (response.success == true) {
                    showToastsuccess("Success", response.message);
                    $("#brochure-sidebar").removeClass("active");
                    setTimeout(() => {
                        var uploadbrochure = $("#brochureimage_download").val();
                        if (uploadbrochure) {
                            window.location.href = uploadbrochure;
                        }
                    }, 700);
                } else {
                    $('#brochure_common_frm_submit')[0].reset();
                    $("#fcountrycode").val("IN").change();
                    showToast("Message", response.message);
                }
            },
            complete: function() {
                if(projectid=="prestige-jasdan-classic" || projectid=="prestige-somerville" || projectid=="bellanza" || projectid=="siesta" || projectid=="prestige-ocean-pearl" || projectid=="prestige-eden-garden" || projectid=="prestige-valley-crest" || projectid=="bellagio" || projectid=="apartment" ){
                    downloadbrochure_uet_report_conversion();
                }
            },
            error: function(response) {}
        });
    }
    /** Download Brochure form data start */

    /** Virtual tour form data start */
    $(document).on("click", ".click_virtual_tour", function() {
        var data_href = $(this).attr("data-href");
        var data_target = $(this).attr("data-target");
        $("#virtualtour_download").val(data_href);
        $("#virtualtour_download").attr("data-target", data_target);
        $("#virtual-tour-sidebar").addClass("active");


        $('#virtualtour_common_frm_submit')[0].reset();
        $("#virtualtour_fcountrycode").val("IN").change();
        $(".virtualtour_info_hide").removeClass("is-hidden");
        $(".virtualtour_hidden_number").text("");
        // $(".virtualtour_hidden_name").text("");
        $(".virtualtour_hidden_email").text("");
        $(".virtualtour_infromation").addClass("is-hidden");
        $(".virtualtour_submitbtn").removeClass("is-hidden");
        $("#virtualtour_otp_dd").val("");
        
        $(".virtualtour_otp_input_section").removeClass("is-hidden");
        $(".virtualtour_vr_tour_section").addClass("is-hidden");
    });
    function toggleVirtualTourWhatsAppVisibility() {
        const selectedCountryCode = $("#virtualtour_fcountrycode option:selected").val();
        if (selectedCountryCode === "IN") {
            $(".virtualtour_is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
            $(".resend_otp_btn_virtualtour").addClass("is-hidden"); // Hide Resend OTP button
            $("#virtualtour_timer_display").hide(); // Hide the timer
        } else {
            $(".virtualtour_is_whatsapp").removeClass("is-hidden"); // Show WhatsApp section
            $(".resend_otp_btn_virtualtour").removeClass("is-hidden"); // Show Resend OTP button
            $(".resend_otp_btn_virtualtour").show(); // Show Resend OTP button
            // startOtpTimer(); // Start the OTP timer
        }
    }

    $("#virtualtour_fcountrycode").change(function() {
        var countryvalue = $("#virtualtour_fcountrycode").val();
        if (countryvalue != null && countryvalue != undefined && countryvalue != "") {
            if (countryvalue == "IN") {
                $("#virtualtour_number").val("");
                $("#virtualtour_number").prop("maxlength", "10");
                $(this).closest('form').find(".is_whatsapp").addClass("is-hidden");
            } else {
                $("#virtualtour_number").val("");
                $("#virtualtour_number").prop("maxlength", "15");
                $(this).closest('form').find(".is_whatsapp").removeClass("is-hidden");
            }
        }
        toggleVirtualTourWhatsAppVisibility();
    });
    $("#virtualtour_common_frm_submit").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            virtualtour_name: {
                "required": true,
                textOnly: true
            },
            virtualtour_number: {
                "required": true,
                minlength: 9,
            },
            virtualtour_fcountrycode: {
                "required": true
            },
            virtualtour_email: {
                required: true,
                email: true,
                customEmail: true
            },
            agree_to_be_contacted: {
                "required": true
            }

        },
        messages: {
            virtualtour_name: {
                required: "<span class='error-msg'>Please Enter Name</span>",
                textOnly: "<span class='error-msg'>Please enter only text</span>"
            },
            virtualtour_number: {
                required: "<span class='error-msg'>Please Enter Mobile number</span>",
                minlength: "<span class='error-msg'>Please Edit Digits</span>"
            },
            virtualtour_fcountrycode: "<span class='error-msg'>Please Enter Country Code</span>",
            virtualtour_email: {
                required: "<span class='error-msg'>Please Enter Email</span>",
                email: "<span class='error-msg'>Please Enter a Valid Email</span>",
                customEmail: "<span class='error-msg'>Please Enter a Valid Email</span>"
            },
            agree_to_be_contacted: "<span class='error-msg is-static mt-1 w-fit-content'>Please Accept</span>",
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "agree_to_be_contacted") {
                error.addClass("is-static");
                error.appendTo(element.closest('.checkbox-item-update'));
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function(form) {
            var formdata = {};
            var $submitBtn = $(form).find(".virtualtour_submitbtn");

            if ($("#whatsapp_virtual").is(":checked")) {
                initSocket(); // Ensure socketId is set
                activeWhatsAppCallback = virtualtour_whatsapp_callback;
                activeWhatsAppFormSelector = "#virtualtour_common_frm_submit";

                var waMobileNo    = $("#virtualtour_number").val();
                var waCountryCode = $("#virtualtour_fcountrycode option:selected").attr("data-contry_code_add");
                if (!waCountryCode) { waCountryCode = $("#virtualtour_fcountrycode").val() || "+91"; }
                var wa_age_consent       = $("#virtualtour_common_frm_submit input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                var wa_marketing_consent = $("#virtualtour_common_frm_submit input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

                // Step 1: validatemarketingconsent before WhatsApp generate
                var waConsentData = {};
                waConsentData["dynamicurl"]                    = "lead/v1/validatemarketingconsent";
                waConsentData["Mobile_No"]                    = waMobileNo;
                waConsentData["Mobile_CountryCode"]           = waCountryCode;
                waConsentData["is_age_consent_accepted"]      = wa_age_consent;
                waConsentData["is_marketing_consent_accepted"]= wa_marketing_consent;

                $submitBtn.html("Submitting..").attr("disabled", true);

                $.ajax({
                    method: "POST",
                    url: "https://www.prestigeconstructions.com/api/apicall",
                    dataType: "json",
                    data: waConsentData,
                    headers: { 'Authorization': token },
                    success: function(consentResp) {
                        if (consentResp.success == true) {
                            generateWhatsAppLink(waMobileNo, waCountryCode, wa_age_consent, wa_marketing_consent);
                        } else {
                            showToast("Message", consentResp.message || "Consent validation failed.");
                            var restoreText = $("#whatsapp_virtual").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                            $submitBtn.html(restoreText).attr("disabled", false);
                        }
                    },
                    error: function() {
                        showToast("Error", "Something went wrong during consent validation. Please try again.");
                        var restoreText = $("#whatsapp_virtual").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                        $submitBtn.html(restoreText).attr("disabled", false);
                    }
                });

                function generateWhatsAppLink(waMobileNo, waCountryCode, wa_age_consent, wa_marketing_consent) {
                    var currentUrl = window.location.href;
                    var updatedUrl = currentUrl.split('?')[0];
                    var pathArray = updatedUrl.split('/').filter(function(el) { return el.length != 0; });
                    var lastPart = pathArray.pop();

                    var formdata = {};
                    formdata["dynamicurl"]         = "lead/v1/common/whatsapp/verification/generate";
                    formdata["Mobile_No"]          = waMobileNo;
                    formdata["Mobile_CountryCode"] = waCountryCode;
                    formdata["Page_Name"]          = lastPart + " - Virtual Tour";
                    formdata["Plateform_Name"]     = "web";
                    formdata["RequestFrom"]        = "Website";
                    formdata["Session_ID"]         = socketId;
                    formdata["Type"]               = "Virtual Tour";

                    // Open window NOW (user gesture) — navigate after response to avoid popup blocker
                    var whatsappWindow = window.open('about:blank', '_blank');

                    $.ajax({
                        method: "POST",
                        url: "https://www.prestigeconstructions.com/api/apicall",
                        dataType: "json",
                        data: formdata,
                        headers: { 'Authorization': token },
                        success: function(response) {
                            if (response.success == true) {
                                var whatsappUrl = "";
                                if (response.data) {
                                    if (typeof response.data === 'string') {
                                        whatsappUrl = response.data;
                                    } else if (response.data.url) {
                                        whatsappUrl = response.data.url;
                                    } else if (Array.isArray(response.data) && response.data.length > 0) {
                                        var d = response.data[0];
                                        whatsappUrl = d.url || d.link || d.qrcode || d.whatsapp_url
                                                    || d.redirect_url || d.verification_url
                                                    || (typeof d === 'string' ? d : "");
                                    }
                                }
                                if (whatsappUrl) {
                                    if (whatsappWindow) {
                                        whatsappWindow.location.href = whatsappUrl; // navigate pre-opened window
                                    } else {
                                        window.open(whatsappUrl, '_blank');
                                    }
                                    showToastsuccess("Success", "WhatsApp link generated successfully.");
                                    $("#virtual-tour-sidebar").removeClass("active");
                                } else {
                                    if (whatsappWindow) { whatsappWindow.close(); }
                                    console.warn("No URL found. Full response:", JSON.stringify(response));
                                    showToast("Message", response.message || "Request sent. Check WhatsApp.");
                                }
                            } else {
                                if (whatsappWindow) { whatsappWindow.close(); }
                                showToast("Message", response.message);
                            }
                        },
                        complete: function() {
                            $submitBtn.attr("disabled", false);
                            var restoreText = $("#whatsapp_virtual").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                            $submitBtn.html(restoreText);
                        },
                        error: function(xhr, status, err) {
                            if (whatsappWindow) { whatsappWindow.close(); }
                            console.error("WhatsApp API error:", status, err, xhr.responseText);
                            showToast("Error", "Something went wrong. Please try again.");
                        }
                    });
                } // end generateWhatsAppLink

                return;
            }

            var mobileNo = $("#virtualtour_number").val();
            var countryCodeAttr = $("#virtualtour_fcountrycode option:selected").attr("data-contry_code_add");
            var is_age_consent       = $("#virtualtour_common_frm_submit input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
            var is_marketing_consent = $("#virtualtour_common_frm_submit input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

            // Step 1: Validate marketing consent before sending OTP
            var consentData = {};
            consentData["dynamicurl"]                   = "lead/v1/validatemarketingconsent";
            consentData["Mobile_No"]                    = mobileNo;
            consentData["Mobile_CountryCode"]           = countryCodeAttr;
            consentData["is_age_consent_accepted"]      = is_age_consent;
            consentData["is_marketing_consent_accepted"]= is_marketing_consent;

            $(".common_submit_btn").html("Submitting..").attr("disabled", true);

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: consentData,
                headers: { 'Authorization': token },
                success: function(consentResponse) {
                    if (consentResponse.success == true) {
                        sendEnquiryOtp(mobileNo, countryCodeAttr);
                    } else {
                        showToast("Message", consentResponse.message || "Consent validation failed.");
                        $(".common_submit_btn").html("Send OTP").attr("disabled", false);
                    }
                },
                error: function() {
                    showToast("Error", "Something went wrong during consent validation. Please try again.");
                    $(".common_submit_btn").html("Send OTP").attr("disabled", false);
                }
            });

            function sendEnquiryOtp(mobileNo, countryCodeAttr) {
                var otpFormData = {};
                otpFormData["dynamicurl"] = "employee/v2/customersendotp";
                otpFormData["Mobile_No"] = mobileNo;
                otpFormData["Mobile_CountryCode"] = countryCodeAttr;
                var emailbind = countryCodeAttr;
                if (emailbind !== "+91") {
                    otpFormData["Email"] = $("#virtualtour_email").val();
                }
                otpFormData["whatsapp_nri"] = $("#whatsapp_nri_virtualtour").is(":checked") ? 1 : 0;

                $.ajax({
                    method: "POST",
                    url: "https://www.prestigeconstructions.com/api/apicall",
                    dataType: "json",
                    data: otpFormData,
                    headers: {
                        'Authorization': token
                    },
                    beforeSend: function() {
                        $(".theme-loader").addClass("active");
                        $(".virtualtour_submitbtn").html("Submitting..");
                        $(".virtualtour_submitbtn").attr("disabled", true);
                    },
                    success: function(response) {
                        if (response.success == true) {
                            $.each(response.data, function(i, item) {
                                var userId = item._id;
                                $("#virtualtour_verify_hidden").val(userId);
                            });
                            $(".virtualtour_info_hide").addClass("is-hidden");
                            $(".virtualtour_hidden_name").text($("#virtualtour_name").val());
                            $(".virtualtour_hidden_number").text($("#virtualtour_number").val());
                            $(".virtualtour_hidden_email").text($("#virtualtour_email").val());
                            $(".virtualtour_infromation").removeClass("is-hidden");
                            showToast("Success", response.message);
                             if (otpFormData["whatsapp_nri"] === 0) {
                                 $("#virtualtour_verify_frm").find(".timer_display").hide();
                                 $("#virtualtour_verify_frm").find(".resend_otp_container").addClass("is-hidden");
                             } else {
                                 startOtpTimer();
                             }
                        } else {
                            showToast("Message", response.message);
                        }
                        $(".virtualtour_submitbtn").addClass("is-hidden");
                    },
                    complete: function() {
                        $(".virtualtour_submitbtn").html("Send OTP");
                        $(".virtualtour_submitbtn").attr("disabled", false);
                        $(".theme-loader").removeClass("active");
                    },
                    error: function(response) {}
                });
            } // end sendEnquiryOtp
        }
    });

    $("#virtualtour_verify_frm").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            virtualtour_otp_dd: {
                "required": true
            },
        },
        messages: {
            virtualtour_otp_dd: "<span class='error-msg'>Please Enter OTP</span>",
        },
        submitHandler: function(form) {
            var formdata = {};
            formdata["dynamicurl"] = "employee/v1/customerverifyotp";
            formdata["otp"] = $("#virtualtour_otp_dd").val();
            formdata["_id"] = $("#virtualtour_verify_hidden").val();

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".theme-loader").addClass("active");
                    $(".virtualtour_submitbtn").html("Submitting..");
                    $(".virtualtour_submitbtn").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                        // Hide OTP section and show VR section instead of downloading right away
                        $(".virtualtour_otp_input_section").addClass("is-hidden");
                        $(".virtualtour_vr_tour_section").removeClass("is-hidden");

                        // Save consent after successful OTP verification
                        var consentSaveData = {};
                        consentSaveData["dynamicurl"]                    = "lead/v1/common/consent/save";
                        consentSaveData["Mobile_No"]                     = $("#virtualtour_number").val();
                        consentSaveData["Mobile_CountryCode"]            = $("#virtualtour_fcountrycode option:selected").attr("data-contry_code_add");
                        consentSaveData["is_age_consent_accepted"]       = $("#virtualtour_common_frm_submit input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                        consentSaveData["is_marketing_consent_accepted"] = $("#virtualtour_common_frm_submit input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";
                        consentSaveData["VerifiedFrom"]                  = "Website";
                        consentSaveData["From"]                          = "Web";

                        $.ajax({
                            method: "POST",
                            url: "https://www.prestigeconstructions.com/api/apicall",
                            dataType: "json",
                            data: consentSaveData,
                            headers: { 'Authorization': token }
                        });

                        callVirtualTourEnquireAPI();

                        // showToast("Success", response.message);
                    } else {
                        showToast("Message", response.message);
                        $("#virtualtour_otp_dd").val("");
                    }

                },
                complete: function() {
                    $(".theme-loader").removeClass("active");
                    $(".virtualtour_submitbtn").html("Send OTP");
                    $(".virtualtour_submitbtn").attr("disabled", false);

                },
                error: function(response) {}
            });
        }
    });

    function callVirtualTourEnquireAPI(cb) {
        var enquireData = {};
        enquireData["dynamicurl"] = "managecontent/v2/enquire/create";
        enquireData["type"] = "virtualtour";
        enquireData["projectid"] = typeof ProjectID !== "undefined" ? ProjectID : "";
        enquireData["projectname"] = typeof projectname !== "undefined" ? projectname : "";
        enquireData["requestfrom"] = "web";
        enquireData["mobileno"] = $("#virtualtour_number").val() || $(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val() || "";
        enquireData["name"] = $("#virtualtour_name").val() || $(".customer_Name").filter(function() { return $(this).val() != ""; }).first().val() || "";
        enquireData["countrycode"] = $("#virtualtour_fcountrycode option:selected").attr("data-contry_code_add") || $("#virtualtour_fcountrycode").val() || "+91";
        enquireData["country"] = $("#virtualtour_fcountrycode").val() || "IN";
        enquireData["email"] = $("#virtualtour_email").val() || $(".customer_Email").filter(function() { return $(this).val() != ""; }).first().val() || "";
        enquireData["page_url"] = window.location.href;
        enquireData["project_type"] = "residentialprojects";

        $.extend(enquireData, serializeHiddenFields());
        $.extend(enquireData, getAllQueryStringParams());

        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: enquireData,
            headers: { 'Authorization': token },
            success: function(response) {
                if (typeof cb === "function") { cb(); }
            },
            error: function() {
                if (typeof cb === "function") { cb(); }
            }
        });
    }

    function virtualtour_whatsapp_callback() {
        callVirtualTourEnquireAPI(function() {
            virtualtour_download();
        });
    }

    function virtualtourresendOtp() {
        const mobileNumber = $("#virtualtour_number").val();
        const mobileCountryCode = $("#virtualtour_fcountrycode option:selected").attr("data-contry_code_add");
        const email = $("#virtualtour_email").val();
        const whatsappNri = 0;

        // Prepare form data
        const formdata = {
            dynamicurl: "employee/v2/customersendotp",
            Mobile_No: mobileNumber,
            Mobile_CountryCode: mobileCountryCode,
            whatsapp_nri: whatsappNri
        };

        // Add email only if the country code is not +91
        if (mobileCountryCode !== "+91") {
            formdata.Email = email;
        }

        // AJAX call to resend OTP
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                Authorization: token
            },
            beforeSend: function () {
                $(".resend_otp_btn_virtualtour").text("Resending...").attr("disabled", true);
            },
            success: function (response) {
                if (response.success) {
                    $("#whatsapp_nri_virtualtour").prop("checked", false);
                    const newOtpId = response.data[0]._id;
                    $("#virtualtour_verify_hidden").val(newOtpId);
                    if (mobileCountryCode !== "+91") {
                        showToast("Success", "OTP sent successfully in Email.");
                    } else {
                        showToast("Success", "OTP sent successfully.");
                    }
                    // startOtpTimer(); // Restart the timer after a successful resend
                } else {
                    showToast("Error", response.message || "Failed to resend OTP.");
                }
            },
            complete: function () {
                $(".resend_otp_btn_virtualtour").text("Resend OTP").attr("disabled", false).hide();
            },
            error: function (xhr) {
                console.error(xhr);
                showToast("Error", "Something went wrong. Please try again.");
            }
        });
    }

    $(document).on("click", ".resend_otp_btn_virtualtour", function () {
        virtualtourresendOtp();
    });

    $(document).on("click", ".open_virtual_tour_btn", function () {
        virtualtour_download();
    });

    function virtualtour_download() {
        var uploadbrochure = $("#virtualtour_download").val();
        var dataTarget = $("#virtualtour_download").attr("data-target") || "_blank";

        // Close sidebar
        $("#virtual-tour-sidebar").removeClass("active");

        // Reset form
        $('#virtualtour_common_frm_submit')[0].reset();
        $("#virtualtour_fcountrycode").val("IN").change();
        $(".virtualtour_info_hide").removeClass("is-hidden");
        $(".virtualtour_hidden_number").text("");
        $(".virtualtour_hidden_email").text("");
        $(".virtualtour_infromation").addClass("is-hidden");
        $(".virtualtour_submitbtn").removeClass("is-hidden");
        $("#virtualtour_otp_dd").val("");
        $(".virtualtour_otp_input_section").removeClass("is-hidden");
        $(".virtualtour_vr_tour_section").addClass("is-hidden");

        // Open virtual tour
        if (uploadbrochure) {
            var win = window.open(uploadbrochure, dataTarget);
            if (!win || win.closed || typeof win.closed === 'undefined') {
                window.location.href = uploadbrochure;
            }
        }
    }
    /** Virtual tour form data end */


    $(window).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth > 1024) {
            $(".hidererawindow").removeClass("is-hidden");
            $(".hidereraphone").addClass("is-hidden");
        } else {
            $(".hidereraphone").removeClass("is-hidden");
            $(".hidererawindow").addClass("is-hidden");
        }
    });

    $(document).on("click", ".addenquirechild", function() {
        $("label.error").remove();
        $("#your_name1").val("");
        $("#mobile_callback1").val("");
        $("#email_callback1").val("");
        $("#countrycode1").val("IN").change();
        $("#schedule_date1").val("");
        $("#requestcallback_time1").val("");

        $('#request_call_back_frm1')[0].reset();
        $("#countrycode1").val("IN").change();
        $(".hide_infromation1").removeClass("is-hidden");
        $(".bind_hidden_name1").text("");
        $(".bind_hidden_number1").text("");
        $(".bind_hidden_email1").text("");
        $(".show_infromation1").addClass("is-hidden");
        $(".enquiry_now_submit1").removeClass("is-hidden");
        $("#otp_dd1").val("");
    });
        $(document).off("click", ".set_map_attr").on("click", ".set_map_attr", function (e) {
        var mapUrl = $(this).attr("href") || "";

        // Prevent only if not a real URL
        if (mapUrl === "javascript:void(0);" || mapUrl === "#" || mapUrl === "") {
            e.preventDefault();
        }

        // Track
        if (typeof Moengage !== "undefined" && Moengage.track_event) {
            Moengage.track_event("Project_map_click", {
                map_url: mapUrl,
                ip_address: window.userIP || "",
                event_name: "Project_map_click",
                event_type: ""
            });
        }
    });

    

    
    var page_without_soldout = 1;
    var pageSize_without_soldout = 100;
  function projectlist_without_soldout() {
    var formdata = {};
    function getCityFromURL() {
        let parts = window.location.pathname.split("/").filter(Boolean);

        
        let index = parts.indexOf("residential-projects");

        if (index !== -1 && parts[index + 1]) {
            return parts[index + 1];
        }

        return "";
    }

    let city = getCityFromURL();

    srno = 1;
    formdata["dynamicurl"] = "managecontent/v2/projectinventorycms/list";
    formdata["propertycategory"] = "Residential";
    formdata["is_available"] = "true";
   
      formdata["CityText"] = city;
   
    formdata["page"] = page_without_soldout;
    formdata["size"] = pageSize_without_soldout;
    formdata["ProjectStatus"] = ['New Launch','Ready To Move In','Under Construction'];

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      datatype: "json",
      data: formdata,
      async: false,
      headers: {
        'Authorization': token
      },
      success: function(response) {
        $('.placeholder-card').remove();
        if (page_without_soldout == 1) {
          check = 0;
          $('#project-update-splide .splide__list').empty();
          // $(".loadMoreBtnForResidential").removeClass("is-hidden");
          // $(".loadMoreBtnForResidential").html('').html('Load more');
          // $(".loadMoreBtnForResidential").attr('disabled', false);

        }
        if (response.data.length < pageSize_without_soldout) {
          // $(".loadMoreBtnForResidential").addClass("is-hidden");
          // $(".loadMoreBtnForResidential").html('').html('No data to load more');
          // $(".loadMoreBtnForResidential").attr('disabled', true);
        }
        if (response.success == true && response.data.length > 0) {
          $.each(response.data, function(i, item) {
            check = 1;


            var projectimage = checkNUll(checkkeyexistornull(item, "ProjectImage"));
            var ProjectLogopng = checkNUll(checkkeyexistornull(item, "ProjectLogopng"));
            var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
            var Project_slug = checkNUll(checkkeyexistornull(item, "Project_slug"));
            var DisplayArea = checkNUll(checkkeyexistornull(item, "DisplayArea"));
            var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
            var ProjectLogo = checkNUll(checkkeyexistornull(item, "ProjectLogo"));
            var imagetobind = get_svg_or_png(ProjectLogopng, ProjectLogo);
            var LatLong = checkNUll(checkkeyexistornull(item, "LatLong"));
            
            

            var url = "";
            var bind_property_type_child = "";
            var url = "";
            var bind_property_type_child = "";
            if (checkNUll(checkkeyexistornull(item, "ChildProject") != "")) {
              if (item.ChildProject.length > 0) {
                var bind_propertyname_display = "";
                var uniqueValues = []; // Array to store unique values
                $.each(item.ChildProject, function(c, child) {
                  if (checkkeyexistornull(child, "propertyttype") != "") {
                    var propertyType = checkNUll(child.propertyttype);
                    if (!uniqueValues.includes(propertyType)) {
                      if (c != 0 && bind_propertyname_display !== "") {
                        bind_propertyname_display += ", ";
                      }
                      bind_propertyname_display += propertyType;
                      uniqueValues.push(propertyType); // Add propertyType to uniqueValues array
                    }
                  }
                });
                bind_property_type_child = bind_propertyname_display;
              } else {
                bind_property_type_child = checkNUll(item.PropertyTypeText);
              }
              url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/${Project_slug}`;

            } else {
              bind_property_type_child = checkNUll(item.PropertyTypeText);

              if (Project_slug == "hyde" || Project_slug == "regent") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-finsbury-park/${Project_slug}`;

              } else if (Project_slug == "apartments" || Project_slug == "villas") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-lakeside-habitat/${Project_slug}`;

              } else if (Project_slug == "the-residences" || Project_slug == "the-willows") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-park-grove/${Project_slug}`;

              } else if (Project_slug == "aspen-greens" || Project_slug == "aston-park" || Project_slug == "avalon-park" ||
                Project_slug == "eden-park" || Project_slug == "great-acres" || Project_slug == "meridian-park") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-sarjapur/${Project_slug}`;

              } else if (Project_slug == "apartments" || Project_slug == "bellagio") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-rajendra-nagar/${Project_slug}`;

              } else if (Project_slug == "apartmentss" || Project_slug == "apartment") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-rajendra-nagar/${Project_slug}`;

              } else if (Project_slug == "bellanza" || Project_slug == "siesta" || Project_slug == "forest-hills") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-mulund/${Project_slug}`;

              } else if (Project_slug == "clover-leaf" || Project_slug == "villa") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-white-meadows/${Project_slug}`;

              } 
              else if (Project_slug == "villa-in-kakkanad" || Project_slug == "apartments-in-kakkanad") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-hillside-gateway/${Project_slug}`;
              }
              else if (Project_slug == "oakwood" || Project_slug == "mulberry" || Project_slug == "mayflower") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-indirapuram/${Project_slug}`;

              }
              else {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/${Project_slug}`;
              }

            }
          city = city.charAt(0).toUpperCase() + city.slice(1);

          $(".bind_city_name").text("Properties in " + city);
            var propertytype = "";
            if (checkNUll(bind_property_type_child) != "") {
              propertytype = `<li>
                                                    <div class="project-configurations-items">
                                                        <div class="project-configurations-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-skyscraper" width="26" height="26" viewBox="0 0 26 26" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M3 21l18 0"></path>
                                                                <path d="M5 21v-14l8 -4v18"></path>
                                                                <path d="M19 21v-10l-6 -4"></path>
                                                                <path d="M9 9l0 .01"></path>
                                                                <path d="M9 12l0 .01"></path>
                                                                <path d="M9 15l0 .01"></path>
                                                                <path d="M9 18l0 .01"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="project-configurations-desc">
                                                            <h4>Project Type</h4>
                                                            <span>${bind_property_type_child}</span>
                                                        </div>
                                                    </div>
                                                </li>`;
            }
            var attributes = "";
            if (checkNUll(item.bedroomdisplaytext) != "") {
              attributes = `<li>
                                                        <div class="project-configurations-items">
                                                            <div class="project-configurations-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-inner" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                    <path d="M4 12l16 0"></path>
                                                                    <path d="M12 4l0 16"></path>
                                                                    <path d="M4 4l0 .01"></path>
                                                                    <path d="M8 4l0 .01"></path>
                                                                    <path d="M16 4l0 .01"></path>
                                                                    <path d="M20 4l0 .01"></path>
                                                                    <path d="M4 8l0 .01"></path>
                                                                    <path d="M20 8l0 .01"></path>
                                                                    <path d="M4 16l0 .01"></path>
                                                                    <path d="M20 16l0 .01"></path>
                                                                    <path d="M4 20l0 .01"></path>
                                                                    <path d="M8 20l0 .01"></path>
                                                                    <path d="M16 20l0 .01"></path>
                                                                    <path d="M20 20l0 .01"></path>
                                                                </svg>
                                                            </div>
                                                            <div class="project-configurations-desc">
                                                                <h4>Bedrooms</h4>
                                                                <span>${item.bedroomdisplaytext}</span>
                                                            </div>
                                                        </div>
                                                    </li>`;
            }

            var displayprice = "";
            if (checkNUll(item.price_on_request) == "true" || checkNUll(item.price_on_request) == true) {
              displayprice = `<span class="project-price open_enquirey_sidebar cursor-pointer" data-projectid='${item.ProjectID}' data-projectname='${item.ProjectName}'>Price on Request</span>`;
              $("#enquiry_country").change(function () {
                  toggleWhatsAppVisibility();
              });
              function toggleWhatsAppVisibility() {
                const selectedCountryCode = $("#enquiry_country option:selected").val();
                if (selectedCountryCode === "IN") {
                    $(".is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
                    $("#resend_otp_btn").addClass("is-hidden"); // Hide Resend OTP button
                $("#timer_display").hide(); // Hide the timer
                }
              }
            } else {
              displayprice = `<span class="project-price"> ${checkNUll(item.DisplayPrice)}</span>`
            }

            var ProjectStatus = "";
            if (checkNUll(item.ProjectStatus) != "") {
              var class_color = get_color_for_status(item.ProjectStatus);
              ProjectStatus = `<div class="project-status ${class_color}"><span>${checkNUll(item.ProjectStatus)}</span></div>`;
            }
            var developmentsize = "";
            if (checkNUll(item.Size) != "") {
              developmentsize = `<li>
                                                            <div class="project-configurations-items">
                                                                <div class="project-configurations-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M5 7l0 10"></path>
                                                                        <path d="M7 5l10 0"></path>
                                                                        <path d="M7 19l10 0"></path>
                                                                        <path d="M19 7l0 10"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="project-configurations-desc">
                                                                    <h4>Development Size</h4>
                                                                    <span>${item.Size}</span>
                                                                </div>
                                                            </div>
                                                        </li>`;

            }
            var units = "";
            if (checkNUll(item.total_unit) != "") {
              units = `<li>
                                                <div class="project-configurations-items">
                                                    <div class="project-configurations-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                            <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                            <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                            <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                        </svg>
                                                    </div>
                                                    <div class="project-configurations-desc">
                                                        <h4>Total Units</h4>
                                                        <span>${item.total_unit}</span>
                                                    </div>
                                                </div>
                                            </li>`;
            }
            var href = "javascript:void(0);"
            if (checkNUll(item.location_url_link) != "") {
              if (LatLong.coordinates.length > 0) {

                lat = LatLong.coordinates[0];
                lng = LatLong.coordinates[1];
                href = checkNUll(item.location_url_link);
              }
            }
            var bind_area = '';
            if (DisplayArea != "") {
              bind_area = `<span><a href="${href}" target="_blank">${DisplayArea}, ${CityText}</a></span>`;
            } else {
              if (CityText != "") {
                bind_area = `<span><a href="${href}" target="_blank">${CityText}</a></span>`;
              }
            }

            var svg_alt_text = checkNUll(checkkeyexistornull(item, "svglogo_alt_text"));
            var pnglogo_alt_text = checkNUll(checkkeyexistornull(item, "pnglogo_alt_text"));
            var imagetobindalttext = get_svg_or_png_alttext(ProjectLogopng, ProjectLogo, svg_alt_text, pnglogo_alt_text);
            var logoalttextbind = "";
            if (checkNUll(svg_alt_text) !== "") {
              logoalttextbind = "alt='" + imagetobindalttext + "'";
            } else {
              logoalttextbind = "";
            }
            var alt_text = checkNUll(checkkeyexistornull(item, "Featured_image_alt_text"));
            var alttextbind = "";
            if (checkNUll(alt_text) !== "") {
              alttextbind = "alt='" + alt_text + "'";
            } else {
              alttextbind = "";
            }

            var logobind = "";
            if (checkNUll(imagetobind) != "") {
              var logobind = `  <div class="project-logo">
                                            <picture>
                                                <source srcset="${imagetobind}" type="image/webp">
                                                <source srcset="${imagetobind}" type="image/png">
                                                <img ${i < 6 ? '' : 'loading="lazy"'} src="${imagetobind}" ${logoalttextbind} width="70" height="70">
                                            </picture>
                                        </div>`;
            } else {
              var logobind = '';
            }
            // STEP 1: Preload first 6 images
            if (i < 6) {
              const preloadWebP = changeToWebP(projectimage);
              $('head').append(`<link rel="preload" as="image" href="${preloadWebP}" fetchpriority="high">`);
            }

            var residentialproject = `<li class="splide__slide">
                  <div class="project-vertical-block">
                    <a href="${url}" class="block-link"></a>
                    ${ProjectStatus}
                    <div class="projects-img">
                        <picture>
                            <source srcset="${changeToWebP(projectimage)}" type="image/webp">
                            <source srcset="${projectimage}" type="image/jpg">
                            <img ${i < 6 ? '' : 'loading="lazy"'} class="img-fixed-ratio" src="${changeToWebP(projectimage)}" ${alttextbind} width="470" height="260">
                        </picture>
                        ${logobind}
                    </div>
                    <div class="project-title-and-price mt-4">
                        <div class="project-title">
                        <h2><a href="${url}" class="block-link"></a>${checkNUll(item.ProjectName)}</h2>
                        </div>
                        <div class="project-desc-price">
                            ${bind_area}
                            ${displayprice}
                        </div>
                    </div>
                    <div class="project-configurations">
                        <ul>
                           ${propertytype}
                           ${attributes}
                           ${developmentsize}
                           ${units}
                        </ul>
                    </div>
                    <div class="project-contact-detail">
                        <ul>
                            <li class="project-contact-item">
                                <a href="javascript:void(0);" data-alttextbind="${checkNUll(alttextbind)}" data-logoalttextbind="${checkNUll(logoalttextbind)}" data-image="${checkNUll(item.ProjectImage)}" data-imagelogo="${checkNUll(imagetobind)}" data-name="${checkNUll(item.ProjectName)}" data-address="${checkNUll(item.Address)}" data-price="${checkNUll(item.DisplayPrice)}" data-projectid="${checkNUll(item.ProjectID)}" data-priceonrequest="${checkNUll(item.price_on_request)}" data-citytext="${checkNUll(item.CityText)}" class="theme-btn line-btn open_enquiry_sidebar" open-sidebar="enquire-now-sidebar">
                                    <div class="project-contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M10 14l11 -11"></path>
                                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                                        </svg>
                                    </div>
                                    <span class="addenquire">Enquire Now</span>
                                </a>
                            </li>
                            <li class="project-contact-item">
                              <a href="javascript:void(0);"
                                    data-alttextbind="${checkNUll(alttextbind)}" 
                                    data-logoalttextbind="${checkNUll(logoalttextbind)}"
                                    data-image="${checkNUll(item.ProjectImage)}" 
                                    data-imagelogo="${checkNUll(item.ProjectLogopng)}" 
                                    data-name="${checkNUll(item.ProjectName)}" 
                                    data-address="${checkNUll(item.Address)}" 
                                    data-price="${checkNUll(item.DisplayPrice)}" 
                                    data-projectid="${checkNUll(item.ProjectID)}" 
                                    data-projectname="${checkNUll(item.ProjectName)}" 
                                    data-priceonrequest="${checkNUll(item.price_on_request)}"
                                    data-citytext="${checkNUll(item.CityText)}"
                                  class="theme-btn line-btn open_booking_sidebar" open-sidebar="book-a-site-visit-sidebar">
                                      <div class="project-contact-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                          </svg>
                                      </div>
                                      <span class="addsitevisit">Book a Site Visit</span>
                                  </a>
                              </li>
                            <li class="project-price-and-contact-item hide_contact_number${i}">
                                <a href="#" class="theme-btn btn-icon bind_contcat_number${i}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                </li>`;
            $('#project-update-splide .splide__list').append(residentialproject);
            var ContactNumber = checkkeyexistornull(item, "ContactNumber");
            if (checkNUll(ContactNumber) != "") {
              ContactNumber = ContactNumber.replace(/\s/g, '');
              $(".hide_contact_number" + i).removeClass("is-hidden");
              $(".bind_contcat_number" + i).attr("href", "tel:" + ContactNumber);
            } else {
              $(".hide_contact_number" + i).addClass("is-hidden");
            }
          });

          new Splide('#project-update-splide', {
            gap: '30px',
            type: 'slide',
            perPage: 3,
            perMove: 1,
            pagination: false,
            breakpoints: {
              1408: {
                perPage: 3,
              },
              1216: {
                perPage: 3,
              },
              1024: {
                perPage: 2,
                gap: '24px',
              },
              768: {
                perPage: 1,
                gap: '20px',
              },
            },
          }).mount();
        }
      },
      
      complete: function() {
       

      }
    })
  }
  /* Residential Projects List End*/

  const stickyMenu = document.querySelector(".projects-properties-menu");
  const stickyMenuClass = "sticky-menu";

  if (stickyMenu) {
      window.addEventListener("scroll", () => {
          const currentScroll = window.scrollY || window.pageYOffset;

          if (currentScroll > 100) {
              stickyMenu.classList.add(stickyMenuClass);
          } else if (currentScroll < 50) {
              stickyMenu.classList.remove(stickyMenuClass);
          }
      });
  }