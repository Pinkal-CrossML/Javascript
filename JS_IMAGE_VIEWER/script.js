// function for image zoom-in or zoom out.
var element = document.querySelector("#one");

function resize(direction) {
  var delta = 100 * direction;
  var positionInfo = element.getBoundingClientRect();
  element.style.width = positionInfo.width + delta + "px";
  element.style.height = positionInfo.height + delta + "px";
}
$("#zoomin").on("click", function () {
  resize(1);
});
$("#zoomout").on("click", function () {
  resize(-1);
});

//  function for next and prev image

var i = 0;
var slider_image = document.querySelector(".slider-img");
var images = ["one.png", "two.jpg", "three.jpg", "four.jpg"];

function setImg(i) {
  return slider_image.setAttribute("src", "images/" + images[i]);
}

$("#prev").on("click", function () {
  setImg;
  if (i <= 0) i = images.length;
  i--;
  document.querySelector("#imselect").value = i;
  return setImg(i);
});

$("#next").on("click", function () {
  setImg;
  if (i >= images.length - 1) i = 1;
  i++;
  document.querySelector("#imselect").value = i;
  return setImg(i);
});

// function for show image by dropdown

function changeImg(i) {
  slider_image.src = "images/" + images[i - 1];
}

function myFunction() {
  var imno = document.querySelector("#imselect").value;
  changeImg(imno);
}

// // function for rotate  image right or left
$(function () {
  var degrees = 0;
  $("#rotbtn").on("click", function () {
    var $cboxrot = $(".slider-img");
    degrees += 90;
    $cboxrot.css("-ms-transform", "rotate(" + degrees + "deg)");
    $cboxrot.css("-webkit-transform", "rotate(" + degrees + "deg)");
    $cboxrot.css("transform", "rotate(" + degrees + "deg)");
  });

  $("#rotbtn1").on("click", function () {
    var $cboxrot = $(".slider-img");
    degrees -= 90;
    $cboxrot.css("-ms-transform", "rotate(" + degrees + "deg)");
    $cboxrot.css("-webkit-transform", "rotate(" + degrees + "deg)");
    $cboxrot.css("transform", "rotate(" + degrees + "deg)");
  });
});
