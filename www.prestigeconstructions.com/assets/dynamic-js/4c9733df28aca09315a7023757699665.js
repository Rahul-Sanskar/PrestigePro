$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
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
     const allNews = [{"_id":"680f03b2f4aab60017cb0179","newstitle":"Prestige Groups new TVC shows why leaving homes is so difficult","newspublisher":"Afaqs","year":"2024","month":"December","newsdate":"2024-12-31T12:39:00.000Z","newslink":"https:\/\/www.afaqs.com\/news\/advertising\/prestige-groups-new-tvc-shows-why-leaving-homes-is-so-difficult-8677051","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T04:27:30.921Z","updatedAt":"2025-04-28T04:27:30.921Z","__v":0},{"_id":"680ef813dbed880016897654","newstitle":"On The Go: Bengaluru Real Estate More Expensive Than Mumbai","newspublisher":"ET Now","year":"2024","month":"December","newsdate":"2024-12-23T17:30:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v64k70hAxIp0","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"864182","updated_by":"Kintali Naveesh","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"false","createdAt":"2025-04-28T03:37:55.812Z","updatedAt":"2025-04-28T03:39:01.309Z","__v":0},{"_id":"680ef8cf6ff3e50015bafe22","newstitle":"Interview  Confident of meeting sales guidance for FY25:  Prestige Estates Chairman Irfan Razack","newspublisher":"Financial Express","year":"2024","month":"December","newsdate":"2024-12-16T16:30:00.000Z","newslink":"https:\/\/www.financialexpress.com\/business\/industry\/interview-confident-of-meeting-sales-guidance-for-fy25-nbspprestige-estates-chairman-irfan-razack\/3692268\/","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T03:41:03.809Z","updatedAt":"2025-04-28T03:41:03.809Z","__v":0},{"_id":"680efaad0c5d0c0016626433","newstitle":"Pan-India developers chase Mumbais redevelopment, SRA opportunities","newspublisher":"Mint","year":"2024","month":"December","newsdate":"2024-12-10T16:15:00.000Z","newslink":"https:\/\/www.livemint.com\/industry\/infrastructure\/panindia-developers-chase-mumbai-s-redevelopment-sra-opportunities-11733665063253.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"864182","updated_by":"Kintali Naveesh","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T03:49:01.937Z","updatedAt":"2025-04-28T08:00:15.975Z","__v":0},{"_id":"680efb37a75c550016738c94","newstitle":"Prestige Estates targets Rs 10,000 crore annual revenue from Mumbai, Pune markets","newspublisher":"Money Control","year":"2024","month":"December","newsdate":"2024-12-09T22:27:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-estates-targets-rs-10-000-crore-annual-revenue-from-mumbai-pune-12885860.html","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-28T03:51:19.482Z","updatedAt":"2025-04-28T03:51:19.482Z","__v":0},{"_id":"6801fa8ebf6dcf0017b7f22c","newstitle":"How Irfan Razack built a 6-billion fortune with Prestige Estates Projects","newspublisher":"Forbes","year":"2024","month":"December","newsdate":"2024-12-06T11:50:00.000Z","newslink":"https:\/\/www.forbesindia.com\/article\/billionaires\/how-irfan-razack-built-a-6billion-fortune-with-prestige-estates-projects\/94789\/1","pinnews":"0","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-04-18T07:09:02.948Z","updatedAt":"2025-04-18T07:09:02.948Z","__v":0}];
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