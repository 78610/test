(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-491a085f"],{"3b9f":function(t,a,e){},"4a76":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("看不清的名称")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v(">>>")])],1),t._l(4,(function(a){return e("div",{key:a,staticClass:"text item"},[t._v(t._s("内容 "+a))])}))],2)],1),e("el-col",{attrs:{span:5,offset:14}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("看不清的名称")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v(">>>")])],1),e("div",{staticClass:"echart",attrs:{id:"point-bank"}})])],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("看不清的名称")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v(">>>")])],1),e("div",{staticClass:"echart",attrs:{id:"tool-type"}})])],1),e("el-col",{attrs:{span:5,offset:14}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("看不清的名称")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v(">>>")])],1),e("div",{staticClass:"echart",attrs:{id:"tool-online"}})])],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("看不清的名称")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v(">>>")])],1),e("div",{staticClass:"echart",attrs:{id:"point-type"}})])],1),e("el-col",{attrs:{span:5,offset:14}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("看不清的名称")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v(">>>")])],1),e("div",{staticClass:"echart",attrs:{id:"tool-status"}})])],1)],1)],1)},i=[],r={data:function(){return{myChart:null}},mounted:function(){this.drawChart(),this.drawToolTypeChart(),this.drawPointTypeChart(),this.drawToolOnlineChart(),this.drawPointBankChart()},methods:{drawChart:function(){this.myChart=this.$echarts.init(document.getElementById("tool-status"));var t={tooltip:{},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]};this.myChart.setOption(t);var a=this;window.addEventListener("resize",(function(){a.myChart.resize()}))},drawToolTypeChart:function(){this.myChart=this.$echarts.init(document.getElementById("tool-type"));var t={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",left:10,data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}]};this.myChart.setOption(t);var a=this;window.addEventListener("resize",(function(){a.myChart.resize()}))},drawPointTypeChart:function(){this.myChart=this.$echarts.init(document.getElementById("point-type"));var t={legend:{},tooltip:{},dataset:{dimensions:["product","2015","2016","2017"],source:[{product:"Matcha Latte",2015:43.3,2016:85.8,2017:93.7},{product:"Milk Tea",2015:83.1,2016:73.4,2017:55.1},{product:"Cheese Cocoa",2015:86.4,2016:65.2,2017:82.5},{product:"Walnut Brownie",2015:72.4,2016:53.9,2017:39.1}]},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]};this.myChart.setOption(t);var a=this;window.addEventListener("resize",(function(){a.myChart.resize()}))},drawToolOnlineChart:function(){this.myChart=this.$echarts.init(document.getElementById("tool-online"));var t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["利润","支出","收入"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value"}],yAxis:[{type:"category",axisTick:{show:!1},data:["周一","周二","周三","周四","周五","周六","周日"]}],series:[{name:"利润",type:"bar",label:{show:!0,position:"inside"},data:[200,170,240,244,200,220,210]},{name:"收入",type:"bar",stack:"总量",label:{show:!0},data:[320,302,341,374,390,450,420]},{name:"支出",type:"bar",stack:"总量",label:{show:!0,position:"left"},data:[-120,-132,-101,-134,-190,-230,-210]}]};this.myChart.setOption(t);var a=this;window.addEventListener("resize",(function(){a.myChart.resize()}))},drawPointBankChart:function(){this.myChart=this.$echarts.init(document.getElementById("point-bank"));var t={title:{text:"某站点用户访问来源",subtext:"纯属虚构",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};this.myChart.setOption(t);var a=this;window.addEventListener("resize",(function(){a.myChart.resize()}))}}},n=r,o=(e("8bea"),e("2877")),l=Object(o["a"])(n,s,i,!1,null,"283f2944",null);a["default"]=l.exports},"8bea":function(t,a,e){"use strict";var s=e("3b9f"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-491a085f.7fc740fc.js.map