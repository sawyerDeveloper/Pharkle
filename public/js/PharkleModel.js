var PharkleModel = () => {
    this.dice = [];
    this.selctedDice = [];
    this.currentPoints = 0;
    this.totalPoints = 0;
    this.rollDiceEvent = new Event(this);
    this.selectDieEvent = new Event(this);
    this.collectPointsEvent = new Event(this);

    this.init();
}

PharkleModel.prototype = {


}
