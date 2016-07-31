verificaexp = function(x){
   console.log("Valor de x:");
   console.log(x);
   console.log("=====");
    if(x.value == "ELE"){
         lista.push(x.left);
         console.log("ADD ELE")
      }else if(x.value == "AND"){
         console.log("ADD AND")
         verificaexp(x.left)
         verificaexp(x.right)
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
         verificaexp({value:"NOT", left:x.left});
            cont++;
         }else{
            verificaexp(x.right);
            cont--;
         }
      }else if(x.value == "SSS"){
         console.log("SSS")
         if(!x.hasOwnProperty('flag')){
            x.flag = 1;
            verificaexp([x.left,x.right]);
            cont++;
         }else{
            verificaexp([{value:"NOT", left:x.left},{value:"NOT", left:x.right}]);
            cont--;
         }
      }else if(x.value == "NOT"){
         //NOT Precisa fazer todas as combinações do caso acima com o NOT
         if(x.left.value == "ELE"){
            console.log("ADD NOTELE")
              lista.push('~'+x.left.left);
           }else if(x.left.value == "AND"){
              console.log("ADD NAND")
              if(!x.hasOwnProperty('flag')){
              x.flag = 1;
              verificaexp({value:"NOT", left:x.left.left});
                 cont++;
              }else{
                 verificaexp({value:"NOT", left:x.left.right});
                 cont--;
              }
           }else if(x.left.value == "OU"){
              console.log("NOUU")
              verificaexp({value:"NOT", left:x.left.left})
              verificaexp({value:"NOT", left:x.left.right})
           }else if(x.left.value == "SE"){
              console.log("NSE")
              verificaexp(x.left.left);
              verificaexp({value:"NOT", left:x.left.right});
           }else if(x.left.value == "SSS"){
              console.log("NSSS")
             if(!x.hasOwnProperty('flag')){
             x.flag = 1;
             verificaexp([x.left.left,{value:"NOT", left:x.left.right}]);
                cont++;
             }else{
                verificaexp([{value:"NOT", left:x.left.left},x.left.right]);
                cont--;
             }
          }else if (x.left.value == "NOT"){
             console.log("NOT NOT")
             verificaexp(x.left.left);
          }
      }else{
         if(x.hasOwnProperty('length')){
            for(y of x){
               console.log("ADD VET")
               verificaexp(y)
            }}
         //console.log("Wtf??")
         //console.log(x);
         //console.log(x.value)
      }

      console.log(lista);
}









function arvore() {
//Pega a entrada do usuário, faz alguns tratamentos e manda para o parser
erro = false;
document.getElementById("saida").style.color = "black";
document.getElementById('saida').innerHTML = '';
try{
input = parser.parse(document.getElementById('entrada').value.replace('~~',''));//Função para aplicar o Parser na Entrada
}catch(err){
   erro = err;
}
if(!erro){
   console.log("input:"); // Todos os consoles logs aparecem no console do browser acompanhar o processo
   console.log(input);
   console.log("=====");
   vet = input.split(':-');
   p = vet[0]; // Vetor das premissas
   c = '{"value":"NOT", "left":'+vet[1]+'}'; // Vetor da conclusão
   cont = 0;
   console.log(c);

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
               if(!p || cont<=0)break loop1;
         }
         console.log(p?"Verdade":"Falso");
    })(p,c); // Chama a função "provador" com a premissa e conclusão

   console.log(cont);
   //Mostra Saída
   //document.getElementById('demo').innerHTML = input; // Arvore gerada pelo parser
   document.getElementById('saida').innerHTML = p?"Verdade":"Falso"; // Saida para o usuário
}else{
   //Gera erro na tela
   document.getElementById("saida").innerHTML = erro;
   document.getElementById("saida").style.color = "red";

}
}
