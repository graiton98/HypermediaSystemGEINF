addContent();

function addContent(){
    var carousel = document.querySelector(".carousel-inner");
    var contingut = document.querySelector("#mainContent");
    var carIndi = document.querySelector(".carousel-indicators");
    var primer = true;
    var cont = 0;
    properties.forEach(function (value) {
      if (value.outstanding == 1) {
        let card = `
                    <div class="carousel-item header ${
                      primer ? "active" : ""
                    }">
                        <img src="img/properties/${value.img[0]}.jpg" class="d-block w-100" alt="first" />
                        <div
                            class="carousel-caption d-none d-md-flex align-items-center"
                            style="color: black; height: 100%; width: 100%"
                        >
                            <div class="card" style="width: 18rem">
                            <div class="card-body">
                                <h5 class="card-title">${value.title}</h5>
                                <p class="card-text">${population[value.population].name}, Menorca</p>
                                <p><b>${formatMoney(value.price)} €</b></p>
                                <a href="property.html?ref=${value.ref}" class="btn btn-button verMas" data-key="showMoreButton"></a>
                            </div>
                            </div>
                        </div>
                    </div>

              `;
        primer = false;
        carousel.innerHTML += card;
        if(cont != 0){
            carIndi.innerHTML += `<li data-target="#carouselOutstanding" data-slide-to="${cont}"></li>`;
        }
        cont++;
      }
    });
}