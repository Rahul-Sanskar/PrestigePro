$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2023";
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
     const allNews = [{"_id":"65e8488473e8574ceccb8da5","newstitle":"Prestige Estates acquires balance stake in 2 projects from DB Group","newspublisher":"Sawdust Online","newsdate":"2023-06-06T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415187077","month":"June","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8da6","newstitle":"Prestige Group, one of the leading real estate developers in the country, has a legacy of over three decades in real estate development","newspublisher":"Indian News \u0026 Times","newsdate":"2023-06-06T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-415601118","month":"June","year":"2023","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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