//smoothScroll.js
$(function(){
	// each()메소드가 .navBt 배열(Array)로 처리하는 메소드
	// $('.navBt').each();  
	// $('.navBt').each(function(){});
	$('.wrap .navBt').each(function(i){
		$(this).on({
			click:	function(){
				if(i==0){  //첫번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:0});		
				}
				else if(i==1){  //두번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section2').offset().top-43},600);
				}
				else if(i==2){  //세번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section6').offset().top-43},600);
				}
				else if(i==3){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section7').offset().top-43},600);
				}
			}
		});
	});
	$('.sub .navBt').each(function(j){
		$(this).on({
			click:	function(){
                if(j==2){  //첫번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:0});		
				}
				else if(j==3){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#druh').offset().top-43},600);
				}
				else if(j==4){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#picas').offset().top-43},600);
				}
				else if(j==5){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#csia').offset().top-43},600);
				}
				else if(j==6){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#cori').offset().top-43},600);
				}
				else if(j==7){  //두번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section9').offset().top-43},600);
				}
				else if(j==8){  //세번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section11').offset().top-43},600);
				}
				else if(j==9){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section12').offset().top-43},600);
				}
				else if(j==10){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section14').offset().top-43},600);
				}
				else if(j==11){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section13').offset().top-43},600);
				}
				else if(j==12){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section15').offset().top-43},600);
				}
				else if(j==13){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section16').offset().top-43},600);
				}
				else if(j==14){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section17').offset().top-43},600);
				}
			}
		});
	});
	
	$('.mBt').each(function(i){
		$(this).on({
			click:	function(){
				if(i==0){  //첫번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:0});		
				}
				else if(i==1){  //두번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section2').offset().top-43},600);
				}
				else if(i==2){  //세번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section6').offset().top-43},600);
				}
				else if(i==3){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section7').offset().top-43},600);
				}
			}
		});
	});
	
	
	$('.sub .mBt').each(function(i){
		$(this).on({
			click:	function(){
				if(i==0){  //첫번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:0});		
				}
				else if(i==1){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#druh').offset().top-43},600);
				}
				else if(i==2){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#picas').offset().top-43},600);
				}
				else if(i==3){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#csia').offset().top-43},600);
				}
				else if(i==4){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#cori').offset().top-43},600);
				}
				else if(i==5){  //두번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section9').offset().top-43},600);
				}
				else if(i==6){  //세번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section11').offset().top-43},600);
				}
				else if(i==7){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section12').offset().top-43},600);
				}
				else if(i==8){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section14').offset().top-43},600);
				}
				else if(i==9){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section13').offset().top-43},600);
				}
				else if(i==10){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section15').offset().top-43},600);
				}
				else if(i==11){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section16').offset().top-43},600);
				}
				else if(i==12){  //네번째버튼 클릭하면
					$('html,body').stop().animate({scrollTop:$('#section17').offset().top-43},600);
				}
			}
		});
	});
	
});