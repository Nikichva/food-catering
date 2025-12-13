(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function v(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(n){if(n.ep)return;n.ep=!0;const i=v(n);fetch(n.href,i)}})();window.addEventListener("DOMContentLoaded",()=>{const f=document.querySelectorAll(".tabheader__item"),c=document.querySelectorAll(".tabcontent"),v=document.querySelector(".tabheader__items");function d(){c.forEach(e=>{e.classList.add("hide"),e.classList.remove("show","fade")}),f.forEach(e=>{e.classList.remove("tabheader__item_active")})}function n(e=0){c[e].classList.add("show","fade"),c[e].classList.remove("hide"),f[e].classList.add("tabheader__item_active")}d(),n(),v.addEventListener("click",e=>{const s=e.target;s&&s.classList.contains("tabheader__item")&&f.forEach((t,a)=>{s==t&&(d(),n(a))})});const i="2026-04-15";function u(e){let s,t,a,r;const o=Date.parse(e)-new Date;return o<=0?(s=0,t=0,a=0,r=0):(s=Math.floor(o/(1e3*60*60*24)),t=Math.floor(o/(1e3*60*60)%24),a=Math.floor(o/1e3/60%60),r=Math.floor(o/1e3%60)),{total:o,days:s,hours:t,minutes:a,seconds:r}}function p(e){return e>=0&&e<10?`0${e}`:e}function T(e,s){const t=document.querySelector(e),a=t.querySelector("#days"),r=t.querySelector("#hours"),o=t.querySelector("#minutes"),m=t.querySelector("#seconds"),w=setInterval(M,1e3);M();function M(){const h=u(s);a.innerHTML=p(h.days),r.innerHTML=p(h.hours),o.innerHTML=p(h.minutes),m.innerHTML=p(h.seconds),h.total<=0&&clearInterval(w)}}T(".timer",i);const S=document.querySelectorAll("[data-modal]"),l=document.querySelector(".modal");S.forEach(e=>{e.addEventListener("click",g)});function g(){l.classList.add("show"),l.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(q)}function y(){l.classList.add("hide"),l.classList.remove("show"),document.body.style.overflow=""}l.addEventListener("click",e=>{(e.target===l||e.target.getAttribute("data-close")=="")&&y()}),document.addEventListener("keydown",e=>{e.code==="Escape"&&l.classList.contains("show")&&y()});const q=setTimeout(g,5e4);function b(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(g(),window.removeEventListener("scroll",b))}window.addEventListener("scroll",b);class L{constructor(s,t,a,r,o,m,...w){this.src=s,this.alt=t,this.title=a,this.descr=r,this.price=o,this.classes=w,this.parent=document.querySelector(m),this.transfer=3.65,this.changeToPLN()}changeToPLN(){this.price=this.price*this.transfer}render(){const s=document.createElement("div");this.classes.length===0?(this.element="menu__item",s.classList.add(this.element)):this.classes.forEach(t=>s.classList.add(t)),s.innerHTML=`
                <img src=${this.src} alt=${this.alt} />
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">
                  ${this.descr}
                </div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                  <div class="menu__item-cost">Price:</div>
                  <div class="menu__item-total"><span>${this.price}</span> pln/day</div>
                </div> 
      `,this.parent.append(s)}}new L("img/tabs/vegy.jpg","vegy",'Menu "Fintess"',` The "Fitness" menu is a new approach to preparing dishes: more
      fresh vegetables and fruits. A product for active and healthy
      people. It's a completely new product with an optimal price
      and high quality!`,29,".menu .container").render(),new L("img/tabs/elite.jpg","elite",'Menu "Premium"',` In the "Premium" menu, we use not only beautiful packaging
      design but also high-quality dish preparation. Red fish,
      seafood, fruits — a restaurant-level menu without going to the
      restaurant!`,55,".menu .container").render(),new L("img/tabs/post.jpg","post",'"Lenten" menu',` The "Lenten" menu is a careful selection of ingredients:
      completely no animal products, milk made from almonds, oats,
      coconut, or buckwheat, and the right amount of protein thanks
      to tofu and imported vegetarian steaks.`,43,".menu .container").render();const O=document.querySelectorAll("form"),_={loading:"icons/spinner.svg",success:"Thank you! We will contact you soon",failure:"Ops! Something gone wrong..."};O.forEach(e=>{P(e)});function P(e){e.addEventListener("submit",s=>{s.preventDefault();const t=document.createElement("img");t.src=_.loading,t.style.cssText=`
        display: block;
        margin: 0 auto;
      `,e.insertAdjacentElement("afterend",t);const a=new FormData(e),r={};a.forEach(function(o,m){r[m]=o}),fetch("server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)}).then(o=>o.text()).then(o=>{console.log(o),E(_.success),t.remove()}).catch(()=>{E(_.failure)}).finally(()=>{e.reset()})})}function E(e){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),g();const t=document.createElement("div");t.classList.add("modal__dialog"),t.innerHTML=`
    <div class="modal__content">
      <div class="modal__close" data-close>&times;</div>
      <div class="modal__title">${e}</div>
    </div>
    `,document.querySelector(".modal").append(t),setTimeout(()=>{t.remove(),s.classList.add("show"),s.classList.remove("hide"),y()},4e3)}fetch("http://localhost:3000/menu").then(e=>e.json()).then(e=>console.log(e))});
//# sourceMappingURL=index.js.map
