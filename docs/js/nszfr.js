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
  }
]