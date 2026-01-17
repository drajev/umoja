import type { FocusEvent, KeyboardEvent, MouseEvent, WheelEvent } from "react";

/**
 * Common event callback utilities.
 * These helpers reduce boilerplate for common event handling patterns.
 *
 * @example
 * <button onClick={stopPropagation}>Click me</button>
 * <input onKeyDown={stopPropagationOnEscape} />
 */

type ReactEvent = MouseEvent | FocusEvent | KeyboardEvent;

/** Prevents the default browser behavior for an event */
export const preventDefault = (e: ReactEvent | WheelEvent<HTMLElement>) => {
  e.preventDefault();
};

/** Stops event from bubbling up the DOM tree */
export const stopPropagation = (e: ReactEvent | WheelEvent<HTMLElement>) => {
  e.stopPropagation();
};

/** Prevents default and stops propagation */
export const preventDefaultAndStopPropagation = (e: ReactEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

/** Stops propagation only when Escape key is pressed */
export const stopPropagationOnEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    e.stopPropagation();
  }
};

/** Prevents default only when Enter key is pressed */
export const preventDefaultOnEnter = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
};

/** Blurs the current target on wheel event (useful for number inputs) */
export const blurOnWheel = (e: WheelEvent<HTMLInputElement>) => {
  e.currentTarget.blur();
};

/** No-op function that returns void */
export const noop = () => {
  /* intentionally empty */
};

/** Always returns true */
export const returnTrue = () => true;

/** Always returns false */
export const returnFalse = () => false;

/** Creates a handler that calls the callback only if condition is true */
export const conditionalHandler =
  <E extends ReactEvent>(condition: boolean, handler: (e: E) => void) =>
  (e: E) => {
    if (condition) {
      handler(e);
    }
  };
