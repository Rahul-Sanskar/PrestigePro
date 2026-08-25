var page = 1;
    var size = 8;
    $(document).ready(function() {
        getallblog(page);
        getallrecentarticle();
        getallcategories();
    });

    function getallblog(page) {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/blog/list";
        formdata["is_available"] = true;
        formdata["visibility_name"] = "public";
        formdata["site_code"] = SiteCode;
        formdata["page"] = page;
        formdata["size"] = size;

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
                    var total_blog_count = response.data.count;
                    $(".appen_blog").empty(); // Clear existing blogs
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
                        var blogbind = `<div class="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen blog-col">
                                    <div class="theme-block theme-blog-block">
                                        <div class="theme-block-img theme-block-img-with-link">
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
                                        </div>
                                    </div>
                                </div>`;
                        $(".appen_blog").append(blogbind);
                    });

                    // Generate pagination links
                    generatePagination(total_blog_count, page);
                }else {
                    var row = `<div class="sv-qr-code-detail border border-gray p-3">
                                NO DATA FOUND
                                </div>`;
                    $(".appen_blog").html("").append(row);
                }
            },
            complete: function() {
                $(".theme-loader").removeClass("active");
                $(".page-link").each(function() {
                    var active_page_no = $(this).attr("data-pageactive");
                    if (page == active_page_no) {
                        $(this).addClass("active");
                    }
                });
                $("html").scrollTop(0);
            },
            error: function(response) {
                $(".theme-loader").removeClass("active");
                showToast("Error", response.responseJSON.message);
            }
        });
    }
    // Function to generate pagination links
    function generatePagination(totalCount, currentPage) {
        
        var pageSize = 8; // Change this to the number of blogs you want per page
        var totalPages = Math.ceil(totalCount / pageSize);
        
        if(currentPage==1){
            var linkpage="1";
        }
        if(currentPage ==totalPages){
            var linkpage="last";
        }
        if(currentPage !=1){
            var prePage=parseInt(currentPage)-1;
        }
        currentPage=parseInt(currentPage);
        setNextPrevLinks("https://www.prestigeconstructions.com/blog?page="+currentPage, "https://www.prestigeconstructions.com/blog?page="+prePage,linkpage);
        var paginationHtml = '<ul class="pagination justify-content-center">';
        // Add "1st page" link
        paginationHtml += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-pageactive="1" onclick="getallblog(1)"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left-pipe"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6v12" /><path d="M18 6l-6 6l6 6" /></svg></a></li>`;

        // Add "Previous page" link
        var previousPage = currentPage > 1 ? currentPage - 1 : 1;
        paginationHtml += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-pageactive="${previousPage}" onclick="getallblog(${previousPage})"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg></a></a></li>`;


        // Add page numbers
        for (var i = 1; i <= totalPages; i++) {
            paginationHtml += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-pageactive="${i}" onclick="getallblog(${i})">${i}</a></li>`;
        }


        // Add "Next page" link
        var nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
        paginationHtml += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-pageactive="${nextPage}" onclick="getallblog(${nextPage})"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></a></li>`;
        // Add "last page" link
        paginationHtml += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-pageactive="${totalPages}" onclick="getallblog(${totalPages})"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right-pipe"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 6l6 6l-6 6" /><path d="M17 5v13" /></svg></a></li>`;

        paginationHtml += '</ul>';

        $(".pagination-container").html(paginationHtml);
    }

    function getallrecentarticle() {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/blog/list";
        formdata["is_available"] = true;
        formdata["visibility_name"] = "public";
        
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
                }else {
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
                        var bind_class_for_view_all = "";
                        if (i > 5) {
                            bind_class_for_view_all = "view_some is-hidden";
                        }
                        var description = checkNUll(checkkeyexistornull(item, "description"));
                        var blogname = checkNUll(checkkeyexistornull(item, "blogname"));
                        var body = checkNUll(checkkeyexistornull(item, "body"));
                        var url = "",
                            blogbind = "";
                        if (checkNUll(item.slug) != "") {
                            url = `https://www.prestigeconstructions.com/blog/tag/${item.slug}`;
                        }
                        if (checkNUll(blogname) != "") {
                            blogbind = `<a class="tag is-capitalized tag-gray ${bind_class_for_view_all}"  href="${url}">${blogname}</a>`;
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