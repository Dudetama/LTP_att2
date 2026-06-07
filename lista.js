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

class Pilha {
    #itens;

    constructor() {
        this.#itens = [];
    }

    empilhar(item) {
        this.#itens.push(item);
    }

    desempilhar() {
        return this.#itens.pop();
    }

    topo() {
        return this.#itens[this.#itens.length - 1];
    }

    estaVazia() {
        return this.#itens.length == 0;
    }

    tamanho() {
        return this.#itens.length;
    }
}

const pilha = new Pilha();
pilha.empilhar(10);
pilha.empilhar(20);
pilha.empilhar(30);
console.log(pilha.topo());
console.log(pilha.tamanho());
pilha.desempilhar();
console.log(pilha.topo());
console.log(pilha.estaVazia());

class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    emitirSom() {
        console.log(`${this.nome} faz ${this.som}`);
    }
}

class Cachorro extends Animal {
    constructor(nome, som, raca) {
        super(nome, som);
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome}, da raça ${this.raca}, faz ${this.som}`);
    }
}

const cachorro1 = new Cachorro("Rex", "Au Au", "Labrador");
const cachorro2 = new Cachorro("Bolt", "Au Au", "Pastor Alemão");
cachorro1.emitirSom();
cachorro2.emitirSom();

class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    calcularSalarioTotal() {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, cargo, bonus) {
        super(nome, salario, cargo);
        this.bonus = bonus;
        this.equipe = [];
    }

    adicionarMembro(funcionario) {
        this.equipe.push(funcionario);
    }

    calcularSalarioTotal() {
        return this.salario + this.bonus;
    }
}

const gerente = new Gerente("Julia", 5000, "Gerente", 1000);
gerente.adicionarMembro("Duda");
gerente.adicionarMembro("Jolea");
console.log(gerente.equipe);
console.log(gerente.calcularSalarioTotal());

class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    calcularSalarioTotal() {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, cargo, bonus) {
        super(nome, salario, cargo);
        this.bonus = bonus;
        this.equipe = [];
    }

    adicionarMembro(funcionario) {
        this.equipe.push(funcionario);
    }

    calcularSalarioTotal() {
        return this.salario + this.bonus;
    }
}

const gerente = new Gerente("Julia", 5000, "Gerente", 1000);
gerente.adicionarMembro("Duda");
gerente.adicionarMembro("Jolea");
console.log(gerente.equipe);
console.log(gerente.calcularSalarioTotal());

class Veiculo {
    constructor(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`Velocidade: ${this.velocidade} km/h`);
    }

    frear() {
        this.velocidade -= 10;
        console.log(`Velocidade: ${this.velocidade} km/h`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, velocidade, litrosNoTanque) {
        super(marca, modelo, velocidade);
        this.litrosNoTanque = litrosNoTanque;
    }

    acelerar() {
        this.litrosNoTanque -= 1;
        super.acelerar();
    }
}

class CarroEletrico extends Veiculo {
    constructor(marca, modelo, velocidade, bateriaKwh) {
        super(marca, modelo, velocidade);
        this.bateriaKwh = bateriaKwh;
    }

    acelerar() {
        this.bateriaKwh -= 2;
        super.acelerar();
    }
}

const carro = new Carro("Fiat", "Uno", 0, 30);
const eletrico = new CarroEletrico("Tesla", "Model 3", 0, 100);
carro.acelerar();
eletrico.acelerar();

class Forma {
    calcularArea() {
        throw new Error("Método deve ser implementado.");
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}

class Retangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

class Triangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

const circulo = new Circulo(5);
const retangulo = new Retangulo(10, 4);
const triangulo = new Triangulo(8, 6);
console.log(circulo.calcularArea());
console.log(retangulo.calcularArea());
console.log(triangulo.calcularArea());

class Midia {
    constructor(titulo, ano) {
        this.titulo = titulo;
        this.ano = ano;
    }

    toString() {
        return `${this.titulo} (${this.ano})`;
    }
}

class Livro extends Midia {
    constructor(titulo, ano, autor) {
        super(titulo, ano);
        this.autor = autor;
    }

    toString() {
        return `Livro: ${this.titulo} - ${this.autor} (${this.ano})`;
    }
}

class Filme extends Midia {
    constructor(titulo, ano, diretor) {
        super(titulo, ano);
        this.diretor = diretor;
    }

    toString() {
        return `Filme: ${this.titulo} - ${this.diretor} (${this.ano})`;
    }
}

class Musica extends Midia {
    constructor(titulo, ano, artista) {
        super(titulo, ano);
        this.artista = artista;
    }

    toString() {
        return `Música: ${this.titulo} - ${this.artista} (${this.ano})`;
    }
}

const livro = new Livro("Dom Casmurro", 1899, "Machado de Assis");
const filme = new Filme("Titanic", 1997, "James Cameron");
const musica = new Musica("Evidências", 1990, "Chitãozinho e Xororó");
console.log(livro.toString());
console.log(filme.toString());
console.log(musica.toString());

class Pagamento {
    constructor(valor) {
        this.valor = valor;
    }

    processar() {
        throw new Error("Método deve ser implementado.");
    }
}

class Cartao extends Pagamento {
    processar() {
        return `Pagamento de R$${this.valor} realizado via Cartão.`;
    }
}

class Pix extends Pagamento {
    processar() {
        return `Pagamento de R$${this.valor} realizado via PIX.`;
    }
}

class Boleto extends Pagamento {
    processar() {
        return `Pagamento de R$${this.valor} realizado via Boleto.`;
    }
}

function processarTodos(pagamentos) {
    pagamentos.forEach(p => {
        console.log(p.processar());
    });
}

const pagamentos = [
    new Cartao(100),
    new Pix(250),
    new Boleto(500)
];

processarTodos(pagamentos);

class Endereco {
    constructor(rua, cidade) {
        this.rua = rua;
        this.cidade = cidade;
    }
}

class Contato {
    constructor(telefone, email) {
        this.telefone = telefone;
        this.email = email;
    }
}

class PerfilUsuario {
    constructor(nome, endereco, contato) {
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
    }

    exibirPerfil() {
        console.log("Nome:", this.nome);
        console.log("Rua:", this.endereco.rua);
        console.log("Cidade:", this.endereco.cidade);
        console.log("Telefone:", this.contato.telefone);
        console.log("E-mail:", this.contato.email);
    }
}

const endereco = new Endereco("Rua das Flores", "Nova Andradina");
const contato = new Contato("67999999999", "julia@email.com");
const usuario = new PerfilUsuario("Julia", endereco, contato);
usuario.exibirPerfil();

class Aluno {
    #nota1;
    #nota2;

    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.#nota1 = nota1;
        this.#nota2 = nota2;
    }

    get nota1() {
        return this.#nota1;
    }

    get nota2() {
        return this.#nota2;
    }

    set nota1(valor) {
        if (valor >= 0 && valor <= 10) {
            this.#nota1 = valor;
        }
    }

    set nota2(valor) {
        if (valor >= 0 && valor <= 10) {
            this.#nota2 = valor;
        }
    }

    static calcularMedia(nota1, nota2) {
        return (nota1 + nota2) / 2;
    }
}

const aluno = new Aluno("Julia", 8, 9);
console.log("Nota 1:", aluno.nota1);
console.log("Nota 2:", aluno.nota2);
console.log(
    "Média:",
    Aluno.calcularMedia(aluno.nota1, aluno.nota2)
);

class ContaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    getSaldo() {
        return this.#saldo;
    }

    static converterParaDolarCanadense(valorEmReais) {
        const cotacao = 0.25;
        return valorEmReais * cotacao;
    }
}


const conta = new ContaBancaria(1000);
conta.depositar(500);
conta.sacar(200);
console.log("Saldo:", conta.getSaldo());
console.log(
    "Em dólar canadense:",
    ContaBancaria.converterParaDolarCanadense(conta.getSaldo())
);