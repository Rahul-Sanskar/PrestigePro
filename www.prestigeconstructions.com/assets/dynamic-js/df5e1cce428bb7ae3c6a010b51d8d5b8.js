$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2026";
    var givenmonth = "april";

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
     const allNews = [{"_id":"6a26673a1cba940023d23ba3","newstitle":"Prestige Group bets on rental-led senior living, eyes premium play in Bengaluru","newspublisher":"Mint","year":"2026","month":"April","newsdate":"2026-04-29T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/companies\/news\/prestige-group-bets-on-rental-led-senior-living-eyes-premium-play-in-bengaluru-infra-homes-dlf-brigade-gopalan-11777355215994.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T06:54:50.010Z","updatedAt":"2026-06-08T06:54:50.010Z","__v":0},{"_id":"6a2670b8ac02a3001f87a2e0","newstitle":"Prestige Estates rises after residential project in Hyderabad clocks Rs 2,500 crore in early sales","newspublisher":"Business Standard","year":"2026","month":"April","newsdate":"2026-04-21T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/markets\/capital-market-news\/prestige-estates-rises-after-residential-project-in-hyderabad-clocks-rs-2-500-crore-in-early-sales-126042100430_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:35:20.474Z","updatedAt":"2026-06-08T07:35:20.474Z","__v":0},{"_id":"6a2683648ceb50001f357f17","newstitle":"Prestige Estates Clocks 2,500 Crore Sales For Golden Grove Hyderabad Within Two Weeks Of Launch","newspublisher":"The Free Press Journal","year":"2026","month":"April","newsdate":"2026-04-21T12:00:00.000Z","newslink":"https:\/\/www.freepressjournal.in\/business\/prestige-estates-clocks-2500-crore-sales-for-golden-grove-hyderabad-within-two-weeks-of-launch","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T08:55:00.346Z","updatedAt":"2026-06-08T08:55:00.346Z","__v":0},{"_id":"6a2682f8a9cbbb0028e239c3","newstitle":"Mumbais skyline is soaring. So is the pressure on housing","newspublisher":"Economic Times","year":"2026","month":"April","newsdate":"2026-04-17T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/mumbais-skyline-is-soaring-so-is-the-pressure-on-housing\/articleshow\/130323701.cms?frommdr","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T08:53:12.542Z","updatedAt":"2026-06-08T08:53:12.542Z","__v":0},{"_id":"6a2683eb99475800222efb6c","newstitle":"Mumbais Skyline Is Soaring. So Is the Pressure on Housing","newspublisher":"Bloomberg","year":"2026","month":"April","newsdate":"2026-04-17T12:00:00.000Z","newslink":"https:\/\/www.bloomberg.com\/news\/features\/2026-04-17\/mumbai-s-skyline-rises-as-residents-and-bankers-jostle-for-space","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T08:57:15.026Z","updatedAt":"2026-06-08T08:57:15.026Z","__v":0},{"_id":"6a266e4b77418f0023150a6a","newstitle":"Prestige Group Partners with Autodesk to Accelerate Digital Transformation in Real Estate","newspublisher":"Reality Plus","year":"2026","month":"April","newsdate":"2026-04-13T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/article\/prestige-group-partners-with-autodesk-to-accelerate-digital-transformation-in-real-estate-124921.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:24:59.883Z","updatedAt":"2026-06-08T07:24:59.883Z","__v":0},{"_id":"6a26704e4f66e50020d5846d","newstitle":"The Rs 1 crore sweet spot: Prestige Group\u0027s Irfan Razack says housing demand shows no signs of letting up","newspublisher":"The Economic Times","year":"2026","month":"April","newsdate":"2026-04-13T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/markets\/expert-view\/the-rs-1-crore-sweet-spot-prestige-groups-irfan-razack-says-housing-demand-shows-no-signs-of-letting-up\/articleshow\/130232436.cms?frommdr","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:33:34.224Z","updatedAt":"2026-06-08T07:33:34.224Z","__v":0},{"_id":"6a267082a9cbbb0028e20096","newstitle":"Prestige Estates shares gain as it forms JV to develop residential project in Mumbai with GDV of 9,000 crore","newspublisher":"CNBC TV18","year":"2026","month":"April","newsdate":"2026-04-10T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/market\/prestige-estates-projects-share-price-jv-abil-group-develop-residential-project-versova-mumbai-gdv-rs-9000-crore-ws-l-19884395.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:34:26.372Z","updatedAt":"2026-06-08T07:34:26.372Z","__v":0},{"_id":"6a266e7ca9cbbb0028e1fa33","newstitle":"Real-estate major Prestige group may look at Reit as office rentals rise","newspublisher":"Business Standard","year":"2026","month":"April","newsdate":"2026-04-09T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/real-estate-major-prestige-group-may-look-at-reit-as-office-rentals-rise-126040901237_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:25:48.577Z","updatedAt":"2026-06-08T07:25:48.577Z","__v":0},{"_id":"6a26700b9e08e5001e4c2f4d","newstitle":"Prestige Estates crosses 30,000 crore pre-sales in FY26","newspublisher":"Business Line","year":"2026","month":"April","newsdate":"2026-04-08T12:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/news\/real-estate\/prestige-estates-crosses-30000-crore-pre-sales-in-fy26\/article70838083.ece","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:32:27.634Z","updatedAt":"2026-06-08T07:32:27.634Z","__v":0},{"_id":"6a2683241a262b002ac1e532","newstitle":"Prestige Estates crosses 30,000 crore pre-sales milestone in FY26","newspublisher":"Mint","year":"2026","month":"April","newsdate":"2026-04-08T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/companies\/news\/prestige-estates-record-presales-fy26-bengaluru-real-estate-demand-11775617827356.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T08:53:56.023Z","updatedAt":"2026-06-08T08:53:56.023Z","__v":0},{"_id":"6a266fbcb70c17001eb2b238","newstitle":"Prestige Estates launches township in Hyderabad, GDV pegged at 9,500 cr","newspublisher":"Business Standard","year":"2026","month":"April","newsdate":"2026-04-05T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/prestige-estates-launches-golden-grove-hyderabad-gdv-9500-crore-126040500092_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:31:08.660Z","updatedAt":"2026-06-08T07:31:08.660Z","__v":0},{"_id":"6a266f508ceb50001f353eca","newstitle":"Prestige Estates eyes Rs 9,500 crore revenue from new housing project in Hyderabad","newspublisher":"The Economic Times","year":"2026","month":"April","newsdate":"2026-04-04T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-estates-eyes-rs-9500-crore-revenue-from-new-housing-project-in-hyderabad\/articleshow\/130017550.cms?frommdr","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:29:20.389Z","updatedAt":"2026-06-08T07:29:20.389Z","__v":0},{"_id":"69ce3b9dd90289001f4f63a7","newstitle":"Bengaluru: Prestige Groups signs 115 crore agreement with BMRCL for co-branding rights of Bellandur Metro station","newspublisher":"Hindustan Times","year":"2026","month":"April","newsdate":"2026-04-02T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/bengaluru-prestige-groups-signs-rs-115-crore-agreement-with-bmrcl-for-co-branding-rights-of-bellandur-metro-station-101771740353697.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T09:49:17.599Z","updatedAt":"2026-04-02T09:49:17.599Z","__v":0},{"_id":"6a266da78ceb50001f353aad","newstitle":"Prestige Group to jointly develop land parcel in Gurugram","newspublisher":"Reality.com","year":"2026","month":"April","newsdate":"2026-04-02T12:00:00.000Z","newslink":"https:\/\/realty.economictimes.indiatimes.com\/news\/industry\/prestige-group-to-jointly-develop-land-parcel-in-gurugram\/129965990","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:22:15.124Z","updatedAt":"2026-06-08T07:22:15.124Z","__v":0},{"_id":"6a266fe999475800222ec32b","newstitle":"Prestige Estates partners for a housing project in Gurugram, eyes 4,200 crore revenue","newspublisher":"Hindustan Times","year":"2026","month":"April","newsdate":"2026-04-02T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-estates-partners-for-a-housing-project-in-gurugram-eyes-rs-4-200-crore-revenue-101775061012240.html#google_vignette","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"false","createdAt":"2026-06-08T07:31:53.108Z","updatedAt":"2026-06-08T07:31:53.108Z","__v":0},{"_id":"6a266de2b70c17001eb2aba2","newstitle":"Prestige group to jointly build 17acre housing project in Gurugram, eyes Rs 4200cr revenue","newspublisher":"The Print","year":"2026","month":"April","newsdate":"2026-04-01T12:00:00.000Z","newslink":"https:\/\/theprint.in\/economy\/prestige-group-to-jointly-build-17acre-housing-project-in-gurugram-eyes-rs-4200cr-revenue\/2894299\/","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:23:14.814Z","updatedAt":"2026-06-08T07:23:14.814Z","__v":0},{"_id":"6a266eca9e08e5001e4c2bf3","newstitle":"Prestige Group expands NCR play with 4,200 cr Gurugram project","newspublisher":"CNBC TV18","year":"2026","month":"April","newsdate":"2026-04-01T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/market\/prestige-group-expands-ncr-play-with-rs-4200-cr-gurugram-project-ws-l-19879204.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:27:06.405Z","updatedAt":"2026-06-08T07:27:06.405Z","__v":0}];
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