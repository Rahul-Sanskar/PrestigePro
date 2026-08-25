$(document).ready(function() {
        projectcitylistwithcount();
    });

    function projectcitylistwithcount() {
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
                $('.bind_city_of_residential').html('');
                if (response.success == true && response.data.length > 0) {
                     $.each(response.data, function(i, item) {
                        var CityText = checkNUll(checkkeyexistornull(item, "CityText"));
                        var projectcity = `<li>
                                    <a href="https://www.prestigeconstructions.com/residential-projects/${item._id.toLowerCase()}">${CityText}</a>
                                    </li>`;
                        $('.bind_city_of_residential').append(projectcity);
                    });

                } else {}
            },
            complete: function() {}
        });
    }