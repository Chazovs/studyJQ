var x=5;
console.log(x);
 $(document).ready(function(){
console.log('Ваша версия jQuery ' + jQuery.fn.jquery);

$('#hidebutton').click(function() {
	
	$('#leftBlock').fadeToggle(200);/* Act on the event */
});

$('#myButton2').click(function() {
	
	$("#myLi2").hide(900);/* Act on the event */
});	

$('h3').html('!!!').css({color: 'green', fontWeight: 'bold'});
$('.zzz').html('!!!').css('color', 'red');
/*$('.zzz').html('!!!');
$(':headers.zzz').css('color', 'red');*/
$('li').each(
	function(index, elem){
		$(this).html(index);
	});
});
