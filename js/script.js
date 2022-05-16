$(window).scroll(function () {
  let scroll = $(this).scrollTop();
  console.log(scroll);
  if (scroll >= 80) {
    $(".first-row").addClass("slider1");
    $(".second-row").addClass("slider2");
  } else {
    $(".first-row").removeClass("slider1");
    $(".second-row").removeClass("slider2");
  }
});
$(document).ready(function () {
  lightbox.option({
    resizeDuration: 400,
    wrapAround: true,
  });
});

/* $(document).ready(function () {
  $("#william-button").click(function () {
    console.log("Hello world!");
    $(".william-b1").addClass("opacity");
    $(".william-b2").addClass("opacity");
    $(".jane-b1").removeClass("opacity");
    $(".jane-b2").removeClass("opacity");
    $(".charles-b1").removeClass("opacity");
    $(".charles-b2").removeClass("opacity");
    $(".victor-b1").removeClass("opacity");
    $(".victor-b2").removeClass("opacity");
  });
  $("#jane-button").click(function () {
    console.log("Hello world!");
    $(".jane-b1").addClass("opacity");
    $(".jane-b2").addClass("opacity");
    $(".william-b1").removeClass("opacity");
    $(".william-b2").removeClass("opacity");
    $(".charles-b1").removeClass("opacity");
    $(".charles-b2").removeClass("opacity");
    $(".victor-b1").removeClass("opacity");
    $(".victor-b2").removeClass("opacity");
  });
  $("#charles-button").click(function () {
    console.log("Hello world!");
    $(".charles-b1").addClass("opacity");
    $(".charles-b2").addClass("opacity");
    $(".william-b1").removeClass("opacity");
    $(".william-b2").removeClass("opacity");
    $(".jane-b1").removeClass("opacity");
    $(".jane-b2").removeClass("opacity");
    $(".victor-b1").removeClass("opacity");
    $(".victor-b2").removeClass("opacity");
  });
  $("#victor-button").click(function () {
    console.log("Hello world!");
    $(".victor-b1").addClass("opacity");
    $(".victor-b2").addClass("opacity");
    $(".william-b1").removeClass("opacity");
    $(".william-b2").removeClass("opacity");
    $(".charles-b1").removeClass("opacity");
    $(".charles-b2").removeClass("opacity");
    $(".jane-b1").removeClass("opacity");
    $(".jane-b2").removeClass("opacity");
  });
}); */

$(".writers-accordion").click(function (event) {
  console.log(event.target.id.split("-"));
  if (event.target.id.split("-")[0] === "button") {
    console.log("hello");
    $("#book-1").attr(
      "src",
      "./img/writers/" + event.target.id.split("-")[1] + "-book1.jpg"
    );
    $("#book-2").attr(
      "src",
      "./img/writers/" + event.target.id.split("-")[1] + "-book2.jpg"
    );
  }
});
