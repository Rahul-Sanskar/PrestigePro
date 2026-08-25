$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
    var givenmonth = "july";

    if(givenyear =="" || givenmonth==""){
        setTimeout(() => {
            // $(".accordian_title:first").trigger("click");
        }, 100);
        // var a=$("a.accordianMonth:first").attr("href");
        // window.location.href=a;
    }

    $(document).on("click", ".click_month", function() {
        $(".click_month").removeClass("active").removeClass("is-active");
        $(this).addClass("active").addClass("is-active");
        var year = $(this).attr("data-year");
        var month = $(this).attr("data-month");
        // window.location.href = `https://www.prestigeconstructions.com/news/${year}/${month}`;
        // get_all_news(year, month);
    });

    // $(document).on("click", ".accordian_item", function() {
    //     if ($(this).find(".accordian_title").hasClass("active")) {
    //         if (!$(".click_month").hasClass("active")) {
    //             $(this).find(".accordian_title").removeClass("active");
    //             $(this).find(".accordian_desc").css("display", "none");
    //         }
    //     } else {
    //         $(".accordian_title").removeClass("active");
    //         $(".accordian_desc").css("display", "none");
    //         $(this).find(".accordian_title").addClass("active");
    //         $(this).find(".accordian_desc").css("display", "block");
    //     }
    // });

     // Data from Laravel
     const allNews = [{"_id":"6695118be44ea600182f9d0d","newstitle":"India\u0027s rich want bigger homes; luxury residence sales spike","newspublisher":"The Times of india","year":"2024","month":"July","newsdate":"2024-07-08T05:48:00.000Z","newslink":"https:\/\/timesofindia.indiatimes.com\/business\/india-business\/indias-rich-want-bigger-homes-luxury-residence-sales-spike\/articleshow\/111570620.cms","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-15T12:09:47.218Z","updatedAt":"2024-07-15T12:09:47.218Z","__v":0},{"_id":"6694ce05eec7c700186ae7c9","newstitle":"Realtors expand portfolios, boost investments on robust demand in FY25","newspublisher":"Business Standard","year":"2024","month":"July","newsdate":"2024-07-03T05:48:00.000Z","newslink":"https:\/\/www.business-standard.com\/industry\/news\/realtors-expand-portfolios-boost-investments-on-strong-demand-in-fy25-124062700789_1.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-15T07:21:41.034Z","updatedAt":"2024-07-15T07:21:41.034Z","__v":0}];
    const itemsPerPage = 20;
    let currentIndex = 0;
    let isLoading = false;

    function renderNextChunk() {
        const container = document.getElementById('news-container');
        const chunk = allNews.slice(currentIndex, currentIndex + itemsPerPage);

        chunk.forEach((news, index) => {
            const date = new Date(news.newsdate);
            const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;

            const row = `
                <tr>
                    <td>${currentIndex + index + 1}</td>
                    <td>
                        <span class="is-capitalized dark-1 lh-lg">${news.newstitle}</span>
                        <span class="is-capitalized is-block mt-1 dark-3">${news.newspublisher}</span>
                    </td>
                    <td class="is-capitalized">${formattedDate}</td>
                    <td>
                        <a class="text-primary fw-semibold"
                           href="${news.newslink}"
                           target="${news.target === '_blank' ? '_blank' : '_self'}"
                           ${news.rel === 'true' ? 'rel="nofollow"' : ''}>
                           View
                        </a>
                    </td>
                </tr>
            `;
            container.insertAdjacentHTML('beforeend', row);
        });

        currentIndex += itemsPerPage;
        isLoading = false;
    }

    function onScroll() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.body.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollPercentage = scrollPosition / (documentHeight - windowHeight);

        if (scrollPercentage >= 0.65) {
            if (!isLoading && currentIndex < allNews.length) {
                isLoading = true;
                document.getElementById('loader').classList.remove('is-hidden');

                setTimeout(() => {
                    renderNextChunk();
                    document.getElementById('loader').classList.add('is-hidden');
                }, 400); // Optional delay to simulate loading
            }
        }
    }

    // Initial load
    renderNextChunk();
    window.addEventListener('scroll', onScroll);