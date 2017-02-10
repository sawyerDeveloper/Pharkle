var PharkleView = function(model){
    this.model = model;
    this.rollDiceEvent = new Event(this);
    this.selectDieEvent = new Event(this);
    this.collectPointsEvent = new Event(this);

    this.init();
}

PharkleView.prototype = {
    
    init: function(){
        this.createSubViews()
            .setupHandlers()
            .enable();
    },

    createSubViews: function(){
        this.$container = $('.pharkle-game');
        this.$rollDiceButton = this.$container.find('.roll-button');

        return this;
    },

    setupHandlers: function () {

        this.rollDiceButtonHandler = this.rollDice.bind(this);

        /**
        Handlers from Event Dispatcher
        */
        this.rollDiceHandler = this.rollDice.bind(this);


        return this;
    },

    enable: function () {

        this.$rollDiceButton.click(this.rollDiceButtonHandler);

        /**
         * Event Dispatcher
         */
        this.model.rollDiceEvent.attach(this.rollDiceHandler);


        return this;
    },

    rollDice: function () {
        this.rollDiceEvent.notify();
    },
}