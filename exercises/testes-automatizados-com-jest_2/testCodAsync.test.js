const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
      const result = a + b;
      callback(result);
  }, 500)
}
  
test('Testando SumNumbers, soma 5 mais 10', () => {
  return SumNumbers(5, 10, (result) => {
      expect(result).toBe(15);
  });
})