$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2022";
    var givenmonth = "october";

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
     const allNews = [{"_id":"65e8488473e8574ceccb8e0d","newstitle":"Will sustain current growth rate, #H2 will exceed #H1. #Mumbai contribution is at Rs. 1,100-1,200 cr in H1, says Irfan Razack of Prestige Estates","newspublisher":"CNBC TV18","newsdate":"2022-10-20T05:30:00.000Z","newslink":"https:\/\/twitter.com\/CNBCTV18Live\/status\/1582957497975177217?s20tR3CY63cI99i9nWKk4C8LBA","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true","pinnews":"0","updatedAt":"2025-04-28T08:02:17.287Z","updated_by":"Kintali Naveesh","updated_byId":"864182"},{"_id":"65e8488473e8574ceccb8e0a","newstitle":"Prestige Estates sales up 66 percent","newspublisher":"Business Standard (Hindi)","newsdate":"2022-10-20T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-223713709","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e0b","newstitle":"Prestige logs 66% rise In sales during July-Sept","newspublisher":"Financial Express","newsdate":"2022-10-20T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-223708840","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e0c","newstitle":"Prestige logs 66% rise in sales during Jul-Sept","newspublisher":"The Financial Express","newsdate":"2022-10-20T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-375966455","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e0e","newstitle":"Prestige Estates Q2 sales bookings up 66% to Rs 23,511 cr","newspublisher":"Hindustan Times","newsdate":"2022-10-20T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-223714487","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e11","newstitle":"Prestige Estates registers sales of Rs 3511 cr, up 66% yoy for quarter ended September 2022","newspublisher":"Economic Times","newsdate":"2022-10-19T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-375882270","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e10","newstitle":"Prestige Estates clocks decent pre-sales in Q2; shares rise","newspublisher":"Mint","newsdate":"2022-10-19T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-375865490-841","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e13","newstitle":"Prestige Estates Q2 sales bookings rise 66 pc to Rs 3,511 cr; H1 bookings jump over 2-fold","newspublisher":"Economic Times","newsdate":"2022-10-19T00:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/markets\/stocks\/earnings\/prestige-estates-q2-sales-bookings-rise-66-pc-to-rs-3511-cr-h1-bookings-jump-over-2-fold\/articleshow\/94958193.cms","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e0f","newstitle":"Prestige Estates shares climb 4% on stellar Q2 sales","newspublisher":"Business Today","newsdate":"2022-10-19T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-375879905","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e12","newstitle":"Prestige Estates First Half Bookings Jump Over 2-Fold, Q2 Sales Bookings Rise 66%","newspublisher":"Outlook India","newsdate":"2022-10-19T00:00:00.000Z","newslink":"https:\/\/www.outlookindia.com\/business\/prestige-estates-first-half-bookings-jump-over-2-fold-q2-sales-bookings-rise-66--news-230996","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e14","newstitle":"Prestige Estates Q2 sales bookings rise 66 pc; H1 bookings jump over 2-fold","newspublisher":"Business Standard","newsdate":"2022-10-19T00:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/article\/companies\/prestige-estates-q2-sales-bookings-rise-66-pc-h1-bookings-jump-over-2-fold-122101900307_1.html","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e15","newstitle":"Prestige Estates registers quarterly sales of Rs. 35,110 mn and Collections of Rs. 26,029 mn during Q2 FY23","newspublisher":"Equity Bulls","newsdate":"2022-10-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-375817707","month":"October","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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