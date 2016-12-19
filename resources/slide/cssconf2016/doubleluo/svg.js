var test = 3;
for(var i = 0;i<document.getElementsByTagName('div').length;i++){
	console.log(i);
var base = getComputedStyle(document.getElementsByTagName('div')[i]).backgroundImage.replace('url("','').replace('")','');
var imagewidth = base.match(/%3Csvg(.*?)width=["|'](.*?)(px)?["|']/)[2]
var imageheight = base.match(/%3Csvg(.*?)height=["|'](.*?)(px)?["|']/)[2]
base = base.replace("width='"+ imagewidth +"'","width='"+ imagewidth*test +"'")
base = base.replace("height='"+ imageheight +"'","height='"+ imageheight*test +"'")
base = base.replace('0 0 '+ imagewidth + ' '+ imageheight,'0 0 '+ imagewidth*test + ' '+ imageheight*test)
if(base.indexOf('transform')>-1){
	base = base.replace("transform='","transform='scale("+test+","+test+") ")
}else{
	base = base.replace("path","path transform='scale("+test+","+test+")'")
}
var image = new Image();
image.src = base;
var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");
canvas.width = imagewidth*test;
canvas.height = imageheight*test;
ctx.width = imagewidth*test;
ctx.height = imageheight*test;
ctx.drawImage(image,0,0);
var a = document.createElement("a");
a.download = document.getElementsByTagName('div')[i].className + '@'+test+'x.png';
a.href = canvas.toDataURL("image/png");
var clickEvent = new MouseEvent("click", {
	"view": window,
	"bubbles": true,
	"cancelable": false
});
a.dispatchEvent(clickEvent);
}