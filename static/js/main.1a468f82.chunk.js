(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),s=n(1),d=(n(10),n(11),n(12),n(4)),b=n.n(d),o=n(0),l=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,i=e.find((function(t){return n===t.id}))||e[0];return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)("li",{className:b()({"is-active":i.id===t.id}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==i.id&&c(t)}(t)},children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:i.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t,e=Object(s.useState)("tab-1"),n=Object(a.a)(e,2),c=n[0],i=n[1],d=" ".concat(null===(t=r.find((function(t){return c===t.id})))||void 0===t?void 0:t.title);return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsxs)("h1",{className:"title",children:["Selected tab is",d]}),Object(o.jsx)(l,{tabs:r,selectedTabId:c,onTabSelected:function(t){i(t.id)}})]})};i.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1a468f82.chunk.js.map