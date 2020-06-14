$(function() {

    
	/* Marcar as Fotos */
	$('#menu_hamburger').click(function(){
        hambuger();
        $('.photos').coverflow('index', 0);
	});

	$('#menu_entradas').click(function(){
		entradas();
        $('.photos').coverflow('index', 1);

	});

	$('#menu_shakes').click(function(){
        shakes();
        $('.photos').coverflow('index', 2);
    });
    
    /* Marcar o menu */
    $('.photos > #hamburger').click(function() {
        hambuger();
    });

    $('.photos > #entradas').click(function() {
        entradas();
    });

    $('.photos > #shakes').click(function() {
        shakes();
    });


		
    $('.photos').coverflow({
        
        enableWheel : false,
        selectedCss:	{	opacity: 1	},
        outerCss:		{	opacity: .1	},
        
        select:			function(event, cover) {
            var img = $(cover).children().andSelf().filter('img').last();
            $('#photos-name').text(img.data('name') || 'unknown').stop(true).fadeIn('fast');
        }

    });	

});

function hambuger(){
    $("#menu_entradas").removeClass('active');
    $("#menu_hamburger").attr('class','active');
    $("#menu_shakes").removeClass('active');
}

function entradas(){
    $("#menu_entradas").attr('class','active');
    $("#menu_hamburger").removeClass('active');
    $("#menu_shakes").removeClass('active');
}

function shakes(){
    $("#menu_entradas").removeClass('active');
    $("#menu_hamburger").removeClass('active');
    $("#menu_shakes").attr('class','active');
}