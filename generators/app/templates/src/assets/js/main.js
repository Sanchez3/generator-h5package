/**
 * Created by sanchez 
 */
'use strict';
window.game = new Phaser.Game('100', '100', Phaser.CANVAS, 'mycanvas', null, true);
window.game.state.add('Boot', require('./states/boot'));
window.game.state.add('Preloader', require('./states/preloader'));
window.game.state.add('State1', require('./states/state1'));
window.game.state.start('Boot');


window.h5 = {
    rootResize2: function() {
        //orientation landscape width=1334px
        var wFsize;
        var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width :
            window.innerWidth : window.innerWidth;
        var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ?
            screen.height : window.innerHeight : window.innerHeight;
        if (wWidth > wHeight) {
            wHeight = wWidth;
        }
        wFsize = wHeight / 13.34;
        document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
    },
    rootResize1: function() {
        //orientation landscape width=1334px
        var that = this;
        var Dpr = 1,
            uAgent = window.navigator.userAgent;
        var isIOS = uAgent.match(/iphone/i);
        var isYIXIN = uAgent.match(/yixin/i);
        var is2345 = uAgent.match(/Mb2345/i);
        var ishaosou = uAgent.match(/mso_app/i);
        var isSogou = uAgent.match(/sogoumobilebrowser/ig);
        var isLiebao = uAgent.match(/liebaofast/i);
        var isGnbr = uAgent.match(/GNBR/i);
        var isWeixin = uAgent.match(/MicroMessenger/i);
        var wFsize;
        var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width :
            window.innerWidth : window.innerWidth;
        var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ?
            screen.height : window.innerHeight : window.innerHeight;
        if (isIOS) {
            wWidth = screen.width;
            wHeight = screen.height;
        }
        if (wWidth > wHeight) {
            wHeight = wWidth;
        }
        wFsize = wHeight / 13.34;
        if (isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr || isWeixin) { //YIXIN 和 2345 这里有个刚调用系统浏览器时候的bug，需要一点延迟来获取
            setTimeout(function() {
                wHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                wWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                if (wWidth > wHeight) {
                    wHeight = wWidth;
                }
                wFsize = wHeight / 13.34;
                // wFsize = wFsize > 32 ? wFsize : 32;
                document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
            }, 500);
        } else {
            document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
        }

        return that;

    },
    eventInit: function() {
        var that = this;
        document.addEventListener('touchstart', function(e) {}, false);
        document.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, false);
        return that;
    },
    cssInit: function() {
        var that = this;
        /*
        that.rootResize1();
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
            if (window.orientation == 90 || window.orientation == -90) {
                //横屏
                //_.renderShuping();
                that.rootResize();
            } else {
                //竖屏
                //_.closeShuping();
            }
        }, false);
        */
        var noChangeCountToEnd = 100,
            noEndTimeout = 1000;
        that.rootResize2();
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
            var interval,
                timeout,
                end,
                lastInnerWidth,
                lastInnerHeight,
                noChangeCount;
            end = function() {
                // "orientationchangeend"
                clearInterval(interval);
                clearTimeout(timeout);
                interval = null;
                timeout = null;
                that.rootResize1();
            };
            interval = setInterval(function() {
                if (window.innerWidth === lastInnerWidth && window.innerHeight === lastInnerHeight) {
                    noChangeCount++;
                    if (noChangeCount === noChangeCountToEnd) {
                        // The interval resolved the issue first.
                        end();
                    }
                } else {
                    lastInnerWidth = window.innerWidth;
                    lastInnerHeight = window.innerHeight;
                    noChangeCount = 0;
                }
            });
            timeout = setTimeout(function() {
                // The timeout happened first.
                end();
            }, noEndTimeout);
        });

        return that;
    }
};
window.h5.cssInit().eventInit();


function showStats() {
    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    var fs = document.createElement('div');
    fs.style.position = 'absolute';
    fs.style.left = 0;
    fs.style.top = 0;
    fs.style.zIndex = 999;
    fs.appendChild(stats.domElement);
    document.body.appendChild(fs);

    function animate() {
        stats.begin();
        // monitored code goes here
        stats.end();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}
showStats();