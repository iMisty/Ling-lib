/**
 * Created by JingYi21 on 2017/03/29.
 */
window.onload = function () {
    var nav = document.getElementById("nav");
    var oHeight = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(oHeight);

    if(oHeight > 150){
        nav.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
};
window.onload = function () {
    var btn = document.getElementById('btn');
    var clientHeight = document.body.clientHeight;
    var timer = null;
    var isTop = true;

    window.onScroll = function () {
        var osTop = document.getElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientHeight){
            btn.style.display = "block";
        }else{
            btn.style.display = "none";
        }
        if(!isTop){
            clearInterval();
        }
        isTop = false;
    };

    btn.onclick = function () {
        /*设置定时器*/
        timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-osTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop = true;
            if(osTop == 0){
                clearInterval(timer);
            }
            console.log(osTop)
        },50);

    };
};