jQuery(document).ready(() => {
	$('.container').on('click', '.close__btn', (event) => {
  	$(event.currentTarget).closest('.selector').slideUp(200);
  })
});

jQuery(document).ready(function(){


});