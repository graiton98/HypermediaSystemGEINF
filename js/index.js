addContent();

function addContent(){
    var carousel = document.querySelector(".carousel-inner");
    var contingut = document.querySelector("#mainContent");
    var carIndi = document.querySelector(".carousel-indicators");
    var primer = true;
    var cont = 0;
    properties.forEach(function (value, index) {
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
                                <p>${value.price} €</p>
                                <a href="#" class="btn btn-primary">Show more</a>
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
      let card = `
      <div class="card propertyCard" style="width: 18rem;" data-before="${transactions[value.transaction].name}">
                <img class="card-img-top" src="img/properties/${value.img}.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      `;
      contingut.innerHTML += card;
    });
}