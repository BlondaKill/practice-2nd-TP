function saludar() {
  let saludo = 'Welcome to your original SNKRS';
  alert('Welcome to your original SNKRS');
}
saludar();

let arrayDeProductosWoman = [{
    id: 1,
    nombre: 'purple',
    categoria: 'woman',
    precio: 150
  },
  {
    id: 2,
    nombre: 'graffitti',
    categoria: 'woman',
    precio: 250
  },
  {
    id: 3,
    nombre: 'osiris',
    categoria: 'woman',
    precio: 250
  },
];

let carro = [];

let arrayDeProductosMen = [{
  id: 1,
  nombre: 'purple',
  categoria: 'woman',
  precio: 150
},
{
  id: 2,
  nombre: 'graffitti',
  categoria: 'woman',
  precio: 250
},
{
  id: 3,
  nombre: 'osiris',
  categoria: 'woman',
  precio: 250
},
];

let carro = [];





function filtrar() {

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

     



function mostrarProductos(women) {

  let prodUsuario = parseInt(prompt('Ingresa modelo del producto: \n1 - purple \n2 - graffitti \n3 - osiris'));

  console.log(prodUsuario);

  let prodElegido = women.find((p) => p.id === prodUsuario);

  let existe = carrito.some(p => p.id === prodUsuario); // true si existe el prod o false si no existe

  let prodAlCarrito = [{
    id: prodElegido.id,
    nombre: prodElegido.nombre,
    categoria: prodElegidoElegido.categoria,
    precio: prodElegido.precio,
    cantidad: prodElegido.cantidad
    }
]
}

let carrito = [];

function mostrarProductos(men) {

  let prodUsuario = parseInt(prompt('Ingresa modelo del producto: \n1 - black fire \n2 - multi \n3 - nirvana'));

  console.log(prodUsuario);

  let prodElegido = men.find((p) => p.id === prodUsuario);

  let existe = carrito.some(p => p.id === prodUsuario); // true si existe el prod o false si no existe

  let prodAlCarrito = [{
    id: prodElegido.id,
    nombre: prodElegido.nombre,
    categoria: prodElegidoElegido.categoria,
    precio: prodElegido.precio,
    cantidad: prodElegido.cantidad
    },
]

let bag = [];
 
function mostrarProductos(kids) {

  let prodUsuario = parseInt(prompt('Ingresa modelo del producto: \n1 - laura \n2 - minnie \n3 - batman'));

  console.log(prodUsuario);

  let prodElegido = kids.find((p) => p.id === prodUsuario);

  let existe = carrito.some(p => p.id === prodUsuario); // true si existe el prod o false si no existe

  let prodAlBag = [{
    id: prodElegido.id,
    nombre: prodElegido.nombre,
    categoria: prodElegidoElegido.categoria,
    precio: prodElegido.precio,
    cantidad: prodElegido.cantidad
    },
]

let bag = [];
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

function cacularTotal() {
  let total = carrito.reduce((acc, el) => (acc += el.precio));
  alert(total);
}
}

mostrarProductos();

