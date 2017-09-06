/**
 * Created by Sanchez
 */

'use strict';

/**
 * @class VideoConfig 视频序列帧配置类
 * @constructor
 * @param {Phaser.Game} game
 * @param {String} filepath 路径
 * @param {String} prefix 前缀
 * @param {String} postfix 后缀
 * @param {number} start 序列帧素材开始索引
 * @param {number} end 序列帧素材结束索引
 * @param {number} frameWidth 帧宽度
 * @param {number} frameHeight 帧高度
 * @param {number} frames 每张图片所包含的总帧数
 * @param {number} totalFrames 视频序列帧总帧数
 * @param {number} frameRate 帧率 每秒多少帧
 */


function VideoConfig(game, filepath, prefix, postfix, start, end, frameWidth, frameHeight, frames, totalFrame, frameRate) {
    this.game = game;
    this.frameWidth = frameWidth || 320;
    this.frameHeight = frameHeight || 569;
    this.frames = frames || 9;
    this.frameRate = frameRate || 15;

    this.filepath = filepath;
    this.prefix = prefix;
    this.postfix = postfix;
    this.start = start;
    this.end = end;
    this.totalFrame = totalFrame;
}


VideoConfig.prototype = {
    preload: function() {
        for (var i = this.start; i <= this.end; i++) {
            var nFrame = this.frames;
            if (i == this.end) { //最后一张图片计算剩余帧数
                nFrame = this.totalFrame % this.frames;

            }
            this.game.load.spritesheet(this.prefix + i, this.filepath + this.prefix + i + this.postfix, this.frameWidth, this.frameHeight, nFrame);
        }
    },
    getStartIndex: function() {
        return this.start;
    }
    // removeload:function () {
    //     for (var i = this.start; i <= this.end; i++) {
    //         var nFrame = this.frames;
    //         if (i == this.end) { //最后一张图片计算剩余帧数
    //             nFrame = this.totalFrame % this.frames;
    //
    //         }
    //         this.game.load.spritesheet(this.prefix + i, this.filepath + this.prefix + i + this.postfix, this.frameWidth, this.frameHeight, nFrame);
    //     }
    //
    // }
};


module.exports = VideoConfig;