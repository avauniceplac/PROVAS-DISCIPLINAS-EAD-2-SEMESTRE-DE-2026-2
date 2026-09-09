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

const LABS_OCULTOS = ['LAB 2/3', ];
const LABS_DESATIVADOS = [];

const DIS = 'disp';
const IND = 'indisp';

const labs = [
  // ── BLOCO A ──
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, DIS, DIS] },
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
    d: [IND, IND, IND, IND, IND] },
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 4º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 4º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 4º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [IND, IND, IND, IND, IND] },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 4º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, 1º Andar',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, 1º Andar',   turno:'Tarde', horario:'12h – 17h',
    d: [IND, IND, IND, IND, IND] },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, 1º Andar',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, 4º Andar',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, 4º Andar',   turno:'Tarde', horario:'12h – 17h',
    d: [IND, IND, IND, IND, IND] },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, 4º Andar',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, DIS, DIS] },

  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 2º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS], sab: DIS },
  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 2º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [IND, IND, IND, IND, IND] },
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

/* Ícone de localização (pin) para o local do laboratório */
const ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';

/* Ícones de turno (Lucide, embutidos inline para não depender de CDN em runtime) */
const ICON_TURNO = {
  'Manhã': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg>',
  'Tarde': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10V2M5.6 8.6l1.4 1.4M2 18h2M20 18h2M17 8.6l1.4-1.4M22 22H2"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>',
  'Noite': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'
};

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
  const icones = TURNOS.map(t => {
    const disp = turnoDisp(grupo, t, dia, desativado);
    const cls = disp ? 'on' : 'off';
    const txt = disp ? 'disponível' : 'indisponível';
    return `<span class="turno-ic ${cls}" data-turno="${t}" role="img" aria-label="${t}: ${txt}" title="${diaLabel} · ${t}: ${txt}">${ICON_TURNO[t]}</span>`;
  }).join('');
  return `<div class="turnos-cel">${icones}</div>`;
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
}

/* Realça o turno selecionado (esmaece os demais); 'todos' mostra todos normalmente */
function aplicarFiltroTurno() {
  const tbody = document.getElementById('tbody-labs');
  if (!tbody) return;
  tbody.querySelectorAll('.turno-ic').forEach(ic => {
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

function popularLegenda() {
  const map = { 'leg-manha': 'Manhã', 'leg-tarde': 'Tarde', 'leg-noite': 'Noite' };
  Object.entries(map).forEach(([id, turno]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = ICON_TURNO[turno];
  });
}

document.addEventListener('DOMContentLoaded', () => { renderTable(); popularLegenda(); });
