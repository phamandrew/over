

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


$(window).scroll(function(event){
	didScroll = true;

	$('.projects').each(function(i){
		var bottomElement = $(this).position().top + $(this).outerHeight();
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > bottomElement - 200){
			$(this).animate({'opacity':'1'},1000);
		}
	});
});

	// Smooth Scroll

$(document).ready(function(){

	$('.smooth').on('click', function(e){
		var linkHref = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top;
		}, 1500);

		e.preventDefault();
	});

});

// MENU

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", showMenu, false);
var hamburgerCollapse = document.querySelector(".hamburger--collapse")

var flyoutMenu = document.querySelector("#flyoutMenu");
flyoutMenu.addEventListener("click", showMenu, false);

function showMenu(e) {
	flyoutMenu.classList.toggle("show");
	hamburgerCollapse.classList.toggle("is-active");
}

// NAV HIDE

function hasScrolled(){
	var scrollTop = $(this).scrollTop();

	if(Math.abs(lastScrollTop - scrollTop) <= delta)
		return;

	if(scrollTop > lastScrollTop && scrollTop > navbarHeight){
		$('header').removeClass('nav-down').addClass('nav-up');
	}
	else{
		if (scrollTop + $(window).height() < $(document).height()){
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}

	lastScrollTop = scrollTop;
}



