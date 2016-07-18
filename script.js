$(document).ready(function() {
    // append an img tag with our picture of Ryu
    // url: http://i.imgur.com/90Mmdcm.png
    $('#ryu').append('<img src="http://i.imgur.com/90Mmdcm.png">');

    // change the img src on hover to the animated gif of Ryu
    // url: http://i.imgur.com/nTj3Fxx.gif
    // when the user 'unhovers' change back to static Ryu
    $('#ryu > img').hover(function() {
      this.src = 'http://i.imgur.com/nTj3Fxx.gif';
    }, function() {
      this.src = 'http://i.imgur.com/90Mmdcm.png';
    })

    // when a user clicks, change Ryu's stance
    // url: http://i.imgur.com/Rfj0a80.png
    $('#ryu > img').mousedown(function() {
      this.src = 'http://i.imgur.com/Rfj0a80.png';
    })

    // add the Hadouken!
    // url: http://i.imgur.com/oTyQRvX.gif
    $('#ryu').mousedown(function() {
      $('#ryu').append('<img class="demo-hadouken" src="http://i.imgur.com/oTyQRvX.gif">');

    })

    // animate that Hadouken
    $('#ryu').mousedown(function() {
      $('.demo-hadouken').css('position', 'absolute');
      $('.demo-hadouken').animate({left: '100vw'}, 1000, function() {this.remove()});
    })

    // let Ryu relax
    // url: http://i.imgur.com/90Mmdcm.png
    $('#ryu > img').mouseup(function() {
      this.src = 'http://i.imgur.com/90Mmdcm.png';
    })

    $('#ryu').mousedown(function() {
      this.append('<audio src="https://www.youtube.com/watch?v=49jKoMbJyEo" autoplay>')
    })
});
