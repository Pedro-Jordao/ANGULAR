//tipos primitivos: boolean, number, string
let ligado : boolean = false
let nome: string = "João"
let idade: number = 30;
let altura: number = 1.75;

//tipos especiais : null, undefined, 

let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void

let retorno: void
let retornoView: any = false

//tipo objeto sem previsibilidade
let produto: object = {
    name: "Felipe",
    cidade: "sp",
    idade: 30
};

//objeto tipado com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "tênis",
    preco: 89.99,
    unidades: 5};

    /**
     * arrays
     */
let dados: string[] = ["João", "Maria", "José"];
let dados2: Array<string> = ["João", "Maria", "José"];

let infos: (string | number)[] = ["João", 30, "Maria", 25];

/**
 * Tuplas
 */
let boleto : [string, number, number] = ["agua conta", 199.90, 5878743874]; //deve-se respeitar a ordem e o tipo de dados

/**
 * Datas
 */
let aniversario: Date = new Date("2025-03-22 05:00:00");
// console.log(aniversario.toString());

/**
 * Funções
 */
function addNumber(x: number, y: number): number {
    return x + y;
}



 let soma: number = addNumber(10, 20);
// console.log(soma);

function callToPhone (phone: number | string){
    return phone;
}

// console.log(callToPhone(1199999999));


/**
 * Funções assíncronas
 */
async function getDatabase(id: number) : Promise<number | string> {
    return "Felipe";
}


//interfaces (type x interface)
type robot = {
    id: number;
    name: string;

}

interface robot2 {
    readonly id: number | string;
    name: string;
};
const bot : robot2 = {
    id: 1,
    name: "megatron"
}



//classes
/**
 * data modifiers
 * public: acessível de qualquer lugar
 * private: acessível apenas dentro da classe
 * protected: acessível apenas dentro da classe e de classes filhas
 */
class Character{
    public name?: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack(): void{
        console.log(`Attack with ${this.strength} points`);

    }
}

const p1 = new Character("Ryu", 10, 98);
// p1.name;  

class Magician extends Character{
    magicPoints: number;

    constructor(name: string, strength: number, skill: number, magicPoints: number){
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }

}
const p2 = new Magician("Gandalf", 10, 98, 100);
// console.log(p2);

//generics
function concatArray<T>(...items: T[]):T[]{
    return new Array().concat(...items);
};

const numArray = concatArray<number>(1, 5, 3);
const stgArray = concatArray<string>("PHzin", "goku", "Vegeta");

numArray.push(10);
stgArray.push("Bulma");
// console.log(numArray); 
// console.log(stgArray);


let dado: string = "";
// console.log(dado);




//decorators
function ExibirNome(target:any){
    console.log(target);
}

// @ExibirNome
class Funcionario{}

// @ExibirNome
class Quincas {}


//class decorators
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version})
    };
}

@apiVersion("1.0")
class Api{}

const api = new Api();
// console.log(api.__version);



// attribute decorators

function minLenght(lenght: number) {
    return (target:any, key: string) =>{
        let _value = target[key];
        
        const getter = () => "[play] " + _value;

        const setter = (value: string) =>{
            if (value.length < lenght){
                throw new Error (`Tamanho menor do que ${lenght}`);
            }else{
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    };
}

class Apia{
    @minLenght(3)
    name: string; 

    constructor(name: string){
        this.name = name;
    }
}

const apia = new Apia("usu");

console.log(apia.name);
