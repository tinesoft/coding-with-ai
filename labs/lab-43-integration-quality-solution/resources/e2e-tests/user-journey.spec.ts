import { test, expect } from '@playwright/test';

/**
 * E2E Tests: User Registration and Login Workflows
 * 
 * These tests simulate complete user journeys from a browser perspective,
 * validating the full application stack.
 */

test.describe('User Registration Flow', () => {
  test('should successfully register a new user', async ({ page }) => {
    // Navigate to registration page
    await page.goto('/register');

    // Verify on correct page
    await expect(page).toHaveURL('/register');
    await expect(page.locator('h1')).toContainText('Register');

    // Fill registration form
    await page.fill('[data-testid="register-name"]', 'John Doe');
    await page.fill('[data-testid="register-email"]', 'john@example.com');
    await page.fill('[data-testid="register-password"]', 'SecurePass123!');

    // Submit form
    await page.click('[data-testid="register-submit"]');

    // Verify success message appears
    await expect(page.locator('[data-testid="success-message"]'))
      .toContainText('Registration successful');

    // Verify redirected to dashboard
    await expect(page).toHaveURL('/dashboard');

    // Verify user name displayed in header
    await expect(page.locator('[data-testid="user-name"]'))
      .toContainText('John Doe');
  });

  test('should show error for invalid email format', async ({ page }) => {
    await page.goto('/register');

    await page.fill('[data-testid="register-name"]', 'Jane Doe');
    await page.fill('[data-testid="register-email"]', 'invalid-email');
    await page.fill('[data-testid="register-password"]', 'SecurePass123!');
    await page.click('[data-testid="register-submit"]');

    // Verify error message shown
    await expect(page.locator('[data-testid="error-message"]'))
      .toContainText('Invalid email format');

    // Verify still on registration page
    await expect(page).toHaveURL('/register');
  });

  test('should show error for weak password', async ({ page }) => {
    await page.goto('/register');

    await page.fill('[data-testid="register-name"]', 'Bob Smith');
    await page.fill('[data-testid="register-email"]', 'bob@example.com');
    await page.fill('[data-testid="register-password"]', 'weak');
    await page.click('[data-testid="register-submit"]');

    await expect(page.locator('[data-testid="error-message"]'))
      .toContainText('Password must be at least 8 characters');
  });
});

test.describe('User Login Flow', () => {
  // Setup: Register a test user before login tests
  test.beforeEach(async ({ page }) => {
    await page.goto('/register');
    await page.fill('[data-testid="register-name"]', 'Test User');
    await page.fill('[data-testid="register-email"]', 'testuser@example.com');
    await page.fill('[data-testid="register-password"]', 'TestPass123!');
    await page.click('[data-testid="register-submit"]');

    // Wait for registration to complete
    await expect(page).toHaveURL('/dashboard');

    // Logout to test login flow
    await page.click('[data-testid="logout-button"]');
    await expect(page).toHaveURL('/login');
  });

  test('should successfully login with valid credentials', async ({ page }) => {
    // Already on login page from beforeEach logout

    // Fill login form
    await page.fill('[data-testid="login-email"]', 'testuser@example.com');
    await page.fill('[data-testid="login-password"]', 'TestPass123!');

    // Submit login
    await page.click('[data-testid="login-submit"]');

    // Verify successful login
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('[data-testid="welcome-message"]'))
      .toContainText('Welcome back, Test User!');
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[data-testid="login-email"]', 'wrong@example.com');
    await page.fill('[data-testid="login-password"]', 'WrongPass123!');
    await page.click('[data-testid="login-submit"]');

    // Verify error message
    await expect(page.locator('[data-testid="error-message"]'))
      .toContainText('Invalid email or password');

    // Verify still on login page
    await expect(page).toHaveURL('/login');
  });

  test('should show error for wrong password', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[data-testid="login-email"]', 'testuser@example.com');
    await page.fill('[data-testid="login-password"]', 'WrongPassword123!');
    await page.click('[data-testid="login-submit"]');

    await expect(page.locator('[data-testid="error-message"]'))
      .toContainText('Invalid email or password');
  });
});
