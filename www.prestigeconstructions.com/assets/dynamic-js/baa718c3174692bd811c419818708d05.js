const urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type');
    $(document).ready(function() {
        getallfaqcategories();
        getallrelatedarticles();
        $('.theme-loader').addClass('active');
    });

    function getallfaqcategories() {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/faqscategory/list";
        formdata["platform"] = 'web';
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
                if (response.data.length != 0) {
                    $('.append-faqcategories').html('');
                    $.each(response.data, function(i, item) {
                        if (checkNUll(item.slug) != "") {
                            url = `https://www.prestigeconstructions.com/faq/${item.slug}`;
                        }
                        var categoryli = `<div class="column is-12-mobile is-6-tablet is-3-desktop is-3-widescreen faqs-category-col">
                                <div class="faqs-category-detail theme-block">
                                    <div class="theme-block-title">
                                        <h4>${item.description}</h4>
                                        <span>${item.overview}</span>
                                        <a class="block-link" href="${url}" data-category-slug='${item.slug}' data-category-id='${item._id}'></a>
                                    </div>
                                </div>
                            </div>`;
                        $('.append-faqcategories').append(categoryli);
                    });
                }
            },
            complete: function() {
                $('.theme-loader').removeClass('active');
            },
            error: function(response) {

            }
        });
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

    function getallrelatedarticles() {
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
                            var updatedAt = checkNUll(checkkeyexistornull(item, "modify_date"));
                            var views = '0'
                            var viewcounts = checkNUll(checkkeyexistornull(item, "view_count"));
                            if (viewcounts != "") {
                                views = item.view_count;
                            }
                            //views = shortenNumber(views);
                            var read_time = calculateReadingTime(item.body);
                            var createformattedDate = "";
                            if (checkNUll(createdAt) != "" && checkNUll(createdAt) != "Invalid date") {
                                createformattedDate = Indian_Standard_date(createdAt);
                            }
                            var updateformattedDate = "";
                            if (checkNUll(updatedAt) != "" && checkNUll(updatedAt) != "Invalid date") {
                                updateformattedDate = Indian_Standard_date(updatedAt);
                            }
                            if (checkNUll(item.slug) != "" ) {
                                url = `https://www.prestigeconstructions.com/blog/${item.slug}`;
                            }

                            var blogarticlebind = `<li class="splide__slide">
                                <div class="theme-block theme-blog-block">
                                    <div class="theme-block-img theme-block-img-with-link">
                                        <picture>
                                            <source srcset="${changeToWebP(featuredimage)}" type="image/webp">
                                            <source srcset="${featuredimage}" type="image/jpg">
                                            <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(featuredimage)}"  width="355" height="200">
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
                                        <!-- <span class="is-size-8">${createformattedDate}</span> -->
                                        <div class="is-align-items-center is-flex is-justify-content-space-between">
                                            <span class="is-size-8">${createformattedDate}</span>
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
                            </li>`;
                            $(".append_relatedarticles").append(blogarticlebind);
                        });
                } else {
                    $(".hide-relateddata").addClass("is-hidden");
                }
            },
            complete: function() {
                $(".theme-loader").removeClass("active");
                new Splide('#related-articles-slider', {
                    gap: '30px',
                    type: 'slide',
                    perPage: 3,
                    perMove: 1,
                    pagination: false,
                    breakpoints: {
                        1408: {
                            perPage: 3,
                        },
                        1216: {
                            perPage: 3,
                        },
                        1024: {
                            perPage: 2,
                            gap: '24px',
                        },
                        768: {
                            perPage: 1,
                        },
                    }
                }).mount();
            },
            error: function(response) {
                $(".theme-loader").removeClass("active");
                showToast("Error", response.responseJSON.message);
            }
        });
    }