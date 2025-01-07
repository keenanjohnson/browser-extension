import{s as a,g as i}from"./storage-D2uzPJPy.js";const m=new MutationObserver((o,c)=>{for(const s of o)s.type==="childList"&&s.addedNodes.forEach(n=>{if(typeof n.className=="string"&&n.className==="fixed right-4 top-8 my-2 flex max-h-[90vh] flex-col-reverse space-y-2 space-y-reverse overflow-y-auto px-2 py-4"){const e=n.innerText.replace("ChatGPT",""),t=document.querySelectorAll("article"),u=t[t.length-2],r=[];r.push({type:"inputTokens",content:u.innerText}),r.push({type:"outputTokens",content:e}),g(r)}})});m.observe(document.body,{childList:!0,subtree:!0});function g(o){console.log("ChatGPT output finished");const c=[];o.forEach(s=>{const n=h(s);c.push(n)}),Promise.all(c).then(s=>{let n={};s.forEach(e=>{let t=Object.keys(e)[0],u=Object.values(e)[0];n[t]=u}),d(n).then(e=>e).then(e=>(a({user:e}),e)).then(e=>{f(e)})}).catch(s=>{console.error(s)})}const h=function(o){return new Promise(function(c,s){o.content;const n=o.content.length,e=o.type;i("config").then(t=>{const u=n/t.charsPerToken;i("user").then(r=>{const l=r[e],p=Math.ceil(l+u);c({[e]:p})})})})},d=function(o){return new Promise(function(c,s){const n=o.inputTokens,e=o.outputTokens;i("config").then(t=>(n*t.inputFactor+e*t.outputFactor)*t.PUE*t.gridFactor).then(t=>{o.totalEmissions=t,c(o)})})},y=function(){return new Promise(function(o,c){const s="user-stats",n=document.querySelector(`#${s}`);if(n){const e=n.querySelector("span");o([n,e])}else{const e=document.createElement("div"),t=document.createElement("span");e.id=s,e.insertAdjacentElement("afterbegin",t),document.body.insertAdjacentElement("afterbegin",e),o([e,t])}})};function f(o){y().then(c=>{const s=c[0],n=c[1];if(i("ui").then(t=>{s.style.top=t.yPos,s.style.left=t.xPos}),E(s),n.textContent=`Input tokens: ${o.inputTokens} \r
`,n.textContent+=`Output tokens: ${o.outputTokens} \r
`,n.textContent+=`Total emissions: ${o.totalEmissions.toString().substring(0,6)}gCO2e/kWh \r
`,!document.querySelector(".reset-btn")){const t=document.createElement("img");t.className="reset-btn",t.src=chrome.runtime.getURL("../assets/reset.svg"),t.addEventListener("mouseup",function(u){const r={};r.user={},r.user.inputTokens=0,r.user.outputTokens=0,r.user.totalEmissions=0,a(r).then(l=>{console.log("cleared storage OK"),f(r.user)}).catch(l=>{console.log(l)})},!0),s.appendChild(t)}})}const T=function(){return new Promise(function(o,c){["ui","config","user"].forEach(n=>{i(n).then(e=>{console.log(`${n} values loaded OK`),console.log(e),n==="user"&&f(e)}).catch(e=>{if(e==="emptyKey"){console.log(`No ${n} values found`);const t={};n==="user"?(t.user={},t.user.inputTokens=0,t.user.outputTokens=0,t.user.totalEmissions=0):n==="config"?(t.config={},t.config.charsPerToken=4,t.config.gridFactor=383,t.config.inputFactor=1e-7,t.config.outputFactor=2e-7,t.config.PUE=1.125):n==="ui"&&(t.ui={},t.ui.xPos="0px",t.ui.yPos="80%"),a(t).then(u=>{console.log(`${n} values saved OK`)})}else console.error(e)})})})};T();function E(o){let c,s=[0,0],n=!1;o.addEventListener("mousedown",function(e){n=!0,s=[o.offsetLeft-e.clientX,o.offsetTop-e.clientY]},!0),document.addEventListener("mouseup",function(){n=!1;const e={};e.ui={},e.ui.xPos=o.style.left,e.ui.yPos=o.style.top,a(e).then(t=>{console.log("ui position updated OK")})},!0),document.addEventListener("mousemove",function(e){e.preventDefault(),n&&(c={x:e.clientX,y:e.clientY},o.style.left=c.x+s[0]+"px",o.style.top=c.y+s[1]+"px")},!0)}
