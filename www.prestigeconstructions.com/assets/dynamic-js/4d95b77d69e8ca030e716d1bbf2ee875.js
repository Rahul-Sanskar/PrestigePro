$(document).ready(function() {
        // $(".accordian_title:first").trigger("click");
    });
    var year_url = "";
    var month_url = "";
    
    var givenyear = "2025";
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
     const allNews = [{"_id":"68d378cbf14eee001200a214","newstitle":"Luxury Has a New Address Small-town India","newspublisher":"Business Today","year":"2025","month":"August","newsdate":"2025-08-31T12:00:00.000Z","newslink":"https:\/\/www.businesstoday.in\/magazine\/deep-dive\/story\/luxury-has-a-new-address-small-town-india-491970-2025-09-01","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:51:23.752Z","updatedAt":"2025-09-24T04:51:23.752Z","__v":0},{"_id":"68d38527e2156b001290ac58","newstitle":"Festive cheer lifts housing demand, luxury and mid-segment lead the charge","newspublisher":"Business Line","year":"2025","month":"August","newsdate":"2025-08-29T12:00:00.000Z","newslink":"https:\/\/www.thehindubusinessline.com\/news\/real-estate\/festive-cheer-lifts-housing-demand-luxury-and-mid-segment-lead-the-charge\/article69985166.ece","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T05:44:07.747Z","updatedAt":"2025-09-24T05:44:07.747Z","__v":0},{"_id":"68d37900d7013e00122692c3","newstitle":"Prestige Group eyes 50,000 crore home sales by FY29-30 to expand into new markets, focus on 23 cr segment","newspublisher":"Hindustan Times","year":"2025","month":"August","newsdate":"2025-08-26T12:00:00.000Z","newslink":"https:\/\/www.hindustantimes.com\/real-estate\/prestige-group-eyes-50-000-crore-home-sales-by-fy29-30-to-expand-into-new-markets-focus-on-2-3-cr-segment-101756142812021.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:52:16.055Z","updatedAt":"2025-09-24T04:52:16.055Z","__v":0},{"_id":"68d3785c4bcae10012b606bc","newstitle":"A Bold New Chapter Unfolds In Indian Realty","newspublisher":"Outlook India","year":"2025","month":"August","newsdate":"2025-08-22T12:00:00.000Z","newslink":"https:\/\/www.outlookindia.com\/announcements\/news-media-wire\/indian-real-estate-new-generation-leaders-transformation","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:49:32.755Z","updatedAt":"2025-09-24T04:49:32.755Z","__v":0},{"_id":"68d37787d062bf001236b2ac","newstitle":"Developers bet on luxury malls in smaller cities as demand surges","newspublisher":"Money Control","year":"2025","month":"August","newsdate":"2025-08-21T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/developers-bet-on-luxury-malls-in-smaller-cities-as-demand-surges-13475360.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:45:59.903Z","updatedAt":"2025-09-24T04:45:59.903Z","__v":0},{"_id":"68d37899d15fd0001147a706","newstitle":"Prestige Group, Maharashtra government sign Rs 12,500-crore deal for 3 projects","newspublisher":"Money Control","year":"2025","month":"August","newsdate":"2025-08-20T12:00:00.000Z","newslink":"https:\/\/www.moneycontrol.com\/news\/business\/real-estate\/prestige-group-maharashtra-government-sign-rs-12-500-crore-deal-for-3-projects-13470489.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:50:33.669Z","updatedAt":"2025-09-24T04:50:33.669Z","__v":0},{"_id":"68d38552bfb87c0012c64c6a","newstitle":"Independence Day fuels a revival in retail sales","newspublisher":"Economic Times","year":"2025","month":"August","newsdate":"2025-08-16T12:00:00.000Z","newslink":"https:\/\/economictimes.indiatimes.com\/industry\/services\/retail\/independence-day-fuels-a-revival-in-retail-sales\/articleshow\/123326446.cms?frommdr","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T05:44:50.902Z","updatedAt":"2025-09-24T05:44:50.902Z","__v":0},{"_id":"68d3858ab301ec001223ed38","newstitle":"I-Day boost: Discounts drive 8-10 sales growth executives eye stronger festive season","newspublisher":"Times of India","year":"2025","month":"August","newsdate":"2025-08-16T12:00:00.000Z","newslink":"https:\/\/timesofindia.indiatimes.com\/business\/india-business\/i-day-boost-discounts-drive-8-10-sales-growth-executives-eye-stronger-festive-season\/articleshow\/123335469.cms","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T05:45:46.523Z","updatedAt":"2025-09-24T05:45:46.523Z","__v":0},{"_id":"68d384f7bfb87c0012c64b25","newstitle":"ESTABLISH CREDIBILITY WITH RESPONSIBLE GOVERNANCE","newspublisher":"Reality Plus","year":"2025","month":"August","newsdate":"2025-08-11T12:00:00.000Z","newslink":"https:\/\/www.rprealtyplus.com\/developers-speak\/establish-credibility-with-responsible-governance-121281.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T05:43:19.544Z","updatedAt":"2025-09-24T05:43:19.544Z","__v":0},{"_id":"68d377c24bcae10012b6052a","newstitle":"Prestige Estates acquires 102 acres in Q1, to build homes worth 20,400 cr","newspublisher":"Business Standard","year":"2025","month":"August","newsdate":"2025-08-09T12:00:00.000Z","newslink":"https:\/\/www.business-standard.com\/pti-stories\/national\/prestige-group-acquires-102-acres-of-land-in-q1-to-build-homes-worth-rs-20k-cr-125080900736_1.html","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:46:58.299Z","updatedAt":"2025-09-24T04:46:58.299Z","__v":0},{"_id":"68d378075101d500134c40a3","newstitle":"Prestige Group acquires 102 acres of land in Q1 to build homes worth Rs 20k cr","newspublisher":"PTI News","year":"2025","month":"August","newsdate":"2025-08-09T12:00:00.000Z","newslink":"https:\/\/www.ptinews.com\/story\/business\/prestige-group-acquires-102-acres-of-land-in-q1-to-build-homes-worth-rs-20k-cr\/2807325","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:48:07.375Z","updatedAt":"2025-09-24T04:48:07.375Z","__v":0},{"_id":"68a57e0c6ab9820016a2b1d2","newstitle":"Billionaire Warns of Property Risks Emerging in India\u0027s Boom","newspublisher":"Bloomberg","year":"2025","month":"August","newsdate":"2025-08-07T12:00:00.000Z","newslink":"https:\/\/www.bloomberg.com\/news\/articles\/2025-08-06\/billionaire-who-rode-india-s-real-estate-boom-warns-of-risks","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"_blank","rel":"true","createdAt":"2025-08-20T07:49:32.709Z","updatedAt":"2025-08-20T07:49:32.709Z","__v":0},{"_id":"68d37662b301ec001223c480","newstitle":"No signs of slowdown in housing demand, says Prestige\u0027s Irfan Razack","newspublisher":"CNBC TV18","year":"2025","month":"August","newsdate":"2025-08-06T12:00:00.000Z","newslink":"https:\/\/www.cnbctv18.com\/market\/earnings\/prestige-cmd-says-housing-demand-strong-rbi-rate-softening-aids-affordability-results-boardroom-19649507.htm","pinnews":"","newstatus":"0","created_byId":"864182","created_by":"Kintali Naveesh","updated_byId":"","updated_by":"","is_sys":false,"is_del":false,"is_available":true,"target":"","rel":"true","createdAt":"2025-09-24T04:41:06.094Z","updatedAt":"2025-09-24T04:41:06.094Z","__v":0}];
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