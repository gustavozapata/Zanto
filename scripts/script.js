// LOAD COMPONENTS
$(".slideshow").load("./components/slideshow/slideshow.html");
$(".slideshow2").load("./components/slideshow2/slideshow.html");

$(document).ready(function() {
  function dateNow() {
    const d = new Date();
    const day = d.getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    // document.querySelector(".fecha").innerHTML = `${month}-${day}-${year}`;
  }

  function currentTime() {
    //no esta mal el codigo, lo unico es que cada vez que llama
    //la funcion crea un objeto new Date()
    //TODO: intenta mejorarlo
    const h = new Date();
    const hours = h.getHours();
    const mins = h.getMinutes();
    const secs = h.getSeconds();
    document.querySelector(".hora").innerHTML = `${hours}:${mins}:${secs}`;
  }

  dateNow();
  // setInterval(currentTime, 1000);

  // SLIDESHOW 1.0
  $("#btnslide1").on("click", function() {
    $(".slideshow").css("display", "block");
  });
  //SLIDESHOW 2.0
  $("#btnslide2").on("click", function() {
    $(".slideshow2").css("display", "block");
  });

  //DISCOVER MORE
  $(".discover-more").on("click", function() {
    $("html,body").animate(
      {
        scrollTop: $(".section1 h2").offset().top - 40
      },
      "slow"
    );
  });

  //HORIZONTAL SLIDER
  $("#izquierda").on("click", function() {
    $(".slider").css("margin-left", "0px");
  });
  $("#derecha").on("click", function() {
    $(".slider").css("margin-left", "-943px");
  });

  //EXPAND PRODUCT IMAGE
  $(".product span").on("click", function() {
    $(".bg").css("display", "block");
    $(this).addClass("product-open");
  });
  $(".bg").on("click", function() {
    $(".bg").css("display", "none");
    $(".product span").removeClass("product-open");
  });

  //FILTER PRODUCTS
  $(".filter p").on("click", function(e) {
    if (e.target.id == "hombres") {
      $(".product").css("display", "none");
      $(".hombres").css("display", "inline-block");
    } else if (e.target.id == "mujeres") {
      $(".product").css("display", "none");
      $(".mujeres").css("display", "inline-block");
    } else if (e.target.id == "camisetas") {
      $(".product").css("display", "none");
      $(".camisetas").css("display", "inline-block");
    } else if (e.target.id == "polos") {
      $(".product").css("display", "none");
      $(".polos").css("display", "inline-block");
    } else {
      $(".product").css("display", "inline-block");
    }
  });
});
