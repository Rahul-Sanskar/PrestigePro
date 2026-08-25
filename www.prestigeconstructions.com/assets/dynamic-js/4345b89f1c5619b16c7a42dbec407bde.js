$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
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
     const allNews = [{"_id":"68a57e4747329400156c5c17","newstitle":"https:\/\/www.livemint.com\/news\/prestige-group-lavish-golf-themed-resorts-goa-lonavala-nri-irfan-razack-c-suite-executives-hni-premium-customer-base-11753860511590.html","newspublisher":"Mint","year":"2025","month":"July","newsdate":"2025-07-31T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/news\/prestige-group-lavish-golf-themed-resorts-goa-lonavala-nri-irfan-razack-c-suite-executives-hni-premium-customer-base-11753860511590.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-20T07:50:31.834Z","updatedAt":"2025-08-20T07:50:31.834Z","__v":0},{"_id":"6864b667413eb200164324bb","newstitle":"Prestige Group unveils 3,350 cr residential project in Chennai","newspublisher":"Business Line","year":"2025","month":"July","newsdate":"2025-07-30T12:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/news\/real-estate\/prestige-group-unveils-3350-cr-residential-project-in-chennai\/article69756742.ece","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-07-02T04:32:39.263Z","updatedAt":"2025-07-02T04:32:39.263Z","__v":0},{"_id":"68a57fcf2b10ae0017b92a15","newstitle":"Malls, restaurants \u0026 hotels turn galleries for art","newspublisher":"Economic Times","year":"2025","month":"July","newsdate":"2025-07-27T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/hotels-\/-restaurants\/malls-restaurants-hotels-turn-galleries-for-art\/articleshow\/122927082.cms?frommdr","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-20T07:57:03.874Z","updatedAt":"2025-08-20T07:57:03.874Z","__v":0},{"_id":"68a57f01e90f9b0017a8eb77","newstitle":"Prestige Group plans to shift focus to the 23 crore mid-market homes amid rising demand from salaried homebuyers","newspublisher":"Hindustan Times","year":"2025","month":"July","newsdate":"2025-07-14T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-plans-to-shift-focus-to-the-2-3-crore-mid-market-homes-amid-rising-demand-from-salaried-homebuyers-101752467408274.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-20T07:53:37.215Z","updatedAt":"2025-08-20T07:53:37.215Z","__v":0},{"_id":"68a57f686ab9820016a2b59f","newstitle":"https:\/\/www.livemint.com\/companies\/south-mumbai-luxury-housing-boom-11751997981491.html","newspublisher":"Mint","year":"2025","month":"July","newsdate":"2025-07-10T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/companies\/south-mumbai-luxury-housing-boom-11751997981491.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-20T07:55:20.815Z","updatedAt":"2025-08-20T07:55:20.815Z","__v":0},{"_id":"68a57f3551194a0017cdd699","newstitle":"Indirapuram: A Rising Realty Pocket","newspublisher":"Times Property","year":"2025","month":"July","newsdate":"2025-07-09T12:00:00.000Z","newslink":"https:\/\/timesproperty.com\/article\/post\/indirapuram-a-rising-realty-pocket-blid10211","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-20T07:54:29.811Z","updatedAt":"2025-08-20T07:54:29.811Z","__v":0}];
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