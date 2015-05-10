'use strict';

todo.directive('todoBlur', function () {
  return function (scope, elem, attrs) {
    elem.bind('blur', function () {
      scope.$apply(attrs.todoBlur);
    });

    scope.$on('$destroy', function () {
      elem.unbind('blur');
    });
  };
});
