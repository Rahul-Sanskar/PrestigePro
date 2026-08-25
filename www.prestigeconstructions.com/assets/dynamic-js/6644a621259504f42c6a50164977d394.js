$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2021";
    var givenmonth = "june";

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
     const allNews = [{"_id":"65e8488473e8574ceccb8fac","newstitle":"Plan to grow annuity portfolio to over Rs 2,800 crore : Prestige Estates CEO","newspublisher":"Business Standard","newsdate":"2021-06-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-268401466","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fad","newstitle":"The Big Picture With Raamdeo Agrawal, Ashwani Bhatia \u0026 Irfan Razack","newspublisher":"Times Now","newsdate":"2021-06-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-268402296","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fae","newstitle":"Huge boost likely for real estate in next five years : Irfan Razack, Prestige Group","newspublisher":"The Economic Times","newsdate":"2021-06-22T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-268305612","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8faf","newstitle":"Prestige\u0027s debt reduction comes as a big relief to investors","newspublisher":"Knowledia","newsdate":"2021-06-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266672914","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb0","newstitle":"Slow pace of unlocking has dented demand, will take time for consumer confidence to build : Knight Frank","newspublisher":"CNBC TV18","newsdate":"2021-06-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266722608","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb1","newstitle":"Irfan Razack \u0026 Gulam Zia Discuss Outlook For Real Estate Sector | Bazaar Corporate Radar | CNBC-TV18","newspublisher":"MSN India","newsdate":"2021-06-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266709334-841","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb2","newstitle":"Recalibrating Business Strategies in Covid Times","newspublisher":"BW Hotelier","newsdate":"2021-06-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266730158","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb3","newstitle":"Prestige Estate Standalone March 2021 Net Sales at Rs 1,367.40 crore, up 47.62% Y-o-Y","newspublisher":"Money Control","newsdate":"2021-06-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266707626","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb4","newstitle":"Prestige Estates debt reduction comes as a big relief to investors","newspublisher":"Mint","newsdate":"2021-06-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213711206","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb5","newstitle":"Prestige group\u0027s bookings at record Rs 5,461 crore","newspublisher":"The Pioneer","newsdate":"2021-06-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213709672","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb6","newstitle":"Prestige Group sees spurt in Q4 profit at Rs 1,350 crore","newspublisher":"The Hindu Business Line","newsdate":"2021-06-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213714888","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb7","newstitle":"Prestige Estates Projects\u0027 sales bookings rise by 20% in FY21","newspublisher":"Citrus Interactive","newsdate":"2021-06-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266559606","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb8","newstitle":"Prestige Estates Projects informs about investor presentation","newspublisher":"HT Syndication","newsdate":"2021-06-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266555050","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fb9","newstitle":"Prestige Estates Projects Q4 profit jumps sharply to Rs 1,336 crore on sale of assets","newspublisher":"Business Today","newsdate":"2021-06-09T00:00:00.000Z","newslink":"https:\/\/www.businesstoday.in\/latest\/corporate\/story\/prestige-estates-q4-profit-jumps-sharply-to-rs-1336-crore-on-sale-of-assets-297756-2021-06-09","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fba","newstitle":"Prestige Estates Q4 profit jumps multi-folds to Rs 1,336 cr on asset sale","newspublisher":"Business Standard","newsdate":"2021-06-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266381684","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fbb","newstitle":"Prestige Estates shares rally 9% on multifold increase in profit in Q4","newspublisher":"CNBC TV18","newsdate":"2021-06-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266417010","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fbc","newstitle":"Prestige Group sees spurt in Q4 profit at Rs. 1,350.5 cr on asset sale","newspublisher":"The Hindu Business Line","newsdate":"2021-06-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266450200","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fbd","newstitle":"Prestige group\u0027s FY21 sales bookings at record Rs 5,461cr despite Covid","newspublisher":"Business Standard","newsdate":"2021-06-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266465198","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fbe","newstitle":"Prestige group\u0027s FY21 sales bookings at record Rs 5,461cr despite COVID blues","newspublisher":"Yahoo","newsdate":"2021-06-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266458028","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fbf","newstitle":"Prestige group\u0027s FY21 sales bookings at record Rs 5,461crore despite COVID blues","newspublisher":"Money Control","newsdate":"2021-06-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266498620","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc0","newstitle":"Prestige group\u0027\u0027s FY21 sales bookings at record Rs 5,461cr despite COVID blues","newspublisher":"Outlook India","newsdate":"2021-06-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266457760","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc1","newstitle":"Prestige Estates reports 164% jump in Q4 profit","newspublisher":"The Economic Times","newsdate":"2021-06-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266440150","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc2","newstitle":"Prestige Foundation to vaccine 10000 employees by June first week","newspublisher":"The Free Press Journal","newsdate":"2021-06-09T00:00:00.000Z","newslink":"#","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc3","newstitle":"Prestige Group commits Rs 1 crore to vaccinate over 20,000 employees","newspublisher":"Magicbricks","newsdate":"2021-06-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266192484","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc4","newstitle":"Prestige Estates posts multi-fold jump in Q4 profit to Rs 1,336 cr","newspublisher":"Economic Times","newsdate":"2021-06-08T00:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/markets\/stocks\/earnings\/prestige-estates-posts-multi-fold-jump-in-q4-profit-to-rs-1336-cr\/articleshow\/83347605.cms","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc5","newstitle":"Prestige Estates Q4 profit jumps multi-folds to Rs 1,336 crore on asset sale","newspublisher":"Money Control","newsdate":"2021-06-08T00:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/earnings\/prestige-estates-q4-profit-jumps-multi-folds-to-rs-1336-crore-on-asset-sale-7006241.html","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc6","newstitle":"Prestige Estates Q4 profit jumps multi-folds to Rs 1,336 cr on asset sale","newspublisher":"Outlook India","newsdate":"2021-06-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266361480","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc7","newstitle":"Prestige Estates Q4 profit jumps multi-folds to Rs 1,336 cr on asset sale","newspublisher":"Yahoo Finance India","newsdate":"2021-06-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266360190","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc8","newstitle":"Company takes on vaccination drive for employees","newspublisher":"The New Indian Express","newsdate":"2021-06-07T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213638286","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fc9","newstitle":"The flexi work revolution is here","newspublisher":"Mint","newsdate":"2021-06-07T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266180042","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fca","newstitle":"Prestige Group commits Rs 1 crore to vaccinate over 20,000 employees","newspublisher":"Infra Buddy","newsdate":"2021-06-06T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-266074502","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fcb","newstitle":"Prestige Group commits Rs 1 crore to vaccinate over 20,000 employees","newspublisher":"Economic Times","newsdate":"2021-06-05T00:00:00.000Z","newslink":"https:\/\/realty.economictimes.indiatimes.com\/news\/industry\/prestige-group-commits-rs-1-crore-to-vaccinate-over-20000-employees\/83261670","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fcc","newstitle":"Prestige Foundation to vaccinate 10,000 employees by June first week","newspublisher":"Health Care Radius","newsdate":"2021-06-04T00:00:00.000Z","newslink":"#","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fcd","newstitle":"Under the aegis of Prestige Foundation, the construction major plans to vaccinate ~10,000 employees by June first week","newspublisher":"Mumbai News Express","newsdate":"2021-06-04T00:00:00.000Z","newslink":"http:\/\/mumbainewsexpress.com\/under-the-aegis-of-prestige-foundation-the-construction-major-plans-to-vaccinate-10000-employees-by-june-first-week\/","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fce","newstitle":"Over 50% of Hyderabad\u0027s home-buyers are below 35 years","newspublisher":"The Times of India","newsdate":"2021-06-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213557520","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fcf","newstitle":"Prestige Estates Projects Limited - Copy of Newspaper Publication","newspublisher":"Postin Trend","newsdate":"2021-06-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-265592480","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fd0","newstitle":"Corporate Social Responsibility (CSR) : Prestige Group to vaccinate its 10,000 employees","newspublisher":"India CSR","newsdate":"2021-06-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-265649868","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fd1","newstitle":"Over 50% of Hyderabad\u0027s home-buyers are below 35 years","newspublisher":"The Times of India","newsdate":"2021-06-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213557520","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fd2","newstitle":"Over 50% of Hyderabad\u0027s home-buyers are below 35 years","newspublisher":"The Times of India","newsdate":"2021-06-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213557520","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fd3","newstitle":"Prestige Group to vaccinate entire workforce by June","newspublisher":"The Hindu Business Line","newsdate":"2021-06-03T00:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/companies\/prestige-group-to-vaccinate-entire-workforce-by-june\/article34718081.ece","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fd4","newstitle":"ge Foundation, the construction major plans to vaccinate ~10,000 employees by June first week","newspublisher":"Business Gujarat News","newsdate":"2021-06-03T00:00:00.000Z","newslink":"https:\/\/www.businessgujaratnews.com\/under-the-aegis-of-prestige-foundation-the-construction-major-plans-to-vaccinate-10000-employees-by-june-first-week\/","month":"June","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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