var translator;
window.onload = function(){
    // check if language is stored in webstorage
    if(localStorage.getItem("lang") == undefined){
        localStorage.setItem("lang", "en");
        translator = new Language('en');
    }else{
        translator = new Language(localStorage.getItem("lang"));
    }

    actualitzarMenu();
    loadData();
    translationButtonEvent();
    linieaMenu();
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
                localStorage.removeItem("lang");
                localStorage.setItem("lang", k);
                translator.changeLang(k);
                actualitzarMenu();
                loadData();
            } 
            
        });
    } 
}

function actualitzarMenu(){
    let banderaActual = document.querySelector(".banderaActual");
    banderaActual.src = "img/language/" + translator.getLang()+".png";

    let idiomaActual = document.querySelector(".idiomaActual");
    idiomaActual.textContent = translator.getLang() == "en" ? "English" : "Español";
}


