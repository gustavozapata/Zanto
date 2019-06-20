var move = 0;
$(".open-slideshow").on("click", function() {
  $("#slideshow").css("display", "block");
});
$(".close-slideshow").on("click", function() {
  $("#slideshow").css("display", "none");
});

$(".left").on("click", function() {
  move += 704;
  moveSlideshow();
});

$(".right").on("click", function() {
  move -= 704;
  moveSlideshow();
});

function moveSlideshow() {
  console.log(move);
  if (move < -2700) {
    move = 0;
  } else if (move > 1) {
    move = -2112;
  }
  $(".container-slideshow ul").css("margin-left", move + "px");
}

