var Event = (sender) => {
    this._sender = sender;
    this._listeners = [];
}

Event.prototype = {

    attach: (listener) => {
        this._listeners.push(listener);
    },

    notify: (args) => {
        for (var i = 0; i < this._listeners.length; i++) {
            this._listeners[i](this._sender, args);
        }
    }
};