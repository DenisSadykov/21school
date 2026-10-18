const A = name => `assets/${name}`;
const P = (name, x, y, w, h, extra = {}) => ({ src: A(name), box: [x, y, w, h], ...extra });
const L = (slide, number, x, y, w, h) =>
  P(`lesha-s${String(slide).padStart(2, '0')}-${number}.png`,
    x / 15.88, y / 8.93, w / 15.88, h / 8.93);
const N = (text, x, y, w, h, extra = {}) => ({ text, box: [x, y, w, h], ...extra });

const speakers = [
  { name: 'Лёша', accent: '#57dbcb', rgb: '87,219,203' },
  { name: 'Аня', accent: '#f5a4d7', rgb: '245,164,215' },
  { name: 'Катя', accent: '#d99cff', rgb: '217,156,255' },
  { name: 'Римма', accent: '#98a9ff', rgb: '152,169,255' },
  { name: 'Никита', accent: '#ad73ff', rgb: '173,115,255' }
];

const slides = [{
  chapter: 'Пролог', type: 'manifest', accent: '#b8ff65', rgb: '184,255,101',
  title: 'У КАЖДОГО<br><span class="accent">СВОЙ ПУТЬ</span>'
}];
function add(chapter, sourceSlide, title, photos = [], notes = [], options = {}) {
  const speaker = speakers.find(item => item.name === chapter);
  slides.push({ chapter, sourceSlide, title, photos, notes,
    accent: speaker.accent, rgb: speaker.rgb, type: 'composition', ...options });
}

// Никита. Содержательные слайды 2–10 исходной презентации.
add('Никита', 2, 'НИКИТА', [P('nikita-image10.jpg', 57, 15, 31, 72)], [], { portrait: true });
add('Никита', 3, 'Кто я?', [P('nikita-image9.jpg', 48, 41, 45, 53)], [
  N('Frontend developer', 5, 35, 42, 12),
  N('Ментор в «IT-академия Lad»', 5, 52, 42, 20)
]);
add('Никита', 4, 'За 4 года до бассейна', [P('nikita-image3.png', 42, 27, 55, 65)], [
  N('10 лет в продажах — и бесконечное выгорание', 3, 31, 36, 18, { small: true }),
  N('Смена профессии, рождение сына', 3, 54, 36, 16, { small: true }),
  N('Обучение 24/7', 3, 77, 36, 10, { small: true })
]);
add('Никита', 5, 'Как я попал на бассейн?', [P('nikita-image2.png', 34, 21, 63, 75)], [
  N('Спасибо Валера))', 3, 48, 29, 18)
]);
add('Никита', 6, 'Как проходил мой бассейн?', [P('nikita-image8.png', 11, 33, 24, 55)], [
  N('Первая неделя', 53, 43, 40, 18, { strong: true })
]);
add('Никита', 7, 'Как проходил мой бассейн?', [P('nikita-image6.png', 12, 32, 28, 56)], [
  N('Вторая неделя', 53, 43, 40, 18, { strong: true })
]);
add('Никита', 8, 'Но что я получил в итоге?', [
  P('nikita-image11.jpg', 3, 23, 19, 61),
  P('nikita-image13.jpg', 23, 23, 33, 43),
  P('nikita-image12.jpg', 57, 22, 40, 53)
], [
  N('Новую прайм версию себя', 3, 85, 25, 10, { small: true }),
  N('Друзей и новые знакомства', 26, 68, 61, 11, { small: true })
]);
add('Никита', 9, 'Мем про меня', [P('nikita-image7.png', 12, 22, 75, 75)]);
add('Никита', 10, 'Что важнее?', [], [
  N('Люди', 35, 41, 30, 22, { strong: true, center: true, accent: true }),
  N('Путь', 14, 80, 25, 12, { strong: true, center: true }),
  N('Результат', 63, 80, 30, 12, { strong: true, center: true })
]);

// Аня. Содержательные слайды 2–12; мозаики повторяют позиции из PPTX.
add('Аня', 2, 'АНЯ', [P('anya-image3-crop.jpeg', 53, 14, 37, 73)], [], { portrait: true });
add('Аня', 3, 'В начале было…', [
  P('anya-image4.png', 3, 23, 27, 61), P('anya-image5.png', 60, 20, 32, 63)
]);
add('Аня', 4, 'Настрой перед бассейном', [
  P('anya-image6.png', 9, 21, 84, 26),
  P('anya-image7.png', 9, 53, 24, 37),
  P('anya-image8.png', 43, 53, 21, 37),
  P('anya-image9.jpeg', 73, 53, 21, 37)
]);
add('Аня', 5, 'Ожидание на первый день', [
  P('anya-image10.png', 8, 29, 31, 56),
  P('anya-image11.gif', 54, 29, 41, 46)
]);
add('Аня', 6, 'Реальность', [
  P('anya-image13.png', 1, 9, 39, 91),
  P('anya-image12.png', 41, 0, 59, 100)
], [], { attached: true, titleLeft: true });
add('Аня', 7, 'Как проходили мои дни?', [
  P('anya-image20.png', 0, 19, 26, 35),
  P('anya-image14.jpeg', 26, 19, 21, 50),
  P('anya-image16.png', 47, 19, 23, 30),
  P('anya-image15.jpeg', 69, 19, 31, 41),
  P('anya-image17.png', 47, 50, 24, 32),
  P('anya-image18.png', 70, 60, 30, 40),
  P('anya-image19.png', 5, 66, 42, 34)
], [], { attached: true });
add('Аня', 8, 'Как на самом деле проходили мои дни', [
  P('anya-image21.png', 6, 19, 24, 56),
  P('anya-image24.png', 53, 18, 23, 41),
  P('anya-image22.png', 76, 18, 24, 41),
  P('anya-image23.png', 70, 59, 31, 41)
], [], { attached: true, long: true });
add('Аня', 9, 'Как на самом деле проходили мои дни', [
  P('anya-image25.png', 6, 23, 24, 48),
  P('anya-image28.png', 57, 18, 20, 41),
  P('anya-image26.jpeg', 77, 18, 24, 41),
  P('anya-image27.png', 67, 59, 34, 41)
], [], { attached: true, long: true });
add('Аня', 10, 'А это точно не сон?', [
  P('anya-image30.png', 12, 21, 23, 62),
  P('anya-image29.png', 48, 21, 39, 62)
]);
add('Аня', 11, 'А какой результат?', [
  P('anya-image32-crop.png', 2, 36, 24, 43),
  P('anya-image33-crop.png', 28, 27, 27, 61),
  P('anya-image31.png', 55, 27, 45, 61, { fit: 'cover', objectPosition: 'center 42.4%' })
]);
add('Аня', 12, 'Вывод: я не часто попадаюсь на фотографиях', [
  P('anya-image35.jpeg', 0, 0, 46, 54),
  P('anya-image36.jpeg', 0, 46, 46, 54),
  P('anya-image34.jpeg', 45, 35, 55, 65)
], [N('До чего я в итоге дошла', 54, 22, 40, 10, { small: true })],
{ attached: true, titleRight: true, long: true });

// Лёша. В PPTX каждый слайд был цельным растром: фото извлечены без ретуши.
add('Лёша', 2, 'ЛЁША', [L(2, 1, 907, 74, 539, 720)], [], { portrait: true });
add('Лёша', 3, 'Все началось с 3 воздуханов\n(не осуждать)', [
  L(3, 1, 368, 226, 795, 597)
], [], { long: true });
add('Лёша', 4, 'Мой первый день Be Like...', [
  L(4, 1, 88, 226, 650, 458), L(4, 2, 907, 198, 597, 490)
]);
add('Лёша', 5, 'Я ожидал, что будет так...', [
  L(5, 1, 85, 255, 454, 454), L(5, 2, 651, 219, 884, 547)
]);
add('Лёша', 6, 'Но все оказалось иначе...\n(я получил пенальти)', [
  L(6, 1, 283, 226, 965, 543)
], [], { long: true });
add('Лёша', 7, 'И познакомился с Вертером...', [
  L(7, 1, 163, 191, 403, 528), L(7, 2, 888, 169, 541, 540)
]);
add('Лёша', 8, 'Решил организовывать мероприятия)))', [
  L(8, 1, 198, 155, 500, 668), L(8, 2, 900, 141, 489, 682)
], [], { long: true });
add('Лёша', 9, 'Не ожидал такой ажиотаж...', [
  L(9, 1, 57, 205, 633, 476), L(9, 2, 765, 169, 719, 540)
]);
add('Лёша', 10, 'Мой первый групповой проект\n(стиль нам не помог)', [
  L(10, 1, 198, 221, 457, 642),
  P('lesha-s10-2-clean.png', 824 / 15.88, 221 / 8.93, 622 / 15.88, 596 / 8.93)
], [], { long: true });
add('Лёша', 11, 'И наконец наши вечера...', [
  L(11, 1, 28, 135, 539, 404),
  L(11, 2, 879, 128, 623, 469),
  L(11, 3, 113, 453, 539, 403),
  L(11, 4, 765, 453, 278, 370)
], [], { attached: true });
add('Лёша', 12, 'Бассейн, мы скучаем...', [
  L(12, 1, 538, 198, 511, 582)
]);
add('Лёша', 13, 'А вот что было после!!!!', [
  L(13, 1, 56, 226, 364, 483),
  L(13, 2, 566, 226, 353, 470),
  L(13, 3, 1055, 226, 341, 455)
]);

// Катя. Слайды 2–18 исходной презентации; коллажи сохраняют порядок слоёв PPTX.
add('Катя', 2, 'КАТЯ', [
  P('katya/image5.jpeg', 56.51, 23.3, 28.72, 53.4,
    { round: true, crop: [0, .139, 0, .076] })
], [], { portrait: true, attached: true });
add('Катя', 3, '', [
  P('katya/image6.jpeg', 52.56, 18.33, 47.5, 63.34, { rotation: 90 })
], [
  N('• Закончила НИУ ВШЭ (Компьютерная лингвистика)\n• Репетитор по питону\n• Проходила стажировку в Т1\n• До бассейна С не знала совсем\n• Три месяца ждала бассейн\n• 4 недели совмещала бассейн, универ и репетиторство', 4.24, 13.42, 48, 80.33, { small: true })
]);
add('Катя', 4, 'Как я узнала про школу??', [
  P('katya/image7.png', 47.96, 9.67, 45.83, 80.65)
], [N('1 ноября 2024', 47.96, 92.69, 31.3, 4.94, { small: true })],
{ titleBox: [5.56, 7.66, 38.8, 40.84], titleAlign: 'left', titleSize: 4.2 });
add('Катя', 5, 'Начало ……..', [
  P('katya/image8.png', 2.7, 3.42, 29.83, 56.43),
  P('katya/image9.png', 37.65, 69.88, 30.07, 28.57),
  P('katya/image10.png', 66.96, 69.88, 30.07, 28.57),
  P('katya/image11.JPG', 46.43, 14.13, 44.03, 52.02),
  P('katya/image12.JPG', 4.75, 61.62, 25.73, 38.78)
], [N('с терминалом', 2.7, 54.01, 29.83, 5.83, { small: true })],
{ attached: true, titleBox: [33, 4.06, 60, 9], titleSize: 4.1 });
add('Катя', 6, 'Первые дни в кампусе', [
  P('katya/image13.jpg', 38.92, 46.71, 28.87, 52.77),
  P('katya/image14.JPG', .78, 4.83, 38.09, 50.98),
  P('katya/image15.jpeg', 66.59, 19.98, 35.64, 47.51),
  P('katya/image16.jpeg', 1.7, 50.93, 36.94, 49.31)
], [], { attached: true, titleBox: [37.76, 7.23, 49.58, 9], titleSize: 4 });
add('Катя', 7, '1 неделя', [
  P('katya/image17.JPG', .8, 29.57, 29.71, 70.43),
  P('katya/image18.jpeg', 2.17, .09, 17.93, 36.77,
    { crop: [.377, .227, .12, 0] }),
  P('katya/image19.JPG', 65.13, 17.35, 34.87, 82.65),
  P('katya/image20.png', 29.85, 17.35, 35.28, 82.65)
], [], { attached: true, titleBox: [23.96, 7.29, 49.58, 9], titleSize: 4.2 });
add('Катя', 8, 'Такой вот вайб', [
  P('katya/image21.JPG', 1.33, 6.41, 34.32, 43.29),
  P('katya/image22.JPG', 62.43, 27.96, 34.6, 67.53),
  P('katya/image23.JPG', 35.37, 51.2, 25.84, 46.01),
  P('katya/image24.JPG', 2.52, 52.56, 30.33, 43.29),
  P('katya/image25.JPG', 36.87, 5.88, 24.35, 43.29)
], [], { attached: true, titleBox: [60, 11.16, 34.32, 9], titleSize: 3.8 });
add('Катя', 9, 'Экзамены', [
  P('katya/image26.jpg', 4.38, 22.1, 31, 55.8),
  P('katya/image27.png', 42.01, 18.07, 29.02, 25.99),
  P('katya/image28.png', 70.94, 18.07, 29.02, 25.99),
  P('katya/image29.png', 41.65, 56.44, 29.75, 26.64),
  P('katya/image30.png', 70.83, 56.55, 29.75, 26.64)
], [], { titleBox: [6.7, 2.89, 84.81, 9], titleSize: 4.2 });
add('Катя', 10, 'Первый групповой проект', [
  P('katya/image31.jpeg', 4.92, 13.81, 39.06, 79.25),
  P('katya/image32.jpeg', 56.03, 18.71, 39.06, 69.44)
], [], { titleBox: [7.6, 3.49, 84.81, 9], titleSize: 4.2 });
add('Катя', 11, 'Да, было…..', [
  P('katya/image33.jpg', 1, 4.52, 31.76, 82.38),
  P('katya/image34.jpg', 45.42, 16.18, 41.58, 54.37),
  P('katya/image35.png', 66.21, 72.76, 31.3, 22.72),
  P('katya/image36.png', 33.81, 72.76, 31.88, 22.72)
], [], { attached: true, titleBox: [7.6, 4.52, 84.81, 9], titleSize: 4.2 });
add('Катя', 12, 'Немножко статистики, если интересно', [
  P('katya/image37.png', 5.76, 18.1, 63.75, 36.36),
  P('katya/image38.png', 5.76, 56.3, 56.19, 41.47),
  P('katya/image39.png', 63.3, 56.3, 37.42, 41.47)
], [], { titleBox: [5.76, 2.07, 84.81, 9], titleSize: 3.7 });
add('Катя', 13, 'Не проектами едиными …', [
  P('katya/image40.jpeg', 3.51, 11.19, 33.84, 45.12),
  P('katya/image41.jpeg', 3.6, 57.82, 31.63, 42.18),
  P('katya/image42.jpeg', 38.95, 10.82, 29.46, 39.28),
  P('katya/image43.png', 68.84, 12.86, 33.1, 78.25),
  P('katya/image44.png', 37.55, 50.33, 30.86, 50.51)
], [], { attached: true, titleBox: [5.76, 2.07, 84.81, 9], titleSize: 4 });
add('Катя', 14, 'Эстетика февральского бассейна', [
  P('katya/image45.jpeg', 2.72, 15.38, 60, 80),
  P('katya/image46.jpg', 66.68, 0, 31.72, 100)
], [], { titleBox: [6.51, 2.22, 55, 12], titleSize: 3.55 });
add('Катя', 15, 'Конец?', [
  P('katya/image47.JPG', 1.41, 24.95, 29.71, 70.43),
  P('katya/image48.png', 32.35, 24.95, 29.71, 70.43),
  P('katya/image49.JPG', 66.64, 14.15, 28.35, 37.8),
  P('katya/image50.png', 63.83, 56.1, 33.97, 39.28)
], [], { titleBox: [5.76, 4.94, 29.71, 13], titleSize: 4.6 });
add('Катя', 16, 'Конец?', [
  P('katya/image47.JPG', 1.41, 24.95, 29.71, 70.43),
  P('katya/image48.png', 33.31, 24.95, 29.71, 70.43),
  P('katya/image44.png', 63.67, 38.53, 37.56, 61.47),
  P('katya/image49.JPG', 63.83, .37, 28.35, 37.8),
  P('katya/image51.png', 24.74, 30.6, 61.8, 36.98)
], [], { attached: true, titleBox: [5.76, 4.94, 29.71, 13], titleSize: 4.6 });
add('Катя', 17, 'А что дальше?', [
  P('katya/image52.jpeg', -1.82, 59.37, 26.13, 34.84),
  P('katya/image53.jpeg', 19.94, 16.2, 22.22, 29.63),
  P('katya/image54.jpeg', -3.51, 7.79, 28.97, 38.62),
  P('katya/image55.JPG', 60.92, 1.93, 21.63, 48.07),
  P('katya/image56.JPG', 62.17, 51.05, 35.94, 47.92),
  P('katya/image57.jpeg', 81.09, 1.57, 20.18, 47.83),
  P('katya/image58.jpeg', 22.58, 51.05, 34.97, 46.63),
  P('katya/image59.jpeg', 38.87, 12.85, 22.76, 35.94,
    { crop: [0, 0, .156, 0] })
], [], { attached: true, titleBox: [0, 2.07, 84.81, 9], titleSize: 4.2 });
add('Катя', 18, '', [
  P('katya/image60.jpeg', 4.27, 7.29, 48.04, 85.41),
  P('katya/image61.jpeg', 55.16, 5.12, 42.04, 89.76)
]);

// Римма. Все семь слайдов новой версии от 20.10, исходная схема 16:9.
add('Римма', 1, 'РИММА', [P('rimma-image12-with-dog.png', 59, 25, 29, 66)], [],
  { portrait: true });
add('Римма', 2, 'Часть I. Стагнация', [P('rimma-image9.png', 34, 33, 33, 56)], [],
  {});
add('Римма', 3, 'Часть II. Ярость и механизмы компенсации', [
  P('rimma-image10.jpg', 34, 33, 33, 57)
], [], { long: true });
add('Римма', 4, 'Часть III. Пересборка', [
  P('rimma-image13-crop.jpg', 34, 33, 33, 57)
]);
add('Римма', 5, 'Динамическое равновесие', [
  P('rimma-image11.jpg', 31.5, 33, 40, 56)
]);
add('Римма', 6, 'Агенты БСА по борьбе с дедлайнами', [
  P('rimma-image16.jpg', 11, 27, 42, 59),
  P('rimma-image17.jpg', 64, 27, 26, 59)
], [], { long: true });
add('Римма', 7, 'Династия', [
  P('rimma-image14.jpg', 5, 28, 44, 53),
  P('rimma-image15.jpg', 52, 28, 44, 53)
]);

// Порядок показа задаётся маршрутом, а не положением разделов в исходном коде.
const storySlides = slides.splice(1);
slides.push(...speakers.flatMap(person =>
  storySlides.filter(slide => slide.chapter === person.name)));

const stage = document.getElementById('stage');
const world = document.getElementById('world');
const progressFill = document.getElementById('progressFill');
const map = document.getElementById('mapOverlay');
const mapList = document.getElementById('mapList');
const chapterStarts = [];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function position(box) {
  const [x, y, w, h] = box;
  return `left:${x}%;top:${y}%;width:${w}%;height:${h}%`;
}
function photoStyle(photo) {
  if (!photo.crop) return `${photo.fit ? `object-fit:${photo.fit};` : ''}${photo.objectPosition ? `object-position:${photo.objectPosition};` : ''}`;
  const [left, top, right, bottom] = photo.crop;
  const width = 1 - left - right;
  const height = 1 - top - bottom;
  return `position:absolute;left:${-left / width * 100}%;top:${-top / height * 100}%;width:${100 / width}%;height:${100 / height}%;object-fit:fill;max-width:none`;
}
function render(slide, index) {
  if (slide.type === 'manifest') {
    return `<section class="scene manifest" data-index="${index}" aria-label="Начало презентации"><div class="scene-inner"><h1 class="display manifest-title reveal">${slide.title}</h1><div class="manifest-people reveal">${speakers.map((person, i) =>
      `<div class="manifest-person"><small>ГЛАВА 0${i + 1}</small><strong>${person.name}</strong></div>`).join('')}</div></div></section>`;
  }
  const classes = [
    'composition-stage',
    slide.portrait ? 'is-portrait' : '',
    slide.attached ? 'is-attached' : '',
    slide.titleLeft ? 'title-left' : '',
    slide.titleRight ? 'title-right' : ''
  ].filter(Boolean).join(' ');
  const titleClass = slide.long ? ' is-long' : '';
  const titleStyle = slide.titleBox ? `${position(slide.titleBox)};${slide.titleAlign ? `text-align:${slide.titleAlign};` : ''}${slide.titleSize ? `font-size:${slide.titleSize}cqw;` : ''}` : '';
  const photos = slide.photos.map((photo, i) =>
    `<div class="composition-photo${photo.round ? ' is-round' : ''} reveal" style="${position(photo.box)};z-index:${2 + i};--phase:${-i * 1.7}s;${photo.rotation ? `transform:rotate(${photo.rotation}deg);` : ''}"><img src="${photo.src}" style="${photoStyle(photo)}" alt="${escapeHtml(slide.chapter)}: слайд ${slide.sourceSlide}, изображение ${i + 1}" draggable="false"></div>`).join('');
  const notes = slide.notes.map(note =>
    `<div class="composition-note${note.small ? ' is-small' : ''}${note.strong ? ' is-strong' : ''}${note.center ? ' is-center' : ''}${note.accent ? ' is-accent' : ''} reveal" style="${position(note.box)}">${escapeHtml(note.text).replace(/\n/g, '<br>')}</div>`).join('');
  const title = slide.title ? `<h2 class="display composition-title${titleClass} reveal" style="${titleStyle}">${escapeHtml(slide.title).replace(/\n/g, '<br>')}</h2>` : '';
  return `<section class="scene composition-scene" data-index="${index}" aria-label="${escapeHtml(slide.chapter)}, исходный слайд ${slide.sourceSlide}"><div class="${classes}">${title}${photos}${notes}</div></section>`;
}

stage.innerHTML = slides.map(render).join('');
const nodes = [...stage.querySelectorAll('.scene')];
slides.forEach((slide, index) => {
  if (index === 0 || slide.chapter !== slides[index - 1].chapter)
    chapterStarts.push({ index, name: slide.chapter });
});
mapList.innerHTML = chapterStarts.filter(item => item.name !== 'Пролог').map((item, i) =>
  `<button class="map-item" type="button" data-target="${item.index}"><b>${item.name}</b><small>ГЛАВА 0${i + 1}</small></button>`).join('');

let current = 0;
let lockedUntil = 0;
let touchStart = null;
function show(index, force = false) {
  if (index < 0 || index >= slides.length || (!force && index === current)) return;
  const now = performance.now();
  if (!force && now < lockedUntil) return;
  if (!force) lockedUntil = now + 850;
  current = index;
  nodes.forEach((node, i) => {
    node.classList.toggle('active', i === current);
    node.classList.toggle('before', i < current);
    node.classList.toggle('after', i > current);
    node.setAttribute('aria-hidden', i === current ? 'false' : 'true');
  });
  const slide = slides[current];
  world.style.setProperty('--accent', slide.accent);
  world.style.setProperty('--accent-rgb', slide.rgb);
  progressFill.style.transform = `scaleX(${current / (slides.length - 1)})`;
  history.replaceState(null, '', `#${current + 1}`);
}
document.getElementById('nextButton').addEventListener('click', () => show(current + 1));
document.getElementById('prevButton').addEventListener('click', () => show(current - 1));
document.getElementById('mapButton').addEventListener('click', () => {
  map.hidden = false;
  document.getElementById('mapClose').focus();
});
document.getElementById('mapClose').addEventListener('click', () => {
  map.hidden = true;
  document.getElementById('mapButton').focus();
});
map.addEventListener('click', event => {
  const target = event.target.closest('[data-target]');
  if (target) { map.hidden = true; show(Number(target.dataset.target), true); }
  else if (event.target === map) map.hidden = true;
});
document.addEventListener('keydown', event => {
  if (!map.hidden) { if (event.key === 'Escape') map.hidden = true; return; }
  if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) {
    if (event.target.tagName !== 'BUTTON') { event.preventDefault(); show(current + 1); }
  } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
    event.preventDefault(); show(current - 1);
  } else if (event.key.toLowerCase() === 'm') {
    event.preventDefault(); map.hidden = false;
  } else if (event.key === 'Home') {
    event.preventDefault(); show(0, true);
  } else if (event.key === 'End') {
    event.preventDefault(); show(slides.length - 1, true);
  }
});
document.addEventListener('wheel', event => {
  if (!map.hidden || Math.abs(event.deltaY) < 25) return;
  event.preventDefault();
  show(current + (event.deltaY > 0 ? 1 : -1));
}, { passive: false });
document.addEventListener('touchstart', event => {
  touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
}, { passive: true });
document.addEventListener('touchend', event => {
  if (!touchStart || !map.hidden) return;
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  if (Math.max(Math.abs(dx), Math.abs(dy)) > 60) {
    const forward = Math.abs(dx) > Math.abs(dy) ? dx < 0 : dy < 0;
    show(current + (forward ? 1 : -1));
  }
  touchStart = null;
}, { passive: true });
document.addEventListener('pointermove', event => {
  world.style.setProperty('--px', ((event.clientX / window.innerWidth) - .5).toFixed(3));
  world.style.setProperty('--py', ((event.clientY / window.innerHeight) - .5).toFixed(3));
}, { passive: true });
const initial = Math.min(slides.length - 1, Math.max(0, (parseInt(location.hash.slice(1), 10) || 1) - 1));
show(initial, true);
