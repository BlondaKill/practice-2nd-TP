function saludar() {
  let saludo = 'Welcome to your original SNKRS';
  alert('Welcome to your original SNKRS');
}
saludar();

let arrayDeProductos = [{
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

let carrito = [];





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

     



function mostrarProductos(woman) {

  let prodUsuario = parseInt(prompt('Ingresa modelo del producto: \n1 - purple \n2 - graffitti \n3 - osiris'));

  console.log(prodUsuario);

  let prodElegido = woman.find((p) => p.id === prodUsuario);

  let existe = carrito.some(p => p.id === prodUsuario); // true si existe el prod o false si no existe

  let prodAlCarrito = [{
    id: prodElegido.id,
    nombre: prodElegido.nombre,
    categoria: prodElegidoElegido.categoria,
    precio: prodElegido.precio,
    cantidad: prodElegido.cantidad
    },
]

let carrito = [];
 

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