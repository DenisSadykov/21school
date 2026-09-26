const A = name => `assets/${name}`;

// Здесь собрана структура презентации: пять историй в порядке выступления.
const slides = [
  { chapter: 'Пролог', type: 'manifest', accent: '#b8ff65', rgb: '184,255,101', title: 'У КАЖДОГО<br><span class="accent">СВОЙ ПУТЬ</span>', people: [['01','Полина','elvisedy'],['02','Аня','thrallbr'],['03','Римма','junkpilg'],['04','Таня','varyseli'],['05','Денис','odessabu']] },

  { chapter: 'Полина', type: 'portrait', accent: '#ff746c', rgb: '255,116,108', number: '01', title: 'ПОЛИНА', nick: 'elvisedy / 26_04_NN', img: A('polina-image3.jpeg'), alt: 'Полина' },
  { chapter: 'Полина', type: 'source-gallery', accent: '#ff746c', rgb: '255,116,108', title: 'НАЧАЛО ПУТИ', images: [A('polina-image4.jpeg')] },
  { chapter: 'Полина', type: 'source-gallery', accent: '#ff746c', rgb: '255,116,108', title: 'ПЕРВЫЙ ДЕНЬ', lede: 'Делаю вид, что программирую, делаю это с умным видом.', images: [A('polina-image5.jpg'),A('polina-image6.jpeg')] },
  { chapter: 'Полина', type: 'source-gallery', accent: '#ff746c', rgb: '255,116,108', title: 'НОВЫЕ ЗНАКОМСТВА И НЕОЖИДАННЫЕ ВСТРЕЧИ', images: [A('polina-image7.jpg'),A('polina-image8.jpg')] },
  { chapter: 'Полина', type: 'source-gallery', accent: '#ff746c', rgb: '255,116,108', title: 'КАК ПРОШЁЛ БАССЕЙН', images: [A('polina-image9.png'),A('polina-image10.jpg')] },
  { chapter: 'Полина', type: 'source-gallery', accent: '#ff746c', rgb: '255,116,108', title: 'ЧТО САМОЕ ГЛАВНОЕ?', images: [A('polina-image11.jpeg'),A('polina-image12.jpeg'),A('polina-image13.jpg'),A('polina-image14.jpeg'),A('polina-image15.jpeg'),A('polina-image16.jpeg'),A('polina-image17.jpeg')] },
  { chapter: 'Полина', type: 'source-gallery', accent: '#ff746c', rgb: '255,116,108', title: 'ЧТО ЖЕ ДАЛЬШЕ?', images: [A('polina-image18.jpeg'),A('polina-image19.jpeg'),A('polina-image20.jpg')] },

  { chapter: 'Аня', type: 'portrait', accent: '#f5a4d7', rgb: '245,164,215', number: '02', title: 'АНЯ', nick: 'thrallbr / 26_08_NN', img: A('anya-image3.jpeg'), alt: 'Аня' },
  { chapter: 'Аня', type: 'diptych', accent: '#f5a4d7', rgb: '245,164,215', title: 'В НАЧАЛЕ БЫЛО…', photos: [[A('anya-image4.png'),''],[A('anya-image5.png'),'']], sourceImages: true },
  { chapter: 'Аня', type: 'anya-collage', accent: '#f5a4d7', rgb: '245,164,215', title: 'НАСТРОЙ ПЕРЕД БАССЕЙНОМ', banner: A('anya-image6.png'), images: [A('anya-image7.png'),A('anya-image8.png'),A('anya-image9.jpeg')] },
  { chapter: 'Аня', type: 'diptych', accent: '#f5a4d7', rgb: '245,164,215', title: 'ОЖИДАНИЕ НА ПЕРВЫЙ ДЕНЬ', photos: [[A('anya-image10.png'),''],[A('anya-image11.gif'),'']], sourceImages: true },
  { chapter: 'Аня', type: 'diptych', accent: '#f5a4d7', rgb: '245,164,215', title: 'РЕАЛЬНОСТЬ', photos: [[A('anya-image12.png'),''],[A('anya-image13.png'),'']], sourceImages: true },
  { chapter: 'Аня', type: 'anya-mosaic', accent: '#f5a4d7', rgb: '245,164,215', title: 'КАК ПРОХОДИЛИ МОИ ДНИ?', images: [A('anya-image14.jpeg'),A('anya-image15.jpeg'),A('anya-image16.png'),A('anya-image17.png'),A('anya-image18.png'),A('anya-image19.png'),A('anya-image20.png')] },
  { chapter: 'Аня', type: 'anya-week', accent: '#f5a4d7', rgb: '245,164,215', title: 'КАК НА САМОМ ДЕЛЕ ПРОХОДИЛИ МОИ ДНИ', schedule: A('anya-image21.png'), images: [A('anya-image22.png'),A('anya-image23.png'),A('anya-image24.png')] },
  { chapter: 'Аня', type: 'anya-week', accent: '#f5a4d7', rgb: '245,164,215', title: 'КАК НА САМОМ ДЕЛЕ ПРОХОДИЛИ МОИ ДНИ', schedule: A('anya-image25.png'), images: [A('anya-image26.jpeg'),A('anya-image27.png'),A('anya-image28.png')] },
  { chapter: 'Аня', type: 'diptych', accent: '#f5a4d7', rgb: '245,164,215', title: 'А ЭТО ТОЧНО НЕ СОН?', photos: [[A('anya-image29.png'),''],[A('anya-image30.png'),'']], sourceImages: true },
  { chapter: 'Аня', type: 'grid', accent: '#f5a4d7', rgb: '245,164,215', title: 'А КАКОЙ РЕЗУЛЬТАТ?', images: [A('anya-image31.png'),A('anya-image32.png'),A('anya-image33.png')], alt: 'Рисунки и надписи, оставшиеся после интенсива', sourceImages: true },
  { chapter: 'Аня', type: 'anya-outcome', accent: '#f5a4d7', rgb: '245,164,215', title: 'ВЫВОД: Я НЕ ЧАСТО ПОПАДАЮСЬ НА ФОТОГРАФИЯХ', sub: 'ДО ЧЕГО Я В ИТОГЕ ДОШЛА', images: [A('anya-image34.jpeg'),A('anya-image35.jpeg'),A('anya-image36.jpeg')] },

  { chapter: 'Римма', type: 'portrait', accent: '#98a9ff', rgb: '152,169,255', number: '03', title: 'РИММА', nick: 'junkpilg', img: A('rimma-image12.jpg'), alt: 'Групповая фотография участников', imagePosition: 'center' },
  { chapter: 'Римма', type: 'split', accent: '#98a9ff', rgb: '152,169,255', eyebrow: '03 / ЧАСТЬ I', title: 'СТАГНАЦИЯ', img: A('rimma-image8.png'), alt: 'Одинокая конструкция на пустом поле' },
  { chapter: 'Римма', type: 'split', accent: '#98a9ff', rgb: '152,169,255', eyebrow: '03 / ЧАСТЬ II', title: 'ЯРОСТЬ И<br>МЕХАНИЗМЫ<br><span class="accent">КОМПЕНСАЦИИ</span>', img: A('rimma-image10.jpg'), alt: 'Мем с сердитым котом', reverse: true, compact: true },
  { chapter: 'Римма', type: 'split', accent: '#98a9ff', rgb: '152,169,255', eyebrow: '03 / ЧАСТЬ III', title: 'ПЕРЕСБОРКА', img: A('rimma-image14.jpg'), alt: 'Мем с волшебником', imageClass: 'portrait-img' },
  { chapter: 'Римма', type: 'source-gallery', accent: '#98a9ff', rgb: '152,169,255', images: [A('rimma-image13.jpg')] },
  { chapter: 'Римма', type: 'source-gallery', accent: '#98a9ff', rgb: '152,169,255', images: [A('rimma-image15.jpg'),A('rimma-image16.jpg'),A('rimma-image11.jpg')] },

  { chapter: 'Таня', type: 'portrait', accent: '#f7cf68', rgb: '247,207,104', number: '04', title: 'ТАНЯ', nick: 'varyseli / 25_04_NN', img: A('tanya-image2.jpeg'), alt: 'Таня' },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: '3 ФАКТА ОБО МНЕ', lede: 'Гуманитарий до мозга костей · Закончила ин-яз · Пеку тортики', images: [A('tanya-image7.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: 'ПЕРВЫЙ ДЕНЬ', images: [A('tanya-image11.png'),A('tanya-image12.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: 'ПЕРВЫЙ ПРОЕКТ', images: [A('tanya-image14.png'),A('tanya-image15.png'),A('tanya-image16.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: 'ПОШЛО-ПОЕХАЛО…', images: [A('tanya-image18.jpeg'),A('tanya-image19.jpeg'),A('tanya-image20.jpeg'),A('tanya-image22.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', images: [A('tanya-image24.jpeg'),A('tanya-image25.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', images: [A('tanya-image27.jpeg'),A('tanya-image28.jpeg'),A('tanya-image29.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: 'ПЕРВЫЙ ЭКЗАМЕН', images: [A('tanya-image30.jpeg'),A('tanya-image32.png')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: 'ГРУППОВЫЕ', images: [A('tanya-image34.jpeg'),A('tanya-image36.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: 'БЫЛИ И КОСЯКИ…', images: [A('tanya-image37.jpeg'),A('tanya-image38.jpeg'),A('tanya-image39.png')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: 'С ЗЕЛЕНЫМ ДО КОНЦА', images: [A('tanya-image41.jpeg'),A('tanya-image42.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', images: [A('tanya-image44.png'),A('tanya-image45.jpeg'),A('tanya-image46.png'),A('tanya-image47.png')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', images: [A('tanya-image49.jpeg'),A('tanya-image50.jpeg'),A('tanya-image51.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: 'РОДНОЙ БАССЕЙН', images: [A('tanya-image53.jpeg')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', images: [A('tanya-image56.png'),A('tanya-image57.png'),A('tanya-image58.png')] },
  { chapter: 'Таня', type: 'source-gallery', accent: '#f7cf68', rgb: '247,207,104', title: '«ВОЗЬМИТЕ ОТ ИНТЕНСИВА МАКСИМУМ»', images: [A('tanya-image60.jpeg')] },

  { chapter: 'Денис', type: 'portrait', accent: '#b8ff65', rgb: '184,255,101', number: '05', title: 'ДЕНИС', nick: 'odessabu / финальная история', img: A('denis-cover.jpg'), alt: 'Денис' },
  { chapter: 'Денис', type: 'statement', accent: '#b8ff65', rgb: '184,255,101', eyebrow: '05 / СЛУЧАЙНАЯ ВСТРЕЧА', title: 'ЕСЛИ БЫ Я<br>НЕ ВСТРЕТИЛСЯ<br><span class="accent">С СЕСТРОЙ...</span>', lede: 'Возможно, я бы тогда не узнал о Школе 21.' },
  { chapter: 'Денис', type: 'split', accent: '#b8ff65', rgb: '184,255,101', eyebrow: '05 / МОТИВАЦИЯ', title: 'Я ПРИШЁЛ<br>В IT РАДИ<br><span class="accent">ДЕНЕГ</span>', lede: 'Это была честная и понятная цель.', img: A('money-cat.jpg'), alt: 'Кот на купюрах' },
  { chapter: 'Денис', type: 'grid', accent: '#b8ff65', rgb: '184,255,101', eyebrow: '05 / НЕ ПО ПЛАНУ', title: 'А НАШЁЛ<br><span class="accent">ДРУЗЕЙ</span>', images: [A('friends-room.jpeg'),A('friends-city.jpeg'),A('friends-mirror.jpeg')], alt: 'Денис с друзьями' },
  { chapter: 'Денис', type: 'split', accent: '#b8ff65', rgb: '184,255,101', eyebrow: '05 / СТАЖИРОВКА', title: 'МОГ ОСТАТЬСЯ<br>ДОМА. ПОЕХАЛ<br><span class="accent">В ОФИС</span>', img: A('denis-office-6703.jpg'), alt: 'Денис в офисе Школы 21', imageClass: 'office-photo', reverse: true, compact: true },
  { chapter: 'Денис', type: 'statement', accent: '#b8ff65', rgb: '184,255,101', eyebrow: '05 / ОДИН РАЗГОВОР', title: '«НУЖЕН ЕЩЁ<br>ОДИН <span class="accent">СТАЖЁР?</span>»' },
  { chapter: 'Денис', type: 'statement', accent: '#b8ff65', rgb: '184,255,101', eyebrow: '05 / ЗАКОНОМЕРНОСТЬ', title: 'ПЕРЕД КАЖДОЙ<br>СЛУЧАЙНОСТЬЮ<br>БЫЛ <span class="accent">МОЙ ШАГ</span>' },
  { chapter: 'Денис', type: 'statement', accent: '#b8ff65', rgb: '184,255,101', title: 'У КАЖДОГО<br><span class="accent">СВОЙ ПЕРВЫЙ ШАГ</span>' },
  { chapter: 'Денис', type: 'final', accent: '#b8ff65', rgb: '184,255,101', title: 'ТЕПЕРЬ<br><span class="accent">ВАШ ХОД</span>', lede: 'Не обязательно знать весь маршрут. Достаточно сделать первый шаг.' }
];

const stage = document.getElementById('stage');
const world = document.getElementById('world');
const progressFill = document.getElementById('progressFill');
const map = document.getElementById('mapOverlay');
const mapList = document.getElementById('mapList');
const chapterStarts = [];

function picture(src, alt, extra = '') { return `<img src="${src}" alt="${alt}" ${extra}>`; }
function render(s, i) {
  const eyebrow = s.eyebrow ? `<p class="eyebrow reveal">${s.eyebrow.replace(/^\d{2}\s*\/\s*/, '')}</p>` : '';
  const lede = s.lede ? `<p class="lede reveal">${s.lede}</p>` : '';
  let body = '';
  switch (s.type) {
    case 'manifest':
      body = `<div class="scene-inner"><h1 class="display manifest-title reveal">${s.title}</h1><div class="manifest-people reveal">${s.people.map(p => `<div class="manifest-person"><small>${p[2]}</small><strong>${p[1]}</strong></div>`).join('')}</div></div>`;
      break;
    case 'portrait':
      body = `<div class="portrait-number">${s.number}</div><div class="scene-inner portrait-layout"><div class="portrait-copy"><p class="eyebrow reveal">ГЛАВА ${s.number} / ${s.nick}</p><h2 class="display reveal">${s.title}</h2></div><div class="portrait-photo reveal">${picture(s.img,s.alt,s.imagePosition ? `style="object-position:${s.imagePosition}"` : '')}</div></div>`;
      break;
    case 'split':
      body = `<div class="scene-inner"><div class="copy">${eyebrow}<h2 class="display reveal">${s.title}</h2>${lede}</div><div class="visual ${s.imageClass || ''} reveal">${picture(s.img,s.alt)}</div></div>`;
      break;
    case 'grid':
      body = `<div class="scene-inner"><div class="grid-head">${eyebrow}<h2 class="display reveal">${s.title}</h2></div><div class="photo-grid${s.images.length === 2 ? ' two-photos' : ''}${s.sourceImages ? ' source-images' : ''} reveal">${s.images.map(src => picture(src,s.alt)).join('')}</div></div>`;
      break;
    case 'source-gallery':
      body = `<div class="scene-inner">${s.title ? `<h2 class="display source-gallery-title reveal">${s.title}</h2>` : ''}${lede}<div class="source-gallery-photos count-${s.images.length} reveal">${s.images.map((src, imageIndex) => picture(src,`${s.chapter}: изображение ${imageIndex+1} из ${s.images.length}`)).join('')}</div></div>`;
      break;
    case 'diptych':
      body = `<div class="scene-inner">${eyebrow}<h2 class="display diptych-heading reveal">${s.title}</h2><div class="diptych-row${s.sourceImages ? ' source-images' : ''} reveal">${s.photos.map(p => `<div class="diptych-item">${picture(p[0],p[1])}${p[1] ? `<span>${p[1]}</span>` : ''}</div>`).join('')}</div></div>`;
      break;
    case 'anya-collage':
      body = `<div class="scene-inner"><h2 class="display anya-title reveal">${s.title}</h2><div class="anya-collage-body reveal">${picture(s.banner,'Письма Школы 21 перед бассейном','class="anya-banner"')}<div class="anya-reactions">${s.images.map(src => picture(src,'Настрой Ани перед бассейном')).join('')}</div></div></div>`;
      break;
    case 'anya-mosaic':
      body = `<div class="scene-inner"><h2 class="display anya-title reveal">${s.title}</h2><div class="anya-mosaic-grid reveal">${s.images.map(src => picture(src,'Дни Ани на интенсиве')).join('')}</div></div>`;
      break;
    case 'anya-week':
      body = `<div class="scene-inner"><h2 class="display anya-title reveal">${s.title}</h2><div class="anya-week-body reveal">${picture(s.schedule,'Список проектов недели','class="anya-schedule"')}<div class="anya-week-reactions">${s.images.map(src => picture(src,'Как на самом деле проходили дни Ани')).join('')}</div></div></div>`;
      break;
    case 'anya-outcome':
      body = `<div class="scene-inner"><h2 class="display anya-title reveal">${s.title}</h2><p class="anya-outcome-sub reveal">${s.sub}</p><div class="anya-outcome-images reveal">${s.images.map(src => picture(src,'Аня и участники Школы 21 после интенсива')).join('')}</div></div>`;
      break;
    case 'statement':
      body = `<div class="line-art"></div><div class="scene-inner">${eyebrow}<h2 class="display display-md reveal">${s.title}</h2>${lede}</div>`;
      break;
    case 'final':
      body = `<div class="scene-inner">${eyebrow}<h2 class="display reveal">${s.title}</h2>${lede}<div class="end-line reveal"></div></div>`;
      break;
  }
  return `<section class="scene ${s.type === 'split' ? 'split' : s.type === 'grid' ? 'grid-scene' : s.type === 'final' ? 'final-scene' : s.type === 'portrait' ? 'portrait-scene' : s.type}${s.reverse ? ' reverse' : ''}${s.compact ? ' compact' : ''}${s.sourceImages ? ' source-slide' : ''}" data-index="${i}" aria-label="${s.chapter}, слайд ${i+1}">${body}</section>`;
}

stage.innerHTML = slides.map(render).join('');
const nodes = [...stage.querySelectorAll('.scene')];
slides.forEach((s,i) => { if (i === 0 || s.chapter !== slides[i-1].chapter) chapterStarts.push({index:i,name:s.chapter}); });
mapList.innerHTML = chapterStarts.filter(c => c.name !== 'Пролог').map((c,i) => `<button class="map-item" type="button" data-target="${c.index}"><b>${c.name}</b><small>ГЛАВА 0${i+1}</small></button>`).join('');

let current = 0;
let lockedUntil = 0;
let touchStart = null;

function show(index, force = false) {
  if (index < 0 || index >= slides.length || (!force && index === current)) return;
  const now = performance.now();
  if (!force && now < lockedUntil) return;
  if (!force) lockedUntil = now + 930;
  current = index;
  nodes.forEach((node,i) => {
    node.classList.toggle('active',i === current);
    node.classList.toggle('before',i < current);
    node.classList.toggle('after',i > current);
    node.setAttribute('aria-hidden',i === current ? 'false' : 'true');
  });
  const s = slides[current];
  world.style.setProperty('--accent',s.accent);
  world.style.setProperty('--accent-rgb',s.rgb);
  progressFill.style.width = `${(current/(slides.length-1))*100}%`;
  history.replaceState(null,'',`#${current+1}`);
}

document.getElementById('nextButton').addEventListener('click',() => show(current+1));
document.getElementById('prevButton').addEventListener('click',() => show(current-1));
document.getElementById('mapButton').addEventListener('click',() => { map.hidden = false; document.getElementById('mapClose').focus(); });
document.getElementById('mapClose').addEventListener('click',() => { map.hidden = true; document.getElementById('mapButton').focus(); });
map.addEventListener('click',e => { const target = e.target.closest('[data-target]'); if (target) { map.hidden = true; show(Number(target.dataset.target),true); } else if (e.target === map) map.hidden = true; });
document.addEventListener('keydown',e => {
  if (!map.hidden) { if (e.key === 'Escape') map.hidden = true; return; }
  if (['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)) { if (e.target.tagName !== 'BUTTON') { e.preventDefault(); show(current+1); } }
  else if (['ArrowLeft','ArrowUp','PageUp'].includes(e.key)) { e.preventDefault(); show(current-1); }
  else if (e.key.toLowerCase() === 'm') { e.preventDefault(); map.hidden = false; }
  else if (e.key === 'Home') { e.preventDefault(); show(0,true); }
  else if (e.key === 'End') { e.preventDefault(); show(slides.length-1,true); }
});
document.addEventListener('wheel',e => { if (!map.hidden || Math.abs(e.deltaY) < 25) return; e.preventDefault(); show(current + (e.deltaY > 0 ? 1 : -1)); },{passive:false});
document.addEventListener('touchstart',e => { touchStart = {x:e.touches[0].clientX,y:e.touches[0].clientY}; },{passive:true});
document.addEventListener('touchend',e => { if (!touchStart || !map.hidden) return; const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y; if (Math.max(Math.abs(dx),Math.abs(dy))>60) { const forward = Math.abs(dx)>Math.abs(dy) ? dx<0 : dy<0; show(current+(forward?1:-1)); } touchStart=null; },{passive:true});
document.addEventListener('pointermove',e => { world.style.setProperty('--px',((e.clientX/window.innerWidth)-.5).toFixed(3)); world.style.setProperty('--py',((e.clientY/window.innerHeight)-.5).toFixed(3)); },{passive:true});
const initial = Math.min(slides.length-1,Math.max(0,(parseInt(location.hash.slice(1),10)||1)-1));
show(initial,true);
