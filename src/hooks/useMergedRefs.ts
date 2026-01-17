import { type Ref, type RefCallback, type RefObject, useCallback } from 'react';

type PossibleRef<T> = Ref<T> | undefined;

/**
 * Assigns a value to a ref, handling both callback refs and object refs.
 */
const assignRef = <T>(ref: PossibleRef<T>, value: T): void => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as RefObject<T>).current = value;
  }
};

/**
 * Merges multiple refs into a single callback ref.
 * Useful when you need to forward a ref while also using it locally.
 *
 * @param refs - Array of refs to merge
 * @returns A callback ref that updates all provided refs
 *
 * @example
 * // In a component that forwards refs
 * const MyComponent = ({ ref }: { ref?: Ref<HTMLDivElement> }) => {
 *   const localRef = useRef<HTMLDivElement>(null);
 *   const mergedRef = useMergedRefs(ref, localRef);
 *
 *   useEffect(() => {
 *     // localRef.current is available here
 *     console.log(localRef.current?.offsetWidth);
 *   }, []);
 *
 *   return <div ref={mergedRef}>Content</div>;
 * };
 *
 * @example
 * // Combining with external library refs
 * const { ref: dragRef } = useDrag();
 * const { ref: dropRef } = useDrop();
 * const combinedRef = useMergedRefs(dragRef, dropRef);
 */
export const useMergedRefs = <T>(...refs: PossibleRef<T>[]): RefCallback<T> => {
  return useCallback(
    (node: T) => {
      for (const ref of refs) {
        assignRef(ref, node);
      }
    },
    // biome-ignore lint/correctness/useExhaustiveDependencies: refs array is spread
    refs,
  );
};

/**
 * Non-hook version for use outside of components.
 * Creates a merged ref callback without React hooks.
 *
 * @param refs - Array of refs to merge
 * @returns A callback ref that updates all provided refs
 */
export const mergeRefs =
  <T>(...refs: PossibleRef<T>[]): RefCallback<T> =>
  (node: T) => {
    for (const ref of refs) {
      assignRef(ref, node);
    }
  };
