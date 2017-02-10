var PharkleView = (model) => {
    this.model = model;
    this.rollDiceEvent = new Event(this);
    this.selectDieEvent = new Event(this);
    this.collectPointsEvent = new Event(this);

    this.init();
}

PharkleView.prototype = {
    
    init: () => {
        this.createSubViews()
            .setupHandlers()
            .enable();
    },

    createSubViews: () => {
        this.$container = $('.pharkle-game');
        this.$rollDiceButton = this.$container.find('.roll-button');
        console.log(this.$rollButton);
    }
}