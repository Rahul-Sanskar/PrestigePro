$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2021";
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
     const allNews = [{"_id":"65e8488473e8574ceccb8fd5","newstitle":"Prestige Group leads from the forefront with its COVID-19 relief measures","newspublisher":"The Week","newsdate":"2021-05-22T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-264077046","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fd6","newstitle":"Helping Hands","newspublisher":"CSR Mandate","newsdate":"2021-05-21T00:00:00.000Z","newslink":"https:\/\/www.csrmandate.org\/helping-hands\/","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fd7","newstitle":"Company Contributes Rs 2 Crore towards Covid Relief","newspublisher":"The New Indian Express","newsdate":"2021-05-19T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213196460","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fd8","newstitle":"Tristar, Prestige, Fairfax provide relief","newspublisher":"The Times of India","newsdate":"2021-05-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213183524-841","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fd9","newstitle":"Prestige Group donates RS Rs 2 crore to fight Covid-19","newspublisher":"Deccan Herald","newsdate":"2021-05-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213185280-841","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fda","newstitle":"More than Rs 2 crore help in the fight against Corona from Prestige Foundation","newspublisher":"Janmabhoomi (Gujarati)","newsdate":"2021-05-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213182040-841","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fdb","newstitle":"Covid : Rs 2 crore aid from Prestige","newspublisher":"Prajavani (Kannada)","newsdate":"2021-05-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213181790-841","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fdc","newstitle":"Prestige Grp Leads From Forefront With its Covid-19 Relief Measures","newspublisher":"Realty Plus","newsdate":"2021-05-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-263555674","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fdd","newstitle":"Bengaluru\u0027s Prestige group puts its heart into Covid relief","newspublisher":"The Bengaluru Live","newsdate":"2021-05-17T00:00:00.000Z","newslink":"https:\/\/thebengalurulive.com\/bengalurus-prestige-group-puts-its-heart-into-covid-relief\/","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fde","newstitle":"Real estate developers help set up COVID-19 centres, donate medical equipment","newspublisher":"Money Control","newsdate":"2021-05-17T00:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/real-estate-developers-help-set-up-covid-19-centres-donate-medical-equipment-6905211.html","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fdf","newstitle":"Corporate Social Responsibility (CSR) : Prestige Foundation contributes over Rs 2 cr towards covid relief measures","newspublisher":"India CSR","newsdate":"2021-05-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-263441348","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fe0","newstitle":"Portals to the Future","newspublisher":"Construction World","newsdate":"2021-05-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213021688","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fe1","newstitle":"Developers may face tough time in office leasing : Study","newspublisher":"Business Standard","newsdate":"2021-05-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-213031260","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8fe2","newstitle":"Realty Marketing In The New Normal","newspublisher":"Realty Plus","newsdate":"2021-05-05T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-262080438","month":"May","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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