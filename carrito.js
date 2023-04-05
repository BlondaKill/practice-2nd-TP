function saludar() {
  let saludo = 'Welcome to your original SNKRS';
  alert('Welcome to your original SNKRS');
}
saludar();

const sneakers = [{
    id: 1,
    nombre: 'purple',
    categoria: 'w',
    precio: 150
  },
  {
    id: 2,
    nombre: 'graffitti',
    categoria: 'w',
    precio: 300
  },
  {
    id: 3,
    nombre: 'osiris',
    categoria: 'w',
    precio: 250
  },
  {
    id: 4,
    nombre: 'black fire',
    categoria: 'm',
    precio: 150
  },
  {
    id: 5,
    nombre: 'multi',
    categoria: 'm',
    precio: 250
  },
  {
    id: 6,
    nombre: 'nirvana',
    categoria: 'm',
    precio: 250
  },
  {
    id: 7,
    nombre: 'laura',
    categoria: 'k',
    precio: 300
  },
  {
    id: 8,
    nombre: 'mickey mouse',
    categoria: 'k',
    precio: 150
  },
  {
    id: 9,
    nombre: 'johnny bravo',
    categoria: 'k',
    precio: 250
  },
];

const carrito = []


const catUsuario = parseInt(prompt('elige la categoria de tu modelo: \n\n1 - women \n2 - men \n3 - kids').toLowerCase());

const buscarCategoria = (catUsuario) => {

  switch (catUsuario) {
    case 1:
      return 'w';


    case 2:
      return 'm';


    case 3:
      return 'k';

  }
}

const categoria = buscarCategoria(catUsuario) // devuelve a q categoria corresp

const productosFiltrados = sneakers.filter(sneakers => sneakers.categoria === categoria)
console.log(productosFiltrados)

let mensaje = ''

productosFiltrados.forEach(s => {
  mensaje += `${s.id} - ${s.nombre}\n`
})

console.log(mensaje);

const idProducto = parseInt(prompt('Ingresa el modelo a comprar \n\n' + mensaje + '\n\n↩️ b (para volver al menu)'));

const producto = sneakers.find(s => s.id === idProducto)


let total = +producto.precio;

if (sneakers) {
  alert('elegiste modelo ' + producto.nombre + ' $ ' + producto.precio)
  switch (sneakers) {
    case 's.id === 9, 5, 3, 6':
      sumatoriaCompra(250);
      break;
    case 's.id === 1, 4, 8':
      sumatoriaCompra(150);
      break;

    case 's.id === 7, 2':
      sumatoriaCompra(300);
      break;

    default:
      break;
  }


  question = prompt('Deseas seguir comprando? \n - y / yes\n - n / no');

  while (question == 'n') {
    alert ('Gracias por tu compra!');
    break;
  }
}

alert('El total de tu compra es $' + total);