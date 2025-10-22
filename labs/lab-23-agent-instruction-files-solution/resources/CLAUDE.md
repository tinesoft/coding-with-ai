# Claude-Specific Instructions for TaskFlow

> Optimized instructions for Anthropic Claude (Claude.ai web interface, Claude CLI, and API integrations)

## Project Context

**TaskFlow** is a production-grade, full-stack task management system built with React, TypeScript, Next.js, and PostgreSQL. This document provides Claude-optimized guidance for working with this codebase.

## Why Claude Excels at This Project

Claude's strengths align well with TaskFlow's needs:
- **Long Context Window:** Perfect for analyzing large codebase files and understanding complex component relationships
- **Code Analysis:** Excellent at identifying architectural patterns, anti-patterns, and suggesting refactorings
- **Safety-First:** Strong at security analysis, finding vulnerabilities, and suggesting defensive coding practices
- **Documentation:** Generates comprehensive, well-structured documentation and technical specifications
- **Iterative Refinement:** Great at collaborative problem-solving with back-and-forth refinement

## Quick Start Guide

### For First-Time Analysis
When Claude is analyzing this codebase for the first time:

```
I'm working on TaskFlow, a task management system. Here's what I need help with:

[Your specific request]

Context about TaskFlow:
- React + Next.js 14 (App Router) with TypeScript
- PostgreSQL + Prisma ORM for database
- Repository → Service → API Route → Component architecture
- Strict TypeScript mode, >80% test coverage required
- Uses NextAuth.js for authentication

Please consider:
1. Existing architectural patterns (don't suggest different patterns unless specifically asked)
2. Type safety (no `any` types allowed)
3. Test coverage requirements
4. Security implications (all API routes need auth checks)
```

### For Code Review Requests
```
Please review this [file/function/component] for:
1. Type safety issues
2. Security vulnerabilities  
3. Performance concerns
4. Code quality and maintainability
5. Test coverage gaps

File: [paste code or file path]

Project context: TypeScript strict mode, React + Next.js 14, security-first mindset.
```

### For Architecture Questions
```
I need to implement [feature description] in TaskFlow.

Current architecture:
- Repository pattern for data access (Prisma)
- Service layer for business logic
- Next.js API routes for endpoints
- React components with TypeScript

Requirements:
- [List requirements]

Questions:
1. What's the best approach given our architecture?
2. What are the security considerations?
3. How should this be tested?
4. What are potential performance issues?
```

## Claude-Optimized Workflows

### Workflow 1: Comprehensive Code Analysis

Claude excels at analyzing large files and complex logic. Use this workflow:

```
Claude, I'm sharing the complete implementation of [component/service/module].

Please analyze it comprehensively:

1. **Architecture Review:**
   - Does it follow the repository → service → API route pattern?
   - Are responsibilities properly separated?
   - Any architectural anti-patterns?

2. **Security Analysis:**
   - Authentication and authorization gaps?
   - Input validation issues?
   - Potential vulnerabilities (SQL injection, XSS, etc.)?

3. **Code Quality:**
   - Type safety issues (any `any` types)?
   - Error handling completeness?
   - Code complexity (functions > 50 lines, files > 300 lines)?
   - Naming clarity?

4. **Performance:**
   - Database query optimization opportunities?
   - N+1 query problems?
   - Caching opportunities?
   - Bundle size concerns?

5. **Testing:**
   - Test coverage gaps?
   - Missing edge cases?
   - Test quality issues?

[Paste complete file or module]
```

### Workflow 2: Refactoring Guidance

Claude is excellent at suggesting architectural improvements:

```
Claude, this [component/service] has grown complex. Please suggest refactoring:

Current code:
[Paste code]

Constraints:
- Must maintain backward compatibility
- Cannot change public API
- Must keep test coverage above 80%
- Follow existing patterns in the codebase

Please provide:
1. Analysis of current issues
2. Refactoring strategy (step-by-step)
3. Before/after comparison
4. Migration path if breaking changes needed
5. Test update requirements
```

### Workflow 3: Feature Implementation Design

Use Claude's reasoning for upfront design:

```
Claude, I need to design and implement [feature description].

Requirements:
[List functional requirements]

Context:
- TaskFlow uses repository → service → API → component pattern
- PostgreSQL database with Prisma ORM
- NextAuth.js for authentication
- Strict TypeScript, >80% test coverage required

Please provide:
1. Data model design (Prisma schema updates)
2. API endpoint design (RESTful structure)
3. Service layer logic flow
4. Component hierarchy
5. Security considerations (auth, input validation)
6. Testing strategy
7. Performance considerations

Then, let's implement it iteratively, starting with the data model.
```

### Workflow 4: Debugging and Root Cause Analysis

Claude's reasoning helps with complex debugging:

```
Claude, I'm encountering [issue description].

Symptoms:
- [What's happening]
- [When it happens]
- [Expected vs actual behavior]

Relevant code:
[Paste relevant sections]

Logs/errors:
[Paste error messages or logs]

Please help me:
1. Identify the root cause
2. Explain why it's happening
3. Suggest fixes (with trade-offs)
4. Recommend how to prevent similar issues
5. Suggest test cases to catch this in the future
```

### Workflow 5: Security Review

Leverage Claude's security analysis capabilities:

```
Claude, please perform a security audit on this [API route/service/component].

Code:
[Paste code]

Focus areas:
1. Authentication/authorization bypasses
2. Input validation gaps (check all user inputs)
3. SQL injection risks (even with Prisma)
4. XSS vulnerabilities
5. Sensitive data exposure
6. Rate limiting needs
7. CSRF protection
8. Proper error handling (no data leaks)

For each issue found:
- Severity (Critical/High/Medium/Low)
- Exploitation scenario
- Fix recommendation
- Prevention guidance
```

## Claude-Specific Strengths for TaskFlow

### 1. Codebase Comprehension
Claude can analyze multiple large files simultaneously. When you need understanding across files:

```
Claude, help me understand how [feature] works across the codebase.

Files to analyze:
1. Repository: src/server/repositories/taskRepository.ts
2. Service: src/server/services/taskService.ts
3. API: src/app/api/tasks/route.ts
4. Component: src/components/TaskList.tsx

[Paste all files]

Please explain:
- Data flow from user action to database and back
- Where business logic is applied
- How authentication is enforced
- Error handling at each layer
```

### 2. Documentation Generation
Claude excels at comprehensive documentation:

```
Claude, generate comprehensive documentation for [module/feature].

Include:
1. High-level overview (what it does, why it exists)
2. Architecture diagram (ASCII or mermaid)
3. API reference (all exported functions with JSDoc)
4. Usage examples
5. Common pitfalls and how to avoid them
6. Testing guidance
7. Security considerations

Code to document:
[Paste code]
```

### 3. Test Strategy and Implementation
Claude can design thorough test suites:

```
Claude, I need a comprehensive test strategy for [component/service].

Code:
[Paste implementation]

Please provide:
1. Test cases (happy path, edge cases, error conditions)
2. Test structure (describe blocks and test organization)
3. Mocking strategy (what to mock, what to test end-to-end)
4. Coverage targets (aim for >80%)
5. Complete test implementation

Use Jest + React Testing Library for components, plain Jest for services.
```

### 4. Refactoring Complex Code
Claude is excellent at simplifying complex logic:

```
Claude, this function is too complex [paste complex function].

Constraints:
- Must maintain identical behavior
- Keep type safety
- Improve readability
- Extract to smaller functions if helpful

Please provide:
1. Complexity analysis (what makes it complex)
2. Refactored version with explanations
3. Before/after comparison
4. Test updates needed
```

## TaskFlow-Specific Guidelines for Claude

### Architecture Patterns to Follow

**Repository Pattern:**
```typescript
// Claude should suggest code following this pattern
export const taskRepository = {
  async findById(id: string): Promise<Task | null> {
    return prisma.task.findUnique({
      where: { id },
      include: { assignee: true, project: true }
    });
  }
};
```

**Service Layer Pattern:**
```typescript
// Claude should structure services like this
export const taskService = {
  async getTask(taskId: string, userId: string): Promise<Task> {
    // 1. Fetch data via repository
    const task = await taskRepository.findById(taskId);
    
    // 2. Apply business rules
    if (!task) throw new NotFoundError('Task not found');
    
    // 3. Check permissions
    await authService.checkTaskAccess(task, userId);
    
    // 4. Return result
    return task;
  }
};
```

**API Route Pattern:**
```typescript
// Claude should structure API routes like this
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 1. Authenticate
    const session = await getServerSession();
    if (!session) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // 2. Call service layer
    const task = await taskService.getTask(params.id, session.user.id);
    
    // 3. Return response
    return Response.json(task);
    
  } catch (error) {
    // 4. Handle errors appropriately
    return handleApiError(error);
  }
}
```

### TypeScript Standards for Claude

When generating TypeScript code, Claude should:

```typescript
// ✅ Always use explicit types
function processTask(task: Task, userId: string): ProcessedTask {
  // Implementation
}

// ✅ Use interfaces for objects
interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

// ✅ Use enums for constants
enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS'
}

// ❌ Never use 'any'
function bad(data: any) { } // NEVER suggest this

// ✅ Use unknown with type guards if needed
function better(data: unknown) {
  if (isTask(data)) {
    // Now data is Task
  }
}
```

### Security Checklist for Claude

When reviewing or generating code, Claude should verify:

- [ ] **Authentication:** All API routes check session with `getServerSession()`
- [ ] **Authorization:** User permissions verified before operations
- [ ] **Input Validation:** All user inputs validated with Zod schemas
- [ ] **SQL Injection:** Using Prisma's parameterized queries (checked)
- [ ] **XSS Prevention:** User content sanitized before rendering
- [ ] **Secrets:** No hardcoded secrets, all in environment variables
- [ ] **Error Messages:** No sensitive information leaked in errors
- [ ] **Rate Limiting:** Implemented for public endpoints

### Testing Standards for Claude

When generating tests, Claude should:

```typescript
describe('TaskService', () => {
  // ✅ Use descriptive test names
  describe('getTask', () => {
    it('returns task when user has access', async () => {
      // Arrange
      const task = await createTestTask();
      
      // Act
      const result = await taskService.getTask(task.id, authorizedUserId);
      
      // Assert
      expect(result).toEqual(task);
    });
    
    it('throws NotFoundError when task does not exist', async () => {
      await expect(
        taskService.getTask('nonexistent', userId)
      ).rejects.toThrow(NotFoundError);
    });
    
    it('throws AuthorizationError when user lacks access', async () => {
      const task = await createTestTask();
      
      await expect(
        taskService.getTask(task.id, unauthorizedUserId)
      ).rejects.toThrow(AuthorizationError);
    });
  });
});
```

## Common Claude Queries for TaskFlow

### "How should I implement...?"
```
Claude, I need to implement [feature] in TaskFlow.

Current architecture: [brief description]
Requirements: [list requirements]
Constraints: [list constraints]

Please provide:
1. Design approach
2. Implementation plan (step-by-step)
3. Code examples for key parts
4. Security considerations
5. Testing strategy
```

### "What's wrong with this code?"
```
Claude, this code isn't working as expected:

[Paste code]

Issue: [describe problem]
Expected: [expected behavior]
Actual: [actual behavior]

Please identify the issue and suggest a fix.
```

### "How do I refactor this?"
```
Claude, this [component/function] needs refactoring:

[Paste code]

Issues: [list concerns]

Please suggest improvements while maintaining backward compatibility.
```

## Environment and Setup

### Development Setup
```bash
# Clone and install
git clone [repo-url]
cd taskflow
npm install

# Environment variables needed
cp .env.example .env
# Edit .env with:
# - DATABASE_URL
# - NEXTAUTH_SECRET
# - NEXTAUTH_URL
# - REDIS_URL

# Run migrations and seed
npm run db:migrate
npm run db:seed

# Start development server
npm run dev
```

### Testing Commands
```bash
npm test                # Run all tests
npm test -- --watch    # Watch mode
npm run test:coverage  # Coverage report
npm run test:e2e       # E2E tests
```

## Key Files to Reference

When Claude needs context, these are the most important files:

1. **Architecture:** `docs/architecture.md`
2. **API Contracts:** `docs/api-reference.md`
3. **Database Schema:** `prisma/schema.prisma`
4. **Type Definitions:** `src/types/index.ts`
5. **Auth Setup:** `src/lib/auth/config.ts`
6. **Main README:** `README.md`

## Questions? Issues?

- **Technical Discussion:** #taskflow-dev Slack channel
- **Security Issues:** email security@taskflow.com
- **Bug Reports:** GitHub Issues
- **Documentation:** `/docs` directory

---

**Optimized for:** Claude 4.x / Claude 4.5 (2025)
**Last Updated:** October 2025
**Maintainer:** Development Team
