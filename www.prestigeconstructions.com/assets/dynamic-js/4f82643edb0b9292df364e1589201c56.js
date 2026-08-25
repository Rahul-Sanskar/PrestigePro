$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
    var givenmonth = "june";

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
     const allNews = [{"_id":"66951213eee1cb0018fd9ee3","newstitle":"Achieving Rs. 100 crore a month revenue gave us wings to soar higher: V Muhammad Ali, Forum Malls","newspublisher":"India Retailing","year":"2024","month":"June","newsdate":"2024-06-20T05:48:00.000Z","newslink":"https:\/\/www.indiaretailing.com\/2024\/06\/20\/achieving-100-crore-a-month-revenue-gave-us-wings-to-soar-higher\/","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-15T12:12:03.446Z","updatedAt":"2024-07-15T12:12:03.446Z","__v":0},{"_id":"6694c73555af620018df7456","newstitle":"Prestige Group planning mid- segment housing projects in Thane, Panvel near Mumbai","newspublisher":"Hindustan Times","year":"2024","month":"June","newsdate":"2024-06-17T05:48:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-planning-mid-segment-housing-projects-in-thane-panvel-near-mumbai-101718596341680.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-15T06:52:37.621Z","updatedAt":"2024-07-15T06:52:37.621Z","__v":0},{"_id":"6694ceb39fee6c0019e61037","newstitle":"Health Is Wealth For Modern-Day Millennial Homebuyers","newspublisher":"Times Property","year":"2024","month":"June","newsdate":"2024-06-15T05:48:00.000Z","newslink":"https:\/\/timesproperty.com\/news\/post\/health-is-wealth-for-modern-day-millennial-homebuyers-blid7734","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-15T07:24:35.560Z","updatedAt":"2024-07-15T07:24:35.560Z","__v":0},{"_id":"6694cc8e82f8c400178e720b","newstitle":"Amid high demand, real estate developers ramp up uber-luxury projects","newspublisher":"Business Standard","year":"2024","month":"June","newsdate":"2024-06-14T05:48:00.000Z","newslink":"https:\/\/www.business-standard.com\/industry\/news\/real-estate-developers-ramp-up-uber-luxury-properties-amid-demand-surge-124061300657_1.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-15T07:15:26.371Z","updatedAt":"2024-07-15T07:15:26.371Z","__v":0},{"_id":"66961d09eee1cb00180eda80","newstitle":"Green retail: Malls leading the way in sustainability","newspublisher":"Economin Times","year":"2024","month":"June","newsdate":"2024-06-05T23:00:00.000Z","newslink":"https:\/\/retail.economictimes.indiatimes.com\/blog\/green-retail-malls-leading-the-way-in-sustainability\/110726562#:~:text=Innovative%20malls%20pride%20themselves%20on,generated%20from%20waste%20management%20systems.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-16T07:11:05.955Z","updatedAt":"2024-07-16T07:11:05.955Z","__v":0},{"_id":"66961dc8e44ea6001840cc7f","newstitle":"World Environment Day 2024 theme: Restore Our Earth","newspublisher":"Housing.com","year":"2024","month":"June","newsdate":"2024-06-05T23:00:00.000Z","newslink":"https:\/\/housing.com\/news\/world-environment-day-2024-theme-restore-our-earth\/#:~:text=This%20year\u0027s%20theme%2C%20\u0027Restore%20Our,repairing%20and%20rejuvenating%20our%20ecosystems.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-16T07:14:16.914Z","updatedAt":"2024-07-16T07:14:16.914Z","__v":0},{"_id":"6694cb28e44ea600182dbb69","newstitle":"Young India Checks Into High Street","newspublisher":"Fortune India","year":"2024","month":"June","newsdate":"2024-06-04T05:48:00.000Z","newslink":"https:\/\/www.fortuneindia.com\/long-reads\/young-india-checks-into-high-street\/117021","pinnews":"1","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-15T07:09:28.126Z","updatedAt":"2024-07-15T07:09:28.126Z","__v":0}];
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