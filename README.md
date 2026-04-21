# Cardstone Dungeon

A browser-based roguelite deckbuilder inspired by Slay the Spire. Build a deck, traverse a branching dungeon map, and fight your way to the boss.

## How to Play

Open `index.html` in any modern browser — no server or build step needed.

## Core Loop

1. **Choose a path** on the branching map
2. **Fight enemies** by playing cards from your hand
3. **Collect rewards** — new cards, gold, and relics
4. **Reach the boss** at the end of the map and defeat it to win

## Combat

Each turn you start with **3 energy**. Spend it to play cards from your hand of 5. When you end your turn the enemy acts, then statuses tick down, and a new turn begins.

- **Attack** cards deal damage to the enemy
- **Block** cards give you shield that absorbs incoming hits (resets each turn)
- **Skill** cards provide utility effects like drawing cards or gaining energy
- **Power** cards grant permanent bonuses for the rest of combat

## Keywords

| Keyword | Effect |
|---|---|
| **Bleed** | Lose HP equal to stacks at end of turn, then stacks decrease by 1 |
| **Burn** | Same as Bleed but fire-flavored |
| **Weak** | Deal 25% less damage |
| **Vulnerable** | Take 50% more damage |

## The Map

The dungeon has **15 rows** with 2–4 nodes per row connected by branching paths. Each run generates a new map. Once you choose a node in a row, the others are locked — your path is committed.

Node types:

| Icon | Type | Description |
|---|---|---|
| ⚔ | Fight | Standard enemy encounter |
| 💀 | Elite | Tougher enemy, always drops a relic |
| 👑 | Boss | Final encounter — win or die |
| 🛒 | Shop | Buy cards or pay 50g to remove one |
| 🔥 | Rest | Heal 25 HP or upgrade a card |
| ❓ | Event | Random encounter with choices and consequences |

## Relics

Relics are passive items that persist for the entire run. You start with none and can earn them by defeating elites or through events.

| Relic | Effect |
|---|---|
| 🩸 Burning Blood | Heal 6 HP after every combat |
| 👁 Keen Eye | Draw 2 extra cards per turn |
| 🍄 Tower Shield | Block cards cost 1 less energy |
| 🎒 Bag of Prep | Start combat with 2 extra cards in hand |
| ⚓ Bronze Anchor | Start combat with 7 block already applied |
| 📯 War Horn | Gain 1 bonus energy on your next combat turn |

## Files

- `index.html` — game structure and screens
- `styles.css` — all styles
- `script.js` — all game logic
