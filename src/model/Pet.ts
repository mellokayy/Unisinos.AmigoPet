enum Porte{
    Pequeno = "p",
    Medio = "m",
    Grande = "g"
}

export class Pet {
    id: string;
    nome: string;
    idade: number;
    genero: 'macho' | 'fêmea';
    raca: string;
    porte: Porte;
    castrado: boolean;
    temperamento: string;

    constructor(id: string, nome: string, idade: number, genero: 'macho' | 'fêmea', raca: string, porte: Porte, castrado: boolean, temperamento: string) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.raca = raca;
        this.porte = porte;
        this.castrado = castrado;
        this.temperamento  = temperamento;
    }
}