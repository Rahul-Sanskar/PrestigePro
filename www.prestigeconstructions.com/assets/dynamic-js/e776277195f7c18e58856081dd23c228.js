$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2026";
    var givenmonth = "march";

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
     const allNews = [{"_id":"69ce3d2ab23e1c001d09697e","newstitle":"Prestige Group and Arihant Group jointly acquire land in Padi, Chennai","newspublisher":"ET Reality","year":"2026","month":"March","newsdate":"2026-03-27T12:00:00.000Z","newslink":"https:\/\/realty.economictimes.indiatimes.com\/news\/industry\/prestige-group-and-arihant-group-jointly-acquire-land-in-padi-chennai\/129836817","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T09:55:54.633Z","updatedAt":"2026-04-02T09:55:54.633Z","__v":0},{"_id":"69ce3f06ab9aca001f6389ce","newstitle":"Prestige Group and Arihant Group acquire 16 acre land parcel in Padi, Chennai","newspublisher":" Business Standard","year":"2026","month":"March","newsdate":"2026-03-27T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/markets\/capital-market-news\/prestige-group-and-arihant-group-acquire-16-acre-land-parcel-in-padi-chennai-126032700275_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:03:50.436Z","updatedAt":"2026-04-02T10:03:50.436Z","__v":0},{"_id":"69ce3fe77344f900208c15e6","newstitle":"Prestige Estates, Arihant Group buy land in Chennai to build 5,000 cr worth housing project","newspublisher":"Business Line","year":"2026","month":"March","newsdate":"2026-03-27T12:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/news\/real-estate\/prestige-estates-arihant-group-buy-land-in-chennai-to-build-5000-cr-worth-housing-project\/article70790949.ece","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:07:35.394Z","updatedAt":"2026-04-02T10:07:35.394Z","__v":0},{"_id":"69ce42b0932731001f7ee9c3","newstitle":"Homebuyers still absorbing price hikes as demand holds strong: Prestiges Irfan Razack","newspublisher":"Homebuyers still absorbing price hikes as demand holds strong: Prestiges Irfan Razack","year":"2026","month":"March","newsdate":"2026-03-27T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/business\/companies\/prestige-group-demand-absorbs-inflation-real-estate-outlook-alpha-article-19876191.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:19:28.942Z","updatedAt":"2026-04-02T10:19:28.942Z","__v":0},{"_id":"69ce470bd90289001f4f8b42","newstitle":"How Prestige Group is Integrating Biodiversity into Urban Development","newspublisher":"India CSR","year":"2026","month":"March","newsdate":"2026-03-18T12:00:00.000Z","newslink":"https:\/\/indiacsr.in\/how-prestige-group-is-integrating-biodiversity-into-urban-development\/","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:38:03.435Z","updatedAt":"2026-04-02T10:38:03.435Z","__v":0}];
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