(this["webpackJsonppicture-analyzer"]=this["webpackJsonppicture-analyzer"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports={wrapper:"Form_wrapper__1AmGU",report:"Form_report__3Ot_8",comment:"Form_comment__2KI4w",list:"Form_list__1WiVP",check:"Form_check__omd4V",controls:"Form_controls__1FWR-",button:"Form_button__RHA3Y"}},function(e,t,a){e.exports={button:"Button_button__3nxx8",buttonLight:"Button_buttonLight__2uSbz",buttonDark:"Button_buttonDark__Gjr1R",buttonBordered:"Button_buttonBordered__fj2rH",spinner:"Button_spinner__2AOZZ",buttonLarge:"Button_buttonLarge__1XMgE",buttonAdd:"Button_buttonAdd__1WYKE",buttonDisabled:"Button_buttonDisabled__3gSkI"}},function(e,t,a){e.exports={wrapper:"ModalSetup_wrapper__-Lhsc",buttonClose:"ModalSetup_buttonClose__1mLhn",icon:"ModalSetup_icon__1zyre",formWrapper:"ModalSetup_formWrapper__iW0xt",input:"ModalSetup_input__Yo7SB",buttonSubmit:"ModalSetup_buttonSubmit__1uMPA"}},function(e,t,a){e.exports={container:"Auth_container__11OP3",wrapper:"Auth_wrapper__2HxyD",heading:"Auth_heading__2loVM",input:"Auth_input__27nEt",button:"Auth_button__5OR4v",error:"Auth_error__1tNPL"}},function(e,t,a){e.exports={container:"Setup_container__3sz9-",wrapper:"Setup_wrapper__1yPVA",buttonSetup:"Setup_buttonSetup__2N6FI",icon:"Setup_icon__2wgBY",count:"Setup_count__1jaUR",name:"Setup_name__3CSWL"}},function(e,t,a){e.exports={header:"Header_header__12xjA",wrapper:"Header_wrapper__3Q00X",title:"Header_title__12j-E",type:"Header_type__2l7JN",clinic:"Header_clinic__3c9h6",date:"Header_date__8b83Y"}},,,,,,,,,function(e,t,a){e.exports={input:"Input_input__36TkE",inputError:"Input_inputError__1U5Wr",inputResult:"Input_inputResult__1t6ul",inputTextarea:"Input_inputTextarea__3r3ky"}},,,,function(e,t,a){e.exports={input:"Checkbox_input__26CFu",iconCheck:"Checkbox_iconCheck__vWjtH"}},,,,,,function(e,t,a){e.exports={heading:"Heading_heading__2zOZ6",subheading:"Heading_subheading__1Z7rp"}},,function(e,t,a){e.exports={modal:"Modal_modal__3sPSj",modalOpened:"Modal_modalOpened__E_Rd5",showModal:"Modal_showModal__rKsNx",hideModal:"Modal_hideModal__2r5v9"}},,,,function(e,t){},,function(e,t,a){e.exports={wrapper:"Container_wrapper__3hiM8"}},,function(e,t,a){e.exports={label:"ErrorMessage_label__3Sm7U"}},,,function(e,t,a){e.exports=a(69)},,,,,,function(e,t,a){},,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=(a(54),a(55),a(23)),i=a(5);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(29),s={config:{baseSize:10,baseWidth:"1280",widthLimit:"1920"},curFontSize:10};var m=a(3),d=function(e,t){return function(a,n){a({type:"TOGGLE_MODAL_VISIBILITY_STATUS",payload:{content:e,status:"boolean"===typeof t?t:!n.isModalVisible}})}},p=function(e){var t=null;return function(){var a=this,n=arguments;t&&clearTimeout(t),t=setTimeout((function(){e.apply(a,n)}),250)}},_=function(e){return e<10?"0".concat(e):"".concat(e)},b=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Object.assign.apply(Object,[{},e].concat(a))},h=Object(m.f)((function(e){var t=e.children,a=Object(i.c)((function(e){return e.elastic.config})),r=Object(i.b)();Object(n.useEffect)((function(){return c(),window.addEventListener("resize",p(c)),window.addEventListener("orientationchange",p(c)),function(){window.removeEventListener("resize",p(c)),window.removeEventListener("orientationchange",p(c))}}));var c=function(){var e=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,t=document.documentElement,n=a.widthLimit,c=a.baseWidth,l=a.baseSize,o=e;n&&(o=Math.min(e,n));var i=o/c*l;r({type:"SET_CURRENT_FONT_SIZE",payload:i}),t.style.fontSize=i+"px"};return t})),f=a(10),E=a(16),v=a.n(E),C=a(44),y=a.n(C),L=a(4),O=a.n(L),g=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:O()(y.a.wrapper,a)},t)},N=a(17),k=a.n(N),w=function(e){var t=e.className,a=Object(i.c)((function(e){return e.data.setup})),n=a.type,c=a.clinic;return r.a.createElement("header",{className:k.a.header},r.a.createElement("div",{className:O()(k.a.wrapper,t)},r.a.createElement("h1",{className:k.a.title},"\u0420\u0435\u043d\u0442\u0433\u0435\u043d \u0430\u0443\u0434\u0438\u0442",r.a.createElement("span",null,"\u0421\u0435\u0440\u0432\u0438\u0441 \u043e\u0446\u0435\u043d\u043a\u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u043d\u0438\u043c\u043a\u043e\u0432")),r.a.createElement("p",{className:k.a.type},"\u0422\u0438\u043f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 - ",r.a.createElement("span",null,n||"\u043d\u0435 \u0437\u0430\u0434\u0430\u043d")),r.a.createElement("div",{className:k.a.clinic},c||"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0438\u043d\u0438\u043a\u0438 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e"),r.a.createElement("p",{className:k.a.date},function(e){var t=new Date(e),a=_(t.getDate()),n=_(t.getMonth()+1),r=t.getFullYear(),c=_(t.getHours()),l=_(t.getMinutes());return{formattedDate:"".concat(a,".").concat(n,".").concat(r),formattedTime:"".concat(c,":").concat(l)}}((new Date).getTime()).formattedDate)))},j=a(12),S=a.n(j),x=a(22),M=a(1),T=a(30),V=a.n(T),z=function(e){var t=e.className;return r.a.createElement("svg",{className:t,viewBox:"0 0 12 9",strokeWidth:"2",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("g",{transform:"translate(-386.000000, -382.000000)"},r.a.createElement("g",{transform:"translate(381.000000, 376.000000)"},r.a.createElement("polyline",{points:"6 11.0478516 9.4397352 14 15.7519531 7"}))))},A=function(e){var t=e.id,a=e.className,n=e.register,c=e.name,l=e.defaultValue,o=e.isDisabled,i=e.label;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:O()(V.a.input,Object(M.a)({},V.a.checkboxDisabled,o)),type:"checkbox",id:t,name:c,ref:n,defaultChecked:l}),r.a.createElement("label",{className:a,htmlFor:t},r.a.createElement("span",null,i),r.a.createElement(z,{className:V.a.iconCheck})))},B="heading",I="subheading",D="result",F="button",R="add",W="dark",U="light",H="bordered",Z="standard",P="large",Y=a(36),G=a.n(Y),J=function(e){var t,a=e.className,n=e.label,c=e.type,l=void 0===c?B:c,o=l===B?"h2":"h3";return r.a.createElement(o,{className:O()(a,(t={},Object(M.a)(t,G.a.heading,l===B),Object(M.a)(t,G.a.subheading,l===I),t))},n)},K=a(13),X=a.n(K),Q=function(e){var t=e.className;return r.a.createElement("svg",{className:t,viewBox:"0 0 128 128"},r.a.createElement("g",null,r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"1"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.2",transform:"rotate(30 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.2",transform:"rotate(60 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.2",transform:"rotate(90 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.2",transform:"rotate(120 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.3",transform:"rotate(150 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.4",transform:"rotate(180 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.5",transform:"rotate(210 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.6",transform:"rotate(240 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.7",transform:"rotate(270 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.8",transform:"rotate(300 64 64)"}),r.a.createElement("path",{d:"M59.6 0h8v40h-8V0z",fillOpacity:"0.9",transform:"rotate(330 64 64)"}),r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64",calcMode:"discrete",dur:"1080ms",repeatCount:"indefinite"})))},$=function(e){var t,a=e.className,n=e.label,c=e.onClick,l=e.palette,o=void 0===l?U:l,i=e.buttonType,u=void 0===i?F:i,s=e.size,m=void 0===s?Z:s,d=e.isLoading,p=e.isDisabled;return r.a.createElement("button",{className:O()(X.a.button,a,(t={},Object(M.a)(t,X.a.buttonLight,o===U),Object(M.a)(t,X.a.buttonDark,o===W),Object(M.a)(t,X.a.buttonBordered,o===H),Object(M.a)(t,X.a.buttonLarge,m===P),Object(M.a)(t,X.a.buttonAdd,u===R),Object(M.a)(t,X.a.buttonDisabled,d||p),t)),onClick:c,type:u},d&&r.a.createElement(Q,{className:X.a.spinner}),n)},q=a(48),ee=a(26),te=a.n(ee),ae=function(e){var t,a=e.className,n=e.defaultValue,c=e.id,l=e.isDisabled,o=void 0!==l&&l,i=e.isError,u=e.name,s=e.onClick,m=e.placeholder,d=void 0===m?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435":m,p=e.registerInForm,_=e.style,b=e.type,h=void 0===b?"text":b,f=Object(q.a)(e,["className","defaultValue","id","isDisabled","isError","name","onClick","placeholder","registerInForm","style","type"]),E="textarea"===h?"textarea":"input";return r.a.createElement(E,Object.assign({className:O()(te.a.input,a,(t={},Object(M.a)(t,te.a.inputResult,_===D),Object(M.a)(t,te.a.inputTextarea,"textarea"===h),Object(M.a)(t,te.a.inputError,i),t)),defaultValue:n,id:c,name:u,onClick:s,placeholder:d,ref:p,type:h,disabled:o},f))},ne=function(e){var t=e.defaultData,a=e.handleClickNext,n=e.handleClickReport,c=e.isReportDisabled,l=Object(x.a)({defaultValues:t}),o=l.register,i=l.reset,s=l.handleSubmit;return r.a.createElement("div",{className:S.a.wrapper},r.a.createElement(J,{type:I,label:"\u041a\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0430:"}),r.a.createElement("form",{onSubmit:s((function(e){a(e,(function(){return i(Object(u.a)({},t))}))}))},r.a.createElement("ol",{className:S.a.list},Object.keys(t).filter((function(e){return"id"!==e})).map((function(e,a){return r.a.createElement("li",{className:S.a.item,key:a},r.a.createElement(A,{register:o,className:S.a.check,id:"".concat(e),name:"".concat(e,".checked"),defaultValue:t[e].checked,label:t[e].label}))}))),r.a.createElement(ae,{className:S.a.comment,type:"textarea",registerInForm:o,name:"comment",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),r.a.createElement("div",{className:S.a.controls},r.a.createElement($,{className:O()(S.a.report,S.a.button),label:"\u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u0447\u0435\u0442",onClick:n,type:"button",isDisabled:c}),r.a.createElement($,{className:S.a.button,label:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u043d\u0438\u043c\u043e\u043a",buttonType:"submit"}))))},re=a(45),ce=a(37),le=a(14),oe=a.n(le),ie=function(e){var t=e.className;return r.a.createElement("svg",{className:t,viewBox:"0 0 512.001 512.001"},r.a.createElement("path",{d:"M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717\r L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859\r c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287\r l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285\r L284.286,256.002z"}))},ue=function(){var e=Object(i.c)((function(e){return e.data.setup})),t=e.type,a=e.clinic,n=e.reviewer,c=Object(x.a)(),l=c.register,o=c.handleSubmit,u=Object(i.b)();return r.a.createElement("div",{className:oe.a.wrapper},r.a.createElement("button",{className:oe.a.buttonClose,onClick:function(){u(d(null,!1))},type:"button"},"Close modal",r.a.createElement(ie,{className:oe.a.icon})),r.a.createElement(J,{type:I,label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0441\u0441\u0438\u0438"}),r.a.createElement("div",{className:oe.a.formWrapper},r.a.createElement("form",{onSubmit:o((function(e){var t;u({type:"SAVE_SETUP",payload:{clinic:(t=e).clinic,reviewer:t.reviewer,type:t.type}}),u(d(null,!1))}))},r.a.createElement(ae,{className:oe.a.input,registerInForm:l,name:"clinic",defaultValue:a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0438\u043d\u0438\u043a\u0438"}),r.a.createElement(ae,{className:oe.a.input,registerInForm:l,name:"reviewer",defaultValue:n,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0435\u0433\u043e"}),r.a.createElement(ae,{className:oe.a.input,registerInForm:l,name:"type",defaultValue:t,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0438\u043f \u0430\u043d\u0430\u043b\u0438\u0437\u0430"}),r.a.createElement($,{className:oe.a.buttonSubmit,label:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonType:"submit"}))))},se=a(38),me=a.n(se),de=a(39),pe=function(){var e=Object(n.useRef)(null),t=Object(i.c)((function(e){return e.ui.modal})),a=Object(i.b)(),c=t.isVisible,l=t.content;return Object(n.useEffect)((function(){var t=function(e){"Escape"!==e.key&&27!==e.keyCode&&"Esc"!==e.key||a(d(null,!1))};return c&&(document.addEventListener("keydown",t),Object(de.b)(e.current,{reserveScrollBarGap:!0})),function(){document.removeEventListener("keydown",t),Object(de.a)()}}),[c,a]),r.a.createElement("div",{className:O()(me.a.modal,Object(M.a)({},me.a.modalOpened,c))},l&&r.a.createElement("div",{ref:function(t){return e.current=t}},l))},_e=function(e){var t=e.className;return r.a.createElement("svg",{className:t,viewBox:"0 0 19 19"},r.a.createElement("g",{transform:"translate(-990.000000, -97.000000)",fillRule:"nonzero",strokeWidth:"0.4"},r.a.createElement("g",{transform:"translate(991.000000, 98.000000)"},r.a.createElement("path",{d:"M9.03344141,17 L7.96652539,17 C7.10360937,17 6.4015293,16.2979531 6.4015293,15.4350371 L6.4015293,15.0740859 C6.03466797,14.9568789 5.67823242,14.8089258 5.33580859,14.6317207 L5.08001172,14.8875176 C4.46047461,15.5078184 3.46806641,15.489623 2.86652539,14.8872852 L2.11244922,14.1332422 C1.5098457,13.5313027 1.49251367,12.5392266 2.11264844,11.9197559 L2.36824609,11.6641582 C2.19104102,11.3217344 2.04312109,10.9653652 1.92588086,10.5984375 L1.56496289,10.5984375 C0.702080078,10.5984375 0,9.89639062 0,9.03347461 L0,7.96652539 C0,7.10360937 0.702080078,6.4015625 1.56499609,6.4015625 L1.92591406,6.4015625 C2.0431543,6.03466797 2.19107422,5.67826562 2.3682793,5.3358418 L2.11248242,5.08007812 C1.49271289,4.46097266 1.5098125,3.46879687 2.11268164,2.8665918 L2.86682422,2.11248242 C3.46975977,1.5087168 4.46193555,1.49364258 5.08027734,2.11268164 L5.3358418,2.36824609 C5.67826562,2.19107422 6.03470117,2.04312109 6.4015625,1.92588086 L6.4015625,1.56496289 C6.4015625,0.702046875 7.10360937,0 7.96655859,0 L9.03347461,0 C9.89639062,0 10.5984375,0.702046875 10.5984375,1.56496289 L10.5984375,1.92591406 C10.9652988,2.04312109 11.3217344,2.19107422 11.6641582,2.3682793 L11.9199551,2.11248242 C12.5394922,1.49218164 13.5319004,1.51037695 14.1334414,2.11271484 L14.8875176,2.86675781 C15.4901211,3.46869727 15.5074531,4.46077344 14.8873184,5.08024414 L14.6317207,5.3358418 C14.8089258,5.67826562 14.9568457,6.03463477 15.0740859,6.4015625 L15.4350039,6.4015625 C16.2979199,6.4015625 17,7.10360937 17,7.96652539 L17,9.03347461 C17,9.89639062 16.2979199,10.5984375 15.4350039,10.5984375 L15.0740859,10.5984375 C14.9568457,10.965332 14.8089258,11.3217344 14.6317207,11.6641582 L14.8875176,11.9199551 C15.5072871,12.5390605 15.4901875,13.5312363 14.8873184,14.1334414 L14.1331758,14.8875508 C13.5302402,15.4913164 12.5380645,15.5063906 11.9197227,14.8873516 L11.6641582,14.6317871 C11.3217344,14.808959 10.9652988,14.9569121 10.5984375,15.0741523 L10.5984375,15.4351035 C10.5984375,16.2979531 9.89639062,17 9.03344141,17 Z M5.50232227,13.5857227 C5.97802344,13.8670527 6.49001562,14.0795859 7.02405469,14.2174121 C7.24399219,14.2741562 7.39765625,14.4725117 7.39765625,14.6996543 L7.39765625,15.4350371 C7.39765625,15.748707 7.65288867,16.0039062 7.96655859,16.0039062 L9.03347461,16.0039062 C9.34714453,16.0039062 9.60237695,15.748707 9.60237695,15.4350371 L9.60237695,14.6996543 C9.60237695,14.4725117 9.75604102,14.2741562 9.97597852,14.2174121 C10.5100176,14.0795859 11.0220098,13.8670527 11.4977109,13.5857227 C11.6934434,13.4699766 11.9426328,13.5014531 12.1034355,13.6622559 L12.6243262,14.1831797 C12.8489121,14.4080312 13.2095645,14.4028184 13.4286387,14.1834121 L14.1832461,13.4288379 C14.4017891,13.2105605 14.4090937,12.8498418 14.1834453,12.6244922 L13.6623223,12.1033691 C13.5015527,11.9425996 13.4700762,11.693377 13.5857891,11.4976777 C13.8671191,11.0220098 14.0796191,10.5100176 14.2174453,9.97594531 C14.2742227,9.75600781 14.4725781,9.60237695 14.6996875,9.60237695 L15.4350371,9.60237695 C15.748707,9.60237695 16.0039395,9.34717773 16.0039395,9.03350781 L16.0039395,7.96655859 C16.0039395,7.65288867 15.748707,7.39768945 15.4350371,7.39768945 L14.6996875,7.39768945 C14.4725449,7.39768945 14.2742227,7.24402539 14.2174453,7.02412109 C14.0796191,6.49004883 13.8670859,5.97805664 13.5857891,5.50238867 C13.4700762,5.30668945 13.5015527,5.0574668 13.6623223,4.89669727 L14.1832461,4.37577344 C14.4084297,4.15085547 14.4025527,3.79026953 14.1834453,3.57142773 L13.4289043,2.81688672 C13.2101953,2.59787891 12.8494766,2.5914707 12.6245586,2.8166875 L12.1034687,3.33781055 C11.9426992,3.49861328 11.6934102,3.53008984 11.4977441,3.41434375 C11.022043,3.13301367 10.5100508,2.92048047 9.97601172,2.7826543 C9.75607422,2.72591016 9.60241016,2.52755469 9.60241016,2.30041211 L9.60241016,1.56496289 C9.60241016,1.25129297 9.34717773,0.99609375 9.03350781,0.99609375 L7.9665918,0.99609375 C7.65292187,0.99609375 7.39768945,1.25129297 7.39768945,1.56496289 L7.39768945,2.3003457 C7.39768945,2.52748828 7.24402539,2.72584375 7.02408789,2.78258789 C6.49004883,2.92041406 5.97805664,3.13294727 5.50235547,3.41427734 C5.30658984,3.52999023 5.05740039,3.49851367 4.89663086,3.33774414 L4.37574023,2.81682031 C4.1511543,2.59196875 3.79046875,2.59718164 3.57142773,2.81658789 L2.81682031,3.57116211 C2.59827734,3.78943945 2.59097266,4.150125 2.81662109,4.37550781 L3.33774414,4.89663086 C3.49851367,5.05740039 3.52999023,5.30662305 3.41427734,5.50232227 C3.13294727,5.97799023 2.92044727,6.48998242 2.78262109,7.02405469 C2.72584375,7.24399219 2.52748828,7.39762305 2.30037891,7.39762305 L1.56499609,7.39762305 C1.25132617,7.39765625 0.99609375,7.65285547 0.99609375,7.96652539 L0.99609375,9.03347461 C0.99609375,9.34714453 1.25132617,9.60234375 1.56499609,9.60234375 L2.3003457,9.60234375 C2.52748828,9.60234375 2.72581055,9.75600781 2.78258789,9.97591211 C2.92041406,10.5099844 3.13294727,11.0219766 3.41424414,11.4976445 C3.52995703,11.6933437 3.49848047,11.9425664 3.33771094,12.1033359 L2.81678711,12.6242598 C2.59160352,12.8491777 2.59748047,13.2097637 2.81658789,13.4286055 L3.57112891,14.1831465 C3.78983789,14.4021543 4.15055664,14.4085625 4.37547461,14.1833457 L4.89656445,13.6622227 C5.0150332,13.5437871 5.2615,13.4432812 5.50232227,13.5857227 Z"}),r.a.createElement("path",{d:"M8.5,12.3636364 C6.36955484,12.3636364 4.63636364,10.6304105 4.63636364,8.5 C4.63636364,6.36958952 6.36955484,4.63636364 8.5,4.63636364 C10.6304452,4.63636364 12.3636364,6.36958952 12.3636364,8.5 C12.3636364,10.6304105 10.6304452,12.3636364 8.5,12.3636364 Z M8.5,5.40909091 C6.79563324,5.40909091 5.40909091,6.79567121 5.40909091,8.5 C5.40909091,10.2043288 6.79567121,11.5909091 8.5,11.5909091 C10.2043288,11.5909091 11.5909091,10.2043288 11.5909091,8.5 C11.5909091,6.79567121 10.2043668,5.40909091 8.5,5.40909091 Z"}))))},be={metal:{checked:!1,label:"\u041c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"},wrongBite:{checked:!1,label:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u043f\u0440\u0438\u043a\u0443\u0448\u0435\u043d \u0431\u043b\u043e\u043a"},frankfurt:{checked:!1,label:"\u041b\u0438\u043d\u0438\u044f \u0424\u0440\u0430\u043d\u043a\u0444\u0443\u0440\u0442\u0430"},headRotations:{checked:!1,label:"\u041f\u043e\u0432\u043e\u0440\u043e\u0442 \u0433\u043e\u043b\u043e\u0432\u044b"},headIncline:{checked:!1,label:"\u041d\u0430\u043a\u043b\u043e\u043d \u0433\u043e\u043b\u043e\u0432\u044b"},roundBack:{checked:!1,label:"\u0421\u0443\u0442\u0443\u043b\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0441\u044a\u0435\u043c\u043a\u0435"},chin:{checked:!1,label:"\u041f\u043e\u0434\u0431\u043e\u0440\u043e\u0434\u043e\u043a \u043d\u0435 \u043d\u0430 \u043e\u043f\u043e\u0440\u0435"},sharpness:{checked:!1,label:"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043d\u0435\u0440\u0435\u0437\u043a\u043e\u0441\u0442\u044c"},tongue:{checked:!1,label:"\u042f\u0437\u044b\u043a \u043d\u0435 \u043f\u0440\u0438\u0436\u0430\u0442"},expositionErrors:{checked:!1,label:"\u041e\u0448\u0438\u0431\u043a\u0438 \u044d\u043a\u0441\u043f\u043e\u0437\u0438\u0446\u0438\u0438"},expositionBroken:{checked:!1,label:"\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u0430\u044f \u044d\u043a\u0441\u043f\u043e\u0437\u0438\u0446\u0438\u044f"}},he=function(e){return function(t){var a=Object(i.b)();return Object(n.useEffect)((function(){a(d(null,!1))}),[a,t.location.pathname]),r.a.createElement(r.a.Fragment,null,r.a.createElement(e,t),r.a.createElement(pe,null))}}((function(){var e=Object(i.c)((function(e){return e.data.setup})).reviewer,t=Object(n.useState)([be]),a=Object(f.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(0),u=Object(f.a)(o,2),s=u[0],m=u[1],p=Object(i.b)();return r.a.createElement(g,{className:v.a.container},r.a.createElement(w,null),r.a.createElement("div",{className:v.a.wrapper},r.a.createElement("span",{className:v.a.count},"\u0412\u0441\u0435\u0433\u043e \u0441\u043d\u0438\u043c\u043a\u043e\u0432 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e: ".concat(c.length-1)),r.a.createElement("p",{className:v.a.name},e)),r.a.createElement("button",{className:v.a.buttonSetup,onClick:function(){p(d(r.a.createElement(ue,null),!0))},type:"button"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438",r.a.createElement(_e,{className:v.a.icon})),r.a.createElement(ne,{defaultData:c[s],handleClickNext:function(e,t){l((function(t){var a=[].concat(t);return a[s]=e,a.push(be),a})),m((function(e){return e+1})),t&&t()},handleClickReport:function(){console.log(c);var e=function(){var e={};return Object.values(be).forEach((function(t){e[t.label]=0})),e}();c.forEach((function(t){Object.keys(be).forEach((function(a){t[a].checked&&(console.log(be[a].label),e[be[a].label]+=1)}))}));var t={Sheets:{data:ce.utils.json_to_sheet(Object.entries(e))},SheetNames:["data"]},a=ce.write(t,{bookType:"xlsx",type:"array"}),n=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});re.saveAs(n,"test.xlsx")},index:s,isReportDisabled:0===s}))})),fe=function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",component:he}))},Ee=(a(15),a(46),Object(m.f)((function(e){var t=e.history;return Object(n.useEffect)((function(){0}),[!0,t]),r.a.createElement(h,null,r.a.createElement(fe,null))}))),ve=a(47),Ce=a(19),ye={modal:{isVisible:!1,content:null}};var Le={setup:{clinic:"",reviewer:"",type:""}};var Oe={isUserAuthenticated:!1};var ge=Object(o.c)({elastic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_FONT_SIZE":return Object(u.a)({},e,{curFontSize:t.payload});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_MODAL_VISIBILITY_STATUS":return b(e,{modal:{isVisible:t.payload.status,content:t.payload.content}});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_SETUP":return b(e,{setup:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_TO_AUTHENTICATED":return b(e,{isUserAuthenticated:!0});default:return e}}}),Ne=Object(o.d)(ge,Object(o.a)(ve.a)),ke=r.a.createElement(i.a,{store:Ne},r.a.createElement(Ce.a,null,r.a.createElement(Ee,null)));l.a.render(ke,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[49,1,2]]]);
//# sourceMappingURL=main.bc69e0e0.chunk.js.map