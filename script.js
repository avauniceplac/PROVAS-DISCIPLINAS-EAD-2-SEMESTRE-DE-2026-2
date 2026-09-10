/* ─────────────────────────────────────────────
   DADOS DOS LABORATÓRIOS
   ───────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════════
   CONTROLE RÁPIDO DE LABORATÓRIOS
   ───────────────────────────────────────────────────────────────
   Para gerenciar um laboratório, basta escrever o NOME dele
   (exatamente como aparece na coluna "lab", ex.: 'LAB 5', 'LAB 2/3')
   dentro de uma das listas abaixo.

   • LABS_OCULTOS      → o lab SOME completamente da tabela.
   • LABS_DESATIVADOS  → o lab APARECE, mas com tudo "Indisponível"
                          e a linha fica esmaecida.

   Para reativar, é só apagar o nome da lista. Separe vários nomes
   por vírgula. Ex.:  const LABS_OCULTOS = ['LAB 5', 'LAB 12'];
   ═══════════════════════════════════════════════════════════════ */

const LABS_OCULTOS = [];
const LABS_DESATIVADOS = [];

const DIS = 'disp';
const IND = 'indisp';

const labs = [
  // ── BLOCO A ──
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [IND, IND, IND, IND, IND] },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [IND, IND, IND, IND, IND] },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [IND, IND, IND, IND, IND] },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar',   turno:'Tarde', horario:'12h – 17h',
    d: [IND, IND, IND, IND, IND] },
  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'CEAD',   local:'Bloco A, 1º Andar - Exclusivo NAPA', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'CEAD',   local:'Bloco A, 1º Andar - Exclusivo NAPA', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'CEAD',   local:'Bloco A, 1º Andar - Exclusivo NAPA', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  // ── BLOCO EF ──
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 4º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 4º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 4º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 4º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 4º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 4º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, 1º Andar',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, 1º Andar',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, 1º Andar',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, 4º Andar',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, 4º Andar',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, 4º Andar',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 2º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 2º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 2º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },
];

let filtroBloco = 'todos';
let filtroTurno = 'todos';

/* Normaliza nomes para comparação tolerante (maiúsc./espaços) */
function normNome(s) {
  return String(s || '').trim().toUpperCase().replace(/\s+/g, ' ');
}
const _ocultos = LABS_OCULTOS.map(normNome);
const _desativados = LABS_DESATIVADOS.map(normNome);

function labOculto(row)     { return _ocultos.includes(normNome(row.lab)); }
function labDesativado(row) { return _desativados.includes(normNome(row.lab)); }

/* Nomes dos dias, usados nos rótulos acessíveis e nos cards mobile */
const DIAS_SEMANA = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
const DATAS_SEMANA = ['21/09', '22/09', '23/09', '24/09', '25/09'];
const TURNOS = ['Manhã', 'Tarde', 'Noite'];
const HORARIO_TURNO = { 'Manhã': '08h30–12h', 'Tarde': '12h–17h', 'Noite': '17h–22h' };

/* Ícone de localização (pin) para o local do laboratório */
const ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';

/* Turnos exibidos como chips de texto (Manhã/Tarde/Noite) — ver celulaDia() */

/* Agrupa os turnos (Manhã/Tarde/Noite) de cada laboratório numa só entrada */
function agruparPorLab(lista) {
  const mapa = new Map();
  lista.forEach(row => {
    const chave = row.bloco + '||' + row.lab;
    if (!mapa.has(chave)) {
      mapa.set(chave, { bloco: row.bloco, lab: row.lab, local: row.local, turnos: {} });
    }
    mapa.get(chave).turnos[row.turno] = row;
  });
  return [...mapa.values()];
}

/* Retorna se um turno está disponível num dado dia (índice 0-4) ou no sábado ('sab') */
function turnoDisp(grupo, turno, dia, desativado) {
  if (desativado) return false;
  const r = grupo.turnos[turno];
  if (!r) return false;
  if (dia === 'sab') {
    // Sábado: só manhã, e só se o lab tiver sab:DIS
    return turno === 'Manhã' && (r.sab === DIS);
  }
  return r.d[dia] === DIS;
}

/* Célula de um dia: os 3 ícones de turno, acesos (disp) ou apagados (indisp) */
function celulaDia(grupo, dia, diaLabel, desativado) {
  const chips = TURNOS.map(t => {
    const disp = turnoDisp(grupo, t, dia, desativado);
    const cls = disp ? 'disp' : 'indisp';
    const txt = disp ? 'disponível' : 'indisponível';
    const hora = HORARIO_TURNO[t] || '';
    return `<button type="button" class="turno-chip ${cls}" data-turno="${t}" data-hora="${hora}" data-dia="${diaLabel}" data-disp="${disp ? '1' : '0'}" aria-label="${diaLabel} · ${t} (${hora}): ${txt}">${t}</button>`;
  }).join('');
  return `<div class="turnos-cel">${chips}</div>`;
}

function renderTable() {
  const tbody = document.getElementById('tbody-labs');
  if (!tbody) return;
  tbody.innerHTML = '';

  // Filtra ocultos e por bloco (o filtro de turno agora REALÇA, não remove — ver aplicarFiltroTurno)
  const base = labs.filter(row => {
    if (labOculto(row)) return false;
    return filtroBloco === 'todos' || row.bloco === filtroBloco;
  });

  const grupos = agruparPorLab(base);

  let lastBloco = null;
  grupos.forEach(grupo => {
    if (grupo.bloco !== lastBloco) {
      const trSep = document.createElement('tr');
      trSep.className = 'bloco-header';
      trSep.innerHTML = `<td colspan="8">Bloco ${grupo.bloco}</td>`;
      tbody.appendChild(trSep);
      lastBloco = grupo.bloco;
    }

    const desativado = _desativados.includes(normNome(grupo.lab));
    const tr = document.createElement('tr');
    if (desativado) tr.className = 'lab-desativado';

    let celulas = '';
    for (let i = 0; i < 5; i++) {
      celulas += `<td class="status-cell" data-label="${DIAS_SEMANA[i]} ${DATAS_SEMANA[i]}">${celulaDia(grupo, i, DIAS_SEMANA[i], desativado)}</td>`;
    }
    celulas += `<td class="status-cell col-sabado" data-label="Sáb 26/09">${celulaDia(grupo, 'sab', 'Sáb', desativado)}</td>`;

    tr.innerHTML = `
      <td data-col="bloco"><span class="badge-bloco">${grupo.bloco}</span></td>
      <td data-col="lab"><span class="lab-nome">${grupo.lab}</span><span class="lab-local">${ICON_PIN}${grupo.local}</span></td>
      ${celulas}
    `;
    tbody.appendChild(tr);
  });

  aplicarFiltroTurno();
  if (typeof window.aplicarEstadoDias === 'function') window.aplicarEstadoDias();
}

/* Realça o turno selecionado (esmaece os demais); 'todos' mostra todos normalmente */
function aplicarFiltroTurno() {
  const tbody = document.getElementById('tbody-labs');
  if (!tbody) return;
  tbody.querySelectorAll('.turno-chip').forEach(ic => {
    if (filtroTurno === 'todos' || ic.dataset.turno === filtroTurno) {
      ic.classList.remove('turno-oculto');
    } else {
      ic.classList.add('turno-oculto');
    }
  });
}

/* Expande/recolhe os filtros no mobile */
function toggleFiltros(btn) {
  const controls = document.getElementById('labsControls');
  if (!controls) return;
  const aberto = controls.classList.toggle('aberto');
  btn.classList.toggle('aberto', aberto);
  btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
}

function filtrar(bloco, btn) {
  filtroBloco = bloco;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  renderTable();
}

function filtrarTurno(turno, btn) {
  filtroTurno = turno;
  document.querySelectorAll('.turno-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  aplicarFiltroTurno();
}

document.addEventListener('DOMContentLoaded', renderTable);

/* ─────────────────────────────────────────────
   ESTADO DOS DIAS (passado / hoje) — horário de Brasília
   • Dia vira "passado" após o horário de encerramento (22h úteis, 12h sáb).
   • Dia atual recebe destaque "HOJE".
   ───────────────────────────────────────────── */
(function () {
  // Retorna {ano, mes, dia, hora, min} agora no fuso de Brasília
  function agoraBrasilia() {
    const fmt = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Sao_Paulo',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: false
    });
    const p = {};
    fmt.formatToParts(new Date()).forEach(x => { p[x.type] = x.value; });
    // hour pode vir "24" à meia-noite em alguns ambientes — normaliza
    let hora = parseInt(p.hour, 10); if (hora === 24) hora = 0;
    return {
      data: `${p.year}-${p.month}-${p.day}`,
      minutos: hora * 60 + parseInt(p.minute, 10)
    };
  }

  // Classifica um dia como 'passado' | 'hoje' | 'futuro'
  function estadoDoDia(dataISO, fimHHMM) {
    const now = agoraBrasilia();
    if (dataISO < now.data) return 'passado';
    if (dataISO > now.data) return 'futuro';
    // mesmo dia: compara com o horário de encerramento
    const [h, m] = fimHHMM.split(':').map(Number);
    const fimMin = h * 60 + m;
    return now.minutos >= fimMin ? 'passado' : 'hoje';
  }

  function aplicarEstadoDias() {
    const ths = document.querySelectorAll('.th-dia-col');
    if (!ths.length) return;

    ths.forEach(th => {
      const idx = th.dataset.diaIdx;
      const estado = estadoDoDia(th.dataset.data, th.dataset.fim || '22:00');

      // limpa marcações anteriores
      th.classList.remove('dia-passado', 'dia-hoje');
      th.querySelector('.th-selo-passado')?.remove();
      th.querySelector('.th-selo-hoje')?.remove();

      if (estado === 'passado') {
        th.classList.add('dia-passado');
        const selo = document.createElement('span');
        selo.className = 'th-selo-passado';
        selo.textContent = 'Encerrado';
        th.appendChild(selo);
      } else if (estado === 'hoje') {
        th.classList.add('dia-hoje');
        const selo = document.createElement('span');
        selo.className = 'th-selo-hoje';
        selo.textContent = 'HOJE';
        th.appendChild(selo);
      }

      // aplica nas células do corpo com o mesmo índice de dia
      // (as 5 primeiras colunas de dia + sábado = colunas 4..9 do tr)
      const colStatus = document.querySelectorAll('tbody tr:not(.bloco-header) td.status-cell');
      // nada aqui: tratamos por linha abaixo
    });

    // Marca as células do corpo por posição de coluna
    document.querySelectorAll('tbody tr:not(.bloco-header)').forEach(tr => {
      const cels = tr.querySelectorAll('td.status-cell');
      cels.forEach((td, i) => {
        const th = ths[i];
        td.classList.remove('dia-passado', 'dia-hoje');
        if (!th) return;
        if (th.classList.contains('dia-passado')) td.classList.add('dia-passado');
        else if (th.classList.contains('dia-hoje')) td.classList.add('dia-hoje');
      });
    });
  }

  // roda depois que a tabela é montada
  window.aplicarEstadoDias = aplicarEstadoDias;
  document.addEventListener('DOMContentLoaded', function () {
    aplicarEstadoDias();
    // reavalia a cada minuto (caso o aluno deixe a página aberta cruzando o horário)
    setInterval(aplicarEstadoDias, 60 * 1000);
  });
})();

/* ─────────────────────────────────────────────
   BALÃO (popover) ao clicar/tocar num chip de turno
   Mostra: "Manhã (08h30–12h) — Disponível neste dia"
   ───────────────────────────────────────────── */
(function () {
  let pop = null;

  function fecharPop() {
    if (pop) { pop.remove(); pop = null; }
    document.querySelectorAll('.turno-chip.chip-ativo').forEach(c => c.classList.remove('chip-ativo'));
  }

  function abrirPop(chip) {
    fecharPop();
    const turno = chip.dataset.turno;
    const hora = chip.dataset.hora;
    const disp = chip.dataset.disp === '1';
    const status = disp ? 'Disponível neste dia' : 'Indisponível neste dia';

    pop = document.createElement('div');
    pop.className = 'turno-pop ' + (disp ? 'disp' : 'indisp');
    pop.setAttribute('role', 'status');
    pop.innerHTML =
      `<span class="turno-pop-titulo">${turno} <span class="turno-pop-hora">(${hora})</span></span>` +
      `<span class="turno-pop-status">${status}</span>`;
    document.body.appendChild(pop);
    chip.classList.add('chip-ativo');

    // Posiciona acima do chip, centralizado
    const r = chip.getBoundingClientRect();
    const pr = pop.getBoundingClientRect();
    let left = r.left + window.scrollX + (r.width - pr.width) / 2;
    let top = r.top + window.scrollY - pr.height - 10;
    // Mantém dentro da tela
    const margem = 8;
    left = Math.max(margem + window.scrollX, Math.min(left, window.scrollX + document.documentElement.clientWidth - pr.width - margem));
    // Se não couber acima, mostra abaixo
    if (top < window.scrollY + margem) top = r.bottom + window.scrollY + 10;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
  }

  document.addEventListener('click', function (e) {
    const chip = e.target.closest('.turno-chip');
    if (chip) {
      e.stopPropagation();
      if (chip.classList.contains('chip-ativo')) { fecharPop(); }
      else { abrirPop(chip); }
      return;
    }
    fecharPop();
  });

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecharPop(); });
  window.addEventListener('resize', fecharPop);
  window.addEventListener('scroll', fecharPop, true);
})();
