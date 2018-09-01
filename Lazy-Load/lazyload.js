class lazyload{
    constructor (el) {
        this.imglist = Array.from(document.querySelectorAll(el));
        this.init();
    }
    // 判断图片是否可加载
    isImgLoad () {
        let imglist = this.imglist;
        for (let i = imglist.length;i--;) {
            this.getBound(imglist[i]) && this.loadImage(imglist[i],i);
        }
    }

    // 获取图片与窗口的信息
    getBound (el) {
        let bound = el.getBoundingClientRect();
        let clientHeight = windows.innerHeight;
        return bound.top <= clientHeight - 100;
    }

    // 加载图片
    loadImage (el, index) {
        // 获取设置好的 data 值
        let src = el.getAttribute('data-load');
        // 赋值至 src
        el.src = src;
        // 避免重复判断
        this.imglist.splice(index, 1);
    }

    // 滚动浏览器界面时,继续判断
    bindEvent () {
        window.addEventListener('scroll', () => {
            this.isImgLoad();
        });
    }

    // 初始化
    init () {
        this.isImgLoad();
        this.bindEvent();
    }
}
// 实例化 lazyload.js 的对象,参数为需要使用懒加载的图片类名
const img = new lazyload('.lazyload');
