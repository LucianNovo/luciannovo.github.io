var fontList = [];
var bodyFonts = [];
var titleFonts = [];
var fontArrCopy = [];
var messageState = 0;
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
	switch messageState:
		case 1:
			$("#walkthrough-text").text("Now click fonts which you would like to use for title fonts.");
		case 2:
			$("#walkthrough-text").text("When you’re ready for body fonts, click body typefaces.");
		case 3:
			$("#walkthrough-text").text("Now you can try out some pairs. Go ahead. Press the ‘pair’ button.");
		case 4:
			$("#walkthrough-text").text("Try out some pairs.  There isn’t anything more to explain. Chill.");
		case 5:
			$("#walkthrough-text").remove();
}

function initWorld(){
	//populate fonts
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
		$("#display-container").append(newTile);
		progressMessages();
	}
};

$(document).on("click", ".text-tile-text", function(e){
	if($(".title-typeface-list").hasClass("active")){
		addTitleFont($(this).find('div.text-tile-typeface-name').text())
	}
	else{
		addBodyFont($(this).find('div.text-tile-typeface-name').text())
	}
});

function addBodyFont(newFont){
	bodyFonts.push(newFont);

	var typefaceListItem = $(document.createElement('div'));
	typefaceListItem.addClass('typeface-list-item');

	var typefaceListItemName = $(document.createElement('div'));
	typefaceListItemName.addClass('typeface-list-item-name');
	typefaceListItemName.text(newFont);

	var typefaceListItemClear = $(document.createElement('div'));
	typefaceListItemClear.addClass('typeface-list-item-clear');
	typefaceListItemClear.text("x");

	typefaceListItem.append(typefaceListItemName).append(typefaceListItemClear);
	$("#body-typeface-list").append(typefaceListItem);

	console.log(newFont + ' added body font');
}

function addTitleFont(newFont){
	titleFonts.push(newFont);

	var typefaceListItem = $(document.createElement('div'));
	typefaceListItem.addClass('typeface-list-item');

	var typefaceListItemName = $(document.createElement('div'));
	typefaceListItemName.addClass('typeface-list-item-name');
	typefaceListItemName.text(newFont);

	var typefaceListItemClear = $(document.createElement('div'));
	typefaceListItemClear.addClass('typeface-list-item-clear');
	typefaceListItemClear.text("x");

	typefaceListItem.append(typefaceListItemName).append(typefaceListItemClear);
	$("#title-typeface-list").append(typefaceListItem);

	console.log(newFont + ' added body font');
}

function paragraphText(){
	$(".text-tile-text").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia risus metus, id ornare elit porttitor suscipit. Fusce pretium scelerisque felis non imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula felis eget dolor vehicula interdum.");
	$(".text-tile-text").css("font-size", "1em");
}

function titleText(){
	$(".text-tile-text").text("Lorem ipsum dolor sit amet.");
	$(".text-tile-text").css("font-size", "2em");
}

// $("textarea").on('input propertychange paste', function() {
// 	$(".text-tile-text").text($("textarea").text());
//     $(this).height("5px");
//     $(this).height($(this).prop("scrollHeight")+"px");
// });

// editing selected fonts
// clear a single font
$(document).on("click", ".typeface-list-item-clear", function(e){
	$(this).parent().remove();
}); 

//clear entire lists
$("#body-typeface-list").find(".typeface-list-clear").on("click", function(e){
	$("#body-typeface-list").find(".typeface-list-item").remove();
}); 

$("#title-typeface-list").find(".typeface-list-clear").on("click", function(e){
	$("#title-typeface-list").find(".typeface-list-item").remove();
}); 

// selecting editing modes
$(".navigation").on("click", function(e){
	if($(this).hasClass("active")){
		return
	}
	else{
		$("#select.navigation").toggleClass("active");
		$("#pair.navigation ").toggleClass("active");
	}
});
