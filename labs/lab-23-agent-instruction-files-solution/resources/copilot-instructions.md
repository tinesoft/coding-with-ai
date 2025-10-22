# GitHub Copilot Instructions for Task Management System

## Project Context

**Project:** TaskFlow - Modern Task Management System
**Description:** A full-stack task management application built with React, TypeScript, Node.js, and PostgreSQL. Enables teams to collaborate on projects, track tasks, and manage workflows efficiently.
**Domain:** Productivity / Project Management
**Target Users:** Development teams, project managers, and collaborative workspaces
**Current Phase:** Active Development (v2.0)

## Technology Stack

### Core Technologies
- **Language:** TypeScript (version 5.2)
- **Framework:** React 18.x with Next.js 14
- **Runtime:** Node.js 20.x LTS

### Infrastructure
- **Database:** PostgreSQL 16 with Prisma ORM
- **Cache:** Redis 7.x for session and query caching
- **Message Queue:** Bull for background job processing

### Development Tools
- **Package Manager:** npm 10.x
- **Build Tool:** Vite 5.x for development, Next.js built-in for production
- **Testing:** Jest + React Testing Library for unit/integration tests, Playwright for E2E
- **Linting:** ESLint 8.x with TypeScript rules + Prettier
- **CI/CD:** GitHub Actions for automated testing and deployment

## Architecture Overview

### System Architecture
Modern full-stack application with separated concerns:
- **Frontend**: React with Next.js (App Router) for server-side rendering and client components
- **Backend API**: RESTful API with Next.js API routes + tRPC for type-safe calls
- **Database Layer**: Prisma ORM with PostgreSQL for data persistence
- **Authentication**: NextAuth.js with JWT tokens
- **Real-time**: WebSocket connections for live task updates

### Design Patterns
- **Backend**: Repository pattern for data access, Service layer for business logic
- **Frontend**: Component composition with hooks, Container/Presentational pattern
- **Data Flow**: Server Components → Client Components with React Server Actions
- **State Management**: React Context for global state, React Query for server state

### Key Components
1. **Task Management**: CRUD operations, status tracking, assignment system
2. **Project Organization**: Hierarchical project structure with team access control
3. **Collaboration**: Real-time updates, comments, activity feeds
4. **Notifications**: Email and in-app notification system
5. **Analytics**: Dashboard with task metrics and team performance insights

## File Organization

```
project-root/
├── src/
│   ├── app/                 # Next.js App Router pages and layouts
│   ├── components/          # Reusable React components
│   │   ├── ui/              # Base UI components (Button, Input, etc.)
│   │   ├── features/        # Feature-specific components (TaskCard, ProjectList)
│   │   └── layouts/         # Layout components (Header, Sidebar)
│   ├── lib/                 # Utility libraries and configurations
│   │   ├── api/             # API client and utilities
│   │   ├── auth/            # Authentication helpers
│   │   └── db/              # Database utilities and Prisma client
│   ├── server/              # Server-side code
│   │   ├── api/             # API route handlers
│   │   ├── services/        # Business logic services
│   │   └── repositories/    # Data access layer
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── migrations/          # Database migrations
├── tests/
│   ├── unit/                # Unit tests
│   ├── integration/         # Integration tests
│   └── e2e/                 # End-to-end tests with Playwright
├── public/                  # Static assets
└── docs/                    # Project documentation
```

### File Naming Conventions
- **React Components:** `PascalCase.tsx` (e.g., `TaskCard.tsx`, `ProjectList.tsx`)
- **Utilities:** `camelCase.ts` (e.g., `formatDate.ts`, `validateEmail.ts`)
- **API Routes:** `route.ts` in Next.js app directory structure
- **Tests:** `*.test.ts` or `*.spec.ts` co-located with source files
- **Styles:** Component-specific CSS Modules `ComponentName.module.css`

## Coding Standards

### TypeScript Style

```typescript
// Always use explicit types for function parameters and return values
function calculateTaskProgress(tasks: Task[]): ProgressMetrics {
  const completed = tasks.filter(t => t.status === 'COMPLETED').length;
  return {
    total: tasks.length,
    completed,
    percentage: (completed / tasks.length) * 100
  };
}

// Prefer interfaces for object shapes
interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  assigneeId: string | null;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Use enums for fixed sets of values
enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  IN_REVIEW = 'IN_REVIEW',
  COMPLETED = 'COMPLETED'
}

// Always use const for immutable values
const MAX_TASKS_PER_PROJECT = 1000;
const DEFAULT_PAGE_SIZE = 20;

// Prefer async/await over promises
async function fetchUserTasks(userId: string): Promise<Task[]> {
  const tasks = await prisma.task.findMany({
    where: { assigneeId: userId },
    include: { project: true }
  });
  return tasks;
}

// Use JSDoc for public APIs and complex functions
/**
 * Creates a new task with validation and notification
 * @param data - Task creation data
 * @param userId - ID of the user creating the task
 * @returns Newly created task
 * @throws {ValidationError} If task data is invalid
 * @throws {AuthorizationError} If user lacks permission
 */
async function createTask(data: CreateTaskDTO, userId: string): Promise<Task> {
  // Implementation
}
```

### React Component Style

```typescript
// Prefer functional components with TypeScript
interface TaskCardProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (taskId: string) => void;
  showProject?: boolean;
}

export function TaskCard({ 
  task, 
  onUpdate, 
  onDelete, 
  showProject = false 
}: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  // Use descriptive event handler names
  const handleStatusChange = (newStatus: TaskStatus) => {
    onUpdate({ ...task, status: newStatus });
  };
  
  // Extract complex logic to custom hooks
  const { user, isOwner } = useTaskPermissions(task);
  
  return (
    <div className={styles.taskCard}>
      {/* Component JSX */}
    </div>
  );
}
```

### Error Handling

```typescript
// Always use custom error classes for domain errors
export class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Comprehensive error handling in API routes
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = validateTaskInput(body);
    
    // Perform operation
    const task = await taskService.create(validatedData);
    
    return Response.json(task, { status: 201 });
    
  } catch (error) {
    if (error instanceof ValidationError) {
      return Response.json(
        { error: error.message, field: error.field },
        { status: 400 }
      );
    }
    
    if (error instanceof AuthorizationError) {
      return Response.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      );
    }
    
    // Log unexpected errors
    console.error('Unexpected error in task creation:', error);
    
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Common Tasks

### Adding a New API Endpoint

1. **Define the route structure:**
```typescript
// src/app/api/tasks/[taskId]/route.ts
import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { taskService } from '@/server/services/taskService';

export async function GET(
  request: NextRequest,
  { params }: { params: { taskId: string } }
) {
  const session = await getServerSession();
  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const task = await taskService.getById(params.taskId);
  return Response.json(task);
}
```

2. **Implement the service layer:**
```typescript
// src/server/services/taskService.ts
import { taskRepository } from '../repositories/taskRepository';
import { NotFoundError, AuthorizationError } from '@/lib/errors';

export const taskService = {
  async getById(taskId: string, userId: string): Promise<Task> {
    const task = await taskRepository.findById(taskId);
    
    if (!task) {
      throw new NotFoundError('Task not found');
    }
    
    // Check permissions
    const hasAccess = await this.checkAccess(task, userId);
    if (!hasAccess) {
      throw new AuthorizationError('No access to this task');
    }
    
    return task;
  }
};
```

3. **Add repository method:**
```typescript
// src/server/repositories/taskRepository.ts
import { prisma } from '@/lib/db/prisma';

export const taskRepository = {
  async findById(taskId: string): Promise<Task | null> {
    return prisma.task.findUnique({
      where: { id: taskId },
      include: {
        assignee: true,
        project: true,
        comments: { orderBy: { createdAt: 'desc' } }
      }
    });
  }
};
```

4. **Write tests:**
```typescript
// src/server/services/taskService.test.ts
describe('taskService.getById', () => {
  it('returns task when user has access', async () => {
    const task = await taskService.getById('task-id', 'user-id');
    expect(task).toBeDefined();
    expect(task.id).toBe('task-id');
  });
  
  it('throws NotFoundError when task does not exist', async () => {
    await expect(
      taskService.getById('invalid-id', 'user-id')
    ).rejects.toThrow(NotFoundError);
  });
  
  it('throws AuthorizationError when user lacks access', async () => {
    await expect(
      taskService.getById('task-id', 'unauthorized-user')
    ).rejects.toThrow(AuthorizationError);
  });
});
```

### Creating a New React Component

1. **Component file:**
```typescript
// src/components/features/ProjectCard/ProjectCard.tsx
import { Project } from '@/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div 
      className={styles.card}
      onClick={() => onSelect(project)}
    >
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className={styles.meta}>
        <span>{project.taskCount} tasks</span>
        <span>{project.memberCount} members</span>
      </div>
    </div>
  );
}
```

2. **Styles:**
```css
/* src/components/features/ProjectCard/ProjectCard.module.css */
.card {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.meta {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}
```

3. **Tests:**
```typescript
// src/components/features/ProjectCard/ProjectCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    id: '1',
    name: 'Test Project',
    description: 'Test description',
    taskCount: 5,
    memberCount: 3
  };
  
  it('renders project information', () => {
    render(<ProjectCard project={mockProject} onSelect={jest.fn()} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('5 tasks')).toBeInTheDocument();
  });
  
  it('calls onSelect when clicked', () => {
    const onSelect = jest.fn();
    render(<ProjectCard project={mockProject} onSelect={onSelect} />);
    
    fireEvent.click(screen.getByText('Test Project'));
    expect(onSelect).toHaveBeenCalledWith(mockProject);
  });
});
```

4. **Export from index:**
```typescript
// src/components/features/ProjectCard/index.ts
export { ProjectCard } from './ProjectCard';
export type { ProjectCardProps } from './ProjectCard';
```

### Database Migrations

```bash
# Create a new migration
npx prisma migrate dev --name add_task_priority

# Apply migrations to production
npx prisma migrate deploy

# Reset database (development only)
npx prisma migrate reset

# Generate Prisma Client after schema changes
npx prisma generate
```

## Best Practices

### Code Organization
- Keep files focused and under 300 lines
- One component/service/utility per file
- Co-locate related files (component, styles, tests together)
- Use barrel exports (index.ts) for public APIs

### Performance
- Use React.memo for expensive components
- Implement proper pagination for lists
- Use database indexes for frequently queried fields
- Implement caching strategy with Redis for expensive queries
- Lazy load components with dynamic imports

### Security
- Validate all user inputs with Zod schemas
- Use parameterized queries (Prisma handles this automatically)
- Implement proper authentication checks on all API routes
- Never expose sensitive data in client-side code
- Use environment variables for secrets (never commit to git)
- Implement rate limiting on API routes

### Testing
- Write tests alongside feature development (TDD preferred)
- Aim for >80% code coverage on business logic
- Test edge cases and error conditions
- Use meaningful test descriptions (describe what, not how)
- Mock external dependencies (database, APIs, etc.)

## Quality Standards

### Code Review Checklist
- [ ] Tests pass and coverage meets threshold (>80%)
- [ ] Code follows TypeScript style guidelines
- [ ] No `any` types (use `unknown` if truly needed)
- [ ] No commented-out code blocks
- [ ] No console.log statements (use proper logging utility)
- [ ] Error handling is comprehensive
- [ ] API routes have authentication checks
- [ ] Documentation is updated (JSDoc, README)
- [ ] Performance implications considered
- [ ] Security implications reviewed

### Definition of Done
- [ ] Feature implemented according to requirements
- [ ] Unit tests written and passing
- [ ] Integration tests passing
- [ ] E2E tests for critical user flows
- [ ] Documentation updated
- [ ] Code reviewed and approved
- [ ] No TypeScript errors or ESLint warnings
- [ ] Tested in development environment
- [ ] Product owner acceptance obtained

## Common Pitfalls to Avoid

### Anti-Pattern 1: Direct Database Access in Components
```typescript
// ❌ Bad: Database query in component
export function TaskList() {
  const tasks = await prisma.task.findMany(); // Never do this!
  return <div>{tasks.map(/* render */)}</div>;
}

// ✅ Good: Use API route or Server Action
export async function TaskList() {
  const tasks = await fetch('/api/tasks').then(r => r.json());
  return <div>{tasks.map(/* render */)}</div>;
}
```

### Anti-Pattern 2: Not Handling Loading and Error States
```typescript
// ❌ Bad: No loading/error handling
export function TaskList() {
  const { data } = useQuery('tasks', fetchTasks);
  return <div>{data.map(/* render */)}</div>;
}

// ✅ Good: Proper state handling
export function TaskList() {
  const { data, isLoading, error } = useQuery('tasks', fetchTasks);
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data?.length) return <EmptyState />;
  
  return <div>{data.map(/* render */)}</div>;
}
```

### Anti-Pattern 3: Mutating Props or State Directly
```typescript
// ❌ Bad: Mutating state
function updateTask(task: Task) {
  task.status = 'COMPLETED'; // Direct mutation!
  setTask(task);
}

// ✅ Good: Create new object
function updateTask(task: Task) {
  setTask({ ...task, status: 'COMPLETED' });
}
```

### Anti-Pattern 4: Over-nesting Components
```typescript
// ❌ Bad: Deep nesting
return (
  <div>
    <div>
      <div>
        <div>
          <button>Click me</button>
        </div>
      </div>
    </div>
  </div>
);

// ✅ Good: Flat structure with semantic components
return (
  <Card>
    <CardHeader />
    <CardContent>
      <Button>Click me</Button>
    </CardContent>
  </Card>
);
```

## Environment Setup

### Required Environment Variables
```bash
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/taskflow

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Redis
REDIS_URL=redis://localhost:6379

# Email (for notifications)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=notifications@taskflow.com
SMTP_PASSWORD=your_smtp_password

# External APIs
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx
```

### Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run E2E tests
npm run test:e2e

# Type check
npm run type-check

# Lint code
npm run lint

# Format code
npm run format

# Build for production
npm run build

# Start production server
npm start

# Database commands
npm run db:migrate      # Run migrations
npm run db:seed         # Seed database
npm run db:studio       # Open Prisma Studio
```

## AI Agent Guidance

### When Suggesting Code Changes

1. **Always consider:**
   - Existing architectural patterns in the project
   - Type safety (no `any` types)
   - Error handling for all async operations
   - Loading and error states for UI components
   - Test coverage for business logic

2. **Ask before:**
   - Making breaking changes to public APIs
   - Adding new dependencies (check if similar functionality exists)
   - Changing database schema
   - Modifying authentication/authorization logic

3. **Always provide:**
   - Complete TypeScript type definitions
   - Comprehensive error handling
   - Unit tests for new functions/components
   - JSDoc comments for exported functions

### Code Generation Preferences

- **Prefer:** Functional components with hooks over class components
- **Prefer:** Server Components over Client Components in Next.js (unless interactivity required)
- **Prefer:** Composition over inheritance
- **Prefer:** Explicit types over type inference for public APIs
- **Avoid:** `any` type (use `unknown` with type guards if needed)
- **Avoid:** Deep component nesting (extract to smaller components)
- **Avoid:** Large files (split into focused modules)

## References and Resources

- **Project Documentation:** `/docs/README.md`
- **API Reference:** `/docs/api-reference.md`
- **Architecture Guide:** `/docs/architecture.md`
- **Contributing Guidelines:** `/CONTRIBUTING.md`
- **TypeScript Style Guide:** `/docs/typescript-style-guide.md`

---

**Last Updated:** October 2025
**Maintainers:** Development Team
**Questions?** #taskflow-dev on Slack
