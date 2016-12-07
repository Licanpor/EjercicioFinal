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
	_.each(activities, function(){
		renderActivity(activities);
		console.log('actiidad');

		if (activities){	
			if(activities != 0) {
				$('.wrapper-message').hide();
				console.log('escondido');
			}
		}	
	});
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activities) {

	var aItem_acivity = $('<a></a>');
	aItem_acivity.attr('href','#');
	aItem_acivity.addClass('item-activity');

		var sAttribution_activity = $('<span></span>');
		sAttribution_activity.addClass('attribution');

			var sAvatar_activity = $('<span></span>');
			sAvatar_activity.addClass('avatar');

				var imgItem_activity = $('<img />');
				imgItem_activity.addClass('image-avatar');
				imgItem_activity.attr('src', activities.userAvatar);

			var sMeta_activity = $('<span></span>');
			sMeta_activity.addClass('meta');

				var sAuthor_activity = $('<span></span>');
				sAuthor_activity.addClass('author');
				sAuthor_activity.text(activities.username);

				var sRecipe_activity = $('<span></span>');
				sRecipe_activity.addClass('recipe');
				sRecipe_activity.text(activities.recipeName);

				var sLocation_activity = $('<span></span>');
				sLocation_activity.text('&mdash;' + activities.place);

		var divItem_activities = $('<div></div>');
		divItem_activities.addClass('bg-image');
		divItem_activities.css('background-image', 'url(' + activities.image + ')');

	/*	sMeta_activity.append(sAuthor_activity);
		sMeta_activity.append(sRecipe_activity);
		sMeta_activity.append(sLocation_activity);

		sAvatar_activity.append(imgItem_activity);

		sAttribution_activity.append(sAvatar_activity);
		sAttribution_activity.append(sMeta_activity);

		aItem_acivity.append(sAttribution_activity);
		aItem_acivity.append(divItem_activities);

		$('.list-activities').append(aItem_acivity);
*/
}


