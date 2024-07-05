/// <reference types="../@types/jquery"/>

$(function(){
    $('.loader').fadeOut(2000,function(){
        $('.loading').fadeOut(500);
        $('body').css({overflow:'auto'});
    });
})

$('#textContent').on('input', function() {
    var maxLength = 150;
    var textArea = $(this);
    var characterEntered = textArea.val().length;
    var characterRemaining = maxLength - characterEntered;

    if (characterRemaining < 0) {
        var trimmedValue = textArea.val().slice(0, maxLength);
        textArea.val(trimmedValue);
        characterRemaining = 0;
    }

    $('#characterCount').text(characterRemaining + ' Characters Remaining');

    if (characterRemaining === 0) {
        $('#characterCount').css('color', '#FF0000');
    } else {
        $('#characterCount').css('color', 'black');
    }
});


let countDownDate = new Date("Jul 28, 2024 15:37:25").getTime();

let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $('#days').text(days + ' d');
  $('#hours').text(hours + ' h');
  $('#minutes').text(minutes + ' m');
  $('#seconds').text(seconds + ' s');


  if (distance < 0) {
    clearInterval(x);
    $('#days').text("EXPIRED");
    $('#hours').text("EXPIRED");
    $('#minutes').text("EXPIRED");
    $('#seconds').text("EXPIRED");
  }
}, 1000);


// singers section



$('.singer').on('click',function (e){
let singerId = $(e.target).attr('id');
$('#'+singerId).next().slideToggle(200);
$('#'+singerId).next().siblings().not('h2').slideUp(200);
})




// scrollanimation

$('.nav-link').on('click',function(e){
    let secId =$(e.target).attr('href');
    let scrollOffset=$(secId).offset().top;
    $('body').animate({scrollTop : scrollOffset},1000)
})

