$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
    var givenmonth = "november";

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
     const allNews = [{"_id":"6801f707bf6dcf0017b7eb59","newstitle":"Prestige Estates confident of meeting annual pre-sales target despite slow start","newspublisher":"CNBC TV18","year":"2024","month":"November","newsdate":"2024-11-28T11:46:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/business\/companies\/prestige-estates-confident-of-meeting-annual-pre-sales-target-despite-slow-start-19516042.htm","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:53:59.617Z","updatedAt":"2025-04-18T06:53:59.617Z","__v":0},{"_id":"6801fa57f654a90017b4cfa7","newstitle":"Heres why Bengaluru real estate developers are launching projects in Mumbai","newspublisher":"Hindustan Times","year":"2024","month":"November","newsdate":"2024-11-22T08:50:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/heres-why-bengaluru-real-estate-developers-are-launching-projects-in-mumbai-101732187425483.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T07:08:07.543Z","updatedAt":"2025-04-18T07:08:07.543Z","__v":0},{"_id":"6801f7e5fc3b070017f9cf6a","newstitle":"Prestige Group Acquires Land in Mira-Bhayandar","newspublisher":"Construction World","year":"2024","month":"November","newsdate":"2024-11-21T14:23:00.000Z","newslink":"https:\/\/www.constructionworld.in\/latest-construction-news\/real-estate-news\/prestige-group-acquires-land-in-mira-bhayandar\/65311","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"864182","updated_by":"Kintali Naveesh","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:57:41.729Z","updatedAt":"2025-04-18T07:03:23.485Z","__v":0},{"_id":"6801fa260d10a0001769678e","newstitle":"The sky is the limit for Indias middle-income housing market: Property developer","newspublisher":"CNBC","year":"2024","month":"November","newsdate":"2024-11-21T04:16:00.000Z","newslink":"https:\/\/www.cnbc.com\/video\/2024\/11\/21\/the-skys-the-limit-for-the-india-middle-income-housing-market-prestige-group.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T07:07:18.434Z","updatedAt":"2025-04-18T07:07:18.434Z","__v":0},{"_id":"6801f6a7f654a90017b4ca24","newstitle":"South realtors  Prestige Group, Puravankara and Sobha eyeing Mumbai property market","newspublisher":"The Economic Times","year":"2024","month":"November","newsdate":"2024-11-20T12:45:00.000Z","newslink":"South realtors  Prestige Group, Puravankara and Sobha eyeing Mumbai property market","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:52:23.308Z","updatedAt":"2025-04-18T06:52:23.308Z","__v":0},{"_id":"6801f81d57e6ea001781900d","newstitle":"Prestige Estates acquires land worth Rs 291 cr in Mira Bhayandar","newspublisher":"Business Standard","year":"2024","month":"November","newsdate":"2024-11-18T08:04:00.000Z","newslink":"https:\/\/www.business-standard.com\/markets\/capital-market-news\/prestige-estates-acquires-land-worth-rs-291-cr-in-mira-bhayandar-124111800071_1.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:58:37.685Z","updatedAt":"2025-04-18T06:58:37.685Z","__v":0},{"_id":"6801f9a047736b00178d7e99","newstitle":"Prestige Estates to launch Rs 52,000-cr housing projects by March 2025 amid strong demand","newspublisher":"Economic Times","year":"2024","month":"November","newsdate":"2024-11-17T16:07:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-estates-to-launch-rs-52000-cr-housing-projects-by-march-2025-amid-strong-demand\/articleshow\/115384115.cms?frommdr","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T07:05:04.829Z","updatedAt":"2025-04-18T07:05:04.829Z","__v":0},{"_id":"680efa21928cc40016cb69a6","newstitle":"Bengaluru\u0027s premium home market soars with ESOPs, rising incomes","newspublisher":"The Times of India","year":"2024","month":"November","newsdate":"2024-11-16T16:05:00.000Z","newslink":"https:\/\/timesofindia.indiatimes.com\/city\/bengaluru\/bengalurus-premium-home-market-soars-with-esops-rising-incomes\/articleshow\/116366774.cms","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T03:46:41.888Z","updatedAt":"2025-04-28T03:46:41.888Z","__v":0},{"_id":"6801f66ffc3b070017f9cdcb","newstitle":"Prestige Group buys land in Mira-Bhayandar for residential project","newspublisher":"Hindustan Times","year":"2024","month":"November","newsdate":"2024-11-16T05:12:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/cities\/mumbai-news\/prestige-group-buys-land-in-mira-bhayandar-for-residential-project-101731692338136.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:51:27.793Z","updatedAt":"2025-04-18T06:51:27.793Z","__v":0},{"_id":"6801f9f3fc3b070017f9d258","newstitle":"Prestige Group expands in Mumbai with Rs 291 cr land acquisition for residential project","newspublisher":"Economic Times","year":"2024","month":"November","newsdate":"2024-11-15T11:42:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-group-expands-in-mumbai-with-rs-291-cr-land-acquisition-for-residential-project\/articleshow\/115305612.cms?frommdr","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T07:06:27.891Z","updatedAt":"2025-04-18T07:06:27.891Z","__v":0},{"_id":"6801f8fe321e9a0016480964","newstitle":"Prestige Group buys 22,135 sq m of land in Mumbai for 291.6 crore","newspublisher":"Hindustan Times","year":"2024","month":"November","newsdate":"2024-11-15T09:29:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-buys-22-135-sq-m-of-land-in-mumbai-for-rs-291-6-crore-101731642155528.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T07:02:22.519Z","updatedAt":"2025-04-18T07:02:22.519Z","__v":0},{"_id":"6801f767321e9a00164806c4","newstitle":"Prestige Group acquires 22,135 sq meters land in Mira Bhayandar for Rs 291.58 crore","newspublisher":"Economic Times","year":"2024","month":"November","newsdate":"2024-11-15T08:53:00.000Z","newslink":"https:\/\/realty.economictimes.indiatimes.com\/news\/industry\/prestige-group-acquires-22135-sq-meters-land-in-mira-bhayandar-for-rs-291-58-crore\/115321194","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:55:35.431Z","updatedAt":"2025-04-18T06:55:35.431Z","__v":0},{"_id":"6801f7a8c0a4330019a3da06","newstitle":"Prestige Group secures more land in Mumbai for residential development","newspublisher":"Construction Week","year":"2024","month":"November","newsdate":"2024-11-15T08:53:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/projects-tenders\/prestige-group-secures-more-land-in-mumbai-for-residential-development","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:56:40.366Z","updatedAt":"2025-04-18T06:56:40.366Z","__v":0},{"_id":"680ef9615edd1000162c7f45","newstitle":"After tepid H1, realtors eye more launches, new cities to boost bookings","newspublisher":"Financial Express","year":"2024","month":"November","newsdate":"2024-11-13T13:45:00.000Z","newslink":"https:\/\/www.financialexpress.com\/business\/industry\/after-tepid-h1-realtors-eye-more-launches-new-cities-to-boost-bookings\/3690511\/","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T03:43:29.660Z","updatedAt":"2025-04-28T03:43:29.660Z","__v":0},{"_id":"6801e626fd8aed00163e937a","newstitle":"Prestige Group","newspublisher":"Construction Week","year":"2024","month":"November","newsdate":"2024-11-07T10:53:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/lists\/prestige-group-3","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:41:58.607Z","updatedAt":"2025-04-18T05:41:58.607Z","__v":0},{"_id":"6801f1e1489ff70016f32fa2","newstitle":"Prestige Group Acquires Land in Whitefield","newspublisher":"Construction World","year":"2024","month":"November","newsdate":"2024-11-06T23:33:00.000Z","newslink":"https:\/\/www.constructionworld.in\/latest-construction-news\/real-estate-news\/prestige-group-acquires-land-in-whitefield\/64618","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:32:01.954Z","updatedAt":"2025-04-18T06:32:01.954Z","__v":0},{"_id":"6801f3f5e35a1d0017ee6024","newstitle":"Realty buzzes in Hyderabad as residential sales rise 20, transactions up 7 in Sept quarter","newspublisher":"CNBC TV18","year":"2024","month":"November","newsdate":"2024-11-05T18:57:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/india\/realty-buzzes-in-hyderabad-as-residential-sales-rise-20-transactions-up-7-in-sept-quarter-19504428.htm","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:40:53.351Z","updatedAt":"2025-04-18T06:40:53.351Z","__v":0},{"_id":"6801e538f654a90017b4a86d","newstitle":"Prestige Groups chairman and managing director Irfan Razack gets Karnatakas second highest civil award","newspublisher":"The Times of india","year":"2024","month":"November","newsdate":"2024-11-05T11:04:00.000Z","newslink":"https:\/\/timesofindia.indiatimes.com\/city\/mumbai\/prestige-groups-chairman-and-managing-director-irfan-razack-gets-karnatakas-second-highest-civil-award\/articleshow\/114967680.cms","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:38:00.961Z","updatedAt":"2025-04-18T05:38:00.961Z","__v":0}];
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