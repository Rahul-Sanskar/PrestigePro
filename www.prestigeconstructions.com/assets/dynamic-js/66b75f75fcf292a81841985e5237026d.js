$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2024";
    var givenmonth = "january";

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
     const allNews = [{"_id":"662f734aa8bdfa001819062a","newstitle":"Prestige Group completes \u20b91,000-cr residential project in Hyderabad","newspublisher":"The Hindu Business Line","year":"2024","month":"January","newsdate":"2024-01-31T12:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/news\/real-estate\/prestige-group-completes-1000-cr-residential-project-in-hyderabad\/article67796272.ece#:~:text=Prestige%20Group%20has%20announced%20that,crore%20to%20%E2%82%B92.30%20crore.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:15:38.807Z","updatedAt":"2024-04-29T10:15:38.807Z","__v":0},{"_id":"662f739a6e95cd00188144b5","newstitle":"Prestige Group Delivers 1000 Cr Project Before Scheduled Delivery","newspublisher":"Realty Plus","year":"2024","month":"January","newsdate":"2024-01-31T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/news-views\/prestige-group-delivers-1000-cr-project-before-scheduled-delivery-113838.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:16:58.106Z","updatedAt":"2024-04-29T10:16:58.106Z","__v":0},{"_id":"662f73f046da300018e0573b","newstitle":"Prestige Group Delivers a Rs 1000 Cr Project in Hyderabad Before Time","newspublisher":"Construction Week","year":"2024","month":"January","newsdate":"2024-01-31T12:00:00.000Z","newslink":"https:\/\/www.constructionweekonline.in\/projects-tenders\/prestige-group-delivers-a-rs-1000-cr-project-in-hyderabad-before-time#:~:text=Prestige%20Group%20delivers%20a%20Rs%201000%20cr%20project%20in%20Hyderabad%20before%20time,-Is%20a%20short\u0026text=Prestige%20Group%20has%20announced%20the,in%20the%20heart%20of%20Hyderabad.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-29T10:18:24.763Z","updatedAt":"2024-04-29T10:18:24.763Z","__v":0},{"_id":"662b9c0f6e95cd00186b444f","newstitle":"Prestige Group to add 10 million sq ft office space in Bengaluru in 2 years","newspublisher":"Money Control","year":"2024","month":"January","newsdate":"2024-01-24T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-group-to-add-10-million-sq-ft-of-office-space-in-bengaluru-in-2-years-12112131.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:20:31.700Z","updatedAt":"2024-04-26T12:20:31.700Z","__v":0},{"_id":"662b9ce76e95cd00186b4696","newstitle":"Home truths: Luxury real estate looks set to retain its sheen this year","newspublisher":"Business Standard","year":"2024","month":"January","newsdate":"2024-01-23T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/industry\/news\/home-truths-luxury-real-estate-looks-set-to-retain-its-sheen-this-year-124012300709_1.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:24:07.276Z","updatedAt":"2024-04-26T12:24:07.276Z","__v":0},{"_id":"662b9c6315f3ab001993af21","newstitle":"BNY Mellon Inks Lease Deal for Pune Office with Prestige","newspublisher":"The Economic Times","year":"2024","month":"January","newsdate":"2024-01-22T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/bny-mellon-inks-lease-deal-for-pune-office-with-prestige-group\/articleshow\/107035280.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:21:55.448Z","updatedAt":"2024-04-26T12:21:55.448Z","__v":0},{"_id":"662b9ca546da300018ca6e8d","newstitle":"Realtors deploy AI, plug into AR, VR tech to boost sales","newspublisher":"Business Standard","year":"2024","month":"January","newsdate":"2024-01-15T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/industry\/news\/real-estate-players-deploy-ai-plug-into-ar-and-vr-tech-to-boost-sales-124011500755_1.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:23:01.468Z","updatedAt":"2024-04-26T12:23:01.468Z","__v":0},{"_id":"662b9bc646da300018ca6be2","newstitle":"Resurgence of Indian real estate: A strong showing in 2023 sets the stage for 2024","newspublisher":"Money Control","year":"2024","month":"January","newsdate":"2024-01-10T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/resurgence-of-indian-real-estate-a-strong-showing-in-2023-sets-the-stage-for-2024-12024411.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:19:18.552Z","updatedAt":"2024-04-26T12:19:18.552Z","__v":0},{"_id":"662b9d51a8bdfa0018031fef","newstitle":"Indian residential real estate market expected to maintain strong growth in 2024 despite election disruptions","newspublisher":"Economic Times Prime","year":"2024","month":"January","newsdate":"2024-01-10T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/indian-residential-real-estate-market-expected-to-maintain-strong-growth-in-2024-despite-election-disruptions\/articleshow\/106688709.cms?from=mdr","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:25:53.215Z","updatedAt":"2024-04-26T12:25:53.215Z","__v":0},{"_id":"662b9b4c6e95cd00186b417d","newstitle":"Prestige Estate\u0027s sales booking jump over two-fold to Rs 5,326 crore in Q3 FY24","newspublisher":"Economic Times","year":"2024","month":"January","newsdate":"2024-01-09T12:00:00.000Z","newslink":"https:\/\/realty.economictimes.indiatimes.com\/news\/industry\/prestige-estates-sales-bookings-jump-over-two-fold-to-rs-5326-crore-in-q3-fy24\/106676442#:~:text=Industry-,Prestige%20Estates\u0027%20sales%20bookings%20jump%20over%20two%2Dfold%20to%20Rs,cent%20year%2Don%2Dyear.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:17:16.035Z","updatedAt":"2024-04-26T12:17:16.035Z","__v":0},{"_id":"662b9db915f3ab001993b353","newstitle":"Prestige Estates Q3 FY24 sales at Rs 53,261 million, up 111% on-year, collections at Rs 31,163 million","newspublisher":"The Financial Express","year":"2024","month":"January","newsdate":"2024-01-09T12:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/business\/industry-prestige-estates-q3fy24-sales-at-rs-53261-million-up-111-on-year-collections-at-rs-31163-million-3359774\/#:~:text=During%20the%20Q3FY24%2C%20the%20Group,by%2036%20per%20cent%20yoy).\u0026text=Prestige%20Group%20announced%20that%20it,Rs%2021%2C040%20crore%20for%20FY24.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:27:37.345Z","updatedAt":"2024-04-26T12:27:37.345Z","__v":0},{"_id":"662b9a5146da300018ca674a","newstitle":"Are branded apartments worth the premium that you pay? ","newspublisher":"Mint","year":"2024","month":"January","newsdate":"2024-01-06T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/money\/are-branded-apartments-worth-the-premium-that-you-pay-11707145984035.html","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:13:05.828Z","updatedAt":"2024-04-26T12:13:05.828Z","__v":0},{"_id":"662b9a8b6e95cd00186b3e69","newstitle":"The return of the NRI homebuyer","newspublisher":"Mint","year":"2024","month":"January","newsdate":"2024-01-06T12:00:00.000Z","newslink":"https:\/\/www.livemint.com\/industry\/the-return-of-the-nri-homebuyer-11707135197136.html#:~:text=As%20per%20estimates%20by%20proptech,home%20prices%20have%20been%20increasing.","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:14:03.463Z","updatedAt":"2024-04-26T12:14:03.463Z","__v":0},{"_id":"662b9ae446da300018ca691e","newstitle":"Property developers project 15-20% spike in sales, 5-10% increase in prices this year","newspublisher":"CNBC TV18","year":"2024","month":"January","newsdate":"2024-01-05T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/real-estate\/property-developers-project-15-20-pc-spike-in-sales-5-10-pc-increase-in-prices-this-year-18719461.htm","pinnews":"0","newstatus":"0","created_byId":"864163","created_by":"Preoss Admin","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2024-04-26T12:15:32.310Z","updatedAt":"2024-04-26T12:15:32.310Z","__v":0}];
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