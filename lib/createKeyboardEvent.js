var initKeyboardEvent_variant = (function (event) {
    try {
        event.initKeyboardEvent("keyup", false, false, window, "+", 3, true, false, true, false, false);
        if ((event["keyIdentifier"] || event["key"]) == "+" && (event["keyLocation"] || event["location"]) == 3) {
            return event.ctrlKey ? (event.altKey ? 1 : 3) : (event.shiftKey ? 2 : 4);
        }
        return 9;
    }
    catch (e) {
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
function createKeyboardEvent(type, dict) {
    var event;
    if (initKeyboardEvent_variant) {
        event = document.createEvent("KeyboardEvent");
    }
    else {
        event = document.createEvent("Event");
    }
    var propName, localDict = {};
    for (propName in keyboardEventProperties) {
        if (keyboardEventProperties.hasOwnProperty(propName)) {
            if (dict && dict.hasOwnProperty(propName)) {
                localDict[propName] = dict[propName];
            }
            else {
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
        event.initKeyEvent(type, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode);
    }
    else if (initKeyboardEvent_variant && "initKeyboardEvent" in event) {
        switch (initKeyboardEvent_variant) {
            case 1:
                event.initKeyboardEvent(type, bubbles, cancelable, view, key, location, ctrlKey, shiftKey, altKey, metaKey, altGraphKey);
                break;
            case 2:
                event.initKeyboardEvent(type, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode);
                break;
            case 3:
                event.initKeyboardEvent(type, bubbles, cancelable, view, key, location, ctrlKey, altKey, shiftKey, metaKey, altGraphKey);
                break;
            case 4:
                event.initKeyboardEvent(type, bubbles, cancelable, view, key, location, createModifersList(localDict), repeat, local);
                break;
            default:
                event.initKeyboardEvent(type, bubbles, cancelable, view, char, key, location, createModifersList(localDict), repeat, local);
        }
    }
    else {
        event.initEvent(type, bubbles, cancelable);
    }
    for (propName in keyboardEventProperties) {
        if (keyboardEventProperties.hasOwnProperty(propName)) {
            if (event[propName] != localDict[propName]) {
                try {
                    delete event[propName];
                    Object.defineProperty(event, propName, { writable: true, value: localDict[propName] });
                }
                catch (e) {
                }
            }
        }
    }
    return event;
}
module.exports = createKeyboardEvent;
