var teclado = require("prompt-sync")();
var x = 1;
var contaAte = teclado(parseFloat)("Digite o valor do contador:");
while (x <= contaAte) {
    console.log("contador est\u00E1 em ".concat(x));
    x++;
}
