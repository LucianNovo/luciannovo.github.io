var images = [
"assets/imgs/BID.jpg",

"assets/imgs/collagePuzzle/collage_example.png",

"assets/imgs/collagePuzzle/collagePlay.jpg",

"assets/imgs/paperplanes/seats.jpg",

"assets/imgs/paperplanes/paperAirplanePair_recommended.png",

"assets/imgs/paperplanes/airplaneHeave.jpg",

"assets/imgs/Jr_project/InsideOut_TEDx2014_LucianNovosel_0.png",

"assets/imgs/Jr_project/InsideOut_TEDx2014_LucianNovosel_1.png",

"assets/imgs/Jr_project/InsideOut_TEDx2014_LucianNovosel_2.png",

"assets/imgs/Jr_project/InsideOut_TEDx2014_LucianNovosel_3.png",

"assets/imgs/Jr_project/InsideOut_TEDx2014_LucianNovosel_4.png",

"assets/imgs/Jr_project/InsideOut_TEDx2014_LucianNovosel_5.png",

"assets/imgs/Jr_project/quadShoot.jpg",

"assets/imgs/Jr_project/stageTalk.jpg",

"assets/imgs/peoplePuzzles/childGroup.jpg",

"assets/imgs/peoplePuzzles/familyGroup.jpg",

"assets/imgs/peoplePuzzles/group.jpg",

"assets/imgs/peoplePuzzles/peoplePuzzles_fb3.jpg",

"assets/imgs/peoplePuzzles/peoplePuzzles_fb4.jpg",

"assets/imgs/peoplePuzzles/peoplePuzzles_fb5.jpg",

"assets/imgs/stageDesign/chalkboards.jpg",

"assets/imgs/stageDesign/Mauren_Prototype.jpg",

"assets/imgs/stageDesign/protowing.jpg",

"assets/imgs/stageDesign/stage.jpg"];

for(var i=0; i<images.length; i++){
	$('#pictures').append("<img class=\"ui huge image slide\" src=\"" + images[i] + "\" style=\" width: 100%; height:auto;\">");
}