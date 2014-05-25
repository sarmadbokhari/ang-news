'use strict';

app.factory('Post', function($resource){
  return $resource('https://social-news-site.firebaseio.com/posts/:id.json');
});
