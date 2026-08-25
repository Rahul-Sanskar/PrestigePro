$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2021";
    var givenmonth = "november";

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
     const allNews = [{"_id":"65e8488473e8574ceccb8f2d","newstitle":"Marriott, Prestige Group ink pact to develop two hotels in Delhi","newspublisher":"Construction World","newsdate":"2021-11-19T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-292187288-841","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f33","newstitle":"Marriott International Signs agreement with Prestige Group","newspublisher":"Punjab Express","newsdate":"2021-11-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-217577976-841","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f30","newstitle":"Marriott International signs pact with Prestige Group to bring 2 new hotels to New Delhi","newspublisher":"Navjeevan Express","newsdate":"2021-11-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291763940","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f2f","newstitle":"Marriott International signs agreement with Prestige Group to bring two new hotels to New Delhi","newspublisher":"News Monks","newsdate":"2021-11-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-292158130","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f2e","newstitle":"Marriott International signs agreement with Prestige Group for two hotels","newspublisher":"The Economic Times","newsdate":"2021-11-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291695496","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f31","newstitle":"Marriott International ties up with Prestige Group to bring in two new hotels","newspublisher":"Adhikar (Hindi)","newsdate":"2021-11-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-217577948-841","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f32","newstitle":"Marriott International Signs agreement with Prestige Group","newspublisher":"Bureau","newsdate":"2021-11-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-217578122-841","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f34","newstitle":"Marriott International Signs agreement with Prestige Group","newspublisher":"Yugmarg","newsdate":"2021-11-17T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-217524076-841","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f37","newstitle":"Marriott Int \u0026 Prestige Grp Sign Agreement for 2 Hotels in New Delhi","newspublisher":"Realty Plus","newsdate":"2021-11-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291661782","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f36","newstitle":"Marriott International signs agreement with Prestige Group for two hotels","newspublisher":"Pehal News","newsdate":"2021-11-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291675792","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f35","newstitle":"Marriott International indicators settlement with Prestige Group for 2 lodges","newspublisher":"The Greater India","newsdate":"2021-11-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291673908","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f49","newstitle":"Marriott Int sings agreements with Prestige Group to set up two new hotels in New Delhi","newspublisher":"UNI India","newsdate":"2021-11-16T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291648134","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f38","newstitle":"Marriott International signs agreement with Prestige Group to open two new hotels in Delhi","newspublisher":"Travel Biz Monitor","newsdate":"2021-11-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291424292","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f39","newstitle":"Marriott International signs agreement with Prestige Group for hotels in New Delhi","newspublisher":"FnB News","newsdate":"2021-11-15T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291399584","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f3a","newstitle":"Aerocity to have 2 new luxury hotels by 2025","newspublisher":"The Times of India","newsdate":"2021-11-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291139180","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f3d","newstitle":"Aerocity to have 2 new luxury hotels by 2025","newspublisher":"The Times of India","newsdate":"2021-11-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-217432326-841","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f3c","newstitle":"Delhi : Aerocity to have 2 new luxurious lodges by 2025 | Delhi News","newspublisher":"The Greater India","newsdate":"2021-11-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291212660","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f3b","newstitle":"Delhi : Aerocity to have 2 new luxurious lodges by 2025 | Delhi News","newspublisher":"The Greater India","newsdate":"2021-11-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291212660","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f41","newstitle":"Marriott International Signs Agreement with Prestige Group to Bring two New Hotels to new Delhi","newspublisher":"The Hotel Times","newsdate":"2021-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-290974470","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f43","newstitle":"Marriott International in JV with Prestige Group, DB Realty for new two hotels","newspublisher":"Knowledia","newsdate":"2021-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291032004","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f44","newstitle":"Marriott to open two new hotels in New Delhi","newspublisher":"Hospitalitytalk","newsdate":"2021-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291042540","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f40","newstitle":"Marriott International in JV with Prestige Group, DB Realty for new two hotels","newspublisher":"My Times Now","newsdate":"2021-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-290997508","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f3e","newstitle":"New Delhi Marriott Marquis and The St. Regis Aerocity, New Delhi set to debut in 2025","newspublisher":"New On News","newsdate":"2021-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-290887586","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f3f","newstitle":"New Delhi Marriott Marquis and The St. Regis Aerocity, New Delhi set to debut In 2025","newspublisher":"Today\u0027s Traveller","newsdate":"2021-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291011466","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f42","newstitle":"Marriott to open 2 new hotels at Delhi Airport Aerocity in 2025","newspublisher":"MSN India","newsdate":"2021-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-291073592","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f45","newstitle":"Marriott International joins hands with Prestige Group, DB Realty to introduce new properties","newspublisher":"BW Hotelier","newsdate":"2021-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-290998586","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f46","newstitle":"Marriott International in JV with Prestige Group, DB Realty for new two hotels","newspublisher":"Business Journal","newsdate":"2021-11-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-290998826","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f47","newstitle":"Marriott International to introduce two new hotels in New Delhi, inks pact with Prestige Group","newspublisher":"Hotelier India","newsdate":"2021-11-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-290891590","month":"November","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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