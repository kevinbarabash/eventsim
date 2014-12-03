/*global describe, beforeEach, afterEach, it */

describe("EventSim", function () {

  describe("MouseEvents", function () {
    var mouseEvents = [ "click", "dblclick", "mouseup", "mousedown", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave" ];
    mouseEvents.forEach(testMouseEvent, this);
  });

  describe("KeyboardEvents", function () {
    describe("uppercase letters", function () {
      var keyboardEvents = [ "keyup", "keydown", "keypress" ];
      for (var i = 65; i < 91; i++) {
        var char = String.fromCharCode(i);
        var options = {
          key: char.toLowerCase(),
          char: char,
          keyCode: i,
          altKey: true,
          shiftKey: true,
          metaKey: true,
          ctrlKey: true
        };
        keyboardEvents.forEach(function (type) {
          testKeyboardEvent(type, options, char);
        }, this);
      }
    });

    describe("lowercase letters", function () {
      var keyboardEvents = [ "keyup", "keydown", "keypress" ];
      for (var i = 97; i < 123; i++) {
        var char = String.fromCharCode(i);
        var options = {
          key: String.fromCharCode(i),
          char: char,
          keyCode: i,
          altKey: true,
          shiftKey: false,
          metaKey: true,
          ctrlKey: true
        };
        keyboardEvents.forEach(function (type) {
          testKeyboardEvent(type, options, char);
        }, this);
      }
    });

    describe("left key", function () {
      var keyboardEvents = [ "keyup", "keydown", "keypress" ];
      var options = {
        keyCode: 37,
        altKey: true,
        shiftKey: true,
        metaKey: true,
        ctrlKey: true
      };
      keyboardEvents.forEach(function (type) {
        testKeyboardEvent(type, options);
      }, this);
    });

    describe("right key", function () {
      var keyboardEvents = [ "keyup", "keydown", "keypress" ];
      var options = {
        keyCode: 39,
        altKey: true,
        shiftKey: true,
        metaKey: true,
        ctrlKey: true
      };
      keyboardEvents.forEach(function (type) {
        testKeyboardEvent(type, options);
      }, this);
    });

    describe("up key", function () {
      var keyboardEvents = [ "keyup", "keydown", "keypress" ];
      var options = {
        keyCode: 38,
        altKey: true,
        shiftKey: true,
        metaKey: true,
        ctrlKey: true
      };
      keyboardEvents.forEach(function (type) {
        testKeyboardEvent(type, options);
      }, this);
    });

    describe("down key", function () {
      var keyboardEvents = [ "keyup", "keydown", "keypress" ];
      var options = {
        keyCode: 40,
        altKey: true,
        shiftKey: true,
        metaKey: true,
        ctrlKey: true
      };
      keyboardEvents.forEach(function (type) {
        testKeyboardEvent(type, options);
      }, this);
    });
  });
});
