var ECL=function(e){"use strict";var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))};return e.dialogs=function(){function e(e){e.preventDefault(),f.setAttribute("aria-hidden",!0),m.setAttribute("aria-hidden",!0),E&&E.focus(),document.querySelector("body").classList.remove("ecl-u-disablescroll")}function n(t){switch(t.keyCode){case 9:if(1===h.length){t.preventDefault();break}t.shiftKey?document.activeElement===g&&(t.preventDefault(),y.focus()):document.activeElement===y&&(t.preventDefault(),g.focus());break;case 27:e()}}function i(t){t.preventDefault(),f.setAttribute("aria-hidden",!1),m.setAttribute("aria-hidden",!1),E=document.activeElement,g.focus(),m.addEventListener("click",e),f.addEventListener("keydown",n),document.querySelector("body").classList.add("ecl-u-disablescroll")}function r(){v.length&&function(n){n.forEach(function(e){return e.addEventListener("click",i)}),t(".ecl-message__dismiss").forEach(function(t){t.addEventListener("click",e)})}(v)}var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=c.triggerElementsSelector,l=void 0===d?"[data-ecl-dialog]":d,a=c.dialogWindowId,o=void 0===a?"ecl-dialog":a,u=c.dialogOverlayId,s=void 0===u?"ecl-overlay":u;if(!("querySelector"in document&&"addEventListener"in window))return null;var v=t(l),f=document.getElementById(o),m=document.getElementById(s);if(!m){var b=document.createElement("div");b.setAttribute("id","ecl-overlay"),b.setAttribute("class","ecl-dialog__overlay"),b.setAttribute("aria-hidden","true"),document.body.appendChild(b),m=b}var h=[].slice.call(t('\n        a[href],\n        area[href],\n        input:not([disabled]),\n        select:not([disabled]),\n        textarea:not([disabled]),\n        button:not([disabled]),\n        [tabindex="0"]\n      ',f)),E=null,g=h[0],y=h[h.length-1];return r(),{init:r,destroy:function(){!function(n){n.forEach(function(e){return e.removeEventListener("click",i)}),t(".ecl-message__dismiss").forEach(function(t){t.removeEventListener("click",e)})}(v)}}},e}({});
