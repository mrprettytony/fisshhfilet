// FISSHHFILET HOUSE - 100 photo engine - Phase 2 connects to Supabase
const FISSHHFILET_UPLOAD = { queue: [], max: 100, add(files){ this.queue.push(...files); console.log('FISSHHFILET queue', this.queue.length) } };
