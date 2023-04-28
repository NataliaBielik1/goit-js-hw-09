const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=()=>document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;let o=0;t.onclick=()=>{o>0||(a(),o=setInterval((()=>a()),1e3),t.disabled="disabled")},e.onclick=()=>{clearInterval(o),t.disabled=""};
//# sourceMappingURL=01-color-switcher.4963fa80.js.map
