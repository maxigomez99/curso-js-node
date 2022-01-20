// let arreglo= [1,2,3,4,5,6,'hola','que onda'];

// console.log('el tamanio del arreglo es: '+arreglo.length);
// arreglo.forEach((elemento)=> console.log(elemento));



// son mutables eso quiere decir que te modifican el array
// push() argrega elemento a array
// shift() saca el primer elemento de un array y si lo asignas a una variable te devuelve el primer elemento.
// pop() elimina el ultimo elemento de un array y si lo asignas a una variable te devuelve el ultimo elemento.



// map
var estudiantes = ['maxi', 'emi', 'javier', 'MARTIN'];
var asistencia = estudiantes.map((nombre) => {
    return{
        nombre: nombre,
        asistencia: false
    }
})
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var estudiantes = ['maxi', 'emi', 'javier', 'MARTIN'];
var asistencia = estudiantes.map((nombre) => `${nombre}. `)  // se usa barra invertida esta en el esc
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

// MAP PARTE 2
var productos=[
    {nombre: 'camisetas', precio:15},
    {nombre: 'zapatillas', precio:20},
    {nombre: 'pantalon', precio : 25}
]

var productosImpuesto = productos.map((producto)=>{
   
    return {
        ...producto,
        impuesto: .12
    }
})

var precios = productos.map((producto) => producto.precio)
console.log(productos);
console.log(productosImpuesto);
console.log(precios);

// filter
var estudiantes =[
    {nombre: 'ada', edad: 20, matriculado: true},
    {nombre: 'katrina', edad: 19, matriculado: true},
    {nombre: 'jorge', edad: 22, matriculado: false},
    {nombre: 'gabriel', edad: 21, matriculado: true},
    {nombre: 'raul', edad: 19, matriculado: false},
]

// var filtrado = estudiantes.filter((estudiantes)=> estudiantes.edad>=21);
var filtrado = estudiantes.filter((estudiantes)=> estudiantes.edad>=21 && estudiantes.matriculado);
console.log(estudiantes);
console.log(filtrado);

// reduce
var calificaciones = [3,5,9,10,10];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
console.log(calificaciones);
console.log(suma);
console.log(suma/calificaciones.length);

var edades =[21,21,23,43,21,43,18,18,23,23]
// salida
// {
//     21: 3,
//     43: 2,
// }
var resultado = edades.reduce((acumulador, edad)=>{
    if(!acumulador[edad]){
        acumulador[edad]=1
    }else{
        acumulador[edad] += 1
    }
    return acumulador
}, {})
console.log(edades);
console.log(resultado);

var ventas = [
    {nombre: 'camiseta', precio: 15, totalVendido: 10},
    {nombre: 'zapatilla', precio: 150, totalVendido: 8},
    {nombre: 'pantalon', precio: 20, totalVendido: 30},
]
var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = totalVentas;
    return acumulador;
}, {})
console.log(ventas);
console.log(resultado);

var estudiantes =[
    {nombre: 'ada', edad: 20, matriculado: true},
    {nombre: 'katrina', edad: 19, matriculado: true},
    {nombre: 'jorge', edad: 22, matriculado: false},
    {nombre: 'gabriel', edad: 21, matriculado: true},
    {nombre: 'raul', edad: 19, matriculado: false},
];
var resultado = estudiantes
.map((estudiante) => estudiante.matriculado)
.reduce((acumulador, item)=> {
    if (item) {
        acumulador.matriculado +=1
    }else{
        acumulador.noMatriculado +=1
    }
    return acumulador;
},{matriculado: 0, noMatriculado: 0})
console.log(estudiantes);
console.log(resultado);

// some - every//////// some si alguno de los elementos es verdadero nos retorna true /// every nos devuelve true si todos los elemento son verdaderos

// some
// var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeros = [1,3,5,7,9]
var resultado = numeros.some((numero) => numero %2 === 0);
console.log(resultado);

// every
var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.every((numero) => numero %2 === 0);
console.log(resultado);

// find - findIndex
// find devuelve el primer valor que encuentra
var clientes = [
    {id: 1, nombre: 'ada'},
    {id: 2, nombre: 'katrina'},
    {id: 3, nombre: 'dayana'},
    {id: 4, nombre: 'pamela'},
    {id: 5, nombre: 'michele'},
]
var cliente = clientes.find((cliente) => cliente.id ===1);
var filter = clientes.filter((cliente) => cliente.id ===1);
console.log(clientes);
console.log(cliente);
console.log(filter);

// findIndex sirve para buscar la posicion
var clientes = [
    {id: 1, nombre: 'ada'},
    {id: 2, nombre: 'katrina'},
    {id: 3, nombre: 'dayana'},
    {id: 4, nombre: 'pamela'},
    {id: 5, nombre: 'michele'},
]
var posicion = clientes.findIndex((cliente)=> cliente.id === 2);
console.log(posicion);
console.log(clientes[posicion]);

// includes
var mascotas = ['perro', 'gato','conejo'];
var resultado = mascotas.includes ('gato')
console.log(resultado);

var buscador = (parametro) => {
    let clientes = [
        {id: 1, nombre: 'ada'},
        {id: 2, nombre: 'katrina'},
        {id: 3, nombre: 'dayana'},
        {id: 4, nombre: 'pamela'},
        {id: 5, nombre: 'michele'},
    ]

    return clientes.filter((cliente)=> cliente.nombre.includes(parametro))
}
console.log(buscador('na'));

// join
var elementos = ['aire', 'fuego', 'agua'];
var resultado = elementos.join('--');
console.log(resultado);

var clientes = [
    {id: 1, nombre: 'ada'},
    {id: 2, nombre: 'katrina'},
    {id: 3, nombre: 'dayana'},
    {id: 4, nombre: 'pamela'},
    {id: 5, nombre: 'michele'},
]
// console.log(clientes.join());