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