System.register(["react","use-sync-external-store/shim/with-selector","zustand/vanilla"],function(a){"use strict";var c,i,s;return{setters:[function(e){c=e.default},function(e){i=e.default},function(e){s=e.createStore}],execute:function(){a("useStoreWithEqualityFn",o);const{useDebugValue:e}=c,{useSyncExternalStoreWithSelector:S}=i,f=t=>t;function o(t,n=f,u){const r=S(t.subscribe,t.getState,t.getServerState||t.getInitialState,n,u);return e(r),r}const l=(t,n)=>{const u=s(t),r=(y,h=n)=>o(u,y,h);return Object.assign(r,u),r},g=a("createWithEqualityFn",(t,n)=>t?l(t,n):l)}}});