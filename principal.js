const fs=require ('fs');
const express = require('express')
const app = express()

let cursos=[{

	idc:1,
	nombrec:'Node.js',
	precio:0,
	horas:32
},
{
 	idc:2,
	nombrec:'Calculo Diferencial',
	precio:150000,
	horas:120
	
},
{
	idc:3,
	nombrec:'Angular',
	precio:80000,
	horas:54
},
{
	idc:4,
	nombrec:'C#',
	precio:70000,
	horas:48
}];

let {idc, nombrec, precio, horas}=cursos;
let curso=(i,n,p,h)=> console.log('El curso se llama:'+n+', tiene una duración de: '+h+' horas y un valor de: '+p+' pesos, el Id del curso es:'+i);
temp=0;
for (let x in cursos) {
	temp=temp+2000;
	setTimeout(function(){		
		console.log(curso(cursos[x].idc,cursos[x].nombrec,cursos[x].precio,cursos[x].horas));
	}, temp);

}
const opciones={

	Id:{
		demand:true,
		alias:'i'
	},
	Nombre:{
		demand:true,
		alias:'n'
	},
	Cedula:{
		demand:true,
		alias:'c'
	}
}
const argv=require('yargs')
		   .command ('inscribirse','Realizar inscripcion', opciones)
.argv

for (let x in cursos){

	if(argv.Id==cursos[x].idc){

let crearArchivo=(cursos)=>{
	texto=' El estudiante: ' + argv.Nombre + '\n' +
		  ' Con cedula: ' + argv.Cedula + '\n' +
		  ' se ha matriculado en el curso llamado: ' + cursos[x].nombrec + ', el cual tiene una duracion de ' + cursos[x].horas + ' horas y un valor de ' + cursos[x].precio + ' pesos';
		  app.get('/', function (req, res) {
			res.send(texto)
		  })
		   
		  app.listen(3000)


}
crearArchivo(cursos);
break;
 }else{
 	console.log('El Id ingresado no pertenece a ningun curso.')
 	console.log(curso(cursos[x].idc,cursos[x].nombrec,cursos[x].precio,cursos[x].horas));

 }
}




 





