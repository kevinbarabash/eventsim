/**
 * Simulate DOM events
 */

module EventSim {

    export interface Options {
        bubbles?: boolean;
        cancelable?: boolean;
        view?: Window;
    }

    export interface MouseOptions extends Options {
        screenX?: number;
        screenY?: number;
        clientX?: number;
        clientY?: number;
        ctrlKey?: boolean;
        shiftKey?: boolean;
        altKey?: boolean;
        metaKey?: boolean;
        button?: number;
    }

    declare var MouseEvent: {
        prototype: MouseEvent;
        new (type: string, options: any): MouseEvent;
    };

    export interface PointerOptions extends MouseOptions {
        width?: number;
        height?: number;
        rotation?: number;
        pressure?: number;
        pointerType?: any;
        pointerId?: number;
        isPrimary?: boolean;
        tiltX?: number;
        tiltY?: number;
        intermediatePoints?: any;
        currentPoint?: any;
        hwTimestamp?: number;
    }

    declare var PointerEvent: {
        prototype: PointerEvent;
        new (type: string, options: any): PointerEvent;
    };

    export interface KeyboardOptions extends Options {
        key?: string;
        shiftKey?: boolean;
        altKey?: boolean;
        metaKey?: boolean;
        button?: number;
    }

    declare var KeyboardEvent: {
        prototype: KeyboardEvent;
        new (type: string, options: any): KeyboardEvent;
    };

    var mouseRegex = /click|dblclick|(mouse(down|move|up|over|out|enter|leave))/;
    var pointerRegex = /pointer(down|move|up|over|out|enter|leave)/;
    var keyboardRegex = /key(up|down|press)/;

    // mouse events
    export function simulate(target: EventTarget, name: "click", options: MouseOptions);
    export function simulate(target: EventTarget, name: "dblclick", options: MouseOptions);
    export function simulate(target: EventTarget, name: "mousedown", options: MouseOptions);
    export function simulate(target: EventTarget, name: "mousemove", options: MouseOptions);
    export function simulate(target: EventTarget, name: "mouseup", options: MouseOptions);
    export function simulate(target: EventTarget, name: "mouseover", options: MouseOptions);
    export function simulate(target: EventTarget, name: "mouseout", options: MouseOptions);
    export function simulate(target: EventTarget, name: "mouseenter", options: MouseOptions);
    export function simulate(target: EventTarget, name: "mouseleave", options: MouseOptions);

    // pointer events
    export function simulate(target: EventTarget, name: "pointerdown", options: PointerOptions);
    export function simulate(target: EventTarget, name: "pointermove", options: PointerOptions);
    export function simulate(target: EventTarget, name: "pointerup", options: PointerOptions);
    export function simulate(target: EventTarget, name: "pointercancel", options: PointerOptions);
    export function simulate(target: EventTarget, name: "pointerover", options: PointerOptions);
    export function simulate(target: EventTarget, name: "pointerout", options: PointerOptions);
    export function simulate(target: EventTarget, name: "pointerenter", options: PointerOptions);
    export function simulate(target: EventTarget, name: "pointerleave", options: PointerOptions);

    // keyboard events
    export function simulate(target: EventTarget, name: "keyup", options: KeyboardOptions);
    export function simulate(target: EventTarget, name: "keydown", options: KeyboardOptions);
    export function simulate(target: EventTarget, name: "keypress", options: KeyboardOptions);

    // TODO: wheel events
    // TODO: touch events
    // TODO: device orientation/motion events

    export function simulate(target: EventTarget, name: string, options: any);
    export function simulate(target: EventTarget, name: string, options: any) {

        var event: Event;

        if (mouseRegex.test(name)) {
            event = new MouseEvent(name, options);
        } else if (keyboardRegex.test(name)) {
            event = new KeyboardEvent(name, options);
        } else if (pointerRegex.test(name)) {
            event = new PointerEvent(name, options);
        }

        target.dispatchEvent(event);
    }

}

export = EventSim;
