(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);n(1);var a=n(14),s=n.n(a),c=(n(21),n(2)),r=(n(22),n(7)),i=n(0),j=function(){return Object(i.jsxs)("div",{className:"default gameOver",children:[Object(i.jsx)("h1",{children:"You lose!"}),Object(i.jsxs)("div",{className:"btns",children:[Object(i.jsx)(r.b,{to:"/menu",className:"btn",children:"Menu"}),Object(i.jsx)(r.b,{to:"/main",className:"btn",children:"Try again"})]})]})},u=function(e){var t=e.state.matrix.map((function(e,t){return Object(i.jsx)("tr",{children:e.map((function(e,n){return Object(i.jsx)("td",{children:e||""},"".concat(t,"_").concat(n))}))},t)})),n=e.state.numbersData.map((function(e){return Object(i.jsx)("li",{children:e},e)}));return Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)("h1",{className:"title",children:"Sudoku"}),Object(i.jsx)("table",{className:"gameArea",children:Object(i.jsx)("tbody",{className:"blocks",children:t})}),Object(i.jsx)("ul",{className:"numbers",children:n}),Object(i.jsxs)("div",{className:"errors",children:["Errors: ",Object(i.jsxs)("span",{children:[e.state.errors," / 3"]})]})]})},l=function(){return Object(i.jsxs)("div",{className:"default",children:[Object(i.jsx)("h1",{children:"Sudoku"}),Object(i.jsx)(r.b,{to:"/main",className:"btn",children:"Play"})]})},o=function(){return Object(i.jsxs)("div",{className:"default win",children:[Object(i.jsx)("h1",{children:"You win!"}),Object(i.jsxs)("div",{className:"btns",children:[Object(i.jsx)(r.b,{to:"/menu",className:"btn",children:"Menu"}),Object(i.jsx)(r.b,{to:"/main",className:"btn",children:"Play again"})]})]})};var d=function(e){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(c.a,{exact:!0,path:["/","/menu"],render:function(){return Object(i.jsx)(l,{})}}),Object(i.jsx)(c.a,{path:"/main",render:function(){return Object(i.jsx)(u,{state:e.state})}}),Object(i.jsx)(c.a,{path:"/win",render:function(){return Object(i.jsx)(o,{})}}),Object(i.jsx)(c.a,{path:"/gameOver",render:function(){return Object(i.jsx)(j,{})}})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},x={chooseMatrix:function(){return Math.floor(Math.random()*this.dataMatrix.length)},dataMatrix:[[[[9,1,6,3,5,4,8,7,2],[8,7,3,6,2,9,1,5,4],[5,2,4,7,1,8,9,3,6],[7,6,8,9,3,5,2,4,1],[1,4,9,2,8,7,3,6,5],[2,3,5,4,6,1,7,9,8],[6,9,7,8,4,2,5,1,3],[3,8,1,5,7,6,4,2,9],[4,5,2,1,9,3,6,8,7]],[[9,1,6,0,0,4,0,7,2],[8,0,0,6,2,0,0,5,0],[5,0,0,0,0,8,9,3,0],[0,6,0,0,0,0,2,0,0],[0,0,0,2,0,7,0,0,0],[0,0,5,0,0,0,0,9,0],[0,9,7,8,0,0,0,0,3],[0,8,0,0,7,6,0,0,9],[4,5,0,1,0,0,6,8,7]]],[[[9,4,5,2,7,1,8,3,6],[8,1,6,3,9,5,4,2,7],[7,3,2,6,8,4,5,1,9],[2,5,8,4,6,7,3,9,1],[6,9,4,1,3,8,7,5,2],[3,7,1,5,2,9,6,4,8],[4,6,7,9,5,2,1,8,3],[1,2,3,8,4,6,9,7,5],[5,8,9,7,1,3,2,6,4]],[[0,0,5,0,0,0,8,0,0],[8,1,6,0,0,5,4,2,7],[7,0,2,6,0,0,0,1,9],[2,0,0,0,0,7,3,0,1],[6,9,0,1,0,8,7,0,0],[3,7,1,5,0,0,0,4,0],[0,6,0,9,0,2,0,0,0],[1,0,3,0,4,0,9,7,0],[5,8,0,7,0,0,2,6,4]]],[[[4,1,5,3,7,8,2,9,6],[2,3,7,1,6,9,4,8,5],[6,8,9,4,2,5,7,3,1],[8,9,3,7,5,1,6,2,4],[5,7,4,2,3,6,9,1,8],[1,6,2,9,8,4,3,5,7],[9,2,8,6,1,7,5,4,3],[7,4,1,5,9,3,8,6,2],[3,5,6,8,4,2,1,7,9]],[[4,0,0,3,0,8,0,0,6],[2,3,0,0,6,0,4,0,0],[0,0,9,4,0,0,7,0,0],[8,9,0,7,0,0,0,0,0],[5,0,0,0,0,0,9,1,0],[0,6,0,0,0,0,0,0,7],[0,0,8,0,1,0,0,4,3],[0,4,1,0,0,0,0,6,0],[0,0,0,8,0,2,0,7,0]]],[[[7,9,2,1,5,4,3,8,6],[6,4,3,8,2,7,1,5,9],[8,5,1,3,9,6,7,2,4],[2,6,5,9,7,3,8,4,1],[4,8,9,5,6,1,2,7,3],[3,1,7,4,8,2,9,6,5],[0,0,0,7,4,0,5,0,0],[9,0,0,2,0,5,6,0,0],[5,2,0,0,3,0,0,0,7]],[[0,9,2,0,5,0,3,0,0],[0,4,3,0,2,0,1,0,0],[0,5,0,3,9,0,0,2,4],[2,6,5,0,0,3,8,0,0],[4,0,0,0,0,1,0,0,3],[0,0,7,4,0,2,0,0,0],[0,0,0,7,4,0,5,0,0],[9,0,0,2,0,5,6,0,0],[5,2,0,0,3,0,0,0,7]]]]},h=function(e){var t=e.chooseMatrix();return{matrix:{start:e.dataMatrix[t][1],end:e.dataMatrix[t][0]},values:[1,2,3,4,5,6,7,8,9],errors:0}};console.log(h(x).matrix.start);var m={_state:{matrix:h(x).matrix.start.slice(),numbersData:[1,2,3,4,5,6,7,8,9],errors:0},getState:function(){return this._state}};s.a.render(Object(i.jsx)(r.a,{basename:"/sudoku",children:Object(i.jsx)(d,{state:m.getState()})}),document.getElementById("root")),b()}},[[29,1,2]]]);
//# sourceMappingURL=main.ba1d3ef4.chunk.js.map