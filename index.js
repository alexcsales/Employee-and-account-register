import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1 = new ContaCorrente(1001, cliente1);

const cliente2 = new Cliente("Alice", 88822233309);
const conta2 = new ContaCorrente(102, cliente2);

console.log(cliente1);
conta1.depositar(500);
conta1.transferir(200,conta2);

console.log(cliente2);
conta2.sacar(100);
conta2.transferir(50,conta1);

console.log(conta1.saldo)
console.log(conta2.saldo)
