$(document).ready(function() {
        getallevents();
        $(".append-events").html("");
    });

    function getallevents() {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/event/list";
        formdata["is_available"] = true;
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
                    $.each(response.data, function(i, item) {
                        var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
                        var alttextbind = "";
                        if (checkNUll(alt_text) !== "") {
                                alttextbind = "alt='" + alt_text + "'";
                        } else {
                                alttextbind = "";
                        }
                        var formattedDate = Indian_Standard_date(item.eventdate);
                        var eventcover = checkNUll(checkkeyexistornull(item, "eventcover"));
                        var eventname = checkNUll(checkkeyexistornull(item, "eventname"));
                        var url = "javascript:void(0);";
                        if (checkNUll(item.eventslug) != "") {
                            url = `https://www.prestigeconstructions.com/events/${item.eventslug}`;
                        }
                        if (item.eventslug === "sep-2020" || item.eventslug === "sep-2021") {
                            url = `https://www.prestigeconstructions.com/events/agm/${item.eventslug}`
                        }
                        if (item.eventslug === "prestige-finsbury-park" || item.eventslug === "prestige-park-drive") {
                            url = `https://www.prestigeconstructions.com/events/new-launches/${item.eventslug}`
                        }
                        if (item.eventslug === "prestige-primrose-hills" || item.eventslug === "prestige-waterford" || item.eventslug === "prestige-windsor-park" || item.eventslug === "prestige-lakeshore-drive" || item.eventslug === "prestige-marigold") {
                            url = `https://www.prestigeconstructions.com/events/ground-breaking/${item.eventslug}`
                        }
                        if (item.eventslug === "prestige-park-square") {
                            url = `https://www.prestigeconstructions.com/events/channel-partner-meet/${item.eventslug}`
                        }
                        var Eventimages = `<div class="column is-12-mobile is-6-tablet is-6-desktop is-4-widescreen projects-col">
                                <div class="theme-block">
                                    <div class="theme-block-img theme-block-img-with-link">
                                        <picture>
                                            <source srcset="${changeToWebP(eventcover)}" type="image/webp">
                                            <source srcset="${eventcover}" type="image/jpg"
                                                type="image/jpg">
                                            <img loading="lazy" class="img-fixed-ratio"
                                                src="${changeToWebP(eventcover)}" type="image/jpg" ${alttextbind}
                                                width="355" height="200">
                                        </picture>
                                        <a href="${url}" class="theme-block-icon">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.20557 17.7941L17.0996 3.9001" stroke="white"
                                                    stroke-width="0.982456" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M17.7943 8.76318V3.20557" stroke="white"
                                                    stroke-width="0.982456" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M12.2367 3.20557H17.7943" stroke="white"
                                                    stroke-width="0.982456" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="theme-block-title">
                                        <h4>${eventname}</h4>
                                        <span>${formattedDate}</span>
<a href="${url}" class="block-link"></a>
                                    </div>
                                </div>
                            </div>`;
                        // $(".append-events").html("");
                        $(".append-events").append(Eventimages);
                    });
                }
            },
            complete: function() {
                $(".theme-loader").removeClass("active");

                // executive directors slider
            },
            error: function(response) {
                $(".theme-loader").removeClass("active");
                showToast("Error", response.responseJSON.message);
            }
        });
    }