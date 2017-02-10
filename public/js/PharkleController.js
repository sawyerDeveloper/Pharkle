var PharkleController = function(model, view){
    this.model = model;
    this.view = view;

    this.init();
}

PharkleController.prototype = {

    init: function(){
        this.setupHandlers()
        .enable();
    },

    setupHandlers: function () {

        this.rollDiceHandler = this.rollDice.bind(this);

        return this;
    },

    enable: function () {

        this.view.rollDiceEvent.attach(this.rollDiceHandler);


        return this;
    },

    rollDice: function() {
        this.model.rollDice();
    }

}