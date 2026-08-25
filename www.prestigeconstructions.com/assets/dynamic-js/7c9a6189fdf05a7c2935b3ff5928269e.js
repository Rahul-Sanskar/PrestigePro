$(document).ready(function() {
        get_all_awards();
    });

    function get_all_awards() {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/award/list";
        formdata["is_available"] = "true";

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
                    $('.bind_year_awards').html("");
                    $('.bind_awards').html("");
                    var srno = 1;
                    var array_years = [];
                    $.each(response.data, function(i, item) {
                        /** Year Bind start */
                        var years = checkNUll(checkkeyexistornull(item, "year"));
                        var awardslist = checkNUll(checkkeyexistornull(item, "awardslist"));
                        if (!array_years.includes(years)) {
                            if (checkNUll(years) != "") {
                                array_years.push(years);
                                var bind_years = `<li class="tab2" onclick="openTab2(event,'awards-${years}')">
                                            <h6 class="is-size-6">${years}</h6>
                                        </li>`;
                                $('.bind_year_awards').append(bind_years);
                            } else {
                                var bind_years = `<li class="tab2" onclick="openTab2(event,'awards-notavailable')">
                                            <h6 class="is-size-6">Years</h6>
                                        </li>`;
                                $('.bind_year_awards').append(bind_years);
                            }
                        }
                        if (checkNUll(awardslist) != "") {
                            if (checkNUll(years) != "") {
                                var bind_awards = `<div id="awards-${years}" class="content-tab2">
                                                <div class="awards-tabs-column">
                                                    <div class="columns is-multiline awards-tabs-cols bind_awards_specifically_${i}">
                                                        
                                                    </div>
                                                </div>
                                            </div>`;
                            } else {
                                var bind_awards = `<div id="awards-notavailable" class="content-tab2">
                                                <div class="awards-tabs-column">
                                                    <div class="columns is-multiline awards-tabs-cols bind_awards_specifically_${i}">
                                                        
                                                    </div>
                                                </div>
                                            </div>`;
                            }
                            $(".bind_awards").append(bind_awards);
                            $.each(awardslist, function(j, awards) {
                                var alt_text = checkNUll(checkkeyexistornull(awards, "alt_text"));
                                var alttextbind = "";
                                if (checkNUll(alt_text) !== "") {
                                    alttextbind = "alt='" + alt_text + "'";
                                } else {
                                    alttextbind = "";
                                }
                                var Image = checkNUll(checkkeyexistornull(awards, "Image"));
                                var Awardee = checkNUll(checkkeyexistornull(awards, "Awardee"));
                                var AwardName = checkNUll(checkkeyexistornull(awards, "AwardName"));
                                var AwardFor = checkNUll(checkkeyexistornull(awards, "AwardFor"));
                                var bind_awards_specific = `<div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen awards-tabs-col">
                                                                <div class="theme-block">
                                                                    <div class="theme-block-img">
																		<a href="${Image}" data-fancybox="awards-gallery">
                                                                        <picture>
                                                                            <source srcset="${changeToWebP(Image)}" type="image/jpeg">
                                                                            <source srcset="${changeToWebP(Image)}" type="image/jpg">
                                                                            <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(Image)}" ${alttextbind} width="360" height="200">
                                                                        </picture>
																		</a>
                                                                        <span class="theme-img-title">${Awardee}</span>
                                                                    </div>
                                                                    <div class="theme-block-title">
                                                                        <h4>${AwardName}</h4>
                                                                        <span>${AwardFor}</span>
                                                                    </div>
                                                                </div>
                                                            </div>`;
                                $(".bind_awards_specifically_" + i).append(bind_awards_specific);
                            });
                        }
                        /** Year Bind end */
                    });
                } else {}
            },
            complete: function() {
                var firstLi = document.querySelector('.bind_year_awards li:first-child');
                firstLi.click();
                $(".theme-loader").removeClass("active");
            },
            error: function(response) {
                $(".theme-loader").removeClass("active");
            }
        });

    }