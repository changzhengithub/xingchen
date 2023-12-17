(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{455:function(e,t,s){"use strict";s.r(t);var r=s(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vue使用this-refs-打印为undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue使用this-refs-打印为undefined"}},[e._v("#")]),e._v(" vue使用this.$refs 打印为undefined")]),e._v(" "),s("p",[e._v("用ref 注册子组件，父组件可以通过this.$refs.xx.fn调用子组件里的函数，但是有时会出现 fn 为定义的情况")]),e._v(" "),s("p",[e._v("vue 官网中ref 下有一段话给出说明")]),e._v(" "),s("p",[s("strong",[e._v("关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。")])]),e._v(" "),s("p",[e._v("也就是说 ref 只有等页面加载完成好之后你才能调用 this.$refs ，如果你使用v-if 、v-for渲染页面的话，那么在刚开始页面还没渲染之前你是拿不到this.$refs 的，所以要等到页面渲染之后拿才可以")]),e._v(" "),s("p",[e._v("解决办法：")]),e._v(" "),s("p",[e._v("1、如果你在mounted里获取this.$refs，因为dom还未完全加载，所以你是拿不到的， update阶段则是完成了数据更新到 DOM 的阶段(对加载回来的数据进行处理)，此时，就可以使用this.$refs了")]),e._v(" "),s("p",[e._v("2、如果写在method中，那么可以使用 this.$nextTick(() => {}) 等页面渲染好再调用，这样就可以了")]),e._v(" "),s("p",[e._v("3、或者加个定时器延时加载this.$refs（这个方法还没有试）")])])}),[],!1,null,null,null);t.default=n.exports}}]);