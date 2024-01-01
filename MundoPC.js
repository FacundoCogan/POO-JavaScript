class DispositivoEntrada{
    constructor(te, m){
        this._tipoEntrada=te;
        this._marca=m;
    }

    get tipoEntrada()
    {
        return this._tipoEntrada;
    }

    set tipoEntrada(te)
    {
        this._tipoEntrada=te;
    }

    get marca()
    {
        return this._marca;
    }

    set marca(m)
    {
        this._marca=m;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones=0;

    constructor(te, m)
    {
        super(te, m);
        this._idRaton=++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados=0;

    constructor(te, m){
        super(te, m);
        this._idTeclado=++Teclado.contadorTeclados;
    }

    get idTeclado()
    {
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this.idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor{
    static contadorMonitores=0;

    constructor(m, t){
        this._idMonitor=++Monitor.contadorMonitores;
        this._marca=m;
        this._tamano=t;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamano: ${this._tamano}]`;
    }
}

class Computadora{
    static contadorComputadoras=0;

    constructor(n, Monitor, Raton, Teclado){
        this._idComputadora=++Computadora.contadorComputadoras;
        this._nombre=n;
        this._monitor=Monitor;
        this._raton=Raton;
        this._teclado=Teclado;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden{
    static contadorOrdenes=0;

    constructor()
    {
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(Computadora)
    {
        this._computadoras.push(Computadora);
    }

    mostrarOrden(){
        let computadorasOrden=" ";
        for(let Computadora of this._computadoras)
        {
            computadorasOrden+=`\n${Computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let Raton1=new Raton ("USB", "HP");
console.log(Raton1.toString());

let Raton2 = new Raton("Bluetooth", "Dell");
Raton2.marca="HP";
console.log(Raton2.toString());

let Teclado1=new Teclado("Bluetooth", "MSI");
let Teclado2=new Teclado("USB","Acer");
console.log(Teclado1.toString());
console.log(Teclado2.toString());

let Monitor1= new Monitor("HP", 15);
let Monitor2= new Monitor("Dell", 27);
console.log(Monitor1.toString());
console.log(Monitor2.toString());

let Computadora1=new Computadora("HP", Monitor1, Raton1, Teclado1);
console.log(`${Computadora1}`);
let Computadora2=new Computadora("Armada", Monitor2, Raton2, Teclado2);
console.log(`${Computadora2}`);

let Orden1= new Orden();
Orden1.agregarComputadora(Computadora1);
Orden1.agregarComputadora(Computadora2);
Orden1.agregarComputadora(Computadora2);
Orden1.mostrarOrden();

let Orden2=new Orden();
Orden2.agregarComputadora(Computadora2);
Orden2.agregarComputadora(Computadora1);
Orden2.mostrarOrden();