﻿
var PageName = '后台－履历录入';
var PageId = '422e978d0be74670b5afa8405803e3aa'
var PageUrl = '后台－履历录入.html'
document.title = '后台－履历录入';
var PageNotes = 
{
"pageName":"后台－履历录入",
"showNotesNames":"False",
"默认":"<p style=\"text-align:left;\"><span style=\"\">缺履历数据管理页<\/span><\/p>"}
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
gv_vAlignTable['u115'] = 'top';
var u122 = document.getElementById('u122');

var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}

}

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u130 = document.getElementById('u130');

var u7 = document.getElementById('u7');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u79 = document.getElementById('u79');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u17 = document.getElementById('u17');

var u135 = document.getElementById('u135');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u212 = document.getElementById('u212');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u55 = document.getElementById('u55');

var u101 = document.getElementById('u101');

var u186 = document.getElementById('u186');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u105 = document.getElementById('u105');

var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}

}

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u67 = document.getElementById('u67');

var u65 = document.getElementById('u65');

var u120 = document.getElementById('u120');

var u152 = document.getElementById('u152');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}

}

var u75 = document.getElementById('u75');

var u133 = document.getElementById('u133');

var u200 = document.getElementById('u200');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u89 = document.getElementById('u89');

var u208 = document.getElementById('u208');

var u47 = document.getElementById('u47');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u103 = document.getElementById('u103');

var u164 = document.getElementById('u164');

var u99 = document.getElementById('u99');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u57 = document.getElementById('u57');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u172 = document.getElementById('u172');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u118 = document.getElementById('u118');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u176 = document.getElementById('u176');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u174 = document.getElementById('u174');

var u216 = document.getElementById('u216');

var u128 = document.getElementById('u128');

var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');

var u182 = document.getElementById('u182');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}

}

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u202 = document.getElementById('u202');

var u166 = document.getElementById('u166');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u95 = document.getElementById('u95');

var u61 = document.getElementById('u61');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u116 = document.getElementById('u116');

var u158 = document.getElementById('u158');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}

}

var u160 = document.getElementById('u160');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u126 = document.getElementById('u126');

var u71 = document.getElementById('u71');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u198 = document.getElementById('u198');

var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}

}

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u214 = document.getElementById('u214');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u43 = document.getElementById('u43');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u150 = document.getElementById('u150');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u168 = document.getElementById('u168');

var u154 = document.getElementById('u154');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u139 = document.getElementById('u139');

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u192 = document.getElementById('u192');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u19 = document.getElementById('u19');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u206 = document.getElementById('u206');

var u109 = document.getElementById('u109');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u170 = document.getElementById('u170');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u81 = document.getElementById('u81');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u190 = document.getElementById('u190');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u9 = document.getElementById('u9');

var u73 = document.getElementById('u73');

var u69 = document.getElementById('u69');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u91 = document.getElementById('u91');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u188 = document.getElementById('u188');

var u162 = document.getElementById('u162');

var u204 = document.getElementById('u204');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u210 = document.getElementById('u210');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}

}

var u113 = document.getElementById('u113');

var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}

}

var u111 = document.getElementById('u111');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u0 = document.getElementById('u0');

var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}

}

var u83 = document.getElementById('u83');

var u178 = document.getElementById('u178');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u3 = document.getElementById('u3');

u3.style.cursor = 'pointer';
if (bIE) u3.attachEvent("onclick", Clicku3);
else u3.addEventListener("click", Clicku3, true);
function Clicku3(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u146 = document.getElementById('u146');

var u196 = document.getElementById('u196');

var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}

}

var u49 = document.getElementById('u49');

var u124 = document.getElementById('u124');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}

}

var u148 = document.getElementById('u148');

var u93 = document.getElementById('u93');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u25 = document.getElementById('u25');

var u59 = document.getElementById('u59');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u137 = document.getElementById('u137');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u45 = document.getElementById('u45');

var u77 = document.getElementById('u77');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u143 = document.getElementById('u143');

var u107 = document.getElementById('u107');

var u35 = document.getElementById('u35');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u218 = document.getElementById('u218');

var u180 = document.getElementById('u180');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u194 = document.getElementById('u194');

if (window.OnLoad) OnLoad();
