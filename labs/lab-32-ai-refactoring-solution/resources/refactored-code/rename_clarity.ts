/**
 * Refactored Code: Rename for Clarity - SOLUTION
 * 
 * This demonstrates proper naming conventions for readability.
 * 
 * REFACTORING APPLIED: Rename for Clarity
 * - Replaced all cryptic single-letter names with descriptive ones
 * - Function names are verb phrases describing actions
 * - Variable names clearly indicate their purpose
 * - Type definitions use meaningful names
 */

type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  status: string;
};

function calculateActiveItemsTotal(items: Item[]): number {
  const activeItems = items.filter(item => item.status === 'ACTIVE');
  let total = 0;
  for (let i = 0; i < activeItems.length; i++) {
    total += activeItems[i].price * activeItems[i].quantity;
  }
  return total;
}

function processItemsWithDiscount(items: Item[]): Item[] {
  const processedItems: Item[] = [];
  
  for (let i = 0; i < items.length; i++) {
    if (items[i].quantity > 0) {
      const itemCopy = { ...items[i] };
      
      // Apply 10% discount for bulk orders (10+ items)
      if (items[i].quantity >= 10) {
        itemCopy.price = itemCopy.price * 0.9;
      }
      
      processedItems.push(itemCopy);
    }
  }
  
  return processedItems;
}

function formatItemForDisplay(item: Item): string {
  const lineTotal = item.price * item.quantity;
  return `${item.id}: ${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${lineTotal.toFixed(2)}`;
}

function calculateAveragePrice(items: Item[]): number {
  if (items.length === 0) return 0;
  
  let sumOfPrices = 0;
  for (let i = 0; i < items.length; i++) {
    sumOfPrices += items[i].price;
  }
  
  return sumOfPrices / items.length;
}

// Test cases
function runTests(): void {
  console.log('=== Testing Refactored Code ===\n');
  
  const testData: Item[] = [
    { id: 1, name: 'Widget', price: 10.00, quantity: 5, status: 'ACTIVE' },
    { id: 2, name: 'Gadget', price: 25.00, quantity: 0, status: 'INACTIVE' },
    { id: 3, name: 'Doohickey', price: 15.00, quantity: 12, status: 'ACTIVE' },
    { id: 4, name: 'Thingamajig', price: 8.00, quantity: 3, status: 'ACTIVE' }
  ];
  
  console.log('Data:', testData);
  console.log('\nTotal for active items:', calculateActiveItemsTotal(testData));
  console.log('Average price:', calculateAveragePrice(testData).toFixed(2));
  console.log('\nProcessed items with discounts:');
  processItemsWithDiscount(testData).forEach(item => console.log(formatItemForDisplay(item)));
}

runTests();

export { calculateActiveItemsTotal, processItemsWithDiscount, formatItemForDisplay, calculateAveragePrice, Item };
