const quizArray = [
  {
    q: "Mi a szoftver egyik alapvető sajátossága?",
    o: [
      "Fizikai alkatrészekből áll",
      "Nem kopik, de módosításokkal romolhat",
      "Hardverhiba miatt öregszik",
      "Nem igényel karbantartást"
    ],
    a: 1
  },
  {
    q: "Miért beszélünk szoftverkrízisről?",
    o: [
      "A hardverek túl gyorsan fejlődtek",
      "A szoftverek túl olcsók lettek",
      "A projektek csúsztak és rossz minőségűek voltak",
      "Nem voltak programozási nyelvek"
    ],
    a: 2
  },
  {
    q: "Melyik NEM tartozik a szoftverfejlesztési életciklus fő fázisai közé?",
    o: [
      "Követelményfelmérés",
      "Tervezés",
      "Marketing",
      "Tesztelés"
    ],
    a: 2
  },
  {
    q: "Melyik folyamatmodell kezeli nehezen a változó követelményeket?",
    o: [
      "Agilis modell",
      "Inkrementális modell",
      "Vízesés modell",
      "Spirál modell"
    ],
    a: 2
  },
  {
    q: "Mi az agilis szemlélet egyik alapelve?",
    o: [
      "Részletes dokumentáció mindenek felett",
      "Működő szoftver elsődlegessége",
      "Változások teljes kizárása",
      "Fejlesztők helyett eszközök előtérbe helyezése"
    ],
    a: 1
  },
  {
    q: "Mi a DevOps fő célja?",
    o: [
      "Csak a fejlesztési idő növelése",
      "Fejlesztés és üzemeltetés összehangolása",
      "Manuális folyamatok preferálása",
      "Biztonság teljes kizárása"
    ],
    a: 1
  },
  {
    q: "Mit jelent a DevSecOps megközelítés?",
    o: [
      "Biztonság csak az üzemeltetésben",
      "Biztonság csak teszteléskor",
      "Biztonság integrálása a teljes életciklusba",
      "Biztonság kizárólag külső eszközökkel"
    ],
    a: 2
  },
  {
    q: "Mi történik SQL injection támadás során?",
    o: [
      "Memória túlcsordul",
      "Rosszindulatú SQL kód fut le az adatbázison",
      "Felhasználói felület módosul",
      "Hálózati csomagok sérülnek"
    ],
    a: 1
  },
  {
    q: "Mi az XSS támadás lényege?",
    o: [
      "Adatbázis törlése",
      "Rosszindulatú szkriptek futtatása más felhasználók böngészőjében",
      "Hálózati forgalom lehallgatása",
      "Jogosultság-emelés operációs szinten"
    ],
    a: 1
  },
  {
    q: "Mi a CSRF támadás célja?",
    o: [
      "Felhasználó nevében jogosulatlan művelet végrehajtása",
      "Memóriahibák kihasználása",
      "Adatok titkosítása",
      "Szerver leállítása"
    ],
    a: 0
  },
  {
    q: "Melyik sérülékenység jellemző főként alacsony szintű nyelvekre?",
    o: [
      "XSS",
      "CSRF",
      "Buffer overflow",
      "SQL injection"
    ],
    a: 2
  },
  {
    q: "Mi okozza a buffer overflow sérülékenységet?",
    o: [
      "Hibás hitelesítés",
      "Túl sok adat írása egy memóriaterületre",
      "Hibás SQL lekérdezés",
      "Nem megfelelő titkosítás"
    ],
    a: 1
  },
  {
    q: "Mit jelent az információszivárgás?",
    o: [
      "Adatok törlése",
      "Érzékeny információk illetéktelen kiszivárgása",
      "Jogosultságok csökkentése",
      "Rendszerfrissítés"
    ],
    a: 1
  },
  {
    q: "Mi a jogosultság-emelés?",
    o: [
      "Felhasználói élmény javítása",
      "Magasabb jogosultság megszerzése jogosulatlanul",
      "Adatok titkosítása",
      "Rendszersebesség növelése"
    ],
    a: 1
  },
  {
    q: "Melyik nyilvántartás ad egyedi azonosítót ismert sérülékenységekhez?",
    o: [
      "CWE",
      "CERT",
      "CVE",
      "ISO"
    ],
    a: 2
  },
  {
    q: "Mit ír le a CWE?",
    o: [
      "Konkrét támadási eszközöket",
      "Általános fejlesztési hibakategóriákat",
      "Javítási patcheket",
      "Jogszabályokat"
    ],
    a: 1
  },
  {
    q: "Mi a CERT szervezetek fő feladata?",
    o: [
      "Szoftverek fejlesztése",
      "Incidensek kezelése és figyelmeztetések kiadása",
      "Hardvergyártás",
      "Jogosultságok kiosztása"
    ],
    a: 1
  },
  {
    q: "Mit jelent az IaaS felhőmodell?",
    o: [
      "Kész alkalmazás szolgáltatása",
      "Csak adatbázis biztosítása",
      "Infrastruktúra szolgáltatása",
      "Csak fejlesztői környezet"
    ],
    a: 2
  },
  {
    q: "Melyik modellben felel leginkább a szolgáltató a biztonságért?",
    o: [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-premise"
    ],
    a: 2
  },
  {
    q: "Mi a PaaS egyik előnye?",
    o: [
      "Teljes kontroll az infrastruktúra felett",
      "Kevesebb konfigurációs hiba lehetősége",
      "Nincs szükség alkalmazásfejlesztésre",
      "Nincs biztonsági kockázat"
    ],
    a: 1
  },
  {
    q: "Miért fontos a korai biztonsági szemlélet a fejlesztésben?",
    o: [
      "Csak jogi okokból",
      "Kisebb költséggel javíthatók a hibák",
      "Nem fontos",
      "Csak üzemeltetéskor szükséges"
    ],
    a: 1
  },
  {
    q: "Mi NEM jellemző az agilis módszertanokra?",
    o: [
      "Gyors visszacsatolás",
      "Rugalmas változáskezelés",
      "Merev, lineáris folyamat",
      "Csapatkommunikáció"
    ],
    a: 2
  },
  {
    q: "Mi a szoftverminőség egyik kulcsa nagy rendszereknél?",
    o: [
      "Minél több funkció",
      "Folyamatok és biztonság összehangolása",
      "Dokumentáció hiánya",
      "Manuális üzemeltetés"
    ],
    a: 1
  },
  {
    q: "Miért segíti a CVE a biztonsági kommunikációt?",
    o: [
      "Automatikusan javít hibákat",
      "Egységes azonosítót ad sérülékenységeknek",
      "Kódelemzést végez",
      "Titkosítja az adatokat"
    ],
    a: 1
  }
];