// DOM element(s) references

var radioElement = document.querySelector(".topup");
var appliancesElement = document.querySelector(".usage");
var buyingButton = document.querySelector(".Btn");
var useButton = document.querySelector(".useNow");

var totalUnitsAvailable = document.querySelector(".unitsAvailable");
var unitsBoughtElem = document.querySelector(".totalUnits");
var amountSpentElem = document.querySelector(".totalAmount");
var advanceCreditElem = document.querySelector(".advanceTaken");


// Factory Function instance 
const electricity = Electricity();


// DOM events here 

buyingButton.addEventListener("click", function () {

    alert('clicked')
});

useButton.addEventListener("click", function () {

    alert('clicked')
});