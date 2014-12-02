/*global describe, beforeEach, afterEach, it */

describe("EventSim", function () {

  it("should work", function () {
    expect(true).to.be(true);
  });

  function testMouseEvent(name) {
    it("should simulate " + name + " events", function (done) {
      var listener = function (e) {
        expect(e.pageX).to.be(400);
        expect(e.pageY).to.be(300);
        expect(e.x).to.be(400);
        expect(e.y).to.be(300);
        expect(e.altKey).to.be(true);
        expect(e.shiftKey).to.be(true);
        expect(e.metaKey).to.be(true);
        expect(e.ctrlKey).to.be(true);
        document.body.removeEventListener(name, listener);
        done();
      };
      document.body.addEventListener(name, listener);
      var options = {
        clientX: 400,
        clientY: 300,
        altKey: true,
        shiftKey: true,
        metaKey: true,
        ctrlKey: true
      };
      EventSim.simulate(document.body, name, options);
    });
  }

  describe("MouseEvents", function () {
    var mouseEvents = [ "click", "dblclick", "mouseup", "mousedown", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave" ];
    mouseEvents.forEach(testMouseEvent, this);
  });

  function testKeyboardEvent(name) {
    it("should simulate " + name + " events", function (done) {
      var listener = function (e) {
        console.log(e);
        expect(e.keyIdentifier).to.be("a");
        expect(e.altKey).to.be(true);
        expect(e.shiftKey).to.be(true);
        expect(e.metaKey).to.be(true);
        expect(e.ctrlKey).to.be(true);
        document.body.removeEventListener(name, listener);
        done();
      };
      document.body.addEventListener(name, listener);
      var options = {
        key: "a",
        altKey: true,
        shiftKey: true,
        metaKey: true,
        ctrlKey: true
      };
      EventSim.simulate(document.body, name, options);
    });
  }

  describe("KeyboardEvents", function () {
    var keyboardEvents = [ "keyup", "keydown", "keypress" ];
    keyboardEvents.forEach(testKeyboardEvent, this);
  });
});
