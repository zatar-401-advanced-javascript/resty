(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),o=n(8),a=n.n(o),i=(n(19),n(4)),u=n.n(i),d=n(9),l=n(10),j=n(11),h=n(13),b=n(12),O=(n(21),n(22),function(){return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"RESTy"})})}),x=(n(23),function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("h3",{children:"\xa9 Resty 2020"})})}),f=(n(24),n(25));var m=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{onSubmit:function(t){["GET","POST","PUT","DELETE"].forEach((function(e){var t=document.getElementById("".concat(e));t.style.color="#05386B",t.style.fontWeight="normal"}));var n=t.target.elements,c=n.url,s=n.method,r=document.getElementById("".concat(s.value));return r.style.color="red",r.style.fontWeight="bold",t.preventDefault(),f[s.value.toLowerCase()](c.value).then((function(t){return e.handler(t)}))},children:[Object(c.jsxs)("section",{id:"url",children:[Object(c.jsx)("label",{children:"URL: "}),Object(c.jsx)("input",{placeholder:"http://test.com","data-testid":"url",name:"url",type:"url",required:!0})]}),Object(c.jsxs)("section",{id:"method",children:[Object(c.jsxs)("label",{id:"GET",children:["GET ",Object(c.jsx)("input",{defaultChecked:!0,type:"radio",name:"method",value:"GET"})]}),Object(c.jsxs)("label",{id:"POST",children:["POST ",Object(c.jsx)("input",{type:"radio",name:"method",value:"POST"})]}),Object(c.jsxs)("label",{id:"PUT",children:["PUT ",Object(c.jsx)("input",{type:"radio",name:"method",value:"PUT"})]}),Object(c.jsxs)("label",{id:"DELETE",children:["DELETE ",Object(c.jsx)("input",{type:"radio",name:"method",value:"DELETE"})]})]}),Object(c.jsx)("button",{"data-testid":"button",children:"GO!"})]})})},p=(n(35),n(5)),y=n.n(p);var E=function(e){return e.count>0||"string"==typeof e.count?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("section",{"data-testid":"count",id:"count",children:Object(c.jsxs)("p",{children:["Count: ",e.count]})}),Object(c.jsxs)("section",{id:"result",children:[Object(c.jsx)(y.a,{name:"Headers",src:e.headers}),Object(c.jsx)(y.a,{name:"Response",src:e.results})]})]}):Object(c.jsx)("section",{id:"result"})},v=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).update=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.setState({Headers:t.headers,Results:t.body,Count:t.body.length?t.body.length:t.body.count?t.body.count:1});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.state={Count:0,Results:[],Headers:{}},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(m,{handler:this.update}),Object(c.jsx)(E,{headers:this.state.Headers,count:this.state.Count,results:this.state.Results})]}),Object(c.jsx)(x,{})]})}}]),n}(r.a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.d6662eae.chunk.js.map