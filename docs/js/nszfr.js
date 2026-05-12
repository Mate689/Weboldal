const quizArray = [
  {
    q: "Mi jellemzi a Waterfall modellt?",
    o: [
      "Iteratív fejlesztés",
      "Lineáris és szekvenciális fejlesztés",
      "Kockázatvezérelt működés",
      "Folyamatos release"
    ],
    a: 1
  },
  {
    q: "Mi a Waterfall modell első fázisa?",
    o: [
      "Tesztelés",
      "Implementáció",
      "Követelmények meghatározása",
      "Üzemeltetés"
    ],
    a: 2
  },
  {
    q: "Melyik a Waterfall modell egyik előnye?",
    o: [
      "Rugalmas változáskezelés",
      "Egyszerű és átlátható",
      "Folyamatos visszacsatolás",
      "Gyors release"
    ],
    a: 1
  },
  {
    q: "Mi a Waterfall modell egyik hátránya?",
    o: [
      "Nincs dokumentáció",
      "Nehezen tesztelhető",
      "Rugalmatlan",
      "Nem használható nagy rendszereknél"
    ],
    a: 2
  },
  {
    q: "Mit jelent a V-modell?",
    o: [
      "Tesztelés nélküli fejlesztés",
      "A Waterfall továbbfejlesztése tesztfókuszú megközelítéssel",
      "Kizárólag agilis módszertan",
      "Csak UI fejlesztésre használják"
    ],
    a: 1
  },
  {
    q: "Melyik teszt kapcsolódik a követelményekhez a V-modellben?",
    o: [
      "Unit teszt",
      "Integration teszt",
      "Acceptance teszt",
      "Performance teszt"
    ],
    a: 2
  },
  {
    q: "Melyik a V-modell egyik előnye?",
    o: [
      "Kevés dokumentáció",
      "Korai hibafelismerés",
      "Folyamatos deployment",
      "Egyszerűbb integráció"
    ],
    a: 1
  },
  {
    q: "Mi az iteratív modell lényege?",
    o: [
      "Egyszeri fejlesztési ciklus",
      "A fejlesztés több ciklusban történik",
      "Nincs tesztelés",
      "Csak dokumentáció készül"
    ],
    a: 1
  },
  {
    q: "Melyik az iteratív modell egyik előnye?",
    o: [
      "Korai visszajelzés",
      "Nincs szükség tesztelésre",
      "Olcsóbb infrastruktúra",
      "Nincs architektúra"
    ],
    a: 0
  },
  {
    q: "Mi az incrementális modell lényege?",
    o: [
      "A termék egyszerre készül el",
      "A termék részenként készül el",
      "Nincs integráció",
      "Csak prototípus készül"
    ],
    a: 1
  },
  {
    q: "Mi az incrementális modell egyik előnye?",
    o: [
      "Magas kockázat",
      "Gyorsan használható részek",
      "Nincs szükség tervezésre",
      "Kizárólag kis projektekhez használható"
    ],
    a: 1
  },
  {
    q: "Mi az incrementális modell egyik hátránya?",
    o: [
      "Integrációs problémák",
      "Nincs tesztelés",
      "Nem lehet release-t készíteni",
      "Lassú fejlesztés"
    ],
    a: 0
  },
  {
    q: "Mi jellemzi a Spiral modellt?",
    o: [
      "Lineáris fejlesztés",
      "Kockázatvezérelt iteratív modell",
      "Dokumentáció nélküli fejlesztés",
      "Csak tesztelésből áll"
    ],
    a: 1
  },
  {
    q: "Melyik fázis része a Spiral modellnek?",
    o: [
      "Kockázatelemzés",
      "Deployment tiltás",
      "Hardvertervezés",
      "Manuális monitorozás"
    ],
    a: 0
  },
  {
    q: "Mi a Spiral modell egyik hátránya?",
    o: [
      "Olcsó működés",
      "Egyszerű használat",
      "Bonyolult és drága",
      "Nincs tesztelés"
    ],
    a: 2
  },
  {
    q: "Mi jellemző az Agile módszertanokra?",
    o: [
      "Ritka release-ek",
      "Iteratív fejlesztés",
      "Nincs ügyfél bevonás",
      "Lineáris működés"
    ],
    a: 1
  },
  {
    q: "Ki NEM Scrum szerepkör?",
    o: [
      "Product Owner",
      "Scrum Master",
      "Team",
      "System Administrator"
    ],
    a: 3
  },
  {
    q: "Mi a sprint a Scrum-ban?",
    o: [
      "Tesztelési dokumentum",
      "Fix idejű fejlesztési ciklus",
      "Deploy folyamat",
      "Hibajegy"
    ],
    a: 1
  },
  {
    q: "Mi a Kanban egyik fő eszköze?",
    o: [
      "ER diagram",
      "Kanban tábla",
      "Class diagram",
      "Docker container"
    ],
    a: 1
  },
  {
    q: "Mi a Kanban egyik előnye?",
    o: [
      "Egyszerű workflow kezelés",
      "Nincs szükség csapatra",
      "Kizárólag waterfall projektekhez jó",
      "Nincs monitorozás"
    ],
    a: 0
  },
  {
    q: "Mi az XP egyik fő gyakorlata?",
    o: [
      "Manual deployment",
      "Pair programming",
      "Hardware virtualization",
      "No testing"
    ],
    a: 1
  },
  {
    q: "Mi történik Pair Programming során?",
    o: [
      "Két ember külön projekten dolgozik",
      "Két fejlesztő együtt dolgozik egy gépen",
      "Csak tesztelés történik",
      "Automatikus deploy fut"
    ],
    a: 1
  },
  {
    q: "Mit jelent a TDD?",
    o: [
      "Technical Design Deployment",
      "Test Driven Development",
      "Tool Driven Debugging",
      "Test Documentation Design"
    ],
    a: 1
  },
  {
    q: "Mi a TDD első lépése?",
    o: [
      "Refactoring",
      "Deployment",
      "Teszt megírása",
      "Monitorozás"
    ],
    a: 2
  },
  {
    q: "Mit jelent a CI rövidítés?",
    o: [
      "Continuous Integration",
      "Code Inspection",
      "Central Infrastructure",
      "Continuous Installation"
    ],
    a: 0
  },
  {
    q: "Mi a refactoring célja?",
    o: [
      "Kód szépítése működés változtatása nélkül",
      "Tesztelés kikapcsolása",
      "Új hardver telepítése",
      "Deploy automatizálása"
    ],
    a: 0
  },
  {
    q: "Mi a DevOps célja?",
    o: [
      "Fejlesztés és üzemeltetés integrálása",
      "Dokumentáció megszüntetése",
      "Kézi tesztelés növelése",
      "Hardver fejlesztés"
    ],
    a: 0
  },
  {
    q: "Melyik NEM része a DevOps pipeline-nak?",
    o: [
      "Build",
      "Deploy",
      "Monitor",
      "Hardware assembly"
    ],
    a: 3
  },
  {
    q: "Mi a DevOps egyik előnye?",
    o: [
      "Gyorsabb release",
      "Kevesebb automatizáció",
      "Nincs monitorozás",
      "Nagyobb manuális munka"
    ],
    a: 0
  },
  {
    q: "Mi a Lean Software Development egyik alapelve?",
    o: [
      "Waste elimináció",
      "Minél több dokumentáció",
      "Késői release",
      "Tesztelés mellőzése"
    ],
    a: 0
  },
  {
    q: "Mi a RAD modell lényege?",
    o: [
      "Gyors prototípus alapú fejlesztés",
      "Lineáris fejlesztés",
      "Csak tesztelés",
      "Kizárólag dokumentáció"
    ],
    a: 0
  },
  {
    q: "Mit jelent a process-based quality?",
    o: [
      "A minőséget a folyamat garantálja",
      "Csak a végtermék számít",
      "Nincs audit",
      "Nincs szabvány"
    ],
    a: 0
  },
  {
    q: "Melyik tartozik a process-based quality elemei közé?",
    o: [
      "ISO szabványok",
      "GPU optimalizáció",
      "UI animáció",
      "Cloud hosting"
    ],
    a: 0
  },
  {
    q: "Mi a product-based quality egyik mérőszáma?",
    o: [
      "Felhasználói élmény",
      "CPU órajel",
      "RAM méret",
      "Monitor típusa"
    ],
    a: 0
  },
  {
    q: "Mi a product-based quality egyik előnye?",
    o: [
      "Valós minőségmérés",
      "Nincs tesztelés",
      "Nincs validáció",
      "Kisebb rugalmasság"
    ],
    a: 0
  },
  {
    q: "Mit jelent az SDL?",
    o: [
      "Security Development Lifecycle",
      "Software Deployment Layer",
      "Secure Data Logic",
      "System Design Lifecycle"
    ],
    a: 0
  },
  {
    q: "Mi történik az SDL tervezési fázisában?",
    o: [
      "Threat modeling",
      "Monitorozás",
      "Deploy",
      "Felhasználói tréning"
    ],
    a: 0
  },
  {
    q: "Mi az SDL implementációs fázisának része?",
    o: [
      "Secure coding",
      "Marketing",
      "Sales",
      "Licenszelés"
    ],
    a: 0
  },
  {
    q: "Mi a penetration testing célja?",
    o: [
      "Biztonsági hibák keresése",
      "UI fejlesztés",
      "Adatbázis törlés",
      "Felhasználói oktatás"
    ],
    a: 0
  },
  {
    q: "Mit jelent a least privilege elv?",
    o: [
      "Mindenki admin jogosultságot kap",
      "Csak a szükséges jogosultságokat adjuk meg",
      "Nincs jogosultságkezelés",
      "Teljes hozzáférés biztosítása"
    ],
    a: 1
  },
  {
    q: "Mi a DevSecOps egyik célja?",
    o: [
      "Biztonság integrálása a fejlesztésbe",
      "Tesztelés megszüntetése",
      "Deployment tiltása",
      "Dokumentáció csökkentése"
    ],
    a: 0
  },
  {
    q: "Mit jelent a SAST?",
    o: [
      "Static Application Security Testing",
      "Secure Access System Tool",
      "Software Architecture Security Test",
      "System Analysis Security Tool"
    ],
    a: 0
  },
  {
    q: "Mit jelent a DAST?",
    o: [
      "Dynamic Application Security Testing",
      "Data Access Security Tool",
      "Deployment Analysis Security Testing",
      "Distributed Application Service Tool"
    ],
    a: 0
  },
  {
    q: "Mi a DevSecOps egyik hátránya?",
    o: [
      "Bonyolultabb pipeline",
      "Nincs automatizáció",
      "Gyorsabb hibafelismerés",
      "Egyszerűbb működés"
    ],
    a: 0
  },

  // ── Hiányzó szó kérdések ──
  {
    type: "fill",
    q: "A Waterfall modell ___ és szekvenciális fejlesztési folyamatot követ.",
    o: ["iteratív", "lineáris", "spirális", "agilis"],
    a: 1,
    explanation: "A Waterfall modell lineáris és szekvenciális: minden fázis egymás után, visszalépés nélkül következik."
  },
  {
    type: "fill",
    q: "A V-modellben a követelményekhez az ___ teszt kapcsolódik.",
    o: ["unit", "integration", "acceptance", "performance"],
    a: 2,
    explanation: "Az acceptance teszt feladata annak ellenőrzése, hogy a szoftver megfelel-e a felhasználói követelményeknek."
  },
  {
    type: "fill",
    q: "A Spiral modell ___ és iteratív fejlesztési folyamatot alkalmaz.",
    o: ["lineáris", "dokumentum-alapú", "kockázatvezérelt", "inkrementális"],
    a: 2,
    explanation: "A Spiral modell minden iterációban kockázatelemzést végez, ez teszi kockázatvezérelté."
  },
  {
    type: "fill",
    q: "A Scrum fix idejű fejlesztési ciklusa a ___.",
    o: ["backlog", "sprint", "release", "kanban tábla"],
    a: 1,
    explanation: "A sprint egy fix hosszúságú fejlesztési ciklus (általában 1–4 hét), amely alatt a csapat egy működő inkrumentumot szállít."
  },
  {
    type: "fill",
    q: "Az XP egyik fő gyakorlata a ___ programming.",
    o: ["solo", "remote", "pair", "group"],
    a: 2,
    explanation: "A Pair Programming során két fejlesztő dolgozik együtt egyetlen gépen, ami javítja a kódminőséget és tudásmegosztást."
  },
  {
    type: "fill",
    q: "A TDD első lépése a ___ megírása.",
    o: ["dokumentáció", "refactoring", "deployment", "teszt"],
    a: 3,
    explanation: "A TDD (Test Driven Development) ciklusa: először tesztet írunk (ami elbukik), majd implementálunk, végül refaktorálunk."
  },
  {
    type: "fill",
    q: "A CI rövidítés a Continuous ___ kifejezést takarja.",
    o: ["Installation", "Inspection", "Infrastructure", "Integration"],
    a: 3,
    explanation: "A Continuous Integration (CI) azt jelenti, hogy a fejlesztők rendszeresen integrálják kódjukat egy közös repository-ba, ahol automatikus build és teszt fut."
  },
  {
    type: "fill",
    q: "A DevOps célja a fejlesztés és az ___ integrálása.",
    o: ["marketing", "dokumentáció", "üzemeltetés", "tesztelés"],
    a: 2,
    explanation: "A DevOps a Development és Operations szavak összetétele; célja a két terület szorosabb együttműködése a gyorsabb és megbízhatóbb szoftverszállítás érdekében."
  },
  {
    type: "fill",
    q: "A Lean Software Development egyik alapelve a ___ elimináció.",
    o: ["kód", "sprint", "teszt", "waste"],
    a: 3,
    explanation: "A waste (pazarlás) elimináció azt jelenti, hogy minden olyan tevékenységet eltávolítunk, ami nem ad hozzá értéket a termékhez."
  },
  {
    type: "fill",
    q: "A least privilege elv szerint csak a ___ jogosultságokat adjuk meg.",
    o: ["maximális", "admin", "szükséges", "teljes"],
    a: 2,
    explanation: "A least privilege (legkisebb jogosultság) elve szerint minden felhasználó és folyamat csak annyi jogot kap, amennyi a feladatához elengedhetetlenül szükséges."
  },
  {
    type: "fill",
    q: "A SAST a ___ Application Security Testing rövidítése.",
    o: ["Dynamic", "Secure", "Static", "System"],
    a: 2,
    explanation: "A SAST (Static Application Security Testing) a forráskódot futtatás nélkül, statikusan elemzi biztonsági hibák után."
  },
  {
    type: "fill",
    q: "Az SDL tervezési fázisában ___ modelling történik.",
    o: ["agile", "sprint", "data", "threat"],
    a: 3,
    explanation: "A Threat modeling (fenyegetésmodellezés) a potenciális biztonsági fenyegetések korai azonosítása és kezelése a tervezési fázisban."
  },

  // ── Scrum / Kanban / CI/CD / Architektúra / Általános (hiányzó szó) ──
  {
    type: "fill",
    q: "A Product Backlog a termék összes kívánt funkciójának ___ listája.",
    o: ["ábécé sorrendű", "időrendi", "véletlenszerű", "prioritizált"],
    a: 3,
    explanation: "A Product Backlog egy prioritizált lista, amelyet a Product Owner kezel, és amely tartalmazza az összes fejlesztendő funkciót és javítandó hibát."
  },
  {
    type: "fill",
    q: "A Daily Standup (Daily Scrum) célja a napi rövid ___ a csapatban.",
    o: ["kód review", "retrospektív", "szinkronizáció", "tervezési session"],
    a: 2,
    explanation: "A Daily Standup egy max. 15 perces napi egyeztetés, ahol a csapat szinkronizál: ki mit csinált, mit fog csinálni, és mi akadályozza."
  },
  {
    type: "fill",
    q: "A Sprint Retrospective célja a csapat ___ javítása a sprint tapasztalatai alapján.",
    o: ["kódjának", "backlogjának", "dokumentációjának", "folyamatainak"],
    a: 3,
    explanation: "A Sprint Retrospective a sprint végén tartott meeting, ahol a csapat megvizsgálja, mi ment jól, mi nem, és hogyan lehetne javítani a munkamódszeren."
  },
  {
    type: "fill",
    q: "Az acceptance criteria meghatározza, mikor tekinthető ___ egy user story.",
    o: ["elkezdettnek", "tesztelendőnek", "dokumentáltnak", "késznek"],
    a: 3,
    explanation: "Az acceptance criteria (elfogadási feltételek) pontosan leírja, milyen feltételek teljesítése esetén fogadható el egy user story késznek (done)."
  },
  {
    type: "fill",
    q: "A WIP limit az egyidejűleg ___ lévő feladatok maximális számát korlátozza Kanban-ban.",
    o: ["tervezett", "kész", "törölt", "folyamatban"],
    a: 3,
    explanation: "A WIP (Work In Progress) limit meghatározza, hogy egyszerre hány feladat lehet folyamatban. Ez segít elkerülni a túlterhelést és javítja az áteresztőképességet."
  },
  {
    type: "fill",
    q: "A Continuous Delivery és Deployment különbsége: Delivery esetén ___ jóváhagyás szükséges production előtt.",
    o: ["automatikus", "nincs", "manuális", "scrum master"],
    a: 2,
    explanation: "Continuous Delivery esetén a kód deployment-ready állapotban van, de manuális jóváhagyás szükséges a production-ra kerüléshez. Continuous Deployment esetén ez is automatikus."
  },
  {
    type: "fill",
    q: "A microservice architektúra egyik fő előnye a független ___ és deployment.",
    o: ["dokumentálhatóság", "monitorozás", "skálázhatóság", "tesztelés"],
    a: 2,
    explanation: "A microservice-ek egymástól függetlenül skálázhatók és deployolhatók, így egy terhelés alatt álló szolgáltatás önállóan bővíthető a többi érintése nélkül."
  },
  {
    type: "fill",
    q: "A monolitikus architektúrában az alkalmazás egyetlen ___ fejlesztik és deployolják.",
    o: ["mikroszolgáltatásként", "konténerként", "modulként", "egységként"],
    a: 3,
    explanation: "A monolitikus alkalmazás egyetlen, összefüggő egységként van felépítve. Minden komponens szorosan összekapcsolt, és együtt kerül build-elésre és deployolásra."
  },
  {
    type: "fill",
    q: "A code review fő célja a hibák és minőségi problémák ___ felismerése.",
    o: ["automatikus", "késői", "manuális", "korai"],
    a: 3,
    explanation: "A code review során a fejlesztők átnézik egymás kódját, ami segít a hibák korai felismerésében, a tudásmegosztásban és a kódminőség fenntartásában."
  },
  {
    type: "fill",
    q: "A technical debt a nem optimális megoldások miatt keletkező jövőbeli plusz ___ jelenti.",
    o: ["kiadást", "dokumentációt", "tesztelést", "munkát"],
    a: 3,
    explanation: "A technical debt (technikai adósság) azt a jövőbeli munkát jelöli, amelyet a gyors vagy nem optimális döntések miatt később refaktorálással kell 'visszafizetni'."
  },
  {
    type: "fill",
    q: "Az OWASP célja a ___ biztonsági tudás terjesztése.",
    o: ["hardver", "hálózati", "adatbázis", "webalkalmazás-"],
    a: 3,
    explanation: "Az OWASP (Open Worldwide Application Security Project) egy nonprofit szervezet, amely webalkalmazás-biztonsági tudást és erőforrásokat tesz elérhetővé, pl. az OWASP Top 10 listával."
  },
  {
    type: "fill",
    q: "A verziókezelő rendszer (pl. Git) fő célja a kód ___ nyomon követése és visszaállíthatósága.",
    o: ["méretének", "sebességének", "dokumentációjának", "változásainak"],
    a: 3,
    explanation: "A verziókezelő rendszer (VCS) rögzíti a kód minden változtatását, lehetővé teszi a korábbi állapotok visszaállítását, és megkönnyíti a csapatmunkát."
  },

  // ── Új hiányzó szó kérdések ──
  {
    type: "fill",
    q: "A Scrum ___ felelős a product backlog kezeléséért és prioritizálásáért.",
    o: ["Scrum Master", "Developer", "Product Owner", "Tester"],
    a: 2,
    explanation: "A Product Owner képviseli az üzleti igényeket, és ő dönti el, hogy a backlog elemei milyen sorrendben kerüljenek fejlesztésre."
  },
  {
    type: "fill",
    q: "A WIP a ___ In Progress rövidítése.",
    o: ["Web", "Weekly", "Workflow", "Work"],
    a: 3,
    explanation: "WIP = Work In Progress: az egyidejűleg folyamatban lévő feladatok száma. Kanban-ban ezt limitálni kell a hatékony flow érdekében."
  },
  {
    type: "fill",
    q: "A Continuous ___ során a kód automatikusan kerül production-ra emberi jóváhagyás nélkül.",
    o: ["Integration", "Inspection", "Delivery", "Deployment"],
    a: 3,
    explanation: "A Continuous Deployment teljesen automatizált: minden sikeres build és teszt után a kód azonnal production-ra kerül. A Continuous Delivery esetén még szükséges egy manuális jóváhagyás."
  },
  {
    type: "fill",
    q: "A DAST a Dynamic Application ___ Testing rövidítése.",
    o: ["Software", "Security", "System", "Service"],
    a: 1,
    explanation: "A DAST (Dynamic Application Security Testing) futás közben vizsgálja az alkalmazást, kívülről szimulálva a támadói perspektívát, ellentétben a SAST-tal, amely statikusan elemzi a kódot."
  },
  {
    type: "fill",
    q: "A refactoring során a kód ___ nem változik, csak a belső szerkezete.",
    o: ["dokumentációja", "neve", "működése", "tesztelése"],
    a: 2,
    explanation: "A refactoring célja a kód belső szerkezetének tisztítása és javítása anélkül, hogy a külső viselkedés megváltozna."
  },
  {
    type: "fill",
    q: "A technical debt gyors megoldásokból felhalmozódó jövőbeli plusz ___ jelenti.",
    o: ["kiadást", "dokumentációt", "tesztelést", "munkát"],
    a: 3,
    explanation: "A technical debt (technikai adósság) azt a jövőbeli munkát jelöli, amely a gyors, de nem optimális döntések miatt keletkezik, és amelyet előbb-utóbb 'vissza kell fizetni'."
  },
  {
    type: "fill",
    q: "A microservice architektúrában az egyes szolgáltatások egymástól ___ deployolhatók.",
    o: ["függően", "párhuzamosan", "függetlenül", "sorban"],
    a: 2,
    explanation: "A microservice architektúra egyik fő előnye, hogy az egyes szolgáltatások egymástól függetlenül fejleszthetők, skálázhatók és deployolhatók."
  },

  // ─────────────────────────────────────────────
  // EVO-SOFT kérdések
  // KONFIGURÁCIÓKEZELÉS
  // ─────────────────────────────────────────────

{
  q: "Mi a konfiguráció definíciója?",
  o: [
    "Konfigurációs elemek gyűjteménye egy projekt állapotáról",
    "Csak a forráskód aktuális verziója",
    "Tesztesetek összessége",
    "A fejlesztők listája"
  ],
  a: 0
},

{
  type: "fill",
  q: "A konfigurációkezelés célja a ___ fejlesztési környezet biztosítása.",
  o: ["kaotikus", "ellenőrzött", "offline", "manuális"],
  a: 1,
  explanation: "A konfigurációkezelés egyik fő célja az ellenőrzött fejlesztési környezet biztosítása."
},

{
  q: "Melyik NEM konfigurációs elem?",
  o: [
    "Forráskód",
    "Dokumentáció",
    "Fejlesztői környezet",
    "Felhasználó kedvenc színe"
  ],
  a: 3
},

{
  type: "fill",
  q: "A Git ___ paranccsal küldjük fel a módosításokat a központi repository-ba.",
  o: ["clone", "checkout", "push", "pull"],
  a: 2,
  explanation: "A git push parancs küldi fel a lokális commitokat a távoli repository-ba."
},

{
  q: "Mi a branch szerepe?",
  o: [
    "Párhuzamos fejlesztés biztosítása",
    "Adatbázis törlése",
    "Tesztelés kikapcsolása",
    "Felhasználók kezelése"
  ],
  a: 0
},

{
  type: "fill",
  q: "A ___ művelet során két fejlesztési ág változásait egyesítjük.",
  o: ["clone", "merge", "commit", "reset"],
  a: 1,
  explanation: "A merge művelet különböző branchek összeolvasztását végzi."
},

{
  q: "Mit jelent a commit?",
  o: [
    "Változások rögzítése a verziókezelőben",
    "Projekt törlése",
    "Szerver újraindítása",
    "Teszt leállítása"
  ],
  a: 0
},

{
  type: "fill",
  q: "A Git ___ paranccsal kérdezhető le a repository állapota.",
  o: ["status", "push", "merge", "branch"],
  a: 0,
  explanation: "A git status mutatja az aktuális módosításokat és állapotot."
},

{
  q: "Mi a baseline?",
  o: [
    "Rögzített referencia állapot",
    "Tesztelési hibajegy",
    "Automatikus build",
    "Felhasználói kézikönyv"
  ],
  a: 0
},

{
  type: "fill",
  q: "A verziókövetés válaszol arra, hogy ki, mikor és ___ változtatott.",
  o: ["hol", "mit", "miért", "mennyit"],
  a: 1,
  explanation: "A verziókövetés egyik alap kérdése: ki, mikor és mit módosított."
},

{
  q: "Mi a repository?",
  o: [
    "Tároló a verziózott elemek számára",
    "Tesztkörnyezet",
    "Virtuális gép",
    "Hálózati protokoll"
  ],
  a: 0
},

{
  type: "fill",
  q: "A staging area egy ___ tároló commit előtt.",
  o: ["végleges", "köztes", "külső", "titkos"],
  a: 1,
  explanation: "A staging area köztes tárolóként működik commit előtt."
},

{
  q: "Mi a konfigurációkezelés egyik előnye?",
  o: [
    "Reprodukálható build",
    "Lassabb fejlesztés",
    "Kevesebb dokumentáció",
    "Több manuális munka"
  ],
  a: 0
},

{
  type: "fill",
  q: "A ___ biztosítja a párhuzamos fejlesztést verzióütközés nélkül.",
  o: ["branch", "tag", "commit", "release"],
  a: 0,
  explanation: "A branch lehetővé teszi a párhuzamos fejlesztést."
},

{
  q: "Mit jelent a checkout?",
  o: [
    "Egy adott verzió lekérése",
    "Projekt törlése",
    "Teszt futtatása",
    "Szerver leállítása"
  ],
  a: 0
},

{
  type: "fill",
  q: "A ___ segítségével címkézhetünk egy adott verziót.",
  o: ["branch", "tag", "clone", "fork"],
  a: 1,
  explanation: "A tag vagy label egy konkrét verzió megjelölésére szolgál."
},

{
  q: "Mi a merge konfliktus?",
  o: [
    "Két módosítás ütközése",
    "Szerver hiba",
    "Tesztelési hiba",
    "Build siker"
  ],
  a: 0
},

{
  type: "fill",
  q: "A Git ___ paranccsal tölthetjük le a repository másolatát.",
  o: ["push", "clone", "merge", "status"],
  a: 1,
  explanation: "A git clone a repository teljes másolatát letölti."
},

{
  q: "Melyik rendszer verziókezelő?",
  o: [
    "Git",
    "Docker",
    "Jenkins",
    "Kubernetes"
  ],
  a: 0
},

{
  type: "fill",
  q: "A konfigurációkezelés támogatja a ___ fejlesztést.",
  o: ["kaotikus", "reprodukálható", "véletlenszerű", "manuális"],
  a: 1,
  explanation: "A konfigurációkezelés reprodukálható fejlesztést biztosít."
},

// ─────────────────────────────────────────────
// RIZIKÓ ALAPÚ TESZTELÉS
// ─────────────────────────────────────────────

{
  q: "Mi a klasszikus tesztelés egyik problémája?",
  o: [
    "Túl későn történik a tesztelés",
    "Túl gyors visszacsatolás",
    "Nincs dokumentáció",
    "Kevés fejlesztő"
  ],
  a: 0
},

{
  type: "fill",
  q: "A Risk Based Testing a ___ fókuszál a tesztesetek helyett.",
  o: ["felhasználókra", "rizikókra", "szerverekre", "adatbázisokra"],
  a: 1,
  explanation: "A rizikó alapú tesztelés középpontjában a kockázatok állnak."
},

{
  q: "Mi a kihatás képlete?",
  o: [
    "Valószínűség × Kár",
    "Sebesség × Idő",
    "Teszt × Build",
    "Sprint × User Story"
  ],
  a: 0
},

{
  type: "fill",
  q: "A rizikó analízis során meghatározzuk a valószínűséget és a ___.",
  o: ["költséget", "kárt", "branch-et", "buildet"],
  a: 1,
  explanation: "A kihatás a valószínűség és a kár szorzata."
},

{
  q: "Mi a rizikó alapú tesztelés célja?",
  o: [
    "A legkritikusabb hibák megtalálása",
    "Minden teszt törlése",
    "Dokumentáció csökkentése",
    "Fejlesztés leállítása"
  ],
  a: 0
},

{
  type: "fill",
  q: "A rizikó azonosítás során a potenciális ___ gyűjtjük össze.",
  o: ["hibákat", "meetingeket", "fejlesztőket", "release-eket"],
  a: 0,
  explanation: "A rizikó azonosítás során a lehetséges problémákat keressük."
},

{
  q: "Mit jelent a teszt hatékonyság?",
  o: [
    "Mennyire csökkenti a teszt a kockázatot",
    "Milyen gyors a szerver",
    "Mennyi RAM van",
    "Hány fejlesztő dolgozik"
  ],
  a: 0
},

{
  type: "fill",
  q: "A rizikó alapú tesztelés jól illeszkedik a ___ módszertanhoz.",
  o: ["Agile", "Waterfall", "Lineáris", "Statikus"],
  a: 0,
  explanation: "Az RBT jól működik Agile és Scrum környezetben."
},

{
  q: "Miért rossz a klasszikus tesztelés?",
  o: [
    "Későn derülnek ki a kritikus hibák",
    "Túl gyors",
    "Nincs szükség tesztekre",
    "Mindig automatizált"
  ],
  a: 0
},

{
  type: "fill",
  q: "A teszt prioritását a ___ határozza meg.",
  o: ["szín", "rizikó", "kódhossz", "meeting"],
  a: 1,
  explanation: "A magasabb rizikójú funkciók magasabb prioritást kapnak."
},

{
  q: "Mi a Scrum egyik előnye RBT esetén?",
  o: [
    "Gyors visszacsatolás",
    "Nincs tesztelés",
    "Nincs iteráció",
    "Kevesebb kommunikáció"
  ],
  a: 0
},

{
  type: "fill",
  q: "A magas valószínűségű és nagy kárt okozó hibák ___ prioritást kapnak.",
  o: ["alacsony", "magas", "közepes", "véletlen"],
  a: 1,
  explanation: "A magas kockázatú hibákat priorizálni kell."
},

{
  q: "Mi a rizikó alapú tesztelés egyik előnye?",
  o: [
    "Hatékonyabb erőforrás felhasználás",
    "Több felesleges teszt",
    "Lassabb hibajavítás",
    "Kevesebb automatizáció"
  ],
  a: 0
},

{
  type: "fill",
  q: "A sprint elején gyakran tartanak ___ meetinget.",
  o: ["release", "RBT", "backup", "shutdown"],
  a: 1,
  explanation: "Az RBT meeting során priorizálják a kockázatokat."
},

{
  q: "Mi történik a teszt tervezési fázisban?",
  o: [
    "Tesztszintek és felelősök kijelölése",
    "Projekt törlése",
    "Adatbázis újratelepítése",
    "Felhasználók regisztrálása"
  ],
  a: 0
},

{
  type: "fill",
  q: "A kihatás a valószínűség és a ___ szorzata.",
  o: ["sebesség", "kár", "teszt", "release"],
  a: 1,
  explanation: "A risk impact számítása: probability × damage."
},

{
  q: "Mi az RBT egyik legfontosabb előnye?",
  o: [
    "A kritikus területekre koncentrál",
    "Minden tesztet töröl",
    "Megszünteti az Agile-t",
    "Nem igényel dokumentációt"
  ],
  a: 0
},

{
  type: "fill",
  q: "Az RBT során a rizikókat gyakran ___ alapján rangsorolják.",
  o: ["prioritás", "szín", "időjárás", "képernyőméret"],
  a: 0,
  explanation: "A rizikókat prioritás szerint rendezik."
},

{
  q: "Mi történik az ellenőrzés és döntés fázisban?",
  o: [
    "Közös döntés születik a kockázatokról",
    "Szerver telepítés",
    "Kód törlés",
    "Repository klónozás"
  ],
  a: 0
},

{
  type: "fill",
  q: "A rizikó alapú tesztelés során a legfontosabb cél a ___ csökkentése.",
  o: ["kockázat", "RAM", "branch", "pipeline"],
  a: 0,
  explanation: "Az RBT elsődleges célja a kockázatok minimalizálása."
},
// ─────────────────────────────────────────────
// DOMAIN MODELL
// ─────────────────────────────────────────────

{
  q: "Mi a modell definíciója?",
  o: [
    "Egy rendszer egyszerűsítése konkrét cél érdekében",
    "Adatbázis szerver",
    "Programozási nyelv",
    "Tesztelési módszer"
  ],
  a: 0
},

{
  type: "fill",
  q: "A domain modell segít a rendszerrel kapcsolatos ___ megválaszolásában.",
  o: ["kérdések", "hibák", "tesztek", "branch-ek"],
  a: 0,
  explanation: "A modell célja a rendszerrel kapcsolatos kérdések megválaszolása."
},

{
  q: "Mit jelent a CRUD rövidítésben a C betű?",
  o: [
    "Create",
    "Compile",
    "Check",
    "Configure"
  ],
  a: 0
},

{
  type: "fill",
  q: "A CQRS különválasztja az adatlekérdezést és az adat ___.",
  o: ["másolást", "módosítást", "törlést", "szinkronizálást"],
  a: 1,
  explanation: "A CQRS külön kezeli a Query és Command műveleteket."
},

{
  q: "Mi a CRUD egyik hátránya nagy rendszereknél?",
  o: [
    "Nehéz skálázhatóság",
    "Túl gyors működés",
    "Nincs adatkezelés",
    "Nincs UI"
  ],
  a: 0
},

{
  type: "fill",
  q: "A CQRS-ben a Query az adat ___ felel.",
  o: ["módosításáért", "lekérdezéséért", "titkosításáért", "törléséért"],
  a: 1,
  explanation: "A Query az adatok lekérdezésére szolgál."
},

{
  q: "Miért fontos a domain modell?",
  o: [
    "Közös megértést biztosít",
    "Lecseréli a tesztelést",
    "Megszünteti az adatbázist",
    "Automatikusan javít hibákat"
  ],
  a: 0
},

{
  type: "fill",
  q: "A klasszikus fejlesztés egyik problémája az analízis ___.",
  o: ["parallelizmus", "paralízis", "pipeline", "branch"],
  a: 1,
  explanation: "Az analízis paralízis a túlzott tervezésből ered."
},

{
  q: "Mit jelent a refaktorálás?",
  o: [
    "Kód átszervezése működésváltozás nélkül",
    "Adatbázis törlése",
    "Tesztelés kikapcsolása",
    "Új szerver telepítése"
  ],
  a: 0
},

{
  type: "fill",
  q: "A domain-driven design központjában a ___ áll.",
  o: ["üzleti domain", "szerver", "pipeline", "UI"],
  a: 0,
  explanation: "A DDD az üzleti problémák modellezésére koncentrál."
},

{
  q: "Mi a CQRS egyik előnye?",
  o: [
    "Jobb skálázhatóság",
    "Kevesebb adat",
    "Nincs tesztelés",
    "Egyszerűbb hardware"
  ],
  a: 0
},

{
  type: "fill",
  q: "A CRUD műveletek az adatok ___ szolgálnak.",
  o: ["kezelésére", "titkosítására", "másolására", "tömörítésére"],
  a: 0,
  explanation: "A CRUD az alap adatkezelési műveleteket jelenti."
},

{
  q: "Mi a túlzott tervezés egyik veszélye?",
  o: [
    "Merev rendszer kialakulása",
    "Gyorsabb fejlesztés",
    "Kevesebb dokumentáció",
    "Egyszerűbb karbantartás"
  ],
  a: 0
},

{
  type: "fill",
  q: "A startupok gyakran ___ fejlesztési megközelítést alkalmaznak.",
  o: ["tervmentes", "vízesés", "lineáris", "monolitikus"],
  a: 0,
  explanation: "A startupok gyakran gyors, kevésbé tervezett módszerekkel dolgoznak."
},

{
  q: "Mi lehet a terv nélküli fejlesztés következménye?",
  o: [
    "Kaotikus rendszer",
    "Tökéletes architektúra",
    "Nincs technikai adósság",
    "Kevesebb hiba"
  ],
  a: 0
},

{
  type: "fill",
  q: "A CQRS-ben a Command az adatok ___ végzi.",
  o: ["lekérdezését", "módosítását", "másolását", "exportálását"],
  a: 1,
  explanation: "A Command műveletek módosítják az adatokat."
},

{
  q: "Mi a domain modell egyik célja?",
  o: [
    "A rendszer komplexitásának csökkentése",
    "Adatok törlése",
    "Pipeline leállítása",
    "Felhasználók blokkolása"
  ],
  a: 0
},

{
  type: "fill",
  q: "A domain modell egy rendszer ___ reprezentációja.",
  o: ["egyszerűsített", "titkos", "hardveres", "fizikai"],
  a: 0,
  explanation: "A modell mindig egyszerűsített reprezentáció."
},

{
  q: "Miért nehéz a túl komplex rendszer?",
  o: [
    "Nehezen bővíthető és karbantartható",
    "Gyorsabb lesz",
    "Egyszerűbb tesztelni",
    "Kevesebb hibát tartalmaz"
  ],
  a: 0
},

{
  type: "fill",
  q: "A domain modellezés segíti a csapatok közötti ___.",
  o: ["kommunikációt", "konfliktust", "késést", "leállást"],
  a: 0,
  explanation: "A domain modell közös nyelvet biztosít a csapatoknak."
},

// ─────────────────────────────────────────────
// TESZTELÉS IPARI KÖRNYEZETBEN
// ─────────────────────────────────────────────

{
  q: "Miért kritikus az ipari szoftverek tesztelése?",
  o: [
    "A hibák komoly károkat okozhatnak",
    "Mert nincs felhasználó",
    "Mert nincs dokumentáció",
    "Mert nincs UI"
  ],
  a: 0
},

{
  type: "fill",
  q: "Az ipari rendszerekben különösen fontos a ___ működés.",
  o: ["instabil", "megbízható", "lassú", "offline"],
  a: 1,
  explanation: "Az ipari rendszereknél kiemelten fontos a megbízhatóság."
},

{
  q: "Mit jelent a DevOps?",
  o: [
    "Fejlesztés és üzemeltetés együttműködése",
    "Adatbázis mentés",
    "Tesztek törlése",
    "UI fejlesztés"
  ],
  a: 0
},

{
  type: "fill",
  q: "A DevSecOps a DevOps és a ___ kombinációja.",
  o: ["security", "marketing", "hardver", "UI"],
  a: 0,
  explanation: "A DevSecOps biztonsági szemlélettel egészíti ki a DevOpsot."
},

{
  q: "Mi a folyamatos integráció célja?",
  o: [
    "Integrációs problémák korai felismerése",
    "Tesztek törlése",
    "Pipeline leállítása",
    "Adatok titkosítása"
  ],
  a: 0
},

{
  type: "fill",
  q: "A CI rövidítés jelentése Continuous ___.",
  o: ["Integration", "Inspection", "Iteration", "Infrastructure"],
  a: 0,
  explanation: "A CI jelentése Continuous Integration."
},

{
  q: "Mi a monitorozás egyik célja?",
  o: [
    "Hibák és teljesítményproblémák felismerése",
    "Tesztek kikapcsolása",
    "Adatbázis törlése",
    "Felhasználók blokkolása"
  ],
  a: 0
},

{
  type: "fill",
  q: "Az E2E teszt jelentése End-to-End ___.",
  o: ["testing", "tracking", "transfer", "timeout"],
  a: 0,
  explanation: "Az End-to-End teszt a teljes folyamatot vizsgálja."
},

{
  q: "Mi a self-healing rendszer jellemzője?",
  o: [
    "Automatikus helyreállítás",
    "Kézi hibajavítás",
    "Tesztelés tiltása",
    "Szerver törlése"
  ],
  a: 0
},

{
  type: "fill",
  q: "A magas rendelkezésre állást gyakran ___ rövidítéssel jelölik.",
  o: ["CI", "HA", "CD", "RBT"],
  a: 1,
  explanation: "A HA a High Availability rövidítése."
},

{
  q: "Mi az automatizált tesztelés előnye?",
  o: [
    "Gyors és ismételhető tesztfuttatás",
    "Lassabb fejlesztés",
    "Több manuális munka",
    "Kevesebb reprodukálhatóság"
  ],
  a: 0
},

{
  type: "fill",
  q: "A CD jelentése Continuous ___.",
  o: ["Deployment", "Database", "Documentation", "Debug"],
  a: 0,
  explanation: "A CD a Continuous Deployment rövidítése."
},

{
  q: "Mi a vulnerability management célja?",
  o: [
    "Sérülékenységek kezelése",
    "Felhasználók törlése",
    "Pipeline gyorsítása",
    "UI fejlesztés"
  ],
  a: 0
},

{
  type: "fill",
  q: "A DevSecOps fontos része a ___ ellenőrzés.",
  o: ["biztonsági", "grafikai", "hang", "videó"],
  a: 0,
  explanation: "A DevSecOps egyik fő eleme a security ellenőrzés."
},

{
  q: "Mi az auto-scaling?",
  o: [
    "Automatikus erőforrás skálázás",
    "Automatikus teszt törlés",
    "UI generálás",
    "Adatbázis mentés"
  ],
  a: 0
},

{
  type: "fill",
  q: "Az ipari rendszerekben kiemelten fontos a ___ és stabilitás.",
  o: ["biztonság", "színvilág", "marketing", "animáció"],
  a: 0,
  explanation: "A biztonság és stabilitás alapkövetelmény."
},

{
  q: "Mi a CI/CD pipeline célja?",
  o: [
    "Folyamatos fejlesztés és szállítás",
    "Felhasználók tiltása",
    "Tesztek eltávolítása",
    "Dokumentáció törlése"
  ],
  a: 0
},

{
  type: "fill",
  q: "A passzív monitorozás figyeli a rendszer ___ állapotát.",
  o: ["aktuális", "jövőbeli", "titkos", "offline"],
  a: 0,
  explanation: "A passzív monitorozás a rendszer működését figyeli."
},

{
  q: "Miért fontos az integrációs teszt?",
  o: [
    "Komponensek együttműködését ellenőrzi",
    "Csak UI-t tesztel",
    "Nem automatizálható",
    "Csak adatbázist vizsgál"
  ],
  a: 0
},

{
  type: "fill",
  q: "A DevOps egyik fő előnye a gyorsabb ___.",
  o: ["visszacsatolás", "hibaszám", "leállás", "manuális munka"],
  a: 0,
  explanation: "A DevOps gyors feedback ciklusokat biztosít."
},
// ─────────────────────────────────────────────
// RENDSZERINTEGRÁCIÓ – SAFe vs LeSS
// ─────────────────────────────────────────────

{
  q: "Mit jelent a SAFe rövidítés?",
  o: [
    "Scaled Agile Framework",
    "System Agile Function",
    "Secure Architecture Framework",
    "Software Agile Flow"
  ],
  a: 0
},

{
  type: "fill",
  q: "A LeSS a ___ Scrum rövidítése.",
  o: ["Large Scale", "Long System", "Linear Software", "Layered Secure"],
  a: 0,
  explanation: "A LeSS jelentése Large Scale Scrum."
},

{
  q: "Melyik jellemző igaz a SAFe-re?",
  o: [
    "Hierarchikus felépítés",
    "Nincs koordináció",
    "Csak egy csapat használhatja",
    "Nem támogatja az Agile-t"
  ],
  a: 0
},

{
  type: "fill",
  q: "A SAFe egyik fontos eleme a Program ___.",
  o: ["Iteration", "Increment", "Integration", "Inspection"],
  a: 1,
  explanation: "A Program Increment (PI) a SAFe egyik alapfogalma."
},

{
  q: "Mi a LeSS egyik előnye?",
  o: [
    "Egyszerűbb és kevésbé bürokratikus",
    "Sok extra szerepkör",
    "Komplexebb működés",
    "Nincs Scrum"
  ],
  a: 0
},

{
  type: "fill",
  q: "A SAFe elsősorban ___ vállalatok számára készült.",
  o: ["kis", "nagy", "startup", "egyfős"],
  a: 1,
  explanation: "A SAFe nagyvállalati környezetre optimalizált."
},

{
  q: "Mi a Release Train célja?",
  o: [
    "Csapatok összehangolt működése",
    "Adatbázis törlése",
    "Tesztelés leállítása",
    "UI tervezés"
  ],
  a: 0
},

{
  type: "fill",
  q: "A LeSS a ___ alapelveire épül.",
  o: ["Scrum", "Waterfall", "V-modell", "Spirál"],
  a: 0,
  explanation: "A LeSS a Scrum egyszerű kiterjesztése nagyobb rendszerekre."
},

{
  q: "Mi a SAFe egyik hátránya?",
  o: [
    "Nagy komplexitás és adminisztráció",
    "Nincs dokumentáció",
    "Nem skálázható",
    "Kevés szerepkör"
  ],
  a: 0
},

{
  type: "fill",
  q: "A SAFe erős ___ biztosít a csapatok között.",
  o: ["koordinációt", "elszigetelést", "titkosítást", "tesztelést"],
  a: 0,
  explanation: "A SAFe egyik fő célja a nagy csapatok koordinálása."
},

{
  q: "Mi a LeSS egyik jellemzője?",
  o: [
    "Kevés extra szerepkör",
    "Sok hierarchia",
    "Nincs Product Owner",
    "Nem Agile"
  ],
  a: 0
},

{
  type: "fill",
  q: "A SAFe több ___ szintet használ.",
  o: ["szervezeti", "hardveres", "grafikai", "titkos"],
  a: 0,
  explanation: "A SAFe több szervezeti szinten működik."
},

{
  q: "Mi a közös a SAFe és LeSS modellekben?",
  o: [
    "Agile alapú skálázott fejlesztés",
    "Csak vízesés modell használata",
    "Nincs Scrum",
    "Nem támogatják az iterációkat"
  ],
  a: 0
},

{
  type: "fill",
  q: "A LeSS célja az Agile ___ megtartása nagy rendszerekben.",
  o: ["egyszerűség", "hierarchia", "bürokrácia", "merevség"],
  a: 0,
  explanation: "A LeSS az egyszerű Scrum szemléletet próbálja megőrizni."
},

{
  q: "Miért használják a skálázott Agile modelleket?",
  o: [
    "Sok csapat koordinálására",
    "Adatbázis kezelésre",
    "Operációs rendszer fejlesztésre",
    "UI animációkra"
  ],
  a: 0
},

{
  type: "fill",
  q: "A PI Planning a SAFe egyik közös ___ eseménye.",
  o: ["tervezési", "tesztelési", "monitorozási", "backup"],
  a: 0,
  explanation: "A PI Planning közös tervezési esemény."
},

{
  q: "Melyik modell egyszerűbb?",
  o: [
    "LeSS",
    "SAFe",
    "Mindkettő egyforma",
    "Egyik sem"
  ],
  a: 0
},

{
  type: "fill",
  q: "A SAFe nagy hangsúlyt fektet a ___ kezelésére.",
  o: ["függőségek", "színek", "grafikák", "animációk"],
  a: 0,
  explanation: "A SAFe koordinálja a csapatok közti függőségeket."
},

{
  q: "Mi a LeSS egyik hátránya?",
  o: [
    "Nagyon nagy szervezeteknél nehezebb koordináció",
    "Nincs Scrum támogatás",
    "Túl sok szerepkör",
    "Nem iteratív"
  ],
  a: 0
},

{
  type: "fill",
  q: "A SAFe támogatja a nagyvállalati ___ működést.",
  o: ["agilis", "lineáris", "offline", "manuális"],
  a: 0,
  explanation: "A SAFe célja a skálázott agilis működés támogatása."
},

// ─────────────────────────────────────────────
// SZISZTEMATIKUS ARCHITEKTÚRA-TERVEZÉS
// ─────────────────────────────────────────────

{
  q: "Mi a szisztematikus architektúra-tervezés célja?",
  o: [
    "Fenntartható és bővíthető rendszer kialakítása",
    "Tesztek törlése",
    "UI színezése",
    "Felhasználók blokkolása"
  ],
  a: 0
},

{
  type: "fill",
  q: "A jó architektúra támogatja a rendszer ___ lehetőségét.",
  o: ["változtatását", "törlését", "titkosítását", "leállítását"],
  a: 0,
  explanation: "A jó architektúra könnyen módosítható és bővíthető."
},

{
  q: "Mi az analízis paralízis?",
  o: [
    "Túl sok tervezés miatti lelassulás",
    "Gyors fejlesztés",
    "Tesztelési módszer",
    "Adatbázis hiba"
  ],
  a: 0
},

{
  type: "fill",
  q: "A technikai adósság hosszú távon ___ problémákat okoz.",
  o: ["karbantartási", "grafikai", "szín", "animációs"],
  a: 0,
  explanation: "A technikai adósság rontja a rendszer karbantarthatóságát."
},

{
  q: "Mi a modularitás előnye?",
  o: [
    "Könnyebb karbantartás és bővíthetőség",
    "Nagyobb káosz",
    "Lassabb fejlesztés",
    "Több duplikáció"
  ],
  a: 0
},

{
  type: "fill",
  q: "Az iteratív fejlesztés folyamatos ___ biztosít.",
  o: ["visszacsatolást", "hibát", "késést", "törlést"],
  a: 0,
  explanation: "Az iteratív fejlesztés gyors feedback ciklusokat ad."
},

{
  q: "Mi a túl kevés tervezés következménye?",
  o: [
    "Kaotikus architektúra",
    "Tökéletes rendszer",
    "Nincs technikai adósság",
    "Egyszerűbb karbantartás"
  ],
  a: 0
},

{
  type: "fill",
  q: "A túl sok upfront design gyakran ___ paralízist okoz.",
  o: ["analízis", "pipeline", "security", "integration"],
  a: 0,
  explanation: "A túlzott upfront tervezés analízis paralízishez vezethet."
},

{
  q: "Mi a skálázhatóság?",
  o: [
    "A rendszer növekvő terhelés kezelési képessége",
    "UI színezés",
    "Tesztek törlése",
    "Branch kezelés"
  ],
  a: 0
},

{
  type: "fill",
  q: "A maintainability jelentése rendszer ___.",
  o: ["karbantarthatóság", "titkosítás", "törlés", "telepítés"],
  a: 0,
  explanation: "A maintainability a rendszer karbantarthatóságát jelenti."
},

{
  q: "Mi a CI/CD szerepe az architektúrában?",
  o: [
    "Folyamatos integráció és szállítás támogatása",
    "Felhasználók törlése",
    "UI tervezés",
    "Hardver hűtés"
  ],
  a: 0
},

{
  type: "fill",
  q: "A domain-driven design az üzleti ___ modellezésére koncentrál.",
  o: ["problémák", "animációk", "grafikák", "színek"],
  a: 0,
  explanation: "A DDD az üzleti problémákra épül."
},

{
  q: "Miért fontos a jó architektúra?",
  o: [
    "Hosszú távon fenntartható rendszert biztosít",
    "Megszünteti a tesztelést",
    "Lassítja a fejlesztést",
    "Növeli a káoszt"
  ],
  a: 0
},

{
  type: "fill",
  q: "A monolitikus rendszerek gyakran nehezen ___.",
  o: ["skálázhatók", "telepíthetők", "fordíthatók", "indíthatók"],
  a: 0,
  explanation: "A monolitikus rendszerek skálázása nehézkes lehet."
},

{
  q: "Mi a refaktorálás célja?",
  o: [
    "Kódminőség javítása működésváltozás nélkül",
    "Tesztelés kikapcsolása",
    "Felhasználók törlése",
    "Pipeline leállítása"
  ],
  a: 0
},

{
  type: "fill",
  q: "Az architektúra egyik fő célja a rendszer ___ növelése.",
  o: ["stabilitásának", "hibáinak", "késésének", "káoszának"],
  a: 0,
  explanation: "A jó architektúra stabilabb rendszert eredményez."
},

{
  q: "Mi az egyik modern architektúra-tervezési megközelítés?",
  o: [
    "Agile",
    "Csak Waterfall",
    "Papíralapú fejlesztés",
    "Teszt nélküli fejlesztés"
  ],
  a: 0
},

{
  type: "fill",
  q: "A continuous integration célja az integrációs hibák ___ felismerése.",
  o: ["korai", "késői", "véletlen", "manuális"],
  a: 0,
  explanation: "A CI egyik fő előnye a korai hibafelismerés."
},

{
  q: "Mi a bővíthetőség jelentése?",
  o: [
    "A rendszer könnyen fejleszthető tovább",
    "A rendszer törölhető",
    "A rendszer nem módosítható",
    "A rendszer offline működik"
  ],
  a: 0
},

{
  type: "fill",
  q: "A szisztematikus architektúra-tervezés célja a ___ rendszer kialakítása.",
  o: ["fenntartható", "kaotikus", "véletlenszerű", "instabil"],
  a: 0,
  explanation: "Az architektúrának hosszú távon fenntarthatónak kell lennie."
}
]