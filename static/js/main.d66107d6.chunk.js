(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(18)},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(9),s=a.n(c),l=a(2),r=a(3),o=a(5),d=a(4),u=a(6),m=(a(16),function(){return i.a.createElement("div",{className:"header"},"Trello Mock")}),v=a(1),b=a(7),h=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={itemName:""},a.onInputChange=function(t){a.setState(Object(b.a)({},t.target.name,t.target.value))},a.onSaveButtonClicked=function(){var t=a.state.itemName,e=a.props,n=e.addToItem,i=e.onSaveButtonClicked;n(t,e.index),i()},a}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.onInputChange,e=this.onSaveButtonClicked,a=this.state.itemName;return i.a.createElement("div",{className:"form"},i.a.createElement("input",{className:"input",type:"text",name:"itemName",value:a,onChange:t,placeholder:"Enter a title for this card..."}),i.a.createElement("button",{className:"save-button",onClick:e},"Save"))}}]),e}(n.Component),f=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={addingCard:!1},a.onAddCardButtonClick=function(t){a.setState({addingCard:!0})},a.onSaveButtonClicked=function(t){a.setState({addingCard:!1})},a}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.state.addingCard,e=this.props,a=e.addToItem,n=e.index,c=this.onAddCardButtonClick,s=this.onSaveButtonClicked;return i.a.createElement("div",null,t?i.a.createElement(h,{index:n,onSaveButtonClicked:s,addToItem:a}):i.a.createElement("div",{className:"card-button",onClick:c},"+ Add Card..."))}}]),e}(n.Component),p=function(t){var e=t.addToItem,a=t.listName,n=t.listItems,c=t.deleteList,s=t.deleteItem,l=t.index;return console.log("List Items",n),i.a.createElement("div",{className:"list-box"},i.a.createElement("div",{className:"list-content"},i.a.createElement("div",{className:"list-title"},i.a.createElement("div",{className:"list-text"},a),i.a.createElement("div",{className:"list-text",onClick:function(){return c(l)}},"x")),i.a.createElement("div",null,n&&n.map(function(t,e){return i.a.createElement("div",{key:e,className:"card"},i.a.createElement("div",null,t),i.a.createElement("div",{onClick:function(){return s(l,e)}},"x"))}),i.a.createElement(f,{addToItem:e,index:l}))))},j=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={listName:""},a.onInputChange=function(t){a.setState(Object(b.a)({},t.target.name,t.target.value))},a.onSaveButtonClicked=function(){var t=a.state.listName,e=a.props,n=e.addToList,i=e.onSaveButtonClicked;n(t),i()},a}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.onInputChange,e=this.onSaveButtonClicked,a=this.state.listName;return i.a.createElement("div",{className:"form list"},i.a.createElement("input",{className:"input",type:"text",name:"listName",value:a,onChange:t,placeholder:"Enter a list name..."}),i.a.createElement("button",{className:"save-button",onClick:e},"Save"))}}]),e}(n.Component),O=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={addingList:!1},a.onListButtonClick=function(){a.setState({addingList:!0})},a.onSaveButtonClicked=function(){a.setState({addingList:!1})},a}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.state.addingList,e=this.props.addToList,a=this.onListButtonClick,n=this.onSaveButtonClicked;return i.a.createElement("div",null,t?i.a.createElement(j,{onSaveButtonClicked:n,addToList:e}):i.a.createElement("div",{className:"list-button",onClick:a},"+ Add another List"))}}]),e}(n.Component),C=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={lists:["Garden","Food"],items:[["Carrot","Potato"],["Hamburger","Pizza"]]},a.addToList=function(t){var e=[].concat(Object(v.a)(a.state.lists),[t]),n=[].concat(Object(v.a)(a.state.items),[[]]);a.setState({lists:e,items:n})},a.addToItem=function(t,e){var n=[].concat(Object(v.a)(a.state.items[e]),[t]),i=[].concat(Object(v.a)(a.state.items.slice(0,e)),[n],Object(v.a)(a.state.items.slice(e+1)));a.setState({items:i})},a.deleteList=function(t){var e=[].concat(Object(v.a)(a.state.lists.slice(0,t)),Object(v.a)(a.state.lists.slice(t+1))),n=[].concat(Object(v.a)(a.state.items.slice(0,t)),Object(v.a)(a.state.items.slice(t+1)));a.setState({lists:e,items:n})},a.deleteItem=function(t,e){var n=[].concat(Object(v.a)(a.state.items[t].slice(0,e)),Object(v.a)(a.state.items[t].slice(e+1))),i=[].concat(Object(v.a)(a.state.items.slice(0,t)),[n],Object(v.a)(a.state.items.slice(t+1)));a.setState({items:i})},a}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.state,e=t.lists,a=t.items,n=this.addToItem,c=this.addToList,s=this.deleteList,l=this.deleteItem;return i.a.createElement("div",null,i.a.createElement("div",{className:"dashboard-title"},"Demo Board"),i.a.createElement("div",{className:"container cards"},e.length>0&&e.map(function(t,e){return i.a.createElement(p,{key:e,addToItem:n,deleteList:s,deleteItem:l,index:e,listName:t,listItems:a[e]})}),i.a.createElement(O,{addToList:c})))}}]),e}(n.Component),E=function(t){function e(){return Object(l.a)(this,e),Object(o.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement(C,null))}}]),e}(n.Component);s.a.render(i.a.createElement(E,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.d66107d6.chunk.js.map