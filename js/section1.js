$(function(){
	//창의 높이로 섹션1의 높이 설정
	var imgW=0,winW=0,winH=0,x=0,imgW2=0,winW2=0,x2=0,imgW3=0,winW3=0,x3=0;
		
		setTimeout(winHFn,0);
		setTimeout(mobileImg,0);
		setTimeout(mobilesec5Img,0);
		setTimeout(mobilesec7Img,0);
		
		
		//창의 높이 너비가 변하면 자동으로 반영되는 반응형
		$(window).resize(function(){
			winHFn();
			mobileImg();
			mobilesec5Img();
			mobilesec7Img();
		});
			//높이 설정 함수
			function winHFn(){
				winH = $(window).innerHeight();
				$('#section1').css({height:winH});
				winH = $(window).innerHeight();
				$('#section9').css({height:winH});
				winH = $(window).innerHeight();
				$('#section11').css({height:winH});
				winH = $(window).innerHeight();
				$('#section12').css({height:winH});
				winH = $(window).innerHeight();
				$('#section13').css({height:winH});
				winH = $(window).innerHeight();
				$('#section14').css({height:winH});
				winH = $(window).innerHeight();
				$('#section15').css({height:winH});
				winH = $(window).innerHeight();
				$('#section16').css({height:winH});
				winH = $(window).innerHeight();
				$('#section17').css({height:winH});
				winH = $(window).innerHeight();
			}
			
			//반응형 모바일 이미지 
			function mobileImg(){
				winW=$(window).innerWidth();	 
				imgW=$('.mobileImg').innerWidth();	
				x=(imgW-winW)/2;  //(이미지너비(1014)-창너비(414))/2=300(마진레프트값)
				// x=(winW-imgW)/2;  //(창너비(414)-이미지너비(1014))/2=-300(마진레프트값)
				$('.mobileImg').css({marginLeft:-x,transition:'all 0.3s'});
			}
			function mobilesec5Img(){	
				winW2=$(window).innerWidth();	
				imgW2=$('.sec5mobileImg').innerWidth();	
				x2=(imgW2-winW2)/2;
				$('.sec5mobileImg').css({marginLeft:-x2,transition:'all 0.3s'});
			}
			function mobilesec7Img(){	
				winW3=$(window).innerWidth();	
				imgW3=$('.sec7mobileImg').innerWidth();	
				x3=(imgW3-winW3)/2;
				$('.sec7mobileImg').css({marginLeft:-x3,transition:'all 0.3s'});
			}
				
});