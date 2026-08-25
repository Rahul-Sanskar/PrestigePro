/** Request Call back Start */
$(document).ready(function() {
    get_country();
    get_location();
    get_property_type();
    get_source();
    /** Cookie Binding Start  **/
    // Function to get cookies start

    (function() {
        /** Cookie Binding Start **/
        // Function to get a single cookie
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        }

        // Function to get multiple cookies
        function getCookies(cookieNames) {
            const cookies = {};
            cookieNames.forEach((name) => {
                cookies[name] = getCookie(name);
            });
            return cookies;
        }

        // Function to check for null, undefined, or empty values
        function checkNUll(value) {
            return value != null && value !== 'null' && value !== 'undefined' ? value : '';
        }

        // List of cookie names
        const cookieNamesList = [
            'customer_FirstName',
            'customer_LastName',
            'customer_Email',
            'customer_Mobile',
            'customer_Mobile_CountryCode',
            'customer_Country_Code'
        ];

        // Retrieve cookies
        const userCookies = getCookies(cookieNamesList);

        // Check if the cookies are valid and not empty
        if (userCookies && Object.keys(userCookies).length > 0) {
            try {
                // Decode and assign cookie values
                const customer_FirstName = decodeURIComponent(userCookies['customer_FirstName'] || '');
                const customer_LastName = decodeURIComponent(userCookies['customer_LastName'] || '');
                const customer_Email = decodeURIComponent(userCookies['customer_Email'] || '');
                const customer_Mobile = decodeURIComponent(userCookies['customer_Mobile'] || '');
                const customer_Mobile_CountryCode = decodeURIComponent(userCookies[
                    'customer_Mobile_CountryCode'] || '');
                const customer_Country_Code = decodeURIComponent(userCookies['customer_Country_Code'] ||
                    '');


                // Combine first name and last name
                const customer_fullname = checkNUll(customer_FirstName) + "" + checkNUll(customer_LastName);

                // Populate form fields with values
                setTimeout(() => {
                    // Additional logic for customer_Country_Code
                    if (checkNUll(customer_Country_Code) !== "" && checkNUll(
                            customer_Country_Code) != null) {
                        $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
                    }

                    $(".customer_Mobile").val(customer_Mobile);
                    $(".customer_fullname").val(customer_fullname);
                    $(".customer_Email").val(customer_Email);

                }, 2500);

            } catch (e) {
                console.error("Error processing cookies: ", e);
            }
        }

        /** Cookie Binding End **/
    })();


    // Function to get cookies end
    /** Cookie Binding End  **/
});

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
            $("#countrycode").html("");
            $("#countrycode").html("<option value=''>Country</option>");

            $.each(result.data, function(i, item) {
                // if (item.description == "India") {
                //     var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '" selected>' + item.country_code_number + '</option>';
                //     $("#countrycode").parent().addClass("focused");
                //     $("#mobile_callback").prop("maxlength", "10");
                // } else {
                var obj = '<option class="text-capitalize"  data-contry_code_add="' + item
                    .country_code_number + '" data-description="' + item.description + '" value="' +
                    item.code + '">' + item.country_code_number + '&nbsp' + item.description +
                    '</option>';
                // }

                $("#countrycode").append(obj);
            });

        },
        complete: function() {
            getLocationAndCityName();
        }
    });
}

function get_location() {

    var formdata = {};
    formdata["dynamicurl"] = "lead/v1/preferedlocation/list";
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "https://www.prestigeconstructions.com/api/apicall",
        data: formdata,
        headers: {
            'Authorization': token
        },
        success: function(result) {
            $("#location").html("");
            $("#location").html("<option value='' selected>Location</option>");
            $.each(result.data, function(i, item) {
                var obj = '<option data-description="' + item.description + '" value="' + item
                    .code + '">' + item.description + '</option>';
                $("#location").append(obj);
            });

        },
        complete: function() {

        }
    });
}

function get_property_type() {

    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/propertytype/list";
    formdata["is_available"] = "true";
    formdata["contactus_propertytype"] = "true";
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "https://www.prestigeconstructions.com/api/apicall",
        data: formdata,
        headers: {
            'Authorization': token
        },
        success: function(result) {
            $("#propertytype").html("");
            $("#propertytype").html("<option value=''>Property Type</option>");
            $.each(result.data, function(i, item) {
                var obj = '<option data-description="' + item.description + '" value="' + item
                    .code + '">' + item.description + '</option>';
                $("#propertytype").append(obj);
            });

        },
        complete: function() {

        }
    });
}

// function get_source() {

// var formdata = {};
// formdata["dynamicurl"] = "lead/v1/source/list";
// $.ajax({
//     type: "POST",
//     dataType: 'json',
//     url: "https://www.prestigeconstructions.com/api/apicall",
//     data: formdata,
//     headers: {
//         'Authorization': token
//     },
//     success: function(result) {
//         $("#source").html("");
//         $("#source").html("<option value=''>Source</option>");
//         $.each(result.data, function(i, item) {
//             if(item.code != 'Z03' && item.code != 'Z04' && item.code != 'Z15'){
//                 var obj = '<option data-description="' + item.description + '" value="' + item.code + '">' + item.description + '</option>';
//             }
//             $("#source").append(obj);
//         });

//     },
//     complete: function() {

//     }
// });
// }
//new code
// function get_source() {
//     var formdata = {};
//     formdata["dynamicurl"] = "lead/v1/source/list";
//     var utmSource = decodeURIComponent(new URL(window.location.href).searchParams.get("utm_source")).toLowerCase();

//     $.ajax({
//         type: "POST",
//         dataType: 'json',
//         url: "https://www.prestigeconstructions.com/api/apicall",
//         data: formdata,
//         headers: {
//             'Authorization': token
//         },
//         success: function(result) {
//             //console.log(result);
//             var $sourceSelect = $("#source");
//             $sourceSelect.html("<option value=''>Source</option>");

//             var optionSelected = false;

//             $.each(result.data, function(i, item) {
//                 var itemDescription = item.description.toLowerCase();

//                 // Exclude 'Z03', 'Z04', 'Z15', 'Prestige Website', and 'Display' from the dropdown
//                 if (item.code != 'Z03' && item.code != 'Z04' && item.code != 'Z15' && item.code != 'Z39' && item.code != 'Z30') {
//                     var obj = '<option data-description="' + item.description + '" value="' + item.code + '">' + item.description + '</option>';
//                     $sourceSelect.append(obj);
//                 }

//                 // Set the value if the utm_source matches the item description
//                 if (utmSource && utmSource === itemDescription) {
//                     $sourceSelect.val(item.code);
//                     optionSelected = true;
//                 }
//             });

//             // Add the 'is-hidden' class if one of the excluded options is selected
//             if (optionSelected) {
//               $(".source-hide").addClass("is-hidden");
//             }
//         },
//         complete: function() {
//             // Any necessary cleanup can be done here
//         }
//     });
// }

//new code
//new code static
// function get_source() {
//     var formdata = {};
//     formdata["dynamicurl"] = "lead/v1/source/list";
//     var utmSource = decodeURIComponent(new URL(window.location.href).searchParams.get("utm_source")).toLowerCase();

//     $.ajax({
//         type: "POST",
//         dataType: 'json',
//         url: "https://www.prestigeconstructions.com/api/apicall",
//         data: formdata,
//         headers: {
//             'Authorization': token
//         },
//         success: function(result) {
//             console.log(result);
//             var $sourceSelect = $("#source");
//             $sourceSelect.html("<option value=''>Source</option>");

//             var optionSelected = false;

//             // Static dropdown sequence
//             var sequence = [
//                 { description: "Hoarding", code: "Z06" },
//                 { description: "Radio", code: "Z12" },
//                 { description: "Newspaper", code: "Z08" },
//                 { description: "Magazine", code: "Z14" },
//                 { description: "WhatsApp", code: "Z36" },
//                 { description: "Google", code: "Z26" }, // Updated code
//                 { description: "Facebook", code: "Z33" }, // Updated code
//                 { description: "Instagram", code: "Z27" },
//                 { description: "LinkedIn", code: "Z28" },
//                 { description: "Online Portals - External", code: "Z19" }
//             ];

//             // Process each sequence item
//             $.each(sequence, function(index, seqItem) {
//                 $.each(result.data, function(i, apiItem) {
//                     // Filter out specific codes
//                     if (apiItem.code != 'Z03' && apiItem.code != 'Z04' && apiItem.code != 'Z15' && apiItem.code != 'Z39' && apiItem.code != 'Z30') {
//                         if (seqItem.code === apiItem.code) {
//                             var obj = '<option data-description="' + apiItem.description + '" value="' + apiItem.code + '">' + apiItem.description + '</option>';
//                             $sourceSelect.append(obj);

//                             // Set the value if the utm_source matches the item description
//                             if (utmSource && utmSource === apiItem.description.toLowerCase()) {
//                                 $sourceSelect.val(apiItem.code);
//                                 optionSelected = true;
//                             }
//                         }
//                     }
//                 });
//             });

//             // Add the 'is-hidden' class if one of the excluded options is selected
//             if (optionSelected) {
//                 $(".source-hide").addClass("is-hidden");
//             }
//         },
//         complete: function() {
//             // Any necessary cleanup can be done here
//         }
//     });
// }
function get_source() {
    var formdata = {};
    formdata["dynamicurl"] = "lead/v1/source/list";
    var utmSource = decodeURIComponent(new URL(window.location.href).searchParams.get("utm_source")).toLowerCase();

    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "https://www.prestigeconstructions.com/api/apicall",
        data: formdata,
        headers: {
            'Authorization': token
        },
        success: function(result) {
            //console.log(result);
            var $sourceSelect = $("#source");
            $sourceSelect.html("<option value=''>Source</option>");

            var optionSelected = false;

            // Static dropdown sequence
            var sequence = [{
                    description: "Hoarding",
                    code: "Z06"
                },
                {
                    description: "Radio",
                    code: "Z12"
                },
                {
                    description: "Newspaper",
                    code: "Z08"
                },
                {
                    description: "Magazine",
                    code: "Z14"
                },
                {
                    description: "BTL Activities",
                    code: "Z11",
                    dropdownName: "SMS/Email"
                }, // Added "SMS/Email" option
                {
                    description: "WhatsApp",
                    code: "Z36"
                },
                {
                    description: "Google",
                    code: "Z26"
                },
                {
                    description: "Facebook",
                    code: "Z33"
                },
                {
                    description: "Instagram",
                    code: "Z27"
                },
                {
                    description: "LinkedIn",
                    code: "Z28"
                },
                {
                    description: "Online Portals - External",
                    code: "Z19"
                }
            ];

            // Process each sequence item
            $.each(sequence, function(index, seqItem) {
                $.each(result.data, function(i, apiItem) {
                    // Filter out specific codes
                    if (apiItem.code != 'Z03' && apiItem.code != 'Z04' && apiItem.code !=
                        'Z15' && apiItem.code != 'Z39' && apiItem.code != 'Z30') {
                        if (seqItem.code === apiItem.code) {
                            // Use the dropdownName if provided, otherwise use the description
                            var displayName = seqItem.dropdownName || apiItem.description;
                            var obj = '<option data-description="' + apiItem.description +
                                '" value="' + apiItem.code + '">' + displayName +
                                '</option>';
                            $sourceSelect.append(obj);

                            // Set the value if the utm_source matches the item description
                            if (utmSource && utmSource === apiItem.description
                                .toLowerCase()) {
                                $sourceSelect.val(apiItem.code);
                                optionSelected = true;
                            }
                        }
                    }
                });
            });

            // Add the 'is-hidden' class if one of the excluded options is selected
            if (optionSelected) {
                $(".source-hide").addClass("is-hidden");
            }
        },
        complete: function() {
            // Any necessary cleanup can be done here
        }
    });
}
//new code static
$('#mobile_callback').bind("cut copy paste", function(e) {
    e.preventDefault();
});
$("#countrycode").change(function() {

    countryvalue = $("#countrycode").val();
    if (countryvalue != null && countryvalue != undefined && countryvalue != "") {
        if (countryvalue == "IN") {
            $("#mobile_callback").val("");
            $("#mobile_callback").prop("maxlength", "10");
        } else {
            $("#mobile_callback").val("");
            $("#mobile_callback").prop("maxlength", "15");
        }

    }

    function toggleWhatsAppVisibility() {
        const selectedCountryCode = $("#countrycode option:selected").val();
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

    function whatsappNRI() {

    }

    // Trigger toggle on dropdown change
    $("#countrycode").change(function() {
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
        your_name: {
            "required": true
        },
        mobile_callback: {
            "required": true
        },
        countrycode: {
            "required": true
        },
        email_callback: {
            required: true,
            email: true,
            customEmail: true
        },
        location: {
            "required": true
        },
        propertytype: {
            "required": true
        },
        source: {
            "required": true
        },
        agree_to_be_contacted : {
          "required": true
        }
    },
    messages: {
        your_name: "<span class='error-msg'>Please Enter Name</span>",
        mobile_callback: "<span class='error-msg'>Please Enter Mobile number</span>",
        countrycode: "<span class='error-msg'>Please Enter Country Code</span>",
         email_callback: {
            required: "<span class='error-msg'>Please Enter Email</span>",
            email: "<span class='error-msg'>Please Enter a Valid Email</span>",
            customEmail: "<span class='error-msg'>Please Enter a Valid Email</span>"
        },
        location: "<span class='error-msg'>Please Select Location</span>",
        propertytype: "<span class='error-msg'>Please Select Property Type</span>",
        source: "<span class='error-msg'>Please Select Source</span>",
        agree_to_be_contacted :"<span class='error-msg'>Please Accept</span>", 
    },
    submitHandler: function(form) {
        var formdata = {};

        // API NOT MEARGED IN DEV

        formdata["dynamicurl"] = "employee/v2/customersendotp";
        formdata["Mobile_No"] = $("#mobile_callback").val();
        formdata["Mobile_CountryCode"] = $("#countrycode option:selected").attr("data-contry_code_add");
        var emailbind = $("#countrycode option:selected").attr("data-contry_code_add");
        if(emailbind !== "+91"){
            formdata["Email"] = $("#email_callback").val();
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
                $(".upcoming_submit").html("Submitting..");
                $(".upcoming_submit").attr("disabled", true);
            },
            success: function(response) {
                if (response.success == true) {
                  let orderId = generateSixDigitCode();
                    $.each(response.data, function(i, item) {
                        var userId = item._id;
                        $("#otp_verify").val(userId);
                    });
                    localStorage.setItem("order_id", orderId);
                    $(".hide_infromation").addClass("is-hidden");
                    $(".bind_hidden_name").text($("#your_name").val());
                    $(".bind_hidden_number").text($("#mobile_callback").val());
                    $(".bind_hidden_email").text($("#email_callback").val());
                    $(".show_infromation").removeClass("is-hidden");
                    showToast("Success", response.message);
                    var userEmail = document.getElementById('email_callback').value;
                    var userPhone = document.getElementById('mobile_callback').value;
                    var userName = document.getElementById('your_name').value;
                    var countrycode = $("#countrycode option:selected").attr("data-contry_code_add");
                    var mobiledata = countrycode + userPhone; // Concatenate with a space
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'inqury_submit',
                        order_id: orderId, // MUST MATCH API EXACTLY (userId pass in order_id)
                        'user_data': {
                            "email": userEmail,
                            "phone": mobiledata,
                            "name": userName,
                        }
                    });
                    if (formdata["whatsapp_nri"] === 0) {
                       $(".timer_display").hide();
                    $(".resend_otp_container").addClass("is-hidden");
                    // console.log("WhatsApp NRI is false. Timer and resend OTP button will not be displayed.");
                    } else {
                    // Start the OTP timer and show the resend button
                    startOtpTimer();
                    // $(".resend_otp_container").removeClass("is-hidden");
                    }

                } else {
                    showToast("Message", response.message);

                }
                $(".upcoming_submit").addClass("is-hidden");
            },
            complete: function() {

                $("#enquire-now-sidebar").removeClass("active");
            },
            error: function(response) {}
        });
    }
});
function requestcallbackresendOtp() {
    const mobileNumber = $("#mobile_callback").val();
    const mobileCountryCode = $("#countrycode option:selected").attr("data-contry_code_add");
    const email = $("#email_callback").val();
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
    var formdata = new FormData;
    formdata.append("dynamicurl", "managecontent/v2/upcomingrequestcallback/create");
    formdata.append("customer_id", CustomerId);
    formdata.append("type", "upcoming");
    formdata.append("mobile_no", $("#mobile_callback").val());
    formdata.append("requestfrom", "web");
    formdata.append("name", $("#your_name").val());
    formdata.append("countrycode", $("#countrycode option:selected").attr("data-contry_code_add"));
    formdata.append("country", $("#countrycode option:selected").attr("data-description"));
    formdata.append("email", $("#email_callback").val());
    formdata.append("locationid", $("#location").val());
    formdata.append("locationnname", $("#location option:selected").attr("data-description"));
    formdata.append("properttypeid", $("#propertytype").val());
    formdata.append("properttypename", $("#propertytype option:selected").attr("data-description"));
    formdata.append("sourceid", $("#source").val());
    formdata.append("sourcename", $("#source option:selected").attr("data-description"));
    formdata.append("page_url", window.location.href);

    let order_id = localStorage.getItem("order_id") || "";
    if (order_id) {
    formdata.append("order_id", order_id);
    }
    
    //new code 
    // Convert FormData to a plain object
   var formDataObj = {};
   formdata.forEach(function(value, key) {
    formDataObj[key] = value;
   });



   // Extend the plain object with query string params and hidden fields
$.extend(formDataObj, getAllQueryStringParams(), serializeHiddenFields());



  // Convert the extended plain object back to FormData
    var extendedFormData = new FormData();
  $.each(formDataObj, function(key, value) {
    extendedFormData.append(key, value);
    });
    //new code


    $.ajax({
        method: "POST",
        url: "https://www.prestigeconstructions.com/api/apicall",
        dataType: "json",
        data: extendedFormData,
        headers: {
            'Authorization': token
        },
        processData: false,
        contentType: false,
        beforeSend: function() {
            $(".upcoming_submit").html("Submitting..");
            $(".upcoming_submit").attr("disabled", true);
        },
        success: function(response) {
            if (response.success == true) {
                $('#request_call_back_frm')[0].reset();
                $("#countrycode").val("IN").change();
                $(".hide_infromation").removeClass("is-hidden");
                $(".bind_hidden_name").text("");
                $(".bind_hidden_number").text("");
                $(".bind_hidden_email").text("");
                $(".show_infromation").addClass("is-hidden");
                $(".upcoming_submit").removeClass("is-hidden");
                $("#otp_dd").val("");
                $("#location").val("").change();
                $("#propertytype").val("").change();
                $("#source").val("").change();


                showToastsuccess("Success", response.message);
            } else {
                showToast("Message", response.message);
                $('#request_call_back_frm')[0].reset();
                $("#countrycode").val("IN").change();
            }
        },
        complete: function() {
            $(".upcoming_submit").html("Send OTP");
            $(".upcoming_submit").attr("disabled", false);
            $("#enquire-now-sidebar").removeClass("active");
        },
        error: function(response) {}
    });
}
/** Request Call back end */



// city list function

function projectcitylistwithcount(locationid = "") {
    var formdata = {};
    srno = 1;
    formdata["dynamicurl"] = "managecontent/v1/cityprojectcount/list";
    formdata["is_available"] = true;
    formdata["propertycategory"] = "Residential";
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
        $('.residential_project_citylist').html('');
        if (response.success == true && response.data.length > 0) {
          $.each(response.data, function(i, item) {
            var CityText = checkNUll(checkkeyexistornull(item, "CityText")).toLowerCase();
            var projectcity = `<li>
                        <a href="https://www.prestigeconstructions.com/upcoming-projects/${CityText}" data-city="${CityText}">
                                                <div class="projects-location-items projectactive cursor-pointer" data-citytext='${CityText}' data-citycode='${CityText}'>
                                                    <h4>${checkNUll(item.CityText)}</h4>
                                                    
                                                </div>
                                                </a>
                                            </li>`;
            $('.residential_project_citylist').append(projectcity);

          });
          // var delhiCity = `<li>
          //         <a href="https://www.prestigeconstructions.com/upcoming-projects/delhi-ncr" data-city="delhi-ncr">
          //             <div class="projects-location-items projectactive cursor-pointer" data-citytext="delhi-ncr" data-citycode="delhi-ncr">
          //                 <h4>Delhi NCR</h4>
          //                 <span>0 Projects Available</span>
          //             </div>
          //         </a>
          //     </li>`;
          // $('.residential_project_citylist').append(delhiCity);
        } else {
          var projectcity = `<li>
                                           <div class="projects-location-items projectactive cursor-pointer" data-citytext='${CityText}' data-citycode='${CityText}'>
                                               <h4>No City Found</h4>
                                            </div>
                                       </li>`;
          $('.residential_project_citylist').append(projectcity);
        }
      },
      complete: function() {
    //  <a href="https://www.prestigeconstructions.com/upcoming-projects"> 
        // <a href="JAVASCRIPT:;" class="allprojectload" data-city="all">
        var projectcity = `<li>
                                      
                                        <a href="https://www.prestigeconstructions.com/upcoming-projects" class="allprojectload" data-city="all">
                                        <div class="projects-location-items projectactive cursor-pointer" data-citycode='all'>
                                            <h4>All Properties</h4>
                                        </div>
                                        </a>
                                </li>`;

        $('.residential_project_citylist').prepend(projectcity);

        //projectlist();
        $(".theme-loader").removeClass("active");
      }
    });
  }

// $(document).on("click", ".allprojectload", function(e) {
//   e.preventDefault();
//     localStorage.setItem("clickedcity", "all");
//     window.location.href = "https://www.prestigeconstructions.com/upcoming-projects/";
//   });