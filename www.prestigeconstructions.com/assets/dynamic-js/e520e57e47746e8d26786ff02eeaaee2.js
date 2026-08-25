$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2022";
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
     const allNews = [{"_id":"65e8488473e8574ceccb8e2e","newstitle":"Prestige Estates Projects acquires 10% stake in Prestige Sterling Infraprojects Pvt Ltd","newspublisher":"Equity Bulls","newsdate":"2022-08-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-367879979-841","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e1a","newstitle":"Prestige Estates lines Up with 15 MSF of new launches","newspublisher":"Torbit Realty","newsdate":"2022-08-24T00:00:00.000Z","newslink":"#","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e1b","newstitle":"Prestige Estates registers quarterly sales of Rs. 30,121 million and Collections of Rs. 21,464 million during Q1 FY23","newspublisher":"Projects Mirror","newsdate":"2022-08-22T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-370068233-841","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e1c","newstitle":"Prestige Estates\u0027 sales target strong","newspublisher":"Business Standard (Hindi)","newsdate":"2022-08-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-222973100","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e1d","newstitle":"Prestige Estates Projects Is Targeting To Sell Properties Worth Ateast Rs 12,000 Cr","newspublisher":"Business World","newsdate":"2022-08-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-369360798","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e1e","newstitle":"Prestige Estates aims to sell properties worth Rs 12,000 crore this fiscal","newspublisher":"ET Realty","newsdate":"2022-08-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-369360315","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e1f","newstitle":"Prestige Estates aims to sell properties worth Rs 12,000 crore this fiscal","newspublisher":"The Economic Times","newsdate":"2022-08-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-369307061-841","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e20","newstitle":"Prestige Estates aims to sell Rs 12K-cr properties this year","newspublisher":"Business Standard","newsdate":"2022-08-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-222970983","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e21","newstitle":"Prestige Estates aims to sell properties worth Rs 12,000 crore this fiscal","newspublisher":"Money Control","newsdate":"2022-08-14T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-369312306","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e22","newstitle":"Mumbai traction aids Prestige Estates stock, debt trend is the key","newspublisher":"Mint","newsdate":"2022-08-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-222940045","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e23","newstitle":"Prestige Estates close to finalising funding platform for land buys","newspublisher":"The Free Press Journal","newsdate":"2022-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-222931254","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e24","newstitle":"Prestige Estates four-fold jump in its net profit at Rs 205 cr for Q1FY23","newspublisher":"Realty n Infra","newsdate":"2022-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-368999993","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e25","newstitle":"Prestige Estates registers sales of Rs 3012 crore, up 310% YoY","newspublisher":"The Economic Times","newsdate":"2022-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-369061724","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e26","newstitle":"Prestige Estates Q1 Review - On Track For Diversifying With Scale; Outlook Remains Upbeat : Dolat Capital","newspublisher":"BQ Prime","newsdate":"2022-08-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-369061543","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e27","newstitle":"Irfan Razack of Prestige Group says Q4 had more launches than Q1","newspublisher":"CNBC TV18","newsdate":"2022-08-10T00:00:00.000Z","newslink":"https:\/\/twitter.com\/cnbctv18news\/status\/1557217125194166272?s=12\u0026t=NBCG51YKCk6s_OjLoxn4Qg","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e28","newstitle":"Prestige Estates registers sales at Rs 30,121 million","newspublisher":"Housing.com","newsdate":"2022-08-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-368948589","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e29","newstitle":"Prestige Estates to launch projects in Q3 as Mumbai market boosts average price realisation","newspublisher":"CNBC TV18","newsdate":"2022-08-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-368909253-841","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e2a","newstitle":"Prestige Group plans to complete 14 mn sq ft of development in FY22-23; to foray into Noida","newspublisher":"Money Control","newsdate":"2022-08-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-368902392-841","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e2b","newstitle":"Prestige Estate Standalone June 2022 Net Sales at Rs 948.80 crore, up 12.7% Y-o-Y","newspublisher":"Money Control","newsdate":"2022-08-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-368897624-841","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e2c","newstitle":"Bengaluru : Relief for Prestige Estates \u0026 Joy Ice Creams in land row","newspublisher":"Times of India","newsdate":"2022-08-07T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-368596931","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e2d","newstitle":"Mumbai : New builder for Rs 3,000 crore redevelopment project","newspublisher":"Times of India","newsdate":"2022-08-02T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-368074501-841","month":"August","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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