﻿
var PageName = '下载打印－付款';
var PageId = '24297757787f41929d69780a7b8c15c1'
var PageUrl = '下载打印－付款.html'
document.title = '下载打印－付款';
var PageNotes = 
{
"pageName":"下载打印－付款",
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

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u36 = document.getElementById('u36');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u8 = document.getElementById('u8');

var u30 = document.getElementById('u30');

var u21 = document.getElementById('u21');

var u6 = document.getElementById('u6');

var u32 = document.getElementById('u32');

var u15 = document.getElementById('u15');

var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u4 = document.getElementById('u4');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{
windowEvent = e;


if (true) {

	self.location.href="模板选择.html" + GetQuerystring();

}

}
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u1 = document.getElementById('u1');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');

var u3 = document.getElementById('u3');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{
windowEvent = e;


if (true) {

	self.location.href="http://dashiwang.taobao.com/" + "";

}

}

var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u2 = document.getElementById('u2');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{
windowEvent = e;


if (true) {

	self.location.href="个人中心－简历管理.html" + GetQuerystring();

}

}
gv_vAlignTable['u49'] = 'top';
var u47 = document.getElementById('u47');

var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{
windowEvent = e;


if (true) {

	self.location.href="简历大师首页（未登录）.html" + GetQuerystring();

}

}

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();
