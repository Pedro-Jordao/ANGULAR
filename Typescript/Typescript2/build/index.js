"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "João";
let idade = 30;
let altura = 1.75;
//tipos especiais : null, undefined, 
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//tipo objeto sem previsibilidade
let produto = {
    name: "Felipe",
    cidade: "sp",
    idade: 30
};
let meuProduto = {
    nome: "tênis",
    preco: 89.99,
    unidades: 5
};
/**
 * arrays
 */
let dados = ["João", "Maria", "José"];
let dados2 = ["João", "Maria", "José"];
let infos = ["João", 30, "Maria", 25];
/**
 * Tuplas
 */
let boleto = ["agua conta", 199.90, 5878743874]; //deve-se respeitar a ordem e o tipo de dados
/**
 * Datas
 */
let aniversario = new Date("2025-03-22 05:00:00");
// console.log(aniversario.toString());
/**
 * Funções
 */
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(10, 20);
// console.log(soma);
function callToPhone(phone) {
    return phone;
}
// console.log(callToPhone(1199999999));
/**
 * Funções assíncronas
 */
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Felipe";
    });
}
;
const bot = {
    id: 1,
    name: "megatron"
};
//classes
/**
 * data modifiers
 * public: acessível de qualquer lugar
 * private: acessível apenas dentro da classe
 * protected: acessível apenas dentro da classe e de classes filhas
 */
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
const p1 = new Character("Ryu", 10, 98);
// p1.name;  
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magician("Gandalf", 10, 98, 100);
// console.log(p2);
//generics
function concatArray(...items) {
    return new Array().concat(...items);
}
;
const numArray = concatArray(1, 5, 3);
const stgArray = concatArray("PHzin", "goku", "Vegeta");
numArray.push(10);
stgArray.push("Bulma");
// console.log(numArray); 
// console.log(stgArray);
let dado = "";
// console.log(dado);
//decorators
function ExibirNome(target) {
    console.log(target);
}
// @ExibirNome
class Funcionario {
}
// @ExibirNome
class Quincas {
}
//class decorators
function apiVersion(version) {
    return (target) => {
        Object.assign;
    };
}
