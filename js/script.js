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

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  };


function loadData(){
    try{
        var content = document.querySelector("#mainContent");
        content.innerHTML = "";
        properties.forEach(function (value) {
            let card = `
            <div class="card propertyCard" style="width: 18rem;" data-before="${ localStorage.getItem("lang") == "es" ? transactions[value.transaction].nameE : transactions[value.transaction].name}">
                <img class="card-img-top" src="img/properties/${value.img[0]}.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><b>Ref: ${value.ref}</b></h5>
                    <p class="card-text"><i class="fas fa-map-marker-alt"></i> <span data-key="street"></span> ${value.address}, ${population[value.population].name}, Menorca</p>
                    <p class="card-text"><i class="fas fa-ruler-vertical"></i> ${value.m2} <small>m</small>2 <i class="fas fa-bed"></i> ${value.bed} <span data-key="bedrooms"></span></p>
                    <p class="card-text"><i class="fas fa-bath"></i>${value.bath} <span data-key="bathrooms"></span> <i class="fas fa-warehouse"></i> ${value.garage} <span data-key="garage"></span></p>
                    <p class="card-text"><b>${formatMoney(value.price)} €</b></p>
                    <a href="property.html?ref=${value.ref}" class="btn btn-button verMas" data-key="showMoreButton"></a>
                </div>
            </div>
          `;
          content.innerHTML += card;
        });
    }catch(e){}
    document.querySelectorAll('[data-key]').forEach(element => {
        let key = element.getAttribute('data-key');
        element.innerHTML = translator.get(key);
        try{
            //element.value = translator.get(key);
        }catch(e){}
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


