# Árvore de Refutação

Árvore de Refutação é um método para verificar a validade de um argumento, análogo à demonstração por absurdo.Para testarmos a validade de um argumento construímos uma lista de fórmulas consistindo de suas premissas A1, A2 , A3 ,... ,An e a negação da sua conclusão ~B que formam a RAIZ DA ÁRVORE. A árvore continua abaixo com a construção de seus RAMOS por aplicações de regras, que serão especificadas abaixo, e gerando novas linhas na árvore. A árvore termina quando as fórmulas de seus ramos são: variáveis proposicionais, negações de variáveis proposicionais, ou quando encontrarmos em todos os ramos uma fórmula F.

# Provador

O provador deste repositório foi criado usando JavaScript. Para criação do parser foi utilizado o [Jison](zaa.ch/jison/try/)

Estão disponiveis os seguintes recursos:

- AND que utilizamos o caractere: ^
- OR que utilizamos o caractere: v
- IF..THEN que utilizamos o caractere: ->
- IF AND ONLY IF que utilizamos o caractere: <>
- NOT que utiluzamos o caractere: ~
- Conclusão que utilizamos o caractere: :-

É possivel fazer combinações do NOT com os outros recursos.

## Versão

Beta

## Bugs

[Reporte aqui os possiveis Bugs](https://github.com/joshuapassos/Arvore-de-refutacao/issues)

### Como Usar

Entre nesse [link](https://rawgit.com/joshuapassos/Arvore-de-refutacao/origin/index.html) para testar o programa.

Ex Entrada:

A:-A

Saída:

Verdadeiro

## License

[MIT](LICENSE.md)	

**Seja livre**
