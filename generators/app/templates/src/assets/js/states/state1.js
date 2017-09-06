/**
 * Created by sanchez
 */
(function() {
    'use strict';
    var State1 = function() {};
    module.exports = State1;
    State1.prototype = {
        preload: function() {},
        create: function() {
            var text = "- phaser -\n with a sprinkle of \n pixi dust.\n Now, Your Show Time";
            var style = { font: "60px Arial", fill: "#ff0044", align: "center" };
            var t = this.add.text(this.game.width / 2, this.game.height / 2, text, style);
            t.anchor.setTo(0.5);

        },
        update: function() {}

    };

}());