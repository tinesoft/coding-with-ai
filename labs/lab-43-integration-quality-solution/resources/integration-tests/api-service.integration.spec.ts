import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { UserApi } from '../../../exercises/multi-component-app/src/api/user-api';
import { UserService } from '../../../exercises/multi-component-app/src/services/user-service';

/**
 * Integration Tests: API + Service + Validator
 * 
 * These tests verify the complete flow from API layer through
 * business logic and validation, using real component instances.
 */

describe('User Registration Integration', () => {
  let userApi: UserApi;
  let userService: UserService;

  beforeEach(() => {
    // Setup: Create real instances (no mocks)
    userService = new UserService();
    userApi = new UserApi(userService);
  });

  afterEach(() => {
    // Cleanup: Clear user service state
    userService.clear();
  });

  it('should successfully register user with valid data', async () => {
    const result = await userApi.register({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'SecurePass123!',
    });

    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
    expect(result.data?.name).toBe('John Doe');
    expect(result.data?.email).toBe('john@example.com');
    expect(result.data?.password).toBeUndefined(); // Password not returned

    // Verify data persisted in service layer
    const user = await userService.getUserByEmail('john@example.com');
    expect(user).toBeDefined();
    expect(user?.name).toBe('John Doe');
  });

  it('should reject registration with invalid email format', async () => {
    const result = await userApi.register({
      name: 'Jane Doe',
      email: 'invalid-email',
      password: 'SecurePass123!',
    });

    expect(result.success).toBe(false);
    expect(result.error).toContain('Invalid email format');

    // Verify no user created
    const user = await userService.getUserByEmail('invalid-email');
    expect(user).toBeUndefined();
  });

  it('should reject registration with weak password', async () => {
    const result = await userApi.register({
      name: 'Bob Smith',
      email: 'bob@example.com',
      password: 'weak',
    });

    expect(result.success).toBe(false);
    expect(result.error).toContain('Password must be at least 8 characters');
  });

  it('should reject duplicate email registration', async () => {
    // First registration succeeds
    await userApi.register({
      name: 'Alice',
      email: 'alice@example.com',
      password: 'SecurePass123!',
    });

    // Duplicate email fails
    const result = await userApi.register({
      name: 'Alice Duplicate',
      email: 'alice@example.com',
      password: 'AnotherPass123!',
    });

    expect(result.success).toBe(false);
    expect(result.error).toContain('already exists');
  });

  it('should transform email to lowercase', async () => {
    const result = await userApi.register({
      name: 'Test User',
      email: 'Test@EXAMPLE.COM',
      password: 'SecurePass123!',
    });

    expect(result.success).toBe(true);
    expect(result.data?.email).toBe('test@example.com');
  });

  it('should trim whitespace from name', async () => {
    const result = await userApi.register({
      name: '  Spaced Name  ',
      email: 'spaced@example.com',
      password: 'SecurePass123!',
    });

    expect(result.success).toBe(true);
    expect(result.data?.name).toBe('Spaced Name');
  });
});

describe('User Login Integration', () => {
  let userApi: UserApi;
  let userService: UserService;

  beforeEach(async () => {
    userService = new UserService();
    userApi = new UserApi(userService);

    // Setup: Create test user
    await userService.createUser(
      'Test User',
      'test@example.com',
      'TestPass123!'
    );
  });

  afterEach(() => {
    userService.clear();
  });

  it('should successfully authenticate with valid credentials', async () => {
    const result = await userApi.login('test@example.com', 'TestPass123!');

    expect(result.success).toBe(true);
    expect(result.data?.email).toBe('test@example.com');
    expect(result.data?.name).toBe('Test User');
  });

  it('should reject invalid email', async () => {
    const result = await userApi.login('wrong@example.com', 'TestPass123!');

    expect(result.success).toBe(false);
    expect(result.error).toContain('Invalid email or password');
  });

  it('should reject invalid password', async () => {
    const result = await userApi.login('test@example.com', 'WrongPass123!');

    expect(result.success).toBe(false);
    expect(result.error).toContain('Invalid email or password');
  });
});
