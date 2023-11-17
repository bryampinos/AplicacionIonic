"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2975],{2975:(B,f,i)=>{i.r(f),i.d(f,{ion_reorder:()=>g,ion_reorder_group:()=>I});var T=i(5861),l=i(8411),u=i(5307),E=i(3395),p=i(8360),M=i(839),m=i(967);i(4874),i(6225);const g=class{constructor(t){(0,l.r)(this,t)}onClick(t){const e=this.el.closest("ion-reorder-group");t.preventDefault(),(!e||!e.disabled)&&t.stopImmediatePropagation()}render(){const t=(0,E.b)(this);return(0,l.h)(l.H,{class:t},(0,l.h)("slot",null,(0,l.h)("ion-icon",{icon:"ios"===t?u.j:u.k,lazy:!1,class:"reorder-icon",part:"icon","aria-hidden":"true"})))}get el(){return(0,l.f)(this)}};g.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:1rem}.reorder-icon{font-size:2.125rem;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:1rem}.reorder-icon{font-size:1.9375rem;opacity:0.3}"};const I=class{constructor(t){(0,l.r)(this,t),this.ionItemReorder=(0,l.d)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}connectedCallback(){var t=this;return(0,T.Z)(function*(){const e=(0,p.f)(t.el);e&&(t.scrollEl=yield(0,p.g)(e)),t.gesture=(yield Promise.resolve().then(i.bind(i,9203))).createGesture({el:t.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:s=>t.canStart(s),onStart:s=>t.onStart(s),onMove:s=>t.onMove(s),onEnd:()=>t.onEnd()}),t.disabledChanged()})()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeReorder(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const s=t.event.target.closest("ion-reorder");if(!s)return!1;const r=P(s,this.el);return!!r&&(t.data=r,!0)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,s=this.cachedHeights;s.length=0;const r=this.el,o=r.children;if(!o||0===o.length)return;let c=0;for(let a=0;a<o.length;a++){const d=o[a];c+=d.offsetHeight,s.push(c),d.$ionIndex=a}const n=r.getBoundingClientRect();if(this.containerTop=n.top,this.containerBottom=n.bottom,this.scrollEl){const a=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=a.top+b,this.scrollElBottom=a.bottom-b}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=h(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(x),(0,m.a)()}onMove(t){const e=this.selectedItemEl;if(!e)return;const s=this.autoscroll(t.currentY),r=this.containerTop-s,c=Math.max(r,Math.min(t.currentY,this.containerBottom-s)),n=s+c-t.startY,d=this.itemIndexForTop(c-r);if(d!==this.lastToIndex){const R=h(e);this.lastToIndex=d,(0,m.b)(),this.reorderMove(R,d)}e.style.transform=`translateY(${n}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,s=h(t);e===s?this.completeReorder():this.ionItemReorder.emit({from:s,to:e,complete:this.completeReorder.bind(this)}),(0,m.h)()}completeReorder(t){const e=this.selectedItemEl;if(e&&2===this.state){const s=this.el.children,r=s.length,o=this.lastToIndex,c=h(e);(0,M.r)(()=>{o===c||void 0!==t&&!0!==t||this.el.insertBefore(e,c<o?s[o+1]:s[o]);for(let n=0;n<r;n++)s[n].style.transform=""}),Array.isArray(t)&&(t=D(t,c,o)),e.style.transition="",e.classList.remove(x),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;for(let s=0;s<e.length;s++)if(e[s]>t)return s;return e.length-1}reorderMove(t,e){const s=this.selectedItemHeight,r=this.el.children;for(let o=0;o<r.length;o++){let n="";o>t&&o<=e?n=`translateY(${-s}px)`:o<t&&o>=e&&(n=`translateY(${s}px)`),r[o].style.transform=n}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-_:t>this.scrollElBottom&&(e=_),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=(0,E.b)(this);return(0,l.h)(l.H,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return(0,l.f)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},h=t=>t.$ionIndex,P=(t,e)=>{let s;for(;t;){if(s=t.parentElement,s===e)return t;t=s}},b=60,_=10,x="reorder-selected",D=(t,e,s)=>{const r=t[e];return t.splice(e,1),t.splice(s,0,r),t.slice()};I.style=".reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);