"use client";

import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

import Img1 from "@/app/images/7/7-3/1.png";
import Img2 from "@/app/images/7/7-3/2.png";
import Img3 from "@/app/images/7/7-3/3.png";

export default function Almodul73() {
  return (
    <div className="
      min-h-screen 
      bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 
      dark:from-[#0d1117] dark:via-[#0a0e15] dark:to-[#05070f] 
      text-gray-900 dark:text-white
      transition-colors duration-300
    ">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 md:py-16">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
            <Link
              href="/modules/7"
              className="
                inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                bg-white/70 dark:bg-gray-800/50 backdrop-blur-md
                border border-gray-200/70 dark:border-white/10
                text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300
                hover:border-blue-400/50 dark:hover:border-blue-500/40
                shadow-sm transition-all duration-300 active:scale-95
              "
            >
              <ChevronLeft size={18} />
              Vissza a 7. modulhoz
            </Link>

            <ThemeToggle />
          </div>

          <h1 className="
            text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight 
            bg-linear-to-r from-blue-600 to-cyan-600 
            dark:from-blue-400 dark:to-cyan-400 
            bg-clip-text text-transparent mb-4
          ">
            7.3 Switch kapcsolási módok és sebességek
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Görgess lefelé – megnézzük, hogyan továbbítanak a Cisco switch-ek kereteket, milyen pufferelés van, és hogyan állítjuk be a sebességet/duplexet.
          </p>
        </header>

        {/* Tartalom */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* 7.4.1 Kerettovábbítási módszerek */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              1. Kerettovábbítási módszerek Cisco switch-eken
            </h2>

            <p className="mb-4">
              A switch-ek két fő módon továbbítanak kereteket – a módszer attól függ, milyen az eszköz és a hálózati környezet.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              {/* Tárol-és-továbbít */}
              <div className="p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
                  Tárol-és-továbbít (Store-and-Forward)
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A teljes keretet beolvassa</li>
                  <li>CRC ellenőrzést végez (hibás-e a keret?)</li>
                  <li>Ha hibás → eldobja (nem pazarol sávszélességet hibás keretekkel)</li>
                  <li>Ha jó → cél MAC alapján továbbítja</li>
                  <li>Előny: magas hibatűrés, QoS támogatása (pl. VoIP-nál fontos)</li>
                  <li>Hátrány: nagyobb késleltetés (latency)</li>
                </ul>
              </div>

              {/* Közvetlen kapcsolás */}
              <div className="p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                  Közvetlen kapcsolás (Cut-Through)
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Csak a cél MAC-címet olvassa ki (első 6 bájt)</li>
                  <li>Azonnal továbbítja (még ha nem is érkezett be a teljes keret)</li>
                  <li>Nincs CRC ellenőrzés → gyorsabb (alacsony latency)</li>
                  <li>Hátrány: hibás kereteket is továbbíthat (de a cél eszköz eldobja)</li>
                  <li>Két változata:</li>
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Gyorskapcsolás (Fast-forward): legkisebb késleltetés</li>
                    <li>Töredékmentes (Fragment-free): első 64 bájtot megnézi (ütközés ellen)</li>
                  </ul>
                </ul>
              </div>
            </div>

            <p className="mt-6 font-medium">
              Ma már sok switch automatikusan vált: ha hibák vannak, átmegy tárol-és-továbbítba, ha tiszta a hálózat → vissza gyorskapcsolásba.
            </p>
          </section>

          {/* 7.4.3 Memória pufferelés */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              2. Memória pufferelés a switch-eken
            </h2>

            <p className="mb-4">
              Ha a célport foglalt (torlódás), a switch puffereli (tárolja) a keretet, amíg továbbítható nem lesz.
            </p>

            <p className="mb-4 font-medium">Két módszer:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800/40">
                <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-300">Port-alapú pufferelés</h3>
                <p>Minden portnak saját dedikált memóriája van. Egyszerű, de ha egy port megtelik, a keret eldobódhat.</p>
              </div>

              <div className="p-6 bg-purple-50/70 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800/40">
                <h3 className="text-xl font-bold mb-3 text-purple-700 dark:text-purple-300">Megosztott pufferelés</h3>
                <p>Az összes port megoszt egy nagy memóriaterületet. Nagyobb kereteket tud tárolni, kevesebb eldobás (jó aszimmetrikus sebességnél, pl. 10 Gbit/s szerver + 1 Gbit/s PC-k).</p>
              </div>
            </div>

            {/* Ábra helye – ha van */}
            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm text-center">
              <p className="text-gray-500 dark:text-gray-400 italic mb-4">
                <Image
                  src={Img1}
                  alt=""
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </p>
            </div>
          </section>

          {/* 7.4.4 Sebesség és duplexitás beállítások */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              3. Sebesség és duplexitás beállítások
            </h2>

            <p className="mb-4">
              Minden switch porton be kell állítani (vagy auto-negotiation-re hagyni) a sebességet és duplex módot.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Full-duplex</strong>: egyszerre küld és fogad (ma már alap)</li>
              <li><strong>Half-duplex</strong>: csak egyszerre egy irány (régi huboknál volt gyakori)</li>
              <li>Sebesség: 10/100/1000 Mbps (Gigabit), 10 Gbps stb.</li>
            </ul>

            <p className="mt-6 font-medium">
              Legjobb: mindkét oldalon auto-negotiation (automatikus egyeztetés) – ha mindkettő támogatja, full-duplex + legnagyobb közös sebesség lesz.
            </p>

            <p className="mt-4">
              <strong>Probléma duplex eltérésnél:</strong> Ha egyik oldalon full, másikon half → sok ütközés, lassú hálózat.
            </p>

            {/* Duplex eltérés ábra – ha van */}
            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm text-center">
              <p className="text-gray-500 dark:text-gray-400 italic mb-4">
                <Image
                  src={Img2}
                  alt=""
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </p>
            </div>

            <p className="mt-6">
              Gigabit Ethernet csak full-duplexben működik – nincs half-duplex támogatás.
            </p>
          </section>

          {/* 7.4.5 Auto-MDIX */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              4. Auto-MDIX – kábel típus automatikus felismerése
            </h2>

            <p className="mb-4">
              Régebben egyenes vagy keresztkötésű kábelt kellett használni attól függően, hogy mit kötünk össze (switch-switch → kereszt, switch-PC → egyenes).
            </p>

            <p className="mb-4">
              Az Auto-MDIX funkcióval a switch automatikusan felismeri a kábel típusát, és belsőleg átkonfigurálja a portot – így bármilyen kábellel működik (egyenes vagy kereszt).
            </p>

            <p className="mt-6 font-medium">
              Cisco switch-eken alapértelmezetten be van kapcsolva (IOS 12.2(18)SE vagy újabb).
            </p>

            <p className="mt-4">
              Parancs: <code>mdix auto</code> (interfész konfigurációban engedélyezhető/letiltható).
            </p>

            {/* Ábra helye – kábel típusok */}
            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm text-center">
              <p className="text-gray-500 dark:text-gray-400 italic mb-4">
                <Image
                  src={Img3}
                  alt=""
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </p>
            </div>
          </section>
        </article>

        {/* Záró rész – modul vége */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Gratulálok! Végeztünk a 7. modullal (Ethernet kapcsolás) 🎉
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Most már érted az Ethernet kereteket, MAC-címeket, switch működést és kapcsolási módokat.
          </p>

          <Link
            href="/"
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-xl
              bg-linear-to-r from-blue-600 to-cyan-600 text-white
              hover:from-blue-700 hover:to-cyan-700 transition-all
              shadow-lg hover:shadow-xl
            "
          >
            Vissza az összes modulhoz <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}