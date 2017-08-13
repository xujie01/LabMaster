$( document ).ready(function() {
    /*自定义传送带间隔时间*/
    $('.carousel').carousel({
        interval: 8000
    });

    /*导航条锚点*/
    $(".navbar [href^='#']").click(function (e) {
        e.preventDefault();
        var div = $(this).attr('href');
        $("html, body").animate({
            scrollTop: $(div).position().top
        }, "slow");
    });
});

$(function () {
    /****************************作品图标动画************************************/
    $(window).on('scroll', function () {
        var tbs1=$('#index-content-project .Process ul li');//作品图标
        for (var s = 0; s < tbs1.length; s++){
            var tb=tbs1[s];
            if(gd(tb)){
                $(tb).addClass('dh_tb');
            }
            if(tb.getBoundingClientRect().top + Math.floor(tb.offsetHeight/2)<0||tb.getBoundingClientRect().top + Math.floor(tb.offsetHeight/2)>document.documentElement.clientHeight) {
                $(tb).removeClass('dh_tb');
            }
        }
    });
    //判断是否执行动画的函数
    function gd(cc) {
        //将传来的参数到浏览器（可视区域）顶部的高度加上它本身的高度的一半赋给c_h
        var c_h = cc.getBoundingClientRect().top + Math.floor(cc.offsetHeight/2);
        //得到滚动条滚动的的高度  混乱模式得到方法（以body为参照）   标准模式得到方法
        //var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
        //得到可见区域高度（不用document.body.clientHeight因为它的意思是浏览器所有内容高度而不是可见区域）
        var w_hieght = document.documentElement.clientHeight;
        //如果c_h < scrolltop + w_hieght就返回true否则返回false

        if(c_h < w_hieght && c_h>0){
            return true ;
        }else {
            return false;
        }
    };

    /**************************Demo轮播动画**********************************/
    var n = new Swiper("#index-content-share .swiper-container",{
        pagination: "#index-content-share .swiper-container .swiper-pagination",
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        autoplay: 5e3,
        loop: true,
        preloadImages: false,
        lazyLoading: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
    });
    $("#index-content-banner .swiper-container .btn").bind("mouseenter", function() {
        e.stopAutoplay()
    });
    $("#index-content-banner .swiper-container .btn").bind("mouseleave", function() {
        e.startAutoplay()
    });
    $("#index-content-share .swiper-container").bind("mouseenter", function() {
        n.stopAutoplay()
    });
    $("#index-content-share .swiper-container").bind("mouseleave", function() {
        n.startAutoplay()
    })

    /**************************百度地图API功能**********************************/
    /*var map = new BMap.Map("allmap");
    map.enableScrollWheelZoom();
    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint("河北省廊坊市广阳区金光道51号", function(point){
        if (point) {
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMap.Marker(point));
        }else{
            alert("您选择地址没有解析到结果!");
        }
    }, "廊坊市");*/

    /**************************Leaflet地图API功能**********************************/
    var map = L.map('allmap').setView([39.520,116.711], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([39.520,116.711]).addTo(map)
        .bindPopup('中国石油管道科技研究中心.<br> 河北省廊坊市广阳区金光道51号.')
        .openPopup();
});

