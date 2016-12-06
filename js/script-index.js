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
	_.each(recipesArray, function(recipe){
		
		if (recipe){	
			if(recipe.highlighted) {
				renderRecipe(recipe);
			}
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

	var aItem = $('<a></a>');
	aItem.addClass('item-recipe');

	var sAttribution = $('<span></span>');
	sAttribution.addClass('attribution');

	var sTitle = $('<span></span>');
	sTitle.addClass('title-recipe');
	sTitle.text(recipe.title);

	var sMetadata = $('<span></span>');
	sMetadata.addClass('metadata-recipe');

	var sAuthor = $('<span></span>');
	sAuthor.addClass('author-recipe');
	sAuthor.text(recipe.name);

	var sBookmarks = $('<span></span>');
	sBookmarks.addClass('bookmarks-recipe');

	var sIcon = $('<span></span>');
	sIcon.addClass('icon-bookmark');

	sBookmarks.append(sIcon);

	sMetadata.append(sBookmarks);
	sMetadata.append(sAuthor);

	sAttribution.append(sTitle);
	sAttribution.append(sMetadata);

	aItem.append(sAttribution);

	var url = 'img/recipes/320x350/' + recipe.name + '.jpg';
	var img = $('<img />');
	img.attr('src', url);

	aItem.append(img);

	$('.list-recipes').append(aItem);

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


