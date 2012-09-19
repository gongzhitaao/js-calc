/* Jison generated parser */
var calc = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"+":6,"-":7,"*":8,"/":9,"^":10,"√":11,"!":12,"%":13,"|":14,"(":15,")":16,"{":17,"}":18,"acos":19,"asin":20,"atan":21,"ceil":22,"cos":23,"floor":24,"ln":25,"log2":26,"log10":27,"sin":28,"tan":29,"NUMBER":30,"E":31,"LN2":32,"LN10":33,"LOG2E":34,"LOG10E":35,"PI":36,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"+",7:"-",8:"*",9:"/",10:"^",11:"√",12:"!",13:"%",14:"|",15:"(",16:")",17:"{",18:"}",19:"acos",20:"asin",21:"atan",22:"ceil",23:"cos",24:"floor",25:"ln",26:"log2",27:"log10",28:"sin",29:"tan",30:"NUMBER",31:"E",32:"LN2",33:"LN10",34:"LOG2E",35:"LOG10E",36:"PI"},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return $$[$0-1];
break;
case 2:this.$ = $$[$0-2]+$$[$0];
break;
case 3:this.$ = $$[$0-2]-$$[$0];
break;
case 4:this.$ = $$[$0-2]*$$[$0];
break;
case 5:this.$ = $$[$0-2]/$$[$0];
break;
case 6:this.$ = Math.pow($$[$0-2], $$[$0]);
break;
case 7:this.$ = Math.pow($$[$0], 1/$$[$0-2]);
break;
case 8:this.$ = Math.sqrt($$[$0]);
break;
case 9:
          this.$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($$[$0-1]);
        
break;
case 10:this.$ = $$[$0-1]/100;
break;
case 11:this.$ = -$$[$0];
break;
case 12:this.$ = $$[$0];
break;
case 13:this.$ = Math.abs($$[$0-1]);
break;
case 14:this.$ = $$[$0-1];
break;
case 15:this.$ = $$[$0-1];
break;
case 16:this.$ = Math.acos($$[$0]);
break;
case 17:this.$ = Math.asin($$[$0]);
break;
case 18:this.$ = Math.atan($$[$0]);
break;
case 19:this.$ = Math.ceil($$[$0]);
break;
case 20:this.$ = Math.cos($$[$0]);
break;
case 21:this.$ = Math.floor($$[$0]);
break;
case 22:this.$ = Math.log($$[$0]);
break;
case 23:this.$ = Math.log($$[$0])/Math.log(2);
break;
case 24:this.$ = Math.log($$[$0])/Math.log(10);
break;
case 25:this.$ = Math.sin($$[$0]);
break;
case 26:this.$ = 888;
break;
case 27:this.$ = Number(yytext);
break;
case 28:this.$ = Math.E;
break;
case 29:this.$ = Math.LN2;
break;
case 30:this.$ = Math.LN10;
break;
case 31:this.$ = Math.LOG2E;
break;
case 32:this.$ = Math.LOG10E;
break;
case 33:this.$ = Math.PI;
break;
}
},
table: [{3:1,4:2,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{1:[3]},{5:[1,27],6:[1,28],7:[1,29],8:[1,30],9:[1,31],10:[1,32],11:[1,33],12:[1,34],13:[1,35]},{4:36,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:37,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:38,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:39,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:40,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:41,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:42,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:43,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:44,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:45,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:46,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:47,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:48,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:49,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:50,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:51,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:52,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{5:[2,27],6:[2,27],7:[2,27],8:[2,27],9:[2,27],10:[2,27],11:[2,27],12:[2,27],13:[2,27],14:[2,27],16:[2,27],18:[2,27]},{5:[2,28],6:[2,28],7:[2,28],8:[2,28],9:[2,28],10:[2,28],11:[2,28],12:[2,28],13:[2,28],14:[2,28],16:[2,28],18:[2,28]},{5:[2,29],6:[2,29],7:[2,29],8:[2,29],9:[2,29],10:[2,29],11:[2,29],12:[2,29],13:[2,29],14:[2,29],16:[2,29],18:[2,29]},{5:[2,30],6:[2,30],7:[2,30],8:[2,30],9:[2,30],10:[2,30],11:[2,30],12:[2,30],13:[2,30],14:[2,30],16:[2,30],18:[2,30]},{5:[2,31],6:[2,31],7:[2,31],8:[2,31],9:[2,31],10:[2,31],11:[2,31],12:[2,31],13:[2,31],14:[2,31],16:[2,31],18:[2,31]},{5:[2,32],6:[2,32],7:[2,32],8:[2,32],9:[2,32],10:[2,32],11:[2,32],12:[2,32],13:[2,32],14:[2,32],16:[2,32],18:[2,32]},{5:[2,33],6:[2,33],7:[2,33],8:[2,33],9:[2,33],10:[2,33],11:[2,33],12:[2,33],13:[2,33],14:[2,33],16:[2,33],18:[2,33]},{1:[2,1]},{4:53,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:54,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:55,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:56,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:57,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{4:58,7:[1,4],10:[1,5],11:[1,3],14:[1,6],15:[1,7],17:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23],34:[1,24],35:[1,25],36:[1,26]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],16:[2,9],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],16:[2,10],18:[2,10]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,8],16:[2,8],18:[2,8]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],16:[2,12],18:[2,12]},{6:[1,28],7:[1,29],8:[1,30],9:[1,31],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[1,59]},{6:[1,28],7:[1,29],8:[1,30],9:[1,31],10:[1,32],11:[1,33],12:[1,34],13:[1,35],16:[1,60]},{6:[1,28],7:[1,29],8:[1,30],9:[1,31],10:[1,32],11:[1,33],12:[1,34],13:[1,35],18:[1,61]},{5:[2,16],6:[2,16],7:[2,16],8:[2,16],9:[2,16],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,16],16:[2,16],18:[2,16]},{5:[2,17],6:[2,17],7:[2,17],8:[2,17],9:[2,17],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,17],16:[2,17],18:[2,17]},{5:[2,18],6:[2,18],7:[2,18],8:[2,18],9:[2,18],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,18],16:[2,18],18:[2,18]},{5:[2,19],6:[2,19],7:[2,19],8:[2,19],9:[2,19],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,19],16:[2,19],18:[2,19]},{5:[2,20],6:[2,20],7:[2,20],8:[2,20],9:[2,20],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,20],16:[2,20],18:[2,20]},{5:[2,21],6:[2,21],7:[2,21],8:[2,21],9:[2,21],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,21],16:[2,21],18:[2,21]},{5:[2,22],6:[2,22],7:[2,22],8:[2,22],9:[2,22],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,22],16:[2,22],18:[2,22]},{5:[2,23],6:[2,23],7:[2,23],8:[2,23],9:[2,23],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,23],16:[2,23],18:[2,23]},{5:[2,24],6:[2,24],7:[2,24],8:[2,24],9:[2,24],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,24],16:[2,24],18:[2,24]},{5:[2,25],6:[2,25],7:[2,25],8:[2,25],9:[2,25],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,25],16:[2,25],18:[2,25]},{5:[2,26],6:[2,26],7:[2,26],8:[2,26],9:[2,26],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,26],16:[2,26],18:[2,26]},{5:[2,2],6:[2,2],7:[2,2],8:[1,30],9:[1,31],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,2],16:[2,2],18:[2,2]},{5:[2,3],6:[2,3],7:[2,3],8:[1,30],9:[1,31],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,3],16:[2,3],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,4],16:[2,4],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[1,32],11:[1,33],12:[1,34],13:[1,35],14:[2,5],16:[2,5],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],16:[2,6],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[1,32],11:[2,7],12:[1,34],13:[1,35],14:[2,7],16:[2,7],18:[2,7]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],16:[2,14],18:[2,14]},{5:[2,15],6:[2,15],7:[2,15],8:[2,15],9:[2,15],10:[2,15],11:[2,15],12:[2,15],13:[2,15],14:[2,15],16:[2,15],18:[2,15]}],
defaultActions: {27:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 30
break;
case 2:return 8
break;
case 3:return 11
break;
case 4:return 9
break;
case 5:return 7
break;
case 6:return 6
break;
case 7:return 10
break;
case 8:return 12
break;
case 9:return 13
break;
case 10:return 14
break;
case 11:return 15
break;
case 12:return 16
break;
case 13:return 17
break;
case 14:return 18
break;
case 15:return 19
break;
case 16:return 20
break;
case 17:return 21
break;
case 18:return 22
break;
case 19:return 23
break;
case 20:return 24
break;
case 21:return 25
break;
case 22:return 26
break;
case 23:return 27
break;
case 24:return 28
break;
case 25:return 29
break;
case 26:return 31
break;
case 27:return 32
break;
case 28:return 33
break;
case 29:return 34
break;
case 30:return 'LOG20E'
break;
case 31:return 36
break;
case 32:return 5
break;
case 33:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:\*)/,/^(?:√)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\|)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:acos\b)/,/^(?:asin\b)/,/^(?:atan\b)/,/^(?:ceil\b)/,/^(?:cos\b)/,/^(?:floor\b)/,/^(?:ln\b)/,/^(?:log_2\b)/,/^(?:log_\{10\})/,/^(?:sin\b)/,/^(?:tan\b)/,/^(?:E\b)/,/^(?:LN2\b)/,/^(?:LN10\b)/,/^(?:LOG_2E\b)/,/^(?:LOG_\{10\}E\b)/,/^(?:PI\b)/,/^(?:$)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = calc;
exports.Parser = calc.Parser;
exports.parse = function () { return calc.parse.apply(calc, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}