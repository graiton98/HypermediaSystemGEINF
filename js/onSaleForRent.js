
addDataOptions();
setMinMax();
addProperties();

function addProperties() {
let propertiesDiv = document.getElementById("properties");
properties.forEach(function (value, index) {
    let card = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="img/properties/${value.img}.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
    propertiesDiv.innerHTML += card;
});
}

function setMinMax() {
var rangeInput = document.getElementById("range");
rangeInput.min = transactions[0].minPrice;
rangeInput.max = transactions[0].maxPrice;
}

function addDataOptions() {
var populationSelect = document.getElementById("population");
var typeSelect = document.getElementById("type");
population.forEach(function (value, index) {
    addDataOption(value, populationSelect);
});
types.forEach(function (value, index) {
    addDataOption(value, typeSelect);
});
}

function addDataOption(value, select) {
let option = document.createElement("option");
option.text = value.name;
option.value = value.id;
select.add(option);
}

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
const range = wrap.querySelector(".range");
const bubble = wrap.querySelector(".bubble");

range.addEventListener("input", () => {
    setBubble(range, bubble);
});
setBubble(range, bubble);
});

function setBubble(range, bubble) {
const val = range.value;
const min = range.min ? range.min : 0;
const max = range.max ? range.max : 500;
const newValue = Number(((val - min) * 100) / (max - min)),
    newPosition = 10 - newValue * 0.2;
bubble.innerHTML = val;

// Sorta magic numbers based on size of the native UI thumb
bubble.style.left = `calc(${newValue}% + (${newPosition}px))`;
}