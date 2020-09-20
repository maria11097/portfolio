$(function(){
	var t=0,x=0;
	var sec1H=$(window).innerHeight();
	var sec2H=$('#section2').innerHeight();
	var sec3Top=(sec1H+sec2H)-300;
	var sec4Top=(sec1H+sec2H);
	var i=-1; j=0;
	
	$('.graphBar').stop().animate({width:'0%'},0); //막대 그래프(섹션3)
	$('.sec4CountNum').text(0+'+');  				//카운트 수치(섹션4)
	
	$(window).scroll(function(){
		if( $(window).scrollTop()==0){
			t=0;
			x=0;
			i=-1;
            j=0;
			 $('.graphBar').animate({width:'0%'},0);
		}
		
		//막대그래프
		if( $(window).scrollTop()>=sec3Top ){
			if(t==0){
				t=1;
				z=setInterval(graphFn,50);
				function graphFn(){	
					j+=1;
                     
                    if(j<=95) {
                        $('.graphBar').eq(0).css({width:j+'%'},2000);
                        $('.graphBar').eq(0).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graphBar').eq(1).css({width:j+'%'},2000);
                        $('.graphBar').eq(1).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graphBar').eq(2).css({width:j+'%'},2000);
                        $('.graphBar').eq(2).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graphBar').eq(3).css({width:j+'%'},2000);
                        $('.graphBar').eq(3).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graphBar').eq(4).css({width:j+'%'},2000);
                        $('.graphBar').eq(4).text(j+'%');
                    }
                    if(j<=50) {
                        $('.graphBar').eq(5).css({width:j+'%'},2000);
                        $('.graphBar').eq(5).text(j+'%');
                    }
                    if(j<=70) {
                        $('.graphBar').eq(6).css({width:j+'%'},2000);
                        $('.graphBar').eq(6).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graphBar').eq(7).css({width:j+'%'},2000);
                        $('.graphBar').eq(7).text(j+'%');
                    }
                    if(j>100) { 
                        clearInterval(z);
                    }
					
				}
			}
		}
		
		//카운트
		if($(window).scrollTop()>=sec4Top){
			
				if(x==0){
					y=setInterval(countFn,100);
					x=1;
				}
				
				function countFn(){
					i++;  //i=-1+1   출발 0 1 2 3 .....14  55 89 
					if(i<=100){
						$('.sec4CountNum').eq(0).text(i + '%+');
					}
					if(i<=100){
						$('.sec4CountNum').eq(1).text(i + '%+');
					}
					if(i<=100){
						$('.sec4CountNum').eq(2).text(i +  '%+');
					}
//					if(i<=150){
//						$('.sec4CountNum').eq(3).text(i + '+');
//					}
					else{ //151이상이면 정지
						clearInterval(y);
					}
				}
		}
	});
    
      $(window).scroll(function(){
        if ($(this).scrollTop() > 120) $('.top').fadeIn();
        else $('.top').fadeOut();
      });
      $(document).on("click",".top",function(e){
        e.preventDefault();
        $("html, body").stop().animate({ scrollTop: 0 }, "slow");
      });
    
      $('#gnb li a:first-child').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 300, 'linear');
      });

      $('.down').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
      });
});