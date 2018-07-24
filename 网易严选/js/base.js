$(function(){
    window.onload = function () {
        // 375代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少 20代表换算比例
        getRem(375, 50)
      };
      function getRem(pwidth, prem) {
        var html = document.getElementsByTagName("html")[0];
        var oWidth = Math.min(640, document.body.clientWidth || document.documentElement.clientWidth);
        html.style.fontSize = (oWidth / pwidth) * prem + "px";
      }

      $('.nav').on('click','li a',function(){
        $(this).addClass('nav-active');
        $(this).parent().siblings().find('a').removeClass('nav-active');
    })
})