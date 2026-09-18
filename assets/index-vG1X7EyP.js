(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var hf={exports:{}},Vo={};var W0;function d1(){if(W0)return Vo;W0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=e,Vo.jsx=i,Vo.jsxs=i,Vo}var q0;function f1(){return q0||(q0=1,hf.exports=d1()),hf.exports}var g=f1(),pf={exports:{}},rt={};var Y0;function h1(){if(Y0)return rt;Y0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function b(P,Z,ge){this.props=P,this.context=Z,this.refs=M,this.updater=ge||E}b.prototype.isReactComponent={},b.prototype.setState=function(P,Z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Z,"setState")},b.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=b.prototype;function U(P,Z,ge){this.props=P,this.context=Z,this.refs=M,this.updater=ge||E}var O=U.prototype=new w;O.constructor=U,C(O,b.prototype),O.isPureReactComponent=!0;var V=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function B(P,Z,ge){var Me=ge.ref;return{$$typeof:s,type:P,key:Z,ref:Me!==void 0?Me:null,props:ge}}function Y(P,Z){return B(P.type,Z,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function q(P){var Z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ge){return Z[ge]})}var ee=/\/+/g;function ae(P,Z){return typeof P=="object"&&P!==null&&P.key!=null?q(""+P.key):Z.toString(36)}function G(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(Z){P.status==="pending"&&(P.status="fulfilled",P.value=Z)},function(Z){P.status==="pending"&&(P.status="rejected",P.reason=Z)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function D(P,Z,ge,Me,Ae){var te=typeof P;(te==="undefined"||te==="boolean")&&(P=null);var be=!1;if(P===null)be=!0;else switch(te){case"bigint":case"string":case"number":be=!0;break;case"object":switch(P.$$typeof){case s:case e:be=!0;break;case S:return be=P._init,D(be(P._payload),Z,ge,Me,Ae)}}if(be)return Ae=Ae(P),be=Me===""?"."+ae(P,0):Me,V(Ae)?(ge="",be!=null&&(ge=be.replace(ee,"$&/")+"/"),D(Ae,Z,ge,"",function(Je){return Je})):Ae!=null&&(H(Ae)&&(Ae=Y(Ae,ge+(Ae.key==null||P&&P.key===Ae.key?"":(""+Ae.key).replace(ee,"$&/")+"/")+be)),Z.push(Ae)),1;be=0;var xe=Me===""?".":Me+":";if(V(P))for(var Oe=0;Oe<P.length;Oe++)Me=P[Oe],te=xe+ae(Me,Oe),be+=D(Me,Z,ge,te,Ae);else if(Oe=y(P),typeof Oe=="function")for(P=Oe.call(P),Oe=0;!(Me=P.next()).done;)Me=Me.value,te=xe+ae(Me,Oe++),be+=D(Me,Z,ge,te,Ae);else if(te==="object"){if(typeof P.then=="function")return D(G(P),Z,ge,Me,Ae);throw Z=String(P),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return be}function F(P,Z,ge){if(P==null)return P;var Me=[],Ae=0;return D(P,Me,"","",function(te){return Z.call(ge,te,Ae++)}),Me}function $(P){if(P._status===-1){var Z=P._result;Z=Z(),Z.then(function(ge){(P._status===0||P._status===-1)&&(P._status=1,P._result=ge)},function(ge){(P._status===0||P._status===-1)&&(P._status=2,P._result=ge)}),P._status===-1&&(P._status=0,P._result=Z)}if(P._status===1)return P._result.default;throw P._result}var de=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ye={map:F,forEach:function(P,Z,ge){F(P,function(){Z.apply(this,arguments)},ge)},count:function(P){var Z=0;return F(P,function(){Z++}),Z},toArray:function(P){return F(P,function(Z){return Z})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return rt.Activity=_,rt.Children=ye,rt.Component=b,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=U,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},rt.cache=function(P){return function(){return P.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(P,Z,ge){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Me=C({},P.props),Ae=P.key;if(Z!=null)for(te in Z.key!==void 0&&(Ae=""+Z.key),Z)!A.call(Z,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&Z.ref===void 0||(Me[te]=Z[te]);var te=arguments.length-2;if(te===1)Me.children=ge;else if(1<te){for(var be=Array(te),xe=0;xe<te;xe++)be[xe]=arguments[xe+2];Me.children=be}return B(P.type,Ae,Me)},rt.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},rt.createElement=function(P,Z,ge){var Me,Ae={},te=null;if(Z!=null)for(Me in Z.key!==void 0&&(te=""+Z.key),Z)A.call(Z,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Ae[Me]=Z[Me]);var be=arguments.length-2;if(be===1)Ae.children=ge;else if(1<be){for(var xe=Array(be),Oe=0;Oe<be;Oe++)xe[Oe]=arguments[Oe+2];Ae.children=xe}if(P&&P.defaultProps)for(Me in be=P.defaultProps,be)Ae[Me]===void 0&&(Ae[Me]=be[Me]);return B(P,te,Ae)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(P){return{$$typeof:h,render:P}},rt.isValidElement=H,rt.lazy=function(P){return{$$typeof:S,_payload:{_status:-1,_result:P},_init:$}},rt.memo=function(P,Z){return{$$typeof:p,type:P,compare:Z===void 0?null:Z}},rt.startTransition=function(P){var Z=z.T,ge={};z.T=ge;try{var Me=P(),Ae=z.S;Ae!==null&&Ae(ge,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(I,de)}catch(te){de(te)}finally{Z!==null&&ge.types!==null&&(Z.types=ge.types),z.T=Z}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(P){return z.H.use(P)},rt.useActionState=function(P,Z,ge){return z.H.useActionState(P,Z,ge)},rt.useCallback=function(P,Z){return z.H.useCallback(P,Z)},rt.useContext=function(P){return z.H.useContext(P)},rt.useDebugValue=function(){},rt.useDeferredValue=function(P,Z){return z.H.useDeferredValue(P,Z)},rt.useEffect=function(P,Z){return z.H.useEffect(P,Z)},rt.useEffectEvent=function(P){return z.H.useEffectEvent(P)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(P,Z,ge){return z.H.useImperativeHandle(P,Z,ge)},rt.useInsertionEffect=function(P,Z){return z.H.useInsertionEffect(P,Z)},rt.useLayoutEffect=function(P,Z){return z.H.useLayoutEffect(P,Z)},rt.useMemo=function(P,Z){return z.H.useMemo(P,Z)},rt.useOptimistic=function(P,Z){return z.H.useOptimistic(P,Z)},rt.useReducer=function(P,Z,ge){return z.H.useReducer(P,Z,ge)},rt.useRef=function(P){return z.H.useRef(P)},rt.useState=function(P){return z.H.useState(P)},rt.useSyncExternalStore=function(P,Z,ge){return z.H.useSyncExternalStore(P,Z,ge)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.3",rt}var Z0;function Qh(){return Z0||(Z0=1,pf.exports=h1()),pf.exports}var De=Qh(),mf={exports:{}},jo={},gf={exports:{}},xf={};var K0;function p1(){return K0||(K0=1,(function(s){function e(D,F){var $=D.length;D.push(F);e:for(;0<$;){var de=$-1>>>1,ye=D[de];if(0<l(ye,F))D[de]=F,D[$]=ye,$=de;else break e}}function i(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var F=D[0],$=D.pop();if($!==F){D[0]=$;e:for(var de=0,ye=D.length,P=ye>>>1;de<P;){var Z=2*(de+1)-1,ge=D[Z],Me=Z+1,Ae=D[Me];if(0>l(ge,$))Me<ye&&0>l(Ae,ge)?(D[de]=Ae,D[Me]=$,de=Me):(D[de]=ge,D[Z]=$,de=Z);else if(Me<ye&&0>l(Ae,$))D[de]=Ae,D[Me]=$,de=Me;else break e}}return F}function l(D,F){var $=D.sortIndex-F.sortIndex;return $!==0?$:D.id-F.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],S=1,_=null,x=3,y=!1,E=!1,C=!1,M=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function O(D){for(var F=i(p);F!==null;){if(F.callback===null)r(p);else if(F.startTime<=D)r(p),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(p)}}function V(D){if(C=!1,O(D),!E)if(i(m)!==null)E=!0,I||(I=!0,q());else{var F=i(p);F!==null&&G(V,F.startTime-D)}}var I=!1,z=-1,A=5,B=-1;function Y(){return M?!0:!(s.unstable_now()-B<A)}function H(){if(M=!1,I){var D=s.unstable_now();B=D;var F=!0;try{e:{E=!1,C&&(C=!1,w(z),z=-1),y=!0;var $=x;try{t:{for(O(D),_=i(m);_!==null&&!(_.expirationTime>D&&Y());){var de=_.callback;if(typeof de=="function"){_.callback=null,x=_.priorityLevel;var ye=de(_.expirationTime<=D);if(D=s.unstable_now(),typeof ye=="function"){_.callback=ye,O(D),F=!0;break t}_===i(m)&&r(m),O(D)}else r(m);_=i(m)}if(_!==null)F=!0;else{var P=i(p);P!==null&&G(V,P.startTime-D),F=!1}}break e}finally{_=null,x=$,y=!1}F=void 0}}finally{F?q():I=!1}}}var q;if(typeof U=="function")q=function(){U(H)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ae=ee.port2;ee.port1.onmessage=H,q=function(){ae.postMessage(null)}}else q=function(){b(H,0)};function G(D,F){z=b(function(){D(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(D){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var $=x;x=F;try{return D()}finally{x=$}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=x;x=D;try{return F()}finally{x=$}},s.unstable_scheduleCallback=function(D,F,$){var de=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?de+$:de):$=de,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=$+ye,D={id:S++,callback:F,priorityLevel:D,startTime:$,expirationTime:ye,sortIndex:-1},$>de?(D.sortIndex=$,e(p,D),i(m)===null&&D===i(p)&&(C?(w(z),z=-1):C=!0,G(V,$-de))):(D.sortIndex=ye,e(m,D),E||y||(E=!0,I||(I=!0,q()))),D},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(D){var F=x;return function(){var $=x;x=F;try{return D.apply(this,arguments)}finally{x=$}}}})(xf)),xf}var Q0;function m1(){return Q0||(Q0=1,gf.exports=p1()),gf.exports}var vf={exports:{}},Hn={};var J0;function g1(){if(J0)return Hn;J0=1;var s=Qh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:S}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,S)},Hn.flushSync=function(m){var p=f.T,S=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=S,r.d.f()}},Hn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Hn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Hn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,_=h(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):S==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Hn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Hn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,_=h(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Hn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Hn.requestFormReset=function(m){r.d.r(m)},Hn.unstable_batchedUpdates=function(m,p){return m(p)},Hn.useFormState=function(m,p,S){return f.H.useFormState(m,p,S)},Hn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Hn.version="19.2.3",Hn}var $0;function x1(){if($0)return vf.exports;$0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vf.exports=g1(),vf.exports}var ex;function v1(){if(ex)return jo;ex=1;var s=m1(),e=Qh(),i=x1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var v=!1,N=u.child;N;){if(N===a){v=!0,a=u,o=d;break}if(N===o){v=!0,o=u,a=d;break}N=N.sibling}if(!v){for(N=d.child;N;){if(N===a){v=!0,a=d,o=u;break}if(N===o){v=!0,o=d,a=u;break}N=N.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Symbol.for("react.client.reference");function ae(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ee?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case b:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case I:return"SuspenseList";case B:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ae(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ae(t(n))}catch{}}return null}var G=Array.isArray,D=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},de=[],ye=-1;function P(t){return{current:t}}function Z(t){0>ye||(t.current=de[ye],de[ye]=null,ye--)}function ge(t,n){ye++,de[ye]=t.current,t.current=n}var Me=P(null),Ae=P(null),te=P(null),be=P(null);function xe(t,n){switch(ge(te,n),ge(Ae,t),ge(Me,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?m0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=m0(n),t=g0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Me),ge(Me,t)}function Oe(){Z(Me),Z(Ae),Z(te)}function Je(t){t.memoizedState!==null&&ge(be,t);var n=Me.current,a=g0(n,t.type);n!==a&&(ge(Ae,t),ge(Me,a))}function Qe(t){Ae.current===t&&(Z(Me),Z(Ae)),be.current===t&&(Z(be),zo._currentValue=$)}var Ft,dt;function ft(t){if(Ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ft=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+t+dt}var wt=!1;function Ve(t,n){if(!t||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ue){var le=ue}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ue){le=ue}t.call(Se.prototype)}}else{try{throw Error()}catch(ue){le=ue}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],N=d[1];if(v&&N){var k=v.split(`
`),ie=N.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===ie.length)for(o=k.length-1,u=ie.length-1;1<=o&&0<=u&&k[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==ie[u]){var pe=`
`+k[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ft(a):""}function lt(t,n){switch(t.tag){case 26:case 27:case 5:return ft(t.type);case 16:return ft("Lazy");case 13:return t.child!==n&&n!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return Ve(t.type,!1);case 11:return Ve(t.type.render,!1);case 1:return Ve(t.type,!0);case 31:return ft("Activity");default:return""}}function yt(t){try{var n="",a=null;do n+=lt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xt=Object.prototype.hasOwnProperty,W=s.unstable_scheduleCallback,$t=s.unstable_cancelCallback,mt=s.unstable_shouldYield,Wt=s.unstable_requestPaint,we=s.unstable_now,nn=s.unstable_getCurrentPriorityLevel,L=s.unstable_ImmediatePriority,T=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,_e=s.unstable_LowPriority,Te=s.unstable_IdlePriority,Re=s.log,Pe=s.unstable_setDisableYieldValue,fe=null,he=null;function Ie(t){if(typeof Re=="function"&&Pe(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(fe,t)}catch{}}var Be=Math.clz32?Math.clz32:at,Ue=Math.log,Ne=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(Ue(t)/Ne|0)|0}var st=256,xt=262144,j=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var N=o&134217727;return N!==0?(o=N&~d,o!==0?u=Ce(o):(v&=N,v!==0?u=Ce(v):a||(a=N&~t,a!==0&&(u=Ce(a))))):(N=o&~d,N!==0?u=Ce(N):v!==0?u=Ce(v):a||(a=o&~t,a!==0&&(u=Ce(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=j;return j<<=1,(j&62914560)===0&&(j=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function nt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function on(t,n,a,o,u,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var N=t.entanglements,k=t.expirationTimes,ie=t.hiddenUpdates;for(a=v&~a;0<a;){var pe=31-Be(a),Se=1<<pe;N[pe]=0,k[pe]=-1;var le=ie[pe];if(le!==null)for(ie[pe]=null,pe=0;pe<le.length;pe++){var ue=le[pe];ue!==null&&(ue.lane&=-536870913)}a&=~Se}o!==0&&Pt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~n))}function Pt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function mi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ti(t,n){var a=n&-n;return a=(a&42)!==0?1:ms(a),(a&(t.suspendedLanes|n))!==0?0:a}function ms(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Kr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qr(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:z0(t.type))}function Jr(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var Fn=Math.random().toString(36).slice(2),dn="__reactFiber$"+Fn,Un="__reactProps$"+Fn,ea="__reactContainer$"+Fn,Da="__reactEvents$"+Fn,ll="__reactListeners$"+Fn,qs="__reactHandles$"+Fn,$r="__reactResources$"+Fn,Ua="__reactMarker$"+Fn;function eo(t){delete t[dn],delete t[Un],delete t[Da],delete t[ll],delete t[qs]}function La(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ea]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=M0(t);t!==null;){if(a=t[dn])return a;t=M0(t)}return n}t=a,a=t.parentNode}return null}function Pa(t){if(t=t[dn]||t[ea]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Oa(t){var n=t[$r];return n||(n=t[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xn(t){t[Ua]=!0}var cl=new Set,R={};function K(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)cl.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},ze={};function je(t){return Xt.call(ze,t)?!0:Xt.call(re,t)?!1:se.test(t)?ze[t]=!0:(re[t]=!0,!1)}function Fe(t,n,a){if(je(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ct(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,d.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Nt(t){if(!t._valueTracker){var n=ct(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ct(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zt=/[\n"\\]/g;function Ht(t){return t.replace(zt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,a,o,u,d,v,N){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?vt(t,v,$e(n)):a!=null?vt(t,v,$e(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+$e(N):t.removeAttribute("name")}function zn(t,n,a,o,u,d,v,N){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Nt(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,N||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=N?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Nt(t)}function vt(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Mn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ni(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function Ci(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(G(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Nt(t)}function ii(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Gt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function wi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&sn(t,d,n[d])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ia=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(t){return Ia.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ta(){}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ys=null,Zs=null;function pp(t){var n=Pa(t);if(n&&(t=n.stateNode)){var a=t[Un]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Un]||null;if(!u)throw Error(r(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break e;case"textarea":ni(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Mn(t,!!a.multiple,n,!1)}}}var du=!1;function mp(t,n,a){if(du)return t(n,a);du=!0;try{var o=t(n);return o}finally{if(du=!1,(Ys!==null||Zs!==null)&&(Kl(),Ys&&(n=Ys,t=Zs,Zs=Ys=null,pp(n),t)))for(n=0;n<t.length;n++)pp(t[n])}}function to(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Un]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(na)try{var no={};Object.defineProperty(no,"passive",{get:function(){fu=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{fu=!1}var Ba=null,hu=null,ul=null;function gp(){if(ul)return ul;var t,n=hu,a=n.length,o,u="value"in Ba?Ba.value:Ba.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[d-o];o++);return ul=u.slice(t,1<o?1-o:void 0)}function dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function xp(){return!1}function qn(t){function n(a,o,u,d,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(d):d[N]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?fl:xp,this.isPropagationStopped=xp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=qn(vs),io=_({},vs,{view:0,detail:0}),c_=qn(io),pu,mu,ao,pl=_({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(pu=t.screenX-ao.screenX,mu=t.screenY-ao.screenY):mu=pu=0,ao=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),vp=qn(pl),u_=_({},pl,{dataTransfer:0}),d_=qn(u_),f_=_({},io,{relatedTarget:0}),gu=qn(f_),h_=_({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),p_=qn(h_),m_=_({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g_=qn(m_),x_=_({},vs,{data:0}),_p=qn(x_),v_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},__={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=S_[t])?!!n[t]:!1}function xu(){return y_}var b_=_({},io,{key:function(t){if(t.key){var n=v_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?__[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M_=qn(b_),E_=_({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=qn(E_),T_=_({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),A_=qn(T_),C_=_({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),w_=qn(C_),R_=_({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N_=qn(R_),D_=_({},vs,{newState:0,oldState:0}),U_=qn(D_),L_=[9,13,27,32],vu=na&&"CompositionEvent"in window,so=null;na&&"documentMode"in document&&(so=document.documentMode);var P_=na&&"TextEvent"in window&&!so,yp=na&&(!vu||so&&8<so&&11>=so),bp=" ",Mp=!1;function Ep(t,n){switch(t){case"keyup":return L_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ks=!1;function O_(t,n){switch(t){case"compositionend":return Tp(n);case"keypress":return n.which!==32?null:(Mp=!0,bp);case"textInput":return t=n.data,t===bp&&Mp?null:t;default:return null}}function I_(t,n){if(Ks)return t==="compositionend"||!vu&&Ep(t,n)?(t=gp(),ul=hu=Ba=null,Ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!B_[t.type]:n==="textarea"}function Cp(t,n,a,o){Ys?Zs?Zs.push(o):Zs=[o]:Ys=o,n=ic(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ro=null,oo=null;function F_(t){c0(t,0)}function ml(t){var n=gs(t);if(an(n))return t}function wp(t,n){if(t==="change")return n}var Rp=!1;if(na){var _u;if(na){var Su="oninput"in document;if(!Su){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),Su=typeof Np.oninput=="function"}_u=Su}else _u=!1;Rp=_u&&(!document.documentMode||9<document.documentMode)}function Dp(){ro&&(ro.detachEvent("onpropertychange",Up),oo=ro=null)}function Up(t){if(t.propertyName==="value"&&ml(oo)){var n=[];Cp(n,oo,t,uu(t)),mp(F_,n)}}function z_(t,n,a){t==="focusin"?(Dp(),ro=n,oo=a,ro.attachEvent("onpropertychange",Up)):t==="focusout"&&Dp()}function H_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(oo)}function G_(t,n){if(t==="click")return ml(n)}function k_(t,n){if(t==="input"||t==="change")return ml(n)}function V_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:V_;function lo(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Xt.call(n,u)||!ai(t[u],n[u]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,n){var a=Lp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lp(a)}}function Op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var j_=na&&"documentMode"in document&&11>=document.documentMode,Qs=null,bu=null,co=null,Mu=!1;function Bp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Qs==null||Qs!==Kt(o)||(o=Qs,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=ic(bu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Qs)))}function _s(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Js={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Eu={},Fp={};na&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Ss(t){if(Eu[t])return Eu[t];if(!Js[t])return t;var n=Js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fp)return Eu[t]=n[a];return t}var zp=Ss("animationend"),Hp=Ss("animationiteration"),Gp=Ss("animationstart"),X_=Ss("transitionrun"),W_=Ss("transitionstart"),q_=Ss("transitioncancel"),kp=Ss("transitionend"),Vp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function Ri(t,n){Vp.set(t,n),K(n,[t])}var gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],$s=0,Au=0;function xl(){for(var t=$s,n=Au=$s=0;n<t;){var a=gi[n];gi[n++]=null;var o=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var d=gi[n];if(gi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}d!==0&&jp(a,u,d)}}function vl(t,n,a,o){gi[$s++]=t,gi[$s++]=n,gi[$s++]=a,gi[$s++]=o,Au|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Cu(t,n,a,o){return vl(t,n,a,o),_l(t)}function ys(t,n){return vl(t,null,null,n),_l(t)}function jp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Be(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function _l(t){if(50<Uo)throw Uo=0,Id=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var er={};function Y_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,n,a,o){return new Y_(t,n,a,o)}function wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,n){var a=t.alternate;return a===null?(a=si(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Sl(t,n,a,o,u,d){var v=0;if(o=t,typeof t=="function")wu(t)&&(v=1);else if(typeof t=="string")v=$S(t,a,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case B:return t=si(31,a,n,u),t.elementType=B,t.lanes=d,t;case C:return bs(a.children,u,d,n);case M:v=8,u|=24;break;case b:return t=si(12,a,n,u|2),t.elementType=b,t.lanes=d,t;case V:return t=si(13,a,n,u),t.elementType=V,t.lanes=d,t;case I:return t=si(19,a,n,u),t.elementType=I,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:v=10;break e;case w:v=9;break e;case O:v=11;break e;case z:v=14;break e;case A:v=16,o=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=si(v,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function bs(t,n,a,o){return t=si(7,t,o,n),t.lanes=a,t}function Ru(t,n,a){return t=si(6,t,null,n),t.lanes=a,t}function Wp(t){var n=si(18,null,null,0);return n.stateNode=t,n}function Nu(t,n,a){return n=si(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qp=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var a=qp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:yt(n)},qp.set(t,n),n)}return{value:t,source:n,stack:yt(n)}}var tr=[],nr=0,yl=null,uo=0,vi=[],_i=0,Fa=null,ki=1,Vi="";function aa(t,n){tr[nr++]=uo,tr[nr++]=yl,yl=t,uo=n}function Yp(t,n,a){vi[_i++]=ki,vi[_i++]=Vi,vi[_i++]=Fa,Fa=t;var o=ki;t=Vi;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var d=32-Be(n)+u;if(30<d){var v=u-u%5;d=(o&(1<<v)-1).toString(32),o>>=v,u-=v,ki=1<<32-Be(n)+u|a<<u|o,Vi=d+t}else ki=1<<d|a<<u|o,Vi=t}function Du(t){t.return!==null&&(aa(t,1),Yp(t,1,0))}function Uu(t){for(;t===yl;)yl=tr[--nr],tr[nr]=null,uo=tr[--nr],tr[nr]=null;for(;t===Fa;)Fa=vi[--_i],vi[_i]=null,Vi=vi[--_i],vi[_i]=null,ki=vi[--_i],vi[_i]=null}function Zp(t,n){vi[_i++]=ki,vi[_i++]=Vi,vi[_i++]=Fa,ki=n.id,Vi=n.overflow,Fa=t}var Ln=null,en=null,Et=!1,za=null,Si=!1,Lu=Error(r(519));function Ha(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(xi(n,t)),Lu}function Kp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[Un]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)St(Po[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Ci(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||h0(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Ha(t,!0)}function Qp(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Ln=Ln.return}}function ir(t){if(t!==Ln)return!1;if(!Et)return Qp(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Qd(t.type,t.memoizedProps)),a=!a),a&&en&&Ha(t),Qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=b0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=b0(t)}else n===27?(n=en,es(t.type)?(t=nf,nf=null,en=t):en=n):en=Ln?bi(t.stateNode.nextSibling):null;return!0}function Ms(){en=Ln=null,Et=!1}function Pu(){var t=za;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),za=null),t}function fo(t){za===null?za=[t]:za.push(t)}var Ou=P(null),Es=null,sa=null;function Ga(t,n,a){ge(Ou,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=Ou.current,Z(Ou)}function Iu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Bu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;e:for(;d!==null;){var N=d;d=u;for(var k=0;k<n.length;k++)if(N.context===n[k]){d.lanes|=a,N=d.alternate,N!==null&&(N.lanes|=a),Iu(d.return,a,t),o||(v=null);break e}d=N.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Iu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function ar(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var N=u.type;ai(u.pendingProps.value,v.value)||(t!==null?t.push(N):t=[N])}}else if(u===be.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&Bu(n,t,a,o),n.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){Es=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pn(t){return Jp(Es,t)}function Ml(t,n){return Es===null&&Ts(t),Jp(t,n)}function Jp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(t===null)throw Error(r(308));sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else sa=sa.next=n;return a}var Z_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},K_=s.unstable_scheduleCallback,Q_=s.unstable_NormalPriority,vn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new Z_,data:new Map,refCount:0}}function ho(t){t.refCount--,t.refCount===0&&K_(Q_,function(){t.controller.abort()})}var po=null,zu=0,sr=0,rr=null;function J_(t,n){if(po===null){var a=po=[];zu=0,sr=kd(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then($p,$p),n}function $p(){if(--zu===0&&po!==null){rr!==null&&(rr.status="fulfilled");var t=po;po=null,sr=0,rr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var em=D.S;D.S=function(t,n){Bg=we(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&J_(t,n),em!==null&&em(t,n)};var As=P(null);function Hu(){var t=As.current;return t!==null?t:Qt.pooledCache}function El(t,n){n===null?ge(As,As.current):ge(As,n.pool)}function tm(){var t=Hu();return t===null?null:{parent:vn._currentValue,pool:t}}var or=Error(r(460)),Gu=Error(r(474)),Tl=Error(r(542)),Al={then:function(){}};function nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function im(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t;default:if(typeof n.status=="string")n.then(ta,ta);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t}throw ws=n,or}}function Cs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ws=a,or):a}}var ws=null;function am(){if(ws===null)throw Error(r(459));var t=ws;return ws=null,t}function sm(t){if(t===or||t===Tl)throw Error(r(483))}var lr=null,mo=0;function Cl(t){var n=mo;return mo+=1,lr===null&&(lr=[]),im(lr,t,n)}function go(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rm(t){function n(Q,X){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[X],Q.flags|=16):ne.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=ia(Q,X),Q.index=0,Q.sibling=null,Q}function d(Q,X,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<X?(Q.flags|=67108866,X):ne):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function v(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function N(Q,X,ne,ve){return X===null||X.tag!==6?(X=Ru(ne,Q.mode,ve),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function k(Q,X,ne,ve){var et=ne.type;return et===C?pe(Q,X,ne.props.children,ve,ne.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===A&&Cs(et)===X.type)?(X=u(X,ne.props),go(X,ne),X.return=Q,X):(X=Sl(ne.type,ne.key,ne.props,null,Q.mode,ve),go(X,ne),X.return=Q,X)}function ie(Q,X,ne,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Nu(ne,Q.mode,ve),X.return=Q,X):(X=u(X,ne.children||[]),X.return=Q,X)}function pe(Q,X,ne,ve,et){return X===null||X.tag!==7?(X=bs(ne,Q.mode,ve,et),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function Se(Q,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ru(""+X,Q.mode,ne),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return ne=Sl(X.type,X.key,X.props,null,Q.mode,ne),go(ne,X),ne.return=Q,ne;case E:return X=Nu(X,Q.mode,ne),X.return=Q,X;case A:return X=Cs(X),Se(Q,X,ne)}if(G(X)||q(X))return X=bs(X,Q.mode,ne,null),X.return=Q,X;if(typeof X.then=="function")return Se(Q,Cl(X),ne);if(X.$$typeof===U)return Se(Q,Ml(Q,X),ne);wl(Q,X)}return null}function le(Q,X,ne,ve){var et=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return et!==null?null:N(Q,X,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:return ne.key===et?k(Q,X,ne,ve):null;case E:return ne.key===et?ie(Q,X,ne,ve):null;case A:return ne=Cs(ne),le(Q,X,ne,ve)}if(G(ne)||q(ne))return et!==null?null:pe(Q,X,ne,ve,null);if(typeof ne.then=="function")return le(Q,X,Cl(ne),ve);if(ne.$$typeof===U)return le(Q,X,Ml(Q,ne),ve);wl(Q,ne)}return null}function ue(Q,X,ne,ve,et){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Q=Q.get(ne)||null,N(X,Q,""+ve,et);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case y:return Q=Q.get(ve.key===null?ne:ve.key)||null,k(X,Q,ve,et);case E:return Q=Q.get(ve.key===null?ne:ve.key)||null,ie(X,Q,ve,et);case A:return ve=Cs(ve),ue(Q,X,ne,ve,et)}if(G(ve)||q(ve))return Q=Q.get(ne)||null,pe(X,Q,ve,et,null);if(typeof ve.then=="function")return ue(Q,X,ne,Cl(ve),et);if(ve.$$typeof===U)return ue(Q,X,ne,Ml(X,ve),et);wl(X,ve)}return null}function qe(Q,X,ne,ve){for(var et=null,Dt=null,Ze=X,ht=X=0,Mt=null;Ze!==null&&ht<ne.length;ht++){Ze.index>ht?(Mt=Ze,Ze=null):Mt=Ze.sibling;var Ut=le(Q,Ze,ne[ht],ve);if(Ut===null){Ze===null&&(Ze=Mt);break}t&&Ze&&Ut.alternate===null&&n(Q,Ze),X=d(Ut,X,ht),Dt===null?et=Ut:Dt.sibling=Ut,Dt=Ut,Ze=Mt}if(ht===ne.length)return a(Q,Ze),Et&&aa(Q,ht),et;if(Ze===null){for(;ht<ne.length;ht++)Ze=Se(Q,ne[ht],ve),Ze!==null&&(X=d(Ze,X,ht),Dt===null?et=Ze:Dt.sibling=Ze,Dt=Ze);return Et&&aa(Q,ht),et}for(Ze=o(Ze);ht<ne.length;ht++)Mt=ue(Ze,Q,ht,ne[ht],ve),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?ht:Mt.key),X=d(Mt,X,ht),Dt===null?et=Mt:Dt.sibling=Mt,Dt=Mt);return t&&Ze.forEach(function(ss){return n(Q,ss)}),Et&&aa(Q,ht),et}function tt(Q,X,ne,ve){if(ne==null)throw Error(r(151));for(var et=null,Dt=null,Ze=X,ht=X=0,Mt=null,Ut=ne.next();Ze!==null&&!Ut.done;ht++,Ut=ne.next()){Ze.index>ht?(Mt=Ze,Ze=null):Mt=Ze.sibling;var ss=le(Q,Ze,Ut.value,ve);if(ss===null){Ze===null&&(Ze=Mt);break}t&&Ze&&ss.alternate===null&&n(Q,Ze),X=d(ss,X,ht),Dt===null?et=ss:Dt.sibling=ss,Dt=ss,Ze=Mt}if(Ut.done)return a(Q,Ze),Et&&aa(Q,ht),et;if(Ze===null){for(;!Ut.done;ht++,Ut=ne.next())Ut=Se(Q,Ut.value,ve),Ut!==null&&(X=d(Ut,X,ht),Dt===null?et=Ut:Dt.sibling=Ut,Dt=Ut);return Et&&aa(Q,ht),et}for(Ze=o(Ze);!Ut.done;ht++,Ut=ne.next())Ut=ue(Ze,Q,ht,Ut.value,ve),Ut!==null&&(t&&Ut.alternate!==null&&Ze.delete(Ut.key===null?ht:Ut.key),X=d(Ut,X,ht),Dt===null?et=Ut:Dt.sibling=Ut,Dt=Ut);return t&&Ze.forEach(function(u1){return n(Q,u1)}),Et&&aa(Q,ht),et}function Zt(Q,X,ne,ve){if(typeof ne=="object"&&ne!==null&&ne.type===C&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:e:{for(var et=ne.key;X!==null;){if(X.key===et){if(et=ne.type,et===C){if(X.tag===7){a(Q,X.sibling),ve=u(X,ne.props.children),ve.return=Q,Q=ve;break e}}else if(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===A&&Cs(et)===X.type){a(Q,X.sibling),ve=u(X,ne.props),go(ve,ne),ve.return=Q,Q=ve;break e}a(Q,X);break}else n(Q,X);X=X.sibling}ne.type===C?(ve=bs(ne.props.children,Q.mode,ve,ne.key),ve.return=Q,Q=ve):(ve=Sl(ne.type,ne.key,ne.props,null,Q.mode,ve),go(ve,ne),ve.return=Q,Q=ve)}return v(Q);case E:e:{for(et=ne.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){a(Q,X.sibling),ve=u(X,ne.children||[]),ve.return=Q,Q=ve;break e}else{a(Q,X);break}else n(Q,X);X=X.sibling}ve=Nu(ne,Q.mode,ve),ve.return=Q,Q=ve}return v(Q);case A:return ne=Cs(ne),Zt(Q,X,ne,ve)}if(G(ne))return qe(Q,X,ne,ve);if(q(ne)){if(et=q(ne),typeof et!="function")throw Error(r(150));return ne=et.call(ne),tt(Q,X,ne,ve)}if(typeof ne.then=="function")return Zt(Q,X,Cl(ne),ve);if(ne.$$typeof===U)return Zt(Q,X,Ml(Q,ne),ve);wl(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(a(Q,X.sibling),ve=u(X,ne),ve.return=Q,Q=ve):(a(Q,X),ve=Ru(ne,Q.mode,ve),ve.return=Q,Q=ve),v(Q)):a(Q,X)}return function(Q,X,ne,ve){try{mo=0;var et=Zt(Q,X,ne,ve);return lr=null,et}catch(Ze){if(Ze===or||Ze===Tl)throw Ze;var Dt=si(29,Ze,null,Q.mode);return Dt.lanes=ve,Dt.return=Q,Dt}}}var Rs=rm(!0),om=rm(!1),ka=!1;function ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ja(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(t),jp(t,null,a),n}return vl(t,o,n,a),_l(t)}function xo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,mi(t,a)}}function ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Xu=!1;function vo(){if(Xu){var t=rr;if(t!==null)throw t}}function _o(t,n,a,o){Xu=!1;var u=t.updateQueue;ka=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var k=N,ie=k.next;k.next=null,v===null?d=ie:v.next=ie,v=k;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,N=pe.lastBaseUpdate,N!==v&&(N===null?pe.firstBaseUpdate=ie:N.next=ie,pe.lastBaseUpdate=k))}if(d!==null){var Se=u.baseState;v=0,pe=ie=k=null,N=d;do{var le=N.lane&-536870913,ue=le!==N.lane;if(ue?(bt&le)===le:(o&le)===le){le!==0&&le===sr&&(Xu=!0),pe!==null&&(pe=pe.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var qe=t,tt=N;le=n;var Zt=a;switch(tt.tag){case 1:if(qe=tt.payload,typeof qe=="function"){Se=qe.call(Zt,Se,le);break e}Se=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=tt.payload,le=typeof qe=="function"?qe.call(Zt,Se,le):qe,le==null)break e;Se=_({},Se,le);break e;case 2:ka=!0}}le=N.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:N.tag,payload:N.payload,callback:N.callback,next:null},pe===null?(ie=pe=ue,k=Se):pe=pe.next=ue,v|=le;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;ue=N,N=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);pe===null&&(k=Se),u.baseState=k,u.firstBaseUpdate=ie,u.lastBaseUpdate=pe,d===null&&(u.shared.lanes=0),Za|=v,t.lanes=v,t.memoizedState=Se}}function lm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lm(a[t],n)}var cr=P(null),Rl=P(0);function um(t,n){t=ma,ge(Rl,t),ge(cr,n),ma=t|n.baseLanes}function Wu(){ge(Rl,ma),ge(cr,cr.current)}function qu(){ma=Rl.current,Z(cr),Z(Rl)}var ri=P(null),yi=null;function Xa(t){var n=t.alternate;ge(fn,fn.current&1),ge(ri,t),yi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(yi=t)}function Yu(t){ge(fn,fn.current),ge(ri,t),yi===null&&(yi=t)}function dm(t){t.tag===22?(ge(fn,fn.current),ge(ri,t),yi===null&&(yi=t)):Wa()}function Wa(){ge(fn,fn.current),ge(ri,ri.current)}function oi(t){Z(ri),yi===t&&(yi=null),Z(fn)}var fn=P(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ef(a)||tf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,ut=null,qt=null,_n=null,Dl=!1,ur=!1,Ns=!1,Ul=0,So=0,dr=null,eS=0;function ln(){throw Error(r(321))}function Zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function Ku(t,n,a,o,u,d){return oa=d,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?Ym:dd,Ns=!1,d=a(o,u),Ns=!1,ur&&(d=hm(n,a,o,u)),fm(t),d}function fm(t){D.H=Mo;var n=qt!==null&&qt.next!==null;if(oa=0,_n=qt=ut=null,Dl=!1,So=0,dr=null,n)throw Error(r(300));t===null||Sn||(t=t.dependencies,t!==null&&bl(t)&&(Sn=!0))}function hm(t,n,a,o){ut=t;var u=0;do{if(ur&&(dr=null),So=0,ur=!1,25<=u)throw Error(r(301));if(u+=1,_n=qt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}D.H=Zm,d=n(a,o)}while(ur);return d}function tS(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?yo(n):n,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(ut.flags|=1024),n}function Qu(){var t=Ul!==0;return Ul=0,t}function Ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $u(t){if(Dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dl=!1}oa=0,_n=qt=ut=null,ur=!1,So=Ul=0,dr=null}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?ut.memoizedState=_n=t:_n=_n.next=t,_n}function hn(){if(qt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var n=_n===null?ut.memoizedState:_n.next;if(n!==null)_n=n,qt=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},_n===null?ut.memoizedState=_n=t:_n=_n.next=t}return _n}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(t){var n=So;return So+=1,dr===null&&(dr=[]),t=im(dr,t,n),n=ut,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Ym:dd),t}function Pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yo(t);if(t.$$typeof===U)return Pn(t)}throw Error(r(438,String(t)))}function ed(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function la(t,n){return typeof n=="function"?n(t):n}function Ol(t){var n=hn();return td(n,qt,t)}function td(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var N=v=null,k=null,ie=n,pe=!1;do{var Se=ie.lane&-536870913;if(Se!==ie.lane?(bt&Se)===Se:(oa&Se)===Se){var le=ie.revertLane;if(le===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Se===sr&&(pe=!0);else if((oa&le)===le){ie=ie.next,le===sr&&(pe=!0);continue}else Se={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},k===null?(N=k=Se,v=d):k=k.next=Se,ut.lanes|=le,Za|=le;Se=ie.action,Ns&&a(d,Se),d=ie.hasEagerState?ie.eagerState:a(d,Se)}else le={lane:Se,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},k===null?(N=k=le,v=d):k=k.next=le,ut.lanes|=Se,Za|=Se;ie=ie.next}while(ie!==null&&ie!==n);if(k===null?v=d:k.next=N,!ai(d,t.memoizedState)&&(Sn=!0,pe&&(a=rr,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function nd(t){var n=hn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do d=t(d,v.action),v=v.next;while(v!==u);ai(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function pm(t,n,a){var o=ut,u=hn(),d=Et;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ai((qt||u).memoizedState,a);if(v&&(u.memoizedState=a,Sn=!0),u=u.queue,sd(xm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},gm.bind(null,o,u,a,n),null),Qt===null)throw Error(r(349));d||(oa&127)!==0||mm(o,n,a)}return a}function mm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Ll(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function gm(t,n,a,o){n.value=a,n.getSnapshot=o,vm(n)&&_m(t)}function xm(t,n,a){return a(function(){vm(n)&&_m(t)})}function vm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function _m(t){var n=ys(t,2);n!==null&&Jn(n,t,2)}function id(t){var n=jn();if(typeof t=="function"){var a=t;if(t=a(),Ns){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n}function Sm(t,n,a,o){return t.baseState=a,td(t,qt,typeof o=="function"?o:la)}function nS(t,n,a,o,u){if(Fl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};D.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,ym(n,d)):(d.next=a.next,n.pending=a.next=d)}}function ym(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=D.T,v={};D.T=v;try{var N=a(u,o),k=D.S;k!==null&&k(v,N),bm(t,n,N)}catch(ie){ad(t,n,ie)}finally{d!==null&&v.types!==null&&(d.types=v.types),D.T=d}}else try{d=a(u,o),bm(t,n,d)}catch(ie){ad(t,n,ie)}}function bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Mm(t,n,o)},function(o){return ad(t,n,o)}):Mm(t,n,a)}function Mm(t,n,a){n.status="fulfilled",n.value=a,Em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ym(t,a)))}function ad(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Em(n),n=n.next;while(n!==o)}t.action=null}function Em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tm(t,n){return n}function Am(t,n){if(Et){var a=Qt.formState;if(a!==null){e:{var o=ut;if(Et){if(en){t:{for(var u=en,d=Si;u.nodeType!==8;){if(!d){u=null;break t}if(u=bi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){en=bi(u.nextSibling),o=u.data==="F!";break e}}Ha(o)}o=!1}o&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tm,lastRenderedState:n},a.queue=o,a=Xm.bind(null,ut,o),o.dispatch=a,o=id(!1),d=ud.bind(null,ut,!1,o.queue),o=jn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=nS.bind(null,ut,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Cm(t){var n=hn();return wm(n,qt,t)}function wm(t,n,a){if(n=td(t,n,Tm)[0],t=Ol(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(v){throw v===or?Tl:v}else o=n;n=hn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,fr(9,{destroy:void 0},iS.bind(null,u,a),null)),[o,d,t]}function iS(t,n){t.action=n}function Rm(t){var n=hn(),a=qt;if(a!==null)return wm(n,a,t);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function fr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Ll(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Nm(){return hn().memoizedState}function Il(t,n,a,o){var u=jn();ut.flags|=t,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(t,n,a,o){var u=hn();o=o===void 0?null:o;var d=u.memoizedState.inst;qt!==null&&o!==null&&Zu(o,qt.memoizedState.deps)?u.memoizedState=fr(n,d,a,o):(ut.flags|=t,u.memoizedState=fr(1|n,d,a,o))}function Dm(t,n){Il(8390656,8,t,n)}function sd(t,n){Bl(2048,8,t,n)}function aS(t){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Ll(),ut.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Um(t){var n=hn().memoizedState;return aS({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Lm(t,n){return Bl(4,2,t,n)}function Pm(t,n){return Bl(4,4,t,n)}function Om(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Im(t,n,a){a=a!=null?a.concat([t]):null,Bl(4,4,Om.bind(null,n,t),a)}function rd(){}function Bm(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Zu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Fm(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Zu(n,o[1]))return o[0];if(o=t(),Ns){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o}function od(t,n,a){return a===void 0||(oa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=zg(),ut.lanes|=t,Za|=t,a)}function zm(t,n,a,o){return ai(a,n)?a:cr.current!==null?(t=od(t,a,o),ai(t,n)||(Sn=!0),t):(oa&42)===0||(oa&1073741824)!==0&&(bt&261930)===0?(Sn=!0,t.memoizedState=a):(t=zg(),ut.lanes|=t,Za|=t,n)}function Hm(t,n,a,o,u){var d=F.p;F.p=d!==0&&8>d?d:8;var v=D.T,N={};D.T=N,ud(t,!1,n,a);try{var k=u(),ie=D.S;if(ie!==null&&ie(N,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var pe=$_(k,o);bo(t,n,pe,ui(t))}else bo(t,n,o,ui(t))}catch(Se){bo(t,n,{then:function(){},status:"rejected",reason:Se},ui())}finally{F.p=d,v!==null&&N.types!==null&&(v.types=N.types),D.T=v}}function sS(){}function ld(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Gm(t).queue;Hm(t,u,n,$,a===null?sS:function(){return km(t),a(o)})}function Gm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function km(t){var n=Gm(t);n.next===null&&(n=t.alternate.memoizedState),bo(t,n.next.queue,{},ui())}function cd(){return Pn(zo)}function Vm(){return hn().memoizedState}function jm(){return hn().memoizedState}function rS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Va(a);var o=ja(n,t,a);o!==null&&(Jn(o,n,a),xo(o,n,a)),n={cache:Fu()},t.payload=n;return}n=n.return}}function oS(t,n,a){var o=ui();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(t)?Wm(n,a):(a=Cu(t,n,a,o),a!==null&&(Jn(a,t,o),qm(a,n,o)))}function Xm(t,n,a){var o=ui();bo(t,n,a,o)}function bo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))Wm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var v=n.lastRenderedState,N=d(v,a);if(u.hasEagerState=!0,u.eagerState=N,ai(N,v))return vl(t,n,u,0),Qt===null&&xl(),!1}catch{}if(a=Cu(t,n,u,o),a!==null)return Jn(a,t,o),qm(a,n,o),!0}return!1}function ud(t,n,a,o){if(o={lane:2,revertLane:kd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(n)throw Error(r(479))}else n=Cu(t,a,o,2),n!==null&&Jn(n,t,2)}function Fl(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function Wm(t,n){ur=Dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,mi(t,a)}}var Mo={readContext:Pn,use:Pl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};Mo.useEffectEvent=ln;var Ym={readContext:Pn,use:Pl,useCallback:function(t,n){return jn().memoizedState=[t,n===void 0?null:n],t},useContext:Pn,useEffect:Dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Il(4194308,4,Om.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Il(4194308,4,t,n)},useInsertionEffect:function(t,n){Il(4,2,t,n)},useMemo:function(t,n){var a=jn();n=n===void 0?null:n;var o=t();if(Ns){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=jn();if(a!==void 0){var u=a(n);if(Ns){Ie(!0);try{a(n)}finally{Ie(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=oS.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var n=jn();return t={current:t},n.memoizedState=t},useState:function(t){t=id(t);var n=t.queue,a=Xm.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:rd,useDeferredValue:function(t,n){var a=jn();return od(a,t,n)},useTransition:function(){var t=id(!1);return t=Hm.bind(null,ut,t.queue,!0,!1),jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ut,u=jn();if(Et){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Qt===null)throw Error(r(349));(bt&127)!==0||mm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Dm(xm.bind(null,o,d,t),[t]),o.flags|=2048,fr(9,{destroy:void 0},gm.bind(null,o,d,a,n),null),a},useId:function(){var t=jn(),n=Qt.identifierPrefix;if(Et){var a=Vi,o=ki;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=eS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:cd,useFormState:Am,useActionState:Am,useOptimistic:function(t){var n=jn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ud.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:ed,useCacheRefresh:function(){return jn().memoizedState=rS.bind(null,ut)},useEffectEvent:function(t){var n=jn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},dd={readContext:Pn,use:Pl,useCallback:Bm,useContext:Pn,useEffect:sd,useImperativeHandle:Im,useInsertionEffect:Lm,useLayoutEffect:Pm,useMemo:Fm,useReducer:Ol,useRef:Nm,useState:function(){return Ol(la)},useDebugValue:rd,useDeferredValue:function(t,n){var a=hn();return zm(a,qt.memoizedState,t,n)},useTransition:function(){var t=Ol(la)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:yo(t),n]},useSyncExternalStore:pm,useId:Vm,useHostTransitionStatus:cd,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var a=hn();return Sm(a,qt,t,n)},useMemoCache:ed,useCacheRefresh:jm};dd.useEffectEvent=Um;var Zm={readContext:Pn,use:Pl,useCallback:Bm,useContext:Pn,useEffect:sd,useImperativeHandle:Im,useInsertionEffect:Lm,useLayoutEffect:Pm,useMemo:Fm,useReducer:nd,useRef:Nm,useState:function(){return nd(la)},useDebugValue:rd,useDeferredValue:function(t,n){var a=hn();return qt===null?od(a,t,n):zm(a,qt.memoizedState,t,n)},useTransition:function(){var t=nd(la)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:yo(t),n]},useSyncExternalStore:pm,useId:Vm,useHostTransitionStatus:cd,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,n){var a=hn();return qt!==null?Sm(a,qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ed,useCacheRefresh:jm};Zm.useEffectEvent=Um;function fd(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var hd={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ui(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ja(t,u,o),n!==null&&(Jn(n,t,o),xo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ui(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ja(t,u,o),n!==null&&(Jn(n,t,o),xo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ja(t,o,a),n!==null&&(Jn(n,t,a),xo(n,t,a))}};function Km(t,n,a,o,u,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,v):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,d):!0}function Qm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&hd.enqueueReplaceState(n,n.state,null)}function Ds(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Jm(t){gl(t)}function $m(t){console.error(t)}function eg(t){gl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function tg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pd(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function ng(t){return t=Va(t),t.tag=3,t}function ig(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){tg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){tg(n,a,o),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function lS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=ri.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?Ql():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zd(t,o,u)),!1;case 22:return a.flags|=65536,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zd(t,o,u)),!1}throw Error(r(435,a.tag))}return zd(t,o,u),Ql(),!1}if(Et)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Lu&&(t=Error(r(422),{cause:o}),fo(xi(t,a)))):(o!==Lu&&(n=Error(r(423),{cause:o}),fo(xi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,a),u=pd(t.stateNode,o,u),ju(t,u),cn!==4&&(cn=2)),!1;var d=Error(r(520),{cause:o});if(d=xi(d,a),Do===null?Do=[d]:Do.push(d),cn!==4&&(cn=2),n===null)return!0;o=xi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=pd(a.stateNode,o,t),ju(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ka===null||!Ka.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ng(u),ig(u,t,a,o),ju(a,u),!1}a=a.return}while(a!==null);return!1}var md=Error(r(461)),Sn=!1;function On(t,n,a,o){n.child=t===null?om(n,null,a,o):Rs(n,t.child,a,o)}function ag(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var v={};for(var N in o)N!=="ref"&&(v[N]=o[N])}else v=o;return Ts(n),o=Ku(t,n,a,v,d,u),N=Qu(),t!==null&&!Sn?(Ju(t,n,u),ca(t,n,u)):(Et&&N&&Du(n),n.flags|=1,On(t,n,o,u),n.child)}function sg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!wu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,rg(t,n,d,o,u)):(t=Sl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Md(t,u)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(v,o)&&t.ref===n.ref)return ca(t,n,u)}return n.flags|=1,t=ia(d,o),t.ref=n.ref,t.return=n,n.child=t}function rg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(lo(d,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,Md(t,u))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,ca(t,n,u)}return gd(t,n,a,o,u)}function og(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return lg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&El(n,d!==null?d.cachePool:null),d!==null?um(n,d):Wu(),dm(n);else return o=n.lanes=536870912,lg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(El(n,d.cachePool),um(n,d),Wa(),n.memoizedState=null):(t!==null&&El(n,null),Wu(),Wa());return On(t,n,u,a),n.child}function Eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function lg(t,n,a,o,u){var d=Hu();return d=d===null?null:{parent:vn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&El(n,null),Wu(),dm(n),t!==null&&ar(t,n,o,!0),n.childLanes=u,null}function Hl(t,n){return n=kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function cg(t,n,a){return Rs(n,t.child,null,a),t=Hl(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function cS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=Hl(n,o),n.lanes=536870912,Eo(null,t);if(Yu(n),(t=en)?(t=y0(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:ki,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(t),a.return=n,n.child=a,Ln=n,en=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return Hl(n,o)}var d=t.memoizedState;if(d!==null){var v=d.dehydrated;if(Yu(n),u)if(n.flags&256)n.flags&=-257,n=cg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Sn||ar(t,n,a,!1),u=(a&t.childLanes)!==0,Sn||u){if(o=Qt,o!==null&&(v=ti(o,a),v!==0&&v!==d.retryLane))throw d.retryLane=v,ys(t,v),Jn(o,t,v),md;Ql(),n=cg(t,n,a)}else t=d.treeContext,en=bi(v.nextSibling),Ln=n,Et=!0,za=null,Si=!1,t!==null&&Zp(n,t),n=Hl(n,o),n.flags|=4096;return n}return t=ia(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function gd(t,n,a,o,u){return Ts(n),a=Ku(t,n,a,o,void 0,u),o=Qu(),t!==null&&!Sn?(Ju(t,n,u),ca(t,n,u)):(Et&&o&&Du(n),n.flags|=1,On(t,n,a,u),n.child)}function ug(t,n,a,o,u,d){return Ts(n),n.updateQueue=null,a=hm(n,o,a,u),fm(t),o=Qu(),t!==null&&!Sn?(Ju(t,n,d),ca(t,n,d)):(Et&&o&&Du(n),n.flags|=1,On(t,n,a,d),n.child)}function dg(t,n,a,o,u){if(Ts(n),n.stateNode===null){var d=er,v=a.contextType;typeof v=="object"&&v!==null&&(d=Pn(v)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=hd,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ku(n),v=a.contextType,d.context=typeof v=="object"&&v!==null?Pn(v):er,d.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(fd(n,a,v,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&hd.enqueueReplaceState(d,d.state,null),_o(n,o,d,u),vo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var N=n.memoizedProps,k=Ds(a,N);d.props=k;var ie=d.context,pe=a.contextType;v=er,typeof pe=="object"&&pe!==null&&(v=Pn(pe));var Se=a.getDerivedStateFromProps;pe=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,pe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(N||ie!==v)&&Qm(n,d,o,v),ka=!1;var le=n.memoizedState;d.state=le,_o(n,o,d,u),vo(),ie=n.memoizedState,N||le!==ie||ka?(typeof Se=="function"&&(fd(n,a,Se,o),ie=n.memoizedState),(k=ka||Km(n,a,k,o,le,ie,v))?(pe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),d.props=o,d.state=ie,d.context=v,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Vu(t,n),v=n.memoizedProps,pe=Ds(a,v),d.props=pe,Se=n.pendingProps,le=d.context,ie=a.contextType,k=er,typeof ie=="object"&&ie!==null&&(k=Pn(ie)),N=a.getDerivedStateFromProps,(ie=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Se||le!==k)&&Qm(n,d,o,k),ka=!1,le=n.memoizedState,d.state=le,_o(n,o,d,u),vo();var ue=n.memoizedState;v!==Se||le!==ue||ka||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof N=="function"&&(fd(n,a,N,o),ue=n.memoizedState),(pe=ka||Km(n,a,pe,o,le,ue,k)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(ie||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ue,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ue,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),d.props=o,d.state=ue,d.context=k,o=pe):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Gl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Rs(n,t.child,null,u),n.child=Rs(n,null,a,u)):On(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ca(t,n,u),t}function fg(t,n,a,o){return Ms(),n.flags|=256,On(t,n,a,o),n.child}var xd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vd(t){return{baseLanes:t,cachePool:tm()}}function _d(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function hg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?Xa(n):Wa(),(t=en)?(t=y0(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:ki,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(t),a.return=n,n.child=a,Ln=n,en=null)):t=null,t===null)throw Ha(n);return tf(t)?n.lanes=32:n.lanes=536870912,null}var N=o.children;return o=o.fallback,u?(Wa(),u=n.mode,N=kl({mode:"hidden",children:N},u),o=bs(o,u,a,null),N.return=n,o.return=n,N.sibling=o,n.child=N,o=n.child,o.memoizedState=vd(a),o.childLanes=_d(t,v,a),n.memoizedState=xd,Eo(null,o)):(Xa(n),Sd(n,N))}var k=t.memoizedState;if(k!==null&&(N=k.dehydrated,N!==null)){if(d)n.flags&256?(Xa(n),n.flags&=-257,n=yd(t,n,a)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,n=null):(Wa(),N=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),N=bs(N,u,a,null),N.flags|=2,o.return=n,N.return=n,o.sibling=N,n.child=o,Rs(n,t.child,null,a),o=n.child,o.memoizedState=vd(a),o.childLanes=_d(t,v,a),n.memoizedState=xd,n=Eo(null,o));else if(Xa(n),tf(N)){if(v=N.nextSibling&&N.nextSibling.dataset,v)var ie=v.dgst;v=ie,o=Error(r(419)),o.stack="",o.digest=v,fo({value:o,source:null,stack:null}),n=yd(t,n,a)}else if(Sn||ar(t,n,a,!1),v=(a&t.childLanes)!==0,Sn||v){if(v=Qt,v!==null&&(o=ti(v,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,ys(t,o),Jn(v,t,o),md;ef(N)||Ql(),n=yd(t,n,a)}else ef(N)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,en=bi(N.nextSibling),Ln=n,Et=!0,za=null,Si=!1,t!==null&&Zp(n,t),n=Sd(n,o.children),n.flags|=4096);return n}return u?(Wa(),N=o.fallback,u=n.mode,k=t.child,ie=k.sibling,o=ia(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,ie!==null?N=ia(ie,N):(N=bs(N,u,a,null),N.flags|=2),N.return=n,o.return=n,o.sibling=N,n.child=o,Eo(null,o),o=n.child,N=t.child.memoizedState,N===null?N=vd(a):(u=N.cachePool,u!==null?(k=vn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=tm(),N={baseLanes:N.baseLanes|a,cachePool:u}),o.memoizedState=N,o.childLanes=_d(t,v,a),n.memoizedState=xd,Eo(t.child,o)):(Xa(n),a=t.child,t=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Sd(t,n){return n=kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function kl(t,n){return t=si(22,t,null,n),t.lanes=0,t}function yd(t,n,a){return Rs(n,t.child,null,a),t=Sd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function pg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Iu(t.return,n,a)}function bd(t,n,a,o,u,d){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=d)}function mg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var v=fn.current,N=(v&2)!==0;if(N?(v=v&1|2,n.flags|=128):v&=1,ge(fn,v),On(t,n,o,a),o=Et?uo:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pg(t,a,n);else if(t.tag===19)pg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),bd(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Nl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}bd(n,!0,a,null,d,o);break;case"together":bd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ar(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ia(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ia(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Md(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function uS(t,n,a){switch(n.tag){case 3:xe(n,n.stateNode.containerInfo),Ga(n,vn,t.memoizedState.cache),Ms();break;case 27:case 5:Je(n);break;case 4:xe(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Yu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?hg(t,n,a):(Xa(n),t=ca(t,n,a),t!==null?t.sibling:null);Xa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return mg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(fn,fn.current),o)break;return null;case 22:return n.lanes=0,og(t,n,a,n.pendingProps);case 24:Ga(n,vn,t.memoizedState.cache)}return ca(t,n,a)}function gg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Md(t,a)&&(n.flags&128)===0)return Sn=!1,uS(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,Et&&(n.flags&1048576)!==0&&Yp(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Cs(n.elementType),n.type=t,typeof t=="function")wu(t)?(o=Ds(t,o),n.tag=1,n=dg(null,n,t,o,a)):(n.tag=0,n=gd(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=ag(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=sg(null,n,t,o,a);break e}}throw n=ae(t)||t,Error(r(306,n,""))}}return n;case 0:return gd(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ds(o,n.pendingProps),dg(t,n,o,u,a);case 3:e:{if(xe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Vu(t,n),_o(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ga(n,vn,o),o!==d.cache&&Bu(n,[vn],a,!0),vo(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=fg(t,n,o,a);break e}else if(o!==u){u=xi(Error(r(424)),n),fo(u),n=fg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,en=bi(t.firstChild),Ln=n,Et=!0,za=null,Si=!0,a=om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ms(),o===u){n=ca(t,n,a);break e}On(t,n,o,a)}n=n.child}return n;case 26:return Gl(t,n),t===null?(a=C0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=ac(te.current).createElement(a),o[dn]=n,o[Un]=t,In(o,a,t),xn(o),n.stateNode=o):n.memoizedState=C0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Je(n),t===null&&Et&&(o=n.stateNode=E0(n.type,n.pendingProps,te.current),Ln=n,Si=!0,u=en,es(n.type)?(nf=u,en=bi(o.firstChild)):en=u),On(t,n,n.pendingProps.children,a),Gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=en)&&(o=HS(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Ln=n,en=bi(o.firstChild),Si=!1,u=!0):u=!1),u||Ha(n)),Je(n),u=n.type,d=n.pendingProps,v=t!==null?t.memoizedProps:null,o=d.children,Qd(u,d)?o=null:v!==null&&Qd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(t,n,tS,null,null,a),zo._currentValue=u),Gl(t,n),On(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=en)&&(a=GS(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Ln=n,en=null,t=!0):t=!1),t||Ha(n)),null;case 13:return hg(t,n,a);case 4:return xe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Rs(n,null,o,a):On(t,n,o,a),n.child;case 11:return ag(t,n,n.type,n.pendingProps,a);case 7:return On(t,n,n.pendingProps,a),n.child;case 8:return On(t,n,n.pendingProps.children,a),n.child;case 12:return On(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),On(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ts(n),u=Pn(u),o=o(u),n.flags|=1,On(t,n,o,a),n.child;case 14:return sg(t,n,n.type,n.pendingProps,a);case 15:return rg(t,n,n.type,n.pendingProps,a);case 19:return mg(t,n,a);case 31:return cS(t,n,a);case 22:return og(t,n,a,n.pendingProps);case 24:return Ts(n),o=Pn(vn),t===null?(u=Hu(),u===null&&(u=Qt,d=Fu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ku(n),Ga(n,vn,u)):((t.lanes&a)!==0&&(Vu(t,n),_o(n,null,null,a),vo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,vn,o)):(o=d.cache,Ga(n,vn,o),o!==u.cache&&Bu(n,[vn],a,!0))),On(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ua(t){t.flags|=4}function Ed(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Vg())t.flags|=8192;else throw ws=Al,Gu}else t.flags&=-16777217}function xg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!U0(n))if(Vg())t.flags|=8192;else throw ws=Al,Gu}function Vl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,gr|=n)}function To(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function dS(t,n,a){var o=n.pendingProps;switch(Uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(vn),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ir(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pu())),tn(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ua(n),d!==null?(tn(n),xg(n,d)):(tn(n),Ed(n,u,null,o,a))):d?d!==t.memoizedState?(ua(n),tn(n),xg(n,d)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ua(n),tn(n),Ed(n,u,t,o,a)),null;case 27:if(Qe(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}t=Me.current,ir(n)?Kp(n):(t=E0(u,o,a),n.stateNode=t,ua(n))}return tn(n),null;case 5:if(Qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(d=Me.current,ir(n))Kp(n);else{var v=ac(te.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}d[dn]=n,d[Un]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=d;e:switch(In(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ua(n)}}return tn(n),Ed(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,ir(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||h0(t.nodeValue,a)),t||Ha(n,!0)}else t=ac(t).createTextNode(o),t[dn]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ir(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[dn]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=Pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[dn]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),tn(n),null);case 4:return Oe(),t===null&&Wd(n.stateNode.containerInfo),tn(n),null;case 10:return ra(n.type),tn(n),null;case 19:if(Z(fn),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)To(o,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Nl(t),d!==null){for(n.flags|=128,To(o,!1),t=d.updateQueue,n.updateQueue=t,Vl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xp(a,t),a=a.sibling;return ge(fn,fn.current&1|2),Et&&aa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&we()>Yl&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(t=Nl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Vl(n,t),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Et)return tn(n),null}else 2*we()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,a=fn.current,ge(fn,u?a&1|2:a&1),Et&&aa(n,o.treeForkCount),t):(tn(n),null);case 22:case 23:return oi(n),qu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(vn),tn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function fS(t,n){switch(Uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(vn),Oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(r(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(fn),null;case 4:return Oe(),null;case 10:return ra(n.type),null;case 22:case 23:return oi(n),qu(),t!==null&&Z(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(vn),null;case 25:return null;default:return null}}function vg(t,n){switch(Uu(n),n.tag){case 3:ra(vn),Oe();break;case 26:case 27:case 5:Qe(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:Z(fn);break;case 10:ra(n.type);break;case 22:case 23:oi(n),qu(),t!==null&&Z(As);break;case 24:ra(vn)}}function Ao(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==u)}}catch(N){Vt(n,n.return,N)}}function qa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var v=o.inst,N=v.destroy;if(N!==void 0){v.destroy=void 0,u=n;var k=a,ie=N;try{ie()}catch(pe){Vt(u,k,pe)}}}o=o.next}while(o!==d)}}catch(pe){Vt(n,n.return,pe)}}function _g(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{cm(n,a)}catch(o){Vt(t,t.return,o)}}}function Sg(t,n,a){a.props=Ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function Co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function ji(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function yg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function Td(t,n,a){try{var o=t.stateNode;PS(o,t.type,a,n),o[Un]=n}catch(u){Vt(t,t.return,u)}}function bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&es(t.type)||t.tag===4}function Ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&es(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&es(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Cd(t,n,a),t=t.sibling;t!==null;)Cd(t,n,a),t=t.sibling}function jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&es(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(jl(t,n,a),t=t.sibling;t!==null;)jl(t,n,a),t=t.sibling}function Mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);In(n,o,a),n[dn]=t,n[Un]=a}catch(d){Vt(t,t.return,d)}}var da=!1,yn=!1,wd=!1,Eg=typeof WeakSet=="function"?WeakSet:Set,wn=null;function hS(t,n){if(t=t.containerInfo,Zd=dc,t=Ip(t),yu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,N=-1,k=-1,ie=0,pe=0,Se=t,le=null;t:for(;;){for(var ue;Se!==a||u!==0&&Se.nodeType!==3||(N=v+u),Se!==d||o!==0&&Se.nodeType!==3||(k=v+o),Se.nodeType===3&&(v+=Se.nodeValue.length),(ue=Se.firstChild)!==null;)le=Se,Se=ue;for(;;){if(Se===t)break t;if(le===a&&++ie===u&&(N=v),le===d&&++pe===o&&(k=v),(ue=Se.nextSibling)!==null)break;Se=le,le=Se.parentNode}Se=ue}a=N===-1||k===-1?null:{start:N,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kd={focusedElem:t,selectionRange:a},dc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var qe=Ds(a.type,u);t=o.getSnapshotBeforeUpdate(qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Vt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)$d(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$d(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function Tg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),o&4&&Ao(5,a);break;case 1:if(ha(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Vt(a,a.return,v)}else{var u=Ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Vt(a,a.return,v)}}o&64&&_g(a),o&512&&Co(a,a.return);break;case 3:if(ha(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cm(t,n)}catch(v){Vt(a,a.return,v)}}break;case 27:n===null&&o&4&&Mg(a);case 26:case 5:ha(t,a),n===null&&o&4&&yg(a),o&512&&Co(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),o&4&&wg(t,a);break;case 13:ha(t,a),o&4&&Rg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=bS.bind(null,a),kS(t,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||yn,u=da;var d=yn;da=o,(yn=n)&&!d?pa(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),da=u,yn=d}break;case 30:break;default:ha(t,a)}}function Ag(t){var n=t.alternate;n!==null&&(t.alternate=null,Ag(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&eo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Yn=!1;function fa(t,n,a){for(a=a.child;a!==null;)Cg(t,n,a),a=a.sibling}function Cg(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:yn||ji(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yn||ji(a,n);var o=rn,u=Yn;es(a.type)&&(rn=a.stateNode,Yn=!1),fa(t,n,a),Io(a.stateNode),rn=o,Yn=u;break;case 5:yn||ji(a,n);case 6:if(o=rn,u=Yn,rn=null,fa(t,n,a),rn=o,Yn=u,rn!==null)if(Yn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{rn.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:rn!==null&&(Yn?(t=rn,_0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Er(t)):_0(rn,a.stateNode));break;case 4:o=rn,u=Yn,rn=a.stateNode.containerInfo,Yn=!0,fa(t,n,a),rn=o,Yn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),yn||qa(4,a,n),fa(t,n,a);break;case 1:yn||(ji(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Sg(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:yn=(o=yn)||a.memoizedState!==null,fa(t,n,a),yn=o;break;default:fa(t,n,a)}}function wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Er(t)}catch(a){Vt(n,n.return,a)}}}function Rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Er(t)}catch(a){Vt(n,n.return,a)}}function pS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Eg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Eg),n;default:throw Error(r(435,t.tag))}}function Xl(t,n){var a=pS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=MS.bind(null,t,o);o.then(u,u)}})}function Zn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,v=n,N=v;e:for(;N!==null;){switch(N.tag){case 27:if(es(N.type)){rn=N.stateNode,Yn=!1;break e}break;case 5:rn=N.stateNode,Yn=!1;break e;case 3:case 4:rn=N.stateNode.containerInfo,Yn=!0;break e}N=N.return}if(rn===null)throw Error(r(160));Cg(d,v,u),rn=null,Yn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ng(n,t),n=n.sibling}var Ni=null;function Ng(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(n,t),Kn(t),o&4&&(qa(3,t,t.return),Ao(3,t),qa(5,t,t.return));break;case 1:Zn(n,t),Kn(t),o&512&&(yn||a===null||ji(a,a.return)),o&64&&da&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ni;if(Zn(n,t),Kn(t),o&512&&(yn||a===null||ji(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ua]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),In(d,o,a),d[dn]=t,xn(d),o=d;break e;case"link":var v=N0("link","href",u).get(o+(a.href||""));if(v){for(var N=0;N<v.length;N++)if(d=v[N],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(N,1);break t}}d=u.createElement(o),In(d,o,a),u.head.appendChild(d);break;case"meta":if(v=N0("meta","content",u).get(o+(a.content||""))){for(N=0;N<v.length;N++)if(d=v[N],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(N,1);break t}}d=u.createElement(o),In(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[dn]=t,xn(d),o=d}t.stateNode=o}else D0(u,t.type,t.stateNode);else t.stateNode=R0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?D0(u,t.type,t.stateNode):R0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Td(t,t.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,t),Kn(t),o&512&&(yn||a===null||ji(a,a.return)),a!==null&&o&4&&Td(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,t),Kn(t),o&512&&(yn||a===null||ji(a,a.return)),t.flags&32){u=t.stateNode;try{ii(u,"")}catch(qe){Vt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Td(t,u,a!==null?a.memoizedProps:u)),o&1024&&(wd=!0);break;case 6:if(Zn(n,t),Kn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Vt(t,t.return,qe)}}break;case 3:if(oc=null,u=Ni,Ni=sc(n.containerInfo),Zn(n,t),Ni=u,Kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(qe){Vt(t,t.return,qe)}wd&&(wd=!1,Dg(t));break;case 4:o=Ni,Ni=sc(t.stateNode.containerInfo),Zn(n,t),Kn(t),Ni=o;break;case 12:Zn(n,t),Kn(t);break;case 31:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xl(t,o)));break;case 13:Zn(n,t),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=we()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xl(t,o)));break;case 22:u=t.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,ie=da,pe=yn;if(da=ie||u,yn=pe||k,Zn(n,t),yn=pe,da=ie,Kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||da||yn||Us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{N=k.stateNode;var Se=k.memoizedProps.style,le=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;N.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){Vt(k,k.return,qe)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(qe){Vt(k,k.return,qe)}}}else if(n.tag===18){if(a===null){k=n;try{var ue=k.stateNode;u?S0(ue,!0):S0(k.stateNode,!1)}catch(qe){Vt(k,k.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(t,a))));break;case 19:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xl(t,o)));break;case 30:break;case 21:break;default:Zn(n,t),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(bg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Ad(t);jl(t,d,u);break;case 5:var v=a.stateNode;a.flags&32&&(ii(v,""),a.flags&=-33);var N=Ad(t);jl(t,N,v);break;case 3:case 4:var k=a.stateNode.containerInfo,ie=Ad(t);Cd(t,ie,k);break;default:throw Error(r(161))}}catch(pe){Vt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Dg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tg(t,n.alternate,n),n=n.sibling}function Us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Us(n);break;case 1:ji(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Sg(n,n.return,a),Us(n);break;case 27:Io(n.stateNode);case 26:case 5:ji(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}t=t.sibling}}function pa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,v=d.flags;switch(d.tag){case 0:case 11:case 15:pa(u,d,a),Ao(4,d);break;case 1:if(pa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Vt(o,o.return,ie)}if(o=d,u=o.updateQueue,u!==null){var N=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)lm(k[u],N)}catch(ie){Vt(o,o.return,ie)}}a&&v&64&&_g(d),Co(d,d.return);break;case 27:Mg(d);case 26:case 5:pa(u,d,a),a&&o===null&&v&4&&yg(d),Co(d,d.return);break;case 12:pa(u,d,a);break;case 31:pa(u,d,a),a&&v&4&&wg(u,d);break;case 13:pa(u,d,a),a&&v&4&&Rg(u,d);break;case 22:d.memoizedState===null&&pa(u,d,a),Co(d,d.return);break;case 30:break;default:pa(u,d,a)}n=n.sibling}}function Rd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ho(a))}function Nd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ho(t))}function Di(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ug(t,n,a,o),n=n.sibling}function Ug(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,o),u&2048&&Ao(9,n);break;case 1:Di(t,n,a,o);break;case 3:Di(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ho(t)));break;case 12:if(u&2048){Di(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,v=d.id,N=d.onPostCommit;typeof N=="function"&&N(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){Vt(n,n.return,k)}}else Di(t,n,a,o);break;case 31:Di(t,n,a,o);break;case 13:Di(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,v=n.alternate,n.memoizedState!==null?d._visibility&2?Di(t,n,a,o):wo(t,n):d._visibility&2?Di(t,n,a,o):(d._visibility|=2,hr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Rd(v,n);break;case 24:Di(t,n,a,o),u&2048&&Nd(n.alternate,n);break;default:Di(t,n,a,o)}}function hr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,v=n,N=a,k=o,ie=v.flags;switch(v.tag){case 0:case 11:case 15:hr(d,v,N,k,u),Ao(8,v);break;case 23:break;case 22:var pe=v.stateNode;v.memoizedState!==null?pe._visibility&2?hr(d,v,N,k,u):wo(d,v):(pe._visibility|=2,hr(d,v,N,k,u)),u&&ie&2048&&Rd(v.alternate,v);break;case 24:hr(d,v,N,k,u),u&&ie&2048&&Nd(v.alternate,v);break;default:hr(d,v,N,k,u)}n=n.sibling}}function wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Rd(o.alternate,o);break;case 24:wo(a,o),u&2048&&Nd(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Ro=8192;function pr(t,n,a){if(t.subtreeFlags&Ro)for(t=t.child;t!==null;)Lg(t,n,a),t=t.sibling}function Lg(t,n,a){switch(t.tag){case 26:pr(t,n,a),t.flags&Ro&&t.memoizedState!==null&&e1(a,Ni,t.memoizedState,t.memoizedProps);break;case 5:pr(t,n,a);break;case 3:case 4:var o=Ni;Ni=sc(t.stateNode.containerInfo),pr(t,n,a),Ni=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,pr(t,n,a),Ro=o):pr(t,n,a));break;default:pr(t,n,a)}}function Pg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function No(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Ig(o,t)}Pg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Og(t),t=t.sibling}function Og(t){switch(t.tag){case 0:case 11:case 15:No(t),t.flags&2048&&qa(9,t,t.return);break;case 3:No(t);break;case 12:No(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wl(t)):No(t);break;default:No(t)}}function Wl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Ig(o,t)}Pg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}t=t.sibling}}function Ig(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,d=o.return;if(Ag(o),o===a){wn=null;break e}if(u!==null){u.return=d,wn=u;break e}wn=d}}}var mS={getCacheForType:function(t){var n=Pn(vn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Pn(vn).controller.signal}},gS=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Qt=null,_t=null,bt=0,kt=0,li=null,Ya=!1,mr=!1,Dd=!1,ma=0,cn=0,Za=0,Ls=0,Ud=0,ci=0,gr=0,Do=null,Qn=null,Ld=!1,ql=0,Bg=0,Yl=1/0,Zl=null,Ka=null,En=0,Qa=null,xr=null,ga=0,Pd=0,Od=null,Fg=null,Uo=0,Id=null;function ui(){return(Ot&2)!==0&&bt!==0?bt&-bt:D.T!==null?kd():Qr()}function zg(){if(ci===0)if((bt&536870912)===0||Et){var t=xt;xt<<=1,(xt&3932160)===0&&(xt=262144),ci=t}else ci=536870912;return t=ri.current,t!==null&&(t.flags|=32),ci}function Jn(t,n,a){(t===Qt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(vr(t,0),Ja(t,bt,ci,!1)),nt(t,a),((Ot&2)===0||t!==Qt)&&(t===Qt&&((Ot&2)===0&&(Ls|=a),cn===4&&Ja(t,bt,ci,!1)),Xi(t))}function Hg(t,n,a){if((Ot&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?_S(t,n):Fd(t,n,!0),d=o;do{if(u===0){mr&&!o&&Ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!xS(a)){u=Fd(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var N=t;u=Do;var k=N.current.memoizedState.isDehydrated;if(k&&(vr(N,v).flags|=256),v=Fd(N,v,!1),v!==2){if(Dd&&!k){N.errorRecoveryDisabledLanes|=d,Ls|=d,u=4;break e}d=Qn,Qn=u,d!==null&&(Qn===null?Qn=d:Qn.push.apply(Qn,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){vr(t,0),Ja(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ja(o,n,ci,!Ya);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=ql+300-we(),10<u)){if(Ja(o,n,ci,!Ya),me(o,0,!0)!==0)break e;ga=n,o.timeoutHandle=x0(Gg.bind(null,o,a,Qn,Zl,Ld,n,ci,Ls,gr,Ya,d,"Throttled",-0,0),u);break e}Gg(o,a,Qn,Zl,Ld,n,ci,Ls,gr,Ya,d,null,-0,0)}}break}while(!0);Xi(t)}function Gg(t,n,a,o,u,d,v,N,k,ie,pe,Se,le,ue){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},Lg(n,d,Se);var qe=(d&62914560)===d?ql-we():(d&4194048)===d?Bg-we():0;if(qe=t1(Se,qe),qe!==null){ga=d,t.cancelPendingCommit=qe(Zg.bind(null,t,n,d,a,o,u,v,N,k,pe,Se,null,le,ue)),Ja(t,d,v,!ie);return}}Zg(t,n,d,a,o,u,v,N,k)}function xS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ai(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,a,o){n&=~Ud,n&=~Ls,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Be(u),v=1<<d;o[d]=-1,u&=~v}a!==0&&Pt(t,a,n)}function Kl(){return(Ot&6)===0?(Lo(0),!1):!0}function Bd(){if(_t!==null){if(kt===0)var t=_t.return;else t=_t,sa=Es=null,$u(t),lr=null,mo=0,t=_t;for(;t!==null;)vg(t.alternate,t),t=t.return;_t=null}}function vr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,BS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ga=0,Bd(),Qt=t,_t=a=ia(t.current,null),bt=n,kt=0,li=null,Ya=!1,mr=He(t,n),Dd=!1,gr=ci=Ud=Ls=Za=cn=0,Qn=Do=null,Ld=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),d=1<<u;n|=t[u],o&=~d}return ma=n,xl(),a}function kg(t,n){ut=null,D.H=Mo,n===or||n===Tl?(n=am(),kt=3):n===Gu?(n=am(),kt=4):kt=n===md?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,_t===null&&(cn=1,zl(t,xi(n,t.current)))}function Vg(){var t=ri.current;return t===null?!0:(bt&4194048)===bt?yi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===yi:!1}function jg(){var t=D.H;return D.H=Mo,t===null?Mo:t}function Xg(){var t=D.A;return D.A=mS,t}function Ql(){cn=4,Ya||(bt&4194048)!==bt&&ri.current!==null||(mr=!0),(Za&134217727)===0&&(Ls&134217727)===0||Qt===null||Ja(Qt,bt,ci,!1)}function Fd(t,n,a){var o=Ot;Ot|=2;var u=jg(),d=Xg();(Qt!==t||bt!==n)&&(Zl=null,vr(t,n)),n=!1;var v=cn;e:do try{if(kt!==0&&_t!==null){var N=_t,k=li;switch(kt){case 8:Bd(),v=6;break e;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var ie=kt;if(kt=0,li=null,_r(t,N,k,ie),a&&mr){v=0;break e}break;default:ie=kt,kt=0,li=null,_r(t,N,k,ie)}}vS(),v=cn;break}catch(pe){kg(t,pe)}while(!0);return n&&t.shellSuspendCounter++,sa=Es=null,Ot=o,D.H=u,D.A=d,_t===null&&(Qt=null,bt=0,xl()),v}function vS(){for(;_t!==null;)Wg(_t)}function _S(t,n){var a=Ot;Ot|=2;var o=jg(),u=Xg();Qt!==t||bt!==n?(Zl=null,Yl=we()+500,vr(t,n)):mr=He(t,n);e:do try{if(kt!==0&&_t!==null){n=_t;var d=li;t:switch(kt){case 1:kt=0,li=null,_r(t,n,d,1);break;case 2:case 9:if(nm(d)){kt=0,li=null,qg(n);break}n=function(){kt!==2&&kt!==9||Qt!==t||(kt=7),Xi(t)},d.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:nm(d)?(kt=0,li=null,qg(n)):(kt=0,li=null,_r(t,n,d,7));break;case 5:var v=null;switch(_t.tag){case 26:v=_t.memoizedState;case 5:case 27:var N=_t;if(v?U0(v):N.stateNode.complete){kt=0,li=null;var k=N.sibling;if(k!==null)_t=k;else{var ie=N.return;ie!==null?(_t=ie,Jl(ie)):_t=null}break t}}kt=0,li=null,_r(t,n,d,5);break;case 6:kt=0,li=null,_r(t,n,d,6);break;case 8:Bd(),cn=6;break e;default:throw Error(r(462))}}SS();break}catch(pe){kg(t,pe)}while(!0);return sa=Es=null,D.H=o,D.A=u,Ot=a,_t!==null?0:(Qt=null,bt=0,xl(),cn)}function SS(){for(;_t!==null&&!mt();)Wg(_t)}function Wg(t){var n=gg(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Jl(t):_t=n}function qg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ug(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=ug(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:$u(n);default:vg(a,n),n=_t=Xp(n,ma),n=gg(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Jl(t):_t=n}function _r(t,n,a,o){sa=Es=null,$u(n),lr=null,mo=0;var u=n.return;try{if(lS(t,u,n,a,bt)){cn=1,zl(t,xi(a,t.current)),_t=null;return}}catch(d){if(u!==null)throw _t=u,d;cn=1,zl(t,xi(a,t.current)),_t=null;return}n.flags&32768?(Et||o===1?t=!0:mr||(bt&536870912)!==0?t=!1:(Ya=t=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),Yg(n,t)):Jl(n)}function Jl(t){var n=t;do{if((n.flags&32768)!==0){Yg(n,Ya);return}t=n.return;var a=dS(n.alternate,n,ma);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);cn===0&&(cn=5)}function Yg(t,n){do{var a=fS(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);cn=6,_t=null}function Zg(t,n,a,o,u,d,v,N,k){t.cancelPendingCommit=null;do $l();while(En!==0);if((Ot&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Au,on(t,a,d,v,N,k),t===Qt&&(_t=Qt=null,bt=0),xr=n,Qa=t,ga=a,Pd=d,Od=u,Fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ES(J,function(){return e0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,u=F.p,F.p=2,v=Ot,Ot|=4;try{hS(t,n,a)}finally{Ot=v,F.p=u,D.T=o}}En=1,Kg(),Qg(),Jg()}}function Kg(){if(En===1){En=0;var t=Qa,n=xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=F.p;F.p=2;var u=Ot;Ot|=4;try{Ng(n,t);var d=Kd,v=Ip(t.containerInfo),N=d.focusedElem,k=d.selectionRange;if(v!==N&&N&&N.ownerDocument&&Op(N.ownerDocument.documentElement,N)){if(k!==null&&yu(N)){var ie=k.start,pe=k.end;if(pe===void 0&&(pe=ie),"selectionStart"in N)N.selectionStart=ie,N.selectionEnd=Math.min(pe,N.value.length);else{var Se=N.ownerDocument||document,le=Se&&Se.defaultView||window;if(le.getSelection){var ue=le.getSelection(),qe=N.textContent.length,tt=Math.min(k.start,qe),Zt=k.end===void 0?tt:Math.min(k.end,qe);!ue.extend&&tt>Zt&&(v=Zt,Zt=tt,tt=v);var Q=Pp(N,tt),X=Pp(N,Zt);if(Q&&X&&(ue.rangeCount!==1||ue.anchorNode!==Q.node||ue.anchorOffset!==Q.offset||ue.focusNode!==X.node||ue.focusOffset!==X.offset)){var ne=Se.createRange();ne.setStart(Q.node,Q.offset),ue.removeAllRanges(),tt>Zt?(ue.addRange(ne),ue.extend(X.node,X.offset)):(ne.setEnd(X.node,X.offset),ue.addRange(ne))}}}}for(Se=[],ue=N;ue=ue.parentNode;)ue.nodeType===1&&Se.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Se.length;N++){var ve=Se[N];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}dc=!!Zd,Kd=Zd=null}finally{Ot=u,F.p=o,D.T=a}}t.current=n,En=2}}function Qg(){if(En===2){En=0;var t=Qa,n=xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=F.p;F.p=2;var u=Ot;Ot|=4;try{Tg(t,n.alternate,n)}finally{Ot=u,F.p=o,D.T=a}}En=3}}function Jg(){if(En===4||En===3){En=0,Wt();var t=Qa,n=xr,a=ga,o=Fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,xr=Qa=null,$g(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ka=null),Kr(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=D.T,u=F.p,F.p=2,D.T=null;try{for(var d=t.onRecoverableError,v=0;v<o.length;v++){var N=o[v];d(N.value,{componentStack:N.stack})}}finally{D.T=n,F.p=u}}(ga&3)!==0&&$l(),Xi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Id?Uo++:(Uo=0,Id=t):Uo=0,Lo(0)}}function $g(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ho(n)))}function $l(){return Kg(),Qg(),Jg(),e0()}function e0(){if(En!==5)return!1;var t=Qa,n=Pd;Pd=0;var a=Kr(ga),o=D.T,u=F.p;try{F.p=32>a?32:a,D.T=null,a=Od,Od=null;var d=Qa,v=ga;if(En=0,xr=Qa=null,ga=0,(Ot&6)!==0)throw Error(r(331));var N=Ot;if(Ot|=4,Og(d.current),Ug(d,d.current,v,a),Ot=N,Lo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{F.p=u,D.T=o,$g(t,n)}}function t0(t,n,a){n=xi(a,n),n=pd(t.stateNode,n,2),t=ja(t,n,2),t!==null&&(nt(t,2),Xi(t))}function Vt(t,n,a){if(t.tag===3)t0(t,t,a);else for(;n!==null;){if(n.tag===3){t0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){t=xi(a,t),a=ng(2),o=ja(n,a,2),o!==null&&(ig(a,o,n,t),nt(o,2),Xi(o));break}}n=n.return}}function zd(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new gS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Dd=!0,u.add(a),t=yS.bind(null,t,n,a),n.then(t,t))}function yS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(bt&a)===a&&(cn===4||cn===3&&(bt&62914560)===bt&&300>we()-ql?(Ot&2)===0&&vr(t,0):Ud|=a,gr===bt&&(gr=0)),Xi(t)}function n0(t,n){n===0&&(n=Ee()),t=ys(t,n),t!==null&&(nt(t,n),Xi(t))}function bS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),n0(t,a)}function MS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),n0(t,a)}function ES(t,n){return W(t,n)}var ec=null,Sr=null,Hd=!1,tc=!1,Gd=!1,$a=0;function Xi(t){t!==Sr&&t.next===null&&(Sr===null?ec=Sr=t:Sr=Sr.next=t),tc=!0,Hd||(Hd=!0,AS())}function Lo(t,n){if(!Gd&&tc){Gd=!0;do for(var a=!1,o=ec;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var v=o.suspendedLanes,N=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=u&~(v&~N),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,r0(o,d))}else d=bt,d=me(o,o===Qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||He(o,d)||(a=!0,r0(o,d));o=o.next}while(a);Gd=!1}}function TS(){i0()}function i0(){tc=Hd=!1;var t=0;$a!==0&&IS()&&(t=$a);for(var n=we(),a=null,o=ec;o!==null;){var u=o.next,d=a0(o,n);d===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(Sr=a)):(a=o,(t!==0||(d&3)!==0)&&(tc=!0)),o=u}En!==0&&En!==5||Lo(t),$a!==0&&($a=0)}function a0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Be(d),N=1<<v,k=u[v];k===-1?((N&a)===0||(N&o)!==0)&&(u[v]=Le(N,n)):k<=n&&(t.expiredLanes|=N),d&=~N}if(n=Qt,a=bt,a=me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&$t(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&$t(o),Kr(a)){case 2:case 8:a=T;break;case 32:a=J;break;case 268435456:a=Te;break;default:a=J}return o=s0.bind(null,t),a=W(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&$t(o),t.callbackPriority=2,t.callbackNode=null,2}function s0(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var o=bt;return o=me(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Hg(t,o,n),a0(t,we()),t.callbackNode!=null&&t.callbackNode===a?s0.bind(null,t):null)}function r0(t,n){if($l())return null;Hg(t,n,!0)}function AS(){FS(function(){(Ot&6)!==0?W(L,TS):i0()})}function kd(){if($a===0){var t=sr;t===0&&(t=st,st<<=1,(st&261888)===0&&(st=256)),$a=t}return $a}function o0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xs(""+t)}function l0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function CS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=o0((u[Un]||null).action),v=o.submitter;v&&(n=(n=v[Un]||null)?o0(n.formAction):v.getAttribute("formAction"),n!==null&&(d=n,v=null));var N=new hl("action","action",null,o,u);t.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var k=v?l0(u,v):new FormData(u);ld(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(N.preventDefault(),k=v?l0(u,v):new FormData(u),ld(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var Vd=0;Vd<Tu.length;Vd++){var jd=Tu[Vd],wS=jd.toLowerCase(),RS=jd[0].toUpperCase()+jd.slice(1);Ri(wS,"on"+RS)}Ri(zp,"onAnimationEnd"),Ri(Hp,"onAnimationIteration"),Ri(Gp,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(X_,"onTransitionRun"),Ri(W_,"onTransitionStart"),Ri(q_,"onTransitionCancel"),Ri(kp,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function c0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var v=o.length-1;0<=v;v--){var N=o[v],k=N.instance,ie=N.currentTarget;if(N=N.listener,k!==d&&u.isPropagationStopped())break e;d=N,u.currentTarget=ie;try{d(u)}catch(pe){gl(pe)}u.currentTarget=null,d=k}else for(v=0;v<o.length;v++){if(N=o[v],k=N.instance,ie=N.currentTarget,N=N.listener,k!==d&&u.isPropagationStopped())break e;d=N,u.currentTarget=ie;try{d(u)}catch(pe){gl(pe)}u.currentTarget=null,d=k}}}}function St(t,n){var a=n[Da];a===void 0&&(a=n[Da]=new Set);var o=t+"__bubble";a.has(o)||(u0(n,t,2,!1),a.add(o))}function Xd(t,n,a){var o=0;n&&(o|=4),u0(a,t,o,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Wd(t){if(!t[nc]){t[nc]=!0,cl.forEach(function(a){a!=="selectionchange"&&(NS.has(a)||Xd(a,!1,t),Xd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,Xd("selectionchange",!1,n))}}function u0(t,n,a,o){switch(z0(n)){case 2:var u=a1;break;case 8:u=s1;break;default:u=lf}a=u.bind(null,n,a,t),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function qd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var N=o.stateNode.containerInfo;if(N===u)break;if(v===4)for(v=o.return;v!==null;){var k=v.tag;if((k===3||k===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;N!==null;){if(v=La(N),v===null)return;if(k=v.tag,k===5||k===6||k===26||k===27){o=d=v;continue e}N=N.parentNode}}o=o.return}mp(function(){var ie=d,pe=uu(a),Se=[];e:{var le=Vp.get(t);if(le!==void 0){var ue=hl,qe=t;switch(t){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":ue=M_;break;case"focusin":qe="focus",ue=gu;break;case"focusout":qe="blur",ue=gu;break;case"beforeblur":case"afterblur":ue=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=d_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=A_;break;case zp:case Hp:case Gp:ue=p_;break;case kp:ue=w_;break;case"scroll":case"scrollend":ue=c_;break;case"wheel":ue=N_;break;case"copy":case"cut":case"paste":ue=g_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Sp;break;case"toggle":case"beforetoggle":ue=U_}var tt=(n&4)!==0,Zt=!tt&&(t==="scroll"||t==="scrollend"),Q=tt?le!==null?le+"Capture":null:le;tt=[];for(var X=ie,ne;X!==null;){var ve=X;if(ne=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ne===null||Q===null||(ve=to(X,Q),ve!=null&&tt.push(Oo(X,ve,ne))),Zt)break;X=X.return}0<tt.length&&(le=new ue(le,qe,null,a,pe),Se.push({event:le,listeners:tt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&a!==cu&&(qe=a.relatedTarget||a.fromElement)&&(La(qe)||qe[ea]))break e;if((ue||le)&&(le=pe.window===pe?pe:(le=pe.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(qe=a.relatedTarget||a.toElement,ue=ie,qe=qe?La(qe):null,qe!==null&&(Zt=c(qe),tt=qe.tag,qe!==Zt||tt!==5&&tt!==27&&tt!==6)&&(qe=null)):(ue=null,qe=ie),ue!==qe)){if(tt=vp,ve="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Sp,ve="onPointerLeave",Q="onPointerEnter",X="pointer"),Zt=ue==null?le:gs(ue),ne=qe==null?le:gs(qe),le=new tt(ve,X+"leave",ue,a,pe),le.target=Zt,le.relatedTarget=ne,ve=null,La(pe)===ie&&(tt=new tt(Q,X+"enter",qe,a,pe),tt.target=ne,tt.relatedTarget=Zt,ve=tt),Zt=ve,ue&&qe)t:{for(tt=DS,Q=ue,X=qe,ne=0,ve=Q;ve;ve=tt(ve))ne++;ve=0;for(var et=X;et;et=tt(et))ve++;for(;0<ne-ve;)Q=tt(Q),ne--;for(;0<ve-ne;)X=tt(X),ve--;for(;ne--;){if(Q===X||X!==null&&Q===X.alternate){tt=Q;break t}Q=tt(Q),X=tt(X)}tt=null}else tt=null;ue!==null&&d0(Se,le,ue,tt,!1),qe!==null&&Zt!==null&&d0(Se,Zt,qe,tt,!0)}}e:{if(le=ie?gs(ie):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var Dt=wp;else if(Ap(le))if(Rp)Dt=k_;else{Dt=H_;var Ze=z_}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ie&&It(ie.elementType)&&(Dt=wp):Dt=G_;if(Dt&&(Dt=Dt(t,ie))){Cp(Se,Dt,a,pe);break e}Ze&&Ze(t,le,ie),t==="focusout"&&ie&&le.type==="number"&&ie.memoizedProps.value!=null&&vt(le,"number",le.value)}switch(Ze=ie?gs(ie):window,t){case"focusin":(Ap(Ze)||Ze.contentEditable==="true")&&(Qs=Ze,bu=ie,co=null);break;case"focusout":co=bu=Qs=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Bp(Se,a,pe);break;case"selectionchange":if(j_)break;case"keydown":case"keyup":Bp(Se,a,pe)}var ht;if(vu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Ks?Ep(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(yp&&a.locale!=="ko"&&(Ks||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Ks&&(ht=gp()):(Ba=pe,hu="value"in Ba?Ba.value:Ba.textContent,Ks=!0)),Ze=ic(ie,Mt),0<Ze.length&&(Mt=new _p(Mt,t,null,a,pe),Se.push({event:Mt,listeners:Ze}),ht?Mt.data=ht:(ht=Tp(a),ht!==null&&(Mt.data=ht)))),(ht=P_?O_(t,a):I_(t,a))&&(Mt=ic(ie,"onBeforeInput"),0<Mt.length&&(Ze=new _p("onBeforeInput","beforeinput",null,a,pe),Se.push({event:Ze,listeners:Mt}),Ze.data=ht)),CS(Se,t,ie,a,pe)}c0(Se,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=to(t,a),u!=null&&o.unshift(Oo(t,u,d)),u=to(t,n),u!=null&&o.push(Oo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function DS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function d0(t,n,a,o,u){for(var d=n._reactName,v=[];a!==null&&a!==o;){var N=a,k=N.alternate,ie=N.stateNode;if(N=N.tag,k!==null&&k===o)break;N!==5&&N!==26&&N!==27||ie===null||(k=ie,u?(ie=to(a,d),ie!=null&&v.unshift(Oo(a,ie,k))):u||(ie=to(a,d),ie!=null&&v.push(Oo(a,ie,k)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var US=/\r\n?/g,LS=/\u0000|\uFFFD/g;function f0(t){return(typeof t=="string"?t:""+t).replace(US,`
`).replace(LS,"")}function h0(t,n){return n=f0(n),f0(t)===n}function Yt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ii(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ii(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":wi(t,o,d);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Yt(t,n,"name",u.name,u,null),Yt(t,n,"formEncType",u.formEncType,u,null),Yt(t,n,"formMethod",u.formMethod,u,null),Yt(t,n,"formTarget",u.formTarget,u,null)):(Yt(t,n,"encType",u.encType,u,null),Yt(t,n,"method",u.method,u,null),Yt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ta);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Fe(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Fe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gi.get(a)||a,Fe(t,a,o))}}function Yd(t,n,a,o,u,d){switch(a){case"style":wi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ii(t,o):(typeof o=="number"||typeof o=="bigint")&&ii(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Un]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Fe(t,a,o)}}}function In(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(t,n,d,v,a,null)}}u&&Yt(t,n,"srcSet",a.srcSet,a,null),o&&Yt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var N=d=v=u=null,k=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":v=pe;break;case"checked":k=pe;break;case"defaultChecked":ie=pe;break;case"value":d=pe;break;case"defaultValue":N=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Yt(t,n,o,pe,a,null)}}zn(t,d,N,k,ie,v,u,!1);return;case"select":St("invalid",t),o=v=d=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":d=N;break;case"defaultValue":v=N;break;case"multiple":o=N;default:Yt(t,n,u,N,a,null)}n=d,a=v,t.multiple=!!o,n!=null?Mn(t,!!o,n,!1):a!=null&&Mn(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(N=a[v],N!=null))switch(v){case"value":o=N;break;case"defaultValue":u=N;break;case"children":d=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(91));break;default:Yt(t,n,v,N,a,null)}Ci(t,o,u,d);return;case"option":for(k in a)a.hasOwnProperty(k)&&(o=a[k],o!=null)&&(k==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Yt(t,n,k,o,a,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Po.length;o++)St(Po[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(t,n,ie,o,a,null)}return;default:if(It(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&Yd(t,n,pe,o,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!=null&&Yt(t,n,N,o,a,null))}function PS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,N=null,k=null,ie=null,pe=null;for(ue in a){var Se=a[ue];if(a.hasOwnProperty(ue)&&Se!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":k=Se;default:o.hasOwnProperty(ue)||Yt(t,n,ue,null,o,Se)}}for(var le in o){var ue=o[le];if(Se=a[le],o.hasOwnProperty(le)&&(ue!=null||Se!=null))switch(le){case"type":d=ue;break;case"name":u=ue;break;case"checked":ie=ue;break;case"defaultChecked":pe=ue;break;case"value":v=ue;break;case"defaultValue":N=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==Se&&Yt(t,n,le,ue,o,Se)}}ke(t,v,N,k,ie,pe,d,u);return;case"select":ue=v=N=le=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":ue=k;default:o.hasOwnProperty(d)||Yt(t,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":le=d;break;case"defaultValue":N=d;break;case"multiple":v=d;default:d!==k&&Yt(t,n,u,d,o,k)}n=N,a=v,o=ue,le!=null?Mn(t,!!a,le,!1):!!o!=!!a&&(n!=null?Mn(t,!!a,n,!0):Mn(t,!!a,a?[]:"",!1));return;case"textarea":ue=le=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Yt(t,n,N,null,o,u)}for(v in o)if(u=o[v],d=a[v],o.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":le=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Yt(t,n,v,u,o,d)}ni(t,le,ue);return;case"option":for(var qe in a)le=a[qe],a.hasOwnProperty(qe)&&le!=null&&!o.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:Yt(t,n,qe,null,o,le));for(k in o)le=o[k],ue=a[k],o.hasOwnProperty(k)&&le!==ue&&(le!=null||ue!=null)&&(k==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":Yt(t,n,k,le,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)le=a[tt],a.hasOwnProperty(tt)&&le!=null&&!o.hasOwnProperty(tt)&&Yt(t,n,tt,null,o,le);for(ie in o)if(le=o[ie],ue=a[ie],o.hasOwnProperty(ie)&&le!==ue&&(le!=null||ue!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Yt(t,n,ie,le,o,ue)}return;default:if(It(n)){for(var Zt in a)le=a[Zt],a.hasOwnProperty(Zt)&&le!==void 0&&!o.hasOwnProperty(Zt)&&Yd(t,n,Zt,void 0,o,le);for(pe in o)le=o[pe],ue=a[pe],!o.hasOwnProperty(pe)||le===ue||le===void 0&&ue===void 0||Yd(t,n,pe,le,o,ue);return}}for(var Q in a)le=a[Q],a.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&Yt(t,n,Q,null,o,le);for(Se in o)le=o[Se],ue=a[Se],!o.hasOwnProperty(Se)||le===ue||le==null&&ue==null||Yt(t,n,Se,le,o,ue)}function p0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function OS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,v=u.initiatorType,N=u.duration;if(d&&N&&p0(v)){for(v=0,N=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],ie=k.startTime;if(ie>N)break;var pe=k.transferSize,Se=k.initiatorType;pe&&p0(Se)&&(k=k.responseEnd,v+=pe*(k<N?1:(N-ie)/(k-ie)))}if(--o,n+=8*(d+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zd=null,Kd=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function m0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Qd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jd=null;function IS(){var t=window.event;return t&&t.type==="popstate"?t===Jd?!1:(Jd=t,!0):(Jd=null,!1)}var x0=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,v0=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof v0<"u"?function(t){return v0.resolve(null).then(t).catch(zS)}:x0;function zS(t){setTimeout(function(){throw t})}function es(t){return t==="head"}function _0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Io(a);for(var d=a.firstChild;d;){var v=d.nextSibling,N=d.nodeName;d[Ua]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=v}}else a==="body"&&Io(t.ownerDocument.body);a=u}while(a);Er(n)}function S0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function $d(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$d(a),eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function HS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ua])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function GS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=bi(t.nextSibling),t===null))return null;return t}function y0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bi(t.nextSibling),t===null))return null;return t}function ef(t){return t.data==="$?"||t.data==="$~"}function tf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var nf=null;function b0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return bi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function M0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function E0(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Io(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);eo(t)}var Mi=new Map,T0=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=F.d;F.d={f:VS,r:jS,D:XS,C:WS,L:qS,m:YS,X:KS,S:ZS,M:QS};function VS(){var t=xa.f(),n=Kl();return t||n}function jS(t){var n=Pa(t);n!==null&&n.tag===5&&n.type==="form"?km(n):xa.r(t)}var yr=typeof document>"u"?null:document;function A0(t,n,a){var o=yr;if(o&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),T0.has(u)||(T0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),In(n,"link",t),xn(n),o.head.appendChild(n)))}}function XS(t){xa.D(t),A0("dns-prefetch",t,null)}function WS(t,n){xa.C(t,n),A0("preconnect",t,n)}function qS(t,n,a){xa.L(t,n,a);var o=yr;if(o&&t&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(t)+'"]';var d=u;switch(n){case"style":d=br(t);break;case"script":d=Mr(t)}Mi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(d))||n==="script"&&o.querySelector(Fo(d))||(n=o.createElement("link"),In(n,"link",t),xn(n),o.head.appendChild(n)))}}function YS(t,n){xa.m(t,n);var a=yr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Mr(t)}if(!Mi.has(d)&&(t=_({rel:"modulepreload",href:t},n),Mi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(d)))return}o=a.createElement("link"),In(o,"link",t),xn(o),a.head.appendChild(o)}}}function ZS(t,n,a){xa.S(t,n,a);var o=yr;if(o&&t){var u=Oa(o).hoistableStyles,d=br(t);n=n||"default";var v=u.get(d);if(!v){var N={loading:0,preload:null};if(v=o.querySelector(Bo(d)))N.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(d))&&af(t,a);var k=v=o.createElement("link");xn(k),In(k,"link",t),k._p=new Promise(function(ie,pe){k.onload=ie,k.onerror=pe}),k.addEventListener("load",function(){N.loading|=1}),k.addEventListener("error",function(){N.loading|=2}),N.loading|=4,rc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:N},u.set(d,v)}}}function KS(t,n){xa.X(t,n);var a=yr;if(a&&t){var o=Oa(a).hoistableScripts,u=Mr(t),d=o.get(u);d||(d=a.querySelector(Fo(u)),d||(t=_({src:t,async:!0},n),(n=Mi.get(u))&&sf(t,n),d=a.createElement("script"),xn(d),In(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function QS(t,n){xa.M(t,n);var a=yr;if(a&&t){var o=Oa(a).hoistableScripts,u=Mr(t),d=o.get(u);d||(d=a.querySelector(Fo(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&sf(t,n),d=a.createElement("script"),xn(d),In(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function C0(t,n,a,o){var u=(u=te.current)?sc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=br(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=br(a.href);var d=Oa(u).hoistableStyles,v=d.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=u.querySelector(Bo(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,a),d||JS(u,t,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function br(t){return'href="'+Ht(t)+'"'}function Bo(t){return'link[rel="stylesheet"]['+t+"]"}function w0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function JS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),In(n,"link",a),xn(n),t.head.appendChild(n))}function Mr(t){return'[src="'+Ht(t)+'"]'}function Fo(t){return"script[async]"+t}function R0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(o)return n.instance=o,xn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),xn(o),In(o,"style",u),rc(o,a.precedence,t),n.instance=o;case"stylesheet":u=br(a.href);var d=t.querySelector(Bo(u));if(d)return n.state.loading|=4,n.instance=d,xn(d),d;o=w0(a),(u=Mi.get(u))&&af(o,u),d=(t.ownerDocument||t).createElement("link"),xn(d);var v=d;return v._p=new Promise(function(N,k){v.onload=N,v.onerror=k}),In(d,"link",o),n.state.loading|=4,rc(d,a.precedence,t),n.instance=d;case"script":return d=Mr(a.src),(u=t.querySelector(Fo(d)))?(n.instance=u,xn(u),u):(o=a,(u=Mi.get(d))&&(o=_({},a),sf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),xn(u),In(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,rc(o,a.precedence,t));return n.instance}function rc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,v=0;v<o.length;v++){var N=o[v];if(N.dataset.precedence===n)d=N;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function sf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function N0(t,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ua]||d[dn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(n)||"";v=t+v;var N=o.get(v);N?N.push(d):o.set(v,[d])}}return o}function D0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function $S(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function U0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function e1(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=br(o.href),d=n.querySelector(Bo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=lc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,xn(d);return}d=n.ownerDocument||n,o=w0(o),(u=Mi.get(u))&&af(o,u),d=d.createElement("link"),xn(d);var v=d;v._p=new Promise(function(N,k){v.onload=N,v.onerror=k}),In(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=lc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var rf=0;function t1(t,n){return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&rf===0&&(rf=62500*OS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>rf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function uc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(n1,t),cc=null,lc.call(t))}function n1(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var o=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,u),a.set(v,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:U,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function i1(t,n,a,o,u,d,v,N,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function L0(t,n,a,o,u,d,v,N,k,ie,pe,Se){return t=new i1(t,n,a,v,k,ie,pe,Se,N),n=1,d===!0&&(n|=24),d=si(3,null,null,n),t.current=d,d.stateNode=t,n=Fu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ku(d),t}function P0(t){return t?(t=er,t):er}function O0(t,n,a,o,u,d){u=P0(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ja(t,o,n),a!==null&&(Jn(a,t,n),xo(a,t,n))}function I0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function of(t,n){I0(t,n),(t=t.alternate)&&I0(t,n)}function B0(t){if(t.tag===13||t.tag===31){var n=ys(t,67108864);n!==null&&Jn(n,t,67108864),of(t,67108864)}}function F0(t){if(t.tag===13||t.tag===31){var n=ui();n=ms(n);var a=ys(t,n);a!==null&&Jn(a,t,n),of(t,n)}}var dc=!0;function a1(t,n,a,o){var u=D.T;D.T=null;var d=F.p;try{F.p=2,lf(t,n,a,o)}finally{F.p=d,D.T=u}}function s1(t,n,a,o){var u=D.T;D.T=null;var d=F.p;try{F.p=8,lf(t,n,a,o)}finally{F.p=d,D.T=u}}function lf(t,n,a,o){if(dc){var u=cf(o);if(u===null)qd(t,n,o,fc,a),H0(t,o);else if(o1(u,t,n,a,o))o.stopPropagation();else if(H0(t,o),n&4&&-1<r1.indexOf(t)){for(;u!==null;){var d=Pa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Ce(d.pendingLanes);if(v!==0){var N=d;for(N.pendingLanes|=2,N.entangledLanes|=2;v;){var k=1<<31-Be(v);N.entanglements[1]|=k,v&=~k}Xi(d),(Ot&6)===0&&(Yl=we()+500,Lo(0))}}break;case 31:case 13:N=ys(d,2),N!==null&&Jn(N,d,2),Kl(),of(d,2)}if(d=cf(o),d===null&&qd(t,n,o,fc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else qd(t,n,o,null,a)}}function cf(t){return t=uu(t),uf(t)}var fc=null;function uf(t){if(fc=null,t=La(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return fc=t,null}function z0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nn()){case L:return 2;case T:return 8;case J:case _e:return 32;case Te:return 268435456;default:return 32}default:return 32}}var df=!1,ts=null,ns=null,is=null,Ho=new Map,Go=new Map,as=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H0(t,n){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function ko(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Pa(n),n!==null&&B0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function o1(t,n,a,o,u){switch(n){case"focusin":return ts=ko(ts,t,n,a,o,u),!0;case"dragenter":return ns=ko(ns,t,n,a,o,u),!0;case"mouseover":return is=ko(is,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Ho.set(d,ko(Ho.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Go.set(d,ko(Go.get(d)||null,t,n,a,o,u)),!0}return!1}function G0(t){var n=La(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Jr(t.priority,function(){F0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Jr(t.priority,function(){F0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=cf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);cu=o,a.target.dispatchEvent(o),cu=null}else return n=Pa(a),n!==null&&B0(n),t.blockedOn=a,!1;n.shift()}return!0}function k0(t,n,a){hc(t)&&a.delete(n)}function l1(){df=!1,ts!==null&&hc(ts)&&(ts=null),ns!==null&&hc(ns)&&(ns=null),is!==null&&hc(is)&&(is=null),Ho.forEach(k0),Go.forEach(k0)}function pc(t,n){t.blockedOn===n&&(t.blockedOn=null,df||(df=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,l1)))}var mc=null;function V0(t){mc!==t&&(mc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(uf(o||a)===null)continue;break}var d=Pa(a);d!==null&&(t.splice(n,3),n-=3,ld(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(t){function n(k){return pc(k,t)}ts!==null&&pc(ts,t),ns!==null&&pc(ns,t),is!==null&&pc(is,t),Ho.forEach(n),Go.forEach(n);for(var a=0;a<as.length;a++){var o=as[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)G0(a),a.blockedOn===null&&as.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],v=u[Un]||null;if(typeof d=="function")v||V0(a);else if(v){var N=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[Un]||null)N=v.formAction;else if(uf(u)!==null)continue}else N=v.action;typeof N=="function"?a[o+1]=N:(a.splice(o,3),o-=3),V0(a)}}}function j0(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ff(t){this._internalRoot=t}gc.prototype.render=ff.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ui();O0(a,o,t,n,null,null)},gc.prototype.unmount=ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;O0(t.current,2,null,t,null,null),Kl(),n[ea]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Qr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,t),a===0&&G0(t)}};var X0=e.version;if(X0!=="19.2.3")throw Error(r(527,X0,"19.2.3"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var c1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{fe=xc.inject(c1),he=xc}catch{}}return jo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Jm,d=$m,v=eg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=L0(t,1,!1,null,null,a,o,null,u,d,v,j0),t[ea]=n.current,Wd(t),new ff(n)},jo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=Jm,v=$m,N=eg,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=L0(t,1,!0,n,a??null,o,u,k,d,v,N,j0),n.context=P0(null),a=n.current,o=ui(),o=ms(o),u=Va(o),u.callback=null,ja(a,u,o),a=o,n.current.lanes=a,nt(n,a),Xi(n),t[ea]=n.current,Wd(t),new gc(n)},jo.version="19.2.3",jo}var tx;function _1(){if(tx)return mf.exports;tx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mf.exports=v1(),mf.exports}var S1=_1();const y1=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b1=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),nx=s=>{const e=b1(s);return e.charAt(0).toUpperCase()+e.slice(1)},hv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),M1=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var E1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const T1=De.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>De.createElement("svg",{ref:m,...E1,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:hv("lucide",l),...!c&&!M1(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,S])=>De.createElement(p,S)),...Array.isArray(c)?c:[c]]));const Jt=(s,e)=>{const i=De.forwardRef(({className:r,...l},c)=>De.createElement(T1,{ref:c,iconNode:e,className:hv(`lucide-${y1(nx(s))}`,`lucide-${s}`,r),...l}));return i.displayName=nx(s),i};const A1=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],C1=Jt("arrow-down",A1);const w1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nl=Jt("arrow-left",w1);const R1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],zi=Jt("arrow-right",R1);const N1=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],D1=Jt("arrow-up",N1);const U1=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],L1=Jt("brain-circuit",U1);const P1=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],pv=Jt("calculator",P1);const O1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],I1=Jt("calendar-days",O1);const B1=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],F1=Jt("chart-column",B1);const z1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],H1=Jt("chevron-left",z1);const G1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],k1=Jt("chevron-right",G1);const V1=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Kc=Jt("clock-3",V1);const j1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Vc=Jt("external-link",j1);const X1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],mv=Jt("github",X1);const W1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],q1=Jt("house",W1);const Y1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Z1=Jt("info",Y1);const K1=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],gv=Jt("instagram",K1);const Q1=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],xv=Jt("linkedin",Q1);const J1=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],$1=Jt("lock-keyhole",J1);const ey=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],vv=Jt("mail",ey);const ty=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ny=Jt("menu",ty);const iy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],_v=Jt("shield-alert",iy);const ay=[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",key:"wuwx1p"}]],Sv=Jt("sigma",ay);const sy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ih=Jt("sparkles",sy);const ry=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Jh=Jt("trophy",ry);const oy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],yv=Jt("users",oy);const ly=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],el=Jt("x",ly),_f=[{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Competitions",href:"#competition"},{label:"Alumni",href:"#alumni"},{label:"Leadership",href:"#leadership"},{label:"Events",href:"#events"},{label:"Contact",href:"#contact"}];function cy(){const[s,e]=De.useState(!1),[i,r]=De.useState(!1),[l,c]=De.useState(!1),[f,h]=De.useState(!1),[m,p]=De.useState("#about");De.useEffect(()=>{const E=()=>{r(window.scrollY>20)};return E(),window.addEventListener("scroll",E,{passive:!0}),()=>window.removeEventListener("scroll",E)},[]),De.useEffect(()=>{const E=()=>{const C=document.getElementById("canvas-section");if(!C){c(window.scrollY>window.innerHeight*.75);return}const M=C.offsetTop+C.offsetHeight;c(window.scrollY>M-90)};return E(),window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",E),()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",E)}},[]),De.useEffect(()=>{const E=_f.map(w=>w.href.replace("#",""));let C=!1;const M=()=>{const w=E.map(I=>document.getElementById(I)).filter(I=>!!I);if(!w.length)return;const U=window.innerHeight*.35;let O=w[0].id,V=Number.POSITIVE_INFINITY;w.forEach(I=>{const z=I.getBoundingClientRect(),B=z.top<=U&&z.bottom>=U?0:Math.abs(z.top-U);B<V&&(V=B,O=I.id)}),p(`#${O}`)},b=()=>{C||(C=!0,window.requestAnimationFrame(()=>{M(),C=!1}))};return M(),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",b),()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[]),De.useEffect(()=>{l||h(!1)},[l]),De.useEffect(()=>{if(!s)return;const E=document.body.style.overflow;document.body.style.overflow="hidden";const C=M=>{M.key==="Escape"&&e(!1)};return window.addEventListener("keydown",C),()=>{document.body.style.overflow=E,window.removeEventListener("keydown",C)}},[s]);const S=(E,C)=>{E.preventDefault();const M=document.querySelector(C);M&&M.scrollIntoView({behavior:"smooth"}),p(C),e(!1)},_=l&&!s&&!f,x=!_,y=_?"w-auto px-2.5 py-2":"w-[calc(100vw-2.5rem)] px-2.5 py-2 md:w-[min(96vw,1200px)] md:px-2";return g.jsxs(g.Fragment,{children:[g.jsx("nav",{"code-path":"src/components/Navigation.tsx:148:7",className:`fixed top-5 left-5 z-[220] border nav-shell transition-all duration-300 ${y} ${i?"bg-primary-dark/95 border-white/25 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.45)]":"bg-primary-dark/78 border-white/15 backdrop-blur-md"}`,children:g.jsxs("div",{"code-path":"src/components/Navigation.tsx:155:9",className:"flex items-center gap-3 justify-between",children:[g.jsxs("a",{"code-path":"src/components/Navigation.tsx:156:11",href:"#",className:`inline-flex items-center gap-3 hover:text-accent-green transition-colors ${_?"px-2 py-2":"px-3 py-2"}`,onClick:E=>{E.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:[g.jsx("span",{"code-path":"src/components/Navigation.tsx:164:13",className:"font-display font-bold text-primary-light tracking-tight text-xl",children:"FQE"}),g.jsx("span",{"code-path":"src/components/Navigation.tsx:165:13",className:`micro-label text-accent-green ${_?"hidden":"hidden lg:inline"}`,children:"Financial Quants & Engineers"})]}),g.jsx("div",{"code-path":"src/components/Navigation.tsx:168:11",className:`hidden md:flex items-center gap-2 transition-opacity duration-200 ${x?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none w-0 overflow-hidden"}`,children:_f.map(E=>g.jsx("a",{"code-path":"src/components/Navigation.tsx:170:15",href:E.href,onClick:C=>S(C,E.href),className:`nav-link nav-link-pill ${m===E.href?"is-active":""}`,children:E.label},E.label))}),l&&g.jsx("button",{"code-path":"src/components/Navigation.tsx:182:13",type:"button",onClick:()=>h(E=>!E),className:"hidden md:inline-flex items-center justify-center p-2 text-primary-light hover:text-accent-green transition-colors","aria-label":_?"Expand navigation":"Collapse navigation",title:_?"Expand navigation":"Collapse navigation",children:_?g.jsx(k1,{"code-path":"src/components/Navigation.tsx:189:31",size:16}):g.jsx(H1,{"code-path":"src/components/Navigation.tsx:189:60",size:16})}),g.jsx("button",{"code-path":"src/components/Navigation.tsx:193:11",className:"md:hidden p-2.5 text-primary-light border border-white/20 bg-primary-dark/80 backdrop-blur-md hover:border-accent-green/50 transition-colors","aria-expanded":s,"aria-label":s?"Close menu":"Open menu",onClick:()=>e(!s),children:s?g.jsx(el,{"code-path":"src/components/Navigation.tsx:199:33",size:22}):g.jsx(ny,{"code-path":"src/components/Navigation.tsx:199:51",size:22})})]})}),g.jsx("div",{"code-path":"src/components/Navigation.tsx:204:7",className:`fixed inset-0 z-[150] bg-primary-dark/85 backdrop-blur-md md:hidden transition-all duration-300 ${s?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>e(!1),children:g.jsxs("div",{"code-path":"src/components/Navigation.tsx:210:9",className:`ml-auto h-full w-[84vw] max-w-[360px] border-l border-white/15 bg-secondary-dark/95 p-8 pt-24 transition-transform duration-300 ${s?"translate-x-0":"translate-x-full"}`,onClick:E=>E.stopPropagation(),children:[g.jsx("span",{"code-path":"src/components/Navigation.tsx:214:11",className:"micro-label text-accent-green mb-6 block",children:"Navigation"}),g.jsx("div",{"code-path":"src/components/Navigation.tsx:215:11",className:"flex flex-col gap-2",children:_f.map(E=>g.jsx("a",{"code-path":"src/components/Navigation.tsx:217:15",href:E.href,onClick:C=>S(C,E.href),className:`font-display text-xl font-bold px-3 py-2 border transition-colors ${m===E.href?"text-accent-green border-accent-green/45 bg-accent-green/10":"text-primary-light border-white/10 hover:text-accent-green hover:border-accent-green/35"}`,children:E.label},E.label))}),g.jsx("p",{"code-path":"src/components/Navigation.tsx:231:11",className:"micro-label text-secondary-light mt-6",children:"FQE. Built by Students."})]})})]})}function uy(){const s=De.useRef(null),e=De.useRef(null),i=[{href:"https://github.com/BaruchFinancialQuantsEngineers-FQE/",label:"FQE GitHub",Icon:mv},{href:"https://www.linkedin.com/company/fqe-baruch/",label:"FQE LinkedIn",Icon:xv},{href:"https://www.instagram.com/baruchfqe/",label:"FQE Instagram",Icon:gv},{href:"mailto:baruchfqe@gmail.com",label:"Email FQE",Icon:vv}];return De.useEffect(()=>{const r=e.current,l=s.current;if(!r||!l)return;const c=r.getContext("2d");if(!c)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)"),h=()=>{const A=l.offsetWidth,B=l.offsetHeight,Y=Math.min(window.devicePixelRatio||1,2);r.width=Math.floor(A*Y),r.height=Math.floor(B*Y),r.style.width=`${A}px`,r.style.height=`${B}px`,c.setTransform(Y,0,0,Y,0,0)};h();const m="αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ∂∆∇∫∑∏∞≈≠≡≤≥√∝%01".split("");let p=window.innerWidth<768?12:10,S=l.offsetWidth,_=l.offsetHeight;c.font=`${p}px "IBM Plex Mono", monospace`;let x=Math.max(1,Math.floor(S/p)),y=[],E=0,C=0;const M=()=>{y=Array.from({length:x},()=>1)};M();const b=()=>{c.fillStyle="rgba(0, 0, 0, 0.12)",c.fillRect(0,0,S,_);for(let A=0;A<y.length;A+=1){const B=m[Math.floor(Math.random()*m.length)];c.fillStyle="#0f0",c.fillText(B,A*p,y[A]*p),y[A]+=1,y[A]*p>_&&Math.random()>.95&&(y[A]=0)}},w=()=>{E&&(window.cancelAnimationFrame(E),E=0)},U=A=>{if(document.hidden||f.matches){w();return}A-C>=42&&(b(),C=A),E=window.requestAnimationFrame(U)},O=()=>{if(f.matches){c.clearRect(0,0,S,_);return}E||(b(),C=0,E=window.requestAnimationFrame(U))},V=()=>{h(),S=l.offsetWidth,_=l.offsetHeight,p=window.innerWidth<768?12:10,c.font=`${p}px "IBM Plex Mono", monospace`,x=Math.max(1,Math.floor(S/p)),M()},I=()=>{document.hidden?w():O()},z=()=>{V(),f.matches?(w(),c.clearRect(0,0,S,_)):O()};return O(),window.addEventListener("resize",V),window.addEventListener("visibilitychange",I),f.addEventListener("change",z),()=>{w(),window.removeEventListener("resize",V),window.removeEventListener("visibilitychange",I),f.removeEventListener("change",z)}},[]),g.jsxs("section",{"code-path":"src/sections/HeroSection.tsx:159:5",id:"canvas-section",ref:s,className:"min-h-screen bg-black relative flex items-center",children:[g.jsx("canvas",{"code-path":"src/sections/HeroSection.tsx:164:7",ref:e,className:"absolute inset-0 z-10 w-full h-full pointer-events-none","aria-hidden":"true"}),g.jsx("div",{"code-path":"src/sections/HeroSection.tsx:169:7",className:"vignette"}),g.jsx("div",{"code-path":"src/sections/HeroSection.tsx:171:7",className:"relative z-20 w-full px-[6vw] py-[12vh] flex justify-center",children:g.jsxs("div",{"code-path":"src/sections/HeroSection.tsx:172:9",className:"flex flex-col justify-center items-center text-center max-w-2xl",children:[g.jsx("span",{"code-path":"src/sections/HeroSection.tsx:174:11",className:"micro-label text-secondary-light mb-6",children:"Baruch's Premier Quantitative Club"}),g.jsxs("h1",{"code-path":"src/sections/HeroSection.tsx:179:11",className:"headline-xl text-primary-light mb-8",style:{fontSize:"clamp(2.5rem, 5.5vw, 5rem)",lineHeight:1.04},children:[g.jsx("span",{"code-path":"src/sections/HeroSection.tsx:183:13",className:"block",children:"Financial"}),g.jsx("span",{"code-path":"src/sections/HeroSection.tsx:184:13",className:"block",children:"Quants &"}),g.jsx("span",{"code-path":"src/sections/HeroSection.tsx:185:13",className:"block",children:"Engineers"})]}),g.jsx("p",{"code-path":"src/sections/HeroSection.tsx:189:11",className:"body-text text-secondary-light mb-8 max-w-md mx-auto",style:{fontSize:"1.05rem"},children:"We develop Baruch undergraduates into the next generation of quants through interactive workshops, hands-on projects, and technical collaboration."}),g.jsxs("div",{"code-path":"src/sections/HeroSection.tsx:195:11",className:"flex flex-col gap-4 items-center",children:[g.jsxs("a",{"code-path":"src/sections/HeroSection.tsx:196:13",href:"#about",className:"cta-button w-fit",children:[g.jsx("span",{"code-path":"src/sections/HeroSection.tsx:197:15",children:"About"}),g.jsx(zi,{"code-path":"src/sections/HeroSection.tsx:198:15",size:16})]}),g.jsx("a",{"code-path":"src/sections/HeroSection.tsx:200:13",href:"#contact",className:"text-link",children:"Join Us"})]}),g.jsx("div",{"code-path":"src/sections/HeroSection.tsx:205:11",className:"mt-8 flex md:hidden items-center gap-4",children:i.map(({href:r,label:l,Icon:c})=>g.jsx("a",{"code-path":"src/sections/HeroSection.tsx:207:15",href:r,target:"_blank",rel:"noopener noreferrer","aria-label":l,className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(c,{"code-path":"src/sections/HeroSection.tsx:215:17",size:18,strokeWidth:1.5})},l))})]})}),g.jsx("div",{"code-path":"src/sections/HeroSection.tsx:223:7",className:"absolute right-[6vw] bottom-[6vh] z-20 hidden md:flex items-center gap-4",children:i.map(({href:r,label:l,Icon:c})=>g.jsx("a",{"code-path":"src/sections/HeroSection.tsx:225:11",href:r,target:"_blank",rel:"noopener noreferrer","aria-label":l,className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(c,{"code-path":"src/sections/HeroSection.tsx:233:13",size:18,strokeWidth:1.5})},l))})]})}const au="184",dy=0,ix=1,fy=2,jc=1,hy=2,Jo=3,Aa=0,Nn=1,hi=2,Fi=0,Hr=1,ax=2,sx=3,rx=4,py=5,zs=100,my=101,gy=102,xy=103,vy=104,_y=200,Sy=201,yy=202,by=203,ah=204,sh=205,My=206,Ey=207,Ty=208,Ay=209,Cy=210,wy=211,Ry=212,Ny=213,Dy=214,rh=0,Qc=1,oh=2,kr=3,lh=4,ch=5,uh=6,dh=7,bv=0,Uy=1,Ly=2,Qi=0,Mv=1,Ev=2,Tv=3,Av=4,Cv=5,wv=6,Rv=7,Nv=300,Vs=301,Vr=302,Sf=303,yf=304,su=306,fh=1e3,Ma=1001,hh=1002,Bn=1003,Py=1004,vc=1005,un=1006,bf=1007,Gs=1008,Vn=1009,Dv=1010,Uv=1011,tl=1012,$h=1013,Ji=1014,Ii=1015,Ca=1016,ep=1017,tp=1018,jr=1020,Lv=35902,Pv=35899,Ov=1021,Iv=1022,Bi=1023,wa=1026,fs=1027,Bv=1028,np=1029,js=1030,ip=1031,ap=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,ph=35840,mh=35841,gh=35842,xh=35843,vh=36196,_h=37492,Sh=37496,yh=37488,bh=37489,Jc=37490,Mh=37491,Eh=37808,Th=37809,Ah=37810,Ch=37811,wh=37812,Rh=37813,Nh=37814,Dh=37815,Uh=37816,Lh=37817,Ph=37818,Oh=37819,Ih=37820,Bh=37821,Fh=36492,zh=36494,Hh=36495,Gh=36283,kh=36284,$c=36285,Vh=36286,il=3200,ox=0,Oy=1,Zi="",mn="srgb",Xr="srgb-linear",eu="linear",jt="srgb",Tr=7680,lx=519,Iy=512,By=513,Fy=514,sp=515,zy=516,Hy=517,rp=518,Gy=519,cx=35044,jh="300 es",Ki=2e3,tu=2001;function ky(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vy(){const s=nu("canvas");return s.style.display="block",s}const ux={};function dx(...s){const e="THREE."+s.shift();console.log(e,...s)}function Fv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=Fv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Rt(...s){s=Fv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Xh(...s){const e=s.join(" ");e in ux||(ux[e]=!0,it(...s))}function jy(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Xy={[rh]:Qc,[oh]:uh,[lh]:dh,[kr]:ch,[Qc]:rh,[uh]:oh,[dh]:lh,[ch]:kr};class Na{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=Math.PI/180,Wh=180/Math.PI;function al(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function Ct(s,e,i){return Math.max(e,Math.min(i,s))}function Wy(s,e){return(s%e+e)%e}function Ef(s,e,i){return(1-i)*s+i*e}function Xo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $n(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const cp=class cp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cp.prototype.isVector2=!0;let gt=cp;class qr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],S=r[l+2],_=r[l+3],x=c[f+0],y=c[f+1],E=c[f+2],C=c[f+3];if(_!==C||m!==x||p!==y||S!==E){let M=m*x+p*y+S*E+_*C;M<0&&(x=-x,y=-y,E=-E,C=-C,M=-M);let b=1-h;if(M<.9995){const w=Math.acos(M),U=Math.sin(w);b=Math.sin(b*w)/U,h=Math.sin(h*w)/U,m=m*b+x*h,p=p*b+y*h,S=S*b+E*h,_=_*b+C*h}else{m=m*b+x*h,p=p*b+y*h,S=S*b+E*h,_=_*b+C*h;const w=1/Math.sqrt(m*m+p*p+S*S+_*_);m*=w,p*=w,S*=w,_*=w}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],S=r[l+3],_=c[f],x=c[f+1],y=c[f+2],E=c[f+3];return e[i]=h*E+S*_+m*y-p*x,e[i+1]=m*E+S*x+p*_-h*y,e[i+2]=p*E+S*y+h*x-m*_,e[i+3]=S*E-h*_-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),S=h(l/2),_=h(c/2),x=m(r/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*S*_+p*y*E,this._y=p*y*_-x*S*E,this._z=p*S*E+x*y*_,this._w=p*S*_-x*y*E;break;case"YXZ":this._x=x*S*_+p*y*E,this._y=p*y*_-x*S*E,this._z=p*S*E-x*y*_,this._w=p*S*_+x*y*E;break;case"ZXY":this._x=x*S*_-p*y*E,this._y=p*y*_+x*S*E,this._z=p*S*E+x*y*_,this._w=p*S*_-x*y*E;break;case"ZYX":this._x=x*S*_-p*y*E,this._y=p*y*_+x*S*E,this._z=p*S*E-x*y*_,this._w=p*S*_+x*y*E;break;case"YZX":this._x=x*S*_+p*y*E,this._y=p*y*_+x*S*E,this._z=p*S*E-x*y*_,this._w=p*S*_-x*y*E;break;case"XZY":this._x=x*S*_-p*y*E,this._y=p*y*_-x*S*E,this._z=p*S*E+x*y*_,this._w=p*S*_+x*y*E;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],S=i[6],_=i[10],x=r+h+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(S-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(r>h&&r>_){const y=2*Math.sqrt(1+r-h-_);this._w=(S-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-r-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+_-r-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,S=i._w;return this._x=r*S+f*h+l*p-c*m,this._y=l*S+f*m+c*h-r*p,this._z=c*S+f*p+r*m-l*h,this._w=f*S-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),S=Math.sin(p);m=Math.sin(m*p)/S,i=Math.sin(i*p)/S,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const up=class up{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(fx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(fx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),S=2*(h*i-c*l),_=2*(c*r-f*i);return this.x=i+m*p+f*_-h*S,this.y=r+m*S+h*p-c*_,this.z=l+m*_+c*S-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tf.copy(this).projectOnVector(e),this.sub(Tf)}reflect(e){return this.sub(Tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;let ce=up;const Tf=new ce,fx=new qr,dp=class dp{constructor(e,i,r,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=c,S[5]=m,S[6]=r,S[7]=f,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],S=r[4],_=r[7],x=r[2],y=r[5],E=r[8],C=l[0],M=l[3],b=l[6],w=l[1],U=l[4],O=l[7],V=l[2],I=l[5],z=l[8];return c[0]=f*C+h*w+m*V,c[3]=f*M+h*U+m*I,c[6]=f*b+h*O+m*z,c[1]=p*C+S*w+_*V,c[4]=p*M+S*U+_*I,c[7]=p*b+S*O+_*z,c[2]=x*C+y*w+E*V,c[5]=x*M+y*U+E*I,c[8]=x*b+y*O+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],S=e[8];return i*f*S-i*h*p-r*c*S+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],S=e[8],_=S*f-h*p,x=h*m-S*c,y=p*c-f*m,E=i*_+r*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(l*p-S*r)*C,e[2]=(h*r-l*f)*C,e[3]=x*C,e[4]=(S*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(f*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Af.makeScale(e,i)),this}rotate(e){return this.premultiply(Af.makeRotation(-e)),this}translate(e,i){return this.premultiply(Af.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let ot=dp;const Af=new ot,hx=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),px=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qy(){const s={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===jt&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===jt&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Zi?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xr]:{primaries:e,whitePoint:r,transfer:eu,toXYZ:hx,fromXYZ:px,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:hx,fromXYZ:px,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),s}const At=qy();function Ea(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ar;class Yy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ar===void 0&&(Ar=nu("canvas")),Ar.width=e.width,Ar.height=e.height;const l=Ar.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ar}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ea(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ea(i[r]/255)*255):i[r]=Ea(i[r]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zy=0;class op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Cf(l[f].image)):c.push(Cf(l[f]))}else c=Cf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Cf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let Ky=0;const wf=new ce;class Dn extends Na{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,r=Ma,l=Ma,c=un,f=Gs,h=Bi,m=Vn,p=Dn.DEFAULT_ANISOTROPY,S=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=al(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wf).x}get height(){return this.source.getSize(wf).y}get depth(){return this.source.getSize(wf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Nv;Dn.DEFAULT_ANISOTROPY=1;const fp=class fp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],S=m[4],_=m[8],x=m[1],y=m[5],E=m[9],C=m[2],M=m[6],b=m[10];if(Math.abs(S-x)<.01&&Math.abs(_-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(S+x)<.1&&Math.abs(_+C)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,O=(y+1)/2,V=(b+1)/2,I=(S+x)/4,z=(_+C)/4,A=(E+M)/4;return U>O&&U>V?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=I/r,c=z/r):O>V?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=I/l,c=A/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=z/c,l=A/c),this.set(r,l,c,i),this}let w=Math.sqrt((M-E)*(M-E)+(_-C)*(_-C)+(x-S)*(x-S));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(_-C)/w,this.z=(x-S)/w,this.w=Math.acos((p+y+b-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this.w=Ct(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this.w=Ct(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fp.prototype.isVector4=!0;let gn=fp;class Qy extends Na{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new gn(0,0,e,i),this.scissorTest=!1,this.viewport=new gn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Dn(l),f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new op(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Qy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class zv extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jy extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=class iu{constructor(e,i,r,l,c,f,h,m,p,S,_,x,y,E,C,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,S,_,x,y,E,C,M)}set(e,i,r,l,c,f,h,m,p,S,_,x,y,E,C,M){const b=this.elements;return b[0]=e,b[4]=i,b[8]=r,b[12]=l,b[1]=c,b[5]=f,b[9]=h,b[13]=m,b[2]=p,b[6]=S,b[10]=_,b[14]=x,b[3]=y,b[7]=E,b[11]=C,b[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new iu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Cr.setFromMatrixColumn(e,0).length(),c=1/Cr.setFromMatrixColumn(e,1).length(),f=1/Cr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*S,y=f*_,E=h*S,C=h*_;i[0]=m*S,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=x-C*p,i[9]=-h*m,i[2]=C-x*p,i[6]=E+y*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*S,y=m*_,E=p*S,C=p*_;i[0]=x+C*h,i[4]=E*h-y,i[8]=f*p,i[1]=f*_,i[5]=f*S,i[9]=-h,i[2]=y*h-E,i[6]=C+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*S,y=m*_,E=p*S,C=p*_;i[0]=x-C*h,i[4]=-f*_,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*S,i[9]=C-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*S,y=f*_,E=h*S,C=h*_;i[0]=m*S,i[4]=E*p-y,i[8]=x*p+C,i[1]=m*_,i[5]=C*p+x,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,y=f*p,E=h*m,C=h*p;i[0]=m*S,i[4]=C-x*_,i[8]=E*_+y,i[1]=_,i[5]=f*S,i[9]=-h*S,i[2]=-p*S,i[6]=y*_+E,i[10]=x-C*_}else if(e.order==="XZY"){const x=f*m,y=f*p,E=h*m,C=h*p;i[0]=m*S,i[4]=-_,i[8]=p*S,i[1]=x*_+C,i[5]=f*S,i[9]=y*_-E,i[2]=E*_-y,i[6]=h*S,i[10]=C*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose($y,e,eb)}lookAt(e,i,r){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),rs.crossVectors(r,di),rs.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),rs.crossVectors(r,di)),rs.normalize(),_c.crossVectors(di,rs),l[0]=rs.x,l[4]=_c.x,l[8]=di.x,l[1]=rs.y,l[5]=_c.y,l[9]=di.y,l[2]=rs.z,l[6]=_c.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],S=r[1],_=r[5],x=r[9],y=r[13],E=r[2],C=r[6],M=r[10],b=r[14],w=r[3],U=r[7],O=r[11],V=r[15],I=l[0],z=l[4],A=l[8],B=l[12],Y=l[1],H=l[5],q=l[9],ee=l[13],ae=l[2],G=l[6],D=l[10],F=l[14],$=l[3],de=l[7],ye=l[11],P=l[15];return c[0]=f*I+h*Y+m*ae+p*$,c[4]=f*z+h*H+m*G+p*de,c[8]=f*A+h*q+m*D+p*ye,c[12]=f*B+h*ee+m*F+p*P,c[1]=S*I+_*Y+x*ae+y*$,c[5]=S*z+_*H+x*G+y*de,c[9]=S*A+_*q+x*D+y*ye,c[13]=S*B+_*ee+x*F+y*P,c[2]=E*I+C*Y+M*ae+b*$,c[6]=E*z+C*H+M*G+b*de,c[10]=E*A+C*q+M*D+b*ye,c[14]=E*B+C*ee+M*F+b*P,c[3]=w*I+U*Y+O*ae+V*$,c[7]=w*z+U*H+O*G+V*de,c[11]=w*A+U*q+O*D+V*ye,c[15]=w*B+U*ee+O*F+V*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],S=e[2],_=e[6],x=e[10],y=e[14],E=e[3],C=e[7],M=e[11],b=e[15],w=m*y-p*x,U=h*y-p*_,O=h*x-m*_,V=f*y-p*S,I=f*x-m*S,z=f*_-h*S;return i*(C*w-M*U+b*O)-r*(E*w-M*V+b*I)+l*(E*U-C*V+b*z)-c*(E*O-C*I+M*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],S=e[8],_=e[9],x=e[10],y=e[11],E=e[12],C=e[13],M=e[14],b=e[15],w=i*h-r*f,U=i*m-l*f,O=i*p-c*f,V=r*m-l*h,I=r*p-c*h,z=l*p-c*m,A=S*C-_*E,B=S*M-x*E,Y=S*b-y*E,H=_*M-x*C,q=_*b-y*C,ee=x*b-y*M,ae=w*ee-U*q+O*H+V*Y-I*B+z*A;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ae;return e[0]=(h*ee-m*q+p*H)*G,e[1]=(l*q-r*ee-c*H)*G,e[2]=(C*z-M*I+b*V)*G,e[3]=(x*I-_*z-y*V)*G,e[4]=(m*Y-f*ee-p*B)*G,e[5]=(i*ee-l*Y+c*B)*G,e[6]=(M*O-E*z-b*U)*G,e[7]=(S*z-x*O+y*U)*G,e[8]=(f*q-h*Y+p*A)*G,e[9]=(r*Y-i*q-c*A)*G,e[10]=(E*I-C*O+b*w)*G,e[11]=(_*O-S*I-y*w)*G,e[12]=(h*B-f*H-m*A)*G,e[13]=(i*H-r*B+l*A)*G,e[14]=(C*U-E*V-M*w)*G,e[15]=(S*V-_*U+x*w)*G,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,S=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,S*h+r,S*m-l*f,0,p*m-l*h,S*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,S=f+f,_=h+h,x=c*p,y=c*S,E=c*_,C=f*S,M=f*_,b=h*_,w=m*p,U=m*S,O=m*_,V=r.x,I=r.y,z=r.z;return l[0]=(1-(C+b))*V,l[1]=(y+O)*V,l[2]=(E-U)*V,l[3]=0,l[4]=(y-O)*I,l[5]=(1-(x+b))*I,l[6]=(M+w)*I,l[7]=0,l[8]=(E+U)*z,l[9]=(M-w)*z,l[10]=(1-(x+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let f=Cr.set(l[0],l[1],l[2]).length();const h=Cr.set(l[4],l[5],l[6]).length(),m=Cr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ui.copy(this);const p=1/f,S=1/h,_=1/m;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=S,Ui.elements[5]*=S,Ui.elements[6]*=S,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,i.setFromRotationMatrix(Ui),r.x=f,r.y=h,r.z=m,this}makePerspective(e,i,r,l,c,f,h=Ki,m=!1){const p=this.elements,S=2*c/(i-e),_=2*c/(r-l),x=(i+e)/(i-e),y=(r+l)/(r-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(h===Ki)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(h===tu)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Ki,m=!1){const p=this.elements,S=2/(i-e),_=2/(r-l),x=-(i+e)/(i-e),y=-(r+l)/(r-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(h===Ki)E=-2/(f-c),C=-(f+c)/(f-c);else if(h===tu)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};iu.prototype.isMatrix4=!0;let Tn=iu;const Cr=new ce,Ui=new Tn,$y=new ce(0,0,0),eb=new ce(1,1,1),rs=new ce,_c=new ce,di=new ce,mx=new Tn,gx=new qr;class Xs{constructor(e=0,i=0,r=0,l=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],S=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-S,y),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return gx.setFromEuler(this),this.setFromQuaternion(gx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class Hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tb=0;const xx=new ce,wr=new qr,va=new Tn,Sc=new ce,Wo=new ce,nb=new ce,ib=new qr,vx=new ce(1,0,0),_x=new ce(0,1,0),Sx=new ce(0,0,1),yx={type:"added"},ab={type:"removed"},Rr={type:"childadded",child:null},Rf={type:"childremoved",child:null};class pi extends Na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pi.DEFAULT_UP.clone();const e=new ce,i=new Xs,r=new qr,l=new ce(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Tn},normalMatrix:{value:new ot}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(vx,e)}rotateY(e){return this.rotateOnAxis(_x,e)}rotateZ(e){return this.rotateOnAxis(Sx,e)}translateOnAxis(e,i){return xx.copy(e).applyQuaternion(this.quaternion),this.position.add(xx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(vx,e)}translateY(e){return this.translateOnAxis(_x,e)}translateZ(e){return this.translateOnAxis(Sx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Sc.copy(e):Sc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Wo,Sc,this.up):va.lookAt(Sc,Wo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(va),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yx),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ab),Rf.child=e,this.dispatchEvent(Rf),Rf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),va.multiply(e.parent.matrixWorld)),e.applyMatrix4(va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yx),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,ib,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),S=f(e.images),_=f(e.shapes),x=f(e.skeletons),y=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const S=h[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}pi.DEFAULT_UP=new ce(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yc extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sb={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),b=this._getHandJoint(p,C);M!==null&&(b.matrix.fromArray(M.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=M.radius),b.visible=M!==null}const S=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=S.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new yc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Df(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Bt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=At.workingColorSpace){if(e=Wy(e,1),i=Ct(i,0,1),r=Ct(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Df(f,c,e+1/3),this.g=Df(f,c,e),this.b=Df(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=mn){function r(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mn){const r=Gv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return At.workingToColorSpace(kn.copy(this),e),Math.round(Ct(kn.r*255,0,255))*65536+Math.round(Ct(kn.g*255,0,255))*256+Math.round(Ct(kn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(kn.copy(this),i);const r=kn.r,l=kn.g,c=kn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const S=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=S<=.5?_/(f+h):_/(2-f-h),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(kn.copy(this),i),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=mn){At.workingToColorSpace(kn.copy(this),e);const i=kn.r,r=kn.g,l=kn.b;return e!==mn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(os),this.setHSL(os.h+e,os.s+i,os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(os),e.getHSL(bc);const r=Ef(os.h,bc.h,i),l=Ef(os.s,bc.s,i),c=Ef(os.l,bc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Bt;Bt.NAMES=Gv;class qh extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xs,this.environmentIntensity=1,this.environmentRotation=new Xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Li=new ce,_a=new ce,Uf=new ce,Sa=new ce,Nr=new ce,Dr=new ce,bx=new ce,Lf=new ce,Pf=new ce,Of=new ce,If=new gn,Bf=new gn,Ff=new gn;class Oi{constructor(e=new ce,i=new ce,r=new ce){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Li.subVectors(e,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Li.subVectors(l,i),_a.subVectors(r,i),Uf.subVectors(e,i);const f=Li.dot(Li),h=Li.dot(_a),m=Li.dot(Uf),p=_a.dot(_a),S=_a.dot(Uf),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-h*S)*x,E=(f*S-h*m)*x;return c.set(1-y-E,E,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(f,Sa.y),m.addScaledVector(h,Sa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return If.setScalar(0),Bf.setScalar(0),Ff.setScalar(0),If.fromBufferAttribute(e,i),Bf.fromBufferAttribute(e,r),Ff.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(If,c.x),f.addScaledVector(Bf,c.y),f.addScaledVector(Ff,c.z),f}static isFrontFacing(e,i,r,l){return Li.subVectors(r,i),_a.subVectors(e,i),Li.cross(_a).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Li.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Nr.subVectors(l,r),Dr.subVectors(c,r),Lf.subVectors(e,r);const m=Nr.dot(Lf),p=Dr.dot(Lf);if(m<=0&&p<=0)return i.copy(r);Pf.subVectors(e,l);const S=Nr.dot(Pf),_=Dr.dot(Pf);if(S>=0&&_<=S)return i.copy(l);const x=m*_-S*p;if(x<=0&&m>=0&&S<=0)return f=m/(m-S),i.copy(r).addScaledVector(Nr,f);Of.subVectors(e,c);const y=Nr.dot(Of),E=Dr.dot(Of);if(E>=0&&y<=E)return i.copy(c);const C=y*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Dr,h);const M=S*E-y*_;if(M<=0&&_-S>=0&&y-E>=0)return bx.subVectors(c,l),h=(_-S)/(_-S+(y-E)),i.copy(l).addScaledVector(bx,h);const b=1/(M+C+x);return f=C*b,h=x*b,i.copy(r).addScaledVector(Nr,f).addScaledVector(Dr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sl{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Ec.subVectors(this.max,qo),Ur.subVectors(e.a,qo),Lr.subVectors(e.b,qo),Pr.subVectors(e.c,qo),ls.subVectors(Lr,Ur),cs.subVectors(Pr,Lr),Ps.subVectors(Ur,Pr);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Ps.z,Ps.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Ps.z,0,-Ps.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Ps.y,Ps.x,0];return!zf(i,Ur,Lr,Pr,Ec)||(i=[1,0,0,0,1,0,0,0,1],!zf(i,Ur,Lr,Pr,Ec))?!1:(Tc.crossVectors(ls,cs),i=[Tc.x,Tc.y,Tc.z],zf(i,Ur,Lr,Pr,Ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ya=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Pi=new ce,Mc=new sl,Ur=new ce,Lr=new ce,Pr=new ce,ls=new ce,cs=new ce,Ps=new ce,qo=new ce,Ec=new ce,Tc=new ce,Os=new ce;function zf(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Os.fromArray(s,c);const h=l.x*Math.abs(Os.x)+l.y*Math.abs(Os.y)+l.z*Math.abs(Os.z),m=e.dot(Os),p=i.dot(Os),S=r.dot(Os);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>h)return!1}return!0}const bn=new ce,Ac=new gt;let rb=0;class Ai extends Na{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=cx,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(e),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Xo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class kv extends Ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Vv extends Ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ta extends Ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}const ob=new sl,Yo=new ce,Hf=new ce;class lp{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ob.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Yo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Hf)),this.expandByPoint(Yo.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lb=0;const Ei=new Tn,Gf=new pi,Or=new ce,fi=new sl,Zo=new sl,Rn=new ce;class $i extends Na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ky(e)?Vv:kv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,r){return Ei.makeTranslation(e,i,r),this.applyMatrix4(Ei),this}scale(e,i,r){return Ei.makeScale(e,i,r),this.applyMatrix4(Ei),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ta(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Zo.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(fi.min,Zo.min),fi.expandByPoint(Rn),Rn.addVectors(fi.max,Zo.max),fi.expandByPoint(Rn)):(fi.expandByPoint(Zo.min),fi.expandByPoint(Zo.max))}fi.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)Rn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,S=h.count;p<S;p++)Rn.fromBufferAttribute(h,p),m&&(Or.fromBufferAttribute(e,p),Rn.add(Or)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let A=0;A<r.count;A++)h[A]=new ce,m[A]=new ce;const p=new ce,S=new ce,_=new ce,x=new gt,y=new gt,E=new gt,C=new ce,M=new ce;function b(A,B,Y){p.fromBufferAttribute(r,A),S.fromBufferAttribute(r,B),_.fromBufferAttribute(r,Y),x.fromBufferAttribute(c,A),y.fromBufferAttribute(c,B),E.fromBufferAttribute(c,Y),S.sub(p),_.sub(p),y.sub(x),E.sub(x);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(C.copy(S).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(H),M.copy(_).multiplyScalar(y.x).addScaledVector(S,-E.x).multiplyScalar(H),h[A].add(C),h[B].add(C),h[Y].add(C),m[A].add(M),m[B].add(M),m[Y].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let A=0,B=w.length;A<B;++A){const Y=w[A],H=Y.start,q=Y.count;for(let ee=H,ae=H+q;ee<ae;ee+=3)b(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const U=new ce,O=new ce,V=new ce,I=new ce;function z(A){V.fromBufferAttribute(l,A),I.copy(V);const B=h[A];U.copy(B),U.sub(V.multiplyScalar(V.dot(B))).normalize(),O.crossVectors(I,B);const H=O.dot(m[A])<0?-1:1;f.setXYZW(A,U.x,U.y,U.z,H)}for(let A=0,B=w.length;A<B;++A){const Y=w[A],H=Y.start,q=Y.count;for(let ee=H,ae=H+q;ee<ae;ee+=3)z(e.getX(ee+0)),z(e.getX(ee+1)),z(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new ce,c=new ce,f=new ce,h=new ce,m=new ce,p=new ce,S=new ce,_=new ce;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,M),S.subVectors(f,c),_.subVectors(l,c),S.cross(_),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),h.add(S),m.add(S),p.add(S),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),S.subVectors(f,c),_.subVectors(l,c),S.cross(_),r.setXYZ(x+0,S.x,S.y,S.z),r.setXYZ(x+1,S.x,S.y,S.z),r.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(h,m){const p=h.array,S=h.itemSize,_=h.normalized,x=new p.constructor(m.length*S);let y=0,E=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?y=m[C]*h.data.stride+h.offset:y=m[C]*S;for(let b=0;b<S;b++)x[E++]=p[y++]}return new Ai(x,S,_)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let S=0,_=p.length;S<_;S++){const x=p[S],y=e(x,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];S.push(y.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=e.morphAttributes;for(const p in c){const S=[],_=c[p];for(let x=0,y=_.length;x<y;x++)S.push(_[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,S=f.length;p<S;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cb=0;class Yr extends Na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Hr,this.side=Aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=sh,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(r.blending=this.blending),this.side!==Aa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ah&&(r.blendSrc=this.blendSrc),this.blendDst!==sh&&(r.blendDst=this.blendDst),this.blendEquation!==zs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ba=new ce,kf=new ce,Cc=new ce,us=new ce,Vf=new ce,wc=new ce,jf=new ce;class ub{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){kf.copy(e).add(i).multiplyScalar(.5),Cc.copy(i).sub(e).normalize(),us.copy(this.origin).sub(kf);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Cc),h=us.dot(this.direction),m=-us.dot(Cc),p=us.lengthSq(),S=Math.abs(1-f*f);let _,x,y,E;if(S>0)if(_=f*m-h,x=f*h-m,E=c*S,_>=0)if(x>=-E)if(x<=E){const C=1/S;_*=C,x*=C,y=_*(_+f*x+2*h)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(kf).addScaledVector(Cc,x),y}intersectSphere(e,i){ba.subVectors(e.center,this.origin);const r=ba.dot(this.direction),l=ba.dot(ba)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),S>=0?(c=(e.min.y-x.y)*S,f=(e.max.y-x.y)*S):(c=(e.max.y-x.y)*S,f=(e.min.y-x.y)*S),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ba)!==null}intersectTriangle(e,i,r,l,c){Vf.subVectors(i,e),wc.subVectors(r,e),jf.crossVectors(Vf,wc);let f=this.direction.dot(jf),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;us.subVectors(this.origin,e);const m=h*this.direction.dot(wc.crossVectors(us,wc));if(m<0)return null;const p=h*this.direction.dot(Vf.cross(us));if(p<0||m+p>f)return null;const S=-h*us.dot(jf);return S<0?null:this.at(S/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jv extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xs,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mx=new Tn,Is=new ub,Rc=new lp,Ex=new ce,Nc=new ce,Dc=new ce,Uc=new ce,Xf=new ce,Lc=new ce,Tx=new ce,Pc=new ce;class Hi extends pi{constructor(e=new $i,i=new jv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Lc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=h[m],_=c[m];S!==0&&(Xf.fromBufferAttribute(_,e),f?Lc.addScaledVector(Xf,S):Lc.addScaledVector(Xf.sub(i),S))}i.add(Lc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(c),Is.copy(e.ray).recast(e.near),!(Rc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Rc,Ex)===null||Is.origin.distanceToSquared(Ex)>(e.far-e.near)**2))&&(Mx.copy(c).invert(),Is.copy(e.ray).applyMatrix4(Mx),!(r.boundingBox!==null&&Is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Is)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,C=x.length;E<C;E++){const M=x[E],b=f[M.materialIndex],w=Math.max(M.start,y.start),U=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let O=w,V=U;O<V;O+=3){const I=h.getX(O),z=h.getX(O+1),A=h.getX(O+2);l=Oc(this,b,e,r,p,S,_,I,z,A),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let M=E,b=C;M<b;M+=3){const w=h.getX(M),U=h.getX(M+1),O=h.getX(M+2);l=Oc(this,f,e,r,p,S,_,w,U,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=x.length;E<C;E++){const M=x[E],b=f[M.materialIndex],w=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let O=w,V=U;O<V;O+=3){const I=O,z=O+1,A=O+2;l=Oc(this,b,e,r,p,S,_,I,z,A),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=E,b=C;M<b;M+=3){const w=M,U=M+1,O=M+2;l=Oc(this,f,e,r,p,S,_,w,U,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function db(s,e,i,r,l,c,f,h){let m;if(e.side===Nn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===Aa,h),m===null)return null;Pc.copy(h),Pc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:s}}function Oc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Nc),s.getVertexPosition(m,Dc),s.getVertexPosition(p,Uc);const S=db(s,e,i,r,Nc,Dc,Uc,Tx);if(S){const _=new ce;Oi.getBarycoord(Tx,Nc,Dc,Uc,_),l&&(S.uv=Oi.getInterpolatedAttribute(l,h,m,p,_,new gt)),c&&(S.uv1=Oi.getInterpolatedAttribute(c,h,m,p,_,new gt)),f&&(S.normal=Oi.getInterpolatedAttribute(f,h,m,p,_,new ce),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new ce,materialIndex:0};Oi.getNormal(Nc,Dc,Uc,x.normal),S.face=x,S.barycoord=_}return S}class fb extends Dn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=Bn,S=Bn,_,x){super(null,f,h,m,p,S,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wf=new ce,hb=new ce,pb=new ot;class Fs{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Wf.subVectors(r,i).cross(hb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Wf),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||pb.getNormalMatrix(e),l=this.coplanarPoint(Wf).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new lp,mb=new gt(.5,.5),Ic=new ce;class Xv{constructor(e=new Fs,i=new Fs,r=new Fs,l=new Fs,c=new Fs,f=new Fs){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ki,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],S=c[4],_=c[5],x=c[6],y=c[7],E=c[8],C=c[9],M=c[10],b=c[11],w=c[12],U=c[13],O=c[14],V=c[15];if(l[0].setComponents(p-f,y-S,b-E,V-w).normalize(),l[1].setComponents(p+f,y+S,b+E,V+w).normalize(),l[2].setComponents(p+h,y+_,b+C,V+U).normalize(),l[3].setComponents(p-h,y-_,b-C,V-U).normalize(),r)l[4].setComponents(m,x,M,O).normalize(),l[5].setComponents(p-m,y-x,b-M,V-O).normalize();else if(l[4].setComponents(p-m,y-x,b-M,V-O).normalize(),i===Ki)l[5].setComponents(p+m,y+x,b+M,V+O).normalize();else if(i===tu)l[5].setComponents(m,x,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);const i=mb.distanceTo(e.center);return Bs.radius=.7071067811865476+i,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ic.x=l.normal.x>0?e.max.x:e.min.x,Ic.y=l.normal.y>0?e.max.y:e.min.y,Ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wv extends Dn{constructor(e=[],i=Vs,r,l,c,f,h,m,p,S){super(e,i,r,l,c,f,h,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ws extends Dn{constructor(e,i,r=Ji,l,c,f,h=Bn,m=Bn,p,S=wa,_=1){if(S!==wa&&S!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,f,h,m,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gb extends Ws{constructor(e,i=Ji,r=Vs,l,c,f=Bn,h=Bn,m,p=wa){const S={width:e,height:e,depth:1},_=[S,S,S,S,S,S];super(e,e,i,r,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qv extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rl extends $i{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],S=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ta(p,3)),this.setAttribute("normal",new Ta(S,3)),this.setAttribute("uv",new Ta(_,2));function E(C,M,b,w,U,O,V,I,z,A,B){const Y=O/z,H=V/A,q=O/2,ee=V/2,ae=I/2,G=z+1,D=A+1;let F=0,$=0;const de=new ce;for(let ye=0;ye<D;ye++){const P=ye*H-ee;for(let Z=0;Z<G;Z++){const ge=Z*Y-q;de[C]=ge*w,de[M]=P*U,de[b]=ae,p.push(de.x,de.y,de.z),de[C]=0,de[M]=0,de[b]=I>0?1:-1,S.push(de.x,de.y,de.z),_.push(Z/z),_.push(1-ye/A),F+=1}}for(let ye=0;ye<A;ye++)for(let P=0;P<z;P++){const Z=x+P+G*ye,ge=x+P+G*(ye+1),Me=x+(P+1)+G*(ye+1),Ae=x+(P+1)+G*ye;m.push(Z,ge,Ae),m.push(ge,Me,Ae),$+=6}h.addGroup(y,$,B),y+=$,x+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ol extends $i{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,S=m+1,_=e/h,x=i/m,y=[],E=[],C=[],M=[];for(let b=0;b<S;b++){const w=b*x-f;for(let U=0;U<p;U++){const O=U*_-c;E.push(O,-w,0),C.push(0,0,1),M.push(U/h),M.push(1-b/m)}}for(let b=0;b<m;b++)for(let w=0;w<h;w++){const U=w+p*b,O=w+p*(b+1),V=w+1+p*(b+1),I=w+1+p*b;y.push(U,O,I),y.push(O,V,I)}this.setIndex(y),this.setAttribute("position",new Ta(E,3)),this.setAttribute("normal",new Ta(C,3)),this.setAttribute("uv",new Ta(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.widthSegments,e.heightSegments)}}function Wr(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(Ax(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(Ax(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Xn(s){const e={};for(let i=0;i<s.length;i++){const r=Wr(s[i]);for(const l in r)e[l]=r[l]}return e}function Ax(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Yv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const vb={clone:Wr,merge:Xn};var _b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_b,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class yb extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bb extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mb extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bc=new ce,Fc=new qr,Wi=new ce;class Zv extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bc,Fc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Fc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Bc,Fc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Fc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new ce,Cx=new gt,wx=new gt;class Ti extends Zv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Wh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wh*2*Math.atan(Math.tan(Mf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,i){return this.getViewBounds(e,Cx,wx),i.subVectors(wx,Cx)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Mf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ru extends Zv{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=S*this.view.offsetY,m=h-S*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ir=-90,Br=1;class Eb extends pi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(Ir,Br,e,i);l.layers=this.layers,this.add(l);const c=new Ti(Ir,Br,e,i);c.layers=this.layers,this.add(c);const f=new Ti(Ir,Br,e,i);f.layers=this.layers,this.add(f);const h=new Ti(Ir,Br,e,i);h.layers=this.layers,this.add(h);const m=new Ti(Ir,Br,e,i);m.layers=this.layers,this.add(m);const p=new Ti(Ir,Br,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===tu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,S]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(_,x,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Tb extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pn{constructor(e){this.value=e}clone(){return new pn(this.value.clone===void 0?this.value:this.value.clone())}}class Ab{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const hp=class hp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};hp.prototype.isMatrix2=!0;let Rx=hp;function Nx(s,e,i,r){const l=Cb(r);switch(i){case Ov:return s*e;case Bv:return s*e/l.components*l.byteLength;case np:return s*e/l.components*l.byteLength;case js:return s*e*2/l.components*l.byteLength;case ip:return s*e*2/l.components*l.byteLength;case Iv:return s*e*3/l.components*l.byteLength;case Bi:return s*e*4/l.components*l.byteLength;case ap:return s*e*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mh:case xh:return Math.max(s,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(s,8)*Math.max(e,8)/2;case vh:case _h:case yh:case bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sh:case Jc:case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fh:case zh:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gh:case kh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case $c:case Vh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Cb(s){switch(s){case Vn:case Dv:return{byteLength:1,components:1};case tl:case Uv:case Ca:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case Ji:case $h:case Ii:return{byteLength:4,components:1};case Lv:case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:au}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=au);function Kv(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function wb(s){const e=new WeakMap;function i(h,m){const p=h.array,S=h.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,S),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const S=m.array,_=m.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,S);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],C=_[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,_[x]=C)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const C=_[y];s.bufferSubData(p,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ob=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$b=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",rM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Rb,alphahash_pars_fragment:Nb,alphamap_fragment:Db,alphamap_pars_fragment:Ub,alphatest_fragment:Lb,alphatest_pars_fragment:Pb,aomap_fragment:Ob,aomap_pars_fragment:Ib,batching_pars_vertex:Bb,batching_vertex:Fb,begin_vertex:zb,beginnormal_vertex:Hb,bsdfs:Gb,iridescence_fragment:kb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:jb,clipping_planes_pars_fragment:Xb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:qb,color_fragment:Yb,color_pars_fragment:Zb,color_pars_vertex:Kb,color_vertex:Qb,common:Jb,cube_uv_reflection_fragment:$b,defaultnormal_vertex:eM,displacementmap_pars_vertex:tM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:aM,colorspace_fragment:sM,colorspace_pars_fragment:rM,envmap_fragment:oM,envmap_common_pars_fragment:lM,envmap_pars_fragment:cM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:yM,envmap_vertex:dM,fog_vertex:fM,fog_pars_vertex:hM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:gM,lightmap_pars_fragment:xM,lights_lambert_fragment:vM,lights_lambert_pars_fragment:_M,lights_pars_begin:SM,lights_toon_fragment:bM,lights_toon_pars_fragment:MM,lights_phong_fragment:EM,lights_phong_pars_fragment:TM,lights_physical_fragment:AM,lights_physical_pars_fragment:CM,lights_fragment_begin:wM,lights_fragment_maps:RM,lights_fragment_end:NM,lightprobes_pars_fragment:DM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:LM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:OM,map_fragment:IM,map_pars_fragment:BM,map_particle_fragment:FM,map_particle_pars_fragment:zM,metalnessmap_fragment:HM,metalnessmap_pars_fragment:GM,morphinstance_vertex:kM,morphcolor_vertex:VM,morphnormal_vertex:jM,morphtarget_pars_vertex:XM,morphtarget_vertex:WM,normal_fragment_begin:qM,normal_fragment_maps:YM,normal_pars_fragment:ZM,normal_pars_vertex:KM,normal_vertex:QM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:$M,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:tE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:aE,premultiplied_alpha_fragment:sE,project_vertex:rE,dithering_fragment:oE,dithering_pars_fragment:lE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:fE,shadowmap_vertex:hE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:xE,skinnormal_vertex:vE,specularmap_fragment:_E,specularmap_pars_fragment:SE,tonemapping_fragment:yE,tonemapping_pars_fragment:bE,transmission_fragment:ME,transmission_pars_fragment:EE,uv_pars_fragment:TE,uv_pars_vertex:AE,uv_vertex:CE,worldpos_vertex:wE,background_vert:RE,background_frag:NE,backgroundCube_vert:DE,backgroundCube_frag:UE,cube_vert:LE,cube_frag:PE,depth_vert:OE,depth_frag:IE,distance_vert:BE,distance_frag:FE,equirect_vert:zE,equirect_frag:HE,linedashed_vert:GE,linedashed_frag:kE,meshbasic_vert:VE,meshbasic_frag:jE,meshlambert_vert:XE,meshlambert_frag:WE,meshmatcap_vert:qE,meshmatcap_frag:YE,meshnormal_vert:ZE,meshnormal_frag:KE,meshphong_vert:QE,meshphong_frag:JE,meshphysical_vert:$E,meshphysical_frag:eT,meshtoon_vert:tT,meshtoon_frag:nT,points_vert:iT,points_frag:aT,shadow_vert:sT,shadow_frag:rT,sprite_vert:oT,sprite_frag:lT},Ge={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Yi={basic:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Xn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Xn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Xn([Ge.points,Ge.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Xn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Xn([Ge.common,Ge.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Xn([Ge.sprite,Ge.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Xn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Xn([Ge.lights,Ge.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Yi.physical={uniforms:Xn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const zc={r:0,b:0,g:0},cT=new Tn,Qv=new ot;Qv.set(-1,0,0,0,1,0,0,0,1);function uT(s,e,i,r,l,c){const f=new Bt(0);let h=l===!0?0:1,m,p,S=null,_=0,x=null;function y(w){let U=w.isScene===!0?w.background:null;if(U&&U.isTexture){const O=w.backgroundBlurriness>0;U=e.get(U,O)}return U}function E(w){let U=!1;const O=y(w);O===null?M(f,h):O&&O.isColor&&(M(O,1),U=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(w,U){const O=y(U);O&&(O.isCubeTexture||O.mapping===su)?(p===void 0&&(p=new Hi(new rl(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Wr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=O,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(cT.makeRotationFromEuler(U.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Qv),p.material.toneMapped=At.getTransfer(O.colorSpace)!==jt,(S!==O||_!==O.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,S=O,_=O.version,x=s.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new Hi(new ol(2,2),new ei({name:"BackgroundMaterial",uniforms:Wr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=At.getTransfer(O.colorSpace)!==jt,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(S!==O||_!==O.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,S=O,_=O.version,x=s.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,U){w.getRGB(zc,Yv(s)),i.buffers.color.setClear(zc.r,zc.g,zc.b,U,c)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,U=1){f.set(w),h=U,M(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,M(f,h)},render:E,addToRenderList:C,dispose:b}}function dT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function h(H,q,ee,ae,G){let D=!1;const F=_(H,ae,ee,q);c!==F&&(c=F,p(c.object)),D=y(H,ae,ee,G),D&&E(H,ae,ee,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(D||f)&&(f=!1,O(H,q,ee,ae),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function m(){return s.createVertexArray()}function p(H){return s.bindVertexArray(H)}function S(H){return s.deleteVertexArray(H)}function _(H,q,ee,ae){const G=ae.wireframe===!0;let D=r[q.id];D===void 0&&(D={},r[q.id]=D);const F=H.isInstancedMesh===!0?H.id:0;let $=D[F];$===void 0&&($={},D[F]=$);let de=$[ee.id];de===void 0&&(de={},$[ee.id]=de);let ye=de[G];return ye===void 0&&(ye=x(m()),de[G]=ye),ye}function x(H){const q=[],ee=[],ae=[];for(let G=0;G<i;G++)q[G]=0,ee[G]=0,ae[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ee,attributeDivisors:ae,object:H,attributes:{},index:null}}function y(H,q,ee,ae){const G=c.attributes,D=q.attributes;let F=0;const $=ee.getAttributes();for(const de in $)if($[de].location>=0){const P=G[de];let Z=D[de];if(Z===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(Z=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(Z=H.instanceColor)),P===void 0||P.attribute!==Z||Z&&P.data!==Z.data)return!0;F++}return c.attributesNum!==F||c.index!==ae}function E(H,q,ee,ae){const G={},D=q.attributes;let F=0;const $=ee.getAttributes();for(const de in $)if($[de].location>=0){let P=D[de];P===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const Z={};Z.attribute=P,P&&P.data&&(Z.data=P.data),G[de]=Z,F++}c.attributes=G,c.attributesNum=F,c.index=ae}function C(){const H=c.newAttributes;for(let q=0,ee=H.length;q<ee;q++)H[q]=0}function M(H){b(H,0)}function b(H,q){const ee=c.newAttributes,ae=c.enabledAttributes,G=c.attributeDivisors;ee[H]=1,ae[H]===0&&(s.enableVertexAttribArray(H),ae[H]=1),G[H]!==q&&(s.vertexAttribDivisor(H,q),G[H]=q)}function w(){const H=c.newAttributes,q=c.enabledAttributes;for(let ee=0,ae=q.length;ee<ae;ee++)q[ee]!==H[ee]&&(s.disableVertexAttribArray(ee),q[ee]=0)}function U(H,q,ee,ae,G,D,F){F===!0?s.vertexAttribIPointer(H,q,ee,G,D):s.vertexAttribPointer(H,q,ee,ae,G,D)}function O(H,q,ee,ae){C();const G=ae.attributes,D=ee.getAttributes(),F=q.defaultAttributeValues;for(const $ in D){const de=D[$];if(de.location>=0){let ye=G[$];if(ye===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(ye=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(ye=H.instanceColor)),ye!==void 0){const P=ye.normalized,Z=ye.itemSize,ge=e.get(ye);if(ge===void 0)continue;const Me=ge.buffer,Ae=ge.type,te=ge.bytesPerElement,be=Ae===s.INT||Ae===s.UNSIGNED_INT||ye.gpuType===$h;if(ye.isInterleavedBufferAttribute){const xe=ye.data,Oe=xe.stride,Je=ye.offset;if(xe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<de.locationSize;Qe++)b(de.location+Qe,xe.meshPerAttribute);H.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Qe=0;Qe<de.locationSize;Qe++)M(de.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Qe=0;Qe<de.locationSize;Qe++)U(de.location+Qe,Z/de.locationSize,Ae,P,Oe*te,(Je+Z/de.locationSize*Qe)*te,be)}else{if(ye.isInstancedBufferAttribute){for(let xe=0;xe<de.locationSize;xe++)b(de.location+xe,ye.meshPerAttribute);H.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let xe=0;xe<de.locationSize;xe++)M(de.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let xe=0;xe<de.locationSize;xe++)U(de.location+xe,Z/de.locationSize,Ae,P,Z*te,Z/de.locationSize*xe*te,be)}}else if(F!==void 0){const P=F[$];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(de.location,P);break;case 3:s.vertexAttrib3fv(de.location,P);break;case 4:s.vertexAttrib4fv(de.location,P);break;default:s.vertexAttrib1fv(de.location,P)}}}}w()}function V(){B();for(const H in r){const q=r[H];for(const ee in q){const ae=q[ee];for(const G in ae){const D=ae[G];for(const F in D)S(D[F].object),delete D[F];delete ae[G]}}delete r[H]}}function I(H){if(r[H.id]===void 0)return;const q=r[H.id];for(const ee in q){const ae=q[ee];for(const G in ae){const D=ae[G];for(const F in D)S(D[F].object),delete D[F];delete ae[G]}}delete r[H.id]}function z(H){for(const q in r){const ee=r[q];for(const ae in ee){const G=ee[ae];if(G[H.id]===void 0)continue;const D=G[H.id];for(const F in D)S(D[F].object),delete D[F];delete G[H.id]}}}function A(H){for(const q in r){const ee=r[q],ae=H.isInstancedMesh===!0?H.id:0,G=ee[ae];if(G!==void 0){for(const D in G){const F=G[D];for(const $ in F)S(F[$].object),delete F[$];delete G[D]}delete ee[ae],Object.keys(ee).length===0&&delete r[q]}}}function B(){Y(),f=!0,c!==l&&(c=l,p(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:Y,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfObject:A,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:w}}function fT(s,e,i){let r;function l(m){r=m}function c(m,p){s.drawArrays(r,m,p),i.update(p,r,1)}function f(m,p,S){S!==0&&(s.drawArraysInstanced(r,m,p,S),i.update(p,r,S))}function h(m,p,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,S);let x=0;for(let y=0;y<S;y++)x+=p[y];i.update(x,r,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function hT(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Bi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const A=z===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Vn&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ii&&!A)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(it("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:O,maxSamples:V,samples:I}}function pT(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Fs,h=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||l;return l=x,r=_.length,y},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=S(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,C=_.clipIntersection,M=_.clipShadows,b=s.get(_);if(!l||E===null||E.length===0||c&&!M)c?S(null):p();else{const w=c?0:r,U=w*4;let O=b.clippingState||null;m.value=O,O=S(E,x,U,y);for(let V=0;V!==U;++V)O[V]=i[V];b.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(_,x,y,E){const C=_!==null?_.length:0;let M=null;if(C!==0){if(M=m.value,E!==!0||M===null){const b=y+C*4,w=x.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<b)&&(M=new Float32Array(b));for(let U=0,O=y;U!==C;++U,O+=4)f.copy(_[U]).applyMatrix4(w,h),f.normal.toArray(M,O),M[O+3]=f.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const hs=4,Dx=[.125,.215,.35,.446,.526,.582],Hs=20,mT=256,Ko=new ru,Ux=new Bt;let qf=null,Yf=0,Zf=0,Kf=!1;const gT=new ce;class Lx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=gT}=c;qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qf,Yf,Zf),this._renderer.xr.enabled=Kf,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vs||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ca,format:Bi,colorSpace:Xr,depthBuffer:!1},l=Px(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Px(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xT(c)),this._blurMaterial=_T(c,e,i),this._ggxMaterial=vT(c,e,i)}return l}_compileMaterial(e){const i=new Hi(new $i,e);this._renderer.compile(i,Ko)}_sceneToCubeUV(e,i,r,l,c){const m=new Ti(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Ux),_.toneMapping=Qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hi(new rl,new jv({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let b=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,b=!0):(M.color.copy(Ux),b=!0);for(let U=0;U<6;U++){const O=U%3;O===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[U],c.y,c.z)):O===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[U]));const V=this._cubeSize;Fr(l,O*V,U>2?V:0,V,V),_.setRenderTarget(l),b&&_.render(C,m),_.render(e,m)}_.toneMapping=y,_.autoClear=x,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Vs||e.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ox());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Fr(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Ko)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-S*S),x=0+p*1.25,y=_*x,{_lodMax:E}=this,C=this._sizeLods[r],M=3*C*(r>E-hs?r-E+hs:0),b=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-i,Fr(c,M,b,3*C,2*C),l.setRenderTarget(c),l.render(h,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Fr(e,M,b,3*C,2*C),l.setRenderTarget(e),l.render(h,Ko)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const S=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Hs-1),C=c/E,M=isFinite(c)?1+Math.floor(S*C):Hs;M>Hs&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hs}`);const b=[];let w=0;for(let z=0;z<Hs;++z){const A=z/C,B=Math.exp(-A*A/2);b.push(B),z===0?w+=B:z<M&&(w+=2*B)}for(let z=0;z<b.length;z++)b[z]=b[z]/w;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=b,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-r;const O=this._sizeLods[l],V=3*O*(l>U-hs?l-U+hs:0),I=4*(this._cubeSize-O);Fr(i,V,I,3*O,2*O),m.setRenderTarget(i),m.render(_,Ko)}}function xT(s){const e=[],i=[],r=[];let l=s;const c=s-hs+1+Dx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-hs?m=Dx[f-s+hs-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),S=-p,_=1+p,x=[S,S,_,S,_,_,S,S,_,_,S,_],y=6,E=6,C=3,M=2,b=1,w=new Float32Array(C*E*y),U=new Float32Array(M*E*y),O=new Float32Array(b*E*y);for(let I=0;I<y;I++){const z=I%3*2/3-1,A=I>2?0:-1,B=[z,A,0,z+2/3,A,0,z+2/3,A+1,0,z,A,0,z+2/3,A+1,0,z,A+1,0];w.set(B,C*E*I),U.set(x,M*E*I);const Y=[I,I,I,I,I,I];O.set(Y,b*E*I)}const V=new $i;V.setAttribute("position",new Ai(w,C)),V.setAttribute("uv",new Ai(U,M)),V.setAttribute("faceIndex",new Ai(O,b)),r.push(new Hi(V,null)),l>hs&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Px(s,e,i){const r=new Wn(s,e,i);return r.texture.mapping=su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fr(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function vT(s,e,i){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function _T(s,e,i){const r=new Float32Array(Hs),l=new ce(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ox(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ix(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jv extends Wn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new rl(5,5,5),c=new ei({name:"CubemapFromEquirect",uniforms:Wr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:Fi});c.uniforms.tEquirect.value=i;const f=new Hi(l,c),h=i.minFilter;return i.minFilter===Gs&&(i.minFilter=un),new Eb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}function ST(s){let e=new WeakMap,i=new WeakMap,r=null;function l(x,y=!1){return x==null?null:y?f(x):c(x)}function c(x){if(x&&x.isTexture){const y=x.mapping;if(y===Sf||y===yf)if(e.has(x)){const E=e.get(x).texture;return h(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const C=new Jv(E.height);return C.fromEquirectangularTexture(s,x),e.set(x,C),x.addEventListener("dispose",p),h(C.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const y=x.mapping,E=y===Sf||y===yf,C=y===Vs||y===Vr;if(E||C){let M=i.get(x);const b=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==b)return r===null&&(r=new Lx(s)),M=E?r.fromEquirectangular(x,M):r.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),M.texture;if(M!==void 0)return M.texture;{const w=x.image;return E&&w&&w.height>0||C&&w&&m(w)?(r===null&&(r=new Lx(s)),M=E?r.fromEquirectangular(x):r.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),x.addEventListener("dispose",S),M.texture):null}}}return x}function h(x,y){return y===Sf?x.mapping=Vs:y===yf&&(x.mapping=Vr),x}function m(x){let y=0;const E=6;for(let C=0;C<E;C++)x[C]!==void 0&&y++;return y===E}function p(x){const y=x.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function S(x){const y=x.target;y.removeEventListener("dispose",S);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function yT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Xh("WebGLRenderer: "+r+" extension not supported."),l}}}function bT(s,e,i,r){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(y!==null){const w=y.array;C=y.version;for(let U=0,O=w.length;U<O;U+=3){const V=w[U+0],I=w[U+1],z=w[U+2];x.push(V,I,I,z,z,V)}}else{const w=E.array;C=E.version;for(let U=0,O=w.length/3-1;U<O;U+=3){const V=U+0,I=U+1,z=U+2;x.push(V,I,I,z,z,V)}}const M=new(E.count>=65535?Vv:kv)(x,1);M.version=C;const b=c.get(_);b&&e.remove(b),c.set(_,M)}function S(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:S}}function MT(s,e,i){let r;function l(_){r=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,x){s.drawElements(r,x,c,_*f),i.update(x,r,1)}function p(_,x,y){y!==0&&(s.drawElementsInstanced(r,x,c,_*f,y),i.update(x,r,y))}function S(_,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,_,0,y);let C=0;for(let M=0;M<y;M++)C+=x[M];i.update(C,r,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=S}function ET(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Rt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function TT(s,e,i){const r=new WeakMap,l=new gn;function c(f,h,m){const p=f.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=S!==void 0?S.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let Y=function(){A.dispose(),r.delete(h),h.removeEventListener("dispose",Y)};var y=Y;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let O=0;E===!0&&(O=1),C===!0&&(O=2),M===!0&&(O=3);let V=h.attributes.position.count*O,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*I*4*_),A=new zv(z,V,I,_);A.type=Ii,A.needsUpdate=!0;const B=O*4;for(let H=0;H<_;H++){const q=b[H],ee=w[H],ae=U[H],G=V*I*4*H;for(let D=0;D<q.count;D++){const F=D*B;E===!0&&(l.fromBufferAttribute(q,D),z[G+F+0]=l.x,z[G+F+1]=l.y,z[G+F+2]=l.z,z[G+F+3]=0),C===!0&&(l.fromBufferAttribute(ee,D),z[G+F+4]=l.x,z[G+F+5]=l.y,z[G+F+6]=l.z,z[G+F+7]=0),M===!0&&(l.fromBufferAttribute(ae,D),z[G+F+8]=l.x,z[G+F+9]=l.y,z[G+F+10]=l.z,z[G+F+11]=ae.itemSize===4?l.w:1)}}x={count:_,texture:A,size:new gt(V,I)},r.set(h,x),h.addEventListener("dispose",Y)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const C=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function AT(s,e,i,r,l){let c=new WeakMap;function f(p){const S=l.render.frame,_=p.geometry,x=e.get(p,_);if(c.get(x)!==S&&(e.update(x),c.set(x,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==S&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),c.set(p,S))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==S&&(y.update(),c.set(y,S))}return x}function h(){c=new WeakMap}function m(p){const S=p.target;S.removeEventListener("dispose",m),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:f,dispose:h}}const CT={[Mv]:"LINEAR_TONE_MAPPING",[Ev]:"REINHARD_TONE_MAPPING",[Tv]:"CINEON_TONE_MAPPING",[Av]:"ACES_FILMIC_TONE_MAPPING",[wv]:"AGX_TONE_MAPPING",[Rv]:"NEUTRAL_TONE_MAPPING",[Cv]:"CUSTOM_TONE_MAPPING"};function wT(s,e,i,r,l){const c=new Wn(e,i,{type:s,depthBuffer:r,stencilBuffer:l,depthTexture:r?new Ws(e,i):void 0}),f=new Wn(e,i,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),h=new $i;h.setAttribute("position",new Ta([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ta([0,2,0,0,2,0],2));const m=new yb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Hi(h,m),S=new ru(-1,1,1,-1,0,1);let _=null,x=null,y=!1,E,C=null,M=[],b=!1;this.setSize=function(w,U){c.setSize(w,U),f.setSize(w,U);for(let O=0;O<M.length;O++){const V=M[O];V.setSize&&V.setSize(w,U)}},this.setEffects=function(w){M=w,b=M.length>0&&M[0].isRenderPass===!0;const U=c.width,O=c.height;for(let V=0;V<M.length;V++){const I=M[V];I.setSize&&I.setSize(U,O)}},this.begin=function(w,U){if(y||w.toneMapping===Qi&&M.length===0)return!1;if(C=U,U!==null){const O=U.width,V=U.height;(c.width!==O||c.height!==V)&&this.setSize(O,V)}return b===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Qi,!0},this.hasRenderPass=function(){return b},this.end=function(w,U){w.toneMapping=E,y=!0;let O=c,V=f;for(let I=0;I<M.length;I++){const z=M[I];if(z.enabled!==!1&&(z.render(w,V,O,U),z.needsSwap!==!1)){const A=O;O=V,V=A}}if(_!==w.outputColorSpace||x!==w.toneMapping){_=w.outputColorSpace,x=w.toneMapping,m.defines={},At.getTransfer(_)===jt&&(m.defines.SRGB_TRANSFER="");const I=CT[x];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(C),w.render(p,S),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const $v=new Dn,Yh=new Ws(1,1),e_=new zv,t_=new Jy,n_=new Wv,Bx=[],Fx=[],zx=new Float32Array(16),Hx=new Float32Array(9),Gx=new Float32Array(4);function Zr(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Bx[l];if(c===void 0&&(c=new Float32Array(l),Bx[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function An(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Cn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function lu(s,e){let i=Fx[e];i===void 0&&(i=new Int32Array(e),Fx[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function RT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function NT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;s.uniform2fv(this.addr,e),Cn(i,e)}}function DT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(An(i,e))return;s.uniform3fv(this.addr,e),Cn(i,e)}}function UT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;s.uniform4fv(this.addr,e),Cn(i,e)}}function LT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(An(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Cn(i,e)}else{if(An(i,r))return;Gx.set(r),s.uniformMatrix2fv(this.addr,!1,Gx),Cn(i,r)}}function PT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(An(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Cn(i,e)}else{if(An(i,r))return;Hx.set(r),s.uniformMatrix3fv(this.addr,!1,Hx),Cn(i,r)}}function OT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(An(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Cn(i,e)}else{if(An(i,r))return;zx.set(r),s.uniformMatrix4fv(this.addr,!1,zx),Cn(i,r)}}function IT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function BT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;s.uniform2iv(this.addr,e),Cn(i,e)}}function FT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;s.uniform3iv(this.addr,e),Cn(i,e)}}function zT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;s.uniform4iv(this.addr,e),Cn(i,e)}}function HT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function GT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;s.uniform2uiv(this.addr,e),Cn(i,e)}}function kT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;s.uniform3uiv(this.addr,e),Cn(i,e)}}function VT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;s.uniform4uiv(this.addr,e),Cn(i,e)}}function jT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Yh.compareFunction=i.isReversedDepthBuffer()?rp:sp,c=Yh):c=$v,i.setTexture2D(e||c,l)}function XT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||t_,l)}function WT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||n_,l)}function qT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||e_,l)}function YT(s){switch(s){case 5126:return RT;case 35664:return NT;case 35665:return DT;case 35666:return UT;case 35674:return LT;case 35675:return PT;case 35676:return OT;case 5124:case 35670:return IT;case 35667:case 35671:return BT;case 35668:case 35672:return FT;case 35669:case 35673:return zT;case 5125:return HT;case 36294:return GT;case 36295:return kT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}function ZT(s,e){s.uniform1fv(this.addr,e)}function KT(s,e){const i=Zr(e,this.size,2);s.uniform2fv(this.addr,i)}function QT(s,e){const i=Zr(e,this.size,3);s.uniform3fv(this.addr,i)}function JT(s,e){const i=Zr(e,this.size,4);s.uniform4fv(this.addr,i)}function $T(s,e){const i=Zr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function eA(s,e){const i=Zr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function tA(s,e){const i=Zr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function nA(s,e){s.uniform1iv(this.addr,e)}function iA(s,e){s.uniform2iv(this.addr,e)}function aA(s,e){s.uniform3iv(this.addr,e)}function sA(s,e){s.uniform4iv(this.addr,e)}function rA(s,e){s.uniform1uiv(this.addr,e)}function oA(s,e){s.uniform2uiv(this.addr,e)}function lA(s,e){s.uniform3uiv(this.addr,e)}function cA(s,e){s.uniform4uiv(this.addr,e)}function uA(s,e,i){const r=this.cache,l=e.length,c=lu(i,l);An(r,c)||(s.uniform1iv(this.addr,c),Cn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Yh:f=$v;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function dA(s,e,i){const r=this.cache,l=e.length,c=lu(i,l);An(r,c)||(s.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||t_,c[f])}function fA(s,e,i){const r=this.cache,l=e.length,c=lu(i,l);An(r,c)||(s.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||n_,c[f])}function hA(s,e,i){const r=this.cache,l=e.length,c=lu(i,l);An(r,c)||(s.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||e_,c[f])}function pA(s){switch(s){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return eA;case 35676:return tA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}class mA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=YT(i.type)}}class gA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pA(i.type)}}class xA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Qf=/(\w+)(\])?(\[|\.)?/g;function kx(s,e){s.seq.push(e),s.map[e.id]=e}function vA(s,e,i){const r=s.name,l=r.length;for(Qf.lastIndex=0;;){const c=Qf.exec(r),f=Qf.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){kx(i,p===void 0?new mA(h,s,e):new gA(h,s,e));break}else{let _=i.map[h];_===void 0&&(_=new xA(h),kx(i,_)),i=_}}}class Zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);vA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Vx(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const _A=37297;let SA=0;function yA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const jx=new ot;function bA(s){At._getMatrix(jx,At.workingColorSpace,s);const e=`mat3( ${jx.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(s)){case eu:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xx(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+yA(s.getShaderSource(e),h)}else return c}function MA(s,e){const i=bA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const EA={[Mv]:"Linear",[Ev]:"Reinhard",[Tv]:"Cineon",[Av]:"ACESFilmic",[wv]:"AgX",[Rv]:"Neutral",[Cv]:"Custom"};function TA(s,e){const i=EA[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new ce;function AA(){At.getLuminanceCoefficients(Hc);const s=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function wA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function RA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function $o(s){return s!==""}function Wx(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qx(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(s){return s.replace(NA,UA)}const DA=new Map;function UA(s,e){let i=pt[e];if(i===void 0){const r=DA.get(e);if(r!==void 0)i=pt[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zh(i)}const LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yx(s){return s.replace(LA,PA)}function PA(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Zx(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const OA={[jc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function IA(s){return OA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BA={[Vs]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE_UV"};function FA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":BA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const zA={[Vr]:"ENVMAP_MODE_REFRACTION"};function HA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GA={[bv]:"ENVMAP_BLENDING_MULTIPLY",[Uy]:"ENVMAP_BLENDING_MIX",[Ly]:"ENVMAP_BLENDING_ADD"};function kA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":GA[s.combine]||"ENVMAP_BLENDING_NONE"}function VA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function jA(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=IA(i),p=FA(i),S=HA(i),_=kA(i),x=VA(i),y=CA(i),E=wA(c),C=l.createProgram();let M,b,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),M.length>0&&(M+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),b.length>0&&(b+=`
`)):(M=[Zx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),b=[Zx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Qi?TA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,MA("linearToOutputTexel",i.outputColorSpace),AA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=Zh(f),f=Wx(f,i),f=qx(f,i),h=Zh(h),h=Wx(h,i),h=qx(h,i),f=Yx(f),h=Yx(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,b=["#define varying in",i.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const U=w+M+f,O=w+b+h,V=Vx(l,l.VERTEX_SHADER,U),I=Vx(l,l.FRAGMENT_SHADER,O);l.attachShader(C,V),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(H){if(s.debug.checkShaderErrors){const q=l.getProgramInfoLog(C)||"",ee=l.getShaderInfoLog(V)||"",ae=l.getShaderInfoLog(I)||"",G=q.trim(),D=ee.trim(),F=ae.trim();let $=!0,de=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,V,I);else{const ye=Xx(l,V,"vertex"),P=Xx(l,I,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+G+`
`+ye+`
`+P)}else G!==""?it("WebGLProgram: Program Info Log:",G):(D===""||F==="")&&(de=!1);de&&(H.diagnostics={runnable:$,programLog:G,vertexShader:{log:D,prefix:M},fragmentShader:{log:F,prefix:b}})}l.deleteShader(V),l.deleteShader(I),A=new Zc(l,C),B=RA(l,C)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let B;this.getAttributes=function(){return B===void 0&&z(this),B};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(C,_A)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=I,this}let XA=0;class WA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new qA(e),i.set(e,r)),r}}class qA{constructor(e){this.id=XA++,this.code=e,this.usedTimes=0}}function YA(s){return s===js||s===Jc||s===$c}function ZA(s,e,i,r,l,c){const f=new Hv,h=new WA,m=new Set,p=[],S=new Map,_=r.logarithmicDepthBuffer;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return m.add(A),A===0?"uv":`uv${A}`}function C(A,B,Y,H,q,ee){const ae=H.fog,G=q.geometry,D=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,F=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,$=e.get(A.envMap||D,F),de=$&&$.mapping===su?$.image.height:null,ye=y[A.type];A.precision!==null&&(x=r.getMaxPrecision(A.precision),x!==A.precision&&it("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const P=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Z=P!==void 0?P.length:0;let ge=0;G.morphAttributes.position!==void 0&&(ge=1),G.morphAttributes.normal!==void 0&&(ge=2),G.morphAttributes.color!==void 0&&(ge=3);let Me,Ae,te,be;if(ye){const nt=Yi[ye];Me=nt.vertexShader,Ae=nt.fragmentShader}else Me=A.vertexShader,Ae=A.fragmentShader,h.update(A),te=h.getVertexShaderID(A),be=h.getFragmentShaderID(A);const xe=s.getRenderTarget(),Oe=s.state.buffers.depth.getReversed(),Je=q.isInstancedMesh===!0,Qe=q.isBatchedMesh===!0,Ft=!!A.map,dt=!!A.matcap,ft=!!$,wt=!!A.aoMap,Ve=!!A.lightMap,lt=!!A.bumpMap,yt=!!A.normalMap,Xt=!!A.displacementMap,W=!!A.emissiveMap,$t=!!A.metalnessMap,mt=!!A.roughnessMap,Wt=A.anisotropy>0,we=A.clearcoat>0,nn=A.dispersion>0,L=A.iridescence>0,T=A.sheen>0,J=A.transmission>0,_e=Wt&&!!A.anisotropyMap,Te=we&&!!A.clearcoatMap,Re=we&&!!A.clearcoatNormalMap,Pe=we&&!!A.clearcoatRoughnessMap,fe=L&&!!A.iridescenceMap,he=L&&!!A.iridescenceThicknessMap,Ie=T&&!!A.sheenColorMap,Be=T&&!!A.sheenRoughnessMap,Ue=!!A.specularMap,Ne=!!A.specularColorMap,at=!!A.specularIntensityMap,st=J&&!!A.transmissionMap,xt=J&&!!A.thicknessMap,j=!!A.gradientMap,Ce=!!A.alphaMap,me=A.alphaTest>0,He=!!A.alphaHash,Le=!!A.extensions;let Ee=Qi;A.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const Ye={shaderID:ye,shaderType:A.type,shaderName:A.name,vertexShader:Me,fragmentShader:Ae,defines:A.defines,customVertexShaderID:te,customFragmentShaderID:be,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Qe,batchingColor:Qe&&q._colorsTexture!==null,instancing:Je,instancingColor:Je&&q.instanceColor!==null,instancingMorph:Je&&q.morphTexture!==null,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ft,matcap:dt,envMap:ft,envMapMode:ft&&$.mapping,envMapCubeUVHeight:de,aoMap:wt,lightMap:Ve,bumpMap:lt,normalMap:yt,displacementMap:Xt,emissiveMap:W,normalMapObjectSpace:yt&&A.normalMapType===Oy,normalMapTangentSpace:yt&&A.normalMapType===ox,packedNormalMap:yt&&A.normalMapType===ox&&YA(A.normalMap.format),metalnessMap:$t,roughnessMap:mt,anisotropy:Wt,anisotropyMap:_e,clearcoat:we,clearcoatMap:Te,clearcoatNormalMap:Re,clearcoatRoughnessMap:Pe,dispersion:nn,iridescence:L,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:T,sheenColorMap:Ie,sheenRoughnessMap:Be,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:at,transmission:J,transmissionMap:st,thicknessMap:xt,gradientMap:j,opaque:A.transparent===!1&&A.blending===Hr&&A.alphaToCoverage===!1,alphaMap:Ce,alphaTest:me,alphaHash:He,combine:A.combine,mapUv:Ft&&E(A.map.channel),aoMapUv:wt&&E(A.aoMap.channel),lightMapUv:Ve&&E(A.lightMap.channel),bumpMapUv:lt&&E(A.bumpMap.channel),normalMapUv:yt&&E(A.normalMap.channel),displacementMapUv:Xt&&E(A.displacementMap.channel),emissiveMapUv:W&&E(A.emissiveMap.channel),metalnessMapUv:$t&&E(A.metalnessMap.channel),roughnessMapUv:mt&&E(A.roughnessMap.channel),anisotropyMapUv:_e&&E(A.anisotropyMap.channel),clearcoatMapUv:Te&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:he&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(A.sheenRoughnessMap.channel),specularMapUv:Ue&&E(A.specularMap.channel),specularColorMapUv:Ne&&E(A.specularColorMap.channel),specularIntensityMapUv:at&&E(A.specularIntensityMap.channel),transmissionMapUv:st&&E(A.transmissionMap.channel),thicknessMapUv:xt&&E(A.thicknessMap.channel),alphaMapUv:Ce&&E(A.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(yt||Wt),vertexNormals:!!G.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&(Ft||Ce),fog:!!ae,useFog:A.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||G.attributes.normal===void 0&&yt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Oe,skinning:q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ge,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ft&&A.map.isVideoTexture===!0&&At.getTransfer(A.map.colorSpace)===jt,decodeVideoTextureEmissive:W&&A.emissiveMap.isVideoTexture===!0&&At.getTransfer(A.emissiveMap.colorSpace)===jt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===hi,flipSided:A.side===Nn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Le&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&A.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function M(A){const B=[];if(A.shaderID?B.push(A.shaderID):(B.push(A.customVertexShaderID),B.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Y in A.defines)B.push(Y),B.push(A.defines[Y]);return A.isRawShaderMaterial===!1&&(b(B,A),w(B,A),B.push(s.outputColorSpace)),B.push(A.customProgramCacheKey),B.join()}function b(A,B){A.push(B.precision),A.push(B.outputColorSpace),A.push(B.envMapMode),A.push(B.envMapCubeUVHeight),A.push(B.mapUv),A.push(B.alphaMapUv),A.push(B.lightMapUv),A.push(B.aoMapUv),A.push(B.bumpMapUv),A.push(B.normalMapUv),A.push(B.displacementMapUv),A.push(B.emissiveMapUv),A.push(B.metalnessMapUv),A.push(B.roughnessMapUv),A.push(B.anisotropyMapUv),A.push(B.clearcoatMapUv),A.push(B.clearcoatNormalMapUv),A.push(B.clearcoatRoughnessMapUv),A.push(B.iridescenceMapUv),A.push(B.iridescenceThicknessMapUv),A.push(B.sheenColorMapUv),A.push(B.sheenRoughnessMapUv),A.push(B.specularMapUv),A.push(B.specularColorMapUv),A.push(B.specularIntensityMapUv),A.push(B.transmissionMapUv),A.push(B.thicknessMapUv),A.push(B.combine),A.push(B.fogExp2),A.push(B.sizeAttenuation),A.push(B.morphTargetsCount),A.push(B.morphAttributeCount),A.push(B.numDirLights),A.push(B.numPointLights),A.push(B.numSpotLights),A.push(B.numSpotLightMaps),A.push(B.numHemiLights),A.push(B.numRectAreaLights),A.push(B.numDirLightShadows),A.push(B.numPointLightShadows),A.push(B.numSpotLightShadows),A.push(B.numSpotLightShadowsWithMaps),A.push(B.numLightProbes),A.push(B.shadowMapType),A.push(B.toneMapping),A.push(B.numClippingPlanes),A.push(B.numClipIntersection),A.push(B.depthPacking)}function w(A,B){f.disableAll(),B.instancing&&f.enable(0),B.instancingColor&&f.enable(1),B.instancingMorph&&f.enable(2),B.matcap&&f.enable(3),B.envMap&&f.enable(4),B.normalMapObjectSpace&&f.enable(5),B.normalMapTangentSpace&&f.enable(6),B.clearcoat&&f.enable(7),B.iridescence&&f.enable(8),B.alphaTest&&f.enable(9),B.vertexColors&&f.enable(10),B.vertexAlphas&&f.enable(11),B.vertexUv1s&&f.enable(12),B.vertexUv2s&&f.enable(13),B.vertexUv3s&&f.enable(14),B.vertexTangents&&f.enable(15),B.anisotropy&&f.enable(16),B.alphaHash&&f.enable(17),B.batching&&f.enable(18),B.dispersion&&f.enable(19),B.batchingColor&&f.enable(20),B.gradientMap&&f.enable(21),B.packedNormalMap&&f.enable(22),B.vertexNormals&&f.enable(23),A.push(f.mask),f.disableAll(),B.fog&&f.enable(0),B.useFog&&f.enable(1),B.flatShading&&f.enable(2),B.logarithmicDepthBuffer&&f.enable(3),B.reversedDepthBuffer&&f.enable(4),B.skinning&&f.enable(5),B.morphTargets&&f.enable(6),B.morphNormals&&f.enable(7),B.morphColors&&f.enable(8),B.premultipliedAlpha&&f.enable(9),B.shadowMapEnabled&&f.enable(10),B.doubleSided&&f.enable(11),B.flipSided&&f.enable(12),B.useDepthPacking&&f.enable(13),B.dithering&&f.enable(14),B.transmission&&f.enable(15),B.sheen&&f.enable(16),B.opaque&&f.enable(17),B.pointsUvs&&f.enable(18),B.decodeVideoTexture&&f.enable(19),B.decodeVideoTextureEmissive&&f.enable(20),B.alphaToCoverage&&f.enable(21),B.numLightProbeGrids>0&&f.enable(22),A.push(f.mask)}function U(A){const B=y[A.type];let Y;if(B){const H=Yi[B];Y=vb.clone(H.uniforms)}else Y=A.uniforms;return Y}function O(A,B){let Y=S.get(B);return Y!==void 0?++Y.usedTimes:(Y=new jA(s,B,A,l),p.push(Y),S.set(B,Y)),Y}function V(A){if(--A.usedTimes===0){const B=p.indexOf(A);p[B]=p[p.length-1],p.pop(),S.delete(A.cacheKey),A.destroy()}}function I(A){h.remove(A)}function z(){h.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:U,acquireProgram:O,releaseProgram:V,releaseShaderCache:I,programs:p,dispose:z}}function KA(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function QA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Kx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qx(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(x){let y=0;return x.isInstancedMesh&&(y+=2),x.isSkinnedMesh&&(y+=1),y}function h(x,y,E,C,M,b){let w=s[e];return w===void 0?(w={id:x.id,object:x,geometry:y,material:E,materialVariant:f(x),groupOrder:C,renderOrder:x.renderOrder,z:M,group:b},s[e]=w):(w.id=x.id,w.object=x,w.geometry=y,w.material=E,w.materialVariant=f(x),w.groupOrder=C,w.renderOrder=x.renderOrder,w.z=M,w.group=b),e++,w}function m(x,y,E,C,M,b){const w=h(x,y,E,C,M,b);E.transmission>0?r.push(w):E.transparent===!0?l.push(w):i.push(w)}function p(x,y,E,C,M,b){const w=h(x,y,E,C,M,b);E.transmission>0?r.unshift(w):E.transparent===!0?l.unshift(w):i.unshift(w)}function S(x,y){i.length>1&&i.sort(x||QA),r.length>1&&r.sort(y||Kx),l.length>1&&l.sort(y||Kx)}function _(){for(let x=e,y=s.length;x<y;x++){const E=s[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:p,finish:_,sort:S}}function JA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Qx,s.set(r,[f])):l>=c.length?(f=new Qx,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function $A(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new Bt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[e.id]=i,i}}}function e2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let t2=0;function n2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function i2(s){const e=new $A,i=e2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ce);const l=new ce,c=new Tn,f=new Tn;function h(p){let S=0,_=0,x=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let y=0,E=0,C=0,M=0,b=0,w=0,U=0,O=0,V=0,I=0,z=0;p.sort(n2);for(let B=0,Y=p.length;B<Y;B++){const H=p[B],q=H.color,ee=H.intensity,ae=H.distance;let G=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===js?G=H.shadow.map.texture:G=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)S+=q.r*ee,_+=q.g*ee,x+=q.b*ee;else if(H.isLightProbe){for(let D=0;D<9;D++)r.probe[D].addScaledVector(H.sh.coefficients[D],ee);z++}else if(H.isDirectionalLight){const D=e.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,$=i.get(H);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.directionalShadow[y]=$,r.directionalShadowMap[y]=G,r.directionalShadowMatrix[y]=H.shadow.matrix,w++}r.directional[y]=D,y++}else if(H.isSpotLight){const D=e.get(H);D.position.setFromMatrixPosition(H.matrixWorld),D.color.copy(q).multiplyScalar(ee),D.distance=ae,D.coneCos=Math.cos(H.angle),D.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),D.decay=H.decay,r.spot[C]=D;const F=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,F.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[C]=F.matrix,H.castShadow){const $=i.get(H);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=G,O++}C++}else if(H.isRectAreaLight){const D=e.get(H);D.color.copy(q).multiplyScalar(ee),D.halfWidth.set(H.width*.5,0,0),D.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=D,M++}else if(H.isPointLight){const D=e.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),D.distance=H.distance,D.decay=H.decay,H.castShadow){const F=H.shadow,$=i.get(H);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,r.pointShadow[E]=$,r.pointShadowMap[E]=G,r.pointShadowMatrix[E]=H.shadow.matrix,U++}r.point[E]=D,E++}else if(H.isHemisphereLight){const D=e.get(H);D.skyColor.copy(H.color).multiplyScalar(ee),D.groundColor.copy(H.groundColor).multiplyScalar(ee),r.hemi[b]=D,b++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=_,r.ambient[2]=x;const A=r.hash;(A.directionalLength!==y||A.pointLength!==E||A.spotLength!==C||A.rectAreaLength!==M||A.hemiLength!==b||A.numDirectionalShadows!==w||A.numPointShadows!==U||A.numSpotShadows!==O||A.numSpotMaps!==V||A.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=E,r.hemi.length=b,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=O+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,A.directionalLength=y,A.pointLength=E,A.spotLength=C,A.rectAreaLength=M,A.hemiLength=b,A.numDirectionalShadows=w,A.numPointShadows=U,A.numSpotShadows=O,A.numSpotMaps=V,A.numLightProbes=z,r.version=t2++)}function m(p,S){let _=0,x=0,y=0,E=0,C=0;const M=S.matrixWorldInverse;for(let b=0,w=p.length;b<w;b++){const U=p[b];if(U.isDirectionalLight){const O=r.directional[_];O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),_++}else if(U.isSpotLight){const O=r.spot[y];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const O=r.rectArea[E];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const O=r.point[x];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const O=r.hemi[C];O.direction.setFromMatrixPosition(U.matrixWorld),O.direction.transformDirection(M),C++}}}return{setup:h,setupView:m,state:r}}function Jx(s){const e=new i2(s),i=[],r=[],l=[];function c(x){_.camera=x,i.length=0,r.length=0,l.length=0}function f(x){i.push(x)}function h(x){r.push(x)}function m(x){l.push(x)}function p(){e.setup(i)}function S(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:S,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function a2(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Jx(s),e.set(l,[h])):c>=f.length?(h=new Jx(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const s2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o2=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],l2=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],$x=new Tn,Qo=new ce,Jf=new ce;function c2(s,e,i){let r=new Xv;const l=new gt,c=new gt,f=new gn,h=new bb,m=new Mb,p={},S=i.maxTextureSize,_={[Aa]:Nn,[Nn]:Aa,[hi]:hi},x=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:s2,fragmentShader:r2}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new $i;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Hi(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let b=this.type;this.render=function(I,z,A){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===hy&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const B=s.getRenderTarget(),Y=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Fi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ee=b!==this.type;ee&&z.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(G=>G.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,G=I.length;ae<G;ae++){const D=I[ae],F=D.shadow;if(F===void 0){it("WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const $=F.getFrameExtents();l.multiply($),c.copy(F.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/$.x),l.x=c.x*$.x,F.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/$.y),l.y=c.y*$.y,F.mapSize.y=c.y));const de=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=de,F.map===null||ee===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Jo){if(D.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Wn(l.x,l.y,{format:js,type:Ca,minFilter:un,magFilter:un,generateMipmaps:!1}),F.map.texture.name=D.name+".shadowMap",F.map.depthTexture=new Ws(l.x,l.y,Ii),F.map.depthTexture.name=D.name+".shadowMapDepth",F.map.depthTexture.format=wa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bn,F.map.depthTexture.magFilter=Bn}else D.isPointLight?(F.map=new Jv(l.x),F.map.depthTexture=new gb(l.x,Ji)):(F.map=new Wn(l.x,l.y),F.map.depthTexture=new Ws(l.x,l.y,Ji)),F.map.depthTexture.name=D.name+".shadowMap",F.map.depthTexture.format=wa,this.type===jc?(F.map.depthTexture.compareFunction=de?rp:sp,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bn,F.map.depthTexture.magFilter=Bn);F.camera.updateProjectionMatrix()}const ye=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<ye;P++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,P),s.clear();else{P===0&&(s.setRenderTarget(F.map),s.clear());const Z=F.getViewport(P);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),q.viewport(f)}if(D.isPointLight){const Z=F.camera,ge=F.matrix,Me=D.distance||Z.far;Me!==Z.far&&(Z.far=Me,Z.updateProjectionMatrix()),Qo.setFromMatrixPosition(D.matrixWorld),Z.position.copy(Qo),Jf.copy(Z.position),Jf.add(o2[P]),Z.up.copy(l2[P]),Z.lookAt(Jf),Z.updateMatrixWorld(),ge.makeTranslation(-Qo.x,-Qo.y,-Qo.z),$x.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix($x,Z.coordinateSystem,Z.reversedDepth)}else F.updateMatrices(D);r=F.getFrustum(),O(z,A,F.camera,D,this.type)}F.isPointLightShadow!==!0&&this.type===Jo&&w(F,A),F.needsUpdate=!1}b=this.type,M.needsUpdate=!1,s.setRenderTarget(B,Y,H)};function w(I,z){const A=e.update(C);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Wn(l.x,l.y,{format:js,type:Ca})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(z,null,A,x,C,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(z,null,A,y,C,null)}function U(I,z,A,B){let Y=null;const H=A.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)Y=H;else if(Y=A.isPointLight===!0?m:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=Y.uuid,ee=z.uuid;let ae=p[q];ae===void 0&&(ae={},p[q]=ae);let G=ae[ee];G===void 0&&(G=Y.clone(),ae[ee]=G,z.addEventListener("dispose",V)),Y=G}if(Y.visible=z.visible,Y.wireframe=z.wireframe,B===Jo?Y.side=z.shadowSide!==null?z.shadowSide:z.side:Y.side=z.shadowSide!==null?z.shadowSide:_[z.side],Y.alphaMap=z.alphaMap,Y.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Y.map=z.map,Y.clipShadows=z.clipShadows,Y.clippingPlanes=z.clippingPlanes,Y.clipIntersection=z.clipIntersection,Y.displacementMap=z.displacementMap,Y.displacementScale=z.displacementScale,Y.displacementBias=z.displacementBias,Y.wireframeLinewidth=z.wireframeLinewidth,Y.linewidth=z.linewidth,A.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const q=s.properties.get(Y);q.light=A}return Y}function O(I,z,A,B,Y){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Y===Jo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,I.matrixWorld);const ee=e.update(I),ae=I.material;if(Array.isArray(ae)){const G=ee.groups;for(let D=0,F=G.length;D<F;D++){const $=G[D],de=ae[$.materialIndex];if(de&&de.visible){const ye=U(I,de,B,Y);I.onBeforeShadow(s,I,z,A,ee,ye,$),s.renderBufferDirect(A,null,ee,ye,I,$),I.onAfterShadow(s,I,z,A,ee,ye,$)}}}else if(ae.visible){const G=U(I,ae,B,Y);I.onBeforeShadow(s,I,z,A,ee,G,null),s.renderBufferDirect(A,null,ee,G,I,null),I.onAfterShadow(s,I,z,A,ee,G,null)}}const q=I.children;for(let ee=0,ae=q.length;ee<ae;ee++)O(q[ee],z,A,B,Y)}function V(I){I.target.removeEventListener("dispose",V);for(const A in p){const B=p[A],Y=I.target.uuid;Y in B&&(B[Y].dispose(),delete B[Y])}}}function u2(s,e){function i(){let j=!1;const Ce=new gn;let me=null;const He=new gn(0,0,0,0);return{setMask:function(Le){me!==Le&&!j&&(s.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){j=Le},setClear:function(Le,Ee,Ye,nt,on){on===!0&&(Le*=nt,Ee*=nt,Ye*=nt),Ce.set(Le,Ee,Ye,nt),He.equals(Ce)===!1&&(s.clearColor(Le,Ee,Ye,nt),He.copy(Ce))},reset:function(){j=!1,me=null,He.set(-1,0,0,0)}}}function r(){let j=!1,Ce=!1,me=null,He=null,Le=null;return{setReversed:function(Ee){if(Ce!==Ee){const Ye=e.get("EXT_clip_control");Ee?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ce=Ee;const nt=Le;Le=null,this.setClear(nt)}},getReversed:function(){return Ce},setTest:function(Ee){Ee?xe(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function(Ee){me!==Ee&&!j&&(s.depthMask(Ee),me=Ee)},setFunc:function(Ee){if(Ce&&(Ee=Xy[Ee]),He!==Ee){switch(Ee){case rh:s.depthFunc(s.NEVER);break;case Qc:s.depthFunc(s.ALWAYS);break;case oh:s.depthFunc(s.LESS);break;case kr:s.depthFunc(s.LEQUAL);break;case lh:s.depthFunc(s.EQUAL);break;case ch:s.depthFunc(s.GEQUAL);break;case uh:s.depthFunc(s.GREATER);break;case dh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}He=Ee}},setLocked:function(Ee){j=Ee},setClear:function(Ee){Le!==Ee&&(Le=Ee,Ce&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){j=!1,me=null,He=null,Le=null,Ce=!1}}}function l(){let j=!1,Ce=null,me=null,He=null,Le=null,Ee=null,Ye=null,nt=null,on=null;return{setTest:function(Pt){j||(Pt?xe(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(Pt){Ce!==Pt&&!j&&(s.stencilMask(Pt),Ce=Pt)},setFunc:function(Pt,mi,ti){(me!==Pt||He!==mi||Le!==ti)&&(s.stencilFunc(Pt,mi,ti),me=Pt,He=mi,Le=ti)},setOp:function(Pt,mi,ti){(Ee!==Pt||Ye!==mi||nt!==ti)&&(s.stencilOp(Pt,mi,ti),Ee=Pt,Ye=mi,nt=ti)},setLocked:function(Pt){j=Pt},setClear:function(Pt){on!==Pt&&(s.clearStencil(Pt),on=Pt)},reset:function(){j=!1,Ce=null,me=null,He=null,Le=null,Ee=null,Ye=null,nt=null,on=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let S={},_={},x={},y=new WeakMap,E=[],C=null,M=!1,b=null,w=null,U=null,O=null,V=null,I=null,z=null,A=new Bt(0,0,0),B=0,Y=!1,H=null,q=null,ee=null,ae=null,G=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const de=s.getParameter(s.VERSION);de.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(de)[1]),F=$>=1):de.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),F=$>=2);let ye=null,P={};const Z=s.getParameter(s.SCISSOR_BOX),ge=s.getParameter(s.VIEWPORT),Me=new gn().fromArray(Z),Ae=new gn().fromArray(ge);function te(j,Ce,me,He){const Le=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(j,Ee),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<me;Ye++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,He,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ee}const be={};be[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),xe(s.DEPTH_TEST),f.setFunc(kr),lt(!1),yt(ix),xe(s.CULL_FACE),wt(Fi);function xe(j){S[j]!==!0&&(s.enable(j),S[j]=!0)}function Oe(j){S[j]!==!1&&(s.disable(j),S[j]=!1)}function Je(j,Ce){return x[j]!==Ce?(s.bindFramebuffer(j,Ce),x[j]=Ce,j===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ce),j===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(j,Ce){let me=E,He=!1;if(j){me=y.get(Ce),me===void 0&&(me=[],y.set(Ce,me));const Le=j.textures;if(me.length!==Le.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Ye=Le.length;Ee<Ye;Ee++)me[Ee]=s.COLOR_ATTACHMENT0+Ee;me.length=Le.length,He=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,He=!0);He&&s.drawBuffers(me)}function Ft(j){return C!==j?(s.useProgram(j),C=j,!0):!1}const dt={[zs]:s.FUNC_ADD,[my]:s.FUNC_SUBTRACT,[gy]:s.FUNC_REVERSE_SUBTRACT};dt[xy]=s.MIN,dt[vy]=s.MAX;const ft={[_y]:s.ZERO,[Sy]:s.ONE,[yy]:s.SRC_COLOR,[ah]:s.SRC_ALPHA,[Cy]:s.SRC_ALPHA_SATURATE,[Ty]:s.DST_COLOR,[My]:s.DST_ALPHA,[by]:s.ONE_MINUS_SRC_COLOR,[sh]:s.ONE_MINUS_SRC_ALPHA,[Ay]:s.ONE_MINUS_DST_COLOR,[Ey]:s.ONE_MINUS_DST_ALPHA,[wy]:s.CONSTANT_COLOR,[Ry]:s.ONE_MINUS_CONSTANT_COLOR,[Ny]:s.CONSTANT_ALPHA,[Dy]:s.ONE_MINUS_CONSTANT_ALPHA};function wt(j,Ce,me,He,Le,Ee,Ye,nt,on,Pt){if(j===Fi){M===!0&&(Oe(s.BLEND),M=!1);return}if(M===!1&&(xe(s.BLEND),M=!0),j!==py){if(j!==b||Pt!==Y){if((w!==zs||V!==zs)&&(s.blendEquation(s.FUNC_ADD),w=zs,V=zs),Pt)switch(j){case Hr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ax:s.blendFunc(s.ONE,s.ONE);break;case sx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",j);break}else switch(j){case Hr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ax:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sx:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rx:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",j);break}U=null,O=null,I=null,z=null,A.set(0,0,0),B=0,b=j,Y=Pt}return}Le=Le||Ce,Ee=Ee||me,Ye=Ye||He,(Ce!==w||Le!==V)&&(s.blendEquationSeparate(dt[Ce],dt[Le]),w=Ce,V=Le),(me!==U||He!==O||Ee!==I||Ye!==z)&&(s.blendFuncSeparate(ft[me],ft[He],ft[Ee],ft[Ye]),U=me,O=He,I=Ee,z=Ye),(nt.equals(A)===!1||on!==B)&&(s.blendColor(nt.r,nt.g,nt.b,on),A.copy(nt),B=on),b=j,Y=!1}function Ve(j,Ce){j.side===hi?Oe(s.CULL_FACE):xe(s.CULL_FACE);let me=j.side===Nn;Ce&&(me=!me),lt(me),j.blending===Hr&&j.transparent===!1?wt(Fi):wt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const He=j.stencilWrite;h.setTest(He),He&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),W(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(j){H!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),H=j)}function yt(j){j!==dy?(xe(s.CULL_FACE),j!==q&&(j===ix?s.cullFace(s.BACK):j===fy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),q=j}function Xt(j){j!==ee&&(F&&s.lineWidth(j),ee=j)}function W(j,Ce,me){j?(xe(s.POLYGON_OFFSET_FILL),(ae!==Ce||G!==me)&&(ae=Ce,G=me,f.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,me))):Oe(s.POLYGON_OFFSET_FILL)}function $t(j){j?xe(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function mt(j){j===void 0&&(j=s.TEXTURE0+D-1),ye!==j&&(s.activeTexture(j),ye=j)}function Wt(j,Ce,me){me===void 0&&(ye===null?me=s.TEXTURE0+D-1:me=ye);let He=P[me];He===void 0&&(He={type:void 0,texture:void 0},P[me]=He),(He.type!==j||He.texture!==Ce)&&(ye!==me&&(s.activeTexture(me),ye=me),s.bindTexture(j,Ce||be[j]),He.type=j,He.texture=Ce)}function we(){const j=P[ye];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function nn(){try{s.compressedTexImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function T(){try{s.texSubImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function J(){try{s.texSubImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function _e(){try{s.compressedTexSubImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Re(){try{s.texStorage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Pe(){try{s.texStorage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function fe(){try{s.texImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function he(){try{s.texImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Ie(j){return _[j]!==void 0?_[j]:s.getParameter(j)}function Be(j,Ce){_[j]!==Ce&&(s.pixelStorei(j,Ce),_[j]=Ce)}function Ue(j){Me.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Me.copy(j))}function Ne(j){Ae.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Ae.copy(j))}function at(j,Ce){let me=p.get(Ce);me===void 0&&(me=new WeakMap,p.set(Ce,me));let He=me.get(j);He===void 0&&(He=s.getUniformBlockIndex(Ce,j.name),me.set(j,He))}function st(j,Ce){const He=p.get(Ce).get(j);m.get(Ce)!==He&&(s.uniformBlockBinding(Ce,He,j.__bindingPointIndex),m.set(Ce,He))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),S={},_={},ye=null,P={},x={},y=new WeakMap,E=[],C=null,M=!1,b=null,w=null,U=null,O=null,V=null,I=null,z=null,A=new Bt(0,0,0),B=0,Y=!1,H=null,q=null,ee=null,ae=null,G=null,Me.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:xe,disable:Oe,bindFramebuffer:Je,drawBuffers:Qe,useProgram:Ft,setBlending:wt,setMaterial:Ve,setFlipSided:lt,setCullFace:yt,setLineWidth:Xt,setPolygonOffset:W,setScissorTest:$t,activeTexture:mt,bindTexture:Wt,unbindTexture:we,compressedTexImage2D:nn,compressedTexImage3D:L,texImage2D:fe,texImage3D:he,pixelStorei:Be,getParameter:Ie,updateUBOMapping:at,uniformBlockBinding:st,texStorage2D:Re,texStorage3D:Pe,texSubImage2D:T,texSubImage3D:J,compressedTexSubImage2D:_e,compressedTexSubImage3D:Te,scissor:Ue,viewport:Ne,reset:xt}}function d2(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new gt,S=new WeakMap,_=new Set;let x;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(L,T){return E?new OffscreenCanvas(L,T):nu("canvas")}function M(L,T,J){let _e=1;const Te=nn(L);if((Te.width>J||Te.height>J)&&(_e=J/Math.max(Te.width,Te.height)),_e<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Re=Math.floor(_e*Te.width),Pe=Math.floor(_e*Te.height);x===void 0&&(x=C(Re,Pe));const fe=T?C(Re,Pe):x;return fe.width=Re,fe.height=Pe,fe.getContext("2d").drawImage(L,0,0,Re,Pe),it("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Re+"x"+Pe+")."),fe}else return"data"in L&&it("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),L;return L}function b(L){return L.generateMipmaps}function w(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(L,T,J,_e,Te,Re=!1){if(L!==null){if(s[L]!==void 0)return s[L];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Pe;_e&&(Pe=e.get("EXT_texture_norm16"),Pe||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=T;if(T===s.RED&&(J===s.FLOAT&&(fe=s.R32F),J===s.HALF_FLOAT&&(fe=s.R16F),J===s.UNSIGNED_BYTE&&(fe=s.R8),J===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),J===s.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.R8UI),J===s.UNSIGNED_SHORT&&(fe=s.R16UI),J===s.UNSIGNED_INT&&(fe=s.R32UI),J===s.BYTE&&(fe=s.R8I),J===s.SHORT&&(fe=s.R16I),J===s.INT&&(fe=s.R32I)),T===s.RG&&(J===s.FLOAT&&(fe=s.RG32F),J===s.HALF_FLOAT&&(fe=s.RG16F),J===s.UNSIGNED_BYTE&&(fe=s.RG8),J===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),J===s.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RG8UI),J===s.UNSIGNED_SHORT&&(fe=s.RG16UI),J===s.UNSIGNED_INT&&(fe=s.RG32UI),J===s.BYTE&&(fe=s.RG8I),J===s.SHORT&&(fe=s.RG16I),J===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),J===s.UNSIGNED_INT&&(fe=s.RGB32UI),J===s.BYTE&&(fe=s.RGB8I),J===s.SHORT&&(fe=s.RGB16I),J===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),J===s.UNSIGNED_INT&&(fe=s.RGBA32UI),J===s.BYTE&&(fe=s.RGBA8I),J===s.SHORT&&(fe=s.RGBA16I),J===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&(J===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),J===s.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),T===s.RGBA){const he=Re?eu:At.getTransfer(Te);J===s.FLOAT&&(fe=s.RGBA32F),J===s.HALF_FLOAT&&(fe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(fe=he===jt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),J===s.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function V(L,T){let J;return L?T===null||T===Ji||T===jr?J=s.DEPTH24_STENCIL8:T===Ii?J=s.DEPTH32F_STENCIL8:T===tl&&(J=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ji||T===jr?J=s.DEPTH_COMPONENT24:T===Ii?J=s.DEPTH_COMPONENT32F:T===tl&&(J=s.DEPTH_COMPONENT16),J}function I(L,T){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==Bn&&L.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function z(L){const T=L.target;T.removeEventListener("dispose",z),B(T),T.isVideoTexture&&S.delete(T),T.isHTMLTexture&&_.delete(T)}function A(L){const T=L.target;T.removeEventListener("dispose",A),H(T)}function B(L){const T=r.get(L);if(T.__webglInit===void 0)return;const J=L.source,_e=y.get(J);if(_e){const Te=_e[T.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&Y(L),Object.keys(_e).length===0&&y.delete(J)}r.remove(L)}function Y(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const J=L.source,_e=y.get(J);delete _e[T.__cacheKey],f.memory.textures--}function H(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let Te=0;Te<T.__webglFramebuffer[_e].length;Te++)s.deleteFramebuffer(T.__webglFramebuffer[_e][Te]);else s.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[_e]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let _e=0,Te=J.length;_e<Te;_e++){const Re=r.get(J[_e]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),f.memory.textures--),r.remove(J[_e])}r.remove(L)}let q=0;function ee(){q=0}function ae(){return q}function G(L){q=L}function D(){const L=q;return L>=l.maxTextures&&it("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),q+=1,L}function F(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function $(L,T){const J=r.get(L);if(L.isVideoTexture&&Wt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const _e=L.image;if(_e===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(J,L,T);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function de(L,T){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Oe(J,L,T);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function ye(L,T){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Oe(J,L,T);return}i.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function P(L,T){const J=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){Je(J,L,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}const Z={[fh]:s.REPEAT,[Ma]:s.CLAMP_TO_EDGE,[hh]:s.MIRRORED_REPEAT},ge={[Bn]:s.NEAREST,[Py]:s.NEAREST_MIPMAP_NEAREST,[vc]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[bf]:s.LINEAR_MIPMAP_NEAREST,[Gs]:s.LINEAR_MIPMAP_LINEAR},Me={[Iy]:s.NEVER,[Gy]:s.ALWAYS,[By]:s.LESS,[sp]:s.LEQUAL,[Fy]:s.EQUAL,[rp]:s.GEQUAL,[zy]:s.GREATER,[Hy]:s.NOTEQUAL};function Ae(L,T){if(T.type===Ii&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===bf||T.magFilter===vc||T.magFilter===Gs||T.minFilter===un||T.minFilter===bf||T.minFilter===vc||T.minFilter===Gs)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Z[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Z[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Z[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ge[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ge[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bn||T.minFilter!==vc&&T.minFilter!==Gs||T.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function te(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",z));const _e=T.source;let Te=y.get(_e);Te===void 0&&(Te={},y.set(_e,Te));const Re=F(T);if(Re!==L.__cacheKey){Te[Re]===void 0&&(Te[Re]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,J=!0),Te[Re].usedTimes++;const Pe=Te[L.__cacheKey];Pe!==void 0&&(Te[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&Y(T)),L.__cacheKey=Re,L.__webglTexture=Te[Re].texture}return J}function be(L,T,J){return Math.floor(Math.floor(L/J)/T)}function xe(L,T,J,_e){const Re=L.updateRanges;if(Re.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,J,_e,T.data);else{Re.sort((Be,Ue)=>Be.start-Ue.start);let Pe=0;for(let Be=1;Be<Re.length;Be++){const Ue=Re[Pe],Ne=Re[Be],at=Ue.start+Ue.count,st=be(Ne.start,T.width,4),xt=be(Ue.start,T.width,4);Ne.start<=at+1&&st===xt&&be(Ne.start+Ne.count-1,T.width,4)===st?Ue.count=Math.max(Ue.count,Ne.start+Ne.count-Ue.start):(++Pe,Re[Pe]=Ne)}Re.length=Pe+1;const fe=i.getParameter(s.UNPACK_ROW_LENGTH),he=i.getParameter(s.UNPACK_SKIP_PIXELS),Ie=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Be=0,Ue=Re.length;Be<Ue;Be++){const Ne=Re[Be],at=Math.floor(Ne.start/4),st=Math.ceil(Ne.count/4),xt=at%T.width,j=Math.floor(at/T.width),Ce=st,me=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,xt),i.pixelStorei(s.UNPACK_SKIP_ROWS,j),i.texSubImage2D(s.TEXTURE_2D,0,xt,j,Ce,me,J,_e,T.data)}L.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,fe),i.pixelStorei(s.UNPACK_SKIP_PIXELS,he),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Oe(L,T,J){let _e=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=s.TEXTURE_3D);const Te=te(L,T),Re=T.source;i.bindTexture(_e,L.__webglTexture,s.TEXTURE0+J);const Pe=r.get(Re);if(Re.version!==Pe.__version||Te===!0){if(i.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const me=At.getPrimaries(At.workingColorSpace),He=T.colorSpace===Zi?null:At.getPrimaries(T.colorSpace),Le=T.colorSpace===Zi||me===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let he=M(T.image,!1,l.maxTextureSize);he=we(T,he);const Ie=c.convert(T.format,T.colorSpace),Be=c.convert(T.type);let Ue=O(T.internalFormat,Ie,Be,T.normalized,T.colorSpace,T.isVideoTexture);Ae(_e,T);let Ne;const at=T.mipmaps,st=T.isVideoTexture!==!0,xt=Pe.__version===void 0||Te===!0,j=Re.dataReady,Ce=I(T,he);if(T.isDepthTexture)Ue=V(T.format===fs,T.type),xt&&(st?i.texStorage2D(s.TEXTURE_2D,1,Ue,he.width,he.height):i.texImage2D(s.TEXTURE_2D,0,Ue,he.width,he.height,0,Ie,Be,null));else if(T.isDataTexture)if(at.length>0){st&&xt&&i.texStorage2D(s.TEXTURE_2D,Ce,Ue,at[0].width,at[0].height);for(let me=0,He=at.length;me<He;me++)Ne=at[me],st?j&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Ie,Be,Ne.data):i.texImage2D(s.TEXTURE_2D,me,Ue,Ne.width,Ne.height,0,Ie,Be,Ne.data);T.generateMipmaps=!1}else st?(xt&&i.texStorage2D(s.TEXTURE_2D,Ce,Ue,he.width,he.height),j&&xe(T,he,Ie,Be)):i.texImage2D(s.TEXTURE_2D,0,Ue,he.width,he.height,0,Ie,Be,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&xt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ue,at[0].width,at[0].height,he.depth);for(let me=0,He=at.length;me<He;me++)if(Ne=at[me],T.format!==Bi)if(Ie!==null)if(st){if(j)if(T.layerUpdates.size>0){const Le=Nx(Ne.width,Ne.height,T.format,T.type);for(const Ee of T.layerUpdates){const Ye=Ne.data.subarray(Ee*Le/Ne.data.BYTES_PER_ELEMENT,(Ee+1)*Le/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Ee,Ne.width,Ne.height,1,Ie,Ye)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,he.depth,Ie,Ne.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ue,Ne.width,Ne.height,he.depth,0,Ne.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?j&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,he.depth,Ie,Be,Ne.data):i.texImage3D(s.TEXTURE_2D_ARRAY,me,Ue,Ne.width,Ne.height,he.depth,0,Ie,Be,Ne.data)}else{st&&xt&&i.texStorage2D(s.TEXTURE_2D,Ce,Ue,at[0].width,at[0].height);for(let me=0,He=at.length;me<He;me++)Ne=at[me],T.format!==Bi?Ie!==null?st?j&&i.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Ie,Ne.data):i.compressedTexImage2D(s.TEXTURE_2D,me,Ue,Ne.width,Ne.height,0,Ne.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?j&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Ie,Be,Ne.data):i.texImage2D(s.TEXTURE_2D,me,Ue,Ne.width,Ne.height,0,Ie,Be,Ne.data)}else if(T.isDataArrayTexture)if(st){if(xt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ue,he.width,he.height,he.depth),j)if(T.layerUpdates.size>0){const me=Nx(he.width,he.height,T.format,T.type);for(const He of T.layerUpdates){const Le=he.data.subarray(He*me/he.data.BYTES_PER_ELEMENT,(He+1)*me/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,He,he.width,he.height,1,Ie,Be,Le)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ie,Be,he.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,Ie,Be,he.data);else if(T.isData3DTexture)st?(xt&&i.texStorage3D(s.TEXTURE_3D,Ce,Ue,he.width,he.height,he.depth),j&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ie,Be,he.data)):i.texImage3D(s.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,Ie,Be,he.data);else if(T.isFramebufferTexture){if(xt)if(st)i.texStorage2D(s.TEXTURE_2D,Ce,Ue,he.width,he.height);else{let me=he.width,He=he.height;for(let Le=0;Le<Ce;Le++)i.texImage2D(s.TEXTURE_2D,Le,Ue,me,He,0,Ie,Be,null),me>>=1,He>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),he.parentNode!==me){me.appendChild(he),_.add(T),me.onpaint=nt=>{const on=nt.changedElements;for(const Pt of _)on.includes(Pt.image)&&(Pt.needsUpdate=!0)},me.requestPaint();return}const He=0,Le=s.RGBA,Ee=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,He,Le,Ee,Ye,he),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(at.length>0){if(st&&xt){const me=nn(at[0]);i.texStorage2D(s.TEXTURE_2D,Ce,Ue,me.width,me.height)}for(let me=0,He=at.length;me<He;me++)Ne=at[me],st?j&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ie,Be,Ne):i.texImage2D(s.TEXTURE_2D,me,Ue,Ie,Be,Ne);T.generateMipmaps=!1}else if(st){if(xt){const me=nn(he);i.texStorage2D(s.TEXTURE_2D,Ce,Ue,me.width,me.height)}j&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Be,he)}else i.texImage2D(s.TEXTURE_2D,0,Ue,Ie,Be,he);b(T)&&w(_e),Pe.__version=Re.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Je(L,T,J){if(T.image.length!==6)return;const _e=te(L,T),Te=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const Re=r.get(Te);if(Te.version!==Re.__version||_e===!0){i.activeTexture(s.TEXTURE0+J);const Pe=At.getPrimaries(At.workingColorSpace),fe=T.colorSpace===Zi?null:At.getPrimaries(T.colorSpace),he=T.colorSpace===Zi||Pe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ie=T.isCompressedTexture||T.image[0].isCompressedTexture,Be=T.image[0]&&T.image[0].isDataTexture,Ue=[];for(let Ee=0;Ee<6;Ee++)!Ie&&!Be?Ue[Ee]=M(T.image[Ee],!0,l.maxCubemapSize):Ue[Ee]=Be?T.image[Ee].image:T.image[Ee],Ue[Ee]=we(T,Ue[Ee]);const Ne=Ue[0],at=c.convert(T.format,T.colorSpace),st=c.convert(T.type),xt=O(T.internalFormat,at,st,T.normalized,T.colorSpace),j=T.isVideoTexture!==!0,Ce=Re.__version===void 0||_e===!0,me=Te.dataReady;let He=I(T,Ne);Ae(s.TEXTURE_CUBE_MAP,T);let Le;if(Ie){j&&Ce&&i.texStorage2D(s.TEXTURE_CUBE_MAP,He,xt,Ne.width,Ne.height);for(let Ee=0;Ee<6;Ee++){Le=Ue[Ee].mipmaps;for(let Ye=0;Ye<Le.length;Ye++){const nt=Le[Ye];T.format!==Bi?at!==null?j?me&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,0,0,nt.width,nt.height,at,nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,xt,nt.width,nt.height,0,nt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,0,0,nt.width,nt.height,at,st,nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,xt,nt.width,nt.height,0,at,st,nt.data)}}}else{if(Le=T.mipmaps,j&&Ce){Le.length>0&&He++;const Ee=nn(Ue[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,He,xt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Be){j?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ue[Ee].width,Ue[Ee].height,at,st,Ue[Ee].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xt,Ue[Ee].width,Ue[Ee].height,0,at,st,Ue[Ee].data);for(let Ye=0;Ye<Le.length;Ye++){const on=Le[Ye].image[Ee].image;j?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,0,0,on.width,on.height,at,st,on.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,xt,on.width,on.height,0,at,st,on.data)}}else{j?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,at,st,Ue[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xt,at,st,Ue[Ee]);for(let Ye=0;Ye<Le.length;Ye++){const nt=Le[Ye];j?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,0,0,at,st,nt.image[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,xt,at,st,nt.image[Ee])}}}b(T)&&w(s.TEXTURE_CUBE_MAP),Re.__version=Te.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Qe(L,T,J,_e,Te,Re){const Pe=c.convert(J.format,J.colorSpace),fe=c.convert(J.type),he=O(J.internalFormat,Pe,fe,J.normalized,J.colorSpace),Ie=r.get(T),Be=r.get(J);if(Be.__renderTarget=T,!Ie.__hasExternalTextures){const Ue=Math.max(1,T.width>>Re),Ne=Math.max(1,T.height>>Re);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?i.texImage3D(Te,Re,he,Ue,Ne,T.depth,0,Pe,fe,null):i.texImage2D(Te,Re,he,Ue,Ne,0,Pe,fe,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Te,Be.__webglTexture,0,$t(T)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Te,Be.__webglTexture,Re),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(L,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const _e=T.depthTexture,Te=_e&&_e.isDepthTexture?_e.type:null,Re=V(T.stencilBuffer,Te),Pe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;mt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(T),Re,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(T),Re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Re,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,L)}else{const _e=T.textures;for(let Te=0;Te<_e.length;Te++){const Re=_e[Te],Pe=c.convert(Re.format,Re.colorSpace),fe=c.convert(Re.type),he=O(Re.internalFormat,Pe,fe,Re.normalized,Re.colorSpace);mt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(T),he,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(T),he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(L,T,J){const _e=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=r.get(T.depthTexture);if(Te.__renderTarget=T,(!Te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_e){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),Te.__webglTexture===void 0){Te.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Te.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,T.depthTexture);const Ie=c.convert(T.depthTexture.format),Be=c.convert(T.depthTexture.type);let Ue;T.depthTexture.format===wa?Ue=s.DEPTH_COMPONENT24:T.depthTexture.format===fs&&(Ue=s.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ue,T.width,T.height,0,Ie,Be,null)}}else $(T.depthTexture,0);const Re=Te.__webglTexture,Pe=$t(T),fe=_e?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,he=T.depthTexture.format===fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===wa)mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,fe,Re,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,he,fe,Re,0);else if(T.depthTexture.format===fs)mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,fe,Re,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,he,fe,Re,0);else throw new Error("Unknown depthTexture format")}function ft(L){const T=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const _e=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const Te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",Te)};_e.addEventListener("dispose",Te),T.__depthDisposeCallback=Te}T.__boundDepthTexture=_e}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(J)for(let _e=0;_e<6;_e++)dt(T.__webglFramebuffer[_e],L,_e);else{const _e=L.texture.mipmaps;_e&&_e.length>0?dt(T.__webglFramebuffer[0],L,0):dt(T.__webglFramebuffer,L,0)}else if(J){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=s.createRenderbuffer(),Ft(T.__webglDepthbuffer[_e],L,!1);else{const Te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=T.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Re)}}else{const _e=L.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ft(T.__webglDepthbuffer,L,!1);else{const Te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Re)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(L,T,J){const _e=r.get(L);T!==void 0&&Qe(_e.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&ft(L)}function Ve(L){const T=L.texture,J=r.get(L),_e=r.get(T);L.addEventListener("dispose",A);const Te=L.textures,Re=L.isWebGLCubeRenderTarget===!0,Pe=Te.length>1;if(Pe||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=T.version,f.memory.textures++),Re){J.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[fe]=[];for(let he=0;he<T.mipmaps.length;he++)J.__webglFramebuffer[fe][he]=s.createFramebuffer()}else J.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)J.__webglFramebuffer[fe]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let fe=0,he=Te.length;fe<he;fe++){const Ie=r.get(Te[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&mt(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let fe=0;fe<Te.length;fe++){const he=Te[fe];J.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[fe]);const Ie=c.convert(he.format,he.colorSpace),Be=c.convert(he.type),Ue=O(he.internalFormat,Ie,Be,he.normalized,he.colorSpace,L.isXRRenderTarget===!0),Ne=$t(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Ue,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,J.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(J.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){i.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)Qe(J.__webglFramebuffer[fe][he],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Qe(J.__webglFramebuffer[fe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);b(T)&&w(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let fe=0,he=Te.length;fe<he;fe++){const Ie=Te[fe],Be=r.get(Ie);let Ue=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Be.__webglTexture),Ae(Ue,Ie),Qe(J.__webglFramebuffer,L,Ie,s.COLOR_ATTACHMENT0+fe,Ue,0),b(Ie)&&w(Ue)}i.unbindTexture()}else{let fe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(fe,_e.__webglTexture),Ae(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)Qe(J.__webglFramebuffer[he],L,T,s.COLOR_ATTACHMENT0,fe,he);else Qe(J.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,fe,0);b(T)&&w(fe),i.unbindTexture()}L.depthBuffer&&ft(L)}function lt(L){const T=L.textures;for(let J=0,_e=T.length;J<_e;J++){const Te=T[J];if(b(Te)){const Re=U(L),Pe=r.get(Te).__webglTexture;i.bindTexture(Re,Pe),w(Re),i.unbindTexture()}}}const yt=[],Xt=[];function W(L){if(L.samples>0){if(mt(L)===!1){const T=L.textures,J=L.width,_e=L.height;let Te=s.COLOR_BUFFER_BIT;const Re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(L),fe=T.length>1;if(fe)for(let Ie=0;Ie<T.length;Ie++)i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const he=L.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ie=0;Ie<T.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const Be=r.get(T[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,J,_e,0,0,J,_e,Te,s.NEAREST),m===!0&&(yt.length=0,Xt.length=0,yt.push(s.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.resolveDepthBuffer===!1&&(yt.push(Re),Xt.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ie=0;Ie<T.length;Ie++){i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const Be=r.get(T[Ie]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,Be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function $t(L){return Math.min(l.maxSamples,L.samples)}function mt(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(L){const T=f.render.frame;S.get(L)!==T&&(S.set(L,T),L.update())}function we(L,T){const J=L.colorSpace,_e=L.format,Te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Xr&&J!==Zi&&(At.getTransfer(J)===jt?(_e!==Bi||Te!==Vn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",J)),T}function nn(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=D,this.resetTextureUnits=ee,this.getTextureUnits=ae,this.setTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=de,this.setTexture3D=ye,this.setTextureCube=P,this.rebindTextures=wt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function f2(s,e){function i(r,l=Zi){let c;const f=At.getTransfer(l);if(r===Vn)return s.UNSIGNED_BYTE;if(r===ep)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Lv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Pv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Dv)return s.BYTE;if(r===Uv)return s.SHORT;if(r===tl)return s.UNSIGNED_SHORT;if(r===$h)return s.INT;if(r===Ji)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===Ca)return s.HALF_FLOAT;if(r===Ov)return s.ALPHA;if(r===Iv)return s.RGB;if(r===Bi)return s.RGBA;if(r===wa)return s.DEPTH_COMPONENT;if(r===fs)return s.DEPTH_STENCIL;if(r===Bv)return s.RED;if(r===np)return s.RED_INTEGER;if(r===js)return s.RG;if(r===ip)return s.RG_INTEGER;if(r===ap)return s.RGBA_INTEGER;if(r===Xc||r===Wc||r===qc||r===Yc)if(f===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ph||r===mh||r===gh||r===xh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ph)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vh||r===_h||r===Sh||r===yh||r===bh||r===Jc||r===Mh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===vh||r===_h)return f===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Sh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===yh)return c.COMPRESSED_R11_EAC;if(r===bh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Jc)return c.COMPRESSED_RG11_EAC;if(r===Mh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Eh||r===Th||r===Ah||r===Ch||r===wh||r===Rh||r===Nh||r===Dh||r===Uh||r===Lh||r===Ph||r===Oh||r===Ih||r===Bh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Eh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Th)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ah)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ch)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ih)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fh||r===zh||r===Hh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Fh)return f===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gh||r===kh||r===$c||r===Vh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Gh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$c)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jr?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const h2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new qv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ei({vertexShader:h2,fragmentShader:p2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hi(new ol(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g2 extends Na{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,S=null,_=null,x=null,y=null,E=null;const C=typeof XRWebGLBinding<"u",M=new m2,b={},w=i.getContextAttributes();let U=null,O=null;const V=[],I=[],z=new gt;let A=null;const B=new Ti;B.viewport=new gn;const Y=new Ti;Y.viewport=new gn;const H=[B,Y],q=new Tb;let ee=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let be=V[te];return be===void 0&&(be=new Nf,V[te]=be),be.getTargetRaySpace()},this.getControllerGrip=function(te){let be=V[te];return be===void 0&&(be=new Nf,V[te]=be),be.getGripSpace()},this.getHand=function(te){let be=V[te];return be===void 0&&(be=new Nf,V[te]=be),be.getHandSpace()};function G(te){const be=I.indexOf(te.inputSource);if(be===-1)return;const xe=V[be];xe!==void 0&&(xe.update(te.inputSource,te.frame,p||f),xe.dispatchEvent({type:te.type,data:te.inputSource}))}function D(){l.removeEventListener("select",G),l.removeEventListener("selectstart",G),l.removeEventListener("selectend",G),l.removeEventListener("squeeze",G),l.removeEventListener("squeezestart",G),l.removeEventListener("squeezeend",G),l.removeEventListener("end",D),l.removeEventListener("inputsourceschange",F);for(let te=0;te<V.length;te++){const be=I[te];be!==null&&(I[te]=null,V[te].disconnect(be))}ee=null,ae=null,M.reset();for(const te in b)delete b[te];e.setRenderTarget(U),y=null,x=null,_=null,l=null,O=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",G),l.addEventListener("selectstart",G),l.addEventListener("selectend",G),l.addEventListener("squeeze",G),l.addEventListener("squeezestart",G),l.addEventListener("squeezeend",G),l.addEventListener("end",D),l.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Oe=null,Je=null;w.depth&&(Je=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xe=w.stencil?fs:wa,Oe=w.stencil?jr:Ji);const Qe={colorFormat:i.RGBA8,depthFormat:Je,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(Qe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Wn(x.textureWidth,x.textureHeight,{format:Bi,type:Vn,depthTexture:new Ws(x.textureWidth,x.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const xe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,xe),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Wn(y.framebufferWidth,y.framebufferHeight,{format:Bi,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(te){for(let be=0;be<te.removed.length;be++){const xe=te.removed[be],Oe=I.indexOf(xe);Oe>=0&&(I[Oe]=null,V[Oe].disconnect(xe))}for(let be=0;be<te.added.length;be++){const xe=te.added[be];let Oe=I.indexOf(xe);if(Oe===-1){for(let Qe=0;Qe<V.length;Qe++)if(Qe>=I.length){I.push(xe),Oe=Qe;break}else if(I[Qe]===null){I[Qe]=xe,Oe=Qe;break}if(Oe===-1)break}const Je=V[Oe];Je&&Je.connect(xe)}}const $=new ce,de=new ce;function ye(te,be,xe){$.setFromMatrixPosition(be.matrixWorld),de.setFromMatrixPosition(xe.matrixWorld);const Oe=$.distanceTo(de),Je=be.projectionMatrix.elements,Qe=xe.projectionMatrix.elements,Ft=Je[14]/(Je[10]-1),dt=Je[14]/(Je[10]+1),ft=(Je[9]+1)/Je[5],wt=(Je[9]-1)/Je[5],Ve=(Je[8]-1)/Je[0],lt=(Qe[8]+1)/Qe[0],yt=Ft*Ve,Xt=Ft*lt,W=Oe/(-Ve+lt),$t=W*-Ve;if(be.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX($t),te.translateZ(W),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Je[10]===-1)te.projectionMatrix.copy(be.projectionMatrix),te.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const mt=Ft+W,Wt=dt+W,we=yt-$t,nn=Xt+(Oe-$t),L=ft*dt/Wt*mt,T=wt*dt/Wt*mt;te.projectionMatrix.makePerspective(we,nn,L,T,mt,Wt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function P(te,be){be===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(be.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let be=te.near,xe=te.far;M.texture!==null&&(M.depthNear>0&&(be=M.depthNear),M.depthFar>0&&(xe=M.depthFar)),q.near=Y.near=B.near=be,q.far=Y.far=B.far=xe,(ee!==q.near||ae!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),ee=q.near,ae=q.far),q.layers.mask=te.layers.mask|6,B.layers.mask=q.layers.mask&-5,Y.layers.mask=q.layers.mask&-3;const Oe=te.parent,Je=q.cameras;P(q,Oe);for(let Qe=0;Qe<Je.length;Qe++)P(Je[Qe],Oe);Je.length===2?ye(q,B,Y):q.projectionMatrix.copy(B.projectionMatrix),Z(te,q,Oe)};function Z(te,be,xe){xe===null?te.matrix.copy(be.matrixWorld):(te.matrix.copy(xe.matrixWorld),te.matrix.invert(),te.matrix.multiply(be.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(be.projectionMatrix),te.projectionMatrixInverse.copy(be.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Wh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(te){m=te,x!==null&&(x.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(te){return b[te]};let ge=null;function Me(te,be){if(S=be.getViewerPose(p||f),E=be,S!==null){const xe=S.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Oe=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,Oe=!0);for(let dt=0;dt<xe.length;dt++){const ft=xe[dt];let wt=null;if(y!==null)wt=y.getViewport(ft);else{const lt=_.getViewSubImage(x,ft);wt=lt.viewport,dt===0&&(e.setRenderTargetTextures(O,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(O))}let Ve=H[dt];Ve===void 0&&(Ve=new Ti,Ve.layers.enable(dt),Ve.viewport=new gn,H[dt]=Ve),Ve.matrix.fromArray(ft.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ft.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(wt.x,wt.y,wt.width,wt.height),dt===0&&(q.matrix.copy(Ve.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Oe===!0&&q.cameras.push(Ve)}const Je=l.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const dt=_.getDepthInformation(xe[0]);dt&&dt.isValid&&dt.texture&&M.init(dt,l.renderState)}if(Je&&Je.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<xe.length;dt++){const ft=xe[dt].camera;if(ft){let wt=b[ft];wt||(wt=new qv,b[ft]=wt);const Ve=_.getCameraImage(ft);wt.sourceTexture=Ve}}}}for(let xe=0;xe<V.length;xe++){const Oe=I[xe],Je=V[xe];Oe!==null&&Je!==void 0&&Je.update(Oe,be,p||f)}ge&&ge(te,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),E=null}const Ae=new Kv;Ae.setAnimationLoop(Me),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const x2=new Tn,i_=new ot;i_.set(-1,0,0,0,1,0,0,0,1);function v2(s,e){function i(M,b){M.matrixAutoUpdate===!0&&M.updateMatrix(),b.value.copy(M.matrix)}function r(M,b){b.color.getRGB(M.fogColor.value,Yv(s)),b.isFog?(M.fogNear.value=b.near,M.fogFar.value=b.far):b.isFogExp2&&(M.fogDensity.value=b.density)}function l(M,b,w,U,O){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?c(M,b):b.isMeshLambertMaterial?(c(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(M,b),_(M,b)):b.isMeshPhongMaterial?(c(M,b),S(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(M,b),x(M,b),b.isMeshPhysicalMaterial&&y(M,b,O)):b.isMeshMatcapMaterial?(c(M,b),E(M,b)):b.isMeshDepthMaterial?c(M,b):b.isMeshDistanceMaterial?(c(M,b),C(M,b)):b.isMeshNormalMaterial?c(M,b):b.isLineBasicMaterial?(f(M,b),b.isLineDashedMaterial&&h(M,b)):b.isPointsMaterial?m(M,b,w,U):b.isSpriteMaterial?p(M,b):b.isShadowMaterial?(M.color.value.copy(b.color),M.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(M,b){M.opacity.value=b.opacity,b.color&&M.diffuse.value.copy(b.color),b.emissive&&M.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.bumpMap&&(M.bumpMap.value=b.bumpMap,i(b.bumpMap,M.bumpMapTransform),M.bumpScale.value=b.bumpScale,b.side===Nn&&(M.bumpScale.value*=-1)),b.normalMap&&(M.normalMap.value=b.normalMap,i(b.normalMap,M.normalMapTransform),M.normalScale.value.copy(b.normalScale),b.side===Nn&&M.normalScale.value.negate()),b.displacementMap&&(M.displacementMap.value=b.displacementMap,i(b.displacementMap,M.displacementMapTransform),M.displacementScale.value=b.displacementScale,M.displacementBias.value=b.displacementBias),b.emissiveMap&&(M.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,M.emissiveMapTransform)),b.specularMap&&(M.specularMap.value=b.specularMap,i(b.specularMap,M.specularMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest);const w=e.get(b),U=w.envMap,O=w.envMapRotation;U&&(M.envMap.value=U,M.envMapRotation.value.setFromMatrix4(x2.makeRotationFromEuler(O)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(i_),M.reflectivity.value=b.reflectivity,M.ior.value=b.ior,M.refractionRatio.value=b.refractionRatio),b.lightMap&&(M.lightMap.value=b.lightMap,M.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,M.lightMapTransform)),b.aoMap&&(M.aoMap.value=b.aoMap,M.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,M.aoMapTransform))}function f(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform))}function h(M,b){M.dashSize.value=b.dashSize,M.totalSize.value=b.dashSize+b.gapSize,M.scale.value=b.scale}function m(M,b,w,U){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.size.value=b.size*w,M.scale.value=U*.5,b.map&&(M.map.value=b.map,i(b.map,M.uvTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function p(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.rotation.value=b.rotation,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function S(M,b){M.specular.value.copy(b.specular),M.shininess.value=Math.max(b.shininess,1e-4)}function _(M,b){b.gradientMap&&(M.gradientMap.value=b.gradientMap)}function x(M,b){M.metalness.value=b.metalness,b.metalnessMap&&(M.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,M.metalnessMapTransform)),M.roughness.value=b.roughness,b.roughnessMap&&(M.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,M.roughnessMapTransform)),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)}function y(M,b,w){M.ior.value=b.ior,b.sheen>0&&(M.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),M.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(M.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,M.sheenColorMapTransform)),b.sheenRoughnessMap&&(M.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,M.sheenRoughnessMapTransform))),b.clearcoat>0&&(M.clearcoat.value=b.clearcoat,M.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(M.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,M.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(M.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Nn&&M.clearcoatNormalScale.value.negate())),b.dispersion>0&&(M.dispersion.value=b.dispersion),b.iridescence>0&&(M.iridescence.value=b.iridescence,M.iridescenceIOR.value=b.iridescenceIOR,M.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(M.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,M.iridescenceMapTransform)),b.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),b.transmission>0&&(M.transmission.value=b.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),b.transmissionMap&&(M.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,M.transmissionMapTransform)),M.thickness.value=b.thickness,b.thicknessMap&&(M.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=b.attenuationDistance,M.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(M.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(M.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=b.specularIntensity,M.specularColor.value.copy(b.specularColor),b.specularColorMap&&(M.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,M.specularColorMapTransform)),b.specularIntensityMap&&(M.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,b){b.matcap&&(M.matcap.value=b.matcap)}function C(M,b){const w=e.get(b).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function _2(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const O=U.program;r.uniformBlockBinding(w,O)}function p(w,U){let O=l[w.id];O===void 0&&(E(w),O=S(w),l[w.id]=O,w.addEventListener("dispose",M));const V=U.program;r.updateUBOMapping(w,V);const I=e.render.frame;c[w.id]!==I&&(x(w),c[w.id]=I)}function S(w){const U=_();w.__bindingPointIndex=U;const O=s.createBuffer(),V=w.__size,I=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,V,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,O),O}function _(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const U=l[w.id],O=w.uniforms,V=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let I=0,z=O.length;I<z;I++){const A=Array.isArray(O[I])?O[I]:[O[I]];for(let B=0,Y=A.length;B<Y;B++){const H=A[B];if(y(H,I,B,V)===!0){const q=H.__offset,ee=Array.isArray(H.value)?H.value:[H.value];let ae=0;for(let G=0;G<ee.length;G++){const D=ee[G],F=C(D);typeof D=="number"||typeof D=="boolean"?(H.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,q+ae,H.__data)):D.isMatrix3?(H.__data[0]=D.elements[0],H.__data[1]=D.elements[1],H.__data[2]=D.elements[2],H.__data[3]=0,H.__data[4]=D.elements[3],H.__data[5]=D.elements[4],H.__data[6]=D.elements[5],H.__data[7]=0,H.__data[8]=D.elements[6],H.__data[9]=D.elements[7],H.__data[10]=D.elements[8],H.__data[11]=0):ArrayBuffer.isView(D)?H.__data.set(new D.constructor(D.buffer,D.byteOffset,H.__data.length)):(D.toArray(H.__data,ae),ae+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(w,U,O,V){const I=w.value,z=U+"_"+O;if(V[z]===void 0)return typeof I=="number"||typeof I=="boolean"?V[z]=I:ArrayBuffer.isView(I)?V[z]=I.slice():V[z]=I.clone(),!0;{const A=V[z];if(typeof I=="number"||typeof I=="boolean"){if(A!==I)return V[z]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(A.equals(I)===!1)return A.copy(I),!0}}return!1}function E(w){const U=w.uniforms;let O=0;const V=16;for(let z=0,A=U.length;z<A;z++){const B=Array.isArray(U[z])?U[z]:[U[z]];for(let Y=0,H=B.length;Y<H;Y++){const q=B[Y],ee=Array.isArray(q.value)?q.value:[q.value];for(let ae=0,G=ee.length;ae<G;ae++){const D=ee[ae],F=C(D),$=O%V,de=$%F.boundary,ye=$+de;O+=de,ye!==0&&V-ye<F.storage&&(O+=V-ye),q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=O,O+=F.storage}}}const I=O%V;return I>0&&(O+=V-I),w.__size=O,w.__cache={},this}function C(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(U.boundary=16,U.storage=w.byteLength):it("WebGLRenderer: Unsupported uniform value type.",w),U}function M(w){const U=w.target;U.removeEventListener("dispose",M);const O=f.indexOf(U.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function b(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:b}}const S2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function y2(){return qi===null&&(qi=new fb(S2,16,16,js,Ca),qi.name="DFG_LUT",qi.minFilter=un,qi.magFilter=un,qi.wrapS=Ma,qi.wrapT=Ma,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class b2{constructor(e={}){const{canvas:i=Vy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=Vn}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const C=y,M=new Set([ap,ip,np]),b=new Set([Vn,Ji,tl,jr,ep,tp]),w=new Uint32Array(4),U=new Int32Array(4),O=new ce;let V=null,I=null;const z=[],A=[];let B=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let H=!1,q=null;this._outputColorSpace=mn;let ee=0,ae=0,G=null,D=-1,F=null;const $=new gn,de=new gn;let ye=null;const P=new Bt(0);let Z=0,ge=i.width,Me=i.height,Ae=1,te=null,be=null;const xe=new gn(0,0,ge,Me),Oe=new gn(0,0,ge,Me);let Je=!1;const Qe=new Xv;let Ft=!1,dt=!1;const ft=new Tn,wt=new ce,Ve=new gn,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Xt(){return G===null?Ae:1}let W=r;function $t(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${au}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",Ye,!1),i.addEventListener("webglcontextcreationerror",nt,!1),W===null){const K="webgl2";if(W=$t(K,R),W===null)throw $t(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Rt("WebGLRenderer: "+R.message),R}let mt,Wt,we,nn,L,T,J,_e,Te,Re,Pe,fe,he,Ie,Be,Ue,Ne,at,st,xt,j,Ce,me;function He(){mt=new yT(W),mt.init(),j=new f2(W,mt),Wt=new hT(W,mt,e,j),we=new u2(W,mt),Wt.reversedDepthBuffer&&x&&we.buffers.depth.setReversed(!0),nn=new ET(W),L=new KA,T=new d2(W,mt,we,L,Wt,j,nn),J=new ST(Y),_e=new wb(W),Ce=new dT(W,_e),Te=new bT(W,_e,nn,Ce),Re=new AT(W,Te,_e,Ce,nn),at=new TT(W,Wt,T),Be=new pT(L),Pe=new ZA(Y,J,mt,Wt,Ce,Be),fe=new v2(Y,L),he=new JA,Ie=new a2(mt),Ne=new uT(Y,J,we,Re,E,m),Ue=new c2(Y,Re,Wt),me=new _2(W,nn,Wt,we),st=new fT(W,mt,nn),xt=new MT(W,mt,nn),nn.programs=Pe.programs,Y.capabilities=Wt,Y.extensions=mt,Y.properties=L,Y.renderLists=he,Y.shadowMap=Ue,Y.state=we,Y.info=nn}He(),C!==Vn&&(B=new wT(C,i.width,i.height,l,c));const Le=new g2(Y,W);this.xr=Le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(R){R!==void 0&&(Ae=R,this.setSize(ge,Me,!1))},this.getSize=function(R){return R.set(ge,Me)},this.setSize=function(R,K,oe=!0){if(Le.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=R,Me=K,i.width=Math.floor(R*Ae),i.height=Math.floor(K*Ae),oe===!0&&(i.style.width=R+"px",i.style.height=K+"px"),B!==null&&B.setSize(i.width,i.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(ge*Ae,Me*Ae).floor()},this.setDrawingBufferSize=function(R,K,oe){ge=R,Me=K,Ae=oe,i.width=Math.floor(R*oe),i.height=Math.floor(K*oe),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(C===Vn){Rt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy($)},this.getViewport=function(R){return R.copy(xe)},this.setViewport=function(R,K,oe,se){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,K,oe,se),we.viewport($.copy(xe).multiplyScalar(Ae).round())},this.getScissor=function(R){return R.copy(Oe)},this.setScissor=function(R,K,oe,se){R.isVector4?Oe.set(R.x,R.y,R.z,R.w):Oe.set(R,K,oe,se),we.scissor(de.copy(Oe).multiplyScalar(Ae).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(R){we.setScissorTest(Je=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){be=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,oe=!0){let se=0;if(R){let re=!1;if(G!==null){const ze=G.texture.format;re=M.has(ze)}if(re){const ze=G.texture.type,je=b.has(ze),Fe=Ne.getClearColor(),We=Ne.getClearAlpha(),Xe=Fe.r,$e=Fe.g,ct=Fe.b;je?(w[0]=Xe,w[1]=$e,w[2]=ct,w[3]=We,W.clearBufferuiv(W.COLOR,0,w)):(U[0]=Xe,U[1]=$e,U[2]=ct,U[3]=We,W.clearBufferiv(W.COLOR,0,U))}else se|=W.COLOR_BUFFER_BIT}K&&(se|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(se|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&W.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",Ye,!1),i.removeEventListener("webglcontextcreationerror",nt,!1),Ne.dispose(),he.dispose(),Ie.dispose(),L.dispose(),J.dispose(),Re.dispose(),Ce.dispose(),me.dispose(),Pe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Qr),Le.removeEventListener("sessionend",Jr),Fn.stop()};function Ee(R){R.preventDefault(),dx("WebGLRenderer: Context Lost."),H=!0}function Ye(){dx("WebGLRenderer: Context Restored."),H=!1;const R=nn.autoReset,K=Ue.enabled,oe=Ue.autoUpdate,se=Ue.needsUpdate,re=Ue.type;He(),nn.autoReset=R,Ue.enabled=K,Ue.autoUpdate=oe,Ue.needsUpdate=se,Ue.type=re}function nt(R){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function on(R){const K=R.target;K.removeEventListener("dispose",on),Pt(K)}function Pt(R){mi(R),L.remove(R)}function mi(R){const K=L.get(R).programs;K!==void 0&&(K.forEach(function(oe){Pe.releaseProgram(oe)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,oe,se,re,ze){K===null&&(K=lt);const je=re.isMesh&&re.matrixWorld.determinant()<0,Fe=La(R,K,oe,se,re);we.setMaterial(se,je);let We=oe.index,Xe=1;if(se.wireframe===!0){if(We=Te.getWireframeAttribute(oe),We===void 0)return;Xe=2}const $e=oe.drawRange,ct=oe.attributes.position;let Ke=$e.start*Xe,Nt=($e.start+$e.count)*Xe;ze!==null&&(Ke=Math.max(Ke,ze.start*Xe),Nt=Math.min(Nt,(ze.start+ze.count)*Xe)),We!==null?(Ke=Math.max(Ke,0),Nt=Math.min(Nt,We.count)):ct!=null&&(Ke=Math.max(Ke,0),Nt=Math.min(Nt,ct.count));const an=Nt-Ke;if(an<0||an===1/0)return;Ce.setup(re,se,Fe,oe,We);let Kt,zt=st;if(We!==null&&(Kt=_e.get(We),zt=xt,zt.setIndex(Kt)),re.isMesh)se.wireframe===!0?(we.setLineWidth(se.wireframeLinewidth*Xt()),zt.setMode(W.LINES)):zt.setMode(W.TRIANGLES);else if(re.isLine){let Ht=se.linewidth;Ht===void 0&&(Ht=1),we.setLineWidth(Ht*Xt()),re.isLineSegments?zt.setMode(W.LINES):re.isLineLoop?zt.setMode(W.LINE_LOOP):zt.setMode(W.LINE_STRIP)}else re.isPoints?zt.setMode(W.POINTS):re.isSprite&&zt.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))zt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Ht=re._multiDrawStarts,ke=re._multiDrawCounts,zn=re._multiDrawCount,vt=We?_e.get(We).bytesPerElement:1,Mn=L.get(se).currentProgram.getUniforms();for(let ni=0;ni<zn;ni++)Mn.setValue(W,"_gl_DrawID",ni),zt.render(Ht[ni]/vt,ke[ni])}else if(re.isInstancedMesh)zt.renderInstances(Ke,an,re.count);else if(oe.isInstancedBufferGeometry){const Ht=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,Ht);zt.renderInstances(Ke,an,ke)}else zt.render(Ke,an)};function ti(R,K,oe){R.transparent===!0&&R.side===hi&&R.forceSinglePass===!1?(R.side=Nn,R.needsUpdate=!0,qs(R,K,oe),R.side=Aa,R.needsUpdate=!0,qs(R,K,oe),R.side=hi):qs(R,K,oe)}this.compile=function(R,K,oe=null){oe===null&&(oe=R),I=Ie.get(oe),I.init(K),A.push(I),oe.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(I.pushLight(re),re.castShadow&&I.pushShadow(re))}),R!==oe&&R.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(I.pushLight(re),re.castShadow&&I.pushShadow(re))}),I.setupLights();const se=new Set;return R.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const ze=re.material;if(ze)if(Array.isArray(ze))for(let je=0;je<ze.length;je++){const Fe=ze[je];ti(Fe,oe,re),se.add(Fe)}else ti(ze,oe,re),se.add(ze)}),I=A.pop(),se},this.compileAsync=function(R,K,oe=null){const se=this.compile(R,K,oe);return new Promise(re=>{function ze(){if(se.forEach(function(je){L.get(je).currentProgram.isReady()&&se.delete(je)}),se.size===0){re(R);return}setTimeout(ze,10)}mt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let ms=null;function Kr(R){ms&&ms(R)}function Qr(){Fn.stop()}function Jr(){Fn.start()}const Fn=new Kv;Fn.setAnimationLoop(Kr),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(R){ms=R,Le.setAnimationLoop(R),R===null?Fn.stop():Fn.start()},Le.addEventListener("sessionstart",Qr),Le.addEventListener("sessionend",Jr),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;q!==null&&q.renderStart(R,K);const oe=Le.enabled===!0&&Le.isPresenting===!0,se=B!==null&&(G===null||oe)&&B.begin(Y,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(K),K=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(Y,R,K,G),I=Ie.get(R,A.length),I.init(K),I.state.textureUnits=T.getTextureUnits(),A.push(I),ft.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Qe.setFromProjectionMatrix(ft,Ki,K.reversedDepth),dt=this.localClippingEnabled,Ft=Be.init(this.clippingPlanes,dt),V=he.get(R,z.length),V.init(),z.push(V),Le.enabled===!0&&Le.isPresenting===!0){const je=Y.xr.getDepthSensingMesh();je!==null&&dn(je,K,-1/0,Y.sortObjects)}dn(R,K,0,Y.sortObjects),V.finish(),Y.sortObjects===!0&&V.sort(te,be),yt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,yt&&Ne.addToRenderList(V,R),this.info.render.frame++,Ft===!0&&Be.beginShadows();const re=I.state.shadowsArray;if(Ue.render(re,R,K),Ft===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&B.hasRenderPass())===!1){const je=V.opaque,Fe=V.transmissive;if(I.setupLights(),K.isArrayCamera){const We=K.cameras;if(Fe.length>0)for(let Xe=0,$e=We.length;Xe<$e;Xe++){const ct=We[Xe];ea(je,Fe,R,ct)}yt&&Ne.render(R);for(let Xe=0,$e=We.length;Xe<$e;Xe++){const ct=We[Xe];Un(V,R,ct,ct.viewport)}}else Fe.length>0&&ea(je,Fe,R,K),yt&&Ne.render(R),Un(V,R,K)}G!==null&&ae===0&&(T.updateMultisampleRenderTarget(G),T.updateRenderTargetMipmap(G)),se&&B.end(Y),R.isScene===!0&&R.onAfterRender(Y,R,K),Ce.resetDefaultState(),D=-1,F=null,A.pop(),A.length>0?(I=A[A.length-1],T.setTextureUnits(I.state.textureUnits),Ft===!0&&Be.setGlobalState(Y.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?V=z[z.length-1]:V=null,q!==null&&q.renderEnd()};function dn(R,K,oe,se){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLightProbeGrid)I.pushLightProbeGrid(R);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Qe.intersectsSprite(R)){se&&Ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ft);const je=Re.update(R),Fe=R.material;Fe.visible&&V.push(R,je,Fe,oe,Ve.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Qe.intersectsObject(R))){const je=Re.update(R),Fe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ve.copy(R.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Ve.copy(je.boundingSphere.center)),Ve.applyMatrix4(R.matrixWorld).applyMatrix4(ft)),Array.isArray(Fe)){const We=je.groups;for(let Xe=0,$e=We.length;Xe<$e;Xe++){const ct=We[Xe],Ke=Fe[ct.materialIndex];Ke&&Ke.visible&&V.push(R,je,Ke,oe,Ve.z,ct)}}else Fe.visible&&V.push(R,je,Fe,oe,Ve.z,null)}}const ze=R.children;for(let je=0,Fe=ze.length;je<Fe;je++)dn(ze[je],K,oe,se)}function Un(R,K,oe,se){const{opaque:re,transmissive:ze,transparent:je}=R;I.setupLightsView(oe),Ft===!0&&Be.setGlobalState(Y.clippingPlanes,oe),se&&we.viewport($.copy(se)),re.length>0&&Da(re,K,oe),ze.length>0&&Da(ze,K,oe),je.length>0&&Da(je,K,oe),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ea(R,K,oe,se){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[se.id]===void 0){const Ke=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[se.id]=new Wn(1,1,{generateMipmaps:!0,type:Ke?Ca:Vn,minFilter:Gs,samples:Math.max(4,Wt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const ze=I.state.transmissionRenderTarget[se.id],je=se.viewport||$;ze.setSize(je.z*Y.transmissionResolutionScale,je.w*Y.transmissionResolutionScale);const Fe=Y.getRenderTarget(),We=Y.getActiveCubeFace(),Xe=Y.getActiveMipmapLevel();Y.setRenderTarget(ze),Y.getClearColor(P),Z=Y.getClearAlpha(),Z<1&&Y.setClearColor(16777215,.5),Y.clear(),yt&&Ne.render(oe);const $e=Y.toneMapping;Y.toneMapping=Qi;const ct=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),I.setupLightsView(se),Ft===!0&&Be.setGlobalState(Y.clippingPlanes,se),Da(R,oe,se),T.updateMultisampleRenderTarget(ze),T.updateRenderTargetMipmap(ze),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Nt=0,an=K.length;Nt<an;Nt++){const Kt=K[Nt],{object:zt,geometry:Ht,material:ke,group:zn}=Kt;if(ke.side===hi&&zt.layers.test(se.layers)){const vt=ke.side;ke.side=Nn,ke.needsUpdate=!0,ll(zt,oe,se,Ht,ke,zn),ke.side=vt,ke.needsUpdate=!0,Ke=!0}}Ke===!0&&(T.updateMultisampleRenderTarget(ze),T.updateRenderTargetMipmap(ze))}Y.setRenderTarget(Fe,We,Xe),Y.setClearColor(P,Z),ct!==void 0&&(se.viewport=ct),Y.toneMapping=$e}function Da(R,K,oe){const se=K.isScene===!0?K.overrideMaterial:null;for(let re=0,ze=R.length;re<ze;re++){const je=R[re],{object:Fe,geometry:We,group:Xe}=je;let $e=je.material;$e.allowOverride===!0&&se!==null&&($e=se),Fe.layers.test(oe.layers)&&ll(Fe,K,oe,We,$e,Xe)}}function ll(R,K,oe,se,re,ze){R.onBeforeRender(Y,K,oe,se,re,ze),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),re.onBeforeRender(Y,K,oe,se,R,ze),re.transparent===!0&&re.side===hi&&re.forceSinglePass===!1?(re.side=Nn,re.needsUpdate=!0,Y.renderBufferDirect(oe,K,se,re,R,ze),re.side=Aa,re.needsUpdate=!0,Y.renderBufferDirect(oe,K,se,re,R,ze),re.side=hi):Y.renderBufferDirect(oe,K,se,re,R,ze),R.onAfterRender(Y,K,oe,se,re,ze)}function qs(R,K,oe){K.isScene!==!0&&(K=lt);const se=L.get(R),re=I.state.lights,ze=I.state.shadowsArray,je=re.state.version,Fe=Pe.getParameters(R,re.state,ze,K,oe,I.state.lightProbeGridArray),We=Pe.getProgramCacheKey(Fe);let Xe=se.programs;se.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?K.environment:null,se.fog=K.fog;const $e=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;se.envMap=J.get(R.envMap||se.environment,$e),se.envMapRotation=se.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",on),Xe=new Map,se.programs=Xe);let ct=Xe.get(We);if(ct!==void 0){if(se.currentProgram===ct&&se.lightsStateVersion===je)return Ua(R,Fe),ct}else Fe.uniforms=Pe.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,oe,Fe),R.onBeforeCompile(Fe,Y),ct=Pe.acquireProgram(Fe,We),Xe.set(We,ct),se.uniforms=Fe.uniforms;const Ke=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=Be.uniform),Ua(R,Fe),se.needsLights=gs(R),se.lightsStateVersion=je,se.needsLights&&(Ke.ambientLightColor.value=re.state.ambient,Ke.lightProbe.value=re.state.probe,Ke.directionalLights.value=re.state.directional,Ke.directionalLightShadows.value=re.state.directionalShadow,Ke.spotLights.value=re.state.spot,Ke.spotLightShadows.value=re.state.spotShadow,Ke.rectAreaLights.value=re.state.rectArea,Ke.ltc_1.value=re.state.rectAreaLTC1,Ke.ltc_2.value=re.state.rectAreaLTC2,Ke.pointLights.value=re.state.point,Ke.pointLightShadows.value=re.state.pointShadow,Ke.hemisphereLights.value=re.state.hemi,Ke.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ke.spotLightMatrix.value=re.state.spotLightMatrix,Ke.spotLightMap.value=re.state.spotLightMap,Ke.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=I.state.lightProbeGridArray.length>0,se.currentProgram=ct,se.uniformsList=null,ct}function $r(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Zc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Ua(R,K){const oe=L.get(R);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function eo(R,K){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;O.setFromMatrixPosition(K.matrixWorld);for(let oe=0,se=R.length;oe<se;oe++){const re=R[oe];if(re.texture!==null&&re.boundingBox.containsPoint(O))return re}return null}function La(R,K,oe,se,re){K.isScene!==!0&&(K=lt),T.resetTextureUnits();const ze=K.fog,je=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?K.environment:null,Fe=G===null?Y.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:At.workingColorSpace,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Xe=J.get(se.envMap||je,We),$e=se.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ct=!!oe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ke=!!oe.morphAttributes.position,Nt=!!oe.morphAttributes.normal,an=!!oe.morphAttributes.color;let Kt=Qi;se.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Kt=Y.toneMapping);const zt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ht=zt!==void 0?zt.length:0,ke=L.get(se),zn=I.state.lights;if(Ft===!0&&(dt===!0||R!==F)){const It=R===F&&se.id===D;Be.setState(se,R,It)}let vt=!1;se.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==zn.state.version||ke.outputColorSpace!==Fe||re.isBatchedMesh&&ke.batching===!1||!re.isBatchedMesh&&ke.batching===!0||re.isBatchedMesh&&ke.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&ke.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&ke.instancing===!1||!re.isInstancedMesh&&ke.instancing===!0||re.isSkinnedMesh&&ke.skinning===!1||!re.isSkinnedMesh&&ke.skinning===!0||re.isInstancedMesh&&ke.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ke.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&ke.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&ke.instancingMorph===!1&&re.morphTexture!==null||ke.envMap!==Xe||se.fog===!0&&ke.fog!==ze||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Be.numPlanes||ke.numIntersection!==Be.numIntersection)||ke.vertexAlphas!==$e||ke.vertexTangents!==ct||ke.morphTargets!==Ke||ke.morphNormals!==Nt||ke.morphColors!==an||ke.toneMapping!==Kt||ke.morphTargetsCount!==Ht||!!ke.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,ke.__version=se.version);let Mn=ke.currentProgram;vt===!0&&(Mn=qs(se,K,re),q&&se.isNodeMaterial&&q.onUpdateProgram(se,Mn,ke));let ni=!1,Ci=!1,ii=!1;const Gt=Mn.getUniforms(),sn=ke.uniforms;if(we.useProgram(Mn.program)&&(ni=!0,Ci=!0,ii=!0),se.id!==D&&(D=se.id,Ci=!0),ke.needsLights){const It=eo(I.state.lightProbeGridArray,re);ke.lightProbeGrid!==It&&(ke.lightProbeGrid=It,Ci=!0)}if(ni||F!==R){we.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Gt.setValue(W,"projectionMatrix",R.projectionMatrix),Gt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Gi=Gt.map.cameraPosition;Gi!==void 0&&Gi.setValue(W,wt.setFromMatrixPosition(R.matrixWorld)),Wt.logarithmicDepthBuffer&&Gt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),F!==R&&(F=R,Ci=!0,ii=!0)}if(ke.needsLights&&(zn.state.directionalShadowMap.length>0&&Gt.setValue(W,"directionalShadowMap",zn.state.directionalShadowMap,T),zn.state.spotShadowMap.length>0&&Gt.setValue(W,"spotShadowMap",zn.state.spotShadowMap,T),zn.state.pointShadowMap.length>0&&Gt.setValue(W,"pointShadowMap",zn.state.pointShadowMap,T)),re.isSkinnedMesh){Gt.setOptional(W,re,"bindMatrix"),Gt.setOptional(W,re,"bindMatrixInverse");const It=re.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Gt.setValue(W,"boneTexture",It.boneTexture,T))}re.isBatchedMesh&&(Gt.setOptional(W,re,"batchingTexture"),Gt.setValue(W,"batchingTexture",re._matricesTexture,T),Gt.setOptional(W,re,"batchingIdTexture"),Gt.setValue(W,"batchingIdTexture",re._indirectTexture,T),Gt.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&Gt.setValue(W,"batchingColorTexture",re._colorsTexture,T));const wi=oe.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&at.update(re,oe,Mn),(Ci||ke.receiveShadow!==re.receiveShadow)&&(ke.receiveShadow=re.receiveShadow,Gt.setValue(W,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&K.environment!==null&&(sn.envMapIntensity.value=K.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=y2()),Ci){if(Gt.setValue(W,"toneMappingExposure",Y.toneMappingExposure),ke.needsLights&&Pa(sn,ii),ze&&se.fog===!0&&fe.refreshFogUniforms(sn,ze),fe.refreshMaterialUniforms(sn,se,Ae,Me,I.state.transmissionRenderTarget[R.id]),ke.needsLights&&ke.lightProbeGrid){const It=ke.lightProbeGrid;sn.probesSH.value=It.texture,sn.probesMin.value.copy(It.boundingBox.min),sn.probesMax.value.copy(It.boundingBox.max),sn.probesResolution.value.copy(It.resolution)}Zc.upload(W,$r(ke),sn,T)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Zc.upload(W,$r(ke),sn,T),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(W,"center",re.center),Gt.setValue(W,"modelViewMatrix",re.modelViewMatrix),Gt.setValue(W,"normalMatrix",re.normalMatrix),Gt.setValue(W,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const It=se.uniformsGroups;for(let Gi=0,Ia=It.length;Gi<Ia;Gi++){const xs=It[Gi];me.update(xs,Mn),me.bind(xs,Mn)}}return Mn}function Pa(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function gs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,K,oe){const se=L.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),L.get(R.texture).__webglTexture=K,L.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:oe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const oe=L.get(R);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0};const Oa=W.createFramebuffer();this.setRenderTarget=function(R,K=0,oe=0){G=R,ee=K,ae=oe;let se=null,re=!1,ze=!1;if(R){const Fe=L.get(R);if(Fe.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(W.FRAMEBUFFER,Fe.__webglFramebuffer),$.copy(R.viewport),de.copy(R.scissor),ye=R.scissorTest,we.viewport($),we.scissor(de),we.setScissorTest(ye),D=-1;return}else if(Fe.__webglFramebuffer===void 0)T.setupRenderTarget(R);else if(Fe.__hasExternalTextures)T.rebindTextures(R,L.get(R.texture).__webglTexture,L.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Fe.__boundDepthTexture!==$e){if($e!==null&&L.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ze=!0);const Xe=L.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[K])?se=Xe[K][oe]:se=Xe[K],re=!0):R.samples>0&&T.useMultisampledRTT(R)===!1?se=L.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?se=Xe[oe]:se=Xe,$.copy(R.viewport),de.copy(R.scissor),ye=R.scissorTest}else $.copy(xe).multiplyScalar(Ae).floor(),de.copy(Oe).multiplyScalar(Ae).floor(),ye=Je;if(oe!==0&&(se=Oa),we.bindFramebuffer(W.FRAMEBUFFER,se)&&we.drawBuffers(R,se),we.viewport($),we.scissor(de),we.setScissorTest(ye),re){const Fe=L.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,oe)}else if(ze){const Fe=K;for(let We=0;We<R.textures.length;We++){const Xe=L.get(R.textures[We]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+We,Xe.__webglTexture,oe,Fe)}}else if(R!==null&&oe!==0){const Fe=L.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Fe.__webglTexture,oe)}D=-1},this.readRenderTargetPixels=function(R,K,oe,se,re,ze,je,Fe=0){if(!(R&&R.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(We=We[je]),We){we.bindFramebuffer(W.FRAMEBUFFER,We);try{const Xe=R.textures[Fe],$e=Xe.format,ct=Xe.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe),!Wt.textureFormatReadable($e)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(ct)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-se&&oe>=0&&oe<=R.height-re&&W.readPixels(K,oe,se,re,j.convert($e),j.convert(ct),ze)}finally{const Xe=G!==null?L.get(G).__webglFramebuffer:null;we.bindFramebuffer(W.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,K,oe,se,re,ze,je,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(We=We[je]),We)if(K>=0&&K<=R.width-se&&oe>=0&&oe<=R.height-re){we.bindFramebuffer(W.FRAMEBUFFER,We);const Xe=R.textures[Fe],$e=Xe.format,ct=Xe.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe),!Wt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.bufferData(W.PIXEL_PACK_BUFFER,ze.byteLength,W.STREAM_READ),W.readPixels(K,oe,se,re,j.convert($e),j.convert(ct),0);const Nt=G!==null?L.get(G).__webglFramebuffer:null;we.bindFramebuffer(W.FRAMEBUFFER,Nt);const an=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await jy(W,an,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ze),W.deleteBuffer(Ke),W.deleteSync(an),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,oe=0){const se=Math.pow(2,-oe),re=Math.floor(R.image.width*se),ze=Math.floor(R.image.height*se),je=K!==null?K.x:0,Fe=K!==null?K.y:0;T.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,oe,0,0,je,Fe,re,ze),we.unbindTexture()};const xn=W.createFramebuffer(),cl=W.createFramebuffer();this.copyTextureToTexture=function(R,K,oe=null,se=null,re=0,ze=0){let je,Fe,We,Xe,$e,ct,Ke,Nt,an;const Kt=R.isCompressedTexture?R.mipmaps[ze]:R.image;if(oe!==null)je=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,$e=oe.min.y,ct=oe.isBox3?oe.min.z:0;else{const sn=Math.pow(2,-re);je=Math.floor(Kt.width*sn),Fe=Math.floor(Kt.height*sn),R.isDataArrayTexture?We=Kt.depth:R.isData3DTexture?We=Math.floor(Kt.depth*sn):We=1,Xe=0,$e=0,ct=0}se!==null?(Ke=se.x,Nt=se.y,an=se.z):(Ke=0,Nt=0,an=0);const zt=j.convert(K.format),Ht=j.convert(K.type);let ke;K.isData3DTexture?(T.setTexture3D(K,0),ke=W.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(T.setTexture2DArray(K,0),ke=W.TEXTURE_2D_ARRAY):(T.setTexture2D(K,0),ke=W.TEXTURE_2D),we.activeTexture(W.TEXTURE0),we.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),we.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),we.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const zn=we.getParameter(W.UNPACK_ROW_LENGTH),vt=we.getParameter(W.UNPACK_IMAGE_HEIGHT),Mn=we.getParameter(W.UNPACK_SKIP_PIXELS),ni=we.getParameter(W.UNPACK_SKIP_ROWS),Ci=we.getParameter(W.UNPACK_SKIP_IMAGES);we.pixelStorei(W.UNPACK_ROW_LENGTH,Kt.width),we.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Kt.height),we.pixelStorei(W.UNPACK_SKIP_PIXELS,Xe),we.pixelStorei(W.UNPACK_SKIP_ROWS,$e),we.pixelStorei(W.UNPACK_SKIP_IMAGES,ct);const ii=R.isDataArrayTexture||R.isData3DTexture,Gt=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const sn=L.get(R),wi=L.get(K),It=L.get(sn.__renderTarget),Gi=L.get(wi.__renderTarget);we.bindFramebuffer(W.READ_FRAMEBUFFER,It.__webglFramebuffer),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Ia=0;Ia<We;Ia++)ii&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,L.get(R).__webglTexture,re,ct+Ia),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,L.get(K).__webglTexture,ze,an+Ia)),W.blitFramebuffer(Xe,$e,je,Fe,Ke,Nt,je,Fe,W.DEPTH_BUFFER_BIT,W.NEAREST);we.bindFramebuffer(W.READ_FRAMEBUFFER,null),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||R.isRenderTargetTexture||L.has(R)){const sn=L.get(R),wi=L.get(K);we.bindFramebuffer(W.READ_FRAMEBUFFER,xn),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,cl);for(let It=0;It<We;It++)ii?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,sn.__webglTexture,re,ct+It):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,sn.__webglTexture,re),Gt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,wi.__webglTexture,ze,an+It):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,wi.__webglTexture,ze),re!==0?W.blitFramebuffer(Xe,$e,je,Fe,Ke,Nt,je,Fe,W.COLOR_BUFFER_BIT,W.NEAREST):Gt?W.copyTexSubImage3D(ke,ze,Ke,Nt,an+It,Xe,$e,je,Fe):W.copyTexSubImage2D(ke,ze,Ke,Nt,Xe,$e,je,Fe);we.bindFramebuffer(W.READ_FRAMEBUFFER,null),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Gt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(ke,ze,Ke,Nt,an,je,Fe,We,zt,Ht,Kt.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(ke,ze,Ke,Nt,an,je,Fe,We,zt,Kt.data):W.texSubImage3D(ke,ze,Ke,Nt,an,je,Fe,We,zt,Ht,Kt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ze,Ke,Nt,je,Fe,zt,Ht,Kt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ze,Ke,Nt,Kt.width,Kt.height,zt,Kt.data):W.texSubImage2D(W.TEXTURE_2D,ze,Ke,Nt,je,Fe,zt,Ht,Kt);we.pixelStorei(W.UNPACK_ROW_LENGTH,zn),we.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),we.pixelStorei(W.UNPACK_SKIP_PIXELS,Mn),we.pixelStorei(W.UNPACK_SKIP_ROWS,ni),we.pixelStorei(W.UNPACK_SKIP_IMAGES,Ci),ze===0&&K.generateMipmaps&&W.generateMipmap(ke),we.unbindTexture()},this.initRenderTarget=function(R){L.get(R).__webglFramebuffer===void 0&&T.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){ee=0,ae=0,G=null,we.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}var M2=(()=>{const s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new $i;return i.setAttribute("position",new Ai(s,3)),i.setAttribute("uv",new Ai(e,2)),i})(),ps=class Kh{static get fullscreenGeometry(){return M2}constructor(e="Pass",i=new qh,r=new ru){this.name=e,this.renderer=null,this.scene=i,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new Hi(Kh.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new qh),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=il){}render(e,i,r,l,c){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,r){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof Wn||i instanceof Yr||i instanceof Dn||i instanceof Kh)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},E2=class extends ps{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(s,e,i,r,l){const c=s.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},T2=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,A2="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",C2=class extends ei{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new pn(null),depthBuffer:new pn(null),channelWeights:new pn(null),opacity:new pn(1)},blending:Fi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:T2,vertexShader:A2}),this.depthFunc=Qc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(s){const e=s!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){const e=s!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=s}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(s){this.colorSpaceConversion!==s&&(s?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(s){s!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=s):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(s){this.uniforms.inputBuffer.value=s}getOpacity(s){return this.uniforms.opacity.value}setOpacity(s){this.uniforms.opacity.value=s}},w2=class extends ps{constructor(s,e=!0){super("CopyPass"),this.fullscreenMaterial=new C2,this.needsSwap=!1,this.renderTarget=s,s===void 0&&(this.renderTarget=new Wn(1,1,{minFilter:un,magFilter:un,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(s){this.autoResize=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(s){this.autoResize=s}render(s,e,i,r,l){this.fullscreenMaterial.inputBuffer=e.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,e){this.autoResize&&this.renderTarget.setSize(s,e)}initialize(s,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==Vn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":s!==null&&s.outputColorSpace===mn&&(this.renderTarget.texture.colorSpace=mn))}},ev=new Bt,a_=class extends ps{constructor(s=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=s,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(s,e,i){this.color=s,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(s){this.overrideClearColor=s}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(s){this.overrideClearAlpha=s}render(s,e,i,r,l){const c=this.overrideClearColor,f=this.overrideClearAlpha,h=s.getClearAlpha(),m=c!==null,p=f>=0;m?(s.getClearColor(ev),s.setClearColor(c,p?f:h)):p&&s.setClearAlpha(f),s.setRenderTarget(this.renderToScreen?null:e),s.clear(this.color,this.depth,this.stencil),m?s.setClearColor(ev,h):p&&s.setClearAlpha(h)}},R2=class extends ps{constructor(s,e){super("MaskPass",s,e),this.needsSwap=!1,this.clearPass=new a_(!1,!1,!0),this.inverse=!1}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get inverted(){return this.inverse}set inverted(s){this.inverse=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(s){this.inverted=s}render(s,e,i,r,l){const c=s.getContext(),f=s.state.buffers,h=this.scene,m=this.camera,p=this.clearPass,S=this.inverted?0:1,_=1-S;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),f.stencil.setFunc(c.ALWAYS,S,4294967295),f.stencil.setClear(_),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(s,null):(p.render(s,e),p.render(s,i))),this.renderToScreen?(s.setRenderTarget(null),s.render(h,m)):(s.setRenderTarget(e),s.render(h,m),s.setRenderTarget(i),s.render(h,m)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(c.EQUAL,1,4294967295),f.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),f.stencil.setLocked(!0)}},$f=1/1e3,N2=1e3,D2=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(s){typeof document<"u"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=s)}get delta(){return this._delta*$f}get fixedDelta(){return this._fixedDelta*$f}set fixedDelta(s){this._fixedDelta=s*N2}get elapsed(){return this._elapsed*$f}update(s){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(s!==void 0?s:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(s){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},tv=class{constructor(s=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:r=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new w2,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new D2,this.autoRenderToScreen=!0,this.setRenderer(s)}get multisampling(){return this.inputBuffer.samples}set multisampling(s){const e=this.inputBuffer,i=this.multisampling;i>0&&s>0?(this.inputBuffer.samples=s,this.outputBuffer.samples=s,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==s&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,s),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(s){if(this.renderer=s,s!==null){const e=s.getSize(new gt),i=s.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===Vn&&s.outputColorSpace===mn&&(this.inputBuffer.texture.colorSpace=mn,this.outputBuffer.texture.colorSpace=mn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),s.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(s,i,r)}}replaceRenderer(s,e=!0){const i=this.renderer,r=i.domElement.parentNode;return this.setRenderer(s),e&&r!==null&&(r.removeChild(i.domElement),r.appendChild(s.domElement)),i}createDepthTexture(){const s=this.inputBuffer,e=new Ws;this.depthTexture=e,s.stencilBuffer?(e.format=fs,e.type=jr):e.type=Ii;const i=e.clone();return i.name="EffectComposer.StableDepth",this.depthRenderTarget=new Wn(s.width,s.height,{depthBuffer:!0,stencilBuffer:s.stencilBuffer,depthTexture:i}),i}blitDepthBuffer(s){const e=this.renderer,i=this.depthRenderTarget,r=e.properties,l=e.getContext();e.setRenderTarget(i);const c=r.get(s).__webglFramebuffer,f=r.get(i).__webglFramebuffer,h=s.stencilBuffer?l.DEPTH_BUFFER_BIT|l.STENCIL_BUFFER_BIT:l.DEPTH_BUFFER_BIT;l.bindFramebuffer(l.READ_FRAMEBUFFER,c),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,f),l.blitFramebuffer(0,0,s.width,s.height,0,0,i.width,i.height,h,l.NEAREST),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const s of this.passes)s.setDepthTexture(null)}}createBuffer(s,e,i,r){const l=this.renderer,c=l===null?new gt:l.getDrawingBufferSize(new gt),f={minFilter:un,magFilter:un,stencilBuffer:e,depthBuffer:s,type:i},h=new Wn(c.width,c.height,f);return r>0&&(h.samples=r),i===Vn&&l!==null&&l.outputColorSpace===mn&&(h.texture.colorSpace=mn),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(s){for(const e of this.passes)e.mainScene=s}setMainCamera(s){for(const e of this.passes)e.mainCamera=s}addPass(s,e){const i=this.passes,r=this.renderer,l=r.getDrawingBufferSize(new gt),c=r.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(s.renderer=r,s.setSize(l.width,l.height),s.initialize(r,c,f),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,s):i.push(s),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(s of i)s.setDepthTexture(h)}else{const h=this.depthRenderTarget.depthTexture;s.setDepthTexture(h)}}removePass(s){const e=this.passes,i=e.indexOf(s);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const c=(h,m)=>h||m.needsDepthTexture;if(!e.reduce(c,!1)){const h=this.depthRenderTarget.depthTexture;s.getDepthTexture()===h&&s.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&i===e.length&&(s.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),this.passes=[])}render(s){const e=this.renderer,i=this.copyPass;let r=this.inputBuffer,l=this.outputBuffer,c,f=!1;s===void 0&&(this.timer.update(),s=this.timer.getDelta());for(const h of this.passes)if(h.enabled){if(r.depthTexture=this.depthTexture,l.depthTexture=null,h.render(e,r,l,s,f),h.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(r),h.needsSwap){if(f){i.renderToScreen=h.renderToScreen;const m=e.getContext(),p=e.state.buffers.stencil;p.setFunc(m.NOTEQUAL,1,4294967295),i.render(e,r,l,s,f),p.setFunc(m.EQUAL,1,4294967295)}c=r,r=l,l=c}h instanceof R2?f=!0:h instanceof E2&&(f=!1)}}setSize(s,e,i){const r=this.renderer,l=r.getSize(new gt);(s===void 0||e===void 0)&&(s=l.width,e=l.height),(l.width!==s||l.height!==e)&&r.setSize(s,e,i);const c=r.getDrawingBufferSize(new gt);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(c.width,c.height);for(const f of this.passes)f.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const s of this.passes)s.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),ps.fullscreenGeometry.dispose()}},ks={NONE:0,DEPTH:1,CONVOLUTION:2},Lt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},U2=class{constructor(){this.shaderParts=new Map([[Lt.FRAGMENT_HEAD,null],[Lt.FRAGMENT_MAIN_UV,null],[Lt.FRAGMENT_MAIN_IMAGE,null],[Lt.VERTEX_HEAD,null],[Lt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ks.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Xr}},eh=!1,nv=class{constructor(s=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(s),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case hi:i=this.materialsFlatShadedDoubleSide;break;case Nn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case hi:i=this.materialsDoubleSide;break;case Nn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(s){if(!(s instanceof ei))return s.clone();const e=s.uniforms,i=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,i.set(l,c))}const r=s.clone();for(const l of i)e[l[0]].value=l[1],r.uniforms[l[0]].value=l[1];return r}setMaterial(s){if(this.disposeMaterials(),this.material=s,s!==null){const e=this.materials=[this.cloneMaterial(s),this.cloneMaterial(s),this.cloneMaterial(s)];for(const i of e)i.uniforms=Object.assign({},s.uniforms),i.side=Aa;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=Nn,r}),this.materialsDoubleSide=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=hi,r}),this.materialsFlatShaded=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=Nn,r}),this.materialsFlatShadedDoubleSide=e.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=hi,r})}}render(s,e,i){const r=s.shadowMap.enabled;if(s.shadowMap.enabled=!1,eh){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),s.render(e,i);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,s.render(e,i),e.overrideMaterial=l}s.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const s=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of s)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return eh}static set workaroundEnabled(s){eh=s}},Tt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},L2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",P2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",O2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",I2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",B2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",F2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",z2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",H2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",G2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",k2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",V2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",j2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",X2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",W2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",q2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Y2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Z2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",K2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Q2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",J2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",e3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",t3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",n3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",i3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",a3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",s3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",r3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",o3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",l3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",c3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",u3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",d3=new Map([[Tt.ADD,L2],[Tt.ALPHA,P2],[Tt.AVERAGE,O2],[Tt.COLOR,I2],[Tt.COLOR_BURN,B2],[Tt.COLOR_DODGE,F2],[Tt.DARKEN,z2],[Tt.DIFFERENCE,H2],[Tt.DIVIDE,G2],[Tt.DST,null],[Tt.EXCLUSION,k2],[Tt.HARD_LIGHT,V2],[Tt.HARD_MIX,j2],[Tt.HUE,X2],[Tt.INVERT,W2],[Tt.INVERT_RGB,q2],[Tt.LIGHTEN,Y2],[Tt.LINEAR_BURN,Z2],[Tt.LINEAR_DODGE,K2],[Tt.LINEAR_LIGHT,Q2],[Tt.LUMINOSITY,J2],[Tt.MULTIPLY,$2],[Tt.NEGATION,e3],[Tt.NORMAL,t3],[Tt.OVERLAY,n3],[Tt.PIN_LIGHT,i3],[Tt.REFLECT,a3],[Tt.SATURATION,s3],[Tt.SCREEN,r3],[Tt.SOFT_LIGHT,o3],[Tt.SRC,l3],[Tt.SUBTRACT,c3],[Tt.VIVID_LIGHT,u3]]),f3=class extends Na{constructor(s,e=1){super(),this._blendFunction=s,this.opacity=new pn(e)}getOpacity(){return this.opacity.value}setOpacity(s){this.opacity.value=s}get blendFunction(){return this._blendFunction}set blendFunction(s){this._blendFunction=s,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(s){this.blendFunction=s}getShaderCode(){return d3.get(this.blendFunction)}},s_=class extends Na{constructor(s,e,{attributes:i=ks.NONE,blendFunction:r=Tt.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:f=null,vertexShader:h=null}={}){super(),this.name=s,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=h,this.defines=l,this.uniforms=c,this.extensions=f,this.blendMode=new f3(r),this.blendMode.addEventListener("change",m=>this.setChanged()),this._inputColorSpace=Xr,this._outputColorSpace=Zi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(s){this._inputColorSpace=s,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(s){this._outputColorSpace=s,this.setChanged()}set mainScene(s){}set mainCamera(s){}getName(){return this.name}setRenderer(s){this.renderer=s}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(s){this.attributes=s,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(s){this.fragmentShader=s,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(s){this.vertexShader=s,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(s,e=il){}update(s,e,i){}setSize(s,e){}initialize(s,e,i){}dispose(){for(const s of Object.keys(this)){const e=this[s];(e instanceof Wn||e instanceof Yr||e instanceof Dn||e instanceof ps)&&this[s].dispose()}}},iv=class extends ps{constructor(s,e,i=null){super("RenderPass",s,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new a_,this.overrideMaterialManager=i===null?null:new nv(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get renderToScreen(){return super.renderToScreen}set renderToScreen(s){super.renderToScreen=s,this.clearPass.renderToScreen=s}get overrideMaterial(){const s=this.overrideMaterialManager;return s!==null?s.material:null}set overrideMaterial(s){const e=this.overrideMaterialManager;s!==null?e!==null?e.setMaterial(s):this.overrideMaterialManager=new nv(s):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(s){this.overrideMaterial=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getSelection(){return this.selection}setSelection(s){this.selection=s}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(s){this.ignoreBackground=s}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(s){this.skipShadowMapUpdate=s}getClearPass(){return this.clearPass}render(s,e,i,r,l){const c=this.scene,f=this.camera,h=this.selection,m=f.layers.mask,p=c.background,S=s.shadowMap.autoUpdate,_=this.renderToScreen?null:e;h!==null&&f.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(s.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(s,e),s.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(s,c,f):s.render(c,f),f.layers.mask=m,c.background=p,s.shadowMap.autoUpdate=S}},h3=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,p3="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",m3=class extends ei{constructor(s,e,i,r,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:au.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new pn(null),depthBuffer:new pn(null),resolution:new pn(new gt),texelSize:new pn(new gt),cameraNear:new pn(.3),cameraFar:new pn(1e3),aspect:new pn(1),time:new pn(0)},blending:Fi,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),s&&this.setShaderParts(s),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(r)}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){this.uniforms.depthBuffer.value=s}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}setDepthBuffer(s,e=il){this.depthBuffer=s,this.depthPacking=e}setShaderData(s){this.setShaderParts(s.shaderParts),this.setDefines(s.defines),this.setUniforms(s.uniforms),this.setExtensions(s.extensions)}setShaderParts(s){return this.fragmentShader=h3.replace(Lt.FRAGMENT_HEAD,s.get(Lt.FRAGMENT_HEAD)||"").replace(Lt.FRAGMENT_MAIN_UV,s.get(Lt.FRAGMENT_MAIN_UV)||"").replace(Lt.FRAGMENT_MAIN_IMAGE,s.get(Lt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=p3.replace(Lt.VERTEX_HEAD,s.get(Lt.VERTEX_HEAD)||"").replace(Lt.VERTEX_MAIN_SUPPORT,s.get(Lt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(s){for(const e of s.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(s){for(const e of s.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(s){this.extensions={};for(const e of s)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(s){this.encodeOutput!==s&&(s?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(s){return this.encodeOutput}setOutputEncodingEnabled(s){this.encodeOutput=s}get time(){return this.uniforms.time.value}set time(s){this.uniforms.time.value=s}setDeltaTime(s){this.uniforms.time.value+=s}adoptCameraSettings(s){this.copyCameraSettings(s)}copyCameraSettings(s){s&&(this.uniforms.cameraNear.value=s.near,this.uniforms.cameraFar.value=s.far,s instanceof Ti?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(s,e){const i=this.uniforms;i.resolution.value.set(s,e),i.texelSize.value.set(1/s,1/e),i.aspect.value=s/e}static get Section(){return Lt}};function av(s,e,i){for(const r of e){const l="$1"+s+r.charAt(0).toUpperCase()+r.slice(1),c=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const f of i.entries())f[1]!==null&&i.set(f[0],f[1].replace(c,l))}}function g3(s,e,i){let r=e.getFragmentShader(),l=e.getVertexShader();const c=r!==void 0&&/mainImage/.test(r),f=r!==void 0&&/mainUv/.test(r);if(i.attributes|=e.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(i.attributes&ks.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=i.shaderParts;let p=m.get(Lt.FRAGMENT_HEAD)||"",S=m.get(Lt.FRAGMENT_MAIN_UV)||"",_=m.get(Lt.FRAGMENT_MAIN_IMAGE)||"",x=m.get(Lt.VERTEX_HEAD)||"",y=m.get(Lt.VERTEX_MAIN_SUPPORT)||"";const E=new Set,C=new Set;if(f&&(S+=`	${s}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const w=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);y+=`	${s}MainSupport(`,y+=w?`vUv);
`:`);
`;for(const U of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const O of U[1].split(/\s*,\s*/))i.varyings.add(O),E.add(O),C.add(O);for(const U of l.matchAll(h))C.add(U[1])}for(const w of r.matchAll(h))C.add(w[1]);for(const w of e.defines.keys())C.add(w.replace(/\([\w\s,]*\)/g,""));for(const w of e.uniforms.keys())C.add(w);C.delete("while"),C.delete("for"),C.delete("if"),e.uniforms.forEach((w,U)=>i.uniforms.set(s+U.charAt(0).toUpperCase()+U.slice(1),w)),e.defines.forEach((w,U)=>i.defines.set(s+U.charAt(0).toUpperCase()+U.slice(1),w));const M=new Map([["fragment",r],["vertex",l]]);av(s,C,i.defines),av(s,C,M),r=M.get("fragment"),l=M.get("vertex");const b=e.blendMode;if(i.blendModes.set(b.blendFunction,b),c){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(_+=e.inputColorSpace===mn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Zi?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const w=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${s}MainImage(color0, UV, `,(i.attributes&ks.DEPTH)!==0&&w.test(r)&&(_+="depth, ",i.readDepth=!0),_+=`color1);
	`;const U=s+"BlendOpacity";i.uniforms.set(U,b.opacity),_+=`color0 = blend${b.blendFunction}(color0, color1, ${U});

	`,p+=`uniform float ${U};

`}if(p+=r+`
`,l!==null&&(x+=l+`
`),m.set(Lt.FRAGMENT_HEAD,p),m.set(Lt.FRAGMENT_MAIN_UV,S),m.set(Lt.FRAGMENT_MAIN_IMAGE,_),m.set(Lt.VERTEX_HEAD,x),m.set(Lt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const w of e.extensions)i.extensions.add(w)}}var sv=class extends ps{constructor(s,...e){super("EffectPass"),this.fullscreenMaterial=new m3(null,null,null,s),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(s){for(const e of this.effects)e.mainScene=s}set mainCamera(s){this.fullscreenMaterial.copyCameraSettings(s);for(const e of this.effects)e.mainCamera=s}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(s){this.fullscreenMaterial.encodeOutput=s}get dithering(){return this.fullscreenMaterial.dithering}set dithering(s){const e=this.fullscreenMaterial;e.dithering=s,e.needsUpdate=!0}setEffects(s){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=s.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const s=new U2;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===Tt.DST)s.attributes|=f.getAttributes()&ks.DEPTH;else{if((s.attributes&f.getAttributes()&ks.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);g3("e"+e++,f,s)}let i=s.shaderParts.get(Lt.FRAGMENT_HEAD),r=s.shaderParts.get(Lt.FRAGMENT_MAIN_IMAGE),l=s.shaderParts.get(Lt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const f of s.blendModes.values())i+=f.getShaderCode().replace(c,`blend${f.blendFunction}`)+`
`;(s.attributes&ks.DEPTH)!==0?(s.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,s.colorSpace===mn&&(r+=`color0 = sRGBToLinear(color0);
	`),s.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,s.defines.set("UV","transformedUv")):s.defines.set("UV","vUv"),s.shaderParts.set(Lt.FRAGMENT_HEAD,i),s.shaderParts.set(Lt.FRAGMENT_MAIN_IMAGE,r),s.shaderParts.set(Lt.FRAGMENT_MAIN_UV,l);for(const[f,h]of s.shaderParts)h!==null&&s.shaderParts.set(f,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(s)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(s,e=il){this.fullscreenMaterial.depthBuffer=s,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(s,e)}render(s,e,i,r,l){for(const c of this.effects)c.update(s,e,r);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=r*this.timeScale,s.setRenderTarget(this.renderToScreen?null:i),s.render(this.scene,this.camera)}}setSize(s,e){this.fullscreenMaterial.setSize(s,e);for(const i of this.effects)i.setSize(s,e)}initialize(s,e,i){this.renderer=s;for(const r of this.effects)r.initialize(s,e,i);this.updateMaterial(),i!==void 0&&i!==Vn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const s of this.effects)s.removeEventListener("change",this.listener),s.dispose()}handleEvent(s){s.type==="change"&&this.recompile()}};const x3=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d");if(!i)throw new Error("2D context not available");i.fillStyle="black",i.fillRect(0,0,e.width,e.height);const r=new Dn(e);r.minFilter=un,r.magFilter=un,r.generateMipmaps=!1;const l=[];let c=null;const f=64;let h=.1*64;const m=1/f,p=()=>{i.fillStyle="black",i.fillRect(0,0,e.width,e.height)},S=y=>{const E={x:y.x*64,y:(1-y.y)*64};let C=1;const M=O=>Math.sin(O*Math.PI/2),b=O=>-O*(O-2);y.age<f*.3?C=M(y.age/(f*.3)):C=b(1-(y.age-f*.3)/(f*.7))||0,C*=y.force;const w=`${(y.vx+1)/2*255}, ${(y.vy+1)/2*255}, ${C*255}`,U=320;i.shadowOffsetX=U,i.shadowOffsetY=U,i.shadowBlur=h,i.shadowColor=`rgba(${w},${.22*C})`,i.beginPath(),i.fillStyle="rgba(255,0,0,1)",i.arc(E.x-U,E.y-U,h,0,Math.PI*2),i.fill()};return{canvas:e,texture:r,addTouch:y=>{let E=0,C=0,M=0;if(c){const b=y.x-c.x,w=y.y-c.y;if(b===0&&w===0)return;const U=b*b+w*w,O=Math.sqrt(U);C=b/(O||1),M=w/(O||1),E=Math.min(U*1e4,1)}c={x:y.x,y:y.y},l.push({x:y.x,y:y.y,age:0,force:E,vx:C,vy:M})},update:()=>{p();for(let y=l.length-1;y>=0;y--){const E=l[y],C=E.force*m*(1-E.age/f);E.x+=E.vx*C,E.y+=E.vy*C,E.age++,E.age>f&&l.splice(y,1)}for(let y=0;y<l.length;y++)S(l[y]);r.needsUpdate=!0},set radiusScale(y){h=.1*64*y},get radiusScale(){return h/(.1*64)},size:64}},v3=(s,e)=>{const i=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new s_("LiquidEffect",i,{uniforms:new Map([["uTexture",new pn(s)],["uStrength",new pn(e?.strength??.025)],["uTime",new pn(0)],["uFreq",new pn(e?.freq??4.5)]])})},rv={square:0,circle:1,triangle:2,diamond:3},_3=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,S3=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,th=10,y3=({variant:s="square",pixelSize:e=3,color:i="#B497CF",className:r,style:l,antialias:c=!0,patternScale:f=2,patternDensity:h=1,liquid:m=!1,liquidStrength:p=.1,liquidRadius:S=1,pixelSizeJitter:_=0,enableRipples:x=!0,rippleIntensityScale:y=1,rippleThickness:E=.1,rippleSpeed:C=.3,liquidWobbleSpeed:M=4.5,autoPauseOffscreen:b=!0,speed:w=.5,transparent:U=!0,edgeFade:O=.5,noiseAmount:V=0})=>{const I=De.useRef(null),z=De.useRef({visible:!0}),A=De.useRef(w),B=De.useRef(null),Y=De.useRef(null);return De.useEffect(()=>{const H=I.current;if(!H)return;A.current=w;const q=["antialias","liquid","noiseAmount"],ee={antialias:c,liquid:m,noiseAmount:V};let ae=!1;if(!B.current)ae=!0;else if(Y.current){for(const G of q)if(Y.current[G]!==ee[G]){ae=!0;break}}if(ae){if(B.current){const Ve=B.current;Ve.resizeObserver?.disconnect(),cancelAnimationFrame(Ve.raf),Ve.quad?.geometry.dispose(),Ve.material.dispose(),Ve.composer?.dispose(),Ve.renderer.dispose(),Ve.renderer.forceContextLoss(),Ve.renderer.domElement.parentElement===H&&H.removeChild(Ve.renderer.domElement),B.current=null}const G=document.createElement("canvas"),D=new b2({canvas:G,antialias:c,alpha:!0,powerPreference:"high-performance"});D.domElement.style.width="100%",D.domElement.style.height="100%",D.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.appendChild(D.domElement),U?D.setClearAlpha(0):D.setClearColor(0,1);const F={uResolution:{value:new gt(0,0)},uTime:{value:0},uColor:{value:new Bt(i)},uClickPos:{value:Array.from({length:th},()=>new gt(-1,-1))},uClickTimes:{value:new Float32Array(th)},uShapeType:{value:rv[s]??0},uPixelSize:{value:e*D.getPixelRatio()},uScale:{value:f},uDensity:{value:h},uPixelJitter:{value:_},uEnableRipples:{value:x?1:0},uRippleSpeed:{value:C},uRippleThickness:{value:E},uRippleIntensity:{value:y},uEdgeFade:{value:O}},$=new qh,de=new ru(-1,1,1,-1,0,1),ye=new ei({vertexShader:_3,fragmentShader:S3,uniforms:F,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:jh}),P=new ol(2,2),Z=new Hi(P,ye);$.add(Z);const ge=new Ab,Me=()=>{const Ve=H.clientWidth||1,lt=H.clientHeight||1;D.setSize(Ve,lt,!1),F.uResolution.value.set(D.domElement.width,D.domElement.height),B.current?.composer&&B.current.composer.setSize(D.domElement.width,D.domElement.height),F.uPixelSize.value=e*D.getPixelRatio()};Me();const Ae=new ResizeObserver(Me);Ae.observe(H);const be=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Ve=new Uint32Array(1);return window.crypto.getRandomValues(Ve),Ve[0]/4294967295}return Math.random()})()*1e3;let xe,Oe,Je;if(m){Oe=x3(),Oe.radiusScale=S,xe=new tv(D);const Ve=new iv($,de);Je=v3(Oe.texture,{strength:p,freq:M});const lt=new sv(de,Je);lt.renderToScreen=!0,xe.addPass(Ve),xe.addPass(lt)}if(V>0){xe||(xe=new tv(D),xe.addPass(new iv($,de)));const Ve=new s_("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new pn(0)],["uAmount",new pn(V)]])}),lt=new sv(de,Ve);lt.renderToScreen=!0,xe&&xe.passes.length>0&&xe.passes.forEach(yt=>yt.renderToScreen=!1),xe.addPass(lt)}xe&&xe.setSize(D.domElement.width,D.domElement.height);const Qe=Ve=>{const lt=D.domElement.getBoundingClientRect(),yt=D.domElement.width/lt.width,Xt=D.domElement.height/lt.height,W=(Ve.clientX-lt.left)*yt,$t=(lt.height-(Ve.clientY-lt.top))*Xt;return{fx:W,fy:$t,w:D.domElement.width,h:D.domElement.height}},Ft=Ve=>{const{fx:lt,fy:yt}=Qe(Ve),Xt=B.current?.clickIx??0;F.uClickPos.value[Xt].set(lt,yt),F.uClickTimes.value[Xt]=F.uTime.value,B.current&&(B.current.clickIx=(Xt+1)%th)},dt=Ve=>{if(!Oe)return;const{fx:lt,fy:yt,w:Xt,h:W}=Qe(Ve);Oe.addTouch({x:lt/Xt,y:yt/W})};D.domElement.addEventListener("pointerdown",Ft,{passive:!0}),D.domElement.addEventListener("pointermove",dt,{passive:!0});let ft=0;const wt=()=>{if(b&&!z.current.visible){ft=requestAnimationFrame(wt);return}F.uTime.value=be+ge.getElapsedTime()*A.current,Je&&(Je.uniforms.get("uTime").value=F.uTime.value),xe?(Oe&&Oe.update(),xe.passes.forEach(Ve=>{const lt=Ve.effects;lt&&lt.forEach(yt=>{const Xt=yt.uniforms?.get("uTime");Xt&&(Xt.value=F.uTime.value)})}),xe.render()):D.render($,de),ft=requestAnimationFrame(wt)};ft=requestAnimationFrame(wt),B.current={renderer:D,scene:$,camera:de,material:ye,clock:ge,clickIx:0,uniforms:F,resizeObserver:Ae,raf:ft,quad:Z,timeOffset:be,composer:xe,touch:Oe,liquidEffect:Je}}else{const G=B.current;if(G.uniforms.uShapeType.value=rv[s]??0,G.uniforms.uPixelSize.value=e*G.renderer.getPixelRatio(),G.uniforms.uColor.value.set(i),G.uniforms.uScale.value=f,G.uniforms.uDensity.value=h,G.uniforms.uPixelJitter.value=_,G.uniforms.uEnableRipples.value=x?1:0,G.uniforms.uRippleIntensity.value=y,G.uniforms.uRippleThickness.value=E,G.uniforms.uRippleSpeed.value=C,G.uniforms.uEdgeFade.value=O,U?G.renderer.setClearAlpha(0):G.renderer.setClearColor(0,1),G.liquidEffect){const D=G.liquidEffect;D&&(D.value=p);const F=G.liquidEffect.uniforms.get("uFreq");F&&(F.value=M)}G.touch&&(G.touch.radiusScale=S)}return Y.current=ee,()=>{if(B.current&&ae||!B.current)return;const G=B.current;G.resizeObserver?.disconnect(),cancelAnimationFrame(G.raf),G.quad?.geometry.dispose(),G.material.dispose(),G.composer?.dispose(),G.renderer.dispose(),G.renderer.forceContextLoss(),G.renderer.domElement.parentElement===H&&H.removeChild(G.renderer.domElement),B.current=null}},[c,m,V,e,f,h,x,y,E,C,_,O,U,p,S,M,b,s,i,w]),g.jsx("div",{"code-path":"src/components/PixelBlast.jsx:600:5",ref:I,className:`pixel-blast-container ${r??""}`,style:l,"aria-label":"PixelBlast interactive background"})};function Ra(){return g.jsx("div",{"code-path":"src/components/MainSectionBackground.tsx:5:5",className:"main-section-background","aria-hidden":"true",children:g.jsx(y3,{"code-path":"src/components/MainSectionBackground.tsx:6:7",variant:"diamond",pixelSize:2,color:"#0a4f12",patternScale:2,patternDensity:1,enableRipples:!0,rippleSpeed:.25,rippleThickness:.1,rippleIntensityScale:1,speed:.7,transparent:!0,edgeFade:.5})})}function b3({id:s,background:e="primary",layout:i,microLabel:r,headline:l,body:c,imageSrc:f,imageAlt:h,items:m=[],ctaText:p,ctaHref:S="#",ctaVariant:_="link",ctaOnClick:x}){const y=i==="left-photo",E=e==="primary"?"bg-primary-dark":"bg-secondary-dark";return g.jsxs("section",{"code-path":"src/sections/ContentSection.tsx:39:5",id:s,className:`${E} relative overflow-hidden flex items-center py-[12vh] lg:py-[14vh]`,children:[g.jsx(Ra,{"code-path":"src/sections/ContentSection.tsx:43:7"}),g.jsxs("div",{"code-path":"src/sections/ContentSection.tsx:44:7",className:`relative z-10 w-full px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${y?"":"lg:grid-flow-dense"}`,children:[g.jsx("div",{"code-path":"src/sections/ContentSection.tsx:46:9",className:`photo-frame aspect-[3/4] max-h-[72vh] ${y?"":"lg:col-start-2"}`,children:g.jsx("img",{"code-path":"src/sections/ContentSection.tsx:47:11",src:f,alt:h,className:"w-full h-full object-cover"})}),g.jsxs("div",{"code-path":"src/sections/ContentSection.tsx:55:9",className:`flex flex-col justify-center ${y?"":"lg:col-start-1 lg:row-start-1"}`,children:[g.jsx("span",{"code-path":"src/sections/ContentSection.tsx:57:11",className:"micro-label text-secondary-light mb-6",children:r}),g.jsx("h2",{"code-path":"src/sections/ContentSection.tsx:62:11",className:"headline-lg text-primary-light mb-6",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:l}),g.jsx("p",{"code-path":"src/sections/ContentSection.tsx:67:11",className:"body-text text-secondary-light mb-8",children:c}),m.length>0&&g.jsx("div",{"code-path":"src/sections/ContentSection.tsx:73:13",className:"space-y-4 mb-8",children:m.map((C,M)=>g.jsxs("div",{"code-path":"src/sections/ContentSection.tsx:75:17",className:"hover-panel border border-white/10 bg-primary-dark/30 p-4 flex flex-col",children:[g.jsx("span",{"code-path":"src/sections/ContentSection.tsx:76:19",className:"micro-label text-accent-green mb-1",children:C.label}),g.jsx("span",{"code-path":"src/sections/ContentSection.tsx:77:19",className:"body-text text-secondary-light",style:{fontSize:"0.9rem"},children:C.description})]},M))}),p&&(x?g.jsxs("button",{"code-path":"src/sections/ContentSection.tsx:88:15",type:"button",onClick:x,className:_==="button"?"cta-button w-fit":"text-link inline-flex items-center gap-2",children:[g.jsx("span",{"code-path":"src/sections/ContentSection.tsx:93:17",children:p}),g.jsx(zi,{"code-path":"src/sections/ContentSection.tsx:94:17",size:_==="button"?16:14})]}):g.jsxs("a",{"code-path":"src/sections/ContentSection.tsx:97:15",href:S,className:_==="button"?"cta-button w-fit":"text-link inline-flex items-center gap-2",children:[g.jsx("span",{"code-path":"src/sections/ContentSection.tsx:101:17",children:p}),g.jsx(zi,{"code-path":"src/sections/ContentSection.tsx:102:17",size:_==="button"?16:14})]}))]})]})]})}const Gc=[{id:1,label:"Kalman Filter For Volatility Surface",shortDesc:"Real-time options theoretical value updates using an Unscented Kalman Filter.",fullDesc:"We construct a methodology that offers a quick way for option market makers to update their theoretical values for options in real-time. We use an Unscented Kalman Filter (UKF) to quickly calibrate the implied volatility surface parameterization, which replaces the need for a costly objective function that needs to be minimized, allowing for real-time updates of the volatility surface.",pdfLink:"/project-pdfs/kalman-filter-for-volatility-surface.pdf"},{id:2,label:"Sentiment Analysis Project",shortDesc:"Predicting stock movement using sentiment from social/news/event text plus price data.",fullDesc:"This project aims to predict stock price movements by integrating sentiment analysis of Twitter posts, financial news articles, and Kalshi event contract names with historical stock data. By quantifying public sentiment overall and toward specific stocks, we seek to uncover patterns and correlations that influence market dynamics. A Long-Short-Term Memory (LSTM) neural network will model temporal dependencies within the combined sentiment metrics and stock prices.",pdfLink:"/project-pdfs/sentiment-analysis-project.pdf"},{id:3,label:"Kalshi Predictive Position Building",shortDesc:"Implement market making strategies to provide and take event liquidity.",fullDesc:"We use market making strategies to defined by the level of uncertainty (risk averse and eager counterparties) to define optimal outcomes to build into an event contract position. Given high uncertainty in the market the optimal response is to be more certain, the opposite response is to make the market of an eager competitor with high certainty.",pdfLink:"/project-pdfs/kalshi-predictive-position-building.pdf"}],M3=[{id:1,year:2024,label:"Front Running Event Contracts",fullDesc:'In this project, our team developed a trade surveillance system to identify front-running behaviors within event contracts, focusing on order book imbalances that precede major price-moving outcomes. We analyzed high-frequency transaction data and limit order flows to build a scoring model that flags suspicious liquidity-taking trades occurring just before significant event-driven volatility. The completed framework successfully distinguished between legitimate hedging strategies and predatory "trading ahead," providing actionable insights for improving market integrity and regulatory compliance.',members:"Alexandre T, Andrew S, Dzara M"},{id:2,year:2024,label:"Mean Reversion Portfolio",fullDesc:"Our team engineered a mean-reverting portfolio by applying L1-regularization to select a sparse, tradable subset of assets from a high-dimensional universe. We formulated an optimization problem that maximizes the Ornstein-Uhlenbeck reversion speed while simultaneously minimizing the number of active positions to reduce transaction costs. The final framework provided a robust statistical arbitrage strategy that maintained high predictive accuracy even under significant market regime shifts.",members:"Daniel S, Joseph M, Liam L, Moussa K"},{id:3,year:2025,label:"Real-Time Value: A Model for Exchange-Sportsbook Edge Capture",fullDesc:'In this project, our team engineered a real-time valuation engine that identifies mispriced odds by systematically comparing traditional sportsbook lines against the high-efficiency consensus of peer-to-peer betting exchanges. We developed a Bayesian framework to filter market noise and generate credible intervals around true implied probabilities, triggering execution when discrepancies exceeded a pre-defined profitability threshold. The final model serves as a robust statistical arbitrage tool, successfully capturing "edge" through automated liquidity monitoring and sub-second execution logic.',members:"Eli W, Joseph M"},{id:4,year:2025,label:"Kalshi Predictive Position Building",fullDesc:"We use market making strategies to defined by the level of uncertainty (risk averse and eager counterparties) to define optimal outcomes to build into an event contract position. Given high uncertainty in the market the optimal response is to be more certain, the opposite response is to make the market of an eager competitor with high certainty.",members:"Alexandre T, Arthur F, Zachary J"},{id:5,year:2025,label:"Pairs Trading Strategy Exploration",fullDesc:'Our team engineered an automated pairs trading system that identifies and exploits transient price discrepancies between highly cointegrated asset pairs. We utilized Kalman Filters for dynamic hedge ratio estimation and implemented an Ornstein-Uhlenbeck process to model the mean-reversion speed of the spread. The final framework successfully backtested a market-neutral strategy, delivering consistent alpha by capturing sub-second "real-time value" during periods of heightened sectoral volatility.',members:"Arthur F, William V"},{id:6,year:2025,label:"Volatility-Regime Markov Chain",fullDesc:'In this project, our team engineered a Hidden Markov Model (HMM) to systematically identify and transition between distinct volatility regimes in real-time market data. We utilized maximum likelihood estimation to detect latent states—such as "quiet growth" versus "panic selling"—allowing for dynamic position sizing based on the prevailing risk environment. The final framework successfully enhanced a mean-reversion strategy by automatically scaling exposure down during high-volatility regimes to preserve capital and mitigate tail risk.',members:"Daniel S"},{id:7,year:2025,label:"High-Frequency Trading with Fractional Brownian Motion",fullDesc:'In this project, our team engineered a high-frequency trading system that utilizes Fractional Brownian Motion (fBM) to model asset price paths with long-range dependence and "memory" effects. We developed a real-time estimator for the Hurst exponent to distinguish between trending and mean-reverting regimes, allowing for dynamic adjustments in trade execution. The final framework successfully enhanced alpha generation by capturing sub-second inefficiencies that traditional Markovian models often overlook.',members:"Arthur F, Amber T, Matt C"},{id:8,year:2025,label:"Markov Switching Variance Gamma",fullDesc:'In this project, our team engineered a Markov Switching framework to capture the heavy tails and volatility clusters of asset returns by allowing Variance Gamma process parameters to transition between latent market states. We utilized an Expectation-Maximization (EM) algorithm to calibrate the model, successfully capturing the "jump-diffusion" characteristics that traditional Black-Scholes models often overlook. The final system improved option pricing accuracy and risk management by dynamically adjusting to regime shifts in skewness and kurtosis.',members:"Kateryna C, Rodrigo S"},{id:9,year:2025,label:"Momentum Risk Management",fullDesc:'In this project, our team engineered a dynamic risk overlay for momentum strategies to mitigate the impact of sudden trend reversals and "momentum crashes." We utilized a volatility-scaling approach combined with cross-sectional dispersion metrics to adjust position sizes in real-time as market conditions shifted. The final framework significantly improved the Sharpe ratio by preserving capital during high-risk regimes while maintaining exposure to strong performance trends.',members:"Alexandre T, Edward C, Harmony L, Hope L"},{id:10,year:2025,label:"Pricing Convertible Bonds Using Monte Carlo Simulation",fullDesc:"n this project, our team developed a Monte Carlo simulation framework to value convertible bonds by integrating path-dependent features such as early redemption, soft calls, and downward adjustment clauses. We utilized the Least Squares Monte Carlo (LSM) method to determine optimal exercise boundaries for the embedded American-style options while accounting for the dynamic coupling of credit risk and stock price volatility. The completed model successfully provided more accurate pricing than traditional lattice-based methods, particularly for complex hybrid securities in volatile market regimes.",members:"Alexi T, Alan W, Megumi A"},{id:11,year:2025,label:"Sentiment Metrics and Investor Demand",fullDesc:"In this project, our team engineered a system to quantify investor sentiment and its direct impact on asset demand shocks, distinguishing between institutional and individual behavioral drivers. We utilized Natural Language Processing (NLP) to extract real-time features from news and social media, integrating them into a predictive framework to identify shifts from safe to speculative securities. The completed project successfully demonstrated that sentiment-induced demand serves as a robust indicator for short-term market mispricing and return reversals across different volatility regimes. ",members:"Arthur F, Dmytro P, Emily P, Mantra S"},{id:12,year:2025,label:"Forecasting Foreign Exchange Behavior",fullDesc:'In this project, our team developed a forecasting framework that utilizes Principal Component Analysis (PCA) to identify the dominant "eigen-factors" driving movements across a basket of global currencies. We engineered an adaptive eigenvector scaling model that dynamically reweights these factors to capture shifting correlations and lead-lag relationships during different market regimes. The completed system successfully enhanced FX return predictions and risk decomposition, providing a more robust alternative to traditional static correlation models in high-dimensional currency markets.',members:"Alexi T, Andy L, Bryan L, Saikaung S"},{id:13,year:2024,label:"Kelly Criterion Portfoilio Optimization",fullDesc:"In this project, our team engineered a dynamic asset allocation system by applying the Kelly Criterion to maximize the long-term exponential growth rate of a diversified portfolio. We developed a fractional Kelly model to mitigate high turnover and extreme drawdown risks, incorporating a shrinkage-based covariance estimator to stabilize return forecasts. The completed framework successfully outperformed equal-weighted benchmarks in backtesting, demonstrating superior risk-adjusted returns through mathematically optimized position sizing. ",members:"William V"},{id:14,year:2024,label:"News Sentiment Analysis",fullDesc:"In this project, our team engineered a real-time sentiment pipeline that converts unstructured financial news and headlines into actionable trading signals. We utilized FinBERT and LLM-based classification to extract polarity scores, which were then integrated into a Long Short-Term Memory (LSTM) network alongside historical price data. The completed framework demonstrated that incorporating news-based variables significantly enhanced predictive accuracy, identifying short-term market mispricings that traditional technical indicators often overlook.",members:"Joseph G, Joseph M"},{id:15,year:2024,label:"Kelly-Criterion Portfolio Optimization with Re-Sampling",fullDesc:'In this project, our team enhanced the Kelly Criterion by integrating Resampled Efficiency to address the formula’s inherent sensitivity to estimation errors in mean returns and covariance. We utilized Monte Carlo simulations to generate a distribution of optimal portfolios, averaging them to create a "resampled" allocation that is more robust to market noise. The completed framework significantly reduced portfolio turnover and extreme drawdowns compared to a traditional Kelly approach while maintaining superior long-term exponential growth.',members:"William V"},{id:16,year:2024,label:"Kelly-Criterion Portfolio Optimization with Re-Sampling",fullDesc:"In this project, our team engineered an automated statistical arbitrage system that identifies and exploits transient price discrepancies between highly cointegrated asset pairs. We utilized the Engle-Granger two-step method to establish long-term equilibrium and applied Kalman Filters to dynamically update the hedge ratio in real-time. The final framework successfully executed a market-neutral strategy, generating consistent alpha by capturing mean-reverting spreads while mitigating exposure to broader market volatility.",members:"Colin A, Nick G"},{id:17,year:2023,label:"Quantile ML Cross-Section Returns",fullDesc:"In this project, our team engineered a Quantile Regression framework combined with Machine Learning to model the conditional distribution of cross-sectional asset returns. We utilized Gradient Boosted Trees with pinball loss functions to predict specific return quantiles, allowing for a more granular assessment of tail risk and potential upside compared to traditional mean-based models. The completed project successfully generated robust factor signals that outperformed standard linear regressions by capturing non-linear relationships and conditional skewness across various market regimes.",members:"Elhaam B, Zhi L"},{id:18,year:2023,label:"Stock Factor Library",fullDesc:"In this project, our team engineered a high-performance factor research library designed to systematically compute and evaluate traditional and alternative alpha signals across a broad equity universe. We implemented a modular pipeline for calculating momentum, value, and quality factors, incorporating robust techniques like Winsorization and Z-score normalization to ensure cross-sectional comparability. The completed library serves as a scalable backtesting engine, enabling rapid factor attribution and the identification of decay profiles across different market regimes.",members:"William V, Elhaam B"},{id:19,year:2023,label:"Cointegration Dispersion Pairs Trade",fullDesc:"In this project, our team expanded the traditional pairs trading framework into a dispersion-based model by identifying cointegration clusters among multiple stocks within the same sector. We utilized Johansen tests to establish a long-term equilibrium between an index and its components, enabling us to trade the relative value of the basket's spread against the broader market. The final system successfully exploited implied volatility discrepancies and mean-reverting relationships, delivering a market-neutral return profile even during periods of individual stock decoupling.",members:"Colin A, Daniel S, Matt M,"},{id:20,year:2023,label:"Factor Momentum Trading",fullDesc:"In this project, our team engineered a factor momentum strategy that captures persistent trends in the performance of classic equity factors like value, size, and quality. We utilized a recursive weighting scheme based on historical information ratios to dynamically allocate capital toward the strongest-trending factors while de-emphasizing those showing signs of mean reversion. The completed framework successfully enhanced traditional static factor models by adapting to shifting market regimes and reducing the impact of factor crashes.",members:"Colin A, Zhi L"}];function E3(){const[s,e]=De.useState(null),[i,r]=De.useState(!1),l=Object.entries(M3.reduce((c,f)=>(c[f.year]||(c[f.year]=[]),c[f.year].push(f),c),{})).sort((c,f)=>Number(f[0])-Number(c[0]));return g.jsxs(g.Fragment,{children:[g.jsxs("section",{"code-path":"src/sections/ProjectsSection.tsx:185:7",id:"projects",className:"min-h-screen bg-primary-dark relative overflow-hidden flex items-center py-[10vh]",children:[g.jsx(Ra,{"code-path":"src/sections/ProjectsSection.tsx:189:9"}),g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:190:9",className:"relative z-10 w-full px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[g.jsx("div",{"code-path":"src/sections/ProjectsSection.tsx:192:11",className:"photo-frame aspect-[3/4] max-h-[72vh]",children:g.jsx("img",{"code-path":"src/sections/ProjectsSection.tsx:193:13",src:"https://images.pexels.com/photos/7794037/pexels-photo-7794037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1600&w=1200",alt:"Woman using a laptop in a project meeting",className:"w-full h-full object-cover"})}),g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:201:11",className:"flex flex-col justify-center",children:[g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:203:13",className:"micro-label text-secondary-light mb-6",children:"Projects"}),g.jsx("h2",{"code-path":"src/sections/ProjectsSection.tsx:208:13",className:"headline-lg text-primary-light mb-6",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"Our Current Work"}),g.jsx("p",{"code-path":"src/sections/ProjectsSection.tsx:213:13",className:"body-text text-secondary-light mb-8",children:"From alpha research to development, we build practical, relevant, hands-on projects."}),g.jsx("div",{"code-path":"src/sections/ProjectsSection.tsx:218:13",className:"space-y-4 mb-8",children:Gc.map(c=>g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:220:17",className:"hover-panel border border-white/10 bg-secondary-dark/35 p-4 flex flex-col",children:[g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:221:19",className:"micro-label text-accent-green mb-1",children:c.label}),g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:222:19",className:"body-text text-secondary-light",style:{fontSize:"0.9rem"},children:c.shortDesc})]},c.id))}),g.jsxs("button",{"code-path":"src/sections/ProjectsSection.tsx:230:13",onClick:()=>e(Gc[0]),className:"cta-button w-fit",children:[g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:234:15",children:"Learn More"}),g.jsx(zi,{"code-path":"src/sections/ProjectsSection.tsx:235:15",size:16})]}),g.jsx("button",{"code-path":"src/sections/ProjectsSection.tsx:237:13",onClick:()=>r(!0),className:"text-link mt-4 w-fit text-left",children:"Past Projects"})]})]})]}),s&&g.jsx("div",{"code-path":"src/sections/ProjectsSection.tsx:249:9",className:"fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6",children:g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:250:11",className:"bg-secondary-dark max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10",children:[g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:252:13",className:"flex items-center justify-between p-6 border-b border-white/10",children:[g.jsx("h3",{"code-path":"src/sections/ProjectsSection.tsx:253:15",className:"headline-lg text-primary-light",style:{fontSize:"1.5rem"},children:"Our Projects"}),g.jsx("button",{"code-path":"src/sections/ProjectsSection.tsx:256:15",onClick:()=>e(null),className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(el,{"code-path":"src/sections/ProjectsSection.tsx:260:17",size:24})})]}),g.jsx("div",{"code-path":"src/sections/ProjectsSection.tsx:265:13",className:"p-6",children:Gc.map(c=>g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:267:17",className:`mb-8 pb-8 ${c.id!==Gc.length?"border-b border-white/10":""}`,children:[g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:271:19",className:"flex items-start justify-between mb-3",children:[g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:272:21",className:"micro-label text-accent-green",children:c.label}),g.jsxs("a",{"code-path":"src/sections/ProjectsSection.tsx:273:21",href:c.pdfLink,className:"text-link inline-flex items-center gap-1 text-xs",target:"_blank",rel:"noopener noreferrer",children:[g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:279:23",children:"View PDF"}),g.jsx(Vc,{"code-path":"src/sections/ProjectsSection.tsx:280:23",size:12})]})]}),g.jsx("p",{"code-path":"src/sections/ProjectsSection.tsx:283:19",className:"body-text text-secondary-light",children:c.fullDesc})]},c.id))}),g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:291:13",className:"p-6 border-t border-white/10 flex justify-between items-center",children:[g.jsxs("a",{"code-path":"src/sections/ProjectsSection.tsx:292:15",href:"https://github.com/BaruchFinancialQuantsEngineers-FQE",target:"_blank",rel:"noopener noreferrer",className:"text-link inline-flex items-center gap-2",children:[g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:298:17",children:"View on GitHub"}),g.jsx(Vc,{"code-path":"src/sections/ProjectsSection.tsx:299:17",size:14})]}),g.jsx("button",{"code-path":"src/sections/ProjectsSection.tsx:301:15",onClick:()=>e(null),className:"cta-button",children:g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:305:17",children:"Close"})})]})]})}),i&&g.jsx("div",{"code-path":"src/sections/ProjectsSection.tsx:314:9",className:"fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6",children:g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:315:11",className:"bg-secondary-dark max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10",children:[g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:316:13",className:"flex items-center justify-between p-6 border-b border-white/10",children:[g.jsx("h3",{"code-path":"src/sections/ProjectsSection.tsx:317:15",className:"headline-lg text-primary-light",style:{fontSize:"1.5rem"},children:"Past Projects"}),g.jsx("button",{"code-path":"src/sections/ProjectsSection.tsx:320:15",onClick:()=>r(!1),className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(el,{"code-path":"src/sections/ProjectsSection.tsx:324:17",size:24})})]}),g.jsx("div",{"code-path":"src/sections/ProjectsSection.tsx:328:13",className:"p-6 space-y-4",children:l.map(([c,f])=>g.jsxs("details",{"code-path":"src/sections/ProjectsSection.tsx:330:17",className:"border border-white/10",children:[g.jsx("summary",{"code-path":"src/sections/ProjectsSection.tsx:331:19",className:"micro-label text-accent-green cursor-pointer px-4 py-3",children:c}),g.jsx("div",{"code-path":"src/sections/ProjectsSection.tsx:334:19",className:"px-4 pb-4 pt-2",children:f.map((h,m)=>g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:336:23",className:`py-4 ${m!==f.length-1?"border-b border-white/10":""}`,children:[g.jsx("div",{"code-path":"src/sections/ProjectsSection.tsx:340:25",className:"flex items-start justify-between mb-3",children:g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:341:27",className:"micro-label text-accent-green",children:h.label})}),g.jsx("p",{"code-path":"src/sections/ProjectsSection.tsx:343:25",className:"body-text text-secondary-light",children:h.fullDesc}),g.jsxs("p",{"code-path":"src/sections/ProjectsSection.tsx:346:25",className:"body-text text-secondary-light mt-3",style:{fontSize:"0.9rem"},children:[g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:347:27",className:"micro-label text-accent-green mr-2",children:"Members:"}),h.members]})]},h.id))})]},c))}),g.jsxs("div",{"code-path":"src/sections/ProjectsSection.tsx:357:13",className:"p-6 border-t border-white/10 flex justify-between items-center",children:[g.jsxs("a",{"code-path":"src/sections/ProjectsSection.tsx:358:15",href:"https://github.com/BaruchFinancialQuantsEngineers-FQE",target:"_blank",rel:"noopener noreferrer",className:"text-link inline-flex items-center gap-2",children:[g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:364:17",children:"View on GitHub"}),g.jsx(Vc,{"code-path":"src/sections/ProjectsSection.tsx:365:17",size:14})]}),g.jsx("button",{"code-path":"src/sections/ProjectsSection.tsx:367:15",onClick:()=>r(!1),className:"cta-button",children:g.jsx("span",{"code-path":"src/sections/ProjectsSection.tsx:371:17",children:"Close"})})]})]})})]})}const zr={SMOOTH_TAU:.25,MIN_COPIES:2,COPY_HEADROOM:2},nh=s=>typeof s=="number"?`${s}px`:s??void 0,T3=(s,e,i)=>{De.useEffect(()=>{if(!window.ResizeObserver){const l=()=>s();return window.addEventListener("resize",l),s(),()=>window.removeEventListener("resize",l)}const r=e.map(l=>{if(!l.current)return null;const c=new ResizeObserver(s);return c.observe(l.current),c});return s(),()=>{r.forEach(l=>l?.disconnect())}},[s,e,i])},A3=(s,e,i)=>{De.useEffect(()=>{const r=s.current?.querySelectorAll("img")??[];if(r.length===0){e();return}let l=r.length;const c=()=>{l-=1,l===0&&e()};return r.forEach(f=>{const h=f;h.complete?c():(h.addEventListener("load",c,{once:!0}),h.addEventListener("error",c,{once:!0}))}),()=>{r.forEach(f=>{f.removeEventListener("load",c),f.removeEventListener("error",c)})}},[e,s,i])},C3=(s,e,i,r,l,c,f)=>{const h=De.useRef(null),m=De.useRef(null),p=De.useRef(0),S=De.useRef(0);De.useEffect(()=>{const _=s.current;if(!_)return;const x=f?r:i;if(x>0){p.current=(p.current%x+x)%x;const E=f?`translate3d(0, ${-p.current}px, 0)`:`translate3d(${-p.current}px, 0, 0)`;_.style.transform=E}const y=E=>{m.current===null&&(m.current=E);const C=Math.max(0,E-m.current)/1e3;m.current=E;const M=l&&c!==void 0?c:e,b=1-Math.exp(-C/zr.SMOOTH_TAU);if(S.current+=(M-S.current)*b,x>0){let w=p.current+S.current*C;w=(w%x+x)%x,p.current=w;const U=f?`translate3d(0, ${-p.current}px, 0)`:`translate3d(${-p.current}px, 0, 0)`;_.style.transform=U}h.current=requestAnimationFrame(y)};return h.current=requestAnimationFrame(y),()=>{h.current!==null&&(cancelAnimationFrame(h.current),h.current=null),m.current=null}},[e,i,r,l,c,f,s])},r_=De.memo(({logos:s,speed:e=120,direction:i="left",width:r="100%",logoHeight:l=28,gap:c=32,pauseOnHover:f,hoverSpeed:h,fadeOut:m=!1,fadeOutColor:p,scaleOnHover:S=!1,renderItem:_,ariaLabel:x="Partner logos",className:y,style:E})=>{const C=De.useRef(null),M=De.useRef(null),b=De.useRef(null),[w,U]=De.useState(0),[O,V]=De.useState(0),[I,z]=De.useState(zr.MIN_COPIES),[A,B]=De.useState(!1),Y=De.useMemo(()=>{if(h!==void 0)return h;if(f===!0)return 0;if(f!==!1)return 0},[h,f]),H=i==="up"||i==="down",q=De.useMemo(()=>{const P=Math.abs(e);let Z;H?Z=i==="up"?1:-1:Z=i==="left"?1:-1;const ge=e<0?-1:1;return P*Z*ge},[e,i,H]),ee=De.useCallback(()=>{const P=C.current?.clientWidth??0,Z=b.current?.getBoundingClientRect?.(),ge=Z?.width??0,Me=Z?.height??0;if(H){const Ae=C.current?.parentElement?.clientHeight??0;if(C.current&&Ae>0){const te=Math.ceil(Ae);C.current.style.height!==`${te}px`&&(C.current.style.height=`${te}px`)}if(Me>0){V(Math.ceil(Me));const te=C.current?.clientHeight??Ae??Me,be=Math.ceil(te/Me)+zr.COPY_HEADROOM;z(Math.max(zr.MIN_COPIES,be))}}else if(ge>0){U(Math.ceil(ge));const Ae=Math.ceil(P/ge)+zr.COPY_HEADROOM;z(Math.max(zr.MIN_COPIES,Ae))}},[H]);T3(ee,[C,b],[s,c,l,H]),A3(b,ee,[s,c,l,H]),C3(M,q,w,O,A,Y,H);const ae=De.useMemo(()=>({"--logoloop-gap":`${c}px`,"--logoloop-logoHeight":`${l}px`,...p&&{"--logoloop-fadeColor":p}}),[c,l,p]),G=De.useMemo(()=>["logoloop",H?"logoloop--vertical":"logoloop--horizontal",m&&"logoloop--fade",S&&"logoloop--scale-hover",y].filter(Boolean).join(" "),[H,m,S,y]),D=De.useCallback(()=>{Y!==void 0&&B(!0)},[Y]),F=De.useCallback(()=>{Y!==void 0&&B(!1)},[Y]),$=De.useCallback((P,Z)=>{if(_)return g.jsx("li",{"code-path":"src/components/LogoLoop.jsx:231:13",className:"logoloop__item",role:"listitem",children:_(P,Z)},Z);const ge="node"in P,Me=ge?g.jsx("span",{"code-path":"src/components/LogoLoop.jsx:238:11",className:"logoloop__node","aria-hidden":!!P.href&&!P.ariaLabel,children:P.node}):g.jsx("img",{"code-path":"src/components/LogoLoop.jsx:242:11",src:P.src,srcSet:P.srcSet,sizes:P.sizes,width:P.width,height:P.height,alt:P.alt??"",title:P.title,loading:"lazy",decoding:"async",draggable:!1}),Ae=ge?P.ariaLabel??P.title:P.alt??P.title,te=P.href?g.jsx("a",{"code-path":"src/components/LogoLoop.jsx:257:11",className:"logoloop__link",href:P.href,"aria-label":Ae||"logo link",target:"_blank",rel:"noreferrer noopener",children:Me}):Me;return g.jsx("li",{"code-path":"src/components/LogoLoop.jsx:270:11",className:"logoloop__item",role:"listitem",children:te},Z)},[_]),de=De.useMemo(()=>Array.from({length:I},(P,Z)=>g.jsx("ul",{"code-path":"src/components/LogoLoop.jsx:281:11",className:"logoloop__list",role:"list","aria-hidden":Z>0,ref:Z===0?b:void 0,children:s.map((ge,Me)=>$(ge,`${Z}-${Me}`))},`copy-${Z}`)),[I,s,$]),ye=De.useMemo(()=>({width:H?nh(r)==="100%"?void 0:nh(r):nh(r)??"100%",...ae,...E}),[r,ae,E,H]);return g.jsx("div",{"code-path":"src/components/LogoLoop.jsx:308:7",ref:C,className:G,style:ye,role:"region","aria-label":x,children:g.jsx("div",{"code-path":"src/components/LogoLoop.jsx:309:9",className:"logoloop__track",ref:M,onMouseEnter:D,onMouseLeave:F,children:de})})});r_.displayName="LogoLoop";const w3=[{alt:"American Express",src:"/logo_americanexpress.png"},{alt:"Bank of America",src:"/logo_bankofamerica.svg.png"},{alt:"Bloomberg",src:"/logo_bloomberg.svg.png"},{alt:"BNY Mellon",src:"/logo_bnymellon.svg.png"},{alt:"Cargill",src:"/logo_cargill.svg.png"},{alt:"Chimera",src:"/logo_chimera.svg.svg"},{alt:"Citi",src:"/logo_citi.png"},{alt:"Credit Agricole CIB",src:"/logo_creditagricolecib.svg.png"},{alt:"Deloitte",src:"/logo_deloitte.svg.png"},{alt:"Deutsche Bank",src:"/logo_deutschebank.svg.png"},{alt:"EY",src:"/logo_ey.svg.png"},{alt:"Fidelity",src:"/logo_fidelity.svg.svg"},{alt:"FTI Consulting",src:"/logo_fticonsulting.png.png"},{alt:"Goldman Sachs",src:"/logo_goldman.svg.svg"},{alt:"Intel",src:"/logo_intel.svg.svg"},{alt:"JPMorgan Chase",src:"/logo_jpmorganchase.svg.png"},{alt:"Marex Solutions",src:"/logo_marexsolutions.svg"},{alt:"Meta",src:"/logo_meta.svg.svg"},{alt:"MUFG",src:"/logo_mufg.png"},{alt:"PwC",src:"/logo_pwc.svg"},{ariaLabel:"Raymond James",node:g.jsx("span",{"code-path":"src/sections/AlumniSection.tsx:29:11",className:"alumni-logo-wordmark alumni-logo-wordmark--compact",children:"R. JAMES"})},{alt:"State Street",src:"/logo_statestreet.png"},{alt:"The Depository Trust & Clearing Corporation (DTCC)",src:"/logo_dtcc.png"},{alt:"VanEck",src:"/logo_vaneck.png"},{ariaLabel:"Wells Fargo",node:g.jsxs("span",{"code-path":"src/sections/AlumniSection.tsx:36:11",className:"alumni-logo-wordmark alumni-logo-wordmark--stacked",children:["WELLS",g.jsx("br",{"code-path":"src/sections/AlumniSection.tsx:36:85"}),"FARGO"]})},{ariaLabel:"Wolfe Research",node:g.jsx("span",{"code-path":"src/sections/AlumniSection.tsx:40:11",className:"alumni-logo-wordmark",children:"WOLFE"})}],ov=[{name:"William V",role:"Systematic Trading @Investment Bank",testimonial:"FQE prepares students for the 'real' Wall Street. By focusing on low-latency execution and model back-testing, members enter internships with a technical maturity that sets them apart from typical undergraduates."},{name:"Dzara M",role:"Senior Developer @Financial Data Provider",testimonial:"The FQE community is filled with like-minded students who are genuinely passionate about math and coding. It's the best place on campus to find a study partner for stochastic calculus or a teammate for a trading competition."},{name:"Jun T",role:"Commodities Trading @Financial Services Provider",testimonial:"By working on innovative projects like Unscented Kalman Filters for volatility surfaces or Sentiment Analysis, students gain hands-on technical experience that makes them competitive candidates for quantitative roles."},{name:"David M",role:"Quant Research @Investment Bank",testimonial:"I went from being having a traditional financial math background with an interest in coding to a competitive MFE candidate because the club pushed me to apply what I learn around Linear Algebra and C++ - the gatekeeper skills for any top program."},{name:"Zhi L",role:"Quant Trader @Hedge Fund",testimonial:"By working on innovative projects like Unscented Kalman Filters for volatility surfaces or Sentiment Analysis, students gain hands-on technical experience that makes them competitive candidates for quantitative roles and prepare me for graduate school applications."}];function R3(){const[s,e]=De.useState(!1);return g.jsxs("section",{"code-path":"src/sections/AlumniSection.tsx:81:5",id:"alumni",className:"min-h-screen bg-primary-dark relative overflow-hidden flex items-center py-[10vh]",children:[g.jsx(Ra,{"code-path":"src/sections/AlumniSection.tsx:85:7"}),g.jsxs("div",{"code-path":"src/sections/AlumniSection.tsx:86:7",className:"relative z-10 w-full px-[6vw]",children:[g.jsxs("div",{"code-path":"src/sections/AlumniSection.tsx:88:9",className:"mb-12",children:[g.jsx("span",{"code-path":"src/sections/AlumniSection.tsx:89:11",className:"micro-label text-secondary-light mb-4 block",children:"Alumni"}),g.jsx("h2",{"code-path":"src/sections/AlumniSection.tsx:92:11",className:"headline-lg text-primary-light",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"Where Alumni Are"}),g.jsx("p",{"code-path":"src/sections/AlumniSection.tsx:95:11",className:"body-text text-secondary-light mt-4 max-w-xl",children:"Our alumni build quantitative strategies, trading systems, and data technology at leading financial and technology firms."})]}),g.jsxs("div",{"code-path":"src/sections/AlumniSection.tsx:101:9",className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[g.jsxs("div",{"code-path":"src/sections/AlumniSection.tsx:102:11",className:"hover-panel border border-white/10 p-6",children:[g.jsx("span",{"code-path":"src/sections/AlumniSection.tsx:103:13",className:"micro-label text-accent-green mb-2 block",children:"ALPHA & PORTFOLIO STRATEGIES"}),g.jsx("p",{"code-path":"src/sections/AlumniSection.tsx:104:13",className:"body-text text-secondary-light text-sm",children:"Systematic funds and asset management firms"})]}),g.jsxs("div",{"code-path":"src/sections/AlumniSection.tsx:108:11",className:"hover-panel border border-white/10 p-6",children:[g.jsx("span",{"code-path":"src/sections/AlumniSection.tsx:109:13",className:"micro-label text-accent-green mb-2 block",children:"DERIVATIVES & MARKET STRUCTURE"}),g.jsx("p",{"code-path":"src/sections/AlumniSection.tsx:110:13",className:"body-text text-secondary-light text-sm",children:"Quant research, trading, and market making"})]}),g.jsxs("div",{"code-path":"src/sections/AlumniSection.tsx:114:11",className:"hover-panel border border-white/10 p-6",children:[g.jsx("span",{"code-path":"src/sections/AlumniSection.tsx:115:13",className:"micro-label text-accent-green mb-2 block",children:"DATA, ML & INFRASTRUCTURE"}),g.jsx("p",{"code-path":"src/sections/AlumniSection.tsx:116:13",className:"body-text text-secondary-light text-sm",children:"Quant engineering and financial systems"})]})]}),g.jsx("div",{"code-path":"src/sections/AlumniSection.tsx:131:9",className:"alumni-logo-loop relative overflow-hidden py-6",children:g.jsx(r_,{"code-path":"src/sections/AlumniSection.tsx:132:11",logos:w3,speed:76,gap:68,logoHeight:58,pauseOnHover:!0,scaleOnHover:!0,fadeOut:!0,fadeOutColor:"#06140B",ariaLabel:"Companies where FQE alumni work",renderItem:i=>"node"in i?g.jsx("div",{"code-path":"src/sections/AlumniSection.tsx:145:19",className:"alumni-logo-item",title:i.ariaLabel??i.title,children:i.node}):g.jsx("div",{"code-path":"src/sections/AlumniSection.tsx:152:17",className:"alumni-logo-item",title:i.alt,children:g.jsx("img",{"code-path":"src/sections/AlumniSection.tsx:153:19",src:i.src,alt:i.alt})})})}),g.jsx("div",{"code-path":"src/sections/AlumniSection.tsx:164:9",className:"mt-12 text-center",children:g.jsx("button",{"code-path":"src/sections/AlumniSection.tsx:165:11",type:"button",onClick:()=>e(!0),className:"text-link inline-flex items-center gap-2",children:g.jsx("span",{"code-path":"src/sections/AlumniSection.tsx:170:13",children:"Read Alumni Stories"})})})]}),s&&g.jsx("div",{"code-path":"src/sections/AlumniSection.tsx:176:9",className:"fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6",children:g.jsxs("div",{"code-path":"src/sections/AlumniSection.tsx:177:11",className:"bg-secondary-dark max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10",children:[g.jsxs("div",{"code-path":"src/sections/AlumniSection.tsx:178:13",className:"flex items-center justify-between p-6 border-b border-white/10",children:[g.jsx("h3",{"code-path":"src/sections/AlumniSection.tsx:179:15",className:"headline-lg text-primary-light",style:{fontSize:"1.5rem"},children:"Alumni Stories"}),g.jsx("button",{"code-path":"src/sections/AlumniSection.tsx:182:15",onClick:()=>e(!1),className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(el,{"code-path":"src/sections/AlumniSection.tsx:186:17",size:24})})]}),g.jsx("div",{"code-path":"src/sections/AlumniSection.tsx:190:13",className:"p-6",children:ov.map((i,r)=>g.jsxs("div",{"code-path":"src/sections/AlumniSection.tsx:192:17",className:`mb-8 pb-8 ${r!==ov.length-1?"border-b border-white/10":""}`,children:[g.jsxs("p",{"code-path":"src/sections/AlumniSection.tsx:196:19",className:"micro-label text-accent-green mb-3",children:[i.name," - ",i.role]}),g.jsx("p",{"code-path":"src/sections/AlumniSection.tsx:199:19",className:"body-text text-secondary-light mb-4",children:i.testimonial})]},`${i.name}-${i.role}`))}),g.jsx("div",{"code-path":"src/sections/AlumniSection.tsx:206:13",className:"p-6 border-t border-white/10 flex justify-end",children:g.jsx("button",{"code-path":"src/sections/AlumniSection.tsx:207:15",onClick:()=>e(!1),className:"cta-button",children:g.jsx("span",{"code-path":"src/sections/AlumniSection.tsx:211:17",children:"Close"})})})]})})]})}const N3=[{name:"Arthur Faynin",role:"President",image:"/Arthur_Faynin.jpg",email:"arthur.faynin@baruchmail.cuny.edu"},{name:"Alfred Leong",role:"Vice-President",image:"/Alfred_Leong.jpg",email:"alfred.leong@baruchmail.cuny.edu"},{name:"Alexi Tilly",role:"Treasurer",image:"/Alexi_Tilly.jpg",email:"alexandre.tilly@baruchmail.cuny.edu"},{name:"Dmytro Popov",role:"Secretary",image:"/Dmytroo.jpg",email:"dmytro.popov@baruchmail.cuny.edu"},{name:"Placeholder Name",role:"Math Officer",image:"/placeholder_leader.png"},{name:"Placeholder Name",role:"Tech Officer",image:"/placeholder_leader.png"},{name:"Maahin Nafi",role:"Marketing Officer",image:"/Maahin Nafi Headshot.jpg"},{name:"Abie Lent",role:"Events Officer",image:"/Abie_Lent.jpg",email:"abraham.lent@baruchmail.cuny.edu"}];function D3(){return g.jsxs("section",{"code-path":"src/sections/BoardSection.tsx:16:5",id:"leadership",className:"min-h-screen bg-primary-dark relative overflow-hidden flex items-center py-[10vh]",children:[g.jsx(Ra,{"code-path":"src/sections/BoardSection.tsx:20:7"}),g.jsxs("div",{"code-path":"src/sections/BoardSection.tsx:21:7",className:"relative z-10 w-full px-[6vw]",children:[g.jsxs("div",{"code-path":"src/sections/BoardSection.tsx:23:9",className:"mb-12",children:[g.jsx("span",{"code-path":"src/sections/BoardSection.tsx:24:11",className:"micro-label text-secondary-light mb-4 block",children:"Leadership"}),g.jsx("h2",{"code-path":"src/sections/BoardSection.tsx:27:11",className:"headline-lg text-primary-light",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"Meet our Leadership"}),g.jsx("p",{"code-path":"src/sections/BoardSection.tsx:30:11",className:"body-text text-secondary-light mt-4 max-w-xl",children:"A team committed to excellence, innovation, and member success."})]}),g.jsx("div",{"code-path":"src/sections/BoardSection.tsx:36:9",className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:N3.map((s,e)=>g.jsxs("div",{"code-path":"src/sections/BoardSection.tsx:38:13",className:"flex flex-col items-center",children:[g.jsx("div",{"code-path":"src/sections/BoardSection.tsx:39:15",className:"photo-frame w-full aspect-square mb-4 overflow-hidden",children:g.jsx("img",{"code-path":"src/sections/BoardSection.tsx:40:17",src:s.image,alt:s.name,className:"w-full h-full object-cover hover:scale-105 transition-transform duration-300"})}),s.email?g.jsx("a",{"code-path":"src/sections/BoardSection.tsx:47:17",href:`mailto:${s.email}`,className:"font-display font-semibold text-primary-light text-center leadership-name-link",children:s.name}):g.jsx("span",{"code-path":"src/sections/BoardSection.tsx:54:17",className:"font-display font-semibold text-primary-light text-center",children:s.name}),g.jsx("span",{"code-path":"src/sections/BoardSection.tsx:58:15",className:"micro-label text-accent-green mt-1",children:s.role})]},e))})]})]})}function U3(){const[s,e]=De.useState(!1);return g.jsxs(g.Fragment,{children:[g.jsxs("section",{"code-path":"src/sections/ContactSection.tsx:10:7",id:"contact",className:"bg-primary-dark relative overflow-hidden flex items-center py-[12vh] lg:py-[14vh]",children:[g.jsx(Ra,{"code-path":"src/sections/ContactSection.tsx:14:9"}),g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:15:9",className:"relative z-10 w-full px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:17:11",className:"flex flex-col justify-center",children:[g.jsx("span",{"code-path":"src/sections/ContactSection.tsx:19:13",className:"micro-label text-secondary-light mb-6",children:"Contact"}),g.jsx("h2",{"code-path":"src/sections/ContactSection.tsx:24:13",className:"headline-lg text-primary-light mb-6",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"How to reach us"}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:29:13",className:"body-text text-secondary-light mb-10",children:"Whether you are writing your first backtest or optimizing execution, there is a seat at the table."}),g.jsxs("a",{"code-path":"src/sections/ContactSection.tsx:34:13",href:"https://linktr.ee/FQEBaruch",target:"_blank",rel:"noopener noreferrer",className:"cta-button mb-4 w-fit",children:[g.jsx("span",{"code-path":"src/sections/ContactSection.tsx:40:15",children:"Apply via Linktree"}),g.jsx(zi,{"code-path":"src/sections/ContactSection.tsx:41:15",size:16})]}),g.jsx("div",{"code-path":"src/sections/ContactSection.tsx:45:13",className:"mt-6",children:g.jsxs("button",{"code-path":"src/sections/ContactSection.tsx:46:15",onClick:()=>e(!0),className:"text-link inline-flex items-center gap-2",children:[g.jsx(Z1,{"code-path":"src/sections/ContactSection.tsx:50:17",size:14}),g.jsx("span",{"code-path":"src/sections/ContactSection.tsx:51:17",children:"Interview Information"})]})}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:56:13",className:"micro-label text-secondary-light/60 mt-8",children:"Applications open each term. No prior finance experience required."})]}),g.jsx("div",{"code-path":"src/sections/ContactSection.tsx:62:11",className:"photo-frame aspect-[3/4] max-h-[72vh]",children:g.jsx("img",{"code-path":"src/sections/ContactSection.tsx:63:13",src:"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1600&w=1200",alt:"Students collaborating",className:"w-full h-full object-cover",style:{objectPosition:"right center"}})})]})]}),s&&g.jsx("div",{"code-path":"src/sections/ContactSection.tsx:74:9",className:"fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6",children:g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:75:11",className:"bg-secondary-dark max-w-3xl w-full max-h-[80vh] overflow-y-auto border border-white/10",children:[g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:76:13",className:"flex items-center justify-between p-6 border-b border-white/10",children:[g.jsx("h3",{"code-path":"src/sections/ContactSection.tsx:77:15",className:"headline-lg text-primary-light",style:{fontSize:"1.5rem"},children:"Interview Information"}),g.jsx("button",{"code-path":"src/sections/ContactSection.tsx:80:15",onClick:()=>e(!1),className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(el,{"code-path":"src/sections/ContactSection.tsx:84:17",size:24})})]}),g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:88:13",className:"p-6 body-text text-secondary-light space-y-6",children:[g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:89:15",children:[g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:90:17",className:"font-semibold text-primary-light",children:"Interview Structure"}),g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:92:17",className:"mt-3",children:[g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:93:19",className:"font-medium text-primary-light",children:"Behavioral Interview"}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:94:19",className:"mt-1",children:"We assess communication skills, professionalism, independence, and motivation."})]}),g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:99:17",className:"mt-4",children:[g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:100:19",className:"font-medium text-primary-light",children:"Technical (2 Questions)"}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:101:19",className:"mt-1",children:"A foundational quantitative question designed to be relatively quick and a more complex quantitative problem focused on structure, logic, and assumptions."}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:104:19",className:"mt-2",children:"Topics may include expected value, basic probability, logic puzzles, exponential growth, and introductory finance concepts."})]}),g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:109:17",className:"mt-4",children:[g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:110:19",className:"font-medium text-primary-light",children:"LeetCode-Style Coding Question"}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:111:19",className:"mt-1",children:"You may be asked to code live, explain complexity, and discuss edge cases."}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:114:19",className:"mt-2",children:"Questions may involve array/list manipulation, sorting and merging, parentheses validation, number transformations, and basic algorithms."})]})]}),g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:120:15",children:[g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:121:17",className:"font-semibold text-primary-light",children:"How We Evaluate"}),g.jsxs("ul",{"code-path":"src/sections/ContactSection.tsx:122:17",className:"list-disc pl-6 mt-2 space-y-1",children:[g.jsx("li",{"code-path":"src/sections/ContactSection.tsx:123:19",children:"Behavioral fit"}),g.jsx("li",{"code-path":"src/sections/ContactSection.tsx:124:19",children:"Easy technical"}),g.jsx("li",{"code-path":"src/sections/ContactSection.tsx:125:19",children:"Hard technical"}),g.jsx("li",{"code-path":"src/sections/ContactSection.tsx:126:19",children:"Coding ability"})]}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:128:17",className:"mt-3",children:"Minimum technical performance is required for project placement. Candidates are compared within similar academic levels."}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:131:17",className:"mt-3",children:"At the end of the day, we are looking for members who will contribute meaningfully, grow technically, strengthen the FQE network, and take projects seriously."}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:134:17",className:"mt-3",children:"Final notes: attempt each question, explain your reasoning clearly, think independently, and maintain integrity."})]}),g.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:139:15",children:[g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:140:17",className:"font-semibold text-primary-light",children:"Note on Integrity"}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:141:17",className:"mt-1",children:"Technical interviews assess independent reasoning ability."}),g.jsxs("ul",{"code-path":"src/sections/ContactSection.tsx:142:17",className:"list-disc pl-6 mt-2 space-y-1",children:[g.jsx("li",{"code-path":"src/sections/ContactSection.tsx:143:19",children:"Calculators are not allowed"}),g.jsx("li",{"code-path":"src/sections/ContactSection.tsx:144:19",children:"AI tools are not allowed"}),g.jsx("li",{"code-path":"src/sections/ContactSection.tsx:145:19",children:"You may be asked to show written work and/or share your screen during coding"})]}),g.jsx("p",{"code-path":"src/sections/ContactSection.tsx:147:17",className:"mt-3",children:"Individuals found cheating during interviews will be disqualified from consideration."})]})]}),g.jsx("div",{"code-path":"src/sections/ContactSection.tsx:153:13",className:"p-6 border-t border-white/10 flex justify-end items-center",children:g.jsx("button",{"code-path":"src/sections/ContactSection.tsx:154:15",onClick:()=>e(!1),className:"cta-button",children:g.jsx("span",{"code-path":"src/sections/ContactSection.tsx:158:17",children:"Close"})})})]})})]})}function L3(){return g.jsxs("section",{"code-path":"src/sections/ClosingSection.tsx:6:5",className:"bg-primary-dark relative overflow-hidden py-[8vh]",children:[g.jsx(Ra,{"code-path":"src/sections/ClosingSection.tsx:7:7"}),g.jsx("div",{"code-path":"src/sections/ClosingSection.tsx:9:7",className:"relative z-10 text-center py-[6vh]",children:g.jsx("h2",{"code-path":"src/sections/ClosingSection.tsx:10:9",className:"headline-lg text-primary-light",style:{fontSize:"clamp(2.5rem, 5vw, 4.5rem)"},children:"STAY CURIOUS. STAY QUANT."})}),g.jsxs("div",{"code-path":"src/sections/ClosingSection.tsx:19:7",className:"relative z-10 flex flex-col items-center pb-[6vh]",children:[g.jsx("a",{"code-path":"src/sections/ClosingSection.tsx:20:9",href:"mailto:baruchfqe@gmail.com",className:"micro-label text-accent-green mb-4 hover:underline",children:"baruchfqe@gmail.com"}),g.jsx("p",{"code-path":"src/sections/ClosingSection.tsx:26:9",className:"body-text text-secondary-light mb-6",style:{fontSize:"0.9rem"},children:"Baruch's Premier Quantitative Club"}),g.jsxs("div",{"code-path":"src/sections/ClosingSection.tsx:31:9",className:"flex items-center gap-6 mb-10",children:[g.jsx("a",{"code-path":"src/sections/ClosingSection.tsx:32:11",href:"https://github.com/BaruchFinancialQuantsEngineers-FQE/",target:"_blank",rel:"noopener noreferrer","aria-label":"FQE GitHub",className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(mv,{"code-path":"src/sections/ClosingSection.tsx:39:13",size:20,strokeWidth:1.5})}),g.jsx("a",{"code-path":"src/sections/ClosingSection.tsx:41:11",href:"https://www.linkedin.com/company/fqe-baruch/",target:"_blank",rel:"noopener noreferrer","aria-label":"FQE LinkedIn",className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(xv,{"code-path":"src/sections/ClosingSection.tsx:48:13",size:20,strokeWidth:1.5})}),g.jsx("a",{"code-path":"src/sections/ClosingSection.tsx:50:11",href:"https://www.instagram.com/baruchfqe/",target:"_blank",rel:"noopener noreferrer","aria-label":"FQE Instagram",className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(gv,{"code-path":"src/sections/ClosingSection.tsx:57:13",size:20,strokeWidth:1.5})}),g.jsx("a",{"code-path":"src/sections/ClosingSection.tsx:59:11",href:"mailto:baruchfqe@gmail.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Email FQE",className:"text-secondary-light hover:text-accent-green transition-colors",children:g.jsx(vv,{"code-path":"src/sections/ClosingSection.tsx:66:13",size:20,strokeWidth:1.5})})]}),g.jsx("p",{"code-path":"src/sections/ClosingSection.tsx:70:9",className:"micro-label text-secondary-light/40 text-center mb-2",children:"FQE. Built by Students."}),g.jsx("p",{"code-path":"src/sections/ClosingSection.tsx:73:9",className:"micro-label text-center",children:g.jsx("a",{"code-path":"src/sections/ClosingSection.tsx:74:11",href:"#/alpha-cheese",className:"text-secondary-light/20 hover:text-accent-green transition-colors","aria-label":"Alpha Cheese easter egg",onClick:s=>{s.preventDefault(),window.location.hash="#/alpha-cheese",window.scrollTo({top:0,left:0,behavior:"auto"}),window.requestAnimationFrame(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})})},children:"alpha cheese"})})]})]})}function P3({manageUrl:s,embedUrl:e}){return g.jsxs("section",{"code-path":"src/sections/CalendarSection.tsx:10:5",id:"calendar",className:"bg-primary-dark py-[10vh] relative overflow-hidden",children:[g.jsx(Ra,{"code-path":"src/sections/CalendarSection.tsx:11:7"}),g.jsx("div",{"code-path":"src/sections/CalendarSection.tsx:12:7",className:"relative z-10 w-full px-[6vw]",children:g.jsxs("div",{"code-path":"src/sections/CalendarSection.tsx:13:9",className:"calendar-shell border border-white/15 bg-secondary-dark/35 p-2 md:p-3",children:[g.jsxs("div",{"code-path":"src/sections/CalendarSection.tsx:14:11",className:"calendar-shell-header border border-white/10 bg-primary-dark/70 px-4 py-3 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",children:[g.jsxs("div",{"code-path":"src/sections/CalendarSection.tsx:15:13",className:"calendar-tabs",role:"tablist","aria-label":"Calendar links",children:[g.jsx("a",{"code-path":"src/sections/CalendarSection.tsx:16:15",href:e,target:"_blank",rel:"noopener noreferrer",className:"calendar-tab calendar-tab-active",children:"Open Embedded View"}),g.jsx("a",{"code-path":"src/sections/CalendarSection.tsx:24:15",href:s,target:"_blank",rel:"noopener noreferrer",className:"calendar-tab",children:"Open Google Calendar"})]}),g.jsx("span",{"code-path":"src/sections/CalendarSection.tsx:33:13",className:"micro-label text-secondary-light",children:"Official FQE Schedule"})]}),g.jsxs("div",{"code-path":"src/sections/CalendarSection.tsx:36:11",className:"relative border border-white/10 bg-primary-dark/80",children:[g.jsx("iframe",{"code-path":"src/sections/CalendarSection.tsx:37:13",src:e,title:"FQE Google Calendar",className:"calendar-embed-dark w-full h-[760px] md:h-[840px] border-0",loading:"lazy"}),g.jsx("div",{"code-path":"src/sections/CalendarSection.tsx:43:13",className:"pointer-events-none absolute inset-0 border border-accent-green/15"})]})]})})]})}const O3=["Application deadline - September 28, 2026","Competition day - October 2, 2026 at Baruch College (location TBD)","Session 1 - 1:00pm to 3:15pm","Break - 3:15pm to 3:45pm","Session 2 - 3:45pm to 6:00pm"],I3=["Fall 2026 competition cycle","Open to all CUNY students","Coding experience is strongly recommended, but not required","Discretionary and systematic trading approaches are welcome"],B3=[{phase:"Step 0",title:"Trading Competition Interest & Application",duration:"Due September 28, 2026",details:["Submit the interest form by the application deadline to be considered.","Applications are open to current CUNY students."]},{phase:"Step 1",title:"Competition Briefing",duration:"Before Trading Day",details:["Participants will receive competition instructions and logistics before the live session.","Final location details will be shared once confirmed."]},{phase:"Step 2",title:"Session 1",duration:"1:00pm to 3:15pm",details:["Trade in the first live competition session.","Apply discretionary or systematic strategies in real time."]},{phase:"Step 3",title:"Break and Refinement",duration:"3:15pm to 3:45pm",details:["Use the 30-minute break to review performance and refine the strategy if needed.","Carry insights from Session 1 into Session 2."]},{phase:"Step 4",title:"Session 2",duration:"3:45pm to 6:00pm",details:["Trade in the final live competition session.","Final rankings are determined after the session concludes."]}],F3=[{category:"Highest P&L",score:"Ranked result",weight:"100%"}],z3=["Bragging rights and a LinkedIn feature on FQE channels","Resume-building experience","Publication on the FQE website"];function H3(){const s=De.useRef(null),e=De.useRef(null),i=()=>{document.getElementById("structure")?.scrollIntoView({behavior:"smooth",block:"start"})};return De.useLayoutEffect(()=>{const r="scrollRestoration"in window.history?window.history.scrollRestoration:null;"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");const l=()=>{const m=document.documentElement,p=m.style.scrollBehavior;m.style.scrollBehavior="auto",window.scrollTo(0,0),m.scrollTop=0,document.body.scrollTop=0,m.style.scrollBehavior=p};l();const c=window.requestAnimationFrame(l),f=window.setInterval(l,50),h=window.setTimeout(()=>{window.clearInterval(f),l()},800);return()=>{window.cancelAnimationFrame(c),window.clearInterval(f),window.clearTimeout(h),r&&(window.history.scrollRestoration=r)}},[]),De.useEffect(()=>{const r=e.current,l=s.current;if(!r||!l)return;const c=r.getContext("2d");if(!c)return;const f=10,h=12,m=2,p=2;let S=0,_=0,x=[],y=-1,E=0,C=18+Math.floor(Math.random()*16);const M=(q,ee,ae)=>Math.max(ee,Math.min(ae,q)),b=()=>{r.width=l.offsetWidth,r.height=l.offsetHeight,c.font=`${h}px "IBM Plex Mono", monospace`,c.textBaseline="top",c.textAlign="left"},w=()=>{S=Math.max(16,Math.floor(r.height/h)),_=Math.max(28,Math.ceil(r.width/f)+4);const q=Math.floor(S*.55);x=Array.from({length:_+2},()=>q),y=-1,E=0,C=18+Math.floor(Math.random()*16)},U=q=>{const ee=m,ae=Math.max(ee+8,S-p);E>=C&&(y*=-1,E=0,C=14+Math.floor(Math.random()*22)),E+=1;const G=y*(Math.random()*1.2+.25),D=(Math.random()-.5)*2.2;return M(Math.round(q+G+D),ee,ae)},O=()=>{c.fillStyle="rgba(163, 184, 170, 0.13)";for(let q=2;q<S;q+=4)for(let ee=0;ee<_;ee+=3)c.fillText(".",ee*f,q*h)},V=()=>{for(let q=1;q<x.length;q+=1){const ee=x[q-1],ae=x[q],G=(q-1)*f;let D="-",F="rgba(163, 184, 170, 0.75)";ae<ee?(D="/",F="rgba(74, 222, 128, 0.95)"):ae>ee&&(D="\\",F="rgba(248, 113, 113, 0.95)"),c.fillStyle=F,c.fillText(D,G,Math.min(ee,ae)*h);const $=ae<ee?"rgba(74, 222, 128, 0.95)":ae>ee?"rgba(248, 113, 113, 0.95)":"rgba(163, 184, 170, 0.85)";c.fillStyle=$,c.fillText("#",G,ae*h)}},I=()=>{const q=x.slice(-6),ee=Math.min(...q),ae=Math.max(...q),G=x[x.length-2],D=x[x.length-1],F=(x.length-2)*f,$=D<G;c.fillStyle=$?"rgba(74, 222, 128, 0.45)":"rgba(248, 113, 113, 0.45)";for(let P=ee;P<=ae;P+=1)c.fillText("|",F,P*h);c.fillStyle=$?"rgba(74, 222, 128, 0.98)":"rgba(248, 113, 113, 0.98)";const de=Math.min(G,D),ye=Math.max(G,D);for(let P=de;P<=ye;P+=1)c.fillText("#",F,P*h)},z=()=>{const q=x[x.length-1],ae=x[x.length-2]-q,G=(ae*.37).toFixed(2),D=ae>0?"BULL":ae<0?"BEAR":"FLAT",F=ae>0?"rgba(74, 222, 128, 0.95)":ae<0?"rgba(248, 113, 113, 0.95)":"rgba(163, 184, 170, 0.95)",$=r.height-h*2;c.fillStyle="rgba(240, 250, 244, 0.9)",c.fillText("FQE.TRD",f,$),c.fillStyle=F,c.fillText(`${D} ${ae>=0?"+":""}${G}%`,f*10,$)},A=()=>{c.fillStyle="rgba(5, 20, 10, 0.22)",c.fillRect(0,0,r.width,r.height),O(),V(),I(),z()};b(),w(),A();const B=()=>{const q=x[x.length-1];x.push(U(q)),x.length>_+2&&x.shift(),A()},Y=window.setInterval(B,68),H=()=>{b(),w(),A()};return window.addEventListener("resize",H),()=>{window.clearInterval(Y),window.removeEventListener("resize",H)}},[]),g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:284:5",className:"relative min-h-screen bg-primary-dark",children:[g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:285:7",className:"grain-overlay"}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:287:7",className:"fixed top-6 left-6 z-[200]",children:g.jsx("a",{"code-path":"src/pages/TradingCompetitionPage.tsx:288:9",href:"#",className:"font-display text-xl font-bold text-primary-light tracking-tight hover:text-accent-green transition-colors",children:"FQE"})}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:293:7",className:"fixed top-6 right-6 z-[200]",children:g.jsxs("a",{"code-path":"src/pages/TradingCompetitionPage.tsx:294:9",href:"#competition",className:"text-link inline-flex items-center gap-2",children:[g.jsx(nl,{"code-path":"src/pages/TradingCompetitionPage.tsx:295:11",size:14}),g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:296:11",children:"Back to Main Site"})]})}),g.jsxs("main",{"code-path":"src/pages/TradingCompetitionPage.tsx:300:7",children:[g.jsxs("section",{"code-path":"src/pages/TradingCompetitionPage.tsx:301:9",ref:s,className:"min-h-screen bg-primary-dark relative flex items-center py-[10vh]",children:[g.jsx("canvas",{"code-path":"src/pages/TradingCompetitionPage.tsx:302:11",ref:e,className:"absolute inset-0 z-10 w-full h-full pointer-events-none","aria-hidden":"true"}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:307:11",className:"vignette"}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:309:11",className:"relative z-20 w-full px-[6vw] flex justify-center",children:g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:310:13",className:"flex flex-col justify-center items-center text-center max-w-3xl",children:[g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:311:15",className:"micro-label text-secondary-light mb-6",children:"Competition"}),g.jsx("h1",{"code-path":"src/pages/TradingCompetitionPage.tsx:312:15",className:"headline-xl text-primary-light mb-6",style:{fontSize:"clamp(2.3rem, 5vw, 4.4rem)",lineHeight:1.04},children:"Fall 2026 - 2nd Annual FQE Undergraduate Trading Competition"}),g.jsx("p",{"code-path":"src/pages/TradingCompetitionPage.tsx:315:15",className:"body-text text-secondary-light text-sm md:text-base max-w-2xl mb-2",children:"Financial Quants & Engineers at Baruch is hosting a real-time trading strategy competition for CUNY students."}),g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:318:15",className:"flex flex-col gap-4 items-center",children:[g.jsxs("a",{"code-path":"src/pages/TradingCompetitionPage.tsx:319:17",href:"https://docs.google.com/forms/d/e/1FAIpQLSeUc5y97f8UF_9bd6_6ETmcXAEgLEH5epX0H2n8RtWM_AuWbA/viewform",target:"_blank",rel:"noopener noreferrer",className:"cta-button w-fit",children:[g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:325:19",children:"Apply to Compete"}),g.jsx(zi,{"code-path":"src/pages/TradingCompetitionPage.tsx:326:19",size:16})]}),g.jsxs("button",{"code-path":"src/pages/TradingCompetitionPage.tsx:328:17",type:"button",onClick:i,className:"text-link inline-flex items-center gap-2",children:[g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:329:19",children:"View Structure"}),g.jsx(zi,{"code-path":"src/pages/TradingCompetitionPage.tsx:330:19",size:14})]})]})]})})]}),g.jsxs("section",{"code-path":"src/pages/TradingCompetitionPage.tsx:337:9",id:"requirements",className:"bg-secondary-dark py-[10vh]",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:338:11",className:"w-full px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-8",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:339:13",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:340:15",className:"flex items-center gap-3 mb-4",children:[g.jsx(yv,{"code-path":"src/pages/TradingCompetitionPage.tsx:341:17",className:"text-accent-green",size:18}),g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:342:17",className:"micro-label text-accent-green",children:"Eligibility and Setup"})]}),g.jsx("ul",{"code-path":"src/pages/TradingCompetitionPage.tsx:344:15",className:"list-disc pl-5 space-y-2 body-text text-secondary-light text-sm",children:I3.map(r=>g.jsx("li",{"code-path":"src/pages/TradingCompetitionPage.tsx:346:19",children:r},r))})]}),g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:351:13",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:352:15",className:"flex items-center gap-3 mb-4",children:[g.jsx(Kc,{"code-path":"src/pages/TradingCompetitionPage.tsx:353:17",className:"text-accent-green",size:18}),g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:354:17",className:"micro-label text-accent-green",children:"Important Dates"})]}),g.jsx("ul",{"code-path":"src/pages/TradingCompetitionPage.tsx:356:15",className:"list-disc pl-5 space-y-2 body-text text-secondary-light text-sm",children:O3.map(r=>g.jsx("li",{"code-path":"src/pages/TradingCompetitionPage.tsx:358:19",children:r},r))})]})]}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:364:11",className:"w-full px-[6vw] mt-8",children:g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:365:13",className:"border border-red-400/40 bg-red-500/5 p-5",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:366:15",className:"flex items-center gap-3 mb-3",children:[g.jsx(_v,{"code-path":"src/pages/TradingCompetitionPage.tsx:367:17",className:"text-red-300",size:18}),g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:368:17",className:"micro-label text-red-300",children:"Integrity Policy"})]}),g.jsx("p",{"code-path":"src/pages/TradingCompetitionPage.tsx:370:15",className:"body-text text-secondary-light text-sm",children:"AI use is strictly prohibited across all competition processes. Teams found using AI in any part of their process will be immediately disqualified."})]})})]}),g.jsx("section",{"code-path":"src/pages/TradingCompetitionPage.tsx:378:9",id:"structure",className:"bg-primary-dark py-[10vh]",children:g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:379:11",className:"w-full px-[6vw]",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:380:13",className:"mb-10",children:[g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:381:15",className:"micro-label text-secondary-light mb-4 block",children:"Competition Structure"}),g.jsx("h2",{"code-path":"src/pages/TradingCompetitionPage.tsx:382:15",className:"headline-lg text-primary-light",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"Trading Workflow"})]}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:387:13",className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:B3.map(r=>g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:389:17",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:390:19",className:"flex items-center gap-3 mb-3",children:[g.jsx(Sv,{"code-path":"src/pages/TradingCompetitionPage.tsx:391:21",className:"text-accent-green",size:16}),g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:392:21",className:"micro-label text-accent-green",children:r.phase})]}),g.jsx("p",{"code-path":"src/pages/TradingCompetitionPage.tsx:394:19",className:"font-display font-semibold text-primary-light mb-1",children:r.title}),g.jsx("p",{"code-path":"src/pages/TradingCompetitionPage.tsx:395:19",className:"micro-label text-secondary-light mb-3",children:r.duration}),g.jsx("ul",{"code-path":"src/pages/TradingCompetitionPage.tsx:396:19",className:"list-disc pl-5 space-y-1 body-text text-secondary-light text-sm",children:r.details.map(l=>g.jsx("li",{"code-path":"src/pages/TradingCompetitionPage.tsx:398:23",children:l},l))})]},r.phase))})]})}),g.jsx("section",{"code-path":"src/pages/TradingCompetitionPage.tsx:407:9",id:"evaluation",className:"bg-secondary-dark py-[10vh]",children:g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:408:11",className:"w-full px-[6vw]",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:409:13",className:"mb-8",children:[g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:410:15",className:"micro-label text-secondary-light mb-4 block",children:"Evaluation Rubric"}),g.jsx("h2",{"code-path":"src/pages/TradingCompetitionPage.tsx:411:15",className:"headline-lg text-primary-light",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"Scoring Framework"}),g.jsx("p",{"code-path":"src/pages/TradingCompetitionPage.tsx:414:15",className:"body-text text-secondary-light text-sm mt-3 max-w-2xl",children:"Standings are determined by highest P&L."})]}),g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:419:13",className:"border border-white/10 overflow-hidden",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:420:15",className:"grid grid-cols-12 border-b border-white/10 bg-primary-dark/40",children:[g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:421:17",className:"col-span-6 p-4 micro-label text-accent-green",children:"Category"}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:422:17",className:"col-span-3 p-4 micro-label text-accent-green",children:"Score"}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:423:17",className:"col-span-3 p-4 micro-label text-accent-green",children:"Weight"})]}),F3.map(r=>g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:427:17",className:"grid grid-cols-12 border-b last:border-b-0 border-white/10",children:[g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:428:19",className:"col-span-6 p-4 body-text text-secondary-light text-sm",children:r.category}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:429:19",className:"col-span-3 p-4 body-text text-secondary-light text-sm",children:r.score}),g.jsx("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:430:19",className:"col-span-3 p-4 body-text text-secondary-light text-sm",children:r.weight})]},r.category))]})]})}),g.jsx("section",{"code-path":"src/pages/TradingCompetitionPage.tsx:437:9",className:"bg-primary-dark py-[10vh]",children:g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:438:11",className:"w-full px-[6vw] grid grid-cols-1 md:grid-cols-2 gap-8",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:439:13",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:440:15",className:"flex items-center gap-3 mb-4",children:[g.jsx(pv,{"code-path":"src/pages/TradingCompetitionPage.tsx:441:17",className:"text-accent-green",size:18}),g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:442:17",className:"micro-label text-accent-green",children:"Live Sessions"})]}),g.jsx("p",{"code-path":"src/pages/TradingCompetitionPage.tsx:444:15",className:"body-text text-secondary-light text-sm",children:"Participants compete on October 2, 2026 at Baruch College. Session 1 runs from 1:00pm to 3:15pm, followed by a 3:15pm to 3:45pm break and Session 2 from 3:45pm to 6:00pm."})]}),g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:450:13",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/TradingCompetitionPage.tsx:451:15",className:"flex items-center gap-3 mb-4",children:[g.jsx(Jh,{"code-path":"src/pages/TradingCompetitionPage.tsx:452:17",className:"text-accent-green",size:18}),g.jsx("span",{"code-path":"src/pages/TradingCompetitionPage.tsx:453:17",className:"micro-label text-accent-green",children:"Incentives"})]}),g.jsx("ul",{"code-path":"src/pages/TradingCompetitionPage.tsx:455:15",className:"list-disc pl-5 space-y-2 body-text text-secondary-light text-sm",children:z3.map(r=>g.jsx("li",{"code-path":"src/pages/TradingCompetitionPage.tsx:457:19",children:r},r))})]})]})})]})]})}const G3=["Market microstructure modeling","Disease spread modeling","Graph theory in network risk","Logistics optimization","Chaotic dynamics","And more"],k3=["Maximum three people per team","Basic coding and mathematics knowledge","Current Baruch undergraduate student status"],V3=[{phase:"Phase 0",title:"Testing and Validation",duration:"Kickoff",details:["A GitHub Classroom environment will be provided.","Teams complete a small coding problem for validation."]},{phase:"Phase 1",title:"Proposal",duration:"2 to 3 Weeks",details:["Submit a 2 to 3 page proposal (preferably LaTeX).","Include problem statement, literature review, framework, methodology, and roadmap/data sources.","Judged on originality, mathematical depth, feasibility, and clarity.","Based on interest and funding, teams may be split into tracks such as quantitative finance, general applied mathematics, or AI and learning systems."]},{phase:"Phase 2",title:"Research and Implementation",duration:"6 to 10 Weeks",details:["Produce formal documentation/paper and code repository.","Provide reproducible results with experimental validation and tests.","Use proper notation, explicit assumptions, and statistical testing where applicable."]},{phase:"Phase 3",title:"Final Presentation",duration:"20 Minutes",details:["12 minutes for research presentation.","8 minutes for technical Q&A.","Judging panel includes professors, researchers, alumni, and practitioners."]}],j3=[{category:"Initial Proposal",score:"1 to 5",weight:"25%"},{category:"Technical Implementation",score:"1 to 10",weight:"25%"},{category:"Originality",score:"1 to 5",weight:"15%"},{category:"Empirical Validation",score:"1 to 5",weight:"15%"},{category:"Communication and Presentation",score:"1 to 5",weight:"10%"},{category:"Practical and Research Relevance",score:"1 to 5",weight:"10%"}],X3=["Prize pool of 300, 200, 100 for the top 3 teams","Bragging rights and LinkedIn feature on FQE channels","Resume building experience","Published on the FQE website"];function W3(){const s=De.useRef(null),e=De.useRef(null),i=()=>{document.getElementById("structure")?.scrollIntoView({behavior:"smooth",block:"start"})};return De.useLayoutEffect(()=>{const r="scrollRestoration"in window.history?window.history.scrollRestoration:null;"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");const l=()=>{const m=document.documentElement,p=m.style.scrollBehavior;m.style.scrollBehavior="auto",window.scrollTo(0,0),m.scrollTop=0,document.body.scrollTop=0,m.style.scrollBehavior=p};l();const c=window.requestAnimationFrame(l),f=window.setInterval(l,50),h=window.setTimeout(()=>{window.clearInterval(f),l()},800);return()=>{window.cancelAnimationFrame(c),window.clearInterval(f),window.clearTimeout(h),r&&(window.history.scrollRestoration=r)}},[]),De.useEffect(()=>{const r=e.current,l=s.current;if(!r||!l)return;const c=r.getContext("2d");if(!c)return;const f=10,h=13,m=1,p=2,S=5,_=["e","i","pi","phi","tau","ln","sin","cos","sum","int","sqrt","inf"];let x=0,y=0,E=0,C=0,M=0;const b=(V,I,z)=>Math.max(I,Math.min(z,V)),w=()=>{r.width=l.offsetWidth,r.height=l.offsetHeight,x=Math.max(24,Math.floor(r.width/f)),y=Math.max(16,Math.floor(r.height/h)),c.font=`${h}px "IBM Plex Mono", monospace`,c.textBaseline="top",c.textAlign="left"},U=()=>{const V=new Float32Array(x*y),I=new Array(x*y).fill(" "),z=new Float32Array(x*y),A=Math.cos(E),B=Math.sin(E),Y=Math.cos(C),H=Math.sin(C),q=x*S*2.4/(8*(m+p));for(let ee=0;ee<Math.PI*2;ee+=.07){const ae=Math.cos(ee),G=Math.sin(ee);for(let D=0;D<Math.PI*2;D+=.02){const F=Math.cos(D),$=Math.sin(D),de=p+m*ae,ye=m*G,P=de*(Y*F+B*H*$)-ye*A*H,Z=de*(H*F-B*Y*$)+ye*A*Y,Me=1/(S+A*de*$+ye*B),Ae=Math.floor(x*.5+q*Me*P),te=Math.floor(y*.5-q*Me*Z*.58),be=F*ae*H-A*ae*$-B*G+Y*(A*G-ae*B*$);if(be<=0||Ae<0||Ae>=x||te<0||te>=y)continue;const xe=Ae+te*x;if(Me>V[xe]){V[xe]=Me;const Oe=b(Math.floor(be*(_.length-1)),0,_.length-1);I[xe]=_[Oe],z[xe]=be}}}c.fillStyle="rgba(5, 20, 10, 0.22)",c.fillRect(0,0,r.width,r.height);for(let ee=0;ee<y;ee+=1)for(let ae=0;ae<x;ae+=1){const G=ae+ee*x;if(I[G]===" ")continue;const D=Math.min(.42,.08+z[G]*.34);c.fillStyle=`rgba(110, 140, 175, ${D})`,c.fillText(I[G],ae*f,ee*h)}E+=.0055,C+=.0025,M=window.requestAnimationFrame(U)};w(),U();const O=()=>{w()};return window.addEventListener("resize",O),()=>{window.cancelAnimationFrame(M),window.removeEventListener("resize",O)}},[]),g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:234:5",className:"relative min-h-screen bg-primary-dark",children:[g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:235:7",className:"grain-overlay"}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:237:7",className:"fixed top-6 left-6 z-[200]",children:g.jsx("a",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:238:9",href:"#",className:"font-display text-xl font-bold text-primary-light tracking-tight hover:text-accent-green transition-colors",children:"FQE"})}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:243:7",className:"fixed top-6 right-6 z-[200]",children:g.jsxs("a",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:244:9",href:"#competition",className:"text-link inline-flex items-center gap-2",children:[g.jsx(nl,{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:245:11",size:14}),g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:246:11",children:"Back to Main Site"})]})}),g.jsxs("main",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:250:7",children:[g.jsxs("section",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:251:9",ref:s,className:"min-h-screen bg-primary-dark relative flex items-center py-[10vh]",children:[g.jsx("canvas",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:252:11",ref:e,className:"absolute inset-0 z-10 w-full h-full pointer-events-none","aria-hidden":"true"}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:257:11",className:"vignette"}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:259:11",className:"relative z-20 w-full px-[6vw] flex justify-center",children:g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:260:13",className:"flex flex-col justify-center items-center text-center max-w-3xl",children:[g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:261:15",className:"micro-label text-secondary-light mb-6",children:"Competition"}),g.jsx("h1",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:262:15",className:"headline-xl text-primary-light mb-6",style:{fontSize:"clamp(2.3rem, 5vw, 4.4rem)",lineHeight:1.04},children:"FQE Undergraduate Applied Mathematics Competition"}),g.jsx("p",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:265:15",className:"body-text text-secondary-light text-sm md:text-base max-w-2xl mb-6",children:"Applications are not open yet. Competition details and application dates will be announced soon."}),g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:268:15",className:"flex flex-col gap-4 items-center",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:269:17",className:"inline-flex items-center gap-2 px-6 py-3 border border-amber-300/50 bg-amber-300/5 text-amber-300 font-mono text-sm tracking-wider uppercase",children:[g.jsx(Kc,{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:270:19",size:16}),g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:271:19",children:"Coming Soon"})]}),g.jsxs("button",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:273:17",type:"button",onClick:i,className:"text-link inline-flex items-center gap-2",children:[g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:274:19",children:"View Structure"}),g.jsx(zi,{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:275:19",size:14})]})]})]})})]}),g.jsxs("section",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:282:9",id:"requirements",className:"bg-secondary-dark py-[10vh]",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:283:11",className:"w-full px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-8",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:284:13",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:285:15",className:"flex items-center gap-3 mb-4",children:[g.jsx(yv,{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:286:17",className:"text-accent-green",size:18}),g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:287:17",className:"micro-label text-accent-green",children:"Requirements"})]}),g.jsx("ul",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:289:15",className:"space-y-2 body-text text-secondary-light text-sm",children:k3.map(r=>g.jsx("li",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:291:19",children:r},r))})]}),g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:296:13",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:297:15",className:"flex items-center gap-3 mb-4",children:[g.jsx(Sv,{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:298:17",className:"text-accent-green",size:18}),g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:299:17",className:"micro-label text-accent-green",children:"Project Ideas"})]}),g.jsx("ul",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:301:15",className:"space-y-2 body-text text-secondary-light text-sm",children:G3.map(r=>g.jsx("li",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:303:19",children:r},r))})]})]}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:309:11",className:"w-full px-[6vw] mt-8",children:g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:310:13",className:"border border-red-400/40 bg-red-500/5 p-5",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:311:15",className:"flex items-center gap-3 mb-3",children:[g.jsx(_v,{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:312:17",className:"text-red-300",size:18}),g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:313:17",className:"micro-label text-red-300",children:"Integrity Policy"})]}),g.jsx("p",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:315:15",className:"body-text text-secondary-light text-sm",children:"The use of Artificial Intelligence to generate code is strictly prohibited. Teams found using AI-generated code will be immediately disqualified."})]})})]}),g.jsx("section",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:323:9",id:"structure",className:"bg-primary-dark py-[10vh]",children:g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:324:11",className:"w-full px-[6vw]",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:325:13",className:"mb-10",children:[g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:326:15",className:"micro-label text-secondary-light mb-4 block",children:"Competition Structure"}),g.jsx("h2",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:327:15",className:"headline-lg text-primary-light",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"Semester Workflow"})]}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:332:13",className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:V3.map(r=>g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:334:17",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:335:19",className:"flex items-center gap-3 mb-3",children:[g.jsx(Kc,{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:336:21",className:"text-accent-green",size:16}),g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:337:21",className:"micro-label text-accent-green",children:r.phase})]}),g.jsx("p",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:339:19",className:"font-display font-semibold text-primary-light mb-1",children:r.title}),g.jsx("p",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:340:19",className:"micro-label text-secondary-light mb-3",children:r.duration}),g.jsx("ul",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:341:19",className:"list-disc pl-5 space-y-1 body-text text-secondary-light text-sm",children:r.details.map(l=>g.jsx("li",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:343:23",children:l},l))})]},r.phase))})]})}),g.jsx("section",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:352:9",id:"evaluation",className:"bg-secondary-dark py-[10vh]",children:g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:353:11",className:"w-full px-[6vw]",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:354:13",className:"mb-8",children:[g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:355:15",className:"micro-label text-secondary-light mb-4 block",children:"Evaluation Rubric"}),g.jsx("h2",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:356:15",className:"headline-lg text-primary-light",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"Scoring Framework"})]}),g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:361:13",className:"border border-white/10 overflow-hidden",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:362:15",className:"grid grid-cols-12 border-b border-white/10 bg-primary-dark/40",children:[g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:363:17",className:"col-span-6 p-4 micro-label text-accent-green",children:"Category"}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:364:17",className:"col-span-3 p-4 micro-label text-accent-green",children:"Score"}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:365:17",className:"col-span-3 p-4 micro-label text-accent-green",children:"Weight"})]}),j3.map(r=>g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:369:17",className:"grid grid-cols-12 border-b last:border-b-0 border-white/10",children:[g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:370:19",className:"col-span-6 p-4 body-text text-secondary-light text-sm",children:r.category}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:371:19",className:"col-span-3 p-4 body-text text-secondary-light text-sm",children:r.score}),g.jsx("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:372:19",className:"col-span-3 p-4 body-text text-secondary-light text-sm",children:r.weight})]},r.category))]})]})}),g.jsx("section",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:379:9",className:"bg-primary-dark py-[10vh]",children:g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:380:11",className:"w-full px-[6vw] grid grid-cols-1 md:grid-cols-2 gap-8",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:381:13",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:382:15",className:"flex items-center gap-3 mb-4",children:[g.jsx(pv,{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:383:17",className:"text-accent-green",size:18}),g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:384:17",className:"micro-label text-accent-green",children:"Presentation"})]}),g.jsx("p",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:386:15",className:"body-text text-secondary-light text-sm",children:"Final presentations are 20 minutes total: 12 minutes for research presentation and 8 minutes for technical Q&A with a panel of judges."})]}),g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:392:13",className:"border border-white/10 p-6",children:[g.jsxs("div",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:393:15",className:"flex items-center gap-3 mb-4",children:[g.jsx(Jh,{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:394:17",className:"text-accent-green",size:18}),g.jsx("span",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:395:17",className:"micro-label text-accent-green",children:"Incentives"})]}),g.jsx("ul",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:397:15",className:"space-y-2 body-text text-secondary-light text-sm",children:X3.map(r=>g.jsx("li",{"code-path":"src/pages/AppliedMathCompetitionPage.tsx:399:19",children:r},r))})]})]})})]})]})}const lv=["π","e","φ","√2","√3","√5","√7","ln2","γ","ζ(3)","τ"];function q3(){const s=De.useRef(null);return De.useEffect(()=>{const e=s.current;if(!e)return;const i=e.getContext("2d");if(!i)return;let r=0,l=0,c=Math.max(1,Math.min(2,window.devicePixelRatio||1)),f=0,h=[];const m=(y,E)=>Math.random()*(E-y)+y,p=()=>({x:m(0,r),y:m(0,l),vx:m(-.09,.09),vy:m(-.07,.07),size:m(13,28),alpha:m(.15,.45),symbol:lv[Math.floor(Math.random()*lv.length)]}),S=()=>{r=window.innerWidth,l=window.innerHeight,c=Math.max(1,Math.min(2,window.devicePixelRatio||1)),e.width=Math.floor(r*c),e.height=Math.floor(l*c),e.style.width=`${r}px`,e.style.height=`${l}px`,i.setTransform(c,0,0,c,0,0),i.textAlign="center",i.textBaseline="middle";const y=Math.max(30,Math.floor(r*l/32e3));h=Array.from({length:y},p)},_=()=>{i.fillStyle="rgba(5, 20, 10, 0.32)",i.fillRect(0,0,r,l);for(const y of h){y.x+=y.vx,y.y+=y.vy,y.x<-40&&(y.x=r+40),y.x>r+40&&(y.x=-40),y.y<-40&&(y.y=l+40),y.y>l+40&&(y.y=-40);const E=(Math.sin((y.x+y.y)*.01+performance.now()*8e-4)+1)/2,C=Math.min(.55,y.alpha+E*.15);i.font=`${y.size}px "IBM Plex Mono", monospace`,i.fillStyle=`rgba(163, 184, 170, ${C})`,i.fillText(y.symbol,y.x,y.y)}f=window.requestAnimationFrame(_)};S(),_();const x=()=>S();return window.addEventListener("resize",x),()=>{window.cancelAnimationFrame(f),window.removeEventListener("resize",x)}},[]),g.jsxs("div",{"code-path":"src/pages/NotFoundPage.tsx:99:5",className:"relative min-h-screen bg-primary-dark overflow-hidden",children:[g.jsx("canvas",{"code-path":"src/pages/NotFoundPage.tsx:100:7",ref:s,className:"fixed inset-0 z-10 pointer-events-none","aria-hidden":"true"}),g.jsx("div",{"code-path":"src/pages/NotFoundPage.tsx:101:7",className:"grain-overlay"}),g.jsx("div",{"code-path":"src/pages/NotFoundPage.tsx:102:7",className:"vignette"}),g.jsx("div",{"code-path":"src/pages/NotFoundPage.tsx:104:7",className:"fixed top-6 left-6 z-[200]",children:g.jsx("a",{"code-path":"src/pages/NotFoundPage.tsx:105:9",href:"#",className:"font-display text-xl font-bold text-primary-light tracking-tight hover:text-accent-green transition-colors",children:"FQE"})}),g.jsx("div",{"code-path":"src/pages/NotFoundPage.tsx:110:7",className:"fixed top-6 right-6 z-[200]",children:g.jsxs("a",{"code-path":"src/pages/NotFoundPage.tsx:111:9",href:"#",className:"text-link inline-flex items-center gap-2",children:[g.jsx(nl,{"code-path":"src/pages/NotFoundPage.tsx:112:11",size:14}),g.jsx("span",{"code-path":"src/pages/NotFoundPage.tsx:113:11",children:"Back to Main Site"})]})}),g.jsx("main",{"code-path":"src/pages/NotFoundPage.tsx:117:7",className:"relative z-20 min-h-screen flex items-center justify-center px-[6vw]",children:g.jsxs("div",{"code-path":"src/pages/NotFoundPage.tsx:118:9",className:"text-center max-w-2xl border border-white/10 bg-primary-dark/55 backdrop-blur-[2px] p-8 md:p-12",children:[g.jsx("span",{"code-path":"src/pages/NotFoundPage.tsx:119:11",className:"micro-label text-secondary-light mb-4 block",children:"Lost in Space"}),g.jsx("h1",{"code-path":"src/pages/NotFoundPage.tsx:120:11",className:"headline-xl text-primary-light mb-6",style:{fontSize:"clamp(2.6rem, 8.2vw, 6.6rem)",lineHeight:.95},children:"ERROR 404"}),g.jsx("p",{"code-path":"src/pages/NotFoundPage.tsx:123:11",className:"body-text text-secondary-light mb-8",children:"This page drifted beyond the rational plane. Navigate back to home and continue exploring FQE."}),g.jsxs("a",{"code-path":"src/pages/NotFoundPage.tsx:126:11",href:"#",className:"cta-button w-fit mx-auto",children:[g.jsx(q1,{"code-path":"src/pages/NotFoundPage.tsx:127:13",size:16}),g.jsx("span",{"code-path":"src/pages/NotFoundPage.tsx:128:13",children:"Return Home"})]})]})})]})}const Y3=[{id:1,className:"rotate-[-3deg] scale-100",caption:"alpha signal"},{id:2,className:"rotate-[2deg] scale-95",caption:"risk on"},{id:3,className:"rotate-[-1deg] scale-105",caption:"cheese factor"},{id:4,className:"rotate-[4deg] scale-100",caption:"latency: 0ms"},{id:5,className:"rotate-[-4deg] scale-95",caption:"sigma approved"},{id:6,className:"rotate-[1deg] scale-105",caption:"edge detected"},{id:7,className:"rotate-[-2deg] scale-100",caption:"stonks only"},{id:8,className:"rotate-[3deg] scale-95",caption:"market neutral?"},{id:9,className:"rotate-[-5deg] scale-100",caption:"quant vibes"},{id:10,className:"rotate-[5deg] scale-100",caption:"buy the dip"},{id:11,className:"rotate-[-2deg] scale-95",caption:"backtest cooked"},{id:12,className:"rotate-[1deg] scale-105",caption:"max sharpe"}],kc=["https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=240","https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=240","https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=240","https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=240"],cv=["If it is yellow, it is probably alpha.","Cheese is temporary. Edge is eternal.","Risk parity, but make it dairy.","I came for finance. I stayed for cheddar.","No beta, only brie."],uv=["alpha cheese generated +420 bps","latency lowered to 0.0001 parmesan-seconds","portfolio rebalanced into pure gouda","cheddar momentum breakout confirmed","quant stack upgraded with dairy acceleration","mean reversion but for mozzarella","volatility absorbed by provolone hedge","signal strength: extra sharp"],dv=["sell beta buy cheddar","risk-free rate replaced with brie yield","drawdown avoided via camembert overlay","factor model says: overweight cheese","options desk now trading swiss spreads","liquidity powered by fondue flow","market regime: aggressively cheesy","this is definitely peer reviewed"];function Z3(){const[s,e]=De.useState(!1),[i,r]=De.useState(!1),[l,c]=De.useState(0),[f,h]=De.useState(0),[m,p]=De.useState(()=>100+Math.floor(Math.random()*300)),[S,_]=De.useState(!1),x=Math.min(18+l*3,180),y=De.useMemo(()=>({alpha:(420+Math.floor(Math.random()*580)).toString(),sharpe:(10+Math.floor(Math.random()*90)).toString()}),[]);return De.useEffect(()=>{const E=window.setInterval(()=>{p(C=>C+25+Math.floor(Math.random()*140)+l%11)},120);return()=>window.clearInterval(E)},[l]),De.useEffect(()=>{if(!S)return;const E=window.setTimeout(()=>_(!1),1050);return()=>window.clearTimeout(E)},[S]),De.useLayoutEffect(()=>{const E="scrollRestoration"in window.history?window.history.scrollRestoration:null;"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");const C=()=>{const U=document.documentElement,O=U.style.scrollBehavior;U.style.scrollBehavior="auto",window.scrollTo(0,0),U.scrollTop=0,document.body.scrollTop=0,U.style.scrollBehavior=O};C();const M=window.requestAnimationFrame(C),b=window.setInterval(C,50),w=window.setTimeout(()=>{window.clearInterval(b),C()},800);return()=>{window.cancelAnimationFrame(M),window.clearInterval(b),window.clearTimeout(w),E&&(window.history.scrollRestoration=E)}},[]),g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:121:5",className:`min-h-screen bg-primary-dark relative ${s?"rainbow-mode":""} ${i?"shake-mode":""}`,children:[g.jsx("style",{"code-path":"src/pages/AlphaCheesePage.tsx:122:7",children:`
        @keyframes alphaPulse {
          0%, 100% { text-shadow: 0 0 10px rgba(74,222,128,0.3), 0 0 24px rgba(74,222,128,0.2); }
          50% { text-shadow: 0 0 22px rgba(74,222,128,0.65), 0 0 36px rgba(74,222,128,0.35); }
        }
        @keyframes jumpZoom {
          0% { transform: scale(0.65); }
          35% { transform: scale(1.25); }
          70% { transform: scale(2.15); }
          100% { transform: scale(3.1); }
        }
        @keyframes alphaFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes alphaMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes alphaMarqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes cheeseRain {
          0% { transform: translateY(-12vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.75; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .alpha-pulse { animation: alphaPulse 1.6s ease-in-out infinite; }
        .alpha-float { animation: alphaFloat 2.2s ease-in-out infinite; }
        .alpha-marquee-track {
          display: flex;
          width: max-content;
          animation: alphaMarquee 18s linear infinite;
        }
        .alpha-marquee-track-rev {
          display: flex;
          width: max-content;
          animation: alphaMarqueeReverse 14s linear infinite;
        }
        @keyframes cheeseSpin {
          0% { transform: rotate(0deg) translateY(0px); }
          50% { transform: rotate(180deg) translateY(-10px); }
          100% { transform: rotate(360deg) translateY(0px); }
        }
        @keyframes rainbowShift {
          0% { filter: hue-rotate(0deg) saturate(1); }
          100% { filter: hue-rotate(360deg) saturate(1.35); }
        }
        @keyframes wobble {
          0%,100% { transform: rotate(0deg) translateX(0); }
          25% { transform: rotate(1deg) translateX(2px); }
          50% { transform: rotate(-1deg) translateX(-2px); }
          75% { transform: rotate(1deg) translateX(1px); }
        }
        .cheese-float {
          position: absolute;
          width: 70px;
          height: 70px;
          opacity: 0.17;
          pointer-events: none;
          animation: cheeseSpin 8s linear infinite;
        }
        .wobble-card:hover {
          animation: wobble 350ms ease-in-out 1;
        }
        .rainbow-mode {
          animation: rainbowShift 2.5s linear infinite;
        }
        .shake-mode {
          animation: wobble 180ms linear infinite;
        }
        .cheese-rain {
          position: fixed;
          top: -10vh;
          z-index: 40;
          pointer-events: none;
          animation: cheeseRain linear infinite;
          font-size: 1.2rem;
          opacity: 0.7;
        }
      `}),g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:204:7",className:"grain-overlay"}),S&&g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:206:9",className:"fixed inset-0 z-[1200] flex items-center justify-center p-4",style:{background:"rgba(255,255,255,0.96)",animation:"rainbowShift 90ms linear infinite"},children:g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:210:11",className:"text-center",children:[g.jsx("img",{"code-path":"src/pages/AlphaCheesePage.tsx:211:13",src:"/alpha_cheese.png",alt:"ALPHA CHEESE JUMPSCARE",className:"w-[min(90vw,560px)] h-auto object-contain",style:{animation:"jumpZoom 950ms cubic-bezier(0.1, 0.85, 0.2, 1) forwards, alphaPulse 90ms linear infinite"}}),g.jsx("p",{"code-path":"src/pages/AlphaCheesePage.tsx:217:13",className:"headline-lg text-primary-dark mt-3",style:{fontSize:"clamp(1.8rem, 6vw, 3.2rem)"},children:"JUMPSCARE: ALPHA CHEESE"})]})}),Array.from({length:x}).map((E,C)=>g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:224:9",className:"cheese-rain",style:{left:`${C*13%100}%`,animationDuration:`${5+C%7}s`,animationDelay:`${C%9*.6}s`},children:"🧀"},C)),g.jsx("img",{"code-path":"src/pages/AlphaCheesePage.tsx:236:7",src:kc[0],alt:"",className:"cheese-float top-24 left-[8vw] rounded-full object-cover"}),g.jsx("img",{"code-path":"src/pages/AlphaCheesePage.tsx:237:7",src:kc[1],alt:"",className:"cheese-float top-[28vh] right-[10vw] rounded-full object-cover",style:{animationDuration:"10s"}}),g.jsx("img",{"code-path":"src/pages/AlphaCheesePage.tsx:238:7",src:kc[2],alt:"",className:"cheese-float bottom-[22vh] left-[16vw] rounded-full object-cover",style:{animationDuration:"12s"}}),g.jsx("img",{"code-path":"src/pages/AlphaCheesePage.tsx:239:7",src:kc[3],alt:"",className:"cheese-float bottom-[10vh] right-[14vw] rounded-full object-cover",style:{animationDuration:"9s"}}),g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:241:7",className:"fixed top-6 left-6 z-[200]",children:g.jsx("a",{"code-path":"src/pages/AlphaCheesePage.tsx:242:9",href:"#",className:"font-display text-xl font-bold text-primary-light tracking-tight hover:text-accent-green transition-colors",children:"FQE"})}),g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:247:7",className:"fixed top-6 right-6 z-[200]",children:g.jsxs("a",{"code-path":"src/pages/AlphaCheesePage.tsx:248:9",href:"#",className:"text-link inline-flex items-center gap-2",children:[g.jsx(nl,{"code-path":"src/pages/AlphaCheesePage.tsx:249:11",size:14}),g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:250:11",children:"Back to Main Site"})]})}),g.jsx("main",{"code-path":"src/pages/AlphaCheesePage.tsx:254:7",className:"py-[12vh]",children:g.jsxs("section",{"code-path":"src/pages/AlphaCheesePage.tsx:255:9",className:"w-full px-[6vw]",children:[g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:256:11",className:"text-center mb-10 alpha-float",children:[g.jsxs("span",{"code-path":"src/pages/AlphaCheesePage.tsx:257:13",className:"micro-label text-accent-green mb-4 inline-flex items-center gap-2",children:[g.jsx(ih,{"code-path":"src/pages/AlphaCheesePage.tsx:258:15",size:14}),"Easter Egg Found"]}),g.jsx("h1",{"code-path":"src/pages/AlphaCheesePage.tsx:261:13",className:"headline-lg text-primary-light mb-3 alpha-pulse",style:{fontSize:"clamp(2.2rem, 6.5vw, 5.2rem)"},children:"ALPHA CHEESE"}),g.jsx("p",{"code-path":"src/pages/AlphaCheesePage.tsx:264:13",className:"body-text text-secondary-light max-w-2xl mx-auto",children:"Congratulations. You found the forbidden quant artifact that backtests at 10,000x speed."}),g.jsx("p",{"code-path":"src/pages/AlphaCheesePage.tsx:267:13",className:"micro-label text-accent-green mt-4",children:cv[f]}),g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:270:13",className:"mt-5 flex flex-wrap justify-center gap-3",children:[g.jsx("button",{"code-path":"src/pages/AlphaCheesePage.tsx:271:15",type:"button",onClick:()=>e(E=>!E),className:"text-link inline-flex items-center gap-2 border border-white/15 px-4 py-2 hover:border-accent-green/40",children:g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:276:17",children:s?"Disable Rainbow Quant Mode":"Enable Rainbow Quant Mode"})}),g.jsx("button",{"code-path":"src/pages/AlphaCheesePage.tsx:278:15",type:"button",onClick:()=>r(E=>!E),className:"text-link inline-flex items-center gap-2 border border-white/15 px-4 py-2 hover:border-accent-green/40",children:g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:283:17",children:i?"Disable Volatility Mode":"Enable Volatility Mode"})}),g.jsx("button",{"code-path":"src/pages/AlphaCheesePage.tsx:285:15",type:"button",onClick:()=>h(E=>(E+1)%cv.length),className:"text-link inline-flex items-center gap-2 border border-white/15 px-4 py-2 hover:border-accent-green/40",children:g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:290:17",children:"Generate New Cheese Quote"})})]})]}),g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:295:11",className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:[g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:296:13",className:"photo-frame bg-secondary-dark/45 p-4 text-center",children:[g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:297:15",className:"micro-label text-accent-green block mb-1",children:"Alpha Generated"}),g.jsxs("p",{"code-path":"src/pages/AlphaCheesePage.tsx:298:15",className:"headline-lg text-primary-light",style:{fontSize:"clamp(1.6rem, 4vw, 2.2rem)"},children:[Number(y.alpha)+l,"%"]})]}),g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:300:13",className:"photo-frame bg-secondary-dark/45 p-4 text-center",children:[g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:301:15",className:"micro-label text-accent-green block mb-1",children:"Sigma Consumed"}),g.jsx("p",{"code-path":"src/pages/AlphaCheesePage.tsx:302:15",className:"headline-lg text-primary-light",style:{fontSize:"clamp(1.6rem, 4vw, 2.2rem)"},children:m.toLocaleString()})]}),g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:304:13",className:"photo-frame bg-secondary-dark/45 p-4 text-center",children:[g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:305:15",className:"micro-label text-accent-green block mb-1",children:"Cheese Minted"}),g.jsx("p",{"code-path":"src/pages/AlphaCheesePage.tsx:306:15",className:"headline-lg text-primary-light",style:{fontSize:"clamp(1.6rem, 4vw, 2.2rem)"},children:l})]})]}),g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:310:11",className:"text-center mb-8",children:g.jsx("button",{"code-path":"src/pages/AlphaCheesePage.tsx:311:13",type:"button",onClick:()=>c(E=>E+1),className:"cta-button",children:g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:316:15",children:"MINT MORE CHEESE (+1 ALPHA)"})})}),g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:320:11",className:"overflow-hidden border border-accent-green/25 bg-secondary-dark/50 px-4 py-3 mb-8",children:g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:321:13",className:"alpha-marquee-track gap-8",children:Array.from({length:24}).map((E,C)=>g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:323:17",className:"micro-label text-accent-green whitespace-nowrap",children:uv[C%uv.length]},C))})}),g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:330:11",className:"overflow-hidden border border-white/15 bg-primary-dark/70 px-4 py-3 mb-8",children:g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:331:13",className:"alpha-marquee-track-rev gap-8",children:Array.from({length:24}).map((E,C)=>g.jsx("span",{"code-path":"src/pages/AlphaCheesePage.tsx:333:17",className:"micro-label text-secondary-light whitespace-nowrap",children:dv[C%dv.length]},C))})}),g.jsx("div",{"code-path":"src/pages/AlphaCheesePage.tsx:340:11",className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:Y3.map(E=>g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:342:15",className:`photo-frame wobble-card bg-secondary-dark/40 p-3 transition-transform duration-300 hover:scale-105 cursor-pointer ${E.className}`,onClick:()=>_(!0),role:"button",tabIndex:0,onKeyDown:C=>{(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),_(!0))},children:[g.jsx("img",{"code-path":"src/pages/AlphaCheesePage.tsx:355:17",src:"/alpha_cheese.png",alt:"Alpha Cheese",className:"w-full h-[180px] md:h-[240px] object-cover"}),g.jsx("p",{"code-path":"src/pages/AlphaCheesePage.tsx:360:17",className:"micro-label text-accent-green mt-3 text-center",children:E.caption})]},E.id))}),g.jsxs("div",{"code-path":"src/pages/AlphaCheesePage.tsx:365:11",className:"mt-10 text-center",children:[g.jsx("p",{"code-path":"src/pages/AlphaCheesePage.tsx:366:13",className:"micro-label text-secondary-light",children:"this page is not investment advice (unless cheese breaks resistance)"}),g.jsxs("p",{"code-path":"src/pages/AlphaCheesePage.tsx:369:13",className:"micro-label text-accent-green mt-2",children:["current fake sharpe: ",y.sharpe,".",(l%10).toString()]})]})]})})]})}const o_="#/trading-competition",l_="#/applied-math-competition",K3="#/competitions",Q3="#/live-scoreboard",J3="#/alpha-cheese",$3="#/alphja-cheese",eC="#/alpha_cheese",tC="#/alphacheese",nC="https://calendar.google.com",iC="https://calendar.google.com/calendar/embed?height=720&wkst=1&ctz=America%2FNew_York&bgcolor=%23103322&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=MONTH&src=YmFydWNoZnFlQGdtYWlsLmNvbQ&color=%23039BE5",aC="FQE123ABC";function sC(s){return s==="applied"}function fv(s){return s===o_||s===K3?"trading":s===l_?"applied":s===J3||s===$3||s===eC||s===tC?"alpha-cheese":s.startsWith("#/")&&s!=="#/"?"not-found":"main"}function rC({targetLabel:s,password:e,error:i,onPasswordChange:r,onUnlock:l}){return g.jsxs("div",{"code-path":"src/App.tsx:71:5",className:"min-h-screen bg-primary-dark text-primary-light relative overflow-hidden",children:[g.jsx("div",{"code-path":"src/App.tsx:72:7",className:"grain-overlay"}),g.jsx("div",{"code-path":"src/App.tsx:73:7",className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.16),transparent_38%),linear-gradient(180deg,rgba(5,20,10,0.2),rgba(5,20,10,0.82))]"}),g.jsx("div",{"code-path":"src/App.tsx:75:7",className:"relative min-h-screen px-[6vw] py-10 flex items-center justify-center",children:g.jsxs("div",{"code-path":"src/App.tsx:76:9",className:"w-full max-w-xl border border-white/10 bg-secondary-dark/55 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.36)] p-8 md:p-10",children:[g.jsxs("a",{"code-path":"src/App.tsx:77:11",href:"#competition",className:"inline-flex items-center gap-2 micro-label text-secondary-light hover:text-accent-green transition-colors mb-8",children:[g.jsx(nl,{"code-path":"src/App.tsx:81:13",size:14}),"Back to competition overview"]}),g.jsx("div",{"code-path":"src/App.tsx:85:11",className:"w-14 h-14 rounded-full border border-accent-green/35 bg-accent-green/10 flex items-center justify-center mb-6",children:g.jsx($1,{"code-path":"src/App.tsx:86:13",size:22,className:"text-accent-green"})}),g.jsx("span",{"code-path":"src/App.tsx:89:11",className:"micro-label text-secondary-light mb-4 block",children:"Protected Access"}),g.jsx("h1",{"code-path":"src/App.tsx:90:11",className:"headline-lg text-primary-light mb-4",style:{fontSize:"clamp(2rem, 4vw, 3.25rem)"},children:"ENTER PASSWORD"}),g.jsxs("p",{"code-path":"src/App.tsx:93:11",className:"body-text text-secondary-light mb-8 max-w-lg",children:["Enter the shared password to continue to ",s,"."]}),g.jsxs("form",{"code-path":"src/App.tsx:97:11",onSubmit:l,className:"space-y-4",children:[g.jsxs("label",{"code-path":"src/App.tsx:98:13",className:"block",children:[g.jsx("span",{"code-path":"src/App.tsx:99:15",className:"micro-label text-secondary-light mb-2 block",children:"Password"}),g.jsx("input",{"code-path":"src/App.tsx:100:15",type:"password",value:e,onChange:c=>r(c.target.value),className:"competition-password-input w-full",placeholder:"Enter password",autoComplete:"current-password"})]}),i&&g.jsx("p",{"code-path":"src/App.tsx:111:15",className:"body-text text-red-300 text-sm",children:i}),g.jsxs("button",{"code-path":"src/App.tsx:116:13",type:"submit",className:"cta-button w-full sm:w-fit",children:[g.jsx("span",{"code-path":"src/App.tsx:117:15",children:"Unlock Competition Page"}),g.jsx(zi,{"code-path":"src/App.tsx:118:15",size:16})]})]})]})})]})}function oC(){const[s,e]=De.useState(()=>fv(window.location.hash)),[i,r]=De.useState(""),[l,c]=De.useState(""),[f,h]=De.useState(null),[m,p]=De.useState(!1),[S,_]=De.useState(!1);De.useEffect(()=>{const w=()=>{const U=fv(window.location.hash);if(h(null),r(""),c(""),U==="alpha-cheese"){const O=()=>window.scrollTo({top:0,left:0,behavior:"auto"});O(),window.requestAnimationFrame(O)}e(U)};return window.addEventListener("hashchange",w),()=>window.removeEventListener("hashchange",w)},[]),De.useEffect(()=>{s!=="main"&&window.scrollTo({top:0,left:0,behavior:"auto"})},[s]),De.useEffect(()=>{l&&c("")},[i,l]),De.useEffect(()=>{if(s!=="main")return;const w=window.location.hash;if(!w||w.startsWith("#/"))return;const U=w.slice(1);if(!U)return;const O=()=>{const z=document.getElementById(U);z&&z.scrollIntoView({behavior:"auto",block:"start"})};O();const V=window.requestAnimationFrame(O),I=window.setTimeout(O,60);return()=>{window.cancelAnimationFrame(V),window.clearTimeout(I)}},[s]),De.useEffect(()=>{if(!m||s!=="main")return;const w=document.getElementById("calendar");w&&w.scrollIntoView({behavior:"smooth",block:"start"})},[m,s]),De.useEffect(()=>{if(s!=="main")return;const w=()=>{_(window.scrollY>560)};return w(),window.addEventListener("scroll",w,{passive:!0}),()=>window.removeEventListener("scroll",w)},[s]);const x=s==="applied"?"FQE Applied Math Competition":"",y=w=>{if(w.preventDefault(),i===aC){h(window.location.hash),r(""),c("");return}c("Incorrect password. Please try again.")};if(sC(s)&&f!==window.location.hash)return g.jsx(rC,{"code-path":"src/App.tsx:233:7",targetLabel:x,password:i,error:l,onPasswordChange:r,onUnlock:y});if(s==="trading")return g.jsx(H3,{"code-path":"src/App.tsx:244:12"});if(s==="applied")return g.jsx(W3,{"code-path":"src/App.tsx:248:12"});if(s==="alpha-cheese")return g.jsx(Z3,{"code-path":"src/App.tsx:252:12"});if(s==="not-found")return g.jsx(q3,{"code-path":"src/App.tsx:256:12"});const E=()=>{p(w=>!w)},C=m?"Hide the Calendar":"See the Calendar",M=[{label:"Trading",title:"FQE Trading Competition",description:"Fall 2026, 2nd annual trading competition for CUNY students interested in real-time strategy building.",highlights:["Open to all CUNY students","Applications close September 28","Trading day: October 2"],href:o_,cta:"Explore Trading Track",Icon:F1,status:"Open"},{label:"Applied Math",title:"FQE Applied Math Competition",description:"A rigorous quantitative problem-solving competition currently being prepared for Baruch undergraduates.",highlights:["Applications coming soon","Math-first problem solving","Structured competition format"],href:l_,cta:"Preview Applied Math Track",Icon:L1,status:"Coming Soon"},{isVisible:!1,label:"Coming Soon",title:"Trading Competition Live Score Board",description:"A real-time standings view for competition day performance, rankings, and key metrics.",highlights:["Live updates","Transparent rankings","Post-round snapshots"],href:Q3,cta:"Live Score Board",Icon:Jh,status:"Soon"}],b=[{title:"Workshops",description:"Hackathons, resume reviews, LeetCode sessions, and technical walkthroughs.",Icon:I1},{title:"Alumni and Networking",description:"In-person bank visits, guest speakers, and direct industry exposure.",Icon:Vc},{title:"Team Culture",description:"Poker nights, collaborative socials, and events that strengthen execution as a team.",Icon:ih},{title:"Education Events",description:"Math primers and focused sessions that build core quantitative depth.",Icon:Kc}];return g.jsxs("div",{"code-path":"src/App.tsx:320:5",className:"relative",children:[g.jsx("div",{"code-path":"src/App.tsx:322:7",className:"grain-overlay"}),g.jsx(cy,{"code-path":"src/App.tsx:325:7"}),g.jsxs("main",{"code-path":"src/App.tsx:328:7",children:[g.jsx(uy,{"code-path":"src/App.tsx:330:9"}),g.jsx(b3,{"code-path":"src/App.tsx:333:9",id:"about",layout:"right-photo",microLabel:"About",headline:" FQE @ Baruch",body:"Financial Quants and Engineers (FQE) develops technical depth and professional readiness at the intersection of quantitative finance and technology. Members work across data science, risk analysis, quantitative modeling, and algorithmic trading through workshops, technical discussions, and practical projects. Our goal is to help Baruch undergraduates build the skills, portfolio, and network needed for competitive quant pathways.",imageSrc:"/about-baruch.jpg",imageAlt:"Baruch campus building",items:[{label:"Workshops",description:"Applied sessions in computer science, math, hackathons, and computer architecture."},{label:"Projects",description:"End-to-end research, backtests, and real world applications."},{label:"Mentorship",description:"Direct access to alumni, faculty, and industry leaders shaping the future of finance."}]}),g.jsx(E3,{"code-path":"src/App.tsx:349:9"}),g.jsxs("section",{"code-path":"src/App.tsx:352:9",id:"competition",className:"min-h-screen bg-primary-dark relative overflow-hidden flex items-center py-[10vh]",children:[g.jsx(Ra,{"code-path":"src/App.tsx:356:11"}),g.jsx("div",{"code-path":"src/App.tsx:357:11",className:"relative z-10 w-full px-[6vw]",children:g.jsxs("div",{"code-path":"src/App.tsx:358:13",className:"max-w-5xl mx-auto relative z-10",children:[g.jsx("span",{"code-path":"src/App.tsx:359:15",className:"micro-label text-secondary-light mb-4 block",children:"Competition"}),g.jsx("h2",{"code-path":"src/App.tsx:362:15",className:"headline-lg text-primary-light mb-4",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"Compete with Precision"}),g.jsx("p",{"code-path":"src/App.tsx:365:15",className:"body-text text-secondary-light max-w-3xl mb-8",children:"FQE runs technical competition tracks for quantitatively curious students. The trading track is active, and the applied math competition is coming soon."}),g.jsxs("div",{"code-path":"src/App.tsx:370:15",className:"flex flex-wrap gap-3 mb-10",children:[g.jsx("span",{"code-path":"src/App.tsx:371:17",className:"micro-label text-primary-light border border-white/15 bg-white/5 px-3 py-2",children:"Undergraduate Focus"}),g.jsx("span",{"code-path":"src/App.tsx:372:17",className:"micro-label text-primary-light border border-white/15 bg-white/5 px-3 py-2",children:"Technical Screening"}),g.jsx("span",{"code-path":"src/App.tsx:373:17",className:"micro-label text-primary-light border border-white/15 bg-white/5 px-3 py-2",children:"Live Performance Metrics"}),g.jsx("span",{"code-path":"src/App.tsx:374:17",className:"micro-label text-primary-light border border-white/15 bg-white/5 px-3 py-2",children:"Team-Based Format"})]}),g.jsx("div",{"code-path":"src/App.tsx:377:15",className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:M.filter(({isVisible:w=!0})=>w).map(({label:w,title:U,description:O,highlights:V,href:I,cta:z,Icon:A,status:B})=>g.jsxs("div",{"code-path":"src/App.tsx:381:19",className:"competition-card border border-white/10 bg-secondary-dark/40 p-6 flex flex-col justify-between",children:[g.jsxs("div",{"code-path":"src/App.tsx:382:21",children:[g.jsxs("div",{"code-path":"src/App.tsx:383:23",className:"flex items-center justify-between mb-5",children:[g.jsx("span",{"code-path":"src/App.tsx:384:25",className:"micro-label text-accent-green",children:w}),g.jsxs("div",{"code-path":"src/App.tsx:385:25",className:"flex items-center gap-2",children:[g.jsx("span",{"code-path":"src/App.tsx:386:27",className:`micro-label px-2 py-1 border ${B==="Open"?"text-emerald-300 border-emerald-300/40":"text-amber-300 border-amber-300/40"}`,children:B}),g.jsx(A,{"code-path":"src/App.tsx:389:27",size:18,className:"text-accent-green"})]})]}),g.jsx("h3",{"code-path":"src/App.tsx:392:23",className:"font-display text-primary-light text-xl font-semibold mb-3",children:U}),g.jsx("p",{"code-path":"src/App.tsx:393:23",className:"body-text text-secondary-light text-sm mb-5",children:O}),g.jsx("ul",{"code-path":"src/App.tsx:394:23",className:"space-y-2 mb-6",children:V.map(Y=>g.jsxs("li",{"code-path":"src/App.tsx:396:27",className:"body-text text-secondary-light text-sm flex items-start gap-2",children:[g.jsx(ih,{"code-path":"src/App.tsx:397:29",size:14,className:"text-accent-green mt-1 shrink-0"}),g.jsx("span",{"code-path":"src/App.tsx:398:29",children:Y})]},Y))})]}),g.jsxs("a",{"code-path":"src/App.tsx:403:21",href:I,className:"cta-button w-fit",children:[g.jsx("span",{"code-path":"src/App.tsx:404:23",children:z}),g.jsx(zi,{"code-path":"src/App.tsx:405:23",size:16})]})]},U))})]})})]}),g.jsx(R3,{"code-path":"src/App.tsx:416:9"}),g.jsx(D3,{"code-path":"src/App.tsx:419:9"}),g.jsxs("section",{"code-path":"src/App.tsx:422:9",id:"events",className:"min-h-screen bg-primary-dark relative overflow-hidden flex items-center py-[10vh]",children:[g.jsx(Ra,{"code-path":"src/App.tsx:423:11"}),g.jsxs("div",{"code-path":"src/App.tsx:424:11",className:"relative z-10 w-full px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[g.jsx("div",{"code-path":"src/App.tsx:425:13",className:"photo-frame aspect-[3/4] max-h-[72vh]",children:g.jsx("img",{"code-path":"src/App.tsx:426:15",src:"/bny-visit.jfif",alt:"Group collaboration",className:"w-full h-full object-cover",style:{objectPosition:"18% center",filter:"brightness(1.08) contrast(1.06)"}})}),g.jsxs("div",{"code-path":"src/App.tsx:434:13",className:"flex flex-col justify-center",children:[g.jsx("span",{"code-path":"src/App.tsx:435:15",className:"micro-label text-secondary-light mb-6",children:"Events"}),g.jsx("h2",{"code-path":"src/App.tsx:436:15",className:"headline-lg text-primary-light mb-6",style:{fontSize:"clamp(2rem, 4vw, 3.5rem)"},children:"FQE Activities and Schedule"}),g.jsx("p",{"code-path":"src/App.tsx:439:15",className:"body-text text-secondary-light mb-8",children:"Ongoing technical programming, collaborative project sessions, and curated industry engagement. Use the live calendar controls below to open and navigate the full event schedule instantly."}),g.jsx("div",{"code-path":"src/App.tsx:444:15",className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:b.map(({title:w,description:U,Icon:O})=>g.jsxs("div",{"code-path":"src/App.tsx:446:19",className:"hover-panel border border-white/10 bg-primary-dark/30 p-4",children:[g.jsxs("div",{"code-path":"src/App.tsx:447:21",className:"flex items-center gap-2 mb-2",children:[g.jsx(O,{"code-path":"src/App.tsx:448:23",size:14,className:"text-accent-green"}),g.jsx("span",{"code-path":"src/App.tsx:449:23",className:"micro-label text-accent-green",children:w})]}),g.jsx("p",{"code-path":"src/App.tsx:451:21",className:"body-text text-secondary-light text-sm",children:U})]},w))}),g.jsxs("button",{"code-path":"src/App.tsx:456:15",type:"button",onClick:E,"aria-expanded":m,className:"cta-button w-fit",children:[g.jsx("span",{"code-path":"src/App.tsx:462:17",children:C}),m?g.jsx(C1,{"code-path":"src/App.tsx:463:35",size:16}):g.jsx(zi,{"code-path":"src/App.tsx:463:61",size:16})]})]})]})]}),m&&g.jsx(P3,{"code-path":"src/App.tsx:470:11",manageUrl:nC,embedUrl:iC}),g.jsx(U3,{"code-path":"src/App.tsx:477:9"}),g.jsx(L3,{"code-path":"src/App.tsx:480:9"})]}),S&&g.jsx("button",{"code-path":"src/App.tsx:484:9",type:"button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"fixed right-5 bottom-5 z-[250] inline-flex items-center justify-center w-11 h-11 border border-accent-green/60 bg-primary-dark/90 text-accent-green hover:bg-accent-green/10 transition-colors","aria-label":"Back to top",children:g.jsx(D1,{"code-path":"src/App.tsx:490:11",size:16})})]})}S1.createRoot(document.getElementById("root")).render(g.jsx(De.StrictMode,{"code-path":"src/main.tsx:7:3",children:g.jsx(oC,{"code-path":"src/main.tsx:8:5"})}));
