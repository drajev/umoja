/**
 * Type guard utilities for runtime type checking.
 * These functions narrow types and provide type-safe assertions.
 *
 * @example
 * if (isString(value)) {
 *   // value is now typed as string
 *   console.log(value.toUpperCase());
 * }
 */

/** Checks if value is a boolean */
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};

/** Checks if value is a number (excludes NaN) */
export const isNumber = (value: unknown): value is number => {
  return typeof value === "number" && !Number.isNaN(value);
};

/** Checks if value is a string */
export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

/** Checks if value is a function */
export const isFunction = (value: unknown): value is CallableFunction => {
  return typeof value === "function";
};

/** Checks if value is an object (excludes null and arrays) */
export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

/** Checks if value is an array */
export const isArray = <T = unknown>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

/** Checks if value is null or undefined */
export const isNullish = (value: unknown): value is null | undefined => {
  return value === null || value === undefined;
};

/** Checks if value is defined (not null or undefined) */
export const isDefined = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined;
};

/** Checks if value is a non-empty string */
export const isNonEmptyString = (value: unknown): value is string => {
  return isString(value) && value.trim().length > 0;
};

/** Checks if value is a positive number */
export const isPositiveNumber = (value: unknown): value is number => {
  return isNumber(value) && value > 0;
};

/** Checks if value is a Date object */
export const isDate = (value: unknown): value is Date => {
  return value instanceof Date && !Number.isNaN(value.getTime());
};

/** Checks if value is a Promise */
export const isPromise = <T = unknown>(value: unknown): value is Promise<T> => {
  return value instanceof Promise;
};

/** Checks if value is an Error */
export const isError = (value: unknown): value is Error => {
  return value instanceof Error;
};
