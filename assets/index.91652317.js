var x=Object.defineProperty;var i=(e,o)=>x(e,"name",{value:o,configurable:!0});import{r as s}from"./index.9190da70.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}i(p,"_extends");function $(e,o){typeof e=="function"?e(o):e!=null&&(e.current=o)}i($,"$6ed0406888f73fc4$var$setRef");function d(...e){return o=>e.forEach(n=>$(n,o))}i(d,"$6ed0406888f73fc4$export$43e446d32b3d21af");function S(...e){return s.exports.useCallback(d(...e),e)}i(S,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const h=s.exports.forwardRef((e,o)=>{const{children:n,...t}=e,l=s.exports.Children.toArray(n),r=l.find(b);if(r){const c=r.props.children,a=l.map(f=>f===r?s.exports.Children.count(c)>1?s.exports.Children.only(null):s.exports.isValidElement(c)?c.props.children:null:f);return s.exports.createElement(u,p({},t,{ref:o}),s.exports.isValidElement(c)?s.exports.cloneElement(c,void 0,a):null)}return s.exports.createElement(u,p({},t,{ref:o}),n)});h.displayName="Slot";const u=s.exports.forwardRef((e,o)=>{const{children:n,...t}=e;return s.exports.isValidElement(n)?s.exports.cloneElement(n,{...y(t,n.props),ref:d(o,n.ref)}):s.exports.Children.count(n)>1?s.exports.Children.only(null):null});u.displayName="SlotClone";const v=i(({children:e})=>s.exports.createElement(s.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function b(e){return s.exports.isValidElement(e)&&e.type===v}i(b,"$5e63c961fc1ce211$var$isSlottable");function y(e,o){const n={...o};for(const t in o){const l=e[t],r=o[t];/^on[A-Z]/.test(t)?n[t]=(...a)=>{r==null||r(...a),l==null||l(...a)}:t==="style"?n[t]={...l,...r}:t==="className"&&(n[t]=[l,r].filter(Boolean).join(" "))}return{...e,...n}}i(y,"$5e63c961fc1ce211$var$mergeProps");var m={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var o={}.hasOwnProperty;function n(){for(var t=[],l=0;l<arguments.length;l++){var r=arguments[l];if(!!r){var c=typeof r;if(c==="string"||c==="number")t.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&t.push(a)}}else if(c==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var f in r)o.call(r,f)&&r[f]&&t.push(f)}}}return t.join(" ")}i(n,"classNames"),e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(m);const w=m.exports;export{h as $,p as _,S as a,w as c};
//# sourceMappingURL=index.91652317.js.map