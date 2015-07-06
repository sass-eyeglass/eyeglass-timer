# Eyeglass Timer

Allows you to time your Sass code to the nearest millisecond.

To use it in your eyeglass project:

```
$ npm install --save eyeglass-timer
```

Then in your Sass file(s):

```scss
@import "timer";

$timer: timer-start();

// Do something complicated

/*! Complicated thing took: #{elapsed-time($timer)} */

```

### API

* `current-time-ms()` - returns the current time in milliseconds since
  the epoch.
* `timer-start()` - returns the time the timer was started.
* `elapsed-time($start-time)` - returns the delta since the timer was
  started.
* `$timer-imported-at` - The time the timer module was first imported.
