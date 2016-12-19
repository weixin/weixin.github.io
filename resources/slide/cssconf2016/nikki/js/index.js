function startMorph(){var t=["M 0 0 C 50 0 50 0 100 0 C 100 50 100 50 100 100 C 50 100 50 100 0 100 C 0 50 0 50 0 0 Z","M 25,50 C 37.5,25 37.5,25 50,0 75,50 75,50 100,100 50,100 50,100 0,100 12.5,75 12.5,75 25,50 Z","M 50,0 C 77.6,0 100,22.4 100,50 100,77.6 77.6,100 50,100 22.4,100, 0,77.6, 0,50  0,22.4, 22.4,0, 50,0  Z"],e=new Snap("#js-svg-morphing");e.attr({fill:COLOR_RED,"stroke-opacity":0}),flag_morphing=!0;var a=e.path(t[0]);a.attr({id:"js-morphing-path"});var n=function(){flag_morphing===!0&&a.animate({d:t[1]},1e3,function(){a.animate({d:t[2]},1e3,function(){a.animate({d:t[0]},1e3,function(){n()})})})};n();var i=function(){setTimeout(function(){var t=$("#js-morphing-path").attr("d"),e=t.replace(/\.\d+/gi,"");$("#js-morphing-code").text(e.replace(/(.{70})/gi,"$1\n")),flag_morphing&&i()},100)};$("#morphing").on("click",function(){i()})}var SvgLineDrawing=function(t){this.ele=t.svgElement,this.actionTime=t.duration||2,this.timingFunction=t.timingFunction||"ease-in-out",this.init()};SvgLineDrawing.prototype.init=function(){if(/svg/.test(this.ele[0].tagName)){paths=this.ele.find("path,rect,polygon,ellipse,circle,polyline,line");for(var t=0;t<paths.length;t++){var e=paths[t],a=SvgLineDrawing.getLength(e);$(e).css("transition","none").css("stroke-dasharray",a).css("stroke-dashoffset",a)}}},SvgLineDrawing.prototype.action=function(){for(var t=0;t<paths.length;t++){var e=$(paths[t]);e.css("stroke-dashoffset","0%").css("transition","stroke-dashoffset "+this.actionTime+"s ease-in-out")}},SvgLineDrawing.getCircleLength=function(t){var e=t.getAttribute("r");return 2*Math.PI*e},SvgLineDrawing.getEllipseLength=function(t){var e=t.getAttribute("rx"),a=t.getAttribute("ry"),n=2*e,i=2*a;return Math.sqrt(.5*(n*n+i*i))*(2*Math.PI)/2},SvgLineDrawing.getLineLength=function(t){var e=t.getAttribute("x1"),a=t.getAttribute("x2"),n=t.getAttribute("y1"),i=t.getAttribute("y2");return Math.sqrt(Math.pow(a-e,2)+Math.pow(i-n,2))},SvgLineDrawing.getRectLength=function(t){var e=t.getAttribute("width"),a=t.getAttribute("height");return 2*e+2*a},SvgLineDrawing.getPolyLength=function(t){for(var e=t.getAttribute("points").split(" "),a=0,n=e.length-1;n>=0;n--)0===e[n].length&&e.splice(n,1);if(e.length>1){var i=function(t){var e=t.split(",");if(2==e.length&&!isNaN(e[0])&&!isNaN(e[1]))return[parseFloat(e[0]),parseFloat(e[1])]},o=function(t,e){return void 0!=t&&void 0!=e?Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)):0};if(e.length>2)for(var n=0;n<e.length-1;n++)a+=o(i(e[n]),i(e[n+1]));a+=o(i(e[0]),i(e[e.length-1]))}return a},SvgLineDrawing.getLength=function(t){return/rect/.test(t.tagName)?SvgLineDrawing.getRectLength(t):/circle/.test(t.tagName)?SvgLineDrawing.getCircleLength(t):/ellipse/.test(t.tagName)?SvgLineDrawing.getEllipseLength(t):/polygon|polyline/.test(t.tagName)?SvgLineDrawing.getPolyLength(t):/line/.test(t.tagName)?SvgLineDrawing.getLineLength(t):/path/.test(t.tagName)?t.getTotalLength():void 0};var WIDTH=window.innerWidth,HEIGHT=window.innerHeight,HALF_W=WIDTH/2,HALF_H=HEIGHT/2,SECTION_W=960,SECTION_HW=480,SECTION_H=700,SECTION_HH=350,COLOR_BLUE="#0171bb",COLOR_RED="#fe1d45",util={svgInit:function(t,e){var a=Snap(t);return e?a.attr({width:WIDTH,height:HEIGHT}):a.attr({width:SECTION_W,height:SECTION_H}),a}},paperCover=util.svgInit("#js-svg-cover",!1),textBlueMain={"text-anchor":"middle","font-size":"100px",fill:COLOR_BLUE,"font-family":"Impact,sans-serif","class":"blend_darken"},textRedMain={"text-anchor":"middle","font-size":"100px",fill:COLOR_RED,"font-family":"Impact,sans-serif","class":"blend_darken"},paperCoverT1=paperCover.text(SECTION_HW+60,SECTION_HH-30,"MORE THAN"),paperCoverT2=paperCover.text(SECTION_HW-180,SECTION_HH+50,"VECTORS");paperCoverT1.attr(textBlueMain),paperCoverT2.attr(textBlueMain);var paperCoverT3=paperCover.text(SECTION_HW-10,SECTION_HH-30,"THE POSSIBILITIES OF"),paperCoverT4=paperCover.text(SECTION_HW+100,SECTION_HH+50,"SVG ANIMATION");paperCoverT3.attr(textRedMain),paperCoverT4.attr(textRedMain);var paperCoverP1=paperCover.path("M63,53.3C115.6,5.8,171.6,37,181.6,99.1c6.4,40-10,114.8-39.3,124.4c-28.4,9.3-38.1-26-67.4-43.1C33.3,156.2,23.7,88.9,63,53.3z"),paperCoverP2=paperCover.path("M758.2,488.3C774.1,370.9,874,460,898.6,532c15.3,44.9,39.4,118.3-0.9,129.5c-38.9,10.8-105.3-14.7-145.6-34.6C695.1,598.6,750,548.5,758.2,488.3z");paperCoverP1.attr({id:"js_svg1_p1","class":"blend_darken",fill:COLOR_RED}),paperCoverP2.attr({id:"js_svg1_p2","class":"blend_darken",fill:COLOR_BLUE});var lineControl={svgPath:$("#js-svg-line-control path"),dashArray:$("#js-line-control-dasharray .line-control__value"),inputDashArray:$("#js-line-control-dasharray input"),dashOffset:$("#js-line-control-dashoffset .line-control__value"),inputDashOffset:$("#js-line-control-dashoffset input")};lineControl.svgPathLength=lineControl.svgPath[0].getTotalLength(),lineControl.inputDashArray.on("input",function(){var t=Math.floor(lineControl.svgPathLength*$(this).val());lineControl.dashArray.text(t),lineControl.svgPath.css("stroke-dasharray",t)}),lineControl.inputDashOffset.on("input",function(){var t=Math.floor(lineControl.svgPathLength*$(this).val());lineControl.dashOffset.text(t),lineControl.svgPath.css("stroke-dashoffset",t)}),$("#js-svg-line-morphing").on("click",function(){var t=$(this).attr("class");-1==t.indexOf("animated")?$(this).attr("class","svg__line-morphing animated"):$(this).attr("class","svg__line-morphing")});var flag_morphing;$("#js-svg-morpheus").on("click",function(){var t=new SVGMorpheus("#js-svg-morpheus",{rotation:"none"});t.to("dog")}),function(){var t=new Snap("#menu"),e=t.select("#js-svg-menu-path"),a=!1,n="M158.5,0H0v53.1c0,0,19.6-4.6,66-0.2s60.5-3.8,92.5-0.1V0z",i="M158.5,0H0v53.1c0,0,35.4,15.4,82,13.8s76.5-14.1,76.5-14.1V0z",o="M158.5,0H0v55.6c20.9-12.8,38.5,19.5,73.5-1.9s73.2-7.2,85,0V0z";$("#js-menu").on("click",function(){a?(e.stop().animate({d:o},3e3,mina.elastic),a=!a):(e.stop().animate({d:i},320,mina.easeinout,function(){e.stop().animate({d:n},2500,mina.elastic)}),a=!a),$("#menu").toggleClass("menu--open")})}(),startMorph();var followPath={},textPath={};textPath.paperTextPath=new Snap("#js-svg-text-path"),textPath.text=textPath.paperTextPath.select(".svg__text-path"),textPath.path=textPath.paperTextPath.select("#text-p1"),textPath.pathAni=function(){textPath.text.attr("startOffset",0),Snap.animate(-400,588,function(t){textPath.text.attr("startOffset",t),$("#js-path-startOffset").text(t)},4500,mina.easeinout)},followPath.length=textPath.path.getTotalLength();var objectPath={};objectPath.paperObjectPath1=new Snap("#js-svg-object-path-a"),$("#js-svg-object-path-a").length>0&&(objectPath.path1=objectPath.paperObjectPath1.select(".svg__object-path"),objectPath.cicle=objectPath.paperObjectPath1.select(".svb__object-cicle"),objectPath.pathAni1=function(){objectPath.cicle.attr({cx:62.9,cy:14.9}),Snap.animate(0,followPath.length,function(t){var e=objectPath.path1.getPointAtLength(t);objectPath.cicle.attr({cx:e.x,cy:e.y})},4500,mina.easeinout,function(){})},$("#js-svg-object-path-a").on("click",objectPath.pathAni1)),objectPath.paperObjectPath2=new Snap("#js-svg-object-path-b"),objectPath.path2=objectPath.paperObjectPath2.select(".svg__object-path"),objectPath.plane=objectPath.paperObjectPath2.select(".svg__object-plane"),objectPath.pathAni2=function(){Snap.animate(0,followPath.length,function(t){var e=objectPath.path2.getPointAtLength(t);objectPath.plane.transform("t"+(e.x-10)+","+(e.y-10)+"r"+(e.alpha-90))},4500,mina.easeinout,function(){})},$("#js-svg-object-path-b").on("click",objectPath.pathAni2),$("#js-svg-text-path").on("click",textPath.pathAni),function(){function t(){this.animate({d:i.circ,fill:o[0]},n,mina.bounce,e)}function e(){this.animate({d:i.rect,fill:o[1]},n,mina.bounce,a)}function a(){this.animate({d:i.tri,fill:o[2]},n,mina.bounce,t)}var n=1500,i={circ:"M 10,50 A 10,10 0 1 1 90,50 A 10,10 0 1 1 10,50 z",rect:"M10,10h80v80h-80z",tri:"M10,10h80l-40,60z"},o=["#D5BE2F","#B54F4B","#5289C8"],r=Snap("#js-svg-pattern-morphing"),s=r.path().attr({d:i.circ,fill:o[0],id:"test"}).animate({d:i.rect},n,mina.bounce,a).pattern(0,0,200,200).attr({patternTransform:"rotate(45)"});r.rect(0,0,"100%","100%").attr({fill:s})}(),function(){var t=!1,e=null,a=.25;$.fn.toggleBlur=function(t){var e=$(this).data("blur-id"),a=t?"url(#"+e+")":"none";$(this).css({webkitFilter:a,filter:a})},$.fn.setBlur=function(t){var e=$(this).data("blur");t=Math.round(t),$(this).data("blur-value")!=t&&(0==t?$(this).toggleBlur(!1):($(this).toggleBlur(!0),e.firstElementChild.setAttribute("stdDeviation",t+",0"),$(this).data("blur-value",t)))},$.fn.initBlur=function(t){"undefined"==typeof t&&(t=.25),a=t;var e=$(".filters defs").get(0),n=$("#blur").get(0);$(this).each(function(t){var a=n.cloneNode(!0),i="blur"+t;a.setAttribute("id",i),e.appendChild(a),$(this).data("blur",a).data("blur-id",i).data("blur-value",0).data("last-pos",$(this).offset())})},$.updateBlur=function(){$(".js-blur").each(function(){var t=$(this).offset(),e=$(this).data("last-pos"),n=Math.abs(t.left-e.left)*a;$(this).data("last-pos",t),$(this).setBlur(n)}),t&&requestAnimationFrame($.updateBlur)},$.startUpdatingBlur=function(a){"undefined"==typeof a&&(a=-1),null!=e&&(clearTimeout(e),e=null),t||(t=!0,$.updateBlur()),a>-1&&(e=setTimeout($.stopUpdatingBlur,a))},$.stopUpdatingBlur=function(){t=!1}}(),$(document).ready(function(){function t(t){f>t&&(t=0),t>d&&(t=d),t!=m&&$("#blur").get(0).firstElementChild.setAttribute("stdDeviation",t+",0"),m=t}function e(t,e){"undefined"==typeof e&&(e=!0),i(),TweenMax.to(c,e?.8:0,{x:-t*g,ease:Quint.easeOut,onUpdate:a,onComplete:a})}function a(){TweenMax.set(r,{x:c.x+($(window).width()-h)/2,force3D:!0,lazy:!0});var e=l.x-c.x,a=Math.abs(Math.round(e*v));t(a),l.x=c.x;var n=Math.round(-c.x/g);n!=u&&(u=n,$(".gallery-pagination-dot-selected").removeClass("gallery-pagination-dot-selected"),$(".gallery-pagination-dot").eq(u).addClass("gallery-pagination-dot-selected"))}function n(){if(x){a();var t=C.x-b.x;for(b.x=C.x,w+=t,T.push(t);T.length>j;)T.splice(0,1);c.x+=t,requestAnimationFrame(n)}}function i(){null!=M&&(M.kill(),M=null,a())}var o=$(".gallery"),r=$(".gallery-pictures"),s=$(".gallery-picture"),l={x:0},c={x:0},u=-1,h=700,p=120,g=h+p,f=2,d=200,v=.25,m=0,x=!1,b={x:0},C={x:0},w=0,_=10,T=[],j=10,M=null;r.css({webkitFilter:"url('#blur')",filter:"url('#blur')"}),s.each(function(t){var a=$(this);a.click(function(){Math.abs(w)<_&&e(t)}),$(".gallery-pagination-dot").eq(t).click(function(){e(t)})}),o.mousedown(function(t){t.preventDefault(),x=!0,C.x=t.pageX,b.x=C.x,w=0,T=[],i(),n()}),$(document).mousemove(function(t){x&&(C.x=t.pageX)}),$(document).mouseup(function(t){if(x){x=!1;for(var e=0,n=0;n<T.length;n++)e+=T[n];e/=T.length;var i=c.x+20*e;i=Math.round(i/g)*g;var o=-i/g,r=0;0>o?(r=o,o=0):o>=s.length&&(r=o-(s.length-1),o=s.length-1),0!=r&&(i=-o*g),M=TweenMax.to(c,1-Math.abs(r)/20,{x:i,ease:Quint.easeOut,onUpdate:a,onComplete:a}),Math.abs(w)>=_&&(t.preventDefault(),t.stopPropagation())}}),e(0,!1)}),$(document).ready(function(){function t(){r||(a(400),TweenMax.to(o,.2,{autoAlpha:1}),TweenMax.fromTo(i,.5,{x:(-$(window).width()-i.width())/2-50,scale:.9,autoAlpha:1},{delay:.1,rotationY:0,scale:1,opacity:1,x:0,z:0,ease:Elastic.easeOut,easeParams:[.4,.3],force3D:!1}),$.startUpdatingBlur(800))}function e(){r||(a(400),TweenMax.to(o,.3,{delay:.3,autoAlpha:0}),TweenMax.to(i,.3,{x:($(window).width()+i.width())/2+100,scale:.9,ease:Quad.easeInOut,force3D:!1,onComplete:function(){TweenMax.set(i,{autoAlpha:0})}}),$.startUpdatingBlur(400))}function a(t){r=!0,null!=s&&(clearTimeout(s),s=null),s=setTimeout(n,t)}function n(){r=!1}var i=$(".modal"),o=$(".slide-background.page__filter-blur"),r=!1,s=null;TweenMax.set(i,{autoAlpha:0});$(".open-modal").click(function(){t()}),$(".close-modal,.modal-overlay,.input-submit").click(function(){e()}),i.initBlur(.5)}),$(document).ready(function(){function t(t){$(".send").css({webkitFilter:t,mozFilter:t,filter:t})}function e(){t("url(#goo)")}function a(){t("url(#goo-no-comp)")}function n(){s||(s=!0,TweenMax.to(c,.3,{x:100,y:-100,ease:Quad.easeIn,onComplete:function(){a(),c.css({display:"none"})}}),TweenMax.to(l,.6,{scale:.5,ease:Back.easeOut}),p.each(function(t){o($(this),50,.1,1+.2*t,1.1+.3*t)}),setTimeout(function(){p.each(function(t){r($(this),.8+.1*t)}),TweenMax.to(h,.7,{delay:.7,opacity:1}),setTimeout(function(){e(),TweenMax.fromTo(u,1.5,{display:"inline-block",opacity:0,scale:.1},{scale:1,ease:Elastic.easeOut}),TweenMax.to(u,.5,{delay:0,opacity:1}),TweenMax.to(l,.3,{scale:1,ease:Back.easeOut}),setTimeout(function(){TweenMax.to(h,.4,{opacity:0}),TweenMax.to(u,.2,{opacity:0,onComplete:function(){s=!1,u.css({display:"none"}),TweenMax.fromTo(c,.2,{display:"inline-block",opacity:0,x:0,y:0},{opacity:1})}})},2e3)},1e3)},3e3+3e3*Math.random()))}function i(t){function e(){var a=t.data("circle");TweenMax.set(t,{x:Math.cos(a.angle)*a.radius,y:Math.sin(a.angle)*a.radius}),requestAnimationFrame(e)}"undefined"==typeof t.data("circle")&&(t.data("circle",{radius:0,angle:0}),e())}function o(t,e,a,n,o){i(t),t.data("circle").radius=0,t.data("circle").angle=0,TweenMax.to(t.data("circle"),n,{delay:a,radius:e,ease:Quad.easeInOut}),TweenMax.to(t.data("circle"),o,{delay:a,angle:2*Math.PI,ease:Linear.easeNone,repeat:-1})}function r(t,e){TweenMax.to(t.data("circle"),e,{radius:0,ease:Quad.easeInOut,onComplete:function(){TweenMax.killTweensOf(t.data("circle"))}})}var s=!1,l=$(".send-button"),c=$(".send-icon"),u=$(".sent-icon"),h=$(".sent-bg"),p=$(".send-button,.send-indicator-dot");l.click(function(t){n()})}),$(document).on("mouseover",function(t){"js_svg1_p1"===t.target.id?paperCoverP1.stop().animate({d:"M63,53.3C187-43.1,750-2,898,227c104.2,161.3,85,261-298,369c-28.7,8.1-318.1,141.1-490,0C15,518-51,142,63,53.3z"},1e3,mina.bounce):"js_svg1_p2"===t.target.id?paperCoverP2.stop().animate({d:"M103,74C274.4-5.4,612-7,794,80c188.2,89.9,211,510,103.7,581.4C797.4,728.2,413.1,599.2,208,549C24,504-87,162,103,74z"},1e3,mina.bounce):"js_svg_rect"===t.target.id}),$(document).on("mouseout",function(t){"js_svg1_p1"===t.target.id?paperCoverP1.stop().animate({d:"M63,53.3C115.6,5.8,171.6,37,181.6,99.1c6.4,40-10,114.8-39.3,124.4c-28.4,9.3-38.1-26-67.4-43.1C33.3,156.2,23.7,88.9,63,53.3z"},300,mina.easeout):"js_svg1_p2"===t.target.id&&paperCoverP2.stop().animate({d:"M758.2,488.3C774.1,370.9,874,460,898.6,532c15.3,44.9,39.4,118.3-0.9,129.5c-38.9,10.8-105.3-14.7-145.6-34.6C695.1,598.6,750,548.5,758.2,488.3z"},300,mina.easeout)});var deploy={svgElement:$("#js-svg-cssconf-logo"),duration:2},CSSConf=new SvgLineDrawing(deploy);$(document).on("click",function(t){var e=t.target.id;"js-svg-line-example"===e&&$("#js-svg-line-example").attr("class","svg__line-example svg__line-example_action")}),Reveal.addEventListener("slidechanged",function(t){var e=t.currentSlide,a=e.id;if($(".reference").hide(),$(".backgrounds__fix").removeClass("show"),$(".backgrounds__fix-"+a).addClass("show"),-1!==a.indexOf("example")){var n=a.slice(a.lastIndexOf("_")+1);$(".reference_"+n).show()}}),Reveal.addEventListener("fragmentshown",function(t){var e=t.fragment,a=e.id,n=e.className;if("js-line-drawing"===a&&(CSSConf=new SvgLineDrawing(deploy),setTimeout(function(){CSSConf.action()},100)),-1!==n.indexOf("js-code-vector-intro")){var i=n.slice(n.indexOf("_")+1,n.indexOf(" "));$("#js-svg-vector-intro").children().css("stroke-opacity","0.3"),$("#js-svg-vector-intro "+i).css("stroke-opacity","1")}}),$("#js-blobs").on("click",function(){$(this).toggleClass("blobs_animate")}),$("#js-css-blobs").on("click",function(){$(this).toggleClass("css-blobs_animate")});