function openTab(e,t,l){let c,o,r;document.querySelectorAll("."+l).forEach((function(l){for(c=0,o=l.querySelectorAll(".content-tab");c<o.length;c++)o[c].style.display="none";for(c=0,r=l.querySelectorAll(".tab");c<r.length;c++)r[c].classList.remove("is-active");let n=l.querySelector("#"+t);n&&(n.style.display="block"),e.currentTarget.classList.add("is-active")}))}
    /***Menu Toggle Start***/
      let body=document.querySelector("body"),toggles=document.querySelectorAll(".menu-trigger"),closetoggles=document.querySelectorAll(".closemenu");toggles.forEach(t=>t.addEventListener("click",(()=>{body.classList.add("insomenu-active")}))),closetoggles.forEach(c=>c.addEventListener("click",(()=>{body.classList.remove("insomenu-active")})));
        /***End Menu Toggle***/
    /**Modal**/
    function toggleModel(e){document.querySelector("#"+e).classList.toggle("is-active")}function openModel(e){document.querySelector("#"+e).classList.toggle("is-active")}function closeModel(e){document.querySelector("#"+e).classList.remove("is-active")}
        /**End Modal**/

    //Sidebar
    $("[open-sidebar]").on("click",(function(){var e=$(this).attr("open-sidebar");$(".theme-sidebar#"+e).addClass("active"),$("body").addClass("sidebar-active")})),$("[close-sidebar]").on("click",(function(){$(this).parents(".theme-sidebar").removeClass("active"),$("body").removeClass("sidebar-active")}));

    //File Input Upload
    const finputs=Array.from(document.querySelectorAll('.file-upload [type="file"]'));finputs.forEach((e=>{e.addEventListener("change",(e=>{let t=e.target.value,n=e.target.parentElement.querySelector("span"),r=t.split(/\/|\\/).pop();n.innerText=r||"Filename"}))}));
    //End File Input Upload
     
        /***End Menu Toggle***/

    /***Section Animation***/
    const scrollElements=document.querySelectorAll(".js-scroll"),elementInView=(e,l=1)=>e.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)/l,elementOutofView=e=>e.getBoundingClientRect().top>(window.innerHeight||document.documentElement.clientHeight),displayScrollElement=e=>{e.classList.add("scrolled")},hideScrollElement=e=>{e.classList.remove("scrolled")},handleScrollAnimation=()=>{scrollElements.forEach((e=>{elementInView(e,1.25)?displayScrollElement(e):elementOutofView(e)&&hideScrollElement(e)}))};window.addEventListener("scroll",(()=>{scrollElements.forEach((e=>{elementInView(e,1.25)?displayScrollElement(e):elementOutofView(e)&&hideScrollElement(e)}))}));
    /***End Section Animation***/

    /***  Open Modal   ***/
   function closeModel(e){document.querySelector("#"+e).classList.remove("is-active")}function openModel(e){document.querySelector("#"+e).classList.add("is-active")}
    /***  Open Modal   ***/
    
    // --------select2-------
    $(document).ready(function() {
        //---- select2 single----
        $(".select").each((function(){var e=$(this).parents(".form-group");$(this).select2({dropdownParent:e}).on("select2:open",(function(e){$(this).parents(".form-group").addClass("focused")})).on("select2:close",(function(e){""===$(this).find(":selected").val()&&$(this).parents(".form-group").removeClass("focused")}))}));
        //---- select2 multiple----
        $(".select-multiple").each((function(){var s=$(this).parents(".form-group");$(this).select2({dropdownParent:s}).on("select2:open",(function(s){$(this).parents(".form-group").addClass("focused")})).on("select2:close",(function(s){""!=$(this).val()?$(this).parents(".form-group").addClass("focused"):$(this).parents(".form-group").removeClass("focused")})).on("select2:select",(function(s){$(this).parents(".form-group").addClass("focused")})).on("select2:unselect",(function(s){$(this).parents(".form-group").addClass("focused")}))}));
        //---- select2 Country Code only Show Code on Selection----
        $(".select-cc").each((function(){var e=$(this).parents(".form-group");$(this).select2({templateSelection:function(e){return e?.element?.dataset?.contry_code_add},dropdownParent:e,minimumResultsForSearch:3}).on("select2:open",(function(e){$(this).parents(".form-group").addClass("focused")})).on("select2:close",(function(e){""===$(this).find(":selected").val()&&$(this).parents(".form-group").removeClass("focused")}))}));
        //---- select2 Country Code only Show Code on Selection----
        $(".select.countrycodeno").each((function(){var e=$(this).parents(".form-group");$(this).select2({templateSelection:function(e){return e?.element?.dataset?.contry_code_add},dropdownParent:e,minimumResultsForSearch:3}).on("select2:open",(function(e){$(this).parents(".form-group").addClass("focused")})).on("select2:close",(function(e){""===$(this).find(":selected").val()&&$(this).parents(".form-group").removeClass("focused")}))}));

            });

        // range slider
    var range, from, to, $range = $(".properties-range-slider"),
        $from = $(".from"),
        $to = $(".to"),
        min = $range.data("min"),
        max = $range.data("max"),
        step = $range.data("step"),
        updateValues = function() {
            $from.prop("value", from), $to.prop("value", to)
        };
    $range.ionRangeSlider({
        onChange: function(a) {
            from = a.from, to = a.to, updateValues()
        },
        onFinish: function(a) {
            if (a.input.hasClass("index-range-slider")) {
                var o = $("#locationbind").val() ? $("#locationbind").val().toLowerCase() : "",
                    t = $("#projecttype").val() ? $("#projecttype option:selected").attr("data-propertyttype") : "",
                    e = $("#constructionstatus").val() ? $("#constructionstatus").val() : "",
                    n = $("#bedroomsbind").val() ? $("#bedroomsbind").val() : "";
                setTimeout(() => {
                    var a = parseInt($("#index_from").val()),
                        r = parseInt($("#index_to").val());
                    filterlocationbind(o, t, e, n, a, r)
                }, 1e3)
            }
            if (a.input.hasClass("common-range-slider")) {
                var r = $("#bindsearch").val() ? $("#bindsearch").val() : "",
                    o = $("#bindlocation").val() ? $("#bindlocation").val().toLowerCase() : "",
                    t = $("#project_type").val() ? $("#project_type option:selected").attr("data-propertyttype") : "",
                    e = $("#construction_status").val() ? $("#construction_status").val() : "",
                    n = $("#bedrooms").val() ? $("#bedrooms").val() : "";
                setTimeout(() => {
                    var a = parseInt($("#searchminrang").val()),
                        i = parseInt($("#searchmaxrang").val());
                    filterlocation(r, o, t, e, n, a, i)
                }, 1e3)
            }
        }
    }), range = $range.data("ionRangeSlider");
    var updateRange = function() {
        range.update({
            from: from,
            to: to
        })
    };
    $from.on("input", function() {
        (from = +$(this).prop("value")) < min && (from = min), from > to && (from = to), updateValues(), updateRange()
    }), $to.on("input", function() {
        (to = +$(this).prop("value")) > max && (to = max), to < from && (to = from), updateValues(), updateRange()
    });
    // range slider
    const scrollContainers = document.querySelectorAll(".theme-scrollbar-horizontal");
    scrollContainers.forEach(e => {
        let t = !1,
            o, r;
        e.addEventListener("mousedown", l => {
            t = !0, o = l.pageX - e.offsetLeft, r = e.scrollLeft
        }), e.addEventListener("mouseup", () => {
            t = !1
        }), e.addEventListener("mouseleave", () => {
            t = !1
        }), e.addEventListener("mousemove", l => {
            if (!t) return;
            l.preventDefault();
            let s = l.pageX - e.offsetLeft,
                n = (s - o) * 3;
            e.scrollLeft = r - n
        })
    });
    

    // Dropdown

    // Get all the dropdown from document
    document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);
    // Dropdown Open and Close function
    function dropDownFunc(n) {
        !0 === n.classList.contains("click-dropdown") && n.addEventListener("click", function(n) {
            n.preventDefault(), !0 === this.nextElementSibling.classList.contains("dropdown-active") ? (this.parentElement.classList.remove("dropdown-open"), this.nextElementSibling.classList.remove("dropdown-active")) : (closeDropdown(), this.parentElement.classList.add("dropdown-open"), this.nextElementSibling.classList.add("dropdown-active"))
        }), !0 === n.classList.contains("hover-dropdown") && (n.onmouseover = n.onmouseout = function n(t) {
            "mouseover" == t.type && (closeDropdown(), this.parentElement.classList.add("dropdown-open"), this.nextElementSibling.classList.add("dropdown-active"))
        })
    }
    // Listen to the doc click
    window.addEventListener('click', function(e) {

        // Close the menu if click happen outside menu
        if (e.target.closest('.dropdown-container') === null) {
            // Close the opend dropdown
            closeDropdown();
        }

    });

    // Close the openend Dropdowns
    function closeDropdown() {
        // console.log('run');

        // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
        document.querySelectorAll('.dropdown-container').forEach(function(container) {
            container.classList.remove('dropdown-open')
        });

        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.classList.remove('dropdown-active');
        });
    }

    // close the dropdown on mouse out from the dropdown list
    document.querySelectorAll('.dropdown-menu').forEach(function(dropDownList) {
        // close the dropdown after user leave the list
        dropDownList.onmouseleave = closeDropdown;
    });
    

    $(".flatpickrdate").flatpickr({
        enableTime: false,
        dateFormat: "d-m-Y"
    });
    $(".flatpickrtime").flatpickr({
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
        dateFormat: "H:i",
    });
    function generateSixDigitCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    $(document).on('change', '#svproject', function() {
        $('#svproject').siblings('.error').remove();
    });
    $(document).on('change', '#svdate', function() {
        $('#svdate').siblings('.error').remove();
    });
    $(document).on('click', '.closemodal', function() {
        $('#svproject').val('').change();
        $('#svdate').val('').change();
        $('#datatime').val('').change();
    });

    /* Profile Data Bind*/
    var firstname = localStorage.getItem('FirstName');
    var lastname = localStorage.getItem('LirstName');
    var email = localStorage.getItem('Email');
    var mobileno = localStorage.getItem('Mobileno');
    var profile = localStorage.getItem('Profile');
    $('.customername1').html('').text(firstname + ' ' + lastname);
    $('.customeremail').html('').html(email);
    $('.customermobileno').html('').html(mobileno);

    if (checkNUll(profile) != "") {

        var profileimage = `<picture>
            <source srcset="${profile}" type="image/webp">
            <source srcset="${profile}" type="image/jpeg">
            <img src="${profile}" alt="Profile" width="200" height="200" />
        </picture>`;
        $('.appendprofile').html('').append(profileimage);
    }
    /* Profile Data Bind*/
    $(document).ready(function() {

              bind_search_dropdown();
        bind_search_dropdown_common();
                //newsdynamicurlbindforslug();
        generateDeviceId(); // to genrate new device id once
        // trackedvisits();
        // getFirstNonEmptyValue();
        // getCustomerFullName();
        let lastCountryCode = '';
        let loggedPages = new Set();

        function logoutMoengage() {
            if (typeof Moengage !== "undefined" && Moengage.logout) {
                Moengage.logout();
            }
        }

        function getCookieValue(name) {
            const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            return match ? decodeURIComponent(match[2]) : null;
        }

        $('[class*="customer_"]').on('blur', function() {
            const baseUrl = window.location.origin + window.location.pathname;
            if (!loggedPages.has(baseUrl)) loggedPages.add(baseUrl);

            const classes = $(this).attr('class').split(/\s+/);
            const customerClass = classes.find(c => c.startsWith('customer_'));
            const value = $(this).val()?.trim();
            const selectedOpt = $('.customer_Mobile_CountryCode').find(':selected');
            let countryCode = (selectedOpt.attr('data-contry_code_add') || selectedOpt.text().split('\u00A0')[0] || '').trim();
            if (countryCode.toLowerCase().includes('country') || !countryCode.includes('+')) {
                countryCode = '';
            }

            if (customerClass && value) {
                if (customerClass === 'customer_fullname') {
                    const nameParts = value.split(' ');
                    const firstName = nameParts[0] || '';
                    const lastName = nameParts.slice(1).join(' ') || '';

                    if (typeof Moengage !== "undefined") {
                        Moengage.add_first_name(firstName);
                        Moengage.add_last_name(lastName);
                    }
                }

                if (customerClass === 'customer_Mobile') {
                    let fullMobile = value;
                    if (value.startsWith('+') || !countryCode) {
                        fullMobile = value;
                    } else {
                        fullMobile = `${countryCode}${value}`;
                    }
                    if (typeof Moengage !== "undefined") {
                        Moengage.add_mobile(fullMobile);

                        const customerIDFromCookie = getCookieValue("customers_CustomerID");
                        const storedID = localStorage.getItem("last_customer_id");

                        if (!customerIDFromCookie) {
                            if (storedID !== fullMobile) {
                                if (storedID)
                                    //  logoutMoengage();
                                    console.log("🔐 MoEngage.add_unique_user_id called with:", fullMobile);
                                Moengage.update_unique_user_id(fullMobile);
                                localStorage.setItem("last_customer_id", fullMobile);
                            }
                        }
                    }
                }

                if (customerClass === 'customer_Email') {
                    if (typeof Moengage !== "undefined") {
                        Moengage.add_email(value);
                    }
                }

                if (countryCode && countryCode !== lastCountryCode) {
                    lastCountryCode = countryCode;
                }
            }
                        // trackedvisits();
                    });





        
        
        footerdynamic();

    });

                
    /** News Url bind dynamic Start */
        /** News Url bind dynamic end */
    /** Open Enuquiry on price on request start */
    $(document).on("click", ".open_enquirey_sidebar", function() {
        get_enquiry_country();
        $("#get_data_for_equiry_form").val("priceonrequest");
        $("#get_data_for_equiry_form").attr("data-projectid", $(this).attr("data-projectid"));
        $("#get_data_for_equiry_form").attr("data-projectname", $(this).attr("data-projectname"));
        $("label.error").remove();
        $("#enquire-sidebar").addClass("active");
        $("#enquiry_name").val("");
        $("#enquiry_number").val("");
        $("#enquiry_email").val("");
        // $("#enquire_project_type").val("");
        $("#enquiry_country").val("IN").change();


        $('#enquiry_common_frm_submit')[0].reset();
        $(".hide_infromation").removeClass("is-hidden");
        $(".common_enquiry_bind_hidden_name").text("");
        $(".common_enquiry_bind_hidden_number").text("");
        $(".common_enquiry_bind_hidden_email").text("");
        $(".common_enquire_bind_hidden_project_type").text("");
        $(".show_infromation").addClass("is-hidden");
        $(".enquiry_submit_btn").removeClass("is-hidden");
        $("#enquiryotp_dd").val("");
    });
    /** Open Enuquiry on price on request end */

    /**Toast Message Script Start */
    $(document).on("click", ".close_toast", function() {
        closeToast();
    });

    function showToast(error_type, error_msg) {
        $(".error_type").html("").html(error_type);
        $(".error_msg").html("").html(error_msg);
        $(".error-theme-toast").addClass("active");

        setTimeout(() => {
            closeToast();
        }, 15000);
    }

    function closeToast() {
        $(".error-theme-toast").removeClass("active");
    }

    $(document).on("click", ".close_toast", function() {
        closeToast();
    });

    function showToastsuccess(error_type, error_msg) {
        $(".success_type").html("").html(error_type);
        $(".success_msg").html("").html(error_msg);
        $(".success-theme-toast").addClass("active");

        setTimeout(() => {
            closeToastsuccess();
        }, 3000);
    }

    function closeToastsuccess() {
        $(".success-theme-toast").removeClass("active");
    }
    /**Toast Message Script end */
    /** ENQUIRE NOW Start */
    $(document).on("click", ".enquirylabel", function() {
        $("label.error").remove();
        $("#enquiry_name").val("");
        $("#enquiry_number").val("");
        $("#enquiry_email").val("");
        $("#enquiry_country").html("").html("<option>Fetching..</option>").change();
        $('#enquiry_common_frm_submit')[0].reset();
        $(".hide_infromation").removeClass("is-hidden");
        $(".common_enquiry_bind_hidden_name").text("");
        $(".common_enquiry_bind_hidden_number").text("");
        $(".common_enquiry_bind_hidden_email").text("");
        $(".common_enquire_bind_hidden_project_type").text("");
        $(".show_infromation").addClass("is-hidden");
        $(".enquiry_submit_btn").removeClass("is-hidden");
        $("#enquiryotp_dd").val("");
        get_enquiry_country();

        var page_url = window.location.href;
        if (page_url.includes('residential-projects')) {
            $('#enquire_project_type').val('residentialprojects').change();
            $('#enquire_project_type').attr("disabled", true);
        } else if (page_url.includes('commercial-projects')) {
            $('#enquire_project_type').val('commercial').change();
            $('#enquire_project_type').attr("disabled", true);
        } else if (page_url.includes('rental-projects')) {
            $('#enquire_project_type').val('rentalprojects').change();
            $('#enquire_project_type').attr("disabled", true);
        } else {
            $('#enquire_project_type').attr("disabled", false);
        }
        
        function toggleWhatsAppVisibility() {
            const selectedCountryCode = $("#enquiry_country option:selected").val();
            if (selectedCountryCode === "IN") {
                $(".is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
                $(".resend_otp_btn").addClass("is-hidden"); // Hide Resend OTP button
                $(".timer_display").hide(); // Hide the timer
            } else {
                $(".is_whatsapp").removeClass("is-hidden"); // Show WhatsApp section
                $(".resend_otp_btn").removeClass("is-hidden"); // Show Resend OTP button
                // startOtpTimer(); // Start the OTP timer
            }
        }

        function whatsappNRI() {

        }

        // Trigger toggle on dropdown change
        $("#enquiry_country").change(function() {
            toggleWhatsAppVisibility();
        });

        // Initial check on page load
        // toggleWhatsAppVisibility();


        // Function to get cookies start
        function getCookies(cookieNames) {
            const cookies = {};
            cookieNames.forEach((name) => {
                cookies[name] = getCookie(name);
            });
            return cookies;
        }
        // Data to set cookies (assuming you are storing JSON-encoded values)
        const cookieNames = ['customer_FirstName', 'customer_LastName', 'customer_Email', 'customer_Mobile', 'customer_Mobile_CountryCode', 'customer_Country_Code'];
        const userCookies = getCookies(cookieNames);

        // Check if the cookies are valid and not empty
        if (userCookies !== undefined && userCookies !== '' && userCookies !== null && userCookies !== "undefined" && userCookies !== "null") {
            // Assuming each cookie contains a string, you should decode and parse each one individually
            try {
                // Decode URI and parse JSON if needed
                // const customer_FirstName = decodeURIComponent(userCookies['customer_FirstName']);
                // const customer_LastName = decodeURIComponent(userCookies['customer_LastName']);
                // const customer_Email = decodeURIComponent(userCookies['customer_Email']);
                // const customer_Mobile = decodeURIComponent(userCookies['customer_Mobile']);
                // const customer_Mobile_CountryCode = decodeURIComponent(userCookies['customer_Mobile_CountryCode']);
                // const customer_Country_Code = decodeURIComponent(userCookies['customer_Country_Code']);
                let customer_FirstName = decodeURIComponent(userCookies['customer_FirstName'] || "");
                let customer_LastName = decodeURIComponent(userCookies['customer_LastName'] || "");
                let customer_Email = decodeURIComponent(userCookies['customer_Email'] || "");
                let customer_Mobile = decodeURIComponent(userCookies['customer_Mobile'] || "");
                let customer_Mobile_CountryCode = decodeURIComponent(userCookies['customer_Mobile_CountryCode'] || "");
                let customers_CustomerID = decodeURIComponent(userCookies['customers_CustomerID'] || "");
                let customer_Country_Code = decodeURIComponent(userCookies['customer_Country_Code'] || "");

                // Construct full name
                var customer_fullname = checkNUll(customer_FirstName) + "" + checkNUll(customer_LastName);


                // Set values to form elements
                $(".customer_fullname").val(customer_fullname);
                // setTimeout(() => {
                //   if (checkNUll(customer_Country_Code)!="" && checkNUll(customer_Country_Code)!=null){

                //     $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
                //   }else{
                //     // $(".customer_Country_Code").val("IN").change();

                //   }
                //   $(".customer_Mobile").val(checkNUll(customer_Mobile));
                // }, 1000);
                setTimeout(() => {
                    if (checkNUll(customer_Country_Code) !== "" && checkNUll(customer_Country_Code) != null) {
                        $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
                    }
                    $(".customer_Mobile").val(checkNUll(customer_Mobile));
                }, 1000);
                $(".customer_Email").val(checkNUll(customer_Email));
                // console.log(customer_fullname);
                // console.log(customer_Mobile_CountryCode);
                // console.log(customer_Country_Code);
            } catch (e) {
                // console.error("Error parsing cookies: ", e);
            }
        }
        // Function to get cookies end

    });
    $('#enquiry_number').bind("cut copy paste", function(e) {
        e.preventDefault();
    });
    $("#enquiry_country").change(function() {

        countryvalue = $("#enquiry_country").val();
        if (countryvalue != null && countryvalue != undefined && countryvalue != "") {
            if (countryvalue == "IN") {
                $("#enquiry_number").val("");
                $("#enquiry_number").prop("maxlength", "10");
            } else {
                $("#enquiry_number").val("");
                $("#enquiry_number").prop("maxlength", "15");
            }

        }
    });
     function footerdynamic() {

        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/footer/list";
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                var description = result.data[0].description;
                if (description) {
                    description = description.replace(/cdnpath/g, "https://www.prestigeconstructions.com");
                }
                $(".footer-dynamic").html(description);
                // Rewrite absolute prestigeconstructions.com links to relative paths
                document.querySelectorAll('.footer-dynamic a[href]').forEach(function(a) {
                    a.href = a.href.replace(/^https?:\/\/www\.prestigeconstructions\.com\//i, '').replace(/^https?:\/\/prestigeconstructions\.com\//i, '');
                });
                // Bind current year for statically loaded footer (like cp-footer)
                document.querySelectorAll('.bind_current_year').forEach(el => el.textContent = new Date().getFullYear());
            },
            complete: function() {
                
            }
        });
    }
    function get_enquiry_country() {

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
                $("#enquiry_country").html("");
                // $("#enquiry_country").html("<option value=''>Country</option>");
                var obj = `<option value=''>Country</option>`;

                $.each(result.data, function(i, item) {
                    // console.log(result);

                    // if (item.description == "India") {
                    //     var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '" selected>' + item.country_code_number + '</option>';
                    //     $("#enquiry_country").parent().addClass("focused");
                    //     $("#enquiry_number").prop("maxlength", "10");
                    // } else {
                    // var obj = '<option class="text-capitalize" data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '">' + item.country_code_number + '&nbsp' + item.description + '</option>';
                     obj += '<option class="text-capitalize" data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '">' + item.country_code_number + '&nbsp' + item.description + '</option>';
                    // }

                    // $("#enquiry_country").append(obj);
                  });
                  $("#enquiry_country").html(obj);
                  
            },
            complete: function() {
                getLocationAndCityName();
            }
        });
    }

    $("#enquiry_common_frm_submit").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            enquiry_name: {
                "required": true
            },
            enquiry_number: {
                "required": true
            },
            enquiry_country: {
                "required": true
            },
            enquiry_email: {
                required: true,
                email: true,
                customEmail: true
            },
            agree_to_be_contacted: {
                "required": true
            },
            enquire_project_type: {
                "required": true
            }

        },
        messages: {
            enquiry_name: "<span class='error-msg'>Please Enter Name</span>",
            enquiry_number: "<span class='error-msg'>Please Enter Mobile number</span>",
            enquiry_country: "<span class='error-msg'>Please Enter Country Code</span>",
            enquiry_email: {
                required: "<span class='error-msg'>Please Enter Email</span>",
                email: "<span class='error-msg'>Please Enter a Valid Email</span>",
                customEmail: "<span class='error-msg'>Please Enter a Valid Email</span>"
            },
             agree_to_be_contacted: "<span class='error-msg is-static mt-1 w-fit-content'>Please Accept</span>",
            enquire_project_type: "<span class='error-msg'>Please Select</span>"
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
            var $submitBtn = $(form).find(".enquiry_submit_btn");

            if ($("#whatsapp_enquiry_common").is(":checked")) {
                initSocket(); // Ensure socketId is set
                activeWhatsAppCallback = enquiryrequestcallback;
                activeWhatsAppFormSelector = "#enquiry_common_frm_submit";

                var waMobileNo    = $(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val();
                var waCountryCode = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
                if (!waCountryCode) { waCountryCode = $("#enquiry_country").val() || "+91"; }
                var wa_age_consent       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                var wa_marketing_consent = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

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
                            var restoreText = $("#whatsapp_enquiry_common").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Submit");
                            $submitBtn.html(restoreText).attr("disabled", false);
                        }
                    },
                    error: function() {
                        showToast("Error", "Something went wrong during consent validation. Please try again.");
                        var restoreText = $("#whatsapp_enquiry_common").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Submit");
                        $submitBtn.html(restoreText).attr("disabled", false);
                    }
                });

                function generateWhatsAppLink(waMobileNo, waCountryCode, wa_age_consent, wa_marketing_consent) {
                    var formdata = {};
                    formdata["dynamicurl"]         = "lead/v1/common/whatsapp/verification/generate";
                    formdata["Mobile_No"]          = waMobileNo;
                    formdata["Mobile_CountryCode"] = waCountryCode;
                    formdata["Page_Name"]          = "Common Enquiry Now";
                    formdata["Plateform_Name"]     = "web";
                    formdata["RequestFrom"]        = "Website";
                    formdata["Session_ID"]         = socketId;
                    formdata["Type"]               = "Enquiry Now";

                    // console.log("WhatsApp API payload:", formdata); // debug

                    // Open window NOW (user gesture) — navigate after response to avoid popup blocker
                    var whatsappWindow = window.open('about:blank', '_blank');

                    $.ajax({
                        method: "POST",
                        url: "https://www.prestigeconstructions.com/api/apicall",
                        dataType: "json",
                        data: formdata,
                        headers: { 'Authorization': token },
                        success: function(response) {
                            // console.log("WhatsApp API response:", response); // debug
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
                                whatsappWindow.location.href = whatsappUrl; // navigate pre-opened window
                                    showToastsuccess("Success", "WhatsApp link generated successfully.");
                                $("#enquire-sidebar").removeClass("active");
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
                            var restoreText = $("#whatsapp_enquiry_common").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Submit");
                            $submitBtn.html(restoreText);
                        },
                        error: function(xhr, status, err) {
                            whatsappWindow.close();
                            console.error("WhatsApp API error:", status, err, xhr.responseText);
                            showToast("Error", "Something went wrong. Please try again.");
                        }
                    });
                } // end generateWhatsAppLink

                return;
            }

            var mobileNo =$(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val();
            var countryCodeAttr = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
            var is_age_consent       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
            var is_marketing_consent = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

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
            formdata["Mobile_No"] = mobileNo;
            formdata["Mobile_CountryCode"] = countryCodeAttr;
            var emailbind = countryCodeAttr;
            if (emailbind !== "+91") {
                formdata["Email"] = $("#enquiry_email").val();
            }
            formdata["whatsapp_nri"] = $("#whatsapp_nri").is(":checked") ? 1 : 0;

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".enquiry_submit_btn").html("Submitting..");
                    $(".enquiry_submit_btn").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                      let orderId = generateSixDigitCode();
                        $.each(response.data, function(i, item) {
                          var userId = item._id;
                            $("#enquiryotp_verify").val(userId);
                        });
                        localStorage.setItem("order_id", orderId);
                        $(".hide_infromation").addClass("is-hidden");
                        $(".common_enquiry_bind_hidden_name").text($("#enquiry_name").val());
                        $(".common_enquiry_bind_hidden_number").text($("#enquiry_number").val());
                        $(".common_enquiry_bind_hidden_email").text($("#enquiry_email").val());
                        $(".common_enquire_bind_hidden_project_type").text($("#enquire_project_type").val());
                        $(".show_infromation").removeClass("is-hidden");
                        var userEmail = document.getElementById('enquiry_email').value;
                        var userPhone = document.getElementById('enquiry_number').value;
                        var userName = document.getElementById('enquiry_name').value;
                        var countrycode = $("#enquiry_country option:selected").attr("data-contry_code_add");
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
                            // $("#resend_otp_container").removeClass("is-hidden");
                        }

                        // showToast("Success", response.message);
                        var mobileCountryCode = formdata["Mobile_CountryCode"];
                        if (mobileCountryCode === "+91") {
                            console.log("91");
                            showToast("Success", "Prestige Experience Code has been sent to your mobile");
                        } else {
                            if (formdata["whatsapp_nri"] === 1) {
                                console.log("orher");
                                showToast("Success", "Prestige Experience Code has been sent to your Whatsapp.");
                            } else {
                                console.log("orher");
                                showToast("Success", "Prestige Experience Code has been sent to your email.");
                            }
                        }

                    } else {
                        showToast("Message", response.message);

                    }
                },
                complete: function() {
                    $(".enquiry_submit_btn").addClass("is-hidden");
                    $(".enquiry_submit_btn").html("Submit");
                    $(".enquiry_submit_btn").attr("disabled", false);

                    $("#enquire-now-sidebar").removeClass("active");
                },
                error: function(response) {}
            });
            } // end sendEnquiryOtp
        }
    });

    function startOtpTimer() {
        var timerDisplay = $(".timer_display, .comman_timer_display");
        var resendOtpContainer = $(".resend_otp_container, .comman_resend_otp_container");

        var timerDuration = 60; // Timer duration in seconds

        // Show the timer and hide the resend button
        timerDisplay.text(`Resend OTP in ${timerDuration}s`).show();
        resendOtpContainer.addClass("is-hidden"); // Initially hide the resend button

        var interval = setInterval(() => {
            timerDuration--;
            timerDisplay.text(`Resend OTP in ${timerDuration}s`);

            // When the timer reaches 0
            if (timerDuration <= 0) {
                clearInterval(interval);

                // Hide the timer and show the resend button
                timerDisplay.hide();
                resendOtpContainer.removeClass("is-hidden"); // Show the resend button
            }
        }, 1000);
    }

    function resendOtp() {
        const mobileNumber = $("#enquiry_number").val();
        const mobileCountryCode = $("#enquiry_country option:selected").attr("data-contry_code_add");
        const email = $("#enquiry_email").val();
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
            beforeSend: function() {
                $(".resend_otp_btn").text("Resending...").attr("disabled", true);
            },
            success: function(response) {
                if (response.success) {
                    // Update the OTP ID in the hidden input field
                    $("#whatsapp_nri").prop("checked", false);
                    const newOtpId = response.data[0]._id;
                    $("#enquiryotp_verify").val(newOtpId);
                    // console.log("New OTP _id:", newOtpId);
                    showToast("Success", "OTP sent successfully in Email.");
                    // startOtpTimer(); // Restart the timer after a successful resend
                } else {
                    showToast("Error", response.message || "Failed to resend OTP.");
                }
            },
            complete: function() {
                $(".resend_otp_btn").text("Resend OTP").attr("disabled", false).hide();
                // setTimeout(() => {
                //   $(".resend_otp_btn").text("Resending...").attr("disabled", true).hide();
                // }, 2000);
            },
            error: function(xhr) {
                console.error(xhr);
                showToast("Error", "Something went wrong. Please try again.");
            }
        });
    }

    // Event Listener for Resend OTP button
    $(".resend_otp_btn").on("click", function() {
        resendOtp();
    });


    $("#enquiryotp_verify_frm").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            enquiryotp_dd: {
                "required": true
            },
        },
        messages: {
            enquiryotp_dd: "<span class='error-msg'>Please Enter OTP</span>",
        },
        submitHandler: function(form) {
            var formdata = {};
            formdata["dynamicurl"] = "employee/v1/customerverifyotp";
            formdata["otp"] = $("#enquiryotp_dd").val();
            formdata["_id"] = $("#enquiryotp_verify").val();
            $(".theme-loader.form-loader").addClass("active");

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".enquiryotp_submit_btn").html("Submitting..");
                    $(".enquiryotp_submit_btn").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                        enquiryrequestcallback();
                        // showToast("Success", response.message);

                        // Save consent after successful OTP verification
                        var consentSaveData = {};
                        consentSaveData["dynamicurl"]                    = "lead/v1/common/consent/save";
                        consentSaveData["Mobile_No"]                     = $("#enquiry_number").val();
                        consentSaveData["Mobile_CountryCode"]            = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
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
                    uet_report_conversion();
                    $(".enquiryotp_submit_btn").html("Submit");
                    $(".enquiryotp_submit_btn").attr("disabled", false);
                    $("#enquire-now-sidebar").removeClass("active");
                    setTimeout(() => {
                        $(".theme-loader.form-loader").removeClass("active");
                    }, 1000);
                },
                error: function(response) {}
            });
        }
    });

    function enquiryrequestcallback() {
        var formdata = {};
        var queryParams = getQueryParams();
        // formdata["dynamicurl"] = "managecontent/v2/enquire/create";
        formdata["dynamicurl"] = "managecontent/v2/enquire/create";
        var urlPath = window.location.pathname;

        if (checkNUll($("#get_data_for_equiry_form").val()) != "") {
            formdata["type"] = $("#get_data_for_equiry_form").val();
            formdata["projectid"] = $("#get_data_for_equiry_form").attr("data-projectid");
            formdata["projectname"] = $("#get_data_for_equiry_form").attr("data-projectname");
        } else {
            formdata["type"] = "Enquiry";
            if (urlPath.includes('rental-projects') || urlPath.includes('residential-projects')) {
                if (typeof ProjectID !== 'undefined' && ProjectID !== null && ProjectID !== '') {
                    formdata["projectid"] = ProjectID;
                }
                if (typeof projectname !== 'undefined' && projectname !== null && projectname !== '') {
                    formdata["projectname"] = projectname;
                } else if (typeof ProjectName !== 'undefined' && ProjectName !== null && ProjectName !== '') {
                    formdata["projectname"] = ProjectName;
                }
            }
        }
        formdata["requestfrom"] = "web";
        formdata["mobileno"] = $("#enquiry_number").val();
        formdata["name"] = $("#enquiry_name").val();
        formdata["project_type"] = $("#enquire_project_type").val();
        formdata["countrycode"] = $("#enquiry_country option:selected").attr("data-contry_code_add");
        formdata["country"] = $("#enquiry_country").val();
        formdata["email"] = $("#enquiry_email").val();
        formdata["page_url"] = window.location.href;
        let order_id = localStorage.getItem("order_id") || "";
        if (order_id) {
        formdata["order_id"] = order_id;
        }
        if ($("input[name='agree_to_be_contacted']").is(":checked")) {
            formdata["marketing_update_received"] = "yes";
        }
        formdata["whatsapp_nri"] = $("#whatsapp_nri").is(":checked") ? 1 : 0;
        // formdata["li_fat_id"] = (new URLSearchParams(window.location.search)).get("li_fat_id");

        $.extend(formdata, serializeHiddenFields());
        $.extend(formdata, getAllQueryStringParams());
        // console.log("Formdata being sent:", formdata);
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                'Authorization': token
            },
            beforeSend: function() {
                $("#enquiry_submit_btn").html("Submitting..");
                $("#enquiry_submit_btn").attr("disabled", true);
            },
            success: function(response) {
                if (response.success == true) {
                    $('#enquiry_common_frm_submit')[0].reset();
                    $("#enquiry_country").val("IN").change();
                    $(".hide_infromation").removeClass("is-hidden");
                    $(".common_enquiry_bind_hidden_name").text("");
                    $(".common_enquiry_bind_hidden_number").text("");
                    $(".common_enquiry_bind_hidden_email").text("");
                    $(".common_enquire_bind_hidden_project_type").text("");
                    $(".show_infromation").addClass("is-hidden");
                    $(".enquiry_submit_btn").removeClass("is-hidden");
                    $("#enquiryotp_dd").val("");
                    showToastsuccess("Success", response.message);
                    // window.dataLayer = window.dataLayer || [];
                    // dataLayer.push({'event':'inqury_submit'});


                } else {
                    $('#enquiry_common_frm_submit')[0].reset();
                    $("#enquiry_country").val("IN").change();
                    showToast("Message", response.message);

                }
            },
            complete: function() {
                if (checkNUll($("#get_data_for_equiry_form").val()) != "") {
                    var projectid = $("#get_data_for_equiry_form").attr("data-projectid");
                    if (projectid == "1901" || projectid == "1180" || projectid == "1505" || projectid == "4361" || projectid == "1658" || projectid == "1657" || projectid == "1600" || projectid == "3952" || projectid == "2201") {
                        equiryuet_report_conversion()
                    }
                }
                $("#enquiry_submit_btn").html("Send OTP");
                $("#enquiry_submit_btn").attr("disabled", false);
                $("#enquire-sidebar").removeClass("active");
                $("#get_data_for_equiry_form").val("");
                $("#get_data_for_equiry_form").attr("data-projectid", "");
                $("#get_data_for_equiry_form").attr("data-projectname", "");
            },
            error: function(response) {}
        });
    }
    /** ENQUIRE NOW End */
    function equiryuet_report_conversion() {
        // console.log("call function enquiry_uet_report_conversion");
        window.uetq = window.uetq || [];
        window.uetq.push('event', 'submit_lead_form', {});
    }
    /** Code for all dropdown error message remove on change start */
    $(document).on("change", ".form-control.select", function() {
        $(this).siblings("label.error").remove();
    });

    $(document).on("click", ".brochuredownload", function() {
        $("label.error").remove();
        $("#enquiryname").val("");
        $("#enquirynumber").val("");
        $("#enquiryemail").val("");
        $("#fcountrycode").val("IN").change();
    });
    $(document).on("click", ".addenquire", function() {
        // Initialize validation for forms
        function ensureValidationInitialized(form) {
            if (!$(form).data('validator')) {
                $(form).validate({
                    // Define your validation rules and messages here if necessary
                });
            }
        }

        ensureValidationInitialized("#request_call_back_frm");
        ensureValidationInitialized("#request_call_back_frm1");

        // Function to reset form and clear validation messages
        function resetForm(form) {
            $(form)[0].reset();
            $(form).validate().resetForm();
            $(form).find(".error").removeClass("error"); // Remove error classes
            $(form).find(".error-msg").remove(); // Remove error messages
        }

        // Reset the first form
        $("#your_name").val("");
        $("#mobile_callback").val("");
        $("#email_callback").val("");
        $("#countrycode").val("IN").change();
        $("#schedule_date").val("");
        $("#requestcallback_time").val("");

        if ($('#request_call_back_frm').length) {
            resetForm("#request_call_back_frm");
        }

        $("#countrycode").val("IN").change();
        $(".hide_infromation").removeClass("is-hidden");
        $(".bind_hidden_name").text("");
        $(".bind_hidden_number").text("");
        $(".bind_hidden_email").text("");
        $(".show_infromation").addClass("is-hidden");
        $(".enquiry_now_submit").removeClass("is-hidden");
        $("#otp_dd").val("");

        // Reset the second form
        $("#your_name1").val("");
        $("#mobile_callback1").val("");
        $("#email_callback1").val("");
        $("#countrycode1").val("IN").change();
        $("#schedule_date1").val("");
        $("#requestcallback_time1").val("");

        if ($('#request_call_back_frm1').length) {
            resetForm("#request_call_back_frm1");
        }

        $("#countrycode1").val("IN").change();
        $(".hide_infromation1").removeClass("is-hidden");
        $(".bind_hidden_name1").text("");
        $(".bind_hidden_number1").text("");
        $(".bind_hidden_email1").text("");
        $(".show_infromation1").addClass("is-hidden");
        $(".enquiry_now_submit1").removeClass("is-hidden");
        $("#otp_dd1").val("");
    });
    $(document).on("click", ".addsitevisit", function() {
        $("#booking_fname").val("");
        $("#booking_lname").val("");
        $("#booking_number").val("");
        $("#booking_email").val("");
        $("#booking_country").val("IN").change();
        $("#booking_date").val("");
        $("#booking_time").val("");

        $('#bokking_frm_submit')[0].reset();
        $("#booking_country").val("IN").change();
        $(".requesthide_infromation").removeClass("is-hidden");
        $(".requestbind_hidden_name").text();
        $(".requestbind_hidden_number").text();
        $(".requestbind_hidden_email").text();
        $(".requestshow_infromation").addClass("is-hidden");
        $("#requestotp_dd").val("");
        $("#booking_submit_btn").removeClass("is-hidden")
    });
    
    $.validator.addMethod("textOnly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/.test(value);
    }, "Please enter only text.");

    $.validator.addMethod("panCard", function(value, element) {
        // PAN card number should be in the format of five uppercase letters followed by four digits followed by one uppercase letter
        return this.optional(element) || /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);
    }, "Please enter a valid PAN card number.");

    $(".numbervalidate").keypress(function(e) {
        var keyCode = e.keyCode || e.which;
        var regex = /^[0-9]$/;
        var isValid = regex.test(String.fromCharCode(keyCode));
        if (!isValid) {

        }
        return isValid;
    });
    $(".emailvalidator").keypress(function(e) {
        var keyCode = e.keyCode || e.which;
        var regex = /^[a-zA-Z0-9._&@+-]+$/;
        var isValid = regex.test(String.fromCharCode(keyCode));
        if (!isValid) {

        }
        return isValid;
    });
    // $.validator.addMethod("customEmail", function(value, element) {
    //     return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    // });
    $.validator.addMethod("customEmail", function(value, element) {
          return this.optional(element) || /^[A-Za-z0-9](?:[A-Za-z0-9_%+\-]*(?:\.[A-Za-z0-9_%+\-]+)*)@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/.test(value);
    });
    /** Code for all dropdown error message remove on change end */

        /** Common search Script Start */
    function bind_search_dropdown() {
        setTimeout(() => {
            if ($(".buyrentdata.is-active").length > 0) {
                var buyRentText = $(".buyrentdata.is-active").attr("data-type");
                property_type(buyRentText);
                construction_status(buyRentText);
                searchbedrooms();
                searchlocation(buyRentText);
                // projectslugdata(buyRentText);
                if (buyRentText === "Buy") {
                    $(".hide_show_class").removeClass("is-hidden");
                    $(".remove_in_rent").removeClass("is-hidden"); // Make sure to remove this class as well
                    $(".index-range-slider").attr("data-step", 1000000);
                    var slider = $(".index-range-slider").data("ionRangeSlider");
                    slider.update({
                        min: 0,
                        max: 1000000000,
                        from: 0,
                        to: 1000000000,
                        step: 1000000
                    });
                    $("#index_from").val("0");
                    $("#index_to").val("1000000000");
                    $(".index_from").text("0");
                    $(".index_to").text("100 Cr");
                } else if (buyRentText === "Rent") {
                    $(".hide_show_class").removeClass("is-hidden");
                    $(".remove_in_rent").addClass("is-hidden");
                    $(".index-range-slider").attr("data-step", 10000);
                    var slider = $(".index-range-slider").data("ionRangeSlider");
                    slider.update({
                        min: 0,
                        max: 1000000,
                        from: 0,
                        to: 1000000,
                        step: 10000
                    });
                    $("#index_from").val("0");
                    $("#index_to").val("1000000");
                    $(".index_from").text("0");
                    $(".index_to").text("10.00 Lac");
                } else {
                    $(".hide_show_class").removeClass("is-hidden");
                    $(".remove_in_conn").addClass("is-hidden");
                }
            }
        }, 1000);
    }

    function bind_search_dropdown_common() {
        setTimeout(() => {
            if ($(".buyrent.is-active").length > 0) {
                var buyRentText = $(".buyrent.is-active").attr("data-type");
                property_type(buyRentText);
                construction_status(buyRentText);
                searchbedrooms();
                searchlocation(buyRentText);
                if (buyRentText === "Buy") {
                    $(".hide_show_class_head").removeClass("is-hidden");
                    $(".remove_in_rent_head").removeClass("is-hidden"); // Make sure to remove this class as well
                    $(".common-range-slider").attr("data-step", 1000000);
                    var slider = $(".common-range-slider").data("ionRangeSlider");
                    slider.update({
                        min: 0,
                        max: 1000000000,
                        from: 0,
                        to: 1000000000,
                        step: 1000000
                    });
                    $("#searchminrang").val("0");
                    $("#searchmaxrang").val("1000000000");
                    $(".header_from_search").text("0");
                    $(".header_to_search").text("100 Cr");
                } else if (buyRentText === "Rent") {
                    $(".hide_show_class_head").removeClass("is-hidden");
                    $(".remove_in_rent_head").addClass("is-hidden");
                    $(".common-range-slider").attr("data-step", 10000);
                    var slider = $(".common-range-slider").data("ionRangeSlider");
                    slider.update({
                        min: 0,
                        max: 1000000,
                        from: 0,
                        to: 1000000,
                        step: 10000
                    });
                    $("#searchminrang").val("0");
                    $("#searchmaxrang").val("1000000");
                    $(".header_from_search").text("0");
                    $(".header_to_search").text("10.00 Lac");
                } else {
                    $(".hide_show_class_head").removeClass("is-hidden");
                    $(".remove_in_conn_head").addClass("is-hidden");
                }
            }
        }, 1000);
    }

    function property_type(buyRentText) {
        var formdata = {};
        if (buyRentText == "Buy") {
            formdata["dynamicurl"] = "managecontent/v1/getallprojecttype/list";
            formdata['propertycategory'] = "Residential";
        } else if (buyRentText == "Rent") {
            formdata["dynamicurl"] = "managecontent/v1/rrgetallprojecttype/list";
        } else {
            formdata["dynamicurl"] = "managecontent/v1/getallprojecttype/list";
            formdata['propertycategory'] = "Commercial";
        }
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $(".project_type").html("");
                $(".project_type").html("<option value='' selected disabled>Project Type</option>");

                $.each(result.data, function(i, item) {
                    if ($(".buyrentdata.is-active").attr("data-type") == "Rent") {
                        var row = '<option class="text-capitalize" value="' + item._id + '" data-propertyttype="' + item._id + '">' + item._id + '</option>';
                        $(".project_type").append(row);
                    } else {
                        if (checkNUll(item._id) != "") {
                            var row = '<option class="text-capitalize" value="' + item._id + '" data-propertyttype="' + item._id + '">' + item._id + '</option>';
                            $(".project_type").append(row);
                        }
                    }
                });

            },
            complete: function() {

            }
        });
    }

    function construction_status(buyRentText) {
        var formdata = {};
        if (buyRentText == "Buy") {
            formdata["dynamicurl"] = "managecontent/v1/getallprojectstatus/list";
            formdata['propertycategory'] = "Residential";
        } else if (buyRentText == "Rent") {
            formdata["dynamicurl"] = "managecontent/v1/getallprojectstatus/list";
            formdata['propertycategory'] = "Rental";
        } else {
            formdata["dynamicurl"] = "managecontent/v1/getallprojectstatus/list";
            formdata['propertycategory'] = "Commercial";
        }
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $(".construction_status").html("");
                $(".construction_status").html("<option value='' selected disabled>Construction Status</option>");

                $.each(result.data, function(i, item) {
                    if (checkNUll(item.ProjectStatus) != "") {
                        var row = '<option class="is-capitalized" value="' + item._id + '" data-projectstatus="' + item.ProjectStatus + '">' + item.ProjectStatus + '</option>';
                        $(".construction_status").append(row);
                    }
                });

            },
            complete: function() {

            }
        });
    }

    function searchbedrooms() {
        var formdata = {};
                formdata["dynamicurl"] = "managecontent/v1/getalllayouttype/list";
                $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $(".bedrooms").html("");
                $(".bedrooms").html("<option value='' selected disabled>Bedrooms</option>");

                $.each(result.data, function(i, item) {
                    if (checkNUll(item.typename) != "") {
                        if (item._id !== "6596793831bf9d0018f4d5ef") {
                            var row = '<option class="text-capitalize" value="' + item._id + '" data-typename="' + item.typename + '">' + item.typename + '</option>';
                            $(".bedrooms").append(row);
                        }
                    }
                });

            },
            complete: function() {

            }
        });
    }

    function searchlocation(buyRentText) {
        var formdata = {};
        if (buyRentText == "Buy") {
            // formdata["dynamicurl"] = "managecontent/v1/cityprojectcount/list";
            formdata["dynamicurl"] = "managecontent/v1/cityfilter/list";
            formdata['propertycategory'] = "Residential";
        } else if (buyRentText == "Rent") {
            formdata["dynamicurl"] = "managecontent/v1/rrprojectcitywisecount/list";
            // formdata["is_rental"] = "true";
            formdata["is_available"] = "true";
            formdata["category_name_list"] = ["Residential (Rental)","Resale & Rental"]
        } else {
            formdata["dynamicurl"] = "managecontent/v1/cityfilter/list";
            formdata['propertycategory'] = "Commercial";
        }
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $(".bindlocation").html("");
                $(".bindlocation").html("<option value='' selected disabled>Location</option>");

                $.each(result.data, function(i, item) {
                    if (checkNUll(item.CityText) != "") {
                        var row = '<option class="text-capitalize" value="' + item._id.toLowerCase() + '" data-citytext="' + item.CityText + '">' + item.CityText + '</option>';
                        $(".bindlocation").append(row);
                    }
                });

            },
            complete: function() {

            }
        });
    }

        let lastValues = {
      projectCount: null,
      activeTabType: null,
      minRange: null,
      maxRange: null,
      bindLocationText: null,
      constructionStatusText: null,
      bedroomsText: null,
      project_type: null,
      searchText: null,
      ip_address: null,
      event_name: "Search_Filter",
      event_type: ""
      };
  
      const watchTargets = [
          document.querySelector('.append-searchcount'),
          document.querySelector('.tabs-detail')
      ].filter(Boolean);
  
      let mutationTimer;
  
      if (watchTargets.length > 0) {
          const observer = new MutationObserver(() => {
              clearTimeout(mutationTimer);
              mutationTimer = setTimeout(() => {
                  const projectCount = $(".append-searchcount").text().trim() || "";
                  const activeTabType = $(".tabs-detail .tab.is-active").attr("data-type") || "";
                  const minRange = $("#searchminrang").val() || "";
                  const maxRange = $("#searchmaxrang").val() || "";
  
                  // New values directly in observer
                  const bindLocationText = $("#bindlocation option:selected").data("citytext") || "";
                  const constructionStatusText = $("#construction_status option:selected").data("projectstatus") || "";
                  const bedroomsText = $("#bedrooms option:selected").data("typename") || "";
                  const project_type = $("#project_type").val() || "";
                  const searchText = $("#bindsearch").val() || $(".search_enterkey").val() || "";
  
                  if (
                      projectCount !== lastValues.projectCount ||
                      activeTabType !== lastValues.activeTabType ||
                      minRange !== lastValues.minRange ||
                      maxRange !== lastValues.maxRange ||
                      bindLocationText !== lastValues.bindLocationText ||
                      constructionStatusText !== lastValues.constructionStatusText ||
                      bedroomsText !== lastValues.bedroomsText ||
                      project_type !== lastValues.project_type ||
                      searchText !== lastValues.searchText
                  ) {
                      
                      // MoEngage event
                      let moengageData = {
                          projectCount: projectCount,
                          activeTabType: activeTabType,
                          minPrice: minRange,
                          maxPrice: maxRange,
                          locationText: bindLocationText,
                          constructionStatusText: constructionStatusText,
                          bedroomsText: bedroomsText,
                          projectType: project_type,
                          searchText: searchText,
                          ip_address: window.userIP,
                          event_name: "Search_Filter",
                          event_type : ""                          
                      };
  
                      if (typeof Moengage !== "undefined" && Moengage.track_event) {
                          Moengage.track_event("Search_Filter", moengageData);
                      } else {
                                              }
  
                      // Update last values
                      lastValues = {
                          projectCount,
                          activeTabType,
                          minRange,
                          maxRange,
                          bindLocationText,
                          constructionStatusText,
                          bedroomsText,
                          project_type,
                          searchText,
                          ip_address: window.userIP,
                          event_name :"Search_Filter",
                          event_type : ""
                      };
                  }
              }, 50);
          });
  
          watchTargets.forEach(target => {
              observer.observe(target, { attributes: true, childList: true, subtree: true });
          });
      }
          

    $(document).on("input", ".allsearch", function() {
        var selectedsearch = $("#bindsearch").val() ? $("#bindsearch").val() : "";
        var selectedLocation = $("#bindlocation").val() ? $("#bindlocation").val().toLowerCase() : "";
        var selectedprojecttype = $("#project_type").val() ? $('#project_type option:selected').attr('data-propertyttype') : "";
        var selectedconstruction = $("#construction_status").val() ? $("#construction_status").val() : "";
        var selectedbedrooms = $("#bedrooms").val() ? $("#bedrooms").val() : "";
        setTimeout(() => {
            var minprice = parseInt($("#searchminrang").val());
            var maxprice = parseInt($("#searchmaxrang").val());
            filterlocation(selectedsearch, selectedLocation, selectedprojecttype, selectedconstruction, selectedbedrooms, minprice, maxprice)
        }, 1000);
    });
    $('.search_enterkey').on("keypress", function(e) {
        var key = e.which;
        if (key == 13) {
            var selectedsearch = $("#bindsearch").val() ? $("#bindsearch").val() : "";
            if (checkNUll(selectedsearch) != "") {
                var selectedLocation = ""
                if (checkNUll($("#bindlocation option:selected").attr("data-citytext")) != "") {
                    selectedLocation = $("#bindlocation option:selected").attr("data-citytext").toLowerCase();
                }
                var selectedprojecttype = $("#project_type").val();
                var selectedconstruction = $("#construction_status").val();
                var selectedbedrooms = $("#bedrooms").val();
                var minprice = parseInt($("#searchminrang").val());
                var maxprice = parseInt($("#searchmaxrang").val());
                var searchParam = selectedsearch ? `search=${selectedsearch}` : "";
                var Locationparam = selectedLocation ? `&location=${selectedLocation}` : "";
                var projecttypeparam = selectedprojecttype ? `&propertytype=${selectedprojecttype}` : "";
                var constructionparam = selectedconstruction ? `&construction=${selectedconstruction}` : "";
                var dbedroomsparam = selectedbedrooms ? `&dbedrooms=${selectedbedrooms}` : "";
                var minpriceparam = "";
                var maxpriceparam = "";
                var buyRentText = $(".buyrent.is-active").attr("data-type");
                if (buyRentText === "Buy" || buyRentText === "Rent") {
                    minpriceparam = minprice ? `&minprice=${minprice}` : "&minprice=0";
                    maxpriceparam = maxprice ? `&maxprice=${maxprice}` : "";

                }
                var bind_url = `?${searchParam}${Locationparam}${projecttypeparam}${constructionparam}${dbedroomsparam}${minpriceparam}${maxpriceparam}`;

                if (parseInt($(".append-searchcount").text()) !== 0 && checkNUll($(".append-searchcount").text()) != "") {
                    var languagePrefix = $("html").attr("lang");
                    var baseUrl = "https://www.prestigeconstructions.com/"; // Laravel base URL with trailing slash

                    if (languagePrefix && languagePrefix !== "en") {
                        baseUrl += languagePrefix + "/";
                    }

                    let projectType = $(".buyrent.is-active").attr("data-type");

                    if (projectType === "Buy") {
                        $(".bindsearch").attr("href", baseUrl + "residential-projects/" + bind_url);
                    } else if (projectType === "Rent") {
                        $(".bindsearch").attr("href", baseUrl + "rental-projects/" + bind_url);
                    } else {
                        // $(".bindsearch").attr("href", baseUrl + "commercial-projects/" + bind_url);
                        // $(".bindsearch").attr("href", baseUrl + "test1-commercial-our-projects" + bind_url);
                        // $(".bindsearch").attr("href", baseUrl + "commercial-projects/our-projects" + bind_url);
                        $(".bindsearch").attr("href", baseUrl + "offices/commercial-projects" + bind_url);
                    }

                    // Redirect to the generated URL
                    window.location.href = $(".bindsearch").attr("href");
                }
            }
        }
    });

    function filterlocation(selectedsearch = "", selectedLocation = "", selectedprojecttype = "", selectedconstruction = "", selectedbedrooms = "", minprice = "", maxprice = "") {
        var formdata = {};
        if (selectedsearch) {
            formdata["search"] = selectedsearch;
        }
        if (selectedLocation) {
            formdata["CityText"] = selectedLocation;
        }
        if (selectedprojecttype) {
            formdata["PropertyType"] = selectedprojecttype;
        }
        if (selectedconstruction) {
            formdata["statusfilter"] = selectedconstruction;
        }
        if (selectedbedrooms) {
            formdata["typeid"] = selectedbedrooms;
        }
        var buyRentText = $(".buyrent.is-active").attr("data-type");
        if (buyRentText === "Buy" || buyRentText === "Rent") {
            formdata["minprice"] = minprice;
            formdata["maxprice"] = maxprice;
        }
        if (buyRentText === "Buy") {
            formdata["dynamicurl"] = "managecontent/v1/projectcount/afterfilter";
            formdata['propertycategory'] = "Residential";
        } else if (buyRentText === "Rent") {
            formdata["dynamicurl"] = "managecontent/v1/rrprojectcount/afterfilter";
        } else {
            formdata["dynamicurl"] = "managecontent/v1/projectcount/afterfilter";
            formdata['propertycategory'] = "Commercial";

        }
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(response) {
                if (response.success == true && response.data.length != 0) {
                    $(".append-searchcount").html("");
                    if (response.data[0] && response.data[0].count) {
                        var totalProperties = response.data[0].count;
                        $(".append-searchcount").text(totalProperties);
                    } else {
                        $(".append-searchcount").html("").append("0");
                    }
                } else {
                    $(".append-searchcount").html("").append("0");
                }
            },
            complete: function() {}
        });
    }

    $(document).on("click", ".search-bind", function() {
        var selectedsearch = $("#bindsearch").val();
        var selectedLocation = ""
        if (checkNUll($("#bindlocation option:selected").attr("data-citytext")) != "") {
            selectedLocation = $("#bindlocation option:selected").attr("data-citytext").toLowerCase();
        }
        var selectedprojecttype = $("#project_type").val();
        var selectedconstruction = $("#construction_status").val();
        var selectedbedrooms = $("#bedrooms").val();
        var minprice = parseInt($("#searchminrang").val());
        var maxprice = parseInt($("#searchmaxrang").val());
        var searchParam = selectedsearch ? `search=${selectedsearch}` : "";
        var Locationparam = selectedLocation ? `&location=${selectedLocation}` : "";
        var projecttypeparam = selectedprojecttype ? `&propertytype=${selectedprojecttype}` : "";
        var constructionparam = selectedconstruction ? `&construction=${selectedconstruction}` : "";
        var dbedroomsparam = selectedbedrooms ? `&dbedrooms=${selectedbedrooms}` : "";
        var minpriceparam = "";
        var maxpriceparam = "";

        var buyRentText = $(".buyrent.is-active").attr("data-type");
        if (buyRentText === "Buy" || buyRentText === "Rent") {

            minpriceparam = minprice ? `&minprice=${minprice}` : "&minprice=0";
            maxpriceparam = maxprice ? `&maxprice=${maxprice}` : "";

        }

        var bind_url = `?${searchParam}${Locationparam}${projecttypeparam}${constructionparam}${dbedroomsparam}${minpriceparam}${maxpriceparam}`;

        if (parseInt($(".append-searchcount").text()) !== 0 && checkNUll($(".append-searchcount").text()) != "") {
            var languagePrefix = $("html").attr("lang");
            var basePath = "https://www.prestigeconstructions.com/"; // Laravel base URL with trailing slash

            // If not English, add language prefix
            if (languagePrefix && languagePrefix !== "en") {
                basePath += languagePrefix + "/";
            }

            var propertyType = $(".buyrent.is-active").attr("data-type");

            if (propertyType === "Buy") {
                $(".bindsearch").attr("href", basePath + "residential-projects/" + bind_url);
            } else if (propertyType === "Rent") {
                $(".bindsearch").attr("href", basePath + "rental-projects/" + bind_url);
            } else {
                // $(".bindsearch").attr("href", basePath + "commercial-projects/" + bind_url);
                // $(".bindsearch").attr("href", basePath + "commercial-projects/our-projects" + bind_url);
                // $(".bindsearch").attr("href", basePath + "commercial-projects/our-projects" + bind_url);
                $(".bindsearch").attr("href", basePath + "offices/commercial-projects" + bind_url);
            }

            // Optional: redirect immediately
            window.location.href = $(".bindsearch").attr("href");
        }




    });
    $(document).on("click", ".buyrent", function() {
        $(".buyrent").removeClass("is-active");
        $("#project_type").html("").html("<option>Fetching..</option>").change();
        $("#bindsearch").val("");
        $("#bindlocation").html("").html("<option>Fetching..</option>").change();
        $("#construction_status").html("").html("<option>Fetching..</option>").change();
        $("#bedrooms").html("").html("<option>Fetching..</option>").change();
        $(".append-searchcount").text("").text("0");
        document.querySelector('#searchminrang').value = '0';
        document.querySelector('#searchmaxrang').value = '1000000000';
        bind_search_dropdown_common();
        $(".properties-range-slider").data("ionRangeSlider").reset();
        $(this).addClass("is-active");
    });


    function formatIndianNumber(number) {
        if (number >= 10000000) {
            return (number / 10000000).toFixed(2) + ' Cr';
        } else if (number >= 100000) {
            return (number / 100000).toFixed(2) + ' Lac';
        } else {
            return number.toString();
        }
    }

    var range_sliders = $('.common-range-slider');
    range_sliders.on('input', function() {
        var str1 = $('.common-range-slider').siblings(".irs").find(".irs").find(".irs-from").html().replace(/\s/g, '');
        var str2 = $('.common-range-slider').siblings(".irs").find(".irs").find(".irs-to").html().replace(/\s/g, '');
        var fromValue = parseInt(str1);
        var toValue = parseInt(str2);

        $('.header_from_search').text(formatIndianNumber(fromValue));
        $('.header_to_search').text(formatIndianNumber(toValue));
        // $('#index_from').attr("value", formatIndianNumber(fromValue));
        // $('#index_to').attr("value", formatIndianNumber(toValue));
    });


    let selectedsearch = "";
    let currentSelectionIndex = -1;
    let previousActiveType = $(".buyrent.is-active").attr("data-type");


    /* ------------------------------
      BUY / RENT TAB CHANGE
    --------------------------------*/
    $(document).on("click", ".buyrent", function () {
      const newActiveType = $(this).attr("data-type");


      if (newActiveType !== previousActiveType) {
          previousActiveType = newActiveType;


          $("#search-suggestions").hide();
          $(".search-by-project-name").removeClass("search-suggestions-active");
      }
    });


    /* ------------------------------
      KEYBOARD NAVIGATION
    --------------------------------*/
    $("#bindsearch").on("keydown", function (e) {
      let suggestions = $("#search-suggestions li");
      let key = e.key;


      if (key === "ArrowDown") {
          e.preventDefault();
          if (currentSelectionIndex < suggestions.length - 1) {
              currentSelectionIndex++;
              highlightSuggestion(suggestions, currentSelectionIndex);
          }
      }


      if (key === "ArrowUp") {
          e.preventDefault();
          if (currentSelectionIndex > 0) {
              currentSelectionIndex--;
              highlightSuggestion(suggestions, currentSelectionIndex);
          }
      }


      if (key === "Enter") {
          e.preventDefault();
          if (currentSelectionIndex >= 0 && suggestions.length) {
              suggestions.eq(currentSelectionIndex).trigger("click");
          }
      }
    });


    /* ------------------------------
      HIGHLIGHT SUGGESTION
    --------------------------------*/
    function highlightSuggestion(suggestions, index) {
      suggestions.removeClass("active");


      if (index >= 0) {
          let $item = suggestions.eq(index);
          $item.addClass("active");


          $("#bindsearch").val($item.text());


          let container = $("#search-suggestions");
          let itemTop = $item.position().top;
          let itemBottom = itemTop + $item.outerHeight();
          let containerHeight = container.height();


          if (itemBottom > containerHeight || itemTop < 0) {
              container.scrollTop(container.scrollTop() + itemTop);
          }
      }
    }


    /* ------------------------------
      SEARCH INPUT
    --------------------------------*/
    $("#bindsearch").on("keyup", function (e) {
      const ignoreKeys = ["ArrowUp", "ArrowDown", "Enter"];
      if (ignoreKeys.includes(e.key)) return;


      selectedsearch = $(this).val().trim();
      currentSelectionIndex = -1;


      const activeType = $(".buyrent.is-active").attr("data-type");


      if (selectedsearch.length >= 3) {
          projectslugdata(activeType);
          $(".search-by-project-name").addClass("search-suggestions-active");
      } else {
          $("#search-suggestions").hide();
          $(".search-by-project-name").removeClass("search-suggestions-active");
      }
    });


    /* ------------------------------
      API CALL
    --------------------------------*/
    function projectslugdata(buyRentText) {
      let formdata = {
          search: selectedsearch,
          is_available: true,
          page: 1,
          size: 200,
          customfilter: "cms",
          // minprice: 0,
          // maxprice: 1000000000
      };


      if (buyRentText === "Buy") {
          formdata.dynamicurl = "managecontent/v2/projectinventorycms/list";
          formdata.propertycategory = "Residential";
          formdata.minprice = 0;
          formdata.maxprice = 1000000000;
      } else if (buyRentText === "Rent") {
          formdata.dynamicurl = "managecontent/v1/resalerentaldata/list";
          // formdata.propertycategory = "rental";
          // formdata.is_rental = true;
          formdata.minprice = 0;
          // formdata.maxprice = 1000000000;
          var sliderMaxPrice = parseInt($('#searchmaxrang').val());
          if (!isNaN(sliderMaxPrice) && sliderMaxPrice > 0) {
              formdata.maxprice = sliderMaxPrice;
          }
          formdata.category_name_list = [
              "Residential (Rental)",
              "Resale & Rental"
          ];
      } else {
          formdata.dynamicurl = "managecontent/v2/projectinventorycms/list";
          formdata.propertycategory = "Commercial";
      }


      $.ajax({
          type: "POST",
          dataType: "json",
          url: "https://www.prestigeconstructions.com/api/apicall",
          data: formdata,
          headers: { Authorization: token },


          success: function (response) {
              $("#search-suggestions").empty().show();


              if (response.success && Array.isArray(response.data)) {
                  let languagePrefix = $("html").attr("lang");
                  let basePath = "https://www.prestigeconstructions.com/";


                  if (languagePrefix && languagePrefix !== "en") {
                      basePath += languagePrefix + "/";
                  }


                  let projectPath =
                      buyRentText === "Buy"
                          ? "residential-projects/"
                          : buyRentText === "Rent"
                          ? "rental-projects/"
                          : "offices/commercial-projects/";


                          response.data.forEach(function (project) {
                              let slug = project.Project_slug || project.projectslug;
                              if (!slug) return;


                              let displayText =
                                  buyRentText === "Rent"
                                      ? project.projectname
                                      : project.ProjectName;


                              if (!displayText) return;


                              let url = "";


                              if (buyRentText === "Rent") {
                                  url = `${basePath}${projectPath}${slug}`;
                              } else {
                                  let citySlug = (project.CityText || "")
                                      .trim()
                                      .toLowerCase()
                                      .replace(/\s+/g, "-");


                                  if (!citySlug) return;


                                  url = `${basePath}${projectPath}${citySlug}/${slug}`;
                              }


                              $("#search-suggestions").append(
                                  `<li data-url="${url}">${displayText}</li>`
                              );
                          });


              } else {
                  $("#search-suggestions").html(
                      "<li>No matching projects found.</li>"
                  );
              }
          },


          error: function () {
              $("#search-suggestions").hide();
          }
      });
    }


    /* ------------------------------
      CLICK HANDLERS
    --------------------------------*/
    $(document).on("click", "#search-suggestions li", function () {
      $("#bindsearch").val($(this).text());
      $("#search-suggestions").hide();
      // window.open($(this).data("url"), "_blank");
      window.location.href = $(this).data("url");
    });


    $(document).on("click", function (e) {
      if (!$(e.target).closest("#bindsearch, #search-suggestions").length) {
          $("#search-suggestions").hide();
      }
    });

    

    /** Common search Script End */
    /**Start All project type detail description and form**/

    function comman_project_country() {

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
                $("#comman_countrycode").html("");
                $("#comman_countrycode").html("<option value=''>Country</option>");

                $.each(result.data, function(i, item) {
                    // if (item.description == "India") {
                    //     var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '" selected>' + item.country_code_number + '</option>';
                    //     $("#comman_countrycode").parent().addClass("focused");
                    //     $("#comman_mobile_callback").prop("maxlength", "10");
                    // } else {
                    var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '">' + item.country_code_number + '&nbsp' + item.description + '</option>';
                    // }

                    $("#comman_countrycode").append(obj);
                });

            },
            complete: function() {
                getLocationAndCityName();
            }
        });
    }
    function comman_project_adsconfiguration() {

        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/adsconfiguration/list";
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $("#adsconfiguration").html("");
                $("#adsconfiguration").html("<option value=''>Configuration</option>");

                $.each(result.data, function(i, item) {
                   
 
                    var obj = '<option class="text-capitalize"  " data-description="' + item.description + '" value="' + item.description + '">' + item.description + '</option>';
                    

                    $("#adsconfiguration").append(obj);
                });

            },
            complete: function() {
                
            }
        });
    }

        function comman_project_location(propertycategory, city_url) {
        var formdata = {};
        formdata["dynamicurl"] = "lead/v1/preferedlocation/list";
        formdata["is_available"] = true;
        formdata["propertycategory"] = propertycategory;
        // let isAdsPage = "no";

        // if (isAdsPage === "yes") {
        //     formdata["Campaign_Ads"] = "1";
        // }
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: "https://www.prestigeconstructions.com/api/apicall",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(result) {
                $("#comman_location").html("");
                $("#comman_location").html("<option value='' selected>Location</option>");

                let isAdsPage = "no";
                let isnricorner = "yes";

                $.each(result.data, function(i, item) {
                    var CityText = checkNUll(checkkeyexistornull(item, "description"));
                    var CityTextshow = CityText.toLowerCase();

                    let obj = "";

                    if (isAdsPage === "yes" ||  isnricorner === "yes") {
                        obj = `<option data-citytext="${CityText}" value="${item.code}">${item.description}</option>`;
                    }
                    else if (city_url === 'bangalore') {
                        if (CityTextshow.includes("bangalore")) {
                            obj = `<option data-citytext="${CityText}" value="${item.code}">${item.description}</option>`;
                        }
                    }
                    else if (city_url === 'mumbai') {
                        if (CityTextshow.includes("mumbai")) {
                            obj = `<option data-citytext="${CityText}" value="${item.code}">${item.description}</option>`;
                        }
                    }
                    else if (city_url === 'kozhikode' && CityTextshow === "calicut") {
                        obj = `<option data-citytext="${CityText}" value="${item.code}" selected>${item.description} (kozhikode)</option>`;
                    }
                    else if (city_url === 'cochin' && CityTextshow === "kochi") {
                        obj = `<option data-citytext="${CityText}" value="${item.code}" selected>${item.description} (cochin)</option>`;
                    }
                    else if (city_url === 'delhi-ncr' && CityTextshow.includes("delhi ncr")) {
                        obj = `<option data-citytext="${CityText}" value="${item.code}" selected>${item.description}</option>`;
                    }else if (CityTextshow === city_url) {
                    obj = `<option data-citytext="${CityText}" value="${item.code}" selected>${item.description}</option>`;
                    }

                    if (obj !== "") {
                        $("#comman_location").append(obj);
                    }
                });
            },
            complete: function() {
                let isAdsPage = "no";
                let isnricorner = "yes";

                if (isAdsPage === "yes" || isnricorner === "yes" || city_url === 'bangalore' || city_url === 'mumbai') {
                    $("#comman_location").attr("disabled", false);
                } else {
                    $("#comman_location").attr("disabled", true);
                }
            }
        });
    }


    
    function comman_project_property_type() {

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
                $("#comman_propertytype").html("");
                $("#comman_propertytype").html("<option value=''>Property Type</option>");
                $.each(result.data, function(i, item) {
                    var obj = '<option data-description="' + item.description + '" value="' + item.code + '">' + item.description + '</option>';
                    $("#comman_propertytype").append(obj);
                });

            },
            complete: function() {

            }
        });
    }


    function comman_project_source() {
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
                var $sourceSelect = $("#comman_source");
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
                        if (apiItem.code != 'Z03' && apiItem.code != 'Z04' && apiItem.code != 'Z15' && apiItem.code != 'Z39' && apiItem.code != 'Z30') {
                            if (seqItem.code === apiItem.code) {
                                // Use the dropdownName if provided, otherwise use the description
                                var displayName = seqItem.dropdownName || apiItem.description;
                                var obj = '<option data-description="' + apiItem.description + '" value="' + apiItem.code + '">' + displayName + '</option>';
                                $sourceSelect.append(obj);

                                // Set the value if the utm_source matches the item description
                                if (utmSource && utmSource === apiItem.description.toLowerCase()) {
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

    $('#comman_mobile_callback').bind("cut copy paste", function(e) {
        e.preventDefault();
    });
    $("#comman_countrycode").change(function() {

        countryvalue = $("#comman_countrycode").val();
        if (countryvalue != null && countryvalue != undefined && countryvalue != "") {
            if (countryvalue == "IN") {
                $("#comman_mobile_callback").val("");
                $("#comman_mobile_callback").prop("maxlength", "10");
            } else {
                $("#comman_mobile_callback").val("");
                $("#comman_mobile_callback").prop("maxlength", "15");
            }

        }

        function toggleWhatsAppVisibility() {
            const selectedCountryCode = $("#comman_countrycode option:selected").val();
            if (selectedCountryCode === "IN") {
                $(".comman_is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
                $(".resend_otp_btn_comman_request_call_back").addClass("is-hidden"); // Hide Resend OTP button
                $("#comman_timer_display").hide(); // Hide the timer
            } else {
                $(".comman_is_whatsapp").removeClass("is-hidden"); // Show WhatsApp section
                $(".resend_otp_btn_comman_request_call_back").removeClass("is-hidden"); // Show Resend OTP button
                $(".resend_otp_btn_comman_request_call_back").show(); // Show Resend OTP button
                // startOtpTimer(); // Start the OTP timer
            }
        }

        function whatsappNRI() {

        }

        // Trigger toggle on dropdown change
        $("#comman_countrycode").change(function() {
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
    $("#comman_request_call_back_frm").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            comman_your_name: {
                "required": true
            },
            comman_mobile_callback: {
                "required": true
            },
            comman_countrycode: {
                "required": true
            },
            comman_email_callback: {
                "required": true,
                email: true,
                customEmail: true
            },
            comman_location: {
                "required": true
            },
            comman_propertytype: {
                "required": true
            },
            comman_source: {
                "required": true
            },
            nricornerevents: {
                "required": true
            },
            agree_to_be_contacted: {
                "required": true
            },
        },
        messages: {
            comman_your_name: "<span class='error-msg'>Please Enter Name</span>",
            comman_mobile_callback: "<span class='error-msg'>Please Enter Mobile number</span>",
            comman_countrycode: "<span class='error-msg'>Please Enter Country Code</span>",
            comman_email_callback: {
                required: "<span class='error-msg'>Please Enter Email</span>",
                email: "<span class='error-msg'>Please Enter a Valid Email</span>",
                customEmail: "<span class='error-msg'>Please Enter a Valid Email</span>"
            },
            comman_location: "<span class='error-msg'>Please Select Common location</span>",
            comman_propertytype: "<span class='error-msg'>Please Select Property Type</span>",
            comman_source: "<span class='error-msg'>Please Select Source</span>",
            nricornerevents: "<span class='error-msg'>Please Select event</span>",
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

            // API NOT MEARGED IN DEV

            if ($("#whatsapp_comman").is(":checked")) {
                initSocket();
                activeWhatsAppCallback = comman_requestcallback;
                activeWhatsAppFormSelector = "#comman_request_call_back_frm";

                var waMobileNo    = $("#comman_mobile_callback").val();
                var waCountryCode = $("#comman_countrycode option:selected").attr("data-contry_code_add");
                if (!waCountryCode) { waCountryCode = "+91"; }
                var wa_age_consent       = $("#comman_request_call_back_frm input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                var wa_marketing_consent = $("#comman_request_call_back_frm input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

                var waConsentData = {};
                waConsentData["dynamicurl"]                    = "lead/v1/validatemarketingconsent";
                waConsentData["Mobile_No"]                    = waMobileNo;
                waConsentData["Mobile_CountryCode"]           = waCountryCode;
                waConsentData["is_age_consent_accepted"]      = wa_age_consent;
                waConsentData["is_marketing_consent_accepted"]= wa_marketing_consent;

                $(".comman_upcoming_submit").html("Submitting..").attr("disabled", true);

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
                            var restoreText = $("#whatsapp_comman").is(":checked") ? "Share Link" : "Send OTP";
                            $(".comman_upcoming_submit").html(restoreText).attr("disabled", false);
                        }
                    },
                    error: function() {
                        showToast("Error", "Something went wrong during consent validation. Please try again.");
                        var restoreText = $("#whatsapp_comman").is(":checked") ? "Share Link" : "Send OTP";
                        $(".comman_upcoming_submit").html(restoreText).attr("disabled", false);
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
                    formdata["Page_Name"]          = lastPart + " - Comman Upcoming Enquiry In City";
                    formdata["Plateform_Name"]     = "web";
                    formdata["RequestFrom"]        = "Website";
                    formdata["Session_ID"]         = socketId;
                    formdata["Type"]               = "Enquiry Now";

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
                            $(".comman_upcoming_submit").attr("disabled", false);
                            var restoreText = $("#whatsapp_comman").is(":checked") ? "Share Link" : "Send OTP";
                            $(".comman_upcoming_submit").html(restoreText);
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

            var mobileNo = $("#comman_mobile_callback").val();
            var countryCodeAttr = $("#comman_countrycode option:selected").attr("data-contry_code_add");
            var is_age_consent       = $("#comman_request_call_back_frm input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
            var is_marketing_consent = $("#comman_request_call_back_frm input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

            var consentData = {};
            consentData["dynamicurl"]                   = "lead/v1/validatemarketingconsent";
            consentData["Mobile_No"]                    = mobileNo;
            consentData["Mobile_CountryCode"]           = countryCodeAttr;
            consentData["is_age_consent_accepted"]      = is_age_consent;
            consentData["is_marketing_consent_accepted"]= is_marketing_consent;

            $(".comman_upcoming_submit").html("Submitting..").attr("disabled", true);

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: consentData,
                headers: { 'Authorization': token },
                success: function(consentResponse) {
                    if (consentResponse.success == true) {
                        sendCommanOtp(mobileNo, countryCodeAttr);
                    } else {
                        showToast("Message", consentResponse.message || "Consent validation failed.");
                        $(".comman_upcoming_submit").html("Send OTP").attr("disabled", false);
                    }
                },
                error: function() {
                    showToast("Error", "Something went wrong during consent validation. Please try again.");
                    $(".comman_upcoming_submit").html("Send OTP").attr("disabled", false);
                }
            });

            function sendCommanOtp(mobileNo, countryCodeAttr) {
                formdata["dynamicurl"] = "employee/v2/customersendotp";
                formdata["Mobile_No"] = $("#comman_mobile_callback").val();
                formdata["Mobile_CountryCode"] = $("#comman_countrycode option:selected").attr("data-contry_code_add");
                var emailbind = $("#comman_countrycode option:selected").attr("data-contry_code_add");
                if (emailbind !== "+91") {
                    formdata["Email"] = $("#comman_email_callback").val();
                }
                formdata["whatsapp_nri"] = $("#whatsapp_nri_comman_request_call_back").is(":checked") ? 1 : 0;

                $.ajax({
                    method: "POST",
                    url: "https://www.prestigeconstructions.com/api/apicall",
                    dataType: "json",
                    data: formdata,
                    headers: {
                        'Authorization': token
                    },
                    beforeSend: function() {
                        $(".comman_upcoming_submit").html("Submitting..");
                        $(".comman_upcoming_submit").attr("disabled", true);
                    },
                    success: function(response) {
                        if (response.success == true) {
                            $.each(response.data, function(i, item) {
                                var userId = item._id;
                                $("#otp_verify").val(userId);
                            });
                            $(".comman_hide_infromation").addClass("is-hidden");
                            $(".comman_bind_hidden_name").text($("#comman_your_name").val());
                            $(".comman_bind_hidden_number").text($("#comman_mobile_callback").val());
                            $(".comman_bind_hidden_email").text($("#comman_email_callback").val());
                            $(".comman_show_infromation").removeClass("is-hidden");
                            var mobileCountryCode = formdata["Mobile_CountryCode"];
                            if (mobileCountryCode === "+91") {
                                showToast("Success", "Prestige Experience Code has been sent to your mobile.");
                            } else {
                                showToast("Success", "Prestige Experience Code has been sent to your email.");
                            }
                            if (formdata["whatsapp_nri"] === 0) {
                                $(".comman_timer_display").hide();
                                $(".comman_resend_otp_container").addClass("is-hidden");
                            } else {
                                startOtpTimer();
                            }
                        } else {
                            showToast("Message", response.message);
                        }
                        $(".comman_upcoming_submit").addClass("is-hidden");
                    },
                    complete: function() {
                        $("#enquire-now-sidebar").removeClass("active");
                    },
                    error: function(response) {}
                });
            }
        }
    });

    function commanrequestcallbackresendOtp() {
        const mobileNumber = $("#comman_mobile_callback").val();
        const mobileCountryCode = $("#comman_countrycode option:selected").attr("data-contry_code_add");
        const email = $("#comman_email_callback").val();
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
            beforeSend: function() {
                $(".resend_otp_btn_comman_request_call_back").text("Resending...").attr("disabled", true);
            },
            success: function(response) {
                if (response.success) {
                    // Update the OTP ID in the hidden input field
                    $("#whatsapp_nri_comman_request_call_back").prop("checked", false);
                    const newOtpId = response.data[0]._id;
                    $("#otp_verify").val(newOtpId);
                    // console.log("New OTP _id:", newOtpId);
                    showToast("Success", "OTP sent successfully in Email.");
                    // startOtpTimer(); // Restart the timer after a successful resend
                } else {
                    showToast("Error", response.message || "Failed to resend OTP.");
                }
            },
            complete: function() {
                $(".resend_otp_btn_comman_request_call_back").text("Resend OTP").attr("disabled", false).hide();
                // setTimeout(() => {
                //   $(".resend_otp_btn_comman_request_call_back").text("Resending...").attr("disabled", true).hide();
                // }, 2000);
            },
            error: function(xhr) {
                console.error(xhr);
                showToast("Error", "Something went wrong. Please try again.");
            }
        });
    }

    // Event Listener for Resend OTP button
    $(".resend_otp_btn_comman_request_call_back").on("click", function() {
        commanrequestcallbackresendOtp();
    });

    $("#comman_otp_verify_frm").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            comman_otp_dd: {
                "required": true
            },
        },
        messages: {
            comman_otp_dd: "<span class='error-msg'>Please Enter OTP</span>",
        },
        submitHandler: function(form) {
            var formdata = {};
            formdata["dynamicurl"] = "employee/v1/customerverifyotp";
            formdata["otp"] = $("#comman_otp_dd").val();
            formdata["_id"] = $("#otp_verify").val();
            $(".theme-loader.form-loader.comman-city").addClass("active");

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".comman_otp_submit_btn").html("Submitting..");
                    $(".comman_otp_submit_btn").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                        comman_requestcallback();

                        var consentSaveData = {};
                        consentSaveData["dynamicurl"]                    = "lead/v1/common/consent/save";
                        consentSaveData["Mobile_No"]                     = $("#comman_mobile_callback").val();
                        consentSaveData["Mobile_CountryCode"]            = $("#comman_countrycode option:selected").attr("data-contry_code_add");
                        consentSaveData["is_age_consent_accepted"]       = $("#comman_request_call_back_frm input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                        consentSaveData["is_marketing_consent_accepted"] = $("#comman_request_call_back_frm input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";
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
                        $("#comman_otp_dd").val("");
                    }

                },
                complete: function() {
                    $(".comman_otp_submit_btn").html("Submit");
                    $(".comman_otp_submit_btn").attr("disabled", false);
                    $("#enquire-now-sidebar").removeClass("active");
                    setTimeout(() => {
                        $(".theme-loader.form-loader.comman-city").removeClass("active");
                    }, 1000);
                },
                error: function(response) {}
            });
        }
    });

    function comman_requestcallback() {
        var formdata = new FormData();
        formdata.append("dynamicurl", "managecontent/v2/upcomingrequestcallback/create");
        formdata.append("customer_id", CustomerId);
        formdata.append("type", "upcoming");
        formdata.append("mobile_no", $("#comman_mobile_callback").val());
        formdata.append("requestfrom", "web");
        formdata.append("name", $("#comman_your_name").val());
        formdata.append("countrycode", $("#comman_countrycode option:selected").attr("data-contry_code_add"));
        formdata.append("adsconfiguration", $("#adsconfiguration option:selected").attr("data-description"));
        formdata.append("nricornerevents", $("#nricornerevents option:selected").attr("data-description"));
        formdata.append("country", $("#comman_countrycode").val());
        formdata.append("email", $("#comman_email_callback").val());
        formdata.append("locationid", $("#comman_location").val());
        formdata.append("locationnname", $("#comman_location option:selected").attr("data-citytext"));
        formdata.append("properttypeid", $("#comman_propertytype").val());
        formdata.append("properttypename", $("#comman_propertytype option:selected").attr("data-description"));
        formdata.append("sourceid", $("#comman_source").val());
        formdata.append("sourcename", $("#comman_source option:selected").attr("data-description"));
        formdata.append("page_url", window.location.href);
        formdata.append("whatsapp_nri", $("#whatsapp_nri_comman_request_call_back").is(":checked") ? 1 : 0);

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


        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: extendedFormData, // Use the updated FormData
            headers: {
                'Authorization': token
            },
            processData: false,
            contentType: false,
            beforeSend: function() {
                $(".comman_upcoming_submit").html("Submitting..");
                $(".comman_upcoming_submit").attr("disabled", true);
            },
            success: function(response) {
                if (response.success == true) {
                    $('#comman_request_call_back_frm')[0].reset();
                    $("#comman_countrycode").val("IN").change();
                    $(".comman_hide_infromation").removeClass("is-hidden");
                    $(".comman_bind_hidden_name").text("");
                    $(".comman_bind_hidden_number").text("");
                    $(".comman_bind_hidden_email").text("");
                    $(".comman_show_infromation").addClass("is-hidden");
                    $(".comman_upcoming_submit").removeClass("is-hidden");
                    $("#comman_otp_dd").val("");
                    $("#comman_propertytype").val("").change();
                    $("#comman_source").val("").change();
                    $("#nricornerevents").val($("#nricornerevents option:selected").val()).change();
                    $("#adsconfiguration").val($("#adsconfiguration option:selected").val()).change();
                    if (window.location.pathname.startsWith("/ads")) {
                        var canonicalUrl = $("link[rel='canonical']").attr("href");

                        if (canonicalUrl) {
                            // 1. /ads/ ko /residential-projects/ mein replace karna
                            var modifiedUrl = canonicalUrl.replace("/ads/", "/residential-projects/");

                            // 2. sirf first 5 segments rakhna
                            var segments = modifiedUrl.split("/");
                            var shortUrl = segments.slice(0, 5).join("/");

                            // 3. localStorage me store karna
                            localStorage.setItem("redirect_canonical", shortUrl);
                        }

                        window.location.href = "https://www.prestigeconstructions.com/thank-you";
                    }else{
                      showToastsuccess("Success", response.message);
                    }
                    
                } else {
                    showToast("Message", response.message);
                    $('#comman_request_call_back_frm')[0].reset();
                    $("#comman_countrycode").val("IN").change();
                }
            },
            complete: function() {
                $(".comman_upcoming_submit").html("Send OTP");
                $(".comman_upcoming_submit").attr("disabled", false);
                $("#enquire-now-sidebar").removeClass("active");
            },
            error: function(response) {}
        });
    }

    /**End All project type detail description and form**/
    /** city vise banner bind in resident projects start */

    function get_banner_image(CityText) {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/bannerimage/list";
        formdata["is_available"] = true;
        formdata["city_name"] = CityText;

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
                    $(".hide_project_images").removeClass("is-hidden");
                    $.each(response.data, function(i, item) {
                        if (i == 0) {
                            var data_type = checkNUll(checkkeyexistornull(item, "data_type"));
                            var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
                            var alttextbind = "";
                            if (checkNUll(alt_text) !== "") {
                                alttextbind = "alt='" + alt_text + "'";
                            } else {
                                alttextbind = "";
                            }
                            $.each(item.small_image, function(i, images) {
                                var bind_banner_image = "";
                                if (data_type != "" && checkNUll(images) != "") {
                                    if (data_type == "video") {
                                        bind_banner_image = `<video width="" height="" autoplay="" muted="" loop="">
                                                                <source src="${item.large_video_url[i]}" type="video/mp4">
                                                            </video>`;
                                    } else {
                                        bind_banner_image = `<picture>
                                                        <source media="(max-width:400px)" srcset="${changeToWebP(images)}" type="image/webp">
                                                        <source media="(max-width:400px)" srcset="${changeToWebP(images)}" type="image/jpg">
                                                        <source media="(max-width:768px)" srcset="${changeToWebP(item.medium_image[i])}" type="image/webp">
                                                        <source media="(max-width:768px)" srcset="${changeToWebP(item.medium_image[i])}" type="image/jpg">
                                                        <source media="(max-width:1350px)" srcset="${changeToWebP(item.large_image[i])}" type="image/webp">
                                                        <source media="(max-width:1350px)" srcset="${changeToWebP(item.large_image[i])}" type="image/jpg">
                                                        <source srcset="${changeToWebP(item.Ex_large_image[i])}" type="image/webp">
                                                        <source srcset="${changeToWebP(item.Ex_large_image[i])}" type="image/jpg">
                                                        <img src="${changeToWebP(item.Ex_large_image[i])}" ${alttextbind} width="1920" height="500">
                                                    </picture>`;
                                    }
                                }

                                if (checkNUll(bind_banner_image) != "") {
                                    var project_images_bind = `<li class="splide__slide">
                                        <div class="projects-img">
                                            ${bind_banner_image}
                                        </div>
                                    </li>`;

                                    $(".project_images_bind").append(project_images_bind);
                                }
                            });
                            var discription = checkNUll(checkkeyexistornull(item, "discription"));
                            if (checkNUll(discription) != "") {
                                var discription_bind = `${discription}`
                                $(".bind-citydetil").append(discription_bind);
                            }
                        }

                    });
                } else {
                    $(".hide_project_images").addClass("is-hidden");
                }
            },
            complete: function() {
                new Splide("#featured-projects-img-slider", {
                    type: "loop",
                    arrows: !1,
                    perPage: 1,
                    perMove: 1,
                    pauseOnHover: !1,
                    autoplay: "true",
                    interval: "3000",
                    speed: "2000",
                    pagination: !1
                }).mount();
            },
            error: function(response) {}
        });
    }
    /** city vise banner bind in resident projects end */


    function get_location_rounded_pill(CityText, PropertyCategory, dynamic_Classes, setactiveclassonselectedbtn, url = "managecontent/v1/citywisedirection/list",category_name = "") {
        var formdata = {};
        formdata["dynamicurl"] = url;
        if (checkNUll(CityText) != "") {
            formdata["citytext"] = CityText;
        }
        if (url != "managecontent/v1/rrproject/citywisedirection/list") {
            if (checkNUll(CityText) != "") {
                formdata["PropertyCategory"] = PropertyCategory;
            }
        } else {
            if (checkNUll(category_name) != "") {
                formdata["category_name"] = category_name;
            }
        }
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(response) {
                $(".bind_location_basedon_city").html("");
                if (response.success == true && response.data.length > 0) {
                    $.each(response.data, function(i, item) {
                        var addclassactive = "";
                        if (setactiveclassonselectedbtn === checkNUll(item.Direction)) {
                            addclassactive = "active";
                        }
                        if (PropertyCategory == "Residential" && CityText == "bangalore" && item.Direction == "east") {

                            var row = `<li>
                                      <a class="${dynamic_Classes} theme-btn gray-btn line-btn rounded-pill ${addclassactive} is-capitalize" href="${CityText}/properties-in-east-bangalore" data-directiontype="${checkNUll(item.Direction)}">
                                      ${checkNUll(item.Direction)}
                                      </a>
                                      </li>`;
                            // var row = `<li>
                            //             <a class="${dynamic_Classes} theme-btn gray-btn line-btn rounded-pill ${addclassactive} is-capitalize" href="${CityText}/properties-in-${checkNUll(item.Direction)}-${CityText}" data-directiontype="${checkNUll(item.Direction)}">
                            //             ${checkNUll(item.Direction)}
                            //             </a>
                            //             </li>`;
                        } else if (PropertyCategory == "Residential" && CityText == "mumbai") {

                            // var row = `<li>
                            //             <a class="${dynamic_Classes} theme-btn gray-btn line-btn rounded-pill ${addclassactive} is-capitalize" href="${CityText}/properties-in-east-bangalore" data-directiontype="${checkNUll(item.Direction)}">
                            //             ${checkNUll(item.Direction)}
                            //             </a>
                            //             </li>`;
                            var row = `<li>
                                    <a class="${dynamic_Classes} theme-btn gray-btn line-btn rounded-pill ${addclassactive} is-capitalize" href="${CityText}/properties-in-${checkNUll(item.Direction)}-${CityText}" data-directiontype="${checkNUll(item.Direction)}">
                                    ${checkNUll(item.Direction)}
                                    </a>
                                    </li>`;

                        }else if (PropertyCategory == "Residential" && CityText == "hyderabad") {

                        // var row = `<li>
                        //             <a class="${dynamic_Classes} theme-btn gray-btn line-btn rounded-pill ${addclassactive} is-capitalize" href="${CityText}/properties-in-east-bangalore" data-directiontype="${checkNUll(item.Direction)}">
                        //             ${checkNUll(item.Direction)}
                        //             </a>
                        //             </li>`;
                        var row = `<li>
                                <a class="${dynamic_Classes} theme-btn gray-btn line-btn rounded-pill ${addclassactive} is-capitalize" href="${CityText}/properties-in-${checkNUll(item.Direction)}-${CityText}" data-directiontype="${checkNUll(item.Direction)}">
                                ${checkNUll(item.Direction)}
                                </a>
                                </li>`;

                            }
                         else {

                            var row = `<li>
                                      <a class="${dynamic_Classes} theme-btn gray-btn line-btn rounded-pill ${addclassactive} is-capitalize" href="javascript:void(0);" data-directiontype="${checkNUll(item.Direction)}">
                                      ${checkNUll(item.Direction)}
                                      </a>
                                      </li>`;
                        }
                        $(".bind_location_basedon_city").append(row);
                    });

                    var row = `<li>
                    <a class="dataactive theme-btn gray-btn line-btn rounded-pill bind_all_Dropdwons" href="javascript:void(0);">
                    Custom Search
                    </a></li>`;
                    $(".bind_location_basedon_city").append(row);
                } else {
                    var row = ` <li>
                    <a class="dataactive theme-btn gray-btn line-btn rounded-pill bind_all_Dropdwons" href="javascript:void(0);">
                    Custom Search
                    </a></li>`;
                    $(".bind_location_basedon_city").append(row);
                }

            },
            complete: function() {

            },
            error: function(response) {}
        });
    }
    /* new test city */
    const header = document.querySelector("#header");
    const toggleClass = "sticky";

    window.addEventListener("scroll", () => {
        if (header) {
            const currentScroll = window.scrollY || window.pageYOffset;
            if (currentScroll > 100) {
                header.classList.add(toggleClass);
            } else if (currentScroll < 50) {
                header.classList.remove(toggleClass);
            }
        }
    });

    // let sidebarbody = document.querySelector('body')
    // let sidebartoggle = document.querySelector('#responsive-sidebar-trigger')
    // sidebartoggle.addEventListener('click', () => {
    //     sidebarbody.classList.toggle('responsive-sidebar-active')
    // });
    /** above code is same as below code but in jquery */
    $('#responsive-sidebar-trigger').click(function() {
        $('body').toggleClass('responsive-sidebar-active');
    });

    // window.addEventListener('load', function() {
    //     document.body.classList.add('loaded');
    // });


    function serializeHiddenFields() {
        var hiddenFields = {};
        $('input[type="hidden"]').each(function() {
            var name = $(this).attr('name');
            var value = $(this).val();
            hiddenFields[name] = value;
        });
        /*tracker_code start */
        const stored = localStorage.getItem("tracker_code");

        
        if (hiddenFields.tracker_code && hiddenFields.tracker_code.trim() !== "") {
            localStorage.setItem("tracker_code", hiddenFields.tracker_code);
        }
        
        else if (stored) {
            hiddenFields.tracker_code = stored;
            $('input[name="tracker_code"]').val(stored);
        }
        /*tracker_code end */

         /* ===== gclid start ===== */
        const storedGclid = localStorage.getItem("gclid");

        if (hiddenFields.gclid && hiddenFields.gclid.trim() !== "") {
            localStorage.setItem("gclid", hiddenFields.gclid);
        } else if (storedGclid) {
            hiddenFields.gclid = storedGclid;
            $('input[name="gclid"]').val(storedGclid);
        }
        /* ===== gclid end ===== */
        return hiddenFields;
    }
    /* tracker_code global start */
    (function () {
        const params = new URLSearchParams(window.location.search);
        const urlTracker = params.get('tracker_code');
        const stored = localStorage.getItem('tracker_code');

        
        if (urlTracker && urlTracker.trim() !== '') {
            if (urlTracker !== stored) {
                localStorage.setItem('tracker_code', urlTracker);
            }
        }
        const urlGclid = params.get('gclid');
        const storedGclid = localStorage.getItem('gclid');

        if (urlGclid && urlGclid.trim() !== '' && urlGclid !== storedGclid) {
            localStorage.setItem('gclid', urlGclid);
        }

    })();
  /* tracker_code global end */



    // Start:: recent project add

    /* Set-Get NewDeviceId into Cookie::Start */
    function generateDeviceId() {
        // Function to generate a random alphanumeric string
        function generateRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }
        // Check if deviceId in cookie exists
        const deviceId = getCookie('deviceId');
        if (deviceId) {
            return deviceId;
        } else {
            let newDeviceId;
            do {
                newDeviceId = generateRandomString(20);
                // Check if the generated ID already exists
            } while (getCookie(newDeviceId));
            // Set the cookie with the new device ID
            setCookie('deviceId', newDeviceId, 365); // Expires in 365 days
            return newDeviceId;
        }
    }
    // Function to set cookie
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
    }
    // Function to get cookie
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim().split('=');
            if (cookie[0] === name) {
                return cookie[1];
            }
        }
        return null;
    }
    // Function to clear cookie
    function clearCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
    // Assign the device ID
    const deviceId = generateDeviceId();
    /* Set-Get NewDeviceId into Cookie::End */

    // Add recent viewed projects to recentprojects create ::Start
    function addrecentviewedprojects(projectId, projectURL, rrProject) {
        var formdata = {};
        formdata["dynamicurl"] = 'managecontent/v1/recentview/project/create';
        formdata["project_id"] = projectId;
        formdata["page_url"] = projectURL;
        formdata["is_rrproject"] = rrProject;
        formdata["token"] = deviceId;

        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(response) {},
            complete: function() {},
            error: function(respomse) {}
        });
    }
    // Add recent viewed projects to recentprojects create ::End
    // End:: recent project add


    function getQueryParams() {
        var params = {};
        window.location.search.substr(1).split("&").forEach(function(item) {
            var param = item.split("=");
            params[param[0]] = decodeURIComponent(param[1]);
        });
        return params;
    }

    //  // Get query parameters and convert to JSON
    //  var queryParams = getQueryParams();
    //  var jsonParams = JSON.stringify(queryParams);



    function getAllQueryStringParams() {
        const queryString = window.location.search;
        const params = {};
        if (queryString) {
            const paramPairs = queryString.substring(1).split('&'); // Remove leading '?'
            for (const pair of paramPairs) {
                const [key, value] = pair.split('=');
                params[key] = decodeURIComponent(value); // Decode URI-encoded values
            }
        }
          /* tracker_code start */
          // const stored = localStorage.getItem("tracker_code");

          
          // if (params.tracker_code && params.tracker_code.trim() !== "") {
          //     localStorage.setItem("tracker_code", params.tracker_code);
          // }
          
          // else if (stored) {
          //     params.tracker_code = stored;
          // }
          /* tracker_code end */
        return params;
    }


    

        function getmenuinvestors() {
        var formdata = {};
                formdata["page"] = 1;
        formdata["size"] = 30;
        formdata["dynamicurl"] = "managecontent/v1/menu/list";
        formdata["site_code"] = SiteCode;
        formdata["search"] = 'investors';
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                'Authorization': token
            },
            beforeSend: function() {
                // $(".theme-loader").addClass("active");
            },
            success: function(response) {

                var menudetails = JSON.parse(response.data[0].menu_details, true);
                if (menudetails.length > 0) {

                    var finaldata = `<div class="accordian investors-accordian">`;
                    menudetails.forEach((element, index) => {
                        var childdata = "";
                        // var image = "";
                        // if (element.EmployeeImage != "" && element.EmployeeImage != undefined && element.EmployeeImage != undefined) {
                        //     image = `<img class="m-12" src="${element.EmployeeImage}" alt="Image" height="50%">`;
                        // }
                        if (element.hasOwnProperty("children")) {
                            // console.log(element.children);
                            finaldata += `<div class="accordian_item">
                                            <div class="accordian_title adddatalinks">
                                                <h4>${element.text}</h4>
                                            </div>
                                            <div class="accordian_desc">`;
                            finaldata += getchildelementdatainvestors(element.children);
                            finaldata += `</div>`;
                            finaldata += `</div>`;
                            // console.log(element.Text)
                        } else {
                            // finaldata += `<li>${element.Text}${image}</li>`;

                            if (element.target == "_blank") {
                                finaldata += `<div class="accordian_item accordian-title-with-arrow">
                                            <div class="accordian-title-with-link ">
                                                <a href="${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                                    <h4>${element.text}</h4>
                                                </a>
                                            </div>
                                        </div>`;
                            } else {
                                // <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                //  <a href="${localizedCdnPath}/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                finaldata += `<div class="accordian_item">
                                                <div class="accordian-title-with-link ">
                                                    <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                                        <h4>${element.text}</h4>
                                                    </a>
                                                </div>
                                            </div>`;
                            }
                        }
                    });
                    $(".append-investor-sidemenu-here").html("").append(finaldata + "</div>");
                }
            },
            complete: function() {
                $('.accordian_title').click(function(j) {

                    var dropDown = $(this).closest('.accordian_item').find('.accordian_desc');
                    $(this).closest('.accordian').find('.accordian_desc').not(dropDown).slideUp();

                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).closest('.accordian').find('.accordian_title.active').removeClass('active');
                        $(this).addClass('active');
                    }

                    dropDown.stop(false, true).slideToggle();
                    j.preventDefault();
                });
                $('.accordian_title_inner').click(function(j) {


                    var dropDown = $(this).closest('.accordian_item_inner').find('.accordian_desc_inner');
                    $(this).closest('.accordian').find('.accordian_desc_inner').not(dropDown).slideUp();

                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).closest('.accordian').find('.accordian_title_inner.active').removeClass('active');
                        $(this).addClass('active');
                    }

                    dropDown.stop(false, true).slideToggle();
                    j.preventDefault();
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
                if (xhr.status == "403" || xhr.status == 403) {
                    logout();
                }
            }
        });
    }

    function getchildelementdatainvestors(childtata) {
                var tempchilddata = "<ul>";
        childtata.forEach((element, index) => {
            var image = "";
            if (element.hasOwnProperty("children")) {
                if (element.target == "_blank") {
                    tempchilddata += `<li><div class="accordian_item_inner">
                                    <span class="accordian_title_inner">
                                        <a href="${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                            ${element.text}
                                        </a>
                                    </span>
                                    <div class="accordian_desc_inner">`;
                } else {
                    // <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                    // <a href="${localizedCdnPath}/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                    tempchilddata += `<li><div class="accordian_item_inner">
                                    <span class="accordian_title_inner">
                                        <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                            ${element.text}
                                        </a>
                                    </span>
                                    <div class="accordian_desc_inner">`;
                }
                tempchilddata += getchildelementdatainvestors(element.children);
                tempchilddata += `</div>`;
                tempchilddata += `</div></li>`;
            } else {
                if (element.target == "_blank") {
                    tempchilddata += `<li>
                                        <a href="${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug accordian-title-with-arrow">${element.text}</a>
                                    </li>`;
                } else {
                    // console.log(element.href)
                    // <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">${element.text}</a>
                    // <a href="${localizedCdnPath}/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">${element.text}</a>
                    tempchilddata += `<li>
                                    <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">${element.text}</a>
                                </li>`;
                }
            }
        });
        return tempchilddata + "</ul>";
    }
    
    
    

    function getmenudirector() {
        // var cdnpath = "https://www.prestigeconstructions.com";
        //   var localizedCdnPathdirector = `${cdnpath}/${currentLang}`;
        //   var cdnpath = "https://www.prestigeconstructions.com";
        // var localizedCdnPathdirector = currentLang === 'en' ? cdnpath : `${cdnpath}/${currentLang}`;
        var formdata = {};
        formdata["page"] = 1;
        formdata["size"] = 30;
        formdata["dynamicurl"] = "managecontent/v1/menu/list";
        formdata["site_code"] = SiteCode;
        formdata["search"] = 'aboutus';
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                'Authorization': token
            },
            beforeSend: function() {
                // $(".theme-loader").addClass("active");
            },
            success: function(response) {
                var menudetails = JSON.parse(response.data[0].menu_details, true);
                if (menudetails.length > 0) {

                    var finaldata = `<div class="accordian board-of-directors-accordian">`;
                    menudetails.forEach((element, index) => {
                        var childdata = "";
                        // var image = "";
                        // if (element.EmployeeImage != "" && element.EmployeeImage != undefined && element.EmployeeImage != undefined) {
                        //     image = `<img class="m-12" src="${element.EmployeeImage}" alt="Image" height="50%">`;
                        // }
                        if (element.hasOwnProperty("children")) {
                            // console.log(element.children);
                            finaldata += `<div class="accordian_item">
                                            <div class="accordian_title adddatalinks">
                                                <h4>${element.text}</h4>
                                            </div>
                                            <div class="accordian_desc">`;
                            finaldata += getchildelementdatadirector(element.children);
                            finaldata += `</div>`;
                            finaldata += `</div>`;
                            // console.log(element.Text)
                        } else {
                            // finaldata += `<li>${element.Text}${image}</li>`;

                            if (element.target == "_blank") {
                                finaldata += `<div class="accordian_item accordian-title-with-arrow">
                                            <div class="accordian-title-with-link ">
                                                <a href="${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                                    <h4>${element.text}</h4>
                                                </a>
                                            </div>
                                        </div>`;
                            } else {
                                // console.log(element.href)
                                // <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                // <a href="${localizedCdnPathdirector}/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                finaldata += `<div class="accordian_item">
                                                <div class="accordian-title-with-link ">
                                                    <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                                        <h4>${element.text}</h4>
                                                    </a>
                                                </div>
                                            </div>`;
                            }
                        }
                    });
                    $(".append-aboutus-sidemenu-here").html("").append(finaldata + "</div>");
                }
            },
            complete: function() {
                $('.accordian_title').click(function(j) {
                    var dropDown = $(this).closest('.accordian_item').find('.accordian_desc');
                    $(this).closest('.accordian').find('.accordian_desc').not(dropDown).slideUp();

                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).closest('.accordian').find('.accordian_title.active').removeClass('active');
                        $(this).addClass('active');
                    }

                    dropDown.stop(false, true).slideToggle();
                    j.preventDefault();
                });
                $('.accordian_title_inner').click(function(j) {

                    var dropDown = $(this).closest('.accordian_item_inner').find('.accordian_desc_inner');
                    $(this).closest('.accordian').find('.accordian_desc_inner').not(dropDown).slideUp();

                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).closest('.accordian').find('.accordian_title_inner.active').removeClass('active');
                        $(this).addClass('active');
                    }

                    dropDown.stop(false, true).slideToggle();
                    j.preventDefault();
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
                if (xhr.status == "403" || xhr.status == 403) {
                    logout();
                }
            }
        });
    }

    function getchildelementdatadirector(childtata) {
        // var cdnpath = "https://www.prestigeconstructions.com";
        //   var localizedCdnPathdirector = `${cdnpath}/${currentLang}`;
        // var cdnpath = "https://www.prestigeconstructions.com";
        // var localizedCdnPathdirector = currentLang === 'en' ? cdnpath : `${cdnpath}/${currentLang}`;
        var tempchilddata = "<ul>";
        childtata.forEach((element, index) => {
            var image = "";
            if (element.hasOwnProperty("children")) {
                if (element.target == "_blank") {
                    // console.log(element.href)
                    tempchilddata += `<li><div class="accordian_item_inner">
                                    <span class="accordian_title_inner">
                                        <a href="${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                            ${element.text}
                                        </a>
                                    </span>
                                    <div class="accordian_desc_inner">`;
                } else {
                    // console.log(element.href)
                    // <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                    // <a href="${localizedCdnPathdirector}/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                    tempchilddata += `<li><div class="accordian_item_inner">
                                    <span class="accordian_title_inner">
                                        <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">
                                            ${element.text}
                                        </a>
                                    </span>
                                    <div class="accordian_desc_inner">`;
                }
                tempchilddata += getchildelementdatadirector(element.children);
                tempchilddata += `</div>`;
                tempchilddata += `</div></li>`;
            } else {
                if (element.target == "_blank") {
                    // console.log(element.href)
                    // <a href="${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">${element.text}</a>
                    tempchilddata += `<li>
                                        <a href="${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">${element.text}</a>
                                    </li>`;
                } else {
                    // console.log(element.href)
                    // <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">${element.text}</a>
                    // <a href="${localizedCdnPathdirector}/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">${element.text}</a>
                    tempchilddata += `<li>
                                    <a href="https://www.prestigeconstructions.com/${element.href}" target="${element.target}" title="${element.title}" class="tab2 clickeventforslug">${element.text}</a>
                                </li>`;
                }
            }
        });
        return tempchilddata + "</ul>";
    }

    
                
        function calculateReadingTime(text) {
        const words = text.split(/\s+/).length;
        let minutes;

        if (words <= 500) {
            minutes = 4;
        } else if (words <= 600) {
            minutes = 5;
        } else if (words <= 750) {
            minutes = 6;
        } else if (words <= 800) {
            minutes = 6;
        } else if (words <= 1000) {
            minutes = 8;
        } else if (words <= 1250) {
            minutes = 11;
        } else if (words <= 1500) {
            minutes = 15;
        } else {
            minutes = Math.ceil(words / 100);
        }

        return minutes;
    }

    function shortenNumber(number) { // Output: 20k+
        if (number >= 1000 && number < 10000) {
            return (Math.floor(number / 1000)) + 'k+';
        } else if (number >= 10000) {
            return Math.floor(number / 1000) + 'k+';
        } else {
            return number;
        }
    }


    /* Residential Projects City List Start */
    function projectcitylistwithcountlocation(locationid = "") {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/cityprojectcount/list";
        formdata["is_available"] = true;
        formdata["propertycategory"] = "Residential";
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            datatype: "json",
            data: formdata,
            // async: false,
            headers: {
                'Authorization': token
            },
            success: function(response) {
                if (response.success == true && response.data.length > 0) {
                    $.each(response.data, function(i, item) {
                        var CityText = checkNUll(checkkeyexistornull(item, "CityText")).toLowerCase();
                        // console.log(item.CityText);

                        var projectCount = item.count + " Projects Available";

                        // Update the relevant span tag based on city name
                        $('.residential_project_citylist_location').find(`span[data-citytext="${CityText}"]`).text(projectCount);
                    });
                }
                // Static condition for Delhi NCR
                // $('.residential_project_citylist_location').find('span[data-citytext="delhi-ncr"]').text("0 Projects Available");
            },
            complete: function() {
                // projectlist();
                $('.residential_project_citylist_location').find(`span[data-citytext="all"]`).hide();
                $(".theme-loader").removeClass("active");
            }
        });
    }
    


    
     // Residential Projects City List Start new
      function projectcitylistwithcountlocation_new(locationid) {
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
          // async: false,
          headers: {
            'Authorization': token
          },
          success: function(response) {
            $('.residential_project_citylist').html('');
            if (response.success == true && response.data.length > 0) {
              //   console.log(locationid);
              $.each(response.data, function(i, item) {
                var CityText = checkNUll(checkkeyexistornull(item, "CityText")).toLowerCase();
                var count = checkkeyexistornull(item, "count");
                if (checkNUll(locationid) != "") {

                  if (CityText == locationid) {

                    // <a href="https://www.prestigeconstructions.com/${currentLang}/residential-projects/${CityText}" class="btnclickprojectcity"  data-city="${CityText}">
                    // <a href="JAVASCRIPT:;" class="btnclickprojectcity" data-city="${CityText}">
                    var projectcity = `<li>
                                <a href="https://www.prestigeconstructions.com/residential-projects/${CityText}" class="btnclickprojectcity"  data-city="${CityText}">
                                        <div class="projects-location-items projectactive active cursor-pointer" data-citytext='${item.CityText}' data-citycode='${item.CityText}'>
                                            <h4>${item.CityText}</h4>
                                            <span>${count} Projects Available</span>
                                        </div>
                                        </a>
                                    </li>`;
                    $('.residential_project_citylist_location_new').append(projectcity);
                  } else {
                    // <!--<a href="https://www.prestigeconstructions.com/${currentLang}/residential-projects/${CityText}" data-city="${CityText}">-->
                    //   <a href="JAVASCRIPT:;" class="btnclickprojectcity" data-city="${CityText}">
                    var projectcity = `<li>
                                              <a href="https://www.prestigeconstructions.com/residential-projects/${CityText}" class="btnclickprojectcity" data-city="${CityText}">
                                                <div class="projects-location-items projectactive  cursor-pointer" data-citytext='${item.CityText}' data-citycode='${item.CityText}'>
                                                    <h4>${item.CityText}</h4>
                                                    <span>${count} Projects Available</span>
                                                </div>
                                                </a>
                                            </li>`;
                    $('.residential_project_citylist_location_new').append(projectcity);
                  }
                  // if(CityText=="all"){
                  //   $('[data-citycode="all"]').addClass('active');
                  // }
                } else {
                  // <!--<a href="https://www.prestigeconstructions.com/${currentLang}/residential-projects/${CityText}" data-city="${CityText}">-->
                  //   <a href="JAVASCRIPT:;" class="btnclickprojectcity" data-city="${CityText}"></a>
                  var projectcity = `<li>
                            <a href="https://www.prestigeconstructions.com/residential-projects/${CityText}" class="btnclickprojectcity" data-city="${CityText}">
                                                <div class="projects-location-items projectactive cursor-pointer" data-citytext='${item.CityText}' data-citycode='${item.CityText}'>
                                                    <h4>${item.CityText}</h4>
                                                    <span>${count} Projects Available</span>
                                                </div>
                                                </a>
                                            </li>`;
                  $('.residential_project_citylist_location_new').append(projectcity);
                }


              });
              setTimeout(() => {

                if (checkNUll(locationid) != "" && checkNUll(locationid) != localStorage.getItem('currentlocationbyipadress')) {
                  // console.log("1");
                  $('.submit_btn').trigger('click');
                } else if (checkNUll(locationid) == "" && checkNUll(locationid) == localStorage.getItem('currentlocationbyipadress')) {
                  // console.log("2");
                  if (checkNUll($('.projectactive.active').attr("data-citycode")) != "") {

                    projectlist(locationid);

                  } else {
                    projectlist();

                  }
                } else {

                  // console.log("3");

                  if ($("#is_active_filter").val() === "yes") {

                    $('.submit_btn').trigger('click');
                  } else if (checkNUll(locationid) == localStorage.getItem('currentlocationbyipadress')) {
                    $('.projectactive.active').trigger('click');
                  } else {
                    // projectlist();
                  }
                }
              }, 1000);
            } else {
              projectlist();
            }
          },
          complete: function() {
            $(".theme-loader").removeClass("active");
            var add_class = "";
            if (checkNUll($('.projectactive.active').attr("data-citycode")) == "") {
              add_class = "active"
            }
            // <a href="https://www.prestigeconstructions.com/residential-projects/" data-city="${CityText}">
            //<a href="JAVASCRIPT:;" class="btnclickprojectcity" data-city="all">
            var projectcity = `<li>
                                      
                                         <a href="https://www.prestigeconstructions.com/residential-projects" class="btnclickprojectcity" data-city="all">
                                        <div class="projects-location-items projectactive cursor-pointer ${add_class}" data-citycode='all'>
                                            <h4>All Properties</h4>
                                        </div>
                                      </a>
                                </li>`;
            $('.residential_project_citylist_location_new').prepend(projectcity);
          }
        });
      }



    // Residential Projects City List End new
 
    /* class 'section' use to remove  specified classes request()->query('platform') !== 'app'  start */
    document.addEventListener("DOMContentLoaded", function() {
        // Get the query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const platform = urlParams.get('platform');

        // Check if the platform is 'app'
        if (platform === 'app') {
            // Get all elements with the class 'section'
            const sections = document.querySelectorAll('.section');

            // Loop through each section and remove the specified classes
            sections.forEach(function(section) {
                section.classList.remove('section-inner-page', 'pt-6');
            });
        }
    });
    /* class 'section' use to remove  specified classes request()->query('platform') !== 'app'  end */



    window.addEventListener("load", function () {
      var currentLang = document.documentElement.lang;

      // Check if the pop-up info modal should be visible based on the data attribute and cookie
      if (currentLang !== 'hi' && currentLang !== 'kn') {
          if ($('#pop-up-info').data('cookie-visible') === true && !getCookie('cookiesAccepted-pop-up')) {
              // Show the modal if it has not been accepted previously
              $('#pop-up-info').addClass('is-active');
          } else {
              // Hide the modal if the cookie has been accepted
              $('#pop-up-info').removeClass('is-active');
          }
      } else {
          $('#pop-up-info').removeClass('is-active');
      }

      // Event listener for the "Ok" button
      $('.btn-pop-up').on('click', function(e) {
          e.preventDefault();

          // Hide the modal
          $('#pop-up-info').removeClass('is-active');

          // Set the "cookiesAccepted-pop-up" cookie to true for 365 days
          setCookie('cookiesAccepted-pop-up', 'true', 365);
      });
      if (currentLang === 'hi' || currentLang === 'kn') {
          if ($('#pop-up-info-lang').data('cookie-visible') === true && !getCookie('cookiesAccepted-pop-up-lang-' + currentLang)) {
              $('#pop-up-info-lang').addClass('is-active');
          } else {
              $('#pop-up-info-lang').removeClass('is-active');
          }
      } else {
          $('#pop-up-info-lang').removeClass('is-active');
      }

      $('.btn-pop-up-lang').on('click', function(e) {
          e.preventDefault();
          $('#pop-up-info-lang').removeClass('is-active');
          setCookie('cookiesAccepted-pop-up-lang-' + currentLang, 'true', 365);
      });




      // Check if the cookie block has already been accepted
      if ($('.full-screen-cookie-block').data('cookie-visible') === true) {
          if (!getCookie('cookiesAccepted') && !getCookie('cookiesAcceptednecessary')) {
              // Show the cookie block if neither cookie is accepted
              $('.full-screen-cookie-block').removeClass('is-hidden');
          } else {
              // Hide the cookie block if any cookie is accepted
              $('.full-screen-cookie-block').addClass('is-hidden');
          }
      }

      function trackMoengageEvent(eventName) {
      if (typeof Moengage !== "undefined") {
          Moengage.track_event(eventName, {
              ip_address: window.userIP ,
              event_name: eventName, 
              event_type: ""
          });
      }
      }
      // Handle "Accept All " button
      $('.cookie-accept-btn').on('click', function(e) {
          e.preventDefault();

          // Hide the cookie block
          $('.full-screen-cookie-block').addClass('is-hidden');

          // Set the "cookiesAccepted" cookie to true for 365 days
          setCookie('cookiesAccepted', 'true', 365);

          // Enable performance cookies by default
          setCookie('cookiesPerformance', 'true', 365);
          trackMoengageEvent("all_cookies");
      });
      // Handle "Accept All Cookies" button
      $('.accept-all-cookies').on('click', function(e) {
          e.preventDefault();

          // Hide the cookie block
          $('.full-screen-cookie-block').addClass('is-hidden');

          // Set the "cookiesAccepted" cookie to true for 365 days
          setCookie('cookiesAccepted', 'true', 365);

          // Enable performance cookies by default
          setCookie('cookiesPerformance', 'true', 365);
          trackMoengageEvent("accept_all_cookies");

      });

      // Handle "Necessary Only" button click
      $('.necessary-btn-pop-up').on('click', function(e) {
          e.preventDefault();

          // Hide the cookie block
          $('.full-screen-cookie-block').addClass('is-hidden');

          // Set the "cookiesAcceptednecessary" cookie to true for 365 days
          setCookie('cookiesAcceptednecessary', 'true', 365);

          // Disable performance cookies
          setCookie('cookiesPerformance', 'false', 365);
          trackMoengageEvent("necessary_only_cookies");
      });

      // Handle "Confirm My Choices" button
      $('.confirm-my-choices').on('click', function(e) {
          e.preventDefault();

          // Hide the cookie block
          $('.full-screen-cookie-block').addClass('is-hidden');

          // Check the state of the switch-input checkbox
          if ($('.switch-input').prop('checked') === true) {
              // Enable performance cookies
              setCookie('cookiesPerformance', 'true', 365);
          } else {
              // Disable performance cookies
              setCookie('cookiesPerformance', 'false', 365);
          }

          // Set the "cookiesAcceptednecessary" cookie to true for 365 days
          setCookie('cookiesAcceptednecessary', 'true', 365);
          trackMoengageEvent("confirm_my_choices_cookies");
      });

      // Handle "Accept All Cookies" and "Confirm My Choices" in the cookie settings modal
      $('.accept-all-cookies, .confirm-my-choices').on('click', function(e) {
          e.preventDefault();

          // Hide the modal
          $('#cookie-settings-modal').removeClass('is-active');

          if ($(this).hasClass('accept-all-cookies')) {
              // Set the "cookiesAccepted" cookie to true for 365 days
              setCookie('cookiesAccepted', 'true', 365);

              // Enable performance cookies by default
              setCookie('cookiesPerformance', 'true', 365);
              trackMoengageEvent("accept_all_cookies");
          }

          if ($(this).hasClass('confirm-my-choices')) {
              // Check the state of the switch-input checkbox
              if ($('.switch-input').prop('checked') === true) {
                  // Enable performance cookies
                  setCookie('cookiesPerformance', 'true', 365);
              } else {
                  // Disable performance cookies
                  setCookie('cookiesPerformance', 'false', 365);
              }

              // Set the "cookiesAcceptednecessary" cookie to true for 365 days
              setCookie('cookiesAcceptednecessary', 'true', 365);
              trackMoengageEvent("confirm_my_choices_cookies");
          }
      });
    });
    /** Sanitize Text Start */
    

        $(document).on("input paste keyup",'input[type="text"], input[type="email"], input[type="date"], input[type="number"]', function () {
          const sanitizedValue = sanitizeInput($(this).val());
          $(this).val(sanitizedValue);
        });

      function sanitizeInput(input) {
        function escapeRegExp(str) {
          return str.replace(/[.*+?^=!:${}()|[\]\\]/g, '\\$&');
        }

        const dangerousCommands = [
          'shutdown', 'reboot', 'curl',
          '.sh', '.exe', '.bat', '.cmd', '.js', '.vbs', '.php', '.pl', '.asp', '.jsp', '.cgi',
          '|', ';', '&&', '||', '`', '>', '<', '$', '(', ')', '{', '}'
        ];

        const sqlInjectionPatterns = [
          /\b(INSERT|DELETE|ALTER|TRUNCATE|REVOKE|)\b/gi,
          /--/g,
          /\bOR\b.*\b1=1\b/gi,
          /\bAND\b.*\b1=1\b/gi,
          /' OR '.*'='.*'/g,
          /' AND '.*'='.*'/g,
          /'\s+OR\s+\d+=\d+/g,
          /\bEXEC\b/gi,
          /\bXP_CMDSHELL\b/gi,
        ];

        const dangerousFunctionCalls = [
          /\b(delete|insert|remove|alter|revoke|truncate)\s*\(/gi,
          /\b(union\s+drop\s+table|alter\s+table)\b/gi,
          /\b(db\.\s*admin|db\.\s*system)/gi
        ];

        const scriptRegex = /<script.*?>.*?<\/script>/gi;
        const extensionRegex = /\.(exe|sh|bat|cmd|js|vbs|php|pl|asp|jsp|cgi)$/gi;

        dangerousCommands.forEach(cmd => {
          const escapedCmd = escapeRegExp(cmd);
          const regex = new RegExp(`\\b${escapedCmd}\\b`, 'gi');
          input = input.replace(regex, '');
        });

        input = input.replace(scriptRegex, '').replace(extensionRegex, '');

        [...sqlInjectionPatterns, ...dangerousFunctionCalls].forEach(pattern => {
          input = input.replace(pattern, '');
        });
        const emojiRegex = /\p{Emoji}/gu;
        const emojis = input.match(emojiRegex) || [];

        input = input.replace(/&{2,}/g, '&');
        input = input.replace(/[^a-zA-Z0-9\s\[\]()'",\-_.@+/?&\p{Emoji}:]/gu, '');

        return input;
      }
    /** Sanitize Text End */

    /**Dropdown**/
        document.querySelectorAll('[data-toggle="dropdown"]').forEach((o=>{o.addEventListener("click",(function(){const o=this.parentElement,e=o.querySelector(".dropdown-menu");if(!e)return;document.querySelectorAll(".dropdown").forEach((e=>{if(e!==o){e.classList.remove("show");const o=e.querySelector(".dropdown-menu");o&&o.classList.remove("dropdown-menu-top","dropdown-menu-left","dropdown-menu-right")}})),o.classList.toggle("show");const t=e.getBoundingClientRect(),d=window.innerHeight-t.bottom,n=t.top,r=t.left,i=window.innerWidth-t.right;e.classList.remove("dropdown-menu-top","dropdown-menu-left","dropdown-menu-right"),d<t.height&&n>=t.height?e.classList.add("dropdown-menu-top"):i<t.width&&r>=t.width?e.classList.add("dropdown-menu-left"):r<t.width&&i>=t.width&&e.classList.add("dropdown-menu-right")}))}));

    document.addEventListener("click",(function(o){o.target.closest(".dropdown")||document.querySelectorAll(".dropdown").forEach((o=>{o.classList.remove("show"),o.querySelector(".dropdown-menu").classList.remove("dropdown-menu-top","dropdown-menu-left","dropdown-menu-right")}))}));

    /**End Dropdown**/
        // Hover event
        $(document).on("mouseenter", ".social-icons", function () {
        var description = $(this).data("description");
        var link = $(this).attr("href");

        // Console log (optional)
        
        // MoEngage Event
        if (typeof Moengage !== "undefined") {
            Moengage.track_event("Hovered_Footer_Social_icons", {
                social_platform: description,
                link: link,
                ip_address: window.userIP ,
                event_name : "Hovered_Footer_Social_icons",
                event_type :""
            });
        }
    });
            
   // Click event
    $(document).on("click", ".social-icons", function (e) {
        var description = $(this).data("description");
        var link = $(this).attr("href");

        // Console log (optional)
        
        // MoEngage Event
        if (typeof Moengage !== "undefined") {
            Moengage.track_event("Clicked_Footer_Social_icons", {
                social_platform: description,
                link: link,
                ip_address: window.userIP,
                event_name : "Clicked_Footer_Social_icons",
                event_type :""
            });
        }
    });
        $(document).on("click", ".click_sales_enquiry_number", function (e) {
          var contactValue = $(this).text().trim();

          console.log("Clicked Sales Enquiry:", contactValue);

          if (typeof Moengage !== "undefined") {
              Moengage.track_event("click_sales_enquiry_number", {
                  contact_type: "Sales Enquiry",
                  contact_value: contactValue,
                  page_url: window.location.href,
                  ip_address: window.userIP,
                  event_name : "click_sales_enquiry_number",
                  event_type :""
              });
          }
      });
      
      $(document).on("click", ".click_other_enquiry_number", function (e) {
          var contactValue = $(this).text().trim();

          console.log("Clicked Other Enquiry:", contactValue);

          if (typeof Moengage !== "undefined") {
              Moengage.track_event("click_other_enquiry_number", {
                  contact_type: "Other Enquiry",
                  contact_value: contactValue,
                  page_url: window.location.href,
                  ip_address: window.userIP,
                  event_name : "click_other_enquiry_number",
                  event_type :""
              });
          }
      });

      $(document).on("click", ".click_website_email_properties", function (e) {
          var contactValue = $(this).text().trim();

          console.log("Clicked Email:", contactValue);

          if (typeof Moengage !== "undefined") {
              Moengage.track_event("click_website_email_properties", {
                  contact_type: "Email",
                  contact_value: contactValue,
                  page_url: window.location.href,
                  ip_address: window.userIP,
                  event_name : "click_website_email_properties",
                  event_type :""
              });
          }
      });
      // Global check for "Please accept" error on forms :start
$(document).on('invalid-form.validate', 'form', function () {
  var $form = $(this);

    setTimeout(function () {

        var $errorLabels = $form.find('label.error').filter(function () {
            return $(this).text().toLowerCase().indexOf('please accept') > -1;
        });

        if ($errorLabels.length > 0) {

            $errorLabels.hide(); // hide validation message

            showToast(
                "Message",
                "Please accept the Terms & Conditions and Privacy Policy to continue."
            );

            setTimeout(closeToast, 2000);
        }

    }, 10);
});

$(document).on('click', 'button[type="submit"], input[type="submit"], .common_submit_btn', function () {

    var $form = $(this).closest('form');

    if ($form.length) {

        setTimeout(function () {

          var $errorLabels = $form.find('label.error').filter(function () {
            return $(this).text().toLowerCase().indexOf('please accept') > -1;
          });

            if ($errorLabels.length > 0) {

                $errorLabels.hide(); // hide validation message

                showToast(
                    "Message",
                    "Please accept the Terms & Conditions and Privacy Policy to continue."
                );

                setTimeout(closeToast, 2000);
            }

        }, 10);
    }
});
// this css add label.error[for="agree_to_be_contacted"]{display:none !important;}
// Global check for "Please accept" error on forms :end

function triggerMoEngageWebsiteOTPEvent() {
    if (typeof Moengage !== "undefined" && Moengage.track_event) {
        var pageUrl = window.location.href;
        var gclid = localStorage.getItem("gclid");
        var orderId = localStorage.getItem("order_id");
        
        var moengageData = {
            "Page URL": pageUrl
        };
        
        if (gclid && gclid.trim() !== "") {
            moengageData["gclid"] = gclid;
        }
        
        if (orderId && orderId.trim() !== "") {
            moengageData["DataLayer Order ID"] = orderId;
        }
        
        Moengage.track_event("website_OTP", moengageData);
    }
}

function triggerMoEngageWebsiteVerifyOTPEvent() {
    if (typeof Moengage !== "undefined" && Moengage.track_event) {
        var pageUrl = window.location.href;
        var gclid = localStorage.getItem("gclid");
        var orderId = localStorage.getItem("order_id");
        
        var moengageData = {
            "Page URL": pageUrl
        };
        
        if (gclid && gclid.trim() !== "") {
            moengageData["gclid"] = gclid;
        }
        
        if (orderId && orderId.trim() !== "") {
            moengageData["DataLayer Order ID"] = orderId;
        }
        
        Moengage.track_event("website_verify_OTP", moengageData);
    }
}

function triggerMoEngageFormSubmitEvent(leadType, apiName) {
    if (typeof Moengage !== "undefined" && Moengage.track_event) {
        var pageUrl = window.location.href;
        var gclid = localStorage.getItem("gclid");
        var orderId = localStorage.getItem("order_id");
        
        var moengageData = {
            "Page URL": pageUrl,
            "API URL": apiName,
            "Lead Type": leadType
        };
        
        if (gclid && gclid.trim() !== "") {
            moengageData["gclid"] = gclid;
        }
        
        if (orderId && orderId.trim() !== "") {
            moengageData["DataLayer Order ID"] = orderId;
        }
        
        Moengage.track_event("website_lead_create", moengageData);
    }
}

$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    if (originalOptions.data && originalOptions.data.dynamicurl) {
        var dynamicUrl = originalOptions.data.dynamicurl;
        
        if (dynamicUrl === "employee/v2/customersendotp") {
            jqXHR.done(function(response) {
                if (response && response.success === true) {
                    triggerMoEngageWebsiteOTPEvent();
                }
            });
        } else if (dynamicUrl === "employee/v1/customerverifyotp") {
            jqXHR.done(function(response) {
                if (response && response.success === true) {
                    triggerMoEngageWebsiteVerifyOTPEvent();
                }
            });
        } else {
            var apiMap = {
                "managecontent/v3/requestcallback/create": "Request Callback",
                "managecontent/v2/referral/create": "Referral",
                "managecontent/v2/upcomingrequestcallback/create": "Upcoming Callback",
                "managecontent/v2/enquire/create": "Enquiry",
                "managecontent/v2/svsitevisit/add": "Site Visit",
                "lead/v1/common/whatsapp/verification/generate": "WhatsApp"
            };
            
            if (apiMap[dynamicUrl]) {
                jqXHR.done(function(response) {
                    if (response && response.success === true) {
                        triggerMoEngageFormSubmitEvent(apiMap[dynamicUrl], dynamicUrl);
                    }
                });
            }
        }
    }
});

// Common function for tracking MoEngage events with UTM parameters
function getMoengageUtmAttributes() {
    var urlParams = new URLSearchParams(window.location.search);
    
    var utm_source = urlParams.get('utm_source');
    var utm_medium = urlParams.get('utm_medium');
    var utm_campaign = urlParams.get('utm_campaign');
    var campid = urlParams.get('campid') || urlParams.get('gad_campaignid');
    
    var platform = utm_source ? utm_source : "website";
    var campaign_type = utm_medium ? utm_medium : "";
    var campaigntype = utm_medium ? utm_medium : "";
    var campaign_name = utm_campaign ? utm_campaign : "";
    var campaign = campid ? campid : "";
    var website_url = window.location.href;

    return {
        "url": website_url,
        "campaign_name": campaign_name,
        "campaign": campaign,
        "campaign_type": campaign_type,
        "campaigntype": campaigntype,
        "platform": platform
    };
}

// Common function for tracking MoEngage events with UTM parameters
function trackCommonMoengageEvent(event_name, event_attributes) {
    if (typeof Moengage === "undefined" || !Moengage.track_event) {
        return;
    }
    event_attributes = event_attributes || {};
    var utm_attributes = getMoengageUtmAttributes();
    var final_attributes = Object.assign({}, event_attributes, utm_attributes);
    
    if (typeof Moengage._original_track_event === "function") {
        Moengage._original_track_event(event_name, final_attributes);
    } else {
        Moengage.track_event(event_name, final_attributes);
    }
}

// Global Interceptor: Automatically attach UTM parameters to ALL Moengage.track_event calls site-wide
(function setupMoengageGlobalInterceptor() {
    function applyPatch() {
        if (typeof window.Moengage !== "undefined" && typeof window.Moengage.track_event === "function" && !window.Moengage._original_track_event) {
            var originalTrackEvent = window.Moengage.track_event;
            window.Moengage._original_track_event = originalTrackEvent;

            window.Moengage.track_event = function(event_name, event_attributes) {
                event_attributes = event_attributes || {};
                var utm_attributes = getMoengageUtmAttributes();
                var final_attributes = Object.assign({}, event_attributes, utm_attributes);
                
                return originalTrackEvent.call(window.Moengage, event_name, final_attributes);
            };
        }
    }

    applyPatch();

    var patchInterval = setInterval(function() {
        applyPatch();
        if (window.Moengage && window.Moengage._original_track_event) {
            clearInterval(patchInterval);
        }
    }, 300);

    setTimeout(function() {
        clearInterval(patchInterval);
    }, 10000);
})();