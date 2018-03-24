var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


// on scroll, let interval know that scroll has occurred

$(window).scroll(function(event){
	didScroll = true;
});

// run hasScrolled() and reset didScroll status

setInterval(function(){
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);


function hasScrolled(){
	var scrollTop = $(this).scrollTop();

	if(Math.abs(lastScrollTop - scrollTop) <= delta)
		return;

	if(scrollTop > lastScrollTop && scrollTop > navbarHeight){
		$('nav').removeClass('nav-down').addClass('nav-up');
	}
	else{
		if (scrollTop + $(window).height() < $(document).height()){
			$('nav').removeClass('nav-up').addClass('nav-down');
		}
	}

	lastScrollTop = scrollTop;
}

	// Smooth Scroll

$(document).ready(function(){

	$('.smooth').on('click', function(e){
		var linkHref = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
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


