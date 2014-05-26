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
  	$('#pictures').append(" <a href=\"#" +  i + "\"> <img " + "id=\"" + i + "\" class=\"ui huge image slide\" src=\"" + images[i] + "\" style=\" width: 100%; height:auto;\"></\\a>");
  }

  var $nonScrollable = $("#text");

  function disableManager(length){
      $nonScrollable.disablescroll();
      setTimeout($nonScrollable.enablescroll,length);
  }

  $("#text").bind('mousewheel', function(event) {
      if (event.originalEvent.wheelDelta >= 0) {
          scrollArticleUp(1500);
          console.log('Scroll up');
      }
      else {
          scrollArticleDown(1500);
          console.log('Scroll down');
      }
  });

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }

  function scrollArticleUp(length){
    if($('.article.active').next().length > 0){
       //temporarily disable the scroll
       disableManager(length);
       //update current active article
       $(".article.active").next().addClass("active");
       $(".active").eq(0).removeClass("active");
       //get current article
       //scroll to next article
       $("#text").scrollTo($(".active"),length);
       $("#pictures").scrollTo($("#1"),length);
    }
  }

  function scrollArticleDown(length){
      if($('.article.active').prev().length > 0){
         //temporarily disable the scroll
         disableManager(length); 
         // upscroll code
         $(".article.active").prev().addClass("active");
         $(".active").eq(1).removeClass("active");
         //get current article
         //scroll to next article
         $("#text").scrollTo($(".active"),length);
         $("#pictures").scrollTo($("#14"),length);
      }
  }