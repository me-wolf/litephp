﻿
var PageName = '模板选择';
var PageId = '53387349dc8946298552907c97eb90de'
var PageUrl = '模板选择.html'
document.title = '模板选择';
var PageNotes = 
{
"pageName":"模板选择",
"showNotesNames":"False"}
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

var u21 = document.getElementById('u21');

var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{
windowEvent = e;


if (true) {

	self.location.href="http://dashiwang.taobao.com/" + "";

}

}

var u25 = document.getElementById('u25');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u31 = document.getElementById('u31');

var u38 = document.getElementById('u38');

var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u53 = document.getElementById('u53');

var u1 = document.getElementById('u1');

var u27 = document.getElementById('u27');

var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{
windowEvent = e;


if (true) {

	self.location.href="模板主页面编辑.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u34 = document.getElementById('u34');

var u17 = document.getElementById('u17');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u19 = document.getElementById('u19');

var u49 = document.getElementById('u49');

var u11 = document.getElementById('u11');

var u41 = document.getElementById('u41');

var u15 = document.getElementById('u15');

var u45 = document.getElementById('u45');

var u36 = document.getElementById('u36');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{
windowEvent = e;


if (true) {

	self.location.href="模板主页面编辑.html" + GetQuerystring();

}

}

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u13 = document.getElementById('u13');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u47 = document.getElementById('u47');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u4 = document.getElementById('u4');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{
windowEvent = e;


if (true) {

	self.location.href="简历大师首页（未登录）.html" + GetQuerystring();

}

}

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{
windowEvent = e;


if (true) {

	self.location.href="个人中心－简历管理.html" + GetQuerystring();

}

}
gv_vAlignTable['u65'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u5 = document.getElementById('u5');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u9 = document.getElementById('u9');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u33 = document.getElementById('u33');

var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u40 = document.getElementById('u40');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{
windowEvent = e;


if (true) {

	self.location.href="http://dashiwang.taobao.com/" + "";

}

}

var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}
gv_vAlignTable['u59'] = 'top';
if (window.OnLoad) OnLoad();
