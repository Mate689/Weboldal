const quizArray = [
  // 📘 Közgazdaságtan
    {
    q: "Mit vizsgál a makroökonómia?",
    o: [
      "Egyéni fogyasztói döntéseket",
      "Vállalatok árszabását",
      "A nemzetgazdaság egészének működését",
      "Egyes piacok keresletét"
    ],
    a: 2
  },
  {
    q: "Mit mér a GDP?",
    o: [
      "Az összes eladott terméket",
      "Az újonnan előállított végső termékek és szolgáltatások értékét",
      "A lakosság vagyonát",
      "A pénzmennyiséget"
    ],
    a: 1
  },
  {
    q: "Melyik képlet a kiadási GDP-megközelítés?",
    o: [
      "Y = C + I + G + NX",
      "Y = W + R + P",
      "Y = M · V",
      "Y = K + L"
    ],
    a: 0
  },
  {
    q: "Mi a különbség a nominális és reál GDP között?",
    o: [
      "A valuta típusa",
      "Az árak figyelembevétele",
      "A jövedelmek megoszlása",
      "Az export mértéke"
    ],
    a: 1
  },
  {
    q: "Mit jelent az infláció?",
    o: [
      "A pénzmennyiség csökkenését",
      "Az árszínvonal általános növekedését",
      "A GDP csökkenését",
      "A munkanélküliség növekedését"
    ],
    a: 1
  },
  {
    q: "Melyik mutató méri a fogyasztói árak változását?",
    o: [
      "GDP-deflátor",
      "CPI",
      "NX",
      "M2"
    ],
    a: 1
  },
  {
    q: "Hogyan számítjuk a munkanélküliségi rátát?",
    o: [
      "Munkanélküliek / lakosság",
      "Munkanélküliek / foglalkoztatottak",
      "Munkanélküliek / munkaerő-állomány",
      "Munkanélküliek / GDP"
    ],
    a: 2
  },
  {
    q: "Mit fejez ki a termelési függvény?",
    o: [
      "A pénz és infláció kapcsolatát",
      "A termelés és a termelési tényezők kapcsolatát",
      "A kereslet és kínálat egyensúlyát",
      "Az állami kiadások nagyságát"
    ],
    a: 1
  },
  {
    q: "Melyik tényező jelöli az összesített technológiai szintet?",
    o: [
      "K",
      "L",
      "A",
      "Y"
    ],
    a: 2
  },
  {
    q: "Mi a magánmegtakarítás képlete?",
    o: [
      "Y - C - G",
      "Y - T - C",
      "T - G",
      "S - I"
    ],
    a: 1
  },
  {
    q: "Zárt gazdaságban milyen kapcsolat áll fenn?",
    o: [
      "NX = I",
      "S = NX",
      "S = I",
      "C = G"
    ],
    a: 2
  },
  {
    q: "Mit jelent a nettó export (NX)?",
    o: [
      "Export + import",
      "Export - import",
      "Import - export",
      "Export / import"
    ],
    a: 1
  },
  {
    q: "Melyik igaz egy kis nyitott gazdaságra?",
    o: [
      "Befolyásolja a világpiaci kamatlábat",
      "Világpiaci kamatlábat adottnak tekinti",
      "Zárt gazdaságként működik",
      "Nem kereskedik"
    ],
    a: 1
  },
  {
    q: "Melyik NEM a pénz funkciója?",
    o: [
      "Csereeszköz",
      "Értékmérő",
      "Értékőrző",
      "Termelési tényező"
    ],
    a: 3
  },
  {
    q: "Mi tartozik az M1 pénzaggregátumba?",
    o: [
      "Hosszú lejáratú kötvények",
      "Részvények",
      "Készpénz és látra szóló betétek",
      "Ingatlanok"
    ],
    a: 2
  },
  {
    q: "Melyik egyenlet írja le a pénz mennyiségi elméletét?",
    o: [
      "Y = C + I + G",
      "M · V = P · Y",
      "i = r + π",
      "S = I"
    ],
    a: 1
  },
  {
    q: "Mit ír le a Fisher-egyenlet?",
    o: [
      "Infláció és pénzmennyiség kapcsolatát",
      "Reálkamat és nominális kamat kapcsolatát",
      "GDP és fogyasztás kapcsolatát",
      "Export és import kapcsolatát"
    ],
    a: 1
  },
  {
    q: "Mit okoz a nem várt infláció?",
    o: [
      "Gazdasági biztonságot",
      "Újraelosztási és bizonytalansági hatásokat",
      "Termelékenységnövekedést",
      "Munkanélküliség csökkenést"
    ],
    a: 1
  },
  {
    q: "Mi jellemző a hiperinflációra?",
    o: [
      "Alacsony pénzkibocsátás",
      "Stabil árak",
      "Nagyon gyors és tartós áremelkedés",
      "Defláció"
    ],
    a: 2
  },
  {
    q: "Mit jelent az ikerdeficit?",
    o: [
      "Két különböző adónem hiánya",
      "Költségvetési és külkereskedelmi hiány együttesen",
      "Állami és vállalati veszteség",
      "Két ország közti hiány"
    ],
    a: 1
  }
]