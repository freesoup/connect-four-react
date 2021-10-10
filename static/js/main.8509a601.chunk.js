(this["webpackJsonpconnect-four-react"]=this["webpackJsonpconnect-four-react"]||[]).push([[0],{13:function(e,t,r){},8:function(e,t,r){"use strict";r.r(t);var n=r(2),s=r(3),a=r(5),l=r(4),i=r(1),u=r.n(i),c=r(7),o=r.n(c),h=(r(13),r(0));function j(e){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"square ".concat(e.value?"X"===e.value?"squarePlayerX":"squarePlayerO":"squareDefault")})})}var d=function(e){Object(a.a)(r,e);var t=Object(l.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"renderSquare",value:function(e,t){return Object(h.jsx)(j,{value:this.props.squares[t][e]})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"board-col",onClick:this.props.onClick,children:[this.renderSquare(5,this.props.value),this.renderSquare(4,this.props.value),this.renderSquare(3,this.props.value),this.renderSquare(2,this.props.value),this.renderSquare(1,this.props.value),this.renderSquare(0,this.props.value)]})}}]),r}(u.a.Component),b=function(e){Object(a.a)(r,e);var t=Object(l.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"renderColumn",value:function(e){var t=this;return Object(h.jsx)(d,{value:e,onClick:function(){return t.props.onClick(e)},squares:this.props.squares})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"board-container",children:[this.renderColumn(0),this.renderColumn(1),this.renderColumn(2),this.renderColumn(3),this.renderColumn(4),this.renderColumn(5),this.renderColumn(6)]})}}]),r}(u.a.Component),p=function(e){Object(a.a)(r,e);var t=Object(l.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(7).fill(null).map((function(){return Array(6).fill(null)})),playRow:null,playCol:null,gameIsWon:!1,winner:null}],stepNumber:0,xIsNext:!0},s}return Object(s.a)(r,[{key:"handleClick",value:function(e){for(var t,r=this.state.history.slice(0,this.state.stepNumber+1),n=r[r.length-1],s=[],a=0;a<n.squares.length;a++)s[a]=n.squares[a].slice();if(!n.gameIsWon&&null==s[e][s[e].length-1]){for(var l=0;l<s[e].length;l++)if(null===s[e][l]){s[e][l]=this.state.xIsNext?"X":"O",t=l;break}var i=function(e,t,r){if(null==t||null==r)return null;for(var n,s,a=e[r][t],l=0,i=0;i<e[r].length;i++)if(e[r][i]===a?l++:l=0,4===l)return a;l=0;for(var u=0;u<e.length;u++)if(e[u][t]===a?l++:l=0,4===l)return a;l=0,t>=r?(n=t-r,s=0):(n=0,s=r-t);for(var c=s,o=n;c<e.length&&o<e[c].length;c++,o++)if(e[c][o]===a?l++:l=0,4===l)return a;l=0;var h=t+r;h<=e[r].length?(n=h,s=0):s=h-(n=e[r].length);for(var j=s,d=n;j<e.length&&d>=0;j++,d--)if(e[j][d]===a?l++:l=0,4===l)return a;return null}(s,t,e),u=!!i;this.setState({history:r.concat([{squares:s,playRow:t,playCol:e,gameIsWon:u,winner:i}]),stepNumber:r.length,xIsNext:!this.state.xIsNext})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t,r=this,n=this.state.history,s=n[this.state.stepNumber];s.gameIsWon?e=s.winner:42===this.state.stepNumber&&(t=!0);var a,l=n.map((function(e,t){var n,s=t?"Go to move #"+t:"Go to Game start";return null!=e.playRow&&null!=e.playCol&&(n="Location: ("+e.playRow+","+e.playCol+")"),Object(h.jsx)("div",{className:"history-button-container",children:Object(h.jsxs)("button",{className:"history-button ".concat(t===r.state.stepNumber?"boldbutton":""),onClick:function(){return r.jumpTo(t)},children:[s," ",n]})},t)}));a=e?"Winner":t?"Draw":"Next Player";var i=[];return e?i.push(Object(h.jsx)("div",{className:"minisquare ".concat("X"===e?"squarePlayerX":"squarePlayerO")})):t||i.push(Object(h.jsx)("div",{className:"minisquare ".concat(this.state.xIsNext?"squarePlayerX":"squarePlayerO")})),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsxs)("div",{className:"game-board",children:[Object(h.jsx)(b,{squares:s.squares,onClick:function(e){return r.handleClick(e)}}),Object(h.jsxs)("div",{className:"game-state",children:[Object(h.jsx)("div",{class:"game-logo",children:Object(h.jsx)("h1",{children:"Connect-4"})}),Object(h.jsxs)("div",{class:"game-result",children:[a,i]})]})]}),Object(h.jsxs)("div",{className:"history-bar",children:[Object(h.jsx)("div",{className:"history-title",children:Object(h.jsx)("h1",{children:"History"})}),Object(h.jsx)("div",{className:"game-info",children:Object(h.jsx)("div",{children:l})})]})]})}}]),r}(u.a.Component);o.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.8509a601.chunk.js.map