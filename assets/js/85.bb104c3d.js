(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{430:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"移动端适配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动端适配"}},[t._v("#")]),t._v(" 移动端适配")]),t._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("p",[s("strong",[t._v("物理像素(DP)")])]),t._v(" "),s("p",[t._v("物理像素又称设备像素/设备物理像素，是组成屏幕的一个个真实的物理像素点，比如屏幕的分辨率是 750 * 1334 ，说明这个屏幕就是由真实的 750 * 1334 个像素点组成，从出厂那一刻就不会改变了。")]),t._v(" "),s("p",[s("strong",[t._v("CSS像素")])]),t._v(" "),s("p",[t._v("CSS像素是一个相对单位，它并不是完全等于物理像素，只是表示一个最小基本单位的抽象概念。")]),t._v(" "),s("p",[t._v("一般默认情况下一个CSS像素等于一个物理像素，在多倍屏下会相当于多个物理像素。")]),t._v(" "),s("p",[s("strong",[t._v("设备独立像素(DIP)")])]),t._v(" "),s("p",[t._v("设备独立像素和CSS像素一样，表示一个最小的基本单位，也被称为逻辑像素。一个抽象的独立像素代表多少物理像素。")]),t._v(" "),s("p",[t._v("设备独立像素 = CSS 像素 = 逻辑像素")]),t._v(" "),s("p",[s("strong",[t._v("设备像素比(DPR)")])]),t._v(" "),s("p",[t._v("设备像素比描述的是未缩放状态下，物理像素和设备独立像素的初始比例关系。表示一个设备独立像素或者一个CSS像素可以容纳多少个物理像素。")]),t._v(" "),s("p",[t._v("DPR = 物理像素 / 设备独立像素(CSS像素)")]),t._v(" "),s("p",[t._v("在不同的屏幕上，CSS像素所呈现的物理尺寸是一致的，而不同的是CSS像素所对应的物理像素具数是不一致的。在普通屏幕下1个CSS像素对应1个物理像素，而在Retina视网膜屏幕下，1个CSS像素对应的却是4个物理像素。")]),t._v(" "),s("p",[t._v("获取DPR：window.devicePixelRatio 或者媒体查询 min-device-pixel-ratio")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("only")]),t._v(" screen "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-min-device-pixel-ratio")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"视口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视口"}},[t._v("#")]),t._v(" 视口")]),t._v(" "),s("p",[s("strong",[t._v("三个视口")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("布局视口：网页布局的基准窗口，PC默认等于浏览器窗口，移动端有一个默认值为980px，为了让网页布局可以在手机上显示。可以通过调用"),s("code",[t._v("document.documentElement.clientWidth / clientHeight")]),t._v("来获取布局视口大小。")])]),t._v(" "),s("li",[s("p",[t._v("视觉视口：用户通过屏幕真实看到的区域。如果用户进行缩放则调整的是视觉视口，而不是布局视口。可以通过调用"),s("code",[t._v("window.innerWidth / innerHeight")]),t._v("来获取视觉视口大小。")])]),t._v(" "),s("li",[s("p",[t._v("理想视口：就是让页面布局正常，不需要缩放什么的就能正常在手机上显示的视口。一般为屏幕尺寸，可以通过调用screen.width / height来获取理想视口大小。")])])]),t._v(" "),s("p",[s("strong",[t._v("利用meta标签对viewport进行控制")])]),t._v(" "),s("p",[s("strong",[t._v("一般，移动端都需要设置meta标签来得到理想视口让页面正常显示。")])]),t._v(" "),s("p",[t._v("移动端默认的viewport是布局视口，我们可以通过设置meta来设置理想视口。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("该meta标签设置viewport的宽度等于设备的宽度，同时不允许用户手动缩放。也许允不允许用户缩放不同的网站有不同的要求，但让viewport的宽度等于设备的宽度，这样就得到了理想视口，如果你不这样的设定的话，那就会使用那个比屏幕宽的默认视觉视口，也就是说会出现横向滚动条。")]),t._v(" "),s("p",[s("code",[t._v("width=device-width")]),t._v(" 和 "),s("code",[t._v("initial-scale=1")]),t._v(" 设置哪个都可以得到理想视口。"),s("code",[t._v("width=device-width")]),t._v("让布局视口宽度等于设备宽度，得到理想视口；"),s("code",[t._v("initial-scale=1")]),t._v(" 是相对于理想视口进行缩放的，不会改变布局视口的大小，所以页面布局是不变的，但是缩放会改变视觉视口的大小。布局视口取width的宽度和视觉视口的最大值。")]),t._v(" "),s("p",[s("code",[t._v("页面的缩放系数 = CSS像素 / 设备独立像素")])]),t._v(" "),s("p",[s("code",[t._v("页面的缩放系数 = 理想视口宽度 / 视觉视口宽度")])]),t._v(" "),s("p",[t._v("页面进行缩放时，改变了视觉视口，同时也改变了CSS像素所包含的真实物理像素，缩放越大，CSS像素跨越的物理像素越多，显示的越大； 缩放越小，CSS像素跨越的物理像素越少，显示的越小。")]),t._v(" "),s("p",[t._v("根据设备的dpr动态改变meta标签的缩放比，让布局视口等于真实分辨率大小，也就是让1CSS像素等于1物理像素，这样也可以对移动端进行适配。这样既设置了理想视口，也解决了1px问题。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=1/dpr, maximum-scale=1/dpr, minimum-scale=1/dpr, user-scalable=no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"使用lib-flexible适配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用lib-flexible适配"}},[t._v("#")]),t._v(" 使用lib-flexible适配")]),t._v(" "),s("p",[s("strong",[t._v("原理")])]),t._v(" "),s("p",[t._v("不论哪个版本都是以宽度的1/10设置html的"),s("code",[t._v("font-size")]),t._v("的，所以只要根据设计稿的1/10作为1rem换算尺寸就行了。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("旧版本使用")])]),t._v(" "),s("p",[t._v("1、使用时，html 中不需要添加 view-port 的 meta 标签，会自动加上。")]),t._v(" "),s("p",[t._v("2、引入flexible")]),t._v(" "),s("p",[t._v("在head头部引入lib-flexible.js，不要设置meta视口，执行这个js后，会在html上增加一个data-dpr属性，以及设置font-size大小。之后页面中的元素，都可以用rem单位来设置。html上的font-size就是rem的基准像素。")]),t._v(" "),s("p",[t._v("3、把视觉稿中的px转换成rem")]),t._v(" "),s("p",[t._v("我们以设计稿的1/10为1rem,整个宽度是10rem，以设计稿750为例，1rem为设计稿的1/10为75px。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("1rem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 75px\n")])])]),s("p",[t._v("因此，对于视觉稿上的元素的尺寸换算，只需要原始px值除以rem基准px值即可。例如240px * 120px的元素，最后转换为3.2rem * 1.6rem。")]),t._v(" "),s("p",[t._v("4、字体不使用rem的方法")]),t._v(" "),s("p",[t._v("字体的大小不推荐用rem作为单位。所以对于字体的设置，仍旧使用px作为单位，并配合用data-dpr属性来区分不同dpr下的的大小。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.4rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 默认写上dpr为1的fontSize\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('[data-dpr="2"] div')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('[data-dpr="3"] div')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 36px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("使用less或者sass 动态显示字体大小")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("// 适配dpr的字体大小\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("font-dpr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$font-size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $font-size"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(';\n\n  [data-dpr="2"] &')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $font-size * 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('[data-dpr="3"] &')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $font-size * 3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 使用 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("font-dpr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("14px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("2.0使用")])]),t._v(" "),s("p",[t._v("引入")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 要手动引入meta了 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("amfe-flexible/index.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("引入后也是以设计稿1/10作为1rem来进行换算就行了，字体其他的没有要求，相比较旧版本较为简单。")]),t._v(" "),s("h2",{attrs:{id:"viewport方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewport方案"}},[t._v("#")]),t._v(" Viewport方案")]),t._v(" "),s("ul",[s("li",[t._v("vw(Viewport's width)：1vw等于视觉视口的1%")]),t._v(" "),s("li",[t._v("vh(Viewport's height) : 1vh 为视觉视口高度的1%")]),t._v(" "),s("li",[t._v("vmin : vw 和 vh 中的较小值")]),t._v(" "),s("li",[t._v("vmax : 选取 vw 和 vh 中的较大值")])]),t._v(" "),s("p",[t._v("首先添加meta标签设置视口")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后把设计稿尺寸转化成对应的vw/vh就可以了。")]),t._v(" "),s("h2",{attrs:{id:"_1px问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1px问题"}},[t._v("#")]),t._v(" 1px问题")]),t._v(" "),s("p",[t._v("因为多倍屏的存在，我们所写的1px CSS像素被多个真实的物理像素渲染，所以1px就会显得很粗。")]),t._v(" "),s("p",[t._v("flexible.js通过缩放比例让1px CSS像素等于真实的物理像素解决了1px问题，但是vw没办法动态设置缩放比例，所以就会有1px问题。")]),t._v(" "),s("p",[t._v("解决办法： "),s("RouterLink",{attrs:{to:"/basic/css/CSS常见样式.html#_0-5像素边框"}},[t._v("0.5像素边框")])],1),t._v(" "),s("p",[t._v("参考链接：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/amfe/article/issues/17",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Flexible实现手淘H5页面的终端适配"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844903845617729549",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于移动端适配"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1499916",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端开发的屏幕、图像、字体与布局的兼容适配"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/jawil/blog/issues/21",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);