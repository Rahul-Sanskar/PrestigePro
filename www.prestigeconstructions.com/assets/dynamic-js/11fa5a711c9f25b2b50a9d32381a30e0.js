$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
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
     const allNews = [{"_id":"693109431b144e0013e989af","newstitle":"Prestige Groups Irfan Razack confident on real estate momentum, stresses need for fresh inventory","newspublisher":"CNBC TV18","year":"2025","month":"November","newsdate":"2025-11-27T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/business\/companies\/prestige-group-real-estate-momentum-pricing-strategy-rising-labor-costs-irfan-razak-alpha-article-19773612.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:08:35.920Z","updatedAt":"2025-12-04T04:08:35.920Z","__v":0},{"_id":"69817fc608198a001e35d368","newstitle":"Prestige Groups Irfan Razack confident on real estate momentum, stresses need for fresh inventory","newspublisher":"CNBC TV18","year":"2025","month":"November","newsdate":"2025-11-27T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/business\/companies\/prestige-group-real-estate-momentum-pricing-strategy-rising-labor-costs-irfan-razak-alpha-article-19773612.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:55:34.844Z","updatedAt":"2026-02-03T04:55:34.844Z","__v":0},{"_id":"69818098d09af0001d0b3c46","newstitle":"From  1 crore to  100 crore apartments, homebuyers show strong confidence in long-term home loans: Prestige Estates CEO","newspublisher":"Hindustan Times","year":"2025","month":"November","newsdate":"2025-11-26T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/from-1-crore-to-100-crore-apartments-homebuyers-show-strong-confidence-in-long-term-home-loans-prestige-estates-ceo-101764038895996.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:59:04.361Z","updatedAt":"2026-02-03T04:59:04.361Z","__v":0},{"_id":"693107f6e61b6a001296d690","newstitle":"Prestige Group Plans Rs.10,000 Crore Capex for West India Expansion","newspublisher":"Reality Plus","year":"2025","month":"November","newsdate":"2025-11-20T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/article\/prestige-group-plans-rs10000-crore-capex-for-west-india-expansion-122819.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:03:02.323Z","updatedAt":"2025-12-04T04:03:02.323Z","__v":0},{"_id":"69817e8508198a001e35d055","newstitle":"Prestige Group Plans Rs.10,000 Crore Capex for West India Expansion","newspublisher":"Reality Plus","year":"2025","month":"November","newsdate":"2025-11-20T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/article\/prestige-group-plans-rs10000-crore-capex-for-west-india-expansion-122819.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:50:13.476Z","updatedAt":"2026-02-03T04:50:13.476Z","__v":0},{"_id":"6931090bbae4650012999a0d","newstitle":"Prestige plans up to 10,000 crore capex for West India portfolio","newspublisher":"Business Standard","year":"2025","month":"November","newsdate":"2025-11-18T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/prestige-west-india-expansion-capex-plan-125111800949_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:07:39.555Z","updatedAt":"2025-12-04T04:07:39.555Z","__v":0},{"_id":"69818100c76bc90022003a0a","newstitle":"Prestige plans up to 10,000 crore capex for West India portfolio","newspublisher":"Business Standard","year":"2025","month":"November","newsdate":"2025-11-18T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/companies\/news\/prestige-west-india-expansion-capex-plan-125111800949_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T05:00:48.555Z","updatedAt":"2026-02-03T05:00:48.555Z","__v":0},{"_id":"6931071a031bde001219d5f0","newstitle":"Prestige Estates Q2 Results  Profit more than doubles to 430 crore on stronger margins","newspublisher":"CNBC TV18","year":"2025","month":"November","newsdate":"2025-11-12T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/market\/stocks\/prestige-estates-share-price-q2-results-net-profit-more-than-doubles-to-rs-430-crore-on-stronger-margins-19758330.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T03:59:22.527Z","updatedAt":"2025-12-04T03:59:22.527Z","__v":0},{"_id":"69817e2da78ae9001dc6cdf9","newstitle":"Prestige Estates unveils Rs 5,000 crore Evergreen housing project in Bengaluru","newspublisher":"Z Business","year":"2025","month":"November","newsdate":"2025-11-06T12:00:00.000Z","newslink":"https:\/\/www.zeebiz.com\/real-estate\/news-prestige-estates-unveils-rs-5000-crore-evergreen-housing-project-in-bengaluru-388032","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:48:45.312Z","updatedAt":"2026-02-03T04:48:45.312Z","__v":0},{"_id":"69310a173367f6001391b02f","newstitle":"CSR: Prestige Group to Plant One Million Trees in Bengaluru","newspublisher":"India CSR","year":"2025","month":"November","newsdate":"2025-11-04T12:00:00.000Z","newslink":"https:\/\/indiacsr.in\/csr-prestige-group-plant-one-million-trees-bengaluru\/","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:12:07.189Z","updatedAt":"2025-12-04T04:12:07.189Z","__v":0},{"_id":"69310a47e6d63f0012d0a2e5","newstitle":"CSR: Prestige Group to Plant One Million Trees in Bengaluru","newspublisher":"India CSR","year":"2025","month":"November","newsdate":"2025-11-04T12:00:00.000Z","newslink":"https:\/\/indiacsr.in\/csr-prestige-group-plant-one-million-trees-bengaluru\/","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-12-04T04:12:55.453Z","updatedAt":"2025-12-04T04:12:55.453Z","__v":0},{"_id":"698180c8c76bc9002200399d","newstitle":"CSR: Prestige Group to Plant One Million Trees in Bengaluru","newspublisher":"India CSR","year":"2025","month":"November","newsdate":"2025-11-04T12:00:00.000Z","newslink":"https:\/\/indiacsr.in\/csr-prestige-group-plant-one-million-trees-bengaluru\/","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:59:52.919Z","updatedAt":"2026-02-03T04:59:52.919Z","__v":0}];
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