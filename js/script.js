$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('.body').toggleClass('lock');
		$('.header_menu a').click(function(){
	  $(this).toggleClass('clicked');
	  $( ".header_menu" ).slideToggle( 900, function() {
	  });
	});
	});

	
	 
	$('.review_slider').slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll: 1,
		speed:500,
		easing:'ease',
		autoplay:true,
		autoplaySpeed:5000,
		touchThreshold:10,
		touchMove:true,
		touchForAnimate:false,
		centerMode:false,
		responsive:[
			{
				breakpoint: 972,
				settings:{
					slidesToShow:2,
				}		
			},
			{
				breakpoint: 670,
				settings:{
					slidesToShow:1,
				}
			}
			]
	});
 
});

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}
 