(this["webpackJsonpsc-test"]=this["webpackJsonpsc-test"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),r=n(4),u=n.n(r),i=n(2),o=(n(10),function(t){for(var e=[],n=t.currentSlide;n<t.count+t.currentSlide;n++)e.push(t.slides[n]);return Object(c.jsx)("div",{className:"slides",children:e.map((function(t){return Object(c.jsx)("section",{className:"slide",children:t},t)}))})}),a=(n(11),function(t){return Object(c.jsxs)("div",{className:"arrows",children:[Object(c.jsx)("span",{className:"arrow-prev",onClick:function(){t.setCurrentSlide(t.currentSlide-1)},children:"prev"}),Object(c.jsx)("span",{className:"arrow-next",onClick:function(){t.setCurrentSlide(t.currentSlide+1)},children:"next"})]})}),l=(n(12),function(t){return Object(c.jsx)("div",{className:"jump-to",children:Object(c.jsx)("input",{type:"number",placeholder:"Go to slide",onChange:function(e){return function(e){t.handleJump(e)}(e.target.value)}})})}),j=(n(13),function(t){return Object(c.jsxs)("div",{className:"plus-minus",children:[Object(c.jsx)("button",{className:"decrease",onClick:function(){t.setCount(t.count-1)},children:"-"}),Object(c.jsx)("button",{className:"increase",onClick:function(){t.setCount(t.count+1)},children:"+"})]})}),d=(n(14),function(){var t=Object(s.useState)(Array.from({length:8},(function(t,e){return"Slide "+(e+1)}))),e=Object(i.a)(t,1)[0],n=Object(s.useState)(1),r=Object(i.a)(n,2),u=r[0],d=r[1],h=Object(s.useState)(0),b=Object(i.a)(h,2),f=b[0],x=b[1],O=Object(s.useState)({x:50,touchStartLocation:{x:null}}),m=Object(i.a)(O,2),p=m[0],S=m[1],v=function(t){t<=e.length&&t>0&&(f+u<e.length||t<u)&&d(t)},g=function(t){t<=e.length-1&&t>=0&&t+u<e.length+1&&x(t),0===f&&t===f-1&&(d(1),x(e.length-1)),f+u===e.length&&t===f+1&&(d(1),x(0))};return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"carousel",onTouchStart:function(t){var e={x:t.touches[0].clientX};S({x:50,touchStartLocation:e})},onTouchEnd:function(t){var e=t.changedTouches[0].clientX,n={x:p.touchStartLocation.x-e};console.log(n);p.x;n.x>200&&g(f+1),n.x<-200&&g(f-1)},children:[Object(c.jsx)(o,{currentSlide:f,count:u,slides:e}),Object(c.jsx)(a,{currentSlide:f,setCurrentSlide:function(t){return g(t)}})]}),Object(c.jsx)(j,{count:u,setCount:function(t){return v(t)}}),Object(c.jsx)(l,{slides:e,handleJump:function(t){return function(t){var n=parseInt(t);n>=1&&n<=e.length&&(d(1),x(n-1))}(t)}})]})});u.a.render(Object(c.jsx)(d,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.15e0b09b.chunk.js.map