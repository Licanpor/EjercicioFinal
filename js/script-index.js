$(document).ready( function(){
	$('.js-back').hide();
	$('.js-menu').show();
printNews();
	function printNews(){
		$('.callout-news p').html('NUEVAS RECETAS');

	};
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
		$(recipesArray).each(function(index){
		if(recipesArray[index].hasOwnProperty('highlighted') && recipesArray[index]['highlighted'] == true) {
			renderRecipe(index);

		}
	});
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	var aItem = $('<a class="item-recipe" href="#"></a>');
	var span1 = $('<span class="attribution"> </span>');
	var span2 = $('<span class="title-recipe">' + recipe.title + '</span>');
	var span3 = $('<span class="metadata-recipe"></span');
	var span4 = $('<span class="author-recipe">' + recipe.source.name + '</span>');
	var span5 = $('<span class="bookmarks-recipe"></span');
	var span6 = $('<span class="icon-bookmark"></span>');
	var imgItem = $(' <img/>').attr('src', recipe.source.url);

	('.list-recipes').html(aItem);
	aItem.html(span1);
	span1.html(span1);
	span1.html(span3);
	span3.html(span4);
	span3.html(span5);
	span5.html(span6);
	aItem.html(imgItem);

}


/** Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


