!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){var n=function(e){(function(e){return new Promise((function(n,t){var r=Math.random()>.3;setTimeout((function(){r?n():t()}),e)}))})(c).then((function(){o.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(c,"ms"))})).catch((function(){o.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(c,"ms"))})),c+=Number(i.value)};e.preventDefault();for(var t=e.currentTarget.elements,r=t.delay,i=t.step,u=t.amount,c=Number(r.value),a=1;a<=u.value;a++)n(a);e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.ba2d4a4a.js.map
