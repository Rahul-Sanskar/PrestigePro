$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
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
     const allNews = [{"_id":"69310849e61b6a001296d774","newstitle":"Prestige Group Adopts Two Tiger Cubs at Bannerghatta Biological Park, Strengthens Commitment to Biodiversity","newspublisher":"The CSR Universe","year":"2025","month":"October","newsdate":"2025-10-24T12:00:00.000Z","newslink":"https:\/\/thecsruniverse.com\/articles\/prestige-group-adopts-two-tiger-cubs-at-bannerghatta-biological-park-strengthens-commitment-to-biodiversity","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:04:25.146Z","updatedAt":"2025-12-04T04:04:25.146Z","__v":0},{"_id":"6931088a9e5c620013d18616","newstitle":"CSR Initiative Adopts Tiger at Bannerghatta Biological Park (BBP)","newspublisher":"The CSR Journel","year":"2025","month":"October","newsdate":"2025-10-24T12:00:00.000Z","newslink":"https:\/\/thecsrjournal.in\/corporate-social-responsibility-csr-news-prestige-group-deepens-biodiversity-commitment-with-tiger-adoption-at-bannerghatta-biological-park-bbp\/","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:05:30.905Z","updatedAt":"2025-12-04T04:05:30.905Z","__v":0},{"_id":"6931077647895e0012af00ad","newstitle":"Prestige Group to roll out premium mixed-use project brand","newspublisher":"Mint","year":"2025","month":"October","newsdate":"2025-10-23T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/news\/prestige-group-premium-mixed-use-project-brand-real-estate-hotels-property-shopping-malls-business-parks-hilton-11761206660115.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:00:54.062Z","updatedAt":"2025-12-04T04:00:54.062Z","__v":0},{"_id":"693106a72bc1e300139b493c","newstitle":"Prestige Group plans Delhi NCR expansion with new projects in 2026","newspublisher":"Business Standard","year":"2025","month":"October","newsdate":"2025-10-20T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/prestige-group-delhi-ncr-expansion-new-projects-2026-125102000718_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T03:57:27.479Z","updatedAt":"2025-12-04T03:57:27.479Z","__v":0},{"_id":"69310a76b5c70d00126b5563","newstitle":"Prestige Group goes to Mira road with Prestige Garden Trails","newspublisher":"Construction Week","year":"2025","month":"October","newsdate":"2025-10-16T12:00:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/projects-tenders\/prestige-group-2","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:13:42.427Z","updatedAt":"2025-12-04T04:13:42.427Z","__v":0},{"_id":"69310653bae465001299939c","newstitle":"Prestige Group launches residential project with 2,000 crore potential in Mira Road, near Mumbai","newspublisher":"Hindustan Times","year":"2025","month":"October","newsdate":"2025-10-15T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-launches-residential-project-with-2-000-crore-potential-in-mira-road-near-mumbai-101760427716577.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T03:56:03.790Z","updatedAt":"2025-12-04T03:56:03.790Z","__v":0},{"_id":"693108de9e5c620013d186a1","newstitle":"Prestige Group eyes Rs 2,000 cr revenue from upcoming housing project in Mumbai","newspublisher":"Press Trust of India","year":"2025","month":"October","newsdate":"2025-10-14T12:00:00.000Z","newslink":"https:\/\/www.ptinews.com\/story\/business\/prestige-group-eyes-rs-2-000-cr-revenue-from-upcoming-housing-project-in-mumbai\/3005715","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:06:54.917Z","updatedAt":"2025-12-04T04:06:54.917Z","__v":0},{"_id":"6931097d2dcf8c0012b22809","newstitle":"Prestige Group eyes 2,000 cr revenue from new housing project in Mumbai","newspublisher":"Business Standard","year":"2025","month":"October","newsdate":"2025-10-14T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/quarterly-results\/prestige-group-eyes-2-000-cr-revenue-from-new-housing-project-in-mumbai-125101400834_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:09:33.937Z","updatedAt":"2025-12-04T04:09:33.937Z","__v":0},{"_id":"693109af1b144e0013e98a57","newstitle":"Prestige Group launches residential project in Dahisar-Mira Road, Mumbai","newspublisher":"Business Standard","year":"2025","month":"October","newsdate":"2025-10-14T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/markets\/capital-market-news\/prestige-group-launches-residential-project-in-dahisar-mira-road-mumbai-125101400340_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:10:23.441Z","updatedAt":"2025-12-04T04:10:23.441Z","__v":0},{"_id":"693107bc7fa8120012d41501","newstitle":"Prestige Group launches 620 homes worth Rs 2,200 cr for sales in Ghaziabad","newspublisher":"The Economic Times","year":"2025","month":"October","newsdate":"2025-10-12T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-group-launches-620-homes-worth-rs-2200-cr-for-sales-in-ghaziabad\/articleshow\/124499592.cms?frommdr","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:02:04.777Z","updatedAt":"2025-12-04T04:02:04.777Z","__v":0},{"_id":"693109d71be98500126b0f65","newstitle":"Prestige Estates Projects launches 620 homes worth 2,200 cr in Ghaziabad","newspublisher":"Business Standard","year":"2025","month":"October","newsdate":"2025-10-12T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/prestige-estates-projects-launches-620-homes-worth-2-200-cr-in-ghaziabad-125101200461_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:11:03.516Z","updatedAt":"2025-12-04T04:11:03.516Z","__v":0},{"_id":"68fef59f8e5f2a0012a3d695","newstitle":"Realty\u0027s next address: Spine of the North shoulders Bengaluru\u0027s future","newspublisher":"Business Standard","year":"2025","month":"October","newsdate":"2025-10-08T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/industry\/news\/realty-s-next-address-spine-of-the-north-shoulders-bengaluru-s-future-125100800846_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"false","createdAt":"2025-10-27T04:31:27.685Z","updatedAt":"2025-10-27T04:31:27.685Z","__v":0},{"_id":"69310aa6e6d63f0012d0a37e","newstitle":"Prestige targets mid-income homes amid luxury boom","newspublisher":"Mint","year":"2025","month":"October","newsdate":"2025-10-05T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/companies\/prestige-group-real-estate-luxury-housing-sales-india-mumbai-bengaluru-11759647217120.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:14:30.116Z","updatedAt":"2025-12-04T04:14:30.116Z","__v":0}];
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