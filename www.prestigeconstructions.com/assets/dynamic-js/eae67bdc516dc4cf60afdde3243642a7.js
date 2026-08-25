$(document).ready(function() {
        getallretailproject()
    });

    function getallretailproject() {
        var formdata = {};
        srno = 1;
        formdata["dynamicurl"] = "managecontent/v1/projectinventorycms/list";
        formdata["propertycategory"] = "Retail"; //Residential
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
                    $('.append-retail').html('');
                    if (response.data.length > 0) {
                        $.each(response.data, function(i, item) {
                            var ProjectImage = checkNUll(checkkeyexistornull(item, "ProjectImage"));
                            var ProjectName = checkNUll(checkkeyexistornull(item, "ProjectName"));
                            var CityName = checkNUll(checkkeyexistornull(item, "DisplayArea"));
                            var projecturl = checkNUll(checkkeyexistornull(item, "ProjectUrl"));
                            var alt_text = checkNUll(checkkeyexistornull(item, "Featured_image_alt_text"));
                            var Project_slug = checkNUll(checkkeyexistornull(item, "Project_slug"));
                            var alttextbind = "";
                            if (checkNUll(alt_text) !== "") {
                                alttextbind = "alt='" + alt_text + "'";
                            } else {
                                alttextbind = "";
                            }
                            var url="";
                            if (Project_slug === "ub-city" || Project_slug === "prestige-the-man-store") {
                                url = ` <a class="block-link" target=_blank rel="nofollow" href="${projecturl}"></a>`;
                               
                            } else {
                                url = `<a class="block-link" target=_blank href="${projecturl}"></a>`;
                                
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
                                            <h4>${checkNUll(ProjectName)}</h4>
                                        </div>
                                        <div class="project-desc-price">
                                            <span>${checkNUll(CityName)}</span>
                                        </div>
                                        ${url}
                                    </div>
                                </div>
                                </div>`;
                            $('.append-retail').append(projectcity);

                        });
                    }
                } else {
                    var row = `<div class="sv-qr-code-detail border border-gray p-3">
                                NO DATA FOUND
                                </div>`;
                    $(".append-retail").html(row);
                }
            }
        });
    }