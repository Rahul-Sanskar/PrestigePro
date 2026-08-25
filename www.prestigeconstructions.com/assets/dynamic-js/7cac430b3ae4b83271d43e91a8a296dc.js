$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2026";
    var givenmonth = "february";

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
     const allNews = [{"_id":"69ce3b0fb23e1c001d096184","newstitle":"BMRCL inks pact with Prestige Group for naming rights of Bellandur Metro Station","newspublisher":"The Hindi","year":"2026","month":"February","newsdate":"2026-02-21T12:00:00.000Z","newslink":"properties-in-raidurg","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T09:46:55.249Z","updatedAt":"2026-04-02T09:46:55.249Z","__v":0},{"_id":"69ce3ed0b23e1c001d0970dc","newstitle":"Prestige group gets naming rights for Bellandur metro station","newspublisher":"https:\/\/www.deccanherald.com\/india\/karnataka\/bengaluru\/prestige-group-gets-naming-rights-for-bellandur-metro-station-3907092","year":"2026","month":"February","newsdate":"2026-02-21T12:00:00.000Z","newslink":"https:\/\/www.deccanherald.com\/india\/karnataka\/bengaluru\/prestige-group-gets-naming-rights-for-bellandur-metro-station-3907092","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:02:56.714Z","updatedAt":"2026-04-02T10:02:56.714Z","__v":0},{"_id":"69ce3f8ed5f615001f00a6ef","newstitle":"Prestige wins 30-year naming rights deal for Bellandur Metro station","newspublisher":"The Economic Times | Industry","year":"2026","month":"February","newsdate":"2026-02-21T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-wins-30-year-naming-rights-deal-for-bellandur-metro-station\/articleshow\/128652587.cms?frommdr","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:06:06.572Z","updatedAt":"2026-04-02T10:06:06.572Z","__v":0},{"_id":"69ce41b924be0c0020235555","newstitle":"Prestige wins 30-year naming rights deal for Bellandur Metro station  Read more at: https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-wins-30-year-naming-rights-deal-for-bellandur-metro-station\/articleshow\/128652587.cms?utm_sourcecontentofinterest\u0026utm_mediumtext\u0026utm_campaigncppst","newspublisher":"The Economic Times","year":"2026","month":"February","newsdate":"2026-02-21T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-wins-30-year-naming-rights-deal-for-bellandur-metro-station\/articleshow\/128652587.cms?frommdr","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:15:21.859Z","updatedAt":"2026-04-02T10:15:21.859Z","__v":0},{"_id":"69ce48877344f900208c2dd5","newstitle":"Prestige Group launches residential project with 2,000 crore potential in Mira Road, near Mumbai","newspublisher":"MSN","year":"2026","month":"February","newsdate":"2026-02-19T12:00:00.000Z","newslink":"https:\/\/www.msn.com\/en-in\/news\/India\/prestige-group-launches-residential-project-with-2-000-crore-potential-in-mira-road-near-mumbai\/ar-AA1Oq8eh?ocidfinance-verthp-feeds\u0026apiversionv2\u0026domshim1\u0026noservercache1\u0026noservertelemetry1\u0026batchservertelemetry1\u0026renderwebcomponents1\u0026wcseo1","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:44:23.306Z","updatedAt":"2026-04-02T10:44:23.306Z","__v":0},{"_id":"69ce47db37c39f001e33a1e6","newstitle":"Gen Z is rethinking home ownership, driven less by aspiration and more by arithmetic","newspublisher":"Business Today","year":"2026","month":"February","newsdate":"2026-02-01T12:00:00.000Z","newslink":"https:\/\/www.businesstoday.in\/magazine\/deep-dive\/story\/gen-z-is-rethinking-home-ownership-driven-less-by-aspiration-and-more-by-arithmetic-513710-2026-01-30","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-04-02T10:41:31.694Z","updatedAt":"2026-04-02T10:41:31.694Z","__v":0}];
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