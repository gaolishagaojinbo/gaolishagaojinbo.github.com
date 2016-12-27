window.onload=function(){
    new Swiper('.swiper-container',{
        spaceBetween:10,        //每个slider之间的间距
        prevButton:'.swiper-button-prev',   //上一张
        nextButton:'.swiper-button-next',   //下一张
        pagination:'.swiper-pagination',    //生成小圆点
        paginationClickable:true,           //小圆点可以点击
        loop:true,                          //无缝
        autoplay:1000,                      //自动播放
        autoplayDisableOnInteraction:false  //用户操作完，自动播放
    });
    var aLi=document.querySelectorAll('.more-list li');
    for(var i=0;i<aLi.length;i++){
        var oA=aLi[i].getElementsByTagName('a')[0];
        oA.addEventListener('touchstart',function(){
           this.className='on';
        },false);

    }
}