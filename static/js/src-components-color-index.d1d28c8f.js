(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Color/demo/index.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".color-helper{text-align:center;width:100%;border-radius:4px;padding:20px;margin:5px 0;height:74px;box-sizing:border-box;color:#fff;font-size:14px}.color-helper.shine--bg-light{border:1px solid #000;color:#000}.color-helper>div{font-size:12px;opacity:0.69;line-height:24px}\n",""])},"./src/components/Color/demo/index.scss":function(e,t,n){var a=n("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Color/demo/index.scss");"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},m=n("./node_modules/style-loader/lib/addStyles.js")(a,r);a.locals&&(e.exports=a.locals),e.hot.accept("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Color/demo/index.scss",function(){var t=n("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Color/demo/index.scss");if("string"===typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");m(t)}),e.hot.dispose(function(){m()})},"./src/components/Color/index.mdx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n("./node_modules/react/index.js"))&&a.__esModule?a:{default:a},m=n("./node_modules/@mdx-js/tag/dist/index.js"),o=n("./src/index.js"),l=n("./offical/theme/components/RenderUtils/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n("./src/components/Color/demo/index.scss");var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,i(t).call(this,e))).layout=null,n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r.default.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;return p(e,["components"]),r.default.createElement(m.MDXTag,{name:"wrapper",components:t},r.default.createElement(m.MDXTag,{name:"h1",components:t,props:{id:"color-\u8272\u5f69"}},"Color \u8272\u5f69"),r.default.createElement(m.MDXTag,{name:"h2",components:t,props:{id:"\u6982\u8ff0"}},"\u6982\u8ff0"),r.default.createElement(m.MDXTag,{name:"p",components:t},"\u4e3a\u4e86\u907f\u514d\u89c6\u89c9\u4f20\u8fbe\u5dee\u5f02\uff0cShine Design \u4f7f\u7528\u4e00\u5957\u7279\u5b9a\u7684\u8c03\u8272\u677f\u6765\u89c4\u5b9a\u989c\u8272\uff0c\u4e3a\u4f60\u6240\u642d\u5efa\u7684\u4ea7\u54c1\u63d0\u4f9b\u4e00\u81f4\u7684\u5916\u89c2\u89c6\u89c9\u611f\u53d7\u3002"),r.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"\u4e3b\u8272\u8c03"}},"\u4e3b\u8272\u8c03"),r.default.createElement(m.MDXTag,{name:"p",components:t},"\u4e3b\u8272\u8c03\u4e00\u822c\u7528\u4e8e\u5bf9\u9875\u9762\u6574\u4f53\u989c\u8272\u7684\u628a\u63a7\uff0c\u6211\u4eec\u5efa\u8bae\u4e00\u4e2a\u9875\u9762\u4ec5\u9009\u62e9\u552f\u4e00\u7684\u4e3b\u8272\u8c03\u3002\u4ee5\u4e0b\u662f\u6211\u4eec\u63a8\u8350\u7684\u4e3b\u8272\u8c03\uff1a"),r.default.createElement(o.Row,null,r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-brand"},"Brand",r.default.createElement("div",null,"#716ACA"))),r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-grace"},"Grace",r.default.createElement("div",null,"#00C5DC"))),r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-metal"},"Metal",r.default.createElement("div",null,"#C4C5D6"))),r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-focus"},"Focus",r.default.createElement("div",null,"#9816F4"))),r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-light"},"Light",r.default.createElement("div",null,"#FFFFFF")))),r.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"\u8f85\u52a9\u8272"}},"\u8f85\u52a9\u8272"),r.default.createElement(m.MDXTag,{name:"p",components:t},"\u8f85\u52a9\u8272\u662f\u4e00\u7c7b\u5177\u6709\u660e\u786e\u542b\u4e49\uff0c\u7528\u4e8e\u5bf9\u7528\u6237\u884c\u4e3a\u8fdb\u884c\u6807\u8bc6\u7684\u989c\u8272\uff0c\u4f8b\u5982\u4e00\u4e9b\u5371\u9669\u7684\u884c\u4e3a\uff0c\u6216\u6210\u529f\u6267\u884c\u4e86\u67d0\u4e9b\u64cd\u4f5c\u7b49\u3002\u4ee5\u4e0b\u662f\u6211\u4eec\u63a8\u8350\u7684\u8f85\u52a9\u8272\uff1a"),r.default.createElement(o.Row,null,r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-primary"},"Primary",r.default.createElement("div",null,"#5867DD"))),r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-success"},"Success",r.default.createElement("div",null,"#34BFA3"))),r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-info"},"Info",r.default.createElement("div",null,"#36A3F7"))),r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-warning"},"Warning",r.default.createElement("div",null,"#FFB822"))),r.default.createElement(o.Col,{col:4},r.default.createElement("div",{className:"color-helper shine--bg-danger"},"Danger",r.default.createElement("div",null,"#F4516C")))),r.default.createElement(m.MDXTag,{name:"h2",components:t,props:{id:"\u4ee3\u7801\u793a\u4f8b"}},"\u4ee3\u7801\u793a\u4f8b"),r.default.createElement(l.MessageBox,{messageType:"info"},"\u6559\u7a0b\u9ed8\u8ba4\u4f7f\u7528\u9884\u8bbe\u7684 `shine` \u4f5c\u4e3a classNamePrefix \u4fee\u9970\u7b26\u524d\u7f00\uff0c\u82e5\u7528\u6237\u81ea\u884c\u4fee\u6539\u4e86 classNamePrefix \uff0c\u5219\u9700\u8981\u66ff\u6362\u9ed8\u8ba4\u4fee\u9970\u7b26\u3002"),r.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"\u5b57\u4f53\u989c\u8272"}},"\u5b57\u4f53\u989c\u8272"),r.default.createElement(m.MDXTag,{name:"p",components:t},"\u57fa\u4e8e\u5f53\u524d\u8272\u5f69\u7ba1\u7406\uff0c\u6211\u4eec\u914d\u5957\u4e86\u7684\u76f8\u5173\u5b57\u4f53\u989c\u8272\uff0c\u5c06 ",r.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"{classNamePrefix}--font-{color}")," \u4fee\u9970\u7b26\u6dfb\u52a0\u5230\u5bb9\u5668\u4e0a\u5373\u53ef\u5b9e\u73b0\u53d8\u66f4\u5b57\u4f53\u989c\u8272\uff0c\u5bf9\u7167\u5173\u7cfb\u5982\u4e0b\u8868\u6240\u793a\uff1a"),r.default.createElement(m.MDXTag,{name:"table",components:t},r.default.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u8272\u5f69"),r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u4fee\u9970\u7b26"),r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u793a\u4f8b"))),r.default.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Brand"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-brand"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-brand"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Grace"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-grace"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-grace"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Metal"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-metal"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-metal"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Light"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-light"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-light"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Focus"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-focus"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-focus"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Primary"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-primary"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-primary"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Success"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-success"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-success"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Info"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-info"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-info"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Warning"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-warning"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-warning"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Danger"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-danger"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--font-danger"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))))),r.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"\u80cc\u666f\u989c\u8272"}},"\u80cc\u666f\u989c\u8272"),r.default.createElement(m.MDXTag,{name:"p",components:t},"\u4e0e\u5b57\u4f53\u989c\u8272\u7c7b\u4f3c\uff0c\u6211\u4eec\u914d\u5957\u4e86\u76f8\u5173\u80cc\u666f\u989c\u8272\uff0c\u5c06 ",r.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"{classNamePrefix}--bg-{color}")," \u4fee\u9970\u7b26\u6dfb\u52a0\u5230\u5bb9\u5668\u4e0a\u5373\u53ef\u5b9e\u73b0\u53d8\u66f4\u80cc\u666f\u989c\u8272\uff0c\u5bf9\u7167\u5173\u7cfb\u5982\u4e0b\u8868\u6240\u793a\uff1a"),r.default.createElement(m.MDXTag,{name:"table",components:t},r.default.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u8272\u5f69"),r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u4fee\u9970\u7b26"),r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u793a\u4f8b"))),r.default.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Brand"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-brand"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-brand"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Grace"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-grace"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-grace"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Metal"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-metal"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-metal"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Light"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-light"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-light"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Focus"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-focus"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-focus"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Primary"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-primary"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-primary"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Success"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-success"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-success"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Info"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-info"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-info"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Warning"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-warning"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-warning"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Danger"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-danger"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-danger"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))))),r.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"\u53cd\u8272"}},"\u53cd\u8272"),r.default.createElement(m.MDXTag,{name:"p",components:t},"\u4e3a\u4e86\u534f\u8c03\u4e0d\u540c\u8272\u5f69\u7684\u642d\u914d\uff0c\u6211\u4eec\u63a8\u51fa\u4e86\u53cd\u8272\u7ba1\u7406\uff0c\u53cd\u8272\u662f\u6307\u5f53\u524d\u57fa\u7840\u80cc\u666f\u989c\u8272\u7684\u524d\u666f\u8272\uff0c\u82e5\u5f53\u524d\u5bb9\u5668\u4f7f\u7528\u4e86\u67d0\u57fa\u7840\u80cc\u666f\u989c\u8272\uff0c\u5219\u5b57\u4f53\u989c\u8272\u8bbe\u7f6e\u4e3a\u8be5\u57fa\u7840\u989c\u8272\u7684\u53cd\u8272\uff0c\u5bf9\u7528\u6237\u4f53\u9a8c\u6709\u8f83\u5927\u7684\u63d0\u5347\u3002"),r.default.createElement(m.MDXTag,{name:"table",components:t},r.default.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u8272\u5f69"),r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u4fee\u9970\u7b26"),r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u793a\u4f8b"))),r.default.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Brand"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-brand"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-brand shine--font-inverse-brand"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Grace"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-grace"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-grace shine--font-inverse-grace"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Metal"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-metal"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-metal shine--font-inverse-metal"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Light"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-light"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-light shine--font-inverse-light"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Focus"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-focus"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-focus shine--font-inverse-focus"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Primary"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-primary"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-primary shine--font-inverse-primary"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Success"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-success"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-success shine--font-inverse-success"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Info"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-info"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-info shine--font-inverse-info"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Warning"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-warning"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-warning shine--font-inverse-warning"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Danger"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--bg-danger"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-danger shine--font-inverse-danger"},"\u8fd9\u662f\u793a\u4f8b\u80cc\u666f\u989c\u8272"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Brand"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-brand"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-brand shine--font-brand"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Grace"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-grace"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-grace shine--font-grace"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Metal"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-metal"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-metal shine--font-metal"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Light"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-light"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-light shine--font-light"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Focus"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-focus"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-focus shine--font-focus"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Primary"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-primary"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-primary shine--font-primary"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Success"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-success"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-success shine--font-success"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Info"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-info"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-info shine--font-info"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Warning"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-warning"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-warning shine--font-warning"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Danger"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"shine--font-danger"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},r.default.createElement("div",{className:"shine--bg-inverse-danger shine--font-danger"},"\u8fd9\u662f\u793a\u4f8b\u6587\u5b57"))))),r.default.createElement(m.MDXTag,{name:"h2",components:t,props:{id:"\u5e94\u7528\u573a\u666f"}},"\u5e94\u7528\u573a\u666f"),r.default.createElement(m.MDXTag,{name:"p",components:t},"\u8272\u5f69\u7ba1\u7406\u5728 Shine Desigin \u4e2d\u62e5\u6709\u5e7f\u6cdb\u7684\u5e94\u7528\u573a\u666f\uff0c\u5728\u5f88\u591a\u7ec4\u4ef6\u4e2d\uff0c\u5747\u6709\u8272\u5f69\u7684\u914d\u7f6e\u9009\u9879\uff0c\u5305\u62ec\u4e14\u4e0d\u9650\u4e8e\uff1a"),r.default.createElement(m.MDXTag,{name:"ul",components:t},r.default.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"\u6309\u94ae / \u6309\u94ae\u7ec4"),r.default.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"\u8d85\u7ea7\u94fe\u63a5"),r.default.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"\u9009\u9879\u5361")),r.default.createElement(m.MDXTag,{name:"p",components:t},"\u82e5\u65e0\u7279\u6b8a\u8bf4\u660e\uff0c\u5173\u4e8e\u8fd9\u4e9b\u914d\u7f6e\u9879\uff0c\u5747\u53ef\u8bbe\u7f6e\u57fa\u7840\u8272\u5f69\u6216\u53cd\u8272\uff0c\u4e3b\u8981\u53ef\u9009\u503c\u6709\uff1a"),r.default.createElement(m.MDXTag,{name:"table",components:t},r.default.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u57fa\u7840\u8272\u5f69"),r.default.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"\u53cd\u8272"))),r.default.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"brand"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-brand")),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"grace"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-grace")),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"metal"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-metal")),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"light"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-light")),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"focus"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-focus")),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"primary"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-primary")),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"success"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-success")),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"info"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-info")),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"warning"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-warning")),r.default.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"danger"),r.default.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"inverse-danger")))),r.default.createElement(m.MDXTag,{name:"h2",components:t,props:{id:"faq"}},"FAQ"),r.default.createElement(m.MDXTag,{name:"h4",components:t,props:{id:"\u9884\u8bbe\u7684\u989c\u8272\u65e0\u6cd5\u6ee1\u8db3\u6211\u7684\u9700\u6c42\uff0c\u80fd\u5426\u81ea\u5b9a\u4e49\u8272\u5f69\uff1f"}},"\u9884\u8bbe\u7684\u989c\u8272\u65e0\u6cd5\u6ee1\u8db3\u6211\u7684\u9700\u6c42\uff0c\u80fd\u5426\u81ea\u5b9a\u4e49\u8272\u5f69\uff1f"),r.default.createElement(m.MDXTag,{name:"p",components:t},"\u7b54\uff1a\u53ef\u4ee5\uff0c\u6211\u4eec\u9884\u7559\u4e86\u8272\u5f69\u914d\u7f6e\u6587\u4ef6\uff0c\u8bf7\u53c2\u8003 ",r.default.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"./custom"}},"\u4e3b\u9898\u5b9a\u5236")," \u3002"))}}])&&s(n.prototype,a),c&&s(n,c),t}();t.default=f,f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-color-index.a8c65ce19514f2f8963b.js.map