var PharkleView = function(model){
    this.model = model;
    this.rollDiceEvent = new Event(this);
    this.selectDieEvent = new Event(this);
    this.collectPointsEvent = new Event(this);

    this.init();
}

PharkleView.prototype = {
    
    init: function(){
        this.createSubViews();
    },

    createSubViews: function(){
        this.$container = $('.pharkle-game');
        this.$rollDiceButton = this.$container.find('.roll-button');
        console.log(this.$container);
    }
}