$(document).ready(function () {
  $.getJSON('https://www.reddit.com/r/conspiracy/.json').done(function (fake) {
    for (var i = 0; i < 3; i++) {
      var $div = $('<div class="post"></div>');
      var $body = $('body');
      var $a = $('<a href=""></a>');
      var $p = $('<p></p>');
      var $img = $('<img src=""/>');
      var $image = 'http://static.srcdn.com/wp-content/uploads/Guardians-of-the-Galaxy-End-Credits-Scene-Explained.jpg';
      var $summary = fake.data.children[i].data.selftext;
      var $title = fake.data.children[i].data.title;
      var $url = '#';
      if (fake.data.children[i].data.preview) {
        $image = fake.data.children[i].data.preview.images[0].source.url;
      }
      var short = $summary.substring(0, 400);
      $a.append($title);
      $a.attr('href', $url);
      $img.attr('src', $image);
      $p.append(short);
      $div.append($a);
      $div.append($img);
      $div.append($p);
      $body.append($div);
    }
  });

  $('body').on('mouseenter', '.post', function (e) {
    console.log('moving');
    var maxX = $(window).width() - $(this).width();
    var maxY = $(window).height() - $(this).height();
    $(this).css({
      'left': getRandomInt(0, maxX),
      'top': getRandomInt(0, maxY),
      'position': 'absolute'
    });
  });

  $('body').on('click', 'a', function () {
    alert("don't click on fake news, dork.")
  })

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


});


// filler http://static.srcdn.com/wp-content/uploads/Guardians-of-the-Galaxy-End-Credits-Scene-Explained.jpg
