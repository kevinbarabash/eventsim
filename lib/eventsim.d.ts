declare module EventSim {
    interface Options {
        altKey?: boolean;
        shiftKey?: boolean;
        ctrlKey?: boolean;
        metaKey?: boolean;
    }
    interface MouseOptions extends Options {
        clientX: number;
        clientY: number;
    }
    interface KeyboardOptions extends Options {
        charCode?: number;
        keyCode?: number;
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
    function simulate(target: EventTarget, name: "keyup", options: KeyboardOptions): any;
    function simulate(target: EventTarget, name: "keydown", options: KeyboardOptions): any;
    function simulate(target: EventTarget, name: "keypress", options: KeyboardOptions): any;
    function simulate(target: EventTarget, name: string, options: Options): any;
}
export = EventSim;
