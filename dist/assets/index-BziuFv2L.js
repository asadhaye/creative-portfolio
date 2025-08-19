(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var td={exports:{}},Zo={},nd={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function l_(){if(km)return St;km=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=m&&L[m]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(L,q,_e){this.props=L,this.context=q,this.refs=w,this.updater=_e||y}S.prototype.isReactComponent={},S.prototype.setState=function(L,q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,q,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=S.prototype;function N(L,q,_e){this.props=L,this.context=q,this.refs=w,this.updater=_e||y}var C=N.prototype=new _;C.constructor=N,M(C,S.prototype),C.isPureReactComponent=!0;var E=Array.isArray,U=Object.prototype.hasOwnProperty,z={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function k(L,q,_e){var Ne,Re={},ie=null,pe=null;if(q!=null)for(Ne in q.ref!==void 0&&(pe=q.ref),q.key!==void 0&&(ie=""+q.key),q)U.call(q,Ne)&&!B.hasOwnProperty(Ne)&&(Re[Ne]=q[Ne]);var ue=arguments.length-2;if(ue===1)Re.children=_e;else if(1<ue){for(var Ce=Array(ue),Oe=0;Oe<ue;Oe++)Ce[Oe]=arguments[Oe+2];Re.children=Ce}if(L&&L.defaultProps)for(Ne in ue=L.defaultProps,ue)Re[Ne]===void 0&&(Re[Ne]=ue[Ne]);return{$$typeof:s,type:L,key:ie,ref:pe,props:Re,_owner:z.current}}function R(L,q){return{$$typeof:s,type:L.type,key:q,ref:L.ref,props:L.props,_owner:L._owner}}function I(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function H(L){var q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(_e){return q[_e]})}var te=/\/+/g;function Q(L,q){return typeof L=="object"&&L!==null&&L.key!=null?H(""+L.key):q.toString(36)}function le(L,q,_e,Ne,Re){var ie=typeof L;(ie==="undefined"||ie==="boolean")&&(L=null);var pe=!1;if(L===null)pe=!0;else switch(ie){case"string":case"number":pe=!0;break;case"object":switch(L.$$typeof){case s:case e:pe=!0}}if(pe)return pe=L,Re=Re(pe),L=Ne===""?"."+Q(pe,0):Ne,E(Re)?(_e="",L!=null&&(_e=L.replace(te,"$&/")+"/"),le(Re,q,_e,"",function(Oe){return Oe})):Re!=null&&(I(Re)&&(Re=R(Re,_e+(!Re.key||pe&&pe.key===Re.key?"":(""+Re.key).replace(te,"$&/")+"/")+L)),q.push(Re)),1;if(pe=0,Ne=Ne===""?".":Ne+":",E(L))for(var ue=0;ue<L.length;ue++){ie=L[ue];var Ce=Ne+Q(ie,ue);pe+=le(ie,q,_e,Ce,Re)}else if(Ce=x(L),typeof Ce=="function")for(L=Ce.call(L),ue=0;!(ie=L.next()).done;)ie=ie.value,Ce=Ne+Q(ie,ue++),pe+=le(ie,q,_e,Ce,Re);else if(ie==="object")throw q=String(L),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return pe}function ne(L,q,_e){if(L==null)return L;var Ne=[],Re=0;return le(L,Ne,"","",function(ie){return q.call(_e,ie,Re++)}),Ne}function ee(L){if(L._status===-1){var q=L._result;q=q(),q.then(function(_e){(L._status===0||L._status===-1)&&(L._status=1,L._result=_e)},function(_e){(L._status===0||L._status===-1)&&(L._status=2,L._result=_e)}),L._status===-1&&(L._status=0,L._result=q)}if(L._status===1)return L._result.default;throw L._result}var oe={current:null},F={transition:null},ce={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:F,ReactCurrentOwner:z};return St.Children={map:ne,forEach:function(L,q,_e){ne(L,function(){q.apply(this,arguments)},_e)},count:function(L){var q=0;return ne(L,function(){q++}),q},toArray:function(L){return ne(L,function(q){return q})||[]},only:function(L){if(!I(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},St.Component=S,St.Fragment=t,St.Profiler=o,St.PureComponent=N,St.StrictMode=r,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,St.cloneElement=function(L,q,_e){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ne=M({},L.props),Re=L.key,ie=L.ref,pe=L._owner;if(q!=null){if(q.ref!==void 0&&(ie=q.ref,pe=z.current),q.key!==void 0&&(Re=""+q.key),L.type&&L.type.defaultProps)var ue=L.type.defaultProps;for(Ce in q)U.call(q,Ce)&&!B.hasOwnProperty(Ce)&&(Ne[Ce]=q[Ce]===void 0&&ue!==void 0?ue[Ce]:q[Ce])}var Ce=arguments.length-2;if(Ce===1)Ne.children=_e;else if(1<Ce){ue=Array(Ce);for(var Oe=0;Oe<Ce;Oe++)ue[Oe]=arguments[Oe+2];Ne.children=ue}return{$$typeof:s,type:L.type,key:Re,ref:ie,props:Ne,_owner:pe}},St.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},St.createElement=k,St.createFactory=function(L){var q=k.bind(null,L);return q.type=L,q},St.createRef=function(){return{current:null}},St.forwardRef=function(L){return{$$typeof:d,render:L}},St.isValidElement=I,St.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ee}},St.memo=function(L,q){return{$$typeof:p,type:L,compare:q===void 0?null:q}},St.startTransition=function(L){var q=F.transition;F.transition={};try{L()}finally{F.transition=q}},St.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},St.useCallback=function(L,q){return oe.current.useCallback(L,q)},St.useContext=function(L){return oe.current.useContext(L)},St.useDebugValue=function(){},St.useDeferredValue=function(L){return oe.current.useDeferredValue(L)},St.useEffect=function(L,q){return oe.current.useEffect(L,q)},St.useId=function(){return oe.current.useId()},St.useImperativeHandle=function(L,q,_e){return oe.current.useImperativeHandle(L,q,_e)},St.useInsertionEffect=function(L,q){return oe.current.useInsertionEffect(L,q)},St.useLayoutEffect=function(L,q){return oe.current.useLayoutEffect(L,q)},St.useMemo=function(L,q){return oe.current.useMemo(L,q)},St.useReducer=function(L,q,_e){return oe.current.useReducer(L,q,_e)},St.useRef=function(L){return oe.current.useRef(L)},St.useState=function(L){return oe.current.useState(L)},St.useSyncExternalStore=function(L,q,_e){return oe.current.useSyncExternalStore(L,q,_e)},St.useTransition=function(){return oe.current.useTransition()},St.version="18.2.0",St}var Fm;function Wf(){return Fm||(Fm=1,nd.exports=l_()),nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function c_(){if(Om)return Zo;Om=1;var s=Wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,p){var v,m={},x=null,y=null;p!==void 0&&(x=""+p),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(y=f.ref);for(v in f)r.call(f,v)&&!l.hasOwnProperty(v)&&(m[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)m[v]===void 0&&(m[v]=f[v]);return{$$typeof:e,type:d,key:x,ref:y,props:m,_owner:o.current}}return Zo.Fragment=t,Zo.jsx=c,Zo.jsxs=c,Zo}var zm;function u_(){return zm||(zm=1,td.exports=c_()),td.exports}var T=u_(),ge=Wf(),Al={},id={exports:{}},Fn={},rd={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function d_(){return Bm||(Bm=1,(function(s){function e(F,ce){var L=F.length;F.push(ce);e:for(;0<L;){var q=L-1>>>1,_e=F[q];if(0<o(_e,ce))F[q]=ce,F[L]=_e,L=q;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var ce=F[0],L=F.pop();if(L!==ce){F[0]=L;e:for(var q=0,_e=F.length,Ne=_e>>>1;q<Ne;){var Re=2*(q+1)-1,ie=F[Re],pe=Re+1,ue=F[pe];if(0>o(ie,L))pe<_e&&0>o(ue,ie)?(F[q]=ue,F[pe]=L,q=pe):(F[q]=ie,F[Re]=L,q=Re);else if(pe<_e&&0>o(ue,L))F[q]=ue,F[pe]=L,q=pe;else break e}}return ce}function o(F,ce){var L=F.sortIndex-ce.sortIndex;return L!==0?L:F.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var f=[],p=[],v=1,m=null,x=3,y=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(F){for(var ce=t(p);ce!==null;){if(ce.callback===null)r(p);else if(ce.startTime<=F)r(p),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=t(p)}}function E(F){if(w=!1,C(F),!M)if(t(f)!==null)M=!0,ee(U);else{var ce=t(p);ce!==null&&oe(E,ce.startTime-F)}}function U(F,ce){M=!1,w&&(w=!1,_(k),k=-1),y=!0;var L=x;try{for(C(ce),m=t(f);m!==null&&(!(m.expirationTime>ce)||F&&!H());){var q=m.callback;if(typeof q=="function"){m.callback=null,x=m.priorityLevel;var _e=q(m.expirationTime<=ce);ce=s.unstable_now(),typeof _e=="function"?m.callback=_e:m===t(f)&&r(f),C(ce)}else r(f);m=t(f)}if(m!==null)var Ne=!0;else{var Re=t(p);Re!==null&&oe(E,Re.startTime-ce),Ne=!1}return Ne}finally{m=null,x=L,y=!1}}var z=!1,B=null,k=-1,R=5,I=-1;function H(){return!(s.unstable_now()-I<R)}function te(){if(B!==null){var F=s.unstable_now();I=F;var ce=!0;try{ce=B(!0,F)}finally{ce?Q():(z=!1,B=null)}}else z=!1}var Q;if(typeof N=="function")Q=function(){N(te)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ne=le.port2;le.port1.onmessage=te,Q=function(){ne.postMessage(null)}}else Q=function(){S(te,0)};function ee(F){B=F,z||(z=!0,Q())}function oe(F,ce){k=S(function(){F(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ee(U))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(F){switch(x){case 1:case 2:case 3:var ce=3;break;default:ce=x}var L=x;x=ce;try{return F()}finally{x=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,ce){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var L=x;x=F;try{return ce()}finally{x=L}},s.unstable_scheduleCallback=function(F,ce,L){var q=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,F){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=L+_e,F={id:v++,callback:ce,priorityLevel:F,startTime:L,expirationTime:_e,sortIndex:-1},L>q?(F.sortIndex=L,e(p,F),t(f)===null&&F===t(p)&&(w?(_(k),k=-1):w=!0,oe(E,L-q))):(F.sortIndex=_e,e(f,F),M||y||(M=!0,ee(U))),F},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(F){var ce=x;return function(){var L=x;x=ce;try{return F.apply(this,arguments)}finally{x=L}}}})(sd)),sd}var Hm;function f_(){return Hm||(Hm=1,rd.exports=d_()),rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function h_(){if(Gm)return Fn;Gm=1;var s=Wf(),e=f_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},m={};function x(n){return f.call(m,n)?!0:f.call(v,n)?!1:p.test(n)?m[n]=!0:(v[n]=!0,!1)}function y(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||y(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,u,h,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,N);S[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,N);S[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,N);S[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,i,a,u){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,h,u)&&(a=null),u||h===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var E=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),z=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),H=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),F=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var L=Object.assign,q;function _e(n){if(q===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);q=i&&i[1]||""}return`
`+q+n}var Ne=!1;function Re(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){u=re}n.call(i.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var h=re.stack.split(`
`),g=u.stack.split(`
`),b=h.length-1,O=g.length-1;1<=b&&0<=O&&h[b]!==g[O];)O--;for(;1<=b&&0<=O;b--,O--)if(h[b]!==g[O]){if(b!==1||O!==1)do if(b--,O--,0>O||h[b]!==g[O]){var V=`
`+h[b].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=b&&0<=O);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?_e(n):""}function ie(n){switch(n.tag){case 5:return _e(n.type);case 16:return _e("Lazy");case 13:return _e("Suspense");case 19:return _e("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case z:return"Portal";case R:return"Profiler";case k:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case I:return(n._context.displayName||"Context")+".Provider";case te:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:pe(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return pe(n(i))}catch{}}return null}function ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ot(n){var i=Oe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){u=""+b,g.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=ot(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Oe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function G(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function It(n,i){var a=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function wt(n,i){i=i.checked,i!=null&&C(n,"checked",i,!1)}function Qe(n,i){wt(n,i);var a=Ce(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ze(n,i.type,a):i.hasOwnProperty("defaultValue")&&ze(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ft(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ze(n,i,a){(i!=="number"||G(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ft=Array.isArray;function Ht(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Gt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ft(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ce(a)}}function A(n,i){var a=Ce(i.value),u=Ce(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function J(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,Je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function be(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){Ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),He[i]=He[n]})});function Ee(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||He.hasOwnProperty(n)&&He[n]?(""+i).trim():i+"px"}function De(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=Ee(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var at=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(n,i){if(i){if(at[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Me=null,Ae=null,Ue=null;function Se(n){if(n=Lo(n)){if(typeof Me!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ga(i),Me(n.stateNode,n.type,i))}}function he(n){Ae?Ue?Ue.push(n):Ue=[n]:Ae=n}function Xe(){if(Ae){var n=Ae,i=Ue;if(Ue=Ae=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function dt(n,i){return n(i)}function Nt(){}var Et=!1;function Jn(n,i,a){if(Et)return n(i,a);Et=!0;try{return dt(n,i,a)}finally{Et=!1,(Ae!==null||Ue!==null)&&(Nt(),Xe())}}function vn(n,i){var a=n.stateNode;if(a===null)return null;var u=Ga(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var fs=!1;if(d)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){fs=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{fs=!1}function go(n,i,a,u,h,g,b,O,V){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(ve){this.onError(ve)}}var tr=!1,Dr=null,Ii=!1,hs=null,ps={onError:function(n){tr=!0,Dr=n}};function Sa(n,i,a,u,h,g,b,O,V){tr=!1,Dr=null,go.apply(ps,arguments)}function Ma(n,i,a,u,h,g,b,O,V){if(Sa.apply(this,arguments),tr){if(tr){var re=Dr;tr=!1,Dr=null}else throw Error(t(198));Ii||(Ii=!0,hs=re)}}function Pi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function wa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ea(n){if(Pi(n)!==n)throw Error(t(188))}function Ec(n){var i=n.alternate;if(!i){if(i=Pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Ea(h),n;if(g===u)return Ea(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=g;else{for(var b=!1,O=h.child;O;){if(O===a){b=!0,a=h,u=g;break}if(O===u){b=!0,u=h,a=g;break}O=O.sibling}if(!b){for(O=g.child;O;){if(O===a){b=!0,a=g,u=h;break}if(O===u){b=!0,u=g,a=h;break}O=O.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ta(n){return n=Ec(n),n!==null?ba(n):null}function ba(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ba(n);if(i!==null)return i;n=n.sibling}return null}var P=e.unstable_scheduleCallback,Z=e.unstable_cancelCallback,se=e.unstable_shouldYield,ae=e.unstable_requestPaint,X=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ge=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,st=e.unstable_LowPriority,lt=e.unstable_IdlePriority,et=null,ct=null;function Pt(n){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:nt,Ot=Math.log,Lt=Math.LN2;function nt(n){return n>>>=0,n===0?32:31-(Ot(n)/Lt|0)|0}var Dt=64,_t=4194304;function nn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function oi(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,b=a&268435455;if(b!==0){var O=b&~h;O!==0?u=nn(O):(g&=b,g!==0&&(u=nn(g)))}else b=a&~h,b!==0?u=nn(b):g!==0&&(u=nn(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Tt(i),h=1<<a,u|=n[a],i&=~h;return u}function bn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ur(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var b=31-Tt(g),O=1<<b,V=h[b];V===-1?((O&a)===0||(O&u)!==0)&&(h[b]=bn(O,i)):V<=i&&(n.expiredLanes|=O),g&=~O}}function zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=Dt;return Dt<<=1,(Dt&4194240)===0&&(Dt=64),n}function xn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Jt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tt(i),n[i]=a}function _n(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Tt(a),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~g}}function kr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Tt(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var yt=0;function hh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ph,Tc,mh,gh,vh,bc=!1,Aa=[],nr=null,ir=null,rr=null,vo=new Map,xo=new Map,sr=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(n,i){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(i.pointerId)}}function _o(n,i,a,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Lo(i),i!==null&&Tc(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Pv(n,i,a,u,h){switch(i){case"focusin":return nr=_o(nr,n,i,a,u,h),!0;case"dragenter":return ir=_o(ir,n,i,a,u,h),!0;case"mouseover":return rr=_o(rr,n,i,a,u,h),!0;case"pointerover":var g=h.pointerId;return vo.set(g,_o(vo.get(g)||null,n,i,a,u,h)),!0;case"gotpointercapture":return g=h.pointerId,xo.set(g,_o(xo.get(g)||null,n,i,a,u,h)),!0}return!1}function _h(n){var i=Fr(n.target);if(i!==null){var a=Pi(i);if(a!==null){if(i=a.tag,i===13){if(i=wa(a),i!==null){n.blockedOn=i,vh(n.priority,function(){mh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ca(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Cc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ht=u,a.target.dispatchEvent(u),ht=null}else return i=Lo(a),i!==null&&Tc(i),n.blockedOn=a,!1;i.shift()}return!0}function yh(n,i,a){Ca(n)&&a.delete(i)}function Nv(){bc=!1,nr!==null&&Ca(nr)&&(nr=null),ir!==null&&Ca(ir)&&(ir=null),rr!==null&&Ca(rr)&&(rr=null),vo.forEach(yh),xo.forEach(yh)}function yo(n,i){n.blockedOn===i&&(n.blockedOn=null,bc||(bc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nv)))}function So(n){function i(h){return yo(h,n)}if(0<Aa.length){yo(Aa[0],n);for(var a=1;a<Aa.length;a++){var u=Aa[a];u.blockedOn===n&&(u.blockedOn=null)}}for(nr!==null&&yo(nr,n),ir!==null&&yo(ir,n),rr!==null&&yo(rr,n),vo.forEach(i),xo.forEach(i),a=0;a<sr.length;a++)u=sr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)_h(a),a.blockedOn===null&&sr.shift()}var ms=E.ReactCurrentBatchConfig,Ra=!0;function Lv(n,i,a,u){var h=yt,g=ms.transition;ms.transition=null;try{yt=1,Ac(n,i,a,u)}finally{yt=h,ms.transition=g}}function Dv(n,i,a,u){var h=yt,g=ms.transition;ms.transition=null;try{yt=4,Ac(n,i,a,u)}finally{yt=h,ms.transition=g}}function Ac(n,i,a,u){if(Ra){var h=Cc(n,i,a,u);if(h===null)jc(n,i,u,Ia,a),xh(n,u);else if(Pv(h,n,i,a,u))u.stopPropagation();else if(xh(n,u),i&4&&-1<Iv.indexOf(n)){for(;h!==null;){var g=Lo(h);if(g!==null&&ph(g),g=Cc(n,i,a,u),g===null&&jc(n,i,u,Ia,a),g===h)break;h=g}h!==null&&u.stopPropagation()}else jc(n,i,u,null,a)}}var Ia=null;function Cc(n,i,a,u){if(Ia=null,n=j(u),n=Fr(n),n!==null)if(i=Pi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=wa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ia=n,null}function Sh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case Pe:return 1;case Ge:return 4;case ke:case st:return 16;case lt:return 536870912;default:return 16}default:return 16}}var or=null,Rc=null,Pa=null;function Mh(){if(Pa)return Pa;var n,i=Rc,a=i.length,u,h="value"in or?or.value:or.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var b=a-n;for(u=1;u<=b&&i[a-u]===h[g-u];u++);return Pa=h.slice(n,1<u?1-u:void 0)}function Na(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function La(){return!0}function wh(){return!1}function Gn(n){function i(a,u,h,g,b){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?La:wh,this.isPropagationStopped=wh,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=Gn(gs),Mo=L({},gs,{view:0,detail:0}),Uv=Gn(Mo),Pc,Nc,wo,Da=L({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wo&&(wo&&n.type==="mousemove"?(Pc=n.screenX-wo.screenX,Nc=n.screenY-wo.screenY):Nc=Pc=0,wo=n),Pc)},movementY:function(n){return"movementY"in n?n.movementY:Nc}}),Eh=Gn(Da),kv=L({},Da,{dataTransfer:0}),Fv=Gn(kv),Ov=L({},Mo,{relatedTarget:0}),Lc=Gn(Ov),zv=L({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=Gn(zv),Hv=L({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gv=Gn(Hv),Vv=L({},gs,{data:0}),Th=Gn(Vv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Xv[n])?!!i[n]:!1}function Dc(){return Yv}var Zv=L({},Mo,{key:function(n){if(n.key){var i=Wv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Na(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(n){return n.type==="keypress"?Na(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Na(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$v=Gn(Zv),qv=L({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=Gn(qv),Jv=L({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Kv=Gn(Jv),Qv=L({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=Gn(Qv),tx=L({},Da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=Gn(tx),ix=[9,13,27,32],Uc=d&&"CompositionEvent"in window,Eo=null;d&&"documentMode"in document&&(Eo=document.documentMode);var rx=d&&"TextEvent"in window&&!Eo,Ah=d&&(!Uc||Eo&&8<Eo&&11>=Eo),Ch=" ",Rh=!1;function Ih(n,i){switch(n){case"keyup":return ix.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ph(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vs=!1;function sx(n,i){switch(n){case"compositionend":return Ph(i);case"keypress":return i.which!==32?null:(Rh=!0,Ch);case"textInput":return n=i.data,n===Ch&&Rh?null:n;default:return null}}function ox(n,i){if(vs)return n==="compositionend"||!Uc&&Ih(n,i)?(n=Mh(),Pa=Rc=or=null,vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ah&&i.locale!=="ko"?null:i.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ax[n.type]:i==="textarea"}function Lh(n,i,a,u){he(u),i=za(i,"onChange"),0<i.length&&(a=new Ic("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var To=null,bo=null;function lx(n){Jh(n,0)}function Ua(n){var i=Ms(n);if(pt(i))return n}function cx(n,i){if(n==="change")return i}var Dh=!1;if(d){var kc;if(d){var Fc="oninput"in document;if(!Fc){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Fc=typeof Uh.oninput=="function"}kc=Fc}else kc=!1;Dh=kc&&(!document.documentMode||9<document.documentMode)}function kh(){To&&(To.detachEvent("onpropertychange",Fh),bo=To=null)}function Fh(n){if(n.propertyName==="value"&&Ua(bo)){var i=[];Lh(i,bo,n,j(n)),Jn(lx,i)}}function ux(n,i,a){n==="focusin"?(kh(),To=i,bo=a,To.attachEvent("onpropertychange",Fh)):n==="focusout"&&kh()}function dx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ua(bo)}function fx(n,i){if(n==="click")return Ua(i)}function hx(n,i){if(n==="input"||n==="change")return Ua(i)}function px(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ai=typeof Object.is=="function"?Object.is:px;function Ao(n,i){if(ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!f.call(i,h)||!ai(n[h],i[h]))return!1}return!0}function Oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zh(n,i){var a=Oh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Oh(a)}}function Bh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Bh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Hh(){for(var n=window,i=G();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=G(n.document)}return i}function Oc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function mx(n){var i=Hh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Bh(a.ownerDocument.documentElement,a)){if(u!==null&&Oc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=zh(a,g);var b=zh(a,u);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gx=d&&"documentMode"in document&&11>=document.documentMode,xs=null,zc=null,Co=null,Bc=!1;function Gh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||xs==null||xs!==G(u)||(u=xs,"selectionStart"in u&&Oc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Co&&Ao(Co,u)||(Co=u,u=za(zc,"onSelect"),0<u.length&&(i=new Ic("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=xs)))}function ka(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Hc={},Vh={};d&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Fa(n){if(Hc[n])return Hc[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Vh)return Hc[n]=i[a];return n}var Wh=Fa("animationend"),jh=Fa("animationiteration"),Xh=Fa("animationstart"),Yh=Fa("transitionend"),Zh=new Map,$h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,i){Zh.set(n,i),l(i,[n])}for(var Gc=0;Gc<$h.length;Gc++){var Vc=$h[Gc],vx=Vc.toLowerCase(),xx=Vc[0].toUpperCase()+Vc.slice(1);ar(vx,"on"+xx)}ar(Wh,"onAnimationEnd"),ar(jh,"onAnimationIteration"),ar(Xh,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(Yh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function qh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ma(u,i,void 0,n),n.currentTarget=null}function Jh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var b=u.length-1;0<=b;b--){var O=u[b],V=O.instance,re=O.currentTarget;if(O=O.listener,V!==g&&h.isPropagationStopped())break e;qh(h,O,re),g=V}else for(b=0;b<u.length;b++){if(O=u[b],V=O.instance,re=O.currentTarget,O=O.listener,V!==g&&h.isPropagationStopped())break e;qh(h,O,re),g=V}}}if(Ii)throw n=hs,Ii=!1,hs=null,n}function Vt(n,i){var a=i[Jc];a===void 0&&(a=i[Jc]=new Set);var u=n+"__bubble";a.has(u)||(Kh(i,n,2,!1),a.add(u))}function Wc(n,i,a){var u=0;i&&(u|=4),Kh(a,n,u,i)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Io(n){if(!n[Oa]){n[Oa]=!0,r.forEach(function(a){a!=="selectionchange"&&(_x.has(a)||Wc(a,!1,n),Wc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Oa]||(i[Oa]=!0,Wc("selectionchange",!1,i))}}function Kh(n,i,a,u){switch(Sh(i)){case 1:var h=Lv;break;case 4:h=Dv;break;default:h=Ac}a=h.bind(null,i,a,n),h=void 0,!fs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function jc(n,i,a,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var O=u.stateNode.containerInfo;if(O===h||O.nodeType===8&&O.parentNode===h)break;if(b===4)for(b=u.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;b=b.return}for(;O!==null;){if(b=Fr(O),b===null)return;if(V=b.tag,V===5||V===6){u=g=b;continue e}O=O.parentNode}}u=u.return}Jn(function(){var re=g,ve=j(a),ye=[];e:{var me=Zh.get(n);if(me!==void 0){var Fe=Ic,Ve=n;switch(n){case"keypress":if(Na(a)===0)break e;case"keydown":case"keyup":Fe=$v;break;case"focusin":Ve="focus",Fe=Lc;break;case"focusout":Ve="blur",Fe=Lc;break;case"beforeblur":case"afterblur":Fe=Lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Kv;break;case Wh:case jh:case Xh:Fe=Bv;break;case Yh:Fe=ex;break;case"scroll":Fe=Uv;break;case"wheel":Fe=nx;break;case"copy":case"cut":case"paste":Fe=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=bh}var Ye=(i&4)!==0,Kt=!Ye&&n==="scroll",$=Ye?me!==null?me+"Capture":null:me;Ye=[];for(var Y=re,K;Y!==null;){K=Y;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,$!==null&&(Te=vn(Y,$),Te!=null&&Ye.push(Po(Y,Te,K)))),Kt)break;Y=Y.return}0<Ye.length&&(me=new Fe(me,Ve,null,a,ve),ye.push({event:me,listeners:Ye}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",me&&a!==ht&&(Ve=a.relatedTarget||a.fromElement)&&(Fr(Ve)||Ve[Ni]))break e;if((Fe||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Fe?(Ve=a.relatedTarget||a.toElement,Fe=re,Ve=Ve?Fr(Ve):null,Ve!==null&&(Kt=Pi(Ve),Ve!==Kt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=re),Fe!==Ve)){if(Ye=Eh,Te="onMouseLeave",$="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=bh,Te="onPointerLeave",$="onPointerEnter",Y="pointer"),Kt=Fe==null?me:Ms(Fe),K=Ve==null?me:Ms(Ve),me=new Ye(Te,Y+"leave",Fe,a,ve),me.target=Kt,me.relatedTarget=K,Te=null,Fr(ve)===re&&(Ye=new Ye($,Y+"enter",Ve,a,ve),Ye.target=K,Ye.relatedTarget=Kt,Te=Ye),Kt=Te,Fe&&Ve)t:{for(Ye=Fe,$=Ve,Y=0,K=Ye;K;K=ys(K))Y++;for(K=0,Te=$;Te;Te=ys(Te))K++;for(;0<Y-K;)Ye=ys(Ye),Y--;for(;0<K-Y;)$=ys($),K--;for(;Y--;){if(Ye===$||$!==null&&Ye===$.alternate)break t;Ye=ys(Ye),$=ys($)}Ye=null}else Ye=null;Fe!==null&&Qh(ye,me,Fe,Ye,!1),Ve!==null&&Kt!==null&&Qh(ye,Kt,Ve,Ye,!0)}}e:{if(me=re?Ms(re):window,Fe=me.nodeName&&me.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&me.type==="file")var qe=cx;else if(Nh(me))if(Dh)qe=hx;else{qe=dx;var it=ux}else(Fe=me.nodeName)&&Fe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(qe=fx);if(qe&&(qe=qe(n,re))){Lh(ye,qe,a,ve);break e}it&&it(n,me,re),n==="focusout"&&(it=me._wrapperState)&&it.controlled&&me.type==="number"&&ze(me,"number",me.value)}switch(it=re?Ms(re):window,n){case"focusin":(Nh(it)||it.contentEditable==="true")&&(xs=it,zc=re,Co=null);break;case"focusout":Co=zc=xs=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Gh(ye,a,ve);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Gh(ye,a,ve)}var rt;if(Uc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else vs?Ih(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(Ah&&a.locale!=="ko"&&(vs||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&vs&&(rt=Mh()):(or=ve,Rc="value"in or?or.value:or.textContent,vs=!0)),it=za(re,ut),0<it.length&&(ut=new Th(ut,n,null,a,ve),ye.push({event:ut,listeners:it}),rt?ut.data=rt:(rt=Ph(a),rt!==null&&(ut.data=rt)))),(rt=rx?sx(n,a):ox(n,a))&&(re=za(re,"onBeforeInput"),0<re.length&&(ve=new Th("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:re}),ve.data=rt))}Jh(ye,i)})}function Po(n,i,a){return{instance:n,listener:i,currentTarget:a}}function za(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=vn(n,a),g!=null&&u.unshift(Po(n,g,h)),g=vn(n,i),g!=null&&u.push(Po(n,g,h))),n=n.return}return u}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qh(n,i,a,u,h){for(var g=i._reactName,b=[];a!==null&&a!==u;){var O=a,V=O.alternate,re=O.stateNode;if(V!==null&&V===u)break;O.tag===5&&re!==null&&(O=re,h?(V=vn(a,g),V!=null&&b.unshift(Po(a,V,O))):h||(V=vn(a,g),V!=null&&b.push(Po(a,V,O)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var yx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function ep(n){return(typeof n=="string"?n:""+n).replace(yx,`
`).replace(Sx,"")}function Ba(n,i,a){if(i=ep(i),ep(n)!==i&&a)throw Error(t(425))}function Ha(){}var Xc=null,Yc=null;function Zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,Mx=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(n){return tp.resolve(null).then(n).catch(Ex)}:$c;function Ex(n){setTimeout(function(){throw n})}function qc(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),So(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);So(i)}function lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function np(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),yi="__reactFiber$"+Ss,No="__reactProps$"+Ss,Ni="__reactContainer$"+Ss,Jc="__reactEvents$"+Ss,Tx="__reactListeners$"+Ss,bx="__reactHandles$"+Ss;function Fr(n){var i=n[yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ni]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=np(n);n!==null;){if(a=n[yi])return a;n=np(n)}return i}n=a,a=n.parentNode}return null}function Lo(n){return n=n[yi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ga(n){return n[No]||null}var Kc=[],ws=-1;function cr(n){return{current:n}}function Wt(n){0>ws||(n.current=Kc[ws],Kc[ws]=null,ws--)}function Bt(n,i){ws++,Kc[ws]=n.current,n.current=i}var ur={},yn=cr(ur),Nn=cr(!1),Or=ur;function Es(n,i){var a=n.type.contextTypes;if(!a)return ur;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Ln(n){return n=n.childContextTypes,n!=null}function Va(){Wt(Nn),Wt(yn)}function ip(n,i,a){if(yn.current!==ur)throw Error(t(168));Bt(yn,i),Bt(Nn,a)}function rp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,ue(n)||"Unknown",h));return L({},a,u)}function Wa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,Or=yn.current,Bt(yn,n),Bt(Nn,Nn.current),!0}function sp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=rp(n,i,Or),u.__reactInternalMemoizedMergedChildContext=n,Wt(Nn),Wt(yn),Bt(yn,n)):Wt(Nn),Bt(Nn,a)}var Li=null,ja=!1,Qc=!1;function op(n){Li===null?Li=[n]:Li.push(n)}function Ax(n){ja=!0,op(n)}function dr(){if(!Qc&&Li!==null){Qc=!0;var n=0,i=yt;try{var a=Li;for(yt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Li=null,ja=!1}catch(h){throw Li!==null&&(Li=Li.slice(n+1)),P(Pe,dr),h}finally{yt=i,Qc=!1}}return null}var Ts=[],bs=0,Xa=null,Ya=0,Kn=[],Qn=0,zr=null,Di=1,Ui="";function Br(n,i){Ts[bs++]=Ya,Ts[bs++]=Xa,Xa=n,Ya=i}function ap(n,i,a){Kn[Qn++]=Di,Kn[Qn++]=Ui,Kn[Qn++]=zr,zr=n;var u=Di;n=Ui;var h=32-Tt(u)-1;u&=~(1<<h),a+=1;var g=32-Tt(i)+h;if(30<g){var b=h-h%5;g=(u&(1<<b)-1).toString(32),u>>=b,h-=b,Di=1<<32-Tt(i)+h|a<<h|u,Ui=g+n}else Di=1<<g|a<<h|u,Ui=n}function eu(n){n.return!==null&&(Br(n,1),ap(n,1,0))}function tu(n){for(;n===Xa;)Xa=Ts[--bs],Ts[bs]=null,Ya=Ts[--bs],Ts[bs]=null;for(;n===zr;)zr=Kn[--Qn],Kn[Qn]=null,Ui=Kn[--Qn],Kn[Qn]=null,Di=Kn[--Qn],Kn[Qn]=null}var Vn=null,Wn=null,Xt=!1,li=null;function lp(n,i){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function cp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Wn=lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=zr!==null?{id:Di,overflow:Ui}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Vn=n,Wn=null,!0):!1;default:return!1}}function nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function iu(n){if(Xt){var i=Wn;if(i){var a=i;if(!cp(n,i)){if(nu(n))throw Error(t(418));i=lr(a.nextSibling);var u=Vn;i&&cp(n,i)?lp(u,a):(n.flags=n.flags&-4097|2,Xt=!1,Vn=n)}}else{if(nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,Vn=n}}}function up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Za(n){if(n!==Vn)return!1;if(!Xt)return up(n),Xt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Zc(n.type,n.memoizedProps)),i&&(i=Wn)){if(nu(n))throw dp(),Error(t(418));for(;i;)lp(n,i),i=lr(i.nextSibling)}if(up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Wn=lr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Wn=null}}else Wn=Vn?lr(n.stateNode.nextSibling):null;return!0}function dp(){for(var n=Wn;n;)n=lr(n.nextSibling)}function As(){Wn=Vn=null,Xt=!1}function ru(n){li===null?li=[n]:li.push(n)}var Cx=E.ReactCurrentBatchConfig;function ci(n,i){if(n&&n.defaultProps){i=L({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}var $a=cr(null),qa=null,Cs=null,su=null;function ou(){su=Cs=qa=null}function au(n){var i=$a.current;Wt($a),n._currentValue=i}function lu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){qa=n,su=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function ei(n){var i=n._currentValue;if(su!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(qa===null)throw Error(t(308));Cs=n,qa.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var Hr=null;function cu(n){Hr===null?Hr=[n]:Hr.push(n)}function fp(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,cu(i)):(a.next=h.next,h.next=a),i.interleaved=a,ki(n,u)}function ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var fr=!1;function uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,ki(n,a)}return h=u.interleaved,h===null?(i.next=i,cu(u)):(i.next=h.next,h.next=i),u.interleaved=i,ki(n,a)}function Ja(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,kr(n,a)}}function pp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=b:g=g.next=b,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ka(n,i,a,u){var h=n.updateQueue;fr=!1;var g=h.firstBaseUpdate,b=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var V=O,re=V.next;V.next=null,b===null?g=re:b.next=re,b=V;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,O=ve.lastBaseUpdate,O!==b&&(O===null?ve.firstBaseUpdate=re:O.next=re,ve.lastBaseUpdate=V))}if(g!==null){var ye=h.baseState;b=0,ve=re=V=null,O=g;do{var me=O.lane,Fe=O.eventTime;if((u&me)===me){ve!==null&&(ve=ve.next={eventTime:Fe,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ve=n,Ye=O;switch(me=i,Fe=a,Ye.tag){case 1:if(Ve=Ye.payload,typeof Ve=="function"){ye=Ve.call(Fe,ye,me);break e}ye=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ye.payload,me=typeof Ve=="function"?Ve.call(Fe,ye,me):Ve,me==null)break e;ye=L({},ye,me);break e;case 2:fr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,me=h.effects,me===null?h.effects=[O]:me.push(O))}else Fe={eventTime:Fe,lane:me,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ve===null?(re=ve=Fe,V=ye):ve=ve.next=Fe,b|=me;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;me=O,O=me.next,me.next=null,h.lastBaseUpdate=me,h.shared.pending=null}}while(!0);if(ve===null&&(V=ye),h.baseState=V,h.firstBaseUpdate=re,h.lastBaseUpdate=ve,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Wr|=b,n.lanes=b,n.memoizedState=ye}}function mp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var gp=new s.Component().refs;function du(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:L({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qa={isMounted:function(n){return(n=n._reactInternals)?Pi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Rn(),h=vr(n),g=Fi(u,h);g.payload=i,a!=null&&(g.callback=a),i=hr(n,g,h),i!==null&&(fi(i,n,h,u),Ja(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Rn(),h=vr(n),g=Fi(u,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=hr(n,g,h),i!==null&&(fi(i,n,h,u),Ja(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Rn(),u=vr(n),h=Fi(a,u);h.tag=2,i!=null&&(h.callback=i),i=hr(n,h,u),i!==null&&(fi(i,n,u,a),Ja(i,n,u))}};function vp(n,i,a,u,h,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,b):i.prototype&&i.prototype.isPureReactComponent?!Ao(a,u)||!Ao(h,g):!0}function xp(n,i,a){var u=!1,h=ur,g=i.contextType;return typeof g=="object"&&g!==null?g=ei(g):(h=Ln(i)?Or:yn.current,u=i.contextTypes,g=(u=u!=null)?Es(n,h):ur),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function _p(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Qa.enqueueReplaceState(i,i.state,null)}function fu(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs=gp,uu(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=ei(g):(g=Ln(i)?Or:yn.current,h.context=Es(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(du(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Qa.enqueueReplaceState(h,h.state,null),Ka(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Do(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var O=h.refs;O===gp&&(O=h.refs={}),b===null?delete O[g]:O[g]=b},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function el(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function yp(n){var i=n._init;return i(n._payload)}function Sp(n){function i($,Y){if(n){var K=$.deletions;K===null?($.deletions=[Y],$.flags|=16):K.push(Y)}}function a($,Y){if(!n)return null;for(;Y!==null;)i($,Y),Y=Y.sibling;return null}function u($,Y){for($=new Map;Y!==null;)Y.key!==null?$.set(Y.key,Y):$.set(Y.index,Y),Y=Y.sibling;return $}function h($,Y){return $=_r($,Y),$.index=0,$.sibling=null,$}function g($,Y,K){return $.index=K,n?(K=$.alternate,K!==null?(K=K.index,K<Y?($.flags|=2,Y):K):($.flags|=2,Y)):($.flags|=1048576,Y)}function b($){return n&&$.alternate===null&&($.flags|=2),$}function O($,Y,K,Te){return Y===null||Y.tag!==6?(Y=$u(K,$.mode,Te),Y.return=$,Y):(Y=h(Y,K),Y.return=$,Y)}function V($,Y,K,Te){var qe=K.type;return qe===B?ve($,Y,K.props.children,Te,K.key):Y!==null&&(Y.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ee&&yp(qe)===Y.type)?(Te=h(Y,K.props),Te.ref=Do($,Y,K),Te.return=$,Te):(Te=_l(K.type,K.key,K.props,null,$.mode,Te),Te.ref=Do($,Y,K),Te.return=$,Te)}function re($,Y,K,Te){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==K.containerInfo||Y.stateNode.implementation!==K.implementation?(Y=qu(K,$.mode,Te),Y.return=$,Y):(Y=h(Y,K.children||[]),Y.return=$,Y)}function ve($,Y,K,Te,qe){return Y===null||Y.tag!==7?(Y=Zr(K,$.mode,Te,qe),Y.return=$,Y):(Y=h(Y,K),Y.return=$,Y)}function ye($,Y,K){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=$u(""+Y,$.mode,K),Y.return=$,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case U:return K=_l(Y.type,Y.key,Y.props,null,$.mode,K),K.ref=Do($,null,Y),K.return=$,K;case z:return Y=qu(Y,$.mode,K),Y.return=$,Y;case ee:var Te=Y._init;return ye($,Te(Y._payload),K)}if(ft(Y)||ce(Y))return Y=Zr(Y,$.mode,K,null),Y.return=$,Y;el($,Y)}return null}function me($,Y,K,Te){var qe=Y!==null?Y.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return qe!==null?null:O($,Y,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case U:return K.key===qe?V($,Y,K,Te):null;case z:return K.key===qe?re($,Y,K,Te):null;case ee:return qe=K._init,me($,Y,qe(K._payload),Te)}if(ft(K)||ce(K))return qe!==null?null:ve($,Y,K,Te,null);el($,K)}return null}function Fe($,Y,K,Te,qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(K)||null,O(Y,$,""+Te,qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case U:return $=$.get(Te.key===null?K:Te.key)||null,V(Y,$,Te,qe);case z:return $=$.get(Te.key===null?K:Te.key)||null,re(Y,$,Te,qe);case ee:var it=Te._init;return Fe($,Y,K,it(Te._payload),qe)}if(ft(Te)||ce(Te))return $=$.get(K)||null,ve(Y,$,Te,qe,null);el(Y,Te)}return null}function Ve($,Y,K,Te){for(var qe=null,it=null,rt=Y,ut=Y=0,dn=null;rt!==null&&ut<K.length;ut++){rt.index>ut?(dn=rt,rt=null):dn=rt.sibling;var At=me($,rt,K[ut],Te);if(At===null){rt===null&&(rt=dn);break}n&&rt&&At.alternate===null&&i($,rt),Y=g(At,Y,ut),it===null?qe=At:it.sibling=At,it=At,rt=dn}if(ut===K.length)return a($,rt),Xt&&Br($,ut),qe;if(rt===null){for(;ut<K.length;ut++)rt=ye($,K[ut],Te),rt!==null&&(Y=g(rt,Y,ut),it===null?qe=rt:it.sibling=rt,it=rt);return Xt&&Br($,ut),qe}for(rt=u($,rt);ut<K.length;ut++)dn=Fe(rt,$,ut,K[ut],Te),dn!==null&&(n&&dn.alternate!==null&&rt.delete(dn.key===null?ut:dn.key),Y=g(dn,Y,ut),it===null?qe=dn:it.sibling=dn,it=dn);return n&&rt.forEach(function(yr){return i($,yr)}),Xt&&Br($,ut),qe}function Ye($,Y,K,Te){var qe=ce(K);if(typeof qe!="function")throw Error(t(150));if(K=qe.call(K),K==null)throw Error(t(151));for(var it=qe=null,rt=Y,ut=Y=0,dn=null,At=K.next();rt!==null&&!At.done;ut++,At=K.next()){rt.index>ut?(dn=rt,rt=null):dn=rt.sibling;var yr=me($,rt,At.value,Te);if(yr===null){rt===null&&(rt=dn);break}n&&rt&&yr.alternate===null&&i($,rt),Y=g(yr,Y,ut),it===null?qe=yr:it.sibling=yr,it=yr,rt=dn}if(At.done)return a($,rt),Xt&&Br($,ut),qe;if(rt===null){for(;!At.done;ut++,At=K.next())At=ye($,At.value,Te),At!==null&&(Y=g(At,Y,ut),it===null?qe=At:it.sibling=At,it=At);return Xt&&Br($,ut),qe}for(rt=u($,rt);!At.done;ut++,At=K.next())At=Fe(rt,$,ut,At.value,Te),At!==null&&(n&&At.alternate!==null&&rt.delete(At.key===null?ut:At.key),Y=g(At,Y,ut),it===null?qe=At:it.sibling=At,it=At);return n&&rt.forEach(function(a_){return i($,a_)}),Xt&&Br($,ut),qe}function Kt($,Y,K,Te){if(typeof K=="object"&&K!==null&&K.type===B&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case U:e:{for(var qe=K.key,it=Y;it!==null;){if(it.key===qe){if(qe=K.type,qe===B){if(it.tag===7){a($,it.sibling),Y=h(it,K.props.children),Y.return=$,$=Y;break e}}else if(it.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ee&&yp(qe)===it.type){a($,it.sibling),Y=h(it,K.props),Y.ref=Do($,it,K),Y.return=$,$=Y;break e}a($,it);break}else i($,it);it=it.sibling}K.type===B?(Y=Zr(K.props.children,$.mode,Te,K.key),Y.return=$,$=Y):(Te=_l(K.type,K.key,K.props,null,$.mode,Te),Te.ref=Do($,Y,K),Te.return=$,$=Te)}return b($);case z:e:{for(it=K.key;Y!==null;){if(Y.key===it)if(Y.tag===4&&Y.stateNode.containerInfo===K.containerInfo&&Y.stateNode.implementation===K.implementation){a($,Y.sibling),Y=h(Y,K.children||[]),Y.return=$,$=Y;break e}else{a($,Y);break}else i($,Y);Y=Y.sibling}Y=qu(K,$.mode,Te),Y.return=$,$=Y}return b($);case ee:return it=K._init,Kt($,Y,it(K._payload),Te)}if(ft(K))return Ve($,Y,K,Te);if(ce(K))return Ye($,Y,K,Te);el($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,Y!==null&&Y.tag===6?(a($,Y.sibling),Y=h(Y,K),Y.return=$,$=Y):(a($,Y),Y=$u(K,$.mode,Te),Y.return=$,$=Y),b($)):a($,Y)}return Kt}var Is=Sp(!0),Mp=Sp(!1),Uo={},Si=cr(Uo),ko=cr(Uo),Fo=cr(Uo);function Gr(n){if(n===Uo)throw Error(t(174));return n}function hu(n,i){switch(Bt(Fo,i),Bt(ko,n),Bt(Si,Uo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=xe(i,n)}Wt(Si),Bt(Si,i)}function Ps(){Wt(Si),Wt(ko),Wt(Fo)}function wp(n){Gr(Fo.current);var i=Gr(Si.current),a=xe(i,n.type);i!==a&&(Bt(ko,n),Bt(Si,a))}function pu(n){ko.current===n&&(Wt(Si),Wt(ko))}var Yt=cr(0);function tl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mu=[];function gu(){for(var n=0;n<mu.length;n++)mu[n]._workInProgressVersionPrimary=null;mu.length=0}var nl=E.ReactCurrentDispatcher,vu=E.ReactCurrentBatchConfig,Vr=0,Zt=null,rn=null,cn=null,il=!1,Oo=!1,zo=0,Rx=0;function Sn(){throw Error(t(321))}function xu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ai(n[a],i[a]))return!1;return!0}function _u(n,i,a,u,h,g){if(Vr=g,Zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,nl.current=n===null||n.memoizedState===null?Lx:Dx,n=a(u,h),Oo){g=0;do{if(Oo=!1,zo=0,25<=g)throw Error(t(301));g+=1,cn=rn=null,i.updateQueue=null,nl.current=Ux,n=a(u,h)}while(Oo)}if(nl.current=ol,i=rn!==null&&rn.next!==null,Vr=0,cn=rn=Zt=null,il=!1,i)throw Error(t(300));return n}function yu(){var n=zo!==0;return zo=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Zt.memoizedState=cn=n:cn=cn.next=n,cn}function ti(){if(rn===null){var n=Zt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var i=cn===null?Zt.memoizedState:cn.next;if(i!==null)cn=i,rn=n;else{if(n===null)throw Error(t(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},cn===null?Zt.memoizedState=cn=n:cn=cn.next=n}return cn}function Bo(n,i){return typeof i=="function"?i(n):i}function Su(n){var i=ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=rn,h=u.baseQueue,g=a.pending;if(g!==null){if(h!==null){var b=h.next;h.next=g.next,g.next=b}u.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,u=u.baseState;var O=b=null,V=null,re=g;do{var ve=re.lane;if((Vr&ve)===ve)V!==null&&(V=V.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var ye={lane:ve,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};V===null?(O=V=ye,b=u):V=V.next=ye,Zt.lanes|=ve,Wr|=ve}re=re.next}while(re!==null&&re!==g);V===null?b=u:V.next=O,ai(u,i.memoizedState)||(Dn=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=V,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Zt.lanes|=g,Wr|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Mu(n){var i=ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do g=n(g,b.action),b=b.next;while(b!==h);ai(g,i.memoizedState)||(Dn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function Ep(){}function Tp(n,i){var a=Zt,u=ti(),h=i(),g=!ai(u.memoizedState,h);if(g&&(u.memoizedState=h,Dn=!0),u=u.queue,wu(Cp.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,Ho(9,Ap.bind(null,a,u,h,i),void 0,null),un===null)throw Error(t(349));(Vr&30)!==0||bp(a,i,h)}return h}function bp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ap(n,i,a,u){i.value=a,i.getSnapshot=u,Rp(i)&&Ip(n)}function Cp(n,i,a){return a(function(){Rp(i)&&Ip(n)})}function Rp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ai(n,a)}catch{return!0}}function Ip(n){var i=ki(n,1);i!==null&&fi(i,n,1,-1)}function Pp(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},i.queue=n,n=n.dispatch=Nx.bind(null,Zt,n),[i.memoizedState,n]}function Ho(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Np(){return ti().memoizedState}function rl(n,i,a,u){var h=Mi();Zt.flags|=n,h.memoizedState=Ho(1|i,a,void 0,u===void 0?null:u)}function sl(n,i,a,u){var h=ti();u=u===void 0?null:u;var g=void 0;if(rn!==null){var b=rn.memoizedState;if(g=b.destroy,u!==null&&xu(u,b.deps)){h.memoizedState=Ho(i,a,g,u);return}}Zt.flags|=n,h.memoizedState=Ho(1|i,a,g,u)}function Lp(n,i){return rl(8390656,8,n,i)}function wu(n,i){return sl(2048,8,n,i)}function Dp(n,i){return sl(4,2,n,i)}function Up(n,i){return sl(4,4,n,i)}function kp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Fp(n,i,a){return a=a!=null?a.concat([n]):null,sl(4,4,kp.bind(null,i,n),a)}function Eu(){}function Op(n,i){var a=ti();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&xu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function zp(n,i){var a=ti();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&xu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Bp(n,i,a){return(Vr&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=a):(ai(a,i)||(a=An(),Zt.lanes|=a,Wr|=a,n.baseState=!0),i)}function Ix(n,i){var a=yt;yt=a!==0&&4>a?a:4,n(!0);var u=vu.transition;vu.transition={};try{n(!1),i()}finally{yt=a,vu.transition=u}}function Hp(){return ti().memoizedState}function Px(n,i,a){var u=vr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Gp(n))Vp(i,a);else if(a=fp(n,i,a,u),a!==null){var h=Rn();fi(a,n,u,h),Wp(a,i,u)}}function Nx(n,i,a){var u=vr(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gp(n))Vp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,O=g(b,a);if(h.hasEagerState=!0,h.eagerState=O,ai(O,b)){var V=i.interleaved;V===null?(h.next=h,cu(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}finally{}a=fp(n,i,h,u),a!==null&&(h=Rn(),fi(a,n,u,h),Wp(a,i,u))}}function Gp(n){var i=n.alternate;return n===Zt||i!==null&&i===Zt}function Vp(n,i){Oo=il=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Wp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,kr(n,a)}}var ol={readContext:ei,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},Lx={readContext:ei,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:ei,useEffect:Lp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,rl(4194308,4,kp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return rl(4194308,4,n,i)},useInsertionEffect:function(n,i){return rl(4,2,n,i)},useMemo:function(n,i){var a=Mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Mi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Px.bind(null,Zt,n),[u.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:Pp,useDebugValue:Eu,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=Pp(!1),i=n[0];return n=Ix.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Zt,h=Mi();if(Xt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),un===null)throw Error(t(349));(Vr&30)!==0||bp(u,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Lp(Cp.bind(null,u,g,n),[n]),u.flags|=2048,Ho(9,Ap.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Mi(),i=un.identifierPrefix;if(Xt){var a=Ui,u=Di;a=(u&~(1<<32-Tt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=zo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Rx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Dx={readContext:ei,useCallback:Op,useContext:ei,useEffect:wu,useImperativeHandle:Fp,useInsertionEffect:Dp,useLayoutEffect:Up,useMemo:zp,useReducer:Su,useRef:Np,useState:function(){return Su(Bo)},useDebugValue:Eu,useDeferredValue:function(n){var i=ti();return Bp(i,rn.memoizedState,n)},useTransition:function(){var n=Su(Bo)[0],i=ti().memoizedState;return[n,i]},useMutableSource:Ep,useSyncExternalStore:Tp,useId:Hp,unstable_isNewReconciler:!1},Ux={readContext:ei,useCallback:Op,useContext:ei,useEffect:wu,useImperativeHandle:Fp,useInsertionEffect:Dp,useLayoutEffect:Up,useMemo:zp,useReducer:Mu,useRef:Np,useState:function(){return Mu(Bo)},useDebugValue:Eu,useDeferredValue:function(n){var i=ti();return rn===null?i.memoizedState=n:Bp(i,rn.memoizedState,n)},useTransition:function(){var n=Mu(Bo)[0],i=ti().memoizedState;return[n,i]},useMutableSource:Ep,useSyncExternalStore:Tp,useId:Hp,unstable_isNewReconciler:!1};function Ns(n,i){try{var a="",u=i;do a+=ie(u),u=u.return;while(u);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Tu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function bu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var kx=typeof WeakMap=="function"?WeakMap:Map;function jp(n,i,a){a=Fi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){hl||(hl=!0,Hu=u),bu(n,i)},a}function Xp(n,i,a){a=Fi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){bu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){bu(n,i),typeof u!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Yp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new kx;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=qx.bind(null,n,i,a),i.then(n,n))}function Zp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function $p(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Fi(-1,1),i.tag=2,hr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Fx=E.ReactCurrentOwner,Dn=!1;function Cn(n,i,a,u){i.child=n===null?Mp(i,null,a,u):Is(i,n.child,a,u)}function qp(n,i,a,u,h){a=a.render;var g=i.ref;return Rs(i,h),u=_u(n,i,a,u,g,h),a=yu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Oi(n,i,h)):(Xt&&a&&eu(i),i.flags|=1,Cn(n,i,u,h),i.child)}function Jp(n,i,a,u,h){if(n===null){var g=a.type;return typeof g=="function"&&!Zu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Kp(n,i,g,u,h)):(n=_l(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var b=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(b,u)&&n.ref===i.ref)return Oi(n,i,h)}return i.flags|=1,n=_r(g,u),n.ref=i.ref,n.return=i,i.child=n}function Kp(n,i,a,u,h){if(n!==null){var g=n.memoizedProps;if(Ao(g,u)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Oi(n,i,h)}return Au(n,i,a,u,h)}function Qp(n,i,a){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Ds,jn),jn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(Ds,jn),jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Bt(Ds,jn),jn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,Bt(Ds,jn),jn|=u;return Cn(n,i,h,a),i.child}function em(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Au(n,i,a,u,h){var g=Ln(a)?Or:yn.current;return g=Es(i,g),Rs(i,h),a=_u(n,i,a,u,g,h),u=yu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Oi(n,i,h)):(Xt&&u&&eu(i),i.flags|=1,Cn(n,i,a,h),i.child)}function tm(n,i,a,u,h){if(Ln(a)){var g=!0;Wa(i)}else g=!1;if(Rs(i,h),i.stateNode===null)ll(n,i),xp(i,a,u),fu(i,a,u,h),u=!0;else if(n===null){var b=i.stateNode,O=i.memoizedProps;b.props=O;var V=b.context,re=a.contextType;typeof re=="object"&&re!==null?re=ei(re):(re=Ln(a)?Or:yn.current,re=Es(i,re));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof b.getSnapshotBeforeUpdate=="function";ye||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==u||V!==re)&&_p(i,b,u,re),fr=!1;var me=i.memoizedState;b.state=me,Ka(i,u,b,h),V=i.memoizedState,O!==u||me!==V||Nn.current||fr?(typeof ve=="function"&&(du(i,a,ve,u),V=i.memoizedState),(O=fr||vp(i,a,O,u,me,V,re))?(ye||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),b.props=u,b.state=V,b.context=re,u=O):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,hp(n,i),O=i.memoizedProps,re=i.type===i.elementType?O:ci(i.type,O),b.props=re,ye=i.pendingProps,me=b.context,V=a.contextType,typeof V=="object"&&V!==null?V=ei(V):(V=Ln(a)?Or:yn.current,V=Es(i,V));var Fe=a.getDerivedStateFromProps;(ve=typeof Fe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==ye||me!==V)&&_p(i,b,u,V),fr=!1,me=i.memoizedState,b.state=me,Ka(i,u,b,h);var Ve=i.memoizedState;O!==ye||me!==Ve||Nn.current||fr?(typeof Fe=="function"&&(du(i,a,Fe,u),Ve=i.memoizedState),(re=fr||vp(i,a,re,u,me,Ve,V)||!1)?(ve||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,Ve,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,Ve,V)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),b.props=u,b.state=Ve,b.context=V,u=re):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),u=!1)}return Cu(n,i,a,u,g,h)}function Cu(n,i,a,u,h,g){em(n,i);var b=(i.flags&128)!==0;if(!u&&!b)return h&&sp(i,a,!1),Oi(n,i,g);u=i.stateNode,Fx.current=i;var O=b&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&b?(i.child=Is(i,n.child,null,g),i.child=Is(i,null,O,g)):Cn(n,i,O,g),i.memoizedState=u.state,h&&sp(i,a,!0),i.child}function nm(n){var i=n.stateNode;i.pendingContext?ip(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ip(n,i.context,!1),hu(n,i.containerInfo)}function im(n,i,a,u,h){return As(),ru(h),i.flags|=256,Cn(n,i,a,u),i.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Iu(n){return{baseLanes:n,cachePool:null,transitions:null}}function rm(n,i,a){var u=i.pendingProps,h=Yt.current,g=!1,b=(i.flags&128)!==0,O;if((O=b)||(O=n!==null&&n.memoizedState===null?!1:(h&2)!==0),O?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Bt(Yt,h&1),n===null)return iu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,n=u.fallback,g?(u=i.mode,g=i.child,b={mode:"hidden",children:b},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=yl(b,u,0,null),n=Zr(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Iu(a),i.memoizedState=Ru,n):Pu(i,b));if(h=n.memoizedState,h!==null&&(O=h.dehydrated,O!==null))return Ox(n,i,b,u,O,h,a);if(g){g=u.fallback,b=i.mode,h=n.child,O=h.sibling;var V={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=_r(h,V),u.subtreeFlags=h.subtreeFlags&14680064),O!==null?g=_r(O,g):(g=Zr(g,b,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,b=n.child.memoizedState,b=b===null?Iu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=n.childLanes&~a,i.memoizedState=Ru,u}return g=n.child,n=g.sibling,u=_r(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Pu(n,i){return i=yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function al(n,i,a,u){return u!==null&&ru(u),Is(i,n.child,null,a),n=Pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ox(n,i,a,u,h,g,b){if(a)return i.flags&256?(i.flags&=-257,u=Tu(Error(t(422))),al(n,i,b,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=yl({mode:"visible",children:u.children},h,0,null),g=Zr(g,h,b,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Is(i,n.child,null,b),i.child.memoizedState=Iu(b),i.memoizedState=Ru,g);if((i.mode&1)===0)return al(n,i,b,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var O=u.dgst;return u=O,g=Error(t(419)),u=Tu(g,u,void 0),al(n,i,b,u)}if(O=(b&n.childLanes)!==0,Dn||O){if(u=un,u!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|b))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,ki(n,h),fi(u,n,h,-1))}return Yu(),u=Tu(Error(t(421))),al(n,i,b,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Jx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Wn=lr(h.nextSibling),Vn=i,Xt=!0,li=null,n!==null&&(Kn[Qn++]=Di,Kn[Qn++]=Ui,Kn[Qn++]=zr,Di=n.id,Ui=n.overflow,zr=i),i=Pu(i,u.children),i.flags|=4096,i)}function sm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),lu(n.return,i,a)}function Nu(n,i,a,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=h)}function om(n,i,a){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(Cn(n,i,u.children,a),u=Yt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sm(n,a,i);else if(n.tag===19)sm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Bt(Yt,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&tl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Nu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&tl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Nu(i,!0,a,null,g);break;case"together":Nu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ll(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Oi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Wr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=_r(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=_r(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function zx(n,i,a){switch(i.tag){case 3:nm(i),As();break;case 5:wp(i);break;case 1:Ln(i.type)&&Wa(i);break;case 4:hu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Bt($a,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Bt(Yt,Yt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?rm(n,i,a):(Bt(Yt,Yt.current&1),n=Oi(n,i,a),n!==null?n.sibling:null);Bt(Yt,Yt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return om(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Bt(Yt,Yt.current),u)break;return null;case 22:case 23:return i.lanes=0,Qp(n,i,a)}return Oi(n,i,a)}var am,Lu,lm,cm;am=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lu=function(){},lm=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,Gr(Si.current);var g=null;switch(a){case"input":h=It(n,h),u=It(n,u),g=[];break;case"select":h=L({},h,{value:void 0}),u=L({},u,{value:void 0}),g=[];break;case"textarea":h=Gt(n,h),u=Gt(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ha)}$e(a,u);var b;a=null;for(re in h)if(!u.hasOwnProperty(re)&&h.hasOwnProperty(re)&&h[re]!=null)if(re==="style"){var O=h[re];for(b in O)O.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?g||(g=[]):(g=g||[]).push(re,null));for(re in u){var V=u[re];if(O=h!=null?h[re]:void 0,u.hasOwnProperty(re)&&V!==O&&(V!=null||O!=null))if(re==="style")if(O){for(b in O)!O.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in V)V.hasOwnProperty(b)&&O[b]!==V[b]&&(a||(a={}),a[b]=V[b])}else a||(g||(g=[]),g.push(re,a)),a=V;else re==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(g=g||[]).push(re,V)):re==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(re,""+V):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(V!=null&&re==="onScroll"&&Vt("scroll",n),g||O===V||(g=[])):(g=g||[]).push(re,V))}a&&(g=g||[]).push("style",a);var re=g;(i.updateQueue=re)&&(i.flags|=4)}},cm=function(n,i,a,u){a!==u&&(i.flags|=4)};function Go(n,i){if(!Xt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Bx(n,i,a){var u=i.pendingProps;switch(tu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Ln(i.type)&&Va(),Mn(i),null;case 3:return u=i.stateNode,Ps(),Wt(Nn),Wt(yn),gu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Za(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(Wu(li),li=null))),Lu(n,i),Mn(i),null;case 5:pu(i);var h=Gr(Fo.current);if(a=i.type,n!==null&&i.stateNode!=null)lm(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Mn(i),null}if(n=Gr(Si.current),Za(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[yi]=i,u[No]=g,n=(i.mode&1)!==0,a){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(h=0;h<Ro.length;h++)Vt(Ro[h],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":tt(u,g),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Vt("invalid",u);break;case"textarea":D(u,g),Vt("invalid",u)}$e(a,g),h=null;for(var b in g)if(g.hasOwnProperty(b)){var O=g[b];b==="children"?typeof O=="string"?u.textContent!==O&&(g.suppressHydrationWarning!==!0&&Ba(u.textContent,O,n),h=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&Ba(u.textContent,O,n),h=["children",""+O]):o.hasOwnProperty(b)&&O!=null&&b==="onScroll"&&Vt("scroll",u)}switch(a){case"input":Rt(u),Ft(u,g,!0);break;case"textarea":Rt(u),J(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Ha)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(a,{is:u.is}):(n=b.createElement(a),a==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,a),n[yi]=i,n[No]=u,am(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ie(a,u),a){case"dialog":Vt("cancel",n),Vt("close",n),h=u;break;case"iframe":case"object":case"embed":Vt("load",n),h=u;break;case"video":case"audio":for(h=0;h<Ro.length;h++)Vt(Ro[h],n);h=u;break;case"source":Vt("error",n),h=u;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),h=u;break;case"details":Vt("toggle",n),h=u;break;case"input":tt(n,u),h=It(n,u),Vt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=L({},u,{value:void 0}),Vt("invalid",n);break;case"textarea":D(n,u),h=Gt(n,u),Vt("invalid",n);break;default:h=u}$e(a,h),O=h;for(g in O)if(O.hasOwnProperty(g)){var V=O[g];g==="style"?De(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Je(n,V)):g==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&be(n,V):typeof V=="number"&&be(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&Vt("scroll",n):V!=null&&C(n,g,V,b))}switch(a){case"input":Rt(n),Ft(n,u,!1);break;case"textarea":Rt(n),J(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ce(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?Ht(n,!!u.multiple,g,!1):u.defaultValue!=null&&Ht(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ha)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(n&&i.stateNode!=null)cm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Gr(Fo.current),Gr(Si.current),Za(i)){if(u=i.stateNode,a=i.memoizedProps,u[yi]=i,(g=u.nodeValue!==a)&&(n=Vn,n!==null))switch(n.tag){case 3:Ba(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ba(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[yi]=i,i.stateNode=u}return Mn(i),null;case 13:if(Wt(Yt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)dp(),As(),i.flags|=98560,g=!1;else if(g=Za(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[yi]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),g=!1}else li!==null&&(Wu(li),li=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Yt.current&1)!==0?sn===0&&(sn=3):Yu())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Ps(),Lu(n,i),n===null&&Io(i.stateNode.containerInfo),Mn(i),null;case 10:return au(i.type._context),Mn(i),null;case 17:return Ln(i.type)&&Va(),Mn(i),null;case 19:if(Wt(Yt),g=i.memoizedState,g===null)return Mn(i),null;if(u=(i.flags&128)!==0,b=g.rendering,b===null)if(u)Go(g,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=tl(n),b!==null){for(i.flags|=128,Go(g,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,n=b.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Bt(Yt,Yt.current&1|2),i.child}n=n.sibling}g.tail!==null&&X()>Us&&(i.flags|=128,u=!0,Go(g,!1),i.lanes=4194304)}else{if(!u)if(n=tl(b),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Go(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!Xt)return Mn(i),null}else 2*X()-g.renderingStartTime>Us&&a!==1073741824&&(i.flags|=128,u=!0,Go(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(a=g.last,a!==null?a.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=X(),i.sibling=null,a=Yt.current,Bt(Yt,u?a&1|2:a&1),i):(Mn(i),null);case 22:case 23:return Xu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(jn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Hx(n,i){switch(tu(i),i.tag){case 1:return Ln(i.type)&&Va(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),Wt(Nn),Wt(yn),gu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return pu(i),null;case 13:if(Wt(Yt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Wt(Yt),null;case 4:return Ps(),null;case 10:return au(i.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var cl=!1,wn=!1,Gx=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){qt(n,i,u)}else a.current=null}function Du(n,i,a){try{a()}catch(u){qt(n,i,u)}}var um=!1;function Vx(n,i){if(Xc=Ra,n=Hh(),Oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var b=0,O=-1,V=-1,re=0,ve=0,ye=n,me=null;t:for(;;){for(var Fe;ye!==a||h!==0&&ye.nodeType!==3||(O=b+h),ye!==g||u!==0&&ye.nodeType!==3||(V=b+u),ye.nodeType===3&&(b+=ye.nodeValue.length),(Fe=ye.firstChild)!==null;)me=ye,ye=Fe;for(;;){if(ye===n)break t;if(me===a&&++re===h&&(O=b),me===g&&++ve===u&&(V=b),(Fe=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Fe}a=O===-1||V===-1?null:{start:O,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},Ra=!1,Be=i;Be!==null;)if(i=Be,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Be=n;else for(;Be!==null;){i=Be;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ye=Ve.memoizedProps,Kt=Ve.memoizedState,$=i.stateNode,Y=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ci(i.type,Ye),Kt);$.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){qt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Be=n;break}Be=i.return}return Ve=um,um=!1,Ve}function Vo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Du(i,a,g)}h=h.next}while(h!==u)}}function ul(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Uu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function dm(n){var i=n.alternate;i!==null&&(n.alternate=null,dm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[No],delete i[Jc],delete i[Tx],delete i[bx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fm(n){return n.tag===5||n.tag===3||n.tag===4}function hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ku(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ha));else if(u!==4&&(n=n.child,n!==null))for(ku(n,i,a),n=n.sibling;n!==null;)ku(n,i,a),n=n.sibling}function Fu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Fu(n,i,a),n=n.sibling;n!==null;)Fu(n,i,a),n=n.sibling}var mn=null,ui=!1;function pr(n,i,a){for(a=a.child;a!==null;)pm(n,i,a),a=a.sibling}function pm(n,i,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:wn||Ls(a,i);case 6:var u=mn,h=ui;mn=null,pr(n,i,a),mn=u,ui=h,mn!==null&&(ui?(n=mn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(ui?(n=mn,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),So(n)):qc(mn,a.stateNode));break;case 4:u=mn,h=ui,mn=a.stateNode.containerInfo,ui=!0,pr(n,i,a),mn=u,ui=h;break;case 0:case 11:case 14:case 15:if(!wn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&Du(a,i,b),h=h.next}while(h!==u)}pr(n,i,a);break;case 1:if(!wn&&(Ls(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(O){qt(a,i,O)}pr(n,i,a);break;case 21:pr(n,i,a);break;case 22:a.mode&1?(wn=(u=wn)||a.memoizedState!==null,pr(n,i,a),wn=u):pr(n,i,a);break;default:pr(n,i,a)}}function mm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Gx),i.forEach(function(u){var h=Kx.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function di(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var g=n,b=i,O=b;e:for(;O!==null;){switch(O.tag){case 5:mn=O.stateNode,ui=!1;break e;case 3:mn=O.stateNode.containerInfo,ui=!0;break e;case 4:mn=O.stateNode.containerInfo,ui=!0;break e}O=O.return}if(mn===null)throw Error(t(160));pm(g,b,h),mn=null,ui=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(re){qt(h,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)gm(i,n),i=i.sibling}function gm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),wi(n),u&4){try{Vo(3,n,n.return),ul(3,n)}catch(Ye){qt(n,n.return,Ye)}try{Vo(5,n,n.return)}catch(Ye){qt(n,n.return,Ye)}}break;case 1:di(i,n),wi(n),u&512&&a!==null&&Ls(a,a.return);break;case 5:if(di(i,n),wi(n),u&512&&a!==null&&Ls(a,a.return),n.flags&32){var h=n.stateNode;try{be(h,"")}catch(Ye){qt(n,n.return,Ye)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,b=a!==null?a.memoizedProps:g,O=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&wt(h,g),Ie(O,b);var re=Ie(O,g);for(b=0;b<V.length;b+=2){var ve=V[b],ye=V[b+1];ve==="style"?De(h,ye):ve==="dangerouslySetInnerHTML"?Je(h,ye):ve==="children"?be(h,ye):C(h,ve,ye,re)}switch(O){case"input":Qe(h,g);break;case"textarea":A(h,g);break;case"select":var me=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Fe=g.value;Fe!=null?Ht(h,!!g.multiple,Fe,!1):me!==!!g.multiple&&(g.defaultValue!=null?Ht(h,!!g.multiple,g.defaultValue,!0):Ht(h,!!g.multiple,g.multiple?[]:"",!1))}h[No]=g}catch(Ye){qt(n,n.return,Ye)}}break;case 6:if(di(i,n),wi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ye){qt(n,n.return,Ye)}}break;case 3:if(di(i,n),wi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{So(i.containerInfo)}catch(Ye){qt(n,n.return,Ye)}break;case 4:di(i,n),wi(n);break;case 13:di(i,n),wi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Bu=X())),u&4&&mm(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(wn=(re=wn)||ve,di(i,n),wn=re):di(i,n),wi(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!ve&&(n.mode&1)!==0)for(Be=n,ve=n.child;ve!==null;){for(ye=Be=ve;Be!==null;){switch(me=Be,Fe=me.child,me.tag){case 0:case 11:case 14:case 15:Vo(4,me,me.return);break;case 1:Ls(me,me.return);var Ve=me.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=me,a=me.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Ye){qt(u,a,Ye)}}break;case 5:Ls(me,me.return);break;case 22:if(me.memoizedState!==null){_m(ye);continue}}Fe!==null?(Fe.return=me,Be=Fe):_m(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{h=ye.stateNode,re?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=ye.stateNode,V=ye.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=Ee("display",b))}catch(Ye){qt(n,n.return,Ye)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=re?"":ye.memoizedProps}catch(Ye){qt(n,n.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:di(i,n),wi(n),u&4&&mm(n);break;case 21:break;default:di(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(fm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(be(h,""),u.flags&=-33);var g=hm(n);Fu(n,g,h);break;case 3:case 4:var b=u.stateNode.containerInfo,O=hm(n);ku(n,O,b);break;default:throw Error(t(161))}}catch(V){qt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Wx(n,i,a){Be=n,vm(n)}function vm(n,i,a){for(var u=(n.mode&1)!==0;Be!==null;){var h=Be,g=h.child;if(h.tag===22&&u){var b=h.memoizedState!==null||cl;if(!b){var O=h.alternate,V=O!==null&&O.memoizedState!==null||wn;O=cl;var re=wn;if(cl=b,(wn=V)&&!re)for(Be=h;Be!==null;)b=Be,V=b.child,b.tag===22&&b.memoizedState!==null?ym(h):V!==null?(V.return=b,Be=V):ym(h);for(;g!==null;)Be=g,vm(g),g=g.sibling;Be=h,cl=O,wn=re}xm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Be=g):xm(n)}}function xm(n){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:wn||ul(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!wn)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&mp(i,g,u);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}mp(i,b,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ve=re.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&So(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||i.flags&512&&Uu(i)}catch(me){qt(i,i.return,me)}}if(i===n){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function _m(n){for(;Be!==null;){var i=Be;if(i===n){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function ym(n){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ul(4,i)}catch(V){qt(i,a,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(V){qt(i,h,V)}}var g=i.return;try{Uu(i)}catch(V){qt(i,g,V)}break;case 5:var b=i.return;try{Uu(i)}catch(V){qt(i,b,V)}}}catch(V){qt(i,i.return,V)}if(i===n){Be=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Be=O;break}Be=i.return}}var jx=Math.ceil,dl=E.ReactCurrentDispatcher,Ou=E.ReactCurrentOwner,ni=E.ReactCurrentBatchConfig,bt=0,un=null,Qt=null,gn=0,jn=0,Ds=cr(0),sn=0,Wo=null,Wr=0,fl=0,zu=0,jo=null,Un=null,Bu=0,Us=1/0,zi=null,hl=!1,Hu=null,mr=null,pl=!1,gr=null,ml=0,Xo=0,Gu=null,gl=-1,vl=0;function Rn(){return(bt&6)!==0?X():gl!==-1?gl:gl=X()}function vr(n){return(n.mode&1)===0?1:(bt&2)!==0&&gn!==0?gn&-gn:Cx.transition!==null?(vl===0&&(vl=An()),vl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Sh(n.type)),n)}function fi(n,i,a,u){if(50<Xo)throw Xo=0,Gu=null,Error(t(185));Jt(n,a,u),((bt&2)===0||n!==un)&&(n===un&&((bt&2)===0&&(fl|=a),sn===4&&xr(n,gn)),kn(n,u),a===1&&bt===0&&(i.mode&1)===0&&(Us=X()+500,ja&&dr()))}function kn(n,i){var a=n.callbackNode;Ur(n,i);var u=oi(n,n===un?gn:0);if(u===0)a!==null&&Z(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Z(a),i===1)n.tag===0?Ax(Mm.bind(null,n)):op(Mm.bind(null,n)),wx(function(){(bt&6)===0&&dr()}),a=null;else{switch(hh(u)){case 1:a=Pe;break;case 4:a=Ge;break;case 16:a=ke;break;case 536870912:a=lt;break;default:a=ke}a=Im(a,Sm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Sm(n,i){if(gl=-1,vl=0,(bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ks()&&n.callbackNode!==a)return null;var u=oi(n,n===un?gn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=xl(n,u);else{i=u;var h=bt;bt|=2;var g=Em();(un!==n||gn!==i)&&(zi=null,Us=X()+500,Xr(n,i));do try{Zx();break}catch(O){wm(n,O)}while(!0);ou(),dl.current=g,bt=h,Qt!==null?i=0:(un=null,gn=0,i=sn)}if(i!==0){if(i===2&&(h=zt(n),h!==0&&(u=h,i=Vu(n,h))),i===1)throw a=Wo,Xr(n,0),xr(n,u),kn(n,X()),a;if(i===6)xr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!Xx(h)&&(i=xl(n,u),i===2&&(g=zt(n),g!==0&&(u=g,i=Vu(n,g))),i===1))throw a=Wo,Xr(n,0),xr(n,u),kn(n,X()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,Un,zi);break;case 3:if(xr(n,u),(u&130023424)===u&&(i=Bu+500-X(),10<i)){if(oi(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Rn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=$c(Yr.bind(null,n,Un,zi),i);break}Yr(n,Un,zi);break;case 4:if(xr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var b=31-Tt(u);g=1<<b,b=i[b],b>h&&(h=b),u&=~g}if(u=h,u=X()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*jx(u/1960))-u,10<u){n.timeoutHandle=$c(Yr.bind(null,n,Un,zi),u);break}Yr(n,Un,zi);break;case 5:Yr(n,Un,zi);break;default:throw Error(t(329))}}}return kn(n,X()),n.callbackNode===a?Sm.bind(null,n):null}function Vu(n,i){var a=jo;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=xl(n,i),n!==2&&(i=Un,Un=a,i!==null&&Wu(i)),n}function Wu(n){Un===null?Un=n:Un.push.apply(Un,n)}function Xx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],g=h.getSnapshot;h=h.value;try{if(!ai(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(n,i){for(i&=~zu,i&=~fl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Tt(i),u=1<<a;n[a]=-1,i&=~u}}function Mm(n){if((bt&6)!==0)throw Error(t(327));ks();var i=oi(n,0);if((i&1)===0)return kn(n,X()),null;var a=xl(n,i);if(n.tag!==0&&a===2){var u=zt(n);u!==0&&(i=u,a=Vu(n,u))}if(a===1)throw a=Wo,Xr(n,0),xr(n,i),kn(n,X()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,Un,zi),kn(n,X()),null}function ju(n,i){var a=bt;bt|=1;try{return n(i)}finally{bt=a,bt===0&&(Us=X()+500,ja&&dr())}}function jr(n){gr!==null&&gr.tag===0&&(bt&6)===0&&ks();var i=bt;bt|=1;var a=ni.transition,u=yt;try{if(ni.transition=null,yt=1,n)return n()}finally{yt=u,ni.transition=a,bt=i,(bt&6)===0&&dr()}}function Xu(){jn=Ds.current,Wt(Ds)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Mx(a)),Qt!==null)for(a=Qt.return;a!==null;){var u=a;switch(tu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Va();break;case 3:Ps(),Wt(Nn),Wt(yn),gu();break;case 5:pu(u);break;case 4:Ps();break;case 13:Wt(Yt);break;case 19:Wt(Yt);break;case 10:au(u.type._context);break;case 22:case 23:Xu()}a=a.return}if(un=n,Qt=n=_r(n.current,null),gn=jn=i,sn=0,Wo=null,zu=fl=Wr=0,Un=jo=null,Hr!==null){for(i=0;i<Hr.length;i++)if(a=Hr[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,g=a.pending;if(g!==null){var b=g.next;g.next=h,u.next=b}a.pending=u}Hr=null}return n}function wm(n,i){do{var a=Qt;try{if(ou(),nl.current=ol,il){for(var u=Zt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}il=!1}if(Vr=0,cn=rn=Zt=null,Oo=!1,zo=0,Ou.current=null,a===null||a.return===null){sn=1,Wo=i,Qt=null;break}e:{var g=n,b=a.return,O=a,V=i;if(i=gn,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var re=V,ve=O,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Fe=Zp(b);if(Fe!==null){Fe.flags&=-257,$p(Fe,b,O,g,i),Fe.mode&1&&Yp(g,re,i),i=Fe,V=re;var Ve=i.updateQueue;if(Ve===null){var Ye=new Set;Ye.add(V),i.updateQueue=Ye}else Ve.add(V);break e}else{if((i&1)===0){Yp(g,re,i),Yu();break e}V=Error(t(426))}}else if(Xt&&O.mode&1){var Kt=Zp(b);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),$p(Kt,b,O,g,i),ru(Ns(V,O));break e}}g=V=Ns(V,O),sn!==4&&(sn=2),jo===null?jo=[g]:jo.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var $=jp(g,V,i);pp(g,$);break e;case 1:O=V;var Y=g.type,K=g.stateNode;if((g.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(mr===null||!mr.has(K)))){g.flags|=65536,i&=-i,g.lanes|=i;var Te=Xp(g,O,i);pp(g,Te);break e}}g=g.return}while(g!==null)}bm(a)}catch(qe){i=qe,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function Em(){var n=dl.current;return dl.current=ol,n===null?ol:n}function Yu(){(sn===0||sn===3||sn===2)&&(sn=4),un===null||(Wr&268435455)===0&&(fl&268435455)===0||xr(un,gn)}function xl(n,i){var a=bt;bt|=2;var u=Em();(un!==n||gn!==i)&&(zi=null,Xr(n,i));do try{Yx();break}catch(h){wm(n,h)}while(!0);if(ou(),bt=a,dl.current=u,Qt!==null)throw Error(t(261));return un=null,gn=0,sn}function Yx(){for(;Qt!==null;)Tm(Qt)}function Zx(){for(;Qt!==null&&!se();)Tm(Qt)}function Tm(n){var i=Rm(n.alternate,n,jn);n.memoizedProps=n.pendingProps,i===null?bm(n):Qt=i,Ou.current=null}function bm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Bx(a,i,jn),a!==null){Qt=a;return}}else{if(a=Hx(a,i),a!==null){a.flags&=32767,Qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=n}while(i!==null);sn===0&&(sn=5)}function Yr(n,i,a){var u=yt,h=ni.transition;try{ni.transition=null,yt=1,$x(n,i,a,u)}finally{ni.transition=h,yt=u}return null}function $x(n,i,a,u){do ks();while(gr!==null);if((bt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(_n(n,g),n===un&&(Qt=un=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||pl||(pl=!0,Im(ke,function(){return ks(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ni.transition,ni.transition=null;var b=yt;yt=1;var O=bt;bt|=4,Ou.current=null,Vx(n,a),gm(a,n),mx(Yc),Ra=!!Xc,Yc=Xc=null,n.current=a,Wx(a),ae(),bt=O,yt=b,ni.transition=g}else n.current=a;if(pl&&(pl=!1,gr=n,ml=h),g=n.pendingLanes,g===0&&(mr=null),Pt(a.stateNode),kn(n,X()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(hl)throw hl=!1,n=Hu,Hu=null,n;return(ml&1)!==0&&n.tag!==0&&ks(),g=n.pendingLanes,(g&1)!==0?n===Gu?Xo++:(Xo=0,Gu=n):Xo=0,dr(),null}function ks(){if(gr!==null){var n=hh(ml),i=ni.transition,a=yt;try{if(ni.transition=null,yt=16>n?16:n,gr===null)var u=!1;else{if(n=gr,gr=null,ml=0,(bt&6)!==0)throw Error(t(331));var h=bt;for(bt|=4,Be=n.current;Be!==null;){var g=Be,b=g.child;if((Be.flags&16)!==0){var O=g.deletions;if(O!==null){for(var V=0;V<O.length;V++){var re=O[V];for(Be=re;Be!==null;){var ve=Be;switch(ve.tag){case 0:case 11:case 15:Vo(8,ve,g)}var ye=ve.child;if(ye!==null)ye.return=ve,Be=ye;else for(;Be!==null;){ve=Be;var me=ve.sibling,Fe=ve.return;if(dm(ve),ve===re){Be=null;break}if(me!==null){me.return=Fe,Be=me;break}Be=Fe}}}var Ve=g.alternate;if(Ve!==null){var Ye=Ve.child;if(Ye!==null){Ve.child=null;do{var Kt=Ye.sibling;Ye.sibling=null,Ye=Kt}while(Ye!==null)}}Be=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,Be=b;else e:for(;Be!==null;){if(g=Be,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Vo(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,Be=$;break e}Be=g.return}}var Y=n.current;for(Be=Y;Be!==null;){b=Be;var K=b.child;if((b.subtreeFlags&2064)!==0&&K!==null)K.return=b,Be=K;else e:for(b=Y;Be!==null;){if(O=Be,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:ul(9,O)}}catch(qe){qt(O,O.return,qe)}if(O===b){Be=null;break e}var Te=O.sibling;if(Te!==null){Te.return=O.return,Be=Te;break e}Be=O.return}}if(bt=h,dr(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(et,n)}catch{}u=!0}return u}finally{yt=a,ni.transition=i}}return!1}function Am(n,i,a){i=Ns(a,i),i=jp(n,i,1),n=hr(n,i,1),i=Rn(),n!==null&&(Jt(n,1,i),kn(n,i))}function qt(n,i,a){if(n.tag===3)Am(n,n,a);else for(;i!==null;){if(i.tag===3){Am(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){n=Ns(a,n),n=Xp(i,n,1),i=hr(i,n,1),n=Rn(),i!==null&&(Jt(i,1,n),kn(i,n));break}}i=i.return}}function qx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Rn(),n.pingedLanes|=n.suspendedLanes&a,un===n&&(gn&a)===a&&(sn===4||sn===3&&(gn&130023424)===gn&&500>X()-Bu?Xr(n,0):zu|=a),kn(n,i)}function Cm(n,i){i===0&&((n.mode&1)===0?i=1:(i=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var a=Rn();n=ki(n,i),n!==null&&(Jt(n,i,a),kn(n,a))}function Jx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Cm(n,a)}function Kx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Cm(n,a)}var Rm;Rm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)Dn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,zx(n,i,a);Dn=(n.flags&131072)!==0}else Dn=!1,Xt&&(i.flags&1048576)!==0&&ap(i,Ya,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ll(n,i),n=i.pendingProps;var h=Es(i,yn.current);Rs(i,a),h=_u(null,i,u,n,h,a);var g=yu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(u)?(g=!0,Wa(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,uu(i),h.updater=Qa,i.stateNode=h,h._reactInternals=i,fu(i,u,n,a),i=Cu(null,i,u,!0,g,a)):(i.tag=0,Xt&&g&&eu(i),Cn(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(ll(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=e_(u),n=ci(u,n),h){case 0:i=Au(null,i,u,n,a);break e;case 1:i=tm(null,i,u,n,a);break e;case 11:i=qp(null,i,u,n,a);break e;case 14:i=Jp(null,i,u,ci(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ci(u,h),Au(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ci(u,h),tm(n,i,u,h,a);case 3:e:{if(nm(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,hp(n,i),Ka(i,u,null,a);var b=i.memoizedState;if(u=b.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ns(Error(t(423)),i),i=im(n,i,u,a,h);break e}else if(u!==h){h=Ns(Error(t(424)),i),i=im(n,i,u,a,h);break e}else for(Wn=lr(i.stateNode.containerInfo.firstChild),Vn=i,Xt=!0,li=null,a=Mp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(As(),u===h){i=Oi(n,i,a);break e}Cn(n,i,u,a)}i=i.child}return i;case 5:return wp(i),n===null&&iu(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,b=h.children,Zc(u,h)?b=null:g!==null&&Zc(u,g)&&(i.flags|=32),em(n,i),Cn(n,i,b,a),i.child;case 6:return n===null&&iu(i),null;case 13:return rm(n,i,a);case 4:return hu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Is(i,null,u,a):Cn(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ci(u,h),qp(n,i,u,h,a);case 7:return Cn(n,i,i.pendingProps,a),i.child;case 8:return Cn(n,i,i.pendingProps.children,a),i.child;case 12:return Cn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,b=h.value,Bt($a,u._currentValue),u._currentValue=b,g!==null)if(ai(g.value,b)){if(g.children===h.children&&!Nn.current){i=Oi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var O=g.dependencies;if(O!==null){b=g.child;for(var V=O.firstContext;V!==null;){if(V.context===u){if(g.tag===1){V=Fi(-1,a&-a),V.tag=2;var re=g.updateQueue;if(re!==null){re=re.shared;var ve=re.pending;ve===null?V.next=V:(V.next=ve.next,ve.next=V),re.pending=V}}g.lanes|=a,V=g.alternate,V!==null&&(V.lanes|=a),lu(g.return,a,i),O.lanes|=a;break}V=V.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(t(341));b.lanes|=a,O=b.alternate,O!==null&&(O.lanes|=a),lu(b,a,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}Cn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Rs(i,a),h=ei(h),u=u(h),i.flags|=1,Cn(n,i,u,a),i.child;case 14:return u=i.type,h=ci(u,i.pendingProps),h=ci(u.type,h),Jp(n,i,u,h,a);case 15:return Kp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ci(u,h),ll(n,i),i.tag=1,Ln(u)?(n=!0,Wa(i)):n=!1,Rs(i,a),xp(i,u,h),fu(i,u,h,a),Cu(null,i,u,!0,n,a);case 19:return om(n,i,a);case 22:return Qp(n,i,a)}throw Error(t(156,i.tag))};function Im(n,i){return P(n,i)}function Qx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,i,a,u){return new Qx(n,i,a,u)}function Zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function e_(n){if(typeof n=="function")return Zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===te)return 11;if(n===ne)return 14}return 2}function _r(n,i){var a=n.alternate;return a===null?(a=ii(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _l(n,i,a,u,h,g){var b=2;if(u=n,typeof n=="function")Zu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case B:return Zr(a.children,h,g,i);case k:b=8,h|=8;break;case R:return n=ii(12,a,i,h|2),n.elementType=R,n.lanes=g,n;case Q:return n=ii(13,a,i,h),n.elementType=Q,n.lanes=g,n;case le:return n=ii(19,a,i,h),n.elementType=le,n.lanes=g,n;case oe:return yl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case I:b=10;break e;case H:b=9;break e;case te:b=11;break e;case ne:b=14;break e;case ee:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ii(b,a,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function Zr(n,i,a,u){return n=ii(7,n,u,i),n.lanes=a,n}function yl(n,i,a,u){return n=ii(22,n,u,i),n.elementType=oe,n.lanes=a,n.stateNode={isHidden:!1},n}function $u(n,i,a){return n=ii(6,n,null,i),n.lanes=a,n}function qu(n,i,a){return i=ii(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function t_(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Ju(n,i,a,u,h,g,b,O,V){return n=new t_(n,i,a,O,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ii(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(g),n}function n_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Pm(n){if(!n)return ur;n=n._reactInternals;e:{if(Pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ln(a))return rp(n,a,i)}return i}function Nm(n,i,a,u,h,g,b,O,V){return n=Ju(a,u,!0,n,h,g,b,O,V),n.context=Pm(null),a=n.current,u=Rn(),h=vr(a),g=Fi(u,h),g.callback=i??null,hr(a,g,h),n.current.lanes=h,Jt(n,h,u),kn(n,u),n}function Sl(n,i,a,u){var h=i.current,g=Rn(),b=vr(h);return a=Pm(a),i.context===null?i.context=a:i.pendingContext=a,i=Fi(g,b),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=hr(h,i,b),n!==null&&(fi(n,h,b,g),Ja(n,h,b)),b}function Ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ku(n,i){Lm(n,i),(n=n.alternate)&&Lm(n,i)}function i_(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qu(n){this._internalRoot=n}wl.prototype.render=Qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Sl(n,i,null,null)},wl.prototype.unmount=Qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;jr(function(){Sl(null,n,null,null)}),i[Ni]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var i=gh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,n),a===0&&_h(n)}};function ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function El(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Um(){}function r_(n,i,a,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var re=Ml(b);g.call(re)}}var b=Nm(i,u,n,0,null,!1,!1,"",Um);return n._reactRootContainer=b,n[Ni]=b.current,Io(n.nodeType===8?n.parentNode:n),jr(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var O=u;u=function(){var re=Ml(V);O.call(re)}}var V=Ju(n,0,!1,null,null,!1,!1,"",Um);return n._reactRootContainer=V,n[Ni]=V.current,Io(n.nodeType===8?n.parentNode:n),jr(function(){Sl(i,V,a,u)}),V}function Tl(n,i,a,u,h){var g=a._reactRootContainer;if(g){var b=g;if(typeof h=="function"){var O=h;h=function(){var V=Ml(b);O.call(V)}}Sl(i,b,n,h)}else b=r_(a,i,n,h,u);return Ml(b)}ph=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=nn(i.pendingLanes);a!==0&&(kr(i,a|1),kn(i,X()),(bt&6)===0&&(Us=X()+500,dr()))}break;case 13:jr(function(){var u=ki(n,1);if(u!==null){var h=Rn();fi(u,n,1,h)}}),Ku(n,1)}},Tc=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var a=Rn();fi(i,n,134217728,a)}Ku(n,134217728)}},mh=function(n){if(n.tag===13){var i=vr(n),a=ki(n,i);if(a!==null){var u=Rn();fi(a,n,i,u)}Ku(n,i)}},gh=function(){return yt},vh=function(n,i){var a=yt;try{return yt=n,i()}finally{yt=a}},Me=function(n,i,a){switch(i){case"input":if(Qe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=Ga(u);if(!h)throw Error(t(90));pt(u),Qe(u,h)}}}break;case"textarea":A(n,a);break;case"select":i=a.value,i!=null&&Ht(n,!!a.multiple,i,!1)}},dt=ju,Nt=jr;var s_={usingClientEntryPoint:!1,Events:[Lo,Ms,Ga,he,Xe,ju]},Yo={findFiberByHostInstance:Fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},o_={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ta(n),n===null?null:n.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||i_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{et=bl.inject(o_),ct=bl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(i))throw Error(t(200));return n_(n,i,null,a)},Fn.createRoot=function(n,i){if(!ed(n))throw Error(t(299));var a=!1,u="",h=Dm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Ju(n,1,!1,null,null,a,!1,u,h),n[Ni]=i.current,Io(n.nodeType===8?n.parentNode:n),new Qu(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ta(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return jr(n)},Fn.hydrate=function(n,i,a){if(!El(i))throw Error(t(200));return Tl(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!ed(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,g="",b=Dm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Nm(i,null,n,1,a??null,h,!1,g,b),n[Ni]=i.current,Io(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new wl(i)},Fn.render=function(n,i,a){if(!El(i))throw Error(t(200));return Tl(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!El(n))throw Error(t(40));return n._reactRootContainer?(jr(function(){Tl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},Fn.unstable_batchedUpdates=ju,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!El(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Tl(n,i,a,!1,u)},Fn.version="18.2.0-next-9e3b772b8-20220608",Fn}var Vm;function x0(){if(Vm)return id.exports;Vm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),id.exports=h_(),id.exports}var Wm;function p_(){if(Wm)return Al;Wm=1;var s=x0();return Al.createRoot=s.createRoot,Al.hydrateRoot=s.hydrateRoot,Al}var m_=p_();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="179",g_=0,jm=1,v_=2,_0=1,y0=2,Xi=3,Nr=0,zn=1,gi=2,Ir=0,eo=1,Yd=2,Xm=3,Ym=4,x_=5,rs=100,__=101,y_=102,S_=103,M_=104,w_=200,E_=201,T_=202,b_=203,Zd=204,$d=205,A_=206,C_=207,R_=208,I_=209,P_=210,N_=211,L_=212,D_=213,U_=214,qd=0,Jd=1,Kd=2,io=3,Qd=4,ef=5,tf=6,nf=7,Xf=0,k_=1,F_=2,Pr=0,O_=1,z_=2,B_=3,H_=4,G_=5,V_=6,W_=7,S0=300,ro=301,so=302,rf=303,sf=304,_c=306,of=1e3,os=1001,af=1002,_i=1003,j_=1004,Cl=1005,Ti=1006,od=1007,as=1008,Ai=1009,M0=1010,w0=1011,ca=1012,Yf=1013,ls=1014,Ki=1015,va=1016,Zf=1017,$f=1018,ua=1020,E0=35902,T0=1021,b0=1022,xi=1023,da=1026,fa=1027,A0=1028,qf=1029,C0=1030,Jf=1031,Kf=1033,sc=33776,oc=33777,ac=33778,lc=33779,lf=35840,cf=35841,uf=35842,df=35843,ff=36196,hf=37492,pf=37496,mf=37808,gf=37809,vf=37810,xf=37811,_f=37812,yf=37813,Sf=37814,Mf=37815,wf=37816,Ef=37817,Tf=37818,bf=37819,Af=37820,Cf=37821,cc=36492,Rf=36494,If=36495,R0=36283,Pf=36284,Nf=36285,Lf=36286,X_=3200,Y_=3201,I0=0,Z_=1,Cr="",si="srgb",oo="srgb-linear",dc="linear",Ut="srgb",Fs=7680,Zm=519,$_=512,q_=513,J_=514,P0=515,K_=516,Q_=517,ey=518,ty=519,$m=35044,qm="300 es",bi=2e3,fc=2001;class co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=Math.PI/180,Df=180/Math.PI;function uo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function ny(s,e){return(s%e+e)%e}function ld(s,e,t){return(1-t)*s+t*e}function $o(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,d){let f=r[o+0],p=r[o+1],v=r[o+2],m=r[o+3];const x=l[c+0],y=l[c+1],M=l[c+2],w=l[c+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=m;return}if(d===1){e[t+0]=x,e[t+1]=y,e[t+2]=M,e[t+3]=w;return}if(m!==w||f!==x||p!==y||v!==M){let S=1-d;const _=f*x+p*y+v*M+m*w,N=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const U=Math.sqrt(C),z=Math.atan2(U,_*N);S=Math.sin(S*z)/U,d=Math.sin(d*z)/U}const E=d*N;if(f=f*S+x*E,p=p*S+y*E,v=v*S+M*E,m=m*S+w*E,S===1-d){const U=1/Math.sqrt(f*f+p*p+v*v+m*m);f*=U,p*=U,v*=U,m*=U}}e[t]=f,e[t+1]=p,e[t+2]=v,e[t+3]=m}static multiplyQuaternionsFlat(e,t,r,o,l,c){const d=r[o],f=r[o+1],p=r[o+2],v=r[o+3],m=l[c],x=l[c+1],y=l[c+2],M=l[c+3];return e[t]=d*M+v*m+f*y-p*x,e[t+1]=f*M+v*x+p*m-d*y,e[t+2]=p*M+v*y+d*x-f*m,e[t+3]=v*M-d*m-f*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,p=d(r/2),v=d(o/2),m=d(l/2),x=f(r/2),y=f(o/2),M=f(l/2);switch(c){case"XYZ":this._x=x*v*m+p*y*M,this._y=p*y*m-x*v*M,this._z=p*v*M+x*y*m,this._w=p*v*m-x*y*M;break;case"YXZ":this._x=x*v*m+p*y*M,this._y=p*y*m-x*v*M,this._z=p*v*M-x*y*m,this._w=p*v*m+x*y*M;break;case"ZXY":this._x=x*v*m-p*y*M,this._y=p*y*m+x*v*M,this._z=p*v*M+x*y*m,this._w=p*v*m-x*y*M;break;case"ZYX":this._x=x*v*m-p*y*M,this._y=p*y*m+x*v*M,this._z=p*v*M-x*y*m,this._w=p*v*m+x*y*M;break;case"YZX":this._x=x*v*m+p*y*M,this._y=p*y*m+x*v*M,this._z=p*v*M-x*y*m,this._w=p*v*m-x*y*M;break;case"XZY":this._x=x*v*m-p*y*M,this._y=p*y*m-x*v*M,this._z=p*v*M+x*y*m,this._w=p*v*m+x*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],d=t[5],f=t[9],p=t[2],v=t[6],m=t[10],x=r+d+m;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-f)*y,this._y=(l-p)*y,this._z=(c-o)*y}else if(r>d&&r>m){const y=2*Math.sqrt(1+r-d-m);this._w=(v-f)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+p)/y}else if(d>m){const y=2*Math.sqrt(1+d-r-m);this._w=(l-p)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(f+v)/y}else{const y=2*Math.sqrt(1+m-r-d);this._w=(c-o)/y,this._x=(l+p)/y,this._y=(f+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,d=t._x,f=t._y,p=t._z,v=t._w;return this._x=r*v+c*d+o*p-l*f,this._y=o*v+c*f+l*d-r*p,this._z=l*v+c*p+r*f-o*d,this._w=c*v-r*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*r+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),v=Math.atan2(p,d),m=Math.sin((1-t)*v)/p,x=Math.sin(t*v)/p;return this._w=c*m+this._w*x,this._x=r*m+this._x*x,this._y=o*m+this._y*x,this._z=l*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,d=e.z,f=e.w,p=2*(c*o-d*r),v=2*(d*t-l*o),m=2*(l*r-c*t);return this.x=t+f*p+c*m-d*v,this.y=r+f*v+d*p-l*m,this.z=o+f*m+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*c-r*f,this.z=r*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new W,Jm=new xa;class mt{constructor(e,t,r,o,l,c,d,f,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,f,p)}set(e,t,r,o,l,c,d,f,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=f,v[6]=r,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[3],f=r[6],p=r[1],v=r[4],m=r[7],x=r[2],y=r[5],M=r[8],w=o[0],S=o[3],_=o[6],N=o[1],C=o[4],E=o[7],U=o[2],z=o[5],B=o[8];return l[0]=c*w+d*N+f*U,l[3]=c*S+d*C+f*z,l[6]=c*_+d*E+f*B,l[1]=p*w+v*N+m*U,l[4]=p*S+v*C+m*z,l[7]=p*_+v*E+m*B,l[2]=x*w+y*N+M*U,l[5]=x*S+y*C+M*z,l[8]=x*_+y*E+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],v=e[8];return t*c*v-t*d*p-r*l*v+r*d*f+o*l*p-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],v=e[8],m=v*c-d*p,x=d*f-v*l,y=p*l-c*f,M=t*m+r*x+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=m*w,e[1]=(o*p-v*r)*w,e[2]=(d*r-o*c)*w,e[3]=x*w,e[4]=(v*t-o*f)*w,e[5]=(o*l-d*t)*w,e[6]=y*w,e[7]=(r*f-p*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*c+p*d)+c+e,-o*p,o*f,-o*(-p*c+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(ud.makeScale(e,t)),this}rotate(e){return this.premultiply(ud.makeRotation(-e)),this}translate(e,t){return this.premultiply(ud.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new mt;function N0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iy(){const s=hc("canvas");return s.style.display="block",s}const Km={};function to(s){s in Km||(Km[s]=!0,console.warn(s))}function ry(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Qm=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sy(){const s={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ut&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=no(o.r),o.g=no(o.g),o.b=no(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?dc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return to("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return to("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[oo]:{primaries:e,whitePoint:r,transfer:dc,toXYZ:Qm,fromXYZ:eg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:Qm,fromXYZ:eg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Ct=sy();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function no(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os;class oy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Os===void 0&&(Os=hc("canvas")),Os.width=e.width,Os.height=e.height;const o=Os.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Os}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Qi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Qi(t[r]/255)*255):t[r]=Qi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ay=0;class Qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(dd(o[c].image)):l.push(dd(o[c]))}else l=dd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function dd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ly=0;const fd=new W;class Bn extends co{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=os,o=os,l=Ti,c=as,d=xi,f=Ai,p=Bn.DEFAULT_ANISOTROPY,v=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=uo(),this.name="",this.source=new Qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case of:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case of:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=S0;Bn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,r=0,o=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],v=f[4],m=f[8],x=f[1],y=f[5],M=f[9],w=f[2],S=f[6],_=f[10];if(Math.abs(v-x)<.01&&Math.abs(m-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(m+w)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(p+1)/2,E=(y+1)/2,U=(_+1)/2,z=(v+x)/4,B=(m+w)/4,k=(M+S)/4;return C>E&&C>U?C<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(C),o=z/r,l=B/r):E>U?E<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(E),r=z/o,l=k/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=B/l,o=k/l),this.set(r,o,l,t),this}let N=Math.sqrt((S-M)*(S-M)+(m-w)*(m-w)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(m-w)/N,this.z=(x-v)/N,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cy extends co{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Bn(o);this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Qf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends cy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class L0 extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uy extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,hi):hi.fromBufferAttribute(l,c),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rl.copy(r.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Il.subVectors(this.max,qo),zs.subVectors(e.a,qo),Bs.subVectors(e.b,qo),Hs.subVectors(e.c,qo),Sr.subVectors(Bs,zs),Mr.subVectors(Hs,Bs),$r.subVectors(zs,Hs);let t=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-$r.z,$r.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,$r.z,0,-$r.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-$r.y,$r.x,0];return!hd(t,zs,Bs,Hs,Il)||(t=[1,0,0,0,1,0,0,0,1],!hd(t,zs,Bs,Hs,Il))?!1:(Pl.crossVectors(Sr,Mr),t=[Pl.x,Pl.y,Pl.z],hd(t,zs,Bs,Hs,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new W,new W,new W,new W,new W,new W,new W,new W],hi=new W,Rl=new _a,zs=new W,Bs=new W,Hs=new W,Sr=new W,Mr=new W,$r=new W,qo=new W,Il=new W,Pl=new W,qr=new W;function hd(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){qr.fromArray(s,l);const d=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),f=e.dot(qr),p=t.dot(qr),v=r.dot(qr);if(Math.max(-Math.max(f,p,v),Math.min(f,p,v))>d)return!1}return!0}const dy=new _a,Jo=new W,pd=new W;class ya{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):dy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const t=Jo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Jo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(pd)),this.expandByPoint(Jo.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new W,md=new W,Nl=new W,wr=new W,gd=new W,Ll=new W,vd=new W;class eh{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){md.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(md);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Nl),d=wr.dot(this.direction),f=-wr.dot(Nl),p=wr.lengthSq(),v=Math.abs(1-c*c);let m,x,y,M;if(v>0)if(m=c*f-d,x=c*d-f,M=l*v,m>=0)if(x>=-M)if(x<=M){const w=1/v;m*=w,x*=w,y=m*(m+c*x+2*d)+x*(c*m+x+2*f)+p}else x=l,m=Math.max(0,-(c*x+d)),y=-m*m+x*(x+2*f)+p;else x=-l,m=Math.max(0,-(c*x+d)),y=-m*m+x*(x+2*f)+p;else x<=-M?(m=Math.max(0,-(-c*l+d)),x=m>0?-l:Math.min(Math.max(-l,-f),l),y=-m*m+x*(x+2*f)+p):x<=M?(m=0,x=Math.min(Math.max(-l,-f),l),y=x*(x+2*f)+p):(m=Math.max(0,-(c*l+d)),x=m>0?l:Math.min(Math.max(-l,-f),l),y=-m*m+x*(x+2*f)+p);else x=c>0?-l:l,m=Math.max(0,-(c*x+d)),y=-m*m+x*(x+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(md).addScaledVector(Nl,x),y}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),o=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=r-c,f=r+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,d,f;const p=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,c=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,c=(e.min.y-x.y)*v),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),m>=0?(d=(e.min.z-x.z)*m,f=(e.max.z-x.z)*m):(d=(e.max.z-x.z)*m,f=(e.min.z-x.z)*m),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,r,o,l){gd.subVectors(t,e),Ll.subVectors(r,e),vd.crossVectors(gd,Ll);let c=this.direction.dot(vd),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;wr.subVectors(this.origin,e);const f=d*this.direction.dot(Ll.crossVectors(wr,Ll));if(f<0)return null;const p=d*this.direction.dot(gd.cross(wr));if(p<0||f+p>c)return null;const v=-d*wr.dot(vd);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,r,o,l,c,d,f,p,v,m,x,y,M,w,S){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,f,p,v,m,x,y,M,w,S)}set(e,t,r,o,l,c,d,f,p,v,m,x,y,M,w,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=c,_[9]=d,_[13]=f,_[2]=p,_[6]=v,_[10]=m,_[14]=x,_[3]=y,_[7]=M,_[11]=w,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Gs.setFromMatrixColumn(e,0).length(),l=1/Gs.setFromMatrixColumn(e,1).length(),c=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),f=Math.cos(o),p=Math.sin(o),v=Math.cos(l),m=Math.sin(l);if(e.order==="XYZ"){const x=c*v,y=c*m,M=d*v,w=d*m;t[0]=f*v,t[4]=-f*m,t[8]=p,t[1]=y+M*p,t[5]=x-w*p,t[9]=-d*f,t[2]=w-x*p,t[6]=M+y*p,t[10]=c*f}else if(e.order==="YXZ"){const x=f*v,y=f*m,M=p*v,w=p*m;t[0]=x+w*d,t[4]=M*d-y,t[8]=c*p,t[1]=c*m,t[5]=c*v,t[9]=-d,t[2]=y*d-M,t[6]=w+x*d,t[10]=c*f}else if(e.order==="ZXY"){const x=f*v,y=f*m,M=p*v,w=p*m;t[0]=x-w*d,t[4]=-c*m,t[8]=M+y*d,t[1]=y+M*d,t[5]=c*v,t[9]=w-x*d,t[2]=-c*p,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const x=c*v,y=c*m,M=d*v,w=d*m;t[0]=f*v,t[4]=M*p-y,t[8]=x*p+w,t[1]=f*m,t[5]=w*p+x,t[9]=y*p-M,t[2]=-p,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const x=c*f,y=c*p,M=d*f,w=d*p;t[0]=f*v,t[4]=w-x*m,t[8]=M*m+y,t[1]=m,t[5]=c*v,t[9]=-d*v,t[2]=-p*v,t[6]=y*m+M,t[10]=x-w*m}else if(e.order==="XZY"){const x=c*f,y=c*p,M=d*f,w=d*p;t[0]=f*v,t[4]=-m,t[8]=p*v,t[1]=x*m+w,t[5]=c*v,t[9]=y*m-M,t[2]=M*m-y,t[6]=d*v,t[10]=w*m+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,hy)}lookAt(e,t,r){const o=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Er.crossVectors(r,Xn),Er.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Er.crossVectors(r,Xn)),Er.normalize(),Dl.crossVectors(Xn,Er),o[0]=Er.x,o[4]=Dl.x,o[8]=Xn.x,o[1]=Er.y,o[5]=Dl.y,o[9]=Xn.y,o[2]=Er.z,o[6]=Dl.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[4],f=r[8],p=r[12],v=r[1],m=r[5],x=r[9],y=r[13],M=r[2],w=r[6],S=r[10],_=r[14],N=r[3],C=r[7],E=r[11],U=r[15],z=o[0],B=o[4],k=o[8],R=o[12],I=o[1],H=o[5],te=o[9],Q=o[13],le=o[2],ne=o[6],ee=o[10],oe=o[14],F=o[3],ce=o[7],L=o[11],q=o[15];return l[0]=c*z+d*I+f*le+p*F,l[4]=c*B+d*H+f*ne+p*ce,l[8]=c*k+d*te+f*ee+p*L,l[12]=c*R+d*Q+f*oe+p*q,l[1]=v*z+m*I+x*le+y*F,l[5]=v*B+m*H+x*ne+y*ce,l[9]=v*k+m*te+x*ee+y*L,l[13]=v*R+m*Q+x*oe+y*q,l[2]=M*z+w*I+S*le+_*F,l[6]=M*B+w*H+S*ne+_*ce,l[10]=M*k+w*te+S*ee+_*L,l[14]=M*R+w*Q+S*oe+_*q,l[3]=N*z+C*I+E*le+U*F,l[7]=N*B+C*H+E*ne+U*ce,l[11]=N*k+C*te+E*ee+U*L,l[15]=N*R+C*Q+E*oe+U*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],d=e[5],f=e[9],p=e[13],v=e[2],m=e[6],x=e[10],y=e[14],M=e[3],w=e[7],S=e[11],_=e[15];return M*(+l*f*m-o*p*m-l*d*x+r*p*x+o*d*y-r*f*y)+w*(+t*f*y-t*p*x+l*c*x-o*c*y+o*p*v-l*f*v)+S*(+t*p*m-t*d*y-l*c*m+r*c*y+l*d*v-r*p*v)+_*(-o*d*v-t*f*m+t*d*x+o*c*m-r*c*x+r*f*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],v=e[8],m=e[9],x=e[10],y=e[11],M=e[12],w=e[13],S=e[14],_=e[15],N=m*S*p-w*x*p+w*f*y-d*S*y-m*f*_+d*x*_,C=M*x*p-v*S*p-M*f*y+c*S*y+v*f*_-c*x*_,E=v*w*p-M*m*p+M*d*y-c*w*y-v*d*_+c*m*_,U=M*m*f-v*w*f-M*d*x+c*w*x+v*d*S-c*m*S,z=t*N+r*C+o*E+l*U;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return e[0]=N*B,e[1]=(w*x*l-m*S*l-w*o*y+r*S*y+m*o*_-r*x*_)*B,e[2]=(d*S*l-w*f*l+w*o*p-r*S*p-d*o*_+r*f*_)*B,e[3]=(m*f*l-d*x*l-m*o*p+r*x*p+d*o*y-r*f*y)*B,e[4]=C*B,e[5]=(v*S*l-M*x*l+M*o*y-t*S*y-v*o*_+t*x*_)*B,e[6]=(M*f*l-c*S*l-M*o*p+t*S*p+c*o*_-t*f*_)*B,e[7]=(c*x*l-v*f*l+v*o*p-t*x*p-c*o*y+t*f*y)*B,e[8]=E*B,e[9]=(M*m*l-v*w*l-M*r*y+t*w*y+v*r*_-t*m*_)*B,e[10]=(c*w*l-M*d*l+M*r*p-t*w*p-c*r*_+t*d*_)*B,e[11]=(v*d*l-c*m*l-v*r*p+t*m*p+c*r*y-t*d*y)*B,e[12]=U*B,e[13]=(v*w*o-M*m*o+M*r*x-t*w*x-v*r*S+t*m*S)*B,e[14]=(M*d*o-c*w*o-M*r*f+t*w*f+c*r*S-t*d*S)*B,e[15]=(c*m*o-v*d*o+v*r*f-t*m*f-c*r*x+t*d*x)*B,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,d=e.y,f=e.z,p=l*c,v=l*d;return this.set(p*c+r,p*d-o*f,p*f+o*d,0,p*d+o*f,v*d+r,v*f-o*c,0,p*f-o*d,v*f+o*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,p=l+l,v=c+c,m=d+d,x=l*p,y=l*v,M=l*m,w=c*v,S=c*m,_=d*m,N=f*p,C=f*v,E=f*m,U=r.x,z=r.y,B=r.z;return o[0]=(1-(w+_))*U,o[1]=(y+E)*U,o[2]=(M-C)*U,o[3]=0,o[4]=(y-E)*z,o[5]=(1-(x+_))*z,o[6]=(S+N)*z,o[7]=0,o[8]=(M+C)*B,o[9]=(S-N)*B,o[10]=(1-(x+w))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Gs.set(o[0],o[1],o[2]).length();const c=Gs.set(o[4],o[5],o[6]).length(),d=Gs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],pi.copy(this);const p=1/l,v=1/c,m=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=v,pi.elements[5]*=v,pi.elements[6]*=v,pi.elements[8]*=m,pi.elements[9]*=m,pi.elements[10]*=m,t.setFromRotationMatrix(pi),r.x=l,r.y=c,r.z=d,this}makePerspective(e,t,r,o,l,c,d=bi,f=!1){const p=this.elements,v=2*l/(t-e),m=2*l/(r-o),x=(t+e)/(t-e),y=(r+o)/(r-o);let M,w;if(f)M=l/(c-l),w=c*l/(c-l);else if(d===bi)M=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(d===fc)M=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=m,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,c,d=bi,f=!1){const p=this.elements,v=2/(t-e),m=2/(r-o),x=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,w;if(f)M=1/(c-l),w=c/(c-l);else if(d===bi)M=-2/(c-l),w=-(c+l)/(c-l);else if(d===fc)M=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=m,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Gs=new W,pi=new jt,fy=new W(0,0,0),hy=new W(1,1,1),Er=new W,Dl=new W,Xn=new W,tg=new jt,ng=new xa;class Ci{constructor(e=0,t=0,r=0,o=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],f=o[1],p=o[5],v=o[9],m=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-m,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-m,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ng.setFromEuler(this),this.setFromQuaternion(ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class D0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let py=0;const ig=new W,Vs=new xa,Gi=new jt,Ul=new W,Ko=new W,my=new W,gy=new xa,rg=new W(1,0,0),sg=new W(0,1,0),og=new W(0,0,1),ag={type:"added"},vy={type:"removed"},Ws={type:"childadded",child:null},xd={type:"childremoved",child:null};class hn extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new W,t=new Ci,r=new xa,o=new W(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new mt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(rg,e)}rotateY(e){return this.rotateOnAxis(sg,e)}rotateZ(e){return this.rotateOnAxis(og,e)}translateOnAxis(e,t){return ig.copy(e).applyQuaternion(this.quaternion),this.position.add(ig.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rg,e)}translateY(e){return this.translateOnAxis(sg,e)}translateZ(e){return this.translateOnAxis(og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ul.copy(e):Ul.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ko,Ul,this.up):Gi.lookAt(Ul,Ko,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Vs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ag),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vy),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ag),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,my),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,v=f.length;p<v;p++){const m=f[p];l(e.shapes,m)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),p=c(e.textures),v=c(e.images),m=c(e.shapes),x=c(e.skeletons),y=c(e.animations),M=c(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),m.length>0&&(r.shapes=m),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(d){const f=[];for(const p in d){const v=d[p];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}hn.DEFAULT_UP=new W(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new W,Vi=new W,_d=new W,Wi=new W,js=new W,Xs=new W,lg=new W,yd=new W,Sd=new W,Md=new W,wd=new kt,Ed=new kt,Td=new kt;class vi{constructor(e=new W,t=new W,r=new W){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),mi.subVectors(e,t),o.cross(mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){mi.subVectors(o,t),Vi.subVectors(r,t),_d.subVectors(e,t);const c=mi.dot(mi),d=mi.dot(Vi),f=mi.dot(_d),p=Vi.dot(Vi),v=Vi.dot(_d),m=c*p-d*d;if(m===0)return l.set(0,0,0),null;const x=1/m,y=(p*f-d*v)*x,M=(c*v-d*f)*x;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,r,o,l,c,d,f){return this.getBarycoord(e,t,r,o,Wi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Wi.x),f.addScaledVector(c,Wi.y),f.addScaledVector(d,Wi.z),f)}static getInterpolatedAttribute(e,t,r,o,l,c){return wd.setScalar(0),Ed.setScalar(0),Td.setScalar(0),wd.fromBufferAttribute(e,t),Ed.fromBufferAttribute(e,r),Td.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(wd,l.x),c.addScaledVector(Ed,l.y),c.addScaledVector(Td,l.z),c}static isFrontFacing(e,t,r,o){return mi.subVectors(r,t),Vi.subVectors(e,t),mi.cross(Vi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),mi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,d;js.subVectors(o,r),Xs.subVectors(l,r),yd.subVectors(e,r);const f=js.dot(yd),p=Xs.dot(yd);if(f<=0&&p<=0)return t.copy(r);Sd.subVectors(e,o);const v=js.dot(Sd),m=Xs.dot(Sd);if(v>=0&&m<=v)return t.copy(o);const x=f*m-v*p;if(x<=0&&f>=0&&v<=0)return c=f/(f-v),t.copy(r).addScaledVector(js,c);Md.subVectors(e,l);const y=js.dot(Md),M=Xs.dot(Md);if(M>=0&&y<=M)return t.copy(l);const w=y*p-f*M;if(w<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(r).addScaledVector(Xs,d);const S=v*M-y*m;if(S<=0&&m-v>=0&&y-M>=0)return lg.subVectors(l,o),d=(m-v)/(m-v+(y-M)),t.copy(o).addScaledVector(lg,d);const _=1/(S+w+x);return c=w*_,d=x*_,t.copy(r).addScaledVector(js,c).addScaledVector(Xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function bd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=ny(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=bd(c,l,e+1/3),this.g=bd(c,l,e),this.b=bd(c,l,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,t=si){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const r=U0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Ct.workingToColorSpace(Tn.copy(this),e),Math.round(Mt(Tn.r*255,0,255))*65536+Math.round(Mt(Tn.g*255,0,255))*256+Math.round(Mt(Tn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Tn.copy(this),t);const r=Tn.r,o=Tn.g,l=Tn.b,c=Math.max(r,o,l),d=Math.min(r,o,l);let f,p;const v=(d+c)/2;if(d===c)f=0,p=0;else{const m=c-d;switch(p=v<=.5?m/(c+d):m/(2-c-d),c){case r:f=(o-l)/m+(o<l?6:0);break;case o:f=(l-r)/m+2;break;case l:f=(r-o)/m+4;break}f/=6}return e.h=f,e.s=p,e.l=v,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=si){Ct.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,o=Tn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(kl);const r=ld(Tr.h,kl.h,t),o=ld(Tr.s,kl.s,t),l=ld(Tr.l,kl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new gt;gt.NAMES=U0;let xy=0;class ds extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=eo,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=$d,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zd&&(r.blendSrc=this.blendSrc),this.blendDst!==$d&&(r.blendDst=this.blendDst),this.blendEquation!==rs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sa extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new W,Fl=new Ze;let _y=0;class qn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_y++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=$m,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=$o(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$o(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$o(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$o(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array),o=On(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array),o=On(o,this.array),l=On(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$m&&(e.usage=this.usage),e}}class k0 extends qn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class F0 extends qn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class tn extends qn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let yy=0;const ri=new jt,Ad=new hn,Ys=new W,Yn=new _a,Qo=new _a,fn=new W;class Pn extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?F0:k0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new tn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(fn.addVectors(Yn.min,Qo.min),Yn.expandByPoint(fn),fn.addVectors(Yn.max,Qo.max),Yn.expandByPoint(fn)):(Yn.expandByPoint(Qo.min),Yn.expandByPoint(Qo.max))}Yn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(fn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)fn.fromBufferAttribute(d,p),f&&(Ys.fromBufferAttribute(e,p),fn.add(Ys)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],f=[];for(let k=0;k<r.count;k++)d[k]=new W,f[k]=new W;const p=new W,v=new W,m=new W,x=new Ze,y=new Ze,M=new Ze,w=new W,S=new W;function _(k,R,I){p.fromBufferAttribute(r,k),v.fromBufferAttribute(r,R),m.fromBufferAttribute(r,I),x.fromBufferAttribute(l,k),y.fromBufferAttribute(l,R),M.fromBufferAttribute(l,I),v.sub(p),m.sub(p),y.sub(x),M.sub(x);const H=1/(y.x*M.y-M.x*y.y);isFinite(H)&&(w.copy(v).multiplyScalar(M.y).addScaledVector(m,-y.y).multiplyScalar(H),S.copy(m).multiplyScalar(y.x).addScaledVector(v,-M.x).multiplyScalar(H),d[k].add(w),d[R].add(w),d[I].add(w),f[k].add(S),f[R].add(S),f[I].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let k=0,R=N.length;k<R;++k){const I=N[k],H=I.start,te=I.count;for(let Q=H,le=H+te;Q<le;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const C=new W,E=new W,U=new W,z=new W;function B(k){U.fromBufferAttribute(o,k),z.copy(U);const R=d[k];C.copy(R),C.sub(U.multiplyScalar(U.dot(R))).normalize(),E.crossVectors(z,R);const H=E.dot(f[k])<0?-1:1;c.setXYZW(k,C.x,C.y,C.z,H)}for(let k=0,R=N.length;k<R;++k){const I=N[k],H=I.start,te=I.count;for(let Q=H,le=H+te;Q<le;Q+=3)B(e.getX(Q+0)),B(e.getX(Q+1)),B(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const o=new W,l=new W,c=new W,d=new W,f=new W,p=new W,v=new W,m=new W;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),w=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,S),v.subVectors(c,l),m.subVectors(o,l),v.cross(m),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),d.add(v),f.add(v),p.add(v),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),v.subVectors(c,l),m.subVectors(o,l),v.cross(m),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(d,f){const p=d.array,v=d.itemSize,m=d.normalized,x=new p.constructor(f.length*v);let y=0,M=0;for(let w=0,S=f.length;w<S;w++){d.isInterleavedBufferAttribute?y=f[w]*d.data.stride+d.offset:y=f[w]*v;for(let _=0;_<v;_++)x[M++]=p[y++]}return new qn(x,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let v=0,m=p.length;v<m;v++){const x=p[v],y=e(x,r);f.push(y)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],v=[];for(let m=0,x=p.length;m<x;m++){const y=p[m];v.push(y.toJSON(e.data))}v.length>0&&(o[f]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],m=l[p];for(let x=0,y=m.length;x<y;x++)v.push(m[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const m=c[p];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cg=new jt,Jr=new eh,Ol=new ya,ug=new W,zl=new W,Bl=new W,Hl=new W,Cd=new W,Gl=new W,dg=new W,Vl=new W;class $n extends hn{constructor(e=new Pn,t=new sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Gl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const v=d[f],m=l[f];v!==0&&(Cd.fromBufferAttribute(m,e),c?Gl.addScaledVector(Cd,v):Gl.addScaledVector(Cd.sub(t),v))}t.add(Gl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ol.copy(r.boundingSphere),Ol.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(Ol.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Ol,ug)===null||Jr.origin.distanceToSquared(ug)>(e.far-e.near)**2))&&(cg.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(cg),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,m=l.attributes.normal,x=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,w=x.length;M<w;M++){const S=x[M],_=c[S.materialIndex],N=Math.max(S.start,y.start),C=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let E=N,U=C;E<U;E+=3){const z=d.getX(E),B=d.getX(E+1),k=d.getX(E+2);o=Wl(this,_,e,r,p,v,m,z,B,k),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let S=M,_=w;S<_;S+=3){const N=d.getX(S),C=d.getX(S+1),E=d.getX(S+2);o=Wl(this,c,e,r,p,v,m,N,C,E),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,w=x.length;M<w;M++){const S=x[M],_=c[S.materialIndex],N=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let E=N,U=C;E<U;E+=3){const z=E,B=E+1,k=E+2;o=Wl(this,_,e,r,p,v,m,z,B,k),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let S=M,_=w;S<_;S+=3){const N=S,C=S+1,E=S+2;o=Wl(this,c,e,r,p,v,m,N,C,E),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Sy(s,e,t,r,o,l,c,d){let f;if(e.side===zn?f=r.intersectTriangle(c,l,o,!0,d):f=r.intersectTriangle(o,l,c,e.side===Nr,d),f===null)return null;Vl.copy(d),Vl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Vl);return p<t.near||p>t.far?null:{distance:p,point:Vl.clone(),object:s}}function Wl(s,e,t,r,o,l,c,d,f,p){s.getVertexPosition(d,zl),s.getVertexPosition(f,Bl),s.getVertexPosition(p,Hl);const v=Sy(s,e,t,r,zl,Bl,Hl,dg);if(v){const m=new W;vi.getBarycoord(dg,zl,Bl,Hl,m),o&&(v.uv=vi.getInterpolatedAttribute(o,d,f,p,m,new Ze)),l&&(v.uv1=vi.getInterpolatedAttribute(l,d,f,p,m,new Ze)),c&&(v.normal=vi.getInterpolatedAttribute(c,d,f,p,m,new W),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:f,c:p,normal:new W,materialIndex:0};vi.getNormal(zl,Bl,Hl,x.normal),v.face=x,v.barycoord=m}return v}class fo extends Pn{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],v=[],m=[];let x=0,y=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(m,2));function M(w,S,_,N,C,E,U,z,B,k,R){const I=E/B,H=U/k,te=E/2,Q=U/2,le=z/2,ne=B+1,ee=k+1;let oe=0,F=0;const ce=new W;for(let L=0;L<ee;L++){const q=L*H-Q;for(let _e=0;_e<ne;_e++){const Ne=_e*I-te;ce[w]=Ne*N,ce[S]=q*C,ce[_]=le,p.push(ce.x,ce.y,ce.z),ce[w]=0,ce[S]=0,ce[_]=z>0?1:-1,v.push(ce.x,ce.y,ce.z),m.push(_e/B),m.push(1-L/k),oe+=1}}for(let L=0;L<k;L++)for(let q=0;q<B;q++){const _e=x+q+ne*L,Ne=x+q+ne*(L+1),Re=x+(q+1)+ne*(L+1),ie=x+(q+1)+ne*L;f.push(_e,Ne,ie),f.push(Ne,Re,ie),F+=6}d.addGroup(y,F,R),y+=F,x+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const r=ao(s[t]);for(const o in r)e[o]=r[o]}return e}function My(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function O0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const wy={clone:ao,merge:In};var Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class z0 extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new W,fg=new Ze,hg=new Ze;class Zn extends z0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Df*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Df*2*Math.atan(Math.tan(ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,fg,hg),t.subVectors(hg,fg)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ad*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*r/p,o*=c.width/f,r*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,$s=1;class by extends hn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Zs,$s,e,t);o.layers=this.layers,this.add(o);const l=new Zn(Zs,$s,e,t);l.layers=this.layers,this.add(l);const c=new Zn(Zs,$s,e,t);c.layers=this.layers,this.add(c);const d=new Zn(Zs,$s,e,t);d.layers=this.layers,this.add(d);const f=new Zn(Zs,$s,e,t);f.layers=this.layers,this.add(f);const p=new Zn(Zs,$s,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,d,f]=t;for(const p of t)this.remove(p);if(e===bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,p,v]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,v),e.setRenderTarget(m,x,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class B0 extends Bn{constructor(e=[],t=ro,r,o,l,c,d,f,p,v){super(e,t,r,o,l,c,d,f,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ay extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new B0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new fo(5,5,5),l=new Lr({name:"CubemapFromEquirect",uniforms:ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Ir});l.uniforms.tEquirect.value=t;const c=new $n(o,l),d=t.minFilter;return t.minFilter===as&&(t.minFilter=Ti),new by(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class Yi extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,r),_=this._getHandJoint(p,w);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],x=v.position.distanceTo(m.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Yi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Ry extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Id=new W,Iy=new W,Py=new mt;class ns{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Id.subVectors(r,t).cross(Iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Id),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Py.getNormalMatrix(e),o=this.coplanarPoint(Id).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new ya,Ny=new Ze(.5,.5),jl=new W;class th{constructor(e=new ns,t=new ns,r=new ns,o=new ns,l=new ns,c=new ns){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=bi,r=!1){const o=this.planes,l=e.elements,c=l[0],d=l[1],f=l[2],p=l[3],v=l[4],m=l[5],x=l[6],y=l[7],M=l[8],w=l[9],S=l[10],_=l[11],N=l[12],C=l[13],E=l[14],U=l[15];if(o[0].setComponents(p-c,y-v,_-M,U-N).normalize(),o[1].setComponents(p+c,y+v,_+M,U+N).normalize(),o[2].setComponents(p+d,y+m,_+w,U+C).normalize(),o[3].setComponents(p-d,y-m,_-w,U-C).normalize(),r)o[4].setComponents(f,x,S,E).normalize(),o[5].setComponents(p-f,y-x,_-S,U-E).normalize();else if(o[4].setComponents(p-f,y-x,_-S,U-E).normalize(),t===bi)o[5].setComponents(p+f,y+x,_+S,U+E).normalize();else if(t===fc)o[5].setComponents(f,x,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const t=Ny.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(jl.x=o.normal.x>0?e.max.x:e.min.x,jl.y=o.normal.y>0?e.max.y:e.min.y,jl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H0 extends ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new W,mc=new W,pg=new jt,ea=new eh,Xl=new ya,Pd=new W,mg=new W;class Ly extends hn{constructor(e=new Pn,t=new H0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)pc.fromBufferAttribute(t,o-1),mc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new tn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(o),Xl.radius+=l,e.ray.intersectsSphere(Xl)===!1)return;pg.copy(o).invert(),ea.copy(e.ray).applyMatrix4(pg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const y=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let w=y,S=M-1;w<S;w+=p){const _=v.getX(w),N=v.getX(w+1),C=Yl(this,e,ea,f,_,N,w);C&&t.push(C)}if(this.isLineLoop){const w=v.getX(M-1),S=v.getX(y),_=Yl(this,e,ea,f,w,S,M-1);_&&t.push(_)}}else{const y=Math.max(0,c.start),M=Math.min(x.count,c.start+c.count);for(let w=y,S=M-1;w<S;w+=p){const _=Yl(this,e,ea,f,w,w+1,w);_&&t.push(_)}if(this.isLineLoop){const w=Yl(this,e,ea,f,M-1,y,M-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Yl(s,e,t,r,o,l,c){const d=s.geometry.attributes.position;if(pc.fromBufferAttribute(d,o),mc.fromBufferAttribute(d,l),t.distanceSqToSegment(pc,mc,Pd,mg)>r)return;Pd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Pd);if(!(p<e.near||p>e.far))return{distance:p,point:mg.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}class G0 extends ds{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gg=new jt,Uf=new eh,Zl=new ya,$l=new W;class Nd extends hn{constructor(e=new Pn,t=new G0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zl.copy(r.boundingSphere),Zl.applyMatrix4(o),Zl.radius+=l,e.ray.intersectsSphere(Zl)===!1)return;gg.copy(o).invert(),Uf.copy(e.ray).applyMatrix4(gg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=r.index,m=r.attributes.position;if(p!==null){const x=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let M=x,w=y;M<w;M++){const S=p.getX(M);$l.fromBufferAttribute(m,S),vg($l,S,f,o,e,t,this)}}else{const x=Math.max(0,c.start),y=Math.min(m.count,c.start+c.count);for(let M=x,w=y;M<w;M++)$l.fromBufferAttribute(m,M),vg($l,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function vg(s,e,t,r,o,l,c){const d=Uf.distanceSqToPoint(s);if(d<t){const f=new W;Uf.closestPointToPoint(s,f),f.applyMatrix4(r);const p=o.ray.origin.distanceTo(f);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class V0 extends Bn{constructor(e,t,r=ls,o,l,c,d=_i,f=_i,p,v=da,m=1){if(v!==da&&v!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:m};super(x,o,l,c,d,f,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yc extends Pn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];d(o),p(r),v(),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(l.slice(),3)),this.setAttribute("uv",new tn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const C=new W,E=new W,U=new W;for(let z=0;z<t.length;z+=3)y(t[z+0],C),y(t[z+1],E),y(t[z+2],U),f(C,E,U,N)}function f(N,C,E,U){const z=U+1,B=[];for(let k=0;k<=z;k++){B[k]=[];const R=N.clone().lerp(E,k/z),I=C.clone().lerp(E,k/z),H=z-k;for(let te=0;te<=H;te++)te===0&&k===z?B[k][te]=R:B[k][te]=R.clone().lerp(I,te/H)}for(let k=0;k<z;k++)for(let R=0;R<2*(z-k)-1;R++){const I=Math.floor(R/2);R%2===0?(x(B[k][I+1]),x(B[k+1][I]),x(B[k][I])):(x(B[k][I+1]),x(B[k+1][I+1]),x(B[k+1][I]))}}function p(N){const C=new W;for(let E=0;E<l.length;E+=3)C.x=l[E+0],C.y=l[E+1],C.z=l[E+2],C.normalize().multiplyScalar(N),l[E+0]=C.x,l[E+1]=C.y,l[E+2]=C.z}function v(){const N=new W;for(let C=0;C<l.length;C+=3){N.x=l[C+0],N.y=l[C+1],N.z=l[C+2];const E=S(N)/2/Math.PI+.5,U=_(N)/Math.PI+.5;c.push(E,1-U)}M(),m()}function m(){for(let N=0;N<c.length;N+=6){const C=c[N+0],E=c[N+2],U=c[N+4],z=Math.max(C,E,U),B=Math.min(C,E,U);z>.9&&B<.1&&(C<.2&&(c[N+0]+=1),E<.2&&(c[N+2]+=1),U<.2&&(c[N+4]+=1))}}function x(N){l.push(N.x,N.y,N.z)}function y(N,C){const E=N*3;C.x=e[E+0],C.y=e[E+1],C.z=e[E+2]}function M(){const N=new W,C=new W,E=new W,U=new W,z=new Ze,B=new Ze,k=new Ze;for(let R=0,I=0;R<l.length;R+=9,I+=6){N.set(l[R+0],l[R+1],l[R+2]),C.set(l[R+3],l[R+4],l[R+5]),E.set(l[R+6],l[R+7],l[R+8]),z.set(c[I+0],c[I+1]),B.set(c[I+2],c[I+3]),k.set(c[I+4],c[I+5]),U.copy(N).add(C).add(E).divideScalar(3);const H=S(U);w(z,I+0,N,H),w(B,I+2,C,H),w(k,I+4,E,H)}}function w(N,C,E,U){U<0&&N.x===1&&(c[C]=N.x-1),E.x===0&&E.z===0&&(c[C]=U/2/Math.PI+.5)}function S(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.vertices,e.indices,e.radius,e.details)}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let d=0,f=l-1,p;for(;d<=f;)if(o=Math.floor(d+(f-d)/2),p=r[o]-c,p<0)d=o+1;else if(p>0)f=o-1;else{f=o;break}if(o=f,r[o]===c)return o/(l-1);const v=r[o],x=r[o+1]-v,y=(c-v)/x;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),d=this.getPoint(l),f=t||(c.isVector2?new Ze:new W);return f.copy(d).sub(c).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new W,o=[],l=[],c=[],d=new W,f=new jt;for(let y=0;y<=e;y++){const M=y/e;o[y]=this.getTangentAt(M,new W)}l[0]=new W,c[0]=new W;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),m=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),m<=p&&(p=m,r.set(0,1,0)),x<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),c[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(Mt(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(f.makeRotationAxis(d,M))}c[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(Mt(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(o[M],y*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nh extends Ri{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,d=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=d,this.aRotation=f}getPoint(e,t=new Ze){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),m=Math.sin(this.aRotation),x=f-this.aX,y=p-this.aY;f=x*v-y*m+this.aX,p=x*m+y*v+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Dy extends nh{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let s=0,e=0,t=0,r=0;function o(l,c,d,f){s=l,e=d,t=-3*l+3*c-2*d-f,r=2*l-2*c+d+f}return{initCatmullRom:function(l,c,d,f,p){o(c,d,p*(d-l),p*(f-c))},initNonuniformCatmullRom:function(l,c,d,f,p,v,m){let x=(c-l)/p-(d-l)/(p+v)+(d-c)/v,y=(d-c)/v-(f-c)/(v+m)+(f-d)/m;x*=v,y*=v,o(c,d,x,y)},calc:function(l){const c=l*l,d=c*l;return s+e*l+t*c+r*d}}}const ql=new W,Ld=new ih,Dd=new ih,Ud=new ih;class Uy extends Ri{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new W){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let d=Math.floor(c),f=c-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:f===0&&d===l-1&&(d=l-2,f=1);let p,v;this.closed||d>0?p=o[(d-1)%l]:(ql.subVectors(o[0],o[1]).add(o[0]),p=ql);const m=o[d%l],x=o[(d+1)%l];if(this.closed||d+2<l?v=o[(d+2)%l]:(ql.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=ql),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(m),y),w=Math.pow(m.distanceToSquared(x),y),S=Math.pow(x.distanceToSquared(v),y);w<1e-4&&(w=1),M<1e-4&&(M=w),S<1e-4&&(S=w),Ld.initNonuniformCatmullRom(p.x,m.x,x.x,v.x,M,w,S),Dd.initNonuniformCatmullRom(p.y,m.y,x.y,v.y,M,w,S),Ud.initNonuniformCatmullRom(p.z,m.z,x.z,v.z,M,w,S)}else this.curveType==="catmullrom"&&(Ld.initCatmullRom(p.x,m.x,x.x,v.x,this.tension),Dd.initCatmullRom(p.y,m.y,x.y,v.y,this.tension),Ud.initCatmullRom(p.z,m.z,x.z,v.z,this.tension));return r.set(Ld.calc(f),Dd.calc(f),Ud.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new W().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xg(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,d=s*s,f=s*d;return(2*t-2*r+l+c)*f+(-3*t+3*r-2*l-c)*d+l*s+t}function ky(s,e){const t=1-s;return t*t*e}function Fy(s,e){return 2*(1-s)*s*e}function Oy(s,e){return s*s*e}function oa(s,e,t,r){return ky(s,e)+Fy(s,t)+Oy(s,r)}function zy(s,e){const t=1-s;return t*t*t*e}function By(s,e){const t=1-s;return 3*t*t*s*e}function Hy(s,e){return 3*(1-s)*s*s*e}function Gy(s,e){return s*s*s*e}function aa(s,e,t,r,o){return zy(s,e)+By(s,t)+Hy(s,r)+Gy(s,o)}class W0 extends Ri{constructor(e=new Ze,t=new Ze,r=new Ze,o=new Ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ze){const r=t,o=this.v0,l=this.v1,c=this.v2,d=this.v3;return r.set(aa(e,o.x,l.x,c.x,d.x),aa(e,o.y,l.y,c.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vy extends Ri{constructor(e=new W,t=new W,r=new W,o=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new W){const r=t,o=this.v0,l=this.v1,c=this.v2,d=this.v3;return r.set(aa(e,o.x,l.x,c.x,d.x),aa(e,o.y,l.y,c.y,d.y),aa(e,o.z,l.z,c.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class j0 extends Ri{constructor(e=new Ze,t=new Ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ze){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wy extends Ri{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X0 extends Ri{constructor(e=new Ze,t=new Ze,r=new Ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ze){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(oa(e,o.x,l.x,c.x),oa(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jy extends Ri{constructor(e=new W,t=new W,r=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new W){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(oa(e,o.x,l.x,c.x),oa(e,o.y,l.y,c.y),oa(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ze){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),d=l-c,f=o[c===0?c:c-1],p=o[c],v=o[c>o.length-2?o.length-1:c+1],m=o[c>o.length-3?o.length-1:c+2];return r.set(xg(d,f.x,p.x,v.x,m.x),xg(d,f.y,p.y,v.y,m.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ze().fromArray(o))}return this}}var _g=Object.freeze({__proto__:null,ArcCurve:Dy,CatmullRomCurve3:Uy,CubicBezierCurve:W0,CubicBezierCurve3:Vy,EllipseCurve:nh,LineCurve:j0,LineCurve3:Wy,QuadraticBezierCurve:X0,QuadraticBezierCurve3:jy,SplineCurve:Y0});class Xy extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _g[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,d=this.curves[l],f=d.getLength(),p=f===0?0:1-c/f;return d.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],d=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,f=c.getPoints(d);for(let p=0;p<f.length;p++){const v=f[p];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new _g[o.type]().fromJSON(o))}return this}}class yg extends Xy{constructor(e){super(),this.type="Path",this.currentPoint=new Ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new j0(this.currentPoint.clone(),new Ze(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new X0(this.currentPoint.clone(),new Ze(e,t),new Ze(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const d=new W0(this.currentPoint.clone(),new Ze(e,t),new Ze(r,o),new Ze(l,c));return this.curves.push(d),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Y0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const d=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+d,t+f,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,d,f){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+p,t+v,r,o,l,c,d,f),this}absellipse(e,t,r,o,l,c,d,f){const p=new nh(e,t,r,o,l,c,d,f);if(this.curves.length>0){const m=p.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class kf extends yg{constructor(e){super(e),this.uuid=uo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new yg().fromJSON(o))}return this}}function Yy(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=Z0(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let d,f,p;if(r&&(l=Ky(s,e,l,t)),s.length>80*t){d=1/0,f=1/0;let v=-1/0,m=-1/0;for(let x=t;x<o;x+=t){const y=s[x],M=s[x+1];y<d&&(d=y),M<f&&(f=M),y>v&&(v=y),M>m&&(m=M)}p=Math.max(v-d,m-f),p=p!==0?32767/p:0}return ha(l,c,t,d,f,p,0),c}function Z0(s,e,t,r,o){let l;if(o===cS(s,e,t,r)>0)for(let c=e;c<t;c+=r)l=Sg(c/r|0,s[c],s[c+1],l);else for(let c=t-r;c>=e;c-=r)l=Sg(c/r|0,s[c],s[c+1],l);return l&&lo(l,l.next)&&(ma(l),l=l.next),l}function us(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(lo(t,t.next)||$t(t.prev,t,t.next)===0)){if(ma(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ha(s,e,t,r,o,l,c){if(!s)return;!c&&l&&iS(s,r,o,l);let d=s;for(;s.prev!==s.next;){const f=s.prev,p=s.next;if(l?$y(s,r,o,l):Zy(s)){e.push(f.i,s.i,p.i),ma(s),s=p.next,d=p.next;continue}if(s=p,s===d){c?c===1?(s=qy(us(s),e),ha(s,e,t,r,o,l,2)):c===2&&Jy(s,e,t,r,o,l):ha(us(s),e,t,r,o,l,1);break}}}function Zy(s){const e=s.prev,t=s,r=s.next;if($t(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,d=e.y,f=t.y,p=r.y,v=Math.min(o,l,c),m=Math.min(d,f,p),x=Math.max(o,l,c),y=Math.max(d,f,p);let M=r.next;for(;M!==e;){if(M.x>=v&&M.x<=x&&M.y>=m&&M.y<=y&&ia(o,d,l,f,c,p,M.x,M.y)&&$t(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function $y(s,e,t,r){const o=s.prev,l=s,c=s.next;if($t(o,l,c)>=0)return!1;const d=o.x,f=l.x,p=c.x,v=o.y,m=l.y,x=c.y,y=Math.min(d,f,p),M=Math.min(v,m,x),w=Math.max(d,f,p),S=Math.max(v,m,x),_=Ff(y,M,e,t,r),N=Ff(w,S,e,t,r);let C=s.prevZ,E=s.nextZ;for(;C&&C.z>=_&&E&&E.z<=N;){if(C.x>=y&&C.x<=w&&C.y>=M&&C.y<=S&&C!==o&&C!==c&&ia(d,v,f,m,p,x,C.x,C.y)&&$t(C.prev,C,C.next)>=0||(C=C.prevZ,E.x>=y&&E.x<=w&&E.y>=M&&E.y<=S&&E!==o&&E!==c&&ia(d,v,f,m,p,x,E.x,E.y)&&$t(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;C&&C.z>=_;){if(C.x>=y&&C.x<=w&&C.y>=M&&C.y<=S&&C!==o&&C!==c&&ia(d,v,f,m,p,x,C.x,C.y)&&$t(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;E&&E.z<=N;){if(E.x>=y&&E.x<=w&&E.y>=M&&E.y<=S&&E!==o&&E!==c&&ia(d,v,f,m,p,x,E.x,E.y)&&$t(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function qy(s,e){let t=s;do{const r=t.prev,o=t.next.next;!lo(r,o)&&q0(r,t,t.next,o)&&pa(r,o)&&pa(o,r)&&(e.push(r.i,t.i,o.i),ma(t),ma(t.next),t=s=o),t=t.next}while(t!==s);return us(t)}function Jy(s,e,t,r,o,l){let c=s;do{let d=c.next.next;for(;d!==c.prev;){if(c.i!==d.i&&oS(c,d)){let f=J0(c,d);c=us(c,c.next),f=us(f,f.next),ha(c,e,t,r,o,l,0),ha(f,e,t,r,o,l,0);return}d=d.next}c=c.next}while(c!==s)}function Ky(s,e,t,r){const o=[];for(let l=0,c=e.length;l<c;l++){const d=e[l]*r,f=l<c-1?e[l+1]*r:s.length,p=Z0(s,d,f,r,!1);p===p.next&&(p.steiner=!0),o.push(sS(p))}o.sort(Qy);for(let l=0;l<o.length;l++)t=eS(o[l],t);return t}function Qy(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function eS(s,e){const t=tS(s,e);if(!t)return e;const r=J0(t,s);return us(r,r.next),us(t,t.next)}function tS(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,c;if(lo(s,t))return t;do{if(lo(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const m=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=r&&m>l&&(l=m,c=t.x<t.next.x?t:t.next,m===r))return c}t=t.next}while(t!==e);if(!c)return null;const d=c,f=c.x,p=c.y;let v=1/0;t=c;do{if(r>=t.x&&t.x>=f&&r!==t.x&&$0(o<p?r:l,o,f,p,o<p?l:r,o,t.x,t.y)){const m=Math.abs(o-t.y)/(r-t.x);pa(t,s)&&(m<v||m===v&&(t.x>c.x||t.x===c.x&&nS(c,t)))&&(c=t,v=m)}t=t.next}while(t!==d);return c}function nS(s,e){return $t(s.prev,s,e.prev)<0&&$t(e.next,s,s.next)<0}function iS(s,e,t,r){let o=s;do o.z===0&&(o.z=Ff(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,rS(o)}function rS(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let c=r,d=0;for(let p=0;p<t&&(d++,c=c.nextZ,!!c);p++);let f=t;for(;d>0||f>0&&c;)d!==0&&(f===0||!c||r.z<=c.z)?(o=r,r=r.nextZ,d--):(o=c,c=c.nextZ,f--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=c}l.nextZ=null,t*=2}while(e>1);return s}function Ff(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function sS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function $0(s,e,t,r,o,l,c,d){return(o-c)*(e-d)>=(s-c)*(l-d)&&(s-c)*(r-d)>=(t-c)*(e-d)&&(t-c)*(l-d)>=(o-c)*(r-d)}function ia(s,e,t,r,o,l,c,d){return!(s===c&&e===d)&&$0(s,e,t,r,o,l,c,d)}function oS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!aS(s,e)&&(pa(s,e)&&pa(e,s)&&lS(s,e)&&($t(s.prev,s,e.prev)||$t(s,e.prev,e))||lo(s,e)&&$t(s.prev,s,s.next)>0&&$t(e.prev,e,e.next)>0)}function $t(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function lo(s,e){return s.x===e.x&&s.y===e.y}function q0(s,e,t,r){const o=Kl($t(s,e,t)),l=Kl($t(s,e,r)),c=Kl($t(t,r,s)),d=Kl($t(t,r,e));return!!(o!==l&&c!==d||o===0&&Jl(s,t,e)||l===0&&Jl(s,r,e)||c===0&&Jl(t,s,r)||d===0&&Jl(t,e,r))}function Jl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Kl(s){return s>0?1:s<0?-1:0}function aS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&q0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function pa(s,e){return $t(s.prev,s,s.next)<0?$t(s,e,s.next)>=0&&$t(s,s.prev,e)>=0:$t(s,e,s.prev)<0||$t(s,s.next,e)<0}function lS(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function J0(s,e){const t=Of(s.i,s.x,s.y),r=Of(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Sg(s,e,t,r){const o=Of(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ma(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Of(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cS(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class uS{static triangulate(e,t,r=2){return Yy(e,t,r)}}class la{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return la.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];Mg(e),wg(r,e);let c=e.length;t.forEach(Mg);for(let f=0;f<t.length;f++)o.push(c),c+=t[f].length,wg(r,t[f]);const d=uS.triangulate(r,o);for(let f=0;f<d.length;f+=3)l.push(d.slice(f,f+3));return l}}function Mg(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function wg(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class rh extends yc{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rh(e.radius,e.detail)}}class Sc extends Pn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(r),f=Math.floor(o),p=d+1,v=f+1,m=e/d,x=t/f,y=[],M=[],w=[],S=[];for(let _=0;_<v;_++){const N=_*x-c;for(let C=0;C<p;C++){const E=C*m-l;M.push(E,-N,0),w.push(0,0,1),S.push(C/d),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let N=0;N<d;N++){const C=N+p*_,E=N+p*(_+1),U=N+1+p*(_+1),z=N+1+p*_;y.push(C,E,z),y.push(E,U,z)}this.setIndex(y),this.setAttribute("position",new tn(M,3)),this.setAttribute("normal",new tn(w,3)),this.setAttribute("uv",new tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class gc extends Pn{constructor(e=new kf([new Ze(0,.5),new Ze(-.5,-.5),new Ze(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],c=[];let d=0,f=0;if(Array.isArray(e)===!1)p(e);else for(let v=0;v<e.length;v++)p(e[v]),this.addGroup(d,f,v),d+=f,f=0;this.setIndex(r),this.setAttribute("position",new tn(o,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(c,2));function p(v){const m=o.length/3,x=v.extractPoints(t);let y=x.shape;const M=x.holes;la.isClockWise(y)===!1&&(y=y.reverse());for(let S=0,_=M.length;S<_;S++){const N=M[S];la.isClockWise(N)===!0&&(M[S]=N.reverse())}const w=la.triangulateShape(y,M);for(let S=0,_=M.length;S<_;S++){const N=M[S];y=y.concat(N)}for(let S=0,_=y.length;S<_;S++){const N=y[S];o.push(N.x,N.y,0),l.push(0,0,1),c.push(N.x,N.y)}for(let S=0,_=w.length;S<_;S++){const N=w[S],C=N[0]+m,E=N[1]+m,U=N[2]+m;r.push(C,E,U),f+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return dS(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];r.push(c)}return new gc(r,e.curveSegments)}}function dS(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class vc extends Pn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+d,Math.PI);let p=0;const v=[],m=new W,x=new W,y=[],M=[],w=[],S=[];for(let _=0;_<=r;_++){const N=[],C=_/r;let E=0;_===0&&c===0?E=.5/t:_===r&&f===Math.PI&&(E=-.5/t);for(let U=0;U<=t;U++){const z=U/t;m.x=-e*Math.cos(o+z*l)*Math.sin(c+C*d),m.y=e*Math.cos(c+C*d),m.z=e*Math.sin(o+z*l)*Math.sin(c+C*d),M.push(m.x,m.y,m.z),x.copy(m).normalize(),w.push(x.x,x.y,x.z),S.push(z+E,1-C),N.push(p++)}v.push(N)}for(let _=0;_<r;_++)for(let N=0;N<t;N++){const C=v[_][N+1],E=v[_][N],U=v[_+1][N],z=v[_+1][N+1];(_!==0||c>0)&&y.push(C,E,z),(_!==r-1||f<Math.PI)&&y.push(E,U,z)}this.setIndex(y),this.setAttribute("position",new tn(M,3)),this.setAttribute("normal",new tn(w,3)),this.setAttribute("uv",new tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sh extends yc{constructor(e=1,t=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],o=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,o,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sh(e.radius,e.detail)}}class oh extends Pn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const c=[],d=[],f=[],p=[],v=new W,m=new W,x=new W;for(let y=0;y<=r;y++)for(let M=0;M<=o;M++){const w=M/o*l,S=y/r*Math.PI*2;m.x=(e+t*Math.cos(S))*Math.cos(w),m.y=(e+t*Math.cos(S))*Math.sin(w),m.z=t*Math.sin(S),d.push(m.x,m.y,m.z),v.x=e*Math.cos(w),v.y=e*Math.sin(w),x.subVectors(m,v).normalize(),f.push(x.x,x.y,x.z),p.push(M/o),p.push(y/r)}for(let y=1;y<=r;y++)for(let M=1;M<=o;M++){const w=(o+1)*y+M-1,S=(o+1)*(y-1)+M-1,_=(o+1)*(y-1)+M,N=(o+1)*y+M;c.push(w,S,N),c.push(S,_,N)}this.setIndex(c),this.setAttribute("position",new tn(d,3)),this.setAttribute("normal",new tn(f,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fS extends ds{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new gt(16777215),this.specular=new gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I0,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hS extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pS extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ah extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const kd=new jt,Eg=new W,Tg=new W;class K0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eg),Tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tg),t.updateMatrixWorld(),kd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bg=new jt,ta=new W,Fd=new W;class mS extends K0{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ta.setFromMatrixPosition(e.matrixWorld),r.position.copy(ta),Fd.copy(r.position),Fd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Fd),r.updateMatrixWorld(),o.makeTranslation(-ta.x,-ta.y,-ta.z),bg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bg,r.coordinateSystem,r.reversedDepth)}}class gS extends ah{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new mS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Q0 extends z0{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=v*this.view.offsetY,f=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vS extends K0{constructor(){super(new Q0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xS extends ah{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new vS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _S extends ah{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yS extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ag(s,e,t,r){const o=SS(r);switch(t){case T0:return s*e;case A0:return s*e/o.components*o.byteLength;case qf:return s*e/o.components*o.byteLength;case C0:return s*e*2/o.components*o.byteLength;case Jf:return s*e*2/o.components*o.byteLength;case b0:return s*e*3/o.components*o.byteLength;case xi:return s*e*4/o.components*o.byteLength;case Kf:return s*e*4/o.components*o.byteLength;case sc:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ac:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:case df:return Math.max(s,16)*Math.max(e,8)/4;case lf:case uf:return Math.max(s,8)*Math.max(e,8)/2;case ff:case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Af:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cc:case Rf:case If:return Math.ceil(s/4)*Math.ceil(e/4)*16;case R0:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nf:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SS(s){switch(s){case Ai:case M0:return{byteLength:1,components:1};case ca:case w0:case va:return{byteLength:2,components:1};case Zf:case $f:return{byteLength:2,components:4};case ls:case Yf:case Ki:return{byteLength:4,components:1};case E0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ev(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function MS(s){const e=new WeakMap;function t(d,f){const p=d.array,v=d.usage,m=p.byteLength,x=s.createBuffer();s.bindBuffer(f,x),s.bufferData(f,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,f,p){const v=f.array,m=f.updateRanges;if(s.bindBuffer(p,d),m.length===0)s.bufferSubData(p,0,v);else{m.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<m.length;y++){const M=m[x],w=m[y];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++x,m[x]=w)}m.length=x+1;for(let y=0,M=m.length;y<M;y++){const w=m[y];s.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:c}}var wS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ES=`#ifdef USE_ALPHAHASH
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
#endif`,TS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RS=`#ifdef USE_AOMAP
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
#endif`,IS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PS=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,US=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kS=`#ifdef USE_IRIDESCENCE
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
#endif`,FS=`#ifdef USE_BUMPMAP
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
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,XS=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,YS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZS=`vec3 transformedNormal = objectNormal;
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
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QS="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uM=`#ifdef USE_GRADIENTMAP
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
}`,dM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pM=`uniform bool receiveShadow;
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
#endif`,mM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,gM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,SM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NM=`#if defined( USE_POINTS_UV )
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
#endif`,LM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`#ifdef USE_MORPHTARGETS
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jM=`#ifdef USE_NORMALMAP
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
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ew=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ow=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,aw=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,lw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cw=`#ifdef USE_SKINNING
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
#endif`,uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vw=`#ifdef USE_TRANSMISSION
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
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ww=`uniform sampler2D t2D;
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
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`#include <common>
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
}`,Rw=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,Iw=`#define DISTANCE
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
}`,Pw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
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
}`,Uw=`uniform vec3 diffuse;
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
}`,kw=`#include <common>
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
}`,Fw=`uniform vec3 diffuse;
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
}`,Ow=`#define LAMBERT
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
}`,zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Bw=`#define MATCAP
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
}`,Hw=`#define MATCAP
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
}`,Gw=`#define NORMAL
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
}`,Vw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ww=`#define PHONG
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
}`,jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Xw=`#define STANDARD
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
}`,Yw=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Zw=`#define TOON
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
}`,$w=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qw=`uniform float size;
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
}`,Jw=`uniform vec3 diffuse;
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
}`,Kw=`#include <common>
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
}`,Qw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,eE=`uniform float rotation;
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
}`,tE=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:wS,alphahash_pars_fragment:ES,alphamap_fragment:TS,alphamap_pars_fragment:bS,alphatest_fragment:AS,alphatest_pars_fragment:CS,aomap_fragment:RS,aomap_pars_fragment:IS,batching_pars_vertex:PS,batching_vertex:NS,begin_vertex:LS,beginnormal_vertex:DS,bsdfs:US,iridescence_fragment:kS,bumpmap_pars_fragment:FS,clipping_planes_fragment:OS,clipping_planes_pars_fragment:zS,clipping_planes_pars_vertex:BS,clipping_planes_vertex:HS,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:WS,color_vertex:jS,common:XS,cube_uv_reflection_fragment:YS,defaultnormal_vertex:ZS,displacementmap_pars_vertex:$S,displacementmap_vertex:qS,emissivemap_fragment:JS,emissivemap_pars_fragment:KS,colorspace_fragment:QS,colorspace_pars_fragment:eM,envmap_fragment:tM,envmap_common_pars_fragment:nM,envmap_pars_fragment:iM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:mM,envmap_vertex:sM,fog_vertex:oM,fog_pars_vertex:aM,fog_fragment:lM,fog_pars_fragment:cM,gradientmap_pars_fragment:uM,lightmap_pars_fragment:dM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:hM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:vM,lights_phong_fragment:xM,lights_phong_pars_fragment:_M,lights_physical_fragment:yM,lights_physical_pars_fragment:SM,lights_fragment_begin:MM,lights_fragment_maps:wM,lights_fragment_end:EM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:CM,map_fragment:RM,map_pars_fragment:IM,map_particle_fragment:PM,map_particle_pars_fragment:NM,metalnessmap_fragment:LM,metalnessmap_pars_fragment:DM,morphinstance_vertex:UM,morphcolor_vertex:kM,morphnormal_vertex:FM,morphtarget_pars_vertex:OM,morphtarget_vertex:zM,normal_fragment_begin:BM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:WM,normalmap_pars_fragment:jM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:$M,opaque_fragment:qM,packing:JM,premultiplied_alpha_fragment:KM,project_vertex:QM,dithering_fragment:ew,dithering_pars_fragment:tw,roughnessmap_fragment:nw,roughnessmap_pars_fragment:iw,shadowmap_pars_fragment:rw,shadowmap_pars_vertex:sw,shadowmap_vertex:ow,shadowmask_pars_fragment:aw,skinbase_vertex:lw,skinning_pars_vertex:cw,skinning_vertex:uw,skinnormal_vertex:dw,specularmap_fragment:fw,specularmap_pars_fragment:hw,tonemapping_fragment:pw,tonemapping_pars_fragment:mw,transmission_fragment:gw,transmission_pars_fragment:vw,uv_pars_fragment:xw,uv_pars_vertex:_w,uv_vertex:yw,worldpos_vertex:Sw,background_vert:Mw,background_frag:ww,backgroundCube_vert:Ew,backgroundCube_frag:Tw,cube_vert:bw,cube_frag:Aw,depth_vert:Cw,depth_frag:Rw,distanceRGBA_vert:Iw,distanceRGBA_frag:Pw,equirect_vert:Nw,equirect_frag:Lw,linedashed_vert:Dw,linedashed_frag:Uw,meshbasic_vert:kw,meshbasic_frag:Fw,meshlambert_vert:Ow,meshlambert_frag:zw,meshmatcap_vert:Bw,meshmatcap_frag:Hw,meshnormal_vert:Gw,meshnormal_frag:Vw,meshphong_vert:Ww,meshphong_frag:jw,meshphysical_vert:Xw,meshphysical_frag:Yw,meshtoon_vert:Zw,meshtoon_frag:$w,points_vert:qw,points_frag:Jw,shadow_vert:Kw,shadow_frag:Qw,sprite_vert:eE,sprite_frag:tE},Le={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ei={basic:{uniforms:In([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:In([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new gt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:In([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:In([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:In([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new gt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:In([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:In([Le.points,Le.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:In([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:In([Le.common,Le.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:In([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:In([Le.sprite,Le.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:In([Le.common,Le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:In([Le.lights,Le.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ei.physical={uniforms:In([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Ql={r:0,b:0,g:0},Qr=new Ci,nE=new jt;function iE(s,e,t,r,o,l,c){const d=new gt(0);let f=l===!0?0:1,p,v,m=null,x=0,y=null;function M(C){let E=C.isScene===!0?C.background:null;return E&&E.isTexture&&(E=(C.backgroundBlurriness>0?t:e).get(E)),E}function w(C){let E=!1;const U=M(C);U===null?_(d,f):U&&U.isColor&&(_(U,1),E=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||E)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(C,E){const U=M(E);U&&(U.isCubeTexture||U.mapping===_c)?(v===void 0&&(v=new $n(new fo(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:ao(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Qr.copy(E.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(nE.makeRotationFromEuler(Qr)),v.material.toneMapped=Ct.getTransfer(U.colorSpace)!==Ut,(m!==U||x!==U.version||y!==s.toneMapping)&&(v.material.needsUpdate=!0,m=U,x=U.version,y=s.toneMapping),v.layers.enableAll(),C.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new $n(new Sc(2,2),new Lr({name:"BackgroundMaterial",uniforms:ao(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(U.colorSpace)!==Ut,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(m!==U||x!==U.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,m=U,x=U.version,y=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function _(C,E){C.getRGB(Ql,O0(s)),r.buffers.color.setClear(Ql.r,Ql.g,Ql.b,E,c)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,E=1){d.set(C),f=E,_(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,_(d,f)},render:w,addToRenderList:S,dispose:N}}function rE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,c=!1;function d(I,H,te,Q,le){let ne=!1;const ee=m(Q,te,H);l!==ee&&(l=ee,p(l.object)),ne=y(I,Q,te,le),ne&&M(I,Q,te,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,E(I,H,te,Q),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function f(){return s.createVertexArray()}function p(I){return s.bindVertexArray(I)}function v(I){return s.deleteVertexArray(I)}function m(I,H,te){const Q=te.wireframe===!0;let le=r[I.id];le===void 0&&(le={},r[I.id]=le);let ne=le[H.id];ne===void 0&&(ne={},le[H.id]=ne);let ee=ne[Q];return ee===void 0&&(ee=x(f()),ne[Q]=ee),ee}function x(I){const H=[],te=[],Q=[];for(let le=0;le<t;le++)H[le]=0,te[le]=0,Q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:te,attributeDivisors:Q,object:I,attributes:{},index:null}}function y(I,H,te,Q){const le=l.attributes,ne=H.attributes;let ee=0;const oe=te.getAttributes();for(const F in oe)if(oe[F].location>=0){const L=le[F];let q=ne[F];if(q===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),L===void 0||L.attribute!==q||q&&L.data!==q.data)return!0;ee++}return l.attributesNum!==ee||l.index!==Q}function M(I,H,te,Q){const le={},ne=H.attributes;let ee=0;const oe=te.getAttributes();for(const F in oe)if(oe[F].location>=0){let L=ne[F];L===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(L=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(L=I.instanceColor));const q={};q.attribute=L,L&&L.data&&(q.data=L.data),le[F]=q,ee++}l.attributes=le,l.attributesNum=ee,l.index=Q}function w(){const I=l.newAttributes;for(let H=0,te=I.length;H<te;H++)I[H]=0}function S(I){_(I,0)}function _(I,H){const te=l.newAttributes,Q=l.enabledAttributes,le=l.attributeDivisors;te[I]=1,Q[I]===0&&(s.enableVertexAttribArray(I),Q[I]=1),le[I]!==H&&(s.vertexAttribDivisor(I,H),le[I]=H)}function N(){const I=l.newAttributes,H=l.enabledAttributes;for(let te=0,Q=H.length;te<Q;te++)H[te]!==I[te]&&(s.disableVertexAttribArray(te),H[te]=0)}function C(I,H,te,Q,le,ne,ee){ee===!0?s.vertexAttribIPointer(I,H,te,le,ne):s.vertexAttribPointer(I,H,te,Q,le,ne)}function E(I,H,te,Q){w();const le=Q.attributes,ne=te.getAttributes(),ee=H.defaultAttributeValues;for(const oe in ne){const F=ne[oe];if(F.location>=0){let ce=le[oe];if(ce===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),ce!==void 0){const L=ce.normalized,q=ce.itemSize,_e=e.get(ce);if(_e===void 0)continue;const Ne=_e.buffer,Re=_e.type,ie=_e.bytesPerElement,pe=Re===s.INT||Re===s.UNSIGNED_INT||ce.gpuType===Yf;if(ce.isInterleavedBufferAttribute){const ue=ce.data,Ce=ue.stride,Oe=ce.offset;if(ue.isInstancedInterleavedBuffer){for(let ot=0;ot<F.locationSize;ot++)_(F.location+ot,ue.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ot=0;ot<F.locationSize;ot++)S(F.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ot=0;ot<F.locationSize;ot++)C(F.location+ot,q/F.locationSize,Re,L,Ce*ie,(Oe+q/F.locationSize*ot)*ie,pe)}else{if(ce.isInstancedBufferAttribute){for(let ue=0;ue<F.locationSize;ue++)_(F.location+ue,ce.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<F.locationSize;ue++)S(F.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ue=0;ue<F.locationSize;ue++)C(F.location+ue,q/F.locationSize,Re,L,q*ie,q/F.locationSize*ue*ie,pe)}}else if(ee!==void 0){const L=ee[oe];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(F.location,L);break;case 3:s.vertexAttrib3fv(F.location,L);break;case 4:s.vertexAttrib4fv(F.location,L);break;default:s.vertexAttrib1fv(F.location,L)}}}}N()}function U(){k();for(const I in r){const H=r[I];for(const te in H){const Q=H[te];for(const le in Q)v(Q[le].object),delete Q[le];delete H[te]}delete r[I]}}function z(I){if(r[I.id]===void 0)return;const H=r[I.id];for(const te in H){const Q=H[te];for(const le in Q)v(Q[le].object),delete Q[le];delete H[te]}delete r[I.id]}function B(I){for(const H in r){const te=r[H];if(te[I.id]===void 0)continue;const Q=te[I.id];for(const le in Q)v(Q[le].object),delete Q[le];delete te[I.id]}}function k(){R(),c=!0,l!==o&&(l=o,p(l.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:k,resetDefaultState:R,dispose:U,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:S,disableUnusedAttributes:N}}function sE(s,e,t){let r;function o(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function c(p,v,m){m!==0&&(s.drawArraysInstanced(r,p,v,m),t.update(v,r,m))}function d(p,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,m);let y=0;for(let M=0;M<m;M++)y+=v[M];t.update(y,r,1)}function f(p,v,m,x){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)c(p[M],v[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,m);let M=0;for(let w=0;w<m;w++)M+=v[w]*x[w];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function oE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(B){return!(B!==xi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const k=B===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ai&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ki&&!k)}function f(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=f(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const m=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:C,maxFragmentUniforms:E,vertexTextures:U,maxSamples:z}}function aE(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new ns,d=new mt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const y=m.length!==0||x||r!==0||o;return o=x,r=m.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,x){t=v(m,x,0)},this.setState=function(m,x,y){const M=m.clippingPlanes,w=m.clipIntersection,S=m.clipShadows,_=s.get(m);if(!o||M===null||M.length===0||l&&!S)l?v(null):p();else{const N=l?0:r,C=N*4;let E=_.clippingState||null;f.value=E,E=v(M,x,C,y);for(let U=0;U!==C;++U)E[U]=t[U];_.clippingState=E,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(m,x,y,M){const w=m!==null?m.length:0;let S=null;if(w!==0){if(S=f.value,M!==!0||S===null){const _=y+w*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let C=0,E=y;C!==w;++C,E+=4)c.copy(m[C]).applyMatrix4(N,d),c.normal.toArray(S,E),S[E+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function lE(s){let e=new WeakMap;function t(c,d){return d===rf?c.mapping=ro:d===sf&&(c.mapping=so),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===rf||d===sf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const p=new Ay(f.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const d=c.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Qs=4,Cg=[.125,.215,.35,.446,.526,.582],ss=20,Od=new Q0,Rg=new gt;let zd=null,Bd=0,Hd=0,Gd=!1;const is=(1+Math.sqrt(5))/2,qs=1/is,Ig=[new W(-is,qs,0),new W(is,qs,0),new W(-qs,0,is),new W(qs,0,is),new W(0,is,-qs),new W(0,is,qs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],cE=new W;class Pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:d=cE}=l;zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,o,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Bd,Hd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:va,format:xi,colorSpace:oo,depthBuffer:!1},o=Ng(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uE(l)),this._blurMaterial=dE(l,e,t)}return o}_compileMaterial(e){const t=new $n(this._lodPlanes[0],e);this._renderer.compile(t,Od)}_sceneToCubeUV(e,t,r,o,l){const f=new Zn(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,y=m.toneMapping;m.getClearColor(Rg),m.toneMapping=Pr,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(o),m.clearDepth(),m.setRenderTarget(null));const w=new sa({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),S=new $n(new fo,w);let _=!1;const N=e.background;N?N.isColor&&(w.color.copy(N),e.background=null,_=!0):(w.color.copy(Rg),_=!0);for(let C=0;C<6;C++){const E=C%3;E===0?(f.up.set(0,p[C],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+v[C],l.y,l.z)):E===1?(f.up.set(0,0,p[C]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+v[C],l.z)):(f.up.set(0,p[C],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+v[C]));const U=this._cubeSize;ec(o,E*U,C>2?U:0,U,U),m.setRenderTarget(o),_&&m.render(S,f),m.render(e,f)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=y,m.autoClear=x,e.background=N}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ro||e.mapping===so;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new $n(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;ec(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,Od)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Ig[(o-l-1)%Ig.length];this._blur(e,l-1,l,c,d)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,d){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new $n(this._lodPlanes[o],p),x=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ss-1),w=l/M,S=isFinite(l)?1+Math.floor(v*w):ss;S>ss&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ss}`);const _=[];let N=0;for(let B=0;B<ss;++B){const k=B/w,R=Math.exp(-k*k/2);_.push(R),B===0?N+=R:B<S&&(N+=2*R)}for(let B=0;B<_.length;B++)_[B]=_[B]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:C}=this;x.dTheta.value=M,x.mipInt.value=C-r;const E=this._sizeLods[o],U=3*E*(o>C-Qs?o-C+Qs:0),z=4*(this._cubeSize-E);ec(t,U,z,3*E,2*E),f.setRenderTarget(t),f.render(m,Od)}}function uE(s){const e=[],t=[],r=[];let o=s;const l=s-Qs+1+Cg.length;for(let c=0;c<l;c++){const d=Math.pow(2,o);t.push(d);let f=1/d;c>s-Qs?f=Cg[c-s+Qs-1]:c===0&&(f=0),r.push(f);const p=1/(d-2),v=-p,m=1+p,x=[v,v,m,v,m,m,v,v,m,m,v,m],y=6,M=6,w=3,S=2,_=1,N=new Float32Array(w*M*y),C=new Float32Array(S*M*y),E=new Float32Array(_*M*y);for(let z=0;z<y;z++){const B=z%3*2/3-1,k=z>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];N.set(R,w*M*z),C.set(x,S*M*z);const I=[z,z,z,z,z,z];E.set(I,_*M*z)}const U=new Pn;U.setAttribute("position",new qn(N,w)),U.setAttribute("uv",new qn(C,S)),U.setAttribute("faceIndex",new qn(E,_)),e.push(U),o>Qs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Ng(s,e,t){const r=new cs(s,e,t);return r.texture.mapping=_c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ec(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function dE(s,e,t){const r=new Float32Array(ss),o=new W(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Lg(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Dg(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function fE(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const f=d.mapping,p=f===rf||f===sf,v=f===ro||f===so;if(p||v){let m=e.get(d);const x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new Pg(s)),m=p?t.fromEquirectangular(d,m):t.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&o(y)?(t===null&&(t=new Pg(s)),m=p?t.fromEquirectangular(d):t.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",l),m.texture):null}}}return d}function o(d){let f=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function hE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&to("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function pE(s,e,t,r){const o={},l=new WeakMap;function c(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",c),delete o[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(m,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function f(m){const x=m.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function p(m){const x=[],y=m.index,M=m.attributes.position;let w=0;if(y!==null){const N=y.array;w=y.version;for(let C=0,E=N.length;C<E;C+=3){const U=N[C+0],z=N[C+1],B=N[C+2];x.push(U,z,z,B,B,U)}}else if(M!==void 0){const N=M.array;w=M.version;for(let C=0,E=N.length/3-1;C<E;C+=3){const U=C+0,z=C+1,B=C+2;x.push(U,z,z,B,B,U)}}else return;const S=new(N0(x)?F0:k0)(x,1);S.version=w;const _=l.get(m);_&&e.remove(_),l.set(m,S)}function v(m){const x=l.get(m);if(x){const y=m.index;y!==null&&x.version<y.version&&p(m)}else p(m);return l.get(m)}return{get:d,update:f,getWireframeAttribute:v}}function mE(s,e,t){let r;function o(x){r=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function f(x,y){s.drawElements(r,y,l,x*c),t.update(y,r,1)}function p(x,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,x*c,M),t.update(y,r,M))}function v(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,x,0,M);let S=0;for(let _=0;_<M;_++)S+=y[_];t.update(S,r,1)}function m(x,y,M,w){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/c,y[_],w[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,x,0,w,0,M);let _=0;for(let N=0;N<M;N++)_+=y[N]*w[N];t.update(_,r,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function gE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function vE(s,e,t){const r=new WeakMap,o=new kt;function l(c,d,f){const p=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==m){let I=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",I)};var y=I;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let E=0;M===!0&&(E=1),w===!0&&(E=2),S===!0&&(E=3);let U=d.attributes.position.count*E,z=1;U>e.maxTextureSize&&(z=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const B=new Float32Array(U*z*4*m),k=new L0(B,U,z,m);k.type=Ki,k.needsUpdate=!0;const R=E*4;for(let H=0;H<m;H++){const te=_[H],Q=N[H],le=C[H],ne=U*z*4*H;for(let ee=0;ee<te.count;ee++){const oe=ee*R;M===!0&&(o.fromBufferAttribute(te,ee),B[ne+oe+0]=o.x,B[ne+oe+1]=o.y,B[ne+oe+2]=o.z,B[ne+oe+3]=0),w===!0&&(o.fromBufferAttribute(Q,ee),B[ne+oe+4]=o.x,B[ne+oe+5]=o.y,B[ne+oe+6]=o.z,B[ne+oe+7]=0),S===!0&&(o.fromBufferAttribute(le,ee),B[ne+oe+8]=o.x,B[ne+oe+9]=o.y,B[ne+oe+10]=o.z,B[ne+oe+11]=le.itemSize===4?o.w:1)}}x={count:m,texture:k,size:new Ze(U,z)},r.set(d,x),d.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const w=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function xE(s,e,t,r){let o=new WeakMap;function l(f){const p=r.render.frame,v=f.geometry,m=e.get(f,v);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return m}function c(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const tv=new Bn,Ug=new V0(1,1),nv=new L0,iv=new uy,rv=new B0,kg=[],Fg=[],Og=new Float32Array(16),zg=new Float32Array(9),Bg=new Float32Array(4);function ho(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=kg[o];if(l===void 0&&(l=new Float32Array(o),kg[o]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(l,d)}return l}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Mc(s,e){let t=Fg[e];t===void 0&&(t=new Int32Array(e),Fg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function _E(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function ME(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function wE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;Bg.set(r),s.uniformMatrix2fv(this.addr,!1,Bg),ln(t,r)}}function EE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;zg.set(r),s.uniformMatrix3fv(this.addr,!1,zg),ln(t,r)}}function TE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;Og.set(r),s.uniformMatrix4fv(this.addr,!1,Og),ln(t,r)}}function bE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function AE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function CE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function RE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function IE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function PE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function NE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function LE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function DE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Ug.compareFunction=P0,l=Ug):l=tv,t.setTexture2D(e||l,o)}function UE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||iv,o)}function kE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||rv,o)}function FE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||nv,o)}function OE(s){switch(s){case 5126:return _E;case 35664:return yE;case 35665:return SE;case 35666:return ME;case 35674:return wE;case 35675:return EE;case 35676:return TE;case 5124:case 35670:return bE;case 35667:case 35671:return AE;case 35668:case 35672:return CE;case 35669:case 35673:return RE;case 5125:return IE;case 36294:return PE;case 36295:return NE;case 36296:return LE;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35679:case 36299:case 36307:return UE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return FE}}function zE(s,e){s.uniform1fv(this.addr,e)}function BE(s,e){const t=ho(e,this.size,2);s.uniform2fv(this.addr,t)}function HE(s,e){const t=ho(e,this.size,3);s.uniform3fv(this.addr,t)}function GE(s,e){const t=ho(e,this.size,4);s.uniform4fv(this.addr,t)}function VE(s,e){const t=ho(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function WE(s,e){const t=ho(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jE(s,e){const t=ho(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function XE(s,e){s.uniform1iv(this.addr,e)}function YE(s,e){s.uniform2iv(this.addr,e)}function ZE(s,e){s.uniform3iv(this.addr,e)}function $E(s,e){s.uniform4iv(this.addr,e)}function qE(s,e){s.uniform1uiv(this.addr,e)}function JE(s,e){s.uniform2uiv(this.addr,e)}function KE(s,e){s.uniform3uiv(this.addr,e)}function QE(s,e){s.uniform4uiv(this.addr,e)}function e1(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||tv,l[c])}function t1(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||iv,l[c])}function n1(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||rv,l[c])}function i1(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||nv,l[c])}function r1(s){switch(s){case 5126:return zE;case 35664:return BE;case 35665:return HE;case 35666:return GE;case 35674:return VE;case 35675:return WE;case 35676:return jE;case 5124:case 35670:return XE;case 35667:case 35671:return YE;case 35668:case 35672:return ZE;case 35669:case 35673:return $E;case 5125:return qE;case 36294:return JE;case 36295:return KE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}class s1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=OE(t.type)}}class o1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r1(t.type)}}class a1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function Hg(s,e){s.seq.push(e),s.map[e.id]=e}function l1(s,e,t){const r=s.name,o=r.length;for(Vd.lastIndex=0;;){const l=Vd.exec(r),c=Vd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&c+2===o){Hg(t,p===void 0?new s1(d,s,e):new o1(d,s,e));break}else{let m=t.map[d];m===void 0&&(m=new a1(d),Hg(t,m)),t=m}}}class uc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);l1(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Gg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const c1=37297;let u1=0;function d1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const Vg=new mt;function f1(s){Ct._getMatrix(Vg,Ct.workingColorSpace,s);const e=`mat3( ${Vg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case dc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Wg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+d1(s.getShaderSource(e),d)}else return l}function h1(s,e){const t=f1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function p1(s,e){let t;switch(e){case O_:t="Linear";break;case z_:t="Reinhard";break;case B_:t="Cineon";break;case H_:t="ACESFilmic";break;case V_:t="AgX";break;case W_:t="Neutral";break;case G_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tc=new W;function m1(){Ct.getLuminanceCoefficients(tc);const s=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function v1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function x1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function ra(s){return s!==""}function jg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(s){return s.replace(_1,S1)}const y1=new Map;function S1(s,e){let t=vt[e];if(t===void 0){const r=y1.get(e);if(r!==void 0)t=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zf(t)}const M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(s){return s.replace(M1,w1)}function w1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Zg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function E1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===y0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function T1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function A1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xf:e="ENVMAP_BLENDING_MULTIPLY";break;case k_:e="ENVMAP_BLENDING_MIX";break;case F_:e="ENVMAP_BLENDING_ADD";break}return e}function C1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function R1(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=E1(t),p=T1(t),v=b1(t),m=A1(t),x=C1(t),y=g1(t),M=v1(l),w=o.createProgram();let S,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ra).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ra).join(`
`),_.length>0&&(_+=`
`)):(S=[Zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),_=[Zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?vt.tonemapping_pars_fragment:"",t.toneMapping!==Pr?p1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,h1("linearToOutputTexel",t.outputColorSpace),m1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),c=zf(c),c=jg(c,t),c=Xg(c,t),d=zf(d),d=jg(d,t),d=Xg(d,t),c=Yg(c),d=Yg(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=N+S+c,E=N+_+d,U=Gg(o,o.VERTEX_SHADER,C),z=Gg(o,o.FRAGMENT_SHADER,E);o.attachShader(w,U),o.attachShader(w,z),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function B(H){if(s.debug.checkShaderErrors){const te=o.getProgramInfoLog(w)||"",Q=o.getShaderInfoLog(U)||"",le=o.getShaderInfoLog(z)||"",ne=te.trim(),ee=Q.trim(),oe=le.trim();let F=!0,ce=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,U,z);else{const L=Wg(o,U,"vertex"),q=Wg(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ne+`
`+L+`
`+q)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(ee===""||oe==="")&&(ce=!1);ce&&(H.diagnostics={runnable:F,programLog:ne,vertexShader:{log:ee,prefix:S},fragmentShader:{log:oe,prefix:_}})}o.deleteShader(U),o.deleteShader(z),k=new uc(o,w),R=x1(o,w)}let k;this.getUniforms=function(){return k===void 0&&B(this),k};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=o.getProgramParameter(w,c1)),I},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=z,this}let I1=0;class P1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new N1(e),t.set(e,r)),r}}class N1{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}}function L1(s,e,t,r,o,l,c){const d=new D0,f=new P1,p=new Set,v=[],m=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return p.add(R),R===0?"uv":`uv${R}`}function S(R,I,H,te,Q){const le=te.fog,ne=Q.geometry,ee=R.isMeshStandardMaterial?te.environment:null,oe=(R.isMeshStandardMaterial?t:e).get(R.envMap||ee),F=oe&&oe.mapping===_c?oe.image.height:null,ce=M[R.type];R.precision!==null&&(y=o.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const L=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,q=L!==void 0?L.length:0;let _e=0;ne.morphAttributes.position!==void 0&&(_e=1),ne.morphAttributes.normal!==void 0&&(_e=2),ne.morphAttributes.color!==void 0&&(_e=3);let Ne,Re,ie,pe;if(ce){const Et=Ei[ce];Ne=Et.vertexShader,Re=Et.fragmentShader}else Ne=R.vertexShader,Re=R.fragmentShader,f.update(R),ie=f.getVertexShaderID(R),pe=f.getFragmentShaderID(R);const ue=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Oe=Q.isInstancedMesh===!0,ot=Q.isBatchedMesh===!0,Rt=!!R.map,pt=!!R.matcap,G=!!oe,It=!!R.aoMap,tt=!!R.lightMap,wt=!!R.bumpMap,Qe=!!R.normalMap,Ft=!!R.displacementMap,ze=!!R.emissiveMap,ft=!!R.metalnessMap,Ht=!!R.roughnessMap,Gt=R.anisotropy>0,D=R.clearcoat>0,A=R.dispersion>0,J=R.iridescence>0,fe=R.sheen>0,xe=R.transmission>0,de=Gt&&!!R.anisotropyMap,Je=D&&!!R.clearcoatMap,be=D&&!!R.clearcoatNormalMap,He=D&&!!R.clearcoatRoughnessMap,Ke=J&&!!R.iridescenceMap,Ee=J&&!!R.iridescenceThicknessMap,De=fe&&!!R.sheenColorMap,at=fe&&!!R.sheenRoughnessMap,$e=!!R.specularMap,Ie=!!R.specularColorMap,ht=!!R.specularIntensityMap,j=xe&&!!R.transmissionMap,Me=xe&&!!R.thicknessMap,Ae=!!R.gradientMap,Ue=!!R.alphaMap,Se=R.alphaTest>0,he=!!R.alphaHash,Xe=!!R.extensions;let dt=Pr;R.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Nt={shaderID:ce,shaderType:R.type,shaderName:R.name,vertexShader:Ne,fragmentShader:Re,defines:R.defines,customVertexShaderID:ie,customFragmentShaderID:pe,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:ot,batchingColor:ot&&Q._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&Q.instanceColor!==null,instancingMorph:Oe&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:oo,alphaToCoverage:!!R.alphaToCoverage,map:Rt,matcap:pt,envMap:G,envMapMode:G&&oe.mapping,envMapCubeUVHeight:F,aoMap:It,lightMap:tt,bumpMap:wt,normalMap:Qe,displacementMap:x&&Ft,emissiveMap:ze,normalMapObjectSpace:Qe&&R.normalMapType===Z_,normalMapTangentSpace:Qe&&R.normalMapType===I0,metalnessMap:ft,roughnessMap:Ht,anisotropy:Gt,anisotropyMap:de,clearcoat:D,clearcoatMap:Je,clearcoatNormalMap:be,clearcoatRoughnessMap:He,dispersion:A,iridescence:J,iridescenceMap:Ke,iridescenceThicknessMap:Ee,sheen:fe,sheenColorMap:De,sheenRoughnessMap:at,specularMap:$e,specularColorMap:Ie,specularIntensityMap:ht,transmission:xe,transmissionMap:j,thicknessMap:Me,gradientMap:Ae,opaque:R.transparent===!1&&R.blending===eo&&R.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Se,alphaHash:he,combine:R.combine,mapUv:Rt&&w(R.map.channel),aoMapUv:It&&w(R.aoMap.channel),lightMapUv:tt&&w(R.lightMap.channel),bumpMapUv:wt&&w(R.bumpMap.channel),normalMapUv:Qe&&w(R.normalMap.channel),displacementMapUv:Ft&&w(R.displacementMap.channel),emissiveMapUv:ze&&w(R.emissiveMap.channel),metalnessMapUv:ft&&w(R.metalnessMap.channel),roughnessMapUv:Ht&&w(R.roughnessMap.channel),anisotropyMapUv:de&&w(R.anisotropyMap.channel),clearcoatMapUv:Je&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:be&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:De&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:at&&w(R.sheenRoughnessMap.channel),specularMapUv:$e&&w(R.specularMap.channel),specularColorMapUv:Ie&&w(R.specularColorMap.channel),specularIntensityMapUv:ht&&w(R.specularIntensityMap.channel),transmissionMapUv:j&&w(R.transmissionMap.channel),thicknessMapUv:Me&&w(R.thicknessMap.channel),alphaMapUv:Ue&&w(R.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Qe||Gt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ne.attributes.uv&&(Rt||Ue),fog:!!le,useFog:R.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ce,skinning:Q.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:_e,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:Rt&&R.map.isVideoTexture===!0&&Ct.getTransfer(R.map.colorSpace)===Ut,decodeVideoTextureEmissive:ze&&R.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(R.emissiveMap.colorSpace)===Ut,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===gi,flipSided:R.side===zn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Xe&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&R.extensions.multiDraw===!0||ot)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Nt.vertexUv1s=p.has(1),Nt.vertexUv2s=p.has(2),Nt.vertexUv3s=p.has(3),p.clear(),Nt}function _(R){const I=[];if(R.shaderID?I.push(R.shaderID):(I.push(R.customVertexShaderID),I.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)I.push(H),I.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(N(I,R),C(I,R),I.push(s.outputColorSpace)),I.push(R.customProgramCacheKey),I.join()}function N(R,I){R.push(I.precision),R.push(I.outputColorSpace),R.push(I.envMapMode),R.push(I.envMapCubeUVHeight),R.push(I.mapUv),R.push(I.alphaMapUv),R.push(I.lightMapUv),R.push(I.aoMapUv),R.push(I.bumpMapUv),R.push(I.normalMapUv),R.push(I.displacementMapUv),R.push(I.emissiveMapUv),R.push(I.metalnessMapUv),R.push(I.roughnessMapUv),R.push(I.anisotropyMapUv),R.push(I.clearcoatMapUv),R.push(I.clearcoatNormalMapUv),R.push(I.clearcoatRoughnessMapUv),R.push(I.iridescenceMapUv),R.push(I.iridescenceThicknessMapUv),R.push(I.sheenColorMapUv),R.push(I.sheenRoughnessMapUv),R.push(I.specularMapUv),R.push(I.specularColorMapUv),R.push(I.specularIntensityMapUv),R.push(I.transmissionMapUv),R.push(I.thicknessMapUv),R.push(I.combine),R.push(I.fogExp2),R.push(I.sizeAttenuation),R.push(I.morphTargetsCount),R.push(I.morphAttributeCount),R.push(I.numDirLights),R.push(I.numPointLights),R.push(I.numSpotLights),R.push(I.numSpotLightMaps),R.push(I.numHemiLights),R.push(I.numRectAreaLights),R.push(I.numDirLightShadows),R.push(I.numPointLightShadows),R.push(I.numSpotLightShadows),R.push(I.numSpotLightShadowsWithMaps),R.push(I.numLightProbes),R.push(I.shadowMapType),R.push(I.toneMapping),R.push(I.numClippingPlanes),R.push(I.numClipIntersection),R.push(I.depthPacking)}function C(R,I){d.disableAll(),I.supportsVertexTextures&&d.enable(0),I.instancing&&d.enable(1),I.instancingColor&&d.enable(2),I.instancingMorph&&d.enable(3),I.matcap&&d.enable(4),I.envMap&&d.enable(5),I.normalMapObjectSpace&&d.enable(6),I.normalMapTangentSpace&&d.enable(7),I.clearcoat&&d.enable(8),I.iridescence&&d.enable(9),I.alphaTest&&d.enable(10),I.vertexColors&&d.enable(11),I.vertexAlphas&&d.enable(12),I.vertexUv1s&&d.enable(13),I.vertexUv2s&&d.enable(14),I.vertexUv3s&&d.enable(15),I.vertexTangents&&d.enable(16),I.anisotropy&&d.enable(17),I.alphaHash&&d.enable(18),I.batching&&d.enable(19),I.dispersion&&d.enable(20),I.batchingColor&&d.enable(21),I.gradientMap&&d.enable(22),R.push(d.mask),d.disableAll(),I.fog&&d.enable(0),I.useFog&&d.enable(1),I.flatShading&&d.enable(2),I.logarithmicDepthBuffer&&d.enable(3),I.reversedDepthBuffer&&d.enable(4),I.skinning&&d.enable(5),I.morphTargets&&d.enable(6),I.morphNormals&&d.enable(7),I.morphColors&&d.enable(8),I.premultipliedAlpha&&d.enable(9),I.shadowMapEnabled&&d.enable(10),I.doubleSided&&d.enable(11),I.flipSided&&d.enable(12),I.useDepthPacking&&d.enable(13),I.dithering&&d.enable(14),I.transmission&&d.enable(15),I.sheen&&d.enable(16),I.opaque&&d.enable(17),I.pointsUvs&&d.enable(18),I.decodeVideoTexture&&d.enable(19),I.decodeVideoTextureEmissive&&d.enable(20),I.alphaToCoverage&&d.enable(21),R.push(d.mask)}function E(R){const I=M[R.type];let H;if(I){const te=Ei[I];H=wy.clone(te.uniforms)}else H=R.uniforms;return H}function U(R,I){let H;for(let te=0,Q=v.length;te<Q;te++){const le=v[te];if(le.cacheKey===I){H=le,++H.usedTimes;break}}return H===void 0&&(H=new R1(s,I,R,l),v.push(H)),H}function z(R){if(--R.usedTimes===0){const I=v.indexOf(R);v[I]=v[v.length-1],v.pop(),R.destroy()}}function B(R){f.remove(R)}function k(){f.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:E,acquireProgram:U,releaseProgram:z,releaseShaderCache:B,programs:v,dispose:k}}function D1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,f){s.get(c)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function U1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $g(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m,x,y,M,w,S){let _=s[e];return _===void 0?(_={id:m.id,object:m,geometry:x,material:y,groupOrder:M,renderOrder:m.renderOrder,z:w,group:S},s[e]=_):(_.id=m.id,_.object=m,_.geometry=x,_.material=y,_.groupOrder=M,_.renderOrder=m.renderOrder,_.z=w,_.group=S),e++,_}function d(m,x,y,M,w,S){const _=c(m,x,y,M,w,S);y.transmission>0?r.push(_):y.transparent===!0?o.push(_):t.push(_)}function f(m,x,y,M,w,S){const _=c(m,x,y,M,w,S);y.transmission>0?r.unshift(_):y.transparent===!0?o.unshift(_):t.unshift(_)}function p(m,x){t.length>1&&t.sort(m||U1),r.length>1&&r.sort(x||$g),o.length>1&&o.sort(x||$g)}function v(){for(let m=e,x=s.length;m<x;m++){const y=s[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:f,finish:v,sort:p}}function k1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new qg,s.set(r,[c])):o>=l.length?(c=new qg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function F1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new gt};break;case"SpotLight":t={position:new W,direction:new W,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function O1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let z1=0;function B1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function H1(s){const e=new F1,t=O1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new W);const o=new W,l=new jt,c=new jt;function d(p){let v=0,m=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let y=0,M=0,w=0,S=0,_=0,N=0,C=0,E=0,U=0,z=0,B=0;p.sort(B1);for(let R=0,I=p.length;R<I;R++){const H=p[R],te=H.color,Q=H.intensity,le=H.distance,ne=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=te.r*Q,m+=te.g*Q,x+=te.b*Q;else if(H.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(H.sh.coefficients[ee],Q);B++}else if(H.isDirectionalLight){const ee=e.get(H);if(ee.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const oe=H.shadow,F=t.get(H);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,r.directionalShadow[y]=F,r.directionalShadowMap[y]=ne,r.directionalShadowMatrix[y]=H.shadow.matrix,N++}r.directional[y]=ee,y++}else if(H.isSpotLight){const ee=e.get(H);ee.position.setFromMatrixPosition(H.matrixWorld),ee.color.copy(te).multiplyScalar(Q),ee.distance=le,ee.coneCos=Math.cos(H.angle),ee.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ee.decay=H.decay,r.spot[w]=ee;const oe=H.shadow;if(H.map&&(r.spotLightMap[U]=H.map,U++,oe.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[w]=oe.matrix,H.castShadow){const F=t.get(H);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,r.spotShadow[w]=F,r.spotShadowMap[w]=ne,E++}w++}else if(H.isRectAreaLight){const ee=e.get(H);ee.color.copy(te).multiplyScalar(Q),ee.halfWidth.set(H.width*.5,0,0),ee.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=ee,S++}else if(H.isPointLight){const ee=e.get(H);if(ee.color.copy(H.color).multiplyScalar(H.intensity),ee.distance=H.distance,ee.decay=H.decay,H.castShadow){const oe=H.shadow,F=t.get(H);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,F.shadowCameraNear=oe.camera.near,F.shadowCameraFar=oe.camera.far,r.pointShadow[M]=F,r.pointShadowMap[M]=ne,r.pointShadowMatrix[M]=H.shadow.matrix,C++}r.point[M]=ee,M++}else if(H.isHemisphereLight){const ee=e.get(H);ee.skyColor.copy(H.color).multiplyScalar(Q),ee.groundColor.copy(H.groundColor).multiplyScalar(Q),r.hemi[_]=ee,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=m,r.ambient[2]=x;const k=r.hash;(k.directionalLength!==y||k.pointLength!==M||k.spotLength!==w||k.rectAreaLength!==S||k.hemiLength!==_||k.numDirectionalShadows!==N||k.numPointShadows!==C||k.numSpotShadows!==E||k.numSpotMaps!==U||k.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=S,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=E+U-z,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=B,k.directionalLength=y,k.pointLength=M,k.spotLength=w,k.rectAreaLength=S,k.hemiLength=_,k.numDirectionalShadows=N,k.numPointShadows=C,k.numSpotShadows=E,k.numSpotMaps=U,k.numLightProbes=B,r.version=z1++)}function f(p,v){let m=0,x=0,y=0,M=0,w=0;const S=v.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const C=p[_];if(C.isDirectionalLight){const E=r.directional[m];E.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(S),m++}else if(C.isSpotLight){const E=r.spot[y];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(S),E.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const E=r.rectArea[M];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(S),c.identity(),l.copy(C.matrixWorld),l.premultiply(S),c.extractRotation(l),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(c),E.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const E=r.point[x];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(S),x++}else if(C.isHemisphereLight){const E=r.hemi[w];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(S),w++}}}return{setup:d,setupView:f,state:r}}function Jg(s){const e=new H1(s),t=[],r=[];function o(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function c(v){r.push(v)}function d(){e.setup(t)}function f(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:c}}function G1(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new Jg(s),e.set(o,[d])):l>=c.length?(d=new Jg(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function j1(s,e,t){let r=new th;const o=new Ze,l=new Ze,c=new kt,d=new hS({depthPacking:Y_}),f=new pS,p={},v=t.maxTextureSize,m={[Nr]:zn,[zn]:Nr,[gi]:gi},x=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:V1,fragmentShader:W1}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new Pn;M.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new $n(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_0;let _=this.type;this.render=function(z,B,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const R=s.getRenderTarget(),I=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),te=s.state;te.setBlending(Ir),te.buffers.depth.getReversed()?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Q=_!==Xi&&this.type===Xi,le=_===Xi&&this.type!==Xi;for(let ne=0,ee=z.length;ne<ee;ne++){const oe=z[ne],F=oe.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const ce=F.getFrameExtents();if(o.multiply(ce),l.copy(F.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/ce.x),o.x=l.x*ce.x,F.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/ce.y),o.y=l.y*ce.y,F.mapSize.y=l.y)),F.map===null||Q===!0||le===!0){const q=this.type!==Xi?{minFilter:_i,magFilter:_i}:{};F.map!==null&&F.map.dispose(),F.map=new cs(o.x,o.y,q),F.map.texture.name=oe.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const L=F.getViewportCount();for(let q=0;q<L;q++){const _e=F.getViewport(q);c.set(l.x*_e.x,l.y*_e.y,l.x*_e.z,l.y*_e.w),te.viewport(c),F.updateMatrices(oe,q),r=F.getFrustum(),E(B,k,F.camera,oe,this.type)}F.isPointLightShadow!==!0&&this.type===Xi&&N(F,k),F.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(R,I,H)};function N(z,B){const k=e.update(w);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new cs(o.x,o.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(B,null,k,x,w,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(B,null,k,y,w,null)}function C(z,B,k,R){let I=null;const H=k.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)I=H;else if(I=k.isPointLight===!0?f:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const te=I.uuid,Q=B.uuid;let le=p[te];le===void 0&&(le={},p[te]=le);let ne=le[Q];ne===void 0&&(ne=I.clone(),le[Q]=ne,B.addEventListener("dispose",U)),I=ne}if(I.visible=B.visible,I.wireframe=B.wireframe,R===Xi?I.side=B.shadowSide!==null?B.shadowSide:B.side:I.side=B.shadowSide!==null?B.shadowSide:m[B.side],I.alphaMap=B.alphaMap,I.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,I.map=B.map,I.clipShadows=B.clipShadows,I.clippingPlanes=B.clippingPlanes,I.clipIntersection=B.clipIntersection,I.displacementMap=B.displacementMap,I.displacementScale=B.displacementScale,I.displacementBias=B.displacementBias,I.wireframeLinewidth=B.wireframeLinewidth,I.linewidth=B.linewidth,k.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const te=s.properties.get(I);te.light=k}return I}function E(z,B,k,R,I){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&I===Xi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,z.matrixWorld);const Q=e.update(z),le=z.material;if(Array.isArray(le)){const ne=Q.groups;for(let ee=0,oe=ne.length;ee<oe;ee++){const F=ne[ee],ce=le[F.materialIndex];if(ce&&ce.visible){const L=C(z,ce,R,I);z.onBeforeShadow(s,z,B,k,Q,L,F),s.renderBufferDirect(k,null,Q,L,z,F),z.onAfterShadow(s,z,B,k,Q,L,F)}}}else if(le.visible){const ne=C(z,le,R,I);z.onBeforeShadow(s,z,B,k,Q,ne,null),s.renderBufferDirect(k,null,Q,ne,z,null),z.onAfterShadow(s,z,B,k,Q,ne,null)}}const te=z.children;for(let Q=0,le=te.length;Q<le;Q++)E(te[Q],B,k,R,I)}function U(z){z.target.removeEventListener("dispose",U);for(const k in p){const R=p[k],I=z.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}}const X1={[qd]:Jd,[Kd]:tf,[Qd]:nf,[io]:ef,[Jd]:qd,[tf]:Kd,[nf]:Qd,[ef]:io};function Y1(s,e){function t(){let j=!1;const Me=new kt;let Ae=null;const Ue=new kt(0,0,0,0);return{setMask:function(Se){Ae!==Se&&!j&&(s.colorMask(Se,Se,Se,Se),Ae=Se)},setLocked:function(Se){j=Se},setClear:function(Se,he,Xe,dt,Nt){Nt===!0&&(Se*=dt,he*=dt,Xe*=dt),Me.set(Se,he,Xe,dt),Ue.equals(Me)===!1&&(s.clearColor(Se,he,Xe,dt),Ue.copy(Me))},reset:function(){j=!1,Ae=null,Ue.set(-1,0,0,0)}}}function r(){let j=!1,Me=!1,Ae=null,Ue=null,Se=null;return{setReversed:function(he){if(Me!==he){const Xe=e.get("EXT_clip_control");he?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Me=he;const dt=Se;Se=null,this.setClear(dt)}},getReversed:function(){return Me},setTest:function(he){he?ue(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(he){Ae!==he&&!j&&(s.depthMask(he),Ae=he)},setFunc:function(he){if(Me&&(he=X1[he]),Ue!==he){switch(he){case qd:s.depthFunc(s.NEVER);break;case Jd:s.depthFunc(s.ALWAYS);break;case Kd:s.depthFunc(s.LESS);break;case io:s.depthFunc(s.LEQUAL);break;case Qd:s.depthFunc(s.EQUAL);break;case ef:s.depthFunc(s.GEQUAL);break;case tf:s.depthFunc(s.GREATER);break;case nf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=he}},setLocked:function(he){j=he},setClear:function(he){Se!==he&&(Me&&(he=1-he),s.clearDepth(he),Se=he)},reset:function(){j=!1,Ae=null,Ue=null,Se=null,Me=!1}}}function o(){let j=!1,Me=null,Ae=null,Ue=null,Se=null,he=null,Xe=null,dt=null,Nt=null;return{setTest:function(Et){j||(Et?ue(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(Et){Me!==Et&&!j&&(s.stencilMask(Et),Me=Et)},setFunc:function(Et,Jn,vn){(Ae!==Et||Ue!==Jn||Se!==vn)&&(s.stencilFunc(Et,Jn,vn),Ae=Et,Ue=Jn,Se=vn)},setOp:function(Et,Jn,vn){(he!==Et||Xe!==Jn||dt!==vn)&&(s.stencilOp(Et,Jn,vn),he=Et,Xe=Jn,dt=vn)},setLocked:function(Et){j=Et},setClear:function(Et){Nt!==Et&&(s.clearStencil(Et),Nt=Et)},reset:function(){j=!1,Me=null,Ae=null,Ue=null,Se=null,he=null,Xe=null,dt=null,Nt=null}}}const l=new t,c=new r,d=new o,f=new WeakMap,p=new WeakMap;let v={},m={},x=new WeakMap,y=[],M=null,w=!1,S=null,_=null,N=null,C=null,E=null,U=null,z=null,B=new gt(0,0,0),k=0,R=!1,I=null,H=null,te=null,Q=null,le=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,oe=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(F)[1]),ee=oe>=1):F.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),ee=oe>=2);let ce=null,L={};const q=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),Ne=new kt().fromArray(q),Re=new kt().fromArray(_e);function ie(j,Me,Ae,Ue){const Se=new Uint8Array(4),he=s.createTexture();s.bindTexture(j,he),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<Ae;Xe++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Me+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return he}const pe={};pe[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ue(s.DEPTH_TEST),c.setFunc(io),wt(!1),Qe(jm),ue(s.CULL_FACE),It(Ir);function ue(j){v[j]!==!0&&(s.enable(j),v[j]=!0)}function Ce(j){v[j]!==!1&&(s.disable(j),v[j]=!1)}function Oe(j,Me){return m[j]!==Me?(s.bindFramebuffer(j,Me),m[j]=Me,j===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Me),j===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function ot(j,Me){let Ae=y,Ue=!1;if(j){Ae=x.get(Me),Ae===void 0&&(Ae=[],x.set(Me,Ae));const Se=j.textures;if(Ae.length!==Se.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Xe=Se.length;he<Xe;he++)Ae[he]=s.COLOR_ATTACHMENT0+he;Ae.length=Se.length,Ue=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Ae)}function Rt(j){return M!==j?(s.useProgram(j),M=j,!0):!1}const pt={[rs]:s.FUNC_ADD,[__]:s.FUNC_SUBTRACT,[y_]:s.FUNC_REVERSE_SUBTRACT};pt[S_]=s.MIN,pt[M_]=s.MAX;const G={[w_]:s.ZERO,[E_]:s.ONE,[T_]:s.SRC_COLOR,[Zd]:s.SRC_ALPHA,[P_]:s.SRC_ALPHA_SATURATE,[R_]:s.DST_COLOR,[A_]:s.DST_ALPHA,[b_]:s.ONE_MINUS_SRC_COLOR,[$d]:s.ONE_MINUS_SRC_ALPHA,[I_]:s.ONE_MINUS_DST_COLOR,[C_]:s.ONE_MINUS_DST_ALPHA,[N_]:s.CONSTANT_COLOR,[L_]:s.ONE_MINUS_CONSTANT_COLOR,[D_]:s.CONSTANT_ALPHA,[U_]:s.ONE_MINUS_CONSTANT_ALPHA};function It(j,Me,Ae,Ue,Se,he,Xe,dt,Nt,Et){if(j===Ir){w===!0&&(Ce(s.BLEND),w=!1);return}if(w===!1&&(ue(s.BLEND),w=!0),j!==x_){if(j!==S||Et!==R){if((_!==rs||E!==rs)&&(s.blendEquation(s.FUNC_ADD),_=rs,E=rs),Et)switch(j){case eo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yd:s.blendFunc(s.ONE,s.ONE);break;case Xm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ym:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ym:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}N=null,C=null,U=null,z=null,B.set(0,0,0),k=0,S=j,R=Et}return}Se=Se||Me,he=he||Ae,Xe=Xe||Ue,(Me!==_||Se!==E)&&(s.blendEquationSeparate(pt[Me],pt[Se]),_=Me,E=Se),(Ae!==N||Ue!==C||he!==U||Xe!==z)&&(s.blendFuncSeparate(G[Ae],G[Ue],G[he],G[Xe]),N=Ae,C=Ue,U=he,z=Xe),(dt.equals(B)===!1||Nt!==k)&&(s.blendColor(dt.r,dt.g,dt.b,Nt),B.copy(dt),k=Nt),S=j,R=!1}function tt(j,Me){j.side===gi?Ce(s.CULL_FACE):ue(s.CULL_FACE);let Ae=j.side===zn;Me&&(Ae=!Ae),wt(Ae),j.blending===eo&&j.transparent===!1?It(Ir):It(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const Ue=j.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ze(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function wt(j){I!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),I=j)}function Qe(j){j!==g_?(ue(s.CULL_FACE),j!==H&&(j===jm?s.cullFace(s.BACK):j===v_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),H=j}function Ft(j){j!==te&&(ee&&s.lineWidth(j),te=j)}function ze(j,Me,Ae){j?(ue(s.POLYGON_OFFSET_FILL),(Q!==Me||le!==Ae)&&(s.polygonOffset(Me,Ae),Q=Me,le=Ae)):Ce(s.POLYGON_OFFSET_FILL)}function ft(j){j?ue(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Ht(j){j===void 0&&(j=s.TEXTURE0+ne-1),ce!==j&&(s.activeTexture(j),ce=j)}function Gt(j,Me,Ae){Ae===void 0&&(ce===null?Ae=s.TEXTURE0+ne-1:Ae=ce);let Ue=L[Ae];Ue===void 0&&(Ue={type:void 0,texture:void 0},L[Ae]=Ue),(Ue.type!==j||Ue.texture!==Me)&&(ce!==Ae&&(s.activeTexture(Ae),ce=Ae),s.bindTexture(j,Me||pe[j]),Ue.type=j,Ue.texture=Me)}function D(){const j=L[ce];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{s.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{s.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Je(){try{s.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function be(){try{s.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{s.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ke(){try{s.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{s.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function De(j){Ne.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Ne.copy(j))}function at(j){Re.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Re.copy(j))}function $e(j,Me){let Ae=p.get(Me);Ae===void 0&&(Ae=new WeakMap,p.set(Me,Ae));let Ue=Ae.get(j);Ue===void 0&&(Ue=s.getUniformBlockIndex(Me,j.name),Ae.set(j,Ue))}function Ie(j,Me){const Ue=p.get(Me).get(j);f.get(Me)!==Ue&&(s.uniformBlockBinding(Me,Ue,j.__bindingPointIndex),f.set(Me,Ue))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ce=null,L={},m={},x=new WeakMap,y=[],M=null,w=!1,S=null,_=null,N=null,C=null,E=null,U=null,z=null,B=new gt(0,0,0),k=0,R=!1,I=null,H=null,te=null,Q=null,le=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ue,disable:Ce,bindFramebuffer:Oe,drawBuffers:ot,useProgram:Rt,setBlending:It,setMaterial:tt,setFlipSided:wt,setCullFace:Qe,setLineWidth:Ft,setPolygonOffset:ze,setScissorTest:ft,activeTexture:Ht,bindTexture:Gt,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:J,texImage2D:Ke,texImage3D:Ee,updateUBOMapping:$e,uniformBlockBinding:Ie,texStorage2D:be,texStorage3D:He,texSubImage2D:fe,texSubImage3D:xe,compressedTexSubImage2D:de,compressedTexSubImage3D:Je,scissor:De,viewport:at,reset:ht}}function Z1(s,e,t,r,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ze,v=new WeakMap;let m;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,A){return y?new OffscreenCanvas(D,A):hc("canvas")}function w(D,A,J){let fe=1;const xe=Gt(D);if((xe.width>J||xe.height>J)&&(fe=J/Math.max(xe.width,xe.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(fe*xe.width),Je=Math.floor(fe*xe.height);m===void 0&&(m=M(de,Je));const be=A?M(de,Je):m;return be.width=de,be.height=Je,be.getContext("2d").drawImage(D,0,0,de,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Je+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function S(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(D,A,J,fe,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=A;if(A===s.RED&&(J===s.FLOAT&&(de=s.R32F),J===s.HALF_FLOAT&&(de=s.R16F),J===s.UNSIGNED_BYTE&&(de=s.R8)),A===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.R8UI),J===s.UNSIGNED_SHORT&&(de=s.R16UI),J===s.UNSIGNED_INT&&(de=s.R32UI),J===s.BYTE&&(de=s.R8I),J===s.SHORT&&(de=s.R16I),J===s.INT&&(de=s.R32I)),A===s.RG&&(J===s.FLOAT&&(de=s.RG32F),J===s.HALF_FLOAT&&(de=s.RG16F),J===s.UNSIGNED_BYTE&&(de=s.RG8)),A===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RG8UI),J===s.UNSIGNED_SHORT&&(de=s.RG16UI),J===s.UNSIGNED_INT&&(de=s.RG32UI),J===s.BYTE&&(de=s.RG8I),J===s.SHORT&&(de=s.RG16I),J===s.INT&&(de=s.RG32I)),A===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGB8UI),J===s.UNSIGNED_SHORT&&(de=s.RGB16UI),J===s.UNSIGNED_INT&&(de=s.RGB32UI),J===s.BYTE&&(de=s.RGB8I),J===s.SHORT&&(de=s.RGB16I),J===s.INT&&(de=s.RGB32I)),A===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),J===s.UNSIGNED_INT&&(de=s.RGBA32UI),J===s.BYTE&&(de=s.RGBA8I),J===s.SHORT&&(de=s.RGBA16I),J===s.INT&&(de=s.RGBA32I)),A===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),A===s.RGBA){const Je=xe?dc:Ct.getTransfer(fe);J===s.FLOAT&&(de=s.RGBA32F),J===s.HALF_FLOAT&&(de=s.RGBA16F),J===s.UNSIGNED_BYTE&&(de=Je===Ut?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function E(D,A){let J;return D?A===null||A===ls||A===ua?J=s.DEPTH24_STENCIL8:A===Ki?J=s.DEPTH32F_STENCIL8:A===ca&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ls||A===ua?J=s.DEPTH_COMPONENT24:A===Ki?J=s.DEPTH_COMPONENT32F:A===ca&&(J=s.DEPTH_COMPONENT16),J}function U(D,A){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==_i&&D.minFilter!==Ti?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function z(D){const A=D.target;A.removeEventListener("dispose",z),k(A),A.isVideoTexture&&v.delete(A)}function B(D){const A=D.target;A.removeEventListener("dispose",B),I(A)}function k(D){const A=r.get(D);if(A.__webglInit===void 0)return;const J=D.source,fe=x.get(J);if(fe){const xe=fe[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&R(D),Object.keys(fe).length===0&&x.delete(J)}r.remove(D)}function R(D){const A=r.get(D);s.deleteTexture(A.__webglTexture);const J=D.source,fe=x.get(J);delete fe[A.__cacheKey],c.memory.textures--}function I(D){const A=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(A.__webglFramebuffer[fe]))for(let xe=0;xe<A.__webglFramebuffer[fe].length;xe++)s.deleteFramebuffer(A.__webglFramebuffer[fe][xe]);else s.deleteFramebuffer(A.__webglFramebuffer[fe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[fe])}else{if(Array.isArray(A.__webglFramebuffer))for(let fe=0;fe<A.__webglFramebuffer.length;fe++)s.deleteFramebuffer(A.__webglFramebuffer[fe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let fe=0;fe<A.__webglColorRenderbuffer.length;fe++)A.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[fe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=D.textures;for(let fe=0,xe=J.length;fe<xe;fe++){const de=r.get(J[fe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),c.memory.textures--),r.remove(J[fe])}r.remove(D)}let H=0;function te(){H=0}function Q(){const D=H;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),H+=1,D}function le(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function ne(D,A){const J=r.get(D);if(D.isVideoTexture&&ft(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const fe=D.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(J,D,A);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+A)}function ee(D,A){const J=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){pe(J,D,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+A)}function oe(D,A){const J=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){pe(J,D,A);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+A)}function F(D,A){const J=r.get(D);if(D.version>0&&J.__version!==D.version){ue(J,D,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+A)}const ce={[of]:s.REPEAT,[os]:s.CLAMP_TO_EDGE,[af]:s.MIRRORED_REPEAT},L={[_i]:s.NEAREST,[j_]:s.NEAREST_MIPMAP_NEAREST,[Cl]:s.NEAREST_MIPMAP_LINEAR,[Ti]:s.LINEAR,[od]:s.LINEAR_MIPMAP_NEAREST,[as]:s.LINEAR_MIPMAP_LINEAR},q={[$_]:s.NEVER,[ty]:s.ALWAYS,[q_]:s.LESS,[P0]:s.LEQUAL,[J_]:s.EQUAL,[ey]:s.GEQUAL,[K_]:s.GREATER,[Q_]:s.NOTEQUAL};function _e(D,A){if(A.type===Ki&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ti||A.magFilter===od||A.magFilter===Cl||A.magFilter===as||A.minFilter===Ti||A.minFilter===od||A.minFilter===Cl||A.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ce[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ce[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ce[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,L[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,L[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===_i||A.minFilter!==Cl&&A.minFilter!==as||A.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Ne(D,A){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",z));const fe=A.source;let xe=x.get(fe);xe===void 0&&(xe={},x.set(fe,xe));const de=le(A);if(de!==D.__cacheKey){xe[de]===void 0&&(xe[de]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),xe[de].usedTimes++;const Je=xe[D.__cacheKey];Je!==void 0&&(xe[D.__cacheKey].usedTimes--,Je.usedTimes===0&&R(A)),D.__cacheKey=de,D.__webglTexture=xe[de].texture}return J}function Re(D,A,J){return Math.floor(Math.floor(D/J)/A)}function ie(D,A,J,fe){const de=D.updateRanges;if(de.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,J,fe,A.data);else{de.sort((Ee,De)=>Ee.start-De.start);let Je=0;for(let Ee=1;Ee<de.length;Ee++){const De=de[Je],at=de[Ee],$e=De.start+De.count,Ie=Re(at.start,A.width,4),ht=Re(De.start,A.width,4);at.start<=$e+1&&Ie===ht&&Re(at.start+at.count-1,A.width,4)===Ie?De.count=Math.max(De.count,at.start+at.count-De.start):(++Je,de[Je]=at)}de.length=Je+1;const be=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),Ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Ee=0,De=de.length;Ee<De;Ee++){const at=de[Ee],$e=Math.floor(at.start/4),Ie=Math.ceil(at.count/4),ht=$e%A.width,j=Math.floor($e/A.width),Me=Ie,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,j),t.texSubImage2D(s.TEXTURE_2D,0,ht,j,Me,Ae,J,fe,A.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,be),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ke)}}function pe(D,A,J){let fe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=s.TEXTURE_3D);const xe=Ne(D,A),de=A.source;t.bindTexture(fe,D.__webglTexture,s.TEXTURE0+J);const Je=r.get(de);if(de.version!==Je.__version||xe===!0){t.activeTexture(s.TEXTURE0+J);const be=Ct.getPrimaries(Ct.workingColorSpace),He=A.colorSpace===Cr?null:Ct.getPrimaries(A.colorSpace),Ke=A.colorSpace===Cr||be===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Ee=w(A.image,!1,o.maxTextureSize);Ee=Ht(A,Ee);const De=l.convert(A.format,A.colorSpace),at=l.convert(A.type);let $e=C(A.internalFormat,De,at,A.colorSpace,A.isVideoTexture);_e(fe,A);let Ie;const ht=A.mipmaps,j=A.isVideoTexture!==!0,Me=Je.__version===void 0||xe===!0,Ae=de.dataReady,Ue=U(A,Ee);if(A.isDepthTexture)$e=E(A.format===fa,A.type),Me&&(j?t.texStorage2D(s.TEXTURE_2D,1,$e,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,$e,Ee.width,Ee.height,0,De,at,null));else if(A.isDataTexture)if(ht.length>0){j&&Me&&t.texStorage2D(s.TEXTURE_2D,Ue,$e,ht[0].width,ht[0].height);for(let Se=0,he=ht.length;Se<he;Se++)Ie=ht[Se],j?Ae&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,De,at,Ie.data):t.texImage2D(s.TEXTURE_2D,Se,$e,Ie.width,Ie.height,0,De,at,Ie.data);A.generateMipmaps=!1}else j?(Me&&t.texStorage2D(s.TEXTURE_2D,Ue,$e,Ee.width,Ee.height),Ae&&ie(A,Ee,De,at)):t.texImage2D(s.TEXTURE_2D,0,$e,Ee.width,Ee.height,0,De,at,Ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){j&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,$e,ht[0].width,ht[0].height,Ee.depth);for(let Se=0,he=ht.length;Se<he;Se++)if(Ie=ht[Se],A.format!==xi)if(De!==null)if(j){if(Ae)if(A.layerUpdates.size>0){const Xe=Ag(Ie.width,Ie.height,A.format,A.type);for(const dt of A.layerUpdates){const Nt=Ie.data.subarray(dt*Xe/Ie.data.BYTES_PER_ELEMENT,(dt+1)*Xe/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,dt,Ie.width,Ie.height,1,De,Nt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,Ee.depth,De,Ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,$e,Ie.width,Ie.height,Ee.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,Ee.depth,De,at,Ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,$e,Ie.width,Ie.height,Ee.depth,0,De,at,Ie.data)}else{j&&Me&&t.texStorage2D(s.TEXTURE_2D,Ue,$e,ht[0].width,ht[0].height);for(let Se=0,he=ht.length;Se<he;Se++)Ie=ht[Se],A.format!==xi?De!==null?j?Ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,De,Ie.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,$e,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ae&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,De,at,Ie.data):t.texImage2D(s.TEXTURE_2D,Se,$e,Ie.width,Ie.height,0,De,at,Ie.data)}else if(A.isDataArrayTexture)if(j){if(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,$e,Ee.width,Ee.height,Ee.depth),Ae)if(A.layerUpdates.size>0){const Se=Ag(Ee.width,Ee.height,A.format,A.type);for(const he of A.layerUpdates){const Xe=Ee.data.subarray(he*Se/Ee.data.BYTES_PER_ELEMENT,(he+1)*Se/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,De,at,Xe)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,at,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,$e,Ee.width,Ee.height,Ee.depth,0,De,at,Ee.data);else if(A.isData3DTexture)j?(Me&&t.texStorage3D(s.TEXTURE_3D,Ue,$e,Ee.width,Ee.height,Ee.depth),Ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,at,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,$e,Ee.width,Ee.height,Ee.depth,0,De,at,Ee.data);else if(A.isFramebufferTexture){if(Me)if(j)t.texStorage2D(s.TEXTURE_2D,Ue,$e,Ee.width,Ee.height);else{let Se=Ee.width,he=Ee.height;for(let Xe=0;Xe<Ue;Xe++)t.texImage2D(s.TEXTURE_2D,Xe,$e,Se,he,0,De,at,null),Se>>=1,he>>=1}}else if(ht.length>0){if(j&&Me){const Se=Gt(ht[0]);t.texStorage2D(s.TEXTURE_2D,Ue,$e,Se.width,Se.height)}for(let Se=0,he=ht.length;Se<he;Se++)Ie=ht[Se],j?Ae&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,De,at,Ie):t.texImage2D(s.TEXTURE_2D,Se,$e,De,at,Ie);A.generateMipmaps=!1}else if(j){if(Me){const Se=Gt(Ee);t.texStorage2D(s.TEXTURE_2D,Ue,$e,Se.width,Se.height)}Ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,at,Ee)}else t.texImage2D(s.TEXTURE_2D,0,$e,De,at,Ee);S(A)&&_(fe),Je.__version=de.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ue(D,A,J){if(A.image.length!==6)return;const fe=Ne(D,A),xe=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+J);const de=r.get(xe);if(xe.version!==de.__version||fe===!0){t.activeTexture(s.TEXTURE0+J);const Je=Ct.getPrimaries(Ct.workingColorSpace),be=A.colorSpace===Cr?null:Ct.getPrimaries(A.colorSpace),He=A.colorSpace===Cr||Je===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ke=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,De=[];for(let he=0;he<6;he++)!Ke&&!Ee?De[he]=w(A.image[he],!0,o.maxCubemapSize):De[he]=Ee?A.image[he].image:A.image[he],De[he]=Ht(A,De[he]);const at=De[0],$e=l.convert(A.format,A.colorSpace),Ie=l.convert(A.type),ht=C(A.internalFormat,$e,Ie,A.colorSpace),j=A.isVideoTexture!==!0,Me=de.__version===void 0||fe===!0,Ae=xe.dataReady;let Ue=U(A,at);_e(s.TEXTURE_CUBE_MAP,A);let Se;if(Ke){j&&Me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ht,at.width,at.height);for(let he=0;he<6;he++){Se=De[he].mipmaps;for(let Xe=0;Xe<Se.length;Xe++){const dt=Se[Xe];A.format!==xi?$e!==null?j?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Xe,0,0,dt.width,dt.height,$e,dt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Xe,ht,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Xe,0,0,dt.width,dt.height,$e,Ie,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Xe,ht,dt.width,dt.height,0,$e,Ie,dt.data)}}}else{if(Se=A.mipmaps,j&&Me){Se.length>0&&Ue++;const he=Gt(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ht,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){j?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De[he].width,De[he].height,$e,Ie,De[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,De[he].width,De[he].height,0,$e,Ie,De[he].data);for(let Xe=0;Xe<Se.length;Xe++){const Nt=Se[Xe].image[he].image;j?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Xe+1,0,0,Nt.width,Nt.height,$e,Ie,Nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Xe+1,ht,Nt.width,Nt.height,0,$e,Ie,Nt.data)}}else{j?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,$e,Ie,De[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,$e,Ie,De[he]);for(let Xe=0;Xe<Se.length;Xe++){const dt=Se[Xe];j?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Xe+1,0,0,$e,Ie,dt.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Xe+1,ht,$e,Ie,dt.image[he])}}}S(A)&&_(s.TEXTURE_CUBE_MAP),de.__version=xe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ce(D,A,J,fe,xe,de){const Je=l.convert(J.format,J.colorSpace),be=l.convert(J.type),He=C(J.internalFormat,Je,be,J.colorSpace),Ke=r.get(A),Ee=r.get(J);if(Ee.__renderTarget=A,!Ke.__hasExternalTextures){const De=Math.max(1,A.width>>de),at=Math.max(1,A.height>>de);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,de,He,De,at,A.depth,0,Je,be,null):t.texImage2D(xe,de,He,De,at,0,Je,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),ze(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,xe,Ee.__webglTexture,0,Ft(A)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,xe,Ee.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(D,A,J){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const fe=A.depthTexture,xe=fe&&fe.isDepthTexture?fe.type:null,de=E(A.stencilBuffer,xe),Je=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=Ft(A);ze(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,de,A.width,A.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,de,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,de,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Je,s.RENDERBUFFER,D)}else{const fe=A.textures;for(let xe=0;xe<fe.length;xe++){const de=fe[xe],Je=l.convert(de.format,de.colorSpace),be=l.convert(de.type),He=C(de.internalFormat,Je,be,de.colorSpace),Ke=Ft(A);J&&ze(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,He,A.width,A.height):ze(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,He,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,He,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(A.depthTexture);fe.__renderTarget=A,(!fe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ne(A.depthTexture,0);const xe=fe.__webglTexture,de=Ft(A);if(A.depthTexture.format===da)ze(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(A.depthTexture.format===fa)ze(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Rt(D){const A=r.get(D),J=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const fe=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),fe){const xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,fe.removeEventListener("dispose",xe)};fe.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=fe}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const fe=D.texture.mipmaps;fe&&fe.length>0?ot(A.__webglFramebuffer[0],D):ot(A.__webglFramebuffer,D)}else if(J){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]===void 0)A.__webglDepthbuffer[fe]=s.createRenderbuffer(),Oe(A.__webglDepthbuffer[fe],D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,de)}}else{const fe=D.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Oe(A.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,de)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(D,A,J){const fe=r.get(D);A!==void 0&&Ce(fe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Rt(D)}function G(D){const A=D.texture,J=r.get(D),fe=r.get(A);D.addEventListener("dispose",B);const xe=D.textures,de=D.isWebGLCubeRenderTarget===!0,Je=xe.length>1;if(Je||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=A.version,c.memory.textures++),de){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let He=0;He<A.mipmaps.length;He++)J.__webglFramebuffer[be][He]=s.createFramebuffer()}else J.__webglFramebuffer[be]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<A.mipmaps.length;be++)J.__webglFramebuffer[be]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Je)for(let be=0,He=xe.length;be<He;be++){const Ke=r.get(xe[be]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&ze(D)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){const He=xe[be];J.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const Ke=l.convert(He.format,He.colorSpace),Ee=l.convert(He.type),De=C(He.internalFormat,Ke,Ee,He.colorSpace,D.isXRRenderTarget===!0),at=Ft(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,De,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,J.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),_e(s.TEXTURE_CUBE_MAP,A);for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)Ce(J.__webglFramebuffer[be][He],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,He);else Ce(J.__webglFramebuffer[be],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(A)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let be=0,He=xe.length;be<He;be++){const Ke=xe[be],Ee=r.get(Ke);let De=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,Ee.__webglTexture),_e(De,Ke),Ce(J.__webglFramebuffer,D,Ke,s.COLOR_ATTACHMENT0+be,De,0),S(Ke)&&_(De)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,fe.__webglTexture),_e(be,A),A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)Ce(J.__webglFramebuffer[He],D,A,s.COLOR_ATTACHMENT0,be,He);else Ce(J.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,be,0);S(A)&&_(be),t.unbindTexture()}D.depthBuffer&&Rt(D)}function It(D){const A=D.textures;for(let J=0,fe=A.length;J<fe;J++){const xe=A[J];if(S(xe)){const de=N(D),Je=r.get(xe).__webglTexture;t.bindTexture(de,Je),_(de),t.unbindTexture()}}}const tt=[],wt=[];function Qe(D){if(D.samples>0){if(ze(D)===!1){const A=D.textures,J=D.width,fe=D.height;let xe=s.COLOR_BUFFER_BIT;const de=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Je=r.get(D),be=A.length>1;if(be)for(let Ke=0;Ke<A.length;Ke++)t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const He=D.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Ke=0;Ke<A.length;Ke++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Je.__webglColorRenderbuffer[Ke]);const Ee=r.get(A[Ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,J,fe,0,0,J,fe,xe,s.NEAREST),f===!0&&(tt.length=0,wt.length=0,tt.push(s.COLOR_ATTACHMENT0+Ke),D.depthBuffer&&D.resolveDepthBuffer===!1&&(tt.push(de),wt.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ke=0;Ke<A.length;Ke++){t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,Je.__webglColorRenderbuffer[Ke]);const Ee=r.get(A[Ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ft(D){return Math.min(o.maxSamples,D.samples)}function ze(D){const A=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ft(D){const A=c.render.frame;v.get(D)!==A&&(v.set(D,A),D.update())}function Ht(D,A){const J=D.colorSpace,fe=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==oo&&J!==Cr&&(Ct.getTransfer(J)===Ut?(fe!==xi||xe!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function Gt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=te,this.setTexture2D=ne,this.setTexture2DArray=ee,this.setTexture3D=oe,this.setTextureCube=F,this.rebindTextures=pt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ze}function $1(s,e){function t(r,o=Cr){let l;const c=Ct.getTransfer(o);if(r===Ai)return s.UNSIGNED_BYTE;if(r===Zf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$f)return s.UNSIGNED_SHORT_5_5_5_1;if(r===E0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===M0)return s.BYTE;if(r===w0)return s.SHORT;if(r===ca)return s.UNSIGNED_SHORT;if(r===Yf)return s.INT;if(r===ls)return s.UNSIGNED_INT;if(r===Ki)return s.FLOAT;if(r===va)return s.HALF_FLOAT;if(r===T0)return s.ALPHA;if(r===b0)return s.RGB;if(r===xi)return s.RGBA;if(r===da)return s.DEPTH_COMPONENT;if(r===fa)return s.DEPTH_STENCIL;if(r===A0)return s.RED;if(r===qf)return s.RED_INTEGER;if(r===C0)return s.RG;if(r===Jf)return s.RG_INTEGER;if(r===Kf)return s.RGBA_INTEGER;if(r===sc||r===oc||r===ac||r===lc)if(c===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===sc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===sc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lf||r===cf||r===uf||r===df)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===lf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===df)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ff||r===hf||r===pf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ff||r===hf)return c===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===pf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mf||r===gf||r===vf||r===xf||r===_f||r===yf||r===Sf||r===Mf||r===wf||r===Ef||r===Tf||r===bf||r===Af||r===Cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===mf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_f)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ef)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Af)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cc||r===Rf||r===If)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===cc)return c===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===If)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===R0||r===Pf||r===Nf||r===Lf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===cc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ua?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class sv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
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

}`;class K1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new sv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Lr({vertexShader:q1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $n(new Sc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q1 extends co{constructor(e,t){super();const r=this;let o=null,l=1,c=null,d="local-floor",f=1,p=null,v=null,m=null,x=null,y=null,M=null;const w=new K1,S={},_=t.getContextAttributes();let N=null,C=null;const E=[],U=[],z=new Ze;let B=null;const k=new Zn;k.viewport=new kt;const R=new Zn;R.viewport=new kt;const I=[k,R],H=new yS;let te=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let pe=E[ie];return pe===void 0&&(pe=new Rd,E[ie]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ie){let pe=E[ie];return pe===void 0&&(pe=new Rd,E[ie]=pe),pe.getGripSpace()},this.getHand=function(ie){let pe=E[ie];return pe===void 0&&(pe=new Rd,E[ie]=pe),pe.getHandSpace()};function le(ie){const pe=U.indexOf(ie.inputSource);if(pe===-1)return;const ue=E[pe];ue!==void 0&&(ue.update(ie.inputSource,ie.frame,p||c),ue.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ne(){o.removeEventListener("select",le),o.removeEventListener("selectstart",le),o.removeEventListener("selectend",le),o.removeEventListener("squeeze",le),o.removeEventListener("squeezestart",le),o.removeEventListener("squeezeend",le),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",ee);for(let ie=0;ie<E.length;ie++){const pe=U[ie];pe!==null&&(U[ie]=null,E[ie].disconnect(pe))}te=null,Q=null,w.reset();for(const ie in S)delete S[ie];e.setRenderTarget(N),y=null,x=null,m=null,o=null,C=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",le),o.addEventListener("selectstart",le),o.addEventListener("selectend",le),o.addEventListener("squeeze",le),o.addEventListener("squeezestart",le),o.addEventListener("squeezeend",le),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",ee),_.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&(m=new XRWebGLBinding(o,t)),m!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ce=null,Oe=null;_.depth&&(Oe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?fa:da,Ce=_.stencil?ua:ls);const ot={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:l};x=m.createProjectionLayer(ot),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new cs(x.textureWidth,x.textureHeight,{format:xi,type:Ai,depthTexture:new V0(x.textureWidth,x.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new cs(y.framebufferWidth,y.framebufferHeight,{format:xi,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await o.requestReferenceSpace(d),Re.setContext(o),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ee(ie){for(let pe=0;pe<ie.removed.length;pe++){const ue=ie.removed[pe],Ce=U.indexOf(ue);Ce>=0&&(U[Ce]=null,E[Ce].disconnect(ue))}for(let pe=0;pe<ie.added.length;pe++){const ue=ie.added[pe];let Ce=U.indexOf(ue);if(Ce===-1){for(let ot=0;ot<E.length;ot++)if(ot>=U.length){U.push(ue),Ce=ot;break}else if(U[ot]===null){U[ot]=ue,Ce=ot;break}if(Ce===-1)break}const Oe=E[Ce];Oe&&Oe.connect(ue)}}const oe=new W,F=new W;function ce(ie,pe,ue){oe.setFromMatrixPosition(pe.matrixWorld),F.setFromMatrixPosition(ue.matrixWorld);const Ce=oe.distanceTo(F),Oe=pe.projectionMatrix.elements,ot=ue.projectionMatrix.elements,Rt=Oe[14]/(Oe[10]-1),pt=Oe[14]/(Oe[10]+1),G=(Oe[9]+1)/Oe[5],It=(Oe[9]-1)/Oe[5],tt=(Oe[8]-1)/Oe[0],wt=(ot[8]+1)/ot[0],Qe=Rt*tt,Ft=Rt*wt,ze=Ce/(-tt+wt),ft=ze*-tt;if(pe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ft),ie.translateZ(ze),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Oe[10]===-1)ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ht=Rt+ze,Gt=pt+ze,D=Qe-ft,A=Ft+(Ce-ft),J=G*pt/Gt*Ht,fe=It*pt/Gt*Ht;ie.projectionMatrix.makePerspective(D,A,J,fe,Ht,Gt),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function L(ie,pe){pe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(pe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let pe=ie.near,ue=ie.far;w.texture!==null&&(w.depthNear>0&&(pe=w.depthNear),w.depthFar>0&&(ue=w.depthFar)),H.near=R.near=k.near=pe,H.far=R.far=k.far=ue,(te!==H.near||Q!==H.far)&&(o.updateRenderState({depthNear:H.near,depthFar:H.far}),te=H.near,Q=H.far),H.layers.mask=ie.layers.mask|6,k.layers.mask=H.layers.mask&3,R.layers.mask=H.layers.mask&5;const Ce=ie.parent,Oe=H.cameras;L(H,Ce);for(let ot=0;ot<Oe.length;ot++)L(Oe[ot],Ce);Oe.length===2?ce(H,k,R):H.projectionMatrix.copy(k.projectionMatrix),q(ie,H,Ce)};function q(ie,pe,ue){ue===null?ie.matrix.copy(pe.matrixWorld):(ie.matrix.copy(ue.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(pe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Df*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(x===null&&y===null))return f},this.setFoveation=function(ie){f=ie,x!==null&&(x.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(H)},this.getCameraTexture=function(ie){return S[ie]};let _e=null;function Ne(ie,pe){if(v=pe.getViewerPose(p||c),M=pe,v!==null){const ue=v.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Ce=!1;ue.length!==H.cameras.length&&(H.cameras.length=0,Ce=!0);for(let pt=0;pt<ue.length;pt++){const G=ue[pt];let It=null;if(y!==null)It=y.getViewport(G);else{const wt=m.getViewSubImage(x,G);It=wt.viewport,pt===0&&(e.setRenderTargetTextures(C,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(C))}let tt=I[pt];tt===void 0&&(tt=new Zn,tt.layers.enable(pt),tt.viewport=new kt,I[pt]=tt),tt.matrix.fromArray(G.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(G.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(It.x,It.y,It.width,It.height),pt===0&&(H.matrix.copy(tt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ce===!0&&H.cameras.push(tt)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&m){const pt=m.getDepthInformation(ue[0]);pt&&pt.isValid&&pt.texture&&w.init(pt,o.renderState)}if(Oe&&Oe.includes("camera-access")&&(e.state.unbindTexture(),m))for(let pt=0;pt<ue.length;pt++){const G=ue[pt].camera;if(G){let It=S[G];It||(It=new sv,S[G]=It);const tt=m.getCameraImage(G);It.sourceTexture=tt}}}for(let ue=0;ue<E.length;ue++){const Ce=U[ue],Oe=E[ue];Ce!==null&&Oe!==void 0&&Oe.update(Ce,pe,p||c)}_e&&_e(ie,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Re=new ev;Re.setAnimationLoop(Ne),this.setAnimationLoop=function(ie){_e=ie},this.dispose=function(){}}}const es=new Ci,eT=new jt;function tT(s,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,O0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,N,C,E){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),m(S,_)):_.isMeshPhongMaterial?(l(S,_),v(S,_)):_.isMeshStandardMaterial?(l(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,E)):_.isMeshMatcapMaterial?(l(S,_),M(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),w(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?f(S,_,N,C):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===zn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===zn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=e.get(_),C=N.envMap,E=N.envMapRotation;C&&(S.envMap.value=C,es.copy(E),es.x*=-1,es.y*=-1,es.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),S.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(es)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,N,C){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=C*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function m(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function w(S,_){const N=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nT(s,e,t,r){let o={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(N,C){const E=C.program;r.uniformBlockBinding(N,E)}function p(N,C){let E=o[N.id];E===void 0&&(M(N),E=v(N),o[N.id]=E,N.addEventListener("dispose",S));const U=C.program;r.updateUBOMapping(N,U);const z=e.render.frame;l[N.id]!==z&&(x(N),l[N.id]=z)}function v(N){const C=m();N.__bindingPointIndex=C;const E=s.createBuffer(),U=N.__size,z=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,U,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,E),E}function m(){for(let N=0;N<d;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const C=o[N.id],E=N.uniforms,U=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let z=0,B=E.length;z<B;z++){const k=Array.isArray(E[z])?E[z]:[E[z]];for(let R=0,I=k.length;R<I;R++){const H=k[R];if(y(H,z,R,U)===!0){const te=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let le=0;for(let ne=0;ne<Q.length;ne++){const ee=Q[ne],oe=w(ee);typeof ee=="number"||typeof ee=="boolean"?(H.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,te+le,H.__data)):ee.isMatrix3?(H.__data[0]=ee.elements[0],H.__data[1]=ee.elements[1],H.__data[2]=ee.elements[2],H.__data[3]=0,H.__data[4]=ee.elements[3],H.__data[5]=ee.elements[4],H.__data[6]=ee.elements[5],H.__data[7]=0,H.__data[8]=ee.elements[6],H.__data[9]=ee.elements[7],H.__data[10]=ee.elements[8],H.__data[11]=0):(ee.toArray(H.__data,le),le+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(N,C,E,U){const z=N.value,B=C+"_"+E;if(U[B]===void 0)return typeof z=="number"||typeof z=="boolean"?U[B]=z:U[B]=z.clone(),!0;{const k=U[B];if(typeof z=="number"||typeof z=="boolean"){if(k!==z)return U[B]=z,!0}else if(k.equals(z)===!1)return k.copy(z),!0}return!1}function M(N){const C=N.uniforms;let E=0;const U=16;for(let B=0,k=C.length;B<k;B++){const R=Array.isArray(C[B])?C[B]:[C[B]];for(let I=0,H=R.length;I<H;I++){const te=R[I],Q=Array.isArray(te.value)?te.value:[te.value];for(let le=0,ne=Q.length;le<ne;le++){const ee=Q[le],oe=w(ee),F=E%U,ce=F%oe.boundary,L=F+ce;E+=ce,L!==0&&U-L<oe.storage&&(E+=U-L),te.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=E,E+=oe.storage}}}const z=E%U;return z>0&&(E+=U-z),N.__size=E,N.__cache={},this}function w(N){const C={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(C.boundary=4,C.storage=4):N.isVector2?(C.boundary=8,C.storage=8):N.isVector3||N.isColor?(C.boundary=16,C.storage=12):N.isVector4?(C.boundary=16,C.storage=16):N.isMatrix3?(C.boundary=48,C.storage=48):N.isMatrix4?(C.boundary=64,C.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),C}function S(N){const C=N.target;C.removeEventListener("dispose",S);const E=c.indexOf(C.__bindingPointIndex);c.splice(E,1),s.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function _(){for(const N in o)s.deleteBuffer(o[N]);c=[],o={},l={}}return{bind:f,update:p,dispose:_}}class iT{constructor(e={}){const{canvas:t=iy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),w=new Int32Array(4);let S=null,_=null;const N=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1;this._outputColorSpace=si;let z=0,B=0,k=null,R=-1,I=null;const H=new kt,te=new kt;let Q=null;const le=new gt(0);let ne=0,ee=t.width,oe=t.height,F=1,ce=null,L=null;const q=new kt(0,0,ee,oe),_e=new kt(0,0,ee,oe);let Ne=!1;const Re=new th;let ie=!1,pe=!1;const ue=new jt,Ce=new W,Oe=new kt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function pt(){return k===null?F:1}let G=r;function It(P,Z){return t.getContext(P,Z)}try{const P={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jf}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Se,!1),G===null){const Z="webgl2";if(G=It(Z,P),G===null)throw It(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let tt,wt,Qe,Ft,ze,ft,Ht,Gt,D,A,J,fe,xe,de,Je,be,He,Ke,Ee,De,at,$e,Ie,ht;function j(){tt=new hE(G),tt.init(),$e=new $1(G,tt),wt=new oE(G,tt,e,$e),Qe=new Y1(G,tt),wt.reversedDepthBuffer&&x&&Qe.buffers.depth.setReversed(!0),Ft=new gE(G),ze=new D1,ft=new Z1(G,tt,Qe,ze,wt,$e,Ft),Ht=new lE(E),Gt=new fE(E),D=new MS(G),Ie=new rE(G,D),A=new pE(G,D,Ft,Ie),J=new xE(G,A,D,Ft),Ee=new vE(G,wt,ft),be=new aE(ze),fe=new L1(E,Ht,Gt,tt,wt,Ie,be),xe=new tT(E,ze),de=new k1,Je=new G1(tt),Ke=new iE(E,Ht,Gt,Qe,J,y,f),He=new j1(E,J,wt),ht=new nT(G,Ft,wt,Qe),De=new sE(G,tt,Ft),at=new mE(G,tt,Ft),Ft.programs=fe.programs,E.capabilities=wt,E.extensions=tt,E.properties=ze,E.renderLists=de,E.shadowMap=He,E.state=Qe,E.info=Ft}j();const Me=new Q1(E,G);this.xr=Me,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const P=tt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=tt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(ee,oe,!1))},this.getSize=function(P){return P.set(ee,oe)},this.setSize=function(P,Z,se=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=P,oe=Z,t.width=Math.floor(P*F),t.height=Math.floor(Z*F),se===!0&&(t.style.width=P+"px",t.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(ee*F,oe*F).floor()},this.setDrawingBufferSize=function(P,Z,se){ee=P,oe=Z,F=se,t.width=Math.floor(P*se),t.height=Math.floor(Z*se),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(q)},this.setViewport=function(P,Z,se,ae){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,Z,se,ae),Qe.viewport(H.copy(q).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(_e)},this.setScissor=function(P,Z,se,ae){P.isVector4?_e.set(P.x,P.y,P.z,P.w):_e.set(P,Z,se,ae),Qe.scissor(te.copy(_e).multiplyScalar(F).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(P){Qe.setScissorTest(Ne=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){L=P},this.getClearColor=function(P){return P.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(P=!0,Z=!0,se=!0){let ae=0;if(P){let X=!1;if(k!==null){const we=k.texture.format;X=we===Kf||we===Jf||we===qf}if(X){const we=k.texture.type,Pe=we===Ai||we===ls||we===ca||we===ua||we===Zf||we===$f,Ge=Ke.getClearColor(),ke=Ke.getClearAlpha(),st=Ge.r,lt=Ge.g,et=Ge.b;Pe?(M[0]=st,M[1]=lt,M[2]=et,M[3]=ke,G.clearBufferuiv(G.COLOR,0,M)):(w[0]=st,w[1]=lt,w[2]=et,w[3]=ke,G.clearBufferiv(G.COLOR,0,w))}else ae|=G.COLOR_BUFFER_BIT}Z&&(ae|=G.DEPTH_BUFFER_BIT),se&&(ae|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ke.dispose(),de.dispose(),Je.dispose(),ze.dispose(),Ht.dispose(),Gt.dispose(),J.dispose(),Ie.dispose(),ht.dispose(),fe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",vn),Me.removeEventListener("sessionend",fs),Hn.stop()};function Ae(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const P=Ft.autoReset,Z=He.enabled,se=He.autoUpdate,ae=He.needsUpdate,X=He.type;j(),Ft.autoReset=P,He.enabled=Z,He.autoUpdate=se,He.needsUpdate=ae,He.type=X}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function he(P){const Z=P.target;Z.removeEventListener("dispose",he),Xe(Z)}function Xe(P){dt(P),ze.remove(P)}function dt(P){const Z=ze.get(P).programs;Z!==void 0&&(Z.forEach(function(se){fe.releaseProgram(se)}),P.isShaderMaterial&&fe.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,se,ae,X,we){Z===null&&(Z=ot);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,Ge=Pi(P,Z,se,ae,X);Qe.setMaterial(ae,Pe);let ke=se.index,st=1;if(ae.wireframe===!0){if(ke=A.getWireframeAttribute(se),ke===void 0)return;st=2}const lt=se.drawRange,et=se.attributes.position;let ct=lt.start*st,Pt=(lt.start+lt.count)*st;we!==null&&(ct=Math.max(ct,we.start*st),Pt=Math.min(Pt,(we.start+we.count)*st)),ke!==null?(ct=Math.max(ct,0),Pt=Math.min(Pt,ke.count)):et!=null&&(ct=Math.max(ct,0),Pt=Math.min(Pt,et.count));const Tt=Pt-ct;if(Tt<0||Tt===1/0)return;Ie.setup(X,ae,Ge,se,ke);let Ot,Lt=De;if(ke!==null&&(Ot=D.get(ke),Lt=at,Lt.setIndex(Ot)),X.isMesh)ae.wireframe===!0?(Qe.setLineWidth(ae.wireframeLinewidth*pt()),Lt.setMode(G.LINES)):Lt.setMode(G.TRIANGLES);else if(X.isLine){let nt=ae.linewidth;nt===void 0&&(nt=1),Qe.setLineWidth(nt*pt()),X.isLineSegments?Lt.setMode(G.LINES):X.isLineLoop?Lt.setMode(G.LINE_LOOP):Lt.setMode(G.LINE_STRIP)}else X.isPoints?Lt.setMode(G.POINTS):X.isSprite&&Lt.setMode(G.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)to("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const nt=X._multiDrawStarts,Dt=X._multiDrawCounts,_t=X._multiDrawCount,nn=ke?D.get(ke).bytesPerElement:1,oi=ze.get(ae).currentProgram.getUniforms();for(let bn=0;bn<_t;bn++)oi.setValue(G,"_gl_DrawID",bn),Lt.render(nt[bn]/nn,Dt[bn])}else if(X.isInstancedMesh)Lt.renderInstances(ct,Tt,X.count);else if(se.isInstancedBufferGeometry){const nt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Dt=Math.min(se.instanceCount,nt);Lt.renderInstances(ct,Tt,Dt)}else Lt.render(ct,Tt)};function Nt(P,Z,se){P.transparent===!0&&P.side===gi&&P.forceSinglePass===!1?(P.side=zn,P.needsUpdate=!0,ps(P,Z,se),P.side=Nr,P.needsUpdate=!0,ps(P,Z,se),P.side=gi):ps(P,Z,se)}this.compile=function(P,Z,se=null){se===null&&(se=P),_=Je.get(se),_.init(Z),C.push(_),se.traverseVisible(function(X){X.isLight&&X.layers.test(Z.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),P!==se&&P.traverseVisible(function(X){X.isLight&&X.layers.test(Z.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const ae=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Ge=we[Pe];Nt(Ge,se,X),ae.add(Ge)}else Nt(we,se,X),ae.add(we)}),_=C.pop(),ae},this.compileAsync=function(P,Z,se=null){const ae=this.compile(P,Z,se);return new Promise(X=>{function we(){if(ae.forEach(function(Pe){ze.get(Pe).currentProgram.isReady()&&ae.delete(Pe)}),ae.size===0){X(P);return}setTimeout(we,10)}tt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Et=null;function Jn(P){Et&&Et(P)}function vn(){Hn.stop()}function fs(){Hn.start()}const Hn=new ev;Hn.setAnimationLoop(Jn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(P){Et=P,Me.setAnimationLoop(P),P===null?Hn.stop():Hn.start()},Me.addEventListener("sessionstart",vn),Me.addEventListener("sessionend",fs),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(Z),Z=Me.getCamera()),P.isScene===!0&&P.onBeforeRender(E,P,Z,k),_=Je.get(P,C.length),_.init(Z),C.push(_),ue.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Re.setFromProjectionMatrix(ue,bi,Z.reversedDepth),pe=this.localClippingEnabled,ie=be.init(this.clippingPlanes,pe),S=de.get(P,N.length),S.init(),N.push(S),Me.enabled===!0&&Me.isPresenting===!0){const we=E.xr.getDepthSensingMesh();we!==null&&go(we,Z,-1/0,E.sortObjects)}go(P,Z,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(ce,L),Rt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Rt&&Ke.addToRenderList(S,P),this.info.render.frame++,ie===!0&&be.beginShadows();const se=_.state.shadowsArray;He.render(se,P,Z),ie===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,X=S.transmissive;if(_.setupLights(),Z.isArrayCamera){const we=Z.cameras;if(X.length>0)for(let Pe=0,Ge=we.length;Pe<Ge;Pe++){const ke=we[Pe];Dr(ae,X,P,ke)}Rt&&Ke.render(P);for(let Pe=0,Ge=we.length;Pe<Ge;Pe++){const ke=we[Pe];tr(S,P,ke,ke.viewport)}}else X.length>0&&Dr(ae,X,P,Z),Rt&&Ke.render(P),tr(S,P,Z);k!==null&&B===0&&(ft.updateMultisampleRenderTarget(k),ft.updateRenderTargetMipmap(k)),P.isScene===!0&&P.onAfterRender(E,P,Z),Ie.resetDefaultState(),R=-1,I=null,C.pop(),C.length>0?(_=C[C.length-1],ie===!0&&be.setGlobalState(E.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function go(P,Z,se,ae){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)_.pushLight(P),P.castShadow&&_.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Re.intersectsSprite(P)){ae&&Oe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ue);const Pe=J.update(P),Ge=P.material;Ge.visible&&S.push(P,Pe,Ge,se,Oe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Re.intersectsObject(P))){const Pe=J.update(P),Ge=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Oe.copy(P.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Oe.copy(Pe.boundingSphere.center)),Oe.applyMatrix4(P.matrixWorld).applyMatrix4(ue)),Array.isArray(Ge)){const ke=Pe.groups;for(let st=0,lt=ke.length;st<lt;st++){const et=ke[st],ct=Ge[et.materialIndex];ct&&ct.visible&&S.push(P,Pe,ct,se,Oe.z,et)}}else Ge.visible&&S.push(P,Pe,Ge,se,Oe.z,null)}}const we=P.children;for(let Pe=0,Ge=we.length;Pe<Ge;Pe++)go(we[Pe],Z,se,ae)}function tr(P,Z,se,ae){const X=P.opaque,we=P.transmissive,Pe=P.transparent;_.setupLightsView(se),ie===!0&&be.setGlobalState(E.clippingPlanes,se),ae&&Qe.viewport(H.copy(ae)),X.length>0&&Ii(X,Z,se),we.length>0&&Ii(we,Z,se),Pe.length>0&&Ii(Pe,Z,se),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Dr(P,Z,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ae.id]===void 0&&(_.state.transmissionRenderTarget[ae.id]=new cs(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?va:Ai,minFilter:as,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const we=_.state.transmissionRenderTarget[ae.id],Pe=ae.viewport||H;we.setSize(Pe.z*E.transmissionResolutionScale,Pe.w*E.transmissionResolutionScale);const Ge=E.getRenderTarget(),ke=E.getActiveCubeFace(),st=E.getActiveMipmapLevel();E.setRenderTarget(we),E.getClearColor(le),ne=E.getClearAlpha(),ne<1&&E.setClearColor(16777215,.5),E.clear(),Rt&&Ke.render(se);const lt=E.toneMapping;E.toneMapping=Pr;const et=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),_.setupLightsView(ae),ie===!0&&be.setGlobalState(E.clippingPlanes,ae),Ii(P,se,ae),ft.updateMultisampleRenderTarget(we),ft.updateRenderTargetMipmap(we),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Pt=0,Tt=Z.length;Pt<Tt;Pt++){const Ot=Z[Pt],Lt=Ot.object,nt=Ot.geometry,Dt=Ot.material,_t=Ot.group;if(Dt.side===gi&&Lt.layers.test(ae.layers)){const nn=Dt.side;Dt.side=zn,Dt.needsUpdate=!0,hs(Lt,se,ae,nt,Dt,_t),Dt.side=nn,Dt.needsUpdate=!0,ct=!0}}ct===!0&&(ft.updateMultisampleRenderTarget(we),ft.updateRenderTargetMipmap(we))}E.setRenderTarget(Ge,ke,st),E.setClearColor(le,ne),et!==void 0&&(ae.viewport=et),E.toneMapping=lt}function Ii(P,Z,se){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let X=0,we=P.length;X<we;X++){const Pe=P[X],Ge=Pe.object,ke=Pe.geometry,st=Pe.group;let lt=Pe.material;lt.allowOverride===!0&&ae!==null&&(lt=ae),Ge.layers.test(se.layers)&&hs(Ge,Z,se,ke,lt,st)}}function hs(P,Z,se,ae,X,we){P.onBeforeRender(E,Z,se,ae,X,we),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(E,Z,se,ae,P,we),X.transparent===!0&&X.side===gi&&X.forceSinglePass===!1?(X.side=zn,X.needsUpdate=!0,E.renderBufferDirect(se,Z,ae,X,P,we),X.side=Nr,X.needsUpdate=!0,E.renderBufferDirect(se,Z,ae,X,P,we),X.side=gi):E.renderBufferDirect(se,Z,ae,X,P,we),P.onAfterRender(E,Z,se,ae,X,we)}function ps(P,Z,se){Z.isScene!==!0&&(Z=ot);const ae=ze.get(P),X=_.state.lights,we=_.state.shadowsArray,Pe=X.state.version,Ge=fe.getParameters(P,X.state,we,Z,se),ke=fe.getProgramCacheKey(Ge);let st=ae.programs;ae.environment=P.isMeshStandardMaterial?Z.environment:null,ae.fog=Z.fog,ae.envMap=(P.isMeshStandardMaterial?Gt:Ht).get(P.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,st===void 0&&(P.addEventListener("dispose",he),st=new Map,ae.programs=st);let lt=st.get(ke);if(lt!==void 0){if(ae.currentProgram===lt&&ae.lightsStateVersion===Pe)return Ma(P,Ge),lt}else Ge.uniforms=fe.getUniforms(P),P.onBeforeCompile(Ge,E),lt=fe.acquireProgram(Ge,ke),st.set(ke,lt),ae.uniforms=Ge.uniforms;const et=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(et.clippingPlanes=be.uniform),Ma(P,Ge),ae.needsLights=Ea(P),ae.lightsStateVersion=Pe,ae.needsLights&&(et.ambientLightColor.value=X.state.ambient,et.lightProbe.value=X.state.probe,et.directionalLights.value=X.state.directional,et.directionalLightShadows.value=X.state.directionalShadow,et.spotLights.value=X.state.spot,et.spotLightShadows.value=X.state.spotShadow,et.rectAreaLights.value=X.state.rectArea,et.ltc_1.value=X.state.rectAreaLTC1,et.ltc_2.value=X.state.rectAreaLTC2,et.pointLights.value=X.state.point,et.pointLightShadows.value=X.state.pointShadow,et.hemisphereLights.value=X.state.hemi,et.directionalShadowMap.value=X.state.directionalShadowMap,et.directionalShadowMatrix.value=X.state.directionalShadowMatrix,et.spotShadowMap.value=X.state.spotShadowMap,et.spotLightMatrix.value=X.state.spotLightMatrix,et.spotLightMap.value=X.state.spotLightMap,et.pointShadowMap.value=X.state.pointShadowMap,et.pointShadowMatrix.value=X.state.pointShadowMatrix),ae.currentProgram=lt,ae.uniformsList=null,lt}function Sa(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=uc.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Ma(P,Z){const se=ze.get(P);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.batchingColor=Z.batchingColor,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.instancingMorph=Z.instancingMorph,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function Pi(P,Z,se,ae,X){Z.isScene!==!0&&(Z=ot),ft.resetTextureUnits();const we=Z.fog,Pe=ae.isMeshStandardMaterial?Z.environment:null,Ge=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:oo,ke=(ae.isMeshStandardMaterial?Gt:Ht).get(ae.envMap||Pe),st=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!se.morphAttributes.position,ct=!!se.morphAttributes.normal,Pt=!!se.morphAttributes.color;let Tt=Pr;ae.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Tt=E.toneMapping);const Ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Lt=Ot!==void 0?Ot.length:0,nt=ze.get(ae),Dt=_.state.lights;if(ie===!0&&(pe===!0||P!==I)){const Jt=P===I&&ae.id===R;be.setState(ae,P,Jt)}let _t=!1;ae.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Dt.state.version||nt.outputColorSpace!==Ge||X.isBatchedMesh&&nt.batching===!1||!X.isBatchedMesh&&nt.batching===!0||X.isBatchedMesh&&nt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&nt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&nt.instancing===!1||!X.isInstancedMesh&&nt.instancing===!0||X.isSkinnedMesh&&nt.skinning===!1||!X.isSkinnedMesh&&nt.skinning===!0||X.isInstancedMesh&&nt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&nt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&nt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&nt.instancingMorph===!1&&X.morphTexture!==null||nt.envMap!==ke||ae.fog===!0&&nt.fog!==we||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==be.numPlanes||nt.numIntersection!==be.numIntersection)||nt.vertexAlphas!==st||nt.vertexTangents!==lt||nt.morphTargets!==et||nt.morphNormals!==ct||nt.morphColors!==Pt||nt.toneMapping!==Tt||nt.morphTargetsCount!==Lt)&&(_t=!0):(_t=!0,nt.__version=ae.version);let nn=nt.currentProgram;_t===!0&&(nn=ps(ae,Z,X));let oi=!1,bn=!1,Ur=!1;const zt=nn.getUniforms(),An=nt.uniforms;if(Qe.useProgram(nn.program)&&(oi=!0,bn=!0,Ur=!0),ae.id!==R&&(R=ae.id,bn=!0),oi||I!==P){Qe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),zt.setValue(G,"projectionMatrix",P.projectionMatrix),zt.setValue(G,"viewMatrix",P.matrixWorldInverse);const _n=zt.map.cameraPosition;_n!==void 0&&_n.setValue(G,Ce.setFromMatrixPosition(P.matrixWorld)),wt.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(G,"isOrthographic",P.isOrthographicCamera===!0),I!==P&&(I=P,bn=!0,Ur=!0)}if(X.isSkinnedMesh){zt.setOptional(G,X,"bindMatrix"),zt.setOptional(G,X,"bindMatrixInverse");const Jt=X.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),zt.setValue(G,"boneTexture",Jt.boneTexture,ft))}X.isBatchedMesh&&(zt.setOptional(G,X,"batchingTexture"),zt.setValue(G,"batchingTexture",X._matricesTexture,ft),zt.setOptional(G,X,"batchingIdTexture"),zt.setValue(G,"batchingIdTexture",X._indirectTexture,ft),zt.setOptional(G,X,"batchingColorTexture"),X._colorsTexture!==null&&zt.setValue(G,"batchingColorTexture",X._colorsTexture,ft));const xn=se.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Ee.update(X,se,nn),(bn||nt.receiveShadow!==X.receiveShadow)&&(nt.receiveShadow=X.receiveShadow,zt.setValue(G,"receiveShadow",X.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(An.envMap.value=ke,An.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Z.environment!==null&&(An.envMapIntensity.value=Z.environmentIntensity),bn&&(zt.setValue(G,"toneMappingExposure",E.toneMappingExposure),nt.needsLights&&wa(An,Ur),we&&ae.fog===!0&&xe.refreshFogUniforms(An,we),xe.refreshMaterialUniforms(An,ae,F,oe,_.state.transmissionRenderTarget[P.id]),uc.upload(G,Sa(nt),An,ft)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(uc.upload(G,Sa(nt),An,ft),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(G,"center",X.center),zt.setValue(G,"modelViewMatrix",X.modelViewMatrix),zt.setValue(G,"normalMatrix",X.normalMatrix),zt.setValue(G,"modelMatrix",X.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Jt=ae.uniformsGroups;for(let _n=0,kr=Jt.length;_n<kr;_n++){const yt=Jt[_n];ht.update(yt,nn),ht.bind(yt,nn)}}return nn}function wa(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Ea(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(P,Z,se){const ae=ze.get(P);ae.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ze.get(P.texture).__webglTexture=Z,ze.get(P.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:se,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Z){const se=ze.get(P);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0};const Ec=G.createFramebuffer();this.setRenderTarget=function(P,Z=0,se=0){k=P,z=Z,B=se;let ae=!0,X=null,we=!1,Pe=!1;if(P){const ke=ze.get(P);if(ke.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(G.FRAMEBUFFER,null),ae=!1;else if(ke.__webglFramebuffer===void 0)ft.setupRenderTarget(P);else if(ke.__hasExternalTextures)ft.rebindTextures(P,ze.get(P.texture).__webglTexture,ze.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const et=P.depthTexture;if(ke.__boundDepthTexture!==et){if(et!==null&&ze.has(et)&&(P.width!==et.image.width||P.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(P)}}const st=P.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Pe=!0);const lt=ze.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(lt[Z])?X=lt[Z][se]:X=lt[Z],we=!0):P.samples>0&&ft.useMultisampledRTT(P)===!1?X=ze.get(P).__webglMultisampledFramebuffer:Array.isArray(lt)?X=lt[se]:X=lt,H.copy(P.viewport),te.copy(P.scissor),Q=P.scissorTest}else H.copy(q).multiplyScalar(F).floor(),te.copy(_e).multiplyScalar(F).floor(),Q=Ne;if(se!==0&&(X=Ec),Qe.bindFramebuffer(G.FRAMEBUFFER,X)&&ae&&Qe.drawBuffers(P,X),Qe.viewport(H),Qe.scissor(te),Qe.setScissorTest(Q),we){const ke=ze.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ke.__webglTexture,se)}else if(Pe){const ke=Z;for(let st=0;st<P.textures.length;st++){const lt=ze.get(P.textures[st]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+st,lt.__webglTexture,se,ke)}}else if(P!==null&&se!==0){const ke=ze.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ke.__webglTexture,se)}R=-1},this.readRenderTargetPixels=function(P,Z,se,ae,X,we,Pe,Ge=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ze.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(ke=ke[Pe]),ke){Qe.bindFramebuffer(G.FRAMEBUFFER,ke);try{const st=P.textures[Ge],lt=st.format,et=st.type;if(!wt.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-ae&&se>=0&&se<=P.height-X&&(P.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ge),G.readPixels(Z,se,ae,X,$e.convert(lt),$e.convert(et),we))}finally{const st=k!==null?ze.get(k).__webglFramebuffer:null;Qe.bindFramebuffer(G.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(P,Z,se,ae,X,we,Pe,Ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ze.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(ke=ke[Pe]),ke)if(Z>=0&&Z<=P.width-ae&&se>=0&&se<=P.height-X){Qe.bindFramebuffer(G.FRAMEBUFFER,ke);const st=P.textures[Ge],lt=st.format,et=st.type;if(!wt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ct),G.bufferData(G.PIXEL_PACK_BUFFER,we.byteLength,G.STREAM_READ),P.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ge),G.readPixels(Z,se,ae,X,$e.convert(lt),$e.convert(et),0);const Pt=k!==null?ze.get(k).__webglFramebuffer:null;Qe.bindFramebuffer(G.FRAMEBUFFER,Pt);const Tt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ry(G,Tt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ct),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,we),G.deleteBuffer(ct),G.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Z=null,se=0){const ae=Math.pow(2,-se),X=Math.floor(P.image.width*ae),we=Math.floor(P.image.height*ae),Pe=Z!==null?Z.x:0,Ge=Z!==null?Z.y:0;ft.setTexture2D(P,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Pe,Ge,X,we),Qe.unbindTexture()};const Ta=G.createFramebuffer(),ba=G.createFramebuffer();this.copyTextureToTexture=function(P,Z,se=null,ae=null,X=0,we=null){we===null&&(X!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=X,X=0):we=0);let Pe,Ge,ke,st,lt,et,ct,Pt,Tt;const Ot=P.isCompressedTexture?P.mipmaps[we]:P.image;if(se!==null)Pe=se.max.x-se.min.x,Ge=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,st=se.min.x,lt=se.min.y,et=se.isBox3?se.min.z:0;else{const xn=Math.pow(2,-X);Pe=Math.floor(Ot.width*xn),Ge=Math.floor(Ot.height*xn),P.isDataArrayTexture?ke=Ot.depth:P.isData3DTexture?ke=Math.floor(Ot.depth*xn):ke=1,st=0,lt=0,et=0}ae!==null?(ct=ae.x,Pt=ae.y,Tt=ae.z):(ct=0,Pt=0,Tt=0);const Lt=$e.convert(Z.format),nt=$e.convert(Z.type);let Dt;Z.isData3DTexture?(ft.setTexture3D(Z,0),Dt=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ft.setTexture2DArray(Z,0),Dt=G.TEXTURE_2D_ARRAY):(ft.setTexture2D(Z,0),Dt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const _t=G.getParameter(G.UNPACK_ROW_LENGTH),nn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),oi=G.getParameter(G.UNPACK_SKIP_PIXELS),bn=G.getParameter(G.UNPACK_SKIP_ROWS),Ur=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ot.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ot.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,st),G.pixelStorei(G.UNPACK_SKIP_ROWS,lt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,et);const zt=P.isDataArrayTexture||P.isData3DTexture,An=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isDepthTexture){const xn=ze.get(P),Jt=ze.get(Z),_n=ze.get(xn.__renderTarget),kr=ze.get(Jt.__renderTarget);Qe.bindFramebuffer(G.READ_FRAMEBUFFER,_n.__webglFramebuffer),Qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let yt=0;yt<ke;yt++)zt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.get(P).__webglTexture,X,et+yt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.get(Z).__webglTexture,we,Tt+yt)),G.blitFramebuffer(st,lt,Pe,Ge,ct,Pt,Pe,Ge,G.DEPTH_BUFFER_BIT,G.NEAREST);Qe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(X!==0||P.isRenderTargetTexture||ze.has(P)){const xn=ze.get(P),Jt=ze.get(Z);Qe.bindFramebuffer(G.READ_FRAMEBUFFER,Ta),Qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,ba);for(let _n=0;_n<ke;_n++)zt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,xn.__webglTexture,X,et+_n):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,xn.__webglTexture,X),An?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Jt.__webglTexture,we,Tt+_n):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Jt.__webglTexture,we),X!==0?G.blitFramebuffer(st,lt,Pe,Ge,ct,Pt,Pe,Ge,G.COLOR_BUFFER_BIT,G.NEAREST):An?G.copyTexSubImage3D(Dt,we,ct,Pt,Tt+_n,st,lt,Pe,Ge):G.copyTexSubImage2D(Dt,we,ct,Pt,st,lt,Pe,Ge);Qe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else An?P.isDataTexture||P.isData3DTexture?G.texSubImage3D(Dt,we,ct,Pt,Tt,Pe,Ge,ke,Lt,nt,Ot.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(Dt,we,ct,Pt,Tt,Pe,Ge,ke,Lt,Ot.data):G.texSubImage3D(Dt,we,ct,Pt,Tt,Pe,Ge,ke,Lt,nt,Ot):P.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,we,ct,Pt,Pe,Ge,Lt,nt,Ot.data):P.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,we,ct,Pt,Ot.width,Ot.height,Lt,Ot.data):G.texSubImage2D(G.TEXTURE_2D,we,ct,Pt,Pe,Ge,Lt,nt,Ot);G.pixelStorei(G.UNPACK_ROW_LENGTH,_t),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,nn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,oi),G.pixelStorei(G.UNPACK_SKIP_ROWS,bn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ur),we===0&&Z.generateMipmaps&&G.generateMipmap(Dt),Qe.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,se=null,ae=null,X=0){return to('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Z,se,ae,X)},this.initRenderTarget=function(P){ze.get(P).__webglFramebuffer===void 0&&ft.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ft.setTextureCube(P,0):P.isData3DTexture?ft.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ft.setTexture2DArray(P,0):ft.setTexture2D(P,0),Qe.unbindTexture()},this.resetState=function(){z=0,B=0,k=null,Qe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const rT=()=>{const s=ge.useRef(null);return ge.useEffect(()=>{const e=s.current;if(!e)return;const t=new Ry;t.background=new gt(657930);const r=new Zn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=50;const o=new iT({alpha:!1,antialias:!0,powerPreference:"high-performance"});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.shadowMap.enabled=!0,o.shadowMap.type=y0,o.domElement.style.position="absolute",o.domElement.style.top="0",o.domElement.style.left="0",o.domElement.style.width="100%",o.domElement.style.height="100%",o.domElement.style.pointerEvents="none",o.domElement.style.zIndex="0",e.appendChild(o.domElement);const l=()=>{const C=[],E=[new fo(2,2,2),new vc(1.5,32,32),new rh(1.5),new sh(2),new oh(1,.4,16,100)];for(let U=0;U<15;U++){const z=E[Math.floor(Math.random()*E.length)],B=new fS({color:new gt().setHSL(Math.random()*.7+.1,1,.7),transparent:!0,opacity:.1,wireframe:!0,wireframeLinewidth:1}),k=new $n(z,B);k.position.set((Math.random()-.5)*80,(Math.random()-.5)*80,(Math.random()-.5)*80),k.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),k.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02,z:(Math.random()-.5)*.02},floatSpeed:Math.random()*.01+.005,floatOffset:Math.random()*Math.PI*2},C.push(k),t.add(k)}return C},c=()=>{const C=[],E=()=>{const R=new Float32Array(600),I=new Float32Array(600),H=new Float32Array(200);for(let ne=0;ne<200;ne++){R[ne*3]=(Math.random()-.5)*100,R[ne*3+1]=(Math.random()-.5)*100,R[ne*3+2]=(Math.random()-.5)*100;const ee=new gt,oe=[.5,.83,.3,.6];ee.setHSL(oe[Math.floor(Math.random()*oe.length)],1,.7),I[ne*3]=ee.r,I[ne*3+1]=ee.g,I[ne*3+2]=ee.b,H[ne]=Math.random()*2+.5}const te=new Pn;te.setAttribute("position",new qn(R,3)),te.setAttribute("color",new qn(I,3)),te.setAttribute("size",new qn(H,1));const Q=new G0({size:1,vertexColors:!0,transparent:!0,opacity:.8,blending:Yd,sizeAttenuation:!0}),le=new Nd(te,Q);return le.userData={rotationSpeed:{x:5e-4,y:.001,z:3e-4}},t.add(le),le},U=()=>{const R=new kf,I=.5,H=.2,te=5;for(let ne=0;ne<te*2;ne++){const ee=ne%2===0?I:H,oe=ne/(te*2)*Math.PI*2,F=Math.cos(oe)*ee,ce=Math.sin(oe)*ee;ne===0?R.moveTo(F,ce):R.lineTo(F,ce)}R.closePath();const Q=new gc(R),le=new Yi;for(let ne=0;ne<50;ne++){const ee=new sa({color:new gt().setHSL(.3+Math.random()*.1,1,.7),transparent:!0,opacity:.6,side:gi}),oe=new $n(Q,ee);oe.position.set((Math.random()-.5)*100,(Math.random()-.5)*100,(Math.random()-.5)*100),oe.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),oe.scale.set(.5,.5,.5),oe.userData={rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},floatSpeed:Math.random()*.01+.005,floatOffset:Math.random()*Math.PI*2},le.add(oe)}return t.add(le),le},z=()=>{const R=new Yi;for(let I=0;I<30;I++){const H=new vc(.3,16,16),te=new sa({color:new gt().setHSL(.83+Math.random()*.1,1,.7),transparent:!0,opacity:.4}),Q=new $n(H,te);Q.position.set((Math.random()-.5)*120,(Math.random()-.5)*120,(Math.random()-.5)*120),Q.userData={pulsateSpeed:Math.random()*.02+.01,pulsateOffset:Math.random()*Math.PI*2,floatSpeed:Math.random()*.01+.005,floatOffset:Math.random()*Math.PI*2,originalScale:.5+Math.random()*1.5},Q.scale.set(Q.userData.originalScale,Q.userData.originalScale,Q.userData.originalScale),R.add(Q)}return t.add(R),R},B=()=>{const R=new Yi,I=te=>{const Q=new kf,le=.5;for(let ne=0;ne<te;ne++){const ee=ne/te*Math.PI*2,oe=Math.cos(ee)*le,F=Math.sin(ee)*le;ne===0?Q.moveTo(oe,F):Q.lineTo(oe,F)}return Q.closePath(),new gc(Q)},H=[I(3),I(4),I(6),I(8)];for(let te=0;te<40;te++){const Q=H[Math.floor(Math.random()*H.length)],le=new sa({color:new gt().setHSL(.15+Math.random()*.1,1,.7),transparent:!0,opacity:.5,side:gi,wireframe:Math.random()>.5}),ne=new $n(Q,le);ne.position.set((Math.random()-.5)*120,(Math.random()-.5)*120,(Math.random()-.5)*120),ne.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const ee=.5+Math.random()*1.5;ne.scale.set(ee,ee,ee),ne.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02,z:(Math.random()-.5)*.02},floatSpeed:Math.random()*.01+.005,floatOffset:Math.random()*Math.PI*2},R.add(ne)}return t.add(R),R};return C.push(E()),C.push(U()),C.push(z()),C.push(B()),C},d=()=>{const C=[];for(let U=0;U<20;U++){const z=[],B=Math.floor(Math.random()*3)+2;for(let H=0;H<B;H++)z.push(new W((Math.random()-.5)*60,(Math.random()-.5)*60,(Math.random()-.5)*60));const k=new Pn().setFromPoints(z),R=new H0({color:new gt().setHSL(.5+Math.random()*.4,1,.7),transparent:!0,opacity:.3}),I=new Ly(k,R);I.userData={rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01}},C.push(I),t.add(I)}return C},f=new _S(4210752,.4);t.add(f);const p=new xS(16777215,.8);p.position.set(10,10,5),p.castShadow=!0,t.add(p);const v=new gS(65535,1,100);v.position.set(0,0,20),t.add(v);const m=l(),x=c(),y=d();let M=0,w=0;const S=C=>{M=C.clientX/window.innerWidth*2-1,w=-(C.clientY/window.innerHeight)*2+1},_=()=>{requestAnimationFrame(_);const C=Date.now()*.001;m.forEach(E=>{E.rotation.x+=E.userData.rotationSpeed.x,E.rotation.y+=E.userData.rotationSpeed.y,E.rotation.z+=E.userData.rotationSpeed.z,E.position.y+=Math.sin(C*E.userData.floatSpeed+E.userData.floatOffset)*.1,E.rotation.x+=w*.001,E.rotation.y+=M*.001}),x.forEach(E=>{E instanceof Nd&&E.userData&&E.userData.rotationSpeed?(E.rotation.x+=E.userData.rotationSpeed.x,E.rotation.y+=E.userData.rotationSpeed.y,E.rotation.z+=E.userData.rotationSpeed.z):E instanceof Yi&&(E.children.forEach(U=>{if(U.userData&&U.userData.rotationSpeed&&(U.rotation.x+=U.userData.rotationSpeed.x,U.rotation.y+=U.userData.rotationSpeed.y,U.rotation.z+=U.userData.rotationSpeed.z),U.userData&&U.userData.floatSpeed&&(U.position.y+=Math.sin(C*U.userData.floatSpeed+U.userData.floatOffset)*.05),U.userData&&U.userData.pulsateSpeed){const z=U.userData.originalScale+Math.sin(C*U.userData.pulsateSpeed+U.userData.pulsateOffset)*.2;U.scale.set(z,z,z)}}),E.rotation.y+=5e-4),E.rotation&&(E.rotation.x+=w*5e-4,E.rotation.y+=M*5e-4)}),y.forEach(E=>{E.rotation.x+=E.userData.rotationSpeed.x,E.rotation.y+=E.userData.rotationSpeed.y,E.rotation.z+=E.userData.rotationSpeed.z}),r.position.x+=(M*5-r.position.x)*.01,r.position.y+=(w*5-r.position.y)*.01,r.lookAt(t.position),o.render(t,r)},N=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("mousemove",S),window.addEventListener("resize",N),_(),()=>{window.removeEventListener("mousemove",S),window.removeEventListener("resize",N),e&&o.domElement&&e.removeChild(o.domElement),m.forEach(C=>{t.remove(C),C.geometry.dispose(),C.material.dispose()}),x.forEach(C=>{t.remove(C),C instanceof Nd?(C.geometry.dispose(),C.material.dispose()):C instanceof Yi&&C.children.forEach(E=>{E.geometry.dispose(),E.material.dispose()})}),y.forEach(C=>{t.remove(C),C.geometry.dispose(),C.material.dispose()}),o.dispose()}},[]),T.jsx("div",{ref:s,className:"hero-canvas",style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none",overflow:"hidden"}})};function Kg(s,e){if(typeof s=="function")return s(e);s!=null&&(s.current=e)}function sT(...s){return e=>{let t=!1;const r=s.map(o=>{const l=Kg(o,e);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let o=0;o<r.length;o++){const l=r[o];typeof l=="function"?l():Kg(s[o],null)}}}}function ov(s){const e=oT(s),t=ge.forwardRef((r,o)=>{const{children:l,...c}=r,d=ge.Children.toArray(l),f=d.find(lT);if(f){const p=f.props.children,v=d.map(m=>m===f?ge.Children.count(p)>1?ge.Children.only(null):ge.isValidElement(p)?p.props.children:null:m);return T.jsx(e,{...c,ref:o,children:ge.isValidElement(p)?ge.cloneElement(p,void 0,v):null})}return T.jsx(e,{...c,ref:o,children:l})});return t.displayName=`${s}.Slot`,t}var av=ov("Slot");function oT(s){const e=ge.forwardRef((t,r)=>{const{children:o,...l}=t;if(ge.isValidElement(o)){const c=uT(o),d=cT(l,o.props);return o.type!==ge.Fragment&&(d.ref=r?sT(r,c):c),ge.cloneElement(o,d)}return ge.Children.count(o)>1?ge.Children.only(null):null});return e.displayName=`${s}.SlotClone`,e}var aT=Symbol("radix.slottable");function lT(s){return ge.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===aT}function cT(s,e){const t={...e};for(const r in e){const o=s[r],l=e[r];/^on[A-Z]/.test(r)?o&&l?t[r]=(...d)=>{const f=l(...d);return o(...d),f}:o&&(t[r]=o):r==="style"?t[r]={...o,...l}:r==="className"&&(t[r]=[o,l].filter(Boolean).join(" "))}return{...s,...t}}function uT(s){var r,o;let e=(r=Object.getOwnPropertyDescriptor(s.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?s.ref:(e=(o=Object.getOwnPropertyDescriptor(s,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?s.props.ref:s.props.ref||s.ref)}function lv(s){var e,t,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var o=s.length;for(e=0;e<o;e++)s[e]&&(t=lv(s[e]))&&(r&&(r+=" "),r+=t)}else for(t in s)s[t]&&(r&&(r+=" "),r+=t);return r}function cv(){for(var s,e,t=0,r="",o=arguments.length;t<o;t++)(s=arguments[t])&&(e=lv(s))&&(r&&(r+=" "),r+=e);return r}const Qg=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,e0=cv,uv=(s,e)=>t=>{var r;if((e==null?void 0:e.variants)==null)return e0(s,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:l}=e,c=Object.keys(o).map(p=>{const v=t==null?void 0:t[p],m=l==null?void 0:l[p];if(v===null)return null;const x=Qg(v)||Qg(m);return o[p][x]}),d=t&&Object.entries(t).reduce((p,v)=>{let[m,x]=v;return x===void 0||(p[m]=x),p},{}),f=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((p,v)=>{let{class:m,className:x,...y}=v;return Object.entries(y).every(M=>{let[w,S]=M;return Array.isArray(S)?S.includes({...l,...d}[w]):{...l,...d}[w]===S})?[...p,m,x]:p},[]);return e0(s,c,f,t==null?void 0:t.class,t==null?void 0:t.className)},ch="-",dT=s=>{const e=hT(s),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:c=>{const d=c.split(ch);return d[0]===""&&d.length!==1&&d.shift(),dv(d,e)||fT(c)},getConflictingClassGroupIds:(c,d)=>{const f=t[c]||[];return d&&r[c]?[...f,...r[c]]:f}}},dv=(s,e)=>{var c;if(s.length===0)return e.classGroupId;const t=s[0],r=e.nextPart.get(t),o=r?dv(s.slice(1),r):void 0;if(o)return o;if(e.validators.length===0)return;const l=s.join(ch);return(c=e.validators.find(({validator:d})=>d(l)))==null?void 0:c.classGroupId},t0=/^\[(.+)\]$/,fT=s=>{if(t0.test(s)){const e=t0.exec(s)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},hT=s=>{const{theme:e,classGroups:t}=s,r={nextPart:new Map,validators:[]};for(const o in t)Bf(t[o],r,o,e);return r},Bf=(s,e,t,r)=>{s.forEach(o=>{if(typeof o=="string"){const l=o===""?e:n0(e,o);l.classGroupId=t;return}if(typeof o=="function"){if(pT(o)){Bf(o(r),e,t,r);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([l,c])=>{Bf(c,n0(e,l),t,r)})})},n0=(s,e)=>{let t=s;return e.split(ch).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},pT=s=>s.isThemeGetter,mT=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const o=(l,c)=>{t.set(l,c),e++,e>s&&(e=0,r=t,t=new Map)};return{get(l){let c=t.get(l);if(c!==void 0)return c;if((c=r.get(l))!==void 0)return o(l,c),c},set(l,c){t.has(l)?t.set(l,c):o(l,c)}}},Hf="!",Gf=":",gT=Gf.length,vT=s=>{const{prefix:e,experimentalParseClassName:t}=s;let r=o=>{const l=[];let c=0,d=0,f=0,p;for(let M=0;M<o.length;M++){let w=o[M];if(c===0&&d===0){if(w===Gf){l.push(o.slice(f,M)),f=M+gT;continue}if(w==="/"){p=M;continue}}w==="["?c++:w==="]"?c--:w==="("?d++:w===")"&&d--}const v=l.length===0?o:o.substring(f),m=xT(v),x=m!==v,y=p&&p>f?p-f:void 0;return{modifiers:l,hasImportantModifier:x,baseClassName:m,maybePostfixModifierPosition:y}};if(e){const o=e+Gf,l=r;r=c=>c.startsWith(o)?l(c.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:c,maybePostfixModifierPosition:void 0}}if(t){const o=r;r=l=>t({className:l,parseClassName:o})}return r},xT=s=>s.endsWith(Hf)?s.substring(0,s.length-1):s.startsWith(Hf)?s.substring(1):s,_T=s=>{const e=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const o=[];let l=[];return r.forEach(c=>{c[0]==="["||e[c]?(o.push(...l.sort(),c),l=[]):l.push(c)}),o.push(...l.sort()),o}},yT=s=>({cache:mT(s.cacheSize),parseClassName:vT(s),sortModifiers:_T(s),...dT(s)}),ST=/\s+/,MT=(s,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:l}=e,c=[],d=s.trim().split(ST);let f="";for(let p=d.length-1;p>=0;p-=1){const v=d[p],{isExternal:m,modifiers:x,hasImportantModifier:y,baseClassName:M,maybePostfixModifierPosition:w}=t(v);if(m){f=v+(f.length>0?" "+f:f);continue}let S=!!w,_=r(S?M.substring(0,w):M);if(!_){if(!S){f=v+(f.length>0?" "+f:f);continue}if(_=r(M),!_){f=v+(f.length>0?" "+f:f);continue}S=!1}const N=l(x).join(":"),C=y?N+Hf:N,E=C+_;if(c.includes(E))continue;c.push(E);const U=o(_,S);for(let z=0;z<U.length;++z){const B=U[z];c.push(C+B)}f=v+(f.length>0?" "+f:f)}return f};function wT(){let s=0,e,t,r="";for(;s<arguments.length;)(e=arguments[s++])&&(t=fv(e))&&(r&&(r+=" "),r+=t);return r}const fv=s=>{if(typeof s=="string")return s;let e,t="";for(let r=0;r<s.length;r++)s[r]&&(e=fv(s[r]))&&(t&&(t+=" "),t+=e);return t};function ET(s,...e){let t,r,o,l=c;function c(f){const p=e.reduce((v,m)=>m(v),s());return t=yT(p),r=t.cache.get,o=t.cache.set,l=d,d(f)}function d(f){const p=r(f);if(p)return p;const v=MT(f,t);return o(f,v),v}return function(){return l(wT.apply(null,arguments))}}const on=s=>{const e=t=>t[s]||[];return e.isThemeGetter=!0,e},hv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,pv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,TT=/^\d+\/\d+$/,bT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,AT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,CT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,RT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,IT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Js=s=>TT.test(s),xt=s=>!!s&&!Number.isNaN(Number(s)),Ar=s=>!!s&&Number.isInteger(Number(s)),Wd=s=>s.endsWith("%")&&xt(s.slice(0,-1)),ji=s=>bT.test(s),PT=()=>!0,NT=s=>AT.test(s)&&!CT.test(s),mv=()=>!1,LT=s=>RT.test(s),DT=s=>IT.test(s),UT=s=>!We(s)&&!je(s),kT=s=>po(s,xv,mv),We=s=>hv.test(s),ts=s=>po(s,_v,NT),jd=s=>po(s,HT,xt),i0=s=>po(s,gv,mv),FT=s=>po(s,vv,DT),nc=s=>po(s,yv,LT),je=s=>pv.test(s),na=s=>mo(s,_v),OT=s=>mo(s,GT),r0=s=>mo(s,gv),zT=s=>mo(s,xv),BT=s=>mo(s,vv),ic=s=>mo(s,yv,!0),po=(s,e,t)=>{const r=hv.exec(s);return r?r[1]?e(r[1]):t(r[2]):!1},mo=(s,e,t=!1)=>{const r=pv.exec(s);return r?r[1]?e(r[1]):t:!1},gv=s=>s==="position"||s==="percentage",vv=s=>s==="image"||s==="url",xv=s=>s==="length"||s==="size"||s==="bg-size",_v=s=>s==="length",HT=s=>s==="number",GT=s=>s==="family-name",yv=s=>s==="shadow",VT=()=>{const s=on("color"),e=on("font"),t=on("text"),r=on("font-weight"),o=on("tracking"),l=on("leading"),c=on("breakpoint"),d=on("container"),f=on("spacing"),p=on("radius"),v=on("shadow"),m=on("inset-shadow"),x=on("text-shadow"),y=on("drop-shadow"),M=on("blur"),w=on("perspective"),S=on("aspect"),_=on("ease"),N=on("animate"),C=()=>["auto","avoid","all","avoid-page","page","left","right","column"],E=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],U=()=>[...E(),je,We],z=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto","contain","none"],k=()=>[je,We,f],R=()=>[Js,"full","auto",...k()],I=()=>[Ar,"none","subgrid",je,We],H=()=>["auto",{span:["full",Ar,je,We]},Ar,je,We],te=()=>[Ar,"auto",je,We],Q=()=>["auto","min","max","fr",je,We],le=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ne=()=>["start","end","center","stretch","center-safe","end-safe"],ee=()=>["auto",...k()],oe=()=>[Js,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...k()],F=()=>[s,je,We],ce=()=>[...E(),r0,i0,{position:[je,We]}],L=()=>["no-repeat",{repeat:["","x","y","space","round"]}],q=()=>["auto","cover","contain",zT,kT,{size:[je,We]}],_e=()=>[Wd,na,ts],Ne=()=>["","none","full",p,je,We],Re=()=>["",xt,na,ts],ie=()=>["solid","dashed","dotted","double"],pe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ue=()=>[xt,Wd,r0,i0],Ce=()=>["","none",M,je,We],Oe=()=>["none",xt,je,We],ot=()=>["none",xt,je,We],Rt=()=>[xt,je,We],pt=()=>[Js,"full",...k()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ji],breakpoint:[ji],color:[PT],container:[ji],"drop-shadow":[ji],ease:["in","out","in-out"],font:[UT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ji],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ji],shadow:[ji],spacing:["px",xt],text:[ji],"text-shadow":[ji],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Js,We,je,S]}],container:["container"],columns:[{columns:[xt,We,je,d]}],"break-after":[{"break-after":C()}],"break-before":[{"break-before":C()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:U()}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:R()}],"inset-x":[{"inset-x":R()}],"inset-y":[{"inset-y":R()}],start:[{start:R()}],end:[{end:R()}],top:[{top:R()}],right:[{right:R()}],bottom:[{bottom:R()}],left:[{left:R()}],visibility:["visible","invisible","collapse"],z:[{z:[Ar,"auto",je,We]}],basis:[{basis:[Js,"full","auto",d,...k()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[xt,Js,"auto","initial","none",We]}],grow:[{grow:["",xt,je,We]}],shrink:[{shrink:["",xt,je,We]}],order:[{order:[Ar,"first","last","none",je,We]}],"grid-cols":[{"grid-cols":I()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":te()}],"col-end":[{"col-end":te()}],"grid-rows":[{"grid-rows":I()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":te()}],"row-end":[{"row-end":te()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Q()}],"auto-rows":[{"auto-rows":Q()}],gap:[{gap:k()}],"gap-x":[{"gap-x":k()}],"gap-y":[{"gap-y":k()}],"justify-content":[{justify:[...le(),"normal"]}],"justify-items":[{"justify-items":[...ne(),"normal"]}],"justify-self":[{"justify-self":["auto",...ne()]}],"align-content":[{content:["normal",...le()]}],"align-items":[{items:[...ne(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ne(),{baseline:["","last"]}]}],"place-content":[{"place-content":le()}],"place-items":[{"place-items":[...ne(),"baseline"]}],"place-self":[{"place-self":["auto",...ne()]}],p:[{p:k()}],px:[{px:k()}],py:[{py:k()}],ps:[{ps:k()}],pe:[{pe:k()}],pt:[{pt:k()}],pr:[{pr:k()}],pb:[{pb:k()}],pl:[{pl:k()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":k()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":k()}],"space-y-reverse":["space-y-reverse"],size:[{size:oe()}],w:[{w:[d,"screen",...oe()]}],"min-w":[{"min-w":[d,"screen","none",...oe()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[c]},...oe()]}],h:[{h:["screen","lh",...oe()]}],"min-h":[{"min-h":["screen","lh","none",...oe()]}],"max-h":[{"max-h":["screen","lh",...oe()]}],"font-size":[{text:["base",t,na,ts]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,je,jd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Wd,We]}],"font-family":[{font:[OT,We,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,je,We]}],"line-clamp":[{"line-clamp":[xt,"none",je,jd]}],leading:[{leading:[l,...k()]}],"list-image":[{"list-image":["none",je,We]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",je,We]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ie(),"wavy"]}],"text-decoration-thickness":[{decoration:[xt,"from-font","auto",je,ts]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[xt,"auto",je,We]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",je,We]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",je,We]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ce()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:q()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ar,je,We],radial:["",je,We],conic:[Ar,je,We]},BT,FT]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:_e()}],"gradient-via-pos":[{via:_e()}],"gradient-to-pos":[{to:_e()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:Ne()}],"rounded-s":[{"rounded-s":Ne()}],"rounded-e":[{"rounded-e":Ne()}],"rounded-t":[{"rounded-t":Ne()}],"rounded-r":[{"rounded-r":Ne()}],"rounded-b":[{"rounded-b":Ne()}],"rounded-l":[{"rounded-l":Ne()}],"rounded-ss":[{"rounded-ss":Ne()}],"rounded-se":[{"rounded-se":Ne()}],"rounded-ee":[{"rounded-ee":Ne()}],"rounded-es":[{"rounded-es":Ne()}],"rounded-tl":[{"rounded-tl":Ne()}],"rounded-tr":[{"rounded-tr":Ne()}],"rounded-br":[{"rounded-br":Ne()}],"rounded-bl":[{"rounded-bl":Ne()}],"border-w":[{border:Re()}],"border-w-x":[{"border-x":Re()}],"border-w-y":[{"border-y":Re()}],"border-w-s":[{"border-s":Re()}],"border-w-e":[{"border-e":Re()}],"border-w-t":[{"border-t":Re()}],"border-w-r":[{"border-r":Re()}],"border-w-b":[{"border-b":Re()}],"border-w-l":[{"border-l":Re()}],"divide-x":[{"divide-x":Re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ie(),"hidden","none"]}],"divide-style":[{divide:[...ie(),"hidden","none"]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...ie(),"none","hidden"]}],"outline-offset":[{"outline-offset":[xt,je,We]}],"outline-w":[{outline:["",xt,na,ts]}],"outline-color":[{outline:F()}],shadow:[{shadow:["","none",v,ic,nc]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":["none",m,ic,nc]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:Re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[xt,ts]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":Re()}],"inset-ring-color":[{"inset-ring":F()}],"text-shadow":[{"text-shadow":["none",x,ic,nc]}],"text-shadow-color":[{"text-shadow":F()}],opacity:[{opacity:[xt,je,We]}],"mix-blend":[{"mix-blend":[...pe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":pe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[xt]}],"mask-image-linear-from-pos":[{"mask-linear-from":ue()}],"mask-image-linear-to-pos":[{"mask-linear-to":ue()}],"mask-image-linear-from-color":[{"mask-linear-from":F()}],"mask-image-linear-to-color":[{"mask-linear-to":F()}],"mask-image-t-from-pos":[{"mask-t-from":ue()}],"mask-image-t-to-pos":[{"mask-t-to":ue()}],"mask-image-t-from-color":[{"mask-t-from":F()}],"mask-image-t-to-color":[{"mask-t-to":F()}],"mask-image-r-from-pos":[{"mask-r-from":ue()}],"mask-image-r-to-pos":[{"mask-r-to":ue()}],"mask-image-r-from-color":[{"mask-r-from":F()}],"mask-image-r-to-color":[{"mask-r-to":F()}],"mask-image-b-from-pos":[{"mask-b-from":ue()}],"mask-image-b-to-pos":[{"mask-b-to":ue()}],"mask-image-b-from-color":[{"mask-b-from":F()}],"mask-image-b-to-color":[{"mask-b-to":F()}],"mask-image-l-from-pos":[{"mask-l-from":ue()}],"mask-image-l-to-pos":[{"mask-l-to":ue()}],"mask-image-l-from-color":[{"mask-l-from":F()}],"mask-image-l-to-color":[{"mask-l-to":F()}],"mask-image-x-from-pos":[{"mask-x-from":ue()}],"mask-image-x-to-pos":[{"mask-x-to":ue()}],"mask-image-x-from-color":[{"mask-x-from":F()}],"mask-image-x-to-color":[{"mask-x-to":F()}],"mask-image-y-from-pos":[{"mask-y-from":ue()}],"mask-image-y-to-pos":[{"mask-y-to":ue()}],"mask-image-y-from-color":[{"mask-y-from":F()}],"mask-image-y-to-color":[{"mask-y-to":F()}],"mask-image-radial":[{"mask-radial":[je,We]}],"mask-image-radial-from-pos":[{"mask-radial-from":ue()}],"mask-image-radial-to-pos":[{"mask-radial-to":ue()}],"mask-image-radial-from-color":[{"mask-radial-from":F()}],"mask-image-radial-to-color":[{"mask-radial-to":F()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":E()}],"mask-image-conic-pos":[{"mask-conic":[xt]}],"mask-image-conic-from-pos":[{"mask-conic-from":ue()}],"mask-image-conic-to-pos":[{"mask-conic-to":ue()}],"mask-image-conic-from-color":[{"mask-conic-from":F()}],"mask-image-conic-to-color":[{"mask-conic-to":F()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ce()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:q()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",je,We]}],filter:[{filter:["","none",je,We]}],blur:[{blur:Ce()}],brightness:[{brightness:[xt,je,We]}],contrast:[{contrast:[xt,je,We]}],"drop-shadow":[{"drop-shadow":["","none",y,ic,nc]}],"drop-shadow-color":[{"drop-shadow":F()}],grayscale:[{grayscale:["",xt,je,We]}],"hue-rotate":[{"hue-rotate":[xt,je,We]}],invert:[{invert:["",xt,je,We]}],saturate:[{saturate:[xt,je,We]}],sepia:[{sepia:["",xt,je,We]}],"backdrop-filter":[{"backdrop-filter":["","none",je,We]}],"backdrop-blur":[{"backdrop-blur":Ce()}],"backdrop-brightness":[{"backdrop-brightness":[xt,je,We]}],"backdrop-contrast":[{"backdrop-contrast":[xt,je,We]}],"backdrop-grayscale":[{"backdrop-grayscale":["",xt,je,We]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[xt,je,We]}],"backdrop-invert":[{"backdrop-invert":["",xt,je,We]}],"backdrop-opacity":[{"backdrop-opacity":[xt,je,We]}],"backdrop-saturate":[{"backdrop-saturate":[xt,je,We]}],"backdrop-sepia":[{"backdrop-sepia":["",xt,je,We]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":k()}],"border-spacing-x":[{"border-spacing-x":k()}],"border-spacing-y":[{"border-spacing-y":k()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",je,We]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[xt,"initial",je,We]}],ease:[{ease:["linear","initial",_,je,We]}],delay:[{delay:[xt,je,We]}],animate:[{animate:["none",N,je,We]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,je,We]}],"perspective-origin":[{"perspective-origin":U()}],rotate:[{rotate:Oe()}],"rotate-x":[{"rotate-x":Oe()}],"rotate-y":[{"rotate-y":Oe()}],"rotate-z":[{"rotate-z":Oe()}],scale:[{scale:ot()}],"scale-x":[{"scale-x":ot()}],"scale-y":[{"scale-y":ot()}],"scale-z":[{"scale-z":ot()}],"scale-3d":["scale-3d"],skew:[{skew:Rt()}],"skew-x":[{"skew-x":Rt()}],"skew-y":[{"skew-y":Rt()}],transform:[{transform:[je,We,"","none","gpu","cpu"]}],"transform-origin":[{origin:U()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:pt()}],"translate-x":[{"translate-x":pt()}],"translate-y":[{"translate-y":pt()}],"translate-z":[{"translate-z":pt()}],"translate-none":["translate-none"],accent:[{accent:F()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",je,We]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",je,We]}],fill:[{fill:["none",...F()]}],"stroke-w":[{stroke:[xt,na,ts,jd]}],stroke:[{stroke:["none",...F()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},WT=ET(VT);function er(...s){return WT(cv(s))}const jT=uv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Rr({className:s,variant:e,size:t,asChild:r=!1,...o}){const l=r?av:"button";return T.jsx(l,{"data-slot":"button",className:er(jT({variant:e,size:t,className:s})),...o})}/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),YT=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),s0=s=>{const e=YT(s);return e.charAt(0).toUpperCase()+e.slice(1)},Sv=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim(),ZT=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $T={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=ge.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...d},f)=>ge.createElement("svg",{ref:f,...$T,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Sv("lucide",o),...!l&&!ZT(d)&&{"aria-hidden":"true"},...d},[...c.map(([p,v])=>ge.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(s,e)=>{const t=ge.forwardRef(({className:r,...o},l)=>ge.createElement(qT,{ref:l,iconNode:e,className:Sv(`lucide-${XT(s0(s))}`,`lucide-${s}`,r),...o}));return t.displayName=s0(s),t};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],KT=pn("arrow-right",JT);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],eb=pn("arrow-up",QT);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],o0=pn("briefcase",tb);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ks=pn("circle-check-big",nb);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],a0=pn("external-link",ib);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],sb=pn("eye",rb);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],ga=pn("github",ob);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],lb=pn("heart",ab);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],l0=pn("house",cb);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],uh=pn("linkedin",ub);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wc=pn("mail",db);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],hb=pn("map-pin",fb);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],mb=pn("menu",pb);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],c0=pn("message-square",gb);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],xb=pn("phone",vb);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],yb=pn("send",_b);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],u0=pn("user",Sb);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Mv=pn("x",Mb),wb=()=>{const[s,e]=ge.useState(!1),[t,r]=ge.useState(!1);ge.useEffect(()=>{const c=()=>{const d=window.scrollY;r(d>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const o=c=>{const d=document.querySelector(c);d&&(d.scrollIntoView({behavior:"smooth"}),e(!1))},l=()=>{e(!s)};return T.jsx("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-modern ${t?"bg-background/20 backdrop-blur-md border-b border-border/50 shadow-soft":"bg-transparent"}`,children:T.jsxs("div",{className:"container mx-auto px-4",children:[T.jsxs("div",{className:"flex items-center justify-between h-16",children:[T.jsxs("div",{className:"text-xl font-bold nav-text-primary flex items-center gap-2 nav-logo",children:[T.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center text-white font-bold",children:"AH"}),T.jsx("span",{children:"Asad Haye"})]}),T.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[T.jsxs("button",{onClick:()=>o("#home"),className:"nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 flex items-center gap-2 nav-item",children:[T.jsx(l0,{className:"h-4 w-4"}),T.jsx("span",{children:"Home"})]}),T.jsxs("button",{onClick:()=>o("#about"),className:"nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 flex items-center gap-2 nav-item",children:[T.jsx(u0,{className:"h-4 w-4"}),T.jsx("span",{children:"About"})]}),T.jsxs("button",{onClick:()=>o("#projects"),className:"nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 flex items-center gap-2 nav-item",children:[T.jsx(o0,{className:"h-4 w-4"}),T.jsx("span",{children:"Projects"})]}),T.jsxs("button",{onClick:()=>o("#contact"),className:"nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 flex items-center gap-2 nav-item",children:[T.jsx(c0,{className:"h-4 w-4"}),T.jsx("span",{children:"Contact"})]})]}),T.jsx("button",{onClick:l,className:"md:hidden p-2 nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200",children:s?T.jsx(Mv,{className:"h-6 w-6"}):T.jsx(mb,{className:"h-6 w-6"})})]}),T.jsx("div",{className:`md:hidden transition-all duration-300 ease-in-out ${s?"max-h-80 opacity-100 visible":"max-h-0 opacity-0 invisible"}`,children:T.jsxs("div",{className:"py-4 space-y-3 border-t border-border/50 px-2",children:[T.jsxs("button",{onClick:()=>o("#home"),className:"block w-full text-left nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 py-3 px-4 rounded-lg items-center gap-3 hover:bg-primary/10",children:[T.jsx(l0,{className:"h-5 w-5"}),T.jsx("span",{children:"Home"})]}),T.jsxs("button",{onClick:()=>o("#about"),className:"block w-full text-left nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 py-3 px-4 rounded-lg items-center gap-3 hover:bg-primary/10",children:[T.jsx(u0,{className:"h-5 w-5"}),T.jsx("span",{children:"About"})]}),T.jsxs("button",{onClick:()=>o("#projects"),className:"block w-full text-left nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 py-3 px-4 rounded-lg items-center gap-3 hover:bg-primary/10",children:[T.jsx(o0,{className:"h-5 w-5"}),T.jsx("span",{children:"Projects"})]}),T.jsxs("button",{onClick:()=>o("#contact"),className:"block w-full text-left nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 py-3 px-4 rounded-lg items-center gap-3 hover:bg-primary/10",children:[T.jsx(c0,{className:"h-5 w-5"}),T.jsx("span",{children:"Contact"})]}),T.jsxs("div",{className:"flex items-center justify-center gap-4 pt-2 mt-2 border-t border-border/30",children:[T.jsx("a",{href:"#",className:"p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200",children:T.jsx(ga,{className:"h-5 w-5"})}),T.jsx("a",{href:"#",className:"p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200",children:T.jsx(uh,{className:"h-5 w-5"})}),T.jsx("a",{href:"#",className:"p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200",children:T.jsx(wc,{className:"h-5 w-5"})})]})]})})]})})},Eb="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20viewBox='0%200%20400%20400'%20xmlns='http://www.w3.org/2000/svg'%3e%3c!--%20Background%20Circle%20--%3e%3ccircle%20cx='200'%20cy='200'%20r='200'%20fill='%23FF8C38'%20opacity='0.1'/%3e%3ccircle%20cx='200'%20cy='200'%20r='190'%20fill='%23FF8C38'%20opacity='0.05'/%3e%3c!--%20Head%20--%3e%3ccircle%20cx='200'%20cy='150'%20r='90'%20fill='%23FF8C38'%20opacity='0.8'/%3e%3c!--%20Body%20--%3e%3cpath%20d='M200%20250%20Q%20120%20280%20100%20380%20L%20300%20380%20Q%20280%20280%20200%20250'%20fill='%23FF8C38'%20opacity='0.6'/%3e%3c!--%20Decorative%20Elements%20--%3e%3ccircle%20cx='200'%20cy='200'%20r='170'%20fill='none'%20stroke='%23FF8C38'%20stroke-width='2'%20opacity='0.3'%20stroke-dasharray='10%205'/%3e%3ccircle%20cx='200'%20cy='200'%20r='180'%20fill='none'%20stroke='%23FF8C38'%20stroke-width='1'%20opacity='0.2'/%3e%3c/svg%3e",Tb=({texts:s,typingSpeed:e=100,deletingSpeed:t=50,delayBetweenTexts:r=2e3})=>{const[o,l]=ge.useState(0),[c,d]=ge.useState(""),[f,p]=ge.useState(!0),[v,m]=ge.useState(!1);return ge.useEffect(()=>{if(!s||s.length===0)return;let x;const y=s[o];return f&&!v?c.length<y.length?x=setTimeout(()=>{d(y.substring(0,c.length+1))},e):(m(!0),x=setTimeout(()=>{m(!1),p(!1)},r)):!f&&!v&&(c.length>0?x=setTimeout(()=>{d(c.substring(0,c.length-1))},t):(p(!0),l(M=>(M+1)%s.length))),()=>clearTimeout(x)},[s,o,c,f,v,e,t,r]),T.jsxs("span",{className:"typing-animation",children:[c,T.jsx("span",{className:"typing-cursor",children:"|"})]})},bb=()=>{const s=ge.useRef(null),[e,t]=ge.useState({x:0,y:0}),[r,o]=ge.useState(!1);ge.useEffect(()=>{const c=new IntersectionObserver(([d])=>{d.isIntersecting&&o(!0)},{threshold:.1});return s.current&&c.observe(s.current),()=>c.disconnect()},[]),ge.useEffect(()=>{const c=d=>{t({x:d.clientX/window.innerWidth*2-1,y:d.clientY/window.innerHeight*2-1})};return window.addEventListener("mousemove",c),()=>window.removeEventListener("mousemove",c)},[]);const l=()=>{const c=document.getElementById("projects");c&&c.scrollIntoView({behavior:"smooth"})};return T.jsxs("section",{id:"home",ref:s,className:"min-h-screen flex items-center justify-center relative overflow-hidden mt-16",children:[T.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1},children:[T.jsx("div",{className:"absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow",style:{left:`${50+e.x*20}%`,top:`${50+e.y*20}%`,transform:"translate(-50%, -50%) rotate(5deg)",transition:"all 0.3s ease-out",animation:"pulse-slow 8s infinite alternate, float 15s infinite ease-in-out"}}),T.jsx("div",{className:"absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl",style:{left:`${30-e.x*15}%`,top:`${70-e.y*15}%`,transform:"translate(-50%, -50%) rotate(-5deg)",transition:"all 0.3s ease-out",animation:"pulse-slow 10s infinite alternate-reverse, float 20s infinite ease-in-out",animationDelay:"2s"}}),T.jsx("div",{className:"absolute w-32 h-32 bg-gradient-to-r from-primary/10 to-primary/30 rounded-full blur-2xl",style:{right:`${20+e.x*10}%`,top:`${30-e.y*10}%`,transform:"translate(50%, -50%) rotate(15deg)",transition:"all 0.3s ease-out",animation:"pulse-slow 6s infinite alternate, float 12s infinite ease-in-out",animationDelay:"1s"}}),T.jsx("div",{className:"absolute w-8 h-8 bg-primary/40 rounded-full blur-md",style:{left:"25%",top:"40%",animation:"float-particle 20s infinite linear"}}),T.jsx("div",{className:"absolute w-6 h-6 bg-blue-500/40 rounded-full blur-md",style:{right:"15%",bottom:"30%",animation:"float-particle 15s infinite linear reverse",animationDelay:"3s"}}),T.jsx("div",{className:"absolute w-4 h-4 bg-purple-500/40 rounded-full blur-sm",style:{left:"60%",bottom:"20%",animation:"float-particle 25s infinite linear",animationDelay:"5s"}})]}),T.jsx("div",{className:"container mx-auto px-4 text-center z-10 relative hero-content",children:T.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col items-center",children:[T.jsx("div",{className:`mb-8 transition-all duration-1000 delay-100 animate-fade-in-up ${r?"opacity-100 scale-100":"opacity-0 scale-95"}`,children:T.jsx("div",{className:"relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 overflow-hidden rounded-full border-4 border-primary/20 shadow-glow hover:shadow-glow-intense transition-all duration-500",children:T.jsx("img",{src:Eb,alt:"Muhammad Asad Haye",className:"w-full h-full object-cover"})})}),T.jsx("div",{className:"mb-8",children:T.jsxs("h1",{className:"text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none",children:[T.jsx("span",{className:`block transition-all duration-1000 delay-100 animate-fade-in-up heading-primary ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:"MUHAMMAD"}),T.jsx("span",{className:`block transition-all duration-1000 delay-200 animate-fade-in-up heading-primary ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:"ASAD"}),T.jsx("span",{className:`block transition-all duration-1000 delay-300 animate-fade-in-up heading-primary ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:"HAYE"})]})}),T.jsx("div",{className:`mb-6 transition-all duration-1000 delay-400 animate-fade-in-up ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:T.jsxs("p",{className:"text-xl md:text-2xl lg:text-3xl font-light tracking-wider uppercase",children:[T.jsx("span",{className:"inline-block mr-4 subtitle-accent",children:"I am a "}),T.jsx("span",{className:"inline-block subtitle-text text-primary",children:T.jsx(Tb,{texts:["Marketer","E-Commerce Strategist","AI Enthusiast","Digital Innovator"],typingSpeed:80,deletingSpeed:40,delayBetweenTexts:1500})})]})}),T.jsx("div",{className:`mb-12 transition-all duration-1000 delay-450 animate-fade-in-up ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:T.jsx("p",{className:"text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground",children:"Transforming e-commerce strategies with 15+ years of expertise. Specializing in data-driven marketing solutions that deliver measurable results and exceptional customer experiences."})}),T.jsx("div",{className:`mb-16 transition-all duration-1000 delay-500 animate-fade-in-up ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:T.jsx(Rr,{onClick:l,size:"lg",className:"btn-primary hover-lift text-lg font-semibold px-12 py-6",children:T.jsxs("span",{className:"relative z-10 flex items-center btn-text-primary",children:["View My Work",T.jsx(KT,{className:"ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"})]})})}),T.jsxs("div",{className:`flex justify-center space-x-8 transition-all duration-1000 delay-600 animate-fade-in-up ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:[T.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"group relative p-4 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300 overflow-hidden social-icon-container","aria-label":"GitHub Profile",children:[T.jsx("span",{className:"absolute inset-0 bg-primary/10 transform scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"}),T.jsx(ga,{className:"h-6 w-6 transition-all duration-300 social-text group-hover:text-primary group-hover:hover-text-primary relative z-10"})]}),T.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"group relative p-4 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300 overflow-hidden social-icon-container","aria-label":"LinkedIn Profile",children:[T.jsx("span",{className:"absolute inset-0 bg-primary/10 transform scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"}),T.jsx(uh,{className:"h-6 w-6 transition-all duration-300 social-text group-hover:text-primary group-hover:hover-text-primary relative z-10"})]}),T.jsxs("a",{href:"mailto:asad@example.com",className:"group relative p-4 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300 overflow-hidden social-icon-container","aria-label":"Email Contact",children:[T.jsx("span",{className:"absolute inset-0 bg-primary/10 transform scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"}),T.jsx(wc,{className:"h-6 w-6 transition-all duration-300 social-text group-hover:text-primary group-hover:hover-text-primary relative z-10"})]})]})]})}),T.jsx("div",{className:`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:T.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[T.jsx("span",{className:"text-sm uppercase tracking-wider font-light scroll-text",children:"Scroll to explore"}),T.jsx("div",{className:"w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center",children:T.jsx("div",{className:"w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"})})]})}),T.jsx("div",{className:"absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})}),T.jsx("div",{className:"absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})})]})},Zi=ge.forwardRef(function({className:e,...t},r){return T.jsx("div",{ref:r,"data-slot":"card",className:er("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})});function $i({className:s,...e}){return T.jsx("div",{"data-slot":"card-header",className:er("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...e})}function qi({className:s,...e}){return T.jsx("div",{"data-slot":"card-title",className:er("leading-none font-semibold",s),...e})}function Ji({className:s,...e}){return T.jsx("div",{"data-slot":"card-content",className:er("px-6",s),...e})}function Ab(s,e=[]){let t=[];function r(l,c){const d=ge.createContext(c),f=t.length;t=[...t,c];const p=m=>{var _;const{scope:x,children:y,...M}=m,w=((_=x==null?void 0:x[s])==null?void 0:_[f])||d,S=ge.useMemo(()=>M,Object.values(M));return T.jsx(w.Provider,{value:S,children:y})};p.displayName=l+"Provider";function v(m,x){var w;const y=((w=x==null?void 0:x[s])==null?void 0:w[f])||d,M=ge.useContext(y);if(M)return M;if(c!==void 0)return c;throw new Error(`\`${m}\` must be used within \`${l}\``)}return[p,v]}const o=()=>{const l=t.map(c=>ge.createContext(c));return function(d){const f=(d==null?void 0:d[s])||l;return ge.useMemo(()=>({[`__scope${s}`]:{...d,[s]:f}}),[d,f])}};return o.scopeName=s,[r,Cb(o,...e)]}function Cb(...s){const e=s[0];if(s.length===1)return e;const t=()=>{const r=s.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(l){const c=r.reduce((d,{useScope:f,scopeName:p})=>{const m=f(l)[`__scope${p}`];return{...d,...m}},{});return ge.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}x0();var Rb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],wv=Rb.reduce((s,e)=>{const t=ov(`Primitive.${e}`),r=ge.forwardRef((o,l)=>{const{asChild:c,...d}=o,f=c?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),T.jsx(f,{...d,ref:l})});return r.displayName=`Primitive.${e}`,{...s,[e]:r}},{}),dh="Progress",fh=100,[Ib,xA]=Ab(dh),[Pb,Nb]=Ib(dh),Ev=ge.forwardRef((s,e)=>{const{__scopeProgress:t,value:r=null,max:o,getValueLabel:l=Lb,...c}=s;(o||o===0)&&!d0(o)&&console.error(Db(`${o}`,"Progress"));const d=d0(o)?o:fh;r!==null&&!f0(r,d)&&console.error(Ub(`${r}`,"Progress"));const f=f0(r,d)?r:null,p=xc(f)?l(f,d):void 0;return T.jsx(Pb,{scope:t,value:f,max:d,children:T.jsx(wv.div,{"aria-valuemax":d,"aria-valuemin":0,"aria-valuenow":xc(f)?f:void 0,"aria-valuetext":p,role:"progressbar","data-state":Av(f,d),"data-value":f??void 0,"data-max":d,...c,ref:e})})});Ev.displayName=dh;var Tv="ProgressIndicator",bv=ge.forwardRef((s,e)=>{const{__scopeProgress:t,...r}=s,o=Nb(Tv,t);return T.jsx(wv.div,{"data-state":Av(o.value,o.max),"data-value":o.value??void 0,"data-max":o.max,...r,ref:e})});bv.displayName=Tv;function Lb(s,e){return`${Math.round(s/e*100)}%`}function Av(s,e){return s==null?"indeterminate":s===e?"complete":"loading"}function xc(s){return typeof s=="number"}function d0(s){return xc(s)&&!isNaN(s)&&s>0}function f0(s,e){return xc(s)&&!isNaN(s)&&s<=e&&s>=0}function Db(s,e){return`Invalid prop \`max\` of value \`${s}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${fh}\`.`}function Ub(s,e){return`Invalid prop \`value\` of value \`${s}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${fh} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var kb=Ev,Fb=bv;function Ob({className:s,value:e,...t}){return T.jsx(kb,{"data-slot":"progress",className:er("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",s),...t,children:T.jsx(Fb,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(e||0)}%)`}})})}const zb=uv("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Vf({className:s,variant:e,asChild:t=!1,...r}){const o=t?av:"span";return T.jsx(o,{"data-slot":"badge",className:er(zb({variant:e}),s),...r})}const Bb=()=>{const[s,e]=ge.useState(!1),t=ge.useRef(null);ge.useEffect(()=>{const d=new IntersectionObserver(([f])=>{f.isIntersecting&&e(!0)},{threshold:.1});return t.current&&d.observe(t.current),()=>d.disconnect()},[]);const r=[{name:"Marketing Strategy",level:95},{name:"E-Commerce",level:90},{name:"Digital Analytics",level:85},{name:"AI/ML Integration",level:80},{name:"Three.js",level:75},{name:"React/Next.js",level:70}],o=["React","Next.js","Node.js","Shopify","WooCommerce","MedusaJS","AI/ML","Three.js","Adobe Suite","Canva","HuggingFace"],[l,c]=ge.useState({x:0,y:0});return ge.useEffect(()=>{const d=f=>{c({x:f.clientX/window.innerWidth*2-1,y:f.clientY/window.innerHeight*2-1})};return window.addEventListener("mousemove",d),()=>window.removeEventListener("mousemove",d)},[]),T.jsxs("section",{id:"about",className:"min-h-screen flex items-center justify-center relative overflow-hidden mt-16",children:[T.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1},children:[T.jsx("div",{className:"absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl floating-element",style:{left:`${50+l.x*20}%`,top:`${50+l.y*20}%`,transform:"translate(-50%, -50%)",transition:"all 0.3s ease-out"}}),T.jsx("div",{className:"absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl floating-element",style:{left:`${30-l.x*15}%`,top:`${70-l.y*15}%`,transform:"translate(-50%, -50%)",transition:"all 0.3s ease-out",animationDelay:"2s"}})]}),T.jsx("div",{className:"container mx-auto px-4",children:T.jsxs("div",{className:"max-w-6xl mx-auto",children:[T.jsxs("div",{className:"text-center mb-16",children:[T.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 heading-primary",children:"About Me"}),T.jsx("p",{className:"text-xl body-text-secondary max-w-3xl mx-auto",children:"Passionate marketer and e-commerce strategist with expertise in AI integration and modern web technologies."})]}),T.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-start",children:[T.jsxs("div",{ref:t,className:`space-y-6 transition-all duration-1000 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[T.jsxs(Zi,{className:"glass-effect",children:[T.jsx($i,{children:T.jsx(qi,{className:"text-2xl heading-secondary",children:"My Journey"})}),T.jsxs(Ji,{className:"space-y-4",children:[T.jsx("p",{className:"body-text-secondary leading-relaxed",children:"I'm Muhammad Asad Haye, a results-driven marketing professional with over 8 years of experience in digital marketing and e-commerce strategy. My passion lies in leveraging cutting-edge technologies to create innovative marketing solutions."}),T.jsx("p",{className:"body-text-secondary leading-relaxed",children:"From traditional marketing campaigns to AI-powered automation, I've helped businesses across various industries achieve remarkable growth and market presence."}),T.jsx("p",{className:"body-text-secondary leading-relaxed",children:"When I'm not optimizing conversion rates or analyzing market trends, you'll find me exploring the latest in AI technology, building interactive web experiences, or mentoring the next generation of digital marketers."})]})]}),T.jsxs(Zi,{className:"glass-effect",children:[T.jsx($i,{children:T.jsx(qi,{className:"text-2xl heading-secondary",children:"Core Skills"})}),T.jsx(Ji,{className:"space-y-4",children:r.map(d=>T.jsxs("div",{className:"space-y-2",children:[T.jsxs("div",{className:"flex justify-between items-center",children:[T.jsx("span",{className:"font-medium body-text-primary",children:d.name}),T.jsxs("span",{className:"text-sm body-text-secondary",children:[d.level,"%"]})]}),T.jsx(Ob,{value:d.level,className:"h-2"})]},d.name))})]})]}),T.jsxs("div",{className:`space-y-6 transition-all duration-1000 delay-300 ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[T.jsxs(Zi,{className:"glass-effect",children:[T.jsx($i,{children:T.jsx(qi,{className:"text-2xl heading-secondary",children:"Key Achievements"})}),T.jsx(Ji,{children:T.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[T.jsxs("div",{className:"text-center",children:[T.jsx("div",{className:"text-3xl font-bold text-primary-bright mb-2",children:"150+"}),T.jsx("div",{className:"text-sm body-text-secondary",children:"Campaigns Managed"})]}),T.jsxs("div",{className:"text-center",children:[T.jsx("div",{className:"text-3xl font-bold text-primary-bright mb-2",children:"$2M+"}),T.jsx("div",{className:"text-sm body-text-secondary",children:"Revenue Generated"})]}),T.jsxs("div",{className:"text-center",children:[T.jsx("div",{className:"text-3xl font-bold text-primary-bright mb-2",children:"85%"}),T.jsx("div",{className:"text-sm body-text-secondary",children:"Avg. Conversion Rate"})]}),T.jsxs("div",{className:"text-center",children:[T.jsx("div",{className:"text-3xl font-bold text-primary-bright mb-2",children:"50+"}),T.jsx("div",{className:"text-sm body-text-secondary",children:"Happy Clients"})]})]})})]}),T.jsxs(Zi,{className:"glass-effect",children:[T.jsx($i,{children:T.jsx(qi,{className:"text-2xl heading-secondary",children:"Technologies & Tools"})}),T.jsx(Ji,{children:T.jsx("div",{className:"flex flex-wrap gap-2",children:o.map(d=>T.jsx(Vf,{variant:"secondary",className:"hover:bg-primary hover:text-primary-foreground transition-colors",children:d},d))})})]}),T.jsxs(Zi,{className:"glass-effect",children:[T.jsx($i,{children:T.jsx(qi,{className:"text-2xl heading-secondary",children:"Experience"})}),T.jsxs(Ji,{className:"space-y-4",children:[T.jsxs("div",{className:"border-l-4 border-primary pl-4",children:[T.jsx("h4",{className:"font-semibold body-text-primary",children:"Senior Marketing Manager"}),T.jsx("p",{className:"text-sm body-text-secondary",children:"TechCorp Inc. • 2021-Present"}),T.jsx("p",{className:"text-sm body-text-secondary mt-1",children:"Leading digital marketing initiatives and AI integration projects"})]}),T.jsxs("div",{className:"border-l-4 border-primary pl-4",children:[T.jsx("h4",{className:"font-semibold body-text-primary",children:"E-Commerce Strategist"}),T.jsx("p",{className:"text-sm body-text-secondary",children:"Retail Solutions • 2019-2021"}),T.jsx("p",{className:"text-sm body-text-secondary mt-1",children:"Optimized online stores and implemented conversion strategies"})]}),T.jsxs("div",{className:"border-l-4 border-primary pl-4",children:[T.jsx("h4",{className:"font-semibold body-text-primary",children:"Digital Marketing Specialist"}),T.jsx("p",{className:"text-sm body-text-secondary",children:"Marketing Agency • 2017-2019"}),T.jsx("p",{className:"text-sm body-text-secondary mt-1",children:"Managed social media campaigns and content marketing"})]})]})]})]})]})]})}),T.jsx("div",{className:"absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})}),T.jsx("div",{className:"absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})})]})},Hb=()=>{const[s,e]=ge.useState("all"),[t,r]=ge.useState(!1),o=ge.useRef(null);ge.useEffect(()=>{const m=new IntersectionObserver(([x])=>{x.isIntersecting&&r(!0)},{threshold:.1});return o.current&&m.observe(o.current),()=>m.disconnect()},[]);const l=[{id:1,title:"AVPN Platform",description:"A comprehensive VPN solution with military-grade encryption, global server network, and cross-platform compatibility.",image:"/api/placeholder/600/400",category:"web",technologies:["React","Node.js","Three.js","MongoDB"],liveUrl:"#",githubUrl:"#",featured:!0},{id:2,title:"E-Commerce Analytics Dashboard",description:"Real-time analytics platform for e-commerce businesses with AI-powered insights and predictive analytics.",image:"/api/placeholder/600/400",category:"web",technologies:["Next.js","TypeScript","D3.js","PostgreSQL"],liveUrl:"#",githubUrl:"#",featured:!0},{id:3,title:"AI Marketing Automation",description:"Intelligent marketing automation platform using machine learning for personalized customer engagement.",image:"/api/placeholder/600/400",category:"ai",technologies:["Python","TensorFlow","React","FastAPI"],liveUrl:"#",githubUrl:"#",featured:!1},{id:4,title:"Portfolio Website",description:"Modern portfolio website with Three.js animations and interactive elements.",image:"/api/placeholder/600/400",category:"web",technologies:["React","Three.js","Tailwind CSS","Vite"],liveUrl:"#",githubUrl:"#",featured:!1},{id:5,title:"Digital Marketing Suite",description:"Comprehensive digital marketing tools including SEO, social media, and email marketing automation.",image:"/api/placeholder/600/400",category:"marketing",technologies:["Vue.js","Laravel","Redis","AWS"],liveUrl:"#",githubUrl:"#",featured:!1},{id:6,title:"Blockchain Analytics",description:"Real-time blockchain data analysis and visualization platform for cryptocurrency traders.",image:"/api/placeholder/600/400",category:"ai",technologies:["React","Python","Web3.js","InfluxDB"],liveUrl:"#",githubUrl:"#",featured:!1}],c=[{id:"all",label:"All Projects"},{id:"web",label:"Web Development"},{id:"ai",label:"AI & Machine Learning"},{id:"marketing",label:"Digital Marketing"}],d=l.filter(m=>s==="all"||m.category===s),f=m=>{e(m)},[p,v]=ge.useState({x:0,y:0});return ge.useEffect(()=>{const m=x=>{v({x:x.clientX/window.innerWidth*2-1,y:x.clientY/window.innerHeight*2-1})};return window.addEventListener("mousemove",m),()=>window.removeEventListener("mousemove",m)},[]),T.jsxs("section",{id:"projects",className:"min-h-screen flex items-center justify-center relative overflow-hidden mt-16 section-modern",children:[T.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1},children:[T.jsx("div",{className:"absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl floating-element",style:{left:`${50+p.x*20}%`,top:`${50+p.y*20}%`,transform:"translate(-50%, -50%)",transition:"all 0.3s ease-out"}}),T.jsx("div",{className:"absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl floating-element",style:{left:`${30-p.x*15}%`,top:`${70-p.y*15}%`,transform:"translate(-50%, -50%)",transition:"all 0.3s ease-out",animationDelay:"2s"}})]}),T.jsx("div",{className:"container mx-auto px-4",children:T.jsxs("div",{className:"max-w-7xl mx-auto",children:[T.jsxs("div",{ref:o,className:`text-center mb-16 transition-all duration-1000 animate-fade-in-up ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:[T.jsx("h2",{className:"text-5xl md:text-6xl font-black mb-6 heading-primary",children:"Featured Work"}),T.jsx("p",{className:"text-xl body-text-secondary max-w-3xl mx-auto",children:"A collection of innovative projects that showcase my expertise in web development, AI integration, and digital marketing strategy."})]}),T.jsx("div",{className:`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 animate-fade-in-up ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:c.map(m=>T.jsx("button",{onClick:()=>f(m.id),className:`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${s===m.id?"btn-primary shadow-glow":"btn-secondary"}`,children:m.label},m.id))}),T.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map((m,x)=>T.jsx("div",{className:`group transition-all duration-1000 delay-${Math.min(x*100,500)} animate-fade-in-up ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:T.jsxs(Zi,{className:"card-modern group relative overflow-hidden hover-lift",children:[T.jsxs("div",{className:"relative overflow-hidden aspect-video rounded-t-xl",children:[T.jsx("div",{className:"w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center",children:T.jsx("div",{className:"text-4xl font-bold text-primary/50",children:m.title.charAt(0)})}),T.jsxs("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4",children:[T.jsx(Rr,{asChild:!0,size:"sm",className:"btn-primary",children:T.jsxs("a",{href:m.liveUrl,target:"_blank",rel:"noopener noreferrer",children:[T.jsx(sb,{className:"h-4 w-4 mr-2"}),"View Live"]})}),T.jsx(Rr,{asChild:!0,size:"sm",className:"btn-secondary",children:T.jsxs("a",{href:m.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[T.jsx(ga,{className:"h-4 w-4 mr-2"}),"Code"]})})]}),m.featured&&T.jsx("div",{className:"absolute top-4 left-4",children:T.jsx(Vf,{className:"bg-gradient-to-r from-primary to-purple-500 text-white border-0 shadow-glow",children:"Featured"})})]}),T.jsx($i,{className:"pb-4",children:T.jsx(qi,{className:"text-xl font-bold heading-secondary group-hover:text-primary group-hover:hover-text-primary transition-all duration-300",children:m.title})}),T.jsxs(Ji,{className:"space-y-4",children:[T.jsx("p",{className:"body-text-secondary text-sm leading-relaxed",children:m.description}),T.jsx("div",{className:"flex flex-wrap gap-2",children:m.technologies.map(y=>T.jsx(Vf,{variant:"secondary",className:"text-xs bg-white/5 border border-white/10 text-muted-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors duration-300",children:y},y))}),T.jsxs("div",{className:"flex space-x-3 pt-2",children:[T.jsx(Rr,{asChild:!0,size:"sm",className:"flex-1 btn-primary",children:T.jsxs("a",{href:m.liveUrl,target:"_blank",rel:"noopener noreferrer",children:[T.jsx(a0,{className:"h-4 w-4 mr-2"}),"Live Demo"]})}),T.jsx(Rr,{asChild:!0,size:"sm",className:"flex-1 btn-secondary",children:T.jsxs("a",{href:m.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[T.jsx(ga,{className:"h-4 w-4 mr-2"}),"Source"]})})]})]})]})},m.id))}),T.jsx("div",{className:`text-center mt-16 transition-all duration-1000 delay-700 animate-fade-in-up ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:T.jsxs("div",{className:"max-w-2xl mx-auto",children:[T.jsx("h3",{className:"text-2xl font-bold mb-4 heading-secondary",children:"Ready to start your next project?"}),T.jsx("p",{className:"body-text-secondary mb-6",children:"Let's collaborate to bring your ideas to life with cutting-edge technology and innovative design."}),T.jsx(Rr,{asChild:!0,size:"lg",className:"btn-primary hover-lift px-8 py-4 text-lg font-semibold",children:T.jsxs("a",{href:"#contact",children:["Let's Talk",T.jsx(a0,{className:"ml-2 h-5 w-5"})]})})]})})]})}),T.jsx("div",{className:"absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})}),T.jsx("div",{className:"absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})})]})},Gb=ge.createContext({});function Cv(s){const e=ge.useRef(null);return e.current===null&&(e.current=s()),e.current}const Vb=typeof window<"u",Wb=Vb?ge.useLayoutEffect:ge.useEffect,Rv=ge.createContext(null);function jb(s){return typeof s=="object"&&s!==null}function Xb(s,e,t){if(s instanceof EventTarget)return[s];if(typeof s=="string"){const o=document.querySelectorAll(s);return o?Array.from(o):[]}return Array.from(s)}function Yb(s){return jb(s)&&"offsetHeight"in s}const Zb=ge.createContext({transformPagePoint:s=>s,isStatic:!1,reducedMotion:"never"});class $b extends ge.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=t.offsetParent,o=Yb(r)&&r.offsetWidth||0,l=this.props.sizeRef.current;l.height=t.offsetHeight||0,l.width=t.offsetWidth||0,l.top=t.offsetTop,l.left=t.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function qb({children:s,isPresent:e,anchorX:t,root:r}){const o=ge.useId(),l=ge.useRef(null),c=ge.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=ge.useContext(Zb);return ge.useInsertionEffect(()=>{const{width:f,height:p,top:v,left:m,right:x}=c.current;if(e||!l.current||!f||!p)return;const y=t==="left"?`left: ${m}`:`right: ${x}`;l.current.dataset.motionPopId=o;const M=document.createElement("style");d&&(M.nonce=d);const w=r??document.head;return w.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            ${y}px !important;
            top: ${v}px !important;
          }
        `),()=>{w.contains(M)&&w.removeChild(M)}},[e]),T.jsx($b,{isPresent:e,childRef:l,sizeRef:c,children:ge.cloneElement(s,{ref:l})})}const Jb=({children:s,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:c,anchorX:d,root:f})=>{const p=Cv(Kb),v=ge.useId();let m=!0,x=ge.useMemo(()=>(m=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:y=>{p.set(y,!0);for(const M of p.values())if(!M)return;r&&r()},register:y=>(p.set(y,!1),()=>p.delete(y))}),[t,p,r]);return l&&m&&(x={...x}),ge.useMemo(()=>{p.forEach((y,M)=>p.set(M,!1))},[t]),ge.useEffect(()=>{!t&&!p.size&&r&&r()},[t]),c==="popLayout"&&(s=T.jsx(qb,{isPresent:t,anchorX:d,root:f,children:s})),T.jsx(Rv.Provider,{value:x,children:s})};function Kb(){return new Map}function Qb(s=!0){const e=ge.useContext(Rv);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=ge.useId();ge.useEffect(()=>{if(s)return o(l)},[s]);const c=ge.useCallback(()=>s&&r&&r(l),[l,r,s]);return!t&&r?[!1,c]:[!0]}const rc=s=>s.key||"";function h0(s){const e=[];return ge.Children.forEach(s,t=>{ge.isValidElement(t)&&e.push(t)}),e}const eA=({children:s,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:c=!1,anchorX:d="left",root:f})=>{const[p,v]=Qb(c),m=ge.useMemo(()=>h0(s),[s]),x=c&&!p?[]:m.map(rc),y=ge.useRef(!0),M=ge.useRef(m),w=Cv(()=>new Map),[S,_]=ge.useState(m),[N,C]=ge.useState(m);Wb(()=>{y.current=!1,M.current=m;for(let z=0;z<N.length;z++){const B=rc(N[z]);x.includes(B)?w.delete(B):w.get(B)!==!0&&w.set(B,!1)}},[N,x.length,x.join("-")]);const E=[];if(m!==S){let z=[...m];for(let B=0;B<N.length;B++){const k=N[B],R=rc(k);x.includes(R)||(z.splice(B,0,k),E.push(k))}return l==="wait"&&E.length&&(z=E),C(h0(z)),_(m),null}const{forceRender:U}=ge.useContext(Gb);return T.jsx(T.Fragment,{children:N.map(z=>{const B=rc(z),k=c&&!p?!1:m===N||x.includes(B),R=()=>{if(w.has(B))w.set(B,!0);else return;let I=!0;w.forEach(H=>{H||(I=!1)}),I&&(U==null||U(),C(M.current),c&&(v==null||v()),r&&r())};return T.jsx(Jb,{isPresent:k,initial:!y.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:l,root:f,onExitComplete:k?void 0:R,anchorX:d,children:z},B)})})},tA={some:0,all:1};function nA(s,e,{root:t,margin:r,amount:o="some"}={}){const l=Xb(s),c=new WeakMap,d=p=>{p.forEach(v=>{const m=c.get(v.target);if(v.isIntersecting!==!!m)if(v.isIntersecting){const x=e(v.target,v);typeof x=="function"?c.set(v.target,x):f.unobserve(v.target)}else typeof m=="function"&&(m(v),c.delete(v.target))})},f=new IntersectionObserver(d,{root:t,rootMargin:r,threshold:typeof o=="number"?o:tA[o]});return l.forEach(p=>f.observe(p)),()=>f.disconnect()}function iA(s,{root:e,margin:t,amount:r,once:o=!1,initial:l=!1}={}){const[c,d]=ge.useState(l);return ge.useEffect(()=>{if(!s.current||o&&c)return;const f=()=>(d(!0),o?void 0:()=>d(!1)),p={root:e&&e.current||void 0,margin:t,amount:r};return nA(s.current,f,p)},[e,s,t,o,r]),c}const rA="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIHJ4PSI4IiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgogIDxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSI1OTgiIGhlaWdodD0iMzk4IiByeD0iNyIgc3Ryb2tlPSIjRkY4QzM4IiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBkPSJNMzAwIDIwMCBMMzUwIDI1MCBMMjUwIDI1MCBaIiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuNiIvPgogIDxjaXJjbGUgY3g9IjM1MCIgY3k9IjE1MCIgcj0iMzAiIGZpbGw9IiNGRjhDMzgiIGZpbGwtb3BhY2l0eT0iMC40Ii8+CiAgPHBhdGggZD0iTTE1MCAxMjAgTDI1MCAyMjAgTDUwIDIyMCBaIiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuNSIvPgogIDx0ZXh0IHg9IjMwMCIgeT0iMzIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNGRjhDMzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdhbGxlcnkgSW1hZ2UgMTwvdGV4dD4KPC9zdmc+",sA="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI2MDAiIHJ4PSI4IiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgogIDxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSIzOTgiIGhlaWdodD0iNTk4IiByeD0iNyIgc3Ryb2tlPSIjRkY4QzM4IiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBkPSJNMjAwIDE1MCBMMjUwIDI1MCBMMTUwIDI1MCBaIiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuNiIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjM1MCIgcj0iNTAiIGZpbGw9IiNGRjhDMzgiIGZpbGwtb3BhY2l0eT0iMC40Ii8+CiAgPHBhdGggZD0iTTEwMCA0MDAgTDMwMCA0MDAgTDIwMCA1MDAgWiIgZmlsbD0iI0ZGOEMzOCIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjU1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkY4QzM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HYWxsZXJ5IEltYWdlIDI8L3RleHQ+Cjwvc3ZnPg==",oA="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIHJ4PSI4IiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgogIDxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSI0OTgiIGhlaWdodD0iMjk4IiByeD0iNyIgc3Ryb2tlPSIjRkY4QzM4IiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjcwIiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuMyIvPgogIDxjaXJjbGUgY3g9IjM1MCIgY3k9IjE1MCIgcj0iNzAiIGZpbGw9IiNGRjhDMzgiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CiAgPGNpcmNsZSBjeD0iMjUwIiBjeT0iMTUwIiByPSI0MCIgZmlsbD0iI0ZGOEMzOCIgZmlsbC1vcGFjaXR5PSIwLjciLz4KICA8dGV4dCB4PSIyNTAiIHk9IjI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkY4QzM4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HYWxsZXJ5IEltYWdlIDM8L3RleHQ+Cjwvc3ZnPg==",aA="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDYwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI1MDAiIHJ4PSI4IiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgogIDxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSI1OTgiIGhlaWdodD0iNDk4IiByeD0iNyIgc3Ryb2tlPSIjRkY4QzM4IiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cmVjdCB4PSIxMDAiIHk9IjEwMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIyMCIgZmlsbD0iI0ZGOEMzOCIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KICA8cGF0aCBkPSJNMzAwIDM1MCBMNDAwIDQ1MCBMMjAwIDQ1MCBaIiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuNiIvPgogIDx0ZXh0IHg9IjMwMCIgeT0iNDAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNGRjhDMzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdhbGxlcnkgSW1hZ2UgNDwvdGV4dD4KPC9zdmc+",lA="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIHJ4PSI4IiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgogIDxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSIzOTgiIGhlaWdodD0iMzk4IiByeD0iNyIgc3Ryb2tlPSIjRkY4QzM4IiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjEwMCIgZmlsbD0iI0ZGOEMzOCIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjcwIiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuNSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iNDAiIGZpbGw9IiNGRjhDMzgiIGZpbGwtb3BhY2l0eT0iMC43Ii8+CiAgPHRleHQgeD0iMjAwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI0ZGOEMzOCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R2FsbGVyeSBJbWFnZSA1PC90ZXh0Pgo8L3N2Zz4=",cA="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI0MDAiIHJ4PSI4IiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgogIDxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSI0OTgiIGhlaWdodD0iMzk4IiByeD0iNyIgc3Ryb2tlPSIjRkY4QzM4IiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBkPSJNMTAwIDEwMCBMNDAwIDEwMCBMMjUwIDMwMCBaIiBmaWxsPSIjRkY4QzM4IiBmaWxsLW9wYWNpdHk9IjAuNSIvPgogIDx0ZXh0IHg9IjI1MCIgeT0iMzUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNGRjhDMzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdhbGxlcnkgSW1hZ2UgNjwvdGV4dD4KPC9zdmc+",uA=[{id:1,src:rA,alt:"Gallery Image 1",width:400,height:300},{id:2,src:sA,alt:"Gallery Image 2",width:400,height:600},{id:3,src:oA,alt:"Gallery Image 3",width:500,height:300},{id:4,src:aA,alt:"Gallery Image 4",width:600,height:500},{id:5,src:lA,alt:"Gallery Image 5",width:400,height:400},{id:6,src:cA,alt:"Gallery Image 6",width:500,height:400}],dA=()=>{const[s,e]=ge.useState(null),[t,r]=ge.useState(3);ge.useEffect(()=>{const l=()=>{window.innerWidth<640?r(1):window.innerWidth<1024?r(2):r(3)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const o=()=>{const l=Array.from({length:t},()=>[]);return uA.forEach((c,d)=>{const f=d%t;l[f].push(c)}),l};return T.jsx("section",{id:"gallery",className:"py-20 px-4 md:px-8 lg:px-16 bg-background",children:T.jsxs("div",{className:"max-w-7xl mx-auto",children:[T.jsxs(motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"text-center mb-12",children:[T.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4 text-foreground",children:"Photo Gallery"}),T.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"A collection of my photography work showcasing various projects and creative explorations."})]}),T.jsx("div",{className:"flex flex-wrap -mx-2",children:o().map((l,c)=>T.jsx("div",{className:"px-2 w-full sm:w-1/2 lg:w-1/3",children:T.jsx("div",{className:"flex flex-col space-y-4",children:l.map(d=>T.jsx(motion.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:d.id*.1},viewport:{once:!0},whileHover:{y:-5},className:"overflow-hidden rounded-lg cursor-pointer glass-effect",onClick:()=>e(d),children:T.jsx("img",{src:d.src,alt:d.alt,className:"w-full h-auto object-cover transition-transform duration-500 hover:scale-105"})},d.id))})},c))}),T.jsx(eA,{children:s&&T.jsx(motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:()=>e(null),children:T.jsxs(motion.div,{initial:{scale:.9},animate:{scale:1},exit:{scale:.9,opacity:0},transition:{type:"spring",damping:15},className:"relative max-w-4xl max-h-[90vh] w-full",onClick:l=>l.stopPropagation(),children:[T.jsx("button",{className:"absolute top-4 right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors z-10",onClick:()=>e(null),children:T.jsx(Mv,{className:"w-6 h-6 text-white"})}),T.jsx("img",{src:s.src,alt:s.alt,className:"w-full h-auto max-h-[90vh] object-contain rounded-lg"})]})})})]})})},p0="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KICA8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMTk4IiBoZWlnaHQ9Ijk4IiByeD0iNyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjUwIiByPSIyNSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KICA8cGF0aCBkPSJNMTAwIDMwIEwxNDAgMzAgTDE0MCA3MCBMMTAwIDcwIFoiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CiAgPHRleHQgeD0iMTAwIiB5PSI4NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QnJhbmQgMTwvdGV4dD4KPC9zdmc+",m0="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KICA8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMTk4IiBoZWlnaHQ9Ijk4IiByeD0iNyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBkPSJNNTAgMzAgTDEwMCAzMCBMMTAwIDcwIEw1MCA3MCBaIiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgogIDxjaXJjbGUgY3g9IjEzMCIgY3k9IjUwIiByPSIyMCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KICA8dGV4dCB4PSIxMDAiIHk9Ijg1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC43IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CcmFuZCAyPC90ZXh0Pgo8L3N2Zz4=",g0="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KICA8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMTk4IiBoZWlnaHQ9Ijk4IiByeD0iNyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBkPSJNNjAgMzAgTDE0MCAzMCBMMTAwIDcwIFoiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CiAgPHRleHQgeD0iMTAwIiB5PSI4NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QnJhbmQgMzwvdGV4dD4KPC9zdmc+",v0="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KICA8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMTk4IiBoZWlnaHQ9Ijk4IiByeD0iNyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSI3MCIgY3k9IjUwIiByPSIyMCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KICA8Y2lyY2xlIGN4PSIxMzAiIGN5PSI1MCIgcj0iMjAiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CiAgPHJlY3QgeD0iOTAiIHk9IjMwIiB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CiAgPHRleHQgeD0iMTAwIiB5PSI4NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QnJhbmQgNDwvdGV4dD4KPC9zdmc+",fA=[{id:1,src:p0,alt:"Brand 1",name:"Company One"},{id:2,src:m0,alt:"Brand 2",name:"Company Two"},{id:3,src:g0,alt:"Brand 3",name:"Company Three"},{id:4,src:v0,alt:"Brand 4",name:"Company Four"},{id:5,src:p0,alt:"Brand 5",name:"Company Five"},{id:6,src:m0,alt:"Brand 6",name:"Company Six"},{id:7,src:g0,alt:"Brand 7",name:"Company Seven"},{id:8,src:v0,alt:"Brand 8",name:"Company Eight"}],hA=()=>{const s=ge.useRef(null),e=iA(s,{once:!0,amount:.2}),t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.3}}},r={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",damping:12,stiffness:100}}};return T.jsx("section",{id:"brands",className:"py-20 px-4 md:px-8 lg:px-16 bg-background/50",children:T.jsxs("div",{className:"max-w-7xl mx-auto",children:[T.jsxs(motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"text-center mb-12",children:[T.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4 text-foreground",children:"Brands & Clients"}),T.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"I've had the pleasure of working with these amazing companies on various projects."})]}),T.jsx(motion.div,{ref:s,variants:t,initial:"hidden",animate:e?"visible":"hidden",className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8",children:fA.map(o=>T.jsxs(motion.div,{variants:r,whileHover:{y:-5,scale:1.05},className:"flex flex-col items-center justify-center p-6 rounded-lg glass-effect-dark transition-all duration-300",children:[T.jsx("div",{className:"w-full h-24 flex items-center justify-center mb-4",children:T.jsx("img",{src:o.src,alt:o.alt,className:"max-h-full max-w-full object-contain"})}),T.jsx("p",{className:"text-sm font-medium text-foreground/80",children:o.name})]},o.id))}),T.jsx(motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.5},viewport:{once:!0},className:"mt-16 text-center",children:T.jsx("a",{href:"#contact",className:"inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300",children:"Work with me"})})]})})};function Xd({className:s,type:e,...t}){return T.jsx("input",{type:e,"data-slot":"input",className:er("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",s),...t})}function pA({className:s,...e}){return T.jsx("textarea",{"data-slot":"textarea",className:er("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),...e})}const mA=()=>{const[s,e]=ge.useState({name:"",email:"",subject:"",message:""}),[t,r]=ge.useState(!1),[o,l]=ge.useState(!1),[c,d]=ge.useState(!1),f=ge.useRef(null);ge.useEffect(()=>{const M=new IntersectionObserver(([w])=>{w.isIntersecting&&d(!0)},{threshold:.1});return f.current&&M.observe(f.current),()=>M.disconnect()},[]);const p=M=>{const{name:w,value:S}=M.target;e(_=>({..._,[w]:S}))},v=async M=>{M.preventDefault(),r(!0),await new Promise(w=>setTimeout(w,2e3)),r(!1),l(!0),setTimeout(()=>{l(!1),e({name:"",email:"",subject:"",message:""})},3e3)},m=[{icon:wc,title:"Email",value:"asad@example.com",link:"mailto:asad@example.com"},{icon:xb,title:"Phone",value:"+1 (555) 123-4567",link:"tel:+15551234567"},{icon:hb,title:"Location",value:"New York, NY",link:"#"}],[x,y]=ge.useState({x:0,y:0});return ge.useEffect(()=>{const M=w=>{y({x:w.clientX/window.innerWidth*2-1,y:w.clientY/window.innerHeight*2-1})};return window.addEventListener("mousemove",M),()=>window.removeEventListener("mousemove",M)},[]),T.jsxs("section",{id:"contact",className:"min-h-screen flex items-center justify-center relative overflow-hidden mt-16",children:[T.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1},children:[T.jsx("div",{className:"absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl floating-element",style:{left:`${50+x.x*20}%`,top:`${50+x.y*20}%`,transform:"translate(-50%, -50%)",transition:"all 0.3s ease-out"}}),T.jsx("div",{className:"absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl floating-element",style:{left:`${30-x.x*15}%`,top:`${70-x.y*15}%`,transform:"translate(-50%, -50%)",transition:"all 0.3s ease-out",animationDelay:"2s"}})]}),T.jsx("div",{className:"container mx-auto px-4",children:T.jsxs("div",{className:"max-w-6xl mx-auto",children:[T.jsxs("div",{className:"text-center mb-16",children:[T.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 heading-primary",children:"Get In Touch"}),T.jsx("p",{className:"text-xl body-text-secondary max-w-3xl mx-auto",children:"Ready to start a project or have a question? I'd love to hear from you. Let's discuss how we can work together to achieve your goals."})]}),T.jsxs("div",{className:"grid lg:grid-cols-2 gap-12",children:[T.jsxs("div",{ref:f,className:`space-y-6 transition-all duration-1000 ${c?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,children:[T.jsxs(Zi,{className:"glass-effect",children:[T.jsx($i,{children:T.jsx(qi,{className:"text-2xl heading-secondary",children:"Let's Connect"})}),T.jsxs(Ji,{className:"space-y-6",children:[T.jsx("p",{className:"body-text-secondary leading-relaxed",children:"I'm always open to discussing new opportunities, creative projects, or just having a chat about the latest in tech and marketing."}),T.jsx("div",{className:"space-y-4",children:m.map((M,w)=>T.jsxs("div",{className:"flex items-center space-x-4",children:[T.jsx("div",{className:"p-3 rounded-full bg-primary/10 text-primary",children:T.jsx(M.icon,{className:"h-5 w-5"})}),T.jsxs("div",{children:[T.jsx("h4",{className:"font-medium body-text-primary",children:M.title}),T.jsx("a",{href:M.link,className:"body-text-secondary hover:text-primary hover-text-primary transition-all duration-200",children:M.value})]})]},w))})]})]}),T.jsxs(Zi,{className:"glass-effect",children:[T.jsx($i,{children:T.jsx(qi,{className:"text-2xl heading-secondary",children:"What I Offer"})}),T.jsx(Ji,{className:"space-y-4",children:T.jsxs("div",{className:"space-y-3",children:[T.jsxs("div",{className:"flex items-center space-x-3",children:[T.jsx(Ks,{className:"h-5 w-5 text-primary"}),T.jsx("span",{className:"body-text-primary",children:"Digital Marketing Strategy"})]}),T.jsxs("div",{className:"flex items-center space-x-3",children:[T.jsx(Ks,{className:"h-5 w-5 text-primary"}),T.jsx("span",{className:"body-text-primary",children:"E-Commerce Optimization"})]}),T.jsxs("div",{className:"flex items-center space-x-3",children:[T.jsx(Ks,{className:"h-5 w-5 text-primary"}),T.jsx("span",{className:"body-text-primary",children:"AI Integration Solutions"})]}),T.jsxs("div",{className:"flex items-center space-x-3",children:[T.jsx(Ks,{className:"h-5 w-5 text-primary"}),T.jsx("span",{className:"body-text-primary",children:"Web Development"})]}),T.jsxs("div",{className:"flex items-center space-x-3",children:[T.jsx(Ks,{className:"h-5 w-5 text-primary"}),T.jsx("span",{className:"body-text-primary",children:"Performance Analytics"})]})]})})]})]}),T.jsx("div",{className:`transition-all duration-1000 delay-300 ${c?"opacity-100 translate-x-0":"opacity-0 translate-x-10"}`,children:T.jsxs(Zi,{className:"glass-effect",children:[T.jsx($i,{children:T.jsx(qi,{className:"text-2xl heading-secondary",children:"Send a Message"})}),T.jsx(Ji,{children:o?T.jsxs("div",{className:"text-center py-8",children:[T.jsx(Ks,{className:"h-16 w-16 text-primary mx-auto mb-4"}),T.jsx("h3",{className:"text-xl font-semibold mb-2 heading-secondary",children:"Message Sent!"}),T.jsx("p",{className:"body-text-secondary",children:"Thank you for reaching out. I'll get back to you soon!"})]}):T.jsxs("form",{onSubmit:v,className:"space-y-6",children:[T.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[T.jsxs("div",{children:[T.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-2 body-text-primary",children:"Name *"}),T.jsx(Xd,{id:"name",name:"name",type:"text",required:!0,value:s.name,onChange:p,placeholder:"Your name",className:"w-full"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-2 body-text-primary",children:"Email *"}),T.jsx(Xd,{id:"email",name:"email",type:"email",required:!0,value:s.email,onChange:p,placeholder:"your.email@example.com",className:"w-full"})]})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2 body-text-primary",children:"Subject *"}),T.jsx(Xd,{id:"subject",name:"subject",type:"text",required:!0,value:s.subject,onChange:p,placeholder:"What's this about?",className:"w-full"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"message",className:"block text-sm font-medium mb-2 body-text-primary",children:"Message *"}),T.jsx(pA,{id:"message",name:"message",required:!0,value:s.message,onChange:p,placeholder:"Tell me more about your project or question...",rows:5,className:"w-full resize-none"})]}),T.jsx(Rr,{type:"submit",disabled:t,className:"w-full hover:scale-105 transition-transform duration-200",children:t?T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"}),"Sending..."]}):T.jsxs(T.Fragment,{children:[T.jsx(yb,{className:"h-4 w-4 mr-2"}),"Send Message"]})})]})})]})})]})]})}),T.jsx("div",{className:"absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})}),T.jsx("div",{className:"absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})})]})},gA=()=>{const[s,e]=ge.useState({x:0,y:0});ge.useEffect(()=>{const r=o=>{e({x:o.clientX/window.innerWidth*2-1,y:o.clientY/window.innerHeight*2-1})};return window.addEventListener("mousemove",r),()=>window.removeEventListener("mousemove",r)},[]);const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.jsxs("footer",{className:"min-h-screen flex items-center justify-center relative overflow-hidden mt-16 section-modern relative z-10",children:[T.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1},children:[T.jsx("div",{className:"absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl floating-element",style:{left:`${50+s.x*20}%`,top:`${50+s.y*20}%`,transform:"translate(-50%, -50%)",transition:"all 0.3s ease-out"}}),T.jsx("div",{className:"absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl floating-element",style:{left:`${30-s.x*15}%`,top:`${70-s.y*15}%`,transform:"translate(-50%, -50%)",transition:"all 0.3s ease-out",animationDelay:"2s"}})]}),T.jsx("div",{className:"container mx-auto px-4 py-12",children:T.jsxs("div",{className:"max-w-6xl mx-auto",children:[T.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-8",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-bold heading-accent mb-4",children:"Asad Haye"}),T.jsx("p",{className:"body-text-secondary mb-4",children:"Full-Stack Developer & E-Commerce Strategist specializing in AI integration and digital marketing solutions."}),T.jsxs("div",{className:"flex space-x-4",children:[T.jsx("a",{href:"https://github.com/asadhaye",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300",children:T.jsx(ga,{className:"h-5 w-5 social-text hover:text-primary hover-text-primary"})}),T.jsx("a",{href:"https://linkedin.com/in/asadhaye",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300",children:T.jsx(uh,{className:"h-5 w-5 social-text hover:text-primary hover-text-primary"})}),T.jsx("a",{href:"mailto:asad@asadhaye.com",className:"p-2 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300",children:T.jsx(wc,{className:"h-5 w-5 social-text hover:text-primary hover-text-primary"})})]})]}),T.jsxs("div",{children:[T.jsx("h4",{className:"font-semibold mb-4 heading-secondary",children:"Quick Links"}),T.jsx("div",{className:"space-y-2",children:["Home","About","Projects","Contact"].map(r=>T.jsx("button",{onClick:()=>{const o=document.querySelector(`#${r.toLowerCase()}`);o&&o.scrollIntoView({behavior:"smooth"})},className:"block body-text-secondary hover:text-primary hover-text-primary transition-all duration-200",children:r},r))})]}),T.jsxs("div",{children:[T.jsx("h4",{className:"font-semibold mb-4 heading-secondary",children:"Get In Touch"}),T.jsxs("div",{className:"space-y-2",children:[T.jsx("p",{className:"body-text-secondary",children:"email@asadhaye.com"}),T.jsx("p",{className:"body-text-secondary",children:"+92 (313) 844-4321"}),T.jsx("p",{className:"body-text-secondary",children:"Lahore, Pakistan"})]})]})]}),T.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between pt-8 border-t",children:[T.jsxs("div",{className:"flex items-center body-text-secondary mb-4 md:mb-0",children:[T.jsx("span",{children:"Made with"}),T.jsx(lb,{className:"h-4 w-4 mx-1 text-red-500"}),T.jsx("span",{children:"by Muhammad Asad Haye"})]}),T.jsxs("div",{className:"flex items-center space-x-4",children:[T.jsx("span",{className:"body-text-secondary text-sm",children:"© 2025 All rights reserved"}),T.jsx(Rr,{onClick:t,size:"sm",className:"btn-secondary hover-lift",children:T.jsx(eb,{className:"h-4 w-4"})})]})]})]})}),T.jsx("div",{className:"absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})}),T.jsx("div",{className:"absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:T.jsx("div",{className:"w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"})})]})};function vA(){return ge.useEffect(()=>{document.documentElement.classList.remove("dark")},[]),T.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[T.jsx(rT,{}),T.jsx(wb,{}),T.jsxs("main",{children:[T.jsx("section",{id:"home",children:T.jsx(bb,{})}),T.jsx(Bb,{}),T.jsx(Hb,{}),T.jsx(dA,{}),T.jsx(hA,{}),T.jsx(mA,{})]}),T.jsx(gA,{})]})}m_.createRoot(document.getElementById("root")).render(T.jsx(ge.StrictMode,{children:T.jsx(vA,{})}));
