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

class Produto {
    static totalProdutos = 0;

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;

        Produto.totalProdutos++;
    }

    calcularValorEstoque() {
        return this.preco * this.quantidade;
    }

    static obterTotal() {
        return Produto.totalProdutos;
    }
}

const p1 = new Produto("Mouse", 50, 10);
const p2 = new Produto("Teclado", 100, 5);

console.log(p1.calcularValorEstoque());
console.log(Produto.obterTotal());

class Temperatura {
    #celsius;

    constructor(celsius) {
        this.#celsius = celsius;
    }

    get celsius() {
        return this.#celsius;
    }

    set celsius(valor) {
        this.#celsius = valor;
    }

    get fahrenheit() {
        return (this.#celsius * 9/5) + 32;
    }

    get kelvin() {
        return this.#celsius + 273.15;
    }
}

const temp = new Temperatura(25);
console.log(`Celsius: ${temp.celsius}`);
console.log(`Fahrenheit: ${temp.fahrenheit}`);
console.log(`Kelvin: ${temp.kelvin}`);

class Usuario {
    #senha;

    constructor(nome, senha) {
        this.nome = nome;
        this.#senha = senha;
    }

    autenticar(senha) {
        return senha == this.#senha;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (senhaAtual == this.#senha) {
            this.#senha = novaSenha;
            console.log("Senha alterada com sucesso!");
        } else {
            console.log("Senha atual incorreta!");
        }
    }
}

const usuario = new Usuario("Julia", "1234");
console.log(usuario.autenticar("1234"));
usuario.alterarSenha("1234", "abcd");
console.log(usuario.autenticar("abcd"));