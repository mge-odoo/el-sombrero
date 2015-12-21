//<![CDATA[
/**
 * SmoothScroll
 * This helper script created by DWUser.com.  Copyright 2012 DWUser.com.  
 * Dual-licensed under the GPL and MIT licenses.  
 * All individual scripts remain property of their copyrighters.
 * Date: 10-Sep-2012
 * Version: 1.0.1
 */
if (!window['jQuery']) alert('The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery.');

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * jQuery.LocalScroll
 * Copyright (c) 2007-2010 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 05/31/2010
 * @author Ariel Flesler
 * @version 1.2.8b
 **/
;(function(b){function g(a,e,d){var h=e.hash.slice(1),f=document.getElementById(h)||document.getElementsByName(h)[0];if(f){a&&a.preventDefault();var c=b(d.target);if(!(d.lock&&c.is(":animated")||d.onBefore&&!1===d.onBefore(a,f,c))){d.stop&&c._scrollable().stop(!0);if(d.hash){var a=f.id==h?"id":"name",g=b("<a> <\/a>").attr(a,h).css({position:"absolute",top:b(window).scrollTop(),left:b(window).scrollLeft()});f[a]="";b("body").prepend(g);location=e.hash;g.remove();f[a]=h}c.scrollTo(f,d).trigger("notify.serialScroll",
[f])}}}var i=location.href.replace(/#.*/,""),c=b.localScroll=function(a){b("body").localScroll(a)};c.defaults={duration:1E3,axis:"y",event:"click",stop:!0,target:window,reset:!0};c.hash=function(a){if(location.hash){a=b.extend({},c.defaults,a);a.hash=!1;if(a.reset){var e=a.duration;delete a.duration;b(a.target).scrollTo(0,a);a.duration=e}g(0,location,a)}};b.fn.localScroll=function(a){function e(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==i&&(!a.filter||b(this).is(a.filter))}
a=b.extend({},c.defaults,a);return a.lazy?this.bind(a.event,function(d){var c=b([d.target,d.target.parentNode]).filter(e)[0];c&&g(d,c,a)}):this.find("a,area").filter(e).bind(a.event,function(b){g(b,this,a)}).end().end()}})(jQuery);

// Initialize all .smoothScroll links
jQuery(function($){ $.localScroll({filter:'.smoothScroll'}); });




$(document).keypress(function(e) { 
    if (e.keyCode == 27) { 
        $("#myModal").trigger("click");
    } 
});


    $(function() {

                // Menu highlighting
                var menu = $('#menu').offset().top;
                var nourriture_saine = $('#nourriture_saine').offset().top;
                var horaires = $('#s_horaires').offset().top - 10;

                // var current_section = 's_welcome';

                $(window).on('scroll', function() {
                    var y_scroll_pos = window.pageYOffset;
                    if (y_scroll_pos >= 0 && y_scroll_pos < menu) {
                        highlight_menu($('.navigation a')[0]);
                    } else if (y_scroll_pos >= menu && y_scroll_pos < nourriture_saine) {
                        highlight_menu($('.navigation a')[1]);
                    } else if (y_scroll_pos >= nourriture_saine && y_scroll_pos < horaires) {
                         highlight_menu($('.navigation a')[2]);
                    } else if (y_scroll_pos > horaires) {
                         highlight_menu($('.navigation a')[3]);
                    }
                });
        

                $('.carousel').carousel({
                  interval: 5000
                });

                $('img.im_ingredient_small').hover(function(ev) {
                        var id = $(ev.currentTarget).data('id');
                        var $bigImage = $('img.im_ingredient_big');
                        $bigImage.attr('src', 'https://u.jimdo.com/www400/o/saabf8fbe39843684/userlayout/img/ingr-' + id + '.jpg');
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