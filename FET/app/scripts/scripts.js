/* Author: Leigh A. Laguisma 
	
*/

$(document).ready(function(){
	// - apply dynamic tabindex
	$('.navigation li > a').addClass('tab-index');
	$('.tab-index').each(function(index){
		$(this).attr('tabindex',index);
		});
	
	//Define layout by setting classification
	function resetDimensions(){
		var vp = $(window).width();
		var allmodes = 'desktop wtablet tablet wphone mobile';
		if (vp>1024){
			$('body').removeClass(allmodes);
			$('body').addClass('desktop');
				console.log('desktop mode');
			}
		if (vp<1024){
			$('body').removeClass(allmodes);
			$('body').addClass('wtablet');
				console.log('wide tablet');
			}
		if (vp<768){
			$('body').removeClass(allmodes);
			$('body').addClass('tablet');
				console.log('tablet');
			}
		if (vp<480){
			$('body').removeClass(allmodes);
			$('body').addClass('wphone');
				console.log('wide phone');
			}
		if (vp<320){
			$('body').removeClass(allmodes);
			$('body').addClass('mobile');
				console.log('mobile');
			}
			console.log('resetDimensions function triggered');
		}resetDimensions();

	//trigger function on resize
	window.onresize = function(){
		//setTimeout(function(){
			resetDimensions();
			//if in debug mode refresh data
			//if(cds){refreshInfo();}
		//},2000);
		console.log('window.onresize detected');
	}

	//show hide
	$('.trigger').toggle(function(){
		$('div.info').css('height','100px').removeClass('hide');
	},function(){
		$('div.info').css('height','0px').addClass('hide');
	});
});
