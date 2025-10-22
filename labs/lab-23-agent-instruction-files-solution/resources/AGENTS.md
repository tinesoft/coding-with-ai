# AI Agent Instructions for TaskFlow

> Universal instructions for AI coding assistants including GitHub Copilot, Claude, Gemini, Cursor, and other agents.

## Quick Reference

- **Project Type:** Full-stack web application (Task Management System)
- **Primary Language:** TypeScript
- **Framework:** React with Next.js 14 (App Router)
- **Database:** PostgreSQL with Prisma ORM
- **Package Manager:** npm

## Project Overview

**TaskFlow** is a modern, full-stack task management application designed for development teams and collaborative workspaces. It provides comprehensive project organization, real-time collaboration features, and analytics for team productivity.

### Core Features
- Task creation, assignment, and tracking with multiple status workflows
- Hierarchical project organization with team access control
- Real-time updates and notifications via WebSockets
- Commenting system for task collaboration
- Analytics dashboard with performance metrics
- Email and in-app notification system

### Technology Stack
- **Frontend:** React 18 + Next.js 14 (App Router), TypeScript, CSS Modules
- **Backend:** Next.js API Routes + tRPC for type-safe endpoints
- **Database:** PostgreSQL 16 with Prisma ORM
- **Caching:** Redis for sessions and query optimization
- **Authentication:** NextAuth.js with JWT tokens
- **Real-time:** WebSocket connections for live updates
- **Testing:** Jest + React Testing Library + Playwright
- **CI/CD:** GitHub Actions

## For GitHub Copilot Users
See `.github/copilot-instructions.md` for detailed Copilot-specific instructions including:
- Complete file organization structure
- Detailed coding standards and patterns
- Common tasks with step-by-step examples
- API endpoint creation workflow
- React component creation templates

## For Claude Users

### Preferred Interaction Patterns
When using Claude (via CLI or web interface):
- Provide full context when asking about architecture decisions
- Request explanations of complex patterns before implementation
- Ask for security and performance considerations upfront
- Use iterative refinement for API design and data models

### Claude-Specific Strengths
- **Codebase Analysis:** Excellent for reviewing large files and identifying patterns
- **Refactoring:** Strong at suggesting architectural improvements
- **Documentation:** Generates comprehensive technical documentation
- **Security Review:** Thorough security analysis and vulnerability identification

## For Cursor IDE Users
See `.cursorrules` for Cursor-specific configuration.

### Cursor Recommendations
- Enable "Always use TypeScript strict mode" in settings
- Configure to follow project's ESLint and Prettier rules
- Set up auto-import preferences for component libraries
- Enable inline suggestions for common patterns

## For CLI Agent Users (Aider, Cline, etc.)

### File Modification Patterns
When using CLI agents for code modifications:
```bash
# Focus on specific modules
aider src/server/services/taskService.ts src/server/repositories/taskRepository.ts

# Include tests when modifying code
aider src/components/TaskCard.tsx src/components/TaskCard.test.tsx

# Work on related features together
aider src/app/api/tasks/*/route.ts
```

### Recommended Workflows
1. **Feature Development:** Start with types → repository → service → API route → component
2. **Bug Fixes:** Read tests first, reproduce issue, fix code, verify tests pass
3. **Refactoring:** Create new implementation, migrate tests, update callers, remove old code

## Architecture

### System Architecture
```
┌─────────────────────────────────────────────────────────┐
│                   Client (Browser)                       │
│  React Components + Next.js App Router + React Query    │
└──────────────┬──────────────────────────┬────────────────┘
               │                          │
               ├─ HTTP/REST               └─ WebSocket (Real-time)
               │                          
┌──────────────┴──────────────────────────────────────────┐
│              Next.js Server (Node.js)                    │
│  ┌────────────────────────────────────────────────────┐ │
│  │  API Routes + tRPC + Server Actions                │ │
│  └────────────┬───────────────────────────────────────┘ │
│               │                                          │
│  ┌────────────┴───────────────────────────────────────┐ │
│  │        Service Layer (Business Logic)              │ │
│  └────────────┬───────────────────────────────────────┘ │
│               │                                          │
│  ┌────────────┴───────────────────────────────────────┐ │
│  │     Repository Layer (Data Access via Prisma)      │ │
│  └────────────┬───────────────────────────────────────┘ │
└───────────────┼──────────────────────────────────────────┘
                │
    ┌───────────┴──────────┬───────────────┐
    │                      │               │
┌───┴───────┐      ┌──────┴─────┐    ┌───┴────────┐
│PostgreSQL │      │   Redis    │    │ Background │
│ Database  │      │   Cache    │    │   Jobs     │
└───────────┘      └────────────┘    └────────────┘
```

### Design Patterns
- **Backend:** Repository pattern for data access, Service layer for business logic, DTOs for data transfer
- **Frontend:** Container/Presentational component pattern, Custom hooks for shared logic, Context for global state
- **Data Flow:** Server Components → Client Components, React Server Actions for mutations, React Query for data fetching
- **State Management:** React Context for global UI state, React Query for server state caching, Local state with useState/useReducer

## Code Style

### TypeScript Standards
```typescript
// ✅ Always use explicit types for parameters and return values
function processTask(task: Task, userId: string): ProcessedTask {
  return { ...task, processedBy: userId, processedAt: new Date() };
}

// ✅ Use interfaces for object shapes, enums for constants
interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

// ✅ Prefer const over let, use descriptive names
const MAX_TASKS_PER_PAGE = 50;
const DEFAULT_SORT_ORDER = 'createdAt_desc';

// ✅ Use async/await, always handle errors
async function fetchTasks(projectId: string): Promise<Task[]> {
  try {
    const tasks = await prisma.task.findMany({
      where: { projectId }
    });
    return tasks;
  } catch (error) {
    logger.error('Failed to fetch tasks', { projectId, error });
    throw new DatabaseError('Unable to retrieve tasks');
  }
}
```

### React Component Standards
```typescript
// ✅ Use functional components with TypeScript
interface TaskCardProps {
  task: Task;
  onUpdate: (task: Task) => void;
  showAssignee?: boolean;  // Optional props with default
}

export function TaskCard({ 
  task, 
  onUpdate, 
  showAssignee = true 
}: TaskCardProps) {
  // ✅ Extract complex logic to custom hooks
  const { canEdit, canDelete } = useTaskPermissions(task);
  
  // ✅ Use descriptive event handler names
  const handleStatusChange = (newStatus: TaskStatus) => {
    onUpdate({ ...task, status: newStatus });
  };
  
  return (
    <div className={styles.card}>
      {/* Component JSX */}
    </div>
  );
}
```

### Error Handling Standards
```typescript
// ✅ Use custom error classes for domain-specific errors
export class ValidationError extends Error {
  constructor(
    message: string,
    public field?: string,
    public code?: string
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

// ✅ Handle all error types explicitly
try {
  const result = await performOperation();
  return result;
} catch (error) {
  if (error instanceof ValidationError) {
    return handleValidationError(error);
  }
  if (error instanceof AuthorizationError) {
    return handleAuthError(error);
  }
  // Log and handle unexpected errors
  logger.error('Unexpected error', { error });
  throw new InternalServerError('Operation failed');
}
```

## Development Workflow

### Standard Workflow for New Features

1. **Design Phase**
   - Define data models and types
   - Design API contracts
   - Plan component hierarchy
   - Identify security requirements

2. **Implementation Order**
   - Update Prisma schema if needed → Run migration
   - Create TypeScript types/interfaces
   - Implement repository methods (data access)
   - Implement service layer (business logic)
   - Create API routes with authentication
   - Build React components
   - Write tests at each layer

3. **Testing & Review**
   - Unit tests for services and utilities
   - Integration tests for API routes
   - Component tests for UI
   - E2E tests for critical flows
   - Code review and approval
   - Security and performance review

## Testing Guidelines

### Test Coverage Requirements
- **Business Logic (Services):** >90% coverage required
- **API Routes:** >80% coverage required
- **React Components:** >80% coverage for feature components
- **Utilities:** >95% coverage required

### Test Patterns
```typescript
// ✅ Descriptive test structure
describe('TaskService', () => {
  describe('createTask', () => {
    it('creates task with valid data', async () => {
      const task = await taskService.createTask(validData, userId);
      expect(task).toMatchObject(validData);
    });
    
    it('throws ValidationError when title is empty', async () => {
      await expect(
        taskService.createTask({ ...validData, title: '' }, userId)
      ).rejects.toThrow(ValidationError);
    });
    
    it('throws AuthorizationError when user lacks permission', async () => {
      await expect(
        taskService.createTask(validData, unauthorizedUserId)
      ).rejects.toThrow(AuthorizationError);
    });
  });
});
```

## Common Commands

```bash
# Development
npm install                 # Install dependencies
npm run dev                 # Start development server (http://localhost:3000)
npm run build              # Build for production
npm start                  # Start production server

# Testing
npm test                   # Run all tests
npm test -- --watch       # Run tests in watch mode
npm run test:coverage     # Generate coverage report
npm run test:e2e          # Run E2E tests with Playwright

# Code Quality
npm run lint              # Lint TypeScript and React code
npm run lint:fix          # Auto-fix linting issues
npm run type-check        # TypeScript type checking
npm run format            # Format code with Prettier

# Database
npm run db:migrate        # Run Prisma migrations
npm run db:seed           # Seed database with test data
npm run db:studio         # Open Prisma Studio (GUI)
npm run db:reset          # Reset database (dev only - DESTRUCTIVE!)

# Deployment
npm run build:analyze     # Analyze bundle size
npm run start:prod        # Start in production mode
```

## Important Patterns

### Pattern 1: Repository Pattern for Data Access
```typescript
// All database queries go through repositories
export const taskRepository = {
  async findById(id: string): Promise<Task | null> {
    return prisma.task.findUnique({ where: { id } });
  },
  
  async findByProject(projectId: string): Promise<Task[]> {
    return prisma.task.findMany({ where: { projectId } });
  },
  
  async create(data: CreateTaskData): Promise<Task> {
    return prisma.task.create({ data });
  }
};
```

### Pattern 2: Service Layer for Business Logic
```typescript
// Services contain business rules and orchestration
export const taskService = {
  async createTask(data: CreateTaskDTO, userId: string): Promise<Task> {
    // Validate data
    validateTaskData(data);
    
    // Check permissions
    await checkProjectAccess(data.projectId, userId);
    
    // Create task via repository
    const task = await taskRepository.create({
      ...data,
      createdBy: userId
    });
    
    // Send notifications
    await notificationService.notifyTaskCreated(task);
    
    return task;
  }
};
```

### Pattern 3: Custom Hooks for Shared Logic
```typescript
// Extract reusable component logic to hooks
export function useTaskPermissions(task: Task) {
  const { user } = useAuth();
  
  const isOwner = task.createdBy === user?.id;
  const isAssignee = task.assigneeId === user?.id;
  const canEdit = isOwner || isAssignee;
  const canDelete = isOwner;
  
  return { isOwner, isAssignee, canEdit, canDelete };
}
```

## What AI Agents Should Know

### Critical Information
1. **Type Safety:** This project uses TypeScript in strict mode. Never suggest `any` types.
2. **Authentication:** All API routes must check authentication. Use `getServerSession()` from NextAuth.
3. **Database Access:** Never query database directly from components. Always go through API routes/Server Actions.
4. **Testing:** All new features must include tests. No PR will be merged without adequate test coverage.
5. **Security:** Input validation is mandatory. Use Zod schemas for all user inputs.

### Constraints
- **Node.js Version:** 20.x LTS (don't suggest features from newer versions)
- **React Patterns:** Prefer functional components. Class components not allowed.
- **CSS:** Use CSS Modules only. No inline styles or CSS-in-JS libraries.
- **State Management:** Use React Context or React Query. No Redux or MobX.
- **Package Additions:** Must be approved before adding new dependencies.

### Preferences
- **Explicit over Implicit:** Prefer explicit type annotations and clear naming
- **Composition over Inheritance:** Favor functional composition patterns
- **Small, Focused Modules:** Keep files under 300 lines, functions under 50 lines
- **Test-Driven Development:** Write tests first when possible
- **Documentation:** Public APIs must have JSDoc comments

### Anti-Patterns to Avoid
- ❌ Direct database access from components
- ❌ Using `any` type anywhere in the codebase
- ❌ Mutating state or props directly
- ❌ Large, monolithic files (split into focused modules)
- ❌ Nested ternary operators (extract to functions)
- ❌ Ignoring errors (always handle explicitly)
- ❌ console.log in production code (use proper logging)

## File Modification Guidelines

### When Suggesting Changes:

1. **For TypeScript Files:**
   - Maintain existing import organization
   - Preserve type definitions
   - Keep consistent error handling patterns
   - Update tests if modifying logic

2. **For React Components:**
   - Maintain component structure (props interface at top)
   - Keep hooks at the top of the function body
   - Preserve event handler naming conventions
   - Update associated tests and styles

3. **For API Routes:**
   - Maintain authentication checks
   - Keep error handling comprehensive
   - Preserve response format consistency
   - Update API documentation if changing contracts

4. **For Database Schema:**
   - Always create a new migration (never edit existing ones)
   - Consider backward compatibility
   - Update seed data if needed
   - Regenerate Prisma Client after changes

## Questions to Ask Before Suggesting Changes

1. **Architecture:** Does this change align with the repository → service → API → component pattern?
2. **Security:** Have I included authentication/authorization checks?
3. **Performance:** Will this impact database query performance or bundle size?
4. **Testing:** What tests need to be added or updated?
5. **Breaking Changes:** Will this require changes in other parts of the codebase?
6. **Dependencies:** Can this be done with existing dependencies, or do we need to add new ones?

## Agent-Specific Notes

### For Code Review Agents
Focus on:
- Type safety (no `any` types)
- Security vulnerabilities (SQL injection, XSS, authentication bypass)
- Performance issues (N+1 queries, large bundle sizes)
- Test coverage gaps
- Error handling completeness

### For Refactoring Agents
Consider:
- Extracting duplicated logic to utilities or hooks
- Breaking down large components into smaller, focused ones
- Improving type definitions for better type inference
- Optimizing database queries and caching strategies
- Simplifying complex conditional logic

### For Documentation Agents
Provide:
- JSDoc comments for all exported functions
- README updates for architectural changes
- API documentation for new endpoints
- Migration guides for breaking changes
- Examples in documentation

---

**Project Maintained By:** Development Team
**Last Updated:** October 2025
**For Questions:** Contact the tech lead or post in #taskflow-dev
