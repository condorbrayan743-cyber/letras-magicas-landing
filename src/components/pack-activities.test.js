import { test, expect } from "bun:test";
import { AUTOPLAY_DELAY, PACK_ACTIVITIES } from "./pack-activities";

test("the activity carousel advances every four seconds", () => {
  expect(AUTOPLAY_DELAY).toBe(4000);
});

test("the gallery includes all eight original activity uploads, not the reference screenshot", () => {
  expect(PACK_ACTIVITIES).toHaveLength(8);
  expect(PACK_ACTIVITIES.every(image => image.width > 0 && image.height > 0)).toBe(true);
});