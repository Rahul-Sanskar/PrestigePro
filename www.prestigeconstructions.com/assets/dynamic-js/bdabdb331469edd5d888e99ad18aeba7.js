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

  // director slider
  new Splide('#board-of-director-slider', {
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
  // director slider
  // executive directors slider
  new Splide('#executive-directors-slider', {
    gap: '30px',
    type: 'slide',
    perPage: 4,
    perMove: 1,
    pagination: false,
    breakpoints: {
      1599: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    }
  }).mount();
  // executive directors slider
  // chief executive slider
  new Splide('#chief-executive-slider', {
    gap: '30px',
    type: 'slide',
    perPage: 4,
    perMove: 1,
    pagination: false,
    breakpoints: {
      1599: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    }
  }).mount();
  // chief executive slider
  // chief financial officer slider
  new Splide('#chief-financial-officer-slider', {
    gap: '30px',
    type: 'slide',
    perPage: 4,
    perMove: 1,
    pagination: false,
    breakpoints: {
      1599: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    }
  }).mount();
  // chief financial officer slider


  // properties-search-tab
    function openTab2(evt, tabName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("content-tab2");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab2");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" is-active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " is-active";
    }
    // properties-search-tab

  $(document).ready(function() {
        get_all_awards();
    });

    function get_all_awards() {
        var formdata = {};
        formdata["dynamicurl"] = "managecontent/v1/history/list";
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
                  $(".section-awards").removeClass("is-hidden");
                    $('.bind_year_historytimeline').html("");
                    $('.bind_historytimeline').html("");
                    var srno = 1;
                    var array_years = [];
                    $.each(response.data, function(i, item) {
                        /** Year Bind start */
                        var years = checkNUll(checkkeyexistornull(item, "year"));
                        var historylist = checkNUll(checkkeyexistornull(item, "historylist"));
                        if (!array_years.includes(years)) {
                            if (checkNUll(years) != "") {
                                array_years.push(years);
                                var bind_years = `<li class="tab2" onclick="openTab2(event,'historytimeline-${years}')">
                                            <h6 class="is-size-6">${years}</h6>
                                        </li>`;
                                $('.bind_year_historytimeline').append(bind_years);
                            } else {
                                var bind_years = `<li class="tab2" onclick="openTab2(event,'awards-notavailable')">
                                            <h6 class="is-size-6">Years</h6>
                                        </li>`;
                                $('.bind_year_historytimeline').append(bind_years);
                            }
                        }
                        if (checkNUll(historylist) != "") {
                            if (checkNUll(years) != "") {
                                var bind_historytimeline = `<div id="historytimeline-${years}" class="content-tab2">
                                                <div class="awards-tabs-column">
                                                    <div class="columns is-multiline  awards-tabs-cols bind_historytimeline_specifically_${i}">
                                                        
                                                    </div>
                                                </div>
                                            </div>`;
                            } else {
                                var bind_historytimeline = `<div id="awards-notavailable" class="content-tab2">
                                                <div class="awards-tabs-column">
                                                    <div class="columns is-multiline  awards-tabs-cols bind_historytimeline_specifically_${i}">
                                                        
                                                    </div>
                                                </div>
                                            </div>`;
                            }
                            $(".bind_historytimeline").append(bind_historytimeline);
                            $.each(historylist, function(j, historytimeline) {
                                var alt_text = checkNUll(checkkeyexistornull(historytimeline, "alt_text"));
                                var alttextbind = "";
                                if (checkNUll(alt_text) !== "") {
                                    alttextbind = "alt='" + alt_text + "'";
                                } else {
                                    alttextbind = "";
                                }
                                // var Image = checkNUll(checkkeyexistornull(historytimeline, "Image"));
                                var description = checkNUll(checkkeyexistornull(historytimeline, "description"));
                                var HistoryTitle = checkNUll(checkkeyexistornull(historytimeline, "HistoryTitle"));
                                // var AwardFor = checkNUll(checkkeyexistornull(historytimeline, "AwardFor"));
                                var bind_historytimeline_specific = `<div class="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen awards-tabs-col">
                                                              <div class="theme-block p-4">
                                                                
                                                                    <span class="theme-img-title mb-0">${description}</span>
                                                                    
                                                                
                                                            </div>
                                                            </div>`;
                                $(".bind_historytimeline_specifically_" + i).append(bind_historytimeline_specific);
                            });
                        }
                        /** Year Bind end */
                    });
                } else {
                  $(".section-awards").addClass("is-hidden");
                }
            },
            complete: function() {
                var firstLi = document.querySelector('.bind_year_historytimeline li:first-child');
                firstLi.click();
                $(".theme-loader").removeClass("active");
            },
            error: function(response) {
                $(".theme-loader").removeClass("active");
            }
        });

    }