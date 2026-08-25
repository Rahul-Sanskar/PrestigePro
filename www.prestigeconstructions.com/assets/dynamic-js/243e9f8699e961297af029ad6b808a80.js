$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2022";
    var givenmonth = "april";

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
     const allNews = [{"_id":"65e8488473e8574ceccb8e67","newstitle":"JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa Debuts in India","newspublisher":"Hotel Business Review","newsdate":"2022-04-30T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221619994","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e69","newstitle":"Prestige Estates pre-sale strong","newspublisher":"Business Standard (Hindi)","newsdate":"2022-04-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221639644","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e68","newstitle":"Prestige Estates pips top players to clock record Rs 10,000-crore presales","newspublisher":"India Catalog","newsdate":"2022-04-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-359397038-841","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e6c","newstitle":"Prestige Estates pips top players to clock record Rs 10K-cr presales","newspublisher":"Business Standard","newsdate":"2022-04-26T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221633003","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e6a","newstitle":"Prestige Estates pips top players to clock record Rs 10K-cr presales","newspublisher":"Business Standard","newsdate":"2022-04-26T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221625568","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e6b","newstitle":"Prestige Estates pips top players to clock record Rs 10,000-crore presales","newspublisher":"Madras Tribune","newsdate":"2022-04-26T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-359374898-841","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e6d","newstitle":"Prestige Group Next Generation Malls under Forum Next","newspublisher":"Realty Plus","newsdate":"2022-04-20T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-358879667","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e70","newstitle":"Prestige Estates\u0027 sales booking hits Rs 10K crore mark in FY22","newspublisher":"The New Indian Express","newsdate":"2022-04-14T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221481581","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e6e","newstitle":"Prestige Estates Crosses 10,000 Cr Presales Benchmark in FY22","newspublisher":"RP Realty Plus","newsdate":"2022-04-14T00:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/news-views\/prestige-estates-crosses-10000-cr-presales-benchmark-in-fy22-105768.html","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e71","newstitle":"Prestige Estates crosses Rs 10,000 crore pre-sale benchmark; sees record sales of Rs. 10,382 crore in FY22","newspublisher":"Money Control","newsdate":"2022-04-14T00:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-estates-crosses-rs-10000-crore-pre-sale-benchmark-sees-record-sales-of-?10382-crore-in-fy22-8356191.html","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e72","newstitle":"Prestige Estates reports 90% rise in sales bookings to Rs 10,382 cr","newspublisher":"Business Today","newsdate":"2022-04-14T00:00:00.000Z","newslink":"https:\/\/www.businesstoday.in\/latest\/corporate\/story\/prestige-estates-reports-90-rise-in-sales-bookings-to-rs-10382-cr-329717-2022-04-13","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e6f","newstitle":"Bengaluru-based Prestige Estates\u0027 sales bookings up 90% to record Rs 10,382 cr in FY22","newspublisher":"Zee Business","newsdate":"2022-04-14T00:00:00.000Z","newslink":"https:\/\/www.zeebiz.com\/india\/real-estate\/news-bengaluru-based-prestige-estates-sales-bookings-up-90-to-record-rs-10382-cr-in-fy22-182743","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e7c","newstitle":"Prestige Estates sales bookings up 90% to record Rs 10,382 crore in FY22","newspublisher":"Business Standard","newsdate":"2022-04-13T00:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/article\/pti-stories\/prestige-estates-sales-bookings-up-90-pc-to-record-rs-10-382-cr-in-fy22-122041300666_1.html","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e73","newstitle":"Prestige Estates records sales of Rs 3,268 crore in Q4 FY22","newspublisher":"IQ Stock","newsdate":"2022-04-13T00:00:00.000Z","newslink":"#","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e78","newstitle":"Prestige Estates sales bookings up 90% to record Rs 10,382 cr in FY 2022","newspublisher":"The Free Press Journal","newsdate":"2022-04-13T00:00:00.000Z","newslink":"https:\/\/www.freepressjournal.in\/business\/prestige-estates-sales-bookings-up-90-to-record-rs-10382-cr-in-fy-2022-2","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e7a","newstitle":"Prestige Estates sales bookings up 90 per cent to record Rs 10,382 cr in FY22","newspublisher":"Financial Express","newsdate":"2022-04-13T00:00:00.000Z","newslink":"https:\/\/www.financialexpress.com\/business\/industry-prestige-estates-sales-bookings-up-90-per-cent-to-record-rs-10382-cr-in-fy22-2490798\/","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e76","newstitle":"Prestige Estates sales bookings up 90% to record Rs 10,382 crore in FY22","newspublisher":"Magicbricks","newsdate":"2022-04-13T00:00:00.000Z","newslink":"https:\/\/content.magicbricks.com\/property-news\/prestige-estates-sales-bookings-up-90-percent-to-record-rs-10382-crore-in-fy22\/128503.html","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e75","newstitle":"Prestige Estates Projects reports 77% rise in sales during Q4FY22","newspublisher":"Citrus Interactive","newsdate":"2022-04-13T00:00:00.000Z","newslink":"http:\/\/www.citrusinteractive.in\/News\/OpenNewsContent.aspx?SecId=7\u0026SubSecID=15\u0026NewsID=904445","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e79","newstitle":"Prestige Estates sales bookings up 90% to record Rs 10,382 crore in FY22","newspublisher":"Economic Times","newsdate":"2022-04-13T00:00:00.000Z","newslink":"https:\/\/realty.economictimes.indiatimes.com\/news\/industry\/prestige-estates-sales-bookings-up-90-to-record-rs-10382-crore-in-fy22\/90821986","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e7d","newstitle":"Prestige Estates registers highest ever sales at Rs 10,382.2 crore","newspublisher":"The Economic Times","newsdate":"2022-04-13T00:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/property-\/-cstruction\/prestige-estates-registers-highest-ever-sales-at-rs-10382-2-crore\/articleshow\/90819912.cms","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e7b","newstitle":"Prestige Estates records sales of Rs 3,268 crore in Q4 FY22","newspublisher":"Business Standard","newsdate":"2022-04-13T00:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/article\/news-cm\/prestige-estates-records-sales-of-rs-3-268-crore-in-q4-fy22-122041300553_1.html","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e74","newstitle":"Prestige Estates sales bookings up 90% to record Rs 10,382 cr in FY 2022","newspublisher":"Dailyhunt","newsdate":"2022-04-13T00:00:00.000Z","newslink":"https:\/\/m.dailyhunt.in\/news\/india\/english\/thefreepressjournal-epaper-fpressjr\/prestige+estates+sales+bookings+up+90+to+record+rs+10+382+cr+in+fy+2022-newsid-n376895060","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e77","newstitle":"Prestige Estates crosses 10,000 Cr presales benchmark, Registers Record Sales of Rs. 10,382 Crs in FY22","newspublisher":"Equity Bulls","newsdate":"2022-04-13T00:00:00.000Z","newslink":"#","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e7e","newstitle":"Apartment For Sale In Frazer Town, Bangalore","newspublisher":"Tixuz India","newsdate":"2022-04-11T00:00:00.000Z","newslink":"#","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e7f","newstitle":"Sabrina Pooja Dey appointed as Hotel Manager at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa","newspublisher":"Economic Times","newsdate":"2022-04-08T00:00:00.000Z","newslink":"https:\/\/hospitality.economictimes.indiatimes.com\/news\/hotels\/sabrina-pooja-dey-appointed-as-hotel-manager-at-jw-marriott-bengaluru-prestige-golfshire-resort-spa\/90723025","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e80","newstitle":"Sabrina Pooja Dey appointed Hotel Manager at JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa","newspublisher":"BW Hotelier","newsdate":"2022-04-08T00:00:00.000Z","newslink":"https:\/\/bwhotelier.businessworld.in\/article\/Sabrina-Pooja-Dey-appointed-Hotel-Manager-at-JW-Marriott-Bengaluru-Prestige-Golfshire-Resort-Spa-\/08-04-2022-424890\/","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e81","newstitle":"JW Marriott Bengaluru Prestige Golfshire Resort \u0026 Spa Debuts In India\u0027s Beautiful and Historic Nandi Hills Region","newspublisher":"Travel Span","newsdate":"2022-04-08T00:00:00.000Z","newslink":"https:\/\/travelspan.in\/jw-marriott-bengaluru-prestige-golfshire-resort-spa-debuts-in-indias-beautiful-and-historic-nandi-hills-region\/","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e82","newstitle":"Marriott Bonvoy and Ace Golfer Shiv Kumar associate for JW Marriott Golfshire","newspublisher":"Adgully","newsdate":"2022-04-05T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-357766296-841","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e83","newstitle":"Prestige Group | Which Geographies Are In Focus? | India Growth Mission Dialogue","newspublisher":"Times Now","newsdate":"2022-04-03T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-357617984-841","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e84","newstitle":"Home Sales up at a Seven-Year High in Q1","newspublisher":"The Economic Times","newsdate":"2022-04-02T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-221337371","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8e85","newstitle":"Cement \u0026 Steel Prices A Cause Of Concern | Irfan Razack, Prestige Group","newspublisher":"Times Now","newsdate":"2022-04-01T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-357476503-841\/","month":"April","year":"2022","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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