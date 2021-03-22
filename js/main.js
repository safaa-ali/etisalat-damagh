function openCity(cityName) {
  let i;
  var packages = document.getElementsByClassName("packages");
  for (i = 0; i < packages.length; i++) {
    packages[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}
// to active tab
$(".tab").click(function () {
  $(".tab").removeClass("active");
  $(this).addClass("active");
});
// to active input
$(".data-input").click(function () {
  $(".data-input").removeClass("activeInput");
  $(this).addClass("activeInput");
});
$(".voice-input").click(function () {
  $(".voice-input").removeClass("activeInput");
  $(this).addClass("activeInput");
});
// to active conditions
$(".conditions .conditions-item h6").click(function () {
  $(".conditions .conditions-item h6").css("color", "#fff");
  $(this).addClass("activeConditions").css("color", "#239399");
});
// collapse navbar
$(function () {
  var ulLi = $(".nav-item > li"),
    fa = $("#icon-collapse");

  $(".nav-item").append("<ol></ol>");

  $("nav").each(function () {
    for (var i = 0; i <= ulLi.length - 3; i++) {
      $("nav ul > ol").append("<li>" + i + "</li>");
      $("nav ul > ol > li")
        .eq(i)
        .html(ulLi.eq(i + 1).html());
    }
  });

  $("#icon-collapse").on("click", function () {
    $(".navbar-collapse").slideToggle(500);
  });
});

