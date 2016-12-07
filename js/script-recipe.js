$(document).ready( function(){
console.log('Este era una gato que estaba cenando cuando se le apago su candil...');
  $('.js-menu').hide();
  $('.js-back').show();

  $('.js-show-recipe').click(function(){
  	$('.page').removeClass('make');
  	$('.js-show-recipe').addClass('active');
  	$('.js-show-make').removeClass('active');

  });

  $('.js-show-make').click(function(){
  	$('.page').addClass('make');
  	$('.js-show-make').addClass('active');
  	$('.js-show-recipe').removeClass('active');

  });

  $('.js-back').click(function(){
  	window.location.href = 'index.html';
  });



 
});

