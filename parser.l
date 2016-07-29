/* Refutation Tree  by Josh */




%lex
%%

\s*\n\s*  {/* ignore */}

"("       { return 'LPAREN'; }
")"       { return 'RPAREN'; }
":-"|":"   { return 'CONCLUSAO'; }
"v"|"V"   { return 'OU'; }
"->"   { return 'SE'; }
"~"   { return 'NAO'; }
"-"   { return 'NELEM'; }
"^"   { return 'E'; }
"<->"|"<>"   { return 'SSS'; }
","    { return 'VIRGULA'; }
[a-zA-Z]  { return 'VAR'; }
/*\s+       { return 'SEP'; }*/
<<EOF>>   { return 'EOF'; }
/lex


%precedence LPAREN
%left OU
%left E
%nonassoc NAO
%left SE
%left SSS



%%





expressions:
  argument EOF
  { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
  ;


  argument:
    premises CONCLUSAO expr { $$ = $1+":-"+$3}
 ;

 premises:
                    expr                    { $$ = $1 }
                  | expr VIRGULA premises   { $$ = $1+','+$3 }
                  ;

expr:
           expr OU expr       { $$ =  '{"value":"OU", "right":['+$1+'] , "left":['+$3+'] }' }
         | expr E  expr       { $$ =  '{"value":"AND", "right":null , "left":['+$1+','+$3+'] }' }
         | expr SE  expr      { $$ = '{"value":"SE", "right":['+$1+'] , "left":['+$3+'] }' }
         | expr SSS expr      { $$ =   '{"value":"SSS", "right":['+$1+','+$3+'] , "left":['+$1+','+$3+'] }'}
         | NAO NAO  exp         { $$ = $3 }
         | LPAREN expr RPAREN { $$ =  $2; }
         | sub
         ;
sub:
          NAO LPAREN expr SSS expr RPAREN { $$ = '{"value":"NSSSS", "right":['+$3+','+$5+'] , "left":['+$3+','+$5+'] }'  }
         | NAO LPAREN expr SE expr RPAREN { $$ =  '{"value":"NSE", "right":null , "left":['+$3+','+$5+'] }'}
         | NAO LPAREN expr E expr RPAREN { $$ =  '{"value":"NAND", "right":['+$3+'] , "left":['+$5+'] }' }
         | NAO LPAREN expr OU expr RPAREN { $$ =  '{"value":"NOU", "right":null , "left":['+$3+','+$5+'] }' }
         | NAO NAO  VAR          { $$ = '{"value":"ELE", "left":"'+$3+'"}' }
         | NAO VAR            { $$ =  '{"value":"ELE", "left":"~'+$2+'"}' }
         | VAR                { $$ =  '{"value":"ELE", "left":"'+$1+'"}' }
         ;
