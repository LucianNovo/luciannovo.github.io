	function populateFontList(fontArr){
		console.log("populateFontList start");
		var allFontsCounter = 0;
		var regularFontsCounter = 0;
		var allFontsHTML = '<ul>';

		console.log("variable declaration end");

		for (var key in fontArr)
		{
			console.log("start loop");
			var fontName = fontArr[key];
			console.log(fontName);
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
		}
		
		allFontsCounter++;
		console.log("end loop");
		}
	
		regularFontsHTML += '</ul>';
		allFontsHTML += '</ul>';
		allFontsHTML = allFontsCounter+' fonts altogether:'+allFontsHTML;
		regularFontsHTML = regularFontsCounter+' "regular" fonts:'+regularFontsHTML;
		
		document.getElementById('fontList').innerHTML = allFontsHTML;
		document.getElementById('regularFontList').innerHTML = regularFontsHTML;
		initWorld();
		console.log("populateFontList end");
	}
-->

var fontList = [];
var bodyFonts = [];
var titleFonts = [];
var exampleText = "An Example Sentence";
var DELAY = 700, clicks = 0, timer = null;


function initWorld(){
	console.log("initworld start");
	//populate fonts
	for (var i = 0; i < 20; i++) {
		fontList.push(
	    //replace with flash relevant variable
	    document.getElementById("regularFontList").children[0].children[i].innerText
	    );

		var newTileText = $(document.createElement('div'));
		newTileText.addClass('text-tile-text');
		newTileText.text(exampleText);
		newTileText.css({'font-family': fontList[i]});

		var newTileTypefaceName = $(document.createElement('div'));
		newTileTypefaceName.addClass('text-tile-typeface-name');
		newTileTypefaceName.text(fontList[i]);

		var newTile = $(document.createElement('div'));
		newTile.addClass('text-tile');

		newTile.append(newTileText).append(newTileTypefaceName);
		$("#display-container").append(newTile);
	}
};

$(function(){

	$(".text-tile").on("click", function(e){

	        clicks++;  //count clicks
	        let typefacenametemp = $(this).find('div.text-tile-typeface-name').text();

	        if(clicks === 1) {

	        	timer = setTimeout(function() {
	        		addTitleFont(typefacenametemp);
	                clicks = 0;             //after action performed, reset counter

	            }, DELAY);

	        } else {

	            clearTimeout(timer);    //prevent single-click action
	            addBodyFont(typefacenametemp);  //perform double-click action
	            clicks = 0;             //after action performed, reset counter
	        }

	    })
	.on("dblclick", function(e){
	        e.preventDefault();  //cancel system double-click event
	    });

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
	$("textarea").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia risus metus, id ornare elit porttitor suscipit. Fusce pretium scelerisque felis non imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula felis eget dolor vehicula interdum.");
	$(".text-tile-text").text($("textarea").text());
	$(".text-tile-text").css("font-size", "1em");
}

function titleText(){
	$("textarea").text("Lorem ipsum dolor sit amet.");
	$(".text-tile-text").text($("textarea").text());
	$(".text-tile-text").css("font-size", "2em");
}

$("textarea").on('input propertychange paste', function() {
	$(".text-tile-text").text($("textarea").text());
});

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
