(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var c=s(26),a=(s(36),s(37),s(8)),n=s(3),r=(s(38),s(9)),l=s.n(r),i=s(1),o=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},j=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:o,to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:o,to:"/people",children:"People"})]})})})},d=s(4),b=s(6),u=s(5),h=s(15),x=s(0),O="https://mate-academy.github.io/react_people-table/api/people.json";function p(e){return new Promise((function(t){return setTimeout(t,e)}))}function m(){return f.apply(this,arguments)}function f(){return(f=Object(b.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p(500).then((function(){return fetch(O)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=s.n(x).a.createContext({}),N=function(e){return e.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))},g=function(e){var t=e.children,s=Object(x.useState)([]),c=Object(u.a)(s,2),a=c[0],n=c[1],r=Object(x.useState)(!1),l=Object(u.a)(r,2),o=l[0],j=l[1],h=Object(x.useState)(!1),O=Object(u.a)(h,2),p=O[0],f=O[1];return Object(x.useEffect)((function(){j(!0);setTimeout(Object(b.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:t=e.sent,n(N(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f(!0);case 10:return e.prev=10,j(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])}))),1e3)}),[]),Object(i.jsx)(v.Provider,{value:{people:a,setPeople:n,isLoading:o,isError:p},children:t})};var w=function(){return Object(i.jsx)(g,{children:Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(j,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(n.b,{})})})]})})},y=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{className:"title",children:"Home Page"})})},S=s(10);function k(e,t){var s=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(u.a)(e,2),c=t[0],a=t[1];null===a?s.delete(c):Array.isArray(a)?(s.delete(c),a.forEach((function(e){s.append(c,e)}))):s.set(c,a)})),s.toString()}var A=s(27),L=["children","params"],P=function(e){var t=e.children,s=e.params,c=Object(A.a)(e,L),n=Object(a.d)(),r=Object(u.a)(n,1)[0];return Object(i.jsx)(a.b,Object(h.a)(Object(h.a)({to:{search:k(r,s)}},c),{},{children:t}))},C=["16","17","18","19","20"],F=function(){var e,t=Object(a.d)(),s=Object(u.a)(t,2),c=s[0],n=s[1],r=(null===(e=c.get("query"))||void 0===e?void 0:e.trim())||"",o=c.getAll("centuries")||[];return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(P,{className:l()({"is-active":""===c.get("sex")}),params:{sex:""},children:"All"}),Object(i.jsx)(P,{className:l()({"is-active":"m"===c.get("sex")}),params:{sex:"m"},children:"Male"}),Object(i.jsx)(P,{className:l()({"is-active":"f"===c.get("sex")}),params:{sex:"f"},children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:r,onChange:function(e){n(k(c,{query:e.target.value||null}))}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:C.map((function(e){var t=o.includes(e)?o.filter((function(t){return t!==e})):[].concat(Object(S.a)(o),[e]);return Object(i.jsx)(P,{"data-cy":"century",className:l()("button","mr-1",{"is-info":o.includes(e)}),params:{centuries:t},children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(P,{"data-cy":"centuryALL",className:l()("button","is-success",{"is-outlined":o.length}),params:{centuries:[]},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(P,{className:"button is-link is-outlined is-fullwidth",params:{sex:null,centuries:[],query:null},children:"Reset all filters"})})]})},B=(s(40),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),E=function(e){var t=e.person,s=Object(a.d)(),c=Object(u.a)(s,1)[0];return Object(i.jsx)(a.b,{to:{pathname:"".concat(t.slug),search:c.toString()},className:l()({"has-text-danger":"f"===t.sex,"has-text-link":"m"===t.sex}),children:t.name})},D=function(e){var t=e.person,s=e.selectedPerson,c=t.slug,a=t.sex,n=t.born,r=t.died,o=t.mother,j=t.motherName,d=t.father,b=t.fatherName;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":s===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(E,{person:t})}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:o?Object(i.jsx)(E,{person:o}):j||"-"}),Object(i.jsx)("td",{children:d?Object(i.jsx)(E,{person:d}):b||"-"})]})},T=function(e){return e.Alphabet="name",e.Sex="sex",e.Born="born",e.Died="died",e}(T||{});var R=function(e){var t=e.people,s=Object(n.r)().personId,c=void 0===s?"":s,r=Object(a.d)(),o=Object(u.a)(r,1)[0],j=o.get("sort")||"",d=o.get("order")||"";function b(e){return j!==e?{sort:e,order:null}:d?{sort:null,order:null}:{sort:e,order:"desk"}}var h=function(e,t){var s=t.sortType,c=t.isReversed,a=Object(S.a)(e);return s&&a.sort((function(e,t){switch(s){case T.Alphabet:return e.name.localeCompare(t.name);case T.Sex:return e.sex.localeCompare(t.sex);case T.Born:return e.born-t.born;case T.Died:return e.died-t.died;default:return 0}})),c?a.reverse():a}(t,{sortType:j,isReversed:d});return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(i.jsx)(P,{params:b(T.Alphabet),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":j===T.Alphabet&&!d,"fa-sort-down":j===T.Alphabet&&d})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(i.jsx)(P,{params:b(T.Sex),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":j===T.Sex&&!d,"fa-sort-down":j===T.Sex&&d})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(i.jsx)(P,{params:b(T.Born),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":j===T.Born&&!d,"fa-sort-down":j===T.Born&&d})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(i.jsx)(P,{params:b(T.Died),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":j===T.Died&&!d,"fa-sort-down":j===T.Died&&d})})})})]})}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:h.map((function(e){return Object(i.jsx)(D,{person:e,selectedPerson:c},e.slug)}))})]})},_=function(){var e=Object(x.useContext)(v),t=e.people,s=e.isLoading,c=e.isError,n=Object(a.d)(),r=function(e,t){var s=e.get("query")||null,c=e.getAll("centuries")||null,a=e.get("sex")||null,n=null===s||void 0===s?void 0:s.toLowerCase(),r=t;return n&&(r=r.filter((function(e){var t,s;return e.name.toLowerCase().includes(n)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(n))||(null===(s=e.fatherName)||void 0===s?void 0:s.toLowerCase().includes(n))}))),c.length&&(r=r.filter((function(e){return c.includes(Math.ceil(e.born/100).toString())}))),a&&(r=r.filter((function(e){return e.sex===a}))),r}(Object(u.a)(n,1)[0],t);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!c&&!s&&Object(i.jsx)(F,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[s&&Object(i.jsx)(B,{}),c&&!s&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!(null!==r&&void 0!==r&&r.length)&&!s&&!c&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!(null===r||void 0===r||!r.length)&&!c&&Object(i.jsx)(R,{people:r})]})})]})})]})},q=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},M=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(n.e,{children:Object(i.jsxs)(n.c,{path:"/",element:Object(i.jsx)(w,{}),children:[Object(i.jsx)(n.c,{path:"*",element:Object(i.jsx)(q,{})}),Object(i.jsx)(n.c,{index:!0,element:Object(i.jsx)(y,{})}),Object(i.jsx)(n.c,{path:"home",element:Object(i.jsx)(n.a,{to:"/",replace:!0})}),Object(i.jsx)(n.c,{path:"people",element:Object(i.jsx)(_,{}),children:Object(i.jsx)(n.c,{path:":personId?"})})]})})})};Object(c.createRoot)(document.getElementById("root")).render(Object(i.jsx)(M,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ce103ecd.chunk.js.map