(this.webpackJsonplanguages=this.webpackJsonplanguages||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(24),n(4)),s=n(5),l=n(6),u=n(7),h=(n(25),n(1)),d=n(18),f=(n(26),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"THIS IS THE HOME PAGE")}}]),n}(r.a.Component)),m=n(9);var v=function(e){var t,n,a;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e},p=(n(27),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).nextCard=a.nextCard.bind(Object(m.a)(a)),a.fetchData=a.fetchData.bind(Object(m.a)(a)),a.state={cards:[],isLoading:!0,currentIndex:0,isAnswerHidden:!0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/languages/data.json").then((function(e){return e.json()})).then((function(t){var n=JSON.parse(JSON.stringify(t.data.tamil.alphabet));e.setState({cards:v(n),isLoading:!1,currentIndex:0})}))}},{key:"nextCard",value:function(){var e=this.state.currentIndex+1;e>=this.state.cards.length&&(e=0),this.setState({currentIndex:e,isAnswerHidden:!0})}},{key:"render",value:function(){if(this.state.isLoading)return r.a.createElement("h1",null,"Loading...");var e=this.state.currentIndex,t=this.state.cards[e];return r.a.createElement("div",{class:"flashcard"},r.a.createElement("div",{class:"counter"},e+1," of ",this.state.cards.length),r.a.createElement("div",{class:"value"},t.char),r.a.createElement("div",{class:"answer"},r.a.createElement("p",null,t.pronounce),r.a.createElement("p",null,t.example)),r.a.createElement("input",{type:"button",onClick:this.nextCard,value:"Next"}))}}]),n}(r.a.Component)),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:f}),r.a.createElement(h.a,{path:"/flashcards",component:p})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7d03c894.chunk.js.map