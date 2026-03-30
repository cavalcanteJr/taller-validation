const { test, expect } = require("@playwright/test");

test("Challenge PWC - Scoped UI and API Validation", async ({ page }) => {
  const userData = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    currentAddress: "123 Main St",
    permanentAddress: "456 Secondary St",
  };

  try {
    await page.goto("https://demoqa.com/text-box");

    await page.locator("#userName").fill(userData.fullName);
    await page.locator("#userEmail").fill(userData.email);
    await page.locator("#currentAddress").fill(userData.currentAddress);
    await page.locator("#permanentAddress").fill(userData.permanentAddress);

    await page.locator("#submit").click();

    const outputContainer = page.locator("#output");

    await expect(outputContainer).toBeVisible();

    await expect(outputContainer.locator("#name")).toContainText(
      userData.fullName,
    );
    await expect(outputContainer.locator("#email")).toContainText(
      userData.email,
    );

    await expect(outputContainer.locator("#currentAddress")).toContainText(
      userData.currentAddress,
    );
    await expect(outputContainer.locator("#permanentAddress")).toContainText(
      userData.permanentAddress,
    );

    await page.pause();
  } catch (error) {
    throw new Error(`Validation failed: ${error.message}`);
  }
});
