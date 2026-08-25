$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
    var givenmonth = "september";

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
     const allNews = [{"_id":"6801dd75440acf001795d757","newstitle":"Adapting to change: Evolving retail-real estate landscape - with Uzma Irfan, Prestige Group","newspublisher":"ET Retail","year":"2024","month":"September","newsdate":"2024-09-27T11:36:00.000Z","newslink":"https:\/\/retail.economictimes.indiatimes.com\/podcast\/adapting-to-change-evolving-retail-real-estate-landscape-with-uzma-irfan-prestige-group\/113699916","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:04:53.495Z","updatedAt":"2025-04-18T05:04:53.495Z","__v":0},{"_id":"6801e2b9c0a4330019a3b4a3","newstitle":"What\u0027s top on NRIs shopping list? Houses in Indian cities","newspublisher":"The Times of india","year":"2024","month":"September","newsdate":"2024-09-25T14:06:00.000Z","newslink":"https:\/\/timesofindia.indiatimes.com\/india\/whats-top-on-nris-shopping-list-houses-in-indian-cities\/articleshow\/113658997.cms","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:27:21.332Z","updatedAt":"2025-04-18T05:27:21.332Z","__v":0},{"_id":"6801dcd3bf6dcf0017b7bb3c","newstitle":"Prestige Group targets 1,100 crore from new housing project in Bengaluru","newspublisher":"Hindustan Times","year":"2024","month":"September","newsdate":"2024-09-24T10:10:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-targets-rs-1-100-crore-from-new-housing-project-in-bengaluru-101727151481318.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:02:11.870Z","updatedAt":"2025-04-18T05:02:11.870Z","__v":0},{"_id":"6801dc63440acf001795d61f","newstitle":"Top builders expand workforce as housing boom propels growth targets","newspublisher":"Mint","year":"2024","month":"September","newsdate":"2024-09-24T06:30:00.000Z","newslink":"https:\/\/www.livemint.com\/companies\/news\/top-builders-expand-workforce-housing-boom-growth-real-estate-dlf-lodha-prestige-11727080612333.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:00:19.191Z","updatedAt":"2025-04-18T05:00:19.191Z","__v":0},{"_id":"6801defa321e9a001647da28","newstitle":"Prestige Group targets Rs 1,100 crore revenue from Bengaluru housing project","newspublisher":"ZEE Business","year":"2024","month":"September","newsdate":"2024-09-23T22:43:00.000Z","newslink":"https:\/\/www.zeebiz.com\/companies\/news-prestige-group-targets-rs-1100-crore-revenue-from-bengaluru-housing-project-316997","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:11:22.967Z","updatedAt":"2025-04-18T05:11:22.967Z","__v":0},{"_id":"6801dde3440acf001795d835","newstitle":"Prestige Group eyes Rs 1,100 cr revenue from new housing project in B\u0027luru","newspublisher":"Business Standard","year":"2024","month":"September","newsdate":"2024-09-23T06:21:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/prestige-group-eyes-rs-1-100-cr-revenue-from-new-housing-project-in-b-luru-124092300819_1.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:06:43.169Z","updatedAt":"2025-04-18T05:06:43.169Z","__v":0},{"_id":"679712b83b1b55001625bd82","newstitle":"what\u0027s next for prestige estates after RS.5000 crore fund raise ?","newspublisher":"NDTV Profit","year":"2024","month":"September","newsdate":"2024-09-17T23:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v=TJ06ZX0Grks","pinnews":"0","newstatus":"0","created_byId":"779519","created_by":"Mahesh D","updated_byId":"779519","updated_by":"Mahesh D","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-01-27T04:59:36.782Z","updatedAt":"2025-01-27T05:02:41.087Z","__v":0},{"_id":"679338d9f6282400160597e6","newstitle":"Realty Reckoner: Understanding Real Estate Industry Boom In India, Its Future, Demand \u0026 Price Change","newspublisher":"ET NOW","year":"2024","month":"September","newsdate":"2024-09-17T12:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v=lAium_2WpTk","pinnews":"0","newstatus":"0","created_byId":"779519","created_by":"Mahesh D","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-01-24T06:53:13.955Z","updatedAt":"2025-01-24T06:53:13.955Z","__v":0},{"_id":"6801de69f654a90017b49ce0","newstitle":"Prestige Group Eyes Rs 60,000-Crore In Revenue After Completion Of Pending Projects","newspublisher":"NDTV Profit","year":"2024","month":"September","newsdate":"2024-09-13T09:03:00.000Z","newslink":"https:\/\/www.ndtvprofit.com\/business\/prestige-group-expects-rs-60000-crore-topline-after-completion-of-pending-projects","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:08:57.873Z","updatedAt":"2025-04-18T05:08:57.873Z","__v":0},{"_id":"679337580deec20017868d9f","newstitle":"Have Strong Cash Flows Available Currently","newspublisher":"CNBC TV18","year":"2024","month":"September","newsdate":"2024-09-12T12:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v=yu0n1VsL1JQ","pinnews":"0","newstatus":"0","created_byId":"779519","created_by":"Mahesh D","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-01-24T06:46:48.794Z","updatedAt":"2025-01-24T06:46:48.794Z","__v":0},{"_id":"6797134594ec1b0016f792d1","newstitle":"Prestige Estates to pare debt, expand portfolio","newspublisher":"The Economic Times","year":"2024","month":"September","newsdate":"2024-09-12T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-estates-to-use-rs-5k-cr-qip-raise-to-pare-debt-acquire-assets-says-cmd-irfan-razack\/articleshow\/113275623.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"779519","created_by":"Mahesh D","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-01-27T05:01:57.424Z","updatedAt":"2025-01-27T05:01:57.424Z","__v":0},{"_id":"6801df87fc3b070017f9a508","newstitle":"Prestige Estates to use Rs 5k-cr QIP raise to pare debt, acquire assets, says CMD Irfan Razack","newspublisher":"Economic Times","year":"2024","month":"September","newsdate":"2024-09-12T08:38:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-estates-to-use-rs-5k-cr-qip-raise-to-pare-debt-acquire-assets-says-cmd-irfan-razack\/articleshow\/113275623.cms?frommdr","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:13:43.629Z","updatedAt":"2025-04-18T05:13:43.629Z","__v":0}];
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