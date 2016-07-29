// myparser.js


Node = function(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function inleft(value,parent){
   if(parent == null){
         return new Node(value);
   }else if(parent.left != null){
      inleft(value,parent.left);
   }   else{
         return parent.left = inleft(value,parent.left);
   }
}

function inright(value,parent){
   if(parent == null){
         return new Node(value);
   }else if(parent.right != null){
      inright(value,parent.right);
   }   else{
         return parent.right = inright(value,parent.right);
   }
}


function findelements(x){
   return x.value == "ELE"
}


fand = function(valor,lista){

lista.push()
}


verificaexp = function(x){
//console.table(x);
   console.log();
    if(x.value == "ELE"){
         lista.push(x.left);
         console.log("ADD ELE")
      }else if(x.value == "AND"){
         console.log("ADD AND")
         for(var i=0;i<x.left.length;i++){
            console.log(i);
            verificaexp(x.left[i])
         }
      }else if(x.value == "SE"){

      }else if(x.value == "SSS"){

      }else if(x.value == "NSSSS"){

      }else if(x.value == "NSE"){
         for(var i=0;i<x.left.length;i++){
            verificaexp(x.left[i])
         }
      }else if(x.value == "NAND"){

      }else if(x.value == "NOU"){
         for(var i=0;i<x.left.length;i++){
            verificaexp(x.left[i])
         }
      }else{
         if(x.hasOwnProperty('length')){
            for(y of x){
               console.log("ADD VET")
               verificaexp(y)
            }}
         console.log("Wtf??")
         console.log(x);
         console.log(x.value)
      }

      console.log(lista);
}






//Função para aplicar o Parser na Entrada
function exec (input) {
   a = input.split(':-')
   input = a[0] + ':-~' +a[1]
    return parser.parse(input);
}

function arvore() {
//Pega a entrada do usuário
input = exec(document.getElementById('entrada').value);
console.log("input");
console.log(input);

vet = input.split(':-');
root = Node("inicio");


p = vet[0];
c = vet[1];


 (function provador(x,y){
      vetele = []
      x = JSON.parse("["+x+"]");
      y = JSON.parse("["+y+"]");
      console.log("x:"+ x.length);
      console.log("y:"+ y.length);
      prova = true;
      //while(prova = true){
      lista = [];
      verificaexp(y);
      verificaexp(x);
      p = false;
      for(var i=0;i<lista.length;i++){
         for(var j=i;j<lista.length;j++){
            if("~"+lista[i] == lista[j] || lista[i] == "~"+lista[j]){
               console.log(lista[i])
               console.log(lista[j])
               p = true
            }
         }
      }prova = p==false?false:false;

      //}
      console.log(p?"Verdade":"Falso");
      //console.log(vetele);

 })(p,c);



//Mostra Saída
document.getElementById('saida').innerHTML = p?"Verdade":"Falso";
}
