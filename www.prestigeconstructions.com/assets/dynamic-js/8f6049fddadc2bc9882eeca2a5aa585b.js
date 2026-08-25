$(document).ready(function () {
    getallrecentproject();
  });

  function getallrecentproject() {
    var formdata = {};
    formdata["dynamicurl"] = 'managecontent/v1/recentview/project/list';
    formdata["token"] = deviceId;

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function (response) {
        // $('.append-recent-viewed').html('');
        if (response.success == true && response.data.length > 0) {
          $.each(response.data.slice(0, 10), function (i, item) {
            $.each(item.projectdata, function (i, element) {
              var ProjectImage = checkNUll(checkkeyexistornull(element, "ProjectImage")) != "" ? checkNUll(checkkeyexistornull(element, "ProjectImage")) : checkNUll(checkkeyexistornull(element, "projectimage"));
              var ProjectUrl = checkNUll(checkkeyexistornull(item, "page_url"));
              var ProjectLogo = checkNUll(checkkeyexistornull(element, "ProjectLogo")) != "" ? checkNUll(checkkeyexistornull(element, "ProjectLogo")) : checkNUll(checkkeyexistornull(element, "projectlogo"));
              var ProjectName = checkNUll(checkkeyexistornull(element, "ProjectName")) != "" ? checkNUll(checkkeyexistornull(element, "ProjectName")) : checkNUll(checkkeyexistornull(element, "projectname"));
              var alt_text = checkNUll(checkkeyexistornull(element, "Featured_image_alt_text"));
              var Project_slug = checkNUll(checkkeyexistornull(element, "Project_slug")) != "" ? checkNUll(checkkeyexistornull(element, "Project_slug")) : checkNUll(checkkeyexistornull(element, "projectslug"));
              var LatLong = checkNUll(checkkeyexistornull(element, "LatLong"));
              var CityText = checkNUll(checkkeyexistornull(element, "CityText"));
              var DisplayArea = checkNUll(checkkeyexistornull(element, "DisplayArea")) != "" ? checkNUll(checkkeyexistornull(element, "DisplayArea")) : checkNUll(checkkeyexistornull(element, "displayarea"));

              var alttextbind = "";
              if (checkNUll(alt_text) !== "") {
                alttextbind = "alt='" + alt_text + "'";
              } else {
                alttextbind = "";
              }

              var href = "javascript:void(0);"
              if (checkNUll(LatLong) != "") {
                if (LatLong.coordinates.length > 0) {

                  lat = LatLong.coordinates[0];
                  lng = LatLong.coordinates[1];
                  href = `https://www.google.com/maps?q=${lat},${lng}`;
                }
              }
              var bind_area = '';
              if (DisplayArea != "") {
                bind_area = `<span><a href="${href}" target="_blank">${DisplayArea}, ${CityText}</a></span>`;
              } else {
                if (CityText != "") {
                  bind_area = `<span><a href="${href}" target="_blank">${CityText}</a></span>`;
                }
              }

              var url = "";
              // if (checkkeyexistornull(element, "Project_slug") != "" && item.is_rrproject == "0") {
              //     if (checkkeyexistornull(element, "is_parent") == "true"){
              //         url = `{{URL::asset('/')}}residential-projects/${CityText.toLowerCase()}/${Project_slug}`;
              //     } else {
              //         url = element.ProjectUrl;
              //     }
              // }
              if (Project_slug === "the-artiste-kochi" || Project_slug === "sheraton-grand" || Project_slug === "jw-marriott-bengaluru-prestige-golfshire" || Project_slug === "moxy-bengaluru-airport" || Project_slug === "mulberry-shades" || Project_slug === "blrkrci-conrad-bengaluru") {
                url = `<a class="block-link" data-cursor="Know<br>More" href="${ProjectUrl}" rel="nofollow" target="_blank"></a>`;
              } else {
                url = `<a class="block-link" data-cursor="Know<br>More" href="${ProjectUrl}" target="_blank"></a>`;
              }
              var recent_projects = `<li class="splide__slide"><div class="projects-col">
															<div class="project-vertical-block theme-block">
																	<div class="projects-img theme-block-img">
																			<picture>
																					<source srcset="${changeToWebP(ProjectImage)}" type="image/webp">
																					<source srcset="${ProjectImage}" type="image/jpg">
																					<img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(ProjectImage)}" ${alttextbind} width="470" height="260">
																			</picture>
																			${url}
																	</div>
																	<div class="project-title-and-price mt-4">
																			<div class="project-title">
																					<h2>${checkNUll(ProjectName)}</h2>
																			</div>
																			<div class="project-desc-price">
																					${bind_area}
																			</div>
																			${url}
																	</div>
                              </div>
													</div></li>`;
              $('.append-recent-projects').append(recent_projects);
            });
          });
        } else {
          $(".section-recent-viewed-projects").addClass("is-hidden");
        }

      },
      complete: function () {
        new Splide("#recent-viewed-projects-slider", {
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
      },
      error: function (response) {

      }
    });
  }

//Moengage_event start:Homepage_Section_Click,Homepage_Section_Read
  jQuery(function ($) {
  const trackedSections = new Set(); // Logged sections for scroll
  const timers = {}; // Timers for each section

  // --- Scroll-based 10s stay detection ---
  function isInViewport($el) {
    const rect = $el[0].getBoundingClientRect();
    const windowHeight = $(window).height();
    return rect.top < windowHeight && rect.bottom > 0;
  }

  function checkVisibleSections() {
    $('#info-sections section').each(function () {
      const $section = $(this);
      const sectionClass = ($section.attr("class") || "")
        .split(" ")
        .find(cls => cls.startsWith("section-")) || "unknown";

      if (trackedSections.has(sectionClass)) return;

      if (isInViewport($section)) {
        if (!timers[sectionClass]) {
          timers[sectionClass] = setTimeout(() => {
            trackedSections.add(sectionClass);
            // console.log("Stayed 10s in section:", sectionClass);

            Moengage.track_event("Homepage_Section_Read", {
              section: sectionClass,
              ip_address: window.userIP,
              event_name: "Homepage_Section_Read",
              event_type: "",
              stay_seconds: 10,
            });

            delete timers[sectionClass];
          }, 10000);
        }
      } else {
        if (timers[sectionClass]) {
          clearTimeout(timers[sectionClass]);
          delete timers[sectionClass];
        }
      }
    });
  }

  $(window).on("scroll", function () {
    checkVisibleSections();
  });

  checkVisibleSections(); // Initial check

  // --- Click Tracking ---
  $("#info-sections").off("click").on("click", function (e) {
    const $section = $(e.target).closest("section");

    if ($section.length && $section.closest("#info-sections").length) {
      const sectionClass = ($section.attr("class") || "")
        .split(" ")
        .find(cls => cls.startsWith("section-")) || "unknown";

      Moengage.track_event("Homepage_Section_Click", {
        section: sectionClass,
        ip_address: window.userIP,
        event_name: "Homepage_Section_Click",
        event_type: "",
      });

      // our-projects
      if (sectionClass === "section-our-projects") {
        setTimeout(() => {
          const $activeItem = $('.content-tab:visible .click_projects.active');
          let dataType = "N/A", cityCode = "N/A";

          if ($activeItem.length) {
            dataType = $activeItem.data('type') || "N/A";
            cityCode = $activeItem.data('citycode') || "N/A";
          }

          const activeTabText = $section.find('.tabs-detail .tab.is-active a').text().trim()
            || $('.tabs-detail .tab.is-active a').first().text().trim();

          Moengage.track_event("Homepage_Section_Click", {
            section: sectionClass,
            project_type: dataType,
            city_code: cityCode,
            active_tab: activeTabText,
            ip_address: window.userIP,
            event_name: "Homepage_Section_Click",
            event_type: "",
          });
        }, 10);
      }

      // featured-projects
      if (sectionClass === "section-featured-projects") {
        const slider = document.querySelector('#featured-projects-slider .splide__list');

        if (slider) {
          const observer = new MutationObserver(() => {
            const visibleSlides = $('#featured-projects-slider .splide__slide.is-visible');

            visibleSlides.each(function () {
              const title = $(this).find('.project-title h4').text().trim();
              const address = $(this).find('.project-title span').text().trim();
              const image = $(this).find('.featured-projects-img img').attr('src');
              const projectLink = $(this).find('a.block-link').attr('href');
              const price = $(this).find('.project-price .theme-btn').text().trim();

              Moengage.track_event("Homepage_Section_Click", {
                section: sectionClass,
                project_title: title,
                address: address,
                image_url: image,
                project_link: projectLink,
                price_text: price,
                ip_address: window.userIP,
                event_name: "Homepage_Section_Click",
                event_type: "",
              });
            });
          });

          if (!slider.dataset.observing) {
            observer.observe(slider, {
              childList: true,
              subtree: true,
              attributes: true,
              attributeFilter: ['class'],
            });
            slider.dataset.observing = "true";
          }
        }
      }
    }
  });
});

//Moengage_event end:Homepage_Section_Click,Homepage_Section_Read
//Moengage_event start:Homepage_Slide_Data_hovered
let hoverTimer;

$(document).on("mouseenter", "#main-slider .splide__slide", function () {
  const slide = $(this);

  hoverTimer = setTimeout(function () {
    const link = slide.find('.section-banner-video a').attr('href') || '';
    const img  = slide.find('.section-banner-video img').attr('src') || '';



    if (typeof Moengage !== "undefined" && Moengage.track_event) {
      Moengage.track_event("Homepage_Slide_Data_hovered", {
        link: link,
        image: img,
        ip_address: window.userIP || "",
        event_name: "Homepage_Slide_Data_hovered",
        event_type: "",
        timestamp: new Date().toISOString()
      });
    }
  }, 3000); // 3 sec delay
});

$(document).on("mouseleave", "#main-slider .splide__slide", function () {
  clearTimeout(hoverTimer); // cancel if user leaves before 3s
});




//Moengage_event end:Homepage_Slide_Data_hovered