$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
    var givenmonth = "february";

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
     const allNews = [{"_id":"662f7bd46e95cd00188182c6","newstitle":"Storyboard18 Visionaries: Top marketers falicitated - Part 3","newspublisher":"Storyboard18","year":"2024","month":"February","newsdate":"2024-02-29T12:00:00.000Z","newslink":"https:\/\/www.storyboard18.com\/quantum-brief\/storyboard18-visionaries-top-marketers-felicitated-part-3-25187.htm","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:52:04.504Z","updatedAt":"2024-04-29T10:52:04.504Z","__v":0},{"_id":"662f764715f3ab0019a9b3eb","newstitle":"Mumbai real estate market: Here\u0027s why listed realtors are making a beeline for redevelopment projects","newspublisher":"Hindustan Times","year":"2024","month":"February","newsdate":"2024-02-20T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/mumbai-real-estate-market-here-s-why-listed-realtors-are-making-a-beeline-for-redevelopment-projects-101708400722227.html#:~:text=Ritesh%20Mehta%2C%20Senior%20Director%20and,banks%20are%20available%20to%20them.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:28:23.601Z","updatedAt":"2024-04-29T10:28:23.601Z","__v":0},{"_id":"662f750a46da300018e05d85","newstitle":"Prestige Estates Q3 results: Profit rises marginally to Rs 165 crore","newspublisher":"Press Trust of India","year":"2024","month":"February","newsdate":"2024-02-15T12:00:00.000Z","newslink":"https:\/\/www.ptinews.com\/story\/business\/prestige-estates-q3-profit-rises-marginally-to-rs-165-crore\/1290301","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:23:06.856Z","updatedAt":"2024-04-29T10:23:06.856Z","__v":0},{"_id":"662f76c26e95cd00188156b2","newstitle":"Prestige achieves milstone of delivering 300 projects across 10+ cities","newspublisher":"Realty Plus","year":"2024","month":"February","newsdate":"2024-02-12T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/news-views\/prestige-achieves-milestone-of-delivering-300-projects-across-10-cities-113973.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:30:26.265Z","updatedAt":"2024-04-29T10:30:26.265Z","__v":0},{"_id":"662f747515f3ab0019a9a8f9","newstitle":"Are branded apartments worth the premium that you pay?","newspublisher":"Mint","year":"2024","month":"February","newsdate":"2024-02-07T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/money\/are-branded-apartments-worth-the-premium-that-you-pay-11707145984035.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:20:37.098Z","updatedAt":"2024-04-29T10:20:37.098Z","__v":0}];
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