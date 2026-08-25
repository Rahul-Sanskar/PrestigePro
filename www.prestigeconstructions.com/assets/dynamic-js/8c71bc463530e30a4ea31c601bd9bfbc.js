const urlParams = new URLSearchParams(window.location.search);
  var search = urlParams.get('search');

  var propertytype = urlParams.get('propertytype');
  var construction = urlParams.get('construction');
  var dbedrooms = urlParams.get('dbedrooms');
  var minprice = urlParams.get('minprice');
  var maxprice = urlParams.get('maxprice');

  $("#schedule_date").flatpickr({
    dateFormat: "Y-m-d",
    minDate: "today",
    enableTime: false,
  });
  $("#booking_date").flatpickr({
    dateFormat: "Y-m-d",
    minDate: "today",
    enableTime: false,
  });
  $(document).ready(function() {
    $(".theme-loader").addClass("active");
    // var locationid="";
    // if(localStorage.getItem('want_to_use_ip')=="yes"){
    //var locationid = (checkNUll(urlParams.get('location')) != "") ? urlParams.get('location') : localStorage.getItem('currentlocationbyipadress');
    // }else{
    // locationid = (checkNUll(urlParams.get('location')) != "") ? urlParams.get('location') : "";
    // }
    var tempa = localStorage.getItem("clickedcity")
    if (tempa == "all") {
      var locationid = "";
      var tempa = localStorage.setItem("clickedcity", null);
    } else {
      var locationid = (checkNUll(urlParams.get('location')) != "") ? urlParams.get('location') : localStorage.getItem('currentlocationbyipadress');
    }

    bind_type(propertytype);
    bind_beds(dbedrooms);
    bins_status(construction);
    if (checkNUll(search) != "") {
      $("#custom_search").val(search);
    }
    if (minprice != "" && checkNUll(maxprice) != "") {
      $(".residential-minrang").val(minprice);
      $(".residential-maxrang").val(maxprice);
      $(".residential-slider").data("ionRangeSlider").update({
        from: minprice,
        to: maxprice
      });

      $('.index_from').text(formatIndianNumber(minprice));
      $('.index_to').text(formatIndianNumber(maxprice));
    }
    if (urlParams.size > 0) {
      $("#is_active_filter").val("yes");
    } else {
      // $("#is_active_filter").val("no");
    }
    setTimeout(() => {
      projectcitylistwithcount(locationid);

    }, 2000);
  });
  let ProjectID = "";
  let ProjectName = "";
  /* Residential Projects City List Start */
  function projectcitylistwithcount(locationid) {
    var formdata = {};
    srno = 1;
    formdata["dynamicurl"] = "managecontent/v1/cityprojectcount/list";
    formdata["is_available"] = true;
    formdata["propertycategory"] = "Residential";
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
        $('.residential_project_citylist').html('');
        if (response.success == true && response.data.length > 0) {
          //   console.log(locationid);
          $.each(response.data, function(i, item) {
            var CityText = checkNUll(checkkeyexistornull(item, "CityText")).toLowerCase();
            var count = checkkeyexistornull(item, "count");
            if (checkNUll(locationid) != "") {

              if (CityText == locationid) {

                // <a href="https://www.prestigeconstructions.com/residential-projects/${CityText}" class="btnclickprojectcity"  data-city="${CityText}">
                // <a href="JAVASCRIPT:;" class="btnclickprojectcity" data-city="${CityText}">
                var projectcity = `<li>
                            <a href="https://www.prestigeconstructions.com/residential-projects/${CityText}" class="btnclickprojectcity"  data-city="${CityText}">
                                    <div class="projects-location-items projectactive active cursor-pointer" data-citytext='${item.CityText}' data-citycode='${item.CityText}'>
                                        <h4>${item.CityText}</h4>
                                        <span>${count} Projects Available</span>
                                    </div>
                                    </a>
                                </li>`;
                $('.residential_project_citylist').append(projectcity);
              } else {
                // <!--<a href="https://www.prestigeconstructions.com/residential-projects/${CityText}" data-city="${CityText}">-->
                //   <a href="JAVASCRIPT:;" class="btnclickprojectcity" data-city="${CityText}">
                var projectcity = `<li>
                                          <a href="https://www.prestigeconstructions.com/residential-projects/${CityText}" class="btnclickprojectcity" data-city="${CityText}">
                                            <div class="projects-location-items projectactive  cursor-pointer" data-citytext='${item.CityText}' data-citycode='${item.CityText}'>
                                                <h4>${item.CityText}</h4>
                                                <span>${count} Projects Available</span>
                                            </div>
                                            </a>
                                        </li>`;
                $('.residential_project_citylist').append(projectcity);
              }
              // if(CityText=="all"){
              //   $('[data-citycode="all"]').addClass('active');
              // }
            } else {
              // <!--<a href="https://www.prestigeconstructions.com/residential-projects/${CityText}" data-city="${CityText}">-->
              //   <a href="JAVASCRIPT:;" class="btnclickprojectcity" data-city="${CityText}"></a>
              var projectcity = `<li>
                        <a href="https://www.prestigeconstructions.com/residential-projects/${CityText}" class="btnclickprojectcity" data-city="${CityText}">
                                            <div class="projects-location-items projectactive cursor-pointer" data-citytext='${item.CityText}' data-citycode='${item.CityText}'>
                                                <h4>${item.CityText}</h4>
                                                <span>${count} Projects Available</span>
                                            </div>
                                            </a>
                                        </li>`;
              $('.residential_project_citylist').append(projectcity);
            }


          });
          // var delhiCity = `<li>
          //        <a href="https://www.prestigeconstructions.com/residential-projects/delhi-ncr" data-city="delhi">
          //            <div class="projects-location-items projectactive cursor-pointer" data-citytext="delhi-ncr" data-citycode="delhi-ncr">
          //                <h4>Delhi NCR</h4>
          //                <span>0 Projects Available</span>
          //            </div>
          //        </a>
          //    </li>`;
          // $('.residential_project_citylist').append(delhiCity);
          setTimeout(() => {

            if (checkNUll(locationid) != "" && checkNUll(locationid) != localStorage.getItem('currentlocationbyipadress')) {
              // console.log("1");
              $('.submit_btn').trigger('click');
            } else if (checkNUll(locationid) == "" && checkNUll(locationid) == localStorage.getItem('currentlocationbyipadress')) {
              // console.log("2");
              if (checkNUll($('.projectactive.active').attr("data-citycode")) != "") {

                projectlist(locationid);

              } else {
                projectlist();

              }
            } else {

              // console.log("3");

              if ($("#is_active_filter").val() === "yes") {

                $('.submit_btn').trigger('click');
              } else if (checkNUll(locationid) == localStorage.getItem('currentlocationbyipadress')) {
                $('.projectactive.active').trigger('click');
              } else {
                projectlist();
              }
            }
          }, 1000);
        } else {
          projectlist();
        }
      },
      complete: function() {
        $(".theme-loader").removeClass("active");
        var add_class = "";
        if (checkNUll($('.projectactive.active').attr("data-citycode")) == "") {
          add_class = "active"
        }
        // <a href="https://www.prestigeconstructions.com/residential-projects/" data-city="${CityText}">
        //<a href="JAVASCRIPT:;" class="btnclickprojectcity" data-city="all">
        var projectcity = `<li>
                                  
                                     <a href="https://www.prestigeconstructions.com/residential-projects" class="btnclickprojectcity" data-city="all">
                                    <div class="projects-location-items projectactive cursor-pointer ${add_class}" data-citycode='all'>
                                        <h4>All Properties</h4>
                                    </div>
                                  </a>
                            </li>`;
        $('.residential_project_citylist').prepend(projectcity);
      }
    });
  }
  // $(document).on("click", ".btnclickprojectcity", function(e) {
//   e.preventDefault();
//     var curentcity = $(this).attr("data-city");
//     localStorage.setItem("clickedcity", curentcity);
//     if (curentcity != "all") {
//       window.location.href = "https://www.prestigeconstructions.com/residential-projects/" + curentcity;
//     } else {
//       // window.location.href = "https://www.prestigeconstructions.com/residential-projects/";
//     }
//   });
$(document).on("click", ".btnclickprojectcity", function(e) {
  e.preventDefault();
    var curentcity = $(this).attr("data-city");
    var languagePrefix = $("html").attr("lang");
    localStorage.setItem("clickedcity", curentcity);
    if (curentcity != "all") {
      if (languagePrefix && languagePrefix == "en"){
        window.location.href = "https://www.prestigeconstructions.com/residential-projects/" + curentcity;
      } else{
        window.location.href = "https://www.prestigeconstructions.com/"+languagePrefix+"/"+"residential-projects/" + curentcity;
      } 
    }else {
      // window.location.href = "https://www.prestigeconstructions.com/residential-projects/";
    } 
    
    
  });
  /* Residential Projects City List End */
  // var page = 1;
  // var pageSize = 9;
  // var check = 0;

  /* Residential Projects List Start*/


  // $(document).on('click', '.loadMoreBtnForResidential', function() {
  //   page++;
    // var citycode = $('.projectactive.active').attr("data-citycode");
    // var search = $('#custom_search').val();
    // var type = getselectedtypevalues();
    // var minprice = parseInt($(".residential-minrang").val());
    // var maxprice = parseInt($(".residential-maxrang").val());
    // var configuration = getselectedbedvalues();
    // var constructionstatus = getselectedstatusvalues();
    // directiontype = $(".direction_click.active").attr("data-directiontype");
    // // localStorage.setItem('want_to_use_ip', "no");
    // if ($("#is_active_filter").val() == "yes") {
    //   projectlist(citycode, search, type, minprice, maxprice, configuration, constructionstatus, directiontype);
    // } else {
    //   directiontype = $(".direction_click.active").attr("data-directiontype");
    //   projectlist(citycode, "", "", "", "", "", "", directiontype);
    // }

  // });
  var page = 1;
  var pageSize = 18;
  var check = 0;
  var loading = true; // Prevent multiple triggers
  var hasMoreData = true;

  $(window).on('scroll', function () {
      if (loading || !hasMoreData) return;

      // Trigger when 75% of page is scrolled
      if ($(window).scrollTop() + $(window).height() >= $(document).height() * 0.50) {
          loading = true;
          page++;

          var citycode = $('.projectactive.active').attr("data-citycode");
          var search = $('#custom_search').val();
          var type = getselectedtypevalues();
          var minprice = parseInt($(".residential-minrang").val());
          var maxprice = parseInt($(".residential-maxrang").val());
          var configuration = getselectedbedvalues();
          var constructionstatus = getselectedstatusvalues();
          directiontype = $(".direction_click.active").attr("data-directiontype");
          // localStorage.setItem('want_to_use_ip', "no");
          if ($("#is_active_filter").val() == "yes") {
            projectlist(citycode, search, type, minprice, maxprice, configuration, constructionstatus, directiontype);
          } else {
            directiontype = $(".direction_click.active").attr("data-directiontype");
            projectlist(citycode, "", "", "", "", "", "", directiontype);
          }
      }
  });

  $(document).on("click", ".dataactive", function() {
    $(".dataactive").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on("click", ".direction_click", function() {
    page = 1;
    var citycode = $('.projectactive.active').attr("data-citycode");
    var search = $('#custom_search').val();
    var type = getselectedtypevalues();
    var minprice = parseInt($(".residential-minrang").val());
    var maxprice = parseInt($(".residential-maxrang").val());
    directiontype = $(this).data("directiontype");
    var configuration = getselectedbedvalues();
    var constructionstatus = getselectedstatusvalues();
    if ($("#is_active_filter").val() == "yes") {
      projectlist(citycode, search, type, minprice, maxprice, configuration, constructionstatus, directiontype);
    } else {
      directiontype = $(".direction_click.active").attr("data-directiontype");
      projectlist(citycode, "", "", "", "", "", "", directiontype);
    }
  });

  function projectlist(citycode = "", search = "", type = "", minprice = "", maxprice = "", configuration = "", construction = "", directiontype) {
    loading = true;
    if (page == 1) {
      hasMoreData = true;
    }
    var formdata = {};
    srno = 1;
    formdata["dynamicurl"] = "managecontent/v2/projectinventorycms/list";
    formdata["propertycategory"] = "Residential";
    formdata["is_available"] = "true";
    //formdata["CityText"] = citycode;
    if (citycode == "all") {
      formdata["CityText"] = "";
    } else {
      formdata["CityText"] = citycode;
    }
    formdata["page"] = page;
    formdata["size"] = pageSize;
    // formdata["customfilter"] = "cms";

    if (checkNUll(maxprice) != "") {
      formdata["maxprice"] = maxprice;
    }
    // if (checkNUll(minprice) != "") {
    formdata["minprice"] = minprice;
    // }
    if (checkNUll(search) != "") {
      formdata["search"] = search;
    }
    if (checkNUll(type) != "") {
      formdata["propertytypearrayfilter"] = type;
    }
    if (checkNUll(configuration) != "" && configuration != []) {
      formdata["bedsarrayfilter"] = configuration;
    }
    if (checkNUll(construction) != "") {
      formdata["statusarrayfilter"] = construction;
    }
    if (checkNUll(directiontype) != "") {
      formdata["directiontype"] = directiontype;
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
        $('.placeholder-card').remove();
        if (page == 1) {
          check = 0;
          $('.appendresidentialproject').html('');
          // $(".loadMoreBtnForResidential").removeClass("is-hidden");
          // $(".loadMoreBtnForResidential").html('').html('Load More');
          // $(".loadMoreBtnForResidential").attr('disabled', false);

        }
        if (response.success == true && response.data && response.data.length > 0) {
          if (response.data.length < pageSize) {
            hasMoreData = false;
          }
          $.each(response.data, function(i, item) {
            check = 1;
            var projectimage = checkNUll(checkkeyexistornull(item, "ProjectImage"));
            var ProjectLogopng = checkNUll(checkkeyexistornull(item, "ProjectLogopng"));
            var ProjectLogo = checkNUll(checkkeyexistornull(item, "ProjectLogo"));
            var LatLong = checkNUll(checkkeyexistornull(item, "LatLong"));
            var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
            var Project_slug = checkNUll(checkkeyexistornull(item, "Project_slug"));
            var DisplayArea = checkNUll(checkkeyexistornull(item, "DisplayArea"));

            var url = "";
            var bind_property_type_child = "";
            if (checkNUll(checkkeyexistornull(item, "ChildProject")) != "") {
              if (item.ChildProject.length > 0) {
                var bind_propertyname_display = "";
                var uniqueValues = []; // Array to store unique values
                $.each(item.ChildProject, function(c, child) {
                  if (checkkeyexistornull(child, "propertyttype") != "") {
                    var propertyType = checkNUll(child.propertyttype);
                    if (!uniqueValues.includes(propertyType)) {
                      if (c != 0 && bind_propertyname_display !== "") {
                        bind_propertyname_display += ", ";
                      }
                      bind_propertyname_display += propertyType;
                      uniqueValues.push(propertyType); // Add propertyType to uniqueValues array
                    }
                  }
                });
                bind_property_type_child = bind_propertyname_display;
              } else {
                bind_property_type_child = checkNUll(item.PropertyTypeText);
              }
              url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/${Project_slug}`;
            } else {
              bind_property_type_child = checkNUll(item.PropertyTypeText);
              if (Project_slug == "hyde" || Project_slug == "regent") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-finsbury-park/${Project_slug}`;

              } else if (Project_slug == "apartments" || Project_slug == "villas") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-lakeside-habitat/${Project_slug}`;

              } else if (Project_slug == "the-residences" || Project_slug == "the-willows") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-park-grove/${Project_slug}`;

              } else if (Project_slug == "aspen-greens" || Project_slug == "aston-park" || Project_slug == "avalon-park" ||
                Project_slug == "eden-park" || Project_slug == "great-acres" || Project_slug == "meridian-park" || Project_slug == "fernvale" || Project_slug == "eaton-park") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-sarjapur/${Project_slug}`;

              } else if (Project_slug == "apartmentss" || Project_slug == "bellagio") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-rajendra-nagar/${Project_slug}`;

              } else if (Project_slug == "apartmentss" || Project_slug == "apartment") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-rajendra-nagar/${Project_slug}`;

              } else if (Project_slug == "bellanza" || Project_slug == "siesta" || Project_slug == "forest-hills") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-mulund/${Project_slug}`;

              } else if (Project_slug == "clover-leaf" || Project_slug == "villa") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-white-meadows/${Project_slug}`;

              } 
              else if (Project_slug == "villa-in-kakkanad" || Project_slug == "apartments-in-kakkanad") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/prestige-hillside-gateway/${Project_slug}`;
              }
              else if (Project_slug == "oakwood" || Project_slug == "mulberry" || Project_slug == "mayflower") {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/the-prestige-city-indirapuram/${Project_slug}`;

              }
              else {
                url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/${Project_slug}`;
              }
            }

            var svg_alt_text = checkNUll(checkkeyexistornull(item, "svglogo_alt_text"));
            var pnglogo_alt_text = checkNUll(checkkeyexistornull(item, "pnglogo_alt_text"));

            var imagetobind = get_svg_or_png(ProjectLogopng, ProjectLogo);
            var imagetobindalttext = get_svg_or_png_alttext(ProjectLogopng, ProjectLogo, svg_alt_text, pnglogo_alt_text);
            var logoalttextbind = "";
            if (checkNUll(svg_alt_text) !== "") {
              logoalttextbind = "alt='" + imagetobindalttext + "'";
            } else {
              logoalttextbind = "";
            }

            var propertytype = "";
            if (checkNUll(bind_property_type_child) != "") {
              propertytype = `<li>
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
                                                            <span>${bind_property_type_child}</span>
                                                        </div>
                                                    </div>
                                                </li>`;
            }
            var attributes = "";
            if (checkNUll(item.bedroomdisplaytext) != "") {
              attributes = `<li>
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
                                                                <span>${item.bedroomdisplaytext}</span>
                                                            </div>
                                                        </div>
                                                    </li>`;
            }

            var displayprice = "";
            if (checkNUll(item.price_on_request) == "true" || checkNUll(item.price_on_request) == true) {
              displayprice = `<span class="project-price open_enquirey_sidebar cursor-pointer" data-projectid='${item.ProjectID}' data-projectname='${item.ProjectName}'>Price on Request</span>`;
              
            } else {
              displayprice = `<span class="project-price"> ${checkNUll(item.DisplayPrice)}</span>`
            }

            var ProjectStatus = "";
            if (checkNUll(item.ProjectStatus) != "") {
              var class_color = get_color_for_status(item.ProjectStatus);
              ProjectStatus = `<div class="project-status ${class_color}"><span>${checkNUll(item.ProjectStatus)}</span></div>`;
            }
            var developmentsize = "";
            if (checkNUll(item.Size) != "") {
              developmentsize = `<li>
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
                                                                    <span>${item.Size}</span>
                                                                </div>
                                                            </div>
                                                        </li>`;

            }
            var units = "";
            if (checkNUll(item.total_unit) != "") {
              units = `<li>
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
                                                        <span>${item.total_unit} Units</span>
                                                    </div>
                                                </div>
                                            </li>`;
            }

            var href = "javascript:void(0);"
            if (checkNUll(item.location_url_link) != "") {
              if (LatLong.coordinates.length > 0) {

                lat = LatLong.coordinates[0];
                lng = LatLong.coordinates[1];
                href = checkNUll(item.location_url_link);
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
            var alt_text = checkNUll(checkkeyexistornull(item, "Featured_image_alt_text"));
            var alttextbind = "";
            if (checkNUll(alt_text) !== "") {
              alttextbind = "alt='" + alt_text + "'";
            } else {
              alttextbind = "";
            }
            var logobind = "";
            if (checkNUll(imagetobind) != "") {
              var logobind = `  <div class="project-logo">
                                            <picture>
                                                <source srcset="${imagetobind}" type="image/webp">
                                                <source srcset="${imagetobind}" type="image/png">
                                               <img ${i < 6 ? '' : 'loading="lazy"'} src="${imagetobind}" ${logoalttextbind} width="70" height="70">
                                            </picture>
                                        </div>`;
            }
            //  STEP 1: Preload first 6 images
            if (i < 6) {
              const preloadWebP = changeToWebP(projectimage);
              $('head').append(`<link rel="preload" as="image" href="${preloadWebP}" fetchpriority="high">`);
            }
            var residentialproject = `<div class="column is-12-mobile is-6-tablet is-6-desktop is-4-widescreen projects-col">
                                                    <div class="project-vertical-block">
                                                        <a href="${url}" class="block-link"></a>
                                                            ${ProjectStatus}
                                                        <div class="projects-img">
                                                            <picture>
                                                                <source srcset="${changeToWebP(projectimage)}" type="image/webp">
                                                                <source srcset="${projectimage}" type="image/jpg">
                                                                <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(projectimage)}" ${alttextbind} width="470" height="260">
                                                            </picture>
                                                            ${logobind}
                                                        </div>
                                                        <div class="project-title-and-price mt-4">
                                                            <div class="project-title">
                                                            <h2><a href="${url}" class="block-link"></a>${checkNUll(item.ProjectName)}</h2>
                                                            </div>
                                                            <div class="project-desc-price">
                                                                ${bind_area}
                                                                ${displayprice}
                                                            </div>
                                                        </div>
                                                        <div class="project-configurations">
                                                            <ul>
                                                               ${propertytype}
                                                               ${attributes}
                                                               ${developmentsize}
                                                               ${units}
                                                            </ul>
                                                        </div>
                                                        <div class="project-contact-detail">
                                                            <ul>
                                                                <li class="project-contact-item">
                                                                    <a href="javascript:void(0);"
                                                                     data-alttextbind="${checkNUll(alttextbind)}" 
                                                                     data-logoalttextbind="${checkNUll(logoalttextbind)}"  
                                                                     data-image="${checkNUll(item.ProjectImage)}" 
                                                                     data-imagelogo="${checkNUll(imagetobind)}"
                                                                     data-name="${checkNUll(item.ProjectName)}" 
                                                                     data-address="${checkNUll(item.Address)}" 
                                                                     data-price="${checkNUll(item.DisplayPrice)}" 
                                                                     data-projectid="${checkNUll(item.ProjectID)}"  
                                                                     data-priceonrequest="${checkNUll(item.price_on_request)}"
                                                                     data-citytext="${checkNUll(item.CityText)}"                                                                    
                                                                    class="theme-btn line-btn open_enquiry_sidebar" open-sidebar="enquire-now-sidebar">
                                                                        <div class="project-contact-icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                <path d="M10 14l11 -11" />
                                                                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                                                            </svg>
                                                                        </div>
                                                                        <span class="addenquire">Enquire Now</span>
                                                                    </a>
                                                                </li>
                                                                <li class="project-contact-item">
                                                                <a href="javascript:void(0);"
                                                                     data-alttextbind="${checkNUll(alttextbind)}" 
                                                                     data-logoalttextbind="${checkNUll(logoalttextbind)}"  
                                                                     data-image="${checkNUll(item.ProjectImage)}" 
                                                                     data-imagelogo="${checkNUll(imagetobind)}" 
                                                                     data-name="${checkNUll(item.ProjectName)}" 
                                                                     data-address="${checkNUll(item.Address)}" 
                                                                     data-price="${checkNUll(item.DisplayPrice)}" 
                                                                     data-projectid="${checkNUll(item.ProjectID)}" 
                                                                     data-projectname="${checkNUll(item.ProjectName)}" 
                                                                     data-priceonrequest="${checkNUll(item.price_on_request)}"
                                                                     data-citytext="${checkNUll(item.CityText)}"
                                                                    class="theme-btn line-btn open_booking_sidebar" open-sidebar="book-a-site-visit-sidebar">
                                                                        <div class="project-contact-icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                                                            </svg>
                                                                        </div>
                                                                        <span class="addsitevisit">Book a Site Visit</span>
                                                                    </a>
                                                                </li>
                                                              <li class="project-price-and-contact-item hide_contact_number${i} is-hidden">
                                                                    <a href="#" class="theme-btn btn-icon bind_contcat_number${i}">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>`;
            $('.appendresidentialproject').append(residentialproject);
            var callingcontact = checkNUll(checkkeyexistornull(item, "callingcontact"));
            var ContactNumber = checkkeyexistornull(item, "ContactNumber");
            if (checkNUll(callingcontact) != "") {
              ContactNumber = callingcontact.replace(/\s/g, '');
              $(".hide_contact_number" + i).removeClass("is-hidden");
              $(".bind_contcat_number" + i).attr("href", "tel:" + ContactNumber);
            } else {
              $(".hide_contact_number" + i).addClass("is-hidden");
            }

          });


        } else {
          hasMoreData = false;
          if (check === 0) {
            var row = `<div class="sv-qr-code-detail border border-gray p-3">
                                NO DATA FOUND
                                </div>`;
            $('.appendresidentialproject').html("").append(row);
          }
        }
        if (checkNUll(citycode) !== "" && checkNUll(citycode) !== "all") {
          var capitalizedCity = citycode.charAt(0).toUpperCase() + citycode.slice(1);
          $(".bindcitytitle").html("Residential Projects in " + capitalizedCity);
        } else {
          $(".bindcitytitle").html("Residential Projects");
        }
      },
      complete: function() {
        $(".theme-loader").removeClass("active");
        $(".submit_btn").html("Submit");
        $(".submit_btn").attr("disabled", false);
        $("#residential-filter-sidebar").removeClass("active");
        // var currentUrl = window.location.href;
        // var updatedUrl = currentUrl.split('?')[0]; // Remove everything after the question mark
        // history.pushState(null, "", updatedUrl);


        get_location_rounded_pill(citycode, "Residential", "dataactive direction_click", directiontype);
        if ($("#is_active_filter").val() == "yes") {
          $(".remove_filter").removeClass("is-hidden");
        } else {
          $(".remove_filter").addClass("is-hidden");
        }
        setTimeout(() => {
          loading = false;
        }, 500);
      }
    })
  }
  /* Residential Projects List End*/

  /** Filter code start */
  $(document).on("click", ".bind_all_Dropdwons", function() {
    $("#residential-filter-sidebar").addClass("active");
  });
  $(document).on("click", ".submit_btn", function() {
    $("#is_active_filter").val("yes");
    $(".submit_btn").html("Submitting..");
    $(".submit_btn").attr("disabled", true);
    page = 1;
    var citycode = $('.projectactive.active').attr("data-citycode");
    var search = $('#custom_search').val();
    var type = getselectedtypevalues();
    var configuration = getselectedbedvalues();
    var minprice = parseInt($(".residential-minrang").val());
    var maxprice = parseInt($(".residential-maxrang").val());
    var constructionstatus = getselectedstatusvalues();

    projectlist(citycode, search, type, minprice, maxprice, configuration, constructionstatus);
  });
  $(document).on("click", ".reset_btn", function() {
    $("#is_active_filter").val("no");
    $("#reset_frm_filter")[0].reset();
    $('.direction_click:first').addClass('active');

    document.querySelector('.residential-minrang').value = '4000000';
    document.querySelector('.residential-maxrang').value = '1800000';
    $(".residential-slider").data("ionRangeSlider").reset();

    var citycode = $('.projectactive.active').attr("data-citycode");
    projectlist(citycode);

    // var currentUrl = window.location.href;
    // var updatedUrl = currentUrl.split('?')[0]; // Remove everything after the question mark
    // history.pushState(null, "", updatedUrl);
    // location.reload()
    // Function to remove specific query parameters from the URL
      function removeQueryParams(paramsToRemove) {
        var currentUrl = new URL(window.location.href); // Get current URL

        // Remove only the specified parameters
        paramsToRemove.forEach(param => currentUrl.searchParams.delete(param));

        var updatedUrl = currentUrl.origin + currentUrl.pathname + currentUrl.search; // Keep base URL + remaining query params

        if (updatedUrl !== window.location.href) {
            history.replaceState(null, "", updatedUrl); // Replace state to avoid duplicate history entries
            location.reload(); // Reload page to apply changes
        }
      }

      // Define the parameters to remove
      var paramsToRemove = ["search","location", "propertytype", "construction", "dbedrooms", "minprice", "maxprice"];

      // Call function to remove specified query parameters
      removeQueryParams(paramsToRemove);
  });
  $(document).on('click', '.projectactive', function() {
    //   alert("test123")
    $('.appendresidentialproject').html('');
    $('.projectactive.active').removeClass("active");
    $(this).addClass("active");
    var citycode = $('.projectactive.active').attr("data-citycode");
    var search = $('#custom_search').val();
    var type = getselectedtypevalues();
    var minprice = parseInt($(".residential-minrang").val());
    var maxprice = parseInt($(".residential-maxrang").val());
    var configuration = getselectedbedvalues();
    var constructionstatus = getselectedstatusvalues();
    directiontype = $(".direction_click.active").attr("data-directiontype");
    page = 1;
    $('.dataactive.active').removeClass('active');
    if (checkNUll(citycode) == "") {
      if ($("#is_active_filter").val() == "yes") {
        $('.dataactive:last').addClass('active');
        projectlist(citycode, search, type, minprice, maxprice, configuration, constructionstatus, directiontype);
      } else {
        directiontype = $(".direction_click.active").attr("data-directiontype");
        projectlist(citycode, "", "", "", "", "", "", directiontype);
      }
    } else {

      if (citycode == "all") {
        projectlist();
      } else {
        projectlist(citycode);
      }
    }
  });

  var rangeSlider = $('.properties-range-slider.residential-slider');
  rangeSlider.on('input', function() {
    var str1 = $('.properties-range-slider.residential-slider').siblings(".irs").find(".irs").find(".irs-from").html().replace(/\s/g, '');
    var str2 = $('.properties-range-slider.residential-slider').siblings(".irs").find(".irs").find(".irs-to").html().replace(/\s/g, '');
    var fromValue = parseInt(str1);
    var toValue = parseInt(str2);

    $('.index_from').text(formatIndianNumber(fromValue));
    $('.index_to').text(formatIndianNumber(toValue));
    // $('#index_from').attr("value", formatIndianNumber(fromValue));
    // $('#index_to').attr("value", formatIndianNumber(toValue));
  });



  function bind_type(propertytype) {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/getallprojecttype/list";
    formdata['propertycategory'] = "Residential";
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "https://www.prestigeconstructions.com/api/apicall",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(result) {
        $(".bind_filter_types").html("");
        $.each(result.data, function(i, item) {
          var propertyttype = checkNUll(checkkeyexistornull(item, "propertyttype"));
          if (item._id == propertytype) {
            if (checkNUll(item._id) != "") {
              var row = ` <div class="custom-radio-btn">
                                                    <input class="type" type="checkbox" id="${item._id}" data-text="${item._id}" name="type" value="${item._id}" checked>
                                                    <label for="${item._id}">${item._id}</label>
                                                </div>`;
              $(".bind_filter_types").append(row);
            }
          } else {
            if (checkNUll(item._id) != "") {
              var row = ` <div class="custom-radio-btn">
                                                    <input class="type" type="checkbox" id="${item._id}" data-text="${item._id}" name="type" value="${item._id}">
                                                    <label for="${item._id}">${item._id}</label>
                                                </div>`;
              $(".bind_filter_types").append(row);
            }
          }

        });

      },
      complete: function() {

      }
    });
  }

  function bins_status(construction) {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/getallprojectstatus/list";
    formdata['propertycategory'] = "Residential";
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "https://www.prestigeconstructions.com/api/apicall",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(result) {
        $(".bins_status").html("");
        $.each(result.data, function(i, item) {
          var ProjectStatus = checkNUll(checkkeyexistornull(item, "ProjectStatus"));
          if (item._id == construction) {
            if (checkNUll(item.ProjectStatus) != "") {
              var row = `<div class="custom-checkbox-btn">
                                        <input class="type" type="checkbox" id="${ProjectStatus}" data-status="${ProjectStatus}" name="status" value="${item._id}" checked>
                                        <label for="${ProjectStatus}">${ProjectStatus}</label>
                                    </div>`;
              $(".bins_status").append(row);
            }
          } else {
            if (checkNUll(item.ProjectStatus) != "") {
              var row = `<div class="custom-checkbox-btn">
                                        <input class="type" type="checkbox" id="${ProjectStatus}" data-status="${ProjectStatus}" name="status" value="${item._id}">
                                        <label for="${ProjectStatus}">${ProjectStatus}</label>
                                    </div>`;
              $(".bins_status").append(row);
            }
          }



        });
      },
      complete: function() {

      }
    })
  }

  function bind_beds(dbedrooms) {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/getalllayouttype/list";
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "https://www.prestigeconstructions.com/api/apicall",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(result) {
        $(".bind_search_beds").html("");
        $.each(result.data, function(i, item) {
          var typename = checkNUll(checkkeyexistornull(item, "typename"));

          if (item._id == dbedrooms) {
            if (checkNUll(item.typename) != "") {
              if (item._id !== "6596793831bf9d0018f4d5ef") {
                var row = `<div class="custom-checkbox-btn">
                                        <input type="checkbox" id="${typename}" name="beds" value="${item._id}" data-value="${typename}"checked>
                                        <label for="${typename}">${typename}</label>
                                    </div>`;
                $(".bind_search_beds").append(row);
              }
            }
          } else {
            if (checkNUll(item.typename) != "") {
              if (item._id !== "6596793831bf9d0018f4d5ef") {
                var row = `<div class="custom-checkbox-btn">
                                        <input type="checkbox" id="${typename}" name="beds" value="${item._id}" data-value="${typename}">
                                        <label for="${typename}">${typename}</label>
                                    </div>`;
                $(".bind_search_beds").append(row);
              }
            }
          }


        });
      },
      complete: function() {

      }
    });
  }

  function bind_location() {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/cityprojectcount/list";
    formdata['propertycategory'] = "Residential";
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "https://www.prestigeconstructions.com/api/apicall",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(result) {
        $(".bind_filter_location").html("");
        $.each(result.data, function(i, item) {
          var CityText = checkNUll(checkkeyexistornull(item, "CityText"));

          if (checkNUll(item.CityText) != "") {
            var row = `  <div class="custom-checkbox-btn">
                                                <input class="location" type="checkbox" id="${CityText}" data-text="${CityText}" name="location" value="${item._id}">
                                                <label for="${CityText}">${CityText}</label>
                                            </div>`;
            $(".bind_filter_location").append(row);
          }
        });

      },
      complete: function() {

      }
    });
  }
  /**Clear filter Start */
  $(document).on("click", ".remove_filter", function() {
    page = 1;
    $("#is_active_filter").val("no");
    $("#reset_frm_filter")[0].reset();
    $('.direction_click:first').addClass('active');

    document.querySelector('.residential-minrang').value = '4000000';
    document.querySelector('.residential-maxrang').value = '1800000';
    $(".residential-slider").data("ionRangeSlider").reset();

    var citycode = $('.projectactive.active').attr("data-citycode");
    projectlist(citycode);
    // Function to remove specific query parameters from the URL
      function removeQueryParams(paramsToRemove) {
        var currentUrl = new URL(window.location.href); // Get current URL

        // Remove only the specified parameters
        paramsToRemove.forEach(param => currentUrl.searchParams.delete(param));

        var updatedUrl = currentUrl.origin + currentUrl.pathname + currentUrl.search; // Keep base URL + remaining query params

        if (updatedUrl !== window.location.href) {
            history.replaceState(null, "", updatedUrl); // Replace state to avoid duplicate history entries
            location.reload(); // Reload page to apply changes
        }
      }

      // Define the parameters to remove
      var paramsToRemove = ["search","location", "propertytype", "construction", "dbedrooms", "minprice", "maxprice"];

      // Call function to remove specified query parameters
      removeQueryParams(paramsToRemove);
  });
  /**Clear filter end */
  function getselectedbedvalues() {
    var selectedValues = [];
    $('.bind_search_beds input[type="checkbox"]:checked').each(function() {
      selectedValues.push($(this).val());
    });
    return selectedValues;
  }

  function getselectedlocationvalues() {
    var selectedValues = [];
    $('.bind_filter_location input[type="checkbox"]:checked').each(function() {
      selectedValues.push($(this).val());
    });
    return selectedValues;
  }

  function getselectedstatusvalues() {
    var selectedValues = [];
    $('.bins_status input[type="checkbox"]:checked').each(function() {
      selectedValues.push($(this).val());
    });
    return selectedValues;
  }

  function getselectedtypevalues() {
    var selectedValues = [];
    $('.bind_filter_types input[type="checkbox"]:checked').each(function() {
      selectedValues.push($(this).val());
    });
    return selectedValues;
  }
  /** Filter code end */

  /** Enquiry Now Start */
  $(document).on("click", ".open_enquiry_sidebar", function() {
    $("#enquire-now-sidebar").addClass("active");
    var alttextbind = $(this).attr("data-alttextbind");
    var logoalttextbind = $(this).attr("data-logoalttextbind");
    var image = $(this).attr("data-image");
    var imagelogo = $(this).attr("data-imagelogo");
    var name = $(this).attr("data-name");
    var address = $(this).attr("data-address");
    var price = $(this).attr("data-price");
    var projectid = $(this).attr("data-projectid");
    var priceonrequest = $(this).attr("data-priceonrequest");
    var CityText = $(this).attr("data-citytext");
    if (CityText.toLowerCase().includes("mumbai")) {
      $('.hide_infromation.mumbai').addClass('is-hidden');
      //console.log("The 'is-hidden' class was added to .hide_infromation.mumbai elements.");
    }
    var row = "";
    if (image != "") {
      row += `<picture>
                                <source srcset="${changeToWebP(image)}" type="image/webp">
                                <source srcset="${image}" type="image/jpg">
                                <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind} width="280" height="160">
                            </picture>`;

    }
    if (imagelogo != "") {
      row += `<div class="project-logo">
                                <picture>
                                    <source srcset="${imagelogo}" type="image/webp">
                                    <source srcset="${imagelogo}" type="image/png">
                                    <img loading="lazy" src="${imagelogo}" ${logoalttextbind} width="70" height="70">
                                </picture>
                        </div>`;
    }
    $(".bind_enquiry_images").html("").append(row);
    $(".bind_enquiry_project_name").html("").html(name);
    $(".bind_enquiry_project_address").html("").html(address);
    if (priceonrequest == "true" || priceonrequest == true) {
      $(".bind_enquiry_project_price").text("Price on Request");
    } else {
      $(".bind_enquiry_project_price").html("").html(price);
    }
    ProjectID = projectid;
    ProjectName = name;
    get_enquirynow_country();

    // Function to get cookies start
    function getCookies(cookieNames) {
      const cookies = {};
      cookieNames.forEach((name) => {
        cookies[name] = getCookie(name);
      });
      return cookies;
    }
    // Data to set cookies (assuming you are storing JSON-encoded values)
    const cookieNames = ['customer_FirstName', 'customer_LastName', 'customer_Email', 'customer_Mobile', 'customer_Mobile_CountryCode', 'customer_Country_Code'];
    const userCookies = getCookies(cookieNames);

    // Check if the cookies are valid and not empty
    if (userCookies !== undefined && userCookies !== '' && userCookies !== null && userCookies !== "undefined" && userCookies !== "null") {
      // Assuming each cookie contains a string, you should decode and parse each one individually
      try {
        // Decode URI and parse JSON if needed
        const customer_FirstName = decodeURIComponent(userCookies['customer_FirstName']);
        const customer_LastName = decodeURIComponent(userCookies['customer_LastName']);
        const customer_Email = decodeURIComponent(userCookies['customer_Email']);
        const customer_Mobile = decodeURIComponent(userCookies['customer_Mobile']);
        const customer_Mobile_CountryCode = decodeURIComponent(userCookies['customer_Mobile_CountryCode']);
        const customer_Country_Code = decodeURIComponent(userCookies['customer_Country_Code']);

        // Construct full name
        var customer_fullname = checkNUll(customer_FirstName) + "" + checkNUll(customer_LastName);


        // Set values to form elements
        $(".customer_fullname").val(customer_fullname);
        // setTimeout(() => {
        //   if (checkNUll(customer_Country_Code)!="" && checkNUll(customer_Country_Code)!=null){

        //     $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
        //   }else{
        //     // $(".customer_Country_Code").val("IN").change();

        //   }
        //   $(".customer_Mobile").val(checkNUll(customer_Mobile));
        // }, 1000);
        setTimeout(() => {
          if (checkNUll(customer_Country_Code) !== "" && checkNUll(customer_Country_Code) != null) {
            $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
          }
          $(".customer_Mobile").val(checkNUll(customer_Mobile));
        }, 1000);
        $(".customer_Email").val(checkNUll(customer_Email));
        // console.log(customer_fullname);
        // console.log(customer_Mobile_CountryCode);
        // console.log(customer_Country_Code);
      } catch (e) {
        // console.error("Error parsing cookies: ", e);
      }
    }
    // Function to get cookies end

  });

  function get_enquirynow_country() {

    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/countrycode/list";
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "https://www.prestigeconstructions.com/api/apicall",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(result) {
        $("#countrycode").html("");
        $("#countrycode").html("<option value=''>Country</option>");

        $.each(result.data, function(i, item) {
          // if (item.description == "India") {
          //     var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '" selected>' + item.country_code_number + '</option>';
          //     $("#countrycode").parent().addClass("focused");
          //     $("#mobile_callback").prop("maxlength", "10");
          // } else {
          var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '">' + item.country_code_number + '&nbsp' + item.description + '</option>';
          // }

          $("#countrycode").append(obj);
        });

      },
      complete: function() {
        getLocationAndCityName();
      }
    });
  }
  $('#mobile_callback').bind("cut copy paste", function(e) {
    e.preventDefault();
  });
  $("#countrycode").change(function() {
    countryvalue = $("#countrycode").val();
    if (countryvalue != null && countryvalue != undefined && countryvalue != "") {
      if (countryvalue == "IN") {
        $("#mobile_callback").val("");
        $("#mobile_callback").prop("maxlength", "10");
      } else {
        $("#mobile_callback").val("");
        $("#mobile_callback").prop("maxlength", "15");
      }

    }

    

        // Trigger toggle on dropdown change
         
  });
  $(".numbervalidate").keypress(function(e) {
    var keyCode = e.keyCode || e.which;
    var regex = /^[0-9]$/;
    var isValid = regex.test(String.fromCharCode(keyCode));
    if (!isValid) {

    }
    return isValid;
  });
  $("#request_call_back_frm").submit(function(e) {
    e.preventDefault();
  }).validate({
    rules: {
      your_name: {
        "required": true,
        textOnly: true
      },
      mobile_callback: {
        "required": true,
        minlength: 9,
      },
      countrycode: {
        "required": true
      },
      enquiry_email: {
        required: true,
        email: true,
        customEmail: true
      },
      agree_to_be_contacted: {
        "required": true
      }

    },
    messages: {
      your_name: {
        required: "<span class='error-msg'>Please Enter Name</span>",
        textOnly: "<span class='error-msg'>Please enter only text</span>"
      },
      mobile_callback: {
        required: "<span class='error-msg'>Please Enter Mobile number</span>",
        minlength: "<span class='error-msg'>Please Edit Digits</span>"
      },
      countrycode: "<span class='error-msg'>Please Enter Country Code</span>",
      email_callback: {
        required: "<span class='error-msg'>Please Enter Email</span>",
        email: "<span class='error-msg'>Please Enter a Valid Email</span>",
        customEmail: "<span class='error-msg'>Please Enter a Valid Email</span>"
      },
      agree_to_be_contacted: "<span class='error-msg is-static mt-1 w-fit-content'>Please Accept</span>",
    },
    errorPlacement: function(error, element) {
      if (element.attr("name") == "agree_to_be_contacted") {
        error.addClass("is-static");
        error.appendTo(element.closest('.checkbox-item-update'));
      } else {
        error.insertAfter(element);
      }
    },
    submitHandler: function(form) {
      var formdata = {};
      // var emailbind =  "";
      // API NOT MEARGED IN DEV
       if ($("#whatsapp").is(":checked")) {
                initSocket(); // Ensure socketId is set
                activeWhatsAppCallback = requestcallback;
                activeWhatsAppFormSelector = "#request_call_back_frm";

                var waMobileNo    = $(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val();
                var waCountryCode = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
                if (!waCountryCode) { waCountryCode = $("#enquiry_country").val() || "+91"; }
                var wa_age_consent       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                var wa_marketing_consent = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

                // Step 1: validatemarketingconsent before WhatsApp generate
                var waConsentData = {};
                waConsentData["dynamicurl"]                    = "lead/v1/validatemarketingconsent";
                waConsentData["Mobile_No"]                    = waMobileNo;
                waConsentData["Mobile_CountryCode"]           = waCountryCode;
                waConsentData["is_age_consent_accepted"]      = wa_age_consent;
                waConsentData["is_marketing_consent_accepted"]= wa_marketing_consent;

                $(".common_submit_btn").html("Submitting..").attr("disabled", true);

                $.ajax({
                    method: "POST",
                    url: "https://www.prestigeconstructions.com/api/apicall",
                    dataType: "json",
                    data: waConsentData,
                    headers: { 'Authorization': token },
                    success: function(consentResp) {
                        if (consentResp.success == true) {
                            generateWhatsAppLink(waMobileNo, waCountryCode, wa_age_consent, wa_marketing_consent);
                        } else {
                            showToast("Message", consentResp.message || "Consent validation failed.");
                            var restoreText = $("#whatsapp").is(":checked") ? "Share Link" : ($(".common_submit_btn").attr('data-original-text') || "Submit");
                            $(".common_submit_btn").html(restoreText).attr("disabled", false);
                        }
                    },
                    error: function() {
                        showToast("Error", "Something went wrong during consent validation. Please try again.");
                        var restoreText = $("#whatsapp").is(":checked") ? "Share Link" : ($(".common_submit_btn").attr('data-original-text') || "Submit");
                        $(".common_submit_btn").html(restoreText).attr("disabled", false);
                    }
                });

                function generateWhatsAppLink(waMobileNo, waCountryCode, wa_age_consent, wa_marketing_consent) {
                    var currentUrl = window.location.href;
                    var updatedUrl = currentUrl.split('?')[0];
                    var pathArray = updatedUrl.split('/').filter(function(el) { return el.length != 0; });
                    var lastPart = pathArray.pop();

                    var formdata = {};
                    formdata["dynamicurl"]         = "lead/v1/common/whatsapp/verification/generate";
                    formdata["Mobile_No"]          = waMobileNo;
                    formdata["Mobile_CountryCode"] = waCountryCode;
                    formdata["Page_Name"]          = lastPart + " - Enquiry Now";
                    formdata["Plateform_Name"]     = "web";
                    formdata["RequestFrom"]        = "Website";
                    formdata["Session_ID"]         = socketId;
                    formdata["Type"]               = "Enquiry Now";

                    // console.log("WhatsApp API payload:", formdata); // debug

                    // Open window NOW (user gesture) — navigate after response to avoid popup blocker
                    var whatsappWindow = window.open('about:blank', '_blank');

                    $.ajax({
                        method: "POST",
                        url: "https://www.prestigeconstructions.com/api/apicall",
                        dataType: "json",
                        data: formdata,
                        headers: { 'Authorization': token },
                        success: function(response) {
                            // console.log("WhatsApp API response:", response); // debug
                            if (response.success == true) {
                                var whatsappUrl = "";
                                if (response.data) {
                                    if (typeof response.data === 'string') {
                                        whatsappUrl = response.data;
                                    } else if (response.data.url) {
                                        whatsappUrl = response.data.url;
                                    } else if (Array.isArray(response.data) && response.data.length > 0) {
                                        var d = response.data[0];
                                        whatsappUrl = d.url || d.link || d.qrcode || d.whatsapp_url
                                                    || d.redirect_url || d.verification_url
                                                    || (typeof d === 'string' ? d : "");
                                    }
                                }
                                if (whatsappUrl) {
                                whatsappWindow.location.href = whatsappUrl; // navigate pre-opened window
                                    showToastsuccess("Success", "WhatsApp link generated successfully.");
                                $("#enquire-sidebar").removeClass("active");
                                } else {
                                    whatsappWindow.close();
                                    console.warn("No URL found. Full response:", JSON.stringify(response));
                                    showToast("Message", response.message || "Request sent. Check WhatsApp.");
                                }
                            } else {
                                whatsappWindow.close();
                                showToast("Message", response.message);
                            }
                        },
                        complete: function() {
                            $(".common_submit_btn").attr("disabled", false);
                            var restoreText = $("#whatsapp").is(":checked") ? "Share Link" : ($(".common_submit_btn").attr('data-original-text') || "Send OTP");
                            $(".common_submit_btn").html(restoreText);
                        },
                        error: function(xhr, status, err) {
                            whatsappWindow.close();
                            console.error("WhatsApp API error:", status, err, xhr.responseText);
                            showToast("Error", "Something went wrong. Please try again.");
                        }
                    });
                } // end generateWhatsAppLink

                return;
            }

            var mobileNo =$(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val();
            var countryCodeAttr = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
            var is_age_consent       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
            var is_marketing_consent = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

            // Step 1: Validate marketing consent before sending OTP
            var consentData = {};
            consentData["dynamicurl"]                   = "lead/v1/validatemarketingconsent";
            consentData["Mobile_No"]                    = mobileNo;
            consentData["Mobile_CountryCode"]           = countryCodeAttr;
            consentData["is_age_consent_accepted"]      = is_age_consent;
            consentData["is_marketing_consent_accepted"]= is_marketing_consent;

            $(".common_submit_btn").html("Submitting..").attr("disabled", true);

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: consentData,
                headers: { 'Authorization': token },
                success: function(consentResponse) {
                    if (consentResponse.success == true) {
                        sendEnquiryOtp(mobileNo, countryCodeAttr);
                    } else {
                        showToast("Message", consentResponse.message || "Consent validation failed.");
                        $(".common_submit_btn").html("Submit").attr("disabled", false);
                    }
                },
                error: function() {
                    showToast("Error", "Something went wrong during consent validation. Please try again.");
                    $(".common_submit_btn").html("Submit").attr("disabled", false);
                }
            });
      function sendEnquiryOtp(mobileNo, countryCodeAttr) {
      formdata["dynamicurl"] = "employee/v2/customersendotp";
      formdata["Mobile_No"] = $("#mobile_callback").val();
      formdata["Mobile_CountryCode"] = $("#countrycode option:selected").attr("data-contry_code_add");
      var emailbind = $("#countrycode option:selected").attr("data-contry_code_add");
      if (emailbind !== "+91") {
        formdata["Email"] = $("#email_callback").val();
      }
      formdata["whatsapp_nri"] = $("#whatsapp_nri_request_call_back").is(":checked") ? 1 : 0;
      $.ajax({
        method: "POST",
        url: "https://www.prestigeconstructions.com/api/apicall",
        dataType: "json",
        data: formdata,
        headers: {
          'Authorization': token
        },
        beforeSend: function() {
          $(".enquiry_now_submit").html("Submitting..");
          $(".enquiry_now_submit").attr("disabled", true);
        },
        success: function(response) {
          if (response.success == true) {
            $.each(response.data, function(i, item) {
              var userId = item._id;
              $("#otp_verify").val(userId);
            });
            $(".hide_infromation").addClass("is-hidden");
            $(".bind_hidden_name").text($("#your_name").val());
            $(".bind_hidden_number").text($("#mobile_callback").val());
            $(".bind_hidden_email").text($("#email_callback").val());
            $(".show_infromation").removeClass("is-hidden");
            showToast("Success", response.message);
            if (formdata["whatsapp_nri"] === 0) {
                $(".timer_display").hide();
            $(".resend_otp_container").addClass("is-hidden");
            // console.log("WhatsApp NRI is false. Timer and resend OTP button will not be displayed.");
            } else {
            // Start the OTP timer and show the resend button
            startOtpTimer();
            // $(".resend_otp_container").removeClass("is-hidden");
            }

          } else {
            showToast("Message", response.message);

          }

        },
        complete: function() {
          $(".enquiry_now_submit").addClass("is-hidden");
          $(".enquiry_now_submit").html("Send OTP");
          $(".enquiry_now_submit").attr("disabled", false);
          // $("#enquire-now-sidebar").removeClass("active");
        },
        error: function(response) {}
      });
      } // end sendEnquiryOtp
    }
  });


  function requestcallbackresendOtp() {
        const mobileNumber = $("#mobile_callback").val();
        const mobileCountryCode = $("#countrycode option:selected").attr("data-contry_code_add");
        const email = $("#email_callback").val();
        const whatsappNri = 0;

        // Prepare form data
        const formdata = {
            dynamicurl: "employee/v2/customersendotp",
            Mobile_No: mobileNumber,
            Mobile_CountryCode: mobileCountryCode,
            whatsapp_nri: whatsappNri
        };

        // Add email only if the country code is not +91
        if (mobileCountryCode !== "+91") {
            formdata.Email = email;
        }

        // AJAX call to resend OTP
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                Authorization: token
            },
            beforeSend: function () {
                $(".resend_otp_btn_request_call_back").text("Resending...").attr("disabled", true);
            },
            success: function (response) {
                if (response.success) {
                  // Update the OTP ID in the hidden input field
                  $("#whatsapp_nri_request_call_back").prop("checked",false);
                  const newOtpId = response.data[0]._id;
                    $("#otp_verify").val(newOtpId);
                    // console.log("New OTP _id:", newOtpId);
                    showToast("Success", "OTP sent successfully in Email.");
                    // startOtpTimer(); // Restart the timer after a successful resend
                } else {
                    showToast("Error", response.message || "Failed to resend OTP.");
                }
            },
            complete: function () {
                $(".resend_otp_btn_request_call_back").text("Resend OTP").attr("disabled", false).hide();
                // setTimeout(() => {
                //   $(".resend_otp_btn_request_call_back").text("Resending...").attr("disabled", true).hide();
                // }, 2000);
            },
            error: function (xhr) {
                console.error(xhr);
                showToast("Error", "Something went wrong. Please try again.");
            }
        });
    }

    // Event Listener for Resend OTP button
    $(".resend_otp_btn_request_call_back").on("click", function () {
      requestcallbackresendOtp();
    });

  $("#otp_verify_frm").submit(function(e) {
    e.preventDefault();
  }).validate({
    rules: {
      otp_dd: {
        "required": true
      },
    },
    messages: {
      otp_dd: "<span class='error-msg'>Please Enter OTP</span>",
    },
    submitHandler: function(form) {
      var formdata = {};
      formdata["dynamicurl"] = "employee/v1/customerverifyotp";
      formdata["otp"] = $("#otp_dd").val();
      formdata["_id"] = $("#otp_verify").val();
      $(".theme-loader.form-loader").addClass("active");

      $.ajax({
        method: "POST",
        url: "https://www.prestigeconstructions.com/api/apicall",
        dataType: "json",
        data: formdata,
        headers: {
          'Authorization': token
        },
        beforeSend: function() {
          $(".otp_submit_btn").html("Submitting..");
          $(".otp_submit_btn").attr("disabled", true);
        },
        success: function(response) {
          if (response.success == true) {
            requestcallback();
            // showToast("Success", response.message);


            var consentSaveData = {};
            consentSaveData["dynamicurl"]                    = "lead/v1/common/consent/save";
            consentSaveData["Mobile_No"]                     = $(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val();
            consentSaveData["Mobile_CountryCode"]            = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
            consentSaveData["is_age_consent_accepted"]       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
            consentSaveData["is_marketing_consent_accepted"] = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";
            consentSaveData["VerifiedFrom"]                  = "Website";
            consentSaveData["From"]                          = "Web";

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: consentSaveData,
                headers: { 'Authorization': token }
            });

          } else {
            showToast("Message", response.message);
            $("#otp_dd").val("");
          }

        },
        complete: function() {
          $(".otp_submit_btn").html("Submit");
          $(".otp_submit_btn").attr("disabled", false);
           uet_report_conversion();
           setTimeout(() => {
            $(".theme-loader.form-loader").removeClass("active");
           }, 1000);
        },
        error: function(response) {}
      });
    }
  });


  function requestcallback() {
    var formdata = {};
    var queryParams = getQueryParams();
    formdata["dynamicurl"] = "managecontent/v3/requestcallback/create";
    formdata["customer_id"] = CustomerId;
    formdata["project_id"] = ProjectID;
    formdata["project_name"] = ProjectName;
    formdata["project_type"] = "residentialprojects";
    formdata["type"] = "requestcallback";
    formdata["mobile_no"] = $("#mobile_callback").val();
    formdata["requestfrom"] = "web";
    formdata["shortsummary"] = $('#notes').val();
    formdata["calltiming"] = $("#requestcallback_time").val();
    formdata["calldate"] = $("#schedule_date").val();
    formdata["name"] = $("#your_name").val();
    formdata["countrycode"] = $("#countrycode option:selected").attr("data-contry_code_add");
    formdata["country"] = $("#countrycode").val();
    formdata["email"] = $("#email_callback").val();
    formdata["page_url"] = window.location.href;
        if ($("input[name='agree_to_be_contacted']").is(":checked")) {
            formdata["marketing_update_received"] = "yes";
        }
    formdata["whatsapp_nri"] = $("#whatsapp_nri_request_call_back").is(":checked") ? 1 : 0;
    // formdata["project_type"] = "residentialprojects";

    $.extend(formdata, serializeHiddenFields());
    $.extend(formdata, getAllQueryStringParams());

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      beforeSend: function() {
        $(".enquiry_now_submit").html("Submitting..");
        $(".enquiry_now_submit").attr("disabled", true);
      },
      success: function(response) {
        if (response.success == true) {
          $('#request_call_back_frm')[0].reset();
          $("#countrycode").val("IN").change();
          $(".hide_infromation").removeClass("is-hidden");
          $(".bind_hidden_name").text("");
          $(".bind_hidden_number").text("");
          $(".bind_hidden_email").text("");
          $(".show_infromation").addClass("is-hidden");


          showToastsuccess("Success", response.message);
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            'event': 'inqury_submit'
          });
        } else {
          showToast("Message", response.message);
          $('#request_call_back_frm')[0].reset();
          $("#countrycode").val("IN").change();
        }
      },
      complete: function() {
        $(".enquiry_now_submit").html("Send OTP");
        $(".enquiry_now_submit").attr("disabled", false);
        $("#enquire-now-sidebar").removeClass("active");
      },
      error: function(response) {}
    });
  }
  /** Enquiry Now end */



  /** Booking SV Start */
  $(document).on("click", ".open_booking_sidebar", function() {
    $("#book-a-site-visit-sidebar").addClass("active");
    var alttextbind = $(this).attr("data-alttextbind");
    var logoalttextbind = $(this).attr("data-logoalttextbind");
    var image = $(this).attr("data-image");
    var imagelogo = $(this).attr("data-imagelogo");
    var name = $(this).attr("data-name");
    var address = $(this).attr("data-address");
    var price = $(this).attr("data-price");
    var projectid = $(this).attr("data-projectid");
    var projectname = $(this).attr("data-projectname");
    var priceonrequest = $(this).attr("data-priceonrequest");
    var CityText = $(this).attr("data-citytext");
    if (CityText.toLowerCase().includes("mumbai")) {
      $('.requesthide_infromation.mumbai').addClass('is-hidden');
      // console.log("The 'is-hidden' class was added to .hide_infromation.mumbai elements.");
    }
    var row = "";
    if (image != "") {
      row += `<picture>
                                <source srcset="${changeToWebP(image)}" type="image/webp">
                                <source srcset="${image}" type="image/jpg">
                                <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind} width="280" height="160">
                            </picture>`;

    }
    if (imagelogo != "") {
      row += `<div class="project-logo">
                                <picture>
                                    <source srcset="${imagelogo}" type="image/webp">
                                    <source srcset="${imagelogo}" type="image/png">
                                    <img loading="lazy" src="${imagelogo}" ${logoalttextbind} width="70" height="70">
                                </picture>
                        </div>`;
    }
    $(".bind_booking_image").html("").append(row);
    $(".bind_booking_project_name").html("").html(name);
    $(".bind_booking_project_address").html("").html(address);
    if (priceonrequest == "true" || priceonrequest == true) {
      $(".bind_booking_project_price").text("Price on Request");
    } else {
      $(".bind_booking_project_price").html("").html(price);
    }
    get_booking_country();
    get_booking_projects(projectname);


    // Function to get cookies start
    function getCookies(cookieNames) {
      const cookies = {};
      cookieNames.forEach((name) => {
        cookies[name] = getCookie(name);
      });
      return cookies;
    }
    // Data to set cookies (assuming you are storing JSON-encoded values)
    const cookieNames = ['customer_FirstName', 'customer_LastName', 'customer_Email', 'customer_Mobile', 'customer_Mobile_CountryCode', 'customer_Country_Code'];
    const userCookies = getCookies(cookieNames);

    // Check if the cookies are valid and not empty
    if (userCookies !== undefined && userCookies !== '' && userCookies !== null && userCookies !== "undefined" && userCookies !== "null") {
      // Assuming each cookie contains a string, you should decode and parse each one individually
      try {
        // Decode URI and parse JSON if needed
        const customer_FirstName = decodeURIComponent(userCookies['customer_FirstName']);
        const customer_LastName = decodeURIComponent(userCookies['customer_LastName']);
        const customer_Email = decodeURIComponent(userCookies['customer_Email']);
        const customer_Mobile = decodeURIComponent(userCookies['customer_Mobile']);
        const customer_Mobile_CountryCode = decodeURIComponent(userCookies['customer_Mobile_CountryCode']);
        const customer_Country_Code = decodeURIComponent(userCookies['customer_Country_Code']);

        // Construct full name
        // var customer_fullname = checkNUll(customer_FirstName) + "" + checkNUll(customer_LastName);

        $(".customer_FirstName").val(checkNUll(customer_FirstName));
        $(".customer_LastName").val(checkNUll(customer_LastName));
        // Set values to form elements
        // $(".customer_fullname").val(customer_fullname);
        // setTimeout(() => {
        //   if (checkNUll(customer_Country_Code)!="" && checkNUll(customer_Country_Code)!=null){

        //     $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
        //   }else{
        //     // $(".customer_Country_Code").val("IN").change();

        //   }
        //   $(".customer_Mobile").val(checkNUll(customer_Mobile));
        // }, 1000);
        setTimeout(() => {
          if (checkNUll(customer_Country_Code) !== "" && checkNUll(customer_Country_Code) != null) {
            $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
          }
          $(".customer_Mobile").val(checkNUll(customer_Mobile));
        }, 1000);
        $(".customer_Email").val(checkNUll(customer_Email));
        // console.log(customer_fullname);
        // console.log(customer_Mobile_CountryCode);
        // console.log(customer_Country_Code);
      } catch (e) {
        // console.error("Error parsing cookies: ", e);
      }
    }
    // Function to get cookies end

  });
  $('#booking_number').bind("cut copy paste", function(e) {
    e.preventDefault();
  });

  function get_booking_projects(projectname) {
    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/getprojectlistforsv";
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "https://www.prestigeconstructions.com/api/apicall",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(result) {
        $("#booking_project").html("");
        $("#booking_project").html("<option value=''>Select Project</option>");

        $.each(result.data, function(i, item) {
          var ProjectName = checkNUll(checkkeyexistornull(item, "ProjectName"));

          if (ProjectName == projectname) {
            var obj = '<option class="text-capitalize"   data-description="' + ProjectName + '" value="' + item.ProjectID + '" selected>' + ProjectName + '</option>';
            $("#booking_project").parent().addClass("focused");
          } else {
            var obj = '<option class="text-capitalize"   data-description="' + ProjectName + '" value="' + item.ProjectID + '">' + ProjectName + '</option>';
          }

          $("#booking_project").append(obj);
        });

      },
      complete: function() {
        $("#booking_project").attr("disabled", true);
      }
    });
  }

  function get_booking_country() {

    var formdata = {};
    formdata["dynamicurl"] = "managecontent/v1/countrycode/list";
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "https://www.prestigeconstructions.com/api/apicall",
      data: formdata,
      headers: {
        'Authorization': token
      },
      success: function(result) {
        $("#booking_country").html("");
        $("#booking_country").html("<option class='nodtranslate' value=''>Country</option>");

        $.each(result.data, function(i, item) {
          // if (item.description == "India") {
          //     var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '" selected>' + item.country_code_number + '</option>';
          //     $("#booking_country").parent().addClass("focused");
          //     $("#booking_number").prop("maxlength", "10");
          // } else {
          var obj = '<option class="text-capitalize nodtranslate"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '">' + item.country_code_number + '&nbsp' + item.description + '</option>';
          // }

          $("#booking_country").append(obj);
        });

      },
      complete: function() {
        getLocationAndCityName();
      }
    });
  }
  $("#booking_country").change(function() {

    countryvalue = $("#booking_country").val();
    if (countryvalue != null && countryvalue != undefined && countryvalue != "") {
      if (countryvalue == "IN") {
        $("#booking_number").val("");
        $("#booking_number").prop("maxlength", "10");
      } else {
        $("#booking_number").val("");
        $("#booking_number").prop("maxlength", "15");
      }

    }
    

    // Trigger toggle on dropdown change
    
  });

  // remove required field 
  $(document).on("click", ".addenquire,.addsitevisit", function() {
    $("label.error").remove();
  });

  $("#bokking_frm_submit").submit(function(e) {
    e.preventDefault();
  }).validate({
    rules: {
      booking_fname: {
        "required": true,
        textOnly: true
      },
      booking_number: {
        "required": true,
        minlength: 9,
      },
      booking_country: {
        "required": true
      },
      booking_email: {
        "required": true
      },
      booking_lname: {
        "required": true
      },
      booking_project: {
        "required": true
      },
      agree_to_be_contacted: {
        "required": true
      }
    },
    messages: {
      booking_fname: {
        required: "<span class='error-msg'>Please Enter First Name</span>",
        textOnly: "<span class='error-msg'>Please enter only text</span>"
      },
      booking_lname: {
        required: "<span class='error-msg'>Please Enter Last Name</span>",
        textOnly: "<span class='error-msg'>Please enter only text</span>"
      },
      booking_number: {
        required: "<span class='error-msg'>Please Enter Mobile number</span>",
        minlength: "<span class='error-msg'>Please Edit Digits</span>"
      },
      booking_country: "<span class='error-msg'>Please Enter Country Code</span>",
      booking_email: "<span class='error-msg'>Please Enter Email</span>",
      booking_project: "<span class='error-msg'>Please Select project</span>",
      agree_to_be_contacted: "<span class='error-msg is-static mt-1 w-fit-content'>Please Accept</span>",
    },
    errorPlacement: function(error, element) {
      if (element.attr("name") == "agree_to_be_contacted") {
        error.addClass("is-static");
        error.appendTo(element.closest('.checkbox-item-update'));
      } else {
        error.insertAfter(element);
      }
    },
    submitHandler: function(form) {
    var $submitBtn = $(form).find(".common_submit_btn");
    var formdata = {};
       if ($("#whatsapp_book").is(":checked")) {
                initSocket(); // Ensure socketId is set
                activeWhatsAppCallback = bookingcallback;
                activeWhatsAppFormSelector = "#bokking_frm_submit";

                var waMobileNo    = $(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val();
                var waCountryCode = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
                if (!waCountryCode) { waCountryCode = $("#booking_country").val() || "+91"; }
                var wa_age_consent       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
                var wa_marketing_consent = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

                // Step 1: validatemarketingconsent before WhatsApp generate
                var waConsentData = {};
                waConsentData["dynamicurl"]                    = "lead/v1/validatemarketingconsent";
                waConsentData["Mobile_No"]                    = waMobileNo;
                waConsentData["Mobile_CountryCode"]           = waCountryCode;
                waConsentData["is_age_consent_accepted"]      = wa_age_consent;
                waConsentData["is_marketing_consent_accepted"]= wa_marketing_consent;

                $submitBtn.html("Submitting..").attr("disabled", true);

                $.ajax({
                    method: "POST",
                    url: "https://www.prestigeconstructions.com/api/apicall",
                    dataType: "json",
                    data: waConsentData,
                    headers: { 'Authorization': token },
                    success: function(consentResp) {
                        if (consentResp.success == true) {
                            generateWhatsAppLink(waMobileNo, waCountryCode, wa_age_consent, wa_marketing_consent);
                        } else {
                            showToast("Message", consentResp.message || "Consent validation failed.");
                            var restoreText = $("#whatsapp_book").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                            $submitBtn.html(restoreText).attr("disabled", false);
                        }
                    },
                    error: function() {
                        showToast("Error", "Something went wrong during consent validation. Please try again.");
                        var restoreText = $("#whatsapp_book").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                        $submitBtn.html(restoreText).attr("disabled", false);
                    }
                });

                function generateWhatsAppLink(waMobileNo, waCountryCode, wa_age_consent, wa_marketing_consent) {
                    var currentUrl = window.location.href;
                    var updatedUrl = currentUrl.split('?')[0];
                    var pathArray = updatedUrl.split('/').filter(function(el) { return el.length != 0; });
                    var lastPart = pathArray.pop();

                    var formdata = {};
                    formdata["dynamicurl"]         = "lead/v1/common/whatsapp/verification/generate";
                    formdata["Mobile_No"]          = waMobileNo;
                    formdata["Mobile_CountryCode"] = waCountryCode;
                    formdata["Page_Name"]          = lastPart + " - Book a Site Visit";
                    formdata["Plateform_Name"]     = "web";
                    formdata["RequestFrom"]        = "Website";
                    formdata["Session_ID"]         = socketId;
                    formdata["Type"]               = "Enquiry Now";

                    // console.log("WhatsApp API payload:", formdata); // debug

                    // Open window NOW (user gesture) — navigate after response to avoid popup blocker
                    var whatsappWindow = window.open('about:blank', '_blank');

                    $.ajax({
                        method: "POST",
                        url: "https://www.prestigeconstructions.com/api/apicall",
                        dataType: "json",
                        data: formdata,
                        headers: { 'Authorization': token },
                        success: function(response) {
                            // console.log("WhatsApp API response:", response); // debug
                            if (response.success == true) {
                                var whatsappUrl = "";
                                if (response.data) {
                                    if (typeof response.data === 'string') {
                                        whatsappUrl = response.data;
                                    } else if (response.data.url) {
                                        whatsappUrl = response.data.url;
                                    } else if (Array.isArray(response.data) && response.data.length > 0) {
                                        var d = response.data[0];
                                        whatsappUrl = d.url || d.link || d.qrcode || d.whatsapp_url
                                                    || d.redirect_url || d.verification_url
                                                    || (typeof d === 'string' ? d : "");
                                    }
                                }
                                if (whatsappUrl) {
                                    whatsappWindow.location.href = whatsappUrl; // navigate pre-opened window
                                    showToastsuccess("Success", "WhatsApp link generated successfully.");
                                    $("#enquire-sidebar").removeClass("active");
                                } else {
                                    whatsappWindow.close();
                                    console.warn("No URL found. Full response:", JSON.stringify(response));
                                    showToast("Message", response.message || "Request sent. Check WhatsApp.");
                                }
                            } else {
                                whatsappWindow.close();
                                showToast("Message", response.message);
                            }
                        },
                        complete: function() {
                            $submitBtn.attr("disabled", false);
                            var restoreText = $("#whatsapp_book").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                            $submitBtn.html(restoreText);
                        },
                        error: function(xhr, status, err) {
                            whatsappWindow.close();
                            console.error("WhatsApp API error:", status, err, xhr.responseText);
                            showToast("Error", "Something went wrong. Please try again.");
                        }
                    });
                } // end generateWhatsAppLink

                return;
            }

            var mobileNo =$(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val();
            var countryCodeAttr = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
            var is_age_consent       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
            var is_marketing_consent = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";

            // Step 1: Validate marketing consent before sending OTP
            var consentData = {};
            consentData["dynamicurl"]                   = "lead/v1/validatemarketingconsent";
            consentData["Mobile_No"]                    = mobileNo;
            consentData["Mobile_CountryCode"]           = countryCodeAttr;
            consentData["is_age_consent_accepted"]      = is_age_consent;
            consentData["is_marketing_consent_accepted"]= is_marketing_consent;

            $submitBtn.html("Submitting..").attr("disabled", true);

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: consentData,
                headers: { 'Authorization': token },
                success: function(consentResponse) {
                    if (consentResponse.success == true) {
                        sendEnquiryOtp(mobileNo, countryCodeAttr);
                    } else {
                        showToast("Message", consentResponse.message || "Consent validation failed.");
                        $submitBtn.html("Submit").attr("disabled", false);
                    }
                },
                error: function() {
                    showToast("Error", "Something went wrong during consent validation. Please try again.");
                    $submitBtn.html("Submit").attr("disabled", false);
                }
            });

      function sendEnquiryOtp(mobileNo, countryCodeAttr) {
        
        formdata["dynamicurl"] = "employee/v2/customersendotp";
        formdata["Mobile_No"] = $("#booking_number").val();
        formdata["Mobile_CountryCode"] = $("#booking_country option:selected").attr("data-contry_code_add");
        var emailbind = $("#booking_country option:selected").attr("data-contry_code_add");
        if (emailbind !== "+91") {
          formdata["Email"] = $("#booking_email").val();
        }
        formdata["whatsapp_nri"] = $("#whatsapp_nri_bokking_frm").is(":checked") ? 1 : 0;

        $.ajax({
          method: "POST",
          url: "https://www.prestigeconstructions.com/api/apicall",
          dataType: "json",
          data: formdata,
          headers: {
            'Authorization': token
          },
          beforeSend: function() {
            $(".booking_submit_btn").html("Submitting..");
            $(".booking_submit_btn").attr("disabled", true);
          },
          success: function(response) {
            if (response.success == true) {
              $.each(response.data, function(i, item) {
                var userId = item._id;
                $("#requestotp_verify").val(userId);
              });
              $(".requesthide_infromation").addClass("is-hidden");
              $(".requestbind_hidden_name").text($("#booking_fname").val());
              $(".requestbind_hidden_number").text($("#booking_number").val());
              $(".requestbind_hidden_email").text($("#booking_email").val());
              $(".requestshow_infromation").removeClass("is-hidden");
              showToast("Success", response.message);
              if (formdata["whatsapp_nri"] === 0) {
                $(".timer_display").hide();
                $(".resend_otp_container").addClass("is-hidden");
              } else {
                startOtpTimer();
              }
            } else {
              showToast("Message", response.message);
            }
          },
          complete: function() {
            $(".booking_submit_btn").addClass("is-hidden");
            $("#booking_submit_btn").html("Send OTP");
            $("#booking_submit_btn").attr("disabled", false);
          },
          error: function(response) {}
        });
      } // end sendEnquiryOtp
    }
  });
  function bokking_frm_resendOtp() {
        const mobileNumber = $("#booking_number").val();
        const mobileCountryCode = $("#booking_country option:selected").attr("data-contry_code_add");
        const email = $("#booking_email").val();
        const whatsappNri = 0;

        // Prepare form data
        const formdata = {
            dynamicurl: "employee/v2/customersendotp",
            Mobile_No: mobileNumber,
            Mobile_CountryCode: mobileCountryCode,
            whatsapp_nri: whatsappNri
        };

        // Add email only if the country code is not +91
        if (mobileCountryCode !== "+91") {
            formdata.Email = email;
        }

        // AJAX call to resend OTP
        $.ajax({
            method: "POST",
            url: "https://www.prestigeconstructions.com/api/apicall",
            dataType: "json",
            data: formdata,
            headers: {
                Authorization: token
            },
            beforeSend: function () {
                $(".resend_otp_btn_bokking_frm").text("Resending...").attr("disabled", true);
            },
            success: function (response) {
                if (response.success) {
                  // Update the OTP ID in the hidden input field
                  $("#whatsapp_nri_bokking_frm").prop("checked",false);
                  const newOtpId = response.data[0]._id;
                    $("#requestotp_verify").val(newOtpId);
                    // console.log("New OTP _id:", newOtpId);
                    showToast("Success", "OTP sent successfully in Email.");
                    // startOtpTimer(); // Restart the timer after a successful resend
                } else {
                    showToast("Error", response.message || "Failed to resend OTP.");
                }
            },
            complete: function () {
                $(".resend_otp_btn_bokking_frm").text("Resend OTP").attr("disabled", false).hide();
                // setTimeout(() => {
                //   $(".resend_otp_btn_bokking_frm").text("Resending...").attr("disabled", true).hide();
                // }, 2000);
            },
            error: function (xhr) {
                console.error(xhr);
                showToast("Error", "Something went wrong. Please try again.");
            }
        });
    }

    // Event Listener for Resend OTP button
    $(".resend_otp_btn_bokking_frm").on("click", function () {
      bokking_frm_resendOtp();
    });
  $("#requestotp_verify_frm").submit(function(e) {
    e.preventDefault();
  }).validate({
    rules: {
      requestotp_dd: {
        "required": true
      },
    },
    messages: {
      requestotp_dd: "<span class='error-msg'>Please Enter OTP</span>",
    },
    submitHandler: function(form) {
      var formdata = {};
      formdata["dynamicurl"] = "employee/v1/customerverifyotp";
      formdata["otp"] = $("#requestotp_dd").val();
      formdata["_id"] = $("#requestotp_verify").val();
      $(".theme-loader.form-loader.book-sidebar").addClass("active");

      $.ajax({
        method: "POST",
        url: "https://www.prestigeconstructions.com/api/apicall",
        dataType: "json",
        data: formdata,
        headers: {
          'Authorization': token
        },
        beforeSend: function() {
          $(".requestotp_submit_btn").html("Submitting..");
          $(".requestotp_submit_btn").attr("disabled", true);
        },
        success: function(response) {
          if (response.success == true) {
            bookingcallback();
            // showToast("Success", response.message);

            var consentSaveData = {};
            consentSaveData["dynamicurl"]                    = "lead/v1/common/consent/save";
            consentSaveData["Mobile_No"]                     = $(".customer_Mobile").filter(function() { return $(this).val() != ""; }).first().val();
            consentSaveData["Mobile_CountryCode"]            = $(".customer_Country_Code option:selected").attr("data-contry_code_add");
            consentSaveData["is_age_consent_accepted"]       = $("input[name='agree_to_be_contacted']").is(":checked") ? "1" : "0";
            consentSaveData["is_marketing_consent_accepted"] = $("input[name='validatemarketingconsent']").is(":checked") ? "1" : "0";
            consentSaveData["VerifiedFrom"]                  = "Website";
            consentSaveData["From"]                          = "Web";

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: consentSaveData,
                headers: { 'Authorization': token }
            });

          } else {
            showToast("Message", response.message);
            $("#requestotp_dd").val("");
          }

        },
        complete: function() {
          $(".requestotp_submit_btn").html("Submit");
          $(".requestotp_submit_btn").attr("disabled", false);
          uet_report_conversion();
          setTimeout(() => {
            $(".theme-loader.form-loader.book-sidebar").removeClass("active");
          }, 1000);
        },
        error: function(response) {}
      });
    }
  });

  function bookingcallback() {
    var formdata = {};
    var queryParams = getQueryParams();
    formdata["dynamicurl"] = "managecontent/v2/svsitevisit/add";
    formdata["First_name"] = $("#booking_fname").val();
    formdata["Last_name"] = $("#booking_lname").val();
    formdata["Phone"] = $("#booking_number").val();
    formdata["Customer_id"] = CustomerId;
    formdata["requestfrom"] = "web";
    formdata["SiteVisitTime"] = $("#booking_time").val();
    formdata["SiteVisitDate"] = $("#booking_date").val();

    formdata["countrycode"] = $("#booking_country option:selected").attr("data-contry_code_add");
    formdata["country"] = $("#booking_country").val();
    formdata["Email"] = $("#booking_email").val();
    formdata["Project_id"] = $("#booking_project").val();
    formdata["Project_name"] = $("#booking_project option:selected").attr("data-description");
    formdata["page_url"] = window.location.href;
        if ($("input[name='agree_to_be_contacted']").is(":checked")) {
            formdata["marketing_update_received"] = "yes";
        }
    formdata["project_type"] = "residentialprojects";
    formdata["whatsapp_nri"] = $("#whatsapp_nri_bokking_frm").is(":checked") ? 1 : 0;
    $.extend(formdata, serializeHiddenFields());
    $.extend(formdata, getAllQueryStringParams());

    $.ajax({
      method: "POST",
      url: "https://www.prestigeconstructions.com/api/apicall",
      dataType: "json",
      data: formdata,
      headers: {
        'Authorization': token
      },
      beforeSend: function() {
        $("#booking_submit_btn").html("Submitting..");
        $("#booking_submit_btn").attr("disabled", true);
      },
      success: function(response) {
        if (response.success == true) {
          $('#bokking_frm_submit')[0].reset();
          $("#booking_country").val("IN").change();
          $(".requesthide_infromation").removeClass("is-hidden");
          $(".requestbind_hidden_name").text();
          $(".requestbind_hidden_number").text();
          $(".requestbind_hidden_email").text();
          $(".requestshow_infromation").addClass("is-hidden");
          $("#requestotp_dd").val("");
          $("#booking_submit_btn").removeClass("is-hidden")
          showToastsuccess("Success", response.message);


        } else {
          $('#bokking_frm_submit')[0].reset();
          $("#booking_country").val("IN").change();
          showToastsuccess("Success", response.message);

        }
      },
      complete: function() {
        $("#booking_submit_btn").html("Send OTP");
        $("#booking_submit_btn").attr("disabled", false);
        $("#book-a-site-visit-sidebar").removeClass("active");
      },
      error: function(response) {}
    });
  }
  /** Booking SV End */

// --- Standardized WhatsApp NRI Toggles ---
function toggleEnquiryWhatsAppVisibility() {
    // Determine the active enquiry dropdown (could be countrycode, countrycode1, fcountrycode)
    var selectedCountryCode = "IN";
    if ($("#countrycode1").length > 0 && $("#countrycode1").is(":visible")) {
        selectedCountryCode = $("#countrycode1 option:selected").val();
    } else if ($("#countrycode").length > 0) {
        selectedCountryCode = $("#countrycode option:selected").val();
    }
    
    if (selectedCountryCode === "IN" || !selectedCountryCode) {
        $(".enquiry_is_whatsapp").addClass("is-hidden");
        $(".resend_otp_btn_request_call_back").addClass("is-hidden");
    } else {
        $(".enquiry_is_whatsapp").removeClass("is-hidden");
        $(".resend_otp_btn_request_call_back").removeClass("is-hidden");
        $(".resend_otp_btn_request_call_back").show();
    }
}

function toggleBookingWhatsAppVisibility() {
    if ($("#booking_country").length > 0) {
        var selectedCountryCode = $("#booking_country option:selected").val();
        if (selectedCountryCode === "IN" || !selectedCountryCode) {
            $(".is_whatsapp").addClass("is-hidden");
            $(".resend_otp_btn_bokking_frm").addClass("is-hidden");
        } else {
            $(".is_whatsapp").removeClass("is-hidden");
            $(".resend_otp_btn_bokking_frm").removeClass("is-hidden");
            $(".resend_otp_btn_bokking_frm").show();
        }
    }
}

$(document).ready(function() {
    $("#countrycode, #countrycode1, #fcountrycode, #enquiry_country").change(function() {
        toggleEnquiryWhatsAppVisibility();
    });
    $("#booking_country").change(function() {
        toggleBookingWhatsAppVisibility();
    });
    // Trigger on load
    setTimeout(function() {
        toggleEnquiryWhatsAppVisibility();
        toggleBookingWhatsAppVisibility();
    }, 500);
});
// -----------------------------------------