!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.echarts={})}(this,function(t){"use strict";function e(t,e){ey[t]=e}function i(t){if(null==t||"object"!=typeof t)return t;var e=t,n=qv.call(t);if("[object Array]"===n){e=[];for(var o=0,a=t.length;o<a;o++)e[o]=i(t[o])}else if(jv[n]){var r=t.constructor;if(t.constructor.from)e=r.from(t);else{e=new r(t.length);for(var o=0,a=t.length;o<a;o++)e[o]=i(t[o])}}else if(!Xv[n]&&!P(t)&&!S(t)){e={};for(var s in t)t.hasOwnProperty(s)&&(e[s]=i(t[s]))}return e}function n(t,e,o){if(!b(e)||!b(t))return o?i(e):t;for(var a in e)if(e.hasOwnProperty(a)){var r=t[a],s=e[a];!b(s)||!b(r)||y(s)||y(r)||S(s)||S(r)||w(s)||w(r)||P(s)||P(r)?!o&&a in t||(t[a]=i(e[a],!0)):n(r,s,o)}return t}function o(t,e){for(var i=t[0],o=1,a=t.length;o<a;o++)i=n(i,t[o],e);return i}function a(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function r(t,e,i){for(var n in e)e.hasOwnProperty(n)&&(i?null!=e[n]:null==t[n])&&(t[n]=e[n]);return t}function s(){return ny||(ny=iy().getContext("2d")),ny}function l(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i}return-1}function h(t,e){function i(){}var n=t.prototype;i.prototype=e.prototype,t.prototype=new i;for(var o in n)t.prototype[o]=n[o];t.prototype.constructor=t,t.superClass=e}function u(t,e,i){r(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,i)}function c(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function d(t,e,i){if(t&&e)if(t.forEach&&t.forEach===$v)t.forEach(e,i);else if(t.length===+t.length)for(var n=0,o=t.length;n<o;n++)e.call(i,t[n],n,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(i,t[a],a,t)}function f(t,e,i){if(t&&e){if(t.map&&t.map===Qv)return t.map(e,i);for(var n=[],o=0,a=t.length;o<a;o++)n.push(e.call(i,t[o],o,t));return n}}function p(t,e,i,n){if(t&&e){if(t.reduce&&t.reduce===ty)return t.reduce(e,i,n);for(var o=0,a=t.length;o<a;o++)i=e.call(n,i,t[o],o,t);return i}}function g(t,e,i){if(t&&e){if(t.filter&&t.filter===Kv)return t.filter(e,i);for(var n=[],o=0,a=t.length;o<a;o++)e.call(i,t[o],o,t)&&n.push(t[o]);return n}}function m(t,e){var i=Jv.call(arguments,2);return function(){return t.apply(e,i.concat(Jv.call(arguments)))}}function v(t){var e=Jv.call(arguments,1);return function(){return t.apply(this,e.concat(Jv.call(arguments)))}}function y(t){return"[object Array]"===qv.call(t)}function x(t){return"function"==typeof t}function _(t){return"[object String]"===qv.call(t)}function b(t){var e=typeof t;return"function"===e||!!t&&"object"==e}function w(t){return!!Xv[qv.call(t)]}function S(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function M(t){return t!==t}function I(t){for(var e=0,i=arguments.length;e<i;e++)if(null!=arguments[e])return arguments[e]}function T(t,e){return null!=t?t:e}function A(t,e,i){return null!=t?t:null!=e?e:i}function C(){return Function.call.apply(Jv,arguments)}function D(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function L(t,e){if(!t)throw new Error(e)}function k(t){t[oy]=!0}function P(t){return t[oy]}function O(t){t&&d(t,function(t,e){this.set(e,t)},this)}function z(t){return new O(t)}function N(){}function E(t,e){var i=new ry(2);return null==t&&(t=0),null==e&&(e=0),i[0]=t,i[1]=e,i}function R(t,e){return t[0]=e[0],t[1]=e[1],t}function V(t){var e=new ry(2);return e[0]=t[0],e[1]=t[1],e}function B(t,e,i){return t[0]=e,t[1]=i,t}function G(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t}function W(t,e,i,n){return t[0]=e[0]+i[0]*n,t[1]=e[1]+i[1]*n,t}function H(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t}function F(t){return Math.sqrt(Z(t))}function Z(t){return t[0]*t[0]+t[1]*t[1]}function U(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t}function X(t,e){var i=F(e);return 0===i?(t[0]=0,t[1]=0):(t[0]=e[0]/i,t[1]=e[1]/i),t}function j(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function q(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}function Y(t,e,i,n){return t[0]=e[0]+n*(i[0]-e[0]),t[1]=e[1]+n*(i[1]-e[1]),t}function $(t,e,i){var n=e[0],o=e[1];return t[0]=i[0]*n+i[2]*o+i[4],t[1]=i[1]*n+i[3]*o+i[5],t}function K(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t}function J(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t}function Q(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function tt(t,e){return{target:t,topTarget:e&&e.topTarget}}function et(t,e,i){return{type:t,event:i,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:i.zrX,offsetY:i.zrY,gestureEvent:i.gestureEvent,pinchX:i.pinchX,pinchY:i.pinchY,pinchScale:i.pinchScale,wheelDelta:i.zrDelta,zrByTouch:i.zrByTouch,which:i.which}}function it(){}function nt(t,e,i){if(t[t.rectHover?"rectContain":"contain"](e,i)){for(var n,o=t;o;){if(o.clipPath&&!o.clipPath.contain(e,i))return!1;o.silent&&(n=!0),o=o.parent}return!n||py}return!1}function ot(){var t=new vy(6);return at(t),t}function at(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function rt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function st(t,e,i){var n=e[0]*i[0]+e[2]*i[1],o=e[1]*i[0]+e[3]*i[1],a=e[0]*i[2]+e[2]*i[3],r=e[1]*i[2]+e[3]*i[3],s=e[0]*i[4]+e[2]*i[5]+e[4],l=e[1]*i[4]+e[3]*i[5]+e[5];return t[0]=n,t[1]=o,t[2]=a,t[3]=r,t[4]=s,t[5]=l,t}function lt(t,e,i){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+i[0],t[5]=e[5]+i[1],t}function ht(t,e,i){var n=e[0],o=e[2],a=e[4],r=e[1],s=e[3],l=e[5],h=Math.sin(i),u=Math.cos(i);return t[0]=n*u+r*h,t[1]=-n*h+r*u,t[2]=o*u+s*h,t[3]=-o*h+u*s,t[4]=u*a+h*l,t[5]=u*l-h*a,t}function ut(t,e,i){var n=i[0],o=i[1];return t[0]=e[0]*n,t[1]=e[1]*o,t[2]=e[2]*n,t[3]=e[3]*o,t[4]=e[4]*n,t[5]=e[5]*o,t}function ct(t,e){var i=e[0],n=e[2],o=e[4],a=e[1],r=e[3],s=e[5],l=i*r-a*n;return l?(l=1/l,t[0]=r*l,t[1]=-a*l,t[2]=-n*l,t[3]=i*l,t[4]=(n*s-r*o)*l,t[5]=(a*o-i*s)*l,t):null}function dt(t){return t>_y||t<-_y}function ft(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function pt(t){return(t=Math.round(t))<0?0:t>255?255:t}function gt(t){return(t=Math.round(t))<0?0:t>360?360:t}function mt(t){return t<0?0:t>1?1:t}function vt(t){return pt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function yt(t){return mt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function xt(t,e,i){return i<0?i+=1:i>1&&(i-=1),6*i<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}function _t(t,e,i){return t+(e-t)*i}function bt(t,e,i,n,o){return t[0]=e,t[1]=i,t[2]=n,t[3]=o,t}function wt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function St(t,e){Py&&wt(Py,e),Py=ky.put(t,Py||e.slice())}function Mt(t,e){if(t){e=e||[];var i=ky.get(t);if(i)return wt(e,i);var n=(t+="").replace(/ /g,"").toLowerCase();if(n in Ly)return wt(e,Ly[n]),St(t,e),e;if("#"!==n.charAt(0)){var o=n.indexOf("("),a=n.indexOf(")");if(-1!==o&&a+1===n.length){var r=n.substr(0,o),s=n.substr(o+1,a-(o+1)).split(","),l=1;switch(r){case"rgba":if(4!==s.length)return void bt(e,0,0,0,1);l=yt(s.pop());case"rgb":return 3!==s.length?void bt(e,0,0,0,1):(bt(e,vt(s[0]),vt(s[1]),vt(s[2]),l),St(t,e),e);case"hsla":return 4!==s.length?void bt(e,0,0,0,1):(s[3]=yt(s[3]),It(s,e),St(t,e),e);case"hsl":return 3!==s.length?void bt(e,0,0,0,1):(It(s,e),St(t,e),e);default:return}}bt(e,0,0,0,1)}else{if(4===n.length)return(h=parseInt(n.substr(1),16))>=0&&h<=4095?(bt(e,(3840&h)>>4|(3840&h)>>8,240&h|(240&h)>>4,15&h|(15&h)<<4,1),St(t,e),e):void bt(e,0,0,0,1);if(7===n.length){var h=parseInt(n.substr(1),16);return h>=0&&h<=16777215?(bt(e,(16711680&h)>>16,(65280&h)>>8,255&h,1),St(t,e),e):void bt(e,0,0,0,1)}}}}function It(t,e){var i=(parseFloat(t[0])%360+360)%360/360,n=yt(t[1]),o=yt(t[2]),a=o<=.5?o*(n+1):o+n-o*n,r=2*o-a;return e=e||[],bt(e,pt(255*xt(r,a,i+1/3)),pt(255*xt(r,a,i)),pt(255*xt(r,a,i-1/3)),1),4===t.length&&(e[3]=t[3]),e}function Tt(t){if(t){var e,i,n=t[0]/255,o=t[1]/255,a=t[2]/255,r=Math.min(n,o,a),s=Math.max(n,o,a),l=s-r,h=(s+r)/2;if(0===l)e=0,i=0;else{i=h<.5?l/(s+r):l/(2-s-r);var u=((s-n)/6+l/2)/l,c=((s-o)/6+l/2)/l,d=((s-a)/6+l/2)/l;n===s?e=d-c:o===s?e=1/3+u-d:a===s&&(e=2/3+c-u),e<0&&(e+=1),e>1&&(e-=1)}var f=[360*e,i,h];return null!=t[3]&&f.push(t[3]),f}}function At(t,e){var i=Mt(t);if(i){for(var n=0;n<3;n++)i[n]=e<0?i[n]*(1-e)|0:(255-i[n])*e+i[n]|0;return Ot(i,4===i.length?"rgba":"rgb")}}function Ct(t){var e=Mt(t);if(e)return((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1)}function Dt(t,e,i){if(e&&e.length&&t>=0&&t<=1){i=i||[];var n=t*(e.length-1),o=Math.floor(n),a=Math.ceil(n),r=e[o],s=e[a],l=n-o;return i[0]=pt(_t(r[0],s[0],l)),i[1]=pt(_t(r[1],s[1],l)),i[2]=pt(_t(r[2],s[2],l)),i[3]=mt(_t(r[3],s[3],l)),i}}function Lt(t,e,i){if(e&&e.length&&t>=0&&t<=1){var n=t*(e.length-1),o=Math.floor(n),a=Math.ceil(n),r=Mt(e[o]),s=Mt(e[a]),l=n-o,h=Ot([pt(_t(r[0],s[0],l)),pt(_t(r[1],s[1],l)),pt(_t(r[2],s[2],l)),mt(_t(r[3],s[3],l))],"rgba");return i?{color:h,leftIndex:o,rightIndex:a,value:n}:h}}function kt(t,e,i,n){if(t=Mt(t))return t=Tt(t),null!=e&&(t[0]=gt(e)),null!=i&&(t[1]=yt(i)),null!=n&&(t[2]=yt(n)),Ot(It(t),"rgba")}function Pt(t,e){if((t=Mt(t))&&null!=e)return t[3]=mt(e),Ot(t,"rgba")}function Ot(t,e){if(t&&t.length){var i=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(i+=","+t[3]),e+"("+i+")"}}function zt(t,e){return t[e]}function Nt(t,e,i){t[e]=i}function Et(t,e,i){return(e-t)*i+t}function Rt(t,e,i){return i>.5?e:t}function Vt(t,e,i,n,o){var a=t.length;if(1==o)for(s=0;s<a;s++)n[s]=Et(t[s],e[s],i);else for(var r=a&&t[0].length,s=0;s<a;s++)for(var l=0;l<r;l++)n[s][l]=Et(t[s][l],e[s][l],i)}function Bt(t,e,i){var n=t.length,o=e.length;if(n!==o)if(n>o)t.length=o;else for(r=n;r<o;r++)t.push(1===i?e[r]:Ey.call(e[r]));for(var a=t[0]&&t[0].length,r=0;r<t.length;r++)if(1===i)isNaN(t[r])&&(t[r]=e[r]);else for(var s=0;s<a;s++)isNaN(t[r][s])&&(t[r][s]=e[r][s])}function Gt(t,e,i){if(t===e)return!0;var n=t.length;if(n!==e.length)return!1;if(1===i){for(a=0;a<n;a++)if(t[a]!==e[a])return!1}else for(var o=t[0].length,a=0;a<n;a++)for(var r=0;r<o;r++)if(t[a][r]!==e[a][r])return!1;return!0}function Wt(t,e,i,n,o,a,r,s,l){var h=t.length;if(1==l)for(c=0;c<h;c++)s[c]=Ht(t[c],e[c],i[c],n[c],o,a,r);else for(var u=t[0].length,c=0;c<h;c++)for(var d=0;d<u;d++)s[c][d]=Ht(t[c][d],e[c][d],i[c][d],n[c][d],o,a,r)}function Ht(t,e,i,n,o,a,r){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*r+(-3*(e-i)-2*s-l)*a+s*o+e}function Ft(t){if(c(t)){var e=t.length;if(c(t[0])){for(var i=[],n=0;n<e;n++)i.push(Ey.call(t[n]));return i}return Ey.call(t)}return t}function Zt(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function Ut(t){var e=t[t.length-1].value;return c(e&&e[0])?2:1}function Xt(t,e,i,n,o,a){var r=t._getter,s=t._setter,l="spline"===e,h=n.length;if(h){var u,d=c(n[0].value),f=!1,p=!1,g=d?Ut(n):0;n.sort(function(t,e){return t.time-e.time}),u=n[h-1].time;for(var m=[],v=[],y=n[0].value,x=!0,_=0;_<h;_++){m.push(n[_].time/u);var b=n[_].value;if(d&&Gt(b,y,g)||!d&&b===y||(x=!1),y=b,"string"==typeof b){var w=Mt(b);w?(b=w,f=!0):p=!0}v.push(b)}if(a||!x){for(var S=v[h-1],_=0;_<h-1;_++)d?Bt(v[_],S,g):!isNaN(v[_])||isNaN(S)||p||f||(v[_]=S);d&&Bt(r(t._target,o),S,g);var M,I,T,A,C,D,L=0,k=0;if(f)var P=[0,0,0,0];var O=new ft({target:t._target,life:u,loop:t._loop,delay:t._delay,onframe:function(t,e){var i;if(e<0)i=0;else if(e<k){for(i=M=Math.min(L+1,h-1);i>=0&&!(m[i]<=e);i--);i=Math.min(i,h-2)}else{for(i=L;i<h&&!(m[i]>e);i++);i=Math.min(i-1,h-2)}L=i,k=e;var n=m[i+1]-m[i];if(0!==n)if(I=(e-m[i])/n,l)if(A=v[i],T=v[0===i?i:i-1],C=v[i>h-2?h-1:i+1],D=v[i>h-3?h-1:i+2],d)Wt(T,A,C,D,I,I*I,I*I*I,r(t,o),g);else{if(f)a=Wt(T,A,C,D,I,I*I,I*I*I,P,1),a=Zt(P);else{if(p)return Rt(A,C,I);a=Ht(T,A,C,D,I,I*I,I*I*I)}s(t,o,a)}else if(d)Vt(v[i],v[i+1],I,r(t,o),g);else{var a;if(f)Vt(v[i],v[i+1],I,P,1),a=Zt(P);else{if(p)return Rt(v[i],v[i+1],I);a=Et(v[i],v[i+1],I)}s(t,o,a)}},ondestroy:i});return e&&"spline"!==e&&(O.easing=e),O}}}function jt(t,e,i,n){i<0&&(t+=i,i=-i),n<0&&(e+=n,n=-n),this.x=t,this.y=e,this.width=i,this.height=n}function qt(t){for(var e=0;t>=qy;)e|=1&t,t>>=1;return t+e}function Yt(t,e,i,n){var o=e+1;if(o===i)return 1;if(n(t[o++],t[e])<0){for(;o<i&&n(t[o],t[o-1])<0;)o++;$t(t,e,o)}else for(;o<i&&n(t[o],t[o-1])>=0;)o++;return o-e}function $t(t,e,i){for(i--;e<i;){var n=t[e];t[e++]=t[i],t[i--]=n}}function Kt(t,e,i,n,o){for(n===e&&n++;n<i;n++){for(var a,r=t[n],s=e,l=n;s<l;)o(r,t[a=s+l>>>1])<0?l=a:s=a+1;var h=n-s;switch(h){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;h>0;)t[s+h]=t[s+h-1],h--}t[s]=r}}function Jt(t,e,i,n,o,a){var r=0,s=0,l=1;if(a(t,e[i+o])>0){for(s=n-o;l<s&&a(t,e[i+o+l])>0;)r=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),r+=o,l+=o}else{for(s=o+1;l<s&&a(t,e[i+o-l])<=0;)r=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var h=r;r=o-l,l=o-h}for(r++;r<l;){var u=r+(l-r>>>1);a(t,e[i+u])>0?r=u+1:l=u}return l}function Qt(t,e,i,n,o,a){var r=0,s=0,l=1;if(a(t,e[i+o])<0){for(s=o+1;l<s&&a(t,e[i+o-l])<0;)r=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var h=r;r=o-l,l=o-h}else{for(s=n-o;l<s&&a(t,e[i+o+l])>=0;)r=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),r+=o,l+=o}for(r++;r<l;){var u=r+(l-r>>>1);a(t,e[i+u])<0?l=u:r=u+1}return l}function te(t,e){function i(i){var s=a[i],h=r[i],u=a[i+1],c=r[i+1];r[i]=h+c,i===l-3&&(a[i+1]=a[i+2],r[i+1]=r[i+2]),l--;var d=Qt(t[u],t,s,h,0,e);s+=d,0!==(h-=d)&&0!==(c=Jt(t[s+h-1],t,u,c,c-1,e))&&(h<=c?n(s,h,u,c):o(s,h,u,c))}function n(i,n,o,a){var r=0;for(r=0;r<n;r++)h[r]=t[i+r];var l=0,u=o,c=i;if(t[c++]=t[u++],0!=--a)if(1!==n){for(var d,f,p,g=s;;){d=0,f=0,p=!1;do{if(e(t[u],h[l])<0){if(t[c++]=t[u++],f++,d=0,0==--a){p=!0;break}}else if(t[c++]=h[l++],d++,f=0,1==--n){p=!0;break}}while((d|f)<g);if(p)break;do{if(0!==(d=Qt(t[u],h,l,n,0,e))){for(r=0;r<d;r++)t[c+r]=h[l+r];if(c+=d,l+=d,(n-=d)<=1){p=!0;break}}if(t[c++]=t[u++],0==--a){p=!0;break}if(0!==(f=Jt(h[l],t,u,a,0,e))){for(r=0;r<f;r++)t[c+r]=t[u+r];if(c+=f,u+=f,0===(a-=f)){p=!0;break}}if(t[c++]=h[l++],1==--n){p=!0;break}g--}while(d>=Yy||f>=Yy);if(p)break;g<0&&(g=0),g+=2}if((s=g)<1&&(s=1),1===n){for(r=0;r<a;r++)t[c+r]=t[u+r];t[c+a]=h[l]}else{if(0===n)throw new Error;for(r=0;r<n;r++)t[c+r]=h[l+r]}}else{for(r=0;r<a;r++)t[c+r]=t[u+r];t[c+a]=h[l]}else for(r=0;r<n;r++)t[c+r]=h[l+r]}function o(i,n,o,a){var r=0;for(r=0;r<a;r++)h[r]=t[o+r];var l=i+n-1,u=a-1,c=o+a-1,d=0,f=0;if(t[c--]=t[l--],0!=--n)if(1!==a){for(var p=s;;){var g=0,m=0,v=!1;do{if(e(h[u],t[l])<0){if(t[c--]=t[l--],g++,m=0,0==--n){v=!0;break}}else if(t[c--]=h[u--],m++,g=0,1==--a){v=!0;break}}while((g|m)<p);if(v)break;do{if(0!=(g=n-Qt(h[u],t,i,n,n-1,e))){for(n-=g,f=(c-=g)+1,d=(l-=g)+1,r=g-1;r>=0;r--)t[f+r]=t[d+r];if(0===n){v=!0;break}}if(t[c--]=h[u--],1==--a){v=!0;break}if(0!=(m=a-Jt(t[l],h,0,a,a-1,e))){for(a-=m,f=(c-=m)+1,d=(u-=m)+1,r=0;r<m;r++)t[f+r]=h[d+r];if(a<=1){v=!0;break}}if(t[c--]=t[l--],0==--n){v=!0;break}p--}while(g>=Yy||m>=Yy);if(v)break;p<0&&(p=0),p+=2}if((s=p)<1&&(s=1),1===a){for(f=(c-=n)+1,d=(l-=n)+1,r=n-1;r>=0;r--)t[f+r]=t[d+r];t[c]=h[u]}else{if(0===a)throw new Error;for(d=c-(a-1),r=0;r<a;r++)t[d+r]=h[r]}}else{for(f=(c-=n)+1,d=(l-=n)+1,r=n-1;r>=0;r--)t[f+r]=t[d+r];t[c]=h[u]}else for(d=c-(a-1),r=0;r<a;r++)t[d+r]=h[r]}var a,r,s=Yy,l=0,h=[];a=[],r=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&r[t-1]<=r[t]+r[t+1]||t>=2&&r[t-2]<=r[t]+r[t-1])r[t-1]<r[t+1]&&t--;else if(r[t]>r[t+1])break;i(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&r[t-1]<r[t+1]&&t--,i(t)}},this.pushRun=function(t,e){a[l]=t,r[l]=e,l+=1}}function ee(t,e,i,n){i||(i=0),n||(n=t.length);var o=n-i;if(!(o<2)){var a=0;if(o<qy)return a=Yt(t,i,n,e),void Kt(t,i,n,i+a,e);var r=new te(t,e),s=qt(o);do{if((a=Yt(t,i,n,e))<s){var l=o;l>s&&(l=s),Kt(t,i,i+l,i+a,e),a=l}r.pushRun(i,a),r.mergeRuns(),o-=a,i+=a}while(0!==o);r.forceMergeRuns()}}function ie(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function ne(t,e,i){var n=null==e.x?0:e.x,o=null==e.x2?1:e.x2,a=null==e.y?0:e.y,r=null==e.y2?0:e.y2;return e.global||(n=n*i.width+i.x,o=o*i.width+i.x,a=a*i.height+i.y,r=r*i.height+i.y),t.createLinearGradient(n,a,o,r)}function oe(t,e,i){var n=i.width,o=i.height,a=Math.min(n,o),r=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(r=r*n+i.x,s=s*o+i.y,l*=a),t.createRadialGradient(r,s,0,r,s,l)}function ae(){return!1}function re(t,e,i){var n=iy(),o=e.getWidth(),a=e.getHeight(),r=n.style;return r.position="absolute",r.left=0,r.top=0,r.width=o+"px",r.height=a+"px",n.width=o*i,n.height=a*i,n.setAttribute("data-zr-dom-id",t),n}function se(t){if("string"==typeof t){var e=ax.get(t);return e&&e.image}return t}function le(t,e,i,n,o){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!i)return e;var a=ax.get(t),r={hostEl:i,cb:n,cbPayload:o};return a?!ue(e=a.image)&&a.pending.push(r):(!e&&(e=new Image),e.onload=he,ax.put(t,e.__cachedImgObj={image:e,pending:[r]}),e.src=e.__zrImageSrc=t),e}return t}return e}function he(){var t=this.__cachedImgObj;this.onload=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var i=t.pending[e],n=i.cb;n&&n(this,i.cbPayload),i.hostEl.dirty()}t.pending.length=0}function ue(t){return t&&t.width&&t.height}function ce(t,e){var i=t+":"+(e=e||ux);if(rx[i])return rx[i];for(var n=(t+"").split("\n"),o=0,a=0,r=n.length;a<r;a++)o=Math.max(Se(n[a],e).width,o);return sx>lx&&(sx=0,rx={}),sx++,rx[i]=o,o}function de(t,e,i,n,o,a,r){return a?pe(t,e,i,n,o,a,r):fe(t,e,i,n,o,r)}function fe(t,e,i,n,o,a){var r=Me(t,e,o,a),s=ce(t,e);o&&(s+=o[1]+o[3]);var l=r.outerHeight,h=new jt(ge(0,s,i),me(0,l,n),s,l);return h.lineHeight=r.lineHeight,h}function pe(t,e,i,n,o,a,r){var s=Ie(t,{rich:a,truncate:r,font:e,textAlign:i,textPadding:o}),l=s.outerWidth,h=s.outerHeight;return new jt(ge(0,l,i),me(0,h,n),l,h)}function ge(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function me(t,e,i){return"middle"===i?t-=e/2:"bottom"===i&&(t-=e),t}function ve(t,e,i){var n=e.x,o=e.y,a=e.height,r=e.width,s=a/2,l="left",h="top";switch(t){case"left":n-=i,o+=s,l="right",h="middle";break;case"right":n+=i+r,o+=s,h="middle";break;case"top":n+=r/2,o-=i,l="center",h="bottom";break;case"bottom":n+=r/2,o+=a+i,l="center";break;case"inside":n+=r/2,o+=s,l="center",h="middle";break;case"insideLeft":n+=i,o+=s,h="middle";break;case"insideRight":n+=r-i,o+=s,l="right",h="middle";break;case"insideTop":n+=r/2,o+=i,l="center";break;case"insideBottom":n+=r/2,o+=a-i,l="center",h="bottom";break;case"insideTopLeft":n+=i,o+=i;break;case"insideTopRight":n+=r-i,o+=i,l="right";break;case"insideBottomLeft":n+=i,o+=a-i,h="bottom";break;case"insideBottomRight":n+=r-i,o+=a-i,l="right",h="bottom"}return{x:n,y:o,textAlign:l,textVerticalAlign:h}}function ye(t,e,i,n,o){if(!e)return"";var a=(t+"").split("\n");o=xe(e,i,n,o);for(var r=0,s=a.length;r<s;r++)a[r]=_e(a[r],o);return a.join("\n")}function xe(t,e,i,n){(n=a({},n)).font=e;var i=T(i,"...");n.maxIterations=T(n.maxIterations,2);var o=n.minChar=T(n.minChar,0);n.cnCharWidth=ce("国",e);var r=n.ascCharWidth=ce("a",e);n.placeholder=T(n.placeholder,"");for(var s=t=Math.max(0,t-1),l=0;l<o&&s>=r;l++)s-=r;var h=ce(i);return h>s&&(i="",h=0),s=t-h,n.ellipsis=i,n.ellipsisWidth=h,n.contentWidth=s,n.containerWidth=t,n}function _e(t,e){var i=e.containerWidth,n=e.font,o=e.contentWidth;if(!i)return"";var a=ce(t,n);if(a<=i)return t;for(var r=0;;r++){if(a<=o||r>=e.maxIterations){t+=e.ellipsis;break}var s=0===r?be(t,o,e.ascCharWidth,e.cnCharWidth):a>0?Math.floor(t.length*o/a):0;a=ce(t=t.substr(0,s),n)}return""===t&&(t=e.placeholder),t}function be(t,e,i,n){for(var o=0,a=0,r=t.length;a<r&&o<e;a++){var s=t.charCodeAt(a);o+=0<=s&&s<=127?i:n}return a}function we(t){return ce("国",t)}function Se(t,e){return cx.measureText(t,e)}function Me(t,e,i,n){null!=t&&(t+="");var o=we(e),a=t?t.split("\n"):[],r=a.length*o,s=r;if(i&&(s+=i[0]+i[2]),t&&n){var l=n.outerHeight,h=n.outerWidth;if(null!=l&&s>l)t="",a=[];else if(null!=h)for(var u=xe(h-(i?i[1]+i[3]:0),e,n.ellipsis,{minChar:n.minChar,placeholder:n.placeholder}),c=0,d=a.length;c<d;c++)a[c]=_e(a[c],u)}return{lines:a,height:r,outerHeight:s,lineHeight:o}}function Ie(t,e){var i={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return i;for(var n,o=hx.lastIndex=0;null!=(n=hx.exec(t));){var a=n.index;a>o&&Te(i,t.substring(o,a)),Te(i,n[2],n[1]),o=hx.lastIndex}o<t.length&&Te(i,t.substring(o,t.length));var r=i.lines,s=0,l=0,h=[],u=e.textPadding,c=e.truncate,d=c&&c.outerWidth,f=c&&c.outerHeight;u&&(null!=d&&(d-=u[1]+u[3]),null!=f&&(f-=u[0]+u[2]));for(L=0;L<r.length;L++){for(var p=r[L],g=0,m=0,v=0;v<p.tokens.length;v++){var y=(k=p.tokens[v]).styleName&&e.rich[k.styleName]||{},x=k.textPadding=y.textPadding,_=k.font=y.font||e.font,b=k.textHeight=T(y.textHeight,we(_));if(x&&(b+=x[0]+x[2]),k.height=b,k.lineHeight=A(y.textLineHeight,e.textLineHeight,b),k.textAlign=y&&y.textAlign||e.textAlign,k.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=f&&s+k.lineHeight>f)return{lines:[],width:0,height:0};k.textWidth=ce(k.text,_);var w=y.textWidth,S=null==w||"auto"===w;if("string"==typeof w&&"%"===w.charAt(w.length-1))k.percentWidth=w,h.push(k),w=0;else{if(S){w=k.textWidth;var M=y.textBackgroundColor,I=M&&M.image;I&&ue(I=se(I))&&(w=Math.max(w,I.width*b/I.height))}var C=x?x[1]+x[3]:0;w+=C;var D=null!=d?d-m:null;null!=D&&D<w&&(!S||D<C?(k.text="",k.textWidth=w=0):(k.text=ye(k.text,D-C,_,c.ellipsis,{minChar:c.minChar}),k.textWidth=ce(k.text,_),w=k.textWidth+C))}m+=k.width=w,y&&(g=Math.max(g,k.lineHeight))}p.width=m,p.lineHeight=g,s+=g,l=Math.max(l,m)}i.outerWidth=i.width=T(e.textWidth,l),i.outerHeight=i.height=T(e.textHeight,s),u&&(i.outerWidth+=u[1]+u[3],i.outerHeight+=u[0]+u[2]);for(var L=0;L<h.length;L++){var k=h[L],P=k.percentWidth;k.width=parseInt(P,10)/100*l}return i}function Te(t,e,i){for(var n=""===e,o=e.split("\n"),a=t.lines,r=0;r<o.length;r++){var s=o[r],l={styleName:i,text:s,isLineHolder:!s&&!n};if(r)a.push({tokens:[l]});else{var h=(a[a.length-1]||(a[0]={tokens:[]})).tokens,u=h.length;1===u&&h[0].isLineHolder?h[0]=l:(s||!u||n)&&h.push(l)}}}function Ae(t){return(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ")||t.textFont||t.font}function Ce(t,e){var i,n,o,a,r=e.x,s=e.y,l=e.width,h=e.height,u=e.r;l<0&&(r+=l,l=-l),h<0&&(s+=h,h=-h),"number"==typeof u?i=n=o=a=u:u instanceof Array?1===u.length?i=n=o=a=u[0]:2===u.length?(i=o=u[0],n=a=u[1]):3===u.length?(i=u[0],n=a=u[1],o=u[2]):(i=u[0],n=u[1],o=u[2],a=u[3]):i=n=o=a=0;var c;i+n>l&&(i*=l/(c=i+n),n*=l/c),o+a>l&&(o*=l/(c=o+a),a*=l/c),n+o>h&&(n*=h/(c=n+o),o*=h/c),i+a>h&&(i*=h/(c=i+a),a*=h/c),t.moveTo(r+i,s),t.lineTo(r+l-n,s),0!==n&&t.quadraticCurveTo(r+l,s,r+l,s+n),t.lineTo(r+l,s+h-o),0!==o&&t.quadraticCurveTo(r+l,s+h,r+l-o,s+h),t.lineTo(r+a,s+h),0!==a&&t.quadraticCurveTo(r,s+h,r,s+h-a),t.lineTo(r,s+i),0!==i&&t.quadraticCurveTo(r,s,r+i,s)}function De(t){return Le(t),d(t.rich,Le),t}function Le(t){if(t){t.font=Ae(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||dx[e]?e:"left";var i=t.textVerticalAlign||t.textBaseline;"center"===i&&(i="middle"),t.textVerticalAlign=null==i||fx[i]?i:"top",t.textPadding&&(t.textPadding=D(t.textPadding))}}function ke(t,e,i,n,o){n.rich?Oe(t,e,i,n,o):Pe(t,e,i,n,o)}function Pe(t,e,i,n,o){var a=We(e,"font",n.font||ux),r=n.textPadding,s=t.__textCotentBlock;s&&!t.__dirty||(s=t.__textCotentBlock=Me(i,a,r,n.truncate));var l=s.outerHeight,h=s.lines,u=s.lineHeight,c=Ge(l,n,o),d=c.baseX,f=c.baseY,p=c.textAlign,g=c.textVerticalAlign;Ne(e,n,o,d,f);var m=me(f,l,g),v=d,y=m,x=Re(n);if(x||r){var _=ce(i,a);r&&(_+=r[1]+r[3]);var b=ge(d,_,p);x&&Ve(t,e,n,b,m,_,l),r&&(v=Ue(d,p,r),y+=r[0])}We(e,"textAlign",p||"left"),We(e,"textBaseline","middle"),We(e,"shadowBlur",n.textShadowBlur||0),We(e,"shadowColor",n.textShadowColor||"transparent"),We(e,"shadowOffsetX",n.textShadowOffsetX||0),We(e,"shadowOffsetY",n.textShadowOffsetY||0),y+=u/2;var w=n.textStrokeWidth,S=He(n.textStroke,w),M=Fe(n.textFill);S&&(We(e,"lineWidth",w),We(e,"strokeStyle",S)),M&&We(e,"fillStyle",M);for(var I=0;I<h.length;I++)S&&e.strokeText(h[I],v,y),M&&e.fillText(h[I],v,y),y+=u}function Oe(t,e,i,n,o){var a=t.__textCotentBlock;a&&!t.__dirty||(a=t.__textCotentBlock=Ie(i,n)),ze(t,e,a,n,o)}function ze(t,e,i,n,o){var a=i.width,r=i.outerWidth,s=i.outerHeight,l=n.textPadding,h=Ge(s,n,o),u=h.baseX,c=h.baseY,d=h.textAlign,f=h.textVerticalAlign;Ne(e,n,o,u,c);var p=ge(u,r,d),g=me(c,s,f),m=p,v=g;l&&(m+=l[3],v+=l[0]);var y=m+a;Re(n)&&Ve(t,e,n,p,g,r,s);for(var x=0;x<i.lines.length;x++){for(var _,b=i.lines[x],w=b.tokens,S=w.length,M=b.lineHeight,I=b.width,T=0,A=m,C=y,D=S-1;T<S&&(!(_=w[T]).textAlign||"left"===_.textAlign);)Ee(t,e,_,n,M,v,A,"left"),I-=_.width,A+=_.width,T++;for(;D>=0&&"right"===(_=w[D]).textAlign;)Ee(t,e,_,n,M,v,C,"right"),I-=_.width,C-=_.width,D--;for(A+=(a-(A-m)-(y-C)-I)/2;T<=D;)Ee(t,e,_=w[T],n,M,v,A+_.width/2,"center"),A+=_.width,T++;v+=M}}function Ne(t,e,i,n,o){if(i&&e.textRotation){var a=e.textOrigin;"center"===a?(n=i.width/2+i.x,o=i.height/2+i.y):a&&(n=a[0]+i.x,o=a[1]+i.y),t.translate(n,o),t.rotate(-e.textRotation),t.translate(-n,-o)}}function Ee(t,e,i,n,o,a,r,s){var l=n.rich[i.styleName]||{},h=i.textVerticalAlign,u=a+o/2;"top"===h?u=a+i.height/2:"bottom"===h&&(u=a+o-i.height/2),!i.isLineHolder&&Re(l)&&Ve(t,e,l,"right"===s?r-i.width:"center"===s?r-i.width/2:r,u-i.height/2,i.width,i.height);var c=i.textPadding;c&&(r=Ue(r,s,c),u-=i.height/2-c[2]-i.textHeight/2),We(e,"shadowBlur",A(l.textShadowBlur,n.textShadowBlur,0)),We(e,"shadowColor",l.textShadowColor||n.textShadowColor||"transparent"),We(e,"shadowOffsetX",A(l.textShadowOffsetX,n.textShadowOffsetX,0)),We(e,"shadowOffsetY",A(l.textShadowOffsetY,n.textShadowOffsetY,0)),We(e,"textAlign",s),We(e,"textBaseline","middle"),We(e,"font",i.font||ux);var d=He(l.textStroke||n.textStroke,p),f=Fe(l.textFill||n.textFill),p=T(l.textStrokeWidth,n.textStrokeWidth);d&&(We(e,"lineWidth",p),We(e,"strokeStyle",d),e.strokeText(i.text,r,u)),f&&(We(e,"fillStyle",f),e.fillText(i.text,r,u))}function Re(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function Ve(t,e,i,n,o,a,r){var s=i.textBackgroundColor,l=i.textBorderWidth,h=i.textBorderColor,u=_(s);if(We(e,"shadowBlur",i.textBoxShadowBlur||0),We(e,"shadowColor",i.textBoxShadowColor||"transparent"),We(e,"shadowOffsetX",i.textBoxShadowOffsetX||0),We(e,"shadowOffsetY",i.textBoxShadowOffsetY||0),u||l&&h){e.beginPath();var c=i.textBorderRadius;c?Ce(e,{x:n,y:o,width:a,height:r,r:c}):e.rect(n,o,a,r),e.closePath()}if(u)We(e,"fillStyle",s),e.fill();else if(b(s)){var d=s.image;(d=le(d,null,t,Be,s))&&ue(d)&&e.drawImage(d,n,o,a,r)}l&&h&&(We(e,"lineWidth",l),We(e,"strokeStyle",h),e.stroke())}function Be(t,e){e.image=t}function Ge(t,e,i){var n=e.x||0,o=e.y||0,a=e.textAlign,r=e.textVerticalAlign;if(i){var s=e.textPosition;if(s instanceof Array)n=i.x+Ze(s[0],i.width),o=i.y+Ze(s[1],i.height);else{var l=ve(s,i,e.textDistance);n=l.x,o=l.y,a=a||l.textAlign,r=r||l.textVerticalAlign}var h=e.textOffset;h&&(n+=h[0],o+=h[1])}return{baseX:n,baseY:o,textAlign:a,textVerticalAlign:r}}function We(t,e,i){return t[e]=i,t[e]}function He(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function Fe(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ze(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function Ue(t,e,i){return"right"===e?t-i[1]:"center"===e?t+i[3]/2-i[1]/2:t+i[3]}function Xe(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function je(t){t=t||{},Fy.call(this,t);for(var e in t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new Jy(t.style,this),this._rect=null,this.__clipPaths=[]}function qe(t){je.call(this,t)}function Ye(t){return parseInt(t,10)}function $e(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function Ke(t){t.__unusedCount++}function Je(t){1==t.__unusedCount&&t.clear()}function Qe(t,e,i){return mx.copy(t.getBoundingRect()),t.transform&&mx.applyTransform(t.transform),vx.width=e,vx.height=i,!mx.intersect(vx)}function ti(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!0}function ei(t,e){for(var i=0;i<t.length;i++){var n=t[i];n.setTransform(e),e.beginPath(),n.buildPath(e,n.shape),e.clip(),n.restoreTransform(e)}}function ii(t,e){var i=document.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}function ni(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function oi(t,e,i,n){return i=i||{},n||!Uv.canvasSupported?ai(t,e,i):Uv.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(i.zrX=e.layerX,i.zrY=e.layerY):null!=e.offsetX?(i.zrX=e.offsetX,i.zrY=e.offsetY):ai(t,e,i),i}function ai(t,e,i){var n=ni(t);i.zrX=e.clientX-n.left,i.zrY=e.clientY-n.top}function ri(t,e,i){if(null!=(e=e||window.event).zrX)return e;var n=e.type;if(n&&n.indexOf("touch")>=0){var o="touchend"!=n?e.targetTouches[0]:e.changedTouches[0];o&&oi(t,o,e,i)}else oi(t,e,e,i),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;var a=e.button;return null==e.which&&void 0!==a&&_x.test(e.type)&&(e.which=1&a?1:2&a?3:4&a?2:0),e}function si(t,e,i){xx?t.addEventListener(e,i):t.attachEvent("on"+e,i)}function li(t,e,i){xx?t.removeEventListener(e,i):t.detachEvent("on"+e,i)}function hi(t){return t.which>1}function ui(t){var e=t[1][0]-t[0][0],i=t[1][1]-t[0][1];return Math.sqrt(e*e+i*i)}function ci(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function di(t){return"mousewheel"===t&&Uv.browser.firefox?"DOMMouseScroll":t}function fi(t,e,i){var n=t._gestureMgr;"start"===i&&n.clear();var o=n.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===i&&n.clear(),o){var a=o.type;e.gestureEvent=a,t.handler.dispatchToElement({target:o.target},a,o.event)}}function pi(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function gi(t){var e=t.pointerType;return"pen"===e||"touch"===e}function mi(t){function e(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}d(Tx,function(e){t._handlers[e]=m(Dx[e],t)}),d(Cx,function(e){t._handlers[e]=m(Dx[e],t)}),d(Ix,function(i){t._handlers[i]=e(Dx[i],t)})}function vi(t){function e(e,i){d(e,function(e){si(t,di(e),i._handlers[e])},i)}fy.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new Sx,this._handlers={},mi(this),Uv.pointerEventsSupported?e(Cx,this):(Uv.touchEventsSupported&&e(Tx,this),e(Ix,this))}function yi(t,e){var i=new zx(Fv(),t,e);return Ox[i.id]=i,i}function xi(t,e){Px[t]=e}function _i(t){delete Ox[t]}function bi(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function wi(t,e,i,n){var o=e[1]-e[0],a=i[1]-i[0];if(0===o)return 0===a?i[0]:(i[0]+i[1])/2;if(n)if(o>0){if(t<=e[0])return i[0];if(t>=e[1])return i[1]}else{if(t>=e[0])return i[0];if(t<=e[1])return i[1]}else{if(t===e[0])return i[0];if(t===e[1])return i[1]}return(t-e[0])/o*a+i[0]}function Si(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?bi(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function Mi(t,e,i){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),i?t:+t}function Ii(t){return t.sort(function(t,e){return t-e}),t}function Ti(t){if(t=+t,isNaN(t))return 0;for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Ai(t){var e=t.toString(),i=e.indexOf("e");if(i>0){var n=+e.slice(i+1);return n<0?-n:0}var o=e.indexOf(".");return o<0?0:e.length-1-o}function Ci(t,e){var i=Math.log,n=Math.LN10,o=Math.floor(i(t[1]-t[0])/n),a=Math.round(i(Math.abs(e[1]-e[0]))/n),r=Math.min(Math.max(-o+a,0),20);return isFinite(r)?r:20}function Di(t,e,i){if(!t[e])return 0;var n=p(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===n)return 0;for(var o=Math.pow(10,i),a=f(t,function(t){return(isNaN(t)?0:t)/n*o*100}),r=100*o,s=f(a,function(t){return Math.floor(t)}),l=p(s,function(t,e){return t+e},0),h=f(a,function(t,e){return t-s[e]});l<r;){for(var u=Number.NEGATIVE_INFINITY,c=null,d=0,g=h.length;d<g;++d)h[d]>u&&(u=h[d],c=d);++s[c],h[c]=0,++l}return s[e]/o}function Li(t){var e=2*Math.PI;return(t%e+e)%e}function ki(t){return t>-Ex&&t<Ex}function Pi(t){if(t instanceof Date)return t;if("string"==typeof t){var e=Vx.exec(t);if(!e)return new Date(NaN);if(e[8]){var i=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(i-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,i,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))}function Oi(t){return Math.pow(10,zi(t))}function zi(t){return Math.floor(Math.log(t)/Math.LN10)}function Ni(t,e){var i,n=zi(t),o=Math.pow(10,n),a=t/o;return i=e?a<1.5?1:a<2.5?2:a<4?3:a<7?5:10:a<1?1:a<2?2:a<3?3:a<5?5:10,t=i*o,n>=-20?+t.toFixed(n<0?-n:0):t}function Ei(t){function e(t,i,n){return t.interval[n]<i.interval[n]||t.interval[n]===i.interval[n]&&(t.close[n]-i.close[n]==(n?-1:1)||!n&&e(t,i,1))}t.sort(function(t,i){return e(t,i,0)?-1:1});for(var i=-1/0,n=1,o=0;o<t.length;){for(var a=t[o].interval,r=t[o].close,s=0;s<2;s++)a[s]<=i&&(a[s]=i,r[s]=s?1:1-n),i=a[s],n=r[s];a[0]===a[1]&&r[0]*r[1]!=1?t.splice(o,1):o++}return t}function Ri(t){return t-parseFloat(t)>=0}function Vi(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function Bi(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t}function Gi(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Wi(t,e,i){y(e)||(e=[e]);var n=e.length;if(!n)return"";for(var o=e[0].$vars||[],a=0;a<o.length;a++){var r=Wx[a],s=Hx(r,0);t=t.replace(Hx(r),i?Gi(s):s)}for(var l=0;l<n;l++)for(var h=0;h<o.length;h++){s=e[l][o[h]];t=t.replace(Hx(Wx[h],l),i?Gi(s):s)}return t}function Hi(t,e,i){return d(e,function(e,n){t=t.replace("{"+n+"}",i?Gi(e):e)}),t}function Fi(t,e){return t?'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+Gi(t)+";"+(e||"")+'"></span>':""}function Zi(t,e,i){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var n=Pi(e),o=i?"UTC":"",a=n["get"+o+"FullYear"](),r=n["get"+o+"Month"]()+1,s=n["get"+o+"Date"](),l=n["get"+o+"Hours"](),h=n["get"+o+"Minutes"](),u=n["get"+o+"Seconds"]();return t=t.replace("MM",Fx(r)).replace("M",r).replace("yyyy",a).replace("yy",a%100).replace("dd",Fx(s)).replace("d",s).replace("hh",Fx(l)).replace("h",l).replace("mm",Fx(h)).replace("m",h).replace("ss",Fx(u)).replace("s",u)}function Ui(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t}function Xi(t,e,i){return t[Yx+e]=i}function ji(t,e){return t[Yx+e]}function qi(t,e){return t.hasOwnProperty(Yx+e)}function Yi(t){var e={main:"",sub:""};return t&&(t=t.split(jx),e.main=t[0]||"",e.sub=t[1]||""),e}function $i(t){L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function Ki(t,e){t.$constructor=t,t.extend=function(t){var e=this,i=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return a(i.prototype,t),i.extend=this.extend,i.superCall=Ji,i.superApply=Qi,h(i,this),i.superClass=e,i}}function Ji(t,e){var i=C(arguments,2);return this.superClass.prototype[e].apply(t,i)}function Qi(t,e,i){return this.superClass.prototype[e].apply(t,i)}function tn(t,e){function i(t){var e=n[t.main];return e&&e[qx]||((e=n[t.main]={})[qx]=!0),e}e=e||{};var n={};if(t.registerClass=function(t,e){return e&&($i(e),(e=Yi(e)).sub?e.sub!==qx&&(i(e)[e.sub]=t):n[e.main]=t),t},t.getClass=function(t,e,i){var o=n[t];if(o&&o[qx]&&(o=e?o[e]:null),i&&!o)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return o},t.getClassesByMainType=function(t){t=Yi(t);var e=[],i=n[t.main];return i&&i[qx]?d(i,function(t,i){i!==qx&&e.push(t)}):e.push(i),e},t.hasClass=function(t){return t=Yi(t),!!n[t.main]},t.getAllClassMainTypes=function(){var t=[];return d(n,function(e,i){t.push(i)}),t},t.hasSubTypes=function(t){t=Yi(t);var e=n[t.main];return e&&e[qx]},t.parseClassType=Yi,e.registerWhenExtend){var o=t.extend;o&&(t.extend=function(e){var i=o.call(this,e);return t.registerClass(i,e.type)})}return t}function en(t){return t>-n_&&t<n_}function nn(t){return t>n_||t<-n_}function on(t,e,i,n,o){var a=1-o;return a*a*(a*t+3*o*e)+o*o*(o*n+3*a*i)}function an(t,e,i,n,o){var a=1-o;return 3*(((e-t)*a+2*(i-e)*o)*a+(n-i)*o*o)}function rn(t,e,i,n,o,a){var r=n+3*(e-i)-t,s=3*(i-2*e+t),l=3*(e-t),h=t-o,u=s*s-3*r*l,c=s*l-9*r*h,d=l*l-3*s*h,f=0;if(en(u)&&en(c))en(s)?a[0]=0:(M=-l/s)>=0&&M<=1&&(a[f++]=M);else{var p=c*c-4*u*d;if(en(p)){var g=c/u,m=-g/2;(M=-s/r+g)>=0&&M<=1&&(a[f++]=M),m>=0&&m<=1&&(a[f++]=m)}else if(p>0){var v=i_(p),y=u*s+1.5*r*(-c+v),x=u*s+1.5*r*(-c-v);(M=(-s-((y=y<0?-e_(-y,r_):e_(y,r_))+(x=x<0?-e_(-x,r_):e_(x,r_))))/(3*r))>=0&&M<=1&&(a[f++]=M)}else{var _=(2*u*s-3*r*c)/(2*i_(u*u*u)),b=Math.acos(_)/3,w=i_(u),S=Math.cos(b),M=(-s-2*w*S)/(3*r),m=(-s+w*(S+a_*Math.sin(b)))/(3*r),I=(-s+w*(S-a_*Math.sin(b)))/(3*r);M>=0&&M<=1&&(a[f++]=M),m>=0&&m<=1&&(a[f++]=m),I>=0&&I<=1&&(a[f++]=I)}}return f}function sn(t,e,i,n,o){var a=6*i-12*e+6*t,r=9*e+3*n-3*t-9*i,s=3*e-3*t,l=0;if(en(r))nn(a)&&(c=-s/a)>=0&&c<=1&&(o[l++]=c);else{var h=a*a-4*r*s;if(en(h))o[0]=-a/(2*r);else if(h>0){var u=i_(h),c=(-a+u)/(2*r),d=(-a-u)/(2*r);c>=0&&c<=1&&(o[l++]=c),d>=0&&d<=1&&(o[l++]=d)}}return l}function ln(t,e,i,n,o,a){var r=(e-t)*o+t,s=(i-e)*o+e,l=(n-i)*o+i,h=(s-r)*o+r,u=(l-s)*o+s,c=(u-h)*o+h;a[0]=t,a[1]=r,a[2]=h,a[3]=c,a[4]=c,a[5]=u,a[6]=l,a[7]=n}function hn(t,e,i,n,o,a,r,s,l,h,u){var c,d,f,p,g,m=.005,v=1/0;s_[0]=l,s_[1]=h;for(var y=0;y<1;y+=.05)l_[0]=on(t,i,o,r,y),l_[1]=on(e,n,a,s,y),(p=uy(s_,l_))<v&&(c=y,v=p);v=1/0;for(var x=0;x<32&&!(m<o_);x++)d=c-m,f=c+m,l_[0]=on(t,i,o,r,d),l_[1]=on(e,n,a,s,d),p=uy(l_,s_),d>=0&&p<v?(c=d,v=p):(h_[0]=on(t,i,o,r,f),h_[1]=on(e,n,a,s,f),g=uy(h_,s_),f<=1&&g<v?(c=f,v=g):m*=.5);return u&&(u[0]=on(t,i,o,r,c),u[1]=on(e,n,a,s,c)),i_(v)}function un(t,e,i,n){var o=1-n;return o*(o*t+2*n*e)+n*n*i}function cn(t,e,i,n){return 2*((1-n)*(e-t)+n*(i-e))}function dn(t,e,i,n,o){var a=t-2*e+i,r=2*(e-t),s=t-n,l=0;if(en(a))nn(r)&&(c=-s/r)>=0&&c<=1&&(o[l++]=c);else{var h=r*r-4*a*s;if(en(h))(c=-r/(2*a))>=0&&c<=1&&(o[l++]=c);else if(h>0){var u=i_(h),c=(-r+u)/(2*a),d=(-r-u)/(2*a);c>=0&&c<=1&&(o[l++]=c),d>=0&&d<=1&&(o[l++]=d)}}return l}function fn(t,e,i){var n=t+i-2*e;return 0===n?.5:(t-e)/n}function pn(t,e,i,n,o){var a=(e-t)*n+t,r=(i-e)*n+e,s=(r-a)*n+a;o[0]=t,o[1]=a,o[2]=s,o[3]=s,o[4]=r,o[5]=i}function gn(t,e,i,n,o,a,r,s,l){var h,u=.005,c=1/0;s_[0]=r,s_[1]=s;for(var d=0;d<1;d+=.05)l_[0]=un(t,i,o,d),l_[1]=un(e,n,a,d),(m=uy(s_,l_))<c&&(h=d,c=m);c=1/0;for(var f=0;f<32&&!(u<o_);f++){var p=h-u,g=h+u;l_[0]=un(t,i,o,p),l_[1]=un(e,n,a,p);var m=uy(l_,s_);if(p>=0&&m<c)h=p,c=m;else{h_[0]=un(t,i,o,g),h_[1]=un(e,n,a,g);var v=uy(h_,s_);g<=1&&v<c?(h=g,c=v):u*=.5}}return l&&(l[0]=un(t,i,o,h),l[1]=un(e,n,a,h)),i_(c)}function mn(t,e,i){if(0!==t.length){var n,o=t[0],a=o[0],r=o[0],s=o[1],l=o[1];for(n=1;n<t.length;n++)o=t[n],a=u_(a,o[0]),r=c_(r,o[0]),s=u_(s,o[1]),l=c_(l,o[1]);e[0]=a,e[1]=s,i[0]=r,i[1]=l}}function vn(t,e,i,n,o,a){o[0]=u_(t,i),o[1]=u_(e,n),a[0]=c_(t,i),a[1]=c_(e,n)}function yn(t,e,i,n,o,a,r,s,l,h){var u,c=sn,d=on,f=c(t,i,o,r,y_);for(l[0]=1/0,l[1]=1/0,h[0]=-1/0,h[1]=-1/0,u=0;u<f;u++){var p=d(t,i,o,r,y_[u]);l[0]=u_(p,l[0]),h[0]=c_(p,h[0])}for(f=c(e,n,a,s,x_),u=0;u<f;u++){var g=d(e,n,a,s,x_[u]);l[1]=u_(g,l[1]),h[1]=c_(g,h[1])}l[0]=u_(t,l[0]),h[0]=c_(t,h[0]),l[0]=u_(r,l[0]),h[0]=c_(r,h[0]),l[1]=u_(e,l[1]),h[1]=c_(e,h[1]),l[1]=u_(s,l[1]),h[1]=c_(s,h[1])}function xn(t,e,i,n,o,a,r,s){var l=fn,h=un,u=c_(u_(l(t,i,o),1),0),c=c_(u_(l(e,n,a),1),0),d=h(t,i,o,u),f=h(e,n,a,c);r[0]=u_(t,o,d),r[1]=u_(e,a,f),s[0]=c_(t,o,d),s[1]=c_(e,a,f)}function _n(t,e,i,n,o,a,r,s,l){var h=K,u=J,c=Math.abs(o-a);if(c%p_<1e-4&&c>1e-4)return s[0]=t-i,s[1]=e-n,l[0]=t+i,void(l[1]=e+n);if(g_[0]=f_(o)*i+t,g_[1]=d_(o)*n+e,m_[0]=f_(a)*i+t,m_[1]=d_(a)*n+e,h(s,g_,m_),u(l,g_,m_),(o%=p_)<0&&(o+=p_),(a%=p_)<0&&(a+=p_),o>a&&!r?a+=p_:o<a&&r&&(o+=p_),r){var d=a;a=o,o=d}for(var f=0;f<a;f+=Math.PI/2)f>o&&(v_[0]=f_(f)*i+t,v_[1]=d_(f)*n+e,h(s,v_,s),u(l,v_,l))}function bn(t,e,i,n,o,a,r){if(0===o)return!1;var s=o,l=0,h=t;if(r>e+s&&r>n+s||r<e-s&&r<n-s||a>t+s&&a>i+s||a<t-s&&a<i-s)return!1;if(t===i)return Math.abs(a-t)<=s/2;var u=(l=(e-n)/(t-i))*a-r+(h=(t*n-i*e)/(t-i));return u*u/(l*l+1)<=s/2*s/2}function wn(t,e,i,n,o,a,r,s,l,h,u){if(0===l)return!1;var c=l;return!(u>e+c&&u>n+c&&u>a+c&&u>s+c||u<e-c&&u<n-c&&u<a-c&&u<s-c||h>t+c&&h>i+c&&h>o+c&&h>r+c||h<t-c&&h<i-c&&h<o-c&&h<r-c)&&hn(t,e,i,n,o,a,r,s,h,u,null)<=c/2}function Sn(t,e,i,n,o,a,r,s,l){if(0===r)return!1;var h=r;return!(l>e+h&&l>n+h&&l>a+h||l<e-h&&l<n-h&&l<a-h||s>t+h&&s>i+h&&s>o+h||s<t-h&&s<i-h&&s<o-h)&&gn(t,e,i,n,o,a,s,l,null)<=h/2}function Mn(t){return(t%=O_)<0&&(t+=O_),t}function In(t,e,i,n,o,a,r,s,l){if(0===r)return!1;var h=r;s-=t,l-=e;var u=Math.sqrt(s*s+l*l);if(u-h>i||u+h<i)return!1;if(Math.abs(n-o)%z_<1e-4)return!0;if(a){var c=n;n=Mn(o),o=Mn(c)}else n=Mn(n),o=Mn(o);n>o&&(o+=z_);var d=Math.atan2(l,s);return d<0&&(d+=z_),d>=n&&d<=o||d+z_>=n&&d+z_<=o}function Tn(t,e,i,n,o,a){if(a>e&&a>n||a<e&&a<n)return 0;if(n===e)return 0;var r=n<e?1:-1,s=(a-e)/(n-e);return 1!==s&&0!==s||(r=n<e?.5:-.5),s*(i-t)+t>o?r:0}function An(t,e){return Math.abs(t-e)<R_}function Cn(){var t=B_[0];B_[0]=B_[1],B_[1]=t}function Dn(t,e,i,n,o,a,r,s,l,h){if(h>e&&h>n&&h>a&&h>s||h<e&&h<n&&h<a&&h<s)return 0;var u=rn(e,n,a,s,h,V_);if(0===u)return 0;for(var c,d,f=0,p=-1,g=0;g<u;g++){var m=V_[g],v=0===m||1===m?.5:1;on(t,i,o,r,m)<l||(p<0&&(p=sn(e,n,a,s,B_),B_[1]<B_[0]&&p>1&&Cn(),c=on(e,n,a,s,B_[0]),p>1&&(d=on(e,n,a,s,B_[1]))),2==p?m<B_[0]?f+=c<e?v:-v:m<B_[1]?f+=d<c?v:-v:f+=s<d?v:-v:m<B_[0]?f+=c<e?v:-v:f+=s<c?v:-v)}return f}function Ln(t,e,i,n,o,a,r,s){if(s>e&&s>n&&s>a||s<e&&s<n&&s<a)return 0;var l=dn(e,n,a,s,V_);if(0===l)return 0;var h=fn(e,n,a);if(h>=0&&h<=1){for(var u=0,c=un(e,n,a,h),d=0;d<l;d++){f=0===V_[d]||1===V_[d]?.5:1;(p=un(t,i,o,V_[d]))<r||(V_[d]<h?u+=c<e?f:-f:u+=a<c?f:-f)}return u}var f=0===V_[0]||1===V_[0]?.5:1,p=un(t,i,o,V_[0]);return p<r?0:a<e?f:-f}function kn(t,e,i,n,o,a,r,s){if((s-=e)>i||s<-i)return 0;h=Math.sqrt(i*i-s*s);V_[0]=-h,V_[1]=h;var l=Math.abs(n-o);if(l<1e-4)return 0;if(l%E_<1e-4){n=0,o=E_;p=a?1:-1;return r>=V_[0]+t&&r<=V_[1]+t?p:0}if(a){var h=n;n=Mn(o),o=Mn(h)}else n=Mn(n),o=Mn(o);n>o&&(o+=E_);for(var u=0,c=0;c<2;c++){var d=V_[c];if(d+t>r){var f=Math.atan2(s,d),p=a?1:-1;f<0&&(f=E_+f),(f>=n&&f<=o||f+E_>=n&&f+E_<=o)&&(f>Math.PI/2&&f<1.5*Math.PI&&(p=-p),u+=p)}}return u}function Pn(t,e,i,n,o){for(var a=0,r=0,s=0,l=0,h=0,u=0;u<t.length;){var c=t[u++];switch(c===N_.M&&u>1&&(i||(a+=Tn(r,s,l,h,n,o))),1==u&&(l=r=t[u],h=s=t[u+1]),c){case N_.M:r=l=t[u++],s=h=t[u++];break;case N_.L:if(i){if(bn(r,s,t[u],t[u+1],e,n,o))return!0}else a+=Tn(r,s,t[u],t[u+1],n,o)||0;r=t[u++],s=t[u++];break;case N_.C:if(i){if(wn(r,s,t[u++],t[u++],t[u++],t[u++],t[u],t[u+1],e,n,o))return!0}else a+=Dn(r,s,t[u++],t[u++],t[u++],t[u++],t[u],t[u+1],n,o)||0;r=t[u++],s=t[u++];break;case N_.Q:if(i){if(Sn(r,s,t[u++],t[u++],t[u],t[u+1],e,n,o))return!0}else a+=Ln(r,s,t[u++],t[u++],t[u],t[u+1],n,o)||0;r=t[u++],s=t[u++];break;case N_.A:var d=t[u++],f=t[u++],p=t[u++],g=t[u++],m=t[u++],v=t[u++],y=(t[u++],1-t[u++]),x=Math.cos(m)*p+d,_=Math.sin(m)*g+f;u>1?a+=Tn(r,s,x,_,n,o):(l=x,h=_);var b=(n-d)*g/p+d;if(i){if(In(d,f,g,m,m+v,y,e,b,o))return!0}else a+=kn(d,f,g,m,m+v,y,b,o);r=Math.cos(m+v)*p+d,s=Math.sin(m+v)*g+f;break;case N_.R:l=r=t[u++],h=s=t[u++];var x=l+t[u++],_=h+t[u++];if(i){if(bn(l,h,x,h,e,n,o)||bn(x,h,x,_,e,n,o)||bn(x,_,l,_,e,n,o)||bn(l,_,l,h,e,n,o))return!0}else a+=Tn(x,h,x,_,n,o),a+=Tn(l,_,l,h,n,o);break;case N_.Z:if(i){if(bn(r,s,l,h,e,n,o))return!0}else a+=Tn(r,s,l,h,n,o);r=l,s=h}}return i||An(s,h)||(a+=Tn(r,s,l,h,n,o)||0),0!==a}function On(t,e,i){return Pn(t,0,!1,e,i)}function zn(t,e,i,n){return Pn(t,e,!0,i,n)}function Nn(t){je.call(this,t),this.path=null}function En(t,e,i,n,o,a,r,s,l,h,u){var c=l*(J_/180),d=K_(c)*(t-i)/2+$_(c)*(e-n)/2,f=-1*$_(c)*(t-i)/2+K_(c)*(e-n)/2,p=d*d/(r*r)+f*f/(s*s);p>1&&(r*=Y_(p),s*=Y_(p));var g=(o===a?-1:1)*Y_((r*r*(s*s)-r*r*(f*f)-s*s*(d*d))/(r*r*(f*f)+s*s*(d*d)))||0,m=g*r*f/s,v=g*-s*d/r,y=(t+i)/2+K_(c)*m-$_(c)*v,x=(e+n)/2+$_(c)*m+K_(c)*v,_=eb([1,0],[(d-m)/r,(f-v)/s]),b=[(d-m)/r,(f-v)/s],w=[(-1*d-m)/r,(-1*f-v)/s],S=eb(b,w);tb(b,w)<=-1&&(S=J_),tb(b,w)>=1&&(S=0),0===a&&S>0&&(S-=2*J_),1===a&&S<0&&(S+=2*J_),u.addData(h,y,x,r,s,_,S,c,a)}function Rn(t){if(!t)return[];var e,i=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<q_.length;e++)i=i.replace(new RegExp(q_[e],"g"),"|"+q_[e]);var n,o=i.split("|"),a=0,r=0,s=new P_,l=P_.CMD;for(e=1;e<o.length;e++){var h,u=o[e],c=u.charAt(0),d=0,f=u.slice(1).replace(/e,-/g,"e-").split(",");f.length>0&&""===f[0]&&f.shift();for(var p=0;p<f.length;p++)f[p]=parseFloat(f[p]);for(;d<f.length&&!isNaN(f[d])&&!isNaN(f[0]);){var g,m,v,y,x,_,b,w=a,S=r;switch(c){case"l":a+=f[d++],r+=f[d++],h=l.L,s.addData(h,a,r);break;case"L":a=f[d++],r=f[d++],h=l.L,s.addData(h,a,r);break;case"m":a+=f[d++],r+=f[d++],h=l.M,s.addData(h,a,r),c="l";break;case"M":a=f[d++],r=f[d++],h=l.M,s.addData(h,a,r),c="L";break;case"h":a+=f[d++],h=l.L,s.addData(h,a,r);break;case"H":a=f[d++],h=l.L,s.addData(h,a,r);break;case"v":r+=f[d++],h=l.L,s.addData(h,a,r);break;case"V":r=f[d++],h=l.L,s.addData(h,a,r);break;case"C":h=l.C,s.addData(h,f[d++],f[d++],f[d++],f[d++],f[d++],f[d++]),a=f[d-2],r=f[d-1];break;case"c":h=l.C,s.addData(h,f[d++]+a,f[d++]+r,f[d++]+a,f[d++]+r,f[d++]+a,f[d++]+r),a+=f[d-2],r+=f[d-1];break;case"S":g=a,m=r;var M=s.len(),I=s.data;n===l.C&&(g+=a-I[M-4],m+=r-I[M-3]),h=l.C,w=f[d++],S=f[d++],a=f[d++],r=f[d++],s.addData(h,g,m,w,S,a,r);break;case"s":g=a,m=r;var M=s.len(),I=s.data;n===l.C&&(g+=a-I[M-4],m+=r-I[M-3]),h=l.C,w=a+f[d++],S=r+f[d++],a+=f[d++],r+=f[d++],s.addData(h,g,m,w,S,a,r);break;case"Q":w=f[d++],S=f[d++],a=f[d++],r=f[d++],h=l.Q,s.addData(h,w,S,a,r);break;case"q":w=f[d++]+a,S=f[d++]+r,a+=f[d++],r+=f[d++],h=l.Q,s.addData(h,w,S,a,r);break;case"T":g=a,m=r;var M=s.len(),I=s.data;n===l.Q&&(g+=a-I[M-4],m+=r-I[M-3]),a=f[d++],r=f[d++],h=l.Q,s.addData(h,g,m,a,r);break;case"t":g=a,m=r;var M=s.len(),I=s.data;n===l.Q&&(g+=a-I[M-4],m+=r-I[M-3]),a+=f[d++],r+=f[d++],h=l.Q,s.addData(h,g,m,a,r);break;case"A":v=f[d++],y=f[d++],x=f[d++],_=f[d++],b=f[d++],En(w=a,S=r,a=f[d++],r=f[d++],_,b,v,y,x,h=l.A,s);break;case"a":v=f[d++],y=f[d++],x=f[d++],_=f[d++],b=f[d++],En(w=a,S=r,a+=f[d++],r+=f[d++],_,b,v,y,x,h=l.A,s)}}"z"!==c&&"Z"!==c||(h=l.Z,s.addData(h)),n=h}return s.toStatic(),s}function Vn(t,e){var i=Rn(t);return e=e||{},e.buildPath=function(t){if(t.setData)t.setData(i.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;i.rebuildPath(e)}},e.applyTransform=function(t){j_(i,t),this.dirty(!0)},e}function Bn(t,e){return new Nn(Vn(t,e))}function Gn(t,e){return Nn.extend(Vn(t,e))}function Wn(t,e,i,n,o,a,r){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*r+(-3*(e-i)-2*s-l)*a+s*o+e}function Hn(t,e,i){var n=e.points,o=e.smooth;if(n&&n.length>=2){if(o&&"spline"!==o){var a=hb(n,o,i,e.smoothConstraint);t.moveTo(n[0][0],n[0][1]);for(var r=n.length,s=0;s<(i?r:r-1);s++){var l=a[2*s],h=a[2*s+1],u=n[(s+1)%r];t.bezierCurveTo(l[0],l[1],h[0],h[1],u[0],u[1])}}else{"spline"===o&&(n=lb(n,i)),t.moveTo(n[0][0],n[0][1]);for(var s=1,c=n.length;s<c;s++)t.lineTo(n[s][0],n[s][1])}i&&t.closePath()}}function Fn(t,e,i){var n=t.cpx2,o=t.cpy2;return null===n||null===o?[(i?an:on)(t.x1,t.cpx1,t.cpx2,t.x2,e),(i?an:on)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(i?cn:un)(t.x1,t.cpx1,t.x2,e),(i?cn:un)(t.y1,t.cpy1,t.y2,e)]}function Zn(t){return Nn.extend(t)}function Un(t,e,i,n){var o=Bn(t,e),a=o.getBoundingRect();return i&&("center"===n&&(i=jn(i,a)),qn(o,i)),o}function Xn(t,e,i){var n=new qe({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===i){var o={width:t.width,height:t.height};n.setStyle(jn(e,o))}}});return n}function jn(t,e){var i,n=e.width/e.height,o=t.height*n;return i=o<=t.width?t.height:(o=t.width)/n,{x:t.x+t.width/2-o/2,y:t.y+t.height/2-i/2,width:o,height:i}}function qn(t,e){if(t.applyTransform){var i=t.getBoundingRect().calculateTransform(e);t.applyTransform(i)}}function Yn(t){var e=t.shape,i=t.style.lineWidth;return bb(2*e.x1)===bb(2*e.x2)&&(e.x1=e.x2=Kn(e.x1,i,!0)),bb(2*e.y1)===bb(2*e.y2)&&(e.y1=e.y2=Kn(e.y1,i,!0)),t}function $n(t){var e=t.shape,i=t.style.lineWidth,n=e.x,o=e.y,a=e.width,r=e.height;return e.x=Kn(e.x,i,!0),e.y=Kn(e.y,i,!0),e.width=Math.max(Kn(n+a,i,!1)-e.x,0===a?0:1),e.height=Math.max(Kn(o+r,i,!1)-e.y,0===r?0:1),t}function Kn(t,e,i){var n=bb(2*t);return(n+bb(e))%2==0?n/2:(n+(i?1:-1))/2}function Jn(t){return null!=t&&"none"!=t}function Qn(t){return"string"==typeof t?At(t,-.1):t}function to(t){if(t.__hoverStlDirty){var e=t.style.stroke,i=t.style.fill,n=t.__hoverStl;n.fill=n.fill||(Jn(i)?Qn(i):null),n.stroke=n.stroke||(Jn(e)?Qn(e):null);var o={};for(var a in n)null!=n[a]&&(o[a]=t.style[a]);t.__normalStl=o,t.__hoverStlDirty=!1}}function eo(t){if(!t.__isHover){if(to(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl);else{var e=t.style,i=e.insideRollbackOpt;i&&xo(e),e.extendFrom(t.__hoverStl),i&&(yo(e,e.insideOriginalTextPosition,i),null==e.textFill&&(e.textFill=i.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function io(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function no(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&eo(t)}):eo(t)}function oo(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&io(t)}):io(t)}function ao(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&to(t)}function ro(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&no(this)}function so(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&oo(this)}function lo(){this.__isEmphasis=!0,no(this)}function ho(){this.__isEmphasis=!1,oo(this)}function uo(t,e,i){t.__hoverSilentOnTouch=i&&i.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&ao(t,e)}):ao(t,e),t.on("mouseover",ro).on("mouseout",so),t.on("emphasis",lo).on("normal",ho)}function co(t,e,i,n,o,a,r){var s=(o=o||Mb).labelFetcher,l=o.labelDataIndex,h=o.labelDimIndex,u=i.getShallow("show"),c=n.getShallow("show"),d=u||c?T(s?s.getFormattedLabel(l,"normal",null,h):null,o.defaultText):null,f=u?d:null,p=c?T(s?s.getFormattedLabel(l,"emphasis",null,h):null,d):null;null==f&&null==p||(fo(t,i,a,o),fo(e,n,r,o,!0)),t.text=f,e.text=p}function fo(t,e,i,n,o){return po(t,e,n,o),i&&a(t,i),t.host&&t.host.dirty&&t.host.dirty(!1),t}function po(t,e,i,n){if((i=i||Mb).isRectText){var o=e.getShallow("position")||(n?null:"inside");"outside"===o&&(o="top"),t.textPosition=o,t.textOffset=e.getShallow("offset");var a=e.getShallow("rotate");null!=a&&(a*=Math.PI/180),t.textRotation=a,t.textDistance=T(e.getShallow("distance"),n?null:5)}var r,s=e.ecModel,l=s&&s.option.textStyle,h=go(e);if(h){r={};for(var u in h)if(h.hasOwnProperty(u)){var c=e.getModel(["rich",u]);mo(r[u]={},c,l,i,n)}}return t.rich=r,mo(t,e,l,i,n,!0),i.forceRich&&!i.textStyle&&(i.textStyle={}),t}function go(t){for(var e;t&&t!==t.ecModel;){var i=(t.option||Mb).rich;if(i){e=e||{};for(var n in i)i.hasOwnProperty(n)&&(e[n]=1)}t=t.parentModel}return e}function mo(t,e,i,n,o,a){if(i=!o&&i||Mb,t.textFill=vo(e.getShallow("color"),n)||i.color,t.textStroke=vo(e.getShallow("textBorderColor"),n)||i.textBorderColor,t.textStrokeWidth=T(e.getShallow("textBorderWidth"),i.textBorderWidth),!o){if(a){var r=t.textPosition;t.insideRollback=yo(t,r,n),t.insideOriginalTextPosition=r,t.insideRollbackOpt=n}null==t.textFill&&(t.textFill=n.autoColor)}t.fontStyle=e.getShallow("fontStyle")||i.fontStyle,t.fontWeight=e.getShallow("fontWeight")||i.fontWeight,t.fontSize=e.getShallow("fontSize")||i.fontSize,t.fontFamily=e.getShallow("fontFamily")||i.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),a&&n.disableBox||(t.textBackgroundColor=vo(e.getShallow("backgroundColor"),n),t.textPadding=e.getShallow("padding"),t.textBorderColor=vo(e.getShallow("borderColor"),n),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||i.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||i.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||i.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||i.textShadowOffsetY}function vo(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function yo(t,e,i){var n,o=i.useInsideStyle;return null==t.textFill&&!1!==o&&(!0===o||i.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(n={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=i.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),n}function xo(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}function _o(t,e){var i=e||e.getModel("textStyle");return[t.fontStyle||i&&i.getShallow("fontStyle")||"",t.fontWeight||i&&i.getShallow("fontWeight")||"",(t.fontSize||i&&i.getShallow("fontSize")||12)+"px",t.fontFamily||i&&i.getShallow("fontFamily")||"sans-serif"].join(" ")}function bo(t,e,i,n,o,a){if("function"==typeof o&&(a=o,o=null),n&&n.isAnimationEnabled()){var r=t?"Update":"",s=n.getShallow("animationDuration"+r),l=n.getShallow("animationEasing"+r),h=n.getShallow("animationDelay"+r);"function"==typeof h&&(h=h(o,n.getAnimationDelayParams?n.getAnimationDelayParams(e,o):null)),"function"==typeof s&&(s=s(o)),s>0?e.animateTo(i,s,h||0,l,a,!!a):(e.stopAnimation(),e.attr(i),a&&a())}else e.stopAnimation(),e.attr(i),a&&a()}function wo(t,e,i,n,o){bo(!0,t,e,i,n,o)}function So(t,e,i,n,o){bo(!1,t,e,i,n,o)}function Mo(t,e){for(var i=at([]);t&&t!==e;)st(i,t.getLocalTransform(),i),t=t.parent;return i}function Io(t,e,i){return e&&!c(e)&&(e=by.getLocalTransform(e)),i&&(e=ct([],e)),$([],t,e)}function To(t,e,i){var n=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),o=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-n:"right"===t?n:0,"top"===t?-o:"bottom"===t?o:0];return a=Io(a,e,i),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?"bottom":"top"}function Ao(t,e,i,n){function o(t){var e={position:V(t.position),rotation:t.rotation};return t.shape&&(e.shape=a({},t.shape)),e}if(t&&e){var r=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=r[t.anid];if(e){var n=o(t);t.attr(o(e)),wo(t,n,i,t.dataIndex)}}})}}function Co(t,e){return f(t,function(t){var i=t[0];i=wb(i,e.x),i=Sb(i,e.x+e.width);var n=t[1];return n=wb(n,e.y),n=Sb(n,e.y+e.height),[i,n]})}function Do(t,e,i){var n=(e=a({rectHover:!0},e)).style={strokeNoScale:!0};if(i=i||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(n.image=t.slice(8),r(n,i),new qe(e)):Un(t.replace("path://",""),e,i,"center")}function Lo(t,e,i){this.parentModel=e,this.ecModel=i,this.option=t}function ko(t,e,i){for(var n=0;n<e.length&&(!e[n]||null!=(t=t&&"object"==typeof t?t[e[n]]:null));n++);return null==t&&i&&(t=i.get(e)),t}function Po(t,e){var i=ji(t,"getParent");return i?i.call(t,e):t.parentModel}function Oo(t){return t instanceof Array?t:null==t?[]:[t]}function zo(t,e){if(t)for(var i=t.emphasis=t.emphasis||{},n=t.normal=t.normal||{},o=0,a=e.length;o<a;o++){var r=e[o];!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}}function No(t){return t&&(null==t.value?t:t.value)}function Eo(t){return Ob(t)&&!(t instanceof Array)}function Ro(t,e){var i=e&&e.type;return"ordinal"===i?t:("time"===i&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+Pi(t)),null==t||""===t?NaN:+t)}function Vo(t,e){e=(e||[]).slice();var i=f(t||[],function(t,e){return{exist:t}});return Pb(e,function(t,n){if(Ob(t)){for(o=0;o<i.length;o++)if(!i[o].option&&null!=t.id&&i[o].exist.id===t.id+"")return i[o].option=t,void(e[n]=null);for(var o=0;o<i.length;o++){var a=i[o].exist;if(!(i[o].option||null!=a.id&&null!=t.id||null==t.name||Go(t)||Go(a)||a.name!==t.name+""))return i[o].option=t,void(e[n]=null)}}}),Pb(e,function(t,e){if(Ob(t)){for(var n=0;n<i.length;n++){var o=i[n].exist;if(!i[n].option&&!Go(o)&&null==t.id){i[n].option=t;break}}n>=i.length&&i.push({option:t})}}),i}function Bo(t){var e=z();Pb(t,function(t,i){var n=t.exist;n&&e.set(n.id,t)}),Pb(t,function(t,i){var n=t.option;L(!n||null==n.id||!e.get(n.id)||e.get(n.id)===t,"id duplicates: "+(n&&n.id)),n&&null!=n.id&&e.set(n.id,t),!t.keyInfo&&(t.keyInfo={})}),Pb(t,function(t,i){var n=t.exist,o=t.option,a=t.keyInfo;if(Ob(o)){if(a.name=null!=o.name?o.name+"":n?n.name:"\0-",n)a.id=n.id;else if(null!=o.id)a.id=o.id+"";else{var r=0;do{a.id="\0"+a.name+"\0"+r++}while(e.get(a.id))}e.set(a.id,t)}})}function Go(t){return Ob(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function Wo(t,e){function i(t,e,i){for(var n=0,o=t.length;n<o;n++)for(var a=t[n].seriesId,r=Oo(t[n].dataIndex),s=i&&i[a],l=0,h=r.length;l<h;l++){var u=r[l];s&&s[u]?s[u]=null:(e[a]||(e[a]={}))[u]=1}}function n(t,e){var i=[];for(var o in t)if(t.hasOwnProperty(o)&&null!=t[o])if(e)i.push(+o);else{var a=n(t[o],!0);a.length&&i.push({seriesId:o,dataIndex:a})}return i}var o={},a={};return i(t||[],o),i(e||[],a,o),[n(o),n(a)]}function Ho(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?y(e.dataIndex)?f(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?y(e.name)?f(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function Fo(t,e,i){if(_(e)){var n={};n[e+"Index"]=0,e=n}var o=i&&i.defaultMainType;!o||jo(e,o+"Index")||jo(e,o+"Id")||jo(e,o+"Name")||(e[o+"Index"]=0);var a={};return Pb(e,function(n,o){var n=e[o];if("dataIndex"!==o&&"dataIndexInside"!==o){var r=o.match(/^(\w+)(Index|Id|Name)$/)||[],s=r[1],h=(r[2]||"").toLowerCase();if(!(!s||!h||null==n||"index"===h&&"none"===n||i&&i.includeMainTypes&&l(i.includeMainTypes,s)<0)){var u={mainType:s};"index"===h&&"all"===n||(u[h]=n);var c=t.queryComponents(u);a[s+"Models"]=c,a[s+"Model"]=c[0]}}else a[o]=n}),a}function Zo(t,e){var i=t.dimensions;e=t.getDimension(e);for(var n=0;n<i.length;n++){var o=t.getDimensionInfo(i[n]);if(o.name===e)return o.coordDim}}function Uo(t,e){var i=[];return Pb(t.dimensions,function(n){var o=t.getDimensionInfo(n);o.coordDim===e&&(i[o.coordDimIndex]=o.name)}),i}function Xo(t,e){var i=[];return Pb(t.dimensions,function(n){var o=t.getDimensionInfo(n),a=o.otherDims[e];null!=a&&!1!==a&&(i[a]=o.name)}),i}function jo(t,e){return t&&t.hasOwnProperty(e)}function qo(t){return[t||"",Rb++,Math.random()].join(Vb)}function Yo(t,e,i,n,o){var a=0,r=0;null==n&&(n=1/0),null==o&&(o=1/0);var s=0;e.eachChild(function(l,h){var u,c,d=l.position,f=l.getBoundingRect(),p=e.childAt(h+1),g=p&&p.getBoundingRect();if("horizontal"===t){var m=f.width+(g?-g.x+f.x:0);(u=a+m)>n||l.newline?(a=0,u=m,r+=s+i,s=f.height):s=Math.max(s,f.height)}else{var v=f.height+(g?-g.y+f.y:0);(c=r+v)>o||l.newline?(a+=s+i,r=0,c=v,s=f.width):s=Math.max(s,f.width)}l.newline||(d[0]=a,d[1]=r,"horizontal"===t?a=u+i:r=c+i)})}function $o(t,e,i){var n=e.width,o=e.height,a=Si(t.x,n),r=Si(t.y,o),s=Si(t.x2,n),l=Si(t.y2,o);return(isNaN(a)||isNaN(parseFloat(t.x)))&&(a=0),(isNaN(s)||isNaN(parseFloat(t.x2)))&&(s=n),(isNaN(r)||isNaN(parseFloat(t.y)))&&(r=0),(isNaN(l)||isNaN(parseFloat(t.y2)))&&(l=o),i=Gx(i||0),{width:Math.max(s-a-i[1]-i[3],0),height:Math.max(l-r-i[0]-i[2],0)}}function Ko(t,e,i){i=Gx(i||0);var n=e.width,o=e.height,a=Si(t.left,n),r=Si(t.top,o),s=Si(t.right,n),l=Si(t.bottom,o),h=Si(t.width,n),u=Si(t.height,o),c=i[2]+i[0],d=i[1]+i[3],f=t.aspect;switch(isNaN(h)&&(h=n-s-d-a),isNaN(u)&&(u=o-l-c-r),null!=f&&(isNaN(h)&&isNaN(u)&&(f>n/o?h=.8*n:u=.8*o),isNaN(h)&&(h=f*u),isNaN(u)&&(u=h/f)),isNaN(a)&&(a=n-s-h-d),isNaN(r)&&(r=o-l-u-c),t.left||t.right){case"center":a=n/2-h/2-i[3];break;case"right":a=n-h-d}switch(t.top||t.bottom){case"middle":case"center":r=o/2-u/2-i[0];break;case"bottom":r=o-u-c}a=a||0,r=r||0,isNaN(h)&&(h=n-d-a-(s||0)),isNaN(u)&&(u=o-c-r-(l||0));var p=new jt(a+i[3],r+i[0],h,u);return p.margin=i,p}function Jo(t,e,i,n,o){var a=!o||!o.hv||o.hv[0],s=!o||!o.hv||o.hv[1],l=o&&o.boundingMode||"all";if(a||s){var h;if("raw"===l)h="group"===t.type?new jt(0,0,+e.width||0,+e.height||0):t.getBoundingRect();else if(h=t.getBoundingRect(),t.needLocalTransform()){var u=t.getLocalTransform();(h=h.clone()).applyTransform(u)}e=Ko(r({width:h.width,height:h.height},e),i,n);var c=t.position,d=a?e.x-h.x:0,f=s?e.y-h.y:0;t.attr("position","raw"===l?[d,f]:[c[0]+d,c[1]+f])}}function Qo(t,e){return null!=t[Wb[e][0]]||null!=t[Wb[e][1]]&&null!=t[Wb[e][2]]}function ta(t,e,i){function n(i,n){var r={},l=0,h={},u=0;if(Bb(i,function(e){h[e]=t[e]}),Bb(i,function(t){o(e,t)&&(r[t]=h[t]=e[t]),a(r,t)&&l++,a(h,t)&&u++}),s[n])return a(e,i[1])?h[i[2]]=null:a(e,i[2])&&(h[i[1]]=null),h;if(2!==u&&l){if(l>=2)return r;for(var c=0;c<i.length;c++){var d=i[c];if(!o(r,d)&&o(t,d)){r[d]=t[d];break}}return r}return h}function o(t,e){return t.hasOwnProperty(e)}function a(t,e){return null!=t[e]&&"auto"!==t[e]}function r(t,e,i){Bb(t,function(t){e[t]=i[t]})}!b(i)&&(i={});var s=i.ignoreSize;!y(s)&&(s=[s,s]);var l=n(Wb[0],0),h=n(Wb[1],1);r(Wb[0],t,l),r(Wb[1],t,h)}function ea(t){return ia({},t)}function ia(t,e){return e&&t&&Bb(Gb,function(i){e.hasOwnProperty(i)&&(t[i]=e[i])}),t}function na(t,e){d(e,function(e,o){Ub.hasClass(o)||("object"==typeof e?t[o]=t[o]?n(t[o],e,!1):i(e):null==t[o]&&(t[o]=e))})}function oa(t){t=t,this.option={},this.option[ew]=1,this._componentsMap=z({series:[]}),this._seriesIndices=null,na(t,this._theme.option),n(t,jb,!1),this.mergeOption(t)}function aa(t,e){y(e)||(e=e?[e]:[]);var i={};return Yb(e,function(e){i[e]=(t.get(e)||[]).slice()}),i}function ra(t,e,i){return e.type?e.type:i?i.subType:Ub.determineSubType(t,e)}function sa(t){return Kb(t,function(t){return t.componentIndex})||[]}function la(t,e){return e.hasOwnProperty("subType")?$b(t,function(t){return t.subType===e.subType}):t}function ha(t){d(nw,function(e){this[e]=m(t[e],t)},this)}function ua(){this._coordinateSystems=[]}function ca(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function da(t,e,i){var n,o,a=[],r=[],s=t.timeline;if(t.baseOption&&(o=t.baseOption),(s||t.options)&&(o=o||{},a=(t.options||[]).slice()),t.media){o=o||{};var l=t.media;aw(l,function(t){t&&t.option&&(t.query?r.push(t):n||(n=t))})}return o||(o=t),o.timeline||(o.timeline=s),aw([o].concat(a).concat(f(r,function(t){return t.option})),function(t){aw(e,function(e){e(t,i)})}),{baseOption:o,timelineOptions:a,mediaDefault:n,mediaList:r}}function fa(t,e,i){var n={width:e,height:i,aspectratio:e/i},o=!0;return d(t,function(t,e){var i=e.match(hw);if(i&&i[1]&&i[2]){var a=i[1],r=i[2].toLowerCase();pa(n[r],t,a)||(o=!1)}}),o}function pa(t,e,i){return"min"===i?t>=e:"max"===i?t<=e:t===e}function ga(t,e){return t.join(",")===e.join(",")}function ma(t,e){aw(e=e||{},function(e,i){if(null!=e){var n=t[i];if(Ub.hasClass(i)){e=Oo(e);var o=Vo(n=Oo(n),e);t[i]=sw(o,function(t){return t.option&&t.exist?lw(t.exist,t.option,!0):t.exist||t.option})}else t[i]=lw(n,e,!0)}})}function va(t){var e=t&&t.itemStyle;if(e)for(var i=0,o=dw.length;i<o;i++){var a=dw[i],r=e.normal,s=e.emphasis;r&&r[a]&&(t[a]=t[a]||{},t[a].normal?n(t[a].normal,r[a]):t[a].normal=r[a],r[a]=null),s&&s[a]&&(t[a]=t[a]||{},t[a].emphasis?n(t[a].emphasis,s[a]):t[a].emphasis=s[a],s[a]=null)}}function ya(t,e){var i=cw(t)&&t[e],n=cw(i)&&i.textStyle;if(n)for(var o=0,a=zb.length;o<a;o++){var e=zb[o];n.hasOwnProperty(e)&&(i[e]=n[e])}}function xa(t){cw(t)&&(ya(t,"normal"),ya(t,"emphasis"))}function _a(t){if(cw(t)){va(t),xa(t.label),xa(t.upperLabel),xa(t.edgeLabel);var e=t.markPoint;va(e),xa(e&&e.label);var i=t.markLine;va(t.markLine),xa(i&&i.label);var n=t.markArea;xa(n&&n.label),ya(t,"axisLabel"),ya(t,"title"),ya(t,"detail");var o=t.data;if(o)for(r=0;r<o.length;r++)va(o[r]),xa(o[r]&&o[r].label);if((e=t.markPoint)&&e.data)for(var a=e.data,r=0;r<a.length;r++)va(a[r]),xa(a[r]&&a[r].label);if((i=t.markLine)&&i.data)for(var s=i.data,r=0;r<s.length;r++)y(s[r])?(va(s[r][0]),xa(s[r][0]&&s[r][0].label),va(s[r][1]),xa(s[r][1]&&s[r][1].label)):(va(s[r]),xa(s[r]&&s[r].label))}}function ba(t){return y(t)?t:t?[t]:[]}function wa(t){return(y(t)?t[0]:t)||{}}function Sa(t,e){e=e.split(",");for(var i=t,n=0;n<e.length&&null!=(i=i&&i[e[n]]);n++);return i}function Ma(t,e,i,n){e=e.split(",");for(var o,a=t,r=0;r<e.length-1;r++)null==a[o=e[r]]&&(a[o]={}),a=a[o];(n||null==a[e[r]])&&(a[e[r]]=i)}function Ia(t){d(pw,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function Ta(){this.group=new jy,this.uid=qo("viewChart")}function Aa(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var i=0;i<t.childCount();i++)Aa(t.childAt(i),e)}function Ca(t,e,i){var n=Ho(t,e);null!=n?d(Oo(n),function(e){Aa(t.getItemGraphicEl(e),i)}):t.eachItemGraphicEl(function(t){Aa(t,i)})}function Da(t,e,i){function n(){u=(new Date).getTime(),c=null,t.apply(r,s||[])}var o,a,r,s,l,h=0,u=0,c=null;e=e||0;var d=function(){o=(new Date).getTime(),r=this,s=arguments;var t=l||e,d=l||i;l=null,a=o-(d?h:u)-t,clearTimeout(c),d?c=setTimeout(n,t):a>=0?n():c=setTimeout(n,-a),h=o};return d.clear=function(){c&&(clearTimeout(c),c=null)},d.debounceNextCall=function(t){l=t},d}function La(t,e,i,n){var o=t[e];if(o){var a=o[ww]||o,r=o[Mw];if(o[Sw]!==i||r!==n){if(null==i||!n)return t[e]=a;(o=t[e]=Da(a,i,"debounce"===n))[ww]=a,o[Mw]=n,o[Sw]=i}return o}}function ka(t,e){var i=t[e];i&&i[ww]&&(t[e]=i[ww])}function Pa(t){return function(e,i,n){e=e&&e.toLowerCase(),fy.prototype[t].call(this,e,i,n)}}function Oa(){fy.call(this)}function za(t,e,n){function o(t,e){return t.prio-e.prio}n=n||{},"string"==typeof e&&(e=Uw[e]),this.id,this.group,this._dom=t;var a=this._zr=yi(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=Da(m(a.flush,a),17),(e=i(e))&&vw(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new ua,this._api=$a(this),fy.call(this),this._messageCenter=new Oa,this._initEvents(),this.resize=m(this.resize,this),this._pendingActions=[],ee(Zw,o),ee(Ww,o),a.animation.on("frame",this._onframe,this),k(this)}function Na(t,e,i){var n,o=this._model,a=this._coordSysMgr.getCoordinateSystems();e=Fo(o,e);for(var r=0;r<a.length;r++){var s=a[r];if(s[t]&&null!=(n=s[t](o,e,i)))return n}}function Ea(t,e,i,n,o){function a(n){n&&n.__alive&&n[e]&&n[e](n.__model,r,t._api,i)}var r=t._model;if(n){var s={};s[n+"Id"]=i[n+"Id"],s[n+"Index"]=i[n+"Index"],s[n+"Name"]=i[n+"Name"];var l={mainType:n,query:s};o&&(l.subType=o),r&&r.eachComponent(l,function(e,i){a(t["series"===n?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else Tw(t._componentsViews.concat(t._chartsViews),a)}function Ra(t,e){var i=t.type,n=t.escapeConnect,o=Bw[i],s=o.actionInfo,l=(s.update||"update").split(":"),h=l.pop();l=null!=l[0]&&Aw(l[0]),this[Ow]=!0;var u=[t],c=!1;t.batch&&(c=!0,u=f(t.batch,function(e){return e=r(a({},e),t),e.batch=null,e}));var d,p=[],g="highlight"===i||"downplay"===i;Tw(u,function(t){d=o.action(t,this._model,this._api),(d=d||a({},t)).type=s.event||d.type,p.push(d),g?Ea(this,h,t,"series"):l&&Ea(this,h,t,l.main,l.sub)},this),"none"===h||g||l||(this[zw]?(Rw.prepareAndUpdate.call(this,t),this[zw]=!1):Rw[h].call(this,t)),d=c?{type:s.event||i,escapeConnect:n,batch:p}:p[0],this[Ow]=!1,!e&&this._messageCenter.trigger(d.type,d)}function Va(t){for(var e=this._pendingActions;e.length;){var i=e.shift();Ra.call(this,i,t)}}function Ba(t){!t&&this.trigger("updated")}function Ga(t,e,i){var n=this._api;Tw(this._componentsViews,function(o){var a=o.__model;o[t](a,e,n,i),Ya(a,o)},this),e.eachSeries(function(o,a){var r=this._chartsMap[o.__viewId];r[t](o,e,n,i),Ya(o,r),qa(o,r)},this),ja(this._zr,e),Tw(Fw,function(t){t(e,n)})}function Wa(t,e){for(var i="component"===t,n=i?this._componentsViews:this._chartsViews,o=i?this._componentsMap:this._chartsMap,a=this._zr,r=0;r<n.length;r++)n[r].__alive=!1;e[i?"eachComponent":"eachSeries"](function(t,r){if(i){if("series"===t)return}else r=t;var s="_ec_"+r.id+"_"+r.type,l=o[s];if(!l){var h=Aw(r.type),u=i?xw.getClass(h.main,h.sub):Ta.getClass(h.sub);if(!u)return;(l=new u).init(e,this._api),o[s]=l,n.push(l),a.add(l.group)}r.__viewId=l.__id=s,l.__alive=!0,l.__model=r,l.group.__ecComponentInfo={mainType:r.mainType,index:r.componentIndex}},this);for(r=0;r<n.length;){var s=n[r];s.__alive?r++:(a.remove(s.group),s.dispose(e,this._api),n.splice(r,1),delete o[s.__id],s.__id=s.group.__ecComponentInfo=null)}}function Ha(t,e){Tw(Ww,function(i){i.func(t,e)})}function Fa(t){var e={};t.eachSeries(function(t){var i=t.get("stack"),n=t.getData();if(i&&"list"===n.type){var o=e[i];e.hasOwnProperty(i)&&o&&(n.stackedOn=o),e[i]=n}})}function Za(t,e){var i=this._api;Tw(Zw,function(n){n.isLayout&&n.func(t,i,e)})}function Ua(t,e,i){var n=this._api;t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()}),Tw(Zw,function(o){(!i||!o.isLayout)&&o.func(t,n,e)})}function Xa(t,e){var i=this._api;Tw(this._componentsViews,function(n){var o=n.__model;n.render(o,t,i,e),Ya(o,n)},this),Tw(this._chartsViews,function(t){t.__alive=!1},this),t.eachSeries(function(n,o){var a=this._chartsMap[n.__viewId];a.__alive=!0,a.render(n,t,i,e),a.group.silent=!!n.get("silent"),Ya(n,a),qa(n,a)},this),ja(this._zr,t),Tw(this._chartsViews,function(e){e.__alive||e.remove(t,i)},this)}function ja(t,e){var i=t.storage,n=0;i.traverse(function(t){t.isGroup||n++}),n>e.get("hoverLayerThreshold")&&!Uv.node&&i.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function qa(t,e){var i=0;e.group.traverse(function(t){"group"===t.type||t.ignore||i++});var n=+t.get("progressive"),o=i>t.get("progressiveThreshold")&&n&&!Uv.node;o&&e.group.traverse(function(t){t.isGroup||(t.progressive=o?Math.floor(i++/n):-1,o&&t.stopAnimation(!0))});var a=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.setStyle("blend",a)})}function Ya(t,e){var i=t.get("z"),n=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=n&&(t.zlevel=n))})}function $a(t){var e=t._coordSysMgr;return a(new ha(t),{getCoordinateSystems:m(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var i=e.__ecComponentInfo;if(null!=i)return t._model.getComponent(i.mainType,i.index);e=e.parent}}})}function Ka(t){function e(t,e){for(var n=0;n<t.length;n++)t[n][i]=e}var i="__connectUpdateStatus";d(Gw,function(n,o){t._messageCenter.on(o,function(n){if(qw[t.group]&&0!==t[i]){if(n&&n.escapeConnect)return;var o=t.makeActionFromEvent(n),a=[];d(jw,function(e){e!==t&&e.group===t.group&&a.push(e)}),e(a,0),Tw(a,function(t){1!==t[i]&&t.dispatchAction(o)}),e(a,2)}})})}function Ja(t){qw[t]=!1}function Qa(t){var e;return e=t.getAttribute?t.getAttribute(Kw):t[Kw],jw[e]}function tr(t){Hw.push(t)}function er(t,e){"function"==typeof t&&(e=t,t=Dw),Ww.push({prio:t,func:e})}function ir(t,e,i){"function"==typeof e&&(i=e,e="");var n=b(t)?t.type:[t,t={event:e}][0];t.event=(t.event||n).toLowerCase(),e=t.event,L(Nw.test(n)&&Nw.test(e)),Bw[n]||(Bw[n]={action:i,actionInfo:t}),Gw[e]=n}function nr(t,e){ua.register(t,e)}function or(t,e){"function"==typeof t&&(e=t,t=Lw),Zw.push({prio:t,func:e,isLayout:!0})}function ar(t,e){"function"==typeof t&&(e=t,t=kw),Zw.push({prio:t,func:e})}function rr(t,e){Xw[t]=e}function sr(t){return Ub.extend(t)}function lr(t){return xw.extend(t)}function hr(t){return yw.extend(t)}function ur(t){return Ta.extend(t)}function cr(t){return Jw[t]}function dr(t){return t}function fr(t,e,i,n,o){this._old=t,this._new=e,this._oldKeyGetter=i||dr,this._newKeyGetter=n||dr,this.context=o}function pr(t,e,i,n,o){for(var a=0;a<t.length;a++){var r="_ec_"+o[n](t[a],a),s=e[r];null==s?(i.push(r),e[r]=a):(s.length||(e[r]=s=[s]),s.push(a))}}function gr(t,e){d(oS.concat(e.__wrappedMethods||[]),function(i){e.hasOwnProperty(i)&&(t[i]=e[i])}),t.__wrappedMethods=e.__wrappedMethods}function mr(t){this._array=t||[]}function vr(t){return y(t)||(t=[t]),t}function yr(t,e){var i=t.dimensions,n=new aS(f(i,t.getDimensionInfo,t),t.hostModel);gr(n,t);for(var o=n._storage={},a=t._storage,r=0;r<i.length;r++){var s=i[r],h=a[s];l(e,s)>=0?o[s]=new h.constructor(a[s].length):o[s]=a[s]}return n}function xr(t,e,n){function o(t,e,i){cS[e]?t.otherDims[e]=i:(t.coordDim=e,t.coordDimIndex=i,h.set(e,!0))}function a(t,e,i){if(i||null!=e.get(t)){for(var n=0;null!=e.get(t+n);)n++;t+=n}return e.set(t,!0),t}e=e||[],n=n||{},t=(t||[]).slice();var r=(n.dimsDef||[]).slice(),s=z(n.encodeDef),l=z(),h=z(),u=[],c=n.dimCount;if(null==c){var d=_r(e[0]);c=Math.max(y(d)&&d.length||1,t.length,r.length),lS(t,function(t){var e=t.dimsDef;e&&(c=Math.max(c,e.length))})}for(var f=0;f<c;f++){var p=hS(r[f])?{name:r[f]}:r[f]||{},g=p.name,m=u[f]={otherDims:{}};null!=g&&null==l.get(g)&&(m.name=m.tooltipName=g,l.set(g,f)),null!=p.type&&(m.type=p.type)}s.each(function(t,e){t=s.set(e,Oo(t).slice()),lS(t,function(i,n){hS(i)&&(i=l.get(i)),null!=i&&i<c&&(t[n]=i,o(u[i],e,n))})});var v=0;lS(t,function(t,e){var n,t,a,r;hS(t)?(n=t,t={}):(n=t.name,t=i(t),a=t.dimsDef,r=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null);var l=Oo(s.get(n));if(!l.length)for(var h=0;h<(a&&a.length||1);h++){for(;v<u.length&&null!=u[v].coordDim;)v++;v<u.length&&l.push(v++)}lS(l,function(e,i){var s=u[e];o(uS(s,t),n,i),null==s.name&&a&&(s.name=s.tooltipName=a[i]),r&&uS(s.otherDims,r)})});for(var x=n.extraPrefix||"value",_=0;_<c;_++)null==(m=u[_]=u[_]||{}).coordDim&&(m.coordDim=a(x,h,n.extraFromZero),m.coordDimIndex=0,m.isExtraCoord=!0),null==m.name&&(m.name=a(m.coordDim,l)),null==m.type&&dS(e,_)&&(m.type="ordinal");return u}function _r(t){return y(t)?t:b(t)?t.value:t}function br(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function wr(t){var e=br(t);return null!=e&&!y(No(e))}function Sr(t,e,i){t=t||[];var n=e.get("coordinateSystem"),o=fS[n],a=ua.get(n),r={encodeDef:e.get("encode"),dimsDef:e.get("dimensions")},s=o&&o(t,e,i,r),h=s&&s.dimensions;h||(h=a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"],h=xr(h,t,r));var u=s?s.categoryIndex:-1,c=new aS(h,e),d=Tr(s,t),f={},p=u>=0&&wr(t)?function(t,e,i,n){return Eo(t)&&(c.hasItemOption=!0),n===u?i:Ro(No(t),h[n])}:function(t,e,i,n){var o=No(t),a=Ro(o&&o[n],h[n]);Eo(t)&&(c.hasItemOption=!0);var r=s&&s.categoryAxesModels;return r&&r[e]&&"string"==typeof a&&(f[e]=f[e]||r[e].getCategories(),(a=l(f[e],a))<0&&!isNaN(a)&&(a=+a)),a};return c.hasItemOption=!1,c.initData(t,d,p),c}function Mr(t){return"category"!==t&&"time"!==t}function Ir(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function Tr(t,e){var i,n=[],o=t&&t.dimensions[t.categoryIndex];if(o&&(i=t.categoryAxesModels[o.name]),i){var a=i.getCategories();if(a){var r=e.length;if(y(e[0])&&e[0].length>1){n=[];for(var s=0;s<r;s++)n[s]=a[e[s][t.categoryIndex||0]]}else n=a.slice(0)}}return n}function Ar(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function Cr(t,e,i,n){var o={},a=t[1]-t[0],r=o.interval=Ni(a/e,!0);null!=i&&r<i&&(r=o.interval=i),null!=n&&r>n&&(r=o.interval=n);var s=o.intervalPrecision=Dr(r);return kr(o.niceTickExtent=[mS(Math.ceil(t[0]/r)*r,s),mS(Math.floor(t[1]/r)*r,s)],t),o}function Dr(t){return Ai(t)+2}function Lr(t,e,i){t[e]=Math.max(Math.min(t[e],i[1]),i[0])}function kr(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Lr(t,0,e),Lr(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function Pr(t,e,i,n){var o=[];if(!t)return o;e[0]<i[0]&&o.push(e[0]);for(var a=i[0];a<=i[1]&&(o.push(a),(a=mS(a+t,n))!==o[o.length-1]);)if(o.length>1e4)return[];return e[1]>(o.length?o[o.length-1]:i[1])&&o.push(e[1]),o}function Or(t,e){return CS(t,AS(e))}function zr(t,e){var i,n,o,a=t.type,r=e.getMin(),s=e.getMax(),l=null!=r,h=null!=s,u=t.getExtent();return"ordinal"===a?i=(e.get("data")||[]).length:(y(n=e.get("boundaryGap"))||(n=[n||0,n||0]),"boolean"==typeof n[0]&&(n=[0,0]),n[0]=Si(n[0],1),n[1]=Si(n[1],1),o=u[1]-u[0]||Math.abs(u[0])),null==r&&(r="ordinal"===a?i?0:NaN:u[0]-n[0]*o),null==s&&(s="ordinal"===a?i?i-1:NaN:u[1]+n[1]*o),"dataMin"===r?r=u[0]:"function"==typeof r&&(r=r({min:u[0],max:u[1]})),"dataMax"===s?s=u[1]:"function"==typeof s&&(s=s({min:u[0],max:u[1]})),(null==r||!isFinite(r))&&(r=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(M(r)||M(s)),e.getNeedCrossZero()&&(r>0&&s>0&&!l&&(r=0),r<0&&s<0&&!h&&(s=0)),[r,s]}function Nr(t,e){var i=zr(t,e),n=null!=e.getMin(),o=null!=e.getMax(),a=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var r=t.type;t.setExtent(i[0],i[1]),t.niceExtent({splitNumber:a,fixMin:n,fixMax:o,minInterval:"interval"===r||"time"===r?e.get("minInterval"):null,maxInterval:"interval"===r||"time"===r?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function Er(t,e){if(e=e||t.get("type"))switch(e){case"category":return new gS(t.getCategories(),[1/0,-1/0]);case"value":return new yS;default:return(Ar.getClass(e)||yS).create(t)}}function Rr(t,e,i,n,o){var a,r=0,s=0,l=(n-o)/180*Math.PI,h=1;e.length>40&&(h=Math.floor(e.length/40));for(var u=0;u<t.length;u+=h){var c=t[u],d=de(e[u],i,"center","top");d.x+=c*Math.cos(l),d.y+=c*Math.sin(l),d.width*=1.3,d.height*=1.3,a?a.intersect(d)?(s++,r=Math.max(r,s)):(a.union(d),s=0):a=d.clone()}return 0===r&&h>1?h:(r+1)*h-1}function Vr(t,e){var i=t.scale,n=i.getTicksLabels(),o=i.getTicks();return"string"==typeof e?(e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e),f(n,e)):"function"==typeof e?f(o,function(i,n){return e(Br(t,i),n)},this):n}function Br(t,e){return"category"===t.type?t.scale.getLabel(e):e}function Gr(t){return b(t)&&null!=t.value?t.value:t+""}function Wr(t,e){if("image"!==this.type){var i=this.style,n=this.shape;n&&"line"===n.symbolType?i.stroke=t:this.__isEmptyBrush?(i.stroke=t,i.fill=e||"#fff"):(i.fill&&(i.fill=t),i.stroke&&(i.stroke=t)),this.dirty(!1)}}function Hr(t,e,i,n,o,a,r){var s=0===t.indexOf("empty");s&&(t=t.substr(5,1).toLowerCase()+t.substr(6));var l;return l=0===t.indexOf("image://")?Xn(t.slice(8),new jt(e,i,n,o),r?"center":"cover"):0===t.indexOf("path://")?Un(t.slice(7),{},new jt(e,i,n,o),r?"center":"cover"):new WS({shape:{symbolType:t,x:e,y:i,width:n,height:o}}),l.__isEmptyBrush=s,l.setColor=Wr,l.setColor(a),l}function Fr(t,e){var i=(t[1]-t[0])/e/2;t[0]+=i,t[1]-=i}function Zr(t,e){return Math.abs(t-e)<XS}function Ur(t,e,i){var n=0,o=t[0];if(!o)return!1;for(var a=1;a<t.length;a++){var r=t[a];n+=Tn(o[0],o[1],r[0],r[1],e,i),o=r}var s=t[0];return Zr(o[0],s[0])&&Zr(o[1],s[1])||(n+=Tn(o[0],o[1],s[0],s[1],e,i)),0!==n}function Xr(t,e,i){if(this.name=t,this.geometries=e,i)i=[i[0],i[1]];else{var n=this.getBoundingRect();i=[n.x+n.width/2,n.y+n.height/2]}this.center=i}function jr(t){if(!t.UTF8Encoding)return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var i=t.features,n=0;n<i.length;n++)for(var o=i[n].geometry,a=o.coordinates,r=o.encodeOffsets,s=0;s<a.length;s++){var l=a[s];if("Polygon"===o.type)a[s]=qr(l,r[s],e);else if("MultiPolygon"===o.type)for(var h=0;h<l.length;h++){var u=l[h];l[h]=qr(u,r[s][h],e)}}return t.UTF8Encoding=!1,t}function qr(t,e,i){for(var n=[],o=e[0],a=e[1],r=0;r<t.length;r+=2){var s=t.charCodeAt(r)-64,l=t.charCodeAt(r+1)-64;s=s>>1^-(1&s),l=l>>1^-(1&l),o=s+=o,a=l+=a,n.push([s/i,l/i])}return n}function Yr(t){var e,i=Xo(t,"label");if(i.length)e=i[0];else for(var n,o=t.dimensions.slice();o.length&&(e=o.pop(),"ordinal"===(n=t.getDimensionInfo(e).type)||"time"===n););return e}function $r(t,e){var i=t.getItemVisual(e,"symbolSize");return i instanceof Array?i.slice():[+i,+i]}function Kr(t){return[t[0]/2,t[1]/2]}function Jr(t,e,i){jy.call(this),this.updateData(t,e,i)}function Qr(t,e){this.parent.drift(t,e)}function ts(t){this.group=new jy,this._symbolCtor=t||Jr}function es(t,e,i){var n=t.getItemLayout(e);return n&&!isNaN(n[0])&&!isNaN(n[1])&&!(i&&i(e))&&"none"!==t.getItemVisual(e,"symbol")}function is(t){return t>=0?1:-1}function ns(t,e,i){for(var n,o=t.getBaseAxis(),a=t.getOtherAxis(o),r=o.onZero?0:a.scale.getExtent()[0],s=a.dim,l="x"===s||"radius"===s?1:0,h=e.stackedOn,u=e.get(s,i);h&&is(h.get(s,i))===is(u);){n=h;break}var c=[];return c[l]=e.get(o.dim,i),c[1-l]=n?n.get(s,i,!0):r,t.dataToPoint(c)}function os(t,e){var i=[];return e.diff(t).add(function(t){i.push({cmd:"+",idx:t})}).update(function(t,e){i.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){i.push({cmd:"-",idx:t})}).execute(),i}function as(t){return isNaN(t[0])||isNaN(t[1])}function rs(t,e,i,n,o,a,r,s,l,h,u){for(var c=0,d=i,f=0;f<n;f++){var p=e[d];if(d>=o||d<0)break;if(as(p)){if(u){d+=a;continue}break}if(d===i)t[a>0?"moveTo":"lineTo"](p[0],p[1]),aM(sM,p);else if(l>0){var g=d+a,m=e[g];if(u)for(;m&&as(e[g]);)m=e[g+=a];var v=.5,y=e[c];if(!(m=e[g])||as(m))aM(lM,p);else{as(m)&&!u&&(m=p),H(rM,m,y);var x,_;if("x"===h||"y"===h){var b="x"===h?0:1;x=Math.abs(p[b]-y[b]),_=Math.abs(p[b]-m[b])}else x=hy(p,y),_=hy(p,m);oM(lM,p,rM,-l*(1-(v=_/(_+x))))}iM(sM,sM,s),nM(sM,sM,r),iM(lM,lM,s),nM(lM,lM,r),t.bezierCurveTo(sM[0],sM[1],lM[0],lM[1],p[0],p[1]),oM(sM,p,rM,l*v)}else t.lineTo(p[0],p[1]);c=d,d+=a}return f}function ss(t,e){var i=[1/0,1/0],n=[-1/0,-1/0];if(e)for(var o=0;o<t.length;o++){var a=t[o];a[0]<i[0]&&(i[0]=a[0]),a[1]<i[1]&&(i[1]=a[1]),a[0]>n[0]&&(n[0]=a[0]),a[1]>n[1]&&(n[1]=a[1])}return{min:e?i:n,max:e?n:i}}function ls(t,e){if(t.length===e.length){for(var i=0;i<t.length;i++){var n=t[i],o=e[i];if(n[0]!==o[0]||n[1]!==o[1])return}return!0}}function hs(t){return"number"==typeof t?t:t?.3:0}function us(t){var e=t.getGlobalExtent();if(t.onBand){var i=t.getBandWidth()/2-1,n=e[1]>e[0]?1:-1;e[0]+=n*i,e[1]-=n*i}return e}function cs(t){return t>=0?1:-1}function ds(t,e){var i=t.getBaseAxis(),n=t.getOtherAxis(i),o=0;if(!i.onZero){var a=n.scale.getExtent();a[0]>0?o=a[0]:a[1]<0&&(o=a[1])}var r=n.dim,s="x"===r||"radius"===r?1:0;return e.mapArray([r],function(n,a){for(var l,h=e.stackedOn;h&&cs(h.get(r,a))===cs(n);){l=h;break}var u=[];return u[s]=e.get(i.dim,a),u[1-s]=l?l.get(r,a,!0):o,t.dataToPoint(u)},!0)}function fs(t,e,i){var n=us(t.getAxis("x")),o=us(t.getAxis("y")),a=t.getBaseAxis().isHorizontal(),r=Math.min(n[0],n[1]),s=Math.min(o[0],o[1]),l=Math.max(n[0],n[1])-r,h=Math.max(o[0],o[1])-s,u=i.get("lineStyle.normal.width")||2,c=i.get("clipOverflow")?u/2:Math.max(l,h);a?(s-=c,h+=2*c):(r-=c,l+=2*c);var d=new db({shape:{x:r,y:s,width:l,height:h}});return e&&(d.shape[a?"width":"height"]=0,So(d,{shape:{width:l,height:h}},i)),d}function ps(t,e,i){var n=t.getAngleAxis(),o=t.getRadiusAxis().getExtent(),a=n.getExtent(),r=Math.PI/180,s=new rb({shape:{cx:t.cx,cy:t.cy,r0:o[0],r:o[1],startAngle:-a[0]*r,endAngle:-a[1]*r,clockwise:n.inverse}});return e&&(s.shape.endAngle=-a[0]*r,So(s,{shape:{endAngle:-a[1]*r}},i)),s}function gs(t,e,i){return"polar"===t.type?ps(t,e,i):fs(t,e,i)}function ms(t,e,i){for(var n=e.getBaseAxis(),o="x"===n.dim||"radius"===n.dim?0:1,a=[],r=0;r<t.length-1;r++){var s=t[r+1],l=t[r];a.push(l);var h=[];switch(i){case"end":h[o]=s[o],h[1-o]=l[1-o],a.push(h);break;case"middle":var u=(l[o]+s[o])/2,c=[];h[o]=c[o]=u,h[1-o]=l[1-o],c[1-o]=s[1-o],a.push(h),a.push(c);break;default:h[o]=l[o],h[1-o]=s[1-o],a.push(h)}}return t[r]&&a.push(t[r]),a}function vs(t,e){var i=t.getVisual("visualMeta");if(i&&i.length&&t.count()){for(var n,o=i.length-1;o>=0;o--)if(i[o].dimension<2){n=i[o];break}if(n&&"cartesian2d"===e.type){var a=n.dimension,r=t.dimensions[a],s=e.getAxis(r),l=f(n.stops,function(t){return{coord:s.toGlobalCoord(s.dataToCoord(t.value)),color:t.color}}),h=l.length,u=n.outerColors.slice();h&&l[0].coord>l[h-1].coord&&(l.reverse(),u.reverse());var c=l[0].coord-10,p=l[h-1].coord+10,g=p-c;if(g<.001)return"transparent";d(l,function(t){t.offset=(t.coord-c)/g}),l.push({offset:h?l[h-1].offset:.5,color:u[1]||"transparent"}),l.unshift({offset:h?l[0].offset:.5,color:u[0]||"transparent"});var m=new xb(0,0,0,0,l,!0);return m[r]=c,m[r+"2"]=p,m}}}function ys(t){return this._axes[t]}function xs(t){gM.call(this,t)}function _s(t,e){return e.type||(e.data?"category":"value")}function bs(t,e,i){return t.getCoordSysModel()===e}function ws(t,e){var i=e*Math.PI/180,n=t.plain(),o=n.width,a=n.height,r=o*Math.cos(i)+a*Math.sin(i),s=o*Math.sin(i)+a*Math.cos(i);return new jt(n.x,n.y,r,s)}function Ss(t){var e,i=t.model,n=i.getFormattedLabels(),o=i.getModel("axisLabel"),a=1,r=n.length;r>40&&(a=Math.ceil(r/40));for(var s=0;s<r;s+=a)if(!t.isLabelIgnored(s)){var l=ws(o.getTextRect(n[s]),o.get("rotate")||0);e?e.union(l):e=l}return e}function Ms(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i),this.model=t}function Is(t,e,i){var n=t[e];if(i.onZero){var o=i.onZeroAxisIndex;if(null==o){for(var a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r&&!Ts(r)){o=+a;break}}null==o&&(i.onZero=!1),i.onZeroAxisIndex=o}else(r=n[o])&&Ts(r)&&(i.onZero=!1)}}function Ts(t){return"category"===t.type||"time"===t.type||!MM(t)}function As(t,e){var i=t.getExtent(),n=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return n-t+e}}function Cs(t,e){return f(AM,function(e){return t.getReferringComponents(e)[0]})}function Ds(t){return"cartesian2d"===t.get("coordinateSystem")}function Ls(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function ks(t,e,i,n){var o,a,r=Li(i-t.rotation),s=n[0]>n[1],l="start"===e&&!s||"start"!==e&&s;return ki(r-CM/2)?(a=l?"bottom":"top",o="center"):ki(r-1.5*CM)?(a=l?"top":"bottom",o="center"):(a="middle",o=r<1.5*CM&&r>CM/2?l?"left":"right":l?"right":"left"),{rotation:r,textAlign:o,textVerticalAlign:a}}function Ps(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function Os(t,e,i){var n=t.get("axisLabel.showMinLabel"),o=t.get("axisLabel.showMaxLabel");e=e||[],i=i||[];var a=e[0],r=e[1],s=e[e.length-1],l=e[e.length-2],h=i[0],u=i[1],c=i[i.length-1],d=i[i.length-2];!1===n?(zs(a),zs(h)):Ns(a,r)&&(n?(zs(r),zs(u)):(zs(a),zs(h))),!1===o?(zs(s),zs(c)):Ns(l,s)&&(o?(zs(l),zs(d)):(zs(s),zs(c)))}function zs(t){t&&(t.ignore=!0)}function Ns(t,e,i){var n=t&&t.getBoundingRect().clone(),o=e&&e.getBoundingRect().clone();if(n&&o){var a=at([]);return ht(a,a,-t.rotation),n.applyTransform(st([],a,t.getLocalTransform())),o.applyTransform(st([],a,e.getLocalTransform())),n.intersect(o)}}function Es(t){return"middle"===t||"center"===t}function Rs(t,e,i){var n=e.axis;if(e.get("axisTick.show")&&!n.scale.isBlank()){for(var o=e.getModel("axisTick"),a=o.getModel("lineStyle"),s=o.get("length"),l=OM(o,i.labelInterval),h=n.getTicksCoords(o.get("alignWithLabel")),u=n.scale.getTicks(),c=e.get("axisLabel.showMinLabel"),d=e.get("axisLabel.showMaxLabel"),f=[],p=[],g=t._transform,m=[],v=h.length,y=0;y<v;y++)if(!PM(n,y,l,v,c,d)){var x=h[y];f[0]=x,f[1]=0,p[0]=x,p[1]=i.tickDirection*s,g&&($(f,f,g),$(p,p,g));var _=new fb(Yn({anid:"tick_"+u[y],shape:{x1:f[0],y1:f[1],x2:p[0],y2:p[1]},style:r(a.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(_),m.push(_)}return m}}function Vs(t,e,i){var n=e.axis;if(I(i.axisLabelShow,e.get("axisLabel.show"))&&!n.scale.isBlank()){var o=e.getModel("axisLabel"),a=o.get("margin"),r=n.scale.getTicks(),s=e.getFormattedLabels(),l=(I(i.labelRotate,o.get("rotate"))||0)*CM/180,h=kM(i.rotation,l,i.labelDirection),u=e.get("data"),c=[],f=Ps(e),p=e.get("triggerEvent"),g=e.get("axisLabel.showMinLabel"),m=e.get("axisLabel.showMaxLabel");return d(r,function(l,d){if(!PM(n,d,i.labelInterval,r.length,g,m)){var v=o;u&&u[l]&&u[l].textStyle&&(v=new Lo(u[l].textStyle,o,e.ecModel));var y=v.getTextColor()||e.get("axisLine.lineStyle.color"),x=[n.dataToCoord(l),i.labelOffset+i.labelDirection*a],_=n.scale.getLabel(l),b=new ib({anid:"label_"+l,position:x,rotation:h.rotation,silent:f,z2:10});fo(b.style,v,{text:s[d],textAlign:v.getShallow("align",!0)||h.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||h.textVerticalAlign,textFill:"function"==typeof y?y("category"===n.type?_:"value"===n.type?l+"":l,d):y}),p&&(b.eventData=Ls(e),b.eventData.targetType="axisLabel",b.eventData.value=_),t._dumbGroup.add(b),b.updateTransform(),c.push(b),t.group.add(b),b.decomposeTransform()}}),c}}function Bs(t,e){var i={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}};return Gs(i,t,e),i.seriesInvolved&&Hs(i,t),i}function Gs(t,e,i){var n=e.getComponent("tooltip"),o=e.getComponent("axisPointer"),a=o.get("link",!0)||[],r=[];zM(i.getCoordinateSystems(),function(i){function s(n,s,l){var c=l.model.getModel("axisPointer",o),d=c.get("show");if(d&&("auto"!==d||n||qs(c))){null==s&&(s=c.get("triggerTooltip"));var f=(c=n?Ws(l,u,o,e,n,s):c).get("snap"),p=Ys(l.model),g=s||f||"category"===l.type,m=t.axesInfo[p]={key:p,axis:l,coordSys:i,axisPointerModel:c,triggerTooltip:s,involveSeries:g,snap:f,useHandle:qs(c),seriesModels:[]};h[p]=m,t.seriesInvolved|=g;var v=Fs(a,l);if(null!=v){var y=r[v]||(r[v]={axesInfo:{}});y.axesInfo[p]=m,y.mapper=a[v].mapper,m.linkGroup=y}}}if(i.axisPointerEnabled){var l=Ys(i.model),h=t.coordSysAxesInfo[l]={};t.coordSysMap[l]=i;var u=i.model.getModel("tooltip",n);if(zM(i.getAxes(),NM(s,!1,null)),i.getTooltipAxes&&n&&u.get("show")){var c="axis"===u.get("trigger"),d="cross"===u.get("axisPointer.type"),f=i.getTooltipAxes(u.get("axisPointer.axis"));(c||d)&&zM(f.baseAxes,NM(s,!d||"cross",c)),d&&zM(f.otherAxes,NM(s,"cross",!1))}}})}function Ws(t,e,n,o,a,s){var l=e.getModel("axisPointer"),h={};zM(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],function(t){h[t]=i(l.get(t))}),h.snap="category"!==t.type&&!!s,"cross"===l.get("type")&&(h.type="line");var u=h.label||(h.label={});if(null==u.show&&(u.show=!1),"cross"===a&&(u.show=!0,!s)){var c=h.lineStyle=l.get("crossStyle");c&&r(u,c.textStyle)}return t.model.getModel("axisPointer",new Lo(h,n,o))}function Hs(t,e){e.eachSeries(function(e){var i=e.coordinateSystem,n=e.get("tooltip.trigger",!0),o=e.get("tooltip.show",!0);i&&"none"!==n&&!1!==n&&"item"!==n&&!1!==o&&!1!==e.get("axisPointer.show",!0)&&zM(t.coordSysAxesInfo[Ys(i.model)],function(t){var n=t.axis;i.getAxis(n.dim)===n&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count())})},this)}function Fs(t,e){for(var i=e.model,n=e.dim,o=0;o<t.length;o++){var a=t[o]||{};if(Zs(a[n+"AxisId"],i.id)||Zs(a[n+"AxisIndex"],i.componentIndex)||Zs(a[n+"AxisName"],i.name))return o}}function Zs(t,e){return"all"===t||y(t)&&l(t,e)>=0||t===e}function Us(t){var e=Xs(t);if(e){var i=e.axisPointerModel,n=e.axis.scale,o=i.option,a=i.get("status"),r=i.get("value");null!=r&&(r=n.parse(r));var s=qs(i);null==a&&(o.status=s?"show":"hide");var l=n.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==r||r>l[1])&&(r=l[1]),r<l[0]&&(r=l[0]),o.value=r,s&&(o.status=e.axis.scale.isBlank()?"hide":"show")}}function Xs(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[Ys(t)]}function js(t){var e=Xs(t);return e&&e.axisPointerModel}function qs(t){return!!t.get("handle.show")}function Ys(t){return t.type+"||"+t.id}function $s(t,e,i,n,o,a){var r=EM.getAxisPointerClass(t.axisPointerClass);if(r){var s=js(e);s?(t._axisPointer||(t._axisPointer=new r)).render(e,s,n,a):Ks(t,n)}}function Ks(t,e,i){var n=t._axisPointer;n&&n.dispose(e,i),t._axisPointer=null}function Js(t,e,i){i=i||{};var n=t.coordinateSystem,o=e.axis,a={},r=o.position,s=o.onZero?"onZero":r,l=o.dim,h=n.getRect(),u=[h.x,h.x+h.width,h.y,h.y+h.height],c={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,f="x"===l?[u[2]-d,u[3]+d]:[u[0]-d,u[1]+d];if(o.onZero){var p=n.getAxis("x"===l?"y":"x",o.onZeroAxisIndex),g=p.toGlobalCoord(p.dataToCoord(0));f[c.onZero]=Math.max(Math.min(g,f[1]),f[0])}a.position=["y"===l?f[c[s]]:u[0],"x"===l?f[c[s]]:u[3]],a.rotation=Math.PI/2*("x"===l?0:1);var m={top:-1,bottom:1,left:-1,right:1};a.labelDirection=a.tickDirection=a.nameDirection=m[r],a.labelOffset=o.onZero?f[c[r]]-f[c.onZero]:0,e.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),I(i.labelInside,e.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var v=e.get("axisLabel.rotate");return a.labelRotate="top"===s?-v:v,a.labelInterval=o.getLabelInterval(),a.z2=1,a}function Qs(t){return t.get("stack")||FM+t.seriesIndex}function tl(t){return t.dim+t.index}function el(t,e){return il(f(t,function(t){var e=t.getData(),i=t.coordinateSystem.getBaseAxis(),n=i.getExtent(),o="category"===i.type?i.getBandWidth():Math.abs(n[1]-n[0])/e.count();return{bandWidth:o,barWidth:Si(t.get("barWidth"),o),barMaxWidth:Si(t.get("barMaxWidth"),o),barGap:t.get("barGap"),barCategoryGap:t.get("barCategoryGap"),axisKey:tl(i),stackId:Qs(t)}}),e)}function il(t,e){var i={};d(t,function(t,e){var n=t.axisKey,o=t.bandWidth,a=i[n]||{bandWidth:o,remainedWidth:o,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},r=a.stacks;i[n]=a;var s=t.stackId;r[s]||a.autoWidthCount++,r[s]=r[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!r[s].width&&(r[s].width=l,l=Math.min(a.remainedWidth,l),a.remainedWidth-=l);var h=t.barMaxWidth;h&&(r[s].maxWidth=h);var u=t.barGap;null!=u&&(a.gap=u);var c=t.barCategoryGap;null!=c&&(a.categoryGap=c)});var n={};return d(i,function(t,e){n[e]={};var i=t.stacks,o=t.bandWidth,a=Si(t.categoryGap,o),r=Si(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,h=(s-a)/(l+(l-1)*r);h=Math.max(h,0),d(i,function(t,e){var i=t.maxWidth;i&&i<h&&(i=Math.min(i,s),t.width&&(i=Math.min(i,t.width)),s-=i,t.width=i,l--)}),h=(s-a)/(l+(l-1)*r),h=Math.max(h,0);var u,c=0;d(i,function(t,e){t.width||(t.width=h),u=t,c+=t.width*(1+r)}),u&&(c-=u.width*r);var f=-c/2;d(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+r)})}),n}function nl(t,e,i){var n=el(g(e.getSeriesByType(t),function(t){return!e.isSeriesFiltered(t)&&t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type})),o={},a={};e.eachSeriesByType(t,function(t){if("cartesian2d"===t.coordinateSystem.type){var e=t.getData(),i=t.coordinateSystem,r=i.getBaseAxis(),s=Qs(t),l=n[tl(r)][s],h=l.offset,u=l.width,c=i.getOtherAxis(r),d=t.get("barMinHeight")||0,f=r.onZero?c.toGlobalCoord(c.dataToCoord(0)):c.getGlobalExtent()[0],p=[t.coordDimToDataDim("x")[0],t.coordDimToDataDim("y")[0]],g=e.mapArray(p,function(t,e){return i.dataToPoint([t,e])},!0);o[s]=o[s]||[],a[s]=a[s]||[],e.setLayout({offset:h,size:u}),e.each(t.coordDimToDataDim(c.dim)[0],function(t,i){if(!isNaN(t)){o[s][i]||(o[s][i]={p:f,n:f},a[s][i]={p:f,n:f});var n,r,l,p,m=t>=0?"p":"n",v=g[i],y=o[s][i][m],x=a[s][i][m];c.isHorizontal()?(n=y,r=v[1]+h,l=v[0]-x,p=u,a[s][i][m]+=l,Math.abs(l)<d&&(l=(l<0?-1:1)*d),o[s][i][m]+=l):(n=v[0]+h,r=y,l=u,p=v[1]-x,a[s][i][m]+=p,Math.abs(p)<d&&(p=(p<=0?-1:1)*d),o[s][i][m]+=p),e.setItemLayout(i,{x:n,y:r,width:l,height:p})}},!0)}},this)}function ol(t,e,i,n,o,a,r){co(t,e,i.getModel("label.normal"),i.getModel("label.emphasis"),{labelFetcher:o,labelDataIndex:a,defaultText:o.getRawValue(a),isRectText:!0,autoColor:n}),al(t),al(e)}function al(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function rl(t,e,i){i.style.text=null,wo(i,{shape:{width:0}},e,t,function(){i.parent&&i.parent.remove(i)})}function sl(t,e,i){i.style.text=null,wo(i,{shape:{r:i.shape.r0}},e,t,function(){i.parent&&i.parent.remove(i)})}function ll(t,e,i,n,o,a,s,l){var h=e.getItemVisual(i,"color"),u=e.getItemVisual(i,"opacity"),c=n.getModel("itemStyle.normal"),d=n.getModel("itemStyle.emphasis").getBarItemStyle();l||t.setShape("r",c.get("barBorderRadius")||0),t.useStyle(r({fill:h,opacity:u},c.getBarItemStyle()));var f=n.getShallow("cursor");f&&t.attr("cursor",f);var p=s?o.height>0?"bottom":"top":o.width>0?"left":"right";l||ol(t.style,d,n,h,a,i,p),uo(t,d)}function hl(t,e){var i=t.get(jM)||0;return Math.min(i,Math.abs(e.width),Math.abs(e.height))}function ul(t,e,i,n){var o=e.getData(),a=this.dataIndex,r=o.getName(a),s=e.get("selectedOffset");n.dispatchAction({type:"pieToggleSelect",from:t,name:r,seriesId:e.id}),o.each(function(t){cl(o.getItemGraphicEl(t),o.getItemLayout(t),e.isSelected(o.getName(t)),s,i)})}function cl(t,e,i,n,o){var a=(e.startAngle+e.endAngle)/2,r=Math.cos(a),s=Math.sin(a),l=i?n:0,h=[r*l,s*l];o?t.animate().when(200,{position:h}).start("bounceOut"):t.attr("position",h)}function dl(t,e){function i(){a.ignore=a.hoverIgnore,r.ignore=r.hoverIgnore}function n(){a.ignore=a.normalIgnore,r.ignore=r.normalIgnore}jy.call(this);var o=new rb({z2:2}),a=new cb,r=new ib;this.add(o),this.add(a),this.add(r),this.updateData(t,e,!0),this.on("emphasis",i).on("normal",n).on("mouseover",i).on("mouseout",n)}function fl(t,e,i,n,o,a,r){function s(e,i){for(var n=e;n>=0&&(t[n].y-=i,!(n>0&&t[n].y>t[n-1].y+t[n-1].height));n--);}function l(t,e,i,n,o,a){for(var r=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var h=Math.abs(t[s].y-n),u=t[s].len,c=t[s].len2,d=h<o+u?Math.sqrt((o+u+c)*(o+u+c)-h*h):Math.abs(t[s].x-i);e&&d>=r&&(d=r-10),!e&&d<=r&&(d=r+10),t[s].x=i+d*a,r=d}}t.sort(function(t,e){return t.y-e.y});for(var h,u=0,c=t.length,d=[],f=[],p=0;p<c;p++)(h=t[p].y-u)<0&&function(e,i,n,o){for(var a=e;a<i;a++)if(t[a].y+=n,a>e&&a+1<i&&t[a+1].y>t[a].y+t[a].height)return void s(a,n/2);s(i-1,n/2)}(p,c,-h),u=t[p].y+t[p].height;r-u<0&&s(c-1,u-r);for(p=0;p<c;p++)t[p].y>=i?f.push(t[p]):d.push(t[p]);l(d,!1,e,i,n,o),l(f,!0,e,i,n,o)}function pl(t,e,i,n,o,a){for(var r=[],s=[],l=0;l<t.length;l++)t[l].x<e?r.push(t[l]):s.push(t[l]);fl(s,e,i,n,1,o,a),fl(r,e,i,n,-1,o,a);for(l=0;l<t.length;l++){var h=t[l].linePoints;if(h){var u=h[1][0]-h[2][0];t[l].x<e?h[2][0]=t[l].x+3:h[2][0]=t[l].x-3,h[1][1]=h[2][1]=t[l].y,h[1][0]=h[2][0]+u}}}function gl(){this.group=new jy,this._symbolEl=new aI({})}function ml(t,e,i){US.call(this,t,e,i),this.type="value",this.angle=0,this.name="",this.model}function vl(t,e,i){this._model=t,this.dimensions=[],this._indicatorAxes=f(t.getIndicatorModels(),function(t,e){var i="indicator_"+e,n=new ml(i,new yS);return n.name=t.get("name"),n.model=t,t.axis=n,this.dimensions.push(i),n},this),this.resize(t,i),this.cx,this.cy,this.r,this.startAngle}function yl(t,e){return r({show:e},t)}function xl(t){return y(t)||(t=[+t,+t]),t}function _l(){by.call(this)}function bl(t){this.name=t,this.zoomLimit,by.call(this),this._roamTransform=new _l,this._viewTransform=new _l,this._center,this._zoom}function wl(t,e,i,n){var o=i.seriesModel,a=o?o.coordinateSystem:null;return a===this?a[t](n):null}function Sl(t,e,i,n,o){bl.call(this,t),this.map=e,this._nameCoordMap=z(),this.loadGeoJson(i,n,o)}function Ml(t,e,i,n){var o=i.geoModel,a=i.seriesModel,r=o?o.coordinateSystem:a?a.coordinateSystem||(a.getReferringComponents("geo")[0]||{}).coordinateSystem:null;return r===this?r[t](n):null}function Il(t,e){var i=t.get("boundingCoords");if(null!=i){var n=i[0],o=i[1];isNaN(n[0])||isNaN(n[1])||isNaN(o[0])||isNaN(o[1])||this.setBoundingRect(n[0],n[1],o[0]-n[0],o[1]-n[1])}var a,r=this.getBoundingRect(),s=t.get("layoutCenter"),l=t.get("layoutSize"),h=e.getWidth(),u=e.getHeight(),c=t.get("aspectScale")||.75,d=r.width/r.height*c,f=!1;s&&l&&(s=[Si(s[0],h),Si(s[1],u)],l=Si(l,Math.min(h,u)),isNaN(s[0])||isNaN(s[1])||isNaN(l)||(f=!0));if(f){var p={};d>1?(p.width=l,p.height=l/d):(p.height=l,p.width=l*d),p.y=s[1]-p.height/2,p.x=s[0]-p.width/2}else(a=t.getBoxLayoutParams()).aspect=d,p=Ko(a,{width:h,height:u});this.setViewRect(p.x,p.y,p.width,p.height),this.setCenter(t.get("center")),this.setZoom(t.get("zoom"))}function Tl(t,e){d(e.get("geoCoord"),function(e,i){t.addGeoCoord(i,e)})}function Al(t,e,i){Ll(t)[e]=i}function Cl(t,e,i){var n=Ll(t);n[e]===i&&(n[e]=null)}function Dl(t,e){return!!Ll(t)[e]}function Ll(t){return t[bI]||(t[bI]={})}function kl(t){this.pointerChecker,this._zr=t,this._opt={};var e=m,n=e(Pl,this),o=e(Ol,this),a=e(zl,this),s=e(Nl,this),l=e(El,this);fy.call(this),this.setPointerChecker=function(t){this.pointerChecker=t},this.enable=function(e,h){this.disable(),this._opt=r(i(h)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,preventDefaultMouseMove:!0}),null==e&&(e=!0),!0!==e&&"move"!==e&&"pan"!==e||(t.on("mousedown",n),t.on("mousemove",o),t.on("mouseup",a)),!0!==e&&"scale"!==e&&"zoom"!==e||(t.on("mousewheel",s),t.on("pinch",l))},this.disable=function(){t.off("mousedown",n),t.off("mousemove",o),t.off("mouseup",a),t.off("mousewheel",s),t.off("pinch",l)},this.dispose=this.disable,this.isDragging=function(){return this._dragging},this.isPinching=function(){return this._pinching}}function Pl(t){if(!(hi(t)||t.target&&t.target.draggable)){var e=t.offsetX,i=t.offsetY;this.pointerChecker&&this.pointerChecker(t,e,i)&&(this._x=e,this._y=i,this._dragging=!0)}}function Ol(t){if(!hi(t)&&Vl(this,"moveOnMouseMove",t)&&this._dragging&&"pinch"!==t.gestureEvent&&!Dl(this._zr,"globalPan")){var e=t.offsetX,i=t.offsetY,n=this._x,o=this._y,a=e-n,r=i-o;this._x=e,this._y=i,this._opt.preventDefaultMouseMove&&bx(t.event),this.trigger("pan",a,r,n,o,e,i)}}function zl(t){hi(t)||(this._dragging=!1)}function Nl(t){if(Vl(this,"zoomOnMouseWheel",t)&&0!==t.wheelDelta){var e=t.wheelDelta>0?1.1:1/1.1;Rl.call(this,t,e,t.offsetX,t.offsetY)}}function El(t){if(!Dl(this._zr,"globalPan")){var e=t.pinchScale>1?1.1:1/1.1;Rl.call(this,t,e,t.pinchX,t.pinchY)}}function Rl(t,e,i,n){this.pointerChecker&&this.pointerChecker(t,i,n)&&(bx(t.event),this.trigger("zoom",e,i,n))}function Vl(t,e,i){var n=t._opt[e];return n&&(!_(n)||i.event[n+"Key"])}function Bl(t,e,i){var n=t.target,o=n.position;o[0]+=e,o[1]+=i,n.dirty()}function Gl(t,e,i,n){var o=t.target,a=t.zoomLimit,r=o.position,s=o.scale,l=t.zoom=t.zoom||1;if(l*=e,a){var h=a.min||0,u=a.max||1/0;l=Math.max(Math.min(u,l),h)}var c=l/t.zoom;t.zoom=l,r[0]-=(i-r[0])*(c-1),r[1]-=(n-r[1])*(c-1),s[0]*=c,s[1]*=c,o.dirty()}function Wl(t,e,i){var n=e.getComponentByElement(t.topTarget),o=n&&n.coordinateSystem;return n&&n!==i&&!wI[n.mainType]&&o&&o.model!==i}function Hl(t,e){var i=t.getItemStyle(),n=t.get("areaColor");return null!=n&&(i.fill=n),i}function Fl(t,e,i,n,o){i.off("click"),i.off("mousedown"),e.get("selectedMode")&&(i.on("mousedown",function(){t._mouseDownFlag=!0}),i.on("click",function(a){if(t._mouseDownFlag){t._mouseDownFlag=!1;for(var r=a.target;!r.__regions;)r=r.parent;if(r){var s={type:("geo"===e.mainType?"geo":"map")+"ToggleSelect",batch:f(r.__regions,function(t){return{name:t.name,from:o.uid}})};s[e.mainType+"Id"]=e.id,n.dispatchAction(s),Zl(e,i)}}}))}function Zl(t,e){e.eachChild(function(e){d(e.__regions,function(i){e.trigger(t.isSelected(i.name)?"emphasis":"normal")})})}function Ul(t,e){var i=new jy;this._controller=new kl(t.getZr()),this._controllerHost={target:e?i:null},this.group=i,this._updateGroup=e,this._mouseDownFlag}function Xl(t,e,i){var n=t.getZoom(),o=t.getCenter(),a=e.zoom,r=t.dataToPoint(o);if(null!=e.dx&&null!=e.dy){r[0]-=e.dx,r[1]-=e.dy;o=t.pointToData(r);t.setCenter(o)}if(null!=a){if(i){var s=i.min||0,l=i.max||1/0;a=Math.max(Math.min(n*a,l),s)/n}t.scale[0]*=a,t.scale[1]*=a;var h=t.position,u=(e.originX-h[0])*(a-1),c=(e.originY-h[1])*(a-1);h[0]-=u,h[1]-=c,t.updateTransform();o=t.pointToData(r);t.setCenter(o),t.setZoom(a*n)}return{center:t.getCenter(),zoom:t.getZoom()}}function jl(t,e){var i={},n=["value"];return d(t,function(t){t.each(n,function(e,n){var o="ec-"+t.getName(n);i[o]=i[o]||[],isNaN(e)||i[o].push(e)})}),t[0].map(n,function(n,o){for(var a="ec-"+t[0].getName(o),r=0,s=1/0,l=-1/0,h=i[a].length,u=0;u<h;u++)s=Math.min(s,i[a][u]),l=Math.max(l,i[a][u]),r+=i[a][u];var c;return c="min"===e?s:"max"===e?l:"average"===e?r/h:r,0===h?NaN:c})}function ql(t){var e=t.mainData,i=t.datas;i||(i={main:e},t.datasAttr={main:"data"}),t.datas=t.mainData=null,th(e,i,t),SI(i,function(i){SI(e.TRANSFERABLE_METHODS,function(e){i.wrapMethod(e,v(Yl,t))})}),e.wrapMethod("cloneShallow",v(Kl,t)),SI(e.CHANGABLE_METHODS,function(i){e.wrapMethod(i,v($l,t))}),L(i[e.dataType]===e)}function Yl(t,e){if(Ql(this)){var i=a({},this[MI]);i[this.dataType]=e,th(e,i,t)}else eh(e,this.dataType,this[II],t);return e}function $l(t,e){return t.struct&&t.struct.update(this),e}function Kl(t,e){return SI(e[MI],function(i,n){i!==e&&eh(i.cloneShallow(),n,e,t)}),e}function Jl(t){var e=this[II];return null==t||null==e?e:e[MI][t]}function Ql(t){return t[II]===t}function th(t,e,i){t[MI]={},SI(e,function(e,n){eh(e,n,t,i)})}function eh(t,e,i,n){i[MI][e]=t,t[II]=i,t.dataType=e,n.struct&&(t[n.structAttr]=n.struct,n.struct[n.datasAttr[e]]=t),t.getLinkedData=Jl}function ih(t,e,i){this.root,this.data,this._nodes=[],this.hostModel=t,this.levelModels=f(e||[],function(e){return new Lo(e,t,t.ecModel)}),this.leavesModel=new Lo(i||{},t,t.ecModel)}function nh(t,e){var i=e.children;t.parentNode!==e&&(i.push(t),t.parentNode=e)}function oh(t){t.hierNode={defaultAncestor:null,ancestor:t,prelim:0,modifier:0,change:0,shift:0,i:0,thread:null};for(var e,i,n=[t];e=n.pop();)if(i=e.children,e.isExpand&&i.length)for(var o=i.length-1;o>=0;o--){var a=i[o];a.hierNode={defaultAncestor:null,ancestor:a,prelim:0,modifier:0,change:0,shift:0,i:o,thread:null},n.push(a)}}function ah(t,e){var i=t.isExpand?t.children:[],n=t.parentNode.children,o=t.hierNode.i?n[t.hierNode.i-1]:null;if(i.length){uh(t);var a=(i[0].hierNode.prelim+i[i.length-1].hierNode.prelim)/2;o?(t.hierNode.prelim=o.hierNode.prelim+e(t,o),t.hierNode.modifier=t.hierNode.prelim-a):t.hierNode.prelim=a}else o&&(t.hierNode.prelim=o.hierNode.prelim+e(t,o));t.parentNode.hierNode.defaultAncestor=ch(t,o,t.parentNode.hierNode.defaultAncestor||n[0],e)}function rh(t){var e=t.hierNode.prelim+t.parentNode.hierNode.modifier;t.setLayout({x:e},!0),t.hierNode.modifier+=t.parentNode.hierNode.modifier}function sh(t){return arguments.length?t:mh}function lh(t,e){var i={};return t-=Math.PI/2,i.x=e*Math.cos(t),i.y=e*Math.sin(t),i}function hh(t,e){return Ko(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}function uh(t){for(var e=t.children,i=e.length,n=0,o=0;--i>=0;){var a=e[i];a.hierNode.prelim+=n,a.hierNode.modifier+=n,o+=a.hierNode.change,n+=a.hierNode.shift+o}}function ch(t,e,i,n){if(e){for(var o=t,a=t,r=a.parentNode.children[0],s=e,l=o.hierNode.modifier,h=a.hierNode.modifier,u=r.hierNode.modifier,c=s.hierNode.modifier;s=dh(s),a=fh(a),s&&a;){o=dh(o),r=fh(r),o.hierNode.ancestor=t;var d=s.hierNode.prelim+c-a.hierNode.prelim-h+n(s,a);d>0&&(gh(ph(s,t,i),t,d),h+=d,l+=d),c+=s.hierNode.modifier,h+=a.hierNode.modifier,l+=o.hierNode.modifier,u+=r.hierNode.modifier}s&&!dh(o)&&(o.hierNode.thread=s,o.hierNode.modifier+=c-l),a&&!fh(r)&&(r.hierNode.thread=a,r.hierNode.modifier+=h-u,i=t)}return i}function dh(t){var e=t.children;return e.length&&t.isExpand?e[e.length-1]:t.hierNode.thread}function fh(t){var e=t.children;return e.length&&t.isExpand?e[0]:t.hierNode.thread}function ph(t,e,i){return t.hierNode.ancestor.parentNode===e.parentNode?t.hierNode.ancestor:i}function gh(t,e,i){var n=i/(e.hierNode.i-t.hierNode.i);e.hierNode.change-=n,e.hierNode.shift+=i,e.hierNode.modifier+=i,e.hierNode.prelim+=i,t.hierNode.change+=n}function mh(t,e){return t.parentNode===e.parentNode?1:2}function vh(t,e){var i=t.getItemLayout(e);return i&&!isNaN(i.x)&&!isNaN(i.y)&&"none"!==t.getItemVisual(e,"symbol")}function yh(t,e,i){return i.itemModel=e,i.itemStyle=e.getModel("itemStyle.normal").getItemStyle(),i.hoverItemStyle=e.getModel("itemStyle.emphasis").getItemStyle(),i.lineStyle=e.getModel("lineStyle.normal").getLineStyle(),i.labelModel=e.getModel("label.normal"),i.hoverLabelModel=e.getModel("label.emphasis"),!1===t.isExpand&&0!==t.children.length?i.symbolInnerColor=i.itemStyle.fill:i.symbolInnerColor="#fff",i}function xh(t,e,i,n,o,a){var s=!i,l=t.tree.getNodeByDataIndex(e),a=yh(l,l.getModel(),a),h=t.tree.root,u=l.parentNode===h?l:l.parentNode||l,c=t.getItemGraphicEl(u.dataIndex),d=u.getLayout(),f=c?{x:c.position[0],y:c.position[1],rawX:c.__radialOldRawX,rawY:c.__radialOldRawY}:d,p=l.getLayout();s?(i=new Jr(t,e,a)).attr("position",[f.x,f.y]):i.updateData(t,e,a),i.__radialOldRawX=i.__radialRawX,i.__radialOldRawY=i.__radialRawY,i.__radialRawX=p.rawX,i.__radialRawY=p.rawY,n.add(i),t.setItemGraphicEl(e,i),wo(i,{position:[p.x,p.y]},o);var g=i.getSymbolPath();if("radial"===a.layout){var m,v,y=h.children[0],x=y.getLayout(),_=y.children.length;if(p.x===x.x&&!0===l.isExpand){var b={};b.x=(y.children[0].getLayout().x+y.children[_-1].getLayout().x)/2,b.y=(y.children[0].getLayout().y+y.children[_-1].getLayout().y)/2,(m=Math.atan2(b.y-x.y,b.x-x.x))<0&&(m=2*Math.PI+m),(v=b.x<x.x)&&(m-=Math.PI)}else(m=Math.atan2(p.y-x.y,p.x-x.x))<0&&(m=2*Math.PI+m),0===l.children.length||0!==l.children.length&&!1===l.isExpand?(v=p.x<x.x)&&(m-=Math.PI):(v=p.x>x.x)||(m-=Math.PI);var w=v?"left":"right";g.setStyle({textPosition:w,textRotation:-m,textOrigin:"center",verticalAlign:"middle"})}if(l.parentNode&&l.parentNode!==h){var S=i.__edge;S||(S=i.__edge=new gb({shape:bh(a,f,f),style:r({opacity:0},a.lineStyle)})),wo(S,{shape:bh(a,d,p),style:{opacity:1}},o),n.add(S)}}function _h(t,e,i,n,o,a){for(var r,s=t.tree.getNodeByDataIndex(e),l=t.tree.root,a=yh(s,s.getModel(),a),h=s.parentNode===l?s:s.parentNode||s;null==(r=h.getLayout());)h=h.parentNode===l?h:h.parentNode||h;wo(i,{position:[r.x+1,r.y+1]},o,function(){n.remove(i),t.setItemGraphicEl(e,null)}),i.fadeOut(null,{keepLabel:!0});var u=i.__edge;u&&wo(u,{shape:bh(a,r,r),style:{opacity:0}},o,function(){n.remove(u)})}function bh(t,e,i){var n,o,a,r,s=t.orient;if("radial"===t.layout){var l=e.rawX,h=e.rawY,u=i.rawX,c=i.rawY,d=lh(l,h),f=lh(l,h+(c-h)*t.curvature),p=lh(u,c+(h-c)*t.curvature),g=lh(u,c);return{x1:d.x,y1:d.y,x2:g.x,y2:g.y,cpx1:f.x,cpy1:f.y,cpx2:p.x,cpy2:p.y}}var l=e.x,h=e.y,u=i.x,c=i.y;return"horizontal"===s&&(n=l+(u-l)*t.curvature,o=h,a=u+(l-u)*t.curvature,r=c),"vertical"===s&&(n=l,o=h+(c-h)*t.curvature,a=u,r=c+(h-c)*t.curvature),{x1:l,y1:h,x2:u,y2:c,cpx1:n,cpy1:o,cpx2:a,cpy2:r}}function wh(t,e,i){for(var n,o=[t],a=[];n=o.pop();)if(a.push(n),n.isExpand){var r=n.children;if(r.length)for(var s=0;s<r.length;s++)o.push(r[s])}for(;n=a.pop();)e(n,i)}function Sh(t,e){for(var i,n=[t];i=n.pop();)if(e(i),i.isExpand){var o=i.children;if(o.length)for(var a=o.length-1;a>=0;a--)n.push(o[a])}}function Mh(t,e){if(t&&("treemapZoomToNode"===t.type||"treemapRootToNode"===t.type)){var i=e.getData().tree.root,n=t.targetNode;if(n&&i.contains(n))return{node:n};var o=t.targetNodeId;if(null!=o&&(n=i.getNodeById(o)))return{node:n}}}function Ih(t){for(var e=[];t;)(t=t.parentNode)&&e.push(t);return e.reverse()}function Th(t,e){return l(Ih(t),e)>=0}function Ah(t,e){for(var i=[];t;){var n=t.dataIndex;i.push({name:t.name,dataIndex:n,value:e.getRawValue(n)}),t=t.parentNode}return i.reverse(),i}function Ch(t){var e=0;d(t.children,function(t){Ch(t);var i=t.value;y(i)&&(i=i[0]),e+=i});var i=t.value;y(i)&&(i=i[0]),(null==i||isNaN(i))&&(i=e),i<0&&(i=0),y(t.value)?t.value[0]=i:t.value=i}function Dh(t,e){var i=e.get("color");if(i){var n;return d(t=t||[],function(t){var e=new Lo(t),i=e.get("color");(e.get("itemStyle.normal.color")||i&&"none"!==i)&&(n=!0)}),n||((t[0]||(t[0]={})).color=i.slice()),t}}function Lh(t){this.group=new jy,t.add(this.group)}function kh(t,e,i,n,o,a){var r=[[o?t:t-CI,e],[t+i,e],[t+i,e+n],[o?t:t-CI,e+n]];return!a&&r.splice(2,0,[t+i+CI,e+n/2]),!o&&r.push([t,e+n/2]),r}function Ph(t,e,i){t.eventData={componentType:"series",componentSubType:"treemap",seriesIndex:e.componentIndex,seriesName:e.name,seriesType:"treemap",selfType:"breadcrumb",nodeData:{dataIndex:i&&i.dataIndex,name:i&&i.name},treePathInfo:i&&Ah(i,e)}}function Oh(){var t,e=[],i={};return{add:function(t,n,o,a,r){return _(a)&&(r=a,a=0),!i[t.id]&&(i[t.id]=1,e.push({el:t,target:n,time:o,delay:a,easing:r}),!0)},done:function(e){return t=e,this},start:function(){for(var n=e.length,o=0,a=e.length;o<a;o++){var r=e[o];r.el.animateTo(r.target,r.time,r.delay,r.easing,function(){--n||(e.length=0,i={},t&&t())})}return this}}}function zh(t,e,n,o,r,s,l,h,u,c){function d(t,e){b?!t.invisible&&s.push(t):(e(),t.__tmWillVisible||(t.invisible=!1))}function f(e,n,o,a,r,s){var h=l.getModel(),u=I(t.getFormattedLabel(l.dataIndex,"normal",null,null,s?"upperLabel":"label"),h.get("name"));if(!s&&v.isLeafRoot){var c=t.get("drillDownIcon",!0);u=c?c+" "+u:u}var d=h.getModel(s?NI:OI),f=h.getModel(s?EI:zI),p=d.getShallow("show");co(e,n,d,f,{defaultText:p?u:null,autoColor:o,isRectText:!0}),s&&(e.textRect=i(s)),e.truncate=p&&d.get("ellipsis")?{outerWidth:a,outerHeight:r,minChar:2}:null}function p(t,i,o,a){var s=null!=S&&n[t][S],l=r[t];return s?(n[t][S]=null,g(l,s,t)):b||((s=new i({z:Nh(o,a)})).__tmDepth=o,s.__tmStorageName=t,m(l,s,t)),e[t][w]=s}function g(t,e,i){(t[w]={}).old="nodeGroup"===i?e.position.slice():a({},e.shape)}function m(t,e,i){var n=t[w]={},a=l.parentNode;if(a&&(!o||"drillDown"===o.direction)){var s=0,h=0,u=r.background[a.getRawIndex()];!o&&u&&u.old&&(s=u.old.width,h=u.old.height),n.old="nodeGroup"===i?[0,h]:{x:s,y:h,width:0,height:0}}n.fadein="nodeGroup"!==i}if(l){var v=l.getLayout();if(v&&v.isInView){var y=v.width,x=v.height,_=v.borderWidth,b=v.invisible,w=l.getRawIndex(),S=h&&h.getRawIndex(),M=l.viewChildren,T=v.upperHeight,A=M&&M.length,C=l.getModel("itemStyle.normal"),D=l.getModel("itemStyle.emphasis"),L=p("nodeGroup",LI);if(L){if(u.add(L),L.attr("position",[v.x||0,v.y||0]),L.__tmNodeWidth=y,L.__tmNodeHeight=x,v.isAboveViewRoot)return L;var k=p("background",kI,c,VI);if(k&&function(e,i,n){i.dataIndex=l.dataIndex,i.seriesIndex=t.seriesIndex,i.setShape({x:0,y:0,width:y,height:x});var o=l.getVisual("borderColor",!0),a=D.get("borderColor");d(i,function(){var t=WI(C);t.fill=o;var e=GI(D);if(e.fill=a,n){var r=y-2*_;f(t,e,o,r,T,{x:_,y:0,width:r,height:T})}else t.text=e.text=null;i.setStyle(t),uo(i,e)}),e.add(i)}(L,k,A&&v.upperHeight),!A){var P=p("content",kI,c,BI);P&&function(e,i){i.dataIndex=l.dataIndex,i.seriesIndex=t.seriesIndex;var n=Math.max(y-2*_,0),o=Math.max(x-2*_,0);i.culling=!0,i.setShape({x:_,y:_,width:n,height:o});var a=l.getVisual("color",!0);d(i,function(){var t=WI(C);t.fill=a;var e=GI(D);f(t,e,a,n,o),i.setStyle(t),uo(i,e)}),e.add(i)}(L,P)}return L}}}}function Nh(t,e){var i=t*RI+e;return(i-1)/i}function Eh(t){var e=t.pieceList;t.hasSpecialVisual=!1,d(e,function(e,i){e.originIndex=i,null!=e.visual&&(t.hasSpecialVisual=!0)})}function Rh(t){var e=t.categories,i=t.visual,n=t.categoryMap={};if(ZI(e,function(t,e){n[t]=e}),!y(i)){var o=[];b(i)?ZI(i,function(t,e){var i=n[e];o[null!=i?i:XI]=t}):o[XI]=i,i=Xh(t,o)}for(var a=e.length-1;a>=0;a--)null==i[a]&&(delete n[e[a]],e.pop())}function Vh(t,e){var i=t.visual,n=[];b(i)?ZI(i,function(t){n.push(t)}):null!=i&&n.push(i);var o={color:1,symbol:1};e||1!==n.length||o.hasOwnProperty(t.type)||(n[1]=n[0]),Xh(t,n)}function Bh(t){return{applyVisual:function(e,i,n){e=this.mapValueToVisual(e),n("color",t(i("color"),e))},_doMap:Zh([0,1])}}function Gh(t){var e=this.option.visual;return e[Math.round(wi(t,[0,1],[0,e.length-1],!0))]||{}}function Wh(t){return function(e,i,n){n(t,this.mapValueToVisual(e))}}function Hh(t){var e=this.option.visual;return e[this.option.loop&&t!==XI?t%e.length:t]}function Fh(){return this.option.visual[0]}function Zh(t){return{linear:function(e){return wi(e,t,this.option.visual,!0)},category:Hh,piecewise:function(e,i){var n=Uh.call(this,i);return null==n&&(n=wi(e,t,this.option.visual,!0)),n},fixed:Fh}}function Uh(t){var e=this.option,i=e.pieceList;if(e.hasSpecialVisual){var n=i[jI.findPieceIndex(t,i)];if(n&&n.visual)return n.visual[this.type]}}function Xh(t,e){return t.visual=e,"color"===t.type&&(t.parsedVisual=f(e,function(t){return Mt(t)})),e}function jh(t,e,i){return t?e<=i:e<i}function qh(t,e,i,n,o,a){var r=t.getModel(),s=t.getLayout();if(s&&!s.invisible&&s.isInView){var l,h=t.getModel(KI),u=Yh(h,e,i[t.depth],n),c=h.get("borderColor"),f=h.get("borderColorSaturation");null!=f&&(c=Kh(f,l=$h(u))),t.setVisual("borderColor",c);var p=t.viewChildren;if(p&&p.length){var g=Qh(t,r,s,h,u,p);d(p,function(t,e){(t.depth>=o.length||t===o[t.depth])&&qh(t,eu(r,u,t,e,g,a),i,n,o,a)})}else l=$h(u),t.setVisual("color",l)}}function Yh(t,e,i,n){var o=a({},e);return d(["color","colorAlpha","colorSaturation"],function(a){var r=t.get(a,!0);null==r&&i&&(r=i[a]),null==r&&(r=e[a]),null==r&&(r=n.get(a)),null!=r&&(o[a]=r)}),o}function $h(t){var e=Jh(t,"color");if(e){var i=Jh(t,"colorAlpha"),n=Jh(t,"colorSaturation");return n&&(e=kt(e,null,null,n)),i&&(e=Pt(e,i)),e}}function Kh(t,e){return null!=e?kt(e,null,null,t):null}function Jh(t,e){var i=t[e];if(null!=i&&"none"!==i)return i}function Qh(t,e,i,n,o,a){if(a&&a.length){var r=tu(e,"color")||null!=o.color&&"none"!==o.color&&(tu(e,"colorAlpha")||tu(e,"colorSaturation"));if(r){var s=e.get("visualMin"),l=e.get("visualMax"),h=i.dataExtent.slice();null!=s&&s<h[0]&&(h[0]=s),null!=l&&l>h[1]&&(h[1]=l);var u=e.get("colorMappingBy"),c={type:r.name,dataExtent:h,visual:r.range};"color"!==c.type||"index"!==u&&"id"!==u?c.mappingMethod="linear":(c.mappingMethod="category",c.loop=!0);var d=new jI(c);return d.__drColorMappingBy=u,d}}}function tu(t,e){var i=t.get(e);return $I(i)&&i.length?{name:e,range:i}:null}function eu(t,e,i,n,o,r){var s=a({},e);if(o){var l=o.type,h="color"===l&&o.__drColorMappingBy,u="index"===h?n:"id"===h?r.mapIdToIndex(i.getId()):i.getValue(t.get("visualDimension"));s[l]=o.mapValueToVisual(u)}return s}function iu(t,e,i,n){var o,a;if(!t.isRemoved()){var r=t.getLayout();o=r.width,a=r.height;var s=(f=t.getModel()).get(iT),l=f.get(nT)/2,h=du(f),u=Math.max(s,h),c=s-l,d=u-l,f=t.getModel();t.setLayout({borderWidth:s,upperHeight:u,upperLabelHeight:h},!0);var p=(o=JI(o-2*c,0))*(a=JI(a-c-d,0)),g=nu(t,f,p,e,i,n);if(g.length){var m={x:c,y:d,width:o,height:a},v=QI(o,a),y=1/0,x=[];x.area=0;for(var _=0,b=g.length;_<b;){var w=g[_];x.push(w),x.area+=w.getLayout().area;var S=su(x,v,e.squareRatio);S<=y?(_++,y=S):(x.area-=x.pop().getLayout().area,lu(x,v,m,l,!1),v=QI(m.width,m.height),x.length=x.area=0,y=1/0)}if(x.length&&lu(x,v,m,l,!0),!i){var M=f.get("childrenVisibleMin");null!=M&&p<M&&(i=!0)}for(var _=0,b=g.length;_<b;_++)iu(g[_],e,i,n+1)}}}function nu(t,e,i,n,o,a){var r=t.children||[],s=n.sort;"asc"!==s&&"desc"!==s&&(s=null);var l=null!=n.leafDepth&&n.leafDepth<=a;if(o&&!l)return t.viewChildren=[];au(r=g(r,function(t){return!t.isRemoved()}),s);var h=ru(e,r,s);if(0===h.sum)return t.viewChildren=[];if(h.sum=ou(e,i,h.sum,s,r),0===h.sum)return t.viewChildren=[];for(var u=0,c=r.length;u<c;u++){var d=r[u].getValue()/h.sum*i;r[u].setLayout({area:d})}return l&&(r.length&&t.setLayout({isLeafRoot:!0},!0),r.length=0),t.viewChildren=r,t.setLayout({dataExtent:h.dataExtent},!0),r}function ou(t,e,i,n,o){if(!n)return i;for(var a=t.get("visibleMin"),r=o.length,s=r,l=r-1;l>=0;l--){var h=o["asc"===n?r-l-1:l].getValue();h/i*e<a&&(s=l,i-=h)}return"asc"===n?o.splice(0,r-s):o.splice(s,r-s),i}function au(t,e){return e&&t.sort(function(t,i){var n="asc"===e?t.getValue()-i.getValue():i.getValue()-t.getValue();return 0===n?"asc"===e?t.dataIndex-i.dataIndex:i.dataIndex-t.dataIndex:n}),t}function ru(t,e,i){for(var n=0,o=0,a=e.length;o<a;o++)n+=e[o].getValue();var r=t.get("visualDimension");if(e&&e.length)if("value"===r&&i)s=[e[e.length-1].getValue(),e[0].getValue()],"asc"===i&&s.reverse();else{var s=[1/0,-1/0];eT(e,function(t){var e=t.getValue(r);e<s[0]&&(s[0]=e),e>s[1]&&(s[1]=e)})}else s=[NaN,NaN];return{sum:n,dataExtent:s}}function su(t,e,i){for(var n,o=0,a=1/0,r=0,s=t.length;r<s;r++)(n=t[r].getLayout().area)&&(n<a&&(a=n),n>o&&(o=n));var l=t.area*t.area,h=e*e*i;return l?JI(h*o/l,l/(h*a)):1/0}function lu(t,e,i,n,o){var a=e===i.width?0:1,r=1-a,s=["x","y"],l=["width","height"],h=i[s[a]],u=e?t.area/e:0;(o||u>i[l[r]])&&(u=i[l[r]]);for(var c=0,d=t.length;c<d;c++){var f=t[c],p={},g=u?f.getLayout().area/u:0,m=p[l[r]]=JI(u-2*n,0),v=i[s[a]]+i[l[a]]-h,y=c===d-1||v<g?v:g,x=p[l[a]]=JI(y-2*n,0);p[s[r]]=i[s[r]]+QI(n,m/2),p[s[a]]=h+QI(n,x/2),h+=y,f.setLayout(p,!0)}i[s[r]]+=u,i[l[r]]-=u}function hu(t,e,i,n,o){var a=(e||{}).node,r=[n,o];if(!a||a===i)return r;for(var s,l=n*o,h=l*t.option.zoomToNodeRatio;s=a.parentNode;){for(var u=0,c=s.children,d=0,f=c.length;d<f;d++)u+=c[d].getValue();var p=a.getValue();if(0===p)return r;h*=u/p;var g=s.getModel(),m=g.get(iT);(h+=4*m*m+(3*m+Math.max(m,du(g)))*Math.pow(h,.5))>Rx&&(h=Rx),a=s}h<l&&(h=l);var v=Math.pow(h/l,.5);return[n*v,o*v]}function uu(t,e,i){if(e)return{x:e.x,y:e.y};var n={x:0,y:0};if(!i)return n;var o=i.node,a=o.getLayout();if(!a)return n;for(var r=[a.width/2,a.height/2],s=o;s;){var l=s.getLayout();r[0]+=l.x,r[1]+=l.y,s=s.parentNode}return{x:t.width/2-r[0],y:t.height/2-r[1]}}function cu(t,e,i,n,o){var a=t.getLayout(),r=i[o],s=r&&r===t;if(!(r&&!s||o===i.length&&t!==n)){t.setLayout({isInView:!0,invisible:!s&&!e.intersect(a),isAboveViewRoot:s},!0);var l=new jt(e.x-a.x,e.y-a.y,e.width,e.height);eT(t.viewChildren||[],function(t){cu(t,l,i,n,o+1)})}}function du(t){return t.get(oT)?t.get(aT):0}function fu(t){return"_EC_"+t}function pu(t,e){this.id=null==t?"":t,this.inEdges=[],this.outEdges=[],this.edges=[],this.hostGraph,this.dataIndex=null==e?-1:e}function gu(t,e,i){this.node1=t,this.node2=e,this.dataIndex=null==i?-1:i}function mu(t){return isNaN(+t.cpx1)||isNaN(+t.cpy1)}function vu(t){return"_"+t+"Type"}function yu(t,e,i){var n=e.getItemVisual(i,"color"),o=e.getItemVisual(i,t),a=e.getItemVisual(i,t+"Size");if(o&&"none"!==o){y(a)||(a=[a,a]);var r=Hr(o,-a[0]/2,-a[1]/2,a[0],a[1],n);return r.name=t,r}}function xu(t){var e=new fT({name:"line"});return _u(e.shape,t),e}function _u(t,e){var i=e[0],n=e[1],o=e[2];t.x1=i[0],t.y1=i[1],t.x2=n[0],t.y2=n[1],t.percent=1,o?(t.cpx1=o[0],t.cpy1=o[1]):(t.cpx1=NaN,t.cpy1=NaN)}function bu(t,e,i){jy.call(this),this._createLine(t,e,i)}function wu(t){return isNaN(t[0])||isNaN(t[1])}function Su(t){return!wu(t[0])&&!wu(t[1])}function Mu(t){this._ctor=t||bu,this.group=new jy}function Iu(t,e,i){for(var n,o=t[0],a=t[1],r=t[2],s=1/0,l=i*i,h=.1,u=.1;u<=.9;u+=.1)vT[0]=_T(o[0],a[0],r[0],u),vT[1]=_T(o[1],a[1],r[1],u),(f=wT(bT(vT,e)-l))<s&&(s=f,n=u);for(var c=0;c<32;c++){var d=n+h;yT[0]=_T(o[0],a[0],r[0],n),yT[1]=_T(o[1],a[1],r[1],n),xT[0]=_T(o[0],a[0],r[0],d),xT[1]=_T(o[1],a[1],r[1],d);var f=bT(yT,e)-l;if(wT(f)<.01)break;var p=bT(xT,e)-l;h/=2,f<0?p>=0?n+=h:n-=h:p>=0?n-=h:n+=h}return n}function Tu(t,e){return t.getVisual("opacity")||t.getModel().get(e)}function Au(t,e,i){var n=t.getGraphicEl(),o=Tu(t,e);null!=i&&(null==o&&(o=1),o*=i),n.downplay&&n.downplay(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",o)})}function Cu(t,e){var i=Tu(t,e),n=t.getGraphicEl();n.highlight&&n.highlight(),n.traverse(function(t){"group"!==t.type&&t.setStyle("opacity",i)})}function Du(t){return t instanceof Array||(t=[t,t]),t}function Lu(t){var e=t.coordinateSystem;if(!e||"view"===e.type){var i=t.getGraph();i.eachNode(function(t){var e=t.getModel();t.setLayout([+e.get("x"),+e.get("y")])}),ku(i)}}function ku(t){t.eachEdge(function(t){var e=t.getModel().get("lineStyle.normal.curveness")||0,i=V(t.node1.getLayout()),n=V(t.node2.getLayout()),o=[i,n];+e&&o.push([(i[0]+n[0])/2-(i[1]-n[1])*e,(i[1]+n[1])/2-(n[0]-i[0])*e]),t.setLayout(o)})}function Pu(t){var e=t.coordinateSystem;if(!e||"view"===e.type){var i=e.getBoundingRect(),n=t.getData(),o=n.graph,a=0,r=n.getSum("value"),s=2*Math.PI/(r||n.count()),l=i.width/2+i.x,h=i.height/2+i.y,u=Math.min(i.width,i.height)/2;o.eachNode(function(t){var e=t.getValue("value");a+=s*(r?e:1)/2,t.setLayout([u*Math.cos(a)+l,u*Math.sin(a)+h]),a+=s*(r?e:1)/2}),n.setLayout({cx:l,cy:h}),o.eachEdge(function(t){var e,i=t.getModel().get("lineStyle.normal.curveness")||0,n=V(t.node1.getLayout()),o=V(t.node2.getLayout()),a=(n[0]+o[0])/2,r=(n[1]+o[1])/2;+i&&(e=[l*(i*=3)+a*(1-i),h*i+r*(1-i)]),t.setLayout([n,o,e])})}}function Ou(t,e,i){for(var n=i.rect,o=n.width,a=n.height,r=[n.x+o/2,n.y+a/2],s=null==i.gravity?.1:i.gravity,l=0;l<t.length;l++){var h=t[l];h.p||(h.p=E(o*(Math.random()-.5)+r[0],a*(Math.random()-.5)+r[1])),h.pp=V(h.p),h.edges=null}var u=.6;return{warmUp:function(){u=.5},setFixed:function(e){t[e].fixed=!0},setUnfixed:function(e){t[e].fixed=!1},step:function(i){for(var n=[],o=t.length,a=0;a<e.length;a++){var l=e[a],h=l.n1;H(n,(p=l.n2).p,h.p);var c=F(n)-l.d,d=p.w/(h.w+p.w);isNaN(d)&&(d=0),X(n,n),!h.fixed&&TT(h.p,h.p,n,d*c*u),!p.fixed&&TT(p.p,p.p,n,-(1-d)*c*u)}for(a=0;a<o;a++)(v=t[a]).fixed||(H(n,r,v.p),TT(v.p,v.p,n,s*u));for(a=0;a<o;a++)for(var h=t[a],f=a+1;f<o;f++){var p=t[f];H(n,p.p,h.p),0===(c=F(n))&&(B(n,Math.random()-.5,Math.random()-.5),c=1);var g=(h.rep+p.rep)/c/c;!h.fixed&&TT(h.pp,h.pp,n,g),!p.fixed&&TT(p.pp,p.pp,n,-g)}for(var m=[],a=0;a<o;a++){var v=t[a];v.fixed||(H(m,v.p,v.pp),TT(v.p,v.p,m,u),R(v.pp,v.p))}u*=.992,i&&i(t,e,u<.01)}}}function zu(t,e,i){var n=t.getBoxLayoutParams();return n.aspect=i,Ko(n,{width:e.getWidth(),height:e.getHeight()})}function Nu(t,e){var i=t.get("center"),n=e.getWidth(),o=e.getHeight(),a=Math.min(n,o);return{cx:Si(i[0],e.getWidth()),cy:Si(i[1],e.getHeight()),r:Si(t.get("radius"),a/2)}}function Eu(t,e){return e&&("string"==typeof e?t=e.replace("{value}",null!=t?t:""):"function"==typeof e&&(t=e(t))),t}function Ru(t,e){function i(){a.ignore=a.hoverIgnore,r.ignore=r.hoverIgnore}function n(){a.ignore=a.normalIgnore,r.ignore=r.normalIgnore}jy.call(this);var o=new ub,a=new cb,r=new ib;this.add(o),this.add(a),this.add(r),this.updateData(t,e,!0),this.on("emphasis",i).on("normal",n).on("mouseover",i).on("mouseout",n)}function Vu(t,e){return Ko(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}function Bu(t,e){for(var i=t.mapArray("value",function(t){return t}),n=[],o="ascending"===e,a=0,r=t.count();a<r;a++)n[a]=a;return"function"==typeof e?n.sort(e):"none"!==e&&n.sort(function(t,e){return o?i[t]-i[e]:i[e]-i[t]}),n}function Gu(t){t.each(function(e){var i,n,o,a,r=t.getItemModel(e),s=r.getModel("label.normal").get("position"),l=r.getModel("labelLine.normal"),h=t.getItemLayout(e),u=h.points,c="inner"===s||"inside"===s||"center"===s;if(c)i="center",a=[[n=(u[0][0]+u[1][0]+u[2][0]+u[3][0])/4,o=(u[0][1]+u[1][1]+u[2][1]+u[3][1])/4],[n,o]];else{var d,f,p,g=l.get("length");"left"===s?(d=(u[3][0]+u[0][0])/2,f=(u[3][1]+u[0][1])/2,n=(p=d-g)-5,i="right"):(d=(u[1][0]+u[2][0])/2,f=(u[1][1]+u[2][1])/2,n=(p=d+g)+5,i="left");var m=f;a=[[d,f],[p,m]],o=m}h.label={linePoints:a,x:n,y:o,verticalAlign:"middle",textAlign:i,inside:c}})}function Wu(t){if(!t.parallel){var e=!1;d(t.series,function(t){t&&"parallel"===t.type&&(e=!0)}),e&&(t.parallel=[{}])}}function Hu(t){d(Oo(t.parallelAxis),function(e){if(b(e)){var i=e.parallelIndex||0,o=Oo(t.parallel)[i];o&&o.parallelAxisDefault&&n(e,o.parallelAxisDefault,!1)}})}function Fu(t,e){var i=t[e]-t[1-e];return{span:Math.abs(i),sign:i>0?-1:i<0?1:e?-1:1}}function Zu(t,e){return Math.min(e[1],Math.max(e[0],t))}function Uu(t,e,i){this._axesMap=z(),this._axesLayout={},this.dimensions=t.dimensions,this._rect,this._model=t,this._init(t,e,i)}function Xu(t,e){return NT(ET(t,e[0]),e[1])}function ju(t,e){var i=e.layoutLength/(e.axisCount-1);return{position:i*t,axisNameAvailableWidth:i,axisLabelShow:!0}}function qu(t,e){var i,n,o=e.layoutLength,a=e.axisExpandWidth,r=e.axisCount,s=e.axisCollapseWidth,l=e.winInnerIndices,h=s,u=!1;return t<l[0]?(i=t*s,n=s):t<=l[1]?(i=e.axisExpandWindow0Pos+t*a-e.axisExpandWindow[0],h=a,u=!0):(i=o-(r-1-t)*s,n=s),{position:i,axisNameAvailableWidth:h,axisLabelShow:u,nameTruncateMaxWidth:n}}function Yu(t){fy.call(this),this._zr=t,this.group=new jy,this._brushType,this._brushOption,this._panels,this._track=[],this._dragging,this._covers=[],this._creatingCover,this._creatingPanel,this._enableGlobalPan,this._uid="brushController_"+iA++,this._handlers={},ZT(nA,function(t,e){this._handlers[e]=m(t,this)},this)}function $u(t,e){var o=t._zr;t._enableGlobalPan||Al(o,JT,t._uid),ZT(t._handlers,function(t,e){o.on(e,t)}),t._brushType=e.brushType,t._brushOption=n(i(eA),e,!0)}function Ku(t){var e=t._zr;Cl(e,JT,t._uid),ZT(t._handlers,function(t,i){e.off(i,t)}),t._brushType=t._brushOption=null}function Ju(t,e){var i=oA[e.brushType].createCover(t,e);return i.__brushOption=e,ec(i,e),t.group.add(i),i}function Qu(t,e){var i=nc(e);return i.endCreating&&(i.endCreating(t,e),ec(e,e.__brushOption)),e}function tc(t,e){var i=e.__brushOption;nc(e).updateCoverShape(t,e,i.range,i)}function ec(t,e){var i=e.z;null==i&&(i=YT),t.traverse(function(t){t.z=i,t.z2=i})}function ic(t,e){nc(e).updateCommon(t,e),tc(t,e)}function nc(t){return oA[t.__brushOption.brushType]}function oc(t,e,i){var n=t._panels;if(!n)return!0;var o,a=t._transform;return ZT(n,function(t){t.isTargetByCursor(e,i,a)&&(o=t)}),o}function ac(t,e){var i=t._panels;if(!i)return!0;var n=e.__brushOption.panelId;return null==n||i[n]}function rc(t){var e=t._covers,i=e.length;return ZT(e,function(e){t.group.remove(e)},t),e.length=0,!!i}function sc(t,e){var n=UT(t._covers,function(t){var e=t.__brushOption,n=i(e.range);return{brushType:e.brushType,panelId:e.panelId,range:n}});t.trigger("brush",n,{isEnd:!!e.isEnd,removeOnClick:!!e.removeOnClick})}function lc(t){var e=t._track;if(!e.length)return!1;var i=e[e.length-1],n=e[0],o=i[0]-n[0],a=i[1]-n[1];return qT(o*o+a*a,.5)>$T}function hc(t){var e=t.length-1;return e<0&&(e=0),[t[0],t[e]]}function uc(t,e,i,n){var o=new jy;return o.add(new db({name:"main",style:pc(i),silent:!0,draggable:!0,cursor:"move",drift:FT(t,e,o,"nswe"),ondragend:FT(sc,e,{isEnd:!0})})),ZT(n,function(i){o.add(new db({name:i,style:{opacity:0},draggable:!0,silent:!0,invisible:!0,drift:FT(t,e,o,i),ondragend:FT(sc,e,{isEnd:!0})}))}),o}function cc(t,e,i,n){var o=n.brushStyle.lineWidth||0,a=jT(o,KT),r=i[0][0],s=i[1][0],l=r-o/2,h=s-o/2,u=i[0][1],c=i[1][1],d=u-a+o/2,f=c-a+o/2,p=u-r,g=c-s,m=p+o,v=g+o;fc(t,e,"main",r,s,p,g),n.transformable&&(fc(t,e,"w",l,h,a,v),fc(t,e,"e",d,h,a,v),fc(t,e,"n",l,h,m,a),fc(t,e,"s",l,f,m,a),fc(t,e,"nw",l,h,a,a),fc(t,e,"ne",d,h,a,a),fc(t,e,"sw",l,f,a,a),fc(t,e,"se",d,f,a,a))}function dc(t,e){var i=e.__brushOption,n=i.transformable,o=e.childAt(0);o.useStyle(pc(i)),o.attr({silent:!n,cursor:n?"move":"default"}),ZT(["w","e","n","s","se","sw","ne","nw"],function(i){var o=e.childOfName(i),a=vc(t,i);o&&o.attr({silent:!n,invisible:!n,cursor:n?tA[a]+"-resize":null})})}function fc(t,e,i,n,o,a,r){var s=e.childOfName(i);s&&s.setShape(wc(bc(t,e,[[n,o],[n+a,o+r]])))}function pc(t){return r({strokeNoScale:!0},t.brushStyle)}function gc(t,e,i,n){var o=[XT(t,i),XT(e,n)],a=[jT(t,i),jT(e,n)];return[[o[0],a[0]],[o[1],a[1]]]}function mc(t){return Mo(t.group)}function vc(t,e){if(e.length>1)return("e"===(n=[vc(t,(e=e.split(""))[0]),vc(t,e[1])])[0]||"w"===n[0])&&n.reverse(),n.join("");var i={left:"w",right:"e",top:"n",bottom:"s"},n=To({w:"left",e:"right",n:"top",s:"bottom"}[e],mc(t));return i[n]}function yc(t,e,i,n,o,a,r,s){var l=n.__brushOption,h=t(l.range),u=_c(i,a,r);ZT(o.split(""),function(t){var e=QT[t];h[e[0]][e[1]]+=u[e[0]]}),l.range=e(gc(h[0][0],h[1][0],h[0][1],h[1][1])),ic(i,n),sc(i,{isEnd:!1})}function xc(t,e,i,n,o){var a=e.__brushOption.range,r=_c(t,i,n);ZT(a,function(t){t[0]+=r[0],t[1]+=r[1]}),ic(t,e),sc(t,{isEnd:!1})}function _c(t,e,i){var n=t.group,o=n.transformCoordToLocal(e,i),a=n.transformCoordToLocal(0,0);return[o[0]-a[0],o[1]-a[1]]}function bc(t,e,n){var o=ac(t,e);return o&&!0!==o?o.clipPath(n,t._transform):i(n)}function wc(t){var e=XT(t[0][0],t[1][0]),i=XT(t[0][1],t[1][1]);return{x:e,y:i,width:jT(t[0][0],t[1][0])-e,height:jT(t[0][1],t[1][1])-i}}function Sc(t,e,i){if(t._brushType){var n=t._zr,o=t._covers,a=oc(t,e,i);if(!t._dragging)for(var r=0;r<o.length;r++){var s=o[r].__brushOption;if(a&&(!0===a||s.panelId===a.panelId)&&oA[s.brushType].contain(o[r],i[0],i[1]))return}a&&n.setCursorStyle("crosshair")}}function Mc(t){var e=t.event;e.preventDefault&&e.preventDefault()}function Ic(t,e,i){return t.childOfName("main").contain(e,i)}function Tc(t,e,n,o){var a,r=t._creatingCover,s=t._creatingPanel,l=t._brushOption;if(t._track.push(n.slice()),lc(t)||r){if(s&&!r){"single"===l.brushMode&&rc(t);var h=i(l);h.brushType=Ac(h.brushType,s),h.panelId=!0===s?null:s.panelId,r=t._creatingCover=Ju(t,h),t._covers.push(r)}if(r){var u=oA[Ac(t._brushType,s)];r.__brushOption.range=u.getCreatingRange(bc(t,r,t._track)),o&&(Qu(t,r),u.updateCommon(t,r)),tc(t,r),a={isEnd:o}}}else o&&"single"===l.brushMode&&l.removeOnClick&&oc(t,e,n)&&rc(t)&&(a={isEnd:o,removeOnClick:!0});return a}function Ac(t,e){return"auto"===t?e.defaultBrushType:t}function Cc(t){if(this._dragging){Mc(t);var e=Tc(this,t,this.group.transformCoordToLocal(t.offsetX,t.offsetY),!0);this._dragging=!1,this._track=[],this._creatingCover=null,e&&sc(this,e)}}function Dc(t){return{createCover:function(e,i){return uc(FT(yc,function(e){var i=[e,[0,100]];return t&&i.reverse(),i},function(e){return e[t]}),e,i,[["w","e"],["n","s"]][t])},getCreatingRange:function(e){var i=hc(e);return[XT(i[0][t],i[1][t]),jT(i[0][t],i[1][t])]},updateCoverShape:function(e,i,n,o){var a,r=ac(e,i);if(!0!==r&&r.getLinearBrushOtherExtent)a=r.getLinearBrushOtherExtent(t,e._transform);else{var s=e._zr;a=[0,[s.getWidth(),s.getHeight()][1-t]]}var l=[n,a];t&&l.reverse(),cc(e,i,l,o)},updateCommon:dc,contain:Ic}}function Lc(t){return t=Oc(t),function(e,i){return Co(e,t)}}function kc(t,e){return t=Oc(t),function(i){var n=null!=e?e:i,o=n?t.width:t.height,a=n?t.x:t.y;return[a,a+(o||0)]}}function Pc(t,e,i){return t=Oc(t),function(n,o,a){return t.contain(o[0],o[1])&&!Wl(n,e,i)}}function Oc(t){return jt.create(t)}function zc(t,e,i){return i&&"axisAreaSelect"===i.type&&e.findComponents({mainType:"parallelAxis",query:i})[0]===t}function Nc(t){var e=t.axis;return f(t.activeIntervals,function(t){return{brushType:"lineX",panelId:"pl",range:[e.dataToCoord(t[0],!0),e.dataToCoord(t[1],!0)]}})}function Ec(t,e){return e.getComponent("parallel",t.get("parallelIndex"))}function Rc(t,e){var i=t._model;return i.get("axisExpandable")&&i.get("axisExpandTriggerOn")===e}function Vc(t,e,i){var n=t.get("data"),o=Bc(e);n&&n.length&&d(i,function(t){if(t){var e=l(n,t[o]);t[o]=e>=0?e:NaN}})}function Bc(t){return+t.replace("dim","")}function Gc(t,e){var i=0;d(t,function(t){var e=Bc(t);e>i&&(i=e)});var n=e[0];n&&n.length-1>i&&(i=n.length-1);for(var o=[],a=0;a<=i;a++)o.push("dim"+a);return o}function Wc(t,e,i){var n=t.model,o=t.getRect(),a=new db({shape:{x:o.x,y:o.y,width:o.width,height:o.height}}),r="horizontal"===n.get("layout")?"width":"height";return a.setShape(r,0),So(a,{shape:{width:o.width,height:o.height}},e,i),a}function Hc(t,e,i,n){for(var o=[],a=0;a<i.length;a++){var r=i[a],s=t.get(r,e);Uc(s,n.getAxis(r).type)||o.push(n.dataToPoint(s,r))}return o}function Fc(t,e,i,n,o){var a=Hc(t,i,n,o),r=new cb({shape:{points:a},silent:!0,z2:10});e.add(r),t.setItemGraphicEl(i,r)}function Zc(t,e){var i=t.hostModel.getModel("lineStyle.normal"),n=i.getLineStyle();t.eachItemGraphicEl(function(o,r){if(t.hasItemOption){var s=t.getItemModel(r).getModel("lineStyle.normal",i);n=s.getLineStyle(["color","stroke"])}o.useStyle(a(n,{fill:null,stroke:t.getItemVisual(r,"color"),opacity:t.getItemVisual(r,"opacity")})),o.shape.smooth=e})}function Uc(t,e){return"category"===e?null==t:null==t||isNaN(t)}function Xc(t,e,i){var n=new db({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return So(n,{shape:{width:t.width+20,height:t.height+20}},e,i),n}function jc(){function t(e,n){if(n>=i.length)return e;for(var o=-1,a=e.length,r=i[n++],s={},l={};++o<a;){var h=r(e[o]),u=l[h];u?u.push(e[o]):l[h]=[e[o]]}return d(l,function(e,i){s[i]=t(e,n)}),s}function e(t,o){if(o>=i.length)return t;var a=[],r=n[o++];return d(t,function(t,i){a.push({key:i,values:e(t,o)})}),r?a.sort(function(t,e){return r(t.key,e.key)}):a}var i=[],n=[];return{key:function(t){return i.push(t),this},sortKeys:function(t){return n[i.length-1]=t,this},entries:function(i){return e(t(i,0),0)}}}function qc(t,e){return Ko(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})}function Yc(t,e,i,n,o,a,r){Kc(t,i,o),td(t,e,a,n,r),sd(t)}function $c(t){d(t,function(t){var e=ud(t.outEdges,pd),i=ud(t.inEdges,pd),n=Math.max(e,i);t.setLayout({value:n},!0)})}function Kc(t,e,i){for(var n=t,o=null,a=0;n.length;){o=[];for(var r=0,s=n.length;r<s;r++){var l=n[r];l.setLayout({x:a},!0),l.setLayout({dx:e},!0);for(var h=0,u=l.outEdges.length;h<u;h++)o.push(l.outEdges[h].node2)}n=o,++a}Jc(t,a),Qc(t,(i-e)/(a-1))}function Jc(t,e){d(t,function(t){t.outEdges.length||t.setLayout({x:e-1},!0)})}function Qc(t,e){d(t,function(t){var i=t.getLayout().x*e;t.setLayout({x:i},!0)})}function td(t,e,i,n,o){var a=jc().key(function(t){return t.getLayout().x}).sortKeys(fd).entries(t).map(function(t){return t.values});ed(t,a,e,i,n),id(a,n,i);for(var r=1;o>0;o--)nd(a,r*=.99),id(a,n,i),ad(a,r),id(a,n,i)}function ed(t,e,i,n,o){var a=[];d(e,function(t){var e=t.length,i=0;d(t,function(t){i+=t.getLayout().value});var r=(n-(e-1)*o)/i;a.push(r)}),a.sort(function(t,e){return t-e});var r=a[0];d(e,function(t){d(t,function(t,e){t.setLayout({y:e},!0);var i=t.getLayout().value*r;t.setLayout({dy:i},!0)})}),d(i,function(t){var e=+t.getValue()*r;t.setLayout({dy:e},!0)})}function id(t,e,i){d(t,function(t){var n,o,a,r=0,s=t.length;for(t.sort(dd),a=0;a<s;a++){if(n=t[a],(o=r-n.getLayout().y)>0){l=n.getLayout().y+o;n.setLayout({y:l},!0)}r=n.getLayout().y+n.getLayout().dy+e}if((o=r-e-i)>0){var l=n.getLayout().y-o;for(n.setLayout({y:l},!0),r=n.getLayout().y,a=s-2;a>=0;--a)(o=(n=t[a]).getLayout().y+n.getLayout().dy+e-r)>0&&(l=n.getLayout().y-o,n.setLayout({y:l},!0)),r=n.getLayout().y}})}function nd(t,e){d(t.slice().reverse(),function(t){d(t,function(t){if(t.outEdges.length){var i=ud(t.outEdges,od)/ud(t.outEdges,pd),n=t.getLayout().y+(i-cd(t))*e;t.setLayout({y:n},!0)}})})}function od(t){return cd(t.node2)*t.getValue()}function ad(t,e){d(t,function(t){d(t,function(t){if(t.inEdges.length){var i=ud(t.inEdges,rd)/ud(t.inEdges,pd),n=t.getLayout().y+(i-cd(t))*e;t.setLayout({y:n},!0)}})})}function rd(t){return cd(t.node1)*t.getValue()}function sd(t){d(t,function(t){t.outEdges.sort(ld),t.inEdges.sort(hd)}),d(t,function(t){var e=0,i=0;d(t.outEdges,function(t){t.setLayout({sy:e},!0),e+=t.getLayout().dy}),d(t.inEdges,function(t){t.setLayout({ty:i},!0),i+=t.getLayout().dy})})}function ld(t,e){return t.node2.getLayout().y-e.node2.getLayout().y}function hd(t,e){return t.node1.getLayout().y-e.node1.getLayout().y}function ud(t,e){for(var i=0,n=t.length,o=-1;++o<n;){var a=+e.call(t,t[o],o);isNaN(a)||(i+=a)}return i}function cd(t){return t.getLayout().y+t.getLayout().dy/2}function dd(t,e){return t.getLayout().y-e.getLayout().y}function fd(t,e){return t<e?-1:t>e?1:t===e?0:NaN}function pd(t){return t.getValue()}function gd(t,e,i,n){jy.call(this),this.bodyIndex,this.whiskerIndex,this.styleUpdater=i,this._createContent(t,e,n),this.updateData(t,e,n),this._seriesModel}function md(t,e,i){return f(t,function(t){return t=t.slice(),t[e]=i.initBaseline,t})}function vd(t){var e={};return d(t,function(t,i){e["ends"+i]=t}),e}function yd(t){this.group=new jy,this.styleUpdater=t}function xd(t,e,i){var n=e.getItemModel(i),o=n.getModel(mA),a=e.getItemVisual(i,"color"),r=o.getItemStyle(["borderColor"]),s=t.childAt(t.whiskerIndex);s.style.set(r),s.style.stroke=a,s.dirty();var l=t.childAt(t.bodyIndex);l.style.set(r),l.style.stroke=a,l.dirty(),uo(t,n.getModel(vA).getItemStyle())}function _d(t){var e=[],i=[];return t.eachSeriesByType("boxplot",function(t){var n=t.getBaseAxis(),o=l(i,n);o<0&&(o=i.length,i[o]=n,e[o]={axis:n,seriesModels:[]}),e[o].seriesModels.push(t)}),e}function bd(t){var e,i,n=t.axis,o=t.seriesModels,a=o.length,r=t.boxWidthList=[],s=t.boxOffsetList=[],l=[];if("category"===n.type)i=n.getBandWidth();else{var h=0;xA(o,function(t){h=Math.max(h,t.getData().count())}),e=n.getExtent(),Math.abs(e[1]-e[0])}xA(o,function(t){var e=t.get("boxWidth");y(e)||(e=[e,e]),l.push([Si(e[0],i)||0,Si(e[1],i)||0])});var u=.8*i-2,c=u/a*.3,d=(u-c*(a-1))/a,f=d/2-u/2;xA(o,function(t,e){s.push(f),f+=c+d,r.push(Math.min(Math.max(d,l[e][0]),l[e][1]))})}function wd(t,e,i){var n,o=t.coordinateSystem,a=t.getData(),r=i/2,s=t.get("layout"),l="horizontal"===s?0:1,h=1-l,u=["x","y"],c=[];d(a.dimensions,function(t){var e=a.getDimensionInfo(t).coordDim;e===u[h]?c.push(t):e===u[l]&&(n=t)}),null==n||c.length<5||a.each([n].concat(c),function(){function t(t){var i=[];i[l]=d,i[h]=t;var n;return isNaN(d)||isNaN(t)?n=[NaN,NaN]:(n=o.dataToPoint(i))[l]+=e,n}function i(t,e){var i=t.slice(),n=t.slice();i[l]+=r,n[l]-=r,e?y.push(i,n):y.push(n,i)}function n(t){var e=[t.slice(),t.slice()];e[0][l]-=r,e[1][l]+=r,v.push(e)}var u=arguments,d=u[0],f=u[c.length+1],p=t(u[3]),g=t(u[1]),m=t(u[5]),v=[[g,t(u[2])],[m,t(u[4])]];n(g),n(m),n(p);var y=[];i(v[0][1],0),i(v[1][1],1),a.setItemLayout(f,{chartLayout:s,initBaseline:p[h],median:p,bodyEnds:y,whiskerEnds:v})})}function Sd(t,e,i){var n=e.getItemModel(i),o=n.getModel(_A),a=e.getItemVisual(i,"color"),r=e.getItemVisual(i,"borderColor")||a,s=o.getItemStyle(["color","color0","borderColor","borderColor0"]),l=t.childAt(t.whiskerIndex);l.useStyle(s),l.style.stroke=r;var h=t.childAt(t.bodyIndex);h.useStyle(s),h.style.fill=a,h.style.stroke=r,uo(t,n.getModel(bA).getItemStyle())}function Md(t,e){var i,n=t.getBaseAxis(),o="category"===n.type?n.getBandWidth():(i=n.getExtent(),Math.abs(i[1]-i[0])/e.count()),a=Si(TA(t.get("barMaxWidth"),o),o),r=Si(TA(t.get("barMinWidth"),1),o),s=t.get("barWidth");return null!=s?Si(s,o):Math.max(Math.min(o/2,a),r)}function Id(t){return y(t)||(t=[+t,+t]),t}function Td(t,e){t.eachChild(function(t){t.attr({z:e.z,zlevel:e.zlevel,style:{stroke:"stroke"===e.brushType?e.color:null,fill:"fill"===e.brushType?e.color:null}})})}function Ad(t,e){jy.call(this);var i=new Jr(t,e),n=new jy;this.add(i),this.add(n),n.beforeUpdate=function(){this.attr(i.getScale())},this.updateData(t,e)}function Cd(t){var e=t.data;e&&e[0]&&e[0][0]&&e[0][0].coord&&(t.data=f(e,function(t){var e={coords:[t[0].coord,t[1].coord]};return t[0].name&&(e.fromName=t[0].name),t[1].name&&(e.toName=t[1].name),o([e,t[0],t[1]])}))}function Dd(t,e,i){jy.call(this),this.add(this.createLine(t,e,i)),this._updateEffectSymbol(t,e)}function Ld(t,e,i){jy.call(this),this._createPolyline(t,e,i)}function kd(t,e,i){Dd.call(this,t,e,i),this._lastFrame=0,this._lastFramePercent=0}function Pd(){this.group=new jy,this._lineEl=new PA}function Od(t){return t instanceof Array||(t=[t,t]),t}function zd(){var t=iy();this.canvas=t,this.blurSize=30,this.pointSize=20,this.maxOpacity=1,this.minOpacity=0,this._gradientPixels={}}function Nd(t,e,i){var n=t[1]-t[0],o=(e=f(e,function(e){return{interval:[(e.interval[0]-t[0])/n,(e.interval[1]-t[0])/n]}})).length,a=0;return function(t){for(n=a;n<o;n++)if((r=e[n].interval)[0]<=t&&t<=r[1]){a=n;break}if(n===o)for(var n=a-1;n>=0;n--){var r=e[n].interval;if(r[0]<=t&&t<=r[1]){a=n;break}}return n>=0&&n<o&&i[n]}}function Ed(t,e){var i=t[1]-t[0];return e=[(e[0]-t[0])/i,(e[1]-t[0])/i],function(t){return t>=e[0]&&t<=e[1]}}function Rd(t){var e=t.dimensions;return"lng"===e[0]&&"lat"===e[1]}function Vd(t,e,i,n){var o=t.getItemLayout(e),a=i.get("symbolRepeat"),r=i.get("symbolClip"),s=i.get("symbolPosition")||"start",l=(i.get("symbolRotate")||0)*Math.PI/180||0,h=i.get("symbolPatternSize")||2,u=i.isAnimationEnabled(),c={dataIndex:e,layout:o,itemModel:i,symbolType:t.getItemVisual(e,"symbol")||"circle",color:t.getItemVisual(e,"color"),symbolClip:r,symbolRepeat:a,symbolRepeatDirection:i.get("symbolRepeatDirection"),symbolPatternSize:h,rotation:l,animationModel:u?i:null,hoverAnimation:u&&i.get("hoverAnimation"),z2:i.getShallow("z",!0)||0};Bd(i,a,o,n,c),Wd(t,e,o,a,r,c.boundingLength,c.pxSign,h,n,c),Hd(i,c.symbolScale,l,n,c);var d=c.symbolSize,f=i.get("symbolOffset");return y(f)&&(f=[Si(f[0],d[0]),Si(f[1],d[1])]),Fd(i,d,o,a,r,f,s,c.valueLineWidth,c.boundingLength,c.repeatCutLength,n,c),c}function Bd(t,e,i,n,o){var a,r=n.valueDim,s=t.get("symbolBoundingData"),l=n.coordSys.getOtherAxis(n.coordSys.getBaseAxis()),h=l.toGlobalCoord(l.dataToCoord(0)),u=1-+(i[r.wh]<=0);if(y(s)){var c=[Gd(l,s[0])-h,Gd(l,s[1])-h];c[1]<c[0]&&c.reverse(),a=c[u]}else a=null!=s?Gd(l,s)-h:e?n.coordSysExtent[r.index][u]-h:i[r.wh];o.boundingLength=a,e&&(o.repeatCutLength=i[r.wh]),o.pxSign=a>0?1:a<0?-1:0}function Gd(t,e){return t.toGlobalCoord(t.dataToCoord(t.scale.parse(e)))}function Wd(t,e,i,n,o,a,r,s,l,h){var u=l.valueDim,c=l.categoryDim,d=Math.abs(i[c.wh]),f=t.getItemVisual(e,"symbolSize");y(f)?f=f.slice():(null==f&&(f="100%"),f=[f,f]),f[c.index]=Si(f[c.index],d),f[u.index]=Si(f[u.index],n?d:Math.abs(a)),h.symbolSize=f,(h.symbolScale=[f[0]/s,f[1]/s])[u.index]*=(l.isHorizontal?-1:1)*r}function Hd(t,e,i,n,o){var a=t.get(NA)||0;a&&(RA.attr({scale:e.slice(),rotation:i}),RA.updateTransform(),a/=RA.getLineScale(),a*=e[n.valueDim.index]),o.valueLineWidth=a}function Fd(t,e,i,n,o,r,s,l,h,u,c,d){var f=c.categoryDim,p=c.valueDim,g=d.pxSign,m=Math.max(e[p.index]+l,0),v=m;if(n){var y=Math.abs(h),x=I(t.get("symbolMargin"),"15%")+"",_=!1;x.lastIndexOf("!")===x.length-1&&(_=!0,x=x.slice(0,x.length-1)),x=Si(x,e[p.index]);var b=Math.max(m+2*x,0),w=_?0:2*x,S=Ri(n),M=S?n:sf((y+w)/b);b=m+2*(x=(y-M*m)/2/(_?M:M-1)),w=_?0:2*x,S||"fixed"===n||(M=u?sf((Math.abs(u)+w)/b):0),v=M*b-w,d.repeatTimes=M,d.symbolMargin=x}var T=g*(v/2),A=d.pathPosition=[];A[f.index]=i[f.wh]/2,A[p.index]="start"===s?T:"end"===s?h-T:h/2,r&&(A[0]+=r[0],A[1]+=r[1]);var C=d.bundlePosition=[];C[f.index]=i[f.xy],C[p.index]=i[p.xy];var D=d.barRectShape=a({},i);D[p.wh]=g*Math.max(Math.abs(i[p.wh]),Math.abs(A[p.index]+T)),D[f.wh]=i[f.wh];var L=d.clipShape={};L[f.xy]=-i[f.xy],L[f.wh]=c.ecSize[f.wh],L[p.xy]=0,L[p.wh]=i[p.wh]}function Zd(t){var e=t.symbolPatternSize,i=Hr(t.symbolType,-e/2,-e/2,e,e,t.color);return i.attr({culling:!0}),"image"!==i.type&&i.setStyle({strokeNoScale:!0}),i}function Ud(t,e,i,n){function o(t){var e=l.slice(),n=i.pxSign,o=t;return("start"===i.symbolRepeatDirection?n>0:n<0)&&(o=u-1-t),e[h.index]=d*(o-u/2+.5)+l[h.index],{position:e,scale:i.symbolScale.slice(),rotation:i.rotation}}var a=t.__pictorialBundle,r=i.symbolSize,s=i.valueLineWidth,l=i.pathPosition,h=e.valueDim,u=i.repeatTimes||0,c=0,d=r[e.valueDim.index]+s+2*i.symbolMargin;for(of(t,function(t){t.__pictorialAnimationIndex=c,t.__pictorialRepeatTimes=u,c<u?af(t,null,o(c),i,n):af(t,null,{scale:[0,0]},i,n,function(){a.remove(t)}),Jd(t,i),c++});c<u;c++){var f=Zd(i);f.__pictorialAnimationIndex=c,f.__pictorialRepeatTimes=u,a.add(f);var p=o(c);af(f,{position:p.position,scale:[0,0]},{scale:p.scale,rotation:p.rotation},i,n),f.on("mouseover",function(){of(t,function(t){t.trigger("emphasis")})}).on("mouseout",function(){of(t,function(t){t.trigger("normal")})}),Jd(f,i)}}function Xd(t,e,i,n){var o=t.__pictorialBundle,a=t.__pictorialMainPath;a?af(a,null,{position:i.pathPosition.slice(),scale:i.symbolScale.slice(),rotation:i.rotation},i,n):(a=t.__pictorialMainPath=Zd(i),o.add(a),af(a,{position:i.pathPosition.slice(),scale:[0,0],rotation:i.rotation},{scale:i.symbolScale.slice()},i,n),a.on("mouseover",function(){this.trigger("emphasis")}).on("mouseout",function(){this.trigger("normal")})),Jd(a,i)}function jd(t,e,i){var n=a({},e.barRectShape),o=t.__pictorialBarRect;o?af(o,null,{shape:n},e,i):(o=t.__pictorialBarRect=new db({z2:2,shape:n,silent:!0,style:{stroke:"transparent",fill:"transparent",lineWidth:0}}),t.add(o))}function qd(t,e,i,n){if(i.symbolClip){var o=t.__pictorialClipPath,r=a({},i.clipShape),s=e.valueDim,l=i.animationModel,h=i.dataIndex;if(o)wo(o,{shape:r},l,h);else{r[s.wh]=0,o=new db({shape:r}),t.__pictorialBundle.setClipPath(o),t.__pictorialClipPath=o;var u={};u[s.wh]=i.clipShape[s.wh],Tb[n?"updateProps":"initProps"](o,{shape:u},l,h)}}}function Yd(t,e){var i=t.getItemModel(e);return i.getAnimationDelayParams=$d,i.isAnimationEnabled=Kd,i}function $d(t){return{index:t.__pictorialAnimationIndex,count:t.__pictorialRepeatTimes}}function Kd(){return this.parentModel.isAnimationEnabled()&&!!this.getShallow("animation")}function Jd(t,e){t.off("emphasis").off("normal");var i=e.symbolScale.slice();e.hoverAnimation&&t.on("emphasis",function(){this.animateTo({scale:[1.1*i[0],1.1*i[1]]},400,"elasticOut")}).on("normal",function(){this.animateTo({scale:i.slice()},400,"elasticOut")})}function Qd(t,e,i,n){var o=new jy,a=new jy;return o.add(a),o.__pictorialBundle=a,a.attr("position",i.bundlePosition.slice()),i.symbolRepeat?Ud(o,e,i):Xd(o,e,i),jd(o,i,n),qd(o,e,i,n),o.__pictorialShapeStr=nf(t,i),o.__pictorialSymbolMeta=i,o}function tf(t,e,i){var n=i.animationModel,o=i.dataIndex;wo(t.__pictorialBundle,{position:i.bundlePosition.slice()},n,o),i.symbolRepeat?Ud(t,e,i,!0):Xd(t,e,i,!0),jd(t,i,!0),qd(t,e,i,!0)}function ef(t,e,i,n){var o=n.__pictorialBarRect;o&&(o.style.text=null);var a=[];of(n,function(t){a.push(t)}),n.__pictorialMainPath&&a.push(n.__pictorialMainPath),n.__pictorialClipPath&&(i=null),d(a,function(t){wo(t,{scale:[0,0]},i,e,function(){n.parent&&n.parent.remove(n)})}),t.setItemGraphicEl(e,null)}function nf(t,e){return[t.getItemVisual(e.dataIndex,"symbol")||"none",!!e.symbolRepeat,!!e.symbolClip].join(":")}function of(t,e,i){d(t.__pictorialBundle.children(),function(n){n!==t.__pictorialBarRect&&e.call(i,n)})}function af(t,e,i,n,o,a){e&&t.attr(e),n.symbolClip&&!o?i&&t.attr(i):i&&Tb[o?"updateProps":"initProps"](t,i,n.animationModel,n.dataIndex,a)}function rf(t,e,i){var n=i.color,o=i.dataIndex,a=i.itemModel,s=a.getModel("itemStyle.normal").getItemStyle(["color"]),l=a.getModel("itemStyle.emphasis").getItemStyle(),h=a.getShallow("cursor");of(t,function(t){t.setColor(n),t.setStyle(r({fill:n,opacity:i.opacity},s)),uo(t,l),h&&(t.cursor=h),t.z2=i.z2});var u={},c=e.valueDim.posDesc[+(i.boundingLength>0)],d=t.__pictorialBarRect;ol(d.style,u,a,n,e.seriesModel,o,c),uo(d,u)}function sf(t){var e=Math.round(t);return Math.abs(t-e)<1e-4?e:Math.ceil(t)}function lf(t,e,i){this.dimension="single",this.dimensions=["single"],this._axis=null,this._rect,this._init(t,e,i),this.model=t}function hf(t,e){e=e||{};var i=t.coordinateSystem,n=t.axis,o={},a=n.position,r=n.orient,s=i.getRect(),l=[s.x,s.x+s.width,s.y,s.y+s.height],h={horizontal:{top:l[2],bottom:l[3]},vertical:{left:l[0],right:l[1]}};o.position=["vertical"===r?h.vertical[a]:l[0],"horizontal"===r?h.horizontal[a]:l[3]];var u={horizontal:0,vertical:1};o.rotation=Math.PI/2*u[r];var c={top:-1,bottom:1,right:1,left:-1};o.labelDirection=o.tickDirection=o.nameDirection=c[a],t.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),I(e.labelInside,t.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection);var d=e.rotate;return null==d&&(d=t.get("axisLabel.rotate")),o.labelRotation="top"===a?-d:d,o.labelInterval=n.getLabelInterval(),o.z2=1,o}function uf(t,e,i,n,o){var r=t.axis;if(!r.scale.isBlank()&&r.containData(e))if(t.involveSeries){var s=cf(e,t),l=s.payloadBatch,h=s.snapToValue;l[0]&&null==o.seriesIndex&&a(o,l[0]),!n&&t.snap&&r.containData(h)&&null!=h&&(e=h),i.showPointer(t,e,l,o),i.showTooltip(t,s,h)}else i.showPointer(t,e)}function cf(t,e){var i=e.axis,n=i.dim,o=t,a=[],r=Number.MAX_VALUE,s=-1;return XA(e.seriesModels,function(e,l){var h,u,c=e.coordDimToDataDim(n);if(e.getAxisTooltipData){var d=e.getAxisTooltipData(c,t,i);u=d.dataIndices,h=d.nestestValue}else{if(!(u=e.getData().indicesOfNearest(c[0],t,!1,"category"===i.type?.5:null)).length)return;h=e.getData().get(c[0],u[0])}if(null!=h&&isFinite(h)){var f=t-h,p=Math.abs(f);p<=r&&((p<r||f>=0&&s<0)&&(r=p,s=f,o=h,a.length=0),XA(u,function(t){a.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)})}))}}),{payloadBatch:a,snapToValue:o}}function df(t,e,i,n){t[e.key]={value:i,payloadBatch:n}}function ff(t,e,i,n){var o=i.payloadBatch,a=e.axis,r=a.model,s=e.axisPointerModel;if(e.triggerTooltip&&o.length){var l=e.coordSys.model,h=Ys(l),u=t.map[h];u||(u=t.map[h]={coordSysId:l.id,coordSysIndex:l.componentIndex,coordSysType:l.type,coordSysMainType:l.mainType,dataByAxis:[]},t.list.push(u)),u.dataByAxis.push({axisDim:a.dim,axisIndex:r.componentIndex,axisType:r.type,axisId:r.id,value:n,valueLabelOpt:{precision:s.get("label.precision"),formatter:s.get("label.formatter")},seriesDataIndices:o.slice()})}}function pf(t,e,i){var n=i.axesInfo=[];XA(e,function(e,i){var o=e.axisPointerModel.option,a=t[i];a?(!e.useHandle&&(o.status="show"),o.value=a.value,o.seriesDataIndices=(a.payloadBatch||[]).slice()):!e.useHandle&&(o.status="hide"),"show"===o.status&&n.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:o.value})})}function gf(t,e,i,n){if(!xf(e)&&t.list.length){var o=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{};n({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:i.tooltipOption,position:i.position,dataIndexInside:o.dataIndexInside,dataIndex:o.dataIndex,seriesIndex:o.seriesIndex,dataByCoordSys:t.list})}else n({type:"hideTip"})}function mf(t,e,i){var n=i.getZr(),o=qA(n).axisPointerLastHighlights||{},a=qA(n).axisPointerLastHighlights={};XA(t,function(t,e){var i=t.axisPointerModel.option;"show"===i.status&&XA(i.seriesDataIndices,function(t){var e=t.seriesIndex+" | "+t.dataIndex;a[e]=t})});var r=[],s=[];d(o,function(t,e){!a[e]&&s.push(t)}),d(a,function(t,e){!o[e]&&r.push(t)}),s.length&&i.dispatchAction({type:"downplay",escapeConnect:!0,batch:s}),r.length&&i.dispatchAction({type:"highlight",escapeConnect:!0,batch:r})}function vf(t,e){for(var i=0;i<(t||[]).length;i++){var n=t[i];if(e.axis.dim===n.axisDim&&e.axis.model.componentIndex===n.axisIndex)return n}}function yf(t){var e=t.axis.model,i={},n=i.axisDim=t.axis.dim;return i.axisIndex=i[n+"AxisIndex"]=e.componentIndex,i.axisName=i[n+"AxisName"]=e.name,i.axisId=i[n+"AxisId"]=e.id,i}function xf(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1])}function _f(t,e,i){if(!Uv.node){var n=e.getZr();YA(n).records||(YA(n).records={}),bf(n,e),(YA(n).records[t]||(YA(n).records[t]={})).handler=i}}function bf(t,e){function i(i,n){t.on(i,function(i){var o=If(e);$A(YA(t).records,function(t){t&&n(t,i,o.dispatchAction)}),wf(o.pendings,e)})}YA(t).initialized||(YA(t).initialized=!0,i("click",v(Mf,"click")),i("mousemove",v(Mf,"mousemove")),i("globalout",Sf))}function wf(t,e){var i,n=t.showTip.length,o=t.hideTip.length;n?i=t.showTip[n-1]:o&&(i=t.hideTip[o-1]),i&&(i.dispatchAction=null,e.dispatchAction(i))}function Sf(t,e,i){t.handler("leave",null,i)}function Mf(t,e,i,n){e.handler(t,i,n)}function If(t){var e={showTip:[],hideTip:[]},i=function(n){var o=e[n.type];o?o.push(n):(n.dispatchAction=i,t.dispatchAction(n))};return{dispatchAction:i,pendings:e}}function Tf(t,e){if(!Uv.node){var i=e.getZr();(YA(i).records||{})[t]&&(YA(i).records[t]=null)}}function Af(){}function Cf(t,e,i,n){Df(JA(i).lastProp,n)||(JA(i).lastProp=n,e?wo(i,n,t):(i.stopAnimation(),i.attr(n)))}function Df(t,e){if(b(t)&&b(e)){var i=!0;return d(e,function(e,n){i=i&&Df(t[n],e)}),!!i}return t===e}function Lf(t,e){t[e.get("label.show")?"show":"hide"]()}function kf(t){return{position:t.position.slice(),rotation:t.rotation||0}}function Pf(t,e,i){var n=e.get("z"),o=e.get("zlevel");t&&t.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=o&&(t.zlevel=o),t.silent=i)})}function Of(t){var e,i=t.get("type"),n=t.getModel(i+"Style");return"line"===i?(e=n.getLineStyle()).fill=null:"shadow"===i&&((e=n.getAreaStyle()).stroke=null),e}function zf(t,e,i,n,o){var a=Ef(i.get("value"),e.axis,e.ecModel,i.get("seriesDataIndices"),{precision:i.get("label.precision"),formatter:i.get("label.formatter")}),r=i.getModel("label"),s=Gx(r.get("padding")||0),l=r.getFont(),h=de(a,l),u=o.position,c=h.width+s[1]+s[3],d=h.height+s[0]+s[2],f=o.align;"right"===f&&(u[0]-=c),"center"===f&&(u[0]-=c/2);var p=o.verticalAlign;"bottom"===p&&(u[1]-=d),"middle"===p&&(u[1]-=d/2),Nf(u,c,d,n);var g=r.get("backgroundColor");g&&"auto"!==g||(g=e.get("axisLine.lineStyle.color")),t.label={shape:{x:0,y:0,width:c,height:d,r:r.get("borderRadius")},position:u.slice(),style:{text:a,textFont:l,textFill:r.getTextColor(),textPosition:"inside",fill:g,stroke:r.get("borderColor")||"transparent",lineWidth:r.get("borderWidth")||0,shadowBlur:r.get("shadowBlur"),shadowColor:r.get("shadowColor"),shadowOffsetX:r.get("shadowOffsetX"),shadowOffsetY:r.get("shadowOffsetY")},z2:10}}function Nf(t,e,i,n){var o=n.getWidth(),a=n.getHeight();t[0]=Math.min(t[0]+e,o)-e,t[1]=Math.min(t[1]+i,a)-i,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0)}function Ef(t,e,i,n,o){var a=e.scale.getLabel(t,{precision:o.precision}),r=o.formatter;if(r){var s={value:Br(e,t),seriesData:[]};d(n,function(t){var e=i.getSeriesByIndex(t.seriesIndex),n=t.dataIndexInside,o=e&&e.getDataParams(n);o&&s.seriesData.push(o)}),_(r)?a=r.replace("{value}",a):x(r)&&(a=r(s))}return a}function Rf(t,e,i){var n=ot();return ht(n,n,i.rotation),lt(n,n,i.position),Io([t.dataToCoord(e),(i.labelOffset||0)+(i.labelDirection||1)*(i.labelMargin||0)],n)}function Vf(t,e,i,n,o,a){var r=DM.innerTextLayout(i.rotation,0,i.labelDirection);i.labelMargin=o.get("label.margin"),zf(e,n,o,a,{position:Rf(n.axis,t,i),align:r.textAlign,verticalAlign:r.textVerticalAlign})}function Bf(t,e,i){return i=i||0,{x1:t[i],y1:t[1-i],x2:e[i],y2:e[1-i]}}function Gf(t,e,i){return i=i||0,{x:t[i],y:t[1-i],width:e[i],height:e[1-i]}}function Wf(t,e,i,n,o,a){return{cx:t,cy:e,r0:i,r:n,startAngle:o,endAngle:a,clockwise:!0}}function Hf(t,e){var i={};return i[e.dim+"AxisIndex"]=e.index,t.getCartesian(i)}function Ff(t){return"x"===t.dim?0:1}function Zf(t){return t.isHorizontal()?0:1}function Uf(t,e){var i=t.getRect();return[i[nC[e]],i[nC[e]]+i[oC[e]]]}function Xf(t,e,i){var n=new db({shape:{x:t.x-10,y:t.y-10,width:0,height:t.height+20}});return So(n,{shape:{width:t.width+20,height:t.height+20}},e,i),n}function jf(t,e,i){if(t.count())for(var n,o=e.coordinateSystem,a=e.getLayerSeries(),r=f(a,function(e){return f(e.indices,function(e){var i=o.dataToPoint(t.get("time",e));return i[1]=t.get("value",e),i})}),s=qf(r),l=s.y0,h=i/s.max,u=a.length,c=a[0].indices.length,d=0;d<c;++d){n=l[d]*h,t.setItemLayout(a[0].indices[d],{layerIndex:0,x:r[0][d][0],y0:n,y:r[0][d][1]*h});for(var p=1;p<u;++p)n+=r[p-1][d][1]*h,t.setItemLayout(a[p].indices[d],{layerIndex:p,x:r[p][d][0],y0:n,y:r[p][d][1]*h})}}function qf(t){for(var e=t.length,i=t[0].length,n=[],o=[],a=0,r={},s=0;s<i;++s){for(var l=0,h=0;l<e;++l)h+=t[l][s][1];h>a&&(a=h),n.push(h)}for(var u=0;u<i;++u)o[u]=(a-n[u])/2;a=0;for(var c=0;c<i;++c){var d=n[c]+o[c];d>a&&(a=d)}return r.y0=o,r.max=a,r}function Yf(t,e){return e=e||[0,0],f(["x","y"],function(i,n){var o=this.getAxis(i),a=e[n],r=t[n]/2;return"category"===o.type?o.getBandWidth():Math.abs(o.dataToCoord(a-r)-o.dataToCoord(a+r))},this)}function $f(t,e){return e=e||[0,0],f([0,1],function(i){var n=e[i],o=t[i]/2,a=[],r=[];return a[i]=n-o,r[i]=n+o,a[1-i]=r[1-i]=e[1-i],Math.abs(this.dataToPoint(a)[i]-this.dataToPoint(r)[i])},this)}function Kf(t,e){var i=this.getAxis(),n=e instanceof Array?e[0]:e,o=(t instanceof Array?t[0]:t)/2;return"category"===i.type?i.getBandWidth():Math.abs(i.dataToCoord(n-o)-i.dataToCoord(n+o))}function Jf(t,e){return f(["Radius","Angle"],function(i,n){var o=this["get"+i+"Axis"](),a=e[n],r=t[n]/2,s="dataTo"+i,l="category"===o.type?o.getBandWidth():Math.abs(o[s](a-r)-o[s](a+r));return"Angle"===i&&(l=l*Math.PI/180),l},this)}function Qf(t){var e,i=t.type;if("path"===i){var n=t.shape;(e=Un(n.pathData,null,{x:n.x||0,y:n.y||0,width:n.width||0,height:n.height||0},"center")).__customPathData=t.pathData}else"image"===i?(e=new qe({})).__customImagePath=t.style.image:"text"===i?(e=new ib({})).__customText=t.style.text:e=new(0,Tb[i.charAt(0).toUpperCase()+i.slice(1)]);return e.__customGraphicType=i,e.name=t.name,e}function tp(t,e,n,o,a,r){var s={},l=n.style||{};if(n.shape&&(s.shape=i(n.shape)),n.position&&(s.position=n.position.slice()),n.scale&&(s.scale=n.scale.slice()),n.origin&&(s.origin=n.origin.slice()),n.rotation&&(s.rotation=n.rotation),"image"===t.type&&n.style){h=s.style={};d(["x","y","width","height"],function(e){ep(e,h,l,t.style,r)})}if("text"===t.type&&n.style){var h=s.style={};d(["x","y"],function(e){ep(e,h,l,t.style,r)}),!l.hasOwnProperty("textFill")&&l.fill&&(l.textFill=l.fill),!l.hasOwnProperty("textStroke")&&l.stroke&&(l.textStroke=l.stroke)}if("group"!==t.type&&(t.useStyle(l),r)){t.style.opacity=0;var u=l.opacity;null==u&&(u=1),So(t,{style:{opacity:u}},o,e)}r?t.attr(s):wo(t,s,o,e),t.attr({z2:n.z2||0,silent:n.silent}),!1!==n.styleEmphasis&&uo(t,n.styleEmphasis)}function ep(t,e,i,n,o){null==i[t]||o||(e[t]=i[t],i[t]=n[t])}function ip(t,e,i,n){function o(t){null==t&&(t=u),y&&(c=e.getItemModel(t),d=c.getModel(uC),f=c.getModel(cC),p=Yr(e),g=e.getItemVisual(t,"color"),y=!1)}var s=t.get("renderItem"),l=t.coordinateSystem,h={};l&&(h=l.prepareCustoms?l.prepareCustoms():fC[l.type](l));var u,c,d,f,p,g,m=r({getWidth:n.getWidth,getHeight:n.getHeight,getZr:n.getZr,getDevicePixelRatio:n.getDevicePixelRatio,value:function(t,i){return null==i&&(i=u),e.get(e.getDimension(t||0),i)},style:function(i,n){null==n&&(n=u),o(n);var r=c.getModel(lC).getItemStyle();null!=g&&(r.fill=g);var s=e.getItemVisual(n,"opacity");return null!=s&&(r.opacity=s),null!=p&&(fo(r,d,null,{autoColor:g,isRectText:!0}),r.text=d.getShallow("show")?T(t.getFormattedLabel(n,"normal"),e.get(p,n)):null),i&&a(r,i),r},styleEmphasis:function(i,n){null==n&&(n=u),o(n);var r=c.getModel(hC).getItemStyle();return null!=p&&(fo(r,f,null,{isRectText:!0},!0),r.text=f.getShallow("show")?A(t.getFormattedLabel(n,"emphasis"),t.getFormattedLabel(n,"normal"),e.get(p,n)):null),i&&a(r,i),r},visual:function(t,i){return null==i&&(i=u),e.getItemVisual(i,t)},barLayout:function(t){if(l.getBaseAxis){var e=l.getBaseAxis();return nl.getLayoutOnAxis(r({axis:e},t),n)}},currentSeriesIndices:function(){return i.getCurrentSeriesIndices()},font:function(t){return _o(t,i)}},h.api||{}),v={context:{},seriesId:t.id,seriesName:t.name,seriesIndex:t.seriesIndex,coordSys:h.coordSys,dataInsideLength:e.count(),encode:np(t.getData())},y=!0;return function(t){return u=t,y=!0,s&&s(r({dataIndexInside:t,dataIndex:e.getRawIndex(t)},v),m)||{}}}function np(t){var e={};return d(t.dimensions,function(i,n){var o=t.getDimensionInfo(i);if(!o.isExtraCoord){var a=o.coordDim;(e[a]=e[a]||[])[o.coordDimIndex]=n}}),e}function op(t,e,i,n,o,a){(t=ap(t,e,i,n,o,a))&&a.setItemGraphicEl(e,t)}function ap(t,e,i,n,o,a){var r=i.type;if(!t||r===t.__customGraphicType||"path"===r&&i.pathData===t.__customPathData||"image"===r&&i.style.image===t.__customImagePath||"text"===r&&i.style.text===t.__customText||(o.remove(t),t=null),null!=r){var s=!t;if(!t&&(t=Qf(i)),tp(t,e,i,n,a,s),"group"===r){var l=t.children()||[],h=i.children||[];if(i.diffChildrenByName)rp({oldChildren:l,newChildren:h,dataIndex:e,animatableModel:n,group:t,data:a});else{for(var u=0;u<h.length;u++)ap(t.childAt(u),e,h[u],n,t,a);for(;u<l.length;u++)l[u]&&t.remove(l[u])}}return o.add(t),t}}function rp(t){new fr(t.oldChildren,t.newChildren,sp,sp,t).add(lp).update(lp).remove(hp).execute()}function sp(t,e){var i=t&&t.name;return null!=i?i:dC+e}function lp(t,e){var i=this.context,n=null!=t?i.newChildren[t]:null;ap(null!=e?i.oldChildren[e]:null,i.dataIndex,n,i.animatableModel,i.group,i.data)}function hp(t){var e=this.context,i=e.oldChildren[t];i&&e.group.remove(i)}function up(t,e,i,n){var o=i.type,a=new(0,Tb[o.charAt(0).toUpperCase()+o.slice(1)])(i);e.add(a),n.set(t,a),a.__ecGraphicId=t}function cp(t,e){var i=t&&t.parent;i&&("group"===t.type&&t.traverse(function(t){cp(t,e)}),e.removeKey(t.__ecGraphicId),i.remove(t))}function dp(t){return t=a({},t),d(["id","parentId","$action","hv","bounding"].concat(Gb),function(e){delete t[e]}),t}function fp(t,e){var i;return d(e,function(e){null!=t[e]&&"auto"!==t[e]&&(i=!0)}),i}function pp(t,e){var i=t.exist;if(e.id=t.keyInfo.id,!e.type&&i&&(e.type=i.type),null==e.parentId){var n=e.parentOption;n?e.parentId=n.id:i&&(e.parentId=i.parentId)}e.parentOption=null}function gp(t,e,i){var o=a({},i),r=t[e],s=i.$action||"merge";"merge"===s?r?(n(r,o,!0),ta(r,o,{ignoreSize:!0}),ia(i,r)):t[e]=o:"replace"===s?t[e]=o:"remove"===s&&r&&(t[e]=null)}function mp(t,e){t&&(t.hv=e.hv=[fp(e,["left","right"]),fp(e,["top","bottom"])],"group"===t.type&&(null==t.width&&(t.width=e.width=0),null==t.height&&(t.height=e.height=0)))}function vp(t,e,i){var n,o={},a="toggleSelected"===t;return i.eachComponent("legend",function(i){a&&null!=n?i[n?"select":"unSelect"](e.name):(i[t](e.name),n=i.isSelected(e.name)),d(i.getData(),function(t){var e=t.get("name");if("\n"!==e&&""!==e){var n=i.isSelected(e);o.hasOwnProperty(e)?o[e]=o[e]&&n:o[e]=n}})}),{name:e.name,selected:o}}function yp(t,e,i){var n=e.getBoxLayoutParams(),o=e.get("padding"),a={width:i.getWidth(),height:i.getHeight()},r=Ko(n,a,o);Hb(e.get("orient"),t,e.get("itemGap"),r.width,r.height),Jo(t,n,a,o)}function xp(t,e){var i=Gx(e.get("padding")),n=e.getItemStyle(["color","opacity"]);return n.fill=e.get("backgroundColor"),t=new db({shape:{x:t.x-i[3],y:t.y-i[0],width:t.width+i[1]+i[3],height:t.height+i[0]+i[2],r:e.get("borderRadius")},style:n,silent:!0,z2:-1})}function _p(t,e){e.dispatchAction({type:"legendToggleSelect",name:t})}function bp(t,e,i){var n=i.getZr().storage.getDisplayList()[0];n&&n.useHoverLayer||t.get("legendHoverLink")&&i.dispatchAction({type:"highlight",seriesName:t.name,name:e})}function wp(t,e,i){var n=i.getZr().storage.getDisplayList()[0];n&&n.useHoverLayer||t.get("legendHoverLink")&&i.dispatchAction({type:"downplay",seriesName:t.name,name:e})}function Sp(t,e,i){var n=[1,1];n[t.getOrient().index]=0,ta(e,i,{type:"box",ignoreSize:n})}function Mp(t){var e="left "+t+"s cubic-bezier(0.23, 1, 0.32, 1),top "+t+"s cubic-bezier(0.23, 1, 0.32, 1)";return f(AC,function(t){return t+"transition:"+e}).join(";")}function Ip(t){var e=[],i=t.get("fontSize"),n=t.getTextColor();return n&&e.push("color:"+n),e.push("font:"+t.getFont()),i&&e.push("line-height:"+Math.round(3*i/2)+"px"),IC(["decoration","align"],function(i){var n=t.get(i);n&&e.push("text-"+i+":"+n)}),e.join(";")}function Tp(t){var e=[],i=t.get("transitionDuration"),n=t.get("backgroundColor"),o=t.getModel("textStyle"),a=t.get("padding");return i&&e.push(Mp(i)),n&&(Uv.canvasSupported?e.push("background-Color:"+n):(e.push("background-Color:#"+Ct(n)),e.push("filter:alpha(opacity=70)"))),IC(["width","color","radius"],function(i){var n="border-"+i,o=TC(n),a=t.get(o);null!=a&&e.push(n+":"+a+("color"===i?"":"px"))}),e.push(Ip(o)),null!=a&&e.push("padding:"+Gx(a).join("px ")+"px"),e.join(";")+";"}function Ap(t,e){var i=document.createElement("div"),n=this._zr=e.getZr();this.el=i,this._x=e.getWidth()/2,this._y=e.getHeight()/2,t.appendChild(i),this._container=t,this._show=!1,this._hideTimeout;var o=this;i.onmouseenter=function(){o._enterable&&(clearTimeout(o._hideTimeout),o._show=!0),o._inContent=!0},i.onmousemove=function(e){if(e=e||window.event,!o._enterable){var i=n.handler;ri(t,e,!0),i.dispatch("mousemove",e)}},i.onmouseleave=function(){o._enterable&&o._show&&o.hideLater(o._hideDelay),o._inContent=!1}}function Cp(t){for(var e=t.pop();t.length;){var i=t.pop();i&&(i instanceof Lo&&(i=i.get("tooltip",!0)),"string"==typeof i&&(i={formatter:i}),e=new Lo(i,e,e.ecModel))}return e}function Dp(t,e){return t.dispatchAction||m(e.dispatchAction,e)}function Lp(t,e,i,n,o,a,r){var s=Pp(i),l=s.width,h=s.height;return null!=a&&(t+l+a>n?t-=l+a:t+=a),null!=r&&(e+h+r>o?e-=h+r:e+=r),[t,e]}function kp(t,e,i,n,o){var a=Pp(i),r=a.width,s=a.height;return t=Math.min(t+r,n)-r,e=Math.min(e+s,o)-s,t=Math.max(t,0),e=Math.max(e,0),[t,e]}function Pp(t){var e=t.clientWidth,i=t.clientHeight;if(document.defaultView&&document.defaultView.getComputedStyle){var n=document.defaultView.getComputedStyle(t);n&&(e+=parseInt(n.paddingLeft,10)+parseInt(n.paddingRight,10)+parseInt(n.borderLeftWidth,10)+parseInt(n.borderRightWidth,10),i+=parseInt(n.paddingTop,10)+parseInt(n.paddingBottom,10)+parseInt(n.borderTopWidth,10)+parseInt(n.borderBottomWidth,10))}return{width:e,height:i}}function Op(t,e,i){var n=i[0],o=i[1],a=0,r=0,s=e.width,l=e.height;switch(t){case"inside":a=e.x+s/2-n/2,r=e.y+l/2-o/2;break;case"top":a=e.x+s/2-n/2,r=e.y-o-5;break;case"bottom":a=e.x+s/2-n/2,r=e.y+l+5;break;case"left":a=e.x-n-5,r=e.y+l/2-o/2;break;case"right":a=e.x+s+5,r=e.y+l/2-o/2}return[a,r]}function zp(t){return"center"===t||"middle"===t}function Np(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex}function Ep(t){return t.dim}function Rp(t,e){var i={};d(t,function(t,e){var n=t.getData(),o=t.coordinateSystem.getBaseAxis(),a=o.getExtent(),r="category"===o.type?o.getBandWidth():Math.abs(a[1]-a[0])/n.count(),s=i[Ep(o)]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},l=s.stacks;i[Ep(o)]=s;var h=Np(t);l[h]||s.autoWidthCount++,l[h]=l[h]||{width:0,maxWidth:0};var u=Si(t.get("barWidth"),r),c=Si(t.get("barMaxWidth"),r),d=t.get("barGap"),f=t.get("barCategoryGap");u&&!l[h].width&&(u=Math.min(s.remainedWidth,u),l[h].width=u,s.remainedWidth-=u),c&&(l[h].maxWidth=c),null!=d&&(s.gap=d),null!=f&&(s.categoryGap=f)});var n={};return d(i,function(t,e){n[e]={};var i=t.stacks,o=t.bandWidth,a=Si(t.categoryGap,o),r=Si(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,h=(s-a)/(l+(l-1)*r);h=Math.max(h,0),d(i,function(t,e){var i=t.maxWidth;i&&i<h&&(i=Math.min(i,s),t.width&&(i=Math.min(i,t.width)),s-=i,t.width=i,l--)}),h=(s-a)/(l+(l-1)*r),h=Math.max(h,0);var u,c=0;d(i,function(t,e){t.width||(t.width=h),u=t,c+=t.width*(1+r)}),u&&(c-=u.width*r);var f=-c/2;d(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+r)})}),n}function Vp(t,e){US.call(this,"radius",t,e),this.type="category"}function Bp(t,e){e=e||[0,360],US.call(this,"angle",t,e),this.type="category"}function Gp(t,e){return e.type||(e.data?"category":"value")}function Wp(t,e,i){var n=e.get("center"),o=i.getWidth(),a=i.getHeight();t.cx=Si(n[0],o),t.cy=Si(n[1],a);var r=t.getRadiusAxis(),s=Math.min(o,a)/2,l=Si(e.get("radius"),s);r.inverse?r.setExtent(l,0):r.setExtent(0,l)}function Hp(t,e){var i=this,n=i.getAngleAxis(),o=i.getRadiusAxis();if(n.scale.setExtent(1/0,-1/0),o.scale.setExtent(1/0,-1/0),t.eachSeries(function(t){if(t.coordinateSystem===i){var e=t.getData();o.scale.unionExtentFromData(e,"radius"),n.scale.unionExtentFromData(e,"angle")}}),Nr(n.scale,n.model),Nr(o.scale,o.model),"category"===n.type&&!n.onBand){var a=n.getExtent(),r=360/n.scale.count();n.inverse?a[1]+=r:a[1]-=r,n.setExtent(a[0],a[1])}}function Fp(t,e){if(t.type=e.get("type"),t.scale=Er(e),t.onBand=e.get("boundaryGap")&&"category"===t.type,t.inverse=e.get("inverse"),"angleAxis"===e.mainType){t.inverse^=e.get("clockwise");var i=e.get("startAngle");t.setExtent(i,i+(t.inverse?-360:360))}e.axis=t,t.model=e}function Zp(t,e,i){e[1]>e[0]&&(e=e.slice().reverse());var n=t.coordToPoint([e[0],i]),o=t.coordToPoint([e[1],i]);return{x1:n[0],y1:n[1],x2:o[0],y2:o[1]}}function Up(t){return t.getRadiusAxis().inverse?0:1}function Xp(t,e,i){return{position:[t.cx,t.cy],rotation:i/180*Math.PI,labelDirection:-1,tickDirection:-1,nameDirection:1,labelRotate:e.getModel("axisLabel").get("rotate"),z2:1}}function jp(t,e,i,n,o){var a=e.axis,r=a.dataToCoord(t),s=n.getAngleAxis().getExtent()[0];s=s/180*Math.PI;var l,h,u,c=n.getRadiusAxis().getExtent();if("radius"===a.dim){var d=ot();ht(d,d,s),lt(d,d,[n.cx,n.cy]),l=Io([r,-o],d);var f=e.getModel("axisLabel").get("rotate")||0,p=DM.innerTextLayout(s,f*Math.PI/180,-1);h=p.textAlign,u=p.textVerticalAlign}else{var g=c[1];l=n.coordToPoint([g+o,r]);var m=n.cx,v=n.cy;h=Math.abs(l[0]-m)/g<.3?"center":l[0]>m?"left":"right",u=Math.abs(l[1]-v)/g<.3?"middle":l[1]>v?"top":"bottom"}return{position:l,align:h,verticalAlign:u}}function qp(t,e){e.update="updateView",ir(e,function(e,i){var n={};return i.eachComponent({mainType:"geo",query:e},function(i){i[t](e.name),d(i.coordinateSystem.regions,function(t){n[t.name]=i.isSelected(t.name)||!1})}),{selected:n,name:e.name}})}function Yp(t){var e={};d(t,function(t){e[t]=1}),t.length=0,d(e,function(e,i){t.push(i)})}function $p(t){if(t)for(var e in t)if(t.hasOwnProperty(e))return!0}function Kp(t,e,n){function o(){var t=function(){};return t.prototype.__hidden=t.prototype,new t}var a={};return HC(e,function(e){var r=a[e]=o();HC(t[e],function(t,o){if(jI.isValidType(o)){var a={type:o,visual:t};n&&n(a,e),r[o]=new jI(a),"opacity"===o&&((a=i(a)).type="colorAlpha",r.__hidden.__alphaForOpacity=new jI(a))}})}),a}function Jp(t,e,n){var o;d(n,function(t){e.hasOwnProperty(t)&&$p(e[t])&&(o=!0)}),o&&d(n,function(n){e.hasOwnProperty(n)&&$p(e[n])?t[n]=i(e[n]):delete t[n]})}function Qp(t,e,i,n,o,a){function r(t){return i.getItemVisual(u,t)}function s(t,e){i.setItemVisual(u,t,e)}function l(t,l){u=null==a?t:l;var c=i.getRawDataItem(u);if(!c||!1!==c.visualMap)for(var d=n.call(o,t),f=e[d],p=h[d],g=0,m=p.length;g<m;g++){var v=p[g];f[v]&&f[v].applyVisual(t,r,s)}}var h={};d(t,function(t){var i=jI.prepareVisualTypes(e[t]);h[t]=i});var u;null==a?i.each(l,!0):i.each([a],l,!0)}function tg(t){var e=["x","y"],i=["width","height"];return{point:function(e,i,n){if(e){var o=n.range;return eg(e[t],o)}},rect:function(n,o,a){if(n){var r=a.range,s=[n[e[t]],n[e[t]]+n[i[t]]];return s[1]<s[0]&&s.reverse(),eg(s[0],r)||eg(s[1],r)||eg(r[0],s)||eg(r[1],s)}}}}function eg(t,e){return e[0]<=t&&t<=e[1]}function ig(t,e,i,n,o){for(var a=0,r=o[o.length-1];a<o.length;a++){var s=o[a];if(ng(t,e,i,n,s[0],s[1],r[0],r[1]))return!0;r=s}}function ng(t,e,i,n,o,a,r,s){var l=ag(i-t,o-r,n-e,a-s);if(og(l))return!1;var h=ag(o-t,o-r,a-e,a-s)/l;if(h<0||h>1)return!1;var u=ag(i-t,o-t,n-e,a-e)/l;return!(u<0||u>1)}function og(t){return t<=1e-6&&t>=-1e-6}function ag(t,e,i,n){return t*n-e*i}function rg(t,e,i){var n=this._targetInfoList=[],o={},a=lg(e,t);ZC($C,function(t,e){(!i||!i.include||UC(i.include,e)>=0)&&t(a,n,o)})}function sg(t){return t[0]>t[1]&&t.reverse(),t}function lg(t,e){return Fo(t,e,{includeMainTypes:qC})}function hg(t,e,i,n){var o=i.getAxis(["x","y"][t]),a=sg(f([0,1],function(t){return e?o.coordToData(o.toLocalCoord(n[t])):o.toGlobalCoord(o.dataToCoord(n[t]))})),r=[];return r[t]=a,r[1-t]=[NaN,NaN],{values:a,xyMinMax:r}}function ug(t,e,i,n){return[e[0]-n[t]*i[0],e[1]-n[t]*i[1]]}function cg(t,e){var i=dg(t),n=dg(e),o=[i[0]/n[0],i[1]/n[1]];return isNaN(o[0])&&(o[0]=1),isNaN(o[1])&&(o[1]=1),o}function dg(t){return t?[t[0][1]-t[0][0],t[1][1]-t[1][0]]:[NaN,NaN]}function fg(t,e,i,n,o){if(o){var a=t.getZr();a[nD]||(a[iD]||(a[iD]=pg),La(a,iD,i,e)(t,n))}}function pg(t,e){if(!t.isDisposed()){var i=t.getZr();i[nD]=!0,t.dispatchAction({type:"brushSelect",batch:e}),i[nD]=!1}}function gg(t,e,i,n){for(var o=0,a=e.length;o<a;o++){var r=e[o];if(t[r.brushType](n,i,r.selectors,r))return!0}}function mg(t){var e=t.brushSelector;if(_(e)){var i=[];return d(FC,function(t,n){i[n]=function(i,n,o,a){var r=n.getItemLayout(i);return t[e](r,o,a)}}),i}if(x(e)){var n={};return d(FC,function(t,i){n[i]=e}),n}return e}function vg(t,e){var i=t.option.seriesIndex;return null!=i&&"all"!==i&&(y(i)?l(i,e)<0:e!==i)}function yg(t){var e=t.selectors={};return d(FC[t.brushType],function(i,n){e[n]=function(n){return i(n,e,t)}}),t}function xg(t){return new jt(t[0][0],t[1][0],t[0][1]-t[0][0],t[1][1]-t[1][0])}function _g(t,e){return n({brushType:t.brushType,brushMode:t.brushMode,transformable:t.transformable,brushStyle:new Lo(t.brushStyle).getItemStyle(),removeOnClick:t.removeOnClick,z:t.z},e,!0)}function bg(t,e,i,n){(!n||n.$from!==t.id)&&this._brushController.setPanels(t.brushTargetManager.makePanelOpts(i)).enableBrush(t.brushOption).updateCovers(t.areas.slice())}function wg(t,e){sD[t]=e}function Sg(t){return sD[t]}function Mg(t,e,i){this.model=t,this.ecModel=e,this.api=i,this._brushType,this._brushMode}function Ig(t,e,i){this._model=t}function Tg(t,e,i,n){var o=i.calendarModel,a=i.seriesModel,r=o?o.coordinateSystem:a?a.coordinateSystem:null;return r===this?r[t](n):null}function Ag(t,e){var i=t.cellSize;y(i)?1===i.length&&(i[1]=i[0]):i=t.cellSize=[i,i];var n=f([0,1],function(t){return Qo(e,t)&&(i[t]="auto"),null!=i[t]&&"auto"!==i[t]});ta(t,e,{type:"box",ignoreSize:n})}function Cg(t){return l(pD,t)>=0}function Dg(t,e,i){function n(t,e){return l(e.nodes,t)>=0}function o(t,n){var o=!1;return e(function(e){d(i(t,e)||[],function(t){n.records[e.name][t]&&(o=!0)})}),o}function a(t,n){n.nodes.push(t),e(function(e){d(i(t,e)||[],function(t){n.records[e.name][t]=!0})})}return function(i){var r={nodes:[],records:{}};if(e(function(t){r.records[t.name]={}}),!i)return r;a(i,r);var s;do{s=!1,t(function(t){!n(t,r)&&o(t,r)&&(a(t,r),s=!0)})}while(s);return r}}function Lg(t,e,i){var n=[1/0,-1/0];return mD(i,function(t){var i=t.getData();i&&mD(t.coordDimToDataDim(e),function(t){var e=i.getDataExtent(t);e[0]<n[0]&&(n[0]=e[0]),e[1]>n[1]&&(n[1]=e[1])})}),n[1]<n[0]&&(n=[NaN,NaN]),kg(t,n),n}function kg(t,e){var i=t.getAxisModel(),n=i.getMin(!0),o="category"===i.get("type"),a=o&&(i.get("data")||[]).length;null!=n&&"dataMin"!==n&&"function"!=typeof n?e[0]=n:o&&(e[0]=a>0?0:NaN);var r=i.getMax(!0);return null!=r&&"dataMax"!==r&&"function"!=typeof r?e[1]=r:o&&(e[1]=a>0?a-1:NaN),i.get("scale",!0)||(e[0]>0&&(e[0]=0),e[1]<0&&(e[1]=0)),e}function Pg(t,e){var i=t.getAxisModel(),n=t._percentWindow,o=t._valueWindow;if(n){var a=Ci(o,[0,500]);a=Math.min(a,20);var r=e||0===n[0]&&100===n[1];i.setRange(r?null:+o[0].toFixed(a),r?null:+o[1].toFixed(a))}}function Og(t){var e=t._minMaxSpan={},i=t._dataZoomModel;mD(["min","max"],function(n){e[n+"Span"]=i.get(n+"Span");var o=i.get(n+"ValueSpan");if(null!=o&&(e[n+"ValueSpan"]=o,null!=(o=t.getAxisModel().axis.scale.parse(o)))){var a=t._dataExtent;e[n+"Span"]=wi(a[0]+o,a,[0,100],!0)}})}function zg(t){var e={};return xD(["start","end","startValue","endValue","throttle"],function(i){t.hasOwnProperty(i)&&(e[i]=t[i])}),e}function Ng(t,e){var i=t._rangePropMode,n=t.get("rangeMode");xD([["start","startValue"],["end","endValue"]],function(t,o){var a=null!=e[t[0]],r=null!=e[t[1]];a&&!r?i[o]="percent":!a&&r?i[o]="value":n?i[o]=n[o]:a&&(i[o]="percent")})}function Eg(t){return{x:"y",y:"x",radius:"angle",angle:"radius"}[t]}function Rg(t){return"vertical"===t?"ns-resize":"ew-resize"}function Vg(t,e){var i=Hg(t),n=e.dataZoomId,o=e.coordId;d(i,function(t,i){var a=t.dataZoomInfos;a[n]&&l(e.allCoordIds,o)<0&&(delete a[n],t.count--)}),Zg(i);var a=i[o];a||((a=i[o]={coordId:o,dataZoomInfos:{},count:0}).controller=Fg(t,a),a.dispatchAction=v(qg,t)),!a.dataZoomInfos[n]&&a.count++,a.dataZoomInfos[n]=e;var r=Yg(a.dataZoomInfos);a.controller.enable(r.controlType,r.opt),a.controller.setPointerChecker(e.containsPoint),La(a,"dispatchAction",e.throttleRate,"fixRate")}function Bg(t,e){var i=Hg(t);d(i,function(t){t.controller.dispose();var i=t.dataZoomInfos;i[e]&&(delete i[e],t.count--)}),Zg(i)}function Gg(t,e){if(t&&"dataZoom"===t.type&&t.batch)for(var i=0,n=t.batch.length;i<n;i++)if(t.batch[i].dataZoomId===e)return!1;return!0}function Wg(t){return t.type+"\0_"+t.id}function Hg(t){var e=t.getZr();return e[OD]||(e[OD]={})}function Fg(t,e){var i=new kl(t.getZr());return i.on("pan",PD(Ug,e)),i.on("zoom",PD(Xg,e)),i}function Zg(t){d(t,function(e,i){e.count||(e.controller.dispose(),delete t[i])})}function Ug(t,e,i,n,o,a,r){jg(t,function(s){return s.panGetRange(t.controller,e,i,n,o,a,r)})}function Xg(t,e,i,n){jg(t,function(o){return o.zoomGetRange(t.controller,e,i,n)})}function jg(t,e){var i=[];d(t.dataZoomInfos,function(t){var n=e(t);!t.disabled&&n&&i.push({dataZoomId:t.dataZoomId,start:n[0],end:n[1]})}),t.dispatchAction(i)}function qg(t,e){t.dispatchAction({type:"dataZoom",batch:e})}function Yg(t){var e,i={},n={true:2,move:1,false:0,undefined:-1};return d(t,function(t){var o=!t.disabled&&(!t.zoomLock||"move");n[o]>n[e]&&(e=o),a(i,t.roamControllerOpt)}),{controlType:e,opt:i}}function $g(t,e,i){i.getAxisProxy(t.name,e).reset(i)}function Kg(t,e,i){i.getAxisProxy(t.name,e).filterData(i)}function Jg(t,e){return t&&t.hasOwnProperty&&t.hasOwnProperty(e)}function Qg(t,e){t.eachTargetSeries(function(e){var i=e.getData();Qp(t.stateList,t.targetVisuals,i,t.getValueState,t,t.getDataDimension(i))})}function tm(t){t.eachSeries(function(e){var i=e.getData(),n=[];t.eachComponent("visualMap",function(t){if(t.isTargetSeries(e)){var o=t.getVisualMeta(m(em,null,e,t))||{stops:[],outerColors:[]};o.dimension=t.getDataDimension(i),n.push(o)}}),e.getData().setVisual("visualMeta",n)})}function em(t,e,i,n){for(var o=e.targetVisuals[n],a=jI.prepareVisualTypes(o),r={color:t.getData().getVisual("color")},s=0,l=a.length;s<l;s++){var h=a[s],u=o["opacity"===h?"__alphaForOpacity":h];u&&u.applyVisual(i,function(t){return r[t]},function(t,e){r[t]=e})}return r.color}function im(t,e,i){if(i[0]===i[1])return i.slice();for(var n=(i[1]-i[0])/200,o=i[0],a=[],r=0;r<=200&&o<i[1];r++)a.push(o),o+=n;return a.push(i[1]),a}function nm(t,e,i){var n=t.option,o=n.align;if(null!=o&&"auto"!==o)return o;for(var a={width:e.getWidth(),height:e.getHeight()},r="horizontal"===n.orient?1:0,s=[["left","right","width"],["top","bottom","height"]],l=s[r],h=[0,null,10],u={},c=0;c<3;c++)u[s[1-r][c]]=h[c],u[l[c]]=2===c?i[0]:n[l[c]];var d=[["x","width",3],["y","height",0]][r],f=Ko(u,a,n.padding);return l[(f.margin[d[2]]||0)+f[d[0]]+.5*f[d[1]]<.5*a[d[1]]?0:1]}function om(t){return d(t||[],function(e){null!=t.dataIndex&&(t.dataIndexInside=t.dataIndex,t.dataIndex=null)}),t}function am(t,e,i,n){return new ub({shape:{points:t},draggable:!!i,cursor:e,drift:i,onmousemove:function(t){bx(t.event)},ondragend:n})}function rm(t,e){return 0===t?[[0,0],[e,0],[e,-e]]:[[0,0],[e,0],[e,e]]}function sm(t,e,i,n){return t?[[0,-eL(e,iL(i,0))],[oL,0],[0,eL(e,iL(n-i,0))]]:[[0,0],[5,-5],[5,5]]}function lm(t,e,i){var n=nL/2,o=t.get("hoverLinkDataSize");return o&&(n=QD(o,e,i,!0)/2),n}function hm(t){var e=t.get("hoverLinkOnHandle");return!!(null==e?t.get("realtime"):e)}function um(t){return"vertical"===t?"ns-resize":"ew-resize"}function cm(t,e){var i=t.inverse;("vertical"===t.orient?!i:i)&&e.reverse()}function dm(t){zo(t.label,["show"])}function fm(t){return!(isNaN(parseFloat(t.x))&&isNaN(parseFloat(t.y)))}function pm(t){return!isNaN(parseFloat(t.x))&&!isNaN(parseFloat(t.y))}function gm(t,e,i){var n=-1;do{n=Math.max(Ti(t.get(e,i)),n),t=t.stackedOn}while(t);return n}function mm(t,e,i,n,o,a){var r=[],s=bm(e,n,t),l=e.indicesOfNearest(n,s,!0)[0];r[o]=e.get(i,l,!0),r[a]=e.get(n,l,!0);var h=gm(e,n,l);return(h=Math.min(h,20))>=0&&(r[a]=+r[a].toFixed(h)),r}function vm(t,e){var n=t.getData(),o=t.coordinateSystem;if(e&&!pm(e)&&!y(e.coord)&&o){var a=o.dimensions,r=ym(e,n,o,t);if((e=i(e)).type&&fL[e.type]&&r.baseAxis&&r.valueAxis){var s=cL(a,r.baseAxis.dim),l=cL(a,r.valueAxis.dim);e.coord=fL[e.type](n,r.baseDataDim,r.valueDataDim,s,l),e.value=e.coord[l]}else{for(var h=[null!=e.xAxis?e.xAxis:e.radiusAxis,null!=e.yAxis?e.yAxis:e.angleAxis],u=0;u<2;u++)if(fL[h[u]]){var c=t.coordDimToDataDim(a[u])[0];h[u]=bm(n,c,h[u])}e.coord=h}}return e}function ym(t,e,i,n){var o={};return null!=t.valueIndex||null!=t.valueDim?(o.valueDataDim=null!=t.valueIndex?e.getDimension(t.valueIndex):t.valueDim,o.valueAxis=i.getAxis(n.dataDimToCoordDim(o.valueDataDim)),o.baseAxis=i.getOtherAxis(o.valueAxis),o.baseDataDim=n.coordDimToDataDim(o.baseAxis.dim)[0]):(o.baseAxis=n.getBaseAxis(),o.valueAxis=i.getOtherAxis(o.baseAxis),o.baseDataDim=n.coordDimToDataDim(o.baseAxis.dim)[0],o.valueDataDim=n.coordDimToDataDim(o.valueAxis.dim)[0]),o}function xm(t,e){return!(t&&t.containData&&e.coord&&!fm(e))||t.containData(e.coord)}function _m(t,e,i,n){return n<2?t.coord&&t.coord[n]:t.value}function bm(t,e,i){if("average"===i){var n=0,o=0;return t.each(e,function(t,e){isNaN(t)||(n+=t,o++)},!0),n/o}return t.getDataExtent(e,!0)["max"===i?1:0]}function wm(t,e,i){var n=e.coordinateSystem;t.each(function(o){var a,r=t.getItemModel(o),s=Si(r.get("x"),i.getWidth()),l=Si(r.get("y"),i.getHeight());if(isNaN(s)||isNaN(l)){if(e.getMarkerPosition)a=e.getMarkerPosition(t.getValues(t.dimensions,o));else if(n){var h=t.get(n.dimensions[0],o),u=t.get(n.dimensions[1],o);a=n.dataToPoint([h,u])}}else a=[s,l];isNaN(s)||(a[0]=s),isNaN(l)||(a[1]=l),t.setItemLayout(o,a)})}function Sm(t,e,i){var n;n=t?f(t&&t.dimensions,function(t){var i=e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0])||{};return i.name=t,i}):[{name:"value",type:"float"}];var o=new aS(n,i),a=f(i.get("data"),v(vm,e));return t&&(a=g(a,v(xm,t))),o.initData(a,null,t?_m:function(t){return t.value}),o}function Mm(t){return!isNaN(t)&&!isFinite(t)}function Im(t,e,i,n){var o=1-t,a=n.dimensions[t];return Mm(e[o])&&Mm(i[o])&&e[t]===i[t]&&n.getAxis(a).containData(e[t])}function Tm(t,e){if("cartesian2d"===t.type){var i=e[0].coord,n=e[1].coord;if(i&&n&&(Im(1,i,n,t)||Im(0,i,n,t)))return!0}return xm(t,e[0])&&xm(t,e[1])}function Am(t,e,i,n,o){var a,r=n.coordinateSystem,s=t.getItemModel(e),l=Si(s.get("x"),o.getWidth()),h=Si(s.get("y"),o.getHeight());if(isNaN(l)||isNaN(h)){if(n.getMarkerPosition)a=n.getMarkerPosition(t.getValues(t.dimensions,e));else{var u=r.dimensions,c=t.get(u[0],e),d=t.get(u[1],e);a=r.dataToPoint([c,d])}if("cartesian2d"===r.type){var f=r.getAxis("x"),p=r.getAxis("y"),u=r.dimensions;Mm(t.get(u[0],e))?a[0]=f.toGlobalCoord(f.getExtent()[i?0:1]):Mm(t.get(u[1],e))&&(a[1]=p.toGlobalCoord(p.getExtent()[i?0:1]))}isNaN(l)||(a[0]=l),isNaN(h)||(a[1]=h)}else a=[l,h];t.setItemLayout(e,a)}function Cm(t,e,i){var n;n=t?f(t&&t.dimensions,function(t){var i=e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0])||{};return i.name=t,i}):[{name:"value",type:"float"}];var o=new aS(n,i),a=new aS(n,i),r=new aS([],i),s=f(i.get("data"),v(gL,e,t,i));t&&(s=g(s,v(Tm,t)));var l=t?_m:function(t){return t.value};return o.initData(f(s,function(t){return t[0]}),null,l),a.initData(f(s,function(t){return t[1]}),null,l),r.initData(f(s,function(t){return t[2]})),r.hasItemOption=!0,{from:o,to:a,line:r}}function Dm(t){return!isNaN(t)&&!isFinite(t)}function Lm(t,e,i,n){var o=1-t;return Dm(e[o])&&Dm(i[o])}function km(t,e){var i=e.coord[0],n=e.coord[1];return!("cartesian2d"!==t.type||!i||!n||!Lm(1,i,n,t)&&!Lm(0,i,n,t))||(xm(t,{coord:i,x:e.x0,y:e.y0})||xm(t,{coord:n,x:e.x1,y:e.y1}))}function Pm(t,e,i,n,o){var a,r=n.coordinateSystem,s=t.getItemModel(e),l=Si(s.get(i[0]),o.getWidth()),h=Si(s.get(i[1]),o.getHeight());if(isNaN(l)||isNaN(h)){if(n.getMarkerPosition)a=n.getMarkerPosition(t.getValues(i,e));else{var u=t.get(i[0],e),c=t.get(i[1],e);a=r.dataToPoint([u,c],!0)}if("cartesian2d"===r.type){var d=r.getAxis("x"),f=r.getAxis("y"),u=t.get(i[0],e),c=t.get(i[1],e);Dm(u)?a[0]=d.toGlobalCoord(d.getExtent()["x0"===i[0]?0:1]):Dm(c)&&(a[1]=f.toGlobalCoord(f.getExtent()["y0"===i[1]?0:1]))}isNaN(l)||(a[0]=l),isNaN(h)||(a[1]=h)}else a=[l,h];return a}function Om(t,e,i){var n,o,a=["x0","y0","x1","y1"];t?(n=f(t&&t.dimensions,function(t){var i=e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0])||{};return i.name=t,i}),o=new aS(f(a,function(t,e){return{name:t,type:n[e%2].type}}),i)):o=new aS(n=[{name:"value",type:"float"}],i);var r=f(i.get("data"),v(mL,e,t,i));t&&(r=g(r,v(km,t)));var s=t?function(t,e,i,n){return t.coord[Math.floor(n/2)][n%2]}:function(t){return t.value};return o.initData(r,null,s),o.hasItemOption=!0,o}function zm(t){var e=t.type,i={number:"value",time:"time"};if(i[e]&&(t.axisType=i[e],delete t.type),Nm(t),Em(t,"controlPosition")){var n=t.controlStyle||(t.controlStyle={});Em(n,"position")||(n.position=t.controlPosition),"none"!==n.position||Em(n,"show")||(n.show=!1,delete n.position),delete t.controlPosition}d(t.data||[],function(t){b(t)&&!y(t)&&(!Em(t,"value")&&Em(t,"name")&&(t.value=t.name),Nm(t))})}function Nm(t){var e=t.itemStyle||(t.itemStyle={}),i=e.emphasis||(e.emphasis={}),n=t.label||t.label||{},o=n.normal||(n.normal={}),a={normal:1,emphasis:1};d(n,function(t,e){a[e]||Em(o,e)||(o[e]=t)}),i.label&&!Em(n,"emphasis")&&(n.emphasis=i.label,delete i.label)}function Em(t,e){return t.hasOwnProperty(e)}function Rm(t,e){return Ko(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()},t.get("padding"))}function Vm(t,e,n,o){return Un(t.get(e).replace(/^path:\/\//,""),i(o||{}),new jt(n[0],n[1],n[2],n[3]),"center")}function Bm(t,e,i,o,a,r){var s=e.get("color");a?(a.setColor(s),i.add(a),r&&r.onUpdate(a)):((a=Hr(t.get("symbol"),-1,-1,2,2,s)).setStyle("strokeNoScale",!0),i.add(a),r&&r.onCreate(a));var l=e.getItemStyle(["color","symbol","symbolSize"]);a.setStyle(l),o=n({rectHover:!0,z2:100},o,!0);var h=t.get("symbolSize");(h=h instanceof Array?h.slice():[+h,+h])[0]/=2,h[1]/=2,o.scale=h;var u=t.get("symbolOffset");if(u){var c=o.position=o.position||[0,0];c[0]+=Si(u[0],h[0]),c[1]+=Si(u[1],h[1])}var d=t.get("symbolRotate");return o.rotation=(d||0)*Math.PI/180||0,a.attr(o),a.updateTransform(),a}function Gm(t,e,i,n,o){if(!t.dragging){var a=n.getModel("checkpointStyle"),r=i.dataToCoord(n.getData().get(["value"],e));o||!a.get("animation",!0)?t.attr({position:[r,0]}):(t.stopAnimation(!0),t.animateTo({position:[r,0]},a.get("animationDuration",!0),a.get("animationEasing",!0)))}}function Wm(t){return 0===t.indexOf("my")}function Hm(t){this.model=t}function Fm(t){this.model=t}function Zm(t){var e={},i=[],n=[];return t.eachRawSeries(function(t){var o=t.coordinateSystem;if(!o||"cartesian2d"!==o.type&&"polar"!==o.type)i.push(t);else{var a=o.getBaseAxis();if("category"===a.type){var r=a.dim+"_"+a.index;e[r]||(e[r]={categoryAxis:a,valueAxis:o.getOtherAxis(a),series:[]},n.push({axisDim:a.dim,axisIndex:a.index})),e[r].series.push(t)}else i.push(t)}}),{seriesGroupByCategoryAxis:e,other:i,meta:n}}function Um(t){var e=[];return d(t,function(t,i){var n=t.categoryAxis,o=t.valueAxis.dim,a=[" "].concat(f(t.series,function(t){return t.name})),r=[n.model.getCategories()];d(t.series,function(t){r.push(t.getRawData().mapArray(o,function(t){return t}))});for(var s=[a.join(PL)],l=0;l<r[0].length;l++){for(var h=[],u=0;u<r.length;u++)h.push(r[u][l]);s.push(h.join(PL))}e.push(s.join("\n"))}),e.join("\n\n"+kL+"\n\n")}function Xm(t){return f(t,function(t){var e=t.getRawData(),i=[t.name],n=[];return e.each(e.dimensions,function(){for(var t=arguments.length,o=arguments[t-1],a=e.getName(o),r=0;r<t-1;r++)n[r]=arguments[r];i.push((a?a+PL:"")+n.join(PL))}),i.join("\n")}).join("\n\n"+kL+"\n\n")}function jm(t){var e=Zm(t);return{value:g([Um(e.seriesGroupByCategoryAxis),Xm(e.other)],function(t){return t.replace(/[\n\t\s]/g,"")}).join("\n\n"+kL+"\n\n"),meta:e.meta}}function qm(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ym(t){if(t.slice(0,t.indexOf("\n")).indexOf(PL)>=0)return!0}function $m(t){for(var e=t.split(/\n+/g),i=[],n=f(qm(e.shift()).split(OL),function(t){return{name:t,data:[]}}),o=0;o<e.length;o++){var a=qm(e[o]).split(OL);i.push(a.shift());for(var r=0;r<a.length;r++)n[r]&&(n[r].data[o]=a[r])}return{series:n,categories:i}}function Km(t){for(var e=t.split(/\n+/g),i=qm(e.shift()),n=[],o=0;o<e.length;o++){var a,r=qm(e[o]).split(OL),s="",l=!1;isNaN(r[0])?(l=!0,s=r[0],r=r.slice(1),n[o]={name:s,value:[]},a=n[o].value):a=n[o]=[];for(var h=0;h<r.length;h++)a.push(+r[h]);1===a.length&&(l?n[o].value=a[0]:n[o]=a[0])}return{name:i,data:n}}function Jm(t,e){var i={series:[]};return d(t.split(new RegExp("\n*"+kL+"\n*","g")),function(t,n){if(Ym(t)){var o=$m(t),a=e[n],r=a.axisDim+"Axis";a&&(i[r]=i[r]||[],i[r][a.axisIndex]={data:o.categories},i.series=i.series.concat(o.series))}else{o=Km(t);i.series.push(o)}}),i}function Qm(t){this._dom=null,this.model=t}function tv(t,e){return f(t,function(t,i){var n=e&&e[i];return b(n)&&!y(n)?(b(t)&&!y(t)&&(t=t.value),r({value:t},n)):t})}function ev(t,e){var i=av(t);zL(e,function(e,n){for(var o=i.length-1;o>=0&&!i[o][n];o--);if(o<0){var a=t.queryComponents({mainType:"dataZoom",subType:"select",id:n})[0];if(a){var r=a.getPercentRange();i[0][n]={dataZoomId:n,start:r[0],end:r[1]}}}}),i.push(e)}function iv(t){var e=av(t),i=e[e.length-1];e.length>1&&e.pop();var n={};return zL(i,function(t,i){for(var o=e.length-1;o>=0;o--)if(t=e[o][i]){n[i]=t;break}}),n}function nv(t){t[NL]=null}function ov(t){return av(t).length}function av(t){var e=t[NL];return e||(e=t[NL]=[{}]),e}function rv(t,e,i){(this._brushController=new Yu(i.getZr())).on("brush",m(this._onBrush,this)).mount(),this._isZoomActive}function sv(t){var e={};return d(["xAxisIndex","yAxisIndex"],function(i){e[i]=t[i],null==e[i]&&(e[i]="all"),(!1===e[i]||"none"===e[i])&&(e[i]=[])}),e}function lv(t,e){t.setIconStatus("back",ov(e)>1?"emphasis":"normal")}function hv(t,e,i,n,o){var a=i._isZoomActive;n&&"takeGlobalCursor"===n.type&&(a="dataZoomSelect"===n.key&&n.dataZoomSelectActive),i._isZoomActive=a,t.setIconStatus("zoom",a?"emphasis":"normal");var r=new rg(sv(t.option),e,{include:["grid"]});i._brushController.setPanels(r.makePanelOpts(o,function(t){return t.xAxisDeclared&&!t.yAxisDeclared?"lineX":!t.xAxisDeclared&&t.yAxisDeclared?"lineY":"rect"})).enableBrush(!!a&&{brushType:"auto",brushStyle:{lineWidth:0,fill:"rgba(0,0,0,0.2)"}})}function uv(t){this.model=t}function cv(t){return HL(t)}function dv(){if(!UL&&XL){UL=!0;var t=XL.styleSheets;t.length<31?XL.createStyleSheet().addRule(".zrvml","behavior:url(#default#VML)"):t[0].addRule(".zrvml","behavior:url(#default#VML)")}}function fv(t){return parseInt(t,10)}function pv(t,e){dv(),this.root=t,this.storage=e;var i=document.createElement("div"),n=document.createElement("div");i.style.cssText="display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",n.style.cssText="position:absolute;left:0;top:0;",t.appendChild(i),this._vmlRoot=n,this._vmlViewport=i,this.resize();var o=e.delFromStorage,a=e.addToStorage;e.delFromStorage=function(t){o.call(e,t),t&&t.onRemove&&t.onRemove(n)},e.addToStorage=function(t){t.onAdd&&t.onAdd(n),a.call(e,t)},this._firstPaint=!0}function gv(t){return function(){Wy('In IE8.0 VML mode painter not support method "'+t+'"')}}function mv(t){return document.createElementNS(Tk,t)}function vv(t){return Lk(1e4*t)/1e4}function yv(t){return t<Ek&&t>-Ek}function xv(t,e){var i=e?t.textFill:t.fill;return null!=i&&i!==Dk}function _v(t,e){var i=e?t.textStroke:t.stroke;return null!=i&&i!==Dk}function bv(t,e){e&&wv(t,"transform","matrix("+Ck.call(e,",")+")")}function wv(t,e,i){(!i||"linear"!==i.type&&"radial"!==i.type)&&t.setAttribute(e,i)}function Sv(t,e,i){t.setAttributeNS("http://www.w3.org/1999/xlink",e,i)}function Mv(t,e,i){if(xv(e,i)){var n=i?e.textFill:e.fill;n="transparent"===n?Dk:n,"none"!==t.getAttribute("clip-path")&&n===Dk&&(n="rgba(0, 0, 0, 0.002)"),wv(t,"fill",n),wv(t,"fill-opacity",e.opacity)}else wv(t,"fill",Dk);if(_v(e,i)){var o=i?e.textStroke:e.stroke;wv(t,"stroke",o="transparent"===o?Dk:o),wv(t,"stroke-width",(i?e.textStrokeWidth:e.lineWidth)/(e.strokeNoScale?e.host.getLineScale():1)),wv(t,"paint-order","stroke"),wv(t,"stroke-opacity",e.opacity),e.lineDash?(wv(t,"stroke-dasharray",e.lineDash.join(",")),wv(t,"stroke-dashoffset",Lk(e.lineDashOffset||0))):wv(t,"stroke-dasharray",""),e.lineCap&&wv(t,"stroke-linecap",e.lineCap),e.lineJoin&&wv(t,"stroke-linejoin",e.lineJoin),e.miterLimit&&wv(t,"stroke-miterlimit",e.miterLimit)}else wv(t,"stroke",Dk)}function Iv(t){for(var e=[],i=t.data,n=t.len(),o=0;o<n;){var a="",r=0;switch(i[o++]){case Ak.M:a="M",r=2;break;case Ak.L:a="L",r=2;break;case Ak.Q:a="Q",r=4;break;case Ak.C:a="C",r=6;break;case Ak.A:var s=i[o++],l=i[o++],h=i[o++],u=i[o++],c=i[o++],d=i[o++],f=i[o++],p=i[o++],g=Math.abs(d),m=yv(g%zk)&&!yv(g),v=!1;v=g>=zk||!yv(g)&&(d>-Ok&&d<0||d>Ok)==!!p;var y=vv(s+h*Pk(c)),x=vv(l+u*kk(c));m&&(d=p?zk-1e-4:1e-4-zk,v=!0,9===o&&e.push("M",y,x));var _=vv(s+h*Pk(c+d)),b=vv(l+u*kk(c+d));e.push("A",vv(h),vv(u),Lk(f*Nk),+v,+p,_,b);break;case Ak.Z:a="Z";break;case Ak.R:var _=vv(i[o++]),b=vv(i[o++]),w=vv(i[o++]),S=vv(i[o++]);e.push("M",_,b,"L",_+w,b,"L",_+w,b+S,"L",_,b+S,"L",_,b)}a&&e.push(a);for(var M=0;M<r;M++)e.push(vv(i[o++]))}return e.join(" ")}function Tv(t){return"middle"===t?"middle":"bottom"===t?"baseline":"hanging"}function Av(){}function Cv(t,e,i,n){for(var o=0,a=e.length,r=0,s=0;o<a;o++){var l=e[o];if(l.removed){for(var h=[],u=s;u<s+l.count;u++)h.push(u);l.indices=h,s+=l.count}else{for(var h=[],u=r;u<r+l.count;u++)h.push(u);l.indices=h,r+=l.count,l.added||(s+=l.count)}}return e}function Dv(t){return{newPos:t.newPos,components:t.components.slice(0)}}function Lv(t,e,i){this._svgRoot=t,this._tagNames="string"==typeof e?[e]:e,this._markLabel=i,this.nextId=0}function kv(t){Lv.call(this,t,["linearGradient","radialGradient"],"__gradient_in_use__")}function Pv(t){Lv.call(this,t,"clipPath","__clippath_in_use__")}function Ov(t){return parseInt(t,10)}function zv(t){return t instanceof Nn?Rk:t instanceof qe?Vk:t instanceof ib?Bk:Rk}function Nv(t,e){return e&&t&&e.parentNode!==t}function Ev(t,e,i){if(Nv(t,e)&&i){var n=i.nextSibling;n?t.insertBefore(e,n):t.appendChild(e)}}function Rv(t,e){if(Nv(t,e)){var i=t.firstChild;i?t.insertBefore(e,i):t.appendChild(e)}}function Vv(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)}function Bv(t){return t.__textSvgEl}function Gv(t){return t.__svgEl}function Wv(t){return function(){Wy('In SVG mode painter not support method "'+t+'"')}}var Hv=2311,Fv=function(){return Hv++},Zv={},Uv=Zv="undefined"==typeof navigator?{browser:{},os:{},node:!0,canvasSupported:!0,svgSupported:!0}:function(t){var e={},i={},n=t.match(/Firefox\/([\d.]+)/),o=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),a=t.match(/Edge\/([\d.]+)/),r=/micromessenger/i.test(t);return n&&(i.firefox=!0,i.version=n[1]),o&&(i.ie=!0,i.version=o[1]),a&&(i.edge=!0,i.version=a[1]),r&&(i.weChat=!0),{browser:i,os:e,node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!i.ie&&!i.edge,pointerEventsSupported:"onpointerdown"in window&&(i.edge||i.ie&&i.version>=11)}}(navigator.userAgent),Xv={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},jv={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},qv=Object.prototype.toString,Yv=Array.prototype,$v=Yv.forEach,Kv=Yv.filter,Jv=Yv.slice,Qv=Yv.map,ty=Yv.reduce,ey={},iy=function(){return ey.createCanvas()};ey.createCanvas=function(){return document.createElement("canvas")};var ny,oy="__ec_primitive__";O.prototype={constructor:O,get:function(t){return this["_ec_"+t]},set:function(t,e){return this["_ec_"+t]=e,e},each:function(t,e){void 0!==e&&(t=m(t,e));for(var i in this)this.hasOwnProperty(i)&&t(this[i],i.slice(4))},removeKey:function(t){delete this["_ec_"+t]}};var ay=(Object.freeze||Object)({$override:e,clone:i,merge:n,mergeAll:o,extend:a,defaults:r,createCanvas:iy,getContext:s,indexOf:l,inherits:h,mixin:u,isArrayLike:c,each:d,map:f,reduce:p,filter:g,find:function(t,e,i){if(t&&e)for(var n=0,o=t.length;n<o;n++)if(e.call(i,t[n],n,t))return t[n]},bind:m,curry:v,isArray:y,isFunction:x,isString:_,isObject:b,isBuiltInObject:w,isDom:S,eqNaN:M,retrieve:I,retrieve2:T,retrieve3:A,slice:C,normalizeCssArray:D,assert:L,setAsPrimitive:k,isPrimitive:P,createHashMap:z,noop:N}),ry="undefined"==typeof Float32Array?Array:Float32Array,sy=F,ly=Z,hy=j,uy=q,cy=(Object.freeze||Object)({create:E,copy:R,clone:V,set:B,add:G,scaleAndAdd:W,sub:H,len:F,length:sy,lenSquare:Z,lengthSquare:ly,mul:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t},div:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:U,normalize:X,distance:j,dist:hy,distanceSquare:q,distSquare:uy,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:Y,applyTransform:$,min:K,max:J});Q.prototype={constructor:Q,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(tt(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var i=t.offsetX,n=t.offsetY,o=i-this._x,a=n-this._y;this._x=i,this._y=n,e.drift(o,a,t),this.dispatchToElement(tt(e,t),"drag",t.event);var r=this.findHover(i,n,e).target,s=this._dropTarget;this._dropTarget=r,e!==r&&(s&&r!==s&&this.dispatchToElement(tt(s,t),"dragleave",t.event),r&&r!==s&&this.dispatchToElement(tt(r,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(tt(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(tt(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var dy=Array.prototype.slice,fy=function(){this._$handlers={}};fy.prototype={constructor:fy,one:function(t,e,i){var n=this._$handlers;if(!e||!t)return this;n[t]||(n[t]=[]);for(var o=0;o<n[t].length;o++)if(n[t][o].h===e)return this;return n[t].push({h:e,one:!0,ctx:i||this}),this},on:function(t,e,i){var n=this._$handlers;if(!e||!t)return this;n[t]||(n[t]=[]);for(var o=0;o<n[t].length;o++)if(n[t][o].h===e)return this;return n[t].push({h:e,one:!1,ctx:i||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var i=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(i[t]){for(var n=[],o=0,a=i[t].length;o<a;o++)i[t][o].h!=e&&n.push(i[t][o]);i[t]=n}i[t]&&0===i[t].length&&delete i[t]}else delete i[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,i=e.length;i>3&&(e=dy.call(e,1));for(var n=this._$handlers[t],o=n.length,a=0;a<o;){switch(i){case 1:n[a].h.call(n[a].ctx);break;case 2:n[a].h.call(n[a].ctx,e[1]);break;case 3:n[a].h.call(n[a].ctx,e[1],e[2]);break;default:n[a].h.apply(n[a].ctx,e)}n[a].one?(n.splice(a,1),o--):a++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,i=e.length;i>4&&(e=dy.call(e,1,e.length-1));for(var n=e[e.length-1],o=this._$handlers[t],a=o.length,r=0;r<a;){switch(i){case 1:o[r].h.call(n);break;case 2:o[r].h.call(n,e[1]);break;case 3:o[r].h.call(n,e[1],e[2]);break;default:o[r].h.apply(n,e)}o[r].one?(o.splice(r,1),a--):r++}}return this}};var py="silent";it.prototype.dispose=function(){};var gy=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],my=function(t,e,i,n){fy.call(this),this.storage=t,this.painter=e,this.painterRoot=n,i=i||new it,this.proxy=i,i.handler=this,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,Q.call(this),d(gy,function(t){i.on&&i.on(t,this[t],this)},this)};my.prototype={constructor:my,mousemove:function(t){var e=t.zrX,i=t.zrY,n=this._hovered,o=n.target;o&&!o.__zr&&(o=(n=this.findHover(n.x,n.y)).target);var a=this._hovered=this.findHover(e,i),r=a.target,s=this.proxy;s.setCursor&&s.setCursor(r?r.cursor:"default"),o&&r!==o&&this.dispatchToElement(n,"mouseout",t),this.dispatchToElement(a,"mousemove",t),r&&r!==o&&this.dispatchToElement(a,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,i=t.toElement||t.relatedTarget;do{i=i&&i.parentNode}while(i&&9!=i.nodeType&&!(e=i===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var i=this[t];i&&i.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,i){var n=(t=t||{}).target;if(!n||!n.silent){for(var o="on"+e,a=et(e,t,i);n&&(n[o]&&(a.cancelBubble=n[o].call(n,a)),n.trigger(e,a),n=n.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[o]&&t[o].call(t,a),t.trigger&&t.trigger(e,a)}))}},findHover:function(t,e,i){for(var n=this.storage.getDisplayList(),o={x:t,y:e},a=n.length-1;a>=0;a--){var r;if(n[a]!==i&&!n[a].ignore&&(r=nt(n[a],t,e))&&(!o.topTarget&&(o.topTarget=n[a]),r!==py)){o.target=n[a];break}}return o}},d(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){my.prototype[t]=function(e){var i=this.findHover(e.zrX,e.zrY),n=i.target;if("mousedown"===t)this._downEl=n,this._downPoint=[e.zrX,e.zrY],this._upEl=n;else if("mosueup"===t)this._upEl=n;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||hy(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(i,t,e)}}),u(my,fy),u(my,Q);var vy="undefined"==typeof Float32Array?Array:Float32Array,yy=(Object.freeze||Object)({create:ot,identity:at,copy:rt,mul:st,translate:lt,rotate:ht,scale:ut,invert:ct}),xy=at,_y=5e-5,by=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},wy=by.prototype;wy.transform=null,wy.needLocalTransform=function(){return dt(this.rotation)||dt(this.position[0])||dt(this.position[1])||dt(this.scale[0]-1)||dt(this.scale[1]-1)},wy.updateTransform=function(){var t=this.parent,e=t&&t.transform,i=this.needLocalTransform(),n=this.transform;i||e?(n=n||ot(),i?this.getLocalTransform(n):xy(n),e&&(i?st(n,t.transform,n):rt(n,t.transform)),this.transform=n,this.invTransform=this.invTransform||ot(),ct(this.invTransform,n)):n&&xy(n)},wy.getLocalTransform=function(t){return by.getLocalTransform(this,t)},wy.setTransform=function(t){var e=this.transform,i=t.dpr||1;e?t.setTransform(i*e[0],i*e[1],i*e[2],i*e[3],i*e[4],i*e[5]):t.setTransform(i,0,0,i,0,0)},wy.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Sy=[];wy.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(st(Sy,t.invTransform,e),e=Sy);var i=e[0]*e[0]+e[1]*e[1],n=e[2]*e[2]+e[3]*e[3],o=this.position,a=this.scale;dt(i-1)&&(i=Math.sqrt(i)),dt(n-1)&&(n=Math.sqrt(n)),e[0]<0&&(i=-i),e[3]<0&&(n=-n),o[0]=e[4],o[1]=e[5],a[0]=i,a[1]=n,this.rotation=Math.atan2(-e[1]/n,e[0]/i)}},wy.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),i=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(i=-i),[e,i]},wy.transformCoordToLocal=function(t,e){var i=[t,e],n=this.invTransform;return n&&$(i,i,n),i},wy.transformCoordToGlobal=function(t,e){var i=[t,e],n=this.transform;return n&&$(i,i,n),i},by.getLocalTransform=function(t,e){xy(e=e||[]);var i=t.origin,n=t.scale||[1,1],o=t.rotation||0,a=t.position||[0,0];return i&&(e[4]-=i[0],e[5]-=i[1]),ut(e,e,n),o&&ht(e,e,o),i&&(e[4]+=i[0],e[5]+=i[1]),e[4]+=a[0],e[5]+=a[1],e};var My={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-My.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*My.bounceIn(2*t):.5*My.bounceOut(2*t-1)+.5}};ft.prototype={constructor:ft,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var i=(t-this._startTime-this._pausedTime)/this._life;if(!(i<0)){i=Math.min(i,1);var n=this.easing,o="string"==typeof n?My[n]:n,a="function"==typeof o?o(i):i;return this.fire("frame",a),1==i?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Iy=function(){this.head=null,this.tail=null,this._len=0},Ty=Iy.prototype;Ty.insert=function(t){var e=new Ay(t);return this.insertEntry(e),e},Ty.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Ty.remove=function(t){var e=t.prev,i=t.next;e?e.next=i:this.head=i,i?i.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Ty.len=function(){return this._len},Ty.clear=function(){this.head=this.tail=null,this._len=0};var Ay=function(t){this.value=t,this.next,this.prev},Cy=function(t){this._list=new Iy,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Dy=Cy.prototype;Dy.put=function(t,e){var i=this._list,n=this._map,o=null;if(null==n[t]){var a=i.len(),r=this._lastRemovedEntry;if(a>=this._maxSize&&a>0){var s=i.head;i.remove(s),delete n[s.key],o=s.value,this._lastRemovedEntry=s}r?r.value=e:r=new Ay(e),r.key=t,i.insertEntry(r),n[t]=r}return o},Dy.get=function(t){var e=this._map[t],i=this._list;if(null!=e)return e!==i.tail&&(i.remove(e),i.insertEntry(e)),e.value},Dy.clear=function(){this._list.clear(),this._map={}};var Ly={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},ky=new Cy(20),Py=null,Oy=Dt,zy=Lt,Ny=(Object.freeze||Object)({parse:Mt,lift:At,toHex:Ct,fastLerp:Dt,fastMapToColor:Oy,lerp:Lt,mapToColor:zy,modifyHSL:kt,modifyAlpha:Pt,stringify:Ot}),Ey=Array.prototype.slice,Ry=function(t,e,i,n){this._tracks={},this._target=t,this._loop=e||!1,this._getter=i||zt,this._setter=n||Nt,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};Ry.prototype={when:function(t,e){var i=this._tracks;for(var n in e)if(e.hasOwnProperty(n)){if(!i[n]){i[n]=[];var o=this._getter(this._target,n);if(null==o)continue;0!==t&&i[n].push({time:0,value:Ft(o)})}i[n].push({time:t,value:e[n]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,i=0;i<e;i++)t[i].call(this)},start:function(t,e){var i,n=this,o=0;for(var a in this._tracks)if(this._tracks.hasOwnProperty(a)){var r=Xt(this,t,function(){--o||n._doneCallback()},this._tracks[a],a,e);r&&(this._clipList.push(r),o++,this.animation&&this.animation.addClip(r),i=r)}if(i){var s=i.onframe;i.onframe=function(t,e){s(t,e);for(var i=0;i<n._onframeList.length;i++)n._onframeList[i](t,e)}}return o||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,i=this.animation,n=0;n<e.length;n++){var o=e[n];t&&o.onframe(this._target,1),i&&i.removeClip(o)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var Vy=1;"undefined"!=typeof window&&(Vy=Math.max(window.devicePixelRatio||1,1));var By=Vy,Gy=function(){},Wy=Gy,Hy=function(){this.animators=[]};Hy.prototype={constructor:Hy,animate:function(t,e){var i,n=!1,o=this,a=this.__zr;if(t){var r=t.split("."),s=o;n="shape"===r[0];for(var h=0,u=r.length;h<u;h++)s&&(s=s[r[h]]);s&&(i=s)}else i=o;if(i){var c=o.animators,d=new Ry(i,e);return d.during(function(t){o.dirty(n)}).done(function(){c.splice(l(c,d),1)}),c.push(d),a&&a.animation.addAnimator(d),d}Wy('Property "'+t+'" is not existed in element '+o.id)},stopAnimation:function(t){for(var e=this.animators,i=e.length,n=0;n<i;n++)e[n].stop(t);return e.length=0,this},animateTo:function(t,e,i,n,o,a){_(i)?(o=n,n=i,i=0):x(n)?(o=n,n="linear",i=0):x(i)?(o=i,i=0):x(e)?(o=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,i);var r=this.animators.slice(),s=r.length;s||o&&o();for(var l=0;l<r.length;l++)r[l].done(function(){--s||o&&o()}).start(n,a)},_animateToShallow:function(t,e,i,n,o){var a={},r=0;for(var s in i)if(i.hasOwnProperty(s))if(null!=e[s])b(i[s])&&!c(i[s])?this._animateToShallow(t?t+"."+s:s,e[s],i[s],n,o):(a[s]=i[s],r++);else if(null!=i[s])if(t){var l={};l[t]={},l[t][s]=i[s],this.attr(l)}else this.attr(s,i[s]);return r>0&&this.animate(t,!1).when(null==n?500:n,a).delay(o||0),this}};var Fy=function(t){by.call(this,t),fy.call(this,t),Hy.call(this,t),this.id=t.id||Fv()};Fy.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var i=this.transform;i||(i=this.transform=[1,0,0,1,0,0]),i[4]+=t,i[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var i=this[t];i||(i=this[t]=[]),i[0]=e[0],i[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(b(t))for(var i in t)t.hasOwnProperty(i)&&this.attrKV(i,t[i]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var i=0;i<e.length;i++)t.animation.addAnimator(e[i]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var i=0;i<e.length;i++)t.animation.removeAnimator(e[i]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},u(Fy,Hy),u(Fy,by),u(Fy,fy);var Zy=$,Uy=Math.min,Xy=Math.max;jt.prototype={constructor:jt,union:function(t){var e=Uy(t.x,this.x),i=Uy(t.y,this.y);this.width=Xy(t.x+t.width,this.x+this.width)-e,this.height=Xy(t.y+t.height,this.y+this.height)-i,this.x=e,this.y=i},applyTransform:function(){var t=[],e=[],i=[],n=[];return function(o){if(o){t[0]=i[0]=this.x,t[1]=n[1]=this.y,e[0]=n[0]=this.x+this.width,e[1]=i[1]=this.y+this.height,Zy(t,t,o),Zy(e,e,o),Zy(i,i,o),Zy(n,n,o),this.x=Uy(t[0],e[0],i[0],n[0]),this.y=Uy(t[1],e[1],i[1],n[1]);var a=Xy(t[0],e[0],i[0],n[0]),r=Xy(t[1],e[1],i[1],n[1]);this.width=a-this.x,this.height=r-this.y}}}(),calculateTransform:function(t){var e=this,i=t.width/e.width,n=t.height/e.height,o=ot();return lt(o,o,[-e.x,-e.y]),ut(o,o,[i,n]),lt(o,o,[t.x,t.y]),o},intersect:function(t){if(!t)return!1;t instanceof jt||(t=jt.create(t));var e=this,i=e.x,n=e.x+e.width,o=e.y,a=e.y+e.height,r=t.x,s=t.x+t.width,l=t.y,h=t.y+t.height;return!(n<r||s<i||a<l||h<o)},contain:function(t,e){var i=this;return t>=i.x&&t<=i.x+i.width&&e>=i.y&&e<=i.y+i.height},clone:function(){return new jt(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},jt.create=function(t){return new jt(t.x,t.y,t.width,t.height)};var jy=function(t){t=t||{},Fy.call(this,t);for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};jy.prototype={constructor:jy,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,i=0;i<e.length;i++)if(e[i].name===t)return e[i]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var i=this._children,n=i.indexOf(e);n>=0&&(i.splice(n,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,i=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof jy&&t.addChildrenToStorage(e)),i&&i.refresh()},remove:function(t){var e=this.__zr,i=this.__storage,n=this._children,o=l(n,t);return o<0?this:(n.splice(o,1),t.parent=null,i&&(i.delFromStorage(t),t instanceof jy&&t.delChildrenFromStorage(i)),e&&e.refresh(),this)},removeAll:function(){var t,e,i=this._children,n=this.__storage;for(e=0;e<i.length;e++)t=i[e],n&&(n.delFromStorage(t),t instanceof jy&&t.delChildrenFromStorage(n)),t.parent=null;return i.length=0,this},eachChild:function(t,e){for(var i=this._children,n=0;n<i.length;n++){var o=i[n];t.call(e,o,n)}return this},traverse:function(t,e){for(var i=0;i<this._children.length;i++){var n=this._children[i];t.call(e,n),"group"===n.type&&n.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.addToStorage(i),i instanceof jy&&i.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var i=this._children[e];t.delFromStorage(i),i instanceof jy&&i.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,i=new jt(0,0,0,0),n=t||this._children,o=[],a=0;a<n.length;a++){var r=n[a];if(!r.ignore&&!r.invisible){var s=r.getBoundingRect(),l=r.getLocalTransform(o);l?(i.copy(s),i.applyTransform(l),(e=e||i.clone()).union(i)):(e=e||s.clone()).union(s)}}return e||i}},h(jy,Fy);var qy=32,Yy=7,$y=function(){this._roots=[],this._displayList=[],this._displayListLen=0};$y.prototype={constructor:$y,traverse:function(t,e){for(var i=0;i<this._roots.length;i++)this._roots[i].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,i=this._displayList,n=0,o=e.length;n<o;n++)this._updateAndAddDisplayable(e[n],null,t);i.length=this._displayListLen,Uv.canvasSupported&&ee(i,ie)},_updateAndAddDisplayable:function(t,e,i){if(!t.ignore||i){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var n=t.clipPath;if(n){e=e?e.slice():[];for(var o=n,a=t;o;)o.parent=a,o.updateTransform(),e.push(o),a=o,o=o.clipPath}if(t.isGroup){for(var r=t._children,s=0;s<r.length;s++){var l=r[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,i)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof jy&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(i=0;i<this._roots.length;i++){var e=this._roots[i];e instanceof jy&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var i=0,n=t.length;i<n;i++)this.delRoot(t[i]);else{var o=l(this._roots,t);o>=0&&(this.delFromStorage(t),this._roots.splice(o,1),t instanceof jy&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t.__storage=this,t.dirty(!1),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:ie};var Ky=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],Jy=function(t,e){this.extendFrom(t,!1),this.host=e};Jy.prototype={constructor:Jy,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,i){for(var n=this,o=i&&i.style,a=!o,r=0;r<Ky.length;r++){var s=Ky[r],l=s[0];(a||n[l]!==o[l])&&(t[l]=n[l]||s[1])}if((a||n.fill!==o.fill)&&(t.fillStyle=n.fill),(a||n.stroke!==o.stroke)&&(t.strokeStyle=n.stroke),(a||n.opacity!==o.opacity)&&(t.globalAlpha=null==n.opacity?1:n.opacity),(a||n.blend!==o.blend)&&(t.globalCompositeOperation=n.blend||"source-over"),this.hasStroke()){var h=n.lineWidth;t.lineWidth=h/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var i in t)!t.hasOwnProperty(i)||!0!==e&&(!1===e?this.hasOwnProperty(i):null==t[i])||(this[i]=t[i])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,i){for(var n=("radial"===e.type?oe:ne)(t,e,i),o=e.colorStops,a=0;a<o.length;a++)n.addColorStop(o[a].offset,o[a].color);return n}};for(var Qy=Jy.prototype,tx=0;tx<Ky.length;tx++){var ex=Ky[tx];ex[0]in Qy||(Qy[ex[0]]=ex[1])}Jy.getGradient=Qy.getGradient;var ix=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};ix.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var nx=function(t,e,i){var n;i=i||By,"string"==typeof t?n=re(t,e,i):b(t)&&(t=(n=t).id),this.id=t,this.dom=n;var o=n.style;o&&(n.onselectstart=ae,o["-webkit-user-select"]="none",o["user-select"]="none",o["-webkit-touch-callout"]="none",o["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",o.padding=0,o.margin=0,o["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=i};nx.prototype={constructor:nx,elCount:0,__dirty:!0,initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.__currentValues={},this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=re("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),this.ctxBack.__currentValues={},1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var i=this.dpr,n=this.dom,o=n.style,a=this.domBack;o.width=t+"px",o.height=e+"px",n.width=t*i,n.height=e*i,a&&(a.width=t*i,a.height=e*i,1!=i&&this.ctxBack.scale(i,i))},clear:function(t){var e=this.dom,i=this.ctx,n=e.width,o=e.height,a=this.clearColor,r=this.motionBlur&&!t,s=this.lastFrameAlpha,l=this.dpr;if(r&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(e,0,0,n/l,o/l)),i.clearRect(0,0,n,o),a){var h;a.colorStops?(h=a.__canvasGradient||Jy.getGradient(i,a,{x:0,y:0,width:n,height:o}),a.__canvasGradient=h):a.image&&(h=ix.prototype.getCanvasPattern.call(a,i)),i.save(),i.fillStyle=h||a,i.fillRect(0,0,n,o),i.restore()}if(r){var u=this.domBack;i.save(),i.globalAlpha=s,i.drawImage(u,0,0,n,o),i.restore()}}};var ox="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},ax=new Cy(50),rx={},sx=0,lx=5e3,hx=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,ux="12px sans-serif",cx={};cx.measureText=function(t,e){var i=s();return i.font=e||ux,i.measureText(t)};var dx={left:1,right:1,center:1},fx={top:1,bottom:1,middle:1},px=new jt,gx=function(){};gx.prototype={constructor:gx,drawRectText:function(t,e){var i=this.style;e=i.textRect||e,this.__dirty&&De(i);var n=i.text;if(null!=n&&(n+=""),Xe(n,i)){t.save();var o=this.transform;i.transformText?this.setTransform(t):o&&(px.copy(e),px.applyTransform(o),e=px),ke(this,t,n,i,e),t.restore()}}},je.prototype={constructor:je,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:-1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var i=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(i[0],i[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?Fy.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new Jy(t,this),this.dirty(!1),this}},h(je,Fy),u(je,gx),qe.prototype={constructor:qe,type:"image",brush:function(t,e){var i=this.style,n=i.image;i.bind(t,this,e);var o=this._image=le(n,this._image,this,this.onload);if(o&&ue(o)){var a=i.x||0,r=i.y||0,s=i.width,l=i.height,h=o.width/o.height;if(null==s&&null!=l?s=l*h:null==l&&null!=s?l=s/h:null==s&&null==l&&(s=o.width,l=o.height),this.setTransform(t),i.sWidth&&i.sHeight){var u=i.sx||0,c=i.sy||0;t.drawImage(o,u,c,i.sWidth,i.sHeight,a,r,s,l)}else if(i.sx&&i.sy){var d=s-(u=i.sx),f=l-(c=i.sy);t.drawImage(o,u,c,d,f,a,r,s,l)}else t.drawImage(o,a,r,s,l);this.restoreTransform(t),null!=i.text&&this.drawRectText(t,this.getBoundingRect())}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new jt(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},h(qe,je);var mx=new jt(0,0,0,0),vx=new jt(0,0,0,0),yx=function(t,e,i){this.type="canvas";var n=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=i=a({},i||{}),this.dpr=i.devicePixelRatio||By,this._singleCanvas=n,this.root=t;var o=t.style;o&&(o["-webkit-tap-highlight-color"]="transparent",o["-webkit-user-select"]=o["user-select"]=o["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var r=this._zlevelList=[],s=this._layers={};if(this._layerConfig={},n){null!=i.width&&(t.width=i.width),null!=i.height&&(t.height=i.height);var l=t.width,h=t.height;this._width=l,this._height=h;var u=new nx(t,this,1);u.initContext(),s[0]=u,r.push(0),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var c=this._domRoot=ii(this._width,this._height);t.appendChild(c)}this._progressiveLayers=[],this._hoverlayer,this._hoverElements=[]};yx.prototype={constructor:yx,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),i=this._zlevelList;this._paintList(e,t);for(var n=0;n<i.length;n++){var o=i[n],a=this._layers[o];!a.__builtin__&&a.refresh&&a.refresh()}return this.refreshHover(),this._progressiveLayers.length&&this._startProgessive(),this},addHover:function(t,e){if(!t.__hoverMir){var i=new t.constructor({style:t.style,shape:t.shape});i.__from=t,t.__hoverMir=i,i.setStyle(e),this._hoverElements.push(i)}},removeHover:function(t){var e=t.__hoverMir,i=this._hoverElements,n=l(i,e);n>=0&&i.splice(n,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,i=0;i<e.length;i++){var n=e[i].__from;n&&(n.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,i=this._hoverlayer;if(i&&i.clear(),e){ee(t,this.storage.displayableSortFunc),i||(i=this._hoverlayer=this.getLayer(1e5));var n={};i.ctx.save();for(var o=0;o<e;){var a=t[o],r=a.__from;r&&r.__zr?(o++,r.invisible||(a.transform=r.transform,a.invTransform=r.invTransform,a.__clipPaths=r.__clipPaths,this._doPaintEl(a,i,!0,n))):(t.splice(o,1),r.__hoverMir=null,e--)}i.ctx.restore()}},_startProgessive:function(){function t(){i===e._progressiveToken&&e.storage&&(e._doPaintList(e.storage.getDisplayList()),e._furtherProgressive?(e._progress++,ox(t)):e._progressiveToken=-1)}var e=this;if(e._furtherProgressive){var i=e._progressiveToken=+new Date;e._progress++,ox(t)}},_clearProgressive:function(){this._progressiveToken=-1,this._progress=0,d(this._progressiveLayers,function(t){t.__dirty&&t.clear()})},_paintList:function(t,e){null==e&&(e=!1),this._updateLayerStatus(t),this._clearProgressive(),this.eachBuiltinLayer(Ke),this._doPaintList(t,e),this.eachBuiltinLayer(Je)},_doPaintList:function(t,e){function i(t){var e=a.dpr||1;a.save(),a.globalAlpha=1,a.shadowBlur=0,n.__dirty=!0,a.setTransform(1,0,0,1,0,0),a.drawImage(t.dom,0,0,u*e,c*e),a.restore()}for(var n,o,a,r,s,l,h=0,u=this._width,c=this._height,f=this._progress,p=0,g=t.length;p<g;p++){var m=t[p],v=this._singleCanvas?0:m.zlevel,y=m.__frame;if(y<0&&s&&(i(s),s=null),o!==v&&(a&&a.restore(),r={},o=v,(n=this.getLayer(o)).__builtin__||Wy("ZLevel "+o+" has been used by unkown layer "+n.id),(a=n.ctx).save(),n.__unusedCount=0,(n.__dirty||e)&&n.clear()),n.__dirty||e){if(y>=0){if(!s){if((s=this._progressiveLayers[Math.min(h++,4)]).ctx.save(),s.renderScope={},s&&s.__progress>s.__maxProgress){p=s.__nextIdxNotProg-1;continue}l=s.__progress,s.__dirty||(f=l),s.__progress=f+1}y===f&&this._doPaintEl(m,s,!0,s.renderScope)}else this._doPaintEl(m,n,e,r);m.__dirty=!1}}s&&i(s),a&&a.restore(),this._furtherProgressive=!1,d(this._progressiveLayers,function(t){t.__maxProgress>=t.__progress&&(this._furtherProgressive=!0)},this)},_doPaintEl:function(t,e,i,n){var o=e.ctx,a=t.transform;if((e.__dirty||i)&&!t.invisible&&0!==t.style.opacity&&(!a||a[0]||a[3])&&(!t.culling||!Qe(t,this._width,this._height))){var r=t.__clipPaths;(n.prevClipLayer!==e||ti(r,n.prevElClipPaths))&&(n.prevElClipPaths&&(n.prevClipLayer.ctx.restore(),n.prevClipLayer=n.prevElClipPaths=null,n.prevEl=null),r&&(o.save(),ei(r,o),n.prevClipLayer=e,n.prevElClipPaths=r)),t.beforeBrush&&t.beforeBrush(o),t.brush(o,n.prevEl||null),n.prevEl=t,t.afterBrush&&t.afterBrush(o)}},getLayer:function(t){if(this._singleCanvas)return this._layers[0];var e=this._layers[t];return e||((e=new nx("zr_"+t,this,this.dpr)).__builtin__=!0,this._layerConfig[t]&&n(e,this._layerConfig[t],!0),this.insertLayer(t,e),e.initContext()),e},insertLayer:function(t,e){var i=this._layers,n=this._zlevelList,o=n.length,a=null,r=-1,s=this._domRoot;if(i[t])Wy("ZLevel "+t+" has been used already");else if($e(e)){if(o>0&&t>n[0]){for(r=0;r<o-1&&!(n[r]<t&&n[r+1]>t);r++);a=i[n[r]]}if(n.splice(r+1,0,t),i[t]=e,!e.virtual)if(a){var l=a.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else Wy("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var i,n,o=this._zlevelList;for(n=0;n<o.length;n++)i=o[n],t.call(e,this._layers[i],i)},eachBuiltinLayer:function(t,e){var i,n,o,a=this._zlevelList;for(o=0;o<a.length;o++)n=a[o],(i=this._layers[n]).__builtin__&&t.call(e,i,n)},eachOtherLayer:function(t,e){var i,n,o,a=this._zlevelList;for(o=0;o<a.length;o++)n=a[o],(i=this._layers[n]).__builtin__||t.call(e,i,n)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){var e=this._layers,i=this._progressiveLayers,n={},o={};this.eachBuiltinLayer(function(t,e){n[e]=t.elCount,t.elCount=0,t.__dirty=!1}),d(i,function(t,e){o[e]=t.elCount,t.elCount=0,t.__dirty=!1});for(var a,r,s=0,l=0,h=0,u=t.length;h<u;h++){var c=t[h],f=e[this._singleCanvas?0:c.zlevel],p=c.progressive;if(f&&(f.elCount++,f.__dirty=f.__dirty||c.__dirty),p>=0){r!==p&&(r=p,l++);var g=c.__frame=l-1;if(!a){var m=Math.min(s,4);(a=i[m])||(a=i[m]=new nx("progressive",this,this.dpr)).initContext(),a.__maxProgress=0}a.__dirty=a.__dirty||c.__dirty,a.elCount++,a.__maxProgress=Math.max(a.__maxProgress,g),a.__maxProgress>=a.__progress&&(f.__dirty=!0)}else c.__frame=-1,a&&(a.__nextIdxNotProg=h,s++,a=null)}a&&(s++,a.__nextIdxNotProg=h),this.eachBuiltinLayer(function(t,e){n[e]!==t.elCount&&(t.__dirty=!0)}),i.length=Math.min(s,5),d(i,function(t,e){o[e]!==t.elCount&&(c.__dirty=!0),t.__dirty&&(t.__progress=0)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},configLayer:function(t,e){if(e){var i=this._layerConfig;i[t]?n(i[t],e,!0):i[t]=e;var o=this._layers[t];o&&n(o,i[t],!0)}},delLayer:function(t){var e=this._layers,i=this._zlevelList,n=e[t];n&&(n.dom.parentNode.removeChild(n.dom),delete e[t],i.splice(l(i,t),1))},resize:function(t,e){var i=this._domRoot;i.style.display="none";var n=this._opts;if(null!=t&&(n.width=t),null!=e&&(n.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!=t||e!=this._height){i.style.width=t+"px",i.style.height=e+"px";for(var o in this._layers)this._layers.hasOwnProperty(o)&&this._layers[o].resize(t,e);d(this._progressiveLayers,function(i){i.resize(t,e)}),this.refresh(!0)}return this._width=t,this._height=e,this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){function e(t,e){var n=r._zlevelList;null==t&&(t=-1/0);for(var o,a=0;a<n.length;a++){var s=n[a],l=r._layers[s];if(!l.__builtin__&&s>t&&s<e){o=l;break}}o&&o.renderToCanvas&&(i.ctx.save(),o.renderToCanvas(i.ctx),i.ctx.restore())}if(t=t||{},this._singleCanvas)return this._layers[0].dom;var i=new nx("image",this,t.pixelRatio||this.dpr);i.initContext(),i.clearColor=t.backgroundColor,i.clear();for(var n,o=this.storage.getDisplayList(!0),a={},r=this,s=0;s<o.length;s++){var l=o[s];l.zlevel!==n&&(e(n,l.zlevel),n=l.zlevel),this._doPaintEl(l,i,!0,a)}return e(n,1/0),i.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],n=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var r=this.root,s=document.defaultView.getComputedStyle(r);return(r[n]||Ye(s[i])||Ye(r.style[i]))-(Ye(s[o])||0)-(Ye(s[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=document.createElement("canvas"),n=i.getContext("2d"),o=t.getBoundingRect(),a=t.style,r=a.shadowBlur,s=a.shadowOffsetX,l=a.shadowOffsetY,h=a.hasStroke()?a.lineWidth:0,u=Math.max(h/2,-s+r),c=Math.max(h/2,s+r),d=Math.max(h/2,-l+r),f=Math.max(h/2,l+r),p=o.width+u+c,g=o.height+d+f;i.width=p*e,i.height=g*e,n.scale(e,e),n.clearRect(0,0,p,g),n.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[u-o.x,d-o.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(n);var v=new qe({style:{x:0,y:0,image:i}});return null!=m.position&&(v.position=t.position=m.position),null!=m.rotation&&(v.rotation=t.rotation=m.rotation),null!=m.scale&&(v.scale=t.scale=m.scale),v}};var xx="undefined"!=typeof window&&!!window.addEventListener,_x=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,bx=xx?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0},wx=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,fy.call(this)};wx.prototype={constructor:wx,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),i=0;i<e.length;i++)this.addClip(e[i])},removeClip:function(t){var e=l(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),i=0;i<e.length;i++)this.removeClip(e[i]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,i=this._clips,n=i.length,o=[],a=[],r=0;r<n;r++){var s=i[r],l=s.step(t,e);l&&(o.push(l),a.push(s))}for(r=0;r<n;)i[r]._needsRemove?(i[r]=i[n-1],i.pop(),n--):r++;n=o.length;for(r=0;r<n;r++)a[r].fire(o[r]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(ox(t),!e._paused&&e._update())}var e=this;this._running=!0,ox(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},animate:function(t,e){var i=new Ry(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(i),i}},u(wx,fy);var Sx=function(){this._track=[]};Sx.prototype={constructor:Sx,recognize:function(t,e,i){return this._doTrack(t,e,i),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,i){var n=t.touches;if(n){for(var o={points:[],touches:[],target:e,event:t},a=0,r=n.length;a<r;a++){var s=n[a],l=oi(i,s,{});o.points.push([l.zrX,l.zrY]),o.touches.push(s)}this._track.push(o)}},_recognize:function(t){for(var e in Mx)if(Mx.hasOwnProperty(e)){var i=Mx[e](this._track,t);if(i)return i}}};var Mx={pinch:function(t,e){var i=t.length;if(i){var n=(t[i-1]||{}).points,o=(t[i-2]||{}).points||n;if(o&&o.length>1&&n&&n.length>1){var a=ui(n)/ui(o);!isFinite(a)&&(a=1),e.pinchScale=a;var r=ci(n);return e.pinchX=r[0],e.pinchY=r[1],{type:"pinch",target:t[0].target,event:e}}}}},Ix=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Tx=["touchstart","touchend","touchmove"],Ax={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Cx=f(Ix,function(t){var e=t.replace("mouse","pointer");return Ax[e]?e:t}),Dx={mousemove:function(t){t=ri(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=ri(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=ri(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,fi(this,t,"start"),Dx.mousemove.call(this,t),Dx.mousedown.call(this,t),pi(this)},touchmove:function(t){(t=ri(this.dom,t)).zrByTouch=!0,fi(this,t,"change"),Dx.mousemove.call(this,t),pi(this)},touchend:function(t){(t=ri(this.dom,t)).zrByTouch=!0,fi(this,t,"end"),Dx.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Dx.click.call(this,t),pi(this)},pointerdown:function(t){Dx.mousedown.call(this,t)},pointermove:function(t){gi(t)||Dx.mousemove.call(this,t)},pointerup:function(t){Dx.mouseup.call(this,t)},pointerout:function(t){gi(t)||Dx.mouseout.call(this,t)}};d(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Dx[t]=function(e){e=ri(this.dom,e),this.trigger(t,e)}});var Lx=vi.prototype;Lx.dispose=function(){for(var t=Ix.concat(Tx),e=0;e<t.length;e++){var i=t[e];li(this.dom,di(i),this._handlers[i])}},Lx.setCursor=function(t){this.dom.style.cursor=t||"default"},u(vi,fy);var kx=!Uv.canvasSupported,Px={canvas:yx},Ox={},zx=function(t,e,i){i=i||{},this.dom=e,this.id=t;var n=this,o=new $y,a=i.renderer;if(kx){if(!Px.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");a="vml"}else a&&Px[a]||(a="canvas");var r=new Px[a](e,o,i);this.storage=o,this.painter=r;var s=Uv.node?null:new vi(r.getViewportRoot());this.handler=new my(o,r,s,r.root),this.animation=new wx({stage:{update:m(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=o.delFromStorage,h=o.addToStorage;o.delFromStorage=function(t){l.call(o,t),t&&t.removeSelfFromZr(n)},o.addToStorage=function(t){h.call(o,t),t.addSelfToZr(n)}};zx.prototype={constructor:zx,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer(t,e),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){this._needsRefresh&&this.refreshImmediately(),this._needsRefreshHover&&this.refreshHoverImmediately()},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,i){this.handler.on(t,e,i)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,_i(this.id)}};var Nx=(Object.freeze||Object)({version:"3.7.4",init:yi,dispose:function(t){if(t)t.dispose();else{for(var e in Ox)Ox.hasOwnProperty(e)&&Ox[e].dispose();Ox={}}return this},getInstance:function(t){return Ox[t]},registerPainter:xi}),Ex=1e-4,Rx=9007199254740991,Vx=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Bx=(Object.freeze||Object)({linearMap:wi,parsePercent:Si,round:Mi,asc:Ii,getPrecision:Ti,getPrecisionSafe:Ai,getPixelPrecision:Ci,getPercentWithPrecision:Di,MAX_SAFE_INTEGER:Rx,remRadian:Li,isRadianAroundZero:ki,parseDate:Pi,quantity:Oi,nice:Ni,reformIntervals:Ei,isNumeric:Ri}),Gx=D,Wx=["a","b","c","d","e","f","g"],Hx=function(t,e){return"{"+t+(null==e?"":e)+"}"},Fx=function(t){return t<10?"0"+t:t},Zx=ye,Ux=de,Xx=(Object.freeze||Object)({addCommas:Vi,toCamelCase:Bi,normalizeCssArray:Gx,encodeHTML:Gi,formatTpl:Wi,formatTplSimple:Hi,getTooltipMarker:Fi,formatTime:Zi,capitalFirst:Ui,truncateText:Zx,getTextRect:Ux}),jx=".",qx="___EC__COMPONENT__CONTAINER___",Yx="\0ec_\0",$x=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,i,n){for(var o={},a=0;a<t.length;a++){var r=t[a][1];if(!(i&&l(i,r)>=0||n&&l(n,r)<0)){var s=e.getShallow(r);null!=s&&(o[t[a][0]]=s)}}return o}},Kx=$x([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Jx={getLineStyle:function(t){var e=Kx(this,t),i=this.getLineDash(e.lineWidth);return i&&(e.lineDash=i),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),i=Math.max(t,2),n=4*t;return"solid"===e||null==e?null:"dashed"===e?[n,n]:[i,i]}},Qx=$x([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),t_={getAreaStyle:function(t,e){return Qx(this,t,e)}},e_=Math.pow,i_=Math.sqrt,n_=1e-8,o_=1e-4,a_=i_(3),r_=1/3,s_=E(),l_=E(),h_=E(),u_=Math.min,c_=Math.max,d_=Math.sin,f_=Math.cos,p_=2*Math.PI,g_=E(),m_=E(),v_=E(),y_=[],x_=[],__={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},b_=[],w_=[],S_=[],M_=[],I_=Math.min,T_=Math.max,A_=Math.cos,C_=Math.sin,D_=Math.sqrt,L_=Math.abs,k_="undefined"!=typeof Float32Array,P_=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};P_.prototype={constructor:P_,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=L_(1/By/t)||0,this._uy=L_(1/By/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(__.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var i=L_(t-this._xi)>this._ux||L_(e-this._yi)>this._uy||this._len<5;return this.addData(__.L,t,e),this._ctx&&i&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),i&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,i,n,o,a){return this.addData(__.C,t,e,i,n,o,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,i,n,o,a):this._ctx.bezierCurveTo(t,e,i,n,o,a)),this._xi=o,this._yi=a,this},quadraticCurveTo:function(t,e,i,n){return this.addData(__.Q,t,e,i,n),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,i,n):this._ctx.quadraticCurveTo(t,e,i,n)),this._xi=i,this._yi=n,this},arc:function(t,e,i,n,o,a){return this.addData(__.A,t,e,i,i,n,o-n,0,a?0:1),this._ctx&&this._ctx.arc(t,e,i,n,o,a),this._xi=A_(o)*i+t,this._yi=C_(o)*i+t,this},arcTo:function(t,e,i,n,o){return this._ctx&&this._ctx.arcTo(t,e,i,n,o),this},rect:function(t,e,i,n){return this._ctx&&this._ctx.rect(t,e,i,n),this.addData(__.R,t,e,i,n),this},closePath:function(){this.addData(__.Z);var t=this._ctx,e=this._x0,i=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,i),t.closePath()),this._xi=e,this._yi=i,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,i=0;i<t.length;i++)e+=t[i];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!k_||(this.data=new Float32Array(e));for(var i=0;i<e;i++)this.data[i]=t[i];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,i=0,n=this._len,o=0;o<e;o++)i+=t[o].len();k_&&this.data instanceof Float32Array&&(this.data=new Float32Array(n+i));for(o=0;o<e;o++)for(var a=t[o].data,r=0;r<a.length;r++)this.data[n++]=a[r];this._len=n},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var i=0;i<arguments.length;i++)e[this._len++]=arguments[i];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var i,n,o=this._dashSum,a=this._dashOffset,r=this._lineDash,s=this._ctx,l=this._xi,h=this._yi,u=t-l,c=e-h,d=D_(u*u+c*c),f=l,p=h,g=r.length;for(u/=d,c/=d,a<0&&(a=o+a),f-=(a%=o)*u,p-=a*c;u>0&&f<=t||u<0&&f>=t||0==u&&(c>0&&p<=e||c<0&&p>=e);)f+=u*(i=r[n=this._dashIdx]),p+=c*i,this._dashIdx=(n+1)%g,u>0&&f<l||u<0&&f>l||c>0&&p<h||c<0&&p>h||s[n%2?"moveTo":"lineTo"](u>=0?I_(f,t):T_(f,t),c>=0?I_(p,e):T_(p,e));u=f-t,c=p-e,this._dashOffset=-D_(u*u+c*c)},_dashedBezierTo:function(t,e,i,n,o,a){var r,s,l,h,u,c=this._dashSum,d=this._dashOffset,f=this._lineDash,p=this._ctx,g=this._xi,m=this._yi,v=on,y=0,x=this._dashIdx,_=f.length,b=0;for(d<0&&(d=c+d),d%=c,r=0;r<1;r+=.1)s=v(g,t,i,o,r+.1)-v(g,t,i,o,r),l=v(m,e,n,a,r+.1)-v(m,e,n,a,r),y+=D_(s*s+l*l);for(;x<_&&!((b+=f[x])>d);x++);for(r=(b-d)/y;r<=1;)h=v(g,t,i,o,r),u=v(m,e,n,a,r),x%2?p.moveTo(h,u):p.lineTo(h,u),r+=f[x]/y,x=(x+1)%_;x%2!=0&&p.lineTo(o,a),s=o-h,l=a-u,this._dashOffset=-D_(s*s+l*l)},_dashedQuadraticTo:function(t,e,i,n){var o=i,a=n;i=(i+2*t)/3,n=(n+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,i,n,o,a)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,k_&&(this.data=new Float32Array(t)))},getBoundingRect:function(){b_[0]=b_[1]=S_[0]=S_[1]=Number.MAX_VALUE,w_[0]=w_[1]=M_[0]=M_[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,i=0,n=0,o=0,a=0;a<t.length;){var r=t[a++];switch(1==a&&(n=e=t[a],o=i=t[a+1]),r){case __.M:e=n=t[a++],i=o=t[a++],S_[0]=n,S_[1]=o,M_[0]=n,M_[1]=o;break;case __.L:vn(e,i,t[a],t[a+1],S_,M_),e=t[a++],i=t[a++];break;case __.C:yn(e,i,t[a++],t[a++],t[a++],t[a++],t[a],t[a+1],S_,M_),e=t[a++],i=t[a++];break;case __.Q:xn(e,i,t[a++],t[a++],t[a],t[a+1],S_,M_),e=t[a++],i=t[a++];break;case __.A:var s=t[a++],l=t[a++],h=t[a++],u=t[a++],c=t[a++],d=t[a++]+c,f=(t[a++],1-t[a++]);1==a&&(n=A_(c)*h+s,o=C_(c)*u+l),_n(s,l,h,u,c,d,f,S_,M_),e=A_(d)*h+s,i=C_(d)*u+l;break;case __.R:vn(n=e=t[a++],o=i=t[a++],n+t[a++],o+t[a++],S_,M_);break;case __.Z:e=n,i=o}K(b_,b_,S_),J(w_,w_,M_)}return 0===a&&(b_[0]=b_[1]=w_[0]=w_[1]=0),new jt(b_[0],b_[1],w_[0]-b_[0],w_[1]-b_[1])},rebuildPath:function(t){for(var e,i,n,o,a,r,s=this.data,l=this._ux,h=this._uy,u=this._len,c=0;c<u;){var d=s[c++];switch(1==c&&(e=n=s[c],i=o=s[c+1]),d){case __.M:e=n=s[c++],i=o=s[c++],t.moveTo(n,o);break;case __.L:a=s[c++],r=s[c++],(L_(a-n)>l||L_(r-o)>h||c===u-1)&&(t.lineTo(a,r),n=a,o=r);break;case __.C:t.bezierCurveTo(s[c++],s[c++],s[c++],s[c++],s[c++],s[c++]),n=s[c-2],o=s[c-1];break;case __.Q:t.quadraticCurveTo(s[c++],s[c++],s[c++],s[c++]),n=s[c-2],o=s[c-1];break;case __.A:var f=s[c++],p=s[c++],g=s[c++],m=s[c++],v=s[c++],y=s[c++],x=s[c++],_=s[c++],b=g>m?g:m,w=g>m?1:g/m,S=g>m?m/g:1,M=v+y;Math.abs(g-m)>.001?(t.translate(f,p),t.rotate(x),t.scale(w,S),t.arc(0,0,b,v,M,1-_),t.scale(1/w,1/S),t.rotate(-x),t.translate(-f,-p)):t.arc(f,p,b,v,M,1-_),1==c&&(e=A_(v)*g+f,i=C_(v)*m+p),n=A_(M)*g+f,o=C_(M)*m+p;break;case __.R:e=n=s[c],i=o=s[c+1],t.rect(s[c++],s[c++],s[c++],s[c++]);break;case __.Z:t.closePath(),n=e,o=i}}}},P_.CMD=__;var O_=2*Math.PI,z_=2*Math.PI,N_=P_.CMD,E_=2*Math.PI,R_=1e-4,V_=[-1,-1,-1],B_=[-1,-1],G_=ix.prototype.getCanvasPattern,W_=Math.abs,H_=new P_(!0);Nn.prototype={constructor:Nn,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var i=this.style,n=this.path||H_,o=i.hasStroke(),a=i.hasFill(),r=i.fill,s=i.stroke,l=a&&!!r.colorStops,h=o&&!!s.colorStops,u=a&&!!r.image,c=o&&!!s.image;if(i.bind(t,this,e),this.setTransform(t),this.__dirty){var d;l&&(d=d||this.getBoundingRect(),this._fillGradient=i.getGradient(t,r,d)),h&&(d=d||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,s,d))}l?t.fillStyle=this._fillGradient:u&&(t.fillStyle=G_.call(r,t)),h?t.strokeStyle=this._strokeGradient:c&&(t.strokeStyle=G_.call(s,t));var f=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,m=this.getGlobalScale();n.setScale(m[0],m[1]),this.__dirtyPath||f&&!g&&o?(n.beginPath(t),f&&!g&&(n.setLineDash(f),n.setLineDashOffset(p)),this.buildPath(n,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a&&n.fill(t),f&&g&&(t.setLineDash(f),t.lineDashOffset=p),o&&n.stroke(t),f&&g&&t.setLineDash([]),this.restoreTransform(t),null!=i.text&&this.drawRectText(t,this.getBoundingRect())},buildPath:function(t,e,i){},createPathProxy:function(){this.path=new P_},getBoundingRect:function(){var t=this._rect,e=this.style,i=!t;if(i){var n=this.path;n||(n=this.path=new P_),this.__dirtyPath&&(n.beginPath(),this.buildPath(n,this.shape,!1)),t=n.getBoundingRect()}if(this._rect=t,e.hasStroke()){var o=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||i){o.copy(t);var a=e.lineWidth,r=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(a=Math.max(a,this.strokeContainThreshold||4)),r>1e-10&&(o.width+=a/r,o.height+=a/r,o.x-=a/r/2,o.y-=a/r/2)}return o}return t},contain:function(t,e){var i=this.transformCoordToLocal(t,e),n=this.getBoundingRect(),o=this.style;if(t=i[0],e=i[1],n.contain(t,e)){var a=this.path.data;if(o.hasStroke()){var r=o.lineWidth,s=o.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(o.hasFill()||(r=Math.max(r,this.strokeContainThreshold)),zn(a,r/s,t,e)))return!0}if(o.hasFill())return On(a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):je.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var i=this.shape;if(i){if(b(t))for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);else i[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&W_(t[0]-1)>1e-10&&W_(t[3]-1)>1e-10?Math.sqrt(W_(t[0]*t[3]-t[2]*t[1])):1}},Nn.extend=function(t){var e=function(e){Nn.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var i=t.shape;if(i){this.shape=this.shape||{};var n=this.shape;for(var o in i)!n.hasOwnProperty(o)&&i.hasOwnProperty(o)&&(n[o]=i[o])}t.init&&t.init.call(this,e)};h(e,Nn);for(var i in t)"style"!==i&&"shape"!==i&&(e.prototype[i]=t[i]);return e},h(Nn,je);var F_=P_.CMD,Z_=[[],[],[]],U_=Math.sqrt,X_=Math.atan2,j_=function(t,e){var i,n,o,a,r,s,l=t.data,h=F_.M,u=F_.C,c=F_.L,d=F_.R,f=F_.A,p=F_.Q;for(o=0,a=0;o<l.length;){switch(i=l[o++],a=o,n=0,i){case h:case c:n=1;break;case u:n=3;break;case p:n=2;break;case f:var g=e[4],m=e[5],v=U_(e[0]*e[0]+e[1]*e[1]),y=U_(e[2]*e[2]+e[3]*e[3]),x=X_(-e[1]/y,e[0]/v);l[o]*=v,l[o++]+=g,l[o]*=y,l[o++]+=m,l[o++]*=v,l[o++]*=y,l[o++]+=x,l[o++]+=x,a=o+=2;break;case d:s[0]=l[o++],s[1]=l[o++],$(s,s,e),l[a++]=s[0],l[a++]=s[1],s[0]+=l[o++],s[1]+=l[o++],$(s,s,e),l[a++]=s[0],l[a++]=s[1]}for(r=0;r<n;r++)(s=Z_[r])[0]=l[o++],s[1]=l[o++],$(s,s,e),l[a++]=s[0],l[a++]=s[1]}},q_=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],Y_=Math.sqrt,$_=Math.sin,K_=Math.cos,J_=Math.PI,Q_=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},tb=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(Q_(t)*Q_(e))},eb=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(tb(t,e))},ib=function(t){je.call(this,t)};ib.prototype={constructor:ib,type:"text",brush:function(t,e){var i=this.style;this.__dirty&&De(i),i.fill=i.stroke=i.shadowBlur=i.shadowColor=i.shadowOffsetX=i.shadowOffsetY=null;var n=i.text;null!=n&&(n+=""),i.bind(t,this,e),Xe(n,i)&&(this.setTransform(t),ke(this,t,n,i),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&De(t),!this._rect){var e=t.text;null!=e?e+="":e="";var i=de(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(i.x+=t.x||0,i.y+=t.y||0,He(t.textStroke,t.textStrokeWidth)){var n=t.textStrokeWidth;i.x-=n/2,i.y-=n/2,i.width+=n,i.height+=n}this._rect=i}return this._rect}},h(ib,je);var nb=Nn.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,i){i&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),ob=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],ab=function(t){return Uv.browser.ie&&Uv.browser.version>=11?function(){var e,i=this.__clipPaths,n=this.style;if(i)for(var o=0;o<i.length;o++){var a=i[o],r=a&&a.shape,s=a&&a.type;if(r&&("sector"===s&&r.startAngle===r.endAngle||"rect"===s&&(!r.width||!r.height))){for(l=0;l<ob.length;l++)ob[l][2]=n[ob[l][0]],n[ob[l][0]]=ob[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<ob.length;l++)n[ob[l][0]]=ob[l][2]}:t},rb=Nn.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:ab(Nn.prototype.brush),buildPath:function(t,e){var i=e.cx,n=e.cy,o=Math.max(e.r0||0,0),a=Math.max(e.r,0),r=e.startAngle,s=e.endAngle,l=e.clockwise,h=Math.cos(r),u=Math.sin(r);t.moveTo(h*o+i,u*o+n),t.lineTo(h*a+i,u*a+n),t.arc(i,n,a,r,s,!l),t.lineTo(Math.cos(s)*o+i,Math.sin(s)*o+n),0!==o&&t.arc(i,n,o,s,r,l),t.closePath()}}),sb=Nn.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var i=e.cx,n=e.cy,o=2*Math.PI;t.moveTo(i+e.r,n),t.arc(i,n,e.r,0,o,!1),t.moveTo(i+e.r0,n),t.arc(i,n,e.r0,0,o,!0)}}),lb=function(t,e){for(var i=t.length,n=[],o=0,a=1;a<i;a++)o+=j(t[a-1],t[a]);var r=o/2;r=r<i?i:r;for(a=0;a<r;a++){var s,l,h,u=a/(r-1)*(e?i:i-1),c=Math.floor(u),d=u-c,f=t[c%i];e?(s=t[(c-1+i)%i],l=t[(c+1)%i],h=t[(c+2)%i]):(s=t[0===c?c:c-1],l=t[c>i-2?i-1:c+1],h=t[c>i-3?i-1:c+2]);var p=d*d,g=d*p;n.push([Wn(s[0],f[0],l[0],h[0],d,p,g),Wn(s[1],f[1],l[1],h[1],d,p,g)])}return n},hb=function(t,e,i,n){var o,a,r,s,l=[],h=[],u=[],c=[];if(n){r=[1/0,1/0],s=[-1/0,-1/0];for(var d=0,f=t.length;d<f;d++)K(r,r,t[d]),J(s,s,t[d]);K(r,r,n[0]),J(s,s,n[1])}for(var d=0,f=t.length;d<f;d++){var p=t[d];if(i)o=t[d?d-1:f-1],a=t[(d+1)%f];else{if(0===d||d===f-1){l.push(V(t[d]));continue}o=t[d-1],a=t[d+1]}H(h,a,o),U(h,h,e);var g=j(p,o),m=j(p,a),v=g+m;0!==v&&(g/=v,m/=v),U(u,h,-g),U(c,h,m);var y=G([],p,u),x=G([],p,c);n&&(J(y,y,r),K(y,y,s),J(x,x,r),K(x,x,s)),l.push(y),l.push(x)}return i&&l.push(l.shift()),l},ub=Nn.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){Hn(t,e,!0)}}),cb=Nn.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){Hn(t,e,!1)}}),db=Nn.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.x,n=e.y,o=e.width,a=e.height;e.r?Ce(t,e):t.rect(i,n,o,a),t.closePath()}}),fb=Nn.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.x1,n=e.y1,o=e.x2,a=e.y2,r=e.percent;0!==r&&(t.moveTo(i,n),r<1&&(o=i*(1-r)+o*r,a=n*(1-r)+a*r),t.lineTo(o,a))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),pb=[],gb=Nn.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.x1,n=e.y1,o=e.x2,a=e.y2,r=e.cpx1,s=e.cpy1,l=e.cpx2,h=e.cpy2,u=e.percent;0!==u&&(t.moveTo(i,n),null==l||null==h?(u<1&&(pn(i,r,o,u,pb),r=pb[1],o=pb[2],pn(n,s,a,u,pb),s=pb[1],a=pb[2]),t.quadraticCurveTo(r,s,o,a)):(u<1&&(ln(i,r,l,o,u,pb),r=pb[1],l=pb[2],o=pb[3],ln(n,s,h,a,u,pb),s=pb[1],h=pb[2],a=pb[3]),t.bezierCurveTo(r,s,l,h,o,a)))},pointAt:function(t){return Fn(this.shape,t,!1)},tangentAt:function(t){var e=Fn(this.shape,t,!0);return X(e,e)}}),mb=Nn.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.cx,n=e.cy,o=Math.max(e.r,0),a=e.startAngle,r=e.endAngle,s=e.clockwise,l=Math.cos(a),h=Math.sin(a);t.moveTo(l*o+i,h*o+n),t.arc(i,n,o,a,r,!s)}}),vb=Nn.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,i=0;i<e.length;i++)t=t||e[i].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),i=0;i<t.length;i++)t[i].path||t[i].createPathProxy(),t[i].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var i=e.paths||[],n=0;n<i.length;n++)i[n].buildPath(t,i[n].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),Nn.prototype.getBoundingRect.call(this)}}),yb=function(t){this.colorStops=t||[]};yb.prototype={constructor:yb,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var xb=function(t,e,i,n,o,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==i?1:i,this.y2=null==n?0:n,this.type="linear",this.global=a||!1,yb.call(this,o)};xb.prototype={constructor:xb},h(xb,yb);var _b=function(t,e,i,n,o){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==i?.5:i,this.type="radial",this.global=o||!1,yb.call(this,n)};_b.prototype={constructor:_b},h(_b,yb);var bb=Math.round,wb=Math.max,Sb=Math.min,Mb={},Ib=function(t,e){for(var i=[],n=t.length,o=0;o<n;o++){var a=t[o];a.path||a.createPathProxy(),a.__dirtyPath&&a.buildPath(a.path,a.shape,!0),i.push(a.path)}var r=new Nn(e);return r.createPathProxy(),r.buildPath=function(t){t.appendPath(i);var e=t.getContext();e&&t.rebuildPath(e)},r},Tb=(Object.freeze||Object)({extendShape:Zn,extendPath:function(t,e){return Gn(t,e)},makePath:Un,makeImage:Xn,mergePath:Ib,resizePath:qn,subPixelOptimizeLine:Yn,subPixelOptimizeRect:$n,subPixelOptimize:Kn,setHoverStyle:uo,setLabelStyle:co,setTextStyle:fo,setText:function(t,e,i){var n,o={isRectText:!0};!1===i?n=!0:o.autoColor=i,po(t,e,o,n),t.host&&t.host.dirty&&t.host.dirty(!1)},getFont:_o,updateProps:wo,initProps:So,getTransform:Mo,applyTransform:Io,transformDirection:To,groupTransition:Ao,clipPointsByRect:Co,clipRectByRect:function(t,e){var i=wb(t.x,e.x),n=Sb(t.x+t.width,e.x+e.width),o=wb(t.y,e.y),a=Sb(t.y+t.height,e.y+e.height);if(n>=i&&a>=o)return{x:i,y:o,width:n-i,height:a-o}},createIcon:Do,Group:jy,Image:qe,Text:ib,Circle:nb,Sector:rb,Ring:sb,Polygon:ub,Polyline:cb,Rect:db,Line:fb,BezierCurve:gb,Arc:mb,CompoundPath:vb,LinearGradient:xb,RadialGradient:_b,BoundingRect:jt}),Ab=["textStyle","color"],Cb={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(Ab):null)},getFont:function(){return _o({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return de(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},Db=$x([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),Lb={getItemStyle:function(t,e){var i=Db(this,t,e),n=this.getBorderLineDash();return n&&(i.lineDash=n),i},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},kb=u;Lo.prototype={constructor:Lo,init:null,mergeOption:function(t){n(this.option,t,!0)},get:function(t,e){return null==t?this.option:ko(this.option,this.parsePath(t),!e&&Po(this,t))},getShallow:function(t,e){var i=this.option,n=null==i?i:i[t],o=!e&&Po(this,t);return null==n&&o&&(n=o.getShallow(t)),n},getModel:function(t,e){var i,n=null==t?this.option:ko(this.option,t=this.parsePath(t));return e=e||(i=Po(this,t))&&i.getModel(t),new Lo(n,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(i(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){Xi(this,"getParent",t)},isAnimationEnabled:function(){if(!Uv.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Ki(Lo),kb(Lo,Jx),kb(Lo,t_),kb(Lo,Cb),kb(Lo,Lb);var Pb=d,Ob=b,zb=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],Nb={getDataParams:function(t,e){var i=this.getData(e),n=this.getRawValue(t,e),o=i.getRawIndex(t),a=i.getName(t,!0),r=i.getRawDataItem(t),s=i.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:a,dataIndex:o,data:r,dataType:e,value:n,color:s,marker:Fi(s),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,i,n,o){e=e||"normal";var a=this.getData(i).getItemModel(t),r=this.getDataParams(t,i);null!=n&&r.value instanceof Array&&(r.value=r.value[n]);var s=a.get([o||"label",e,"formatter"]);return"function"==typeof s?(r.status=e,s(r)):"string"==typeof s?Wi(s,r):void 0},getRawValue:function(t,e){var i=this.getData(e).getRawDataItem(t);if(null!=i)return!Ob(i)||i instanceof Array?i:i.value},formatTooltip:N},Eb=function(){var t=0;return function(){var e="\0__ec_prop_getter_"+t++;return function(t){return t[e]||(t[e]={})}}}(),Rb=0,Vb="_",Bb=d,Gb=["left","right","top","bottom","width","height"],Wb=[["width","left","right"],["height","top","bottom"]],Hb=Yo,Fb=(v(Yo,"vertical"),v(Yo,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),Zb=Array.prototype.push,Ub=Lo.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,i,n){Lo.call(this,t,e,i,n),this.uid=qo("componentModel")},init:function(t,e,i,n){this.mergeDefaultAndTheme(t,i)},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,o=i?ea(t):{};n(t,e.getTheme().get(this.mainType)),n(t,this.getDefaultOption()),i&&ta(t,o,i)},mergeOption:function(t,e){n(this.option,t,!0);var i=this.layoutMode;i&&ta(this.option,t,i)},optionUpdated:function(t,e){},getDefaultOption:function(){if(!qi(this,"__defaultOption")){for(var t=[],e=this.constructor;e;){var i=e.prototype.defaultOption;i&&t.push(i),e=e.superClass}for(var o={},a=t.length-1;a>=0;a--)o=n(o,t[a],!0);Xi(this,"__defaultOption",o)}return ji(this,"__defaultOption")},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});tn(Ub,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,i){t=Yi(t),e[t.main]=i},t.determineSubType=function(i,n){var o=n.type;if(!o){var a=Yi(i).main;t.hasSubTypes(i)&&e[a]&&(o=e[a](n))}return o}}(Ub),function(t,e){function i(t){var i={},a=[];return d(t,function(r){var s=n(i,r),h=o(s.originalDeps=e(r),t);s.entryCount=h.length,0===s.entryCount&&a.push(r),d(h,function(t){l(s.predecessor,t)<0&&s.predecessor.push(t);var e=n(i,t);l(e.successor,t)<0&&e.successor.push(r)})}),{graph:i,noEntryList:a}}function n(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function o(t,e){var i=[];return d(t,function(t){l(e,t)>=0&&i.push(t)}),i}t.topologicalTravel=function(t,e,n,o){function a(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var r=i(e),s=r.graph,l=r.noEntryList,h={};for(d(t,function(t){h[t]=!0});l.length;){var u=l.pop(),c=s[u],f=!!h[u];f&&(n.call(o,u,c.originalDeps.slice()),delete h[u]),d(c.successor,f?function(t){h[t]=!0,a(t)}:a)}d(h,function(){throw new Error("Circle dependency may exists")})}}}(Ub,function(t){var e=[];return d(Ub.getClassesByMainType(t),function(t){Zb.apply(e,t.prototype.dependencies||[])}),f(e,function(t){return Yi(t).main})}),u(Ub,Fb);var Xb="";"undefined"!=typeof navigator&&(Xb=navigator.platform||"");var jb={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],textStyle:{fontFamily:Xb.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},qb={clearColorPalette:function(){Xi(this,"colorIdx",0),Xi(this,"colorNameMap",{})},getColorFromPalette:function(t,e){var i=ji(e=e||this,"colorIdx")||0,n=ji(e,"colorNameMap")||Xi(e,"colorNameMap",{});if(n.hasOwnProperty(t))return n[t];var o=this.get("color",!0)||[];if(o.length){var a=o[i];return t&&(n[t]=a),Xi(e,"colorIdx",(i+1)%o.length),a}}},Yb=d,$b=g,Kb=f,Jb=y,Qb=l,tw=b,ew="\0_ec_inner",iw=Lo.extend({constructor:iw,init:function(t,e,i,n){i=i||{},this.option=null,this._theme=new Lo(i),this._optionManager=n},setOption:function(t,e){L(!(ew in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,i=this._optionManager;if(!t||"recreate"===t){var n=i.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(n)):oa.call(this,n),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var o=i.getTimelineOption(this);o&&(this.mergeOption(o),e=!0)}if(!t||"recreate"===t||"media"===t){var a=i.getMediaOption(this,this._api);a.length&&Yb(a,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,o=this._componentsMap,r=[];Yb(t,function(t,o){null!=t&&(Ub.hasClass(o)?r.push(o):e[o]=null==e[o]?i(t):n(e[o],t,!0))}),Ub.topologicalTravel(r,Ub.getAllClassMainTypes(),function(i,n){var r=Oo(t[i]),s=Vo(o.get(i),r);Bo(s),Yb(s,function(t,e){var n=t.option;tw(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=ra(i,n,t.exist))});var l=aa(o,n);e[i]=[],o.set(i,[]),Yb(s,function(t,n){var r=t.exist,s=t.option;if(L(tw(s)||r,"Empty component definition"),s){var h=Ub.getClass(i,t.keyInfo.subType,!0);if(r&&r instanceof h)r.name=t.keyInfo.name,r.mergeOption(s,this),r.optionUpdated(s,!1);else{var u=a({dependentModels:l,componentIndex:n},t.keyInfo);a(r=new h(s,this,this,u),u),r.init(s,this,this,u),r.optionUpdated(null,!0)}}else r.mergeOption({},this),r.optionUpdated({},!1);o.get(i)[n]=r,e[i][n]=r.option},this),"series"===i&&(this._seriesIndices=sa(o.get("series")))},this),this._seriesIndices=this._seriesIndices||[]},getOption:function(){var t=i(this.option);return Yb(t,function(e,i){if(Ub.hasClass(i)){for(var n=(e=Oo(e)).length-1;n>=0;n--)Go(e[n])&&e.splice(n,1);t[i]=e}}),delete t[ew],t},getTheme:function(){return this._theme},getComponent:function(t,e){var i=this._componentsMap.get(t);if(i)return i[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var i=t.index,n=t.id,o=t.name,a=this._componentsMap.get(e);if(!a||!a.length)return[];var r;if(null!=i)Jb(i)||(i=[i]),r=$b(Kb(i,function(t){return a[t]}),function(t){return!!t});else if(null!=n){var s=Jb(n);r=$b(a,function(t){return s&&Qb(n,t.id)>=0||!s&&t.id===n})}else if(null!=o){var l=Jb(o);r=$b(a,function(t){return l&&Qb(o,t.name)>=0||!l&&t.name===o})}else r=a.slice();return la(r,t)},findComponents:function(t){var e=t.query,i=t.mainType,n=function(t){var e=i+"Index",n=i+"Id",o=i+"Name";return!t||null==t[e]&&null==t[n]&&null==t[o]?null:{mainType:i,index:t[e],id:t[n],name:t[o]}}(e);return function(e){return t.filter?$b(e,t.filter):e}(la(n?this.queryComponents(n):this._componentsMap.get(i),t))},eachComponent:function(t,e,i){var n=this._componentsMap;if("function"==typeof t)i=e,e=t,n.each(function(t,n){Yb(t,function(t,o){e.call(i,n,t,o)})});else if(_(t))Yb(n.get(t),e,i);else if(tw(t)){var o=this.findComponents(t);Yb(o,e,i)}},getSeriesByName:function(t){var e=this._componentsMap.get("series");return $b(e,function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){var e=this._componentsMap.get("series");return $b(e,function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},eachSeries:function(t,e){Yb(this._seriesIndices,function(i){var n=this._componentsMap.get("series")[i];t.call(e,n,i)},this)},eachRawSeries:function(t,e){Yb(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,i){Yb(this._seriesIndices,function(n){var o=this._componentsMap.get("series")[n];o.subType===t&&e.call(i,o,n)},this)},eachRawSeriesByType:function(t,e,i){return Yb(this.getSeriesByType(t),e,i)},isSeriesFiltered:function(t){return l(this._seriesIndices,t.componentIndex)<0},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){var i=$b(this._componentsMap.get("series"),t,e);this._seriesIndices=sa(i)},restoreData:function(){var t=this._componentsMap;this._seriesIndices=sa(t.get("series"));var e=[];t.each(function(t,i){e.push(i)}),Ub.topologicalTravel(e,Ub.getAllClassMainTypes(),function(e,i){Yb(t.get(e),function(t){t.restoreData()})})}});u(iw,qb);var nw=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],ow={};ua.prototype={constructor:ua,create:function(t,e){var i=[];d(ow,function(n,o){var a=n.create(t,e);i=i.concat(a||[])}),this._coordinateSystems=i},update:function(t,e){d(this._coordinateSystems,function(i){i.update&&i.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},ua.register=function(t,e){ow[t]=e},ua.get=function(t){return ow[t]};var aw=d,rw=i,sw=f,lw=n,hw=/^(min|max)?(.+)$/;ca.prototype={constructor:ca,setOption:function(t,e){t=rw(t,!0);var i=this._optionBackup,n=da.call(this,t,e,!i);this._newBaseOption=n.baseOption,i?(ma(i.baseOption,n.baseOption),n.timelineOptions.length&&(i.timelineOptions=n.timelineOptions),n.mediaList.length&&(i.mediaList=n.mediaList),n.mediaDefault&&(i.mediaDefault=n.mediaDefault)):this._optionBackup=n},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=sw(e.timelineOptions,rw),this._mediaList=sw(e.mediaList,rw),this._mediaDefault=rw(e.mediaDefault),this._currentMediaIndices=[],rw(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,i=this._timelineOptions;if(i.length){var n=t.getComponent("timeline");n&&(e=rw(i[n.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),i=this._api.getHeight(),n=this._mediaList,o=this._mediaDefault,a=[],r=[];if(!n.length&&!o)return r;for(var s=0,l=n.length;s<l;s++)fa(n[s].query,e,i)&&a.push(s);return!a.length&&o&&(a=[-1]),a.length&&!ga(a,this._currentMediaIndices)&&(r=sw(a,function(t){return rw(-1===t?o.option:n[t].option)})),this._currentMediaIndices=a,r}};var uw=d,cw=b,dw=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],fw=function(t,e){uw(ba(t.series),function(t){cw(t)&&_a(t)});var i=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&i.push("valueAxis","categoryAxis","logAxis","timeAxis"),uw(i,function(e){uw(ba(t[e]),function(t){t&&(ya(t,"axisLabel"),ya(t.axisPointer,"label"))})}),uw(ba(t.parallel),function(t){var e=t&&t.parallelAxisDefault;ya(e,"axisLabel"),ya(e&&e.axisPointer,"label")}),uw(ba(t.calendar),function(t){ya(t,"dayLabel"),ya(t,"monthLabel"),ya(t,"yearLabel")}),uw(ba(t.radar),function(t){ya(t,"name")}),uw(ba(t.geo),function(t){cw(t)&&(xa(t.label),uw(ba(t.regions),function(t){xa(t.label)}))}),xa(wa(t.timeline).label),ya(wa(t.axisPointer),"label"),ya(wa(t.tooltip).axisPointer,"label")},pw=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],gw=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],mw=["bar","boxplot","candlestick","chord","effectScatter","funnel","gauge","lines","graph","heatmap","line","map","parallel","pie","radar","sankey","scatter","treemap"],vw=function(t,e){fw(t,e),t.series=Oo(t.series),d(t.series,function(t){if(b(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var i=Sa(t,"pointer.color");null!=i&&Ma(t,"itemStyle.normal.color",i)}for(var n=0;n<mw.length;n++)if(mw[n]===t.type){Ia(t);break}}}),t.dataRange&&(t.visualMap=t.dataRange),d(gw,function(e){var i=t[e];i&&(y(i)||(i=[i]),d(i,function(t){Ia(t)}))})},yw=Ub.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.normal.color",layoutMode:null,init:function(t,e,i,n){this.seriesIndex=this.componentIndex,this.mergeDefaultAndTheme(t,i),Xi(this,"dataBeforeProcessed",this.getInitialData(t,i)),this.restoreData()},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,o=i?ea(t):{},a=this.subType;Ub.hasClass(a)&&(a+="Series"),n(t,e.getTheme().get(this.subType)),n(t,this.getDefaultOption()),zo(t.label,["show"]),this.fillDataTextStyle(t.data),i&&ta(t,o,i)},mergeOption:function(t,e){t=n(this.option,t,!0),this.fillDataTextStyle(t.data);var i=this.layoutMode;i&&ta(this.option,t,i);var o=this.getInitialData(t,e);o&&(Xi(this,"data",o),Xi(this,"dataBeforeProcessed",o.cloneShallow()))},fillDataTextStyle:function(t){if(t)for(var e=["show"],i=0;i<t.length;i++)t[i]&&t[i].label&&zo(t[i].label,e)},getInitialData:function(){},getData:function(t){var e=ji(this,"data");return null==t?e:e.getLinkedData(t)},setData:function(t){Xi(this,"data",t)},getRawData:function(){return ji(this,"dataBeforeProcessed")},coordDimToDataDim:function(t){return Uo(this.getData(),t)},dataDimToCoordDim:function(t){return Zo(this.getData(),t)},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,i){var n=ji(this,"data"),o=this.getRawValue(t),a=y(o)?function(i){function o(t,i){var o=n.getDimensionInfo(i);if(o&&!1!==o.otherDims.tooltip){var s=o.type,l=(a?"- "+(o.tooltipName||o.name)+": ":"")+("ordinal"===s?t+"":"time"===s?e?"":Zi("yyyy/MM/dd hh:mm:ss",t):Vi(t));l&&r.push(Gi(l))}}var a=p(i,function(t,e,i){var o=n.getDimensionInfo(i);return t|=o&&!1!==o.tooltip&&null!=o.tooltipName},0),r=[],s=Xo(n,"tooltip");return s.length?d(s,function(e){o(n.get(e,t),e)}):d(i,o),(a?"<br/>":"")+r.join(a?"<br/>":", ")}(o):Gi(Vi(o)),r=n.getName(t),s=n.getItemVisual(t,"color");b(s)&&s.colorStops&&(s=(s.colorStops[0]||{}).color);var l=Fi(s=s||"transparent"),h=this.name;return"\0-"===h&&(h=""),h=h?Gi(h)+(e?": ":"<br/>"):"",e?l+h+a:h+l+(r?Gi(r)+": "+a:a)},isAnimationEnabled:function(){if(Uv.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){Xi(this,"data",ji(this,"dataBeforeProcessed").cloneShallow())},getColorFromPalette:function(t,e){var i=this.ecModel,n=qb.getColorFromPalette.call(this,t,e);return n||(n=i.getColorFromPalette(t,e)),n},getAxisTooltipData:null,getTooltipPosition:null});u(yw,Nb),u(yw,qb);var xw=function(){this.group=new jy,this.uid=qo("viewComponent")};xw.prototype={constructor:xw,init:function(t,e){},render:function(t,e,i,n){},dispose:function(){}};var _w=xw.prototype;_w.updateView=_w.updateLayout=_w.updateVisual=function(t,e,i,n){},Ki(xw),tn(xw,{registerWhenExtend:!0}),Ta.prototype={type:"chart",init:function(t,e){},render:function(t,e,i,n){},highlight:function(t,e,i,n){Ca(t.getData(),n,"emphasis")},downplay:function(t,e,i,n){Ca(t.getData(),n,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){}};var bw=Ta.prototype;bw.updateView=bw.updateLayout=bw.updateVisual=function(t,e,i,n){this.render(t,e,i,n)},Ki(Ta),tn(Ta,{registerWhenExtend:!0});var ww="\0__throttleOriginMethod",Sw="\0__throttleRate",Mw="\0__throttleType",Iw=Math.PI,Tw=d,Aw=Ub.parseClassType,Cw={zrender:"3.7.4"},Dw=1e3,Lw=1e3,kw=3e3,Pw={PROCESSOR:{FILTER:Dw,STATISTIC:5e3},VISUAL:{LAYOUT:Lw,GLOBAL:2e3,CHART:kw,COMPONENT:4e3,BRUSH:5e3}},Ow="__flagInMainProcess",zw="__optionUpdated",Nw=/^[a-zA-Z0-9_]+$/;Oa.prototype.on=Pa("on"),Oa.prototype.off=Pa("off"),Oa.prototype.one=Pa("one"),u(Oa,fy);var Ew=za.prototype;Ew._onframe=function(){if(this[zw]){var t=this[zw].silent;this[Ow]=!0,Rw.prepareAndUpdate.call(this),this[Ow]=!1,this[zw]=!1,Va.call(this,t),Ba.call(this,t)}},Ew.getDom=function(){return this._dom},Ew.getZr=function(){return this._zr},Ew.setOption=function(t,e,i){var n;if(b(e)&&(i=e.lazyUpdate,n=e.silent,e=e.notMerge),this[Ow]=!0,!this._model||e){var o=new ca(this._api),a=this._theme;(this._model=new iw(null,null,a,o)).init(null,null,a,o)}this._model.setOption(t,Hw),i?(this[zw]={silent:n},this[Ow]=!1):(Rw.prepareAndUpdate.call(this),this._zr.flush(),this[zw]=!1,this[Ow]=!1,Va.call(this,n),Ba.call(this,n))},Ew.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},Ew.getModel=function(){return this._model},Ew.getOption=function(){return this._model&&this._model.getOption()},Ew.getWidth=function(){return this._zr.getWidth()},Ew.getHeight=function(){return this._zr.getHeight()},Ew.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1},Ew.getRenderedCanvas=function(t){if(Uv.canvasSupported){(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor");var e=this._zr;return d(e.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),e.painter.getRenderedCanvas(t)}},Ew.getSvgDataUrl=function(){if(Uv.svgSupported){var t=this._zr;return d(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToSvg()}},Ew.getDataURL=function(t){var e=(t=t||{}).excludeComponents,i=this._model,n=[],o=this;Tw(e,function(t){i.eachComponent({mainType:t},function(t){var e=o._componentsMap[t.__viewId];e.group.ignore||(n.push(e),e.group.ignore=!0)})});var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return Tw(n,function(t){t.group.ignore=!1}),a},Ew.getConnectedDataURL=function(t){if(Uv.canvasSupported){var e=this.group,n=Math.min,o=Math.max;if(qw[e]){var a=1/0,r=1/0,s=-1/0,l=-1/0,h=[],u=t&&t.pixelRatio||1;d(jw,function(u,c){if(u.group===e){var d=u.getRenderedCanvas(i(t)),f=u.getDom().getBoundingClientRect();a=n(f.left,a),r=n(f.top,r),s=o(f.right,s),l=o(f.bottom,l),h.push({dom:d,left:f.left,top:f.top})}});var c=(s*=u)-(a*=u),f=(l*=u)-(r*=u),p=iy();p.width=c,p.height=f;var g=yi(p);return Tw(h,function(t){var e=new qe({style:{x:t.left*u-a,y:t.top*u-r,image:t.dom}});g.add(e)}),g.refreshImmediately(),p.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},Ew.convertToPixel=v(Na,"convertToPixel"),Ew.convertFromPixel=v(Na,"convertFromPixel"),Ew.containPixel=function(t,e){var i;return t=Fo(this._model,t),d(t,function(t,n){n.indexOf("Models")>=0&&d(t,function(t){var o=t.coordinateSystem;if(o&&o.containPoint)i|=!!o.containPoint(e);else if("seriesModels"===n){var a=this._chartsMap[t.__viewId];a&&a.containPoint&&(i|=a.containPoint(e,t))}},this)},this),!!i},Ew.getVisual=function(t,e){var i=(t=Fo(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),n=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?i.indexOfRawIndex(t.dataIndex):null;return null!=n?i.getItemVisual(n,e):i.getVisual(e)},Ew.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},Ew.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var Rw={update:function(t){var e=this._model,i=this._api,n=this._coordSysMgr,o=this._zr;if(e){e.restoreData(),n.create(this._model,this._api),Ha.call(this,e,i),Fa.call(this,e),n.update(e,i),Ua.call(this,e,t),Xa.call(this,e,t);var a=e.get("backgroundColor")||"transparent",r=o.painter;if(r.isSingleCanvas&&r.isSingleCanvas())o.configLayer(0,{clearColor:a});else{if(!Uv.canvasSupported){var s=Mt(a);a=Ot(s,"rgb"),0===s[3]&&(a="transparent")}a.colorStops||a.image?(o.configLayer(0,{clearColor:a}),this.__hasGradientOrPatternBg=!0,this._dom.style.background="transparent"):(this.__hasGradientOrPatternBg&&o.configLayer(0,{clearColor:null}),this.__hasGradientOrPatternBg=!1,this._dom.style.background=a)}Tw(Fw,function(t){t(e,i)})}},updateView:function(t){var e=this._model;e&&(e.eachSeries(function(t){t.getData().clearAllVisual()}),Ua.call(this,e,t),Ga.call(this,"updateView",e,t))},updateVisual:function(t){var e=this._model;e&&(e.eachSeries(function(t){t.getData().clearAllVisual()}),Ua.call(this,e,t,!0),Ga.call(this,"updateVisual",e,t))},updateLayout:function(t){var e=this._model;e&&(Za.call(this,e,t),Ga.call(this,"updateLayout",e,t))},prepareAndUpdate:function(t){var e=this._model;Wa.call(this,"component",e),Wa.call(this,"chart",e),Rw.update.call(this,t)}};Ew.resize=function(t){this[Ow]=!0,this._zr.resize(t);var e=this._model&&this._model.resetOption("media");Rw[e?"prepareAndUpdate":"update"].call(this),this._loadingFX&&this._loadingFX.resize(),this[Ow]=!1;var i=t&&t.silent;Va.call(this,i),Ba.call(this,i)},Ew.showLoading=function(t,e){if(b(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),Xw[t]){var i=Xw[t](this._api,e),n=this._zr;this._loadingFX=i,n.add(i)}},Ew.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},Ew.makeActionFromEvent=function(t){var e=a({},t);return e.type=Gw[t.type],e},Ew.dispatchAction=function(t,e){b(e)||(e={silent:!!e}),Bw[t.type]&&this._model&&(this[Ow]?this._pendingActions.push(t):(Ra.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&Uv.browser.weChat&&this._throttledZrFlush(),Va.call(this,e.silent),Ba.call(this,e.silent)))},Ew.on=Pa("on"),Ew.off=Pa("off"),Ew.one=Pa("one");var Vw=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];Ew._initEvents=function(){Tw(Vw,function(t){this._zr.on(t,function(e){var i,n=this.getModel(),o=e.target;if("globalout"===t)i={};else if(o&&null!=o.dataIndex){var r=o.dataModel||n.getSeriesByIndex(o.seriesIndex);i=r&&r.getDataParams(o.dataIndex,o.dataType)||{}}else o&&o.eventData&&(i=a({},o.eventData));i&&(i.event=e,i.type=t,this.trigger(t,i))},this)},this),Tw(Gw,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},Ew.isDisposed=function(){return this._disposed},Ew.clear=function(){this.setOption({series:[]},!0)},Ew.dispose=function(){if(!this._disposed){this._disposed=!0;var t=this._api,e=this._model;Tw(this._componentsViews,function(i){i.dispose(e,t)}),Tw(this._chartsViews,function(i){i.dispose(e,t)}),this._zr.dispose(),delete jw[this.id]}},u(za,fy);var Bw={},Gw={},Ww=[],Hw=[],Fw=[],Zw=[],Uw={},Xw={},jw={},qw={},Yw=new Date-0,$w=new Date-0,Kw="_echarts_instance_",Jw={},Qw=Ja;ar(2e3,function(t){t.eachRawSeries(function(e){var i=(e.visualColorAccessPath||"itemStyle.normal.color").split("."),n=e.getData(),o=e.get(i)||e.getColorFromPalette(e.get("name"));n.setVisual("color",o),t.isSeriesFiltered(e)||("function"!=typeof o||o instanceof yb||n.each(function(t){n.setItemVisual(t,"color",o(e.getDataParams(t)))}),n.each(function(t){var e=n.getItemModel(t).get(i,!0);null!=e&&n.setItemVisual(t,"color",e)}))})}),tr(vw),rr("default",function(t,e){r(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var i=new db({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),n=new mb({shape:{startAngle:-Iw/2,endAngle:-Iw/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),o=new db({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});n.animateShape(!0).when(1e3,{endAngle:3*Iw/2}).start("circularInOut"),n.animateShape(!0).when(1e3,{startAngle:3*Iw/2}).delay(300).start("circularInOut");var a=new jy;return a.add(n),a.add(o),a.add(i),a.resize=function(){var e=t.getWidth()/2,a=t.getHeight()/2;n.setShape({cx:e,cy:a});var r=n.shape.r;o.setShape({x:e-r,y:a-r,width:2*r,height:2*r}),i.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},a.resize(),a}),ir({type:"highlight",event:"highlight",update:"highlight"},N),ir({type:"downplay",event:"downplay",update:"downplay"},N);var tS={};fr.prototype={constructor:fr,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,i={},n=[],o=[];for(pr(t,{},n,"_oldKeyGetter",this),pr(e,i,o,"_newKeyGetter",this),a=0;a<t.length;a++)null!=(s=i[r=n[a]])?((h=s.length)?(1===h&&(i[r]=null),s=s.unshift()):i[r]=null,this._update&&this._update(s,a)):this._remove&&this._remove(a);for(var a=0;a<o.length;a++){var r=o[a];if(i.hasOwnProperty(r)){var s=i[r];if(null==s)continue;if(s.length)for(var l=0,h=s.length;l<h;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var eS=b,iS="undefined"==typeof window?global:window,nS={float:void 0===iS.Float64Array?Array:iS.Float64Array,int:void 0===iS.Int32Array?Array:iS.Int32Array,ordinal:Array,number:Array,time:Array},oS=["stackedOn","hasItemOption","_nameList","_idList","_rawData"];mr.prototype.pure=!1,mr.prototype.count=function(){return this._array.length},mr.prototype.getItem=function(t){return this._array[t]};var aS=function(t,e){t=t||["x","y"];for(var i={},n=[],o=0;o<t.length;o++){var a,r={};"string"==typeof t[o]?r={name:a=t[o],coordDim:a,coordDimIndex:0,stackable:!1,type:"number"}:(a=(r=t[o]).name,r.type=r.type||"number",r.coordDim||(r.coordDim=a,r.coordDimIndex=0)),r.otherDims=r.otherDims||{},n.push(a),i[a]=r}this.dimensions=n,this._dimensionInfos=i,this.hostModel=e,this.dataType,this.indices=[],this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this.stackedOn=null,this._visual={},this._layout={},this._itemVisuals=[],this._itemLayouts=[],this._graphicEls=[],this._rawData,this._extent},rS=aS.prototype;rS.type="list",rS.hasItemOption=!0,rS.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},rS.getDimensionInfo=function(t){return i(this._dimensionInfos[this.getDimension(t)])},rS.initData=function(t,e,i){y(t=t||[])&&(t=new mr(t)),this._rawData=t;var n,o=this._storage={},a=this.indices=[],r=this.dimensions,s=this._dimensionInfos,l=t.count(),h=[],u={};e=e||[];for(v=0;v<r.length;v++){var c=s[r[v]];0===c.otherDims.itemName&&(n=v);var d=nS[c.type];o[r[v]]=new d(l)}var f=this;i||(f.hasItemOption=!1),i=i||function(t,e,i,n){var o=No(t);return Eo(t)&&(f.hasItemOption=!0),Ro(o instanceof Array?o[n]:o,s[e])};for(v=0;v<l;v++){for(var p=t.getItem(v),g=0;g<r.length;g++){var m=r[g];o[m][v]=i(p,m,v,g)}a.push(v)}for(var v=0;v<l;v++){p=t.getItem(v);!e[v]&&p&&(null!=p.name?e[v]=p.name:null!=n&&(e[v]=o[r[n]][v]));var x=e[v]||"",_=p&&p.id;!_&&x&&(u[x]=u[x]||0,_=x,u[x]>0&&(_+="__ec__"+u[x]),u[x]++),_&&(h[v]=_)}this._nameList=e,this._idList=h},rS.count=function(){return this.indices.length},rS.get=function(t,e,i){var n=this._storage,o=this.indices[e];if(null==o||!n[t])return NaN;var a=n[t][o];if(i){var r=this._dimensionInfos[t];if(r&&r.stackable)for(var s=this.stackedOn;s;){var l=s.get(t,e);(a>=0&&l>0||a<=0&&l<0)&&(a+=l),s=s.stackedOn}}return a},rS.getValues=function(t,e,i){var n=[];y(t)||(i=e,e=t,t=this.dimensions);for(var o=0,a=t.length;o<a;o++)n.push(this.get(t[o],e,i));return n},rS.hasValue=function(t){for(var e=this.dimensions,i=this._dimensionInfos,n=0,o=e.length;n<o;n++)if("ordinal"!==i[e[n]].type&&isNaN(this.get(e[n],t)))return!1;return!0},rS.getDataExtent=function(t,e,i){t=this.getDimension(t);var n=this._storage[t],o=this.getDimensionInfo(t);e=o&&o.stackable&&e;var a,r=(this._extent||(this._extent={}))[t+!!e];if(r)return r;if(n){for(var s=1/0,l=-1/0,h=0,u=this.count();h<u;h++)a=this.get(t,h,e),i&&!i(a,t,h)||(a<s&&(s=a),a>l&&(l=a));return this._extent[t+!!e]=[s,l]}return[1/0,-1/0]},rS.getSum=function(t,e){var i=0;if(this._storage[t])for(var n=0,o=this.count();n<o;n++){var a=this.get(t,n,e);isNaN(a)||(i+=a)}return i},rS.indexOf=function(t,e){var i=this._storage[t],n=this.indices;if(i)for(var o=0,a=n.length;o<a;o++)if(i[n[o]]===e)return o;return-1},rS.indexOfName=function(t){for(var e=this.indices,i=this._nameList,n=0,o=e.length;n<o;n++)if(i[e[n]]===t)return n;return-1},rS.indexOfRawIndex=function(t){var e=this.indices,i=e[t];if(null!=i&&i===t)return t;for(var n=0,o=e.length-1;n<=o;){var a=(n+o)/2|0;if(e[a]<t)n=a+1;else{if(!(e[a]>t))return a;o=a-1}}return-1},rS.indicesOfNearest=function(t,e,i,n){var o=[];if(!this._storage[t])return o;null==n&&(n=1/0);for(var a=Number.MAX_VALUE,r=-1,s=0,l=this.count();s<l;s++){var h=e-this.get(t,s,i),u=Math.abs(h);h<=n&&u<=a&&((u<a||h>=0&&r<0)&&(a=u,r=h,o.length=0),o.push(s))}return o},rS.getRawIndex=function(t){var e=this.indices[t];return null==e?-1:e},rS.getRawDataItem=function(t){return this._rawData.getItem(this.getRawIndex(t))},rS.getName=function(t){return this._nameList[this.indices[t]]||""},rS.getId=function(t){return this._idList[this.indices[t]]||this.getRawIndex(t)+""},rS.each=function(t,e,i,n){"function"==typeof t&&(n=i,i=e,e=t,t=[]);var o=[],a=(t=f(vr(t),this.getDimension,this)).length,r=this.indices;n=n||this;for(var s=0;s<r.length;s++)switch(a){case 0:e.call(n,s);break;case 1:e.call(n,this.get(t[0],s,i),s);break;case 2:e.call(n,this.get(t[0],s,i),this.get(t[1],s,i),s);break;default:for(var l=0;l<a;l++)o[l]=this.get(t[l],s,i);o[l]=s,e.apply(n,o)}},rS.filterSelf=function(t,e,i,n){"function"==typeof t&&(n=i,i=e,e=t,t=[]);var o=[],a=[],r=(t=f(vr(t),this.getDimension,this)).length,s=this.indices;n=n||this;for(var l=0;l<s.length;l++){var h;if(r)if(1===r)h=e.call(n,this.get(t[0],l,i),l);else{for(var u=0;u<r;u++)a[u]=this.get(t[u],l,i);a[u]=l,h=e.apply(n,a)}else h=e.call(n,l);h&&o.push(s[l])}return this.indices=o,this._extent={},this},rS.mapArray=function(t,e,i,n){"function"==typeof t&&(n=i,i=e,e=t,t=[]);var o=[];return this.each(t,function(){o.push(e&&e.apply(this,arguments))},i,n),o},rS.map=function(t,e,i,n){var o=yr(this,t=f(vr(t),this.getDimension,this)),a=o.indices=this.indices,r=o._storage,s=[];return this.each(t,function(){var i=arguments[arguments.length-1],n=e&&e.apply(this,arguments);if(null!=n){"number"==typeof n&&(s[0]=n,n=s);for(var o=0;o<n.length;o++){var l=t[o],h=r[l],u=a[i];h&&(h[u]=n[o])}}},i,n),o},rS.downSample=function(t,e,i,n){for(var o=yr(this,[t]),a=this._storage,r=o._storage,s=this.indices,l=o.indices=[],h=[],u=[],c=Math.floor(1/e),d=r[t],f=this.count(),p=0;p<a[t].length;p++)r[t][p]=a[t][p];for(p=0;p<f;p+=c){c>f-p&&(c=f-p,h.length=c);for(var g=0;g<c;g++){var m=s[p+g];h[g]=d[m],u[g]=m}var v=i(h);d[m=u[n(h,v)||0]]=v,l.push(m)}return o},rS.getItemModel=function(t){var e=this.hostModel;return t=this.indices[t],new Lo(this._rawData.getItem(t),e,e&&e.ecModel)},rS.diff=function(t){var e,i=this._idList,n=t&&t._idList;return new fr(t?t.indices:[],this.indices,function(t){return null!=(e=n[t])?e:"e\0\0"+t},function(t){return null!=(e=i[t])?e:"e\0\0"+t})},rS.getVisual=function(t){var e=this._visual;return e&&e[t]},rS.setVisual=function(t,e){if(eS(t))for(var i in t)t.hasOwnProperty(i)&&this.setVisual(i,t[i]);else this._visual=this._visual||{},this._visual[t]=e},rS.setLayout=function(t,e){if(eS(t))for(var i in t)t.hasOwnProperty(i)&&this.setLayout(i,t[i]);else this._layout[t]=e},rS.getLayout=function(t){return this._layout[t]},rS.getItemLayout=function(t){return this._itemLayouts[t]},rS.setItemLayout=function(t,e,i){this._itemLayouts[t]=i?a(this._itemLayouts[t]||{},e):e},rS.clearItemLayouts=function(){this._itemLayouts.length=0},rS.getItemVisual=function(t,e,i){var n=this._itemVisuals[t],o=n&&n[e];return null!=o||i?o:this.getVisual(e)},rS.setItemVisual=function(t,e,i){var n=this._itemVisuals[t]||{};if(this._itemVisuals[t]=n,eS(e))for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);else n[e]=i},rS.clearAllVisual=function(){this._visual={},this._itemVisuals=[]};var sS=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};rS.setItemGraphicEl=function(t,e){var i=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=i&&i.seriesIndex,"group"===e.type&&e.traverse(sS,e)),this._graphicEls[t]=e},rS.getItemGraphicEl=function(t){return this._graphicEls[t]},rS.eachItemGraphicEl=function(t,e){d(this._graphicEls,function(i,n){i&&t&&t.call(e,i,n)})},rS.cloneShallow=function(){var t=f(this.dimensions,this.getDimensionInfo,this),e=new aS(t,this.hostModel);return e._storage=this._storage,gr(e,this),e.indices=this.indices.slice(),this._extent&&(e._extent=a({},this._extent)),e},rS.wrapMethod=function(t,e){var i=this[t];"function"==typeof i&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=i.apply(this,arguments);return e.apply(this,[t].concat(C(arguments)))})},rS.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],rS.CHANGABLE_METHODS=["filterSelf"];var lS=d,hS=_,uS=r,cS={tooltip:1,label:1,itemName:1},dS=xr.guessOrdinal=function(t,e){for(var i=0,n=t.length;i<n;i++){var o=_r(t[i]);if(!y(o))return!1;if(null!=(o=o[e])&&isFinite(o)&&""!==o)return!1;if(hS(o)&&"-"!==o)return!0}return!1},fS={cartesian2d:function(t,e,i,n){var o=f(["xAxis","yAxis"],function(t){return i.queryComponents({mainType:t,index:e.get(t+"Index"),id:e.get(t+"Id")})[0]}),a=o[0],r=o[1],s=a.get("type"),l=r.get("type"),h=[{name:"x",type:Ir(s),stackable:Mr(s)},{name:"y",type:Ir(l),stackable:Mr(l)}],u="category"===s,c="category"===l;h=xr(h,t,n);var d={};return u&&(d.x=a),c&&(d.y=r),{dimensions:h,categoryIndex:u?0:c?1:-1,categoryAxesModels:d}},singleAxis:function(t,e,i,n){var o=i.queryComponents({mainType:"singleAxis",index:e.get("singleAxisIndex"),id:e.get("singleAxisId")})[0],a=o.get("type"),r="category"===a,s=[{name:"single",type:Ir(a),stackable:Mr(a)}];s=xr(s,t,n);var l={};return r&&(l.single=o),{dimensions:s,categoryIndex:r?0:-1,categoryAxesModels:l}},polar:function(t,e,i,n){var o=i.queryComponents({mainType:"polar",index:e.get("polarIndex"),id:e.get("polarId")})[0],a=o.findAxisModel("angleAxis"),r=o.findAxisModel("radiusAxis"),s=r.get("type"),l=a.get("type"),h=[{name:"radius",type:Ir(s),stackable:Mr(s)},{name:"angle",type:Ir(l),stackable:Mr(l)}],u="category"===l,c="category"===s;h=xr(h,t,n);var d={};return c&&(d.radius=r),u&&(d.angle=a),{dimensions:h,categoryIndex:u?1:c?0:-1,categoryAxesModels:d}},geo:function(t,e,i,n){return{dimensions:xr([{name:"lng"},{name:"lat"}],t,n)}}};Ar.prototype.parse=function(t){return t},Ar.prototype.getSetting=function(t){return this._setting[t]},Ar.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},Ar.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},Ar.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},Ar.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},Ar.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getDataExtent(e,!0))},Ar.prototype.getExtent=function(){return this._extent.slice()},Ar.prototype.setExtent=function(t,e){var i=this._extent;isNaN(t)||(i[0]=t),isNaN(e)||(i[1]=e)},Ar.prototype.getTicksLabels=function(){for(var t=[],e=this.getTicks(),i=0;i<e.length;i++)t.push(this.getLabel(e[i]));return t},Ar.prototype.isBlank=function(){return this._isBlank},Ar.prototype.setBlank=function(t){this._isBlank=t},Ki(Ar),tn(Ar,{registerWhenExtend:!0});var pS=Ar.prototype,gS=Ar.extend({type:"ordinal",init:function(t,e){this._data=t,this._extent=e||[0,t.length-1]},parse:function(t){return"string"==typeof t?l(this._data,t):Math.round(t)},contain:function(t){return t=this.parse(t),pS.contain.call(this,t)&&null!=this._data[t]},normalize:function(t){return pS.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(pS.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,i=e[0];i<=e[1];)t.push(i),i++;return t},getLabel:function(t){return this._data[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getDataExtent(e,!1))},niceTicks:N,niceExtent:N});gS.create=function(){return new gS};var mS=Mi,vS=Mi,yS=Ar.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var i=this._extent;isNaN(t)||(i[0]=parseFloat(t)),isNaN(e)||(i[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),yS.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=Dr(t)},getTicks:function(){return Pr(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getTicksLabels:function(){for(var t=[],e=this.getTicks(),i=0;i<e.length;i++)t.push(this.getLabel(e[i]));return t},getLabel:function(t,e){if(null==t)return"";var i=e&&e.precision;return null==i?i=Ai(t)||0:"auto"===i&&(i=this._intervalPrecision),t=vS(t,i,!0),Vi(t)},niceTicks:function(t,e,i){t=t||5;var n=this._extent,o=n[1]-n[0];if(isFinite(o)){o<0&&(o=-o,n.reverse());var a=Cr(n,t,e,i);this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var i=e[0];t.fixMax?e[0]-=i/2:(e[1]+=i/2,e[0]-=i/2)}else e[1]=1;var n=e[1]-e[0];isFinite(n)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var o=this._interval;t.fixMin||(e[0]=vS(Math.floor(e[0]/o)*o)),t.fixMax||(e[1]=vS(Math.ceil(e[1]/o)*o))}});yS.create=function(){return new yS};var xS=yS.prototype,_S=Math.ceil,bS=Math.floor,wS=function(t,e,i,n){for(;i<n;){var o=i+n>>>1;t[o][1]<e?i=o+1:n=o}return i},SS=yS.extend({type:"time",getLabel:function(t){var e=this._stepLvl,i=new Date(t);return Zi(e[0],i,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var i=new Date;e[1]=+new Date(i.getFullYear(),i.getMonth(),i.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var n=this._interval;t.fixMin||(e[0]=Mi(bS(e[0]/n)*n)),t.fixMax||(e[1]=Mi(_S(e[1]/n)*n))},niceTicks:function(t,e,i){t=t||10;var n=this._extent,o=n[1]-n[0],a=o/t;null!=e&&a<e&&(a=e),null!=i&&a>i&&(a=i);var r=MS.length,s=wS(MS,a,0,r),l=MS[Math.min(s,r-1)],h=l[1];"year"===l[0]&&(h*=Ni(o/h/t,!0));var u=this.getSetting("useUTC")?0:60*new Date(+n[0]||+n[1]).getTimezoneOffset()*1e3,c=[Math.round(_S((n[0]-u)/h)*h+u),Math.round(bS((n[1]-u)/h)*h+u)];kr(c,n),this._stepLvl=l,this._interval=h,this._niceExtent=c},parse:function(t){return+Pi(t)}});d(["contain","normalize"],function(t){SS.prototype[t]=function(e){return xS[t].call(this,this.parse(e))}});var MS=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];SS.create=function(t){return new SS({useUTC:t.ecModel.get("useUTC")})};var IS=Ar.prototype,TS=yS.prototype,AS=Ai,CS=Mi,DS=Math.floor,LS=Math.ceil,kS=Math.pow,PS=Math.log,OS=Ar.extend({type:"log",base:10,$constructor:function(){Ar.apply(this,arguments),this._originalScale=new yS},getTicks:function(){var t=this._originalScale,e=this._extent,i=t.getExtent();return f(TS.getTicks.call(this),function(n){var o=Mi(kS(this.base,n));return o=n===e[0]&&t.__fixMin?Or(o,i[0]):o,o=n===e[1]&&t.__fixMax?Or(o,i[1]):o},this)},getLabel:TS.getLabel,scale:function(t){return t=IS.scale.call(this,t),kS(this.base,t)},setExtent:function(t,e){var i=this.base;t=PS(t)/PS(i),e=PS(e)/PS(i),TS.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=IS.getExtent.call(this);e[0]=kS(t,e[0]),e[1]=kS(t,e[1]);var i=this._originalScale,n=i.getExtent();return i.__fixMin&&(e[0]=Or(e[0],n[0])),i.__fixMax&&(e[1]=Or(e[1],n[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=PS(t[0])/PS(e),t[1]=PS(t[1])/PS(e),IS.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getDataExtent(e,!0,function(t){return t>0}))},niceTicks:function(t){t=t||10;var e=this._extent,i=e[1]-e[0];if(!(i===1/0||i<=0)){var n=Oi(i);for(t/i*n<=.5&&(n*=10);!isNaN(n)&&Math.abs(n)<1&&Math.abs(n)>0;)n*=10;var o=[Mi(LS(e[0]/n)*n),Mi(DS(e[1]/n)*n)];this._interval=n,this._niceExtent=o}},niceExtent:function(t){TS.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});d(["contain","normalize"],function(t){OS.prototype[t]=function(e){return e=PS(e)/PS(this.base),IS[t].call(this,e)}}),OS.create=function(){return new OS};var zS={getFormattedLabels:function(){return Vr(this.axis,this.get("axisLabel.formatter"))},getCategories:function(){return"category"===this.get("type")&&f(this.get("data"),Gr)},getMin:function(t){var e=this.option,i=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=i&&"dataMin"!==i&&"function"!=typeof i&&!M(i)&&(i=this.axis.scale.parse(i)),i},getMax:function(t){var e=this.option,i=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=i&&"dataMax"!==i&&"function"!=typeof i&&!M(i)&&(i=this.axis.scale.parse(i)),i},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:N,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},NS=Zn({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var i=e.cx,n=e.cy,o=e.width/2,a=e.height/2;t.moveTo(i,n-a),t.lineTo(i+o,n+a),t.lineTo(i-o,n+a),t.closePath()}}),ES=Zn({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var i=e.cx,n=e.cy,o=e.width/2,a=e.height/2;t.moveTo(i,n-a),t.lineTo(i+o,n),t.lineTo(i,n+a),t.lineTo(i-o,n),t.closePath()}}),RS=Zn({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.x,n=e.y,o=e.width/5*3,a=Math.max(o,e.height),r=o/2,s=r*r/(a-r),l=n-a+r+s,h=Math.asin(s/r),u=Math.cos(h)*r,c=Math.sin(h),d=Math.cos(h),f=.6*r,p=.7*r;t.moveTo(i-u,l+s),t.arc(i,l,r,Math.PI-h,2*Math.PI+h),t.bezierCurveTo(i+u-c*f,l+s+d*f,i,n-p,i,n),t.bezierCurveTo(i,n-p,i-u+c*f,l+s+d*f,i-u,l+s),t.closePath()}}),VS=Zn({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.height,n=e.width,o=e.x,a=e.y,r=n/3*2;t.moveTo(o,a),t.lineTo(o+r,a+i),t.lineTo(o,a+i/4*3),t.lineTo(o-r,a+i),t.lineTo(o,a),t.closePath()}}),BS={line:function(t,e,i,n,o){o.x1=t,o.y1=e+n/2,o.x2=t+i,o.y2=e+n/2},rect:function(t,e,i,n,o){o.x=t,o.y=e,o.width=i,o.height=n},roundRect:function(t,e,i,n,o){o.x=t,o.y=e,o.width=i,o.height=n,o.r=Math.min(i,n)/4},square:function(t,e,i,n,o){var a=Math.min(i,n);o.x=t,o.y=e,o.width=a,o.height=a},circle:function(t,e,i,n,o){o.cx=t+i/2,o.cy=e+n/2,o.r=Math.min(i,n)/2},diamond:function(t,e,i,n,o){o.cx=t+i/2,o.cy=e+n/2,o.width=i,o.height=n},pin:function(t,e,i,n,o){o.x=t+i/2,o.y=e+n/2,o.width=i,o.height=n},arrow:function(t,e,i,n,o){o.x=t+i/2,o.y=e+n/2,o.width=i,o.height=n},triangle:function(t,e,i,n,o){o.cx=t+i/2,o.cy=e+n/2,o.width=i,o.height=n}},GS={};d({line:fb,rect:db,roundRect:db,square:db,circle:nb,diamond:ES,pin:RS,arrow:VS,triangle:NS},function(t,e){GS[e]=new t});var WS=Zn({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,i){var n=e.symbolType,o=GS[n];"none"!==e.symbolType&&(o||(o=GS[n="rect"]),BS[n](e.x,e.y,e.width,e.height,o.shape),o.buildPath(t,o.shape,i))}}),HS=(Object.freeze||Object)({createList:function(t){return Sr(t.get("data"),t,t.ecModel)},createScale:function(t,e){var i=e;e instanceof Lo||u(i=new Lo(e),zS);var n=Er(i);return n.setExtent(t[0],t[1]),Nr(n,i),n},mixinAxisModelCommonMethods:function(t){u(t,zS)},completeDimensions:xr,createSymbol:Hr}),FS=wi,ZS=[0,1],US=function(t,e,i){this.dim=t,this.scale=e,this._extent=i||[0,0],this.inverse=!1,this.onBand=!1,this._labelInterval};US.prototype={constructor:US,contain:function(t){var e=this._extent,i=Math.min(e[0],e[1]),n=Math.max(e[0],e[1]);return t>=i&&t<=n},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return Ci(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var i=this._extent;i[0]=t,i[1]=e},dataToCoord:function(t,e){var i=this._extent,n=this.scale;return t=n.normalize(t),this.onBand&&"ordinal"===n.type&&Fr(i=i.slice(),n.count()),FS(t,ZS,i,e)},coordToData:function(t,e){var i=this._extent,n=this.scale;this.onBand&&"ordinal"===n.type&&Fr(i=i.slice(),n.count());var o=FS(t,i,ZS,e);return this.scale.scale(o)},pointToData:function(t,e){},getTicksCoords:function(t){if(this.onBand&&!t){for(var e=this.getBands(),i=[],n=0;n<e.length;n++)i.push(e[n][0]);return e[n-1]&&i.push(e[n-1][1]),i}return f(this.scale.getTicks(),this.dataToCoord,this)},getLabelsCoords:function(){return f(this.scale.getTicks(),this.dataToCoord,this)},getBands:function(){for(var t=this.getExtent(),e=[],i=this.scale.count(),n=t[0],o=t[1]-n,a=0;a<i;a++)e.push([o*a/i+n,o*(a+1)/i+n]);return e},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),i=e[1]-e[0]+(this.onBand?1:0);0===i&&(i=1);var n=Math.abs(t[1]-t[0]);return Math.abs(n)/i},isHorizontal:null,getRotate:null,getLabelInterval:function(){var t=this._labelInterval;if(!t){var e=this.model,i=e.getModel("axisLabel");t=i.get("interval"),"category"!==this.type||null!=t&&"auto"!==t||(t=Rr(f(this.scale.getTicks(),this.dataToCoord,this),e.getFormattedLabels(),i.getFont(),this.getRotate?this.getRotate():this.isHorizontal&&!this.isHorizontal()?90:0,i.get("rotate"))),this._labelInterval=t}return t}};var XS=1e-8;Xr.prototype={constructor:Xr,properties:null,getBoundingRect:function(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,i=[e,e],n=[-e,-e],o=[],a=[],r=this.geometries,s=0;s<r.length;s++)"polygon"===r[s].type&&(mn(r[s].exterior,o,a),K(i,i,o),J(n,n,a));return 0===s&&(i[0]=i[1]=n[0]=n[1]=0),this._rect=new jt(i[0],i[1],n[0]-i[0],n[1]-i[1])},contain:function(t){var e=this.getBoundingRect(),i=this.geometries;if(!e.contain(t[0],t[1]))return!1;t:for(var n=0,o=i.length;n<o;n++)if("polygon"===i[n].type){var a=i[n].exterior,r=i[n].interiors;if(Ur(a,t[0],t[1])){for(var s=0;s<(r?r.length:0);s++)if(Ur(r[s]))continue t;return!0}}return!1},transformTo:function(t,e,i,n){var o=this.getBoundingRect(),a=o.width/o.height;i?n||(n=i/a):i=a*n;for(var r=new jt(t,e,i,n),s=o.calculateTransform(r),l=this.geometries,h=0;h<l.length;h++)if("polygon"===l[h].type){for(var u=l[h].exterior,c=l[h].interiors,d=0;d<u.length;d++)$(u[d],u[d],s);for(var f=0;f<(c?c.length:0);f++)for(d=0;d<c[f].length;d++)$(c[f][d],c[f][d],s)}(o=this._rect).copy(r),this.center=[o.x+o.width/2,o.y+o.height/2]}};var jS=function(t){return jr(t),f(g(t.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,i=t.geometry,n=i.coordinates,o=[];"Polygon"===i.type&&o.push({type:"polygon",exterior:n[0],interiors:n.slice(1)}),"MultiPolygon"===i.type&&d(n,function(t){t[0]&&o.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})});var a=new Xr(e.name,o,e.cp);return a.properties=e,a})},qS={};d(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){qS[t]=ay[t]}),yw.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return Sr(t.data,this,e)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{normal:{position:"top"}},lineStyle:{normal:{width:2,type:"solid"}},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:!1,connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var YS=Jr.prototype;YS._createSymbol=function(t,e,i,n){this.removeAll();var o=Hr(t,-1,-1,2,2,e.getItemVisual(i,"color"));o.attr({z2:100,culling:!0,scale:Kr(n)}),o.drift=Qr,this._symbolType=t,this.add(o)},YS.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},YS.getSymbolPath=function(){return this.childAt(0)},YS.getScale=function(){return this.childAt(0).scale},YS.highlight=function(){this.childAt(0).trigger("emphasis")},YS.downplay=function(){this.childAt(0).trigger("normal")},YS.setZ=function(t,e){var i=this.childAt(0);i.zlevel=t,i.z=e},YS.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},YS.updateData=function(t,e,i){this.silent=!1;var n=t.getItemVisual(e,"symbol")||"circle",o=t.hostModel,a=$r(t,e),r=n!==this._symbolType;if(r?this._createSymbol(n,t,e,a):((s=this.childAt(0)).silent=!1,wo(s,{scale:Kr(a)},o,e)),this._updateCommon(t,e,a,i),r){var s=this.childAt(0),l=i&&i.fadeIn,h={scale:s.scale.slice()};l&&(h.style={opacity:s.style.opacity}),s.scale=[0,0],l&&(s.style.opacity=0),So(s,h,o,e)}this._seriesModel=o};var $S=["itemStyle","normal"],KS=["itemStyle","emphasis"],JS=["label","normal"],QS=["label","emphasis"];YS._updateCommon=function(t,e,i,n){var o=this.childAt(0),r=t.hostModel,s=t.getItemVisual(e,"color");"image"!==o.type&&o.useStyle({strokeNoScale:!0});var l=n&&n.itemStyle,h=n&&n.hoverItemStyle,u=n&&n.symbolRotate,c=n&&n.symbolOffset,d=n&&n.labelModel,f=n&&n.hoverLabelModel,p=n&&n.hoverAnimation,g=n&&n.cursorStyle;if(!n||t.hasItemOption){var m=n&&n.itemModel?n.itemModel:t.getItemModel(e);l=m.getModel($S).getItemStyle(["color"]),h=m.getModel(KS).getItemStyle(),u=m.getShallow("symbolRotate"),c=m.getShallow("symbolOffset"),d=m.getModel(JS),f=m.getModel(QS),p=m.getShallow("hoverAnimation"),g=m.getShallow("cursor")}else h=a({},h);var v=o.style;o.attr("rotation",(u||0)*Math.PI/180||0),c&&o.attr("position",[Si(c[0],i[0]),Si(c[1],i[1])]),g&&o.attr("cursor",g),o.setColor(s,n&&n.symbolInnerColor),o.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(v.opacity=y);var x=n&&n.useNameLabel,_=!x&&Yr(t);(x||null!=_)&&co(v,h,d,f,{labelFetcher:r,labelDataIndex:e,defaultText:x?t.getName(e):t.get(_,e),isRectText:!0,autoColor:s}),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),o.hoverStyle=h,uo(o);var b=Kr(i);if(p&&r.isAnimationEnabled()){var w=function(){var t=b[1]/b[0];this.animateTo({scale:[Math.max(1.1*b[0],b[0]+3),Math.max(1.1*b[1],b[1]+3*t)]},400,"elasticOut")},S=function(){this.animateTo({scale:b},400,"elasticOut")};o.on("mouseover",w).on("mouseout",S).on("emphasis",w).on("normal",S)}},YS.fadeOut=function(t,e){var i=this.childAt(0);this.silent=i.silent=!0,!(e&&e.keepLabel)&&(i.style.text=null),wo(i,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},h(Jr,jy);var tM=ts.prototype;tM.updateData=function(t,e){var i=this.group,n=t.hostModel,o=this._data,a=this._symbolCtor,r={itemStyle:n.getModel("itemStyle.normal").getItemStyle(["color"]),hoverItemStyle:n.getModel("itemStyle.emphasis").getItemStyle(),symbolRotate:n.get("symbolRotate"),symbolOffset:n.get("symbolOffset"),hoverAnimation:n.get("hoverAnimation"),labelModel:n.getModel("label.normal"),hoverLabelModel:n.getModel("label.emphasis"),cursorStyle:n.get("cursor")};t.diff(o).add(function(n){var o=t.getItemLayout(n);if(es(t,n,e)){var s=new a(t,n,r);s.attr("position",o),t.setItemGraphicEl(n,s),i.add(s)}}).update(function(s,l){var h=o.getItemGraphicEl(l),u=t.getItemLayout(s);es(t,s,e)?(h?(h.updateData(t,s,r),wo(h,{position:u},n)):(h=new a(t,s)).attr("position",u),i.add(h),t.setItemGraphicEl(s,h)):i.remove(h)}).remove(function(t){var e=o.getItemGraphicEl(t);e&&e.fadeOut(function(){i.remove(e)})}).execute(),this._data=t},tM.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,i){var n=t.getItemLayout(i);e.attr("position",n)})},tM.remove=function(t){var e=this.group,i=this._data;i&&(t?i.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll())};var eM=function(t,e,i,n,o,a){for(var r=os(t,e),s=[],l=[],h=[],u=[],c=[],d=[],f=[],p=a.dimensions,g=0;g<r.length;g++){var m=r[g],v=!0;switch(m.cmd){case"=":var y=t.getItemLayout(m.idx),x=e.getItemLayout(m.idx1);(isNaN(y[0])||isNaN(y[1]))&&(y=x.slice()),s.push(y),l.push(x),h.push(i[m.idx]),u.push(n[m.idx1]),f.push(e.getRawIndex(m.idx1));break;case"+":_=m.idx;s.push(o.dataToPoint([e.get(p[0],_,!0),e.get(p[1],_,!0)])),l.push(e.getItemLayout(_).slice()),h.push(ns(o,e,_)),u.push(n[_]),f.push(e.getRawIndex(_));break;case"-":var _=m.idx,b=t.getRawIndex(_);b!==_?(s.push(t.getItemLayout(_)),l.push(a.dataToPoint([t.get(p[0],_,!0),t.get(p[1],_,!0)])),h.push(i[_]),u.push(ns(a,t,_)),f.push(b)):v=!1}v&&(c.push(m),d.push(d.length))}d.sort(function(t,e){return f[t]-f[e]});for(var w=[],S=[],M=[],I=[],T=[],g=0;g<d.length;g++){_=d[g];w[g]=s[_],S[g]=l[_],M[g]=h[_],I[g]=u[_],T[g]=c[_]}return{current:w,next:S,stackedOnCurrent:M,stackedOnNext:I,status:T}},iM=K,nM=J,oM=W,aM=R,rM=[],sM=[],lM=[],hM=Nn.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:ab(Nn.prototype.brush),buildPath:function(t,e){var i=e.points,n=0,o=i.length,a=ss(i,e.smoothConstraint);if(e.connectNulls){for(;o>0&&as(i[o-1]);o--);for(;n<o&&as(i[n]);n++);}for(;n<o;)n+=rs(t,i,n,o,o,1,a.min,a.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),uM=Nn.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:ab(Nn.prototype.brush),buildPath:function(t,e){var i=e.points,n=e.stackedOnPoints,o=0,a=i.length,r=e.smoothMonotone,s=ss(i,e.smoothConstraint),l=ss(n,e.smoothConstraint);if(e.connectNulls){for(;a>0&&as(i[a-1]);a--);for(;o<a&&as(i[o]);o++);}for(;o<a;){var h=rs(t,i,o,a,a,1,s.min,s.max,e.smooth,r,e.connectNulls);rs(t,n,o+h-1,h,a,-1,l.min,l.max,e.stackedOnSmooth,r,e.connectNulls),o+=h+1,t.closePath()}}});Ta.extend({type:"line",init:function(){var t=new jy,e=new ts;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,i){var n=t.coordinateSystem,o=this.group,a=t.getData(),s=t.getModel("lineStyle.normal"),l=t.getModel("areaStyle.normal"),h=a.mapArray(a.getItemLayout,!0),u="polar"===n.type,c=this._coordSys,d=this._symbolDraw,f=this._polyline,p=this._polygon,g=this._lineGroup,m=t.get("animation"),v=!l.isEmpty(),y=ds(n,a),x=t.get("showSymbol"),_=x&&!u&&!t.get("showAllSymbol")&&this._getSymbolIgnoreFunc(a,n),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(o.remove(t),b.setItemGraphicEl(e,null))}),x||d.remove(),o.add(g);var w=!u&&t.get("step");f&&c.type===n.type&&w===this._step?(v&&!p?p=this._newPolygon(h,y,n,m):p&&!v&&(g.remove(p),p=this._polygon=null),g.setClipPath(gs(n,!1,t)),x&&d.updateData(a,_),a.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),ls(this._stackedOnPoints,y)&&ls(this._points,h)||(m?this._updateAnimation(a,y,n,i,w):(w&&(h=ms(h,n,w),y=ms(y,n,w)),f.setShape({points:h}),p&&p.setShape({points:h,stackedOnPoints:y})))):(x&&d.updateData(a,_),w&&(h=ms(h,n,w),y=ms(y,n,w)),f=this._newPolyline(h,n,m),v&&(p=this._newPolygon(h,y,n,m)),g.setClipPath(gs(n,!0,t)));var S=vs(a,n)||a.getVisual("color");f.useStyle(r(s.getLineStyle(),{fill:"none",stroke:S,lineJoin:"bevel"}));var M=t.get("smooth");if(M=hs(t.get("smooth")),f.setShape({smooth:M,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var I=a.stackedOn,T=0;p.useStyle(r(l.getAreaStyle(),{fill:S,opacity:.7,lineJoin:"bevel"})),I&&(T=hs(I.hostModel.get("smooth"))),p.setShape({smooth:M,stackedOnSmooth:T,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=a,this._coordSys=n,this._stackedOnPoints=y,this._points=h,this._step=w},dispose:function(){},highlight:function(t,e,i,n){var o=t.getData(),a=Ho(o,n);if(!(a instanceof Array)&&null!=a&&a>=0){var r=o.getItemGraphicEl(a);if(!r){var s=o.getItemLayout(a);if(!s)return;(r=new Jr(o,a)).position=s,r.setZ(t.get("zlevel"),t.get("z")),r.ignore=isNaN(s[0])||isNaN(s[1]),r.__temp=!0,o.setItemGraphicEl(a,r),r.stopSymbolAnimation(!0),this.group.add(r)}r.highlight()}else Ta.prototype.highlight.call(this,t,e,i,n)},downplay:function(t,e,i,n){var o=t.getData(),a=Ho(o,n);if(null!=a&&a>=0){var r=o.getItemGraphicEl(a);r&&(r.__temp?(o.setItemGraphicEl(a,null),this.group.remove(r)):r.downplay())}else Ta.prototype.downplay.call(this,t,e,i,n)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new hM({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var i=this._polygon;return i&&this._lineGroup.remove(i),i=new uM({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(i),this._polygon=i,i},_getSymbolIgnoreFunc:function(t,e){var i=e.getAxesByScale("ordinal")[0];if(i&&i.isLabelIgnored)return m(i.isLabelIgnored,i)},_updateAnimation:function(t,e,i,n,o){var a=this._polyline,r=this._polygon,s=t.hostModel,l=eM(this._data,t,this._stackedOnPoints,e,this._coordSys,i),h=l.current,u=l.stackedOnCurrent,c=l.next,d=l.stackedOnNext;o&&(h=ms(l.current,i,o),u=ms(l.stackedOnCurrent,i,o),c=ms(l.next,i,o),d=ms(l.stackedOnNext,i,o)),a.shape.__points=l.current,a.shape.points=h,wo(a,{shape:{points:c}},s),r&&(r.setShape({points:h,stackedOnPoints:u}),wo(r,{shape:{points:c,stackedOnPoints:d}},s));for(var f=[],p=l.status,g=0;g<p.length;g++)if("="===p[g].cmd){var m=t.getItemGraphicEl(p[g].idx1);m&&f.push({el:m,ptIdx:g})}a.animators&&a.animators.length&&a.animators[0].during(function(){for(var t=0;t<f.length;t++)f[t].el.attr("position",a.shape.__points[f[t].ptIdx])})},remove:function(t){var e=this.group,i=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),i&&i.eachItemGraphicEl(function(t,n){t.__temp&&(e.remove(t),i.setItemGraphicEl(n,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var cM=function(t,e,i,n,o){n.eachRawSeriesByType(t,function(t){var o=t.getData(),a=t.get("symbol")||e,r=t.get("symbolSize");o.setVisual({legendSymbol:i||a,symbol:a,symbolSize:r}),n.isSeriesFiltered(t)||("function"==typeof r&&o.each(function(e){var i=t.getRawValue(e),n=t.getDataParams(e);o.setItemVisual(e,"symbolSize",r(i,n))}),o.each(function(t){var e=o.getItemModel(t),i=e.getShallow("symbol",!0),n=e.getShallow("symbolSize",!0);null!=i&&o.setItemVisual(t,"symbol",i),null!=n&&o.setItemVisual(t,"symbolSize",n)}))})},dM=function(t,e){e.eachSeriesByType(t,function(t){var e=t.getData(),i=t.coordinateSystem;if(i){for(var n=[],o=i.dimensions,a=0;a<o.length;a++)n.push(t.coordDimToDataDim(i.dimensions[a])[0]);1===n.length?e.each(n[0],function(t,n){e.setItemLayout(n,isNaN(t)?[NaN,NaN]:i.dataToPoint(t))}):2===n.length&&e.each(n,function(t,n,o){e.setItemLayout(o,isNaN(t)||isNaN(n)?[NaN,NaN]:i.dataToPoint([t,n]))},!0)}})},fM={average:function(t){for(var e=0,i=0,n=0;n<t.length;n++)isNaN(t[n])||(e+=t[n],i++);return 0===i?NaN:e/i},sum:function(t){for(var e=0,i=0;i<t.length;i++)e+=t[i]||0;return e},max:function(t){for(var e=-1/0,i=0;i<t.length;i++)t[i]>e&&(e=t[i]);return e},min:function(t){for(var e=1/0,i=0;i<t.length;i++)t[i]<e&&(e=t[i]);return e},nearest:function(t){return t[0]}},pM=function(t,e){return Math.round(t.length/2)},gM=function(t){this._axes={},this._dimList=[],this.name=t||""};gM.prototype={constructor:gM,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return f(this._dimList,ys,this)},getAxesByScale:function(t){return t=t.toLowerCase(),g(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var i=this._dimList,n=t instanceof Array?[]:{},o=0;o<i.length;o++){var a=i[o],r=this._axes[a];n[a]=r[e](t[a])}return n}},xs.prototype={constructor:xs,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),i=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&i.contain(i.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e){var i=this.getAxis("x"),n=this.getAxis("y");return[i.toGlobalCoord(i.dataToCoord(t[0],e)),n.toGlobalCoord(n.dataToCoord(t[1],e))]},pointToData:function(t,e){var i=this.getAxis("x"),n=this.getAxis("y");return[i.coordToData(i.toLocalCoord(t[0]),e),n.coordToData(n.toLocalCoord(t[1]),e)]},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},h(xs,gM);var mM=function(t,e,i,n,o){US.call(this,t,e,i),this.type=n||"value",this.position=o||"bottom"};mM.prototype={constructor:mM,index:0,onZero:!1,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},isLabelIgnored:function(t){if("category"===this.type){var e=this.getLabelInterval();return"function"==typeof e&&!e(t,this.scale.getLabel(t))||t%(e+1)}},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},h(mM,US);var vM={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},yM={};yM.categoryAxis=n({boundaryGap:!0,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},vM),yM.valueAxis=n({boundaryGap:[0,0],splitNumber:5},vM),yM.timeAxis=r({scale:!0,min:"dataMin",max:"dataMax"},yM.valueAxis),yM.logAxis=r({scale:!0,logBase:10},yM.valueAxis);var xM=["value","category","time","log"],_M=function(t,e,i,a){d(xM,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,o){var a=this.layoutMode,s=a?ea(e):{};n(e,o.getTheme().get(r+"Axis")),n(e,this.getDefaultOption()),e.type=i(t,e),a&&ta(e,s,a)},defaultOption:o([{},yM[r+"Axis"],a],!0)})}),Ub.registerSubTypeDefaulter(t+"Axis",v(i,t))},bM=Ub.extend({type:"cartesian2dAxis",axis:null,init:function(){bM.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){bM.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){bM.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});n(bM.prototype,zS);var wM={offset:0};_M("x",bM,_s,wM),_M("y",bM,_s,wM),Ub.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var SM=d,MM=function(t){var e=t.scale.getExtent(),i=e[0],n=e[1];return!(i>0&&n>0||i<0&&n<0)},IM=Nr,TM=Ms.prototype;TM.type="grid",TM.axisPointerEnabled=!0,TM.getRect=function(){return this._rect},TM.update=function(t,e){var i=this._axesMap;this._updateScale(t,this.model),SM(i.x,function(t){IM(t.scale,t.model)}),SM(i.y,function(t){IM(t.scale,t.model)}),SM(i.x,function(t){Is(i,"y",t)}),SM(i.y,function(t){Is(i,"x",t)}),this.resize(this.model,e)},TM.resize=function(t,e,i){function n(){SM(a,function(t){var e=t.isHorizontal(),i=e?[0,o.width]:[0,o.height],n=t.inverse?1:0;t.setExtent(i[n],i[1-n]),As(t,e?o.x:o.y)})}var o=Ko(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=o;var a=this._axesList;n(),!i&&t.get("containLabel")&&(SM(a,function(t){if(!t.model.get("axisLabel.inside")){var e=Ss(t);if(e){var i=t.isHorizontal()?"height":"width",n=t.model.get("axisLabel.margin");o[i]-=e[i]+n,"top"===t.position?o.y+=e.height+n:"left"===t.position&&(o.x+=e.width+n)}}}),n())},TM.getAxis=function(t,e){var i=this._axesMap[t];if(null!=i){if(null==e)for(var n in i)if(i.hasOwnProperty(n))return i[n];return i[e]}},TM.getAxes=function(){return this._axesList.slice()},TM.getCartesian=function(t,e){if(null!=t&&null!=e){var i="x"+t+"y"+e;return this._coordsMap[i]}b(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var n=0,o=this._coordsList;n<o.length;n++)if(o[n].getAxis("x").index===t||o[n].getAxis("y").index===e)return o[n]},TM.getCartesians=function(){return this._coordsList.slice()},TM.convertToPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.dataToPoint(i):n.axis?n.axis.toGlobalCoord(n.axis.dataToCoord(i)):null},TM.convertFromPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.pointToData(i):n.axis?n.axis.coordToData(n.axis.toLocalCoord(i)):null},TM._findConvertTarget=function(t,e){var i,n,o=e.seriesModel,a=e.xAxisModel||o&&o.getReferringComponents("xAxis")[0],r=e.yAxisModel||o&&o.getReferringComponents("yAxis")[0],s=e.gridModel,h=this._coordsList;return o?l(h,i=o.coordinateSystem)<0&&(i=null):a&&r?i=this.getCartesian(a.componentIndex,r.componentIndex):a?n=this.getAxis("x",a.componentIndex):r?n=this.getAxis("y",r.componentIndex):s&&s.coordinateSystem===this&&(i=this._coordsList[0]),{cartesian:i,axis:n}},TM.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},TM._initCartesian=function(t,e,i){function n(i){return function(n,s){if(bs(n,t,e)){var l=n.get("position");"x"===i?"top"!==l&&"bottom"!==l&&o[l="bottom"]&&(l="top"===l?"bottom":"top"):"left"!==l&&"right"!==l&&o[l="left"]&&(l="left"===l?"right":"left"),o[l]=!0;var h=new mM(i,Er(n),[0,0],n.get("type"),l),u="category"===h.type;h.onBand=u&&n.get("boundaryGap"),h.inverse=n.get("inverse"),h.onZero=n.get("axisLine.onZero"),h.onZeroAxisIndex=n.get("axisLine.onZeroAxisIndex"),n.axis=h,h.model=n,h.grid=this,h.index=s,this._axesList.push(h),a[i][s]=h,r[i]++}}}var o={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},r={x:0,y:0};if(e.eachComponent("xAxis",n("x"),this),e.eachComponent("yAxis",n("y"),this),!r.x||!r.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=a,SM(a.x,function(e,i){SM(a.y,function(n,o){var a="x"+i+"y"+o,r=new xs(a);r.grid=this,r.model=t,this._coordsMap[a]=r,this._coordsList.push(r),r.addAxis(e),r.addAxis(n)},this)},this)},TM._updateScale=function(t,e){function i(t,e,i){SM(i.coordDimToDataDim(e.dim),function(i){e.scale.unionExtentFromData(t,i)})}d(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(n){if(Ds(n)){var o=Cs(n),a=o[0],r=o[1];if(!bs(a,e,t)||!bs(r,e,t))return;var s=this.getCartesian(a.componentIndex,r.componentIndex),l=n.getData(),h=s.getAxis("x"),u=s.getAxis("y");"list"===l.type&&(i(l,h,n),i(l,u,n))}},this)},TM.getTooltipAxes=function(t){var e=[],i=[];return SM(this.getCartesians(),function(n){var o=null!=t&&"auto"!==t?n.getAxis(t):n.getBaseAxis(),a=n.getOtherAxis(o);l(e,o)<0&&e.push(o),l(i,a)<0&&i.push(a)}),{baseAxes:e,otherAxes:i}};var AM=["xAxis","yAxis"];Ms.create=function(t,e){var i=[];return t.eachComponent("grid",function(n,o){var a=new Ms(n,t,e);a.name="grid_"+o,a.resize(n,e,!0),n.coordinateSystem=a,i.push(a)}),t.eachSeries(function(t){if(Ds(t)){var e=Cs(t),i=e[0],n=e[1],o=i.getCoordSysModel().coordinateSystem;t.coordinateSystem=o.getCartesian(i.componentIndex,n.componentIndex)}}),i},Ms.dimensions=Ms.prototype.dimensions=xs.prototype.dimensions,ua.register("cartesian2d",Ms);var CM=Math.PI,DM=function(t,e){this.opt=e,this.axisModel=t,r(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new jy;var i=new jy({position:e.position.slice(),rotation:e.rotation});i.updateTransform(),this._transform=i.transform,this._dumbGroup=i};DM.prototype={constructor:DM,hasBuilder:function(t){return!!LM[t]},add:function(t){LM[t].call(this)},getGroup:function(){return this.group}};var LM={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var i=this.axisModel.axis.getExtent(),n=this._transform,o=[i[0],0],r=[i[1],0];n&&($(o,o,n),$(r,r,n));var s=a({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new fb(Yn({anid:"line",shape:{x1:o[0],y1:o[1],x2:r[0],y2:r[1]},style:s,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),h=e.get("axisLine.symbolSize");if(null!=l){"string"==typeof l&&(l=[l,l]),"string"!=typeof h&&"number"!=typeof h||(h=[h,h]);var u=h[0],c=h[1];d([[t.rotation+Math.PI/2,o],[t.rotation-Math.PI/2,r]],function(t,e){if("none"!==l[e]&&null!=l[e]){var i=Hr(l[e],-u/2,-c/2,u,c,s.stroke,!0);i.attr({rotation:t[0],position:t[1],silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,i=Rs(this,t,e);Os(t,Vs(this,t,e),i)},axisName:function(){var t=this.opt,e=this.axisModel,i=I(t.axisName,e.get("name"));if(i){var n,o=e.get("nameLocation"),r=t.nameDirection,s=e.getModel("nameTextStyle"),l=e.get("nameGap")||0,h=this.axisModel.axis.getExtent(),u=h[0]>h[1]?-1:1,c=["start"===o?h[0]-u*l:"end"===o?h[1]+u*l:(h[0]+h[1])/2,Es(o)?t.labelOffset+r*l:0],d=e.get("nameRotate");null!=d&&(d=d*CM/180);var f;Es(o)?n=kM(t.rotation,null!=d?d:t.rotation,r):(n=ks(t,o,d||0,h),null!=(f=t.axisNameAvailableWidth)&&(f=Math.abs(f/Math.sin(n.rotation)),!isFinite(f)&&(f=null)));var p=s.getFont(),g=e.get("nameTruncate",!0)||{},m=g.ellipsis,v=I(t.nameTruncateMaxWidth,g.maxWidth,f),y=null!=m&&null!=v?Zx(i,v,p,m,{minChar:2,placeholder:g.placeholder}):i,x=e.get("tooltip",!0),_=e.mainType,b={componentType:_,name:i,$vars:["name"]};b[_+"Index"]=e.componentIndex;var w=new ib({anid:"name",__fullText:i,__truncatedText:y,position:c,rotation:n.rotation,silent:Ps(e),z2:1,tooltip:x&&x.show?a({content:i,formatter:function(){return i},formatterParams:b},x):null});fo(w.style,s,{text:y,textFont:p,textFill:s.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:n.textAlign,textVerticalAlign:n.textVerticalAlign}),e.get("triggerEvent")&&(w.eventData=Ls(e),w.eventData.targetType="axisName",w.eventData.name=i),this._dumbGroup.add(w),w.updateTransform(),this.group.add(w),w.decomposeTransform()}}},kM=DM.innerTextLayout=function(t,e,i){var n,o,a=Li(e-t);return ki(a)?(o=i>0?"top":"bottom",n="center"):ki(a-CM)?(o=i>0?"bottom":"top",n="center"):(o="middle",n=a>0&&a<CM?i>0?"right":"left":i>0?"left":"right"),{rotation:a,textAlign:n,textVerticalAlign:o}},PM=DM.ifIgnoreOnTick=function(t,e,i,n,o,a){if(0===e&&o||e===n-1&&a)return!1;var r,s=t.scale;return"ordinal"===s.type&&("function"==typeof i?(r=s.getTicks()[e],!i(r,s.getLabel(r))):e%(i+1))},OM=DM.getInterval=function(t,e){var i=t.get("interval");return null!=i&&"auto"!=i||(i=e),i},zM=d,NM=v,EM=lr({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,i,n){this.axisPointerClass&&Us(t),EM.superApply(this,"render",arguments),$s(this,t,0,i,0,!0)},updateAxisPointer:function(t,e,i,n,o){$s(this,t,0,i,0,!1)},remove:function(t,e){var i=this._axisPointer;i&&i.remove(e),EM.superApply(this,"remove",arguments)},dispose:function(t,e){Ks(this,e),EM.superApply(this,"dispose",arguments)}}),RM=[];EM.registerAxisPointerClass=function(t,e){RM[t]=e},EM.getAxisPointerClass=function(t){return t&&RM[t]};var VM=DM.ifIgnoreOnTick,BM=DM.getInterval,GM=["axisLine","axisTickLabel","axisName"],WM=["splitArea","splitLine"],HM=EM.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,i,n){this.group.removeAll();var o=this._axisGroup;if(this._axisGroup=new jy,this.group.add(this._axisGroup),t.get("show")){var a=t.getCoordSysModel(),r=Js(a,t),s=new DM(t,r);d(GM,s.add,s),this._axisGroup.add(s.getGroup()),d(WM,function(e){t.get(e+".show")&&this["_"+e](t,a,r.labelInterval)},this),Ao(o,this._axisGroup,t),HM.superCall(this,"render",t,e,i,n)}},_splitLine:function(t,e,i){var n=t.axis;if(!n.scale.isBlank()){var o=t.getModel("splitLine"),a=o.getModel("lineStyle"),s=a.get("color"),l=BM(o,i);s=y(s)?s:[s];for(var h=e.coordinateSystem.getRect(),u=n.isHorizontal(),c=0,d=n.getTicksCoords(),f=n.scale.getTicks(),p=t.get("axisLabel.showMinLabel"),g=t.get("axisLabel.showMaxLabel"),m=[],v=[],x=a.getLineStyle(),_=0;_<d.length;_++)if(!VM(n,_,l,d.length,p,g)){var b=n.toGlobalCoord(d[_]);u?(m[0]=b,m[1]=h.y,v[0]=b,v[1]=h.y+h.height):(m[0]=h.x,m[1]=b,v[0]=h.x+h.width,v[1]=b);var w=c++%s.length;this._axisGroup.add(new fb(Yn({anid:"line_"+f[_],shape:{x1:m[0],y1:m[1],x2:v[0],y2:v[1]},style:r({stroke:s[w]},x),silent:!0})))}}},_splitArea:function(t,e,i){var n=t.axis;if(!n.scale.isBlank()){var o=t.getModel("splitArea"),a=o.getModel("areaStyle"),s=a.get("color"),l=e.coordinateSystem.getRect(),h=n.getTicksCoords(),u=n.scale.getTicks(),c=n.toGlobalCoord(h[0]),d=n.toGlobalCoord(h[0]),f=0,p=BM(o,i),g=a.getAreaStyle();s=y(s)?s:[s];for(var m=t.get("axisLabel.showMinLabel"),v=t.get("axisLabel.showMaxLabel"),x=1;x<h.length;x++)if(!VM(n,x,p,h.length,m,v)){var _,b,w,S,M=n.toGlobalCoord(h[x]);n.isHorizontal()?(_=c,b=l.y,w=M-_,S=l.height):(_=l.x,b=d,w=l.width,S=M-b);var I=f++%s.length;this._axisGroup.add(new db({anid:"area_"+u[x],shape:{x:_,y:b,width:w,height:S},style:r({fill:s[I]},g),silent:!0})),c=_+w,d=b+S}}}});HM.extend({type:"xAxis"}),HM.extend({type:"yAxis"}),lr({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new db({shape:t.coordinateSystem.getRect(),style:r({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),tr(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),ar(v(cM,"line","circle","line")),or(v(dM,"line")),er(Pw.PROCESSOR.STATISTIC,v(function(t,e,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=t.get("sampling"),n=t.coordinateSystem;if("cartesian2d"===n.type&&i){var o=n.getBaseAxis(),a=n.getOtherAxis(o),r=o.getExtent(),s=r[1]-r[0],l=Math.round(e.count()/s);if(l>1){var h;"string"==typeof i?h=fM[i]:"function"==typeof i&&(h=i),h&&(e=e.downSample(a.dim,1/l,h,pM),t.setData(e))}}},this)},"line"));var FM="__ec_stack_";nl.getLayoutOnAxis=function(t,e){var i=[],n=t.axis;if("category"===n.type){for(var o=n.getBandWidth(),a=0;a<t.count;a++)i.push(r({bandWidth:o,axisKey:"axis0",stackId:FM+a},t));for(var s=il(i),l=[],a=0;a<t.count;a++){var h=s.axis0[FM+a];h.offsetCenter=h.offset+h.width/2,l.push(h)}return l}};var ZM=yw.extend({type:"series.__base_bar__",getInitialData:function(t,e){return Sr(t.data,this,e)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var i=e.dataToPoint(t,!0),n=this.getData(),o=n.getLayout("offset"),a=n.getLayout("size");return i[e.getBaseAxis().isHorizontal()?0:1]+=o+a/2,i}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,itemStyle:{}}});ZM.extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect"});var UM=$x([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),XM={getBarItemStyle:function(t){var e=UM(this,t);if(this.getBorderLineDash){var i=this.getBorderLineDash();i&&(e.lineDash=i)}return e}},jM=["itemStyle","normal","barBorderWidth"];a(Lo.prototype,XM),ur({type:"bar",render:function(t,e,i){var n=t.get("coordinateSystem");return"cartesian2d"!==n&&"polar"!==n||this._render(t,e,i),this.group},dispose:N,_render:function(t,e,i){var n,o=this.group,a=t.getData(),r=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?n=l.isHorizontal():"polar"===s.type&&(n="angle"===l.dim);var h=t.isAnimationEnabled()?t:null;a.diff(r).add(function(e){if(a.hasValue(e)){var i=a.getItemModel(e),r=YM[s.type](a,e,i),l=qM[s.type](a,e,i,r,n,h);a.setItemGraphicEl(e,l),o.add(l),ll(l,a,e,i,r,t,n,"polar"===s.type)}}).update(function(e,i){var l=r.getItemGraphicEl(i);if(a.hasValue(e)){var u=a.getItemModel(e),c=YM[s.type](a,e,u);l?wo(l,{shape:c},h,e):l=qM[s.type](a,e,u,c,n,h,!0),a.setItemGraphicEl(e,l),o.add(l),ll(l,a,e,u,c,t,n,"polar"===s.type)}else o.remove(l)}).remove(function(t){var e=r.getItemGraphicEl(t);"cartesian2d"===s.type?e&&rl(t,h,e):e&&sl(t,h,e)}).execute(),this._data=a},remove:function(t,e){var i=this.group,n=this._data;t.get("animation")?n&&n.eachItemGraphicEl(function(e){"sector"===e.type?sl(e.dataIndex,t,e):rl(e.dataIndex,t,e)}):i.removeAll()}});var qM={cartesian2d:function(t,e,i,n,o,r,s){var l=new db({shape:a({},n)});if(r){var h=l.shape,u=o?"height":"width",c={};h[u]=0,c[u]=n[u],Tb[s?"updateProps":"initProps"](l,{shape:c},r,e)}return l},polar:function(t,e,i,n,o,r,s){var l=new rb({shape:a({},n)});if(r){var h=l.shape,u=o?"r":"endAngle",c={};h[u]=o?0:n.startAngle,c[u]=n[u],Tb[s?"updateProps":"initProps"](l,{shape:c},r,e)}return l}},YM={cartesian2d:function(t,e,i){var n=t.getItemLayout(e),o=hl(i,n),a=n.width>0?1:-1,r=n.height>0?1:-1;return{x:n.x+a*o/2,y:n.y+r*o/2,width:n.width-a*o,height:n.height-r*o}},polar:function(t,e,i){var n=t.getItemLayout(e);return{cx:n.cx,cy:n.cy,r0:n.r0,r:n.r,startAngle:n.startAngle,endAngle:n.endAngle}}};or(v(nl,"bar")),ar(function(t){t.eachSeriesByType("bar",function(t){t.getData().setVisual("legendSymbol","roundRect")})});var $M={updateSelectedMap:function(t){this._targetList=t.slice(),this._selectTargetMap=p(t||[],function(t,e){return t.set(e.name,e),t},z())},select:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),i&&(i.selected=!0)},unSelect:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);i&&(i.selected=!1)},toggleSelected:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=i)return this[i.selected?"unSelect":"select"](t,e),i.selected},isSelected:function(t,e){var i=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return i&&i.selected}},KM=hr({type:"series.pie",init:function(t){KM.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(t.data),this._defaultLabelLine(t)},mergeOption:function(t){KM.superCall(this,"mergeOption",t),this.updateSelectedMap(this.option.data)},getInitialData:function(t,e){var i=xr(["value"],t.data),n=new aS(i,this);return n.initData(t.data),n},getDataParams:function(t){var e=this.getData(),i=KM.superCall(this,"getDataParams",t),n=[];return e.each("value",function(t){n.push(t)}),i.percent=Di(n,t,e.hostModel.get("percentPrecision")),i.$vars.push("percent"),i},_defaultLabelLine:function(t){zo(t.labelLine,["show"]);var e=t.labelLine.normal,i=t.labelLine.emphasis;e.show=e.show&&t.label.normal.show,i.show=i.show&&t.label.emphasis.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{normal:{rotate:!1,show:!0,position:"outer"},emphasis:{}},labelLine:{normal:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderWidth:1},emphasis:{}},animationType:"expansion",animationEasing:"cubicOut",data:[]}});u(KM,$M);var JM=dl.prototype;JM.updateData=function(t,e,i){function n(){s.stopAnimation(!0),s.animateTo({shape:{r:u.r+l.get("hoverOffset")}},300,"elasticOut")}function o(){s.stopAnimation(!0),s.animateTo({shape:{r:u.r}},300,"elasticOut")}var s=this.childAt(0),l=t.hostModel,h=t.getItemModel(e),u=t.getItemLayout(e),c=a({},u);c.label=null,i?(s.setShape(c),"scale"===l.getShallow("animationType")?(s.shape.r=u.r0,So(s,{shape:{r:u.r}},l,e)):(s.shape.endAngle=u.startAngle,wo(s,{shape:{endAngle:u.endAngle}},l,e))):wo(s,{shape:c},l,e);var d=h.getModel("itemStyle"),f=t.getItemVisual(e,"color");s.useStyle(r({lineJoin:"bevel",fill:f},d.getModel("normal").getItemStyle())),s.hoverStyle=d.getModel("emphasis").getItemStyle();var p=h.getShallow("cursor");p&&s.attr("cursor",p),cl(this,t.getItemLayout(e),h.get("selected"),l.get("selectedOffset"),l.get("animation")),s.off("mouseover").off("mouseout").off("emphasis").off("normal"),h.get("hoverAnimation")&&l.isAnimationEnabled()&&s.on("mouseover",n).on("mouseout",o).on("emphasis",n).on("normal",o),this._updateLabel(t,e),uo(this)},JM._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),o=t.hostModel,a=t.getItemModel(e),r=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");wo(i,{shape:{points:r.linePoints||[[r.x,r.y],[r.x,r.y],[r.x,r.y]]}},o,e),wo(n,{style:{x:r.x,y:r.y}},o,e),n.attr({rotation:r.rotation,origin:[r.x,r.y],z2:10});var l=a.getModel("label.normal"),h=a.getModel("label.emphasis"),u=a.getModel("labelLine.normal"),c=a.getModel("labelLine.emphasis"),s=t.getItemVisual(e,"color");co(n.style,n.hoverStyle={},l,h,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!r.inside},{textAlign:r.textAlign,textVerticalAlign:r.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),n.ignore=n.normalIgnore=!l.get("show"),n.hoverIgnore=!h.get("show"),i.ignore=i.normalIgnore=!u.get("show"),i.hoverIgnore=!c.get("show"),i.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),i.setStyle(u.getModel("lineStyle").getLineStyle()),i.hoverStyle=c.getModel("lineStyle").getLineStyle();var d=u.get("smooth");d&&!0===d&&(d=.4),i.setShape({smooth:d})},h(dl,jy);Ta.extend({type:"pie",init:function(){var t=new jy;this._sectorGroup=t},render:function(t,e,i,n){if(!n||n.from!==this.uid){var o=t.getData(),a=this._data,r=this.group,s=e.get("animation"),l=!a,h=t.get("animationType"),u=v(ul,this.uid,t,s,i),c=t.get("selectedMode");if(o.diff(a).add(function(t){var e=new dl(o,t);l&&"scale"!==h&&e.eachChild(function(t){t.stopAnimation(!0)}),c&&e.on("click",u),o.setItemGraphicEl(t,e),r.add(e)}).update(function(t,e){var i=a.getItemGraphicEl(e);i.updateData(o,t),i.off("click"),c&&i.on("click",u),r.add(i),o.setItemGraphicEl(t,i)}).remove(function(t){var e=a.getItemGraphicEl(t);r.remove(e)}).execute(),s&&l&&o.count()>0&&"scale"!==h){var d=o.getItemLayout(0),f=Math.max(i.getWidth(),i.getHeight())/2,p=m(r.removeClipPath,r);r.setClipPath(this._createClipPath(d.cx,d.cy,f,d.startAngle,d.clockwise,p,t))}this._data=o}},dispose:function(){},_createClipPath:function(t,e,i,n,o,a,r){var s=new rb({shape:{cx:t,cy:e,r0:0,r:i,startAngle:n,endAngle:n,clockwise:o}});return So(s,{shape:{endAngle:n+(o?1:-1)*Math.PI*2}},r,a),s},containPoint:function(t,e){var i=e.getData().getItemLayout(0);if(i){var n=t[0]-i.cx,o=t[1]-i.cy,a=Math.sqrt(n*n+o*o);return a<=i.r&&a>=i.r0}}});var QM=function(t,e){d(e,function(e){e.update="updateView",ir(e,function(i,n){var o={};return n.eachComponent({mainType:"series",subType:t,query:i},function(t){t[e.method]&&t[e.method](i.name,i.dataIndex);var n=t.getData();n.each(function(e){var i=n.getName(e);o[i]=t.isSelected(i)||!1})}),{name:i.name,selected:o}})})},tI=function(t,e){var i={};e.eachRawSeriesByType(t,function(t){var n=t.getRawData(),o={};if(!e.isSeriesFiltered(t)){var a=t.getData();a.each(function(t){var e=a.getRawIndex(t);o[e]=t}),n.each(function(e){var r=o[e],s=null!=r&&a.getItemVisual(r,"color",!0);if(s)n.setItemVisual(e,"color",s);else{var l=n.getItemModel(e).get("itemStyle.normal.color")||t.getColorFromPalette(n.getName(e),i);n.setItemVisual(e,"color",l),null!=r&&a.setItemVisual(r,"color",l)}})}})},eI=function(t,e,i,n){var o,a,r=t.getData(),s=[],l=!1;r.each(function(i){var n,h,u,c,d=r.getItemLayout(i),f=r.getItemModel(i),p=f.getModel("label.normal"),g=p.get("position")||f.get("label.emphasis.position"),m=f.getModel("labelLine.normal"),v=m.get("length"),y=m.get("length2"),x=(d.startAngle+d.endAngle)/2,_=Math.cos(x),b=Math.sin(x);o=d.cx,a=d.cy;var w="inside"===g||"inner"===g;if("center"===g)n=d.cx,h=d.cy,c="center";else{var S=(w?(d.r+d.r0)/2*_:d.r*_)+o,M=(w?(d.r+d.r0)/2*b:d.r*b)+a;if(n=S+3*_,h=M+3*b,!w){var I=S+_*(v+e-d.r),T=M+b*(v+e-d.r),A=I+(_<0?-1:1)*y,C=T;n=A+(_<0?-5:5),h=C,u=[[S,M],[I,T],[A,C]]}c=w?"center":_>0?"left":"right"}var D=p.getFont(),L=p.get("rotate")?_<0?-x+Math.PI:-x:0,k=de(t.getFormattedLabel(i,"normal")||r.getName(i),D,c,"top");l=!!L,d.label={x:n,y:h,position:g,height:k.height,len:v,len2:y,linePoints:u,textAlign:c,verticalAlign:"middle",rotation:L,inside:w},w||s.push(d.label)}),!l&&t.get("avoidLabelOverlap")&&pl(s,o,a,e,i,n)},iI=2*Math.PI,nI=Math.PI/180,oI=function(t,e){var i=e.findComponents({mainType:"legend"});i&&i.length&&e.eachSeriesByType(t,function(t){var e=t.getData();e.filterSelf(function(t){for(var n=e.getName(t),o=0;o<i.length;o++)if(!i[o].isSelected(n))return!1;return!0},this)},this)};QM("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),ar(v(tI,"pie")),or(v(function(t,e,i,n){e.eachSeriesByType(t,function(t){var e=t.get("center"),n=t.get("radius");y(n)||(n=[0,n]),y(e)||(e=[e,e]);var o=i.getWidth(),a=i.getHeight(),r=Math.min(o,a),s=Si(e[0],o),l=Si(e[1],a),h=Si(n[0],r/2),u=Si(n[1],r/2),c=t.getData(),d=-t.get("startAngle")*nI,f=t.get("minAngle")*nI,p=0;c.each("value",function(t){!isNaN(t)&&p++});var g=c.getSum("value"),m=Math.PI/(g||p)*2,v=t.get("clockwise"),x=t.get("roseType"),_=t.get("stillShowZeroSum"),b=c.getDataExtent("value");b[0]=0;var w=iI,S=0,M=d,I=v?1:-1;if(c.each("value",function(t,e){var i;if(isNaN(t))c.setItemLayout(e,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:v,cx:s,cy:l,r0:h,r:x?NaN:u});else{(i="area"!==x?0===g&&_?m:t*m:iI/p)<f?(i=f,w-=f):S+=t;var n=M+I*i;c.setItemLayout(e,{angle:i,startAngle:M,endAngle:n,clockwise:v,cx:s,cy:l,r0:h,r:x?wi(t,b,[h,u]):u}),M=n}},!0),w<iI&&p)if(w<=.001){var T=iI/p;c.each("value",function(t,e){if(!isNaN(t)){var i=c.getItemLayout(e);i.angle=T,i.startAngle=d+I*e*T,i.endAngle=d+I*(e+1)*T}})}else m=w/S,M=d,c.each("value",function(t,e){if(!isNaN(t)){var i=c.getItemLayout(e),n=i.angle===f?f:t*m;i.startAngle=M,i.endAngle=M+I*n,M+=I*n}});eI(t,u,o,a)})},"pie")),er(v(oI,"pie")),yw.extend({type:"series.scatter",dependencies:["grid","polar","geo","singleAxis","calendar"],getInitialData:function(t,e){return Sr(t.data,this,e)},brushSelector:"point",defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{normal:{opacity:.8}}}});var aI=Zn({shape:{points:null,sizes:null},symbolProxy:null,buildPath:function(t,e){for(var i=e.points,n=e.sizes,o=this.symbolProxy,a=o.shape,r=0;r<i.length;r++){var s=i[r];if(!isNaN(s[0])&&!isNaN(s[1])){var l=n[r];l[0]<4?t.rect(s[0]-l[0]/2,s[1]-l[1]/2,l[0],l[1]):(a.x=s[0]-l[0]/2,a.y=s[1]-l[1]/2,a.width=l[0],a.height=l[1],o.buildPath(t,a,!0))}}},findDataIndex:function(t,e){for(var i=this.shape,n=i.points,o=i.sizes,a=n.length-1;a>=0;a--){var r=n[a],s=o[a],l=r[0]-s[0]/2,h=r[1]-s[1]/2;if(t>=l&&e>=h&&t<=l+s[0]&&e<=h+s[1])return a}return-1}}),rI=gl.prototype;rI.updateData=function(t){this.group.removeAll();var e=this._symbolEl,i=t.hostModel;e.setShape({points:t.mapArray(t.getItemLayout),sizes:t.mapArray(function(e){var i=t.getItemVisual(e,"symbolSize");return i instanceof Array||(i=[i,i]),i})}),e.symbolProxy=Hr(t.getVisual("symbol"),0,0,0,0),e.setColor=e.symbolProxy.setColor,e.useStyle(i.getModel("itemStyle.normal").getItemStyle(["color"]));var n=t.getVisual("color");n&&e.setColor(n),e.seriesIndex=i.seriesIndex,e.on("mousemove",function(t){e.dataIndex=null;var i=e.findDataIndex(t.offsetX,t.offsetY);i>=0&&(e.dataIndex=i)}),this.group.add(e)},rI.updateLayout=function(t){var e=t.getData();this._symbolEl.setShape({points:e.mapArray(e.getItemLayout)})},rI.remove=function(){this.group.removeAll()},ur({type:"scatter",init:function(){this._normalSymbolDraw=new ts,this._largeSymbolDraw=new gl},render:function(t,e,i){var n=t.getData(),o=this._largeSymbolDraw,a=this._normalSymbolDraw,r=this.group,s=t.get("large")&&n.count()>t.get("largeThreshold")?o:a;this._symbolDraw=s,s.updateData(n),r.add(s.group),r.remove(s===o?a.group:o.group)},updateLayout:function(t){this._symbolDraw.updateLayout(t)},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(e,!0)},dispose:function(){}}),ar(v(cM,"scatter","circle",null)),or(v(dM,"scatter")),h(ml,US),vl.prototype.getIndicatorAxes=function(){return this._indicatorAxes},vl.prototype.dataToPoint=function(t,e){var i=this._indicatorAxes[e];return this.coordToPoint(i.dataToCoord(t),e)},vl.prototype.coordToPoint=function(t,e){var i=this._indicatorAxes[e].angle;return[this.cx+t*Math.cos(i),this.cy-t*Math.sin(i)]},vl.prototype.pointToData=function(t){var e=t[0]-this.cx,i=t[1]-this.cy,n=Math.sqrt(e*e+i*i);e/=n,i/=n;for(var o,a=Math.atan2(-i,e),r=1/0,s=-1,l=0;l<this._indicatorAxes.length;l++){var h=this._indicatorAxes[l],u=Math.abs(a-h.angle);u<r&&(o=h,s=l,r=u)}return[s,+(o&&o.coodToData(n))]},vl.prototype.resize=function(t,e){var i=t.get("center"),n=e.getWidth(),o=e.getHeight(),a=Math.min(n,o)/2;this.cx=Si(i[0],n),this.cy=Si(i[1],o),this.startAngle=t.get("startAngle")*Math.PI/180,this.r=Si(t.get("radius"),a),d(this._indicatorAxes,function(t,e){t.setExtent(0,this.r);var i=this.startAngle+e*Math.PI*2/this._indicatorAxes.length;i=Math.atan2(Math.sin(i),Math.cos(i)),t.angle=i},this)},vl.prototype.update=function(t,e){function i(t){var e=Math.pow(10,Math.floor(Math.log(t)/Math.LN10)),i=t/e;return 2===i?i=5:i*=2,i*e}var n=this._indicatorAxes,o=this._model;d(n,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeriesByType("radar",function(e,i){if("radar"===e.get("coordinateSystem")&&t.getComponent("radar",e.get("radarIndex"))===o){var a=e.getData();d(n,function(t){t.scale.unionExtentFromData(a,t.dim)})}},this);var a=o.get("splitNumber");d(n,function(t,e){var n=zr(t.scale,t.model);Nr(t.scale,t.model);var o=t.model,r=t.scale,s=o.getMin(),l=o.getMax(),h=r.getInterval();if(null!=s&&null!=l)r.setExtent(+s,+l),r.setInterval((l-s)/a);else if(null!=s){var u;do{u=s+h*a,r.setExtent(+s,u),r.setInterval(h),h=i(h)}while(u<n[1]&&isFinite(u)&&isFinite(n[1]))}else if(null!=l){var c;do{c=l-h*a,r.setExtent(c,+l),r.setInterval(h),h=i(h)}while(c>n[0]&&isFinite(c)&&isFinite(n[0]))}else{r.getTicks().length-1>a&&(h=i(h));var d=Math.round((n[0]+n[1])/2/h)*h,f=Math.round(a/2);r.setExtent(Mi(d-f*h),Mi(d+(a-f)*h)),r.setInterval(h)}})},vl.dimensions=[],vl.create=function(t,e){var i=[];return t.eachComponent("radar",function(n){var o=new vl(n,t,e);i.push(o),n.coordinateSystem=o}),t.eachSeriesByType("radar",function(t){"radar"===t.get("coordinateSystem")&&(t.coordinateSystem=i[t.get("radarIndex")||0])}),i},ua.register("radar",vl);var sI=yM.valueAxis,lI=(sr({type:"radar",optionUpdated:function(){var t=this.get("boundaryGap"),e=this.get("splitNumber"),o=this.get("scale"),s=this.get("axisLine"),l=this.get("axisTick"),h=this.get("axisLabel"),u=this.get("name"),c=this.get("name.show"),d=this.get("name.formatter"),p=this.get("nameGap"),g=this.get("triggerEvent"),m=f(this.get("indicator")||[],function(f){null!=f.max&&f.max>0&&!f.min?f.min=0:null!=f.min&&f.min<0&&!f.max&&(f.max=0);var m=u;if(null!=f.color&&(m=r({color:f.color},u)),f=n(i(f),{boundaryGap:t,splitNumber:e,scale:o,axisLine:s,axisTick:l,axisLabel:h,name:f.text,nameLocation:"end",nameGap:p,nameTextStyle:m,triggerEvent:g},!1),c||(f.name=""),"string"==typeof d){var v=f.name;f.name=d.replace("{value}",null!=v?v:"")}else"function"==typeof d&&(f.name=d(f.name,f));var y=a(new Lo(f,null,this.ecModel),zS);return y.mainType="radar",y.componentIndex=this.componentIndex,y},this);this.getIndicatorModels=function(){return m}},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"75%",startAngle:90,name:{show:!0},boundaryGap:[0,0],splitNumber:5,nameGap:15,scale:!1,shape:"polygon",axisLine:n({lineStyle:{color:"#bbb"}},sI.axisLine),axisLabel:yl(sI.axisLabel,!1),axisTick:yl(sI.axisTick,!1),splitLine:yl(sI.splitLine,!0),splitArea:yl(sI.splitArea,!0),indicator:[]}}),["axisLine","axisTickLabel","axisName"]);lr({type:"radar",render:function(t,e,i){this.group.removeAll(),this._buildAxes(t),this._buildSplitLineAndArea(t)},_buildAxes:function(t){var e=t.coordinateSystem;d(f(e.getIndicatorAxes(),function(t){return new DM(t.model,{position:[e.cx,e.cy],rotation:t.angle,labelDirection:-1,tickDirection:-1,nameDirection:1})}),function(t){d(lI,t.add,t),this.group.add(t.getGroup())},this)},_buildSplitLineAndArea:function(t){function e(t,e,i){var n=i%e.length;return t[n]=t[n]||[],n}var i=t.coordinateSystem,n=i.getIndicatorAxes();if(n.length){var o=t.get("shape"),a=t.getModel("splitLine"),s=t.getModel("splitArea"),l=a.getModel("lineStyle"),h=s.getModel("areaStyle"),u=a.get("show"),c=s.get("show"),p=l.get("color"),g=h.get("color");p=y(p)?p:[p],g=y(g)?g:[g];var m=[],v=[];if("circle"===o)for(var x=n[0].getTicksCoords(),_=i.cx,b=i.cy,w=0;w<x.length;w++)u&&m[C=e(m,p,w)].push(new nb({shape:{cx:_,cy:b,r:x[w]}})),c&&w<x.length-1&&v[C=e(v,g,w)].push(new sb({shape:{cx:_,cy:b,r0:x[w],r:x[w+1]}}));else for(var S,M=f(n,function(t,e){var n=t.getTicksCoords();return S=null==S?n.length-1:Math.min(n.length-1,S),f(n,function(t){return i.coordToPoint(t,e)})}),I=[],w=0;w<=S;w++){for(var T=[],A=0;A<n.length;A++)T.push(M[A][w]);if(T[0]&&T.push(T[0].slice()),u&&m[C=e(m,p,w)].push(new cb({shape:{points:T}})),c&&I){var C=e(v,g,w-1);v[C].push(new ub({shape:{points:T.concat(I)}}))}I=T.slice().reverse()}var D=l.getLineStyle(),L=h.getAreaStyle();d(v,function(t,e){this.group.add(Ib(t,{style:r({stroke:"none",fill:g[e%g.length]},L),silent:!0}))},this),d(m,function(t,e){this.group.add(Ib(t,{style:r({fill:"none",stroke:p[e%p.length]},D),silent:!0}))},this)}}});var hI=yw.extend({type:"series.radar",dependencies:["radar"],init:function(t){hI.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()}},getInitialData:function(t,e){var i=t.data||[],n=xr([],i,{extraPrefix:"indicator_",extraFromZero:!0}),o=new aS(n,this);return o.initData(i),o},formatTooltip:function(t){var e=this.getRawValue(t),i=this.coordinateSystem.getIndicatorAxes(),n=this.getData().getName(t);return Gi(""===n?this.name:n)+"<br/>"+f(i,function(t,i){return Gi(t.name+" : "+e[i])}).join("<br />")},defaultOption:{zlevel:0,z:2,coordinateSystem:"radar",legendHoverLink:!0,radarIndex:0,lineStyle:{normal:{width:2,type:"solid"}},label:{normal:{position:"top"}},symbol:"emptyCircle",symbolSize:4}});ur({type:"radar",render:function(t,e,n){function o(t,e){var i=t.getItemVisual(e,"symbol")||"circle",n=t.getItemVisual(e,"color");if("none"!==i){var o=xl(t.getItemVisual(e,"symbolSize")),a=Hr(i,-1,-1,2,2,n);return a.attr({style:{strokeNoScale:!0},z2:100,scale:[o[0]/2,o[1]/2]}),a}}function a(e,i,n,a,r,s){n.removeAll();for(var l=0;l<i.length-1;l++){var h=o(a,r);h&&(h.__dimIdx=l,e[l]?(h.attr("position",e[l]),Tb[s?"initProps":"updateProps"](h,{position:i[l]},t,r)):h.attr("position",i[l]),n.add(h))}}function s(t){return f(t,function(t){return[l.cx,l.cy]})}var l=t.coordinateSystem,h=this.group,u=t.getData(),c=this._data;u.diff(c).add(function(e){var i=u.getItemLayout(e);if(i){var n=new ub,o=new cb,r={shape:{points:i}};n.shape.points=s(i),o.shape.points=s(i),So(n,r,t,e),So(o,r,t,e);var l=new jy,h=new jy;l.add(o),l.add(n),l.add(h),a(o.shape.points,i,h,u,e,!0),u.setItemGraphicEl(e,l)}}).update(function(e,i){var n=c.getItemGraphicEl(i),o=n.childAt(0),r=n.childAt(1),s=n.childAt(2),l={shape:{points:u.getItemLayout(e)}};l.shape.points&&(a(o.shape.points,l.shape.points,s,u,e,!1),wo(o,l,t),wo(r,l,t),u.setItemGraphicEl(e,n))}).remove(function(t){h.remove(c.getItemGraphicEl(t))}).execute(),u.eachItemGraphicEl(function(t,e){function n(){l.attr("ignore",m)}function o(){l.attr("ignore",g)}var a=u.getItemModel(e),s=t.childAt(0),l=t.childAt(1),c=t.childAt(2),d=u.getItemVisual(e,"color");h.add(t),s.useStyle(r(a.getModel("lineStyle.normal").getLineStyle(),{fill:"none",stroke:d})),s.hoverStyle=a.getModel("lineStyle.emphasis").getLineStyle();var f=a.getModel("areaStyle.normal"),p=a.getModel("areaStyle.emphasis"),g=f.isEmpty()&&f.parentModel.isEmpty(),m=p.isEmpty()&&p.parentModel.isEmpty();m=m&&g,l.ignore=g,l.useStyle(r(f.getAreaStyle(),{fill:d,opacity:.7})),l.hoverStyle=p.getAreaStyle();var v=a.getModel("itemStyle.normal").getItemStyle(["color"]),y=a.getModel("itemStyle.emphasis").getItemStyle(),x=a.getModel("label.normal"),_=a.getModel("label.emphasis");c.eachChild(function(t){t.setStyle(v),t.hoverStyle=i(y),co(t.style,t.hoverStyle,x,_,{labelFetcher:u.hostModel,labelDataIndex:e,labelDimIndex:t.__dimIdx,defaultText:u.get(u.dimensions[t.__dimIdx],e),autoColor:d,isRectText:!0})}),t.off("mouseover").off("mouseout").off("normal").off("emphasis"),t.on("emphasis",n).on("mouseover",n).on("normal",o).on("mouseout",o),uo(t)}),this._data=u},remove:function(){this.group.removeAll(),this._data=null},dispose:function(){}});ar(v(tI,"radar")),ar(v(cM,"radar","circle",null)),or(function(t){t.eachSeriesByType("radar",function(t){var e=t.getData(),i=[],n=t.coordinateSystem;if(n){for(var o=0;o<n.getIndicatorAxes().length;o++){var a=e.dimensions[o];e.each(a,function(t,e){i[e]=i[e]||[],i[e][o]=n.dataToPoint(t,o)})}e.each(function(t){i[t][0]&&i[t].push(i[t][0].slice()),e.setItemLayout(t,i[t])})}})}),er(v(oI,"radar")),tr(function(t){var e=t.polar;if(e){y(e)||(e=[e]);var i=[];d(e,function(e,n){e.indicator?(e.type&&!e.shape&&(e.shape=e.type),t.radar=t.radar||[],y(t.radar)||(t.radar=[t.radar]),t.radar.push(e)):i.push(e)}),t.polar=i}d(t.series,function(t){t&&"radar"===t.type&&t.polarIndex&&(t.radarIndex=t.polarIndex)})});var uI=$;u(_l,by),bl.prototype={constructor:bl,type:"view",dimensions:["x","y"],setBoundingRect:function(t,e,i,n){return this._rect=new jt(t,e,i,n),this._rect},getBoundingRect:function(){return this._rect},setViewRect:function(t,e,i,n){this.transformTo(t,e,i,n),this._viewRect=new jt(t,e,i,n)},transformTo:function(t,e,i,n){var o=this.getBoundingRect(),a=this._viewTransform;a.transform=o.calculateTransform(new jt(t,e,i,n)),a.decomposeTransform(),this._updateTransform()},setCenter:function(t){t&&(this._center=t,this._updateCenterAndZoom())},setZoom:function(t){t=t||1;var e=this.zoomLimit;e&&(null!=e.max&&(t=Math.min(e.max,t)),null!=e.min&&(t=Math.max(e.min,t))),this._zoom=t,this._updateCenterAndZoom()},getDefaultCenter:function(){var t=this.getBoundingRect();return[t.x+t.width/2,t.y+t.height/2]},getCenter:function(){return this._center||this.getDefaultCenter()},getZoom:function(){return this._zoom||1},getRoamTransform:function(){return this._roamTransform},_updateCenterAndZoom:function(){var t=this._viewTransform.getLocalTransform(),e=this._roamTransform,i=this.getDefaultCenter(),n=this.getCenter(),o=this.getZoom();n=$([],n,t),i=$([],i,t),e.origin=n,e.position=[i[0]-n[0],i[1]-n[1]],e.scale=[o,o],this._updateTransform()},_updateTransform:function(){var t=this._roamTransform,e=this._viewTransform;e.parent=t,t.updateTransform(),e.updateTransform(),e.transform&&rt(this.transform||(this.transform=[]),e.transform),this.transform?(this.invTransform=this.invTransform||[],ct(this.invTransform,this.transform)):this.invTransform=null,this.decomposeTransform()},getViewRect:function(){return this._viewRect},getViewRectAfterRoam:function(){var t=this.getBoundingRect().clone();return t.applyTransform(this.transform),t},dataToPoint:function(t){var e=this.transform;return e?uI([],t,e):[t[0],t[1]]},pointToData:function(t){var e=this.invTransform;return e?uI([],t,e):[t[0],t[1]]},convertToPixel:v(wl,"dataToPoint"),convertFromPixel:v(wl,"pointToData"),containPoint:function(t){return this.getViewRectAfterRoam().contain(t[0],t[1])}},u(bl,by);for(var cI=[126,25],dI=[[[0,3.5],[7,11.2],[15,11.9],[30,7],[42,.7],[52,.7],[56,7.7],[59,.7],[64,.7],[64,0],[5,0],[0,3.5]],[[13,16.1],[19,14.7],[16,21.7],[11,23.1],[13,16.1]],[[12,32.2],[14,38.5],[15,38.5],[13,32.2],[12,32.2]],[[16,47.6],[12,53.2],[13,53.2],[18,47.6],[16,47.6]],[[6,64.4],[8,70],[9,70],[8,64.4],[6,64.4]],[[23,82.6],[29,79.8],[30,79.8],[25,82.6],[23,82.6]],[[37,70.7],[43,62.3],[44,62.3],[39,70.7],[37,70.7]],[[48,51.1],[51,45.5],[53,45.5],[50,51.1],[48,51.1]],[[51,35],[51,28.7],[53,28.7],[53,35],[51,35]],[[52,22.4],[55,17.5],[56,17.5],[53,22.4],[52,22.4]],[[58,12.6],[62,7],[63,7],[60,12.6],[58,12.6]],[[0,3.5],[0,93.1],[64,93.1],[64,0],[63,0],[63,92.4],[1,92.4],[1,3.5],[0,3.5]]],fI=0;fI<dI.length;fI++)for(var pI=0;pI<dI[fI].length;pI++)dI[fI][pI][0]/=10.5,dI[fI][pI][1]/=-14,dI[fI][pI][0]+=cI[0],dI[fI][pI][1]+=cI[1];var gI={"南海诸岛":[32,80],"广东":[0,-10],"香港":[10,5],"澳门":[-10,10],"天津":[5,5]},mI={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]},vI=[[[123.45165252685547,25.73527164402261],[123.49731445312499,25.73527164402261],[123.49731445312499,25.750734064600884],[123.45165252685547,25.750734064600884],[123.45165252685547,25.73527164402261]]],yI=[function(t){"china"===t.map&&t.regions.push(new Xr("南海诸岛",f(dI,function(t){return{type:"polygon",exterior:t}}),cI))},function(t){d(t.regions,function(t){var e=gI[t.name];if(e){var i=t.center;i[0]+=e[0]/10.5,i[1]+=-e[1]/14}})},function(t){d(t.regions,function(t){var e=mI[t.name];if(e){var i=t.center;i[0]=e[0],i[1]=e[1]}})},function(t){if("china"===t.map)for(var e=0,i=t.regions.length;e<i;++e)"台湾"===t.regions[e].name&&t.regions[e].geometries.push({type:"polygon",exterior:vI[0]})}];Sl.prototype={constructor:Sl,type:"geo",dimensions:["lng","lat"],containCoord:function(t){for(var e=this.regions,i=0;i<e.length;i++)if(e[i].contain(t))return!0;return!1},loadGeoJson:function(t,e,i){try{this.regions=t?jS(t):[]}catch(t){throw"Invalid geoJson format\n"+t.message}e=e||{},i=i||{};for(var n=this.regions,o=z(),a=0;a<n.length;a++){var r=n[a].name;r=i.hasOwnProperty(r)?i[r]:r,n[a].name=r,o.set(r,n[a]),this.addGeoCoord(r,n[a].center);var s=e[r];s&&n[a].transformTo(s.left,s.top,s.width,s.height)}this._regionsMap=o,this._rect=null,d(yI,function(t){t(this)},this)},transformTo:function(t,e,i,n){var o=this.getBoundingRect();(o=o.clone()).y=-o.y-o.height;var a=this._viewTransform;a.transform=o.calculateTransform(new jt(t,e,i,n)),a.decomposeTransform();var r=a.scale;r[1]=-r[1],a.updateTransform(),this._updateTransform()},getRegion:function(t){return this._regionsMap.get(t)},getRegionByCoord:function(t){for(var e=this.regions,i=0;i<e.length;i++)if(e[i].contain(t))return e[i]},addGeoCoord:function(t,e){this._nameCoordMap.set(t,e)},getGeoCoord:function(t){return this._nameCoordMap.get(t)},getBoundingRect:function(){if(this._rect)return this._rect;for(var t,e=this.regions,i=0;i<e.length;i++){var n=e[i].getBoundingRect();(t=t||n.clone()).union(n)}return this._rect=t||new jt(0,0,0,0)},dataToPoint:function(t){if("string"==typeof t&&(t=this.getGeoCoord(t)),t)return bl.prototype.dataToPoint.call(this,t)},convertToPixel:v(Ml,"dataToPoint"),convertFromPixel:v(Ml,"pointToData")},u(Sl,bl);var xI={dimensions:Sl.prototype.dimensions,create:function(t,e){var i=[];t.eachComponent("geo",function(t,n){var o=t.get("map"),a=cr(o),r=new Sl(o+n,o,a&&a.geoJson,a&&a.specialAreas,t.get("nameMap"));r.zoomLimit=t.get("scaleLimit"),i.push(r),Tl(r,t),t.coordinateSystem=r,r.model=t,r.resize=Il,r.resize(t,e)}),t.eachSeries(function(t){if("geo"===t.get("coordinateSystem")){var e=t.get("geoIndex")||0;t.coordinateSystem=i[e]}});var n={};return t.eachSeriesByType("map",function(t){if(!t.getHostGeoModel()){var e=t.getMapType();n[e]=n[e]||[],n[e].push(t)}}),d(n,function(t,n){var a=cr(n),r=f(t,function(t){return t.get("nameMap")}),s=new Sl(n,n,a&&a.geoJson,a&&a.specialAreas,o(r));s.zoomLimit=I.apply(null,f(t,function(t){return t.get("scaleLimit")})),i.push(s),s.resize=Il,s.resize(t[0],e),d(t,function(t){t.coordinateSystem=s,Tl(s,t)})}),i},getFilledRegions:function(t,e,i){var n=(t||[]).slice();i=i||{};var o=cr(e),a=o&&o.geoJson;if(!a)return t;for(var r=z(),s=a.features,l=0;l<n.length;l++)r.set(n[l].name,n[l]);for(l=0;l<s.length;l++){var h=s[l].properties.name;r.get(h)||(i.hasOwnProperty(h)&&(h=i[h]),n.push({name:h}))}return n}};nr("geo",xI);var _I=yw.extend({type:"series.map",dependencies:["geo"],layoutMode:"box",needsDrawMap:!1,seriesGroup:[],init:function(t){this._fillOption(t,this.getMapType()),_I.superApply(this,"init",arguments),this.updateSelectedMap(t.data)},getInitialData:function(t){var e=xr(["value"],t.data||[]),i=new aS(e,this);return i.initData(t.data),i},mergeOption:function(t){this._fillOption(t,this.getMapType()),_I.superApply(this,"mergeOption",arguments),this.updateSelectedMap(this.option.data)},getHostGeoModel:function(){var t=this.option.geoIndex;return null!=t?this.dependentModels.geo[t]:null},getMapType:function(){return(this.getHostGeoModel()||this).option.map},_fillOption:function(t,e){t.data=xI.getFilledRegions(t.data,e,t.nameMap)},getRawValue:function(t){return this.getData().get("value",t)},getRegionModel:function(t){var e=this.getData();return e.getItemModel(e.indexOfName(t))},formatTooltip:function(t){for(var e=this.getData(),i=Vi(this.getRawValue(t)),n=e.getName(t),o=this.seriesGroup,a=[],r=0;r<o.length;r++){var s=o[r].originalData.indexOfName(n);isNaN(o[r].originalData.get("value",s))||a.push(Gi(o[r].name))}return a.join(", ")+"<br />"+Gi(n+" : "+i)},getTooltipPosition:function(t){if(null!=t){var e=this.getData().getName(t),i=this.coordinateSystem,n=i.getRegion(e);return n&&i.dataToPoint(n.center)}},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t},defaultOption:{zlevel:0,z:2,coordinateSystem:"geo",map:"",left:"center",top:"center",aspectScale:.75,showLegendSymbol:!0,dataRangeHoverLink:!0,boundingCoords:null,center:null,zoom:1,scaleLimit:null,label:{normal:{show:!1,color:"#000"},emphasis:{show:!0,color:"rgb(100,0,0)"}},itemStyle:{normal:{borderWidth:.5,borderColor:"#444",areaColor:"#eee"},emphasis:{areaColor:"rgba(255,215,0,0.8)"}}}});u(_I,$M);var bI="\0_ec_interaction_mutex";ir({type:"takeGlobalCursor",event:"globalCursorTaken",update:"update"},function(){}),u(kl,fy);var wI={axisPointer:1,tooltip:1,brush:1};Ul.prototype={constructor:Ul,draw:function(t,e,i,n,o){var a="geo"===t.mainType,r=t.getData&&t.getData();a&&e.eachComponent({mainType:"series",subType:"map"},function(e){r||e.getHostGeoModel()!==t||(r=e.getData())});var s=t.coordinateSystem,l=this.group,h=s.scale,u={position:s.position,scale:h};!l.childAt(0)||o?l.attr(u):wo(l,u,t),l.removeAll();var c=["itemStyle","normal"],f=["itemStyle","emphasis"],p=["label","normal"],g=["label","emphasis"],m=z();d(s.regions,function(e){var i=m.get(e.name)||m.set(e.name,new jy),n=new vb({shape:{paths:[]}});i.add(n);var o,s=(D=t.getRegionModel(e.name)||t).getModel(c),u=D.getModel(f),v=Hl(s),y=Hl(u),x=D.getModel(p),_=D.getModel(g);if(r){o=r.indexOfName(e.name);var b=r.getItemVisual(o,"color",!0);b&&(v.fill=b)}d(e.geometries,function(t){if("polygon"===t.type){n.shape.paths.push(new ub({shape:{points:t.exterior}}));for(var e=0;e<(t.interiors?t.interiors.length:0);e++)n.shape.paths.push(new ub({shape:{points:t.interiors[e]}}))}}),n.setStyle(v),n.style.strokeNoScale=!0,n.culling=!0;var w=x.get("show"),S=_.get("show"),M=r&&isNaN(r.get("value",o)),I=r&&r.getItemLayout(o);if(a||M&&(w||S)||I&&I.showLabel){var T,A=a?e.name:o;(!r||o>=0)&&(T=t);var C=new ib({position:e.center.slice(),scale:[1/h[0],1/h[1]],z2:10,silent:!0});co(C.style,C.hoverStyle={},x,_,{labelFetcher:T,labelDataIndex:A,defaultText:e.name,useInsideStyle:!1},{textAlign:"center",textVerticalAlign:"middle"}),i.add(C)}if(r)r.setItemGraphicEl(o,i);else{var D=t.getRegionModel(e.name);n.eventData={componentType:"geo",geoIndex:t.componentIndex,name:e.name,region:D&&D.option||{}}}(i.__regions||(i.__regions=[])).push(e),uo(i,y,{hoverSilentOnTouch:!!t.get("selectedMode")}),l.add(i)}),this._updateController(t,e,i),Fl(this,t,l,i,n),Zl(t,l)},remove:function(){this.group.removeAll(),this._controller.dispose(),this._controllerHost={}},_updateController:function(t,e,i){function n(){var e={type:"geoRoam",componentType:l};return e[l+"Id"]=t.id,e}var o=t.coordinateSystem,r=this._controller,s=this._controllerHost;s.zoomLimit=t.get("scaleLimit"),s.zoom=o.getZoom(),r.enable(t.get("roam")||!1);var l=t.mainType;r.off("pan").on("pan",function(t,e){this._mouseDownFlag=!1,Bl(s,t,e),i.dispatchAction(a(n(),{dx:t,dy:e}))},this),r.off("zoom").on("zoom",function(t,e,o){if(this._mouseDownFlag=!1,Gl(s,t,e,o),i.dispatchAction(a(n(),{zoom:t,originX:e,originY:o})),this._updateGroup){var r=this.group,l=r.scale;r.traverse(function(t){"text"===t.type&&t.attr("scale",[1/l[0],1/l[1]])})}},this),r.setPointerChecker(function(e,n,a){return o.getViewRectAfterRoam().contain(n,a)&&!Wl(e,i,t)})}},ur({type:"map",render:function(t,e,i,n){if(!n||"mapToggleSelect"!==n.type||n.from!==this.uid){var o=this.group;if(o.removeAll(),!t.getHostGeoModel()){if(n&&"geoRoam"===n.type&&"series"===n.componentType&&n.seriesId===t.id)(a=this._mapDraw)&&o.add(a.group);else if(t.needsDrawMap){var a=this._mapDraw||new Ul(i,!0);o.add(a.group),a.draw(t,e,i,this,n),this._mapDraw=a}else this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null;t.get("showLegendSymbol")&&e.getComponent("legend")&&this._renderSymbols(t,e,i)}}},remove:function(){this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null,this.group.removeAll()},dispose:function(){this._mapDraw&&this._mapDraw.remove(),this._mapDraw=null},_renderSymbols:function(t,e,i){var n=t.originalData,o=this.group;n.each("value",function(e,i){if(!isNaN(e)){var a=n.getItemLayout(i);if(a&&a.point){var r=a.point,s=a.offset,l=new nb({style:{fill:t.getData().getVisual("color")},shape:{cx:r[0]+9*s,cy:r[1],r:3},silent:!0,z2:s?8:10});if(!s){var h=t.mainSeries.getData(),u=n.getName(i),c=h.indexOfName(u),d=n.getItemModel(i),f=d.getModel("label.normal"),p=d.getModel("label.emphasis"),g=h.getItemGraphicEl(c),m=T(t.getFormattedLabel(i,"normal"),u),v=T(t.getFormattedLabel(i,"emphasis"),m),y=function(){var t=fo({},p,{text:p.get("show")?v:null},{isRectText:!0,useInsideStyle:!1},!0);l.style.extendFrom(t),l.__mapOriginalZ2=l.z2,l.z2+=1},x=function(){fo(l.style,f,{text:f.get("show")?m:null,textPosition:f.getShallow("position")||"bottom"},{isRectText:!0,useInsideStyle:!1}),null!=l.__mapOriginalZ2&&(l.z2=l.__mapOriginalZ2,l.__mapOriginalZ2=null)};g.on("mouseover",y).on("mouseout",x).on("emphasis",y).on("normal",x),x()}o.add(l)}}})}}),ir({type:"geoRoam",event:"geoRoam",update:"updateLayout"},function(t,e){var i=t.componentType||"series";e.eachComponent({mainType:i,query:t},function(e){var n=e.coordinateSystem;if("geo"===n.type){var o=Xl(n,t,e.get("scaleLimit"));e.setCenter&&e.setCenter(o.center),e.setZoom&&e.setZoom(o.zoom),"series"===i&&d(e.seriesGroup,function(t){t.setCenter(o.center),t.setZoom(o.zoom)})}})});or(function(t){var e={};t.eachSeriesByType("map",function(i){var n=i.getMapType();if(!i.getHostGeoModel()&&!e[n]){var o={};d(i.seriesGroup,function(e){var i=e.coordinateSystem,n=e.originalData;e.get("showLegendSymbol")&&t.getComponent("legend")&&n.each("value",function(t,e){var a=n.getName(e),r=i.getRegion(a);if(r&&!isNaN(t)){var s=o[a]||0,l=i.dataToPoint(r.center);o[a]=s+1,n.setItemLayout(e,{point:l,offset:s})}})});var a=i.getData();a.each(function(t){var e=a.getName(t),i=a.getItemLayout(t)||{};i.showLabel=!o[e],a.setItemLayout(t,i)}),e[n]=!0}})}),ar(function(t){t.eachSeriesByType("map",function(t){var e=t.get("color"),i=t.getModel("itemStyle.normal"),n=i.get("areaColor"),o=i.get("color")||e[t.seriesIndex%e.length];t.getData().setVisual({areaColor:n,color:o})})}),er(Pw.PROCESSOR.STATISTIC,function(t){var e={};t.eachSeriesByType("map",function(t){var i=t.getHostGeoModel(),n=i?"o"+i.id:"i"+t.getMapType();(e[n]=e[n]||[]).push(t)}),d(e,function(t,e){for(var i=jl(f(t,function(t){return t.getData()}),t[0].get("mapValueCalculation")),n=0;n<t.length;n++)t[n].originalData=t[n].getData();for(n=0;n<t.length;n++)t[n].seriesGroup=t,t[n].needsDrawMap=0===n&&!t[n].getHostGeoModel(),t[n].setData(i.cloneShallow()),t[n].mainSeries=t[0]})}),tr(function(t){var e=[];d(t.series,function(t){t&&"map"===t.type&&(e.push(t),t.map=t.map||t.mapType,r(t,t.mapLocation))})}),QM("map",[{type:"mapToggleSelect",event:"mapselectchanged",method:"toggleSelected"},{type:"mapSelect",event:"mapselected",method:"select"},{type:"mapUnSelect",event:"mapunselected",method:"unSelect"}]);var SI=d,MI="\0__link_datas",II="\0__link_mainData",TI=function(t,e){this.name=t||"",this.depth=0,this.height=0,this.parentNode=null,this.dataIndex=-1,this.children=[],this.viewChildren=[],this.hostTree=e};TI.prototype={constructor:TI,isRemoved:function(){return this.dataIndex<0},eachNode:function(t,e,i){"function"==typeof t&&(i=e,e=t,t=null),_(t=t||{})&&(t={order:t});var n,o=t.order||"preorder",a=this[t.attr||"children"];"preorder"===o&&(n=e.call(i,this));for(var r=0;!n&&r<a.length;r++)a[r].eachNode(t,e,i);"postorder"===o&&e.call(i,this)},updateDepthAndHeight:function(t){var e=0;this.depth=t;for(var i=0;i<this.children.length;i++){var n=this.children[i];n.updateDepthAndHeight(t+1),n.height>e&&(e=n.height)}this.height=e+1},getNodeById:function(t){if(this.getId()===t)return this;for(var e=0,i=this.children,n=i.length;e<n;e++){var o=i[e].getNodeById(t);if(o)return o}},contains:function(t){if(t===this)return!0;for(var e=0,i=this.children,n=i.length;e<n;e++){var o=i[e].contains(t);if(o)return o}},getAncestors:function(t){for(var e=[],i=t?this:this.parentNode;i;)e.push(i),i=i.parentNode;return e.reverse(),e},getValue:function(t){var e=this.hostTree.data;return e.get(e.getDimension(t||"value"),this.dataIndex)},setLayout:function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemLayout(this.dataIndex,t,e)},getLayout:function(){return this.hostTree.data.getItemLayout(this.dataIndex)},getModel:function(t){if(!(this.dataIndex<0)){var e,i=this.hostTree,n=i.data.getItemModel(this.dataIndex),o=this.getLevelModel();return o||0!==this.children.length&&(0===this.children.length||!1!==this.isExpand)||(e=this.getLeavesModel()),n.getModel(t,(o||e||i.hostModel).getModel(t))}},getLevelModel:function(){return(this.hostTree.levelModels||[])[this.depth]},getLeavesModel:function(){return this.hostTree.leavesModel},setVisual:function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemVisual(this.dataIndex,t,e)},getVisual:function(t,e){return this.hostTree.data.getItemVisual(this.dataIndex,t,e)},getRawIndex:function(){return this.hostTree.data.getRawIndex(this.dataIndex)},getId:function(){return this.hostTree.data.getId(this.dataIndex)}},ih.prototype={constructor:ih,type:"tree",eachNode:function(t,e,i){this.root.eachNode(t,e,i)},getNodeByDataIndex:function(t){var e=this.data.getRawIndex(t);return this._nodes[e]},getNodeByName:function(t){return this.root.getNodeByName(t)},update:function(){for(var t=this.data,e=this._nodes,i=0,n=e.length;i<n;i++)e[i].dataIndex=-1;for(var i=0,n=t.count();i<n;i++)e[t.getRawIndex(i)].dataIndex=i},clearLayouts:function(){this.data.clearItemLayouts()}},ih.createTree=function(t,e,i){function n(t,e){var i=t.value;r=Math.max(r,y(i)?i.length:1),a.push(t);var s=new TI(t.name,o);e?nh(s,e):o.root=s,o._nodes.push(s);var l=t.children;if(l)for(var h=0;h<l.length;h++)n(l[h],s)}var o=new ih(e,i.levels,i.leaves),a=[],r=1;n(t),o.root.updateDepthAndHeight(0);var s=xr([{name:"value"}],a,{dimCount:r}),l=new aS(s,e);return l.initData(a),ql({mainData:l,struct:o,structAttr:"tree"}),o.update(),o},yw.extend({type:"series.tree",layoutInfo:null,layoutMode:"box",getInitialData:function(t){var e={name:t.name,children:t.data},i=t.leaves||{},n={};n.leaves=i;var o=ih.createTree(e,this,n),a=0;o.eachNode("preorder",function(t){t.depth>a&&(a=t.depth)});var r=t.expandAndCollapse&&t.initialTreeDepth>=0?t.initialTreeDepth:a;return o.root.eachNode("preorder",function(t){var e=t.hostTree.data.getRawDataItem(t.dataIndex);t.isExpand=e&&null!=e.collapsed?!e.collapsed:t.depth<=r}),o.data},formatTooltip:function(t){for(var e=this.getData().tree,i=e.root.children[0],n=e.getNodeByDataIndex(t),o=n.getValue(),a=n.name;n&&n!==i;)a=n.parentNode.name+"."+a,n=n.parentNode;return Gi(a+(isNaN(o)||null==o?"":" : "+o))},defaultOption:{zlevel:0,z:2,left:"12%",top:"12%",right:"12%",bottom:"12%",layout:"orthogonal",orient:"horizontal",symbol:"emptyCircle",symbolSize:7,expandAndCollapse:!0,initialTreeDepth:2,lineStyle:{normal:{color:"#ccc",width:1.5,curveness:.5}},itemStyle:{normal:{color:"lightsteelblue",borderColor:"#c23531",borderWidth:1.5}},label:{normal:{show:!0,color:"#555"}},leaves:{label:{normal:{show:!0}}},animationEasing:"linear",animationDuration:700,animationDurationUpdate:1e3}}),ur({type:"tree",init:function(t,e){this._oldTree,this._mainGroup=new jy,this.group.add(this._mainGroup)},render:function(t,e,i,n){var o=t.getData(),a=t.layoutInfo,r=this._mainGroup,s=t.get("layout");"radial"===s?r.attr("position",[a.x+a.width/2,a.y+a.height/2]):r.attr("position",[a.x,a.y]);var l=this._data,h={expandAndCollapse:t.get("expandAndCollapse"),layout:s,orient:t.get("orient"),curvature:t.get("lineStyle.normal.curveness"),symbolRotate:t.get("symbolRotate"),symbolOffset:t.get("symbolOffset"),hoverAnimation:t.get("hoverAnimation"),useNameLabel:!0,fadeIn:!0};o.diff(l).add(function(e){vh(o,e)&&xh(o,e,null,r,t,h)}).update(function(e,i){var n=l.getItemGraphicEl(i);vh(o,e)?xh(o,e,n,r,t,h):n&&_h(o,e,n,r,t,h)}).remove(function(e){var i=l.getItemGraphicEl(e);_h(o,e,i,r,t,h)}).execute(),!0===h.expandAndCollapse&&o.eachItemGraphicEl(function(e,n){e.off("click").on("click",function(){i.dispatchAction({type:"treeExpandAndCollapse",seriesId:t.id,dataIndex:n})})}),this._data=o},dispose:function(){},remove:function(){this._mainGroup.removeAll(),this._data=null}}),ir({type:"treeExpandAndCollapse",event:"treeExpandAndCollapse",update:"update"},function(t,e){e.eachComponent({mainType:"series",subType:"tree",query:t},function(e){var i=t.dataIndex,n=e.getData().tree.getNodeByDataIndex(i);n.isExpand=!n.isExpand})});var AI=function(t,e){var i=hh(t,e);t.layoutInfo=i;var n=t.get("layout"),o=0,a=0,r=null;"radial"===n?(o=2*Math.PI,a=Math.min(i.height,i.width)/2,r=sh(function(t,e){return(t.parentNode===e.parentNode?1:2)/t.depth})):(o=i.width,a=i.height,r=sh());var s=t.getData().tree.root,l=s.children[0];oh(s),wh(l,ah,r),s.hierNode.modifier=-l.hierNode.prelim,Sh(l,rh);var h=l,u=l,c=l;Sh(l,function(t){var e=t.getLayout().x;e<h.getLayout().x&&(h=t),e>u.getLayout().x&&(u=t),t.depth>c.depth&&(c=t)});var d=h===u?1:r(h,u)/2,f=d-h.getLayout().x,p=0,g=0,m=0,v=0;"radial"===n?(p=o/(u.getLayout().x+d+f),g=a/(c.depth-1||1),Sh(l,function(t){m=(t.getLayout().x+f)*p,v=(t.depth-1)*g;var e=lh(m,v);t.setLayout({x:e.x,y:e.y,rawX:m,rawY:v},!0)})):"horizontal"===t.get("orient")?(g=a/(u.getLayout().x+d+f),p=o/(c.depth-1||1),Sh(l,function(t){v=(t.getLayout().x+f)*g,m=(t.depth-1)*p,t.setLayout({x:m,y:v},!0)})):(p=o/(u.getLayout().x+d+f),g=a/(c.depth-1||1),Sh(l,function(t){m=(t.getLayout().x+f)*p,v=(t.depth-1)*g,t.setLayout({x:m,y:v},!0)}))};ar(v(cM,"tree","circle",null)),or(function(t,e){t.eachSeriesByType("tree",function(t){AI(t,e)})}),or(function(t,e){t.eachSeriesByType("tree",function(t){AI(t,e)})}),yw.extend({type:"series.treemap",layoutMode:"box",dependencies:["grid","polar"],_viewRoot:null,defaultOption:{progressive:0,hoverLayerThreshold:1/0,left:"center",top:"middle",right:null,bottom:null,width:"80%",height:"80%",sort:!0,clipWindow:"origin",squareRatio:.5*(1+Math.sqrt(5)),leafDepth:null,drillDownIcon:"▶",zoomToNodeRatio:.1024,roam:!0,nodeClick:"zoomToNode",animation:!0,animationDurationUpdate:900,animationEasing:"quinticInOut",breadcrumb:{show:!0,height:22,left:"center",top:"bottom",emptyItemWidth:25,itemStyle:{normal:{color:"rgba(0,0,0,0.7)",borderColor:"rgba(255,255,255,0.7)",borderWidth:1,shadowColor:"rgba(150,150,150,1)",shadowBlur:3,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#fff"}},emphasis:{textStyle:{}}}},label:{normal:{show:!0,distance:0,padding:5,position:"inside",color:"#fff",ellipsis:!0}},upperLabel:{normal:{show:!1,position:[0,"50%"],height:20,color:"#fff",ellipsis:!0,verticalAlign:"middle"},emphasis:{show:!0,position:[0,"50%"],color:"#fff",ellipsis:!0,verticalAlign:"middle"}},itemStyle:{normal:{color:null,colorAlpha:null,colorSaturation:null,borderWidth:0,gapWidth:0,borderColor:"#fff",borderColorSaturation:null},emphasis:{}},visualDimension:0,visualMin:null,visualMax:null,color:[],colorAlpha:null,colorSaturation:null,colorMappingBy:"index",visibleMin:10,childrenVisibleMin:null,levels:[]},getInitialData:function(t,e){var i={name:t.name,children:t.data};Ch(i);var n=t.levels||[];n=t.levels=Dh(n,e);var o={};return o.levels=n,ih.createTree(i,this,o).data},optionUpdated:function(){this.resetViewRoot()},formatTooltip:function(t){var e=this.getData(),i=this.getRawValue(t),n=Vi(y(i)?i[0]:i);return Gi(e.getName(t)+": "+n)},getDataParams:function(t){var e=yw.prototype.getDataParams.apply(this,arguments),i=this.getData().tree.getNodeByDataIndex(t);return e.treePathInfo=Ah(i,this),e},setLayoutInfo:function(t){this.layoutInfo=this.layoutInfo||{},a(this.layoutInfo,t)},mapIdToIndex:function(t){var e=this._idIndexMap;e||(e=this._idIndexMap=z(),this._idIndexMapCount=0);var i=e.get(t);return null==i&&e.set(t,i=this._idIndexMapCount++),i},getViewRoot:function(){return this._viewRoot},resetViewRoot:function(t){t?this._viewRoot=t:t=this._viewRoot;var e=this.getData().tree.root;t&&(t===e||e.contains(t))||(this._viewRoot=e)}});var CI=5;Lh.prototype={constructor:Lh,render:function(t,e,i,n){var o=t.getModel("breadcrumb"),a=this.group;if(a.removeAll(),o.get("show")&&i){var r=o.getModel("itemStyle.normal"),s=r.getModel("textStyle"),l={pos:{left:o.get("left"),right:o.get("right"),top:o.get("top"),bottom:o.get("bottom")},box:{width:e.getWidth(),height:e.getHeight()},emptyItemWidth:o.get("emptyItemWidth"),totalWidth:0,renderList:[]};this._prepare(i,l,s),this._renderContent(t,l,r,s,n),Jo(a,l.pos,l.box)}},_prepare:function(t,e,i){for(var n=t;n;n=n.parentNode){var o=n.getModel().get("name"),a=i.getTextRect(o),r=Math.max(a.width+16,e.emptyItemWidth);e.totalWidth+=r+8,e.renderList.push({node:n,text:o,width:r})}},_renderContent:function(t,e,i,n,o){for(var a=0,s=e.emptyItemWidth,l=t.get("breadcrumb.height"),h=$o(e.pos,e.box),u=e.totalWidth,c=e.renderList,d=c.length-1;d>=0;d--){var f=c[d],p=f.node,g=f.width,m=f.text;u>h.width&&(u-=g-s,g=s,m=null);var y=new ub({shape:{points:kh(a,0,g,l,d===c.length-1,0===d)},style:r(i.getItemStyle(),{lineJoin:"bevel",text:m,textFill:n.getTextColor(),textFont:n.getFont()}),z:10,onclick:v(o,p)});this.group.add(y),Ph(y,t,p),a+=g+8}},remove:function(){this.group.removeAll()}};var DI=m,LI=jy,kI=db,PI=d,OI=["label","normal"],zI=["label","emphasis"],NI=["upperLabel","normal"],EI=["upperLabel","emphasis"],RI=10,VI=1,BI=2,GI=$x([["fill","color"],["stroke","strokeColor"],["lineWidth","strokeWidth"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),WI=function(t){var e=GI(t);return e.stroke=e.fill=e.lineWidth=null,e};ur({type:"treemap",init:function(t,e){this._containerGroup,this._storage={nodeGroup:[],background:[],content:[]},this._oldTree,this._breadcrumb,this._controller,this._state="ready"},render:function(t,e,i,n){if(!(l(e.findComponents({mainType:"series",subType:"treemap",query:n}),t)<0)){this.seriesModel=t,this.api=i,this.ecModel=e;var o=Mh(n,t),a=n&&n.type,r=t.layoutInfo,s=!this._oldTree,h=this._storage,u="treemapRootToNode"===a&&o&&h?{rootNodeGroup:h.nodeGroup[o.node.getRawIndex()],direction:n.direction}:null,c=this._giveContainerGroup(r),d=this._doRender(c,t,u);s||a&&"treemapZoomToNode"!==a&&"treemapRootToNode"!==a?d.renderFinally():this._doAnimation(c,d,t,u),this._resetController(i),this._renderBreadcrumb(t,i,o)}},_giveContainerGroup:function(t){var e=this._containerGroup;return e||(e=this._containerGroup=new LI,this._initEvents(e),this.group.add(e)),e.attr("position",[t.x,t.y]),e},_doRender:function(t,e,i){function n(t,e,i,o,a){function r(t){return t.getId()}function s(r,s){var l=null!=r?t[r]:null,h=null!=s?e[s]:null,c=u(l,h,i,a);c&&n(l&&l.viewChildren||[],h&&h.viewChildren||[],c,o,a+1)}o?(e=t,PI(t,function(t,e){!t.isRemoved()&&s(e,e)})):new fr(e,t,r,r).add(s).update(s).remove(v(s,null)).execute()}var o=e.getData().tree,a=this._oldTree,r={nodeGroup:[],background:[],content:[]},s={nodeGroup:[],background:[],content:[]},l=this._storage,h=[],u=v(zh,e,s,l,i,r,h);n(o.root?[o.root]:[],a&&a.root?[a.root]:[],t,o===a||!a,0);var c=function(t){var e={nodeGroup:[],background:[],content:[]};return t&&PI(t,function(t,i){var n=e[i];PI(t,function(t){t&&(n.push(t),t.__tmWillDelete=1)})}),e}(l);return this._oldTree=o,this._storage=s,{lastsForAnimation:r,willDeleteEls:c,renderFinally:function(){PI(c,function(t){PI(t,function(t){t.parent&&t.parent.remove(t)})}),PI(h,function(t){t.invisible=!0,t.dirty()})}}},_doAnimation:function(t,e,i,n){if(i.get("animation")){var o=i.get("animationDurationUpdate"),r=i.get("animationEasing"),s=Oh();PI(e.willDeleteEls,function(t,e){PI(t,function(t,i){if(!t.invisible){var a,l=t.parent;if(n&&"drillDown"===n.direction)a=l===n.rootNodeGroup?{shape:{x:0,y:0,width:l.__tmNodeWidth,height:l.__tmNodeHeight},style:{opacity:0}}:{style:{opacity:0}};else{var h=0,u=0;l.__tmWillDelete||(h=l.__tmNodeWidth/2,u=l.__tmNodeHeight/2),a="nodeGroup"===e?{position:[h,u],style:{opacity:0}}:{shape:{x:h,y:u,width:0,height:0},style:{opacity:0}}}a&&s.add(t,a,o,r)}})}),PI(this._storage,function(t,i){PI(t,function(t,n){var l=e.lastsForAnimation[i][n],h={};l&&("nodeGroup"===i?l.old&&(h.position=t.position.slice(),t.attr("position",l.old)):(l.old&&(h.shape=a({},t.shape),t.setShape(l.old)),l.fadein?(t.setStyle("opacity",0),h.style={opacity:1}):1!==t.style.opacity&&(h.style={opacity:1})),s.add(t,h,o,r))})},this),this._state="animating",s.done(DI(function(){this._state="ready",e.renderFinally()},this)).start()}},_resetController:function(t){var e=this._controller;e||((e=this._controller=new kl(t.getZr())).enable(this.seriesModel.get("roam")),e.on("pan",DI(this._onPan,this)),e.on("zoom",DI(this._onZoom,this)));var i=new jt(0,0,t.getWidth(),t.getHeight());e.setPointerChecker(function(t,e,n){return i.contain(e,n)})},_clearController:function(){var t=this._controller;t&&(t.dispose(),t=null)},_onPan:function(t,e){if("animating"!==this._state&&(Math.abs(t)>3||Math.abs(e)>3)){var i=this.seriesModel.getData().tree.root;if(!i)return;var n=i.getLayout();if(!n)return;this.api.dispatchAction({type:"treemapMove",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:n.x+t,y:n.y+e,width:n.width,height:n.height}})}},_onZoom:function(t,e,i){if("animating"!==this._state){var n=this.seriesModel.getData().tree.root;if(!n)return;var o=n.getLayout();if(!o)return;var a=new jt(o.x,o.y,o.width,o.height),r=this.seriesModel.layoutInfo;e-=r.x,i-=r.y;var s=ot();lt(s,s,[-e,-i]),ut(s,s,[t,t]),lt(s,s,[e,i]),a.applyTransform(s),this.api.dispatchAction({type:"treemapRender",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:a.x,y:a.y,width:a.width,height:a.height}})}},_initEvents:function(t){t.on("click",function(t){if("ready"===this._state){var e=this.seriesModel.get("nodeClick",!0);if(e){var i=this.findTarget(t.offsetX,t.offsetY);if(i){var n=i.node;if(n.getLayout().isLeafRoot)this._rootToNode(i);else if("zoomToNode"===e)this._zoomToNode(i);else if("link"===e){var o=n.hostTree.data.getItemModel(n.dataIndex),a=o.get("link",!0),r=o.get("target",!0)||"blank";a&&window.open(a,r)}}}}},this)},_renderBreadcrumb:function(t,e,i){i||(i=null!=t.get("leafDepth",!0)?{node:t.getViewRoot()}:this.findTarget(e.getWidth()/2,e.getHeight()/2))||(i={node:t.getData().tree.root}),(this._breadcrumb||(this._breadcrumb=new Lh(this.group))).render(t,e,i.node,DI(function(e){"animating"!==this._state&&(Th(t.getViewRoot(),e)?this._rootToNode({node:e}):this._zoomToNode({node:e}))},this))},remove:function(){this._clearController(),this._containerGroup&&this._containerGroup.removeAll(),this._storage={nodeGroup:[],background:[],content:[]},this._state="ready",this._breadcrumb&&this._breadcrumb.remove()},dispose:function(){this._clearController()},_zoomToNode:function(t){this.api.dispatchAction({type:"treemapZoomToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t.node})},_rootToNode:function(t){this.api.dispatchAction({type:"treemapRootToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t.node})},findTarget:function(t,e){var i;return this.seriesModel.getViewRoot().eachNode({attr:"viewChildren",order:"preorder"},function(n){var o=this._storage.background[n.getRawIndex()];if(o){var a=o.transformCoordToLocal(t,e),r=o.shape;if(!(r.x<=a[0]&&a[0]<=r.x+r.width&&r.y<=a[1]&&a[1]<=r.y+r.height))return!1;i={node:n,offsetX:a[0],offsetY:a[1]}}},this),i}});for(var HI=["treemapZoomToNode","treemapRender","treemapMove"],FI=0;FI<HI.length;FI++)ir({type:HI[FI],update:"updateView"},function(){});ir({type:"treemapRootToNode",update:"updateView"},function(t,e){e.eachComponent({mainType:"series",subType:"treemap",query:t},function(e,i){var n=Mh(t,e);if(n){var o=e.getViewRoot();o&&(t.direction=Th(o,n.node)?"rollUp":"drillDown"),e.resetViewRoot(n.node)}})});var ZI=d,UI=b,XI=-1,jI=function(t){var e=t.mappingMethod,n=t.type,o=this.option=i(t);this.type=n,this.mappingMethod=e,this._normalizeData=YI[e];var a=qI[n];this.applyVisual=a.applyVisual,this.getColorMapper=a.getColorMapper,this._doMap=a._doMap[e],"piecewise"===e?(Vh(o),Eh(o)):"category"===e?o.categories?Rh(o):Vh(o,!0):(L("linear"!==e||o.dataExtent),Vh(o))};jI.prototype={constructor:jI,mapValueToVisual:function(t){var e=this._normalizeData(t);return this._doMap(e,t)},getNormalizer:function(){return m(this._normalizeData,this)}};var qI=jI.visualHandlers={color:{applyVisual:Wh("color"),getColorMapper:function(){var t=this.option;return m("category"===t.mappingMethod?function(t,e){return!e&&(t=this._normalizeData(t)),Hh.call(this,t)}:function(e,i,n){var o=!!n;return!i&&(e=this._normalizeData(e)),n=Dt(e,t.parsedVisual,n),o?n:Ot(n,"rgba")},this)},_doMap:{linear:function(t){return Ot(Dt(t,this.option.parsedVisual),"rgba")},category:Hh,piecewise:function(t,e){var i=Uh.call(this,e);return null==i&&(i=Ot(Dt(t,this.option.parsedVisual),"rgba")),i},fixed:Fh}},colorHue:Bh(function(t,e){return kt(t,e)}),colorSaturation:Bh(function(t,e){return kt(t,null,e)}),colorLightness:Bh(function(t,e){return kt(t,null,null,e)}),colorAlpha:Bh(function(t,e){return Pt(t,e)}),opacity:{applyVisual:Wh("opacity"),_doMap:Zh([0,1])},symbol:{applyVisual:function(t,e,i){var n=this.mapValueToVisual(t);if(_(n))i("symbol",n);else if(UI(n))for(var o in n)n.hasOwnProperty(o)&&i(o,n[o])},_doMap:{linear:Gh,category:Hh,piecewise:function(t,e){var i=Uh.call(this,e);return null==i&&(i=Gh.call(this,t)),i},fixed:Fh}},symbolSize:{applyVisual:Wh("symbolSize"),_doMap:Zh([0,1])}},YI={linear:function(t){return wi(t,this.option.dataExtent,[0,1],!0)},piecewise:function(t){var e=this.option.pieceList,i=jI.findPieceIndex(t,e,!0);if(null!=i)return wi(i,[0,e.length-1],[0,1],!0)},category:function(t){var e=this.option.categories?this.option.categoryMap[t]:t;return null==e?XI:e},fixed:N};jI.listVisualTypes=function(){var t=[];return d(qI,function(e,i){t.push(i)}),t},jI.addVisualHandler=function(t,e){qI[t]=e},jI.isValidType=function(t){return qI.hasOwnProperty(t)},jI.eachVisual=function(t,e,i){b(t)?d(t,e,i):e.call(i,t)},jI.mapVisual=function(t,e,i){var n,o=y(t)?[]:b(t)?{}:(n=!0,null);return jI.eachVisual(t,function(t,a){var r=e.call(i,t,a);n?o=r:o[a]=r}),o},jI.retrieveVisuals=function(t){var e,i={};return t&&ZI(qI,function(n,o){t.hasOwnProperty(o)&&(i[o]=t[o],e=!0)}),e?i:null},jI.prepareVisualTypes=function(t){if(UI(t)){var e=[];ZI(t,function(t,i){e.push(i)}),t=e}else{if(!y(t))return[];t=t.slice()}return t.sort(function(t,e){return"color"===e&&"color"!==t&&0===t.indexOf("color")?1:-1}),t},jI.dependsOn=function(t,e){return"color"===e?!(!t||0!==t.indexOf(e)):t===e},jI.findPieceIndex=function(t,e,i){function n(e,i){var n=Math.abs(e-t);n<a&&(a=n,o=i)}for(var o,a=1/0,r=0,s=e.length;r<s;r++){var l=e[r].value;if(null!=l){if(l===t||"string"==typeof l&&l===t+"")return r;i&&n(l,r)}}for(var r=0,s=e.length;r<s;r++){var h=e[r],u=h.interval,c=h.close;if(u){if(u[0]===-1/0){if(jh(c[1],t,u[1]))return r}else if(u[1]===1/0){if(jh(c[0],u[0],t))return r}else if(jh(c[0],u[0],t)&&jh(c[1],t,u[1]))return r;i&&n(u[0],r),i&&n(u[1],r)}}if(i)return t===1/0?e.length-1:t===-1/0?0:o};var $I=y,KI="itemStyle.normal",JI=Math.max,QI=Math.min,tT=I,eT=d,iT=["itemStyle","normal","borderWidth"],nT=["itemStyle","normal","gapWidth"],oT=["upperLabel","normal","show"],aT=["upperLabel","normal","height"];ar(function(t,e,i){var n={mainType:"series",subType:"treemap",query:i};t.eachComponent(n,function(t){var e=t.getData().tree,i=e.root,n=t.getModel(KI);i.isRemoved()||qh(i,{},f(e.levelModels,function(t){return t?t.get(KI):null}),n,t.getViewRoot().getAncestors(),t)})}),or(function(t,e,i){var n={mainType:"series",subType:"treemap",query:i};t.eachComponent(n,function(t){var n=e.getWidth(),o=e.getHeight(),r=t.option,s=Ko(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),l=r.size||[],h=Si(tT(s.width,l[0]),n),u=Si(tT(s.height,l[1]),o),c=i&&i.type,d=Mh(i,t),f="treemapRender"===c||"treemapMove"===c?i.rootRect:null,p=t.getViewRoot(),g=Ih(p);if("treemapMove"!==c){var m="treemapZoomToNode"===c?hu(t,d,p,h,u):f?[f.width,f.height]:[h,u],v=r.sort;v&&"asc"!==v&&"desc"!==v&&(v="desc");var y={squareRatio:r.squareRatio,sort:v,leafDepth:r.leafDepth};p.hostTree.clearLayouts(),x={x:0,y:0,width:m[0],height:m[1],area:m[0]*m[1]},p.setLayout(x),iu(p,y,!1,0);var x=p.getLayout();eT(g,function(t,e){var i=(g[e+1]||p).getValue();t.setLayout(a({dataExtent:[i,i],borderWidth:0,upperHeight:0},x))})}var _=t.getData().tree.root;_.setLayout(uu(s,f,d),!0),t.setLayoutInfo(s),cu(_,new jt(-s.x,-s.y,n,o),g,p,0)})});var rT=function(t){this._directed=t||!1,this.nodes=[],this.edges=[],this._nodesMap={},this._edgesMap={},this.data,this.edgeData},sT=rT.prototype;sT.type="graph",sT.isDirected=function(){return this._directed},sT.addNode=function(t,e){t=t||""+e;var i=this._nodesMap;if(!i[fu(t)]){var n=new pu(t,e);return n.hostGraph=this,this.nodes.push(n),i[fu(t)]=n,n}},sT.getNodeByIndex=function(t){var e=this.data.getRawIndex(t);return this.nodes[e]},sT.getNodeById=function(t){return this._nodesMap[fu(t)]},sT.addEdge=function(t,e,i){var n=this._nodesMap,o=this._edgesMap;if("number"==typeof t&&(t=this.nodes[t]),"number"==typeof e&&(e=this.nodes[e]),t instanceof pu||(t=n[fu(t)]),e instanceof pu||(e=n[fu(e)]),t&&e){var a=t.id+"-"+e.id;if(!o[a]){var r=new gu(t,e,i);return r.hostGraph=this,this._directed&&(t.outEdges.push(r),e.inEdges.push(r)),t.edges.push(r),t!==e&&e.edges.push(r),this.edges.push(r),o[a]=r,r}}},sT.getEdgeByIndex=function(t){var e=this.edgeData.getRawIndex(t);return this.edges[e]},sT.getEdge=function(t,e){t instanceof pu&&(t=t.id),e instanceof pu&&(e=e.id);var i=this._edgesMap;return this._directed?i[t+"-"+e]:i[t+"-"+e]||i[e+"-"+t]},sT.eachNode=function(t,e){for(var i=this.nodes,n=i.length,o=0;o<n;o++)i[o].dataIndex>=0&&t.call(e,i[o],o)},sT.eachEdge=function(t,e){for(var i=this.edges,n=i.length,o=0;o<n;o++)i[o].dataIndex>=0&&i[o].node1.dataIndex>=0&&i[o].node2.dataIndex>=0&&t.call(e,i[o],o)},sT.breadthFirstTraverse=function(t,e,i,n){if(e instanceof pu||(e=this._nodesMap[fu(e)]),e){for(var o="out"===i?"outEdges":"in"===i?"inEdges":"edges",a=0;a<this.nodes.length;a++)this.nodes[a].__visited=!1;if(!t.call(n,e,null))for(var r=[e];r.length;)for(var s=r.shift(),l=s[o],a=0;a<l.length;a++){var h=l[a],u=h.node1===s?h.node2:h.node1;if(!u.__visited){if(t.call(n,u,s))return;r.push(u),u.__visited=!0}}}},sT.update=function(){for(var t=this.data,e=this.edgeData,i=this.nodes,n=this.edges,o=0,a=i.length;o<a;o++)i[o].dataIndex=-1;for(var o=0,a=t.count();o<a;o++)i[t.getRawIndex(o)].dataIndex=o;e.filterSelf(function(t){var i=n[e.getRawIndex(t)];return i.node1.dataIndex>=0&&i.node2.dataIndex>=0});for(var o=0,a=n.length;o<a;o++)n[o].dataIndex=-1;for(var o=0,a=e.count();o<a;o++)n[e.getRawIndex(o)].dataIndex=o},sT.clone=function(){for(var t=new rT(this._directed),e=this.nodes,i=this.edges,n=0;n<e.length;n++)t.addNode(e[n].id,e[n].dataIndex);for(n=0;n<i.length;n++){var o=i[n];t.addEdge(o.node1.id,o.node2.id,o.dataIndex)}return t},pu.prototype={constructor:pu,degree:function(){return this.edges.length},inDegree:function(){return this.inEdges.length},outDegree:function(){return this.outEdges.length},getModel:function(t){if(!(this.dataIndex<0))return this.hostGraph.data.getItemModel(this.dataIndex).getModel(t)}},gu.prototype.getModel=function(t){if(!(this.dataIndex<0))return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(t)};var lT=function(t,e){return{getValue:function(i){var n=this[t][e];return n.get(n.getDimension(i||"value"),this.dataIndex)},setVisual:function(i,n){this.dataIndex>=0&&this[t][e].setItemVisual(this.dataIndex,i,n)},getVisual:function(i,n){return this[t][e].getItemVisual(this.dataIndex,i,n)},setLayout:function(i,n){this.dataIndex>=0&&this[t][e].setItemLayout(this.dataIndex,i,n)},getLayout:function(){return this[t][e].getItemLayout(this.dataIndex)},getGraphicEl:function(){return this[t][e].getItemGraphicEl(this.dataIndex)},getRawIndex:function(){return this[t][e].getRawIndex(this.dataIndex)}}};u(pu,lT("hostGraph","data")),u(gu,lT("hostGraph","edgeData")),rT.Node=pu,rT.Edge=gu;var hT=function(t,e,i,n,o){for(var a=new rT(n),r=0;r<t.length;r++)a.addNode(I(t[r].id,t[r].name,r),r);for(var s=[],l=[],h=0,r=0;r<e.length;r++){var u=e[r],c=u.source,d=u.target;a.addEdge(c,d,h)&&(l.push(u),s.push(I(u.id,c+" > "+d)),h++)}var f,p=i.get("coordinateSystem");if("cartesian2d"===p||"polar"===p)f=Sr(t,i,i.ecModel);else{var g=ua.get(p),m=xr((g&&"view"!==g.type?g.dimensions||[]:[]).concat(["value"]),t);(f=new aS(m,i)).initData(t)}var v=new aS(["value"],i);return v.initData(l,s),o&&o(f,v),ql({mainData:f,struct:a,structAttr:"graph",datas:{node:f,edge:v},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a},uT=hr({type:"series.graph",init:function(t){uT.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this.fillDataTextStyle(t.edges||t.links),this._updateCategoriesData()},mergeOption:function(t){uT.superApply(this,"mergeOption",arguments),this.fillDataTextStyle(t.edges||t.links),this._updateCategoriesData()},mergeDefaultAndTheme:function(t){uT.superApply(this,"mergeDefaultAndTheme",arguments),zo(t.edgeLabel,["show"])},getInitialData:function(t,e){var i=t.edges||t.links||[],n=t.data||t.nodes||[],o=this;if(n&&i)return hT(n,i,this,!0,function(t,i){function n(t){return(t=this.parsePath(t))&&"label"===t[0]?r:this.parentModel}t.wrapMethod("getItemModel",function(t){var e=o._categoriesModels[t.getShallow("category")];return e&&(e.parentModel=t.parentModel,t.parentModel=e),t});var a=o.getModel("edgeLabel"),r=new Lo({label:a.option},a.parentModel,e);i.wrapMethod("getItemModel",function(t){return t.customizeGetParent(n),t})}).data},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(t,e,i){if("edge"===i){var n=this.getData(),o=this.getDataParams(t,i),a=n.graph.getEdgeByIndex(t),r=n.getName(a.node1.dataIndex),s=n.getName(a.node2.dataIndex),l=[];return null!=r&&l.push(r),null!=s&&l.push(s),l=Gi(l.join(" > ")),o.value&&(l+=" : "+Gi(o.value)),l}return uT.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var t=f(this.option.categories||[],function(t){return null!=t.value?t:a({value:0},t)}),e=new aS(["value"],this);e.initData(t),this._categoriesData=e,this._categoriesModels=e.mapArray(function(t){return e.getItemModel(t,!0)})},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t},isAnimationEnabled:function(){return uT.superCall(this,"isAnimationEnabled")&&!("force"===this.get("layout")&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",legendHoverLink:!0,hoverAnimation:!0,layout:null,focusNodeAdjacency:!1,circular:{rotateLabel:!1},force:{initLayout:null,repulsion:[0,50],gravity:.1,edgeLength:30,layoutAnimation:!0},left:"center",top:"center",symbol:"circle",symbolSize:10,edgeSymbol:["none","none"],edgeSymbolSize:10,edgeLabel:{normal:{position:"middle"},emphasis:{}},draggable:!1,roam:!1,center:null,zoom:1,nodeScaleRatio:.6,label:{normal:{show:!1,formatter:"{b}"},emphasis:{show:!0}},itemStyle:{normal:{},emphasis:{}},lineStyle:{normal:{color:"#aaa",width:1,curveness:0,opacity:.5},emphasis:{}}}}),cT=fb.prototype,dT=gb.prototype,fT=Zn({type:"ec-line",style:{stroke:"#000",fill:null},shape:{x1:0,y1:0,x2:0,y2:0,percent:1,cpx1:null,cpy1:null},buildPath:function(t,e){(mu(e)?cT:dT).buildPath(t,e)},pointAt:function(t){return mu(this.shape)?cT.pointAt.call(this,t):dT.pointAt.call(this,t)},tangentAt:function(t){var e=this.shape,i=mu(e)?[e.x2-e.x1,e.y2-e.y1]:dT.tangentAt.call(this,t);return X(i,i)}}),pT=["fromSymbol","toSymbol"],gT=bu.prototype;gT.beforeUpdate=function(){var t=this,e=t.childOfName("fromSymbol"),i=t.childOfName("toSymbol"),n=t.childOfName("label");if(e||i||!n.ignore){for(var o=1,a=this.parent;a;)a.scale&&(o/=a.scale[0]),a=a.parent;var r=t.childOfName("line");if(this.__dirty||r.__dirty){var s=r.shape.percent,l=r.pointAt(0),h=r.pointAt(s),u=H([],h,l);if(X(u,u),e&&(e.attr("position",l),c=r.tangentAt(0),e.attr("rotation",Math.PI/2-Math.atan2(c[1],c[0])),e.attr("scale",[o*s,o*s])),i){i.attr("position",h);var c=r.tangentAt(1);i.attr("rotation",-Math.PI/2-Math.atan2(c[1],c[0])),i.attr("scale",[o*s,o*s])}if(!n.ignore){n.attr("position",h);var d,f,p,g=5*o;if("end"===n.__position)d=[u[0]*g+h[0],u[1]*g+h[1]],f=u[0]>.8?"left":u[0]<-.8?"right":"center",p=u[1]>.8?"top":u[1]<-.8?"bottom":"middle";else if("middle"===n.__position){var m=s/2,v=[(c=r.tangentAt(m))[1],-c[0]],y=r.pointAt(m);v[1]>0&&(v[0]=-v[0],v[1]=-v[1]),d=[y[0]+v[0]*g,y[1]+v[1]*g],f="center",p="bottom";var x=-Math.atan2(c[1],c[0]);h[0]<l[0]&&(x=Math.PI+x),n.attr("rotation",x)}else d=[-u[0]*g+l[0],-u[1]*g+l[1]],f=u[0]>.8?"right":u[0]<-.8?"left":"center",p=u[1]>.8?"bottom":u[1]<-.8?"top":"middle";n.attr({style:{textVerticalAlign:n.__verticalAlign||p,textAlign:n.__textAlign||f},position:d,scale:[o,o]})}}}},gT._createLine=function(t,e,i){var n=t.hostModel,o=xu(t.getItemLayout(e));o.shape.percent=0,So(o,{shape:{percent:1}},n,e),this.add(o);var a=new ib({name:"label"});this.add(a),d(pT,function(i){var n=yu(i,t,e);this.add(n),this[vu(i)]=t.getItemVisual(e,i)},this),this._updateCommonStl(t,e,i)},gT.updateData=function(t,e,i){var n=t.hostModel,o=this.childOfName("line"),a=t.getItemLayout(e),r={shape:{}};_u(r.shape,a),wo(o,r,n,e),d(pT,function(i){var n=t.getItemVisual(e,i),o=vu(i);if(this[o]!==n){this.remove(this.childOfName(i));var a=yu(i,t,e);this.add(a)}this[o]=n},this),this._updateCommonStl(t,e,i)},gT._updateCommonStl=function(t,e,i){var n=t.hostModel,o=this.childOfName("line"),a=i&&i.lineStyle,s=i&&i.hoverLineStyle,l=i&&i.labelModel,h=i&&i.hoverLabelModel;if(!i||t.hasItemOption){var u=t.getItemModel(e);a=u.getModel("lineStyle.normal").getLineStyle(),s=u.getModel("lineStyle.emphasis").getLineStyle(),l=u.getModel("label.normal"),h=u.getModel("label.emphasis")}var c=t.getItemVisual(e,"color"),f=A(t.getItemVisual(e,"opacity"),a.opacity,1);o.useStyle(r({strokeNoScale:!0,fill:"none",stroke:c,opacity:f},a)),o.hoverStyle=s,d(pT,function(t){var e=this.childOfName(t);e&&(e.setColor(c),e.setStyle({opacity:f}))},this);var p,g,m,v,y=l.getShallow("show"),x=h.getShallow("show"),_=this.childOfName("label");if(y||x){var b=n.getRawValue(e);g=null==b?g=t.getName(e):isFinite(b)?Mi(b):b,p=c||"#000",m=T(n.getFormattedLabel(e,"normal",t.dataType),g),v=T(n.getFormattedLabel(e,"emphasis",t.dataType),m)}if(y){var w=fo(_.style,l,{text:m},{autoColor:p});_.__textAlign=w.textAlign,_.__verticalAlign=w.textVerticalAlign,_.__position=l.get("position")||"middle"}else _.setStyle("text",null);_.hoverStyle=x?{text:v,textFill:h.getTextColor(!0),fontStyle:h.getShallow("fontStyle"),fontWeight:h.getShallow("fontWeight"),fontSize:h.getShallow("fontSize"),fontFamily:h.getShallow("fontFamily")}:{text:null},_.ignore=!y&&!x,uo(this)},gT.highlight=function(){this.trigger("emphasis")},gT.downplay=function(){this.trigger("normal")},gT.updateLayout=function(t,e){this.setLinePoints(t.getItemLayout(e))},gT.setLinePoints=function(t){var e=this.childOfName("line");_u(e.shape,t),e.dirty()},h(bu,jy);var mT=Mu.prototype;mT.updateData=function(t){var e=this._lineData,i=this.group,n=this._ctor,o=t.hostModel,a={lineStyle:o.getModel("lineStyle.normal").getLineStyle(),hoverLineStyle:o.getModel("lineStyle.emphasis").getLineStyle(),labelModel:o.getModel("label.normal"),hoverLabelModel:o.getModel("label.emphasis")};t.diff(e).add(function(e){if(Su(t.getItemLayout(e))){var o=new n(t,e,a);t.setItemGraphicEl(e,o),i.add(o)}}).update(function(o,r){var s=e.getItemGraphicEl(r);Su(t.getItemLayout(o))?(s?s.updateData(t,o,a):s=new n(t,o,a),t.setItemGraphicEl(o,s),i.add(s)):i.remove(s)}).remove(function(t){i.remove(e.getItemGraphicEl(t))}).execute(),this._lineData=t},mT.updateLayout=function(){var t=this._lineData;t.eachItemGraphicEl(function(e,i){e.updateLayout(t,i)},this)},mT.remove=function(){this.group.removeAll()};var vT=[],yT=[],xT=[],_T=un,bT=uy,wT=Math.abs,ST=function(t,e){function i(t){var e=t.getVisual("symbolSize");return e instanceof Array&&(e=(e[0]+e[1])/2),e}var n=[],o=pn,a=[[],[],[]],r=[[],[]],s=[];e/=2,t.eachEdge(function(t,l){var h=t.getLayout(),u=t.getVisual("fromSymbol"),c=t.getVisual("toSymbol");h.__original||(h.__original=[V(h[0]),V(h[1])],h[2]&&h.__original.push(V(h[2])));var d=h.__original;if(null!=h[2]){if(R(a[0],d[0]),R(a[1],d[2]),R(a[2],d[1]),u&&"none"!=u){var f=i(t.node1),p=Iu(a,d[0],f*e);o(a[0][0],a[1][0],a[2][0],p,n),a[0][0]=n[3],a[1][0]=n[4],o(a[0][1],a[1][1],a[2][1],p,n),a[0][1]=n[3],a[1][1]=n[4]}if(c&&"none"!=c){var f=i(t.node2),p=Iu(a,d[1],f*e);o(a[0][0],a[1][0],a[2][0],p,n),a[1][0]=n[1],a[2][0]=n[2],o(a[0][1],a[1][1],a[2][1],p,n),a[1][1]=n[1],a[2][1]=n[2]}R(h[0],a[0]),R(h[1],a[2]),R(h[2],a[1])}else{if(R(r[0],d[0]),R(r[1],d[1]),H(s,r[1],r[0]),X(s,s),u&&"none"!=u){f=i(t.node1);W(r[0],r[0],s,f*e)}if(c&&"none"!=c){f=i(t.node2);W(r[1],r[1],s,-f*e)}R(h[0],r[0]),R(h[1],r[1])}})},MT=["itemStyle","normal","opacity"],IT=["lineStyle","normal","opacity"];ur({type:"graph",init:function(t,e){var i=new ts,n=new Mu,o=this.group;this._controller=new kl(e.getZr()),this._controllerHost={target:o},o.add(i.group),o.add(n.group),this._symbolDraw=i,this._lineDraw=n,this._firstRender=!0},render:function(t,e,i){var n=t.coordinateSystem;this._model=t,this._nodeScaleRatio=t.get("nodeScaleRatio");var o=this._symbolDraw,a=this._lineDraw,r=this.group;if("view"===n.type){var s={position:n.position,scale:n.scale};this._firstRender?r.attr(s):wo(r,s,t)}ST(t.getGraph(),this._getNodeGlobalScale(t));var l=t.getData();o.updateData(l);var h=t.getEdgeData();a.updateData(h),this._updateNodeAndLinkScale(),this._updateController(t,e,i),clearTimeout(this._layoutTimeout);var u=t.forceLayout,c=t.get("force.layoutAnimation");u&&this._startForceLayoutIteration(u,c),l.eachItemGraphicEl(function(e,n){var o=l.getItemModel(n);e.off("drag").off("dragend");var a=l.getItemModel(n).get("draggable");a&&e.on("drag",function(){u&&(u.warmUp(),!this._layouting&&this._startForceLayoutIteration(u,c),u.setFixed(n),l.setItemLayout(n,e.position))},this).on("dragend",function(){u&&u.setUnfixed(n)},this),e.setDraggable(a&&u),e.off("mouseover",e.__focusNodeAdjacency),e.off("mouseout",e.__unfocusNodeAdjacency),o.get("focusNodeAdjacency")&&(e.on("mouseover",e.__focusNodeAdjacency=function(){i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,dataIndex:e.dataIndex})}),e.on("mouseout",e.__unfocusNodeAdjacency=function(){i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id})}))},this),l.graph.eachEdge(function(e){var n=e.getGraphicEl();n.off("mouseover",n.__focusNodeAdjacency),n.off("mouseout",n.__unfocusNodeAdjacency),e.getModel().get("focusNodeAdjacency")&&(n.on("mouseover",n.__focusNodeAdjacency=function(){i.dispatchAction({type:"focusNodeAdjacency",seriesId:t.id,edgeDataIndex:e.dataIndex})}),n.on("mouseout",n.__unfocusNodeAdjacency=function(){i.dispatchAction({type:"unfocusNodeAdjacency",seriesId:t.id})}))});var d="circular"===t.get("layout")&&t.get("circular.rotateLabel"),f=l.getLayout("cx"),p=l.getLayout("cy");l.eachItemGraphicEl(function(t,e){var i=t.getSymbolPath();if(d){var n=l.getItemLayout(e),o=Math.atan2(n[1]-p,n[0]-f);o<0&&(o=2*Math.PI+o);var a=n[0]<f;a&&(o-=Math.PI);var r=a?"left":"right";i.setStyle({textRotation:-o,textPosition:r,textOrigin:"center"}),i.hoverStyle&&(i.hoverStyle.textPosition=r)}else i.setStyle({textRotation:0})}),this._firstRender=!1},dispose:function(){this._controller&&this._controller.dispose(),this._controllerHost={}},focusNodeAdjacency:function(t,e,i,n){var o=this._model.getData().graph,a=n.dataIndex,r=n.edgeDataIndex,s=o.getNodeByIndex(a),l=o.getEdgeByIndex(r);(s||l)&&(o.eachNode(function(t){Au(t,MT,.1)}),o.eachEdge(function(t){Au(t,IT,.1)}),s&&(Cu(s,MT),d(s.edges,function(t){t.dataIndex<0||(Cu(t,IT),Cu(t.node1,MT),Cu(t.node2,MT))})),l&&(Cu(l,IT),Cu(l.node1,MT),Cu(l.node2,MT)))},unfocusNodeAdjacency:function(t,e,i,n){var o=this._model.getData().graph;o.eachNode(function(t){Au(t,MT)}),o.eachEdge(function(t){Au(t,IT)})},_startForceLayoutIteration:function(t,e){var i=this;!function n(){t.step(function(t){i.updateLayout(i._model),(i._layouting=!t)&&(e?i._layoutTimeout=setTimeout(n,16):n())})}()},_updateController:function(t,e,i){var n=this._controller,o=this._controllerHost,a=this.group;n.setPointerChecker(function(e,n,o){var r=a.getBoundingRect();return r.applyTransform(a.transform),r.contain(n,o)&&!Wl(e,i,t)}),"view"===t.coordinateSystem.type?(n.enable(t.get("roam")),o.zoomLimit=t.get("scaleLimit"),o.zoom=t.coordinateSystem.getZoom(),n.off("pan").off("zoom").on("pan",function(e,n){Bl(o,e,n),i.dispatchAction({seriesId:t.id,type:"graphRoam",dx:e,dy:n})}).on("zoom",function(e,n,a){Gl(o,e,n,a),i.dispatchAction({seriesId:t.id,type:"graphRoam",zoom:e,originX:n,originY:a}),this._updateNodeAndLinkScale(),ST(t.getGraph(),this._getNodeGlobalScale(t)),this._lineDraw.updateLayout()},this)):n.disable()},_updateNodeAndLinkScale:function(){var t=this._model,e=t.getData(),i=this._getNodeGlobalScale(t),n=[i,i];e.eachItemGraphicEl(function(t,e){t.attr("scale",n)})},_getNodeGlobalScale:function(t){var e=t.coordinateSystem;if("view"!==e.type)return 1;var i=this._nodeScaleRatio,n=e.scale,o=n&&n[0]||1;return((e.getZoom()-1)*i+1)/o},updateLayout:function(t){ST(t.getGraph(),this._getNodeGlobalScale(t)),this._symbolDraw.updateLayout(),this._lineDraw.updateLayout()},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(),this._lineDraw&&this._lineDraw.remove()}}),ir({type:"graphRoam",event:"graphRoam",update:"none"},function(t,e){e.eachComponent({mainType:"series",query:t},function(e){var i=Xl(e.coordinateSystem,t);e.setCenter&&e.setCenter(i.center),e.setZoom&&e.setZoom(i.zoom)})}),ir({type:"focusNodeAdjacency",event:"focusNodeAdjacency",update:"series.graph:focusNodeAdjacency"},function(){}),ir({type:"unfocusNodeAdjacency",event:"unfocusNodeAdjacency",update:"series.graph:unfocusNodeAdjacency"},function(){});var TT=W;er(function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.eachSeriesByType("graph",function(t){var i=t.getCategoriesData(),n=t.getGraph().data,o=i.mapArray(i.getName);n.filterSelf(function(t){var i=n.getItemModel(t).getShallow("category");if(null!=i){"number"==typeof i&&(i=o[i]);for(var a=0;a<e.length;a++)if(!e[a].isSelected(i))return!1}return!0})},this)}),ar(v(cM,"graph","circle",null)),ar(function(t){var e={};t.eachSeriesByType("graph",function(t){var i=t.getCategoriesData(),n=t.getData(),o={};i.each(function(n){var a=i.getName(n);o["ec-"+a]=n;var r=i.getItemModel(n).get("itemStyle.normal.color")||t.getColorFromPalette(a,e);i.setItemVisual(n,"color",r)}),i.count()&&n.each(function(t){var e=n.getItemModel(t).getShallow("category");null!=e&&("string"==typeof e&&(e=o["ec-"+e]),n.getItemVisual(t,"color",!0)||n.setItemVisual(t,"color",i.getItemVisual(e,"color")))})})}),ar(function(t){t.eachSeriesByType("graph",function(t){var e=t.getGraph(),i=t.getEdgeData(),n=Du(t.get("edgeSymbol")),o=Du(t.get("edgeSymbolSize")),a="lineStyle.normal.color".split("."),r="lineStyle.normal.opacity".split(".");i.setVisual("fromSymbol",n&&n[0]),i.setVisual("toSymbol",n&&n[1]),i.setVisual("fromSymbolSize",o&&o[0]),i.setVisual("toSymbolSize",o&&o[1]),i.setVisual("color",t.get(a)),i.setVisual("opacity",t.get(r)),i.each(function(t){var n=i.getItemModel(t),o=e.getEdgeByIndex(t),s=Du(n.getShallow("symbol",!0)),l=Du(n.getShallow("symbolSize",!0)),h=n.get(a),u=n.get(r);switch(h){case"source":h=o.node1.getVisual("color");break;case"target":h=o.node2.getVisual("color")}s[0]&&o.setVisual("fromSymbol",s[0]),s[1]&&o.setVisual("toSymbol",s[1]),l[0]&&o.setVisual("fromSymbolSize",l[0]),l[1]&&o.setVisual("toSymbolSize",l[1]),o.setVisual("color",h),o.setVisual("opacity",u)})})}),or(function(t,e){t.eachSeriesByType("graph",function(t){var e=t.get("layout"),i=t.coordinateSystem;if(i&&"view"!==i.type){var n=t.getData(),o=i.dimensions;n.each(o,function(){for(var t,e=arguments,a=[],r=0;r<o.length;r++)isNaN(e[r])||(t=!0),a.push(e[r]);var s=e[e.length-1];t?n.setItemLayout(s,i.dataToPoint(a)):n.setItemLayout(s,[NaN,NaN])}),ku(n.graph)}else e&&"none"!==e||Lu(t)})}),or(function(t){t.eachSeriesByType("graph",function(t){"circular"===t.get("layout")&&Pu(t)})}),or(function(t){t.eachSeriesByType("graph",function(t){var e=t.coordinateSystem;if(!e||"view"===e.type)if("force"===t.get("layout")){var i=t.preservedPoints||{},n=t.getGraph(),o=n.data,a=n.edgeData,r=t.getModel("force"),s=r.get("initLayout");t.preservedPoints?o.each(function(t){var e=o.getId(t);o.setItemLayout(t,i[e]||[NaN,NaN])}):s&&"none"!==s?"circular"===s&&Pu(t):Lu(t);var l=o.getDataExtent("value"),h=a.getDataExtent("value"),u=r.get("repulsion"),c=r.get("edgeLength");y(u)||(u=[u,u]),y(c)||(c=[c,c]),c=[c[1],c[0]];var d=o.mapArray("value",function(t,e){var i=o.getItemLayout(e),n=wi(t,l,u);return isNaN(n)&&(n=(u[0]+u[1])/2),{w:n,rep:n,fixed:o.getItemModel(e).get("fixed"),p:!i||isNaN(i[0])||isNaN(i[1])?null:i}}),f=a.mapArray("value",function(t,e){var i=n.getEdgeByIndex(e),o=wi(t,h,c);return isNaN(o)&&(o=(c[0]+c[1])/2),{n1:d[i.node1.dataIndex],n2:d[i.node2.dataIndex],d:o,curveness:i.getModel().get("lineStyle.normal.curveness")||0}}),p=(e=t.coordinateSystem).getBoundingRect(),g=Ou(d,f,{rect:p,gravity:r.get("gravity")}),m=g.step;g.step=function(t){for(var e=0,a=d.length;e<a;e++)d[e].fixed&&R(d[e].p,n.getNodeByIndex(e).getLayout());m(function(e,a,r){for(var s=0,l=e.length;s<l;s++)e[s].fixed||n.getNodeByIndex(s).setLayout(e[s].p),i[o.getId(s)]=e[s].p;for(var s=0,l=a.length;s<l;s++){var h=a[s],u=n.getEdgeByIndex(s),c=h.n1.p,d=h.n2.p,f=u.getLayout();(f=f?f.slice():[])[0]=f[0]||[],f[1]=f[1]||[],R(f[0],c),R(f[1],d),+h.curveness&&(f[2]=[(c[0]+d[0])/2-(c[1]-d[1])*h.curveness,(c[1]+d[1])/2-(d[0]-c[0])*h.curveness]),u.setLayout(f)}t&&t(r)})},t.forceLayout=g,t.preservedPoints=i,g.step()}else t.forceLayout=null})}),nr("graphView",{create:function(t,e){var i=[];return t.eachSeriesByType("graph",function(t){var n=t.get("coordinateSystem");if(!n||"view"===n){var o=t.getData(),a=[],r=[];mn(o.mapArray(function(t){var e=o.getItemModel(t);return[+e.get("x"),+e.get("y")]}),a,r),r[0]-a[0]==0&&(r[0]+=1,a[0]-=1),r[1]-a[1]==0&&(r[1]+=1,a[1]-=1);var s=(r[0]-a[0])/(r[1]-a[1]),l=zu(t,e,s);isNaN(s)&&(a=[l.x,l.y],r=[l.x+l.width,l.y+l.height]);var h=r[0]-a[0],u=r[1]-a[1],c=l.width,d=l.height,f=t.coordinateSystem=new bl;f.zoomLimit=t.get("scaleLimit"),f.setBoundingRect(a[0],a[1],h,u),f.setViewRect(l.x,l.y,c,d),f.setCenter(t.get("center")),f.setZoom(t.get("zoom")),i.push(f)}}),i}});yw.extend({type:"series.gauge",getInitialData:function(t,e){var i=new aS(["value"],this),n=t.data||[];return y(n)||(n=[n]),i.initData(n),i},defaultOption:{zlevel:0,z:2,center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]],width:30}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,distance:5,color:"auto"},pointer:{show:!0,length:"80%",width:8},itemStyle:{normal:{color:"auto"}},title:{show:!0,offsetCenter:[0,"-40%"],color:"#333",fontSize:15},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"auto",fontSize:30}}});var AT=Nn.extend({type:"echartsGaugePointer",shape:{angle:0,width:10,r:10,x:0,y:0},buildPath:function(t,e){var i=Math.cos,n=Math.sin,o=e.r,a=e.width,r=e.angle,s=e.x-i(r)*a*(a>=o/3?1:2),l=e.y-n(r)*a*(a>=o/3?1:2);r=e.angle-Math.PI/2,t.moveTo(s,l),t.lineTo(e.x+i(r)*a,e.y+n(r)*a),t.lineTo(e.x+i(e.angle)*o,e.y+n(e.angle)*o),t.lineTo(e.x-i(r)*a,e.y-n(r)*a),t.lineTo(s,l)}}),CT=2*Math.PI,DT=(Ta.extend({type:"gauge",render:function(t,e,i){this.group.removeAll();var n=t.get("axisLine.lineStyle.color"),o=Nu(t,i);this._renderMain(t,e,i,n,o)},dispose:function(){},_renderMain:function(t,e,i,n,o){for(var a=this.group,r=t.getModel("axisLine").getModel("lineStyle"),s=t.get("clockwise"),l=-t.get("startAngle")/180*Math.PI,h=-t.get("endAngle")/180*Math.PI,u=(h-l)%CT,c=l,d=r.get("width"),f=0;f<n.length;f++){var p=Math.min(Math.max(n[f][0],0),1),g=new rb({shape:{startAngle:c,endAngle:h=l+u*p,cx:o.cx,cy:o.cy,clockwise:s,r0:o.r-d,r:o.r},silent:!0});g.setStyle({fill:n[f][1]}),g.setStyle(r.getLineStyle(["color","borderWidth","borderColor"])),a.add(g),c=h}var m=function(t){if(t<=0)return n[0][1];for(var e=0;e<n.length;e++)if(n[e][0]>=t&&(0===e?0:n[e-1][0])<t)return n[e][1];return n[e-1][1]};if(!s){var v=l;l=h,h=v}this._renderTicks(t,e,i,m,o,l,h,s),this._renderPointer(t,e,i,m,o,l,h,s),this._renderTitle(t,e,i,m,o),this._renderDetail(t,e,i,m,o)},_renderTicks:function(t,e,i,n,o,a,r,s){for(var l=this.group,h=o.cx,u=o.cy,c=o.r,d=+t.get("min"),f=+t.get("max"),p=t.getModel("splitLine"),g=t.getModel("axisTick"),m=t.getModel("axisLabel"),v=t.get("splitNumber"),y=g.get("splitNumber"),x=Si(p.get("length"),c),_=Si(g.get("length"),c),b=a,w=(r-a)/v,S=w/y,M=p.getModel("lineStyle").getLineStyle(),I=g.getModel("lineStyle").getLineStyle(),T=0;T<=v;T++){var A=Math.cos(b),C=Math.sin(b);if(p.get("show")){var D=new fb({shape:{x1:A*c+h,y1:C*c+u,x2:A*(c-x)+h,y2:C*(c-x)+u},style:M,silent:!0});"auto"===M.stroke&&D.setStyle({stroke:n(T/v)}),l.add(D)}if(m.get("show")){var L=Eu(Mi(T/v*(f-d)+d),m.get("formatter")),k=m.get("distance"),P=n(T/v);l.add(new ib({style:fo({},m,{text:L,x:A*(c-x-k)+h,y:C*(c-x-k)+u,textVerticalAlign:C<-.4?"top":C>.4?"bottom":"middle",textAlign:A<-.4?"left":A>.4?"right":"center"},{autoColor:P}),silent:!0}))}if(g.get("show")&&T!==v){for(var O=0;O<=y;O++){var A=Math.cos(b),C=Math.sin(b),z=new fb({shape:{x1:A*c+h,y1:C*c+u,x2:A*(c-_)+h,y2:C*(c-_)+u},silent:!0,style:I});"auto"===I.stroke&&z.setStyle({stroke:n((T+O/y)/v)}),l.add(z),b+=S}b-=S}else b+=w}},_renderPointer:function(t,e,i,n,o,a,r,s){var l=this.group,h=this._data;if(t.get("pointer.show")){var u=[+t.get("min"),+t.get("max")],c=[a,r],d=t.getData();d.diff(h).add(function(e){var i=new AT({shape:{angle:a}});So(i,{shape:{angle:wi(d.get("value",e),u,c,!0)}},t),l.add(i),d.setItemGraphicEl(e,i)}).update(function(e,i){var n=h.getItemGraphicEl(i);wo(n,{shape:{angle:wi(d.get("value",e),u,c,!0)}},t),l.add(n),d.setItemGraphicEl(e,n)}).remove(function(t){var e=h.getItemGraphicEl(t);l.remove(e)}).execute(),d.eachItemGraphicEl(function(t,e){var i=d.getItemModel(e),a=i.getModel("pointer");t.setShape({x:o.cx,y:o.cy,width:Si(a.get("width"),o.r),r:Si(a.get("length"),o.r)}),t.useStyle(i.getModel("itemStyle.normal").getItemStyle()),"auto"===t.style.fill&&t.setStyle("fill",n(wi(d.get("value",e),u,[0,1],!0))),uo(t,i.getModel("itemStyle.emphasis").getItemStyle())}),this._data=d}else h&&h.eachItemGraphicEl(function(t){l.remove(t)})},_renderTitle:function(t,e,i,n,o){var a=t.getModel("title");if(a.get("show")){var r=a.get("offsetCenter"),s=o.cx+Si(r[0],o.r),l=o.cy+Si(r[1],o.r),h=+t.get("min"),u=+t.get("max"),c=n(wi(t.getData().get("value",0),[h,u],[0,1],!0));this.group.add(new ib({silent:!0,style:fo({},a,{x:s,y:l,text:t.getData().getName(0),textAlign:"center",textVerticalAlign:"middle"},{autoColor:c,forceRich:!0})}))}},_renderDetail:function(t,e,i,n,o){var a=t.getModel("detail"),r=+t.get("min"),s=+t.get("max");if(a.get("show")){var l=a.get("offsetCenter"),h=o.cx+Si(l[0],o.r),u=o.cy+Si(l[1],o.r),c=Si(a.get("width"),o.r),d=Si(a.get("height"),o.r),f=t.getData().get("value",0),p=n(wi(f,[r,s],[0,1],!0));this.group.add(new ib({silent:!0,style:fo({},a,{x:h,y:u,text:Eu(f,a.get("formatter")),textWidth:isNaN(c)?null:c,textHeight:isNaN(d)?null:d,textAlign:"center",textVerticalAlign:"middle"},{autoColor:p,forceRich:!0})}))}}}),hr({type:"series.funnel",init:function(t){DT.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this._defaultLabelLine(t)},getInitialData:function(t,e){var i=xr(["value"],t.data),n=new aS(i,this);return n.initData(t.data),n},_defaultLabelLine:function(t){zo(t.labelLine,["show"]);var e=t.labelLine.normal,i=t.labelLine.emphasis;e.show=e.show&&t.label.normal.show,i.show=i.show&&t.label.emphasis.show},getDataParams:function(t){var e=this.getData(),i=DT.superCall(this,"getDataParams",t),n=e.getSum("value");return i.percent=n?+(e.get("value",t)/n*100).toFixed(2):0,i.$vars.push("percent"),i},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,left:80,top:60,right:80,bottom:60,minSize:"0%",maxSize:"100%",sort:"descending",gap:0,funnelAlign:"center",label:{normal:{show:!0,position:"outer"},emphasis:{show:!0}},labelLine:{normal:{show:!0,length:20,lineStyle:{width:1,type:"solid"}},emphasis:{}},itemStyle:{normal:{borderColor:"#fff",borderWidth:1},emphasis:{}}}})),LT=Ru.prototype,kT=["itemStyle","normal","opacity"];LT.updateData=function(t,e,i){var n=this.childAt(0),o=t.hostModel,a=t.getItemModel(e),s=t.getItemLayout(e),l=t.getItemModel(e).get(kT);l=null==l?1:l,n.useStyle({}),i?(n.setShape({points:s.points}),n.setStyle({opacity:0}),So(n,{style:{opacity:l}},o,e)):wo(n,{style:{opacity:l},shape:{points:s.points}},o,e);var h=a.getModel("itemStyle"),u=t.getItemVisual(e,"color");n.setStyle(r({lineJoin:"round",fill:u},h.getModel("normal").getItemStyle(["opacity"]))),n.hoverStyle=h.getModel("emphasis").getItemStyle(),this._updateLabel(t,e),uo(this)},LT._updateLabel=function(t,e){var i=this.childAt(1),n=this.childAt(2),o=t.hostModel,a=t.getItemModel(e),r=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");wo(i,{shape:{points:r.linePoints||r.linePoints}},o,e),wo(n,{style:{x:r.x,y:r.y}},o,e),n.attr({rotation:r.rotation,origin:[r.x,r.y],z2:10});var l=a.getModel("label.normal"),h=a.getModel("label.emphasis"),u=a.getModel("labelLine.normal"),c=a.getModel("labelLine.emphasis"),s=t.getItemVisual(e,"color");co(n.style,n.hoverStyle={},l,h,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!r.inside},{textAlign:r.textAlign,textVerticalAlign:r.verticalAlign}),n.ignore=n.normalIgnore=!l.get("show"),n.hoverIgnore=!h.get("show"),i.ignore=i.normalIgnore=!u.get("show"),i.hoverIgnore=!c.get("show"),i.setStyle({stroke:s}),i.setStyle(u.getModel("lineStyle").getLineStyle()),i.hoverStyle=c.getModel("lineStyle").getLineStyle()},h(Ru,jy);Ta.extend({type:"funnel",render:function(t,e,i){var n=t.getData(),o=this._data,a=this.group;n.diff(o).add(function(t){var e=new Ru(n,t);n.setItemGraphicEl(t,e),a.add(e)}).update(function(t,e){var i=o.getItemGraphicEl(e);i.updateData(n,t),a.add(i),n.setItemGraphicEl(t,i)}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e)}).execute(),this._data=n},remove:function(){this.group.removeAll(),this._data=null},dispose:function(){}});ar(v(tI,"funnel")),or(function(t,e,i){t.eachSeriesByType("funnel",function(t){var i=t.getData(),n=t.get("sort"),o=Vu(t,e),a=Bu(i,n),r=[Si(t.get("minSize"),o.width),Si(t.get("maxSize"),o.width)],s=i.getDataExtent("value"),l=t.get("min"),h=t.get("max");null==l&&(l=Math.min(s[0],0)),null==h&&(h=s[1]);var u=t.get("funnelAlign"),c=t.get("gap"),d=(o.height-c*(i.count()-1))/i.count(),f=o.y,p=function(t,e){var n,a=wi(i.get("value",t)||0,[l,h],r,!0);switch(u){case"left":n=o.x;break;case"center":n=o.x+(o.width-a)/2;break;case"right":n=o.x+o.width-a}return[[n,e],[n+a,e]]};"ascending"===n&&(d=-d,c=-c,f+=o.height,a=a.reverse());for(var g=0;g<a.length;g++){var m=a[g],v=a[g+1],y=p(m,f),x=p(v,f+d);f+=d+c,i.setItemLayout(m,{points:y.concat(x.slice().reverse())})}Gu(i)})}),er(v(oI,"funnel"));var PT=function(t,e,i,n,o){US.call(this,t,e,i),this.type=n||"value",this.axisIndex=o};PT.prototype={constructor:PT,model:null,isHorizontal:function(){return"horizontal"!==this.coordinateSystem.getModel().get("layout")}},h(PT,US);var OT=function(t,e,i,n,o,a){e[0]=Zu(e[0],i),e[1]=Zu(e[1],i),t=t||0;var r=i[1]-i[0];null!=o&&(o=Zu(o,[0,r])),null!=a&&(a=Math.max(a,null!=o?o:0)),"all"===n&&(o=a=Math.abs(e[1]-e[0]),n=0);var s=Fu(e,n);e[n]+=t;var l=o||0,h=i.slice();s.sign<0?h[0]+=l:h[1]-=l,e[n]=Zu(e[n],h);u=Fu(e,n);null!=o&&(u.sign!==s.sign||u.span<o)&&(e[1-n]=e[n]+s.sign*o);var u=Fu(e,n);return null!=a&&u.span>a&&(e[1-n]=e[n]+u.sign*a),e},zT=d,NT=Math.min,ET=Math.max,RT=Math.floor,VT=Math.ceil,BT=Mi,GT=Math.PI;Uu.prototype={type:"parallel",constructor:Uu,_init:function(t,e,i){var n=t.dimensions,o=t.parallelAxisIndex;zT(n,function(t,i){var n=o[i],a=e.getComponent("parallelAxis",n),r=this._axesMap.set(t,new PT(t,Er(a),[0,0],a.get("type"),n)),s="category"===r.type;r.onBand=s&&a.get("boundaryGap"),r.inverse=a.get("inverse"),a.axis=r,r.model=a,r.coordinateSystem=a.coordinateSystem=this},this)},update:function(t,e){this._updateAxesFromSeries(this._model,t)},containPoint:function(t){var e=this._makeLayoutInfo(),i=e.axisBase,n=e.layoutBase,o=e.pixelDimIndex,a=t[1-o],r=t[o];return a>=i&&a<=i+e.axisLength&&r>=n&&r<=n+e.layoutLength},getModel:function(){return this._model},_updateAxesFromSeries:function(t,e){e.eachSeries(function(i){if(t.contains(i,e)){var n=i.getData();zT(this.dimensions,function(t){var e=this._axesMap.get(t);e.scale.unionExtentFromData(n,t),Nr(e.scale,e.model)},this)}},this)},resize:function(t,e){this._rect=Ko(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),this._layoutAxes()},getRect:function(){return this._rect},_makeLayoutInfo:function(){var t,e=this._model,i=this._rect,n=["x","y"],o=["width","height"],a=e.get("layout"),r="horizontal"===a?0:1,s=i[o[r]],l=[0,s],h=this.dimensions.length,u=Xu(e.get("axisExpandWidth"),l),c=Xu(e.get("axisExpandCount")||0,[0,h]),d=e.get("axisExpandable")&&h>3&&h>c&&c>1&&u>0&&s>0,f=e.get("axisExpandWindow");f?(t=Xu(f[1]-f[0],l),f[1]=f[0]+t):(t=Xu(u*(c-1),l),(f=[u*(e.get("axisExpandCenter")||RT(h/2))-t/2])[1]=f[0]+t);var p=(s-t)/(h-c);p<3&&(p=0);var g=[RT(BT(f[0]/u,1))+1,VT(BT(f[1]/u,1))-1],m=p/u*f[0];return{layout:a,pixelDimIndex:r,layoutBase:i[n[r]],layoutLength:s,axisBase:i[n[1-r]],axisLength:i[o[1-r]],axisExpandable:d,axisExpandWidth:u,axisCollapseWidth:p,axisExpandWindow:f,axisCount:h,winInnerIndices:g,axisExpandWindow0Pos:m}},_layoutAxes:function(){var t=this._rect,e=this._axesMap,i=this.dimensions,n=this._makeLayoutInfo(),o=n.layout;e.each(function(t){var e=[0,n.axisLength],i=t.inverse?1:0;t.setExtent(e[i],e[1-i])}),zT(i,function(i,a){var r=(n.axisExpandable?qu:ju)(a,n),s={horizontal:{x:r.position,y:n.axisLength},vertical:{x:0,y:r.position}},l={horizontal:GT/2,vertical:0},h=[s[o].x+t.x,s[o].y+t.y],u=l[o],c=ot();ht(c,c,u),lt(c,c,h),this._axesLayout[i]={position:h,rotation:u,transform:c,axisNameAvailableWidth:r.axisNameAvailableWidth,axisLabelShow:r.axisLabelShow,nameTruncateMaxWidth:r.nameTruncateMaxWidth,tickDirection:1,labelDirection:1,labelInterval:e.get(i).getLabelInterval()}},this)},getAxis:function(t){return this._axesMap.get(t)},dataToPoint:function(t,e){return this.axisCoordToPoint(this._axesMap.get(e).dataToCoord(t),e)},eachActiveState:function(t,e,i){for(var n=this.dimensions,o=this._axesMap,a=this.hasAxisBrushed(),r=0,s=t.count();r<s;r++){var l,h=t.getValues(n,r);if(a){l="active";for(var u=0,c=n.length;u<c;u++){var d=n[u];if("inactive"===o.get(d).model.getActiveState(h[u],u)){l="inactive";break}}}else l="normal";e.call(i,l,r)}},hasAxisBrushed:function(){for(var t=this.dimensions,e=this._axesMap,i=!1,n=0,o=t.length;n<o;n++)"normal"!==e.get(t[n]).model.getActiveState()&&(i=!0);return i},axisCoordToPoint:function(t,e){return Io([t,0],this._axesLayout[e].transform)},getAxisLayout:function(t){return i(this._axesLayout[t])},getSlidedAxisExpandWindow:function(t){var e=this._makeLayoutInfo(),i=e.pixelDimIndex,n=e.axisExpandWindow.slice(),o=n[1]-n[0],a=[0,e.axisExpandWidth*(e.axisCount-1)];if(!this.containPoint(t))return{behavior:"none",axisExpandWindow:n};var r,s=t[i]-e.layoutBase-e.axisExpandWindow0Pos,l="slide",h=e.axisCollapseWidth,u=this._model.get("axisExpandSlideTriggerArea"),c=null!=u[0];if(h)c&&h&&s<o*u[0]?(l="jump",r=s-o*u[2]):c&&h&&s>o*(1-u[0])?(l="jump",r=s-o*(1-u[2])):(r=s-o*u[1])>=0&&(r=s-o*(1-u[1]))<=0&&(r=0),(r*=e.axisExpandWidth/h)?OT(r,n,a,"all"):l="none";else{o=n[1]-n[0];(n=[ET(0,a[1]*s/o-o/2)])[1]=NT(a[1],n[0]+o),n[0]=n[1]-o}return{axisExpandWindow:n,behavior:l}}},ua.register("parallel",{create:function(t,e){var i=[];return t.eachComponent("parallel",function(n,o){var a=new Uu(n,t,e);a.name="parallel_"+o,a.resize(n,e),n.coordinateSystem=a,a.model=n,i.push(a)}),t.eachSeries(function(e){if("parallel"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"parallel",index:e.get("parallelIndex"),id:e.get("parallelId")})[0];e.coordinateSystem=i.coordinateSystem}}),i}});var WT=Ub.extend({type:"baseParallelAxis",axis:null,activeIntervals:[],getAreaSelectStyle:function(){return $x([["fill","color"],["lineWidth","borderWidth"],["stroke","borderColor"],["width","width"],["opacity","opacity"]])(this.getModel("areaSelectStyle"))},setActiveIntervals:function(t){var e=this.activeIntervals=i(t);if(e)for(var n=e.length-1;n>=0;n--)Ii(e[n])},getActiveState:function(t){var e=this.activeIntervals;if(!e.length)return"normal";if(null==t)return"inactive";for(var i=0,n=e.length;i<n;i++)if(e[i][0]<=t&&t<=e[i][1])return"active";return"inactive"}}),HT={type:"value",dim:null,areaSelectStyle:{width:20,borderWidth:1,borderColor:"rgba(160,197,232)",color:"rgba(160,197,232)",opacity:.3},realtime:!0,z:10};n(WT.prototype,zS),_M("parallel",WT,function(t,e){return e.type||(e.data?"category":"value")},HT),Ub.extend({type:"parallel",dependencies:["parallelAxis"],coordinateSystem:null,dimensions:null,parallelAxisIndex:null,layoutMode:"box",defaultOption:{zlevel:0,z:0,left:80,top:60,right:80,bottom:60,layout:"horizontal",axisExpandable:!1,axisExpandCenter:null,axisExpandCount:0,axisExpandWidth:50,axisExpandRate:17,axisExpandDebounce:50,axisExpandSlideTriggerArea:[-.15,.05,.4],axisExpandTriggerOn:"click",parallelAxisDefault:null},init:function(){Ub.prototype.init.apply(this,arguments),this.mergeOption({})},mergeOption:function(t){var e=this.option;t&&n(e,t,!0),this._initDimensions()},contains:function(t,e){var i=t.get("parallelIndex");return null!=i&&e.getComponent("parallel",i)===this},setAxisExpand:function(t){d(["axisExpandable","axisExpandCenter","axisExpandCount","axisExpandWidth","axisExpandWindow"],function(e){t.hasOwnProperty(e)&&(this.option[e]=t[e])},this)},_initDimensions:function(){var t=this.dimensions=[],e=this.parallelAxisIndex=[];d(g(this.dependentModels.parallelAxis,function(t){return(t.get("parallelIndex")||0)===this.componentIndex},this),function(i){t.push("dim"+i.get("dim")),e.push(i.componentIndex)})}}),ir({type:"axisAreaSelect",event:"axisAreaSelected",update:"updateVisual"},function(t,e){e.eachComponent({mainType:"parallelAxis",query:t},function(e){e.axis.model.setActiveIntervals(t.intervals)})}),ir("parallelAxisExpand",function(t,e){e.eachComponent({mainType:"parallel",query:t},function(e){e.setAxisExpand(t)})});var FT=v,ZT=d,UT=f,XT=Math.min,jT=Math.max,qT=Math.pow,YT=1e4,$T=6,KT=6,JT="globalPan",QT={w:[0,0],e:[0,1],n:[1,0],s:[1,1]},tA={w:"ew",e:"ew",n:"ns",s:"ns",ne:"nesw",sw:"nesw",nw:"nwse",se:"nwse"},eA={brushStyle:{lineWidth:2,stroke:"rgba(0,0,0,0.3)",fill:"rgba(0,0,0,0.1)"},transformable:!0,brushMode:"single",removeOnClick:!1},iA=0;Yu.prototype={constructor:Yu,enableBrush:function(t){return this._brushType&&Ku(this),t.brushType&&$u(this,t),this},setPanels:function(t){if(t&&t.length){var e=this._panels={};d(t,function(t){e[t.panelId]=i(t)})}else this._panels=null;return this},mount:function(t){t=t||{},this._enableGlobalPan=t.enableGlobalPan;var e=this.group;return this._zr.add(e),e.attr({position:t.position||[0,0],rotation:t.rotation||0,scale:t.scale||[1,1]}),this._transform=e.getLocalTransform(),this},eachCover:function(t,e){ZT(this._covers,t,e)},updateCovers:function(t){function e(t,e){return(null!=t.id?t.id:a+e)+"-"+t.brushType}function o(e,i){var n=t[e];if(null!=i&&r[i]===h)s[e]=r[i];else{var o=s[e]=null!=i?(r[i].__brushOption=n,r[i]):Qu(l,Ju(l,n));ic(l,o)}}t=f(t,function(t){return n(i(eA),t,!0)});var a="\0-brush-index-",r=this._covers,s=this._covers=[],l=this,h=this._creatingCover;return new fr(r,t,function(t,i){return e(t.__brushOption,i)},e).add(o).update(o).remove(function(t){r[t]!==h&&l.group.remove(r[t])}).execute(),this},unmount:function(){return this.enableBrush(!1),rc(this),this._zr.remove(this.group),this},dispose:function(){this.unmount(),this.off()}},u(Yu,fy);var nA={mousedown:function(t){if(this._dragging)Cc.call(this,t);else if(!t.target||!t.target.draggable){Mc(t);var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);this._creatingCover=null,(this._creatingPanel=oc(this,t,e))&&(this._dragging=!0,this._track=[e.slice()])}},mousemove:function(t){var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);if(Sc(this,t,e),this._dragging){Mc(t);var i=Tc(this,t,e,!1);i&&sc(this,i)}},mouseup:Cc},oA={lineX:Dc(0),lineY:Dc(1),rect:{createCover:function(t,e){return uc(FT(yc,function(t){return t},function(t){return t}),t,e,["w","e","n","s","se","sw","ne","nw"])},getCreatingRange:function(t){var e=hc(t);return gc(e[1][0],e[1][1],e[0][0],e[0][1])},updateCoverShape:function(t,e,i,n){cc(t,e,i,n)},updateCommon:dc,contain:Ic},polygon:{createCover:function(t,e){var i=new jy;return i.add(new cb({name:"main",style:pc(e),silent:!0})),i},getCreatingRange:function(t){return t},endCreating:function(t,e){e.remove(e.childAt(0)),e.add(new ub({name:"main",draggable:!0,drift:FT(xc,t,e),ondragend:FT(sc,t,{isEnd:!0})}))},updateCoverShape:function(t,e,i,n){e.childAt(0).setShape({points:bc(t,e,i)})},updateCommon:dc,contain:Ic}},aA=["axisLine","axisTickLabel","axisName"],rA=lr({type:"parallelAxis",init:function(t,e){rA.superApply(this,"init",arguments),(this._brushController=new Yu(e.getZr())).on("brush",m(this._onBrush,this))},render:function(t,e,i,n){if(!zc(t,e,n)){this.axisModel=t,this.api=i,this.group.removeAll();var o=this._axisGroup;if(this._axisGroup=new jy,this.group.add(this._axisGroup),t.get("show")){var r=Ec(t,e),s=r.coordinateSystem,l=t.getAreaSelectStyle(),h=l.width,u=t.axis.dim,c=a({strokeContainThreshold:h},s.getAxisLayout(u)),f=new DM(t,c);d(aA,f.add,f),this._axisGroup.add(f.getGroup()),this._refreshBrushController(c,l,t,r,h,i);var p=n&&!1===n.animation?null:t;Ao(o,this._axisGroup,p)}}},updateVisual:function(t,e,i,n){this._brushController&&this._brushController.updateCovers(Nc(t))},_refreshBrushController:function(t,e,i,n,o,a){var r=i.axis.getExtent(),s=r[1]-r[0],l=Math.min(30,.1*Math.abs(s)),h=jt.create({x:r[0],y:-o/2,width:s,height:o});h.x-=l,h.width+=2*l,this._brushController.mount({enableGlobalPan:!0,rotation:t.rotation,position:t.position}).setPanels([{panelId:"pl",clipPath:Lc(h),isTargetByCursor:Pc(h,a,n),getLinearBrushOtherExtent:kc(h,0)}]).enableBrush({brushType:"lineX",brushStyle:e,removeOnClick:!0}).updateCovers(Nc(i))},_onBrush:function(t,e){var i=this.axisModel,n=i.axis,o=f(t,function(t){return[n.coordToData(t.range[0],!0),n.coordToData(t.range[1],!0)]});(!i.option.realtime===e.isEnd||e.removeOnClick)&&this.api.dispatchAction({type:"axisAreaSelect",parallelAxisId:i.id,intervals:o})},dispose:function(){this._brushController.dispose()}});lr({type:"parallel",render:function(t,e,i){this._model=t,this._api=i,this._handlers||(this._handlers={},d(sA,function(t,e){i.getZr().on(e,this._handlers[e]=m(t,this))},this)),La(this,"_throttledDispatchExpand",t.get("axisExpandRate"),"fixRate")},dispose:function(t,e){d(this._handlers,function(t,i){e.getZr().off(i,t)}),this._handlers=null},_throttledDispatchExpand:function(t){this._dispatchExpand(t)},_dispatchExpand:function(t){t&&this._api.dispatchAction(a({type:"parallelAxisExpand"},t))}});var sA={mousedown:function(t){Rc(this,"click")&&(this._mouseDownPoint=[t.offsetX,t.offsetY])},mouseup:function(t){var e=this._mouseDownPoint;if(Rc(this,"click")&&e){var i=[t.offsetX,t.offsetY];if(Math.pow(e[0]-i[0],2)+Math.pow(e[1]-i[1],2)>5)return;var n=this._model.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX,t.offsetY]);"none"!==n.behavior&&this._dispatchExpand({axisExpandWindow:n.axisExpandWindow})}this._mouseDownPoint=null},mousemove:function(t){if(!this._mouseDownPoint&&Rc(this,"mousemove")){var e=this._model,i=e.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX,t.offsetY]),n=i.behavior;"jump"===n&&this._throttledDispatchExpand.debounceNextCall(e.get("axisExpandDebounce")),this._throttledDispatchExpand("none"===n?null:{axisExpandWindow:i.axisExpandWindow,animation:"jump"===n&&null})}}};tr(function(t){Wu(t),Hu(t)}),yw.extend({type:"series.parallel",dependencies:["parallel"],visualColorAccessPath:"lineStyle.normal.color",getInitialData:function(t,e){var i=e.getComponent("parallel",this.get("parallelIndex")),n=i.parallelAxisIndex,o=t.data,a=i.dimensions,r=f(Gc(a,o),function(t,i){var r=l(a,t),s=r>=0&&e.getComponent("parallelAxis",n[r]);return s&&"category"===s.get("type")?(Vc(s,t,o),{name:t,type:"ordinal"}):r<0&&xr.guessOrdinal(o,i)?{name:t,type:"ordinal"}:t}),s=new aS(r,this);return s.initData(o),this.option.progressive&&(this.option.animation=!1),s},getRawIndicesByActiveState:function(t){var e=this.coordinateSystem,i=this.getData(),n=[];return e.eachActiveState(i,function(e,o){t===e&&n.push(i.getRawIndex(o))}),n},defaultOption:{zlevel:0,z:2,coordinateSystem:"parallel",parallelIndex:0,label:{normal:{show:!1},emphasis:{show:!1}},inactiveOpacity:.05,activeOpacity:1,lineStyle:{normal:{width:1,opacity:.45,type:"solid"}},progressive:!1,smooth:!1,animationEasing:"linear"}});Ta.extend({type:"parallel",init:function(){this._dataGroup=new jy,this.group.add(this._dataGroup),this._data},render:function(t,e,i,n){this._renderForNormal(t,n)},dispose:function(){},_renderForNormal:function(t,e){var i=this._dataGroup,n=t.getData(),o=this._data,a=t.coordinateSystem,r=a.dimensions,s=t.option.smooth?.3:null;if(n.diff(o).add(function(t){Fc(n,i,t,r,a)}).update(function(i,s){var l=o.getItemGraphicEl(s),h=Hc(n,i,r,a);n.setItemGraphicEl(i,l),wo(l,{shape:{points:h}},e&&!1===e.animation?null:t,i)}).remove(function(t){var e=o.getItemGraphicEl(t);i.remove(e)}).execute(),Zc(n,s),!this._data){var l=Wc(a,t,function(){setTimeout(function(){i.removeClipPath()})});i.setClipPath(l)}this._data=n},remove:function(){this._dataGroup&&this._dataGroup.removeAll(),this._data=null}});var lA=["lineStyle","normal","opacity"];ar(function(t){t.eachSeriesByType("parallel",function(e){var i=e.getModel("itemStyle.normal"),n=e.getModel("lineStyle.normal"),o=t.get("color"),a=n.get("color")||i.get("color")||o[e.seriesIndex%o.length],r=e.get("inactiveOpacity"),s=e.get("activeOpacity"),l=e.getModel("lineStyle.normal").getLineStyle(),h=e.coordinateSystem,u=e.getData(),c={normal:l.opacity,active:s,inactive:r};h.eachActiveState(u,function(t,e){var i=u.getItemModel(e),n=c[t];if("normal"===t){var o=i.get(lA,!0);null!=o&&(n=o)}u.setItemVisual(e,"opacity",n)}),u.setVisual("color",a)})});var hA=yw.extend({type:"series.sankey",layoutInfo:null,getInitialData:function(t){var e=t.edges||t.links,i=t.data||t.nodes;if(i&&e)return hT(i,e,this,!0).data},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},formatTooltip:function(t,e,i){if("edge"===i){var n=this.getDataParams(t,i),o=n.data,a=o.source+" -- "+o.target;return n.value&&(a+=" : "+n.value),Gi(a)}return hA.superCall(this,"formatTooltip",t,e)},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",layout:null,left:"5%",top:"5%",right:"20%",bottom:"5%",nodeWidth:20,nodeGap:8,layoutIterations:32,label:{normal:{show:!0,position:"right",color:"#000",fontSize:12},emphasis:{show:!0}},itemStyle:{normal:{borderWidth:1,borderColor:"#333"}},lineStyle:{normal:{color:"#314656",opacity:.2,curveness:.5},emphasis:{opacity:.6}},animationEasing:"linear",animationDuration:1e3}}),uA=Zn({shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,cpx2:0,cpy2:0,extent:0},buildPath:function(t,e){var i=e.extent/2;t.moveTo(e.x1,e.y1-i),t.bezierCurveTo(e.cpx1,e.cpy1-i,e.cpx2,e.cpy2-i,e.x2,e.y2-i),t.lineTo(e.x2,e.y2+i),t.bezierCurveTo(e.cpx2,e.cpy2+i,e.cpx1,e.cpy1+i,e.x1,e.y1+i),t.closePath()}});ur({type:"sankey",_model:null,render:function(t,e,i){var n=t.getGraph(),o=this.group,a=t.layoutInfo,r=t.getData(),s=t.getData("edge");this._model=t,o.removeAll(),o.attr("position",[a.x,a.y]),n.eachEdge(function(e){var i=new uA;i.dataIndex=e.dataIndex,i.seriesIndex=t.seriesIndex,i.dataType="edge";var n=e.getModel("lineStyle.normal"),a=n.get("curveness"),r=e.node1.getLayout(),l=e.node2.getLayout(),h=e.getLayout();i.shape.extent=Math.max(1,h.dy);var u=r.x+r.dx,c=r.y+h.sy+h.dy/2,d=l.x,f=l.y+h.ty+h.dy/2,p=u*(1-a)+d*a,g=c,m=u*a+d*(1-a),v=f;switch(i.setShape({x1:u,y1:c,x2:d,y2:f,cpx1:p,cpy1:g,cpx2:m,cpy2:v}),i.setStyle(n.getItemStyle()),i.style.fill){case"source":i.style.fill=e.node1.getVisual("color");break;case"target":i.style.fill=e.node2.getVisual("color")}uo(i,e.getModel("lineStyle.emphasis").getItemStyle()),o.add(i),s.setItemGraphicEl(e.dataIndex,i)}),n.eachNode(function(e){var i=e.getLayout(),n=e.getModel(),a=n.getModel("label.normal"),s=n.getModel("label.emphasis"),l=new db({shape:{x:i.x,y:i.y,width:e.getLayout().dx,height:e.getLayout().dy},style:n.getModel("itemStyle.normal").getItemStyle()}),h=e.getModel("itemStyle.emphasis").getItemStyle();co(l.style,h,a,s,{labelFetcher:t,labelDataIndex:e.dataIndex,defaultText:e.id,isRectText:!0}),l.setStyle("fill",e.getVisual("color")),uo(l,h),o.add(l),r.setItemGraphicEl(e.dataIndex,l),l.dataType="node"}),!this._data&&t.get("animation")&&o.setClipPath(Xc(o.getBoundingRect(),t,function(){o.removeClipPath()})),this._data=t.getData()},dispose:function(){}});or(function(t,e,i){t.eachSeriesByType("sankey",function(t){var i=t.get("nodeWidth"),n=t.get("nodeGap"),o=qc(t,e);t.layoutInfo=o;var a=o.width,r=o.height,s=t.getGraph(),l=s.nodes,h=s.edges;$c(l),Yc(l,h,i,n,a,r,0!==g(l,function(t){return 0===t.getLayout().value}).length?0:t.get("layoutIterations"))})}),ar(function(t,e){t.eachSeriesByType("sankey",function(t){var e=t.getGraph().nodes;e.sort(function(t,e){return t.getLayout().value-e.getLayout().value});var i=e[0].getLayout().value,n=e[e.length-1].getLayout().value;d(e,function(e){var o=new jI({type:"color",mappingMethod:"linear",dataExtent:[i,n],visual:t.get("color")}).mapValueToVisual(e.getLayout().value);e.setVisual("color",o);var a=e.getModel().get("itemStyle.normal.color");null!=a&&e.setVisual("color",a)})})});var cA=Nn.extend({type:"whiskerInBox",shape:{},buildPath:function(t,e){for(var i in e)if(e.hasOwnProperty(i)&&0===i.indexOf("ends")){var n=e[i];t.moveTo(n[0][0],n[0][1]),t.lineTo(n[1][0],n[1][1])}}}),dA=gd.prototype;dA._createContent=function(t,e,i){var n=t.getItemLayout(e),o="horizontal"===n.chartLayout?1:0,a=0;this.add(new ub({shape:{points:i?md(n.bodyEnds,o,n):n.bodyEnds},style:{strokeNoScale:!0},z2:100})),this.bodyIndex=a++;var r=f(n.whiskerEnds,function(t){return i?md(t,o,n):t});this.add(new cA({shape:vd(r),style:{strokeNoScale:!0},z2:100})),this.whiskerIndex=a++},dA.updateData=function(t,e,i){var n=this._seriesModel=t.hostModel,o=t.getItemLayout(e),a=Tb[i?"initProps":"updateProps"];a(this.childAt(this.bodyIndex),{shape:{points:o.bodyEnds}},n,e),a(this.childAt(this.whiskerIndex),{shape:vd(o.whiskerEnds)},n,e),this.styleUpdater.call(null,this,t,e)},h(gd,jy);var fA=yd.prototype;fA.updateData=function(t){var e=this.group,i=this._data,n=this.styleUpdater;t.diff(i).add(function(i){if(t.hasValue(i)){var o=new gd(t,i,n,!0);t.setItemGraphicEl(i,o),e.add(o)}}).update(function(o,a){var r=i.getItemGraphicEl(a);t.hasValue(o)?(r?r.updateData(t,o):r=new gd(t,o,n),e.add(r),t.setItemGraphicEl(o,r)):e.remove(r)}).remove(function(t){var n=i.getItemGraphicEl(t);n&&e.remove(n)}).execute(),this._data=t},fA.remove=function(){var t=this.group,e=this._data;this._data=null,e&&e.eachItemGraphicEl(function(e){e&&t.remove(e)})};var pA={_baseAxisDim:null,getInitialData:function(t,e){var i,n,o=e.getComponent("xAxis",this.get("xAxisIndex")),a=e.getComponent("yAxis",this.get("yAxisIndex")),r=o.get("type"),s=a.get("type");"category"===r?(t.layout="horizontal",i=o.getCategories(),n=!0):"category"===s?(t.layout="vertical",i=a.getCategories(),n=!0):t.layout=t.layout||"horizontal";var l=["x","y"],h="horizontal"===t.layout?0:1,u=this._baseAxisDim=l[h],c=l[1-h],f=t.data;n&&d(f,function(t,e){t.value&&y(t.value)?t.value.unshift(e):y(t)&&t.unshift(e)});var p=this.defaultValueDimensions,g=[{name:u,otherDims:{tooltip:!1},dimsDef:["base"]},{name:c,dimsDef:p.slice()}];g=xr(g,f,{encodeDef:this.get("encode"),dimsDef:this.get("dimensions"),dimCount:p.length+1});var m=new aS(g,this);return m.initData(f,i?i.slice():null),m},getBaseAxis:function(){var t=this._baseAxisDim;return this.ecModel.getComponent(t+"Axis",this.get(t+"AxisIndex")).axis}},gA={init:function(){var t=this._whiskerBoxDraw=new yd(this.getStyleUpdater());this.group.add(t.group)},render:function(t,e,i){this._whiskerBoxDraw.updateData(t.getData())},remove:function(t){this._whiskerBoxDraw.remove()}};u(yw.extend({type:"series.boxplot",dependencies:["xAxis","yAxis","grid"],defaultValueDimensions:["min","Q1","median","Q3","max"],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,layout:null,boxWidth:[7,50],itemStyle:{normal:{color:"#fff",borderWidth:1},emphasis:{borderWidth:2,shadowBlur:5,shadowOffsetX:2,shadowOffsetY:2,shadowColor:"rgba(0,0,0,0.4)"}},animationEasing:"elasticOut",animationDuration:800}}),pA,!0),u(Ta.extend({type:"boxplot",getStyleUpdater:function(){return xd},dispose:N}),gA,!0);var mA=["itemStyle","normal"],vA=["itemStyle","emphasis"],yA=["itemStyle","normal","borderColor"],xA=d;ar(function(t,e){var i=t.get("color");t.eachRawSeriesByType("boxplot",function(e){var n=i[e.seriesIndex%i.length],o=e.getData();o.setVisual({legendSymbol:"roundRect",color:e.get(yA)||n}),t.isSeriesFiltered(e)||o.each(function(t){var e=o.getItemModel(t);o.setItemVisual(t,{color:e.get(yA,!0)})})})}),or(function(t){var e=_d(t);xA(e,function(t){var e=t.seriesModels;e.length&&(bd(t),xA(e,function(e,i){wd(e,t.boxOffsetList[i],t.boxWidthList[i])}))})}),u(yw.extend({type:"series.candlestick",dependencies:["xAxis","yAxis","grid"],defaultValueDimensions:["open","close","lowest","highest"],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,layout:null,itemStyle:{normal:{color:"#c23531",color0:"#314656",borderWidth:1,borderColor:"#c23531",borderColor0:"#314656"},emphasis:{borderWidth:2}},barMaxWidth:null,barMinWidth:null,barWidth:null,animationUpdate:!1,animationEasing:"linear",animationDuration:300},getShadowDim:function(){return"open"},brushSelector:function(t,e,i){var n=e.getItemLayout(t);return i.rect(n.brushRect)}}),pA,!0),u(Ta.extend({type:"candlestick",getStyleUpdater:function(){return Sd},dispose:N}),gA,!0);var _A=["itemStyle","normal"],bA=["itemStyle","emphasis"],wA=["itemStyle","normal","borderColor"],SA=["itemStyle","normal","borderColor0"],MA=["itemStyle","normal","color"],IA=["itemStyle","normal","color0"],TA=T;tr(function(t){t&&y(t.series)&&d(t.series,function(t){b(t)&&"k"===t.type&&(t.type="candlestick")})}),ar(function(t,e){t.eachRawSeriesByType("candlestick",function(e){var i=e.getData();i.setVisual({legendSymbol:"roundRect"}),t.isSeriesFiltered(e)||i.each(function(t){var e=i.getItemModel(t),n=i.getItemLayout(t).sign;i.setItemVisual(t,{color:e.get(n>0?MA:IA),borderColor:e.get(n>0?wA:SA)})})})}),or(function(t){t.eachSeriesByType("candlestick",function(t){var e,i=t.coordinateSystem,n=t.getData(),o=Md(t,n),a=t.get("layout"),r="horizontal"===a?0:1,s=1-r,l=["x","y"],h=[];if(d(n.dimensions,function(t){var i=n.getDimensionInfo(t).coordDim;i===l[s]?h.push(t):i===l[r]&&(e=t)}),!(null==e||h.length<4)){var u=0;n.each([e].concat(h),function(){function t(t){var e=[];return e[r]=d,e[s]=t,isNaN(d)||isNaN(t)?[NaN,NaN]:i.dataToPoint(e)}function e(t,e){var i=t.slice(),n=t.slice();i[r]=Kn(i[r]+o/2,1,!1),n[r]=Kn(n[r]-o/2,1,!0),e?M.push(i,n):M.push(n,i)}function l(t){return t[r]=Kn(t[r],1),t}var c=arguments,d=c[0],f=c[h.length+1],p=c[1],g=c[2],m=c[3],v=c[4],y=Math.min(p,g),x=Math.max(p,g),_=t(y),b=t(x),w=t(m),S=[[l(t(v)),l(b)],[l(w),l(_)]],M=[];e(b,0),e(_,1);var I;I=p>g?-1:p<g?1:u>0?n.getItemModel(u-1).get()[2]<=g?1:-1:1,n.setItemLayout(f,{chartLayout:a,sign:I,initBaseline:p>g?b[s]:_[s],bodyEnds:M,whiskerEnds:S,brushRect:function(){var e=t(Math.min(p,g,m,v)),i=t(Math.max(p,g,m,v));return e[r]-=o/2,i[r]-=o/2,{x:e[0],y:e[1],width:s?o:i[0]-e[0],height:s?i[1]-e[1]:o}}()}),++u},!0)}})}),yw.extend({type:"series.effectScatter",dependencies:["grid","polar"],getInitialData:function(t,e){return Sr(t.data,this,e)},brushSelector:"point",defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,effectType:"ripple",progressive:0,showEffectOn:"render",rippleEffect:{period:4,scale:2.5,brushType:"fill"},symbolSize:10}});var AA=Ad.prototype;AA.stopEffectAnimation=function(){this.childAt(1).removeAll()},AA.startEffectAnimation=function(t){for(var e=t.symbolType,i=t.color,n=this.childAt(1),o=0;o<3;o++){var a=Hr(e,-1,-1,2,2,i);a.attr({style:{strokeNoScale:!0},z2:99,silent:!0,scale:[.5,.5]});var r=-o/3*t.period+t.effectOffset;a.animate("",!0).when(t.period,{scale:[t.rippleScale/2,t.rippleScale/2]}).delay(r).start(),a.animateStyle(!0).when(t.period,{opacity:0}).delay(r).start(),n.add(a)}Td(n,t)},AA.updateEffectAnimation=function(t){for(var e=this._effectCfg,i=this.childAt(1),n=["symbolType","period","rippleScale"],o=0;o<n.length;o++){var a=n[o];if(e[a]!==t[a])return this.stopEffectAnimation(),void this.startEffectAnimation(t)}Td(i,t)},AA.highlight=function(){this.trigger("emphasis")},AA.downplay=function(){this.trigger("normal")},AA.updateData=function(t,e){var i=t.hostModel;this.childAt(0).updateData(t,e);var n=this.childAt(1),o=t.getItemModel(e),a=t.getItemVisual(e,"symbol"),r=Id(t.getItemVisual(e,"symbolSize")),s=t.getItemVisual(e,"color");n.attr("scale",r),n.traverse(function(t){t.attr({fill:s})});var l=o.getShallow("symbolOffset");if(l){var h=n.position;h[0]=Si(l[0],r[0]),h[1]=Si(l[1],r[1])}n.rotation=(o.getShallow("symbolRotate")||0)*Math.PI/180||0;var u={};if(u.showEffectOn=i.get("showEffectOn"),u.rippleScale=o.get("rippleEffect.scale"),u.brushType=o.get("rippleEffect.brushType"),u.period=1e3*o.get("rippleEffect.period"),u.effectOffset=e/t.count(),u.z=o.getShallow("z")||0,u.zlevel=o.getShallow("zlevel")||0,u.symbolType=a,u.color=s,this.off("mouseover").off("mouseout").off("emphasis").off("normal"),"render"===u.showEffectOn)this._effectCfg?this.updateEffectAnimation(u):this.startEffectAnimation(u),this._effectCfg=u;else{this._effectCfg=null,this.stopEffectAnimation();var c=this.childAt(0),d=function(){c.highlight(),"render"!==u.showEffectOn&&this.startEffectAnimation(u)},f=function(){c.downplay(),"render"!==u.showEffectOn&&this.stopEffectAnimation()};this.on("mouseover",d,this).on("mouseout",f,this).on("emphasis",d,this).on("normal",f,this)}this._effectCfg=u},AA.fadeOut=function(t){this.off("mouseover").off("mouseout").off("emphasis").off("normal"),t&&t()},h(Ad,jy),ur({type:"effectScatter",init:function(){this._symbolDraw=new ts(Ad)},render:function(t,e,i){var n=t.getData(),o=this._symbolDraw;o.updateData(n),this.group.add(o.group)},updateLayout:function(){this._symbolDraw.updateLayout()},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(e)},dispose:function(){}}),ar(v(cM,"effectScatter","circle",null)),or(v(dM,"effectScatter"));var CA=yw.extend({type:"series.lines",dependencies:["grid","polar"],visualColorAccessPath:"lineStyle.normal.color",init:function(t){Cd(t),CA.superApply(this,"init",arguments)},mergeOption:function(t){Cd(t),CA.superApply(this,"mergeOption",arguments)},getInitialData:function(t,e){var i=new aS(["value"],this);return i.hasItemOption=!1,i.initData(t.data,[],function(t,e,n,o){if(t instanceof Array)return NaN;i.hasItemOption=!0;var a=t.value;return null!=a?a instanceof Array?a[o]:a:void 0}),i},formatTooltip:function(t){var e=this.getData().getItemModel(t),i=e.get("name");if(i)return i;var n=e.get("fromName"),o=e.get("toName"),a=[];return null!=n&&a.push(n),null!=o&&a.push(o),Gi(a.join(" > "))},defaultOption:{coordinateSystem:"geo",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,symbol:["none","none"],symbolSize:[10,10],geoIndex:0,effect:{show:!1,period:4,constantSpeed:0,symbol:"circle",symbolSize:3,loop:!0,trailLength:.2},large:!1,largeThreshold:2e3,polyline:!1,label:{normal:{show:!1,position:"end"}},lineStyle:{normal:{opacity:.5}}}}),DA=Dd.prototype;DA.createLine=function(t,e,i){return new bu(t,e,i)},DA._updateEffectSymbol=function(t,e){var i=t.getItemModel(e).getModel("effect"),n=i.get("symbolSize"),o=i.get("symbol");y(n)||(n=[n,n]);var a=i.get("color")||t.getItemVisual(e,"color"),r=this.childAt(1);this._symbolType!==o&&(this.remove(r),(r=Hr(o,-.5,-.5,1,1,a)).z2=100,r.culling=!0,this.add(r)),r&&(r.setStyle("shadowColor",a),r.setStyle(i.getItemStyle(["color"])),r.attr("scale",n),r.setColor(a),r.attr("scale",n),this._symbolType=o,this._updateEffectAnimation(t,i,e))},DA._updateEffectAnimation=function(t,e,i){var n=this.childAt(1);if(n){var o=this,a=t.getItemLayout(i),r=1e3*e.get("period"),s=e.get("loop"),l=e.get("constantSpeed"),h=I(e.get("delay"),function(e){return e/t.count()*r/3}),u="function"==typeof h;if(n.ignore=!0,this.updateAnimationPoints(n,a),l>0&&(r=this.getLineLength(n)/l*1e3),r!==this._period||s!==this._loop){n.stopAnimation();var c=h;u&&(c=h(i)),n.__t>0&&(c=-r*n.__t),n.__t=0;var d=n.animate("",s).when(r,{__t:1}).delay(c).during(function(){o.updateSymbolPosition(n)});s||d.done(function(){o.remove(n)}),d.start()}this._period=r,this._loop=s}},DA.getLineLength=function(t){return hy(t.__p1,t.__cp1)+hy(t.__cp1,t.__p2)},DA.updateAnimationPoints=function(t,e){t.__p1=e[0],t.__p2=e[1],t.__cp1=e[2]||[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2]},DA.updateData=function(t,e,i){this.childAt(0).updateData(t,e,i),this._updateEffectSymbol(t,e)},DA.updateSymbolPosition=function(t){var e=t.__p1,i=t.__p2,n=t.__cp1,o=t.__t,a=t.position,r=un,s=cn;a[0]=r(e[0],n[0],i[0],o),a[1]=r(e[1],n[1],i[1],o);var l=s(e[0],n[0],i[0],o),h=s(e[1],n[1],i[1],o);t.rotation=-Math.atan2(h,l)-Math.PI/2,t.ignore=!1},DA.updateLayout=function(t,e){this.childAt(0).updateLayout(t,e);var i=t.getItemModel(e).getModel("effect");this._updateEffectAnimation(t,i,e)},h(Dd,jy);var LA=Ld.prototype;LA._createPolyline=function(t,e,i){var n=t.getItemLayout(e),o=new cb({shape:{points:n}});this.add(o),this._updateCommonStl(t,e,i)},LA.updateData=function(t,e,i){var n=t.hostModel;wo(this.childAt(0),{shape:{points:t.getItemLayout(e)}},n,e),this._updateCommonStl(t,e,i)},LA._updateCommonStl=function(t,e,i){var n=this.childAt(0),o=t.getItemModel(e),a=t.getItemVisual(e,"color"),s=i&&i.lineStyle,l=i&&i.hoverLineStyle;i&&!t.hasItemOption||(s=o.getModel("lineStyle.normal").getLineStyle(),l=o.getModel("lineStyle.emphasis").getLineStyle()),n.useStyle(r({strokeNoScale:!0,fill:"none",stroke:a},s)),n.hoverStyle=l,uo(this)},LA.updateLayout=function(t,e){this.childAt(0).setShape("points",t.getItemLayout(e))},h(Ld,jy);var kA=kd.prototype;kA.createLine=function(t,e,i){return new Ld(t,e,i)},kA.updateAnimationPoints=function(t,e){this._points=e;for(var i=[0],n=0,o=1;o<e.length;o++){var a=e[o-1],r=e[o];n+=hy(a,r),i.push(n)}if(0!==n){for(o=0;o<i.length;o++)i[o]/=n;this._offsets=i,this._length=n}},kA.getLineLength=function(t){return this._length},kA.updateSymbolPosition=function(t){var e=t.__t,i=this._points,n=this._offsets,o=i.length;if(n){var a=this._lastFrame;if(e<this._lastFramePercent){for(r=Math.min(a+1,o-1);r>=0&&!(n[r]<=e);r--);r=Math.min(r,o-2)}else{for(var r=a;r<o&&!(n[r]>e);r++);r=Math.min(r-1,o-2)}Y(t.position,i[r],i[r+1],(e-n[r])/(n[r+1]-n[r]));var s=i[r+1][0]-i[r][0],l=i[r+1][1]-i[r][1];t.rotation=-Math.atan2(l,s)-Math.PI/2,this._lastFrame=r,this._lastFramePercent=e,t.ignore=!1}},h(kd,Dd);var PA=Zn({shape:{polyline:!1,segs:[]},buildPath:function(t,e){for(var i=e.segs,n=e.polyline,o=0;o<i.length;o++){var a=i[o];if(n){t.moveTo(a[0][0],a[0][1]);for(var r=1;r<a.length;r++)t.lineTo(a[r][0],a[r][1])}else t.moveTo(a[0][0],a[0][1]),a.length>2?t.quadraticCurveTo(a[2][0],a[2][1],a[1][0],a[1][1]):t.lineTo(a[1][0],a[1][1])}},findDataIndex:function(t,e){for(var i=this.shape,n=i.segs,o=i.polyline,a=Math.max(this.style.lineWidth,1),r=0;r<n.length;r++){var s=n[r];if(o){for(var l=1;l<s.length;l++)if(bn(s[l-1][0],s[l-1][1],s[l][0],s[l][1],a,t,e))return r}else if(s.length>2){if(Sn(s[0][0],s[0][1],s[2][0],s[2][1],s[1][0],s[1][1],a,t,e))return r}else if(bn(s[0][0],s[0][1],s[1][0],s[1][1],a,t,e))return r}return-1}}),OA=Pd.prototype;OA.updateData=function(t){this.group.removeAll();var e=this._lineEl,i=t.hostModel;e.setShape({segs:t.mapArray(t.getItemLayout),polyline:i.get("polyline")}),e.useStyle(i.getModel("lineStyle.normal").getLineStyle());var n=t.getVisual("color");n&&e.setStyle("stroke",n),e.setStyle("fill"),e.seriesIndex=i.seriesIndex,e.on("mousemove",function(t){e.dataIndex=null;var i=e.findDataIndex(t.offsetX,t.offsetY);i>0&&(e.dataIndex=i)}),this.group.add(e)},OA.updateLayout=function(t){var e=t.getData();this._lineEl.setShape({segs:e.mapArray(e.getItemLayout)})},OA.remove=function(){this.group.removeAll()},ur({type:"lines",init:function(){},render:function(t,e,i){var n=t.getData(),o=this._lineDraw,a=t.get("effect.show"),r=t.get("polyline"),s=t.get("large")&&n.count()>=t.get("largeThreshold");a===this._hasEffet&&r===this._isPolyline&&s===this._isLarge||(o&&o.remove(),o=this._lineDraw=s?new Pd:new Mu(r?a?kd:Ld:a?Dd:bu),this._hasEffet=a,this._isPolyline=r,this._isLarge=s);var l=t.get("zlevel"),h=t.get("effect.trailLength"),u=i.getZr(),c="svg"===u.painter.getType();c||u.painter.getLayer(l).clear(!0),null==this._lastZlevel||c||u.configLayer(this._lastZlevel,{motionBlur:!1}),a&&h&&(c||u.configLayer(l,{motionBlur:!0,lastFrameAlpha:Math.max(Math.min(h/10+.9,1),0)})),this.group.add(o.group),o.updateData(n),this._lastZlevel=l},updateLayout:function(t,e,i){this._lineDraw.updateLayout(t);var n=i.getZr();"svg"===n.painter.getType()||n.painter.getLayer(this._lastZlevel).clear(!0)},remove:function(t,e){this._lineDraw&&this._lineDraw.remove(e,!0);var i=e.getZr();"svg"===i.painter.getType()||i.painter.getLayer(this._lastZlevel).clear(!0)},dispose:function(){}});or(function(t){t.eachSeriesByType("lines",function(t){var e=t.coordinateSystem,i=t.getData();i.each(function(n){var o=i.getItemModel(n),a=o.option instanceof Array?o.option:o.get("coords"),r=[];if(t.get("polyline"))for(var s=0;s<a.length;s++)r.push(e.dataToPoint(a[s]));else{r[0]=e.dataToPoint(a[0]),r[1]=e.dataToPoint(a[1]);var l=o.get("lineStyle.normal.curveness");+l&&(r[2]=[(r[0][0]+r[1][0])/2-(r[0][1]-r[1][1])*l,(r[0][1]+r[1][1])/2-(r[1][0]-r[0][0])*l])}i.setItemLayout(n,r)})})}),ar(function(t){t.eachSeriesByType("lines",function(t){var e=t.getData(),i=Od(t.get("symbol")),n=Od(t.get("symbolSize")),o="lineStyle.normal.opacity".split(".");e.setVisual("fromSymbol",i&&i[0]),e.setVisual("toSymbol",i&&i[1]),e.setVisual("fromSymbolSize",n&&n[0]),e.setVisual("toSymbolSize",n&&n[1]),e.setVisual("opacity",t.get(o)),e.each(function(t){var i=e.getItemModel(t),n=Od(i.getShallow("symbol",!0)),a=Od(i.getShallow("symbolSize",!0)),r=i.get(o);n[0]&&e.setItemVisual(t,"fromSymbol",n[0]),n[1]&&e.setItemVisual(t,"toSymbol",n[1]),a[0]&&e.setItemVisual(t,"fromSymbolSize",a[0]),a[1]&&e.setItemVisual(t,"toSymbolSize",a[1]),e.setItemVisual(t,"opacity",r)})})}),yw.extend({type:"series.heatmap",getInitialData:function(t,e){return Sr(t.data,this,e)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,geoIndex:0,blurSize:30,pointSize:20,maxOpacity:1,minOpacity:0}});zd.prototype={update:function(t,e,i,n,o,a){var r=this._getBrush(),s=this._getGradient(t,o,"inRange"),l=this._getGradient(t,o,"outOfRange"),h=this.pointSize+this.blurSize,u=this.canvas,c=u.getContext("2d"),d=t.length;u.width=e,u.height=i;for(var f=0;f<d;++f){var p=t[f],g=p[0],m=p[1],v=n(p[2]);c.globalAlpha=v,c.drawImage(r,g-h,m-h)}if(!u.width||!u.height)return u;for(var y=c.getImageData(0,0,u.width,u.height),x=y.data,_=0,b=x.length,w=this.minOpacity,S=this.maxOpacity-w;_<b;){var v=x[_+3]/256,M=4*Math.floor(255*v);if(v>0){var I=a(v)?s:l;v>0&&(v=v*S+w),x[_++]=I[M],x[_++]=I[M+1],x[_++]=I[M+2],x[_++]=I[M+3]*v*256}else _+=4}return c.putImageData(y,0,0),u},_getBrush:function(){var t=this._brushCanvas||(this._brushCanvas=iy()),e=this.pointSize+this.blurSize,i=2*e;t.width=i,t.height=i;var n=t.getContext("2d");return n.clearRect(0,0,i,i),n.shadowOffsetX=i,n.shadowBlur=this.blurSize,n.shadowColor="#000",n.beginPath(),n.arc(-e,e,this.pointSize,0,2*Math.PI,!0),n.closePath(),n.fill(),t},_getGradient:function(t,e,i){for(var n=this._gradientPixels,o=n[i]||(n[i]=new Uint8ClampedArray(1024)),a=[0,0,0,0],r=0,s=0;s<256;s++)e[i](s/255,!0,a),o[r++]=a[0],o[r++]=a[1],o[r++]=a[2],o[r++]=a[3];return o}},ur({type:"heatmap",render:function(t,e,i){var n;e.eachComponent("visualMap",function(e){e.eachTargetSeries(function(i){i===t&&(n=e)})}),this.group.removeAll();var o=t.coordinateSystem;"cartesian2d"===o.type||"calendar"===o.type?this._renderOnCartesianAndCalendar(o,t,i):Rd(o)&&this._renderOnGeo(o,t,n,i)},dispose:function(){},_renderOnCartesianAndCalendar:function(t,e,i){if("cartesian2d"===t.type)var n=t.getAxis("x"),o=t.getAxis("y"),r=n.getBandWidth(),s=o.getBandWidth();var l=this.group,h=e.getData(),u=e.getModel("itemStyle.normal").getItemStyle(["color"]),c=e.getModel("itemStyle.emphasis").getItemStyle(),d=e.getModel("label.normal"),f=e.getModel("label.emphasis"),p=t.type,g="cartesian2d"===p?[e.coordDimToDataDim("x")[0],e.coordDimToDataDim("y")[0],e.coordDimToDataDim("value")[0]]:[e.coordDimToDataDim("time")[0],e.coordDimToDataDim("value")[0]];h.each(function(i){var n;if("cartesian2d"===p){if(isNaN(h.get(g[2],i)))return;var o=t.dataToPoint([h.get(g[0],i),h.get(g[1],i)]);n=new db({shape:{x:o[0]-r/2,y:o[1]-s/2,width:r,height:s},style:{fill:h.getItemVisual(i,"color"),opacity:h.getItemVisual(i,"opacity")}})}else{if(isNaN(h.get(g[1],i)))return;n=new db({z2:1,shape:t.dataToRect([h.get(g[0],i)]).contentShape,style:{fill:h.getItemVisual(i,"color"),opacity:h.getItemVisual(i,"opacity")}})}var m=h.getItemModel(i);h.hasItemOption&&(u=m.getModel("itemStyle.normal").getItemStyle(["color"]),c=m.getModel("itemStyle.emphasis").getItemStyle(),d=m.getModel("label.normal"),f=m.getModel("label.emphasis"));var v=e.getRawValue(i),y="-";v&&null!=v[2]&&(y=v[2]),co(u,c,d,f,{labelFetcher:e,labelDataIndex:i,defaultText:y,isRectText:!0}),n.setStyle(u),uo(n,h.hasItemOption?c:a({},c)),l.add(n),h.setItemGraphicEl(i,n)})},_renderOnGeo:function(t,e,i,n){var o=i.targetVisuals.inRange,a=i.targetVisuals.outOfRange,r=e.getData(),s=this._hmLayer||this._hmLayer||new zd;s.blurSize=e.get("blurSize"),s.pointSize=e.get("pointSize"),s.minOpacity=e.get("minOpacity"),s.maxOpacity=e.get("maxOpacity");var l=t.getViewRect().clone(),h=t.getRoamTransform().transform;l.applyTransform(h);var u=Math.max(l.x,0),c=Math.max(l.y,0),d=Math.min(l.width+l.x,n.getWidth()),f=Math.min(l.height+l.y,n.getHeight()),p=d-u,g=f-c,m=r.mapArray(["lng","lat","value"],function(e,i,n){var o=t.dataToPoint([e,i]);return o[0]-=u,o[1]-=c,o.push(n),o}),v=i.getExtent(),y="visualMap.continuous"===i.type?Ed(v,i.option.range):Nd(v,i.getPieceList(),i.option.selected);s.update(m,p,g,o.color.getNormalizer(),{inRange:o.color.getColorMapper(),outOfRange:a.color.getColorMapper()},y);var x=new qe({style:{width:p,height:g,x:u,y:c,image:s.canvas},silent:!0});this.group.add(x)}});var zA=ZM.extend({type:"series.pictorialBar",dependencies:["grid"],defaultOption:{symbol:"circle",symbolSize:null,symbolRotate:null,symbolPosition:null,symbolOffset:null,symbolMargin:null,symbolRepeat:!1,symbolRepeatDirection:"end",symbolClip:!1,symbolBoundingData:null,symbolPatternSize:400,barGap:"-100%",progressive:0,hoverAnimation:!1},getInitialData:function(t){return t.stack=null,zA.superApply(this,"getInitialData",arguments)}}),NA=["itemStyle","normal","borderWidth"],EA=[{xy:"x",wh:"width",index:0,posDesc:["left","right"]},{xy:"y",wh:"height",index:1,posDesc:["top","bottom"]}],RA=new nb;ur({type:"pictorialBar",render:function(t,e,i){var n=this.group,o=t.getData(),a=this._data,r=t.coordinateSystem,s=!!r.getBaseAxis().isHorizontal(),l=r.grid.getRect(),h={ecSize:{width:i.getWidth(),height:i.getHeight()},seriesModel:t,coordSys:r,coordSysExtent:[[l.x,l.x+l.width],[l.y,l.y+l.height]],isHorizontal:s,valueDim:EA[+s],categoryDim:EA[1-s]};return o.diff(a).add(function(t){if(o.hasValue(t)){var e=Yd(o,t),i=Vd(o,t,e,h),a=Qd(o,h,i);o.setItemGraphicEl(t,a),n.add(a),rf(a,h,i)}}).update(function(t,e){var i=a.getItemGraphicEl(e);if(o.hasValue(t)){var r=Yd(o,t),s=Vd(o,t,r,h),l=nf(o,s);i&&l!==i.__pictorialShapeStr&&(n.remove(i),o.setItemGraphicEl(t,null),i=null),i?tf(i,h,s):i=Qd(o,h,s,!0),o.setItemGraphicEl(t,i),i.__pictorialSymbolMeta=s,n.add(i),rf(i,h,s)}else n.remove(i)}).remove(function(t){var e=a.getItemGraphicEl(t);e&&ef(a,t,e.__pictorialSymbolMeta.animationModel,e)}).execute(),this._data=o,this.group},dispose:N,remove:function(t,e){var i=this.group,n=this._data;t.get("animation")?n&&n.eachItemGraphicEl(function(e){ef(n,e.dataIndex,t,e)}):i.removeAll()}});or(v(nl,"pictorialBar")),ar(v(cM,"pictorialBar","roundRect",null));var VA=function(t,e,i,n,o){US.call(this,t,e,i),this.type=n||"value",this.position=o||"bottom",this.orient=null,this._labelInterval=null};VA.prototype={constructor:VA,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},pointToData:function(t,e){return this.coordinateSystem.pointToData(t,e)[0]},toGlobalCoord:null,toLocalCoord:null},h(VA,US),lf.prototype={type:"singleAxis",axisPointerEnabled:!0,constructor:lf,_init:function(t,e,i){var n=this.dimension,o=new VA(n,Er(t),[0,0],t.get("type"),t.get("position")),a="category"===o.type;o.onBand=a&&t.get("boundaryGap"),o.inverse=t.get("inverse"),o.orient=t.get("orient"),t.axis=o,o.model=t,o.coordinateSystem=this,this._axis=o},update:function(t,e){t.eachSeries(function(t){if(t.coordinateSystem===this){var e=t.getData(),i=this.dimension;this._axis.scale.unionExtentFromData(e,t.coordDimToDataDim(i)),Nr(this._axis.scale,this._axis.model)}},this)},resize:function(t,e){this._rect=Ko({left:t.get("left"),top:t.get("top"),right:t.get("right"),bottom:t.get("bottom"),width:t.get("width"),height:t.get("height")},{width:e.getWidth(),height:e.getHeight()}),this._adjustAxis()},getRect:function(){return this._rect},_adjustAxis:function(){var t=this._rect,e=this._axis,i=e.isHorizontal(),n=i?[0,t.width]:[0,t.height],o=e.reverse?1:0;e.setExtent(n[o],n[1-o]),this._updateAxisTransform(e,i?t.x:t.y)},_updateAxisTransform:function(t,e){var i=t.getExtent(),n=i[0]+i[1],o=t.isHorizontal();t.toGlobalCoord=o?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord=o?function(t){return t-e}:function(t){return n-t+e}},getAxis:function(){return this._axis},getBaseAxis:function(){return this._axis},getAxes:function(){return[this._axis]},getTooltipAxes:function(){return{baseAxes:[this.getAxis()]}},containPoint:function(t){var e=this.getRect(),i=this.getAxis();return"horizontal"===i.orient?i.contain(i.toLocalCoord(t[0]))&&t[1]>=e.y&&t[1]<=e.y+e.height:i.contain(i.toLocalCoord(t[1]))&&t[0]>=e.y&&t[0]<=e.y+e.height},pointToData:function(t){var e=this.getAxis();return[e.coordToData(e.toLocalCoord(t["horizontal"===e.orient?0:1]))]},dataToPoint:function(t){var e=this.getAxis(),i=this.getRect(),n=[],o="horizontal"===e.orient?0:1;return t instanceof Array&&(t=t[0]),n[o]=e.toGlobalCoord(e.dataToCoord(+t)),n[1-o]=0===o?i.y+i.height/2:i.x+i.width/2,n}},ua.register("single",{create:function(t,e){var i=[];return t.eachComponent("singleAxis",function(n,o){var a=new lf(n,t,e);a.name="single_"+o,a.resize(n,e),n.coordinateSystem=a,i.push(a)}),t.eachSeries(function(e){if("singleAxis"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"singleAxis",index:e.get("singleAxisIndex"),id:e.get("singleAxisId")})[0];e.coordinateSystem=i&&i.coordinateSystem}}),i},dimensions:lf.prototype.dimensions});var BA=DM.getInterval,GA=DM.ifIgnoreOnTick,WA=["axisLine","axisTickLabel","axisName"],HA=EM.extend({type:"singleAxis",axisPointerClass:"SingleAxisPointer",render:function(t,e,i,n){var o=this.group;o.removeAll();var a=hf(t),r=new DM(t,a);d(WA,r.add,r),o.add(r.getGroup()),t.get("splitLine.show")&&this._splitLine(t,a.labelInterval),HA.superCall(this,"render",t,e,i,n)},_splitLine:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var n=t.getModel("splitLine"),o=n.getModel("lineStyle"),a=o.get("width"),r=o.get("color"),s=BA(n,e);r=r instanceof Array?r:[r];for(var l=t.coordinateSystem.getRect(),h=i.isHorizontal(),u=[],c=0,d=i.getTicksCoords(),f=[],p=[],g=t.get("axisLabel.showMinLabel"),m=t.get("axisLabel.showMaxLabel"),v=0;v<d.length;++v)if(!GA(i,v,s,d.length,g,m)){var y=i.toGlobalCoord(d[v]);h?(f[0]=y,f[1]=l.y,p[0]=y,p[1]=l.y+l.height):(f[0]=l.x,f[1]=y,p[0]=l.x+l.width,p[1]=y);var x=c++%r.length;u[x]=u[x]||[],u[x].push(new fb(Yn({shape:{x1:f[0],y1:f[1],x2:p[0],y2:p[1]},style:{lineWidth:a},silent:!0})))}for(v=0;v<u.length;++v)this.group.add(Ib(u[v],{style:{stroke:r[v%r.length],lineDash:o.getLineDash(a),lineWidth:a},silent:!0}))}}}),FA=Ub.extend({type:"singleAxis",layoutMode:"box",axis:null,coordinateSystem:null,getCoordSysModel:function(){return this}}),ZA={left:"5%",top:"5%",right:"5%",bottom:"5%",type:"value",position:"bottom",orient:"horizontal",axisLine:{show:!0,lineStyle:{width:2,type:"solid"}},tooltip:{show:!0},axisTick:{show:!0,length:6,lineStyle:{width:2}},axisLabel:{show:!0,interval:"auto"},splitLine:{show:!0,lineStyle:{type:"dashed",opacity:.2}}};n(FA.prototype,zS),_M("single",FA,function(t,e){return e.type||(e.data?"category":"value")},ZA);var UA=function(t,e){var i,n=[],o=t.seriesIndex;if(null==o||!(i=e.getSeriesByIndex(o)))return{point:[]};var a=i.getData(),r=Ho(a,t);if(null==r||y(r))return{point:[]};var s=a.getItemGraphicEl(r),l=i.coordinateSystem;if(i.getTooltipPosition)n=i.getTooltipPosition(r)||[];else if(l&&l.dataToPoint)n=l.dataToPoint(a.getValues(f(l.dimensions,function(t){return i.coordDimToDataDim(t)[0]}),r,!0))||[];else if(s){var h=s.getBoundingRect().clone();h.applyTransform(s.transform),n=[h.x+h.width/2,h.y+h.height/2]}return{point:n,el:s}},XA=d,jA=v,qA=Eb(),YA=(sr({type:"axisPointer",coordSysAxesInfo:null,defaultOption:{show:"auto",triggerOn:null,zlevel:0,z:50,type:"line",snap:!1,triggerTooltip:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#aaa",width:1,type:"solid"},shadowStyle:{color:"rgba(150,150,150,0.3)"},label:{show:!0,formatter:null,precision:"auto",margin:3,color:"#fff",padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,shadowBlur:3,shadowColor:"#aaa"},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}}}),Eb()),$A=d,KA=lr({type:"axisPointer",render:function(t,e,i){var n=e.getComponent("tooltip"),o=t.get("triggerOn")||n&&n.get("triggerOn")||"mousemove|click";_f("axisPointer",i,function(t,e,i){"none"!==o&&("leave"===t||o.indexOf(t)>=0)&&i({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY})})},remove:function(t,e){Tf(e.getZr(),"axisPointer"),KA.superApply(this._model,"remove",arguments)},dispose:function(t,e){Tf("axisPointer",e),KA.superApply(this._model,"dispose",arguments)}}),JA=Eb(),QA=i,tC=m;(Af.prototype={_group:null,_lastGraphicKey:null,_handle:null,_dragging:!1,_lastValue:null,_lastStatus:null,_payloadInfo:null,animationThreshold:15,render:function(t,e,i,n){var o=e.get("value"),a=e.get("status");if(this._axisModel=t,this._axisPointerModel=e,this._api=i,n||this._lastValue!==o||this._lastStatus!==a){this._lastValue=o,this._lastStatus=a;var r=this._group,s=this._handle;if(!a||"hide"===a)return r&&r.hide(),void(s&&s.hide());r&&r.show(),s&&s.show();var l={};this.makeElOption(l,o,t,e,i);var h=l.graphicKey;h!==this._lastGraphicKey&&this.clear(i),this._lastGraphicKey=h;var u=this._moveAnimation=this.determineAnimation(t,e);if(r){var c=v(Cf,e,u);this.updatePointerEl(r,l,c,e),this.updateLabelEl(r,l,c,e)}else r=this._group=new jy,this.createPointerEl(r,l,t,e),this.createLabelEl(r,l,t,e),i.getZr().add(r);Pf(r,e,!0),this._renderHandle(o)}},remove:function(t){this.clear(t)},dispose:function(t){this.clear(t)},determineAnimation:function(t,e){var i=e.get("animation"),n=t.axis,o="category"===n.type,a=e.get("snap");if(!a&&!o)return!1;if("auto"===i||null==i){var r=this.animationThreshold;if(o&&n.getBandWidth()>r)return!0;if(a){var s=Xs(t).seriesDataCount,l=n.getExtent();return Math.abs(l[0]-l[1])/s>r}return!1}return!0===i},makeElOption:function(t,e,i,n,o){},createPointerEl:function(t,e,i,n){var o=e.pointer;if(o){var a=JA(t).pointerEl=new Tb[o.type](QA(e.pointer));t.add(a)}},createLabelEl:function(t,e,i,n){if(e.label){var o=JA(t).labelEl=new db(QA(e.label));t.add(o),Lf(o,n)}},updatePointerEl:function(t,e,i){var n=JA(t).pointerEl;n&&(n.setStyle(e.pointer.style),i(n,{shape:e.pointer.shape}))},updateLabelEl:function(t,e,i,n){var o=JA(t).labelEl;o&&(o.setStyle(e.label.style),i(o,{shape:e.label.shape,position:e.label.position}),Lf(o,n))},_renderHandle:function(t){if(!this._dragging&&this.updateHandleTransform){var e=this._axisPointerModel,i=this._api.getZr(),n=this._handle,o=e.getModel("handle"),a=e.get("status");if(!o.get("show")||!a||"hide"===a)return n&&i.remove(n),void(this._handle=null);var r;this._handle||(r=!0,n=this._handle=Do(o.get("icon"),{cursor:"move",draggable:!0,onmousemove:function(t){bx(t.event)},onmousedown:tC(this._onHandleDragMove,this,0,0),drift:tC(this._onHandleDragMove,this),ondragend:tC(this._onHandleDragEnd,this)}),i.add(n)),Pf(n,e,!1);var s=["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];n.setStyle(o.getItemStyle(null,s));var l=o.get("size");y(l)||(l=[l,l]),n.attr("scale",[l[0]/2,l[1]/2]),La(this,"_doDispatchAxisPointer",o.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,r)}},_moveHandleToValue:function(t,e){Cf(this._axisPointerModel,!e&&this._moveAnimation,this._handle,kf(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)))},_onHandleDragMove:function(t,e){var i=this._handle;if(i){this._dragging=!0;var n=this.updateHandleTransform(kf(i),[t,e],this._axisModel,this._axisPointerModel);this._payloadInfo=n,i.stopAnimation(),i.attr(kf(n)),JA(i).lastProp=null,this._doDispatchAxisPointer()}},_doDispatchAxisPointer:function(){if(this._handle){var t=this._payloadInfo,e=this._axisModel;this._api.dispatchAction({type:"updateAxisPointer",x:t.cursorPoint[0],y:t.cursorPoint[1],tooltipOption:t.tooltipOption,axesInfo:[{axisDim:e.axis.dim,axisIndex:e.componentIndex}]})}},_onHandleDragEnd:function(t){if(this._dragging=!1,this._handle){var e=this._axisPointerModel.get("value");this._moveHandleToValue(e),this._api.dispatchAction({type:"hideTip"})}},getHandleTransform:null,updateHandleTransform:null,clear:function(t){this._lastValue=null,this._lastStatus=null;var e=t.getZr(),i=this._group,n=this._handle;e&&i&&(this._lastGraphicKey=null,i&&e.remove(i),n&&e.remove(n),this._group=null,this._handle=null,this._payloadInfo=null)},doClear:function(){},buildLabel:function(t,e,i){return i=i||0,{x:t[i],y:t[1-i],width:e[i],height:e[1-i]}}}).constructor=Af,Ki(Af);var eC=Af.extend({makeElOption:function(t,e,i,n,o){var a=i.axis,r=a.grid,s=n.get("type"),l=Hf(r,a).getOtherAxis(a).getGlobalExtent(),h=a.toGlobalCoord(a.dataToCoord(e,!0));if(s&&"none"!==s){var u=Of(n),c=iC[s](a,h,l,u);c.style=u,t.graphicKey=c.type,t.pointer=c}Vf(e,t,Js(r.model,i),i,n,o)},getHandleTransform:function(t,e,i){var n=Js(e.axis.grid.model,e,{labelInside:!1});return n.labelMargin=i.get("handle.margin"),{position:Rf(e.axis,t,n),rotation:n.rotation+(n.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,i,n){var o=i.axis,a=o.grid,r=o.getGlobalExtent(!0),s=Hf(a,o).getOtherAxis(o).getGlobalExtent(),l="x"===o.dim?0:1,h=t.position;h[l]+=e[l],h[l]=Math.min(r[1],h[l]),h[l]=Math.max(r[0],h[l]);var u=(s[1]+s[0])/2,c=[u,u];c[l]=h[l];var d=[{verticalAlign:"middle"},{align:"center"}];return{position:h,rotation:t.rotation,cursorPoint:c,tooltipOption:d[l]}}}),iC={line:function(t,e,i,n){var o=Bf([e,i[0]],[e,i[1]],Ff(t));return Yn({shape:o,style:n}),{type:"Line",shape:o}},shadow:function(t,e,i,n){var o=t.getBandWidth(),a=i[1]-i[0];return{type:"Rect",shape:Gf([e-o/2,i[0]],[o,a],Ff(t))}}};EM.registerAxisPointerClass("CartesianAxisPointer",eC),tr(function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={});var e=t.axisPointer.link;e&&!y(e)&&(t.axisPointer.link=[e])}}),er(Pw.PROCESSOR.STATISTIC,function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=Bs(t,e)}),ir({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},function(t,e,i){var n=t.currTrigger,o=[t.x,t.y],a=t,r=t.dispatchAction||m(i.dispatchAction,i),s=e.getComponent("axisPointer").coordSysAxesInfo;if(s){xf(o)&&(o=UA({seriesIndex:a.seriesIndex,dataIndex:a.dataIndex},e).point);var l=xf(o),h=a.axesInfo,u=s.axesInfo,c="leave"===n||xf(o),d={},f={},p={list:[],map:{}},g={showPointer:jA(df,f),showTooltip:jA(ff,p)};XA(s.coordSysMap,function(t,e){var i=l||t.containPoint(o);XA(s.coordSysAxesInfo[e],function(t,e){var n=t.axis,a=vf(h,t);if(!c&&i&&(!h||a)){var r=a&&a.value;null!=r||l||(r=n.pointToData(o)),null!=r&&uf(t,r,g,!1,d)}})});var v={};return XA(u,function(t,e){var i=t.linkGroup;i&&!f[e]&&XA(i.axesInfo,function(e,n){var o=f[n];if(e!==t&&o){var a=o.value;i.mapper&&(a=t.axis.scale.parse(i.mapper(a,yf(e),yf(t)))),v[t.key]=a}})}),XA(v,function(t,e){uf(u[e],t,g,!0,d)}),pf(f,u,d),gf(p,o,t,r),mf(u,0,i),d}});var nC=["x","y"],oC=["width","height"],aC=Af.extend({makeElOption:function(t,e,i,n,o){var a=i.axis,r=a.coordinateSystem,s=Uf(r,1-Zf(a)),l=r.dataToPoint(e)[0],h=n.get("type");if(h&&"none"!==h){var u=Of(n),c=rC[h](a,l,s,u);c.style=u,t.graphicKey=c.type,t.pointer=c}Vf(e,t,hf(i),i,n,o)},getHandleTransform:function(t,e,i){var n=hf(e,{labelInside:!1});return n.labelMargin=i.get("handle.margin"),{position:Rf(e.axis,t,n),rotation:n.rotation+(n.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,i,n){var o=i.axis,a=o.coordinateSystem,r=Zf(o),s=Uf(a,r),l=t.position;l[r]+=e[r],l[r]=Math.min(s[1],l[r]),l[r]=Math.max(s[0],l[r]);var h=Uf(a,1-r),u=(h[1]+h[0])/2,c=[u,u];return c[r]=l[r],{position:l,rotation:t.rotation,cursorPoint:c,tooltipOption:{verticalAlign:"middle"}}}}),rC={line:function(t,e,i,n){var o=Bf([e,i[0]],[e,i[1]],Zf(t));return Yn({shape:o,style:n}),{type:"Line",shape:o}},shadow:function(t,e,i,n){var o=t.getBandWidth(),a=i[1]-i[0];return{type:"Rect",shape:Gf([e-o/2,i[0]],[o,a],Zf(t))}}};EM.registerAxisPointerClass("SingleAxisPointer",aC),lr({type:"single"});var sC=yw.extend({type:"series.themeRiver",dependencies:["singleAxis"],nameMap:null,init:function(t){sC.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()}},fixData:function(t){for(var e=t.length,i=f(jc().key(function(t){return t[2]}).entries(t),function(t){return{name:t.key,dataList:t.values}}),n=i.length,o=-1,a=-1,r=0;r<n;++r){var s=i[r].dataList.length;s>o&&(o=s,a=r)}for(var l=0;l<n;++l)if(l!==a)for(var h=i[l].name,u=0;u<o;++u){for(var c=i[a].dataList[u][0],d=i[l].dataList.length,p=-1,g=0;g<d;++g)if(i[l].dataList[g][0]===c){p=g;break}-1===p&&(t[e]=[],t[e][0]=c,t[e][1]=0,t[e][2]=h,e++)}return t},getInitialData:function(t,e){var i=[],n=e.queryComponents({mainType:"singleAxis",index:this.get("singleAxisIndex"),id:this.get("singleAxisId")})[0].get("type");i=[{name:"time",type:"category"===n?"ordinal":"time"===n?"time":"float"},{name:"value",type:"float"},{name:"name",type:"ordinal"}];for(var o=g(t.data,function(t){return void 0!==t[2]}),a=this.fixData(o||[]),r=[],s=this.nameMap=z(),l=0,h=0;h<a.length;++h)r.push(a[h][2]),s.get(a[h][2])||(s.set(a[h][2],l),l++);i=xr(i,a);var u=new aS(i,this);return u.initData(a,r),u},coordDimToDataDim:function(t){return["time"]},getLayerSeries:function(){for(var t=this.getData(),e=t.count(),i=[],n=0;n<e;++n)i[n]=n;for(var o=f(jc().key(function(e){return t.get("name",e)}).entries(i),function(t){return{name:t.key,indices:t.values}}),a=0;a<o.length;++a)o[a].indices.sort(function(e,i){return t.get("time",e)-t.get("time",i)});return o},getAxisTooltipData:function(t,e,i){y(t)||(t=t?[t]:[]);for(var n,o=this.getData(),a=this.getLayerSeries(),r=[],s=a.length,l=0;l<s;++l){for(var h=Number.MAX_VALUE,u=-1,c=a[l].indices.length,d=0;d<c;++d){var f=o.get(t[0],a[l].indices[d]),p=Math.abs(f-e);p<=h&&(n=f,h=p,u=a[l].indices[d])}r.push(u)}return{dataIndices:r,nestestValue:n}},formatTooltip:function(t){var e=this.getData(),i=e.get("name",t),n=e.get("value",t);return(isNaN(n)||null==n)&&(n="-"),Gi(i+" : "+n)},defaultOption:{zlevel:0,z:2,coordinateSystem:"singleAxis",boundaryGap:["10%","10%"],singleAxisIndex:0,animationEasing:"linear",label:{normal:{margin:4,textAlign:"right",show:!0,position:"left",color:"#000",fontSize:11},emphasis:{show:!0}}}});ur({type:"themeRiver",init:function(){this._layers=[]},render:function(t,e,i){function n(t){return t.name}function o(e,i,n){var o=this._layers;if("remove"!==e){for(var h,u=[],c=[],f=l[i].indices,p=0;p<f.length;p++){var g=r.getItemLayout(f[p]),m=g.x,v=g.y0,y=g.y;u.push([m,v]),c.push([m,v+y]),h=r.getItemVisual(f[p],"color")}var x,_,b=r.getItemLayout(f[0]),w=r.getItemModel(f[p-1]),S=w.getModel("label.normal"),M=S.get("margin");if("add"===e){I=d[i]=new jy;x=new uM({shape:{points:u,stackedOnPoints:c,smooth:.4,stackedOnSmooth:.4,smoothConstraint:!1},z2:0}),_=new ib({style:{x:b.x-M,y:b.y0+b.y/2}}),I.add(x),I.add(_),s.add(I),x.setClipPath(Xf(x.getBoundingRect(),t,function(){x.removeClipPath()}))}else{var I=o[n];x=I.childAt(0),_=I.childAt(1),s.add(I),d[i]=I,wo(x,{shape:{points:u,stackedOnPoints:c}},t),wo(_,{style:{x:b.x-M,y:b.y0+b.y/2}},t)}var T=w.getModel("itemStyle.emphasis"),A=w.getModel("itemStyle.normal");fo(_.style,S,{text:S.get("show")?t.getFormattedLabel(f[p-1],"normal")||r.getName(f[p-1]):null,textVerticalAlign:"middle"}),x.setStyle(a({fill:h},A.getItemStyle(["color"]))),uo(x,T.getItemStyle())}else s.remove(o[i])}var r=t.getData(),s=this.group,l=t.getLayerSeries(),h=r.getLayout("layoutInfo"),u=h.rect,c=h.boundaryGap;s.attr("position",[0,u.y+c[0]]);var d={};new fr(this._layersSeries||[],l,n,n).add(m(o,this,"add")).update(m(o,this,"update")).remove(m(o,this,"remove")).execute(),this._layersSeries=l,this._layers=d},dispose:function(){}});or(function(t,e){t.eachSeriesByType("themeRiver",function(t){var e=t.getData(),i=t.coordinateSystem,n={},o=i.getRect();n.rect=o;var a=t.get("boundaryGap"),r=i.getAxis();n.boundaryGap=a,"horizontal"===r.orient?(a[0]=Si(a[0],o.height),a[1]=Si(a[1],o.height),jf(e,t,o.height-a[0]-a[1])):(a[0]=Si(a[0],o.width),a[1]=Si(a[1],o.width),jf(e,t,o.width-a[0]-a[1])),e.setLayout("layoutInfo",n)})}),ar(function(t){t.eachSeriesByType("themeRiver",function(t){var e=t.getData(),i=t.getRawData(),n=t.get("color"),o=z();e.each(function(t){o.set(e.getRawIndex(t),t)}),i.each(function(a){var r=i.getName(a),s=n[(t.nameMap.get(r)-1)%n.length];i.setItemVisual(a,"color",s);var l=o.get(a);null!=l&&e.setItemVisual(l,"color",s)})})}),er(v(oI,"themeRiver"));var lC=["itemStyle","normal"],hC=["itemStyle","emphasis"],uC=["label","normal"],cC=["label","emphasis"],dC="e\0\0",fC={cartesian2d:function(t){var e=t.grid.getRect();return{coordSys:{type:"cartesian2d",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:m(t.dataToPoint,t),size:m(Yf,t)}}},geo:function(t){var e=t.getBoundingRect();return{coordSys:{type:"geo",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:m(t.dataToPoint,t),size:m($f,t)}}},singleAxis:function(t){var e=t.getRect();return{coordSys:{type:"singleAxis",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:m(t.dataToPoint,t),size:m(Kf,t)}}},polar:function(t){var e=t.getRadiusAxis(),i=t.getAngleAxis(),n=e.getExtent();return n[0]>n[1]&&n.reverse(),{coordSys:{type:"polar",cx:t.cx,cy:t.cy,r:n[1],r0:n[0]},api:{coord:m(function(n){var o=e.dataToRadius(n[0]),a=i.dataToAngle(n[1]),r=t.coordToPoint([o,a]);return r.push(o,a*Math.PI/180),r}),size:m(Jf,t)}}},calendar:function(t){var e=t.getRect(),i=t.getRangeInfo();return{coordSys:{type:"calendar",x:e.x,y:e.y,width:e.width,height:e.height,cellWidth:t.getCellWidth(),cellHeight:t.getCellHeight(),rangeInfo:{start:i.start,end:i.end,weeks:i.weeks,dayCount:i.allDay}},api:{coord:m(t.dataToPoint,t)}}}};hr({type:"series.custom",dependencies:["grid","polar","geo","singleAxis","calendar"],defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0},getInitialData:function(t,e){return Sr(t.data,this,e)}}),ur({type:"custom",_data:null,render:function(t,e,i){var n=this._data,o=t.getData(),a=this.group,r=ip(t,o,e,i);o.diff(n).add(function(e){o.hasValue(e)&&op(null,e,r(e),t,a,o)}).update(function(e,i){var s=n.getItemGraphicEl(i);o.hasValue(e)?op(s,e,r(e),t,a,o):s&&a.remove(s)}).remove(function(t){var e=n.getItemGraphicEl(t);e&&a.remove(e)}).execute(),this._data=o},dispose:N}),tr(function(t){var e=t.graphic;y(e)?e[0]&&e[0].elements?t.graphic=[t.graphic[0]]:t.graphic=[{elements:e}]:e&&!e.elements&&(t.graphic=[{elements:[e]}])});var pC=sr({type:"graphic",defaultOption:{elements:[],parentId:null},_elOptionsToUpdate:null,mergeOption:function(t){var e=this.option.elements;this.option.elements=null,pC.superApply(this,"mergeOption",arguments),this.option.elements=e},optionUpdated:function(t,e){var i=this.option,n=(e?i:t).elements,o=i.elements=e?[]:i.elements,a=[];this._flatten(n,a);var r=Vo(o,a);Bo(r);var s=this._elOptionsToUpdate=[];d(r,function(t,e){var i=t.option;i&&(s.push(i),pp(t,i),gp(o,e,i),mp(o[e],i))},this);for(var l=o.length-1;l>=0;l--)null==o[l]?o.splice(l,1):delete o[l].$action},_flatten:function(t,e,i){d(t,function(t){if(t){i&&(t.parentOption=i),e.push(t);var n=t.children;"group"===t.type&&n&&this._flatten(n,e,t),delete t.children}},this)},useElOptionsToUpdate:function(){var t=this._elOptionsToUpdate;return this._elOptionsToUpdate=null,t}});lr({type:"graphic",init:function(t,e){this._elMap=z(),this._lastGraphicModel},render:function(t,e,i){t!==this._lastGraphicModel&&this._clear(),this._lastGraphicModel=t,this._updateElements(t,i),this._relocate(t,i)},_updateElements:function(t,e){var i=t.useElOptionsToUpdate();if(i){var n=this._elMap,o=this.group;d(i,function(t){var e=t.$action,i=t.id,a=n.get(i),r=t.parentId,s=null!=r?n.get(r):o;if("text"===t.type){var l=t.style;t.hv&&t.hv[1]&&(l.textVerticalAlign=l.textBaseline=null),!l.hasOwnProperty("textFill")&&l.fill&&(l.textFill=l.fill),!l.hasOwnProperty("textStroke")&&l.stroke&&(l.textStroke=l.stroke)}var h=dp(t);e&&"merge"!==e?"replace"===e?(cp(a,n),up(i,s,h,n)):"remove"===e&&cp(a,n):a?a.attr(h):up(i,s,h,n);var u=n.get(i);u&&(u.__ecGraphicWidth=t.width,u.__ecGraphicHeight=t.height)})}},_relocate:function(t,e){for(var i=t.option.elements,n=this.group,o=this._elMap,a=i.length-1;a>=0;a--){var r=i[a],s=o.get(r.id);if(s){var l=s.parent;Jo(s,r,l===n?{width:e.getWidth(),height:e.getHeight()}:{width:l.__ecGraphicWidth||0,height:l.__ecGraphicHeight||0},null,{hv:r.hv,boundingMode:r.bounding})}}},_clear:function(){var t=this._elMap;t.each(function(e){cp(e,t)}),this._elMap=z()},dispose:function(){this._clear()}});var gC=sr({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(t,e,i){this.mergeDefaultAndTheme(t,i),t.selected=t.selected||{}},mergeOption:function(t){gC.superCall(this,"mergeOption",t)},optionUpdated:function(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,i=0;i<t.length;i++){var n=t[i].get("name");if(this.isSelected(n)){this.select(n),e=!0;break}}!e&&this.select(t[0].get("name"))}},_updateData:function(t){var e=f(this.get("data")||[],function(t){return"string"!=typeof t&&"number"!=typeof t||(t={name:t}),new Lo(t,this,this.ecModel)},this);this._data=e;var i=f(t.getSeries(),function(t){return t.name});t.eachSeries(function(t){if(t.legendDataProvider){var e=t.legendDataProvider();i=i.concat(e.mapArray(e.getName))}}),this._availableNames=i},getData:function(){return this._data},select:function(t){var e=this.option.selected;"single"===this.get("selectedMode")&&d(this._data,function(t){e[t.get("name")]=!1}),e[t]=!0},unSelect:function(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1)},toggleSelected:function(t){var e=this.option.selected;e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},isSelected:function(t){var e=this.option.selected;return!(e.hasOwnProperty(t)&&!e[t])&&l(this._availableNames,t)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}});ir("legendToggleSelect","legendselectchanged",v(vp,"toggleSelected")),ir("legendSelect","legendselected",v(vp,"select")),ir("legendUnSelect","legendunselected",v(vp,"unSelect"));var mC=v,vC=d,yC=jy,xC=lr({type:"legend.plain",newlineDisabled:!1,init:function(){this.group.add(this._contentGroup=new yC),this._backgroundEl},getContentGroup:function(){return this._contentGroup},render:function(t,e,i){if(this.resetInner(),t.get("show",!0)){var n=t.get("align");n&&"auto"!==n||(n="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left"),this.renderInner(n,t,e,i);var o=t.getBoxLayoutParams(),a={width:i.getWidth(),height:i.getHeight()},s=t.get("padding"),l=Ko(o,a,s),h=this.layoutInner(t,n,l),u=Ko(r({width:h.width,height:h.height},o),a,s);this.group.attr("position",[u.x-h.x,u.y-h.y]),this.group.add(this._backgroundEl=xp(h,t))}},resetInner:function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl)},renderInner:function(t,e,i,n){var o=this.getContentGroup(),a=z(),r=e.get("selectedMode");vC(e.getData(),function(s,l){var h=s.get("name");if(this.newlineDisabled||""!==h&&"\n"!==h){var u=i.getSeriesByName(h)[0];if(!a.get(h))if(u){var c=u.getData(),d=c.getVisual("color");"function"==typeof d&&(d=d(u.getDataParams(0)));var f=c.getVisual("legendSymbol")||"roundRect",p=c.getVisual("symbol");this._createItem(h,l,s,e,f,p,t,d,r).on("click",mC(_p,h,n)).on("mouseover",mC(bp,u,null,n)).on("mouseout",mC(wp,u,null,n)),a.set(h,!0)}else i.eachRawSeries(function(i){if(!a.get(h)&&i.legendDataProvider){var o=i.legendDataProvider(),u=o.indexOfName(h);if(u<0)return;var c=o.getItemVisual(u,"color");this._createItem(h,l,s,e,"roundRect",null,t,c,r).on("click",mC(_p,h,n)).on("mouseover",mC(bp,i,h,n)).on("mouseout",mC(wp,i,h,n)),a.set(h,!0)}},this)}else o.add(new yC({newline:!0}))},this)},_createItem:function(t,e,i,n,o,r,s,l,h){var u=n.get("itemWidth"),c=n.get("itemHeight"),d=n.get("inactiveColor"),f=n.isSelected(t),p=new yC,g=i.getModel("textStyle"),m=i.get("icon"),v=i.getModel("tooltip"),y=v.parentModel;if(o=m||o,p.add(Hr(o,0,0,u,c,f?l:d,!0)),!m&&r&&(r!==o||"none"==r)){var x=.8*c;"none"===r&&(r="circle"),p.add(Hr(r,(u-x)/2,(c-x)/2,x,x,f?l:d))}var _="left"===s?u+5:-5,b=s,w=n.get("formatter"),S=t;"string"==typeof w&&w?S=w.replace("{name}",null!=t?t:""):"function"==typeof w&&(S=w(t)),p.add(new ib({style:fo({},g,{text:S,x:_,y:c/2,textFill:f?g.getTextColor():d,textAlign:b,textVerticalAlign:"middle"})}));var M=new db({shape:p.getBoundingRect(),invisible:!0,tooltip:v.get("show")?a({content:t,formatter:y.get("formatter",!0)||function(){return t},formatterParams:{componentType:"legend",legendIndex:n.componentIndex,name:t,$vars:["name"]}},v.option):null});return p.add(M),p.eachChild(function(t){t.silent=!0}),M.silent=!h,this.getContentGroup().add(p),uo(p),p.__legendDataIndex=e,p},layoutInner:function(t,e,i){var n=this.getContentGroup();Hb(t.get("orient"),n,t.get("itemGap"),i.width,i.height);var o=n.getBoundingRect();return n.attr("position",[-o.x,-o.y]),this.group.getBoundingRect()}});er(function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.filterSeries(function(t){for(var i=0;i<e.length;i++)if(!e[i].isSelected(t.name))return!1;return!0})}),Ub.registerSubTypeDefaulter("legend",function(){return"plain"});var _C=gC.extend({type:"legend.scroll",setScrollDataIndex:function(t){this.option.scrollDataIndex=t},defaultOption:{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800},init:function(t,e,i,n){var o=ea(t);_C.superCall(this,"init",t,e,i,n),Sp(this,t,o)},mergeOption:function(t,e){_C.superCall(this,"mergeOption",t,e),Sp(this,this.option,t)},getOrient:function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}}}),bC=jy,wC=["width","height"],SC=["x","y"],MC=xC.extend({type:"legend.scroll",newlineDisabled:!0,init:function(){MC.superCall(this,"init"),this._currentIndex=0,this.group.add(this._containerGroup=new bC),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new bC),this._showController},resetInner:function(){MC.superCall(this,"resetInner"),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},renderInner:function(t,e,i,n){function o(t,i){var o=t+"DataIndex",l=Do(e.get("pageIcons",!0)[e.getOrient().name][i],{onclick:m(a._pageGo,a,o,e,n)},{x:-s[0]/2,y:-s[1]/2,width:s[0],height:s[1]});l.name=t,r.add(l)}var a=this;MC.superCall(this,"renderInner",t,e,i,n);var r=this._controllerGroup,s=e.get("pageIconSize",!0);y(s)||(s=[s,s]),o("pagePrev",0);var l=e.getModel("pageTextStyle");r.add(new ib({name:"pageText",style:{textFill:l.getTextColor(),font:l.getFont(),textVerticalAlign:"middle",textAlign:"center"},silent:!0})),o("pageNext",1)},layoutInner:function(t,e,i){var n=this.getContentGroup(),o=this._containerGroup,a=this._controllerGroup,r=t.getOrient().index,s=wC[r],l=wC[1-r],h=SC[1-r];Hb(t.get("orient"),n,t.get("itemGap"),r?i.width:null,r?null:i.height),Hb("horizontal",a,t.get("pageButtonItemGap",!0));var u=n.getBoundingRect(),c=a.getBoundingRect(),d=this._showController=u[s]>i[s],f=[-u.x,-u.y];f[r]=n.position[r];var p=[0,0],g=[-c.x,-c.y],m=T(t.get("pageButtonGap",!0),t.get("itemGap",!0));d&&("end"===t.get("pageButtonPosition",!0)?g[r]+=i[s]-c[s]:p[r]+=c[s]+m),g[1-r]+=u[l]/2-c[l]/2,n.attr("position",f),o.attr("position",p),a.attr("position",g);var v=this.group.getBoundingRect();if((v={x:0,y:0})[s]=d?i[s]:u[s],v[l]=Math.max(u[l],c[l]),v[h]=Math.min(0,c[h]+g[1-r]),o.__rectSize=i[s],d){var y={x:0,y:0};y[s]=Math.max(i[s]-c[s]-m,0),y[l]=v[l],o.setClipPath(new db({shape:y})),o.__rectSize=y[s]}else a.eachChild(function(t){t.attr({invisible:!0,silent:!0})});var x=this._getPageInfo(t);return null!=x.pageIndex&&wo(n,{position:x.contentPosition},!!d&&t),this._updatePageInfoView(t,x),v},_pageGo:function(t,e,i){var n=this._getPageInfo(e)[t];null!=n&&i.dispatchAction({type:"legendScroll",scrollDataIndex:n,legendId:e.id})},_updatePageInfoView:function(t,e){var i=this._controllerGroup;d(["pagePrev","pageNext"],function(n){var o=null!=e[n+"DataIndex"],a=i.childOfName(n);a&&(a.setStyle("fill",o?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),a.cursor=o?"pointer":"default")});var n=i.childOfName("pageText"),o=t.get("pageFormatter"),a=e.pageIndex,r=null!=a?a+1:0,s=e.pageCount;n&&o&&n.setStyle("text",_(o)?o.replace("{current}",r).replace("{total}",s):o({current:r,total:s}))},_getPageInfo:function(t){function e(t){var e=t.getBoundingRect().clone();return e[f]+=t.position[u],e}var i,n,o,a,r=t.get("scrollDataIndex",!0),s=this.getContentGroup(),l=s.getBoundingRect(),h=this._containerGroup.__rectSize,u=t.getOrient().index,c=wC[u],d=wC[1-u],f=SC[u],p=s.position.slice();this._showController?s.eachChild(function(t){t.__legendDataIndex===r&&(a=t)}):a=s.childAt(0);var g=h?Math.ceil(l[c]/h):0;if(a){var m=a.getBoundingRect(),v=a.position[u]+m[f];p[u]=-v-l[f],i=Math.floor(g*(v+m[f]+h/2)/l[c]),i=l[c]&&g?Math.max(0,Math.min(g-1,i)):-1;var y={x:0,y:0};y[c]=h,y[d]=l[d],y[f]=-p[u]-l[f];var x,_=s.children();if(s.eachChild(function(t,i){var n=e(t);n.intersect(y)&&(null==x&&(x=i),o=t.__legendDataIndex),i===_.length-1&&n[f]+n[c]<=y[f]+y[c]&&(o=null)}),null!=x){var b=e(_[x]);if(y[f]=b[f]+b[c]-y[c],x<=0&&b[f]>=y[f])n=null;else{for(;x>0&&e(_[x-1]).intersect(y);)x--;n=_[x].__legendDataIndex}}}return{contentPosition:p,pageIndex:i,pageCount:g,pagePrevDataIndex:n,pageNextDataIndex:o}}});ir("legendScroll","legendscroll",function(t,e){var i=t.scrollDataIndex;null!=i&&e.eachComponent({mainType:"legend",subType:"scroll",query:t},function(t){t.setScrollDataIndex(i)})}),sr({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:8,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}});var IC=d,TC=Bi,AC=["","-webkit-","-moz-","-o-"];Ap.prototype={constructor:Ap,_enterable:!0,update:function(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),i=t.style;"absolute"!==i.position&&"absolute"!==e.position&&(i.position="relative")},show:function(t){clearTimeout(this._hideTimeout);var e=this.el;e.style.cssText="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+Tp(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",this._show=!0},setContent:function(t){this.el.innerHTML=null==t?"":t},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el;return[t.clientWidth,t.clientHeight]},moveTo:function(t,e){var i,n=this._zr;n&&n.painter&&(i=n.painter.getViewportRootOffset())&&(t+=i.offsetLeft,e+=i.offsetTop);var o=this.el.style;o.left=t+"px",o.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(m(this.hide,this),t)):this.hide())},isShow:function(){return this._show}};var CC=m,DC=d,LC=Si,kC=new db({shape:{x:-1,y:-1,width:2,height:2}});lr({type:"tooltip",init:function(t,e){if(!Uv.node){var i=new Ap(e.getDom(),e);this._tooltipContent=i}},render:function(t,e,i){if(!Uv.node){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=i,this._lastDataByCoordSys=null,this._alwaysShowContent=t.get("alwaysShowContent");var n=this._tooltipContent;n.update(),n.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow()}},_initGlobalListener:function(){var t=this._tooltipModel.get("triggerOn");_f("itemTooltip",this._api,CC(function(e,i,n){"none"!==t&&(t.indexOf(e)>=0?this._tryShow(i,n):"leave"===e&&this._hide(n))},this))},_keepShow:function(){var t=this._tooltipModel,e=this._ecModel,i=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var n=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){n.manuallyShowTip(t,e,i,{x:n._lastX,y:n._lastY})})}},manuallyShowTip:function(t,e,i,n){if(n.from!==this.uid&&!Uv.node){var o=Dp(n,i);this._ticket="";var a=n.dataByCoordSys;if(n.tooltip&&null!=n.x&&null!=n.y){var r=kC;r.position=[n.x,n.y],r.update(),r.tooltip=n.tooltip,this._tryShow({offsetX:n.x,offsetY:n.y,target:r},o)}else if(a)this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,event:{},dataByCoordSys:n.dataByCoordSys,tooltipOption:n.tooltipOption},o);else if(null!=n.seriesIndex){if(this._manuallyAxisShowTip(t,e,i,n))return;var s=UA(n,e),l=s.point[0],h=s.point[1];null!=l&&null!=h&&this._tryShow({offsetX:l,offsetY:h,position:n.position,target:s.el,event:{}},o)}else null!=n.x&&null!=n.y&&(i.dispatchAction({type:"updateAxisPointer",x:n.x,y:n.y}),this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,target:i.getZr().findHover(n.x,n.y).target,event:{}},o))}},manuallyHideTip:function(t,e,i,n){var o=this._tooltipContent;this._alwaysShowContent||o.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,n.from!==this.uid&&this._hide(Dp(n,i))},_manuallyAxisShowTip:function(t,e,i,n){var o=n.seriesIndex,a=n.dataIndex,r=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=o&&null!=a&&null!=r){var s=e.getSeriesByIndex(o);if(s&&"axis"===(t=Cp([s.getData().getItemModel(a),s,(s.coordinateSystem||{}).model,t])).get("trigger"))return i.dispatchAction({type:"updateAxisPointer",seriesIndex:o,dataIndex:a,position:n.position}),!0}},_tryShow:function(t,e){var i=t.target;if(this._tooltipModel){this._lastX=t.offsetX,this._lastY=t.offsetY;var n=t.dataByCoordSys;n&&n.length?this._showAxisTooltip(n,t):i&&null!=i.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(t,i,e)):i&&i.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(t,i,e)):(this._lastDataByCoordSys=null,this._hide(e))}},_showOrMove:function(t,e){var i=t.get("showDelay");e=m(e,this),clearTimeout(this._showTimout),i>0?this._showTimout=setTimeout(e,i):e()},_showAxisTooltip:function(t,e){var i=this._ecModel,n=this._tooltipModel,o=[e.offsetX,e.offsetY],a=[],r=[],s=Cp([e.tooltipOption,n]);DC(t,function(t){DC(t.dataByAxis,function(t){var e=i.getComponent(t.axisDim+"Axis",t.axisIndex),n=t.value,o=[];if(e&&null!=n){var s=Ef(n,e.axis,i,t.seriesDataIndices,t.valueLabelOpt);d(t.seriesDataIndices,function(a){var l=i.getSeriesByIndex(a.seriesIndex),h=a.dataIndexInside,u=l&&l.getDataParams(h);u.axisDim=t.axisDim,u.axisIndex=t.axisIndex,u.axisType=t.axisType,u.axisId=t.axisId,u.axisValue=Br(e.axis,n),u.axisValueLabel=s,u&&(r.push(u),o.push(l.formatTooltip(h,!0)))});var l=s;a.push((l?Gi(l)+"<br />":"")+o.join("<br />"))}})},this),a.reverse(),a=a.join("<br /><br />");var l=e.position;this._showOrMove(s,function(){this._updateContentNotChangedOnAxis(t)?this._updatePosition(s,l,o[0],o[1],this._tooltipContent,r):this._showTooltipContent(s,a,r,Math.random(),o[0],o[1],l)})},_showSeriesItemTooltip:function(t,e,i){var n=this._ecModel,o=e.seriesIndex,a=n.getSeriesByIndex(o),r=e.dataModel||a,s=e.dataIndex,l=e.dataType,h=r.getData(),u=Cp([h.getItemModel(s),r,a&&(a.coordinateSystem||{}).model,this._tooltipModel]),c=u.get("trigger");if(null==c||"item"===c){var d=r.getDataParams(s,l),f=r.formatTooltip(s,!1,l),p="item_"+r.name+"_"+s;this._showOrMove(u,function(){this._showTooltipContent(u,f,d,p,t.offsetX,t.offsetY,t.position,t.target)}),i({type:"showTip",dataIndexInside:s,dataIndex:h.getRawIndex(s),seriesIndex:o,from:this.uid})}},_showComponentItemTooltip:function(t,e,i){var n=e.tooltip;if("string"==typeof n){var o=n;n={content:o,formatter:o}}var a=new Lo(n,this._tooltipModel,this._ecModel),r=a.get("content"),s=Math.random();this._showOrMove(a,function(){this._showTooltipContent(a,r,a.get("formatterParams")||{},s,t.offsetX,t.offsetY,t.position,e)}),i({type:"showTip",from:this.uid})},_showTooltipContent:function(t,e,i,n,o,a,r,s){if(this._ticket="",t.get("showContent")&&t.get("show")){var l=this._tooltipContent,h=t.get("formatter");r=r||t.get("position");var u=e;if(h&&"string"==typeof h)u=Wi(h,i,!0);else if("function"==typeof h){var c=CC(function(e,n){e===this._ticket&&(l.setContent(n),this._updatePosition(t,r,o,a,l,i,s))},this);this._ticket=n,u=h(i,n,c)}l.setContent(u),l.show(t),this._updatePosition(t,r,o,a,l,i,s)}},_updatePosition:function(t,e,i,n,o,a,r){var s=this._api.getWidth(),l=this._api.getHeight();e=e||t.get("position");var h=o.getSize(),u=t.get("align"),c=t.get("verticalAlign"),d=r&&r.getBoundingRect().clone();if(r&&d.applyTransform(r.transform),"function"==typeof e&&(e=e([i,n],a,o.el,d,{viewSize:[s,l],contentSize:h.slice()})),y(e))i=LC(e[0],s),n=LC(e[1],l);else if(b(e)){e.width=h[0],e.height=h[1];var f=Ko(e,{width:s,height:l});i=f.x,n=f.y,u=null,c=null}else"string"==typeof e&&r?(i=(p=Op(e,d,h))[0],n=p[1]):(i=(p=Lp(i,n,o.el,s,l,u?null:20,c?null:20))[0],n=p[1]);if(u&&(i-=zp(u)?h[0]/2:"right"===u?h[0]:0),c&&(n-=zp(c)?h[1]/2:"bottom"===c?h[1]:0),t.get("confine")){var p=kp(i,n,o.el,s,l);i=p[0],n=p[1]}o.moveTo(i,n)},_updateContentNotChangedOnAxis:function(t){var e=this._lastDataByCoordSys,i=!!e&&e.length===t.length;return i&&DC(e,function(e,n){var o=e.dataByAxis||{},a=(t[n]||{}).dataByAxis||[];(i&=o.length===a.length)&&DC(o,function(t,e){var n=a[e]||{},o=t.seriesDataIndices||[],r=n.seriesDataIndices||[];(i&=t.value===n.value&&t.axisType===n.axisType&&t.axisId===n.axisId&&o.length===r.length)&&DC(o,function(t,e){var n=r[e];i&=t.seriesIndex===n.seriesIndex&&t.dataIndex===n.dataIndex})})}),this._lastDataByCoordSys=t,!!i},_hide:function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},dispose:function(t,e){Uv.node||(this._tooltipContent.hide(),Tf("itemTooltip",e))}}),ir({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},function(){}),ir({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},function(){}),Vp.prototype={constructor:Vp,pointToData:function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},dataToRadius:US.prototype.dataToCoord,radiusToData:US.prototype.coordToData},h(Vp,US),Bp.prototype={constructor:Bp,pointToData:function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},dataToAngle:US.prototype.dataToCoord,angleToData:US.prototype.coordToData},h(Bp,US);var PC=function(t){this.name=t||"",this.cx=0,this.cy=0,this._radiusAxis=new Vp,this._angleAxis=new Bp,this._radiusAxis.polar=this._angleAxis.polar=this};PC.prototype={type:"polar",axisPointerEnabled:!0,constructor:PC,dimensions:["radius","angle"],model:null,containPoint:function(t){var e=this.pointToCoord(t);return this._radiusAxis.contain(e[0])&&this._angleAxis.contain(e[1])},containData:function(t){return this._radiusAxis.containData(t[0])&&this._angleAxis.containData(t[1])},getAxis:function(t){return this["_"+t+"Axis"]},getAxes:function(){return[this._radiusAxis,this._angleAxis]},getAxesByScale:function(t){var e=[],i=this._angleAxis,n=this._radiusAxis;return i.scale.type===t&&e.push(i),n.scale.type===t&&e.push(n),e},getAngleAxis:function(){return this._angleAxis},getRadiusAxis:function(){return this._radiusAxis},getOtherAxis:function(t){var e=this._angleAxis;return t===e?this._radiusAxis:e},getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAngleAxis()},getTooltipAxes:function(t){var e=null!=t&&"auto"!==t?this.getAxis(t):this.getBaseAxis();return{baseAxes:[e],otherAxes:[this.getOtherAxis(e)]}},dataToPoint:function(t,e){return this.coordToPoint([this._radiusAxis.dataToRadius(t[0],e),this._angleAxis.dataToAngle(t[1],e)])},pointToData:function(t,e){var i=this.pointToCoord(t);return[this._radiusAxis.radiusToData(i[0],e),this._angleAxis.angleToData(i[1],e)]},pointToCoord:function(t){var e=t[0]-this.cx,i=t[1]-this.cy,n=this.getAngleAxis(),o=n.getExtent(),a=Math.min(o[0],o[1]),r=Math.max(o[0],o[1]);n.inverse?a=r-360:r=a+360;var s=Math.sqrt(e*e+i*i);e/=s,i/=s;for(var l=Math.atan2(-i,e)/Math.PI*180,h=l<a?1:-1;l<a||l>r;)l+=360*h;return[s,l]},coordToPoint:function(t){var e=t[0],i=t[1]/180*Math.PI;return[Math.cos(i)*e+this.cx,-Math.sin(i)*e+this.cy]}};var OC=Ub.extend({type:"polarAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"polar",index:this.option.polarIndex,id:this.option.polarId})[0]}});n(OC.prototype,zS);var zC={angle:{startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:!1}},radius:{splitNumber:5}};_M("angle",OC,Gp,zC.angle),_M("radius",OC,Gp,zC.radius),sr({type:"polar",dependencies:["polarAxis","angleAxis"],coordinateSystem:null,findAxisModel:function(t){var e;return this.ecModel.eachComponent(t,function(t){t.getCoordSysModel()===this&&(e=t)},this),e},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"80%"}});var NC={dimensions:PC.prototype.dimensions,create:function(t,e){var i=[];return t.eachComponent("polar",function(t,n){var o=new PC(n);o.update=Hp;var a=o.getRadiusAxis(),r=o.getAngleAxis(),s=t.findAxisModel("radiusAxis"),l=t.findAxisModel("angleAxis");Fp(a,s),Fp(r,l),Wp(o,t,e),i.push(o),t.coordinateSystem=o,o.model=t}),t.eachSeries(function(e){if("polar"===e.get("coordinateSystem")){var i=t.queryComponents({mainType:"polar",index:e.get("polarIndex"),id:e.get("polarId")})[0];e.coordinateSystem=i.coordinateSystem}}),i}};ua.register("polar",NC);var EC=["axisLine","axisLabel","axisTick","splitLine","splitArea"];EM.extend({type:"angleAxis",axisPointerClass:"PolarAxisPointer",render:function(t,e){if(this.group.removeAll(),t.get("show")){var i=t.axis,n=i.polar,o=n.getRadiusAxis().getExtent(),a=i.getTicksCoords();"category"!==i.type&&a.pop(),d(EC,function(e){!t.get(e+".show")||i.scale.isBlank()&&"axisLine"!==e||this["_"+e](t,n,a,o)},this)}},_axisLine:function(t,e,i,n){var o=t.getModel("axisLine.lineStyle"),a=new nb({shape:{cx:e.cx,cy:e.cy,r:n[Up(e)]},style:o.getLineStyle(),z2:1,silent:!0});a.style.fill=null,this.group.add(a)},_axisTick:function(t,e,i,n){var o=t.getModel("axisTick"),a=(o.get("inside")?-1:1)*o.get("length"),s=n[Up(e)],l=f(i,function(t){return new fb({shape:Zp(e,[s,s+a],t)})});this.group.add(Ib(l,{style:r(o.getModel("lineStyle").getLineStyle(),{stroke:t.get("axisLine.lineStyle.color")})}))},_axisLabel:function(t,e,i,n){for(var o=t.axis,a=t.get("data"),r=t.getModel("axisLabel"),s=t.getFormattedLabels(),l=r.get("margin"),h=o.getLabelsCoords(),u=0;u<i.length;u++){var c=n[Up(e)],d=e.coordToPoint([c+l,h[u]]),f=e.cx,p=e.cy,g=Math.abs(d[0]-f)/c<.3?"center":d[0]>f?"left":"right",m=Math.abs(d[1]-p)/c<.3?"middle":d[1]>p?"top":"bottom";a&&a[u]&&a[u].textStyle&&(r=new Lo(a[u].textStyle,r,r.ecModel));var v=new ib({silent:!0});this.group.add(v),fo(v.style,r,{x:d[0],y:d[1],textFill:r.getTextColor()||t.get("axisLine.lineStyle.color"),text:s[u],textAlign:g,textVerticalAlign:m})}},_splitLine:function(t,e,i,n){var o=t.getModel("splitLine").getModel("lineStyle"),a=o.get("color"),s=0;a=a instanceof Array?a:[a];for(var l=[],h=0;h<i.length;h++){var u=s++%a.length;l[u]=l[u]||[],l[u].push(new fb({shape:Zp(e,n,i[h])}))}for(h=0;h<l.length;h++)this.group.add(Ib(l[h],{style:r({stroke:a[h%a.length]},o.getLineStyle()),silent:!0,z:t.get("z")}))},_splitArea:function(t,e,i,n){var o=t.getModel("splitArea").getModel("areaStyle"),a=o.get("color"),s=0;a=a instanceof Array?a:[a];for(var l=[],h=Math.PI/180,u=-i[0]*h,c=Math.min(n[0],n[1]),d=Math.max(n[0],n[1]),f=t.get("clockwise"),p=1;p<i.length;p++){var g=s++%a.length;l[g]=l[g]||[],l[g].push(new rb({shape:{cx:e.cx,cy:e.cy,r0:c,r:d,startAngle:u,endAngle:-i[p]*h,clockwise:f},silent:!0})),u=-i[p]*h}for(p=0;p<l.length;p++)this.group.add(Ib(l[p],{style:r({fill:a[p%a.length]},o.getAreaStyle()),silent:!0}))}});var RC=["axisLine","axisTickLabel","axisName"],VC=["splitLine","splitArea"];EM.extend({type:"radiusAxis",axisPointerClass:"PolarAxisPointer",render:function(t,e){if(this.group.removeAll(),t.get("show")){var i=t.axis,n=i.polar,o=n.getAngleAxis(),a=i.getTicksCoords(),r=o.getExtent()[0],s=i.getExtent(),l=Xp(n,t,r),h=new DM(t,l);d(RC,h.add,h),this.group.add(h.getGroup()),d(VC,function(e){t.get(e+".show")&&!i.scale.isBlank()&&this["_"+e](t,n,r,s,a)},this)}},_splitLine:function(t,e,i,n,o){var a=t.getModel("splitLine").getModel("lineStyle"),s=a.get("color"),l=0;s=s instanceof Array?s:[s];for(var h=[],u=0;u<o.length;u++){var c=l++%s.length;h[c]=h[c]||[],h[c].push(new nb({shape:{cx:e.cx,cy:e.cy,r:o[u]},silent:!0}))}for(u=0;u<h.length;u++)this.group.add(Ib(h[u],{style:r({stroke:s[u%s.length],fill:null},a.getLineStyle()),silent:!0}))},_splitArea:function(t,e,i,n,o){var a=t.getModel("splitArea").getModel("areaStyle"),s=a.get("color"),l=0;s=s instanceof Array?s:[s];for(var h=[],u=o[0],c=1;c<o.length;c++){var d=l++%s.length;h[d]=h[d]||[],h[d].push(new rb({shape:{cx:e.cx,cy:e.cy,r0:u,r:o[c],startAngle:0,endAngle:2*Math.PI},silent:!0})),u=o[c]}for(c=0;c<h.length;c++)this.group.add(Ib(h[c],{style:r({fill:s[c%s.length]},a.getAreaStyle()),silent:!0}))}});var BC=Af.extend({makeElOption:function(t,e,i,n,o){var a=i.axis;"angle"===a.dim&&(this.animationThreshold=Math.PI/18);var r,s=a.polar,l=s.getOtherAxis(a).getExtent();r=a["dataTo"+Ui(a.dim)](e);var h=n.get("type");if(h&&"none"!==h){var u=Of(n),c=GC[h](a,s,r,l,u);c.style=u,t.graphicKey=c.type,t.pointer=c}zf(t,i,n,o,jp(e,i,0,s,n.get("label.margin")))}}),GC={line:function(t,e,i,n,o){return"angle"===t.dim?{type:"Line",shape:Bf(e.coordToPoint([n[0],i]),e.coordToPoint([n[1],i]))}:{type:"Circle",shape:{cx:e.cx,cy:e.cy,r:i}}},shadow:function(t,e,i,n,o){var a=t.getBandWidth(),r=Math.PI/180;return"angle"===t.dim?{type:"Sector",shape:Wf(e.cx,e.cy,n[0],n[1],(-i-a/2)*r,(a/2-i)*r)}:{type:"Sector",shape:Wf(e.cx,e.cy,i-a/2,i+a/2,0,2*Math.PI)}}};EM.registerAxisPointerClass("PolarAxisPointer",BC),or(v(function(t,e,i){var n=i.getWidth(),o=i.getHeight(),a={},r={},s=Rp(g(e.getSeriesByType(t),function(t){return!e.isSeriesFiltered(t)&&t.coordinateSystem&&"polar"===t.coordinateSystem.type}));e.eachSeriesByType(t,function(t){if("polar"===t.coordinateSystem.type){var e=t.getData(),i=t.coordinateSystem,l=i.getAngleAxis(),h=i.getBaseAxis(),u=Np(t),c=s[Ep(h)][u],d=c.offset,f=c.width,p=i.getOtherAxis(h),g=t.get("center")||["50%","50%"],m=Si(g[0],n),v=Si(g[1],o),y=t.get("barMinHeight")||0,x=t.get("barMinAngle")||0,_=p.getExtent()[0],b=p.model.get("max"),w=p.model.get("min"),S=[t.coordDimToDataDim("radius")[0],t.coordDimToDataDim("angle")[0]],M=e.mapArray(S,function(t,e){return i.dataToPoint([t,e])},!0);a[u]=a[u]||[],r[u]=r[u]||[],e.each(t.coordDimToDataDim(p.dim)[0],function(t,n){if(!isNaN(t)){a[u][n]||(a[u][n]={p:_,n:_},r[u][n]={p:_,n:_});var o,s,h,c,g=t>=0?"p":"n",S=i.pointToCoord(M[n]),I=r[u][n][g];if("radius"===p.dim)o=I,s=S[0],c=(h=(-S[1]+d)*Math.PI/180)+f*Math.PI/180,Math.abs(s)<y&&(s=o+(s<0?-1:1)*y),r[u][n][g]=s;else{s=(o=S[0]+d)+f,null!=b&&(t=Math.min(t,b)),null!=w&&(t=Math.max(t,w));var T=l.dataToAngle(t);Math.abs(T-I)<x&&(T=I-(t<0?-1:1)*x),h=-I*Math.PI/180,c=-T*Math.PI/180;var A=l.getExtent(),C=T;C===A[0]&&t>0?C=A[1]:C===A[1]&&t<0&&(C=A[0]),r[u][n][g]=C}e.setItemLayout(n,{cx:m,cy:v,r0:o,r:s,startAngle:h,endAngle:c})}},!0)}},this)},"bar")),lr({type:"polar"}),u(Ub.extend({type:"geo",coordinateSystem:null,layoutMode:"box",init:function(t){Ub.prototype.init.apply(this,arguments),zo(t.label,["show"])},optionUpdated:function(){var t=this.option,e=this;t.regions=xI.getFilledRegions(t.regions,t.map,t.nameMap),this._optionModelMap=p(t.regions||[],function(t,i){return i.name&&t.set(i.name,new Lo(i,e)),t},z()),this.updateSelectedMap(t.regions)},defaultOption:{zlevel:0,z:0,show:!0,left:"center",top:"center",aspectScale:.75,silent:!1,map:"",boundingCoords:null,center:null,zoom:1,scaleLimit:null,label:{normal:{show:!1,color:"#000"},emphasis:{show:!0,color:"rgb(100,0,0)"}},itemStyle:{normal:{borderWidth:.5,borderColor:"#444",color:"#eee"},emphasis:{color:"rgba(255,215,0,0.8)"}},regions:[]},getRegionModel:function(t){return this._optionModelMap.get(t)||new Lo(null,this,this.ecModel)},getFormattedLabel:function(t,e){var i=this.getRegionModel(t).get("label."+e+".formatter"),n={name:t};return"function"==typeof i?(n.status=e,i(n)):"string"==typeof i?i.replace("{a}",null!=t?t:""):void 0},setZoom:function(t){this.option.zoom=t},setCenter:function(t){this.option.center=t}}),$M),lr({type:"geo",init:function(t,e){var i=new Ul(e,!0);this._mapDraw=i,this.group.add(i.group)},render:function(t,e,i,n){if(!n||"geoToggleSelect"!==n.type||n.from!==this.uid){var o=this._mapDraw;t.get("show")?o.draw(t,e,i,this,n):this._mapDraw.group.removeAll(),this.group.silent=t.get("silent")}},dispose:function(){this._mapDraw&&this._mapDraw.remove()}}),qp("toggleSelected",{type:"geoToggleSelect",event:"geoselectchanged"}),qp("select",{type:"geoSelect",event:"geoselected"}),qp("unSelect",{type:"geoUnSelect",event:"geounselected"});var WC=["rect","polygon","keep","clear"],HC=d,FC={lineX:tg(0),lineY:tg(1),rect:{point:function(t,e,i){return t&&i.boundingRect.contain(t[0],t[1])},rect:function(t,e,i){return t&&i.boundingRect.intersect(t)}},polygon:{point:function(t,e,i){return t&&i.boundingRect.contain(t[0],t[1])&&Ur(i.range,t[0],t[1])},rect:function(t,e,i){var n=i.range;if(!t||n.length<=1)return!1;var o=t.x,a=t.y,r=t.width,s=t.height,l=n[0];return!!(Ur(n,o,a)||Ur(n,o+r,a)||Ur(n,o,a+s)||Ur(n,o+r,a+s)||jt.create(t).contain(l[0],l[1])||ig(o,a,o+r,a,n)||ig(o,a,o,a+s,n)||ig(o+r,a,o+r,a+s,n)||ig(o,a+s,o+r,a+s,n))||void 0}}},ZC=d,UC=l,XC=v,jC=["dataToPoint","pointToData"],qC=["grid","xAxis","yAxis","geo","graph","polar","radiusAxis","angleAxis","bmap"],YC=rg.prototype;YC.setOutputRanges=function(t,e){this.matchOutputRanges(t,e,function(t,e,i){if((t.coordRanges||(t.coordRanges=[])).push(e),!t.coordRange){t.coordRange=e;var n=QC[t.brushType](0,i,e);t.__rangeOffset={offset:tD[t.brushType](n.values,t.range,[1,1]),xyMinMax:n.xyMinMax}}})},YC.matchOutputRanges=function(t,e,i){ZC(t,function(t){var n=this.findTargetInfo(t,e);n&&!0!==n&&d(n.coordSyses,function(n){var o=QC[t.brushType](1,n,t.range);i(t,o.values,n,e)})},this)},YC.setInputRanges=function(t,e){ZC(t,function(t){var i=this.findTargetInfo(t,e);if(t.range=t.range||[],i&&!0!==i){t.panelId=i.panelId;var n=QC[t.brushType](0,i.coordSys,t.coordRange),o=t.__rangeOffset;t.range=o?tD[t.brushType](n.values,o.offset,cg(n.xyMinMax,o.xyMinMax)):n.values}},this)},YC.makePanelOpts=function(t,e){return f(this._targetInfoList,function(i){var n=i.getPanelRect();return{panelId:i.panelId,defaultBrushType:e&&e(i),clipPath:Lc(n),isTargetByCursor:Pc(n,t,i.coordSysModel),getLinearBrushOtherExtent:kc(n)}})},YC.controlSeries=function(t,e,i){var n=this.findTargetInfo(t,i);return!0===n||n&&UC(n.coordSyses,e.coordinateSystem)>=0},YC.findTargetInfo=function(t,e){for(var i=this._targetInfoList,n=lg(e,t),o=0;o<i.length;o++){var a=i[o],r=t.panelId;if(r){if(a.panelId===r)return a}else for(o=0;o<KC.length;o++)if(KC[o](n,a))return a}return!0};var $C={grid:function(t,e){var i=t.xAxisModels,n=t.yAxisModels,o=t.gridModels,a=z(),r={},s={};(i||n||o)&&(ZC(i,function(t){var e=t.axis.grid.model;a.set(e.id,e),r[e.id]=!0}),ZC(n,function(t){var e=t.axis.grid.model;a.set(e.id,e),s[e.id]=!0}),ZC(o,function(t){a.set(t.id,t),r[t.id]=!0,s[t.id]=!0}),a.each(function(t){var o=t.coordinateSystem,a=[];ZC(o.getCartesians(),function(t,e){(UC(i,t.getAxis("x").model)>=0||UC(n,t.getAxis("y").model)>=0)&&a.push(t)}),e.push({panelId:"grid--"+t.id,gridModel:t,coordSysModel:t,coordSys:a[0],coordSyses:a,getPanelRect:JC.grid,xAxisDeclared:r[t.id],yAxisDeclared:s[t.id]})}))},geo:function(t,e){ZC(t.geoModels,function(t){var i=t.coordinateSystem;e.push({panelId:"geo--"+t.id,geoModel:t,coordSysModel:t,coordSys:i,coordSyses:[i],getPanelRect:JC.geo})})}},KC=[function(t,e){var i=t.xAxisModel,n=t.yAxisModel,o=t.gridModel;return!o&&i&&(o=i.axis.grid.model),!o&&n&&(o=n.axis.grid.model),o&&o===e.gridModel},function(t,e){var i=t.geoModel;return i&&i===e.geoModel}],JC={grid:function(){return this.coordSys.grid.getRect().clone()},geo:function(){var t=this.coordSys,e=t.getBoundingRect().clone();return e.applyTransform(Mo(t)),e}},QC={lineX:XC(hg,0),lineY:XC(hg,1),rect:function(t,e,i){var n=e[jC[t]]([i[0][0],i[1][0]]),o=e[jC[t]]([i[0][1],i[1][1]]),a=[sg([n[0],o[0]]),sg([n[1],o[1]])];return{values:a,xyMinMax:a}},polygon:function(t,e,i){var n=[[1/0,-1/0],[1/0,-1/0]];return{values:f(i,function(i){var o=e[jC[t]](i);return n[0][0]=Math.min(n[0][0],o[0]),n[1][0]=Math.min(n[1][0],o[1]),n[0][1]=Math.max(n[0][1],o[0]),n[1][1]=Math.max(n[1][1],o[1]),o}),xyMinMax:n}}},tD={lineX:XC(ug,0),lineY:XC(ug,1),rect:function(t,e,i){return[[t[0][0]-i[0]*e[0][0],t[0][1]-i[0]*e[0][1]],[t[1][0]-i[1]*e[1][0],t[1][1]-i[1]*e[1][1]]]},polygon:function(t,e,i){return f(t,function(t,n){return[t[0]-i[0]*e[n][0],t[1]-i[1]*e[n][1]]})}},eD=["inBrush","outOfBrush"],iD="__ecBrushSelect",nD="__ecInBrushSelectEvent",oD=Pw.VISUAL.BRUSH;or(oD,function(t,e,i){t.eachComponent({mainType:"brush"},function(e){i&&"takeGlobalCursor"===i.type&&e.setBrushOption("brush"===i.key?i.brushOption:{brushType:!1}),(e.brushTargetManager=new rg(e.option,t)).setInputRanges(e.areas,t)})}),ar(oD,function(t,e,n){var o,a,s=[];t.eachComponent({mainType:"brush"},function(e,n){function l(t){return"all"===m||v[t]}function h(t){return!!t.length}function u(t,e){var i=t.coordinateSystem;b|=i.hasAxisBrushed(),l(e)&&i.eachActiveState(t.getData(),function(t,e){"active"===t&&(x[e]=1)})}function c(i,n,o){var a=mg(i);if(a&&!vg(e,n)&&(d(w,function(n){a[n.brushType]&&e.brushTargetManager.controlSeries(n,i,t)&&o.push(n),b|=h(o)}),l(n)&&h(o))){var r=i.getData();r.each(function(t){gg(a,o,r,t)&&(x[t]=1)})}}var p={brushId:e.id,brushIndex:n,brushName:e.name,areas:i(e.areas),selected:[]};s.push(p);var g=e.option,m=g.brushLink,v=[],x=[],_=[],b=0;n||(o=g.throttleType,a=g.throttleDelay);var w=f(e.areas,function(t){return yg(r({boundingRect:aD[t.brushType](t)},t))}),S=Kp(e.option,eD,function(t){t.mappingMethod="fixed"});y(m)&&d(m,function(t){v[t]=1}),t.eachSeries(function(t,e){var i=_[e]=[];"parallel"===t.subType?u(t,e):c(t,e,i)}),t.eachSeries(function(t,e){var i={seriesId:t.id,seriesIndex:e,seriesName:t.name,dataIndex:[]};p.selected.push(i);var n=mg(t),o=_[e],a=t.getData(),r=l(e)?function(t){return x[t]?(i.dataIndex.push(a.getRawIndex(t)),"inBrush"):"outOfBrush"}:function(t){return gg(n,o,a,t)?(i.dataIndex.push(a.getRawIndex(t)),"inBrush"):"outOfBrush"};(l(e)?b:h(o))&&Qp(eD,S,a,r)})}),fg(e,o,a,s,n)});var aD={lineX:N,lineY:N,rect:function(t){return xg(t.range)},polygon:function(t){for(var e,i=t.range,n=0,o=i.length;n<o;n++){e=e||[[1/0,-1/0],[1/0,-1/0]];var a=i[n];a[0]<e[0][0]&&(e[0][0]=a[0]),a[0]>e[0][1]&&(e[0][1]=a[0]),a[1]<e[1][0]&&(e[1][0]=a[1]),a[1]>e[1][1]&&(e[1][1]=a[1])}return e&&xg(e)}},rD=["#ddd"];sr({type:"brush",dependencies:["geo","grid","xAxis","yAxis","parallel","series"],defaultOption:{toolbox:null,brushLink:null,seriesIndex:"all",geoIndex:null,xAxisIndex:null,yAxisIndex:null,brushType:"rect",brushMode:"single",transformable:!0,brushStyle:{borderWidth:1,color:"rgba(120,140,180,0.3)",borderColor:"rgba(120,140,180,0.8)"},throttleType:"fixRate",throttleDelay:0,removeOnClick:!0,z:1e4},areas:[],brushType:null,brushOption:{},coordInfoList:[],optionUpdated:function(t,e){var i=this.option;!e&&Jp(i,t,["inBrush","outOfBrush"]),i.inBrush=i.inBrush||{},i.outOfBrush=i.outOfBrush||{color:rD}},setAreas:function(t){t&&(this.areas=f(t,function(t){return _g(this.option,t)},this))},setBrushOption:function(t){this.brushOption=_g(this.option,t),this.brushType=this.brushOption.brushType}});lr({type:"brush",init:function(t,e){this.ecModel=t,this.api=e,this.model,(this._brushController=new Yu(e.getZr())).on("brush",m(this._onBrush,this)).mount()},render:function(t){return this.model=t,bg.apply(this,arguments)},updateView:bg,updateLayout:bg,updateVisual:bg,dispose:function(){this._brushController.dispose()},_onBrush:function(t,e){var n=this.model.id;this.model.brushTargetManager.setOutputRanges(t,this.ecModel),(!e.isEnd||e.removeOnClick)&&this.api.dispatchAction({type:"brush",brushId:n,areas:i(t),$from:n})}}),ir({type:"brush",event:"brush",update:"updateView"},function(t,e){e.eachComponent({mainType:"brush",query:t},function(e){e.setAreas(t.areas)})}),ir({type:"brushSelect",event:"brushSelected",update:"none"},function(){});var sD={},lD={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}}},hD=lD.toolbox.brush;Mg.defaultOption={show:!0,type:["rect","polygon","lineX","lineY","keep","clear"],icon:{rect:"M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",polygon:"M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",lineX:"M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",lineY:"M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",keep:"M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",clear:"M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"},title:i(hD.title)};var uD=Mg.prototype;uD.render=uD.updateView=uD.updateLayout=function(t,e,i){var n,o,a;e.eachComponent({mainType:"brush"},function(t){n=t.brushType,o=t.brushOption.brushMode||"single",a|=t.areas.length}),this._brushType=n,this._brushMode=o,d(t.get("type",!0),function(e){t.setIconStatus(e,("keep"===e?"multiple"===o:"clear"===e?a:e===n)?"emphasis":"normal")})},uD.getIcons=function(){var t=this.model,e=t.get("icon",!0),i={};return d(t.get("type",!0),function(t){e[t]&&(i[t]=e[t])}),i},uD.onclick=function(t,e,i){var n=this._brushType,o=this._brushMode;"clear"===i?(e.dispatchAction({type:"axisAreaSelect",intervals:[]}),e.dispatchAction({type:"brush",command:"clear",areas:[]})):e.dispatchAction({type:"takeGlobalCursor",key:"brush",brushOption:{brushType:"keep"===i?n:n!==i&&i,brushMode:"keep"===i?"multiple"===o?"single":"multiple":o}})},wg("brush",Mg),tr(function(t,e){var i=t&&t.brush;if(y(i)||(i=i?[i]:[]),i.length){var n=[];d(i,function(t){var e=t.hasOwnProperty("toolbox")?t.toolbox:[];e instanceof Array&&(n=n.concat(e))});var o=t&&t.toolbox;y(o)&&(o=o[0]),o||(o={feature:{}},t.toolbox=[o]);var a=o.feature||(o.feature={}),r=a.brush||(a.brush={}),s=r.type||(r.type=[]);s.push.apply(s,n),Yp(s),e&&!s.length&&s.push.apply(s,WC)}});Ig.prototype={constructor:Ig,type:"calendar",dimensions:["time","value"],getDimensionsInfo:function(){return[{name:"time",type:"time"}]},getRangeInfo:function(){return this._rangeInfo},getModel:function(){return this._model},getRect:function(){return this._rect},getCellWidth:function(){return this._sw},getCellHeight:function(){return this._sh},getOrient:function(){return this._orient},getFirstDayOfWeek:function(){return this._firstDayOfWeek},getDateInfo:function(t){var e=(t=Pi(t)).getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var n=t.getDate();n=n<10?"0"+n:n;var o=t.getDay();return o=Math.abs((o+7-this.getFirstDayOfWeek())%7),{y:e,m:i,d:n,day:o,time:t.getTime(),formatedDate:e+"-"+i+"-"+n,date:t}},getNextNDay:function(t,e){return 0===(e=e||0)?this.getDateInfo(t):((t=new Date(this.getDateInfo(t).time)).setDate(t.getDate()+e),this.getDateInfo(t))},update:function(t,e){function i(t,e){return null!=t[e]&&"auto"!==t[e]}this._firstDayOfWeek=+this._model.getModel("dayLabel").get("firstDay"),this._orient=this._model.get("orient"),this._lineWidth=this._model.getModel("itemStyle.normal").getItemStyle().lineWidth||0,this._rangeInfo=this._getRangeInfo(this._initRangeOption());var n=this._rangeInfo.weeks||1,o=["width","height"],a=this._model.get("cellSize").slice(),r=this._model.getBoxLayoutParams(),s="horizontal"===this._orient?[n,7]:[7,n];d([0,1],function(t){i(a,t)&&(r[o[t]]=a[t]*s[t])});var l={width:e.getWidth(),height:e.getHeight()},h=this._rect=Ko(r,l);d([0,1],function(t){i(a,t)||(a[t]=h[o[t]]/s[t])}),this._sw=a[0],this._sh=a[1]},dataToPoint:function(t,e){y(t)&&(t=t[0]),null==e&&(e=!0);var i=this.getDateInfo(t),n=this._rangeInfo,o=i.formatedDate;if(e&&!(i.time>=n.start.time&&i.time<=n.end.time))return[NaN,NaN];var a=i.day,r=this._getRangeInfo([n.start.time,o]).nthWeek;return"vertical"===this._orient?[this._rect.x+a*this._sw+this._sw/2,this._rect.y+r*this._sh+this._sh/2]:[this._rect.x+r*this._sw+this._sw/2,this._rect.y+a*this._sh+this._sh/2]},pointToData:function(t){var e=this.pointToDate(t);return e&&e.time},dataToRect:function(t,e){var i=this.dataToPoint(t,e);return{contentShape:{x:i[0]-(this._sw-this._lineWidth)/2,y:i[1]-(this._sh-this._lineWidth)/2,width:this._sw-this._lineWidth,height:this._sh-this._lineWidth},center:i,tl:[i[0]-this._sw/2,i[1]-this._sh/2],tr:[i[0]+this._sw/2,i[1]-this._sh/2],br:[i[0]+this._sw/2,i[1]+this._sh/2],bl:[i[0]-this._sw/2,i[1]+this._sh/2]}},pointToDate:function(t){var e=Math.floor((t[0]-this._rect.x)/this._sw)+1,i=Math.floor((t[1]-this._rect.y)/this._sh)+1,n=this._rangeInfo.range;return"vertical"===this._orient?this._getDateByWeeksAndDay(i,e-1,n):this._getDateByWeeksAndDay(e,i-1,n)},convertToPixel:v(Tg,"dataToPoint"),convertFromPixel:v(Tg,"pointToData"),_initRangeOption:function(){var t=this._model.get("range"),e=t;if(y(e)&&1===e.length&&(e=e[0]),/^\d{4}$/.test(e)&&(t=[e+"-01-01",e+"-12-31"]),/^\d{4}[\/|-]\d{1,2}$/.test(e)){var i=this.getDateInfo(e),n=i.date;n.setMonth(n.getMonth()+1);var o=this.getNextNDay(n,-1);t=[i.formatedDate,o.formatedDate]}/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(e)&&(t=[e,e]);var a=this._getRangeInfo(t);return a.start.time>a.end.time&&t.reverse(),t},_getRangeInfo:function(t){var e;(t=[this.getDateInfo(t[0]),this.getDateInfo(t[1])])[0].time>t[1].time&&(e=!0,t.reverse());var i=Math.floor(t[1].time/864e5)-Math.floor(t[0].time/864e5)+1,n=new Date(t[0].time),o=n.getDate(),a=t[1].date.getDate();if(n.setDate(o+i-1),n.getDate()!==a)for(var r=n.getTime()-t[1].time>0?1:-1;n.getDate()!==a&&(n.getTime()-t[1].time)*r>0;)i-=r,n.setDate(o+i-1);var s=Math.floor((i+t[0].day+6)/7),l=e?1-s:s-1;return e&&t.reverse(),{range:[t[0].formatedDate,t[1].formatedDate],start:t[0],end:t[1],allDay:i,weeks:s,nthWeek:l,fweek:t[0].day,lweek:t[1].day}},_getDateByWeeksAndDay:function(t,e,i){var n=this._getRangeInfo(i);if(t>n.weeks||0===t&&e<n.fweek||t===n.weeks&&e>n.lweek)return!1;var o=7*(t-1)-n.fweek+e,a=new Date(n.start.time);return a.setDate(n.start.d+o),this.getDateInfo(a)}},Ig.dimensions=Ig.prototype.dimensions,Ig.getDimensionsInfo=Ig.prototype.getDimensionsInfo,Ig.create=function(t,e){var i=[];return t.eachComponent("calendar",function(n){var o=new Ig(n,t,e);i.push(o),n.coordinateSystem=o}),t.eachSeries(function(t){"calendar"===t.get("coordinateSystem")&&(t.coordinateSystem=i[t.get("calendarIndex")||0])}),i},ua.register("calendar",Ig);var cD=Ub.extend({type:"calendar",coordinateSystem:null,defaultOption:{zlevel:0,z:2,left:80,top:60,cellSize:20,orient:"horizontal",splitLine:{show:!0,lineStyle:{color:"#000",width:1,type:"solid"}},itemStyle:{normal:{color:"#fff",borderWidth:1,borderColor:"#ccc"}},dayLabel:{show:!0,firstDay:0,position:"start",margin:"50%",nameMap:"en",color:"#000"},monthLabel:{show:!0,position:"start",margin:5,align:"center",nameMap:"en",formatter:null,color:"#000"},yearLabel:{show:!0,position:null,margin:30,formatter:null,color:"#ccc",fontFamily:"sans-serif",fontWeight:"bolder",fontSize:20}},init:function(t,e,i,n){var o=ea(t);cD.superApply(this,"init",arguments),Ag(t,o)},mergeOption:function(t,e){cD.superApply(this,"mergeOption",arguments),Ag(this.option,t)}}),dD={EN:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],CN:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},fD={EN:["S","M","T","W","T","F","S"],CN:["日","一","二","三","四","五","六"]};lr({type:"calendar",_tlpoints:null,_blpoints:null,_firstDayOfMonth:null,_firstDayPoints:null,render:function(t,e,i){var n=this.group;n.removeAll();var o=t.coordinateSystem,a=o.getRangeInfo(),r=o.getOrient();this._renderDayRect(t,a,n),this._renderLines(t,a,r,n),this._renderYearText(t,a,r,n),this._renderMonthText(t,r,n),this._renderWeekText(t,a,r,n)},_renderDayRect:function(t,e,i){for(var n=t.coordinateSystem,o=t.getModel("itemStyle.normal").getItemStyle(),a=n.getCellWidth(),r=n.getCellHeight(),s=e.start.time;s<=e.end.time;s=n.getNextNDay(s,1).time){var l=n.dataToRect([s],!1).tl,h=new db({shape:{x:l[0],y:l[1],width:a,height:r},cursor:"default",style:o});i.add(h)}},_renderLines:function(t,e,i,n){function o(e){a._firstDayOfMonth.push(r.getDateInfo(e)),a._firstDayPoints.push(r.dataToRect([e],!1).tl);var o=a._getLinePointsOfOneWeek(t,e,i);a._tlpoints.push(o[0]),a._blpoints.push(o[o.length-1]),l&&a._drawSplitline(o,s,n)}var a=this,r=t.coordinateSystem,s=t.getModel("splitLine.lineStyle").getLineStyle(),l=t.get("splitLine.show"),h=s.lineWidth;this._tlpoints=[],this._blpoints=[],this._firstDayOfMonth=[],this._firstDayPoints=[];for(var u=e.start,c=0;u.time<=e.end.time;c++){o(u.formatedDate),0===c&&(u=r.getDateInfo(e.start.y+"-"+e.start.m));var d=u.date;d.setMonth(d.getMonth()+1),u=r.getDateInfo(d)}o(r.getNextNDay(e.end.time,1).formatedDate),l&&this._drawSplitline(a._getEdgesPoints(a._tlpoints,h,i),s,n),l&&this._drawSplitline(a._getEdgesPoints(a._blpoints,h,i),s,n)},_getEdgesPoints:function(t,e,i){var n=[t[0].slice(),t[t.length-1].slice()],o="horizontal"===i?0:1;return n[0][o]=n[0][o]-e/2,n[1][o]=n[1][o]+e/2,n},_drawSplitline:function(t,e,i){var n=new cb({z2:20,shape:{points:t},style:e});i.add(n)},_getLinePointsOfOneWeek:function(t,e,i){var n=t.coordinateSystem;e=n.getDateInfo(e);for(var o=[],a=0;a<7;a++){var r=n.getNextNDay(e.time,a),s=n.dataToRect([r.time],!1);o[2*r.day]=s.tl,o[2*r.day+1]=s["horizontal"===i?"bl":"tr"]}return o},_formatterLabel:function(t,e){return"string"==typeof t&&t?Hi(t,e):"function"==typeof t?t(e):e.nameMap},_yearTextPositionControl:function(t,e,i,n,o){e=e.slice();var a=["center","bottom"];"bottom"===n?(e[1]+=o,a=["center","top"]):"left"===n?e[0]-=o:"right"===n?(e[0]+=o,a=["center","top"]):e[1]-=o;var r=0;return"left"!==n&&"right"!==n||(r=Math.PI/2),{rotation:r,position:e,style:{textAlign:a[0],textVerticalAlign:a[1]}}},_renderYearText:function(t,e,i,n){var o=t.getModel("yearLabel");if(o.get("show")){var a=o.get("margin"),r=o.get("position");r||(r="horizontal"!==i?"top":"left");var s=[this._tlpoints[this._tlpoints.length-1],this._blpoints[0]],l=(s[0][0]+s[1][0])/2,h=(s[0][1]+s[1][1])/2,u="horizontal"===i?0:1,c={top:[l,s[u][1]],bottom:[l,s[1-u][1]],left:[s[1-u][0],h],right:[s[u][0],h]},d=e.start.y;+e.end.y>+e.start.y&&(d=d+"-"+e.end.y);var f=o.get("formatter"),p={start:e.start.y,end:e.end.y,nameMap:d},g=this._formatterLabel(f,p),m=new ib({z2:30});fo(m.style,o,{text:g}),m.attr(this._yearTextPositionControl(m,c[r],i,r,a)),n.add(m)}},_monthTextPositionControl:function(t,e,i,n,o){var a="left",r="top",s=t[0],l=t[1];return"horizontal"===i?(l+=o,e&&(a="center"),"start"===n&&(r="bottom")):(s+=o,e&&(r="middle"),"start"===n&&(a="right")),{x:s,y:l,textAlign:a,textVerticalAlign:r}},_renderMonthText:function(t,e,i){var n=t.getModel("monthLabel");if(n.get("show")){var o=n.get("nameMap"),r=n.get("margin"),s=n.get("position"),l=n.get("align"),h=[this._tlpoints,this._blpoints];_(o)&&(o=dD[o.toUpperCase()]||[]);var u="start"===s?0:1,c="horizontal"===e?0:1;r="start"===s?-r:r;for(var d="center"===l,f=0;f<h[u].length-1;f++){var p=h[u][f].slice(),g=this._firstDayOfMonth[f];if(d){var m=this._firstDayPoints[f];p[c]=(m[c]+h[0][f+1][c])/2}var v=n.get("formatter"),y=o[+g.m-1],x={yyyy:g.y,yy:(g.y+"").slice(2),MM:g.m,M:+g.m,nameMap:y},b=this._formatterLabel(v,x),w=new ib({z2:30});a(fo(w.style,n,{text:b}),this._monthTextPositionControl(p,d,e,s,r)),i.add(w)}}},_weekTextPositionControl:function(t,e,i,n,o){var a="center",r="middle",s=t[0],l=t[1],h="start"===i;return"horizontal"===e?(s=s+n+(h?1:-1)*o[0]/2,a=h?"right":"left"):(l=l+n+(h?1:-1)*o[1]/2,r=h?"bottom":"top"),{x:s,y:l,textAlign:a,textVerticalAlign:r}},_renderWeekText:function(t,e,i,n){var o=t.getModel("dayLabel");if(o.get("show")){var r=t.coordinateSystem,s=o.get("position"),l=o.get("nameMap"),h=o.get("margin"),u=r.getFirstDayOfWeek();_(l)&&(l=fD[l.toUpperCase()]||[]);var c=r.getNextNDay(e.end.time,7-e.lweek).time,d=[r.getCellWidth(),r.getCellHeight()];h=Si(h,d["horizontal"===i?0:1]),"start"===s&&(c=r.getNextNDay(e.start.time,-(7+e.fweek)).time,h=-h);for(var f=0;f<7;f++){var p=r.getNextNDay(c,f),g=r.dataToRect([p.time],!1).center,m=f;m=Math.abs((f+u)%7);var v=new ib({z2:30});a(fo(v.style,o,{text:l[m]}),this._weekTextPositionControl(g,i,s,h,d)),n.add(v)}}}}),sr({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),lr({type:"title",render:function(t,e,i){if(this.group.removeAll(),t.get("show")){var n=this.group,o=t.getModel("textStyle"),a=t.getModel("subtextStyle"),r=t.get("textAlign"),s=t.get("textBaseline"),l=new ib({style:fo({},o,{text:t.get("text"),textFill:o.getTextColor()},{disableBox:!0}),z2:10}),h=l.getBoundingRect(),u=t.get("subtext"),c=new ib({style:fo({},a,{text:u,textFill:a.getTextColor(),y:h.height+t.get("itemGap"),textVerticalAlign:"top"},{disableBox:!0}),z2:10}),d=t.get("link"),f=t.get("sublink");l.silent=!d,c.silent=!f,d&&l.on("click",function(){window.open(d,"_"+t.get("target"))}),f&&c.on("click",function(){window.open(f,"_"+t.get("subtarget"))}),n.add(l),u&&n.add(c);var p=n.getBoundingRect(),g=t.getBoxLayoutParams();g.width=p.width,g.height=p.height;var m=Ko(g,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));r||("middle"===(r=t.get("left")||t.get("right"))&&(r="center"),"right"===r?m.x+=m.width:"center"===r&&(m.x+=m.width/2)),s||("center"===(s=t.get("top")||t.get("bottom"))&&(s="middle"),"bottom"===s?m.y+=m.height:"middle"===s&&(m.y+=m.height/2),s=s||"top"),n.attr("position",[m.x,m.y]);var v={textAlign:r,textVerticalAlign:s};l.setStyle(v),c.setStyle(v),p=n.getBoundingRect();var y=m.margin,x=t.getItemStyle(["color","opacity"]);x.fill=t.get("backgroundColor");var _=new db({shape:{x:p.x-y[3],y:p.y-y[0],width:p.width+y[1]+y[3],height:p.height+y[0]+y[2],r:t.get("borderRadius")},style:x,silent:!0});$n(_),n.add(_)}}}),Ub.registerSubTypeDefaulter("dataZoom",function(){return"slider"});var pD=["cartesian2d","polar","singleAxis"],gD=function(t,e){var i=f(t=t.slice(),Ui),n=f(e=(e||[]).slice(),Ui);return function(o,a){d(t,function(t,r){for(var s={name:t,capital:i[r]},l=0;l<e.length;l++)s[e[l]]=t+n[l];o.call(a,s)})}}(["x","y","z","radius","angle","single"],["axisIndex","axis","index","id"]),mD=d,vD=Ii,yD=function(t,e,i,n){this._dimName=t,this._axisIndex=e,this._valueWindow,this._percentWindow,this._dataExtent,this._minMaxSpan,this.ecModel=n,this._dataZoomModel=i};yD.prototype={constructor:yD,hostedBy:function(t){return this._dataZoomModel===t},getDataValueWindow:function(){return this._valueWindow.slice()},getDataPercentWindow:function(){return this._percentWindow.slice()},getTargetSeriesModels:function(){var t=[],e=this.ecModel;return e.eachSeries(function(i){if(Cg(i.get("coordinateSystem"))){var n=this._dimName,o=e.queryComponents({mainType:n+"Axis",index:i.get(n+"AxisIndex"),id:i.get(n+"AxisId")})[0];this._axisIndex===(o&&o.componentIndex)&&t.push(i)}},this),t},getAxisModel:function(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex)},getOtherAxisModel:function(){var t,e,i=this._dimName,n=this.ecModel,o=this.getAxisModel();"x"===i||"y"===i?(e="gridIndex",t="x"===i?"y":"x"):(e="polarIndex",t="angle"===i?"radius":"angle");var a;return n.eachComponent(t+"Axis",function(t){(t.get(e)||0)===(o.get(e)||0)&&(a=t)}),a},getMinMaxSpan:function(){return i(this._minMaxSpan)},calculateDataWindow:function(t){var e=this._dataExtent,i=this.getAxisModel().axis.scale,n=this._dataZoomModel.getRangePropMode(),o=[0,100],a=[t.start,t.end],r=[];return mD(["startValue","endValue"],function(e){r.push(null!=t[e]?i.parse(t[e]):null)}),mD([0,1],function(t){var s=r[t],l=a[t];"percent"===n[t]?(null==l&&(l=o[t]),s=i.parse(wi(l,o,e,!0))):l=wi(s,e,o,!0),r[t]=s,a[t]=l}),{valueWindow:vD(r),percentWindow:vD(a)}},reset:function(t){if(t===this._dataZoomModel){this._dataExtent=Lg(this,this._dimName,this.getTargetSeriesModels());var e=this.calculateDataWindow(t.option);this._valueWindow=e.valueWindow,this._percentWindow=e.percentWindow,Og(this),Pg(this)}},restore:function(t){t===this._dataZoomModel&&(this._valueWindow=this._percentWindow=null,Pg(this,!0))},filterData:function(t){function e(t){return t>=a[0]&&t<=a[1]}if(t===this._dataZoomModel){var i=this._dimName,n=this.getTargetSeriesModels(),o=t.get("filterMode"),a=this._valueWindow;if("none"!==o){var r=this.getOtherAxisModel();t.get("$fromToolbox")&&r&&"category"===r.get("type")&&(o="empty"),mD(n,function(t){var n=t.getData(),r=t.coordDimToDataDim(i);"weakFilter"===o?n&&n.filterSelf(function(t){for(var e,i,o,s=0;s<r.length;s++){var l=n.get(r[s],t),h=!isNaN(l),u=l<a[0],c=l>a[1];if(h&&!u&&!c)return!0;h&&(o=!0),u&&(e=!0),c&&(i=!0)}return o&&e&&i}):n&&mD(r,function(i){"empty"===o?t.setData(n.map(i,function(t){return e(t)?t:NaN})):n.filterSelf(i,e)})})}}}};var xD=d,_D=gD,bD=sr({type:"dataZoom",dependencies:["xAxis","yAxis","zAxis","radiusAxis","angleAxis","singleAxis","series"],defaultOption:{zlevel:0,z:4,orient:null,xAxisIndex:null,yAxisIndex:null,filterMode:"filter",throttle:null,start:0,end:100,startValue:null,endValue:null,minSpan:null,maxSpan:null,minValueSpan:null,maxValueSpan:null,rangeMode:null},init:function(t,e,i){this._dataIntervalByAxis={},this._dataInfo={},this._axisProxies={},this.textStyleModel,this._autoThrottle=!0,this._rangePropMode=["percent","percent"];var n=zg(t);this.mergeDefaultAndTheme(t,i),this.doInit(n)},mergeOption:function(t){var e=zg(t);n(this.option,t,!0),this.doInit(e)},doInit:function(t){var e=this.option;Uv.canvasSupported||(e.realtime=!1),this._setDefaultThrottle(t),Ng(this,t),xD([["start","startValue"],["end","endValue"]],function(t,i){"value"===this._rangePropMode[i]&&(e[t[0]]=null)},this),this.textStyleModel=this.getModel("textStyle"),this._resetTarget(),this._giveAxisProxies()},_giveAxisProxies:function(){var t=this._axisProxies;this.eachTargetAxis(function(e,i,n,o){var a=this.dependentModels[e.axis][i],r=a.__dzAxisProxy||(a.__dzAxisProxy=new yD(e.name,i,this,o));t[e.name+"_"+i]=r},this)},_resetTarget:function(){var t=this.option,e=this._judgeAutoMode();_D(function(e){var i=e.axisIndex;t[i]=Oo(t[i])},this),"axisIndex"===e?this._autoSetAxisIndex():"orient"===e&&this._autoSetOrient()},_judgeAutoMode:function(){var t=this.option,e=!1;_D(function(i){null!=t[i.axisIndex]&&(e=!0)},this);var i=t.orient;return null==i&&e?"orient":e?void 0:(null==i&&(t.orient="horizontal"),"axisIndex")},_autoSetAxisIndex:function(){var t=!0,e=this.get("orient",!0),i=this.option,n=this.dependentModels;if(t){var o="vertical"===e?"y":"x";n[o+"Axis"].length?(i[o+"AxisIndex"]=[0],t=!1):xD(n.singleAxis,function(n){t&&n.get("orient",!0)===e&&(i.singleAxisIndex=[n.componentIndex],t=!1)})}t&&_D(function(e){if(t){var n=[],o=this.dependentModels[e.axis];if(o.length&&!n.length)for(var a=0,r=o.length;a<r;a++)"category"===o[a].get("type")&&n.push(a);i[e.axisIndex]=n,n.length&&(t=!1)}},this),t&&this.ecModel.eachSeries(function(t){this._isSeriesHasAllAxesTypeOf(t,"value")&&_D(function(e){var n=i[e.axisIndex],o=t.get(e.axisIndex),a=t.get(e.axisId);l(n,o=t.ecModel.queryComponents({mainType:e.axis,index:o,id:a})[0].componentIndex)<0&&n.push(o)})},this)},_autoSetOrient:function(){var t;this.eachTargetAxis(function(e){!t&&(t=e.name)},this),this.option.orient="y"===t?"vertical":"horizontal"},_isSeriesHasAllAxesTypeOf:function(t,e){var i=!0;return _D(function(n){var o=t.get(n.axisIndex),a=this.dependentModels[n.axis][o];a&&a.get("type")===e||(i=!1)},this),i},_setDefaultThrottle:function(t){if(t.hasOwnProperty("throttle")&&(this._autoThrottle=!1),this._autoThrottle){var e=this.ecModel.option;this.option.throttle=e.animation&&e.animationDurationUpdate>0?100:20}},getFirstTargetAxisModel:function(){var t;return _D(function(e){if(null==t){var i=this.get(e.axisIndex);i.length&&(t=this.dependentModels[e.axis][i[0]])}},this),t},eachTargetAxis:function(t,e){var i=this.ecModel;_D(function(n){xD(this.get(n.axisIndex),function(o){t.call(e,n,o,this,i)},this)},this)},getAxisProxy:function(t,e){return this._axisProxies[t+"_"+e]},getAxisModel:function(t,e){var i=this.getAxisProxy(t,e);return i&&i.getAxisModel()},setRawRange:function(t,e){var i=this.option;xD([["start","startValue"],["end","endValue"]],function(e){null==t[e[0]]&&null==t[e[1]]||(i[e[0]]=t[e[0]],i[e[1]]=t[e[1]])},this),!e&&Ng(this,t)},getPercentRange:function(){var t=this.findRepresentativeAxisProxy();if(t)return t.getDataPercentWindow()},getValueRange:function(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow();var i=this.findRepresentativeAxisProxy();return i?i.getDataValueWindow():void 0},findRepresentativeAxisProxy:function(t){if(t)return t.__dzAxisProxy;var e=this._axisProxies;for(var i in e)if(e.hasOwnProperty(i)&&e[i].hostedBy(this))return e[i];for(var i in e)if(e.hasOwnProperty(i)&&!e[i].hostedBy(this))return e[i]},getRangePropMode:function(){return this._rangePropMode.slice()}}),wD=xw.extend({type:"dataZoom",render:function(t,e,i,n){this.dataZoomModel=t,this.ecModel=e,this.api=i},getTargetCoordInfo:function(){function t(t,e,i,n){for(var o,a=0;a<i.length;a++)if(i[a].model===t){o=i[a];break}o||i.push(o={model:t,axisModels:[],coordIndex:n}),o.axisModels.push(e)}var e=this.dataZoomModel,i=this.ecModel,n={};return e.eachTargetAxis(function(e,o){var a=i.getComponent(e.axis,o);if(a){var r=a.getCoordSysModel();r&&t(r,a,n[r.mainType]||(n[r.mainType]=[]),r.componentIndex)}},this),n}}),SD=(bD.extend({type:"dataZoom.slider",layoutMode:"box",defaultOption:{show:!0,right:"ph",top:"ph",width:"ph",height:"ph",left:null,bottom:null,backgroundColor:"rgba(47,69,84,0)",dataBackground:{lineStyle:{color:"#2f4554",width:.5,opacity:.3},areaStyle:{color:"rgba(47,69,84,0.3)",opacity:.3}},borderColor:"#ddd",fillerColor:"rgba(167,183,204,0.4)",handleIcon:"M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",handleSize:"100%",handleStyle:{color:"#a7b7cc"},labelPrecision:null,labelFormatter:null,showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#333"}}}),db),MD=wi,ID=Ii,TD=m,AD=d,CD="horizontal",DD=5,LD=["line","bar","candlestick","scatter"],kD=wD.extend({type:"dataZoom.slider",init:function(t,e){this._displayables={},this._orient,this._range,this._handleEnds,this._size,this._handleWidth,this._handleHeight,this._location,this._dragging,this._dataShadowInfo,this.api=e},render:function(t,e,i,n){kD.superApply(this,"render",arguments),La(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),this._orient=t.get("orient"),!1!==this.dataZoomModel.get("show")?(n&&"dataZoom"===n.type&&n.from===this.uid||this._buildView(),this._updateView()):this.group.removeAll()},remove:function(){kD.superApply(this,"remove",arguments),ka(this,"_dispatchZoomAction")},dispose:function(){kD.superApply(this,"dispose",arguments),ka(this,"_dispatchZoomAction")},_buildView:function(){var t=this.group;t.removeAll(),this._resetLocation(),this._resetInterval();var e=this._displayables.barGroup=new jy;this._renderBackground(),this._renderHandle(),this._renderDataShadow(),t.add(e),this._positionGroup()},_resetLocation:function(){var t=this.dataZoomModel,e=this.api,i=this._findCoordRect(),n={width:e.getWidth(),height:e.getHeight()},o=this._orient===CD?{right:n.width-i.x-i.width,top:n.height-30-7,width:i.width,height:30}:{right:7,top:i.y,width:30,height:i.height},a=ea(t.option);d(["right","top","width","height"],function(t){"ph"===a[t]&&(a[t]=o[t])});var r=Ko(a,n,t.padding);this._location={x:r.x,y:r.y},this._size=[r.width,r.height],"vertical"===this._orient&&this._size.reverse()},_positionGroup:function(){var t=this.group,e=this._location,i=this._orient,n=this.dataZoomModel.getFirstTargetAxisModel(),o=n&&n.get("inverse"),a=this._displayables.barGroup,r=(this._dataShadowInfo||{}).otherAxisInverse;a.attr(i!==CD||o?i===CD&&o?{scale:r?[-1,1]:[-1,-1]}:"vertical"!==i||o?{scale:r?[-1,-1]:[-1,1],rotation:Math.PI/2}:{scale:r?[1,-1]:[1,1],rotation:Math.PI/2}:{scale:r?[1,1]:[1,-1]});var s=t.getBoundingRect([a]);t.attr("position",[e.x-s.x,e.y-s.y])},_getViewExtent:function(){return[0,this._size[0]]},_renderBackground:function(){var t=this.dataZoomModel,e=this._size,i=this._displayables.barGroup;i.add(new SD({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get("backgroundColor")},z2:-40})),i.add(new SD({shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:"transparent"},z2:0,onclick:m(this._onClickPanelClick,this)}))},_renderDataShadow:function(){var t=this._dataShadowInfo=this._prepareDataShadowInfo();if(t){var e=this._size,i=t.series,n=i.getRawData(),o=i.getShadowDim?i.getShadowDim():t.otherDim;if(null!=o){var a=n.getDataExtent(o),s=.3*(a[1]-a[0]);a=[a[0]-s,a[1]+s];var l,h=[0,e[1]],u=[0,e[0]],c=[[e[0],0],[0,0]],d=[],f=u[1]/(n.count()-1),p=0,g=Math.round(n.count()/e[0]);n.each([o],function(t,e){if(g>0&&e%g)p+=f;else{var i=null==t||isNaN(t)||""===t,n=i?0:MD(t,a,h,!0);i&&!l&&e?(c.push([c[c.length-1][0],0]),d.push([d[d.length-1][0],0])):!i&&l&&(c.push([p,0]),d.push([p,0])),c.push([p,n]),d.push([p,n]),p+=f,l=i}});var m=this.dataZoomModel;this._displayables.barGroup.add(new ub({shape:{points:c},style:r({fill:m.get("dataBackgroundColor")},m.getModel("dataBackground.areaStyle").getAreaStyle()),silent:!0,z2:-20})),this._displayables.barGroup.add(new cb({shape:{points:d},style:m.getModel("dataBackground.lineStyle").getLineStyle(),silent:!0,z2:-19}))}}},_prepareDataShadowInfo:function(){var t=this.dataZoomModel,e=t.get("showDataShadow");if(!1!==e){var i,n=this.ecModel;return t.eachTargetAxis(function(o,a){d(t.getAxisProxy(o.name,a).getTargetSeriesModels(),function(t){if(!(i||!0!==e&&l(LD,t.get("type"))<0)){var r,s=n.getComponent(o.axis,a).axis,h=Eg(o.name),u=t.coordinateSystem;null!=h&&u.getOtherAxis&&(r=u.getOtherAxis(s).inverse),i={thisAxis:s,series:t,thisDim:o.name,otherDim:h,otherAxisInverse:r}}},this)},this),i}},_renderHandle:function(){var t=this._displayables,e=t.handles=[],i=t.handleLabels=[],n=this._displayables.barGroup,o=this._size,a=this.dataZoomModel;n.add(t.filler=new SD({draggable:!0,cursor:Rg(this._orient),drift:TD(this._onDragMove,this,"all"),onmousemove:function(t){bx(t.event)},ondragstart:TD(this._showDataInfo,this,!0),ondragend:TD(this._onDragEnd,this),onmouseover:TD(this._showDataInfo,this,!0),onmouseout:TD(this._showDataInfo,this,!1),style:{fill:a.get("fillerColor"),textPosition:"inside"}})),n.add(new SD($n({silent:!0,shape:{x:0,y:0,width:o[0],height:o[1]},style:{stroke:a.get("dataBackgroundColor")||a.get("borderColor"),lineWidth:1,fill:"rgba(0,0,0,0)"}}))),AD([0,1],function(t){var o=Do(a.get("handleIcon"),{cursor:Rg(this._orient),draggable:!0,drift:TD(this._onDragMove,this,t),onmousemove:function(t){bx(t.event)},ondragend:TD(this._onDragEnd,this),onmouseover:TD(this._showDataInfo,this,!0),onmouseout:TD(this._showDataInfo,this,!1)},{x:-1,y:0,width:2,height:2}),r=o.getBoundingRect();this._handleHeight=Si(a.get("handleSize"),this._size[1]),this._handleWidth=r.width/r.height*this._handleHeight,o.setStyle(a.getModel("handleStyle").getItemStyle());var s=a.get("handleColor");null!=s&&(o.style.fill=s),n.add(e[t]=o);var l=a.textStyleModel;this.group.add(i[t]=new ib({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textVerticalAlign:"middle",textAlign:"center",textFill:l.getTextColor(),textFont:l.getFont()},z2:10}))},this)},_resetInterval:function(){var t=this._range=this.dataZoomModel.getPercentRange(),e=this._getViewExtent();this._handleEnds=[MD(t[0],[0,100],e,!0),MD(t[1],[0,100],e,!0)]},_updateInterval:function(t,e){var i=this.dataZoomModel,n=this._handleEnds,o=this._getViewExtent(),a=i.findRepresentativeAxisProxy().getMinMaxSpan(),r=[0,100];OT(e,n,o,i.get("zoomLock")?"all":t,null!=a.minSpan?MD(a.minSpan,r,o,!0):null,null!=a.maxSpan?MD(a.maxSpan,r,o,!0):null),this._range=ID([MD(n[0],o,r,!0),MD(n[1],o,r,!0)])},_updateView:function(t){var e=this._displayables,i=this._handleEnds,n=ID(i.slice()),o=this._size;AD([0,1],function(t){var n=e.handles[t],a=this._handleHeight;n.attr({scale:[a/2,a/2],position:[i[t],o[1]/2-a/2]})},this),e.filler.setShape({x:n[0],y:0,width:n[1]-n[0],height:o[1]}),this._updateDataInfo(t)},_updateDataInfo:function(t){function e(t){var e=Mo(n.handles[t].parent,this.group),i=To(0===t?"right":"left",e),s=this._handleWidth/2+DD,l=Io([c[t]+(0===t?-s:s),this._size[1]/2],e);o[t].setStyle({x:l[0],y:l[1],textVerticalAlign:a===CD?"middle":i,textAlign:a===CD?i:"center",text:r[t]})}var i=this.dataZoomModel,n=this._displayables,o=n.handleLabels,a=this._orient,r=["",""];if(i.get("showDetail")){var s=i.findRepresentativeAxisProxy();if(s){var l=s.getAxisModel().axis,h=this._range,u=t?s.calculateDataWindow({start:h[0],end:h[1]}).valueWindow:s.getDataValueWindow();r=[this._formatLabel(u[0],l),this._formatLabel(u[1],l)]}}var c=ID(this._handleEnds.slice());e.call(this,0),e.call(this,1)},_formatLabel:function(t,e){var i=this.dataZoomModel,n=i.get("labelFormatter"),o=i.get("labelPrecision");null!=o&&"auto"!==o||(o=e.getPixelPrecision());var a=null==t||isNaN(t)?"":"category"===e.type||"time"===e.type?e.scale.getLabel(Math.round(t)):t.toFixed(Math.min(o,20));return x(n)?n(t,a):_(n)?n.replace("{value}",a):a},_showDataInfo:function(t){t=this._dragging||t;var e=this._displayables.handleLabels;e[0].attr("invisible",!t),e[1].attr("invisible",!t)},_onDragMove:function(t,e,i){this._dragging=!0;var n=Io([e,i],this._displayables.barGroup.getLocalTransform(),!0);this._updateInterval(t,n[0]);var o=this.dataZoomModel.get("realtime");this._updateView(!o),o&&o&&this._dispatchZoomAction()},_onDragEnd:function(){this._dragging=!1,this._showDataInfo(!1),this._dispatchZoomAction()},_onClickPanelClick:function(t){var e=this._size,i=this._displayables.barGroup.transformCoordToLocal(t.offsetX,t.offsetY);if(!(i[0]<0||i[0]>e[0]||i[1]<0||i[1]>e[1])){var n=this._handleEnds,o=(n[0]+n[1])/2;this._updateInterval("all",i[0]-o),this._updateView(),this._dispatchZoomAction()}},_dispatchZoomAction:function(){var t=this._range;this.api.dispatchAction({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]})},_findCoordRect:function(){var t;if(AD(this.getTargetCoordInfo(),function(e){if(!t&&e.length){var i=e[0].model.coordinateSystem;t=i.getRect&&i.getRect()}}),!t){var e=this.api.getWidth(),i=this.api.getHeight();t={x:.2*e,y:.2*i,width:.6*e,height:.6*i}}return t}});bD.extend({type:"dataZoom.inside",defaultOption:{disabled:!1,zoomLock:!1,zoomOnMouseWheel:!0,moveOnMouseMove:!0,preventDefaultMouseMove:!0}});var PD=v,OD="\0_ec_dataZoom_roams",zD=m,ND=wD.extend({type:"dataZoom.inside",init:function(t,e){this._range},render:function(t,e,i,n){ND.superApply(this,"render",arguments),Gg(n,t.id)&&(this._range=t.getPercentRange()),d(this.getTargetCoordInfo(),function(e,n){var o=f(e,function(t){return Wg(t.model)});d(e,function(e){var a=e.model,r=t.option;Vg(i,{coordId:Wg(a),allCoordIds:o,containsPoint:function(t,e,i){return a.coordinateSystem.containPoint([e,i])},dataZoomId:t.id,throttleRate:t.get("throttle",!0),panGetRange:zD(this._onPan,this,e,n),zoomGetRange:zD(this._onZoom,this,e,n),zoomLock:r.zoomLock,disabled:r.disabled,roamControllerOpt:{zoomOnMouseWheel:r.zoomOnMouseWheel,moveOnMouseMove:r.moveOnMouseMove,preventDefaultMouseMove:r.preventDefaultMouseMove}})},this)},this)},dispose:function(){Bg(this.api,this.dataZoomModel.id),ND.superApply(this,"dispose",arguments),this._range=null},_onPan:function(t,e,i,n,o,a,r,s,l){var h=this._range.slice(),u=t.axisModels[0];if(u){var c=ED[e]([a,r],[s,l],u,i,t),d=c.signal*(h[1]-h[0])*c.pixel/c.pixelLength;return OT(d,h,[0,100],"all"),this._range=h}},_onZoom:function(t,e,i,n,o,a){var r=this._range.slice(),s=t.axisModels[0];if(s){var l=ED[e](null,[o,a],s,i,t),h=(l.signal>0?l.pixelStart+l.pixelLength-l.pixel:l.pixel-l.pixelStart)/l.pixelLength*(r[1]-r[0])+r[0];n=Math.max(1/n,0),r[0]=(r[0]-h)*n+h,r[1]=(r[1]-h)*n+h;var u=this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();return OT(0,r,[0,100],0,u.minSpan,u.maxSpan),this._range=r}}}),ED={grid:function(t,e,i,n,o){var a=i.axis,r={},s=o.model.coordinateSystem.getRect();return t=t||[0,0],"x"===a.dim?(r.pixel=e[0]-t[0],r.pixelLength=s.width,r.pixelStart=s.x,r.signal=a.inverse?1:-1):(r.pixel=e[1]-t[1],r.pixelLength=s.height,r.pixelStart=s.y,r.signal=a.inverse?-1:1),r},polar:function(t,e,i,n,o){var a=i.axis,r={},s=o.model.coordinateSystem,l=s.getRadiusAxis().getExtent(),h=s.getAngleAxis().getExtent();return t=t?s.pointToCoord(t):[0,0],e=s.pointToCoord(e),"radiusAxis"===i.mainType?(r.pixel=e[0]-t[0],r.pixelLength=l[1]-l[0],r.pixelStart=l[0],r.signal=a.inverse?1:-1):(r.pixel=e[1]-t[1],r.pixelLength=h[1]-h[0],r.pixelStart=h[0],r.signal=a.inverse?-1:1),r},singleAxis:function(t,e,i,n,o){var a=i.axis,r=o.model.coordinateSystem.getRect(),s={};return t=t||[0,0],"horizontal"===a.orient?(s.pixel=e[0]-t[0],s.pixelLength=r.width,s.pixelStart=r.x,s.signal=a.inverse?1:-1):(s.pixel=e[1]-t[1],s.pixelLength=r.height,s.pixelStart=r.y,s.signal=a.inverse?-1:1),s}};er(function(t,e){t.eachComponent("dataZoom",function(t){t.eachTargetAxis($g),t.eachTargetAxis(Kg)}),t.eachComponent("dataZoom",function(t){var e=t.findRepresentativeAxisProxy(),i=e.getDataPercentWindow(),n=e.getDataValueWindow();t.setRawRange({start:i[0],end:i[1],startValue:n[0],endValue:n[1]},!0)})}),ir("dataZoom",function(t,e){var i=Dg(m(e.eachComponent,e,"dataZoom"),gD,function(t,e){return t.get(e.axisIndex)}),n=[];e.eachComponent({mainType:"dataZoom",query:t},function(t,e){n.push.apply(n,i(t).nodes)}),d(n,function(e,i){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue})})});var RD=d,VD=function(t){var e=t&&t.visualMap;y(e)||(e=e?[e]:[]),RD(e,function(t){if(t){Jg(t,"splitList")&&!Jg(t,"pieces")&&(t.pieces=t.splitList,delete t.splitList);var e=t.pieces;e&&y(e)&&RD(e,function(t){b(t)&&(Jg(t,"start")&&!Jg(t,"min")&&(t.min=t.start),Jg(t,"end")&&!Jg(t,"max")&&(t.max=t.end))})}})};Ub.registerSubTypeDefaulter("visualMap",function(t){return t.categories||(t.pieces?t.pieces.length>0:t.splitNumber>0)&&!t.calculable?"piecewise":"continuous"}),ar(Pw.VISUAL.COMPONENT,function(t){t.eachComponent("visualMap",function(t){Qg(t)}),tm(t)});var BD={get:function(t,e,n){var o=i((GD[t]||{})[e]);return n&&y(o)?o[o.length-1]:o}},GD={color:{active:["#006edd","#e0ffff"],inactive:["rgba(0,0,0,0)"]},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[.3,1],inactive:[0,0]},colorLightness:{active:[.9,.5],inactive:[0,0]},colorAlpha:{active:[.3,1],inactive:[0,0]},opacity:{active:[.3,1],inactive:[0,0]},symbol:{active:["circle","roundRect","diamond"],inactive:["none"]},symbolSize:{active:[10,50],inactive:[0,0]}},WD=jI.mapVisual,HD=jI.eachVisual,FD=y,ZD=d,UD=Ii,XD=wi,jD=N,qD=["#f6efa6","#d88273","#bf444c"],YD=sr({type:"visualMap",dependencies:["series"],stateList:["inRange","outOfRange"],replacableOptionKeys:["inRange","outOfRange","target","controller","color"],dataBound:[-1/0,1/0],layoutMode:{type:"box",ignoreSize:!0},defaultOption:{show:!0,zlevel:0,z:4,seriesIndex:"all",min:0,max:200,dimension:null,inRange:null,outOfRange:null,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:!1,orient:"vertical",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",contentColor:"#5793f3",inactiveColor:"#aaa",borderWidth:0,padding:5,textGap:10,precision:0,color:null,formatter:null,text:null,textStyle:{color:"#333"}},init:function(t,e,i){this._dataExtent,this.targetVisuals={},this.controllerVisuals={},this.textStyleModel,this.itemSize,this.mergeDefaultAndTheme(t,i)},optionUpdated:function(t,e){var i=this.option;Uv.canvasSupported||(i.realtime=!1),!e&&Jp(i,t,this.replacableOptionKeys),this.textStyleModel=this.getModel("textStyle"),this.resetItemSize(),this.completeVisualOption()},resetVisual:function(t){var e=this.stateList;t=m(t,this),this.controllerVisuals=Kp(this.option.controller,e,t),this.targetVisuals=Kp(this.option.target,e,t)},getTargetSeriesIndices:function(){var t=this.option.seriesIndex,e=[];return null==t||"all"===t?this.ecModel.eachSeries(function(t,i){e.push(i)}):e=Oo(t),e},eachTargetSeries:function(t,e){d(this.getTargetSeriesIndices(),function(i){t.call(e,this.ecModel.getSeriesByIndex(i))},this)},isTargetSeries:function(t){var e=!1;return this.eachTargetSeries(function(i){i===t&&(e=!0)}),e},formatValueText:function(t,e,i){function n(t){return t===l[0]?"min":t===l[1]?"max":(+t).toFixed(Math.min(s,20))}var o,a,r=this.option,s=r.precision,l=this.dataBound,h=r.formatter;return i=i||["<",">"],y(t)&&(t=t.slice(),o=!0),a=e?t:o?[n(t[0]),n(t[1])]:n(t),_(h)?h.replace("{value}",o?a[0]:a).replace("{value2}",o?a[1]:a):x(h)?o?h(t[0],t[1]):h(t):o?t[0]===l[0]?i[0]+" "+a[1]:t[1]===l[1]?i[1]+" "+a[0]:a[0]+" - "+a[1]:a},resetExtent:function(){var t=this.option,e=UD([t.min,t.max]);this._dataExtent=e},getDataDimension:function(t){var e=this.option.dimension;return null!=e?e:t.dimensions.length-1},getExtent:function(){return this._dataExtent.slice()},completeVisualOption:function(){function t(t){FD(e.color)&&!t.inRange&&(t.inRange={color:e.color.slice().reverse()}),t.inRange=t.inRange||{color:qD},ZD(this.stateList,function(e){var i=t[e];if(_(i)){var n=BD.get(i,"active",s);n?(t[e]={},t[e][i]=n):delete t[e]}},this)}var e=this.option,o={inRange:e.inRange,outOfRange:e.outOfRange},a=e.target||(e.target={}),r=e.controller||(e.controller={});n(a,o),n(r,o);var s=this.isCategory();t.call(this,a),t.call(this,r),function(t,e,i){var n=t[e],o=t[i];n&&!o&&(o=t[i]={},ZD(n,function(t,e){if(jI.isValidType(e)){var i=BD.get(e,"inactive",s);null!=i&&(o[e]=i,"color"!==e||o.hasOwnProperty("opacity")||o.hasOwnProperty("colorAlpha")||(o.opacity=[0,0]))}}))}.call(this,a,"inRange","outOfRange"),function(t){var e=(t.inRange||{}).symbol||(t.outOfRange||{}).symbol,n=(t.inRange||{}).symbolSize||(t.outOfRange||{}).symbolSize,o=this.get("inactiveColor");ZD(this.stateList,function(a){var r=this.itemSize,l=t[a];l||(l=t[a]={color:s?o:[o]}),null==l.symbol&&(l.symbol=e&&i(e)||(s?"roundRect":["roundRect"])),null==l.symbolSize&&(l.symbolSize=n&&i(n)||(s?r[0]:[r[0],r[0]])),l.symbol=WD(l.symbol,function(t){return"none"===t||"square"===t?"roundRect":t});var h=l.symbolSize;if(null!=h){var u=-1/0;HD(h,function(t){t>u&&(u=t)}),l.symbolSize=WD(h,function(t){return XD(t,[0,u],[0,r[0]],!0)})}},this)}.call(this,r)},resetItemSize:function(){this.itemSize=[parseFloat(this.get("itemWidth")),parseFloat(this.get("itemHeight"))]},isCategory:function(){return!!this.option.categories},setSelected:jD,getValueState:jD,getVisualMeta:jD}),$D=[20,140],KD=YD.extend({type:"visualMap.continuous",defaultOption:{align:"auto",calculable:!1,range:null,realtime:!0,itemHeight:null,itemWidth:null,hoverLink:!0,hoverLinkDataSize:null,hoverLinkOnHandle:null},optionUpdated:function(t,e){KD.superApply(this,"optionUpdated",arguments),this.resetExtent(),this.resetVisual(function(t){t.mappingMethod="linear",t.dataExtent=this.getExtent()}),this._resetRange()},resetItemSize:function(){KD.superApply(this,"resetItemSize",arguments);var t=this.itemSize;"horizontal"===this._orient&&t.reverse(),(null==t[0]||isNaN(t[0]))&&(t[0]=$D[0]),(null==t[1]||isNaN(t[1]))&&(t[1]=$D[1])},_resetRange:function(){var t=this.getExtent(),e=this.option.range;!e||e.auto?(t.auto=1,this.option.range=t):y(e)&&(e[0]>e[1]&&e.reverse(),e[0]=Math.max(e[0],t[0]),e[1]=Math.min(e[1],t[1]))},completeVisualOption:function(){YD.prototype.completeVisualOption.apply(this,arguments),d(this.stateList,function(t){var e=this.option.controller[t].symbolSize;e&&e[0]!==e[1]&&(e[0]=0)},this)},setSelected:function(t){this.option.range=t.slice(),this._resetRange()},getSelected:function(){var t=this.getExtent(),e=Ii((this.get("range")||[]).slice());return e[0]>t[1]&&(e[0]=t[1]),e[1]>t[1]&&(e[1]=t[1]),e[0]<t[0]&&(e[0]=t[0]),e[1]<t[0]&&(e[1]=t[0]),e},getValueState:function(t){var e=this.option.range,i=this.getExtent();return(e[0]<=i[0]||e[0]<=t)&&(e[1]>=i[1]||t<=e[1])?"inRange":"outOfRange"},findTargetDataIndices:function(t){var e=[];return this.eachTargetSeries(function(i){var n=[],o=i.getData();o.each(this.getDataDimension(o),function(e,i){t[0]<=e&&e<=t[1]&&n.push(i)},!0,this),e.push({seriesId:i.id,dataIndex:n})},this),e},getVisualMeta:function(t){function e(e,i){o.push({value:e,color:t(e,i)})}for(var i=im(0,0,this.getExtent()),n=im(0,0,this.option.range.slice()),o=[],a=0,r=0,s=n.length,l=i.length;r<l&&(!n.length||i[r]<=n[0]);r++)i[r]<n[a]&&e(i[r],"outOfRange");for(h=1;a<s;a++,h=0)h&&o.length&&e(n[a],"outOfRange"),e(n[a],"inRange");for(var h=1;r<l;r++)(!n.length||n[n.length-1]<i[r])&&(h&&(o.length&&e(o[o.length-1].value,"outOfRange"),h=0),e(i[r],"outOfRange"));var u=o.length;return{stops:o,outerColors:[u?o[0].color:"transparent",u?o[u-1].color:"transparent"]}}}),JD=lr({type:"visualMap",autoPositionValues:{left:1,right:1,top:1,bottom:1},init:function(t,e){this.ecModel=t,this.api=e,this.visualMapModel},render:function(t,e,i,n){this.visualMapModel=t,!1!==t.get("show")?this.doRender.apply(this,arguments):this.group.removeAll()},renderBackground:function(t){var e=this.visualMapModel,i=Gx(e.get("padding")||0),n=t.getBoundingRect();t.add(new db({z2:-1,silent:!0,shape:{x:n.x-i[3],y:n.y-i[0],width:n.width+i[3]+i[1],height:n.height+i[0]+i[2]},style:{fill:e.get("backgroundColor"),stroke:e.get("borderColor"),lineWidth:e.get("borderWidth")}}))},getControllerVisual:function(t,e,i){function n(t){return s[t]}function o(t,e){s[t]=e}var a=(i=i||{}).forceState,r=this.visualMapModel,s={};if("symbol"===e&&(s.symbol=r.get("itemSymbol")),"color"===e){var l=r.get("contentColor");s.color=l}var h=r.controllerVisuals[a||r.getValueState(t)];return d(jI.prepareVisualTypes(h),function(a){var r=h[a];i.convertOpacityToAlpha&&"opacity"===a&&(a="colorAlpha",r=h.__alphaForOpacity),jI.dependsOn(a,e)&&r&&r.applyVisual(t,n,o)}),s[e]},positionGroup:function(t){var e=this.visualMapModel,i=this.api;Jo(t,e.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()})},doRender:N}),QD=wi,tL=d,eL=Math.min,iL=Math.max,nL=12,oL=6,aL=JD.extend({type:"visualMap.continuous",init:function(){aL.superApply(this,"init",arguments),this._shapes={},this._dataInterval=[],this._handleEnds=[],this._orient,this._useHandle,this._hoverLinkDataIndices=[],this._dragging,this._hovering},doRender:function(t,e,i,n){n&&"selectDataRange"===n.type&&n.from===this.uid||this._buildView()},_buildView:function(){this.group.removeAll();var t=this.visualMapModel,e=this.group;this._orient=t.get("orient"),this._useHandle=t.get("calculable"),this._resetInterval(),this._renderBar(e);var i=t.get("text");this._renderEndsText(e,i,0),this._renderEndsText(e,i,1),this._updateView(!0),this.renderBackground(e),this._updateView(),this._enableHoverLinkToSeries(),this._enableHoverLinkFromSeries(),this.positionGroup(e)},_renderEndsText:function(t,e,i){if(e){var n=e[1-i];n=null!=n?n+"":"";var o=this.visualMapModel,a=o.get("textGap"),r=o.itemSize,s=this._shapes.barGroup,l=this._applyTransform([r[0]/2,0===i?-a:r[1]+a],s),h=this._applyTransform(0===i?"bottom":"top",s),u=this._orient,c=this.visualMapModel.textStyleModel;this.group.add(new ib({style:{x:l[0],y:l[1],textVerticalAlign:"horizontal"===u?"middle":h,textAlign:"horizontal"===u?h:"center",text:n,textFont:c.getFont(),textFill:c.getTextColor()}}))}},_renderBar:function(t){var e=this.visualMapModel,i=this._shapes,n=e.itemSize,o=this._orient,a=this._useHandle,r=nm(e,this.api,n),s=i.barGroup=this._createBarGroup(r);s.add(i.outOfRange=am()),s.add(i.inRange=am(null,a?um(this._orient):null,m(this._dragHandle,this,"all",!1),m(this._dragHandle,this,"all",!0)));var l=e.textStyleModel.getTextRect("国"),h=iL(l.width,l.height);a&&(i.handleThumbs=[],i.handleLabels=[],i.handleLabelPoints=[],this._createHandle(s,0,n,h,o,r),this._createHandle(s,1,n,h,o,r)),this._createIndicator(s,n,h,o),t.add(s)},_createHandle:function(t,e,i,n,o){var a=m(this._dragHandle,this,e,!1),r=m(this._dragHandle,this,e,!0),s=am(rm(e,n),um(this._orient),a,r);s.position[0]=i[0],t.add(s);var l=this.visualMapModel.textStyleModel,h=new ib({draggable:!0,drift:a,onmousemove:function(t){bx(t.event)},ondragend:r,style:{x:0,y:0,text:"",textFont:l.getFont(),textFill:l.getTextColor()}});this.group.add(h);var u=["horizontal"===o?n/2:1.5*n,"horizontal"===o?0===e?-1.5*n:1.5*n:0===e?-n/2:n/2],c=this._shapes;c.handleThumbs[e]=s,c.handleLabelPoints[e]=u,c.handleLabels[e]=h},_createIndicator:function(t,e,i,n){var o=am([[0,0]],"move");o.position[0]=e[0],o.attr({invisible:!0,silent:!0}),t.add(o);var a=this.visualMapModel.textStyleModel,r=new ib({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textFont:a.getFont(),textFill:a.getTextColor()}});this.group.add(r);var s=["horizontal"===n?i/2:oL+3,0],l=this._shapes;l.indicator=o,l.indicatorLabel=r,l.indicatorLabelPoint=s},_dragHandle:function(t,e,i,n){if(this._useHandle){if(this._dragging=!e,!e){var o=this._applyTransform([i,n],this._shapes.barGroup,!0);this._updateInterval(t,o[1]),this._updateView()}e===!this.visualMapModel.get("realtime")&&this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()}),e?!this._hovering&&this._clearHoverLinkToSeries():hm(this.visualMapModel)&&this._doHoverLinkToSeries(this._handleEnds[t],!1)}},_resetInterval:function(){var t=this.visualMapModel,e=this._dataInterval=t.getSelected(),i=t.getExtent(),n=[0,t.itemSize[1]];this._handleEnds=[QD(e[0],i,n,!0),QD(e[1],i,n,!0)]},_updateInterval:function(t,e){e=e||0;var i=this.visualMapModel,n=this._handleEnds,o=[0,i.itemSize[1]];OT(e,n,o,t,0);var a=i.getExtent();this._dataInterval=[QD(n[0],o,a,!0),QD(n[1],o,a,!0)]},_updateView:function(t){var e=this.visualMapModel,i=e.getExtent(),n=this._shapes,o=[0,e.itemSize[1]],a=t?o:this._handleEnds,r=this._createBarVisual(this._dataInterval,i,a,"inRange"),s=this._createBarVisual(i,i,o,"outOfRange");n.inRange.setStyle({fill:r.barColor,opacity:r.opacity}).setShape("points",r.barPoints),n.outOfRange.setStyle({fill:s.barColor,opacity:s.opacity}).setShape("points",s.barPoints),this._updateHandle(a,r)},_createBarVisual:function(t,e,i,n){var o={forceState:n,convertOpacityToAlpha:!0},a=this._makeColorGradient(t,o),r=[this.getControllerVisual(t[0],"symbolSize",o),this.getControllerVisual(t[1],"symbolSize",o)],s=this._createBarPoints(i,r);return{barColor:new xb(0,0,0,1,a),barPoints:s,handlesColor:[a[0].color,a[a.length-1].color]}},_makeColorGradient:function(t,e){var i=[],n=(t[1]-t[0])/100;i.push({color:this.getControllerVisual(t[0],"color",e),offset:0});for(var o=1;o<100;o++){var a=t[0]+n*o;if(a>t[1])break;i.push({color:this.getControllerVisual(a,"color",e),offset:o/100})}return i.push({color:this.getControllerVisual(t[1],"color",e),offset:1}),i},_createBarPoints:function(t,e){var i=this.visualMapModel.itemSize;return[[i[0]-e[0],t[0]],[i[0],t[0]],[i[0],t[1]],[i[0]-e[1],t[1]]]},_createBarGroup:function(t){var e=this._orient,i=this.visualMapModel.get("inverse");return new jy("horizontal"!==e||i?"horizontal"===e&&i?{scale:"bottom"===t?[-1,1]:[1,1],rotation:-Math.PI/2}:"vertical"!==e||i?{scale:"left"===t?[1,1]:[-1,1]}:{scale:"left"===t?[1,-1]:[-1,-1]}:{scale:"bottom"===t?[1,1]:[-1,1],rotation:Math.PI/2})},_updateHandle:function(t,e){if(this._useHandle){var i=this._shapes,n=this.visualMapModel,o=i.handleThumbs,a=i.handleLabels;tL([0,1],function(r){var s=o[r];s.setStyle("fill",e.handlesColor[r]),s.position[1]=t[r];var l=Io(i.handleLabelPoints[r],Mo(s,this.group));a[r].setStyle({x:l[0],y:l[1],text:n.formatValueText(this._dataInterval[r]),textVerticalAlign:"middle",textAlign:this._applyTransform("horizontal"===this._orient?0===r?"bottom":"top":"left",i.barGroup)})},this)}},_showIndicator:function(t,e,i,n){var o=this.visualMapModel,a=o.getExtent(),r=o.itemSize,s=[0,r[1]],l=QD(t,a,s,!0),h=this._shapes,u=h.indicator;if(u){u.position[1]=l,u.attr("invisible",!1),u.setShape("points",sm(!!i,n,l,r[1]));var c={convertOpacityToAlpha:!0},d=this.getControllerVisual(t,"color",c);u.setStyle("fill",d);var f=Io(h.indicatorLabelPoint,Mo(u,this.group)),p=h.indicatorLabel;p.attr("invisible",!1);var g=this._applyTransform("left",h.barGroup),m=this._orient;p.setStyle({text:(i||"")+o.formatValueText(e),textVerticalAlign:"horizontal"===m?g:"middle",textAlign:"horizontal"===m?"center":g,x:f[0],y:f[1]})}},_enableHoverLinkToSeries:function(){var t=this;this._shapes.barGroup.on("mousemove",function(e){if(t._hovering=!0,!t._dragging){var i=t.visualMapModel.itemSize,n=t._applyTransform([e.offsetX,e.offsetY],t._shapes.barGroup,!0,!0);n[1]=eL(iL(0,n[1]),i[1]),t._doHoverLinkToSeries(n[1],0<=n[0]&&n[0]<=i[0])}}).on("mouseout",function(){t._hovering=!1,!t._dragging&&t._clearHoverLinkToSeries()})},_enableHoverLinkFromSeries:function(){var t=this.api.getZr();this.visualMapModel.option.hoverLink?(t.on("mouseover",this._hoverLinkFromSeriesMouseOver,this),t.on("mouseout",this._hideIndicator,this)):this._clearHoverLinkFromSeries()},_doHoverLinkToSeries:function(t,e){var i=this.visualMapModel,n=i.itemSize;if(i.option.hoverLink){var o=[0,n[1]],a=i.getExtent();t=eL(iL(o[0],t),o[1]);var r=lm(i,a,o),s=[t-r,t+r],l=QD(t,o,a,!0),h=[QD(s[0],o,a,!0),QD(s[1],o,a,!0)];s[0]<o[0]&&(h[0]=-1/0),s[1]>o[1]&&(h[1]=1/0),e&&(h[0]===-1/0?this._showIndicator(l,h[1],"< ",r):h[1]===1/0?this._showIndicator(l,h[0],"> ",r):this._showIndicator(l,l,"≈ ",r));var u=this._hoverLinkDataIndices,c=[];(e||hm(i))&&(c=this._hoverLinkDataIndices=i.findTargetDataIndices(h));var d=Wo(u,c);this._dispatchHighDown("downplay",om(d[0])),this._dispatchHighDown("highlight",om(d[1]))}},_hoverLinkFromSeriesMouseOver:function(t){var e=t.target,i=this.visualMapModel;if(e&&null!=e.dataIndex){var n=this.ecModel.getSeriesByIndex(e.seriesIndex);if(i.isTargetSeries(n)){var o=n.getData(e.dataType),a=o.getDimension(i.getDataDimension(o)),r=o.get(a,e.dataIndex,!0);isNaN(r)||this._showIndicator(r,r)}}},_hideIndicator:function(){var t=this._shapes;t.indicator&&t.indicator.attr("invisible",!0),t.indicatorLabel&&t.indicatorLabel.attr("invisible",!0)},_clearHoverLinkToSeries:function(){this._hideIndicator();var t=this._hoverLinkDataIndices;this._dispatchHighDown("downplay",om(t)),t.length=0},_clearHoverLinkFromSeries:function(){this._hideIndicator();var t=this.api.getZr();t.off("mouseover",this._hoverLinkFromSeriesMouseOver),t.off("mouseout",this._hideIndicator)},_applyTransform:function(t,e,i,n){var o=Mo(e,n?null:this.group);return Tb[y(t)?"applyTransform":"transformDirection"](t,o,i)},_dispatchHighDown:function(t,e){e&&e.length&&this.api.dispatchAction({type:t,batch:e})},dispose:function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},remove:function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()}});ir({type:"selectDataRange",event:"dataRangeSelected",update:"update"},function(t,e){e.eachComponent({mainType:"visualMap",query:t},function(e){e.setSelected(t.selected)})}),tr(VD);var rL=YD.extend({type:"visualMap.piecewise",defaultOption:{selected:null,minOpen:!1,maxOpen:!1,align:"auto",itemWidth:20,itemHeight:14,itemSymbol:"roundRect",pieceList:null,categories:null,splitNumber:5,selectedMode:"multiple",itemGap:10,hoverLink:!0,showLabel:null},optionUpdated:function(t,e){rL.superApply(this,"optionUpdated",arguments),this._pieceList=[],this.resetExtent();var n=this._mode=this._determineMode();sL[this._mode].call(this),this._resetSelected(t,e);var o=this.option.categories;this.resetVisual(function(t,e){"categories"===n?(t.mappingMethod="category",t.categories=i(o)):(t.dataExtent=this.getExtent(),t.mappingMethod="piecewise",t.pieceList=f(this._pieceList,function(t){var t=i(t);return"inRange"!==e&&(t.visual=null),t}))})},completeVisualOption:function(){function t(t,e,i){return t&&t[e]&&(b(t[e])?t[e].hasOwnProperty(i):t[e]===i)}var e=this.option,i={},n=jI.listVisualTypes(),o=this.isCategory();d(e.pieces,function(t){d(n,function(e){t.hasOwnProperty(e)&&(i[e]=1)})}),d(i,function(i,n){var a=0;d(this.stateList,function(i){a|=t(e,i,n)||t(e.target,i,n)},this),!a&&d(this.stateList,function(t){(e[t]||(e[t]={}))[n]=BD.get(n,"inRange"===t?"active":"inactive",o)})},this),YD.prototype.completeVisualOption.apply(this,arguments)},_resetSelected:function(t,e){var i=this.option,n=this._pieceList,o=(e?i:t).selected||{};if(i.selected=o,d(n,function(t,e){var i=this.getSelectedMapKey(t);o.hasOwnProperty(i)||(o[i]=!0)},this),"single"===i.selectedMode){var a=!1;d(n,function(t,e){var i=this.getSelectedMapKey(t);o[i]&&(a?o[i]=!1:a=!0)},this)}},getSelectedMapKey:function(t){return"categories"===this._mode?t.value+"":t.index+""},getPieceList:function(){return this._pieceList},_determineMode:function(){var t=this.option;return t.pieces&&t.pieces.length>0?"pieces":this.option.categories?"categories":"splitNumber"},setSelected:function(t){this.option.selected=i(t)},getValueState:function(t){var e=jI.findPieceIndex(t,this._pieceList);return null!=e&&this.option.selected[this.getSelectedMapKey(this._pieceList[e])]?"inRange":"outOfRange"},findTargetDataIndices:function(t){var e=[];return this.eachTargetSeries(function(i){var n=[],o=i.getData();o.each(this.getDataDimension(o),function(e,i){jI.findPieceIndex(e,this._pieceList)===t&&n.push(i)},!0,this),e.push({seriesId:i.id,dataIndex:n})},this),e},getRepresentValue:function(t){var e;if(this.isCategory())e=t.value;else if(null!=t.value)e=t.value;else{var i=t.interval||[];e=i[0]===-1/0&&i[1]===1/0?0:(i[0]+i[1])/2}return e},getVisualMeta:function(t){function e(e,a){var r=o.getRepresentValue({interval:e});a||(a=o.getValueState(r));var s=t(r,a);e[0]===-1/0?n[0]=s:e[1]===1/0?n[1]=s:i.push({value:e[0],color:s},{value:e[1],color:s})}if(!this.isCategory()){var i=[],n=[],o=this,a=this._pieceList.slice();if(a.length){var r=a[0].interval[0];r!==-1/0&&a.unshift({interval:[-1/0,r]}),(r=a[a.length-1].interval[1])!==1/0&&a.push({interval:[r,1/0]})}else a.push({interval:[-1/0,1/0]});var s=-1/0;return d(a,function(t){var i=t.interval;i&&(i[0]>s&&e([s,i[0]],"outOfRange"),e(i.slice()),s=i[1])},this),{stops:i,outerColors:n}}}}),sL={splitNumber:function(){var t=this.option,e=this._pieceList,i=Math.min(t.precision,20),n=this.getExtent(),o=t.splitNumber;o=Math.max(parseInt(o,10),1),t.splitNumber=o;for(var a=(n[1]-n[0])/o;+a.toFixed(i)!==a&&i<5;)i++;t.precision=i,a=+a.toFixed(i);var r=0;t.minOpen&&e.push({index:r++,interval:[-1/0,n[0]],close:[0,0]});for(var s=n[0],l=r+o;r<l;s+=a){var h=r===o-1?n[1]:s+a;e.push({index:r++,interval:[s,h],close:[1,1]})}t.maxOpen&&e.push({index:r++,interval:[n[1],1/0],close:[0,0]}),Ei(e),d(e,function(t){t.text=this.formatValueText(t.interval)},this)},categories:function(){var t=this.option;d(t.categories,function(t){this._pieceList.push({text:this.formatValueText(t,!0),value:t})},this),cm(t,this._pieceList)},pieces:function(){var t=this.option,e=this._pieceList;d(t.pieces,function(t,i){b(t)||(t={value:t});var n={text:"",index:i};if(null!=t.label&&(n.text=t.label),t.hasOwnProperty("value")){var o=n.value=t.value;n.interval=[o,o],n.close=[1,1]}else{for(var a=n.interval=[],r=n.close=[0,0],s=[1,0,1],l=[-1/0,1/0],h=[],u=0;u<2;u++){for(var c=[["gte","gt","min"],["lte","lt","max"]][u],d=0;d<3&&null==a[u];d++)a[u]=t[c[d]],r[u]=s[d],h[u]=2===d;null==a[u]&&(a[u]=l[u])}h[0]&&a[1]===1/0&&(r[0]=0),h[1]&&a[0]===-1/0&&(r[1]=0),a[0]===a[1]&&r[0]&&r[1]&&(n.value=a[0])}n.visual=jI.retrieveVisuals(t),e.push(n)},this),cm(t,e),Ei(e),d(e,function(t){var e=t.close,i=[["<","≤"][e[1]],[">","≥"][e[0]]];t.text=t.text||this.formatValueText(null!=t.value?t.value:t.interval,!1,i)},this)}};JD.extend({type:"visualMap.piecewise",doRender:function(){var t=this.group;t.removeAll();var e=this.visualMapModel,i=e.get("textGap"),n=e.textStyleModel,o=n.getFont(),a=n.getTextColor(),r=this._getItemAlign(),s=e.itemSize,l=this._getViewData(),h=l.endsText,u=I(e.get("showLabel",!0),!h);h&&this._renderEndsText(t,h[0],s,u,r),d(l.viewPieceList,function(n){var l=n.piece,h=new jy;h.onclick=m(this._onItemClick,this,l),this._enableHoverLink(h,n.indexInModelPieceList);var c=e.getRepresentValue(l);if(this._createItemSymbol(h,c,[0,0,s[0],s[1]]),u){var d=this.visualMapModel.getValueState(c);h.add(new ib({style:{x:"right"===r?-i:s[0]+i,y:s[1]/2,text:l.text,textVerticalAlign:"middle",textAlign:r,textFont:o,textFill:a,opacity:"outOfRange"===d?.5:1}}))}t.add(h)},this),h&&this._renderEndsText(t,h[1],s,u,r),Hb(e.get("orient"),t,e.get("itemGap")),this.renderBackground(t),this.positionGroup(t)},_enableHoverLink:function(t,e){function i(t){var i=this.visualMapModel;i.option.hoverLink&&this.api.dispatchAction({type:t,batch:om(i.findTargetDataIndices(e))})}t.on("mouseover",m(i,this,"highlight")).on("mouseout",m(i,this,"downplay"))},_getItemAlign:function(){var t=this.visualMapModel,e=t.option;if("vertical"===e.orient)return nm(t,this.api,t.itemSize);var i=e.align;return i&&"auto"!==i||(i="left"),i},_renderEndsText:function(t,e,i,n,o){if(e){var a=new jy,r=this.visualMapModel.textStyleModel;a.add(new ib({style:{x:n?"right"===o?i[0]:0:i[0]/2,y:i[1]/2,textVerticalAlign:"middle",textAlign:n?o:"center",text:e,textFont:r.getFont(),textFill:r.getTextColor()}})),t.add(a)}},_getViewData:function(){var t=this.visualMapModel,e=f(t.getPieceList(),function(t,e){return{piece:t,indexInModelPieceList:e}}),i=t.get("text"),n=t.get("orient"),o=t.get("inverse");return("horizontal"===n?o:!o)?e.reverse():i&&(i=i.slice().reverse()),{viewPieceList:e,endsText:i}},_createItemSymbol:function(t,e,i){t.add(Hr(this.getControllerVisual(e,"symbol"),i[0],i[1],i[2],i[3],this.getControllerVisual(e,"color")))},_onItemClick:function(t){var e=this.visualMapModel,n=e.option,o=i(n.selected),a=e.getSelectedMapKey(t);"single"===n.selectedMode?(o[a]=!0,d(o,function(t,e){o[e]=e===a})):o[a]=!o[a],this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:o})}});tr(VD);var lL=Vi,hL=Gi,uL=sr({type:"marker",dependencies:["series","grid","polar","geo"],init:function(t,e,i,n){this.mergeDefaultAndTheme(t,i),this.mergeOption(t,i,n.createdBySelf,!0)},isAnimationEnabled:function(){if(Uv.node)return!1;var t=this.__hostSeries;return this.getShallow("animation")&&t&&t.isAnimationEnabled()},mergeOption:function(t,e,i,n){var o=this.constructor,r=this.mainType+"Model";i||e.eachSeries(function(t){var i=t.get(this.mainType),s=t[r];i&&i.data?(s?s.mergeOption(i,e,!0):(n&&dm(i),d(i.data,function(t){t instanceof Array?(dm(t[0]),dm(t[1])):dm(t)}),a(s=new o(i,this,e),{mainType:this.mainType,seriesIndex:t.seriesIndex,name:t.name,createdBySelf:!0}),s.__hostSeries=t),t[r]=s):t[r]=null},this)},formatTooltip:function(t){var e=this.getData(),i=this.getRawValue(t),n=y(i)?f(i,lL).join(", "):lL(i),o=e.getName(t),a=hL(this.name);return(null!=i||o)&&(a+="<br />"),o&&(a+=hL(o),null!=i&&(a+=" : ")),null!=i&&(a+=hL(n)),a},getData:function(){return this._data},setData:function(t){this._data=t}});u(uL,Nb),uL.extend({type:"markPoint",defaultOption:{zlevel:0,z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{normal:{show:!0,position:"inside"},emphasis:{show:!0}},itemStyle:{normal:{borderWidth:2}}}});var cL=l,dL=v,fL={min:dL(mm,"min"),max:dL(mm,"max"),average:dL(mm,"average")},pL=lr({type:"marker",init:function(){this.markerGroupMap=z()},render:function(t,e,i){var n=this.markerGroupMap;n.each(function(t){t.__keep=!1});var o=this.type+"Model";e.eachSeries(function(t){var n=t[o];n&&this.renderSeries(t,n,e,i)},this),n.each(function(t){!t.__keep&&this.group.remove(t.group)},this)},renderSeries:function(){}});pL.extend({type:"markPoint",updateLayout:function(t,e,i){e.eachSeries(function(t){var e=t.markPointModel;e&&(wm(e.getData(),t,i),this.markerGroupMap.get(t.id).updateLayout(e))},this)},renderSeries:function(t,e,i,n){var o=t.coordinateSystem,a=t.id,r=t.getData(),s=this.markerGroupMap,l=s.get(a)||s.set(a,new ts),h=Sm(o,t,e);e.setData(h),wm(e.getData(),t,n),h.each(function(t){var i=h.getItemModel(t),n=i.getShallow("symbolSize");"function"==typeof n&&(n=n(e.getRawValue(t),e.getDataParams(t))),h.setItemVisual(t,{symbolSize:n,color:i.get("itemStyle.normal.color")||r.getVisual("color"),symbol:i.getShallow("symbol")})}),l.updateData(h),this.group.add(l.group),h.eachItemGraphicEl(function(t){t.traverse(function(t){t.dataModel=e})}),l.__keep=!0,l.group.silent=e.get("silent")||t.get("silent")}}),tr(function(t){t.markPoint=t.markPoint||{}}),uL.extend({type:"markLine",defaultOption:{zlevel:0,z:5,symbol:["circle","arrow"],symbolSize:[8,16],precision:2,tooltip:{trigger:"item"},label:{normal:{show:!0,position:"end"},emphasis:{show:!0}},lineStyle:{normal:{type:"dashed"},emphasis:{width:3}},animationEasing:"linear"}});var gL=function(t,e,o,r){var s=t.getData(),l=r.type;if(!y(r)&&("min"===l||"max"===l||"average"===l||null!=r.xAxis||null!=r.yAxis)){var h,u;if(null!=r.yAxis||null!=r.xAxis)h=null!=r.yAxis?"y":"x",e.getAxis(h),u=I(r.yAxis,r.xAxis);else{var c=ym(r,s,e,t);h=c.valueDataDim,c.valueAxis,u=bm(s,h,l)}var d="x"===h?0:1,f=1-d,p=i(r),g={};p.type=null,p.coord=[],g.coord=[],p.coord[f]=-1/0,g.coord[f]=1/0;var m=o.get("precision");m>=0&&"number"==typeof u&&(u=+u.toFixed(Math.min(m,20))),p.coord[d]=g.coord[d]=u,r=[p,g,{type:l,valueIndex:r.valueIndex,value:u}]}return r=[vm(t,r[0]),vm(t,r[1]),a({},r[2])],r[2].type=r[2].type||"",n(r[2],r[0]),n(r[2],r[1]),r};pL.extend({type:"markLine",updateLayout:function(t,e,i){e.eachSeries(function(t){var e=t.markLineModel;if(e){var n=e.getData(),o=e.__from,a=e.__to;o.each(function(e){Am(o,e,!0,t,i),Am(a,e,!1,t,i)}),n.each(function(t){n.setItemLayout(t,[o.getItemLayout(t),a.getItemLayout(t)])}),this.markerGroupMap.get(t.id).updateLayout()}},this)},renderSeries:function(t,e,i,n){function o(e,i,o){var a=e.getItemModel(i);Am(e,i,o,t,n),e.setItemVisual(i,{symbolSize:a.get("symbolSize")||g[o?0:1],symbol:a.get("symbol",!0)||p[o?0:1],color:a.get("itemStyle.normal.color")||s.getVisual("color")})}var a=t.coordinateSystem,r=t.id,s=t.getData(),l=this.markerGroupMap,h=l.get(r)||l.set(r,new Mu);this.group.add(h.group);var u=Cm(a,t,e),c=u.from,d=u.to,f=u.line;e.__from=c,e.__to=d,e.setData(f);var p=e.get("symbol"),g=e.get("symbolSize");y(p)||(p=[p,p]),"number"==typeof g&&(g=[g,g]),u.from.each(function(t){o(c,t,!0),o(d,t,!1)}),f.each(function(t){var e=f.getItemModel(t).get("lineStyle.normal.color");f.setItemVisual(t,{color:e||c.getItemVisual(t,"color")}),f.setItemLayout(t,[c.getItemLayout(t),d.getItemLayout(t)]),f.setItemVisual(t,{fromSymbolSize:c.getItemVisual(t,"symbolSize"),fromSymbol:c.getItemVisual(t,"symbol"),toSymbolSize:d.getItemVisual(t,"symbolSize"),toSymbol:d.getItemVisual(t,"symbol")})}),h.updateData(f),u.line.eachItemGraphicEl(function(t,i){t.traverse(function(t){t.dataModel=e})}),h.__keep=!0,h.group.silent=e.get("silent")||t.get("silent")}}),tr(function(t){t.markLine=t.markLine||{}}),uL.extend({type:"markArea",defaultOption:{zlevel:0,z:1,tooltip:{trigger:"item"},animation:!1,label:{normal:{show:!0,position:"top"},emphasis:{show:!0,position:"top"}},itemStyle:{normal:{borderWidth:0}}}});var mL=function(t,e,i,n){var a=vm(t,n[0]),r=vm(t,n[1]),s=I,l=a.coord,h=r.coord;l[0]=s(l[0],-1/0),l[1]=s(l[1],-1/0),h[0]=s(h[0],1/0),h[1]=s(h[1],1/0);var u=o([{},a,r]);return u.coord=[a.coord,r.coord],u.x0=a.x,u.y0=a.y,u.x1=r.x,u.y1=r.y,u},vL=[["x0","y0"],["x1","y0"],["x1","y1"],["x0","y1"]];pL.extend({type:"markArea",updateLayout:function(t,e,i){e.eachSeries(function(t){var e=t.markAreaModel;if(e){var n=e.getData();n.each(function(e){var o=f(vL,function(o){return Pm(n,e,o,t,i)});n.setItemLayout(e,o),n.getItemGraphicEl(e).setShape("points",o)})}},this)},renderSeries:function(t,e,i,n){var o=t.coordinateSystem,a=t.name,s=t.getData(),l=this.markerGroupMap,h=l.get(a)||l.set(a,{group:new jy});this.group.add(h.group),h.__keep=!0;var u=Om(o,t,e);e.setData(u),u.each(function(e){u.setItemLayout(e,f(vL,function(i){return Pm(u,e,i,t,n)})),u.setItemVisual(e,{color:s.getVisual("color")})}),u.diff(h.__data).add(function(t){var e=new ub({shape:{points:u.getItemLayout(t)}});u.setItemGraphicEl(t,e),h.group.add(e)}).update(function(t,i){var n=h.__data.getItemGraphicEl(i);wo(n,{shape:{points:u.getItemLayout(t)}},e,t),h.group.add(n),u.setItemGraphicEl(t,n)}).remove(function(t){var e=h.__data.getItemGraphicEl(t);h.group.remove(e)}).execute(),u.eachItemGraphicEl(function(t,i){var n=u.getItemModel(i),o=n.getModel("label.normal"),a=n.getModel("label.emphasis"),s=u.getItemVisual(i,"color");t.useStyle(r(n.getModel("itemStyle.normal").getItemStyle(),{fill:Pt(s,.4),stroke:s})),t.hoverStyle=n.getModel("itemStyle.emphasis").getItemStyle(),co(t.style,t.hoverStyle,o,a,{labelFetcher:e,labelDataIndex:i,defaultText:u.getName(i)||"",isRectText:!0,autoColor:s}),uo(t,{}),t.dataModel=e}),h.__data=u,h.group.silent=e.get("silent")||t.get("silent")}}),tr(function(t){t.markArea=t.markArea||{}});Ub.registerSubTypeDefaulter("timeline",function(){return"slider"}),ir({type:"timelineChange",event:"timelineChanged",update:"prepareAndUpdate"},function(t,e){var i=e.getComponent("timeline");return i&&null!=t.currentIndex&&(i.setCurrentIndex(t.currentIndex),!i.get("loop",!0)&&i.isIndexMax()&&i.setPlayState(!1)),e.resetOption("timeline"),r({currentIndex:i.option.currentIndex},t)}),ir({type:"timelinePlayChange",event:"timelinePlayChanged",update:"update"},function(t,e){var i=e.getComponent("timeline");i&&null!=t.playState&&i.setPlayState(t.playState)});var yL=Ub.extend({type:"timeline",layoutMode:"box",defaultOption:{zlevel:0,z:4,show:!0,axisType:"time",realtime:!0,left:"20%",top:null,right:"20%",bottom:0,width:null,height:40,padding:5,controlPosition:"left",autoPlay:!1,rewind:!1,loop:!0,playInterval:2e3,currentIndex:0,itemStyle:{normal:{},emphasis:{}},label:{normal:{color:"#000"},emphasis:{}},data:[]},init:function(t,e,i){this._data,this._names,this.mergeDefaultAndTheme(t,i),this._initData()},mergeOption:function(t){yL.superApply(this,"mergeOption",arguments),this._initData()},setCurrentIndex:function(t){null==t&&(t=this.option.currentIndex);var e=this._data.count();this.option.loop?t=(t%e+e)%e:(t>=e&&(t=e-1),t<0&&(t=0)),this.option.currentIndex=t},getCurrentIndex:function(){return this.option.currentIndex},isIndexMax:function(){return this.getCurrentIndex()>=this._data.count()-1},setPlayState:function(t){this.option.autoPlay=!!t},getPlayState:function(){return!!this.option.autoPlay},_initData:function(){var t=this.option,e=t.data||[],n=t.axisType,o=this._names=[];if("category"===n){var a=[];d(e,function(t,e){var n,r=No(t);b(t)?(n=i(t)).value=e:n=e,a.push(n),_(r)||null!=r&&!isNaN(r)||(r=""),o.push(r+"")}),e=a}var r={category:"ordinal",time:"time"}[n]||"number";(this._data=new aS([{name:"value",type:r}],this)).initData(e,o)},getData:function(){return this._data},getCategories:function(){if("category"===this.get("axisType"))return this._names.slice()}});u(yL.extend({type:"timeline.slider",defaultOption:{backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,orient:"horizontal",inverse:!1,tooltip:{trigger:"item"},symbol:"emptyCircle",symbolSize:10,lineStyle:{show:!0,width:2,color:"#304654"},label:{position:"auto",normal:{show:!0,interval:"auto",rotate:0,color:"#304654"},emphasis:{show:!0,color:"#c23531"}},itemStyle:{normal:{color:"#304654",borderWidth:1},emphasis:{color:"#c23531"}},checkpointStyle:{symbol:"circle",symbolSize:13,color:"#c23531",borderWidth:5,borderColor:"rgba(194,53,49, 0.5)",animation:!0,animationDuration:300,animationEasing:"quinticInOut"},controlStyle:{show:!0,showPlayBtn:!0,showPrevBtn:!0,showNextBtn:!0,itemSize:22,itemGap:12,position:"left",playIcon:"path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",stopIcon:"path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",nextIcon:"path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",prevIcon:"path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",normal:{color:"#304654",borderColor:"#304654",borderWidth:1},emphasis:{color:"#c23531",borderColor:"#c23531",borderWidth:2}},data:[]}}),Nb);var xL=xw.extend({type:"timeline"}),_L=function(t,e,i,n){US.call(this,t,e,i),this.type=n||"value",this._autoLabelInterval,this.model=null};_L.prototype={constructor:_L,getLabelInterval:function(){var t=this.model,e=t.getModel("label.normal"),i=e.get("interval");return null!=i&&"auto"!=i?i:((i=this._autoLabelInterval)||(i=this._autoLabelInterval=Rr(f(this.scale.getTicks(),this.dataToCoord,this),Vr(this,e.get("formatter")),e.getFont(),"horizontal"===t.get("orient")?0:90,e.get("rotate"))),i)},isLabelIgnored:function(t){if("category"===this.type){var e=this.getLabelInterval();return"function"==typeof e&&!e(t,this.scale.getLabel(t))||t%(e+1)}}},h(_L,US);var bL=m,wL=d,SL=Math.PI;xL.extend({type:"timeline.slider",init:function(t,e){this.api=e,this._axis,this._viewRect,this._timer,this._currentPointer,this._mainGroup,this._labelGroup},render:function(t,e,i,n){if(this.model=t,this.api=i,this.ecModel=e,this.group.removeAll(),t.get("show",!0)){var o=this._layout(t,i),a=this._createGroup("mainGroup"),r=this._createGroup("labelGroup"),s=this._axis=this._createAxis(o,t);t.formatTooltip=function(t){return Gi(s.scale.getLabel(t))},wL(["AxisLine","AxisTick","Control","CurrentPointer"],function(e){this["_render"+e](o,a,s,t)},this),this._renderAxisLabel(o,r,s,t),this._position(o,t)}this._doPlayStop()},remove:function(){this._clearTimer(),this.group.removeAll()},dispose:function(){this._clearTimer()},_layout:function(t,e){var i=t.get("label.normal.position"),n=t.get("orient"),o=Rm(t,e);null==i||"auto"===i?i="horizontal"===n?o.y+o.height/2<e.getHeight()/2?"-":"+":o.x+o.width/2<e.getWidth()/2?"+":"-":isNaN(i)&&(i={horizontal:{top:"-",bottom:"+"},vertical:{left:"-",right:"+"}}[n][i]);var a={horizontal:"center",vertical:i>=0||"+"===i?"left":"right"},r={horizontal:i>=0||"+"===i?"top":"bottom",vertical:"middle"},s={horizontal:0,vertical:SL/2},l="vertical"===n?o.height:o.width,h=t.getModel("controlStyle"),u=h.get("show"),c=u?h.get("itemSize"):0,d=u?h.get("itemGap"):0,f=c+d,p=t.get("label.normal.rotate")||0;p=p*SL/180;var g,m,v,y,x=h.get("position",!0),_=(u=h.get("show",!0))&&h.get("showPlayBtn",!0),b=u&&h.get("showPrevBtn",!0),w=u&&h.get("showNextBtn",!0),S=0,M=l;return"left"===x||"bottom"===x?(_&&(g=[0,0],S+=f),b&&(m=[S,0],S+=f),w&&(v=[M-c,0],M-=f)):(_&&(g=[M-c,0],M-=f),b&&(m=[0,0],S+=f),w&&(v=[M-c,0],M-=f)),y=[S,M],t.get("inverse")&&y.reverse(),{viewRect:o,mainLength:l,orient:n,rotation:s[n],labelRotation:p,labelPosOpt:i,labelAlign:t.get("label.normal.align")||a[n],labelBaseline:t.get("label.normal.verticalAlign")||t.get("label.normal.baseline")||r[n],playPosition:g,prevBtnPosition:m,nextBtnPosition:v,axisExtent:y,controlSize:c,controlGap:d}},_position:function(t,e){function i(t){var e=t.position;t.origin=[c[0][0]-e[0],c[1][0]-e[1]]}function n(t){return[[t.x,t.x+t.width],[t.y,t.y+t.height]]}function o(t,e,i,n,o){t[n]+=i[n][o]-e[n][o]}var a=this._mainGroup,r=this._labelGroup,s=t.viewRect;if("vertical"===t.orient){var l=ot(),h=s.x,u=s.y+s.height;lt(l,l,[-h,-u]),ht(l,l,-SL/2),lt(l,l,[h,u]),(s=s.clone()).applyTransform(l)}var c=n(s),d=n(a.getBoundingRect()),f=n(r.getBoundingRect()),p=a.position,g=r.position;g[0]=p[0]=c[0][0];var m=t.labelPosOpt;if(isNaN(m))o(p,d,c,1,v="+"===m?0:1),o(g,f,c,1,1-v);else{var v=m>=0?0:1;o(p,d,c,1,v),g[1]=p[1]+m}a.attr("position",p),r.attr("position",g),a.rotation=r.rotation=t.rotation,i(a),i(r)},_createAxis:function(t,e){var i=e.getData(),n=e.get("axisType"),o=Er(e,n),a=i.getDataExtent("value");o.setExtent(a[0],a[1]),this._customizeScale(o,i),o.niceTicks();var r=new _L("value",o,t.axisExtent,n);return r.model=e,r},_customizeScale:function(t,e){t.getTicks=function(){return e.mapArray(["value"],function(t){return t})},t.getTicksLabels=function(){return f(this.getTicks(),t.getLabel,t)}},_createGroup:function(t){var e=this["_"+t]=new jy;return this.group.add(e),e},_renderAxisLine:function(t,e,i,n){var o=i.getExtent();n.get("lineStyle.show")&&e.add(new fb({shape:{x1:o[0],y1:0,x2:o[1],y2:0},style:a({lineCap:"round"},n.getModel("lineStyle").getLineStyle()),silent:!0,z2:1}))},_renderAxisTick:function(t,e,i,n){var o=n.getData(),a=i.scale.getTicks();wL(a,function(t,a){var r=i.dataToCoord(t),s=o.getItemModel(a),l=s.getModel("itemStyle.normal"),h=s.getModel("itemStyle.emphasis"),u={position:[r,0],onclick:bL(this._changeTimeline,this,a)},c=Bm(s,l,e,u);uo(c,h.getItemStyle()),s.get("tooltip")?(c.dataIndex=a,c.dataModel=n):c.dataIndex=c.dataModel=null},this)},_renderAxisLabel:function(t,e,i,n){var o=n.getModel("label.normal");if(o.get("show")){var a=n.getData(),r=i.scale.getTicks(),s=Vr(i,o.get("formatter")),l=i.getLabelInterval();wL(r,function(n,o){if(!i.isLabelIgnored(o,l)){var r=a.getItemModel(o),h=r.getModel("label.normal"),u=r.getModel("label.emphasis"),c=i.dataToCoord(n),d=new ib({position:[c,0],rotation:t.labelRotation-t.rotation,onclick:bL(this._changeTimeline,this,o),silent:!1});fo(d.style,h,{text:s[o],textAlign:t.labelAlign,textVerticalAlign:t.labelBaseline}),e.add(d),uo(d,fo({},u))}},this)}},_renderControl:function(t,e,i,n){function o(t,i,o,u){if(t){var c=Vm(n,i,h,{position:t,origin:[a/2,0],rotation:u?-r:0,rectHover:!0,style:s,onclick:o});e.add(c),uo(c,l)}}var a=t.controlSize,r=t.rotation,s=n.getModel("controlStyle.normal").getItemStyle(),l=n.getModel("controlStyle.emphasis").getItemStyle(),h=[0,-a/2,a,a],u=n.getPlayState(),c=n.get("inverse",!0);o(t.nextBtnPosition,"controlStyle.nextIcon",bL(this._changeTimeline,this,c?"-":"+")),o(t.prevBtnPosition,"controlStyle.prevIcon",bL(this._changeTimeline,this,c?"+":"-")),o(t.playPosition,"controlStyle."+(u?"stopIcon":"playIcon"),bL(this._handlePlayClick,this,!u),!0)},_renderCurrentPointer:function(t,e,i,n){var o=n.getData(),a=n.getCurrentIndex(),r=o.getItemModel(a).getModel("checkpointStyle"),s=this,l={onCreate:function(t){t.draggable=!0,t.drift=bL(s._handlePointerDrag,s),t.ondragend=bL(s._handlePointerDragend,s),Gm(t,a,i,n,!0)},onUpdate:function(t){Gm(t,a,i,n)}};this._currentPointer=Bm(r,r,this._mainGroup,{},this._currentPointer,l)},_handlePlayClick:function(t){this._clearTimer(),this.api.dispatchAction({type:"timelinePlayChange",playState:t,from:this.uid})},_handlePointerDrag:function(t,e,i){this._clearTimer(),this._pointerChangeTimeline([i.offsetX,i.offsetY])},_handlePointerDragend:function(t){this._pointerChangeTimeline([t.offsetX,t.offsetY],!0)},_pointerChangeTimeline:function(t,e){var i=this._toAxisCoord(t)[0],n=Ii(this._axis.getExtent().slice());i>n[1]&&(i=n[1]),i<n[0]&&(i=n[0]),this._currentPointer.position[0]=i,this._currentPointer.dirty();var o=this._findNearestTick(i),a=this.model;(e||o!==a.getCurrentIndex()&&a.get("realtime"))&&this._changeTimeline(o)},_doPlayStop:function(){this._clearTimer(),this.model.getPlayState()&&(this._timer=setTimeout(bL(function(){var t=this.model;this._changeTimeline(t.getCurrentIndex()+(t.get("rewind",!0)?-1:1))},this),this.model.get("playInterval")))},_toAxisCoord:function(t){return Io(t,this._mainGroup.getLocalTransform(),!0)},_findNearestTick:function(t){var e,i=this.model.getData(),n=1/0,o=this._axis;return i.each(["value"],function(i,a){var r=o.dataToCoord(i),s=Math.abs(r-t);s<n&&(n=s,e=a)}),e},_clearTimer:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)},_changeTimeline:function(t){var e=this.model.getCurrentIndex();"+"===t?t=e+1:"-"===t&&(t=e-1),this.api.dispatchAction({type:"timelineChange",currentIndex:t,from:this.uid})}}),tr(function(t){var e=t&&t.timeline;y(e)||(e=e?[e]:[]),d(e,function(t){t&&zm(t)})});var ML=sr({type:"toolbox",layoutMode:{type:"box",ignoreSize:!0},mergeDefaultAndTheme:function(t){ML.superApply(this,"mergeDefaultAndTheme",arguments),d(this.option.feature,function(t,e){var i=Sg(e);i&&n(t,i.defaultOption)})},defaultOption:{show:!0,z:6,zlevel:0,orient:"horizontal",left:"right",top:"top",backgroundColor:"transparent",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemSize:15,itemGap:8,showTitle:!0,iconStyle:{normal:{borderColor:"#666",color:"none"},emphasis:{borderColor:"#3E98C5"}}}});lr({type:"toolbox",render:function(t,e,i,n){function o(o,r){var s,c=u[o],d=u[r],f=new Lo(l[c],t,t.ecModel);if(c&&!d){if(Wm(c))s={model:f,onclick:f.option.onclick,featureName:c};else{var p=Sg(c);if(!p)return;s=new p(f,e,i)}h[c]=s}else{if(!(s=h[d]))return;s.model=f,s.ecModel=e,s.api=i}c||!d?f.get("show")&&!s.unusable?(a(f,s,c),f.setIconStatus=function(t,e){var i=this.option,n=this.iconPaths;i.iconStatus=i.iconStatus||{},i.iconStatus[t]=e,n[t]&&n[t].trigger(e)},s.render&&s.render(f,e,i,n)):s.remove&&s.remove(e,i):s.dispose&&s.dispose(e,i)}function a(n,o,a){var l=n.getModel("iconStyle"),h=o.getIcons?o.getIcons():n.get("icon"),u=n.get("title")||{};if("string"==typeof h){var c=h,f=u;u={},(h={})[a]=c,u[a]=f}var p=n.iconPaths={};d(h,function(a,h){var c=Do(a,{},{x:-s/2,y:-s/2,width:s,height:s});c.setStyle(l.getModel("normal").getItemStyle()),c.hoverStyle=l.getModel("emphasis").getItemStyle(),uo(c),t.get("showTitle")&&(c.__title=u[h],c.on("mouseover",function(){var t=l.getModel("emphasis").getItemStyle();c.setStyle({text:u[h],textPosition:t.textPosition||"bottom",textFill:t.fill||t.stroke||"#000",textAlign:t.textAlign||"center"})}).on("mouseout",function(){c.setStyle({textFill:null})})),c.trigger(n.get("iconStatus."+h)||"normal"),r.add(c),c.on("click",m(o.onclick,o,e,i,h)),p[h]=c})}var r=this.group;if(r.removeAll(),t.get("show")){var s=+t.get("itemSize"),l=t.get("feature")||{},h=this._features||(this._features={}),u=[];d(l,function(t,e){u.push(e)}),new fr(this._featureNames||[],u).add(o).update(o).remove(v(o,null)).execute(),this._featureNames=u,yp(r,t,i),r.add(xp(r.getBoundingRect(),t)),r.eachChild(function(t){var e=t.__title,n=t.hoverStyle;if(n&&e){var o=de(e,Ae(n)),a=t.position[0]+r.position[0],l=!1;t.position[1]+r.position[1]+s+o.height>i.getHeight()&&(n.textPosition="top",l=!0);var h=l?-5-o.height:s+8;a+o.width/2>i.getWidth()?(n.textPosition=["100%",h],n.textAlign="right"):a-o.width/2<0&&(n.textPosition=[0,h],n.textAlign="left")}})}},updateView:function(t,e,i,n){d(this._features,function(t){t.updateView&&t.updateView(t.model,e,i,n)})},updateLayout:function(t,e,i,n){d(this._features,function(t){t.updateLayout&&t.updateLayout(t.model,e,i,n)})},remove:function(t,e){d(this._features,function(i){i.remove&&i.remove(t,e)}),this.group.removeAll()},dispose:function(t,e){d(this._features,function(i){i.dispose&&i.dispose(t,e)})}});var IL=lD.toolbox.saveAsImage;Hm.defaultOption={show:!0,icon:"M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",title:IL.title,type:"png",name:"",excludeComponents:["toolbox"],pixelRatio:1,lang:IL.lang.slice()},Hm.prototype.unusable=!Uv.canvasSupported,Hm.prototype.onclick=function(t,e){var i=this.model,n=i.get("name")||t.get("title.0.text")||"echarts",o=document.createElement("a"),a=i.get("type",!0)||"png";o.download=n+"."+a,o.target="_blank";var r=e.getConnectedDataURL({type:a,backgroundColor:i.get("backgroundColor",!0)||t.get("backgroundColor")||"#fff",excludeComponents:i.get("excludeComponents"),pixelRatio:i.get("pixelRatio")});if(o.href=r,"function"!=typeof MouseEvent||Uv.browser.ie||Uv.browser.edge)if(window.navigator.msSaveOrOpenBlob){for(var s=atob(r.split(",")[1]),l=s.length,h=new Uint8Array(l);l--;)h[l]=s.charCodeAt(l);var u=new Blob([h]);window.navigator.msSaveOrOpenBlob(u,n+"."+a)}else{var c=i.get("lang"),d='<body style="margin:0;"><img src="'+r+'" style="max-width:100%;" title="'+(c&&c[0]||"")+'" /></body>';window.open().document.write(d)}else{var f=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});o.dispatchEvent(f)}},wg("saveAsImage",Hm);var TL=lD.toolbox.magicType;Fm.defaultOption={show:!0,type:[],icon:{line:"M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",bar:"M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",stack:"M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",tiled:"M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"},title:i(TL.title),option:{},seriesIndex:{}};var AL=Fm.prototype;AL.getIcons=function(){var t=this.model,e=t.get("icon"),i={};return d(t.get("type"),function(t){e[t]&&(i[t]=e[t])}),i};var CL={line:function(t,e,i,o){if("bar"===t)return n({id:e,type:"line",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},o.get("option.line")||{},!0)},bar:function(t,e,i,o){if("line"===t)return n({id:e,type:"bar",data:i.get("data"),stack:i.get("stack"),markPoint:i.get("markPoint"),markLine:i.get("markLine")},o.get("option.bar")||{},!0)},stack:function(t,e,i,o){if("line"===t||"bar"===t)return n({id:e,stack:"__ec_magicType_stack__"},o.get("option.stack")||{},!0)},tiled:function(t,e,i,o){if("line"===t||"bar"===t)return n({id:e,stack:""},o.get("option.tiled")||{},!0)}},DL=[["line","bar"],["stack","tiled"]];AL.onclick=function(t,e,i){var n=this.model,o=n.get("seriesIndex."+i);if(CL[i]){var a={series:[]};d(DL,function(t){l(t,i)>=0&&d(t,function(t){n.setIconStatus(t,"normal")})}),n.setIconStatus(i,"emphasis"),t.eachComponent({mainType:"series",query:null==o?null:{seriesIndex:o}},function(e){var o=e.subType,s=e.id,l=CL[i](o,s,e,n);l&&(r(l,e.option),a.series.push(l));var h=e.coordinateSystem;if(h&&"cartesian2d"===h.type&&("line"===i||"bar"===i)){var u=h.getAxesByScale("ordinal")[0];if(u){var c=u.dim+"Axis",d=t.queryComponents({mainType:c,index:e.get(name+"Index"),id:e.get(name+"Id")})[0].componentIndex;a[c]=a[c]||[];for(var f=0;f<=d;f++)a[c][d]=a[c][d]||{};a[c][d].boundaryGap="bar"===i}}}),e.dispatchAction({type:"changeMagicType",currentType:i,newOption:a})}},ir({type:"changeMagicType",event:"magicTypeChanged",update:"prepareAndUpdate"},function(t,e){e.mergeOption(t.newOption)}),wg("magicType",Fm);var LL=lD.toolbox.dataView,kL=new Array(60).join("-"),PL="\t",OL=new RegExp("["+PL+"]+","g");Qm.defaultOption={show:!0,readOnly:!1,optionToContent:null,contentToOption:null,icon:"M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",title:i(LL.title),lang:i(LL.lang),backgroundColor:"#fff",textColor:"#000",textareaColor:"#fff",textareaBorderColor:"#333",buttonColor:"#c23531",buttonTextColor:"#fff"},Qm.prototype.onclick=function(t,e){function i(){n.removeChild(a),x._dom=null}var n=e.getDom(),o=this.model;this._dom&&n.removeChild(this._dom);var a=document.createElement("div");a.style.cssText="position:absolute;left:5px;top:5px;bottom:5px;right:5px;",a.style.backgroundColor=o.get("backgroundColor")||"#fff";var r=document.createElement("h4"),s=o.get("lang")||[];r.innerHTML=s[0]||o.get("title"),r.style.cssText="margin: 10px 20px;",r.style.color=o.get("textColor");var l=document.createElement("div"),h=document.createElement("textarea");l.style.cssText="display:block;width:100%;overflow:auto;";var u=o.get("optionToContent"),c=o.get("contentToOption"),d=jm(t);if("function"==typeof u){var f=u(e.getOption());"string"==typeof f?l.innerHTML=f:S(f)&&l.appendChild(f)}else l.appendChild(h),h.readOnly=o.get("readOnly"),h.style.cssText="width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;",h.style.color=o.get("textColor"),h.style.borderColor=o.get("textareaBorderColor"),h.style.backgroundColor=o.get("textareaColor"),h.value=d.value;var p=d.meta,g=document.createElement("div");g.style.cssText="position:absolute;bottom:0;left:0;right:0;";var m="float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",v=document.createElement("div"),y=document.createElement("div");m+=";background-color:"+o.get("buttonColor"),m+=";color:"+o.get("buttonTextColor");var x=this;si(v,"click",i),si(y,"click",function(){var t;try{t="function"==typeof c?c(l,e.getOption()):Jm(h.value,p)}catch(t){throw i(),new Error("Data view format error "+t)}t&&e.dispatchAction({type:"changeDataView",newOption:t}),i()}),v.innerHTML=s[1],y.innerHTML=s[2],y.style.cssText=m,v.style.cssText=m,!o.get("readOnly")&&g.appendChild(y),g.appendChild(v),si(h,"keydown",function(t){if(9===(t.keyCode||t.which)){var e=this.value,i=this.selectionStart,n=this.selectionEnd;this.value=e.substring(0,i)+PL+e.substring(n),this.selectionStart=this.selectionEnd=i+1,bx(t)}}),a.appendChild(r),a.appendChild(l),a.appendChild(g),l.style.height=n.clientHeight-80+"px",n.appendChild(a),this._dom=a},Qm.prototype.remove=function(t,e){this._dom&&e.getDom().removeChild(this._dom)},Qm.prototype.dispose=function(t,e){this.remove(t,e)},wg("dataView",Qm),ir({type:"changeDataView",event:"dataViewChanged",update:"prepareAndUpdate"},function(t,e){var i=[];d(t.newOption.series,function(t){var n=e.getSeriesByName(t.name)[0];if(n){var o=n.get("data");i.push({name:t.name,data:tv(t.data,o)})}else i.push(a({type:"scatter"},t))}),e.mergeOption(r({series:i},t.newOption))});var zL=d,NL="\0_ec_hist_store";bD.extend({type:"dataZoom.select"}),wD.extend({type:"dataZoom.select"});var EL=lD.toolbox.dataZoom,RL=d,VL="\0_ec_\0toolbox-dataZoom_";rv.defaultOption={show:!0,icon:{zoom:"M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",back:"M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"},title:i(EL.title)};var BL=rv.prototype;BL.render=function(t,e,i,n){this.model=t,this.ecModel=e,this.api=i,hv(t,e,this,n,i),lv(t,e)},BL.onclick=function(t,e,i){GL[i].call(this)},BL.remove=function(t,e){this._brushController.unmount()},BL.dispose=function(t,e){this._brushController.dispose()};var GL={zoom:function(){var t=!this._isZoomActive;this.api.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:t})},back:function(){this._dispatchZoomAction(iv(this.ecModel))}};BL._onBrush=function(t,e){function i(t,e,i){var r=e.getAxis(t),s=r.model,l=n(t,s,a),h=l.findRepresentativeAxisProxy(s).getMinMaxSpan();null==h.minValueSpan&&null==h.maxValueSpan||(i=OT(0,i.slice(),r.scale.getExtent(),0,h.minValueSpan,h.maxValueSpan)),l&&(o[l.id]={dataZoomId:l.id,startValue:i[0],endValue:i[1]})}function n(t,e,i){var n;return i.eachComponent({mainType:"dataZoom",subType:"select"},function(i){i.getAxisModel(t,e.componentIndex)&&(n=i)}),n}if(e.isEnd&&t.length){var o={},a=this.ecModel;this._brushController.updateCovers([]),new rg(sv(this.model.option),a,{include:["grid"]}).matchOutputRanges(t,a,function(t,e,n){if("cartesian2d"===n.type){var o=t.brushType;"rect"===o?(i("x",n,e[0]),i("y",n,e[1])):i({lineX:"x",lineY:"y"}[o],n,e)}}),ev(a,o),this._dispatchZoomAction(o)}},BL._dispatchZoomAction=function(t){var e=[];RL(t,function(t,n){e.push(i(t))}),e.length&&this.api.dispatchAction({type:"dataZoom",from:this.uid,batch:e})},wg("dataZoom",rv),tr(function(t){function e(t,e){if(e){var o=t+"Index",a=e[o];null==a||"all"==a||y(a)||(a=!1===a||"none"===a?[]:[a]),i(t,function(e,i){if(null==a||"all"==a||-1!==l(a,i)){var r={type:"select",$fromToolbox:!0,id:VL+t+i};r[o]=i,n.push(r)}})}}function i(e,i){var n=t[e];y(n)||(n=n?[n]:[]),RL(n,i)}if(t){var n=t.dataZoom||(t.dataZoom=[]);y(n)||(t.dataZoom=n=[n]);var o=t.toolbox;if(o&&(y(o)&&(o=o[0]),o&&o.feature)){var a=o.feature.dataZoom;e("xAxis",a),e("yAxis",a)}}});var WL=lD.toolbox.restore;uv.defaultOption={show:!0,icon:"M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",title:WL.title},uv.prototype.onclick=function(t,e,i){nv(t),e.dispatchAction({type:"restore",from:this.uid})},wg("restore",uv),ir({type:"restore",event:"restore",update:"prepareAndUpdate"},function(t,e){e.resetOption("recreate")});var HL,FL="urn:schemas-microsoft-com:vml",ZL="undefined"==typeof window?null:window,UL=!1,XL=ZL&&ZL.document;if(XL&&!Uv.canvasSupported)try{!XL.namespaces.zrvml&&XL.namespaces.add("zrvml",FL),HL=function(t){return XL.createElement("<zrvml:"+t+' class="zrvml">')}}catch(t){HL=function(t){return XL.createElement("<"+t+' xmlns="'+FL+'" class="zrvml">')}}var jL=P_.CMD,qL=Math.round,YL=Math.sqrt,$L=Math.abs,KL=Math.cos,JL=Math.sin,QL=Math.max;if(!Uv.canvasSupported){var tk=21600,ek=tk/2,ik=function(t){t.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;",t.coordsize=tk+","+tk,t.coordorigin="0,0"},nk=function(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")},ok=function(t,e,i){return"rgb("+[t,e,i].join(",")+")"},ak=function(t,e){e&&t&&e.parentNode!==t&&t.appendChild(e)},rk=function(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)},sk=function(t,e,i){return 1e5*(parseFloat(t)||0)+1e3*(parseFloat(e)||0)+i},lk=function(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t},hk=function(t,e,i){var n=Mt(e);i=+i,isNaN(i)&&(i=1),n&&(t.color=ok(n[0],n[1],n[2]),t.opacity=i*n[3])},uk=function(t){var e=Mt(t);return[ok(e[0],e[1],e[2]),e[3]]},ck=function(t,e,i){var n=e.fill;if(null!=n)if(n instanceof yb){var o,a=0,r=[0,0],s=0,l=1,h=i.getBoundingRect(),u=h.width,c=h.height;if("linear"===n.type){o="gradient";var d=i.transform,f=[n.x*u,n.y*c],p=[n.x2*u,n.y2*c];d&&($(f,f,d),$(p,p,d));var g=p[0]-f[0],m=p[1]-f[1];(a=180*Math.atan2(g,m)/Math.PI)<0&&(a+=360),a<1e-6&&(a=0)}else{o="gradientradial";var f=[n.x*u,n.y*c],d=i.transform,v=i.scale,y=u,x=c;r=[(f[0]-h.x)/y,(f[1]-h.y)/x],d&&$(f,f,d),y/=v[0]*tk,x/=v[1]*tk;var _=QL(y,x);s=0/_,l=2*n.r/_-s}var b=n.colorStops.slice();b.sort(function(t,e){return t.offset-e.offset});for(var w=b.length,S=[],M=[],I=0;I<w;I++){var T=b[I],A=uk(T.color);M.push(T.offset*l+s+" "+A[0]),0!==I&&I!==w-1||S.push(A)}if(w>=2){var C=S[0][0],D=S[1][0],L=S[0][1]*e.opacity,k=S[1][1]*e.opacity;t.type=o,t.method="none",t.focus="100%",t.angle=a,t.color=C,t.color2=D,t.colors=M.join(","),t.opacity=k,t.opacity2=L}"radial"===o&&(t.focusposition=r.join(","))}else hk(t,n,e.opacity)},dk=function(t,e){null!=e.lineDash&&(t.dashstyle=e.lineDash.join(" ")),null==e.stroke||e.stroke instanceof yb||hk(t,e.stroke,e.opacity)},fk=function(t,e,i,n){var o="fill"==e,a=t.getElementsByTagName(e)[0];null!=i[e]&&"none"!==i[e]&&(o||!o&&i.lineWidth)?(t[o?"filled":"stroked"]="true",i[e]instanceof yb&&rk(t,a),a||(a=cv(e)),o?ck(a,i,n):dk(a,i),ak(t,a)):(t[o?"filled":"stroked"]="false",rk(t,a))},pk=[[],[],[]],gk=function(t,e){var i,n,o,a,r,s,l=jL.M,h=jL.C,u=jL.L,c=jL.A,d=jL.Q,f=[],p=t.data,g=t.len();for(a=0;a<g;){switch(o=p[a++],n="",i=0,o){case l:n=" m ",i=1,r=p[a++],s=p[a++],pk[0][0]=r,pk[0][1]=s;break;case u:n=" l ",i=1,r=p[a++],s=p[a++],pk[0][0]=r,pk[0][1]=s;break;case d:case h:n=" c ",i=3;var m,v,y=p[a++],x=p[a++],_=p[a++],b=p[a++];o===d?(m=_,v=b,_=(_+2*y)/3,b=(b+2*x)/3,y=(r+2*y)/3,x=(s+2*x)/3):(m=p[a++],v=p[a++]),pk[0][0]=y,pk[0][1]=x,pk[1][0]=_,pk[1][1]=b,pk[2][0]=m,pk[2][1]=v,r=m,s=v;break;case c:var w=0,S=0,M=1,I=1,T=0;e&&(w=e[4],S=e[5],M=YL(e[0]*e[0]+e[1]*e[1]),I=YL(e[2]*e[2]+e[3]*e[3]),T=Math.atan2(-e[1]/I,e[0]/M));var A=p[a++],C=p[a++],D=p[a++],L=p[a++],k=p[a++]+T,P=p[a++]+k+T;a++;var O=p[a++],z=A+KL(k)*D,N=C+JL(k)*L,y=A+KL(P)*D,x=C+JL(P)*L,E=O?" wa ":" at ";Math.abs(z-y)<1e-4&&(Math.abs(P-k)>.01?O&&(z+=.0125):Math.abs(N-C)<1e-4?O&&z<A||!O&&z>A?x-=.0125:x+=.0125:O&&N<C||!O&&N>C?y+=.0125:y-=.0125),f.push(E,qL(((A-D)*M+w)*tk-ek),",",qL(((C-L)*I+S)*tk-ek),",",qL(((A+D)*M+w)*tk-ek),",",qL(((C+L)*I+S)*tk-ek),",",qL((z*M+w)*tk-ek),",",qL((N*I+S)*tk-ek),",",qL((y*M+w)*tk-ek),",",qL((x*I+S)*tk-ek)),r=y,s=x;break;case jL.R:var R=pk[0],V=pk[1];R[0]=p[a++],R[1]=p[a++],V[0]=R[0]+p[a++],V[1]=R[1]+p[a++],e&&($(R,R,e),$(V,V,e)),R[0]=qL(R[0]*tk-ek),V[0]=qL(V[0]*tk-ek),R[1]=qL(R[1]*tk-ek),V[1]=qL(V[1]*tk-ek),f.push(" m ",R[0],",",R[1]," l ",V[0],",",R[1]," l ",V[0],",",V[1]," l ",R[0],",",V[1]);break;case jL.Z:f.push(" x ")}if(i>0){f.push(n);for(var B=0;B<i;B++){var G=pk[B];e&&$(G,G,e),f.push(qL(G[0]*tk-ek),",",qL(G[1]*tk-ek),B<i-1?",":"")}}}return f.join("")};Nn.prototype.brushVML=function(t){var e=this.style,i=this._vmlEl;i||(i=cv("shape"),ik(i),this._vmlEl=i),fk(i,"fill",e,this),fk(i,"stroke",e,this);var n=this.transform,o=null!=n,a=i.getElementsByTagName("stroke")[0];if(a){var r=e.lineWidth;if(o&&!e.strokeNoScale){var s=n[0]*n[3]-n[1]*n[2];r*=YL($L(s))}a.weight=r+"px"}var l=this.path||(this.path=new P_);this.__dirtyPath&&(l.beginPath(),this.buildPath(l,this.shape),l.toStatic(),this.__dirtyPath=!1),i.path=gk(l,this.transform),i.style.zIndex=sk(this.zlevel,this.z,this.z2),ak(t,i),null!=e.text?this.drawRectText(t,this.getBoundingRect()):this.removeRectText(t)},Nn.prototype.onRemove=function(t){rk(t,this._vmlEl),this.removeRectText(t)},Nn.prototype.onAdd=function(t){ak(t,this._vmlEl),this.appendRectText(t)};var mk=function(t){return"object"==typeof t&&t.tagName&&"IMG"===t.tagName.toUpperCase()};qe.prototype.brushVML=function(t){var e,i,n=this.style,o=n.image;if(mk(o)){var a=o.src;if(a===this._imageSrc)e=this._imageWidth,i=this._imageHeight;else{var r=o.runtimeStyle,s=r.width,l=r.height;r.width="auto",r.height="auto",e=o.width,i=o.height,r.width=s,r.height=l,this._imageSrc=a,this._imageWidth=e,this._imageHeight=i}o=a}else o===this._imageSrc&&(e=this._imageWidth,i=this._imageHeight);if(o){var h=n.x||0,u=n.y||0,c=n.width,d=n.height,f=n.sWidth,p=n.sHeight,g=n.sx||0,m=n.sy||0,v=f&&p,y=this._vmlEl;y||(y=XL.createElement("div"),ik(y),this._vmlEl=y);var x,_=y.style,b=!1,w=1,S=1;if(this.transform&&(x=this.transform,w=YL(x[0]*x[0]+x[1]*x[1]),S=YL(x[2]*x[2]+x[3]*x[3]),b=x[1]||x[2]),b){var M=[h,u],I=[h+c,u],T=[h,u+d],A=[h+c,u+d];$(M,M,x),$(I,I,x),$(T,T,x),$(A,A,x);var C=QL(M[0],I[0],T[0],A[0]),D=QL(M[1],I[1],T[1],A[1]),L=[];L.push("M11=",x[0]/w,",","M12=",x[2]/S,",","M21=",x[1]/w,",","M22=",x[3]/S,",","Dx=",qL(h*w+x[4]),",","Dy=",qL(u*S+x[5])),_.padding="0 "+qL(C)+"px "+qL(D)+"px 0",_.filter="progid:DXImageTransform.Microsoft.Matrix("+L.join("")+", SizingMethod=clip)"}else x&&(h=h*w+x[4],u=u*S+x[5]),_.filter="",_.left=qL(h)+"px",_.top=qL(u)+"px";var k=this._imageEl,P=this._cropEl;k||(k=XL.createElement("div"),this._imageEl=k);var O=k.style;if(v){if(e&&i)O.width=qL(w*e*c/f)+"px",O.height=qL(S*i*d/p)+"px";else{var z=new Image,N=this;z.onload=function(){z.onload=null,e=z.width,i=z.height,O.width=qL(w*e*c/f)+"px",O.height=qL(S*i*d/p)+"px",N._imageWidth=e,N._imageHeight=i,N._imageSrc=o},z.src=o}P||((P=XL.createElement("div")).style.overflow="hidden",this._cropEl=P);var E=P.style;E.width=qL((c+g*c/f)*w),E.height=qL((d+m*d/p)*S),E.filter="progid:DXImageTransform.Microsoft.Matrix(Dx="+-g*c/f*w+",Dy="+-m*d/p*S+")",P.parentNode||y.appendChild(P),k.parentNode!=P&&P.appendChild(k)}else O.width=qL(w*c)+"px",O.height=qL(S*d)+"px",y.appendChild(k),P&&P.parentNode&&(y.removeChild(P),this._cropEl=null);var R="",V=n.opacity;V<1&&(R+=".Alpha(opacity="+qL(100*V)+") "),R+="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+o+", SizingMethod=scale)",O.filter=R,y.style.zIndex=sk(this.zlevel,this.z,this.z2),ak(t,y),null!=n.text&&this.drawRectText(t,this.getBoundingRect())}},qe.prototype.onRemove=function(t){rk(t,this._vmlEl),this._vmlEl=null,this._cropEl=null,this._imageEl=null,this.removeRectText(t)},qe.prototype.onAdd=function(t){ak(t,this._vmlEl),this.appendRectText(t)};var vk,yk={},xk=0,_k=document.createElement("div"),bk=function(t){var e=yk[t];if(!e){xk>100&&(xk=0,yk={});var i,n=_k.style;try{n.font=t,i=n.fontFamily.split(",")[0]}catch(t){}e={style:n.fontStyle||"normal",variant:n.fontVariant||"normal",weight:n.fontWeight||"normal",size:0|parseFloat(n.fontSize||12),family:i||"Microsoft YaHei"},yk[t]=e,xk++}return e};!function(t,e){cx[t]=e}("measureText",function(t,e){var i=XL;vk||((vk=i.createElement("div")).style.cssText="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",XL.body.appendChild(vk));try{vk.style.font=e}catch(t){}return vk.innerHTML="",vk.appendChild(i.createTextNode(t)),{width:vk.offsetWidth}});for(var wk=new jt,Sk=[gx,je,qe,Nn,ib],Mk=0;Mk<Sk.length;Mk++){var Ik=Sk[Mk].prototype;Ik.drawRectText=function(t,e,i,n){var o=this.style;this.__dirty&&De(o);var a=o.text;if(null!=a&&(a+=""),a){if(o.rich){var r=Ie(a,o);a=[];for(var s=0;s<r.lines.length;s++){for(var l=r.lines[s].tokens,h=[],u=0;u<l.length;u++)h.push(l[u].text);a.push(h.join(""))}a=a.join("\n")}var c,d,f=o.textAlign,p=o.textVerticalAlign,g=bk(o.font),m=g.style+" "+g.variant+" "+g.weight+" "+g.size+'px "'+g.family+'"';i=i||de(a,m,f,p);var v=this.transform;if(v&&!n&&(wk.copy(e),wk.applyTransform(v),e=wk),n)c=e.x,d=e.y;else{var y=o.textPosition,x=o.textDistance;if(y instanceof Array)c=e.x+lk(y[0],e.width),d=e.y+lk(y[1],e.height),f=f||"left";else{var _=ve(y,e,x);c=_.x,d=_.y,f=f||_.textAlign,p=p||_.textVerticalAlign}}c=ge(c,i.width,f),d=me(d,i.height,p),d+=i.height/2;var b,w,S,M=cv,I=this._textVmlEl;I?w=(b=(S=I.firstChild).nextSibling).nextSibling:(I=M("line"),b=M("path"),w=M("textpath"),S=M("skew"),w.style["v-text-align"]="left",ik(I),b.textpathok=!0,w.on=!0,I.from="0 0",I.to="1000 0.05",ak(I,S),ak(I,b),ak(I,w),this._textVmlEl=I);var T=[c,d],A=I.style;v&&n?($(T,T,v),S.on=!0,S.matrix=v[0].toFixed(3)+","+v[2].toFixed(3)+","+v[1].toFixed(3)+","+v[3].toFixed(3)+",0,0",S.offset=(qL(T[0])||0)+","+(qL(T[1])||0),S.origin="0 0",A.left="0px",A.top="0px"):(S.on=!1,A.left=qL(c)+"px",A.top=qL(d)+"px"),w.string=nk(a);try{w.style.font=m}catch(t){}fk(I,"fill",{fill:o.textFill,opacity:o.opacity},this),fk(I,"stroke",{stroke:o.textStroke,opacity:o.opacity,lineDash:o.lineDash},this),I.style.zIndex=sk(this.zlevel,this.z,this.z2),ak(t,I)}},Ik.removeRectText=function(t){rk(t,this._textVmlEl),this._textVmlEl=null},Ik.appendRectText=function(t){ak(t,this._textVmlEl)}}ib.prototype.brushVML=function(t){var e=this.style;null!=e.text?this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this.getBoundingRect(),!0):this.removeRectText(t)},ib.prototype.onRemove=function(t){this.removeRectText(t)},ib.prototype.onAdd=function(t){this.appendRectText(t)}}pv.prototype={constructor:pv,getType:function(){return"vml"},getViewportRoot:function(){return this._vmlViewport},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(){var t=this.storage.getDisplayList(!0,!0);this._paintList(t)},_paintList:function(t){for(var e=this._vmlRoot,i=0;i<t.length;i++){var n=t[i];n.invisible||n.ignore?(n.__alreadyNotVisible||n.onRemove(e),n.__alreadyNotVisible=!0):(n.__alreadyNotVisible&&n.onAdd(e),n.__alreadyNotVisible=!1,n.__dirty&&(n.beforeBrush&&n.beforeBrush(),(n.brushVML||n.brush).call(n,e),n.afterBrush&&n.afterBrush())),n.__dirty=!1}this._firstPaint&&(this._vmlViewport.appendChild(e),this._firstPaint=!1)},resize:function(t,e){var t=null==t?this._getWidth():t,e=null==e?this._getHeight():e;if(this._width!=t||this._height!=e){this._width=t,this._height=e;var i=this._vmlViewport.style;i.width=t+"px",i.height=e+"px"}},dispose:function(){this.root.innerHTML="",this._vmlRoot=this._vmlViewport=this.storage=null},getWidth:function(){return this._width},getHeight:function(){return this._height},clear:function(){this._vmlViewport&&this.root.removeChild(this._vmlViewport)},_getWidth:function(){var t=this.root,e=t.currentStyle;return(t.clientWidth||fv(e.width))-fv(e.paddingLeft)-fv(e.paddingRight)|0},_getHeight:function(){var t=this.root,e=t.currentStyle;return(t.clientHeight||fv(e.height))-fv(e.paddingTop)-fv(e.paddingBottom)|0}},d(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){pv.prototype[t]=gv(t)}),xi("vml",pv);var Tk="http://www.w3.org/2000/svg",Ak=P_.CMD,Ck=Array.prototype.join,Dk="none",Lk=Math.round,kk=Math.sin,Pk=Math.cos,Ok=Math.PI,zk=2*Math.PI,Nk=180/Ok,Ek=1e-4,Rk={};Rk.brush=function(t){var e=t.style,i=t.__svgEl;i||(i=mv("path"),t.__svgEl=i),t.path||t.createPathProxy();var n=t.path;if(t.__dirtyPath){n.beginPath(),t.buildPath(n,t.shape),t.__dirtyPath=!1;var o=Iv(n);o.indexOf("NaN")<0&&wv(i,"d",o)}Mv(i,e),bv(i,t.transform),null!=e.text&&Wk(t,t.getBoundingRect())};var Vk={};Vk.brush=function(t){var e=t.style,i=e.image;if(i instanceof HTMLImageElement&&(i=i.src),i){var n=e.x||0,o=e.y||0,a=e.width,r=e.height,s=t.__svgEl;s||(s=mv("image"),t.__svgEl=s),i!==t.__imageSrc&&(Sv(s,"href",i),t.__imageSrc=i),wv(s,"width",a),wv(s,"height",r),wv(s,"x",n),wv(s,"y",o),bv(s,t.transform),null!=e.text&&Wk(t,t.getBoundingRect())}};var Bk={},Gk=new jt,Wk=function(t,e,i){var n=t.style;t.__dirty&&De(n);var o=n.text;if(null!=o){o+="";var a=t.__textSvgEl;if(a||(a=mv("text"),t.__textSvgEl=a),Mv(a,n,!0),t instanceof ib||t.style.transformText)bv(a,t.transform);else if(t.transform)Gk.copy(e),Gk.applyTransform(t.transform),e=Gk;else{var r=t.transformCoordToGlobal(e.x,e.y);e.x=r[0],e.y=r[1]}var s,l,h=n.textPosition,u=n.textDistance,c=n.textAlign||"left";"number"==typeof n.fontSize&&(n.fontSize+="px");var d=n.font||[n.fontStyle||"",n.fontWeight||"",n.fontSize||"",n.fontFamily||""].join(" ")||ux,f=Tv(n.textVerticalAlign),p=(i=de(o,d,c,f)).lineHeight;if(h instanceof Array)s=e.x+h[0],l=e.y+h[1];else{var g=ve(h,e,u);s=g.x,l=g.y,f=Tv(g.textVerticalAlign),c=g.textAlign}wv(a,"alignment-baseline",f),d&&(a.style.font=d);var m=n.textPadding;wv(a,"x",s),wv(a,"y",l);var v=o.split("\n"),y=v.length,x=c;"left"===x?(x="start",m&&(s+=m[3])):"right"===x?(x="end",m&&(s-=m[1])):"center"===x&&(x="middle",m&&(s+=(m[3]-m[1])/2));var _=0;if("baseline"===f?(_=-i.height+p,m&&(_-=m[2])):"middle"===f?(_=(-i.height+p)/2,m&&(l+=(m[0]-m[2])/2)):m&&(_+=m[0]),t.__text!==o||t.__textFont!==d){var b=t.__tspanList||[];t.__tspanList=b;for(S=0;S<y;S++)(M=b[S])?M.innerHTML="":(M=b[S]=mv("tspan"),a.appendChild(M),wv(M,"alignment-baseline",f),wv(M,"text-anchor",x)),wv(M,"x",s),wv(M,"y",l+S*p+_),M.appendChild(document.createTextNode(v[S]));for(;S<b.length;S++)a.removeChild(b[S]);b.length=y,t.__text=o,t.__textFont=d}else if(t.__tspanList.length)for(var w=t.__tspanList.length,S=0;S<w;++S){var M=t.__tspanList[S];M&&(wv(M,"x",s),wv(M,"y",l+S*p+_))}}};Bk.drawRectText=Wk,Bk.brush=function(t){var e=t.style;null!=e.text&&(e.textPosition=[0,0],Wk(t,{x:e.x||0,y:e.y||0,width:0,height:0},t.getBoundingRect()))},Av.prototype={diff:function(t,e,i){i||(i=function(t,e){return t===e}),this.equals=i;var n=this;t=t.slice();var o=(e=e.slice()).length,a=t.length,r=1,s=o+a,l=[{newPos:-1,components:[]}],h=this.extractCommon(l[0],e,t,0);if(l[0].newPos+1>=o&&h+1>=a){for(var u=[],c=0;c<e.length;c++)u.push(c);return[{indices:u,count:e.length}]}for(;r<=s;){var d=function(){for(var i=-1*r;i<=r;i+=2){var s,h=l[i-1],u=l[i+1],c=(u?u.newPos:0)-i;h&&(l[i-1]=void 0);var d=h&&h.newPos+1<o,f=u&&0<=c&&c<a;if(d||f){if(!d||f&&h.newPos<u.newPos?(s=Dv(u),n.pushComponent(s.components,void 0,!0)):((s=h).newPos++,n.pushComponent(s.components,!0,void 0)),c=n.extractCommon(s,e,t,i),s.newPos+1>=o&&c+1>=a)return Cv(0,s.components);l[i]=s}else l[i]=void 0}r++}();if(d)return d}},pushComponent:function(t,e,i){var n=t[t.length-1];n&&n.added===e&&n.removed===i?t[t.length-1]={count:n.count+1,added:e,removed:i}:t.push({count:1,added:e,removed:i})},extractCommon:function(t,e,i,n){for(var o=e.length,a=i.length,r=t.newPos,s=r-n,l=0;r+1<o&&s+1<a&&this.equals(e[r+1],i[s+1]);)r++,s++,l++;return l&&t.components.push({count:l}),t.newPos=r,s},tokenize:function(t){return t.slice()},join:function(t){return t.slice()}};var Hk=new Av,Fk=function(t,e,i){return Hk.diff(t,e,i)};Lv.prototype.createElement=mv,Lv.prototype.getDefs=function(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");return 0===i.length?t?((i=e.insertBefore(this.createElement("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n)if(e[n]===t)return!0;return!1}),i):null:i[0]},Lv.prototype.update=function(t,e){if(t){var i=this.getDefs(!1);if(t._dom&&i.contains(t._dom))"function"==typeof e&&e();else{var n=this.add(t);n&&(t._dom=n)}}},Lv.prototype.addDom=function(t){this.getDefs(!0).appendChild(t)},Lv.prototype.removeDom=function(t){this.getDefs(!1).removeChild(t._dom)},Lv.prototype.getDoms=function(){var t=this.getDefs(!1);if(!t)return[];var e=[];return d(this._tagNames,function(i){var n=t.getElementsByTagName(i);e=e.concat([].slice.call(n))}),e},Lv.prototype.markAllUnused=function(){var t=this;d(this.getDoms(),function(e){e[t._markLabel]="0"})},Lv.prototype.markUsed=function(t){t&&(t[this._markLabel]="1")},Lv.prototype.removeUnused=function(){var t=this.getDefs(!1);if(t){var e=this;d(this.getDoms(),function(i){"1"!==i[e._markLabel]&&t.removeChild(i)})}},Lv.prototype.getSvgProxy=function(t){return t instanceof Nn?Rk:t instanceof qe?Vk:t instanceof ib?Bk:Rk},Lv.prototype.getTextSvgElement=function(t){return t.__textSvgEl},Lv.prototype.getSvgElement=function(t){return t.__svgEl},h(kv,Lv),kv.prototype.addWithoutUpdate=function(t,e){if(e&&e.style){var i=this;d(["fill","stroke"],function(n){if(e.style[n]&&("linear"===e.style[n].type||"radial"===e.style[n].type)){var o,a=e.style[n],r=i.getDefs(!0);a._dom?(o=a._dom,r.contains(a._dom)||i.addDom(o)):o=i.add(a),i.markUsed(e);var s=o.getAttribute("id");t.setAttribute(n,"url(#"+s+")")}})}},kv.prototype.add=function(t){var e;if("linear"===t.type)e=this.createElement("linearGradient");else{if("radial"!==t.type)return Wy("Illegal gradient type."),null;e=this.createElement("radialGradient")}return t.id=t.id||this.nextId++,e.setAttribute("id","zr-gradient-"+t.id),this.updateDom(t,e),this.addDom(e),e},kv.prototype.update=function(t){var e=this;Lv.prototype.update.call(this,t,function(){var i=t.type,n=t._dom.tagName;"linear"===i&&"linearGradient"===n||"radial"===i&&"radialGradient"===n?e.updateDom(t,t._dom):(e.removeDom(t),e.add(t))})},kv.prototype.updateDom=function(t,e){if("linear"===t.type)e.setAttribute("x1",t.x),e.setAttribute("y1",t.y),e.setAttribute("x2",t.x2),e.setAttribute("y2",t.y2);else{if("radial"!==t.type)return void Wy("Illegal gradient type.");e.setAttribute("cx",t.x),e.setAttribute("cy",t.y),e.setAttribute("r",t.r)}t.global?e.setAttribute("gradientUnits","userSpaceOnUse"):e.setAttribute("gradientUnits","objectBoundingBox"),e.innerHTML="";for(var i=t.colorStops,n=0,o=i.length;n<o;++n){var a=this.createElement("stop");a.setAttribute("offset",100*i[n].offset+"%"),a.setAttribute("stop-color",i[n].color),e.appendChild(a)}t._dom=e},kv.prototype.markUsed=function(t){if(t.style){var e=t.style.fill;e&&e._dom&&Lv.prototype.markUsed.call(this,e._dom),(e=t.style.stroke)&&e._dom&&Lv.prototype.markUsed.call(this,e._dom)}},h(Pv,Lv),Pv.prototype.update=function(t){var e=this.getSvgElement(t);e&&this.updateDom(e,t.__clipPaths,!1);var i=this.getTextSvgElement(t);i&&this.updateDom(i,t.__clipPaths,!0),this.markUsed(t)},Pv.prototype.updateDom=function(t,e,i){if(e&&e.length>0){var n,o,a=this.getDefs(!0),r=e[0],s=i?"_textDom":"_dom";r[s]?(o=r[s].getAttribute("id"),n=r[s],a.contains(n)||a.appendChild(n)):(o="zr-clip-"+this.nextId,++this.nextId,(n=this.createElement("clipPath")).setAttribute("id",o),a.appendChild(n),r[s]=n);var l=this.getSvgProxy(r);if(r.transform&&r.parent.invTransform&&!i){var h=Array.prototype.slice.call(r.transform);st(r.transform,r.parent.invTransform,r.transform),l.brush(r),r.transform=h}else l.brush(r);var u=this.getSvgElement(r);n.appendChild(u.cloneNode()),t.setAttribute("clip-path","url(#"+o+")"),e.length>1&&this.updateDom(n,e.slice(1),i)}else t&&t.setAttribute("clip-path","none")},Pv.prototype.markUsed=function(t){var e=this;t.__clipPaths&&t.__clipPaths.length>0&&d(t.__clipPaths,function(t){t._dom&&Lv.prototype.markUsed.call(e,t._dom),t._textDom&&Lv.prototype.markUsed.call(e,t._textDom)})};var Zk=function(t,e,i){this.root=t,this.storage=e,this._opts=i=a({},i||{});var n=mv("svg");n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("version","1.1"),n.setAttribute("baseProfile","full"),n.style["user-select"]="none",n.style.cssText="position:absolute;left:0;top:0;",this.gradientManager=new kv(n),this.clipPathManager=new Pv(n);var o=document.createElement("div");o.style.cssText="overflow:hidden;position:relative",this._svgRoot=n,this._viewport=o,t.appendChild(o),o.appendChild(n),this.resize(i.width,i.height),this._visibleList=[]};Zk.prototype={constructor:Zk,getType:function(){return"svg"},getViewportRoot:function(){return this._viewport},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(){var t=this.storage.getDisplayList(!0);this._paintList(t)},_paintList:function(t){this.gradientManager.markAllUnused(),this.clipPathManager.markAllUnused();var e,i=this._svgRoot,n=this._visibleList,o=t.length,a=[];for(e=0;e<o;e++){var r=zv(f=t[e]);f.invisible||(f.__dirty&&(r&&r.brush(f),this.clipPathManager.update(f),f.style&&(this.gradientManager.update(f.style.fill),this.gradientManager.update(f.style.stroke)),f.__dirty=!1),a.push(f))}var s,l=Fk(n,a);for(e=0;e<l.length;e++)if((c=l[e]).removed)for(d=0;d<c.count;d++){var h=Gv(f=n[c.indices[d]]),u=Bv(f);Vv(i,h),Vv(i,u)}for(e=0;e<l.length;e++){var c=l[e];if(c.added)for(d=0;d<c.count;d++){var h=Gv(f=a[c.indices[d]]),u=Bv(f);s?Ev(i,h,s):Rv(i,h),h?Ev(i,u,h):s?Ev(i,u,s):Rv(i,u),Ev(i,u,h),s=u||h||s,this.gradientManager.addWithoutUpdate(h,f),this.clipPathManager.markUsed(f)}else if(!c.removed)for(var d=0;d<c.count;d++){var f=a[c.indices[d]];s=h=Bv(f)||Gv(f)||s,this.gradientManager.markUsed(f),this.gradientManager.addWithoutUpdate(h,f),this.clipPathManager.markUsed(f)}}this.gradientManager.removeUnused(),this.clipPathManager.removeUnused(),this._visibleList=a},_getDefs:function(t){var e=this._svgRoot,i=this._svgRoot.getElementsByTagName("defs");return 0===i.length?t?((i=e.insertBefore(mv("defs"),e.firstChild)).contains||(i.contains=function(t){var e=i.children;if(!e)return!1;for(var n=e.length-1;n>=0;--n)if(e[n]===t)return!0;return!1}),i):null:i[0]},resize:function(t,e){var i=this._viewport;i.style.display="none";var n=this._opts;if(null!=t&&(n.width=t),null!=e&&(n.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!==t&&this._height!==e){this._width=t,this._height=e;var o=i.style;o.width=t+"px",o.height=e+"px";var a=this._svgRoot;a.setAttribute("width",t),a.setAttribute("height",e)}},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],n=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var r=this.root,s=document.defaultView.getComputedStyle(r);return(r[n]||Ov(s[i])||Ov(r.style[i]))-(Ov(s[o])||0)-(Ov(s[a])||0)|0},dispose:function(){this.root.innerHTML="",this._svgRoot=this._viewport=this.storage=null},clear:function(){this._viewport&&this.root.removeChild(this._viewport)},pathToSvg:function(){this.refresh();var t=this._svgRoot.outerHTML;return"data:img/svg+xml;utf-8,"+unescape(t)}},d(["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],function(t){Zk.prototype[t]=Wv(t)}),xi("svg",Zk),t.version="3.8.5",t.dependencies=Cw,t.PRIORITY=Pw,t.init=function(t,e,i){var n=Qa(t);if(n)return n;var o=new za(t,e,i);return o.id="ec_"+Yw++,jw[o.id]=o,t.setAttribute?t.setAttribute(Kw,o.id):t[Kw]=o.id,Ka(o),o},t.connect=function(t){if(y(t)){var e=t;t=null,d(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+$w++,d(e,function(e){e.group=t})}return qw[t]=!0,t},t.disConnect=Ja,t.disconnect=Qw,t.dispose=function(t){"string"==typeof t?t=jw[t]:t instanceof za||(t=Qa(t)),t instanceof za&&!t.isDisposed()&&t.dispose()},t.getInstanceByDom=Qa,t.getInstanceById=function(t){return jw[t]},t.registerTheme=function(t,e){Uw[t]=e},t.registerPreprocessor=tr,t.registerProcessor=er,t.registerPostUpdate=function(t){Fw.push(t)},t.registerAction=ir,t.registerCoordinateSystem=nr,t.getCoordinateSystemDimensions=function(t){var e=ua.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},t.registerLayout=or,t.registerVisual=ar,t.registerLoading=rr,t.extendComponentModel=sr,t.extendComponentView=lr,t.extendSeriesModel=hr,t.extendChartView=ur,t.setCanvasCreator=function(t){e("createCanvas",t)},t.registerMap=function(t,e,i){e.geoJson&&!e.features&&(i=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),Jw[t]={geoJson:e,specialAreas:i}},t.getMap=cr,t.dataTool=tS,t.zrender=Nx,t.graphic=Tb,t.number=Bx,t.format=Xx,t.throttle=Da,t.helper=HS,t.matrix=yy,t.vector=cy,t.color=Ny,t.util=qS,t.List=aS,t.Model=Lo,t.Axis=US,t.env=Uv,t.parseGeoJson=jS});

/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);


//# sourceMappingURL=scripts.bundle.js.map