(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function p(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=p(t);fetch(t.href,s)}})();window.addEventListener("DOMContentLoaded",()=>{const h=document.querySelectorAll(".tabheader__item"),a=document.querySelectorAll(".tabcontent"),p=document.querySelector(".tabheader__items");function l(){a.forEach(e=>{e.classList.add("hide"),e.classList.remove("show","fade")}),h.forEach(e=>{e.classList.remove("tabheader__item_active")})}function t(e=0){a[e].classList.add("show","fade"),a[e].classList.remove("hide"),h[e].classList.add("tabheader__item_active")}l(),t(),p.addEventListener("click",e=>{const n=e.target;n&&n.classList.contains("tabheader__item")&&h.forEach((o,r)=>{n==o&&(l(),t(r))})});const s="2026-04-15";function u(e){let n,o,r,d;const i=Date.parse(e)-new Date;return i<=0?(n=0,o=0,r=0,d=0):(n=Math.floor(i/(1e3*60*60*24)),o=Math.floor(i/(1e3*60*60)%24),r=Math.floor(i/1e3/60%60),d=Math.floor(i/1e3%60)),{total:i,days:n,hours:o,minutes:r,seconds:d}}function f(e){return e>=0&&e<10?`0${e}`:e}function _(e,n){const o=document.querySelector(e),r=o.querySelector("#days"),d=o.querySelector("#hours"),i=o.querySelector("#minutes"),g=o.querySelector("#seconds"),q=setInterval(b,1e3);b();function b(){const m=u(n);r.innerHTML=f(m.days),d.innerHTML=f(m.hours),i.innerHTML=f(m.minutes),g.innerHTML=f(m.seconds),m.total<=0&&clearInterval(q)}}_(".timer",s);const M=document.querySelectorAll("[data-modal]"),E=document.querySelector("[data-close]"),c=document.querySelector(".modal");M.forEach(e=>{e.addEventListener("click",L)}),E.addEventListener("click",v);function L(){c.classList.add("show"),c.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(modalTimerId)}function v(){c.classList.add("hide"),c.classList.remove("show"),document.body.style.overflow=""}c.addEventListener("click",e=>{e.target===c&&v()}),document.addEventListener("keydown",e=>{e.code==="Escape"&&c.classList.contains("show")&&v()});function w(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(L(),window.removeEventListener("scroll",w))}window.addEventListener("scroll",w);class y{constructor(n,o,r,d,i,g){this.src=n,this.alt=o,this.title=r,this.descr=d,this.price=i,this.parent=document.querySelector(g),this.transfer=3.65,this.changeToPLN()}changeToPLN(){this.price=this.price*this.transfer}render(){const n=document.createElement("div");n.innerHTML=`
              <div class="menu__item">
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
              </div>
      `,this.parent.append(n)}}new y("img/tabs/vegy.jpg","vegy",'Menu "Fintess"',` The "Fitness" menu is a new approach to preparing dishes: more
      fresh vegetables and fruits. A product for active and healthy
      people. It's a completely new product with an optimal price
      and high quality!`,29,".menu .container").render(),new y("img/tabs/elite.jpg","elite",'Menu "Premium"',` In the "Premium" menu, we use not only beautiful packaging
      design but also high-quality dish preparation. Red fish,
      seafood, fruits — a restaurant-level menu without going to the
      restaurant!`,55,".menu .container").render(),new y("img/tabs/post.jpg","post",'"Lenten" menu',` The "Lenten" menu is a careful selection of ingredients:
      completely no animal products, milk made from almonds, oats,
      coconut, or buckwheat, and the right amount of protein thanks
      to tofu and imported vegetarian steaks.`,43,".menu .container").render()});
//# sourceMappingURL=index.js.map
