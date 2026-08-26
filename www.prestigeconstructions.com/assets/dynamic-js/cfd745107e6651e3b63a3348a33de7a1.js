fetch("https://www.prestigeconstructions.com/api/maps").then(e=>e.json()).then(e=>{let r=document.createElement("script");r.src=e.script,r.defer=!0,r.async=!0,document.head.appendChild(r)}).catch(e=>console.error("Error loading Google Maps API:",e));

  var on_scroll = "1";
  $(document).ready(function () {
    //getipinformation();
    $(".hide_when_thereisnoimage").addClass("is-hidden");
    $(".hide_when_thereisnomap").removeClass("is-hidden");
    //var currentcity = localStorage.getItem('currentlocationbyipadress');

    //get_all_slider(currentcity);

    //getLocationAndCityName();
    //setTimeout(() => {
    var currentcity = localStorage.getItem('currentlocationbyipadress');

    get_all_slider(currentcity);
    //}, 2500);
    //get_all_slider();
    //homeInfoSequence();
    // get_all_brands();
    // getallabouts();
    // getallmember();
    // get_all_featured_project();
    // get_all_project_count(".residential_count_bind", "Residential");
    // get_all_project_count(".commercial_count_bind", "Commercial");
    // get_all_project_count(".hospitality_count_bind", "Hospitality");
    // get_all_project_count(".retail_count_bind", "Retail");
    // get_all_testimonial();

    var rangeSlider = $('.properties-range-slider.index-range-slider');
    rangeSlider.on('input', function () {
      var str1 = $('.properties-range-slider.index-range-slider').siblings(".irs").find(".irs").find(".irs-from").html().replace(/\s/g, '');
      var str2 = $('.properties-range-slider.index-range-slider').siblings(".irs").find(".irs").find(".irs-to").html().replace(/\s/g, '');
      var fromValue = parseInt(str1);
      var toValue = parseInt(str2);
      $('.index_from').text(formatIndianNumber(fromValue));
      $('.index_to').text(formatIndianNumber(toValue));
      // $('#index_from').attr("value", formatIndianNumber(fromValue));
      // $('#index_to').attr("value", formatIndianNumber(toValue));
    });
    $(window).on("scroll", function () {
      if (on_scroll == "1") {
        homeInfoSequence();
        on_scroll = "0";
      }
    });

  });


  function homeInfoSequence() {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/homepagesequence/list";

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      datatype: "json",
      data: formdata,
      // async: false,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        if (response.success == true && response.data.length != 0) {
          $("#info-sections").html('');
          $.each(response.data, function (s, sequence) {
            sectionTitle = sequence.description;
            targetId = (sectionTitle).toLowerCase().replace(/ /g, "-");
            btnId = (sectionTitle).toLowerCase().replace(/ /g, "_");
            let bgClass = "";
            if (s % 2 != 0) {
              bgClass = "light-gray-bg"
            }
            if (targetId == 'about-us' && sequence.is_hidden === "false") {
              bindAboutUs = `<section class="section section-about-us ${bgClass}">
                        <div class="container home-about-us-wrapper">
                            <div class="section-title js-scroll fade-in-top">
                                <span class="theme-title">About Prestige Group</span>
                            </div>

                            <div class="columns is-multiline is-vcentered- about-us-cols gap-5">
                                <div class="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen about-us-col js-scroll fade-in-bottom" id="about_details_bind"></div>

                                <div class="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen about-us-col border-left border-theme">
                                    <div class="about-us-counter-detail logo-with-counter-detail js-scroll fade-in-bottom">
                                        <picture class="crisil-real-estate-logo mb-5">
    <source srcset="https://d1t2fddy6amcvs.cloudfront.net/crisil/crisil-real-estate-logo.webp" type="image/webp">
    <source srcset="https://d1t2fddy6amcvs.cloudfront.net/crisil/crisil-real-estate-logo.webp" type="image/png">
    <img loading="lazy" src="https://d1t2fddy6amcvs.cloudfront.net/crisil/crisil-real-estate-logo.webp" alt="Crisil Logo" width="150" height="150">
  </picture>
                                        <div class="columns is-multiline is-mobile about-us-counter-cols appendcount">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>`;
              $("#info-sections").append(bindAboutUs);
              setTimeout(() => {
                getallabouts();
              }, 300);
            } else if (targetId == 'our-projects' && sequence.is_hidden === "false") {
              bindOurProjects = `<section class="section section-our-projects ${bgClass}">
                        <div class="container our-projects-wrapper">
                        <div class="columns is-multiline is-vcentered our-projects-cols gap-1">
                            <div class="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen our-projects-col">
                            <div class="our-projects-detail">
                                <div class="section-title js-scroll fade-in-top">
                                <span class="theme-title">Operational Segments</span>

                                <h2>
                                    Projects
                                </h2>
                                </div>

                                <div class="our-projects-tab-detail js-scroll fade-in-bottom section3">
                                <ul class="tabs-detail">
                                    <li class="tab is-active" onclick="openTab(event,'projects-residential','section3')">
                                    <a>Residential</a>
                                    </li>
                                    <li class="tab" onclick="openTab(event,'projects-commercial','section3')">
                                    <a>Commercial</a>
                                    </li>
                                    <li class="tab" onclick="openTab(event,'projects-hospitality','section3')">
                                    <a>Hospitality</a>
                                    </li>
                                    <li class="tab" onclick="openTab(event,'projects-retail','section3')">
                                    <a>Retail</a>
                                    </li>
                                </ul>

                                <div class="our-projects-tab-desc-detail">
                                    <div class="content-tab" id="projects-residential" style="display: block;">
                                    <ul class="projects-location-detail residential_count_bind">
                                    </ul>
                                    </div>

                                    <div class="content-tab" id="projects-commercial" style="display: none;">
                                    <ul class="projects-location-detail commercial_count_bind">
                                    </ul>
                                    </div>

                                    <div class="content-tab" id="projects-hospitality" style="display: none;">
                                    <ul class="projects-location-detail hospitality_count_bind">
                                    </ul>
                                    </div>

                                    <div class="content-tab" id="projects-retail" style="display: none;">
                                    <ul class="projects-location-detail retail_count_bind">
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen our-projects-col">
                            <div class="theme-block card p-1">
                                <div id="map">
                                
                                </div>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </section>`;
              $("#info-sections").append(bindOurProjects);
              setTimeout(() => {
                get_all_project_count(".residential_count_bind", "Residential");
                get_all_project_count(".commercial_count_bind", "Commercial");
                get_all_project_count(".hospitality_count_bind", "Hospitality");
                get_all_project_count(".retail_count_bind", "Retail");
              }, 800);
            } else if (targetId == 'board-of-director' && sequence.is_hidden === "false") {
              bindBoardofDirectors = `<section class="section section-board-of-director ${bgClass}">
                        <div class="container board-of-director-wrapper">
                            <div class="section-title section-title-with-arrow js-scroll fade-in-top">
                                <span class="theme-title">Board of</span>
                                <h2>
                                Directors
                                </h2>
                            </div>

                            <div class="splide js-scroll fade-in-bottom" id="board-of-director-slider">
                                <div class="splide__track">
                                    <ul class="splide__list append-directors"></ul>
                                </div>
                                <div class="splide__arrows arrow-top-slider">
                                    <button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button>
                                </div>
                            </div>
                        </div>
                    </section>`;
              $("#info-sections").append(bindBoardofDirectors);
              setTimeout(() => {
                getallmember();
              }, 300);
            } else if (targetId == 'featured-projects' && sequence.is_hidden === "false") {
              bindFeaturedProjects = `<section class="section section-featured-projects hide_featured_project is-hidden ${bgClass}">
                        <div class="container featured-projects-wrapper">
                            <div class="section-title section-title-with-arrow js-scroll fade-in-top">
                                <span class="theme-title">Residential</span>
                                <h2>
                                Featured Projects
                                </h2>
                            </div>

                            <div class="splide active-slider-visible js-scroll fade-in-bottom" id="featured-projects-slider">
                                <div class="splide__track">
                                    <ul class="splide__list bind_featured_project_index"></ul>
                                </div>
                                <div class="splide__arrows arrow-top-slider">
                                    <button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button>
                                </div>
                            </div>
                        </div>
                    </section>`;
              $("#info-sections").append(bindFeaturedProjects);
              setTimeout(() => {
                var currentcity = localStorage.getItem('currentlocationbyipadress');
                get_all_featured_project(currentcity);
              }, 300);
            } else if (targetId == 'our-customer-say' && sequence.is_hidden === "false") {
              bindCustomerSay = `  <section class="section section-our-customer-say js-scroll fade-in-bottom hide_review_project is-hidden ${bgClass}">
                        <div class="container our-customer-say-wrapper bind_test">
                        
                        </div>
                    </section>`;
              $("#info-sections").append(bindCustomerSay);
              setTimeout(() => {
                get_all_testimonial();
              }, 300);
            } else if (targetId == 'our-brand' && sequence.is_hidden === "false") {
              bindOurBrands = `  <section class="section section-our-brand ${bgClass}">
                        <div class="container our-brand-wrapper">
                            <div class="section-title mb-5 has-text-centered js-scroll fade-in-top">
                                <span class="theme-title">Verticals</span>
                                <h2> Our Brands </h2>
                            </div>
                        </div>

                        <div class="our-brand-logo-detail js-scroll fade-in-bottom">
                            <div class="splide our-brand-logo-slider" id="our-brand-logo-slider">
                                <div class="splide__track">
                                    <ul class="splide__list bind_our_brands_slider1"></ul>
                                </div>
                            </div>

                            <div class="splide our-brand-logo-slider" id="our-brand-logo-slider2">
                                <div class="splide__track">
                                    <ul class="splide__list bind_our_brands_slider2"></ul>
                                </div>
                            </div>
                        </div>
                    </section>`;
              $("#info-sections").append(bindOurBrands);
              setTimeout(() => {
                get_all_brands();
              }, 300);
            }
          });
        } else {
          var currentcity = localStorage.getItem('currentlocationbyipadress');
          get_all_brands();
          getallabouts();
          getallmember();
          get_all_featured_project(currentcity);
          get_all_project_count(".residential_count_bind", "Residential");
          get_all_project_count(".commercial_count_bind", "Commercial");
          get_all_project_count(".hospitality_count_bind", "Hospitality");
          get_all_project_count(".retail_count_bind", "Retail");
          get_all_testimonial();
        }
      },
      complete: function () {
        /***Section Animation***/
        const scrollElements = document.querySelectorAll(".js-scroll"),
          elementInView = (e, l = 1) => {
            let t = e.getBoundingClientRect().top;
            return t <= (window.innerHeight || document.documentElement.clientHeight) / l
          },
          elementOutofView = e => {
            let l = e.getBoundingClientRect().top;
            return l > (window.innerHeight || document.documentElement.clientHeight)
          },
          displayScrollElement = e => {
            e.classList.add("scrolled")
          },
          hideScrollElement = e => {
            e.classList.remove("scrolled")
          },
          handleScrollAnimation = () => {
            scrollElements.forEach(e => {
              elementInView(e, 1.25) ? displayScrollElement(e) : elementOutofView(e) && hideScrollElement(e)
            })
          };
        window.addEventListener("scroll", () => {
          handleScrollAnimation()
        });
        /***End Section Animation***/
      }
    });
  }

  function get_all_testimonial() {
    var formdata = {};
    srno = 1;
    formdata["dynamicurl"] = "managecontent/v1/testimonials/list";
    formdata["page"] = 1;
    formdata["size"] = 20;
    formdata["is_available"] = true;

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      datatype: "json",
      data: formdata,
      // async: false,
      headers: {
        'Authorization': token
      },
      success: function (response) {

        $(".bind_test").html("");
        if (response.success == true && response.data.length > 0) {
          $(".hide_review_project").removeClass("is-hidden");
          $.each(response.data, function (i, item) {
            if (i == 0) {
              var uploadimage = checkkeyexistornull(item, "uploadimage");
              var videourl = checkkeyexistornull(item, "videourl");
              var quote = checkNUll(checkkeyexistornull(item, "quote"));
              var target = checkNUll(checkkeyexistornull(item, "target"));
              var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
              var alttextbind = "";
              if (checkNUll(alt_text) !== "") {
                alttextbind = "alt='" + alt_text + "'";
              } else {
                alttextbind = "";
              }
              var targetbind = "";
              if (checkNUll(target) != "") {
                if (target == "_blank") {
                  targetbind = "target='_blank'"

                } else {
                  targetbind = "target='_self'"
                }
              }
              var relbind = "";
              var rel = checkNUll(checkkeyexistornull(item, "rel"));
              if (checkNUll(rel) != "") {
                if (rel == "true") {
                  relbind = "rel='nofollow'"
                } else {
                  relbind = ""
                }
              }
              var img = "",
                video = "";
              if (checkNUll(uploadimage) != "") {
                img = uploadimage;
              } else {
                img = "https://www.prestigeconstructions.com/resources/media/images/home/our-customer-say/testimonial-video.jpg"
              }
              if (checkNUll(videourl) != "") {
                video = videourl;
              } else {
                video = "https://d1t2fddy6amcvs.cloudfront.net/images/testimonials/prestige-white-meadows.mp4"
              }
              var row = `<div class="columns is-multiline is-gapless our-customer-say-cols">
                                            <div class="column is-12-mobile is-12-tablet is-4-desktop is-3-widescreen our-customer-say-col">
                                                <div class="our-customer-say-detail">
                                                    <div class="qoutes-img js-scroll fade-in-top scrolled">
                                                        <svg width="269" height="269" viewBox="0 0 269 269" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M156.917 145.708H201.75C207.94 145.708 212.958 150.726 212.958 156.917V190.542C212.958 196.732 207.94 201.75 201.75 201.75H168.125C161.935 201.75 156.917 196.732 156.917 190.542V123.292C156.917 93.399 171.857 74.726 201.75 67.25" stroke="#DEDEDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.0416 145.708H100.875C107.065 145.708 112.083 150.726 112.083 156.917V190.542C112.083 196.732 107.065 201.75 100.875 201.75H67.2499C61.0597 201.75 56.0416 196.732 56.0416 190.542L56.0416 123.292C56.0416 93.399 70.9823 74.726 100.875 67.25" stroke="#DEDEDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                                    </div>
                                                    <div class="our-customer-say-desc p-5 white-bg gray-border js-scroll fade-in-left scrolled">
                                                        <div class="section-title mb-4">
                                                            <span class="theme-title">Testimonial</span>
                                                            <h2>What Our Customer Say ?</h2>
                                                        </div>
                                                        <p class="mb-1"> ${quote}</p>
                                                        <p></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-12-mobile is-12-tablet is-8-desktop is-9-widescreen our-customer-say-col">
                                                <div class="our-customer-say-video-detail js-scroll fade-in-right scrolled">
                                                    <div class="theme-block-img white-overlay">
                                                        <picture>
                                                            <source srcset="${changeToWebP(img)}" type="image/jpeg">
                                                            <source srcset="${changeToWebP(img)}" type="image/jpg">
                                                            <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(img)}" ${alttextbind} width="900" height="500">
                                                        </picture>
                                                        <a ${relbind} class="theme-block-icon video-play-icon" href="${video}" ${targetbind} data-fancybox="our-client-says-video" data-cursor="Play<br>Video">
                                                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
              $(".bind_test").append(row);
            }
          });
        } else {
          $(".hide_review_project").addClass("is-hidden");
        }
      },
      complete: function () {
        setTimeout(() => {

          let myYbox;
          document.querySelector(".yBox") && (myYbox = new yBox).init(), "" != checkNUll(myYbox) && (myYbox.onYboxOpen = function () {
            document.body.classList.add("yBoxIsOpen")
          }, myYbox.onYboxClose = function () {
            document.body.classList.remove("yBoxIsOpen")
          }, myYbox.onNextItemClick = function () {
            console.log("next item clicked")
          }, myYbox.onPrevItemClick = function () {
            console.log("prev item clicked")
          });

        }, 1000);


      }
    });
  }

  function get_all_project_count(classname, type, url = "managecontent/v1/cityprojectcount/list") {
    var formdata = {};
    srno = 1;
    formdata["dynamicurl"] = url;
    if (url == "managecontent/v1/cityprojectcount/list") {
      formdata["is_available"] = true;
      formdata["propertycategory"] = type;
    } else {
      formdata["is_rental"] = true;
    }

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      datatype: "json",
      data: formdata,
      // async: false,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        if (response.success == true && response.data.length > 0) {
          $(classname).html('');
          $.each(response.data, function (i, item) {
            var LatLong = checkkeyexistornull(item, "LatLong");
            if (type == "Retail") {
              var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
            } else {
              var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
            }
            var count = checkkeyexistornull(item, "count");
            var lat = "",
              lng = "";
            if (checkNUll(LatLong) != "") {
              if (item.LatLong.coordinates.length > 0) {
                lat = item.LatLong.coordinates[0];
                lng = item.LatLong.coordinates[1];
              }
            }
            var bindclass = "";
            if (i == 0) {
              bindclass = "active"
            }

            var bind_view_all_link = "";
            if (type !== "Hospitality" && type !== "Retail") {
              bind_view_all_link = ` <a class="projects-location-view-all view_projects call_project" data-type='${type}' data-citycode='${item._id}' href="javascriptvoid:(0);">View All
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M17 7l-10 10"></path>
                                                            <path d="M8 7l9 0l0 9"></path>
                                                        </svg>
                                                        </a>`;
            }
            var projectcity = `<li><div class="projects-location-items-index ${bindclass} cursor-pointer click_projects" data-type='${type}' data-citycode='${item._id}'>
                                                        <h4>${CityText}</h4>
                                                        <span>${count} Projects Available</span>
                                                       ${bind_view_all_link}
                                                    </div>
                                                </li>`;

            $(classname).append(projectcity);

          });
        } else {
          var row = `<div class="sv-qr-code-detail border border-gray p-3">
                                    NO DATA FOUND
                                    </div>`;
          $(classname).html('').html(row);
        }
      },
      // complete: function() {
      //   if (type == "Residential") {
      //     get_latlong_for_googlemap($(".click_projects:first-child").attr("data-citycode"), $(".click_projects:first-child").attr("data-type"));
      //   }
      // }
      complete: function () {
        var is_residental_match_ipaddress = false;
        if (type == "Residential") {
          var currentcity = localStorage.getItem('currentlocationbyipadress');
          //console.log(currentcity);
          $.each($(".click_projects"), function () {
            // Ensure both are strings, trim whitespace, and make case-insensitive
            var citycode = $(this).attr("data-citycode").toLowerCase().trim();
            var normalizedCurrentCity = currentcity.toLowerCase().trim();

            if (citycode === normalizedCurrentCity) {
              is_residental_match_ipaddress = true;
              $(this).trigger("click"); // Set click when matched
              get_latlong_for_googlemap($(this).attr("data-citycode"), $(this).attr("data-type"));
            }
          });

          if (is_residental_match_ipaddress == false) {
            get_latlong_for_googlemap($(".click_projects:first").attr("data-citycode"), $(".click_projects:first").attr("data-type"));
          }
        }
      }
    });
  }

  $(document).on("click", ".click_projects", function () {
    $(".hide_when_thereisnoimage").removeClass("is-hidden");
    $(".hide_when_thereisnomap").addClass("is-hidden");
    $(".click_projects").removeClass("active");
    $(this).addClass("active");
    var citycode = String($(this).attr("data-citycode"));
    var type = String($(this).attr("data-type"));
    get_latlong_for_googlemap(citycode, type)
  });

  $(document).on("click", ".view_projects", function () {
    var citycode = String($(this).attr("data-citycode").toLowerCase());
    var type = String($(this).attr("data-type"));
    if (type == "Residential" || type == "residential") {
      $(".call_project").attr("href", "/residential-projects/" + citycode)
      $(".call_project").attr("target", "_blank");
    } else if (type == "Commercial" || type == "Commercial") {
      var Locationparam = citycode ? `location=${citycode}` : "";
      $(".call_project").attr("href", "/commercial-projects/?" + Locationparam)
      $(".call_project").attr("target", "_blank");
    }
  });

  function get_latlong_for_googlemap(citycode, type) {
    var formdata = {};

    formdata["dynamicurl"] = "managecontent/v1/cityprojectdata/list";
    formdata["cityid"] = citycode;
    formdata["propertycategory"] = type;

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      datatype: "json",
      data: formdata,
      // async: false,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        if (response.success == true && response.data.length > 0) {

          var zoom_level = "";
          $.each(response.data, function (i, item) {
            var array = [];
            var projectname_key = checkNUll(checkkeyexistornull(item, "ProjectName"));
            var project_slug_key = checkNUll(checkkeyexistornull(item, "Project_slug"));
            var address_key = checkNUll(checkkeyexistornull(item, "Address"));
            var citytextbind = checkNUll(checkkeyexistornull(item, "CityText").toLowerCase());
            if (i == 0) {
              zoom_level = (checkNUll(checkkeyexistornull(item, "zoom_level"))) ? item.zoom_level : "12";
            }
            var url_key = "";
            if (type == "Residential") {
              if (project_slug_key == "hyde" || project_slug_key == "regent") {
                url_key = `<b><p><a class='location-tooltip' href="https://www.prestigeconstructions.com/residential-projects/${citytextbind}/prestige-finsbury-park/${project_slug_key}">${projectname_key}</a></p></b><p> ${address_key}</p>`;

              } else if (project_slug_key == "apartments" || project_slug_key == "villas") {
                url_key = `<b><p><a class='location-tooltip' href="https://www.prestigeconstructions.com/residential-projects/${citytextbind}/prestige-lakeside-habitat/${project_slug_key}">${projectname_key}</a></p></b><p> ${address_key}</p>`;

              } else if (project_slug_key == "the-residences" || project_slug_key == "the-willows") {
                url_key = `<b><p><a class='location-tooltip' href="https://www.prestigeconstructions.com/residential-projects/${citytextbind}/prestige-park-grove/${project_slug_key}">${projectname_key}</a></p></b><p> ${address_key}</p>`;

              } else if (project_slug_key == "aspen-greens" || project_slug_key == "aston-park" || project_slug_key == "avalon-park" ||
                project_slug_key == "eden-park" || project_slug_key == "great-acres" || project_slug_key == "meridian-park") {
                url_key = `<b><p><a class='location-tooltip' href="https://www.prestigeconstructions.com/residential-projects/${citytextbind}/the-prestige-city-sarjapur/${project_slug_key}">${projectname_key}</a></p></b><p> ${address_key}</p>`;

              } else if (project_slug_key == "apartmentss" || project_slug_key == "bellagio") {
                url_key = `<b><p><a class='location-tooltip' href="https://www.prestigeconstructions.com/residential-projects/${citytextbind}/the-prestige-city-rajendra-nagar/${project_slug_key}">${projectname_key}</a></p></b><p> ${address_key}</p>`;

              } else if (project_slug_key == "bellanza" || project_slug_key == "siesta" || project_slug_key == "forest-hills") {
                url_key = `<b><p><a class='location-tooltip' href="https://www.prestigeconstructions.com/residential-projects/${citytextbind}/the-prestige-city-mulund/${project_slug_key}">${projectname_key}</a></p></b><p> ${address_key}</p>`;
              } else {
                url_key = `<b><p><a class='location-tooltip' href='https://www.prestigeconstructions.com/residential-projects/${citytextbind}/${project_slug_key}'>${projectname_key}</a></p></b><p> ${address_key}</p>`;
              }
            } else {
              url_key = `<b><p><a class='location-tooltip' href='javascript:void(0);'>${projectname_key}</a></p></b><p> ${address_key}</p>`;
            }
            if (checkNUll(item.LatLong) != "") {

              $.each(item.LatLong, function (a, latlong) {
                if (item.LatLong.coordinates.length > 0) {
                  var lat = parseFloat(item.LatLong.coordinates[0]);
                  var long = parseFloat(item.LatLong.coordinates[1]);
                  var locations = {
                    lat: lat,
                    lng: long,
                    projectname: projectname_key,
                    project_slug: project_slug_key,
                    address: address_key,
                    url: url_key,
                    zoom_level: zoom_level,
                  };
                  array.push(locations);
                } else { }
              });
              initMap(array);
            }

          });
        } else {
          showToast("Message", response.message);
        }
      },
      complete: function () {

      }
    });
  }
  let map;

  function initMap(locations) {

    const mapOptions = {
      zoom: parseInt(locations[0].zoom_level),
      center: {
        lat: parseFloat(locations[0].lat),
        lng: parseFloat(locations[0].lng)
      },
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    locations.forEach(location => {
      setTimeout(() => {
        var marker = new google.maps.Marker({
          position: {
            lat: parseFloat(location.lat),
            lng: parseFloat(location.lng)
          },
          map: map,
          icon: {
            url: "https://www.prestigeconstructions.com/resources/assets/images/mappin.svg",
            scaledSize: new google.maps.Size(30, 30)
          }
        });
        const infowindow = new google.maps.InfoWindow({
          content: location.url
        });
        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      }, 1000);

    });
  }



  function get_all_brands() {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/brands/list";
    formdata["is_available"] = true;
    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      datatype: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        $(".bind_our_brands_slider1").html("");
        $(".bind_our_brands_slider2").html("");
        if (response.success == true && response.data.length != 0) {
          $.each(response.data, function (i, item) {
            var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
            var alttextbind = "";
            if (checkNUll(alt_text) !== "") {
              alttextbind = "alt='" + alt_text + "'";
            } else {
              alttextbind = "";
            }
            var pnglogo = checkNUll(checkkeyexistornull(item, "pnglogo"));
            var ourbrand = `<li class="splide__slide">
                                                            <a href="https://www.prestigeconstructions.com/our-brands">
                                                                <picture>
                                                                    <source srcset="${changeToWebP(pnglogo)}" type="image/webp">
                                                                    <source srcset="${changeToWebP(pnglogo)}" type="image/png">
                                                                    <img loading="lazy" src="${changeToWebP(pnglogo)}" width="180" height="180" ${alttextbind} />
                                                                </picture>
                                                            </a>
                                                        </li>`;
            if (i % 2 == 0) {
              $(".bind_our_brands_slider1").append(ourbrand);
            } else {
              $(".bind_our_brands_slider2").append(ourbrand);
            }

          });
        } else {
          $(".section-offers").hide();
        }
      },
      complete: function (response) {
        if (response.responseJSON.success) {
          // our brand slider
          const splide2 = new Splide('#our-brand-logo-slider', {
            type: 'loop',
            gap: "15px",
            arrows: false,
            pagination: false,
            pauseOnHover: false,
            height: '180px',
            focus: 'center',
            autoWidth: true,
            autoScroll: {
              speed: 1,
            },
            breakpoints: {
              1408: {
                height: '160px',
              },
              1024: {
                height: '140px',
              },
              768: {
                height: '100px',
              },
            }
          });
          splide2.mount(window.splide.Extensions);
          const splide3 = new Splide('#our-brand-logo-slider2', {
            type: 'loop',
            gap: "15px",
            arrows: false,
            pagination: false,
            pauseOnHover: false,
            height: '180px',
            focus: 'center',
            direction: 'rtl',
            autoWidth: true,
            autoScroll: {
              speed: 1,
            },
            breakpoints: {
              1408: {
                height: '160px',
              },
              1024: {
                height: '140px',
              },
              768: {
                height: '100px',
              },
            }
          });
          splide3.mount(window.splide.Extensions);
          // our brand slider
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        if (xhr.status == "403" || xhr.status == 403) {
          logout();
        }
      }
    });
  }


  function get_all_featured_project(currentlocationbyipadress) {
    var formdata = {};
    formdata["page"] = 1;
    formdata["size"] = 20;
    formdata["is_featured"] = true;
    formdata["is_available"] = true;
    formdata["propertycategory"] = "Residential";
    formdata["dynamicurl"] = "managecontent/v1/projectinventorycms/list";

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      datatype: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        // console.log(response);

        $(".bind_featured_project_index").html("");
        if (response.success == true && response.data.length != 0) {
          $(".hide_featured_project").removeClass("is-hidden");
          var featured_project = [];
          $.each(response.data, function (i, item) {
            //console.log(item);
            var CityText = checkNUll(checkkeyexistornull(item, "CityText").toLowerCase());
            if (CityText === currentlocationbyipadress) {
              featured_project.unshift(item);

            } else {
              featured_project.push(item);
            }
          });
          $.each(featured_project, function (i, item) {
            var propertycategory = checkNUll(checkkeyexistornull(item, "PropertyCategory"));
            var ProjectName = checkNUll(checkkeyexistornull(item, "ProjectName"));
            var ProjectLogopng = checkNUll(checkkeyexistornull(item, "ProjectLogopng"));
            var ProjectImage = checkNUll(checkkeyexistornull(item, "ProjectImage"));
            var Address = checkNUll(checkkeyexistornull(item, "Address"));
            var PropertyTypeText = checkNUll(checkkeyexistornull(item, "PropertyTypeText"));
            var attributes = checkNUll(checkkeyexistornull(item, "attributes"));
            var Size = checkNUll(checkkeyexistornull(item, "Size"));
            var total_unit = checkkeyexistornull(item, "total_unit");
            var DisplayPrice = checkkeyexistornull(item, "DisplayPrice");
            var price_on_request = checkkeyexistornull(item, "price_on_request");
            var bedroomdisplaytext = checkkeyexistornull(item, "bedroomdisplaytext");
            var Project_slug = checkkeyexistornull(item, "Project_slug");
            var DisplayArea = checkNUll(checkkeyexistornull(item, "DisplayArea"));
            var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
            var ProjectLogo = checkNUll(checkkeyexistornull(item, "ProjectLogo"));
            var imagetobind = get_svg_or_png(ProjectLogopng, ProjectLogo);
            var svg_alt_text = checkNUll(checkkeyexistornull(item, "svglogo_alt_text"));
            var pnglogo_alt_text = checkNUll(checkkeyexistornull(item, "pnglogo_alt_text"));
            var imagetobindalttext = get_svg_or_png_alttext(ProjectLogopng, ProjectLogo, svg_alt_text, pnglogo_alt_text);
            var logoalttextbind = "";
            if (checkNUll(svg_alt_text) !== "") {
              logoalttextbind = "alt='" + imagetobindalttext + "'";
            } else {
              logoalttextbind = "";
            }

            var alt_text = checkNUll(checkkeyexistornull(item, "Featured_image_alt_text"));
            var alttextbind = "";
            if (checkNUll(alt_text) !== "") {
              alttextbind = "alt='" + alt_text + "'";
            } else {
              alttextbind = "";
            }

            var urlbind = "";
            var citytextbind = checkNUll(checkkeyexistornull(item, "CityText").toLowerCase());
            if (Project_slug == "hyde" || Project_slug == "regent") {
              urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-finsbury-park/${Project_slug}" class="block-link"></a>`;

            } else if (Project_slug == "apartments" || Project_slug == "villas") {
              urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-lakeside-habitat/${Project_slug}" class="block-link"></a>`;

            } else if (Project_slug == "the-residences" || Project_slug == "the-willows") {
              urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-park-grove/${Project_slug}" class="block-link"></a>`;

            } else if (Project_slug == "aspen-greens" || Project_slug == "aston-park" || Project_slug == "avalon-park" ||
              Project_slug == "eden-park" || Project_slug == "great-acres" || Project_slug == "meridian-park") {
              urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-sarjapur/${Project_slug}" class="block-link"></a>`;

            } else if (Project_slug == "apartmentss" || Project_slug == "bellagio") {
              urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-rajendra-nagar/${Project_slug}" class="block-link"></a>`;

            } else if (Project_slug == "bellanza" || Project_slug == "siesta" || Project_slug == "forest-hills") {
              urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-mulund/${Project_slug}" class="block-link"></a>`;

            } else if (Project_slug == "clover-leaf" || Project_slug == "villa") {
              urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-white-meadows/${Project_slug}" class="block-link"></a>`;

            } else if (Project_slug == "villa-in-kakkanad" || Project_slug == "apartments-in-kakkanad") {
              urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-hillside-gateway/${Project_slug}" class="block-link"></a>`;

            } else if (Project_slug == "oakwood" || Project_slug == "mulberry") {
              urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-indirapuram/${Project_slug}" class="block-link"></a>`;

            }
            else {
              if (propertycategory == "Residential") {
                urlbind = `<a href="https://www.prestigeconstructions.com/residential-projects/${citytextbind}/${item.Project_slug}" class="block-link"></a>`
              } else if (propertycategory == "Rental") {
                urlbind = `<a href="https://www.prestigeconstructions.com/rental-projects/${item.Project_slug}" class="block-link"></a>`
              } else {
                urlbind = `<a href="javascript:void(0);" class="block-link"></a>`
              }
            }

            var project_image = "",
              project_type = "",
              bind_bedrooms = "",
              bedrooms = "",
              size_bind = "",
              price_bind = "",
              unit_bind = "",
              project_logo = "";
            if (ProjectImage != "") {
              project_image = ` <div class="featured-projects-img">
                                                                    <picture>
                                                                        <source srcset="${changeToWebP(ProjectImage)}" type="image/webp">
                                                                        <source srcset="${ProjectImage}" type="image/jpg">
                                                                        <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(ProjectImage)}" ${alttextbind} width="650" height="370">
                                                                    </picture>
                                                                </div>`;
            }
            if (imagetobind != "") {
              project_logo = `  <div class="project-logo">
                                                            <picture>
                                                                <source srcset="${imagetobind}" type="image/webp">
                                                                <source srcset="${imagetobind}" type="image/png">
                                                                <img loading="lazy" src="${imagetobind}" ${logoalttextbind} width="70" height="70">
                                                            </picture>
                                                        </div>`;
            }
            if (PropertyTypeText != "") {
              project_type = ` <li>
                                                                                <div class="project-configurations-items">
                                                                                    <div class="project-configurations-icon">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-skyscraper" width="26" height="26" viewBox="0 0 26 26" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                            <path d="M3 21l18 0"></path>
                                                                                            <path d="M5 21v-14l8 -4v18"></path>
                                                                                            <path d="M19 21v-10l-6 -4"></path>
                                                                                            <path d="M9 9l0 .01"></path>
                                                                                            <path d="M9 12l0 .01"></path>
                                                                                            <path d="M9 15l0 .01"></path>
                                                                                            <path d="M9 18l0 .01"></path>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <div class="project-configurations-desc">
                                                                                        <h4>Project Type</h4>
                                                                                        <span>${PropertyTypeText}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>`;
            }
            if (Size != "") {
              size_bind = `<li>
                                                                                <div class="project-configurations-items">
                                                                                    <div class="project-configurations-icon">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                            <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                                            <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                                            <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                                            <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                                            <path d="M5 7l0 10"></path>
                                                                                            <path d="M7 5l10 0"></path>
                                                                                            <path d="M7 19l10 0"></path>
                                                                                            <path d="M19 7l0 10"></path>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <div class="project-configurations-desc">
                                                                                        <h4>Development Size</h4>
                                                                                        <span>${Size}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>`;
            }
            if (total_unit != "") {
              unit_bind = `<li>
                                                                                <div class="project-configurations-items">
                                                                                    <div class="project-configurations-icon">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                            <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                                            <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                                            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                                            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                                            <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                                            <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <div class="project-configurations-desc">
                                                                                        <h4>Total Units</h4>
                                                                                        <span>${total_unit} Units</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>`;
            }

            if (checkNUll(bedroomdisplaytext) != "") {
              bind_bedrooms = ` <li>
                                                       <div class="project-configurations-items">
                                                           <div class="project-configurations-icon">
                                                               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-inner" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                   <path d="M4 12l16 0"></path>
                                                                   <path d="M12 4l0 16"></path>
                                                                   <path d="M4 4l0 .01"></path>
                                                                   <path d="M8 4l0 .01"></path>
                                                                   <path d="M16 4l0 .01"></path>
                                                                   <path d="M20 4l0 .01"></path>
                                                                   <path d="M4 8l0 .01"></path>
                                                                   <path d="M20 8l0 .01"></path>
                                                                   <path d="M4 16l0 .01"></path>
                                                                   <path d="M20 16l0 .01"></path>
                                                                   <path d="M4 20l0 .01"></path>
                                                                   <path d="M8 20l0 .01"></path>
                                                                   <path d="M16 20l0 .01"></path>
                                                                   <path d="M20 20l0 .01"></path>
                                                               </svg>
                                                           </div>
                                                           <div class="project-configurations-desc">
                                                               <h4>Bedrooms</h4>
                                                               <span>${bedroomdisplaytext}</span>
                                                           </div>
                                                       </div>
                                                   </li>`;
            }
            if (checkNUll(item.price_on_request) == true || checkNUll(item.price_on_request) == "true") {
              price_bind = ` <li class="project-price-and-contact-item project-price  open_enquirey_sidebar" data-projectid='${item.ProjectID}' data-projectname='${ProjectName}'>
                                                                            <span class="theme-btn full-width">Price on Request</span>
                                                                        </li>`;
            } else {
              if (checkNUll(DisplayPrice) != "") {
                price_bind = ` <li class="project-price-and-contact-item project-price">
                                                                            <span class="theme-btn full-width">${DisplayPrice}</span>
                                                                        </li>`;
              }
            }
            var bind_all_ul_li = "";
            if (project_type != "" || bind_bedrooms != "" || size_bind != "" || unit_bind != "") {
              bind_all_ul_li = `<div class="project-configurations">
                                                                    <ul>
                                                                       ${project_type}
                                                                       ${bind_bedrooms}
                                                                        ${size_bind}
                                                                        ${unit_bind}
                                                                    </ul>
                                                                </div>`;
            }
            var bind_area = '';

            if (DisplayArea != "") {
              bind_area = `<span>${DisplayArea}, ${CityText}</span>`;
            } else {
              if (CityText != "") {
                bind_area = `<span>${CityText}</span>`;
              }

            }

            var row = `<li class="splide__slide">
                                                <div class="horizontal-projects-block">
                                                    <div class="columns is-multiline is-gapless is-vcentered featured-projects-cols">
                                                        <div class="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen featured-projects-col">
                                                           ${project_image}
                                                           ${urlbind}
                                                        </div>
                                                        <div class="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen featured-projects-col">
                                                            <div class="project-detail p-5">
                                                                <div class="is-flex is-align-items-center is-gap-4">
                                                                   ${project_logo}
                                                                    <div class="project-title">
                                                                        <h4>${ProjectName}</h4>
                                                                        ${bind_area}
                                                                    </div>
                                                                </div>
                                                                ${bind_all_ul_li}
                                                                <div class="project-price-and-contact">
                                                                    <ul>
                                                                       ${price_bind}
                                                                        <li class="project-price-and-contact-item hide_contact_number${i} is-hidden">
                                                                            <a href="javascript:void(0);" class="theme-btn line-btn bind_contcat_number${i}">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                                                                </svg>
                                                                            </a>
                                                                        </li>
                                                                        <li class="project-price-and-contact-item">
                                                                            <a href="javascript:void(0);" class="theme-btn line-btn">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send open_enquirey_sidebar_featured enquirylabel" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <path d="M10 14l11 -11" />
                                                                                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                                                                </svg>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                ${urlbind}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>`;
            $(".bind_featured_project_index").append(row);
            var ContactNumber = checkkeyexistornull(item, "ContactNumber");
            var callingcontact = checkNUll(checkkeyexistornull(item, "callingcontact"));
            if (checkNUll(callingcontact) != "") {
              callingcontact = callingcontact.replace(/\s/g, '');
              $(".hide_contact_number" + i).removeClass("is-hidden");
              $(".bind_contcat_number" + i).attr("href", "tel:" + ContactNumber);
            } else {
              $(".hide_contact_number" + i).addClass("is-hidden");
            }
          });
        } else {
          $(".hide_featured_project").addClass("is-hidden");
        }

      },
      complete: function () {
        // feature project slider
        new Splide("#featured-projects-slider", {
          gap: "30px",
          type: "slide",
          perPage: 1,
          perMove: 1,
          padding: {
            right: "130px"
          },
          pagination: !1,
          breakpoints: {
            1408: {
              perPage: 1,
              padding: {
                right: "100px"
              }
            },
            1216: {
              perPage: 1,
              padding: {
                right: "0px"
              }
            },
            1024: {
              perPage: 2,
              gap: "24px"
            },
            768: {
              perPage: 1
            }
          }
        }).mount();

        // feature project slider
      },
      error: function (xhr, ajaxOptions, thrownError) {
        if (xhr.status == "403" || xhr.status == 403) {
          logout();
        }
      }
    });

  }

  $(document).on("click", ".open_enquirey_sidebar_featured", function () {
    $("label.error").remove();
    $("#enquire-sidebar").addClass("active");
  });

  function getallabouts() {
    var formdata = {};
    formdata["is_available"] = "1";
    formdata["dynamicurl"] = "managecontent/v1/aboutus/list";
    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        if (response.success == true && response.data.length > 0) {
          $('#about_details_bind').html("");
          $.each(response.data, function (i, item) {
            var aboutlogo = checkkeyexistornull(item, "aboutlogo");
            if (checkNUll(aboutlogo) != "") {
              var aboutlogobind = `<picture>
                                                    <source srcset="${changeToWebP(aboutlogo)}" type="image/webp">
                                                    <source srcset="${changeToWebP(aboutlogo)}" type="image/png">
                                                    <img loading="lazy" src="${changeToWebP(aboutlogo)}" alt="Crisil Logo" width="110" height="50">
                                                </picture>`;
            }
            var title = checkkeyexistornull(item, "about_title");
            if (checkNUll(title) != "") {
              titlebind = item.about_title;
            }

            var description = checkkeyexistornull(item, "description");
            if (checkNUll(description) != "") {
              descriptionbind = item.description;
            }
            var row = `<div class="about-us-detail js-scroll fade-in-top scrolled">
                                                <div class="is-flex is-align-items-center mb-5">
                                                    <div class="about-us-logo pr-5">
                                                    ${aboutlogobind}
                                                    </div>
                                                    <div class="about-us-title section-title pl-5  border-left border-theme">
                                                    <span>Only CRISIL DA1+ rated</span> <h1>Real Estate Developer in India</h1>
                                                    </div>
                                                </div>
                                                <p>One of India's most trusted and respected names in Real Estate - PRESTIGE ESTATES PROJECTS LIMITED (The Prestige Group} is synonymous with innovation and luxurious living. Since 1986, Prestige has helped build his face of Modern Urban India in its glorious globalized avatar by consistently introducing and creating state-of-the-art transformative real estate concepts, technologies and innovations.</p>
                                                <a class="know-more-btn with-horizontal-arrow" href="./about-us">
                                                <span>See Details</span>
                                                <div class="know-more-btn-icon">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 12H22" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M19 16L23 12" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M19 8L23 12" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>`;
            $('#about_details_bind').append(row);

            $.each(item.AboutUsList, function (i, item1) {
              var AboutUsList = "";
              var aboutcount = '';
              var count = item1.count;
              var cleanedExpression = count.replace("+", "");
              cleanedExpression = parseInt(cleanedExpression);
              var aa = `<div class="column is-6-mobile is-6-tablet is-6-desktop is-6-widescreen about-us-counter-col">
                                    <div class="about-us-counter-item">
                                        <div class="counter-block">
                                            <h3 class="counter">
                                                <span data-purecounter-start="0" data-purecounter-end="${cleanedExpression}" data-purecounter-separator="true" data-purecounter-separatorsymbol="," data-purecounter-once="false" data-purecounter-once="true" class="purecounter" id="myForm3">35</span>+
                                            </h3>
                                            <p>${item1.lable}</p>
                                        </div>
                                    </div>
                                </div>`;
              $('.appendcount').append(aa);
            });

          });
        } else {
          // showToast("Message", response.message);
        }
      },
      complete: function () {
        $(".theme-loader").removeClass("active");
        new PureCounter({
          // Setting that can't' be overriden on pre-element
          selector: ".purecounter", // HTML query selector for spesific element

          // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
          start: 0, // Starting number [uint]
          end: 100, // End number [uint]
          duration: 4, // The time in seconds for the animation to complete [seconds]
          delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
          once: true, // Counting at once or recount when the element in view [boolean]
          pulse: false, // Repeat count for certain time [boolean:false|seconds]
          decimals: 0, // How many decimal places to show. [uint]
          legacy: true, // If this is true it will use the scroll event listener on browsers
          filesizing: false, // This will enable/disable File Size format [boolean]
          currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
          formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
          separator: false // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
        });

      },
      error: function (response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response.responseJSON.message);
      }
    });

  }

  function getallmember() {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/directors/list";
    formdata["is_available"] = true;
    formdata["boardofmembers"] = "Board of directors";
    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        if (response.success == true && response.data.length > 0) {
          $.each(response.data, function (i, item) {
            var image = checkNUll(checkkeyexistornull(item, "image"));
            var directorsname = checkNUll(checkkeyexistornull(item, "directorsname"));
            var designation = checkNUll(checkkeyexistornull(item, "designation"));
            var url = "javascript:void(0);";
            if (checkNUll(item.directorslug) != "") {
              url = `https://www.prestigeconstructions.com/about-us/board-of-directors/${item.directorslug}`;
            }
            var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
            var alttextbind = "";
            if (checkNUll(alt_text) !== "") {
              alttextbind = "alt='" + alt_text + "'";
            } else {
              alttextbind = "";
            }
            var executive_directors = `<li class="splide__slide">
                                    <div class="theme-block">
                                        <div class="theme-block-img theme-block-img-with-link">
                                        <picture>
                                                <source srcset="${changeToWebP(image)}" type="image/webp">
                                                <source srcset="${changeToWebP(image)}" type="image/png">
                                                <img loading="lazy" class="square-img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind} width="350" height="350">
                                                </picture>
                                            <a href="${url}" class="theme-block-icon">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.20557 17.7941L17.0996 3.9001" stroke="white" stroke-width="0.982456" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M17.7943 8.76318V3.20557" stroke="white" stroke-width="0.982456" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.2367 3.20557H17.7943" stroke="white" stroke-width="0.982456" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div class="theme-block-title">
                                            <h4 class="is-capitalized">${directorsname}</h4>
                                            <span class="is-capitalized">${designation}</span>
<a href="${url}" class="block-link"></a>
                                        </div>
                                    </div>
                                </li>`;

            $(".append-directors").append(executive_directors);

          });
        } else {
          $('.board-member').hide();
          // showToast("Message", response.message);
        }
      },
      complete: function () {
        // director slider
        new Splide("#board-of-director-slider", {
          gap: "30px",
          type: "slide",
          perPage: 3,
          perMove: 1,
          pagination: !1,
          breakpoints: {
            1024: {
              perPage: 2,
              gap: "24px"
            },
            768: {
              perPage: 1
            }
          }
        }).mount();
        // director slider
      },
      error: function (response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response.responseJSON.message);
      }
    });
  }

  function get_all_slider(currentlocationbyipadress) {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v2/slider/list";
    formdata["is_available"] = true;
    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        if (response.success == true && response.data.length > 0) {
          var allSliders = [];
          $.each(response.data, function (i, item) {
            var cityText = checkNUll(checkkeyexistornull(item.projectdetails[0], "CityText").toLowerCase());
            if (cityText === currentlocationbyipadress) {
              allSliders.unshift(item);
            } else {
              allSliders.push(item);
            }

            // Only preload the first matched slider images (all sizes & types)
            if (i === 0) {
              if (item.slider_type === "video") {
                let app_video_url = checkNUll(checkkeyexistornull(item, "app_video_url"));
                let slider_video_medium = checkNUll(checkkeyexistornull(item, "slider_video_medium"));
                let slider_video_large = checkNUll(checkkeyexistornull(item, "slider_video_large"));
                let slider_video_extralarge = checkNUll(checkkeyexistornull(item, "slider_video_extralarge"));
                let preloadUrl = checkNUll(checkkeyexistornull(item, "media_url")) || slider_video_extralarge || slider_video_large || slider_video_medium || app_video_url;
                if (preloadUrl !== "") {
                  $('head').append(`<link rel="preload" as="video" href="${preloadUrl}">`);
                }
              } else {
                // Preload only WebP responsive images with different sizes
                const imagesToPreload = [
                  changeToWebP(checkNUll(checkkeyexistornull(item, "app_image_url"))),
                  changeToWebP(checkNUll(checkkeyexistornull(item, "slider_image_medium"))),
                  changeToWebP(checkNUll(checkkeyexistornull(item, "slider_image_large"))),
                  changeToWebP(checkNUll(checkkeyexistornull(item, "slider_image_extralarge"))),
                ];

                imagesToPreload.forEach((url) => {
                  if (url !== "") {
                    $('head').append(`<link fetchpriority="high" rel="preload" as="image" href="${url}" type="image/webp">`);
                  }
                });
              }
            }

          });

          $.each(allSliders, function (i, item) {
            var lazyload = "";
            if (i != 0) {
              lazyload = "loading='lazy'";
            } else {
              lazyload = "fetchpriority='high' loading='eager' decoding='async'";
            }

            var redirect_url_show = checkNUll(checkkeyexistornull(item, "redirect_url_show"));
            var redirect_url = checkNUll(checkkeyexistornull(item, "redirect_url"));
            var slider_type = checkNUll(checkkeyexistornull(item, "slider_type"));
            var media_url = checkNUll(checkkeyexistornull(item, "media_url"));
            var app_video_url = checkNUll(checkkeyexistornull(item, "app_video_url"));
            var slider_video_medium = checkNUll(checkkeyexistornull(item, "slider_video_medium"));
            var slider_video_large = checkNUll(checkkeyexistornull(item, "slider_video_large"));
            var slider_video_extralarge = checkNUll(checkkeyexistornull(item, "slider_video_extralarge"));
            var projectdetails = checkNUll(checkkeyexistornull(item, "projectdetails"));
            var app_image_url = checkNUll(checkkeyexistornull(item, "app_image_url"));
            var slider_image_medium = checkNUll(checkkeyexistornull(item, "slider_image_medium"));
            var slider_image_large = checkNUll(checkkeyexistornull(item, "slider_image_large"));
            var slider_image_extralarge = checkNUll(checkkeyexistornull(item, "slider_image_extralarge"));
            var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
            var alttextbind = "";
            if (checkNUll(alt_text) !== "") {
              alttextbind = "alt='" + alt_text + "'";
            } else {
              alttextbind = "";
            }
            var bind_banner_image = "";


            if (slider_type != "") {
              if (slider_type == "video") {
                var videoSources = "";
                if (app_video_url !== "") {
                  videoSources += `<source media="(max-width:420px)" src="${app_video_url}" type="video/mp4">`;
                }
                if (slider_video_medium !== "") {
                  videoSources += `<source media="(max-width:767px)" src="${slider_video_medium}" type="video/mp4">`;
                }
                if (slider_video_large !== "") {
                  videoSources += `<source media="(max-width:1380px)" src="${slider_video_large}" type="video/mp4">`;
                }
                if (slider_video_extralarge !== "") {
                  videoSources += `<source src="${slider_video_extralarge}" type="video/mp4">`;
                }
                if (media_url !== "" && media_url !== slider_video_extralarge) {
                  videoSources += `<source src="${media_url}" type="video/mp4">`;
                }
                if (videoSources === "") {
                  var fallbackVid = media_url || slider_video_extralarge || slider_video_large || slider_video_medium || app_video_url;
                  if (fallbackVid !== "") {
                    videoSources = `<source src="${fallbackVid}" type="video/mp4">`;
                  }
                }
                bind_banner_image = ` <video width="" height="" autoplay="" muted="" loop="" playsinline="">
                                          ${videoSources}
                                      </video>`;
              } else {
                // bind_banner_image = ` <picture>
                //                                 <img src="${changeToWebP(media_url)}" alt="Logo" width="150" height="50">
                //                           </picture>`
                bind_banner_image = `<picture>
                                                        <source media="(max-width:420px)" srcset="${changeToWebP(app_image_url)}" type="image/webp">
                                                        <source media="(max-width:420px)" srcset="${app_image_url}" type="image/jpg">
                                                        <source media="(max-width:767px)" srcset="${changeToWebP(slider_image_medium)}" type="image/webp">
                                                        <source media="(max-width:767px)" srcset="${slider_image_medium}" type="image/jpg">
                                                        <source media="(max-width:1380px)" srcset="${changeToWebP(slider_image_large)}" type="image/webp">
                                                        <source media="(max-width:1380px)" srcset="${slider_image_large}" type="image/jpg">
                                                        <source srcset="${changeToWebP(slider_image_extralarge)}" type="image/webp">
                                                        <source srcset="${slider_image_extralarge}" type="image/jpg">
                                                        <img src="${changeToWebP(slider_image_extralarge)}" ${lazyload} width="1350" height="600" ${alttextbind}>
                                                    </picture>`;
              }
            } else {
              bind_banner_image = ` <video width="" height="" autoplay="" muted="" loop="" playsinline="">
                                                                    <source src="https://www.prestigeconstructions.com/media/images/home/banner/prestige-lavender-fields-video.mp4" type="video/mp4">
                                                          </video>`;
            }
            var bind_project_logo = "",
              bind_project_city = "",
              bind_project_price = "",
              bind_project_name = "";
            var project_data = "";
            var url = "javascript:void(0);"
            if (checkNUll(item.projectdetailshow)) {
              if (projectdetails.length > 0) {

                var propertycategory = checkNUll(checkkeyexistornull(projectdetails[0], "PropertyCategory"));
                var citytextbind = checkNUll(checkkeyexistornull(projectdetails[0], "CityText").toLowerCase());
                var ProjectLogo = checkNUll(checkkeyexistornull(projectdetails[0], "ProjectLogo"));
                var ProjectLogopng = checkNUll(checkkeyexistornull(projectdetails[0], "ProjectLogopng"));
                var ProjectName = checkNUll(checkkeyexistornull(projectdetails[0], "ProjectName"));
                var CityText = checkNUll(checkkeyexistornull(projectdetails[0], "CityText"));
                var DisplayPrice = checkNUll(checkkeyexistornull(projectdetails[0], "DisplayPrice"));
                var imagetobind = get_svg_or_png(ProjectLogopng, ProjectLogo);
                var svg_alt_text = checkNUll(checkkeyexistornull(projectdetails[0], "svglogo_alt_text"));
                var pnglogo_alt_text = checkNUll(checkkeyexistornull(projectdetails[0], "pnglogo_alt_text"));
                var imagetobindalttext = get_svg_or_png_alttext(ProjectLogopng, ProjectLogo, svg_alt_text, pnglogo_alt_text);
                var logoalttextbind = "";
                if (checkNUll(svg_alt_text) !== "") {
                  logoalttextbind = "alt='" + imagetobindalttext + "'";
                } else {
                  logoalttextbind = "";
                }

                if (checkNUll(imagetobind) != "") {
                  bind_project_logo = ` <div class="section-banner-text-logo">
                                                                 <picture>
                                                                    <img src="${imagetobind}" ${logoalttextbind} width="150" height="50">
                                                                 </picture>
                                                               </div>`;
                }
                if (ProjectName != "") {
                  bind_project_name = `<div class="section-title">
                                                                 <h3>${ProjectName}</h3>
                                                             </div>`
                }
                if (CityText != "") {
                  bind_project_city = ` <li>
                                                                  <span class="has-text-weight-medium">${CityText}</span>
                                                              </li>`;
                }
                if (DisplayPrice != "") {
                  bind_project_price = ` <li>
                                                                  <span class="has-text-weight-medium">${DisplayPrice}</span>
                                                              </li>`;
                }
                var bind_bottom_data = "";
                if (DisplayPrice != "" || CityText != "") {
                  bind_bottom_data = `<div class="banner-text-project-desc">
                                                                                        <ul class="is-flex is-flex-wrap-wrap is-gap-1">
                                                                                           ${bind_project_city}
                                                                                            ${bind_project_price}
                                                                                        </ul>
                                                                                    </div>`;
                }
                if (redirect_url_show == "true") {
                  url = redirect_url;
                } else {
                  if (checkNUll(item.projectdetails[0].Project_slug) != "") {
                    if (item.projectdetails[0].Project_slug == "hyde" || item.projectdetails[0].Project_slug == "regent") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-finsbury-park/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "apartments" || item.projectdetails[0].Project_slug == "villas") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-lakeside-habitat/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "the-residences" || item.projectdetails[0].Project_slug == "the-willows") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-park-grove/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "aspen-greens" || item.projectdetails[0].Project_slug == "aston-park" || item.projectdetails[0].Project_slug == "avalon-park" ||
                      item.projectdetails[0].Project_slug == "eden-park" || item.projectdetails[0].Project_slug == "great-acres" || item.projectdetails[0].Project_slug == "meridian-park") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-sarjapur/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "apartmentss" || item.projectdetails[0].Project_slug == "bellagio") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-rajendra-nagar/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "bellanza" || item.projectdetails[0].Project_slug == "siesta" || item.projectdetails[0].Project_slug == "forest-hills") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-mulund/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else {
                      if (propertycategory == "Residential") {
                        url = `https://www.prestigeconstructions.com/residential-projects/${citytextbind}/${item.projectdetails[0].Project_slug}`;
                      } else if (propertycategory == "Rental") {
                        url = `https://www.prestigeconstructions.com/rental-projects/${item.projectdetails[0].Project_slug}`;
                      } else {
                        url = `javascript:void(0);`;
                      }
                    }
                  }
                }


                project_data = `<div class="section-banner-text js-scroll fade-in-top delay12 scrolled"><div class="container">
                                                                            <div class="section-banner-detail">
                                                                               ${bind_project_logo}
                                                                                <div class="section-banner-text-desc">
                                                                                    ${bind_project_name}
                                                                                    ${bind_bottom_data}
                                                                                </div>
                                                                                <a class="know-more-btn dark" href="${url}">
                                                                                    <span>See Details</span>
                                                                                    <div class="know-more-btn-icon">
                                                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path d="M1.05078 5.05029L10.9503 5.05029" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                                            <path d="M1.05036 14.9498L10.9499 5.05028" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                                            <path d="M10.9497 14.9497L10.9497 5.05025" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div></div>`;
              }
            } else {

              if (projectdetails.length > 0) {
                if (redirect_url_show == "true") {
                  url = redirect_url;
                } else {
                  if (checkNUll(item.projectdetails[0].Project_slug) != "") {
                    if (item.projectdetails[0].Project_slug == "hyde" || item.projectdetails[0].Project_slug == "regent") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-finsbury-park/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "apartments" || item.projectdetails[0].Project_slug == "villas") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-lakeside-habitat/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "the-residences" || item.projectdetails[0].Project_slug == "the-willows") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-park-grove/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "aspen-greens" || item.projectdetails[0].Project_slug == "aston-park" || item.projectdetails[0].Project_slug == "avalon-park" ||
                      item.projectdetails[0].Project_slug == "eden-park" || item.projectdetails[0].Project_slug == "great-acres" || item.projectdetails[0].Project_slug == "meridian-park") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-sarjapur/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "apartmentss" || item.projectdetails[0].Project_slug == "bellagio") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-rajendra-nagar/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else if (item.projectdetails[0].Project_slug == "bellanza" || item.projectdetails[0].Project_slug == "siesta" || item.projectdetails[0].Project_slug == "forest-hills") {
                      url = `<a href="https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-mulund/${item.projectdetails[0].Project_slug}" class="block-link"></a>`;

                    } else {
                      var propertycategory = checkNUll(checkkeyexistornull(projectdetails[0], "PropertyCategory"));
                      var citytextbind = checkNUll(checkkeyexistornull(projectdetails[0], "CityText").toLowerCase());
                      if (propertycategory == "Residential") {
                        url = `https://www.prestigeconstructions.com/residential-projects/${citytextbind}/${item.projectdetails[0].Project_slug}`;
                      } else if (propertycategory == "Rental") {
                        url = `https://www.prestigeconstructions.com/rental-projects/${item.projectdetails[0].Project_slug}`;
                      } else {
                        url = "javascript:void(0);";
                      }
                    }
                  }
                }
              } else {
                if (redirect_url_show == "true") {
                  url = redirect_url;
                } else {
                  url = `javascript:void(0);`;
                }
              }
            }
            var slider_bind = `<li class="splide__slide" data-id="${item._id}">
                                                        <div class="section-banner-video">
                                                            <a href="${url}">
                                                               ${bind_banner_image}</a>
                                                                ${project_data}
                                                             </div>
                                                        </li>`;

            if ($(".bind_slider li[data-id='" + item._id + "']").length == 0) {
              if (i === 0 && $(".bind_slider li").length > 0 && item.projectdetails && item.projectdetails[0] && item.projectdetails[0].CityText && item.projectdetails[0].CityText.toLowerCase() === currentlocationbyipadress) {
                $(".bind_slider").prepend(slider_bind);
              } else if (i === 0) {
                // Only keep the first slide — skip all others
                $(".bind_slider").append(slider_bind);
              }
            }

          });
        } else {
          $('.board-member').hide();
          // showToast("Message", response.message);
        }
      },
      complete: function () {
        // Main Slider — single image, no carousel
        new Splide("#main-slider", {
          gap: "0px",
          type: "slide",
          autoplay: false,
          interval: 0,
          speed: 0,
          perPage: 1,
          perMove: 1,
          pagination: false,
          arrows: false,
          drag: false,
          breakpoints: {
            1408: { perPage: 1 },
            1216: { perPage: 1 },
            1024: { perPage: 1 },
            768:  { perPage: 1 }
          }
        }).mount();
        // End Main Slider
      },
      error: function (response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response.responseJSON.message);
      }
    });
  }


  $(document).on("input", ".customsearch", function () {
    var selectedLocation = $("#locationbind").val() ? $("#locationbind").val().toLowerCase() : "";
    var selectedprojecttype = $("#projecttype").val() ? $('#projecttype option:selected').attr('data-propertyttype') : "";
    // console.log(selectedprojecttype);
    var selectedconstruction = $("#constructionstatus").val() ? $("#constructionstatus").val() : "";
    var selectedbedrooms = $("#bedroomsbind").val() ? $("#bedroomsbind").val() : "";
    setTimeout(() => {
      var buyRentText = $(".buyrentdata.is-active").attr("data-type");
      var minprice = "";
      var maxprice = "";
      if (buyRentText === "Buy" || buyRentText === "Rent") {
        minprice = parseInt($("#index_from").val());
        maxprice = parseInt($("#index_to").val());
      }
      filterlocationbind(selectedLocation, selectedprojecttype, selectedconstruction, selectedbedrooms, minprice, maxprice)
    }, 1000);
  });

  var searchFilterCountCache = {};
  var searchFilterCountPromises = {};

  function filterlocationbind(selectedLocation = "", selectedprojecttype = "", selectedconstruction = "", selectedbedrooms = "", minprice = "", maxprice = "") {
    var buyRentText = $(".buyrentdata.is-active").attr("data-type") || "Buy";
    var cacheKey = buyRentText + '_' + selectedLocation + '_' + selectedprojecttype + '_' + selectedconstruction + '_' + selectedbedrooms + '_' + minprice + '_' + maxprice;

    if (typeof searchFilterCountCache[cacheKey] !== "undefined") {
      $(".appendsearchcount").text(searchFilterCountCache[cacheKey]);
      return;
    }

    if (searchFilterCountPromises[cacheKey]) {
      searchFilterCountPromises[cacheKey].done(function() {
        if (typeof searchFilterCountCache[cacheKey] !== "undefined") {
          $(".appendsearchcount").text(searchFilterCountCache[cacheKey]);
        }
      });
      return;
    }

    var formdata = {};
    if (selectedLocation) {
      formdata["CityText"] = selectedLocation;
    }
    if (selectedprojecttype) {
      formdata["PropertyType"] = selectedprojecttype;
    }
    if (selectedconstruction) {
      formdata["statusfilter"] = selectedconstruction;
    }
    if (selectedbedrooms) {
      formdata["typeid"] = selectedbedrooms;
    }
    if (buyRentText === "Buy" || buyRentText === "Rent") {
      formdata["minprice"] = minprice;
      formdata["maxprice"] = maxprice;
    }
    if (buyRentText === "Buy") {
      formdata["dynamicurl"] = "managecontent/v1/projectcount/afterfilter";
      formdata['propertycategory'] = "Residential";
    } else if (buyRentText === "Rent") {
      formdata["dynamicurl"] = "managecontent/v1/rrprojectcount/afterfilter";
    } else {
      formdata["dynamicurl"] = "managecontent/v1/projectcount/afterfilter";
      formdata['propertycategory'] = "Commercial";

    }
    $(".searchbinds").addClass("disabled").css({ "pointer-events": "none", "opacity": "0.5" });

    searchFilterCountPromises[cacheKey] = $.ajax({
      type: "POST",
      dataType: 'json',
      url: "https://www.prestigeconstructions.com/api/apicall",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        var totalProperties = "0";
        if (response.success == true && response.data.length != 0) {
          $(".appendsearchcount").html("");
          if (response.data[0] && response.data[0].count) {
            totalProperties = response.data[0].count;
            $(".appendsearchcount").text(totalProperties);
          } else {
            $(".appendsearchcount").html("").append("0");
          }
        } else {
          $(".appendsearchcount").html("").append("0");
        }
        searchFilterCountCache[cacheKey] = totalProperties;
      },
      error: function () {
        searchFilterCountPromises[cacheKey] = null;
      },
      complete: function () {
        setTimeout(() => {

          // $(".searchbinds").removeClass("disabled").css("pointer-events", "auto");
          $(".searchbinds").removeClass("disabled").css({ "pointer-events": "auto", "opacity": "1" });
        }, 800);
      }
    });
  }

  $(document).on("click", ".searchbind", function () {
    var selectedLocation = ""
    if (checkNUll($("#locationbind").val()) != "") {
      selectedLocation = $("#locationbind").val().toLowerCase();
    }

    var selectedprojecttype = $("#projecttype").val();
    var selectedconstruction = $("#constructionstatus").val();
    var selectedbedrooms = $("#bedroomsbind").val();
    var minprice = parseInt($("#index_from").val());
    var maxprice = parseInt($("#index_to").val());
    // var bind_url = `?search=${selectedsearch}&location=${selectedLocation}&propertytype=${selectedprojecttype}&construction=${selectedconstruction}&dbedrooms=${selectedbedrooms}&minprice=${minprice}&maxprice=${maxprice}`
    var Locationparam = selectedLocation ? `location=${selectedLocation}` : "";
    var projecttypeparam = selectedprojecttype ? `&propertytype=${selectedprojecttype}` : "";
    var constructionparam = selectedconstruction ? `&construction=${selectedconstruction}` : "";
    var dbedroomsparam = selectedbedrooms ? `&dbedrooms=${selectedbedrooms}` : "";
    var minpriceparam = "";
    var maxpriceparam = "";

    var buyRentText = $(".buyrentdata.is-active").attr("data-type");
    if (buyRentText === "Buy" || buyRentText === "Rent") {
      minpriceparam = minprice ? `&minprice=${minprice}` : "&minprice=0";
      maxpriceparam = maxprice ? `&maxprice=${maxprice}` : "";

    }

    var bind_url = `?${Locationparam}${projecttypeparam}${constructionparam}${dbedroomsparam}${minpriceparam}${maxpriceparam}`;

    if (parseInt($(".appendsearchcount").text()) !== 0 && checkNUll($(".appendsearchcount").text()) !== "") {
      let basePath = "https://www.prestigeconstructions.com/";
      var languagePrefix = $("html").attr("lang");

      // Only add language prefix if it's not English
      if (languagePrefix && languagePrefix !== "en") {
        basePath += languagePrefix + "/";
      }

      if (buyRentText === "Buy") {
        $(".searchbinds").attr("href", basePath + "residential-projects/" + bind_url);
      } else if (buyRentText === "Rent") {
        $(".searchbinds").attr("href", basePath + "rental-projects/" + bind_url);
      } else {
        $(".searchbinds").attr("href", basePath + "commercial-projects/" + bind_url);
      }
    }




  });


  $(document).on("click", ".buyrentdata", function () {
    $(".buyrentdata").removeClass("is-active");
    $(this).addClass("is-active");

    var buyRentText = $(this).attr("data-type");

    if (typeof searchDropdownCache !== "undefined") {
      if (!searchDropdownCache.property_type[buyRentText] && !searchDropdownCache.promises.property_type[buyRentText]) {
        $("#projecttype").html("<option value='' selected disabled>Fetching..</option>");
      }
      if (!searchDropdownCache.location[buyRentText] && !searchDropdownCache.promises.location[buyRentText]) {
        $("#locationbind").html("<option value='' selected disabled>Fetching..</option>");
      }
      if (!searchDropdownCache.construction_status[buyRentText] && !searchDropdownCache.promises.construction_status[buyRentText]) {
        $("#constructionstatus").html("<option value='' selected disabled>Fetching..</option>");
      }
      if (!searchDropdownCache.bedrooms && !searchDropdownCache.promises.bedrooms) {
        $("#bedroomsbind").html("<option value='' selected disabled>Fetching..</option>");
      }
    } else {
      $("#projecttype").html("<option value='' selected disabled>Fetching..</option>");
      $("#locationbind").html("<option value='' selected disabled>Fetching..</option>");
      $("#constructionstatus").html("<option value='' selected disabled>Fetching..</option>");
      $("#bedroomsbind").html("<option value='' selected disabled>Fetching..</option>");
    }

    $(".appendsearchcount").text("0");

    if (document.querySelector('#index_from')) document.querySelector('#index_from').value = '0';
    if (document.querySelector('#index_to')) document.querySelector('#index_to').value = '1000000000';
    if ($(".index-range-slider").length && $(".index-range-slider").data("ionRangeSlider")) {
      $(".index-range-slider").data("ionRangeSlider").reset();
    }
    bind_search_dropdown();
  });