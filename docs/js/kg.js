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
  },

  // ── Hiányzó szó kérdések ──
  {
    type: "fill",
    q: "A GDP az újonnan előállított ___ termékek és szolgáltatások értékét méri.",
    o: ["importált", "közbenső", "összes", "végső"],
    a: 3,
    explanation: "A GDP csak a végső termékeket számolja, hogy elkerülje a közbenső termékek dupla számlálását (pl. a liszt ára benne van a kenyér árában, külön nem számítjuk)."
  },
  {
    type: "fill",
    q: "Az infláció az ___ általános növekedését jelenti.",
    o: ["GDP", "munkanélküliség", "pénzmennyiség", "árszínvonal"],
    a: 3,
    explanation: "Az infláció az általános árszínvonal tartós emelkedése — ugyanannyi pénzért kevesebb árut és szolgáltatást lehet venni, csökkentve a pénz vásárlóerejét."
  },
  {
    type: "fill",
    q: "A munkanélküliségi ráta a munkanélküliek arányát a ___ viszonyítva mutatja.",
    o: ["teljes felnőtt lakossághoz", "foglalkoztatottakhoz", "GDP-hez", "munkaerő-állományhoz"],
    a: 3,
    explanation: "Munkanélküliségi ráta = munkanélküliek / munkaerő-állomány (aktív keresők + munkanélküliek). A teljes lakossághoz viszonyítás nem lenne helyes, mert tartalmaz nem munkavállalókat is."
  },
  {
    type: "fill",
    q: "A Fisher-egyenlet a ___ és a nominális kamat kapcsolatát írja le.",
    o: ["GDP", "pénzmennyiség", "reálkamat", "infláció"],
    a: 2,
    explanation: "Fisher-egyenlet: nominális kamat ≈ reálkamat + várható infláció. Megmutatja, hogy a megtakarítók reálhozamát az infláció mennyire csökkenti."
  },
  {
    type: "fill",
    q: "A pénz mennyiségi elméletét az ___ egyenlet írja le.",
    o: ["Y = C + I + G", "i = r + π", "M · V = P · Y", "S = I"],
    a: 2,
    explanation: "A kvantitativelmélet: MV = PY, ahol M a pénzmennyiség, V a forgási sebesség, P az árszint, Y a reálkibocsátás. Hosszú távon a pénzmennyiség növekedése arányosan emeli az árszintet."
  },
  {
    type: "fill",
    q: "A kiadási GDP-megközelítés képlete: Y = C + I + G + ___.",
    o: ["M", "S", "T", "NX"],
    a: 3,
    explanation: "GDP = fogyasztás (C) + beruházás (I) + állami kiadások (G) + nettó export (NX = export − import). NX negatív is lehet, ha az ország többet importál, mint exportál."
  },
  {
    type: "fill",
    q: "Zárt gazdaságban a megtakarítás (S) egyenlő a ___-sal.",
    o: ["fogyasztással (C)", "állami kiadással (G)", "beruházással (I)", "nettó exporttal (NX)"],
    a: 2,
    explanation: "Zárt gazdaságban NX = 0, ezért a GDP-azonosságból következik, hogy S = I: minden megtakarítás beruházássá válik, nincs tőkekiáramlás."
  },
  {
    type: "fill",
    q: "A nem várt infláció ___ és bizonytalansági hatásokat okoz.",
    o: ["növekedési", "termelékenységi", "foglalkoztatási", "újraelosztási"],
    a: 3,
    explanation: "A nem várt infláció újraelosztja a vagyont: az adósok járnak jól (kisebb reálértékű összeget fizetnek vissza), a hitelezők rosszul. Ezen kívül növeli a gazdasági bizonytalanságot."
  }
]