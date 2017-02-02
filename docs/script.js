/*$('html').click(function() {
  $(".click-hide").hide()
});*/

//hide image popups
$(".popup-tahoma").hide();

//upon clicking image thumbnail
$(".popup-click-tahoma").click(function() {
  //show popup that is child to thumbnail
  $(".popup-tahoma").show();
  //center image
  positionImage($(".popup-element", this).get()[0]);
});

//upon clicking popup background
$(".popup-background").click(function(e) {
  //hide popup
  $(".popup-tahoma").hide();
  //don't activiate parent thumbnail event
  e.stopPropagation();
});






//hide image popups
$(".popup-lateef").hide();

//upon clicking image thumbnail
$(".popup-click-lateef").click(function() {
  //show popup that is child to thumbnail
  $(".popup-lateef").show();
  //center image
  positionImage($(".popup-element", this).get()[0]);
});

//upon clicking popup background
$(".popup-background").click(function(e) {
  //hide popup
  $(".popup-lateef").hide();
  //don't activiate parent thumbnail event
  e.stopPropagation();
});





//hide image popups
$(".popup-bagnard").hide();

//upon clicking image thumbnail
$(".popup-click-bagnard").click(function() {
  //show popup that is child to thumbnail
  $(".popup-bagnard").show();
  //center image
  positionImage($(".popup-element", this).get()[0]);
});

//upon clicking popup background
$(".popup-background").click(function(e) {
  //hide popup
  $(".popup-bagnard").hide();
  //don't activiate parent thumbnail event
  e.stopPropagation();
});





//hide image popups
$(".popup-pt-mono").hide();

//upon clicking image thumbnail
$(".popup-click-pt-mono").click(function() {
  //show popup that is child to thumbnail
  $(".popup-pt-mono").show();
  //center image
  positionImage($(".popup-element", this).get()[0]);
});

//upon clicking popup background
$(".popup-background").click(function(e) {
  //hide popup
  $(".popup-pt-mono").hide();
  //don't activiate parent thumbnail event
  e.stopPropagation();
});






//hide image popups
$(".popup-league").hide();

//upon clicking image thumbnail
$(".popup-click-league").click(function() {
  //show popup that is child to thumbnail
  $(".popup-league").show();
  //center image
  positionImage($(".popup-element", this).get()[0]);
});

//upon clicking popup background
$(".popup-background").click(function(e) {
  //hide popup
  $(".popup-league").hide();
  //don't activiate parent thumbnail event
  e.stopPropagation();
});



