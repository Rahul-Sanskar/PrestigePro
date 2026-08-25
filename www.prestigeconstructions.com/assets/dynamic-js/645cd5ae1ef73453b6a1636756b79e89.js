$(document).ready(function() {

        getallrecentarticle();
        getallcategories();
    });
    var page = 1;
    var size = 4;



    function getallrecentarticle() {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/blog/list";
        formdata["is_available"] = true;
        formdata["visibility_name"] = "public";
        // formdata["page"] = 1;
        $.ajax({
            method: "POST",
          url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                'Authorization': token
            },
            success: function(response) {
                if (response.success == true && response.data.listdata.length > 0) {
                    $.each(response.data.listdata, function(i, item) {
                        var title = checkNUll(checkkeyexistornull(item, "title"));
                        var body = checkNUll(checkkeyexistornull(item, "excerpt"));
                        var createdAt = checkNUll(checkkeyexistornull(item, "publish_date"));
                        var featuredimage = checkNUll(checkkeyexistornull(item, "featured_image"));
                        var formattedDate = "";
                        if (checkNUll(createdAt) != "" && checkNUll(createdAt) != "Invalid date") {
                            formattedDate = Indian_Standard_date(createdAt);
                        }
                        if (checkNUll(item.slug) != "") {
                            url = `https://www.prestigeconstructions.com/blog/${item.slug}`;
                        }
                        var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
                        var alttextbind = "";
                        if (checkNUll(alt_text) !== "") {
                            alttextbind = "alt='" + alt_text + "'";
                        } else {
                            alttextbind = "";
                        }
                        var views = '0'
                        var viewcounts = checkNUll(checkkeyexistornull(item, "view_count"));
                        if (viewcounts != "") {
                            views = item.view_count;
                        }
                        views = shortenNumber(views);
                        if (i == 0) {
                            var recentblogbind = `<div class="theme-block-img theme-block-img-with-link">
                                        <picture>
                                            <source srcset="${changeToWebP(featuredimage)}" type="image/webp">
                                            <source srcset="${featuredimage}" type="image/jpg">
                                            <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(featuredimage)}" ${alttextbind} width="355" height="200">
                                        </picture>
                                        <a href="${url}" class="theme-block-icon">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.20557 17.7941L17.0996 3.9001" stroke="white" stroke-width="0.982456" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M17.7943 8.76318V3.20557" stroke="white" stroke-width="0.982456" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.2367 3.20557H17.7943" stroke="white" stroke-width="0.982456" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="theme-block-title">
                                        <h4>${title}</h4>
                                        <div class="is-align-items-center is-flex is-justify-content-space-between">
                                            <span class="is-size-8">${formattedDate}</span>
                                            <span class="view-article-count">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 1 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler mb-0 icons-tabler-outline icon-tabler-eye">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                                                </svg><span class="is-size-8">${views}</span> 
                                            </span>
                                        </div>
                                        <span class="blog-desc">${body}</span>
                                        <span class="fs-6 golden-text has-text-right has-text-weight-medium is-block is-uppercase">Read More</span>
                                        <a href="${url}" class="block-link"></a>
                                    </div>`;
                            $(".append_recent_article").append(recentblogbind);
                        }
                    });
                } else {
                    var row = `<div class="sv-qr-code-detail border border-gray p-3">
                    No Article Found
                                </div>`;
                    $(".append_recent_article").html("").append(row);
                }
            },
            complete: function() {
                $(".theme-loader").removeClass("active");
            },
            error: function(response) {
                $(".theme-loader").removeClass("active");
                showToast("Error", response.responseJSON.message);
            }
        });
    }


    function getallcategories() {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/blogtag/list";
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
                if (response.success == true && response.data.length > 0) {
                    if (response.data.length > 5) {
                        $(".hide_view_all_btn").removeClass("is-hidden");
                    } else {
                        $(".hide_view_all_btn").addClass("is-hidden");
                    }

                    $.each(response.data, function(i, item) {

                        var description = checkNUll(checkkeyexistornull(item, "description"));
                        var blogname = checkNUll(checkkeyexistornull(item, "blogname"));
                        var body = checkNUll(checkkeyexistornull(item, "body"));
                        var url = "",
                            blogbind = "";
                        if (checkNUll(item.slug) != "") {
                            url = `https://www.prestigeconstructions.com/blog/tag/${item.slug}`;
                        }
                        if (checkNUll(blogname) != "") {
                            blogbind = `<a class="tag is-capitalized tag-gray"  href="${url}">${blogname}</a>`;
                        }
                        $(".append-categories").append(blogbind);
                    });
                }
            },
            complete: function() {
                $(".theme-loader").removeClass("active");
            },
            error: function(response) {
                $(".theme-loader").removeClass("active");
                showToast("Error", response.responseJSON.message);
            }
        });
    }

    $(document).on("click", ".hide_view_all_btn", function() {
        $(".view_some").toggleClass("is-hidden");
    });