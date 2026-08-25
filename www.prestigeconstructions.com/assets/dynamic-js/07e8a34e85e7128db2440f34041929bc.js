var xhr = new XMLHttpRequest();
                var botshowapipath = "https://cpidev.preoss.in/genie/v1/";
                if (window.location.hostname == "192.168.1.2") {
                    var botshowapipath = "http://192.168.1.74:3001/";
                }
                else if (window.location.hostname == "cpidev.preoss.in" || window.location.hostname == 'devmyprestige.prestigeconstructions.com' || window.location.hostname == 'devcorporatesite.preoss.in') {
                    botshowapipath = "https://cpidev.preoss.in/genie/v1/";
    
                } else if (window.location.hostname == "cpiuat.preoss.in" || window.location.hostname == 'uatmyprestige.prestigeconstructions.com' || window.location.hostname == 'uatcorporatesite.preoss.in') {
                    botshowapipath = "https://cpiuat.preoss.in/genie/v1/";
                } else if (window.location.hostname == "dashboard.preoss.in" || window.location.hostname == 'myprestige.prestigeconstructions.com' || window.location.hostname == 'www.prestigeconstructions.com' || window.location.hostname == 'prestigeconstructions.com') {
                    botshowapipath = "https://dashboard.preoss.in/genie/v1/";
                }
                xhr.open("POST", botshowapipath+"genielive", true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            var response = JSON.parse(xhr.responseText);
                            if(response.data[0].genielive == 1)
                            {
                                var scripturl = "https://www.prestigeconstructions.com/prestige-responsev2/embed.js";
                                if(window.location.hostname == 'uatmyprestige.prestigeconstructions.com' || window.location.hostname == 'uatcorporatesite.preoss.in' || window.location.hostname == 'devcorporatesite.preoss.in'){
                                    var scripturl = "https://cpiuat.preoss.in/uatgenaiweb/embed.js";
                                }else if (window.location.hostname == "192.168.1.2") {
                                    scripturl = "http://192.168.1.2/prestige_chatbot_local/embed.js";
                                }
                                
                            }else{
                              scripturl = "https://d1t2fddy6amcvs.cloudfront.net/js/pgchat.js"
                            }
                            $.getScript(scripturl)
                                    .done(function() {
                                        // console.log("Chatbot script loaded successfully.");
                                    })
                                    .fail(function() {
                                        // console.log("Failed to load chatbot script.");
                                    });
                        } 
                    }
                };
                xhr.send();