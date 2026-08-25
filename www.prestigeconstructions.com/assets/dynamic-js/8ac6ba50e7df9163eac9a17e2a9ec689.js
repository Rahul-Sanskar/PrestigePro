$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2023";
    var givenmonth = "may";

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
     const allNews = [{"_id":"65e8488473e8574ceccb8da7","newstitle":"Prestige Estates Buys DB Group\u2019s Balance Stake in BKC \u0026 South Mumbai Projects","newspublisher":"Realty Plus","newsdate":"2023-05-31T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415069839","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8da8","newstitle":"Prestige Group acquires Prestige (BKC) and Turf bstate Joint Venture for Rs 1176 crore","newspublisher":"The Free Press Journal","newsdate":"2023-05-31T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-231819648","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8da9","newstitle":"Prestige Buys Out DB Group\u0027s Stake in 2 Mumbai Projects","newspublisher":"The Economic Times","newsdate":"2023-05-31T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-231819819","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8daa","newstitle":"Prestige Estates Projects inks pact to increase stake in Prestige (BKC) Realtors","newspublisher":"Citrus Interactive","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-414998426","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dab","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Chhattisgarh Today","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001710","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dac","newstitle":"Prestige Estates buys out DB Realty\u0027s stake in two projects in Mumbai","newspublisher":"Business Journal","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-414998669","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dad","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"The Print","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415002367","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dae","newstitle":"Business News | Prestige Estates Buys out DB Group\u0027s Remaining Stake in Two Mumbai Projects","newspublisher":"Latest LY","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001335","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8daf","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"ANI News","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001960","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db0","newstitle":"Stake raised. Prestige Estates buys out DB Realty\u0027s stake in two projects in Mumbai","newspublisher":"The Hindu Business Line","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-414992839","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db1","newstitle":"Prestige Group acquires balance stake in two projects from DB Group for Rs 1,176 crore","newspublisher":"ET Realty","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415024421","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db2","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Kashmir Newsline","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415003762","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db3","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Karnataka Live","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001645","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db4","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Kolkata Sun","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415007356","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db5","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Lokmat Times","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001472","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db6","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Maharashtra Samachar","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001803","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db7","newstitle":"Prestige Estates buys out DB Groups remaining stake in two Mumbai projects","newspublisher":"New Kerala","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415038346","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db8","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Northeast Times","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001977","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8db9","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Odisha Post","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415002622","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dba","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Punjab Live","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001680","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dbb","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Rajasthan Ki Khabar","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001895","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dbc","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"South India News","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001956","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dbd","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Telangana Journal","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415002015","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dbe","newstitle":"Prestige Group acquires Prestige (BKC) and Turf Estate Joint Venture for Rs 1176 cr","newspublisher":"The Free Press Journal","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-414986194","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dbf","newstitle":"Prestige Group buys out DB Group from two upscale JV projects in Mumbai in Rs 1,176-crore deal","newspublisher":"Topology Pro","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415019882","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc0","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Vanakkam Tamil Nadu","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415001854","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc1","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Web India 123","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415006921","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc2","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"West Bengal Khabar","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415002217","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc3","newstitle":"Prestige Estates buys out DB Group\u0027s remaining stake in two Mumbai projects","newspublisher":"Zee5","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415014854","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc4","newstitle":"Prestige Group buys out DB Group from two upscale JV projects in Mumbai in Rs 1,176-crore deal","newspublisher":"Money Control","newsdate":"2023-05-30T00:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/prestige-group-buys-out-db-group-from-two-upscale-jv-projects-in-mumbai-in-rs-1176-crore-deal-10701951.html","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc5","newstitle":"Yulu Partners With Prestige Group For Green Mobility, Opens Exclusive Yulu Zones At Prestige Tech Park Campus","newspublisher":"Silicon Village","newsdate":"2023-05-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-413871523","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc6","newstitle":"Prestige Group set to rebuild malls business","newspublisher":"ET Brand Equity","newsdate":"2023-05-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-413711343","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc7","newstitle":"Prestige Group to widen mall portfolio with 8 new properties in 4 years : Report","newspublisher":"Money Control","newsdate":"2023-05-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-413703523","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc8","newstitle":"Prestige Group Revives Mall Business With Extensive Rebuilding Plans","newspublisher":"Realty NXT","newsdate":"2023-05-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-413720307","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e3d","newstitle":"Prestige Group to widen mall portfolio with 8 new properties in 4 years : Report","newspublisher":"Dailyhunt","newsdate":"2023-05-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-413743396","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dc9","newstitle":"Luxurious sunset on a boat at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa","newspublisher":"Business World","newsdate":"2023-05-06T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-412693897","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dca","newstitle":"Luxurious sunset on a boat at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa","newspublisher":"BW Hotelier","newsdate":"2023-05-06T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-412693868","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dcb","newstitle":"Experience a Luxurious Sunset on a Boat with Curated Gastronomy at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa","newspublisher":"Media Bulletins","newsdate":"2023-05-06T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-412691312","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dcc","newstitle":"Experience a Luxurious Sunset on a Boat with Curated Gastronomy at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa","newspublisher":"Business News Week","newsdate":"2023-05-06T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-412690784","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dcd","newstitle":"Experience a Luxurious Sunset on a Boat with Curated Gastronomy at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa","newspublisher":"Biz News Desk","newsdate":"2023-05-06T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-412690940","month":"May","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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