$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2023";
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
     const allNews = [{"_id":"662b804646da300018ca2265","newstitle":"Build in India: Inside the great construction","newspublisher":"Mint","year":"2023","month":"November","newsdate":"2023-11-30T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/industry\/infrastructure\/build-in-india-inside-the-great-construction-boom-11701776004532.html#:~:text=About%2015%2C68%2C281%20residential%20units,real%20estate%20construction%20was%20slow.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T10:21:58.704Z","updatedAt":"2024-04-26T10:21:58.704Z","__v":0},{"_id":"662b789fa8bdfa001802b2d1","newstitle":"Prestige Group to focus on Delhi-NCR and Mumbai markets","newspublisher":"Business Line","year":"2023","month":"November","newsdate":"2023-11-14T12:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/news\/real-estate\/prestige-group-to-focus-on-delhi-ncr-and-mumbai-markets\/article67531566.ece","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:49:19.241Z","updatedAt":"2024-04-26T09:49:19.241Z","__v":0},{"_id":"662b77fb46da300018ca09b3","newstitle":"Realtors see 10-30% jump in pre-Diwali sales","newspublisher":"The Financial Express","year":"2023","month":"November","newsdate":"2023-11-10T12:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/business\/industry-realtors-see-10-30-jump-in-pre-diwali-sales-3303736\/#:~:text=Property%20developers%20are%20witnessing%20a,larger%20homes%2C%20according%20to%20developers.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:46:35.679Z","updatedAt":"2024-04-26T09:46:35.679Z","__v":0},{"_id":"662b78526e95cd00186ad9c8","newstitle":"Prestige Group anticipates robust second half with multiple residential launches","newspublisher":"CNBC TV18","year":"2023","month":"November","newsdate":"2023-11-09T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/real-estate\/prestige-group-anticipates-robust-second-half-with-multiple-residential-launches-18273731.htm#:~:text=AM%20IST%20(Updated)-,Bengaluru%2Dbased%20listed%20real%20estate%20developer%20Prestige%20Group%20is%20looking,launches%20and%20ambitious%20sales%20targets.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:48:02.983Z","updatedAt":"2024-04-26T09:48:02.983Z","__v":0},{"_id":"662b79566e95cd00186adc41","newstitle":"Prestige Brings \u0027The Prestige City\u0027 Mega Township to Hyderabad","newspublisher":"Realty Plus","year":"2023","month":"November","newsdate":"2023-11-09T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/news-views\/prestige-brings-the-prestige-city-mega-township-to-hyderabad-112833.html#:~:text=The%20project%20is%20poised%20to,timeless%20elegance%20with%20modern%20functionality.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:52:22.141Z","updatedAt":"2024-04-26T09:52:22.141Z","__v":0},{"_id":"662b77a9a8bdfa001802b018","newstitle":"Prestige Estates Q2 Results: Profit And Revenue Rises, Beats Estimates","newspublisher":"NDTV Profit","year":"2023","month":"November","newsdate":"2023-11-08T12:00:00.000Z","newslink":"https:\/\/www.ndtvprofit.com\/markets\/prestige-estates-q2-results-profit-and-revenue-rises-beats-estimates","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:45:13.391Z","updatedAt":"2024-04-26T09:45:13.391Z","__v":0},{"_id":"662b78f615f3ab00199347b6","newstitle":"Prestige Group to launch its largest township in Hyderabad, eyes Rs 8,000 crore in sales","newspublisher":"Money Control","year":"2023","month":"November","newsdate":"2023-11-08T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-group-to-launch-its-largest-township-in-hyderabad-eyes-rs-8000-crore-in-sales-11689151.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:50:46.858Z","updatedAt":"2024-04-26T09:50:46.858Z","__v":0},{"_id":"662b7a9746da300018ca117d","newstitle":"India developers seek to cash in on soaring EV sales with residential charges","newspublisher":"The Times of India","year":"2023","month":"November","newsdate":"2023-11-07T12:00:00.000Z","newslink":"https:\/\/timesofindia.indiatimes.com\/auto\/electric-cars\/india-developers-seek-to-cash-in-on-soaring-ev-sales-with-residential-chargers\/articleshow\/105027868.cms","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:57:43.784Z","updatedAt":"2024-04-26T09:57:43.784Z","__v":0},{"_id":"662b7af7a8bdfa001802ba22","newstitle":"Property developers cash in on residential chargers amid soaring EV sales","newspublisher":"HT Auto","year":"2023","month":"November","newsdate":"2023-11-07T12:00:00.000Z","newslink":"https:\/\/auto.hindustantimes.com\/auto\/electric-vehicles\/property-developers-add-residential-chargers-to-keep-up-with-soaring-ev-sales-41699357132093.html#:~:text=As%20the%20country%20plans%20to,in%20on%20residential%20EV%20chargers.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:59:19.871Z","updatedAt":"2024-04-26T09:59:19.871Z","__v":0},{"_id":"662b79e7a8bdfa001802b6fd","newstitle":"India developers seek to cash in on soaring EV sales with residential charges","newspublisher":"Reuters","year":"2023","month":"November","newsdate":"2023-11-06T12:00:00.000Z","newslink":"https:\/\/www.reuters.com\/business\/autos-transportation\/india-developers-seek-cash-soaring-ev-sales-with-residential-chargers-2023-11-06\/#:~:text=Nov%206%20(Reuters)%20%2D%20More,up%20with%20soaring%20EV%20sales.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:54:47.248Z","updatedAt":"2024-04-26T09:54:47.248Z","__v":0},{"_id":"662b7a4915f3ab0019934b7e","newstitle":"India developers seek to cash in on soaring EV sales with residential charges","newspublisher":"Yahoo Finance","year":"2023","month":"November","newsdate":"2023-11-06T12:00:00.000Z","newslink":"https:\/\/finance.yahoo.com\/news\/india-developers-seek-cash-soaring-093403634.html?guccounter=1\u0026guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8\u0026guce_referrer_sig=AQAAAM08HS7Qhxx9yWQw9ulaoH8zfVGQPY5o1dC1o7kOfI5aVPyYHHDcjhDN7LDd-QgjWOmLYkEDRz-TWSjxAZ5KewjqtjrZQCWOicxfGoUQQ6B_IeeTOtfMUBhYr099P_UmylcYT5pcUlPbqYtqYeWE6j0mpOrbElD3ZCuve5W_ajzh","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:56:25.235Z","updatedAt":"2024-04-26T09:56:25.235Z","__v":0}];
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