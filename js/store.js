const FISSHHFILET_STORE = {
  get(k){ try{ return JSON.parse(localStorage.getItem('FISSHHFILET_'+k)||'null')}catch{return null}},
  set(k,v){ localStorage.setItem('FISSHHFILET_'+k, JSON.stringify(v)) },
  house: 'FISSHHFILET HOUSE', version: '1.0.0'
};
