const CARDS_ALL = [
    { id: 'strike', name: 'Strike', type: 'attack', cost: 1, desc: 'Deal 6 damage.', icon: '⚔', upgraded: false, eff: { dmg: 6 } },
    { id: 'strike+', name: 'Strike+', type: 'attack', cost: 1, desc: 'Deal 9 damage.', icon: '⚔', upgraded: true, eff: { dmg: 9 } },
    { id: 'defend', name: 'Defend', type: 'block', cost: 1, desc: 'Gain 5 block.', icon: '🛡', upgraded: false, eff: { block: 5 } },
    { id: 'defend+', name: 'Defend+', type: 'block', cost: 1, desc: 'Gain 8 block.', icon: '🛡', upgraded: true, eff: { block: 8 } },
    { id: 'bash', name: 'Bash', type: 'attack', cost: 2, desc: 'Deal 8 dmg. Apply 2 Vulnerable.', icon: '🔨', upgraded: false, eff: { dmg: 8, vuln: 2 } },
    { id: 'bash+', name: 'Bash+', type: 'attack', cost: 2, desc: 'Deal 10 dmg. Apply 3 Vulnerable.', icon: '🔨', upgraded: true, eff: { dmg: 10, vuln: 3 } },
    { id: 'cleave', name: 'Cleave', type: 'attack', cost: 1, desc: 'Deal 8 damage.', icon: '🗡', upgraded: false, eff: { dmg: 8 } },
    { id: 'cleave+', name: 'Cleave+', type: 'attack', cost: 1, desc: 'Deal 11 damage.', icon: '🗡', upgraded: true, eff: { dmg: 11 } },
    { id: 'ironwave', name: 'Iron Wave', type: 'attack', cost: 1, desc: 'Gain 5 block. Deal 5 damage.', icon: '⚒', upgraded: false, eff: { dmg: 5, block: 5 } },
    { id: 'ironwave+', name: 'Iron Wave+', type: 'attack', cost: 1, desc: 'Gain 7 block. Deal 7 damage.', icon: '⚒', upgraded: true, eff: { dmg: 7, block: 7 } },
    { id: 'shrug', name: 'Shrug It Off', type: 'block', cost: 1, desc: 'Gain 8 block. Draw 1 card.', icon: '🌀', upgraded: false, eff: { block: 8, draw: 1 } },
    { id: 'shrug+', name: 'Shrug It Off+', type: 'block', cost: 1, desc: 'Gain 11 block. Draw 1 card.', icon: '🌀', upgraded: true, eff: { block: 11, draw: 1 } },
    { id: 'pommel', name: 'Pommel Strike', type: 'attack', cost: 1, desc: 'Deal 9 damage. Draw 1 card.', icon: '⚔', upgraded: false, eff: { dmg: 9, draw: 1 } },
    { id: 'pommel+', name: 'Pommel Strike+', type: 'attack', cost: 1, desc: 'Deal 10 damage. Draw 2 cards.', icon: '⚔', upgraded: true, eff: { dmg: 10, draw: 2 } },
    { id: 'bloodletting', name: 'Bloodletting', type: 'skill', cost: 0, desc: 'Lose 3 HP. Gain 2 energy.', icon: '🩸', upgraded: false, eff: { selfHp: -3, energy: 2 } },
    { id: 'bloodletting+', name: 'Bloodletting+', type: 'skill', cost: 0, desc: 'Lose 3 HP. Gain 3 energy.', icon: '🩸', upgraded: true, eff: { selfHp: -3, energy: 3 } },
    { id: 'poisonblade', name: 'Poison Blade', type: 'attack', cost: 1, desc: 'Deal 4 damage. Apply 3 Bleed.', icon: '🗡', upgraded: false, eff: { dmg: 4, bleed: 3 } },
    { id: 'poisonblade+', name: 'Poison Blade+', type: 'attack', cost: 1, desc: 'Deal 6 damage. Apply 4 Bleed.', icon: '🗡', upgraded: true, eff: { dmg: 6, bleed: 4 } },
    { id: 'weakstrike', name: 'Hobble', type: 'attack', cost: 1, desc: 'Deal 5 dmg. Apply 2 Weak.', icon: '🦶', upgraded: false, eff: { dmg: 5, weak: 2 } },
    { id: 'weakstrike+', name: 'Hobble+', type: 'attack', cost: 1, desc: 'Deal 7 dmg. Apply 3 Weak.', icon: '🦶', upgraded: true, eff: { dmg: 7, weak: 3 } },
    { id: 'fireball', name: 'Fireball', type: 'attack', cost: 2, desc: 'Deal 14 dmg. Apply 2 Burn.', icon: '🔥', upgraded: false, eff: { dmg: 14, burn: 2 } },
    { id: 'fireball+', name: 'Fireball+', type: 'attack', cost: 2, desc: 'Deal 18 dmg. Apply 3 Burn.', icon: '🔥', upgraded: true, eff: { dmg: 18, burn: 3 } },
    { id: 'arcane', name: 'Arcane Bolt', type: 'attack', cost: 0, desc: 'Deal 3 damage.', icon: '✨', upgraded: false, eff: { dmg: 3 } },
    { id: 'arcane+', name: 'Arcane Bolt+', type: 'attack', cost: 0, desc: 'Deal 5 damage.', icon: '✨', upgraded: true, eff: { dmg: 5 } },
    { id: 'bulwark', name: 'Bulwark', type: 'power', cost: 1, desc: 'Each turn, gain 3 block.', icon: '🏰', upgraded: false, eff: { powerBlock: 3 } },
    { id: 'bulwark+', name: 'Bulwark+', type: 'power', cost: 1, desc: 'Each turn, gain 5 block.', icon: '🏰', upgraded: true, eff: { powerBlock: 5 } },
    { id: 'vigor', name: 'Battle Vigor', type: 'power', cost: 1, desc: 'Attacks deal +2 damage this combat.', icon: '💪', upgraded: false, eff: { powerDmg: 2 } },
    { id: 'vigor+', name: 'Battle Vigor+', type: 'power', cost: 1, desc: 'Attacks deal +4 damage this combat.', icon: '💪', upgraded: true, eff: { powerDmg: 4 } },
    { id: 'sharpen', name: 'Sharpen', type: 'skill', cost: 1, desc: 'Next attack deals double damage.', icon: '⚡', upgraded: false, eff: { doubleDmg: true } },
    { id: 'sharpen+', name: 'Sharpen+', type: 'skill', cost: 0, desc: 'Next attack deals double damage.', icon: '⚡', upgraded: true, eff: { doubleDmg: true } },
    { id: 'adrenaline', name: 'Adrenaline', type: 'skill', cost: 0, desc: '+1 energy. Draw 2. Exhaust.', icon: '💨', upgraded: false, eff: { energy: 1, draw: 2, exhaust: true } },
    { id: 'adrenaline+', name: 'Adrenaline+', type: 'skill', cost: 0, desc: '+2 energy. Draw 2. Exhaust.', icon: '💨', upgraded: true, eff: { energy: 2, draw: 2, exhaust: true } },
    { id: 'whirlwind', name: 'Whirlwind', type: 'attack', cost: 2, desc: 'Deal 5 damage 3 times.', icon: '🌪', upgraded: false, eff: { dmg: 5, hits: 3 } },
    { id: 'whirlwind+', name: 'Whirlwind+', type: 'attack', cost: 2, desc: 'Deal 7 damage 3 times.', icon: '🌪', upgraded: true, eff: { dmg: 7, hits: 3 } },
    { id: 'reaper', name: 'Reaper', type: 'attack', cost: 2, desc: 'Deal 9 dmg. Heal for unblocked damage.', icon: '💀', upgraded: false, eff: { dmg: 9, lifeSteal: true } },
    { id: 'fortify', name: 'Fortify', type: 'block', cost: 2, desc: 'Gain 14 block.', icon: '🛡', upgraded: false, eff: { block: 14 } },
    { id: 'fortify+', name: 'Fortify+', type: 'block', cost: 2, desc: 'Gain 18 block.', icon: '🛡', upgraded: true, eff: { block: 18 } },
];

const RELICS = [
    { id: 'burningblood', name: 'Burning Blood', icon: '🩸', desc: 'Heal 6 HP after combat.' },
    { id: 'sneckoEye', name: 'Keen Eye', icon: '👁', desc: 'Draw 2 extra cards per turn.' },
    { id: 'oddMushroom', name: 'Tower Shield', icon: '🍄', desc: 'Block cards cost 1 less.' },
    { id: 'bag', name: 'Bag of Prep', icon: '🎒', desc: 'Start combat with 2 extra cards.' },
    { id: 'anchor', name: 'Bronze Anchor', icon: '⚓', desc: 'Start combat with 7 block.' },
    { id: 'warhorn', name: 'War Horn', icon: '📯', desc: 'Gain 1 energy next combat.' },
];

const ENEMIES = [
    { name: 'Goblin', icon: '👹', hp: 28, acts: [{ type: 'atk', val: 6 }, { type: 'blk', val: 4 }, { type: 'atk', val: 6 }, { type: 'atk+bleed', val: 6, bleed: 2 }] },
    { name: 'Skeleton', icon: '💀', hp: 35, acts: [{ type: 'atk', val: 8 }, { type: 'atk', val: 8 }, { type: 'blk', val: 7 }, { type: 'atk', val: 10 }] },
    { name: 'Dark Elf', icon: '🧝', hp: 40, acts: [{ type: 'atk+weak', val: 7, weak: 2 }, { type: 'atk', val: 9 }, { type: 'blk', val: 10 }, { type: 'atk', val: 9 }] },
    { name: 'Stone Golem', icon: '🗿', hp: 60, acts: [{ type: 'blk', val: 12 }, { type: 'atk', val: 12 }, { type: 'blk', val: 12 }, { type: 'atk', val: 15 }] },
    { name: 'Vampire Bat', icon: '🦇', hp: 32, acts: [{ type: 'atk+bleed', val: 5, bleed: 3 }, { type: 'atk', val: 7 }, { type: 'atk+bleed', val: 5, bleed: 3 }, { type: 'atk', val: 7 }] },
    { name: 'Forest Witch', icon: '🧙', hp: 45, acts: [{ type: 'atk+vuln', val: 6, vuln: 2 }, { type: 'atk', val: 10 }, { type: 'buff', desc: 'heals' }, { type: 'atk', val: 12 }] },
    { name: 'Orc Brute', icon: '👺', hp: 70, acts: [{ type: 'atk', val: 14 }, { type: 'atk', val: 14 }, { type: 'blk', val: 10 }, { type: 'atk', val: 18 }] },
];
const ELITES = [
    { name: 'Ancient Golem', icon: '🗿', hp: 90, acts: [{ type: 'blk', val: 15 }, { type: 'atk', val: 16 }, { type: 'atk+vuln', val: 12, vuln: 3 }, { type: 'atk', val: 20 }], elite: true, relic: true },
    { name: 'Shadow Wraith', icon: '👻', hp: 75, acts: [{ type: 'atk+weak', val: 10, weak: 3 }, { type: 'atk', val: 14 }, { type: 'atk+bleed', val: 8, bleed: 5 }, { type: 'atk', val: 16 }], elite: true, relic: true },
];
const BOSSES = [
    { name: 'Dragon Knight', icon: '🐉', hp: 120, acts: [{ type: 'atk', val: 20 }, { type: 'blk', val: 20 }, { type: 'atk', val: 20 }, { type: 'atk+vuln', val: 15, vuln: 4 }], boss: true },
    { name: 'Lich King', icon: '☠', hp: 150, acts: [{ type: 'atk+bleed', val: 12, bleed: 6 }, { type: 'atk', val: 18 }, { type: 'buff', desc: 'grows stronger' }, { type: 'atk', val: 22 }], boss: true },
    { name: 'Infernal Drake', icon: '🔥', hp: 180, acts: [{ type: 'atk', val: 22 }, { type: 'atk+vuln', val: 18, vuln: 5 }, { type: 'atk', val: 22 }, { type: 'atk', val: 28 }], boss: true },
];

const EVENTS = [
    {
        title: '🗿 Mysterious Altar', text: 'A glowing altar pulses with dark energy. Runes carved into its surface whisper promises of power.',
        choices: [{ label: '⚔ Offer blood (-10 HP, gain relic)', action: 'event_altar_relic' }, { label: '🚶 Leave it alone', action: 'event_skip' }]
    },
    {
        title: '📚 Ancient Library', text: 'Rows of dusty tomes line the walls. A kindly spirit offers to share forgotten knowledge.',
        choices: [{ label: '📖 Study a tome (add random card)', action: 'event_add_card' }, { label: '💰 Take the gold (+30g)', action: 'event_gold' }, { label: '🚶 Leave', action: 'event_skip' }]
    },
    {
        title: '💎 Treasure Cache', text: 'A hidden alcove reveals a stash of gold and supplies left by a previous adventurer.',
        choices: [{ label: '🎒 Take everything (+50g, +15 HP)', action: 'event_treasure' }, { label: '🚶 Leave it', action: 'event_skip' }]
    },
    {
        title: '🧙 Cursed Merchant', text: 'A hooded figure offers to strengthen any card — but demands a tribute of blood.',
        choices: [{ label: '⚔ Accept (-15 HP, upgrade a card)', action: 'event_upgrade' }, { label: '🚶 Refuse', action: 'event_skip' }]
    },
    {
        title: '💧 Healing Spring', text: 'Crystal-clear water bubbles up from a magical spring. You feel rejuvenated just standing near it.',
        choices: [{ label: '🥤 Drink deeply (+30 HP)', action: 'event_heal' }, { label: '🫙 Fill your flask (+15 now, +15 later)', action: 'event_flask' }]
    },
];

let G = {};
let C = {};
let prevScreen = 'map';
let combatContext = {};
let shopCards = [];
let upgradeFrom = '';

// ===== BRANCHING MAP =====
function buildBranchingMap() {
    const TOTAL_ROWS = 15;
    const COLS = 6;
    const map = { rows: [], edges: [] };

    for (let r = 0; r < TOTAL_ROWS; r++) {
        const rowNodes = [];
        if (r === 0) {
            const count = 3 + Math.floor(Math.random() * 2);
            for (let i = 0; i < count; i++) {
                rowNodes.push({ row: r, col: Math.floor(i * (COLS - 1) / (count - 1)), id: `${r}-${i}`, type: 'fight', completed: false, available: true });
            }
        } else if (r === TOTAL_ROWS - 1) {
            rowNodes.push({ row: r, col: Math.floor(COLS / 2), id: `${r}-0`, type: 'boss', completed: false, available: false });
        } else if (r === 8) {
            const count = 3;
            for (let i = 0; i < count; i++) {
                rowNodes.push({ row: r, col: Math.floor(i * (COLS - 1) / (count - 1)), id: `${r}-${i}`, type: 'rest', completed: false, available: false });
            }
        } else {
            const count = 2 + Math.floor(Math.random() * 3);
            const used = new Set();
            for (let i = 0; i < count; i++) {
                let col;
                let tries = 0;
                do { col = Math.floor(Math.random() * COLS); tries++; } while (used.has(col) && tries < 20);
                used.add(col);
                rowNodes.push({ row: r, col, id: `${r}-${i}`, type: 'fight', completed: false, available: false });
            }
            rowNodes.sort((a, b) => a.col - b.col);
            rowNodes.forEach((n, i) => n.id = `${r}-${i}`);
        }
        map.rows.push(rowNodes);
    }

    const typePool = ['fight', 'fight', 'fight', 'fight', 'fight', 'elite', 'shop', 'event', 'event', 'rest'];
    for (let r = 1; r < TOTAL_ROWS - 1; r++) {
        if (r === 8) continue;
        map.rows[r].forEach(n => {
            let type;
            if (r < 3) type = Math.random() < 0.8 ? 'fight' : 'event';
            else if (r === 4 || r === 5) type = Math.random() < 0.4 ? 'elite' : (Math.random() < 0.5 ? 'fight' : (Math.random() < 0.5 ? 'shop' : 'event'));
            else if (r === 6 || r === 7) type = Math.random() < 0.5 ? 'fight' : (Math.random() < 0.5 ? 'event' : 'shop');
            else if (r >= 9 && r <= 11) type = Math.random() < 0.35 ? 'elite' : (Math.random() < 0.5 ? 'fight' : (Math.random() < 0.5 ? 'shop' : 'event'));
            else type = typePool[Math.floor(Math.random() * typePool.length)];
            n.type = type;
        });
    }

    const ensureType = (startRow, endRow, type) => {
        let has = false;
        for (let r = startRow; r <= endRow; r++) for (const n of map.rows[r]) if (n.type === type) has = true;
        if (!has) {
            const r = startRow + Math.floor((endRow - startRow) / 2);
            map.rows[r][Math.floor(Math.random() * map.rows[r].length)].type = type;
        }
    };
    ensureType(3, 6, 'shop');
    ensureType(10, 12, 'shop');

    for (let r = 0; r < TOTAL_ROWS - 1; r++) {
        const curr = map.rows[r];
        const next = map.rows[r + 1];
        curr.forEach(node => {
            const sorted = [...next].map(n => ({ n, d: Math.abs(n.col - node.col) })).sort((a, b) => a.d - b.d);
            const edgeCount = Math.min(1 + Math.floor(Math.random() * 2), sorted.length);
            const chosen = sorted.slice(0, edgeCount);
            node.edges = (node.edges || []).concat(chosen.map(s => s.n.id));
            chosen.forEach(s => map.edges.push({ from: node.id, to: s.n.id }));
        });
    }

    for (let r = 1; r < TOTAL_ROWS; r++) {
        map.rows[r].forEach(n => {
            const reached = map.rows[r - 1].some(p => (p.edges || []).includes(n.id));
            if (!reached) {
                const prev = map.rows[r - 1];
                let best = prev[0], bestD = Infinity;
                prev.forEach(p => { const d = Math.abs(p.col - n.col); if (d < bestD) { bestD = d; best = p; } });
                best.edges = best.edges || [];
                if (!best.edges.includes(n.id)) {
                    best.edges.push(n.id);
                    map.edges.push({ from: best.id, to: n.id });
                }
            }
        });
    }

    return map;
}

function findNode(id) {
    for (const row of G.map.rows) for (const n of row) if (n.id === id) return n;
    return null;
}

function startGame() {
    G = {
        hp: 80, maxHp: 80, gold: 100,
        deck: ['strike', 'strike', 'strike', 'strike', 'defend', 'defend', 'defend', 'bash'],
        relics: [],
        nextEventFlask: false,
        powerDmgBonus: 0, powerBlockBonus: 0, doubleDmgNext: false,
        warHornReady: false,
        map: buildBranchingMap(),
        currentRow: -1,
        currentNodeId: null,
    };
    showMap();
}

function showMap() {
    show('map');
    renderMapHeader();
    renderMapSvg();
}

function renderMapHeader() {
    document.getElementById('map-gold').textContent = G.gold;
    document.getElementById('deck-count').textContent = G.deck.length;
    document.getElementById('map-hp-text').textContent = G.hp + '/' + G.maxHp;
    document.getElementById('map-hp-fill').style.width = (G.hp / G.maxHp * 100) + '%';
    const row = G.currentRow < 0 ? 0 : G.currentRow;
    const act = row < 5 ? 'I' : row < 10 ? 'II' : 'III';
    document.getElementById('act-label').textContent = 'Act ' + act;
    const floorMsgs = ['The dungeon awaits', 'Venture forth', 'Choose your path', 'Danger mounts', 'Evil grows near', 'The boss lies ahead'];
    document.getElementById('floor-label').textContent = `Row ${row + 1} of 15 · ${floorMsgs[Math.min(5, Math.floor(row / 3))]}`;
    const relicsEl = document.getElementById('map-relics');
    relicsEl.innerHTML = G.relics.map(id => {
        const r = RELICS.find(x => x.id === id);
        return `<span class="relic-mini" title="${r.desc}">${r.icon} ${r.name}</span>`;
    }).join('');
}

function renderMapSvg() {
    const svg = document.getElementById('map-svg');
    const W = 700, H = 520;
    const ROWS = 15;
    const PAD_X = 50, PAD_Y = 25;
    const usableW = W - 2 * PAD_X, usableH = H - 2 * PAD_Y;
    const rowH = usableH / (ROWS - 1);

    const colToX = (col) => PAD_X + col * (usableW / 5);
    const rowToY = (row) => H - PAD_Y - row * rowH;

    let svgHtml = '';

    svgHtml += `<defs>
    <radialGradient id="nodeGlow" cx="50%" cy="50%"><stop offset="0%" stop-color="#7f77dd" stop-opacity="0.4"/><stop offset="100%" stop-color="#7f77dd" stop-opacity="0"/></radialGradient>
    <filter id="softGlow"><feGaussianBlur stdDeviation="2"/></filter>
  </defs>`;

    G.map.edges.forEach(edge => {
        const from = findNode(edge.from);
        const to = findNode(edge.to);
        if (!from || !to) return;
        const x1 = colToX(from.col), y1 = rowToY(from.row);
        const x2 = colToX(to.col), y2 = rowToY(to.row);
        const traveled = from.completed && to.completed;
        const onPath = from.completed && (to.available || to.completed);
        const color = traveled ? '#f5c547' : onPath ? '#7f77dd' : '#4a3f66';
        const width = traveled ? 3 : onPath ? 2.5 : 1.5;
        const opacity = traveled ? 0.9 : onPath ? 0.7 : 0.35;
        const midX = (x1 + x2) / 2, midY = (y1 + y2) / 2;
        svgHtml += `<path d="M${x1} ${y1} Q${midX} ${midY} ${x2} ${y2}" stroke="${color}" stroke-width="${width}" fill="none" stroke-dasharray="${traveled || onPath ? '0' : '4 4'}" opacity="${opacity}" stroke-linecap="round"/>`;
    });

    const iconMap = { fight: '⚔', elite: '💀', boss: '👑', shop: '🛒', rest: '🔥', event: '❓' };
    const colorMap = {
        fight: { bg: '#3d2f4a', border: '#7f77dd', text: '#b5aee8' },
        elite: { bg: '#4a1f2a', border: '#e24b4a', text: '#ffb0b0' },
        boss: { bg: '#4a2a00', border: '#f5c547', text: '#f5c547' },
        shop: { bg: '#1f3a4a', border: '#4a9eff', text: '#9fd0ff' },
        rest: { bg: '#4a2f1f', border: '#ef9f27', text: '#ffc875' },
        event: { bg: '#2a3a2a', border: '#97c459', text: '#c5e098' },
    };

    G.map.rows.forEach(row => {
        row.forEach(node => {
            const x = colToX(node.col), y = rowToY(node.row);
            const c = colorMap[node.type];
            let state = 'locked';
            if (node.completed) state = 'completed';
            else if (node.available) state = 'available';
            else if (node.id === G.currentNodeId) state = 'current';

            const stroke = state === 'completed' ? '#f5c547' : state === 'available' ? c.border : c.border;
            const strokeW = state === 'available' ? 3 : 2;
            const fill = state === 'completed' ? '#2a2438' : c.bg;
            const opacity = state === 'locked' ? 0.35 : 1;
            const clickable = state === 'available';
            const glow = state === 'available' ? `<circle cx="${x}" cy="${y}" r="28" fill="url(#nodeGlow)"/>` : '';

            svgHtml += `<g class="node-group" opacity="${opacity}" ${clickable ? `style="cursor:pointer" onclick="enterNode('${node.id}')"` : ''}>`;
            svgHtml += glow;
            svgHtml += `<circle cx="${x}" cy="${y}" r="20" fill="${fill}" stroke="${stroke}" stroke-width="${strokeW}"/>`;
            svgHtml += `<text x="${x}" y="${y + 6}" text-anchor="middle" font-size="18">${iconMap[node.type]}</text>`;
            if (node.id === G.currentNodeId) {
                svgHtml += `<circle cx="${x}" cy="${y}" r="24" fill="none" stroke="#f5c547" stroke-width="2" stroke-dasharray="3 3"><animateTransform attributeName="transform" type="rotate" from="0 ${x} ${y}" to="360 ${x} ${y}" dur="8s" repeatCount="indefinite"/></circle>`;
            }
            svgHtml += `</g>`;
        });
    });

    const boss = G.map.rows[14][0];
    const bx = colToX(boss.col), by = rowToY(boss.row);
    svgHtml += `<text x="${bx}" y="${by - 32}" text-anchor="middle" font-size="11" fill="#f5c547" font-weight="500" letter-spacing="1.5">BOSS</text>`;

    svg.innerHTML = svgHtml;
}

function enterNode(id) {
    const node = findNode(id);
    if (!node || !node.available) return;
    G.currentNodeId = id;
    G.currentRow = node.row;
    if (node.type === 'fight') startCombat(pickEnemy(), false, false);
    else if (node.type === 'elite') startCombat(pickElite(), true, false);
    else if (node.type === 'boss') startCombat(pickBoss(), false, true);
    else if (node.type === 'rest') showRest();
    else if (node.type === 'shop') showShop();
    else if (node.type === 'event') showEvent();
}

function markCurrentCompleted() {
    const node = findNode(G.currentNodeId);
    if (!node) return;
    node.completed = true;
    G.map.rows[node.row].forEach(n => {
        if (n.id !== node.id) { n.available = false; }
    });
    (node.edges || []).forEach(childId => {
        const child = findNode(childId);
        if (child && !child.completed) child.available = true;
    });
}

function pickEnemy() {
    const pool = ENEMIES;
    const tier = G.currentRow < 5 ? pool.slice(0, 4) : G.currentRow < 10 ? pool.slice(2, 6) : pool.slice(4);
    return JSON.parse(JSON.stringify(tier[Math.floor(Math.random() * tier.length)]));
}
function pickElite() { return JSON.parse(JSON.stringify(ELITES[Math.floor(Math.random() * ELITES.length)])); }
function pickBoss() { const idx = G.currentRow <= 5 ? 0 : G.currentRow <= 10 ? 1 : 2; return JSON.parse(JSON.stringify(BOSSES[idx])); }

function cardById(id) { return CARDS_ALL.find(c => c.id === id) || CARDS_ALL[0]; }
function hasRelic(id) { return G.relics && G.relics.includes(id); }

// ===== COMBAT =====
function startCombat(enemy, isElite, isBoss) {
    const draw = 5 + (hasRelic('bag') ? 2 : 0);
    C = {
        enemy: { ...enemy, maxHp: enemy.hp, block: 0, statuses: {} },
        player: { hp: G.hp, maxHp: G.maxHp, block: hasRelic('anchor') ? 7 : 0, statuses: {} },
        draw: [...G.deck].sort(() => Math.random() - 0.5),
        hand: [], discard: [], exhaust: [],
        energy: 3, maxEnergy: 3,
        actIdx: 0, isElite, isBoss,
        powerDmg: G.powerDmgBonus, powerBlock: G.powerBlockBonus,
        doubleDmgNext: false,
        warHornBonus: G.warHornReady ? 1 : 0,
        log: [],
    };
    G.warHornReady = false;
    combatContext = { enemy, isElite, isBoss };
    document.getElementById('combat-title').textContent = isBoss ? '⚔ Boss Fight' : isElite ? '⚔ Elite Encounter' : '⚔ Combat';
    document.getElementById('enemy-sprite').textContent = enemy.icon;
    drawCards(draw);
    updateCombatUI();
    show('combat');
    addLog(`⚔ <strong>${enemy.name}</strong> appears!`);
}

function drawCards(n) {
    for (let i = 0; i < n; i++) {
        if (C.draw.length === 0) {
            C.draw = [...C.discard].sort(() => Math.random() - 0.5);
            C.discard = [];
            if (C.draw.length === 0) break;
        }
        C.hand.push(C.draw.shift());
    }
}

function updateCombatUI() {
    const p = C.player, e = C.enemy;
    document.getElementById('player-hp-fill').style.width = Math.max(0, p.hp / p.maxHp * 100) + '%';
    document.getElementById('player-hp-text').textContent = Math.max(0, p.hp) + '/' + p.maxHp;
    document.getElementById('player-block').textContent = p.block;
    document.getElementById('enemy-hp-fill').style.width = Math.max(0, e.hp / e.maxHp * 100) + '%';
    document.getElementById('enemy-hp-text').textContent = Math.max(0, e.hp) + '/' + e.maxHp;
    document.getElementById('enemy-name').textContent = e.name;
    const intentEl = document.getElementById('enemy-intent');
    intentEl.innerHTML = enemyIntentIcon() + enemyIntent();
    document.getElementById('cdeck-count').textContent = G.deck.length;
    document.getElementById('hand-count').textContent = C.hand.length;
    document.getElementById('draw-count').textContent = C.draw.length;
    document.getElementById('discard-count').textContent = C.discard.length;
    renderEnergy();
    renderHand();
    renderStatuses('player-statuses', p.statuses);
    renderStatuses('enemy-statuses', e.statuses);
    if (e.block > 0) {
        const nameEl = document.getElementById('enemy-name');
        if (!nameEl.querySelector('.block-badge')) {
            const b = document.createElement('span');
            b.className = 'block-badge';
            b.innerHTML = `🛡 ${e.block}`;
            nameEl.appendChild(b);
        } else {
            nameEl.querySelector('.block-badge').innerHTML = `🛡 ${e.block}`;
        }
    } else {
        const bb = document.getElementById('enemy-name').querySelector('.block-badge');
        if (bb) bb.remove();
    }
}

function renderEnergy() {
    const el = document.getElementById('energy-display');
    let html = '';
    for (let i = 0; i < C.maxEnergy; i++) {
        html += `<div class="energy-orb${i < C.energy ? '' : ' empty'}">${i < C.energy ? '⚡' : ''}</div>`;
    }
    html += `<span class="energy-label">${C.energy}/${C.maxEnergy}</span>`;
    el.innerHTML = html;
}

function renderHand() {
    const hand = document.getElementById('hand');
    hand.innerHTML = '';
    C.hand.forEach((id, idx) => {
        const card = cardById(id);
        const cost = getCardCost(card);
        const canPlay = C.energy >= cost;
        const div = document.createElement('div');
        div.className = `card type-${card.type}${!canPlay ? ' unaffordable' : ''}`;
        div.innerHTML = `
      <div class="card-top">
        <div class="card-type-badge">${card.type}</div>
        <div class="card-cost">${cost}</div>
      </div>
      <div class="card-icon">${card.icon}</div>
      <div class="card-name">${card.name}</div>
      <div class="card-desc">${card.desc}</div>
    `;
        if (canPlay) div.onclick = () => playCard(idx);
        hand.appendChild(div);
    });
}

function getCardCost(card) {
    let cost = card.cost;
    if (hasRelic('oddMushroom') && card.type === 'block') cost = Math.max(0, cost - 1);
    return cost;
}

function renderStatuses(elId, statuses) {
    const el = document.getElementById(elId);
    const badges = [];
    if (statuses.bleed) badges.push(`<span class="status-badge sb-bleed">🩸 Bleed ${statuses.bleed}</span>`);
    if (statuses.weak) badges.push(`<span class="status-badge sb-weak">😓 Weak ${statuses.weak}</span>`);
    if (statuses.vulnerable) badges.push(`<span class="status-badge sb-vuln">💥 Vuln ${statuses.vulnerable}</span>`);
    if (statuses.burn) badges.push(`<span class="status-badge sb-burn">🔥 Burn ${statuses.burn}</span>`);
    el.innerHTML = badges.join('');
}

function enemyIntentIcon() {
    const act = C.enemy.acts[C.actIdx % C.enemy.acts.length];
    if (act.type.startsWith('atk')) return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/></svg>';
    if (act.type === 'blk') return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
}
function enemyIntent() {
    const act = C.enemy.acts[C.actIdx % C.enemy.acts.length];
    if (act.type === 'atk') return ` Attacks for ${act.val}`;
    if (act.type === 'atk+bleed') return ` Attacks ${act.val} + Bleed`;
    if (act.type === 'atk+weak') return ` Attacks ${act.val} + Weak`;
    if (act.type === 'atk+vuln') return ` Attacks ${act.val} + Vuln`;
    if (act.type === 'blk') return ` Defends (${act.val})`;
    if (act.type === 'buff') return ` ${act.desc || 'buffs'}`;
    return ' Waits';
}

function floatText(target, text, cls) {
    const box = document.getElementById(target === 'player' ? 'player-box' : 'enemy-box');
    const el = document.createElement('div');
    el.className = 'dmg-float ' + cls;
    el.textContent = text;
    box.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}
function flashBox(target, kind) {
    const box = document.getElementById(target === 'player' ? 'player-box' : 'enemy-box');
    box.classList.remove('hurt', 'heal');
    void box.offsetWidth;
    box.classList.add(kind);
}

function playCard(idx) {
    const id = C.hand[idx];
    const card = cardById(id);
    const cost = getCardCost(card);
    if (C.energy < cost) return;
    C.energy -= cost;
    C.hand.splice(idx, 1);
    const eff = card.eff || {};
    let logMsg = `<strong>${card.icon} ${card.name}</strong>`;

    if (card.type === 'attack') {
        const hits = eff.hits || 1;
        let total = 0;
        for (let h = 0; h < hits; h++) {
            let dmg = eff.dmg + C.powerDmg;
            if (h === 0 && C.doubleDmgNext) { dmg *= 2; C.doubleDmgNext = false; }
            if (C.player.statuses.weak) dmg = Math.floor(dmg * 0.75);
            if (C.enemy.statuses.vulnerable) dmg = Math.floor(dmg * 1.5);
            total += applyDmgToEnemy(dmg);
        }
        floatText('enemy', '-' + total, 'dmg');
        flashBox('enemy', 'hurt');
        logMsg += ` → ${total} dmg.`;
        if (eff.lifeSteal) {
            const heal = Math.min(total, G.maxHp - C.player.hp);
            C.player.hp += heal;
            if (heal > 0) { floatText('player', '+' + heal, 'heal'); flashBox('player', 'heal'); logMsg += ` Healed ${heal}.`; }
        }
        if (eff.bleed) { C.enemy.statuses.bleed = (C.enemy.statuses.bleed || 0) + eff.bleed; logMsg += ` Bleed ${eff.bleed}.`; }
        if (eff.weak) { C.enemy.statuses.weak = (C.enemy.statuses.weak || 0) + eff.weak; logMsg += ` Weak ${eff.weak}.`; }
        if (eff.vuln) { C.enemy.statuses.vulnerable = (C.enemy.statuses.vulnerable || 0) + eff.vuln; logMsg += ` Vuln ${eff.vuln}.`; }
        if (eff.burn) { C.enemy.statuses.burn = (C.enemy.statuses.burn || 0) + eff.burn; logMsg += ` Burn ${eff.burn}.`; }
    }
    if (eff.block) {
        const b = eff.block + C.powerBlock;
        C.player.block += b;
        floatText('player', '+' + b + ' 🛡', 'blk');
        logMsg += ` +${b} block.`;
    }
    if (eff.draw) { drawCards(eff.draw); logMsg += ` Drew ${eff.draw}.`; }
    if (eff.energy) { C.energy += eff.energy; logMsg += ` +${eff.energy} energy.`; }
    if (eff.selfHp) { C.player.hp += eff.selfHp; floatText('player', eff.selfHp, 'dmg'); flashBox('player', 'hurt'); logMsg += ` ${eff.selfHp} HP.`; }
    if (eff.powerBlock) { C.powerBlock += eff.powerBlock; logMsg += ` Power: +${eff.powerBlock} block/turn.`; }
    if (eff.powerDmg) { C.powerDmg += eff.powerDmg; logMsg += ` Power: +${eff.powerDmg} dmg.`; }
    if (eff.doubleDmg) { C.doubleDmgNext = true; logMsg += ` Next attack ×2.`; }

    if (eff.exhaust) C.exhaust.push(id);
    else C.discard.push(id);
    addLog(logMsg);
    updateCombatUI();
    if (checkCombatEnd()) return;
}

function applyDmgToEnemy(dmg) {
    const blocked = Math.min(C.enemy.block, dmg);
    C.enemy.block -= blocked;
    const actual = dmg - blocked;
    C.enemy.hp -= actual;
    return dmg;
}

function endTurn() {
    C.discard.push(...C.hand);
    C.hand = [];
    addLog('─── Enemy turn ───');
    enemyAct();
    if (C.player.hp > 0) {
        tickStatuses();
        if (checkCombatEnd()) return;
        C.actIdx++;
        C.player.block = C.powerBlock;
        const draw = 5 + (hasRelic('sneckoEye') ? 2 : 0) + (C.warHornBonus);
        C.warHornBonus = 0;
        C.energy = C.maxEnergy;
        drawCards(draw);
        addLog('─── Your turn ───');
        updateCombatUI();
    }
}

function enemyAct() {
    const act = C.enemy.acts[C.actIdx % C.enemy.acts.length];
    const e = C.enemy, p = C.player;
    if (act.type.startsWith('atk')) {
        let dmg = act.val;
        if (e.statuses.weak) dmg = Math.floor(dmg * 0.75);
        if (p.statuses.vulnerable) dmg = Math.floor(dmg * 1.5);
        const blocked = Math.min(p.block, dmg);
        p.block -= blocked;
        const actual = dmg - blocked;
        p.hp -= actual;
        if (actual > 0) { floatText('player', '-' + actual, 'dmg'); flashBox('player', 'hurt'); }
        else floatText('player', 'blocked', 'blk');
        addLog(`<strong>${e.name}</strong> attacks for ${dmg} (${actual} through).`);
        if (act.bleed) { p.statuses.bleed = (p.statuses.bleed || 0) + act.bleed; addLog(`+${act.bleed} Bleed on you.`); }
        if (act.weak) { p.statuses.weak = (p.statuses.weak || 0) + act.weak; addLog(`+${act.weak} Weak on you.`); }
        if (act.vuln) { p.statuses.vulnerable = (p.statuses.vulnerable || 0) + act.vuln; addLog(`+${act.vuln} Vuln on you.`); }
    } else if (act.type === 'blk') {
        e.block += act.val;
        floatText('enemy', '+' + act.val + ' 🛡', 'blk');
        addLog(`<strong>${e.name}</strong> defends (+${act.val}).`);
    } else if (act.type === 'buff') {
        e.hp = Math.min(e.maxHp, e.hp + 8);
        floatText('enemy', '+8', 'heal');
        addLog(`<strong>${e.name}</strong> ${act.desc || 'heals'} for 8!`);
    }
    updateCombatUI();
}

function tickStatuses() {
    const tick = (ent, name, target) => {
        if (ent.statuses.bleed) {
            ent.hp -= ent.statuses.bleed;
            floatText(target, '-' + ent.statuses.bleed, 'dmg');
            addLog(`${name} bleeds for ${ent.statuses.bleed}.`);
            ent.statuses.bleed = Math.max(0, ent.statuses.bleed - 1);
        }
        if (ent.statuses.burn) {
            ent.hp -= ent.statuses.burn;
            floatText(target, '-' + ent.statuses.burn, 'dmg');
            addLog(`${name} burns for ${ent.statuses.burn}.`);
            ent.statuses.burn = Math.max(0, ent.statuses.burn - 1);
        }
        if (ent.statuses.weak) ent.statuses.weak = Math.max(0, ent.statuses.weak - 1);
        if (ent.statuses.vulnerable) ent.statuses.vulnerable = Math.max(0, ent.statuses.vulnerable - 1);
    };
    tick(C.enemy, C.enemy.name, 'enemy');
    tick(C.player, 'You', 'player');
}

function checkCombatEnd() {
    if (C.enemy.hp <= 0) {
        const gold = combatContext.isBoss ? 80 : combatContext.isElite ? 35 : 15 + Math.floor(Math.random() * 12);
        G.gold += gold;
        G.hp = Math.max(1, C.player.hp);
        G.powerDmgBonus = 0;
        G.powerBlockBonus = 0;
        if (hasRelic('burningblood')) G.hp = Math.min(G.maxHp, G.hp + 6);
        if (hasRelic('warhorn')) G.warHornReady = true;
        addLog(`✨ <strong>${C.enemy.name} defeated!</strong> +${gold}g`);
        if (combatContext.isElite && RELICS.length > G.relics.length) {
            const avail = RELICS.filter(r => !G.relics.includes(r.id));
            if (avail.length) { const r = avail[Math.floor(Math.random() * avail.length)]; G.relics.push(r.id); toast(`Gained relic: ${r.icon} ${r.name}`); }
        }
        markCurrentCompleted();
        if (combatContext.isBoss) { setTimeout(() => showGameOver(true), 800); return true; }
        setTimeout(() => showReward(), 700);
        return true;
    }
    if (C.player.hp <= 0) {
        addLog('💀 You have fallen...');
        setTimeout(() => showGameOver(false), 800);
        return true;
    }
    return false;
}

function addLog(msg) {
    C.log = (C.log || []);
    C.log.push(msg);
    const el = document.getElementById('combat-log');
    if (el) { el.innerHTML = C.log.slice(-20).map(m => `<div class="log-entry">${m}</div>`).join(''); el.scrollTop = el.scrollHeight; }
}

function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
}

// ===== REWARDS / REST / SHOP / EVENT =====
function showReward() {
    const pool = CARDS_ALL.filter(c => !c.upgraded && c.id !== 'strike' && c.id !== 'defend');
    const picks = [];
    while (picks.length < 3) {
        const r = pool[Math.floor(Math.random() * pool.length)];
        if (!picks.find(p => p.id === r.id)) picks.push(r);
    }
    const el = document.getElementById('reward-cards');
    el.innerHTML = '';
    picks.forEach(card => {
        const wrap = document.createElement('div');
        wrap.className = 'reward-card-wrap';
        wrap.innerHTML = `
      <div class="full-card type-${card.type}">
        <div class="card-top">
          <div class="card-type-badge">${card.type}</div>
          <div class="card-cost">${card.cost}</div>
        </div>
        <div class="card-icon" style="font-size:28px">${card.icon}</div>
        <div class="card-name">${card.name}</div>
        <div class="card-desc">${card.desc}</div>
      </div>
    `;
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.textContent = 'Add to deck';
        btn.onclick = () => { G.deck.push(card.id); toast(`Added ${card.icon} ${card.name}`); showMap(); };
        wrap.appendChild(btn);
        el.appendChild(wrap);
    });
    show('reward');
}

function skipReward() { showMap(); }

function showRest() { show('rest'); }
function restHeal() {
    G.hp = Math.min(G.maxHp, G.hp + 25);
    if (G.nextEventFlask) { G.hp = Math.min(G.maxHp, G.hp + 15); G.nextEventFlask = false; }
    markCurrentCompleted();
    showMap();
}
function restUpgrade() { upgradeFrom = 'rest'; showUpgradePicker(); }

function showUpgradePicker() {
    const el = document.getElementById('upgrade-list');
    el.innerHTML = '';
    const upgradable = G.deck.map((id, i) => ({ id, i })).filter(x => !cardById(x.id).upgraded);
    if (!upgradable.length) { toast('No cards to upgrade!'); cancelUpgrade(); return; }
    upgradable.forEach(({ id, i }) => {
        const card = cardById(id);
        const div = document.createElement('div');
        div.className = 'full-card type-' + card.type;
        div.innerHTML = `<div class="card-top"><div class="card-type-badge">${card.type}</div><div class="card-cost">${card.cost}</div></div><div class="card-icon" style="font-size:24px">${card.icon}</div><div class="card-name">${card.name}</div><div class="card-desc">${card.desc}</div>`;
        div.onclick = () => {
            const upId = card.id + '+';
            if (cardById(upId)) G.deck[i] = upId;
            toast(`Upgraded ${card.name}!`);
            if (upgradeFrom === 'rest') { markCurrentCompleted(); showMap(); }
            else if (upgradeFrom === 'shop') { show('shop'); }
            else if (upgradeFrom === 'event') { markCurrentCompleted(); showMap(); }
        };
        el.appendChild(div);
    });
    show('upgrade');
}
function cancelUpgrade() {
    if (upgradeFrom === 'rest') showRest();
    else if (upgradeFrom === 'shop') show('shop');
    else showMap();
}

function showShop() {
    const allShop = CARDS_ALL.filter(c => !c.upgraded);
    shopCards = [];
    while (shopCards.length < 4) {
        const r = allShop[Math.floor(Math.random() * allShop.length)];
        if (!shopCards.find(s => s.id === r.id)) shopCards.push({ ...r, price: 40 + Math.floor(Math.random() * 40), sold: false });
    }
    renderShop();
    show('shop');
}
function renderShop() {
    document.getElementById('shop-gold').textContent = G.gold;
    const el = document.getElementById('shop-items');
    el.innerHTML = '<div class="shop-grid">' + shopCards.map((c, i) => {
        if (c.sold) return `<div class="shop-item"><div class="full-card" style="opacity:0.3;display:flex;align-items:center;justify-content:center;color:var(--text-faint);font-size:14px">Sold</div></div>`;
        return `<div class="shop-item">
      <div class="full-card type-${c.type}">
        <div class="card-top"><div class="card-type-badge">${c.type}</div><div class="card-cost">${c.cost}</div></div>
        <div class="card-icon" style="font-size:24px">${c.icon}</div>
        <div class="card-name">${c.name}</div>
        <div class="card-desc">${c.desc}</div>
      </div>
      <button class="btn${G.gold >= c.price ? ' btn-gold' : ''}" onclick="buyCard(${i})" ${G.gold < c.price ? 'disabled' : ''}>Buy ${c.price}g</button>
    </div>`;
    }).join('') + '</div>';
}
function buyCard(i) {
    const c = shopCards[i];
    if (G.gold < c.price) return;
    G.gold -= c.price;
    G.deck.push(c.id);
    c.sold = true;
    toast(`Purchased ${c.icon} ${c.name}`);
    renderShop();
}
function shopRemove() {
    if (G.gold < 50) { toast('Not enough gold!'); return; }
    upgradeFrom = 'shopRemove';
    showRemovePicker();
}
function showRemovePicker() {
    const el = document.getElementById('remove-list');
    el.innerHTML = '';
    G.deck.forEach((id, i) => {
        const card = cardById(id);
        const div = document.createElement('div');
        div.className = 'full-card type-' + card.type;
        div.innerHTML = `<div class="card-top"><div class="card-type-badge">${card.type}</div><div class="card-cost">${card.cost}</div></div><div class="card-icon" style="font-size:24px">${card.icon}</div><div class="card-name">${card.name}</div><div class="card-desc">${card.desc}</div>`;
        div.onclick = () => { G.gold -= 50; G.deck.splice(i, 1); toast(`Removed ${card.name}`); show('shop'); renderShop(); };
        el.appendChild(div);
    });
    show('remove');
}
function cancelRemove() { show('shop'); }
function leaveShop() { markCurrentCompleted(); showMap(); }

function showEvent() {
    const ev = EVENTS[Math.floor(Math.random() * EVENTS.length)];
    document.getElementById('event-title').textContent = ev.title;
    document.getElementById('event-text').textContent = ev.text;
    const choicesEl = document.getElementById('event-choices');
    choicesEl.innerHTML = '';
    ev.choices.forEach(ch => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = ch.label;
        btn.onclick = () => resolveEvent(ch.action);
        choicesEl.appendChild(btn);
    });
    show('event');
}
function resolveEvent(action) {
    if (action === 'event_skip') { markCurrentCompleted(); showMap(); return; }
    if (action === 'event_altar_relic') {
        G.hp = Math.max(1, G.hp - 10);
        const avail = RELICS.filter(r => !G.relics.includes(r.id));
        if (avail.length) { const r = avail[Math.floor(Math.random() * avail.length)]; G.relics.push(r.id); toast(`Gained: ${r.icon} ${r.name}`); }
    }
    if (action === 'event_add_card') {
        const pool = CARDS_ALL.filter(c => !c.upgraded && c.id !== 'strike' && c.id !== 'defend');
        const r = pool[Math.floor(Math.random() * pool.length)];
        G.deck.push(r.id); toast(`Added ${r.icon} ${r.name}`);
    }
    if (action === 'event_gold') { G.gold += 30; toast('+30 gold'); }
    if (action === 'event_treasure') { G.gold += 50; G.hp = Math.min(G.maxHp, G.hp + 15); toast('+50g, +15 HP'); }
    if (action === 'event_upgrade') { G.hp = Math.max(1, G.hp - 15); upgradeFrom = 'event'; showUpgradePicker(); return; }
    if (action === 'event_heal') { G.hp = Math.min(G.maxHp, G.hp + 30); toast('+30 HP'); }
    if (action === 'event_flask') { G.hp = Math.min(G.maxHp, G.hp + 15); G.nextEventFlask = true; toast('+15 HP now, +15 at next rest'); }
    markCurrentCompleted(); showMap();
}

function showDeck() {
    prevScreen = document.querySelector('.screen.active').id.replace('screen-', '');
    document.getElementById('full-deck-count').textContent = G.deck.length;
    const el = document.getElementById('full-deck-list');
    el.innerHTML = '';
    const sorted = [...G.deck].sort();
    sorted.forEach(id => {
        const card = cardById(id);
        const div = document.createElement('div');
        div.className = 'full-card type-' + card.type;
        div.innerHTML = `<div class="card-top"><div class="card-type-badge">${card.type}</div><div class="card-cost">${card.cost}</div></div><div class="card-icon" style="font-size:24px">${card.icon}</div><div class="card-name">${card.name}</div><div class="card-desc">${card.desc}</div>`;
        el.appendChild(div);
    });
    show('deck');
}
function closeDeck() { show(prevScreen); }

function showGameOver(won) {
    const screen = document.getElementById('screen-gameover');
    screen.classList.toggle('go-victory', won);
    screen.classList.toggle('go-defeat', !won);
    document.getElementById('go-title').textContent = won ? '✨ Victory! ✨' : '💀 Defeat';
    document.getElementById('go-sub').textContent = won ? `You conquered the dungeon with ${G.gold}g in your purse!` : `You fell on row ${G.currentRow + 1}. The dungeon claims another.`;
    show('gameover');
}

function toggleHowTo() {
    const el = document.getElementById('howtoplay');
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function show(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + name).classList.add('active');
}
