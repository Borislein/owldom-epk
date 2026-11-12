// Alle Inhalte der EPK-Seite. Texte mit TODO vor dem Livegang ersetzen.
export type Lang = "en" | "de";
type T = Record<Lang, string>;

export const release = {
  artist: "Owldom",
  artists: ["Owldom", "Sensational"],
  title: ["Owldom Meets Sensational", "In The Twilight Zone"],
  catNum: "ZTMSZ001",
  label: "Zeitmasz",
  labelUrl: "https://zeitmasz.art",
  labelCode: "LC 105556",
  upc: "0641360448219",
  date: { en: "3 November 2026", de: "3. November 2026" } as T,
  physicalDate: { en: "23 November 2026", de: "23. November 2026" } as T,
  cover: "/img/cover.jpg", // TODO: Cover 3000 x 3000 px ablegen
};

export const links = {
  smartlink: "https://push.fm/fl/krzp7acb",
  support: "https://www.gofundme.com/f/help-owldom-to-build-his-hollow",
  bandcamp: "https://owldom.bandcamp.com/album/owldom-meets-sensational-in-the-twilight-zone",
  bandcampAlbumId: "2997301608",
  stores: [
    { name: "Spotify", url: "https://open.spotify.com/album/6J1eTkt7fWYiLi4LkGCdOl" },
    { name: "Apple Music", url: "https://music.apple.com/de/album/owldom-meets-sensational-in-the-twilight-zone/6824047522" },
    { name: "Deezer", url: "https://www.deezer.com/album/1135258901" },
    { name: "Tidal", url: "https://tidal.com/album/570698913" },
    { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_lfBVsv8rj4G_optctE4HPxwHBmJbuOesQ" },
    { name: "Amazon Music", url: "https://music.amazon.de/albums/B0HND68F32" },
    // { name: "Audiomack", url: "https://audiomack.com/owldom-1/album/owldom-meets-sensational-in-the-twilight-zone" },
  ],
  downloads: [
    { name: "Bandcamp", url: "https://owldom.bandcamp.com/album/owldom-meets-sensational-in-the-twilight-zone" },
    { name: "Subvert", url: "https://www.subvert.fm/owldom/owldom-meets-sensational-in-the-twilight-zone" },
    { name: "Qobuz", url: "https://www.qobuz.com/de-de/album/owldom-meets-sensational-in-the-twilight-zone-owldom-sensational/tlmblj04ffh9o" },
    { name: "iTunes", url: "https://music.apple.com/de/album/owldom-meets-sensational-in-the-twilight-zone/6824047522?app=itunes" },
  ],
  social: [
    { name: "Instagram", url: "https://instagram.com/owldom101" },
    { name: "X", url: "https://x.com/owldomoftheking" },
    { name: "Linktree", url: "https://linktr.ee/owldom" },
  ],
};

export const tracks = {
  a: [
    { title: "No Shade", duration: "3:33" },
    { title: "Pester", duration: "3:58" },
    { title: "Phalanx", duration: "7:31" },
    { title: "Ghosting", duration: "5:14" },
  ],
  b: [
    { title: "You", duration: "6:54", solo: true },
    { title: "Unsub", duration: "6:01" },
    { title: "Newfangled", duration: "7:00" },
  ],
};

export const credits = [
  { role: { en: "Music", de: "Musik" } as T, name: "Owldom" },
  { role: { en: "Lyrics", de: "Text" } as T, name: "Sensational" },
  { role: { en: "Mix", de: "Mix" } as T, name: "Martin Maischein @ Kuzurura", url: "http://kuzurura.com/" },
  { role: { en: "Mastering", de: "Mastering" } as T, name: "Cem Oral @ Jammin Masters", url: "https://jamminmasters.de/" },
  { role: { en: "Photos", de: "Fotos" } as T, name: "Daniel Freed", url: "https://www.saatchiart.com/danielmfreed" },
];

export const formats: Record<Lang, string[]> = {
  en: [
    "Streaming: Spotify, Apple, Deezer, Tidal, YouTube, Amazon, Audiomack",
    "Download: Bandcamp, Subvert, Qobuz, iTunes",
    "Cassette: Limited Edition",
    "CD: Limited Edition with blue reflective underside",
  ],
  de: [
    "Streaming: Spotify, Apple, Deezer, Tidal, YouTube, Amazon, Audiomack",
    "Download: Bandcamp, Subvert, Qobuz, iTunes",
    "Kassette: Limitierte Auflage",
    "CD: Limitierte Auflage mit blau-reflektierender Unterseite",
  ],
};

export const text = {
  // TODO: Pressetext einsetzen (Absätze als Array)
  // Meta-Beschreibung für Suchmaschinen und Link-Vorschau
  oneLiner: {
    en: "Owldom’s debut. Sensational’s farewell.",
    de: "Owldoms Debüt. Sensationals Abschied.",
  } as T,
  // Zitat oben unter dem Titel. TODO: Zustimmung von Christian einholen, Namensnennung klären
  leadQuote: {
    en: "The ultimate nerd-rap goal: Sensational finally working with a hearing-impaired producer.\nAnd it actually being good.",
    de: "Das ultimative Nerd-Rap-Ziel: Daß Sensational endlich mit einem gehörgeschädigten Producer zusammenarbeitet.\nUnd daß das dann noch gut ist.",
    by: "Karl Marx Stadt",
    approved: true, // TODO: vor Livegang auf false, falls Christian nicht zugestimmt hat
  } as T & { by: string; approved: boolean },
  bio: {
    en: [
      "Sensational created his own universe with him as the central star. *Owldom Meets Sensational In The Twilight Zone* is his final transmission. Once again, he demonstrates his unique talent across a wide range of unusual genres.",
      "Sensational was the emcee du jour of the true underground heads. Entering the game from leftfield, instead of gravitating to the centre, he unblinkingly moved farther out. Technicalities or obstacles weren’t of relevance for him. Words needed to be put out.",
      "Owldom is an enigma. Rumor has it he’s a true Berliner who’s been a fixture on the nightlife scene since the ’80s and has been working as promoter and DJ since the ’90s. Why is he only making his debut now with this album? What held him back? The traumatic abuse of his childhood and the resulting hearing loss certainly played a role. This album is meant to encourage traumatised, hearing-impaired musicians worldwide.",
      "After being out of touch for over 15 years a chance encounter online led to an unlikely pairing. Owldom becoming at first Sensational’s sponsor, then his album producer and finally his last booking agent. Each step following along the artist’s wishes. Owldom offered Sensational all of his best tracks and let him pick. The collaboration proved to be difficult. The album mix was finalised the day before the passing of Sensational became public. A spooky coincidence.",
      "While listening to the tunes one finds hints suggesting that the vocalist was subconsciously already on his way out. ‘Ghosting’ sounds like a deeply emotional self-reflection, while looking at the traces of the past in the rearview mirror. The instrumental itself and the title are five years old. It seems as though the song had simply been waiting to come true.",
      "Sensational, the scarred savant. A malfunctioning receiver transmitting the genius frequency. Creating raw nuggets out of the street’s dust. This is his legacy.",
    ],
    de: [
      "Sensational erschuf sein eigenes Universum, mit sich selbst als zentralem Stern. *Owldom Meets Sensational In The Twilight Zone* ist seine letzte Übertragung. Noch einmal beweist er sein singuläres Talent über ein breites Spektrum ungewöhnlicher Genres hinweg.",
      "Sensational war der MC par excellence der echten Underground-Heads. Er stieg aus dem Nichts ins Geschäft ein und statt sich in Richtung Zentrum zu bewegen, drang er unerschrocken immer weiter in die Peripherie vor. Technische Details oder Hindernisse spielten für ihn keine Rolle. Die Worte mussten raus.",
      "Owldom ist ein Enigma. Gerüchten zufolge ein Urberliner, seit den Achtzigern im Nachtleben unterwegs, seit den Neunzigern als Veranstalter und DJ. Warum debütiert er erst jetzt mit diesem Album? Was hat ihn abgehalten? Der traumatische Missbrauch in seiner Kindheit und der daraus resultierende Hörschaden spielten sicherlich eine Rolle. Dieses Album soll traumatisierten hörgeschädigten Musikern auf der ganzen Welt Mut machen.",
      "Nach über 15 Jahren Funkstille führte eine zufällige Wiederbegegnung im Internet zu dieser ungewöhnlichen Paarung. Owldom wurde zunächst Sensationals Sponsor, dann sein Albumproduzent und schließlich sein letzter Booking-Agent. Jeder Schritt erfolgte ganz nach den Wünschen des Vokalisten. Owldom bot Sensational all seine besten Tracks an und ließ ihn wählen. Die Zusammenarbeit gestaltete sich jedoch nicht einfach. Der Mix des Albums wurde am Tag vor der Bekanntgabe von Sensationals Tod fertiggestellt. Eine unheimliche Koinzidenz.",
      "Beim Anhören der Stücke glaubt man Hinweise darauf zu entdecken, dass der MC unbewusst bereits auf dem Weg in die Anderswelt war. ‚Ghosting‘ klingt wie eine tief bewegte Selbstreflexion, während die Spuren der Vergangenheit im Rückspiegel vorüberziehen. Instrumental und Titel sind fünf Jahre alt. Es scheint, als hätte das Stück nur auf seine Erfüllung gewartet.",
      "Sensational, der vom Leben gezeichnete Inselbegabte. Ein verzerrter Empfänger, verbunden mit der Geniefrequenz. Er formte rohe Perlen aus dem Staub der Straße. Dies ist sein Vermächtnis.",
    ],
  } as Record<Lang, string[]>,
  owldomShort: {
    aka: "Owldom aka Ini7ial aka Bossy",
    en: "Out and about in Berlin’s nightlife since the Eighties. The consequences of childhood trauma, such as his hearing loss, held him back for a long time. The shaman’s path loosened his shackles and let him heal. He enters the experimental playing field, when least expected. Just in time to meet Sensational in the Twilight Zone.",
    de: "Seit den Achtzigern unterwegs im Berliner Nachtleben. Die Folgen der Kindheitstraumata, wie sein Hörschaden, hielten ihn lange zurück. Der Weg des Schamanen lockerte seine Fesseln und ließ ihn heilen. Er betritt das experimentelle Spielfeld, als keiner mehr damit rechnet. Gerade rechtzeitig, um Sensational im Zwielicht zu treffen.",
  } as { aka: string } & T,
  owldom: {
    en: [
      "The man we now know as Owldom experienced a birth complication that led to physical impairments and motor difficulties. To compensate for this, he began playing the drums at an early age. Abuse during his childhood led to difficulties with creative expression. Violence resulted in progressive hearing loss. Despite everything, music had always been his refuge.",
      "In the 1980s, he explored the nightlife of West Berlin. The following decade saw him booking underground artists ranging from breakcore to noise. He tried his hand at DJing, which was extremely difficult for him. Ten years later, he became active in the burgeoning dubstep scene, setting up his own event series.",
      "Fifteen years ago, he suffered a breakdown. Scraping together all his money, he undertook a three-month dieta with the Shipibo, which saved his life. Back in Berlin, he trained to become a shaman. After his final initiation, he started seeing ghosts. With the help of the Huasca Sisters, he fended off a brutal demonic attack. A traffic accident and a brawl left him unable to stand upright for extended periods of time.",
      "About ten years ago, he was finally able to get serious about music production. Under the pseudonym Ini7ial, he entered remix contests, including those for Native Instruments’ Metapop, SoundCloud, and Splice. He then contributed two tracks to Tim Exile’s Endlesss project. In his spare time, he built experimental guitars with Yuri Landman and synthesizer modules with Leaf Audio. After a break, he decided it was time for a new incarnation. Then Owldom came into the world. The project moves between leftfield experiments and broken bass.",
      "Out of the blue, he reconnected with the exceptional MC Sensational. The New Yorker decided to lend his voice to Owldom’s tracks. A partnership was formed. As a result, Owldom also took on the role of booking agent. Sensational died unexpectedly, just a few days before the start of his comeback tour. The joint album was released on Owldom’s birthday, November 3, on his newly founded label, Zeitmasz.",
    ],
    de: [
      "Der Mann, den wir heute als Owldom kennen, litt als Folge von Geburtskomplikationen unter körperlichen Beeinträchtigungen und motorischen Schwierigkeiten. Um dies auszugleichen, begann er schon in jungen Jahren, Schlagzeug zu spielen. Missbrauch in der Kindheit verursachte Schwierigkeiten beim kreativen Ausdruck. Gewalteinwirkung führte zu einem fortschreitenden Hörverlust. Trotz allem war die Musik immer sein Zufluchtsort.",
      "In den Achtzigern erkundete er das Nachtleben von West-Berlin. Im folgenden Jahrzehnt buchte er Underground-Künstler von Breakcore bis Noise. Er versuchte sich als DJ, was ihm extrem schwerfiel. Zehn Jahre später engagierte er sich in der aufkeimenden Dubstep-Szene und initiierte seine eigene Veranstaltungsreihe.",
      "Vor fünfzehn Jahren erlitt er einen Zusammenbruch. Er kratzte sein Geld zusammen und unterzog sich einer dreimonatigen „Dieta“ bei den Shipibo, die ihm das Leben rettete. Zurück in Berlin absolvierte er eine Ausbildung zum Schamanen. Nach seiner letzten Initiation begann er, Geister zu sehen. Mit Hilfe der Huasca Sisters wehrte er einen brutalen dämonischen Angriff ab. Ein Verkehrsunfall und eine Schlägerei führten dazu, dass er jahrelang kaum aufrecht stehen konnte.",
      "Vor etwa zehn Jahren konnte er sich endlich ernsthaft der Musikproduktion widmen. Unter dem Alias Ini7ial nahm er an Remix-Wettbewerben teil, unter anderem für Native Instruments’ Metapop, SoundCloud und Splice. Anschließend steuerte er zwei Tracks zu Tim Exiles Endlesss-Projekt bei. In seiner Freizeit baute er gemeinsam mit Yuri Landman experimentelle Gitarren und mit Leaf Audio Synthesizer-Module. Nach einer Pause beschloss er, dass es Zeit für eine neue Inkarnation war. So kam Owldom auf die Welt. Das Projekt bewegt sich zwischen Leftfield-Experimenten und Broken Bass.",
      "Aus heiterem Himmel kam es zu einem erneuten Kontakt zu dem Ausnahme-MC Sensational. Der New Yorker beschloss, Owldoms Tracks mit seiner Stimme zu bereichern. Eine Partnerschaft entstand. In der Folge übernahm Owldom auch die Rolle des Booking-Agenten. Sensational starb unerwartet, nur wenige Tage vor Beginn seiner Comeback-Tour. Das gemeinsame Album erschien am 3. November, Owldoms Geburtstag, auf seinem neu gegründeten Label Zeitmasz.",
    ],
  } as Record<Lang, string[]>,
  sensationalShort: {
    aka: "Sensational aka Torture aka Perfection",
    en: "After over three decades in the game he still remained the same: An enigma you could not grasp. Even after witnessing him at the highest highs and an all time low you failed to come to grips with what drove him and which devils fought him. He remained raw and never stopped. No prisoners were taken on his ride. Long live Sensational!",
    de: "Nach über drei Jahrzehnten im Geschäft war er immer noch derselbe: ein undurchschaubares Rätsel. Selbst nachdem man ihn auf dem absoluten Höhepunkt und am absoluten Tiefpunkt erlebt hatte, konnte man nicht wirklich begreifen, was ihn antrieb und welche Dämonen ihn plagten. Er blieb unverfälscht und gab niemals auf. Auf seiner Reise machte er keine Gefangenen. Lang lebe Sensational!",
  } as { aka: string } & T,
  sensational: {
    en: [
      "Colin Julius Bobb, better known as Sensational, was born in Guyana and grew up in Brooklyn.",
      "From an early age, Bobb was interested in music, particularly reggae and calypso, before he discovered hip-hop culture. His musical experiments began to take on new forms as he rapped over albums by Karlheinz Stockhausen that he discovered in Bill Laswell’s collection. This would have a lasting impact on his unconventional style.",
      "At the age of 15, he joined the Jungle Brothers, initially as a backup dancer and later as a rapper under the name Torture. He made his debut on *J. Beez Wit Da Remedy* (1994), where he stood out with his extremely fast flows. The album, originally produced by Bill Laswell, was shelved by Warner Bros. due to its experimental nature, and a tamer version was released instead. Four tracks from the original sessions were released in 1999 as *The Payback EP* under the name Crazy Wisdom Masters, on Black Hoodz. It wasn’t until 2020 that Bill Laswell released the complete album as it had originally been planned.",
      "In 1997, Bobb signed with Spectre’s label WordSound, changed his name to Sensational, and released his solo debut, *Loaded With Power*, a groundbreaking lo-fi masterpiece recorded entirely using a four-track recorder, a drum machine, and headphones as a microphone.",
      "Out of principle, Sensational refrained from using outside samples and produced his own sounds. He collaborated with Bootsy Collins, Dan The Automator, Kevin Martin, Mike Ladd, Kouhei Matsunaga, Sofa Surfers, Badawi, Cardopusher, DJ Sotofett, James Ruskin, DJ Scotch Egg, Ghostigital and Marc Acardipane, among others.",
      "The biopic *Crooked* (2002), in which he plays himself, portrays the period of his life at WordSound.",
      "The rest of his career was marked by immense productivity, as well as homelessness and drug problems.",
      "The documentary *The Rise and Fall and Rise of Sensational* (2010) followed his struggle and his survival tactics over the course of five years, featuring interviews with fellow artists such as Bill Laswell, Mike G (Jungle Brothers), and Skiz Fernando.",
      "Sensational, the uncrowned king of outsider hip-hop, remained uncompromisingly true to himself until the very end. In August 2026, just a few days before the start of his comeback tour, he passed away unexpectedly. *Owldom Meets Sensational In The Twilight Zone* is his final album.",
    ],
    de: [
      "Colin Julius Bobb, besser bekannt als Sensational, wurde in Guyana geboren und wuchs in Brooklyn auf.",
      "Schon früh interessierte sich Bobb für Musik, insbesondere Reggae und Calypso, bevor er auf die Hip-Hop-Kultur stieß. Beim experimentellen Rappen über Karlheinz Stockhausen begann sein Stil, neue Formen anzunehmen.",
      "Im Alter von 15 Jahren schloss er sich den Jungle Brothers an, zunächst als Backup-Tänzer, später als Rapper unter dem Namen Torture. Sein Debüt absolvierte er auf *J. Beez Wit Da Remedy* (1994), wo er mit extrem schnellen Flows auffiel. Das ursprünglich von Bill Laswell produzierte Album wurde von Warner Bros. aufgrund seiner experimentellen Natur gestoppt und die zahmere Variante veröffentlicht. Vier Stücke aus den Original-Sessions erblickten 1999 als *The Payback EP* unter dem Künstlernamen Crazy Wisdom Masters auf Black Hoodz das Licht der Welt. Erst 2020 veröffentlichte Bill Laswell das komplette Album so wie es ursprünglich geplant war.",
      "Im Jahr 1997 startete Bobb bei Spectres Label WordSound, änderte den Namen in Sensational und veröffentlichte sein Solo-Debüt *Loaded With Power*, ein wegweisendes Lo-Fi-Monument, das komplett mit einem Vierspur-Rekorder, einer Drum-Machine und Kopfhörern als Mikrofon aufgenommen wurde.",
      "Sensational verzichtete aus Prinzip auf Samples und produzierte seine eigenen Sounds. Er kollaborierte unter anderem mit Bootsy Collins, Dan The Automator, Kevin Martin, Mike Ladd, Kouhei Matsunaga, Sofa Surfers, Badawi, Cardopusher, DJ Sotofett, James Ruskin, DJ Scotch Egg, Ghostigital und Marc Acardipane.",
      "Das Biopic *Crooked* (2002), in dem er sich selbst spielt, porträtiert die Phase seines Lebens bei WordSound.",
      "Sein weiterer Werdegang war geprägt von immenser Produktivität, Obdachlosigkeit und Drogenproblemen.",
      "Der Dokumentarfilm *The Rise and Fall and Rise of Sensational* (2010) begleitete fünf Jahre lang seinen Kampf, seine Überlebenskunst, und zeigte Interviews mit Wegbegleitern wie Bill Laswell, Mike G (Jungle Brothers) und Skiz Fernando.",
      "Sensational, der ungekrönte König des Outsider-Hip-Hops, blieb bis zuletzt kompromisslos eigen. Im August 2026, nur wenige Tage vor Beginn seiner Comeback-Tour, verstarb er überraschend. *Owldom Meets Sensational In The Twilight Zone* ist sein letztes Album.",
    ],
  } as Record<Lang, string[]>,
  // TODO: "For fans of" – drei bis fünf Vergleichs-Artists
  rfo: [] as string[],
};

// Pressefotos: Datei in public/img/press/ ablegen, hier eintragen.
// Die Download-Version liegt in public/presskit/ unter demselben Namen.
// group "owldom": Copyright Boris bzw. Nutzungsrechte Daniel Freed, frei für Berichte über Owldom und das Album
// group "sensational": Fotograf unbekannt, nur im Zusammenhang mit dem Album
export const photos: { file: string; full?: string; alt: T; credit: T; group: "owldom" | "sensational" }[] = [
  { file: "Owldom_2026_Sebastian-Gabsch_01.jpg", full: "/presskit/photos/Owldom_2026_Sebastian-Gabsch_01.jpg", alt: { en: "Owldom, 2026", de: "Owldom, 2026" }, credit: { en: "Photo: Sebastian Gabsch", de: "Foto: Sebastian Gabsch" }, group: "owldom" },
  { file: "Owldom_2026_Sebastian-Gabsch_02.jpg", full: "/presskit/photos/Owldom_2026_Sebastian-Gabsch_02.jpg", alt: { en: "Owldom, 2026", de: "Owldom, 2026" }, credit: { en: "Photo: Sebastian Gabsch", de: "Foto: Sebastian Gabsch" }, group: "owldom" },
  { file: "Owldom_2026_Sebastian-Gabsch_03.jpg", full: "/presskit/photos/Owldom_2026_Sebastian-Gabsch_03.jpg", alt: { en: "Owldom, 2026", de: "Owldom, 2026" }, credit: { en: "Photo: Sebastian Gabsch", de: "Foto: Sebastian Gabsch" }, group: "owldom" },
  { file: "Owldom_2026_Sebastian-Gabsch_08.jpg", full: "/presskit/photos/Owldom_2026_Sebastian-Gabsch_08.jpg", alt: { en: "Owldom, 2026", de: "Owldom, 2026" }, credit: { en: "Photo: Sebastian Gabsch", de: "Foto: Sebastian Gabsch" }, group: "owldom" },
  { file: "Owldom_2026_Sebastian-Gabsch_04.jpg", full: "/presskit/photos/Owldom_2026_Sebastian-Gabsch_04.jpg", alt: { en: "Owldom, 2026", de: "Owldom, 2026" }, credit: { en: "Photo: Sebastian Gabsch", de: "Foto: Sebastian Gabsch" }, group: "owldom" },
  { file: "Owldom_2026_Sebastian-Gabsch_05.jpg", full: "/presskit/photos/Owldom_2026_Sebastian-Gabsch_05.jpg", alt: { en: "Owldom, 2026", de: "Owldom, 2026" }, credit: { en: "Photo: Sebastian Gabsch", de: "Foto: Sebastian Gabsch" }, group: "owldom" },
  { file: "Owldom_2026_Sebastian-Gabsch_06.jpg", full: "/presskit/photos/Owldom_2026_Sebastian-Gabsch_06.jpg", alt: { en: "Owldom, 2026", de: "Owldom, 2026" }, credit: { en: "Photo: Sebastian Gabsch", de: "Foto: Sebastian Gabsch" }, group: "owldom" },
  { file: "Owldom_2026_Sebastian-Gabsch_07.jpg", full: "/presskit/photos/Owldom_2026_Sebastian-Gabsch_07.jpg", alt: { en: "Owldom, 2026", de: "Owldom, 2026" }, credit: { en: "Photo: Sebastian Gabsch", de: "Foto: Sebastian Gabsch" }, group: "owldom" },
  { file: "Sensational_001.jpg", alt: { en: "Sensational", de: "Sensational" }, credit: { en: "Photo courtesy of the Colin Bobb Archive", de: "Foto mit freundlicher Genehmigung des Archivs Colin Bobb" }, group: "sensational" },
  { file: "Sensational_002.jpg", alt: { en: "Sensational", de: "Sensational" }, credit: { en: "Photo courtesy of the Colin Bobb Archive", de: "Foto mit freundlicher Genehmigung des Archivs Colin Bobb" }, group: "sensational" },
  { file: "Sensational_003.jpg", alt: { en: "Sensational", de: "Sensational" }, credit: { en: "Photo courtesy of the Colin Bobb Archive", de: "Foto mit freundlicher Genehmigung des Archivs Colin Bobb" }, group: "sensational" },
  { file: "Sensational_004.jpg", alt: { en: "Sensational", de: "Sensational" }, credit: { en: "Photo courtesy of the Colin Bobb Archive", de: "Foto mit freundlicher Genehmigung des Archivs Colin Bobb" }, group: "sensational" },
  // { file: "owldom-2026-01.jpg", alt: { en: "Owldom, 2026", de: "Owldom, 2026" }, credit: { en: "Photo: NAME", de: "Foto: NAME" }, group: "owldom" },
  // { file: "sensational-archiv-01.jpg", alt: { en: "Sensational", de: "Sensational" }, credit: { en: "Photo courtesy of the Colin Bobb Archive", de: "Foto mit freundlicher Genehmigung des Archivs Colin Bobb" }, group: "sensational" },
];

export const presskit = {
  zip: "/presskit/Owldom_Twilight-Zone_EPK.zip",
  files: [
    { name: { en: "Press text album, English (PDF)", de: "Pressetext Album Englisch (PDF)" } as T, href: "/presskit/Owldom_Meets_Sensational_Pressetext_EN.pdf" },
    { name: { en: "Press text album, German (PDF)", de: "Pressetext Album Deutsch (PDF)" } as T, href: "/presskit/Owldom_Meets_Sensational_Pressetext_DE.pdf" },
    { name: { en: "Press text Owldom, English (PDF)", de: "Pressetext Owldom Englisch (PDF)" } as T, href: "/presskit/Owldom_Bio_EN.pdf" },
    { name: { en: "Press text Owldom, German (PDF)", de: "Pressetext Owldom Deutsch (PDF)" } as T, href: "/presskit/Owldom_Bio_DE.pdf" },
    { name: { en: "Press text Sensational, English (PDF)", de: "Pressetext Sensational Englisch (PDF)" } as T, href: "/presskit/Sensational_Bio_EN.pdf" },
    { name: { en: "Press text Sensational, German (PDF)", de: "Pressetext Sensational Deutsch (PDF)" } as T, href: "/presskit/Sensational_Bio_DE.pdf" },
    { name: { en: "Cover, 3000 px (JPG)", de: "Cover, 3000 px (JPG)" } as T, href: "/presskit/ZTMSZ001_Cover_3000px.jpg" },
    { name: { en: "Zeitmasz logo, white, 2000 px (PNG, transparent)", de: "Zeitmasz-Logo weiß, 2000 px (PNG, transparent)" } as T, href: "/presskit/logo/Zeitmasz_Logo_weiss.png" },
    { name: { en: "Zeitmasz logo, white on black, 2000 px (PNG)", de: "Zeitmasz-Logo weiß auf Schwarz, 2000 px (PNG)" } as T, href: "/presskit/logo/Zeitmasz_Logo_auf_Schwarz.png" },
    { name: { en: "Credits and photo credits (TXT)", de: "Credits und Bildnachweise (TXT)" } as T, href: "/presskit/credits.txt" },
  ],
};

// Zahlen von Hand pflegen. Quelle: Spotify for Artists, Chartmetric.
// Stand 10.11.2026: 960 Streams, 439 Saves, 148 Playlist-Adds (8.11.: 687 / 396 / 121); Chartmetric DE 146.220 -> 88.021 (8.11.: 87.952); weltweit 7.099.707 -> 3.714.470 (8.11.: 3.708.719)
// Stand 11.11.2026: Spotify 918 Streams, 478 Saves, 151 Playlist-Adds, 248 Hörer; gesamt 1.024 Streams inkl. Apple 101, Deezer 7. Raten auf Spotify-Streams gerechnet. Chartmetric 11.11.: DE 88.046, weltweit 3.717.614 (aus dem EPK genommen). Spotify: Hörer in 14 Ländern.
// Stand 12.11.2026: Spotify 1.000 Streams, 500 Saves, 153 Playlist-Adds.
export const stats: { asOf: T; items: { value: string; label: T; sub?: T }[] } = {
  asOf: { en: "12 November 2026", de: "12. November 2026" } as T,
  items: [
    { value: "50 %", label: { en: "save rate on Spotify", de: "Save-Rate auf Spotify" } as T },
    { value: "15 %", label: { en: "of Spotify streams added to playlists", de: "der Spotify-Streams landen in Playlists" } as T },
    { value: "1000+", label: { en: "streams in the first eight days", de: "Streams in den ersten acht Tagen" } as T },
    { value: "14", label: { en: "countries with listeners on Spotify", de: "Länder mit Hörern auf Spotify" } as T, sub: { en: "incl. Germany, USA, UK, Japan, Ukraine, Argentina, Australia", de: "u. a. Deutschland, USA, UK, Japan, Ukraine, Argentinien, Australien" } as T },
  ],
};

export const contact = {
  // TODO: Adressen prüfen
  press: "press@zeitmasz.art",
  booking: "booking@zeitmasz.art",
};

export const ui = {
  en: {
    switchLabel: "Deutsch", switchHref: "/de/",
    listen: "Listen", listenAll: "Listen on all platforms", buyBandcamp: "Buy on Bandcamp",
    loadPlayer: "Load Bandcamp player",
    playerNote: "The player loads from bandcamp.com and sets cookies there.",
    about: "About the album", release: "The album", sideA: "Side A", sideB: "Side B",
    soloNote: "Owldom solo", credits: "Credits", formats: "Formats",
    artist: "Owldom", artists: "Artists", memory: "Sensational", shortBio: "Short bio", longBio: "Bio", readBio: "Read the full bio", readMore: "Read more", singleFiles: "Single files", allPhotos: "Show all photos", showLess: "Show less", photos: "Photos", noPhotos: "Photos follow.",
    download: "Download", presskit: "Presskit", usage: ["Photos of Owldom and the cover photos by Daniel Freed may be used free of charge for editorial coverage of Owldom and this album. Please credit the photographer.", "Sensational photos courtesy of the Colin Bobb Archive. Photographer unknown. For coverage of this album only."], zip: "Download everything (ZIP)",
    numbers: "Numbers", asOf: "As of", contact: "Contact", press: "Press", booking: "Booking",
    support: "Support", supportSlogan: "Help Owldom build his hollow!", supportText: "The goal: €1,000 for the next album.", supportBtn: "Support on GoFundMe",
    rfo: "For fans of", released: "Released", on: "on", digitalOut: "Stream & Download:", physicalOut: "Cassette & CD:", imprint: "Imprint", privacy: "Privacy",
  },
  de: {
    switchLabel: "English", switchHref: "/",
    listen: "Hören", listenAll: "Auf allen Plattformen anhören", buyBandcamp: "Auf Bandcamp kaufen",
    loadPlayer: "Bandcamp-Player laden",
    playerNote: "Der Player lädt von bandcamp.com und setzt dort Cookies.",
    about: "Über das Album", release: "Das Album", sideA: "Seite A", sideB: "Seite B",
    soloNote: "Owldom solo", credits: "Credits", formats: "Formate",
    artist: "Owldom", artists: "Artists", memory: "Sensational", shortBio: "Kurz-Bio", longBio: "Bio", readBio: "Ganze Bio lesen", readMore: "Weiterlesen", singleFiles: "Dateien einzeln", allPhotos: "Alle Fotos zeigen", showLess: "Weniger anzeigen", photos: "Fotos", noPhotos: "Fotos folgen.",
    download: "Herunterladen", presskit: "Presskit", usage: ["Fotos von Owldom und die Coverfotos von Daniel Freed dürfen für redaktionelle Berichte über Owldom und dieses Album kostenlos verwendet werden. Bitte den Fotografen nennen.", "Sensational-Fotos mit freundlicher Genehmigung des Archivs Colin Bobb. Fotograf unbekannt. Nur zur Berichterstattung über dieses Album."], zip: "Alles herunterladen (ZIP)",
    numbers: "Zahlen", asOf: "Stand", contact: "Kontakt", press: "Presse", booking: "Booking",
    support: "Unterstützen", supportSlogan: "Help Owldom build his hollow!", supportText: "Ziel: 1.000 € für das nächste Album.", supportBtn: "Auf GoFundMe unterstützen",
    rfo: "Für Fans von", released: "Erschienen", on: "auf", digitalOut: "Stream & Download:", physicalOut: "Kassette & CD:", imprint: "Impressum", privacy: "Datenschutz",
  },
};
