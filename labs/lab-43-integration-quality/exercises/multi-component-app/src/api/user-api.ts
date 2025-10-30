import { UserService } from '../services/user-service';

/**
 * User API - HTTP endpoint layer
 * Handles user registration and authentication requests
 */

export interface RegistrationRequest {
  name: string;
  email: string;
  password: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export class UserApi {
  constructor(private userService: UserService) {}

  /**
   * Register a new user
   * @param request - User registration data
   * @returns API response with success status
   */
  async register(request: RegistrationRequest): Promise<ApiResponse> {
    try {
      const user = await this.userService.createUser(
        request.name,
        request.email,
        request.password
      );

      return {
        success: true,
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Registration failed',
      };
    }
  }

  /**
   * Authenticate a user
   * @param email - User email
   * @param password - User password
   * @returns API response with authentication result
   */
  async login(email: string, password: string): Promise<ApiResponse> {
    try {
      const user = await this.userService.authenticate(email, password);

      if (!user) {
        return {
          success: false,
          error: 'Invalid email or password',
        };
      }

      return {
        success: true,
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed',
      };
    }
  }
}
