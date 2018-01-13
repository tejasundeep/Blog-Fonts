//<![CDATA[
// Sticky widget
$(function(){if($("#HTML1").length){var o=$("#HTML1"),t=$("#HTML1").offset().top,i=$("#HTML1").height();$(window).scroll(function(){var s=$("#comments").offset().top-i-20,f=$(window).scrollTop();if(f>t?o.css({position:"fixed",top:83}):o.css("position","static"),f>s){var n=s-f;o.css({top:n})}})}});
//]]>
