export class ContaCorrente {
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
  