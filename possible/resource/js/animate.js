define('animate', function(require, exports, module){
var tools = require('./tools');
    var Animation = function(options){
        this._initAnimation(options);
    };
    Animation.prototype = {
        _initAnimation: function(options){
            tools.EventEmitter.call(this);
            this.options = tools.mix({
                container: ''
            }, options);
            this.panel = $(this.options.container);
        },

        start: function(){}
    };
    tools.extend(Animation, tools.EventEmitter);	
    module.exports = Animation;
});