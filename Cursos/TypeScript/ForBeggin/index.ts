/** Tipo de dados: Primitivos **/

let nome:string = "Felipe D. Santos";

let idade:number = 28;

let lgAtivo:boolean = true;

let bizarro: undefined = undefined;

let nada:null = null;

/** Tipos avançados ou especiais */

let myVar: string | number;
myVar = "Hello";
myVar = 10;

let varAny: any =100;
varAny = "texto";

let varUnknown: unknown = 100;
varUnknown = "Desconhecido";

let convert = varUnknown as string;

//let never:never;

const names: string[] = [];
names.push("Felipe");

const names1: readonly string[] = ["Felipe"];

const numbers = [1, 2, 3];
numbers.push(4);

let y = numbers[0];

let tupla: [number, boolean, string];
tupla = [10, true, "Felipe"];

const carro: {marca: string, modelo: string, ano:number} = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023
};

const marca = {
    marca: "Toyota"
};

carro.marca = "Ford";

const carro2: {modelo: string, motor?:number} = {
    modelo: "Uno"
};
carro2.motor = 1.0;

const nomeIdade: {[index: string]: number} = {};
nomeIdade["Felipe"] = 28;