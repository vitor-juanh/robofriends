(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(13),a(1)),l=a(2),i=a(4),h=a(3),u=a(5),m=(a(14),function(e){var t=e.id,a=e.name,o=e.email;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?100x100")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,o))))}),d=function(e){var t=e.robots,a=t.map((function(e,a){return r.a.createElement(m,{key:e.id,id:t[a].id,name:t[a].name,email:t[a].email})}));return r.a.createElement("div",{className:"tc"},a)},b=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid white",height:"600px"}},e.children)},E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{className:"tc"},"Oopsi, theres an error"):this.props.children}}]),t}(n.Component),p=(a(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,o=!t.length,c=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return o?r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"tc"},r.a.createElement("h1",{className:"f2"},"Robofriends")),r.a.createElement("h1",{className:"tc f2"},"loading...")):r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"tc"},r.a.createElement("h1",{className:"f2"},"Robofriends"),r.a.createElement(b,{searchChange:this.onSearchChange})),r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(d,{robots:c}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.b9604251.chunk.js.map