const teclado = require (`prompt-sync`)();
let x: number =1;
let contaAte: number = teclado(parseFloat)(`Digite o valor do contador:`);

while (x <= contaAte){
    console.log(`contador está em ${x}`);
    x++;
}