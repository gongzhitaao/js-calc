
$(document).ready(function() {

    // init
    (function() {

        sessionStorage.ans = 0;
        sessionStorage.idx = 0;

        // Update whenever edited
        $('#input').keyup(function() { update(caret()) });

        // Basic control buttons
        $('.num, #ctrl-basic .op').click(
            function() { insert(this.innerText) });
        $('#rand').click(function() { insert(''+Math.random()) });
	$('#equal').click(function() {
	    $('#input').val('');
	    sessionStorage.ans = Number($('#result')[0].innerText);
	    insert(''+sessionStorage.ans) });
        $('#ans').click(function() { insert(''+sessionStorage.ans) });
        $('#clr').click(function() { $('#input').val(''); update() });
        $('#remember').attr('disabled', true).click(function() {
            var ans = $('#result')[0].innerText;
            if (ans == 'INVALID') return;

            var idx = Number(sessionStorage.idx);
            var eqn = $('#equation')[0].innerHTML;

	    if (idx > 0) {
		var last_eqn = $('#log-entry-' + (idx - 1))
		    .children()[2].innerHTML;
		if (eqn == last_eqn) return;
	    }

            var id = 'log-entry-' + idx;
            var cls = 'log-entry ' + (idx % 2 == 0 ? 'even' : ' odd');
            var mem =
		'<tr id="' + id + '" class="' + cls + '">' +
                '<td class="log-index">' + idx + '</td>' +
                '<td class="log-result">' + ans + '</td>' +
                '<td class="log-equation">' + eqn + '</td>' +
                '</tr>';
            $('#log-entry').prepend(mem);
	    $('#' + id).hover(function() {
		sessionStorage.cur = $(this).attr('id');
	    });
	    $('#' + id).poshytip({ content: function() {
		var a = '<img src="images/plus.png" />';
		var b = '<img src="images/minus.png" />';
		var memop = '<table>' +
		    '<tr class="memop" onclick="use()"><td>' + a + '</td><td>使用该结果</td></tr>' +
		    '<tr class="memop" onclick="del()"><td>' + b + '</td><td>删除该结果</td></tr>' +
		    '</table>';
		return memop;
	    }});
            sessionStorage.idx = idx + 1;
        });
        // Advanced control buttons
        $('#ctrl-advanced .func:not(#root)').click(
            function() { insert(this.value, -1) });
        $('#root').click(function() { insert(this.value, -6) });
        // constants
        $('#ctrl-constant .const').click(
            function() { insert(this.value) });

	// Tooltips
	$('#ans').poshytip({content:'上一次计算结果'});
	$('#clr').poshytip({content:'清除输入框中表达式'});
	$('#rand').poshytip({content:'生成0~1之间的随机数'});
	$('#remember').poshytip({content:'保存计算结果'});
	$('[value="E"]').poshytip({content:'欧拉常数'});
	$('[value="PI"]').poshytip({content:'圆周率'});
	$('#root').poshytip({content:'如果省略 x，默认开平方'});
    })();

});

function use() {
    id = sessionStorage.cur;
    insert('' + Number($('#'+id).children()[1].innerText));
}

function del() {
    id = sessionStorage.cur;
    $('#' + id).poshytip('destroy');
    pre = $('#' + id).prevAll().each(function() {
	// update id
	nid = Number($(this).attr('id').match(/\d+/)) - 1;
	$(this).attr('id', 'log-entry-' + nid);
	idx = Number($(this).children()[0].innerText) - 1;
	$(this).children()[0].innerText = idx;
	$(this).attr('class', 'log-entry ' +
		     (nid % 2 == 0 ? 'even' : ' odd'));
    });
    sessionStorage.idx = Number(sessionStorage.idx) - 1;
    $('#'+id).remove();
}

// Insert new expression to input
function insert(n, off) {
    s = $('#input').val();
    p = caret();
    s1 = s.substring(0, p);
    s2 = s.substring(p);
    t = s1 + n + s2;
    $('#input').val(t);
    if (typeof off == 'undefined') off = 0;
    update(p + n.length + off);
}

// Update result
function update(p) {
    var ans = do_calc();
    var b = true;
    if (ans != 'INVALID') {
	if (ans) b = false;
    }
    $('#remember').attr('disabled', b);
    eqn = fmt_eqn($('#input').val());
    $('#result').empty().append(ans);
    $('#equation').empty().append(eqn);
    $('#input').focus();
    if (typeof p == 'undefined') p = 0;
    caret(p);
}

// Get of set input caret position
function caret(pos) {
    var ctrl = $('#input').get(0);
    if (typeof pos != 'undefined') {
        if(ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    } else {
        var pos = 0;
        if (document.selection) {
            ctrl.focus ();
            var sel = document.selection.createRange();
            Sel.moveStart ('character', -ctrl.value.length);
            pos = Sel.text.length;
        } else if (ctrl.selectionStart
                   || ctrl.selectionStart == '0')
            pos = ctrl.selectionStart;
        return pos;
    }
}


function do_calc() {
    var v = $.trim($('#input').val());
    if (!v) return '';

    var res = '';
    try {
        res += calc.parse(v).toFixed(5);
    } catch (e) {
        res += 'INVALID';
    }
    return res;
}

/* Magic function!  I haven't the faintest idea how it works.
 * Just grab it from the source of:
 * http://mathscribe.com/author/jqmath.html.  And It just works!
 */
var ents_ = { nwarr: '\u2196', swarr: '\u2199' };
function fmt_eqn(str) {
    var ms = str.replace(
            /&([-#.\w]+);|\\([a-z]+)(?: |(?=[^a-z]))/ig,
        function(s, e, m) {
            if (m && (M.macros_[m] || M.macro1s_[m])) return s;
            var t = '&' + (e || m) + ';';
            var res = $('<span>' + t + '</span>').text();
            return res != t ? res : ents_[e || m] || s;
        });

    var t = '';
    try {
        t += M.sToMathE(ms, true).innerHTML;
    } catch(exc) {
        t += String(exc);
    }
    return t;
}

