(this.webpackJsonpskullstaking=this.webpackJsonpskullstaking||[]).push([[0],{207:function(e,t,n){},209:function(e,t,n){},223:function(e,t){},226:function(e,t){},229:function(e,t){},233:function(e,t){},260:function(e,t){},262:function(e,t){},276:function(e,t){},278:function(e,t){},308:function(e,t){},310:function(e,t){},402:function(e,t){},403:function(e,t){},506:function(e,t,n){"use strict";n.r(t);var a=n(16),i=n.n(a),s=n(195),r=n.n(s),p=(n(207),n(4)),u=n(5),o=n(11),y=n(10),l=n(45),d=n(14),c=n.n(d),m=(n(209),n(46)),b=(n(210),n(109)),f=n.n(b),T=n(197),w=n.n(T),x=n(8),v=[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"string",name:"_initBaseURI",type:"string"},{internalType:"string",name:"_initNotRevealedUri",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMintAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"notRevealedUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"reveal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseExtension",type:"string"}],name:"setBaseExtension",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newCost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_notRevealedURI",type:"string"}],name:"setNotRevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newmaxMintAmount",type:"uint256"}],name:"setmaxMintAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}],h=[{inputs:[{internalType:"contract ERC721Enumerable",name:"_skullhead",type:"address"},{internalType:"contract ISkullheadToken",name:"_skullcoin",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Claimed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"NFTStaked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"NFTUnstaked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"claimForAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"earningInfo",outputs:[{internalType:"uint256[1]",name:"info",type:"uint256[1]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"from",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bytes",name:"",type:"bytes"}],name:"onERC721Received",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"pure",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"tokensOfOwner",outputs:[{internalType:"uint256[]",name:"ownerTokens",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalStaked",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"unstake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"vault",outputs:[{internalType:"uint24",name:"tokenId",type:"uint24"},{internalType:"uint48",name:"timestamp",type:"uint48"},{internalType:"address",name:"owner",type:"address"}],stateMutability:"view",type:"function"}],g=null,j=null,k=null,O="0x130CfcD3d22b4C5cf2Cd99f0d1BC536E8A0Da038",M="0x8423474a3e59e9334e2D68b20FF95a21B8F0Fb1F",I=new w.a({network:"polygon",theme:"dark",cacheProvider:!0,providerOptions:{binancechainwallet:{package:!0}}});function F(){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.connect();case 2:return t=e.sent,n=new f.a(t),e.next=6,t.send("eth_requestAccounts");case 6:return e.next=8,n.eth.getAccounts();case 8:a=e.sent,g=a[0],document.getElementById("wallet-address").textContent=g,j=new n.eth.Contract(v,O),k=new n.eth.Contract(h,M);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Number(document.querySelector("[name=stkid]").value),k.methods.stake([t]).send({from:g});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Number(document.querySelector("[name=stkid]").value),k.methods.unstake([t]).send({from:g});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Number(document.querySelector("[name=stkid]").value),k.methods.claim([t]).send({from:g});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return U.apply(this,arguments)}function U(){return(U=Object(l.a)(c.a.mark((function e(){var t,n,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Number(document.querySelector("[name=stkid]").value),e.next=3,k.methods.earningInfo(g,[t]).call();case 3:n=e.sent,a=String(n).split(",")[0],i=f.a.utils.fromWei(a),s=Number(i).toFixed(2),document.getElementById("earned").textContent=s;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.methods.setApprovalForAll(M,!0).send({from:g});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(e){Object(o.a)(n,e);var t=Object(y.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={balance:[]},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",class:"row justify-content-center",children:[Object(x.jsxs)("form",{class:"border border-4 border-warning",style:{padding:"20px",width:"100%",borderRadius:"25px",backgroundColor:"#c62f42"},children:[Object(x.jsx)("h4",{style:{color:"#FFFFFF"},children:"STAKING POOL"}),Object(x.jsx)(m.a,{variant:"outline-warning",onClick:F,style:{marginBottom:"5px"},children:"Connect Wallet"}),Object(x.jsx)("div",{}),Object(x.jsx)(m.a,{variant:"outline-warning",onClick:L,style:{marginBottom:"5px"},children:"Approve Staking"}),Object(x.jsx)("div",{id:"wallet-address",class:"text-uppercase fw-bold",style:{marginTop:"3px"},children:Object(x.jsx)("label",{for:"floatingInput",children:"Please connect your wallet address"})}),Object(x.jsxs)("div",{style:{marginTop:"3px"},children:[Object(x.jsx)("label",{style:{width:"100%",color:"white"},children:"Insert Azuki Skullhead #ID"}),Object(x.jsx)("input",{style:{width:"100%",fontWeight:"bold",textAlign:"center",padding:"10px 18px",margin:"8px 0",boxSizing:"border-box"},name:"stkid"}),Object(x.jsxs)("div",{style:{marginTop:"5px"},class:"d-flex justify-content-around",children:[Object(x.jsx)(m.a,{variant:"outline-warning",onClick:A,children:"STAKE"}),Object(x.jsx)(m.a,{variant:"outline-warning",onClick:R,children:"UNSTAKE"})]})]})]}),Object(x.jsx)("div",{style:{height:"50px"}}),Object(x.jsxs)("form",{class:"border border-4 border-warning",style:{padding:"20px",width:"100%",borderRadius:"25px",backgroundColor:"#c62f42"},children:[Object(x.jsx)("h4",{style:{color:"#FFFFFF"},children:"STAKING REWARDS"}),Object(x.jsx)(m.a,{variant:"outline-warning",onClick:E,children:"Calculate earned $SKULL"}),Object(x.jsx)("div",{id:"earned",class:"text-warning",style:{marginTop:"5px",fontSize:"25px",fontWeight:"bold",textShadow:"1px 1px 2px #000000"},children:Object(x.jsx)("p",{style:{fontSize:"20px"},children:"Earned $SKULL"})}),Object(x.jsxs)("div",{className:"col-12 mt-2",children:[Object(x.jsx)("div",{style:{color:"white"},children:"Claim Rewards"}),Object(x.jsx)(m.a,{variant:"outline-warning",className:"mb-2",onClick:_,children:"Claim"})]})]})]})})})}}]),n}(a.Component),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,509)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(K,{})})),q()}},[[506,1,2]]]);
//# sourceMappingURL=main.30df5713.chunk.js.map