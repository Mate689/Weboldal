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
  }
];