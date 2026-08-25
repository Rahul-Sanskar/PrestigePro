$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
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
     const allNews = [{"_id":"680effadc216730017c4d855","newstitle":"Prestige Estates sees inventory buildup in luxury housing, calls for more mid-income, premium supply","newspublisher":"Money Control","year":"2025","month":"February","newsdate":"2025-02-27T17:12:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-estates-sees-inventory-buildup-in-luxury-housing-calls-for-more-mid-income-premium-supply-12951732.html#google_vignette","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:10:21.214Z","updatedAt":"2025-04-28T04:10:21.214Z","__v":0},{"_id":"680eff4c7832ed0016082cd2","newstitle":"India Design 2025: Here\u0027s how sustainable design can help extend redevelopment timelines and  homes built to last","newspublisher":"Hindustan Times","year":"2025","month":"February","newsdate":"2025-02-23T15:57:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/india-design-2025-heres-how-sustainable-design-can-help-extend-redevelopment-timelines-andhomes-built-to-last-101740286093358.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:08:44.435Z","updatedAt":"2025-04-28T04:08:44.435Z","__v":0},{"_id":"680efbd26ff3e50015bb0198","newstitle":"Investment Tips for Women : Uzma Irfan ?","newspublisher":"ET Now","year":"2025","month":"February","newsdate":"2025-02-06T22:27:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v3UE5gGpUllE","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T03:53:54.998Z","updatedAt":"2025-04-28T03:53:54.998Z","__v":0},{"_id":"680f031cd214040017d53d8b","newstitle":"Prestige Group expanding its mall portfolio with new properties in Mumbai and Delhi-NCR","newspublisher":"Hindustan Times","year":"2025","month":"February","newsdate":"2025-02-05T13:33:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-expanding-its-mall-portfolio-with-new-properties-in-mumbai-and-delhincr-101738741426476.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:25:00.184Z","updatedAt":"2025-04-28T04:25:00.184Z","__v":0},{"_id":"680f03737832ed001608322c","newstitle":"Prestige Group to construct malls spread over 8 million sq-ft across India","newspublisher":"Construction Week","year":"2025","month":"February","newsdate":"2025-02-05T13:33:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/projects-tenders\/prestige-group-to-construct-malls-spread-over-8-million-sq-ft-across-india","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:26:27.424Z","updatedAt":"2025-04-28T04:26:27.424Z","__v":0},{"_id":"680f02083a447e0016de76ca","newstitle":"Prestige Estates sales bookings decline 38 to Rs 10,000 cr in Apr-Dec","newspublisher":"Economic Times","year":"2025","month":"February","newsdate":"2025-02-03T17:33:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-estates-sales-bookings-decline-38-to-rs-10000-cr-in-apr-dec\/articleshow\/117865747.cms?frommdr","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"864182","updated_by":"Kintali Naveesh","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:20:24.578Z","updatedAt":"2025-04-28T07:57:41.469Z","__v":0},{"_id":"680f044f928cc40016cb778d","newstitle":"Prestige Group shows why it\u0027s hard to say goodbye to homes in new TVCs","newspublisher":"E4M","year":"2025","month":"February","newsdate":"2025-02-03T14:42:00.000Z","newslink":"https:\/\/www.exchange4media.com\/marketing-news\/prestige-group-shows-why-its-hard-to-say-goodbye-to-homes-in-new-tvcs-140590.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:30:07.492Z","updatedAt":"2025-04-28T04:30:07.492Z","__v":0},{"_id":"680f02d1f4aab60017caff90","newstitle":"Prestige Estates sales bookings down 38 to 10,066 cr in Apr-Dec","newspublisher":"Business Line","year":"2025","month":"February","newsdate":"2025-02-02T13:09:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/news\/real-estate\/prestige-estates-sales-bookings-down-38-to-10066-cr-in-apr-dec\/article69171979.ece","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:23:45.833Z","updatedAt":"2025-04-28T04:23:45.833Z","__v":0},{"_id":"680f048b5edd1000162c8d15","newstitle":"Prestige Group launches new TVC Goodluck Saying Goodbye","newspublisher":"Adgully","year":"2025","month":"February","newsdate":"2025-02-01T14:42:00.000Z","newslink":"https:\/\/archive.adgully.com\/prestige-group-launches-new-tvc-goodluck-saying-goodbye-155795.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:31:07.369Z","updatedAt":"2025-04-28T04:31:07.369Z","__v":0},{"_id":"680f04ca7832ed00160833bd","newstitle":"Prestige Group unveils new TVC, Goodluck Saying Goodbye.","newspublisher":"Advertising Reporter Staff","year":"2025","month":"February","newsdate":"2025-02-01T14:42:00.000Z","newslink":"https:\/\/www.advertisingreporter.com\/campaigns\/prestige-group-unveils-new-tvc-goodluck-saying-goodbye\/","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:32:10.994Z","updatedAt":"2025-04-28T04:32:10.994Z","__v":0}];
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