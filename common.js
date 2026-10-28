const ITEMS = window.JEJU_DATA.items;
const CATS = ['전체','음식','해산물','과일','농산물','음료','디저트','기념품·가공식품'];
const ICON = {'전체':'🍊','음식':'🍜','해산물':'🐟','과일':'🍋','농산물':'🥕','음료':'🍵','디저트':'🍨','기념품·가공식품':'🎁'};
const KEY = 'jeju_foods_selected';
let picked = new Set();
try { picked = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch (e) {}
function savePicked() { try { localStorage.setItem(KEY, JSON.stringify([...picked])); } catch (e) {} }
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
