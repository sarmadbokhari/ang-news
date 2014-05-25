'use strict';

app.factory('Post',
  function($firebase, FIREBASE_URL){
    var ref = new Firebase(FIREBASE_URL + 'posts');

    var posts = $firebase(ref);
});
