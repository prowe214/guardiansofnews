$( document ).ready(function() {
 $.getJSON('https://www.reddit.com/r/conspiracy/.json').done(function(fake){
   for (var i = 0; i < 3; i++) {
     var $body = $('body');
     var $p = $('<p></p>');
     var $img = $('<img src=""/>');
     var $image = 'http://static.srcdn.com/wp-content/uploads/Guardians-of-the-Galaxy-End-Credits-Scene-Explained.jpg';
    var $title = fake.data.children[i].data.title;
    console.log(fake.data.children[i].data);
    console.log('here');
    if (fake.data.children[i].data.preview) {
      $image = fake.data.children[i].data.preview.images[0].source.url;
    }
    $p.append($title);
    $img.attr('src', $image);
    $body.append($p);
    $body.append($img);

   }
  });
});


// filler http://static.srcdn.com/wp-content/uploads/Guardians-of-the-Galaxy-End-Credits-Scene-Explained.jpg
