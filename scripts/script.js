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
    document.querySelector(".fecha").innerHTML = `${month}-${day}-${year}`;
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
});
