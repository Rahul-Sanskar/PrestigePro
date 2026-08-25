$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
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
     const allNews = [{"_id":"663075e846da300018edc8e5","newstitle":"Prestige Group acquires 62.5 acres of land in Indirapuram Extension, NCR","newspublisher":"Economic Times Prime","year":"2024","month":"March","newsdate":"2024-03-21T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-group-acquires-62-5-acres-of-land-in-indirapuram-extension-ncr\/articleshow\/108686356.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-30T04:39:04.100Z","updatedAt":"2024-04-30T04:39:04.100Z","__v":0},{"_id":"6630767346da300018edcb40","newstitle":"Prestige Group expands footprint in Delhi-NCR; acquires 62.5 acres in Ghaziabad for a township project","newspublisher":"Hindustan Times","year":"2024","month":"March","newsdate":"2024-03-21T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-expands-footprint-in-delhi-ncr-acquires-62-5-acres-in-ghaziabad-for-a-township-project-101711040552504.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-30T04:41:23.172Z","updatedAt":"2024-04-30T04:41:23.172Z","__v":0},{"_id":"66307758a8bdfa001826861d","newstitle":"The Prestige City - The best selling township brand from Prestige Group","newspublisher":"Construction Week","year":"2024","month":"March","newsdate":"2024-03-19T12:00:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/business\/the-prestige-city-the-best-selling-township-brand-from-prestige-group","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-30T04:45:12.149Z","updatedAt":"2024-04-30T04:45:12.149Z","__v":0},{"_id":"663076f046da300018edccea","newstitle":"Prestige Group\u0027s township brand \u0027The Prestige City\u0027 in Hyderabad, Bangaluru \u0026 Mumbai","newspublisher":"Realty Plus","year":"2024","month":"March","newsdate":"2024-03-12T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/press-room\/prestige-groups-township-brand-the-prestige-city-in-hyderabad-bengaluru-mumbai-114364.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-30T04:43:28.045Z","updatedAt":"2024-04-30T04:43:28.045Z","__v":0},{"_id":"662f775d46da300018e06a46","newstitle":"Prestige group\u0027s Rs 800 crore luxury development set to transform Whitefield, Bangalore","newspublisher":"Construction Week","year":"2024","month":"March","newsdate":"2024-03-07T12:00:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/projects-tenders\/prestige-groups-rs-800-crore-luxury-development-set-to-transform-whitefield-bangalore#:~:text=Prestige%20Group\u0027s%20Rs%20800%20crore%20luxury%20development%20set%20to%20transform%20Whitefield%2C%20Bangalore,-Is%20designed%20to\u0026text=Prestige%20Group%2C%20a%20real%20estate,Whitefield%2C%20Bangalore%20%E2%80%93%20Prestige%20Somerville.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:33:01.456Z","updatedAt":"2024-04-29T10:33:01.456Z","__v":0},{"_id":"662f77dc46da300018e06c6e","newstitle":"Prestige Estates launches residential project in Whitefield, Bangalore","newspublisher":"Business Line","year":"2024","month":"March","newsdate":"2024-03-07T12:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/markets\/stock-markets\/prestige-estates-launches-residential-project-in-whitefield-bengaluru\/article67923351.ece","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:35:08.768Z","updatedAt":"2024-04-29T10:35:08.768Z","__v":0},{"_id":"662f7a94a8bdfa0018193635","newstitle":"Our focus will be Delhi-NCR Market in FY25","newspublisher":"The New Indian express","year":"2024","month":"March","newsdate":"2024-03-03T12:00:00.000Z","newslink":"https:\/\/www.newindianexpress.com\/business\/2024\/Mar\/03\/our-focus-will-be-delhi-ncr-market-in-fy25","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:46:44.263Z","updatedAt":"2024-04-29T10:46:44.263Z","__v":0},{"_id":"662f7aea6e95cd001881744e","newstitle":"Prestige Group to develop 9 mm sq ft of retail space, expand malls business into Mumbai and Delhi-NCR","newspublisher":"Money Control","year":"2024","month":"March","newsdate":"2024-03-03T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-group-to-develop-9-mn-sq-ft-of-retail-space-expand-malls-business-into-mumbai-and-delhi-ncr-12259551.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:48:10.449Z","updatedAt":"2024-04-29T10:48:10.449Z","__v":0}];
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