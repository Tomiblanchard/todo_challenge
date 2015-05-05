'use strict';

todo.controller('TodoCtrl', function TodoCtrl($scope, $location, $firebaseArray) {
  var url = 'https://todo-angular1994.firebaseio.com/todos';
  var fireRef = new Firebase(url);

  $scope.todos = $firebaseArray(fireRef);
  $scope.newTodo = '';
  $scope.editedTodo = null;

  $scope.$watch('todos', function () {
    var total = 0;
    var remaining = 0;
    $scope.todos.forEach(function (todo) {
      if (!todo || !todo.title) {
        return;
      }

      total++;
      if (todo.completed == false) {
        remaining++;
      }
    });
    $scope.totalCount = total;
    $scope.remainingCount = remaining;
    $scope.completedCount = total - remaining;
    $scope.allChecked = remaining === 0;

  }, true);

  $scope.removeTodo = function (todo) {
    $scope.todos.$remove(todo);
  };

  $scope.clearCompletedTodos = function () {
    $scope.todos.forEach(function(todo) {
      if(todo.completed) {
        $scope.removeTodo(todo);
      }
    });
  };


  if ($location.path() === '') {
    $location.path('/')
  }
  $scope.location= $location;

});
