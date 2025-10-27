/**
 * Legacy Code: Modernize Syntax Exercise
 * 
 * This is old ES5 JavaScript code that can be modernized to ES6+.
 * Use GitHub Copilot to update syntax to modern standards.
 */

// PROBLEM: Using var, old function syntax, for loops, concatenation

var users = [
  { id: 1, name: 'Alice', age: 28, active: true, department: 'Engineering' },
  { id: 2, name: 'Bob', age: 35, active: false, department: 'Sales' },
  { id: 3, name: 'Charlie', age: 42, active: true, department: 'Engineering' },
  { id: 4, name: 'Diana', age: 31, active: true, department: 'Marketing' },
  { id: 5, name: 'Eve', age: 29, active: false, department: 'Engineering' }
];

// Old function declaration
function getActiveUsers(userList) {
  var activeUsers = [];
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].active === true) {
      activeUsers.push(userList[i]);
    }
  }
  return activeUsers;
}

// Old function with string concatenation
function formatUser(user) {
  return 'User: ' + user.name + ' (ID: ' + user.id + ') - Age: ' + user.age;
}

// Old function with for loop and mutation
function getUsersByDepartment(userList, dept) {
  var result = [];
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].department === dept) {
      result.push(userList[i]);
    }
  }
  return result;
}

// Old function with nested loops
function getAverageAgeByDepartment(userList) {
  var departments = [];
  
  // Get unique departments
  for (var i = 0; i < userList.length; i++) {
    var found = false;
    for (var j = 0; j < departments.length; j++) {
      if (departments[j] === userList[i].department) {
        found = true;
        break;
      }
    }
    if (!found) {
      departments.push(userList[i].department);
    }
  }
  
  // Calculate averages
  var result = {};
  for (var i = 0; i < departments.length; i++) {
    var dept = departments[i];
    var deptUsers = [];
    for (var j = 0; j < userList.length; j++) {
      if (userList[j].department === dept) {
        deptUsers.push(userList[j]);
      }
    }
    
    var sum = 0;
    for (var k = 0; k < deptUsers.length; k++) {
      sum += deptUsers[k].age;
    }
    result[dept] = sum / deptUsers.length;
  }
  
  return result;
}

// Old function with callback
function processUsers(userList, callback) {
  var processed = [];
  for (var i = 0; i < userList.length; i++) {
    processed.push(callback(userList[i]));
  }
  return processed;
}

// Test cases
function runTests() {
  console.log('=== Testing Old ES5 Code ===\n');
  
  console.log('Active users:');
  var active = getActiveUsers(users);
  for (var i = 0; i < active.length; i++) {
    console.log('- ' + formatUser(active[i]));
  }
  
  console.log('\nEngineering department:');
  var engineers = getUsersByDepartment(users, 'Engineering');
  for (var i = 0; i < engineers.length; i++) {
    console.log('- ' + engineers[i].name);
  }
  
  console.log('\nAverage age by department:');
  var avgAges = getAverageAgeByDepartment(users);
  for (var dept in avgAges) {
    console.log('- ' + dept + ': ' + avgAges[dept].toFixed(1) + ' years');
  }
  
  console.log('\nProcessed user names:');
  var names = processUsers(users, function(user) {
    return user.name.toUpperCase();
  });
  console.log(names.join(', '));
}

runTests();
