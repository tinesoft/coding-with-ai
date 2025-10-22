# Gemini-Specific Instructions for TaskFlow

> Optimized instructions for Google Gemini (Gemini 2.5 Flash/Pro, Google AI Studio, and Vertex AI integrations)

## Project Context

**TaskFlow** is a production-grade task management system built with React, TypeScript, Next.js 14, and PostgreSQL. This document provides Gemini-optimized guidance for working with this codebase.

## Why Gemini Excels at This Project

Gemini's strengths align particularly well with TaskFlow's needs:
- **Large Context Windows:** Gemini 2.5 supports 100K–1M+ tokens, perfect for analyzing entire codebases
- **Multimodal Capabilities:** Can process code alongside diagrams, screenshots, and architectural drawings
- **Fast Inference:** Quick responses ideal for iterative development workflows
- **Code Understanding:** Strong at understanding complex TypeScript and React patterns
- **Google Cloud Integration:** Native integration with Google Cloud services and APIs

## Quick Start for Gemini

### Initial Context Setup
When starting a conversation with Gemini about TaskFlow:

```
I'm working on TaskFlow, a TypeScript-based task management system.

Key Technologies:
- React 18 + Next.js 14 (App Router)
- TypeScript (strict mode)
- PostgreSQL + Prisma ORM
- NextAuth.js for authentication
- Redis for caching

Architecture Pattern:
Repository (data access) → Service (business logic) → API Route (HTTP) → Component (UI)

Current Task: [Describe what you're working on]

Please keep in mind:
- TypeScript strict mode (no 'any' types)
- All API routes require authentication
- >80% test coverage required
- Security-first mindset
```

### For Large Codebase Analysis
Leverage Gemini's large context window:

```
Gemini, I'm going to share multiple files from TaskFlow for comprehensive analysis.

Files to analyze:
1. Prisma Schema: [paste prisma/schema.prisma]
2. Task Repository: [paste src/server/repositories/taskRepository.ts]
3. Task Service: [paste src/server/services/taskService.ts]
4. API Route: [paste src/app/api/tasks/route.ts]
5. React Component: [paste src/components/TaskList.tsx]

Please provide:
1. End-to-end data flow analysis
2. Potential issues or improvements
3. Security considerations
4. Performance optimization opportunities
```

### For Multimodal Tasks
Use Gemini's multimodal capabilities:

```
Gemini, I have an architecture diagram [attach image] and code implementation [paste code].

Please:
1. Verify the code matches the architectural design
2. Identify any discrepancies
3. Suggest improvements to align code with intended architecture
4. Highlight missing components from the diagram
```

## Gemini-Optimized Workflows

### Workflow 1: Full Codebase Context Analysis

Gemini can handle massive context - use this to your advantage:

```
Gemini, I'm sharing the entire TaskFlow codebase structure and key files.

Project Structure:
[Paste full tree output]

Key Implementation Files:
[Paste 5-10 critical files]

Please analyze:
1. Overall architecture quality
2. Consistency across the codebase
3. Potential architectural issues
4. Opportunities for consolidation
5. Missing abstractions
6. Code duplication patterns

Then suggest 3 high-impact improvements with implementation details.
```

### Workflow 2: Performance Optimization with Context

```
Gemini, I need help optimizing TaskFlow's performance.

Current Performance Metrics:
[Paste metrics, if available]

Database Schema:
[Paste Prisma schema]

Slow Queries:
[Paste slow query examples]

Critical User Paths:
1. Task list loading
2. Task creation
3. Project dashboard

Please analyze and provide:
1. Database query optimizations (indexes, query structure)
2. Caching strategy recommendations (Redis usage)
3. Frontend optimization opportunities (code splitting, lazy loading)
4. API response optimization (payload size, pagination)
5. Implementation priorities with expected impact
```

### Workflow 3: Security Audit with Full Context

```
Gemini, please perform a comprehensive security audit of TaskFlow.

Authentication System:
[Paste NextAuth.js configuration]

API Routes:
[Paste all API route files]

Input Validation:
[Paste Zod schemas]

Database Access:
[Paste repository layer]

Focus on:
1. Authentication/authorization gaps
2. Input validation completeness
3. SQL injection risks (even with Prisma)
4. XSS vulnerabilities
5. Sensitive data exposure
6. Rate limiting requirements
7. CSRF protection

Provide:
- Severity ratings (Critical/High/Medium/Low)
- Specific vulnerable code locations
- Detailed fix recommendations
- Prevention strategies for future code
```

### Workflow 4: Multimodal Feature Design

Leverage Gemini's multimodal capabilities:

```
Gemini, I want to implement a new dashboard feature.

I have:
1. Wireframe mockup: [attach image]
2. Current component structure: [paste code]
3. API endpoints available: [paste API list]

Please design and implement:
1. Component hierarchy matching the wireframe
2. Data fetching strategy
3. State management approach
4. Responsive layout considerations
5. Accessibility requirements
6. Complete implementation code

Verify the implementation matches the visual design.
```

### Workflow 5: Test Generation with Coverage Analysis

```
Gemini, I need comprehensive test coverage for this module.

Implementation:
[Paste service/component code]

Current Tests:
[Paste existing tests, if any]

Please provide:
1. Analysis of current test coverage gaps
2. Complete test suite covering:
   - Happy paths
   - Edge cases
   - Error conditions
   - Boundary values
3. Test organization structure
4. Mock setup for dependencies
5. Coverage target verification (aim for >80%)

Use Jest + React Testing Library for components, Jest for services.
```

### Workflow 6: Documentation Generation

```
Gemini, generate comprehensive documentation for TaskFlow.

Codebase:
[Paste key files or entire codebase]

Please create:
1. README.md with:
   - Project overview
   - Setup instructions
   - Architecture overview
   - Development workflow
2. API_REFERENCE.md with:
   - All endpoints documented
   - Request/response examples
   - Authentication requirements
   - Error codes
3. ARCHITECTURE.md with:
   - High-level architecture diagram (ASCII/mermaid)
   - Component relationships
   - Data flow explanations
   - Design decisions and rationale
4. CONTRIBUTING.md with:
   - Development guidelines
   - Code style requirements
   - Testing requirements
   - PR process
```

## Gemini-Specific Strengths for TaskFlow

### 1. Large-Scale Refactoring
Gemini can understand entire modules for safe refactoring:

```
Gemini, I need to refactor the entire task management module.

Current Implementation:
[Paste all related files: repository, service, API routes, components]

Requirements:
- Maintain backward compatibility
- Improve type safety
- Reduce code duplication
- Better error handling

Please provide:
1. Refactoring strategy (step-by-step plan)
2. Updated implementations for all files
3. Migration path for existing code
4. Test updates required
5. Breaking change documentation (if any)
```

### 2. Cross-Module Analysis
Find patterns and issues across the entire codebase:

```
Gemini, analyze error handling consistency across TaskFlow.

Files:
[Paste all service files, API routes, and components]

Check for:
1. Inconsistent error handling patterns
2. Missing error boundaries
3. Incomplete error types
4. Error logging gaps
5. User-facing error message quality

Provide:
- Current state assessment
- Standardized error handling pattern
- Refactoring recommendations
- Implementation example for each layer
```

### 3. Multimodal Architecture Verification
Verify implementation against design:

```
Gemini, I have our system architecture diagram [attach diagram] and the current implementation.

Implementation Files:
[Paste key files]

Please verify:
1. Does the code match the architecture?
2. Are all components from the diagram implemented?
3. Are there implementations not shown in the diagram?
4. Any architectural anti-patterns detected?
5. Suggestions for better alignment

Provide detailed analysis with specific code references.
```

### 4. Performance Profiling Analysis
Analyze performance holistically:

```
Gemini, analyze TaskFlow's performance profile.

Performance Data:
[Paste profiling results, slow query logs, bundle analysis]

Relevant Code:
[Paste components, API routes, database queries]

Please identify:
1. Performance bottlenecks (ranked by impact)
2. Optimization opportunities
3. Quick wins (low effort, high impact)
4. Long-term optimizations (high effort, high impact)
5. Implementation details for top 5 improvements
```

## TaskFlow Architecture for Gemini Context

### Repository Layer Pattern
```typescript
// All database access through repositories
export const taskRepository = {
  async findById(id: string): Promise<Task | null> {
    return prisma.task.findUnique({
      where: { id },
      include: {
        assignee: true,
        project: true,
        comments: { orderBy: { createdAt: 'desc' } }
      }
    });
  },
  
  async findByProject(projectId: string): Promise<Task[]> {
    return prisma.task.findMany({
      where: { projectId },
      orderBy: { createdAt: 'desc' }
    });
  }
};
```

### Service Layer Pattern
```typescript
// Business logic and orchestration in services
export const taskService = {
  async createTask(data: CreateTaskDTO, userId: string): Promise<Task> {
    // 1. Validate input
    const validated = validateTaskInput(data);
    
    // 2. Check permissions
    await authService.checkProjectAccess(data.projectId, userId);
    
    // 3. Create task
    const task = await taskRepository.create({
      ...validated,
      createdBy: userId
    });
    
    // 4. Side effects
    await notificationService.notifyTaskCreated(task);
    
    // 5. Return result
    return task;
  }
};
```

### API Route Pattern
```typescript
// HTTP handling in API routes
export async function POST(request: NextRequest) {
  try {
    // Authentication
    const session = await getServerSession();
    if (!session) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Input validation
    const body = await request.json();
    const validated = createTaskSchema.parse(body);
    
    // Business logic via service
    const task = await taskService.createTask(validated, session.user.id);
    
    // Response
    return Response.json(task, { status: 201 });
    
  } catch (error) {
    return handleApiError(error);
  }
}
```

### React Component Pattern
```typescript
// UI presentation in components
interface TaskListProps {
  projectId: string;
}

export function TaskList({ projectId }: TaskListProps) {
  // Data fetching
  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ['tasks', projectId],
    queryFn: () => fetchTasks(projectId)
  });
  
  // Permissions
  const { canCreate } = useProjectPermissions(projectId);
  
  // Event handlers
  const handleTaskUpdate = async (task: Task) => {
    await updateTask(task);
    // Invalidate queries, show toast, etc.
  };
  
  // Render states
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!tasks?.length) return <EmptyState />;
  
  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onUpdate={handleTaskUpdate} />
      ))}
    </div>
  );
}
```

## Code Quality Standards for Gemini

### TypeScript Standards
```typescript
// ✅ Explicit types required
function processTask(task: Task, userId: string): ProcessedTask {
  return { ...task, processedBy: userId, processedAt: new Date() };
}

// ✅ Interfaces for objects
interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  assigneeId: string | null;
}

// ✅ Enums for constants
enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

// ❌ Never use 'any'
// Bad: function process(data: any) { }
// Good: function process(data: unknown) { if (isTask(data)) { } }
```

### Security Requirements
When generating or reviewing code, verify:
- ✅ Authentication check in all API routes
- ✅ Authorization check before data access
- ✅ Input validation with Zod schemas
- ✅ Parameterized queries (Prisma handles this)
- ✅ Sanitized user content in UI
- ✅ No secrets in code (use env variables)
- ✅ Proper error messages (no sensitive data leaks)

### Testing Requirements
```typescript
// Comprehensive test structure
describe('TaskService', () => {
  describe('createTask', () => {
    it('creates task with valid data', async () => {
      const task = await taskService.createTask(validData, userId);
      expect(task).toMatchObject(validData);
    });
    
    it('throws ValidationError when title is empty', async () => {
      await expect(
        taskService.createTask({ title: '' }, userId)
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

## Common Gemini Queries for TaskFlow

### Comprehensive Feature Implementation
```
Gemini, implement [feature] completely in TaskFlow.

Requirements: [list requirements]
Current codebase: [paste relevant files for context]

Provide complete implementation including:
1. Prisma schema updates with migration
2. TypeScript type definitions
3. Repository layer methods
4. Service layer with business logic
5. API routes with authentication
6. React components with proper state management
7. Comprehensive test suite (>80% coverage)
8. Documentation updates

Implement following TaskFlow patterns and ensure all security requirements are met.
```

### Full-Stack Debugging
```
Gemini, help debug [issue description].

Symptoms: [describe what's happening]
Expected: [expected behavior]
Actual: [actual behavior]

Full Context:
- Frontend component: [paste code]
- API route: [paste code]
- Service layer: [paste code]
- Repository: [paste code]
- Database schema: [paste relevant schema]
- Error logs: [paste logs]

Analyze the full stack and provide:
1. Root cause identification
2. Why it's happening (step-by-step)
3. Fix recommendations with code
4. Prevention strategies
5. Test cases to catch similar issues
```

### Architecture Decision
```
Gemini, we need to decide on [architectural decision].

Context:
- Current architecture: [describe]
- New requirement: [describe]
- Constraints: [list constraints]
- Team preferences: [list preferences]

Options being considered:
1. [Option 1 description]
2. [Option 2 description]
3. [Option 3 description]

Please provide:
1. Analysis of each option (pros/cons)
2. Recommendation with rationale
3. Implementation impact assessment
4. Migration path if changing current architecture
5. Long-term maintainability considerations
```

## Google Cloud Integration Tips

If using Gemini through Vertex AI or Google Cloud:

```python
# Example: Using Vertex AI SDK with TaskFlow context
from vertexai.generative_models import GenerativeModel

model = GenerativeModel("gemini-2.5-pro")

# Provide TaskFlow context in system instruction
context = """
You are helping with TaskFlow, a TypeScript-based task management system.
Architecture: Repository → Service → API → Component
Tech: React 18, Next.js 14, TypeScript (strict), PostgreSQL, Prisma
Rules: No 'any' types, >80% test coverage, authentication required on all APIs
"""

response = model.generate_content(
    f"{context}\n\nUser Query: {user_query}",
    generation_config={"temperature": 0.2}  # Lower temp for code
)
```

## Key Files for Context

Most important files to share with Gemini for comprehensive understanding:

1. **Database Schema:** `prisma/schema.prisma` - Data models and relationships
2. **Types:** `src/types/index.ts` - Core TypeScript types
3. **Auth Config:** `src/lib/auth/config.ts` - Authentication setup
4. **Repository Example:** `src/server/repositories/taskRepository.ts` - Data access pattern
5. **Service Example:** `src/server/services/taskService.ts` - Business logic pattern
6. **API Example:** `src/app/api/tasks/route.ts` - HTTP handling pattern
7. **Component Example:** `src/components/TaskList.tsx` - UI pattern

## Development Commands Reference

```bash
# Development
npm install           # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production

# Testing
npm test             # Run all tests
npm test -- --watch  # Watch mode
npm run test:e2e     # E2E tests

# Database
npm run db:migrate   # Run Prisma migrations
npm run db:studio    # Open Prisma Studio GUI
npm run db:seed      # Seed test data

# Code Quality
npm run lint         # Lint code
npm run type-check   # TypeScript validation
npm run format       # Format with Prettier
```

---

**Optimized for:** Google Gemini 2.5 Flash/Pro (2025)
**Last Updated:** October 2025
**Maintainer:** Development Team
**Questions:** #taskflow-dev Slack or GitHub Issues
