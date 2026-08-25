$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2022";
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
     const allNews = [{"_id":"65e8488473e8574ceccb8dfb","newstitle":"Only way to develop Mumbai is through redevelopment, says Irfan Razack","newspublisher":"CNBC TV18","newsdate":"2022-11-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-380044759","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dfa","newstitle":"Prestige Group\u0027s Irfan Razack Assesses The Impact Of Rising Interest Rates On The Realty Sector","newspublisher":"MSN India","newsdate":"2022-11-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-380004752-841","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dfc","newstitle":"Prestige Estates Projects Reports 55.19% Increase in Qtly Net Profit","newspublisher":"Realty Plus","newsdate":"2022-11-14T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378417094","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dfd","newstitle":"Prestige Estates Projects Reports 55.19% Increase in Qtly Net Profit","newspublisher":"The Economic Times","newsdate":"2022-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378272906-841","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dfe","newstitle":"Prestige Estates Projects Limited Q2 Performance Update - FY2022-23","newspublisher":"Power of Voice","newsdate":"2022-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-224003330-841","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dff","newstitle":"Decoding Q2 Performance Of Prestige | Irfan Razack, Prestige Group | ET Now","newspublisher":"Times Now","newsdate":"2022-11-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378159055","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e00","newstitle":"Prestige Estates Q2 profit jumps 55% to Rs 149 crore","newspublisher":"The Financial Express","newsdate":"2022-11-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378146863","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e02","newstitle":"Q2 Review : After A Strong Quarter, Can Prestige Estates Duplicate Performance In Q3?","newspublisher":"BQ Prime","newsdate":"2022-11-10T00:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v=VRcrTkxTH-E\u0026ab_channel=BQPrime","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e01","newstitle":"Prestige Group Makes New Project Announcements across South India","newspublisher":"Realty Plus","newsdate":"2022-11-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378027016","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e06","newstitle":"Prestige Group likely to exceed Rs 12,000 crore pre-sales target this year : Irfan Razack","newspublisher":"The Economic Times","newsdate":"2022-11-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378150104","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e04","newstitle":"Prestige Estates Projects consolidated net profit rises 79.69% in the September 2022 quarter","newspublisher":"Business Standard","newsdate":"2022-11-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378054610","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e07","newstitle":"Prestige Group set to hand over five projects across Bengaluru, Kerala by November","newspublisher":"Money Control","newsdate":"2022-11-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378111973-841","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e05","newstitle":"Prestige Estates\u0027 net profit up 54.63% in Q2 FY23","newspublisher":"ET Realty","newsdate":"2022-11-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378054265","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e03","newstitle":"#Q2WithAwaaz | Prestige Estate\u0027s profit increased by 80% in the second quarter. Joining us to discuss these results and future growth is Irfan Razzaq, CMD of #PrestigeGroup .","newspublisher":"CNBC Awaaz","newsdate":"2022-11-10T00:00:00.000Z","newslink":"https:\/\/twitter.com\/cnbc_awaaz\/status\/1590600307242721280?s=48\u0026t=dGAbpFbrR_QZi3u532MTQw","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e08","newstitle":"Prestige Estates Q2 Profit Rises 80 Pc to Rs 141 Crore","newspublisher":"Latest LY","newsdate":"2022-11-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378016773","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e09","newstitle":"Prestige Estates Q2 net up 80% to Rs 141 cr, income rises to Rs 1,474 cr","newspublisher":"Business Standard","newsdate":"2022-11-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-378020960","month":"November","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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