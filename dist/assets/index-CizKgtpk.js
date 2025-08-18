(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var cp={exports:{}},cu={},fp={exports:{}},zt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function P1(){if(Fv)return zt;Fv=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function _(T){return T===null||typeof T!="object"?null:(T=g&&T[g]||T["@@iterator"],typeof T=="function"?T:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(T,K,_e){this.props=T,this.context=K,this.refs=M,this.updater=_e||v}S.prototype.isReactComponent={},S.prototype.setState=function(T,K){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,K,"setState")},S.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function x(){}x.prototype=S.prototype;function N(T,K,_e){this.props=T,this.context=K,this.refs=M,this.updater=_e||v}var D=N.prototype=new x;D.constructor=N,E(D,S.prototype),D.isPureReactComponent=!0;var w=Array.isArray,I=Object.prototype.hasOwnProperty,U={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function k(T,K,_e){var Pe,ye={},te=null,pe=null;if(K!=null)for(Pe in K.ref!==void 0&&(pe=K.ref),K.key!==void 0&&(te=""+K.key),K)I.call(K,Pe)&&!L.hasOwnProperty(Pe)&&(ye[Pe]=K[Pe]);var le=arguments.length-2;if(le===1)ye.children=_e;else if(1<le){for(var Te=Array(le),Le=0;Le<le;Le++)Te[Le]=arguments[Le+2];ye.children=Te}if(T&&T.defaultProps)for(Pe in le=T.defaultProps,le)ye[Pe]===void 0&&(ye[Pe]=le[Pe]);return{$$typeof:o,type:T,key:te,ref:pe,props:ye,_owner:U.current}}function b(T,K){return{$$typeof:o,type:T.type,key:K,ref:T.ref,props:T.props,_owner:T._owner}}function C(T){return typeof T=="object"&&T!==null&&T.$$typeof===o}function z(T){var K={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(_e){return K[_e]})}var X=/\/+/g;function J(T,K){return typeof T=="object"&&T!==null&&T.key!=null?z(""+T.key):K.toString(36)}function ne(T,K,_e,Pe,ye){var te=typeof T;(te==="undefined"||te==="boolean")&&(T=null);var pe=!1;if(T===null)pe=!0;else switch(te){case"string":case"number":pe=!0;break;case"object":switch(T.$$typeof){case o:case e:pe=!0}}if(pe)return pe=T,ye=ye(pe),T=Pe===""?"."+J(pe,0):Pe,w(ye)?(_e="",T!=null&&(_e=T.replace(X,"$&/")+"/"),ne(ye,K,_e,"",function(Le){return Le})):ye!=null&&(C(ye)&&(ye=b(ye,_e+(!ye.key||pe&&pe.key===ye.key?"":(""+ye.key).replace(X,"$&/")+"/")+T)),K.push(ye)),1;if(pe=0,Pe=Pe===""?".":Pe+":",w(T))for(var le=0;le<T.length;le++){te=T[le];var Te=Pe+J(te,le);pe+=ne(te,K,_e,Te,ye)}else if(Te=_(T),typeof Te=="function")for(T=Te.call(T),le=0;!(te=T.next()).done;)te=te.value,Te=Pe+J(te,le++),pe+=ne(te,K,_e,Te,ye);else if(te==="object")throw K=String(T),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return pe}function se(T,K,_e){if(T==null)return T;var Pe=[],ye=0;return ne(T,Pe,"","",function(te){return K.call(_e,te,ye++)}),Pe}function ee(T){if(T._status===-1){var K=T._result;K=K(),K.then(function(_e){(T._status===0||T._status===-1)&&(T._status=1,T._result=_e)},function(_e){(T._status===0||T._status===-1)&&(T._status=2,T._result=_e)}),T._status===-1&&(T._status=0,T._result=K)}if(T._status===1)return T._result.default;throw T._result}var Q={current:null},F={transition:null},oe={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:F,ReactCurrentOwner:U};return zt.Children={map:se,forEach:function(T,K,_e){se(T,function(){K.apply(this,arguments)},_e)},count:function(T){var K=0;return se(T,function(){K++}),K},toArray:function(T){return se(T,function(K){return K})||[]},only:function(T){if(!C(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},zt.Component=S,zt.Fragment=t,zt.Profiler=r,zt.PureComponent=N,zt.StrictMode=n,zt.Suspense=d,zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,zt.cloneElement=function(T,K,_e){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var Pe=E({},T.props),ye=T.key,te=T.ref,pe=T._owner;if(K!=null){if(K.ref!==void 0&&(te=K.ref,pe=U.current),K.key!==void 0&&(ye=""+K.key),T.type&&T.type.defaultProps)var le=T.type.defaultProps;for(Te in K)I.call(K,Te)&&!L.hasOwnProperty(Te)&&(Pe[Te]=K[Te]===void 0&&le!==void 0?le[Te]:K[Te])}var Te=arguments.length-2;if(Te===1)Pe.children=_e;else if(1<Te){le=Array(Te);for(var Le=0;Le<Te;Le++)le[Le]=arguments[Le+2];Pe.children=le}return{$$typeof:o,type:T.type,key:ye,ref:te,props:Pe,_owner:pe}},zt.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:a,_context:T},T.Consumer=T},zt.createElement=k,zt.createFactory=function(T){var K=k.bind(null,T);return K.type=T,K},zt.createRef=function(){return{current:null}},zt.forwardRef=function(T){return{$$typeof:c,render:T}},zt.isValidElement=C,zt.lazy=function(T){return{$$typeof:p,_payload:{_status:-1,_result:T},_init:ee}},zt.memo=function(T,K){return{$$typeof:h,type:T,compare:K===void 0?null:K}},zt.startTransition=function(T){var K=F.transition;F.transition={};try{T()}finally{F.transition=K}},zt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},zt.useCallback=function(T,K){return Q.current.useCallback(T,K)},zt.useContext=function(T){return Q.current.useContext(T)},zt.useDebugValue=function(){},zt.useDeferredValue=function(T){return Q.current.useDeferredValue(T)},zt.useEffect=function(T,K){return Q.current.useEffect(T,K)},zt.useId=function(){return Q.current.useId()},zt.useImperativeHandle=function(T,K,_e){return Q.current.useImperativeHandle(T,K,_e)},zt.useInsertionEffect=function(T,K){return Q.current.useInsertionEffect(T,K)},zt.useLayoutEffect=function(T,K){return Q.current.useLayoutEffect(T,K)},zt.useMemo=function(T,K){return Q.current.useMemo(T,K)},zt.useReducer=function(T,K,_e){return Q.current.useReducer(T,K,_e)},zt.useRef=function(T){return Q.current.useRef(T)},zt.useState=function(T){return Q.current.useState(T)},zt.useSyncExternalStore=function(T,K,_e){return Q.current.useSyncExternalStore(T,K,_e)},zt.useTransition=function(){return Q.current.useTransition()},zt.version="18.2.0",zt}var Ov;function Rg(){return Ov||(Ov=1,fp.exports=P1()),fp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function D1(){if(zv)return cu;zv=1;var o=Rg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},_=null,v=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(v=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:_,ref:v,props:g,_owner:r.current}}return cu.Fragment=t,cu.jsx=u,cu.jsxs=u,cu}var Bv;function L1(){return Bv||(Bv=1,cp.exports=D1()),cp.exports}var j=L1(),At=Rg(),af={},dp={exports:{}},Ui={},hp={exports:{}},pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function N1(){return Vv||(Vv=1,(function(o){function e(F,oe){var T=F.length;F.push(oe);e:for(;0<T;){var K=T-1>>>1,_e=F[K];if(0<r(_e,oe))F[K]=oe,F[T]=_e,T=K;else break e}}function t(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var oe=F[0],T=F.pop();if(T!==oe){F[0]=T;e:for(var K=0,_e=F.length,Pe=_e>>>1;K<Pe;){var ye=2*(K+1)-1,te=F[ye],pe=ye+1,le=F[pe];if(0>r(te,T))pe<_e&&0>r(le,te)?(F[K]=le,F[pe]=T,K=pe):(F[K]=te,F[ye]=T,K=ye);else if(pe<_e&&0>r(le,T))F[K]=le,F[pe]=T,K=pe;else break e}}return oe}function r(F,oe){var T=F.sortIndex-oe.sortIndex;return T!==0?T:F.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,_=3,v=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(F){for(var oe=t(h);oe!==null;){if(oe.callback===null)n(h);else if(oe.startTime<=F)n(h),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(h)}}function w(F){if(M=!1,D(F),!E)if(t(d)!==null)E=!0,ee(I);else{var oe=t(h);oe!==null&&Q(w,oe.startTime-F)}}function I(F,oe){E=!1,M&&(M=!1,x(k),k=-1),v=!0;var T=_;try{for(D(oe),g=t(d);g!==null&&(!(g.expirationTime>oe)||F&&!z());){var K=g.callback;if(typeof K=="function"){g.callback=null,_=g.priorityLevel;var _e=K(g.expirationTime<=oe);oe=o.unstable_now(),typeof _e=="function"?g.callback=_e:g===t(d)&&n(d),D(oe)}else n(d);g=t(d)}if(g!==null)var Pe=!0;else{var ye=t(h);ye!==null&&Q(w,ye.startTime-oe),Pe=!1}return Pe}finally{g=null,_=T,v=!1}}var U=!1,L=null,k=-1,b=5,C=-1;function z(){return!(o.unstable_now()-C<b)}function X(){if(L!==null){var F=o.unstable_now();C=F;var oe=!0;try{oe=L(!0,F)}finally{oe?J():(U=!1,L=null)}}else U=!1}var J;if(typeof N=="function")J=function(){N(X)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,se=ne.port2;ne.port1.onmessage=X,J=function(){se.postMessage(null)}}else J=function(){S(X,0)};function ee(F){L=F,U||(U=!0,J())}function Q(F,oe){k=S(function(){F(o.unstable_now())},oe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_continueExecution=function(){E||v||(E=!0,ee(I))},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(F){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var T=_;_=oe;try{return F()}finally{_=T}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(F,oe){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var T=_;_=F;try{return oe()}finally{_=T}},o.unstable_scheduleCallback=function(F,oe,T){var K=o.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,F){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=T+_e,F={id:p++,callback:oe,priorityLevel:F,startTime:T,expirationTime:_e,sortIndex:-1},T>K?(F.sortIndex=T,e(h,F),t(d)===null&&F===t(h)&&(M?(x(k),k=-1):M=!0,Q(w,T-K))):(F.sortIndex=_e,e(d,F),E||v||(E=!0,ee(I))),F},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(F){var oe=_;return function(){var T=_;_=oe;try{return F.apply(this,arguments)}finally{_=T}}}})(pp)),pp}var Hv;function I1(){return Hv||(Hv=1,hp.exports=N1()),hp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function U1(){if(Gv)return Ui;Gv=1;var o=Rg(),e=I1();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(r[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function _(i){return d.call(g,i)?!0:d.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function v(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,f){if(s===null||typeof s>"u"||v(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,f,m,y,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=y,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function N(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,N);S[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,N);S[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,N);S[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,s,l,f){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,m,f)&&(l=null),f||m===null?_(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),F=Symbol.iterator;function oe(i){return i===null||typeof i!="object"?null:(i=F&&i[F]||i["@@iterator"],typeof i=="function"?i:null)}var T=Object.assign,K;function _e(i){if(K===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);K=s&&s[1]||""}return`
`+K+i}var Pe=!1;function ye(i,s){if(!i||Pe)return"";Pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ce){var f=ce}Reflect.construct(i,[],s)}else{try{s.call()}catch(ce){f=ce}i.call(s.prototype)}else{try{throw Error()}catch(ce){f=ce}i()}}catch(ce){if(ce&&f&&typeof ce.stack=="string"){for(var m=ce.stack.split(`
`),y=f.stack.split(`
`),A=m.length-1,B=y.length-1;1<=A&&0<=B&&m[A]!==y[B];)B--;for(;1<=A&&0<=B;A--,B--)if(m[A]!==y[B]){if(A!==1||B!==1)do if(A--,B--,0>B||m[A]!==y[B]){var W=`
`+m[A].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=A&&0<=B);break}}}finally{Pe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?_e(i):""}function te(i){switch(i.tag){case 5:return _e(i.type);case 16:return _e("Lazy");case 13:return _e("Suspense");case 19:return _e("SuspenseList");case 0:case 2:case 15:return i=ye(i.type,!1),i;case 11:return i=ye(i.type.render,!1),i;case 1:return i=ye(i.type,!0),i;default:return""}}function pe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case L:return"Fragment";case U:return"Portal";case b:return"Profiler";case k:return"StrictMode";case J:return"Suspense";case ne:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case X:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case se:return s=i.displayName||null,s!==null?s:pe(i.type)||"Memo";case ee:s=i._payload,i=i._init;try{return pe(i(s))}catch{}}return null}function le(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Te(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Le(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function st(i){var s=Le(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(A){f=""+A,y.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Tt(i){i._valueTracker||(i._valueTracker=st(i))}function ct(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Le(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function V(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function mt(i,s){var l=s.checked;return T({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function je(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=Te(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function yt(i,s){s=s.checked,s!=null&&D(i,"checked",s,!1)}function $(i,s){yt(i,s);var l=Te(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?ze(i,s.type,l):s.hasOwnProperty("defaultValue")&&ze(i,s.type,Te(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ct(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function ze(i,s,l){(s!=="number"||V(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var dt=Array.isArray;function St(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+Te(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function Bt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return T({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function O(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(dt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Te(l)}}function R(i,s){var l=Te(s.value),f=Te(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function Z(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var de,He=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=de.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function we(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(i){ke.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ge[s]=Ge[i]})});function be(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ge.hasOwnProperty(i)&&Ge[i]?(""+s).trim():s+"px"}function Ie(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=be(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var at=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(i,s){if(s){if(at[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ne(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function H(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ee=null,Ae=null,Ue=null;function xe(i){if(i=$l(i)){if(typeof Ee!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Sc(s),Ee(i.stateNode,i.type,s))}}function ge(i){Ae?Ue?Ue.push(i):Ue=[i]:Ae=i}function We(){if(Ae){var i=Ae,s=Ue;if(Ue=Ae=null,xe(i),s)for(i=0;i<s.length;i++)xe(s[i])}}function ft(i,s){return i(s)}function Vt(){}var Oe=!1;function tt(i,s,l){if(Oe)return i(s,l);Oe=!0;try{return ft(i,s,l)}finally{Oe=!1,(Ae!==null||Ue!==null)&&(Vt(),We())}}function Mt(i,s){var l=i.stateNode;if(l===null)return null;var f=Sc(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Fe=!1;if(c)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",lt,lt),window.removeEventListener("test",lt,lt)}catch{Fe=!1}function ot(i,s,l,f,m,y,A,B,W){var ce=Array.prototype.slice.call(arguments,3);try{s.apply(l,ce)}catch(Me){this.onError(Me)}}var gt=!1,un=null,wt=!1,Qt=null,_n={onError:function(i){gt=!0,un=i}};function rn(i,s,l,f,m,y,A,B,W){gt=!1,un=null,ot.apply(_n,arguments)}function Kt(i,s,l,f,m,y,A,B,W){if(rn.apply(this,arguments),gt){if(gt){var ce=un;gt=!1,un=null}else throw Error(t(198));wt||(wt=!0,Qt=ce)}}function kt(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function ni(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Jt(i){if(kt(i)!==i)throw Error(t(188))}function Zn(i){var s=i.alternate;if(!s){if(s=kt(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return Jt(m),i;if(y===f)return Jt(m),s;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=y;else{for(var A=!1,B=m.child;B;){if(B===l){A=!0,l=m,f=y;break}if(B===f){A=!0,f=m,l=y;break}B=B.sibling}if(!A){for(B=y.child;B;){if(B===l){A=!0,l=y,f=m;break}if(B===f){A=!0,f=y,l=m;break}B=B.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function gi(i){return i=Zn(i),i!==null?Mn(i):null}function Mn(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Mn(i);if(s!==null)return s;i=i.sibling}return null}var P=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,ae=e.unstable_shouldYield,ue=e.unstable_requestPaint,G=e.unstable_now,ve=e.unstable_getCurrentPriorityLevel,De=e.unstable_ImmediatePriority,qe=e.unstable_UserBlockingPriority,Ve=e.unstable_NormalPriority,ut=e.unstable_LowPriority,it=e.unstable_IdlePriority,Ze=null,_t=null;function Dt(i){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Ze,i,void 0,(i.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:pt,sn=Math.log,Zt=Math.LN2;function pt(i){return i>>>=0,i===0?32:31-(sn(i)/Zt|0)|0}var en=64,Ft=4194304;function kn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function wr(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,y=i.pingedLanes,A=l&268435455;if(A!==0){var B=A&~m;B!==0?f=kn(B):(y&=A,y!==0&&(f=kn(y)))}else A=l&~m,A!==0?f=kn(A):y!==0&&(f=kn(y));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,y=s&-s,m>=y||m===16&&(y&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-Wt(s),m=1<<l,f|=i[l],s&=~m;return f}function _i(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function So(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,y=i.pendingLanes;0<y;){var A=31-Wt(y),B=1<<A,W=m[A];W===-1?((B&l)===0||(B&f)!==0)&&(m[A]=_i(B,s)):W<=s&&(i.expiredLanes|=B),y&=~B}}function on(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function vi(){var i=en;return en<<=1,(en&4194240)===0&&(en=64),i}function ii(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function wn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Wt(s),i[s]=l}function ri(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-Wt(l),y=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~y}}function Mo(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-Wt(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var Ot=0;function p_(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var m_,Id,g_,__,v_,Ud=!1,oc=[],Rs=null,Ps=null,Ds=null,Nl=new Map,Il=new Map,Ls=[],QM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function x_(i,s){switch(i){case"focusin":case"focusout":Rs=null;break;case"dragenter":case"dragleave":Ps=null;break;case"mouseover":case"mouseout":Ds=null;break;case"pointerover":case"pointerout":Nl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(s.pointerId)}}function Ul(i,s,l,f,m,y){return i===null||i.nativeEvent!==y?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[m]},s!==null&&(s=$l(s),s!==null&&Id(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function JM(i,s,l,f,m){switch(s){case"focusin":return Rs=Ul(Rs,i,s,l,f,m),!0;case"dragenter":return Ps=Ul(Ps,i,s,l,f,m),!0;case"mouseover":return Ds=Ul(Ds,i,s,l,f,m),!0;case"pointerover":var y=m.pointerId;return Nl.set(y,Ul(Nl.get(y)||null,i,s,l,f,m)),!0;case"gotpointercapture":return y=m.pointerId,Il.set(y,Ul(Il.get(y)||null,i,s,l,f,m)),!0}return!1}function y_(i){var s=Eo(i.target);if(s!==null){var l=kt(s);if(l!==null){if(s=l.tag,s===13){if(s=ni(l),s!==null){i.blockedOn=s,v_(i.priority,function(){g_(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ac(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Fd(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);ht=f,l.target.dispatchEvent(f),ht=null}else return s=$l(l),s!==null&&Id(s),i.blockedOn=l,!1;s.shift()}return!0}function S_(i,s,l){ac(i)&&l.delete(s)}function eE(){Ud=!1,Rs!==null&&ac(Rs)&&(Rs=null),Ps!==null&&ac(Ps)&&(Ps=null),Ds!==null&&ac(Ds)&&(Ds=null),Nl.forEach(S_),Il.forEach(S_)}function kl(i,s){i.blockedOn===s&&(i.blockedOn=null,Ud||(Ud=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,eE)))}function Fl(i){function s(m){return kl(m,i)}if(0<oc.length){kl(oc[0],i);for(var l=1;l<oc.length;l++){var f=oc[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Rs!==null&&kl(Rs,i),Ps!==null&&kl(Ps,i),Ds!==null&&kl(Ds,i),Nl.forEach(s),Il.forEach(s),l=0;l<Ls.length;l++)f=Ls[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Ls.length&&(l=Ls[0],l.blockedOn===null);)y_(l),l.blockedOn===null&&Ls.shift()}var ga=w.ReactCurrentBatchConfig,lc=!0;function tE(i,s,l,f){var m=Ot,y=ga.transition;ga.transition=null;try{Ot=1,kd(i,s,l,f)}finally{Ot=m,ga.transition=y}}function nE(i,s,l,f){var m=Ot,y=ga.transition;ga.transition=null;try{Ot=4,kd(i,s,l,f)}finally{Ot=m,ga.transition=y}}function kd(i,s,l,f){if(lc){var m=Fd(i,s,l,f);if(m===null)eh(i,s,f,uc,l),x_(i,f);else if(JM(m,i,s,l,f))f.stopPropagation();else if(x_(i,f),s&4&&-1<QM.indexOf(i)){for(;m!==null;){var y=$l(m);if(y!==null&&m_(y),y=Fd(i,s,l,f),y===null&&eh(i,s,f,uc,l),y===m)break;m=y}m!==null&&f.stopPropagation()}else eh(i,s,f,null,l)}}var uc=null;function Fd(i,s,l,f){if(uc=null,i=H(f),i=Eo(i),i!==null)if(s=kt(i),s===null)i=null;else if(l=s.tag,l===13){if(i=ni(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return uc=i,null}function M_(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ve()){case De:return 1;case qe:return 4;case Ve:case ut:return 16;case it:return 536870912;default:return 16}default:return 16}}var Ns=null,Od=null,cc=null;function E_(){if(cc)return cc;var i,s=Od,l=s.length,f,m="value"in Ns?Ns.value:Ns.textContent,y=m.length;for(i=0;i<l&&s[i]===m[i];i++);var A=l-i;for(f=1;f<=A&&s[l-f]===m[y-f];f++);return cc=m.slice(i,1<f?1-f:void 0)}function fc(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function dc(){return!0}function T_(){return!1}function ji(i){function s(l,f,m,y,A){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=y,this.target=A,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(l=i[B],this[B]=l?l(y):y[B]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?dc:T_,this.isPropagationStopped=T_,this}return T(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),s}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=ji(_a),Ol=T({},_a,{view:0,detail:0}),iE=ji(Ol),Bd,Vd,zl,hc=T({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==zl&&(zl&&i.type==="mousemove"?(Bd=i.screenX-zl.screenX,Vd=i.screenY-zl.screenY):Vd=Bd=0,zl=i),Bd)},movementY:function(i){return"movementY"in i?i.movementY:Vd}}),w_=ji(hc),rE=T({},hc,{dataTransfer:0}),sE=ji(rE),oE=T({},Ol,{relatedTarget:0}),Hd=ji(oE),aE=T({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),lE=ji(aE),uE=T({},_a,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),cE=ji(uE),fE=T({},_a,{data:0}),A_=ji(fE),dE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mE(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=pE[i])?!!s[i]:!1}function Gd(){return mE}var gE=T({},Ol,{key:function(i){if(i.key){var s=dE[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=fc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?hE[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gd,charCode:function(i){return i.type==="keypress"?fc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?fc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),_E=ji(gE),vE=T({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b_=ji(vE),xE=T({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gd}),yE=ji(xE),SE=T({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),ME=ji(SE),EE=T({},hc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),TE=ji(EE),wE=[9,13,27,32],Wd=c&&"CompositionEvent"in window,Bl=null;c&&"documentMode"in document&&(Bl=document.documentMode);var AE=c&&"TextEvent"in window&&!Bl,C_=c&&(!Wd||Bl&&8<Bl&&11>=Bl),R_=" ",P_=!1;function D_(i,s){switch(i){case"keyup":return wE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var va=!1;function bE(i,s){switch(i){case"compositionend":return L_(s);case"keypress":return s.which!==32?null:(P_=!0,R_);case"textInput":return i=s.data,i===R_&&P_?null:i;default:return null}}function CE(i,s){if(va)return i==="compositionend"||!Wd&&D_(i,s)?(i=E_(),cc=Od=Ns=null,va=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return C_&&s.locale!=="ko"?null:s.data;default:return null}}var RE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function N_(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!RE[i.type]:s==="textarea"}function I_(i,s,l,f){ge(f),s=vc(s,"onChange"),0<s.length&&(l=new zd("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var Vl=null,Hl=null;function PE(i){Q_(i,0)}function pc(i){var s=Ea(i);if(ct(s))return i}function DE(i,s){if(i==="change")return s}var U_=!1;if(c){var Xd;if(c){var jd="oninput"in document;if(!jd){var k_=document.createElement("div");k_.setAttribute("oninput","return;"),jd=typeof k_.oninput=="function"}Xd=jd}else Xd=!1;U_=Xd&&(!document.documentMode||9<document.documentMode)}function F_(){Vl&&(Vl.detachEvent("onpropertychange",O_),Hl=Vl=null)}function O_(i){if(i.propertyName==="value"&&pc(Hl)){var s=[];I_(s,Hl,i,H(i)),tt(PE,s)}}function LE(i,s,l){i==="focusin"?(F_(),Vl=s,Hl=l,Vl.attachEvent("onpropertychange",O_)):i==="focusout"&&F_()}function NE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return pc(Hl)}function IE(i,s){if(i==="click")return pc(s)}function UE(i,s){if(i==="input"||i==="change")return pc(s)}function kE(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ar=typeof Object.is=="function"?Object.is:kE;function Gl(i,s){if(Ar(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!Ar(i[m],s[m]))return!1}return!0}function z_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function B_(i,s){var l=z_(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=z_(l)}}function V_(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?V_(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function H_(){for(var i=window,s=V();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=V(i.document)}return s}function Yd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function FE(i){var s=H_(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&V_(l.ownerDocument.documentElement,l)){if(f!==null&&Yd(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,y=Math.min(f.start,m);f=f.end===void 0?y:Math.min(f.end,m),!i.extend&&y>f&&(m=f,f=y,y=m),m=B_(l,y);var A=B_(l,f);m&&A&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),y>f?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var OE=c&&"documentMode"in document&&11>=document.documentMode,xa=null,qd=null,Wl=null,$d=!1;function G_(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;$d||xa==null||xa!==V(f)||(f=xa,"selectionStart"in f&&Yd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Wl&&Gl(Wl,f)||(Wl=f,f=vc(qd,"onSelect"),0<f.length&&(s=new zd("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=xa)))}function mc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var ya={animationend:mc("Animation","AnimationEnd"),animationiteration:mc("Animation","AnimationIteration"),animationstart:mc("Animation","AnimationStart"),transitionend:mc("Transition","TransitionEnd")},Kd={},W_={};c&&(W_=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function gc(i){if(Kd[i])return Kd[i];if(!ya[i])return i;var s=ya[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in W_)return Kd[i]=s[l];return i}var X_=gc("animationend"),j_=gc("animationiteration"),Y_=gc("animationstart"),q_=gc("transitionend"),$_=new Map,K_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Is(i,s){$_.set(i,s),a(s,[i])}for(var Zd=0;Zd<K_.length;Zd++){var Qd=K_[Zd],zE=Qd.toLowerCase(),BE=Qd[0].toUpperCase()+Qd.slice(1);Is(zE,"on"+BE)}Is(X_,"onAnimationEnd"),Is(j_,"onAnimationIteration"),Is(Y_,"onAnimationStart"),Is("dblclick","onDoubleClick"),Is("focusin","onFocus"),Is("focusout","onBlur"),Is(q_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xl));function Z_(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,Kt(f,s,void 0,i),i.currentTarget=null}function Q_(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var y=void 0;if(s)for(var A=f.length-1;0<=A;A--){var B=f[A],W=B.instance,ce=B.currentTarget;if(B=B.listener,W!==y&&m.isPropagationStopped())break e;Z_(m,B,ce),y=W}else for(A=0;A<f.length;A++){if(B=f[A],W=B.instance,ce=B.currentTarget,B=B.listener,W!==y&&m.isPropagationStopped())break e;Z_(m,B,ce),y=W}}}if(wt)throw i=Qt,wt=!1,Qt=null,i}function dn(i,s){var l=s[oh];l===void 0&&(l=s[oh]=new Set);var f=i+"__bubble";l.has(f)||(J_(s,i,2,!1),l.add(f))}function Jd(i,s,l){var f=0;s&&(f|=4),J_(l,i,f,s)}var _c="_reactListening"+Math.random().toString(36).slice(2);function jl(i){if(!i[_c]){i[_c]=!0,n.forEach(function(l){l!=="selectionchange"&&(VE.has(l)||Jd(l,!1,i),Jd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[_c]||(s[_c]=!0,Jd("selectionchange",!1,s))}}function J_(i,s,l,f){switch(M_(s)){case 1:var m=tE;break;case 4:m=nE;break;default:m=kd}l=m.bind(null,s,l,i),m=void 0,!Fe||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function eh(i,s,l,f,m){var y=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var B=f.stateNode.containerInfo;if(B===m||B.nodeType===8&&B.parentNode===m)break;if(A===4)for(A=f.return;A!==null;){var W=A.tag;if((W===3||W===4)&&(W=A.stateNode.containerInfo,W===m||W.nodeType===8&&W.parentNode===m))return;A=A.return}for(;B!==null;){if(A=Eo(B),A===null)return;if(W=A.tag,W===5||W===6){f=y=A;continue e}B=B.parentNode}}f=f.return}tt(function(){var ce=y,Me=H(l),Ce=[];e:{var Se=$_.get(i);if(Se!==void 0){var Xe=zd,Qe=i;switch(i){case"keypress":if(fc(l)===0)break e;case"keydown":case"keyup":Xe=_E;break;case"focusin":Qe="focus",Xe=Hd;break;case"focusout":Qe="blur",Xe=Hd;break;case"beforeblur":case"afterblur":Xe=Hd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=w_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=sE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=yE;break;case X_:case j_:case Y_:Xe=lE;break;case q_:Xe=ME;break;case"scroll":Xe=iE;break;case"wheel":Xe=TE;break;case"copy":case"cut":case"paste":Xe=cE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=b_}var nt=(s&4)!==0,An=!nt&&i==="scroll",ie=nt?Se!==null?Se+"Capture":null:Se;nt=[];for(var q=ce,re;q!==null;){re=q;var Re=re.stateNode;if(re.tag===5&&Re!==null&&(re=Re,ie!==null&&(Re=Mt(q,ie),Re!=null&&nt.push(Yl(q,Re,re)))),An)break;q=q.return}0<nt.length&&(Se=new Xe(Se,Qe,null,l,Me),Ce.push({event:Se,listeners:nt}))}}if((s&7)===0){e:{if(Se=i==="mouseover"||i==="pointerover",Xe=i==="mouseout"||i==="pointerout",Se&&l!==ht&&(Qe=l.relatedTarget||l.fromElement)&&(Eo(Qe)||Qe[Jr]))break e;if((Xe||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Xe?(Qe=l.relatedTarget||l.toElement,Xe=ce,Qe=Qe?Eo(Qe):null,Qe!==null&&(An=kt(Qe),Qe!==An||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(Xe=null,Qe=ce),Xe!==Qe)){if(nt=w_,Re="onMouseLeave",ie="onMouseEnter",q="mouse",(i==="pointerout"||i==="pointerover")&&(nt=b_,Re="onPointerLeave",ie="onPointerEnter",q="pointer"),An=Xe==null?Se:Ea(Xe),re=Qe==null?Se:Ea(Qe),Se=new nt(Re,q+"leave",Xe,l,Me),Se.target=An,Se.relatedTarget=re,Re=null,Eo(Me)===ce&&(nt=new nt(ie,q+"enter",Qe,l,Me),nt.target=re,nt.relatedTarget=An,Re=nt),An=Re,Xe&&Qe)t:{for(nt=Xe,ie=Qe,q=0,re=nt;re;re=Sa(re))q++;for(re=0,Re=ie;Re;Re=Sa(Re))re++;for(;0<q-re;)nt=Sa(nt),q--;for(;0<re-q;)ie=Sa(ie),re--;for(;q--;){if(nt===ie||ie!==null&&nt===ie.alternate)break t;nt=Sa(nt),ie=Sa(ie)}nt=null}else nt=null;Xe!==null&&e0(Ce,Se,Xe,nt,!1),Qe!==null&&An!==null&&e0(Ce,An,Qe,nt,!0)}}e:{if(Se=ce?Ea(ce):window,Xe=Se.nodeName&&Se.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Se.type==="file")var rt=DE;else if(N_(Se))if(U_)rt=UE;else{rt=NE;var vt=LE}else(Xe=Se.nodeName)&&Xe.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(rt=IE);if(rt&&(rt=rt(i,ce))){I_(Ce,rt,l,Me);break e}vt&&vt(i,Se,ce),i==="focusout"&&(vt=Se._wrapperState)&&vt.controlled&&Se.type==="number"&&ze(Se,"number",Se.value)}switch(vt=ce?Ea(ce):window,i){case"focusin":(N_(vt)||vt.contentEditable==="true")&&(xa=vt,qd=ce,Wl=null);break;case"focusout":Wl=qd=xa=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,G_(Ce,l,Me);break;case"selectionchange":if(OE)break;case"keydown":case"keyup":G_(Ce,l,Me)}var xt;if(Wd)e:{switch(i){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else va?D_(i,l)&&(Et="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Et="onCompositionStart");Et&&(C_&&l.locale!=="ko"&&(va||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&va&&(xt=E_()):(Ns=Me,Od="value"in Ns?Ns.value:Ns.textContent,va=!0)),vt=vc(ce,Et),0<vt.length&&(Et=new A_(Et,i,null,l,Me),Ce.push({event:Et,listeners:vt}),xt?Et.data=xt:(xt=L_(l),xt!==null&&(Et.data=xt)))),(xt=AE?bE(i,l):CE(i,l))&&(ce=vc(ce,"onBeforeInput"),0<ce.length&&(Me=new A_("onBeforeInput","beforeinput",null,l,Me),Ce.push({event:Me,listeners:ce}),Me.data=xt))}Q_(Ce,s)})}function Yl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function vc(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=Mt(i,l),y!=null&&f.unshift(Yl(i,y,m)),y=Mt(i,s),y!=null&&f.push(Yl(i,y,m))),i=i.return}return f}function Sa(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function e0(i,s,l,f,m){for(var y=s._reactName,A=[];l!==null&&l!==f;){var B=l,W=B.alternate,ce=B.stateNode;if(W!==null&&W===f)break;B.tag===5&&ce!==null&&(B=ce,m?(W=Mt(l,y),W!=null&&A.unshift(Yl(l,W,B))):m||(W=Mt(l,y),W!=null&&A.push(Yl(l,W,B)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var HE=/\r\n?/g,GE=/\u0000|\uFFFD/g;function t0(i){return(typeof i=="string"?i:""+i).replace(HE,`
`).replace(GE,"")}function xc(i,s,l){if(s=t0(s),t0(i)!==s&&l)throw Error(t(425))}function yc(){}var th=null,nh=null;function ih(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var rh=typeof setTimeout=="function"?setTimeout:void 0,WE=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,XE=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(i){return n0.resolve(null).then(i).catch(jE)}:rh;function jE(i){setTimeout(function(){throw i})}function sh(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),Fl(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Fl(s)}function Us(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function i0(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ma=Math.random().toString(36).slice(2),zr="__reactFiber$"+Ma,ql="__reactProps$"+Ma,Jr="__reactContainer$"+Ma,oh="__reactEvents$"+Ma,YE="__reactListeners$"+Ma,qE="__reactHandles$"+Ma;function Eo(i){var s=i[zr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Jr]||l[zr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=i0(i);i!==null;){if(l=i[zr])return l;i=i0(i)}return s}i=l,l=i.parentNode}return null}function $l(i){return i=i[zr]||i[Jr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ea(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Sc(i){return i[ql]||null}var ah=[],Ta=-1;function ks(i){return{current:i}}function hn(i){0>Ta||(i.current=ah[Ta],ah[Ta]=null,Ta--)}function cn(i,s){Ta++,ah[Ta]=i.current,i.current=s}var Fs={},si=ks(Fs),Pi=ks(!1),To=Fs;function wa(i,s){var l=i.type.contextTypes;if(!l)return Fs;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=s[y];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Di(i){return i=i.childContextTypes,i!=null}function Mc(){hn(Pi),hn(si)}function r0(i,s,l){if(si.current!==Fs)throw Error(t(168));cn(si,s),cn(Pi,l)}function s0(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,le(i)||"Unknown",m));return T({},l,f)}function Ec(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Fs,To=si.current,cn(si,i),cn(Pi,Pi.current),!0}function o0(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=s0(i,s,To),f.__reactInternalMemoizedMergedChildContext=i,hn(Pi),hn(si),cn(si,i)):hn(Pi),cn(Pi,l)}var es=null,Tc=!1,lh=!1;function a0(i){es===null?es=[i]:es.push(i)}function $E(i){Tc=!0,a0(i)}function Os(){if(!lh&&es!==null){lh=!0;var i=0,s=Ot;try{var l=es;for(Ot=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}es=null,Tc=!1}catch(m){throw es!==null&&(es=es.slice(i+1)),P(De,Os),m}finally{Ot=s,lh=!1}}return null}var Aa=[],ba=0,wc=null,Ac=0,lr=[],ur=0,wo=null,ts=1,ns="";function Ao(i,s){Aa[ba++]=Ac,Aa[ba++]=wc,wc=i,Ac=s}function l0(i,s,l){lr[ur++]=ts,lr[ur++]=ns,lr[ur++]=wo,wo=i;var f=ts;i=ns;var m=32-Wt(f)-1;f&=~(1<<m),l+=1;var y=32-Wt(s)+m;if(30<y){var A=m-m%5;y=(f&(1<<A)-1).toString(32),f>>=A,m-=A,ts=1<<32-Wt(s)+m|l<<m|f,ns=y+i}else ts=1<<y|l<<m|f,ns=i}function uh(i){i.return!==null&&(Ao(i,1),l0(i,1,0))}function ch(i){for(;i===wc;)wc=Aa[--ba],Aa[ba]=null,Ac=Aa[--ba],Aa[ba]=null;for(;i===wo;)wo=lr[--ur],lr[ur]=null,ns=lr[--ur],lr[ur]=null,ts=lr[--ur],lr[ur]=null}var Yi=null,qi=null,mn=!1,br=null;function u0(i,s){var l=hr(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function c0(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Yi=i,qi=Us(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Yi=i,qi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=wo!==null?{id:ts,overflow:ns}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=hr(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Yi=i,qi=null,!0):!1;default:return!1}}function fh(i){return(i.mode&1)!==0&&(i.flags&128)===0}function dh(i){if(mn){var s=qi;if(s){var l=s;if(!c0(i,s)){if(fh(i))throw Error(t(418));s=Us(l.nextSibling);var f=Yi;s&&c0(i,s)?u0(f,l):(i.flags=i.flags&-4097|2,mn=!1,Yi=i)}}else{if(fh(i))throw Error(t(418));i.flags=i.flags&-4097|2,mn=!1,Yi=i}}}function f0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Yi=i}function bc(i){if(i!==Yi)return!1;if(!mn)return f0(i),mn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!ih(i.type,i.memoizedProps)),s&&(s=qi)){if(fh(i))throw d0(),Error(t(418));for(;s;)u0(i,s),s=Us(s.nextSibling)}if(f0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){qi=Us(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}qi=null}}else qi=Yi?Us(i.stateNode.nextSibling):null;return!0}function d0(){for(var i=qi;i;)i=Us(i.nextSibling)}function Ca(){qi=Yi=null,mn=!1}function hh(i){br===null?br=[i]:br.push(i)}var KE=w.ReactCurrentBatchConfig;function Cr(i,s){if(i&&i.defaultProps){s=T({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}var Cc=ks(null),Rc=null,Ra=null,ph=null;function mh(){ph=Ra=Rc=null}function gh(i){var s=Cc.current;hn(Cc),i._currentValue=s}function _h(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function Pa(i,s){Rc=i,ph=Ra=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Li=!0),i.firstContext=null)}function cr(i){var s=i._currentValue;if(ph!==i)if(i={context:i,memoizedValue:s,next:null},Ra===null){if(Rc===null)throw Error(t(308));Ra=i,Rc.dependencies={lanes:0,firstContext:i}}else Ra=Ra.next=i;return s}var bo=null;function vh(i){bo===null?bo=[i]:bo.push(i)}function h0(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,vh(s)):(l.next=m.next,m.next=l),s.interleaved=l,is(i,f)}function is(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var zs=!1;function xh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p0(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function rs(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Bs(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Xt&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,is(i,l)}return m=f.interleaved,m===null?(s.next=s,vh(f)):(s.next=m.next,m.next=s),f.interleaved=s,is(i,l)}function Pc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Mo(i,l)}}function m0(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=A:y=y.next=A,l=l.next}while(l!==null);y===null?m=y=s:y=y.next=s}else m=y=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Dc(i,s,l,f){var m=i.updateQueue;zs=!1;var y=m.firstBaseUpdate,A=m.lastBaseUpdate,B=m.shared.pending;if(B!==null){m.shared.pending=null;var W=B,ce=W.next;W.next=null,A===null?y=ce:A.next=ce,A=W;var Me=i.alternate;Me!==null&&(Me=Me.updateQueue,B=Me.lastBaseUpdate,B!==A&&(B===null?Me.firstBaseUpdate=ce:B.next=ce,Me.lastBaseUpdate=W))}if(y!==null){var Ce=m.baseState;A=0,Me=ce=W=null,B=y;do{var Se=B.lane,Xe=B.eventTime;if((f&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Xe,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Qe=i,nt=B;switch(Se=s,Xe=l,nt.tag){case 1:if(Qe=nt.payload,typeof Qe=="function"){Ce=Qe.call(Xe,Ce,Se);break e}Ce=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=nt.payload,Se=typeof Qe=="function"?Qe.call(Xe,Ce,Se):Qe,Se==null)break e;Ce=T({},Ce,Se);break e;case 2:zs=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,Se=m.effects,Se===null?m.effects=[B]:Se.push(B))}else Xe={eventTime:Xe,lane:Se,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Me===null?(ce=Me=Xe,W=Ce):Me=Me.next=Xe,A|=Se;if(B=B.next,B===null){if(B=m.shared.pending,B===null)break;Se=B,B=Se.next,Se.next=null,m.lastBaseUpdate=Se,m.shared.pending=null}}while(!0);if(Me===null&&(W=Ce),m.baseState=W,m.firstBaseUpdate=ce,m.lastBaseUpdate=Me,s=m.shared.interleaved,s!==null){m=s;do A|=m.lane,m=m.next;while(m!==s)}else y===null&&(m.shared.lanes=0);Po|=A,i.lanes=A,i.memoizedState=Ce}}function g0(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var _0=new o.Component().refs;function yh(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:T({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Lc={isMounted:function(i){return(i=i._reactInternals)?kt(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=yi(),m=Ws(i),y=rs(f,m);y.payload=s,l!=null&&(y.callback=l),s=Bs(i,y,m),s!==null&&(Dr(s,i,m,f),Pc(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=yi(),m=Ws(i),y=rs(f,m);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=Bs(i,y,m),s!==null&&(Dr(s,i,m,f),Pc(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=yi(),f=Ws(i),m=rs(l,f);m.tag=2,s!=null&&(m.callback=s),s=Bs(i,m,f),s!==null&&(Dr(s,i,f,l),Pc(s,i,f))}};function v0(i,s,l,f,m,y,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,y,A):s.prototype&&s.prototype.isPureReactComponent?!Gl(l,f)||!Gl(m,y):!0}function x0(i,s,l){var f=!1,m=Fs,y=s.contextType;return typeof y=="object"&&y!==null?y=cr(y):(m=Di(s)?To:si.current,f=s.contextTypes,y=(f=f!=null)?wa(i,m):Fs),s=new s(l,y),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Lc,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=y),s}function y0(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Lc.enqueueReplaceState(s,s.state,null)}function Sh(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs=_0,xh(i);var y=s.contextType;typeof y=="object"&&y!==null?m.context=cr(y):(y=Di(s)?To:si.current,m.context=wa(i,y)),m.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(yh(i,s,y,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Lc.enqueueReplaceState(m,m.state,null),Dc(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Kl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,y=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(A){var B=m.refs;B===_0&&(B=m.refs={}),A===null?delete B[y]:B[y]=A},s._stringRef=y,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Nc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function S0(i){var s=i._init;return s(i._payload)}function M0(i){function s(ie,q){if(i){var re=ie.deletions;re===null?(ie.deletions=[q],ie.flags|=16):re.push(q)}}function l(ie,q){if(!i)return null;for(;q!==null;)s(ie,q),q=q.sibling;return null}function f(ie,q){for(ie=new Map;q!==null;)q.key!==null?ie.set(q.key,q):ie.set(q.index,q),q=q.sibling;return ie}function m(ie,q){return ie=js(ie,q),ie.index=0,ie.sibling=null,ie}function y(ie,q,re){return ie.index=re,i?(re=ie.alternate,re!==null?(re=re.index,re<q?(ie.flags|=2,q):re):(ie.flags|=2,q)):(ie.flags|=1048576,q)}function A(ie){return i&&ie.alternate===null&&(ie.flags|=2),ie}function B(ie,q,re,Re){return q===null||q.tag!==6?(q=rp(re,ie.mode,Re),q.return=ie,q):(q=m(q,re),q.return=ie,q)}function W(ie,q,re,Re){var rt=re.type;return rt===L?Me(ie,q,re.props.children,Re,re.key):q!==null&&(q.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ee&&S0(rt)===q.type)?(Re=m(q,re.props),Re.ref=Kl(ie,q,re),Re.return=ie,Re):(Re=Qc(re.type,re.key,re.props,null,ie.mode,Re),Re.ref=Kl(ie,q,re),Re.return=ie,Re)}function ce(ie,q,re,Re){return q===null||q.tag!==4||q.stateNode.containerInfo!==re.containerInfo||q.stateNode.implementation!==re.implementation?(q=sp(re,ie.mode,Re),q.return=ie,q):(q=m(q,re.children||[]),q.return=ie,q)}function Me(ie,q,re,Re,rt){return q===null||q.tag!==7?(q=Io(re,ie.mode,Re,rt),q.return=ie,q):(q=m(q,re),q.return=ie,q)}function Ce(ie,q,re){if(typeof q=="string"&&q!==""||typeof q=="number")return q=rp(""+q,ie.mode,re),q.return=ie,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case I:return re=Qc(q.type,q.key,q.props,null,ie.mode,re),re.ref=Kl(ie,null,q),re.return=ie,re;case U:return q=sp(q,ie.mode,re),q.return=ie,q;case ee:var Re=q._init;return Ce(ie,Re(q._payload),re)}if(dt(q)||oe(q))return q=Io(q,ie.mode,re,null),q.return=ie,q;Nc(ie,q)}return null}function Se(ie,q,re,Re){var rt=q!==null?q.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return rt!==null?null:B(ie,q,""+re,Re);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case I:return re.key===rt?W(ie,q,re,Re):null;case U:return re.key===rt?ce(ie,q,re,Re):null;case ee:return rt=re._init,Se(ie,q,rt(re._payload),Re)}if(dt(re)||oe(re))return rt!==null?null:Me(ie,q,re,Re,null);Nc(ie,re)}return null}function Xe(ie,q,re,Re,rt){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ie=ie.get(re)||null,B(q,ie,""+Re,rt);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case I:return ie=ie.get(Re.key===null?re:Re.key)||null,W(q,ie,Re,rt);case U:return ie=ie.get(Re.key===null?re:Re.key)||null,ce(q,ie,Re,rt);case ee:var vt=Re._init;return Xe(ie,q,re,vt(Re._payload),rt)}if(dt(Re)||oe(Re))return ie=ie.get(re)||null,Me(q,ie,Re,rt,null);Nc(q,Re)}return null}function Qe(ie,q,re,Re){for(var rt=null,vt=null,xt=q,Et=q=0,jn=null;xt!==null&&Et<re.length;Et++){xt.index>Et?(jn=xt,xt=null):jn=xt.sibling;var jt=Se(ie,xt,re[Et],Re);if(jt===null){xt===null&&(xt=jn);break}i&&xt&&jt.alternate===null&&s(ie,xt),q=y(jt,q,Et),vt===null?rt=jt:vt.sibling=jt,vt=jt,xt=jn}if(Et===re.length)return l(ie,xt),mn&&Ao(ie,Et),rt;if(xt===null){for(;Et<re.length;Et++)xt=Ce(ie,re[Et],Re),xt!==null&&(q=y(xt,q,Et),vt===null?rt=xt:vt.sibling=xt,vt=xt);return mn&&Ao(ie,Et),rt}for(xt=f(ie,xt);Et<re.length;Et++)jn=Xe(xt,ie,Et,re[Et],Re),jn!==null&&(i&&jn.alternate!==null&&xt.delete(jn.key===null?Et:jn.key),q=y(jn,q,Et),vt===null?rt=jn:vt.sibling=jn,vt=jn);return i&&xt.forEach(function(Ys){return s(ie,Ys)}),mn&&Ao(ie,Et),rt}function nt(ie,q,re,Re){var rt=oe(re);if(typeof rt!="function")throw Error(t(150));if(re=rt.call(re),re==null)throw Error(t(151));for(var vt=rt=null,xt=q,Et=q=0,jn=null,jt=re.next();xt!==null&&!jt.done;Et++,jt=re.next()){xt.index>Et?(jn=xt,xt=null):jn=xt.sibling;var Ys=Se(ie,xt,jt.value,Re);if(Ys===null){xt===null&&(xt=jn);break}i&&xt&&Ys.alternate===null&&s(ie,xt),q=y(Ys,q,Et),vt===null?rt=Ys:vt.sibling=Ys,vt=Ys,xt=jn}if(jt.done)return l(ie,xt),mn&&Ao(ie,Et),rt;if(xt===null){for(;!jt.done;Et++,jt=re.next())jt=Ce(ie,jt.value,Re),jt!==null&&(q=y(jt,q,Et),vt===null?rt=jt:vt.sibling=jt,vt=jt);return mn&&Ao(ie,Et),rt}for(xt=f(ie,xt);!jt.done;Et++,jt=re.next())jt=Xe(xt,ie,Et,jt.value,Re),jt!==null&&(i&&jt.alternate!==null&&xt.delete(jt.key===null?Et:jt.key),q=y(jt,q,Et),vt===null?rt=jt:vt.sibling=jt,vt=jt);return i&&xt.forEach(function(R1){return s(ie,R1)}),mn&&Ao(ie,Et),rt}function An(ie,q,re,Re){if(typeof re=="object"&&re!==null&&re.type===L&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case I:e:{for(var rt=re.key,vt=q;vt!==null;){if(vt.key===rt){if(rt=re.type,rt===L){if(vt.tag===7){l(ie,vt.sibling),q=m(vt,re.props.children),q.return=ie,ie=q;break e}}else if(vt.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ee&&S0(rt)===vt.type){l(ie,vt.sibling),q=m(vt,re.props),q.ref=Kl(ie,vt,re),q.return=ie,ie=q;break e}l(ie,vt);break}else s(ie,vt);vt=vt.sibling}re.type===L?(q=Io(re.props.children,ie.mode,Re,re.key),q.return=ie,ie=q):(Re=Qc(re.type,re.key,re.props,null,ie.mode,Re),Re.ref=Kl(ie,q,re),Re.return=ie,ie=Re)}return A(ie);case U:e:{for(vt=re.key;q!==null;){if(q.key===vt)if(q.tag===4&&q.stateNode.containerInfo===re.containerInfo&&q.stateNode.implementation===re.implementation){l(ie,q.sibling),q=m(q,re.children||[]),q.return=ie,ie=q;break e}else{l(ie,q);break}else s(ie,q);q=q.sibling}q=sp(re,ie.mode,Re),q.return=ie,ie=q}return A(ie);case ee:return vt=re._init,An(ie,q,vt(re._payload),Re)}if(dt(re))return Qe(ie,q,re,Re);if(oe(re))return nt(ie,q,re,Re);Nc(ie,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,q!==null&&q.tag===6?(l(ie,q.sibling),q=m(q,re),q.return=ie,ie=q):(l(ie,q),q=rp(re,ie.mode,Re),q.return=ie,ie=q),A(ie)):l(ie,q)}return An}var Da=M0(!0),E0=M0(!1),Zl={},Br=ks(Zl),Ql=ks(Zl),Jl=ks(Zl);function Co(i){if(i===Zl)throw Error(t(174));return i}function Mh(i,s){switch(cn(Jl,s),cn(Ql,i),cn(Br,Zl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:me(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=me(s,i)}hn(Br),cn(Br,s)}function La(){hn(Br),hn(Ql),hn(Jl)}function T0(i){Co(Jl.current);var s=Co(Br.current),l=me(s,i.type);s!==l&&(cn(Ql,i),cn(Br,l))}function Eh(i){Ql.current===i&&(hn(Br),hn(Ql))}var vn=ks(0);function Ic(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Th=[];function wh(){for(var i=0;i<Th.length;i++)Th[i]._workInProgressVersionPrimary=null;Th.length=0}var Uc=w.ReactCurrentDispatcher,Ah=w.ReactCurrentBatchConfig,Ro=0,xn=null,Fn=null,Wn=null,kc=!1,eu=!1,tu=0,ZE=0;function oi(){throw Error(t(321))}function bh(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Ar(i[l],s[l]))return!1;return!0}function Ch(i,s,l,f,m,y){if(Ro=y,xn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Uc.current=i===null||i.memoizedState===null?t1:n1,i=l(f,m),eu){y=0;do{if(eu=!1,tu=0,25<=y)throw Error(t(301));y+=1,Wn=Fn=null,s.updateQueue=null,Uc.current=i1,i=l(f,m)}while(eu)}if(Uc.current=zc,s=Fn!==null&&Fn.next!==null,Ro=0,Wn=Fn=xn=null,kc=!1,s)throw Error(t(300));return i}function Rh(){var i=tu!==0;return tu=0,i}function Vr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wn===null?xn.memoizedState=Wn=i:Wn=Wn.next=i,Wn}function fr(){if(Fn===null){var i=xn.alternate;i=i!==null?i.memoizedState:null}else i=Fn.next;var s=Wn===null?xn.memoizedState:Wn.next;if(s!==null)Wn=s,Fn=i;else{if(i===null)throw Error(t(310));Fn=i,i={memoizedState:Fn.memoizedState,baseState:Fn.baseState,baseQueue:Fn.baseQueue,queue:Fn.queue,next:null},Wn===null?xn.memoizedState=Wn=i:Wn=Wn.next=i}return Wn}function nu(i,s){return typeof s=="function"?s(i):s}function Ph(i){var s=fr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=Fn,m=f.baseQueue,y=l.pending;if(y!==null){if(m!==null){var A=m.next;m.next=y.next,y.next=A}f.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,f=f.baseState;var B=A=null,W=null,ce=y;do{var Me=ce.lane;if((Ro&Me)===Me)W!==null&&(W=W.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),f=ce.hasEagerState?ce.eagerState:i(f,ce.action);else{var Ce={lane:Me,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};W===null?(B=W=Ce,A=f):W=W.next=Ce,xn.lanes|=Me,Po|=Me}ce=ce.next}while(ce!==null&&ce!==y);W===null?A=f:W.next=B,Ar(f,s.memoizedState)||(Li=!0),s.memoizedState=f,s.baseState=A,s.baseQueue=W,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do y=m.lane,xn.lanes|=y,Po|=y,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Dh(i){var s=fr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,y=s.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do y=i(y,A.action),A=A.next;while(A!==m);Ar(y,s.memoizedState)||(Li=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,f]}function w0(){}function A0(i,s){var l=xn,f=fr(),m=s(),y=!Ar(f.memoizedState,m);if(y&&(f.memoizedState=m,Li=!0),f=f.queue,Lh(R0.bind(null,l,f,i),[i]),f.getSnapshot!==s||y||Wn!==null&&Wn.memoizedState.tag&1){if(l.flags|=2048,iu(9,C0.bind(null,l,f,m,s),void 0,null),Xn===null)throw Error(t(349));(Ro&30)!==0||b0(l,s,m)}return m}function b0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=xn.updateQueue,s===null?(s={lastEffect:null,stores:null},xn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function C0(i,s,l,f){s.value=l,s.getSnapshot=f,P0(s)&&D0(i)}function R0(i,s,l){return l(function(){P0(s)&&D0(i)})}function P0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Ar(i,l)}catch{return!0}}function D0(i){var s=is(i,1);s!==null&&Dr(s,i,1,-1)}function L0(i){var s=Vr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nu,lastRenderedState:i},s.queue=i,i=i.dispatch=e1.bind(null,xn,i),[s.memoizedState,i]}function iu(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=xn.updateQueue,s===null?(s={lastEffect:null,stores:null},xn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function N0(){return fr().memoizedState}function Fc(i,s,l,f){var m=Vr();xn.flags|=i,m.memoizedState=iu(1|s,l,void 0,f===void 0?null:f)}function Oc(i,s,l,f){var m=fr();f=f===void 0?null:f;var y=void 0;if(Fn!==null){var A=Fn.memoizedState;if(y=A.destroy,f!==null&&bh(f,A.deps)){m.memoizedState=iu(s,l,y,f);return}}xn.flags|=i,m.memoizedState=iu(1|s,l,y,f)}function I0(i,s){return Fc(8390656,8,i,s)}function Lh(i,s){return Oc(2048,8,i,s)}function U0(i,s){return Oc(4,2,i,s)}function k0(i,s){return Oc(4,4,i,s)}function F0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function O0(i,s,l){return l=l!=null?l.concat([i]):null,Oc(4,4,F0.bind(null,s,i),l)}function Nh(){}function z0(i,s){var l=fr();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&bh(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function B0(i,s){var l=fr();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&bh(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function V0(i,s,l){return(Ro&21)===0?(i.baseState&&(i.baseState=!1,Li=!0),i.memoizedState=l):(Ar(l,s)||(l=vi(),xn.lanes|=l,Po|=l,i.baseState=!0),s)}function QE(i,s){var l=Ot;Ot=l!==0&&4>l?l:4,i(!0);var f=Ah.transition;Ah.transition={};try{i(!1),s()}finally{Ot=l,Ah.transition=f}}function H0(){return fr().memoizedState}function JE(i,s,l){var f=Ws(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},G0(i))W0(s,l);else if(l=h0(i,s,l,f),l!==null){var m=yi();Dr(l,i,f,m),X0(l,s,f)}}function e1(i,s,l){var f=Ws(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(G0(i))W0(s,m);else{var y=i.alternate;if(i.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var A=s.lastRenderedState,B=y(A,l);if(m.hasEagerState=!0,m.eagerState=B,Ar(B,A)){var W=s.interleaved;W===null?(m.next=m,vh(s)):(m.next=W.next,W.next=m),s.interleaved=m;return}}catch{}finally{}l=h0(i,s,m,f),l!==null&&(m=yi(),Dr(l,i,f,m),X0(l,s,f))}}function G0(i){var s=i.alternate;return i===xn||s!==null&&s===xn}function W0(i,s){eu=kc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function X0(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Mo(i,l)}}var zc={readContext:cr,useCallback:oi,useContext:oi,useEffect:oi,useImperativeHandle:oi,useInsertionEffect:oi,useLayoutEffect:oi,useMemo:oi,useReducer:oi,useRef:oi,useState:oi,useDebugValue:oi,useDeferredValue:oi,useTransition:oi,useMutableSource:oi,useSyncExternalStore:oi,useId:oi,unstable_isNewReconciler:!1},t1={readContext:cr,useCallback:function(i,s){return Vr().memoizedState=[i,s===void 0?null:s],i},useContext:cr,useEffect:I0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Fc(4194308,4,F0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Fc(4194308,4,i,s)},useInsertionEffect:function(i,s){return Fc(4,2,i,s)},useMemo:function(i,s){var l=Vr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=Vr();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=JE.bind(null,xn,i),[f.memoizedState,i]},useRef:function(i){var s=Vr();return i={current:i},s.memoizedState=i},useState:L0,useDebugValue:Nh,useDeferredValue:function(i){return Vr().memoizedState=i},useTransition:function(){var i=L0(!1),s=i[0];return i=QE.bind(null,i[1]),Vr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=xn,m=Vr();if(mn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Xn===null)throw Error(t(349));(Ro&30)!==0||b0(f,s,l)}m.memoizedState=l;var y={value:l,getSnapshot:s};return m.queue=y,I0(R0.bind(null,f,y,i),[i]),f.flags|=2048,iu(9,C0.bind(null,f,y,l,s),void 0,null),l},useId:function(){var i=Vr(),s=Xn.identifierPrefix;if(mn){var l=ns,f=ts;l=(f&~(1<<32-Wt(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=tu++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=ZE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},n1={readContext:cr,useCallback:z0,useContext:cr,useEffect:Lh,useImperativeHandle:O0,useInsertionEffect:U0,useLayoutEffect:k0,useMemo:B0,useReducer:Ph,useRef:N0,useState:function(){return Ph(nu)},useDebugValue:Nh,useDeferredValue:function(i){var s=fr();return V0(s,Fn.memoizedState,i)},useTransition:function(){var i=Ph(nu)[0],s=fr().memoizedState;return[i,s]},useMutableSource:w0,useSyncExternalStore:A0,useId:H0,unstable_isNewReconciler:!1},i1={readContext:cr,useCallback:z0,useContext:cr,useEffect:Lh,useImperativeHandle:O0,useInsertionEffect:U0,useLayoutEffect:k0,useMemo:B0,useReducer:Dh,useRef:N0,useState:function(){return Dh(nu)},useDebugValue:Nh,useDeferredValue:function(i){var s=fr();return Fn===null?s.memoizedState=i:V0(s,Fn.memoizedState,i)},useTransition:function(){var i=Dh(nu)[0],s=fr().memoizedState;return[i,s]},useMutableSource:w0,useSyncExternalStore:A0,useId:H0,unstable_isNewReconciler:!1};function Na(i,s){try{var l="",f=s;do l+=te(f),f=f.return;while(f);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:i,source:s,stack:m,digest:null}}function Ih(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Uh(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var r1=typeof WeakMap=="function"?WeakMap:Map;function j0(i,s,l){l=rs(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){jc||(jc=!0,Kh=f),Uh(i,s)},l}function Y0(i,s,l){l=rs(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){Uh(i,s)}}var y=i.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){Uh(i,s),typeof f!="function"&&(Hs===null?Hs=new Set([this]):Hs.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function q0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new r1;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=v1.bind(null,i,s,l),s.then(i,i))}function $0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function K0(i,s,l,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=rs(-1,1),s.tag=2,Bs(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var s1=w.ReactCurrentOwner,Li=!1;function xi(i,s,l,f){s.child=i===null?E0(s,null,l,f):Da(s,i.child,l,f)}function Z0(i,s,l,f,m){l=l.render;var y=s.ref;return Pa(s,m),f=Ch(i,s,l,f,y,m),l=Rh(),i!==null&&!Li?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,ss(i,s,m)):(mn&&l&&uh(s),s.flags|=1,xi(i,s,f,m),s.child)}function Q0(i,s,l,f,m){if(i===null){var y=l.type;return typeof y=="function"&&!ip(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,J0(i,s,y,f,m)):(i=Qc(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(y=i.child,(i.lanes&m)===0){var A=y.memoizedProps;if(l=l.compare,l=l!==null?l:Gl,l(A,f)&&i.ref===s.ref)return ss(i,s,m)}return s.flags|=1,i=js(y,f),i.ref=s.ref,i.return=s,s.child=i}function J0(i,s,l,f,m){if(i!==null){var y=i.memoizedProps;if(Gl(y,f)&&i.ref===s.ref)if(Li=!1,s.pendingProps=f=y,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Li=!0);else return s.lanes=i.lanes,ss(i,s,m)}return kh(i,s,l,f,m)}function ev(i,s,l){var f=s.pendingProps,m=f.children,y=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},cn(Ua,$i),$i|=l;else{if((l&1073741824)===0)return i=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,cn(Ua,$i),$i|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,cn(Ua,$i),$i|=f}else y!==null?(f=y.baseLanes|l,s.memoizedState=null):f=l,cn(Ua,$i),$i|=f;return xi(i,s,m,l),s.child}function tv(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function kh(i,s,l,f,m){var y=Di(l)?To:si.current;return y=wa(s,y),Pa(s,m),l=Ch(i,s,l,f,y,m),f=Rh(),i!==null&&!Li?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,ss(i,s,m)):(mn&&f&&uh(s),s.flags|=1,xi(i,s,l,m),s.child)}function nv(i,s,l,f,m){if(Di(l)){var y=!0;Ec(s)}else y=!1;if(Pa(s,m),s.stateNode===null)Vc(i,s),x0(s,l,f),Sh(s,l,f,m),f=!0;else if(i===null){var A=s.stateNode,B=s.memoizedProps;A.props=B;var W=A.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=cr(ce):(ce=Di(l)?To:si.current,ce=wa(s,ce));var Me=l.getDerivedStateFromProps,Ce=typeof Me=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ce||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==f||W!==ce)&&y0(s,A,f,ce),zs=!1;var Se=s.memoizedState;A.state=Se,Dc(s,f,A,m),W=s.memoizedState,B!==f||Se!==W||Pi.current||zs?(typeof Me=="function"&&(yh(s,l,Me,f),W=s.memoizedState),(B=zs||v0(s,l,B,f,Se,W,ce))?(Ce||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=W),A.props=f,A.state=W,A.context=ce,f=B):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{A=s.stateNode,p0(i,s),B=s.memoizedProps,ce=s.type===s.elementType?B:Cr(s.type,B),A.props=ce,Ce=s.pendingProps,Se=A.context,W=l.contextType,typeof W=="object"&&W!==null?W=cr(W):(W=Di(l)?To:si.current,W=wa(s,W));var Xe=l.getDerivedStateFromProps;(Me=typeof Xe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==Ce||Se!==W)&&y0(s,A,f,W),zs=!1,Se=s.memoizedState,A.state=Se,Dc(s,f,A,m);var Qe=s.memoizedState;B!==Ce||Se!==Qe||Pi.current||zs?(typeof Xe=="function"&&(yh(s,l,Xe,f),Qe=s.memoizedState),(ce=zs||v0(s,l,ce,f,Se,Qe,W)||!1)?(Me||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,Qe,W),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,Qe,W)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||B===i.memoizedProps&&Se===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&Se===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Qe),A.props=f,A.state=Qe,A.context=W,f=ce):(typeof A.componentDidUpdate!="function"||B===i.memoizedProps&&Se===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&Se===i.memoizedState||(s.flags|=1024),f=!1)}return Fh(i,s,l,f,y,m)}function Fh(i,s,l,f,m,y){tv(i,s);var A=(s.flags&128)!==0;if(!f&&!A)return m&&o0(s,l,!1),ss(i,s,y);f=s.stateNode,s1.current=s;var B=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&A?(s.child=Da(s,i.child,null,y),s.child=Da(s,null,B,y)):xi(i,s,B,y),s.memoizedState=f.state,m&&o0(s,l,!0),s.child}function iv(i){var s=i.stateNode;s.pendingContext?r0(i,s.pendingContext,s.pendingContext!==s.context):s.context&&r0(i,s.context,!1),Mh(i,s.containerInfo)}function rv(i,s,l,f,m){return Ca(),hh(m),s.flags|=256,xi(i,s,l,f),s.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function zh(i){return{baseLanes:i,cachePool:null,transitions:null}}function sv(i,s,l){var f=s.pendingProps,m=vn.current,y=!1,A=(s.flags&128)!==0,B;if((B=A)||(B=i!==null&&i.memoizedState===null?!1:(m&2)!==0),B?(y=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),cn(vn,m&1),i===null)return dh(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=f.children,i=f.fallback,y?(f=s.mode,y=s.child,A={mode:"hidden",children:A},(f&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=A):y=Jc(A,f,0,null),i=Io(i,f,l,null),y.return=s,i.return=s,y.sibling=i,s.child=y,s.child.memoizedState=zh(l),s.memoizedState=Oh,i):Bh(s,A));if(m=i.memoizedState,m!==null&&(B=m.dehydrated,B!==null))return o1(i,s,A,f,B,m,l);if(y){y=f.fallback,A=s.mode,m=i.child,B=m.sibling;var W={mode:"hidden",children:f.children};return(A&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=W,s.deletions=null):(f=js(m,W),f.subtreeFlags=m.subtreeFlags&14680064),B!==null?y=js(B,y):(y=Io(y,A,l,null),y.flags|=2),y.return=s,f.return=s,f.sibling=y,s.child=f,f=y,y=s.child,A=i.child.memoizedState,A=A===null?zh(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},y.memoizedState=A,y.childLanes=i.childLanes&~l,s.memoizedState=Oh,f}return y=i.child,i=y.sibling,f=js(y,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Bh(i,s){return s=Jc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Bc(i,s,l,f){return f!==null&&hh(f),Da(s,i.child,null,l),i=Bh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function o1(i,s,l,f,m,y,A){if(l)return s.flags&256?(s.flags&=-257,f=Ih(Error(t(422))),Bc(i,s,A,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(y=f.fallback,m=s.mode,f=Jc({mode:"visible",children:f.children},m,0,null),y=Io(y,m,A,null),y.flags|=2,f.return=s,y.return=s,f.sibling=y,s.child=f,(s.mode&1)!==0&&Da(s,i.child,null,A),s.child.memoizedState=zh(A),s.memoizedState=Oh,y);if((s.mode&1)===0)return Bc(i,s,A,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var B=f.dgst;return f=B,y=Error(t(419)),f=Ih(y,f,void 0),Bc(i,s,A,f)}if(B=(A&i.childLanes)!==0,Li||B){if(f=Xn,f!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|A))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,is(i,m),Dr(f,i,m,-1))}return np(),f=Ih(Error(t(421))),Bc(i,s,A,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=x1.bind(null,i),m._reactRetry=s,null):(i=y.treeContext,qi=Us(m.nextSibling),Yi=s,mn=!0,br=null,i!==null&&(lr[ur++]=ts,lr[ur++]=ns,lr[ur++]=wo,ts=i.id,ns=i.overflow,wo=s),s=Bh(s,f.children),s.flags|=4096,s)}function ov(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),_h(i.return,s,l)}function Vh(i,s,l,f,m){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=m)}function av(i,s,l){var f=s.pendingProps,m=f.revealOrder,y=f.tail;if(xi(i,s,f.children,l),f=vn.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&ov(i,l,s);else if(i.tag===19)ov(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(cn(vn,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Ic(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Vh(s,!1,m,l,y);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Ic(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Vh(s,!0,l,null,y);break;case"together":Vh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Vc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ss(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Po|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=js(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=js(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function a1(i,s,l){switch(s.tag){case 3:iv(s),Ca();break;case 5:T0(s);break;case 1:Di(s.type)&&Ec(s);break;case 4:Mh(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;cn(Cc,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(cn(vn,vn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?sv(i,s,l):(cn(vn,vn.current&1),i=ss(i,s,l),i!==null?i.sibling:null);cn(vn,vn.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return av(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),cn(vn,vn.current),f)break;return null;case 22:case 23:return s.lanes=0,ev(i,s,l)}return ss(i,s,l)}var lv,Hh,uv,cv;lv=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Hh=function(){},uv=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,Co(Br.current);var y=null;switch(l){case"input":m=mt(i,m),f=mt(i,f),y=[];break;case"select":m=T({},m,{value:void 0}),f=T({},f,{value:void 0}),y=[];break;case"textarea":m=Bt(i,m),f=Bt(i,f),y=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=yc)}Ye(l,f);var A;l=null;for(ce in m)if(!f.hasOwnProperty(ce)&&m.hasOwnProperty(ce)&&m[ce]!=null)if(ce==="style"){var B=m[ce];for(A in B)B.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(r.hasOwnProperty(ce)?y||(y=[]):(y=y||[]).push(ce,null));for(ce in f){var W=f[ce];if(B=m!=null?m[ce]:void 0,f.hasOwnProperty(ce)&&W!==B&&(W!=null||B!=null))if(ce==="style")if(B){for(A in B)!B.hasOwnProperty(A)||W&&W.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in W)W.hasOwnProperty(A)&&B[A]!==W[A]&&(l||(l={}),l[A]=W[A])}else l||(y||(y=[]),y.push(ce,l)),l=W;else ce==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,B=B?B.__html:void 0,W!=null&&B!==W&&(y=y||[]).push(ce,W)):ce==="children"?typeof W!="string"&&typeof W!="number"||(y=y||[]).push(ce,""+W):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(r.hasOwnProperty(ce)?(W!=null&&ce==="onScroll"&&dn("scroll",i),y||B===W||(y=[])):(y=y||[]).push(ce,W))}l&&(y=y||[]).push("style",l);var ce=y;(s.updateQueue=ce)&&(s.flags|=4)}},cv=function(i,s,l,f){l!==f&&(s.flags|=4)};function ru(i,s){if(!mn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function ai(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function l1(i,s,l){var f=s.pendingProps;switch(ch(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ai(s),null;case 1:return Di(s.type)&&Mc(),ai(s),null;case 3:return f=s.stateNode,La(),hn(Pi),hn(si),wh(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(bc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,br!==null&&(Jh(br),br=null))),Hh(i,s),ai(s),null;case 5:Eh(s);var m=Co(Jl.current);if(l=s.type,i!==null&&s.stateNode!=null)uv(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return ai(s),null}if(i=Co(Br.current),bc(s)){f=s.stateNode,l=s.type;var y=s.memoizedProps;switch(f[zr]=s,f[ql]=y,i=(s.mode&1)!==0,l){case"dialog":dn("cancel",f),dn("close",f);break;case"iframe":case"object":case"embed":dn("load",f);break;case"video":case"audio":for(m=0;m<Xl.length;m++)dn(Xl[m],f);break;case"source":dn("error",f);break;case"img":case"image":case"link":dn("error",f),dn("load",f);break;case"details":dn("toggle",f);break;case"input":je(f,y),dn("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},dn("invalid",f);break;case"textarea":O(f,y),dn("invalid",f)}Ye(l,y),m=null;for(var A in y)if(y.hasOwnProperty(A)){var B=y[A];A==="children"?typeof B=="string"?f.textContent!==B&&(y.suppressHydrationWarning!==!0&&xc(f.textContent,B,i),m=["children",B]):typeof B=="number"&&f.textContent!==""+B&&(y.suppressHydrationWarning!==!0&&xc(f.textContent,B,i),m=["children",""+B]):r.hasOwnProperty(A)&&B!=null&&A==="onScroll"&&dn("scroll",f)}switch(l){case"input":Tt(f),Ct(f,y,!0);break;case"textarea":Tt(f),Z(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=yc)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=A.createElement(l,{is:f.is}):(i=A.createElement(l),l==="select"&&(A=i,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):i=A.createElementNS(i,l),i[zr]=s,i[ql]=f,lv(i,s,!1,!1),s.stateNode=i;e:{switch(A=Ne(l,f),l){case"dialog":dn("cancel",i),dn("close",i),m=f;break;case"iframe":case"object":case"embed":dn("load",i),m=f;break;case"video":case"audio":for(m=0;m<Xl.length;m++)dn(Xl[m],i);m=f;break;case"source":dn("error",i),m=f;break;case"img":case"image":case"link":dn("error",i),dn("load",i),m=f;break;case"details":dn("toggle",i),m=f;break;case"input":je(i,f),m=mt(i,f),dn("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=T({},f,{value:void 0}),dn("invalid",i);break;case"textarea":O(i,f),m=Bt(i,f),dn("invalid",i);break;default:m=f}Ye(l,m),B=m;for(y in B)if(B.hasOwnProperty(y)){var W=B[y];y==="style"?Ie(i,W):y==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&He(i,W)):y==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&we(i,W):typeof W=="number"&&we(i,""+W):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(r.hasOwnProperty(y)?W!=null&&y==="onScroll"&&dn("scroll",i):W!=null&&D(i,y,W,A))}switch(l){case"input":Tt(i),Ct(i,f,!1);break;case"textarea":Tt(i),Z(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Te(f.value));break;case"select":i.multiple=!!f.multiple,y=f.value,y!=null?St(i,!!f.multiple,y,!1):f.defaultValue!=null&&St(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=yc)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return ai(s),null;case 6:if(i&&s.stateNode!=null)cv(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=Co(Jl.current),Co(Br.current),bc(s)){if(f=s.stateNode,l=s.memoizedProps,f[zr]=s,(y=f.nodeValue!==l)&&(i=Yi,i!==null))switch(i.tag){case 3:xc(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&xc(f.nodeValue,l,(i.mode&1)!==0)}y&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[zr]=s,s.stateNode=f}return ai(s),null;case 13:if(hn(vn),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(mn&&qi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)d0(),Ca(),s.flags|=98560,y=!1;else if(y=bc(s),f!==null&&f.dehydrated!==null){if(i===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[zr]=s}else Ca(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ai(s),y=!1}else br!==null&&(Jh(br),br=null),y=!0;if(!y)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(vn.current&1)!==0?On===0&&(On=3):np())),s.updateQueue!==null&&(s.flags|=4),ai(s),null);case 4:return La(),Hh(i,s),i===null&&jl(s.stateNode.containerInfo),ai(s),null;case 10:return gh(s.type._context),ai(s),null;case 17:return Di(s.type)&&Mc(),ai(s),null;case 19:if(hn(vn),y=s.memoizedState,y===null)return ai(s),null;if(f=(s.flags&128)!==0,A=y.rendering,A===null)if(f)ru(y,!1);else{if(On!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=Ic(i),A!==null){for(s.flags|=128,ru(y,!1),f=A.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)y=l,i=f,y.flags&=14680066,A=y.alternate,A===null?(y.childLanes=0,y.lanes=i,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=A.childLanes,y.lanes=A.lanes,y.child=A.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=A.memoizedProps,y.memoizedState=A.memoizedState,y.updateQueue=A.updateQueue,y.type=A.type,i=A.dependencies,y.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return cn(vn,vn.current&1|2),s.child}i=i.sibling}y.tail!==null&&G()>ka&&(s.flags|=128,f=!0,ru(y,!1),s.lanes=4194304)}else{if(!f)if(i=Ic(A),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ru(y,!0),y.tail===null&&y.tailMode==="hidden"&&!A.alternate&&!mn)return ai(s),null}else 2*G()-y.renderingStartTime>ka&&l!==1073741824&&(s.flags|=128,f=!0,ru(y,!1),s.lanes=4194304);y.isBackwards?(A.sibling=s.child,s.child=A):(l=y.last,l!==null?l.sibling=A:s.child=A,y.last=A)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=G(),s.sibling=null,l=vn.current,cn(vn,f?l&1|2:l&1),s):(ai(s),null);case 22:case 23:return tp(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?($i&1073741824)!==0&&(ai(s),s.subtreeFlags&6&&(s.flags|=8192)):ai(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function u1(i,s){switch(ch(s),s.tag){case 1:return Di(s.type)&&Mc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return La(),hn(Pi),hn(si),wh(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Eh(s),null;case 13:if(hn(vn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ca()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return hn(vn),null;case 4:return La(),null;case 10:return gh(s.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var Hc=!1,li=!1,c1=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Ia(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){En(i,s,f)}else l.current=null}function Gh(i,s,l){try{l()}catch(f){En(i,s,f)}}var fv=!1;function f1(i,s){if(th=lc,i=H_(),Yd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var A=0,B=-1,W=-1,ce=0,Me=0,Ce=i,Se=null;t:for(;;){for(var Xe;Ce!==l||m!==0&&Ce.nodeType!==3||(B=A+m),Ce!==y||f!==0&&Ce.nodeType!==3||(W=A+f),Ce.nodeType===3&&(A+=Ce.nodeValue.length),(Xe=Ce.firstChild)!==null;)Se=Ce,Ce=Xe;for(;;){if(Ce===i)break t;if(Se===l&&++ce===m&&(B=A),Se===y&&++Me===f&&(W=A),(Xe=Ce.nextSibling)!==null)break;Ce=Se,Se=Ce.parentNode}Ce=Xe}l=B===-1||W===-1?null:{start:B,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(nh={focusedElem:i,selectionRange:l},lc=!1,$e=s;$e!==null;)if(s=$e,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,$e=i;else for(;$e!==null;){s=$e;try{var Qe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var nt=Qe.memoizedProps,An=Qe.memoizedState,ie=s.stateNode,q=ie.getSnapshotBeforeUpdate(s.elementType===s.type?nt:Cr(s.type,nt),An);ie.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var re=s.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){En(s,s.return,Re)}if(i=s.sibling,i!==null){i.return=s.return,$e=i;break}$e=s.return}return Qe=fv,fv=!1,Qe}function su(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var y=m.destroy;m.destroy=void 0,y!==void 0&&Gh(s,l,y)}m=m.next}while(m!==f)}}function Gc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Wh(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function dv(i){var s=i.alternate;s!==null&&(i.alternate=null,dv(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[zr],delete s[ql],delete s[oh],delete s[YE],delete s[qE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function hv(i){return i.tag===5||i.tag===3||i.tag===4}function pv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||hv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Xh(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=yc));else if(f!==4&&(i=i.child,i!==null))for(Xh(i,s,l),i=i.sibling;i!==null;)Xh(i,s,l),i=i.sibling}function jh(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(jh(i,s,l),i=i.sibling;i!==null;)jh(i,s,l),i=i.sibling}var Qn=null,Rr=!1;function Vs(i,s,l){for(l=l.child;l!==null;)mv(i,s,l),l=l.sibling}function mv(i,s,l){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Ze,l)}catch{}switch(l.tag){case 5:li||Ia(l,s);case 6:var f=Qn,m=Rr;Qn=null,Vs(i,s,l),Qn=f,Rr=m,Qn!==null&&(Rr?(i=Qn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Qn.removeChild(l.stateNode));break;case 18:Qn!==null&&(Rr?(i=Qn,l=l.stateNode,i.nodeType===8?sh(i.parentNode,l):i.nodeType===1&&sh(i,l),Fl(i)):sh(Qn,l.stateNode));break;case 4:f=Qn,m=Rr,Qn=l.stateNode.containerInfo,Rr=!0,Vs(i,s,l),Qn=f,Rr=m;break;case 0:case 11:case 14:case 15:if(!li&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var y=m,A=y.destroy;y=y.tag,A!==void 0&&((y&2)!==0||(y&4)!==0)&&Gh(l,s,A),m=m.next}while(m!==f)}Vs(i,s,l);break;case 1:if(!li&&(Ia(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(B){En(l,s,B)}Vs(i,s,l);break;case 21:Vs(i,s,l);break;case 22:l.mode&1?(li=(f=li)||l.memoizedState!==null,Vs(i,s,l),li=f):Vs(i,s,l);break;default:Vs(i,s,l)}}function gv(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new c1),s.forEach(function(f){var m=y1.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Pr(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var y=i,A=s,B=A;e:for(;B!==null;){switch(B.tag){case 5:Qn=B.stateNode,Rr=!1;break e;case 3:Qn=B.stateNode.containerInfo,Rr=!0;break e;case 4:Qn=B.stateNode.containerInfo,Rr=!0;break e}B=B.return}if(Qn===null)throw Error(t(160));mv(y,A,m),Qn=null,Rr=!1;var W=m.alternate;W!==null&&(W.return=null),m.return=null}catch(ce){En(m,s,ce)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)_v(s,i),s=s.sibling}function _v(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Pr(s,i),Hr(i),f&4){try{su(3,i,i.return),Gc(3,i)}catch(nt){En(i,i.return,nt)}try{su(5,i,i.return)}catch(nt){En(i,i.return,nt)}}break;case 1:Pr(s,i),Hr(i),f&512&&l!==null&&Ia(l,l.return);break;case 5:if(Pr(s,i),Hr(i),f&512&&l!==null&&Ia(l,l.return),i.flags&32){var m=i.stateNode;try{we(m,"")}catch(nt){En(i,i.return,nt)}}if(f&4&&(m=i.stateNode,m!=null)){var y=i.memoizedProps,A=l!==null?l.memoizedProps:y,B=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{B==="input"&&y.type==="radio"&&y.name!=null&&yt(m,y),Ne(B,A);var ce=Ne(B,y);for(A=0;A<W.length;A+=2){var Me=W[A],Ce=W[A+1];Me==="style"?Ie(m,Ce):Me==="dangerouslySetInnerHTML"?He(m,Ce):Me==="children"?we(m,Ce):D(m,Me,Ce,ce)}switch(B){case"input":$(m,y);break;case"textarea":R(m,y);break;case"select":var Se=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var Xe=y.value;Xe!=null?St(m,!!y.multiple,Xe,!1):Se!==!!y.multiple&&(y.defaultValue!=null?St(m,!!y.multiple,y.defaultValue,!0):St(m,!!y.multiple,y.multiple?[]:"",!1))}m[ql]=y}catch(nt){En(i,i.return,nt)}}break;case 6:if(Pr(s,i),Hr(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,y=i.memoizedProps;try{m.nodeValue=y}catch(nt){En(i,i.return,nt)}}break;case 3:if(Pr(s,i),Hr(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Fl(s.containerInfo)}catch(nt){En(i,i.return,nt)}break;case 4:Pr(s,i),Hr(i);break;case 13:Pr(s,i),Hr(i),m=i.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||($h=G())),f&4&&gv(i);break;case 22:if(Me=l!==null&&l.memoizedState!==null,i.mode&1?(li=(ce=li)||Me,Pr(s,i),li=ce):Pr(s,i),Hr(i),f&8192){if(ce=i.memoizedState!==null,(i.stateNode.isHidden=ce)&&!Me&&(i.mode&1)!==0)for($e=i,Me=i.child;Me!==null;){for(Ce=$e=Me;$e!==null;){switch(Se=$e,Xe=Se.child,Se.tag){case 0:case 11:case 14:case 15:su(4,Se,Se.return);break;case 1:Ia(Se,Se.return);var Qe=Se.stateNode;if(typeof Qe.componentWillUnmount=="function"){f=Se,l=Se.return;try{s=f,Qe.props=s.memoizedProps,Qe.state=s.memoizedState,Qe.componentWillUnmount()}catch(nt){En(f,l,nt)}}break;case 5:Ia(Se,Se.return);break;case 22:if(Se.memoizedState!==null){yv(Ce);continue}}Xe!==null?(Xe.return=Se,$e=Xe):yv(Ce)}Me=Me.sibling}e:for(Me=null,Ce=i;;){if(Ce.tag===5){if(Me===null){Me=Ce;try{m=Ce.stateNode,ce?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(B=Ce.stateNode,W=Ce.memoizedProps.style,A=W!=null&&W.hasOwnProperty("display")?W.display:null,B.style.display=be("display",A))}catch(nt){En(i,i.return,nt)}}}else if(Ce.tag===6){if(Me===null)try{Ce.stateNode.nodeValue=ce?"":Ce.memoizedProps}catch(nt){En(i,i.return,nt)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===i)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===i)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===i)break e;Me===Ce&&(Me=null),Ce=Ce.return}Me===Ce&&(Me=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Pr(s,i),Hr(i),f&4&&gv(i);break;case 21:break;default:Pr(s,i),Hr(i)}}function Hr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(hv(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(we(m,""),f.flags&=-33);var y=pv(i);jh(i,y,m);break;case 3:case 4:var A=f.stateNode.containerInfo,B=pv(i);Xh(i,B,A);break;default:throw Error(t(161))}}catch(W){En(i,i.return,W)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function d1(i,s,l){$e=i,vv(i)}function vv(i,s,l){for(var f=(i.mode&1)!==0;$e!==null;){var m=$e,y=m.child;if(m.tag===22&&f){var A=m.memoizedState!==null||Hc;if(!A){var B=m.alternate,W=B!==null&&B.memoizedState!==null||li;B=Hc;var ce=li;if(Hc=A,(li=W)&&!ce)for($e=m;$e!==null;)A=$e,W=A.child,A.tag===22&&A.memoizedState!==null?Sv(m):W!==null?(W.return=A,$e=W):Sv(m);for(;y!==null;)$e=y,vv(y),y=y.sibling;$e=m,Hc=B,li=ce}xv(i)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,$e=y):xv(i)}}function xv(i){for(;$e!==null;){var s=$e;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:li||Gc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!li)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Cr(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&g0(s,y,f);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}g0(s,A,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var W=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ce=s.alternate;if(ce!==null){var Me=ce.memoizedState;if(Me!==null){var Ce=Me.dehydrated;Ce!==null&&Fl(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}li||s.flags&512&&Wh(s)}catch(Se){En(s,s.return,Se)}}if(s===i){$e=null;break}if(l=s.sibling,l!==null){l.return=s.return,$e=l;break}$e=s.return}}function yv(i){for(;$e!==null;){var s=$e;if(s===i){$e=null;break}var l=s.sibling;if(l!==null){l.return=s.return,$e=l;break}$e=s.return}}function Sv(i){for(;$e!==null;){var s=$e;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Gc(4,s)}catch(W){En(s,l,W)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(W){En(s,m,W)}}var y=s.return;try{Wh(s)}catch(W){En(s,y,W)}break;case 5:var A=s.return;try{Wh(s)}catch(W){En(s,A,W)}}}catch(W){En(s,s.return,W)}if(s===i){$e=null;break}var B=s.sibling;if(B!==null){B.return=s.return,$e=B;break}$e=s.return}}var h1=Math.ceil,Wc=w.ReactCurrentDispatcher,Yh=w.ReactCurrentOwner,dr=w.ReactCurrentBatchConfig,Xt=0,Xn=null,Pn=null,Jn=0,$i=0,Ua=ks(0),On=0,ou=null,Po=0,Xc=0,qh=0,au=null,Ni=null,$h=0,ka=1/0,os=null,jc=!1,Kh=null,Hs=null,Yc=!1,Gs=null,qc=0,lu=0,Zh=null,$c=-1,Kc=0;function yi(){return(Xt&6)!==0?G():$c!==-1?$c:$c=G()}function Ws(i){return(i.mode&1)===0?1:(Xt&2)!==0&&Jn!==0?Jn&-Jn:KE.transition!==null?(Kc===0&&(Kc=vi()),Kc):(i=Ot,i!==0||(i=window.event,i=i===void 0?16:M_(i.type)),i)}function Dr(i,s,l,f){if(50<lu)throw lu=0,Zh=null,Error(t(185));wn(i,l,f),((Xt&2)===0||i!==Xn)&&(i===Xn&&((Xt&2)===0&&(Xc|=l),On===4&&Xs(i,Jn)),Ii(i,f),l===1&&Xt===0&&(s.mode&1)===0&&(ka=G()+500,Tc&&Os()))}function Ii(i,s){var l=i.callbackNode;So(i,s);var f=wr(i,i===Xn?Jn:0);if(f===0)l!==null&&Y(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&Y(l),s===1)i.tag===0?$E(Ev.bind(null,i)):a0(Ev.bind(null,i)),XE(function(){(Xt&6)===0&&Os()}),l=null;else{switch(p_(f)){case 1:l=De;break;case 4:l=qe;break;case 16:l=Ve;break;case 536870912:l=it;break;default:l=Ve}l=Dv(l,Mv.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Mv(i,s){if($c=-1,Kc=0,(Xt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Fa()&&i.callbackNode!==l)return null;var f=wr(i,i===Xn?Jn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=Zc(i,f);else{s=f;var m=Xt;Xt|=2;var y=wv();(Xn!==i||Jn!==s)&&(os=null,ka=G()+500,Lo(i,s));do try{g1();break}catch(B){Tv(i,B)}while(!0);mh(),Wc.current=y,Xt=m,Pn!==null?s=0:(Xn=null,Jn=0,s=On)}if(s!==0){if(s===2&&(m=on(i),m!==0&&(f=m,s=Qh(i,m))),s===1)throw l=ou,Lo(i,0),Xs(i,f),Ii(i,G()),l;if(s===6)Xs(i,f);else{if(m=i.current.alternate,(f&30)===0&&!p1(m)&&(s=Zc(i,f),s===2&&(y=on(i),y!==0&&(f=y,s=Qh(i,y))),s===1))throw l=ou,Lo(i,0),Xs(i,f),Ii(i,G()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:No(i,Ni,os);break;case 3:if(Xs(i,f),(f&130023424)===f&&(s=$h+500-G(),10<s)){if(wr(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){yi(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=rh(No.bind(null,i,Ni,os),s);break}No(i,Ni,os);break;case 4:if(Xs(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var A=31-Wt(f);y=1<<A,A=s[A],A>m&&(m=A),f&=~y}if(f=m,f=G()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*h1(f/1960))-f,10<f){i.timeoutHandle=rh(No.bind(null,i,Ni,os),f);break}No(i,Ni,os);break;case 5:No(i,Ni,os);break;default:throw Error(t(329))}}}return Ii(i,G()),i.callbackNode===l?Mv.bind(null,i):null}function Qh(i,s){var l=au;return i.current.memoizedState.isDehydrated&&(Lo(i,s).flags|=256),i=Zc(i,s),i!==2&&(s=Ni,Ni=l,s!==null&&Jh(s)),i}function Jh(i){Ni===null?Ni=i:Ni.push.apply(Ni,i)}function p1(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],y=m.getSnapshot;m=m.value;try{if(!Ar(y(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Xs(i,s){for(s&=~qh,s&=~Xc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Wt(s),f=1<<l;i[l]=-1,s&=~f}}function Ev(i){if((Xt&6)!==0)throw Error(t(327));Fa();var s=wr(i,0);if((s&1)===0)return Ii(i,G()),null;var l=Zc(i,s);if(i.tag!==0&&l===2){var f=on(i);f!==0&&(s=f,l=Qh(i,f))}if(l===1)throw l=ou,Lo(i,0),Xs(i,s),Ii(i,G()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,No(i,Ni,os),Ii(i,G()),null}function ep(i,s){var l=Xt;Xt|=1;try{return i(s)}finally{Xt=l,Xt===0&&(ka=G()+500,Tc&&Os())}}function Do(i){Gs!==null&&Gs.tag===0&&(Xt&6)===0&&Fa();var s=Xt;Xt|=1;var l=dr.transition,f=Ot;try{if(dr.transition=null,Ot=1,i)return i()}finally{Ot=f,dr.transition=l,Xt=s,(Xt&6)===0&&Os()}}function tp(){$i=Ua.current,hn(Ua)}function Lo(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,WE(l)),Pn!==null)for(l=Pn.return;l!==null;){var f=l;switch(ch(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Mc();break;case 3:La(),hn(Pi),hn(si),wh();break;case 5:Eh(f);break;case 4:La();break;case 13:hn(vn);break;case 19:hn(vn);break;case 10:gh(f.type._context);break;case 22:case 23:tp()}l=l.return}if(Xn=i,Pn=i=js(i.current,null),Jn=$i=s,On=0,ou=null,qh=Xc=Po=0,Ni=au=null,bo!==null){for(s=0;s<bo.length;s++)if(l=bo[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,y=l.pending;if(y!==null){var A=y.next;y.next=m,f.next=A}l.pending=f}bo=null}return i}function Tv(i,s){do{var l=Pn;try{if(mh(),Uc.current=zc,kc){for(var f=xn.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}kc=!1}if(Ro=0,Wn=Fn=xn=null,eu=!1,tu=0,Yh.current=null,l===null||l.return===null){On=1,ou=s,Pn=null;break}e:{var y=i,A=l.return,B=l,W=s;if(s=Jn,B.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ce=W,Me=B,Ce=Me.tag;if((Me.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Xe=$0(A);if(Xe!==null){Xe.flags&=-257,K0(Xe,A,B,y,s),Xe.mode&1&&q0(y,ce,s),s=Xe,W=ce;var Qe=s.updateQueue;if(Qe===null){var nt=new Set;nt.add(W),s.updateQueue=nt}else Qe.add(W);break e}else{if((s&1)===0){q0(y,ce,s),np();break e}W=Error(t(426))}}else if(mn&&B.mode&1){var An=$0(A);if(An!==null){(An.flags&65536)===0&&(An.flags|=256),K0(An,A,B,y,s),hh(Na(W,B));break e}}y=W=Na(W,B),On!==4&&(On=2),au===null?au=[y]:au.push(y),y=A;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var ie=j0(y,W,s);m0(y,ie);break e;case 1:B=W;var q=y.type,re=y.stateNode;if((y.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Hs===null||!Hs.has(re)))){y.flags|=65536,s&=-s,y.lanes|=s;var Re=Y0(y,B,s);m0(y,Re);break e}}y=y.return}while(y!==null)}bv(l)}catch(rt){s=rt,Pn===l&&l!==null&&(Pn=l=l.return);continue}break}while(!0)}function wv(){var i=Wc.current;return Wc.current=zc,i===null?zc:i}function np(){(On===0||On===3||On===2)&&(On=4),Xn===null||(Po&268435455)===0&&(Xc&268435455)===0||Xs(Xn,Jn)}function Zc(i,s){var l=Xt;Xt|=2;var f=wv();(Xn!==i||Jn!==s)&&(os=null,Lo(i,s));do try{m1();break}catch(m){Tv(i,m)}while(!0);if(mh(),Xt=l,Wc.current=f,Pn!==null)throw Error(t(261));return Xn=null,Jn=0,On}function m1(){for(;Pn!==null;)Av(Pn)}function g1(){for(;Pn!==null&&!ae();)Av(Pn)}function Av(i){var s=Pv(i.alternate,i,$i);i.memoizedProps=i.pendingProps,s===null?bv(i):Pn=s,Yh.current=null}function bv(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=l1(l,s,$i),l!==null){Pn=l;return}}else{if(l=u1(l,s),l!==null){l.flags&=32767,Pn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{On=6,Pn=null;return}}if(s=s.sibling,s!==null){Pn=s;return}Pn=s=i}while(s!==null);On===0&&(On=5)}function No(i,s,l){var f=Ot,m=dr.transition;try{dr.transition=null,Ot=1,_1(i,s,l,f)}finally{dr.transition=m,Ot=f}return null}function _1(i,s,l,f){do Fa();while(Gs!==null);if((Xt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var y=l.lanes|l.childLanes;if(ri(i,y),i===Xn&&(Pn=Xn=null,Jn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Yc||(Yc=!0,Dv(Ve,function(){return Fa(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=dr.transition,dr.transition=null;var A=Ot;Ot=1;var B=Xt;Xt|=4,Yh.current=null,f1(i,l),_v(l,i),FE(nh),lc=!!th,nh=th=null,i.current=l,d1(l),ue(),Xt=B,Ot=A,dr.transition=y}else i.current=l;if(Yc&&(Yc=!1,Gs=i,qc=m),y=i.pendingLanes,y===0&&(Hs=null),Dt(l.stateNode),Ii(i,G()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(jc)throw jc=!1,i=Kh,Kh=null,i;return(qc&1)!==0&&i.tag!==0&&Fa(),y=i.pendingLanes,(y&1)!==0?i===Zh?lu++:(lu=0,Zh=i):lu=0,Os(),null}function Fa(){if(Gs!==null){var i=p_(qc),s=dr.transition,l=Ot;try{if(dr.transition=null,Ot=16>i?16:i,Gs===null)var f=!1;else{if(i=Gs,Gs=null,qc=0,(Xt&6)!==0)throw Error(t(331));var m=Xt;for(Xt|=4,$e=i.current;$e!==null;){var y=$e,A=y.child;if(($e.flags&16)!==0){var B=y.deletions;if(B!==null){for(var W=0;W<B.length;W++){var ce=B[W];for($e=ce;$e!==null;){var Me=$e;switch(Me.tag){case 0:case 11:case 15:su(8,Me,y)}var Ce=Me.child;if(Ce!==null)Ce.return=Me,$e=Ce;else for(;$e!==null;){Me=$e;var Se=Me.sibling,Xe=Me.return;if(dv(Me),Me===ce){$e=null;break}if(Se!==null){Se.return=Xe,$e=Se;break}$e=Xe}}}var Qe=y.alternate;if(Qe!==null){var nt=Qe.child;if(nt!==null){Qe.child=null;do{var An=nt.sibling;nt.sibling=null,nt=An}while(nt!==null)}}$e=y}}if((y.subtreeFlags&2064)!==0&&A!==null)A.return=y,$e=A;else e:for(;$e!==null;){if(y=$e,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:su(9,y,y.return)}var ie=y.sibling;if(ie!==null){ie.return=y.return,$e=ie;break e}$e=y.return}}var q=i.current;for($e=q;$e!==null;){A=$e;var re=A.child;if((A.subtreeFlags&2064)!==0&&re!==null)re.return=A,$e=re;else e:for(A=q;$e!==null;){if(B=$e,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Gc(9,B)}}catch(rt){En(B,B.return,rt)}if(B===A){$e=null;break e}var Re=B.sibling;if(Re!==null){Re.return=B.return,$e=Re;break e}$e=B.return}}if(Xt=m,Os(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Ze,i)}catch{}f=!0}return f}finally{Ot=l,dr.transition=s}}return!1}function Cv(i,s,l){s=Na(l,s),s=j0(i,s,1),i=Bs(i,s,1),s=yi(),i!==null&&(wn(i,1,s),Ii(i,s))}function En(i,s,l){if(i.tag===3)Cv(i,i,l);else for(;s!==null;){if(s.tag===3){Cv(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Hs===null||!Hs.has(f))){i=Na(l,i),i=Y0(s,i,1),s=Bs(s,i,1),i=yi(),s!==null&&(wn(s,1,i),Ii(s,i));break}}s=s.return}}function v1(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=yi(),i.pingedLanes|=i.suspendedLanes&l,Xn===i&&(Jn&l)===l&&(On===4||On===3&&(Jn&130023424)===Jn&&500>G()-$h?Lo(i,0):qh|=l),Ii(i,s)}function Rv(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var l=yi();i=is(i,s),i!==null&&(wn(i,s,l),Ii(i,l))}function x1(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Rv(i,l)}function y1(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Rv(i,l)}var Pv;Pv=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Pi.current)Li=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Li=!1,a1(i,s,l);Li=(i.flags&131072)!==0}else Li=!1,mn&&(s.flags&1048576)!==0&&l0(s,Ac,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Vc(i,s),i=s.pendingProps;var m=wa(s,si.current);Pa(s,l),m=Ch(null,s,f,i,m,l);var y=Rh();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Di(f)?(y=!0,Ec(s)):y=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,xh(s),m.updater=Lc,s.stateNode=m,m._reactInternals=s,Sh(s,f,i,l),s=Fh(null,s,f,!0,y,l)):(s.tag=0,mn&&y&&uh(s),xi(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Vc(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=M1(f),i=Cr(f,i),m){case 0:s=kh(null,s,f,i,l);break e;case 1:s=nv(null,s,f,i,l);break e;case 11:s=Z0(null,s,f,i,l);break e;case 14:s=Q0(null,s,f,Cr(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Cr(f,m),kh(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Cr(f,m),nv(i,s,f,m,l);case 3:e:{if(iv(s),i===null)throw Error(t(387));f=s.pendingProps,y=s.memoizedState,m=y.element,p0(i,s),Dc(s,f,null,l);var A=s.memoizedState;if(f=A.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){m=Na(Error(t(423)),s),s=rv(i,s,f,l,m);break e}else if(f!==m){m=Na(Error(t(424)),s),s=rv(i,s,f,l,m);break e}else for(qi=Us(s.stateNode.containerInfo.firstChild),Yi=s,mn=!0,br=null,l=E0(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ca(),f===m){s=ss(i,s,l);break e}xi(i,s,f,l)}s=s.child}return s;case 5:return T0(s),i===null&&dh(s),f=s.type,m=s.pendingProps,y=i!==null?i.memoizedProps:null,A=m.children,ih(f,m)?A=null:y!==null&&ih(f,y)&&(s.flags|=32),tv(i,s),xi(i,s,A,l),s.child;case 6:return i===null&&dh(s),null;case 13:return sv(i,s,l);case 4:return Mh(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Da(s,null,f,l):xi(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Cr(f,m),Z0(i,s,f,m,l);case 7:return xi(i,s,s.pendingProps,l),s.child;case 8:return xi(i,s,s.pendingProps.children,l),s.child;case 12:return xi(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,y=s.memoizedProps,A=m.value,cn(Cc,f._currentValue),f._currentValue=A,y!==null)if(Ar(y.value,A)){if(y.children===m.children&&!Pi.current){s=ss(i,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var B=y.dependencies;if(B!==null){A=y.child;for(var W=B.firstContext;W!==null;){if(W.context===f){if(y.tag===1){W=rs(-1,l&-l),W.tag=2;var ce=y.updateQueue;if(ce!==null){ce=ce.shared;var Me=ce.pending;Me===null?W.next=W:(W.next=Me.next,Me.next=W),ce.pending=W}}y.lanes|=l,W=y.alternate,W!==null&&(W.lanes|=l),_h(y.return,l,s),B.lanes|=l;break}W=W.next}}else if(y.tag===10)A=y.type===s.type?null:y.child;else if(y.tag===18){if(A=y.return,A===null)throw Error(t(341));A.lanes|=l,B=A.alternate,B!==null&&(B.lanes|=l),_h(A,l,s),A=y.sibling}else A=y.child;if(A!==null)A.return=y;else for(A=y;A!==null;){if(A===s){A=null;break}if(y=A.sibling,y!==null){y.return=A.return,A=y;break}A=A.return}y=A}xi(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,Pa(s,l),m=cr(m),f=f(m),s.flags|=1,xi(i,s,f,l),s.child;case 14:return f=s.type,m=Cr(f,s.pendingProps),m=Cr(f.type,m),Q0(i,s,f,m,l);case 15:return J0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Cr(f,m),Vc(i,s),s.tag=1,Di(f)?(i=!0,Ec(s)):i=!1,Pa(s,l),x0(s,f,m),Sh(s,f,m,l),Fh(null,s,f,!0,i,l);case 19:return av(i,s,l);case 22:return ev(i,s,l)}throw Error(t(156,s.tag))};function Dv(i,s){return P(i,s)}function S1(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hr(i,s,l,f){return new S1(i,s,l,f)}function ip(i){return i=i.prototype,!(!i||!i.isReactComponent)}function M1(i){if(typeof i=="function")return ip(i)?1:0;if(i!=null){if(i=i.$$typeof,i===X)return 11;if(i===se)return 14}return 2}function js(i,s){var l=i.alternate;return l===null?(l=hr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Qc(i,s,l,f,m,y){var A=2;if(f=i,typeof i=="function")ip(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case L:return Io(l.children,m,y,s);case k:A=8,m|=8;break;case b:return i=hr(12,l,s,m|2),i.elementType=b,i.lanes=y,i;case J:return i=hr(13,l,s,m),i.elementType=J,i.lanes=y,i;case ne:return i=hr(19,l,s,m),i.elementType=ne,i.lanes=y,i;case Q:return Jc(l,m,y,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:A=10;break e;case z:A=9;break e;case X:A=11;break e;case se:A=14;break e;case ee:A=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=hr(A,l,s,m),s.elementType=i,s.type=f,s.lanes=y,s}function Io(i,s,l,f){return i=hr(7,i,f,s),i.lanes=l,i}function Jc(i,s,l,f){return i=hr(22,i,f,s),i.elementType=Q,i.lanes=l,i.stateNode={isHidden:!1},i}function rp(i,s,l){return i=hr(6,i,null,s),i.lanes=l,i}function sp(i,s,l){return s=hr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function E1(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function op(i,s,l,f,m,y,A,B,W){return i=new E1(i,s,l,B,W),s===1?(s=1,y===!0&&(s|=8)):s=0,y=hr(3,null,null,s),i.current=y,y.stateNode=i,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(y),i}function T1(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function Lv(i){if(!i)return Fs;i=i._reactInternals;e:{if(kt(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Di(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Di(l))return s0(i,l,s)}return s}function Nv(i,s,l,f,m,y,A,B,W){return i=op(l,f,!0,i,m,y,A,B,W),i.context=Lv(null),l=i.current,f=yi(),m=Ws(l),y=rs(f,m),y.callback=s??null,Bs(l,y,m),i.current.lanes=m,wn(i,m,f),Ii(i,f),i}function ef(i,s,l,f){var m=s.current,y=yi(),A=Ws(m);return l=Lv(l),s.context===null?s.context=l:s.pendingContext=l,s=rs(y,A),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Bs(m,s,A),i!==null&&(Dr(i,m,A,y),Pc(i,m,A)),A}function tf(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Iv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function ap(i,s){Iv(i,s),(i=i.alternate)&&Iv(i,s)}function w1(){return null}var Uv=typeof reportError=="function"?reportError:function(i){console.error(i)};function lp(i){this._internalRoot=i}nf.prototype.render=lp.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));ef(i,s,null,null)},nf.prototype.unmount=lp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Do(function(){ef(null,i,null,null)}),s[Jr]=null}};function nf(i){this._internalRoot=i}nf.prototype.unstable_scheduleHydration=function(i){if(i){var s=__();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Ls.length&&s!==0&&s<Ls[l].priority;l++);Ls.splice(l,0,i),l===0&&y_(i)}};function up(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function rf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function kv(){}function A1(i,s,l,f,m){if(m){if(typeof f=="function"){var y=f;f=function(){var ce=tf(A);y.call(ce)}}var A=Nv(s,f,i,0,null,!1,!1,"",kv);return i._reactRootContainer=A,i[Jr]=A.current,jl(i.nodeType===8?i.parentNode:i),Do(),A}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var B=f;f=function(){var ce=tf(W);B.call(ce)}}var W=op(i,0,!1,null,null,!1,!1,"",kv);return i._reactRootContainer=W,i[Jr]=W.current,jl(i.nodeType===8?i.parentNode:i),Do(function(){ef(s,W,l,f)}),W}function sf(i,s,l,f,m){var y=l._reactRootContainer;if(y){var A=y;if(typeof m=="function"){var B=m;m=function(){var W=tf(A);B.call(W)}}ef(s,A,i,m)}else A=A1(l,s,i,m,f);return tf(A)}m_=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=kn(s.pendingLanes);l!==0&&(Mo(s,l|1),Ii(s,G()),(Xt&6)===0&&(ka=G()+500,Os()))}break;case 13:Do(function(){var f=is(i,1);if(f!==null){var m=yi();Dr(f,i,1,m)}}),ap(i,1)}},Id=function(i){if(i.tag===13){var s=is(i,134217728);if(s!==null){var l=yi();Dr(s,i,134217728,l)}ap(i,134217728)}},g_=function(i){if(i.tag===13){var s=Ws(i),l=is(i,s);if(l!==null){var f=yi();Dr(l,i,s,f)}ap(i,s)}},__=function(){return Ot},v_=function(i,s){var l=Ot;try{return Ot=i,s()}finally{Ot=l}},Ee=function(i,s,l){switch(s){case"input":if($(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=Sc(f);if(!m)throw Error(t(90));ct(f),$(f,m)}}}break;case"textarea":R(i,l);break;case"select":s=l.value,s!=null&&St(i,!!l.multiple,s,!1)}},ft=ep,Vt=Do;var b1={usingClientEntryPoint:!1,Events:[$l,Ea,Sc,ge,We,ep]},uu={findFiberByHostInstance:Eo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},C1={bundleType:uu.bundleType,version:uu.version,rendererPackageName:uu.rendererPackageName,rendererConfig:uu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=gi(i),i===null?null:i.stateNode},findFiberByHostInstance:uu.findFiberByHostInstance||w1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var of=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!of.isDisabled&&of.supportsFiber)try{Ze=of.inject(C1),_t=of}catch{}}return Ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b1,Ui.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(s))throw Error(t(200));return T1(i,s,null,l)},Ui.createRoot=function(i,s){if(!up(i))throw Error(t(299));var l=!1,f="",m=Uv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=op(i,1,!1,null,null,l,!1,f,m),i[Jr]=s.current,jl(i.nodeType===8?i.parentNode:i),new lp(s)},Ui.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=gi(s),i=i===null?null:i.stateNode,i},Ui.flushSync=function(i){return Do(i)},Ui.hydrate=function(i,s,l){if(!rf(s))throw Error(t(200));return sf(null,i,s,!0,l)},Ui.hydrateRoot=function(i,s,l){if(!up(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,y="",A=Uv;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=Nv(s,null,i,1,l??null,m,!1,y,A),i[Jr]=s.current,jl(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new nf(s)},Ui.render=function(i,s,l){if(!rf(s))throw Error(t(200));return sf(null,i,s,!1,l)},Ui.unmountComponentAtNode=function(i){if(!rf(i))throw Error(t(40));return i._reactRootContainer?(Do(function(){sf(null,null,i,!1,function(){i._reactRootContainer=null,i[Jr]=null})}),!0):!1},Ui.unstable_batchedUpdates=ep,Ui.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!rf(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return sf(i,s,l,!1,f)},Ui.version="18.2.0-next-9e3b772b8-20220608",Ui}var Wv;function k1(){if(Wv)return dp.exports;Wv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dp.exports=U1(),dp.exports}var Xv;function F1(){if(Xv)return af;Xv=1;var o=k1();return af.createRoot=o.createRoot,af.hydrateRoot=o.hydrateRoot,af}var O1=F1();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pg="179",z1=0,jv=1,B1=2,Iy=1,V1=2,hs=3,po=0,Oi=1,gs=2,lo=0,ll=1,fm=2,Yv=3,qv=4,H1=5,$o=100,G1=101,W1=102,X1=103,j1=104,Y1=200,q1=201,$1=202,K1=203,dm=204,hm=205,Z1=206,Q1=207,J1=208,eT=209,tT=210,nT=211,iT=212,rT=213,sT=214,pm=0,mm=1,gm=2,_l=3,_m=4,vm=5,xm=6,ym=7,Uy=0,oT=1,aT=2,uo=0,lT=1,uT=2,cT=3,fT=4,dT=5,hT=6,pT=7,ky=300,vl=301,xl=302,Sm=303,Mm=304,wd=306,Em=1e3,Zo=1001,Tm=1002,Or=1003,mT=1004,lf=1005,Yr=1006,mp=1007,Qo=1008,Ts=1009,Fy=1010,Oy=1011,Bu=1012,Dg=1013,ua=1014,vs=1015,Ju=1016,Lg=1017,Ng=1018,Vu=1020,zy=35902,By=1021,Vy=1022,Fr=1023,Hu=1026,Gu=1027,Hy=1028,Ig=1029,Gy=1030,Ug=1031,kg=1033,Yf=33776,qf=33777,$f=33778,Kf=33779,wm=35840,Am=35841,bm=35842,Cm=35843,Rm=36196,Pm=37492,Dm=37496,Lm=37808,Nm=37809,Im=37810,Um=37811,km=37812,Fm=37813,Om=37814,zm=37815,Bm=37816,Vm=37817,Hm=37818,Gm=37819,Wm=37820,Xm=37821,Zf=36492,jm=36494,Ym=36495,Wy=36283,qm=36284,$m=36285,Km=36286,gT=3200,_T=3201,vT=0,xT=1,no="",gr="srgb",yl="srgb-linear",ld="linear",tn="srgb",Oa=7680,$v=519,yT=512,ST=513,MT=514,Xy=515,ET=516,TT=517,wT=518,AT=519,Kv=35044,Zv="300 es",qr=2e3,ud=2001;class Rl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,e);e.target=null}}}const ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gp=Math.PI/180,Zm=180/Math.PI;function ec(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ui[o&255]+ui[o>>8&255]+ui[o>>16&255]+ui[o>>24&255]+"-"+ui[e&255]+ui[e>>8&255]+"-"+ui[e>>16&15|64]+ui[e>>24&255]+"-"+ui[t&63|128]+ui[t>>8&255]+"-"+ui[t>>16&255]+ui[t>>24&255]+ui[n&255]+ui[n>>8&255]+ui[n>>16&255]+ui[n>>24&255]).toLowerCase()}function Ht(o,e,t){return Math.max(e,Math.min(t,o))}function bT(o,e){return(o%e+e)%e}function _p(o,e,t){return(1-t)*o+t*e}function fu(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ki(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class nn{constructor(e=0,t=0){nn.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ht(this.x,e.x,t.x),this.y=Ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ht(this.x,e,t),this.y=Ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*r+e.x,this.y=a*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tc{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,u,c){let d=n[r+0],h=n[r+1],p=n[r+2],g=n[r+3];const _=a[u+0],v=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=v,e[t+2]=E,e[t+3]=M;return}if(g!==M||d!==_||h!==v||p!==E){let S=1-c;const x=d*_+h*v+p*E+g*M,N=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const I=Math.sqrt(D),U=Math.atan2(I,x*N);S=Math.sin(S*U)/I,c=Math.sin(c*U)/I}const w=c*N;if(d=d*S+_*w,h=h*S+v*w,p=p*S+E*w,g=g*S+M*w,S===1-c){const I=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=I,h*=I,p*=I,g*=I}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,u){const c=n[r],d=n[r+1],h=n[r+2],p=n[r+3],g=a[u],_=a[u+1],v=a[u+2],E=a[u+3];return e[t]=c*E+p*g+d*v-h*_,e[t+1]=d*E+p*_+h*g-c*v,e[t+2]=h*E+p*v+c*_-d*g,e[t+3]=p*E-c*g-d*_-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(r/2),g=c(a/2),_=d(n/2),v=d(r/2),E=d(a/2);switch(u){case"XYZ":this._x=_*p*g+h*v*E,this._y=h*v*g-_*p*E,this._z=h*p*E+_*v*g,this._w=h*p*g-_*v*E;break;case"YXZ":this._x=_*p*g+h*v*E,this._y=h*v*g-_*p*E,this._z=h*p*E-_*v*g,this._w=h*p*g+_*v*E;break;case"ZXY":this._x=_*p*g-h*v*E,this._y=h*v*g+_*p*E,this._z=h*p*E+_*v*g,this._w=h*p*g-_*v*E;break;case"ZYX":this._x=_*p*g-h*v*E,this._y=h*v*g+_*p*E,this._z=h*p*E-_*v*g,this._w=h*p*g+_*v*E;break;case"YZX":this._x=_*p*g+h*v*E,this._y=h*v*g+_*p*E,this._z=h*p*E-_*v*g,this._w=h*p*g-_*v*E;break;case"XZY":this._x=_*p*g-h*v*E,this._y=h*v*g-_*p*E,this._z=h*p*E+_*v*g,this._w=h*p*g+_*v*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],_=n+c+g;if(_>0){const v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(p-d)*v,this._y=(a-h)*v,this._z=(u-r)*v}else if(n>c&&n>g){const v=2*Math.sqrt(1+n-c-g);this._w=(p-d)/v,this._x=.25*v,this._y=(r+u)/v,this._z=(a+h)/v}else if(c>g){const v=2*Math.sqrt(1+c-n-g);this._w=(a-h)/v,this._x=(r+u)/v,this._y=.25*v,this._z=(d+p)/v}else{const v=2*Math.sqrt(1+g-n-c);this._w=(u-r)/v,this._x=(a+h)/v,this._y=(d+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+r*h-a*d,this._y=r*p+u*d+a*c-n*h,this._z=a*p+u*h+n*d-r*c,this._w=u*p-n*c-r*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=r,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const v=1-t;return this._w=v*u+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=u*g+this._w*_,this._x=n*g+this._x*_,this._y=r*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,t=0,n=0){fe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*r-c*n),p=2*(c*t-a*r),g=2*(a*n-u*t);return this.x=t+d*h+u*g-c*p,this.y=n+d*p+c*h-a*g,this.z=r+d*g+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ht(this.x,e.x,t.x),this.y=Ht(this.y,e.y,t.y),this.z=Ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ht(this.x,e,t),this.y=Ht(this.y,e,t),this.z=Ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*u-n*d,this.z=n*c-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vp.copy(this).projectOnVector(e),this.sub(vp)}reflect(e){return this.sub(vp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vp=new fe,Qv=new tc;class Rt{constructor(e,t,n,r,a,u,c,d,h){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h)}set(e,t,n,r,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[3],d=n[6],h=n[1],p=n[4],g=n[7],_=n[2],v=n[5],E=n[8],M=r[0],S=r[3],x=r[6],N=r[1],D=r[4],w=r[7],I=r[2],U=r[5],L=r[8];return a[0]=u*M+c*N+d*I,a[3]=u*S+c*D+d*U,a[6]=u*x+c*w+d*L,a[1]=h*M+p*N+g*I,a[4]=h*S+p*D+g*U,a[7]=h*x+p*w+g*L,a[2]=_*M+v*N+E*I,a[5]=_*S+v*D+E*U,a[8]=_*x+v*w+E*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*a*p+n*c*d+r*a*h-r*u*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,_=c*d-p*a,v=h*a-u*d,E=t*g+n*_+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(r*h-p*n)*M,e[2]=(c*n-r*u)*M,e[3]=_*M,e[4]=(p*t-r*d)*M,e[5]=(r*a-c*t)*M,e[6]=v*M,e[7]=(n*d-h*t)*M,e[8]=(u*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*u+h*c)+u+e,-r*h,r*d,-r*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(xp.makeScale(e,t)),this}rotate(e){return this.premultiply(xp.makeRotation(-e)),this}translate(e,t){return this.premultiply(xp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xp=new Rt;function jy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function cd(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function CT(){const o=cd("canvas");return o.style.display="block",o}const Jv={};function ul(o){o in Jv||(Jv[o]=!0,console.warn(o))}function RT(o,e,t){return new Promise(function(n,r){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const ex=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tx=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){const o={enabled:!0,workingColorSpace:yl,spaces:{},convert:function(r,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===tn&&(r.r=Ms(r.r),r.g=Ms(r.g),r.b=Ms(r.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===tn&&(r.r=cl(r.r),r.g=cl(r.g),r.b=cl(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===no?ld:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,u){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ul("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ul("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[yl]:{primaries:e,whitePoint:n,transfer:ld,toXYZ:ex,fromXYZ:tx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gr},outputColorSpaceConfig:{drawingBufferColorSpace:gr}},[gr]:{primaries:e,whitePoint:n,transfer:tn,toXYZ:ex,fromXYZ:tx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gr}}}),o}const Yt=PT();function Ms(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function cl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let za;class DT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{za===void 0&&(za=cd("canvas")),za.width=e.width,za.height=e.height;const r=za.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=za}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cd("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=Ms(a[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LT=0;class Fg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=ec(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,c=r.length;u<c;u++)r[u].isDataTexture?a.push(yp(r[u].image)):a.push(yp(r[u]))}else a=yp(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function yp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?DT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NT=0;const Sp=new fe;class zi extends Rl{constructor(e=zi.DEFAULT_IMAGE,t=zi.DEFAULT_MAPPING,n=Zo,r=Zo,a=Yr,u=Qo,c=Fr,d=Ts,h=zi.DEFAULT_ANISOTROPY,p=no){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=ec(),this.name="",this.source=new Fg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new nn(0,0),this.repeat=new nn(1,1),this.center=new nn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sp).x}get height(){return this.source.getSize(Sp).y}get depth(){return this.source.getSize(Sp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ky)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Em:e.x=e.x-Math.floor(e.x);break;case Zo:e.x=e.x<0?0:1;break;case Tm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Em:e.y=e.y-Math.floor(e.y);break;case Zo:e.y=e.y<0?0:1;break;case Tm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zi.DEFAULT_IMAGE=null;zi.DEFAULT_MAPPING=ky;zi.DEFAULT_ANISOTROPY=1;class Cn{constructor(e=0,t=0,n=0,r=1){Cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,h=d[0],p=d[4],g=d[8],_=d[1],v=d[5],E=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(p-_)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,w=(v+1)/2,I=(x+1)/2,U=(p+_)/4,L=(g+M)/4,k=(E+S)/4;return D>w&&D>I?D<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(D),r=U/n,a=L/n):w>I?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=U/r,a=k/r):I<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(I),n=L/a,r=k/a),this.set(n,r,a,t),this}let N=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(_-p)*(_-p));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(g-M)/N,this.z=(_-p)/N,this.w=Math.acos((h+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ht(this.x,e.x,t.x),this.y=Ht(this.y,e.y,t.y),this.z=Ht(this.z,e.z,t.z),this.w=Ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ht(this.x,e,t),this.y=Ht(this.y,e,t),this.z=Ht(this.z,e,t),this.w=Ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IT extends Rl{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Cn(0,0,e,t),this.scissorTest=!1,this.viewport=new Cn(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new zi(r);this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Yr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ca extends IT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yy extends zi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Or,this.minFilter=Or,this.wrapR=Zo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class UT extends zi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Or,this.minFilter=Or,this.wrapR=Zo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nc{constructor(e=new fe(1/0,1/0,1/0),t=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Lr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Lr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Lr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Lr):Lr.fromBufferAttribute(a,u),Lr.applyMatrix4(e.matrixWorld),this.expandByPoint(Lr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uf.copy(n.boundingBox)),uf.applyMatrix4(e.matrixWorld),this.union(uf)}const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Lr),Lr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(du),cf.subVectors(this.max,du),Ba.subVectors(e.a,du),Va.subVectors(e.b,du),Ha.subVectors(e.c,du),qs.subVectors(Va,Ba),$s.subVectors(Ha,Va),Uo.subVectors(Ba,Ha);let t=[0,-qs.z,qs.y,0,-$s.z,$s.y,0,-Uo.z,Uo.y,qs.z,0,-qs.x,$s.z,0,-$s.x,Uo.z,0,-Uo.x,-qs.y,qs.x,0,-$s.y,$s.x,0,-Uo.y,Uo.x,0];return!Mp(t,Ba,Va,Ha,cf)||(t=[1,0,0,0,1,0,0,0,1],!Mp(t,Ba,Va,Ha,cf))?!1:(ff.crossVectors(qs,$s),t=[ff.x,ff.y,ff.z],Mp(t,Ba,Va,Ha,cf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Lr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(as),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const as=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Lr=new fe,uf=new nc,Ba=new fe,Va=new fe,Ha=new fe,qs=new fe,$s=new fe,Uo=new fe,du=new fe,cf=new fe,ff=new fe,ko=new fe;function Mp(o,e,t,n,r){for(let a=0,u=o.length-3;a<=u;a+=3){ko.fromArray(o,a);const c=r.x*Math.abs(ko.x)+r.y*Math.abs(ko.y)+r.z*Math.abs(ko.z),d=e.dot(ko),h=t.dot(ko),p=n.dot(ko);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const kT=new nc,hu=new fe,Ep=new fe;class Ad{constructor(e=new fe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kT.setFromPoints(e).getCenter(n);let r=0;for(let a=0,u=e.length;a<u;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hu.subVectors(e,this.center);const t=hu.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(hu,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ep.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hu.copy(e.center).add(Ep)),this.expandByPoint(hu.copy(e.center).sub(Ep))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ls=new fe,Tp=new fe,df=new fe,Ks=new fe,wp=new fe,hf=new fe,Ap=new fe;class qy{constructor(e=new fe,t=new fe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ls)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ls.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ls.copy(this.origin).addScaledVector(this.direction,t),ls.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Tp.copy(e).add(t).multiplyScalar(.5),df.copy(t).sub(e).normalize(),Ks.copy(this.origin).sub(Tp);const a=e.distanceTo(t)*.5,u=-this.direction.dot(df),c=Ks.dot(this.direction),d=-Ks.dot(df),h=Ks.lengthSq(),p=Math.abs(1-u*u);let g,_,v,E;if(p>0)if(g=u*d-c,_=u*c-d,E=a*p,g>=0)if(_>=-E)if(_<=E){const M=1/p;g*=M,_*=M,v=g*(g+u*_+2*c)+_*(u*g+_+2*d)+h}else _=a,g=Math.max(0,-(u*_+c)),v=-g*g+_*(_+2*d)+h;else _=-a,g=Math.max(0,-(u*_+c)),v=-g*g+_*(_+2*d)+h;else _<=-E?(g=Math.max(0,-(-u*a+c)),_=g>0?-a:Math.min(Math.max(-a,-d),a),v=-g*g+_*(_+2*d)+h):_<=E?(g=0,_=Math.min(Math.max(-a,-d),a),v=_*(_+2*d)+h):(g=Math.max(0,-(u*a+c)),_=g>0?a:Math.min(Math.max(-a,-d),a),v=-g*g+_*(_+2*d)+h);else _=u>0?-a:a,g=Math.max(0,-(u*_+c)),v=-g*g+_*(_+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Tp).addScaledVector(df,_),v}intersectSphere(e,t){ls.subVectors(e.center,this.origin);const n=ls.dot(this.direction),r=ls.dot(ls)-n*n,a=e.radius*e.radius;if(r>a)return null;const u=Math.sqrt(a-r),c=n-u,d=n+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(n=(e.min.x-_.x)*h,r=(e.max.x-_.x)*h):(n=(e.max.x-_.x)*h,r=(e.min.x-_.x)*h),p>=0?(a=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ls)!==null}intersectTriangle(e,t,n,r,a){wp.subVectors(t,e),hf.subVectors(n,e),Ap.crossVectors(wp,hf);let u=this.direction.dot(Ap),c;if(u>0){if(r)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Ks.subVectors(this.origin,e);const d=c*this.direction.dot(hf.crossVectors(Ks,hf));if(d<0)return null;const h=c*this.direction.dot(wp.cross(Ks));if(h<0||d+h>u)return null;const p=-c*Ks.dot(Ap);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Un{constructor(e,t,n,r,a,u,c,d,h,p,g,_,v,E,M,S){Un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h,p,g,_,v,E,M,S)}set(e,t,n,r,a,u,c,d,h,p,g,_,v,E,M,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=a,x[5]=u,x[9]=c,x[13]=d,x[2]=h,x[6]=p,x[10]=g,x[14]=_,x[3]=v,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Un().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ga.setFromMatrixColumn(e,0).length(),a=1/Ga.setFromMatrixColumn(e,1).length(),u=1/Ga.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),d=Math.cos(r),h=Math.sin(r),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=u*p,v=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=v+E*h,t[5]=_-M*h,t[9]=-c*d,t[2]=M-_*h,t[6]=E+v*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*p,v=d*g,E=h*p,M=h*g;t[0]=_+M*c,t[4]=E*c-v,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=v*c-E,t[6]=M+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*p,v=d*g,E=h*p,M=h*g;t[0]=_-M*c,t[4]=-u*g,t[8]=E+v*c,t[1]=v+E*c,t[5]=u*p,t[9]=M-_*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*p,v=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=E*h-v,t[8]=_*h+M,t[1]=d*g,t[5]=M*h+_,t[9]=v*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,v=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-_*g,t[8]=E*g+v,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=v*g+E,t[10]=_-M*g}else if(e.order==="XZY"){const _=u*d,v=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=_*g+M,t[5]=u*p,t[9]=v*g-E,t[2]=E*g-v,t[6]=c*p,t[10]=M*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FT,e,OT)}lookAt(e,t,n){const r=this.elements;return Ki.subVectors(e,t),Ki.lengthSq()===0&&(Ki.z=1),Ki.normalize(),Zs.crossVectors(n,Ki),Zs.lengthSq()===0&&(Math.abs(n.z)===1?Ki.x+=1e-4:Ki.z+=1e-4,Ki.normalize(),Zs.crossVectors(n,Ki)),Zs.normalize(),pf.crossVectors(Ki,Zs),r[0]=Zs.x,r[4]=pf.x,r[8]=Ki.x,r[1]=Zs.y,r[5]=pf.y,r[9]=Ki.y,r[2]=Zs.z,r[6]=pf.z,r[10]=Ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[4],d=n[8],h=n[12],p=n[1],g=n[5],_=n[9],v=n[13],E=n[2],M=n[6],S=n[10],x=n[14],N=n[3],D=n[7],w=n[11],I=n[15],U=r[0],L=r[4],k=r[8],b=r[12],C=r[1],z=r[5],X=r[9],J=r[13],ne=r[2],se=r[6],ee=r[10],Q=r[14],F=r[3],oe=r[7],T=r[11],K=r[15];return a[0]=u*U+c*C+d*ne+h*F,a[4]=u*L+c*z+d*se+h*oe,a[8]=u*k+c*X+d*ee+h*T,a[12]=u*b+c*J+d*Q+h*K,a[1]=p*U+g*C+_*ne+v*F,a[5]=p*L+g*z+_*se+v*oe,a[9]=p*k+g*X+_*ee+v*T,a[13]=p*b+g*J+_*Q+v*K,a[2]=E*U+M*C+S*ne+x*F,a[6]=E*L+M*z+S*se+x*oe,a[10]=E*k+M*X+S*ee+x*T,a[14]=E*b+M*J+S*Q+x*K,a[3]=N*U+D*C+w*ne+I*F,a[7]=N*L+D*z+w*se+I*oe,a[11]=N*k+D*X+w*ee+I*T,a[15]=N*b+D*J+w*Q+I*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],_=e[10],v=e[14],E=e[3],M=e[7],S=e[11],x=e[15];return E*(+a*d*g-r*h*g-a*c*_+n*h*_+r*c*v-n*d*v)+M*(+t*d*v-t*h*_+a*u*_-r*u*v+r*h*p-a*d*p)+S*(+t*h*g-t*c*v-a*u*g+n*u*v+a*c*p-n*h*p)+x*(-r*c*p-t*d*g+t*c*_+r*u*g-n*u*_+n*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],_=e[10],v=e[11],E=e[12],M=e[13],S=e[14],x=e[15],N=g*S*h-M*_*h+M*d*v-c*S*v-g*d*x+c*_*x,D=E*_*h-p*S*h-E*d*v+u*S*v+p*d*x-u*_*x,w=p*M*h-E*g*h+E*c*v-u*M*v-p*c*x+u*g*x,I=E*g*d-p*M*d-E*c*_+u*M*_+p*c*S-u*g*S,U=t*N+n*D+r*w+a*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return e[0]=N*L,e[1]=(M*_*a-g*S*a-M*r*v+n*S*v+g*r*x-n*_*x)*L,e[2]=(c*S*a-M*d*a+M*r*h-n*S*h-c*r*x+n*d*x)*L,e[3]=(g*d*a-c*_*a-g*r*h+n*_*h+c*r*v-n*d*v)*L,e[4]=D*L,e[5]=(p*S*a-E*_*a+E*r*v-t*S*v-p*r*x+t*_*x)*L,e[6]=(E*d*a-u*S*a-E*r*h+t*S*h+u*r*x-t*d*x)*L,e[7]=(u*_*a-p*d*a+p*r*h-t*_*h-u*r*v+t*d*v)*L,e[8]=w*L,e[9]=(E*g*a-p*M*a-E*n*v+t*M*v+p*n*x-t*g*x)*L,e[10]=(u*M*a-E*c*a+E*n*h-t*M*h-u*n*x+t*c*x)*L,e[11]=(p*c*a-u*g*a-p*n*h+t*g*h+u*n*v-t*c*v)*L,e[12]=I*L,e[13]=(p*M*r-E*g*r+E*n*_-t*M*_-p*n*S+t*g*S)*L,e[14]=(E*c*r-u*M*r-E*n*d+t*M*d+u*n*S-t*c*S)*L,e[15]=(u*g*r-p*c*r+p*n*d-t*g*d-u*n*_+t*c*_)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+n,h*c-r*d,h*d+r*c,0,h*c+r*d,p*c+n,p*d-r*u,0,h*d-r*c,p*d+r*u,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,u){return this.set(1,n,a,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,g=c+c,_=a*h,v=a*p,E=a*g,M=u*p,S=u*g,x=c*g,N=d*h,D=d*p,w=d*g,I=n.x,U=n.y,L=n.z;return r[0]=(1-(M+x))*I,r[1]=(v+w)*I,r[2]=(E-D)*I,r[3]=0,r[4]=(v-w)*U,r[5]=(1-(_+x))*U,r[6]=(S+N)*U,r[7]=0,r[8]=(E+D)*L,r[9]=(S-N)*L,r[10]=(1-(_+M))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Ga.set(r[0],r[1],r[2]).length();const u=Ga.set(r[4],r[5],r[6]).length(),c=Ga.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Nr.copy(this);const h=1/a,p=1/u,g=1/c;return Nr.elements[0]*=h,Nr.elements[1]*=h,Nr.elements[2]*=h,Nr.elements[4]*=p,Nr.elements[5]*=p,Nr.elements[6]*=p,Nr.elements[8]*=g,Nr.elements[9]*=g,Nr.elements[10]*=g,t.setFromRotationMatrix(Nr),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,r,a,u,c=qr,d=!1){const h=this.elements,p=2*a/(t-e),g=2*a/(n-r),_=(t+e)/(t-e),v=(n+r)/(n-r);let E,M;if(d)E=a/(u-a),M=u*a/(u-a);else if(c===qr)E=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===ud)E=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,u,c=qr,d=!1){const h=this.elements,p=2/(t-e),g=2/(n-r),_=-(t+e)/(t-e),v=-(n+r)/(n-r);let E,M;if(d)E=1/(u-a),M=u/(u-a);else if(c===qr)E=-2/(u-a),M=-(u+a)/(u-a);else if(c===ud)E=-1/(u-a),M=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=g,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ga=new fe,Nr=new Un,FT=new fe(0,0,0),OT=new fe(1,1,1),Zs=new fe,pf=new fe,Ki=new fe,nx=new Un,ix=new tc;class ws{constructor(e=0,t=0,n=0,r=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],u=r[4],c=r[8],d=r[1],h=r[5],p=r[9],g=r[2],_=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Ht(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ix.setFromEuler(this),this.setFromQuaternion(ix,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class $y{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zT=0;const rx=new fe,Wa=new tc,us=new Un,mf=new fe,pu=new fe,BT=new fe,VT=new tc,sx=new fe(1,0,0),ox=new fe(0,1,0),ax=new fe(0,0,1),lx={type:"added"},HT={type:"removed"},Xa={type:"childadded",child:null},bp={type:"childremoved",child:null};class Bi extends Rl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=ec(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bi.DEFAULT_UP.clone();const e=new fe,t=new ws,n=new tc,r=new fe(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Un},normalMatrix:{value:new Rt}}),this.matrix=new Un,this.matrixWorld=new Un,this.matrixAutoUpdate=Bi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $y,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.multiply(Wa),this}rotateOnWorldAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.premultiply(Wa),this}rotateX(e){return this.rotateOnAxis(sx,e)}rotateY(e){return this.rotateOnAxis(ox,e)}rotateZ(e){return this.rotateOnAxis(ax,e)}translateOnAxis(e,t){return rx.copy(e).applyQuaternion(this.quaternion),this.position.add(rx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sx,e)}translateY(e){return this.translateOnAxis(ox,e)}translateZ(e){return this.translateOnAxis(ax,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mf.copy(e):mf.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),pu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(pu,mf,this.up):us.lookAt(mf,pu,this.up),this.quaternion.setFromRotationMatrix(us),r&&(us.extractRotation(r.matrixWorld),Wa.setFromRotationMatrix(us),this.quaternion.premultiply(Wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lx),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HT),bp.child=e,this.dispatchEvent(bp),bp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),us.multiply(e.parent.matrixWorld)),e.applyMatrix4(us),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lx),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pu,e,BT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pu,VT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),_=u(e.skeletons),v=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),_.length>0&&(n.skeletons=_),v.length>0&&(n.animations=v),E.length>0&&(n.nodes=E)}return n.object=r,n;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Bi.DEFAULT_UP=new fe(0,1,0);Bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ir=new fe,cs=new fe,Cp=new fe,fs=new fe,ja=new fe,Ya=new fe,ux=new fe,Rp=new fe,Pp=new fe,Dp=new fe,Lp=new Cn,Np=new Cn,Ip=new Cn;class kr{constructor(e=new fe,t=new fe,n=new fe){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ir.subVectors(e,t),r.cross(Ir);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ir.subVectors(r,t),cs.subVectors(n,t),Cp.subVectors(e,t);const u=Ir.dot(Ir),c=Ir.dot(cs),d=Ir.dot(Cp),h=cs.dot(cs),p=cs.dot(Cp),g=u*h-c*c;if(g===0)return a.set(0,0,0),null;const _=1/g,v=(h*d-c*p)*_,E=(u*p-c*d)*_;return a.set(1-v-E,E,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(e,t,n,r,a,u,c,d){return this.getBarycoord(e,t,n,r,fs)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,fs.x),d.addScaledVector(u,fs.y),d.addScaledVector(c,fs.z),d)}static getInterpolatedAttribute(e,t,n,r,a,u){return Lp.setScalar(0),Np.setScalar(0),Ip.setScalar(0),Lp.fromBufferAttribute(e,t),Np.fromBufferAttribute(e,n),Ip.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(Lp,a.x),u.addScaledVector(Np,a.y),u.addScaledVector(Ip,a.z),u}static isFrontFacing(e,t,n,r){return Ir.subVectors(n,t),cs.subVectors(e,t),Ir.cross(cs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ir.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),Ir.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return kr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return kr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let u,c;ja.subVectors(r,n),Ya.subVectors(a,n),Rp.subVectors(e,n);const d=ja.dot(Rp),h=Ya.dot(Rp);if(d<=0&&h<=0)return t.copy(n);Pp.subVectors(e,r);const p=ja.dot(Pp),g=Ya.dot(Pp);if(p>=0&&g<=p)return t.copy(r);const _=d*g-p*h;if(_<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(n).addScaledVector(ja,u);Dp.subVectors(e,a);const v=ja.dot(Dp),E=Ya.dot(Dp);if(E>=0&&v<=E)return t.copy(a);const M=v*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(n).addScaledVector(Ya,c);const S=p*E-v*g;if(S<=0&&g-p>=0&&v-E>=0)return ux.subVectors(a,r),c=(g-p)/(g-p+(v-E)),t.copy(r).addScaledVector(ux,c);const x=1/(S+M+_);return u=M*x,c=_*x,t.copy(n).addScaledVector(ja,u).addScaledVector(Ya,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qs={h:0,s:0,l:0},gf={h:0,s:0,l:0};function Up(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class $t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Yt.workingColorSpace){if(e=bT(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Up(u,a,e+1/3),this.g=Up(u,a,e),this.b=Up(u,a,e-1/3)}return Yt.colorSpaceToWorking(this,r),this}setStyle(e,t=gr){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=r[1],c=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gr){const n=Ky[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=cl(e.r),this.g=cl(e.g),this.b=cl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gr){return Yt.workingToColorSpace(ci.copy(this),e),Math.round(Ht(ci.r*255,0,255))*65536+Math.round(Ht(ci.g*255,0,255))*256+Math.round(Ht(ci.b*255,0,255))}getHexString(e=gr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.workingToColorSpace(ci.copy(this),t);const n=ci.r,r=ci.g,a=ci.b,u=Math.max(n,r,a),c=Math.min(n,r,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case n:d=(r-a)/g+(r<a?6:0);break;case r:d=(a-n)/g+2;break;case a:d=(n-r)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Yt.workingColorSpace){return Yt.workingToColorSpace(ci.copy(this),t),e.r=ci.r,e.g=ci.g,e.b=ci.b,e}getStyle(e=gr){Yt.workingToColorSpace(ci.copy(this),e);const t=ci.r,n=ci.g,r=ci.b;return e!==gr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Qs),this.setHSL(Qs.h+e,Qs.s+t,Qs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qs),e.getHSL(gf);const n=_p(Qs.h,gf.h,t),r=_p(Qs.s,gf.s,t),a=_p(Qs.l,gf.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ci=new $t;$t.NAMES=Ky;let GT=0;class ic extends Rl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=ec(),this.name="",this.type="Material",this.blending=ll,this.side=po,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dm,this.blendDst=hm,this.blendEquation=$o,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ll&&(n.blending=this.blending),this.side!==po&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dm&&(n.blendSrc=this.blendSrc),this.blendDst!==hm&&(n.blendDst=this.blendDst),this.blendEquation!==$o&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_l&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$v&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=r(e.textures),u=r(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zy extends ic{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.combine=Uy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=new fe,_f=new nn;let WT=0;class Er{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kv,this.updateRanges=[],this.gpuType=vs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_f.fromBufferAttribute(this,t),_f.applyMatrix3(e),this.setXY(t,_f.x,_f.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fu(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ki(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fu(t,this.array)),t}setX(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fu(t,this.array)),t}setY(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fu(t,this.array)),t}setW(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),n=ki(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),n=ki(n,this.array),r=ki(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),n=ki(n,this.array),r=ki(r,this.array),a=ki(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kv&&(e.usage=this.usage),e}}class Qy extends Er{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jy extends Er{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ta extends Er{constructor(e,t,n){super(new Float32Array(e),t,n)}}let XT=0;const pr=new Un,kp=new Bi,qa=new fe,Zi=new nc,mu=new nc,Yn=new fe;class Cs extends Rl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=ec(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jy(e)?Jy:Qy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Rt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pr.makeRotationFromQuaternion(e),this.applyMatrix4(pr),this}rotateX(e){return pr.makeRotationX(e),this.applyMatrix4(pr),this}rotateY(e){return pr.makeRotationY(e),this.applyMatrix4(pr),this}rotateZ(e){return pr.makeRotationZ(e),this.applyMatrix4(pr),this}translate(e,t,n){return pr.makeTranslation(e,t,n),this.applyMatrix4(pr),this}scale(e,t,n){return pr.makeScale(e,t,n),this.applyMatrix4(pr),this}lookAt(e){return kp.lookAt(e),kp.updateMatrix(),this.applyMatrix4(kp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qa).negate(),this.translate(qa.x,qa.y,qa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ta(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Yn.addVectors(this.boundingBox.min,Zi.min),this.boundingBox.expandByPoint(Yn),Yn.addVectors(this.boundingBox.max,Zi.max),this.boundingBox.expandByPoint(Yn)):(this.boundingBox.expandByPoint(Zi.min),this.boundingBox.expandByPoint(Zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ad);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const n=this.boundingSphere.center;if(Zi.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];mu.setFromBufferAttribute(c),this.morphTargetsRelative?(Yn.addVectors(Zi.min,mu.min),Zi.expandByPoint(Yn),Yn.addVectors(Zi.max,mu.max),Zi.expandByPoint(Yn)):(Zi.expandByPoint(mu.min),Zi.expandByPoint(mu.max))}Zi.getCenter(n);let r=0;for(let a=0,u=e.count;a<u;a++)Yn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Yn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Yn.fromBufferAttribute(c,h),d&&(qa.fromBufferAttribute(e,h),Yn.add(qa)),r=Math.max(r,n.distanceToSquared(Yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Er(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let k=0;k<n.count;k++)c[k]=new fe,d[k]=new fe;const h=new fe,p=new fe,g=new fe,_=new nn,v=new nn,E=new nn,M=new fe,S=new fe;function x(k,b,C){h.fromBufferAttribute(n,k),p.fromBufferAttribute(n,b),g.fromBufferAttribute(n,C),_.fromBufferAttribute(a,k),v.fromBufferAttribute(a,b),E.fromBufferAttribute(a,C),p.sub(h),g.sub(h),v.sub(_),E.sub(_);const z=1/(v.x*E.y-E.x*v.y);isFinite(z)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(g,-v.y).multiplyScalar(z),S.copy(g).multiplyScalar(v.x).addScaledVector(p,-E.x).multiplyScalar(z),c[k].add(M),c[b].add(M),c[C].add(M),d[k].add(S),d[b].add(S),d[C].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let k=0,b=N.length;k<b;++k){const C=N[k],z=C.start,X=C.count;for(let J=z,ne=z+X;J<ne;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new fe,w=new fe,I=new fe,U=new fe;function L(k){I.fromBufferAttribute(r,k),U.copy(I);const b=c[k];D.copy(b),D.sub(I.multiplyScalar(I.dot(b))).normalize(),w.crossVectors(U,b);const z=w.dot(d[k])<0?-1:1;u.setXYZW(k,D.x,D.y,D.z,z)}for(let k=0,b=N.length;k<b;++k){const C=N[k],z=C.start,X=C.count;for(let J=z,ne=z+X;J<ne;J+=3)L(e.getX(J+0)),L(e.getX(J+1)),L(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Er(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,v=n.count;_<v;_++)n.setXYZ(_,0,0,0);const r=new fe,a=new fe,u=new fe,c=new fe,d=new fe,h=new fe,p=new fe,g=new fe;if(e)for(let _=0,v=e.count;_<v;_+=3){const E=e.getX(_+0),M=e.getX(_+1),S=e.getX(_+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),p.subVectors(u,a),g.subVectors(r,a),p.cross(g),c.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),c.add(p),d.add(p),h.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,d.x,d.y,d.z),n.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,v=t.count;_<v;_+=3)r.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,a),g.subVectors(r,a),p.cross(g),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yn.fromBufferAttribute(e,t),Yn.normalize(),e.setXYZ(t,Yn.x,Yn.y,Yn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,_=new h.constructor(d.length*p);let v=0,E=0;for(let M=0,S=d.length;M<S;M++){c.isInterleavedBufferAttribute?v=d[M]*c.data.stride+c.offset:v=d[M]*p;for(let x=0;x<p;x++)_[E++]=h[v++]}return new Er(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cs,n=this.index.array,r=this.attributes;for(const c in r){const d=r[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,g=h.length;p<g;p++){const _=h[p],v=e(_,n);d.push(v)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,_=h.length;g<_;g++){const v=h[g];p.push(v.toJSON(e.data))}p.length>0&&(r[d]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let _=0,v=g.length;_<v;_++)p.push(g[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cx=new Un,Fo=new qy,vf=new Ad,fx=new fe,xf=new fe,yf=new fe,Sf=new fe,Fp=new fe,Mf=new fe,dx=new fe,Ef=new fe;class xs extends Bi{constructor(e=new Cs,t=new Zy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Mf.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],g=a[d];p!==0&&(Fp.fromBufferAttribute(g,e),u?Mf.addScaledVector(Fp,p):Mf.addScaledVector(Fp.sub(t),p))}t.add(Mf)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vf.copy(n.boundingSphere),vf.applyMatrix4(a),Fo.copy(e.ray).recast(e.near),!(vf.containsPoint(Fo.origin)===!1&&(Fo.intersectSphere(vf,fx)===null||Fo.origin.distanceToSquared(fx)>(e.far-e.near)**2))&&(cx.copy(a).invert(),Fo.copy(e.ray).applyMatrix4(cx),!(n.boundingBox!==null&&Fo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fo)))}_computeIntersections(e,t,n){let r;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,_=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const S=_[E],x=u[S.materialIndex],N=Math.max(S.start,v.start),D=Math.min(c.count,Math.min(S.start+S.count,v.start+v.count));for(let w=N,I=D;w<I;w+=3){const U=c.getX(w),L=c.getX(w+1),k=c.getX(w+2);r=Tf(this,x,e,n,h,p,g,U,L,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(c.count,v.start+v.count);for(let S=E,x=M;S<x;S+=3){const N=c.getX(S),D=c.getX(S+1),w=c.getX(S+2);r=Tf(this,u,e,n,h,p,g,N,D,w),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const S=_[E],x=u[S.materialIndex],N=Math.max(S.start,v.start),D=Math.min(d.count,Math.min(S.start+S.count,v.start+v.count));for(let w=N,I=D;w<I;w+=3){const U=w,L=w+1,k=w+2;r=Tf(this,x,e,n,h,p,g,U,L,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(d.count,v.start+v.count);for(let S=E,x=M;S<x;S+=3){const N=S,D=S+1,w=S+2;r=Tf(this,u,e,n,h,p,g,N,D,w),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}}function jT(o,e,t,n,r,a,u,c){let d;if(e.side===Oi?d=n.intersectTriangle(u,a,r,!0,c):d=n.intersectTriangle(r,a,u,e.side===po,c),d===null)return null;Ef.copy(c),Ef.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Ef);return h<t.near||h>t.far?null:{distance:h,point:Ef.clone(),object:o}}function Tf(o,e,t,n,r,a,u,c,d,h){o.getVertexPosition(c,xf),o.getVertexPosition(d,yf),o.getVertexPosition(h,Sf);const p=jT(o,e,t,n,xf,yf,Sf,dx);if(p){const g=new fe;kr.getBarycoord(dx,xf,yf,Sf,g),r&&(p.uv=kr.getInterpolatedAttribute(r,c,d,h,g,new nn)),a&&(p.uv1=kr.getInterpolatedAttribute(a,c,d,h,g,new nn)),u&&(p.normal=kr.getInterpolatedAttribute(u,c,d,h,g,new fe),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:d,c:h,normal:new fe,materialIndex:0};kr.getNormal(xf,yf,Sf,_.normal),p.face=_,p.barycoord=g}return p}class rc extends Cs{constructor(e=1,t=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const c=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],g=[];let _=0,v=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,r,u,2),E("x","z","y",1,-1,e,n,-t,r,u,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new ta(h,3)),this.setAttribute("normal",new ta(p,3)),this.setAttribute("uv",new ta(g,2));function E(M,S,x,N,D,w,I,U,L,k,b){const C=w/L,z=I/k,X=w/2,J=I/2,ne=U/2,se=L+1,ee=k+1;let Q=0,F=0;const oe=new fe;for(let T=0;T<ee;T++){const K=T*z-J;for(let _e=0;_e<se;_e++){const Pe=_e*C-X;oe[M]=Pe*N,oe[S]=K*D,oe[x]=ne,h.push(oe.x,oe.y,oe.z),oe[M]=0,oe[S]=0,oe[x]=U>0?1:-1,p.push(oe.x,oe.y,oe.z),g.push(_e/L),g.push(1-T/k),Q+=1}}for(let T=0;T<k;T++)for(let K=0;K<L;K++){const _e=_+K+se*T,Pe=_+K+se*(T+1),ye=_+(K+1)+se*(T+1),te=_+(K+1)+se*T;d.push(_e,Pe,te),d.push(Pe,ye,te),F+=6}c.addGroup(v,F,b),v+=F,_+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sl(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ei(o){const e={};for(let t=0;t<o.length;t++){const n=Sl(o[t]);for(const r in n)e[r]=n[r]}return e}function YT(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function eS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const qT={clone:Sl,merge:Ei};var $T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mo extends ic{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$T,this.fragmentShader=KT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sl(e.uniforms),this.uniformsGroups=YT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tS extends Bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Un,this.projectionMatrix=new Un,this.projectionMatrixInverse=new Un,this.coordinateSystem=qr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Js=new fe,hx=new nn,px=new nn;class _r extends tS{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zm*2*Math.atan(Math.tan(gp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,t){return this.getViewBounds(e,hx,px),t.subVectors(px,hx)}setViewOffset(e,t,n,r,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*r/d,t-=u.offsetY*n/h,r*=u.width/d,n*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $a=-90,Ka=1;class ZT extends Bi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _r($a,Ka,e,t);r.layers=this.layers,this.add(r);const a=new _r($a,Ka,e,t);a.layers=this.layers,this.add(a);const u=new _r($a,Ka,e,t);u.layers=this.layers,this.add(u);const c=new _r($a,Ka,e,t);c.layers=this.layers,this.add(c);const d=new _r($a,Ka,e,t);d.layers=this.layers,this.add(d);const h=new _r($a,Ka,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===qr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ud)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,u),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(g,_,v),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class nS extends zi{constructor(e=[],t=vl,n,r,a,u,c,d,h,p){super(e,t,n,r,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QT extends ca{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new nS(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rc(5,5,5),a=new mo({name:"CubemapFromEquirect",uniforms:Sl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oi,blending:lo});a.uniforms.tEquirect.value=t;const u=new xs(r,a),c=t.minFilter;return t.minFilter===Qo&&(t.minFilter=Yr),new ZT(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(a)}}class wf extends Bi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JT={type:"move"};class Op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),x=this._getHandJoint(h,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=p.position.distanceTo(g.position),v=.02,E=.005;h.inputState.pinching&&_>v+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=v-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(JT)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ew extends Bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ws,this.environmentIntensity=1,this.environmentRotation=new ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zp=new fe,tw=new fe,nw=new Rt;class Wo{constructor(e=new fe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zp.subVectors(n,t).cross(tw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zp),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nw.getNormalMatrix(e),r=this.coplanarPoint(zp).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oo=new Ad,iw=new nn(.5,.5),Af=new fe;class iS{constructor(e=new Wo,t=new Wo,n=new Wo,r=new Wo,a=new Wo,u=new Wo){this.planes=[e,t,n,r,a,u]}set(e,t,n,r,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qr,n=!1){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],h=a[3],p=a[4],g=a[5],_=a[6],v=a[7],E=a[8],M=a[9],S=a[10],x=a[11],N=a[12],D=a[13],w=a[14],I=a[15];if(r[0].setComponents(h-u,v-p,x-E,I-N).normalize(),r[1].setComponents(h+u,v+p,x+E,I+N).normalize(),r[2].setComponents(h+c,v+g,x+M,I+D).normalize(),r[3].setComponents(h-c,v-g,x-M,I-D).normalize(),n)r[4].setComponents(d,_,S,w).normalize(),r[5].setComponents(h-d,v-_,x-S,I-w).normalize();else if(r[4].setComponents(h-d,v-_,x-S,I-w).normalize(),t===qr)r[5].setComponents(h+d,v+_,x+S,I+w).normalize();else if(t===ud)r[5].setComponents(d,_,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oo)}intersectsSprite(e){Oo.center.set(0,0,0);const t=iw.distanceTo(e.center);return Oo.radius=.7071067811865476+t,Oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Af.x=r.normal.x>0?e.max.x:e.min.x,Af.y=r.normal.y>0?e.max.y:e.min.y,Af.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Af)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rS extends ic{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mx=new Un,Qm=new qy,bf=new Ad,Cf=new fe;class rw extends Bi{constructor(e=new Cs,t=new rS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bf.copy(n.boundingSphere),bf.applyMatrix4(r),bf.radius+=a,e.ray.intersectsSphere(bf)===!1)return;mx.copy(r).invert(),Qm.copy(e.ray).applyMatrix4(mx);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=n.index,g=n.attributes.position;if(h!==null){const _=Math.max(0,u.start),v=Math.min(h.count,u.start+u.count);for(let E=_,M=v;E<M;E++){const S=h.getX(E);Cf.fromBufferAttribute(g,S),gx(Cf,S,d,r,e,t,this)}}else{const _=Math.max(0,u.start),v=Math.min(g.count,u.start+u.count);for(let E=_,M=v;E<M;E++)Cf.fromBufferAttribute(g,E),gx(Cf,E,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function gx(o,e,t,n,r,a,u){const c=Qm.distanceSqToPoint(o);if(c<t){const d=new fe;Qm.closestPointToPoint(o,d),d.applyMatrix4(n);const h=r.ray.origin.distanceTo(d);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class sS extends zi{constructor(e,t,n=ua,r,a,u,c=Or,d=Or,h,p=Hu,g=1){if(p!==Hu&&p!==Gu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:g};super(_,r,a,u,c,d,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bd extends Cs{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,u=t/2,c=Math.floor(n),d=Math.floor(r),h=c+1,p=d+1,g=e/c,_=t/d,v=[],E=[],M=[],S=[];for(let x=0;x<p;x++){const N=x*_-u;for(let D=0;D<h;D++){const w=D*g-a;E.push(w,-N,0),M.push(0,0,1),S.push(D/c),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let N=0;N<c;N++){const D=N+h*x,w=N+h*(x+1),I=N+1+h*(x+1),U=N+1+h*x;v.push(D,w,U),v.push(w,I,U)}this.setIndex(v),this.setAttribute("position",new ta(E,3)),this.setAttribute("normal",new ta(M,3)),this.setAttribute("uv",new ta(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bd(e.width,e.height,e.widthSegments,e.heightSegments)}}class sw extends ic{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ow extends ic{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class aw extends tS{constructor(e=-1,t=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lw extends _r{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function _x(o,e,t,n){const r=uw(n);switch(t){case By:return o*e;case Hy:return o*e/r.components*r.byteLength;case Ig:return o*e/r.components*r.byteLength;case Gy:return o*e*2/r.components*r.byteLength;case Ug:return o*e*2/r.components*r.byteLength;case Vy:return o*e*3/r.components*r.byteLength;case Fr:return o*e*4/r.components*r.byteLength;case kg:return o*e*4/r.components*r.byteLength;case Yf:case qf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case $f:case Kf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Am:case Cm:return Math.max(o,16)*Math.max(e,8)/4;case wm:case bm:return Math.max(o,8)*Math.max(e,8)/2;case Rm:case Pm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Dm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nm:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Im:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Um:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case km:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Fm:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Om:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case zm:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Bm:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Vm:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Hm:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Gm:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Wm:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Xm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Zf:case jm:case Ym:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Wy:case qm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case $m:case Km:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uw(o){switch(o){case Ts:case Fy:return{byteLength:1,components:1};case Bu:case Oy:case Ju:return{byteLength:2,components:1};case Lg:case Ng:return{byteLength:2,components:4};case ua:case Dg:case vs:return{byteLength:4,components:1};case zy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pg);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oS(){let o=null,e=!1,t=null,n=null;function r(a,u){t(a,u),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function cw(o){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,g=h.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,h,p),c.onUploadCallback();let v;if(h instanceof Float32Array)v=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=o.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=o.SHORT;else if(h instanceof Uint32Array)v=o.UNSIGNED_INT;else if(h instanceof Int32Array)v=o.INT;else if(h instanceof Int8Array)v=o.BYTE;else if(h instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,d,h){const p=d.array,g=d.updateRanges;if(o.bindBuffer(h,c),g.length===0)o.bufferSubData(h,0,p);else{g.sort((v,E)=>v.start-E.start);let _=0;for(let v=1;v<g.length;v++){const E=g[_],M=g[v];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,g[_]=M)}g.length=_+1;for(let v=0,E=g.length;v<E;v++){const M=g[v];o.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:u}}var fw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dw=`#ifdef USE_ALPHAHASH
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
#endif`,hw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_w=`#ifdef USE_AOMAP
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
#endif`,vw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xw=`#ifdef USE_BATCHING
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
#endif`,yw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ew=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tw=`#ifdef USE_IRIDESCENCE
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
#endif`,ww=`#ifdef USE_BUMPMAP
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
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Iw=`#define PI 3.141592653589793
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
} // validated`,Uw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kw=`vec3 transformedNormal = objectNormal;
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
#endif`,Fw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gw=`#ifdef USE_ENVMAP
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
#endif`,Ww=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xw=`#ifdef USE_ENVMAP
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
#endif`,jw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yw=`#ifdef USE_ENVMAP
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
#endif`,qw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$w=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qw=`#ifdef USE_GRADIENTMAP
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
}`,Jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nA=`uniform bool receiveShadow;
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
#endif`,iA=`#ifdef USE_ENVMAP
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
#endif`,rA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lA=`PhysicalMaterial material;
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
#endif`,uA=`struct PhysicalMaterial {
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
}`,cA=`
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
#endif`,fA=`#if defined( RE_IndirectDiffuse )
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
#endif`,dA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_A=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yA=`#if defined( USE_POINTS_UV )
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
#endif`,SA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AA=`#ifdef USE_MORPHTARGETS
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
#endif`,bA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NA=`#ifdef USE_NORMALMAP
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
#endif`,IA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$A=`float getShadowMask() {
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
}`,KA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZA=`#ifdef USE_SKINNING
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
#endif`,QA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JA=`#ifdef USE_SKINNING
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
#endif`,eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ib=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fb=`uniform sampler2D t2D;
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`#include <common>
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
}`,_b=`#if DEPTH_PACKING == 3200
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
}`,vb=`#define DISTANCE
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
}`,xb=`#define DISTANCE
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
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,wb=`uniform vec3 diffuse;
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
}`,Ab=`#define LAMBERT
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
}`,bb=`#define LAMBERT
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
}`,Cb=`#define MATCAP
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
}`,Rb=`#define MATCAP
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
}`,Pb=`#define NORMAL
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
}`,Db=`#define NORMAL
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
}`,Lb=`#define PHONG
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
}`,Nb=`#define PHONG
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
}`,Ib=`#define STANDARD
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
}`,Ub=`#define STANDARD
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
}`,kb=`#define TOON
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
}`,Fb=`#define TOON
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
}`,Ob=`uniform float size;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Vb=`uniform vec3 color;
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
}`,Hb=`uniform float rotation;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:fw,alphahash_pars_fragment:dw,alphamap_fragment:hw,alphamap_pars_fragment:pw,alphatest_fragment:mw,alphatest_pars_fragment:gw,aomap_fragment:_w,aomap_pars_fragment:vw,batching_pars_vertex:xw,batching_vertex:yw,begin_vertex:Sw,beginnormal_vertex:Mw,bsdfs:Ew,iridescence_fragment:Tw,bumpmap_pars_fragment:ww,clipping_planes_fragment:Aw,clipping_planes_pars_fragment:bw,clipping_planes_pars_vertex:Cw,clipping_planes_vertex:Rw,color_fragment:Pw,color_pars_fragment:Dw,color_pars_vertex:Lw,color_vertex:Nw,common:Iw,cube_uv_reflection_fragment:Uw,defaultnormal_vertex:kw,displacementmap_pars_vertex:Fw,displacementmap_vertex:Ow,emissivemap_fragment:zw,emissivemap_pars_fragment:Bw,colorspace_fragment:Vw,colorspace_pars_fragment:Hw,envmap_fragment:Gw,envmap_common_pars_fragment:Ww,envmap_pars_fragment:Xw,envmap_pars_vertex:jw,envmap_physical_pars_fragment:iA,envmap_vertex:Yw,fog_vertex:qw,fog_pars_vertex:$w,fog_fragment:Kw,fog_pars_fragment:Zw,gradientmap_pars_fragment:Qw,lightmap_pars_fragment:Jw,lights_lambert_fragment:eA,lights_lambert_pars_fragment:tA,lights_pars_begin:nA,lights_toon_fragment:rA,lights_toon_pars_fragment:sA,lights_phong_fragment:oA,lights_phong_pars_fragment:aA,lights_physical_fragment:lA,lights_physical_pars_fragment:uA,lights_fragment_begin:cA,lights_fragment_maps:fA,lights_fragment_end:dA,logdepthbuf_fragment:hA,logdepthbuf_pars_fragment:pA,logdepthbuf_pars_vertex:mA,logdepthbuf_vertex:gA,map_fragment:_A,map_pars_fragment:vA,map_particle_fragment:xA,map_particle_pars_fragment:yA,metalnessmap_fragment:SA,metalnessmap_pars_fragment:MA,morphinstance_vertex:EA,morphcolor_vertex:TA,morphnormal_vertex:wA,morphtarget_pars_vertex:AA,morphtarget_vertex:bA,normal_fragment_begin:CA,normal_fragment_maps:RA,normal_pars_fragment:PA,normal_pars_vertex:DA,normal_vertex:LA,normalmap_pars_fragment:NA,clearcoat_normal_fragment_begin:IA,clearcoat_normal_fragment_maps:UA,clearcoat_pars_fragment:kA,iridescence_pars_fragment:FA,opaque_fragment:OA,packing:zA,premultiplied_alpha_fragment:BA,project_vertex:VA,dithering_fragment:HA,dithering_pars_fragment:GA,roughnessmap_fragment:WA,roughnessmap_pars_fragment:XA,shadowmap_pars_fragment:jA,shadowmap_pars_vertex:YA,shadowmap_vertex:qA,shadowmask_pars_fragment:$A,skinbase_vertex:KA,skinning_pars_vertex:ZA,skinning_vertex:QA,skinnormal_vertex:JA,specularmap_fragment:eb,specularmap_pars_fragment:tb,tonemapping_fragment:nb,tonemapping_pars_fragment:ib,transmission_fragment:rb,transmission_pars_fragment:sb,uv_pars_fragment:ob,uv_pars_vertex:ab,uv_vertex:lb,worldpos_vertex:ub,background_vert:cb,background_frag:fb,backgroundCube_vert:db,backgroundCube_frag:hb,cube_vert:pb,cube_frag:mb,depth_vert:gb,depth_frag:_b,distanceRGBA_vert:vb,distanceRGBA_frag:xb,equirect_vert:yb,equirect_frag:Sb,linedashed_vert:Mb,linedashed_frag:Eb,meshbasic_vert:Tb,meshbasic_frag:wb,meshlambert_vert:Ab,meshlambert_frag:bb,meshmatcap_vert:Cb,meshmatcap_frag:Rb,meshnormal_vert:Pb,meshnormal_frag:Db,meshphong_vert:Lb,meshphong_frag:Nb,meshphysical_vert:Ib,meshphysical_frag:Ub,meshtoon_vert:kb,meshtoon_frag:Fb,points_vert:Ob,points_frag:zb,shadow_vert:Bb,shadow_frag:Vb,sprite_vert:Hb,sprite_frag:Gb},Be={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new nn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new nn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Xr={basic:{uniforms:Ei([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Ei([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new $t(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Ei([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Ei([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Ei([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new $t(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Ei([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Ei([Be.points,Be.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Ei([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Ei([Be.common,Be.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Ei([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Ei([Be.sprite,Be.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Ei([Be.common,Be.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Ei([Be.lights,Be.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Xr.physical={uniforms:Ei([Xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new nn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new nn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new nn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Rf={r:0,b:0,g:0},zo=new ws,Wb=new Un;function Xb(o,e,t,n,r,a,u){const c=new $t(0);let d=a===!0?0:1,h,p,g=null,_=0,v=null;function E(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?t:e).get(w)),w}function M(D){let w=!1;const I=E(D);I===null?x(c,d):I&&I.isColor&&(x(I,1),w=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(D,w){const I=E(w);I&&(I.isCubeTexture||I.mapping===wd)?(p===void 0&&(p=new xs(new rc(1,1,1),new mo({name:"BackgroundCubeMaterial",uniforms:Sl(Xr.backgroundCube.uniforms),vertexShader:Xr.backgroundCube.vertexShader,fragmentShader:Xr.backgroundCube.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),zo.copy(w.backgroundRotation),zo.x*=-1,zo.y*=-1,zo.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(zo.y*=-1,zo.z*=-1),p.material.uniforms.envMap.value=I,p.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(zo)),p.material.toneMapped=Yt.getTransfer(I.colorSpace)!==tn,(g!==I||_!==I.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,g=I,_=I.version,v=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new xs(new bd(2,2),new mo({name:"BackgroundMaterial",uniforms:Sl(Xr.background.uniforms),vertexShader:Xr.background.vertexShader,fragmentShader:Xr.background.fragmentShader,side:po,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(I.colorSpace)!==tn,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||_!==I.version||v!==o.toneMapping)&&(h.material.needsUpdate=!0,g=I,_=I.version,v=o.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function x(D,w){D.getRGB(Rf,eS(o)),n.buffers.color.setClear(Rf.r,Rf.g,Rf.b,w,u)}function N(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,w=1){c.set(D),d=w,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,x(c,d)},render:M,addToRenderList:S,dispose:N}}function jb(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},r=_(null);let a=r,u=!1;function c(C,z,X,J,ne){let se=!1;const ee=g(J,X,z);a!==ee&&(a=ee,h(a.object)),se=v(C,J,X,ne),se&&E(C,J,X,ne),ne!==null&&e.update(ne,o.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,w(C,z,X,J),ne!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function d(){return o.createVertexArray()}function h(C){return o.bindVertexArray(C)}function p(C){return o.deleteVertexArray(C)}function g(C,z,X){const J=X.wireframe===!0;let ne=n[C.id];ne===void 0&&(ne={},n[C.id]=ne);let se=ne[z.id];se===void 0&&(se={},ne[z.id]=se);let ee=se[J];return ee===void 0&&(ee=_(d()),se[J]=ee),ee}function _(C){const z=[],X=[],J=[];for(let ne=0;ne<t;ne++)z[ne]=0,X[ne]=0,J[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:J,object:C,attributes:{},index:null}}function v(C,z,X,J){const ne=a.attributes,se=z.attributes;let ee=0;const Q=X.getAttributes();for(const F in Q)if(Q[F].location>=0){const T=ne[F];let K=se[F];if(K===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),T===void 0||T.attribute!==K||K&&T.data!==K.data)return!0;ee++}return a.attributesNum!==ee||a.index!==J}function E(C,z,X,J){const ne={},se=z.attributes;let ee=0;const Q=X.getAttributes();for(const F in Q)if(Q[F].location>=0){let T=se[F];T===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(T=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(T=C.instanceColor));const K={};K.attribute=T,T&&T.data&&(K.data=T.data),ne[F]=K,ee++}a.attributes=ne,a.attributesNum=ee,a.index=J}function M(){const C=a.newAttributes;for(let z=0,X=C.length;z<X;z++)C[z]=0}function S(C){x(C,0)}function x(C,z){const X=a.newAttributes,J=a.enabledAttributes,ne=a.attributeDivisors;X[C]=1,J[C]===0&&(o.enableVertexAttribArray(C),J[C]=1),ne[C]!==z&&(o.vertexAttribDivisor(C,z),ne[C]=z)}function N(){const C=a.newAttributes,z=a.enabledAttributes;for(let X=0,J=z.length;X<J;X++)z[X]!==C[X]&&(o.disableVertexAttribArray(X),z[X]=0)}function D(C,z,X,J,ne,se,ee){ee===!0?o.vertexAttribIPointer(C,z,X,ne,se):o.vertexAttribPointer(C,z,X,J,ne,se)}function w(C,z,X,J){M();const ne=J.attributes,se=X.getAttributes(),ee=z.defaultAttributeValues;for(const Q in se){const F=se[Q];if(F.location>=0){let oe=ne[Q];if(oe===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),oe!==void 0){const T=oe.normalized,K=oe.itemSize,_e=e.get(oe);if(_e===void 0)continue;const Pe=_e.buffer,ye=_e.type,te=_e.bytesPerElement,pe=ye===o.INT||ye===o.UNSIGNED_INT||oe.gpuType===Dg;if(oe.isInterleavedBufferAttribute){const le=oe.data,Te=le.stride,Le=oe.offset;if(le.isInstancedInterleavedBuffer){for(let st=0;st<F.locationSize;st++)x(F.location+st,le.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let st=0;st<F.locationSize;st++)S(F.location+st);o.bindBuffer(o.ARRAY_BUFFER,Pe);for(let st=0;st<F.locationSize;st++)D(F.location+st,K/F.locationSize,ye,T,Te*te,(Le+K/F.locationSize*st)*te,pe)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<F.locationSize;le++)x(F.location+le,oe.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<F.locationSize;le++)S(F.location+le);o.bindBuffer(o.ARRAY_BUFFER,Pe);for(let le=0;le<F.locationSize;le++)D(F.location+le,K/F.locationSize,ye,T,K*te,K/F.locationSize*le*te,pe)}}else if(ee!==void 0){const T=ee[Q];if(T!==void 0)switch(T.length){case 2:o.vertexAttrib2fv(F.location,T);break;case 3:o.vertexAttrib3fv(F.location,T);break;case 4:o.vertexAttrib4fv(F.location,T);break;default:o.vertexAttrib1fv(F.location,T)}}}}N()}function I(){k();for(const C in n){const z=n[C];for(const X in z){const J=z[X];for(const ne in J)p(J[ne].object),delete J[ne];delete z[X]}delete n[C]}}function U(C){if(n[C.id]===void 0)return;const z=n[C.id];for(const X in z){const J=z[X];for(const ne in J)p(J[ne].object),delete J[ne];delete z[X]}delete n[C.id]}function L(C){for(const z in n){const X=n[z];if(X[C.id]===void 0)continue;const J=X[C.id];for(const ne in J)p(J[ne].object),delete J[ne];delete X[C.id]}}function k(){b(),u=!0,a!==r&&(a=r,h(a.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:k,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:S,disableUnusedAttributes:N}}function Yb(o,e,t){let n;function r(h){n=h}function a(h,p){o.drawArrays(n,h,p),t.update(p,n,1)}function u(h,p,g){g!==0&&(o.drawArraysInstanced(n,h,p,g),t.update(p,n,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,g);let v=0;for(let E=0;E<g;E++)v+=p[E];t.update(v,n,1)}function d(h,p,g,_){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<h.length;E++)u(h[E],p[E],_[E]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,p,0,_,0,g);let E=0;for(let M=0;M<g;M++)E+=p[M]*_[M];t.update(E,n,1)}}this.setMode=r,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function qb(o,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(L){return!(L!==Fr&&n.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(L){const k=L===Ju&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ts&&n.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==vs&&!k)}function d(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:v,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:I,maxSamples:U}}function $b(o){const e=this;let t=null,n=0,r=!1,a=!1;const u=new Wo,c=new Rt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const v=g.length!==0||_||n!==0||r;return r=_,n=g.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=p(g,_,0)},this.setState=function(g,_,v){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!r||E===null||E.length===0||a&&!S)a?p(null):h();else{const N=a?0:n,D=N*4;let w=x.clippingState||null;d.value=w,w=p(E,_,D,v);for(let I=0;I!==D;++I)w[I]=t[I];x.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=N}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,_,v,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const x=v+M*4,N=_.matrixWorldInverse;c.getNormalMatrix(N),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,w=v;D!==M;++D,w+=4)u.copy(g[D]).applyMatrix4(N,c),u.normal.toArray(S,w),S[w+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function Kb(o){let e=new WeakMap;function t(u,c){return c===Sm?u.mapping=vl:c===Mm&&(u.mapping=xl),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Sm||c===Mm)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new QT(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",r),t(h.texture,u.mapping)}else return null}}return u}function r(u){const c=u.target;c.removeEventListener("dispose",r);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const rl=4,vx=[.125,.215,.35,.446,.526,.582],Ko=20,Bp=new aw,xx=new $t;let Vp=null,Hp=0,Gp=0,Wp=!1;const Xo=(1+Math.sqrt(5))/2,Za=1/Xo,yx=[new fe(-Xo,Za,0),new fe(Xo,Za,0),new fe(-Za,0,Xo),new fe(Za,0,Xo),new fe(0,Xo,-Za),new fe(0,Xo,Za),new fe(-1,1,-1),new fe(1,1,-1),new fe(-1,1,1),new fe(1,1,1)],Zb=new fe;class Sx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,a={}){const{size:u=256,position:c=Zb}=a;Vp=this._renderer.getRenderTarget(),Hp=this._renderer.getActiveCubeFace(),Gp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,r,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vp,Hp,Gp),this._renderer.xr.enabled=Wp,e.scissorTest=!1,Pf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vl||e.mapping===xl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vp=this._renderer.getRenderTarget(),Hp=this._renderer.getActiveCubeFace(),Gp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yr,minFilter:Yr,generateMipmaps:!1,type:Ju,format:Fr,colorSpace:yl,depthBuffer:!1},r=Mx(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mx(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qb(a)),this._blurMaterial=Jb(a,e,t)}return r}_compileMaterial(e){const t=new xs(this._lodPlanes[0],e);this._renderer.compile(t,Bp)}_sceneToCubeUV(e,t,n,r,a){const d=new _r(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(xx),g.toneMapping=uo,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null));const M=new Zy({name:"PMREM.Background",side:Oi,depthWrite:!1,depthTest:!1}),S=new xs(new rc,M);let x=!1;const N=e.background;N?N.isColor&&(M.color.copy(N),e.background=null,x=!0):(M.color.copy(xx),x=!0);for(let D=0;D<6;D++){const w=D%3;w===0?(d.up.set(0,h[D],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[D],a.y,a.z)):w===1?(d.up.set(0,0,h[D]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[D],a.z)):(d.up.set(0,h[D],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[D]));const I=this._cubeSize;Pf(r,w*I,D>2?I:0,I,I),g.setRenderTarget(r),x&&g.render(S,d),g.render(e,d)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=v,g.autoClear=_,e.background=N}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===vl||e.mapping===xl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ex());const a=r?this._cubemapMaterial:this._equirectMaterial,u=new xs(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;Pf(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(u,Bp)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=yx[(r-a-1)%yx.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",a),this._halfBlur(u,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new xs(this._lodPlanes[r],h),_=h.uniforms,v=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Ko-1),M=a/E,S=isFinite(a)?1+Math.floor(p*M):Ko;S>Ko&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ko}`);const x=[];let N=0;for(let L=0;L<Ko;++L){const k=L/M,b=Math.exp(-k*k/2);x.push(b),L===0?N+=b:L<S&&(N+=2*b)}for(let L=0;L<x.length;L++)x[L]=x[L]/N;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-n;const w=this._sizeLods[r],I=3*w*(r>D-rl?r-D+rl:0),U=4*(this._cubeSize-w);Pf(t,I,U,3*w,2*w),d.setRenderTarget(t),d.render(g,Bp)}}function Qb(o){const e=[],t=[],n=[];let r=o;const a=o-rl+1+vx.length;for(let u=0;u<a;u++){const c=Math.pow(2,r);t.push(c);let d=1/c;u>o-rl?d=vx[u-o+rl-1]:u===0&&(d=0),n.push(d);const h=1/(c-2),p=-h,g=1+h,_=[p,p,g,p,g,g,p,p,g,g,p,g],v=6,E=6,M=3,S=2,x=1,N=new Float32Array(M*E*v),D=new Float32Array(S*E*v),w=new Float32Array(x*E*v);for(let U=0;U<v;U++){const L=U%3*2/3-1,k=U>2?0:-1,b=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];N.set(b,M*E*U),D.set(_,S*E*U);const C=[U,U,U,U,U,U];w.set(C,x*E*U)}const I=new Cs;I.setAttribute("position",new Er(N,M)),I.setAttribute("uv",new Er(D,S)),I.setAttribute("faceIndex",new Er(w,x)),e.push(I),r>rl&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mx(o,e,t){const n=new ca(o,e,t);return n.texture.mapping=wd,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pf(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function Jb(o,e,t){const n=new Float32Array(Ko),r=new fe(0,1,0);return new mo({name:"SphericalGaussianBlur",defines:{n:Ko,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Og(),fragmentShader:`

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
		`,blending:lo,depthTest:!1,depthWrite:!1})}function Ex(){return new mo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Og(),fragmentShader:`

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
		`,blending:lo,depthTest:!1,depthWrite:!1})}function Tx(){return new mo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Og(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lo,depthTest:!1,depthWrite:!1})}function Og(){return`

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
	`}function eC(o){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,h=d===Sm||d===Mm,p=d===vl||d===xl;if(h||p){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new Sx(o)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const v=c.image;return h&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new Sx(o)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function r(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function tC(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ul("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function nC(o,e,t,n){const r={},a=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete r[_.id];const v=a.get(_);v&&(e.remove(v),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return r[_.id]===!0||(_.addEventListener("dispose",u),r[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const v in _)e.update(_[v],o.ARRAY_BUFFER)}function h(g){const _=[],v=g.index,E=g.attributes.position;let M=0;if(v!==null){const N=v.array;M=v.version;for(let D=0,w=N.length;D<w;D+=3){const I=N[D+0],U=N[D+1],L=N[D+2];_.push(I,U,U,L,L,I)}}else if(E!==void 0){const N=E.array;M=E.version;for(let D=0,w=N.length/3-1;D<w;D+=3){const I=D+0,U=D+1,L=D+2;_.push(I,U,U,L,L,I)}}else return;const S=new(jy(_)?Jy:Qy)(_,1);S.version=M;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function p(g){const _=a.get(g);if(_){const v=g.index;v!==null&&_.version<v.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function iC(o,e,t){let n;function r(_){n=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function d(_,v){o.drawElements(n,v,a,_*u),t.update(v,n,1)}function h(_,v,E){E!==0&&(o.drawElementsInstanced(n,v,a,_*u,E),t.update(v,n,E))}function p(_,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,_,0,E);let S=0;for(let x=0;x<E;x++)S+=v[x];t.update(S,n,1)}function g(_,v,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)h(_[x]/u,v[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(n,v,0,a,_,0,M,0,E);let x=0;for(let N=0;N<E;N++)x+=v[N]*M[N];t.update(x,n,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function rC(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function sC(o,e,t){const n=new WeakMap,r=new Cn;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let _=n.get(c);if(_===void 0||_.count!==g){let C=function(){k.dispose(),n.delete(c),c.removeEventListener("dispose",C)};var v=C;_!==void 0&&_.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],N=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let w=0;E===!0&&(w=1),M===!0&&(w=2),S===!0&&(w=3);let I=c.attributes.position.count*w,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const L=new Float32Array(I*U*4*g),k=new Yy(L,I,U,g);k.type=vs,k.needsUpdate=!0;const b=w*4;for(let z=0;z<g;z++){const X=x[z],J=N[z],ne=D[z],se=I*U*4*z;for(let ee=0;ee<X.count;ee++){const Q=ee*b;E===!0&&(r.fromBufferAttribute(X,ee),L[se+Q+0]=r.x,L[se+Q+1]=r.y,L[se+Q+2]=r.z,L[se+Q+3]=0),M===!0&&(r.fromBufferAttribute(J,ee),L[se+Q+4]=r.x,L[se+Q+5]=r.y,L[se+Q+6]=r.z,L[se+Q+7]=0),S===!0&&(r.fromBufferAttribute(ne,ee),L[se+Q+8]=r.x,L[se+Q+9]=r.y,L[se+Q+10]=r.z,L[se+Q+11]=ne.itemSize===4?r.w:1)}}_={count:g,texture:k,size:new nn(I,U)},n.set(c,_),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function oC(o,e,t,n){let r=new WeakMap;function a(d){const h=n.render.frame,p=d.geometry,g=e.get(d,p);if(r.get(g)!==h&&(e.update(g),r.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==h&&(_.update(),r.set(_,h))}return g}function u(){r=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const aS=new zi,wx=new sS(1,1),lS=new Yy,uS=new UT,cS=new nS,Ax=[],bx=[],Cx=new Float32Array(16),Rx=new Float32Array(9),Px=new Float32Array(4);function Pl(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=Ax[r];if(a===void 0&&(a=new Float32Array(r),Ax[r]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function Hn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Gn(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Cd(o,e){let t=bx[e];t===void 0&&(t=new Int32Array(e),bx[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function aC(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function lC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;o.uniform2fv(this.addr,e),Gn(t,e)}}function uC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Hn(t,e))return;o.uniform3fv(this.addr,e),Gn(t,e)}}function cC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;o.uniform4fv(this.addr,e),Gn(t,e)}}function fC(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Gn(t,e)}else{if(Hn(t,n))return;Px.set(n),o.uniformMatrix2fv(this.addr,!1,Px),Gn(t,n)}}function dC(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Gn(t,e)}else{if(Hn(t,n))return;Rx.set(n),o.uniformMatrix3fv(this.addr,!1,Rx),Gn(t,n)}}function hC(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Gn(t,e)}else{if(Hn(t,n))return;Cx.set(n),o.uniformMatrix4fv(this.addr,!1,Cx),Gn(t,n)}}function pC(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function mC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;o.uniform2iv(this.addr,e),Gn(t,e)}}function gC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;o.uniform3iv(this.addr,e),Gn(t,e)}}function _C(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;o.uniform4iv(this.addr,e),Gn(t,e)}}function vC(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function xC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;o.uniform2uiv(this.addr,e),Gn(t,e)}}function yC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;o.uniform3uiv(this.addr,e),Gn(t,e)}}function SC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;o.uniform4uiv(this.addr,e),Gn(t,e)}}function MC(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r);let a;this.type===o.SAMPLER_2D_SHADOW?(wx.compareFunction=Xy,a=wx):a=aS,t.setTexture2D(e||a,r)}function EC(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||uS,r)}function TC(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cS,r)}function wC(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||lS,r)}function AC(o){switch(o){case 5126:return aC;case 35664:return lC;case 35665:return uC;case 35666:return cC;case 35674:return fC;case 35675:return dC;case 35676:return hC;case 5124:case 35670:return pC;case 35667:case 35671:return mC;case 35668:case 35672:return gC;case 35669:case 35673:return _C;case 5125:return vC;case 36294:return xC;case 36295:return yC;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return MC;case 35679:case 36299:case 36307:return EC;case 35680:case 36300:case 36308:case 36293:return TC;case 36289:case 36303:case 36311:case 36292:return wC}}function bC(o,e){o.uniform1fv(this.addr,e)}function CC(o,e){const t=Pl(e,this.size,2);o.uniform2fv(this.addr,t)}function RC(o,e){const t=Pl(e,this.size,3);o.uniform3fv(this.addr,t)}function PC(o,e){const t=Pl(e,this.size,4);o.uniform4fv(this.addr,t)}function DC(o,e){const t=Pl(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function LC(o,e){const t=Pl(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function NC(o,e){const t=Pl(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function IC(o,e){o.uniform1iv(this.addr,e)}function UC(o,e){o.uniform2iv(this.addr,e)}function kC(o,e){o.uniform3iv(this.addr,e)}function FC(o,e){o.uniform4iv(this.addr,e)}function OC(o,e){o.uniform1uiv(this.addr,e)}function zC(o,e){o.uniform2uiv(this.addr,e)}function BC(o,e){o.uniform3uiv(this.addr,e)}function VC(o,e){o.uniform4uiv(this.addr,e)}function HC(o,e,t){const n=this.cache,r=e.length,a=Cd(t,r);Hn(n,a)||(o.uniform1iv(this.addr,a),Gn(n,a));for(let u=0;u!==r;++u)t.setTexture2D(e[u]||aS,a[u])}function GC(o,e,t){const n=this.cache,r=e.length,a=Cd(t,r);Hn(n,a)||(o.uniform1iv(this.addr,a),Gn(n,a));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||uS,a[u])}function WC(o,e,t){const n=this.cache,r=e.length,a=Cd(t,r);Hn(n,a)||(o.uniform1iv(this.addr,a),Gn(n,a));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||cS,a[u])}function XC(o,e,t){const n=this.cache,r=e.length,a=Cd(t,r);Hn(n,a)||(o.uniform1iv(this.addr,a),Gn(n,a));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||lS,a[u])}function jC(o){switch(o){case 5126:return bC;case 35664:return CC;case 35665:return RC;case 35666:return PC;case 35674:return DC;case 35675:return LC;case 35676:return NC;case 5124:case 35670:return IC;case 35667:case 35671:return UC;case 35668:case 35672:return kC;case 35669:case 35673:return FC;case 5125:return OC;case 36294:return zC;case 36295:return BC;case 36296:return VC;case 35678:case 36198:case 36298:case 36306:case 35682:return HC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return XC}}class YC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=AC(t.type)}}class qC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jC(t.type)}}class $C{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Xp=/(\w+)(\])?(\[|\.)?/g;function Dx(o,e){o.seq.push(e),o.map[e.id]=e}function KC(o,e,t){const n=o.name,r=n.length;for(Xp.lastIndex=0;;){const a=Xp.exec(n),u=Xp.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===r){Dx(t,h===void 0?new YC(c,o,e):new qC(c,o,e));break}else{let g=t.map[c];g===void 0&&(g=new $C(c),Dx(t,g)),t=g}}}class Qf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),u=e.getUniformLocation(t,a.name);KC(a,u,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function Lx(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const ZC=37297;let QC=0;function JC(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=r;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const Nx=new Rt;function eR(o){Yt._getMatrix(Nx,Yt.workingColorSpace,o);const e=`mat3( ${Nx.elements.map(t=>t.toFixed(4))} )`;switch(Yt.getTransfer(o)){case ld:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Ix(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+JC(o.getShaderSource(e),c)}else return a}function tR(o,e){const t=eR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nR(o,e){let t;switch(e){case lT:t="Linear";break;case uT:t="Reinhard";break;case cT:t="Cineon";break;case fT:t="ACESFilmic";break;case hT:t="AgX";break;case pT:t="Neutral";break;case dT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Df=new fe;function iR(){Yt.getLuminanceCoefficients(Df);const o=Df.x.toFixed(4),e=Df.y.toFixed(4),t=Df.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yu).join(`
`)}function sR(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oR(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function yu(o){return o!==""}function Ux(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jm(o){return o.replace(aR,uR)}const lR=new Map;function uR(o,e){let t=Pt[e];if(t===void 0){const n=lR.get(e);if(n!==void 0)t=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jm(t)}const cR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fx(o){return o.replace(cR,fR)}function fR(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ox(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Iy?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===V1?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function hR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vl:case xl:e="ENVMAP_TYPE_CUBE";break;case wd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xl:e="ENVMAP_MODE_REFRACTION";break}return e}function mR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Uy:e="ENVMAP_BLENDING_MULTIPLY";break;case oT:e="ENVMAP_BLENDING_MIX";break;case aT:e="ENVMAP_BLENDING_ADD";break}return e}function gR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _R(o,e,t,n){const r=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=dR(t),h=hR(t),p=pR(t),g=mR(t),_=gR(t),v=rR(t),E=sR(a),M=r.createProgram();let S,x,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(yu).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(yu).join(`
`),x.length>0&&(x+=`
`)):(S=[Ox(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yu).join(`
`),x=[Ox(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==uo?"#define TONE_MAPPING":"",t.toneMapping!==uo?Pt.tonemapping_pars_fragment:"",t.toneMapping!==uo?nR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,tR("linearToOutputTexel",t.outputColorSpace),iR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yu).join(`
`)),u=Jm(u),u=Ux(u,t),u=kx(u,t),c=Jm(c),c=Ux(c,t),c=kx(c,t),u=Fx(u),c=Fx(c),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=N+S+u,w=N+x+c,I=Lx(r,r.VERTEX_SHADER,D),U=Lx(r,r.FRAGMENT_SHADER,w);r.attachShader(M,I),r.attachShader(M,U),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function L(z){if(o.debug.checkShaderErrors){const X=r.getProgramInfoLog(M)||"",J=r.getShaderInfoLog(I)||"",ne=r.getShaderInfoLog(U)||"",se=X.trim(),ee=J.trim(),Q=ne.trim();let F=!0,oe=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(F=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,M,I,U);else{const T=Ix(r,I,"vertex"),K=Ix(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+se+`
`+T+`
`+K)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ee===""||Q==="")&&(oe=!1);oe&&(z.diagnostics={runnable:F,programLog:se,vertexShader:{log:ee,prefix:S},fragmentShader:{log:Q,prefix:x}})}r.deleteShader(I),r.deleteShader(U),k=new Qf(r,M),b=oR(r,M)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(M,ZC)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QC++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=U,this}let vR=0;class xR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yR(e),t.set(e,n)),n}}class yR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function SR(o,e,t,n,r,a,u){const c=new $y,d=new xR,h=new Set,p=[],g=r.logarithmicDepthBuffer,_=r.vertexTextures;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return h.add(b),b===0?"uv":`uv${b}`}function S(b,C,z,X,J){const ne=X.fog,se=J.geometry,ee=b.isMeshStandardMaterial?X.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||ee),F=Q&&Q.mapping===wd?Q.image.height:null,oe=E[b.type];b.precision!==null&&(v=r.getMaxPrecision(b.precision),v!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const T=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,K=T!==void 0?T.length:0;let _e=0;se.morphAttributes.position!==void 0&&(_e=1),se.morphAttributes.normal!==void 0&&(_e=2),se.morphAttributes.color!==void 0&&(_e=3);let Pe,ye,te,pe;if(oe){const Oe=Xr[oe];Pe=Oe.vertexShader,ye=Oe.fragmentShader}else Pe=b.vertexShader,ye=b.fragmentShader,d.update(b),te=d.getVertexShaderID(b),pe=d.getFragmentShaderID(b);const le=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Le=J.isInstancedMesh===!0,st=J.isBatchedMesh===!0,Tt=!!b.map,ct=!!b.matcap,V=!!Q,mt=!!b.aoMap,je=!!b.lightMap,yt=!!b.bumpMap,$=!!b.normalMap,Ct=!!b.displacementMap,ze=!!b.emissiveMap,dt=!!b.metalnessMap,St=!!b.roughnessMap,Bt=b.anisotropy>0,O=b.clearcoat>0,R=b.dispersion>0,Z=b.iridescence>0,he=b.sheen>0,me=b.transmission>0,de=Bt&&!!b.anisotropyMap,He=O&&!!b.clearcoatMap,we=O&&!!b.clearcoatNormalMap,Ge=O&&!!b.clearcoatRoughnessMap,ke=Z&&!!b.iridescenceMap,be=Z&&!!b.iridescenceThicknessMap,Ie=he&&!!b.sheenColorMap,at=he&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,Ne=!!b.specularColorMap,ht=!!b.specularIntensityMap,H=me&&!!b.transmissionMap,Ee=me&&!!b.thicknessMap,Ae=!!b.gradientMap,Ue=!!b.alphaMap,xe=b.alphaTest>0,ge=!!b.alphaHash,We=!!b.extensions;let ft=uo;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ft=o.toneMapping);const Vt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Pe,fragmentShader:ye,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:st,batchingColor:st&&J._colorsTexture!==null,instancing:Le,instancingColor:Le&&J.instanceColor!==null,instancingMorph:Le&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:le===null?o.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:yl,alphaToCoverage:!!b.alphaToCoverage,map:Tt,matcap:ct,envMap:V,envMapMode:V&&Q.mapping,envMapCubeUVHeight:F,aoMap:mt,lightMap:je,bumpMap:yt,normalMap:$,displacementMap:_&&Ct,emissiveMap:ze,normalMapObjectSpace:$&&b.normalMapType===xT,normalMapTangentSpace:$&&b.normalMapType===vT,metalnessMap:dt,roughnessMap:St,anisotropy:Bt,anisotropyMap:de,clearcoat:O,clearcoatMap:He,clearcoatNormalMap:we,clearcoatRoughnessMap:Ge,dispersion:R,iridescence:Z,iridescenceMap:ke,iridescenceThicknessMap:be,sheen:he,sheenColorMap:Ie,sheenRoughnessMap:at,specularMap:Ye,specularColorMap:Ne,specularIntensityMap:ht,transmission:me,transmissionMap:H,thicknessMap:Ee,gradientMap:Ae,opaque:b.transparent===!1&&b.blending===ll&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:ge,combine:b.combine,mapUv:Tt&&M(b.map.channel),aoMapUv:mt&&M(b.aoMap.channel),lightMapUv:je&&M(b.lightMap.channel),bumpMapUv:yt&&M(b.bumpMap.channel),normalMapUv:$&&M(b.normalMap.channel),displacementMapUv:Ct&&M(b.displacementMap.channel),emissiveMapUv:ze&&M(b.emissiveMap.channel),metalnessMapUv:dt&&M(b.metalnessMap.channel),roughnessMapUv:St&&M(b.roughnessMap.channel),anisotropyMapUv:de&&M(b.anisotropyMap.channel),clearcoatMapUv:He&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:at&&M(b.sheenRoughnessMap.channel),specularMapUv:Ye&&M(b.specularMap.channel),specularColorMapUv:Ne&&M(b.specularColorMap.channel),specularIntensityMapUv:ht&&M(b.specularIntensityMap.channel),transmissionMapUv:H&&M(b.transmissionMap.channel),thicknessMapUv:Ee&&M(b.thicknessMap.channel),alphaMapUv:Ue&&M(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&($||Bt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!se.attributes.uv&&(Tt||Ue),fog:!!ne,useFog:b.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Te,skinning:J.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:_e,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:ft,decodeVideoTexture:Tt&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===tn,decodeVideoTextureEmissive:ze&&b.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(b.emissiveMap.colorSpace)===tn,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===gs,flipSided:b.side===Oi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:We&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&b.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=h.has(1),Vt.vertexUv2s=h.has(2),Vt.vertexUv3s=h.has(3),h.clear(),Vt}function x(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)C.push(z),C.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(N(C,b),D(C,b),C.push(o.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function N(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function D(b,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),C.gradientMap&&c.enable(22),b.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),b.push(c.mask)}function w(b){const C=E[b.type];let z;if(C){const X=Xr[C];z=qT.clone(X.uniforms)}else z=b.uniforms;return z}function I(b,C){let z;for(let X=0,J=p.length;X<J;X++){const ne=p[X];if(ne.cacheKey===C){z=ne,++z.usedTimes;break}}return z===void 0&&(z=new _R(o,C,b,a),p.push(z)),z}function U(b){if(--b.usedTimes===0){const C=p.indexOf(b);p[C]=p[p.length-1],p.pop(),b.destroy()}}function L(b){d.remove(b)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:w,acquireProgram:I,releaseProgram:U,releaseShaderCache:L,programs:p,dispose:k}}function MR(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function n(u){o.delete(u)}function r(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function ER(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function zx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Bx(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function u(g,_,v,E,M,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:v,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=v,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=S),e++,x}function c(g,_,v,E,M,S){const x=u(g,_,v,E,M,S);v.transmission>0?n.push(x):v.transparent===!0?r.push(x):t.push(x)}function d(g,_,v,E,M,S){const x=u(g,_,v,E,M,S);v.transmission>0?n.unshift(x):v.transparent===!0?r.unshift(x):t.unshift(x)}function h(g,_){t.length>1&&t.sort(g||ER),n.length>1&&n.sort(_||zx),r.length>1&&r.sort(_||zx)}function p(){for(let g=e,_=o.length;g<_;g++){const v=o[g];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:d,finish:p,sort:h}}function TR(){let o=new WeakMap;function e(n,r){const a=o.get(n);let u;return a===void 0?(u=new Bx,o.set(n,[u])):r>=a.length?(u=new Bx,a.push(u)):u=a[r],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function wR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new fe,color:new $t};break;case"SpotLight":t={position:new fe,direction:new fe,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new fe,color:new $t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new fe,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":t={color:new $t,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return o[e.id]=t,t}}}function AR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let bR=0;function CR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function RR(o){const e=new wR,t=AR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new fe);const r=new fe,a=new Un,u=new Un;function c(h){let p=0,g=0,_=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let v=0,E=0,M=0,S=0,x=0,N=0,D=0,w=0,I=0,U=0,L=0;h.sort(CR);for(let b=0,C=h.length;b<C;b++){const z=h[b],X=z.color,J=z.intensity,ne=z.distance,se=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=X.r*J,g+=X.g*J,_+=X.b*J;else if(z.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(z.sh.coefficients[ee],J);L++}else if(z.isDirectionalLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Q=z.shadow,F=t.get(z);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,n.directionalShadow[v]=F,n.directionalShadowMap[v]=se,n.directionalShadowMatrix[v]=z.shadow.matrix,N++}n.directional[v]=ee,v++}else if(z.isSpotLight){const ee=e.get(z);ee.position.setFromMatrixPosition(z.matrixWorld),ee.color.copy(X).multiplyScalar(J),ee.distance=ne,ee.coneCos=Math.cos(z.angle),ee.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ee.decay=z.decay,n.spot[M]=ee;const Q=z.shadow;if(z.map&&(n.spotLightMap[I]=z.map,I++,Q.updateMatrices(z),z.castShadow&&U++),n.spotLightMatrix[M]=Q.matrix,z.castShadow){const F=t.get(z);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,n.spotShadow[M]=F,n.spotShadowMap[M]=se,w++}M++}else if(z.isRectAreaLight){const ee=e.get(z);ee.color.copy(X).multiplyScalar(J),ee.halfWidth.set(z.width*.5,0,0),ee.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=ee,S++}else if(z.isPointLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),ee.distance=z.distance,ee.decay=z.decay,z.castShadow){const Q=z.shadow,F=t.get(z);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,F.shadowCameraNear=Q.camera.near,F.shadowCameraFar=Q.camera.far,n.pointShadow[E]=F,n.pointShadowMap[E]=se,n.pointShadowMatrix[E]=z.shadow.matrix,D++}n.point[E]=ee,E++}else if(z.isHemisphereLight){const ee=e.get(z);ee.skyColor.copy(z.color).multiplyScalar(J),ee.groundColor.copy(z.groundColor).multiplyScalar(J),n.hemi[x]=ee,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=_;const k=n.hash;(k.directionalLength!==v||k.pointLength!==E||k.spotLength!==M||k.rectAreaLength!==S||k.hemiLength!==x||k.numDirectionalShadows!==N||k.numPointShadows!==D||k.numSpotShadows!==w||k.numSpotMaps!==I||k.numLightProbes!==L)&&(n.directional.length=v,n.spot.length=M,n.rectArea.length=S,n.point.length=E,n.hemi.length=x,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=w+I-U,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=L,k.directionalLength=v,k.pointLength=E,k.spotLength=M,k.rectAreaLength=S,k.hemiLength=x,k.numDirectionalShadows=N,k.numPointShadows=D,k.numSpotShadows=w,k.numSpotMaps=I,k.numLightProbes=L,n.version=bR++)}function d(h,p){let g=0,_=0,v=0,E=0,M=0;const S=p.matrixWorldInverse;for(let x=0,N=h.length;x<N;x++){const D=h[x];if(D.isDirectionalLight){const w=n.directional[g];w.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),g++}else if(D.isSpotLight){const w=n.spot[v];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),v++}else if(D.isRectAreaLight){const w=n.rectArea[E];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),u.identity(),a.copy(D.matrixWorld),a.premultiply(S),u.extractRotation(a),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const w=n.point[_];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),_++}else if(D.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(S),M++}}}return{setup:c,setupView:d,state:n}}function Vx(o){const e=new RR(o),t=[],n=[];function r(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function PR(o){let e=new WeakMap;function t(r,a=0){const u=e.get(r);let c;return u===void 0?(c=new Vx(o),e.set(r,[c])):a>=u.length?(c=new Vx(o),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const DR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LR=`uniform sampler2D shadow_pass;
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
}`;function NR(o,e,t){let n=new iS;const r=new nn,a=new nn,u=new Cn,c=new sw({depthPacking:_T}),d=new ow,h={},p=t.maxTextureSize,g={[po]:Oi,[Oi]:po,[gs]:gs},_=new mo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nn},radius:{value:4}},vertexShader:DR,fragmentShader:LR}),v=_.clone();v.defines.HORIZONTAL_PASS=1;const E=new Cs;E.setAttribute("position",new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new xs(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iy;let x=this.type;this.render=function(U,L,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const b=o.getRenderTarget(),C=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),X=o.state;X.setBlending(lo),X.buffers.depth.getReversed()?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const J=x!==hs&&this.type===hs,ne=x===hs&&this.type!==hs;for(let se=0,ee=U.length;se<ee;se++){const Q=U[se],F=Q.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const oe=F.getFrameExtents();if(r.multiply(oe),a.copy(F.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/oe.x),r.x=a.x*oe.x,F.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/oe.y),r.y=a.y*oe.y,F.mapSize.y=a.y)),F.map===null||J===!0||ne===!0){const K=this.type!==hs?{minFilter:Or,magFilter:Or}:{};F.map!==null&&F.map.dispose(),F.map=new ca(r.x,r.y,K),F.map.texture.name=Q.name+".shadowMap",F.camera.updateProjectionMatrix()}o.setRenderTarget(F.map),o.clear();const T=F.getViewportCount();for(let K=0;K<T;K++){const _e=F.getViewport(K);u.set(a.x*_e.x,a.y*_e.y,a.x*_e.z,a.y*_e.w),X.viewport(u),F.updateMatrices(Q,K),n=F.getFrustum(),w(L,k,F.camera,Q,this.type)}F.isPointLightShadow!==!0&&this.type===hs&&N(F,k),F.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(b,C,z)};function N(U,L){const k=e.update(M);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ca(r.x,r.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(L,null,k,_,M,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(L,null,k,v,M,null)}function D(U,L,k,b){let C=null;const z=k.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)C=z;else if(C=k.isPointLight===!0?d:c,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const X=C.uuid,J=L.uuid;let ne=h[X];ne===void 0&&(ne={},h[X]=ne);let se=ne[J];se===void 0&&(se=C.clone(),ne[J]=se,L.addEventListener("dispose",I)),C=se}if(C.visible=L.visible,C.wireframe=L.wireframe,b===hs?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:g[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const X=o.properties.get(C);X.light=k}return C}function w(U,L,k,b,C){if(U.visible===!1)return;if(U.layers.test(L.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===hs)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,U.matrixWorld);const J=e.update(U),ne=U.material;if(Array.isArray(ne)){const se=J.groups;for(let ee=0,Q=se.length;ee<Q;ee++){const F=se[ee],oe=ne[F.materialIndex];if(oe&&oe.visible){const T=D(U,oe,b,C);U.onBeforeShadow(o,U,L,k,J,T,F),o.renderBufferDirect(k,null,J,T,U,F),U.onAfterShadow(o,U,L,k,J,T,F)}}}else if(ne.visible){const se=D(U,ne,b,C);U.onBeforeShadow(o,U,L,k,J,se,null),o.renderBufferDirect(k,null,J,se,U,null),U.onAfterShadow(o,U,L,k,J,se,null)}}const X=U.children;for(let J=0,ne=X.length;J<ne;J++)w(X[J],L,k,b,C)}function I(U){U.target.removeEventListener("dispose",I);for(const k in h){const b=h[k],C=U.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const IR={[pm]:mm,[gm]:xm,[_m]:ym,[_l]:vm,[mm]:pm,[xm]:gm,[ym]:_m,[vm]:_l};function UR(o,e){function t(){let H=!1;const Ee=new Cn;let Ae=null;const Ue=new Cn(0,0,0,0);return{setMask:function(xe){Ae!==xe&&!H&&(o.colorMask(xe,xe,xe,xe),Ae=xe)},setLocked:function(xe){H=xe},setClear:function(xe,ge,We,ft,Vt){Vt===!0&&(xe*=ft,ge*=ft,We*=ft),Ee.set(xe,ge,We,ft),Ue.equals(Ee)===!1&&(o.clearColor(xe,ge,We,ft),Ue.copy(Ee))},reset:function(){H=!1,Ae=null,Ue.set(-1,0,0,0)}}}function n(){let H=!1,Ee=!1,Ae=null,Ue=null,xe=null;return{setReversed:function(ge){if(Ee!==ge){const We=e.get("EXT_clip_control");ge?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ee=ge;const ft=xe;xe=null,this.setClear(ft)}},getReversed:function(){return Ee},setTest:function(ge){ge?le(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(ge){Ae!==ge&&!H&&(o.depthMask(ge),Ae=ge)},setFunc:function(ge){if(Ee&&(ge=IR[ge]),Ue!==ge){switch(ge){case pm:o.depthFunc(o.NEVER);break;case mm:o.depthFunc(o.ALWAYS);break;case gm:o.depthFunc(o.LESS);break;case _l:o.depthFunc(o.LEQUAL);break;case _m:o.depthFunc(o.EQUAL);break;case vm:o.depthFunc(o.GEQUAL);break;case xm:o.depthFunc(o.GREATER);break;case ym:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ue=ge}},setLocked:function(ge){H=ge},setClear:function(ge){xe!==ge&&(Ee&&(ge=1-ge),o.clearDepth(ge),xe=ge)},reset:function(){H=!1,Ae=null,Ue=null,xe=null,Ee=!1}}}function r(){let H=!1,Ee=null,Ae=null,Ue=null,xe=null,ge=null,We=null,ft=null,Vt=null;return{setTest:function(Oe){H||(Oe?le(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Oe){Ee!==Oe&&!H&&(o.stencilMask(Oe),Ee=Oe)},setFunc:function(Oe,tt,Mt){(Ae!==Oe||Ue!==tt||xe!==Mt)&&(o.stencilFunc(Oe,tt,Mt),Ae=Oe,Ue=tt,xe=Mt)},setOp:function(Oe,tt,Mt){(ge!==Oe||We!==tt||ft!==Mt)&&(o.stencilOp(Oe,tt,Mt),ge=Oe,We=tt,ft=Mt)},setLocked:function(Oe){H=Oe},setClear:function(Oe){Vt!==Oe&&(o.clearStencil(Oe),Vt=Oe)},reset:function(){H=!1,Ee=null,Ae=null,Ue=null,xe=null,ge=null,We=null,ft=null,Vt=null}}}const a=new t,u=new n,c=new r,d=new WeakMap,h=new WeakMap;let p={},g={},_=new WeakMap,v=[],E=null,M=!1,S=null,x=null,N=null,D=null,w=null,I=null,U=null,L=new $t(0,0,0),k=0,b=!1,C=null,z=null,X=null,J=null,ne=null;const se=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Q=0;const F=o.getParameter(o.VERSION);F.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(F)[1]),ee=Q>=1):F.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),ee=Q>=2);let oe=null,T={};const K=o.getParameter(o.SCISSOR_BOX),_e=o.getParameter(o.VIEWPORT),Pe=new Cn().fromArray(K),ye=new Cn().fromArray(_e);function te(H,Ee,Ae,Ue){const xe=new Uint8Array(4),ge=o.createTexture();o.bindTexture(H,ge),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let We=0;We<Ae;We++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Ee,0,o.RGBA,1,1,Ue,0,o.RGBA,o.UNSIGNED_BYTE,xe):o.texImage2D(Ee+We,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xe);return ge}const pe={};pe[o.TEXTURE_2D]=te(o.TEXTURE_2D,o.TEXTURE_2D,1),pe[o.TEXTURE_CUBE_MAP]=te(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[o.TEXTURE_2D_ARRAY]=te(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pe[o.TEXTURE_3D]=te(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),le(o.DEPTH_TEST),u.setFunc(_l),yt(!1),$(jv),le(o.CULL_FACE),mt(lo);function le(H){p[H]!==!0&&(o.enable(H),p[H]=!0)}function Te(H){p[H]!==!1&&(o.disable(H),p[H]=!1)}function Le(H,Ee){return g[H]!==Ee?(o.bindFramebuffer(H,Ee),g[H]=Ee,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ee),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ee),!0):!1}function st(H,Ee){let Ae=v,Ue=!1;if(H){Ae=_.get(Ee),Ae===void 0&&(Ae=[],_.set(Ee,Ae));const xe=H.textures;if(Ae.length!==xe.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,We=xe.length;ge<We;ge++)Ae[ge]=o.COLOR_ATTACHMENT0+ge;Ae.length=xe.length,Ue=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Ue=!0);Ue&&o.drawBuffers(Ae)}function Tt(H){return E!==H?(o.useProgram(H),E=H,!0):!1}const ct={[$o]:o.FUNC_ADD,[G1]:o.FUNC_SUBTRACT,[W1]:o.FUNC_REVERSE_SUBTRACT};ct[X1]=o.MIN,ct[j1]=o.MAX;const V={[Y1]:o.ZERO,[q1]:o.ONE,[$1]:o.SRC_COLOR,[dm]:o.SRC_ALPHA,[tT]:o.SRC_ALPHA_SATURATE,[J1]:o.DST_COLOR,[Z1]:o.DST_ALPHA,[K1]:o.ONE_MINUS_SRC_COLOR,[hm]:o.ONE_MINUS_SRC_ALPHA,[eT]:o.ONE_MINUS_DST_COLOR,[Q1]:o.ONE_MINUS_DST_ALPHA,[nT]:o.CONSTANT_COLOR,[iT]:o.ONE_MINUS_CONSTANT_COLOR,[rT]:o.CONSTANT_ALPHA,[sT]:o.ONE_MINUS_CONSTANT_ALPHA};function mt(H,Ee,Ae,Ue,xe,ge,We,ft,Vt,Oe){if(H===lo){M===!0&&(Te(o.BLEND),M=!1);return}if(M===!1&&(le(o.BLEND),M=!0),H!==H1){if(H!==S||Oe!==b){if((x!==$o||w!==$o)&&(o.blendEquation(o.FUNC_ADD),x=$o,w=$o),Oe)switch(H){case ll:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fm:o.blendFunc(o.ONE,o.ONE);break;case Yv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ll:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fm:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Yv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}N=null,D=null,I=null,U=null,L.set(0,0,0),k=0,S=H,b=Oe}return}xe=xe||Ee,ge=ge||Ae,We=We||Ue,(Ee!==x||xe!==w)&&(o.blendEquationSeparate(ct[Ee],ct[xe]),x=Ee,w=xe),(Ae!==N||Ue!==D||ge!==I||We!==U)&&(o.blendFuncSeparate(V[Ae],V[Ue],V[ge],V[We]),N=Ae,D=Ue,I=ge,U=We),(ft.equals(L)===!1||Vt!==k)&&(o.blendColor(ft.r,ft.g,ft.b,Vt),L.copy(ft),k=Vt),S=H,b=!1}function je(H,Ee){H.side===gs?Te(o.CULL_FACE):le(o.CULL_FACE);let Ae=H.side===Oi;Ee&&(Ae=!Ae),yt(Ae),H.blending===ll&&H.transparent===!1?mt(lo):mt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ue=H.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ze(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?le(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function yt(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function $(H){H!==z1?(le(o.CULL_FACE),H!==z&&(H===jv?o.cullFace(o.BACK):H===B1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=H}function Ct(H){H!==X&&(ee&&o.lineWidth(H),X=H)}function ze(H,Ee,Ae){H?(le(o.POLYGON_OFFSET_FILL),(J!==Ee||ne!==Ae)&&(o.polygonOffset(Ee,Ae),J=Ee,ne=Ae)):Te(o.POLYGON_OFFSET_FILL)}function dt(H){H?le(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function St(H){H===void 0&&(H=o.TEXTURE0+se-1),oe!==H&&(o.activeTexture(H),oe=H)}function Bt(H,Ee,Ae){Ae===void 0&&(oe===null?Ae=o.TEXTURE0+se-1:Ae=oe);let Ue=T[Ae];Ue===void 0&&(Ue={type:void 0,texture:void 0},T[Ae]=Ue),(Ue.type!==H||Ue.texture!==Ee)&&(oe!==Ae&&(o.activeTexture(Ae),oe=Ae),o.bindTexture(H,Ee||pe[H]),Ue.type=H,Ue.texture=Ee)}function O(){const H=T[oe];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{o.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{o.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{o.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{o.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{o.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{o.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{o.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{o.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{o.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(H){Pe.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Pe.copy(H))}function at(H){ye.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),ye.copy(H))}function Ye(H,Ee){let Ae=h.get(Ee);Ae===void 0&&(Ae=new WeakMap,h.set(Ee,Ae));let Ue=Ae.get(H);Ue===void 0&&(Ue=o.getUniformBlockIndex(Ee,H.name),Ae.set(H,Ue))}function Ne(H,Ee){const Ue=h.get(Ee).get(H);d.get(Ee)!==Ue&&(o.uniformBlockBinding(Ee,Ue,H.__bindingPointIndex),d.set(Ee,Ue))}function ht(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},oe=null,T={},g={},_=new WeakMap,v=[],E=null,M=!1,S=null,x=null,N=null,D=null,w=null,I=null,U=null,L=new $t(0,0,0),k=0,b=!1,C=null,z=null,X=null,J=null,ne=null,Pe.set(0,0,o.canvas.width,o.canvas.height),ye.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:le,disable:Te,bindFramebuffer:Le,drawBuffers:st,useProgram:Tt,setBlending:mt,setMaterial:je,setFlipSided:yt,setCullFace:$,setLineWidth:Ct,setPolygonOffset:ze,setScissorTest:dt,activeTexture:St,bindTexture:Bt,unbindTexture:O,compressedTexImage2D:R,compressedTexImage3D:Z,texImage2D:ke,texImage3D:be,updateUBOMapping:Ye,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:Ge,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:de,compressedTexSubImage3D:He,scissor:Ie,viewport:at,reset:ht}}function kR(o,e,t,n,r,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new nn,p=new WeakMap;let g;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,R){return v?new OffscreenCanvas(O,R):cd("canvas")}function M(O,R,Z){let he=1;const me=Bt(O);if((me.width>Z||me.height>Z)&&(he=Z/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const de=Math.floor(he*me.width),He=Math.floor(he*me.height);g===void 0&&(g=E(de,He));const we=R?E(de,He):g;return we.width=de,we.height=He,we.getContext("2d").drawImage(O,0,0,de,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+de+"x"+He+")."),we}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(O,R,Z,he,me=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let de=R;if(R===o.RED&&(Z===o.FLOAT&&(de=o.R32F),Z===o.HALF_FLOAT&&(de=o.R16F),Z===o.UNSIGNED_BYTE&&(de=o.R8)),R===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.R8UI),Z===o.UNSIGNED_SHORT&&(de=o.R16UI),Z===o.UNSIGNED_INT&&(de=o.R32UI),Z===o.BYTE&&(de=o.R8I),Z===o.SHORT&&(de=o.R16I),Z===o.INT&&(de=o.R32I)),R===o.RG&&(Z===o.FLOAT&&(de=o.RG32F),Z===o.HALF_FLOAT&&(de=o.RG16F),Z===o.UNSIGNED_BYTE&&(de=o.RG8)),R===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.RG8UI),Z===o.UNSIGNED_SHORT&&(de=o.RG16UI),Z===o.UNSIGNED_INT&&(de=o.RG32UI),Z===o.BYTE&&(de=o.RG8I),Z===o.SHORT&&(de=o.RG16I),Z===o.INT&&(de=o.RG32I)),R===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(de=o.RGB16UI),Z===o.UNSIGNED_INT&&(de=o.RGB32UI),Z===o.BYTE&&(de=o.RGB8I),Z===o.SHORT&&(de=o.RGB16I),Z===o.INT&&(de=o.RGB32I)),R===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),Z===o.UNSIGNED_INT&&(de=o.RGBA32UI),Z===o.BYTE&&(de=o.RGBA8I),Z===o.SHORT&&(de=o.RGBA16I),Z===o.INT&&(de=o.RGBA32I)),R===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),R===o.RGBA){const He=me?ld:Yt.getTransfer(he);Z===o.FLOAT&&(de=o.RGBA32F),Z===o.HALF_FLOAT&&(de=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(de=He===tn?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function w(O,R){let Z;return O?R===null||R===ua||R===Vu?Z=o.DEPTH24_STENCIL8:R===vs?Z=o.DEPTH32F_STENCIL8:R===Bu&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ua||R===Vu?Z=o.DEPTH_COMPONENT24:R===vs?Z=o.DEPTH_COMPONENT32F:R===Bu&&(Z=o.DEPTH_COMPONENT16),Z}function I(O,R){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Or&&O.minFilter!==Yr?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function U(O){const R=O.target;R.removeEventListener("dispose",U),k(R),R.isVideoTexture&&p.delete(R)}function L(O){const R=O.target;R.removeEventListener("dispose",L),C(R)}function k(O){const R=n.get(O);if(R.__webglInit===void 0)return;const Z=O.source,he=_.get(Z);if(he){const me=he[R.__cacheKey];me.usedTimes--,me.usedTimes===0&&b(O),Object.keys(he).length===0&&_.delete(Z)}n.remove(O)}function b(O){const R=n.get(O);o.deleteTexture(R.__webglTexture);const Z=O.source,he=_.get(Z);delete he[R.__cacheKey],u.memory.textures--}function C(O){const R=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(R.__webglFramebuffer[he]))for(let me=0;me<R.__webglFramebuffer[he].length;me++)o.deleteFramebuffer(R.__webglFramebuffer[he][me]);else o.deleteFramebuffer(R.__webglFramebuffer[he]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[he])}else{if(Array.isArray(R.__webglFramebuffer))for(let he=0;he<R.__webglFramebuffer.length;he++)o.deleteFramebuffer(R.__webglFramebuffer[he]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let he=0;he<R.__webglColorRenderbuffer.length;he++)R.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[he]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=O.textures;for(let he=0,me=Z.length;he<me;he++){const de=n.get(Z[he]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),u.memory.textures--),n.remove(Z[he])}n.remove(O)}let z=0;function X(){z=0}function J(){const O=z;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),z+=1,O}function ne(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function se(O,R){const Z=n.get(O);if(O.isVideoTexture&&dt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){const he=O.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Z,O,R);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+R)}function ee(O,R){const Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){pe(Z,O,R);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+R)}function Q(O,R){const Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){pe(Z,O,R);return}t.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+R)}function F(O,R){const Z=n.get(O);if(O.version>0&&Z.__version!==O.version){le(Z,O,R);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+R)}const oe={[Em]:o.REPEAT,[Zo]:o.CLAMP_TO_EDGE,[Tm]:o.MIRRORED_REPEAT},T={[Or]:o.NEAREST,[mT]:o.NEAREST_MIPMAP_NEAREST,[lf]:o.NEAREST_MIPMAP_LINEAR,[Yr]:o.LINEAR,[mp]:o.LINEAR_MIPMAP_NEAREST,[Qo]:o.LINEAR_MIPMAP_LINEAR},K={[yT]:o.NEVER,[AT]:o.ALWAYS,[ST]:o.LESS,[Xy]:o.LEQUAL,[MT]:o.EQUAL,[wT]:o.GEQUAL,[ET]:o.GREATER,[TT]:o.NOTEQUAL};function _e(O,R){if(R.type===vs&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Yr||R.magFilter===mp||R.magFilter===lf||R.magFilter===Qo||R.minFilter===Yr||R.minFilter===mp||R.minFilter===lf||R.minFilter===Qo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,oe[R.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,oe[R.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,oe[R.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,T[R.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,T[R.minFilter]),R.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,K[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Or||R.minFilter!==lf&&R.minFilter!==Qo||R.type===vs&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Pe(O,R){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",U));const he=R.source;let me=_.get(he);me===void 0&&(me={},_.set(he,me));const de=ne(R);if(de!==O.__cacheKey){me[de]===void 0&&(me[de]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),me[de].usedTimes++;const He=me[O.__cacheKey];He!==void 0&&(me[O.__cacheKey].usedTimes--,He.usedTimes===0&&b(R)),O.__cacheKey=de,O.__webglTexture=me[de].texture}return Z}function ye(O,R,Z){return Math.floor(Math.floor(O/Z)/R)}function te(O,R,Z,he){const de=O.updateRanges;if(de.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,Z,he,R.data);else{de.sort((be,Ie)=>be.start-Ie.start);let He=0;for(let be=1;be<de.length;be++){const Ie=de[He],at=de[be],Ye=Ie.start+Ie.count,Ne=ye(at.start,R.width,4),ht=ye(Ie.start,R.width,4);at.start<=Ye+1&&Ne===ht&&ye(at.start+at.count-1,R.width,4)===Ne?Ie.count=Math.max(Ie.count,at.start+at.count-Ie.start):(++He,de[He]=at)}de.length=He+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),Ge=o.getParameter(o.UNPACK_SKIP_PIXELS),ke=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let be=0,Ie=de.length;be<Ie;be++){const at=de[be],Ye=Math.floor(at.start/4),Ne=Math.ceil(at.count/4),ht=Ye%R.width,H=Math.floor(Ye/R.width),Ee=Ne,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),t.texSubImage2D(o.TEXTURE_2D,0,ht,H,Ee,Ae,Z,he,R.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,ke)}}function pe(O,R,Z){let he=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(he=o.TEXTURE_3D);const me=Pe(O,R),de=R.source;t.bindTexture(he,O.__webglTexture,o.TEXTURE0+Z);const He=n.get(de);if(de.version!==He.__version||me===!0){t.activeTexture(o.TEXTURE0+Z);const we=Yt.getPrimaries(Yt.workingColorSpace),Ge=R.colorSpace===no?null:Yt.getPrimaries(R.colorSpace),ke=R.colorSpace===no||we===Ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let be=M(R.image,!1,r.maxTextureSize);be=St(R,be);const Ie=a.convert(R.format,R.colorSpace),at=a.convert(R.type);let Ye=D(R.internalFormat,Ie,at,R.colorSpace,R.isVideoTexture);_e(he,R);let Ne;const ht=R.mipmaps,H=R.isVideoTexture!==!0,Ee=He.__version===void 0||me===!0,Ae=de.dataReady,Ue=I(R,be);if(R.isDepthTexture)Ye=w(R.format===Gu,R.type),Ee&&(H?t.texStorage2D(o.TEXTURE_2D,1,Ye,be.width,be.height):t.texImage2D(o.TEXTURE_2D,0,Ye,be.width,be.height,0,Ie,at,null));else if(R.isDataTexture)if(ht.length>0){H&&Ee&&t.texStorage2D(o.TEXTURE_2D,Ue,Ye,ht[0].width,ht[0].height);for(let xe=0,ge=ht.length;xe<ge;xe++)Ne=ht[xe],H?Ae&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Ie,at,Ne.data):t.texImage2D(o.TEXTURE_2D,xe,Ye,Ne.width,Ne.height,0,Ie,at,Ne.data);R.generateMipmaps=!1}else H?(Ee&&t.texStorage2D(o.TEXTURE_2D,Ue,Ye,be.width,be.height),Ae&&te(R,be,Ie,at)):t.texImage2D(o.TEXTURE_2D,0,Ye,be.width,be.height,0,Ie,at,be.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){H&&Ee&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Ye,ht[0].width,ht[0].height,be.depth);for(let xe=0,ge=ht.length;xe<ge;xe++)if(Ne=ht[xe],R.format!==Fr)if(Ie!==null)if(H){if(Ae)if(R.layerUpdates.size>0){const We=_x(Ne.width,Ne.height,R.format,R.type);for(const ft of R.layerUpdates){const Vt=Ne.data.subarray(ft*We/Ne.data.BYTES_PER_ELEMENT,(ft+1)*We/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,ft,Ne.width,Ne.height,1,Ie,Vt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,be.depth,Ie,Ne.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xe,Ye,Ne.width,Ne.height,be.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ae&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,be.depth,Ie,at,Ne.data):t.texImage3D(o.TEXTURE_2D_ARRAY,xe,Ye,Ne.width,Ne.height,be.depth,0,Ie,at,Ne.data)}else{H&&Ee&&t.texStorage2D(o.TEXTURE_2D,Ue,Ye,ht[0].width,ht[0].height);for(let xe=0,ge=ht.length;xe<ge;xe++)Ne=ht[xe],R.format!==Fr?Ie!==null?H?Ae&&t.compressedTexSubImage2D(o.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Ie,Ne.data):t.compressedTexImage2D(o.TEXTURE_2D,xe,Ye,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ae&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Ie,at,Ne.data):t.texImage2D(o.TEXTURE_2D,xe,Ye,Ne.width,Ne.height,0,Ie,at,Ne.data)}else if(R.isDataArrayTexture)if(H){if(Ee&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Ye,be.width,be.height,be.depth),Ae)if(R.layerUpdates.size>0){const xe=_x(be.width,be.height,R.format,R.type);for(const ge of R.layerUpdates){const We=be.data.subarray(ge*xe/be.data.BYTES_PER_ELEMENT,(ge+1)*xe/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,be.width,be.height,1,Ie,at,We)}R.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ie,at,be.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ye,be.width,be.height,be.depth,0,Ie,at,be.data);else if(R.isData3DTexture)H?(Ee&&t.texStorage3D(o.TEXTURE_3D,Ue,Ye,be.width,be.height,be.depth),Ae&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ie,at,be.data)):t.texImage3D(o.TEXTURE_3D,0,Ye,be.width,be.height,be.depth,0,Ie,at,be.data);else if(R.isFramebufferTexture){if(Ee)if(H)t.texStorage2D(o.TEXTURE_2D,Ue,Ye,be.width,be.height);else{let xe=be.width,ge=be.height;for(let We=0;We<Ue;We++)t.texImage2D(o.TEXTURE_2D,We,Ye,xe,ge,0,Ie,at,null),xe>>=1,ge>>=1}}else if(ht.length>0){if(H&&Ee){const xe=Bt(ht[0]);t.texStorage2D(o.TEXTURE_2D,Ue,Ye,xe.width,xe.height)}for(let xe=0,ge=ht.length;xe<ge;xe++)Ne=ht[xe],H?Ae&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,Ie,at,Ne):t.texImage2D(o.TEXTURE_2D,xe,Ye,Ie,at,Ne);R.generateMipmaps=!1}else if(H){if(Ee){const xe=Bt(be);t.texStorage2D(o.TEXTURE_2D,Ue,Ye,xe.width,xe.height)}Ae&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ie,at,be)}else t.texImage2D(o.TEXTURE_2D,0,Ye,Ie,at,be);S(R)&&x(he),He.__version=de.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function le(O,R,Z){if(R.image.length!==6)return;const he=Pe(O,R),me=R.source;t.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+Z);const de=n.get(me);if(me.version!==de.__version||he===!0){t.activeTexture(o.TEXTURE0+Z);const He=Yt.getPrimaries(Yt.workingColorSpace),we=R.colorSpace===no?null:Yt.getPrimaries(R.colorSpace),Ge=R.colorSpace===no||He===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const ke=R.isCompressedTexture||R.image[0].isCompressedTexture,be=R.image[0]&&R.image[0].isDataTexture,Ie=[];for(let ge=0;ge<6;ge++)!ke&&!be?Ie[ge]=M(R.image[ge],!0,r.maxCubemapSize):Ie[ge]=be?R.image[ge].image:R.image[ge],Ie[ge]=St(R,Ie[ge]);const at=Ie[0],Ye=a.convert(R.format,R.colorSpace),Ne=a.convert(R.type),ht=D(R.internalFormat,Ye,Ne,R.colorSpace),H=R.isVideoTexture!==!0,Ee=de.__version===void 0||he===!0,Ae=me.dataReady;let Ue=I(R,at);_e(o.TEXTURE_CUBE_MAP,R);let xe;if(ke){H&&Ee&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ue,ht,at.width,at.height);for(let ge=0;ge<6;ge++){xe=Ie[ge].mipmaps;for(let We=0;We<xe.length;We++){const ft=xe[We];R.format!==Fr?Ye!==null?H?Ae&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,ft.width,ft.height,Ye,ft.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,ht,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,ft.width,ft.height,Ye,Ne,ft.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,ht,ft.width,ft.height,0,Ye,Ne,ft.data)}}}else{if(xe=R.mipmaps,H&&Ee){xe.length>0&&Ue++;const ge=Bt(Ie[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ue,ht,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(be){H?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ie[ge].width,Ie[ge].height,Ye,Ne,Ie[ge].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ht,Ie[ge].width,Ie[ge].height,0,Ye,Ne,Ie[ge].data);for(let We=0;We<xe.length;We++){const Vt=xe[We].image[ge].image;H?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,Vt.width,Vt.height,Ye,Ne,Vt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,ht,Vt.width,Vt.height,0,Ye,Ne,Vt.data)}}else{H?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ye,Ne,Ie[ge]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ht,Ye,Ne,Ie[ge]);for(let We=0;We<xe.length;We++){const ft=xe[We];H?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,Ye,Ne,ft.image[ge]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,ht,Ye,Ne,ft.image[ge])}}}S(R)&&x(o.TEXTURE_CUBE_MAP),de.__version=me.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function Te(O,R,Z,he,me,de){const He=a.convert(Z.format,Z.colorSpace),we=a.convert(Z.type),Ge=D(Z.internalFormat,He,we,Z.colorSpace),ke=n.get(R),be=n.get(Z);if(be.__renderTarget=R,!ke.__hasExternalTextures){const Ie=Math.max(1,R.width>>de),at=Math.max(1,R.height>>de);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?t.texImage3D(me,de,Ge,Ie,at,R.depth,0,He,we,null):t.texImage2D(me,de,Ge,Ie,at,0,He,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,O),ze(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,me,be.__webglTexture,0,Ct(R)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,me,be.__webglTexture,de),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(O,R,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,O),R.depthBuffer){const he=R.depthTexture,me=he&&he.isDepthTexture?he.type:null,de=w(R.stencilBuffer,me),He=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=Ct(R);ze(R)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,de,R.width,R.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,de,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,de,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,He,o.RENDERBUFFER,O)}else{const he=R.textures;for(let me=0;me<he.length;me++){const de=he[me],He=a.convert(de.format,de.colorSpace),we=a.convert(de.type),Ge=D(de.internalFormat,He,we,de.colorSpace),ke=Ct(R);Z&&ze(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ke,Ge,R.width,R.height):ze(R)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ke,Ge,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Ge,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function st(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(R.depthTexture);he.__renderTarget=R,(!he.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),se(R.depthTexture,0);const me=he.__webglTexture,de=Ct(R);if(R.depthTexture.format===Hu)ze(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,me,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,me,0);else if(R.depthTexture.format===Gu)ze(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,me,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Tt(O){const R=n.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){const he=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),he){const me=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),R.__depthDisposeCallback=me}R.__boundDepthTexture=he}if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const he=O.texture.mipmaps;he&&he.length>0?st(R.__webglFramebuffer[0],O):st(R.__webglFramebuffer,O)}else if(Z){R.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[he]),R.__webglDepthbuffer[he]===void 0)R.__webglDepthbuffer[he]=o.createRenderbuffer(),Le(R.__webglDepthbuffer[he],O,!1);else{const me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,de)}}else{const he=O.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Le(R.__webglDepthbuffer,O,!1);else{const me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,de)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function ct(O,R,Z){const he=n.get(O);R!==void 0&&Te(he.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Tt(O)}function V(O){const R=O.texture,Z=n.get(O),he=n.get(R);O.addEventListener("dispose",L);const me=O.textures,de=O.isWebGLCubeRenderTarget===!0,He=me.length>1;if(He||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=R.version,u.memory.textures++),de){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let Ge=0;Ge<R.mipmaps.length;Ge++)Z.__webglFramebuffer[we][Ge]=o.createFramebuffer()}else Z.__webglFramebuffer[we]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<R.mipmaps.length;we++)Z.__webglFramebuffer[we]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(He)for(let we=0,Ge=me.length;we<Ge;we++){const ke=n.get(me[we]);ke.__webglTexture===void 0&&(ke.__webglTexture=o.createTexture(),u.memory.textures++)}if(O.samples>0&&ze(O)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<me.length;we++){const Ge=me[we];Z.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);const ke=a.convert(Ge.format,Ge.colorSpace),be=a.convert(Ge.type),Ie=D(Ge.internalFormat,ke,be,Ge.colorSpace,O.isXRRenderTarget===!0),at=Ct(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,at,Ie,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Le(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){t.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),_e(o.TEXTURE_CUBE_MAP,R);for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ge=0;Ge<R.mipmaps.length;Ge++)Te(Z.__webglFramebuffer[we][Ge],O,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge);else Te(Z.__webglFramebuffer[we],O,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(R)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let we=0,Ge=me.length;we<Ge;we++){const ke=me[we],be=n.get(ke);let Ie=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ie,be.__webglTexture),_e(Ie,ke),Te(Z.__webglFramebuffer,O,ke,o.COLOR_ATTACHMENT0+we,Ie,0),S(ke)&&x(Ie)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,he.__webglTexture),_e(we,R),R.mipmaps&&R.mipmaps.length>0)for(let Ge=0;Ge<R.mipmaps.length;Ge++)Te(Z.__webglFramebuffer[Ge],O,R,o.COLOR_ATTACHMENT0,we,Ge);else Te(Z.__webglFramebuffer,O,R,o.COLOR_ATTACHMENT0,we,0);S(R)&&x(we),t.unbindTexture()}O.depthBuffer&&Tt(O)}function mt(O){const R=O.textures;for(let Z=0,he=R.length;Z<he;Z++){const me=R[Z];if(S(me)){const de=N(O),He=n.get(me).__webglTexture;t.bindTexture(de,He),x(de),t.unbindTexture()}}}const je=[],yt=[];function $(O){if(O.samples>0){if(ze(O)===!1){const R=O.textures,Z=O.width,he=O.height;let me=o.COLOR_BUFFER_BIT;const de=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,He=n.get(O),we=R.length>1;if(we)for(let ke=0;ke<R.length;ke++)t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Ge=O.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let ke=0;ke<R.length;ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,He.__webglColorRenderbuffer[ke]);const be=n.get(R[ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,Z,he,0,0,Z,he,me,o.NEAREST),d===!0&&(je.length=0,yt.length=0,je.push(o.COLOR_ATTACHMENT0+ke),O.depthBuffer&&O.resolveDepthBuffer===!1&&(je.push(de),yt.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,yt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let ke=0;ke<R.length;ke++){t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,He.__webglColorRenderbuffer[ke]);const be=n.get(R[ke]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,be,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const R=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Ct(O){return Math.min(r.maxSamples,O.samples)}function ze(O){const R=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function dt(O){const R=u.render.frame;p.get(O)!==R&&(p.set(O,R),O.update())}function St(O,R){const Z=O.colorSpace,he=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==yl&&Z!==no&&(Yt.getTransfer(Z)===tn?(he!==Fr||me!==Ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function Bt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.setTexture2D=se,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=F,this.rebindTextures=ct,this.setupRenderTarget=V,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ze}function FR(o,e){function t(n,r=no){let a;const u=Yt.getTransfer(r);if(n===Ts)return o.UNSIGNED_BYTE;if(n===Lg)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Ng)return o.UNSIGNED_SHORT_5_5_5_1;if(n===zy)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Fy)return o.BYTE;if(n===Oy)return o.SHORT;if(n===Bu)return o.UNSIGNED_SHORT;if(n===Dg)return o.INT;if(n===ua)return o.UNSIGNED_INT;if(n===vs)return o.FLOAT;if(n===Ju)return o.HALF_FLOAT;if(n===By)return o.ALPHA;if(n===Vy)return o.RGB;if(n===Fr)return o.RGBA;if(n===Hu)return o.DEPTH_COMPONENT;if(n===Gu)return o.DEPTH_STENCIL;if(n===Hy)return o.RED;if(n===Ig)return o.RED_INTEGER;if(n===Gy)return o.RG;if(n===Ug)return o.RG_INTEGER;if(n===kg)return o.RGBA_INTEGER;if(n===Yf||n===qf||n===$f||n===Kf)if(u===tn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Yf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$f)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Yf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$f)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wm||n===Am||n===bm||n===Cm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===wm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Am)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rm||n===Pm||n===Dm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Rm||n===Pm)return u===tn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Dm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lm||n===Nm||n===Im||n===Um||n===km||n===Fm||n===Om||n===zm||n===Bm||n===Vm||n===Hm||n===Gm||n===Wm||n===Xm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Lm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Im)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Um)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===km)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Om)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xm)return u===tn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zf||n===jm||n===Ym)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Zf)return u===tn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ym)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wy||n===qm||n===$m||n===Km)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Zf)return a.COMPRESSED_RED_RGTC1_EXT;if(n===qm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$m)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Km)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vu?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class fS extends zi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const OR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zR=`
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

}`;class BR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new fS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mo({vertexShader:OR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xs(new bd(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VR extends Rl{constructor(e,t){super();const n=this;let r=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,_=null,v=null,E=null;const M=new BR,S={},x=t.getContextAttributes();let N=null,D=null;const w=[],I=[],U=new nn;let L=null;const k=new _r;k.viewport=new Cn;const b=new _r;b.viewport=new Cn;const C=[k,b],z=new lw;let X=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=w[te];return pe===void 0&&(pe=new Op,w[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=w[te];return pe===void 0&&(pe=new Op,w[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=w[te];return pe===void 0&&(pe=new Op,w[te]=pe),pe.getHandSpace()};function ne(te){const pe=I.indexOf(te.inputSource);if(pe===-1)return;const le=w[pe];le!==void 0&&(le.update(te.inputSource,te.frame,h||u),le.dispatchEvent({type:te.type,data:te.inputSource}))}function se(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",ee);for(let te=0;te<w.length;te++){const pe=I[te];pe!==null&&(I[te]=null,w[te].disconnect(pe))}X=null,J=null,M.reset();for(const te in S)delete S[te];e.setRenderTarget(N),v=null,_=null,g=null,r=null,D=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(N=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",se),r.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(r,t)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Te=null,Le=null;x.depth&&(Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?Gu:Hu,Te=x.stencil?Vu:ua);const st={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};_=g.createProjectionLayer(st),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new ca(_.textureWidth,_.textureHeight,{format:Fr,type:Ts,depthTexture:new sS(_.textureWidth,_.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),D=new ca(v.framebufferWidth,v.framebufferHeight,{format:Fr,type:Ts,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await r.requestReferenceSpace(c),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ee(te){for(let pe=0;pe<te.removed.length;pe++){const le=te.removed[pe],Te=I.indexOf(le);Te>=0&&(I[Te]=null,w[Te].disconnect(le))}for(let pe=0;pe<te.added.length;pe++){const le=te.added[pe];let Te=I.indexOf(le);if(Te===-1){for(let st=0;st<w.length;st++)if(st>=I.length){I.push(le),Te=st;break}else if(I[st]===null){I[st]=le,Te=st;break}if(Te===-1)break}const Le=w[Te];Le&&Le.connect(le)}}const Q=new fe,F=new fe;function oe(te,pe,le){Q.setFromMatrixPosition(pe.matrixWorld),F.setFromMatrixPosition(le.matrixWorld);const Te=Q.distanceTo(F),Le=pe.projectionMatrix.elements,st=le.projectionMatrix.elements,Tt=Le[14]/(Le[10]-1),ct=Le[14]/(Le[10]+1),V=(Le[9]+1)/Le[5],mt=(Le[9]-1)/Le[5],je=(Le[8]-1)/Le[0],yt=(st[8]+1)/st[0],$=Tt*je,Ct=Tt*yt,ze=Te/(-je+yt),dt=ze*-je;if(pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(dt),te.translateZ(ze),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Le[10]===-1)te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const St=Tt+ze,Bt=ct+ze,O=$-dt,R=Ct+(Te-dt),Z=V*ct/Bt*St,he=mt*ct/Bt*St;te.projectionMatrix.makePerspective(O,R,Z,he,St,Bt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function T(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let pe=te.near,le=te.far;M.texture!==null&&(M.depthNear>0&&(pe=M.depthNear),M.depthFar>0&&(le=M.depthFar)),z.near=b.near=k.near=pe,z.far=b.far=k.far=le,(X!==z.near||J!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),X=z.near,J=z.far),z.layers.mask=te.layers.mask|6,k.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;const Te=te.parent,Le=z.cameras;T(z,Te);for(let st=0;st<Le.length;st++)T(Le[st],Te);Le.length===2?oe(z,k,b):z.projectionMatrix.copy(k.projectionMatrix),K(te,z,Te)};function K(te,pe,le){le===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(le.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Zm*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(_===null&&v===null))return d},this.setFoveation=function(te){d=te,_!==null&&(_.fixedFoveation=te),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(z)},this.getCameraTexture=function(te){return S[te]};let _e=null;function Pe(te,pe){if(p=pe.getViewerPose(h||u),E=pe,p!==null){const le=p.views;v!==null&&(e.setRenderTargetFramebuffer(D,v.framebuffer),e.setRenderTarget(D));let Te=!1;le.length!==z.cameras.length&&(z.cameras.length=0,Te=!0);for(let ct=0;ct<le.length;ct++){const V=le[ct];let mt=null;if(v!==null)mt=v.getViewport(V);else{const yt=g.getViewSubImage(_,V);mt=yt.viewport,ct===0&&(e.setRenderTargetTextures(D,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(D))}let je=C[ct];je===void 0&&(je=new _r,je.layers.enable(ct),je.viewport=new Cn,C[ct]=je),je.matrix.fromArray(V.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(V.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(mt.x,mt.y,mt.width,mt.height),ct===0&&(z.matrix.copy(je.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Te===!0&&z.cameras.push(je)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){const ct=g.getDepthInformation(le[0]);ct&&ct.isValid&&ct.texture&&M.init(ct,r.renderState)}if(Le&&Le.includes("camera-access")&&(e.state.unbindTexture(),g))for(let ct=0;ct<le.length;ct++){const V=le[ct].camera;if(V){let mt=S[V];mt||(mt=new fS,S[V]=mt);const je=g.getCameraImage(V);mt.sourceTexture=je}}}for(let le=0;le<w.length;le++){const Te=I[le],Le=w[le];Te!==null&&Le!==void 0&&Le.update(Te,pe,h||u)}_e&&_e(te,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),E=null}const ye=new oS;ye.setAnimationLoop(Pe),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const Bo=new ws,HR=new Un;function GR(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function n(S,x){x.color.getRGB(S.fogColor.value,eS(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,N,D,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),p(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&v(S,x,w)):x.isMeshMatcapMaterial?(a(S,x),E(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),M(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&c(S,x)):x.isPointsMaterial?d(S,x,N,D):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Oi&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Oi&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const N=e.get(x),D=N.envMap,w=N.envMapRotation;D&&(S.envMap.value=D,Bo.copy(w),Bo.x*=-1,Bo.y*=-1,Bo.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Bo.y*=-1,Bo.z*=-1),S.envMapRotation.value.setFromMatrix4(HR.makeRotationFromEuler(Bo)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function c(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,N,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*N,S.scale.value=D*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function v(S,x,N){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Oi&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const N=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function WR(o,e,t,n){let r={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(N,D){const w=D.program;n.uniformBlockBinding(N,w)}function h(N,D){let w=r[N.id];w===void 0&&(E(N),w=p(N),r[N.id]=w,N.addEventListener("dispose",S));const I=D.program;n.updateUBOMapping(N,I);const U=e.render.frame;a[N.id]!==U&&(_(N),a[N.id]=U)}function p(N){const D=g();N.__bindingPointIndex=D;const w=o.createBuffer(),I=N.__size,U=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,I,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,w),w}function g(){for(let N=0;N<c;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const D=r[N.id],w=N.uniforms,I=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let U=0,L=w.length;U<L;U++){const k=Array.isArray(w[U])?w[U]:[w[U]];for(let b=0,C=k.length;b<C;b++){const z=k[b];if(v(z,U,b,I)===!0){const X=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let ne=0;for(let se=0;se<J.length;se++){const ee=J[se],Q=M(ee);typeof ee=="number"||typeof ee=="boolean"?(z.__data[0]=ee,o.bufferSubData(o.UNIFORM_BUFFER,X+ne,z.__data)):ee.isMatrix3?(z.__data[0]=ee.elements[0],z.__data[1]=ee.elements[1],z.__data[2]=ee.elements[2],z.__data[3]=0,z.__data[4]=ee.elements[3],z.__data[5]=ee.elements[4],z.__data[6]=ee.elements[5],z.__data[7]=0,z.__data[8]=ee.elements[6],z.__data[9]=ee.elements[7],z.__data[10]=ee.elements[8],z.__data[11]=0):(ee.toArray(z.__data,ne),ne+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,X,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(N,D,w,I){const U=N.value,L=D+"_"+w;if(I[L]===void 0)return typeof U=="number"||typeof U=="boolean"?I[L]=U:I[L]=U.clone(),!0;{const k=I[L];if(typeof U=="number"||typeof U=="boolean"){if(k!==U)return I[L]=U,!0}else if(k.equals(U)===!1)return k.copy(U),!0}return!1}function E(N){const D=N.uniforms;let w=0;const I=16;for(let L=0,k=D.length;L<k;L++){const b=Array.isArray(D[L])?D[L]:[D[L]];for(let C=0,z=b.length;C<z;C++){const X=b[C],J=Array.isArray(X.value)?X.value:[X.value];for(let ne=0,se=J.length;ne<se;ne++){const ee=J[ne],Q=M(ee),F=w%I,oe=F%Q.boundary,T=F+oe;w+=oe,T!==0&&I-T<Q.storage&&(w+=I-T),X.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=Q.storage}}}const U=w%I;return U>0&&(w+=I-U),N.__size=w,N.__cache={},this}function M(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function S(N){const D=N.target;D.removeEventListener("dispose",S);const w=u.indexOf(D.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function x(){for(const N in r)o.deleteBuffer(r[N]);u=[],r={},a={}}return{bind:d,update:h,dispose:x}}class XR{constructor(e={}){const{canvas:t=CT(),context:n=null,depth:r=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=u;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const N=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=uo,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=gr;let U=0,L=0,k=null,b=-1,C=null;const z=new Cn,X=new Cn;let J=null;const ne=new $t(0);let se=0,ee=t.width,Q=t.height,F=1,oe=null,T=null;const K=new Cn(0,0,ee,Q),_e=new Cn(0,0,ee,Q);let Pe=!1;const ye=new iS;let te=!1,pe=!1;const le=new Un,Te=new fe,Le=new Cn,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function ct(){return k===null?F:1}let V=n;function mt(P,Y){return t.getContext(P,Y)}try{const P={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pg}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",xe,!1),V===null){const Y="webgl2";if(V=mt(Y,P),V===null)throw mt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let je,yt,$,Ct,ze,dt,St,Bt,O,R,Z,he,me,de,He,we,Ge,ke,be,Ie,at,Ye,Ne,ht;function H(){je=new tC(V),je.init(),Ye=new FR(V,je),yt=new qb(V,je,e,Ye),$=new UR(V,je),yt.reversedDepthBuffer&&_&&$.buffers.depth.setReversed(!0),Ct=new rC(V),ze=new MR,dt=new kR(V,je,$,ze,yt,Ye,Ct),St=new Kb(w),Bt=new eC(w),O=new cw(V),Ne=new jb(V,O),R=new nC(V,O,Ct,Ne),Z=new oC(V,R,O,Ct),be=new sC(V,yt,dt),we=new $b(ze),he=new SR(w,St,Bt,je,yt,Ne,we),me=new GR(w,ze),de=new TR,He=new PR(je),ke=new Xb(w,St,Bt,$,Z,v,d),Ge=new NR(w,Z,yt),ht=new WR(V,Ct,yt,$),Ie=new Yb(V,je,Ct),at=new iC(V,je,Ct),Ct.programs=he.programs,w.capabilities=yt,w.extensions=je,w.properties=ze,w.renderLists=de,w.shadowMap=Ge,w.state=$,w.info=Ct}H();const Ee=new VR(w,V);this.xr=Ee,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=je.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=je.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(ee,Q,!1))},this.getSize=function(P){return P.set(ee,Q)},this.setSize=function(P,Y,ae=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=P,Q=Y,t.width=Math.floor(P*F),t.height=Math.floor(Y*F),ae===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(ee*F,Q*F).floor()},this.setDrawingBufferSize=function(P,Y,ae){ee=P,Q=Y,F=ae,t.width=Math.floor(P*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(z)},this.getViewport=function(P){return P.copy(K)},this.setViewport=function(P,Y,ae,ue){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,Y,ae,ue),$.viewport(z.copy(K).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(_e)},this.setScissor=function(P,Y,ae,ue){P.isVector4?_e.set(P.x,P.y,P.z,P.w):_e.set(P,Y,ae,ue),$.scissor(X.copy(_e).multiplyScalar(F).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(P){$.setScissorTest(Pe=P)},this.setOpaqueSort=function(P){oe=P},this.setTransparentSort=function(P){T=P},this.getClearColor=function(P){return P.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(P=!0,Y=!0,ae=!0){let ue=0;if(P){let G=!1;if(k!==null){const ve=k.texture.format;G=ve===kg||ve===Ug||ve===Ig}if(G){const ve=k.texture.type,De=ve===Ts||ve===ua||ve===Bu||ve===Vu||ve===Lg||ve===Ng,qe=ke.getClearColor(),Ve=ke.getClearAlpha(),ut=qe.r,it=qe.g,Ze=qe.b;De?(E[0]=ut,E[1]=it,E[2]=Ze,E[3]=Ve,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=ut,M[1]=it,M[2]=Ze,M[3]=Ve,V.clearBufferiv(V.COLOR,0,M))}else ue|=V.COLOR_BUFFER_BIT}Y&&(ue|=V.DEPTH_BUFFER_BIT),ae&&(ue|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ke.dispose(),de.dispose(),He.dispose(),ze.dispose(),St.dispose(),Bt.dispose(),Z.dispose(),Ne.dispose(),ht.dispose(),he.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Mt),Ee.removeEventListener("sessionend",Fe),lt.stop()};function Ae(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const P=Ct.autoReset,Y=Ge.enabled,ae=Ge.autoUpdate,ue=Ge.needsUpdate,G=Ge.type;H(),Ct.autoReset=P,Ge.enabled=Y,Ge.autoUpdate=ae,Ge.needsUpdate=ue,Ge.type=G}function xe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ge(P){const Y=P.target;Y.removeEventListener("dispose",ge),We(Y)}function We(P){ft(P),ze.remove(P)}function ft(P){const Y=ze.get(P).programs;Y!==void 0&&(Y.forEach(function(ae){he.releaseProgram(ae)}),P.isShaderMaterial&&he.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,ae,ue,G,ve){Y===null&&(Y=st);const De=G.isMesh&&G.matrixWorld.determinant()<0,qe=kt(P,Y,ae,ue,G);$.setMaterial(ue,De);let Ve=ae.index,ut=1;if(ue.wireframe===!0){if(Ve=R.getWireframeAttribute(ae),Ve===void 0)return;ut=2}const it=ae.drawRange,Ze=ae.attributes.position;let _t=it.start*ut,Dt=(it.start+it.count)*ut;ve!==null&&(_t=Math.max(_t,ve.start*ut),Dt=Math.min(Dt,(ve.start+ve.count)*ut)),Ve!==null?(_t=Math.max(_t,0),Dt=Math.min(Dt,Ve.count)):Ze!=null&&(_t=Math.max(_t,0),Dt=Math.min(Dt,Ze.count));const Wt=Dt-_t;if(Wt<0||Wt===1/0)return;Ne.setup(G,ue,qe,ae,Ve);let sn,Zt=Ie;if(Ve!==null&&(sn=O.get(Ve),Zt=at,Zt.setIndex(sn)),G.isMesh)ue.wireframe===!0?($.setLineWidth(ue.wireframeLinewidth*ct()),Zt.setMode(V.LINES)):Zt.setMode(V.TRIANGLES);else if(G.isLine){let pt=ue.linewidth;pt===void 0&&(pt=1),$.setLineWidth(pt*ct()),G.isLineSegments?Zt.setMode(V.LINES):G.isLineLoop?Zt.setMode(V.LINE_LOOP):Zt.setMode(V.LINE_STRIP)}else G.isPoints?Zt.setMode(V.POINTS):G.isSprite&&Zt.setMode(V.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ul("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Zt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Zt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const pt=G._multiDrawStarts,en=G._multiDrawCounts,Ft=G._multiDrawCount,kn=Ve?O.get(Ve).bytesPerElement:1,wr=ze.get(ue).currentProgram.getUniforms();for(let _i=0;_i<Ft;_i++)wr.setValue(V,"_gl_DrawID",_i),Zt.render(pt[_i]/kn,en[_i])}else if(G.isInstancedMesh)Zt.renderInstances(_t,Wt,G.count);else if(ae.isInstancedBufferGeometry){const pt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,en=Math.min(ae.instanceCount,pt);Zt.renderInstances(_t,Wt,en)}else Zt.render(_t,Wt)};function Vt(P,Y,ae){P.transparent===!0&&P.side===gs&&P.forceSinglePass===!1?(P.side=Oi,P.needsUpdate=!0,_n(P,Y,ae),P.side=po,P.needsUpdate=!0,_n(P,Y,ae),P.side=gs):_n(P,Y,ae)}this.compile=function(P,Y,ae=null){ae===null&&(ae=P),x=He.get(ae),x.init(Y),D.push(x),ae.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),P!==ae&&P.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const ue=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let De=0;De<ve.length;De++){const qe=ve[De];Vt(qe,ae,G),ue.add(qe)}else Vt(ve,ae,G),ue.add(ve)}),x=D.pop(),ue},this.compileAsync=function(P,Y,ae=null){const ue=this.compile(P,Y,ae);return new Promise(G=>{function ve(){if(ue.forEach(function(De){ze.get(De).currentProgram.isReady()&&ue.delete(De)}),ue.size===0){G(P);return}setTimeout(ve,10)}je.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Oe=null;function tt(P){Oe&&Oe(P)}function Mt(){lt.stop()}function Fe(){lt.start()}const lt=new oS;lt.setAnimationLoop(tt),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(P){Oe=P,Ee.setAnimationLoop(P),P===null?lt.stop():lt.start()},Ee.addEventListener("sessionstart",Mt),Ee.addEventListener("sessionend",Fe),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,Y,k),x=He.get(P,D.length),x.init(Y),D.push(x),le.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ye.setFromProjectionMatrix(le,qr,Y.reversedDepth),pe=this.localClippingEnabled,te=we.init(this.clippingPlanes,pe),S=de.get(P,N.length),S.init(),N.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const ve=w.xr.getDepthSensingMesh();ve!==null&&ot(ve,Y,-1/0,w.sortObjects)}ot(P,Y,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(oe,T),Tt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Tt&&ke.addToRenderList(S,P),this.info.render.frame++,te===!0&&we.beginShadows();const ae=x.state.shadowsArray;Ge.render(ae,P,Y),te===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,G=S.transmissive;if(x.setupLights(),Y.isArrayCamera){const ve=Y.cameras;if(G.length>0)for(let De=0,qe=ve.length;De<qe;De++){const Ve=ve[De];un(ue,G,P,Ve)}Tt&&ke.render(P);for(let De=0,qe=ve.length;De<qe;De++){const Ve=ve[De];gt(S,P,Ve,Ve.viewport)}}else G.length>0&&un(ue,G,P,Y),Tt&&ke.render(P),gt(S,P,Y);k!==null&&L===0&&(dt.updateMultisampleRenderTarget(k),dt.updateRenderTargetMipmap(k)),P.isScene===!0&&P.onAfterRender(w,P,Y),Ne.resetDefaultState(),b=-1,C=null,D.pop(),D.length>0?(x=D[D.length-1],te===!0&&we.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function ot(P,Y,ae,ue){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ye.intersectsSprite(P)){ue&&Le.setFromMatrixPosition(P.matrixWorld).applyMatrix4(le);const De=Z.update(P),qe=P.material;qe.visible&&S.push(P,De,qe,ae,Le.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ye.intersectsObject(P))){const De=Z.update(P),qe=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Le.copy(P.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Le.copy(De.boundingSphere.center)),Le.applyMatrix4(P.matrixWorld).applyMatrix4(le)),Array.isArray(qe)){const Ve=De.groups;for(let ut=0,it=Ve.length;ut<it;ut++){const Ze=Ve[ut],_t=qe[Ze.materialIndex];_t&&_t.visible&&S.push(P,De,_t,ae,Le.z,Ze)}}else qe.visible&&S.push(P,De,qe,ae,Le.z,null)}}const ve=P.children;for(let De=0,qe=ve.length;De<qe;De++)ot(ve[De],Y,ae,ue)}function gt(P,Y,ae,ue){const G=P.opaque,ve=P.transmissive,De=P.transparent;x.setupLightsView(ae),te===!0&&we.setGlobalState(w.clippingPlanes,ae),ue&&$.viewport(z.copy(ue)),G.length>0&&wt(G,Y,ae),ve.length>0&&wt(ve,Y,ae),De.length>0&&wt(De,Y,ae),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function un(P,Y,ae,ue){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ue.id]===void 0&&(x.state.transmissionRenderTarget[ue.id]=new ca(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Ju:Ts,minFilter:Qo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const ve=x.state.transmissionRenderTarget[ue.id],De=ue.viewport||z;ve.setSize(De.z*w.transmissionResolutionScale,De.w*w.transmissionResolutionScale);const qe=w.getRenderTarget(),Ve=w.getActiveCubeFace(),ut=w.getActiveMipmapLevel();w.setRenderTarget(ve),w.getClearColor(ne),se=w.getClearAlpha(),se<1&&w.setClearColor(16777215,.5),w.clear(),Tt&&ke.render(ae);const it=w.toneMapping;w.toneMapping=uo;const Ze=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),x.setupLightsView(ue),te===!0&&we.setGlobalState(w.clippingPlanes,ue),wt(P,ae,ue),dt.updateMultisampleRenderTarget(ve),dt.updateRenderTargetMipmap(ve),je.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let Dt=0,Wt=Y.length;Dt<Wt;Dt++){const sn=Y[Dt],Zt=sn.object,pt=sn.geometry,en=sn.material,Ft=sn.group;if(en.side===gs&&Zt.layers.test(ue.layers)){const kn=en.side;en.side=Oi,en.needsUpdate=!0,Qt(Zt,ae,ue,pt,en,Ft),en.side=kn,en.needsUpdate=!0,_t=!0}}_t===!0&&(dt.updateMultisampleRenderTarget(ve),dt.updateRenderTargetMipmap(ve))}w.setRenderTarget(qe,Ve,ut),w.setClearColor(ne,se),Ze!==void 0&&(ue.viewport=Ze),w.toneMapping=it}function wt(P,Y,ae){const ue=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,ve=P.length;G<ve;G++){const De=P[G],qe=De.object,Ve=De.geometry,ut=De.group;let it=De.material;it.allowOverride===!0&&ue!==null&&(it=ue),qe.layers.test(ae.layers)&&Qt(qe,Y,ae,Ve,it,ut)}}function Qt(P,Y,ae,ue,G,ve){P.onBeforeRender(w,Y,ae,ue,G,ve),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(w,Y,ae,ue,P,ve),G.transparent===!0&&G.side===gs&&G.forceSinglePass===!1?(G.side=Oi,G.needsUpdate=!0,w.renderBufferDirect(ae,Y,ue,G,P,ve),G.side=po,G.needsUpdate=!0,w.renderBufferDirect(ae,Y,ue,G,P,ve),G.side=gs):w.renderBufferDirect(ae,Y,ue,G,P,ve),P.onAfterRender(w,Y,ae,ue,G,ve)}function _n(P,Y,ae){Y.isScene!==!0&&(Y=st);const ue=ze.get(P),G=x.state.lights,ve=x.state.shadowsArray,De=G.state.version,qe=he.getParameters(P,G.state,ve,Y,ae),Ve=he.getProgramCacheKey(qe);let ut=ue.programs;ue.environment=P.isMeshStandardMaterial?Y.environment:null,ue.fog=Y.fog,ue.envMap=(P.isMeshStandardMaterial?Bt:St).get(P.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,ut===void 0&&(P.addEventListener("dispose",ge),ut=new Map,ue.programs=ut);let it=ut.get(Ve);if(it!==void 0){if(ue.currentProgram===it&&ue.lightsStateVersion===De)return Kt(P,qe),it}else qe.uniforms=he.getUniforms(P),P.onBeforeCompile(qe,w),it=he.acquireProgram(qe,Ve),ut.set(Ve,it),ue.uniforms=qe.uniforms;const Ze=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=we.uniform),Kt(P,qe),ue.needsLights=Jt(P),ue.lightsStateVersion=De,ue.needsLights&&(Ze.ambientLightColor.value=G.state.ambient,Ze.lightProbe.value=G.state.probe,Ze.directionalLights.value=G.state.directional,Ze.directionalLightShadows.value=G.state.directionalShadow,Ze.spotLights.value=G.state.spot,Ze.spotLightShadows.value=G.state.spotShadow,Ze.rectAreaLights.value=G.state.rectArea,Ze.ltc_1.value=G.state.rectAreaLTC1,Ze.ltc_2.value=G.state.rectAreaLTC2,Ze.pointLights.value=G.state.point,Ze.pointLightShadows.value=G.state.pointShadow,Ze.hemisphereLights.value=G.state.hemi,Ze.directionalShadowMap.value=G.state.directionalShadowMap,Ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ze.spotShadowMap.value=G.state.spotShadowMap,Ze.spotLightMatrix.value=G.state.spotLightMatrix,Ze.spotLightMap.value=G.state.spotLightMap,Ze.pointShadowMap.value=G.state.pointShadowMap,Ze.pointShadowMatrix.value=G.state.pointShadowMatrix),ue.currentProgram=it,ue.uniformsList=null,it}function rn(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Qf.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Kt(P,Y){const ae=ze.get(P);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function kt(P,Y,ae,ue,G){Y.isScene!==!0&&(Y=st),dt.resetTextureUnits();const ve=Y.fog,De=ue.isMeshStandardMaterial?Y.environment:null,qe=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:yl,Ve=(ue.isMeshStandardMaterial?Bt:St).get(ue.envMap||De),ut=ue.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,it=!!ae.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ze=!!ae.morphAttributes.position,_t=!!ae.morphAttributes.normal,Dt=!!ae.morphAttributes.color;let Wt=uo;ue.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Wt=w.toneMapping);const sn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Zt=sn!==void 0?sn.length:0,pt=ze.get(ue),en=x.state.lights;if(te===!0&&(pe===!0||P!==C)){const wn=P===C&&ue.id===b;we.setState(ue,P,wn)}let Ft=!1;ue.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==en.state.version||pt.outputColorSpace!==qe||G.isBatchedMesh&&pt.batching===!1||!G.isBatchedMesh&&pt.batching===!0||G.isBatchedMesh&&pt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&pt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&pt.instancing===!1||!G.isInstancedMesh&&pt.instancing===!0||G.isSkinnedMesh&&pt.skinning===!1||!G.isSkinnedMesh&&pt.skinning===!0||G.isInstancedMesh&&pt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&pt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&pt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&pt.instancingMorph===!1&&G.morphTexture!==null||pt.envMap!==Ve||ue.fog===!0&&pt.fog!==ve||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==we.numPlanes||pt.numIntersection!==we.numIntersection)||pt.vertexAlphas!==ut||pt.vertexTangents!==it||pt.morphTargets!==Ze||pt.morphNormals!==_t||pt.morphColors!==Dt||pt.toneMapping!==Wt||pt.morphTargetsCount!==Zt)&&(Ft=!0):(Ft=!0,pt.__version=ue.version);let kn=pt.currentProgram;Ft===!0&&(kn=_n(ue,Y,G));let wr=!1,_i=!1,So=!1;const on=kn.getUniforms(),vi=pt.uniforms;if($.useProgram(kn.program)&&(wr=!0,_i=!0,So=!0),ue.id!==b&&(b=ue.id,_i=!0),wr||C!==P){$.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),on.setValue(V,"projectionMatrix",P.projectionMatrix),on.setValue(V,"viewMatrix",P.matrixWorldInverse);const ri=on.map.cameraPosition;ri!==void 0&&ri.setValue(V,Te.setFromMatrixPosition(P.matrixWorld)),yt.logarithmicDepthBuffer&&on.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&on.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,_i=!0,So=!0)}if(G.isSkinnedMesh){on.setOptional(V,G,"bindMatrix"),on.setOptional(V,G,"bindMatrixInverse");const wn=G.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),on.setValue(V,"boneTexture",wn.boneTexture,dt))}G.isBatchedMesh&&(on.setOptional(V,G,"batchingTexture"),on.setValue(V,"batchingTexture",G._matricesTexture,dt),on.setOptional(V,G,"batchingIdTexture"),on.setValue(V,"batchingIdTexture",G._indirectTexture,dt),on.setOptional(V,G,"batchingColorTexture"),G._colorsTexture!==null&&on.setValue(V,"batchingColorTexture",G._colorsTexture,dt));const ii=ae.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&be.update(G,ae,kn),(_i||pt.receiveShadow!==G.receiveShadow)&&(pt.receiveShadow=G.receiveShadow,on.setValue(V,"receiveShadow",G.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(vi.envMap.value=Ve,vi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Y.environment!==null&&(vi.envMapIntensity.value=Y.environmentIntensity),_i&&(on.setValue(V,"toneMappingExposure",w.toneMappingExposure),pt.needsLights&&ni(vi,So),ve&&ue.fog===!0&&me.refreshFogUniforms(vi,ve),me.refreshMaterialUniforms(vi,ue,F,Q,x.state.transmissionRenderTarget[P.id]),Qf.upload(V,rn(pt),vi,dt)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Qf.upload(V,rn(pt),vi,dt),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&on.setValue(V,"center",G.center),on.setValue(V,"modelViewMatrix",G.modelViewMatrix),on.setValue(V,"normalMatrix",G.normalMatrix),on.setValue(V,"modelMatrix",G.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const wn=ue.uniformsGroups;for(let ri=0,Mo=wn.length;ri<Mo;ri++){const Ot=wn[ri];ht.update(Ot,kn),ht.bind(Ot,kn)}}return kn}function ni(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Jt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(P,Y,ae){const ue=ze.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),ze.get(P.texture).__webglTexture=Y,ze.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:ae,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Y){const ae=ze.get(P);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Zn=V.createFramebuffer();this.setRenderTarget=function(P,Y=0,ae=0){k=P,U=Y,L=ae;let ue=!0,G=null,ve=!1,De=!1;if(P){const Ve=ze.get(P);if(Ve.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(V.FRAMEBUFFER,null),ue=!1;else if(Ve.__webglFramebuffer===void 0)dt.setupRenderTarget(P);else if(Ve.__hasExternalTextures)dt.rebindTextures(P,ze.get(P.texture).__webglTexture,ze.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ze=P.depthTexture;if(Ve.__boundDepthTexture!==Ze){if(Ze!==null&&ze.has(Ze)&&(P.width!==Ze.image.width||P.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(P)}}const ut=P.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(De=!0);const it=ze.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?G=it[Y][ae]:G=it[Y],ve=!0):P.samples>0&&dt.useMultisampledRTT(P)===!1?G=ze.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?G=it[ae]:G=it,z.copy(P.viewport),X.copy(P.scissor),J=P.scissorTest}else z.copy(K).multiplyScalar(F).floor(),X.copy(_e).multiplyScalar(F).floor(),J=Pe;if(ae!==0&&(G=Zn),$.bindFramebuffer(V.FRAMEBUFFER,G)&&ue&&$.drawBuffers(P,G),$.viewport(z),$.scissor(X),$.setScissorTest(J),ve){const Ve=ze.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ve.__webglTexture,ae)}else if(De){const Ve=Y;for(let ut=0;ut<P.textures.length;ut++){const it=ze.get(P.textures[ut]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ut,it.__webglTexture,ae,Ve)}}else if(P!==null&&ae!==0){const Ve=ze.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ve.__webglTexture,ae)}b=-1},this.readRenderTargetPixels=function(P,Y,ae,ue,G,ve,De,qe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ze.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve){$.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const ut=P.textures[qe],it=ut.format,Ze=ut.type;if(!yt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-ue&&ae>=0&&ae<=P.height-G&&(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qe),V.readPixels(Y,ae,ue,G,Ye.convert(it),Ye.convert(Ze),ve))}finally{const ut=k!==null?ze.get(k).__webglFramebuffer:null;$.bindFramebuffer(V.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(P,Y,ae,ue,G,ve,De,qe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ze.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve)if(Y>=0&&Y<=P.width-ue&&ae>=0&&ae<=P.height-G){$.bindFramebuffer(V.FRAMEBUFFER,Ve);const ut=P.textures[qe],it=ut.format,Ze=ut.type;if(!yt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,_t),V.bufferData(V.PIXEL_PACK_BUFFER,ve.byteLength,V.STREAM_READ),P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qe),V.readPixels(Y,ae,ue,G,Ye.convert(it),Ye.convert(Ze),0);const Dt=k!==null?ze.get(k).__webglFramebuffer:null;$.bindFramebuffer(V.FRAMEBUFFER,Dt);const Wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await RT(V,Wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,_t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ve),V.deleteBuffer(_t),V.deleteSync(Wt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Y=null,ae=0){const ue=Math.pow(2,-ae),G=Math.floor(P.image.width*ue),ve=Math.floor(P.image.height*ue),De=Y!==null?Y.x:0,qe=Y!==null?Y.y:0;dt.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,De,qe,G,ve),$.unbindTexture()};const gi=V.createFramebuffer(),Mn=V.createFramebuffer();this.copyTextureToTexture=function(P,Y,ae=null,ue=null,G=0,ve=null){ve===null&&(G!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=G,G=0):ve=0);let De,qe,Ve,ut,it,Ze,_t,Dt,Wt;const sn=P.isCompressedTexture?P.mipmaps[ve]:P.image;if(ae!==null)De=ae.max.x-ae.min.x,qe=ae.max.y-ae.min.y,Ve=ae.isBox3?ae.max.z-ae.min.z:1,ut=ae.min.x,it=ae.min.y,Ze=ae.isBox3?ae.min.z:0;else{const ii=Math.pow(2,-G);De=Math.floor(sn.width*ii),qe=Math.floor(sn.height*ii),P.isDataArrayTexture?Ve=sn.depth:P.isData3DTexture?Ve=Math.floor(sn.depth*ii):Ve=1,ut=0,it=0,Ze=0}ue!==null?(_t=ue.x,Dt=ue.y,Wt=ue.z):(_t=0,Dt=0,Wt=0);const Zt=Ye.convert(Y.format),pt=Ye.convert(Y.type);let en;Y.isData3DTexture?(dt.setTexture3D(Y,0),en=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(dt.setTexture2DArray(Y,0),en=V.TEXTURE_2D_ARRAY):(dt.setTexture2D(Y,0),en=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ft=V.getParameter(V.UNPACK_ROW_LENGTH),kn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),wr=V.getParameter(V.UNPACK_SKIP_PIXELS),_i=V.getParameter(V.UNPACK_SKIP_ROWS),So=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,sn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,sn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ut),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);const on=P.isDataArrayTexture||P.isData3DTexture,vi=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){const ii=ze.get(P),wn=ze.get(Y),ri=ze.get(ii.__renderTarget),Mo=ze.get(wn.__renderTarget);$.bindFramebuffer(V.READ_FRAMEBUFFER,ri.__webglFramebuffer),$.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mo.__webglFramebuffer);for(let Ot=0;Ot<Ve;Ot++)on&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.get(P).__webglTexture,G,Ze+Ot),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.get(Y).__webglTexture,ve,Wt+Ot)),V.blitFramebuffer(ut,it,De,qe,_t,Dt,De,qe,V.DEPTH_BUFFER_BIT,V.NEAREST);$.bindFramebuffer(V.READ_FRAMEBUFFER,null),$.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||ze.has(P)){const ii=ze.get(P),wn=ze.get(Y);$.bindFramebuffer(V.READ_FRAMEBUFFER,gi),$.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mn);for(let ri=0;ri<Ve;ri++)on?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ii.__webglTexture,G,Ze+ri):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ii.__webglTexture,G),vi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,wn.__webglTexture,ve,Wt+ri):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,wn.__webglTexture,ve),G!==0?V.blitFramebuffer(ut,it,De,qe,_t,Dt,De,qe,V.COLOR_BUFFER_BIT,V.NEAREST):vi?V.copyTexSubImage3D(en,ve,_t,Dt,Wt+ri,ut,it,De,qe):V.copyTexSubImage2D(en,ve,_t,Dt,ut,it,De,qe);$.bindFramebuffer(V.READ_FRAMEBUFFER,null),$.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else vi?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(en,ve,_t,Dt,Wt,De,qe,Ve,Zt,pt,sn.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(en,ve,_t,Dt,Wt,De,qe,Ve,Zt,sn.data):V.texSubImage3D(en,ve,_t,Dt,Wt,De,qe,Ve,Zt,pt,sn):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ve,_t,Dt,De,qe,Zt,pt,sn.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ve,_t,Dt,sn.width,sn.height,Zt,sn.data):V.texSubImage2D(V.TEXTURE_2D,ve,_t,Dt,De,qe,Zt,pt,sn);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ft),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,wr),V.pixelStorei(V.UNPACK_SKIP_ROWS,_i),V.pixelStorei(V.UNPACK_SKIP_IMAGES,So),ve===0&&Y.generateMipmaps&&V.generateMipmap(en),$.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,ae=null,ue=null,G=0){return ul('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Y,ae,ue,G)},this.initRenderTarget=function(P){ze.get(P).__webglFramebuffer===void 0&&dt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?dt.setTextureCube(P,0):P.isData3DTexture?dt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?dt.setTexture2DArray(P,0):dt.setTexture2D(P,0),$.unbindTexture()},this.resetState=function(){U=0,L=0,k=null,$.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yt._getUnpackColorSpace()}}function ps(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function dS(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ml={duration:.5,overwrite:!1,delay:0},zg,ti,gn,yr=1e8,ln=1/yr,eg=Math.PI*2,jR=eg/4,YR=0,hS=Math.sqrt,qR=Math.cos,$R=Math.sin,Kn=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},As=function(e){return typeof e=="number"},Bg=function(e){return typeof e>"u"},Qr=function(e){return typeof e=="object"},Vi=function(e){return e!==!1},Vg=function(){return typeof window<"u"},Lf=function(e){return Tn(e)||Kn(e)},pS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mi=Array.isArray,tg=/(?:-?\.?\d|\.)+/gi,mS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gS=/[+-]=-?[.\d]+/,_S=/[^,'"\[\]\s]+/gi,KR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yn,Gr,ng,Hg,or={},fd={},vS,xS=function(e){return(fd=El(e,or))&&Xi},Gg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wu=function(e,t){return!t&&console.warn(e)},yS=function(e,t){return e&&(or[e]=t)&&fd&&(fd[e]=t)||or},Xu=function(){return 0},ZR={suppressEvents:!0,isStart:!0,kill:!1},Jf={suppressEvents:!0,kill:!1},QR={suppressEvents:!0},Wg={},co=[],ig={},SS,er={},Yp={},Hx=30,ed=[],Xg="",jg=function(e){var t=e[0],n,r;if(Qr(t)||Tn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ed.length;r--&&!ed[r].targetTest(t););n=ed[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new XS(e[r],n)))||e.splice(r,1);return e},na=function(e){return e._gsap||jg(Sr(e))[0]._gsap},MS=function(e,t,n){return(n=e[t])&&Tn(n)?e[t]():Bg(n)&&e.getAttribute&&e.getAttribute(t)||n},Hi=function(e,t){return(e=e.split(",")).forEach(t)||e},bn=function(e){return Math.round(e*1e5)/1e5||0},In=function(e){return Math.round(e*1e7)/1e7||0},fl=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},JR=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},dd=function(){var e=co.length,t=co.slice(0),n,r;for(ig={},co.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Yg=function(e){return!!(e._initted||e._startAt||e.add)},ES=function(e,t,n,r){co.length&&!ti&&dd(),e.render(t,n,!!(ti&&t<0&&Yg(e))),co.length&&!ti&&dd()},TS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(_S).length<2?t:Kn(e)?e.trim():e},wS=function(e){return e},ar=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},e2=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},El=function(e,t){for(var n in t)e[n]=t[n];return e},Gx=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qr(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},hd=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Cu=function(e){var t=e.parent||yn,n=e.keyframes?e2(mi(e.keyframes)):ar;if(Vi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},t2=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},AS=function(e,t,n,r,a){var u=e[r],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=u,t.parent=t._dp=e,t},Rd=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},go=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ia=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},n2=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rg=function(e,t,n,r){return e._startAt&&(ti?e._startAt.revert(Jf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},i2=function o(e){return!e||e._ts&&o(e.parent)},Wx=function(e){return e._repeat?Tl(e._tTime,e=e.duration()+e._rDelay)*e:0},Tl=function(e,t){var n=Math.floor(e=In(e/t));return e&&n===e?n-1:n},pd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pd=function(e){return e._end=In(e._start+(e._tDur/Math.abs(e._ts||e._rts||ln)||0))},Dd=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=In(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pd(e),n._dirty||ia(n,e)),e},bS=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=pd(e.rawTime(),t),(!t._dur||sc(0,t.totalDuration(),n)-t._tTime>ln)&&t.render(n,!0)),ia(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ln}},jr=function(e,t,n,r){return t.parent&&go(t),t._start=In((As(n)?n:n||e!==yn?mr(e,n,t):e._time)+t._delay),t._end=In(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),AS(e,t,"_first","_last",e._sort?"_start":0),sg(t)||(e._recent=t),r||bS(e,t),e._ts<0&&Dd(e,e._tTime),e},CS=function(e,t){return(or.ScrollTrigger||Gg("scrollTrigger",t))&&or.ScrollTrigger.create(t,e)},RS=function(e,t,n,r,a){if($g(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!ti&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&SS!==nr.frame)return co.push(e),e._lazy=[a,r],1},r2=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},sg=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},s2=function(e,t,n,r){var a=e.ratio,u=t<0||!t&&(!e._start&&r2(e)&&!(!e._initted&&sg(e))||(e._ts<0||e._dp._ts<0)&&!sg(e))?0:1,c=e._rDelay,d=0,h,p,g;if(c&&e._repeat&&(d=sc(0,e._tDur,t),p=Tl(d,c),e._yoyo&&p&1&&(u=1-u),p!==Tl(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||ti||r||e._zTime===ln||!t&&e._zTime){if(!e._initted&&RS(e,t,r,n,d))return;for(g=e._zTime,e._zTime=t||(n?ln:0),n||(n=t&&!g),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&rg(e,t,n,!0),e._onUpdate&&!n&&rr(e,"onUpdate"),d&&e._repeat&&!n&&e.parent&&rr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&go(e,1),!n&&!ti&&(rr(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},o2=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},wl=function(e,t,n,r){var a=e._repeat,u=In(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:In(u*(a+1)+e._rDelay*a):u,c>0&&!r&&Dd(e,e._tTime=e._tDur*c),e.parent&&Pd(e),n||ia(e.parent,e),e},Xx=function(e){return e instanceof bi?ia(e):wl(e,e._dur)},a2={_start:0,endTime:Xu,totalDuration:Xu},mr=function o(e,t,n){var r=e.labels,a=e._recent||a2,u=e.duration()>=yr?a.endTime(!1):e._dur,c,d,h;return Kn(t)&&(isNaN(t)||t in r)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=u),r[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(d=d/100*(mi(n)?n[0]:n).totalDuration()),c>1?o(e,t.substr(0,c-1),n)+d:u+d)):t==null?u:+t},Ru=function(e,t,n){var r=As(t[1]),a=(r?2:1)+(e<2?0:1),u=t[a],c,d;if(r&&(u.duration=t[1]),u.parent=n,e){for(c=u,d=n;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=Vi(d.vars.inherit)&&d.parent;u.immediateRender=Vi(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new Nn(t[0],u,t[a+1])},xo=function(e,t){return e||e===0?t(e):t},sc=function(e,t,n){return n<e?e:n>t?t:n},hi=function(e,t){return!Kn(e)||!(t=KR.exec(e))?"":t[1]},l2=function(e,t,n){return xo(n,function(r){return sc(e,t,r)})},og=[].slice,PS=function(e,t){return e&&Qr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qr(e[0]))&&!e.nodeType&&e!==Gr},u2=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return Kn(r)&&!t||PS(r,1)?(a=n).push.apply(a,Sr(r)):n.push(r)})||n},Sr=function(e,t,n){return gn&&!t&&gn.selector?gn.selector(e):Kn(e)&&!n&&(ng||!Al())?og.call((t||Hg).querySelectorAll(e),0):mi(e)?u2(e,n):PS(e)?og.call(e,0):e?[e]:[]},ag=function(e){return e=Sr(e)[0]||Wu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Sr(t,n.querySelectorAll?n:n===e?Wu("Invalid scope")||Hg.createElement("div"):e)}},DS=function(e){return e.sort(function(){return .5-Math.random()})},LS=function(e){if(Tn(e))return e;var t=Qr(e)?e:{each:e},n=ra(t.ease),r=t.from||0,a=parseFloat(t.base)||0,u={},c=r>0&&r<1,d=isNaN(r)||c,h=t.axis,p=r,g=r;return Kn(r)?p=g={center:.5,edges:.5,end:1}[r]||0:!c&&d&&(p=r[0],g=r[1]),function(_,v,E){var M=(E||t).length,S=u[M],x,N,D,w,I,U,L,k,b;if(!S){if(b=t.grid==="auto"?0:(t.grid||[1,yr])[1],!b){for(L=-yr;L<(L=E[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(S=u[M]=[],x=d?Math.min(b,M)*p-.5:r%b,N=b===yr?0:d?M*g/b-.5:r/b|0,L=0,k=yr,U=0;U<M;U++)D=U%b-x,w=N-(U/b|0),S[U]=I=h?Math.abs(h==="y"?w:D):hS(D*D+w*w),I>L&&(L=I),I<k&&(k=I);r==="random"&&DS(S),S.max=L-k,S.min=k,S.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(b>M?M-1:h?h==="y"?M/b:b:Math.max(b,M/b))||0)*(r==="edges"?-1:1),S.b=M<0?a-M:a,S.u=hi(t.amount||t.each)||0,n=n&&M<0?HS(n):n}return M=(S[_]-S.min)/S.max||0,In(S.b+(n?n(M):M)*S.v)+S.u}},lg=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=In(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(As(n)?0:hi(n))}},NS=function(e,t){var n=mi(e),r,a;return!n&&Qr(e)&&(r=n=e.radius||yr,e.values?(e=Sr(e.values),(a=!As(e[0]))&&(r*=r)):e=lg(e.increment)),xo(t,n?Tn(e)?function(u){return a=e(u),Math.abs(a-u)<=r?a:u}:function(u){for(var c=parseFloat(a?u.x:u),d=parseFloat(a?u.y:0),h=yr,p=0,g=e.length,_,v;g--;)a?(_=e[g].x-c,v=e[g].y-d,_=_*_+v*v):_=Math.abs(e[g]-c),_<h&&(h=_,p=g);return p=!r||h<=r?e[p]:u,a||p===u||As(u)?p:p+hi(u)}:lg(e))},IS=function(e,t,n,r){return xo(mi(e)?!t:n===!0?!!(n=0):!r,function(){return mi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},c2=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,u){return u(a)},r)}},f2=function(e,t){return function(n){return e(parseFloat(n))+(t||hi(n))}},d2=function(e,t,n){return kS(e,t,0,1,n)},US=function(e,t,n){return xo(n,function(r){return e[~~t(r)]})},h2=function o(e,t,n){var r=t-e;return mi(e)?US(e,o(0,e.length),t):xo(n,function(a){return(r+(a-e)%r)%r+e})},p2=function o(e,t,n){var r=t-e,a=r*2;return mi(e)?US(e,o(0,e.length-1),t):xo(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>r?a-u:u)})},ju=function(e){for(var t=0,n="",r,a,u,c;~(r=e.indexOf("random(",t));)u=e.indexOf(")",r),c=e.charAt(r+7)==="[",a=e.substr(r+7,u-r-7).match(c?_S:tg),n+=e.substr(t,r-t)+IS(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),t=u+1;return n+e.substr(t,e.length-t)},kS=function(e,t,n,r,a){var u=t-e,c=r-n;return xo(a,function(d){return n+((d-e)/u*c||0)})},m2=function o(e,t,n,r){var a=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!a){var u=Kn(e),c={},d,h,p,g,_;if(n===!0&&(r=1)&&(n=null),u)e={p:e},t={p:t};else if(mi(e)&&!mi(t)){for(p=[],g=e.length,_=g-2,h=1;h<g;h++)p.push(o(e[h-1],e[h]));g--,a=function(E){E*=g;var M=Math.min(_,~~E);return p[M](E-M)},n=t}else r||(e=El(mi(e)?[]:{},e));if(!p){for(d in t)qg.call(c,e,d,"get",t[d]);a=function(E){return Qg(E,c)||(u?e.p:e)}}}return xo(n,a)},jx=function(e,t,n){var r=e.labels,a=yr,u,c,d;for(u in r)c=r[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(d=u,a=c);return d},rr=function(e,t,n){var r=e.vars,a=r[t],u=gn,c=e._ctx,d,h,p;if(a)return d=r[t+"Params"],h=r.callbackScope||e,n&&co.length&&dd(),c&&(gn=c),p=d?a.apply(h,d):a.call(h),gn=u,p},Su=function(e){return go(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ti),e.progress()<1&&rr(e,"onInterrupt"),e},ol,FS=[],OS=function(e){if(e)if(e=!e.name&&e.default||e,Vg()||e.headless){var t=e.name,n=Tn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Xu,render:Qg,add:qg,kill:D2,modifier:P2,rawVars:0},u={targetTest:0,get:0,getSetter:Zg,aliases:{},register:0};if(Al(),e!==r){if(er[t])return;ar(r,ar(hd(e,a),u)),El(r.prototype,El(a,hd(e,u))),er[r.prop=t]=r,e.targetTest&&(ed.push(r),Wg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yS(t,r),e.register&&e.register(Xi,r,Gi)}else FS.push(e)},an=255,Mu={aqua:[0,an,an],lime:[0,an,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,an],navy:[0,0,128],white:[an,an,an],olive:[128,128,0],yellow:[an,an,0],orange:[an,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[an,0,0],pink:[an,192,203],cyan:[0,an,an],transparent:[an,an,an,0]},qp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*an+.5|0},zS=function(e,t,n){var r=e?As(e)?[e>>16,e>>8&an,e&an]:0:Mu.black,a,u,c,d,h,p,g,_,v,E;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Mu[e])r=Mu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&an,r&an,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&an,e&an]}else if(e.substr(0,3)==="hsl"){if(r=E=e.match(tg),!t)d=+r[0]%360/360,h=+r[1]/100,p=+r[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,r.length>3&&(r[3]*=1),r[0]=qp(d+1/3,a,u),r[1]=qp(d,a,u),r[2]=qp(d-1/3,a,u);else if(~e.indexOf("="))return r=e.match(mS),n&&r.length<4&&(r[3]=1),r}else r=e.match(tg)||Mu.transparent;r=r.map(Number)}return t&&!E&&(a=r[0]/an,u=r[1]/an,c=r[2]/an,g=Math.max(a,u,c),_=Math.min(a,u,c),p=(g+_)/2,g===_?d=h=0:(v=g-_,h=p>.5?v/(2-g-_):v/(g+_),d=g===a?(u-c)/v+(u<c?6:0):g===u?(c-a)/v+2:(a-u)/v+4,d*=60),r[0]=~~(d+.5),r[1]=~~(h*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},BS=function(e){var t=[],n=[],r=-1;return e.split(fo).forEach(function(a){var u=a.match(sl)||[];t.push.apply(t,u),n.push(r+=u.length+1)}),t.c=n,t},Yx=function(e,t,n){var r="",a=(e+r).match(fo),u=t?"hsla(":"rgba(",c=0,d,h,p,g;if(!a)return e;if(a=a.map(function(_){return(_=zS(_,t,1))&&u+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(p=BS(e),d=n.c,d.join(r)!==p.c.join(r)))for(h=e.replace(fo,"1").split(sl),g=h.length-1;c<g;c++)r+=h[c]+(~d.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(fo),g=h.length-1;c<g;c++)r+=h[c]+a[c];return r+h[g]},fo=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Mu)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),g2=/hsl[a]?\(/,VS=function(e){var t=e.join(" "),n;if(fo.lastIndex=0,fo.test(t))return n=g2.test(t),e[1]=Yx(e[1],n),e[0]=Yx(e[0],n,BS(e[1])),!0},Yu,nr=(function(){var o=Date.now,e=500,t=33,n=o(),r=n,a=1e3/240,u=a,c=[],d,h,p,g,_,v,E=function M(S){var x=o()-r,N=S===!0,D,w,I,U;if((x>e||x<0)&&(n+=x-t),r+=x,I=r-n,D=I-u,(D>0||N)&&(U=++g.frame,_=I-g.time*1e3,g.time=I=I/1e3,u+=D+(D>=a?4:a-D),w=1),N||(d=h(M)),w)for(v=0;v<c.length;v++)c[v](I,_,U,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return _/(1e3/(S||60))},wake:function(){vS&&(!ng&&Vg()&&(Gr=ng=window,Hg=Gr.document||{},or.gsap=Xi,(Gr.gsapVersions||(Gr.gsapVersions=[])).push(Xi.version),xS(fd||Gr.GreenSockGlobals||!Gr.gsap&&Gr||{}),FS.forEach(OS)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),h=p||function(S){return setTimeout(S,u-g.time*1e3+1|0)},Yu=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),Yu=0,h=Xu},lagSmoothing:function(S,x){e=S||1/0,t=Math.min(x||33,e)},fps:function(S){a=1e3/(S||240),u=g.time*1e3+a},add:function(S,x,N){var D=x?function(w,I,U,L){S(w,I,U,L),g.remove(D)}:S;return g.remove(S),c[N?"unshift":"push"](D),Al(),D},remove:function(S,x){~(x=c.indexOf(S))&&c.splice(x,1)&&v>=x&&v--},_listeners:c},g})(),Al=function(){return!Yu&&nr.wake()},Gt={},_2=/^[\d.\-M][\d.\-,\s]/,v2=/["']/g,x2=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,u=n.length,c,d,h;a<u;a++)d=n[a],c=a!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[r]=isNaN(h)?h.replace(v2,"").trim():+h,r=d.substr(c+1).trim();return t},y2=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},S2=function(e){var t=(e+"").split("("),n=Gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[x2(t[1])]:y2(e).split(",").map(TS)):Gt._CE&&_2.test(e)?Gt._CE("",e):n},HS=function(e){return function(t){return 1-e(1-t)}},GS=function o(e,t){for(var n=e._first,r;n;)n instanceof bi?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},ra=function(e,t){return e&&(Tn(e)?e:Gt[e]||S2(e))||t},ma=function(e,t,n,r){n===void 0&&(n=function(d){return 1-t(1-d)}),r===void 0&&(r=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},u;return Hi(e,function(c){Gt[c]=or[c]=a,Gt[u=c.toLowerCase()]=n;for(var d in a)Gt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Gt[c+"."+d]=a[d]}),a},WS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$p=function o(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/eg*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*$R((p-u)*a)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:WS(c);return a=eg/a,d.config=function(h,p){return o(e,h,p)},d},Kp=function o(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:WS(n);return r.config=function(a){return o(e,a)},r};Hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;ma(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;ma("Elastic",$p("in"),$p("out"),$p());(function(o,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?o*c*c:c<n?o*Math.pow(c-1.5/e,2)+.75:c<r?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};ma("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);ma("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});ma("Circ",function(o){return-(hS(1-o*o)-1)});ma("Sine",function(o){return o===1?1:-qR(o*jR)+1});ma("Back",Kp("in"),Kp("out"),Kp());Gt.SteppedEase=Gt.steps=or.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,u=1-ln;return function(c){return((r*sc(0,u,c)|0)+a)*n}}};Ml.ease=Gt["quad.out"];Hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Xg+=o+","+o+"Params,"});var XS=function(e,t){this.id=YR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:MS,this.set=t?t.getSetter:Zg},qu=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,wl(this,+t.duration,1,1),this.data=t.data,gn&&(this._ctx=gn,gn.data.push(this)),Yu||nr.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,wl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Al(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Dd(this,n),!a._dp||a.parent||bS(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&jr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ln||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ES(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wx(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?Tl(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-ln?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?pd(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ln?0:this._rts,this.totalTime(sc(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),Pd(this),n2(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Al(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ln&&(this._tTime-=ln)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&jr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pd(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=QR);var r=ti;return ti=n,Yg(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ti=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Xx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(mr(this,n),Vi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Vi(r)),this._dur||(this._zTime=-ln),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ln:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ln,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-ln)},e.eventCallback=function(n,r,a){var u=this.vars;return arguments.length>1?(r?(u[n]=r,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete u[n],this):u[n]},e.then=function(n){var r=this;return new Promise(function(a){var u=Tn(n)?n:wS,c=function(){var h=r.then;r.then=null,Tn(u)&&(u=u(r))&&(u.then||u===r)&&(r.then=h),a(u),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){Su(this)},o})();ar(qu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ln,_prom:0,_ps:!1,_rts:1});var bi=(function(o){dS(e,o);function e(n,r){var a;return n===void 0&&(n={}),a=o.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Vi(n.sortChildren),yn&&jr(n.parent||yn,ps(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&CS(ps(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,u){return Ru(0,arguments,this),this},t.from=function(r,a,u){return Ru(1,arguments,this),this},t.fromTo=function(r,a,u,c){return Ru(2,arguments,this),this},t.set=function(r,a,u){return a.duration=0,a.parent=this,Cu(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Nn(r,a,mr(this,u),1),this},t.call=function(r,a,u){return jr(this,Nn.delayedCall(0,r,a),u)},t.staggerTo=function(r,a,u,c,d,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new Nn(r,u,mr(this,d)),this},t.staggerFrom=function(r,a,u,c,d,h,p){return u.runBackwards=1,Cu(u).immediateRender=Vi(u.immediateRender),this.staggerTo(r,a,u,c,d,h,p)},t.staggerFromTo=function(r,a,u,c,d,h,p,g){return c.startAt=u,Cu(c).immediateRender=Vi(c.immediateRender),this.staggerTo(r,a,c,d,h,p,g)},t.render=function(r,a,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=r<=0?0:In(r),g=this._zTime<0!=r<0&&(this._initted||!h),_,v,E,M,S,x,N,D,w,I,U,L;if(this!==yn&&p>d&&r>=0&&(p=d),p!==this._tTime||u||g){if(c!==this._time&&h&&(p+=this._time-c,r+=this._time-c),_=p,w=this._start,D=this._ts,x=!D,g&&(h||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(U=this._yoyo,S=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(S*100+r,a,u);if(_=In(p%S),p===d?(M=this._repeat,_=h):(I=In(p/S),M=~~I,M&&M===I&&(_=h,M--),_>h&&(_=h)),I=Tl(this._tTime,S),!c&&this._tTime&&I!==M&&this._tTime-I*S-this._dur<=0&&(I=M),U&&M&1&&(_=h-_,L=1),M!==I&&!this._lock){var k=U&&I&1,b=k===(U&&M&1);if(M<I&&(k=!k),c=k?0:p%h?h:p,this._lock=1,this.render(c||(L?0:In(M*S)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&rr(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),c&&c!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,b&&(this._lock=2,c=k?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;GS(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(N=o2(this,In(c),In(_)),N&&(p-=_-(_=N._start))),this._tTime=p,this._time=_,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&!a&&!I&&(rr(this,"onStart"),this._tTime!==p))return this;if(_>=c&&r>=0)for(v=this._first;v;){if(E=v._next,(v._act||_>=v._start)&&v._ts&&N!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(_-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(_-v._start)*v._ts,a,u),_!==this._time||!this._ts&&!x){N=0,E&&(p+=this._zTime=-ln);break}}v=E}else{v=this._last;for(var C=r<0?r:_;v;){if(E=v._prev,(v._act||C<=v._end)&&v._ts&&N!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(C-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(C-v._start)*v._ts,a,u||ti&&Yg(v)),_!==this._time||!this._ts&&!x){N=0,E&&(p+=this._zTime=C?-ln:ln);break}}v=E}}if(N&&!a&&(this.pause(),N.render(_>=c?0:-ln)._zTime=_>=c?1:-1,this._ts))return this._start=w,Pd(this),this.render(r,a,u);this._onUpdate&&!a&&rr(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(w===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&go(this,1),!a&&!(r<0&&!c)&&(p||c||!d)&&(rr(this,p===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var u=this;if(As(a)||(a=mr(this,a,r)),!(r instanceof qu)){if(mi(r))return r.forEach(function(c){return u.add(c,a)}),this;if(Kn(r))return this.addLabel(r,a);if(Tn(r))r=Nn.delayedCall(0,r);else return this}return this!==r?jr(this,r,a):this},t.getChildren=function(r,a,u,c){r===void 0&&(r=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-yr);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof Nn?a&&d.push(h):(u&&d.push(h),r&&d.push.apply(d,h.getChildren(!0,a,u)))),h=h._next;return d},t.getById=function(r){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===r)return a[u]},t.remove=function(r){return Kn(r)?this.removeLabel(r):Tn(r)?this.killTweensOf(r):(r.parent===this&&Rd(this,r),r===this._recent&&(this._recent=this._last),ia(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=In(nr.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=mr(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,u){var c=Nn.delayedCall(0,a||Xu,u);return c.data="isPause",this._hasPause=1,jr(this,c,mr(this,r))},t.removePause=function(r){var a=this._first;for(r=mr(this,r);a;)a._start===r&&a.data==="isPause"&&go(a),a=a._next},t.killTweensOf=function(r,a,u){for(var c=this.getTweensOf(r,u),d=c.length;d--;)io!==c[d]&&c[d].kill(r,a);return this},t.getTweensOf=function(r,a){for(var u=[],c=Sr(r),d=this._first,h=As(a),p;d;)d instanceof Nn?JR(d._targets,c)&&(h?(!io||d._initted&&d._ts)&&d.globalTime(0)<=a&&d.globalTime(d.totalDuration())>a:!a||d.isActive())&&u.push(d):(p=d.getTweensOf(c,a)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(r,a){a=a||{};var u=this,c=mr(u,r),d=a,h=d.startAt,p=d.onStart,g=d.onStartParams,_=d.immediateRender,v,E=Nn.to(u,ar({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||ln,onStart:function(){if(u.pause(),!v){var S=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==S&&wl(E,S,0,1).render(E._time,!0,!0),v=1}p&&p.apply(E,g||[])}},a));return _?E.render(0):E},t.tweenFromTo=function(r,a,u){return this.tweenTo(a,ar({startAt:{time:mr(this,r)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),jx(this,mr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),jx(this,mr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ln)},t.shiftChildren=function(r,a,u){u===void 0&&(u=0);for(var c=this._first,d=this.labels,h;c;)c._start>=u&&(c._start+=r,c._end+=r),c=c._next;if(a)for(h in d)d[h]>=u&&(d[h]+=r);return ia(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return o.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ia(this)},t.totalDuration=function(r){var a=0,u=this,c=u._last,d=yr,h,p,g;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(g=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,jr(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(a-=p,(!g&&!u._dp||g&&g.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>a&&c._ts&&(a=c._end),c=h;wl(u,u===yn&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(r){if(yn._ts&&(ES(yn,pd(r,yn)),SS=nr.frame),nr.frame>=Hx){Hx+=sr.autoSleep||120;var a=yn._first;if((!a||!a._ts)&&sr.autoSleep&&nr._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||nr.sleep()}}},e})(qu);ar(bi.prototype,{_lock:0,_hasPause:0,_forcing:0});var M2=function(e,t,n,r,a,u,c){var d=new Gi(this._pt,e,t,0,1,ZS,null,a),h=0,p=0,g,_,v,E,M,S,x,N;for(d.b=n,d.e=r,n+="",r+="",(x=~r.indexOf("random("))&&(r=ju(r)),u&&(N=[n,r],u(N,e,t),n=N[0],r=N[1]),_=n.match(jp)||[];g=jp.exec(r);)E=g[0],M=r.substring(h,g.index),v?v=(v+1)%5:M.substr(-5)==="rgba("&&(v=1),E!==_[p++]&&(S=parseFloat(_[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:S,c:E.charAt(1)==="="?fl(S,E)-S:parseFloat(E)-S,m:v&&v<4?Math.round:0},h=jp.lastIndex);return d.c=h<r.length?r.substring(h,r.length):"",d.fp=c,(gS.test(r)||x)&&(d.e=0),this._pt=d,d},qg=function(e,t,n,r,a,u,c,d,h,p){Tn(r)&&(r=r(a||0,e,u));var g=e[t],_=n!=="get"?n:Tn(g)?h?e[t.indexOf("set")||!Tn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():g,v=Tn(g)?h?b2:$S:Kg,E;if(Kn(r)&&(~r.indexOf("random(")&&(r=ju(r)),r.charAt(1)==="="&&(E=fl(_,r)+(hi(_)||0),(E||E===0)&&(r=E))),!p||_!==r||ug)return!isNaN(_*r)&&r!==""?(E=new Gi(this._pt,e,t,+_||0,r-(_||0),typeof g=="boolean"?R2:KS,0,v),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!g&&!(t in e)&&Gg(t,r),M2.call(this,e,t,_,r,v,d||sr.stringFilter,h))},E2=function(e,t,n,r,a){if(Tn(e)&&(e=Pu(e,a,t,n,r)),!Qr(e)||e.style&&e.nodeType||mi(e)||pS(e))return Kn(e)?Pu(e,a,t,n,r):e;var u={},c;for(c in e)u[c]=Pu(e[c],a,t,n,r);return u},jS=function(e,t,n,r,a,u){var c,d,h,p;if(er[e]&&(c=new er[e]).init(a,c.rawVars?t[e]:E2(t[e],r,a,u,n),n,r,u)!==!1&&(n._pt=d=new Gi(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==ol))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=d;return c},io,ug,$g=function o(e,t,n){var r=e.vars,a=r.ease,u=r.startAt,c=r.immediateRender,d=r.lazy,h=r.onUpdate,p=r.runBackwards,g=r.yoyoEase,_=r.keyframes,v=r.autoRevert,E=e._dur,M=e._startAt,S=e._targets,x=e.parent,N=x&&x.data==="nested"?x.vars.targets:S,D=e._overwrite==="auto"&&!zg,w=e.timeline,I,U,L,k,b,C,z,X,J,ne,se,ee,Q;if(w&&(!_||!a)&&(a="none"),e._ease=ra(a,Ml.ease),e._yEase=g?HS(ra(g===!0?a:g,Ml.ease)):0,g&&e._yoyo&&!e._repeat&&(g=e._yEase,e._yEase=e._ease,e._ease=g),e._from=!w&&!!r.runBackwards,!w||_&&!r.stagger){if(X=S[0]?na(S[0]).harness:0,ee=X&&r[X.prop],I=hd(r,Wg),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!v?M.render(-1,!0):M.revert(p&&E?Jf:ZR),M._lazy=0),u){if(go(e._startAt=Nn.set(S,ar({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&Vi(d),startAt:null,delay:0,onUpdate:h&&function(){return rr(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ti||!c&&!v)&&e._startAt.revert(Jf),c&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),L=ar({overwrite:!1,data:"isFromStart",lazy:c&&!M&&Vi(d),immediateRender:c,stagger:0,parent:x},I),ee&&(L[X.prop]=ee),go(e._startAt=Nn.set(S,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ti?e._startAt.revert(Jf):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,ln,ln);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&Vi(d)||d&&!E,U=0;U<S.length;U++){if(b=S[U],z=b._gsap||jg(S)[U]._gsap,e._ptLookup[U]=ne={},ig[z.id]&&co.length&&dd(),se=N===S?U:N.indexOf(b),X&&(J=new X).init(b,ee||I,e,se,N)!==!1&&(e._pt=k=new Gi(e._pt,b,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(F){ne[F]=k}),J.priority&&(C=1)),!X||ee)for(L in I)er[L]&&(J=jS(L,I,e,se,b,N))?J.priority&&(C=1):ne[L]=k=qg.call(e,b,L,"get",I[L],se,N,0,r.stringFilter);e._op&&e._op[U]&&e.kill(b,e._op[U]),D&&e._pt&&(io=e,yn.killTweensOf(b,ne,e.globalTime(t)),Q=!e.parent,io=0),e._pt&&d&&(ig[z.id]=1)}C&&QS(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Q,_&&t<=0&&w.render(yr,!0,!0)},T2=function(e,t,n,r,a,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,g,_,v;if(!h)for(h=e._ptCache[t]=[],_=e._ptLookup,v=e._targets.length;v--;){if(p=_[v][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return ug=1,e.vars[t]="+=0",$g(e,c),ug=0,d?Wu(t+" not eligible for reset"):1;h.push(p)}for(v=h.length;v--;)g=h[v],p=g._pt||g,p.s=(r||r===0)&&!a?r:p.s+(r||0)+u*p.c,p.c=n-p.s,g.e&&(g.e=bn(n)+hi(g.e)),g.b&&(g.b=p.s+hi(g.b))},w2=function(e,t){var n=e[0]?na(e[0]).harness:0,r=n&&n.aliases,a,u,c,d;if(!r)return t;a=El({},t);for(u in r)if(u in a)for(d=r[u].split(","),c=d.length;c--;)a[d[c]]=a[u];return a},A2=function(e,t,n,r){var a=t.ease||r||"power1.inOut",u,c;if(mi(t))c=n[e]||(n[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},Pu=function(e,t,n,r,a){return Tn(e)?e.call(t,n,r,a):Kn(e)&&~e.indexOf("random(")?ju(e):e},YS=Xg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qS={};Hi(YS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return qS[o]=1});var Nn=(function(o){dS(e,o);function e(n,r,a,u){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=o.call(this,u?r:Cu(r))||this;var d=c.vars,h=d.duration,p=d.delay,g=d.immediateRender,_=d.stagger,v=d.overwrite,E=d.keyframes,M=d.defaults,S=d.scrollTrigger,x=d.yoyoEase,N=r.parent||yn,D=(mi(n)||pS(n)?As(n[0]):"length"in r)?[n]:Sr(n),w,I,U,L,k,b,C,z;if(c._targets=D.length?jg(D):Wu("GSAP target "+n+" not found. https://gsap.com",!sr.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=v,E||_||Lf(h)||Lf(p)){if(r=c.vars,w=c.timeline=new bi({data:"nested",defaults:M||{},targets:N&&N.data==="nested"?N.vars.targets:D}),w.kill(),w.parent=w._dp=ps(c),w._start=0,_||Lf(h)||Lf(p)){if(L=D.length,C=_&&LS(_),Qr(_))for(k in _)~YS.indexOf(k)&&(z||(z={}),z[k]=_[k]);for(I=0;I<L;I++)U=hd(r,qS),U.stagger=0,x&&(U.yoyoEase=x),z&&El(U,z),b=D[I],U.duration=+Pu(h,ps(c),I,b,D),U.delay=(+Pu(p,ps(c),I,b,D)||0)-c._delay,!_&&L===1&&U.delay&&(c._delay=p=U.delay,c._start+=p,U.delay=0),w.to(b,U,C?C(I,b,D):0),w._ease=Gt.none;w.duration()?h=p=0:c.timeline=0}else if(E){Cu(ar(w.vars.defaults,{ease:"none"})),w._ease=ra(E.ease||r.ease||"none");var X=0,J,ne,se;if(mi(E))E.forEach(function(ee){return w.to(D,ee,">")}),w.duration();else{U={};for(k in E)k==="ease"||k==="easeEach"||A2(k,E[k],U,E.easeEach);for(k in U)for(J=U[k].sort(function(ee,Q){return ee.t-Q.t}),X=0,I=0;I<J.length;I++)ne=J[I],se={ease:ne.e,duration:(ne.t-(I?J[I-1].t:0))/100*h},se[k]=ne.v,w.to(D,se,X),X+=se.duration;w.duration()<h&&w.to({},{duration:h-w.duration()})}}h||c.duration(h=w.duration())}else c.timeline=0;return v===!0&&!zg&&(io=ps(c),yn.killTweensOf(D),io=0),jr(N,ps(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(g||!h&&!E&&c._start===In(N._time)&&Vi(g)&&i2(ps(c))&&N.data!=="nested")&&(c._tTime=-ln,c.render(Math.max(0,-p)||0)),S&&CS(ps(c),S),c}var t=e.prototype;return t.render=function(r,a,u){var c=this._time,d=this._tDur,h=this._dur,p=r<0,g=r>d-ln&&!p?d:r<ln?0:r,_,v,E,M,S,x,N,D,w;if(!h)s2(this,r,a,u);else if(g!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=g,D=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+r,a,u);if(_=In(g%M),g===d?(E=this._repeat,_=h):(S=In(g/M),E=~~S,E&&E===S?(_=h,E--):_>h&&(_=h)),x=this._yoyo&&E&1,x&&(w=this._yEase,_=h-_),S=Tl(this._tTime,M),_===c&&!u&&this._initted&&E===S)return this._tTime=g,this;E!==S&&(D&&this._yEase&&GS(D,x),this.vars.repeatRefresh&&!x&&!this._lock&&_!==M&&this._initted&&(this._lock=u=1,this.render(In(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(RS(this,p?r:_,u,a,g))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==S))return this;if(h!==this._dur)return this.render(r,a,u)}if(this._tTime=g,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=N=(w||this._ease)(_/h),this._from&&(this.ratio=N=1-N),!c&&g&&!a&&!S&&(rr(this,"onStart"),this._tTime!==g))return this;for(v=this._pt;v;)v.r(N,v.d),v=v._next;D&&D.render(r<0?r:D._dur*D._ease(_/this._dur),a,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&rg(this,r,a,u),rr(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!a&&this.parent&&rr(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(p&&!this._onUpdate&&rg(this,r,!0,!0),(r||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&go(this,1),!a&&!(p&&!c)&&(g||c||x)&&(rr(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,u,c,d){Yu||nr.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||$g(this,h),p=this._ease(h/this._dur),T2(this,r,a,u,c,p,h,d)?this.resetTo(r,a,u,c,1):(Dd(this,0),this.parent||AS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Su(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ti),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,io&&io.vars.overwrite!==!0)._first||Su(this),this.parent&&u!==this.timeline.totalDuration()&&wl(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=r?Sr(r):c,h=this._ptLookup,p=this._pt,g,_,v,E,M,S,x;if((!a||a==="all")&&t2(c,d))return a==="all"&&(this._pt=0),Su(this);for(g=this._op=this._op||[],a!=="all"&&(Kn(a)&&(M={},Hi(a,function(N){return M[N]=1}),a=M),a=w2(c,a)),x=c.length;x--;)if(~d.indexOf(c[x])){_=h[x],a==="all"?(g[x]=a,E=_,v={}):(v=g[x]=g[x]||{},E=a);for(M in E)S=_&&_[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Rd(this,S,"_pt"),delete _[M]),v!=="all"&&(v[M]=1)}return this._initted&&!this._pt&&p&&Su(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Ru(1,arguments)},e.delayedCall=function(r,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(r,a,u){return Ru(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,u){return yn.killTweensOf(r,a,u)},e})(qu);ar(Nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hi("staggerTo,staggerFrom,staggerFromTo",function(o){Nn[o]=function(){var e=new bi,t=og.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Kg=function(e,t,n){return e[t]=n},$S=function(e,t,n){return e[t](n)},b2=function(e,t,n,r){return e[t](r.fp,n)},C2=function(e,t,n){return e.setAttribute(t,n)},Zg=function(e,t){return Tn(e[t])?$S:Bg(e[t])&&e.setAttribute?C2:Kg},KS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},R2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ZS=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Qg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},P2=function(e,t,n,r){for(var a=this._pt,u;a;)u=a._next,a.p===r&&a.modifier(e,t,n),a=u},D2=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Rd(this,t,"_pt"):t.dep||(n=1),t=r;return!n},L2=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},QS=function(e){for(var t=e._pt,n,r,a,u;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:u)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:u=t,t=n}e._pt=a},Gi=(function(){function o(t,n,r,a,u,c,d,h,p){this.t=n,this.s=a,this.c=u,this.p=r,this.r=c||KS,this.d=d||this,this.set=h||Kg,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=L2,this.m=n,this.mt=a,this.tween=r},o})();Hi(Xg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Wg[o]=1});or.TweenMax=or.TweenLite=Nn;or.TimelineLite=or.TimelineMax=bi;yn=new bi({sortChildren:!1,defaults:Ml,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sr.stringFilter=VS;var sa=[],td={},N2=[],qx=0,I2=0,Zp=function(e){return(td[e]||N2).map(function(t){return t()})},cg=function(){var e=Date.now(),t=[];e-qx>2&&(Zp("matchMediaInit"),sa.forEach(function(n){var r=n.queries,a=n.conditions,u,c,d,h;for(c in r)u=Gr.matchMedia(r[c]).matches,u&&(d=1),u!==a[c]&&(a[c]=u,h=1);h&&(n.revert(),d&&t.push(n))}),Zp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),qx=e,Zp("matchMedia"))},JS=(function(){function o(t,n){this.selector=n&&ag(n),this.data=[],this._r=[],this.isReverted=!1,this.id=I2++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,r,a){Tn(n)&&(a=r,r=n,n=Tn);var u=this,c=function(){var h=gn,p=u.selector,g;return h&&h!==u&&h.data.push(u),a&&(u.selector=ag(a)),gn=u,g=r.apply(u,arguments),Tn(g)&&u._r.push(g),gn=h,u.selector=p,u.isReverted=!1,g};return u.last=c,n===Tn?c(u,function(d){return u.add(null,d)}):n?u[n]=c:c},e.ignore=function(n){var r=gn;gn=null,n(this),gn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof o?n.push.apply(n,r.getTweens()):r instanceof Nn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var c=a.getTweens(),d=a.data.length,h;d--;)h=a.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,g){return g.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),d=a.data.length;d--;)h=a.data[d],h instanceof bi?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Nn)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var u=sa.length;u--;)sa[u].id===this.id&&sa.splice(u,1)},e.revert=function(n){this.kill(n||{})},o})(),U2=(function(){function o(t){this.contexts=[],this.scope=t,gn&&gn.data.push(this)}var e=o.prototype;return e.add=function(n,r,a){Qr(n)||(n={matches:n});var u=new JS(0,a||this.scope),c=u.conditions={},d,h,p;gn&&!u.selector&&(u.selector=gn.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=n;for(h in n)h==="all"?p=1:(d=Gr.matchMedia(n[h]),d&&(sa.indexOf(u)<0&&sa.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(cg):d.addEventListener("change",cg)));return p&&r(u,function(g){return u.add(null,g)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},o})(),md={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return OS(r)})},timeline:function(e){return new bi(e)},getTweensOf:function(e,t){return yn.getTweensOf(e,t)},getProperty:function(e,t,n,r){Kn(e)&&(e=Sr(e)[0]);var a=na(e||{}).get,u=n?wS:TS;return n==="native"&&(n=""),e&&(t?u((er[t]&&er[t].get||a)(e,t,n,r)):function(c,d,h){return u((er[c]&&er[c].get||a)(e,c,d,h))})},quickSetter:function(e,t,n){if(e=Sr(e),e.length>1){var r=e.map(function(p){return Xi.quickSetter(p,t,n)}),a=r.length;return function(p){for(var g=a;g--;)r[g](p)}}e=e[0]||{};var u=er[t],c=na(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var g=new u;ol._pt=0,g.init(e,n?p+n:p,ol,0,[e]),g.render(1,g),ol._pt&&Qg(1,ol)}:c.set(e,d);return u?h:function(p){return h(e,d,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=Xi.to(e,ar((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),u=function(d,h,p){return a.resetTo(t,d,h,p)};return u.tween=a,u},isTweening:function(e){return yn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ra(e.ease,Ml.ease)),Gx(Ml,e||{})},config:function(e){return Gx(sr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,u=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!er[c]&&!or[c]&&Wu(t+" effect requires "+c+" plugin.")}),Yp[t]=function(c,d,h){return n(Sr(c),ar(d||{},a),h)},u&&(bi.prototype[t]=function(c,d,h){return this.add(Yp[t](c,Qr(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){Gt[e]=ra(t)},parseEase:function(e,t){return arguments.length?ra(e,t):Gt},getById:function(e){return yn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new bi(e),r,a;for(n.smoothChildTiming=Vi(e.smoothChildTiming),yn.remove(n),n._dp=0,n._time=n._tTime=yn._time,r=yn._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Nn&&r.vars.onComplete===r._targets[0]))&&jr(n,r,r._start-r._delay),r=a;return jr(yn,n,0),n},context:function(e,t){return e?new JS(e,t):gn},matchMedia:function(e){return new U2(e)},matchMediaRefresh:function(){return sa.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||cg()},addEventListener:function(e,t){var n=td[e]||(td[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=td[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:h2,wrapYoyo:p2,distribute:LS,random:IS,snap:NS,normalize:d2,getUnit:hi,clamp:l2,splitColor:zS,toArray:Sr,selector:ag,mapRange:kS,pipe:c2,unitize:f2,interpolate:m2,shuffle:DS},install:xS,effects:Yp,ticker:nr,updateRoot:bi.updateRoot,plugins:er,globalTimeline:yn,core:{PropTween:Gi,globals:yS,Tween:Nn,Timeline:bi,Animation:qu,getCache:na,_removeLinkedListItem:Rd,reverting:function(){return ti},context:function(e){return e&&gn&&(gn.data.push(e),e._ctx=gn),gn},suppressOverwrites:function(e){return zg=e}}};Hi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return md[o]=Nn[o]});nr.add(bi.updateRoot);ol=md.to({},{duration:0});var k2=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},F2=function(e,t){var n=e._targets,r,a,u;for(r in t)for(a=n.length;a--;)u=e._ptLookup[a][r],u&&(u=u.d)&&(u._pt&&(u=k2(u,r)),u&&u.modifier&&u.modifier(t[r],e,n[a],r))},Qp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,u){u._onInit=function(c){var d,h;if(Kn(a)&&(d={},Hi(a,function(p){return d[p]=1}),a=d),t){d={};for(h in a)d[h]=t(a[h]);a=d}F2(c,a)}}}},Xi=md.registerPlugin({name:"attr",init:function(e,t,n,r,a){var u,c,d;this.tween=n;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],r,a,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)ti?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qp("roundProps",lg),Qp("modifiers"),Qp("snap",NS))||md;Nn.version=bi.version=Xi.version="3.13.0";vS=1;Vg()&&Al();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $x,ro,dl,Jg,Jo,Kx,e_,O2=function(){return typeof window<"u"},bs={},jo=180/Math.PI,hl=Math.PI/180,Qa=Math.atan2,Zx=1e8,t_=/([A-Z])/g,z2=/(left|right|width|margin|padding|x)/i,B2=/[\s,\(]\S/,$r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},V2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},H2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},G2=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},eM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},tM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},W2=function(e,t,n){return e.style[t]=n},X2=function(e,t,n){return e.style.setProperty(t,n)},j2=function(e,t,n){return e._gsap[t]=n},Y2=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},q2=function(e,t,n,r,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},$2=function(e,t,n,r,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},Sn="transform",Wi=Sn+"Origin",K2=function o(e,t){var n=this,r=this.target,a=r.style,u=r._gsap;if(e in bs&&a){if(this.tfm=this.tfm||{},e!=="transform")e=$r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=ms(r,c)}):this.tfm[e]=u.x?u[e]:ms(r,e),e===Wi&&(this.tfm.zOrigin=u.zOrigin);else return $r.transform.split(",").forEach(function(c){return o.call(n,c,t)});if(this.props.indexOf(Sn)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Wi,t,"")),e=Sn}(a||t)&&this.props.push(e,t,a[e])},nM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Z2=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(t_,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=e_(),(!a||!a.isStart)&&!n[Sn]&&(nM(n),r.zOrigin&&n[Wi]&&(n[Wi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},iM=function(e,t){var n={target:e,props:[],revert:Z2,save:K2};return e._gsap||Xi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},rM,dg=function(e,t){var n=ro.createElementNS?ro.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ro.createElement(e);return n&&n.style?n:ro.createElement(e)},Mr=function o(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(t_,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&o(e,bl(t)||t,1)||""},Qx="O,Moz,ms,Ms,Webkit".split(","),bl=function(e,t,n){var r=t||Jo,a=r.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(Qx[u]+e in a););return u<0?null:(u===3?"ms":u>=0?Qx[u]:"")+e},hg=function(){O2()&&window.document&&($x=window,ro=$x.document,dl=ro.documentElement,Jo=dg("div")||{style:{}},dg("div"),Sn=bl(Sn),Wi=Sn+"Origin",Jo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rM=!!bl("perspective"),e_=Xi.core.reverting,Jg=1)},Jx=function(e){var t=e.ownerSVGElement,n=dg("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),dl.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),dl.removeChild(n),a},ey=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},sM=function(e){var t,n;try{t=e.getBBox()}catch{t=Jx(e),n=1}return t&&(t.width||t.height)||n||(t=Jx(e)),t&&!t.width&&!t.x&&!t.y?{x:+ey(e,["x","cx","x1"])||0,y:+ey(e,["y","cy","y1"])||0,width:0,height:0}:t},oM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sM(e))},fa=function(e,t){if(t){var n=e.style,r;t in bs&&t!==Wi&&(t=Sn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(t_,"-$1").toLowerCase())):n.removeAttribute(t)}},so=function(e,t,n,r,a,u){var c=new Gi(e._pt,t,n,0,1,u?tM:eM);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},ty={deg:1,rad:1,turn:1},Q2={grid:1,flex:1},_o=function o(e,t,n,r){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=Jo.style,d=z2.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),g=100,_=r==="px",v=r==="%",E,M,S,x;if(r===u||!a||ty[r]||ty[u])return a;if(u!=="px"&&!_&&(a=o(e,t,n,"px")),x=e.getCTM&&oM(e),(v||u==="%")&&(bs[t]||~t.indexOf("adius")))return E=x?e.getBBox()[d?"width":"height"]:e[p],bn(v?a/E*g:a/100*E);if(c[d?"width":"height"]=g+(_?u:r),M=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===ro||!M.appendChild)&&(M=ro.body),S=M._gsap,S&&v&&S.width&&d&&S.time===nr.time&&!S.uncache)return bn(a/S.width*g);if(v&&(t==="height"||t==="width")){var N=e.style[t];e.style[t]=g+r,E=e[p],N?e.style[t]=N:fa(e,t)}else(v||u==="%")&&!Q2[Mr(M,"display")]&&(c.position=Mr(e,"position")),M===e&&(c.position="static"),M.appendChild(Jo),E=Jo[p],M.removeChild(Jo),c.position="absolute";return d&&v&&(S=na(M),S.time=nr.time,S.width=M[p]),bn(_?E*a/g:E&&a?g/E*a:0)},ms=function(e,t,n,r){var a;return Jg||hg(),t in $r&&t!=="transform"&&(t=$r[t],~t.indexOf(",")&&(t=t.split(",")[0])),bs[t]&&t!=="transform"?(a=Ku(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:_d(Mr(e,Wi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=gd[t]&&gd[t](e,t,n)||Mr(e,t)||MS(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?_o(e,t,a,n)+n:a},J2=function(e,t,n,r){if(!n||n==="none"){var a=bl(t,e,1),u=a&&Mr(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=Mr(e,"borderTopColor"))}var c=new Gi(this._pt,e.style,t,0,1,ZS),d=0,h=0,p,g,_,v,E,M,S,x,N,D,w,I;if(c.b=n,c.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Mr(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=e.style[t],e.style[t]=r,r=Mr(e,t)||r,M?e.style[t]=M:fa(e,t)),p=[n,r],VS(p),n=p[0],r=p[1],_=n.match(sl)||[],I=r.match(sl)||[],I.length){for(;g=sl.exec(r);)S=g[0],N=r.substring(d,g.index),E?E=(E+1)%5:(N.substr(-5)==="rgba("||N.substr(-5)==="hsla(")&&(E=1),S!==(M=_[h++]||"")&&(v=parseFloat(M)||0,w=M.substr((v+"").length),S.charAt(1)==="="&&(S=fl(v,S)+w),x=parseFloat(S),D=S.substr((x+"").length),d=sl.lastIndex-D.length,D||(D=D||sr.units[t]||w,d===r.length&&(r+=D,c.e+=D)),w!==D&&(v=_o(e,t,M,D)||0),c._pt={_next:c._pt,p:N||h===1?N:",",s:v,c:x-v,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<r.length?r.substring(d,r.length):""}else c.r=t==="display"&&r==="none"?tM:eM;return gS.test(r)&&(c.e=0),this._pt=c,c},ny={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eP=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=ny[n]||n,t[1]=ny[r]||r,t.join(" ")},tP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,u=n._gsap,c,d,h;if(a==="all"||a===!0)r.cssText="",d=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],bs[c]&&(d=1,c=c==="transformOrigin"?Wi:Sn),fa(n,c);d&&(fa(n,Sn),u&&(u.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ku(n,1),u.uncache=1,nM(r)))}},gd={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var u=e._pt=new Gi(e._pt,t,n,0,0,tP);return u.u=r,u.pr=-10,u.tween=a,e._props.push(n),1}}},$u=[1,0,0,1,0,0],aM={},lM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},iy=function(e){var t=Mr(e,Sn);return lM(t)?$u:t.substr(7).match(mS).map(bn)},n_=function(e,t){var n=e._gsap||na(e),r=e.style,a=iy(e),u,c,d,h;return n.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,a=[d.a,d.b,d.c,d.d,d.e,d.f],a.join(",")==="1,0,0,1,0,0"?$u:a):(a===$u&&!e.offsetParent&&e!==dl&&!n.svg&&(d=r.display,r.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,dl.appendChild(e)),a=iy(e),d?r.display=d:fa(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):dl.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},pg=function(e,t,n,r,a,u){var c=e._gsap,d=a||n_(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,g=c.xOffset||0,_=c.yOffset||0,v=d[0],E=d[1],M=d[2],S=d[3],x=d[4],N=d[5],D=t.split(" "),w=parseFloat(D[0])||0,I=parseFloat(D[1])||0,U,L,k,b;n?d!==$u&&(L=v*S-E*M)&&(k=w*(S/L)+I*(-M/L)+(M*N-S*x)/L,b=w*(-E/L)+I*(v/L)-(v*N-E*x)/L,w=k,I=b):(U=sM(e),w=U.x+(~D[0].indexOf("%")?w/100*U.width:w),I=U.y+(~(D[1]||D[0]).indexOf("%")?I/100*U.height:I)),r||r!==!1&&c.smooth?(x=w-h,N=I-p,c.xOffset=g+(x*v+N*M)-x,c.yOffset=_+(x*E+N*S)-N):c.xOffset=c.yOffset=0,c.xOrigin=w,c.yOrigin=I,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Wi]="0px 0px",u&&(so(u,c,"xOrigin",h,w),so(u,c,"yOrigin",p,I),so(u,c,"xOffset",g,c.xOffset),so(u,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",w+" "+I)},Ku=function(e,t){var n=e._gsap||new XS(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=Mr(e,Wi)||"0",p,g,_,v,E,M,S,x,N,D,w,I,U,L,k,b,C,z,X,J,ne,se,ee,Q,F,oe,T,K,_e,Pe,ye,te;return p=g=_=M=S=x=N=D=w=0,v=E=1,n.svg=!!(e.getCTM&&oM(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(r[Sn]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Sn]!=="none"?d[Sn]:"")),r.scale=r.rotate=r.translate="none"),L=n_(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),h=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),pg(e,Q||h,!!Q||n.originIsAbsolute,n.smooth!==!1,L)),I=n.xOrigin||0,U=n.yOrigin||0,L!==$u&&(z=L[0],X=L[1],J=L[2],ne=L[3],p=se=L[4],g=ee=L[5],L.length===6?(v=Math.sqrt(z*z+X*X),E=Math.sqrt(ne*ne+J*J),M=z||X?Qa(X,z)*jo:0,N=J||ne?Qa(J,ne)*jo+M:0,N&&(E*=Math.abs(Math.cos(N*hl))),n.svg&&(p-=I-(I*z+U*J),g-=U-(I*X+U*ne))):(te=L[6],Pe=L[7],T=L[8],K=L[9],_e=L[10],ye=L[11],p=L[12],g=L[13],_=L[14],k=Qa(te,_e),S=k*jo,k&&(b=Math.cos(-k),C=Math.sin(-k),Q=se*b+T*C,F=ee*b+K*C,oe=te*b+_e*C,T=se*-C+T*b,K=ee*-C+K*b,_e=te*-C+_e*b,ye=Pe*-C+ye*b,se=Q,ee=F,te=oe),k=Qa(-J,_e),x=k*jo,k&&(b=Math.cos(-k),C=Math.sin(-k),Q=z*b-T*C,F=X*b-K*C,oe=J*b-_e*C,ye=ne*C+ye*b,z=Q,X=F,J=oe),k=Qa(X,z),M=k*jo,k&&(b=Math.cos(k),C=Math.sin(k),Q=z*b+X*C,F=se*b+ee*C,X=X*b-z*C,ee=ee*b-se*C,z=Q,se=F),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),v=bn(Math.sqrt(z*z+X*X+J*J)),E=bn(Math.sqrt(ee*ee+te*te)),k=Qa(se,ee),N=Math.abs(k)>2e-4?k*jo:0,w=ye?1/(ye<0?-ye:ye):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!lM(Mr(e,Sn)),Q&&e.setAttribute("transform",Q))),Math.abs(N)>90&&Math.abs(N)<270&&(a?(v*=-1,N+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,N+=N<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=g-((n.yPercent=g&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=_+u,n.scaleX=bn(v),n.scaleY=bn(E),n.rotation=bn(M)+c,n.rotationX=bn(S)+c,n.rotationY=bn(x)+c,n.skewX=N+c,n.skewY=D+c,n.transformPerspective=w+u,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Wi]=_d(h)),n.xOffset=n.yOffset=0,n.force3D=sr.force3D,n.renderTransform=n.svg?iP:rM?uM:nP,n.uncache=0,n},_d=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jp=function(e,t,n){var r=hi(t);return bn(parseFloat(t)+parseFloat(_o(e,"x",n+"px",r)))+r},nP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,uM(e,t)},Vo="0deg",gu="0px",Ho=") ",uM=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.z,h=n.rotation,p=n.rotationY,g=n.rotationX,_=n.skewX,v=n.skewY,E=n.scaleX,M=n.scaleY,S=n.transformPerspective,x=n.force3D,N=n.target,D=n.zOrigin,w="",I=x==="auto"&&e&&e!==1||x===!0;if(D&&(g!==Vo||p!==Vo)){var U=parseFloat(p)*hl,L=Math.sin(U),k=Math.cos(U),b;U=parseFloat(g)*hl,b=Math.cos(U),u=Jp(N,u,L*b*-D),c=Jp(N,c,-Math.sin(U)*-D),d=Jp(N,d,k*b*-D+D)}S!==gu&&(w+="perspective("+S+Ho),(r||a)&&(w+="translate("+r+"%, "+a+"%) "),(I||u!==gu||c!==gu||d!==gu)&&(w+=d!==gu||I?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Ho),h!==Vo&&(w+="rotate("+h+Ho),p!==Vo&&(w+="rotateY("+p+Ho),g!==Vo&&(w+="rotateX("+g+Ho),(_!==Vo||v!==Vo)&&(w+="skew("+_+", "+v+Ho),(E!==1||M!==1)&&(w+="scale("+E+", "+M+Ho),N.style[Sn]=w||"translate(0, 0)"},iP=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.rotation,h=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,v=n.target,E=n.xOrigin,M=n.yOrigin,S=n.xOffset,x=n.yOffset,N=n.forceCSS,D=parseFloat(u),w=parseFloat(c),I,U,L,k,b;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=hl,h*=hl,I=Math.cos(d)*g,U=Math.sin(d)*g,L=Math.sin(d-h)*-_,k=Math.cos(d-h)*_,h&&(p*=hl,b=Math.tan(h-p),b=Math.sqrt(1+b*b),L*=b,k*=b,p&&(b=Math.tan(p),b=Math.sqrt(1+b*b),I*=b,U*=b)),I=bn(I),U=bn(U),L=bn(L),k=bn(k)):(I=g,k=_,U=L=0),(D&&!~(u+"").indexOf("px")||w&&!~(c+"").indexOf("px"))&&(D=_o(v,"x",u,"px"),w=_o(v,"y",c,"px")),(E||M||S||x)&&(D=bn(D+E-(E*I+M*L)+S),w=bn(w+M-(E*U+M*k)+x)),(r||a)&&(b=v.getBBox(),D=bn(D+r/100*b.width),w=bn(w+a/100*b.height)),b="matrix("+I+","+U+","+L+","+k+","+D+","+w+")",v.setAttribute("transform",b),N&&(v.style[Sn]=b)},rP=function(e,t,n,r,a){var u=360,c=Kn(a),d=parseFloat(a)*(c&&~a.indexOf("rad")?jo:1),h=d-r,p=r+h+"deg",g,_;return c&&(g=a.split("_")[1],g==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),g==="cw"&&h<0?h=(h+u*Zx)%u-~~(h/u)*u:g==="ccw"&&h>0&&(h=(h-u*Zx)%u-~~(h/u)*u)),e._pt=_=new Gi(e._pt,t,n,r,h,V2),_.e=p,_.u="deg",e._props.push(n),_},ry=function(e,t){for(var n in t)e[n]=t[n];return e},sP=function(e,t,n){var r=ry({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,d,h,p,g,_,v,E;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),u[Sn]=t,c=Ku(n,1),fa(n,Sn),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Sn],u[Sn]=t,c=Ku(n,1),u[Sn]=h);for(d in bs)h=r[d],p=c[d],h!==p&&a.indexOf(d)<0&&(v=hi(h),E=hi(p),g=v!==E?_o(n,d,h,E):parseFloat(h),_=parseFloat(p),e._pt=new Gi(e._pt,c,d,g,_-g,fg),e._pt.u=E||0,e._props.push(d));ry(c,r)};Hi("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",r="Bottom",a="Left",u=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?o+c:"border"+c+o});gd[e>1?"border"+o:o]=function(c,d,h,p,g){var _,v;if(arguments.length<4)return _=u.map(function(E){return ms(c,E,h)}),v=_.join(" "),v.split(_[0]).length===5?_[0]:v;_=(p+"").split(" "),v={},u.forEach(function(E,M){return v[E]=_[M]=_[M]||_[(M-1)/2|0]}),c.init(d,v,g)}});var cM={name:"css",register:hg,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var u=this._props,c=e.style,d=n.vars.startAt,h,p,g,_,v,E,M,S,x,N,D,w,I,U,L,k;Jg||hg(),this.styles=this.styles||iM(e),k=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(p=t[M],!(er[M]&&jS(M,t,n,r,e,a)))){if(v=typeof p,E=gd[M],v==="function"&&(p=p.call(n,r,e,a),v=typeof p),v==="string"&&~p.indexOf("random(")&&(p=ju(p)),E)E(this,e,M,p,n)&&(L=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",fo.lastIndex=0,fo.test(h)||(S=hi(h),x=hi(p)),x?S!==x&&(h=_o(e,M,h,x)+x):S&&(p+=S),this.add(c,"setProperty",h,p,r,a,0,0,M),u.push(M),k.push(M,0,c[M]);else if(v!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(n,r,e,a):d[M],Kn(h)&&~h.indexOf("random(")&&(h=ju(h)),hi(h+"")||h==="auto"||(h+=sr.units[M]||hi(ms(e,M))||""),(h+"").charAt(1)==="="&&(h=ms(e,M))):h=ms(e,M),_=parseFloat(h),N=v==="string"&&p.charAt(1)==="="&&p.substr(0,2),N&&(p=p.substr(2)),g=parseFloat(p),M in $r&&(M==="autoAlpha"&&(_===1&&ms(e,"visibility")==="hidden"&&g&&(_=0),k.push("visibility",0,c.visibility),so(this,c,"visibility",_?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=$r[M],~M.indexOf(",")&&(M=M.split(",")[0]))),D=M in bs,D){if(this.styles.save(M),v==="string"&&p.substring(0,6)==="var(--"&&(p=Mr(e,p.substring(4,p.indexOf(")"))),g=parseFloat(p)),w||(I=e._gsap,I.renderTransform&&!t.parseTransform||Ku(e,t.parseTransform),U=t.smoothOrigin!==!1&&I.smooth,w=this._pt=new Gi(this._pt,c,Sn,0,1,I.renderTransform,I,0,-1),w.dep=1),M==="scale")this._pt=new Gi(this._pt,I,"scaleY",I.scaleY,(N?fl(I.scaleY,N+g):g)-I.scaleY||0,fg),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){k.push(Wi,0,c[Wi]),p=eP(p),I.svg?pg(e,p,0,U,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==I.zOrigin&&so(this,I,"zOrigin",I.zOrigin,x),so(this,c,M,_d(h),_d(p)));continue}else if(M==="svgOrigin"){pg(e,p,1,U,0,this);continue}else if(M in aM){rP(this,I,M,_,N?fl(_,N+p):p);continue}else if(M==="smoothOrigin"){so(this,I,"smooth",I.smooth,p);continue}else if(M==="force3D"){I[M]=p;continue}else if(M==="transform"){sP(this,p,e);continue}}else M in c||(M=bl(M)||M);if(D||(g||g===0)&&(_||_===0)&&!B2.test(p)&&M in c)S=(h+"").substr((_+"").length),g||(g=0),x=hi(p)||(M in sr.units?sr.units[M]:S),S!==x&&(_=_o(e,M,h,x)),this._pt=new Gi(this._pt,D?I:c,M,_,(N?fl(_,N+g):g)-_,!D&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?G2:fg),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=H2);else if(M in c)J2.call(this,e,M,h,N?N+p:p);else if(M in e)this.add(e,M,h||e[M],N?N+p:p,r,a);else if(M!=="parseTransform"){Gg(M,p);continue}D||(M in c?k.push(M,0,c[M]):typeof e[M]=="function"?k.push(M,2,e[M]()):k.push(M,1,h||e[M])),u.push(M)}}L&&QS(this)},render:function(e,t){if(t.tween._time||!e_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ms,aliases:$r,getSetter:function(e,t,n){var r=$r[t];return r&&r.indexOf(",")<0&&(t=r),t in bs&&t!==Wi&&(e._gsap.x||ms(e,"x"))?n&&Kx===n?t==="scale"?Y2:j2:(Kx=n||{})&&(t==="scale"?q2:$2):e.style&&!Bg(e.style[t])?W2:~t.indexOf("-")?X2:Zg(e,t)},core:{_removeProperty:fa,_getMatrix:n_}};Xi.utils.checkPrefix=bl;Xi.core.getStyleSaver=iM;(function(o,e,t,n){var r=Hi(o+","+e+","+t,function(a){bs[a]=1});Hi(e,function(a){sr.units[a]="deg",aM[a]=1}),$r[r[13]]=o+","+e,Hi(n,function(a){var u=a.split(":");$r[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){sr.units[o]="px"});Xi.registerPlugin(cM);var pn=Xi.registerPlugin(cM)||Xi;pn.core.Tween;const em=1e3,oP=()=>{const o=new Float32Array(em*3),e=new Float32Array(em*3),t=new $t;for(let a=0;a<em;a++)o[a*3]=(Math.random()-.5)*10,o[a*3+1]=(Math.random()-.5)*10,o[a*3+2]=(Math.random()-.5)*10,t.setHSL(.6+Math.random()*.2,.8,.6),e[a*3]=t.r,e[a*3+1]=t.g,e[a*3+2]=t.b;const n=new Cs;n.setAttribute("position",new Er(o,3)),n.setAttribute("color",new Er(e,3));const r=new rS({size:.15,vertexColors:!0,transparent:!0,opacity:.8,blending:fm});return new rw(n,r)},aP=()=>{const o=At.useRef(null),e=At.useRef({x:0,y:0});return At.useEffect(()=>{const t=o.current;if(!t)return;const n=new ew,r=new _r(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=10;const a=new XR({alpha:!0,antialias:!0});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(a.domElement);const u=oP();n.add(u);const c=g=>{e.current.x=g.clientX/window.innerWidth*2-1,e.current.y=-(g.clientY/window.innerHeight)*2+1};pn.timeline({repeat:-1}).to(u.rotation,{duration:200,x:Math.PI*2,y:Math.PI*4,ease:"none"}).to(u.material,{duration:100,opacity:.4,yoyo:!0,repeat:-1,ease:"power1.inOut"},0);const h=()=>{requestAnimationFrame(h),pn.to(u.rotation,{duration:1,x:-e.current.y*.1,y:-e.current.x*.1,ease:"power2.out"}),a.render(n,r)},p=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("mousemove",c),window.addEventListener("resize",p),h(),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("resize",p),t&&a.domElement&&t.removeChild(a.domElement),n.remove(u),u.geometry.dispose(),u.material.dispose(),a.dispose()}},[]),j.jsx("div",{ref:o,className:"hero-canvas",style:{position:"fixed",inset:0,width:"100vw",height:"100vh",zIndex:-1,pointerEvents:"none"}})};function sy(o,e){if(typeof o=="function")return o(e);o!=null&&(o.current=e)}function lP(...o){return e=>{let t=!1;const n=o.map(r=>{const a=sy(r,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let r=0;r<n.length;r++){const a=n[r];typeof a=="function"?a():sy(o[r],null)}}}}function uP(o){const e=cP(o),t=At.forwardRef((n,r)=>{const{children:a,...u}=n,c=At.Children.toArray(a),d=c.find(dP);if(d){const h=d.props.children,p=c.map(g=>g===d?At.Children.count(h)>1?At.Children.only(null):At.isValidElement(h)?h.props.children:null:g);return j.jsx(e,{...u,ref:r,children:At.isValidElement(h)?At.cloneElement(h,void 0,p):null})}return j.jsx(e,{...u,ref:r,children:a})});return t.displayName=`${o}.Slot`,t}var fM=uP("Slot");function cP(o){const e=At.forwardRef((t,n)=>{const{children:r,...a}=t;if(At.isValidElement(r)){const u=pP(r),c=hP(a,r.props);return r.type!==At.Fragment&&(c.ref=n?lP(n,u):u),At.cloneElement(r,c)}return At.Children.count(r)>1?At.Children.only(null):null});return e.displayName=`${o}.SlotClone`,e}var fP=Symbol("radix.slottable");function dP(o){return At.isValidElement(o)&&typeof o.type=="function"&&"__radixId"in o.type&&o.type.__radixId===fP}function hP(o,e){const t={...e};for(const n in e){const r=o[n],a=e[n];/^on[A-Z]/.test(n)?r&&a?t[n]=(...c)=>{const d=a(...c);return r(...c),d}:r&&(t[n]=r):n==="style"?t[n]={...r,...a}:n==="className"&&(t[n]=[r,a].filter(Boolean).join(" "))}return{...o,...t}}function pP(o){var n,r;let e=(n=Object.getOwnPropertyDescriptor(o.props,"ref"))==null?void 0:n.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?o.ref:(e=(r=Object.getOwnPropertyDescriptor(o,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?o.props.ref:o.props.ref||o.ref)}function dM(o){var e,t,n="";if(typeof o=="string"||typeof o=="number")n+=o;else if(typeof o=="object")if(Array.isArray(o)){var r=o.length;for(e=0;e<r;e++)o[e]&&(t=dM(o[e]))&&(n&&(n+=" "),n+=t)}else for(t in o)o[t]&&(n&&(n+=" "),n+=t);return n}function hM(){for(var o,e,t=0,n="",r=arguments.length;t<r;t++)(o=arguments[t])&&(e=dM(o))&&(n&&(n+=" "),n+=e);return n}const oy=o=>typeof o=="boolean"?`${o}`:o===0?"0":o,ay=hM,pM=(o,e)=>t=>{var n;if((e==null?void 0:e.variants)==null)return ay(o,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:r,defaultVariants:a}=e,u=Object.keys(r).map(h=>{const p=t==null?void 0:t[h],g=a==null?void 0:a[h];if(p===null)return null;const _=oy(p)||oy(g);return r[h][_]}),c=t&&Object.entries(t).reduce((h,p)=>{let[g,_]=p;return _===void 0||(h[g]=_),h},{}),d=e==null||(n=e.compoundVariants)===null||n===void 0?void 0:n.reduce((h,p)=>{let{class:g,className:_,...v}=p;return Object.entries(v).every(E=>{let[M,S]=E;return Array.isArray(S)?S.includes({...a,...c}[M]):{...a,...c}[M]===S})?[...h,g,_]:h},[]);return ay(o,u,d,t==null?void 0:t.class,t==null?void 0:t.className)},i_="-",mP=o=>{const e=_P(o),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=o;return{getClassGroupId:u=>{const c=u.split(i_);return c[0]===""&&c.length!==1&&c.shift(),mM(c,e)||gP(u)},getConflictingClassGroupIds:(u,c)=>{const d=t[u]||[];return c&&n[u]?[...d,...n[u]]:d}}},mM=(o,e)=>{var u;if(o.length===0)return e.classGroupId;const t=o[0],n=e.nextPart.get(t),r=n?mM(o.slice(1),n):void 0;if(r)return r;if(e.validators.length===0)return;const a=o.join(i_);return(u=e.validators.find(({validator:c})=>c(a)))==null?void 0:u.classGroupId},ly=/^\[(.+)\]$/,gP=o=>{if(ly.test(o)){const e=ly.exec(o)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},_P=o=>{const{theme:e,classGroups:t}=o,n={nextPart:new Map,validators:[]};for(const r in t)mg(t[r],n,r,e);return n},mg=(o,e,t,n)=>{o.forEach(r=>{if(typeof r=="string"){const a=r===""?e:uy(e,r);a.classGroupId=t;return}if(typeof r=="function"){if(vP(r)){mg(r(n),e,t,n);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([a,u])=>{mg(u,uy(e,a),t,n)})})},uy=(o,e)=>{let t=o;return e.split(i_).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t},vP=o=>o.isThemeGetter,xP=o=>{if(o<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;const r=(a,u)=>{t.set(a,u),e++,e>o&&(e=0,n=t,t=new Map)};return{get(a){let u=t.get(a);if(u!==void 0)return u;if((u=n.get(a))!==void 0)return r(a,u),u},set(a,u){t.has(a)?t.set(a,u):r(a,u)}}},gg="!",_g=":",yP=_g.length,SP=o=>{const{prefix:e,experimentalParseClassName:t}=o;let n=r=>{const a=[];let u=0,c=0,d=0,h;for(let E=0;E<r.length;E++){let M=r[E];if(u===0&&c===0){if(M===_g){a.push(r.slice(d,E)),d=E+yP;continue}if(M==="/"){h=E;continue}}M==="["?u++:M==="]"?u--:M==="("?c++:M===")"&&c--}const p=a.length===0?r:r.substring(d),g=MP(p),_=g!==p,v=h&&h>d?h-d:void 0;return{modifiers:a,hasImportantModifier:_,baseClassName:g,maybePostfixModifierPosition:v}};if(e){const r=e+_g,a=n;n=u=>u.startsWith(r)?a(u.substring(r.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:u,maybePostfixModifierPosition:void 0}}if(t){const r=n;n=a=>t({className:a,parseClassName:r})}return n},MP=o=>o.endsWith(gg)?o.substring(0,o.length-1):o.startsWith(gg)?o.substring(1):o,EP=o=>{const e=Object.fromEntries(o.orderSensitiveModifiers.map(n=>[n,!0]));return n=>{if(n.length<=1)return n;const r=[];let a=[];return n.forEach(u=>{u[0]==="["||e[u]?(r.push(...a.sort(),u),a=[]):a.push(u)}),r.push(...a.sort()),r}},TP=o=>({cache:xP(o.cacheSize),parseClassName:SP(o),sortModifiers:EP(o),...mP(o)}),wP=/\s+/,AP=(o,e)=>{const{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:r,sortModifiers:a}=e,u=[],c=o.trim().split(wP);let d="";for(let h=c.length-1;h>=0;h-=1){const p=c[h],{isExternal:g,modifiers:_,hasImportantModifier:v,baseClassName:E,maybePostfixModifierPosition:M}=t(p);if(g){d=p+(d.length>0?" "+d:d);continue}let S=!!M,x=n(S?E.substring(0,M):E);if(!x){if(!S){d=p+(d.length>0?" "+d:d);continue}if(x=n(E),!x){d=p+(d.length>0?" "+d:d);continue}S=!1}const N=a(_).join(":"),D=v?N+gg:N,w=D+x;if(u.includes(w))continue;u.push(w);const I=r(x,S);for(let U=0;U<I.length;++U){const L=I[U];u.push(D+L)}d=p+(d.length>0?" "+d:d)}return d};function bP(){let o=0,e,t,n="";for(;o<arguments.length;)(e=arguments[o++])&&(t=gM(e))&&(n&&(n+=" "),n+=t);return n}const gM=o=>{if(typeof o=="string")return o;let e,t="";for(let n=0;n<o.length;n++)o[n]&&(e=gM(o[n]))&&(t&&(t+=" "),t+=e);return t};function CP(o,...e){let t,n,r,a=u;function u(d){const h=e.reduce((p,g)=>g(p),o());return t=TP(h),n=t.cache.get,r=t.cache.set,a=c,c(d)}function c(d){const h=n(d);if(h)return h;const p=AP(d,t);return r(d,p),p}return function(){return a(bP.apply(null,arguments))}}const zn=o=>{const e=t=>t[o]||[];return e.isThemeGetter=!0,e},_M=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,vM=/^\((?:(\w[\w-]*):)?(.+)\)$/i,RP=/^\d+\/\d+$/,PP=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,DP=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,LP=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,NP=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,IP=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ja=o=>RP.test(o),Lt=o=>!!o&&!Number.isNaN(Number(o)),eo=o=>!!o&&Number.isInteger(Number(o)),tm=o=>o.endsWith("%")&&Lt(o.slice(0,-1)),ds=o=>PP.test(o),UP=()=>!0,kP=o=>DP.test(o)&&!LP.test(o),xM=()=>!1,FP=o=>NP.test(o),OP=o=>IP.test(o),zP=o=>!Je(o)&&!et(o),BP=o=>Dl(o,MM,xM),Je=o=>_M.test(o),Go=o=>Dl(o,EM,kP),nm=o=>Dl(o,XP,Lt),cy=o=>Dl(o,yM,xM),VP=o=>Dl(o,SM,OP),Nf=o=>Dl(o,TM,FP),et=o=>vM.test(o),_u=o=>Ll(o,EM),HP=o=>Ll(o,jP),fy=o=>Ll(o,yM),GP=o=>Ll(o,MM),WP=o=>Ll(o,SM),If=o=>Ll(o,TM,!0),Dl=(o,e,t)=>{const n=_M.exec(o);return n?n[1]?e(n[1]):t(n[2]):!1},Ll=(o,e,t=!1)=>{const n=vM.exec(o);return n?n[1]?e(n[1]):t:!1},yM=o=>o==="position"||o==="percentage",SM=o=>o==="image"||o==="url",MM=o=>o==="length"||o==="size"||o==="bg-size",EM=o=>o==="length",XP=o=>o==="number",jP=o=>o==="family-name",TM=o=>o==="shadow",YP=()=>{const o=zn("color"),e=zn("font"),t=zn("text"),n=zn("font-weight"),r=zn("tracking"),a=zn("leading"),u=zn("breakpoint"),c=zn("container"),d=zn("spacing"),h=zn("radius"),p=zn("shadow"),g=zn("inset-shadow"),_=zn("text-shadow"),v=zn("drop-shadow"),E=zn("blur"),M=zn("perspective"),S=zn("aspect"),x=zn("ease"),N=zn("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],I=()=>[...w(),et,Je],U=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto","contain","none"],k=()=>[et,Je,d],b=()=>[Ja,"full","auto",...k()],C=()=>[eo,"none","subgrid",et,Je],z=()=>["auto",{span:["full",eo,et,Je]},eo,et,Je],X=()=>[eo,"auto",et,Je],J=()=>["auto","min","max","fr",et,Je],ne=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],se=()=>["start","end","center","stretch","center-safe","end-safe"],ee=()=>["auto",...k()],Q=()=>[Ja,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...k()],F=()=>[o,et,Je],oe=()=>[...w(),fy,cy,{position:[et,Je]}],T=()=>["no-repeat",{repeat:["","x","y","space","round"]}],K=()=>["auto","cover","contain",GP,BP,{size:[et,Je]}],_e=()=>[tm,_u,Go],Pe=()=>["","none","full",h,et,Je],ye=()=>["",Lt,_u,Go],te=()=>["solid","dashed","dotted","double"],pe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],le=()=>[Lt,tm,fy,cy],Te=()=>["","none",E,et,Je],Le=()=>["none",Lt,et,Je],st=()=>["none",Lt,et,Je],Tt=()=>[Lt,et,Je],ct=()=>[Ja,"full",...k()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ds],breakpoint:[ds],color:[UP],container:[ds],"drop-shadow":[ds],ease:["in","out","in-out"],font:[zP],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ds],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ds],shadow:[ds],spacing:["px",Lt],text:[ds],"text-shadow":[ds],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ja,Je,et,S]}],container:["container"],columns:[{columns:[Lt,Je,et,c]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:I()}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:b()}],"inset-x":[{"inset-x":b()}],"inset-y":[{"inset-y":b()}],start:[{start:b()}],end:[{end:b()}],top:[{top:b()}],right:[{right:b()}],bottom:[{bottom:b()}],left:[{left:b()}],visibility:["visible","invisible","collapse"],z:[{z:[eo,"auto",et,Je]}],basis:[{basis:[Ja,"full","auto",c,...k()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Lt,Ja,"auto","initial","none",Je]}],grow:[{grow:["",Lt,et,Je]}],shrink:[{shrink:["",Lt,et,Je]}],order:[{order:[eo,"first","last","none",et,Je]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:z()}],"col-start":[{"col-start":X()}],"col-end":[{"col-end":X()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:z()}],"row-start":[{"row-start":X()}],"row-end":[{"row-end":X()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":J()}],"auto-rows":[{"auto-rows":J()}],gap:[{gap:k()}],"gap-x":[{"gap-x":k()}],"gap-y":[{"gap-y":k()}],"justify-content":[{justify:[...ne(),"normal"]}],"justify-items":[{"justify-items":[...se(),"normal"]}],"justify-self":[{"justify-self":["auto",...se()]}],"align-content":[{content:["normal",...ne()]}],"align-items":[{items:[...se(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...se(),{baseline:["","last"]}]}],"place-content":[{"place-content":ne()}],"place-items":[{"place-items":[...se(),"baseline"]}],"place-self":[{"place-self":["auto",...se()]}],p:[{p:k()}],px:[{px:k()}],py:[{py:k()}],ps:[{ps:k()}],pe:[{pe:k()}],pt:[{pt:k()}],pr:[{pr:k()}],pb:[{pb:k()}],pl:[{pl:k()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":k()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":k()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[c,"screen",...Q()]}],"min-w":[{"min-w":[c,"screen","none",...Q()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[u]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",t,_u,Go]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,et,nm]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",tm,Je]}],"font-family":[{font:[HP,Je,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,et,Je]}],"line-clamp":[{"line-clamp":[Lt,"none",et,nm]}],leading:[{leading:[a,...k()]}],"list-image":[{"list-image":["none",et,Je]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",et,Je]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...te(),"wavy"]}],"text-decoration-thickness":[{decoration:[Lt,"from-font","auto",et,Go]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[Lt,"auto",et,Je]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",et,Je]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",et,Je]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:oe()}],"bg-repeat":[{bg:T()}],"bg-size":[{bg:K()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},eo,et,Je],radial:["",et,Je],conic:[eo,et,Je]},WP,VP]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:_e()}],"gradient-via-pos":[{via:_e()}],"gradient-to-pos":[{to:_e()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:Pe()}],"rounded-s":[{"rounded-s":Pe()}],"rounded-e":[{"rounded-e":Pe()}],"rounded-t":[{"rounded-t":Pe()}],"rounded-r":[{"rounded-r":Pe()}],"rounded-b":[{"rounded-b":Pe()}],"rounded-l":[{"rounded-l":Pe()}],"rounded-ss":[{"rounded-ss":Pe()}],"rounded-se":[{"rounded-se":Pe()}],"rounded-ee":[{"rounded-ee":Pe()}],"rounded-es":[{"rounded-es":Pe()}],"rounded-tl":[{"rounded-tl":Pe()}],"rounded-tr":[{"rounded-tr":Pe()}],"rounded-br":[{"rounded-br":Pe()}],"rounded-bl":[{"rounded-bl":Pe()}],"border-w":[{border:ye()}],"border-w-x":[{"border-x":ye()}],"border-w-y":[{"border-y":ye()}],"border-w-s":[{"border-s":ye()}],"border-w-e":[{"border-e":ye()}],"border-w-t":[{"border-t":ye()}],"border-w-r":[{"border-r":ye()}],"border-w-b":[{"border-b":ye()}],"border-w-l":[{"border-l":ye()}],"divide-x":[{"divide-x":ye()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ye()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...te(),"hidden","none"]}],"divide-style":[{divide:[...te(),"hidden","none"]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...te(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Lt,et,Je]}],"outline-w":[{outline:["",Lt,_u,Go]}],"outline-color":[{outline:F()}],shadow:[{shadow:["","none",p,If,Nf]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":["none",g,If,Nf]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:ye()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[Lt,Go]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":ye()}],"inset-ring-color":[{"inset-ring":F()}],"text-shadow":[{"text-shadow":["none",_,If,Nf]}],"text-shadow-color":[{"text-shadow":F()}],opacity:[{opacity:[Lt,et,Je]}],"mix-blend":[{"mix-blend":[...pe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":pe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Lt]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":F()}],"mask-image-linear-to-color":[{"mask-linear-to":F()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":F()}],"mask-image-t-to-color":[{"mask-t-to":F()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":F()}],"mask-image-r-to-color":[{"mask-r-to":F()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":F()}],"mask-image-b-to-color":[{"mask-b-to":F()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":F()}],"mask-image-l-to-color":[{"mask-l-to":F()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":F()}],"mask-image-x-to-color":[{"mask-x-to":F()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":F()}],"mask-image-y-to-color":[{"mask-y-to":F()}],"mask-image-radial":[{"mask-radial":[et,Je]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":F()}],"mask-image-radial-to-color":[{"mask-radial-to":F()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":w()}],"mask-image-conic-pos":[{"mask-conic":[Lt]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":F()}],"mask-image-conic-to-color":[{"mask-conic-to":F()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:oe()}],"mask-repeat":[{mask:T()}],"mask-size":[{mask:K()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",et,Je]}],filter:[{filter:["","none",et,Je]}],blur:[{blur:Te()}],brightness:[{brightness:[Lt,et,Je]}],contrast:[{contrast:[Lt,et,Je]}],"drop-shadow":[{"drop-shadow":["","none",v,If,Nf]}],"drop-shadow-color":[{"drop-shadow":F()}],grayscale:[{grayscale:["",Lt,et,Je]}],"hue-rotate":[{"hue-rotate":[Lt,et,Je]}],invert:[{invert:["",Lt,et,Je]}],saturate:[{saturate:[Lt,et,Je]}],sepia:[{sepia:["",Lt,et,Je]}],"backdrop-filter":[{"backdrop-filter":["","none",et,Je]}],"backdrop-blur":[{"backdrop-blur":Te()}],"backdrop-brightness":[{"backdrop-brightness":[Lt,et,Je]}],"backdrop-contrast":[{"backdrop-contrast":[Lt,et,Je]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Lt,et,Je]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Lt,et,Je]}],"backdrop-invert":[{"backdrop-invert":["",Lt,et,Je]}],"backdrop-opacity":[{"backdrop-opacity":[Lt,et,Je]}],"backdrop-saturate":[{"backdrop-saturate":[Lt,et,Je]}],"backdrop-sepia":[{"backdrop-sepia":["",Lt,et,Je]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":k()}],"border-spacing-x":[{"border-spacing-x":k()}],"border-spacing-y":[{"border-spacing-y":k()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",et,Je]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Lt,"initial",et,Je]}],ease:[{ease:["linear","initial",x,et,Je]}],delay:[{delay:[Lt,et,Je]}],animate:[{animate:["none",N,et,Je]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[M,et,Je]}],"perspective-origin":[{"perspective-origin":I()}],rotate:[{rotate:Le()}],"rotate-x":[{"rotate-x":Le()}],"rotate-y":[{"rotate-y":Le()}],"rotate-z":[{"rotate-z":Le()}],scale:[{scale:st()}],"scale-x":[{"scale-x":st()}],"scale-y":[{"scale-y":st()}],"scale-z":[{"scale-z":st()}],"scale-3d":["scale-3d"],skew:[{skew:Tt()}],"skew-x":[{"skew-x":Tt()}],"skew-y":[{"skew-y":Tt()}],transform:[{transform:[et,Je,"","none","gpu","cpu"]}],"transform-origin":[{origin:I()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ct()}],"translate-x":[{"translate-x":ct()}],"translate-y":[{"translate-y":ct()}],"translate-z":[{"translate-z":ct()}],"translate-none":["translate-none"],accent:[{accent:F()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",et,Je]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",et,Je]}],fill:[{fill:["none",...F()]}],"stroke-w":[{stroke:[Lt,_u,Go,nm]}],stroke:[{stroke:["none",...F()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},qP=CP(YP);function yo(...o){return qP(hM(o))}const $P=pM("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function ys({className:o,variant:e,size:t,asChild:n=!1,...r}){const a=n?fM:"button";return j.jsx(a,{"data-slot":"button",className:yo($P({variant:e,size:t,className:o})),...r})}/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZP=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),dy=o=>{const e=ZP(o);return e.charAt(0).toUpperCase()+e.slice(1)},wM=(...o)=>o.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim(),QP=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=At.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:r="",children:a,iconNode:u,...c},d)=>At.createElement("svg",{ref:d,...JP,width:e,height:e,stroke:o,strokeWidth:n?Number(t)*24/Number(e):t,className:wM("lucide",r),...!a&&!QP(c)&&{"aria-hidden":"true"},...c},[...u.map(([h,p])=>At.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=(o,e)=>{const t=At.forwardRef(({className:n,...r},a)=>At.createElement(eD,{ref:a,iconNode:e,className:wM(`lucide-${KP(dy(o))}`,`lucide-${o}`,n),...r}));return t.displayName=dy(o),t};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],hy=Ri("arrow-down",tD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],iD=Ri("arrow-up",nD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],py=Ri("download",rD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],my=Ri("external-link",sD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Ld=Ri("github",oD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],lD=Ri("heart",aD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],r_=Ri("linkedin",uD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],s_=Ri("mail",cD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],dD=Ri("map-pin",fD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],pD=Ri("menu",hD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],gD=Ri("phone",mD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],vD=Ri("play",_D);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],yD=Ri("send",xD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],MD=Ri("twitter",SD);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],TD=Ri("x",ED),wD=()=>{const o=At.useRef(null),[e,t]=At.useState(!1),[n,r]=At.useState(!1),a=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];At.useEffect(()=>{pn.fromTo(o.current,{y:-100,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out",delay:.2});const d=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const u=d=>{const h=document.querySelector(d);h&&h.scrollIntoView({behavior:"smooth"}),t(!1)},c=()=>{t(!e)};return j.jsx("nav",{ref:o,className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n?"glass-effect backdrop-blur-md":"bg-transparent"}`,children:j.jsxs("div",{className:"container mx-auto px-4",children:[j.jsxs("div",{className:"flex items-center justify-between h-16",children:[j.jsx("div",{className:"text-2xl font-bold gradient-text",children:"AsadHaye.com"}),j.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[a.map(d=>j.jsxs("button",{onClick:()=>u(d.href),className:"text-foreground hover:text-primary transition-colors duration-300 relative group",children:[d.label,j.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"})]},d.label)),j.jsxs(ys,{variant:"outline",size:"sm",className:"hover:scale-105 transition-transform",children:[j.jsx(py,{className:"h-4 w-4 mr-2"}),"Resume"]})]}),j.jsx("button",{onClick:c,className:"md:hidden p-2 rounded-lg hover:bg-muted transition-colors",children:e?j.jsx(TD,{className:"h-6 w-6"}):j.jsx(pD,{className:"h-6 w-6"})})]}),e&&j.jsx("div",{className:"md:hidden absolute top-full left-0 right-0 glass-effect backdrop-blur-md border-t",children:j.jsx("div",{className:"container mx-auto px-4 py-4",children:j.jsxs("div",{className:"flex flex-col space-y-4",children:[a.map(d=>j.jsx("button",{onClick:()=>u(d.href),className:"text-left text-foreground hover:text-primary transition-colors duration-300 py-2",children:d.label},d.label)),j.jsxs(ys,{variant:"outline",size:"sm",className:"self-start mt-4",children:[j.jsx(py,{className:"h-4 w-4 mr-2"}),"Resume"]})]})})})]})})};function AD(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function bD(o,e,t){return e&&AD(o.prototype,e),o}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ei,nd,ir,oo,ao,pl,AM,Yo,Du,bM,Ss,Ur,CM,RM=function(){return ei||typeof window<"u"&&(ei=window.gsap)&&ei.registerPlugin&&ei},PM=1,al=[],Ut=[],Zr=[],Lu=Date.now,vg=function(e,t){return t},CD=function(){var e=Du.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Ut),r.push.apply(r,Zr),Ut=n,Zr=r,vg=function(u,c){return t[u](c)}},ho=function(e,t){return~Zr.indexOf(e)&&Zr[Zr.indexOf(e)+1][t]},Nu=function(e){return!!~bM.indexOf(e)},Mi=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},Si=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Uf="scrollLeft",kf="scrollTop",xg=function(){return Ss&&Ss.isPressed||Ut.cache++},vd=function(e,t){var n=function r(a){if(a||a===0){PM&&(ir.history.scrollRestoration="manual");var u=Ss&&Ss.isPressed;a=r.v=Math.round(a)||(Ss&&Ss.iOS?1:0),e(a),r.cacheID=Ut.cache,u&&vg("ss",a)}else(t||Ut.cache!==r.cacheID||vg("ref"))&&(r.cacheID=Ut.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Ci={s:Uf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:vd(function(o){return arguments.length?ir.scrollTo(o,Vn.sc()):ir.pageXOffset||oo[Uf]||ao[Uf]||pl[Uf]||0})},Vn={s:kf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ci,sc:vd(function(o){return arguments.length?ir.scrollTo(Ci.sc(),o):ir.pageYOffset||oo[kf]||ao[kf]||pl[kf]||0})},Fi=function(e,t){return(t&&t._ctx&&t._ctx.selector||ei.utils.toArray)(e)[0]||(typeof e=="string"&&ei.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},RD=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},vo=function(e,t){var n=t.s,r=t.sc;Nu(e)&&(e=oo.scrollingElement||ao);var a=Ut.indexOf(e),u=r===Vn.sc?1:2;!~a&&(a=Ut.push(e)-1),Ut[a+u]||Mi(e,"scroll",xg);var c=Ut[a+u],d=c||(Ut[a+u]=vd(ho(e,n),!0)||(Nu(e)?r:vd(function(h){return arguments.length?e[n]=h:e[n]})));return d.target=e,c||(d.smooth=ei.getProperty(e,"scrollBehavior")==="smooth"),d},yg=function(e,t,n){var r=e,a=e,u=Lu(),c=u,d=t||50,h=Math.max(500,d*3),p=function(E,M){var S=Lu();M||S-u>d?(a=r,r=E,c=u,u=S):n?r+=E:r=a+(E-a)/(S-c)*(u-c)},g=function(){a=r=n?0:r,c=u=0},_=function(E){var M=c,S=a,x=Lu();return(E||E===0)&&E!==r&&p(E),u===c||x-c>h?0:(r+(n?S:-S))/((n?x:u)-M)*1e3};return{update:p,reset:g,getVelocity:_}},vu=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},gy=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},DM=function(){Du=ei.core.globals().ScrollTrigger,Du&&Du.core&&CD()},LM=function(e){return ei=e||RM(),!nd&&ei&&typeof document<"u"&&document.body&&(ir=window,oo=document,ao=oo.documentElement,pl=oo.body,bM=[ir,oo,ao,pl],ei.utils.clamp,CM=ei.core.context||function(){},Yo="onpointerenter"in pl?"pointer":"mouse",AM=Rn.isTouch=ir.matchMedia&&ir.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ir||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ur=Rn.eventTypes=("ontouchstart"in ao?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ao?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return PM=0},500),DM(),nd=1),nd};Ci.op=Vn;Ut.cache=0;var Rn=(function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){nd||LM(ei)||console.warn("Please gsap.registerPlugin(Observer)"),Du||DM();var r=n.tolerance,a=n.dragMinimum,u=n.type,c=n.target,d=n.lineHeight,h=n.debounce,p=n.preventDefault,g=n.onStop,_=n.onStopDelay,v=n.ignore,E=n.wheelSpeed,M=n.event,S=n.onDragStart,x=n.onDragEnd,N=n.onDrag,D=n.onPress,w=n.onRelease,I=n.onRight,U=n.onLeft,L=n.onUp,k=n.onDown,b=n.onChangeX,C=n.onChangeY,z=n.onChange,X=n.onToggleX,J=n.onToggleY,ne=n.onHover,se=n.onHoverEnd,ee=n.onMove,Q=n.ignoreCheck,F=n.isNormalizer,oe=n.onGestureStart,T=n.onGestureEnd,K=n.onWheel,_e=n.onEnable,Pe=n.onDisable,ye=n.onClick,te=n.scrollSpeed,pe=n.capture,le=n.allowClicks,Te=n.lockAxis,Le=n.onLockAxis;this.target=c=Fi(c)||ao,this.vars=n,v&&(v=ei.utils.toArray(v)),r=r||1e-9,a=a||0,E=E||1,te=te||1,u=u||"wheel,touch,pointer",h=h!==!1,d||(d=parseFloat(ir.getComputedStyle(pl).lineHeight)||22);var st,Tt,ct,V,mt,je,yt,$=this,Ct=0,ze=0,dt=n.passive||!p&&n.passive!==!1,St=vo(c,Ci),Bt=vo(c,Vn),O=St(),R=Bt(),Z=~u.indexOf("touch")&&!~u.indexOf("pointer")&&Ur[0]==="pointerdown",he=Nu(c),me=c.ownerDocument||oo,de=[0,0,0],He=[0,0,0],we=0,Ge=function(){return we=Lu()},ke=function(tt,Mt){return($.event=tt)&&v&&RD(tt.target,v)||Mt&&Z&&tt.pointerType!=="touch"||Q&&Q(tt,Mt)},be=function(){$._vx.reset(),$._vy.reset(),Tt.pause(),g&&g($)},Ie=function(){var tt=$.deltaX=gy(de),Mt=$.deltaY=gy(He),Fe=Math.abs(tt)>=r,lt=Math.abs(Mt)>=r;z&&(Fe||lt)&&z($,tt,Mt,de,He),Fe&&(I&&$.deltaX>0&&I($),U&&$.deltaX<0&&U($),b&&b($),X&&$.deltaX<0!=Ct<0&&X($),Ct=$.deltaX,de[0]=de[1]=de[2]=0),lt&&(k&&$.deltaY>0&&k($),L&&$.deltaY<0&&L($),C&&C($),J&&$.deltaY<0!=ze<0&&J($),ze=$.deltaY,He[0]=He[1]=He[2]=0),(V||ct)&&(ee&&ee($),ct&&(S&&ct===1&&S($),N&&N($),ct=0),V=!1),je&&!(je=!1)&&Le&&Le($),mt&&(K($),mt=!1),st=0},at=function(tt,Mt,Fe){de[Fe]+=tt,He[Fe]+=Mt,$._vx.update(tt),$._vy.update(Mt),h?st||(st=requestAnimationFrame(Ie)):Ie()},Ye=function(tt,Mt){Te&&!yt&&($.axis=yt=Math.abs(tt)>Math.abs(Mt)?"x":"y",je=!0),yt!=="y"&&(de[2]+=tt,$._vx.update(tt,!0)),yt!=="x"&&(He[2]+=Mt,$._vy.update(Mt,!0)),h?st||(st=requestAnimationFrame(Ie)):Ie()},Ne=function(tt){if(!ke(tt,1)){tt=vu(tt,p);var Mt=tt.clientX,Fe=tt.clientY,lt=Mt-$.x,ot=Fe-$.y,gt=$.isDragging;$.x=Mt,$.y=Fe,(gt||(lt||ot)&&(Math.abs($.startX-Mt)>=a||Math.abs($.startY-Fe)>=a))&&(ct=gt?2:1,gt||($.isDragging=!0),Ye(lt,ot))}},ht=$.onPress=function(Oe){ke(Oe,1)||Oe&&Oe.button||($.axis=yt=null,Tt.pause(),$.isPressed=!0,Oe=vu(Oe),Ct=ze=0,$.startX=$.x=Oe.clientX,$.startY=$.y=Oe.clientY,$._vx.reset(),$._vy.reset(),Mi(F?c:me,Ur[1],Ne,dt,!0),$.deltaX=$.deltaY=0,D&&D($))},H=$.onRelease=function(Oe){if(!ke(Oe,1)){Si(F?c:me,Ur[1],Ne,!0);var tt=!isNaN($.y-$.startY),Mt=$.isDragging,Fe=Mt&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),lt=vu(Oe);!Fe&&tt&&($._vx.reset(),$._vy.reset(),p&&le&&ei.delayedCall(.08,function(){if(Lu()-we>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(me.createEvent){var ot=me.createEvent("MouseEvents");ot.initMouseEvent("click",!0,!0,ir,1,lt.screenX,lt.screenY,lt.clientX,lt.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(ot)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,g&&Mt&&!F&&Tt.restart(!0),ct&&Ie(),x&&Mt&&x($),w&&w($,Fe)}},Ee=function(tt){return tt.touches&&tt.touches.length>1&&($.isGesturing=!0)&&oe(tt,$.isDragging)},Ae=function(){return($.isGesturing=!1)||T($)},Ue=function(tt){if(!ke(tt)){var Mt=St(),Fe=Bt();at((Mt-O)*te,(Fe-R)*te,1),O=Mt,R=Fe,g&&Tt.restart(!0)}},xe=function(tt){if(!ke(tt)){tt=vu(tt,p),K&&(mt=!0);var Mt=(tt.deltaMode===1?d:tt.deltaMode===2?ir.innerHeight:1)*E;at(tt.deltaX*Mt,tt.deltaY*Mt,0),g&&!F&&Tt.restart(!0)}},ge=function(tt){if(!ke(tt)){var Mt=tt.clientX,Fe=tt.clientY,lt=Mt-$.x,ot=Fe-$.y;$.x=Mt,$.y=Fe,V=!0,g&&Tt.restart(!0),(lt||ot)&&Ye(lt,ot)}},We=function(tt){$.event=tt,ne($)},ft=function(tt){$.event=tt,se($)},Vt=function(tt){return ke(tt)||vu(tt,p)&&ye($)};Tt=$._dc=ei.delayedCall(_||.25,be).pause(),$.deltaX=$.deltaY=0,$._vx=yg(0,50,!0),$._vy=yg(0,50,!0),$.scrollX=St,$.scrollY=Bt,$.isDragging=$.isGesturing=$.isPressed=!1,CM(this),$.enable=function(Oe){return $.isEnabled||(Mi(he?me:c,"scroll",xg),u.indexOf("scroll")>=0&&Mi(he?me:c,"scroll",Ue,dt,pe),u.indexOf("wheel")>=0&&Mi(c,"wheel",xe,dt,pe),(u.indexOf("touch")>=0&&AM||u.indexOf("pointer")>=0)&&(Mi(c,Ur[0],ht,dt,pe),Mi(me,Ur[2],H),Mi(me,Ur[3],H),le&&Mi(c,"click",Ge,!0,!0),ye&&Mi(c,"click",Vt),oe&&Mi(me,"gesturestart",Ee),T&&Mi(me,"gestureend",Ae),ne&&Mi(c,Yo+"enter",We),se&&Mi(c,Yo+"leave",ft),ee&&Mi(c,Yo+"move",ge)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=V=ct=!1,$._vx.reset(),$._vy.reset(),O=St(),R=Bt(),Oe&&Oe.type&&ht(Oe),_e&&_e($)),$},$.disable=function(){$.isEnabled&&(al.filter(function(Oe){return Oe!==$&&Nu(Oe.target)}).length||Si(he?me:c,"scroll",xg),$.isPressed&&($._vx.reset(),$._vy.reset(),Si(F?c:me,Ur[1],Ne,!0)),Si(he?me:c,"scroll",Ue,pe),Si(c,"wheel",xe,pe),Si(c,Ur[0],ht,pe),Si(me,Ur[2],H),Si(me,Ur[3],H),Si(c,"click",Ge,!0),Si(c,"click",Vt),Si(me,"gesturestart",Ee),Si(me,"gestureend",Ae),Si(c,Yo+"enter",We),Si(c,Yo+"leave",ft),Si(c,Yo+"move",ge),$.isEnabled=$.isPressed=$.isDragging=!1,Pe&&Pe($))},$.kill=$.revert=function(){$.disable();var Oe=al.indexOf($);Oe>=0&&al.splice(Oe,1),Ss===$&&(Ss=0)},al.push($),F&&Nu(c)&&(Ss=$),$.enable(M)},bD(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Rn.version="3.13.0";Rn.create=function(o){return new Rn(o)};Rn.register=LM;Rn.getAll=function(){return al.slice()};Rn.getById=function(o){return al.filter(function(e){return e.vars.id===o})[0]};RM()&&ei.registerPlugin(Rn);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ke,nl,It,fn,tr,qt,o_,xd,Zu,Iu,Eu,Ff,fi,Nd,Sg,wi,_y,vy,il,NM,im,IM,Ti,Mg,UM,kM,to,Eg,a_,ml,l_,yd,Tg,rm,Of=1,di=Date.now,sm=di(),Tr=0,Tu=0,xy=function(e,t,n){var r=Ji(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},yy=function(e,t){return t&&(!Ji(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},PD=function o(){return Tu&&requestAnimationFrame(o)},Sy=function(){return Nd=1},My=function(){return Nd=0},Wr=function(e){return e},wu=function(e){return Math.round(e*1e5)/1e5||0},FM=function(){return typeof window<"u"},OM=function(){return Ke||FM()&&(Ke=window.gsap)&&Ke.registerPlugin&&Ke},da=function(e){return!!~o_.indexOf(e)},zM=function(e){return(e==="Height"?l_:It["inner"+e])||tr["client"+e]||qt["client"+e]},BM=function(e){return ho(e,"getBoundingClientRect")||(da(e)?function(){return ad.width=It.innerWidth,ad.height=l_,ad}:function(){return _s(e)})},DD=function(e,t,n){var r=n.d,a=n.d2,u=n.a;return(u=ho(e,"getBoundingClientRect"))?function(){return u()[r]}:function(){return(t?zM(a):e["client"+a])||0}},LD=function(e,t){return!t||~Zr.indexOf(e)?BM(e):function(){return ad}},Kr=function(e,t){var n=t.s,r=t.d2,a=t.d,u=t.a;return Math.max(0,(n="scroll"+r)&&(u=ho(e,n))?u()-BM(e)()[a]:da(e)?(tr[n]||qt[n])-zM(r):e[n]-e["offset"+r])},zf=function(e,t){for(var n=0;n<il.length;n+=3)(!t||~t.indexOf(il[n+1]))&&e(il[n],il[n+1],il[n+2])},Ji=function(e){return typeof e=="string"},pi=function(e){return typeof e=="function"},Au=function(e){return typeof e=="number"},qo=function(e){return typeof e=="object"},xu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},om=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},el=Math.abs,VM="left",HM="top",u_="right",c_="bottom",oa="width",aa="height",Uu="Right",ku="Left",Fu="Top",Ou="Bottom",Ln="padding",vr="margin",Cl="Width",f_="Height",Bn="px",xr=function(e){return It.getComputedStyle(e)},ND=function(e){var t=xr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ey=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_s=function(e,t){var n=t&&xr(e)[Sg]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Sd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},GM=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},ID=function(e){return function(t){return Ke.utils.snap(GM(e),t)}},d_=function(e){var t=Ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,u){u===void 0&&(u=.001);var c;if(!a)return t(r);if(a>0){for(r-=u,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=u;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,u){u===void 0&&(u=.001);var c=t(r);return!a||Math.abs(c-r)<u||c-r<0==a<0?c:t(a<0?r-e:r+e)}},UD=function(e){return function(t,n){return d_(GM(e))(t,n.direction)}},Bf=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},$n=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},qn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Vf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ty={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Hf={toggleActions:"play",anticipatePin:0},Md={top:0,left:0,center:.5,bottom:1,right:1},id=function(e,t){if(Ji(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Md?Md[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Gf=function(e,t,n,r,a,u,c,d){var h=a.startColor,p=a.endColor,g=a.fontSize,_=a.indent,v=a.fontWeight,E=fn.createElement("div"),M=da(n)||ho(n,"pinType")==="fixed",S=e.indexOf("scroller")!==-1,x=M?qt:n,N=e.indexOf("start")!==-1,D=N?h:p,w="border-color:"+D+";font-size:"+g+";color:"+D+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((S||d)&&M?"fixed;":"absolute;"),(S||d||!M)&&(w+=(r===Vn?u_:c_)+":"+(u+parseFloat(_))+"px;"),c&&(w+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),E._isStart=N,E.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),E.style.cssText=w,E.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(E,x.children[0]):x.appendChild(E),E._offset=E["offset"+r.op.d2],rd(E,0,r,N),E},rd=function(e,t,n,r){var a={display:"block"},u=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+u+Cl]=1,a["border"+c+Cl]=0,a[n.p]=t+"px",Ke.set(e,a)},Nt=[],wg={},Qu,wy=function(){return di()-Tr>34&&(Qu||(Qu=requestAnimationFrame(Es)))},tl=function(){(!Ti||!Ti.isPressed||Ti.startX>qt.clientWidth)&&(Ut.cache++,Ti?Qu||(Qu=requestAnimationFrame(Es)):Es(),Tr||pa("scrollStart"),Tr=di())},am=function(){kM=It.innerWidth,UM=It.innerHeight},bu=function(e){Ut.cache++,(e===!0||!fi&&!IM&&!fn.fullscreenElement&&!fn.webkitFullscreenElement&&(!Mg||kM!==It.innerWidth||Math.abs(It.innerHeight-UM)>It.innerHeight*.25))&&xd.restart(!0)},ha={},kD=[],WM=function o(){return qn(bt,"scrollEnd",o)||ea(!0)},pa=function(e){return ha[e]&&ha[e].map(function(t){return t()})||kD},Qi=[],XM=function(e){for(var t=0;t<Qi.length;t+=5)(!e||Qi[t+4]&&Qi[t+4].query===e)&&(Qi[t].style.cssText=Qi[t+1],Qi[t].getBBox&&Qi[t].setAttribute("transform",Qi[t+2]||""),Qi[t+3].uncache=1)},h_=function(e,t){var n;for(wi=0;wi<Nt.length;wi++)n=Nt[wi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));yd=!0,t&&XM(t),t||pa("revert")},jM=function(e,t){Ut.cache++,(t||!Ai)&&Ut.forEach(function(n){return pi(n)&&n.cacheID++&&(n.rec=0)}),Ji(e)&&(It.history.scrollRestoration=a_=e)},Ai,la=0,Ay,FD=function(){if(Ay!==la){var e=Ay=la;requestAnimationFrame(function(){return e===la&&ea(!0)})}},YM=function(){qt.appendChild(ml),l_=!Ti&&ml.offsetHeight||It.innerHeight,qt.removeChild(ml)},by=function(e){return Zu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ea=function(e,t){if(tr=fn.documentElement,qt=fn.body,o_=[It,fn,tr,qt],Tr&&!e&&!yd){$n(bt,"scrollEnd",WM);return}YM(),Ai=bt.isRefreshing=!0,Ut.forEach(function(r){return pi(r)&&++r.cacheID&&(r.rec=r())});var n=pa("refreshInit");NM&&bt.sort(),t||h_(),Ut.forEach(function(r){pi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Nt.slice(0).forEach(function(r){return r.refresh()}),yd=!1,Nt.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",u=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-u),r.refresh()}}),Tg=1,by(!0),Nt.forEach(function(r){var a=Kr(r.scroller,r._dir),u=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(u||c)&&r.setPositions(c?a-1:r.start,u?Math.max(c?a:r.start+1,a):r.end,!0)}),by(!1),Tg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Ut.forEach(function(r){pi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),jM(a_,1),xd.pause(),la++,Ai=2,Es(2),Nt.forEach(function(r){return pi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Ai=bt.isRefreshing=!1,pa("refresh")},Ag=0,sd=1,zu,Es=function(e){if(e===2||!Ai&&!yd){bt.isUpdating=!0,zu&&zu.update(0);var t=Nt.length,n=di(),r=n-sm>=50,a=t&&Nt[0].scroll();if(sd=Ag>a?-1:1,Ai||(Ag=a),r&&(Tr&&!Nd&&n-Tr>200&&(Tr=0,pa("scrollEnd")),Eu=sm,sm=n),sd<0){for(wi=t;wi-- >0;)Nt[wi]&&Nt[wi].update(0,r);sd=1}else for(wi=0;wi<t;wi++)Nt[wi]&&Nt[wi].update(0,r);bt.isUpdating=!1}Qu=0},bg=[VM,HM,c_,u_,vr+Ou,vr+Uu,vr+Fu,vr+ku,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],od=bg.concat([oa,aa,"boxSizing","max"+Cl,"max"+f_,"position",vr,Ln,Ln+Fu,Ln+Uu,Ln+Ou,Ln+ku]),OD=function(e,t,n){gl(n);var r=e._gsap;if(r.spacerIsNative)gl(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},lm=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=bg.length,u=t.style,c=e.style,d;a--;)d=bg[a],u[d]=n[d];u.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(u.display="inline-block"),c[c_]=c[u_]="auto",u.flexBasis=n.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[oa]=Sd(e,Ci)+Bn,u[aa]=Sd(e,Vn)+Bn,u[Ln]=c[vr]=c[HM]=c[VM]="0",gl(r),c[oa]=c["max"+Cl]=n[oa],c[aa]=c["max"+f_]=n[aa],c[Ln]=n[Ln],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},zD=/([A-Z])/g,gl=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,u;for((e.t._gsap||Ke.core.getCache(e.t)).uncache=1;r<n;r+=2)u=e[r+1],a=e[r],u?t[a]=u:t[a]&&t.removeProperty(a.replace(zD,"-$1").toLowerCase())}},Wf=function(e){for(var t=od.length,n=e.style,r=[],a=0;a<t;a++)r.push(od[a],n[od[a]]);return r.t=e,r},BD=function(e,t,n){for(var r=[],a=e.length,u=n?8:0,c;u<a;u+=2)c=e[u],r.push(c,c in t?t[c]:e[u+1]);return r.t=e.t,r},ad={left:0,top:0},Cy=function(e,t,n,r,a,u,c,d,h,p,g,_,v,E){pi(e)&&(e=e(d)),Ji(e)&&e.substr(0,3)==="max"&&(e=_+(e.charAt(4)==="="?id("0"+e.substr(3),n):0));var M=v?v.time():0,S,x,N;if(v&&v.seek(0),isNaN(e)||(e=+e),Au(e))v&&(e=Ke.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,_,e)),c&&rd(c,n,r,!0);else{pi(t)&&(t=t(d));var D=(e||"0").split(" "),w,I,U,L;N=Fi(t,d)||qt,w=_s(N)||{},(!w||!w.left&&!w.top)&&xr(N).display==="none"&&(L=N.style.display,N.style.display="block",w=_s(N),L?N.style.display=L:N.style.removeProperty("display")),I=id(D[0],w[r.d]),U=id(D[1]||"0",n),e=w[r.p]-h[r.p]-p+I+a-U,c&&rd(c,U,r,n-U<20||c._isStart&&U>20),n-=n-U}if(E&&(d[E]=e||-.001,e<0&&(e=0)),u){var k=e+n,b=u._isStart;S="scroll"+r.d2,rd(u,k,r,b&&k>20||!b&&(g?Math.max(qt[S],tr[S]):u.parentNode[S])<=k+1),g&&(h=_s(c),g&&(u.style[r.op.p]=h[r.op.p]-r.op.m-u._offset+Bn))}return v&&N&&(S=_s(N),v.seek(_),x=_s(N),v._caScrollDist=S[r.p]-x[r.p],e=e/v._caScrollDist*_),v&&v.seek(M),v?e:Math.round(e)},VD=/(webkit|moz|length|cssText|inset)/i,Ry=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,u,c;if(t===qt){e._stOrig=a.cssText,c=xr(e);for(u in c)!+u&&!VD.test(u)&&c[u]&&typeof a[u]=="string"&&u!=="0"&&(a[u]=c[u]);a.top=n,a.left=r}else a.cssText=e._stOrig;Ke.core.getCache(e).uncache=1,t.appendChild(e)}},qM=function(e,t,n){var r=t,a=r;return function(u){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(u=c,n&&n()),a=r,r=Math.round(u),r}},Xf=function(e,t,n){var r={};r[t.p]="+="+n,Ke.set(e,r)},Py=function(e,t){var n=vo(e,t),r="_scroll"+t.p2,a=function u(c,d,h,p,g){var _=u.tween,v=d.onComplete,E={};h=h||n();var M=qM(n,h,function(){_.kill(),u.tween=0});return g=p&&g||0,p=p||c-h,_&&_.kill(),d[r]=c,d.inherit=!1,d.modifiers=E,E[r]=function(){return M(h+p*_.ratio+g*_.ratio*_.ratio)},d.onUpdate=function(){Ut.cache++,u.tween&&Es()},d.onComplete=function(){u.tween=0,v&&v.call(_)},_=u.tween=Ke.to(e,d),_};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},$n(e,"wheel",n.wheelHandler),bt.isTouch&&$n(e,"touchmove",n.wheelHandler),a},bt=(function(){function o(t,n){nl||o.register(Ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Eg(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Tu){this.update=this.refresh=this.kill=Wr;return}n=Ey(Ji(n)||Au(n)||n.nodeType?{trigger:n}:n,Hf);var a=n,u=a.onUpdate,c=a.toggleClass,d=a.id,h=a.onToggle,p=a.onRefresh,g=a.scrub,_=a.trigger,v=a.pin,E=a.pinSpacing,M=a.invalidateOnRefresh,S=a.anticipatePin,x=a.onScrubComplete,N=a.onSnapComplete,D=a.once,w=a.snap,I=a.pinReparent,U=a.pinSpacer,L=a.containerAnimation,k=a.fastScrollEnd,b=a.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ci:Vn,z=!g&&g!==0,X=Fi(n.scroller||It),J=Ke.core.getCache(X),ne=da(X),se=("pinType"in n?n.pinType:ho(X,"pinType")||ne&&"fixed")==="fixed",ee=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Q=z&&n.toggleActions.split(" "),F="markers"in n?n.markers:Hf.markers,oe=ne?0:parseFloat(xr(X)["border"+C.p2+Cl])||0,T=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(T)},_e=DD(X,ne,C),Pe=LD(X,ne),ye=0,te=0,pe=0,le=vo(X,C),Te,Le,st,Tt,ct,V,mt,je,yt,$,Ct,ze,dt,St,Bt,O,R,Z,he,me,de,He,we,Ge,ke,be,Ie,at,Ye,Ne,ht,H,Ee,Ae,Ue,xe,ge,We,ft;if(T._startClamp=T._endClamp=!1,T._dir=C,S*=45,T.scroller=X,T.scroll=L?L.time.bind(L):le,Tt=le(),T.vars=n,r=r||n.animation,"refreshPriority"in n&&(NM=1,n.refreshPriority===-9999&&(zu=T)),J.tweenScroll=J.tweenScroll||{top:Py(X,Vn),left:Py(X,Ci)},T.tweenTo=Te=J.tweenScroll[C.p],T.scrubDuration=function(Fe){Ee=Au(Fe)&&Fe,Ee?H?H.duration(Fe):H=Ke.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ee,paused:!0,onComplete:function(){return x&&x(T)}}):(H&&H.progress(1).kill(),H=0)},r&&(r.vars.lazy=!1,r._initted&&!T.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),T.animation=r.pause(),r.scrollTrigger=T,T.scrubDuration(g),Ne=0,d||(d=r.vars.id)),w&&((!qo(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in qt.style&&Ke.set(ne?[qt,tr]:X,{scrollBehavior:"auto"}),Ut.forEach(function(Fe){return pi(Fe)&&Fe.target===(ne?fn.scrollingElement||tr:X)&&(Fe.smooth=!1)}),st=pi(w.snapTo)?w.snapTo:w.snapTo==="labels"?ID(r):w.snapTo==="labelsDirectional"?UD(r):w.directional!==!1?function(Fe,lt){return d_(w.snapTo)(Fe,di()-te<500?0:lt.direction)}:Ke.utils.snap(w.snapTo),Ae=w.duration||{min:.1,max:2},Ae=qo(Ae)?Iu(Ae.min,Ae.max):Iu(Ae,Ae),Ue=Ke.delayedCall(w.delay||Ee/2||.1,function(){var Fe=le(),lt=di()-te<500,ot=Te.tween;if((lt||Math.abs(T.getVelocity())<10)&&!ot&&!Nd&&ye!==Fe){var gt=(Fe-V)/St,un=r&&!z?r.totalProgress():gt,wt=lt?0:(un-ht)/(di()-Eu)*1e3||0,Qt=Ke.utils.clamp(-gt,1-gt,el(wt/2)*wt/.185),_n=gt+(w.inertia===!1?0:Qt),rn,Kt,kt=w,ni=kt.onStart,Jt=kt.onInterrupt,Zn=kt.onComplete;if(rn=st(_n,T),Au(rn)||(rn=_n),Kt=Math.max(0,Math.round(V+rn*St)),Fe<=mt&&Fe>=V&&Kt!==Fe){if(ot&&!ot._initted&&ot.data<=el(Kt-Fe))return;w.inertia===!1&&(Qt=rn-gt),Te(Kt,{duration:Ae(el(Math.max(el(_n-un),el(rn-un))*.185/wt/.05||0)),ease:w.ease||"power3",data:el(Kt-Fe),onInterrupt:function(){return Ue.restart(!0)&&Jt&&Jt(T)},onComplete:function(){T.update(),ye=le(),r&&!z&&(H?H.resetTo("totalProgress",rn,r._tTime/r._tDur):r.progress(rn)),Ne=ht=r&&!z?r.totalProgress():T.progress,N&&N(T),Zn&&Zn(T)}},Fe,Qt*St,Kt-Fe-Qt*St),ni&&ni(T,Te.tween)}}else T.isActive&&ye!==Fe&&Ue.restart(!0)}).pause()),d&&(wg[d]=T),_=T.trigger=Fi(_||v!==!0&&v),ft=_&&_._gsap&&_._gsap.stRevert,ft&&(ft=ft(T)),v=v===!0?_:Fi(v),Ji(c)&&(c={targets:_,className:c}),v&&(E===!1||E===vr||(E=!E&&v.parentNode&&v.parentNode.style&&xr(v.parentNode).display==="flex"?!1:Ln),T.pin=v,Le=Ke.core.getCache(v),Le.spacer?Bt=Le.pinState:(U&&(U=Fi(U),U&&!U.nodeType&&(U=U.current||U.nativeElement),Le.spacerIsNative=!!U,U&&(Le.spacerState=Wf(U))),Le.spacer=Z=U||fn.createElement("div"),Z.classList.add("pin-spacer"),d&&Z.classList.add("pin-spacer-"+d),Le.pinState=Bt=Wf(v)),n.force3D!==!1&&Ke.set(v,{force3D:!0}),T.spacer=Z=Le.spacer,Ye=xr(v),Ge=Ye[E+C.os2],me=Ke.getProperty(v),de=Ke.quickSetter(v,C.a,Bn),lm(v,Z,Ye),R=Wf(v)),F){ze=qo(F)?Ey(F,Ty):Ty,$=Gf("scroller-start",d,X,C,ze,0),Ct=Gf("scroller-end",d,X,C,ze,0,$),he=$["offset"+C.op.d2];var Vt=Fi(ho(X,"content")||X);je=this.markerStart=Gf("start",d,Vt,C,ze,he,0,L),yt=this.markerEnd=Gf("end",d,Vt,C,ze,he,0,L),L&&(We=Ke.quickSetter([je,yt],C.a,Bn)),!se&&!(Zr.length&&ho(X,"fixedMarkers")===!0)&&(ND(ne?qt:X),Ke.set([$,Ct],{force3D:!0}),be=Ke.quickSetter($,C.a,Bn),at=Ke.quickSetter(Ct,C.a,Bn))}if(L){var Oe=L.vars.onUpdate,tt=L.vars.onUpdateParams;L.eventCallback("onUpdate",function(){T.update(0,0,1),Oe&&Oe.apply(L,tt||[])})}if(T.previous=function(){return Nt[Nt.indexOf(T)-1]},T.next=function(){return Nt[Nt.indexOf(T)+1]},T.revert=function(Fe,lt){if(!lt)return T.kill(!0);var ot=Fe!==!1||!T.enabled,gt=fi;ot!==T.isReverted&&(ot&&(xe=Math.max(le(),T.scroll.rec||0),pe=T.progress,ge=r&&r.progress()),je&&[je,yt,$,Ct].forEach(function(un){return un.style.display=ot?"none":"block"}),ot&&(fi=T,T.update(ot)),v&&(!I||!T.isActive)&&(ot?OD(v,Z,Bt):lm(v,Z,xr(v),ke)),ot||T.update(ot),fi=gt,T.isReverted=ot)},T.refresh=function(Fe,lt,ot,gt){if(!((fi||!T.enabled)&&!lt)){if(v&&Fe&&Tr){$n(o,"scrollEnd",WM);return}!Ai&&K&&K(T),fi=T,Te.tween&&!ot&&(Te.tween.kill(),Te.tween=0),H&&H.pause(),M&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(Dt){return Dt.vars.immediateRender&&Dt.render(0,!0,!0)})),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var un=_e(),wt=Pe(),Qt=L?L.duration():Kr(X,C),_n=St<=.01||!St,rn=0,Kt=gt||0,kt=qo(ot)?ot.end:n.end,ni=n.endTrigger||_,Jt=qo(ot)?ot.start:n.start||(n.start===0||!_?0:v?"0 0":"0 100%"),Zn=T.pinnedContainer=n.pinnedContainer&&Fi(n.pinnedContainer,T),gi=_&&Math.max(0,Nt.indexOf(T))||0,Mn=gi,P,Y,ae,ue,G,ve,De,qe,Ve,ut,it,Ze,_t;for(F&&qo(ot)&&(Ze=Ke.getProperty($,C.p),_t=Ke.getProperty(Ct,C.p));Mn-- >0;)ve=Nt[Mn],ve.end||ve.refresh(0,1)||(fi=T),De=ve.pin,De&&(De===_||De===v||De===Zn)&&!ve.isReverted&&(ut||(ut=[]),ut.unshift(ve),ve.revert(!0,!0)),ve!==Nt[Mn]&&(gi--,Mn--);for(pi(Jt)&&(Jt=Jt(T)),Jt=xy(Jt,"start",T),V=Cy(Jt,_,un,C,le(),je,$,T,wt,oe,se,Qt,L,T._startClamp&&"_startClamp")||(v?-.001:0),pi(kt)&&(kt=kt(T)),Ji(kt)&&!kt.indexOf("+=")&&(~kt.indexOf(" ")?kt=(Ji(Jt)?Jt.split(" ")[0]:"")+kt:(rn=id(kt.substr(2),un),kt=Ji(Jt)?Jt:(L?Ke.utils.mapRange(0,L.duration(),L.scrollTrigger.start,L.scrollTrigger.end,V):V)+rn,ni=_)),kt=xy(kt,"end",T),mt=Math.max(V,Cy(kt||(ni?"100% 0":Qt),ni,un,C,le()+rn,yt,Ct,T,wt,oe,se,Qt,L,T._endClamp&&"_endClamp"))||-.001,rn=0,Mn=gi;Mn--;)ve=Nt[Mn],De=ve.pin,De&&ve.start-ve._pinPush<=V&&!L&&ve.end>0&&(P=ve.end-(T._startClamp?Math.max(0,ve.start):ve.start),(De===_&&ve.start-ve._pinPush<V||De===Zn)&&isNaN(Jt)&&(rn+=P*(1-ve.progress)),De===v&&(Kt+=P));if(V+=rn,mt+=rn,T._startClamp&&(T._startClamp+=rn),T._endClamp&&!Ai&&(T._endClamp=mt||-.001,mt=Math.min(mt,Kr(X,C))),St=mt-V||(V-=.01)&&.001,_n&&(pe=Ke.utils.clamp(0,1,Ke.utils.normalize(V,mt,xe))),T._pinPush=Kt,je&&rn&&(P={},P[C.a]="+="+rn,Zn&&(P[C.p]="-="+le()),Ke.set([je,yt],P)),v&&!(Tg&&T.end>=Kr(X,C)))P=xr(v),ue=C===Vn,ae=le(),He=parseFloat(me(C.a))+Kt,!Qt&&mt>1&&(it=(ne?fn.scrollingElement||tr:X).style,it={style:it,value:it["overflow"+C.a.toUpperCase()]},ne&&xr(qt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(it.style["overflow"+C.a.toUpperCase()]="scroll")),lm(v,Z,P),R=Wf(v),Y=_s(v,!0),qe=se&&vo(X,ue?Ci:Vn)(),E?(ke=[E+C.os2,St+Kt+Bn],ke.t=Z,Mn=E===Ln?Sd(v,C)+St+Kt:0,Mn&&(ke.push(C.d,Mn+Bn),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=Mn+Bn)),gl(ke),Zn&&Nt.forEach(function(Dt){Dt.pin===Zn&&Dt.vars.pinSpacing!==!1&&(Dt._subPinOffset=!0)}),se&&le(xe)):(Mn=Sd(v,C),Mn&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=Mn+Bn)),se&&(G={top:Y.top+(ue?ae-V:qe)+Bn,left:Y.left+(ue?qe:ae-V)+Bn,boxSizing:"border-box",position:"fixed"},G[oa]=G["max"+Cl]=Math.ceil(Y.width)+Bn,G[aa]=G["max"+f_]=Math.ceil(Y.height)+Bn,G[vr]=G[vr+Fu]=G[vr+Uu]=G[vr+Ou]=G[vr+ku]="0",G[Ln]=P[Ln],G[Ln+Fu]=P[Ln+Fu],G[Ln+Uu]=P[Ln+Uu],G[Ln+Ou]=P[Ln+Ou],G[Ln+ku]=P[Ln+ku],O=BD(Bt,G,I),Ai&&le(0)),r?(Ve=r._initted,im(1),r.render(r.duration(),!0,!0),we=me(C.a)-He+St+Kt,Ie=Math.abs(St-we)>1,se&&Ie&&O.splice(O.length-2,2),r.render(0,!0,!0),Ve||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),im(0)):we=St,it&&(it.value?it.style["overflow"+C.a.toUpperCase()]=it.value:it.style.removeProperty("overflow-"+C.a));else if(_&&le()&&!L)for(Y=_.parentNode;Y&&Y!==qt;)Y._pinOffset&&(V-=Y._pinOffset,mt-=Y._pinOffset),Y=Y.parentNode;ut&&ut.forEach(function(Dt){return Dt.revert(!1,!0)}),T.start=V,T.end=mt,Tt=ct=Ai?xe:le(),!L&&!Ai&&(Tt<xe&&le(xe),T.scroll.rec=0),T.revert(!1,!0),te=di(),Ue&&(ye=-1,Ue.restart(!0)),fi=0,r&&z&&(r._initted||ge)&&r.progress()!==ge&&r.progress(ge||0,!0).render(r.time(),!0,!0),(_n||pe!==T.progress||L||M||r&&!r._initted)&&(r&&!z&&(r._initted||pe||r.vars.immediateRender!==!1)&&r.totalProgress(L&&V<-.001&&!pe?Ke.utils.normalize(V,mt,0):pe,!0),T.progress=_n||(Tt-V)/St===pe?0:pe),v&&E&&(Z._pinOffset=Math.round(T.progress*we)),H&&H.invalidate(),isNaN(Ze)||(Ze-=Ke.getProperty($,C.p),_t-=Ke.getProperty(Ct,C.p),Xf($,C,Ze),Xf(je,C,Ze-(gt||0)),Xf(Ct,C,_t),Xf(yt,C,_t-(gt||0))),_n&&!Ai&&T.update(),p&&!Ai&&!dt&&(dt=!0,p(T),dt=!1)}},T.getVelocity=function(){return(le()-ct)/(di()-Eu)*1e3||0},T.endAnimation=function(){xu(T.callbackAnimation),r&&(H?H.progress(1):r.paused()?z||xu(r,T.direction<0,1):xu(r,r.reversed()))},T.labelToScroll=function(Fe){return r&&r.labels&&(V||T.refresh()||V)+r.labels[Fe]/r.duration()*St||0},T.getTrailing=function(Fe){var lt=Nt.indexOf(T),ot=T.direction>0?Nt.slice(0,lt).reverse():Nt.slice(lt+1);return(Ji(Fe)?ot.filter(function(gt){return gt.vars.preventOverlaps===Fe}):ot).filter(function(gt){return T.direction>0?gt.end<=V:gt.start>=mt})},T.update=function(Fe,lt,ot){if(!(L&&!ot&&!Fe)){var gt=Ai===!0?xe:T.scroll(),un=Fe?0:(gt-V)/St,wt=un<0?0:un>1?1:un||0,Qt=T.progress,_n,rn,Kt,kt,ni,Jt,Zn,gi;if(lt&&(ct=Tt,Tt=L?le():gt,w&&(ht=Ne,Ne=r&&!z?r.totalProgress():wt)),S&&v&&!fi&&!Of&&Tr&&(!wt&&V<gt+(gt-ct)/(di()-Eu)*S?wt=1e-4:wt===1&&mt>gt+(gt-ct)/(di()-Eu)*S&&(wt=.9999)),wt!==Qt&&T.enabled){if(_n=T.isActive=!!wt&&wt<1,rn=!!Qt&&Qt<1,Jt=_n!==rn,ni=Jt||!!wt!=!!Qt,T.direction=wt>Qt?1:-1,T.progress=wt,ni&&!fi&&(Kt=wt&&!Qt?0:wt===1?1:Qt===1?2:3,z&&(kt=!Jt&&Q[Kt+1]!=="none"&&Q[Kt+1]||Q[Kt],gi=r&&(kt==="complete"||kt==="reset"||kt in r))),b&&(Jt||gi)&&(gi||g||!r)&&(pi(b)?b(T):T.getTrailing(b).forEach(function(ae){return ae.endAnimation()})),z||(H&&!fi&&!Of?(H._dp._time-H._start!==H._time&&H.render(H._dp._time-H._start),H.resetTo?H.resetTo("totalProgress",wt,r._tTime/r._tDur):(H.vars.totalProgress=wt,H.invalidate().restart())):r&&r.totalProgress(wt,!!(fi&&(te||Fe)))),v){if(Fe&&E&&(Z.style[E+C.os2]=Ge),!se)de(wu(He+we*wt));else if(ni){if(Zn=!Fe&&wt>Qt&&mt+1>gt&&gt+1>=Kr(X,C),I)if(!Fe&&(_n||Zn)){var Mn=_s(v,!0),P=gt-V;Ry(v,qt,Mn.top+(C===Vn?P:0)+Bn,Mn.left+(C===Vn?0:P)+Bn)}else Ry(v,Z);gl(_n||Zn?O:R),Ie&&wt<1&&_n||de(He+(wt===1&&!Zn?we:0))}}w&&!Te.tween&&!fi&&!Of&&Ue.restart(!0),c&&(Jt||D&&wt&&(wt<1||!rm))&&Zu(c.targets).forEach(function(ae){return ae.classList[_n||D?"add":"remove"](c.className)}),u&&!z&&!Fe&&u(T),ni&&!fi?(z&&(gi&&(kt==="complete"?r.pause().totalProgress(1):kt==="reset"?r.restart(!0).pause():kt==="restart"?r.restart(!0):r[kt]()),u&&u(T)),(Jt||!rm)&&(h&&Jt&&om(T,h),ee[Kt]&&om(T,ee[Kt]),D&&(wt===1?T.kill(!1,1):ee[Kt]=0),Jt||(Kt=wt===1?1:3,ee[Kt]&&om(T,ee[Kt]))),k&&!_n&&Math.abs(T.getVelocity())>(Au(k)?k:2500)&&(xu(T.callbackAnimation),H?H.progress(1):xu(r,kt==="reverse"?1:!wt,1))):z&&u&&!fi&&u(T)}if(at){var Y=L?gt/L.duration()*(L._caScrollDist||0):gt;be(Y+($._isFlipped?1:0)),at(Y)}We&&We(-gt/L.duration()*(L._caScrollDist||0))}},T.enable=function(Fe,lt){T.enabled||(T.enabled=!0,$n(X,"resize",bu),ne||$n(X,"scroll",tl),K&&$n(o,"refreshInit",K),Fe!==!1&&(T.progress=pe=0,Tt=ct=ye=le()),lt!==!1&&T.refresh())},T.getTween=function(Fe){return Fe&&Te?Te.tween:H},T.setPositions=function(Fe,lt,ot,gt){if(L){var un=L.scrollTrigger,wt=L.duration(),Qt=un.end-un.start;Fe=un.start+Qt*Fe/wt,lt=un.start+Qt*lt/wt}T.refresh(!1,!1,{start:yy(Fe,ot&&!!T._startClamp),end:yy(lt,ot&&!!T._endClamp)},gt),T.update()},T.adjustPinSpacing=function(Fe){if(ke&&Fe){var lt=ke.indexOf(C.d)+1;ke[lt]=parseFloat(ke[lt])+Fe+Bn,ke[1]=parseFloat(ke[1])+Fe+Bn,gl(ke)}},T.disable=function(Fe,lt){if(T.enabled&&(Fe!==!1&&T.revert(!0,!0),T.enabled=T.isActive=!1,lt||H&&H.pause(),xe=0,Le&&(Le.uncache=1),K&&qn(o,"refreshInit",K),Ue&&(Ue.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!ne)){for(var ot=Nt.length;ot--;)if(Nt[ot].scroller===X&&Nt[ot]!==T)return;qn(X,"resize",bu),ne||qn(X,"scroll",tl)}},T.kill=function(Fe,lt){T.disable(Fe,lt),H&&!lt&&H.kill(),d&&delete wg[d];var ot=Nt.indexOf(T);ot>=0&&Nt.splice(ot,1),ot===wi&&sd>0&&wi--,ot=0,Nt.forEach(function(gt){return gt.scroller===T.scroller&&(ot=1)}),ot||Ai||(T.scroll.rec=0),r&&(r.scrollTrigger=null,Fe&&r.revert({kill:!1}),lt||r.kill()),je&&[je,yt,$,Ct].forEach(function(gt){return gt.parentNode&&gt.parentNode.removeChild(gt)}),zu===T&&(zu=0),v&&(Le&&(Le.uncache=1),ot=0,Nt.forEach(function(gt){return gt.pin===v&&ot++}),ot||(Le.spacer=0)),n.onKill&&n.onKill(T)},Nt.push(T),T.enable(!1,!1),ft&&ft(T),r&&r.add&&!St){var Mt=T.update;T.update=function(){T.update=Mt,Ut.cache++,V||mt||T.refresh()},Ke.delayedCall(.01,T.update),St=.01,V=mt=0}else T.refresh();v&&FD()},o.register=function(n){return nl||(Ke=n||OM(),FM()&&window.document&&o.enable(),nl=Tu),nl},o.defaults=function(n){if(n)for(var r in n)Hf[r]=n[r];return Hf},o.disable=function(n,r){Tu=0,Nt.forEach(function(u){return u[r?"kill":"disable"](n)}),qn(It,"wheel",tl),qn(fn,"scroll",tl),clearInterval(Ff),qn(fn,"touchcancel",Wr),qn(qt,"touchstart",Wr),Bf(qn,fn,"pointerdown,touchstart,mousedown",Sy),Bf(qn,fn,"pointerup,touchend,mouseup",My),xd.kill(),zf(qn);for(var a=0;a<Ut.length;a+=3)Vf(qn,Ut[a],Ut[a+1]),Vf(qn,Ut[a],Ut[a+2])},o.enable=function(){if(It=window,fn=document,tr=fn.documentElement,qt=fn.body,Ke&&(Zu=Ke.utils.toArray,Iu=Ke.utils.clamp,Eg=Ke.core.context||Wr,im=Ke.core.suppressOverwrites||Wr,a_=It.history.scrollRestoration||"auto",Ag=It.pageYOffset||0,Ke.core.globals("ScrollTrigger",o),qt)){Tu=1,ml=document.createElement("div"),ml.style.height="100vh",ml.style.position="absolute",YM(),PD(),Rn.register(Ke),o.isTouch=Rn.isTouch,to=Rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Mg=Rn.isTouch===1,$n(It,"wheel",tl),o_=[It,fn,tr,qt],Ke.matchMedia?(o.matchMedia=function(h){var p=Ke.matchMedia(),g;for(g in h)p.add(g,h[g]);return p},Ke.addEventListener("matchMediaInit",function(){return h_()}),Ke.addEventListener("matchMediaRevert",function(){return XM()}),Ke.addEventListener("matchMedia",function(){ea(0,1),pa("matchMedia")}),Ke.matchMedia().add("(orientation: portrait)",function(){return am(),am})):console.warn("Requires GSAP 3.11.0 or later"),am(),$n(fn,"scroll",tl);var n=qt.hasAttribute("style"),r=qt.style,a=r.borderTopStyle,u=Ke.core.Animation.prototype,c,d;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",c=_s(qt),Vn.m=Math.round(c.top+Vn.sc())||0,Ci.m=Math.round(c.left+Ci.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(qt.setAttribute("style",""),qt.removeAttribute("style")),Ff=setInterval(wy,250),Ke.delayedCall(.5,function(){return Of=0}),$n(fn,"touchcancel",Wr),$n(qt,"touchstart",Wr),Bf($n,fn,"pointerdown,touchstart,mousedown",Sy),Bf($n,fn,"pointerup,touchend,mouseup",My),Sg=Ke.utils.checkPrefix("transform"),od.push(Sg),nl=di(),xd=Ke.delayedCall(.2,ea).pause(),il=[fn,"visibilitychange",function(){var h=It.innerWidth,p=It.innerHeight;fn.hidden?(_y=h,vy=p):(_y!==h||vy!==p)&&bu()},fn,"DOMContentLoaded",ea,It,"load",ea,It,"resize",bu],zf($n),Nt.forEach(function(h){return h.enable(0,1)}),d=0;d<Ut.length;d+=3)Vf(qn,Ut[d],Ut[d+1]),Vf(qn,Ut[d],Ut[d+2])}},o.config=function(n){"limitCallbacks"in n&&(rm=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ff)||(Ff=r)&&setInterval(wy,r),"ignoreMobileResize"in n&&(Mg=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(zf(qn)||zf($n,n.autoRefreshEvents||"none"),IM=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,r){var a=Fi(n),u=Ut.indexOf(a),c=da(a);~u&&Ut.splice(u,c?6:2),r&&(c?Zr.unshift(It,r,qt,r,tr,r):Zr.unshift(a,r))},o.clearMatchMedia=function(n){Nt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},o.isInViewport=function(n,r,a){var u=(Ji(n)?Fi(n):n).getBoundingClientRect(),c=u[a?oa:aa]*r||0;return a?u.right-c>0&&u.left+c<It.innerWidth:u.bottom-c>0&&u.top+c<It.innerHeight},o.positionInViewport=function(n,r,a){Ji(n)&&(n=Fi(n));var u=n.getBoundingClientRect(),c=u[a?oa:aa],d=r==null?c/2:r in Md?Md[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(u.left+d)/It.innerWidth:(u.top+d)/It.innerHeight},o.killAll=function(n){if(Nt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=ha.killAll||[];ha={},r.forEach(function(a){return a()})}},o})();bt.version="3.13.0";bt.saveStyles=function(o){return o?Zu(o).forEach(function(e){if(e&&e.style){var t=Qi.indexOf(e);t>=0&&Qi.splice(t,5),Qi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ke.core.getCache(e),Eg())}}):Qi};bt.revert=function(o,e){return h_(!o,e)};bt.create=function(o,e){return new bt(o,e)};bt.refresh=function(o){return o?bu(!0):(nl||bt.register())&&ea(!0)};bt.update=function(o){return++Ut.cache&&Es(o===!0?2:0)};bt.clearScrollMemory=jM;bt.maxScroll=function(o,e){return Kr(o,e?Ci:Vn)};bt.getScrollFunc=function(o,e){return vo(Fi(o),e?Ci:Vn)};bt.getById=function(o){return wg[o]};bt.getAll=function(){return Nt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};bt.isScrolling=function(){return!!Tr};bt.snapDirectional=d_;bt.addEventListener=function(o,e){var t=ha[o]||(ha[o]=[]);~t.indexOf(e)||t.push(e)};bt.removeEventListener=function(o,e){var t=ha[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};bt.batch=function(o,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,u=function(h,p){var g=[],_=[],v=Ke.delayedCall(r,function(){p(g,_),g=[],_=[]}).pause();return function(E){g.length||v.restart(!0),g.push(E.trigger),_.push(E),a<=g.length&&v.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&pi(e[c])&&c!=="onRefreshInit"?u(c,e[c]):e[c];return pi(a)&&(a=a(),$n(bt,"refresh",function(){return a=e.batchMax()})),Zu(o).forEach(function(d){var h={};for(c in n)h[c]=n[c];h.trigger=d,t.push(bt.create(h))}),t};var Dy=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},um=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Rn.isTouch?" pinch-zoom":""):"none",e===tr&&o(qt,t)},jf={auto:1,scroll:1},HD=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,u=a._gsap||Ke.core.getCache(a),c=di(),d;if(!u._isScrollT||c-u._isScrollT>2e3){for(;a&&a!==qt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(jf[(d=xr(a)).overflowY]||jf[d.overflowX]));)a=a.parentNode;u._isScroll=a&&a!==n&&!da(a)&&(jf[(d=xr(a)).overflowY]||jf[d.overflowX]),u._isScrollT=c}(u._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},$M=function(e,t,n,r){return Rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&HD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&$n(fn,Rn.eventTypes[0],Ny,!1,!0)},onDisable:function(){return qn(fn,Rn.eventTypes[0],Ny,!0)}})},GD=/(input|label|select|textarea)/i,Ly,Ny=function(e){var t=GD.test(e.target.tagName);(t||Ly)&&(e._gsapAllow=!0,Ly=t)},WD=function(e){qo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,u=t.onRelease,c,d,h=Fi(e.target)||tr,p=Ke.core.globals().ScrollSmoother,g=p&&p.get(),_=to&&(e.content&&Fi(e.content)||g&&e.content!==!1&&!g.smooth()&&g.content()),v=vo(h,Vn),E=vo(h,Ci),M=1,S=(Rn.isTouch&&It.visualViewport?It.visualViewport.scale*It.visualViewport.width:It.outerWidth)/It.innerWidth,x=0,N=pi(r)?function(){return r(c)}:function(){return r||2.8},D,w,I=$M(h,e.type,!0,a),U=function(){return w=!1},L=Wr,k=Wr,b=function(){d=Kr(h,Vn),k=Iu(to?1:0,d),n&&(L=Iu(0,Kr(h,Ci))),D=la},C=function(){_._gsap.y=wu(parseFloat(_._gsap.y)+v.offset)+"px",_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(_._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},z=function(){if(w){requestAnimationFrame(U);var F=wu(c.deltaY/2),oe=k(v.v-F);if(_&&oe!==v.v+v.offset){v.offset=oe-v.v;var T=wu((parseFloat(_&&_._gsap.y)||0)-v.offset);_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",_._gsap.y=T+"px",v.cacheID=Ut.cache,Es()}return!0}v.offset&&C(),w=!0},X,J,ne,se,ee=function(){b(),X.isActive()&&X.vars.scrollY>d&&(v()>d?X.progress(1)&&v(d):X.resetTo("scrollY",d))};return _&&Ke.set(_,{y:"+=0"}),e.ignoreCheck=function(Q){return to&&Q.type==="touchmove"&&z()||M>1.05&&Q.type!=="touchstart"||c.isGesturing||Q.touches&&Q.touches.length>1},e.onPress=function(){w=!1;var Q=M;M=wu((It.visualViewport&&It.visualViewport.scale||1)/S),X.pause(),Q!==M&&um(h,M>1.01?!0:n?!1:"x"),J=E(),ne=v(),b(),D=la},e.onRelease=e.onGestureStart=function(Q,F){if(v.offset&&C(),!F)se.restart(!0);else{Ut.cache++;var oe=N(),T,K;n&&(T=E(),K=T+oe*.05*-Q.velocityX/.227,oe*=Dy(E,T,K,Kr(h,Ci)),X.vars.scrollX=L(K)),T=v(),K=T+oe*.05*-Q.velocityY/.227,oe*=Dy(v,T,K,Kr(h,Vn)),X.vars.scrollY=k(K),X.invalidate().duration(oe).play(.01),(to&&X.vars.scrollY>=d||T>=d-1)&&Ke.to({},{onUpdate:ee,duration:oe})}u&&u(Q)},e.onWheel=function(){X._ts&&X.pause(),di()-x>1e3&&(D=0,x=di())},e.onChange=function(Q,F,oe,T,K){if(la!==D&&b(),F&&n&&E(L(T[2]===F?J+(Q.startX-Q.x):E()+F-T[1])),oe){v.offset&&C();var _e=K[2]===oe,Pe=_e?ne+Q.startY-Q.y:v()+oe-K[1],ye=k(Pe);_e&&Pe!==ye&&(ne+=ye-Pe),v(ye)}(oe||F)&&Es()},e.onEnable=function(){um(h,n?!1:"x"),bt.addEventListener("refresh",ee),$n(It,"resize",ee),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=E.smooth=!1),I.enable()},e.onDisable=function(){um(h,!0),qn(It,"resize",ee),bt.removeEventListener("refresh",ee),I.kill()},e.lockAxis=e.lockAxis!==!1,c=new Rn(e),c.iOS=to,to&&!v()&&v(1),to&&Ke.ticker.add(Wr),se=c._dc,X=Ke.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qM(v,v(),function(){return X.pause()})},onUpdate:Es,onComplete:se.vars.onComplete}),c};bt.sort=function(o){if(pi(o))return Nt.sort(o);var e=It.pageYOffset||0;return bt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+It.innerHeight}),Nt.sort(o||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};bt.observe=function(o){return new Rn(o)};bt.normalizeScroll=function(o){if(typeof o>"u")return Ti;if(o===!0&&Ti)return Ti.enable();if(o===!1){Ti&&Ti.kill(),Ti=o;return}var e=o instanceof Rn?o:WD(o);return Ti&&Ti.target===e.target&&Ti.kill(),da(e.target)&&(Ti=e),e};bt.core={_getVelocityProp:yg,_inputObserver:$M,_scrollers:Ut,_proxies:Zr,bridge:{ss:function(){Tr||pa("scrollStart"),Tr=di()},ref:function(){return fi}}};OM()&&Ke.registerPlugin(bt);pn.registerPlugin(bt);const XD=o=>{At.useEffect(()=>{if(!o.current)return;const e=pn.context(()=>{pn.timeline({delay:.5}).fromTo(".hero-title",{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out"}).fromTo(".hero-subtitle",{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.5").fromTo(".hero-cta",{opacity:0,y:20},{opacity:1,y:0,duration:.6,ease:"power3.out"},"-=0.3").fromTo(".hero-social a",{opacity:0,scale:0},{opacity:1,scale:1,duration:.5,stagger:.1,ease:"back.out(1.7)"},"-=0.2"),pn.to(".hero-social",{yPercent:20,ease:"none",scrollTrigger:{trigger:o.current,start:"top top",end:"bottom top",scrub:!0}})},o);return()=>e.revert()},[o])},jD=()=>{const o=At.useRef(null),e=At.useRef(null);XD(o);const t=()=>{const n=document.getElementById("projects");n&&n.scrollIntoView({behavior:"smooth"})};return j.jsxs("section",{ref:o,className:"min-h-screen flex items-center justify-center relative overflow-hidden",children:[j.jsx("div",{className:"container mx-auto px-4 text-center z-10",children:j.jsxs("div",{className:"max-w-4xl mx-auto",children:[j.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-6 gradient-text hero-title",children:"Muhammad Asad Haye"}),j.jsx("p",{className:"text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto hero-subtitle",children:"Marketer • E-Commerce Strategist • AI Enthusiast"}),j.jsx("div",{className:"mb-12 hero-cta",children:j.jsxs(ys,{onClick:t,size:"lg",className:"glass-effect hover:scale-105 transition-transform duration-300",children:["View My Work",j.jsx(hy,{className:"ml-2 h-4 w-4"})]})}),j.jsxs("div",{className:"flex justify-center space-x-6 hero-social",children:[j.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full glass-effect hover:scale-110 transition-transform duration-300",children:j.jsx(Ld,{className:"h-6 w-6"})}),j.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full glass-effect hover:scale-110 transition-transform duration-300",children:j.jsx(r_,{className:"h-6 w-6"})}),j.jsx("a",{href:"mailto:asad@example.com",className:"p-3 rounded-full glass-effect hover:scale-110 transition-transform duration-300",children:j.jsx(s_,{className:"h-6 w-6"})})]})]})}),j.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:j.jsx(hy,{className:"h-6 w-6 text-muted-foreground"})}),j.jsx("div",{ref:e,className:"hero-canvas"})]})};function Ed({className:o,...e}){return j.jsx("div",{"data-slot":"card",className:yo("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",o),...e})}function KM({className:o,...e}){return j.jsx("div",{"data-slot":"card-header",className:yo("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",o),...e})}function ZM({className:o,...e}){return j.jsx("div",{"data-slot":"card-title",className:yo("leading-none font-semibold",o),...e})}function Td({className:o,...e}){return j.jsx("div",{"data-slot":"card-content",className:yo("px-6",o),...e})}const YD=pM("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Cg({className:o,variant:e,asChild:t=!1,...n}){const r=t?fM:"span";return j.jsx(r,{"data-slot":"badge",className:yo(YD({variant:e}),o),...n})}pn.registerPlugin(bt);const qD=()=>{const o=At.useRef(null),e=At.useRef(null),[t,n]=At.useState([{label:"Projects Completed",value:0,target:75},{label:"Years Experience",value:0,target:6},{label:"Happy Clients",value:0,target:45},{label:"Technologies Mastered",value:0,target:20}]),r=[{name:"React/Next.js",level:95},{name:"Node.js/Express",level:90},{name:"E-Commerce Platforms",level:92},{name:"AI/ML Integration",level:85},{name:"Digital Marketing",level:88},{name:"Three.js/GSAP",level:80}];return At.useEffect(()=>{const a=pn.context(()=>{bt.create({trigger:e.current,start:"top 80%",onEnter:()=>{t.forEach((u,c)=>{pn.to(u,{value:u.target,duration:2,ease:"power2.out",onUpdate:function(){n(d=>{const h=[...d];return h[c]={...h[c],value:Math.round(this.targets()[0].value)},h})}})})}}),pn.fromTo(".skill-bar-fill",{width:"0%"},{width:(u,c)=>c.dataset.level+"%",duration:1.5,ease:"power2.out",stagger:.2,scrollTrigger:{trigger:".skills-container",start:"top 80%"}}),pn.fromTo(".fade-in-up",{opacity:0,y:50},{opacity:1,y:0,duration:.8,stagger:.2,scrollTrigger:{trigger:o.current,start:"top 80%"}})},o);return()=>a.revert()},[]),j.jsx("section",{ref:o,id:"about",className:"py-20 bg-muted/50",children:j.jsx("div",{className:"container mx-auto px-4",children:j.jsxs("div",{className:"max-w-6xl mx-auto",children:[j.jsxs("div",{className:"text-center mb-16 fade-in-up",children:[j.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6",children:"About Me"}),j.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"I'm a passionate full-stack developer and e-commerce strategist who specializes in building scalable digital solutions that drive business growth and enhance user experiences."})]}),j.jsx("div",{ref:e,className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-16",children:t.map((a,u)=>j.jsx(Ed,{className:"text-center fade-in-up glass-effect",children:j.jsxs(Td,{className:"p-6",children:[j.jsxs("div",{className:"text-3xl md:text-4xl font-bold gradient-text mb-2",children:[a.value,"+"]}),j.jsx("div",{className:"text-sm text-muted-foreground",children:a.label})]})},u))}),j.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[j.jsxs("div",{className:"fade-in-up",children:[j.jsx("h3",{className:"text-2xl font-bold mb-6",children:"My Journey"}),j.jsxs("div",{className:"space-y-4 text-muted-foreground",children:[j.jsx("p",{children:"Started as a curious developer with a passion for creating digital solutions that make a difference. Over the years, I've specialized in full-stack development, e-commerce strategy, and AI integration, helping businesses transform their digital presence."}),j.jsx("p",{children:"My expertise spans from building robust web applications with React and Node.js to developing comprehensive e-commerce solutions using platforms like Shopify, WooCommerce, and MedusaJS. I also integrate AI tools to enhance user experiences and automate business processes."}),j.jsx("p",{children:"When I'm not coding, you'll find me exploring the latest AI developments, optimizing digital marketing strategies, or contributing to open-source projects that benefit the developer community."})]}),j.jsxs("div",{className:"mt-6",children:[j.jsx("h4",{className:"text-lg font-semibold mb-3",children:"Core Technologies"}),j.jsx("div",{className:"flex flex-wrap gap-2",children:["React","Next.js","Node.js","Shopify","WooCommerce","MedusaJS","AI/ML","GSAP","Three.js","Adobe Suite","Canva","HuggingFace"].map(a=>j.jsx(Cg,{variant:"secondary",className:"hover:scale-105 transition-transform",children:a},a))})]})]}),j.jsxs("div",{className:"skills-container fade-in-up",children:[j.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Skills & Expertise"}),j.jsx("div",{className:"space-y-6",children:r.map((a,u)=>j.jsxs("div",{children:[j.jsxs("div",{className:"flex justify-between mb-2",children:[j.jsx("span",{className:"font-medium",children:a.name}),j.jsxs("span",{className:"text-muted-foreground",children:[a.level,"%"]})]}),j.jsx("div",{className:"h-2 bg-muted rounded-full overflow-hidden skill-bar",children:j.jsx("div",{className:"h-full bg-gradient-to-r from-coral-accent to-dark-navy skill-bar-fill","data-level":a.level,style:{backgroundColor:"var(--coral-accent)"}})})]},u))})]})]})]})})})};pn.registerPlugin(bt);const $D=()=>{const o=At.useRef(null),[e,t]=At.useState("all"),n=[{id:1,title:"E-Commerce Platform with AI",description:"Full-stack e-commerce solution with AI-powered product recommendations and automated customer service.",image:"/api/placeholder/400/250",category:"ecommerce",technologies:["Next.js","Node.js","Shopify API","OpenAI","Stripe"],liveUrl:"#",githubUrl:"#",featured:!0},{id:2,title:"Digital Marketing Dashboard",description:"Comprehensive analytics dashboard for tracking multi-channel marketing campaigns and ROI.",image:"/api/placeholder/400/250",category:"marketing",technologies:["React","D3.js","Node.js","Google Analytics API"],liveUrl:"#",githubUrl:"#",featured:!0},{id:3,title:"AI Content Generator",description:"AI-powered content creation tool for e-commerce product descriptions and marketing copy.",image:"/api/placeholder/400/250",category:"ai",technologies:["React","HuggingFace","OpenAI API","Node.js"],liveUrl:"#",githubUrl:"#",featured:!1},{id:4,title:"MedusaJS Store Builder",description:"Custom e-commerce store builder using MedusaJS with advanced customization options.",image:"/api/placeholder/400/250",category:"ecommerce",technologies:["MedusaJS","React","PostgreSQL","Redis"],liveUrl:"#",githubUrl:"#",featured:!1},{id:5,title:"Interactive Portfolio Site",description:"Award-winning portfolio website with Three.js animations and GSAP interactions.",image:"/api/placeholder/400/250",category:"web",technologies:["Three.js","GSAP","React","WebGL"],liveUrl:"#",githubUrl:"#",featured:!0},{id:6,title:"WooCommerce Automation Suite",description:"Complete automation solution for WooCommerce stores with inventory and order management.",image:"/api/placeholder/400/250",category:"ecommerce",technologies:["WordPress","WooCommerce","PHP","MySQL"],liveUrl:"#",githubUrl:"#",featured:!1}],r=[{id:"all",label:"All Projects"},{id:"ecommerce",label:"E-Commerce"},{id:"ai",label:"AI Development"},{id:"marketing",label:"Digital Marketing"},{id:"web",label:"Web Development"}],a=e==="all"?n:n.filter(c=>c.category===e);At.useEffect(()=>{const c=pn.context(()=>{pn.from(".proj-card",{y:30,opacity:0,stagger:.12,duration:.7,ease:"power2.out",scrollTrigger:{trigger:o.current,start:"top 75%"}}),pn.fromTo(".section-title",{opacity:0,y:30},{opacity:1,y:0,duration:.8,scrollTrigger:{trigger:o.current,start:"top 80%"}})},o);return()=>c.revert()},[a]);const u=c=>{t(c),pn.fromTo(".project-card",{opacity:0,scale:.8},{opacity:1,scale:1,duration:.4,stagger:.05})};return j.jsx("section",{ref:o,id:"projects",className:"py-20",children:j.jsx("div",{className:"container mx-auto px-4",children:j.jsxs("div",{className:"max-w-6xl mx-auto",children:[j.jsxs("div",{className:"text-center mb-16 section-title",children:[j.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6",children:"Featured Projects"}),j.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"A showcase of my latest work in full-stack development, e-commerce solutions, AI integration, and digital marketing."})]}),j.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:r.map(c=>j.jsx(ys,{variant:e===c.id?"default":"outline",onClick:()=>u(c.id),className:"transition-all duration-300 hover:scale-105",children:c.label},c.id))}),j.jsx("div",{className:"projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:a.map(c=>j.jsxs(Ed,{className:`proj-card overflow-hidden hover:shadow-2xl transition-all duration-300 ${c.featured?"ring-2 ring-primary/20":""}`,children:[j.jsxs("div",{className:"relative overflow-hidden",children:[j.jsx("img",{src:c.image,alt:c.title,className:"w-full h-48 object-cover transition-transform duration-300 hover:scale-110"}),c.featured&&j.jsx(Cg,{className:"absolute top-4 left-4 bg-primary",children:"Featured"}),j.jsxs("div",{className:"absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4",children:[j.jsx(ys,{size:"sm",variant:"secondary",asChild:!0,children:j.jsxs("a",{href:c.liveUrl,target:"_blank",rel:"noopener noreferrer",children:[j.jsx(vD,{className:"h-4 w-4 mr-2"}),"Demo"]})}),j.jsx(ys,{size:"sm",variant:"secondary",asChild:!0,children:j.jsxs("a",{href:c.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[j.jsx(Ld,{className:"h-4 w-4 mr-2"}),"Code"]})})]})]}),j.jsx(KM,{children:j.jsxs(ZM,{className:"flex items-center justify-between",children:[c.title,j.jsx(my,{className:"h-4 w-4 text-muted-foreground"})]})}),j.jsxs(Td,{children:[j.jsx("p",{className:"text-muted-foreground mb-4",children:c.description}),j.jsx("div",{className:"flex flex-wrap gap-2",children:c.technologies.map(d=>j.jsx(Cg,{variant:"secondary",className:"text-xs",children:d},d))})]})]},c.id))}),j.jsx("div",{className:"text-center mt-12",children:j.jsxs(ys,{size:"lg",variant:"outline",className:"hover:scale-105 transition-transform",children:["View All Projects",j.jsx(my,{className:"ml-2 h-4 w-4"})]})})]})})})};function cm({className:o,type:e,...t}){return j.jsx("input",{type:e,"data-slot":"input",className:yo("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",o),...t})}function KD({className:o,...e}){return j.jsx("textarea",{"data-slot":"textarea",className:yo("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",o),...e})}pn.registerPlugin(bt);const ZD=()=>{const o=At.useRef(null),e=At.useRef(null),[t,n]=At.useState({name:"",email:"",subject:"",message:""}),[r,a]=At.useState(!1),u=[{icon:s_,label:"Email",value:"asad@asadhaye.com",href:"mailto:asad@asadhaye.com"},{icon:gD,label:"Phone",value:"+92 (300) 123-4567",href:"tel:+923001234567"},{icon:dD,label:"Location",value:"Karachi, Pakistan",href:"#"}],c=[{icon:Ld,label:"GitHub",href:"https://github.com/asadhaye"},{icon:r_,label:"LinkedIn",href:"https://linkedin.com/in/asadhaye"},{icon:MD,label:"Twitter",href:"https://twitter.com/asadhaye"}];At.useEffect(()=>{const p=pn.context(()=>{document.querySelector(".contact-card")&&pn.fromTo(".contact-card",{opacity:0,y:50},{opacity:1,y:0,duration:.6,stagger:.1,scrollTrigger:{trigger:o.current,start:"top 80%"}}),e.current&&pn.fromTo(e.current,{opacity:0,x:50},{opacity:1,x:0,duration:.8,scrollTrigger:{trigger:e.current,start:"top 80%"}}),document.querySelector(".section-title")&&pn.fromTo(".section-title",{opacity:0,y:30},{opacity:1,y:0,duration:.8,scrollTrigger:{trigger:o.current,start:"top 80%"}})},o);return()=>p.revert()},[]);const d=p=>{const{name:g,value:_}=p.target;n(v=>({...v,[g]:_}))},h=async p=>{p.preventDefault(),a(!0),await new Promise(g=>setTimeout(g,2e3)),n({name:"",email:"",subject:"",message:""}),a(!1),pn.fromTo(e.current,{scale:1},{scale:1.05,duration:.2,yoyo:!0,repeat:1})};return j.jsx("section",{ref:o,id:"contact",className:"py-20 bg-muted/50",children:j.jsx("div",{className:"container mx-auto px-4",children:j.jsxs("div",{className:"max-w-6xl mx-auto",children:[j.jsxs("div",{className:"text-center mb-16 section-title",children:[j.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6",children:"Get In Touch"}),j.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"Ready to transform your digital presence? Let's collaborate and create something extraordinary together."})]}),j.jsxs("div",{className:"grid lg:grid-cols-2 gap-12",children:[j.jsxs("div",{className:"space-y-8",children:[j.jsxs("div",{children:[j.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Let's Connect"}),j.jsx("p",{className:"text-muted-foreground mb-8",children:"I'm always excited to work on new projects and collaborate with innovative businesses. Whether you need a full-stack solution, e-commerce platform, AI integration, or digital marketing strategy, I'd love to discuss how we can achieve your goals."})]}),j.jsx("div",{className:"space-y-4",children:u.map((p,g)=>j.jsx(Ed,{className:"contact-card glass-effect hover:scale-105 transition-transform",children:j.jsx(Td,{className:"p-6",children:j.jsxs("div",{className:"flex items-center space-x-4",children:[j.jsx("div",{className:"p-3 rounded-full bg-primary/10",children:j.jsx(p.icon,{className:"h-6 w-6 text-primary"})}),j.jsxs("div",{children:[j.jsx("div",{className:"font-medium",children:p.label}),j.jsx("a",{href:p.href,className:"text-muted-foreground hover:text-primary transition-colors",children:p.value})]})]})})},g))}),j.jsxs("div",{children:[j.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Follow Me"}),j.jsx("div",{className:"flex space-x-4",children:c.map((p,g)=>j.jsx("a",{href:p.href,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full glass-effect hover:scale-110 transition-transform","aria-label":p.label,children:j.jsx(p.icon,{className:"h-5 w-5"})},g))})]})]}),j.jsxs(Ed,{ref:e,className:"glass-effect",children:[j.jsx(KM,{children:j.jsx(ZM,{children:"Send a Message"})}),j.jsx(Td,{children:j.jsxs("form",{onSubmit:h,className:"space-y-6",children:[j.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[j.jsx("div",{children:j.jsx(cm,{name:"name",placeholder:"Your Name",value:t.name,onChange:d,required:!0,className:"transition-all duration-300 focus:scale-105"})}),j.jsx("div",{children:j.jsx(cm,{name:"email",type:"email",placeholder:"Your Email",value:t.email,onChange:d,required:!0,className:"transition-all duration-300 focus:scale-105"})})]}),j.jsx("div",{children:j.jsx(cm,{name:"subject",placeholder:"Subject",value:t.subject,onChange:d,required:!0,className:"transition-all duration-300 focus:scale-105"})}),j.jsx("div",{children:j.jsx(KD,{name:"message",placeholder:"Your Message",rows:6,value:t.message,onChange:d,required:!0,className:"transition-all duration-300 focus:scale-105"})}),j.jsx(ys,{type:"submit",size:"lg",disabled:r,className:"w-full hover:scale-105 transition-transform",children:r?"Sending...":j.jsxs(j.Fragment,{children:["Send Message",j.jsx(yD,{className:"ml-2 h-4 w-4"})]})})]})})]})]})]})})})},QD=()=>{const o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return j.jsx("footer",{className:"bg-card border-t",children:j.jsx("div",{className:"container mx-auto px-4 py-12",children:j.jsxs("div",{className:"max-w-6xl mx-auto",children:[j.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-8",children:[j.jsxs("div",{children:[j.jsx("h3",{className:"text-2xl font-bold gradient-text mb-4",children:"AsadHaye.com"}),j.jsx("p",{className:"text-muted-foreground mb-4",children:"Full-Stack Developer & E-Commerce Strategist specializing in AI integration and digital marketing solutions."}),j.jsxs("div",{className:"flex space-x-4",children:[j.jsx("a",{href:"https://github.com/asadhaye",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-muted transition-colors",children:j.jsx(Ld,{className:"h-5 w-5"})}),j.jsx("a",{href:"https://linkedin.com/in/asadhaye",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-muted transition-colors",children:j.jsx(r_,{className:"h-5 w-5"})}),j.jsx("a",{href:"mailto:asad@asadhaye.com",className:"p-2 rounded-full hover:bg-muted transition-colors",children:j.jsx(s_,{className:"h-5 w-5"})})]})]}),j.jsxs("div",{children:[j.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),j.jsx("div",{className:"space-y-2",children:["Home","About","Projects","Contact"].map(e=>j.jsx("button",{onClick:()=>{const t=document.querySelector(`#${e.toLowerCase()}`);t&&t.scrollIntoView({behavior:"smooth"})},className:"block text-muted-foreground hover:text-primary transition-colors",children:e},e))})]}),j.jsxs("div",{children:[j.jsx("h4",{className:"font-semibold mb-4",children:"Get In Touch"}),j.jsxs("div",{className:"space-y-2 text-muted-foreground",children:[j.jsx("p",{children:"asad@asadhaye.com"}),j.jsx("p",{children:"+92 (300) 123-4567"}),j.jsx("p",{children:"Karachi, Pakistan"})]})]})]}),j.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between pt-8 border-t",children:[j.jsxs("div",{className:"flex items-center text-muted-foreground mb-4 md:mb-0",children:[j.jsx("span",{children:"Made with"}),j.jsx(lD,{className:"h-4 w-4 mx-1 text-red-500"}),j.jsx("span",{children:"by Muhammad Asad Haye"})]}),j.jsxs("div",{className:"flex items-center space-x-4",children:[j.jsx("span",{className:"text-muted-foreground text-sm",children:"© 2024 All rights reserved"}),j.jsx(ys,{onClick:o,size:"sm",variant:"outline",className:"hover:scale-105 transition-transform",children:j.jsx(iD,{className:"h-4 w-4"})})]})]})]})})})};pn.registerPlugin(bt);function JD(){return At.useEffect(()=>{document.documentElement.classList.remove("dark")},[]),j.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[j.jsx(aP,{}),j.jsx(wD,{}),j.jsxs("main",{children:[j.jsx("section",{id:"home",children:j.jsx(jD,{})}),j.jsx(qD,{}),j.jsx($D,{}),j.jsx(ZD,{})]}),j.jsx(QD,{})]})}O1.createRoot(document.getElementById("root")).render(j.jsx(At.StrictMode,{children:j.jsx(JD,{})}));
