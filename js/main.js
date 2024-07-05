/// <reference types="../@types/jquery"/>

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
// });

// let aboutOffset = $("#about").offset().top; // space 600

// $(window).on("scroll", function () {
//   let topOffset = $(window).scrollTop();

//   if (topOffset > aboutOffset - 70) {
//     $(".navbar").css({ backgroundColor: "green" });
//   } else {
//     $(".navbar").css({ backgroundColor: "transparent" });
//   }
// });

// $(".nav-link").on("click", function (e) {
//   let sectionId = $(e.target).attr("href"); // #about, #services

//   let aboutOffset = $(sectionId).offset().top;

//   $("body").animate({ scrollTop: aboutOffset }, 1000);

//   $(".nav-link").removeClass("active");
//   $(e.target).addClass("active");
// });

////////////////////////////////////////////////////////////////////////

// window.addEventListener("load", function () {
//   console.log("hello");
// });

// $(window).ready(function(){})

// $(function () {
//   $(".spinner").fadeOut(2000, function () {
//     $(".loading").slideUp(2000, function () {
//       $("body").css({ overflow: "auto" });
//       $(".loading").remove()
//     });
//   });
// });

// let mySpans = $(".box-color");

// mySpans.eq(0).css("backgroundColor", "red");
// mySpans.eq(1).css("backgroundColor", "green");
// mySpans.eq(2).css("backgroundColor", "tomato");
// mySpans.eq(3).css("backgroundColor", "#09c");
// mySpans.eq(4).css("backgroundColor", "#ff206e");

// mySpans.on("click", function (e) {
//   let color = $(e.target).css("backgroundColor");

//   $("h2, p, i").css({ cssText: `color: ${color} !important` });
// });

// ////////////////////////////////////////////////////////////////////

// $(".fa-gear").on("click", function () {
//   $(".side").animate({ width: "toggle", paddingInline: "toggle" }, 2000);
// });
