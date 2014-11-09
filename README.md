# Angular Twemoji &nbsp; [![Build Status](https://travis-ci.org/scheffield/angular-twemoji.svg)](https://travis-ci.org/scheffield/angular-twemoji)&nbsp;[![Bower version](https://badge.fury.io/bo/angular-twemoji.svg)](http://badge.fury.io/bo/angular-twemoji)

A simple angular wrapper around the great [twemoji](https://github.com/twitter/twemoji) project. It provides a `twemojiProvider` a directive and a filter.

[![get this with bower](http://benschwarz.github.io/bower-badges/badge@2x.png)](http://bower.io/ "get this with bower")

## Getting Started

1. Get angular-twemoji in one of the following ways:
 - Download the [production version][min] or the [development version][max]
 - via **[Bower](http://bower.io/)**: by running `$ bower install angular-twemoji` from your console
1. Include `angular-twemoji.min.js` (or `angular-twemoji.js`) in your `index.html`, after including Angular itself.
1. Get and include [twemoji.min.js][parser_min] or [twemoji.js][parser_max] running `$ bower install twemoji`.
1. Add `sc.twemoji` to your main module's list.

[min]: https://raw.github.com/scheffield/angular-twemoji/master/dist/angular-twemoji.min.js
[max]: https://raw.github.com/scheffield/angular-twemoji/master/dist/angular-twemoji.js
[parser_min]: https://raw.github.com/twitter/twemoji/gh-pages/twemoji.min.js
[parser_max]: https://raw.github.com/twitter/twemoji/gh-pages/twemoji.js

## Example Usage:

In your `index.html`:

```html
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/twemoji/twemoji.js"></script>

<script src="bower_components/angular-twemoji/dist/angular-twemoji.js"></script>
```

In your `app.js`:

```js
angular
    .module('myApp', [
        // ...
        'sc.twemoji'
    ]);
```

### As directive

```html
<ANY
  twemoji>
...
</ANY>
```

or

```html
<twemoji>
...
</twemoji>
```

### As filter
Since the output of `twemoji(<any_string>)` will contain `<img/>` tags you have to use `ng-bind-html` to make use of the filter.

```html
<ANY ng-bind-html="exampleString | twemoji"></ANY>
```

### As service

The wrapped `twemoji.parse()` is provided as a injectable service and can be used as follows:

```js
app.controller('myCtrl', ['twemoji', function(twemoji) {
  $scope.html = twemoji('I \u2764\uFE0F emoji!');
}]);
```

## Configuration

For the full documentation of all options please refer to [twemoji](https://github.com/twitter/twemoji#object-as-parameter). If you like to override the default configuration use the `twemojiProvider` as follows:

```js
app.config('twemojiProvider', function(twemojiProvider) {
  twemojiProvider.setOptions({
    base: string,         // default MaxCDN
    ext: string,          // default ".png"
    className: string,    // default "emoji"
    size: string|number,  // default "36x36"
    folder: string,       // in case it's specified
                          // it replaces .size info, if any
    callback: function imageSourceGenrator(icon, options) {
      return ''.concat(
        options.base, // by default Twitter Inc. CDN
        options.size, // by default "36x36" string
        '/',
        icon,         // the found emoji as code point
        options.ext   // by default ".png"
      );
    }
  });
});
```

## Further reading

See my blog post [Twemojis with AngularJS](http://www.digitalme.co/blog/twemojis-with-angularjs).

## Acknowledgments
Based on [twemoji](https://github.com/twitter/twemoji).

## License

Copyright (c) 2014 Max Scheffler

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
