(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{39:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),l=c.n(s),n=c(25),i=c.n(n),o=(c(39),c(29)),r=c(2),m=function(){return Object(a.jsx)("nav",{className:"nav",children:Object(a.jsx)("a",{className:"nav-link active",href:"/",children:"Employee Directory"})})},d=c(31),j=c(10),h=c(26),b=c(27),p=c(33),u=c(32),y=c(13),v=function(e){function t(e,t,c){e=Math.ceil(e),t=Math.ceil(t);var a=Math.floor(Math.random()*(t-e)+e),s=String(a).length;if(Number(s)<c)for(var l=c-Number(s),n=0;n<l;n++){a=String(a)+Math.floor(10*Math.random())}return a}return Object(a.jsxs)("div",{className:"row item-row col-md-12 employee-row",children:[Object(a.jsx)("div",{className:"col-md-1",children:e.id}),Object(a.jsx)("div",{className:"col-md-2",children:e.employee_name}),Object(a.jsx)("div",{className:"col-md-5",children:function(e){var t=e.employee_name.split(" ");return"".concat(t[0],".").concat(t[1],"@gmail.com")}(e)}),Object(a.jsx)("div",{className:"col-md-2",children:function(){var e=t(100,999,3),c=t(0,999,3),a=t(0,9999,4);return"".concat(e,"-").concat(c,"-").concat(a)}()}),Object(a.jsx)("div",{className:"col-md-2",children:e.employee_age})]})},O=function(e){return console.log("EmployeeTable fired"),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("h3",{className:"employee-count",children:["There are ",e.employees.length," employees"]})}),Object(a.jsxs)("div",{className:"row list-headers",children:[Object(a.jsx)("div",{className:"col-md-1",children:"ID #"}),Object(a.jsx)("div",{className:"col-md-2",children:"Full Name"}),Object(a.jsx)("div",{className:"col-md-5",children:"Email Address"}),Object(a.jsx)("div",{className:"col-md-2",children:"Phone Number"}),Object(a.jsx)("div",{className:"col-md-2",children:"Age"}),Object(a.jsx)("div",{className:"employee-info-row col-sm-12",children:e.employees.map((function(e){return Object(s.createElement)(v,Object(y.a)(Object(y.a)({},e),{},{key:e.id}))}))})]})]})},f=c(28),x=c.n(f),g=function(e){Object(p.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(h.a)(this,c);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],employeesDisplayed:[],filter:""},e.resetFilter=function(){e.setState({employeesDisplayed:e.state.employees,filter:""})},e.apiCall=function(){x.a.get("http://dummy.restapiexample.com/api/v1/employees").then((function(t){console.log(t),e.setState({employees:t.data.data,employeesDisplayed:t.data.data})}))},e.handleChange=function(t){var c=t.target,a=c.name,s=c.value;console.log("handle change fired: "+String(a)+" "+String(s)),e.setState(Object(j.a)({},a,s))},e.handleSubmit=function(t){console.log("handle submit fired"),t.preventDefault();var c=Object(d.a)(e.state.employees);console.log("employees: "+c);var a=c.filter((function(t){console.log("THIS.STATE.FILTER: "+String(e.state.filter));var c=new RegExp(e.state.filter,"gi");return console.log(c),t.employee_name.match(c)}));e.setState({employeesDisplayed:a})},e}return Object(b.a)(c,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("form",{onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-10",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search employees by first or last name",name:"filter",value:this.state.filter,onChange:this.handleChange})})}),Object(a.jsx)("div",{className:"col-sm-2",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",onSubmit:this.handleSubmit,children:"Submit"})})]})}),this.state.employees.length!==this.state.employeesDisplayed.length&&Object(a.jsxs)("button",{className:"btn btn-secondary",onClick:this.resetFilter,children:["Reset Filter"," "]})]})})}),Object(a.jsx)(O,{employees:this.state.employeesDisplayed})]})}}]),c}(s.Component);var N=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(m,{}),Object(a.jsx)(r.a,{exact:!0,path:"/TrilogyHomework19",component:g})]})};i.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.84bbf059.chunk.js.map