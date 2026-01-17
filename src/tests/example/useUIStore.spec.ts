import { describe, it, expect, beforeEach } from "vitest";
import { useUIStore } from "@/stores/useUIStore";

/**
 * Example test for Zustand store.
 * Demonstrates testing store state and actions.
 *
 * To customize:
 * - Add more test cases
 * - Test edge cases
 * - Test persistence behavior
 */
describe("useUIStore", () => {
  beforeEach(() => {
    // Reset store state before each test
    useUIStore.setState({
      sidebarOpen: false,
      theme: "light",
      popupContent: null,
    });
  });

  it("should toggle sidebar", () => {
    const { sidebarOpen, toggleSidebar } = useUIStore.getState();

    expect(sidebarOpen).toBe(false);

    toggleSidebar();
    expect(useUIStore.getState().sidebarOpen).toBe(true);

    toggleSidebar();
    expect(useUIStore.getState().sidebarOpen).toBe(false);
  });

  it("should set sidebar open state", () => {
    const { setSidebarOpen } = useUIStore.getState();

    setSidebarOpen(true);
    expect(useUIStore.getState().sidebarOpen).toBe(true);

    setSidebarOpen(false);
    expect(useUIStore.getState().sidebarOpen).toBe(false);
  });

  it("should toggle theme", () => {
    const { theme, toggleTheme } = useUIStore.getState();

    expect(theme).toBe("light");

    toggleTheme();
    expect(useUIStore.getState().theme).toBe("dark");

    toggleTheme();
    expect(useUIStore.getState().theme).toBe("light");
  });

  it("should set theme", () => {
    const { setTheme } = useUIStore.getState();

    setTheme("dark");
    expect(useUIStore.getState().theme).toBe("dark");

    setTheme("light");
    expect(useUIStore.getState().theme).toBe("light");
  });

  it("should set and clear popup", () => {
    const { setPopup, clearPopup } = useUIStore.getState();

    expect(useUIStore.getState().popupContent).toBeNull();

    const testContent = "Test Content";
    setPopup(testContent);
    expect(useUIStore.getState().popupContent).toBe(testContent);

    clearPopup();
    expect(useUIStore.getState().popupContent).toBeNull();
  });
});
