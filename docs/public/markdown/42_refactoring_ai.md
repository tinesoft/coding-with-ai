<!-- .slide -->

# Code Refactoring with AI

## **AI-Assisted Refactoring**

### **What AI Can Help With**
- **Code structure improvements**: Extract functions, reduce complexity
- **Performance optimization**: Identify bottlenecks and suggest improvements
- **Pattern recognition**: Suggest design patterns and best practices
- **Style consistency**: Apply coding standards and conventions

### **Common Refactoring Tasks**
- **Extract methods** from long functions
- **Simplify complex conditionals**
- **Remove code duplication**
- **Improve variable naming**
- **Add type annotations** and documentation

##--##

<!-- .slide: class="with-code" -->

# Refactoring Examples

## **Before: Complex Function**
```typescript
function processUser(user) {
    if (user && user.email && user.email.includes('@')) {
        if (user.age >= 18) {
            if (user.status === 'active') {
                return {
                    id: user.id,
                    email: user.email.toLowerCase(),
                    name: user.firstName + ' ' + user.lastName,
                    isAdult: true,
                    canAccess: true
                };
            }
        }
    }
    return null;
}
```

## **After: AI-Refactored**
```typescript
interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
    status: 'active' | 'inactive';
}

interface ProcessedUser {
    id: string;
    email: string;
    name: string;
    isAdult: boolean;
    canAccess: boolean;
}

function isValidUser(user: User): boolean {
    return Boolean(user?.email?.includes('@'));
}

function isEligibleUser(user: User): boolean {
    return user.age >= 18 && user.status === 'active';
}

function processUser(user: User): ProcessedUser | null {
    if (!isValidUser(user) || !isEligibleUser(user)) {
        return null;
    }

    return {
        id: user.id,
        email: user.email.toLowerCase(),
        name: `${user.firstName} ${user.lastName}`,
        isAdult: true,
        canAccess: true
    };
}
```

Notes:
AI refactoring tools excel at identifying code smells and suggesting improvements. They can extract functions, improve readability, add type safety, and apply best practices consistently across large codebases.
