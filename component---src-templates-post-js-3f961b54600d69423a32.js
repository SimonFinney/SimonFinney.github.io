(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(65),l=a(68),o=a(62),c=a(69),s=a(12),d=a.n(s);const m=e=>{let t=e.data,a=e.modifier;return i.a.createElement("section",{className:"footer__section--".concat(a)},i.a.createElement(d.a,{to:t.fields.slug},t.frontmatter.title))};var u=e=>{let t=e.data;return i.a.createElement("footer",null,t.previous&&i.a.createElement(m,{data:t.previous,modifier:"previous"}),t.next&&i.a.createElement(m,{data:t.next,modifier:"next"}))};a.d(t,"postQuery",function(){return f});t.default=(e=>{let t=e.data,a=e.pageContext;return i.a.createElement(r.a,null,i.a.createElement("header",null,i.a.createElement(o.a,{level:"1",content:t.markdownRemark.frontmatter.title}),i.a.createElement(c.a,{dateTime:t.markdownRemark.frontmatter.date})),i.a.createElement(l.a,{html:t.markdownRemark.html}),i.a.createElement(u,{data:a}))});const f="3606344188"},61:function(e,t,a){e.exports=(e=>e&&e.default||e)(a(64))},62:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=(e=>{let t=e.content,a=e.level;const n="h".concat(a);return i.a.createElement(n,null,t)})},63:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/2016/high-fidelity-solution/"},frontmatter:{title:"High-fidelity solution",date:"17 April, 2016",description:null},id:"77f6eb63-b9dd-5574-93f5-9c6a5390def4"}},{node:{fields:{slug:"/2016/universal-inclusive-design-accessibility/"},frontmatter:{title:"Universal (inclusive) design and accessibility",date:"10 April, 2016",description:null},id:"b496175e-3d3f-5a6f-8a38-23193cd7d494"}},{node:{fields:{slug:"/2016/cognitive-social-psychology/"},frontmatter:{title:"Cognitive and social psychology",date:"3 April, 2016",description:"Blog post outlining influential and motivating cognitive and social psychological principles applied to user experience design"},id:"c4b80322-29d7-579f-8d10-15d8cdb5629a"}},{node:{fields:{slug:"/2016/information-architecture-content-strategy/"},frontmatter:{title:"Information Architecture and Content Strategy",date:"27 March, 2016",description:null},id:"57251a61-2a59-55db-8714-5fd47e4b0508"}},{node:{fields:{slug:"/2016/gaining-empathy/"},frontmatter:{title:"Gaining Empathy",date:"20 March, 2016",description:null},id:"6a7d482c-0644-5165-8fbe-360f1366fc1e"}},{node:{fields:{slug:"/2016/design-languages-pattern-libraries/"},frontmatter:{title:"Design Languages and Pattern Libraries",date:"13 March, 2016",description:null},id:"a88543a1-6925-58c4-80cc-81644e427b90"}},{node:{fields:{slug:"/2016/introduction/"},frontmatter:{title:"Introduction",date:"6 March, 2016",description:null},id:"6bcdb19a-fdfe-554d-981e-1a6441f85704"}}]},site:{siteMetadata:{subtitle:"Front End Specialist",title:"Simon Finney",contact:[{text:"simonjfinney@gmail.com",href:"mailto:simonjfinney@gmail.com",icon:"email"},{text:"GitHub",href:"http://github.com/simonfinney",icon:"github"},{text:"CodePen",href:"http://codepen.io/simonfinney",icon:"codepen"},{text:"LinkedIn",href:"https://www.linkedin.com/in/simonfinney",icon:"linkedin"},{text:"Medium",href:"http://medium.com/@simonfinney",icon:"medium"},{text:"Instagram",href:"https://www.instagram.com/simonfinney",icon:"instagram"}]}}}}},64:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(0),l=a.n(r),o=a(3),c=a.n(o),s=a(19),d=a(2);const m=e=>{let t=e.location;const a=d.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(s.a,i()({location:t,pageResources:a},a.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},65:function(e,t,a){"use strict";var n=a(63),i=a(0),r=a.n(i),l=a(3),o=a.n(l),c=a(12),s=a.n(c);a(61);const d=r.a.createContext({}),m=e=>r.a.createElement(d.Consumer,null,t=>e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)"));m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var u=a(66),f=a.n(u);var p=e=>{let t=e.title,a=e.subtitle;return r.a.createElement("header",{className:"header",role:"banner"},r.a.createElement(s.a,{className:"header__title",to:"/"},t),r.a.createElement("span",{className:"header__subtitle"},a),r.a.createElement("nav",{role:"navigation"},r.a.createElement("ul",{className:"header__ul"},r.a.createElement("li",{className:"header__li"},r.a.createElement(s.a,{activeClassName:"header__a--active",className:"header__a",to:"/posts"},"Posts")))))},g=a(62),h=e=>{let t=e.title,a=e.listItems;return r.a.createElement("section",null,r.a.createElement(g.a,{level:"3",content:t}),r.a.createElement("ol",{className:"aside__list"},a))};a(67);const E=e=>{let t=e.children;return r.a.createElement(m,{query:"89111574",render:e=>{const a=e.allMarkdownRemark,n=e.site.siteMetadata,l=n.contact,o=n.subtitle,c=n.title,d=a.edges.map(e=>{let t=e.node;const a=t.fields,n=t.frontmatter,i=t.id,l=n.date,o=n.title;return r.a.createElement("li",{key:i},r.a.createElement(s.a,{to:a.slug,title:l},o))}),m=l.map(e=>{let t=e.href,a=e.icon,n=e.text;return r.a.createElement("li",{key:a},r.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank","data-icon":a},n))});return r.a.createElement(i.Fragment,null,r.a.createElement(f.a,{title:c},r.a.createElement("html",{dir:"ltr",lang:"en"}),r.a.createElement("meta",{name:"description",content:""})),r.a.createElement(p,{subtitle:o,title:c}),r.a.createElement("main",{role:"main"},t),r.a.createElement("aside",null,r.a.createElement(h,{title:"Posts",listItems:d}),r.a.createElement(h,{title:"Contact",listItems:m})))},data:n})};E.propTypes={children:o.a.node.isRequired};t.a=E},68:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=(e=>{let t=e.html;return i.a.createElement("article",{dangerouslySetInnerHTML:{__html:t}})})},69:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(3);const l=e=>{let t=e.dateTime,a=e.label;return i.a.createElement("time",{dateTime:t},a)};l.propTypes={dateTime:r.string.isRequired,label:r.string.isRequired},t.a=l}}]);
//# sourceMappingURL=component---src-templates-post-js-3f961b54600d69423a32.js.map