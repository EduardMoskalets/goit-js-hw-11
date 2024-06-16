import{S as u,i as f}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function d(t){const o="https://pixabay.com/api/",s={q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"44405907-01ac5a46b548f68b2a274235a"},e=new URLSearchParams(s);return fetch(`${o}?${e}`).then(r=>{if(!r.ok)throw new Error("Error!");return r.json()})}function m(t){t.innerHTML=""}function p(t,o){const n=t.map(e=>`
        <a href="${e.largeImageURL}" class="gallery__item">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery__image" />
            <div class="info">
                <p class="info-item"><b>Likes:</b> ${e.likes}</p>
                <p class="info-item"><b>Views:</b> ${e.views}</p>
                <p class="info-item"><b>Comments:</b> ${e.comments}</p>
                <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
            </div>
        </a>
    `).join("");o.insertAdjacentHTML("beforeend",n),new u(".gallery a").refresh()}function a(t,o){f[t]({title:t.charAt(0).toUpperCase()+t.slice(1),message:o})}const h=document.getElementById("searchForm"),y=document.getElementById("searchQuery"),c=document.getElementById("results");h.addEventListener("submit",async t=>{t.preventDefault();const o=y.value.trim();if(!o){a("error","Search query cannot be empty");return}m(c),g();try{const n=await d(o);l(),n.length>0?p(n,c):a("info","Sorry, there are no images matching your search query. Please try again!")}catch{l(),a("error","Something went wrong. Please try again later.")}});function g(){c.innerHTML='<div class="loader"></div>'}function l(){const t=document.querySelector(".loader");t&&t.remove()}
//# sourceMappingURL=commonHelpers.js.map
