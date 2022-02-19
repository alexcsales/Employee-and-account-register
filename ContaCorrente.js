export class ContaCorrente {
    agencia;
    #saldo = 0;
  
    Saldo() {
      console.log("saldo atual: " + this.#saldo)
    }
  
    sacar(valor) {
      if (this.#saldo >= valor) {
          this.#saldo -= valor;
          return valor;
      }

  }

  depositar(valor) {
      if(valor <= 0) {
          return;
      }
      this.#saldo += valor;
  }

    transferir(valor,conta) {
      const valorSacado = this.sacar(valor)
      conta.depositar(valorSacado)
      console.log("valor transferido: " + valor,"||saldo atual: " + this.#saldo);
    }
  }
  
