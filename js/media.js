// FISSHHFILET MEDIA
const FISSHHFILET_MEDIA = { list(){ return FISSHHFILET_STORE.get('media')||[] }, save(m){ FISSHHFILET_STORE.set('media', m) } };
