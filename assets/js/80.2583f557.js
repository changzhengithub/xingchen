(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{425:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"连接服务器git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接服务器git"}},[t._v("#")]),t._v(" 连接服务器git")]),t._v(" "),a("p",[t._v("现在云服务上的git部署在"),a("code",[t._v("/home/git/blog")]),t._v("文件夹下，博客文件在"),a("code",[t._v("/home/git/www")]),t._v("下，现在的自动更新方式是通过修改 "),a("code",[t._v("/home/git/blog/blog.git/hooks")]),t._v(" 里的 "),a("code",[t._v("post-receive")]),t._v(" 文件内容为 "),a("code",[t._v("git --work-tree=/home/git/www/blog --git-dir=/home/git/blog/blog.git checkout -f")]),t._v("，把代码自动更新到www下的blog文件中，然后登录服务器，找到博客目录手动 安装 和打包，nginx 的地址指向了"),a("code",[t._v("/home/git/www/blog/docs/.vuepress/dist")]),t._v("文件夹。")]),t._v(" "),a("p",[t._v("1、拉取代码")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/changzhengithub/Blog.git\n")])])]),a("p",[t._v("2、连接服务器git")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" server git@180.100.209.103:/home/git/blog/blog.git \n")])])]),a("p",[t._v("3、提交代码")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"push"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#提交到服务器git 会提示输入密码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push server master\n")])])]),a("p",[t._v("4、登录远程打包")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/git/www/blog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);