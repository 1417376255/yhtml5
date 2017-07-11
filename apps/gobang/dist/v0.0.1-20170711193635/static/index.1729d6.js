!function(e){function __webpack_require__(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,__webpack_require__),t.l=!0,t.exports}var r={};__webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,r,a){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=11)}([function(e,r,a){"use strict";var t=function(e){for(var r=[],a=0;a<e;a++){r[a]=[];for(var t=0;t<e;t++)r[a][t]=0}return r},o=function(e){for(var r=[],a=[],o=[],n=0,i=0;i<15;i++){r[i]=[];for(var s=0;s<15;s++)r[i][s]=[]}for(var c=0;c<15;c++)for(var l=0;l<11;l++){for(var u=0;u<5;u++)r[c][l+u][n]=!0;n++}for(var f=0;f<15;f++)for(var d=0;d<11;d++){for(var v=0;v<5;v++)r[d+v][f][n]=!0;n++}for(var h=0;h<11;h++)for(var _=0;_<11;_++){for(var b=0;b<5;b++)r[h+b][_+b][n]=!0;n++}for(var p=0;p<11;p++)for(var w=14;w>3;w--){for(var m=0;m<5;m++)r[p+m][w-m][n]=!0;n++}for(var C=0;C<n;C++)a[C]=0,o[C]=0;return{chessboard:null,chessType:"canvas",chessPositons:t(15),width:0,lineNum:15,interval:0,pieceWidth:0,lineColor:"#afafaf",chessColor:!0,gameOver:!1,wins:r,myWin:a,aiWin:o,count:n,players:[{name:"玩家",type:!0,color:!0},{name:"AlphaGo",type:!1,color:!1}]}}();window.state=o,r.a=o},function(e,r,a){"use strict";function drawChessman(e,r){return a.i(t.a)(r)}a.d(r,"a",function(){return drawChessman});var t=a(10)},function(e,r,a){"use strict";function yhtml5(){console.clear(),console.log("%c YHTML5 %c https://github.com/yhtml5",'font-family: "microsoft yahei", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',"font-size:12px;color:#999999;"),console.log("%c We work hard to contribute our work back to the web, mobile, big data, && new Front-End technology.","color:#333;font-size:16px;margin:4px;"),console.log("%c Author: yhtml5","color:#333;font-size:16px;margin:4px;")}a.d(r,"a",function(){return yhtml5})},function(e,r,a){"use strict";function createChessboard(e){return a.i(t.a)()}function drawChessBoard(e){return a.i(t.b)()}a.d(r,"a",function(){return createChessboard}),a.d(r,"b",function(){return drawChessBoard});var t=a(8);a(9)},function(e,r,a){"use strict";function ai(){for(var e=t.a.over,r=(t.a.gameOver,t.a.chessColor),n=t.a.chessPositons,i=t.a.count,s=t.a.wins,c=t.a.myWin,l=t.a.aiWin,u=[],f=[],d=0,v=0,h=0,_=0;_<15;_++){u[_]=[],f[_]=[];for(var b=0;b<15;b++)u[_][b]=0,f[_][b]=0}for(var p=0;p<15;p++)for(var w=0;w<15;w++)if(0==n[p][w]){for(var m=0;m<i;m++)s[p][w][m]&&(1==c[m]?u[p][w]+=200:2==c[m]?u[p][w]+=400:3==c[m]?u[p][w]+=2e3:4==c[m]&&(u[p][w]+=1e4),1==l[m]?f[p][w]+=220:2==l[m]?f[p][w]+=420:3==l[m]?f[p][w]+=2100:4==l[m]&&(f[p][w]+=2e4));u[p][w]>d?(d=u[p][w],v=p,h=w):u[p][w]==d&&f[p][w]>f[v][h]&&(v=p,h=w),f[p][w]>d?(d=f[p][w],v=p,h=w):f[p][w]==d&&u[p][w]>u[v][h]&&(v=p,h=w)}a.i(o.a)("canvas",{i:v,j:h,color:t.a.players[1].color}),n[v][h]=2;for(var C=0;C<i;C++)s[v][h][C]&&(l[C]++,c[C]=6),5==l[C]&&(alert("电脑赢了."),e=!0);e||(r=!r)}a.d(r,"a",function(){return ai});var t=a(0),o=a(1)},function(e,r,a){"use strict";function playChess(e,r){if(!t.a.gameOver){var n=e.offsetX,i=e.offsetY,s=Math.floor(n/t.a.interval),c=Math.floor(i/t.a.interval);if(0==t.a.chessPositons[s][c]){a.i(o.a)("canvas",{i:s,j:c,color:t.a.players[0].color}),t.a.chessPositons[s][c]=1;for(var l=0;l<t.a.count;l++)t.a.wins[s][c][l]&&(t.a.myWin[l]++,t.a.aiWin[l]=6),5==t.a.myWin[l]&&(t.a.gameOver=!0,console.log("你赢了."));t.a.gameOver||(t.a.chessColor=!t.a.chessColor,r&&r())}}}a.d(r,"a",function(){return playChess});var t=a(0),o=a(1)},function(e,r,a){"use strict";function setChessboard(e,r){e.width=r,e.interval=r/15,e.pieceWidth=r/15/15*13}a.d(r,"a",function(){return t});var t=function(e){document.body.clientWidth<500?setChessboard(e,300):setChessboard(e,450)}},function(e,r){},function(e,r,a){"use strict";function createChessboard(e){var r=document.getElementById("body"),a=document.createElement("canvas"),o=document.createTextNode("Your browser does not support Html5 canvas, please change a browser.");a.setAttribute("width",2*t.a.width+"px"),a.setAttribute("height",2*t.a.width+"px"),a.setAttribute("id","chessboard"),a.setAttribute("style","width: "+t.a.width+"px; height: "+t.a.width+"px;"),a.id="chessboard",a.appendChild(o),r.appendChild(a)}function drawChessBoard(){var e=t.a.chessboard.getContext("2d");e.strokeStyle=t.a.lineColor;for(var r=0;r<t.a.lineNum;r++)e.moveTo(t.a.interval+r*t.a.interval*2,t.a.interval),e.lineTo(t.a.interval+r*t.a.interval*2,29*t.a.interval),e.stroke(),e.moveTo(t.a.interval,t.a.interval+r*t.a.interval*2),e.lineTo(29*t.a.interval,t.a.interval+r*t.a.interval*2),e.stroke()}a.d(r,"a",function(){return createChessboard}),a.d(r,"b",function(){return drawChessBoard});var t=a(0)},function(e,r,a){"use strict"},function(e,r,a){"use strict";function drawChessman(e){var r=e.i,a=e.j,o=e.color,n=t.a.chessboard.getContext("2d");n.beginPath(),n.arc(t.a.interval+2*r*t.a.interval,t.a.interval+2*a*t.a.interval,t.a.pieceWidth,0,2*Math.PI),n.closePath();var i=n.createRadialGradient(t.a.interval+2*r*t.a.interval+t.a.width/15/15*2,t.a.interval+2*a*t.a.interval-t.a.width/15/15*2,t.a.width/15/15*13,t.a.interval+2*r*t.a.interval,t.a.interval+2*a*t.a.interval,0);o?(i.addColorStop(0,"#0a0a0a"),i.addColorStop(1,"#636363")):(i.addColorStop(0,"#d1d1d1"),i.addColorStop(1,"#f9f9f9")),n.fillStyle=i,n.fill()}a.d(r,"a",function(){return drawChessman});var t=a(0)},function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=a(2),o=a(3),n=a(5),i=a(4),s=a(6),c=a(0),l=a(7);a.n(l);a.i(t.a)(),a.i(s.a)(c.a),a.i(o.a)("canvas"),c.a.chessboard=document.getElementById("chessboard"),a.i(o.b)("canvas"),c.a.chessboard.addEventListener("click",function(e){return a.i(n.a)(e,i.a)})}]);