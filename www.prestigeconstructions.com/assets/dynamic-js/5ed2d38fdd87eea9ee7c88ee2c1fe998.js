$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
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
     const allNews = [{"_id":"679325a848d2b000168854ad","newstitle":"Can prestige group conquer mount 25,000 ?","newspublisher":"Mint","year":"2024","month":"August","newsdate":"2024-08-09T12:00:00.000Z","newslink":"https:\/\/www.pressreader.com\/india\/mint-ahmedabad\/20240809\/282123526801692?srsltid=AfmBOoq0JSei26PSFm-1j-cPFpl4vw4myo4fbHDNVsBh4uy2WrcIzrvR","pinnews":"0","newstatus":"0","created_byId":"779519","created_by":"Mahesh D","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-01-24T05:31:20.140Z","updatedAt":"2025-01-24T05:31:20.140Z","__v":0},{"_id":"679323d2f628240016055793","newstitle":"We Have A Strong Pipeline \u0026 The Rest Of The Year Will See Strong Growth","newspublisher":"CNBC TV18","year":"2024","month":"August","newsdate":"2024-08-01T12:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v=L8ss3qYkj38","pinnews":"0","newstatus":"0","created_byId":"779519","created_by":"Mahesh D","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-01-24T05:23:30.123Z","updatedAt":"2025-01-24T05:23:30.123Z","__v":0},{"_id":"6793266213eb8f0016b9e1b2","newstitle":"Prestige Estates Eyeing Four Project Launches Across Mumbai and Bengaluru in Q2 FY25","newspublisher":"Hindustan Times","year":"2024","month":"August","newsdate":"2024-08-01T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-estates-eyeing-four-project-launches-across-mumbai-and-bengaluru-in-q2-fy25-101722522616580.html","pinnews":"0","newstatus":"0","created_byId":"779519","created_by":"Mahesh D","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-01-24T05:34:26.276Z","updatedAt":"2025-01-24T05:34:26.276Z","__v":0},{"_id":"679326f6bf0a5c0016341ecf","newstitle":"Prestige Estate Consolidated June 2024 Net Sales at Rs 1,862.10 crore, up 10.78% Y-o-Y","newspublisher":"Money Control","year":"2024","month":"August","newsdate":"2024-08-01T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/earnings\/prestige-estate-consolidated-june-2024-net-sales-at-rs-1862-10-crore-up-10-78-y-o-y-12785351.html","pinnews":"0","newstatus":"0","created_byId":"779519","created_by":"Mahesh D","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-01-24T05:36:54.785Z","updatedAt":"2025-01-24T05:36:54.785Z","__v":0},{"_id":"6793365761e2ff0017ed3cfd","newstitle":"Foreign retailers keen to have a piece of the Indian luxury pie","newspublisher":"The Economic Times","year":"2024","month":"August","newsdate":"2024-08-01T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/foreign-retailers-keen-to-have-a-piece-of-the-indian-luxury-pie\/articleshow\/112176871.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"779519","created_by":"Mahesh D","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-01-24T06:42:31.288Z","updatedAt":"2025-01-24T06:42:31.288Z","__v":0}];
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