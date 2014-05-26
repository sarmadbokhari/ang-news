'use strict';

app.controller('PostsCtrl', function($scope, $location, Post){
  $scope.posts = Post.all;

  $scope.post = {url: 'http://', 'title': ''};

  $scope.submitPost = function(){
    Post.create($scope.post).then(function(ref){
      // $scope.post = {url: 'http://', 'title': ''}; // this only needed if staying on the page, but since we're redirecting to another page, not needed
      $location.path('/posts' + ref.name());
    });
  };

  $scope.deletePost = function(postId){
    Post.delete(postId);
  };

});
