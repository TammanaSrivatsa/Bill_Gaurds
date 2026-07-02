import { Capacitor } from "@capacitor/core";
import { describe, it, expect, vi } from "vitest";
import { getSplashDuration } from "../components/SplashScreen";

describe("splash timing", () => {
  it("keeps the native mobile splash visible longer than the web splash", () => {
    vi.spyOn(Capacitor, "isNativePlatform").mockReturnValue(true);

    const mobileDuration = getSplashDuration();
    expect(mobileDuration).toBeGreaterThan(1500);
  });
});
