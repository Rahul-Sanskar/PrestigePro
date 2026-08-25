$(document).ready(function() {
    getallabouts();
    $(".append-directors").html("");
    $('.append-executive-directors').html("");
    $('.append-chif-executive-officer').html("");
    $('.append-chief-financial-officer').html("");
    getallmember("Board of directors");
    getallmember("CFO");
    getallmember("CEO");
    getallmember("Executive Directors");

    getalldevlopments("", "is_landmarkhighlight");
    getalldevlopments("residential");
    getalldevlopments("commercial");
    getalldevlopments("hospitality");
    getalldevlopments("retail");



  });

  function getallabouts() {
    var formdata = {};
    formdata["is_available"] = "1";
    formdata["dynamicurl"] = "managecontent/v1/aboutus/list";
    formdata["page"] = 1;
    formdata["size"] = 50;
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
          $('#about_details_bind').html("");
          $.each(response.data, function(i, item) {
            var aboutlogo = checkkeyexistornull(item, "aboutlogo");
            if (checkNUll(aboutlogo) != "") {
              var aboutlogobind = ` <picture>
                                            <source srcset="${changeToWebP(item.aboutlogo)}" type="image/webp">
                                            <source srcset="${changeToWebP(item.aboutlogo)}" type="image/png">
                                            <img loading="lazy" src="${changeToWebP(item.aboutlogo)}" alt="Crisil Logo" width="110" height="50">
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
                                                <h2>${titlebind}</h2>
                                                </div>
                                            </div>
                                            <p>${descriptionbind}</p>
                                    </div>`;
            $('#about_details_bind').append(row);

            $.each(item.AboutUsList, function(i, item1) {
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
          $('.aboutus-projects').hide();
          // showToast("Message", response.message);
        }
      },
      complete: function() {
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
      error: function(response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response.responseJSON.message);
      }
    });

  }

  function getalldevlopments(developments, whichkey) {
    var formdata = {};
    // formdata["dynamicurl"] = "managecontent/v1/propertycategory/list";
    formdata["dynamicurl"] = "managecontent/v1/projectinventorycms/list";
    if (whichkey == "is_landmarkhighlight") {
      formdata["is_landmarkhighlight"] = "true";
    } else {
      formdata["propertycategory"] = developments;
      formdata["is_landmark"] = "true";
    }
    // formdata["is_available"] = true;
    formdata["page"] = 1;
    formdata["size"] = 50;
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
          $.each(response.data, function(i, item) {
            var ProjectImage = checkkeyexistornull(item, "ProjectImage");
            var ProjectName = checkNUll(checkkeyexistornull(item, "ProjectName"));
            var Address = checkNUll(checkkeyexistornull(item, "Address"));
            var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
            var overview = checkNUll(checkkeyexistornull(item, "Overview"));
            var landmark_overview = checkNUll(checkkeyexistornull(item, "landmark_overview"));

            var ProjectImagebind = "";
            if (checkNUll(ProjectImage) != "") {
              ProjectImagebind = `<picture>
                                            <source srcset="${changeToWebP(ProjectImage)}" type="image/webp">
                                            <source srcset="${ProjectImage}" type="image/jpg">
                                            <img loading="lazy" class="square-img-fixed-ratio" src="${changeToWebP(ProjectImage)}" alt="Landmark Developments" width="355" height="355">
                                        </picture>`;
            }
            var landmark_devlopment = ` <li class="splide__slide">
                                <div class="theme-block">
                                    <div class="theme-block-img">
                                       ${ProjectImagebind}
                                    </div>
                                     <div class="theme-block-title">
                                        <h4 class="is-capitalized">${ProjectName}</h4>
                                        <span class="is-capitalized">${landmark_overview}</span>
                                    </div>
                                </div>
                            </li>`;
            if (developments == "residential") {
              $(".append-residential").append(landmark_devlopment);
            } else if (developments == "commercial") {
              $('.append-commercial').append(landmark_devlopment);
            } else if (developments == "hospitality") {
              var hospitality_devlopment = ` <li class="splide__slide">
                                <div class="theme-block">
                                    <div class="theme-block-img">
                                       ${ProjectImagebind}
                                    </div>
                                     <div class="theme-block-title">
                                        <h4 class="is-capitalized">${ProjectName}</h4>
                                    </div>
                                </div>
                            </li>`;
              $('.append-hospitality').append(hospitality_devlopment);
            } else if (developments == "retail") {
              var retail_devlopment = ` <li class="splide__slide">
                                <div class="theme-block">
                                    <div class="theme-block-img">
                                       ${ProjectImagebind}
                                    </div>
                                     <div class="theme-block-title">
                                        <h4 class="is-capitalized">${ProjectName}</h4>
                                    </div>
                                </div>
                            </li>`;
              $('.append-retail').append(retail_devlopment);
            } else {
              var retail_devlopment = ` <li class="splide__slide">
                                <div class="theme-block">
                                    <div class="theme-block-img">
                                       ${ProjectImagebind}
                                    </div>
                                     <div class="theme-block-title">
                                        <h4 class="is-capitalized">${ProjectName}</h4>
                                        <span class="is-capitalized">${landmark_overview}</span>
                                    </div>
                                </div>
                            </li>`;
              $('.append-landmark').append(retail_devlopment);

            }
          });

        } else if (developments == "residential" && response.data.length === 0) {
          $('.residential-datahide').hide();
        } else if (developments == "commercial" && response.data.length === 0) {
          $('.commercial-datahide').hide();
        } else if (developments == "hospitality" && response.data.length === 0) {
          $('.hospitality-datahide').hide();
        } else if (developments == "retail" && response.data.length === 0) {
          $('.retail-datahide').hide();
        } else {
          // showToast("Message", response.message);
        }
      },
      complete: function() {
        $(".theme-loader").removeClass("active");
        // landmark development slider
        new Splide('#landmark-developments-slider', {
          gap: '30px',
          type: 'slide',
          perPage: 3,
          perMove: 1,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            },
          }
        }).mount();
        // landmark development slider
        // residential slider
        new Splide('#residential-slider', {
          gap: '30px',
          type: 'slide',
          perPage: 3,
          perMove: 1,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            },
          }
        }).mount();
        // residential slider
        // commercial slider
        new Splide('#commercial-slider', {
          gap: '30px',
          type: 'slide',
          perPage: 3,
          perMove: 1,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            },
          }
        }).mount();
        // commercial slider
        // hospitality slider
        new Splide('#hospitality-slider', {
          gap: '30px',
          type: 'slide',
          perPage: 3,
          perMove: 1,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            },
          }
        }).mount();
        // hospitality slider
        // retail slider
        new Splide('#retail-slider', {
          gap: '30px',
          type: 'slide',
          perPage: 3,
          perMove: 1,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            },
          }
        }).mount();
        // retail slider
      },
      error: function(response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response.responseJSON.message);
      }
    });
  }


  function getallmember(members) {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/directors/list";
    formdata["boardofmembers"] = members;
    formdata["directors_type"] = "directors";
    formdata["is_available"] = true;
    formdata["page"] = 1;
    formdata["size"] = 50;

    // Get URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var platform = urlParams.get('platform');
    var isAppPlatform = platform === 'app';

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
          $.each(response.data, function(i, item) {
            var alt_text = checkNUll(checkkeyexistornull(item, "alt_text"));
            var alttextbind = alt_text ? `alt='${alt_text}'` : "";
            var image = checkNUll(checkkeyexistornull(item, "image"));
            var directorsname = checkNUll(checkkeyexistornull(item, "directorsname"));
            var designation = checkNUll(checkkeyexistornull(item, "designation"));
            var url = "javascript:void(0);";

            if (checkNUll(item.directorslug) != "") {
              if (members == "Board of directors") {
                url = `https://www.prestigeconstructions.com/about-us/board-of-directors/${item.directorslug}`;
              } else if (members == "Executive Directors") {
                url = `https://www.prestigeconstructions.com/about-us/executive-directors/${item.directorslug}`;
              } else if (members == "CEO") {
                url = `https://www.prestigeconstructions.com/about-us/ceo/${item.directorslug}`;
              } else if (members == "CFO") {
                url = `https://www.prestigeconstructions.com/about-us/cfo/${item.directorslug}`;
              }
            }

            var themeBlockClass = isAppPlatform ? "theme-block-img" : "theme-block-img theme-block-img-with-link";
            var linkTag = isAppPlatform ? "" : `<a href="${url}" class="theme-block-icon">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.20557 17.7941L17.0996 3.9001" stroke="white" stroke-width="0.982456" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.7943 8.76318V3.20557" stroke="white" stroke-width="0.982456" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.2367 3.20557H17.7943" stroke="white" stroke-width="0.982456" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>`;
            var blockLinkTag = isAppPlatform ? "" : `<a href="${url}" class="block-link"></a>`;

            var executive_directors = `<li class="splide__slide">
                        <div class="theme-block">
                            <div class="${themeBlockClass}">
                                <picture>
                                    <source srcset="${changeToWebP(image)}" type="image/webp">
                                    <source srcset="${image}" type="image/jpg">
                                    <img loading="lazy" class="square-img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind} width="350" height="350">
                                </picture>
                                ${linkTag}
                            </div>
                            <div class="theme-block-title">
                                <h4 class="is-capitalized">${directorsname}</h4>
                                <span class="is-capitalized">${designation}</span>
                                ${blockLinkTag}
                            </div>
                        </div>
                    </li>`;

            if (members == "Board of directors") {
              $(".append-directors").append(executive_directors);
            } else if (members == "Executive Directors") {
              $('.append-executive-directors').append(executive_directors);
            } else if (members == "CEO") {
              $('.append-chif-executive-officer').append(executive_directors);
            } else if (members == "CFO") {
              $('.append-chief-financial-officer').append(executive_directors);
            }
          });

        } else if (members == "Board of directors" && response.data.length === 0) {
          $('.director-datahide').hide();
        } else if (members == "Executive Directors" && response.data.length === 0) {
          $('.executivedirectors-datahide').hide();
        } else if (members == "CEO" && response.data.length === 0) {
          $('.chiefexecutive-datahide').hide();
        } else if (members == "CFO" && response.data.length === 0) {
          $('.chiefinancial-datahide').hide();
        } else {
          $('.board-member').hide();
        }
      },
      complete: function() {
        $(".theme-loader").removeClass("active");

        new Splide('#board-of-director-slider', {
          gap: '30px',
          type: 'slide',
          perPage: 3,
          perMove: 1,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 2
            },
            768: {
              perPage: 1
            }
          }
        }).mount();

        new Splide('#executive-directors-slider', {
          gap: '30px',
          type: 'slide',
          perPage: 4,
          perMove: 1,
          pagination: false,
          breakpoints: {
            1599: {
              perPage: 3
            },
            1024: {
              perPage: 2
            },
            768: {
              perPage: 1
            }
          }
        }).mount();

        new Splide('#chief-executive-slider', {
          gap: '30px',
          type: 'slide',
          perPage: 4,
          perMove: 1,
          pagination: false,
          breakpoints: {
            1599: {
              perPage: 3
            },
            1024: {
              perPage: 2
            },
            768: {
              perPage: 1
            }
          }
        }).mount();

        new Splide('#chief-financial-officer-slider', {
          gap: '30px',
          type: 'slide',
          perPage: 4,
          perMove: 1,
          pagination: false,
          breakpoints: {
            1599: {
              perPage: 3
            },
            1024: {
              perPage: 2
            },
            768: {
              perPage: 1
            }
          }
        }).mount();
      },
      error: function(response) {
        $(".theme-loader").removeClass("active");
        showToast("Error", response.responseJSON.message);
      }
    });
  }