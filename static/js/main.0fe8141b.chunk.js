(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(3),i=n.n(o),s=(n(15),n(16),n(4)),d=n(5),u=n(9),l=n(8);function b(e){var t=e.options,n=e.onLeaveFeedback;return Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsx)("button",{type:"button",name:e,onClick:n,children:e},e)}))})}var j=n(6),h=n.n(j);function f(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,o=e.positivePercentage;return r>0?Object(a.jsxs)("ul",{className:h.a.list,children:[Object(a.jsxs)("li",{children:["Good: ",t]}),Object(a.jsxs)("li",{children:["Neutral: ",n]}),Object(a.jsxs)("li",{children:["Bad: ",c]}),Object(a.jsxs)("li",{children:["Total: ",r]}),Object(a.jsxs)("li",{children:["Positive feedback: ",o,"%"]})]}):"No feedback given"}function v(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:t}),n]})}var O=n(7),g=n.n(O),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){"good"===t.target.name?e.setState((function(e){return{good:e.good+1}})):"neutral"===t.target.name?e.setState((function(e){return{neutral:e.neutral+1}})):"bad"===t.target.name&&e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:g.a.container,children:[Object(a.jsx)(v,{title:"Please leave feedback",children:Object(a.jsx)(b,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(a.jsx)(v,{title:"Statistics",children:Object(a.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component);var x=function(){return Object(a.jsx)(k,{})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={list:"Statistics_list__3PX9k"}},7:function(e,t,n){e.exports={container:"Feedback_container__2QfUB"}}},[[17,1,2]]]);
//# sourceMappingURL=main.0fe8141b.chunk.js.map