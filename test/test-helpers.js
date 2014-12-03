function testMouseEvent(name) {
  it("should simulate " + name + " events", function (done) {
    var listener = function (e) {
      expect(e.pageX).to.be(400);
      expect(e.pageY).to.be(300);
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

function testKeyboardEvent(name, values, char) {
  var desc = "should simulate ";
  if (char) {
    desc += "'" + char + "'";
  }
  desc += " " + name + " events";

  it(desc, function (done) {
    var listener = function (e) {
      Object.keys(values).forEach(function (key) {
        expect(e[key]).to.be(values[key]);
      });
      document.body.removeEventListener(name, listener);
      done();
    };
    document.body.addEventListener(name, listener);

    EventSim.simulate(document.body, name, values);
  });
}
