
//Desativar animações
AOS.init({
	disable: "mobile",
	duration: 600
});

function dec2hex (dec) {
	return ('0' + dec.toString(16)).substr(-2)
}

jQuery(document).ready(function($) {

	var $window = $(window),
        $body = $("body"),
        $Menu = $(".web-menu");
		
	
	$body.scrollspy({
		target: "#main_menu"
	});	
	
	/* Redução do Menu */
	if ($window.scrollTop() > 0) {
		$Menu.addClass("sticky")
	}
	
	$window.scroll(function() {
		var currentLink = $(this);
		if ($(currentLink).scrollTop() > 0) {
			$Menu.addClass("sticky")
		} else {
			$Menu.removeClass("sticky")
		}
	});			
	

});


  

