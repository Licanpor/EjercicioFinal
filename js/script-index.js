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
		$(recipesArray).each(function(index, recipe){
		if(recipesArray[index].hasOwnProperty('highlighted') && recipesArray[index]['highlighted'] == true) {
			renderRecipe(index, recipe);

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
	if (!recipe) return;
	console.log('Voy a pintar la receta: ', recipe);

	var list = $('.list-recipes');
	var aItem = $('<a class="item-recipe" href="#"></a>');
	var span1 = $('<span class="attribution"></span>');
	var span2 = $('<span class="title-recipe"></span>').text(recipe.title);

	var span3 = $('<span class="metadata-recipe"></span');
	var span4 = $('<span class="author-recipe"></span>')
	span4.text(recipe.source.name);

	var span5 = $('<span class="bookmarks-recipe"></span').attr(recipe.cooktime);
	var span6 = $('<span class="icon-bookmark"></span>');
	var imgItem = $('<img/>')/*.attr('src', source.url);*/
	
	list.prepend(aItem);
	aItem.prepend(span1);
	aItem.append(imgItem);
	span1.prepend(span2);
	span1.append(span3);
	span3.prepend(span4);
	span3.append(span5);
	span5.prepend(span6);
	

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


