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
  }
]