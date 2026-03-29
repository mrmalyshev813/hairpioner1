import { expect, test } from "@playwright/test";

test("hero shows brand, haircut imagery and core CTAs", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Hairpioner/i);
  await expect(page.getByRole("heading", { level: 1, name: /Hairpioner/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Позвонить и записаться/i })).toHaveAttribute("href", "tel:+79500197174");
  await expect(page.getByRole("link", { name: /Открыть Hairpioner на Яндекс Картах/i })).toHaveAttribute("href", /yandex\.ru\/maps/);
  await expect(page.locator("#hero").getByRole("img", { name: /классической короткой стрижки/i })).toBeVisible();
});

test("proof and contact flow stay usable on mobile", async ({ page }) => {
  await page.goto("/");

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { level: 2, name: /Всё, что нужно для записи/i })).toBeVisible();
  await expect(page.getByRole("textbox", { name: /Имя/i })).toBeVisible();
  await expect(page.getByRole("textbox", { name: /Телефон/i })).toBeVisible();
  await expect(page.getByTitle(/Интерактивная карта Hairpioner/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /Отправить заявку/i })).toBeVisible();
});
