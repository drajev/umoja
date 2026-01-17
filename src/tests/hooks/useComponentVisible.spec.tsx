import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useComponentVisible } from "@/hooks/useComponentVisible";

/**
 * Tests for useComponentVisible hook.
 */
describe("useComponentVisible", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with provided visibility state", () => {
    const { result } = renderHook(() => useComponentVisible(true));
    expect(result.current.isComponentVisible).toBe(true);
  });

  it("should have a ref", () => {
    const { result } = renderHook(() => useComponentVisible(false));
    expect(result.current.ref).toBeDefined();
    expect(result.current.ref.current).toBeNull();
  });

  it("should allow setting visibility", () => {
    const { result } = renderHook(() => useComponentVisible(false));
    expect(result.current.isComponentVisible).toBe(false);

    act(() => {
      result.current.setIsComponentVisible(true);
    });

    expect(result.current.isComponentVisible).toBe(true);
  });
});
