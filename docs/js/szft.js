const quizArray = [
  // 📘 Szoftverbecslés
  {
    q: "Mi a szoftverbecslés fő célja?",
    o: [
      "A forráskód minőségének növelése",
      "Idő-, költség- és erőforrásigény előrejelzése",
      "Hibák automatikus javítása",
      "Felhasználói élmény javítása"
    ],
    a: 1
  },
  {
    q: "Melyik méretezési módszer nyelvfüggetlen és üzleti szemléletű?",
    o: ["LOC", "OP", "FP", "COCOMO"],
    a: 2
  },
  {
    q: "Mely becslési módszer matematikai modell LOC alapján?",
    o: ["Delphi", "FP", "UCP", "COCOMO"],
    a: 3
  },

  // 🔄 Fejlesztési modellek
  {
    q: "Melyik modellre jellemző a lineáris, egymást követő fázisok?",
    o: ["Scrum", "Spiral", "Waterfall", "Kanban"],
    a: 2
  },
  {
    q: "Melyik iteratív modell tartalmaz kockázatelemzést?",
    o: ["Iterative & Incremental", "Spiral", "Scrum", "V-modell"],
    a: 1
  },
  {
    q: "Mi az inkrementum?",
    o: [
      "Egy új sprint kezdete",
      "Az iterációban elkészült új funkció",
      "A teljes rendszer dokumentációja",
      "Hibajavítási fázis"
    ],
    a: 1
  },

  // ✅ Verifikáció és validáció
  {
    q: "Mire ad választ a verifikáció?",
    o: [
      "A felhasználó elégedett-e",
      "A megfelelő rendszert építettük-e",
      "Jól építettük-e meg a rendszert",
      "Mennyi idő alatt készült el"
    ],
    a: 2
  },
  {
    q: "Mit vizsgál a validáció?",
    o: [
      "Kódformázást",
      "Teljesítményt",
      "Specifikáció betartását",
      "Felhasználói igényeknek való megfelelést"
    ],
    a: 3
  },

  // 🚀 Scrum
  {
    q: "Ki felel a backlog prioritásaiért Scrum esetén?",
    o: ["Scrum Master", "Product Owner", "Development Team", "Project Manager"],
    a: 1
  },
  {
    q: "Mi a Sprint végén elkészülő eredmény?",
    o: ["Product Backlog", "Sprint Backlog", "Increment", "Release Plan"],
    a: 2
  },
  {
    q: "Melyik Scrum esemény NEM létezik?",
    o: [
      "Daily Scrum",
      "Sprint Review",
      "Sprint Retrospective",
      "Release Meeting"
    ],
    a: 3
  },

  // 🧩 Kanban
  {
    q: "Mi jellemző a Kanban módszertanra?",
    o: [
      "Fix hosszúságú sprintek",
      "Nincs iteráció",
      "Folyamatos munkafolyamat",
      "Csak kis projektekre alkalmas"
    ],
    a: 2
  },
  {
    q: "Mit jelent a WIP limit?",
    o: [
      "Maximális csapattaglétszám",
      "Egyszerre folyamatban lévő feladatok korlátozása",
      "Heti munkaidő",
      "Verziószám"
    ],
    a: 1
  },

  // 🗂️ Verziókezelés
  {
    q: "Mi a commit?",
    o: ["Hibajegy", "Repository létrehozása", "Változtatás rögzítése", "Ág törlése"],
    a: 2
  },
  {
    q: "Melyik verziókezelő elosztott?",
    o: ["SVN", "CVS", "Git", "FTP"],
    a: 2
  },

  // 📐 UML
  {
    q: "Mire szolgál az UML?",
    o: [
      "Programkód generálására",
      "Adatbázis-kezelésre",
      "Rendszerek vizuális modellezésére",
      "Hibakeresésre"
    ],
    a: 2
  },
  {
    q: "Melyik diagram mutatja a szoftver fizikai telepítését?",
    o: [
      "Class diagram",
      "Sequence diagram",
      "Deployment diagram",
      "Use case diagram"
    ],
    a: 2
  },
  {
    q: "Mit ábrázol a state machine diagram?",
    o: [
      "Objektumok közötti adatátvitelt",
      "Osztályok kapcsolatát",
      "Objektum állapotait és átmeneteit",
      "UI elemeket"
    ],
    a: 2
  },

  // 🎨 UI / UX
  {
    q: "Mi tartozik a UI fogalmához?",
    o: [
      "Felhasználói élmény",
      "Használhatóság",
      "Gombok és űrlapok",
      "Feladatfolyamatok"
    ],
    a: 2
  },
  {
    q: "Melyik NEM jó UI/UX jellemző?",
    o: [
      "Következetesség",
      "Reszponzivitás",
      "Gyors visszajelzés",
      "Bonyolult kezelőfelület"
    ],
    a: 3
  },

  // ── Hiányzó szó kérdések ──
  {
    type: "fill",
    q: "A szoftverbecslés fő célja az idő-, ___ és erőforrásigény előrejelzése.",
    o: ["pontosság", "dokumentáció", "költség-", "minőség"],
    a: 2,
    explanation: "A szoftverbecslés segít előre meghatározni, mennyi időre, pénzre és erőforrásra lesz szükség a projekthez — ezek nélkül sem terv, sem költségvetés nem készíthető."
  },
  {
    type: "fill",
    q: "A ___ módszer matematikai modell, amely LOC alapján végez szoftverbecslést.",
    o: ["Delphi", "FP", "UCP", "COCOMO"],
    a: 3,
    explanation: "A COCOMO (Constructive Cost Model) formulán alapuló becslési modell: a forráskód sorok számából (LOC) indul ki, és matematikailag számolja az erőforrásigényt."
  },
  {
    type: "fill",
    q: "A verifikáció arra keresi a választ: ___ építettük-e meg a rendszert.",
    o: ["Gyorsan", "Olcsón", "A megfelelőt", "Jól"],
    a: 3,
    explanation: "Verifikáció = 'Are we building the product right?' – a specifikáció betartását ellenőrzi. A validáció ezzel szemben azt kérdezi: a megfelelő rendszert csináljuk-e?"
  },
  {
    type: "fill",
    q: "A ___ diagram ábrázolja, hogyan települ a szoftver fizikai hardverre.",
    o: ["Class", "Sequence", "Use case", "Deployment"],
    a: 3,
    explanation: "Az UML Deployment diagram azt mutatja, hogy a szoftver komponensei milyen hardveres csomópontokon (szervereken, eszközökön) futnak."
  },
  {
    type: "fill",
    q: "A state machine diagram az objektum ___ és azok közötti átmeneteket ábrázolja.",
    o: ["metódusait", "kapcsolatait", "adatfolyamait", "állapotait"],
    a: 3,
    explanation: "Az állapotgép diagram egy objektum életciklusát mutatja: milyen állapotokban lehet, és mi váltja ki az átmeneteket egyik állapotból a másikba."
  },
  {
    type: "fill",
    q: "A Git egy ___ verziókezelő rendszer, ellentétben az SVN-nel.",
    o: ["centralizált", "lineáris", "monolitikus", "elosztott"],
    a: 3,
    explanation: "A Git elosztott (distributed) VCS: minden fejlesztőnél teljes repository-másolat van. Az SVN ezzel szemben centralizált, ahol csak egy szerveren él a teljes history."
  },
  {
    type: "fill",
    q: "A Kanban rendszerben a ___ limit korlátozza az egyidejűleg folyamatban lévő feladatokat.",
    o: ["sprint", "release", "backlog", "WIP"],
    a: 3,
    explanation: "A WIP (Work In Progress) limit meghatározza, hány feladat lehet egyszerre folyamatban. Ez csökkenti a várakozási időt és javítja az áteresztőképességet."
  },
  {
    type: "fill",
    q: "Az UML a szoftverrendszerek ___ modellezésére szolgáló szabványos jelölési rendszer.",
    o: ["matematikai", "szöveges", "fizikai", "vizuális"],
    a: 3,
    explanation: "Az UML (Unified Modeling Language) vizuális modellező nyelv, amellyel a rendszer statikus szerkezetét, dinamikus viselkedését és telepítési topológiáját lehet diagramokon ábrázolni."
  }
];