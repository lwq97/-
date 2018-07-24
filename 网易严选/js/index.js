$(function(){
    $('.swiper-slide').on('click','a',function(){
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
    })

    
})