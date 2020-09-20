$(function(){
	var imgSrc='';
	var imgAlt='';
	
	//Gallery Image Button Click Event
	$('.imgBt').on({
		click:	function(){
			$('html').addClass('addScroll'); //html 윈도우 스크롤바 없앤다
			$('.modalWindow').show(0);
			imgSrc=$(this).children().attr('src');    //HTML IMG 태그 안에 속성(Attribute) 
			imgAlt=$(this).children().attr('alt');    //HTML IMG 태그 안에 속성(Attribute) 
			$('.modalImage').attr('src',imgSrc); //모달창의 이미지이름이 갤러리 버튼 이미지로 변경 
			$('.imgTitle').html('<i>'+imgAlt+'</i>'); 		 //모달창의 이미지제목을 갤러리 버튼 이미지 alt값으로 변경 
			// $('.imgTitle').text(imgAlt); 		 //모달창의 이미지제목을 갤러리 버튼 이미지 alt값으로 변경 
		},
		mouseenter:	function(){ //마우스오버 mouseover
			// $(this).children().addClass('addOpacity');
			$(this).children().stop().animate({opacity:1},0).animate({opacity:.5},600);
		},
		focus:	function(){ //키보드탭키오버 focusin(포커스인)
			// $(this).children().addClass('addOpacity');
			$(this).children().stop().animate({opacity:1},0).animate({opacity:.5},600);
		},
		mouseleave:	function(){ //마우스리브 mouseout
			// $(this).children().removeClass('addOpacity');
			$(this).children().stop().animate({opacity:.5},0).animate({opacity:1},600);			
		},
		blur:	function(){ //키보드탭키리브 focusout(포커스아웃)
			// $(this).children().removeClass('addOpacity');
			$(this).children().stop().animate({opacity:.5},0).animate({opacity:1},600);						
		}
	});
	
	//Modal Window Close Event
	$('.modalCloseBt,.modalWindow').on({
		click:	function(){
			$('.modalWindow').hide(0);
			$('html').removeClass('addScroll');  //html 윈도우 스크롤바 나타낸다.
		}
	});
	
	
});