(this.webpackJsonplearningredux=this.webpackJsonplearningredux||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var i=n(1),s=(n(0),n(4)),r=n.n(s),o=n(3),l=n(2),c=Object(o.b)((function(e){return{song:e.selectedSong}}))((function(e){return null===e.song?Object(i.jsx)("div",{children:"Select a Song"}):Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:e.song.title}),Object(i.jsx)("div",{children:e.song.singer}),Object(i.jsx)("div",{children:e.song.year}),Object(i.jsx)("img",{src:e.song.img,alt:"",width:"300",height:"300"})]})})),a=function(e){return e.songs.map((function(t){return Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"1vw"},children:[Object(i.jsx)("div",{style:{marginRight:"5vw"},children:t.title}),Object(i.jsx)("button",{style:{marginRight:"5vw"},onClick:function(){e.selectSong(t)},children:"Select"})]},t.title)}))},g=Object(o.b)((function(e){return{songs:e.songs}}),{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})((function(e){return Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1,margin:"5vw"},children:[Object(i.jsx)("div",{children:Object(i.jsx)(a,{songs:e.songs,selectSong:e.selectSong})}),Object(i.jsx)(c,{})]})})),d=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(g,{})})},j=Object(l.b)({songs:function(){return[{title:"Blank Space",singer:"Taylor Swift",year:"2014",img:"https://fitanisya.files.wordpress.com/2015/03/taylor-swift-blank-space.jpg"},{title:"Baby One More Time",singer:"Britney Spears",year:"1998",img:"http://2.bp.blogspot.com/-ixrhhe3_x_4/TrbsNjnffTI/AAAAAAAABYs/WiAsaeleaok/s320/_..Baby+One+More+Time+%2528Video%2529.jpg"},{title:"Everybody",singer:"Backstreet Boys",year:"1997",img:"https://fthmb.tqn.com/TM8AkV8RnsRd2XF0-uTDuJkzyVo=/768x0/filters:no_upscale()/backstreet-boys-everybody-57365c153df78c6bb093bf82.jpg"},{title:"Rolling in the Deep",singer:"Adele",year:"2012",img:"https://upload.wikimedia.org/wikipedia/en/5/5d/Adele-Rolling_In_The_Deep.jpg"},{title:"Call Me Maybe",singer:"Carly Rae Jepsen",year:"2012",img:"http://4.bp.blogspot.com/-uRd_wdIPcDY/UIwKMoB_XGI/AAAAAAAGIUI/3vB1MRDjVgg/s1600/Carly%2BRae%2BJepsen%2B-%2BCall%2BMe%2BMaybe%2B3.jpeg"},{title:"Uptown Funk",singer:"Mark Ronson and Bruno Mars",year:"2015",img:"https://i.ytimg.com/vi/niMcILvhW-k/maxresdefault.jpg"},{title:"Firework",singer:"Katy Perry",year:"2010",img:"https://2.bp.blogspot.com/_zjVydElJEho/TUTFxjTtm8I/AAAAAAAAEAo/A7fKcljUipk/s1600/Made%2Bby%2Bcaliizthoo.jpg"}]},selectedSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});r.a.render(Object(i.jsx)(o.a,{store:Object(l.c)(j),children:Object(i.jsx)(d,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7aee830d.chunk.js.map