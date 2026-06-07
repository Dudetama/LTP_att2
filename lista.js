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

const pessoa = new Pessoa("Jolea", 12, "jubsjubs@gmail.com");
pessoa.apresentar();
pessoa.fazerAniversario();
pessoa.apresentar();