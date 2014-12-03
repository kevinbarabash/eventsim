[![Build Status](https://travis-ci.org/kevinb7/eventsim.svg?branch=master)](https://travis-ci.org/kevinb7/eventsim)

# EventSim #

micro library for simulating DOM events

## Why? ##

I wanted a library simulating events that didn't have additional dependencies.
This makes it easy to use in user facing code or as a dependency in other libraries
such as <https://github.com/kevinb7/iframe-overlay>.  This library also takes a
more modern approach to simulating events using event constructors where possible.

## API ##

EventSim.simulate(name: string, options: Object);

## Supported events ##

### Mouse ###
- click
- dblclick
- mousedown
- mouseup
- mousemove
- mouseover
- mouseout
- mouseenter
- mouseleave

### Keyboard ###
- keydown
- keyup
- keypress

### Pointer ###
**Note:** These are currently not being tested because they require IE.
I need to setup up a good workflow for automating IE specific tests.

- pointerdown
- pointerup
- pointermove
- pointercancel
- pointerover
- pointerout
- pointerenter
- pointerleave

## Future Work ##
Support more events:

- wheel
- deviceorientation
- devicemotion
- input ?
- message ?
