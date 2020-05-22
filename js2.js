	jQuery(function($) {
		$(document).ready(function() {
		$(".filterUL li").hide();
		$('#filterText').keyup(function(event) {
		   var val = $(this).val();
		   if (val == "") {
		       $('.filterUL li').show();
		   } else {
		       $('.filterUL li').hide();
		       $(".filterUL li:contains('"+val+"')").show();
		   }
		   });
		});
	});