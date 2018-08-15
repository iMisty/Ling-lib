$(document).ready(function(){
    getScreenAvailHeight();
});


function getScreenAvailHeight(){
    const ScreenAvailHeight = window.screen.availHeight - 114;
    const setScreenAvailHeight = `${ScreenAvailHeight}px`;
    const wrap = $('.wrap');
    const headerInner = $('.header-inner');
    wrap.css('height',setScreenAvailHeight);
    const headerInnerHeight = `${ScreenAvailHeight - 112}px`;
    console.log(headerInnerHeight);
    headerInner.css('height',headerInnerHeight);
}