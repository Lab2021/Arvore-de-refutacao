// myparser.js

//
// Node = function(val){
//   this.value = val;
//   this.left = null;
//   this.right = null;
// }
//
// function inleft(value,parent){
//    if(parent == null){
//          return new Node(value);
//    }else if(parent.left != null){
//       inleft(value,parent.left);
//    }   else{
//          return parent.left = inleft(value,parent.left);
//    }
// }
//
// function inright(value,parent){
//    if(parent == null){
//          return new Node(value);
//    }else if(parent.right != null){
//       inright(value,parent.right);
//    }   else{
//          return parent.right = inright(value,parent.right);
//    }
// }
//
//
// function findelements(x){
//    return x.value == "ELE"
// }
//
//
// fand = function(valor,lista){
// lista.push()
// }


verificaexp = function(x){
   console.log("Valor de x:");
   console.log(x);
   console.log("=====");
    if(x.value == "ELE"){
         lista.push(x.left);
         console.log("ADD ELE")
      }else if(x.value == "AND"){
         console.log("ADD AND")
         for(var i=0;i<x.left.length;i++){
            console.log(i);
            verificaexp(x.left[i])
         }
      }else if(x.value == "OU"){
         console.log("OUU")
         if(!x.hasOwnProperty('flag')){
         x.flag = 1;
         verificaexp(x.left);
            cont++;
         }else{
            verificaexp(x.right);
            cont--;
         }

      }else if(x.value == "SE"){
         console.log("SE")
         if(!x.hasOwnProperty('flag')){
         x.flag = 1;
         verificaexp(x.left);
            cont++;
         }else{
            verificaexp(x.right);
            cont--;
         }
      }else if(x.value == "SSS"){
         cont++;
      }else if(x.value == "NSSSS"){
         cont++;
      }else if(x.value == "NSE"){
         for(var i=0;i<x.left.length;i++){
            verificaexp(x.left[i])
         }
      }else if(x.value == "NAND"){
         cont++;
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
   input = a[0] + ':-~(' +a[1] + ')'
    return parser.parse(input.replace('~~',''));
}

function arvore() {
//Pega a entrada do usuário, faz alguns tratamentos e manda para o parser
input = exec(document.getElementById('entrada').value);
console.log("input:"); // Todos os consoles logs aparecem no console do browser acompanhar o processo
console.log(input);
console.log("=====");
vet = input.split(':-');
//root = Node("inicio");


p = vet[0]; // Vetor das premissas
c = vet[1]; // Vetor da conclusão
cont = 0;


// Essa função cria um vetor e aloca todos os termos nele
//onde é feito a verificação de validação de cada ramo.
//Caso seja verdadeiro ele passa para o proximo ramo, caso falso ele encerra e
//exibe falso ao usuário.
 (function provador(x,y){
      x = JSON.parse("["+x+"]");
      y = JSON.parse("["+y+"]");
      console.log("Tamanho x:"+ x.length);
      console.log("Tamanho y:"+ y.length);
      console.log("=====");
      prova = true;
      loop1:
      while (true) {
         p = false;
         lista = [];
         verificaexp(y);
         verificaexp(x);
         for(var i=0;i<lista.length;i++){
            for(var j=i;j<lista.length;j++){
               if("~"+lista[i] == lista[j] || lista[i] == "~"+lista[j]){
                  console.log(lista[i])
                  console.log(lista[j])
                  p = true
               }
            }
         }
            if(!p || cont==0)break loop1;
      }
      console.log(p?"Verdade":"Falso");
 })(p,c); // Chama a função "provador" com a premissa e conclusão

console.log(cont);
//Mostra Saída
document.getElementById('demo').innerHTML = input; // Arvore gerada pelo parser
document.getElementById('saida').innerHTML = p?"Verdade":"Falso"; // Saida para o usuário
}
