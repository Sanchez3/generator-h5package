/**
 * Created by Sanchez
 */
'use strict';

function Gesture(game) {
    this.game = game;
    this.swipeDispatched = 0; //-1 左   0 不动  1 右
    this.onSwipe = new Phaser.Signal();

}

Gesture.prototype.update = function() {

    // var distance = Phaser.Point.distance(this.game.input.activePointer.position, this.game.input.activePointer.positionDown);
    var distance = this.game.input.activePointer.position.x - this.game.input.activePointer.positionDown.x;
    var duration = this.game.input.activePointer.duration;
    this.updateSwipe(distance, duration);
};

Gesture.prototype.updateSwipe = function(distance, duration) {
    if (duration === -1) {
        this.swipeDispatched = 0;
        window.swipeDispatched = 0;

    } else if (this.swipeDispatched == 0 && Math.abs(distance) > 100 && duration > 100 && duration < 400) {
        var positionDown = this.game.input.activePointer.positionDown;
        this.onSwipe.dispatch(this, positionDown);
        if (distance > 0) {
            window.swipeDispatched = 1;
            this.swipeDispatched = 1;
        } else {
            this.swipeDispatched = -1;
            window.swipeDispatched = -1;
        }


    }
};
module.exports = Gesture;