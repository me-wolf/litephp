﻿
var PageName = '模板主页面编辑 的副本';
var PageId = '7ae084acd3174fc689460a57b3c3d0e6'
var PageUrl = '模板主页面编辑_的副本.html'
document.title = '模板主页面编辑 的副本';
var PageNotes = 
{
"pageName":"模板主页面编辑 的副本",
"showNotesNames":"False",
"默认":"<p style=\"text-align:left;\"><span style=\"\">增加条目，如“自荐信”所示，新增项目会放在最后。<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">该页面需要防止鼠标操作COPY。<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">每5分钟一次自动保存。<\/span><\/p>"}
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

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u51 = document.getElementById('u51');

var u25 = document.getElementById('u25');

var u16 = document.getElementById('u16');

var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u31 = document.getElementById('u31');

var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{
windowEvent = e;


if (true) {

	self.location.href="简历大师首页（未登录）.html" + GetQuerystring();

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u23 = document.getElementById('u23');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u53 = document.getElementById('u53');

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}
gv_vAlignTable['u87'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u27 = document.getElementById('u27');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u66 = document.getElementById('u66');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u8 = document.getElementById('u8');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u19 = document.getElementById('u19');

var u49 = document.getElementById('u49');

var u79 = document.getElementById('u79');

var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{
windowEvent = e;


if (true) {

	self.location.href="个人中心－简历管理.html" + GetQuerystring();

}

}
gv_vAlignTable['u81'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u11 = document.getElementById('u11');

var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u45 = document.getElementById('u45');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{
windowEvent = e;


if (true) {

	self.location.href="模板选择.html" + GetQuerystring();

}

}
gv_vAlignTable['u75'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u2 = document.getElementById('u2');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u47 = document.getElementById('u47');

var u68 = document.getElementById('u68');

var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u84 = document.getElementById('u84');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u4 = document.getElementById('u4');

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u61 = document.getElementById('u61');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u82 = document.getElementById('u82');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u12 = document.getElementById('u12');

var u9 = document.getElementById('u9');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u33 = document.getElementById('u33');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}
gv_vAlignTable['u63'] = 'top';
var u18 = document.getElementById('u18');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{
windowEvent = e;


if (true) {

	self.location.href="下载打印－付费提示.html" + GetQuerystring();

}

}

var u29 = document.getElementById('u29');

var u59 = document.getElementById('u59');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
if (window.OnLoad) OnLoad();
