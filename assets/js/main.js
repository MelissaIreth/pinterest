$(document).ready(function() {

	for (var i = 0; i < 20; i++) {
		var id = yeison[i].id;
		var img = '<img src="assets/img/'+ yeison[i].image_url +'">';
		var title = '<h4>'+yeison[i].title+'<span> <i class="fa fa-thumb-tack" aria-hidden="true"></i> 36,6k <i class="fa fa-check" aria-hidden="true"> 6</i></span></h4>';
		var description = '<p>'+yeison[i].description+'</p>';
		var user_hash = '<h4><span class="circle">M</span>'+yeison[i].user+' #'+yeison[i].hashtag+'</h4></li>';
		
		$('.hashtags').append('<div class="hashtags__info"><a href="#">'+yeison[i].hashtag+'</a></div>');

		$('.show-imgs').append('<div class="caja" id="'+id+'">'+ img +'<div class="caja__desc">'+ title+ description + user_hash +'</div></div>');
		el_modal();
	}

});

$(window).scroll(function(e) {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
      for (var i = 21; i < 40; i++) {
      	var id = yeison[i].id;
		var img = '<img src="assets/img/'+ yeison[i].image_url +'">';
		var title = '<h4>'+yeison[i].title+'<span> <i class="fa fa-thumb-tack" aria-hidden="true"></i> 36,6k <i class="fa fa-check" aria-hidden="true"> 6</i></span></h4>';
		var description = '<p>'+yeison[i].description+'</p>';
		var user_hash = '<h4><span class="circle">M </span>'+yeison[i].user+' #'+yeison[i].hashtag+'</h4>';
		
		$('.show-imgs').append('<div class="caja" id="'+id+'">'+ img +'<div class="caja__desc">'+ title + description + user_hash +'</div></div>');
		el_modal();
	}
   }else{
	 	e.preventDefault();
		e.stopPropagation();
	 }
});

/*funcion modal*/

function el_modal(){
	yeison.forEach(function(cv){
		$('#' + cv.id).click(function(e) {
					
			var m_icons = (	'<ul class="modal__nav--iconos-list">' + 
								'<li><a href="#"><i class="fa fa-download" aria-hidden="true"></i></a></li>' +
								'<li><a href="#"><i class="fa fa-check" aria-hidden="true"></i></a></li>' +
								'<li><a href="#"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a></li>' + 
								'<li><a href="#" class="save"><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</a></li>' + 
				            '</ul>');

			var modal = ('<div class="modal" data-modal="modal-1">' +
							'<div class="modal__nav">' + 
								'<div class="modal__nav--iconos">' +  
									'<a class="modal__close" data-modal-action="close" href="#close"><i class="fa fa-times" aria-hidden="true"></i></a>' +
									m_icons +
								'</div>' +
							'</div>' +
							'<div class="modal__cont">' +
								'<h3>' + cv.title + '</h3>' + 
								'<img src="assets/img/' +cv.image_url +'" class="modal__cont--img">' + 
								'<div class="modal__cont--iconos">' +
									m_icons + 
								'</div>' +
								'<div class="modal__cont--footer">' +
									'<span class="circle">M</span>' +
									'<span class="user">' + cv.user + '</span>' +
									'<span class="hash">#' + cv.hashtag +'</span>' +  
									'<a href="#">Leerlo</a>' + 
									'<p>' + cv.description + '</p>' +
								'</div>'+
							'</div>'+
						'</div>');

			$('.modal').show();
 			$('body').append(modal);
  			$('.modal__close').on('click', function(e) {
  				$('.modal').remove();

			});
		});
	});
}