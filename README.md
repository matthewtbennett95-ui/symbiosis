# Symbiosis Lab: The Evolution of Cooperation

A classroom game built on Robert Axelrod's Iterated Prisoner's Dilemma tournaments. Students design
strategies (with a no-code Rule Builder or JavaScript), then test them against the famous strategies,
against each other, and against evolution. Along the way they connect the results to real biology
(vampire bats, cleaner fish, legumes) and to human society (trench truces, Ostrom's commons).

Everything is in a single file, `index.html`. It has no build step and no dependencies.

## The Expedition (start here)

The front page is a guided, two-day path for high schoolers. Each chapter has a short biology story,
one task, a discovery, and a journal question. Students print their answers as one **Expedition Journal**.

| Day | Chapter | What students do |
| --- | --- | --- |
| 1 | 🦇 The Roost | Play as a vampire bat: share blood or keep it, against a hidden Tit for Tat roostmate |
| 1 | 🌱 The Nodules | Play as a soybean: feed or cut off three root-nodule bacteria, then identify each strain |
| 1 | 🧬 Design an Organism | Set four "genes" so the organism passes two survival tests, then lock it in |
| 2 | 🏆 The Tournament | Predict, then run Axelrod's tournament against 15 famous strategies |
| 2 | 🐣 Generations | Predict, then watch 300 generations of evolution |
| 2 | 🧫 The Biofilm | A tiny colony vs. freeloaders: strangers (dies out) vs. lifelong neighbors (takes over) |
| 2 | 🏛️ From Cells to Societies | Trench truces, Ostrom, cartels; send the organism to the Class Championship |

The Teacher tab has a suggested lesson plan.

## Standards

The Teacher tab maps the activities to the Georgia CTAE **Engineering Applications (TEH7)** and **Engineering Concepts (TEH8)** AKS (April 2026 revision), marking each link as strong or partial and listing what isn't covered. It also notes NGSS HS-LS2-8 and HS-LS4-4.

## Open Lab (free play and extension)

| Tab | What students do |
| --- | --- |
| 🧬 Strategy Lab | Build strategies with the Rule Builder or code, quick-test them, save several, share them as "cards" |
| ⚔️ Head-to-Head | Animated 1v1 duel, behavior timeline, data log, auto-written field notes, printable report |
| 🏆 Global Tournament | Axelrod-style round robin: noise, unknown match length, personality traits (nice / retaliatory / forgiving), clickable payoff matrix, and the ecological "future generations" simulation |
| 🧫 Survival Crucible | Spatial petri dish: strategies spread cell by cell. Territories, well-mixed, and invasion layouts; a "shadow of the future" slider |
| 🎯 Missions | 13 guided experiments that unlock "discoveries" |
| 📚 Field Guide | History, the math, biology case files, bio-politics, discussion questions, glossary |
| 🛠️ Class Arena | Teacher roster: paste share cards, validate, import/export JSON, run class tournaments |

Payoffs can be changed from **⚙️ Environment Payoffs** (including a Snowdrift preset).

## Running it

- **Locally:** open `index.html` in a browser.
- **Firebase Hosting:** `firebase init hosting` (keep the existing `firebase.json`), then `firebase deploy`.
- **Google Apps Script:** see `apps-script/Code.gs` for the steps.

## Notes

- Student code runs inside a Web Worker. An infinite loop gets stopped and reported instead of freezing the page.
- Progress, strategies, and the class roster are saved in the browser's `localStorage` (per device).
  Nothing is sent to a server yet.
- Older roster JSON files (`[{ name, emoji, code }]`) still import.
- The original version is kept at `archive/currentState.html`.
