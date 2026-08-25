$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
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
     const allNews = [{"_id":"680f32ae88b5a60016601ada","newstitle":"Office leasing in Indias top 7 cities up 15 in Q1 2025","newspublisher":"Economic Times","year":"2025","month":"March","newsdate":"2025-03-28T10:53:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/office-leasing-in-indias-top-7-cities-up-15-in-q1-2025\/articleshow\/119580140.cms?frommdr","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T07:47:58.081Z","updatedAt":"2025-04-28T07:47:58.081Z","__v":0},{"_id":"680f33e2f4aab60017cb4d9a","newstitle":"Savor the New: Exciting Menu Launches Bringing Global Flavors to Your Plate","newspublisher":"News 18","year":"2025","month":"March","newsdate":"2025-03-27T18:50:00.000Z","newslink":"https:\/\/www.news18.com\/lifestyle\/food\/savor-the-new-exciting-menu-launches-bringing-global-flavors-to-your-plate-9277343.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T07:53:06.350Z","updatedAt":"2025-04-28T07:53:06.350Z","__v":0},{"_id":"680f33a6f4aab60017cb4d41","newstitle":"Can boutique hotels in India balance authenticity and profit?","newspublisher":"The ESTD","year":"2025","month":"March","newsdate":"2025-03-24T19:41:00.000Z","newslink":"https:\/\/www.theestablished.com\/culture\/living\/can-boutique-hotels-in-india-balance-authenticity-and-profit","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T07:52:06.792Z","updatedAt":"2025-04-28T07:52:06.792Z","__v":0},{"_id":"680f32f60c5d0c001662bb7c","newstitle":"Hermes Distillery buys 10 luxury apartments for nearly 200 crore in South Mumbai","newspublisher":"Hindustan Times","year":"2025","month":"March","newsdate":"2025-03-21T22:32:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/hermes-distillery-buys-10-luxury-apartments-for-nearly-200-crore-in-south-mumbai-101742543625754.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T07:49:10.927Z","updatedAt":"2025-04-28T07:49:10.927Z","__v":0},{"_id":"680f33516ec18800166ae0f3","newstitle":"Sleep Tourism: The New Trend And Ultimate Escape For Indias Sleep-Deprived Travelers","newspublisher":"The Free Press Journal","year":"2025","month":"March","newsdate":"2025-03-15T19:41:00.000Z","newslink":"https:\/\/www.freepressjournal.in\/lifestyle\/sleep-tourism-the-new-trend-and-ultimate-escape-for-indias-sleep-deprived-travelers","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T07:50:41.856Z","updatedAt":"2025-04-28T07:50:41.856Z","__v":0},{"_id":"680f00c2f4aab60017cafcc8","newstitle":"Women In Power: 20 Leaders Redefining Indias Real Estate  Infrastructure","newspublisher":"Reality NXT","year":"2025","month":"March","newsdate":"2025-03-07T22:42:00.000Z","newslink":"https:\/\/realtynxt.com\/editorial-desk\/2025-03-07\/women-in-power-20-leaders-redefining-indias-real-estate-infrastructure-realtynxt-exclusive","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"864182","updated_by":"Kintali Naveesh","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:14:58.602Z","updatedAt":"2025-04-28T04:21:12.163Z","__v":0},{"_id":"680efffd0c5d0c0016626b6e","newstitle":"Women in real estate: Enduring appeal","newspublisher":"Construction Week","year":"2025","month":"March","newsdate":"2025-03-03T17:12:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/people\/women-in-real-estate","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:11:41.254Z","updatedAt":"2025-04-28T04:11:41.254Z","__v":0}];
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