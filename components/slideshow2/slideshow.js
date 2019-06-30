$(document).ready(function() {
  var move = 0;
  $(".open-slideshow").on("click", function() {
    // $("#slideshow").css("display", "block");
  });
  $(".close-slideshow").on("click", function() {
    $(".slideshow2").css("display", "none");
  });

  $(".left").on("click", function() {
    move += 604;
    moveSlideshow();
  });

  $(".right").on("click", function() {
    move -= 604;
    moveSlideshow();
  });

  function moveSlideshow() {
    console.log(move);
    if (move < -2400) {
      move = 0;
    } else if (move > 1) {
      move = -1812;
    }
    $(".container-slideshow ul").css("margin-left", move + "px");
  }
});
