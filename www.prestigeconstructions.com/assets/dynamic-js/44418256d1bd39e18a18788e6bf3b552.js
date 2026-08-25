$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2021";
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
     const allNews = [{"_id":"65e8488473e8574ceccb9031","newstitle":"Let\u0027s Talk Business, series Kritika Singh Rawat","newspublisher":"Realty NXT","newsdate":"2021-02-18T00:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v=mSzNS3AXQWU\u0026feature=youtu.be\u0026ab_channel=RealtyNXT","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9030","newstitle":"Lodha Developers 3rd IPO attempt : Group company Macrotech files Rs 2,500-cr issue papers with SEBI","newspublisher":"Business Journal","newsdate":"2021-02-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255383996","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9035","newstitle":"Ascendas India Trust to Acquire commercial property for Rs 506 crore in Hyderabad","newspublisher":"Technology For You Source","newsdate":"2021-02-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255282926","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9033","newstitle":"Prestige Estates\u0027 sales hit a record, but Street\u0027s eyeing Blackstone deal closure","newspublisher":"Mint","newsdate":"2021-02-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255286044","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9036","newstitle":"Prestige group acquires 99% in Ace Realty Ventures","newspublisher":"The Hindu Business Line","newsdate":"2021-02-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255304384","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9032","newstitle":"Prestige Looks to Boost Rental Income to Rs 3k cr","newspublisher":"The Economic Times","newsdate":"2021-02-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-211076872","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9034","newstitle":"Agritech : Buying and managing a farm now made easy with tech","newspublisher":"The Financial Express","newsdate":"2021-02-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255275222","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb903a","newstitle":"Prestige Estate Standalone December 2020 Net Sales at Rs 1,052.50 crore, up 3.22% Y-o-Y","newspublisher":"Money Control","newsdate":"2021-02-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255193266","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9038","newstitle":"Prestige Estates Looks to Raise Rental Income","newspublisher":"The Economic Times","newsdate":"2021-02-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-211055026","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb903b","newstitle":"Prestige Estates Projects - Residential sales see strong uptick - ICICI Securities","newspublisher":"Equity Bulls","newsdate":"2021-02-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255193590","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9039","newstitle":"Ascendas India Trust to Acquire commercial property for Rs 506 crore in Hyderabad","newspublisher":"The Economic Times","newsdate":"2021-02-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255211700","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9037","newstitle":"Prestige Grp, Awfis to invest Rs 40 cr for 6 co-working centres","newspublisher":"Realty n Infra","newsdate":"2021-02-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255241762","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb903c","newstitle":"Listed Realty Players Post Best-ever Quarterly Sales","newspublisher":"Business Standard, Bangalore","newsdate":"2021-02-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-211032308","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb903d","newstitle":"From Prestige to Sobha, listed realty firms post best-ever quarterly sales","newspublisher":"Business Standard","newsdate":"2021-02-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255073018","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9040","newstitle":"From Prestige to Sobha, listed realty firms post best-ever quarterly sales","newspublisher":"Business Standard","newsdate":"2021-02-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-255073018","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9041","newstitle":"Fractional Ownership : The future of commercial real estate investment","newspublisher":"Financial Express","newsdate":"2021-02-12T00:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/money\/fractional-ownership-the-future-of-commercial-real-estate-investment-2194509\/","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb903e","newstitle":"Will be zero debt after Blackstone deal, says Prestige\u0027s Irfan Razack","newspublisher":"CNBC TV18","newsdate":"2021-02-12T00:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/videos\/earnings\/will-be-zero-debt-after-blackstone-deal-says-prestiges-irfan-razack-8292111.htm","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb903f","newstitle":"Prestige Group partners with Awfis to offer flexible office space solutions","newspublisher":"CNBC TV18","newsdate":"2021-02-12T00:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/videos\/business\/prestige-group-partners-with-awfis-to-offer-flexible-office-space-solutions-8296861.htm","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9046","newstitle":"Prestige \u0026 Awfis to set up six co-working spaces with Rs 40 crore investment","newspublisher":"ET Realty","newsdate":"2021-02-11T00:00:00.000Z","newslink":"https:\/\/realty.economictimes.indiatimes.com\/news\/commercial\/prestige-awfis-to-set-up-six-co-working-spaces-with-rs-40-crore-investment\/80825870","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9044","newstitle":"Realty firm Prestige Group partners Awfis to set up 6 co-working centres","newspublisher":"Business Standard","newsdate":"2021-02-11T00:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/article\/companies\/realty-firm-prestige-group-partners-awfis-to-set-up-6-co-working-centres-121021100006_1.html","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9043","newstitle":"Prestige Group partners Awfis to set up 6 co-working centres at Rs 40 cr investment","newspublisher":"Outlook India","newsdate":"2021-02-11T00:00:00.000Z","newslink":"https:\/\/www.outlookindia.com\/","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9045","newstitle":"Prestige Group Partners Awfis To Set Up 6 Co-working Centres At Rs 40 Cr Investment","newspublisher":"News 18","newsdate":"2021-02-11T00:00:00.000Z","newslink":"https:\/\/www.news18.com\/news\/india\/prestige-group-partners-awfis-to-set-up-6-co-working-centres-at-rs-40-cr-investment-3417146.html","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9042","newstitle":"Prestige Group, Awfis Ink Pact for Six Coworking Centres","newspublisher":"The Economic Times","newsdate":"2021-02-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-210938542","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9049","newstitle":"Bengaluru leads the private equity investment chart","newspublisher":"The Economic Times","newsdate":"2021-02-08T00:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/bengaluru-leads-the-private-equity-investment-chart\/articleshow\/80701318.cms","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9048","newstitle":"PropTiger \u0027Right to Home\u0027 expo from today","newspublisher":"The Hans India","newsdate":"2021-02-08T00:00:00.000Z","newslink":"https:\/\/www.thehansindia.com\/business\/proptiger-right-to-home-expo-from-today-670544","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb9047","newstitle":"New homes in town : Two-and-half BHKs","newspublisher":"The Times of India","newsdate":"2021-02-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-254227610","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb904b","newstitle":"Riding High on Growth","newspublisher":"Business Standard","newsdate":"2021-02-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-210753312","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb904a","newstitle":"Buying a house in this year i.e. 2021 is beneficial or harmful","newspublisher":"BBC India","newsdate":"2021-02-03T00:00:00.000Z","newslink":"https:\/\/www.bbc.com\/hindi\/india-55593256","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb904c","newstitle":"Affordable, rental housing push will boost residential demand","newspublisher":"Financial Express","newsdate":"2021-02-02T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-210721250","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb904d","newstitle":"City\u0027s residential market picks up pace","newspublisher":"The Times of India","newsdate":"2021-02-01T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-210701766","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb91cf","newstitle":"Cash-rich Global Pes Eyeing Commercial Assets in India","newspublisher":"The Economic Times","newsdate":"2021-02-01T00:00:00.000Z","newslink":"#","month":"February","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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