//<![CDATA[

$(document).keypress(function(e) { 
    if (e.keyCode == 27) { 
        $("#myModal").trigger("click");
    } 
});

function reset_desc(){
	document.getElementById('desc-1').style.display = "none";
	document.getElementById('desc-2').style.display = "none";
	document.getElementById('desc-3').style.display = "none";
	document.getElementById('desc-4').style.display = "none";
	document.getElementById('desc-5').style.display = "none";
	document.getElementById('desc-6').style.display = "none";
	document.getElementById('desc-7').style.display = "none";
	document.getElementById('desc-8').style.display = "none";
	document.getElementById('desc-9').style.display = "none";
}

$(function() {

	// Menu highlighting
	var menu = $('#s_menu').offset().top;
	var nourriture_saine = $('#s_n_saine').offset().top;
	var apropos = $('#s_apropos').offset().top;
	var infos = $('#s_infos').offset().top;
	var nav_offset = 120;
	menu = menu - nav_offset;
	nourriture_saine = nourriture_saine - nav_offset;
	apropos = apropos - nav_offset;
	infos = infos - nav_offset;
	
	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		if (y_scroll_pos >= 0 && y_scroll_pos < menu) {
			highlight_menu($('.navigation a')[0]);
		} else if (y_scroll_pos >= menu && y_scroll_pos < nourriture_saine) {
			highlight_menu($('.navigation a')[1]);
		} else if (y_scroll_pos >= nourriture_saine && y_scroll_pos < apropos) {
			 highlight_menu($('.navigation a')[2]);
		} else if (y_scroll_pos >= apropos  && y_scroll_pos < infos) {
			 highlight_menu($('.navigation a')[3]);
		}else if (y_scroll_pos > infos) {
			 highlight_menu($('.navigation a')[4]);
		}
	});

	$('.carousel').carousel({
	  interval: 5000
	});
	
	$('img.im_ingredient_small').hover(function(ev) {
		var id = $(ev.currentTarget).data('id');
		var $bigImage = $('img.im_ingredient_big');
		$bigImage.attr('src', 'https://u.jimdo.com/www400/o/saabf8fbe39843684/userlayout/img/ingr-' + id + '.jpg');
		reset_desc();
		var description = document.getElementById('desc-'+id).style.display = "";
			
	});

	$('a.js_contact_us').click(function(ev) {
		$('#contact_us_modal').show();
	});

	$('#contact_us_send').click(function(ev) {
		var name = $('input[name="contact_name"]').val();
		var content = $('textarea[name="contact_text"]').val();

		// TODO: send the mail
	});

	// $('.valeur_img').on('mouseenter', function(ev) {
	//      var id = $(ev.currentTarget).data('id');
	//      var $textToDisplay = $('.valeur_text[data-id=' + id +']');
	//      $textToDisplay.removeClass('invisible');
	// });

	// $('.valeur_img').on('mouseleave', function(ev) {
	//      var id = $(ev.currentTarget).data('id');
	//      var $textToDisplay = $('.valeur_text[data-id=' + id +']');
	//      $textToDisplay.addClass('invisible');
	// });
});
function ungray_out_background(td) {
	document.getElementById(td.id).style.backgroundColor = "";
}
function gray_out_background(td) {
	document.getElementById(td.id).style.backgroundColor = "#111";
}
function highlight_menu(a) {
	$('.navigation a').removeClass('highlight');
	$(a).addClass('highlight');
}
//]]>