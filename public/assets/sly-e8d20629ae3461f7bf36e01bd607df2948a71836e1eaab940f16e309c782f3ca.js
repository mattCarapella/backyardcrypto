!function(xe,e,De){"use strict";function Ae(o,e,n){function s(e){var t=_.length;if(U.old=xe.extend({},U),R=j?0:F[Y.horizontal?"width":"height"](),Z=$[Y.horizontal?"width":"height"](),W=j?o:L[Y.horizontal?"outerWidth":"outerHeight"](),_.length=0,U.start=0,U.end=rt(W-R,0),de){te.length,ee=L.children(Y.itemSelector),te.length=0;var d,u=Xe(L,Y.horizontal?"paddingLeft":"paddingTop"),f=Xe(L,Y.horizontal?"paddingRight":"paddingBottom"),a="border-box"===xe(ee).css("boxSizing"),v="none"!==ee.css("float"),h=0,p=ee.length-1;W=0,ee.each(function(e,t){var a=xe(t),n=t.getBoundingClientRect(),i=it(Y.horizontal?n.width||n.right-n.left:n.height||n.bottom-n.top),r=Xe(a,Y.horizontal?"marginLeft":"marginTop"),s=Xe(a,Y.horizontal?"marginRight":"marginBottom"),o=i+r+s,l=!r||!s,c={};c.el=t,c.size=l?i:o,c.half=c.size/2,c.start=W+(l?r:0),c.center=c.start-it(R/2-c.size/2),c.end=c.start-R+c.size,e||(W+=u),W+=o,Y.horizontal||v||s&&r&&0<e&&(W-=st(r,s)),e===p&&(c.end+=f,W+=f,h=l?s:0),te.push(c),d=c}),L[0].style[Y.horizontal?"width":"height"]=(a?W:W-u-f)+"px",W-=h,te.length?(U.start=te[0][le?"center":"start"],U.end=le?d.center:R<W?d.end:U.start):U.start=U.end=0}if(U.center=it(U.end/2+U.start/2),m(),Q.length&&0<Z&&(Y.dynamicHandle?(G=Ye(G=U.start===U.end?Z:it(Z*R/W),Y.minHandleSize,Z),Q[0].style[Y.horizontal?"width":"height"]=G+"px"):G=Q[Y.horizontal?"outerWidth":"outerHeight"](),J.end=Z-G,Se||c()),!j&&0<R){var n=U.start,i="";if(de)xe.each(te,function(e,t){le?_.push(t.center):t.start+t.size>n&&n<=U.end&&(n=t.start,_.push(n),(n+=R)>U.end&&n<U.end+R&&_.push(U.end))});else for(;n-R<U.end;)_.push(n),n+=R;if(K[0]&&t!==_.length){for(var r=0;r<_.length;r++)i+=Y.pageBuilder.call(M,r);(V=K.html(i).children()).eq(ae.activePage).addClass(Y.activeClass)}}if(ae.slideeSize=W,ae.frameSize=R,ae.sbSize=Z,ae.handleSize=G,de){e&&null!=Y.startAt&&(g(Y.startAt),M[ce?"toCenter":"toStart"](Y.startAt));var s=te[ae.activeItem];l(ce&&s?s.center:Ye(U.dest,U.start,U.end))}else e?null!=Y.startAt&&l(Y.startAt,1):l(Ye(U.dest,U.start,U.end));N("load")}function l(e,t,a){if(de&&ze.released&&!a){var n=v(e),i=e>U.start&&e<U.end;ce?(i&&(e=te[n.centerItem].center),le&&Y.activateMiddle&&g(n.centerItem)):i&&(e=te[n.firstItem].start)}ze.init&&ze.slidee&&Y.elasticBounds?e>U.end?e=U.end+(e-U.end)/6:e<U.start&&(e=U.start+(e-U.start)/6):e=Ye(e,U.start,U.end),be.start=+new Date,be.time=0,be.from=U.cur,be.to=e,be.delta=e-U.cur,be.tweesing=ze.tweese||ze.init&&!ze.slidee,be.immediate=!be.tweesing&&(t||ze.init&&ze.slidee||!Y.speed),ze.tweese=0,e!==U.dest&&(U.dest=e,N("change"),Se||r()),y(),m(),h(),d()}function r(){if(M.initialized){if(!Se)return Se=Ue(r),void(ze.released&&N("moveStart"));be.immediate?U.cur=be.to:be.tweesing?(be.tweeseDelta=be.to-U.cur,tt(be.tweeseDelta)<.1?U.cur=be.to:U.cur+=be.tweeseDelta*(ze.released?Y.swingSpeed:Y.syncSpeed)):(be.time=st(+new Date-be.start,Y.speed),U.cur=be.from+be.delta*xe.easing[Y.easing](be.time/Y.speed,be.time,0,1,Y.speed)),be.to===U.cur?(U.cur=be.to,ze.tweese=Se=0):Se=Ue(r),N("move"),j||(je?L[0].style[je]=Fe+(Y.horizontal?"translateX":"translateY")+"("+-U.cur+"px)":L[0].style[Y.horizontal?"left":"top"]=-it(U.cur)+"px"),!Se&&ze.released&&N("moveEnd"),c()}}function c(){Q.length&&(J.cur=U.start===U.end?0:((ze.init&&!ze.slidee?U.dest:U.cur)-U.start)/(U.end-U.start)*J.end,J.cur=Ye(it(J.cur),J.start,J.end),Ie.hPos!==J.cur&&(Ie.hPos=J.cur,je?Q[0].style[je]=Fe+(Y.horizontal?"translateX":"translateY")+"("+J.cur+"px)":Q[0].style[Y.horizontal?"left":"top"]=J.cur+"px"))}function d(){V[0]&&Ie.page!==ae.activePage&&(Ie.page=ae.activePage,V.removeClass(Y.activeClass).eq(ae.activePage).addClass(Y.activeClass),N("activePage",Ie.page))}function t(){Pe.speed&&U.cur!==(0<Pe.speed?U.end:U.start)||M.stop(),ke=ze.init?Ue(t):0,Pe.now=+new Date,Pe.pos=U.cur+(Pe.now-Pe.lastTime)/1e3*Pe.speed,l(ze.init?Pe.pos:it(Pe.pos)),ze.init||U.cur!==U.dest||N("moveEnd"),Pe.lastTime=Pe.now}function a(e,t,a){if("boolean"===Ee(t)&&(a=t,t=De),t===De)l(U[e],a);else{if(ce&&"center"!==e)return;var n=M.getPos(t);n&&l(n[e],a,!ce)}}function u(e){return null!=e?He(e)?0<=e&&e<te.length?e:-1:ee.index(e):-1}function f(e){return u(He(e)&&e<0?e+te.length:e)}function g(e,t){var a=u(e);return!(!de||a<0)&&((Ie.active!==a||t)&&(ee.eq(ae.activeItem).removeClass(Y.activeClass),ee.eq(a).addClass(Y.activeClass),Ie.active=ae.activeItem=a,h(),N("active",a)),a)}function v(e){e=Ye(He(e)?e:U.dest,U.start,U.end);var t={},a=le?0:R/2;if(!j)for(var n=0,i=_.length;n<i;n++){if(e>=U.end||n===_.length-1){t.activePage=_.length-1;break}if(e<=_[n]+a){t.activePage=n;break}}if(de){for(var r=!1,s=!1,o=!1,l=0,c=te.length;l<c;l++)if(!1===r&&e<=te[l].start+te[l].half&&(r=l),!1===o&&e<=te[l].center+te[l].half&&(o=l),l===c-1||e<=te[l].end+te[l].half){s=l;break}t.firstItem=He(r)?r:0,t.centerItem=He(o)?o:t.firstItem,t.lastItem=He(s)?s:t.centerItem}return t}function m(e){xe.extend(ae,v(e))}function h(){var e=U.dest<=U.start,t=U.dest>=U.end,a=(e?1:0)|(t?2:0);if(Ie.slideePosState!==a&&(Ie.slideePosState=a,me.is("button,input")&&me.prop("disabled",e),ye.is("button,input")&&ye.prop("disabled",t),me.add(he)[e?"addClass":"removeClass"](Y.disabledClass),ye.add(ve)[t?"addClass":"removeClass"](Y.disabledClass)),Ie.fwdbwdState!==a&&ze.released&&(Ie.fwdbwdState=a,he.is("button,input")&&he.prop("disabled",e),ve.is("button,input")&&ve.prop("disabled",t)),de&&null!=ae.activeItem){var n=0===ae.activeItem,i=ae.activeItem>=te.length-1,r=(n?1:0)|(i?2:0);Ie.itemsButtonState!==r&&(Ie.itemsButtonState=r,pe.is("button,input")&&pe.prop("disabled",n),ge.is("button,input")&&ge.prop("disabled",i),pe[n?"addClass":"removeClass"](Y.disabledClass),ge[i?"addClass":"removeClass"](Y.disabledClass))}}function i(e,t,a){if(e=f(e),t=f(t),-1<e&&-1<t&&e!==t&&(!a||t!==e-1)&&(a||t!==e+1)){ee.eq(e)[a?"insertAfter":"insertBefore"](te[t].el);var n=e<t?e:a?t:t-1,i=t<e?e:a?t+1:t,r=t<e;null!=ae.activeItem&&(e===ae.activeItem?Ie.active=ae.activeItem=a?r?t+1:t:r?t:t-1:ae.activeItem>n&&ae.activeItem<i&&(Ie.active=ae.activeItem+=r?1:-1)),s()}}function p(e,t){for(var a=0,n=we[e].length;a<n;a++)if(we[e][a]===t)return a;return-1}function y(){ze.released&&!M.isPaused&&M.resume()}function w(e){return it(Ye(e,J.start,J.end)/J.end*(U.end-U.start))+U.start}function I(){ze.history[0]=ze.history[1],ze.history[1]=ze.history[2],ze.history[2]=ze.history[3],ze.history[3]=ze.delta}function b(e){ze.released=0,ze.source=e,ze.slidee="slidee"===e}function P(e){var t="touchstart"===e.type,a=e.data.source,n="slidee"===a;ze.init||!t&&S(e.target)||("handle"!==a||Y.dragHandle&&J.start!==J.end)&&(n&&!(t?Y.touchDragging:Y.mouseDragging&&e.which<2)||(t||qe(e),b(a),ze.init=0,ze.$source=xe(e.target),ze.touch=t,ze.pointer=t?e.originalEvent.touches[0]:e,ze.initX=ze.pointer.pageX,ze.initY=ze.pointer.pageY,ze.initPos=n?U.cur:J.cur,ze.start=+new Date,ze.time=0,ze.path=0,ze.delta=0,ze.locked=0,ze.history=[0,0,0,0],ze.pathToLock=n?t?30:10:0,$e.on(t?Ge:Ze,z),M.pause(1),(n?L:Q).addClass(Y.draggedClass),N("moveStart"),n&&(Be=setInterval(I,10))))}function z(e){if(ze.released="mouseup"===e.type||"touchend"===e.type,ze.pointer=ze.touch?e.originalEvent[ze.released?"changedTouches":"touches"][0]:e,ze.pathX=ze.pointer.pageX-ze.initX,ze.pathY=ze.pointer.pageY-ze.initY,ze.path=at(nt(ze.pathX,2)+nt(ze.pathY,2)),ze.delta=Y.horizontal?ze.pathX:ze.pathY,ze.released||!(ze.path<1)){if(!ze.init){if(ze.path<Y.dragThreshold)return ze.released?C():De;if(!(Y.horizontal?tt(ze.pathX)>tt(ze.pathY):tt(ze.pathX)<tt(ze.pathY)))return C();ze.init=1}qe(e),!ze.locked&&ze.path>ze.pathToLock&&ze.slidee&&(ze.locked=1,ze.$source.on(Ke,Oe)),ze.released&&(C(),Y.releaseSwing&&ze.slidee&&(ze.swing=(ze.delta-ze.history[0])/40*300,ze.delta+=ze.swing,ze.tweese=10<tt(ze.swing))),l(ze.slidee?it(ze.initPos-ze.delta):w(ze.initPos+ze.delta))}}function C(){clearInterval(Be),ze.released=!0,$e.off(ze.touch?Ge:Ze,z),(ze.slidee?L:Q).removeClass(Y.draggedClass),setTimeout(function(){ze.$source.off(Ke,Oe)}),U.cur===U.dest&&ze.init&&N("moveEnd"),M.resume(1),ze.init=0}function S(e){return~xe.inArray(e.nodeName,_e)||xe(e).is(Y.interactive)}function B(){M.stop(),$e.off("mouseup",B)}function T(e){switch(qe(e),this){case ve[0]:case he[0]:M.moveBy(ve.is(this)?Y.moveBy:-Y.moveBy),$e.on("mouseup",B);break;case pe[0]:M.prev();break;case ge[0]:M.next();break;case me[0]:M.prevPage();break;case ye[0]:M.nextPage()}}function k(e){return Ce.curDelta=(Y.horizontal?e.deltaY||e.deltaX:e.deltaY)||-e.wheelDelta,Ce.curDelta/=1===e.deltaMode?3:100,de?(Le=+new Date,Ce.last<Le-Ce.resetTime&&(Ce.delta=0),Ce.last=Le,Ce.delta+=Ce.curDelta,tt(Ce.delta)<1?Ce.finalDelta=0:(Ce.finalDelta=it(Ce.delta/1),Ce.delta%=1),Ce.finalDelta):Ce.curDelta}function x(e){e.originalEvent[Re]=M;var t=+new Date;if(ot+Y.scrollHijack>t&&ue[0]!==document&&ue[0]!==window)ot=t;else if(Y.scrollBy&&U.start!==U.end){var a=k(e.originalEvent);(Y.scrollTrap||0<a&&U.dest<U.end||a<0&&U.dest>U.start)&&qe(e,1),M.slideBy(Y.scrollBy*a)}}function D(e){Y.clickBar&&e.target===$[0]&&(qe(e),l(w((Y.horizontal?e.pageX-$.offset().left:e.pageY-$.offset().top)-G/2)))}function A(e){if(Y.keyboardNavBy)switch(e.which){case Y.horizontal?37:38:qe(e),M["pages"===Y.keyboardNavBy?"prevPage":"prev"]();break;case Y.horizontal?39:40:qe(e),M["pages"===Y.keyboardNavBy?"nextPage":"next"]()}}function E(e){S(this)?e.originalEvent[Re+"ignore"]=!0:this.parentNode!==L[0]||e.originalEvent[Re+"ignore"]||M.activate(this)}function q(){this.parentNode===K[0]&&M.activatePage(V.index(this))}function O(e){Y.pauseOnHover&&M["mouseenter"===e.type?"pause":"resume"](2)}function N(e,t){if(we[e]){for(X=we[e].length,et.length=0,H=0;H<X;H++)et.push(we[e][H]);for(H=0;H<X;H++)et[H].call(M,e,t)}}if(!(this instanceof Ae))return new Ae(o,e,n);var H,X,Y=xe.extend({},Ae.defaults,e),M=this,j=He(o),F=xe(o),L=Y.slidee?xe(Y.slidee).eq(0):F.children().eq(0),R=0,W=0,U={start:0,center:0,end:0,cur:0,dest:0},$=xe(Y.scrollBar).eq(0),Q=$.children().eq(0),Z=0,G=0,J={start:0,end:0,cur:0},K=xe(Y.pagesBar),V=0,_=[],ee=0,te=[],ae={firstItem:0,lastItem:0,centerItem:0,activeItem:null,activePage:0},ne=new Me(F[0]),ie=new Me(L[0]),re=new Me($[0]),se=new Me(Q[0]),oe="basic"===Y.itemNav,le="forceCentered"===Y.itemNav,ce="centered"===Y.itemNav||le,de=!j&&(oe||ce||le),ue=Y.scrollSource?xe(Y.scrollSource):F,fe=Y.dragSource?xe(Y.dragSource):F,ve=xe(Y.forward),he=xe(Y.backward),pe=xe(Y.prev),ge=xe(Y.next),me=xe(Y.prevPage),ye=xe(Y.nextPage),we={},Ie={},be={},Pe={},ze={released:1},Ce={last:0,delta:0,resetTime:200},Se=0,Be=0,Te=0,ke=0;j||(o=F[0]),M.initialized=0,M.frame=o,M.slidee=L[0],M.pos=U,M.rel=ae,M.items=te,M.pages=_,M.isPaused=0,M.options=Y,M.dragging=ze,M.reload=function(){s()},M.getPos=function(e){if(de){var t=u(e);return-1!==t&&te[t]}var a=L.find(e).eq(0);if(a[0]){var n=Y.horizontal?a.offset().left-L.offset().left:a.offset().top-L.offset().top,i=a[Y.horizontal?"outerWidth":"outerHeight"]();return{start:n,center:n-R/2+i/2,end:n-R+i,size:i}}return!1},M.moveBy=function(e){Pe.speed=e,!ze.init&&Pe.speed&&U.cur!==(0<Pe.speed?U.end:U.start)&&(Pe.lastTime=+new Date,Pe.startPos=U.cur,b("button"),ze.init=1,N("moveStart"),We(ke),t())},M.stop=function(){"button"===ze.source&&(ze.init=0,ze.released=1)},M.prev=function(){M.activate(null==ae.activeItem?0:ae.activeItem-1)},M.next=function(){M.activate(null==ae.activeItem?0:ae.activeItem+1)},M.prevPage=function(){M.activatePage(ae.activePage-1)},M.nextPage=function(){M.activatePage(ae.activePage+1)},M.slideBy=function(e,t){e&&(de?M[ce?"toCenter":"toStart"](Ye((ce?ae.centerItem:ae.firstItem)+Y.scrollBy*e,0,te.length)):l(U.dest+e,t))},M.slideTo=function(e,t){l(e,t)},M.toStart=function(e,t){a("start",e,t)},M.toEnd=function(e,t){a("end",e,t)},M.toCenter=function(e,t){a("center",e,t)},M.getIndex=u,M.activate=function(e,t){var a=g(e);Y.smart&&!1!==a&&(ce?M.toCenter(a,t):a>=ae.lastItem?M.toStart(a,t):a<=ae.firstItem?M.toEnd(a,t):y())},M.activatePage=function(e,t){He(e)&&l(_[Ye(e,0,_.length-1)],t)},M.resume=function(e){Y.cycleBy&&Y.cycleInterval&&("items"!==Y.cycleBy||te[0]&&null!=ae.activeItem)&&!(e<M.isPaused)&&(M.isPaused=0,Te?Te=clearTimeout(Te):N("resume"),Te=setTimeout(function(){switch(N("cycle"),Y.cycleBy){case"items":M.activate(ae.activeItem>=te.length-1?0:ae.activeItem+1);break;case"pages":M.activatePage(ae.activePage>=_.length-1?0:ae.activePage+1)}},Y.cycleInterval))},M.pause=function(e){e<M.isPaused||(M.isPaused=e||100,Te&&(Te=clearTimeout(Te),N("pause")))},M.toggle=function(){M[Te?"pause":"resume"]()},M.set=function(e,t){xe.isPlainObject(e)?xe.extend(Y,e):Y.hasOwnProperty(e)&&(Y[e]=t)},M.add=function(e,t){var a=xe(e);de?(null==t||!te[0]||t>=te.length?a.appendTo(L):te.length&&a.insertBefore(te[t].el),null!=ae.activeItem&&t<=ae.activeItem&&(Ie.active=ae.activeItem+=a.length)):L.append(a),s()},M.remove=function(e){if(de){var t=f(e);if(-1<t){ee.eq(t).remove();var a=t===ae.activeItem;null!=ae.activeItem&&t<ae.activeItem&&(Ie.active=--ae.activeItem),s(),a&&(Ie.active=null,M.activate(ae.activeItem))}}else xe(e).remove(),s()},M.moveAfter=function(e,t){i(e,t,1)},M.moveBefore=function(e,t){i(e,t)},M.on=function(e,t){if("object"===Ee(e))for(var a in e)e.hasOwnProperty(a)&&M.on(a,e[a]);else if("function"===Ee(t))for(var n=e.split(" "),i=0,r=n.length;i<r;i++)we[n[i]]=we[n[i]]||[],-1===p(n[i],t)&&we[n[i]].push(t);else if("array"===Ee(t))for(var s=0,o=t.length;s<o;s++)M.on(e,t[s])},M.one=function(e,t){function a(){t.apply(M,arguments),M.off(e,a)}M.on(e,a)},M.off=function(e,t){if(t instanceof Array)for(var a=0,n=t.length;a<n;a++)M.off(e,t[a]);else for(var i=e.split(" "),r=0,s=i.length;r<s;r++)if(we[i[r]]=we[i[r]]||[],null==t)we[i[r]].length=0;else{var o=p(i[r],t);-1!==o&&we[i[r]].splice(o,1)}},M.destroy=function(){return Ae.removeInstance(o),ue.add(Q).add($).add(K).add(ve).add(he).add(pe).add(ge).add(me).add(ye).off("."+Re),$e.off("keydown",A),pe.add(ge).add(me).add(ye).removeClass(Y.disabledClass),ee&&null!=ae.activeItem&&ee.eq(ae.activeItem).removeClass(Y.activeClass),K.empty(),j||(F.off("."+Re),ne.restore(),ie.restore(),re.restore(),se.restore(),xe.removeData(o,Re)),te.length=_.length=0,Ie={},M.initialized=0,M},M.init=function(){if(!M.initialized){if(Ae.getInstance(o))throw new Error("There is already a Sly instance on this element");Ae.storeInstance(o,M),M.on(n);var e=["overflow","position"],t=["position","webkitTransform","msTransform","transform","left","top","width","height"];ne.save.apply(ne,e),re.save.apply(re,e),ie.save.apply(ie,t),se.save.apply(se,t);var a=Q;return j||(a=a.add(L),F.css("overflow","hidden"),je||"static"!==F.css("position")||F.css("position","relative")),je?Fe&&a.css(je,Fe):("static"===$.css("position")&&$.css("position","relative"),a.css({position:"absolute"})),Y.forward&&ve.on(Ve,T),Y.backward&&he.on(Ve,T),Y.prev&&pe.on(Ke,T),Y.next&&ge.on(Ke,T),Y.prevPage&&me.on(Ke,T),Y.nextPage&&ye.on(Ke,T),ue.on(Je,x),$[0]&&$.on(Ke,D),de&&Y.activateOn&&F.on(Y.activateOn+"."+Re,"*",E),K[0]&&Y.activatePageOn&&K.on(Y.activatePageOn+"."+Re,"*",q),fe.on(Qe,{source:"slidee"},P),Q&&Q.on(Qe,{source:"handle"},P),$e.on("keydown",A),j||(F.on("mouseenter."+Re+" mouseleave."+Re,O),F.on("scroll."+Re,Ne)),M.initialized=1,s(!0),Y.cycleBy&&!j&&M[Y.startPaused?"pause":"resume"](),M}}}function Ee(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof e}function qe(e,t){e.preventDefault(),t&&e.stopPropagation()}function Oe(e){qe(e,1),xe(this).off(e.type,Oe)}function Ne(){this.scrollLeft=0,this.scrollTop=0}function He(e){return!isNaN(parseFloat(e))&&isFinite(e)}function Xe(e,t){return 0|it(String(e.css(t)).replace(/[^\-0-9.]/g,""))}function Ye(e,t,a){return e<t?t:a<e?a:e}function Me(t){var a={style:{},save:function(){if(t&&t.nodeType){for(var e=0;e<arguments.length;e++)a.style[arguments[e]]=t.style[arguments[e]];return a}},restore:function(){if(t&&t.nodeType){for(var e in a.style)a.style.hasOwnProperty(e)&&(t.style[e]=a.style[e]);return a}}};return a}var je,Fe,Le,t="sly",a="Sly",Re=t,We=e.cancelAnimationFrame||e.cancelRequestAnimationFrame,Ue=e.requestAnimationFrame,$e=xe(document),Qe="touchstart."+Re+" mousedown."+Re,Ze="mousemove."+Re+" mouseup."+Re,Ge="touchmove."+Re+" touchend."+Re,Je=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+Re,Ke="click."+Re,Ve="mousedown."+Re,_e=["INPUT","SELECT","BUTTON","TEXTAREA"],et=[],tt=Math.abs,at=Math.sqrt,nt=Math.pow,it=Math.round,rt=Math.max,st=Math.min,ot=0;$e.on(Je,function(e){var t=e.originalEvent[Re],a=+new Date;(!t||t.options.scrollHijack<a-ot)&&(ot=a)}),Ae.getInstance=function(e){return xe.data(e,Re)},Ae.storeInstance=function(e,t){return xe.data(e,Re,t)},Ae.removeInstance=function(e){return xe.removeData(e,Re)},function(t){function e(e){var t=(new Date).getTime(),a=Math.max(0,16-(t-i)),n=setTimeout(e,a);return i=t,n}Ue=t.requestAnimationFrame||t.webkitRequestAnimationFrame||e;var i=(new Date).getTime(),a=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.clearTimeout;We=function(e){a.call(t,e)}}(window),function(){function e(e){for(var t=0,a=i.length;t<a;t++){var n=i[t]?i[t]+e.charAt(0).toUpperCase()+e.slice(1):e;if(null!=r.style[n])return n}}var i=["","Webkit","Moz","ms","O"],r=document.createElement("div");je=e("transform"),Fe=e("perspective")?"translateZ(0) ":""}(),e[a]=Ae,xe.fn[t]=function(n,i){var r,s;return xe.isPlainObject(n)||("string"!==Ee(n)&&!1!==n||(r=!1===n?"destroy":n,s=Array.prototype.slice.call(arguments,1)),n={}),this.each(function(e,t){var a=Ae.getInstance(t);a||r?a&&r&&a[r]&&a[r].apply(a,s):a=new Ae(t,n,i).init()})},Ae.defaults={slidee:null,horizontal:!1,itemNav:null,itemSelector:null,smart:!1,activateOn:null,activateMiddle:!1,scrollSource:null,scrollBy:0,scrollHijack:300,scrollTrap:!1,dragSource:null,mouseDragging:!1,touchDragging:!1,releaseSwing:!1,swingSpeed:.2,elasticBounds:!1,dragThreshold:3,interactive:null,scrollBar:null,dragHandle:!1,dynamicHandle:!1,minHandleSize:50,clickBar:!1,syncSpeed:.5,pagesBar:null,activatePageOn:null,pageBuilder:function(e){return"<li>"+(e+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5e3,pauseOnHover:!1,startPaused:!1,moveBy:300,speed:0,easing:"swing",startAt:null,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}}(jQuery,window);