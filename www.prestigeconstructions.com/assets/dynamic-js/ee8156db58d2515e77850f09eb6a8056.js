$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2023";
    var givenmonth = "september";

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
     const allNews = [{"_id":"662b5e3015f3ab001992f9fd","newstitle":"WFH \u0026 affordability make 3BHKs grow in popularity","newspublisher":"The Times of India","year":"2023","month":"September","newsdate":"2023-09-25T12:00:00.000Z","newslink":"https:\/\/timesofindia.indiatimes.com\/city\/bengaluru\/wfh-affordability-make-3bhks-grow-in-popularity\/articleshow\/103918107.cms","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T07:56:32.192Z","updatedAt":"2024-04-26T07:56:32.192Z","__v":0},{"_id":"662b6061a8bdfa0018026da1","newstitle":"Growing trend of wellness-oriented design in residential real estate","newspublisher":"The Financial Express","year":"2023","month":"September","newsdate":"2023-09-25T12:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/money\/growing-trend-of-wellness-oriented-design-in-residential-real-estate-3254069\/","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T08:05:53.437Z","updatedAt":"2024-04-26T08:05:53.437Z","__v":0},{"_id":"65e8488473e8574ceccb8d8e","newstitle":"Prestige Estates Projects Appoints Dr. Ravindra Mehta As Additional Director In The Category Of Non-Executive Independent Director","newspublisher":"The Free Press Journal","newsdate":"2023-09-23T18:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-426013079","month":"September","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true","pinnews":"0","updatedAt":"2024-05-03T11:13:39.033Z","updated_by":"Preoss Admin","updated_byId":"864160"},{"_id":"65e8488473e8574ceccb8d8f","newstitle":"Prestige Group eyes Rs 16,000 crore of residential sales in FY24","newspublisher":"The Hindu Business Line","newsdate":"2023-09-14T00:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-group-eyes-rs-16000-crore-of-residential-sales-in-fy24-11363571.html","month":"September","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"662b5cd346da300018c9bd16","newstitle":"We foresee double-digit growth in sales bookings in next 2-3 years","newspublisher":"The Financial Express","year":"2023","month":"September","newsdate":"2023-09-13T12:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/business\/industry-we-foresee-double-digit-growth-in-sales-bookings-in-next-2-3-years-3241493\/","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T07:50:43.971Z","updatedAt":"2024-04-26T07:50:43.971Z","__v":0},{"_id":"65e8488473e8574ceccb8d93","newstitle":"Kochra Realty Takes Over Stressed Rs 700 Crore Residential Project In Mumbai","newspublisher":"Realty NXT","newsdate":"2023-09-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-425152622","month":"September","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8d92","newstitle":"Prestige Group eyes Delhi\u0027s prime property","newspublisher":"Construction World","newsdate":"2023-09-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-425157684","month":"September","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8d90","newstitle":"Prestige Estate Projects - Debt Levels Remain The Key Monitorable : ICICI Securities","newspublisher":"BQ Prime","newsdate":"2023-09-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-425168355","month":"September","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8d91","newstitle":"Prestige Estates lines up malls of 9 msf leasable area","newspublisher":"Business Journal","newsdate":"2023-09-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-425222352","month":"September","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"662b745715f3ab00199338f0","newstitle":"Return to work from office spurs demand, says Prestige Estates","newspublisher":"Informist","year":"2023","month":"September","newsdate":"2023-09-12T12:00:00.000Z","newslink":"https:\/\/www.informistmedia.com\/return-to-work-from-office-spurs-space-demand-says-prestige-estates\/","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:31:03.043Z","updatedAt":"2024-04-26T09:31:03.043Z","__v":0},{"_id":"662b75caa8bdfa001802aa04","newstitle":"43% of employees face challenges adjusting to a new manager: What should they do?","newspublisher":"Money Control","year":"2023","month":"September","newsdate":"2023-09-12T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/43-of-employees-face-challenges-adjusting-to-a-new-manager-what-should-they-do-11403151.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T09:37:14.782Z","updatedAt":"2024-04-26T09:37:14.782Z","__v":0},{"_id":"65e8488473e8574ceccb8d95","newstitle":"Prestige Group looks to partner TDI in Lutyens\u0027 Delhi","newspublisher":"The Economic Times","newsdate":"2023-09-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-425003122","month":"September","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8d94","newstitle":"Prestige Looks to Partner TDI for Lutyens\u0027 Delhi Project","newspublisher":"The Economic Times","newsdate":"2023-09-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-233102598","month":"September","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8d96","newstitle":"Proposed tax on international card purchases may drive sale of luxury brands in India","newspublisher":"ET Brand Equity","newsdate":"2023-09-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-424912902","month":"September","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"662b5da546da300018c9becb","newstitle":"Bigger realtors gain ground","newspublisher":"The Financial Express","year":"2023","month":"September","newsdate":"2023-09-10T12:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/business\/industry-bigger-realtors-gain-ground-3239546\/","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T07:54:13.567Z","updatedAt":"2024-04-26T07:54:13.567Z","__v":0}];
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