/* Gabi Raíz — Press kit
   Barra, entradas de las secciones, idioma (ES / EN) y copiar el mail.
   Todo el contenido vive en index.html: este archivo sólo lo acompaña. */

(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  /* ══ Idioma ══════════════════════════════════════════════════════════ */

  // El español está escrito en el HTML. Acá va el inglés, más los textos que
  // sólo aparecen cuando alguien hace algo (copiar el mail, el texto de WhatsApp).
  var EN = {
    'doc.title': 'Gabi Raíz — Press kit | DJ and producer from Mendoza',
    'skip': 'Skip to content',
    'nav.label': 'Sections',
    'nav.bio': 'Bio',
    'nav.music': 'Music',
    'nav.stages': 'Stages',
    'nav.rider': 'Rider',
    'lang.label': 'Language',
    'hero.label': 'Cover',
    'hero.alt': 'Gabi Raíz standing in front of a petrol-blue backdrop',
    'hero.lead': 'DJ and producer from Mendoza, Argentina.',
    'hero.sub1': 'From downtempo to psychedelic trance.',
    'hero.sub2': 'As a DJ set or live with quena, ney and clarinet.',
    'cta.wa': 'Message on WhatsApp',
    'wa.text': 'Hi Gabi, I’m reaching out about a booking.',
    'bio.alt': 'Gabi Raíz sitting on the studio floor',
    'bio.lead': 'Gabi Raíz is a DJ and producer born in 1992 at the foot of the Andes, in Mendoza, Argentina.',
    'bio.p1': 'He found his way into music at 16, playing the guitar. In 2010 he joined bands with whom he produced events and played music before and after their shows, taking his first steps as a DJ.',
    'bio.p2': 'In 2018 he travelled to France, where, a year after recording his first podcast, he caught the attention of the renowned organic-downtempo label Cosmovision Records, based in Montreal, Canada. He later went on to record mixtapes for labels from different parts of the world, among them India-based Kosa Records.',
    'bio.p3': 'His performances range from DJ sets to hybrid sets featuring instruments such as Andean winds (quena), Turkish ney and clarinet. His style is versatile and shifts with every setting, but always carries strong ancestral influences from all over the world. A live set can move through downtempo, techno, afrohouse, deep and tribal, all the way to organic trance and psychedelic trance.',
    'bio.p4': 'His connection with ancestral rhythms and ethnic instruments has given his music a strong tribal imprint, with trance and mystic sounds that connect with Mother Nature wherever his music is played.',
    'bio.formats': 'Formats',
    'bio.hybrid': 'Hybrid set with quena, ney and clarinet',
    'bio.styles': 'Styles',
    'rituals.alt': 'Gabi Raíz wearing a green scarf against a red backdrop',
    'rituals.meta': 'EP on Shango Records, 2025',
    'rituals.remix': 'With remixes by Max Tenrom, Claudio Arditti, Ahau, Nat Barrera and Sebuky.',
    'rituals.player': 'The sound of Earth by Gabi Raíz on SoundCloud',
    'rituals.listen': 'Listen to',
    'rituals.on': 'on SoundCloud',
    'rituals.labels': 'Labels',
    'rituals.labelsList': 'Lump Records, Kosa Records, Shango Records, Plurpura Records and Exotic Refreshment, among others.',
    'stages.title': 'Stages',
    'stages.ar': 'Teaser Universo Paralello, VOX, Downtempo Rooftop and Avant Garten',
    'stages.cl': 'Cosmovision Showcase, Santo Remedio and El Corazón del Colibrí, in Melipeuco',
    'stages.frName': 'France',
    'stages.fr': 'Le Père Peinard, Usine à Musique and Le Manding’Art, in Toulouse, and Isis Garden Festival',
    'stages.esName': 'Spain',
    'stages.shared': 'Shared the stage with',
    'stages.sharedList': 'La Caravane Passe, La P’tite Fumée, Max Tenrom, Taiwan MC, Rodrigo Gallardo, El Extravagante, Estimua, Derrok, Claudio Arditti, Elektrompe, Sidirum, Swarup, Moksha, Jota Karloza, Ahau, Moonanga, Vegan, Nat Barrera, Inti Kunza, Sebastian Venu, Nonpalidece, Zona Ganjah and Hijos del Sol, among others.',
    'rider.alt': 'Two CDJs and a Pioneer DJM-900 mixer',
    'rider.tech': 'Technical',
    'rider.mixer': 'Pioneer DJM-900 mixer',
    'rider.monitors': '2 HQ stereo monitors',
    'rider.mic': '1 mic stand',
    'rider.power': '1 power strip',
    'rider.hosp': 'Hospitality',
    'rider.water': 'Mineral water ×4',
    'rider.meal': '1 veg. meal',
    'rider.beer': 'Craft beer 500 ml ×2',
    'rider.stay': 'Accommodation',
    'rider.room': '1 double room',
    'rider.bath': 'Private bathroom',
    'booking.call': 'Call +54 9 261 257-8445',
    'booking.copy': 'Copy',
    'booking.copyLabel': 'Copy email address',
    'booking.copied': 'Copied',
    'booking.copiedStatus': 'Email address copied',
    'booking.download': 'Download photos and logos for flyers',
    'booking.downloadMeta': '2 MB ZIP',
    'social.ig': ' on Instagram',
    'foot.credit': 'Website by'
  };

  // Textos en español que no están escritos en el HTML
  var ES_EXTRA = {
    'wa.text': 'Hola Gabi, te escribo por una fecha.',
    'booking.copied': 'Copiado',
    'booking.copiedStatus': 'Mail copiado'
  };

  var KEY = 'gabiraiz-lang';
  var WA = 'https://wa.me/5492612578445?text=';
  var ES = {};          // lo que trae el HTML, para poder volver
  var current = 'es';

  function rememberSpanish() {
    ES['doc.title'] = document.title;
    $$('[data-i18n]').forEach(function (el) {
      ES[el.getAttribute('data-i18n')] = el.textContent;
    });
    $$('[data-i18n-attr]').forEach(function (el) {
      pairs(el).forEach(function (p) { ES[p.key] = el.getAttribute(p.attr); });
    });
    Object.keys(ES_EXTRA).forEach(function (k) { ES[k] = ES_EXTRA[k]; });
  }

  // "alt:hero.alt; aria-label:otra.clave" → [{attr, key}]
  function pairs(el) {
    return el.getAttribute('data-i18n-attr').split(';').map(function (chunk) {
      var bits = chunk.split(':');
      return { attr: bits[0].trim(), key: (bits[1] || '').trim() };
    }).filter(function (p) { return p.attr && p.key; });
  }

  function t(key) {
    var dict = current === 'en' ? EN : ES;
    return dict[key] != null ? dict[key] : ES[key];
  }

  function applyLang(lang) {
    current = lang === 'en' ? 'en' : 'es';
    var dict = current === 'en' ? EN : ES;

    document.documentElement.lang = current;
    if (dict['doc.title']) document.title = dict['doc.title'];

    $$('[data-i18n]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value != null) el.textContent = value;
    });
    $$('[data-i18n-attr]').forEach(function (el) {
      pairs(el).forEach(function (p) {
        var value = dict[p.key];
        if (value != null) el.setAttribute(p.attr, value);
      });
    });
    $$('[data-wa]').forEach(function (a) {
      a.href = WA + encodeURIComponent(t('wa.text'));
    });
    $$('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === current));
    });
  }

  function initLang() {
    rememberSpanish();

    var saved = null;
    try { saved = window.localStorage.getItem(KEY); } catch (e) { /* modo privado */ }

    var browser = ((navigator.languages && navigator.languages[0]) || navigator.language || 'es').toLowerCase();
    var start = saved || (browser.indexOf('es') === 0 ? 'es' : 'en');
    document.documentElement.lang = start;
    if (start !== 'es') applyLang(start);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-lang]');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang');
      applyLang(lang);
      try { window.localStorage.setItem(KEY, lang); } catch (err) { /* sin storage */ }
    });
  }

  /* ══ Barra ═══════════════════════════════════════════════════════════ */

  function initBar() {
    var bar = $('#bar');
    var media = $('.hero__media');
    if (!bar || !media) return;

    var wide = window.matchMedia('(min-width: 720px)');
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.scrollY || window.pageYOffset;
      if (wide.matches) {
        bar.classList.remove('is-shown');
        bar.classList.toggle('is-stuck', y > 40);
      } else {
        // En el celular aparece recién cuando la foto de portada quedó atrás
        var show = y > media.offsetHeight * 0.7;
        bar.classList.toggle('is-shown', show);
        bar.classList.toggle('is-stuck', show);
      }
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    if (wide.addEventListener) wide.addEventListener('change', update);
    update();

    // Marca en el menú la sección que se está leyendo
    var links = $$('.bar__nav a');
    if (!('IntersectionObserver' in window) || !links.length) return;
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = byId[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
          link.setAttribute('aria-current', 'true');
        } else if (link.getAttribute('aria-current')) {
          link.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  /* ══ Entradas ════════════════════════════════════════════════════════ */

  function initReveals() {
    var targets = $$('.reveal');
    if (!targets.length) return;

    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // Los hermanos que entran juntos lo hacen en cascada, apenas
        var siblings = $$(':scope > .reveal', el.parentNode);
        var i = siblings.indexOf(el);
        if (i > 0) el.style.transitionDelay = Math.min(i, 5) * 70 + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* ══ Copiar el mail ══════════════════════════════════════════════════ */

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.className = 'sr-only';
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(area);
      if (ok) { resolve(); } else { reject(new Error('copy')); }
    });
  }

  function initCopy() {
    var status = $('#copy-status');
    $$('[data-copy]').forEach(function (btn) {
      var label = btn.querySelector('[data-i18n]');
      var timer = null;
      btn.addEventListener('click', function () {
        copyText(btn.getAttribute('data-copy')).then(function () {
          btn.classList.add('is-done');
          if (label) label.textContent = t('booking.copied');
          if (status) status.textContent = t('booking.copiedStatus');
          window.clearTimeout(timer);
          timer = window.setTimeout(function () {
            btn.classList.remove('is-done');
            if (label) label.textContent = t('booking.copy');
            if (status) status.textContent = '';
          }, 2200);
        }).catch(function () {
          // Si el navegador no deja copiar, se deja el mail seleccionado para copiarlo a mano
          var target = btn.parentNode.querySelector('a') || btn.parentNode;
          var range = document.createRange();
          range.selectNodeContents(target);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        });
      });
    });
  }

  /* ══ Arranque ════════════════════════════════════════════════════════ */

  $$('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
  initLang();
  initBar();
  initReveals();
  initCopy();
})();
