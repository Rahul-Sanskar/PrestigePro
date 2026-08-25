$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2021";
    var givenmonth = "august";

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
     const allNews = [{"_id":"65e8488473e8574ceccb8f91","newstitle":"Dazzling Finale Of Realty+ Top 50 Marketing Minds Conclave \u0026 Awards 2021","newspublisher":"The Property Times","newsdate":"2021-08-19T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-277401860","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f92","newstitle":"Dazzling finale of realty+ top 50 marketing minds conclave \u0026 awards 2021","newspublisher":"Business News This Week","newsdate":"2021-08-19T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-277418042","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f93","newstitle":"Dazzling finale of realty+ top 50 marketing minds conclave \u0026 awards 2021","newspublisher":"International News and Views","newsdate":"2021-08-19T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-277342688","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f94","newstitle":"CREDAI launches CREDAI women\u0027s wing chapters in Karnataka","newspublisher":"Magicbricks","newsdate":"2021-08-17T00:00:00.000Z","newslink":"https:\/\/content.magicbricks.com\/property-news\/industry-buzz\/bangalore-industry-buzz\/credai-launches-credai-womens-wing-chapters-in-karnataka\/123512.html","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f96","newstitle":"Marketing For Success : Real Estate Future Roadmap","newspublisher":"Realty Plus","newsdate":"2021-08-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-277004726-841","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f95","newstitle":"CREDAI launches Women\u0027s Wing in Karnataka","newspublisher":"News Barons","newsdate":"2021-08-17T00:00:00.000Z","newslink":"#","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f99","newstitle":"Dazzling Finale Of Realty+ Top 50 Marketing Minds Conclave \u0026 Awards 2021 Concludes","newspublisher":"Everything Experiential","newsdate":"2021-08-13T00:00:00.000Z","newslink":"https:\/\/everythingexperiential.businessworld.in\/article\/Dazzling-Finale-Of-Realty-Top-50-Marketing-Minds-Conclave-Awards-2021-Concludes\/13-08-2021-400551\/","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f97","newstitle":"Realty+ Top 50 Marketing Minds Conclave and Awards 2021 concludes in a dazzling finale","newspublisher":"Exchange4media","newsdate":"2021-08-13T00:00:00.000Z","newslink":"https:\/\/www.exchange4media.com\/announcements-news\/realty-top-50-marketing-minds-conclave-and-awards-2021-concludes-in-a-dazzling-finale-114971.html","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f98","newstitle":"Dazzling finale of Realty+ top 50 Marketing minds Conclave \u0026 Awards 2021","newspublisher":"Realty Plus","newsdate":"2021-08-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276422308-841","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f9b","newstitle":"Oakwood Premier Prestige Bangalore appoints Abdeali Zoomkawala as their Head of F\u0026B Operations and Events","newspublisher":"BW Hotelier","newsdate":"2021-08-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276290038","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f9a","newstitle":"Prestige registers 59% profit for the quarter ended June, 2021","newspublisher":"Financial News India","newsdate":"2021-08-12T00:00:00.000Z","newslink":"#","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f9c","newstitle":"Prestige Estates Projects Q1 Review - All Eyes On Upcoming Mumbai Launches : ICICI Securities","newspublisher":"Bloomberg Quint","newsdate":"2021-08-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276244660","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa0","newstitle":"Prestige registers 59% profit for the quarter ended June, 2021","newspublisher":"The Economic Times","newsdate":"2021-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276142606","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa3","newstitle":"Prestige registers 59% revenue for the quarter ended June, 2021","newspublisher":"The Greater India","newsdate":"2021-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276142820","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa4","newstitle":"Prestige Group expects FY22 sales to beat last year\u0027s; says new project launches on cards","newspublisher":"CNBC TV18","newsdate":"2021-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276090324-841","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f9d","newstitle":"Prestige Estates Q1 profit jumps to Rs 93 cr; co to raise up to Rs 1,000 cr","newspublisher":"The Economic Times","newsdate":"2021-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-275995766","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa2","newstitle":"Prestige registers 59% profit for the quarter ended June, 2021","newspublisher":"Pehal News","newsdate":"2021-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276147196","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f9e","newstitle":"Prestige Estates Projects Ltd Board recommends Final Dividend of Rs. 1.5","newspublisher":"Equity Bulls","newsdate":"2021-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276002168","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f9f","newstitle":"Prestige Estates\u0027 profit jumps to Rs 93 crore in Q1 FY22","newspublisher":"ET Realty","newsdate":"2021-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276041224","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa1","newstitle":"Prestige registers 59% profit for the quarter ended June, 2021","newspublisher":"Business Journal","newsdate":"2021-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276144282","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa5","newstitle":"Prestige Estates\u0027 profit jumps to Rs 93 crore in Q1 FY22, Real Estate News, ET RealEstate","newspublisher":"Infra Buddy","newsdate":"2021-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-276053842-841","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa6","newstitle":"Prestige Estates Projects Ltd Q1FY22 consolidated PAT slides QoQ to Rs. 57.3 crore","newspublisher":"Equity Bulls","newsdate":"2021-08-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-275990530","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa7","newstitle":"Prestige Estates Q1 Profit Jumps to Rs 92.5 Cr; Co to Raise Up to Rs 1,000 Cr","newspublisher":"Latest LY","newsdate":"2021-08-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-275971352-841","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa9","newstitle":"Prestige Group Plans to Invest Rs 3.5k cr in 2 Mumbai Projects - Hyderabad","newspublisher":"The Economic Times","newsdate":"2021-08-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-215158544","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8faa","newstitle":"Prestige Group plans Rs 3,500 cr investment for office space in Mumbai","newspublisher":"Construction World","newsdate":"2021-08-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-275748044","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fa8","newstitle":"Prestige Plans to Invest Rs3.5k cr in 2 Mumbai Projects","newspublisher":"The Economic Times","newsdate":"2021-08-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-215157730","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fab","newstitle":"Prestige Group to invest over Rs 3,500 crore to develop 7 mln sq ft office space in Mumbai","newspublisher":"Nasik News","newsdate":"2021-08-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-275676220","month":"August","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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