function setNextPrevLinks(nextURL, prevURL,page) {
        $(".dynamicurl").remove();
        if(page !="last"){
            var nextLink = document.createElement('link');
            nextLink.rel = 'next';
            nextLink.href = nextURL;
            nextLink.classList.add('dynamicurl'); 
            document.head.appendChild(nextLink);
        }
        if(page !="1"){
            var prevLink = document.createElement('link');
            prevLink.rel = 'prev';
            prevLink.href = prevURL;
            prevLink.classList.add('dynamicurl'); 
            document.head.appendChild(prevLink);
        }
    }