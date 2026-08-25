$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2023";
    var givenmonth = "december";

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
     const allNews = [{"_id":"662b961f15f3ab0019939e94","newstitle":"Year-ahead: Top realtors expect 10-15% jump in home sales","newspublisher":"The Financial Express","year":"2023","month":"December","newsdate":"2023-12-30T12:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/business\/industry-year-ahead-top-realtors-expect-10-15-jump-in-home-sales-3351042\/","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T11:55:11.311Z","updatedAt":"2024-04-26T11:55:11.311Z","__v":0},{"_id":"662b954046da300018ca5c32","newstitle":"Rewind 2023: Luxury, super-luxury home-buying saw a bull run this year","newspublisher":"CNBC TV18","year":"2023","month":"December","newsdate":"2023-12-29T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/real-estate\/rewind-2023-luxury-super-luxury-home-buying-saw-a-bull-run-this-year-18669361.htm","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T11:51:28.193Z","updatedAt":"2024-04-26T11:51:28.193Z","__v":0},{"_id":"662b98ce15f3ab001993a470","newstitle":"Indian luxury consumers now put a greater emphasis on brand consciousness and experimental value: Morph Design Co\u0027s Anjum Jung","newspublisher":"Storyboard 18","year":"2023","month":"December","newsdate":"2023-12-28T12:00:00.000Z","newslink":"https:\/\/www.storyboard18.com\/brand-makers\/indian-luxury-consumers-now-put-a-greater-emphasis-on-brand-consciousness-and-experiential-value-morph-design-cos-anjum-jung-19415.htm","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:06:38.330Z","updatedAt":"2024-04-26T12:06:38.330Z","__v":0},{"_id":"662b9758a8bdfa0018030f42","newstitle":"Why South Bangaluru\u0027s isolated haven Kanakapura Road is now looking at property price hikes","newspublisher":"Money Control","year":"2023","month":"December","newsdate":"2023-12-21T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/area-watch-why-south-bengalurus-isolated-haven-kanakapura-road-is-now-looking-at-property-price-hikes-11936951.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:00:24.901Z","updatedAt":"2024-04-26T12:00:24.901Z","__v":0},{"_id":"662b967fa8bdfa0018030c93","newstitle":"Hyderabad real estate market achieves record stamp duty revenue despite rising prices","newspublisher":"The Economic Times","year":"2023","month":"December","newsdate":"2023-12-18T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/hyderabad-real-estate-market-achieves-record-stamp-duty-revenue-despite-rising-prices\/articleshow\/106077830.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T11:56:47.847Z","updatedAt":"2024-04-26T11:56:47.847Z","__v":0},{"_id":"662b95dd15f3ab0019939e06","newstitle":"Prestige to report 39% growth in topline in FY24","newspublisher":"Deccan Herald","year":"2023","month":"December","newsdate":"2023-12-15T12:00:00.000Z","newslink":"https:\/\/www.deccanherald.com\/business\/companies\/prestige-group-expects-to-report-a-39-growth-in-its-topline-in-fy24-2808084","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T11:54:05.130Z","updatedAt":"2024-04-26T11:54:05.130Z","__v":0},{"_id":"662b9814a8bdfa001803114e","newstitle":"Prestie Group launches largest residential project in Kozhikode, eyes Rs 1,200 cr revenue","newspublisher":"Money Control","year":"2023","month":"December","newsdate":"2023-12-13T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-group-launches-largest-residential-project-in-kozhikode-eyes-rs-1200-cr-revenue-11894271.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:03:32.845Z","updatedAt":"2024-04-26T12:03:32.845Z","__v":0},{"_id":"662b80ac6e95cd00186af1fe","newstitle":"Developers now focus on new growth menu: Food-only Malls","newspublisher":"The Economic Times","year":"2023","month":"December","newsdate":"2023-12-06T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/developers-now-focus-on-new-growth-menu-food-only-malls\/articleshow\/105763474.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T10:23:40.565Z","updatedAt":"2024-04-26T10:23:40.565Z","__v":0},{"_id":"662b872ba8bdfa001802dedd","newstitle":"Luxury Inc Sees India as the Next Big Destination","newspublisher":"The Economic Times","year":"2023","month":"December","newsdate":"2023-12-06T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/retail\/luxury-inc-sees-india-as-the-next-big-destination\/articleshow\/105602446.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T10:51:23.639Z","updatedAt":"2024-04-26T10:51:23.639Z","__v":0}];
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