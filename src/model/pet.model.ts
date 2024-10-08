export enum Porte {
    Pequeno = 'P',
    Medio = 'M',
    Grande = 'G'
}

export class Pet {
    id: number;
    nome: string;
    idade: string;
    genero: 'macho' | 'fêmea';
    raca: string;
    porte: Porte;
    castrado: boolean;
    temperamento: string;
    adotado: boolean;
    foto: string;

    constructor(id: number, nome: string, idade: string, genero: 'macho' | 'fêmea', raca: string, porte: Porte, castrado: boolean, temperamento: string, adotado: boolean, foto: string) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.raca = raca;
        this.porte = porte;
        this.castrado = castrado;
        this.temperamento = temperamento;
        this.adotado = adotado;
        this.foto = foto;
    }
}