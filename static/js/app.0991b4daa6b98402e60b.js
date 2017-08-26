webpackJsonp([1],Array(21).concat([function(t,e,n){"use strict";n.d(e,"b",function(){return u});var o=n(2),i=n(52),a=n(53),c=n(57),r=n(61),s=n(65);o.default.use(i.a);var u=[{path:"/",name:"FirebaseApp",component:s.a,label:"Firebase App"},{path:"/contact-list",name:"ContactList",component:r.a,label:"Contact List App"},{path:"/todo-app",name:"TodoApp",component:a.a,label:"TODO App"},{path:"/counter",name:"Counter",component:c.a,label:"Counter App"},{path:"/**",redirect:"/"}],d=new i.a({routes:u});e.a=d},,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(n(34),n(2)),i=n(46),a=n(21),c=n(71);o.default.config.productionTip=!1,o.default.material.registerTheme("default",{primary:"blue",accent:"red",warn:"red",background:"grey"}),new o.default({store:c.a,router:a.a,el:"#app",template:"<App/>",components:{App:i.a}})},function(t,e,n){"use strict";var o=(n(35),n(38));n.n(o),n(42)},function(t,e,n){"use strict";var o=n(36);n.n(o)},function(t,e){},,function(t,e,n){window.$=window.jQuery=n(4),n(39)},,,,function(t,e,n){"use strict";var o=n(43),i=(n.n(o),n(2)),a=n(45),c=n.n(a);i.default.use(c.a)},function(t,e){},,,function(t,e,n){"use strict";function o(t){n(47)}var i=n(48),a=n(70),c=n(1),r=o,s=c(i.a,a.a,r,"data-v-ed737be8",null);e.a=s.exports},function(t,e){},function(t,e,n){"use strict";var o=n(49);e.a={name:"app",components:{Links:o.a}}},function(t,e,n){"use strict";function o(t){n(50)}var i=n(51),a=n(69),c=n(1),r=o,s=c(i.a,a.a,r,null,null);e.a=s.exports},function(t,e){},function(t,e,n){"use strict";var o=n(21);e.a={name:"links",data:function(){return{routes:o.b,buttonClasses:["","md-primary","md-accent","md-warn","md-dense"]}},methods:{randomClass:function(){return this.buttonClasses[Math.floor(Math.random()*this.boardClasses.length)]}}}},,function(t,e,n){"use strict";function o(t){n(54)}var i=n(55),a=n(56),c=n(1),r=o,s=c(i.a,a.a,r,null,null);e.a=s.exports},function(t,e){},function(t,e,n){"use strict";var o=n(5);e.a={name:"todo-app",computed:{newTodoTitle:{get:function(){return this.$store.state.newTodoTitle},set:function(t){this.setNewTodoTitleAction(t)}}},methods:Object(o.b)(["addNewTodoTitleAction","removeTodoAction","toggleTodoAction","setNewTodoTitleAction"])}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("TODO App")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoTitle,expression:"newTodoTitle"}],domProps:{value:t.newTodoTitle},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addNewTodoTitleAction(e)},input:function(e){e.target.composing||(t.newTodoTitle=e.target.value)}}}),t._v(" "),t._l(t.$store.state.todoList,function(e){return n("div",[n("label",{attrs:{type:"text"},on:{click:function(n){t.removeTodoAction(e)}}},[t._v(" x ")]),t._v(" "),n("span",{class:{complete:e.done}},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.done},on:{change:function(n){t.toggleTodoAction(e)}}}),t._v("\n      "+t._s(e.title)+"\n    ")])])})],2)},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";function o(t){n(58)}var i=n(59),a=n(60),c=n(1),r=o,s=c(i.a,a.a,r,"data-v-3397c6a8",null);e.a=s.exports},function(t,e){},function(t,e,n){"use strict";var o=n(5);e.a={name:"counter",computed:Object(o.c)(["counter"]),methods:Object(o.b)(["decrementCounterAction","incrementCounterAction"])}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Counter App")]),t._v(" "),n("p",[t._v(t._s(t.counter))]),t._v(" "),n("button",{on:{click:t.decrementCounterAction}},[t._v(" - ")]),t._v(" "),n("button",{on:{click:t.incrementCounterAction}},[t._v(" + ")])])},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";function o(t){n(62)}var i=n(63),a=n(64),c=n(1),r=o,s=c(i.a,a.a,r,"data-v-556f82ec",null);e.a=s.exports},function(t,e){},function(t,e,n){"use strict";var o=n(5);e.a={name:"contact-list",computed:{newName:{get:function(){return this.$store.state.newName},set:function(t){this.setNewNameAction(t)}},newPhone:{get:function(){return this.$store.state.newPhone},set:function(t){this.setNewPhoneAction(t)}}},methods:Object(o.b)(["addNewContactAction","setNewNameAction","setNewPhoneAction"]),mounted:function(){$("select").material_select()}}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Contact List")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("span",{staticClass:"input-field col s5"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],domProps:{value:t.newName},on:{input:function(e){e.target.composing||(t.newName=e.target.value)}}})]),t._v(" "),n("span",{staticClass:"input-field col s5"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newPhone,expression:"newPhone"}],domProps:{value:t.newPhone},on:{input:function(e){e.target.composing||(t.newPhone=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"input-field col s2",on:{click:t.addNewContactAction}},[t._v(" + ")])]),t._v(" "),n("div",{staticClass:"grid"},t._l(t.$store.state.contactList,function(e){return n("div",{staticClass:"row"},[n("span",{staticClass:"item"},[t._v(t._s(e.name))]),t._v(": "),n("span",{staticClass:"item"},[t._v(t._s(e.phone))])])}))])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"input-field col s1"},[n("i",{staticClass:"material-icons large"},[t._v("sentiment_very_satisfied")])])}],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";function o(t){n(66)}var i=n(67),a=n(68),c=n(1),r=o,s=c(i.a,a.a,r,"data-v-5bf47374",null);e.a=s.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"firebase-app"}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main-content"},[n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, rerum? Error sunt, aperiam dolores, atque expedita molestiae tenetur. Quis eveniet accusamus velit explicabo adipisci reiciendis modi eaque quas, officia excepturi.")])])])}],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-toolbar",{staticClass:"md-primary"},[n("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Vue Material")]),t._v(" "),t._l(t.routes,function(e,o){return n("router-link",{key:o,attrs:{to:{path:e.path}}},[n("md-button",{class:[t.randomClass]},[n("span",{staticClass:"label"},[t._v(t._s(e.label)+"  ")])])],1)})],2)},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("links"),t._v(" "),n("div",{attrs:{id:"app"}},[n("router-view")],1)],1)},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";var o=n(2),i=n(5),a=n(72),c=n(73),r=n(74),s=n(101);o.default.use(i.a);var u=new i.a.Store({state:a.a,getters:c.a,mutations:r.a,actions:s.a});e.a=u},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={counter:0,todoList:[{title:"Complete task",done:!0},{title:"Incomplete task",done:!1}],newTodoTitle:"",contactList:[{name:"Max",phone:"+380933495900"},{name:"Ahtung!",phone:"02"},{name:"Help",phone:"911"}],newName:"",newPhone:""}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={counter:function(t){return t.counter}}},function(t,e,n){"use strict";n.d(e,"a",function(){return p});var o=n(75),i=n.n(o),a=function(t){return t.counter--},c=function(t){return t.counter++},r=function(t,e){var n=t.todoList.find(function(t){return t.title===e.title});n.done=!n.done},s=function(t){if(t.newTodoTitle&&t.newTodoTitle.trim().length){t.todoList.find(function(e){return e.title===t.newTodoTitle})||(t.todoList=[{title:t.newTodoTitle.trim(),done:!1}].concat(i()(t.todoList)),t.newTodoTitle="")}},u=function(t,e){(e.done||confirm("TODO you going to delete wasn't complete, are you sure?"))&&(t.todoList=[].concat(i()(t.todoList.filter(function(t){return t.title!==e.title}))))},d=function(t,e){t.newTodoTitle=e},l=function(t,e){t.newName=e},m=function(t,e){t.newPhone=e},f=function(t){return t.newName&&t.newName.trim().length&&t.newPhone&&t.newPhone.trim().length?t.contactList.find(function(e){return e.name===t.newName||e.phone===t.newPhone})?void Materialize.toast("contact with such name or phone already exists.",1e4):(t.contactList.push({name:t.newName,phone:t.newPhone}),t.contactList.sort(function(t,e){return t.phone-e.phone}),Materialize.toast("contact "+t.newName+" successfully added!",5e3),void(t.newName=t.newPhone="")):void Materialize.toast("name and phone may not be empty.",1e4)},p={decrementCounterMutation:a,incrementCounterMutation:c,toggleTodoMutation:r,addNewTodoTitleMutation:s,removeTodoMutation:u,setNewTodoTitleMutation:d,setNewNameMutation:l,setNewPhoneMutation:m,addNewContactMutation:f}},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n(102),i=n.n(o),a=n(108),c=n(109),r=n(110),s=i()({},a.a,c.a,r.a)},,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={decrementCounterAction:function(t){(0,t.commit)("decrementCounterMutation")},incrementCounterAction:function(t){return t.commit("incrementCounterMutation")}}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={toggleTodoAction:function(t,e){t.commit("toggleTodoMutation",e)},addNewTodoTitleAction:function(t){t.commit("addNewTodoTitleMutation")},removeTodoAction:function(t,e){t.commit("removeTodoMutation",e)},setNewTodoTitleAction:function(t,e){t.commit("setNewTodoTitleMutation",e)}}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={addNewContactAction:function(t){(0,t.commit)("addNewContactMutation")},setNewNameAction:function(t,e){(0,t.commit)("setNewNameMutation",e)},setNewPhoneAction:function(t,e){t.commit("setNewPhoneMutation",e)}}}]),[33]);
//# sourceMappingURL=app.0991b4daa6b98402e60b.js.map