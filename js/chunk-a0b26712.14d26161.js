(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0b26712"],{"9a56":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"list-page"},[e("div",{staticClass:"container"},[e("div",{staticClass:"list-title"},[e("div",{staticClass:"left"},[e("div",{staticClass:"title"},[t._v("最新区块")]),e("div",{staticClass:"total"},[t._v(" 总共 "),e("span",[t._v(t._s(t.total))]),t._v("个区块 ")])])]),e("div",{staticClass:"tableWrapper"},[e("div",{staticClass:"tableminwrapper"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{label:"高度"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.toblockdetails(a.row)}}},[t._v(t._s(a.row.height))])]}}])}),e("el-table-column",{attrs:{prop:"timestamp.human",label:"时间",width:"240"}}),e("el-table-column",{attrs:{prop:"transactions",label:"数量"}}),e("el-table-column",{attrs:{label:"ID"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.toblockdetails(a.row)}}},[t._v(" "+t._s(a.row.id.substring(0,6)+"..."+a.row.id.substring(a.row.id.length-6))+" ")])]}}])}),e("el-table-column",{attrs:{prop:"forged.fee",label:"手续费"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(t._s((a.row.forged.fee/1e8).toFixed(2))+t._s(t.unit))]}}])})],1)],1)]),e("div",{staticClass:"changepage-wrapper"},[e("el-pagination",{attrs:{"pager-count":5,"page-size":25,layout:"prev, pager, next",total:t.total},on:{"current-change":t.pagen}})],1)])])])},n=[],o=e("b85c"),i=e("a8f8"),l=e("c1df"),r=e.n(l),c={mounted:function(){var t=this;this.unit=sessionStorage.getItem("unit")?sessionStorage.getItem("unit"):"MCN",Object(i["d"])({orderBy:"timestamp:desc",page:1,limit:25}).then((function(a){var e,s=Object(o["a"])(a.data.data);try{for(s.s();!(e=s.n()).done;){var n=e.value;n.timestamp.human=r()(n.timestamp.human).format("YYYY-MM-DD HH:mm:ss")}}catch(i){s.e(i)}finally{s.f()}t.total=a.data.meta.totalCount,t.tableData=a.data.data})).catch((function(t){window.console.log(t)}))},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],total:0,unit:""}},methods:{pagen:function(t){var a=this;Object(i["d"])({orderBy:"timestamp:desc",page:t,limit:25}).then((function(t){var e,s=Object(o["a"])(t.data.data);try{for(s.s();!(e=s.n()).done;){var n=e.value;n.timestamp.human=r()(n.timestamp.human).format("YYYY-MM-DD HH:mm:ss")}}catch(i){s.e(i)}finally{s.f()}a.total=t.data.meta.totalCount,a.tableData=t.data.data})).catch((function(t){window.console.log(t)}))},toblockdetails:function(t){console.log(t),this.$router.push({path:"/blockdetails",query:{id:t.height}})}}},d=c,u=(e("cf9d"),e("2877")),p=Object(u["a"])(d,s,n,!1,null,"8b0b3832",null);a["default"]=p.exports},cc27:function(t,a,e){},cf9d:function(t,a,e){"use strict";var s=e("cc27"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-a0b26712.14d26161.js.map