﻿
var PageName = '模板主页面编辑';
var PageId = '5e50d4123425435c8c95a80517f8463d'
var PageUrl = '模板主页面编辑.html'
document.title = '模板主页面编辑';
var PageNotes = 
{
"pageName":"模板主页面编辑",
"showNotesNames":"False",
"默认":"<p style=\"text-align:left;\"><span style=\"\">弹出层后，背景需要淡化。<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p>"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '11');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, '五月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期六');
  value = value.replace(/\[\[GenYear\]\]/g, '2013');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u21 = document.getElementById('u21');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u130 = document.getElementById('u130');

var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{
windowEvent = e;


if (true) {

	self.location.href="简历大师首页（未登录）.html" + GetQuerystring();

}

}

var u2 = document.getElementById('u2');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u153 = document.getElementById('u153');

var u140 = document.getElementById('u140');

var u17 = document.getElementById('u17');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u151 = document.getElementById('u151');

var u42 = document.getElementById('u42');

var u159 = document.getElementById('u159');

var u55 = document.getElementById('u55');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u48 = document.getElementById('u48');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u27 = document.getElementById('u27');

var u138 = document.getElementById('u138');

var u52 = document.getElementById('u52');

var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');

var u65 = document.getElementById('u65');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u108 = document.getElementById('u108');

var u37 = document.getElementById('u37');

var u62 = document.getElementById('u62');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	self.location.href="个人中心－简历管理.html" + GetQuerystring();

}

}
gv_vAlignTable['u11'] = 'top';
var u75 = document.getElementById('u75');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u89 = document.getElementById('u89');

var u39 = document.getElementById('u39');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u72 = document.getElementById('u72');

var u103 = document.getElementById('u103');

var u164 = document.getElementById('u164');

u164.style.cursor = 'pointer';
if (bIE) u164.attachEvent("onclick", Clicku164);
else u164.addEventListener("click", Clicku164, true);
function Clicku164(e)
{
windowEvent = e;


if (true) {

	self.location.href="点表格的X的操作提示.html" + GetQuerystring();

}

}
gv_vAlignTable['u164'] = 'top';
var u99 = document.getElementById('u99');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u78 = document.getElementById('u78');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u125 = document.getElementById('u125');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u149 = document.getElementById('u149');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u38 = document.getElementById('u38');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u23 = document.getElementById('u23');

var u144 = document.getElementById('u144');

var u82 = document.getElementById('u82');

var u36 = document.getElementById('u36');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u74 = document.getElementById('u74');

var u123 = document.getElementById('u123');

var u114 = document.getElementById('u114');

var u33 = document.getElementById('u33');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u157 = document.getElementById('u157');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{
windowEvent = e;


if (true) {

	self.location.href="模板选择.html" + GetQuerystring();

}

}
gv_vAlignTable['u5'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u43 = document.getElementById('u43');

var u56 = document.getElementById('u56');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u142 = document.getElementById('u142');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u40 = document.getElementById('u40');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u104 = document.getElementById('u104');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u19 = document.getElementById('u19');

var u155 = document.getElementById('u155');

var u109 = document.getElementById('u109');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u50 = document.getElementById('u50');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u134 = document.getElementById('u134');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u94 = document.getElementById('u94');

var u60 = document.getElementById('u60');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u9 = document.getElementById('u9');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u69 = document.getElementById('u69');

var u147 = document.getElementById('u147');

var u163 = document.getElementById('u163');

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{
windowEvent = e;


if (true) {

	self.location.href="点表格的X的操作提示.html" + GetQuerystring();

}

}
gv_vAlignTable['u163'] = 'top';
var u91 = document.getElementById('u91');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u13 = document.getElementById('u13');

var u113 = document.getElementById('u113');

var u29 = document.getElementById('u29');

var u132 = document.getElementById('u132');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u58 = document.getElementById('u58');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u0 = document.getElementById('u0');

var u31 = document.getElementById('u31');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u15 = document.getElementById('u15');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u80 = document.getElementById('u80');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u145 = document.getElementById('u145');

var u12 = document.getElementById('u12');

var u25 = document.getElementById('u25');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u90 = document.getElementById('u90');

var u18 = document.getElementById('u18');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u35 = document.getElementById('u35');

var u136 = document.getElementById('u136');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
if (window.OnLoad) OnLoad();
