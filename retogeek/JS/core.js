'use stric';

function funcionSubmit(event){
    event.preventDefault();
}
document.getElementById('comp').style.display = 'none';
let tipo;
let valorad;
let valor;
let mt;
let genero;
let edad;
let residentes;
let valorderecho;
let aseototal;
let aseo;
let totalpagar;
let mes;

function pedir(){
    residentes = Number(document.getElementById('residentes').value)
    tipo = document.getElementById('tipo').value;
    mt = document.getElementById('metros').value;
    let i = 0;
    let sumagim=0;
    while (i < residentes){
        genero = prompt(" Ingrese m para masculino o  f para femenino");
        edad= prompt("Ingrese la edad");
        valorderecho= valorgim(genero,edad);
        sumagim = sumagim + valorderecho;
        i++;
    }
return sumagim
}
function calcular(){
    residentes = Number(document.getElementById('residentes').value)
    mes = document.getElementById('mes').value;
    tipo = document.getElementById('tipo').value;
    mt = document.getElementById('metros').value;
    valorderechogim=pedir();
    valor = administracion(tipo,mt);
    aseototal=coutaseo(valor,mt);
    totalpagar=valor+ valorderechogim + aseototal;


    document.getElementById("conjunto").style.fontStyle = "60px"
    document.getElementById('comp').style.display = 'block'
    document.getElementById('valor').value = valor
    document.getElementById('gimnasio').value = valorderechogim
    document.getElementById('aseo').value = aseototal;
    document.getElementById('total').value = totalpagar;
    document.getElementById('mess').value = mes;
}
function administracion(tipo,mt){
    if (tipo=="Apartamento"){
        valorad= (mt * 1500)+ 50000;
    }
    else if (tipo =="Casa") {
        valorad = (mt*1500)+100000;
    }
    return valorad
}
function coutaseo(valor,mt){
    aseo=( (valor*10)/100 ) + (mt*1000);
    return aseo
}
function valorgim(genero,edad){
    if (genero=="m" ){
        if(edad<10){
            valorderecho=0;
        }
        else if(edad>=10 && edad<20){
            valorderecho=20000
        }
        else if(edad>=20 && edad<40){
            valorderecho=15000
        }
        else if(edad>=40 && edad<60){
            valorderecho=10000
        }
        else if( edad>60){
            valorderecho=0
        }
     return valorderecho
        
    }
    if (genero=="f" ){
        if(edad<10){
            valorderecho=0;
        }
        else if(edad>=10 && edad<18){
            valorderecho=15000
        }
        else if(edad>=18 && edad<35){
            valorderecho=12000
        }
        else if(edad>=35 && edad<55){
            valorderecho=8000
        }
        else if( edad>=55){
            valorderecho=0
        }
    return valorderecho
        
    }
}

//codigo para tabla
var usuario;
function Capturar(){
class Persona{
    constructor(valor,gimnasio,aseo,total,mess){
        this.valor= valor;
        this.gimnasio = gimnasio;
        this.aseo = aseo;
        this.total = total;
        this.mess = mess;
    }

}

var uno = document.getElementById('valor').value = valor;
var  dos = document.getElementById('gimnasio').value = valorderechogim;
var tres = document.getElementById('aseo').value = aseototal;
var cuatro = document.getElementById('total').value = totalpagar;
var cinco = document.getElementById('mess').value = mes;

usuario = new Persona(uno,dos,tres,cuatro,cinco)
console.log(usuario);
RegistrarUsuario(usuario);
}

var Personas = [];

function RegistrarUsuario(usuario) {
    Personas.push(usuario)
    console.log(Personas);

    document.getElementById('tabla').innerHTML +=  '<tbody><td>' + usuario.valor + 
    '</td><td>' + usuario.gimnasio +'</td><td>' + usuario.aseo + '</td><td>' + usuario.mess + '</td><td>' + usuario.total + '</td> </tbody>'
    
}



















