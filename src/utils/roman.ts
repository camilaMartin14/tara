const NUMERALS: [number, string][] = [
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];

export function toRoman(n: number): string {
  if (n === 0) return '0';
  let value = n;
  let result = '';
  for (const [amount, symbol] of NUMERALS) {
    while (value >= amount) {
      result += symbol;
      value -= amount;
    }
  }
  return result;
}
