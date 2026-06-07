class Pessoa {
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar(){
        console.log("Oi meu nome é "+ this.nome+ " e tenho "+ this.idade+ " anos");
    }

    fazerAniversario(){
        this.idade++;
    }
}

const pessoa = new Pessoa("dodes", 12, "dodesdodes@gmail.com");
pessoa.apresentar();
pessoa.fazerAniversario();
pessoa.apresentar();

class ContaBancaria {
    constructor(numero, titular, saldo){
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    exibirSaldo(){
        console.log("Saldo atual R$ " + this.saldo);
    }
}