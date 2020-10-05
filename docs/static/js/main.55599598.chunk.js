(this.webpackJsonplanguages=this.webpackJsonplanguages||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),s=(a(24),a(6)),i=a(7),u=a(8),o=a(9),m=(a(25),a(1)),d=a(2),h=(a(26),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home content"},r.a.createElement("h1",null,"Languages"),r.a.createElement("h3",null,"Tamil"),r.a.createElement("p",null,"Lettters"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/languages/tamil/letters"},"View as list")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/languages/tamil/letters/flashcards"},"View as flashcards"))))}}]),a}(r.a.Component)),g=a(3);var v=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this;this.setState({isLoading:!0}),fetch("/languages/data.json").then((function(e){return e.json()})).then((function(a){var n=JSON.parse(JSON.stringify(a.data[t.language].alphabet));t.setState({cards:e?v(n):n,isLoading:!1,currentIndex:0})}))},f=(a(32),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchData=p.bind(Object(g.a)(n)),n.nextCard=n.nextCard.bind(Object(g.a)(n)),n.prevCard=n.prevCard.bind(Object(g.a)(n)),n.revealAnswer=n.revealAnswer.bind(Object(g.a)(n)),n.formatExample=n.formatExample.bind(Object(g.a)(n)),n.renderHidden=n.renderHidden.bind(Object(g.a)(n)),n.renderAnswer=n.renderAnswer.bind(Object(g.a)(n)),n.language=e.match.params.language,n.state={cards:[],isLoading:!0,currentIndex:0,isAnswerHidden:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData(!0)}},{key:"nextCard",value:function(){var e=this.state.currentIndex+1;e>=this.state.cards.length&&(e=0),this.setState({currentIndex:e,isAnswerHidden:!0})}},{key:"prevCard",value:function(){var e=this.state.currentIndex-1;e<0&&(e=this.state.cards.length-1),this.setState({currentIndex:e,isAnswerHidden:!0})}},{key:"revealAnswer",value:function(){this.setState({isAnswerHidden:!1})}},{key:"formatExample",value:function(e){return r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.example}})}},{key:"renderHidden",value:function(){return r.a.createElement("div",{className:"hidden",onClick:this.revealAnswer},"Click to reveal")}},{key:"renderAnswer",value:function(e){return r.a.createElement("div",{className:"answer"},r.a.createElement("p",{className:"pronunciation"},e.pronounce),r.a.createElement("p",{className:"example"},"As in: ",this.formatExample(e)))}},{key:"render",value:function(){if(this.state.isLoading)return r.a.createElement("h1",null,"Loading...");var e=this.state.currentIndex,t=this.state.cards[e];return r.a.createElement("div",{className:"flashcard content"},r.a.createElement("div",{className:"nav"},r.a.createElement(d.b,{to:"/languages"},r.a.createElement("input",{type:"button",value:"Home"})),r.a.createElement(d.b,{to:"/languages/".concat(this.language,"/letters")},r.a.createElement("input",{type:"button",value:"View as list"}))),r.a.createElement("div",{className:"value"},t.char),this.state.isAnswerHidden?this.renderHidden():this.renderAnswer(t),r.a.createElement("div",{className:"counter"},e+1," of ",this.state.cards.length),r.a.createElement("input",{className:"prev",type:"button",onClick:this.prevCard,value:"\u2190 Prev"}),r.a.createElement("input",{className:"next",type:"button",onClick:this.nextCard,value:"Next \u2192"}))}}]),a}(r.a.Component)),E=(a(33),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchData=p.bind(Object(g.a)(n)),n.formatExample=n.formatExample.bind(Object(g.a)(n)),n.language=e.match.params.language,n.state={cards:[],isLoading:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"formatExample",value:function(e){return r.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.example}})}},{key:"render",value:function(){var e=this;return this.state.isLoading?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"table-of-letters__nav"},r.a.createElement(d.b,{to:"/languages"},r.a.createElement("input",{type:"button",value:"Home"})),r.a.createElement(d.b,{to:"/languages/".concat(this.language,"/letters/flashcards")},r.a.createElement("input",{type:"button",value:"View as flashcards"}))),r.a.createElement("h1",null,"".concat(this.language," letters")),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Letter"),r.a.createElement("th",null,"Pronunciation"),r.a.createElement("th",null,"Example")),this.state.cards.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t.char),r.a.createElement("td",null,t.pronounce),e.formatExample(t))}))))}}]),a}(r.a.Component)),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/languages/",exact:!0,component:h}),r.a.createElement(m.a,{path:"/languages/:language/letters",exact:!0,component:E}),r.a.createElement(m.a,{path:"/languages/:language/letters/flashcards",exact:!0,component:f})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.55599598.chunk.js.map