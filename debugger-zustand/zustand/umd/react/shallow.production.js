!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).zustandReactShallow={},e.React)}(this,(function(e,t){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o=t.useRef;e.useShallow=function(e){var t=o();return function(r){var o=e(r);return function(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(var r,o=n(e);!(r=o()).done;){var i=r.value,a=i[0],u=i[1];if(!Object.is(u,t.get(a)))return!1}return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(var f,c=n(e);!(f=c()).done;){var l=f.value;if(!t.has(l))return!1}return!0}var s=Object.keys(e);if(s.length!==Object.keys(t).length)return!1;for(var y=0;y<s.length;y++)if(!Object.prototype.hasOwnProperty.call(t,s[y])||!Object.is(e[s[y]],t[s[y]]))return!1;return!0}(t.current,o)?t.current:t.current=o}}}));