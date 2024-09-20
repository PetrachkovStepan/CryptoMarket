import { test, expect } from "@playwright/test";

//--input--tests
test.describe("HomePage", () => {
  test("should open add modal", async ({ page }) => {
    await page.goto("http://localhost:5173");
    await page.getByRole("button", { name: "Add" }).click();
  });
});
