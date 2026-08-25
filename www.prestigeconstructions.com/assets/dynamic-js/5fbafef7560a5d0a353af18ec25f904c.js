$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
    var givenmonth = "october";

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
     const allNews = [{"_id":"6801f38cfc3b070017f9c86d","newstitle":"Rs 462 crore investment Prestige Group acquires 17.45 acres of land in Bengaluru for new residential project","newspublisher":"ET Now","year":"2024","month":"October","newsdate":"2024-10-30T11:42:00.000Z","newslink":"https:\/\/www.etnownews.com\/real-estate\/rs-462-crore-investment-prestige-group-acquires-17-45-acres-of-land-in-bengaluru-for-new-residential-project-article-114753669","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:39:08.508Z","updatedAt":"2025-04-18T06:39:08.508Z","__v":0},{"_id":"6801e4db489ff70016f3175d","newstitle":"Prestige Group acquires 17.45 acres of land in Whitefield, Bengaluru for Rs 462 crore","newspublisher":"Economic Times","year":"2024","month":"October","newsdate":"2024-10-28T22:24:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-group-acquires-17-45-acres-of-land-in-whitefield-bengaluru-for-rs-462-crore\/articleshow\/114701449.cms?frommdr","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:36:27.285Z","updatedAt":"2025-04-18T05:36:27.285Z","__v":0},{"_id":"6801e5ccfc3b070017f9af8d","newstitle":"Prestige Group buys 17.45 acres land in Bengaluru for 462 crore, to develop a housing project","newspublisher":"Hindustan Times","year":"2024","month":"October","newsdate":"2024-10-28T10:53:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-buys-17-45-acres-land-in-bengaluru-for-rs-462-crore-to-develop-a-housing-project-101730135141169.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:40:28.073Z","updatedAt":"2025-04-18T05:40:28.073Z","__v":0},{"_id":"6801f431bf6dcf0017b7e5bd","newstitle":"Radhika Merchant\u0027s mother Shaila Merchant buys a luxury apartment worth 20 crore in South Mumbai","newspublisher":"Hindustan Times","year":"2024","month":"October","newsdate":"2024-10-23T18:02:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/radhika-merchants-mother-shaila-merchant-buys-a-luxury-apartment-worth-rs-20-crore-in-south-mumbai-101729676679937.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:41:53.705Z","updatedAt":"2025-04-18T06:41:53.705Z","__v":0},{"_id":"6801f2befc3b070017f9c6ca","newstitle":"Prestige Estates to invest Rs 7,000 crore to develop township in Ghaziabad","newspublisher":"Economic Times","year":"2024","month":"October","newsdate":"2024-10-21T09:10:00.000Z","newslink":"https:\/\/realty.economictimes.indiatimes.com\/news\/industry\/prestige-estates-to-invest-rs-7000-crore-to-develop-township-in-ghaziabad\/114411040","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:35:42.641Z","updatedAt":"2025-04-18T06:35:42.641Z","__v":0},{"_id":"6801f2457205450017f77f88","newstitle":"Prestige Group targeting Rs 10,000 cr annual revenue from NCR","newspublisher":"Economic Times","year":"2024","month":"October","newsdate":"2024-10-20T20:33:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-group-targeting-rs-10000-cr-annual-revenue-from-ncr\/articleshow\/114401181.cms?frommdr","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:33:41.268Z","updatedAt":"2025-04-18T06:33:41.268Z","__v":0},{"_id":"6801f307489ff70016f33187","newstitle":"Prestige Estates to invest around 7000 crore to develop township in Ghaziabad","newspublisher":"Hindustan Times","year":"2024","month":"October","newsdate":"2024-10-20T10:30:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-estates-to-invest-around-rs-7000-crore-to-develop-township-in-ghaziabad-101729442587069.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:36:55.666Z","updatedAt":"2025-04-18T06:36:55.666Z","__v":0},{"_id":"6801e6747205450017f76939","newstitle":"Prestige Estates Q2 bookings down 43 at Rs 4,022 cr despite strong demand","newspublisher":"Business Standard","year":"2024","month":"October","newsdate":"2024-10-17T23:33:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/prestige-estates-q2-bookings-down-43-at-rs-4-022-cr-despite-strong-demand-124101701554_1.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T05:43:16.067Z","updatedAt":"2025-04-18T05:43:16.067Z","__v":0},{"_id":"6801f34b321e9a001648000b","newstitle":"After Riding Bangalores Tech Boom, This Indian Property Magnate Stepped Out Of His Comfort Zone To Build A 6 Billion Fortune","newspublisher":"Forbes","year":"2024","month":"October","newsdate":"2024-10-09T18:02:00.000Z","newslink":"https:\/\/www.forbes.com\/sites\/anuraghunathan\/2024\/10\/09\/after-riding-bangalores-tech-boom-this-indian-property-magnate-stepped-out-of-his-comfort-zone-to-build-a-6-billion-fortune\/","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T06:38:03.749Z","updatedAt":"2025-04-18T06:38:03.749Z","__v":0}];
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