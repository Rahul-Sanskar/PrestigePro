$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2022";
    var givenmonth = "march";

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
     const allNews = [{"_id":"65e8488473e8574ceccb8e88","newstitle":"Cement \u0026 Steel Prices A Cause Of Concern | Irfan Razack, Prestige Group","newspublisher":"ET Now","newsdate":"2022-03-31T00:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v=Tl7IbArGr14\u0026ab_channel=ETNOW","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e87","newstitle":"CPPIB to infuse Rs 26.5 bn in JV with RMZ to develop office spaces","newspublisher":"Construction World","newsdate":"2022-03-31T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-357423363","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e86","newstitle":"Marriott International opens its 9th property in India","newspublisher":"Bureau","newsdate":"2022-03-31T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221238380","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e8a","newstitle":"Neeraj Rawoot appointed executive chef at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa","newspublisher":"Economic Times","newsdate":"2022-03-30T00:00:00.000Z","newslink":"https:\/\/hospitality.economictimes.indiatimes.com\/news\/hotels\/neeraj-rawoot-appointed-executive-chef-at-jw-marriott-bengaluru-prestige-golfshire-resort-spa\/90533369","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e89","newstitle":"Prestige completes 8 projects in Bengaluru","newspublisher":"News Today","newsdate":"2022-03-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-357303926-841","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e8b","newstitle":"Neeraj Rawoot appointed Executive Chef at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa","newspublisher":"Dailyhunt","newsdate":"2022-03-29T00:00:00.000Z","newslink":"https:\/\/m.dailyhunt.in\/news\/india\/english\/business+world-epaper-bizworld\/neeraj+rawoot+appointed+executive+chef+at+jw+marriott+bengaluru+prestige+golfshire+resort+spa-newsid-n372232780?s=a\u0026uu=0x2186735973dec6f0\u0026ss=wsp","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e8c","newstitle":"Striking the right note","newspublisher":"The New Indian Express","newsdate":"2022-03-28T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221263099","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e8e","newstitle":"LetsVenture-backed Saarthi raises pre-Series A from Prestige family office","newspublisher":"VC Circle","newsdate":"2022-03-28T00:00:00.000Z","newslink":"https:\/\/www.vccircle.com\/letsventure-backed-saarthi-raises-pre-series-a-from-prestige-family-office","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e90","newstitle":"Prestige Group completes multiple project in Bengaluru","newspublisher":"Construction Week","newsdate":"2022-03-28T00:00:00.000Z","newslink":"#","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e8d","newstitle":"Residential real estate sector witnessing sharp recovery, says Prestige CMD","newspublisher":"The Hindu Business Line","newsdate":"2022-03-28T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221265378","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e8f","newstitle":"Marriott Bonvoy Golf","newspublisher":"India Golf Digest","newsdate":"2022-03-28T00:00:00.000Z","newslink":"#","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e91","newstitle":"Prestige Estates Projects to sell 51% in Prestige RMZ Star Tech","newspublisher":"Equity Bulls","newsdate":"2022-03-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-357079873-841","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e92","newstitle":"Residential real estate sector witnessing sharp recovery : Prestige CMD","newspublisher":"The Hindu Business Line","newsdate":"2022-03-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-357105829","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e95","newstitle":"Very sure we will hit Rs 10,000-cr topline by end of FY22","newspublisher":"Financial Express","newsdate":"2022-03-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221040586","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e94","newstitle":"Very sure we will hit Rs 10,000-crore top-line by FY22-end : Prestige Group CMD Irfan Razack","newspublisher":"Business Journal","newsdate":"2022-03-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-355812421","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e93","newstitle":"Very sure we will hit Rs 10,000-crore top-line by FY22-end : Prestige Group CMD Irfan Razack","newspublisher":"New On News","newsdate":"2022-03-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-355811929","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e9e","newstitle":"New lease of life for commercial realty","newspublisher":"Business Standard","newsdate":"2022-03-07T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221022479","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e96","newstitle":"Prestige launches premium project Green Gables","newspublisher":"The Hans India","newsdate":"2022-03-05T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-220992313","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e98","newstitle":"Commercial real estate here to stay but hotels to see pick-up last : Prestige Estates","newspublisher":"CNBC TV18","newsdate":"2022-03-03T00:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/real-estate\/commercial-real-estate-here-to-stay-but-hotels-to-see-pick-up-last-prestige-estates-12685562.htm","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e9f","newstitle":"Canada\u0027s CPPIB to invest $350 mn in JV with Bengaluru realty firm RMZ Corp","newspublisher":"VC Circle","newsdate":"2022-03-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-355455227-841","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e97","newstitle":"Prestige Group Launches Prestige Green Gables in Bengaluru","newspublisher":"Realty Plus","newsdate":"2022-03-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-355404678","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e99","newstitle":"Irfan Razack Discusses Prestige Estates Selling 51% Stake In Prestige RMZ Star Tech | CNBC-TV18","newspublisher":"MSN India","newsdate":"2022-03-03T00:00:00.000Z","newslink":"https:\/\/www.msn.com\/en-in","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e9a","newstitle":"CPPIB, RMZ form second JV for office space; target $2.5 bn portfolio","newspublisher":"The Capital Quest","newsdate":"2022-03-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-355459618-841","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e9b","newstitle":"CPPIB picks up prestige stake in RMZ JV for Rs. 1,800 crore","newspublisher":"The Economic Times","newsdate":"2022-03-02T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-355316265-841","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e9c","newstitle":"Prestige Estates Projects to sell 51% stake in Prestige RMZ Star Tech","newspublisher":"Business Standard","newsdate":"2022-03-01T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-355303865-841","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e9d","newstitle":"CPP Investments, RMZ Corp form second office JV","newspublisher":"Mint","newsdate":"2022-03-01T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-355291804-841","month":"March","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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