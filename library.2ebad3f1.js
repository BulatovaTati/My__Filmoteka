var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequiree4c3;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequiree4c3=r),r("16IEh"),r("37uNk"),r("5SzY7"),r("dZ9QN"),r("kbfff"),r("aAM9C");var i=r("37uNk"),o=r("cXfU0");const a=document.querySelector(".queue_button"),c=document.querySelector(".watched_button"),s=(document.querySelector(".cards"),document.querySelector(".cards__list")),d=document.querySelector(".alert__mеssаge");function l(e){s.innerHTML="";const t=(0,o.getFromStorage)(e);t&&t.length>0?(!function(e){const t=e.map((e=>{var t,n;const r=e.genres.map((e=>e.name)),i=e.name||e.title,o=(null===(t=e.release_date)||void 0===t?void 0:t.slice(0,4))||(null===(n=e.first_air_date)||void 0===n?void 0:n.slice(0,4)),a=e.poster_path,c=e.vote_average.toFixed(1);return`<li class="cards__item ">    \n        <img src="https://image.tmdb.org/t/p/w500${a}" alt="Movie" class="card__img">\n        <div class="card__info">\n          <h2 class="card__title">${i}</h2>\n         <div class="card__decr">  \n          <p class="card__genre">${r.join(", ")} <span> | </span> </p>\n           <p class="card__year">${o}</p>\n          <p class="card__rating">${c}</p>\n          </div>\n        </div>\n      </li>`})).join("");i.refs.cardsContainer.insertAdjacentHTML("afterbegin",t)}(t),d.classList.add("visually-hidden")):d.classList.remove("visually-hidden")}function u(e){e.setAttribute("disabled","")}function f(e){e.removeAttribute("disabled")}c.addEventListener("click",(function(){l("watch"),u(c),f(a)})),a.addEventListener("click",(function(){l("queue"),f(c),u(a)})),l("watch"),r("7qAvB"),r("4LZXW");if(document.querySelector(".header__library")){const e=document.querySelector(".footer");e.style.position="absolute",e.style.bottom="0"}
//# sourceMappingURL=library.2ebad3f1.js.map
