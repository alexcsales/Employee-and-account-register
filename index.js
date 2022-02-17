class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  #saldo = 0;

  sacar(valor) {
    if (this.#saldo >= valor)
    this.#saldo -= valor;
    console.log("valor sacado: " + valor,"||saldo atual: " + this.#saldo);

  }

  depositar(valor) {
    if (valor > 0)
    this.#saldo += valor;
    console.log("valor depositado: " + valor,"||saldo atual: " + this.#saldo);
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);

contaCorrenteRicardo.sacar(50);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
