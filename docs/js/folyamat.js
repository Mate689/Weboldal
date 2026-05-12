const quizArray = [
    // 📘 Folyamatmenedzsment
  {
    q: "Mi az üzleti folyamat egyik alapvető jellemzője?",
    o: [
      "Véletlenszerű tevékenységek összessége",
      "Bemenetek kimenetekké alakítása értéknöveléssel",
      "Csak belső vevőket szolgál ki",
      "Kizárólag automatizált módon működik"
    ],
    a: 1
  },
  {
    q: "Ki a folyamat gazdája?",
    o: [
      "A teljes szervezet",
      "Egy külső tanácsadó",
      "A folyamatért felelős, felhatalmazott személy",
      "A vevő"
    ],
    a: 2
  },
  {
    q: "Melyik NEM része az üzleti folyamat modelljének?",
    o: [
      "Bemenet",
      "Kimenet",
      "Folyamatgazda",
      "Hierarchikus szervezeti szint"
    ],
    a: 3
  },
  {
    q: "Melyik a BPM (Business Process Management) életciklus helyes sorrendje?",
    o: [
      "Végrehajtás – Tervezés – Monitoring – Optimalizálás – Modellezés",
      "Tervezés – Modellezés – Végrehajtás – Monitoring – Optimalizálás",
      "Modellezés – Tervezés – Monitoring – Végrehajtás – Optimalizálás",
      "Tervezés – Végrehajtás – Modellezés – Optimalizálás – Monitoring"
    ],
    a: 1
  },
  {
    q: "Mit mér az eredményesség (output) mérése?",
    o: [
      "A vevő elégedettségét",
      "A folyamat erőforrás-felhasználását",
      "A létrejött termék vagy szolgáltatás megfelelőségét",
      "A dolgozók teljesítményét"
    ],
    a: 2
  },
  {
    q: "Mit jelent a PDCA ciklus „C” (Check) lépése?",
    o: [
      "A terv végrehajtása",
      "A folyamat dokumentálása",
      "Az eredmények ellenőrzése és elemzése",
      "A javított folyamat bevezetése"
    ],
    a: 2
  },
  {
    q: "Mi a javítás (repair) célja?",
    o: [
      "A nem megfelelőség okának megszüntetése",
      "A nem megfelelő termék elfogadhatóvá tétele",
      "A lehetséges hiba megelőzése",
      "A folyamat újratervezése"
    ],
    a: 1
  },
  {
    q: "Melyik állítás igaz a Pareto-elvre?",
    o: [
      "A hibák 100%-a az okok 100%-ából fakad",
      "A hibák 20%-a okozza az eredmények 80%-át",
      "Az okok 20%-a felelős a hibák 80%-áért",
      "Az összes hibát azonnal kezelni kell"
    ],
    a: 2
  },
  {
    q: "Melyik NEM tartozik az Ishikawa-diagram tipikus okcsoportjai közé?",
    o: [
      "Ember",
      "Anyag",
      "Módszer",
      "Profit"
    ],
    a: 3
  },
  {
    q: "Mi a TQM (Total Quality Management) elsődleges célja?",
    o: [
      "Szabványok betartása",
      "Költségek csökkentése",
      "Folyamatos vevői elégedettség elérése",
      "A folyamatok dokumentálása"
    ],
    a: 2
  },

  // ── Hiányzó szó kérdések ──
  {
    type: "fill",
    q: "A folyamatgazda az a ___ személy, aki felelős az üzleti folyamat működéséért.",
    o: ["önkéntes", "külső", "névtelen", "felhatalmazott"],
    a: 3,
    explanation: "A folyamatgazda egy konkrét, felhatalmazott személy — nem a teljes szervezet —, aki felelős a folyamat méréséért, fejlesztéséért és a célok eléréséért."
  },
  {
    type: "fill",
    q: "A PDCA ciklus négy lépése: Plan, Do, ___, Act.",
    o: ["Create", "Change", "Control", "Check"],
    a: 3,
    explanation: "A PDCA (Deming-kör): Tervezés (Plan) → Végrehajtás (Do) → Ellenőrzés (Check) → Beavatkozás (Act). Folyamatos fejlesztési eszköz, amelyet újra és újra kell futtatni."
  },
  {
    type: "fill",
    q: "A Pareto-elv szerint az okok ___%-a felelős a hibák 80%-áért.",
    o: ["50", "30", "10", "20"],
    a: 3,
    explanation: "A 80/20 szabály: az eredmények 80%-át az okok mindössze 20%-a generálja. Ez segít a legfontosabb problémákra összpontosítani, ahelyett hogy minden hibát egyenlő súllyal kezelnénk."
  },
  {
    type: "fill",
    q: "Az Ishikawa-diagramot ___ diagramnak is hívják jellegzetes alakja miatt.",
    o: ["Pareto", "PDCA", "halszálka", "folyamat"],
    a: 2,
    explanation: "Az Ishikawa (halszálka / cause-and-effect) diagram vizuálisan ábrázolja egy probléma lehetséges okait kategóriánként: ember, anyag, módszer, gép, mérés, környezet."
  },
  {
    type: "fill",
    q: "A TQM (Total Quality Management) elsődleges célja a folyamatos ___ elégedettség elérése.",
    o: ["dolgozói", "részvényesi", "menedzsment", "vevői"],
    a: 3,
    explanation: "A TQM alapköve a vevőközpontúság: minden döntésnek és fejlesztésnek a vevői elégedettség növelését kell céloznia, mivel a vevő ítéli meg végső soron a minőséget."
  },
  {
    type: "fill",
    q: "A BPM életciklus helyes sorrendje: Tervezés – ___ – Végrehajtás – Monitoring – Optimalizálás.",
    o: ["Ellenőrzés", "Implementálás", "Dokumentálás", "Modellezés"],
    a: 3,
    explanation: "A BPM életciklusa: Tervezés → Modellezés → Végrehajtás → Monitoring → Optimalizálás → (vissza a tervezéshez). A modellezés a folyamat szimulálása és tesztelése végrehajtás előtt."
  },
  {
    type: "fill",
    q: "A PDCA ___ lépése a javított megoldás standardizálásáról és teljes bevezetéséről szól.",
    o: ["Plan", "Do", "Check", "Act"],
    a: 3,
    explanation: "Az Act (Beavatkozás) lépésben a Check tapasztalatai alapján standardizálják és teljes körűen bevezetik a fejlesztett megoldást, majd a ciklus újraindul."
  }
]