(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))E(w);new MutationObserver(w=>{for(const Q of w)if(Q.type==="childList")for(const i of Q.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&E(i)}).observe(document,{childList:!0,subtree:!0});function g(w){const Q={};return w.integrity&&(Q.integrity=w.integrity),w.referrerPolicy&&(Q.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?Q.credentials="include":w.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function E(w){if(w.ep)return;w.ep=!0;const Q=g(w);fetch(w.href,Q)}})();const e=document.getElementById("hangman-container"),J=document.getElementById("letter-input"),o=document.getElementById("hangman-image").getElementsByTagName("img")[0],I=document.getElementById("guess-btn"),s=document.getElementById("restart-btn"),G=document.getElementById("fail-letters"),C=["SALOON","VAQUERO","PRADERA","PISTOLERO","CARRO","DESIERTO","CABALLO","FORTALEZA","SHERIFF","SUEÑO","FERROCARRIL","FRONTERA","INDIOS","VIAJERO","RANCHERO"],Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH1QUSFAoGtHRxSwAAAslJREFUeJzt3EEKhDAUBUGVuf+V9QgKDnxiV53gbdJkEbJtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCdfXoA487pAR+x5Fk6pgcAcwQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwn7TA1jGkk9dH0g/hXYDgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDABgDB/AvLVv/54wA0AwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwvbpAfzFOT2AMa/OsBsAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANy7AOu/BIYwGzL3AAAAAElFTkSuQmCC",R="data:image/png;base64,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",c="data:image/png;base64,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",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH1QUSFQgD9+qNcQAACftJREFUeJzt3duLXWcZx/HvZFITxynTpMYm1VQkdtAopmk9VSuVWvRCBFEoeiPeKGJRUW/8G0RBEC+9EK8qkhY1iAc0nkI9tFi0mVJj1aSdtJ2m6TRpMofMHi+etdgvIcnM7L2z96z1fD8QJtOZWbPC3u/vfdfzHgqSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJGktY6O+AY3c6qhvoCUa2Za2jPoGJI2OASAlZgBIiRkAUmIGgJSYASAlZgBIiRkAUmIGgJSYASAltnXUN6DGaORS13VIvRTaEYCUmAEgJWYASIkZAFJiBoCUmAEgJWYASIkZAFJiBoCUmAEgJWYASIkZAFJiBoCUmAEgJWYASIkZAFJiBoDWa3LUN6DBMwBy20ijvg+4Ddh5je5FI+CRYDntBG4B7t3Az3wDeAL4E3AEeBw4N/A701C19Zw3XdnbgQ8DdwMHgJuBvwIdYDewB3gN8ApwCniWGCm+F1gBTgN/AX4O/BJ4ari3P3CDOhPQtqRN7w7gu8AJYBH4LTBHNIL6z0Vgqfr6EtHoV6vvO0IExXlgBvhmdc0mWx3Qn0YytfLYD3yeeJafJxry/uprq0RDnyd69Nnq6zcA+4CbgOuIkcCx6uM08BxwGPg+8PCQ/h2DlnoEYA0gh73Ap4CPE437LcQwvwMsA88D/wT+CBwlhv3jwA6ih38/cDvweuCtxAjg78DB6ppLRHjMDOsfJGl9JoDPEQ38GFG4q4f6zwCHgC8TDX3qMj8/BbwN+CLwYyJALlbXmSFC5CngS1f4+c0u9SOA2u+dwIPABaJyXw/3/wd8B3gX62u4E9W1vg38hwiB+noL1e9oYj3AAFBrTQFfB04SBb9VoseeA75H9OwbNQ18C3iaCJIj1cf/Al+heaMAA0CtdQfRMy/QrfYvAD8DPtDHdQ8CDxCjivK6P6K3UBml1AHgSsD2miKG9weAvwGvJXr/k8Qc/iN9XPtfxIjiGWJR0VFiluA24D3E44IawABor0limm833R5qEfgz8Buikt+rc8S03zFi+N8h3kt7iBmGHX1cW0NkALTXDcAuYjpvN9FITxG99ckBXP8EsSz4NLFOAGIU8DpiilENYAC01wrRIMeInrlDNNpHGcwa/heJJcFPEo0eYqSxhYYuisnIAGivcbrLeOtFPy8CZwf4O2aJRUPbi/9m428QA6C9lukGwCt0F/8sD/B31D1+XU8YI4KnsVXxbAyA9hqjGwCnqs+niNrAoNxMPP/PFb9znHj0UAMYAO12sfr4LLHv41ZianAQ03RTxP6AfcReAogA6BDBowYwANrrPLFBZ4V4nbcQPfa9dHcB9uPNxGKiG+m+jxaJsOlnilFDZAC018tEhf40cCfwArCNWM9/N/0t2Z0C7iJWBM4D7yN6/lli09ELfVxbQ2QAtNc8MU33KNEzP04M0XcB9xDD915NAx8k1hfUW4AXiZOFjuIIQNoUJoD7iaW7K0QIdIge+gfEMV8btZ/YRVj39vXuwuPAF2je6cGp9wJ4IEi7nSeW/d5JHOZRT9ntBD5afc+riVHC/BrXqrcD3wd8jGjo9c9cJJYFP4wHhUqbyiTwGeAxYg3AI0QjrUcCh4GvEY37crMDk8QpQPcDPyWm/M5W16l7/xPAV2nmkeGOANRq54ide28iVgQeIB4JOkTD/hDwDqKi/2ti5+AZYi7/emKH313ELr+9xFB/nKghdIhzAX8C/IpYaagGcdlmHtPAZ4kh/BuJ8P8dsX//RqKIN0uEw3z19fr/H7CH6PVniBkEiJ7/aeAh4If0t714lAbVezeyLTXyptWzaeDTwCeJefxtRF3gKNGb30TMEkwQtYLniR5+nJjqg2gwi8C/ifMEHyCKi01lACiVvcQU3keIYf0biCBY671QnyA8RzwmHAZ+wWC2Fo+SAaB0JokguIdYGXg78RhQ14TG6L436k1EzxGFxD8Avyeq/m2Y7zcAlNYEMa//buLxYHf1+S1Eoz9LHPY5A/yDWFh0nLWnDJskdQBIEEt79wKfIBp43esvEM/4B2neab/r5TSg0puv/uwi9hCsEIW+ceI9coZ29fqquBdApZeIqb0FYvi/RAxtfZ+0lC+sSnWlf7z6fCvwquJztYwBoFJZ/V8hwmCJCAa1kAGgUv1+qM8NrI/2MgBayiLg5nS5qvIwppm2EEP++jjxMRpe5dbVOQLYfK7U2IbREFeIIf9y9buWsQjYao4AmqcMgUGPCjrV9a+jOwVoEbDFDIBmG3QYWARMxqHd5tNrQx7EqjSLgMk4AticyhDopUHXP7PRMLEImIwBsPn1EwaXfv9agWARMBlf2GYpn9F7sVZvbhEwGUcAzXRpCPQzMhi75O8WARNxBNAO/YwMyuKhRcBkHAG0S3mKTy+OVx8XsAiYggHQTv0+ImwnTgKur+VIUWqBXk+7uXUUNzskngikNHodGVgDaCmHdrmtt3hoALSUASC4ehAcosFDXF2dAaDSPuBB4jzA2eqjRcAW84VVyZWAyRgAKrkSMBkDQCVXAiZjAKjkduBkDACV3A6cjC+sShYBkzEAVLIImIwBoJJFwGQMAJUsAiZjAKhkETAZX1iVLAImYwCoZBEwGQNAJYuAyRgAKlkETMYAUMkiYDK+sCpZBEzGAFDJImAyBoBKFgGTMQBUsgiYjAGgkkXAZHxhVbIImIwBoJJFwGQMAJUsAiZjAKhkETAZA0Ali4DJ+MKqZBEwGQNAJYuAyRgAKlkETMYAUMkiYDIGgEoWAZPxhVXJImAyBoBKFgGTMQBUsgiYjAGgkkXAZAwAlSwCJuMLq5JFwGQMAJXKImA9ArAI2GIGgEr1+6EDbAe2FZ+rhQwAlZaAl4lRwDai4c8BC6O8KV07W0d9A9pUzgAPEQFwPdH4DwEvjfKmdO2Mrf0tSmYS2EEUAi8Qjf/CSO/o2hrUFGcj21Ijb1oaoNQBYA1ASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASswAkBIzAKTEDAApMQNASmxs1DeggVgd9Q1oZPpqw44ApMQMACkxA0BKzACQEjMApMQMACkxA0BKzACQEjMApMQMACkxA0BKzACQEjMApMQMACkxA0CSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSpLX9H6j6uTz5QPV+AAAAAElFTkSuQmCC",r="data:image/png;base64,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",Y="data:image/png;base64,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",K="data:image/png;base64,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",d=[Z,R,c,a,r,Y,K],m=[];let k,t=0;const u=6,n=[],M=[],f=()=>{const A=J.value.toUpperCase();M.includes(A)||(M.push(A),m.length>0&&(k.includes(A)?v(A):p(A)))},v=A=>{let B=!0;for(let g=0;g<k.length;g++)k[g]===A&&F(g,A),document.getElementById(`letter-${g}`).textContent==="__ "&&(B=!1);B&&(D("YOU WIN"),S())},p=A=>{t++,o.src=d[t],n.push(A),x(),e.classList.add("vibrate"),t===u&&P(),setTimeout(()=>{e.classList.remove("vibrate")},1e3)};function L(){const A=Math.floor(Math.random()*C.length);return m.push(C[A]),C[A]}function T(){const A=document.getElementById("word-display");A.innerHTML="";for(let B=0;B<k.length;B++){const g=document.createElement("span");g.id=`letter-${B}`,g.textContent="__ ",A.appendChild(g)}}function l(){k=L(),T(),console.log(m)}function F(A,B){const g=document.getElementById(`letter-${A}`);g.textContent=B}function x(){G.textContent=`Letras incorrectas: ${n.join(", ")}`}const D=A=>{const B=document.createElement("h1");B.textContent=A,e.innerHTML="",e.appendChild(B);const g=document.createElement("button");g.textContent="RESTART",g.id="restart-btn-after-game-over",g.addEventListener("click",function(){location.reload()}),e.appendChild(g)},P=()=>{D("YOU ARE DEAD"),S()},S=()=>{J.disabled=!0,I.disabled=!0};l();J.addEventListener("keydown",function(A){A.code==="Enter"&&I.click()});I.addEventListener("click",f);s.addEventListener("click",function(){location.reload()});