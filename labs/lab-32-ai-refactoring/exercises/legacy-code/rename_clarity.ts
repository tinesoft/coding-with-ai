/**
 * Legacy Code: Rename for Clarity Exercise
 * 
 * This code has cryptic variable and function names.
 * Use GitHub Copilot to suggest better, more descriptive names.
 */

type Item = {
  i: number;
  n: string;
  p: number;
  q: number;
  s: string;
};

function calc(d: Item[]): number {
  let x = d.filter(i => i.s === 'A');
  let y = 0;
  for (let i = 0; i < x.length; i++) {
    y += x[i].p * x[i].q;
  }
  return y;
}

function proc(d: Item[]): Item[] {
  let r: Item[] = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i].q > 0) {
      let t = { ...d[i] };
      if (d[i].q >= 10) {
        t.p = t.p * 0.9; // Apply 10% discount
      }
      r.push(t);
    }
  }
  return r;
}

function fmt(i: Item): string {
  return `${i.i}: ${i.n} - $${i.p.toFixed(2)} x ${i.q} = $${(i.p * i.q).toFixed(2)}`;
}

function getAvg(d: Item[]): number {
  if (d.length === 0) return 0;
  let s = 0;
  for (let i = 0; i < d.length; i++) {
    s += d[i].p;
  }
  return s / d.length;
}

// Test cases
function runTests(): void {
  console.log('=== Testing Cryptic Code ===\n');
  
  const testData: Item[] = [
    { i: 1, n: 'Widget', p: 10.00, q: 5, s: 'A' },
    { i: 2, n: 'Gadget', p: 25.00, q: 0, s: 'I' },
    { i: 3, n: 'Doohickey', p: 15.00, q: 12, s: 'A' },
    { i: 4, n: 'Thingamajig', p: 8.00, q: 3, s: 'A' }
  ];
  
  console.log('Data:', testData);
  console.log('\nTotal for active items:', calc(testData));
  console.log('Average price:', getAvg(testData));
  console.log('\nProcessed items:');
  proc(testData).forEach(item => console.log(fmt(item)));
}

runTests();

export { calc, proc, fmt, getAvg, Item };
