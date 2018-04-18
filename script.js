for (var i = 0; i < 3000; i ++) {
  console.log(i);
  $("body").append("<div class='circle'></div>");
};

// $(".circle").each(function() {
//   $(this).css("left","15px") * 
//   ($(window).width() - 100);
//   $(this).css("top", "15px") *
//   ($(window).width() - 100);
//   console.log(Math.random());
// });


var zindex = 1;

$(".circle").click(function() {
  $(this).css("background-color","red");
  $(this).css("z-index", zindex);
  zindex++;
});