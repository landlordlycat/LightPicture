(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c1547bb"],{3802:function(e,a,t){"use strict";t("89e0")},"7f7f":function(e,a,t){var i=t("86cc").f,s=Function.prototype,r=/^\s*function ([^ (]*)/,n="name";n in s||t("9e1e")&&i(s,n,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},"89e0":function(e,a,t){},ffdb:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"page-content"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-head"},[e._v("\n          角色组\n\n          "),t("div",{staticClass:"search-input"},[t("Input",{attrs:{size:"small",placeholder:"请输入名称搜索",search:""},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}})],1)]),t("div",{staticClass:"card-body padding-top0"},[t("div",{staticClass:"card-menu"},[1==e.userInfo.role.is_admin?t("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",icon:"md-add"},on:{click:e.addClick}},[e._v("新增")]):e._e()],1),t("Table",{attrs:{border:"",loading:e.load,columns:e.columns,data:e.data},scopedSlots:e._u([{key:"power",fn:function(a){var i=a.row;return[t("Button",{on:{click:function(a){return e.read(i)}}},[e._v("查看")])]}},{key:"default",fn:function(a){var i=a.row;return[t("i-switch",{attrs:{"true-value":1,"false-value":0},on:{"on-change":function(a){return e.onChange(i)}},model:{value:i.default,callback:function(a){e.$set(i,"default",a)},expression:"row.default"}})]}},{key:"action",fn:function(a){var i=a.row;return[t("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(a){return e.editClick(i)}}},[e._v("编辑")]),t("Button",{attrs:{type:"error",size:"small"},on:{click:function(a){return e.del(i.id)}}},[e._v("删除")])]}}])}),t("div",{staticClass:"paging"},[t("Page",{attrs:{total:Number(e.total),current:e.page,"page-size":e.size,simple:e.$store.state.isMobile,"show-total":"","show-sizer":"","show-elevator":""},on:{"on-change":e.pageChange,"on-page-size-change":e.pageSizeChange}})],1)],1)])])]),t("Modal",{attrs:{width:"360"},model:{value:e.modal1,callback:function(a){e.modal1=a},expression:"modal1"}},[t("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[t("Icon",{attrs:{type:"md-checkbox"}}),t("span",[e._v("权限列表")])],1),t("div",{staticStyle:{"text-align":"center"}},[e.roleInfo.is_admin?t("Tag",{attrs:{color:"success"}},[e._v("管理员权限")]):e._e(),e.roleInfo.is_add&&0==e.roleInfo.is_admin?t("Tag",{attrs:{color:"success"}},[e._v("允许其成员上传图片")]):e._e(),e.roleInfo.is_del_own&&0==e.roleInfo.is_admin?t("Tag",{attrs:{color:"success"}},[e._v("允许其成员删除自己上传的图片")]):e._e(),e.roleInfo.is_read&&0==e.roleInfo.is_admin?t("Tag",{attrs:{color:"success"}},[e._v("允许其成员查看所在存储桶其他人上传的图片")]):e._e(),e.roleInfo.is_del_all&&0==e.roleInfo.is_admin?t("Tag",{attrs:{color:"success"}},[e._v("允许其成员删除所在存储桶其他人上传的图片")]):e._e(),e.roleInfo.is_read_all&&0==e.roleInfo.is_admin?t("Tag",{attrs:{color:"success"}},[e._v("允许其成员查看系统全部图片")]):e._e()],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:function(a){e.modal1=!1}}},[e._v("我知道了")])],1)]),t("Modal",{attrs:{width:600,title:e.edit?"编辑分组":"新增分组",loading:e.creating,"class-name":"vertical-center-modal"},on:{"on-ok":function(a){e.edit?e.editSave():e.addSave()}},model:{value:e.modal2,callback:function(a){e.modal2=a},expression:"modal2"}},[t("Form",{ref:"create",attrs:{model:e.createData,"label-width":100}},[t("FormItem",{attrs:{label:"分组名称"}},[t("Input",{attrs:{placeholder:"请输入分组名称"},model:{value:e.createData.name,callback:function(a){e.$set(e.createData,"name",a)},expression:"createData.name"}})],1),t("FormItem",{attrs:{label:"存储桶"}},[t("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择存储桶"},model:{value:e.createData.storage_id,callback:function(a){e.$set(e.createData,"storage_id",a)},expression:"createData.storage_id"}},e._l(e.storageList,(function(a){return t("Option",{key:a.id,attrs:{value:a.id}},[e._v(e._s(a.name))])})),1)],1),t("FormItem",{attrs:{label:"分组权限"}},[t("p",[t("Checkbox",{attrs:{border:"","true-value":1,"false-value":0},model:{value:e.createData.is_admin,callback:function(a){e.$set(e.createData,"is_admin",a)},expression:"createData.is_admin"}},[e._v("设置其成员权限为管理员")])],1),t("p",{directives:[{name:"show",rawName:"v-show",value:0==e.createData.is_admin,expression:"createData.is_admin == 0"}]},[t("Checkbox",{attrs:{border:"","true-value":1,"false-value":0},model:{value:e.createData.is_add,callback:function(a){e.$set(e.createData,"is_add",a)},expression:"createData.is_add"}},[e._v("允许其成员上传图片")])],1),t("p",{directives:[{name:"show",rawName:"v-show",value:0==e.createData.is_admin,expression:"createData.is_admin == 0"}]},[t("Checkbox",{attrs:{border:"","true-value":1,"false-value":0},model:{value:e.createData.is_read,callback:function(a){e.$set(e.createData,"is_read",a)},expression:"createData.is_read"}},[e._v("允许其成员查看所在存储桶其他人上传的图片\n          ")])],1),t("p",{directives:[{name:"show",rawName:"v-show",value:0==e.createData.is_admin,expression:"createData.is_admin == 0"}]},[t("Checkbox",{attrs:{border:"","true-value":1,"false-value":0},model:{value:e.createData.is_read_all,callback:function(a){e.$set(e.createData,"is_read_all",a)},expression:"createData.is_read_all"}},[e._v("允许其成员查看系统全部图片")])],1),t("p",{directives:[{name:"show",rawName:"v-show",value:0==e.createData.is_admin,expression:"createData.is_admin == 0"}]},[t("Checkbox",{attrs:{border:"","true-value":1,"false-value":0},model:{value:e.createData.is_del_own,callback:function(a){e.$set(e.createData,"is_del_own",a)},expression:"createData.is_del_own"}},[e._v("允许其成员删除自己上传的图片")])],1),t("p",{directives:[{name:"show",rawName:"v-show",value:0==e.createData.is_admin,expression:"createData.is_admin == 0"}]},[t("Checkbox",{attrs:{border:"","true-value":1,"false-value":0},model:{value:e.createData.is_del_all,callback:function(a){e.$set(e.createData,"is_del_all",a)},expression:"createData.is_del_all"}},[e._v("允许其成员删除所在存储桶其他人上传的图片\n          ")])],1)]),t("FormItem",{attrs:{label:"注册默认"}},[t("i-switch",{attrs:{"true-value":1,"false-value":0},model:{value:e.createData.default,callback:function(a){e.$set(e.createData,"default",a)},expression:"createData.default"}})],1)],1)],1),t("Modal",{attrs:{width:"360"},model:{value:e.modal3,callback:function(a){e.modal3=a},expression:"modal3"}},[t("p",{staticStyle:{color:"#f60"},attrs:{slot:"header"},slot:"header"},[t("Icon",{attrs:{type:"ios-information-circle"}}),t("span",[e._v("删除确认")])],1),t("div",[t("p",[e._v("至少保留一个默认角色组，请确保当前删除的角色组不是注册默认角色组，角色组删除后，该组下面的用户将重置默认角色组。\n      ")])]),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"error",size:"large",long:"",loading:e.modal_loading},on:{click:e.delFunction}},[e._v("确认删除")])],1)])],1)},s=[],r=(t("8e6e"),t("ac6a"),t("456d"),t("7f7f"),t("ade3")),n=t("365c"),o=t("2f62");function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){Object(r["a"])(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var d={data:function(){return{page:1,size:10,name:"",total:"",load:!0,data:[],roleInfo:{},modal1:!1,modal2:!1,modal3:!1,edit:!1,columns:[{title:"ID",key:"id",align:"center",minWidth:80},{title:"名称",key:"name",align:"center",minWidth:120},{title:"存储桶",key:"storage_name",align:"center",minWidth:130},{title:"成员数",key:"user_num",align:"center",minWidth:80},{title:"权限",align:"center",slot:"power",minWidth:100},{title:"注册默认",align:"center",slot:"default",minWidth:100},{title:"操作",minWidth:150,align:"center",slot:"action"}],storageList:[],createData:{},creating:!0,delId:"",modal_loading:!1}},created:function(){this._getData(),this._getStorage(),1!=this.userInfo.role.is_admin&&(this.columns.pop(),this.columns.pop())},computed:l({},Object(o["c"])(["userInfo"])),watch:{name:function(e,a){e!=a&&(this.page=1,this.load=!0,this._getData())}},methods:{_getData:function(){var e=this;Object(n["j"])({page:this.page,size:this.size,name:this.name}).then((function(a){e.data=a.data.data,e.total=a.data.total,e.load=!1}))},read:function(e){this.roleInfo=e,this.modal1=!0},editClick:function(e){this.createData={},this.edit=!0,this.modal2=!0,this.createData=l({},e)},addClick:function(){this.edit=!1,this.modal2=!0,this.createData={name:"",storage_id:"",is_admin:0,is_add:0,is_read:0,is_read_all:0,is_del_own:0,is_del_all:0,default:0}},addSave:function(){var e=this;return this.createData.name?this.createData.storage_id?void Object(n["v"])({name:this.createData.name,storage_id:this.createData.storage_id,is_admin:this.createData.is_admin,is_add:this.createData.is_add,is_read:this.createData.is_read,is_read_all:this.createData.is_read_all,is_del_own:this.createData.is_del_own,is_del_all:this.createData.is_del_all,default:this.createData.default}).then((function(a){200==a.code?(e.$Message.success({background:!0,content:a.msg}),e.modal2=!1,e._getData()):(e.$Message.error({background:!0,content:a.msg}),e.load=!1),e.nextTick()})):(this.nextTick(),this.$Message.error({background:!0,content:"请选择存储桶"})):(this.nextTick(),this.$Message.error({background:!0,content:"名称不能为空"}))},editSave:function(){var e=this;return this.createData.name?this.createData.storage_id?(this.load=!0,void Object(n["C"])({id:this.createData.id,name:this.createData.name,storage_id:this.createData.storage_id,is_admin:this.createData.is_admin,is_add:this.createData.is_add,is_read:this.createData.is_read,is_read_all:this.createData.is_read_all,is_del_own:this.createData.is_del_own,is_del_all:this.createData.is_del_all,default:this.createData.default}).then((function(a){200==a.code?(e.$Message.success({background:!0,content:a.msg}),e.modal2=!1,e._getData()):(e.$Message.error({background:!0,content:a.msg}),e.load=!1),e.nextTick()}))):(this.nextTick(),this.$Message.error({background:!0,content:"请选择存储桶"})):(this.nextTick(),this.$Message.error({background:!0,content:"名称不能为空"}))},onChange:function(e){this.createData=l({},e),this.editSave()},del:function(e){this.delId=e,this.modal3=!0},delFunction:function(){var e=this;this.modal_loading=!0,Object(n["c"])({id:this.delId}).then((function(a){200==a.code?(e.$Message.success({background:!0,content:a.msg}),e._getData()):e.$Message.error({background:!0,content:a.msg}),e.modal_loading=!1,e.modal3=!1}))},pageChange:function(e){this.page=e,this.load=!0,this._getData()},pageSizeChange:function(e){this.load=!0,this.page=1,this.size=e,this._getData()},_getStorage:function(){var e=this;Object(n["l"])({page:1,size:100}).then((function(a){e.storageList=a.data.data}))},nextTick:function(){var e=this;this.creating=!1,this.$nextTick((function(){e.creating=!0}))}}},u=d,_=(t("3802"),t("2877")),m=Object(_["a"])(u,i,s,!1,null,"3bc0f04b",null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-0c1547bb.82541177.js.map