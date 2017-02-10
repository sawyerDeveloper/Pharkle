var PharkleModel = function() {
    this.dice = [];
    this.selectedDice = [];
    this.remainingDice = [];
    this.currentPoints = 0;
    this.totalPoints = 0;
    this.rollDiceEvent = new Event(this);
    this.selectDieEvent = new Event(this);
    this.collectPointsEvent = new Event(this);

    this.init();
}

PharkleModel.prototype = {

    init: function() {
        
    },

    collectPoints: function(){
        this.totalPoints += this.currentPoints;
        this.collectPointsEvent.notify();
    },

    rollDice: function(){
        var tempDiceArray = [];
        for(var i=0; i<6; i++){
            var diceValue= Math.floor(Math.random() *6);
        }
    }


};
