(this["webpackJsonpuser-management"]=this["webpackJsonpuser-management"]||[]).push([[0],[,,,,,,,,,function(e,t,s){e.exports=s(17)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(6),i=s.n(r);s(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=s(8),c=s(1),o=s(2),u=s(5),d=s(4),h=s(3),m=(s(15),0);var p=function(){return setInterval((function(){m>99&&(m=0),m++}),200),n.a.createElement("div",null,n.a.createElement("div",{id:"countDisplay"}),n.a.createElement("img",{src:"loader.gif",id:"loader"}))},f=(s(16),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return n.a.createElement("tr",{key:this.props.user.id,id:this.props.user.id}," ",this.props.user.id,n.a.createElement("td",{onClick:function(){e.props.selectUser(e.props.user["Display Name"])}},this.props.user["Display Name"]," "),n.a.createElement("td",null," ",n.a.createElement("img",{src:"delete.png",className:"btn-del",onClick:function(){window.confirm("Are you sure to delete this user?")&&e.props.deleteUser(e.props.user["Display Name"])}})),n.a.createElement("td",null))}}]),s}(n.a.Component)),v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return n.a.createElement("ul",null," Selected User Details :",n.a.createElement("li",null,"Name: ",this.props.selectedUser["Display Name"]),n.a.createElement("li",null,"Email Id: ",this.props.selectedUser["E-mail Address"]),n.a.createElement("li",null,"Contact: ",this.props.selectedUser["Home Phone"]),n.a.createElement("li",null,"City: ",this.props.selectedUser["Home City"]),n.a.createElement("li",null,"Compny Name: ",this.props.selectedUserOrganization))}}]),s}(n.a.Component),y=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).userDetails=null,e.state={userList:null,isData:!1,displayDetails:!1,filtered:null,isFilter:!1},e.searchList=e.searchList.bind(Object(u.a)(e)),e}return Object(o.a)(s,[{key:"searchList",value:function(e){var t=[];t=""!==e.target.value?this.state.userList.filter((function(t){var s=t["Display Name"].toLowerCase(),a=e.target.value.toLowerCase();return s.includes(a)})):this.state.userList,this.setState({filtered:t,isFilter:!0})}},{key:"getUsers",value:function(){var e=this;fetch("./contacts_file.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({userList:t,isData:!0})}))}},{key:"deleteUser",value:function(e){this.newList=this.state.userList.filter((function(t){return t["Display Name"]!==e})),this.setState({userList:this.newList})}},{key:"selectUser",value:function(e){this.selectedUser=this.state.userList.find((function(t){return t["Display Name"]===e})),this.setState({displayDetails:!0})}},{key:"addUser",value:function(){var e=this;console.log("add user"+document.querySelector(".user-list"));var t=window.prompt("Please enter name"),s=this.state.userList.length+1;console.log(this.state.userList.length),fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify({id:s,name:t,username:"Harshada",email:"harsh@april.biz",address:{street:"Boisar tarapur",suite:"Apt. Nh",city:"Mumbai",zipcode:"401504-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"55865-881125-255",website:"hahhahye.org",company:{name:"Radheya-Foundation",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({userList:[].concat(Object(l.a)(e.state.userList),[t])}),console.log(e.state.userList)}))}},{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"user-list"},n.a.createElement("input",{type:"text",className:"input",onChange:this.searchList,placeholder:"Search..."}),this.state.isData?this.state.isFilter?this.state.filtered.map((function(t){return n.a.createElement(f,{user:t,selectUser:e.selectUser.bind(e),deleteUser:e.deleteUser.bind(e)})})):this.state.userList.map((function(t){return n.a.createElement(f,{user:t,selectUser:e.selectUser.bind(e),deleteUser:e.deleteUser.bind(e)})})):n.a.createElement(p,null),n.a.createElement("button",{onClick:this.addUser.bind(this)}," Add User ")),n.a.createElement("div",{className:"user-details"},this.state.displayDetails?n.a.createElement(v,{selectedUser:this.selectedUser}):n.a.createElement("div",null,"Select any user to see details")))}}]),s}(n.a.Component);var E=function(){return n.a.createElement("div",{class:"user-container"},n.a.createElement(y,null))};i.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d7f3b148.chunk.js.map