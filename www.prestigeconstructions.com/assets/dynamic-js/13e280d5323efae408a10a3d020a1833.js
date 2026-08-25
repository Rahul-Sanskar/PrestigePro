$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
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
     const allNews = [{"_id":"68d379d1d7013e0012269546","newstitle":"Prestige Group eyes 50,000 crore home sales by FY29-30 to expand into new markets, focus on 23 cr segment","newspublisher":"Hindustan Times","year":"2025","month":"September","newsdate":"2025-09-24T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-eyes-50-000-crore-home-sales-by-fy29-30-to-expand-into-new-markets-focus-on-2-3-cr-segment-101756142812021.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:55:45.998Z","updatedAt":"2025-09-24T04:55:45.998Z","__v":0},{"_id":"68fef4e316ced00012947dea","newstitle":"Housing market yet to experience GST 2.0 impact, realtors offer attractive discounts to drive sales","newspublisher":"New Indian Express","year":"2025","month":"September","newsdate":"2025-09-24T12:00:00.000Z","newslink":"https:\/\/www.newindianexpress.com\/business\/2025\/Sep\/24\/housing-market-yet-to-experience-gst-20-impact-realtors-offer-attractive-discounts-to-drive-sales","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"false","createdAt":"2025-10-27T04:28:19.043Z","updatedAt":"2025-10-27T04:28:19.043Z","__v":0},{"_id":"68fef452fa92ad0012511d0a","newstitle":"Exclusive: Prestige Group\u0027s Uzma Irfan on Revolutionizing Real Estate at CREDAI NATCON in Singapore","newspublisher":"CNBC Awaaz","year":"2025","month":"September","newsdate":"2025-09-22T12:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?vkBEVt4eZvLQ","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"false","createdAt":"2025-10-27T04:25:54.908Z","updatedAt":"2025-10-27T04:25:54.908Z","__v":0},{"_id":"68fef51cdca4860011485898","newstitle":"Bengaluru real estate developers turn to greywater recycling amid worsening scarcity","newspublisher":"Money Control","year":"2025","month":"September","newsdate":"2025-09-22T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/bengaluru-real-estate-developers-turn-to-greywater-recycling-amid-deepening-scarcity-13566409.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"false","createdAt":"2025-10-27T04:29:16.383Z","updatedAt":"2025-10-27T04:29:16.383Z","__v":0},{"_id":"68fef483989f8a001239dea3","newstitle":"Forum Malls to fire up India expansion with 14 new shopping centres, counts on festive rush","newspublisher":"Reuters","year":"2025","month":"September","newsdate":"2025-09-15T12:00:00.000Z","newslink":"https:\/\/www.reuters.com\/world\/india\/forum-malls-fire-up-india-expansion-with-14-new-shopping-centres-counts-festive-2025-09-11\/","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"false","createdAt":"2025-10-27T04:26:43.873Z","updatedAt":"2025-10-27T04:26:43.873Z","__v":0},{"_id":"68fef56f67e01a0012538e47","newstitle":"India emerges as Asia-Pacifics office powerhouse, with Bengaluru leading the surge","newspublisher":"The Hindubusiness Line","year":"2025","month":"September","newsdate":"2025-09-15T12:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/news\/real-estate\/india-emerges-as-asia-pacifics-office-powerhouse-with-bengaluru-leading-the-surge\/article70048709.ece","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"false","createdAt":"2025-10-27T04:30:39.859Z","updatedAt":"2025-10-27T04:30:39.859Z","__v":0},{"_id":"68fef4ac16ced00012947d16","newstitle":"Forum Malls to Add 14 New Centres by 2029, Riding Festive Growth","newspublisher":"Reality Plus","year":"2025","month":"September","newsdate":"2025-09-13T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/news-views\/forum-malls-to-add-14-new-centres-by-2029-riding-festive-growth-121698.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"false","createdAt":"2025-10-27T04:27:24.115Z","updatedAt":"2025-10-27T04:27:24.115Z","__v":0},{"_id":"68fef5dfda3ba30013ef1c67","newstitle":"Clubhouses in uber luxury properties get a luxury upgrade","newspublisher":"Mint","year":"2025","month":"September","newsdate":"2025-09-04T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/industry\/infrastructure\/clubhouses-in-uber-luxury-properties-get-a-luxury-upgrade-11756830980604.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"false","createdAt":"2025-10-27T04:32:31.486Z","updatedAt":"2025-10-27T04:32:31.486Z","__v":0},{"_id":"68d37753d15fd0001147a453","newstitle":"\u0027Unfair...Cost Instantly Goes Up\u0027: Prestige Group On Karnataka\u0027s Property Registration Fee Hike","newspublisher":"NDTV Profit","year":"2025","month":"September","newsdate":"2025-09-01T12:00:00.000Z","newslink":"https:\/\/www.ndtvprofit.com\/real-estate\/unfaircost-instantly-goes-up-prestige-group-on-karnatakas-property-registration-fee-hike","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:45:07.963Z","updatedAt":"2025-09-24T04:45:07.963Z","__v":0}];
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