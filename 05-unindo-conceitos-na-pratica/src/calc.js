module.exports = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => b === 0 ? 'Não é possível divisão por zero' : a / b
}
