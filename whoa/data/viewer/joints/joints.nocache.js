function joints(){var O='bootstrap',P='begin',Q='gwt.codesvr.joints=',R='gwt.codesvr=',S='joints',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='position:absolute; width:0; height:0; border:none; left: -1000px;',Z=' top: -1000px;',$='CSS1Compat',_='<!doctype html>',ab='',bb='<html><head><\/head><body><\/body><\/html>',cb='undefined',db='readystatechange',eb=10,fb='Chrome',gb='eval("',hb='");',ib='script',jb='javascript',kb='moduleStartup',lb='moduleRequested',mb='Failed to load ',nb='head',ob='meta',pb='name',qb='joints::',rb='::',sb='gwt:property',tb='content',ub='=',vb='gwt:onPropertyErrorFn',wb='Bad handler "',xb='" for "gwt:onPropertyErrorFn"',yb='gwt:onLoadErrorFn',zb='" for "gwt:onLoadErrorFn"',Ab='#',Bb='?',Cb='/',Db='img',Eb='clear.cache.gif',Fb='baseUrl',Gb='joints.nocache.js',Hb='base',Ib='//',Jb='transform.notation',Kb=5,Lb='column_major',Mb='row_major',Nb='user.agent',Ob='webkit',Pb='safari',Qb='msie',Rb=11,Sb='ie10',Tb=9,Ub='ie9',Vb=8,Wb='ie8',Xb='gecko',Yb='gecko1_8',Zb=2,$b=3,_b=4,ac='selectingPermutation',bc='joints.devmode.js',cc='36D7F932A3EE16EF7591B7EB901EAF98',dc='44A9A451B1A88E23E9A7ACBA64A5F665',ec='5D718FEC9A8943F82A14D51780C502CC',fc='79B6F306374591CFC31A81FA92DD91A5',gc='8128161FE7C0D1F5CCE8EB263DA3542F',hc=':1',ic=':',jc='.cache.js',kc='link',lc='rel',mc='stylesheet',nc='href',oc='loadExternalRefs',pc='gwt/clean/clean.css',qc='css/bootstrap.min.css',rc='css/gwt-bootstrap.css',sc='css/font-awesome.min.css',tc='end',uc='http:',vc='file:',wc='_gwt_dummy_',xc='__gwtDevModeHook:joints',yc='Ignoring non-whitelisted Dev Mode URL: ',zc=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
joints.__sendStats=r;joints.__moduleName=S;joints.__errFn=null;joints.__moduleBase=U;joints.__softPermutationId=V;joints.__computePropValue=null;joints.__getPropMap=null;joints.__installRunAsyncCode=function(){};joints.__gwtStartLoadingFragment=function(){return null};joints.__gwt_isKnownPropertyValue=function(){return false};joints.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};joints.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[joints.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.id=S;a.style.cssText=Y+Z;a.tabIndex=-1;p.body.appendChild(a);u=a.contentWindow.document;u.open();var b=document.compatMode==$?_:ab;u.write(b+bb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==cb){return typeof p.body!=cb&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(p.removeEventListener){p.removeEventListener(db,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(db,d,false)}var e=setInterval(function(){d()},eb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(fb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(gb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(hb));g=e.createElement(ib);g.language=jb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(ib);g.language=jb;g.text=c[i];f.appendChild(g);d(f,g)}}}
joints.onScriptDownloaded=function(a){l(function(){m(a)})};r(kb,lb);var n=p.createElement(ib);n.src=k;if(joints.__errFn){n.onerror=function(){joints.__errFn(S,new Error(mb+code))}}p.getElementsByTagName(nb)[V].appendChild(n)}
joints.__startLoadingFragment=function(a){return D(a)};joints.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(ib);d.language=jb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(ob);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(pb),k;if(j){j=j.replace(qb,ab);if(j.indexOf(rb)>=V){continue}if(j==sb){k=i.getAttribute(tb);if(k){var l,m=k.indexOf(ub);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=ab}c[j]=l}}else if(j==vb){k=i.getAttribute(tb);if(k){try{d=eval(k)}catch(a){alert(wb+k+xb)}}}else if(j==yb){k=i.getAttribute(tb);if(k){try{e=eval(k)}catch(a){alert(wb+k+zb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;joints.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Ab);if(b==-1){b=a.length}var c=a.indexOf(Bb);if(c==-1){c=a.length}var d=a.lastIndexOf(Cb,Math.min(c,b));return d>=V?a.substring(V,d+W):ab}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Db);b.src=a+Eb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Fb);if(a!=null){return a}return ab}
function h(){var a=p.getElementsByTagName(ib);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Gb)!=-1){return e(a[b].src)}}return ab}
function i(){var a=p.getElementsByTagName(Hb);if(a.length>V){return a[a.length-W].href}return ab}
function j(){var a=p.location;return a.href==a.protocol+Ib+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==ab){k=h()}if(k==ab){k=i()}if(k==ab&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return joints.__moduleBase+a}
function F(){var f=[];var g=V;function h(a,b){var c=f;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Jb]=function(){if(!!o.WebKitCSSMatrix){var a=(new WebKitCSSMatrix).translate(W,V,V);var b=(new WebKitCSSMatrix).scale(Kb,W,W);if(b.multiply(a).m41>a.multiply(b).m41){return Lb}else{return Mb}}return Lb};i[Jb]={'column_major':V,'row_major':W};j[Nb]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Ob)!=-1}())return Pb;if(function(){return a.indexOf(Qb)!=-1&&(b>=eb&&b<Rb)}())return Sb;if(function(){return a.indexOf(Qb)!=-1&&(b>=Tb&&b<Rb)}())return Ub;if(function(){return a.indexOf(Qb)!=-1&&(b>=Vb&&b<Rb)}())return Wb;if(function(){return a.indexOf(Xb)!=-1||b>=Rb}())return Yb;return ab};i[Nb]={'gecko1_8':V,'ie10':W,'ie8':Zb,'ie9':$b,'safari':_b};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};joints.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};joints.__computePropValue=k;o.__gwt_activeModules[S].bindings=joints.__getPropMap;r(O,ac);if(q()){return D(bc)}var l;try{h([Lb,Wb],cc);h([Lb,Ub],dc);h([Lb,Sb],ec);h([Lb,Yb],fc);h([Lb,Pb],gc);h([Mb,Pb],gc);h([Lb,Pb],gc+hc);h([Mb,Pb],gc+hc);l=f[k(Jb)][k(Nb)];var m=l.indexOf(ic);if(m!=-1){g=parseInt(l.substring(m+W),eb);l=l.substring(V,m)}}catch(a){}joints.__softPermutationId=g;return D(l+jc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=p.createElement(kc);b.setAttribute(lc,mc);b.setAttribute(nc,D(a));p.getElementsByTagName(nb)[V].appendChild(b);__gwt_stylesLoaded[a]=true}}
r(oc,P);c(pc);c(qc);c(rc);c(sc);r(oc,tc)}
B();joints.__moduleBase=C();t[S].moduleBase=joints.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==uc||o.location.protocol==vc);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=wc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=xc;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(yc+L)}L=ab}if(L&&!o[K]){o[K]=true;o[K+zc]=C();var M=p.createElement(ib);M.src=L;var N=p.getElementsByTagName(nb)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,tc);A(H);return true}
joints.succeeded=joints();