$(document).ready(function() {
	$('.header-mobile__nav-list__li-link-arrow').click(function() {
		$(this).toggleClass('active');
		$('.header-mobile__nav-list__li-sublist').slideToggle(500);
	});

	$('.header-burger').click(function() {
		$('.header-burger, .header-mobile, body, .header-top__left-logo').toggleClass('active');
	})
})