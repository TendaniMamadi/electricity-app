function Electricity() {

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10,
        'Kettle': 5,
        'TV': 3,
        'Fridge': 13
    };

    var unitsAvailable = 0;
    var totalAmount = 0;
    var totalUnits = 0;
 

    function topUpElectricity(amount) {
        //units bought are equal to amount
        if (amount == 10) {
            unitsAvailable += 7
        }
        else if (amount == 20) {
            unitsAvailable += 14
        }
        else if (amount == 50) {
            unitsAvailable += 35
        }

    }

    function getUnitsAvailable() {

        return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        

        //each appliance has units it consumes, i want the value of each to be subtracted from units available
        if (appliance === "Stove") {
            unitsAvailable -= appliances.Stove
            return true;
        }


        if (appliance === "Fridge") {
            unitsAvailable -= appliances.Fridge
            return true;
        }

        if (appliance === "Kettle") {
            unitsAvailable -= appliances.Kettle
            return true;
        }

        if (appliance === "TV") {
            unitsAvailable -= appliances.TV
            return true;
        }
        else{
            return false;
        }
    }

    function advanceTaken() {
        //conditional function that allows user to buy electricity on credit 
       
    }

    function totalAmountSpent() {
        //should return total amount spent on electricity
        return totalAmount
    }

    function totalUnitsBought() {
        //should return overall units bought 
        return totalUnits
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}