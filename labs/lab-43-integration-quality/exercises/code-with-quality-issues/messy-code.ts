/**
 * E-commerce shopping cart module with significant quality issues
 * 
 * QUALITY PROBLEMS TO FIX:
 * - Poor naming (single letters, abbreviations, unclear names)
 * - Code duplication (repeated calculations, logic)
 * - Magic numbers and strings (hardcoded values)
 * - Lack of type safety (any types, missing interfaces)
 * - Poor error handling (silent failures, generic errors)
 * - Long functions with too many responsibilities
 * - Missing documentation and comments
 */

// Poor naming - what does 'p' mean? What units?
let p = 0;
let d = 0;
let t = 0;

// No interface definition, hard to understand data structure
const items: any[] = [];

// Magic numbers throughout - what is 50? What is 0.1?
function calc(amt: number) {
  if (amt > 50) {
    return amt * 0.9;
  }
  return amt;
}

// Duplicated calculation logic
function getT() {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i].price * items[i].qty;
  }
  if (sum > 50) {
    sum = sum * 0.9;
  }
  return sum;
}

// Another duplicated calculation with slightly different logic
function getFinal() {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].qty;
  }
  if (total > 50) {
    total = total * 0.9;
  }
  // Magic number 0.08 - what is this?
  total = total + total * 0.08;
  return total;
}

// Poorly named function with unclear purpose
function addThing(name: string, pr: number, q: number) {
  // No validation - what if price is negative? What if quantity is 0?
  items.push({ name: name, price: pr, qty: q });
}

// Function doing too many things
function proc() {
  let s = 0;
  for (let i = 0; i < items.length; i++) {
    s += items[i].price * items[i].qty;
  }
  
  // Hardcoded discount logic - should be configurable
  if (s > 50) {
    d = s * 0.1;
    s = s - d;
  }
  
  // Hardcoded tax rate
  t = s * 0.08;
  s = s + t;
  
  p = s;
  
  // Side effect - directly manipulating global state
  items.length = 0;
  
  return p;
}

// No error handling, unclear what "special" means
function applySpecial(code: string) {
  if (code == "SAVE10") {
    d = d + 10;
  } else if (code == "SAVE20") {
    d = d + 20;
  } else if (code == "FREESHIP") {
    // Another magic number - what is 5?
    d = d + 5;
  }
}

// Duplicated discount logic with different threshold
function getDisc() {
  let s = 0;
  for (let i = 0; i < items.length; i++) {
    s += items[i].price * items[i].qty;
  }
  if (s > 100) {
    return 20;
  } else if (s > 50) {
    return 10;
  }
  return 0;
}

// Unclear function name and no type safety
function chk(c: any) {
  if (c) {
    if (c.exp) {
      if (c.exp > Date.now()) {
        return true;
      }
    }
  }
  return false;
}

// Export all global variables and functions
export {
  p,
  d,
  t,
  items,
  calc,
  getT,
  getFinal,
  addThing,
  proc,
  applySpecial,
  getDisc,
  chk
};
