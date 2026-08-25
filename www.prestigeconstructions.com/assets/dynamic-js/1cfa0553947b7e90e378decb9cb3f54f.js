var socket;
    var socketId = "";
    var activeWhatsAppCallback = null;
    var activeWhatsAppFormSelector = "";

    // Socket URL (same server that serves socket.io/socket.io.js — guaranteed version match)
    var _socketUrl = "https://cpidev.preoss.in";
    (function() {
        var h = window.location.hostname;
        if (h === 'cpiuat.preoss.in' || h === 'uatmyprestige.prestigeconstructions.com' || h === 'uatcorporatesite.preoss.in') {
            _socketUrl = "https://cpiuat.preoss.in";
        } else if (h === 'dashboard.preoss.in' || h === 'myprestige.prestigeconstructions.com' || h === 'www.prestigeconstructions.com' || h === 'prestigeconstructions.com') {
            _socketUrl = "https://dashboard.preoss.in";
        }
    })();

    // Connect socket — called when WhatsApp radio selected
    function initSocket() {
        if (socket && socketId) return; // already connected

        socket = io.connect(_socketUrl, {
            secure: true,
            reconnect: true,
            rejectUnauthorized: false,
            transports: ['websocket']
        });

        socket.on('connect', function() {
            socketId = socket.id;
            socket.emit("subscribe", socketId);
            // console.log("Socket connected! Session_ID:", socketId);
        });

        // Listen for WhatsApp URL pushed by server
        socket.on('message', function(dataObj) {
            if (!dataObj || !dataObj.message) return;
            if (dataObj.message.Type !== "Enquiry Now" && dataObj.message.Type !== "Enquiry Verification" && dataObj.message.Type !== "Myprestige Verification" && dataObj.message.Type !== "Virtual Tour") return;

            var response = dataObj.message.data;
            var msgText  = (response && response.message) || dataObj.message.Description || "";

            $(".common_submit_btn").attr("disabled", false);
            $(".common_submit_btn").html($(".common_submit_btn").attr('data-original-text') || "Submit");

            // success == 200 → verified; 400 → error (e.g. mobile mismatch)
            if (response && (response.success == 200 || response.success === "200")) {
                showToastsuccess("Success", msgText || "Code verified successfully.");

                // Capture values BEFORE form reset
                var savedMobileNo     = $(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val();
                var savedCountryCode  = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
                var savedAgeConsent   = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                var savedMktConsent   = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

                if (typeof activeWhatsAppCallback === "function") {
                    activeWhatsAppCallback();
                } else {
                    enquiryrequestcallback();
                }

                // Save consent using captured values
                var waConsentSave = {};
                waConsentSave["dynamicurl"]                    = "lead/v1/common/consent/save";
                waConsentSave["Mobile_No"]                    = savedMobileNo;
                waConsentSave["Mobile_CountryCode"]           = savedCountryCode;
                waConsentSave["is_age_consent_accepted"]      = savedAgeConsent;
                waConsentSave["is_marketing_consent_accepted"]= savedMktConsent;
                waConsentSave["VerifiedFrom"]                 = "Website";
                waConsentSave["From"]                         = "Web";
                $.ajax({ method: "POST", url: "https://www.prestigeconstructions.com/api/apicall", dataType: "json", data: waConsentSave, headers: { 'Authorization': token } });

                if (activeWhatsAppFormSelector) {
                    var $activeForm = $(activeWhatsAppFormSelector);
                    if ($activeForm.length && $activeForm[0]) {
                        $activeForm[0].reset();
                    }
                } else {
                    $('#enquiry_common_frm_submit')[0].reset();
                }
                $("#enquiry_country").val("IN").change();
                $("#enquire-sidebar").removeClass("active");
            } else {
                showToast("Error", msgText || "Verification failed.");
            }
        });

        socket.on('connect_error', function(err) {
            console.warn("Socket connect_error:", err.message);
            // Fallback: generate a local Session_ID so form can still submit
            if (!socketId) { socketId = Date.now().toString(36) + Math.random().toString(36).substr(2, 6); }
        });
    }

    // Radio button toggle: WhatsApp URL → "Share Link", Mobile/OTP → "Submit"
    $(document).on('change', 'input[name="contact_type"]', function() {
        var $radio = $(this);
        var $form = $radio.closest('form');
        var selectedId = $form.find('input[name="contact_type"]:checked').attr('id');
        var submitBtn = $form.find('button[type="submit"], input[type="submit"], .common_submit_btn');
        if (selectedId && selectedId.indexOf('whatsapp') !== -1) {
            initSocket();
            if (!submitBtn.attr('data-original-text')) {
                submitBtn.attr('data-original-text', submitBtn.html());
            }
            submitBtn.html('Share Link');
        } else {
            var originalText = submitBtn.attr('data-original-text');
            if (originalText) {
                submitBtn.html(originalText);
            }
        }
    });

    // On form reset, re-trigger radio change to restore button text
    $(document).on('reset', 'form', function() {
        var $form = $(this);
        setTimeout(function() {
            $form.find('input[name="contact_type"]').trigger('change');
        }, 0);
    });

    // Global auto-correct: ensure submit button text matches contact_type radio after any AJAX call :start
    $(document).ajaxComplete(function() {
        setTimeout(function() {
            $('input[name="contact_type"]:checked').each(function() {
                var $form = $(this).closest('form');
                var selectedId = $(this).attr('id') || '';
                var $btn = $form.find('button[type="submit"], input[type="submit"], .common_submit_btn');
                if ($btn.length && !$btn.prop('disabled')) {
                    if (selectedId.indexOf('whatsapp') !== -1 && $btn.text().trim() !== 'Share Link') {
                        $btn.html('Share Link');
                    } else if (selectedId.indexOf('whatsapp') === -1 && $btn.text().trim() === 'Submit') {
                        $btn.html('Send OTP');
                    }
                }
            });
        }, 100);
    });
    // Global auto-correct: ensure submit button text matches contact_type radio after any AJAX call :end


    
// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(() => {
//     fetch("https://www.prestigeconstructions.com/getip")
//     .then(res => res.json())
//         .then(data => {
//           const userIP = data.client_ip;
//           window.userIP = userIP;
          
//           document.cookie = `User_IP_Captured=${userIP}; path=/; max-age=${7 * 24 * 60 * 60}`;
          
//           Moengage.track_event("User_IP_Captured", {
//             ip_address: userIP
//           });
//         })
//         .catch(err => {
//           console.error("IP Fetch Error:", err);
//         });
//       }, 5000);
//       });

$(document).ready(function () {
        var languages = ["hi", "kn", "ta", "ml", "te", "mr", "gu", "en"];

        function getCurrentLang() {
            var pathParts = window.location.pathname.split("/").filter(part => part !== "");
            var firstSegment = pathParts[0];
            return languages.includes(firstSegment) ? firstSegment : "en";
        }

        function setActiveLanguage(currentLang) {
            $(".language-link").removeClass("active");
            $('.language-link[data-lang="' + currentLang + '"]').addClass("active");
        }

      
        var currentLang = getCurrentLang();
        setActiveLanguage(currentLang);

        
        $(".language-link").click(function (e) {
            e.preventDefault();

            var selectedLang = $(this).data("lang");
            var pathParts = window.location.pathname.split("/").filter(part => part !== "");
            var baseUrl = window.location.origin;
            var firstSegment = pathParts[0];
            var isLangInUrl = languages.includes(firstSegment);
            var currentLang = isLangInUrl ? firstSegment : "en";

            
            if (selectedLang === currentLang) return;

            
            if (!isLangInUrl && selectedLang === "en") {
                $(".language-link").removeClass("active");
                $(this).addClass("active");
                return;
            }

            
            if (isLangInUrl) pathParts.shift();

            // var newPath = (selectedLang === "en")
            //     ? "/" + pathParts.join("/")
            //     : "/" + selectedLang + "/" + pathParts.join("/");
            var remainingPath = pathParts.join("/");

            var newPath = "";
            if (selectedLang === "en") {
                newPath = remainingPath ? "/" + remainingPath : "";
            } else {
                newPath = remainingPath ? "/" + selectedLang + "/" + remainingPath : "/" + selectedLang;
            }

            var newUrl = baseUrl + (newPath === "/" ? "" : newPath);

            
            $(".language-link").removeClass("active");
            $(this).addClass("active");

            window.location.href = newUrl;
        });
    });
document.addEventListener("DOMContentLoaded",(function(){setTimeout((()=>{fetch("https://www.prestigeconstructions.com/getip",{headers:{Accept:"application/json"}}).then((e=>e.json())).then((e=>{const t=e.client_ip;window.userIP=t,document.cookie=`User_IP_Captured=${t}; path=/; max-age=604800`,Moengage.track_event("User_IP_Captured",{ip_address:t}),Moengage.add_user_attribute("ip_address",t)})).catch((e=>console.error("IP Fetch Error:",e)))}),5e3)}));


function toggleDropdown(el){
    var dropdown = el ? el.closest(".custom-dropdown") : document.querySelector(".custom-dropdown");
    if(dropdown) {
        dropdown.classList.toggle("active");
    }
}
        
    getLocationAndCityName();
    
    
    function getLocationAndCityName() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const url = `https://www.prestigeconstructions.com/api/geocode?lat=${latitude}&lon=${longitude}`; // Call your Laravel endpoint

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === "OK") {
                            const results = data.results;
                            let city = "Not found"; // Default city
                            let countryCode = ""; // Default country code

                            if (results.length > 0) {
                                for (let i = 0; i < results[0].address_components.length; i++) {
                                    const component = results[0].address_components[i];
                                    const name = component.long_name.toLowerCase();
                                    // console.log(name);

                                    // Detect "goa" in any admin level or locality
                                    if (
                                        component.types.includes("locality") ||
                                        component.types.includes("administrative_area_level_1") ||
                                        component.types.includes("administrative_area_level_2")
                                    ) {
                                        if (name.includes("goa")) {
                                            city = "goa";
                                        } else if (component.types.includes("locality") && city === "Not found") {
                                            city = component.long_name;
                                        }
                                    }

                                    // Detect country
                                    if (component.types.includes("country")) {
                                        countryCode = component.short_name;
                                    }
                                }
                            }

                            // Clean and normalize city name
                            var currentlocationbyipadress = checkNull(removeDiacritics(city)).toLowerCase();

                            // Normalize known city variations
                            if (currentlocationbyipadress === "bengaluru" || currentlocationbyipadress === "bangalore") {
                                currentlocationbyipadress = "bangalore";
                            }
                            if (currentlocationbyipadress === "kochi" || currentlocationbyipadress === "cochin") {
                                currentlocationbyipadress = "cochin";
                            }
                            if (currentlocationbyipadress.includes("mangaluru") || currentlocationbyipadress.includes("mangalore")) {
                                currentlocationbyipadress = "mangalore";
                            }
                            if (currentlocationbyipadress.includes("goa")) {
                                currentlocationbyipadress = "goa";
                            }

                            // Store to localStorage
                            localStorage.setItem('currentlocationbyipadress', currentlocationbyipadress);

                            // Set country code (custom override if needed)
                            const countryCodeElement = $('.countrycodeno');
                            if (countryCodeElement.length) {
                                countryCodeElement.val(countryCode); // dynamic
                                // countryCodeElement.val('CA'); // static for testing
                                countryCodeElement.trigger('change');
                            }

                        } else {
                            console.error("API status not OK:", data.status);
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching geolocation data:', error);
                    });
            }, function(error) {
                console.error('Geolocation Error:', error);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    // Helpers
    function removeDiacritics(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function checkNull(str) {
        return str || '';
    }