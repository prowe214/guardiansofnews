$( document ).ready(function() {
 $.getJSON('https://www.reddit.com/r/conspiracy/.json').done(function(fake){
   for (var i = 0; i < 3; i++) {
     var $div = $('<div class="post"></div>');
     var $body = $('body');
     var $a = $('<a href=""></a>');
     var $img = $('<img src=""/>');
     var $image = 'http://static.srcdn.com/wp-content/uploads/Guardians-of-the-Galaxy-End-Credits-Scene-Explained.jpg';
    var $title = fake.data.children[i].data.title;
    var $url = 'https://www.reddit.com/' + fake.data.children[i].data.permalink;
    if (fake.data.children[i].data.preview) {
      $image = fake.data.children[i].data.preview.images[0].source.url;
    }
    $a.append($title);
    $a.attr('href', $url);
    $img.attr('src', $image);
    $div.append($a);
    $div.append($img);
    $body.append($div);
   }
  });
});


// filler http://static.srcdn.com/wp-content/uploads/Guardians-of-the-Galaxy-End-Credits-Scene-Explained.jpg
