/**
 * Based on: https://gist.github.com/termi/4654819
 */

var initKeyboardEvent_variant = (function (event) {
  try {
    event.initKeyboardEvent(
      "keyup",  // in DOMString typeArg
      false,    // in boolean canBubbleArg
      false,    // in boolean cancelableArg
      window,   // in views::AbstractView viewArg
      "+",      // [test]in DOMString keyIdentifierArg | webkit event.keyIdentifier | IE9 event.key
      3,        // [test]in unsigned long keyLocationArg | webkit event.keyIdentifier | IE9 event.location
      true,     // [test]in boolean ctrlKeyArg | webkit event.shiftKey | old webkit event.ctrlKey | IE9 event.modifiersList
      false,    // [test]shift | alt
      true,     // [test]shift | alt
      false,    // meta
      false     // altGraphKey
    );

    // Safari and IE9 throw Error here due keyCode, charCode and which is readonly
    //delete event.keyCode;
    //delete event.charCode;
    //delete event.which;

    if ((event["keyIdentifier"] || event["key"]) == "+" && (event["keyLocation"] || event["location"]) == 3) {
      return event.ctrlKey ? (event.altKey ? 1 : 3) : (event.shiftKey ? 2 : 4);
    }
    return 9;
  } catch (e) {
    return 0;
  }
})(document.createEvent("KeyboardEvent"));

var keyboardEventProperties = {
  "char": "",
  "key": "",
  "location": 0,
  "ctrlKey": false,
  "shiftKey": false,
  "altKey": false,
  "metaKey": false,
  "repeat": false,
  "locale": "",

  "detail": 0,
  "bubbles": false,
  "cancelable": false,

  //legacy properties
  "keyCode": 0,
  "charCode": 0,
  "which": 0
};

function createModifersList(dict) {
  var modifiers = ["Ctrl", "Shift", "Alt", "Meta", "AltGraph"];

  return modifiers.filter(function (mod) {
    return dict.hasOwnProperty([mod.toLowerCase() + "Key"]);
  }).join(" ");
}

function createKeyboardEvent(type: string, dict: any): KeyboardEvent {
  var event;

  if (initKeyboardEvent_variant) {
    event = document.createEvent( "KeyboardEvent" );
  } else {
    event = document.createEvent( "Event" );
  }
  var propName, localDict = {};

  for (propName in keyboardEventProperties) {
    if (keyboardEventProperties.hasOwnProperty(propName) ) {
      if (dict && dict.hasOwnProperty(propName)) {
        localDict[propName] = dict[propName];
      } else {
        localDict[propName] = keyboardEventProperties[propName];
      }
    }
  }

  var ctrlKey = localDict["ctrlKey"];
  var shiftKey = localDict["shiftKey"];
  var altKey = localDict["altKey"];
  var metaKey = localDict["metaKey"];
  var altGraphKey = localDict["altGraphKey"];

  var key = localDict["key"] + "";
  var char = localDict["char"] + "";
  var location = localDict["location"];
  var keyCode = localDict["keyCode"] || (localDict["keyCode"] = key && key.charCodeAt(0) || 0);
  var charCode = localDict["charCode"] || (localDict["charCode"] = char && char.charCodeAt(0) || 0);

  var bubbles = localDict["bubbles"];
  var cancelable = localDict["cancelable"];

  var repeat = localDict["repeat"];
  var local = localDict["locale"];
  var view = window;

  localDict["which"] || (localDict["which"] = localDict["keyCode"]);

  if ("initKeyEvent" in event) {
    // Firefox
    // https://developer.mozilla.org/en/DOM/event.initKeyEvent
    event.initKeyEvent( type, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode );

  } else if (initKeyboardEvent_variant && "initKeyboardEvent" in event ) {

    // https://developer.mozilla.org/en/DOM/KeyboardEvent#initKeyboardEvent()
    switch (initKeyboardEvent_variant) {
      case 1:
        // webkit
        // http://stackoverflow.com/a/8490774/1437207
        // https://bugs.webkit.org/show_bug.cgi?id=13368
        event.initKeyboardEvent( type, bubbles, cancelable, view, key, location, ctrlKey, shiftKey, altKey, metaKey, altGraphKey );
        break;
      case 2:
        // old webkit
        // http://code.google.com/p/chromium/issues/detail?id=52408
        event.initKeyboardEvent( type, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode );
        break;
      case 3:
        // webkit
        event.initKeyboardEvent( type, bubbles, cancelable, view, key, location, ctrlKey, altKey, shiftKey, metaKey, altGraphKey );
        break;
      case 4:
        // IE9
        event.initKeyboardEvent( type, bubbles, cancelable, view, key, location, createModifersList(localDict), repeat, local );
        break;
      default:
        // FireFox|w3c
        // http://www.w3.org/TR/DOM-Level-3-Events/#events-KeyboardEvent-initKeyboardEvent
        // https://developer.mozilla.org/en/DOM/KeyboardEvent#initKeyboardEvent()
        event.initKeyboardEvent( type, bubbles, cancelable, view, char, key, location, createModifersList(localDict), repeat, local );
    }
  } else {
    event.initEvent(type, bubbles, cancelable)
  }

  for (propName in keyboardEventProperties) {
    if (keyboardEventProperties.hasOwnProperty(propName)) {
      if (event[propName] != localDict[propName]) {
        try {
          delete event[propName];
          Object.defineProperty( event, propName, { writable: true, value: localDict[propName] } );
        } catch(e) {
          //Some properties are read-only
        }
      }
    }
  }

  return event;
}

export = createKeyboardEvent;
