var url_string = window.location.href;
var url = new URL(url_string);
var ref = url.searchParams.get("ref");

var prope;

properties.forEach(element => {
    console.log(element);
    if(element.ref == ref) prope = element;
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("imgMapa");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

$("#myModal").click(function (e) {
    if (e.target !== this)
        return;
    modal.style.display = "none";
});

/*<img class="gallery-item" src="http://fakeimg.pl/300/?text=1"/>*/




var galleryCont = document.querySelector(".gallery-container");

prope.img.forEach(element =>{
    let imgG = `<img class="gallery-item" src="img/properties/${element}.jpg">`;
    galleryCont.innerHTML += imgG;
});

document.querySelector(".valueM2").textContent = prope.m2;
document.querySelector(".valueBed").textContent = prope.bed;
document.querySelector(".valueBath").textContent = prope.bath;
document.querySelector(".valueGarage").textContent = prope.garage;
document.querySelector(".valueAddress").textContent = prope.address + ", "+population[prope.population].name;
document.querySelector(".valuePrice").textContent = formatMoney(prope.price);
