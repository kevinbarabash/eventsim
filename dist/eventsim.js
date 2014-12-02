!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.EventSim=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EventSim;
(function (EventSim) {
    var mouseRegex = /click|dblclick|(mouse(down|move|up|over|out|enter|leave))/;
    var keyboardRegex = /key(up|down|press)/;
    function simulate(target, name, options) {
        var event;
        if (mouseRegex.test(name)) {
            event = new MouseEvent(name, options);
        }
        else if (keyboardRegex.test(name)) {
            event = new KeyboardEvent(name, options);
        }
        target.dispatchEvent(event);
    }
    EventSim.simulate = simulate;
})(EventSim || (EventSim = {}));
module.exports = EventSim;

},{}]},{},[1])(1)
});