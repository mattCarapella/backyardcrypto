!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){return t.ui=t.ui||{},t.ui.version="1.12.1"}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(t){return t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(W){return function(){function C(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function x(t,e){return parseInt(W.css(t,e),10)||0}function e(t){var e=t[0];return 9===e.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:W.isWindow(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}var s,k=Math.max,I=Math.abs,n=/left|center|right/,o=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,u=/%$/,i=W.fn.position;W.position={scrollbarWidth:function(){if(s!==undefined)return s;var t,e,i=W("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=i.children()[0];return W("body").append(i),t=n.offsetWidth,i.css("overflow","scroll"),t===(e=n.offsetWidth)&&(e=i[0].clientWidth),i.remove(),s=t-e},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?W.position.scrollbarWidth():0,height:n?W.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=W(t||window),i=W.isWindow(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?W(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},W.fn.position=function(c){if(!c||!c.of)return i.apply(this,arguments);c=W.extend({},c);var d,f,m,p,g,t,v=W(c.of),_=W.position.getWithinInfo(c.within),b=W.position.getScrollInfo(_),y=(c.collision||"flip").split(" "),w={};return t=e(v),v[0].preventDefault&&(c.at="left top"),f=t.width,m=t.height,p=t.offset,g=W.extend({},p),W.each(["my","at"],function(){var t,e,i=(c[this]||"").split(" ");1===i.length&&(i=n.test(i[0])?i.concat(["center"]):o.test(i[0])?["center"].concat(i):["center","center"]),i[0]=n.test(i[0])?i[0]:"center",i[1]=o.test(i[1])?i[1]:"center",t=a.exec(i[0]),e=a.exec(i[1]),w[this]=[t?t[0]:0,e?e[0]:0],c[this]=[r.exec(i[0])[0],r.exec(i[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===c.at[0]?g.left+=f:"center"===c.at[0]&&(g.left+=f/2),"bottom"===c.at[1]?g.top+=m:"center"===c.at[1]&&(g.top+=m/2),d=C(w.at,f,m),g.left+=d[0],g.top+=d[1],this.each(function(){var i,t,a=W(this),r=a.outerWidth(),u=a.outerHeight(),e=x(this,"marginLeft"),n=x(this,"marginTop"),s=r+e+x(this,"marginRight")+b.width,o=u+n+x(this,"marginBottom")+b.height,l=W.extend({},g),h=C(w.my,a.outerWidth(),a.outerHeight());"right"===c.my[0]?l.left-=r:"center"===c.my[0]&&(l.left-=r/2),"bottom"===c.my[1]?l.top-=u:"center"===c.my[1]&&(l.top-=u/2),l.left+=h[0],l.top+=h[1],i={marginLeft:e,marginTop:n},W.each(["left","top"],function(t,e){W.ui.position[y[t]]&&W.ui.position[y[t]][e](l,{targetWidth:f,targetHeight:m,elemWidth:r,elemHeight:u,collisionPosition:i,collisionWidth:s,collisionHeight:o,offset:[d[0]+h[0],d[1]+h[1]],my:c.my,at:c.at,within:_,elem:a})}),c.using&&(t=function(t){var e=p.left-l.left,i=e+f-r,n=p.top-l.top,s=n+m-u,o={target:{element:v,left:p.left,top:p.top,width:f,height:m},element:{element:a,left:l.left,top:l.top,width:r,height:u},horizontal:i<0?"left":0<e?"right":"center",vertical:s<0?"top":0<n?"bottom":"middle"};f<r&&I(e+i)<f&&(o.horizontal="center"),m<u&&I(n+s)<m&&(o.vertical="middle"),k(I(e),I(i))>k(I(n),I(s))?o.important="horizontal":o.important="vertical",c.using.call(this,t,o)}),a.offset(W.extend(l,{using:t}))})},W.ui.position={fit:{left:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,a=t.left-e.collisionPosition.marginLeft,r=s-a,u=a+e.collisionWidth-o-s;e.collisionWidth>o?0<r&&u<=0?(i=t.left+r+e.collisionWidth-o-s,t.left+=r-i):t.left=0<u&&r<=0?s:u<r?s+o-e.collisionWidth:s:0<r?t.left+=r:0<u?t.left-=u:t.left=k(t.left-a,t.left)},top:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,r=s-a,u=a+e.collisionHeight-o-s;e.collisionHeight>o?0<r&&u<=0?(i=t.top+r+e.collisionHeight-o-s,t.top+=r-i):t.top=0<u&&r<=0?s:u<r?s+o-e.collisionHeight:s:0<r?t.top+=r:0<u?t.top-=u:t.top=k(t.top-a,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,o=s.offset.left+s.scrollLeft,a=s.width,r=s.isWindow?s.scrollLeft:s.offset.left,u=t.left-e.collisionPosition.marginLeft,l=u-r,h=u+e.collisionWidth-a-r,c="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];l<0?((i=t.left+c+d+f+e.collisionWidth-a-o)<0||i<I(l))&&(t.left+=c+d+f):0<h&&(0<(n=t.left-e.collisionPosition.marginLeft+c+d+f-r)||I(n)<h)&&(t.left+=c+d+f)},top:function(t,e){var i,n,s=e.within,o=s.offset.top+s.scrollTop,a=s.height,r=s.isWindow?s.scrollTop:s.offset.top,u=t.top-e.collisionPosition.marginTop,l=u-r,h=u+e.collisionHeight-a-r,c="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];l<0?((n=t.top+c+d+f+e.collisionHeight-a-o)<0||n<I(l))&&(t.top+=c+d+f):0<h&&(0<(i=t.top-e.collisionPosition.marginTop+c+d+f-r)||I(i)<h)&&(t.top+=c+d+f)}},flipfit:{left:function(){W.ui.position.flip.left.apply(this,arguments),W.ui.position.fit.left.apply(this,arguments)},top:function(){W.ui.position.flip.top.apply(this,arguments),W.ui.position.fit.top.apply(this,arguments)}}}}(),W.ui.position}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(t){return t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e}}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(t){return t.fn.extend({uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}});var e}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(h){var o,i=0,r=Array.prototype.slice;return h.cleanData=(o=h.cleanData,function(t){var e,i,n;for(n=0;null!=(i=t[n]);n++)try{(e=h._data(i,"events"))&&e.remove&&h(i).triggerHandler("remove")}catch(s){}o(t)}),h.widget=function(t,i,e){var n,s,o,a={},r=t.split(".")[0],u=r+"-"+(t=t.split(".")[1]);return e||(e=i,i=h.Widget),h.isArray(e)&&(e=h.extend.apply(null,[{}].concat(e))),h.expr[":"][u.toLowerCase()]=function(t){return!!h.data(t,u)},h[r]=h[r]||{},n=h[r][t],s=h[r][t]=function(t,e){if(!this._createWidget)return new s(t,e);arguments.length&&this._createWidget(t,e)},h.extend(s,n,{version:e.version,_proto:h.extend({},e),_childConstructors:[]}),(o=new i).options=h.widget.extend({},o.options),h.each(e,function(e,o){h.isFunction(o)?a[e]=function(){function n(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}return function(){var t,e=this._super,i=this._superApply;return this._super=n,this._superApply=s,t=o.apply(this,arguments),this._super=e,this._superApply=i,t}}():a[e]=o}),s.prototype=h.widget.extend(o,{widgetEventPrefix:n&&o.widgetEventPrefix||t},a,{constructor:s,namespace:r,widgetName:t,widgetFullName:u}),n?(h.each(n._childConstructors,function(t,e){var i=e.prototype;h.widget(i.namespace+"."+i.widgetName,s,e._proto)}),delete n._childConstructors):i._childConstructors.push(s),h.widget.bridge(t,s),s},h.widget.extend=function(t){for(var e,i,n=r.call(arguments,1),s=0,o=n.length;s<o;s++)for(e in n[s])i=n[s][e],n[s].hasOwnProperty(e)&&i!==undefined&&(h.isPlainObject(i)?t[e]=h.isPlainObject(t[e])?h.widget.extend({},t[e],i):h.widget.extend({},i):t[e]=i);return t},h.widget.bridge=function(o,e){var a=e.prototype.widgetFullName||o;h.fn[o]=function(i){var t="string"==typeof i,n=r.call(arguments,1),s=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=h.data(this,a);return"instance"===i?(s=e,!1):e?h.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,n))!==e&&t!==undefined?(s=t&&t.jquery?s.pushStack(t.get()):t,!1):void 0:h.error("no such method '"+i+"' for "+o+" widget instance"):h.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):s=undefined:(n.length&&(i=h.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=h.data(this,a);t?(t.option(i||{}),t._init&&t._init()):h.data(this,a,new e(i,this))})),s}},h.Widget=function(){},h.Widget._childConstructors=[],h.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=h(e||this.defaultElement||this)[0],this.element=h(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=h(),this.hoverable=h(),this.focusable=h(),this.classesElementLookup={},e!==this&&(h.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=h(e.style?e.ownerDocument:e.document||e),this.window=h(this.document[0].defaultView||this.document[0].parentWindow)),this.options=h.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:h.noop,_create:h.noop,_init:h.noop,destroy:function(){var i=this;this._destroy(),h.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:h.noop,widget:function(){return this.element},option:function(t,e){var i,n,s,o=t;if(0===arguments.length)return h.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(n=o[t]=h.widget.extend({},this.options[t]),s=0;s<i.length-1;s++)n[i[s]]=n[i[s]]||{},n=n[i[s]];if(t=i.pop(),1===arguments.length)return n[t]===undefined?null:n[t];n[t]=e}else{if(1===arguments.length)return this.options[t]===undefined?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=h(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(s){function t(t,e){var i,n;for(n=0;n<t.length;n++)i=a.classesElementLookup[t[n]]||h(),i=s.add?h(h.unique(i.get().concat(s.element.get()))):h(i.not(s.element).get()),a.classesElementLookup[t[n]]=i,o.push(t[n]),e&&s.classes[t[n]]&&o.push(s.classes[t[n]])}var o=[],a=this;return s=h.extend({element:this.element,classes:this.options.classes||{}},s),this._on(s.element,{remove:"_untrackClassesElement"}),s.keys&&t(s.keys.match(/\S+/g)||[],!0),s.extra&&t(s.extra.match(/\S+/g)||[]),o.join(" ")},_untrackClassesElement:function(i){var n=this;h.each(n.classesElementLookup,function(t,e){-1!==h.inArray(i.target,e)&&(n.classesElementLookup[t]=h(e.not(i.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var s="string"==typeof t||null===t,o={extra:s?e:i,keys:s?t:e,element:s?this.element:t,add:n};return o.element.toggleClass(this._classes(o),n),this},_on:function(a,r,t){var u,l=this;"boolean"!=typeof a&&(t=r,r=a,a=!1),t?(r=u=h(r),this.bindings=this.bindings.add(r)):(t=r,r=this.element,u=this.widget()),h.each(t,function(t,e){function i(){if(a||!0!==l.options.disabled&&!h(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||h.guid++);var n=t.match(/^([\w:-]*)\s*(.*)$/),s=n[1]+l.eventNamespace,o=n[2];o?u.on(s,o,i):r.on(s,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e).off(e),this.bindings=h(this.bindings.not(t).get()),this.focusable=h(this.focusable.not(t).get()),this.hoverable=h(this.hoverable.not(t).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(h(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(h(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(h(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(h(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,s,o=this.options[t];if(i=i||{},(e=h.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],s=e.originalEvent)for(n in s)n in e||(e[n]=s[n]);return this.element.trigger(e,i),!(h.isFunction(o)&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},h.each({show:"fadeIn",hide:"fadeOut"},function(o,a){h.Widget.prototype["_"+o]=function(e,t,i){var n;"string"==typeof t&&(t={effect:t});var s=t?!0===t||"number"==typeof t?a:t.effect||a:o;"number"==typeof(t=t||{})&&(t={duration:t}),n=!h.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&h.effects&&h.effects.effect[s]?e[o](t):s!==o&&e[s]?e[s](t.duration,t.easing,i):e.queue(function(t){h(this)[o](),i&&i.call(e[0]),t()})}}),h.widget}),function(t){"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],t):t(jQuery)}(function(r){return r.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(t){var e=r(t.target),i=r(r.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&e.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),e.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&i.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var e=r(t.target).closest(".ui-menu-item"),i=r(t.currentTarget);e[0]===i[0]&&(this._removeClass(i.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(t,i))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(t){this._delay(function(){!r.contains(this.element[0],r.ui.safeActiveElement(this.document[0]))&&this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var t=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),t.children().each(function(){var t=r(this);t.data("ui-menu-submenu-caret")&&t.remove()})},_keydown:function(t){var e,i,n,s,o=!0;switch(t.keyCode){case r.ui.keyCode.PAGE_UP:this.previousPage(t);break;case r.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case r.ui.keyCode.HOME:this._move("first","first",t);break;case r.ui.keyCode.END:this._move("last","last",t);break;case r.ui.keyCode.UP:this.previous(t);break;case r.ui.keyCode.DOWN:this.next(t);break;case r.ui.keyCode.LEFT:this.collapse(t);break;case r.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case r.ui.keyCode.ENTER:case r.ui.keyCode.SPACE:this._activate(t);break;case r.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,i=this.previousFilter||"",s=!1,n=96<=t.keyCode&&t.keyCode<=105?(t.keyCode-96).toString():String.fromCharCode(t.keyCode),clearTimeout(this.filterTimer),n===i?s=!0:n=i+n,e=this._filterMenuItems(n),(e=s&&-1!==e.index(this.active.next())?this.active.nextAll(".ui-menu-item"):e).length||(n=String.fromCharCode(t.keyCode),e=this._filterMenuItems(n)),e.length?(this.focus(t,e),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var t,e,i,n,s=this,o=this.options.icons.submenu,a=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),e=a.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=r(this),e=t.prev(),i=r("<span>").data("ui-menu-submenu-caret",!0);s._addClass(i,"ui-menu-icon","ui-icon "+o),e.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",e.attr("id"))}),this._addClass(e,"ui-menu","ui-widget ui-widget-content ui-front"),(t=a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var t=r(this);s._isDivider(t)&&s._addClass(t,"ui-menu-divider","ui-widget-content")}),n=(i=t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(i,"ui-menu-item")._addClass(n,"ui-menu-item-wrapper"),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!r.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",String(t)),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,n,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),n=this.active.children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),s=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=e.children(".ui-menu")).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(t){var e,i,n,s,o,a;this._hasScroll()&&(e=parseFloat(r.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(r.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-e-i,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),a=t.outerHeight(),n<0?this.activeMenu.scrollTop(s+n):o<n+a&&this.activeMenu.scrollTop(s+n-o+a))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(t){var e=r.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(e)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var t=i?this.element:r(e&&e.target).closest(this.element.find(".ui-menu"));t.length||(t=this.element),this._close(t),this.blur(e),this._removeClass(t.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=t},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(t){return!r(t.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n;this.active&&(n="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[e]()),this.focus(i,n)},nextPage:function(t){var e,i,n;this.active?this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return(e=r(this)).offset().top-i-n<0}),this.focus(t,e)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())):this.next(t)},previousPage:function(t){var e,i,n;this.active?this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return 0<(e=r(this)).offset().top-i+n}),this.focus(t,e)):this.focus(t,this.activeMenu.find(this.options.items).first())):this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||r(t.target).closest(".ui-menu-item");var e={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,e)},_filterMenuItems:function(t){var e=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),i=new RegExp("^"+e,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return i.test(r.trim(r(this).children(".ui-menu-item-wrapper").text()))})}})}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(t){return t.ui.escapeSelector=(e=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(t){return t.replace(e,"\\$1")});var e}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(t){return t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)}}),function(t){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],t):t(jQuery)}(function(i){return i.ui.formResetMixin={_formResetHandler:function(){var e=i(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");i.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var t=this.form.data("ui-form-reset-instances");t.splice(i.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}}),function(t){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],t):t(jQuery)}(function(o){return o.fn.labels=function(){var t,e,i,n,s;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(s=(t=this.eq(0).parents().last()).add(t.length?t.siblings():this.siblings()),e="label[for='"+o.ui.escapeSelector(i)+"']",n=n.add(s.find(e).addBack(e))),this.pushStack(n))}}),function(t){"function"==typeof define&&define.amd?define(["jquery","./menu","../escape-selector","../form-reset-mixin","../keycode","../labels","../position","../unique-id","../version","../widget"],t):t(jQuery)}(function(a){return a.widget("ui.selectmenu",[a.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var t=this.element.uniqueId().attr("id");this.ids={element:t,button:t+"-button",menu:t+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=a()},_drawButton:function(){var t,e=this,i=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=a("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),t=a("<span>").appendTo(this.button),this._addClass(t,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(i).appendTo(this.button),!1!==this.options.width&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){e._rendered||e._refreshMenu()})},_drawMenu:function(){var n=this;this.menu=a("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=a("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,e){t.preventDefault(),n._setSelection(),n._select(e.item.data("ui-selectmenu-item"),t)},focus:function(t,e){var i=e.item.data("ui-selectmenu-item");null!=n.focusIndex&&i.index!==n.focusIndex&&(n._trigger("focus",t,{item:i}),n.isOpen||n._select(i,t)),n.focusIndex=i.index,n.button.attr("aria-activedescendant",n.menuItems.eq(i.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(a.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(t){var e=a("<span>");return this._setText(e,t.label),this._addClass(e,"ui-selectmenu-text"),e},_renderMenu:function(n,t){var s=this,o="";a.each(t,function(t,e){var i;e.optgroup!==o&&(i=a("<li>",{text:e.optgroup}),s._addClass(i,"ui-selectmenu-optgroup","ui-menu-divider"+(e.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),i.appendTo(n),o=e.optgroup),s._renderItemData(n,e)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(t,e){var i=a("<li>"),n=a("<div>",{title:e.element.attr("title")});return e.disabled&&this._addClass(i,null,"ui-state-disabled"),this._setText(n,e.label),i.append(n).appendTo(t)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,n,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),s+=":not(.ui-state-disabled)"),(n="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](s).eq(-1):i[t+"All"](s).eq(0)).length&&this.menuInstance.focus(e,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?((t=window.getSelection()).removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(a(t.target).closest(".ui-selectmenu-menu, #"+a.ui.escapeSelector(this.ids.button)).length||this.close(t))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection()).rangeCount&&(this.range=t.getRangeAt(0)):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(t){var e=!0;switch(t.keyCode){case a.ui.keyCode.TAB:case a.ui.keyCode.ESCAPE:this.close(t),e=!1;break;case a.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case a.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case a.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case a.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case a.ui.keyCode.LEFT:this._move("prev",t);break;case a.ui.keyCode.RIGHT:this._move("next",t);break;case a.ui.keyCode.HOME:case a.ui.keyCode.PAGE_UP:this._move("first",t);break;case a.ui.keyCode.END:case a.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),e=!1}e&&t.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li")
;e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?a(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front, dialog")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;!1!==t?(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t)):this.button.css("width","")},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(t){var i=this,n=[];t.each(function(t,e){n.push(i._parseOption(a(e),t))}),this.items=n},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}])});