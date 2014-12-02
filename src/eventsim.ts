/**
 * Simulate DOM events
 */

module EventSim {

    export interface Options {
        altKey?: boolean;
        shiftKey?: boolean;
        ctrlKey?: boolean;
        metaKey?: boolean;
    }

    export interface MouseOptions extends Options {
        clientX: number;
        clientY: number;
    }

    export interface KeyboardOptions extends Options {
        charCode?: number;
        keyCode?: number;
    }

    declare var MouseEvent: {
        prototype: MouseEvent;
        new (type: string, options: any): MouseEvent;
    };

    declare var KeyboardEvent: {
        prototype: KeyboardEvent;
        new (type: string, options: any): KeyboardEvent;
    };

    var mouseRegex = /click|dblclick|(mouse(down|move|up|over|out|enter|leave))/;
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

    // keyboard events
    export function simulate(target: EventTarget, name: "keyup", options: KeyboardOptions);
    export function simulate(target: EventTarget, name: "keydown", options: KeyboardOptions);
    export function simulate(target: EventTarget, name: "keypress", options: KeyboardOptions);

    export function simulate(target: EventTarget, name: string, options: Options);
    export function simulate(target: EventTarget, name: string, options: Options) {

        var event: Event;

        if (mouseRegex.test(name)) {
            event = new MouseEvent(name, options);
        } else if (keyboardRegex.test(name)) {
            event = new KeyboardEvent(name, options);
        }

        target.dispatchEvent(event);
    }

}

export = EventSim;
