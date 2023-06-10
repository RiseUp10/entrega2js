supermercados=  [
    {
      nombre: 'Carrefour',
      id: 1,
      tc: 0.05,
      td: 0.15,
      mp: 0.20
		},
		{
      nombre: 'Changomas',
      id: 2,
      tc: 0.20,
      td: 0.10,
      mp: 0.25
		},
		{
      nombre: 'Coto', 
      id: 3,
      tc: 0.15,
      td: 0.20,
      mp: 0.15
		},
		{
      nombre: 'Jumbo',
      id: 4,
      tc: 0.1,
      td: 0.05,
      mp: 0.10
		}
];

function buscarDescuentos(mediosDePago)  {
  if(mediosDePago == '1') {
    supermercados.sort((a,b) => b.tc - a.tc);
    alert('El descuento en pesos que tenés pagando con tarjeta de crédito es $'+(producto*[supermercados[0].tc]));
    }
    else if(mediosDePago == '2')  {
      supermercados.sort((a,b) => b.td - a.td);
      alert('El descuento en pesos que tenés pagando con tarjeta de crédito es $'+(producto*[supermercados[0].td]));
    }
    else  {
      supermercados.sort((a,b) => b.mp - a.mp);
      alert('El descuento en pesos que tenés pagando con tarjeta de crédito es $'+(producto*[supermercados[0].mp]));
    }
      console.table(supermercados);
      alert(usuario+', el supermercado que más te conviene para comprar con tu medio de pago es '+[supermercados[0].nombre]);
}

let usuario = prompt('Bienvenido al buscador de descuentos para supermercados.\n\nDecime tu nombre');

let producto = parseInt(prompt('Qué precio tiene el producto que querés comprar?'));

let mediosDePago = prompt ('Contame qué medio de pago tenés (0 para salir)\n1 - Tarjeta de crédito.\n2 - Tarjeta de débito.\n3 - MercadoPago.');

while(mediosDePago != '0') {
  if((mediosDePago == '1') || (mediosDePago == '2') || (mediosDePago == '3')) {
    buscarDescuentos(mediosDePago);
    break;
  }
  else{
    alert('Ingresaste una opción equivocada.'); 
  }
    mediosDePago = prompt ('Contame qué medio de pago tenés (0 para salir)\n1 - Tarjeta de crédito.\n2 - Tarjeta de débito.\n3 - MercadoPago.');
};