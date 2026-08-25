$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
    var givenmonth = "may";

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
     const allNews = [{"_id":"683d3dc0e55bf00018d78cbe","newstitle":"Prestige Group Completes Its First Three Mumbai Projects","newspublisher":"Reality Plus","year":"2025","month":"May","newsdate":"2025-05-30T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/news-views\/prestige-group-completes-its-first-three-mumbai-projects-120183.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-06-02T05:59:28.882Z","updatedAt":"2025-06-02T05:59:28.882Z","__v":0},{"_id":"683d3e352b4348001798bb95","newstitle":"Prestige Group Completes Three Landmark Projects in Mumbai, Delivering Over 800 Units Across 2.8 Million Sq. Ft.","newspublisher":"Silliconindia Publications","year":"2025","month":"May","newsdate":"2025-05-29T12:00:00.000Z","newslink":"https:\/\/www.homesindiamagazine.com\/home-buying\/news\/prestige-group-completes-three-landmark-projects-in-mumbai-delivering-over-800-units-across-28-million-sq-ft-nwid-4445.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-06-02T06:01:25.123Z","updatedAt":"2025-06-02T06:01:25.123Z","__v":0},{"_id":"683d3e6a2b4348001798bc11","newstitle":"Prestige Group inaugurates three landmark projects in Mumbai","newspublisher":"Construction Week","year":"2025","month":"May","newsdate":"2025-05-29T12:00:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/projects-tenders\/mumbai-prestige-group","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-06-02T06:02:18.246Z","updatedAt":"2025-06-02T06:02:18.246Z","__v":0},{"_id":"681d775f6d7f350017a4d97e","newstitle":"NCR is an important market for Prestige, says chairman Irfan Razack","newspublisher":"Mint","year":"2025","month":"May","newsdate":"2025-05-08T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/companies\/news\/prestige-group-ncr-project-chairman-irfan-razack-prestige-greenfield-projects-dlf-godrej-ncr-property-market-11746688680459.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-05-09T03:32:47.732Z","updatedAt":"2025-05-09T03:32:47.732Z","__v":0},{"_id":"681af0f1f85c6900179a941d","newstitle":"Bengaluru-based Prestige Estates aims to rewrite the way real estate is done in NCR","newspublisher":"Hindustan Times","year":"2025","month":"May","newsdate":"2025-05-06T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/bengalurubased-prestige-estates-aims-to-rewrite-the-way-real-estate-is-done-in-ncr-101746534099999.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-05-07T05:34:41.130Z","updatedAt":"2025-05-07T05:34:41.130Z","__v":0},{"_id":"681af33a930b32001703fd81","newstitle":"Prestige Estates enters Delhi-NCR, invests Rs 10,000 crore on township project","newspublisher":"Navodaya Times","year":"2025","month":"May","newsdate":"2025-05-06T12:00:00.000Z","newslink":"https:\/\/www.navodayatimes.in\/news\/delhi-ncr\/prestige-estates-rs-10000-crore-investment-on-62-acre-project-in-ghaziabad\/263370\/","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-05-07T05:44:26.597Z","updatedAt":"2025-05-07T05:44:26.597Z","__v":0},{"_id":"681af385806047001707e285","newstitle":"      Prestige Group enters NCR with Ghaziabad project, eyes Rs 12,000 crore revenue","newspublisher":"Money Control","year":"2025","month":"May","newsdate":"2025-05-06T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-group-enters-ncr-with-ghaziabad-project-eyes-rs-12000-crore-revenue-13014762.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-05-07T05:45:41.962Z","updatedAt":"2025-05-07T05:45:41.962Z","__v":0},{"_id":"681af3c3f85c6900179a9a37","newstitle":"Prestige Estates nets 3,000 crore in debut NCR launch with The Prestige City","newspublisher":"CNBC TV18","year":"2025","month":"May","newsdate":"2025-05-06T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/market\/stocks\/prestige-estates-projects-share-price-nets-rs-3000-crore-in-debut-ncr-launch-with-the-prestige-city-19599952.htm","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-05-07T05:46:43.891Z","updatedAt":"2025-05-07T05:46:43.891Z","__v":0},{"_id":"681af40721fe750017244dbb","newstitle":"Prestige Group forays into NCR\u0027s residential market, launches \u0027Indirapuram\u0027 with GDV of 9,000 crore","newspublisher":"Punjab Kesari","year":"2025","month":"May","newsdate":"2025-05-06T12:00:00.000Z","newslink":"https:\/\/m.haryana.punjabkesari.in\/gurgaon\/news\/prestige-group-enters-the-residential-market-of-ncr-2147254","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-05-07T05:47:51.344Z","updatedAt":"2025-05-07T05:47:51.344Z","__v":0},{"_id":"681af438aee6d40017b05fea","newstitle":"Prestige Estates to invest Rs 10K cr in 62 acre Ghaziabad township project","newspublisher":"Business Standard","year":"2025","month":"May","newsdate":"2025-05-06T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/prestige-estates-to-invest-rs-10k-cr-in-62-acre-ghaziabad-township-project-125050601007_1.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-05-07T05:48:40.462Z","updatedAt":"2025-05-07T05:48:40.462Z","__v":0},{"_id":"681af46eac80a200187d0204","newstitle":"Prestige Estates to invest Rs 10 000 cr on development of 62.5 acre project in Ghaziabad","newspublisher":"The Week","year":"2025","month":"May","newsdate":"2025-05-06T12:00:00.000Z","newslink":"https:\/\/www.theweek.in\/wire-updates\/business\/2025\/05\/06\/dcm49-biz-realty-prestige.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-05-07T05:49:34.165Z","updatedAt":"2025-05-07T05:49:34.165Z","__v":0},{"_id":"681af4aeea61120016b6d4f6","newstitle":"Prestige Group CMD Irfan Razack on company\u0027s foray into NCR","newspublisher":"Realtyninfra","year":"2025","month":"May","newsdate":"2025-05-06T12:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?vHYfuLigB6hw","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-05-07T05:50:38.590Z","updatedAt":"2025-05-07T05:50:38.590Z","__v":0}];
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