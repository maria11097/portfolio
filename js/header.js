$(function(){
    var t = 0,a=0; //Toggle 기능 하나의 버튼으로 두가지 기능을 수행
    
    //3선 메뉴 버튼 이벤트
    //한 번 누르면 X Close 형태로 바뀌는 애니메이션 제작
    //또 한 번 누르면 3선메뉴버튼  원래대로 돌아오는 애니메이션 제작
 
    
    $('.mobileBt').on({
        click:function(){
            if(t==0){
                $('.m3line').addClass('addLine');   
                t=1;
                $('.mobile-Sub-wrap').show(0);
            }
            else if(t==1){
                $('.m3line').removeClass('addLine');
                t=0;
                $('.mobile-Sub-wrap').hide(0);
            }
            
        }
    })
    
    //상단 43픽셀 스크롤시 상단 고정메뉴배경 나오게 애니메이션
    $(window).scroll(function(){
        if($(window).scrollTop()>=43){
            if(a==0){ //스크롤 이벤트가 계속 발생하므로 a 변수가 0일 때 한 번 실행
//                $('.header-left-wrap-ul>li>a>span').css({color:'#1a1a1a'});
                $('#header .headerWhiteBg').stop().animate({top:0},300);
                //좌측에 메인메뉴박스
                $('.header-left-wrap').stop().animate({top:-43},0).animate({top:0},300);
                $('.header-right-wrap').stop().animate({top:-43},0).animate({top:0},300);
                $('.header-left-wrap-ul>li>a').addClass('header-black');  
                $('.header-left-wrap-ul>li>a>span').addClass('header-black');  
                $('.mobile-wrap>li').addClass('header-black2');  
                a=1;
            }
        }
        else { //43미만이면 초기화
            $('#header .headerWhiteBg').stop().animate({top:-43},300);
            $('.header-left-wrap').stop().animate({top:0},0).animate({top:0},0);
            $('.header-right-wrap').stop().animate({top:0},0).animate({top:0},0);
            $('.header-left-wrap-ul>li>a').removeClass('header-black');  
            $('.header-left-wrap-ul>li>a>span').removeClass('header-black');
            $('.mobile-wrap>li').removeClass('header-black2');  
            a=0;
        }
    });
});