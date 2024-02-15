System.register(['react'], (function (exports) {
  'use strict';
  var ReactExports;
  return {
    setters: [function (module) {
      ReactExports = module.default;
    }],
    execute: (function () {

      exports("useShallow", useShallow);

      function shallow(objA, objB) {
        if (Object.is(objA, objB)) {
          return true;
        }
        if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
          return false;
        }
        if (objA instanceof Map && objB instanceof Map) {
          if (objA.size !== objB.size)
            return false;
          for (const [key, value] of objA) {
            if (!Object.is(value, objB.get(key))) {
              return false;
            }
          }
          return true;
        }
        if (objA instanceof Set && objB instanceof Set) {
          if (objA.size !== objB.size)
            return false;
          for (const value of objA) {
            if (!objB.has(value)) {
              return false;
            }
          }
          return true;
        }
        const keysA = Object.keys(objA);
        if (keysA.length !== Object.keys(objB).length) {
          return false;
        }
        for (let i = 0; i < keysA.length; i++) {
          if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
          }
        }
        return true;
      }

      const { useRef } = ReactExports;
      function useShallow(selector) {
        const prev = useRef();
        return (state) => {
          const next = selector(state);
          return shallow(prev.current, next) ? prev.current : prev.current = next;
        };
      }

    })
  };
}));
