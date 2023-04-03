function saludar() {
  let saludo = 'Welcome to your original SNKRS';
  alert('Welcome to your original SNKRS');
}
saludar();

const  sneakers= [
  { id: 1, nombre: 'purple', categoria: 'w',  precio: 150},
  { id: 2, nombre: 'graffitti', categoria: 'w', precio: 300},
  { id: 3, nombre: 'osiris', categoria: 'w', precio: 250},
  { id: 4, nombre: 'black fire', categoria: 'm', precio: 150},
  { id: 5, nombre: 'multi', categoria: 'm', precio: 250},
  { id: 6, nombre: 'nirvana', categoria: 'm', precio: 250},
  { id: 7, nombre: 'laura', categoria: 'k', precio: 300},
  { id: 8, nombre: 'mickey mouse', categoria: 'k', precio: 150},
  { id: 9, nombre: 'johnny bravo', categoria: 'k', precio: 250},
];

const carrito = []


const catUsuario = parseInt(prompt('elige la categoria de tu modelo: \n\n1 - women \n2 - men \n3 - kids').toLowerCase());

const buscarCategoria = (catUsuario) => { 
  
  switch(catUsuario) {
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
    mensaje += 
    `${s.id} - ${s.nombre}\n`

})
console.log(mensaje);

const idProducto = parseInt(prompt('Ingresa el modelo a comprar \n\n' + mensaje + '\n\n↩️ b (para volver al menu)'));

const producto = sneakers.find(s => s.id === idProducto)




if(producto) {
  alert('elegiste modelo ' + producto.nombre  +  ' $ ' + producto.precio)
} else {
  alert('Producto inexistente')
}

let total = 0

while (sneakers != 'b'){
  switch (sneakers){
    case '1, 4, 8':
      alert('agregaste al carrito : $150');
      sumatoriaCompra (150);
      break;

    case '3, 5, 6, 9':
      alert('agregaste al carrito $250');
      sumatoriaCompra(250);
      break;

    case '2, 7':
        alert('agregaste al carrito $300');
        sumatoriaCompra(300);
        break;

    default:
      alert('precio inexistente');
      break;   
  }
  sneakers = parseInt(prompt('Ingresa el modelo a comprar \n\n' + mensaje + '\n\n↩️ b (para volver al menu)'));


}
alert('Total de su compra $' + total)



//{}
//function sumatoriaTotal(precio) {
  //total = total + precio;
//  alert('llevas gastado $ ' + total);




/*if (id.producto == 'women'){
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
calcularTotal();*/








/*const catSneakers = sneakers.filter((sneakers) => sneakers.categoriaW);
console.log(catSneakers);

while (catUsuario == '1') {
  let answer = prompt('modelos women: \n1 - purple \n2 - graffitti \n3 - osiris');
  if(answer == '1'){
    alert('elegiste el modelo purple');
} else if (answer == '2'){
  alert('elegiste el modelo graffitti');
} else if (answer == '3'){
  alert('elegiste el modelo osiris');  
} else {
  alert('categoria inexitente');
  alert()
}
}

while (catUsuario == '2') {
  let answer = prompt('modelos men: \n4 - black fire \n4 - multi \n5 - nirvana');
  if(answer == '4'){
    alert('elegiste el modelo black fire');
} else if (answer == '5'){
  alert('elegiste el modelo multi');
} else if (answer == '6'){
  alert('elegiste el modelo nirvana');  
} else {
  alert('categoria inexitente');
}
}

while (catUsuario == '3') {
  let answer = prompt('modelos kids: \n7 - laura \n8 - mickey mouse \n9 - johnny bravo');
  if(answer == '7'){
    alert('elegiste el modelo laura');
} else if (answer == '8'){
  alert('elegiste el modelo mickey mouse');
} else if (answer == '9'){
  alert('elegiste el modelo johnny bravo');  
} else {
  alert('categoria inexitente');

}
}
const catUsuario2 = prompt('queres cambiar de genero')




//const result = word.filter(word === men);


//const prodElegido = productos.find(p=>p.id === prodUsuario);


/*const existe = carrito.some((p) => p.id === prodUsuario);
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
    
    question = prompt('Deseas cambiar el genero? \n- y/yes\n- n/no');*/

     





  



