!function(f){function u(t,e,n,l){var a={data:l||0===l||!1===l?l:e?e.data:{},_wrap:e?e._wrap:null,tmpl:null,parent:e||null,nodes:[],calls:c,nest:s,wrap:d,html:$,update:_};return t&&f.extend(a,t,{nodes:[],parent:e}),n&&(a.tmpl=n,a._ctnt=a._ctnt||a.tmpl(f,a),a.key=++T,(A.length?v:w)[T]=a),a}function p(e,t,n){var a,l=n?f.map(n,function(t){return"string"==typeof t?e.key?t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+g+'="'+e.key+'" $2'):t:p(t,e,t._ctnt)}):e;return t?l:((l=l.join("")).replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(t,e,n,l){o(a=f(n).get()),e&&(a=r(e).concat(a)),l&&(a=a.concat(r(l)))}),a||r(l))}function r(t){var e=document.createElement("div");return e.innerHTML=t,f.makeArray(e.childNodes)}function n(t){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+f.trim(t).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(t,e,n,l,a,r,p){var i,o,u,c=f.tmpl.tag[n];if(!c)throw"Unknown template tag: "+n;return i=c._default||[],r&&!/\w$/.test(a)&&(a+=r,r=""),a?(a=m(a),p=p?","+m(p)+")":r?")":"",o=r?-1<a.indexOf(".")?a+m(r):"("+a+").call($item"+p:a,u=r?o:"(typeof("+a+")==='function'?("+a+").call($item):("+a+"))"):u=o=i.$1||"null",l=m(l),"');"+c[e?"close":"open"].split("$notnull_1").join(a?"typeof("+a+")!=='undefined' && ("+a+")!=null":"true").split("$1a").join(u).split("$1").join(o).split("$2").join(l||i.$2||"")+"__.push('"})+"');}return __;")}function i(t,e){t._wrap=p(t,!0,f.isArray(e)?e:[a.test(e)?e:f(e).html()]).join("")}function m(t){return t?t.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function l(t){var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function o(t){function e(t){function e(t){a=o[t+=i]=o[t]||u(a,w[a.parent.key+i]||a.parent)}var n,l,a,r,p=t;if(r=t.getAttribute(g)){for(;p.parentNode&&1===(p=p.parentNode).nodeType&&!(n=p.getAttribute(g)););n!==r&&(p=p.parentNode?11===p.nodeType?0:p.getAttribute(g)||0:0,(a=w[r])||((a=u(a=v[r],w[p]||v[p])).key=++T,w[T]=a),j&&e(r)),t.removeAttribute(g)}else j&&(a=f.data(t,"tmplItem"))&&(e(a.key),w[a.key]=a,p=(p=f.data(t.parentNode,"tmplItem"))?p.key:0);if(a){for(l=a;l&&l.key!=p;)l.nodes.push(t),l=l.parent;delete a._ctnt,delete a._wrap,f.data(t,"tmplItem",a)}}var n,l,a,r,p,i="_"+j,o={};for(a=0,r=t.length;a<r;a++)if(1===(n=t[a]).nodeType){for(p=(l=n.getElementsByTagName("*")).length-1;0<=p;p--)e(l[p]);e(n)}}function c(t,e,n,l){if(!t)return A.pop();A.push({_:t,tmpl:e,item:this,data:n,options:l})}function s(t,e,n){return f.tmpl(f.template(t),e,n,this)}function d(t,e){var n=t.options||{};return n.wrapped=e,f.tmpl(f.template(t.tmpl),t.data,n,t.item)}function $(t,e){var n=this._wrap;return f.map(f(f.isArray(n)?n.join(""):n).filter(t||"*"),function(t){return e?t.innerText||t.textContent:t.outerHTML||l(t)})}function _(){var t=this.nodes;f.tmpl(null,null,null,this).insertBefore(t[0]),f(t).remove()}var h,y=f.fn.domManip,g="_tmplitem",a=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,w={},v={},k={key:0,data:{}},T=0,j=0,A=[];f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(o,u){f.fn[o]=function(t){var e,n,l,a,r=[],p=f(t),i=1===this.length&&this[0].parentNode;if(h=w||{},i&&11===i.nodeType&&1===i.childNodes.length&&1===p.length)p[u](this[0]),r=this;else{for(n=0,l=p.length;n<l;n++)e=(0<(j=n)?this.clone(!0):this).get(),f(p[n])[u](e),r=r.concat(e);j=0,r=this.pushStack(r,o,p.selector)}return a=h,h=null,f.tmpl.complete(a),r}}),f.fn.extend({tmpl:function(t,e,n){return f.tmpl(this[0],t,e,n)},tmplItem:function(){return f.tmplItem(this[0])},template:function(t){return f.template(t,this[0])},domManip:function(t,e,n){if(t[0]&&f.isArray(t[0])){for(var l,a=f.makeArray(arguments),r=t[0],p=r.length,i=0;i<p&&!(l=f.data(r[i++],"tmplItem")););l&&j&&(a[2]=function(t){f.tmpl.afterManip(this,t,n)}),y.apply(this,a)}else y.apply(this,arguments);return j=0,!h&&f.tmpl.complete(w),this}}),f.extend({tmpl:function(e,t,n,l){var a,r=!l;if(r)l=k,e=f.template[e]||f.template(null,e),v={};else if(!e)return e=l.tmpl,(w[l.key]=l).nodes=[],l.wrapped&&i(l,l.wrapped),f(p(l,null,l.tmpl(f,l)));return e?("function"==typeof t&&(t=t.call(l||{})),n&&n.wrapped&&i(n,n.wrapped),a=f.isArray(t)?f.map(t,function(t){return t?u(n,l,e,t):null}):[u(n,l,e,t)],r?f(p(l,null,a)):a):[]},tmplItem:function(t){var e;for(t instanceof f&&(t=t[0]);t&&1===t.nodeType&&!(e=f.data(t,"tmplItem"))&&(t=t.parentNode););return e||k},template:function(t,e){return e?("string"==typeof e?e=n(e):e instanceof f&&(e=e[0]||{}),e.nodeType&&(e=f.data(e,"tmpl")||f.data(e,"tmpl",n(e.innerHTML))),"string"==typeof t?f.template[t]=e:e):t?"string"!=typeof t?f.template(null,t):f.template[t]||f.template(null,a.test(t)?t:f(t)):null},encode:function(t){return(""+t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),f.extend(f.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){w={}},afterManip:function(t,e,n){var l=11===e.nodeType?f.makeArray(e.childNodes):1===e.nodeType?[e]:[];n.call(t,e),o(l),j++}})}(jQuery);