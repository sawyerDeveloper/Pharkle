var Die = function(id) {
    this.id = id;
    this.value = 0;
    this.selected = false;

    this.init();
}

Die.prototype = {

    init: function(){
        console.log(this.id);
    },

    select: function(){
        this.selected = true;
    },

    deSelect: function(){
        this.selected = false;

    },
}