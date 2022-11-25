
    //imprime "hola mundo" y pregunta nombre y luego lo saluda
       /* alert('hola mundo!');
        let nombre=prompt('como te llamas?')
        alert('Hola '+nombre);

   alert(typeof nombre) devuelve el tipo de variable que es*/
   /*var numero1=prompt('introduzca primer numero: ');
   var numero2=prompt('introduzca segundo numero: ');
   
   var resultado=parseInt(numero1)+parseInt(numero2);//se convierte la el string en numero
   alert(resultado)

*/
/*
if (confirm ('Para acceder a este sitio usted debe tener 18 años o más,haga clic en "OK" si es el caso.')) 
{
alert ('Será redirigido al sitio.');
}
else 
{
alert ("Lo siento, usted no tiene acceso a esta página.");
}
//al agregar "+" antes de las variables esto los convierte en tipo numerico
let naranja = 5;
let tomate = 2;

alert(+naranja + +tomate);*/

//let variable = condicion? true:false
//nos ahorra tener que usar if
/*
let edad = prompt('que edad tenes?')

let condicion = (edad > 18)? alert("sos mayor de edad"):alert("sos menor de edad");

//ejemplo con multiples "?"
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
5

*/
/*logueo simple usando if
let user = prompt("quien es?")
if(user === 'admin')
{
   let contraseña = prompt("ingrese contraseña: ");
      if(contraseña === "" || contraseña === null)
      {
         alert("cancelado");
      }
      if(contraseña === '1234')
      {
         alert("bienvenido");
      }
      else
         alert("contraseña incorecta");
}else
      alert("no te conozco");
*/


//declarar las variables fuera del bucle para que funcionen bien
//este codigo no funciona por que esta declarada la variable dentro del bucle
   /*do{
     let  numero = prompt("ingrese un numero mayor a 100: ",0);
   }while(numero <=100 && numero);*/
/*
   let num;//este codigo funciona por que tiene la variable declarada fuera del bucle

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);*/

//bucle de numeros primos
/*
let num = prompt("ingrese un nummero para ver los primos contenidos entre este y 2:",0);

nextPrime:
for(let i = 2;i <= num;i++){

for(let j = 2;j<i;j++){
if(i % j == 0) continue nextPrime;
}
alert(i);
}*/