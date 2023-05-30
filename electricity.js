function Electricity() {

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    var unitsAvailable = 0;
    
    function topUpElectricity(amount) {
        //units bought are equal to amount
        if(amount == 10){
            unitsAvailable+=7
        }
        else if(amount == 20){
            unitsAvailable+=14
        }
        else if(amount == 50){
            unitsAvailable+=35
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
      if(appliance === "Stove"){
        unitsAvailable - appliances.Stove
      }

      if(appliance === "Fridge"){
        unitsAvailable - appliances.Fridge
      }

      if(appliance === "Kettle"){
        unitsAvailable - appliances.Kettle
      }

      if(appliances === "TV"){
        unitsAvailable - appliances.TV
      }
    }

    function advanceTaken() {

    }

    function totalAmountSpent() {

    }

    function totalUnitsBought(){
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