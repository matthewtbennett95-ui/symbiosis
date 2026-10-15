# Symbiosis Lab: The Evolution of Cooperation

A classroom game built on Robert Axelrod's Iterated Prisoner's Dilemma tournaments. Students design
strategies (with a no-code Rule Builder or JavaScript), then test them against the famous strategies,
against each other, and against evolution. Along the way they connect the results to real biology
(vampire bats, cleaner fish, legumes) and to human society (trench truces, Ostrom's commons).

Everything is in a single file, `index.html`. It has no build step and no dependencies.

## Modes

| Tab | What students do |
| --- | --- |
| 🧬 Strategy Lab | Build strategies with the Rule Builder or code, quick-test them, save several, share them as "cards" |
| ⚔️ Target Simulation | Animated 1v1 duel, behavior timeline, data log, auto-written field notes, printable report |
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
