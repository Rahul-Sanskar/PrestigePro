$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2023";
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
     const allNews = [{"_id":"65e8488473e8574ceccb8ddb","newstitle":"Prestige\u0027s plans fail to build cheer","newspublisher":"Mint","newsdate":"2023-02-23T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-230633904-841","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ddc","newstitle":"Prestige Estates Analyst Meet Update","newspublisher":"Newzz","newsdate":"2023-02-22T00:00:00.000Z","newslink":"https:\/\/newzz.in\/business\/prestige-estates-analyst-meet-update\/2023\/02\/22\/","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ddd","newstitle":"Prestige Estates aims to double overall residential sales in three years","newspublisher":"CNBC TV18","newsdate":"2023-02-22T00:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/business\/companies\/prestige-estates-double-residential-sales-fy26-bengaluru-mumbai-expansion-lease-debt-16000341.htm","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dde","newstitle":"Prestige Estates up 6% after global brokerages retain \u0027buy\u0027, see up to 33% upside","newspublisher":"Money Control","newsdate":"2023-02-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-404840735","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ddf","newstitle":"Prestige Estates\u0027 pre-sales outlook upbeat, but watch out for debt","newspublisher":"Mint","newsdate":"2023-02-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-404846578","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de0","newstitle":"Prestige Estates up 6% after global brokerages retain #39;buy#39;, see up to 33% upside","newspublisher":"Topology Pro","newsdate":"2023-02-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-404840700","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de1","newstitle":"#Q3WithBQ | #Prestige Estate Projects\u0027 revenue and net profit rises 74% and 75% year-on-year respectively. Is this sustainable?","newspublisher":"BQ Prime","newsdate":"2023-02-15T00:00:00.000Z","newslink":"https:\/\/twitter.com\/bqprime\/status\/1625738030282838017?s=20\u0026t=s_ok6oYCe65MGR42JE-2fg","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de2","newstitle":"EY announces 11 finalists for the 24th EOY awards","newspublisher":"The Financial Express","newsdate":"2023-02-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-404050442","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de3","newstitle":"Prestige Ivy League New Launch Project in Hyderabad","newspublisher":"Smart Property in India","newsdate":"2023-02-09T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-404072933","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de4","newstitle":"EY announces 11 finalists for the 24th EY Entrepreneur of the Year Awards","newspublisher":"Business Standard","newsdate":"2023-02-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-404018423","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de5","newstitle":"EY reveals 12 finalists for 2022 Entrepreneur of the Year Awards in India","newspublisher":"The Economic Times","newsdate":"2023-02-08T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-404043205","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de6","newstitle":"Prestige Estates Projects Limited | Operational Update - FY2022-23 : 9M and Q3","newspublisher":"Rashtra Times","newsdate":"2023-02-05T00:00:00.000Z","newslink":"#","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de7","newstitle":"Prestige Estates set to launch projects in Hyderabad","newspublisher":"The Hans India","newsdate":"2023-02-04T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-403529069","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de8","newstitle":"Prestige estates gives operational updates","newspublisher":"Surya (Telugu)","newsdate":"2023-02-04T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-230409986","month":"February","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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