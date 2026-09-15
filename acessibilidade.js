/* ═══════════════════════════════════════════════════════════════
   WIDGET DE ACESSIBILIDADE — botão flutuante próprio (gratuito)
   Recursos: tamanho de fonte, alto contraste, destaque de links.
   A preferência é lembrada entre páginas (localStorage).
   ═══════════════════════════════════════════════════════════════ */
(function () {
  var CHAVE = 'a11y-prefs';
  var estado = { fonte: 0, contraste: false, links: false };

  // Carrega preferências salvas
  try {
    var salvo = localStorage.getItem(CHAVE);
    if (salvo) estado = Object.assign(estado, JSON.parse(salvo));
  } catch (e) {}

  function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch (e) {}
  }

  function aplicar() {
    var h = document.documentElement;
    h.classList.remove('a11y-fonte-1', 'a11y-fonte-2', 'a11y-fonte-3');
    if (estado.fonte > 0) h.classList.add('a11y-fonte-' + estado.fonte);
    h.classList.toggle('a11y-contraste', estado.contraste);
    h.classList.toggle('a11y-links', estado.links);
    atualizarBotoes();
  }

  var painel;
  function atualizarBotoes() {
    if (!painel) return;
    painel.querySelectorAll('[data-fonte]').forEach(function (b) {
      b.classList.toggle('ativo', parseInt(b.dataset.fonte, 10) === estado.fonte);
    });
    var bc = painel.querySelector('[data-toggle="contraste"]');
    if (bc) bc.classList.toggle('ativo', estado.contraste);
    var bl = painel.querySelector('[data-toggle="links"]');
    if (bl) bl.classList.toggle('ativo', estado.links);
  }

  function montar() {
    // Botão flutuante
    var btn = document.createElement('button');
    btn.className = 'a11y-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Opções de acessibilidade');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="4" r="2"/><path d="M20 8h-5v13a1 1 0 0 1-2 0v-6h-2v6a1 1 0 0 1-2 0V8H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"/></svg>';

    // Painel
    painel = document.createElement('div');
    painel.className = 'a11y-painel';
    painel.setAttribute('role', 'dialog');
    painel.setAttribute('aria-label', 'Ajustes de acessibilidade');
    painel.innerHTML =
      '<h2>Acessibilidade</h2>' +
      '<div class="a11y-grupo">' +
        '<span class="a11y-label">Tamanho da fonte</span>' +
        '<div class="a11y-linha">' +
          '<button type="button" class="a11y-opt" data-fonte="0">A</button>' +
          '<button type="button" class="a11y-opt" data-fonte="1" style="font-size:15px">A</button>' +
          '<button type="button" class="a11y-opt" data-fonte="2" style="font-size:17px">A</button>' +
          '<button type="button" class="a11y-opt" data-fonte="3" style="font-size:19px">A</button>' +
        '</div>' +
      '</div>' +
      '<div class="a11y-grupo">' +
        '<span class="a11y-label">Contraste</span>' +
        '<div class="a11y-linha">' +
          '<button type="button" class="a11y-opt" data-toggle="contraste">Alto contraste</button>' +
        '</div>' +
      '</div>' +
      '<div class="a11y-grupo">' +
        '<span class="a11y-label">Links</span>' +
        '<div class="a11y-linha">' +
          '<button type="button" class="a11y-opt" data-toggle="links">Destacar links</button>' +
        '</div>' +
      '</div>' +
      '<div class="a11y-dica">' +
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>' +
        '<span><strong>Ouvir um texto:</strong> selecione qualquer trecho da página e toque no botão <em>Ouvir</em> que aparecer.</span>' +
      '</div>' +
      '<button type="button" class="a11y-reset">Restaurar padrão</button>';

    document.body.appendChild(btn);
    document.body.appendChild(painel);

    // Eventos
    btn.addEventListener('click', function () {
      var aberto = painel.classList.toggle('aberto');
      btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });

    painel.querySelectorAll('[data-fonte]').forEach(function (b) {
      b.addEventListener('click', function () {
        estado.fonte = parseInt(b.dataset.fonte, 10);
        aplicar(); salvar();
      });
    });
    painel.querySelector('[data-toggle="contraste"]').addEventListener('click', function () {
      estado.contraste = !estado.contraste; aplicar(); salvar();
    });
    painel.querySelector('[data-toggle="links"]').addEventListener('click', function () {
      estado.links = !estado.links; aplicar(); salvar();
    });
    painel.querySelector('.a11y-reset').addEventListener('click', function () {
      estado = { fonte: 0, contraste: false, links: false };
      aplicar(); salvar();
    });

    // Fecha ao clicar fora
    document.addEventListener('click', function (e) {
      if (!painel.contains(e.target) && !btn.contains(e.target)) {
        painel.classList.remove('aberto');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { painel.classList.remove('aberto'); btn.setAttribute('aria-expanded', 'false'); }
    });

    atualizarBotoes();
  }

  // Aplica o estado salvo o quanto antes (evita flash), monta a UI no load
  aplicar();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montar);
  } else {
    montar();
  }
})();

/* ═══════════════════════════════════════════════════════════════
   LEITOR DE SELEÇÃO — o aluno seleciona um texto e ouve (grátis, nativo)
   Usa a Web Speech API do próprio navegador. Sem CDN, sem servidor.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  // Se o navegador não suportar, não faz nada
  if (!('speechSynthesis' in window)) return;

  var botao = null;
  var lendo = false;

  function removerBotao() {
    if (botao) { botao.remove(); botao = null; }
  }

  function parar() {
    window.speechSynthesis.cancel();
    lendo = false;
    removerBotao();
  }

  function escolherVozPt() {
    var vozes = window.speechSynthesis.getVoices();
    return vozes.find(function (v) { return /pt[-_]BR/i.test(v.lang); })
        || vozes.find(function (v) { return /^pt/i.test(v.lang); })
        || null;
  }

  function ler(texto) {
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(texto);
    u.lang = 'pt-BR';
    var voz = escolherVozPt();
    if (voz) u.voice = voz;
    u.rate = 1;
    u.onend = function () { lendo = false; removerBotao(); };
    u.onerror = function () { lendo = false; removerBotao(); };
    lendo = true;
    window.speechSynthesis.speak(u);
  }

  function criarBotao(x, y, texto) {
    removerBotao();
    botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'a11y-ler-btn';
    botao.setAttribute('aria-label', 'Ouvir o texto selecionado');
    botao.innerHTML = iconeAlto() + '<span>Ouvir</span>';
    botao.style.left = x + 'px';
    botao.style.top = y + 'px';
    document.body.appendChild(botao);

    botao.addEventListener('mousedown', function (e) { e.preventDefault(); }); // não perde a seleção
    botao.addEventListener('click', function (e) {
      e.stopPropagation();
      if (lendo) {
        parar();
        return;
      }
      // marca visual de leitura ANTES de falar (evita corrida com onend)
      botao.innerHTML = iconeParar() + '<span>Parar</span>';
      botao.classList.add('lendo');
      ler(texto);
    });
  }

  function iconeAlto() {
    return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>';
  }
  function iconeParar() {
    return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>';
  }

  // Ao soltar a seleção, mostra o botão perto dela
  document.addEventListener('mouseup', function () {
    setTimeout(function () {
      var sel = window.getSelection();
      var texto = sel ? sel.toString().trim() : '';
      if (!texto || texto.length < 2) { if (!lendo) removerBotao(); return; }
      // não mostra se a seleção estiver dentro do próprio widget
      if (sel.anchorNode && sel.anchorNode.parentElement &&
          sel.anchorNode.parentElement.closest('.a11y-painel, .a11y-btn, .a11y-ler-btn')) return;
      try {
        var rect = sel.getRangeAt(0).getBoundingClientRect();
        var x = rect.left + window.scrollX + rect.width / 2 - 45;
        var y = rect.top + window.scrollY - 46;
        if (y < window.scrollY + 4) y = rect.bottom + window.scrollY + 8;
        criarBotao(Math.max(8, x), y, texto);
      } catch (e) {}
    }, 10);
  });

  // Fecha o botão ao clicar fora / rolar / apertar Esc
  document.addEventListener('mousedown', function (e) {
    if (botao && !botao.contains(e.target)) { if (!lendo) removerBotao(); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') parar(); });

  // Garante que as vozes carreguem (alguns navegadores carregam async)
  window.speechSynthesis.onvoiceschanged = function () {};
})();

