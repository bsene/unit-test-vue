import{g as i,e as u,s as p,d as n,r as o,w as c}from"./vue.b7b8d0ed.js";import{n as a}from"./index.de3c99a0.js";/*!
  * vue-router v3.6.4
  * (c) 2022 Evan You
  * @license MIT
  */function v(){var t=i().proxy.$root;if(!t._$route){var e=u(!0).run(function(){return p(Object.assign({},t.$router.currentRoute))});t._$route=e,t.$router.afterEach(function(r){Object.assign(e,r)})}return t._$route}const m={version:"0.8.2",date:"2022-09-07T09:29:24.811Z"},h=n({props:{msg:{type:String,required:!0}},setup(t,e){return{meta:o(m)}}});var g=function(){var e=this,r=e._self._c;return e._self._setupProxy,r("div",{staticClass:"hello"},[r("section",[r("h1",{domProps:{textContent:e._s(e.msg)}}),r("p",[e._v(" Build: "),r("time",{attrs:{datetime:e.meta.date},domProps:{textContent:e._s(new Date(e.meta.date).toLocaleString())}})]),e._m(0),e._m(1)]),e._m(2),e._m(3),e._m(4)])},f=[function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v(" For a guide and recipes on how to configure / customize this project, "),e("br"),t._v(" check out the "),e("a",{attrs:{href:"https://github.com/vitejs/vite-plugin-vue2#readme",target:"_blank",rel:"noopener"}},[t._v(" vite-plugin-vue2 ")]),t._v(" . ")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v(" Edit "),e("code",[t._v("components/HelloWorld.vue")]),t._v(" to test HMR ")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("section",[e("h3",[t._v("Installed Vite Plugins")]),e("ul",[e("li",[e("a",{attrs:{href:"https://vitejs.dev/guide/features.html#typescript",target:"_blank",rel:"noopener"}},[t._v(" typescript ")])]),e("li",[e("a",{attrs:{href:"https://github.com/fi3ework/vite-plugin-checker",target:"_blank",rel:"noopener"}},[t._v(" vite-plugin-checker ")])]),e("li",[e("a",{attrs:{href:"https://github.com/btd/rollup-plugin-visualizer",target:"_blank",rel:"noopener"}},[t._v(" rollup-plugin-visualizer ")])])])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("section",[e("h3",[t._v("Essential Links")]),e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v(" Core Docs ")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v(" Forum ")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v(" Community Chat ")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v(" Twitter ")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v(" News ")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v(" awesome-vue ")])])])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("section",[e("h3",[t._v("Ecosystem")]),e("ul",[e("li",[e("a",{attrs:{href:"https://v3.router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v(" vue-router ")])]),e("li",[e("a",{attrs:{href:"https://v3.vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v(" vuex ")])]),e("li",[e("a",{attrs:{href:"https://github.com/logue/vue2-helpers",target:"_blank",rel:"noopener"}},[t._v(" @logue/vue2-helpers ")])]),e("li",[e("a",{attrs:{href:"https://devtools.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v(" vue-devtools ")])]),e("li",[e("a",{attrs:{href:"https://github.com/Mechazawa/vue2-teleport",target:"_blank",rel:"noopener"}},[t._v(" vue2-teleport ")])]),e("li",[e("a",{attrs:{href:"https://class-component.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v(" vue-class-component ")])]),e("li",[e("a",{attrs:{href:"https://github.com/kaorun343/vue-property-decorator",target:"_blank",rel:"noopener"}},[t._v(" vue-property-decorator ")])])])])}],d=a(h,g,f,!1,null,"10014008",null,null);const b=d.exports,s=""+new URL("vue.429ac188.svg",import.meta.url).href,y=""+new URL("vite.98cd1474.svg",import.meta.url).href,k=n({components:{HelloWorld:b},props:{prop:{type:String,default:"prop"}},setup(t,e){const r=v(),l=o(),_=o(JSON.stringify({"@schema":"https://json.schemastore.org/jsonld.json","@context":"http://schema.org","@type":"WebSite",name:"Vite Vue2 TypeScript Startar",url:"https://github.com/logue/vite-vue2-ts-starter",logo:s,description:"Vite Vue2 TypeScript Demo Page"},null,2));return c(()=>r?.name,P=>{}),{data:l,vueLogo:s,viteLogo:y,jsonLd:_}}});var j=function(){var e=this,r=e._self._c;return e._self._setupProxy,r("div",{staticClass:"home"},[r("a",{attrs:{href:"https://vitejs.dev",target:"_blank"}},[r("img",{staticClass:"logo",attrs:{src:e.viteLogo,alt:"Vite logo"}})]),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[r("img",{staticClass:"logo vue",attrs:{src:e.vueLogo,alt:"Vue logo"}})]),r("hello-world",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}}),r("teleport",{attrs:{to:"head"}},[r("meta",{attrs:{name:"keyword",content:"template, typescript, vue2, vue-property-decorator, vue-class-component, vite, vite-template, composition-api, volar"}}),r("meta",{attrs:{name:"description",content:"Vite Vue2 TypeScript Demo"}}),r("script",{tag:"component",attrs:{type:"application/ld+json"}},[e._v(" "+e._s(e.jsonLd)+" ")])],1)],1)},x=[],w=a(k,j,x,!1,null,"f28c49e1",null,null);const S=w.exports;export{S as default};