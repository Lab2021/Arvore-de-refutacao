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
\s+       { /* ignore */}
<<EOF>>   { return 'EOF'; }
/lex


%left OU
%left E
%nonassoc NAO
%left SE
%left SSS



%%

expressions:
         argument EOF  { typeof console !== 'undefined' ? console.log($1) : print($1); return $1; }
         ;


argument:
         premises CONCLUSAO expr { $$ = $1+":-"+$3}
         ;

premises:
         expr                    { $$ = $1 }
         | expr VIRGULA premises   { $$ = $1+','+$3 }
         ;

expr:
           expr OU expr       { $$ =  '{"value":"OU", "right":'+$3+' , "left":'+$1+' }' }
         | expr E  expr       { $$ =  '{"value":"AND", "right":'+$3+' , "left":'+$1+' }' }
         | expr SE  expr      { $$ = '{"value":"SE", "right":'+$3+' , "left":'+$1+' }' }
         | expr SSS expr      { $$ =   '{"value":"SSS", "right":'+$3+' , "left":'+$1+' }'}
         | NAO expr { $$ = '{"value":"NOT", "left":'+$2+'}'  }
         | LPAREN expr RPAREN { $$ =  $2; }
         | VAR                { $$ =  '{"value":"ELE", "left":"'+$1+'"}' }
         ;
