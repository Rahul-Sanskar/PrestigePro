$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
    var givenmonth = "june";

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
     const allNews = [{"_id":"68930580aed5160017f42fcd","newstitle":"Prestige Group, Chennai-based realtor form JV to develop 1,600 cr project","newspublisher":"Business Standard","year":"2025","month":"June","newsdate":"2025-06-28T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/prestige-group-chennai-based-realtor-form-jv-to-develop-1-600-cr-project-125062800320_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-06T07:34:24.291Z","updatedAt":"2025-08-06T07:34:24.291Z","__v":0},{"_id":"689305bef698ea00177cb59a","newstitle":"Prestige Group targets Rs 3,350 cr revenue from new housing project in Chennai","newspublisher":"PTI","year":"2025","month":"June","newsdate":"2025-06-28T12:00:00.000Z","newslink":"https:\/\/www.ptinews.com\/story\/business\/prestige-group-targets-rs-3,350-cr-revenue-from-new-housing-project-in-chennai\/2689499","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-06T07:35:26.364Z","updatedAt":"2025-08-06T07:35:26.364Z","__v":0},{"_id":"6893072190797b0016667cdd","newstitle":"Penthouse, a villa in the sky for the super-rich","newspublisher":"Mint","year":"2025","month":"June","newsdate":"2025-06-23T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/industry\/penthouse-dlf-privana-north-trump-residences-gurugram-hni-demand-real-estate-duplex-bandra-worli-sea-link-bajaj-auto-11750247701500.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-08-06T07:41:21.442Z","updatedAt":"2025-08-06T07:41:21.442Z","__v":0},{"_id":"6893055090797b00166676ed","newstitle":"Bengaluru-based Prestige Group to launch 50,000 crore worth of homes in FY26","newspublisher":"Hindustan Times","year":"2025","month":"June","newsdate":"2025-06-19T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/bengalurubased-prestige-group-to-launch-50-000-crore-worth-of-homes-in-fy26-101750002269991.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-06T07:33:36.802Z","updatedAt":"2025-08-06T07:33:36.802Z","__v":0},{"_id":"6864b5a91d142a00164c6bc3","newstitle":"Bengaluru-based Prestige Group to launch 50,000 crore worth of homes in FY26","newspublisher":"Hindustan Times","year":"2025","month":"June","newsdate":"2025-06-19T09:15:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/bengalurubased-prestige-group-to-launch-50-000-crore-worth-of-homes-in-fy26-101750002269991.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-07-02T04:29:29.459Z","updatedAt":"2025-07-02T04:29:29.459Z","__v":0},{"_id":"6893051eaed5160017f42eb3","newstitle":"Mid-income homes may get costlier, says Prestige Group\u0027s Irfan Razack","newspublisher":"CNBC TV18","year":"2025","month":"June","newsdate":"2025-06-16T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/business\/companies\/mid-income-homes-may-get-costlier-says-prestige-groups-irfan-razack-19621777.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-06T07:32:46.552Z","updatedAt":"2025-08-06T07:32:46.552Z","__v":0},{"_id":"6864b4041518b80017849f0c","newstitle":"Plan To Clear Entire Debt Of The Hospitality Business With IPO This Year: Prestige Group","newspublisher":"CNBC TV18","year":"2025","month":"June","newsdate":"2025-06-16T09:15:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?vY-uXAUZtmFw","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-07-02T04:22:28.058Z","updatedAt":"2025-07-02T04:22:28.058Z","__v":0},{"_id":"6864b3bd5ce1fd0017f270da","newstitle":"DGM-Auditorium Operations of Prestige Centre for Performing Art","newspublisher":"Indulgexpress","year":"2025","month":"June","newsdate":"2025-06-14T09:15:00.000Z","newslink":"https:\/\/www.instagram.com\/reel\/DK4ZrCuxk15\/?igshMTYyYWw2ZmRvazJ1eg3D3D","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-07-02T04:21:17.393Z","updatedAt":"2025-07-02T04:21:17.393Z","__v":0},{"_id":"6864b2052dd24800163a64f2","newstitle":"Prestige Group aims 59 pc growth in FY26 sales bookings at Rs 27K cr on strong housing demand","newspublisher":"Press Trust of India","year":"2025","month":"June","newsdate":"2025-06-11T12:00:00.000Z","newslink":"https:\/\/www.ptinews.com\/story\/business\/prestige-group-aims-59-pc-growth-in-fy26-sales-bookings-at-rs-27k-cr-on-strong-housing-demand\/2632338","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-07-02T04:13:57.195Z","updatedAt":"2025-07-02T04:13:57.195Z","__v":0},{"_id":"6893060baed5160017f431c9","newstitle":"Prestige Hospitality Ventures to add 2,509 keys and expand footprint to seven key Indian cities","newspublisher":"ET Hospitality World","year":"2025","month":"June","newsdate":"2025-06-11T12:00:00.000Z","newslink":"https:\/\/hospitality.economictimes.indiatimes.com\/news\/hotels\/prestige-hospitality-ventures-expands-to-7-major-indian-cities-with-2509-new-hotel-keys\/121754683","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-06T07:36:43.838Z","updatedAt":"2025-08-06T07:36:43.838Z","__v":0},{"_id":"689306ab4d105800167fc5d4","newstitle":"Singapore-Backed Realty Company Bets on India Entertainment Boom","newspublisher":"Bloomberg","year":"2025","month":"June","newsdate":"2025-06-11T12:00:00.000Z","newslink":"https:\/\/www.bloomberg.com\/news\/articles\/2025-06-11\/singapore-backed-realty-company-bets-on-india-entertainment-boom","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-06T07:39:23.430Z","updatedAt":"2025-08-06T07:39:23.430Z","__v":0},{"_id":"689306e9f698ea00177cb912","newstitle":"Matter of Prestige: Indian realty behemoth bets on entertainment boom over shirts and skirts","newspublisher":"The Economics Times","year":"2025","month":"June","newsdate":"2025-06-11T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/retail\/matter-of-prestige-indian-realty-behemoth-bets-on-entertainment-boom-over-shirts-and-skirts\/articleshow\/121769435.cms?frommdr","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-06T07:40:25.607Z","updatedAt":"2025-08-06T07:40:25.607Z","__v":0},{"_id":"6864b2862dd24800163a663e","newstitle":"Prestige Hospitality Ventures to add 2,509 keys and expand footprint to seven key Indian cities","newspublisher":"Hospitality World The Economic Times","year":"2025","month":"June","newsdate":"2025-06-11T09:15:00.000Z","newslink":"https:\/\/hospitality.economictimes.indiatimes.com\/news\/hotels\/prestige-hospitality-ventures-expands-to-7-major-indian-cities-with-2509-new-hotel-keys\/121754683","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-07-02T04:16:06.361Z","updatedAt":"2025-07-02T04:16:06.361Z","__v":0},{"_id":"6864b2d60ba4840016037472","newstitle":"ET Business Awards 2025 Bangalore","newspublisher":"ET Now","year":"2025","month":"June","newsdate":"2025-06-11T09:15:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?vgbKrU7cyB7w","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-07-02T04:17:26.280Z","updatedAt":"2025-07-02T04:17:26.280Z","__v":0},{"_id":"6864b34e413eb20016431b80","newstitle":"Singapore-Backed Realty Company Bets on India Entertainment Boom","newspublisher":"Bloomberg","year":"2025","month":"June","newsdate":"2025-06-11T09:15:00.000Z","newslink":"https:\/\/www.bloomberg.com\/news\/articles\/2025-06-11\/singapore-backed-realty-company-bets-on-india-entertainment-boom?accessTokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc0OTYxOTIzNiwiZXhwIjoxNzUwMjI0MDM2LCJhcnRpY2xlSWQiOiJTWEtZVlJEV1JHRzAwMCIsImJjb25uZWN0SWQiOiJFOTM0QUZEQTVDMjU0ODgxODNGODhGM0M0RTI3MzQ3RCJ9.ewziRvXeg-pBpWRI-KEFULwYgsSbicO2pn2Ndtsvi3c","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-07-02T04:19:26.003Z","updatedAt":"2025-07-02T04:19:26.003Z","__v":0},{"_id":"6864b1791d142a00164c6125","newstitle":"Prestige Group Expects Best-Ever Q1 With Record Top-Line Sales","newspublisher":"NDTV Profit","year":"2025","month":"June","newsdate":"2025-06-06T12:00:00.000Z","newslink":"https:\/\/www.ndtvprofit.com\/real-estate\/prestige-group-expects-best-ever-q1-with-record-top-line-sales","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-07-02T04:11:37.816Z","updatedAt":"2025-07-02T04:11:37.816Z","__v":0}];
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