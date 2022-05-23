'use strict'

function BinarioADecimal(num) {
  // tu codigo aca


  let tam = num.length;
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
      sum = sum + num[i] * 2 ** (tam - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = "";
  while (num > 0) {
      let resto = num % 2;
      bin = resto + bin;
      num = Math.floor(num / 2);

  }
  return bin;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}