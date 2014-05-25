'use strict';

app.controller('PostsCtrl', function($scope, Post){
  $scope.posts = [];
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function(){
    Post.save($scope.post);
    // $scope.posts.push($scope.post);
    $scope.post = {url: 'http://', title: ''};
  };

  $scope.deletePost = function(index){
    $scope.posts.splice(index, 1);
  };
});
