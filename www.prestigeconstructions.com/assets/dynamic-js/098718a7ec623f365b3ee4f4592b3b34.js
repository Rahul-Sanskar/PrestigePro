$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2023";
    var givenmonth = "january";

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
     const allNews = [{"_id":"65e8488473e8574ceccb8dea","newstitle":"Bengaluru\u0027s billionaire towers : Apartment prices in UB City start at Rs 30 crore, rentals at Rs 10 lakh a month","newspublisher":"Money Control","newsdate":"2023-01-28T00:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/bengalurus-billionaire-towers-apartment-prices-in-ub-city-start-at-rs-30-crore-rentals-at-rs-10-lakh-a-month-9950261.html","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8de9","newstitle":"Prestige Srihari Khoday, Centre for Performing Arts opens at Bengaluru","newspublisher":"Trinity Mirror","newsdate":"2023-01-28T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-230300689","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8deb","newstitle":"Prestige Srihari Khoday, Centre for Performing Arts opens at Bengaluru","newspublisher":"Trinity Mirror","newsdate":"2023-01-26T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-230300689","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dec","newstitle":"City welcomes Prestige Srihari Khoday Centre for Performing Arts","newspublisher":"The HANS India","newsdate":"2023-01-26T00:00:00.000Z","newslink":"https:\/\/epaper.thehansindia.com\/Home\/ArticleView?eid=3\u0026edate=26\/01\/2023\u0026pgid=105415","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8ded","newstitle":"Prestige Srihari Khoday, Centre for Performing Arts opens at Bengaluru","newspublisher":"Trinity Mirror","newsdate":"2023-01-26T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-230300689","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8def","newstitle":"Bengaluru City Opens Its Door To Prestige Srihari Khoday, Centre For Performing Arts","newspublisher":"Silicon Village","newsdate":"2023-01-25T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-402481553","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8df0","newstitle":"Bengaluru City opens its door to Prestige Srihari Khoday, Centre for Performing Arts","newspublisher":"This Week India","newsdate":"2023-01-25T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-402526428","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8dee","newstitle":"Prestige Group Brings Centre for Performing Arts to Bengaluru","newspublisher":"Realty Plus","newsdate":"2023-01-25T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-402429844","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8df3","newstitle":"Bengaluru city opens its door to Prestige Srihari Khoday, Centre for Performing Arts","newspublisher":"Construction Week","newsdate":"2023-01-24T00:00:00.000Z","newslink":"#","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8df1","newstitle":"Culture Gets Another Boost - The Prestige Srihari Khoday Centre for Performing Arts","newspublisher":"Explocity Bangalore","newsdate":"2023-01-24T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-402400948","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8df2","newstitle":"Bengaluru City opens its door to Prestige Srihari Khoday, Centre for Performing Arts","newspublisher":"Corporate News For U","newsdate":"2023-01-24T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-402418735","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8df4","newstitle":"Prestige Group plans to build and operate its own shopping centres, says more malls in the pipeline","newspublisher":"CNBC TV18","newsdate":"2023-01-04T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-400328510","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8df5","newstitle":"Prestige Estates\u0027 Irfan Razack Discusses Booking Trends, Launch Pipeline | Bazaar Corporate Radar","newspublisher":"MSN India","newsdate":"2023-01-04T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-400305546-841","month":"January","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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