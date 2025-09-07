# Lab 04: AI Debugging & Refactoring

## Objectives
- Learn to use AI for debugging complex code issues
- Practice AI-assisted code refactoring techniques
- Master AI-powered code analysis and optimization
- Understand AI's role in maintaining legacy codebases

## Prerequisites
- Completed Labs 01-03
- Understanding of debugging concepts
- Basic knowledge of code smells and refactoring patterns

## Instructions

### Part 1: AI-Assisted Debugging (20 minutes)

#### Task 1.1: Bug Detection and Analysis
You've been given a buggy e-commerce cart system. Use AI to identify and fix the issues:

```javascript
// BUGGY CODE - Use AI to identify and fix issues
class ShoppingCart {
    constructor() {
        this.items = [];
        this.discountRate = 0;
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity
            });
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    updateQuantity(productId, newQuantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
        }
    }

    applyDiscount(percentage) {
        this.discountRate = percentage;
    }

    calculateTotal() {
        let total = 0;
        for (let item of this.items) {
            total += item.price * item.quantity;
        }
        return total - (total * this.discountRate);
    }

    getItemCount() {
        return this.items.length;
    }

    checkout() {
        if (this.items.length === 0) {
            throw new Error("Cart is empty");
        }
        
        const total = this.calculateTotal();
        this.items = [];
        this.discountRate = 0;
        
        return {
            success: true,
            total: total
        };
    }
}

// Test case that should work but doesn't
const cart = new ShoppingCart();
cart.addItem({ id: 1, name: "Laptop", price: 999.99 }, 1);
cart.addItem({ id: 2, name: "Mouse", price: 29.99 }, 2);
cart.applyDiscount(15); // 15% discount
console.log("Total items:", cart.getItemCount()); // Should be 2, but returns what?
console.log("Total price:", cart.calculateTotal()); // What's the actual result?
```

**AI Prompts to use:**
1. "Analyze this shopping cart code for bugs and potential issues"
2. "The discount calculation seems wrong, what's the issue?"
3. "Fix the getItemCount method to return total quantity, not unique items"

#### Task 1.2: Runtime Error Debugging
Debug this async function that's causing runtime errors:

```javascript
// BUGGY ASYNC CODE
async function processUserOrders(userId) {
    try {
        const user = await fetchUser(userId);
        const orders = await fetchUserOrders(user.id);
        
        const processedOrders = orders.map(async (order) => {
            const orderDetails = await fetchOrderDetails(order.id);
            const shippingInfo = await calculateShipping(order.items);
            
            return {
                ...order,
                details: orderDetails,
                shipping: shippingInfo,
                total: order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
            };
        });

        return processedOrders;
    } catch (error) {
        console.log("Error processing orders:", error);
        return null;
    }
}

// Mock functions for testing
async function fetchUser(id) {
    if (!id) throw new Error("User ID required");
    return { id, name: "John Doe" };
}

async function fetchUserOrders(userId) {
    return [
        { id: 1, items: [{ price: 10, quantity: 2 }] },
        { id: 2, items: [{ price: 15, quantity: 1 }] }
    ];
}

async function fetchOrderDetails(orderId) {
    return { orderId, status: "confirmed" };
}

async function calculateShipping(items) {
    return { cost: 5.99, method: "standard" };
}

// Test
processUserOrders(123).then(result => console.log("Result:", result));
```

**AI Debugging Tasks:**
1. "Identify the async/await issue in this code"
2. "Fix the Promise.all problem in the map function"
3. "Improve error handling and add proper logging"

### Part 2: Code Refactoring with AI (25 minutes)

#### Task 2.1: Legacy Code Modernization
Refactor this legacy JavaScript code using AI assistance:

```javascript
// LEGACY CODE TO REFACTOR
var UserManager = function() {
    this.users = [];
    this.currentUser = null;
    this.permissions = {};
};

UserManager.prototype.login = function(username, password, callback) {
    var self = this;
    
    // Simulate API call
    setTimeout(function() {
        var user = null;
        for (var i = 0; i < self.users.length; i++) {
            if (self.users[i].username === username && self.users[i].password === password) {
                user = self.users[i];
                break;
            }
        }
        
        if (user) {
            self.currentUser = user;
            self.loadPermissions(user.role, function(perms) {
                self.permissions = perms;
                callback(null, user);
            });
        } else {
            callback(new Error("Invalid credentials"));
        }
    }, 100);
};

UserManager.prototype.loadPermissions = function(role, callback) {
    var permissions = {};
    
    if (role === 'admin') {
        permissions = { read: true, write: true, delete: true };
    } else if (role === 'user') {
        permissions = { read: true, write: false, delete: false };
    } else {
        permissions = { read: false, write: false, delete: false };
    }
    
    setTimeout(function() {
        callback(permissions);
    }, 50);
};

UserManager.prototype.hasPermission = function(action) {
    return this.permissions[action] || false;
};

UserManager.prototype.addUser = function(userData) {
    userData.id = this.users.length + 1;
    this.users.push(userData);
};
```

**Refactoring Goals:**
1. Convert to ES6+ class syntax
2. Replace callbacks with Promises/async-await
3. Add proper error handling and validation
4. Implement better data structures and methods

#### Task 2.2: Architecture Improvement
Refactor this monolithic function into a clean, modular architecture:

```javascript
// MONOLITHIC FUNCTION TO REFACTOR
function processCustomerOrder(orderData) {
    // Validation
    if (!orderData.customerId || !orderData.items || orderData.items.length === 0) {
        return { error: "Invalid order data" };
    }

    // Calculate totals
    let subtotal = 0;
    for (let item of orderData.items) {
        if (!item.productId || !item.quantity || item.quantity <= 0) {
            return { error: "Invalid item data" };
        }
        subtotal += item.price * item.quantity;
    }

    // Apply discounts
    let discount = 0;
    if (orderData.promoCode) {
        if (orderData.promoCode === "SAVE10") {
            discount = subtotal * 0.1;
        } else if (orderData.promoCode === "SAVE20") {
            discount = subtotal * 0.2;
        }
    }

    // Calculate tax
    const taxRate = 0.08;
    const tax = (subtotal - discount) * taxRate;

    // Calculate shipping
    let shipping = 0;
    if (subtotal < 50) {
        shipping = 5.99;
    }

    const total = subtotal - discount + tax + shipping;

    // Create order record
    const order = {
        id: Date.now(),
        customerId: orderData.customerId,
        items: orderData.items,
        subtotal: subtotal,
        discount: discount,
        tax: tax,
        shipping: shipping,
        total: total,
        status: "pending",
        createdAt: new Date()
    };

    // Save to database (mock)
    console.log("Saving order:", order);

    // Send confirmation email (mock)
    console.log("Sending confirmation email to customer");

    // Update inventory (mock)
    for (let item of orderData.items) {
        console.log(`Updating inventory for product ${item.productId}: -${item.quantity}`);
    }

    return { success: true, order: order };
}
```

### Part 3: Code Analysis and Optimization (15 minutes)

#### Task 3.1: Performance Analysis
Use AI to analyze and optimize this performance-critical function:

```javascript
// PERFORMANCE BOTTLENECK
function analyzeCustomerData(customers, orders, products) {
    const results = [];
    
    for (let customer of customers) {
        const customerOrders = orders.filter(order => order.customerId === customer.id);
        
        let totalSpent = 0;
        let productsPurchased = [];
        
        for (let order of customerOrders) {
            for (let item of order.items) {
                const product = products.find(p => p.id === item.productId);
                if (product) {
                    totalSpent += item.quantity * product.price;
                    
                    const existingProduct = productsPurchased.find(p => p.id === product.id);
                    if (existingProduct) {
                        existingProduct.quantity += item.quantity;
                    } else {
                        productsPurchased.push({
                            id: product.id,
                            name: product.name,
                            quantity: item.quantity
                        });
                    }
                }
            }
        }
        
        // Find favorite product
        let favoriteProduct = null;
        let maxQuantity = 0;
        for (let product of productsPurchased) {
            if (product.quantity > maxQuantity) {
                maxQuantity = product.quantity;
                favoriteProduct = product;
            }
        }
        
        results.push({
            customerId: customer.id,
            name: customer.name,
            totalSpent: totalSpent,
            orderCount: customerOrders.length,
            favoriteProduct: favoriteProduct,
            productsPurchased: productsPurchased.length
        });
    }
    
    return results;
}
```

**AI Analysis Tasks:**
1. "Identify performance bottlenecks in this customer analytics function"
2. "Optimize the nested loops and repeated array searches"
3. "Suggest data structure improvements for better performance"

## Hints and Tips

### AI Debugging Strategies
1. **Provide context**: Give AI the error messages and expected behavior
2. **Ask specific questions**: "What's wrong with this async function?"
3. **Request step-by-step analysis**: "Trace through this code execution"
4. **Test AI suggestions**: Always validate fixes thoroughly

### Effective Refactoring Prompts
1. **Specify goals**: "Convert to modern ES6+ syntax"
2. **Mention patterns**: "Apply dependency injection pattern"
3. **Request explanations**: "Explain why this refactoring improves the code"
4. **Ask for alternatives**: "What other refactoring approaches exist?"

## Evaluation Criteria
- **Bug identification**: Correctly identify all issues in buggy code
- **Fix quality**: Implement proper, working solutions
- **Refactoring effectiveness**: Improve code maintainability and readability
- **Performance improvements**: Optimize bottlenecks significantly
- **AI utilization**: Demonstrate effective AI collaboration

## Deliverables
- Fixed and tested shopping cart implementation
- Debugged async order processing function
- Modernized user manager class
- Refactored order processing architecture
- Optimized customer analytics function
- Documentation of AI debugging and refactoring strategies used

## Time Allocation
- Part 1 (Debugging): 20 minutes
- Part 2 (Refactoring): 25 minutes
- Part 3 (Optimization): 15 minutes
- **Total: 60 minutes**

## Next Steps
This lab prepares you for advanced AI workflows and team collaboration patterns in Lab 05.
