$(document).ready(function(){
    tyHome();
    getHitokoto();
});

$('nav a').click(function(){
    target = $(this).attr('goto');
    switchTo(target);
    $('nav li a').each(function(){
        $(this).removeClass('active');
    });
    $(this).addClass('active');
});

function switchTo(target){
    $('.TY-right section').each(function(){
        $(this).removeClass('kita');
        $(target).addClass('kita');
    });

}



/* Home 页面修改 */ 
function tyHome(){
    /* 修改 Home 页面下的标题 */
    const title = $('.TY-title h2');
    title.text('Miya Neko House');

    const itemsHref = ['https:\/\/miya.moe','https:\/\/www.google.com','http:\/\/github.com/jingyi21','https:\/\/twitter.com\/kannazukishizue','#','mailto:kannadukishizu@hotmail.co.jp'];

    /* 这实现方法太愚蠢了有没有优化的方案 */
    $('#TY-items-link-0').attr('href',itemsHref[0]);
    $('#TY-items-link-1').attr('href',itemsHref[1]);
    $('#TY-items-link-2').attr('href',itemsHref[2]);
    $('#TY-items-link-3').attr('href',itemsHref[3]);
    $('#TY-items-link-4').attr('href',itemsHref[4]);
    $('#TY-items-link-5').attr('href',itemsHref[5]);
}

/* 一言 */
function getHitokoto() {
    const hitokoto = ['test1','test2'];
    let random = Math.ceil(Math.random()*2);
    console.log(random);
    $('#hitokoto').text(hitokoto[random]);
}