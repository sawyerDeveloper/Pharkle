var Die = function() {
    this.id = 0;
    this.value = 0;
    this.selected = false;

    this.init();
}

Die.prototype = {

    init: function(id){
        this.id = id;
        console.log(id);
    },

    select: function(){
        this.selected = true;
    },

    deSelect: function(){
        this.selected = false;

    },
}