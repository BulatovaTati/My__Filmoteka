!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequiree4c3;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequiree4c3=a),a("bkLr0"),a("ihtdk"),a("hBZCD"),a("kf06I"),a("duIyV"),a("l0VRD");var i=a("ihtdk"),r=a("kZ2no");function s(e){i.refs.cardsContainer.innerHTML="";var t,n=(0,r.getFromStorage)(e);n&&n.length>0?(t=n.map((function(e){var t,n,a=e.genres.map((function(e){return e.name})),i=e.name||e.title,r=(null===(t=e.release_date)||void 0===t?void 0:t.slice(0,4))||(null===(n=e.first_air_date)||void 0===n?void 0:n.slice(0,4)),s=e.poster_path,c=e.vote_average.toFixed(1),o=a.join(", ");return'<li class="cards__item ">\n      <div class="card__img--container "> <img src="https://image.tmdb.org/t/p/w500'.concat(s,'" alt="Movie" class="card__img"></div>    \n               <div class="card__info">\n          <h2 class="card__title">').concat(i,'</h2>\n         <div class="card__decr">  \n          <p class="card__genre">').concat(o,' <span> | </span> </p>\n           <p class="card__year">').concat(r,'</p>\n          <p class="card__rating">').concat(c,"</p>\n          </div>\n        </div>\n      </li>")})).join(""),i.refs.cardsContainer.insertAdjacentHTML("afterbegin",t),i.refs.noFilmsMessage.classList.add("visually-hidden")):i.refs.noFilmsMessage.classList.remove("visually-hidden")}function c(e){e.setAttribute("disabled",""),e.classList.add("button-active")}function o(e){e.removeAttribute("disabled"),e.classList.remove("button-active")}i.refs.watchedButton.addEventListener("click",(function(){s("watch"),c(i.refs.watchedButton),o(i.refs.queueButton)})),i.refs.queueButton.addEventListener("click",(function(){s("queue"),o(i.refs.watchedButton),c(i.refs.queueButton)})),s("watch"),a("8M703"),a("bLsyj")}();
//# sourceMappingURL=library.9792f00c.js.map
