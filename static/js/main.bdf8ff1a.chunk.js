(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),c=(a(31),a(3)),i=a(4),s=a(6),u=a(5),m=a(7),h=(a(32),a(11)),d=a(12),g=a(13),p=a.n(g),b=(a(33),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return sessionStorage.getItem("authToken")?r.a.createElement(d.a,{to:"/home"}):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",{align:"center"},"ITB NIM Finder - Hendpraz"),r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("a",{href:"/#/login",className:"button1"},"Login"),r.a.createElement("a",{href:"/#/register",className:"button2"},"Register")))}}]),t}(n.Component)),f=a(14),E=a(1);function y(e,t){var a=[];for(var n in t){var r=encodeURIComponent(n),o=encodeURIComponent(t[n]);a.push(r+"="+o)}return a=a.join("&"),new Promise(function(t,n){fetch("https://api.stya.net/nim/"+e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:a}).then(function(e){return e.json()}).then(function(e){t(e)}).catch(function(e){n(e)})})}a(38);var v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){e.preventDefault(),a.setState(Object(f.a)({},e.target.name,e.target.value))},a.state={username:"",password:"",redirectToRefererrer:!1},a.login=a.login.bind(Object(E.a)(a)),a.onChange=a.onChange.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){sessionStorage.getItem("authToken")&&this.setState({redirectToReferrer:!0})}},{key:"login",value:function(){var e=this;y("login",{username:this.state.username,password:this.state.password}).then(function(t){if(0===t.code)sessionStorage.setItem("authToken",JSON.stringify(t.token)),e.setState({redirectToRefererrer:!0});else{alert("Something wrong!");var a=JSON.stringify(t);alert(a)}})}},{key:"render",value:function(){return sessionStorage.getItem("authToken")||this.state.redirectToReferrer?r.a.createElement(d.a,{to:"/home"}):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"Login-header"},r.a.createElement("h1",{align:"center"},"ITB NIM Finder"),r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("input",{name:"username",placeholder:"Enter username...",type:"text",maxLength:"20",onChange:this.onChange}),r.a.createElement("input",{name:"password",placeholder:"Enter password...",type:"password",onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",{align:"center"},"Masukkan username dan password.",r.a.createElement("br",null),"Belum daftar? ",r.a.createElement("a",{href:"/#/register",className:"App-link"},"Daftar di sini"))))}}]),t}(n.Component),O=(a(39),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){e.preventDefault(),a.setState(Object(f.a)({},e.target.name,e.target.value))},a.state={username:"",password:"",redirectToReferrer:!1},a.register=a.register.bind(Object(E.a)(a)),a.onChange=a.onChange.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){sessionStorage.getItem("authToken")&&this.setState({redirectToReferrer:!0})}},{key:"register",value:function(){y("register",{username:this.state.username,password:this.state.password}).then(function(e){if(0===e.code)alert("Registration success!");else if(-4===e.code)alert("Username already taken!");else{alert("Something went wrong!");var t=JSON.stringify(e);alert(t)}})}},{key:"render",value:function(){return sessionStorage.getItem("authToken")||this.state.redirectToReferrer?r.a.createElement(d.a,{to:"/home"}):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",{align:"center"},"ITB NIM Finder"),r.a.createElement("h1",{align:"center"},"REGISTER"),r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("form",{onSubmit:this.register},r.a.createElement("input",{name:"username",placeholder:"Enter new username...",type:"text",maxLength:"20",onChange:this.onChange}),r.a.createElement("input",{name:"password",placeholder:"Enter new password...",type:"password",onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Register"})),r.a.createElement("p",{align:"center"},"Masukkan username dan password baru Anda",r.a.createElement("br",null),"Sudah punya akun? ",r.a.createElement("a",{href:"/#/login",className:"App-link"},"Login di sini"))))}}]),t}(n.Component));a(40);function S(e,t){var a=t.slice(1,t.length-1);return new Promise(function(t,n){fetch(e,{method:"GET",headers:new Headers({"Auth-Token":a})}).then(function(e){return e.json()}).then(function(e){t(e)}).catch(function(e){n(e)})})}var T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).generateTableHead=a.generateTableHead.bind(Object(E.a)(a)),a.generateTable=a.generateTable.bind(Object(E.a)(a)),a.tableCreate=a.tableCreate.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"generateTableHead",value:function(e){for(var t=e.createTHead().insertRow(),a=["Nama","NIM TPB","NIM Jurusan","Program Studi"],n=0;n<4;n++){var r=document.createElement("th"),o=document.createTextNode(a[n]);r.appendChild(o),t.appendChild(r)}}},{key:"generateTable",value:function(e,t){var a=!0,n=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var c=o.value,i=e.insertRow();for(var s in c){var u=i.insertCell(),m=document.createTextNode(c[s]);u.appendChild(m)}}}catch(h){n=!0,r=h}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}}},{key:"tableCreate",value:function(){var e=document.querySelector("table");Object.keys(this.props.data[0]);this.generateTable(e,this.props.data),this.generateTableHead(e)}},{key:"render",value:function(){return 0!==this.props.data.length&&this.tableCreate(this.props.data),r.a.createElement("table",{id:"tableID"})}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){e.preventDefault(),a.setState(Object(f.a)({},e.target.name,e.target.value)),a.clearTable(),console.log(a.state)},a.onSearch=function(e){e.preventDefault();var t=a.state.query,n="https://api.stya.net/nim/";if(a.setState({pageNum:0}),a.toggleHide(),a.clearTable(),document.getElementById("notfound").innerHTML="",""!==t){var r=t.charCodeAt(0)-"0".charCodeAt(0);n=(n+=r>=0&&r<=9?"byid?query=":"byname?name=")+t+"&count=10";var o=sessionStorage.getItem("authToken");S(n,o).then(function(e){var t=e;if("OK"!==t.status){alert("Something wrong!");var r=JSON.stringify(e);alert(r),a.setState({redirectToReferrer:!0})}else{for(var o=t.payload,l=[],c=0;c<o.length;c++)l.push(JSON.parse(JSON.stringify(o[c])));if(0===l.length)a.clearTable(),console.log("HAHA"),document.getElementById("notfound").innerHTML="Tidak ada hasil yang ditemukan!",a.setState({JSONData:[]});else{a.clearTable();var i=n+"&page="+a.state.pageNum.toString();a.setState({JSONData:l,currQuery:i.slice(0,i.length-1)}),10===l.length?a.toggleShow():a.toggleHide()}}})}},a.nextPage=function(e){e.preventDefault(),a.setState({pageNum:a.state.pageNum+1}),a.clearTable(),S(a.state.currQuery+a.state.pageNum.toString(),sessionStorage.getItem("authToken")).then(function(e){var t=e;if("OK"!==t.status)alert("Something wrong!");else{for(var n=t.payload,r=[],o=0;o<n.length;o++)r.push(JSON.parse(JSON.stringify(n[o])));0===r.length?(a.clearTable(),document.getElementById("notfound").innerHTML="Tidak ada hasil yang ditemukan!",a.setState({JSONData:[]}),a.toggleHide()):(a.clearTable(),a.setState({JSONData:r}),10===r.length?a.toggleShow():(a.clearTable(),a.setState({pageNum:0}),a.toggleHide()))}})},a.state={query:"",JSONData:[],currQuery:"",pageNum:0,redirectToReferrer:!1},a.onChange=a.onChange.bind(Object(E.a)(a)),a.onSearch=a.onSearch.bind(Object(E.a)(a)),a.logout=a.logout.bind(Object(E.a)(a)),a.clearTable=a.clearTable.bind(Object(E.a)(a)),a.nextPage=a.nextPage.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){sessionStorage.getItem("authToken")||this.setState({redirectToReferrer:!0})}},{key:"componentDidMount",value:function(){this.toggleHide()}},{key:"clearTable",value:function(){for(var e=document.getElementById("tableID");e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"toggleHide",value:function(){document.getElementById("nextButton").style.display="none"}},{key:"toggleShow",value:function(){document.getElementById("nextButton").style.display="block"}},{key:"logout",value:function(){sessionStorage.setItem("authToken",""),sessionStorage.clear(),this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){return this.state.redirectToReferrer?r.a.createElement(d.a,{to:"/login"}):r.a.createElement("div",{className:"Home","background-color":"#282c34"},r.a.createElement("header",{className:"Home-header"},r.a.createElement("h2",{align:"center"},"ITB NIM Finder")),r.a.createElement("body",{id:"bodypart",className:"Home-body"},r.a.createElement("form",{className:"Search",onSubmit:this.onSearch},r.a.createElement("input",{name:"query",placeholder:"Masukkan Nama/NIM",type:"text",onChange:this.onChange}),r.a.createElement("button",{type:"submit"},"Search")),r.a.createElement("p",{id:"notfound"}),r.a.createElement("button",{id:"nextButton",onClick:this.nextPage},"NEXT"),r.a.createElement("br",null),r.a.createElement(T,{id:"tableID",data:this.state.JSONData}),r.a.createElement("br",null)),r.a.createElement("footer",{className:"Home-footer"},"Masukkan Nama atau NIM. Salah satu saja",r.a.createElement("br",null),'Contoh "Hendry", "13517105"',r.a.createElement("br",null),r.a.createElement("button",{onClick:this.logout},"Logout")))}}]),t}(n.Component),k=(a(41),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"404 Page Not Found")),r.a.createElement("footer",null,r.a.createElement("h3",null,"ITB NIM Finder - Hendpraz")))}}]),t}(n.Component)),j=function(){return r.a.createElement(h.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/login",component:v}),r.a.createElement(d.b,{path:"/register",component:O}),r.a.createElement(d.b,{path:"/home",component:N}),r.a.createElement(d.b,{path:"/",component:b}),r.a.createElement(d.b,{path:"*",component:k})))},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={appName:"ITB NIM Finder",home:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,{name:this.state.appName}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.bdf8ff1a.chunk.js.map