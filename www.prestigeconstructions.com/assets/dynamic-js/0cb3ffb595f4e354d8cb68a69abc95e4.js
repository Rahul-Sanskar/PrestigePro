$(document).ready(function() {
        getallcontact();
        get_country();
        get_department();
        
    });

    var firstCorporateItem = true;

    function getallcontact() {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/contact/list";
        formdata["is_available"] = true;
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(response) {

                $('#branch-corporate').html('');
                $('#branch-domestic').html('');
                $('#branch-international').html('');
                if (response.success == true && response.data.length > 0) {
                    var srno1 = 1;
                    var srno2 = 1;
                    var srno3 = 1;
                    $.each(response.data, function(i, item) {
                        var contact_image = checkkeyexistornull(item, "contactimage");
                        var city = checkkeyexistornull(item, "city");
                        var phone = checkNUll(checkkeyexistornull(item, "phone"));
                        var tollfree = checkNUll(checkkeyexistornull(item, "tollfree"));

                        var emailbind = "";
                        var contactemail = "";
                        $.each(item.emaillist, function(j, item2) {
                            var email = checkNUll(checkkeyexistornull(item2, "email"));
                            emailbind += `<span class="is-size-7 email-text"><a href="mailto:${email}">${email}</a></span><br>`;
                            if (item.is_corpate == true && firstCorporateItem == true) {
                                contactemail += `<a href="mailto:${email}" class="is-size-7 email-text">${email}</a>`;
                            }
                        });

                        var contactbind = "";
                        var contactmobile = "";
                        var contactlist = checkNUll(checkkeyexistornull(item, "contactlist"));
                        $.each(contactlist, function(j, item3) {
                            var country_code = checkNUll(checkkeyexistornull(item3, "country_code"));
                            var state_code = checkNUll(checkkeyexistornull(item3, "state_code"));
                            var mobile_no = checkNUll(checkkeyexistornull(item3, "mobile_no"));
                            contactbind += `<span class="is-size-7"><a href="tel:${country_code}${state_code}${mobile_no}">${country_code} ${state_code} ${mobile_no}</a></span><br>`;
                            if (item.is_corpate == true && firstCorporateItem == true) {
                                contactmobile += ` <a href="tel:${country_code}${state_code}${mobile_no}" class="is-size-7">${country_code} ${state_code} ${mobile_no}</a><br>`;
                            }
                        });

                        var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
                        var alttextbind = "";
                        if (checkNUll(alt_text) !== "") {
                            alttextbind = "alt='" + alt_text + "'";
                        } else {
                            alttextbind = "";
                        }

                        var bind_image = "";
                        if (checkNUll(contact_image) != "") {
                            bind_image = `<picture>
                                                <source srcset="${changeToWebP(contact_image)}" type="image/webp">
                                                <source srcset="${contact_image}" type="image/jpg">
                                                <img loading="lazy" src="${changeToWebP(contact_image)}" ${alttextbind} width="740" height="420">
                                            </picture>`;
                        }
                        var location_link = checkNUll(checkkeyexistornull(item, "location_link"));
                        var url = "";
                        if (checkNUll(location_link) !== "") {
                            url = `<span class="is-size-7"><a href="${location_link}" target="_blank">${item.address}</a></span>`;
                        } else {
                            url = `<span class="is-size-7"><a href="javascript:void(0);">${item.address}</a></span>`;
                        }
                        if (item.is_india == true) {
                            if (item.is_branch == true) {
                                var bind_city = "";
                                if (checkNUll(city) != "") {
                                    bind_city = `<h5 class="golden-text mb-5">${srno1}. ${city}</h5>`;
                                }
                                var row = `<div class="branch-office-box p-relative overflow-hidden mb-5">
                                            <div class="branch-office-bg">
                                                ${bind_image}
                                            </div>
                                            <div class="branch-office-detail p-5 white-bg gray-border p-relative">
                                           ${bind_city}
                                                <div class="branch-office-item">
                                                    <h6>Location</h6>
                                                    ${url}
                                                </div>
                                                <div class="branch-office-item">
                                                    <h6>Contact</h6>
                                                    ${contactbind}
                                                </div>
                                            <div class="branch-office-item">
                                                    <h6>Email</h6>
                                                    ${emailbind}
                                                </div>
                                            </div>
                                        </div>`;
                                srno1++;
                                $('#branch-domestic').append(row);
                            }
                        }
                        if (item.is_india == false) {
                            if (item.is_branch == true) {
                                var bind_city = "";
                                if (checkNUll(city) != "") {
                                    bind_city = `<h5 class="golden-text mb-5">${srno2}. ${city}</h5>`;
                                }
                                var row = `<div class="branch-office-box p-relative overflow-hidden mb-5">
                                        <div class="branch-office-bg">
                                        ${bind_image}
                                        </div>
                                        <div class="branch-office-detail p-5 white-bg gray-border p-relative">
                                        ${bind_city}
                                            <div class="branch-office-item">
                                                <h6>Location</h6>
                                                ${url}
                                            </div>
                                            <div class="branch-office-item">
                                                    <h6>Contact</h6>
                                                    ${contactbind}
                                             </div>
                                            
                                            <div class="branch-office-item">
                                                <h6>Email</h6>
                                                ${emailbind}
                                            </div>
                                        </div>
                                    </div>`;
                                srno2++;
                                $('#branch-international').append(row);
                            }
                        }
                        if (item.is_corpate === true) {
                            if (firstCorporateItem == true || firstCorporateItem == "true") {
                                var bind_city = "";
                                if (checkNUll(city) != "") {
                                    bind_city = `<h5 class="golden-text mb-5">${srno3}. ${city}</h5>`;
                                }
                                var bindcontactdata = `<div class="branch-office-box p-relative overflow-hidden mb-5">
                                            <div class="branch-office-bg">
                                                ${bind_image}
                                            </div>
                                            <div class="branch-office-detail p-5 white-bg gray-border p-relative">
                                           ${bind_city}
                                                <div class="branch-office-item">
                                                    <h6>Location</h6>
                                                    ${url}
                                                </div>
                                                <div class="branch-office-item">
                                                    <h6>Contact</h6>
                                                    ${contactbind}
                                                </div>
                                            <div class="branch-office-item">
                                                    <h6>Email</h6>
                                                    ${emailbind}
                                                </div>
                                            </div>
                                        </div>`;
                                srno3++;
                                $("#branch-corporate").append(bindcontactdata);
                                firstCorporateItem = false;
                            }
                        }

                    });
                } else {
                    var row = `<div class="sv-qr-code-detail border border-gray p-3">
                                NO DATA FOUND
                                </div>`;
                    $('#branch-domestic').html("").append(row);
                    $('#branch-international').html("").append(row);
                }
            }
        });
    }

    /** Request Call back Start */


    function get_country() {

        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/countrycode/list";
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $("#country_dd").html("");
                $("#country_dd").html("<option value=''>Country</option>");

                $.each(result.data, function(i, item) {
                    // if (item.description == "India") {
                    //     var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '" selected>' + item.country_code_number + '</option>';
                    //     $("#country_dd").parent().addClass("focused");
                    //     $("#number_dd").prop("maxlength", "10");
                    // } else {
                        var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '">' + item.country_code_number + '&nbsp' + item.description+'</option>';
                    // }

                    $("#country_dd").append(obj);
                });

            },
            complete: function() {
                get_city("IN");
                getLocationAndCityName();
            }
        });
    }

    function get_city(code) {

        var formdata = {};
        formdata["dynamicurl"] = "lead/v1/city/list";
        formdata["country_code"] = code;
        formdata["search"] = "";
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $("#city_dd").html("");
                $("#city_dd").html("<option value='' selected>City</option>");
                $.each(result.data, function(i, item) {
                    var obj = '<option data-description="' + item.text + '" value="' + item.state_code + '">' + item.text + '</option>';
                    $("#city_dd").append(obj);
                });

            },
            complete: function() {

            }
        });
    }
    $(document).on('change', '#department', function () {
    var selectedText = $("#department option:selected").text().toLowerCase();

        if (selectedText === "residential") {
            // $(".hide_infromation").eq(1).show(); // Show Request Category
            $(".Request_Category").removeClass("is-hidden"); 
            get_Request_Category(); // Load data
        } else {
            // $(".Request_Category").eq(1).hide(); // Hide Request Category
            $(".Request_Category").addClass("is-hidden"); 
            $(".project_inquiry").addClass("is-hidden"); 

            // $("#description").html("<option value=''>Select Request Category</option>");
        }
    });
    $(document).on('change', '#description', function () {
    var selectedText = $("#description option:selected").text().toLowerCase();

    if (selectedText === "project inquiry" || selectedText === "land acquisition") {
            // $(".hide_infromation").eq(1).show(); // Show Request Category
            $(".project_inquiry").removeClass("is-hidden"); 
            get_project_inquiry(); // Load data
        } else {
            // $(".project_inquiry").eq(1).hide(); // Hide Request Category
            $(".project_inquiry").addClass("is-hidden"); 

            // $("#description").html("<option value=''>Select Request Category</option>");
        }
    });
    function get_department() {

        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/department/list";
        formdata["is_available"] = "true";
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $("#department").html("");
                $("#department").html("<option value=''>Select Department</option>");
                $.each(result.data, function(i, item) {
                    var obj = '<option data-description="' + item.description + '" value="' + item._id + '">' + item.description + '</option>';
                    $("#department").append(obj);
                });

            },
            complete: function() {

            }
        });
    }
    function get_Request_Category() {

        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/requestcategory/list";
        formdata["is_available"] = "true";
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $("#description").html("");
                $("#description").html("<option value=''>Select Request Category</option>");
                $.each(result.data, function(i, item) {
                    var obj = '<option data-description="' + item.description + '" value="' + item._id + '">' + item.description + '</option>';
                    $("#description").append(obj);
                });

            },
            complete: function() {

            }
        });
    }
    function get_project_inquiry() {

        var formdata = {};
        formdata["dynamicurl"] = "lead/v2/projectlist";
        formdata["is_available"] = "true";
        formdata["PropertyCategory"] = "Residential";
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                
                
                $("#project_inquiry").html("");
                $("#project_inquiry").html("<option value=''>Select Project</option>");
                $.each(result.data, function(i, item) {
                    
                    // var obj = '<option data-description="' + item.description + '" value="' + item._id + '">' + item.description + '</option>';
                    // var obj = `<option class="text-capitalize" value="${item._id}" data-projectcode="${item.ProjectID}" data-description="${item.ProjectName}">${item.ProjectName}</option>`;
                    var obj = `<option class="text-capitalize" value="${item.ProjectID}" data-projectcode="${item.ProjectID}" data-description="${item.ProjectName}">${item.ProjectName}</option>`;
                    $("#project_inquiry").append(obj);
                });

            },
            complete: function() {

            }
        });
    }




    $('#number_dd').bind("cut copy paste", function(e) {
        e.preventDefault();
    });
    $("#country_dd").change(function() {

        countryvalue = $("#country_dd").val();
        if (countryvalue != null && countryvalue != undefined && countryvalue != "") {
            if (countryvalue == "IN") {
                $("#number_dd").val("");
                $("#number_dd").prop("maxlength", "10");
            } else {
                $("#number_dd").val("");
                $("#number_dd").prop("maxlength", "15");
            }

        }
        get_city(countryvalue);
        function toggleWhatsAppVisibility() {
            const selectedCountryCode = $("#country_dd option:selected").val();
            if (selectedCountryCode === "IN") {
                $(".is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
                $(".resend_otp_btn_request_call_back").addClass("is-hidden"); // Hide Resend OTP button
            $("#timer_display").hide(); // Hide the timer
            } else {
                $(".is_whatsapp").removeClass("is-hidden"); // Show WhatsApp section
                $(".resend_otp_btn_request_call_back").removeClass("is-hidden"); // Show Resend OTP button
                $(".resend_otp_btn_request_call_back").show(); // Show Resend OTP button
                // startOtpTimer(); // Start the OTP timer
            }
        }
        function whatsappNRI(){

        }

        // Trigger toggle on dropdown change
        $("#country_dd").change(function () {
            toggleWhatsAppVisibility();
        });
    });
    $(".numbervalidate").keypress(function(e) {
        var keyCode = e.keyCode || e.which;
        var regex = /^[0-9]$/;
        var isValid = regex.test(String.fromCharCode(keyCode));
        if (!isValid) {

        }
        return isValid;
    });

    $("#request_call_back_frm").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            name_dd: {
                "required": true,
                textOnly: true
            },
            number_dd: {
                "required": true,
                minlength: 9,
            },
            country_dd: {
                "required": true
            },
            email_dd: {
                "required": true
            },
            city_dd: {
                "required": true
            },
            department: {
                "required": true
            },
            message_dd: {
                "required": true
            },
            agree_to_be_contacted : {
              "required": true
            }
        },
        messages: {
            name_dd: {
                required: "<span class='error-msg'>Please Enter Name</span>",
                textOnly: "<span class='error-msg'>Please enter only text</span>"
            },
            number_dd: {
                required: "<span class='error-msg'>Please Enter Mobile number</span>",
                minlength: "<span class='error-msg'>Please Edit Digits</span>"
            },
            country_dd: "<span class='error-msg'>Please Enter Country Code</span>",
            email_dd: "<span class='error-msg'>Please Enter Email</span>",
            city_dd: "<span class='error-msg'>Please Select City</span>",
            department: "<span class='error-msg'>Please Select Department</span>",
            message_dd: "<span class='error-msg'>Please Enter Message</span>",
            agree_to_be_contacted :"<span class='error-msg is-static mt-1 w-fit-content'>Please Accept</span>",
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

            if ($("#whatsapp_detail").is(":checked")) {
                initSocket();
                activeWhatsAppCallback = requestcallback;
                activeWhatsAppFormSelector = "#request_call_back_frm";

                var waMobileNo    = $("#number_dd").val();
                var waCountryCode = $("#country_dd option:selected").attr("data-contry_code_add");
                if (!waCountryCode) { waCountryCode = "+91"; }
                var wa_age_consent       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                var wa_marketing_consent = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

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
                            var restoreText = $("#whatsapp_detail").is(":checked") ? "Share Link" : "Send OTP";
                            $submitBtn.html(restoreText).attr("disabled", false);
                        }
                    },
                    error: function() {
                        showToast("Error", "Something went wrong during consent validation. Please try again.");
                        var restoreText = $("#whatsapp_detail").is(":checked") ? "Share Link" : "Send OTP";
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
                    formdata["Page_Name"]          = lastPart + " - Contact Us Request Call Back";
                    formdata["Plateform_Name"]     = "web";
                    formdata["RequestFrom"]        = "Website";
                    formdata["Session_ID"]         = socketId;
                    formdata["Type"]               = "Contact Us";

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
                                    whatsappWindow.location.href = whatsappUrl;
                                    showToastsuccess("Success", "WhatsApp link generated successfully.");
                                    $("#enquire-now-sidebar").removeClass("active");
                                } else {
                                    whatsappWindow.close();
                                    console.warn("No URL found. Full response:", JSON.stringify(response));
                                    showToast("Message", response.message || "Request sent. Check WhatsApp.");
                                }
                            } else {
                                whatsappWindow.close();
                                showToast("Message", response.message);
                            }
                        },
                        complete: function() {
                            $submitBtn.attr("disabled", false);
                            var restoreText = $("#whatsapp_detail").is(":checked") ? "Share Link" : "Send OTP";
                            $submitBtn.html(restoreText);
                        },
                        error: function(xhr, status, err) {
                            whatsappWindow.close();
                            console.error("WhatsApp API error:", status, err, xhr.responseText);
                            showToast("Error", "Something went wrong. Please try again.");
                        }
                    });
                }

                return;
            }

            var mobileNo = $("#number_dd").val();
            var countryCodeAttr = $("#country_dd option:selected").attr("data-contry_code_add");
            var is_age_consent       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
            var is_marketing_consent = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

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
                        $submitBtn.html("Send OTP").attr("disabled", false);
                    }
                },
                error: function() {
                    showToast("Error", "Something went wrong during consent validation. Please try again.");
                    $submitBtn.html("Send OTP").attr("disabled", false);
                }
            });

            function sendEnquiryOtp(mobileNo, countryCodeAttr) {
                formdata["dynamicurl"] = "employee/v2/customersendotp";
                formdata["Mobile_No"] = $("#number_dd").val();
                formdata["Mobile_CountryCode"] = $("#country_dd option:selected").attr("data-contry_code_add");
                var emailbind = $("#country_dd option:selected").attr("data-contry_code_add");
                if (emailbind !== "+91") {
                    formdata["Email"] = $("#email_dd").val();
                }
                formdata["whatsapp_nri"] = $("#whatsapp_nri_request_call_back").is(":checked") ? 1 : 0;

                $.ajax({
                    method: "POST",
                    url: "https://www.prestigeconstructions.com/api/apicall",
                    dataType: "json",
                    data: formdata,
                    headers: {
                        'Authorization': token
                    },
                    beforeSend: function() {
                        $submitBtn.html("Submitting..");
                        $submitBtn.attr("disabled", true);
                    },
                    success: function(response) {
                        if (response.success == true) {
                            $.each(response.data, function(i, item) {
                                var userId = item._id;
                                $("#otp_verify").val(userId);
                            });
                            $(".hide_infromation").addClass("is-hidden");
                            $(".bind_hidden_name").text($("#name_dd").val());
                            $(".bind_hidden_number").text($("#number_dd").val());
                            $(".bind_hidden_email").text($("#email_dd").val());
                            $(".show_infromation").removeClass("is-hidden");
                            showToast("Success", response.message);
                            if (formdata["whatsapp_nri"] === 0) {
                                $(".timer_display").hide();
                                $(".resend_otp_container").addClass("is-hidden");
                            } else {
                                startOtpTimer();
                            }
                        } else {
                            showToast("Message", response.message);
                        }
                        $submitBtn.addClass("is-hidden");
                    },
                    complete: function() {
                        $("#enquire-now-sidebar").removeClass("active");
                    },
                    error: function(response) {}
                });
            }
        }
    });


    function requestcallbackresendOtp() {
        const mobileNumber = $("#number_dd").val();
        const mobileCountryCode = $("#country_dd option:selected").attr("data-contry_code_add");
        const email = $("#email_dd").val();
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
                $(".resend_otp_btn_request_call_back").text("Resending...").attr("disabled", true);
            },
            success: function (response) {
                if (response.success) {
                  // Update the OTP ID in the hidden input field
                  $("#whatsapp_nri_request_call_back").prop("checked",false);
                  const newOtpId = response.data[0]._id;
                    $("#otp_verify").val(newOtpId);
                    // console.log("New OTP _id:", newOtpId);
                    showToast("Success", "OTP sent successfully in Email.");
                    // startOtpTimer(); // Restart the timer after a successful resend
                } else {
                    showToast("Error", response.message || "Failed to resend OTP.");
                }
            },
            complete: function () {
                $(".resend_otp_btn_request_call_back").text("Resend OTP").attr("disabled", false).hide();
                // setTimeout(() => {
                //   $(".resend_otp_btn_request_call_back").text("Resending...").attr("disabled", true).hide();
                // }, 2000);
            },
            error: function (xhr) {
                console.error(xhr);
                showToast("Error", "Something went wrong. Please try again.");
            }
        });
    }

    // Event Listener for Resend OTP button
    $(".resend_otp_btn_request_call_back").on("click", function () {
      requestcallbackresendOtp();
    });
    $("#otp_verify_frm").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            otp_dd: {
                "required": true
            },
        },
        messages: {
            otp_dd: "<span class='error-msg'>Please Enter OTP</span>",
        },
        submitHandler: function(form) {
            var formdata = {};
            formdata["dynamicurl"] = "employee/v1/customerverifyotp";
            formdata["otp"] = $("#otp_dd").val();
            formdata["_id"] = $("#otp_verify").val();

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".otp_submit_btn").html("Submitting..");
                    $(".otp_submit_btn").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                        requestcallback();
                        // showToast("Success", response.message);

                        var consentSaveData = {};
                        consentSaveData["dynamicurl"]                    = "lead/v1/common/consent/save";
                        consentSaveData["Mobile_No"]                     = $("#number_dd").val();
                        consentSaveData["Mobile_CountryCode"]            = $("#country_dd option:selected").attr("data-contry_code_add");
                        consentSaveData["is_age_consent_accepted"]       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                        consentSaveData["is_marketing_consent_accepted"] = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";
                        consentSaveData["VerifiedFrom"]                  = "Website";
                        consentSaveData["From"]                          = "Web";

                        $.ajax({
                            method: "POST",
                            url: "https://www.prestigeconstructions.com/api/apicall",
                            dataType: "json",
                            data: consentSaveData,
                            headers: { 'Authorization': token }
                        });

                    } else {
                        showToast("Message", response.message);
                        $("#otp_dd").val("");
                    }

                },
                complete: function() {
                    $(".otp_submit_btn").html("Submit");
                    $(".otp_submit_btn").attr("disabled", false);
                    $("#enquire-now-sidebar").removeClass("active");
                },
                error: function(response) {}
            });
        }
    });

    function requestcallback() {
        var formdata = {};

        // API NOT MEARGED IN DEV

        formdata["dynamicurl"] = "managecontent/v2/contactsusrequestcallback/create";
        // formdata["customer_id"] = CustomerId;
        // formdata["type"] = "requestcallback";
        formdata["mobile_no"] = $("#number_dd").val();
        formdata["requestfrom"] = "web";
        formdata["name"] = $("#name_dd").val();
        formdata["countrycode"] = $("#country_dd option:selected").attr("data-contry_code_add");
        formdata["country"] = $("#country_dd option:selected").attr("data-description");
        formdata["cityid"] = $("#city_dd").val();
        formdata["citytext"] = $("#city_dd option:selected").attr("data-description");
        formdata["email"] = $("#email_dd").val();
        formdata["message"] = $("#message_dd").val();
        formdata["departmentid"] = $("#department").val();
        formdata["department"] = $("#department option:selected").attr("data-description");
        formdata["descriptionid"] = $("#description").val();
        formdata["request_category_name"] = $("#description option:selected").attr("data-description");
        formdata["project_id"] = $("#project_inquiry").val();
        formdata["project_name"] = $("#project_inquiry option:selected").attr("data-description");
        formdata["whatsapp_nri"] = $("#whatsapp_nri_request_call_back").is(":checked") ? 1 : 0;
        formdata["page_url"] = window.location.href;
        if ($("input[name='agree_to_be_contacted']").is(":checked")) {
            formdata["marketing_update_received"] = "yes";
        }
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
            beforeSend: function() {
                $(".contact_submit").html("Submitting..");
                $(".contact_submit").attr("disabled", true);
            },
            success: function(response) {
                if (response.success == true) {
                    $('#request_call_back_frm')[0].reset();
                    $("#country_dd").val("IN").change();
                    $(".hide_infromation").removeClass("is-hidden");
                    $(".bind_hidden_name").text("");
                    $(".bind_hidden_number").text("");
                    $(".bind_hidden_email").text("");
                    $(".show_infromation").addClass("is-hidden");
                    $(".contact_submit").removeClass("is-hidden");
                    $("#otp_dd").val("");
                    $("#city_dd").val("").change();
                    $("#department").val("").change();

                    showToast("Success", response.message);
                } else {
                    showToast("Message", response.message);
                    $('#request_call_back_frm')[0].reset();
                    $("#country_dd").val("IN").change();
                }
            },
            complete: function() {
                $(".contact_submit").html("Send OTP");
                $(".contact_submit").attr("disabled", false);
                $("#enquire-now-sidebar").removeClass("active");
            },
            error: function(response) {}
        });
    }
    /** Request Call back end */