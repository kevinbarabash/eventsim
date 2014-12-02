declare module EventSim {
    interface Options {
        bubbles?: boolean;
        cancelable?: boolean;
        view?: Window;
    }
    interface MouseOptions extends Options {
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
    interface PointerOptions extends MouseOptions {
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
    interface KeyboardOptions extends Options {
        key?: string;
        shiftKey?: boolean;
        altKey?: boolean;
        metaKey?: boolean;
        button?: number;
    }
    function simulate(target: EventTarget, name: "click", options: MouseOptions): any;
    function simulate(target: EventTarget, name: "dblclick", options: MouseOptions): any;
    function simulate(target: EventTarget, name: "mousedown", options: MouseOptions): any;
    function simulate(target: EventTarget, name: "mousemove", options: MouseOptions): any;
    function simulate(target: EventTarget, name: "mouseup", options: MouseOptions): any;
    function simulate(target: EventTarget, name: "mouseover", options: MouseOptions): any;
    function simulate(target: EventTarget, name: "mouseout", options: MouseOptions): any;
    function simulate(target: EventTarget, name: "mouseenter", options: MouseOptions): any;
    function simulate(target: EventTarget, name: "mouseleave", options: MouseOptions): any;
    function simulate(target: EventTarget, name: "pointerdown", options: PointerOptions): any;
    function simulate(target: EventTarget, name: "pointermove", options: PointerOptions): any;
    function simulate(target: EventTarget, name: "pointerup", options: PointerOptions): any;
    function simulate(target: EventTarget, name: "pointercancel", options: PointerOptions): any;
    function simulate(target: EventTarget, name: "pointerover", options: PointerOptions): any;
    function simulate(target: EventTarget, name: "pointerout", options: PointerOptions): any;
    function simulate(target: EventTarget, name: "pointerenter", options: PointerOptions): any;
    function simulate(target: EventTarget, name: "pointerleave", options: PointerOptions): any;
    function simulate(target: EventTarget, name: "keyup", options: KeyboardOptions): any;
    function simulate(target: EventTarget, name: "keydown", options: KeyboardOptions): any;
    function simulate(target: EventTarget, name: "keypress", options: KeyboardOptions): any;
    function simulate(target: EventTarget, name: string, options: any): any;
}
export = EventSim;
