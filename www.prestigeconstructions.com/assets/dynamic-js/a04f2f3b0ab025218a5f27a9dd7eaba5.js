$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2021";
    var givenmonth = "september";

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
     const allNews = [{"_id":"65e8488473e8574ceccb8f85","newstitle":"Irfan Razack Of Prestige Group Speaks On The Boom In The Real Estate Space","newspublisher":"CNBC TV18","newsdate":"2021-09-27T00:00:00.000Z","newslink":"https:\/\/www.youtube.com\/watch?v=RJPiHC3midU\u0026ab_channel=CNBC-TV18","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f86","newstitle":"First time home buyers back and participating in real estate rebound : Prestige Group","newspublisher":"CNBC TV18","newsdate":"2021-09-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-283565830-841","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f87","newstitle":"Sneha, Avani dominate at Golfshire","newspublisher":"India Golf Digest","newsdate":"2021-09-27T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-283564444-841","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f88","newstitle":"Home is where the money is","newspublisher":"Business Today","newsdate":"2021-09-20T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-216085272","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f89","newstitle":"Home Is Where the Money Is","newspublisher":"MSN India","newsdate":"2021-09-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-282203170-841","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f8a","newstitle":"Home Is Where the Money Is","newspublisher":"MSN RSS Feed","newsdate":"2021-09-18T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-282205468-841","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f8b","newstitle":"Real Estate trends : Housing supply and demand set to grow this festival season","newspublisher":"The Financial Express","newsdate":"2021-09-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-281090330","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f8c","newstitle":"Housing supply and demand set to grow this festival season","newspublisher":"Financial Express","newsdate":"2021-09-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-215965984","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f8d","newstitle":"Battle for select micro markets intensifies among developers","newspublisher":"Mint","newsdate":"2021-09-13T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-215968696","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f8e","newstitle":"Battle for select micro markets intensifies among developers","newspublisher":"Mint","newsdate":"2021-09-12T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-281105200","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f8f","newstitle":"Godrej and Prestige eye strong booking","newspublisher":"Business Standard (Hindi)","newsdate":"2021-09-11T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/ad\/841-215938958","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"},{"_id":"65e8488473e8574ceccb8f90","newstitle":"Developers expect demand rebound as they begin work","newspublisher":"Mint","newsdate":"2021-09-10T00:00:00.000Z","newslink":"https:\/\/clientportal.conceptbiu.com\/mv\/oad\/841-280771800","month":"September","year":"2021","is_available":true,"newstatus":"1","target":"_blank","rel":"true"}];
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