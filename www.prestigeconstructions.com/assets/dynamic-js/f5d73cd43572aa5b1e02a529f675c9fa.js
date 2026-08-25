$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
    var givenmonth = "may";

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
     const allNews = [{"_id":"669603cb7006ba0018e1b5dc","newstitle":"Luxury is a small percentage of any developer\u0027s portfolio: Tariq Ahmed","newspublisher":"Business Standard","year":"2024","month":"May","newsdate":"2024-05-31T17:30:00.000Z","newslink":"https:\/\/www.business-standard.com\/specials\/supplements\/luxury-is-a-small-percentage-of-any-developer-s-portfolio-tariq-ahmed-124053001863_1.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-16T05:23:23.915Z","updatedAt":"2024-07-16T05:23:23.915Z","__v":0},{"_id":"66960288eec7c700187c613a","newstitle":"Prestige Estates set for a tightrope walk","newspublisher":"Live Mint","year":"2024","month":"May","newsdate":"2024-05-30T17:30:00.000Z","newslink":"https:\/\/www.livemint.com\/market\/mark-to-market\/prestige-estates-set-for-tightrope-walk-11717060447891.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-16T05:18:00.726Z","updatedAt":"2024-07-16T05:18:00.726Z","__v":0},{"_id":"6695fef055af620018f0c17a","newstitle":"Best is yet to come; for current year, looking at 25% growth over last year: Irfan Razack, Prestige Group","newspublisher":"Economic Times","year":"2024","month":"May","newsdate":"2024-05-29T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/markets\/expert-view\/best-is-yet-to-come-for-current-year-looking-at-25-growth-over-last-years-numbers-irfan-razack-prestige-group\/articleshow\/110527164.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-16T05:02:40.428Z","updatedAt":"2024-07-16T05:02:40.428Z","__v":0},{"_id":"6695ffb57da48f00185cd8cc","newstitle":"Prestige Estates Q4 Results: Profit down 70% to Rs 140 crore","newspublisher":"ZEE Bisiness","year":"2024","month":"May","newsdate":"2024-05-29T12:00:00.000Z","newslink":"https:\/\/www.zeebiz.com\/companies\/news-prestige-estates-q4-results-profit-down-70-to-rs-140-crore-292649","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-16T05:05:57.576Z","updatedAt":"2024-07-16T05:05:57.576Z","__v":0},{"_id":"66961b9eeee1cb00180ec212","newstitle":"High-value homes drive Hyderabad residential market","newspublisher":"The Economic Times","year":"2024","month":"May","newsdate":"2024-05-23T23:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/high-value-homes-drive-hyderabad-residential-market\/articleshow\/110210981.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"864163","updated_by":"Syam S G","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-16T07:05:02.677Z","updatedAt":"2024-07-16T07:08:51.076Z","__v":0},{"_id":"6694bd4655af620018df4445","newstitle":"Will These Six Homebuying Trends Drive The Rest Of 2024?","newspublisher":"Times Prpperty","year":"2024","month":"May","newsdate":"2024-05-12T00:18:00.000Z","newslink":"https:\/\/timesproperty.com\/news\/post\/will-these-six-homebuying-trends-drive-the-rest-of-2024-blid7217","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-15T06:10:14.527Z","updatedAt":"2024-07-15T06:10:14.527Z","__v":0},{"_id":"6694c27d9fee6c0019e5d900","newstitle":"Prestige Group sells Rs 1,300 cr worth luxury homes at new project in South Mumbai","newspublisher":"Money Control","year":"2024","month":"May","newsdate":"2024-05-01T05:48:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-group-sells-rs-1300-cr-worth-luxury-homes-at-new-project-in-south-mumbai-12712419.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Syam S G","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-07-15T06:32:29.905Z","updatedAt":"2024-07-15T06:32:29.905Z","__v":0}];
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