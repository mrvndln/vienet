(this["webpackJsonpvie-net"]=this["webpackJsonpvie-net"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),r=n.n(i),s=(n(9),n(2)),o=(n(10),n(11),"https://api.themoviedb.org/3");function l(e){return e.map((function(e){var t=e.id,n=e.title,c=e.vote_average,a=e.overview,i=e.poster_path;return{id:t,title:n,date:e.release_date,rating:c,resume:a,picture:i?"".concat("https://image.tmdb.org/t/p/w300").concat(i):void 0}}))}var u=a.a.createContext({movies:[],updateMovies:Function}),A=n(0),j=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useContext)(u).updateMovies,r=function(e){e.preventDefault(),n&&function(e){return fetch("".concat(o,"/search/movie?query=").concat(e,"&api_key=").concat("038c5aace0f3b5c07ddc2c5f130937eb")).then((function(e){return e.json()})).then((function(e){return l(e.results)})).catch((function(e){return[]}))}(n).then((function(e){i(e)}))};return Object(A.jsx)("div",{className:"search__bar",children:Object(A.jsx)("form",{name:"form",onSubmit:function(e){return r(e)},noValidate:!0,children:Object(A.jsx)("input",{type:"text",name:"movie",className:"search__input",placeholder:"Search movie",value:n,onChange:function(e){return a(e.target.value)}})})})},d=(n(13),function(){return Object(A.jsxs)("div",{className:"header",children:[Object(A.jsx)("h1",{className:"header__title",children:"VIENET"}),Object(A.jsx)("div",{className:"header__search",children:Object(A.jsx)(j,{})})]})}),m=(n(14),function(){var e=Object(c.useContext)(u).movies;return Object(A.jsx)("div",{className:"catalogContainer",children:e.map((function(e){return Object(A.jsxs)("div",{className:"catalog__item",children:[Object(A.jsxs)("div",{className:"catalog__item__img",children:[Object(A.jsx)("img",{src:e.picture||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAIVBMVEXy8vLZ2dna2tre3t7h4eHw8PD09PTs7Ozm5ubj4+Pp6emhOneKAAAD3ElEQVR4nO3b2XKjMBBGYRYjlvd/4GERkpCMaewptZg531WccioNRp1fDakqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANUa7gC+NvXlg6aav63aoHle6edWLV/+wwrum3rSPKtwMtux6fFTdVbvX3dlvPONK7+voMjHD8IDOaMa97mkvtlkXaeml76uytq/NtL5qhq7k0m2Vwaq0bXHtjOVeL8avSltjV3vNWOpJ91W224Xh26L99lTiST9WuaxG/wH4k17eIjVNVOPQx2Vvn0VZTd28rfKtohap7x0CbTmdsbuu9njSy1ikce8QmDujdtVVEKmSJnKugLQbRKpubD4VGxjU6z5EKlP1spPuf1ztAI6RyphO0F5ee4wZtTrjp0h1rg9ijE5nNMlGR9AWG7e52F7P8SU3V2W7H4igLbpVmRx0Lu83Olf2CyPZ3eWr21VpF5gsrGxvfnPQucoOq1w3ZdKwsmwmkt1dvrqjKucFJit7fbM73dlnLncj1Ynsq/J+pHqnvf5Nf9mNJPWB6qr8XqPXvO9UOcQf0iv7X3nfxwZpgF2q7I9dKPfIPIxUxvTCxt2v2TU46U3equNIdSzmlI1Uxl9j2bcQPlJF8e6Tx0Yq+8OKkcp99Ekt5/xGJznoXGX/tNHxH0320+0u0Ncep6/Lng9ym9cmB51NGKmWMbGRhpV26ky6u8slqnIZE4vDSjO6051//pNU+VXGIlIJ674zOz6XPVJ14hz1kV6kuiNdEnmrDpv3JB7Bzr2jj96sGalMNwk7yTD3+OrwZt1INZcu2vhsPxrMa/Uilbsd/x9Eqq6ASBXOsS+4eW0Bkeqb2XEJkWq0ATa+0f32fNu73MnuLp8mLkYYVtYnDsqYHW+jbPH8pxnc5iL/+CHuHe1X0838q/J/ilSJp86O9SLVb/Qi1XjjxFdxZsw/O95/c1PJH394zX27O4yaNWfHy78GyKbHa5XhmxvFSLW9NpLb8W8POquHRqrKLTBXi3x2rBmplgtjva3wqNmx/f3zAruz0dnntX5grlH1WoE/X9dlL9fF8viD4qpMiG90L48/RK1Ite47jwy6L7SrnsmfGPT0nx2slkU63R3NlvCMaeU7o1T+SHVKmlNWRf0H2+ld7j5+4iB7pLpikjFxvc5roycOiliVEZPsDwYTL4BCVmXERJuJPcZoRiqhcJGWEqlk/KbMVelWpWph17bVWMBG5765M6YbHf1IJeDibrK7ewbFZ6l+4i6T7Lfjf7T/ySwoUsnY+FJUpBJa4ot2DV964NkGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/jj9cXSDEl6hGSAAAAABJRU5ErkJggg==",alt:e.title}),Object(A.jsx)("div",{className:"catalog__item__resume",children:e.resume})]}),Object(A.jsxs)("div",{className:"catalog__item__footer",children:[Object(A.jsxs)("div",{className:"catalog__item__footer__name",children:[e.title," (",new Date(e.date).getFullYear(),")"]}),Object(A.jsx)("div",{className:"catalog__item__footer__rating",children:e.rating})]})]},e.id)}))})});var v=function(){Object(c.useEffect)((function(){fetch("".concat(o,"/discover/movie?sort_by=popularity.desc&api_key=").concat("038c5aace0f3b5c07ddc2c5f130937eb")).then((function(e){return e.json()})).then((function(e){return l(e.results)})).catch((function(e){return[]})).then(a).catch((function(e){return a([])}))}),[]);var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(A.jsx)(u.Provider,{value:{movies:n,updateMovies:a},children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(d,{}),Object(A.jsx)(m,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(A.jsxs)(a.a.StrictMode,{children:[Object(A.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat&display=swap",rel:"stylesheet"}),Object(A.jsx)(v,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.237f978b.chunk.js.map