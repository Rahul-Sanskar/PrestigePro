let map;
    let lat;
    let lng;
    const urlParams = new URLSearchParams(window.location.search);
    var projectid = "prestige-palm-court";
    let ProjectID = "";
    let projectname = "";
    let projectidforsidebar = "";
    let projectnameforsidebar = "";
    $(document).ready(function() {
        get_all_residential_project_dteail();
        getaddcountry();
        setTimeout(() => {
            var rearwindow = window.innerWidth;
            if (rearwindow > 1024) {
                $(".hidererawindow").removeClass("is-hidden");
                $(".hidereraphone").addClass("is-hidden");
            } else {
                $(".hidereraphone").removeClass("is-hidden");
                $(".hidererawindow").addClass("is-hidden");
            }
        }, 2000);
    });

    $("#schedule_date").flatpickr({
        dateFormat: "Y-m-d",
        minDate: "today",
        enableTime: false,
    });

    $("#schedule_date1").flatpickr({
        dateFormat: "Y-m-d",
        minDate: "today",
        enableTime: false,
    });

    $("#booking_date").flatpickr({
        dateFormat: "Y-m-d",
        minDate: "today",
        enableTime: false,
    });

    function get_all_residential_project_dteail() {
        var formdata = {};
        formdata["Project_slug"] = projectid;
        formdata["dynamicurl"] = "managecontent/v1/projectdetails/list";
        formdata["is_available"] = "true";
        var gallerydatafound = "",
            projectlayoutdatafound = "",
            featureimagedatafound = "";
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
                        // console.log(item);

                        ProjectID = item.ProjectID;
                        projectname = item.ProjectName;
                        project_name_download = item.ProjectName;
                        address = checkkeyexistornull(item, "Address");
                        var ProjectLogopng = checkkeyexistornull(item, "ProjectLogopng");
                        var ProjectName = checkkeyexistornull(item, "ProjectName");
                        var Address = checkkeyexistornull(item, "Address");
                        var PinCodeId = checkkeyexistornull(item, "PinCodeId");
                        var Overview = checkkeyexistornull(item, "Overview");
                        var ProjectImage = checkkeyexistornull(item, "ProjectImage");
                        var gallery = checkkeyexistornull(item, "gallery");

                        // Start:: recent project add
                        var currentPageUrl = window.location.href;
                        addrecentviewedprojects(item._id,currentPageUrl,'0');
                        // End:: recent project add

                        var walkthrough = checkkeyexistornull(item, "walkthrough");
                        var amenities = checkkeyexistornull(item, "amenities");
                        var Size = checkkeyexistornull(item, "Size");
                        var total_unit = checkkeyexistornull(item, "total_unit");
                        var DisplayPrice = checkkeyexistornull(item, "DisplayPrice");
                        var attributes = checkkeyexistornull(item, "attributes");
                        var PropertyTypeText = checkkeyexistornull(item, "PropertyTypeText");
                        var rera = checkkeyexistornull(item, "rera");
                        var brochures = checkkeyexistornull(item, "brochures");
                        var layoutmaster = checkkeyexistornull(item, "layoutmaster");
                        var vr360tour = checkkeyexistornull(item, "vr360tour");
                        var specification = checkkeyexistornull(item, "specification");
                        var LatLong = checkkeyexistornull(item, "LatLong");
                        var ContactNumber = checkkeyexistornull(item, "ContactNumber");
                        var callingcontact = checkNUll(checkkeyexistornull(item, "callingcontact"));
                        var bedroomdisplaytext = checkkeyexistornull(item, "bedroomdisplaytext");
                        var uploadbrochure = checkNUll(checkkeyexistornull(brochures[0], "uploadbrochure"));
                        var ProjectLogo = checkNUll(checkkeyexistornull(item, "ProjectLogo"));
                        var imagetobind = get_svg_or_png(ProjectLogopng, ProjectLogo);
                        var svg_alt_text = checkNUll(checkkeyexistornull(item, "svglogo_alt_text"));
                        var pnglogo_alt_text = checkNUll(checkkeyexistornull(item, "pnglogo_alt_text"));
                        var is_parent = checkNUll(checkkeyexistornull(item, "is_parent"));
                        var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
                        var enviromental_clearance = checkkeyexistornull(item, "enviromental_clearance");

                        gallerydatafound = gallery;

                        var imagetobindalttext = get_svg_or_png_alttext(ProjectLogopng, ProjectLogo, svg_alt_text, pnglogo_alt_text);
                        var logoalttextbind = "";
                        if (checkNUll(svg_alt_text) !== "") {
                            logoalttextbind = "alt='" + imagetobindalttext + "'";
                        } else {
                            logoalttextbind = "";
                        }
                        $("#brochureimage_download").val(uploadbrochure);
                        if (checkNUll(imagetobind) != "") {
                            $(".hide_project_logo").removeClass("is-hidden");
                            $(".project_logo_bind").html("");
                            var logo_bind = ` <picture>
                                <source srcset="${imagetobind}" type="image/png">
                                <source srcset="${imagetobind}" type="image/png">
                                <img src="${imagetobind}" ${logoalttextbind} width="70" height="70">
                            </picture>`;
                            $(".project_logo_bind").append(logo_bind);
                        } else {
                            $(".hide_project_logo").addClass("is-hidden");
                        }
                        if (checkNUll(ProjectName) != "") {
                            $(".project_name_bind").html("").html(ProjectName);
                        }

                        if (checkNUll(PropertyTypeText) != "") {
                            $(".hide_property_type").removeClass("is-hidden");
                            $(".project_propertytype").html("").html(PropertyTypeText);
                        } else {
                            $(".hide_property_type").addClass("is-hidden");
                        }

                        if (checkNUll(Address) != "") {
                            $(".project_Address").html("").html(Address + ', ' + CityText + ' - ' + PinCodeId);
                            if (CityText.toLowerCase().includes("mumbai")) {
                              $('.hide_infromation.mumbai').addClass('is-hidden');
                              // console.log("The 'is-hidden' class was added to .hide_infromation.mumbai elements.");
                            }
                        }
                        if (checkNUll(enviromental_clearance) != "") {
                            $(".bind_environmentalclearance").removeClass("is-hidden");
                            $(".bind_environmentalclearance").attr("href", enviromental_clearance);
                            $(".bind_environmentalclearance").attr("target", "_blank");
                        } else {
                            $(".bind_environmentalclearance").addClass("is-hidden");
                        }
                        // if (checkNUll(item?.legal) !== "" && item.legal.length > 0) {

                        //     let legalHtml = item.legal.map(doc => ` <a href="${doc.legaldocimage}" target="_blank" class="full-width line-btn mt-3 theme-btn"> ${doc.doctypename} </a> `).join("");
                        //     $(".bind_legal_documents").removeClass("is-hidden").html(legalHtml);

                        // } else {
                        //     $(".bind_legal_documents").addClass("is-hidden");
                        // }
                      //   if (checkNUll(item?.legal) !== "" && item.legal.length > 0) {

                      //     let legalHtml = item.legal.map(doc => `
                      //         <div class="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen">
                      //             <a href="${doc.legaldocimage}"
                      //               target="_blank"
                      //               class="full-width line-btn theme-btn">
                      //               ${doc.doctypename}
                      //             </a>
                      //         </div>
                      //     `).join("");

                      //     $(".bind_legal_documents")
                      //         .removeClass("is-hidden")
                      //         .html(legalHtml);

                      // } else {
                      //     $(".bind_legal_documents").addClass("is-hidden").html("");
                      // }

                        if (checkNUll(Size) != "") {
                            $(".hide_project_size").removeClass("is-hidden");
                            $(".project_size_bind").html("").html(Size);
                        } else {
                            $(".hide_project_size").addClass("is-hidden");

                        }
                        if (checkNUll(total_unit) != "") {
                            $(".hide_nounits").removeClass("is-hidden");
                            $(".project_NoUnits_bind").html("").html(total_unit + " Units");
                        } else {
                            $(".hide_nounits").addClass("is-hidden");
                        }

                        if (checkNUll(item.price_on_request) == true || checkNUll(item.price_on_request) == "true") {
                            var data = `<span class="theme-btn theme-light-btn full-width">Price on Request</span>`;
                            $(".project_display_price").append(data).parent().addClass("open_enquirey_sidebar");
                            $(".open_enquirey_sidebar").attr({
                                "data-projectid": item.ProjectID,
                                "data-projectname": item.ProjectName
                            });
                            $("#enquiry_country").change(function () {
                                toggleWhatsAppVisibility();
                            });
                            function toggleWhatsAppVisibility() {
                              const selectedCountryCode = $("#enquiry_country option:selected").val();
                              if (selectedCountryCode === "IN") {
                                  $(".is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
                                  $(".resend_otp_btn").addClass("is-hidden"); // Hide Resend OTP button
                              $(".timer_display").hide(); // Hide the timer
                              }else {
                                  $(".is_whatsapp").removeClass("is-hidden"); // Show WhatsApp section
                                  $(".resend_otp_btn").removeClass("is-hidden"); // Show Resend OTP button
                                  $(".resend_otp_btn").show(); // Show Resend OTP button
                                  // startOtpTimer(); // Start the OTP timer
                              }
                            }
                            $(".hide_onwards_btn").removeClass("is-hidden");
                        } else {
                            if (checkNUll(DisplayPrice) != "") {
                                var regex = /₹/g;
                                var newText = DisplayPrice.replace(regex, '');
                                var data = `<span class="theme-btn theme-light-btn full-width">₹ ${newText}</span>`;
                                $(".project_display_price").append(data).parent().removeClass("open_enquirey_sidebar");
                                $(".hide_onwards_btn").removeClass("is-hidden");
                            } else {
                                $(".hide_onwards_btn").addClass("is-hidden");
                            }
                        }
                        // if (checkNUll(Overview) != "") {
                        //     $(".hide_about").removeClass("is-hidden");
                        //     var Overview_bind = `${Overview}`
                        //     $(".project_description").html("").append(Overview_bind);
                        // } else {
                        //     $(".hide_about").addClass("is-hidden");
                        // }
                        if (checkNUll(gallery) != "") {
                            $(".hide-project-slider").removeClass("is-hidden");
                            $(".project_images_bind").html("");
                            $.each(gallery, function(i, images) {
                                var image = checkkeyexistornull(images, "image");
                                var alt_text = checkNUll(checkkeyexistornull(images, "alt_text"));
                                var alttextbind;
                                if (checkNUll(alt_text) !== "") {
                                    alttextbind = "alt='" + alt_text + "'";
                                } else {
                                    alttextbind = "";
                                }
                                var project_images_bind = `<li class="splide__slide">
                                    <div class="projects-img">
                                        <picture>
                                            <source srcset="${changeToWebP(image)}" type="image/webp">
                                            <source srcset="${image}" type="image/jpg">
                                            <img class="img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind} width="720" height="415">
                                        </picture>
                                    </div>
                                </li>`;

                                $(".project_images_bind").append(project_images_bind);
                            });
                            var ProjectStatus = "";
                            if (checkNUll(item.ProjectStatus) != "") {
                                var class_color = get_color_for_status(item.ProjectStatus);
                                ProjectStatus = `<div class="project-status ${class_color}"><span>${checkNUll(item.ProjectStatus)}</span></div>`;
                                
                                if (item.ProjectStatus == "Sold Out" || item.ProjectStatus == "Completed & Sold Out") {
                                    $(".similar_projects_section").removeClass("is-hidden");
                                    projectlist_without_soldout();
                                } else {
                                    $(".similar_projects_section").addClass("is-hidden");
                                }
                            } else {
                                $(".similar_projects_section").addClass("is-hidden");
                            }
                            $(".bind-project-slider").append(ProjectStatus);
                        } else {
                            $(".hide-project-slider").addClass("is-hidden");
                        }

                        if (checkNUll(brochures) != "" && brochures.length > 0) {
                            $(".hide_project_brochure").removeClass("is-hidden");
                            $(".hide_contact_numbershow").addClass("is-hidden");
                            $(".hide_contact_number").removeClass("is-hidden");
                        } else {
                            $(".hide_project_brochure").addClass("is-hidden");
                            $(".hide_contact_numbershow").removeClass("is-hidden");
                            $(".hide_contact_number").addClass("is-hidden");
                        }

                        if (checkNUll(callingcontact) != "") {
                            var contact = callingcontact.replace(/\s/g, '');
                            // $(".hide_contact_number").removeClass("is-hidden");
                            $(".bind_contcat_number").attr("href", "tel:" + contact);

                            // $(".hide_contact_numbershow").removeClass("is-hidden");
                            $(".bind_contcat_numbershow").attr("href", "tel:" + contact);
                            $("#contactNumberSpan").text(ContactNumber);
                        } else {
                            $(".hide_contact_number").addClass("is-hidden");
                            $(".hide_contact_numbershow").addClass("is-hidden");
                        }
                        // new new rera parent & child

                            if (checkNUll(rera) != "") {
                                $(".hide_rera").removeClass("is-hidden");
                                $(".projects_top_rera").html("");
                                $(".rera_bottom_databind").html("");
                                $.each(rera, function(i, rerano) {
                                    var reranumber = checkNUll(checkkeyexistornull(rerano, "reranumber"));
                                    var project_permit = checkNUll(checkkeyexistornull(rerano, "project_permit"));                                    
                                    var rera_image = checkNUll(checkkeyexistornull(rerano, "reraimage"));
                                    var rerastate = checkNUll(checkkeyexistornull(rerano, "rerastate"));
                                    var rera_url_link = checkNUll(checkkeyexistornull(rerano, "rera_url_link"));
                                    var reracertificate = checkNUll(checkkeyexistornull(rerano, "reracertificate"));
                                    var reraimagebind = "";
                                    var alt_text = checkNUll(checkkeyexistornull(rerano, "alt_text"));
                                    var alttextbind = "";
                                    if (checkNUll(alt_text) !== "") {
                                        alttextbind = "alt='" + alt_text + "'";
                                    } else {
                                        alttextbind = "";
                                    }
                                    var target = checkNUll(checkkeyexistornull(rerano, "target"));
                                    var targetbind = "";
                                    if (checkNUll(target) != "") {
                                        if (target == "_blank") {
                                            targetbind = "target='_blank'"
                                        } else {
                                            targetbind = "target='_self'"
                                        }
                                    }
                                    var relbind = "";
                                    var rel = checkNUll(checkkeyexistornull(rerano, "rel"));
                                    if (checkNUll(rel) != "") {
                                        if (rel == "true") {
                                            relbind = "rel='nofollow'"
                                        } else {
                                            relbind = ""
                                        }
                                    }
                                    if (checkNUll(rera_image) != "") {
                                        reraimagebind = ` <a href="${rera_image}"  ${alttextbind}  class="black-btn is-flex-grow-0 is-flex-shrink-0 line-btn square-btn theme-btn hidererawindow is-hidden" data-fancybox="rera-bind" data-reraurl="${rera_url_link}">
                                            <picture>
                                                <source srcset="${rera_image}" type="image/webp">
                                                <source srcset="${rera_image}" type="image/jpg">
                                                <img loading="lazy" src="${rera_image}" alt="QR" width="100" height="100">
                                            </picture>
                                        </a>`;
                                    }

                                    var rerastatebind = "";
                                    var reranumberbind = "";
                                    if (checkNUll(rerastate) != "") {
                                        rerastatebind = `(${rerastate})`;
                                    }
                                    var reraurllink = "";
                                    if (checkNUll(rera_url_link) != "") {
                                        reraurllink = `<a href="${rera_url_link}" ${targetbind} ${relbind} class="appendqrcodebind hiderera hidereraphone black-btn is-flex-grow-0 is-flex-shrink-0 line-btn square-btn theme-btn is-hidden" data-reraurl="${rera_url_link}">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-qrcode" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                                <path d="M7 17l0 .01" />
                                                <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                                <path d="M7 7l0 .01" />
                                                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                                <path d="M17 7l0 .01" />
                                                <path d="M14 14l3 0" />
                                                <path d="M20 14l0 .01" />
                                                <path d="M14 14l0 3" />
                                                <path d="M14 20l3 0" />
                                                <path d="M17 17l3 0" />
                                                <path d="M20 17l0 3" />
                                            </svg>
                                        </a>`;
                                    }
                                    // if (checkNUll(reranumber) != "") {
                                    //   if (checkNUll(reracertificate) != "") {
                                    //       reranumberbind = `<p><a href="${reracertificate}" target="_blank" rel="noopener noreferrer">${reranumber} ${rerastatebind}</a></p>`;
                                    //   } else {
                                    //       reranumberbind = `<p>${reranumber} ${rerastatebind}</p>`;
                                    //   }
                                    //     var bind_toprera = ` <div class="rera-no is-flex is-align-items-center is-gap-3 ">
                                    //                         <div class="is-block is-flex-grow-1">
                                    //                             <span class="rera-title"><b>RERA No: </b></span>
                                    //                             <div class="rera-desc">
                                    //                                 ${reranumberbind}
                                    //                             </div>
                                    //                         </div>
                                    //                         ${reraimagebind}
                                    //                         ${reraurllink}                                        
                                    //                     </div>`;
                                    //     $(".projects_top_rera").append(bind_toprera);
                                    // }
                                    if (checkNUll(reranumber) != "") {                                      
                                      var reracert_link = checkNUll(reracertificate) != "" ? `<a href="${reracertificate}" target="_blank" rel="noopener noreferrer">${reranumber} ${rerastatebind}</a>` : `${reranumber} ${rerastatebind}`;
                                      var rera_web = checkNUll(rera_url_link) != "" ? `<p class="mb-3 has-text-left is-flex is-gap-1"><b class="is-flex-shrink-0">RERA Website:</b> <a class="max-line-1" href="${rera_url_link}" target="_blank" rel="noopener noreferrer">${rera_url_link}</a></p>` : ``;
                                      var project_permit_bind = checkNUll(project_permit) != "" ? `<p class="mb-3 has-text-left"><b>Project Permit:</b> ${project_permit}</p>` : ``;
                                      
                                      reranumberbind = `<div class="is-block is-flex-grow-1 pt-2">
                                                            <div class="rera-desc">
                                                               <p class="mb-3 has-text-left"><b>Reg No:</b> ${reracert_link}</p>
                                                               ${rera_web}
                                                               ${project_permit_bind}
                                                            </div>
                                                        </div>`;

                                        var bind_toprera = ` <div class="rera-no is-flex is-align-items-center is-gap-3 ">
                                                            ${reranumberbind}
                                                            ${reraimagebind}
                                                            ${reraurllink}                                        
                                                        </div>`;
                                        $(".projects_top_rera").append(bind_toprera);
                                    }
                                });
                            } else {
                                $(".hide_rera").addClass("is-hidden");
                            }
                        // new new rera parent & child
                        if (is_parent === "true") {
                            var array_child_id = [];
                            $.each(item.ChildProject, function(j, item2) {
                                var id = checkkeyexistornull(item2, "projectid");
                                array_child_id.push(id);
                            });
                            projectlist(array_child_id);
                            $("#project-menu").addClass("is-hidden");

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
                                    if (bind_property_type_child != "") {
                                        $(".hide_property_type").removeClass("is-hidden");
                                        $(".project_propertytype").html("").html(bind_property_type_child);
                                    } else {
                                        $(".hide_property_type").addClass("is-hidden");
                                    }

                                } else {
                                    bind_property_type_child = checkNUll(item.PropertyTypeText);
                                    if (bind_property_type_child != "") {
                                        $(".hide_property_type").removeClass("is-hidden");
                                        $(".project_propertytype").html("").html(bind_property_type_child);
                                    } else {
                                        $(".hide_property_type").addClass("is-hidden");
                                    }
                                }
                                if (checkNUll(Overview) != "") {
                                    $(".parent_hide_about").removeClass("is-hidden");
                                    $('.projects-properties-detail').addClass('about-parent-project-data');
                                    $(".parent_project_name_bind").html("About " + ProjectName);
                                    $(".parent_project_description").html("").append(Overview);
                                } else {
                                    $(".parent_hide_about").addClass("is-hidden");
                                }
                            }

                        } else if (checkNUll(item.project_sequence) != ""){

                            $('#project-menu').html('');
                            $('#project-sections').html('');
                            
                            $.each(item.project_sequence, function(s, sequence){
                                sectionTitle = sequence.description;
                                targetId = (sectionTitle).toLowerCase().replace(/ /g, "-");
                                btnId = (sectionTitle).toLowerCase().replace(/ /g, "_");
                                var menubind = `<li class="projects-properties-menu-item hide_${btnId} ${sequence.is_hidden === "true" ? 'is-hidden':''}">
                                        <a class="theme-btn gray-btn line-btn rounded-pill" href="#project-${targetId}">${sectionTitle}</a>
                                    </li>`;
                                $('#project-menu').append(menubind);
                            
                                if (targetId == 'about' && sequence.is_hidden === "false") {
                                    if (checkNUll(Overview) != "") {
                                        $(".hide_about").removeClass("is-hidden");
                                        var Overview_bind = `<div id="project-about" class="projects-sub-section mb-5 project-about js-scroll fade-in-bottom hide_about">
                                            <div class="sub-section-title js-scroll fade-in-top">
                                                <h2><span class="project_name_bind">About ${ProjectName}</span></h2>
                                            </div>
                                            <div class="sub-section-desc project_description">
                                                ${Overview}
                                            </div>
                                        </div>`;
                                    $('#project-sections').append(Overview_bind);
                                    } else {
                                        $(".hide_about").addClass("is-hidden");
                                    }
                                } else if (targetId == 'plans' && sequence.is_hidden === "false") {
                                    if (checkNUll(layoutmaster) != "") {
                                        projectlayoutdatafound = layoutmaster;
                                        var bindPlan = `<div id="project-plans" class="projects-sub-section mb-5 project-plans hide_plans">
                                            <div class="sub-section-title js-scroll fade-in-top">
                                                <h2>Plans</h2>
                                            </div>
                                            <div class="projects-plans-tabs">
                                                <ul class="tabs-detail rounded-tabs is-gap-3 is-flex-wrap-wrap js-scroll fade-in-top bind_typename_of_plans">
                                                </ul>
                                                <div class="projects-plans-tabs-detail js-scroll fade-in-bottom append_layouts_images">
                                                </div>
                                            </div>
                                        </div>`;
                                        $('#project-sections').append(bindPlan);
                                        $(".hide_plans").removeClass("is-hidden");
                                        $.each(layoutmaster, function(i, plans) {
                                            var typename = checkNUll(checkkeyexistornull(plans, "typename"));
                                            if (checkNUll(typename) != "") {
                                                var result1 = $.trim(typename).replace(/[^\w]+/g, '');
                                                var activeclass = "";
                                                var loyouttype = "";
                                                var loyoutimage = "";
                                                var bind_plans_all = "";

                                                if (i == 0) {
                                                    loyouttype = `<li class="tab2 is-active" onclick="openTab2(event,'projects-plans-all')">
                                                                <a class="theme-btn gray-btn line-btn rounded-pill">All</a>
                                                            </li>`;
                                                    loyoutimage = `<div id="projects-plans-all" class="content-tab2" style="display: block;">
                                                        <div id="projects-plans-all-slider" class="splide">
                                                            <div class="splide__track">
                                                                <ul class="splide__list bind_all_plans">

                                                                </ul>
                                                            </div>
                                                            <div class="splide__arrows arrow-top-slider">
                                                                <button class="splide__arrow splide__arrow--prev" type="button" aria-controls="" aria-label="Go to last slide">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M5 12l14 0"></path>
                                                                        <path d="M13 18l6 -6"></path>
                                                                        <path d="M13 6l6 6"></path>
                                                                    </svg>
                                                                </button>
                                                                <button class="splide__arrow splide__arrow--next" type="button" aria-controls="" aria-label="Next slide">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M5 12l14 0"></path>
                                                                        <path d="M13 18l6 -6"></path>
                                                                        <path d="M13 6l6 6"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>`;
                                                }
                                                loyouttype += `<li class="tab2 ${activeclass}" onclick="openTab2(event,'${result1}')"><a class="theme-btn gray-btn line-btn rounded-pill">${typename}</a></li>`;
                                                $('.bind_typename_of_plans').append(loyouttype);

                                                loyoutimage += `<div id="${result1}" class="content-tab2 ">
                                                    <div id="splid_${result1}" class="splide arrow-dark project-layouts-slider">
                                                        <div class="splide__track">
                                                            <ul class="splide__list splid_li_${result1}">
                                                                
                                                            </ul>
                                                        </div>
                                                        <div class="splide__arrows arrow-top-slider">
                                                            <button class="splide__arrow splide__arrow--prev" type="button" aria-controls="" aria-label="Go to last slide">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                    <path d="M5 12l14 0"></path>
                                                                    <path d="M13 18l6 -6"></path>
                                                                    <path d="M13 6l6 6"></path>
                                                                </svg>
                                                            </button>
                                                            <button class="splide__arrow splide__arrow--next" type="button" aria-controls="" aria-label="Next slide">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                    <path d="M5 12l14 0"></path>
                                                                    <path d="M13 18l6 -6"></path>
                                                                    <path d="M13 6l6 6"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>`;
                                                $('.append_layouts_images').append(loyoutimage);

                                                $.each(plans.layoutdata, function(i, plandetails) {
                                                    var sizebind = "";
                                                    var image = checkNUll(checkkeyexistornull(plandetails, "image"));
                                                    var name = checkNUll(checkkeyexistornull(plandetails, "name"));

                                                    var description = checkNUll(checkkeyexistornull(plandetails, "description"));
                                                    var size = checkNUll(checkkeyexistornull(plandetails, "size"));
                                                    if (checkNUll(size) !== "") {
                                                        const sizeNumber = parseFloat(size);
                                                        if (!isNaN(sizeNumber)) {
                                                            const formattedSize = getindiacurrencyformat(sizeNumber);
                                                            sizebind = formattedSize.replace(/sq\.? ft|sq ft|sq\. ft\.?|sq\. ft\.?/ig, "").trim() + " Sq. Ft.";
                                                        }
                                                    }
                                                    var projectStatus = "";
                                                    if (checkNUll(plandetails.availability_status) !== "") {
                                                        if (checkNUll(plandetails.availability_status) === "true") {
                                                            var class_color = get_color_for_status("Sold Out");
                                                            projectStatus = `<div class="project-status ${class_color}"><span>Sold Out</span></div>`;
                                                        }
                                                    }
                                                    var typename = checkNUll(checkkeyexistornull(plandetails, "typename"));
                                                    var typenamebind = "";
                                                    if (checkNUll(typename) === "Master Plan" || checkNUll(typename) === "Master Plans") {
                                                        typenamebind = "";
                                                    } else {
                                                        typenamebind = " [" + typename + "]";
                                                    }

                                                    var alt_text = checkNUll(checkkeyexistornull(plandetails, "image_alt_text"));

                                                    bind_plans_all += get_plans(image, name, sizebind, projectStatus, typenamebind, alt_text);
                                                });
                                                $(".bind_all_plans").append(bind_plans_all);


                                                $.each(plans.layoutdata, function(i, item4) {
                                                    if (plans.typename == item4.typename) {
                                                        var sizebind = "";
                                                        var description = checkNUll(checkkeyexistornull(item4, "description"));
                                                        var size = checkNUll(checkkeyexistornull(item4, "size"));

                                                        if (checkNUll(size) !== "") {
                                                            const sizeNumber = parseFloat(size);
                                                            if (!isNaN(sizeNumber)) {
                                                                const formattedSize = getindiacurrencyformat(sizeNumber);
                                                                sizebind = formattedSize.replace(/sq\.? ft|sq ft|sq\. ft\.?|sq\. ft\.?/ig, "").trim() + " Sq. Ft.";
                                                            }
                                                        }

                                                        var image = checkNUll(checkkeyexistornull(item4, "image"));
                                                        var name = checkNUll(checkkeyexistornull(item4, "name"));

                                                        var projectStatus = "";
                                                        if (checkNUll(item4.availability_status) != "") {
                                                            if (checkNUll(item4.availability_status) === "true") {
                                                                var class_color = get_color_for_status("Sold Out");
                                                                projectStatus = `<div class="project-status ${class_color}"><span>Sold Out</span></div>`;
                                                            }
                                                        }
                                                        var typename = checkNUll(checkkeyexistornull(item4, "typename"));
                                                        var typenamebind = "";
                                                        if (checkNUll(typename) === "Master Plan" || checkNUll(typename) === "Master Plans") {
                                                            typenamebind = "";
                                                        } else {
                                                            typenamebind = " [" + typename + "]";
                                                        }

                                                        var alt_text = checkNUll(checkkeyexistornull(item4, "image_alt_text"));

                                                        var obj = `<li class="splide__slide ${item4.typename}">
                                                                <div class="theme-block-ybox">
                                                                <div class="theme-block-img">
                                                                    <picture>
                                                                        <source srcset="${changeToWebP(image)}" type="image/webp">
                                                                        <source srcset="${image}" type="image/jpg">
                                                                        <img class="img-fixed-ratio" src="${changeToWebP(image)}" alt="${alt_text}" width="350" height="200">
                                                                    </picture>
                                                                    <a href="${changeToWebP(image)}" class="theme-block-icon" data-fancybox="master-plans" data-caption="${alt_text}" title="${alt_text}">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                        </svg>
                                                                    </a>
                                                                    ${projectStatus}
                                                                </div>
                                                                <div class="theme-block-title">
                                                                    <span class="fs-4 fw-600 text-dark-2">${name}${typenamebind}</span><br>
                                                                    <span class="plan-sq-ft">${sizebind}</span>
                                                                </div>
                                                            </div>
                                                            </li>`;

                                                        var result = $.trim(typename).replace(/[^\w]+/g, '');
                                                        $('.splid_li_' + result + '').append(obj);
                                                        setTimeout(() => {
                                                            new Splide('#splid_' + result1, {
                                                                gap: '20px',
                                                                type: 'slide',
                                                                perPage: 2,
                                                                perMove: 1,
                                                                pagination: false,
                                                                breakpoints: {
                                                                    768: {
                                                                        perPage: 1,
                                                                    },
                                                                }
                                                            }).mount();
                                                        }, 1000);
                                                    }
                                                });
                                            }
                                        });
                                    } else {
                                        $(".hide_plans").addClass("is-hidden");
                                    }
                                } else if (targetId == 'amenities' && sequence.is_hidden === "false") {
                                    if (checkNUll(amenities) != "") {

                                        var bindAmenity = `<div id="project-amenities" class="projects-sub-section mb-5 project-amenities hide_amenities ">
                                            <div class="sub-section-title js-scroll fade-in-top">
                                                <h2>Amenities</h2>
                                            </div>
                                            <div class="project-amenities-detail has-text-centered js-scroll fade-in-bottom">
                                                <div class="columns is-multiline is-mobile is-gapless project-amenities-cols projectt_amenities_bind">
                                                </div>
                                            </div>
                                        </div>`;
                                        $('#project-sections').append(bindAmenity);
                                        $(".hide_amenities").removeClass("is-hidden");

                                        $(".projectt_amenities_bind").html("");
                                        $.each(amenities, function(i, images) {
                                            // <span>${amenity_name}</span>
                                            var uploadthumbnail = checkNUll(checkkeyexistornull(images, "image"));
                                            var amenity_name = checkNUll(checkkeyexistornull(images, "amenity_name"));
                                            var new_image = checkNUll(checkkeyexistornull(images, "new_image"));
                                            var amenity_actual_name = checkNUll(checkkeyexistornull(images, "amenity_actual_name"));
                                            var alt_text = checkNUll(checkkeyexistornull(images, "alt_text"));
                                            var alttextbind;
                                            if (checkNUll(alt_text) !== "") {
                                                alttextbind = "alt='" + alt_text + "'";
                                            } else {
                                                alttextbind = "";
                                            }
                                            if (checkNUll(uploadthumbnail) != "") {
                                                var bind_image = ` <div class="column">
                                                <div class="project-amenities-items">
                                                    <div class="project-amenities-icon">
                                                        <picture>
                                                            <img src="${changeToWebP(uploadthumbnail)}" ${alttextbind} width="50" height="50" />
                                                        </picture>
                                                    </div>
                                                    <div class="project-amenities-desc">
                                                    <span>${amenity_actual_name}</span>
                                                    </div>
                                                </div>
                                            </div>`;
                                                $(".projectt_amenities_bind").append(bind_image);
                                            } else {
                                                var bind_image = ` <div class="column">
                                                <div class="project-amenities-items">
                                                    <div class="project-amenities-icon">
                                                        <picture>
                                                            <img src="${changeToWebP(new_image)}" ${alttextbind} width="50" height="50" />
                                                        </picture>
                                                    </div>
                                                    <div class="project-amenities-desc">
                                                    <span>${amenity_actual_name}</span>
                                                    </div>
                                                </div>
                                            </div>`;
                                                $(".projectt_amenities_bind").append(bind_image);
                                            }
                                        });
                                    } else {
                                        $(".hide_amenities").addClass("is-hidden");
                                    }
                                } else if (targetId == 'specifications' && sequence.is_hidden === "false") {
                                    if (checkNUll(specification) != "") {
                                        var bindSpecification = `<div id="project-specifications" class="projects-sub-section mb-5 project-specifications hide_specifications">
                                            <div class="sub-section-title js-scroll fade-in-top">
                                                <h2>Specifications</h2>
                                            </div>
                                            <div class="project-specifications-detail js-scroll fade-in-bottom">
                                                <div class="accordian bind_specification">
                                                </div>
                                            </div>
                                        </div>`;
                                        $('#project-sections').append(bindSpecification);
                                        $(".hide_specifications").removeClass("is-hidden");
                                        $(".bind_specification").html("");
                                        $.each(specification, function(i, datas) {

                                            var description = checkNUll(checkkeyexistornull(datas, "description"));
                                            var specificationname = checkNUll(checkkeyexistornull(datas, "specificationname"));
                                            var data_add = "";
                                            if (description != "") {
                                                data_add = ` ${description}`;
                                            }

                                            var bind_specification = `<div class="accordian_item">
                                                <div class="accordian_title">
                                                    <h4>${specificationname}</h4>
                                                </div>
                                                <div class="accordian_desc">
                                                    <div class="project-specifications">
                                                        ${data_add}
                                                    </div>
                                                </div>
                                            </div>`;
                                            $(".bind_specification").append(bind_specification);
                                        });
                                    } else {
                                        $(".hide_specifications").addClass("is-hidden");
                                    }
                                } else if (targetId == 'location' && sequence.is_hidden === "false") {
                                    if (checkNUll(item.location_url_link) != "") {
                                        bindLocation = `<div id="project-location" class="projects-sub-section mb-5 project-location hide_location ">
                                            <div class="sub-section-title js-scroll fade-in-top ">
                                                <h2>Location</h2>
                                            </div>
                                            <div class="theme-block card p-1">
                                                <div id="map" style="width:100% !important; height:400px !important;filter:grayscale(90%);"></div>
                                            </div>
                                        </div>`;
                                        $('#project-sections').append(bindLocation);
                                        if (item.LatLong.coordinates.length > 0) {
                                            // initMap();
                                            $(".hide_location").removeClass("is-hidden");

                                            lat = item.LatLong.coordinates[0];
                                            lng = item.LatLong.coordinates[1];
                                            var href = checkNUll(item.location_url_link);
                                            $(".set_map_attr").attr({
                                                "href": href,
                                                "target": "_blank"
                                            });
                                        } else {
                                            $(".hide_location").addClass("is-hidden");
                                        }
                                    } else {
                                        $(".hide_location").addClass("is-hidden");
                                    }
                                } else if (targetId == 'gallery' && sequence.is_hidden === "false") {
                                    if (checkNUll(gallery) != "") {
                                        
                                        var bindGallery = `<div id="project-gallery" class="projects-sub-section mb-5 project-gallery hide_gallary ">
                                            <div class="sub-section-title js-scroll fade-in-top">
                                                <h2>Gallery</h2>
                                            </div>
                                            <div class="project-gallery-detail has-text-centered js-scroll fade-in-bottom">
                                                <div class="columns is-mobile is-multiline project-gallery-cols project_gallary_bind">
                                                </div>
                                            </div>
                                        </div>`;
                                        $('#project-sections').append(bindGallery);

                                        $(".hide_gallary").removeClass("is-hidden");
                                        $(".project_gallary_bind").html("");
                                        $.each(gallery, function(i, images) {
                                            var image = checkkeyexistornull(images, "image");
                                            var alt_text = checkNUll(checkkeyexistornull(images, "alt_text"));
                                            var alttextbind;
                                            if (checkNUll(alt_text) !== "") {
                                                alttextbind = "alt='" + alt_text + "'";
                                            } else {
                                                alttextbind = "";
                                            }
                                            if (checkNUll(image) != "") {
                                                $("#project-gallery").removeClass("is-hidden");
                                                var count = gallery.length - 7;

                                                if (i < 7) {
                                                    var bind_image = ` <div class="column is-4-mobile is-3-tablet is-4-desktop is-3-widescreen">
                                                        <div class="theme-block-ybox">
                                                            <div class="theme-block-img">
                                                                <picture>
                                                                    <source srcset="${changeToWebP(image)}" type="image/jpeg">
                                                                    <source srcset="${image}" type="image/jpg">
                                                                    <img class="square-img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind} width="170" height="170">
                                                                </picture>
                                                                <a href="${changeToWebP(image)}" class="theme-block-icon" data-fancybox="gallery">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>`;
                                                    $(".project_gallary_bind").append(bind_image);
                                                } else if (i == 7) {
                                                    var bind_image = `<div class="column is-4-mobile is-3-tablet is-4-desktop is-3-widescreen">
                                                        <div class="theme-block-ybox theme-number-block">
                                                            <a href="${image}" data-fancybox="gallery">
                                                                <div class="theme-block-img">
                                                                    <picture>
                                                                        <source srcset="${changeToWebP(image)}" type="image/webp">
                                                                        <source srcset="${image}" type="image/jpg">
                                                                        <img class="square-img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind}  width="170" height="170">
                                                                    </picture>
                                                                    <div class="theme-number">
                                                                        <span>${count}+</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>`;
                                                    $(".project_gallary_bind").append(bind_image);
                                                } else {
                                                    var bind_image = `<div class="column is-4-mobile is-3-tablet is-4-desktop is-3-widescreen is-hidden">
                                                        <div class="theme-block-ybox theme-number-block">
                                                            <a href="${image}" data-fancybox="gallery">
                                                                <div class="theme-block-img">
                                                                    <picture>
                                                                        <source srcset="${changeToWebP(image)}" type="image/webp">
                                                                        <source srcset="${image}" type="image/jpg">
                                                                        <img class="square-img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind} width="170" height="170">
                                                                    </picture>
                                                                    <div class="theme-number">
                                                                        <span>${count}+</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>`;
                                                    $(".project_gallary_bind").append(bind_image);
                                                }
                                            }
                                        });
                                    } else {
                                        $(".hide_gallary").addClass("is-hidden");
                                    }
                                } else if (targetId == 'walkthrough-video' && sequence.is_hidden === "false") {
                                    if (checkNUll(walkthrough) != "" && walkthrough.length > 0) {
                                        var bindWalkthrough = `<div id="project-walkthrough-video" class="projects-sub-section mb-5 project-walkthrough-video hide_walkthrough_video is-hidden">
                                            <div class="sub-section-title js-scroll fade-in-top">
                                                <h2>Walkthrough Video</h2>
                                            </div>
                                            <div class="walkthrough-video-detail js-scroll fade-in-bottom project_walkthrough_bind">
                                            </div>
                                        </div>`;
                                        $('#project-sections').append(bindWalkthrough);
                                        $(".hide_walkthrough_video").removeClass("is-hidden");
                                        $(".project_walkthrough_bind").html("");
                                        $.each(walkthrough, function(i, images) {
                                            var videourl = checkkeyexistornull(images, "videourl");
                                            var uploadthumbnail = checkNUll(checkkeyexistornull(images, "uploadthumbnail"));
                                            var target = checkNUll(checkkeyexistornull(images, "target"));
                                            var targetbind = "";
                                            if (checkNUll(target) != "") {
                                                if (target == "_blank") {
                                                    targetbind = "target='_blank'"
                                                } else {
                                                    targetbind = "target='_self'"
                                                }
                                            }
                                            var relbind = "";
                                            var rel = checkNUll(checkkeyexistornull(images, "rel"));
                                            if (checkNUll(rel) != "") {
                                                if (rel == "true") {
                                                    relbind = "rel='nofollow'"
                                                } else {
                                                    relbind = ""
                                                }
                                            }
                                            var alt_text = checkNUll(checkkeyexistornull(images, "alt_text"));
                                            var alttextbind;
                                            if (checkNUll(alt_text) !== "") {
                                                alttextbind = "alt='" + alt_text + "'";
                                            } else {
                                                alttextbind = "";
                                            }
                                            if (checkNUll(videourl) != "" || checkNUll(uploadthumbnail) != "") {
                                                if (checkNUll(uploadthumbnail) == "") {
                                                    uploadthumbnail = "https://d1t2fddy6amcvs.cloudfront.net/images/project-detail/walkthrough-video/walkthrough-bg.webp";
                                                }
                                                $("#project-walkthrough-video").removeClass("is-hidden");
                                                var bind_image = ` <div class="theme-block-img black-overlay light-overlay">
                                                    <picture>
                                                        <source srcset="${changeToWebP(uploadthumbnail)}" type="image/webp">
                                                        <source srcset="${uploadthumbnail}" type="image/jpg">
                                                        <img class="img-fixed-ratio" src="${changeToWebP(uploadthumbnail)}" ${alttextbind} width="740" height="420">
                                                    </picture>
                                                    <a ${relbind} class="theme-block-icon video-play-icon icon-md icon-fill" href="${videourl}" ${targetbind} data-fancybox="walkthrough-video">
                                                        <svg width="25" height="31" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.75415 29.761L24.264 15.2286L0.75415 0.563477V29.761Z" fill="#A88944" stroke="#A88944" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </a>
                                                </div>`;
                                                $(".project_walkthrough_bind").append(bind_image);
                                            }
                                        });
                                    } else {
                                        $(".hide_walkthrough_video").addClass("is-hidden");
                                    }
                                } else if (targetId == 'virtual-tour' && sequence.is_hidden === "false") {
                                    if (checkNUll(vr360tour) != "" && vr360tour.length > 0 ) {
                                        var bindVRtour = `<div id="project-virtual-tour" class="projects-sub-section project-virtual-tour mb-5 hide_virtual_tour is-hidden">
                                            <div class="sub-section-title js-scroll fade-in-top">
                                                <h2>Virtual Tour</h2>
                                            </div>
                                            <div class="virtual-tour-detail js-scroll fade-in-bottom  bind_virtual_tour">
                                            </div>
                                        </div>`;
                                        $('#project-sections').append(bindVRtour);
                                        
                                        $(".hide_virtual_tour").removeClass("is-hidden");
                                        $(".bind_virtual_tour").html("");
                                        var data = "";
                                        $.each(vr360tour, function(i, tour) {
                                            var target = checkNUll(checkkeyexistornull(tour, "target"));
                                            var targetbind = "";
                                            if (checkNUll(target) != "") {
                                                if (target == "_blank") {
                                                    targetbind = "target='_blank'"
                                                } else {
                                                    targetbind = "target='_self'"
                                                }
                                            }
                                            var relbind = "";
                                            var rel = checkNUll(checkkeyexistornull(tour, "rel"));
                                            if (checkNUll(rel) != "") {
                                                if (rel == "true") {
                                                    relbind = "rel='nofollow'"
                                                } else {
                                                    relbind = ""
                                                }
                                            }
                                            var alt_text = checkNUll(checkkeyexistornull(tour, "alt_text"));
                                            var alttextbind;
                                            if (checkNUll(alt_text) !== "") {
                                                alttextbind = "alt='" + alt_text + "'";
                                            } else {
                                                alttextbind = "";
                                            }
                                            var url = checkNUll(checkkeyexistornull(tour, "url"));
                                            var uploadthumbnail = checkNUll(checkkeyexistornull(tour, "uploadthumbnail"));
                                            var bind_virtualtour = `<div class="theme-block-img black-overlay light-overlay">
                                            <picture>
                                                <source srcset="${changeToWebP(uploadthumbnail)}" type="image/webp">
                                                <source srcset="${uploadthumbnail}" type="image/jpg">
                                                <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(uploadthumbnail)}" ${alttextbind} width="740" height="420">
                                            </picture>
                                            <a ${relbind} class="theme-block-icon video-play-icon icon-md icon-fill click_virtual_tour" href="javascript:void(0);" data-href="${url}" data-target="${target}" data-cursor="View<br>Virtual<br>Tour">
                                                <picture>
                                                    <img loading="lazy" src="https://d1t2fddy6amcvs.cloudfront.net/images/icons/360-video.svg" ${alttextbind} width="30" height="30">
                                                </picture>
                                            </a>
                                        </div>`;
                                            $(".bind_virtual_tour").append(bind_virtualtour);
                                        });
                                    } else {
                                        $(".hide_virtual_tour").addClass("is-hidden");
                                    }
                                }else if (targetId == 'details' && sequence.is_hidden === "false") {
                                    if (checkNUll(item?.legal) !== "" && Array.isArray(item.legal) && item.legal.length > 0) {

                                        var bindDetails = `<div id="project-details" class="projects-sub-section project-details mb-5 hide_details is-hidden">
                                            <div class="sub-section-title js-scroll fade-in-top">
                                                <h2>Details</h2>
                                            </div>
                                            <div class="bind_legal_documents mb-2 projects-sub-section columns is-multiline bind_details">
                                            </div>
                                        </div>`;
                                        $('#project-sections').append(bindDetails);

                                        let legalHtml = item.legal.map(doc => `
                                            <div class="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen">
                                                <a href="${doc.legaldocimage}"
                                                  target="_blank"
                                                  class="full-width line-btn theme-btn">
                                                  ${doc.doctypename}
                                                </a>
                                            </div>
                                        `).join("");

                                        $(".bind_details")
                                            .html(legalHtml);
                                        
                                        $(".hide_details").removeClass("is-hidden");

                                    } else {
                                        $(".hide_details").addClass("is-hidden");
                                    }
                                }
                                 else if (targetId == "available-units" && sequence.is_hidden === "false") { 
                                    $(".hide_available_units").addClass("is-hidden");
                                }

                                if (checkNUll(bedroomdisplaytext) != "") {
                                    $(".hide_bedrooms").removeClass("is-hidden");
                                    $(".projetct_attributes").html("");
                                    $(".projetct_attributes").html(bedroomdisplaytext);
                                } else {
                                    $(".hide_bedrooms").addClass("is-hidden");
                                }
                            });

                        } else {
                            projectlayoutdatafound = layoutmaster;
                            if (checkNUll(Overview) != "") {
                                $(".hide_about").removeClass("is-hidden");
                                var Overview_bind = `${Overview}`
                                $(".project_description").html("").append(Overview_bind);
                            } else {
                                $(".hide_about").addClass("is-hidden");
                            }
                            if (checkNUll(gallery) != "") {
                                $(".hide_gallary").removeClass("is-hidden");
                                $(".project_gallary_bind").html("");
                                $.each(gallery, function(i, images) {
                                    var image = checkkeyexistornull(images, "image");
                                    var alt_text = checkNUll(checkkeyexistornull(images, "alt_text"));
                                    var alttextbind;
                                    if (checkNUll(alt_text) !== "") {
                                        alttextbind = "alt='" + alt_text + "'";
                                    } else {
                                        alttextbind = "";
                                    }
                                    if (checkNUll(image) != "") {
                                        $("#project-gallery").removeClass("is-hidden");
                                        var count = gallery.length - 7;

                                        if (i < 7) {
                                            var bind_image = ` <div class="column is-4-mobile is-3-tablet is-4-desktop is-3-widescreen">
                                                <div class="theme-block-ybox">
                                                    <div class="theme-block-img">
                                                        <picture>
                                                            <source srcset="${changeToWebP(image)}" type="image/jpeg">
                                                            <source srcset="${image}" type="image/jpg">
                                                            <img class="square-img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind} width="170" height="170">
                                                        </picture>
                                                        <a href="${changeToWebP(image)}" class="theme-block-icon" data-fancybox="gallery">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>`;
                                            $(".project_gallary_bind").append(bind_image);
                                        } else if (i == 7) {
                                            var bind_image = `<div class="column is-4-mobile is-3-tablet is-4-desktop is-3-widescreen">
                                                <div class="theme-block-ybox theme-number-block">
                                                    <a href="${image}" data-fancybox="gallery">
                                                        <div class="theme-block-img">
                                                            <picture>
                                                                <source srcset="${changeToWebP(image)}" type="image/webp">
                                                                <source srcset="${image}" type="image/jpg">
                                                                <img class="square-img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind}  width="170" height="170">
                                                            </picture>
                                                            <div class="theme-number">
                                                                <span>${count}+</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>`;
                                            $(".project_gallary_bind").append(bind_image);
                                        } else {
                                            var bind_image = `<div class="column is-4-mobile is-3-tablet is-4-desktop is-3-widescreen is-hidden">
                                                <div class="theme-block-ybox theme-number-block">
                                                    <a href="${image}" data-fancybox="gallery">
                                                        <div class="theme-block-img">
                                                            <picture>
                                                                <source srcset="${changeToWebP(image)}" type="image/webp">
                                                                <source srcset="${image}" type="image/jpg">
                                                                <img class="square-img-fixed-ratio" src="${changeToWebP(image)}" ${alttextbind} width="170" height="170">
                                                            </picture>
                                                            <div class="theme-number">
                                                                <span>${count}+</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>`;
                                            $(".project_gallary_bind").append(bind_image);
                                        }
                                    }
                                });
                            } else {
                                $(".hide_gallary").addClass("is-hidden");
                            }
                            if (checkNUll(walkthrough) != "" && walkthrough.length > 0) {
                                $(".hide_walkthrough_video").removeClass("is-hidden");
                                $(".project_walkthrough_bind").html("");
                                $.each(walkthrough, function(i, images) {
                                    var videourl = checkkeyexistornull(images, "videourl");
                                    var uploadthumbnail = checkNUll(checkkeyexistornull(images, "uploadthumbnail"));
                                    var target = checkNUll(checkkeyexistornull(images, "target"));
                                    var targetbind = "";
                                    if (checkNUll(target) != "") {
                                        if (target == "_blank") {
                                            targetbind = "target='_blank'"
                                        } else {
                                            targetbind = "target='_self'"
                                        }
                                    }
                                    var relbind = "";
                                    var rel = checkNUll(checkkeyexistornull(images, "rel"));
                                    if (checkNUll(rel) != "") {
                                        if (rel == "true") {
                                            relbind = "rel='nofollow'"
                                        } else {
                                            relbind = ""
                                        }
                                    }
                                    var alt_text = checkNUll(checkkeyexistornull(images, "alt_text"));
                                    var alttextbind;
                                    if (checkNUll(alt_text) !== "") {
                                        alttextbind = "alt='" + alt_text + "'";
                                    } else {
                                        alttextbind = "";
                                    }
                                    if (checkNUll(videourl) != "" || checkNUll(uploadthumbnail) != "") {
                                        if (checkNUll(uploadthumbnail) == "") {
                                            uploadthumbnail = "https://d1t2fddy6amcvs.cloudfront.net/images/project-detail/walkthrough-video/walkthrough-bg.webp";
                                        }
                                        $("#project-walkthrough-video").removeClass("is-hidden");
                                        var bind_image = ` <div class="theme-block-img black-overlay light-overlay">
                                    <picture>
                                        <source srcset="${changeToWebP(uploadthumbnail)}" type="image/webp">
                                        <source srcset="${uploadthumbnail}" type="image/jpg">
                                        <img class="img-fixed-ratio" src="${changeToWebP(uploadthumbnail)}" ${alttextbind} width="740" height="420">
                                    </picture>
                                    <a ${relbind} class="theme-block-icon video-play-icon icon-md icon-fill" href="${videourl}" ${targetbind} data-fancybox="walkthrough-video">
                                        <svg width="25" height="31" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.75415 29.761L24.264 15.2286L0.75415 0.563477V29.761Z" fill="#A88944" stroke="#A88944" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>`;
                                        $(".project_walkthrough_bind").append(bind_image);
                                    }
                                });
                            } else {
                                $(".hide_walkthrough_video").addClass("is-hidden");
                            }
                            if (checkNUll(amenities) != "") {
                                $(".hide_amenities").removeClass("is-hidden");

                                $(".projectt_amenities_bind").html("");
                                $.each(amenities, function(i, images) {
                                    // <span>${amenity_name}</span>
                                    var uploadthumbnail = checkNUll(checkkeyexistornull(images, "image"));
                                    var amenity_name = checkNUll(checkkeyexistornull(images, "amenity_name"));
                                    var new_image = checkNUll(checkkeyexistornull(images, "new_image"));
                                    var amenity_actual_name = checkNUll(checkkeyexistornull(images, "amenity_actual_name"));
                                    var alt_text = checkNUll(checkkeyexistornull(images, "alt_text"));
                                    var alttextbind;
                                    if (checkNUll(alt_text) !== "") {
                                        alttextbind = "alt='" + alt_text + "'";
                                    } else {
                                        alttextbind = "";
                                    }
                                    if (checkNUll(uploadthumbnail) != "") {
                                        var bind_image = `<div class="column">
                                            <div class="project-amenities-items">
                                                <div class="project-amenities-icon">
                                                    <picture>
                                                        <img src="${changeToWebP(uploadthumbnail)}" ${alttextbind} width="50" height="50" />
                                                    </picture>
                                                </div>
                                                <div class="project-amenities-desc">
                                                <span>${amenity_actual_name}</span>
                                                </div>
                                            </div>
                                        </div>`;
                                        $(".projectt_amenities_bind").append(bind_image);
                                    } else {
                                        var bind_image = ` <div class="column">
                                        <div class="project-amenities-items">
                                            <div class="project-amenities-icon">
                                                <picture>
                                                    <img src="${changeToWebP(new_image)}" ${alttextbind} width="50" height="50" />
                                                </picture>
                                            </div>
                                            <div class="project-amenities-desc">
                                            <span>${amenity_actual_name}</span>
                                            </div>
                                        </div>
                                    </div>`;
                                        $(".projectt_amenities_bind").append(bind_image);
                                    }
                                });
                            } else {
                                $(".hide_amenities").addClass("is-hidden");
                            }
                            if (checkNUll(bedroomdisplaytext) != "") {
                                $(".hide_bedrooms").removeClass("is-hidden");
                                $(".projetct_attributes").html("");
                                $(".projetct_attributes").html(bedroomdisplaytext);
                            } else {
                                $(".hide_bedrooms").addClass("is-hidden");
                            }

                            if (checkNUll(layoutmaster) != "") {
                                $(".hide_plans").removeClass("is-hidden");
                                $.each(layoutmaster, function(i, plans) {
                                    var typename = checkNUll(checkkeyexistornull(plans, "typename"));
                                    if (checkNUll(typename) != "") {
                                        var result1 = $.trim(typename).replace(/[^\w]+/g, '');
                                        var activeclass = "";
                                        var loyouttype = "";
                                        var loyoutimage = "";
                                        var bind_plans_all = "";

                                        if (i == 0) {
                                            loyouttype = `<li class="tab2 is-active" onclick="openTab2(event,'projects-plans-all')">
                                                        <a class="theme-btn gray-btn line-btn rounded-pill">All</a>
                                                     </li>`;
                                            loyoutimage = `<div id="projects-plans-all" class="content-tab2" style="display: block;">
                                                        <div id="projects-plans-all-slider" class="splide">
                                                            <div class="splide__track">
                                                                <ul class="splide__list bind_all_plans">

                                                                </ul>
                                                            </div>
                                                            <div class="splide__arrows arrow-top-slider">
                                                                <button class="splide__arrow splide__arrow--prev" type="button" aria-controls="" aria-label="Go to last slide">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M5 12l14 0"></path>
                                                                        <path d="M13 18l6 -6"></path>
                                                                        <path d="M13 6l6 6"></path>
                                                                    </svg>
                                                                </button>
                                                                <button class="splide__arrow splide__arrow--next" type="button" aria-controls="" aria-label="Next slide">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M5 12l14 0"></path>
                                                                        <path d="M13 18l6 -6"></path>
                                                                        <path d="M13 6l6 6"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>`;


                                        }
                                        loyouttype += `<li class="tab2 ${activeclass}" onclick="openTab2(event,'${result1}')"><a class="theme-btn gray-btn line-btn rounded-pill">${typename}</a></li>`;
                                        $('.bind_typename_of_plans').append(loyouttype);

                                        loyoutimage += `<div id="${result1}" class="content-tab2 ">
                                        <div id="splid_${result1}" class="splide arrow-dark project-layouts-slider">
                                            <div class="splide__track">
                                            <ul class="splide__list splid_li_${result1}">
                                                
                                            </ul>
                                            </div>
                                            <div class="splide__arrows arrow-top-slider">
                                                <button class="splide__arrow splide__arrow--prev" type="button" aria-controls="" aria-label="Go to last slide">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M5 12l14 0"></path>
                                                        <path d="M13 18l6 -6"></path>
                                                        <path d="M13 6l6 6"></path>
                                                    </svg>
                                                </button>
                                                <button class="splide__arrow splide__arrow--next" type="button" aria-controls="" aria-label="Next slide">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M5 12l14 0"></path>
                                                        <path d="M13 18l6 -6"></path>
                                                        <path d="M13 6l6 6"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        </div>`;
                                        $('.append_layouts_images').append(loyoutimage);

                                        $.each(plans.layoutdata, function(i, plandetails) {
                                            var sizebind = "";
                                            var image = checkNUll(checkkeyexistornull(plandetails, "image"));
                                            var name = checkNUll(checkkeyexistornull(plandetails, "name"));

                                            var description = checkNUll(checkkeyexistornull(plandetails, "description"));
                                            var size = checkNUll(checkkeyexistornull(plandetails, "size"));
                                            if (checkNUll(size) !== "") {
                                                const sizeNumber = parseFloat(size);
                                                if (!isNaN(sizeNumber)) {
                                                    const formattedSize = getindiacurrencyformat(sizeNumber);
                                                    sizebind = formattedSize.replace(/sq\.? ft|sq ft|sq\. ft\.?|sq\. ft\.?/ig, "").trim() + " Sq. Ft.";
                                                }
                                            }

                                            var projectStatus = "";
                                            if (checkNUll(plandetails.availability_status) !== "") {
                                                if (checkNUll(plandetails.availability_status) === "true") {
                                                    var class_color = get_color_for_status("Sold Out");
                                                    projectStatus = `<div class="project-status ${class_color}"><span>Sold Out</span></div>`;
                                                }
                                            }

                                            var typename = checkNUll(checkkeyexistornull(plandetails, "typename"));
                                            var typenamebind = "";
                                            if (checkNUll(typename) === "Master Plan" || checkNUll(typename) === "Master Plans") {
                                                typenamebind = "";
                                            } else {
                                                typenamebind = " [" + typename + "]";
                                            }

                                            var alt_text = checkNUll(checkkeyexistornull(plandetails, "image_alt_text"));

                                            // if (checkNUll(image) != "") {
                                            bind_plans_all += get_plans(image, name, sizebind, projectStatus, typenamebind, alt_text);
                                            // }
                                        });
                                        $(".bind_all_plans").append(bind_plans_all);


                                        $.each(plans.layoutdata, function(i, item4) {
                                            if (plans.typename == item4.typename) {
                                                var sizebind = "";
                                                var description = checkNUll(checkkeyexistornull(item4, "description"));
                                                var size = checkNUll(checkkeyexistornull(item4, "size"));
                                                // if (checkNUll(size) !== "") {
                                                //     size = size.replace(" Sq Ft", "");
                                                //     size1 = size.replace(" sq ft", "");

                                                //     sizebind = size1 + " Sq Ft";
                                                // }
                                                if (checkNUll(size) !== "") {
                                                    const sizeNumber = parseFloat(size);
                                                    if (!isNaN(sizeNumber)) {
                                                        const formattedSize = getindiacurrencyformat(sizeNumber);
                                                        sizebind = formattedSize.replace(/sq\.? ft|sq ft|sq\. ft\.?|sq\. ft\.?/ig, "").trim() + " Sq. Ft.";
                                                    }
                                                }

                                                var image = checkNUll(checkkeyexistornull(item4, "image"));
                                                var name = checkNUll(checkkeyexistornull(item4, "name"));

                                                var projectStatus = "";
                                                if (checkNUll(item4.availability_status) != "") {
                                                    if (checkNUll(item4.availability_status) === "true") {
                                                        var class_color = get_color_for_status("Sold Out");
                                                        projectStatus = `<div class="project-status ${class_color}"><span>Sold Out</span></div>`;
                                                    }
                                                }
                                                var typename = checkNUll(checkkeyexistornull(item4, "typename"));
                                                var typenamebind = "";
                                                if (checkNUll(typename) === "Master Plan" || checkNUll(typename) === "Master Plans") {
                                                    typenamebind = "";
                                                } else {
                                                    typenamebind = " [" + typename + "]";
                                                }

                                                var alt_text = checkNUll(checkkeyexistornull(item4, "image_alt_text"));

                                                var obj = `<li class="splide__slide ${item4.typename}">
                                                        <div class="theme-block-ybox">
                                                        <div class="theme-block-img">
                                                            <picture>
                                                                <source srcset="${changeToWebP(image)}" type="image/webp">
                                                                <source srcset="${image}" type="image/jpg">
                                                                <img class="img-fixed-ratio" src="${changeToWebP(image)}" alt="${alt_text}" width="350" height="200">
                                                            </picture>
                                                            <a href="${changeToWebP(image)}" class="theme-block-icon" data-fancybox="master-plans" data-caption="${alt_text}" title="${alt_text}">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                </svg>
                                                            </a>
                                                            ${projectStatus}
                                                        </div>
                                                        <div class="theme-block-title">
                                                            <span class="fs-4 fw-600 text-dark-2">${name}${typenamebind}</span><br>
                                                            <span class="plan-sq-ft">${sizebind}</span>
                                                        </div>
                                                    </div>
                                                     </li>`;

                                                var result = $.trim(typename).replace(/[^\w]+/g, '');
                                                $('.splid_li_' + result + '').append(obj);
                                                setTimeout(() => {
                                                    new Splide('#splid_' + result1, {
                                                        gap: '20px',
                                                        type: 'slide',
                                                        perPage: 2,
                                                        perMove: 1,
                                                        pagination: false,
                                                        breakpoints: {
                                                            768: {
                                                                perPage: 1,
                                                            },
                                                        }
                                                    }).mount();
                                                }, 1000);
                                            }
                                        });
                                    }
                                });
                            } else {
                                $(".hide_plans").addClass("is-hidden");
                            }
                            if (checkNUll(vr360tour) != "" && vr360tour.length > 0) {
                                $(".hide_virtual_tour").removeClass("is-hidden");
                                $(".bind_virtual_tour").html("");
                                var data = "";
                                $.each(vr360tour, function(i, tour) {
                                    var target = checkNUll(checkkeyexistornull(tour, "target"));
                                    var targetbind = "";
                                    if (checkNUll(target) != "") {
                                        if (target == "_blank") {
                                            targetbind = "target='_blank'"
                                        } else {
                                            targetbind = "target='_self'"
                                        }
                                    }
                                    var relbind = "";
                                    var rel = checkNUll(checkkeyexistornull(tour, "rel"));
                                    if (checkNUll(rel) != "") {
                                        if (rel == "true") {
                                            relbind = "rel='nofollow'"
                                        } else {
                                            relbind = ""
                                        }
                                    }
                                    var alt_text = checkNUll(checkkeyexistornull(tour, "alt_text"));
                                    var alttextbind;
                                    if (checkNUll(alt_text) !== "") {
                                        alttextbind = "alt='" + alt_text + "'";
                                    } else {
                                        alttextbind = "";
                                    }
                                    var url = checkNUll(checkkeyexistornull(tour, "url"));
                                    var uploadthumbnail = checkNUll(checkkeyexistornull(tour, "uploadthumbnail"));
                                    var bind_virtualtour = `<div class="theme-block-img black-overlay light-overlay">
                                    <picture>
                                        <source srcset="${changeToWebP(uploadthumbnail)}" type="image/webp">
                                        <source srcset="${uploadthumbnail}" type="image/jpg">
                                        <img loading="lazy" src="${changeToWebP(uploadthumbnail)}" ${alttextbind} width="740" height="420">
                                    </picture>
                                    <a ${relbind} class="theme-block-icon video-play-icon icon-md icon-fill click_virtual_tour" href="javascript:void(0);" data-href="${url}" data-target="${target}" data-cursor="View<br>Virtual<br>Tour">
                                         <picture>
                                            <img loading="lazy" src="https://d1t2fddy6amcvs.cloudfront.net/images/icons/360-video.svg" ${alttextbind} width="30" height="30">
                                        </picture>
                                    </a>
                                </div>`;
                                    $(".bind_virtual_tour").append(bind_virtualtour);
                                });
                            } else {
                                $(".hide_virtual_tour").addClass("is-hidden");
                            }
                            if (checkNUll(specification) != "") {
                                $(".hide_specifications").removeClass("is-hidden");
                                $(".bind_specification").html("");
                                $.each(specification, function(i, datas) {

                                    var description = checkNUll(checkkeyexistornull(datas, "description"));
                                    var specificationname = checkNUll(checkkeyexistornull(datas, "specificationname"));
                                    var data_add = "";
                                    if (description != "") {
                                        data_add = ` ${description}`;
                                    }
                                    //  else {
                                    //     data_add = ` No data found`;
                                    // }

                                    var bind_specification = `<div class="accordian_item">
                                        <div class="accordian_title">
                                            <h4>${specificationname}</h4>
                                        </div>
                                        <div class="accordian_desc">
                                            <div class="project-specifications">
                                              
                                                   ${data_add}
                                               
                                            </div>
                                        </div>
                                    </div>`;
                                    $(".bind_specification").append(bind_specification);
                                });
                            } else {
                                $(".hide_specifications").addClass("is-hidden");
                            }

                            if (checkNUll(item.location_url_link) != "") {
                                if (item.LatLong.coordinates.length > 0) {
                                    $(".hide_location").removeClass("is-hidden");

                                    lat = item.LatLong.coordinates[0];
                                    lng = item.LatLong.coordinates[1];
                                    var href = checkNUll(item.location_url_link);
                                    $(".set_map_attr").attr({
                                        "href": href,
                                        "target": "_blank"
                                    });
                                } else {
                                    $(".hide_location").addClass("is-hidden");
                                }
                            }

                            if (checkNUll(item?.legal) !== "" && Array.isArray(item.legal) && item.legal.length > 0) {
                                let legalHtml = item.legal.map(doc => `
                                    <div class="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen">
                                        <a href="${doc.legaldocimage}"
                                          target="_blank"
                                          class="full-width line-btn theme-btn">
                                          ${doc.doctypename}
                                        </a>
                                    </div>
                                `).join("");

                                $(".bind_details").html(legalHtml);
                                $(".hide_details").removeClass("is-hidden");
                            } else {
                                $(".hide_details").addClass("is-hidden");
                            }
                        }


                    });
                }
            },
            complete: function() {

                jQuery(function ($) {
                    const $topMenu = $(".projects-properties-menu");
                    const $menuItems = $topMenu.find("a");
                    let isScrolling = false;

                    let currentActiveHref = null;
                    let stayTimer = null;

                    function getDynamicOffset() {
                        if ($(window).width() < 575) return 131;
                        if ($(window).width() >= 576 && $(window).width() < 767) return 141;
                        if ($(window).width() >= 768 && $(window).width() < 1216) return 173;
                        // return 196;
                        return 130;
                    }

                    // Click Scroll
                    $menuItems.click(function (e) {
                        e.preventDefault();
                        const target = $(this).attr("href");
                        const offsetTop = $(target).offset().top - getDynamicOffset();

                        isScrolling = true;
                        $("html, body").stop().animate({ scrollTop: offsetTop }, 300, () => {
                        isScrolling = false;
                        });

                        // Update active class
                        $(".projects-properties-menu-item").removeClass("active");
                        $(this).parent().addClass("active");

                        // console.log("Active Section HREF (click):", target);

                        // 🔹 MoEngage Event: projects_details_click_section
                        Moengage.track_event("projects_details_click_section", {
                            section: target,
                            ip_address: window.userIP,
                            event_name: "projects_details_click_section",
                            event_type: ""
                        });

                        // Start timer for clicked section
                        // handleSectionStay(target);
                    });

                    // Scroll Detection
                    $(window).on("scroll", function () {
                        if (isScrolling) return;

                        const fromTop = $(window).scrollTop() + getDynamicOffset() + 1;

                        let currentSection = null;
                        $menuItems.each(function () {
                        const section = $($(this).attr("href"));
                        if (section.length && section.offset().top <= fromTop) {
                            currentSection = $(this);
                        }
                        });

                        if (currentSection) {
                          
                        $menuItems.parent().removeClass("active");
                        currentSection.parent().addClass("active");

                            const activeHref = currentSection.attr("href");
                            // console.log("Active Section HREF (scroll):", activeHref);

                            // Start timer for this section
                          
                            const hiddenCount = $("#project-menu").find("li.is-hidden").length;
                            // console.log("Hidden items:", hiddenCount);
                            
                            if (hiddenCount <= 2) {
                              handleSectionStay(activeHref);
                              // console.log(" Hidden count is", hiddenCount, "— handleSectionStay called");
                            } else {
                              // console.log(" Hidden count is", hiddenCount, "— handleSectionStay NOT called");
                            }
                        }
                    });

                    // 💡 Function to handle section stay timer
                    function handleSectionStay(sectionHref) {
                      if (currentActiveHref === sectionHref) return; // already active

                      currentActiveHref = sectionHref;

                      if (stayTimer) clearTimeout(stayTimer);

                      stayTimer = setTimeout(() => {
                          // alert("You stayed on section " + sectionHref + " for 10 seconds.");

                          // 🔹 MoEngage Event: projects_details_read_section
                          Moengage.track_event("projects_details_read_section", {
                              section: sectionHref,
                              stay_seconds: 10,
                              ip_address: window.userIP,
                              event_name: "projects_details_read_section",
                              event_type: "" 
                          });

                      }, 10000); // 10 seconds
                    }

                });
                
                /*let myYbox;
                if (document.querySelector('.yBox')) {
                    myYbox = new yBox();
                    myYbox.init();
                }
                if (checkNUll(myYbox) != "") {
                    myYbox.onYboxOpen = function() {
                        document.body.classList.add('yBoxIsOpen');
                    }
                    myYbox.onYboxClose = function() {
                        document.body.classList.remove('yBoxIsOpen');
                    }
                    myYbox.onNextItemClick = function() {};
                    myYbox.onPrevItemClick = function() {}
                }*/
                if (checkNUll(gallerydatafound) != "") {
                    new Splide('#featured-projects-img-slider', {
                        type: 'loop',
                        arrows: false,
                        perPage: 1,
                        perMove: 1,
                        pauseOnHover: false,
                        autoplay: 'true',
                        interval: '3000',
                        speed: '2000',
                        pagination: false,
                    }).mount();
                }
                if (checkNUll(projectlayoutdatafound) != "") {
                    new Splide('#projects-plans-all-slider', {
                        gap: '20px',
                        type: 'slide',
                        perPage: 2,
                        perMove: 1,
                        pagination: false,
                        breakpoints: {
                            768: {
                                perPage: 1,
                            },
                        }
                    }).mount();
                }
                /***Section Animation***/
                const scrollElements = document.querySelectorAll(".js-scroll");

                const elementInView = (el, dividend = 1) => {
                    const elementTop = el.getBoundingClientRect().top;

                    return (
                        elementTop <=
                        (window.innerHeight || document.documentElement.clientHeight) / dividend
                    );
                };

                const elementOutofView = (el) => {
                    const elementTop = el.getBoundingClientRect().top;

                    return (
                        elementTop > (window.innerHeight || document.documentElement.clientHeight)
                    );
                };

                const displayScrollElement = (element) => {
                    element.classList.add("scrolled");
                };

                const hideScrollElement = (element) => {
                    element.classList.remove("scrolled");
                };

                const handleScrollAnimation = () => {
                    scrollElements.forEach((el) => {
                        if (elementInView(el, 1.25)) {
                            displayScrollElement(el);
                        } else if (elementOutofView(el)) {
                            hideScrollElement(el)
                        }
                    })
                }

                window.addEventListener("scroll", () => {
                    handleScrollAnimation();
                });
                /***End Section Animation***/
                setTimeout(function() {
                    initMap();
                    if (checkNUll(projectlayoutdatafound) != "") {
                        var firstLi = document.querySelector('.bind_typename_of_plans li:first-child');
                        firstLi.click();
                    }
                }, 2000);
            },
            error: function(response) {

            }
        });
    }

    function projectlist(id) {
        var formdata = {};
        srno = 1;
        formdata["dynamicurl"] = "managecontent/v1/projectinventorycms/list";
        formdata["projectdata"] = id
        formdata["is_available"] = "true";
        // formdata["propertycategory"] = "Residential";
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
                    $("#child-projects").removeClass("is-hidden");
                    $('body').addClass('child-projects-details');
                    $(".projects-properties-menu.position-sticky-block").remove();

                    $.each(response.data, function(i, item) {
                        var projectimage = checkNUll(checkkeyexistornull(item, "ProjectImage"));
                        var ProjectLogopng = checkNUll(checkkeyexistornull(item, "ProjectLogopng"));
                        var ProjectLogo = checkNUll(checkkeyexistornull(item, "ProjectLogo"));
                        var LatLong = checkNUll(checkkeyexistornull(item, "LatLong"));
                        var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
                        var Project_slug = checkNUll(checkkeyexistornull(item, "Project_slug"));
                        var DisplayArea = checkNUll(checkkeyexistornull(item, "DisplayArea"));

                        var url = "javascript:void(0);";
                        if (checkNUll(checkkeyexistornull(item, "Project_slug") != "")) {
                            url = `https://www.prestigeconstructions.com/residential-projects/${CityText.toLowerCase()}/${projectid}/${Project_slug}`;
                        }

                        var imagetobind = get_svg_or_png(ProjectLogopng, ProjectLogo);

                        var propertytype = "";
                        if (null_validation_array(item.PropertyTypeText) != "") {
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
                                                            <span>${item.PropertyTypeText}</span>
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
                            displayprice = `<span class="project-price open_enquirey_sidebar cursor-pointer">Price on Request</span>`;
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

                        var residentialproject = `<div class="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen projects-col">
                                                    <div class="project-vertical-block">
                                                        <a href="${url}" class="block-link"></a>
                                                            ${ProjectStatus}
                                                        <div class="projects-img">
                                                            <picture>
                                                                <source srcset="${changeToWebP(projectimage)}" type="image/webp">
                                                                <source srcset="${projectimage}" type="image/jpg">
                                                                <img loading="lazy" class="img-fixed-ratio" src="${changeToWebP(projectimage)}" ${alttextbind} width="470" height="260">
                                                            </picture>
                                                            <div class="project-logo">
                                                                <picture>
                                                                <source srcset="${changeToWebP(ProjectLogopng)}" type="image/webp">
                                                                <source srcset="${changeToWebP(ProjectLogopng)}" type="image/png">
                                                                <img loading="lazy" src="${changeToWebP(ProjectLogopng)}" ${logoalttextbind} width="70" height="70">
                                                                </picture>
                                                            </div>
                                                        </div>
                                                        <div class="project-title-and-price mt-4">
                                                            <div class="project-title">
                                                                <h4><a href="${url}" class="block-link"></a>${checkNUll(item.ProjectName)}</h4>
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
                                                                     data-imagelogo="${checkNUll(item.ProjectLogopng)}" 
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
                                                                        <span class="addenquirechild">Enquire Now</span>
                                                                    </a>
                                                                </li>
                                                                <li class="project-contact-item">
                                                                <a href="javascript:void(0);"
                                                                     data-alttextbind="${checkNUll(alttextbind)}" 
                                                                     data-logoalttextbind="${checkNUll(logoalttextbind)}"
                                                                     data-image="${checkNUll(item.ProjectImage)}" 
                                                                     data-imagelogo="${checkNUll(item.ProjectLogopng)}" 
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

                        var ContactNumber = checkkeyexistornull(item, "ContactNumber");
                        var callingcontact = checkkeyexistornull(item, "callingcontact");
                        if (checkNUll(callingcontact) != "") {
                            callingcontact = callingcontact.replace(/\s/g, '');
                            $(".hide_contact_number" + i).removeClass("is-hidden");
                            $(".bind_contcat_number" + i).attr("href", "tel:" + ContactNumber);
                        } else {
                            $(".hide_contact_number" + i).addClass("is-hidden");
                        }

                    });
                } else {
                    $("#child-projects").addClass("is-hidden");
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

                if(projectid=="prestige-jasdan-classic" || projectid=="prestige-somerville" || projectid=="bellanza" || projectid=="siesta" || projectid=="prestige-ocean-pearl" || projectid=="prestige-eden-garden" || projectid=="prestige-valley-crest" || projectid=="bellagio" || projectid=="apartment" ){
                    enquiry_uet_report_conversion()
                }

            }
        })
    }
    // $(document).on("click", ".accordian_item", function() {
    //     if ($(this).find(".accordian_title").hasClass("active")) {
    //         $(this).find(".accordian_title").removeClass("active");
    //         $(this).find(".accordian_desc").css("display", "none");
    //     } else {
    //         $(".accordian_title").removeClass("active");
    //         $(".accordian_desc").css("display", "none");
    //         $(this).find(".accordian_title").addClass("active");
    //         $(this).find(".accordian_desc").css("display", "block");
    //     }
    // });

    $(document).on("click", ".accordian_title", function (e) {
        var item = $(this).closest(".accordian_item");
        var desc = item.find(".accordian_desc");
        var isActive = $(this).hasClass("active");

        $(".accordian_title").removeClass("active");
        $(".accordian_desc").slideUp();

        if (!isActive) {
            $(this).addClass("active");
            desc.slideDown();
        }
        e.stopPropagation();
    });



    function get_plans(image, name, sizebind, projectStatus, typenamebind, alt_text) {
        var row = `<li class="splide__slide">
                    <div class="theme-block-ybox">
                        <div class="theme-block-img">
                            <picture>
                                <source srcset="${changeToWebP(image)}" type="image/webp">
                                <source srcset="${image}" type="image/jpg">
                                <img class="img-fixed-ratio" src="${changeToWebP(image)}" alt="${alt_text}" width="350" height="200">
                            </picture>
                            <a href="${changeToWebP(image)}" class="theme-block-icon" data-fancybox="master-plans" title="${alt_text}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </a>
                            ${projectStatus}
                        </div>
                        <div class="theme-block-title">
                            <span class="fs-4 fw-600 text-dark-2">${name}${typenamebind}</span><br>
                            <span class="plan-sq-ft">${sizebind}</span>
                        </div>
                    </div>
                </li>`;
        return row;
    }

    async function initMap() {
        try {
            
            const response = await fetch('https://www.prestigeconstructions.com/api/maps');
            const data = await response.json();

            const script = document.createElement('script');
            script.src = data.script;
            script.defer = true;
            script.async = true;
            script.setAttribute("name", "google-maps-api");

            document.head.appendChild(script);

            await new Promise(resolve => {
                script.onload = resolve;
            });

            const mapOptions = {
                zoom: 18,
                center: {
                    lat: lat,
                    lng: lng
                },
            };

            map = new google.maps.Map(document.getElementById("map"), mapOptions);

            const marker = new google.maps.Marker({
                position: {
                    lat: lat,
                    lng: lng
                },
                map: map,
            });
            const infowindow = new google.maps.InfoWindow({
                content: "<b>" + projectname + "</b><p>Address: " + address + "</p>",
            });

            google.maps.event.addListener(marker, "click", () => {
                infowindow.open(map, marker);
            });
            script.remove();

        }catch (error) {
        console.error('Error loading Google Maps API:', error);
        }
            
    }

    /** Cookie Binding Start  **/
    // Function to get cookies start
    (function() {
    /** Cookie Binding Start **/
    // Function to get a single cookie
          function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
          }

          // Function to get multiple cookies
            function getCookies(cookieNames) {
              const cookies = {};
              cookieNames.forEach((name) => {
                cookies[name] = getCookie(name);
              });
              return cookies;
            }

            // Function to check for null, undefined, or empty values
            function checkNUll(value) {
              return value != null && value !== 'null' && value !== 'undefined' ? value : '';
            }

            // List of cookie names
            const cookieNamesList = [
              'customer_FirstName',
              'customer_LastName',
              'customer_Email',
              'customer_Mobile',
              'customer_Mobile_CountryCode',
              'customer_Country_Code'
            ];

            // Retrieve cookies
            const userCookies = getCookies(cookieNamesList);

            // Check if the cookies are valid and not empty
            if (userCookies && Object.keys(userCookies).length > 0) {
              try {
                // Decode and assign cookie values
                const customer_FirstName = decodeURIComponent(userCookies['customer_FirstName'] || '');
                const customer_LastName = decodeURIComponent(userCookies['customer_LastName'] || '');
                const customer_Email = decodeURIComponent(userCookies['customer_Email'] || '');
                const customer_Mobile = decodeURIComponent(userCookies['customer_Mobile'] || '');
                const customer_Mobile_CountryCode = decodeURIComponent(userCookies['customer_Mobile_CountryCode'] || '');
                const customer_Country_Code = decodeURIComponent(userCookies['customer_Country_Code'] || '');
                

                // Combine first name and last name
                const customer_fullname = `${checkNUll(customer_FirstName)}${checkNUll(customer_LastName)}`;

                // Populate form fields with values
                setTimeout(() => {
                  // Additional logic for customer_Country_Code
                  if (checkNUll(customer_Country_Code) !== "" && checkNUll(customer_Country_Code) != null) {
                    $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
                  }

                  $(".customer_Mobile").val(customer_Mobile);
                  $(".customer_fullname").val(customer_fullname);
                  $(".customer_Email").val(customer_Email);

                }, 2500);

              } catch (e) {
                console.error("Error processing cookies: ", e);
              }
            }

            /** Cookie Binding End **/
          })();

        // Function to get cookies end

        // first name +  last name joint
    /** Cookie Binding End  **/


    /** Request Call BAck Start */

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
            function toggleWhatsAppVisibility() {
            const selectedCountryCode = $("#countrycode option:selected").val();
            if (selectedCountryCode === "IN") {
                $(".is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
                $(".resend_otp_btn_request_call_back").addClass("is-hidden"); // Hide Resend OTP button
            $("#timer_display").hide(); // Hide the timer
            } else {
                $(".is_whatsapp").removeClass("is-hidden"); // Show WhatsApp section
                $(".resend_otp_btn_request_call_back").removeClass("is-hidden"); // Show Resend OTP button
                $(".resend_otp_btn_request_call_back").show(); // Show Resend OTP button
                // startOtpTimer(); // Start the OTP timer
            }
        }
        function whatsappNRI(){

        }

        // Trigger toggle on dropdown change
        $("#countrycode").change(function () {
            toggleWhatsAppVisibility();
        });
    });

    $('#enquirynumber').bind("cut copy paste", function(e) {
        e.preventDefault();
    });
    $("#fcountrycode").change(function() {

        countryvalue = $("#fcountrycode").val();
        if (countryvalue != null && countryvalue != undefined && countryvalue != "") {
            if (countryvalue == "IN") {
                $("#enquirynumber").val("");
                $("#enquirynumber").prop("maxlength", "10");
            } else {
                $("#enquirynumber").val("");
                $("#enquirynumber").prop("maxlength", "15");
            }

        }
        function toggleWhatsAppVisibility() {
            const selectedCountryCode = $("#fcountrycode option:selected").val();
            if (selectedCountryCode === "IN") {
                $(".is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
                $(".resend_otp_btn_brohure").addClass("is-hidden"); // Hide Resend OTP button
            $(".timer_display").hide(); // Hide the timer
            } else {
                $(".is_whatsapp").removeClass("is-hidden"); // Show WhatsApp section
                $(".resend_otp_btn_brohure").removeClass("is-hidden"); // Show Resend OTP button
                $(".resend_otp_btn_brohure").show(); // Show Resend OTP button
                // startOtpTimer(); // Start the OTP timer
            }
        }
        function whatsappNRI(){

        }

        // Trigger toggle on dropdown change
        $("#fcountrycode").change(function () {
            toggleWhatsAppVisibility();
        });
    });

    function getaddcountry() {

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
                $(".countrycodeno").html("");
                $(".countrycodeno").html("<option value=''>Country</option>");

                $.each(result.data, function(i, item) {
                    // if (item.description == "India") {
                    //     var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '" selected>' + item.country_code_number + '</option>';
                    //     $(".countrycodeno").parent().addClass("focused");
                    //     $("#enquirynumber").prop("maxlength", "10");
                    //     $("#mobile_callback").prop("maxlength", "10");
                    // } else {
                        var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '">' + item.country_code_number + '&nbsp' + item.description+'</option>';
                    // }

                    $(".countrycodeno").append(obj);
                });

            },
            complete: function() {
              getLocationAndCityName();
            }
        });
    }
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
            email_callback: {
                required: true,
                email: true,
                customEmail: true
            },
            agree_to_be_contacted : {
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

            // API NOT MEARGED IN DEV

            if ($("#whatsapp_detail").is(":checked")) {
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

                    // // console.log("WhatsApp API payload:", formdata); // debug

                    // Open window NOW (user gesture) — navigate after response to avoid popup blocker
                    var whatsappWindow = window.open('about:blank', '_blank');

                    $.ajax({
                        method: "POST",
                        url: "https://www.prestigeconstructions.com/api/apicall",
                        dataType: "json",
                        data: formdata,
                        headers: { 'Authorization': token },
                        success: function(response) {
                            // // console.log("WhatsApp API response:", response); // debug
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
                                    if (whatsappWindow) {
                                        whatsappWindow.location.href = whatsappUrl; // navigate pre-opened window
                                    } else {
                                        window.open(whatsappUrl, '_blank');
                                    }
                                    showToastsuccess("Success", "WhatsApp link generated successfully.");
                                    $("#enquire-sidebar").removeClass("active");
                                } else {
                                    if (whatsappWindow) { whatsappWindow.close(); }
                                    console.warn("No URL found. Full response:", JSON.stringify(response));
                                    showToast("Message", response.message || "Request sent. Check WhatsApp.");
                                }
                            } else {
                                if (whatsappWindow) { whatsappWindow.close(); }
                                showToast("Message", response.message);
                            }
                        },
                        complete: function() {
                            $(".common_submit_btn").attr("disabled", false);
                            var restoreText = $("#whatsapp").is(":checked") ? "Share Link" : ($(".common_submit_btn").attr('data-original-text') || "Send OTP");
                            $(".common_submit_btn").html(restoreText);
                        },
                        error: function(xhr, status, err) {
                            if (whatsappWindow) { whatsappWindow.close(); }
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
                    $(".submit_btn").html("Submitting..");
                    $(".submit_btn").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                      let orderId = generateSixDigitCode();
                        $.each(response.data, function(i, item) {
                            var userId = item._id;
                            $("#otp_verify").val(userId);
                        });
                        localStorage.setItem("order_id", orderId);
                        $(".hide_infromation").addClass("is-hidden");
                        $(".bind_hidden_name").text($("#your_name").val());
                        $(".bind_hidden_number").text($("#mobile_callback").val());
                        $(".bind_hidden_email").text($("#email_callback").val());
                        $(".show_infromation").removeClass("is-hidden");
                        var userEmail = document.getElementById('email_callback').value;
                        var userPhone = document.getElementById('mobile_callback').value;
                        var userName = document.getElementById('your_name').value;
                        var countrycode = $("#countrycode option:selected").attr("data-contry_code_add");
                        var mobiledata = countrycode + userPhone; // Concatenate with a space
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'inqury_submit',
                            order_id: orderId, // MUST MATCH API EXACTLY (userId pass in order_id)
                            'user_data': {
                                "email": userEmail,
                                "phone": mobiledata,
                                "name": userName,
                            }
                        });
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
                    $(".submit_btn").addClass("is-hidden");
                },
                complete: function() {

                    $("#enquire-now-sidebar").removeClass("active");
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
                    $(".theme-loader").addClass("active");
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
                  setTimeout(() => {
                    $(".theme-loader.form-loader").removeClass("active");
                  }, 1000);
                    $(".theme-loader").removeClass("active");
                    $(".otp_submit_btn").html("Submit");
                    $(".otp_submit_btn").attr("disabled", false);
                    $("#enquire-now-sidebar").removeClass("active");
                },
                error: function(response) {}
            });
        }
    });

    function requestcallback() {
        var formdata = {};
        var queryParams = getQueryParams();
        // formdata["dynamicurl"] = "managecontent/v3/requestcallback/create";
        formdata["dynamicurl"] = "managecontent/v3/requestcallback/create";
        formdata["customer_id"] = CustomerId;
        formdata["project_id"] = ProjectID;
        formdata["project_name"] = projectname;
        formdata["project_type"] = "residentialproject";
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
        formdata["project_type"] = "residentialprojects";
        formdata["whatsapp_nri"] = $("#whatsapp_nri_request_call_back").is(":checked") ? 1 : 0;
        let order_id = localStorage.getItem("order_id") || "";
        if (order_id) {
        formdata["order_id"] = order_id;
        }
         
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
                $(".submit_btn").html("Submitting..");
                $(".submit_btn").attr("disabled", true);
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
                    $(".submit_btn").removeClass("is-hidden");
                    $("#otp_dd").val("");
                    showToastsuccess("Success", response.message);
                    // window.dataLayer = window.dataLayer || [];
                    // dataLayer.push({'event':'inqury_submit'});
                } else {
                    showToast("Message", response.message);
                    $('#request_call_back_frm')[0].reset();
                    $("#countrycode").val("IN").change();
                }
            },
            complete: function() {
                // initializeDataLayer();
                // var responseData = response.responseJSON; 
                // if (responseData && responseData.success) {
                //     showToastsuccess("Success", responseData.message);
                // } else {
                //     showToast("Message", responseData.message);
                // }
                $(".submit_btn").html("Send OTP");
                $(".submit_btn").attr("disabled", false);
                if(projectid=="prestige-jasdan-classic" || projectid=="prestige-somerville" || projectid=="bellanza" || projectid=="siesta" || projectid=="prestige-ocean-pearl" || projectid=="prestige-eden-garden" || projectid=="prestige-valley-crest" || projectid=="bellagio" || projectid=="apartment" ){
                    requestcallback_uet_report_conversion();
                }

            },
            error: function(response) {}
        });
    }
    /** Request Call BAck End */

    /** Enquiry Now Start */

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

        /** Cookie Binding Start  **/
          function getCookies(cookieNames) {
            const cookies = {};
            cookieNames.forEach((name) => {
              cookies[name] = getCookie(name);
            });
            return cookies;
          }
          const cookieNames = ['customer_FirstName', 'customer_LastName', 'customer_Email', 'customer_Mobile', 'customer_Mobile_CountryCode', 'customer_Country_Code'];
          const userCookies = getCookies(cookieNames);

          if (userCookies !== undefined && userCookies !== '' && userCookies !== null && userCookies !== "undefined" && userCookies !== "null") {
              try {
                  const customer_FirstName = decodeURIComponent(userCookies['customer_FirstName']);
                  const customer_LastName = decodeURIComponent(userCookies['customer_LastName']);
                  const customer_Email = decodeURIComponent(userCookies['customer_Email']);
                  const customer_Mobile = decodeURIComponent(userCookies['customer_Mobile']);
                  const customer_Mobile_CountryCode = decodeURIComponent(userCookies['customer_Mobile_CountryCode']);
                  const customer_Country_Code = decodeURIComponent(userCookies['customer_Country_Code']);

                  var customer_fullname = checkNUll(customer_FirstName) + "" + checkNUll(customer_LastName);
                  setTimeout(() => {
                    $(".customer_FirstName").val(checkNUll(customer_FirstName));
                    $(".customer_LastName").val(checkNUll(customer_LastName));
                    $(".customer_Email").val(checkNUll(customer_Email));
                    if (checkNUll(customer_Country_Code) !== "" && checkNUll(customer_Country_Code) != null) {
                        $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
                      }
                    // $(".customer_Country_Code").val(customer_Country_Code).change();
                    $(".customer_Mobile").val(checkNUll(customer_Mobile));
                  }, 2000);
              } catch (e) {
              }
          }
        /** Cookie Binding End  **/
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
                $("#booking_country").html("<option value=''>Country</option>");

                $.each(result.data, function(i, item) {
                    // if (item.description == "India") {
                    //     var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '" selected>' + item.country_code_number + '</option>';
                    //     $("#booking_country").parent().addClass("focused");
                    //     $("#booking_number").prop("maxlength", "10");
                    // } else {
                        var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '">' + item.country_code_number + '&nbsp' + item.description+'</option>';
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
        function toggleWhatsAppVisibility() {
            const selectedCountryCode = $("#booking_country option:selected").val();
            if (selectedCountryCode === "IN") {
                $(".is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
                $(".resend_otp_btn_bokking_frm").addClass("is-hidden"); // Hide Resend OTP button
            $("#timer_display").hide(); // Hide the timer
            } else {
                $(".is_whatsapp").removeClass("is-hidden"); // Show WhatsApp section
                $(".resend_otp_btn_bokking_frm").removeClass("is-hidden"); // Show Resend OTP button
                $(".resend_otp_btn_bokking_frm").show(); // Show Resend OTP button
                // startOtpTimer(); // Start the OTP timer
            }
        }
        function whatsappNRI(){

        }

        // Trigger toggle on dropdown change
        $("#booking_country").change(function () {
            toggleWhatsAppVisibility();
        });
    });

    // remove required field 
    $(document).on("click", ".addenquirechild,.addsitevisit", function() {
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
            agree_to_be_contacted : {
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

            // API NOT MEARGED IN DEV

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

                    // // console.log("WhatsApp API payload:", formdata); // debug

                    // Open window NOW (user gesture) — navigate after response to avoid popup blocker
                    var whatsappWindow = window.open('about:blank', '_blank');

                    $.ajax({
                        method: "POST",
                        url: "https://www.prestigeconstructions.com/api/apicall",
                        dataType: "json",
                        data: formdata,
                        headers: { 'Authorization': token },
                        success: function(response) {
                            // // console.log("WhatsApp API response:", response); // debug
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
                                    if (whatsappWindow) {
                                        whatsappWindow.location.href = whatsappUrl; // navigate pre-opened window
                                    } else {
                                        window.open(whatsappUrl, '_blank');
                                    }
                                    showToastsuccess("Success", "WhatsApp link generated successfully.");
                                    $("#enquire-sidebar").removeClass("active");
                                } else {
                                    if (whatsappWindow) { whatsappWindow.close(); }
                                    console.warn("No URL found. Full response:", JSON.stringify(response));
                                    showToast("Message", response.message || "Request sent. Check WhatsApp.");
                                }
                            } else {
                                if (whatsappWindow) { whatsappWindow.close(); }
                                showToast("Message", response.message);
                            }
                        },
                        complete: function() {
                            $submitBtn.attr("disabled", false);
                            var restoreText = $("#whatsapp_book").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                            $submitBtn.html(restoreText);
                        },
                        error: function(xhr, status, err) {
                            if (whatsappWindow) { whatsappWindow.close(); }
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
                            $("#bookings_store_id").val(userId);
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
                    $(".booking_submit_btn").addClass("is-hidden");
                    $("#booking_submit_btn").html("Send OTP");
                    $("#booking_submit_btn").attr("disabled", false);
                    // $("#book-a-site-visit-sidebar").removeClass("active");
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
                    $("#bookings_store_id").val(newOtpId);
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
    $("#requestotp_verify_frm_booking").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            requestotp_dd_booking: {
                "required": true
            },
        },
        messages: {
            requestotp_dd_booking: "<span class='error-msg'>Please Enter OTP</span>",
        },
        submitHandler: function(form) {
            var formdata = {};
            formdata["dynamicurl"] = "employee/v1/customerverifyotp";
            formdata["otp"] = $("#requestotp_dd_booking").val();
            formdata["_id"] = $("#bookings_store_id").val();

            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".requestotp_submit_btn_booking").html("Submitting..");
                    $(".requestotp_submit_btn_booking").attr("disabled", true);
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
                        $("#requestotp_dd_booking").val("");
                    }

                },
                complete: function() {
                    $(".requestotp_submit_btn_booking").html("Submit");
                    $(".requestotp_submit_btn_booking").attr("disabled", false);
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
                    $("#requestotp_dd_booking").val("");
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
 /** Enquiry Now start */
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
            $('.hide_infromation1.mumbai').addClass('is-hidden');
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
        $(".bind_enquiry_images").html("").append(row);
        $(".bind_enquiry_project_name").html("").html(name);
        $(".bind_enquiry_project_address").html("").html(address);
        if (priceonrequest == "true" || priceonrequest == true) {
            $(".bind_enquiry_project_price").text("Price on Request");
        } else {
            $(".bind_enquiry_project_price").html("").html(price);
        }
        projectidforsidebar = projectid;
        projectnameforsidebar = name;
        get_enquirynow_country();
         /** Cookie Binding Start  **/
          // Function to get cookies start
          (function() {
            /** Cookie Binding Start **/
            // Function to get a single cookie
            function getCookie(name) {
              const value = `; ${document.cookie}`;
              const parts = value.split(`; ${name}=`);
              if (parts.length === 2) return parts.pop().split(';').shift();
              return null;
            }

            // Function to get multiple cookies
            function getCookies(cookieNames) {
              const cookies = {};
              cookieNames.forEach((name) => {
                cookies[name] = getCookie(name);
              });
              return cookies;
            }

            // Function to check for null, undefined, or empty values
            function checkNUll(value) {
              return value != null && value !== 'null' && value !== 'undefined' ? value : '';
            }

            // List of cookie names
            const cookieNamesList = [
              'customer_FirstName',
              'customer_LastName',
              'customer_Email',
              'customer_Mobile',
              'customer_Mobile_CountryCode',
              'customer_Country_Code'
            ];

            // Retrieve cookies
            const userCookies = getCookies(cookieNamesList);

            // Check if the cookies are valid and not empty
            if (userCookies && Object.keys(userCookies).length > 0) {
              try {
                // Decode and assign cookie values
                const customer_FirstName = decodeURIComponent(userCookies['customer_FirstName'] || '');
                const customer_LastName = decodeURIComponent(userCookies['customer_LastName'] || '');
                const customer_Email = decodeURIComponent(userCookies['customer_Email'] || '');
                const customer_Mobile = decodeURIComponent(userCookies['customer_Mobile'] || '');
                const customer_Mobile_CountryCode = decodeURIComponent(userCookies['customer_Mobile_CountryCode'] || '');
                const customer_Country_Code = decodeURIComponent(userCookies['customer_Country_Code'] || '');
                // console.log(customer_Country_Code);

                // Combine first name and last name
                const customer_fullname = `${checkNUll(customer_FirstName)} ${checkNUll(customer_LastName)}`;

                // Populate form fields with values
                setTimeout(() => {
                  // Additional logic for customer_Country_Code
                  if (checkNUll(customer_Country_Code) !== "" && checkNUll(customer_Country_Code) != null) {
                    $(".customer_Country_Code").val(checkNUll(customer_Country_Code)).change();
                  }

                  $(".customer_Mobile").val(customer_Mobile);
                  $(".customer_fullname").val(customer_fullname);
                  $(".customer_Email").val(customer_Email);

                }, 2500);

              } catch (e) {
                console.error("Error processing cookies: ", e);
              }
            }

            /** Cookie Binding End **/
          })();

              // Function to get cookies end

              // first name +  last name joint
          /** Cookie Binding End  **/
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
                $("#countrycode1").html("");
                $("#countrycode1").html("<option value=''>Country</option>");

                $.each(result.data, function(i, item) {
                    // if (item.description == "India") {
                    //     var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '" selected>' + item.country_code_number + '</option>';
                    //     $("#countrycode1").parent().addClass("focused");
                    //     $("#mobile_callback1").prop("maxlength", "10");
                    // } else {
                        var obj = '<option class="text-capitalize"  data-contry_code_add="' + item.country_code_number + '" data-description="' + item.description + '" value="' + item.code + '">' + item.country_code_number + '&nbsp' + item.description+'</option>';
                    // }

                    $("#countrycode1").append(obj);
                });

            },
            complete: function() {
              getLocationAndCityName();
            }
        });
    }
    $('#mobile_callback1').bind("cut copy paste", function(e) {
        e.preventDefault();
    });
    $("#countrycode1").change(function() {

        countryvalue = $("#countrycode1").val();
        if (countryvalue != null && countryvalue != undefined && countryvalue != "") {
            if (countryvalue == "IN") {
                $("#mobile_callback1").val("");
                $("#mobile_callback1").prop("maxlength", "10");
            } else {
                $("#mobile_callback1").val("");
                $("#mobile_callback1").prop("maxlength", "15");
            }

        }
        function toggleWhatsAppVisibility() {
            const selectedCountryCode = $("#countrycode1 option:selected").val();
            if (selectedCountryCode === "IN") {
                $(".is_whatsapp").addClass("is-hidden"); // Hide WhatsApp section
                $(".resend_otp_btn_request_call_back1").addClass("is-hidden"); // Hide Resend OTP button
            $("#timer_display").hide(); // Hide the timer
            } else {
                $(".is_whatsapp").removeClass("is-hidden"); // Show WhatsApp section
                $(".resend_otp_btn_request_call_back1").removeClass("is-hidden"); // Show Resend OTP button
                $(".resend_otp_btn_request_call_back1").show(); // Show Resend OTP button
                // startOtpTimer(); // Start the OTP timer
            }
        }
        function whatsappNRI(){

        }

        // Trigger toggle on dropdown change
        $("#countrycode1").change(function () {
            toggleWhatsAppVisibility();
        });
    });
    $(".numbervalidate").keypress(function(e) {
        var keyCode = e.keyCode || e.which;
        var regex = /^[0-9]$/;
        var isValid = regex.test(String.fromCharCode(keyCode));
        if (!isValid) {

        }
        return isValid;
    });
    $("#request_call_back_frm1").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            your_name1: {
                "required": true,
                textOnly: true
            },
            mobile_callback1: {
                "required": true,
                minlength: 9,
            },
            countrycode1: {
                "required": true
            },
            email_callback1: {
                "required": true
            },
            agree_to_be_contacted : {
              "required": true
            }
        },
        messages: {
            your_name1: {
                required: "<span class='error-msg'>Please Enter Name</span>",
                textOnly: "<span class='error-msg'>Please enter only text</span>"
            },
            mobile_callback1: {
                required: "<span class='error-msg'>Please Enter Mobile number</span>",
                minlength: "<span class='error-msg'>Please Edit Digits</span>"
            },
            countrycode1: "<span class='error-msg'>Please Enter Country Code</span>",
            email_callback1: "<span class='error-msg'>Please Enter Email</span>",
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

            // API NOT MEARGED IN DEV

            if ($("#whatsapp_child").is(":checked")) {
                initSocket(); // Ensure socketId is set
                activeWhatsAppCallback = requestcallback1;
                activeWhatsAppFormSelector = "#request_call_back_frm1";

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
                            var restoreText = $("#whatsapp").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                            $submitBtn.html(restoreText).attr("disabled", false);
                        }
                    },
                    error: function() {
                        showToast("Error", "Something went wrong during consent validation. Please try again.");
                        var restoreText = $("#whatsapp").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
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
                    formdata["Page_Name"]          = lastPart + " - Enquiry Now";
                    formdata["Plateform_Name"]     = "web";
                    formdata["RequestFrom"]        = "Website";
                    formdata["Session_ID"]         = socketId;
                    formdata["Type"]               = "Enquiry Now";

                    // // console.log("WhatsApp API payload:", formdata); // debug

                    // Open window NOW (user gesture) — navigate after response to avoid popup blocker
                    var whatsappWindow = window.open('about:blank', '_blank');

                    $.ajax({
                        method: "POST",
                        url: "https://www.prestigeconstructions.com/api/apicall",
                        dataType: "json",
                        data: formdata,
                        headers: { 'Authorization': token },
                        success: function(response) {
                            // // console.log("WhatsApp API response:", response); // debug
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
                                    if (whatsappWindow) {
                                        whatsappWindow.location.href = whatsappUrl; // navigate pre-opened window
                                    } else {
                                        window.open(whatsappUrl, '_blank');
                                    }
                                    showToastsuccess("Success", "WhatsApp link generated successfully.");
                                    $("#enquire-sidebar").removeClass("active");
                                } else {
                                    if (whatsappWindow) { whatsappWindow.close(); }
                                    console.warn("No URL found. Full response:", JSON.stringify(response));
                                    showToast("Message", response.message || "Request sent. Check WhatsApp.");
                                }
                            } else {
                                if (whatsappWindow) { whatsappWindow.close(); }
                                showToast("Message", response.message);
                            }
                        },
                        complete: function() {
                            $submitBtn.attr("disabled", false);
                            var restoreText = $("#whatsapp").is(":checked") ? "Share Link" : ($submitBtn.attr('data-original-text') || "Send OTP");
                            $submitBtn.html(restoreText);
                        },
                        error: function(xhr, status, err) {
                            if (whatsappWindow) { whatsappWindow.close(); }
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
            formdata["Mobile_No"] = $("#mobile_callback1").val();
            formdata["Mobile_CountryCode"] = $("#countrycode1 option:selected").attr("data-contry_code_add");
            var emailbind = $("#countrycode1 option:selected").attr("data-contry_code_add");
            if (emailbind !== "+91") {
                formdata["Email"] = $("#email_callback1").val();
            }
            formdata["whatsapp_nri"] = $("#whatsapp_nri_request_call_back1").is(":checked") ? 1 : 0;


            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".enquiry_now_submit1").html("Submitting..");
                    $(".enquiry_now_submit1").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                        $.each(response.data, function(i, item) {
                            var userId = item._id;
                            $("#otp_verify1").val(userId);
                        });
                        $(".hide_infromation1").addClass("is-hidden");
                        $(".bind_hidden_name1").text($("#your_name1").val());
                        $(".bind_hidden_number1").text($("#mobile_callback1").val());
                        $(".bind_hidden_email1").text($("#email_callback1").val());
                        $(".show_infromation1").removeClass("is-hidden");
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
                    $(".enquiry_now_submit1").addClass("is-hidden");
                    $(".enquiry_now_submit1").html("Send OTP");
                    $(".enquiry_now_submit1").attr("disabled", false);
                    // $("#enquire-now-sidebar").removeClass("active");
                },
                error: function(response) {}
            });
            } // end sendEnquiryOtp
        }
    });

    function requestcallbackresendOtp1() {
        const mobileNumber = $("#mobile_callback1").val();
        const mobileCountryCode = $("#countrycode1 option:selected").attr("data-contry_code_add");
        const email = $("#email_callback1").val();
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
                $(".resend_otp_btn_request_call_back1").text("Resending...").attr("disabled", true);
            },
            success: function (response) {
                if (response.success) {
                  // Update the OTP ID in the hidden input field
                   $("#whatsapp_nri_request_call_back1").prop("checked",false);
                  const newOtpId = response.data[0]._id;
                    $("#otp_verify1").val(newOtpId);
                    // console.log("New OTP _id:", newOtpId);
                    showToast("Success", "OTP sent successfully in Email.");
                    // startOtpTimer(); // Restart the timer after a successful resend
                } else {
                    showToast("Error", response.message || "Failed to resend OTP.");
                }
            },
            complete: function () {
                $(".resend_otp_btn_request_call_back1").text("Resend OTP").attr("disabled", false).hide();
                // setTimeout(() => {
                //   $(".resend_otp_btn_request_call_back1").text("Resending...").attr("disabled", true).hide();
                // }, 2000);
            },
            error: function (xhr) {
                console.error(xhr);
                showToast("Error", "Something went wrong. Please try again.");
            }
        });
    }

    // Event Listener for Resend OTP button
    $(".resend_otp_btn_request_call_back1").on("click", function () {
      requestcallbackresendOtp1();
    });

    $("#otp_verify_frm1").submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            otp_dd1: {
                "required": true
            },
        },
        messages: {
            otp_dd1: "<span class='error-msg'>Please Enter OTP</span>",
        },
        submitHandler: function(form) {
            var formdata = {};
            formdata["dynamicurl"] = "employee/v1/customerverifyotp";
            formdata["otp"] = $("#otp_dd1").val();
            formdata["_id"] = $("#otp_verify1").val();
            $(".theme-loader.form-loader.otp_verify_child").addClass("active");
            $.ajax({
                method: "POST",
                url: "https://www.prestigeconstructions.com/api/apicall",
                dataType: "json",
                data: formdata,
                headers: {
                    'Authorization': token
                },
                beforeSend: function() {
                    $(".otp_submit_btn1").html("Submitting..");
                    $(".otp_submit_btn1").attr("disabled", true);
                },
                success: function(response) {
                    if (response.success == true) {
                        requestcallback1();
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
                        $("#otp_dd1").val("");
                    }

                },
                complete: function() {
                  setTimeout(() => {
                    $(".theme-loader.form-loader.otp_verify_child").removeClass("active");
                  }, 1000);
                    $(".otp_submit_btn1").html("Submit");
                    $(".otp_submit_btn1").attr("disabled", false);
                },
                error: function(response) {}
            });
        }
    });

    function requestcallback1() {

        var formdata = {};
        var queryParams = getQueryParams();
        formdata["dynamicurl"] = "managecontent/v3/requestcallback/create";
        formdata["customer_id"] = CustomerId;
        formdata["project_id"] = projectidforsidebar;
        formdata["project_name"] = projectnameforsidebar;
        formdata["project_type"] = "residentialprojects";
        formdata["type"] = "requestcallback";
        formdata["mobile_no"] = $("#mobile_callback1").val();
        formdata["requestfrom"] = "web";
        formdata["shortsummary"] = $('#notes').val();
        formdata["calltiming"] = $("#requestcallback_time1").val();
        formdata["calldate"] = $("#schedule_date1").val();
        formdata["name"] = $("#your_name1").val();
        formdata["countrycode"] = $("#countrycode1 option:selected").attr("data-contry_code_add");
        formdata["country"] = $("#countrycode1").val();
        formdata["email"] = $("#email_callback1").val();
        formdata["page_url"] = window.location.href;
        if ($("input[name='agree_to_be_contacted']").is(":checked")) {
            formdata["marketing_update_received"] = "yes";
        }
        formdata["project_type"] = "residentialprojects";
        formdata["whatsapp_nri"] = $("#whatsapp_nri_request_call_back1").is(":checked") ? 1 : 0;
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
                $(".enquiry_now_submit1").html("Submitting..");
                $(".enquiry_now_submit1").attr("disabled", true);
            },
            success: function(response) {
                if (response.success == true) {
                    $('#request_call_back_frm1')[0].reset();
                    $("#countrycode1").val("IN").change();
                    $(".hide_infromation1").removeClass("is-hidden");
                    $(".bind_hidden_name1").text("");
                    $(".bind_hidden_number1").text("");
                    $(".bind_hidden_email1").text("");
                    $(".show_infromation1").addClass("is-hidden");
                    $(".enquiry_now_submit1").removeClass("is-hidden");
                    $("#otp_dd1").val("");

                    showToastsuccess("Success", response.message);
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({'event':'inqury_submit'});
                } else {
                    showToast("Message", response.message);
                    $('#request_call_back_frm1')[0].reset();
                    $("#countrycode1").val("IN").change();
                }
            },
            complete: function() {
                $(".enquiry_now_submit1").html("Send OTP");
                $(".enquiry_now_submit1").attr("disabled", false);
                $("#enquire-now-sidebar").removeClass("active");

                if(projectid=="prestige-jasdan-classic" || projectid=="prestige-somerville" || projectid=="bellanza" || projectid=="siesta" || projectid=="prestige-ocean-pearl" || projectid=="prestige-eden-garden" || projectid=="prestige-valley-crest" || projectid=="bellagio" || projectid=="apartment" ){
                    requestcallback_uet_report_conversion();
                }
       
            },
            error: function(response) {}
        });
    }
    /** Enquiry Now end */