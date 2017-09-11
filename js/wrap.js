/**
 * Created by JingYi on 2017/09/11.
 */
$(document).ready(function(){
    var t = $(".about-wrap");
    var i = $(".section-left");
    if(t.offsetTop > 80){
        i.css("position","fixed");
    }
});