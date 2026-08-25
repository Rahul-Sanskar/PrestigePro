$(document).ready(function() {
            get_all_brands();
        });

        function get_all_brands() {
            var formdata = {};
            formdata["dynamicurl"] = "managecontent/v1/brands/list";
formdata["is_available"] = true;
            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                datatype: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                success: function(response) {
                    $(".bind_our_brands").html("");
                    if (response.success == true) {
                        if (response.data.length != 0) {

                            $.each(response.data, function(i, item) {
                            var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
                            var alttextbind = "";
                            if (checkNUll(alt_text) !== "") {
                                alttextbind = "alt='" + alt_text + "'";
                            } else {
                                alttextbind = "";
                            }
                                var pnglogo = checkNUll(checkkeyexistornull(item, "pnglogo"));
                                var ourbrand = ` <div class="column is-4-mobile is-3-tablet is-3-desktop is-2-widescreen our-brands-logo-col">
                                                    <div class="our-brands-logo light-gray-border">
                                                        <picture>
                                                            <source srcset="${changeToWebP(pnglogo)}" type="image/webp">
                                                            <source srcset="${pnglogo}" type="image/png">
                                                            <img loading="lazy" loading="lazy" src="${pnglogo}" ${alttextbind} width="180" height="180">
                                                        </picture>
                                                    </div>
                                                </div>`;
                                $(".bind_our_brands").append(ourbrand);
                            });
                        }
                    } else {
                        $(".section-offers").hide();
                    }
                },
                complete: function(response) {

                },
                error: function(xhr, ajaxOptions, thrownError) {
                    if (xhr.status == "403" || xhr.status == 403) {
                        logout();
                    }
                }
            });
        }