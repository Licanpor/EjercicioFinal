$(document).ready( function(){
	$('.js-back').hide();
	$('.js-menu').show();
	printNews();
	

	function printNews(){
		$('.callout-news p').html('NUEVAS RECETAS');

	};
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);


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
function renderActivities(activities) {
	console.log('Activities: ', activities);
	for ( var i = 0; i < activities.length; i++){
		
		if ( activities.length > 0 ){
			console.log("esta entrando");
			$(".wrapper-message").hide();
		}
		_.each(activities, renderActivity);
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log("ENTRE");
	var template = 
	'<a href="#" class="item-activity">' +
		'<span class="attribution">'+
  			'<span class="avatar">'+
				'<img src="<%= userAvatar %>" class="image-avatar">' +
			'</span>'+
			'<span class="meta">'+
				'<span class="author"> <%= userName %> </span> made' +
				'<span class="recipe"><%= recipeName %></span> <%= text %>' +
				'<span class="location">&mdash;<%= place %></span>' +
			'</span>' +
		'</span>' +
		'<div class="bg-image" style="background-image: url(&quot; <%= image %>&quot;);"></div>' +
	'</a>' ;
	var compiled = _.template(template);
	var compilado = compiled(recipe);
	var el = $(compilado);
	$('.list-activities').append(el);

}


