(this.webpackJsonpmusicale=this.webpackJsonpmusicale||[]).push([[0],{42:function(s,e,c){},46:function(s,e,c){},47:function(s,e,c){},48:function(s,e,c){},49:function(s,e,c){},50:function(s,e,c){},51:function(s,e,c){},52:function(s,e,c){"use strict";c.r(e);var a=c(0),i=c(1),t=c(10),n=c(23),l=(c(34),c(11)),r=c(25),j=c(26),d=c(8),o="SET_USER_NAME",b="SET_PLAY_LIST",m="SET_SIDE_BAR",h="SET_PLAYER_BAR";var O=Object(l.combineReducers)({users:function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userName:""},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(d.a)(Object(d.a)({},s),{},{userName:e.payload});default:return s}},playList:function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{playlists:null,sidebar:!1,playerbar:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(d.a)(Object(d.a)({},s),{},{playlists:e.payload});case m:case m:return Object(d.a)(Object(d.a)({},s),{},{sidebar:e.payload});case h:return Object(d.a)(Object(d.a)({},s),{},{playerbar:e.payload});default:return s}}}),x=[j.a,r.a],p=l.applyMiddleware.apply(void 0,x),u=Object(l.createStore)(O,p),N=c(6),g=function(){try{(new XMLHttpRequest).abort()}catch(s){}return Object(N.a)()}();g.listen((function(){window.scrollTo(0,0)}));var v=c(12),y=c(3),f=c(13),w=c(15);var B={playList:function(s){return{type:b,payload:s}},sideBar:function(s){return{type:m,payload:s}},playerBar:function(s){return{type:h,payload:s}}};c(42);var P=Object(v.b)((function(s){return s.playList}))((function(s){var e=s.playlists;console.log("@@",e);var c=Object(i.useState)(null),t=Object(f.a)(c,2),n=t[0],l=t[1],r=Object(i.useState)(null),j=Object(f.a)(r,2);j[0],j[1];return Object(i.useEffect)((function(){fetch("https://musicales3.s3.ap-south-1.amazonaws.com/musicData.json").then((function(s){return s.json()})).catch((function(s){console.error(s)})).then((function(s){l(s)}))}),[]),Object(a.jsxs)("div",{className:"mainContent",children:[Object(a.jsx)("div",{className:"content-heading",children:"Radio"}),Object(a.jsx)("div",{className:"radio-cards-main",children:null!==n&&n.Radios.map((function(s){return Object(a.jsxs)(w.a,{to:"/playlist",className:"radio-cards",onClick:function(){u.dispatch(B.playList(s))},children:[Object(a.jsx)("div",{className:"cardbg",children:Object(a.jsx)("h5",{className:"card-head",children:"Radio"})}),Object(a.jsx)("h5",{className:"card-title",children:s.name})]})}))})]})})),k=c(54),S=(c(46),c.p+"static/media/icon4.6b806f76.svg"),L=c.p+"static/media/icon6.891c7798.svg",E=c.p+"static/media/icon8.789eed37.svg",R=function(s){var e=s.playlist;return Object(a.jsxs)("div",{className:"rightBar",children:[Object(a.jsx)("button",{className:"pro",children:"Free"}),Object(a.jsxs)("div",{className:"barHeads",children:[Object(a.jsx)("div",{className:"creator",children:e.playlist.creator}),Object(a.jsx)("div",{className:"loc",children:e.playlist.location})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"fields",children:[Object(a.jsx)("div",{className:"iconbg blue",children:Object(a.jsx)("img",{src:S,className:"ico"})}),Object(a.jsx)("span",{children:"Friends"}),Object(a.jsx)("span",{children:e.playlist.friends})]}),Object(a.jsxs)("div",{className:"fields",children:[Object(a.jsx)("div",{className:"iconbg rose",children:Object(a.jsx)("img",{src:L,className:"ico"})}),Object(a.jsx)("span",{children:"Likes"}),Object(a.jsx)("span",{children:e.playlist.likes})]}),Object(a.jsxs)("div",{className:"fields",children:[Object(a.jsx)("div",{className:"iconbg green",children:Object(a.jsx)("img",{src:E,className:"ico"})}),Object(a.jsx)("span",{children:"Playlist"}),Object(a.jsx)("span",{children:e.playlist.playlist})]})]})]})},C=(c(47),c.p+"static/media/heart.47d6c4b8.svg"),M=c.p+"static/media/blackHeart.8969650e.svg",A=c.p+"static/media/more-vertical.1d9ff428.svg",_=(c(48),c.p+"static/media/prev.9f3c1604.svg"),H=c.p+"static/media/next.b41b1a3a.svg",T=c.p+"static/media/suffle.3b097588.svg",z=c.p+"static/media/repeat.e07fb1f5.svg",F=function(s){var e=s.songs,c=Object(i.useState)(0),t=Object(f.a)(c,2),n=t[0],l=t[1],r=Object(i.useState)("Play"),j=Object(f.a)(r,2),d=j[0],o=j[1];return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"nowPlaying",children:[Object(a.jsx)("h4",{children:e[n].title}),Object(a.jsx)("h6",{children:e[n].artist})]}),Object(a.jsxs)("div",{className:"media-buttons",children:[Object(a.jsx)("img",{src:H,className:"media-icon"}),Object(a.jsx)("img",{src:T,onClick:function(){console.log(e.length),l(0===n?e.length-1:n-1)},className:"media-icon"}),Object(a.jsx)("div",{className:"play",onClick:function(){return o("Play"===d?"Pause":"Play")},children:d}),Object(a.jsx)("img",{src:_,onClick:function(){console.log("#",n,e.length),n<e.length-1?l(n+1):l(0)},className:"media-icon"}),Object(a.jsx)("img",{src:z,className:"media-icon"})]}),Object(a.jsxs)("div",{className:"durationBar",children:[Object(a.jsx)("h6",{children:"0:00"}),Object(a.jsx)("hr",{className:"bar"}),Object(a.jsx)("h6",{children:e[n].length})]}),n<e.length-1?Object(a.jsxs)("div",{className:"upNext",children:[Object(a.jsx)("h3",{children:"Up Next"}),Object(a.jsx)("h5",{children:e[n+1].title})]}):Object(a.jsx)("div",{className:"upNext",children:Object(a.jsx)("h3",{children:"End Of List"})})]})};var I=Object(v.b)((function(s){return console.log(s),s.playList}))((function(s){var e=s.history,c=s.playlists,i=s.sidebar,t=s.playerbar;return console.log(c),null===c&&e.push("/"),Object(a.jsxs)("div",{className:"Playlist",children:[Object(a.jsx)(k.a,{in:i,classNames:"alert",timeout:300,unmountOnExit:!0,children:Object(a.jsx)(R,{playlist:c})}),Object(a.jsx)("div",{className:"playlist-Head",children:"Playlist"}),Object(a.jsxs)("div",{className:"details",children:[Object(a.jsx)("div",{className:"artPad",children:Object(a.jsx)("h5",{children:"Radio"})}),Object(a.jsxs)("span",{children:[Object(a.jsx)("p",{children:"Playlist"}),Object(a.jsx)("h3",{className:"play-name",children:c?c.playlist.name:"Heading"}),Object(a.jsx)("h5",{className:"author",children:c?c.playlist.creator:"Creator"}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{onClick:function(){u.dispatch(B.sideBar(!1)),u.dispatch(B.playerBar(!t))},children:"Play"}),Object(a.jsx)("img",{src:C,className:"fav"}),Object(a.jsx)("img",{src:A})]})]})]}),null!==c&&c.playlist.songs.map((function(s){return Object(a.jsxs)("tr",{className:"list",children:[Object(a.jsx)("td",{className:"Sno",children:s.id}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:M,className:"songFav",width:"22px",height:"20px"})}),Object(a.jsx)("td",{className:"title",children:s.title}),Object(a.jsx)("td",{className:"artist",children:s.artist}),Object(a.jsx)("td",{className:"duration",children:s.length}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{className:"more",src:A})})]})})),Object(a.jsx)(k.a,{in:t,classNames:"alert",timeout:300,unmountOnExit:!0,children:null!==c&&Object(a.jsx)(F,{songs:c.playlist.songs})})]})})),D=function(s){var e=s.history;return Object(a.jsx)(y.b,{history:e,children:Object(a.jsxs)(y.c,{children:[Object(a.jsx)(y.a,{exact:!0,path:"/",history:e,component:P}),Object(a.jsx)(y.a,{path:"/playlist",history:e,component:I})]})})},Y=(c(49),c(50),c.p+"static/media/Logo.a2eef4e4.svg"),J=c.p+"static/media/icon1.c72d42b4.svg",U=c.p+"static/media/icon2.c61fd8f6.svg",q=c.p+"static/media/icon3.f0e75c41.svg",W=c.p+"static/media/icon5.4c933da5.svg",X=c.p+"static/media/icon7.917a566f.svg",G=c.p+"static/media/icon9.5e2110a9.svg",K=c.p+"static/media/circle.39f08177.svg",Q=function(){return Object(a.jsxs)("div",{className:"SideBar",children:[Object(a.jsx)("div",{className:"MainLogo",children:Object(a.jsx)("img",{src:Y,className:"lg"})}),Object(a.jsxs)("div",{className:"MainSet",children:[Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:J,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Home"})]}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:U,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Browse"})]}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:q,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Radio"})]}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:S,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Artist"})]}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:E,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Albums"})]})]}),Object(a.jsxs)("div",{className:"myMusic",children:[Object(a.jsx)("div",{className:"sidehead",children:Object(a.jsx)("span",{className:"Mainheading",children:"My Music"})}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:W,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Recently Played"})]}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:L,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Favorite"})]}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:X,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Download"})]})]}),Object(a.jsxs)("div",{className:"playlist",children:[Object(a.jsx)("div",{className:"sidehead",children:Object(a.jsx)("span",{className:"Mainheading",children:"Playlist"})}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:E,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Workout"})]}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:E,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Yoga"})]}),Object(a.jsxs)("div",{className:"indiv",children:[Object(a.jsx)("img",{src:G,className:"icon"}),Object(a.jsx)("span",{className:"headings",children:"Commute"})]})]}),Object(a.jsx)("div",{className:"addPlaylist",children:Object(a.jsxs)("div",{className:"indiv1",children:[Object(a.jsx)("img",{src:K,className:"icon1"}),Object(a.jsx)("span",{className:"playlist",children:"Add New Playlist"})]})})]})},V=c.p+"static/media/right.8877cfeb.svg",Z=c.p+"static/media/left.77dc82b7.svg",$=c.p+"static/media/notification.92982f2b.svg",ss=c.p+"static/media/setting.9ce8ce31.svg";c(51);var es=Object(v.b)((function(s){return console.log(s),s.playList}))((function(s){var e=s.history,c=s.sidebar;return console.log(c),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"header headerBg",children:[Object(a.jsxs)("div",{className:"arrows headerBg",children:[Object(a.jsx)("img",{src:V,className:"leftArrow arrow-size",onClick:function(){e.goBack()}}),Object(a.jsx)("img",{src:Z,onClick:function(){e.goForward()},className:"arrow-size"})]}),Object(a.jsx)("div",{className:"inputs headerBg",children:Object(a.jsx)("input",{className:"inputBox",placeholder:"Search for tracks, artist or album..."})}),Object(a.jsxs)("div",{className:"RightIcons headerBg",children:[Object(a.jsx)("img",{src:$,className:"notification right-size"}),Object(a.jsx)("img",{src:ss,className:"right-size",onClick:function(){u.dispatch(B.sideBar(!c)),u.dispatch(B.playerBar(!1))}})]})]})})})),cs=function(s){return Object(n.a)(s),Object(a.jsxs)(v.a,{store:u,children:[Object(a.jsx)(es,{history:g}),Object(a.jsx)(Q,{}),Object(a.jsx)(D,{history:g})]})};Object(t.render)(Object(a.jsx)(cs,{}),document.getElementById("app"))}},[[52,1,2]]]);
//# sourceMappingURL=main.df2b3ee6.chunk.js.map