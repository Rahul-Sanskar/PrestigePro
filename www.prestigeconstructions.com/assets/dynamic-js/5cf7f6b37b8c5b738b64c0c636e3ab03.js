const urlParams = new URLSearchParams(window.location.search);
var search = urlParams.get('search');
var city_url = "{{isset($city_data_from_url)?$city_data_from_url:''}}";
var url = window.location.href;
const urlWithoutQuery = url.split('?')[0];

var lastPart = urlWithoutQuery.substring(urlWithoutQuery.lastIndexOf('/') + 1);

if (checkNUll(lastPart) !== "") {
    var capitalizedCity = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
    $(".bindcitytitle").html("").html("Residential Projects in " + capitalizedCity);
}

$("#schedule_date").flatpickr({
    dateFormat: "Y-m-d",
    minDate: "today",
    enableTime: false,
});
$("#booking_date").flatpickr({
    dateFormat: "Y-m-d",
    minDate: "today",
    enableTime: false,
});
$(document).ready(function() {
    // $(".theme-loader").addClass("active");
    comman_project_country();
    comman_project_location("Residential", lastPart);
    comman_project_property_type();
    comman_project_adsconfiguration();
    comman_project_source();
    getallabouts();
    
  

    get_banner_image(lastPart);
    var locationid = (checkNUll(urlParams.get('location')) != "") ? urlParams.get('location') : localStorage
        .getItem('currentlocationbyipadress');
    setTimeout(() => {
        /*set active city start*/
        $(".projectactive").each(function() {
            if ($(this).attr("data-citytext") === lastPart) {
                $(this).addClass("active");
            }
        });
        /*set active city end*/
    }, 1000);
  
});



function getallabouts() {
        var formdata = {};
        formdata["is_available"] = "1";
        formdata["dynamicurl"] = "managecontent/v1/aboutus/list";
        formdata["page"] = 1;
        formdata["size"] = 50;
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(response) {
                if (response.success == true && response.data.length > 0) {
                    $('#about_details_bind').html("");
                    $.each(response.data, function(i, item) {
                        var aboutlogo = checkkeyexistornull(item, "aboutlogo");
                        if (checkNUll(aboutlogo) != "") {
                            var aboutlogobind = ` <picture>
                                            <source srcset="${changeToWebP(item.aboutlogo)}" type="image/webp">
                                            <source srcset="${changeToWebP(item.aboutlogo)}" type="image/png">
                                            <img loading="lazy" src="${changeToWebP(item.aboutlogo)}" alt="Crisil Logo" width="110" height="50">
                                            </picture>`;
                        }
                        var title = checkkeyexistornull(item, "about_title");
                        if (checkNUll(title) != "") {
                            titlebind = item.about_title;
                        }

                        var description = checkkeyexistornull(item, "description");
                        if (checkNUll(description) != "") {
                            descriptionbind = item.description;
                        }
                        var row = `<div class="about-us-detail  scrolled">
                                            <div class="is-flex is-align-items-center mb-5">
                                                <div class="about-us-logo pr-5">
                                                ${aboutlogobind}
                                                </div>
                                                <div class="about-us-title section-title pl-5  border-left border-theme">
                                                <h3>${titlebind}</h3>
                                                </div>
                                            </div>
                                            <p>${descriptionbind}</p>
                                    </div>`;
                        $('#about_details_bind').append(row);

                        $.each(item.AboutUsList, function(i, item1) {
                            var AboutUsList = "";
                            var aboutcount = '';
                            var count = item1.count;
                            var cleanedExpression = count.replace("+", "");
                            cleanedExpression = parseInt(cleanedExpression);
                            var aa = `<div class="column is-6-mobile is-6-tablet is-3-desktop is-3-widescreen about-us-counter-col">
                                <div class="about-us-counter-item">
                                    <div class="counter-block">
                                        <h3 class="counter">
                                            <span data-purecounter-start="0" data-purecounter-end="${cleanedExpression}" data-purecounter-separator="true" data-purecounter-separatorsymbol="," data-purecounter-once="false" data-purecounter-once="true" class="purecounter" id="myForm3">35</span>+
                                        </h3>
                                        <p>${item1.lable}</p>
                                    </div>
                                </div>
                            </div>`;
                            $('.appendcount').append(aa);
                        });

                    });
                } else {
                    ('.aboutus-projects').hide();
                    // showToast("Message", response.message);
                }
            },
            complete: function() {
                $(".theme-loader").removeClass("active");
                new PureCounter({
                    // Setting that can't' be overriden on pre-element
                    selector: ".purecounter", // HTML query selector for spesific element

                    // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
                    start: 0, // Starting number [uint]
                    end: 100, // End number [uint]
                    duration: 4, // The time in seconds for the animation to complete [seconds]
                    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
                    once: true, // Counting at once or recount when the element in view [boolean]
                    pulse: false, // Repeat count for certain time [boolean:false|seconds]
                    decimals: 0, // How many decimal places to show. [uint]
                    legacy: true, // If this is true it will use the scroll event listener on browsers
                    filesizing: false, // This will enable/disable File Size format [boolean]
                    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
                    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
                    separator: false // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
                });

            },
            error: function(response) {
                $(".theme-loader").removeClass("active");
                showToast("Error", response.responseJSON.message);
            }
        });

    }