$(document).ready(function() {
  if ($(window).width() <= 991) {
    $("#hamburger-icon").on("click", function() {
      $("#hamburger-menu").toggle(250);
    });
  } else {
    //Creates About on Click
    $("#overlay-gold").on("click", function() {
      $("#overlay-gold").animate({
        width: "100%"
      });
      $("#overlay-gold").css("background-color", "rgba(235, 215, 0, .5)");
      $("#overlay-black").animate({
        width: "0",
        left: "100%"
      });

      $("#overlay-gold").attr("id", "gold-full");
      $("#overlay-black").css("display", "none");
      $("#about-page").animate({
        left: "0%"
      });
      $("#hamburger-icon").fadeIn(1000);
    });
    //Links from Gallery to About page
    $("#about-link").on("click", function() {
      $("#overlay-gold").attr("id", "gold-full");
      $("#gold-full").css({
        "background-color": "rgba(235, 215, 0, .5)",
        display: "block"
      });
      $("#gold-full").animate({
        width: "100%",
        left: "0%"
      });

      $("#black-full").animate({
        width: "0",
        left: "100%"
      });

      $("#black-full").css("display", "none");
      $("#gallery-page").animate({
        right: "-100%"
      });
      $("#about-page").animate({
        left: "0%"
      });

      $("#hamburger-menu").fadeIn(1000);
    });

    //Creates Gallery on Click
    $("#overlay-black").on("click", function() {
      $("#overlay-gold").animate({
        left: "-100%"
      });
      $("#overlay-black").animate({
        width: "100%",
        left: "0%"
      });

      $("#hamburger-menu").fadeIn(1000);

      $("#overlay-black").attr("id", "black-full");
      $("#overlay-gold").css("display", "none");
      $("#gallery").animate({
        left: "25%"
      });
      $("#gallery-page").animate({
        right: "0"
      });
      $("#gallery-page").css("display", "block");
    });

    //Links from About page to Gallery page

    $("#gallery-link").on("click", function() {
      $("#overlay-black").attr("id", "black-full");

      $("#gold-full").animate({
        left: "-100%"
      });
      $("#black-full").animate({
        width: "100%",
        left: "0%"
      });
      $("#gallery-page").animate({
        right: "0"
      });
      $("#gallery-page").css("display", "block");

      $("#hamburger-menu").fadeIn(1000);

      $("#gold-full").css("display", "none");
      $("#black-full").css("display", "block");
      $("#gallery").animate({
        left: "25%"
      });
      $("#gallery-page").animate({
        right: "0"
      });
      $("#about-page").animate({
        left: "-100%"
      });
    });

    $("#hamburger-icon").on("click", function() {
      $("#hamburger-menu").toggle(250);
    });

    $(".main-menu-link").on("click", function() {
      $("#hamburger-menu").css("display", "none");
    });
  }

  $("#landing-link").click(function() {
    location.reload();
  });
});
