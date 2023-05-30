// DOM element(s) references

var radioElement = document.querySelector(".topup");
var appliancesElement = document.querySelector(".usage");
var buyingButton = document.querySelector(".topupNow");
var useButton = document.querySelector(".useNow");

var totalUnitsAvailable = document.querySelector(".unitsAvailable");
var unitsBoughtElem = document.querySelector(".totalUnits");
var amountSpentElem = document.querySelector(".totalAmount");
var advanceCreditElem = document.querySelector(".advanceTaken");


// Factory Function instance 
const electricity = Electricity();


// DOM events here 



// create a function that update units available when amount of electricity bought is checked.

function buyBtnClick() {

    var checkedRadioBtn = document.querySelector("input[name='buyElectricity']:checked");

    let checkedItem = checkedRadioBtn.value;

    if (checkedItem == 10) {

        electricity.topUpElectricity(checkedItem);

    } else if (checkedItem == 20) {

        electricity.topUpElectricity(checkedItem);

    } else if (checkedItem == 50) {

        electricity.topUpElectricity(checkedItem);

    } else if (checkedItem == 30) {

        electricity.topUpElectricity(checkedItem);

    };


    totalUnitsAvailable.innerHTML = electricity.getUnitsAvailable().toFixed(2)

}

buyingButton.addEventListener("click", buyBtnClick)


// create a function that checks what appliance is checked and deduct units available accordingly.

function useBtnClick() {

    var checkedRadioBtn1 = document.querySelector("input[name='useElectricity']:checked");
    
    let appliance = checkedRadioBtn1.value;

    if (appliance === "stove") {

        electricity.useAppliance(appliance);

    } else if (appliance === "TV") {

        electricity.useAppliance(appliance);

    } else if (appliance === "Fridge") {

        electricity.useAppliance(appliance);

    } else if (appliance === "Kettle") {

        electricity.useAppliance(appliance);

    };


    appliancesElement.innerHTML = electricity.useAppliance()

}
useButton.addEventListener("click", useBtnClick)