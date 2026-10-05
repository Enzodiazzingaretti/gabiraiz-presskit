/* Gabi Raíz — Press kit
   Barra, entradas de las secciones, idioma (ES / EN), formulario de booking y copiar el mail.
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
  // sólo aparecen cuando alguien hace algo (enviar el formulario, copiar el mail).
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
    'hero.sub2': 'From DJ set to live act, with live wind instruments.',
    'cta.book': 'Ask about a date',
    'cta.listen': 'Listen to a set',
    'bio.alt': 'Gabi Raíz sitting on the studio floor',
    'bio.lead': 'Gabi Raíz is a DJ and producer. He was born in 1992 at the foot of the Andes, in Mendoza, Argentina.',
    'bio.p1': 'He came to music at 16, through the guitar. In 2010 he started playing in bands with which he produced events and played music before and after each show. That is how he took his first steps as a DJ.',
    'bio.p2': 'In 2018 he travelled to France. A year after recording his first podcast he caught the attention of Cosmovision Records, a renowned organic downtempo label based in Montreal, Canada. He went on to record mixtapes for labels from different parts of the world, among them India’s Kosa Records.',
    'bio.p3': 'He performs as a DJ set, a hybrid set and a live act. In the last two he adds ney, clarinet, quena, tarka and quenacho. His style is versatile and changes with every stage, but always carries strong ancestral influences from all over the world. Live, he can move from downtempo, techno, afrohouse, deep and tribal to organic trance and psychedelic trance.',
    'bio.p4': 'His bond with ancestral rhythms and ethnic instruments gives his music a strong tribal imprint, with trance and mystical sounds that seek to connect with Mother Nature wherever it plays.',
    'bio.formats': 'Formats',
    'fmt.live': 'Ableton and an Akai APC40 controller, with live ney, clarinet, quena, tarka and quenacho.',
    'fmt.hybrid': 'CDJs and live instruments.',
    'fmt.dj': 'CDJs.',
    'bio.styles': 'Styles',
    'rituals.alt': 'Gabi Raíz wearing a green scarf against a red backdrop',
    'rituals.meta': 'EP on Shango Records, 2025',
    'rituals.remix': 'Featuring Sebuky on “Symbiosis” and remixes by Max Tenrom, Ahau, Claudio Arditti and Nat Barrera.',
    'rituals.player': 'Rituals EP by Gabi Raíz on SoundCloud',
    'rituals.tracks': 'EP tracklist',
    'rituals.with': 'with',
    'rituals.listen': 'Listen to',
    'rituals.on': 'on SoundCloud',
    'rituals.labels': 'Labels',
    'rituals.labelsList': 'Lump Records, Kosa Records, Shango Records, Plurpura Records and Exotic Refreshment, among others.',
    'sets.title': 'Sets & remixes',
    'sets.earth': 'A journey through the tribes of the world.',
    'sets.earthPlayer': 'The sound of Earth by Gabi Raíz on SoundCloud',
    'sets.souk': 'Original by Nat Barrera and Swa Swally, on Cosmovision Records.',
    'sets.soukPlayer': 'Souk Zrabi, remixed by Gabi Raíz, on SoundCloud',
    'stages.title': 'Stages',
    'stages.ar': 'Teaser Universo Paralello, VOX, Downtempo Rooftop and Avant Garten',
    'stages.cl': 'Cosmovision Showcase, Santo Remedio and El Corazón del Colibrí, in Melipeuco',
    'stages.frName': 'France',
    'stages.fr': 'Le Père Peinard, Usine à Musique and Le Manding ’Art, in Toulouse, and Isis Garden Festival',
    'stages.esName': 'Spain',
    'stages.shared': 'Shared the stage with',
    'stages.more': 'Among others.',
    'rider.alt': 'Two CDJs and a Pioneer DJM-900 mixer',
    'rider.tech': 'Technical',
    'rider.mixer': 'Pioneer DJM-\u2060900 mixer',
    'rider.monitors': 'HQ stereo monitors',
    'rider.mic': 'Mic stand',
    'rider.power': 'Power strip',
    'rider.hosp': 'Hospitality',
    'rider.water': 'Bottles of mineral water',
    'rider.meal': 'Veg. meal',
    'rider.beer': '500 ml craft beers',
    'rider.stay': 'Accommodation',
    'rider.room': 'Double room with private bathroom, Wi-\u2060Fi and minibar',
    'rider.print': 'Save the rider as PDF',
    'rider.printMeta': 'One page, ready to print or forward',
    'booking.intro': 'Bookings, collaborations and press.',
    'form.title': 'Ask about a date',
    'form.hint': 'Fill in what you know: the message writes itself and opens in WhatsApp, ready to send. Only your name is required.',
    'form.name': 'Name',
    'form.nameError': 'Write your name so Gabi knows who is writing.',
    'form.org': 'Promoter or event',
    'form.date': 'Date',
    'form.city': 'City',
    'form.format': 'Format',
    'form.fmtTbd': 'To be defined',
    'form.msg': 'Message',
    'form.msgPh': 'Time slot, set length and anything else you want to tell him.',
    'form.sendWa': 'Send via WhatsApp',
    'form.sendMail': 'Send via email',
    'form.waDone': 'WhatsApp opened with your message.',
    'form.waAgain': 'Open it again',
    'form.mailDone': 'If your email app didn’t open, write to gabiroot92@gmail.com.',
    'booking.copy': 'Copy',
    'booking.copyLabel': 'Copy email address',
    'booking.copied': 'Copied',
    'booking.copiedStatus': 'Email address copied',
    'booking.download': 'Download photos and logos for flyers',
    'booking.downloadMeta': '2 MB ZIP',
    'social.ig': ' on Instagram',
    'foot.credit': 'Website by'
  };

  // Textos en español que no están escritos en el HTML
  var ES_EXTRA = {
    'form.waDone': 'Se abrió WhatsApp con tu mensaje.',
    'form.waAgain': 'Abrirlo de nuevo',
    'form.mailDone': 'Si no se abrió tu correo, escribí a gabiroot92@gmail.com.',
    'booking.copied': 'Copiado',
    'booking.copiedStatus': 'Mail copiado'
  };

  var KEY = 'gabiraiz-lang';
  var WA = 'https://wa.me/5492612578445?text=';
  var MAIL = 'gabiroot92@gmail.com';
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
    var status = $('#form-status');
    if (status) status.textContent = '';
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

    // Marca en el menú la sección que se está leyendo (Sets y remixes cuenta como Música)
    var links = $$('.bar__nav a');
    if (!('IntersectionObserver' in window) || !links.length) return;
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    if (byId.musica) byId.sets = byId.musica;
    var visible = {};

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { visible[entry.target.id] = entry.isIntersecting; });
      var active = null;
      Object.keys(byId).forEach(function (id) { if (!active && visible[id]) active = byId[id]; });
      links.forEach(function (a) {
        if (a === active) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  /* ══ Entradas ════════════════════════════════════════════════════════ */

  // Llama a done cuando la foto de adentro (si hay) ya cargó; con conexión lenta, a los 2,5 s igual
  function whenLoaded(el, done) {
    var img = el.tagName === 'IMG' ? el : el.querySelector('img');
    if (!img || (img.complete && img.naturalWidth)) { done(); return; }
    var called = false;
    var finish = function () { if (!called) { called = true; done(); } };
    img.addEventListener('load', finish);
    img.addEventListener('error', finish);
    window.setTimeout(finish, 2500);
  }

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
        io.unobserve(el);
        // Los hermanos que entran juntos lo hacen en cascada, apenas
        var siblings = $$(':scope > .reveal', el.parentNode);
        var i = siblings.indexOf(el);
        if (i > 0) el.style.transitionDelay = Math.min(i, 5) * 70 + 'ms';
        whenLoaded(el, function () { el.classList.add('is-in'); });
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* ══ Reproductor ═════════════════════════════════════════════════════ */

  function initPlayers() {
    $$('.player__frame').forEach(function (frame) {
      var shown = false;
      var show = function () {
        if (shown) return;
        shown = true;
        frame.classList.add('is-ready');
      };
      // El widget arranca en blanco: se le da un instante para que pinte
      frame.addEventListener('load', function () { window.setTimeout(show, 300); });
      // Si el aviso de carga no llega (bloqueadores, red lenta), igual aparece al rato de estar a la vista
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          if (!entries[0].isIntersecting) return;
          io.disconnect();
          window.setTimeout(show, 6000);
        });
        io.observe(frame);
      } else {
        show();
      }
    });
  }

  /* ══ Temas del EP ════════════════════════════════════════════════════ */

  // El reproductor del EP carga un tema por vez; la lista de abajo elige cuál. Cada tema es un link a
  // SoundCloud: si el reproductor respondió alguna vez, el click lo toca acá mismo (con el protocolo de
  // mensajes del widget), marca el que suena y al terminar sigue con el próximo, como en el disco.
  function initTracks() {
    var frame = $('#ep .player__frame');
    var list = $('.tracks');
    if (!frame || !list || !window.postMessage) return;
    var rows = $$('.track[data-sc]', list);
    var ORIGIN = 'https://w.soundcloud.com';
    var base = frame.getAttribute('src');
    var ready = false;     // el widget cargado ahora responde
    var everReady = false; // el widget respondió al menos una vez
    var loaded = 0;        // tema que está en el reproductor
    var playing = false;

    function send(method, value) {
      if (!frame.contentWindow) return;
      var msg = { method: method };
      if (value !== undefined) msg.value = value;
      frame.contentWindow.postMessage(JSON.stringify(msg), ORIGIN);
    }

    function mark() {
      rows.forEach(function (row, i) {
        var on = i === loaded;
        if (on) { row.setAttribute('aria-current', 'true'); } else { row.removeAttribute('aria-current'); }
        row.classList.toggle('is-playing', on && playing);
      });
    }

    function load(i) {
      loaded = i;
      playing = false;
      ready = false;
      mark();
      var src = base.replace(/tracks\/\d+/, 'tracks/' + rows[i].getAttribute('data-sc'))
                    .replace('auto_play=false', 'auto_play=true');
      frame.setAttribute('src', src);
    }

    window.addEventListener('message', function (e) {
      if (e.origin !== ORIGIN || e.source !== frame.contentWindow) return;
      var data;
      try { data = JSON.parse(e.data); } catch (err) { return; }
      if (!data || !data.method) return;
      if (data.method === 'ready') {
        ready = true;
        if (!everReady) {
          everReady = true;
          list.classList.add('is-live');
          rows.forEach(function (row) { row.setAttribute('role', 'button'); });
        }
        ['play', 'pause', 'finish'].forEach(function (ev) { send('addEventListener', ev); });
      } else if (data.method === 'play') {
        playing = true;
        mark();
      } else if (data.method === 'pause') {
        playing = false;
        mark();
      } else if (data.method === 'finish') {
        playing = false;
        mark();
        if (loaded < rows.length - 1) load(loaded + 1);
      }
    });

    rows.forEach(function (row, i) {
      function activate(ev) {
        if (!everReady) return; // el reproductor nunca respondió: el link abre el tema en SoundCloud
        ev.preventDefault();
        if (i !== loaded) { load(i); } else if (ready) { send('toggle'); }
      }
      row.addEventListener('click', activate);
      // Como botón, también responde a la barra espaciadora
      row.addEventListener('keydown', function (ev) {
        if (everReady && (ev.key === ' ' || ev.key === 'Spacebar')) activate(ev);
      });
    });
  }

  /* ══ Rider en PDF ════════════════════════════════════════════════════ */

  // Imprime sólo el rider (ver @media print en style.css); el PDF se guarda desde la ventana de impresión
  function initPrint() {
    var btn = $('[data-print="rider"]');
    if (!btn || typeof window.print !== 'function') return;
    btn.hidden = false;
    var root = document.documentElement;
    var title = document.title;
    var printing = window.matchMedia ? window.matchMedia('print') : null;

    function reset() {
      root.classList.remove('print-rider');
      document.title = title;
    }
    window.addEventListener('afterprint', reset);
    if (printing && printing.addEventListener) {
      printing.addEventListener('change', function (e) { if (!e.matches) reset(); });
    }

    btn.addEventListener('click', function () {
      title = document.title;
      root.classList.add('print-rider');
      // El nombre del título es el que propone el navegador para el archivo
      document.title = 'Gabi Raíz — Rider';
      window.print();
    });
  }

  /* ══ Formulario de booking ═══════════════════════════════════════════ */

  // "2026-11-14" → "sábado 14 de noviembre" / "Saturday, November 14" (con el año si no es este)
  function prettyDate(value) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '');
    if (!m) return '';
    var d = new Date(+m[1], +m[2] - 1, +m[3]);
    var opts = { weekday: 'long', day: 'numeric', month: 'long' };
    if (d.getFullYear() !== new Date().getFullYear()) opts.year = 'numeric';
    try {
      var parts = new Intl.DateTimeFormat(current === 'en' ? 'en-US' : 'es-AR', opts).formatToParts(d);
      if (current !== 'en') {
        // En castellano va sin coma después del día de la semana
        parts = parts.filter(function (p, i) { return !(p.type === 'literal' && i === 1); });
        parts.splice(1, 0, { type: 'literal', value: ' ' });
      }
      return parts.map(function (p) { return p.value; }).join('');
    } catch (e) {
      return d.toLocaleDateString();
    }
  }

  function readForm(form) {
    var get = function (name) { return (form.elements[name] && form.elements[name].value || '').trim(); };
    var picked = form.querySelector('input[name="formato"]:checked');
    var format = '';
    if (picked) format = picked.hasAttribute('data-tbd') ? (current === 'en' ? 'to be defined' : 'a definir') : picked.value;
    return {
      name: get('nombre'),
      org: get('productora'),
      date: prettyDate(get('fecha')),
      city: get('ciudad'),
      format: format,
      msg: get('mensaje')
    };
  }

  function buildMessage(d) {
    var en = current === 'en';
    var hello = (en ? 'Hi Gabi, I’m ' : 'Hola Gabi, soy ') + d.name;
    if (d.org) hello += (en ? ' from ' : ', de ') + d.org;
    var ask = en ? 'I’m reaching out about a booking' : 'Te escribo por una fecha';
    if (d.date) ask += (en ? ' on ' : ' para el ') + d.date;
    if (d.city) ask += (en ? ' in ' : ' en ') + d.city;
    var lines = [hello + '.', ask + '.'];
    if (d.format) lines.push((en ? 'Format: ' : 'Formato: ') + d.format + '.');
    var text = lines.join('\n');
    if (d.msg) text += '\n\n' + d.msg;
    return text;
  }

  function initForm() {
    var form = $('#booking-form');
    if (!form) return;
    var name = $('#f-name');
    var error = $('#f-name-error');
    var status = $('#form-status');

    // Las fechas pasadas no se pueden elegir
    var date = $('#f-date');
    if (date) {
      var today = new Date();
      var pad = function (n) { return (n < 10 ? '0' : '') + n; };
      date.min = today.getFullYear() + '-' + pad(today.getMonth() + 1) + '-' + pad(today.getDate());
    }

    function validName() {
      var ok = name.value.trim() !== '';
      name.setAttribute('aria-invalid', String(!ok));
      if (error) error.hidden = ok;
      return ok;
    }

    name.addEventListener('input', function () {
      if (name.getAttribute('aria-invalid') === 'true') validName();
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validName()) { name.focus(); return; }
      var url = WA + encodeURIComponent(buildMessage(readForm(form)));
      var win = window.open(url, '_blank');
      if (win) { win.opener = null; } else { window.location.href = url; }
      if (status) {
        status.textContent = t('form.waDone') + ' ';
        var again = document.createElement('a');
        again.href = url;
        again.target = '_blank';
        again.rel = 'noopener';
        again.textContent = t('form.waAgain');
        status.appendChild(again);
      }
    });

    var mail = form.querySelector('[data-send="mail"]');
    if (mail) {
      mail.addEventListener('click', function () {
        if (!validName()) { name.focus(); return; }
        var d = readForm(form);
        var subject = (current === 'en' ? 'Booking inquiry' : 'Consulta de fecha') + (d.org ? ' — ' + d.org : '');
        window.location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(buildMessage(d));
        if (status) status.textContent = t('form.mailDone');
      });
    }
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
  initPrint();
  initReveals();
  initPlayers();
  initTracks();
  initForm();
  initCopy();
})();
