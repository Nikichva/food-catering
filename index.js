(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function L(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=L(n);fetch(n.href,i)}})();window.addEventListener("DOMContentLoaded",()=>{const p=document.querySelectorAll(".tabheader__item"),c=document.querySelectorAll(".tabcontent"),L=document.querySelector(".tabheader__items");function l(){c.forEach(e=>{e.classList.add("hide"),e.classList.remove("show","fade")}),p.forEach(e=>{e.classList.remove("tabheader__item_active")})}function n(e=0){c[e].classList.add("show","fade"),c[e].classList.remove("hide"),p[e].classList.add("tabheader__item_active")}l(),n(),L.addEventListener("click",e=>{const s=e.target;s&&s.classList.contains("tabheader__item")&&p.forEach((t,o)=>{s==t&&(l(),n(o))})});const i="2026-04-15";function u(e){let s,t,o,r;const a=Date.parse(e)-new Date;return a<=0?(s=0,t=0,o=0,r=0):(s=Math.floor(a/(1e3*60*60*24)),t=Math.floor(a/(1e3*60*60)%24),o=Math.floor(a/1e3/60%60),r=Math.floor(a/1e3%60)),{total:a,days:s,hours:t,minutes:o,seconds:r}}function g(e){return e>=0&&e<10?`0${e}`:e}function q(e,s){const t=document.querySelector(e),o=t.querySelector("#days"),r=t.querySelector("#hours"),a=t.querySelector("#minutes"),m=t.querySelector("#seconds"),h=setInterval(y,1e3);y();function y(){const f=u(s);o.innerHTML=g(f.days),r.innerHTML=g(f.hours),a.innerHTML=g(f.minutes),m.innerHTML=g(f.seconds),f.total<=0&&clearInterval(h)}}q(".timer",i);const T=document.querySelectorAll("[data-modal]"),d=document.querySelector(".modal");T.forEach(e=>{e.addEventListener("click",v)});function v(){d.classList.add("show"),d.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(S)}function w(){d.classList.add("hide"),d.classList.remove("show"),document.body.style.overflow=""}d.addEventListener("click",e=>{(e.target===d||e.target.getAttribute("data-close")=="")&&w()}),document.addEventListener("keydown",e=>{e.code==="Escape"&&d.classList.contains("show")&&w()});const S=setTimeout(v,5e4);function E(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(v(),window.removeEventListener("scroll",E))}window.addEventListener("scroll",E);class _{constructor(s,t,o,r,a,m,...h){this.src=s,this.alt=t,this.title=o,this.descr=r,this.price=a,this.classes=h,this.parent=document.querySelector(m),this.transfer=3.65,this.changeToPLN()}changeToPLN(){this.price=this.price*this.transfer}render(){const s=document.createElement("div");this.classes.length===0?(this.element="menu__item",s.classList.add(this.element)):this.classes.forEach(t=>s.classList.add(t)),s.innerHTML=`
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
      `,this.parent.append(s)}}new _("img/tabs/vegy.jpg","vegy",'Menu "Fintess"',` The "Fitness" menu is a new approach to preparing dishes: more
      fresh vegetables and fruits. A product for active and healthy
      people. It's a completely new product with an optimal price
      and high quality!`,29,".menu .container").render(),new _("img/tabs/elite.jpg","elite",'Menu "Premium"',` In the "Premium" menu, we use not only beautiful packaging
      design but also high-quality dish preparation. Red fish,
      seafood, fruits — a restaurant-level menu without going to the
      restaurant!`,55,".menu .container").render(),new _("img/tabs/post.jpg","post",'"Lenten" menu',` The "Lenten" menu is a careful selection of ingredients:
      completely no animal products, milk made from almonds, oats,
      coconut, or buckwheat, and the right amount of protein thanks
      to tofu and imported vegetarian steaks.`,43,".menu .container").render();const O=document.querySelectorAll("form"),b={loading:"icons/spinner.svg",success:"Thank you! We will contact you soon",failure:"Ops! Something gone wrong..."};O.forEach(e=>{P(e)});function P(e){e.addEventListener("submit",s=>{s.preventDefault();const t=document.createElement("img");t.src=b.loading,t.style.cssText=`
        display: block;
        margin: 0 auto;
      `,e.insertAdjacentElement("afterend",t);const o=new XMLHttpRequest;o.open("POST","server.php"),o.setRequestHeader("Content-type","application/json");const r=new FormData(e),a={};r.forEach(function(h,y){a[y]=h});const m=JSON.stringify(a);o.send(m),o.addEventListener("load",()=>{o.status===200?(console.log(o.response),M(b.success),e.reset(),t.remove()):M(b.failure)})})}function M(e){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),v();const t=document.createElement("div");t.classList.add("modal__dialog"),t.innerHTML=`
    <div class="modal__content">
      <div class="modal__close" data-close>&times;</div>
      <div class="modal__title">${e}</div>
    </div>
    `,document.querySelector(".modal").append(t),setTimeout(()=>{t.remove(),s.classList.add("show"),s.classList.remove("hide"),w()},4e3)}});
//# sourceMappingURL=index.js.map
