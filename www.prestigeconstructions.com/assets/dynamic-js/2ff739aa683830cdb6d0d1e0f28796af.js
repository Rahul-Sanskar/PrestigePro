// $(document).ready(function() {
    //     get_all_pages();

    // });


    // function get_all_pages() {
    //     var formdata = {};
    //     formdata["dynamicurl"] = "managecontent/v1/pages/list";
    //     formdata["site_code"] = "659b95ce6e8c850017d4d736";
    //     formdata["page_slug"] = "privacypolicy";

    //     $.ajax({
    //         method: "POST",
    //         url: "https://www.prestigeconstructions.com/api/apicall",
    //         dataType: "json",
    //         data: formdata,
    //         headers: {
    //             'Authorization': token
    //         },
    //         success: function(response) {
    //             if (response.success == true && response.data.length > 0) {
    //                 $(".bind_privacy_policy").html("");
    //                 $.each(response.data, function(i, item) {
    //                     var page_description = checkNUll(checkkeyexistornull(item, "page_description"));
    //                     $(".bind_privacy_policy").append(page_description);
    //                 });
    //             } else {

    //             }
    //         },
    //         complete: function() {

    //         },
    //         error: function(response) {}
    //     });

    // }