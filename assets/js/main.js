$(document).ready(function() {

	for (var i = 0; i < 20; i++) {
		var id = yeison[i].id;
		var img = '<img src="assets/img/'+ yeison[i].image_url +'">';
		var title = '<h4>'+yeison[i].title+'<span> <i class="fa fa-thumb-tack" aria-hidden="true"></i> 36,6k <i class="fa fa-check" aria-hidden="true"> 6</i></span></h4>';
		var description = '<p>'+yeison[i].description+'</p>';
		var user_hash = '<h4><span class="circle">M </span>'+yeison[i].user+' #'+yeison[i].hashtag+'</h4></li>';
		
		$('#hashtags').append('<div class="all-hash"><a href="#">'+yeison[i].hashtag+'</a></div>');

		$('.show-imgs').append('<div class="caja" id="'+id+'">'+ img +'<div class="all-desc">'+ title+ description + user_hash +'</div></div>');
		/*prueba para modal*/
		$('#' + id).click(function(){
        	alert("Titulo: "+ id)
        });
	}
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
      for (var i = 21; i < 40; i++) {
      	var id = yeison[i].id;
		var img = '<img src="assets/img/'+ yeison[i].image_url +'">';
		var title = '<h4>'+yeison[i].title+'<span> <i class="fa fa-thumb-tack" aria-hidden="true"></i> 36,6k <i class="fa fa-check" aria-hidden="true"> 6</i></span></h4>';
		var description = '<p>'+yeison[i].description+'</p>';
		var user_hash = '<h4><span class="circle">M </span>'+yeison[i].user+' #'+yeison[i].hashtag+'</h4>';
		
		$('.show-imgs').append('<div class="caja" id="'+id+'">'+ img +'<div class="all-desc">'+ title + description + user_hash +'</div></div>');
	}
   }
});
