var translator;
window.onload = function(){
    translator = new Language('en');
    loadData();
    translationButtonEvent();
    /*var url = window.location.href;
    $("#navbarResponsive a").each(function() {
        if(url == (this.href)) {
        $(this).closest("li").addClass("active");
        }
    });*/
}

function loadData(){
    document.querySelectorAll('[data-key]').forEach(element => {
        let key = element.getAttribute('data-key');
        element.innerHTML = translator.get(key);
    });
}

function translationButtonEvent(){
    // click event
    var aux = document.getElementsByClassName("idiomaOpcion");
    for(var i = 0; i < aux.length; i++){
        aux[i].addEventListener("click", function(){
            let k = this.getAttribute("key");
            if(translator.getLang() != k){
                translator.changeLang(k);
                loadData();
            } 
            
        });
    } 
}


