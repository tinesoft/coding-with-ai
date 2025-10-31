<!-- .slide: class="transition" -->
# Module 4: Integration Testing
## Component Interaction Validation with AI

##--##

<!-- .slide: -->
# **What is Integration Testing?**

## **Testing Component Interactions**
<br>

Integration tests verify that **multiple components work together correctly** when combined.

<br>

### **Unit vs Integration Testing**
| Unit Tests | Integration Tests |
|------------|------------------|
| Test single function/class in isolation | Test multiple components together |
| Mock all dependencies | Use real dependencies |
| Fast execution (milliseconds) | Slower execution (seconds) |
| Pinpoint exact failures | Verify component contracts |

<br>

### **When to Use Integration Tests**
- ✅ API + Service layer interactions
- ✅ Database + Data access layer
- ✅ Multiple services working together
- ✅ External API integrations

Notes:
- Integration tests sit between unit tests and E2E tests in the test pyramid
- They verify the "glue code" that connects components
- More realistic than unit tests but faster than full E2E tests

##--##

<!-- .slide: -->
# **Integration Testing Scenarios**

## **Common Integration Patterns**
<br>

### **Typical Integration Test Targets**
1. **API → Service → Database**: Full data flow validation
2. **Service A → Service B**: Inter-service communication
3. **Controller → Multiple Services**: Orchestration logic
4. **Authentication → Protected Resources**: Security flows

<br>

Integration tests focus on boundaries between components and verify contracts across those boundaries.

Notes:
- Integration tests focus on boundaries between components
- They verify contracts and data transformations across boundaries
- Use real implementations, not mocks (or minimal mocking)
- The visual on the next slide shows a typical integration test scenario

##--##

<!-- .slide: -->

<img src="./assets/images/module-4/integration-test-example.svg" alt="Component interaction testing scenario" style="width:100%; height:auto; display:block;">

##--##

##--##

<!-- .slide: -->
# **AI-Assisted Integration Test Generation**

## **Using AI for Integration Testing**
<br>

### **Effective Prompts for Integration Tests**
```
"Generate integration tests for an API endpoint that:
1. Accepts user registration data
2. Validates with UserService
3. Saves to database via Repository
4. Sends welcome email via EmailService

Test success case and validation failures.
Use Vitest with actual service instances."
```

### **What AI Helps With**
- 🤖 **Test scenario generation**: Identifies important integration paths
- 🤖 **Setup/teardown code**: Database seeding, cleanup
- 🤖 **Assertion patterns**: Verifies data flow through components
- 🤖 **Error handling**: Tests failure scenarios across boundaries

<br>

### **⚠️ Human Validation Required**
- Verify tests use appropriate real vs mocked dependencies
- Confirm test isolation (no cross-test contamination)
- Validate setup/teardown properly cleans state

Notes:
- Integration tests are more complex than unit tests - AI helps manage complexity
- Key skill: knowing what to mock vs what to use real implementations for
- Balance between realism and test speed/reliability

##--##

<!-- .slide: -->
# **Integration Testing with Vitest**

## **Test Structure and Patterns**
<br>

### **Typical Integration Test Structure**
```typescript
describe('User Registration Integration', () => {
  let apiService: ApiService;
  let userService: UserService;
  let database: TestDatabase;

  beforeEach(async () => {
    // Setup: Initialize real instances
    database = await setupTestDatabase();
    userService = new UserService(database);
    apiService = new ApiService(userService);
  });

  afterEach(async () => {
    // Teardown: Clean up state
    await database.cleanup();
  });

  it('should register user and persist to database', async () => {
    // Test full flow through multiple components
    const result = await apiService.registerUser({
      email: 'test@example.com',
      password: 'SecurePass123!'
    });
    
    expect(result.success).toBe(true);
    
    // Verify data persisted correctly
    const user = await database.findUserByEmail('test@example.com');
    expect(user).toBeDefined();
    expect(user.email).toBe('test@example.com');
  });
});
```

Notes:
- Integration tests need more setup than unit tests (databases, services)
- Focus on verifying data flow and transformations across components
- Use beforeEach/afterEach for proper test isolation

##--##

<!-- .slide: -->
# **Integration Testing Best Practices**

## **Keys to Effective Integration Tests**
<br>

### **✅ DO**
- **Test realistic scenarios**: Use real component interactions
- **Focus on boundaries**: Verify contracts between components
- **Isolate tests**: Each test should be independent
- **Use test databases**: Separate from production data
- **Test error paths**: Verify failure handling across components

### **❌ DON'T**
- **Mock everything**: Defeats purpose of integration testing
- **Test implementation details**: Focus on behavior, not internals
- **Share state between tests**: Causes flaky tests
- **Use production services**: Always use test environments
- **Ignore test speed**: Keep tests reasonably fast

<br>

### **🎯 Test Pyramid Guidance**
- **Unit tests**: 70% (fast, isolated, many)
- **Integration tests**: 20% (realistic, focused, fewer)
- **E2E tests**: 10% (comprehensive, slow, minimal)

Notes:
- Integration tests balance realism with maintainability
- More integration tests than E2E, fewer than unit tests
- They're the "middle ground" in the test pyramid
