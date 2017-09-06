(function() {
    'use strict';


    var Boot = function() {};

    module.exports = Boot;

    Boot.prototype = {
        preload: function() {
            // this.load.image('load_i1', 'assets/img/p1/load_i1.png');
            // var lsData3 = {
            //     'frames': [

            //         {
            //             'filename': 'loading touch_00000.png',
            //             'frame': { 'x': 1, 'y': 1, 'w': 204, 'h': 30 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 565, 'y': 126, 'w': 204, 'h': 30 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00001.png',
            //             'frame': { 'x': 1, 'y': 33, 'w': 204, 'h': 30 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 565, 'y': 126, 'w': 204, 'h': 30 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00002.png',
            //             'frame': { 'x': 153, 'y': 739, 'w': 194, 'h': 84 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 570, 'y': 99, 'w': 194, 'h': 84 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00003.png',
            //             'frame': { 'x': 199, 'y': 381, 'w': 170, 'h': 178 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 582, 'y': 52, 'w': 170, 'h': 178 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00004.png',
            //             'frame': { 'x': 1, 'y': 597, 'w': 150, 'h': 196 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 592, 'y': 43, 'w': 150, 'h': 196 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00005.png',
            //             'frame': { 'x': 153, 'y': 597, 'w': 196, 'h': 140 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 569, 'y': 71, 'w': 196, 'h': 140 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00006.png',
            //             'frame': { 'x': 1, 'y': 193, 'w': 196, 'h': 204 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 569, 'y': 39, 'w': 196, 'h': 204 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00007.png',
            //             'frame': { 'x': 1, 'y': 399, 'w': 196, 'h': 196 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 569, 'y': 43, 'w': 196, 'h': 196 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00008.png',
            //             'frame': { 'x': 207, 'y': 1, 'w': 176, 'h': 196 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 579, 'y': 43, 'w': 176, 'h': 196 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00009.png',
            //             'frame': { 'x': 199, 'y': 199, 'w': 192, 'h': 180 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 571, 'y': 51, 'w': 192, 'h': 180 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00010.png',
            //             'frame': { 'x': 1, 'y': 101, 'w': 200, 'h': 90 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 567, 'y': 96, 'w': 200, 'h': 90 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }, {
            //             'filename': 'loading touch_00011.png',
            //             'frame': { 'x': 1, 'y': 65, 'w': 202, 'h': 34 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 566, 'y': 124, 'w': 202, 'h': 34 },
            //             'sourceSize': { 'w': 1334, 'h': 308 }
            //         }
            //     ],
            //     'meta': {
            //         'app': 'http://www.codeandweb.com/texturepacker',
            //         'version': '1.0',
            //         'image': 'load_sprite3.png',
            //         'format': 'RGBA8888',
            //         'size': { 'w': 392, 'h': 824 },
            //         'scale': '1',
            //         'smartupdate': '$TexturePacker:SmartUpdate:262b7393a6ab76aa959acef5936ba65b:acc9dc5f26120f32e9e157a174c1abde:0f229978f75819fd1693cd09fc50d366$'
            //     }
            // };
            // this.load.atlasJSONArray('load_sprite3', 'assets/img/p1/load_sprite3.png', null, lsData3);

        },

        create: function() {
            var that = this;
            // configure game
            this.game.input.maxPointers = 1;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            // this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.stage.disableVisibilityChange = true;

            // this.scale.setUserScale(window.innerWidth / 750, window.innerWidth / 750, 0, 0);
            // if (this.game.device.desktop) {
            //     this.game.scale.pageAlignHorizontally = true;
            // } else {
            //
            //
            //     if(!window.android){
            //         this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //         // this.scale.pageAlignHorizontally = true;
            //         // this.scale.pageAlignVertically = true;
            //     }else {
            //         this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            //         this.scale.setUserScale(window.innerWidth/750,window.innerWidth/750,0,0);
            //     }
            //
            //
            //     // $('#babysiri-game').find('canvas').css('bottom','0');
            // }
            this.game.state.start('Preloader');
        }

    };

}());