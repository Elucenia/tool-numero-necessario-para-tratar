/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"numero-necessario-para-tratar","title":"NNT e NNH (número necessário para tratar)","fields":[["ec","Eventos no grupo controle","num",{"min":0,"max":1000000,"step":1,"ph":"20","integer":true}],["nc","Total de participantes do grupo controle","num",{"min":1,"max":1000000,"step":1,"ph":"100","integer":true}],["et","Eventos no grupo tratado (intervenção)","num",{"min":0,"max":1000000,"step":1,"ph":"10","integer":true}],["nt","Total de participantes do grupo tratado","num",{"min":1,"max":1000000,"step":1,"ph":"100","integer":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var r=1.959964;
var i=function(a){return null==a||""===a||isNaN(+a)?0:+a};
var t=function(a,e){return o(100*a,null==e?1:e)+"%"};
a.def("numero-necessario-para-tratar",function(a){var e=i(a.ec),n=i(a.nc),s=i(a.et),d=i(a.nt);if(!n||!d)return{error:"Informe o total de participantes de cada grupo."};if(e>n||s>d)return{error:"O número de eventos não pode ser maior que o total do grupo."};var l=e/n,m=s/d,c=l-m,u=Math.sqrt(l*(1-l)/n+m*(1-m)/d),p=c-r*u,v=c+r*u,f=[["Risco no grupo controle (RC)",t(l)],["Risco no grupo tratado (RT)",t(m)],["Redução absoluta do risco (RRA)",t(c)+" (IC 95%: "+t(p)+" a "+t(v)+")"],["Redução relativa do risco (RRR)",l>0?t(c/l):"não calculável (RC = 0)"],["Risco relativo (RT/RC)",l>0?o(m/l,2):"não calculável"]];if(Math.abs(c)<1e-12)return{main:["∞",""],label:"NNT",level:"info",verdict:"Sem diferença de risco entre os grupos: o NNT é infinito",rows:f,raw:{arr:0,rrr:0,nnt:1/0}};var h,b=1/Math.abs(c),g=Math.ceil(b-1e-9),R=c>0;if(p>0||v<0){var x=1/Math.abs(v),M=1/Math.abs(p);h=o(Math.min(x,M),1)+" a "+o(Math.max(x,M),1)+(R?" (benefício)":" (dano)")}else h="NNT (benefício) "+o(1/v,1)+" a ∞ a NNH (dano) "+o(1/Math.abs(p),1)+": diferença não significativa";return f.push(["IC 95% do "+(R?"NNT":"NNH"),h]),{main:[String(g),"pacientes"],label:R?"NNT (número necessário para tratar)":"NNH (número necessário para causar dano)",level:R?"low":"high",verdict:R?"Tratar "+g+" pacientes evita 1 evento a mais que o controle":"A cada "+g+" pacientes tratados, ocorre 1 evento a mais que no controle (dano)",rows:f,note:p<=0&&v>=0?"O intervalo de confiança da RRA inclui zero: o efeito não é estatisticamente significativo.":"",raw:{arr:100*c,rrr:l>0?c/l*100:null,nnt:b,shown:g,arrLo:100*p,arrHi:100*v}}});
})(window.CALC);
function encodeScientificMetricStates(result,values){
 const original=result.raw||{},states={},raw={...original};
 const set=(field,kind,reasonCode)=>{raw[field]=null;states[field]={kind,value:null,symbol:kind==='positive-infinity'?'∞':null,reasonCode};};
 if(TOOL.id==='frequencia-cardiaca-maxima'&&220-values.idade-values.fcrep===0){
  // The chronotropic index is undefined at zero predicted reserve, even if
  // JavaScript happens to return positive/negative Infinity rather than NaN.
  set('ci','undefined','ZERO_CHRONOTROPIC_RESERVE');
 }
 if(TOOL.id==='numero-necessario-para-tratar'&&original.nnt===Infinity)set('nnt','positive-infinity','NEAR_ZERO_ABSOLUTE_RISK_DIFFERENCE');
 if(TOOL.id==='teste-diagnostico-2x2'){
  if(original.lrp===Infinity)set('lrp','positive-infinity','ZERO_FALSE_POSITIVE_RATE');
  else if(Number.isNaN(original.lrp))set('lrp','undefined','NO_POSITIVE_TEST_RESULTS');
  if(original.lrn===Infinity)set('lrn','positive-infinity','ZERO_SPECIFICITY');
  else if(Number.isNaN(original.lrn))set('lrn','undefined','NO_NEGATIVE_TEST_RESULTS');
 }
 return Object.keys(states).length?{raw,metricStates:states}:{raw:original};
}
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   if(!Number.isInteger(n))return {error:'Informe um número inteiro.',field:name,code:'INTEGER_REQUIRED'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  const scientific=encodeScientificMetricStates(r,values);
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:scientific.raw,...(scientific.metricStates?{metricStates:scientific.metricStates}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
