var btn=document.getElementById("btn");
var whole=document.getElementsByClassName("whole")[0];
btn.onclick=function(){
	whole.style.display="none";
	div1=document.createElement("div");
	div1.setAttribute("class","log");

	div2=document.createElement("div");
	div2.setAttribute("class","content");
	form=document.createElement("form");
	input=document.createElement("input");
	input.type="text";
	input.setAttribute("class","search1");
	input.setAttribute("onfocus","get()");
	input.setAttribute("onblur","notGet()");
	input.setAttribute("placeholder","用户名");
	form.appendChild(input);
	div2.appendChild(form);
	div1.appendChild(div2);

	div3=document.createElement("div");
	div3.setAttribute("class","content1");
	form1=document.createElement("form");
	input1=document.createElement("input");
	input1.type="password";
	input1.setAttribute("class","search1");
	input1.setAttribute("onfocus","obtain()");
	input1.setAttribute("onblur","notObtain()");
	input1.setAttribute("placeholder","密码");
	form1.appendChild(input1);
	div3.appendChild(form1);
	div1.appendChild(div3);

	div4=document.createElement("div");
	div4.setAttribute("class","foot");
	form2=document.createElement("form");
	input2=document.createElement("input");
	input2.type="submit";
	input2.name="submit";
	input2.value="登录";
	input2.setAttribute("class","button");

	input3=document.createElement("input");
	input3.type="submit";
	input3.name="submit";
	input3.value="注册";
	input3.setAttribute("class","button");
	input3.setAttribute("onclick","show()");

	form2.appendChild(input2);
	form2.appendChild(input3);
	div4.appendChild(form2);
	div1.appendChild(div4);

	document.body.appendChild(div1);
}

p=document.createElement("span");
p.setAttribute("class","men");
p1=document.createElement("span");
p1.setAttribute("class","men");
function get(){
	var name=document.getElementsByClassName("content")[0];
	var text=document.createTextNode("支持中文数字");
	p.appendChild(text);
	name.appendChild(p);
	p1.innerHTML='';
}

function notGet(){
	p.innerHTML='';
	var name1=document.getElementsByClassName("content")[0];
	if(document.getElementsByClassName("search1")[0].value==''){
		var text1=document.createTextNode("用户名不能为空");
		p1.appendChild(text1);
		name1.appendChild(p1);
	}else{
		p1.innerHTML='';
	}
}
span=document.createElement("span");
span.setAttribute("class","men");
span1=document.createElement("span");
span1.setAttribute("class","men");
function obtain(){
	p.innerHTML='';
	p1.innerHTML='';
	span1.innerHTML='';
	var name2=document.getElementsByClassName("content1")[0];
	var text2=document.createTextNode("建议使用两种字符组合");
	span.appendChild(text2);
	name2.appendChild(span);	
}
function notObtain(){
	p.innerHTML='';
	p1.innerHTML='';
	span.innerHTML='';
	var name3=document.getElementsByClassName("content1")[0];
	if(document.getElementsByClassName("search1")[1].value==''){
		var text3=document.createTextNode("密码不能为空");
		span1.appendChild(text3);
		name3.appendChild(span1);
	}else{
		span1.innerHTML='';
	}
}
a=document.createElement("div");
a.setAttribute("id","men1");
b=document.createElement("p");
c=document.createElement("p");
d=document.createElement("p");
count=0;
function show(){
	if(count==0){
		var t1=document.createTextNode("注册成功!");
		b.appendChild(t1);
		a.appendChild(b); 
		document.body.appendChild(a);
	}
	count++;
}

function getStyle(obj, style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	} else {
		return getComputedStyle(obj)[style];
	}
}

var banner=document.getElementsByClassName("banner")[0];
var list=document.getElementById("pop").children;
var tip=document.getElementsByClassName("tip")[0];
var png=document.getElementById("png");
var pmg=document.getElementById("pmg");
var index=1;
var time;
var moving=false;

function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var style in json){
			var now=0;
			if(style=='opacity'){
				now=parseInt(getStyle(obj,style)*100);
			}else{
				now=parseInt(getStyle(obj,style));
			}
			var speed=(json[style]-now) / 8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			var cur=now+speed;
			if(style=='opacity'){
				obj.style[style]=cur/100;
			}else{
				obj.style[style]=cur+'px';
			}
			if(json[style]!==cur){
				isStop=false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
banner.onmouseover=function(){
	animate(png,{opacity:50});  
	animate(pmg,{opacity:50});
	clearInterval(time);
}
banner.onmouseout=function(){
	animate(png,{opacity:0});
	animate(pmg,{opacity:0});
	time=setInterval(then,2000);
}
pmg.onclick=then;
png.onclick=frist;
for(var i=0;i<list.length;i++){
	list[i].index=i;
	list[i].onclick=function(){
		index=this.index+1;
		move();
		animate(tip,{left:-700*index});
	}
}
function then(){
	if(moving){
		return '';
	}
	moving=true;
	index++;
	move();
	animate(tip,{left:-700*index},function(){
		if(index==6){
			tip.style.left="-700px";
			index=1;
		}
		moving=false;
	});
}
time=setInterval(then,2000);
function frist(){
	if(moving){
		return '';
	}
	moving=true;
	index--;
	move();
	animate(tip,{left:-700*index},function(){
		if(index==0){
			tip.style.left="-3500px";
			index=5;
		}
		moving=false;
	});
}
function move(){
	for(var i=0;i<list.length;i++){
		list[i].className='';
	}
	if(index>5){
		list[0].className="active";
	}else if(index<=0){
		list[4].className="active";
	}else{
		list[index-1].className="active";
	}
}
var form=document.getElementsByClassName("search")[0];
form.focus();
var box=document.createElement("div");
box.setAttribute("id","box");
var spn=document.createElement("span");
box.setAttribute("style","position:absolute;width:1000px;height:30px;text-align:center;margin-top:-30px;");
box.appendChild(spn);
spn.setAttribute("style","width:1000px;height:30px;line-height:30px;font-size:25px;color:#00868B;");
document.body.insertBefore(box,whole);
var str="仙芋物语欢迎您！一起来开启甜甜的美味吧！";
var arr=str.split("");
var i=0;
document.body.onload=function(){
	timerr=setInterval(function(){
		if(i<arr.length){
			spn.innerHTML+=arr[i];
		}else{
			clearInterval(timerr);
		}
		i++;
	},400);
}

window.onclick=function(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	document.body.style.backgroundColor="rgb"+"("+r+","+g+","+b+")";
}

