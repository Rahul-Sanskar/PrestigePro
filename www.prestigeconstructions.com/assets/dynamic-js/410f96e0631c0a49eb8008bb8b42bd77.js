$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2026";
    var givenmonth = "january";

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
     const allNews = [{"_id":"69ce3e7dc465db001e23ab33","newstitle":"Prestige Group sees stable real estate market, targets 30,000 crore pre-sales in FY26","newspublisher":"CNBC TV18","year":"2026","month":"January","newsdate":"2026-01-30T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/business\/companies\/prestige-group-sees-stable-prices-real-estate-market-targets-30000-crore-pre-sales-in-fy26-19836787.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:01:33.030Z","updatedAt":"2026-04-02T10:01:33.030Z","__v":0},{"_id":"69ce48c7c465db001e23cc88","newstitle":"Prestige, Arihant bet big on Chennai with Rs 5,000 crore housing project","newspublisher":"Zee Business","year":"2026","month":"January","newsdate":"2026-01-26T12:00:00.000Z","newslink":"https:\/\/www.zeebiz.com\/real-estate\/news-prestige-arihant-bet-big-on-chennai-with-rs-5000-crore-housing-project-392682","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:45:27.210Z","updatedAt":"2026-04-02T10:45:27.210Z","__v":0},{"_id":"69817efed09af0001d0b3773","newstitle":"Prestige Group sees steady demand, eyes REIT once office portfolio scales up","newspublisher":"CNBC TV18","year":"2026","month":"January","newsdate":"2026-01-19T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/business\/companies\/prestige-groups-irfan-razack-details-growth-drivers-after-strong-q3-eyes-future-reit-and-ipo-alpha-article-19823577.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:52:14.717Z","updatedAt":"2026-02-03T04:52:14.717Z","__v":0},{"_id":"69817f8bb80f78001eaa2e37","newstitle":"Prestige Group Unveils \u0027Evergreen\u0027 at Raintree Park: A Nature-Integrated Township on Whitefield Main Road","newspublisher":"Ani News","year":"2026","month":"January","newsdate":"2026-01-14T12:00:00.000Z","newslink":"https:\/\/www.aninews.in\/news\/business\/prestige-group-unveils-evergreen-at-raintree-park-a-nature-integrated-township-on-whitefield-main-road20260114181840\/","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:54:35.089Z","updatedAt":"2026-02-03T04:54:35.089Z","__v":0},{"_id":"69817c77c76bc90022002e37","newstitle":"Prestige Group JV purchases 16 acres of land in Chennai","newspublisher":"Hindustan Times","year":"2026","month":"January","newsdate":"2026-01-11T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-jv-purchases-16-acres-of-land-in-chennai-101768055603079.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:41:27.357Z","updatedAt":"2026-02-03T04:41:27.357Z","__v":0},{"_id":"69817f47e1341e001e147fbd","newstitle":"Prestige Group JV firm buys 16.38-acre land parcel in Chennai for 561 cr","newspublisher":"TheHinduBusinessLine","year":"2026","month":"January","newsdate":"2026-01-10T12:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/news\/real-estate\/prestige-group-jv-firm-buys-1638-acre-land-parcel-in-chennai-for-561-cr\/article70494216.ece","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:53:27.662Z","updatedAt":"2026-02-03T04:53:27.662Z","__v":0}];
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