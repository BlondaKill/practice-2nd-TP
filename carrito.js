function saludar() {
  let saludo = 'Welcome to your original SNKRS';
  alert('Welcome to your original SNKRS');
}
saludar();

const  productos= [
  { id: 1, nombre: 'purple', categoria: 'woman',  precio: 150},
  { id: 2, nombre: 'graffitti', categoria: 'woman', precio: 250},
  { id: 3, nombre: 'osiris', categoria: 'woman', precio: 250},
  { id: 4, nombre: 'black fire', categoria: 'men', precio: 150},
  { id: 5, nombre: 'multi', categoria: 'men', precio: 250},
  { id: 6, nombre: 'nirvana', categoria: 'men', precio: 250},
  { id: 7, nombre: 'laura', categoria: 'kids', precio: 150},
  { id: 8, nombre: 'mickey mouse', categoria: 'kids', precio: 250},
  { id: 9, nombre: 'johnny bravo', categoria: 'kids', precio: 250},
];

const carrito = []

function mostrarProductos(){

const catUsuario = parseInt(prompt('elige tu categoria: \n1 - women \n2 - men \n3 - kids').toLowerCase());


const prodElegido = productos.find(p=>p.id === prodUsuario);


const existe = carrito.some((p) => p.id === prodUsuario);
const prodAlCarrito = {

}

if(existe) {
  carrito.map(p=>{
    if(p.id === prodUsuario){
      p.cantidad++
    }
  })
  
}else{
  console.log(prodElegido);
  carrito.push(prodElegido);
}
calcularTotal ();
}

function cacularTotal() {
  let total = carrito.reduce((acc, el) => (acc += el.precio));
  alert(total);
}


mostrarProductos();

















/*let carro = [];

let bag = [];
 
function mostrarProductos(kids) {

  let prodUsuario = parseInt(prompt('Ingresa modelo del producto: \n1 - laura \n2 - minnie \n3 - batman'));

  console.log(prodUsuario);

  let prodElegido = kids.find((p) => p.id === prodUsuario);

  let existe = bag.some(p => p.id === prodUsuario); // true si existe el prod o false si no existe

  let prodAlBag = [{
    id: prodElegido.id,
    nombre: prodElegido.nombre,
    categoria: prodElegidoElegido.categoria,
    precio: prodElegido.precio,
    cantidad: prodElegido.cantidad
    },
]

let bag = [];*/





/*function filtrar() {

  let catUsuario = prompt('Que categoria deseas elegir?');

  let categoria = arrayDeProductos.filter(p => p.categoria === catUsuario);

}

let answer = prompt('Ingresa genero elegido: \n1-Women\n2-Men\n3-Kids');

    if (answer == '1') {
        alert('Elegiste genero Women');
    } else if (answer == '2') {
        alert('Elegiste genero Men');
    } else if (answer == '3') {
        alert('Elegiste genero Kids')
    } else if(answer != '1, 2, 3')
        alert('Genero inexistente');
    
    question = prompt('Deseas cambiar el genero? \n- y/yes\n- n/no');

     




/*
  if (seleccion == 'women') {
    let elegidosWoman = carrito.map
    (p => {
      if (p.id === prodUsuario) {
        p.cantidad++;
        p.precio = p.cantidad * prodAlCarrito.precio;
      }
    })
  } else {
    carrito.push(prodAlCarrito);
    console.log(prodElegido);

  }
  calcularTotal();
}*/

//quiere seguir comprando? puedo preg


