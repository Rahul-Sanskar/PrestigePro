$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2022";
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
     const allNews = [{"_id":"65e8488473e8574ceccb8e3e","newstitle":"Much more than just a resort and convention hotel","newspublisher":"ET - Hospitality World","newsdate":"2022-05-31T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-362212591-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e3f","newstitle":"Prestige Group CMD Irfan Razack In Conversation With Zee Business","newspublisher":"Zee Business","newsdate":"2022-05-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361945881","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e40","newstitle":"Prestige Estates Projects Ltd Q4 FY2022 consolidated PAT at Rs. 939.3 crores","newspublisher":"Equity Bulls","newsdate":"2022-05-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361925825","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e45","newstitle":"Prestige Estates sales up 90% in FY22","newspublisher":"The Hans India","newsdate":"2022-05-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-222025104","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e41","newstitle":"Mumbaikars have given us a thumbs-up | Irfan Razack, Prestige Group","newspublisher":"Times Now","newsdate":"2022-05-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361973752","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e43","newstitle":"Prestige Estates Projects Limited | Performance Update- FY2021-22 : Q4","newspublisher":"Business News Week","newsdate":"2022-05-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361893218-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e42","newstitle":"Prestige Estates Projects gets nod to raise Rs 1000 crore through NCDs","newspublisher":"Shares Bazaar","newsdate":"2022-05-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361912684-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e46","newstitle":"Prestige Estate Consolidated March 2022 Net Sales at Rs 2,400.30 crore, up 5.83% Y-o-Y","newspublisher":"Money Control","newsdate":"2022-05-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361916056","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e44","newstitle":"Prestige Estates Projects Limited | Performance Update FY2021-22 : Q4, 12M","newspublisher":"Mumbai News Express","newsdate":"2022-05-27T00:00:00.000Z","newslink":"http:\/\/mumbainewsexpress.com\/prestige-estates-projects-limited-performance-update-fy2021-22-q4-12m\/","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e47","newstitle":"Prestige Estates Projects consolidated net profit declines 64.72% in the March 2022 quarter","newspublisher":"Business Standard","newsdate":"2022-05-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361913219-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e48","newstitle":"Prestige Estates registers highest ever sales of Rs 10,382.2 crore, up 90% YoY","newspublisher":"The Economic Times","newsdate":"2022-05-26T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361838662-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e4a","newstitle":"Prestige Group to pump Rs 7,500 cr to gain foothold in Mumbai","newspublisher":"DT Next","newsdate":"2022-05-24T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361604492-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e4b","newstitle":"Prestige Group to Develop 16 Million Sq Ft in Mumbai","newspublisher":"Realty Plus","newsdate":"2022-05-24T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361600876-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e49","newstitle":"Prestige Group invests Rs 7,500 cr to develop 16 mn sq ft properties","newspublisher":"Construction World","newsdate":"2022-05-24T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361635494","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e4f","newstitle":"Prestige Group to pump at least Rs 7,500 cr to gain foothold in Mumbai","newspublisher":"Business Standard","newsdate":"2022-05-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361518850","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e52","newstitle":"Prestige Grp Plans to Invest Over Rs 7,500 cr in Mumbai","newspublisher":"The Economic Times","newsdate":"2022-05-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221958902","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e4c","newstitle":"Prestige Group to pump Rs 7,500 cr in Mumbai","newspublisher":"The Pioneer","newsdate":"2022-05-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221955119","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e51","newstitle":"Prestige Group to invest Rs 7,500 crore to develop 16 million sq ft in Mumbai","newspublisher":"The Economic Times","newsdate":"2022-05-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361486988-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e4d","newstitle":"Prestige Group to pump at least Rs 7,500 crore in Mumbai","newspublisher":"The Free Press Journal","newsdate":"2022-05-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221959220","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e50","newstitle":"Prestige Group to pump in at least Rs 7,500 cr in Mumbai","newspublisher":"Business Standard","newsdate":"2022-05-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221956572","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e4e","newstitle":"Prestige to pump at least Rs 7500 Cr","newspublisher":"Mint","newsdate":"2022-05-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221957775","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e53","newstitle":"Prestige Group to Pump At least Rs 7,500 Crore to Gain Foothold in Mumbai","newspublisher":"Equity Pandit","newsdate":"2022-05-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361628337-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e56","newstitle":"Prestige Group to pump at least Rs 7,500 cr to gain foothold in Mumbai","newspublisher":"Money Control","newsdate":"2022-05-22T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361500042","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e54","newstitle":"Prestige Group to Pump at Least Rs 7,500 Cr to Gain Foothold in Mumbai","newspublisher":"Latest LY","newsdate":"2022-05-22T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361495031","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e55","newstitle":"Prestige Group to invest Rs 7,500 crore to develop 16 million sq ft in Mumbai","newspublisher":"ET Realty","newsdate":"2022-05-22T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361487383-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e57","newstitle":"Prestige Estates\u0027 sales exceed DLE, Godrej and Macrotech in FY22","newspublisher":"The New Indian Express","newsdate":"2022-05-20T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221922809","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e58","newstitle":"Prestige Estates\u0027 sales exceed DLF, Godrej and Macrotech in FY22","newspublisher":"The Morning Standard","newsdate":"2022-05-20T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221923443","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e59","newstitle":"Prestige Group bullish on Mumbai as its next key market with the launch of multiple residential and commercial projects","newspublisher":"Global Prime News","newsdate":"2022-05-19T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361241275-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e5f","newstitle":"DLF\u0027s sales bookings jumps over two-fold to Rs 7,273 crore during FY-22","newspublisher":"Financial Express","newsdate":"2022-05-18T00:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/business\/industry-dlfs-sales-bookings-jumps-over-two-fold-to-rs-7273-crore-during-fy22-2529536\/","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e5d","newstitle":"Prestige Group bullish on Mumbai as its next key market with the launch of multiple projects","newspublisher":"The Spuzz","newsdate":"2022-05-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361183486-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e5a","newstitle":"Prestige Group bullish on Mumbai as its next key market with the launch of multiple projects","newspublisher":"Financial Express","newsdate":"2022-05-18T00:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/money\/prestige-group-bullish-on-mumbai-as-its-next-key-market-with-the-launch-of-multiple-projects-2528927\/","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e5b","newstitle":"Prestige Group bullish on Mumbai as its next key market with the launch of multiple projects","newspublisher":"IQ Stock Market","newsdate":"2022-05-18T00:00:00.000Z","newslink":"#","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e5c","newstitle":"Prestige Group bullish on Mumbai as its next key market","newspublisher":"Instant Publish Blog","newsdate":"2022-05-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-361186627-841","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e5e","newstitle":"DLF\u0027s sales bookings jump over two-fold to Rs 7,273 cr during FY\u002722","newspublisher":"Deccan Herald","newsdate":"2022-05-18T00:00:00.000Z","newslink":"https:\/\/www.deccanherald.com\/business\/dlfs-sales-bookings-jump-over-two-fold-to-rs-7273-cr-during-fy22-1110360.html","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e63","newstitle":"Prestige Group to revolutionize the retail experience with Forum","newspublisher":"Vijaya Dwaja","newsdate":"2022-05-04T00:00:00.000Z","newslink":"#","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e64","newstitle":"Prestige Group to revolutionize the retail experience with Forum","newspublisher":"Vishwavaradi","newsdate":"2022-05-04T00:00:00.000Z","newslink":"#","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e66","newstitle":"Prestige Group to revolutionize the retail experience with Forum","newspublisher":"Dinakural","newsdate":"2022-05-04T00:00:00.000Z","newslink":"#","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e61","newstitle":"Prestige Group to revolutionize the retail experience with Forum","newspublisher":"Sanje Prabha","newsdate":"2022-05-04T00:00:00.000Z","newslink":"#","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e62","newstitle":"Prestige Group to revolutionize the retail experience with Forum","newspublisher":"Southern Mail","newsdate":"2022-05-04T00:00:00.000Z","newslink":"#","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e60","newstitle":"Prestige Group to revolutionize the retail experience with Forum","newspublisher":"Bharatha Sarathi","newsdate":"2022-05-04T00:00:00.000Z","newslink":"#","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e65","newstitle":"Prestige Group to revolutionize the retail experience with Forum","newspublisher":"Maalai Bhoomi","newsdate":"2022-05-04T00:00:00.000Z","newslink":"#","month":"May","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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