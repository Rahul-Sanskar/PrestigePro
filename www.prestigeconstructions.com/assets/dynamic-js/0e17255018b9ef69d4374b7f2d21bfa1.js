$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2022";
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
     const allNews = [{"_id":"65e8488473e8574ceccb8ea0","newstitle":"Prestige Estates to finalise real estate fund structure by FY22-end","newspublisher":"The Free Press Journal","newsdate":"2022-02-22T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-220854240","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ea1","newstitle":"The $8.5 billion TVS Group splits to grow : What\u0027s chan-ged structure-wise?","newspublisher":"Business Standard","newsdate":"2022-02-22T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354859050","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ea2","newstitle":"Blackstone Asset Deal \u0026 Real Estate Sector Outlook | Irfan Razack, Prestige Group","newspublisher":"Times Now","newsdate":"2022-02-21T00:00:00.000Z","newslink":"https:\/\/www.timesnownews.com\/videos\/et-now\/companies\/blackstone-asset-deal-real-estate-sector-outlook-irfan-razack-prestige-group\/122086","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ea3","newstitle":"TVS group splits to grow","newspublisher":"Business Standard","newsdate":"2022-02-21T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-220857432","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ea4","newstitle":"JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa appoints Ronan Fearon","newspublisher":"FNB News","newsdate":"2022-02-17T00:00:00.000Z","newslink":"http:\/\/fnbnews.com\/Top-News\/jw-marriott-bengaluru-prestige-golfshire-resort--spa-appoints-ronan-fearon-66373","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ea5","newstitle":"Prestige Group to set up investment funds worth USD 500 million","newspublisher":"Projects Today","newsdate":"2022-02-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354449609","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ea6","newstitle":"Prestige Group to set up investment funds worth $500 million","newspublisher":"Mytimesnow","newsdate":"2022-02-14T00:00:00.000Z","newslink":"https:\/\/www.mytimesnow.com\/","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ea7","newstitle":"Mumbai Launches Key for Bengaluru based Prestige Estates","newspublisher":"Realty Plus","newsdate":"2022-02-14T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354308272-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ea8","newstitle":"Prestige Group to set up investment funds worth $500 million","newspublisher":"The Economic Times","newsdate":"2022-02-14T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354353074-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ea9","newstitle":"Prestige Group to set up investment funds worth $500 million","newspublisher":"ET Realty","newsdate":"2022-02-14T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354376355-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ec8","newstitle":"Prestige Group to set up investment funds worth $500 million, Real Estate News, ET RealEstate","newspublisher":"Funbox World","newsdate":"2022-02-14T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eaa","newstitle":"Irfan Razack Of Prestige Group Shares His Thoughts On The Firm\u0027s Q3 | Bazaar Open Exchange","newspublisher":"MSN India","newsdate":"2022-02-12T00:00:00.000Z","newslink":"https:\/\/www.msn.com\/en-in","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eab","newstitle":"Prestige Estates Q3 Profit Up 59 Pc to Rs 93 Crore","newspublisher":"Latestly","newsdate":"2022-02-11T00:00:00.000Z","newslink":"https:\/\/www.latestly.com\/agency-news\/latest-news-prestige-estates-q3-profit-up-59-pc-to-rs-93-crore-3346131.html","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eac","newstitle":"Prestige Estates Project reports 13% rise in Q3 consolidated net profit","newspublisher":"Citrus Interactive","newsdate":"2022-02-10T00:00:00.000Z","newslink":"http:\/\/www.citrusinteractive.in\/News\/OpenNewsContent.aspx?SecId=7\u0026SubSecID=15\u0026NewsID=892514","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ead","newstitle":"Prestige Estates Q3 Consolidated net profit up 59% to 93 Crore","newspublisher":"Topology Pro","newsdate":"2022-02-10T00:00:00.000Z","newslink":"http:\/\/www.citrusinteractive.in\/News\/OpenNewsContent.aspx?SecId=7\u0026SubSecID=15\u0026NewsID=892514","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eae","newstitle":"Prestige Estate Standalone December 2021 Net Sales at Rs 996.80 crore, down 5.29% Y-o-Y","newspublisher":"Money Control","newsdate":"2022-02-10T00:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/earnings\/prestige-estate-standalone-december-2021-net-sales-at-rs-996-80-crore-down-5-29-y-o-y-8070981.html","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eaf","newstitle":"Prestige Group set to buy TVS Anna Salai property for Rs 600 crore","newspublisher":"Times of India","newsdate":"2022-02-09T00:00:00.000Z","newslink":"https:\/\/timesofindia.indiatimes.com\/city\/chennai\/prestige-group-set-to-buy-tvs-anna-salai-property-for-600cr\/articleshow\/89440025.cms","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb0","newstitle":"Ronan Fearon appointed as the General Manager at soon to launch JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa, India","newspublisher":"Mumbai News Express","newsdate":"2022-02-09T00:00:00.000Z","newslink":"http:\/\/mumbainewsexpress.com\/ronan-fearon-appointed-as-the-general-manager-at-soon-to-launch-jw-marriott-bengaluru-prestige-golfshire-resort-spa-india\/","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb1","newstitle":"Prestige Group set to buy TVS\u0027 Anna Salai property for Rs 600 crore","newspublisher":"ET Realty","newsdate":"2022-02-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354057526-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb2","newstitle":"Prestige Group is set to pay Rs 600 crore for TVS\u0027 Anna Salai property.","newspublisher":"Realty Quarter","newsdate":"2022-02-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354074072-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb3","newstitle":"TVS group\u0027s property on Anna Salai up for sale","newspublisher":"The Hindu","newsdate":"2022-02-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354041062-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb4","newstitle":"Prestige Group set to buy TVS\u0027 Anna Salai property for Rs600cr","newspublisher":"The Times of India","newsdate":"2022-02-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-220690343","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb5","newstitle":"Prestige Estates Q3 profit up 59 pc to Rs 93 crore","newspublisher":"The Outreach","newsdate":"2022-02-09T00:00:00.000Z","newslink":"https:\/\/theoutreach.in\/prestige-estates-q3-profit-up-59-pc-to-rs-93-crore\/","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb6","newstitle":"Prestige Estates Q3 profit up 59 pc to Rs 93 crore","newspublisher":"DT Next","newsdate":"2022-02-09T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb7","newstitle":"Prestige Estates Q3 profit up 59 pc to Rs 93 crore","newspublisher":"Devdiscourse","newsdate":"2022-02-09T00:00:00.000Z","newslink":"https:\/\/www.devdiscourse.com\/article\/business\/1916411-prestige-estates-q3-profit-up-59-pc-to-rs-93-crore","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb8","newstitle":"Prestige Estates Projects Ltd Q3FY22 consolidated PAT at Rs. 93.3 crores","newspublisher":"Equity Bulls","newsdate":"2022-02-09T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eb9","newstitle":"Prestige Estates Q3 results : Net profit up 59% to Rs 93 cr, total income declines to Rs 1,396 cr","newspublisher":"The Free Press Journal","newsdate":"2022-02-09T00:00:00.000Z","newslink":"https:\/\/www.freepressjournal.in\/business\/prestige-estates-q3-results-net-profit-up-59-to-rs-93-cr-total-income-declines-to-rs-1396-cr","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8eba","newstitle":"Prestige Estates Q3 consolidated net profit up 59% to Rs 93 crore","newspublisher":"Business Standard","newsdate":"2022-02-09T00:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/article\/companies\/prestige-estates-q3-consolidated-net-profit-up-59-to-rs-93-crore-122020901777_1.html","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ebb","newstitle":"Prestige is all set to significantly expand its footprint in consolidating market","newspublisher":"Business India","newsdate":"2022-02-08T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ebc","newstitle":"Ronan Fearon appointed as the General Manager at soon to launch JW Marriott Bengaluru Prestige Golfshire Resort and Spa, India","newspublisher":"Hospitality Biz India","newsdate":"2022-02-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-353995823-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ebd","newstitle":"Ronan Fearon named as GM at soon to launch JW Marriott property","newspublisher":"Adgully","newsdate":"2022-02-08T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ebe","newstitle":"Ronan Fearon appointed as the General Manager at soon to launch JW Marriott Bengaluru Prestige Golfshire Resort and Spa, India","newspublisher":"Hospibuz","newsdate":"2022-02-08T00:00:00.000Z","newslink":"https:\/\/hospibuz.com\/ronan-fearon-appointed-as-the-general-manager-at-soon-to-launch-jw-marriott-bengaluru-prestige-golfshire-resort-and-spa-india\/","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ebf","newstitle":"Ronan Fearon was appointed as the General Manager at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa, India","newspublisher":"NRI News 24x7","newsdate":"2022-02-08T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ec0","newstitle":"Ronan Fearon Appointed As The General Manager At Soon To Launch Jw Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa, India","newspublisher":"FM Live","newsdate":"2022-02-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354007308-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ec1","newstitle":"Ronan Fearon Appointed As The General Manager At Soon To Launch Jw Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa, India","newspublisher":"APN News","newsdate":"2022-02-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354007433-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ec2","newstitle":"Ronan Fearon appointed as the General Manager at soon to launch JW Marriott Bengaluru Prestige Golfshire Resort and Spa, India","newspublisher":"Today\u0027s Traveller","newsdate":"2022-02-08T00:00:00.000Z","newslink":"https:\/\/www.todaystraveller.net\/ronan-fearon-prestige-golfshire-resort\/","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ec3","newstitle":"Iconic TVS Property in Chennai\u0027s Anna Salai Up For Sale","newspublisher":"Realty Plus","newsdate":"2022-02-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-354015306-841","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ec4","newstitle":"Budget to upswing property buying : Prestige Group","newspublisher":"The Hans India","newsdate":"2022-02-07T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ec5","newstitle":"Onto the Growth Trajectory","newspublisher":"Financial Express, New Delhi","newsdate":"2022-02-04T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ec6","newstitle":"Prestige Group on the Union Budget 2022","newspublisher":"Free Press, Gujarat","newsdate":"2022-02-03T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ec7","newstitle":"A Bid to Boost Pvt Investment","newspublisher":"Financial Express, Hyderabad","newsdate":"2022-02-02T00:00:00.000Z","newslink":"#","month":"February","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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