$(document).ready(function () {
  $(".content-1").show();
  $(".content-2").hide();
  $(".content-3").hide();
  $(".b1").addClass("buttonActive");

  $(".b1").click(function () {
    $(".content-1").show();
    $(".content-2").hide();
    $(".content-3").hide();
    $(".b1").addClass("buttonActive");
    $(".b2").removeClass("buttonActive");
    $(".b3").removeClass("buttonActive");
  });

  $(".b2").click(function () {
    $(".content-1").hide();
    $(".content-2").show();
    $(".content-3").hide();
    $(".b1").removeClass("buttonActive");
    $(".b2").addClass("buttonActive");
    $(".b3").removeClass("buttonActive");
  });

  $(".b3").click(function () {
    $(".content-1").hide();
    $(".content-2").hide();
    $(".content-3").show();
    $(".b1").removeClass("buttonActive");
    $(".b2").removeClass("buttonActive");
    $(".b3").addClass("buttonActive");
  });
});
