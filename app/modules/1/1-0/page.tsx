"use client";

import Link from "next/link";
import { ChevronLeft, ArrowRight, PlayCircle } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Almodul11() {
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
              href="/modules/1"
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
              Vissza a modulhoz
            </Link>

            <ThemeToggle />
          </div>

          <h1 className="
            text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight 
            bg-linear-to-r from-blue-600 to-cyan-600 
            dark:from-blue-400 dark:to-cyan-400 
            bg-clip-text text-transparent mb-4
          ">
            1.0 A hálózatok hatása az életünkre
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Görgess lefelé – lássuk, miért is olyan fontosak a hálózatok a mindennapjainkban!
          </p>
        </header>

        {/* Tartalom – prose + custom */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* 1.1.1 Hálózatok kötnek minket össze */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              1. Hálózatok kötnek minket össze
            </h2>

            <p className="mb-4">
              Az ember egyik legnagyobb szüksége a kapcsolódás – majdnem olyan fontos, mint a levegő, a víz vagy az étel. A kommunikáció nélkül nehéz lenne túlélni, de ma már sokkal többről van szó.
            </p>

            <p className="mb-4">
              A hálózatoknak köszönhetően soha nem látott módon vagyunk összekötve egymással. Ötleteidet azonnal megoszthatod a világ másik felén élőkkel, és azok valósággá válhatnak. Hírek, felfedezések, események másodpercek alatt terjednek világszerte.
            </p>

            <p className="font-medium">
              Egy barátoddal, aki kontinenseken túl él, játszol együtt online, csevegsz videón – mindez hálózatok nélkül elképzelhetetlen lenne.
            </p>
          </section>

          {/* 1.1.2 Videó – Cisco Networking Academy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              2. A Cisco Networking Academy tanulási módszere
            </h2>

            <p className="mb-6">
              1997 óta a Cisco célja, hogy a digitális világ tehetségeit képezze. Nem születnek világmegváltók – azokká válnak a megfelelő tudással és eszközökkel.
            </p>

          </section>

          {/* 1.1.3 Nincsenek határok */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              3. Nincsenek határok
            </h2>

            <p className="mb-4">
              A hálózati technológia az egyik legnagyobb változás a történelemben. A nemzeti határok, távolságok és fizikai korlátok egyre kevésbé számítanak.
            </p>

            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>Az internet teljesen átalakította a társadalmi, kereskedelmi, politikai és személyes kapcsolatainkat.</li>
              <li>Globális közösségek jönnek létre – helytől és időzónától függetlenül dolgozhatsz együtt másokkal.</li>
              <li>Az információ szabad áramlása növeli a termelékenységet és az innovációt.</li>
              <li>A felhőszolgáltatásokkal bárhonnan, bármikor elérheted a fájljaidat és appjaidat – vonaton, parkban, hegyen, bármilyen eszközről.</li>
            </ul>

            <div className="my-8 p-6 bg-linear-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-800/40 text-center">
              <p className="text-xl font-medium text-blue-700 dark:text-blue-300">
                Egy világ, ahol a távolság már nem akadály.
              </p>
            </div>
          </section>
        </article>

        {/* Következő teaser */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Következő: 1.1 – A hálózat részei
          </p>
          <Link
            href="/modules/1/1-1"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-blue-600 text-white hover:bg-blue-700 transition-colors
              shadow-md hover:shadow-lg
            "
          >
            Tovább az első technikai részhez <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}