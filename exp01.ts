console.log();// LImpa o prompt command
const teclado = require('prompt-sync')(); // teclado
let ola: string = teclado(`Digite uma congratulação: `);
let nome: string = teclado(`Digite seu nome: `);
let passatempo: string = teclado(`Digite um passatempo`);
let diaAniversario: number = teclado(`Digite o dia aniversário: `);
let mesAniversario: string = teclado(`Digite o mês de aniversario: `);
let anoAniversario: number = teclado(`Digiteo ano de anicersário: `);

console.log(`${ola}`);
console.log(`Meu nome é ${nome}, nascida no dia ${diaAniversario},`);
console.log (`no mês ${mesAniversario} no ano de ${anoAniversario}`);
console.log(`meu atual passatempo é ${passatempo}`);



