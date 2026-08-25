$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
    var givenmonth = "december";

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
     const allNews = [{"_id":"6981815db80f78001eaa332d","newstitle":"Credai felicitates Irfan Razack","newspublisher":"The Times of India","year":"2025","month":"December","newsdate":"2025-12-31T12:00:00.000Z","newslink":"https:\/\/timesofindia.indiatimes.com\/city\/bengaluru\/credai-felicitates-irfan-razack\/articleshow\/126258677.cms","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T05:02:21.334Z","updatedAt":"2026-02-03T05:02:21.334Z","__v":0},{"_id":"69818125084b63001e1702e4","newstitle":"CREDAI National Honours Prestige Group Chairman \u0026 MD Irfan Razack with Lifetime Achievement Award","newspublisher":"APN News","year":"2025","month":"December","newsdate":"2025-12-22T12:00:00.000Z","newslink":"https:\/\/www.apnnews.com\/credai-national-honours-prestige-group-chairman-md-irfan-razack-with-lifetime-achievement-award\/","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T05:01:25.917Z","updatedAt":"2026-02-03T05:01:25.917Z","__v":0},{"_id":"69817cb608198a001e35ca68","newstitle":"Prestige Group delivers over 5000 homes, plots at The Prestige City","newspublisher":"Construction Week","year":"2025","month":"December","newsdate":"2025-12-15T12:00:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/projects-tenders\/prestige-group-4","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:42:30.351Z","updatedAt":"2026-02-03T04:42:30.351Z","__v":0},{"_id":"6981805a180518002123dd42","newstitle":"What is prompting southern developers to enter northern markets?","newspublisher":"New Indian Express","year":"2025","month":"December","newsdate":"2025-12-14T12:00:00.000Z","newslink":"https:\/\/www.newindianexpress.com\/business\/2025\/Dec\/14\/what-is-prompting-southern-developers-to-enter-northern-markets","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:58:02.875Z","updatedAt":"2026-02-03T04:58:02.875Z","__v":0},{"_id":"6981801180a3e2001f577cc4","newstitle":"EXCLUSIVE: Rate cut to supercharge economy and home demand, says Irfan Razack of Prestige Group","newspublisher":"ET Now","year":"2025","month":"December","newsdate":"2025-12-08T12:00:00.000Z","newslink":"https:\/\/www.etnownews.com\/economy\/exclusive-rate-cut-to-supercharge-economy-and-home-demand-says-irfan-razack-of-prestige-group-article-153262631","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2026-02-03T04:56:49.865Z","updatedAt":"2026-02-03T04:56:49.865Z","__v":0}];
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