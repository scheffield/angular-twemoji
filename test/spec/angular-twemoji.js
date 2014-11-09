'use strict';

describe('Module: sc.twemoji', function () {
  var scope, $sandbox, $compile, $timeout;

  // load the controller's module
  beforeEach(module('sc.twemoji'));

  beforeEach(inject(function ($injector, $rootScope, _$compile_, _$timeout_) {
    scope = $rootScope;
    $compile = _$compile_;
    $timeout = _$timeout_;

    $sandbox = $('<div id="sandbox"></div>').appendTo($('body'));
  }));

  afterEach(function() {
    $sandbox.remove();
    scope.$destroy();
  });

  var templates = {
    'default': {
      scope: {},
      element: '<div twemoji>hello world</div>'
    },
    'simpleEmojiContent': {
      element: '<div twemoji>I \u2764\uFE0F emoji!</div>'
    }
  };

  function compileDirective(template) {
    template = angular.isObject(template) ? template : templates[template || 'default'];
    angular.extend(scope, template.scope || templates['default'].scope);
    var $element = $(template.element).appendTo($sandbox);
    $element = $compile($element)(scope);
    scope.$digest();
    return $element;
  }

  it('should correctly display content without emojis', function () {
    var elm = compileDirective();
    expect(elm.text()).toBe('hello world');
  });

  it('should decorate content with emojis', function() {
    var elm = compileDirective(templates.simpleEmojiContent);
    expect(elm.html()).toContain('<img');
  });

});
