
$(document).ready(function() {
 
	//show the caption when hover images
	$('.image').hover(function(){
		$('.caption',this).slideToggle('slow');
	}, function(){
		$('.caption',this).slideToggle('slow');
    });
	
	//declare 3 var to hold image number, slide show and to stop slide show
	var imageNum;
	var slideShow;
	var stopSlideShow;
	
	//click in any image	
	$('.myPhoto').click(function(event){
		event.preventDefault();		
		
		//declare var to hold the index no.  
		var clickImageNum = $('.myPhoto').index(this);
		imageNum = clickImageNum;		
		
		//check if lightBox exist and declare var to hold the lightBox
		if ($('#lightBox').length > 0) {          	// .lightbox exists
			$('#lightBox').show();
		} else { 									// .lightbox does not exist 
			var lightBox = 	'<div id="lightBox">' + 
								'<p title="close" id="lightBoxClose">X</p>' + 
								'<div class="nav">' +
									'<a class="prev" title="Preview" id="lightBoxPrev"><</a>' +
									'<a class="next" title="Next;" id="lightBoxNext">></a>' +
								'</div>' + 
							'</div>';

			$('body').append(lightBox);				//insert lightbox into page
			
			//put all images in lightBox
			$('#wrapper').find('.myPhoto').each(function() {
				var allImage = $(this).attr('href');
				$('#lightBox').append('<img src="' + allImage + '">');
			});		
		}
		
		//hide all images except the one that is clicked
		$('#lightBox img').hide();
		$('#lightBox img:eq(' + imageNum + ')').show();
		
		//set the slide interval
		var slideShowInterval = setInterval(function(){ slideShow() }, 8000);
	
		slideShow = function () {
			imageNum = imageNum + 1;
				if (imageNum == 9){
					imageNum = 0;
				};
				$('#lightBox img').hide();
				$('#lightBox img:eq(' + imageNum + ')').show();
			}
		
		//to stop the slide interval
		stopSlideShow = function(){
			clearInterval(slideShowInterval);
		};	
	})
	
	//hide lightBox when click "X"
	$('#lightBoxClose').live('click', function() { 
		$('#lightBox').hide();
		stopSlideShow();
	});
	
	//show prev image
	$('#lightBoxPrev').live('click', function() { 
		imageNum = imageNum - 1;
		if (imageNum == -1){
			imageNum = 8;
		}
		$('#lightBox img').hide();
		$('#lightBox img:eq(' + imageNum + ')').show();
	});
		
	//show next image
	$('#lightBoxNext').live('click', function() { 
		imageNum = imageNum + 1;
		if (imageNum == 9){
			imageNum = 0;
		}
		$('#lightBox img').hide();
		$('#lightBox img:eq(' + imageNum + ')').show();
	});
	
});


