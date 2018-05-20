window.onload = function(){
    const wrap = document.getElementById('const');
    const random = Math.floor(Math.random()*3);
    const height = window.screen.availHeight;
    const width = window.screen.availWidth;
    const bg = ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524994472195&di=63f2a676d5778b3fcd5fd9e92125a100&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D56800fb02234349b600b66c6a1837fbb%2F023b5bb5c9ea15ce457e0ea3bc003af33b87b28c.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524994496510&di=1461aa500c23ac898ae6608fb535e5ad&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D2baef22da018972bb737088a8fb51ee5%2F42a98226cffc1e17713a42084190f603738de907.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524994510482&di=89731a4d584d2d83d49340eaee4827c3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D204ea0a304f41bd5ce5ee0b739b3ebbe%2Fac6eddc451da81cb648bc4455866d016082431cc.jpg"
];

console.log(random);
wrap.style.backgroundImage = "url(" + bg[random] + ")";
wrap.style.height = height + "px";
wrap.style.width = width + "px";
wrap.style.backgroundSize = "cover";
console.log(height);
}