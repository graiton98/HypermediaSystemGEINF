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
    linieaMenu();

    translationButtonEvent();
    
}

function loadData(){
    try{
        var content = document.querySelector("#mainContent");
        content.innerHTML = "";
        properties.forEach(function (value) {
            let card = `
            <div class="card propertyCard" style="width: 18rem;" data-before="${ localStorage.getItem("lang") == "es" ? transactions[value.transaction].nameE : transactions[value.transaction].name}">
                <img class="card-img-top" src="img/properties/${value.img}.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><b>${value.price}$</b></h5>
                    <p class="card-text"><i class="fas fa-map-marker-alt"></i> <span data-key="street"></span> ${value.address}, ${population[value.population].name}, Menorca</p>
                    <p><i class="fas fa-ruler-vertical"></i> ${value.m2} <small>m</small>2 <i class="fas fa-bed"></i> ${value.bed} <span data-key="bedrooms"></span></p>
                    <p><i class="fas fa-bath"></i>${value.bath} <span data-key="bathrooms"></span> <i class="fas fa-warehouse"></i> ${value.garage} <span data-key="garage"></span></p>
                    <a href="#" class="btn btn-button verMas" data-key="showMoreButton"></a>
                </div>
            </div>
          `;
          content.innerHTML += card;
        });

        
    }catch(e){}
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


