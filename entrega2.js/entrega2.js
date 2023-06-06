supermercados = [
  {
    dia: 'viernes',
    ubicacion: 'CABA', 
    adheridos:  {
        carrefour:  {
            id: 1,
            tc: 0.10,
            td: 0.15,
            mp: 0.20
        },
        changomas:  {
            id: 2,
            tc: 0.20,
            td: 0.20,
            mp: 0.25
        } 
        coto : {
            id: 2,
            tc: 0.15,
            td: 0.20,
            mp: 0.15
        },
        jumbo: 0.15,
        }
  }]

//Constructor
class Usuarios	{
	constructor(nombre, formaDePago1, formaDePago2, formaDePago3){
	this.nombre = nombre.toUpperCase();
	this.formaDePago1 = formaDePago1;
	this.formaDePago2 = formaDePago1;
	this.formaDePago3 = formaDePago1;
}
//Metodo a definir.
}

let consulta = parseInt(prompt('Contame cuántos medios de pago tenés para poder hacer bien mi trabajo.\n1,\n2,\n3.'));

let formaDePago =[];

if((consulta == 1) || (consulta == 2) || (consulta == 3))	{
let nombre = prompt('Bienvenido al sistema descuentero!!\n\nDecime cuál es tu nombre.');
	
	for(i = 0; i<consulta; i++)	{
		
		if(i == 0)	{
				let formaDePago1 = formaDePago;
				} else if(i == 1)	{
				let formaDePago2 = formaDePago;
				}	else{
				let	formaDePago3 = formaDePago;
				}
				const usuario1 = new Usuarios('nombre','formaDePago1','formaDePago2','formaDePago3');
		
		let opcionesDeDescuento = prompt('Qué tipo de medio de pago es?\n1 - Tarjeta de crédito.\n2 - Billetera electrónica.\n3 - Club La Nación');
			switch(opcionesDeDescuento)	{

				case '1':
					formaDePago = prompt('¿Cuál TC tenés?\n1 - Visa.\n2 - Mastercard.');
					if(formaDePago == '1')	{
						formaDePago = 'Visa';
					}else{
						formaDePago = 'Mastercard';
					}
					break;

				case '2':
					formaDePago = prompt('Cuál eWallet tenés?\n1 - MercadoPago.\n2 - MODO.');
					if(formaDePago == '1')	{
						formaDePago = 'MercadoPago';
					}else{
						formaDePago = 'MODO'; 
					}
					break;

				case '3':
						formaDePago = 'Club La Nación';
					break;

				default:
					alert('Opción mal ingresada');
					break;
				}
			console.log(usuario1);
			}
			}else{
				alert('No entendiste el concepto. Se permite de 1 a 3 medios de pago');
			};
;


				





/* const intentoDeSumarseAlConstructor = {
	nombre: 'Mepesa Elsogan',
	formaDePago1: 'TCAmexHSBC',
	formaDePago2: 'TDVisaHSBC',
	formaDePago3: 'TCMasterBBVA',
} */




/* const persona2 = new Persona('Florencia Casaco','TDMaestroBancoProvincia','CuentaDNI','TCMastercardBancoProvincia');	
const persona3 = new Persona('Martin Melapiso','Bimo','Club365'); */

/* const persona4 = new Persona(intentoDeSumarseAlConstructor); //Asi no se puede hacer.
 */