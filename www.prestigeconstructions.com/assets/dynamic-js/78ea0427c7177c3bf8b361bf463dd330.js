$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2026";
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
     const allNews = [{"_id":"6a266ef8b70c17001eb2af47","newstitle":"Hyderabad real estate: Prestige Group launches 9,500 crore township, homes priced between 1-3 cr","newspublisher":"Hindustan Times","year":"2026","month":"June","newsdate":"2026-06-08T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/hyderabad-real-estate-prestige-group-launches-9-500-crore-township-homes-priced-between-1-3-cr-101775300263687.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:27:52.326Z","updatedAt":"2026-06-08T07:27:52.326Z","__v":0},{"_id":"6a266f8d2efc50002313619c","newstitle":"Prestige Estates, ABIL Group partner for 9,000 crore premium housing project in Mumbais Versova","newspublisher":"Hindustan Times","year":"2026","month":"June","newsdate":"2026-06-08T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-estates-abil-group-partner-for-9-000-crore-premium-housing-project-in-mumbai-s-versova-101775799417089.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T07:30:21.568Z","updatedAt":"2026-06-08T07:30:21.568Z","__v":0},{"_id":"6a2667cb4f66e50020d566ff","newstitle":"Prestige Group Aims Record 36K Cr Pre-Sales in FY27, Strong Home Launchpipeline: CMD","newspublisher":"Outlook Business","year":"2026","month":"June","newsdate":"2026-06-01T12:00:00.000Z","newslink":"https:\/\/www.outlookbusiness.com\/corporate\/prestige-group-aims-record-36k-cr-pre-sales-in-fy27-strong-home-launchpipeline-cmd","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-06-08T06:57:15.347Z","updatedAt":"2026-06-08T06:57:15.347Z","__v":0}];
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