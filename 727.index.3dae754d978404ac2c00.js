"use strict";(self.webpackChunk_dappconnect_mainnet_poll_sdk_example=self.webpackChunk_dappconnect_mainnet_poll_sdk_example||[]).push([[727],{2727:(f,u,t)=>{t.r(u),t.d(u,{encrypt:()=>d,decrypt:()=>s,generateKeyForSymmetricEnc:()=>i,generateIv:()=>m});var y=t(45024),c=t(48834).Buffer;const r=window.crypto||window.msCrypto,n=r.subtle||r.webkitSubtle,o={name:"AES-GCM",length:128};if(n===void 0)throw new Error("Failed to load Subtle CryptoAPI");async function d(e,a,l){return n.importKey("raw",a,o,!1,["encrypt"]).then(p=>n.encrypt({iv:e,...o},p,l)).then(c.from)}async function s(e,a,l){return n.importKey("raw",a,o,!1,["decrypt"]).then(p=>n.decrypt({iv:e,...o},p,l)).then(c.from)}function i(){return r.getRandomValues(c.alloc(y.tW))}function m(){const e=new Uint8Array(y.Sh);return r.getRandomValues(e),e}}}]);

//# sourceMappingURL=727.index.3dae754d978404ac2c00.js.map