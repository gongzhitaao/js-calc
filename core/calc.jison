/* -*- coding: utf-8 -*-  */

/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"*"                   return '*'
"√"		      return '√'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"|"                   return '|'
"("                   return '('
")"                   return ')'
"{"		      return '{'
"}"		      return '}'
"acos"		      return 'acos'
"asin"		      return 'asin'
"atan"		      return 'atan'
"ceil"		      return 'ceil'
"cos"		      return 'cos'
"floor"		      return 'floor'
"ln"		      return 'ln'
"log_2"		      return 'log2'
"log_{10}"	      return 'log10'
"sin"		      return 'sin'
"tan"                 return 'tan'
"E"                   return 'E'
"LN2"                 return 'LN2'
"LN10"                return 'LN10'
"LOG_2E"  	      return 'LOG2E'
"LOG_{10}E"           return 'LOG20E'
"PI"                  return 'PI'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/' SQRT2 'acos' 'asin' 'atan' 'ceil' 'cos' 'floor' 'ln' 'log2' 'log10' 'sin' 'tan'
%left '√'
%right '!'
%right '%'
%left '^' SUPPRE
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : e EOF
        {return $1;}
    ;

e
    : e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {$$ = $1/$3;}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | e '√' e
        {$$ = Math.pow($3, 1/$1);}
    | '√' e %prec SQRT2
        {$$ = Math.sqrt($2);}
    | e '!'
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}
    | e '%'
        {$$ = $1/100;}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '^' e %prec SUPPRE
        {$$ = $2;}
    | '|' e '|'
        {$$ = Math.abs($2);}
    | '(' e ')'
        {$$ = $2;}
    | '{' e '}'
        {$$ = $2;}
    | 'acos' e
        {$$ = Math.acos($2);}
    | 'asin' e
        {$$ = Math.asin($2);}
    | 'atan' e
        {$$ = Math.atan($2);}
    | 'ceil' e
        {$$ = Math.ceil($2);}
    | 'cos' e
        {$$ = Math.cos($2);}
    | 'floor' e
        {$$ = Math.floor($2);}
    | 'ln' e
        {$$ = Math.log($2);}
    | 'log2' e
        {$$ = Math.log($2)/Math.log(2);}
    | 'log10' e
        {$$ = Math.log($2)/Math.log(10);}
    | 'sin' e
        {$$ = Math.sin($2);}
    | 'tan' e
      	{$$ = 888;}
    | NUMBER
        {$$ = Number(yytext);}
    | E
        {$$ = Math.E;}
    | LN2
        {$$ = Math.LN2;}
    | LN10
        {$$ = Math.LN10;}
    | LOG2E
        {$$ = Math.LOG2E;}
    | LOG10E
        {$$ = Math.LOG10E;}
    | PI
        {$$ = Math.PI;}
    ;
