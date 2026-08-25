$(document).ready(function() {
    GetSliderData();
    GetAboutUsData();
    GetPrestigeExperenceData();
    GetFeaturedProjectData();



    $('#citySelect').on('change', function() {
      const cityId = $(this).val();
      if (!cityId) return;

      const city = CITIES.find(c => c.id === cityId);
      if (city) {
        map.panTo({
          lat: city.lat,
          lng: city.lng
        });
        smoothZoom(city.zoom, () => {
          get_latlong_for_googlemap(cityId, "Commercial");
        });
      }
    });

    $('#projectSelect').on('change', function() {
      clearDirectionsAndMetro();
      const propId = $(this).val();
      const prop = PROPERTIES.find(p => p.id === propId);
      if (prop) {
        map.panTo({
          lat: prop.lat,
          lng: prop.lng
        });
        smoothZoom(14, () => {
          openPropertyPanel(prop);
        });
      }
    });

    // Map overlay click
    $('#mapOverlay').on('click', function() {
      $(this).hide();
    });




    $(document).on("click", ".projects-properties-menu-item a, .btn-gradient-rounded, .btn-gradient-rounded-active", 
      function (e) {

      let target = $(this).attr("href");

      
      if (target && target.startsWith("#")) {
        e.preventDefault();   

        let section = $(target);
        if (section.length) {
          $('html, body').animate({
            scrollTop: section.offset().top - 100
          }, 600);
        }
      }
    });

  });

  // function GetSliderData(){
  //   let formdata = {};
  //   formdata["dynamicurl"] = "managecontent/v2/slider/list";
  //   formdata['is_commercial_slider'] = "1";
  //   formdata['is_available'] = "1";

  //   $.ajax({
  //       method: "POST",
  //       url: "https://www.prestigeconstructions.com/api/apicall",
  //       dataType: "json",
  //       data: formdata,
  //       headers: {
  //           'Authorization': token
  //       },
  //       success: function(response) {
  //         if (response.success == true && response.data.length > 0) {
  //             let li = response.data[0];
  //             let loadingAttr = `loading="eager" fetchpriority="high" decoding="async"`;
  //             let picture = ``;
  //             if(li.slider_image_large){
  //               picture =`<picture>
  //                             <source media="(max-width:420px)" srcset="${changeToWebP(li.app_image_url)}" type="image/webp">
  //                             <source media="(max-width:420px)" srcset="${li.app_image_url}" type="image/jpg">
  //                             <source media="(max-width:767px)" srcset="${changeToWebP(li.slider_image_medium)}" type="image/webp">
  //                             <source media="(max-width:767px)" srcset="${li.slider_image_medium}" type="image/jpg">
  //                             <source media="(max-width:1380px)" srcset="${changeToWebP(li.slider_image_large)}" type="image/webp">
  //                             <source media="(max-width:1380px)" srcset="${li.slider_image_large}" type="image/jpg">
  //                             <source srcset="${changeToWebP(li.slider_image_extralarge)}" type="image/webp">
  //                             <source srcset="${li.slider_image_extralarge}" type="image/jpg">
  //                             <img src="${changeToWebP(li.slider_image_extralarge)}" ${loadingAttr} width="1350" height="600" alt="${li.alt_text || ''}">
  //                         </picture>`;
  //             } else {
  //               picture = '';
  //             }

  //             let html = `${picture}
  //                         <div class="banner-overlay"></div>
  //                         <div class="container has-text-centered has-text-white">
  //                             <div class="section-title js-scroll fade-in-top scrolled">
  //                                 <h6 class="has-text-uppercase letter-spacing-banner-text has-text-weight-medium">This is</h6>
  //                                 <h1>Prestige Office 2.0</h1>
  //                             </div>
  //                         </div>
  //                         <div class="banner-bottom-text">
  //                             <h6 class="has-text-uppercase letter-spacing-banner-text has-text-weight-medium">
  //                                 Where The Future Works.
  //                             </h6>
  //                         </div>`;
  //             $('#slider-section').append(html)
  //           }                
  //       },
  //       complete: function() {
  //           $(".theme-loader").removeClass("active");
  //       },
  //       error: function(response) {
  //           $(".theme-loader").removeClass("active");
  //           showToast("Error", response.responseJSON.message);
  //       }
  //   });
  // }

  function GetSliderData() {

    let formdata = {};
    formdata["dynamicurl"] = "managecontent/v2/slider/list";
    formdata["is_commercial_slider"] = "1";
    formdata["is_available"] = "true";

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(response) {

        if (response.success === true && response.data && response.data.length > 0) {

          let li = response.data[0];

          let loadingAttr = `loading="eager" fetchpriority="high" decoding="async"`;

          /* ---------------- IMAGE ---------------- */
          let picture = "";
          let redirect_url_show = "";
          let projectdetails = "";

          if (checkNUll(li.slider_image_large) !== "") {
            picture = `
                          <picture>
                              <source media="(max-width:420px)" srcset="${changeToWebP(li.app_image_url)}" type="image/webp">
                              <source media="(max-width:420px)" srcset="${li.app_image_url}" type="image/jpg">

                              <source media="(max-width:767px)" srcset="${changeToWebP(li.slider_image_medium)}" type="image/webp">
                              <source media="(max-width:767px)" srcset="${li.slider_image_medium}" type="image/jpg">

                              <source media="(max-width:1380px)" srcset="${changeToWebP(li.slider_image_large)}" type="image/webp">
                              <source media="(max-width:1380px)" srcset="${li.slider_image_large}" type="image/jpg">

                              <source srcset="${changeToWebP(li.slider_image_extralarge)}" type="image/webp">
                              <source srcset="${li.slider_image_extralarge}" type="image/jpg">

                              <img src="${changeToWebP(li.slider_image_extralarge)}"
                                  ${loadingAttr}
                                  width="1350"
                                  height="600"
                                  alt="${li.alt_text || ''}">
                          </picture>
                      `;
          }

          /* ---------------- URL ---------------- */
          let url = "";

          if (redirect_url_show === "true" && checkNUll(redirect_url) !== "") {
            url = redirect_url;
          } else {
            let propertycategory = checkNUll(
              checkkeyexistornull(projectdetails[0], "PropertyCategory")
            );

            if (propertycategory === "Commercial") {
              url = `https://www.prestigeconstructions.com/commercial-projects/${item.projectdetails[0].Project_slug}`;
            }
          }

          /* ---------------- CONDITIONAL A TAG ---------------- */
          let bannerImage = "";

          if (picture !== "" && url !== "") {
            bannerImage = `<a href="${url}" class="slider-link">${picture}</a>`;
          } else {
            bannerImage = picture; // no <a> tag
          }

          /* ---------------- FINAL HTML ---------------- */
          let html = `
                      ${bannerImage}
                      <div class="banner-overlay"></div>

                      <div class="container has-text-centered has-text-white">
                          <div class="section-title js-scroll fade-in-top scrolled">
                              <h6 class="has-text-uppercase letter-spacing-banner-text has-text-weight-medium mb-4">
                                  This is
                              </h6>
                              <h1>Prestige Office 2.0</h1>
                          </div>
                      </div>

                      <div class="banner-bottom-text">
                          <h6 class="has-text-uppercase letter-spacing-banner-text has-text-weight-medium">
                              Where The Future Works.
                          </h6>
                      </div>
                  `;

          $("#slider-section").html(html);
        }
      },
      complete: function() {
        $(".theme-loader").removeClass("active");
      },
      error: function(response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response?.responseJSON?.message || "Something went wrong");
      }
    });
  }


  function GetAboutUsData() {
    let formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/commercialaboutus/list";
    formdata["is_available"] = "true";

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(response) {
        if (response.success == true && response.data.length > 0) {
          const li = response.data[0];
          let AboutUsData = [];
          li.AboutUsList.forEach((item, index) => {
            let isLast = index === li.AboutUsList.length - 1;
            let label = item.lable || "";
            let formattedLabel = label.replace(/^(\S+)\s+/, "$1<br>");
            let tblhtml = `<div class="stat-block">
                                <div class="is-flex is-align-items-baseline">
                                    <div class="stat-number">${item.count}</div>
                                    <div class="stat-unit">Mn Sqft</div>
                                </div>
                                <div class="stat-title">${formattedLabel}</div>
                            </div>
                            ${!isLast ? `<div class="stat-separator"></div>` : ``}`;

            AboutUsData.push(tblhtml);
          });

          let html = `<div class="position-relative stat-card-wrapper">
                          <img src="${li.aboutlogo}" alt="${li.alt_text}" class="is-fullwidth">
                          <div class="stat-card-inner">
                              <div class="stat-card">
                              ${AboutUsData.join('')}
                              </div>
                              ${li.description || ''}
                          </div>
                      </div>`;
          $('#about-section').append(html);
        } else {
          $('#hide-about-section').addClass('is-hidden');
        }
      },
      complete: function() {
        $(".theme-loader").removeClass("active");
      },
      error: function(response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response.responseJSON.message);
      }
    });
  }

  function GetPrestigeExperenceData() {
    let formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/commercialprestigeexperiences/list";
    formdata["is_available"] = "true";

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(response) {
        if (response.success == true && response.data.length > 0) {
          let data = response.data;
          if (data.length > 2) {
            $('#hide-naletrows').removeClass('is-hidden');
          }

          data.forEach(li => {
            let html = `<div class="experience-item active">
                              <img src="${li.image}" alt="${li.image_alt || ''}">
                          </div>`;
            $('#prestige-experiance-slider').append(html);
          });
        } else {
          $('#prestige-experience').addClass('is-hidden');
          $('#prestige-experience').addClass('is-hidden');
        }
      },
      complete: function() {
        $(".theme-loader").removeClass("active");
        initExperinceSlider();

        function initExperinceSlider() {
          const experienceCarousel = document.querySelector(".experience-carousel");
          const experienceItems = document.querySelectorAll(".experience-item");
          const expPrevBtn = document.getElementById("prevBtn");
          const expNextBtn = document.getElementById("nextBtn");
          let currentExperienceIndex = 0;

          function updateExperienceCarousel() {
            experienceItems.forEach((item) => item.classList.remove("active", "next", "hidden"));

            const total = experienceItems.length;
            const activeIndex = currentExperienceIndex;
            const nextIndex = (currentExperienceIndex + 1) % total;

            experienceItems[activeIndex].classList.add("active");
            experienceItems[nextIndex].classList.add("next");

            experienceItems.forEach((item, index) => {
              if (index !== activeIndex && index !== nextIndex) {
                item.classList.add("hidden");
              }
            });

            // Calculate translation based on screen width
            const containerWidth = experienceCarousel.parentElement.offsetWidth;
            const isMobile = window.innerWidth < 768;
            
            let slideWidthWithGap;
            if (isMobile) {
              // Mobile: each slide is 100% width
              slideWidthWithGap = 100;
            } else {
              // Desktop: each slide is 50% width + 40px gap
              const gapInPercent = (40 / containerWidth) * 100;
              slideWidthWithGap = 50 + gapInPercent;
            }
            
            experienceCarousel.style.transform = `translateX(-${currentExperienceIndex * slideWidthWithGap}%)`;
            experienceCarousel.style.transition =
              "transform 0.9s cubic-bezier(0.6, 0.05, 0.28, 0.91)";
          }

          expNextBtn?.addEventListener("click", () => {
            currentExperienceIndex =
              (currentExperienceIndex + 1) % experienceItems.length;
            updateExperienceCarousel();
          });

          expPrevBtn?.addEventListener("click", () => {
            currentExperienceIndex =
              (currentExperienceIndex - 1 + experienceItems.length) %
              experienceItems.length;
            updateExperienceCarousel();
          });

          // Recalculate on window resize
          window.addEventListener('resize', () => {
            updateExperienceCarousel();
          });

          updateExperienceCarousel();
        };
      },
      error: function(response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response.responseJSON.message);
      }
    });
  }

  function getPTextTillDot(html) {
          if (!html) return "";

          let div = document.createElement("div");
          div.innerHTML = html;

          
          let paragraphs = div.querySelectorAll("p");

          for (let p of paragraphs) {
            
            if (!p.querySelector("*")) {
              let text = p.textContent.trim();

            
              let dotIndex = text.indexOf(".");
              if (dotIndex !== -1) {
                return text.slice(0, dotIndex + 1).trim();
              }
              return text;
            }
          }

          return "";
        }
  function GetFeaturedProjectData() {
    let formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/projectinventorycms/list";
    formdata["propertycategory"] = "Commercial";
    formdata["is_available"] = "true";
    formdata["is_featured"] = "true";

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(response) {

        if (response.success == true && response.data.length > 0) {
          response.data.forEach(li => {
            let citytextbind = checkNUll(checkkeyexistornull(li, "CityText")).toLowerCase();
            let overviewText = getPTextTillDot(li.Overview);
            let html = `<div class="project-item">
                              <a href = "https://www.prestigeconstructions.com/offices/commercial-projects/${citytextbind}/${li.Project_slug}">
                                  <img src="${li.ProjectImage}" alt="${li.Featured_image_alt_text || li.ProjectName}" />
                                  <div class="project-info has-text-left pt-1">
                                      <h3>${li.ProjectName || ''}</h3>
                                      <p class="project_description_short">
                                        ${overviewText}
                                      </p>
                                  </div>
                                </a>
                            </div>`;
            $('#featured-project-slider').append(html);
          });          

        } else {
          $('.featured-projects').addClass('is-hidden');
          $('#hide-project-section').addClass('is-hidden');
        }
      },
      complete: function() {
        $(".theme-loader").removeClass("active");
        
        (function() {
          const carousel = document.querySelector('.projects-carousel');
          if (!carousel) return;

          let currentStartIndex = 0; // which item is the "hero" (left-most active)

          // find viewport (overflow hidden parent)
          function findViewport(el) {
            let node = el.parentElement;
            while (node) {
              const cs = window.getComputedStyle(node);
              if (/(hidden|clip)/.test((cs.overflow || '') + (cs.overflowX || '') + (cs.overflowY || '')))
                return node;
              node = node.parentElement;
            }
            return el.parentElement || el;
          }
          const viewportEl = findViewport(carousel);

          function getItems() {
            return Array.from(carousel.querySelectorAll('.project-item'));
          }

          // measure positions of each item along the track
          function measurePositions(items) {
            const cs = window.getComputedStyle(carousel);
            const gap = parseFloat(cs.gap || cs.columnGap || 0) || 0;
            const positions = [];
            let left = 0;

            items.forEach(it => {
              const w = Math.round(it.getBoundingClientRect().width);
              positions.push({
                left: Math.round(left),
                width: w
              });
              left += w + gap;
            });

            const contentWidth = Math.round(Math.max(0, left - gap));
            return {
              positions,
              contentWidth,
              gap
            };
          }

          // how many items fit into viewport starting from index 0
          function computeVisibleCountFromPositions(positions, gap, viewportWidth) {
            if (!positions.length) return 1;
            let count = 0;
            let total = 0;

            for (let i = 0; i < positions.length; i++) {
              total += positions[i].width + (i === 0 ? 0 : gap);
              if (total <= viewportWidth + 0.0001) {
                count++;
              } else {
                break;
              }
            }
            return Math.max(1, count);
          }

          function clamp(v, a, b) {
            return Math.max(a, Math.min(b, v));
          }

          function updateProjectsCarousel() {
            const items = getItems();
            const total = items.length;
            if (!total) return;

            const viewportWidth = Math.round(viewportEl.getBoundingClientRect().width);
            const {
              positions,
              contentWidth,
              gap
            } = measurePositions(items);

            const visibleCount = computeVisibleCountFromPositions(positions, gap, viewportWidth);
            const maxStartIndex = Math.max(0, total - visibleCount);

            // keep currentStartIndex in range (for when window resized)
            currentStartIndex = clamp(currentStartIndex, 0, maxStartIndex);

            const firstIndex = currentStartIndex;

            // translate so that firstIndex item is the left-most hero
            let rawTarget = 0;
            if (positions[firstIndex]) {
              rawTarget = positions[firstIndex].left;
            }

            // IMPORTANT: no clamping to maxTranslate — we want same hero position for all,
            // including the last one, even if that means empty space off-screen.
            const targetTranslate = Math.round(rawTarget);

            // visual state: hero & preview
            items.forEach((it, i) => it.classList.remove('active', 'next', 'hidden'));
            if (items[firstIndex]) items[firstIndex].classList.add('active');
            if (items[firstIndex + 1]) items[firstIndex + 1].classList.add('next');
            items.forEach((it, i) => {
              if (i !== firstIndex && i !== firstIndex + 1) it.classList.add('hidden');
            });

            carousel.style.transition = 'transform 0.9s cubic-bezier(0.6,0.05,0.28,0.91)';
            carousel.style.transform = `translate3d(-${targetTranslate}px,0,0)`;
          }

          // go forward: move by visibleCount; if past end, loop to 0 (infinite)
          function pageForward() {
            const items = getItems();
            const total = items.length;
            if (!total) return;

            const viewportWidth = Math.round(viewportEl.getBoundingClientRect().width);
            const {
              positions,
              contentWidth,
              gap
            } = measurePositions(items);
            const visibleCount = computeVisibleCountFromPositions(positions, gap, viewportWidth);
            const maxStartIndex = Math.max(0, total - visibleCount);

            let nextIndex = currentStartIndex + visibleCount;
            if (nextIndex > maxStartIndex) {
              // loop back to start (infinite scroll)
              nextIndex = 0;
            }
            currentStartIndex = nextIndex;
            updateProjectsCarousel();
          }

          // go back: move by visibleCount; if before 0, loop to last page
          function pageBack() {
            const items = getItems();
            const total = items.length;
            if (!total) return;

            const viewportWidth = Math.round(viewportEl.getBoundingClientRect().width);
            const {
              positions,
              contentWidth,
              gap
            } = measurePositions(items);
            const visibleCount = computeVisibleCountFromPositions(positions, gap, viewportWidth);
            const maxStartIndex = Math.max(0, total - visibleCount);

            let prevIndex = currentStartIndex - visibleCount;
            if (prevIndex < 0) {
              prevIndex = maxStartIndex; // loop to last page
            }
            currentStartIndex = prevIndex;
            updateProjectsCarousel();
          }

          const nextBtn = document.getElementById('nextProjectsBtn');
          const prevBtn = document.getElementById('prevProjectsBtn');
          nextBtn?.addEventListener('click', pageForward);
          prevBtn?.addEventListener('click', pageBack);

          document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') pageForward();
            if (e.key === 'ArrowLeft') pageBack();
          });

          let resizeTO;
          window.addEventListener('resize', () => {
            clearTimeout(resizeTO);
            resizeTO = setTimeout(() => updateProjectsCarousel(), 120);
          });

          const mo = new MutationObserver(() => {
            clearTimeout(resizeTO);
            resizeTO = setTimeout(() => updateProjectsCarousel(), 80);
          });
          mo.observe(carousel, {
            childList: true,
            subtree: true,
            attributes: true
          });

          window.addEventListener('load', () => setTimeout(updateProjectsCarousel, 80));
          setTimeout(updateProjectsCarousel, 140);

          // for debugging in console
          window.__projectsCarousel = {
            update: updateProjectsCarousel,
            pageForward,
            pageBack
          };
        })();
      },
      error: function(response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response.responseJSON.message);
      }
    });
  }





  let map;
  let markers = [];
  let cityMarkers = [];
  let directionsService;
  let directionsRenderer;
  let lastMetroMarker = null;
  let lastOpenedProperty = null;

  // DATA STORAGE
  let CITIES = [];
  let PROPERTIES = [];

  // Helper functions from old code
  function checkNUll(value) {
    return value !== null && value !== undefined && value !== "" ? value : "";
  }

  function checkkeyexistornull(obj, key) {
    return obj && obj[key] !== undefined ? obj[key] : null;
  }

  // Initialize Map
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 20.5937,
        lng: 78.9629
      },
      zoom: 5,
      disableDefaultUI: true,
      gestureHandling: 'greedy'
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      preserveViewport: true
    });
    directionsRenderer.setMap(map);

    // Load cities from API
    get_all_project_count("Commercial");

    google.maps.event.addListener(map, 'idle', () => {
      const z = map.getZoom();
      if (z <= 6) {
        clearAllMarkers();
        loadCityMarkers();
        closePropertyPanel();
        clearDirectionsAndMetro();
      }
    });
  }

  // Get all project count (from old code structure)
  function get_all_project_count(type, url = "managecontent/v1/cityprojectcount/list") {
    var formdata = {};
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
      async: false,
      headers: {
        'Authorization': token
      },
      success: function(response) {
        if (response.success == true && response.data.length > 0) {
          CITIES = [];
          $.each(response.data, function(i, item) {
            // console.log(item);

            var LatLong = checkkeyexistornull(item, "LatLong");
            var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
            var count = checkkeyexistornull(item, "count");
            var lat = "",
              lng = "";

            if (checkNUll(LatLong) != "") {
              if (item.LatLong.coordinates.length > 0) {
                lat = item.LatLong.coordinates[0];
                lng = item.LatLong.coordinates[1];
              }
            }

            CITIES.push({
              id: item._id,
              name: CityText,
              lat: parseFloat(lat),
              lng: parseFloat(lng),
              zoom: 12,
              count: count
            });
          });

          populateCityDropdown();
          loadCityMarkers();
        }
      }
    });
  }

  // Populate City Dropdown
  function populateCityDropdown() {
    const citySelect = $('#citySelect');
    citySelect.html('<option value="">Select City</option>');

    $.each(CITIES, function(i, city) {
      // citySelect.append(`<option value="${city.id}">${city.name} (${city.count} Projects)</option>`);
      citySelect.append(`<option value="${city.id}">${city.name}</option>`);
    });
  }

  // Load City Markers
  function loadCityMarkers() {
    clearAllMarkers();

    CITIES.forEach(city => {
      const marker = new google.maps.Marker({
        position: {
          lat: city.lat,
          lng: city.lng
        },
        map: map,
        title: city.name,
        icon: {
          url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><circle cx="18" cy="18" r="16" fill="%23667eea"/><text x="18" y="23" font-size="14" text-anchor="middle" fill="%23fff" font-weight="bold">' + city.count + '</text></svg>',
          scaledSize: new google.maps.Size(36, 36)
        }
      });

      marker.addListener('click', () => {
        map.panTo({
          lat: city.lat,
          lng: city.lng
        });
        smoothZoom(city.zoom, () => {
          get_latlong_for_googlemap(city.id, "Commercial");
        });
      });

      cityMarkers.push(marker);
    });
  }

  // Get lat/long for google map (from old code structure)
  function get_latlong_for_googlemap(citycode, type) {
    var formdata = {};
    // formdata["dynamicurl"] = "managecontent/v1/projectdetails/list";
    formdata["dynamicurl"] = "managecontent/v1/commercialdetails/list";
    formdata["CityText"] = citycode;
    formdata["propertycategory"] = type;
    formdata["is_available"] = "true";

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      datatype: "json",
      data: formdata,
      async: false,
      headers: {
        'Authorization': token
      },
      success: function(response) {
        if (response.success == true && response.data.length > 0) {
          clearAllMarkers();
          PROPERTIES = [];

          $.each(response.data, function(i, item) {
            // console.log(item);

            var projectname_key = checkNUll(checkkeyexistornull(item, "ProjectName"));
            var project_slug_key = checkNUll(checkkeyexistornull(item, "Project_slug"));
            var address_key = checkNUll(checkkeyexistornull(item, "Address"));
            var citytextbind = checkNUll(checkkeyexistornull(item, "CityText")).toLowerCase();
            let reraValue = '-';

            if (
              item.reraregistrations &&
              Array.isArray(item.reraregistrations) &&
              item.reraregistrations.length > 0
            ) {
              const reraObj = item.reraregistrations[0];

              reraValue = checkNUll(reraObj.rera_url_link) ?
                reraObj.rera_url_link :
                checkNUll(reraObj.reranumber);
            }

            var lat = 0,
              lng = 0;
            if (item.LatLong && item.LatLong.coordinates.length > 0) {
              lat = parseFloat(item.LatLong.coordinates[0]);
              lng = parseFloat(item.LatLong.coordinates[1]);
            }

            // Build URL based on your old logic
            var url_key = "";
            if (type == "Residential") {
              if (project_slug_key == "hyde" || project_slug_key == "regent") {
                url_key = `https://www.prestigeconstructions.com/residential-projects/${citytextbind}/prestige-finsbury-park/${project_slug_key}`;
              } else if (project_slug_key == "apartments" || project_slug_key == "villas") {
                url_key = `https://www.prestigeconstructions.com/residential-projects/${citytextbind}/prestige-lakeside-habitat/${project_slug_key}`;
              } else if (project_slug_key == "the-residences" || project_slug_key == "the-willows") {
                url_key = `https://www.prestigeconstructions.com/residential-projects/${citytextbind}/prestige-park-grove/${project_slug_key}`;
              } else if (
                project_slug_key == "aspen-greens" || project_slug_key == "aston-park" ||
                project_slug_key == "avalon-park" || project_slug_key == "eden-park" ||
                project_slug_key == "great-acres" || project_slug_key == "meridian-park"
              ) {
                url_key = `https://www.prestigeconstructions.com/residential-projects/${citytextbind}/the-prestige-city-sarjapur/${project_slug_key}`;
              } else if (project_slug_key == "apartmentss" || project_slug_key == "bellagio") {
                url_key = `https://www.prestigeconstructions.com/residential-projects/${citytextbind}/the-prestige-city-rajendra-nagar/${project_slug_key}`;
              } else if (project_slug_key == "bellanza" || project_slug_key == "siesta" || project_slug_key == "forest-hills") {
                url_key = `https://www.prestigeconstructions.com/residential-projects/${citytextbind}/the-prestige-city-mulund/${project_slug_key}`;
              } else {
                url_key = `https://www.prestigeconstructions.com/residential-projects/${citytextbind}/${project_slug_key}`;
              }
            } else {
              // url_key = '#';
              url_key = `https://www.prestigeconstructions.com/offices/commercial-projects/${citytextbind}/${project_slug_key}`;;
            }

            PROPERTIES.push({
              id: item._id,
              cityId: citycode,
              title: projectname_key,
              slug: project_slug_key,
              lat: lat,
              lng: lng,
              address: address_key,
              location_url_link: checkNUll(checkkeyexistornull(item, "location_url_link")),
              img: checkNUll(checkkeyexistornull(item, "ProjectImage")),
              rera: reraValue,
              land: checkNUll(checkkeyexistornull(item, "Size")),
              office: checkNUll(checkkeyexistornull(item, "OfficeSpace")),
              floor: checkNUll(checkkeyexistornull(item, "FloorPlate")),
              price: checkNUll(checkkeyexistornull(item, "Price")),
              callnumber: checkNUll(checkkeyexistornull(item, "callingcontact")),
              Overview: checkNUll(checkkeyexistornull(item, "Overview")),
              url: url_key,
              nearbylocations: item.nearbylocationcms || []
            });
          });

          populateProjectDropdown();
          displayPropertyMarkers();

          if (PROPERTIES.length > 0) {
            // console.log('Auto opening first property:', PROPERTIES[0]);
            openPropertyPanel(PROPERTIES[0]);
          }
        }
      }
    });
  }

  // Populate Project Dropdown
      function populateProjectDropdown() {
        const projectSelect = $('#projectSelect');
        projectSelect.html('<option value="">Select Project</option>');

        $.each(PROPERTIES, function(i, prop) {
            let title = prop.title || "";
            let displayTitle = title.length > 18 
                ? title.substring(0, 18) + "..." 
                : title;

            projectSelect.append(
                `<option value="${prop.id}" title="${title}">
                    ${displayTitle}
                </option>`
            );
        });
    }


  // Display Property Markers
  function displayPropertyMarkers() {
    const icon = {
      url: 'https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/falcon-icon.png',
      scaledSize: new google.maps.Size(40, 40)
    };

    PROPERTIES.forEach((prop, idx) => {
      if (prop.lat && prop.lng) {
        const marker = new google.maps.Marker({
          position: {
            lat: prop.lat,
            lng: prop.lng
          },
          map: map,
          title: prop.title,
          icon: icon,
          zIndex: 100 + idx
        });

        marker.addListener('click', () => {
          openPropertyPanel(prop);
          panToOffset(marker.getPosition(), {
            x: -120,
            y: 0
          });
        });

        markers.push(marker);
      }
    });
  }
  function bindOrHide(selector, value) {
    const el = $(selector);
    const wrapper = el.closest('.prop-item');

    if (value && value.toString().trim() !== '') {
      el.text(value);
      wrapper.show();
    } else {
      wrapper.hide();
    }
  }
  // Open Property Panel
  function openPropertyPanel(prop) {
    
    if (!prop) return;
    lastOpenedProperty = prop;
    console.log(prop);

    $('#propImg').attr('src', prop.img || '');
    $('#propTitle').text(prop.title || '');
    
    function getPlainParagraph(overviewHtml) {
      if (!overviewHtml) return "";

      let div = document.createElement("div");
      div.innerHTML = overviewHtml;

      let paragraphs = div.querySelectorAll("p");

      for (let p of paragraphs) {
        // sirf plain <p>, jiske andar koi aur tag na ho
        if (!p.querySelector("*")) {
          return p.textContent.trim();
        }
      }

      return "";
    }

    function truncateByWords(text, wordLimit = 11) {
      if (!text) return "";

      let words = text.trim().split(/\s+/);
      if (words.length <= wordLimit) return text.trim();

      return words.slice(0, wordLimit).join(" ") + "...";
    }

    let plainOverview = getPlainParagraph(prop.Overview);
    let shortOverview = truncateByWords(plainOverview, 12);

    $('#propDesc').text(shortOverview);

    // $('#propAddress span:last-child').text(prop.address || '');
    const addressSpan = $('#propAddress .icon-text span:last');

    if (prop.location_url_link && prop.location_url_link.trim() !== '') {
      addressSpan.html(`
                    <a href="${prop.location_url_link}"
                      target="_blank"
                      rel="noopener noreferrer"
                      style="color:#6b6556; text-decoration:none;">
                        ${prop.address}
                    </a>
                `);
    } else {
      addressSpan.text(prop.address || '');
    }
    const reraEl = $('#propRera');

    if (prop.rera && prop.rera.startsWith('http')) {
      reraEl.html(`
                      <a href="${prop.rera}"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="color:#6b6556; text-decoration:none;">
                          View RERA Details
                      </a>
                  `);
    } else {
      // reraEl.text(prop.rera || '-');
        $('#propRera').closest('.prop-item').hide();
      }

      /* ---------- Meta fields (NO '-' now) ---------- */
    bindOrHide('#propLand', prop.land);
    bindOrHide('#propOffice', prop.office);
    bindOrHide('#propFloor', prop.floor);

    /* ---------- Price ---------- */
    if (prop.price && prop.price.trim() !== '') {
      $('#propPrice').text(prop.price).show();
    } else {
      $('#propPrice').hide();
    }
    $('#propCTA').attr('href', prop.url || '#');
    // $('#propCTAPhone').attr('href', prop.callnumber || '#');
    if (prop.callnumber && prop.callnumber.trim() !== '') {
      const cleanNumber = prop.callnumber.replace(/\s+/g, '');
      $('#propCTAPhone')
        .attr('href', `tel:${cleanNumber}`)
        .removeClass('disabled')
        .show();
    } else {
      $('#propCTAPhone')
        .attr('href', 'javascript:void(0)')
        .addClass('disabled')
        .hide(); // ya show() but disabled
    }


    // Show infrastructure buttons if nearbylocations exist
    if (prop.nearbylocations && prop.nearbylocations.length > 0) {
      displayInfrastructureButtons(prop.nearbylocations);
      $('#infraSection').show();
    } else {
      $('#infraSection').hide();
    }

    const panel = $('#propertyPanel');
    panel.addClass('open');
    panel.attr('aria-hidden', 'false');
    $('.map-close-btn').removeClass('is-hidden');
  }

  // Display Infrastructure Buttons
  function displayInfrastructureButtons(nearbylocations) {
      const infraButtons = $('#infraButtons');
      infraButtons.html('');

      $.each(nearbylocations, function(i, location) {
          const typestr = location.typestr || location.type || 'Location';
          console.log(typestr);
          
          const lat = location.lat || (location.LatLong && location.LatLong.coordinates[0]) || 0;
          const lng = location.lng || (location.LatLong && location.LatLong.coordinates[1]) || 0;
          const name = location.name || '';

          const button = $(`<button type="button" class="button is-rounded is-light py-2 px-3">${typestr}</button>`);
          button.data('type', typestr);
          button.data('lat', lat);
          button.data('lng', lng);
          button.data('name', name);

          button.on('click', function() {
              infraButtons.find('button').removeClass('is-selected');
              $(this).addClass('is-selected');
              showNearbyLocation($(this).data());
          });

          infraButtons.append(button);
      });
  }
  // function displayInfrastructureButtons(nearbylocations) {
  //   const infraButtons = $('#infraButtons');
  //   infraButtons.html('');

  //   const grouped = groupNearbyByType(nearbylocations);

  //   Object.keys(grouped).forEach(type => {
  //     const button = $(`
  //                   <button type="button"
  //                       class="button is-rounded is-light py-2 px-3">
  //                       ${type}
  //                   </button>
  //               `);

  //     button.data('locations', grouped[type]);
  //     button.data('type', type);

  //     button.on('click', function() {
  //       infraButtons.find('button').removeClass('is-selected');
  //       $(this).addClass('is-selected');

  //       showNearbyLocationsByType($(this).data('locations'), type);
  //     });

  //     infraButtons.append(button);
  //   });
  // }

  // let nearbyPins = [];

  // function showNearbyLocationsByType(locations, type) {
  //   clearDirectionsAndMetro();
  //   clearNearbyPins();

  //   const prop = lastOpenedProperty;
  //   if (!prop) return;

  //   const origin = new google.maps.LatLng(prop.lat, prop.lng);

  //   locations.forEach((loc, index) => {
  //     const lat = loc.LatLong?.coordinates?.[0];
  //     const lng = loc.LatLong?.coordinates?.[1];
  //     if (!lat || !lng) return;

  //     const destination = new google.maps.LatLng(lat, lng);

  //     const marker = new google.maps.Marker({
  //       position: destination,
  //       map: map,
  //       title: loc.name,
  //       icon: {
  //         url: 'data:image/svg+xml;utf8,' + encodeURIComponent(
  //           `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
  //                               <circle cx="18" cy="18" r="16" fill="#A88944"/>
  //                               <text x="18" y="23" font-size="12"
  //                                     text-anchor="middle" fill="#fff"
  //                                     font-weight="bold">
  //                                     ${type[0]}
  //                               </text>
  //                           </svg>`
  //         ),
  //         scaledSize: new google.maps.Size(36, 36)
  //       }
  //     });

  //     nearbyPins.push(marker);

  //     // OPTIONAL: Route sirf first hospital ke liye
  //     if (index === 0) {
  //       directionsService.route({
  //         origin,
  //         destination,
  //         travelMode: google.maps.TravelMode.DRIVING
  //       }, (result, status) => {
  //         if (status === 'OK') {
  //           directionsRenderer.setDirections(result);
  //           map.fitBounds(result.routes[0].bounds, 120);
  //         }
  //       });
  //     }

  //     const infoWindow = new google.maps.InfoWindow({
  //       content: `
  //                       <strong>${loc.name}</strong><br/>
  //                       <small>${loc.dispvalue || ''}</small>
  //                   `
  //     });

  //     marker.addListener('click', () => {
  //       infoWindow.open(map, marker);
  //     });
  //   });
  // }

  // function clearNearbyPins() {
  //   nearbyPins.forEach(p => p.setMap(null));
  //   nearbyPins = [];
  // }

  // Show Nearby Location with Route
  function showNearbyLocation(locationData) {
    clearDirectionsAndMetro();

    const prop = lastOpenedProperty;
    if (!prop) return;

    const origin = new google.maps.LatLng(prop.lat, prop.lng);
    const destination = new google.maps.LatLng(parseFloat(locationData.lat), parseFloat(locationData.lng));

    const request = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);

        const typeIcon = (locationData.type || 'L')[0].toUpperCase();
        lastMetroMarker = new google.maps.Marker({
          position: destination,
          map: map,
          title: locationData.name,
          icon: {
            url: 'data:image/svg+xml;utf8,' + encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><circle cx="18" cy="18" r="16" fill="#A88944"/><text x="18" y="23" font-size="12" text-anchor="middle" fill="#fff" font-weight="bold">' + typeIcon + '</text></svg>'
            ),
            scaledSize: new google.maps.Size(36, 36)
          },
          zIndex: 9999
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<strong>${locationData.name}</strong><div style="font-size:13px">${locationData.type}</div>`
        });
        infoWindow.open(map, lastMetroMarker);

        if (result.routes[0]?.bounds) {
          map.fitBounds(result.routes[0].bounds, 120);
        }
      }
    });
  }


  function groupNearbyByType(nearbylocations) {
    const grouped = {};

    nearbylocations.forEach(loc => {
      const type = loc.typestr || loc.type || 'Other';
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(loc);
    });

    return grouped;
  }

  // Utility Functions
  function clearAllMarkers() {
    markers.forEach(m => m.setMap(null));
    markers = [];
    cityMarkers.forEach(m => m.setMap(null));
    cityMarkers = [];
  }

  function clearDirectionsAndMetro() {
    if (directionsRenderer) {
      directionsRenderer.set('directions', null);
    }
    if (lastMetroMarker) {
      lastMetroMarker.setMap(null);
      lastMetroMarker = null;
    }
  }

  function closePropertyPanel() {
    const panel = $('#propertyPanel');
    panel.removeClass('open');
    panel.attr('aria-hidden', 'true');
    $('.map-close-btn').addClass('is-hidden');
  }

  function smoothZoom(targetZoom, callback) {
    let cur = map.getZoom();
    const step = targetZoom > cur ? 1 : -1;

    function tick() {
      if (cur === targetZoom) {
        if (callback) callback();
        return;
      }
      cur += step;
      map.setZoom(cur);
      setTimeout(tick, 90);
    }
    tick();
  }

  function panToOffset(latLng, offset) {
    if (!map.getProjection) {
      map.panTo(latLng);
      return;
    }
    const scale = Math.pow(2, map.getZoom());
    const worldCoord = map.getProjection().fromLatLngToPoint(latLng);
    const pixelOffset = new google.maps.Point(offset.x / scale, offset.y / scale);
    const newPoint = new google.maps.Point(worldCoord.x - pixelOffset.x, worldCoord.y - pixelOffset.y);
    const newCenter = map.getProjection().fromPointToLatLng(newPoint);
    map.panTo(newCenter);
  }

$('.map-close-btn').on('click', function () {
  closePropertyPanel();
  clearDirectionsAndMetro();
});







  let dsize = 8;
let leadershipPage = 1;
let officePage = 1;
let viewloadmorebtnleadership = 1;
let viewloadmorebtnoffice = 1;
let leadershipSlider = null;
let officeSlider = null;
let leadershipSliderLoaded = false;  // Flag to prevent duplicate loading
let officeSliderLoaded = false;      // Flag to prevent duplicate loading

const leadershipGrid = $("#leadership-grid");
const officeGrid = $("#office-grid");
const leadershipSliderList = $("#leadership-slider-list");
const officeSliderList = $("#office-slider-list");
const btnLeadership = $("#btn-leadership");
const btnOffice = $("#btn-office");

/* =====================
  RENDER GRID CARD
===================== */
function renderGridCard(item, directorsType) {
    let image = checkNUll(item.image);
    let name = checkNUll(item.directorsname);
    let designation = checkNUll(item.designation);
    let alt = checkNUll(item.alt_text);
    let slug = checkNUll(item.directorslug);
    let directorsLink = checkNUll(item.directors_link);
    let designationgroupname = slugify(checkNUll(item.designationgroupname));
    let url = "javascript:void(0);";
    
    if (directorsType === "commercial_directors") {
        if (directorsLink !== "") url = directorsLink;
    } else if (slug !== "") {
        if (designationgroupname === "board-of-directors") {
            url = `https://www.prestigeconstructions.com/about-us/board-of-directors/${slug}`;
        } else if (designationgroupname === "executive-directors") {
            url = `https://www.prestigeconstructions.com/about-us/executive-directors/${slug}`;
        } else if (designationgroupname === "ceo") {
            url = `https://www.prestigeconstructions.com/about-us/ceo/${slug}`;
        } else if (designationgroupname === "cfo") {
            url = `https://www.prestigeconstructions.com/about-us/cfo/${slug}`;
        }
    }
    
    return `
        <div class="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
            <a href="${url}" class="card has-background-white-bis">
                <figure class="image is-4by5">
                    <img src="${image}" alt="${alt}">
                </figure>
                <div class="content">
                    <div>
                        <p class="has-text-weight-semibold mb-1">${name}</p>
                        <p class="is-size-7 has-text-grey">${designation}</p>
                    </div>
                    <button class="button is-small is-rounded is-light mt-2">
                        <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/right-icon.svg" class="arrow-icon">
                    </button>
                </div>
            </a>
        </div>`;
}

/* =====================
  RENDER SLIDER CARD - Same structure as grid card
===================== */
function renderSliderCard(item, directorsType) {
    let image = checkNUll(item.image);
    let name = checkNUll(item.directorsname);
    let designation = checkNUll(item.designation);
    let alt = checkNUll(item.alt_text);
    let slug = checkNUll(item.directorslug);
    let directorsLink = checkNUll(item.directors_link);
    let designationgroupname = slugify(checkNUll(item.designationgroupname));
    let url = "javascript:void(0);";
    
    if (directorsType === "commercial_directors") {
        if (directorsLink !== "") url = directorsLink;
    } else if (slug !== "") {
        if (designationgroupname === "board-of-directors") {
            url = `https://www.prestigeconstructions.com/about-us/board-of-directors/${slug}`;
        } else if (designationgroupname === "executive-directors") {
            url = `https://www.prestigeconstructions.com/about-us/executive-directors/${slug}`;
        } else if (designationgroupname === "ceo") {
            url = `https://www.prestigeconstructions.com/about-us/ceo/${slug}`;
        } else if (designationgroupname === "cfo") {
            url = `https://www.prestigeconstructions.com/about-us/cfo/${slug}`;
        }
    }
    
    return `
        <li class="splide__slide">
            <a href="${url}" class="card has-background-white-bis">
                <figure class="image is-4by5">
                    <img src="${image}" alt="${alt}">
                </figure>
                <div class="content">
                    <div>
                        <p class="has-text-weight-semibold mb-1">${name}</p>
                        <p class="is-size-7 has-text-grey">${designation}</p>
                    </div>
                    <button class="button is-small is-rounded is-light mt-2">
                        <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/right-icon.svg" class="arrow-icon">
                    </button>
                </div>
            </a>
        </li>`;
}

function slugify(str) {
    if (!str) return "";
    str = String(str)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    return str;
}

/* =====================
  INITIALIZE SLIDER
===================== */
function initSlider(sliderId) {
    const slider = new Splide(`#${sliderId}`, {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        arrows: true
    });
    slider.mount();
    return slider;
}

/* =====================
  LOAD ALL MEMBERS FOR SLIDER (NO PAGINATION)
===================== */
function loadAllMembersForSlider(directorsType, sliderContainer) {
    // Check if data is already loaded to prevent duplicates
    if (directorsType === "directors" && leadershipSliderLoaded) {
        return;
    }
    if (directorsType === "commercial_directors" && officeSliderLoaded) {
        return;
    }
    
    let formdata = {
        dynamicurl: "managecontent/v1/directors/list",
        directors_type: directorsType,
        is_available: true,
        page: 1,
        size: 1000  // Large size to get all data at once
    };
    
    $.ajax({
        method: "POST",
        url: "https://www.prestigeconstructions.com/api/apicall",
        dataType: "json",
        data: formdata,
        headers: { Authorization: token },
        success: function (response) {
            if (response.success && response.data.length > 0) {
                /* ---- CLEAR EXISTING CONTENT ---- */
                sliderContainer.empty();
                
                /* ---- APPEND ALL CARDS TO SLIDER ---- */
                $.each(response.data, function (i, item) {
                    sliderContainer.append(renderSliderCard(item, directorsType));
                });
                
                /* ---- INITIALIZE SLIDER ---- */
                if (directorsType === "directors") {
                    if (leadershipSlider) {
                        leadershipSlider.destroy();
                    }
                    leadershipSlider = initSlider('leadership-slider');
                    leadershipSliderLoaded = true;  // Mark as loaded
                } else {
                    if (officeSlider) {
                        officeSlider.destroy();
                    }
                    officeSlider = initSlider('office-slider');
                    officeSliderLoaded = true;  // Mark as loaded
                }
            } else {
                sliderContainer.html(`<li class="splide__slide"><p class="has-text-centered">No data found</p></li>`);
            }
        },
        error: function () {
            showToast("Error", "Unable to fetch slider data");
        }
    });
}

/* =====================
  LOAD MEMBERS FUNCTION (FOR GRID WITH PAGINATION)
===================== */
function loadMembers(directorsType, gridContainer, sliderContainer) {
    let pageNo = (directorsType === "directors") ? leadershipPage : officePage;
    let formdata = {
        dynamicurl: "managecontent/v1/directors/list",
        directors_type: directorsType,
        is_available: true,
        page: pageNo,
        size: dsize
    };
    
    $.ajax({
        method: "POST",
        url: "https://www.prestigeconstructions.com/api/apicall",
        dataType: "json",
        data: formdata,
        headers: { Authorization: token },
        success: function (response) {
            if (response.success && response.data.length > 0) {
                /* ---- CHECK LAST PAGE ---- */
                if (response.data.length < dsize) {
                    if (directorsType === "directors") {
                        viewloadmorebtnleadership = 0;
                    } else {
                        viewloadmorebtnoffice = 0;
                    }
                }
                
                /* ---- APPEND CARDS TO GRID ONLY ---- */
                $.each(response.data, function (i, item) {
                    gridContainer.append(renderGridCard(item, directorsType));
                });
                
                /* ---- INCREMENT PAGE ---- */
                if (directorsType === "directors") {
                    leadershipPage++;
                } else {
                    officePage++;
                }
                
                /* ---- HIDE LOAD MORE IF DONE ---- */
                if (directorsType === "directors" && viewloadmorebtnleadership === 0) {
                    $("#btn-leadership").attr("data-loadmore", 0);
                    $("#loadMoredirectors").addClass("is-hidden");
                }
                if (directorsType === "commercial_directors" && viewloadmorebtnoffice === 0) {
                    $("#btn-office").attr("data-loadmore", 0);
                    $("#loadMoredirectors-office").addClass("is-hidden");
                }
            } else if (pageNo === 1) {
                gridContainer.html(`<p class="has-text-centered">No data found</p>`);
            }
        },
        error: function () {
            showToast("Error", "Unable to fetch data");
        }
    });
}

/* =====================
  DOCUMENT READY
===================== */
document.addEventListener("DOMContentLoaded", function () {
    // Load initial grid data (paginated)
    loadMembers("directors", leadershipGrid, null);
    loadMembers("commercial_directors", officeGrid, null);
    
    // Load all slider data (no pagination)
    loadAllMembersForSlider("directors", leadershipSliderList);
    loadAllMembersForSlider("commercial_directors", officeSliderList);
    
    // Leadership tab click
    btnLeadership.on("click", function () {
        $("#leadership-section").removeClass("is-hidden");
        $("#office-section").addClass("is-hidden");
        btnLeadership.addClass("is-selected");
        btnOffice.removeClass("is-selected");
        $("#loadMoredirectors-office").addClass("is-hidden");
        if ($(this).attr("data-loadmore") == 1) {
            $("#loadMoredirectors").removeClass("is-hidden");
        }
        
        // Reinitialize/refresh slider for mobile on tab switch
        if (window.innerWidth <= 575) {
            if (leadershipSlider) {
                leadershipSlider.refresh();
            } else if (leadershipSliderList.children().length > 0) {
                leadershipSlider = initSlider('leadership-slider');
            }
        }
    });
    
    // Office tab click
    btnOffice.on("click", function () {
        $("#office-section").removeClass("is-hidden");
        $("#leadership-section").addClass("is-hidden");
        btnOffice.addClass("is-selected");
        btnLeadership.removeClass("is-selected");
        $("#loadMoredirectors").addClass("is-hidden");
        if ($(this).attr("data-loadmore") == 1) {
            $("#loadMoredirectors-office").removeClass("is-hidden");
        }
        
        // Reinitialize/refresh slider for mobile on tab switch
        if (window.innerWidth <= 575) {
            if (officeSlider) {
                officeSlider.refresh();
            } else if (officeSliderList.children().length > 0) {
                officeSlider = initSlider('office-slider');
            }
        }
    });
});

/* =====================
  LOAD MORE CLICKS
===================== */
$(document).on("click", ".loadMoredirectors", function () {
    loadMembers("directors", leadershipGrid, null);
});

$(document).on("click", ".loadMoredirectors-office", function () {
    loadMembers("commercial_directors", officeGrid, null);
});