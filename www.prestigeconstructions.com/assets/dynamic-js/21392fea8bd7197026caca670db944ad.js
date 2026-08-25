$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2022";
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
     const allNews = [{"_id":"65e8488473e8574ceccb8e2f","newstitle":"Prestige realty rolls out plans for Rs 7,500-cr projects","newspublisher":"NBM and CW","newsdate":"2022-07-31T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-222784425","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e31","newstitle":"Prestige Estates announced update on operational performance","newspublisher":"Yugmarg","newsdate":"2022-07-20T00:00:00.000Z","newslink":"#","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e30","newstitle":"Prestige Estates announces update on operational performance","newspublisher":"Punjab Express","newsdate":"2022-07-20T00:00:00.000Z","newslink":"#","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e32","newstitle":"Prestige Group sales bookings jump 4-fold on account of better demand","newspublisher":"Business Standard","newsdate":"2022-07-18T00:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/article\/companies\/prestige-group-sales-bookings-jump-4-fold-on-account-of-better-demand-122071800557_1.html","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e33","newstitle":"Prestige Estates registers quarterly sales of Rs. 30,121 million and Collections of Rs. 21,464 million during Q1 FY23","newspublisher":"Equity Bulls","newsdate":"2022-07-18T00:00:00.000Z","newslink":"https:\/\/www.equitybulls.com\/category.php?id=316601","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e34","newstitle":"Prestige Launches Prestige Zackria Metropolitan","newspublisher":"Construction Week","newsdate":"2022-07-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-222576083","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e35","newstitle":"40 lakh-Rs 1 crore segment driving housing sales : Prestige","newspublisher":"The Hindu Business Line","newsdate":"2022-07-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-222539779","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e36","newstitle":"Prestige envisages 66 million square ft of development by FY23-24","newspublisher":"The Hindu Business Line","newsdate":"2022-07-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-365661939","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e37","newstitle":"Nexus Malls rebrands Sujana Mall as Nexus Hyderabad","newspublisher":"HT Syndication","newsdate":"2022-07-07T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-365502785-841","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e38","newstitle":"Mr. Irfan Razack felicitated as India\u0027s Best CEO, Real Estate","newspublisher":"Business News Week","newsdate":"2022-07-01T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-364948962","month":"July","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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