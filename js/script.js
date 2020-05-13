jQuery(document).ready(() => {
	$('.container').on('click', '.close__btn', (event) => {
  	$(event.currentTarget).closest('.selector').hide(500).addClass('hiden');
  })
});

jQuery(document).ready(function(){


});