for (var i = 0; i < 8000; i ++) {
  console.log(i);
  $("body").append("<div class='circle'></div>");
};

var zindex = 1;

$(".circle").click(function() {
  $(this).css("background-color","red");
  $(this).css("z-index", zindex);
  $(this).mouseenter(function() {
    (".circle").css("background-color", "red");
  });
  zindex++;
});
