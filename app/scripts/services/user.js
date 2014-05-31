'use strict';

app.factory('User', function($firebase, FIREBASE_URL, Auth){
  var ref = new Firebase(FIREBASE_URL + 'users');

  var users = $firebase(ref);

  var User = {
    create: function(authUser, username){
      users[username] = {
        md5_hash: authUser.md5_hash,
        username: username,
        $priority: authUser.uid
      };

      users.$save(username);
    }
  };

  return User;
})
