$(document).ready(function () {
  // планое перемещение
  $("#nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate(
      {
        scrollTop: top,
      },
      1000
    );
  });

  // menu

  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });
  $(".menu__item-link").on("click", function (event) {
    event.preventDefault();

    $("#nav-toggle").toggleClass("active");
    $("#nav").toggleClass("active");
  });
});
