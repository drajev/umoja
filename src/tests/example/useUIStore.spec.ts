import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { useUIStore } from "@/stores";

/**
 * Tests for useUIStore.
 * Tests UI state management with the new actions pattern.
 */
describe("useUIStore", () => {
  beforeEach(() => {
    // Reset store to initial state before each test
    useUIStore.getState().actions.resetStore();
  });

  it("initializes with default values", () => {
    const { result } = renderHook(() => useUIStore());
    expect(result.current.sidebarOpen).toBe(false);
    expect(result.current.theme).toBe("light");
    expect(result.current.popupContent).toBeNull();
  });

  it("toggles sidebar correctly", () => {
    const { result } = renderHook(() => useUIStore());

    act(() => {
      result.current.actions.toggleSidebar();
    });

    expect(result.current.sidebarOpen).toBe(true);

    act(() => {
      result.current.actions.toggleSidebar();
    });

    expect(result.current.sidebarOpen).toBe(false);
  });

  it("sets sidebar open correctly", () => {
    const { result } = renderHook(() => useUIStore());

    act(() => {
      result.current.actions.setSidebarOpen(true);
    });

    expect(result.current.sidebarOpen).toBe(true);
  });

  it("toggles theme correctly", () => {
    const { result } = renderHook(() => useUIStore());

    act(() => {
      result.current.actions.toggleTheme();
    });

    expect(result.current.theme).toBe("dark");

    act(() => {
      result.current.actions.toggleTheme();
    });

    expect(result.current.theme).toBe("light");
  });

  it("sets theme correctly", () => {
    const { result } = renderHook(() => useUIStore());

    act(() => {
      result.current.actions.setTheme("dark");
    });

    expect(result.current.theme).toBe("dark");
  });

  it("manages popup content correctly", () => {
    const { result } = renderHook(() => useUIStore());
    const testContent = "Test popup content";

    act(() => {
      result.current.actions.setPopup(testContent);
    });

    expect(result.current.popupContent).toBe(testContent);

    act(() => {
      result.current.actions.clearPopup();
    });

    expect(result.current.popupContent).toBeNull();
  });

  it("uses auto-generated selectors correctly", () => {
    act(() => {
      useUIStore.getState().actions.setTheme("dark");
      useUIStore.getState().actions.setSidebarOpen(true);
    });

    const { result: themeResult } = renderHook(() => useUIStore.use.theme());
    const { result: sidebarResult } = renderHook(() =>
      useUIStore.use.sidebarOpen(),
    );

    expect(themeResult.current).toBe("dark");
    expect(sidebarResult.current).toBe(true);
  });
});
