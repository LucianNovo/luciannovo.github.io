var fontList = [];
var bodyFonts = [];
var titleFonts = [];
var fontArrCopy = [];
var messageState = 0;
var firstBodyAdd = 1;
var firstTitleAdd = 1;
var exampleText = "An Example Sentence";
var DELAY = 700, clicks = 0, timer = null;

function populateFontList(fontArr){
	console.log("populateFontList start");
	var allFontsCounter = 0;
	var regularFontsCounter = 0;
	var allFontsHTML = '<ul>';
	var regularFontsHTML = allFontsHTML;

	for (var key in fontArr)
	{
		var fontName = fontArr[key];
	// trim
	fontName = fontName.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	
	if (fontName.match(/[_\-\s]Italic$/)
		|| fontName.match(/[_\-\s](Demi)?[Bb]old$/)
		|| fontName.match(/[_\-\s]Medium$/)
		|| fontName.match(/[_\-\s](Ultra)?[Ll]ight$/)
		|| fontName.match(/[_\-\s]Condensed$/)
		)
		allFontsHTML += '<li style="color:#aaa;">'+fontName+'</li>';
	else
	{
		allFontsHTML += '<li>'+fontName+'</li>';
		fontName = fontName.replace(/\s*Regular$/, '');
		regularFontsHTML += '<li>'+fontName+'</li>';
		regularFontsCounter++;
		fontArrCopy.push(fontName);
	}
	
	allFontsCounter++;
	}

	regularFontsHTML += '</ul>';
	allFontsHTML += '</ul>';
	// allFontsHTML = allFontsCounter+' fonts altogether:'+allFontsHTML;
	// regularFontsHTML = regularFontsCounter+' "regular" fonts:'+regularFontsHTML;
	
	// document.getElementById('fontList').innerHTML = allFontsHTML;
	// document.getElementById('regularFontList').innerHTML = regularFontsHTML;
	initWorld();
}
-->

function progressMessages(){
	messageState++;
	switch (messageState){
		case 1:
			$("#walkthrough-text").text("Now click fonts which you would like to use for title fonts.");
			break;
		case 2:
			$("#walkthrough-text").text("When you’re ready for body fonts, click body typefaces.");
			break;
		case 3:
			$("#walkthrough-text").text("Now you can try out some pairs. Go ahead. Press the ‘pair’ button.");
			break;
		case 4:
			$("#walkthrough-text").text("Try out some pairs.  There isn’t anything more to explain. Chill.");
			break;
		case 5:
			$("#walkthrough-text").remove();
	}
}


function initWorld(){
	for (let i=0; i<fontArrCopy.length;i++){
		var newTileText = $(document.createElement('div'));
		newTileText.addClass('text-tile-text');
		newTileText.text(exampleText);
		newTileText.css({'font-family': fontArrCopy[i]});

		var newTileTypefaceName = $(document.createElement('div'));
		newTileTypefaceName.addClass('text-tile-typeface-name');
		newTileTypefaceName.text(fontArrCopy[i]);

		var newTile = $(document.createElement('div'));
		newTile.addClass('text-tile');

		newTile.append(newTileText).append(newTileTypefaceName);
		$("#type-tile-container").append(newTile);
	}
	progressMessages();
};

//populate typefaces into relevant lists in dialogue
$(document).on("click", ".text-tile", function(e){
	var typename = $(this).find('div.text-tile-typeface-name').text();
	if($("#title-list").hasClass("active") && (jQuery.inArray(typename, titleFonts) === -1)){
		addTitleFont(typename);
	}
	else if($("#body-list").hasClass("active") && (jQuery.inArray(typename, bodyFonts) === -1)){
		addBodyFont(typename);
	}
});

//change which list is active
$(document).on("click", "#body-list-name", function(e){
	if(!$("#body-list").hasClass("active")){
		$("#body-list").toggleClass("active");
		$("#title-list").toggleClass("active");
		console.log("body list active");
		bodyText();
	}
});

$(document).on("click", "#title-list-name", function(e){
	if(!$("#title-list").hasClass("active")){
		$("#title-list").toggleClass("active");
		$("#body-list").toggleClass("active");
		console.log("title list active");
		titleText();
	}
});

function bodyText(){
	$(".text-tile-text").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia risus metus, id ornare elit porttitor suscipit. Fusce pretium scelerisque felis non imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula felis eget dolor vehicula interdum.");
	$(".text-tile-text").css("font-size", "1em");
}

function titleText(){
	$(".text-tile-text").text("Lorem ipsum dolor sit amet.");
	$(".text-tile-text").css("font-size", "2em");
}


function addBodyFont(newFont){
	bodyFonts.push(newFont);

	var typefaceListItem = $(document.createElement('div'));
	typefaceListItem.addClass('body-list-item');

	var typefaceListItemName = $(document.createElement('div'));
	typefaceListItemName.addClass('body-list-item-name');
	typefaceListItemName.text(newFont);

	var typefaceListItemClear = $(document.createElement('div'));
	typefaceListItemClear.addClass('body-list-item-clear');
	typefaceListItemClear.text("x");

	typefaceListItem.append(typefaceListItemName).append(typefaceListItemClear);
	$("#body-list").append(typefaceListItem);

	console.log(newFont + ' added body font');
	if(firstBodyAdd){
		progressMessages();
		firstBodyAdd = 0;
	}
}

function addTitleFont(newFont){
	titleFonts.push(newFont);

	var typefaceListItem = $(document.createElement('div'));
	typefaceListItem.addClass('title-list-item');

	var typefaceListItemName = $(document.createElement('div'));
	typefaceListItemName.addClass('title-list-item-name');
	typefaceListItemName.text(newFont);

	var typefaceListItemClear = $(document.createElement('div'));
	typefaceListItemClear.addClass('title-list-item-clear');
	typefaceListItemClear.text("x");

	typefaceListItem.append(typefaceListItemName).append(typefaceListItemClear);
	$("#title-list").append(typefaceListItem);

	console.log(newFont + ' added title font');
	if(firstTitleAdd){
		progressMessages();
		firstTitleAdd = 0;
	}
}

// clear a single font
$(document).on("click", ".body-list-item-clear", function(e){
	bodyFonts.splice(bodyFonts.indexOf($(this).parent().find(".body-list-item").text()), 1);
	$(this).parent().remove();
}); 
$(document).on("click", ".title-list-item-clear", function(e){
	bodyFonts.splice(bodyFonts.indexOf($(this).parent().find(".title-list-item").text()), 1);
	$(this).parent().remove();
}); 

// clear entire lists
$("#body-list").find(".list-clear").on("click", function(e){
	bodyFonts = [];
	$(".body-list-item").remove();
}); 
$("#title-list").find(".list-clear").on("click", function(e){
	titleFonts = [];
	$(".title-list-item").remove();
}); 


function pairMode(){
	//remove the tile interface, show the example text
	$("#type-tile-container").toggleClass("show")
	$("#example-text-container").toggleClass("show")

	//if there's no selected typeface, autoselect the first one.
	if($(".body-list-item.selected").length===0){
		$(".body-list-item").first().addClass("selected");
		$("#body-example").css("font-family", $(".body-list-item.selected").find(".body-list-item-name").text());
	}
	if($(".title-list-item.selected").length===0){
		$(".title-list-item").first().addClass("selected");
		$("#title-example").css("font-family", $(".title-list-item.selected").find(".title-list-item-name").text());
		$("#subtitle-example").css("font-family", $(".title-list-item.selected").find(".title-list-item-name").text());
	}

	//replace xs with relevant characters
	$(".title-list-item").toggleClass("paired-mode");
	$(".body-list-item").toggleClass("paired-mode");

	//remove ability to clear lists
	$(".list-clear").css("display", "none");
}


// when an item is clicked, make it populate to the example text 
$(document).on("click", ".body-list-item-name", function(e){
	if($(this).parent().hasClass("selected")){
		return
	}
	else{
		$(".body-list-item.selected").toggleClass("selected");
		$(this).parent().toggleClass("selected");
		$("#body-example").css("font-family", $(this).text());
	}
});

// when an item is clicked, make it populate to the example text 
$(document).on("click", ".title-list-item-name", function(e){
	if($(this).parent().hasClass("selected")){
		return
	}
	else{
		$(".title-list-item.selected").toggleClass("selected");
		$(this).parent().toggleClass("selected");
		$("#title-example").css("font-family", $(this).text());
		$("#subtitle-example").css("font-family", $(this).text());
	}
});


function selectMode(){
	$("#type-tile-container").toggleClass("show")
	$("#example-text-container").toggleClass("show")
	//enable ability to clear lists
	$(".list-clear").css("display", "inline");
}


$(document).on("click", "#pair", function(e){
	pairMode();
	$(this).toggleClass("active");
	$("#select").toggleClass("active");
});

$(document).on("click", "#select", function(e){
	pairMode();
	$(this).toggleClass("active");
	$("#pair").toggleClass("active");
});



