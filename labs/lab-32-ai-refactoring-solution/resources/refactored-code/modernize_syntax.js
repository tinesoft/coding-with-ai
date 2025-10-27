/**
 * Refactored Code: Modernize Syntax - SOLUTION
 * 
 * This demonstrates modern ES6+ features replacing old ES5 patterns.
 * 
 * REFACTORING APPLIED: Modernize Syntax
 * - var → const/let
 * - function → arrow functions
 * - for loops → array methods (filter, map, reduce)
 * - String concatenation → template literals
 * - Reduced from ~120 lines to ~40 lines
 */

const users = [
  { id: 1, name: 'Alice', age: 28, active: true, department: 'Engineering' },
  { id: 2, name: 'Bob', age: 35, active: false, department: 'Sales' },
  { id: 3, name: 'Charlie', age: 42, active: true, department: 'Engineering' },
  { id: 4, name: 'Diana', age: 31, active: true, department: 'Marketing' },
  { id: 5, name: 'Eve', age: 29, active: false, department: 'Engineering' }
];

// Modern: const + arrow function + filter
const getActiveUsers = (userList) => userList.filter(user => user.active);

// Modern: template literals
const formatUser = (user) => `User: ${user.name} (ID: ${user.id}) - Age: ${user.age}`;

// Modern: filter method
const getUsersByDepartment = (userList, dept) => 
  userList.filter(user => user.department === dept);

// Modern: reduce with object grouping
const getAverageAgeByDepartment = (userList) => {
  // Group users by department
  const grouped = userList.reduce((acc, user) => {
    if (!acc[user.department]) {
      acc[user.department] = [];
    }
    acc[user.department].push(user);
    return acc;
  }, {});
  
  // Calculate average age for each department
  return Object.entries(grouped).reduce((acc, [dept, deptUsers]) => {
    const averageAge = deptUsers.reduce((sum, user) => sum + user.age, 0) / deptUsers.length;
    acc[dept] = averageAge;
    return acc;
  }, {});
};

// Modern: arrow function with map
const processUsers = (userList, callback) => userList.map(callback);

// Modern: destructuring in function parameters
const getUserSummary = ({ name, age, department }) => 
  `${name}, ${age} years old, works in ${department}`;

// Modern: spread operator for object cloning
const cloneUser = (user) => ({ ...user });

// Modern: default parameters
const greetUser = (user, greeting = 'Hello') => `${greeting}, ${user.name}!`;

// Test cases
function runTests() {
  console.log('=== Testing Modernized Code ===\n');
  
  console.log('Active users:');
  getActiveUsers(users).forEach(user => console.log(`- ${formatUser(user)}`));
  
  console.log('\nEngineering department:');
  getUsersByDepartment(users, 'Engineering').forEach(user => 
    console.log(`- ${user.name}`)
  );
  
  console.log('\nAverage age by department:');
  Object.entries(getAverageAgeByDepartment(users)).forEach(([dept, avg]) =>
    console.log(`- ${dept}: ${avg.toFixed(1)} years`)
  );
  
  console.log('\nProcessed user names:');
  const names = processUsers(users, user => user.name.toUpperCase());
  console.log(names.join(', '));
  
  console.log('\nUser summaries:');
  users.slice(0, 2).forEach(user => console.log(`- ${getUserSummary(user)}`));
  
  console.log('\nGreetings:');
  console.log(greetUser(users[0]));
  console.log(greetUser(users[1], 'Welcome'));
}

runTests();
