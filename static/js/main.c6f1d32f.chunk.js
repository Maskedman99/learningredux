(this.webpackJsonplearningredux=this.webpackJsonplearningredux||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var l=n(0),i=n.n(l),a=n(3),r=n.n(a),o=n(2),s=n(1),c=Object(o.b)((function(e){return{song:e.selectedSong}}))((function(e){return null===e.song?i.a.createElement("div",null,"Select a Song"):i.a.createElement("div",null,i.a.createElement("div",null,e.song.title),i.a.createElement("div",null,e.song.singer),i.a.createElement("div",null,e.song.year),i.a.createElement("img",{src:e.song.img,alt:"",width:"300",height:"300"}))})),g=function(e){return e.songs.map((function(t){return i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"1vw"},key:t.title},i.a.createElement("div",{style:{marginRight:"5vw"}},t.title),i.a.createElement("button",{style:{marginRight:"5vw"},onClick:function(){e.selectSong(t)}},"Select"))}))},p=Object(o.b)((function(e){return{songs:e.songs}}),{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})((function(e){return i.a.createElement("div",{style:{display:"flex",flexDirection:"row",flex:1,margin:"5vw"}},i.a.createElement("div",null,i.a.createElement(g,{songs:e.songs,selectSong:e.selectSong})),i.a.createElement(c,null))})),u=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null))},m=Object(s.b)({songs:function(){return[{title:"Blank Space",singer:"Taylor Swift",year:"2014",img:"https://fitanisya.files.wordpress.com/2015/03/taylor-swift-blank-space.jpg"},{title:"Baby One More Time",singer:"Britney Spears",year:"1998",img:"http://2.bp.blogspot.com/-ixrhhe3_x_4/TrbsNjnffTI/AAAAAAAABYs/WiAsaeleaok/s320/_..Baby+One+More+Time+%2528Video%2529.jpg"},{title:"Everybody",singer:"Backstreet Boys",year:"1997",img:"https://fthmb.tqn.com/TM8AkV8RnsRd2XF0-uTDuJkzyVo=/768x0/filters:no_upscale()/backstreet-boys-everybody-57365c153df78c6bb093bf82.jpg"},{title:"Rolling in the Deep",singer:"Adele",year:"2012",img:"https://upload.wikimedia.org/wikipedia/en/5/5d/Adele-Rolling_In_The_Deep.jpg"},{title:"Call Me Maybe",singer:"Carly Rae Jepsen",year:"2012",img:"http://4.bp.blogspot.com/-uRd_wdIPcDY/UIwKMoB_XGI/AAAAAAAGIUI/3vB1MRDjVgg/s1600/Carly%2BRae%2BJepsen%2B-%2BCall%2BMe%2BMaybe%2B3.jpeg"},{title:"Uptown Funk",singer:"Mark Ronson and Bruno Mars",year:"2015",img:"https://i.ytimg.com/vi/niMcILvhW-k/maxresdefault.jpg"},{title:"Firework",singer:"Katy Perry",year:"2010",img:"https://2.bp.blogspot.com/_zjVydElJEho/TUTFxjTtm8I/AAAAAAAAEAo/A7fKcljUipk/s1600/Made%2Bby%2Bcaliizthoo.jpg"}]},selectedSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});r.a.render(i.a.createElement(o.a,{store:Object(s.c)(m)},i.a.createElement(u,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.c6f1d32f.chunk.js.map