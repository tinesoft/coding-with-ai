import { isValidEmail, isValidPassword } from '../utils/validator';

/**
 * User Service - Business logic layer
 * Handles user management and validation
 */

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In real app, this would be hashed
  createdAt: Date;
}

export class UserService {
  private users: Map<string, User> = new Map();
  private emailIndex: Map<string, string> = new Map(); // email -> userId

  /**
   * Create a new user
   * @param name - User's full name
   * @param email - User's email address
   * @param password - User's password
   * @returns Created user object
   * @throws Error if validation fails or user exists
   */
  async createUser(name: string, email: string, password: string): Promise<User> {
    // Validate inputs
    if (!name || name.trim().length < 2) {
      throw new Error('Name must be at least 2 characters');
    }

    if (!isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (!isValidPassword(password)) {
      throw new Error(
        'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
      );
    }

    // Check for duplicate email
    if (this.emailIndex.has(email.toLowerCase())) {
      throw new Error('User with this email already exists');
    }

    // Create user
    const user: User = {
      id: this.generateId(),
      name: name.trim(),
      email: email.toLowerCase(),
      password, // In real app: await hash(password)
      createdAt: new Date(),
    };

    this.users.set(user.id, user);
    this.emailIndex.set(user.email, user.id);

    return user;
  }

  /**
   * Authenticate a user
   * @param email - User's email
   * @param password - User's password
   * @returns User object if authenticated, null otherwise
   */
  async authenticate(email: string, password: string): Promise<User | null> {
    const userId = this.emailIndex.get(email.toLowerCase());
    if (!userId) {
      return null;
    }

    const user = this.users.get(userId);
    if (!user) {
      return null;
    }

    // In real app: await compare(password, user.password)
    if (user.password !== password) {
      return null;
    }

    return user;
  }

  /**
   * Get user by ID
   * @param id - User ID
   * @returns User object or undefined
   */
  async getUserById(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  /**
   * Get user by email
   * @param email - User email
   * @returns User object or undefined
   */
  async getUserByEmail(email: string): Promise<User | undefined> {
    const userId = this.emailIndex.get(email.toLowerCase());
    return userId ? this.users.get(userId) : undefined;
  }

  /**
   * Clear all users (for testing)
   */
  clear(): void {
    this.users.clear();
    this.emailIndex.clear();
  }

  private generateId(): string {
    return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
