$(document).ready(function() {
        getallretailproject()
    });
    function getallretailproject() {
        var formdata = {};
        srno = 1;
        formdata["dynamicurl"] = "managecontent/v1/projectinventorycms/list";
        formdata["propertycategory"] = "hospitality";
        formdata["is_available"] = "true";
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

                if (response.success == true) {
                    $('.append-hospitality').html('');
                    if (response.data.length > 0) {
                        $.each(response.data, function(i, item) {
                            var ProjectImage = checkNUll(checkkeyexistornull(item, "ProjectImage"));
                            var ProjectUrl = checkNUll(checkkeyexistornull(item, "ProjectUrl"));
                            var ProjectLogo = checkNUll(checkkeyexistornull(item, "ProjectLogo"));
                            var ProjectName = checkNUll(checkkeyexistornull(item, "ProjectName"));
                            var Overview = checkNUll(checkkeyexistornull(item, "Overview"));
                            var alt_text = checkNUll(checkkeyexistornull(item, "Featured_image_alt_text"));
                            var Project_slug = checkNUll(checkkeyexistornull(item, "Project_slug"));
                            var alttextbind = "";
                            if (checkNUll(alt_text) !== "") {
                                alttextbind = "alt='" + alt_text + "'";
                            } else {
                                alttextbind = "";
                            }
                            var url="";
                            if (Project_slug === "the-artiste-kochi" || Project_slug === "sheraton-grand" || Project_slug === "conrad-bengaluru"|| Project_slug === "jw-marriott-bengaluru-prestige-golfshire" || Project_slug === "moxy-bengaluru-airport" || Project_slug === "mulberry-shades" || Project_slug === "golfshire-club" || Project_slug === "twenty-four-hotel") {
                                url = `<a class="block-link" data-cursor="Know<br>More" href="${ProjectUrl}" rel="nofollow" target="_blank"></a>`;
                            } else {
                                url = `<a class="block-link" data-cursor="Know<br>More" href="${ProjectUrl}" target="_blank"></a>`;
                            }
                            var projectcity = `<div class="column is-12-mobile is-6-tablet is-6-desktop is-4-widescreen projects-col">
                                <div class="project-vertical-block theme-block">
                                    <div class="projects-img theme-block-img">
                                    <picture>
                                            <source srcset="${changeToWebP(ProjectImage)}" type="image/webp">
                                            <source srcset="${ProjectImage}" type="image/jpg">
                                            <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(ProjectImage)}" ${alttextbind} width="470" height="260">
                                        </picture>
                                        ${url}
                                    </div>
                                    <div class="project-title-and-price mt-4">
                                        <div class="project-title">
                                            <h2>${checkNUll(ProjectName)}</h2>
                                        </div>
                                        <div class="project-desc-price">
                                            <span>${Overview}</span>
                                        </div>
                                        ${url}
                                    </div>
                                </div>
                            </div>`;
                            $('.append-hospitality').append(projectcity);

                        });
                    }
                } else {
                    var row = `<div class="sv-qr-code-detail border border-gray p-3">
                                NO DATA FOUND
                                </div>`;
                    $(".append-hospitality").html(row);
                }
            }
        });
    }