"use client";

import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

import Img1 from "@/app/images/7/7-2/1.png";
import Img2 from "@/app/images/7/7-2/2.png";

export default function Almodul72() {
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
            7.2 A MAC-címtábla
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Görgess lefelé – megnézzük, hogyan tanulja meg a switch a MAC-címeket, és hogyan dönti el, hova továbbítsa a kereteket.
          </p>
        </header>

        {/* Tartalom */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* 7.3.1 A kapcsolás alapjai */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              1. A kapcsolás alapjai – miért jobb a switch, mint a hub?
            </h2>

            <p className="mb-4">
              Ha egy eszköz (hub) minden keretet minden portra továbbítana, az hatalmas torlódást okozna, és a hálózat leállna.
            </p>

            <p className="mb-4">
              A 2. rétegbeli Ethernet switch viszont okosan dönt: kizárólag a <strong>MAC-címek</strong> alapján továbbít vagy dob el kereteket. Nem érdekli az adat tartalma (IPv4, ARP, IPv6 stb.).
            </p>

            <p className="font-medium mt-6">
              A switch a MAC-címtáblát használja döntésekhez – ez egy dinamikus táblázat, ami portokat köt MAC-címekhez.
            </p>

            {/* Üres tábla ábra – ha van képed */}
            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm text-center">
              <div className="relative w-full aspect-4/3 md:aspect-video rounded-lg overflow-hidden mx-auto max-w-4xl">
                <Image
                  src={Img1}  // Tedd be ide a képet: üres MAC-tábla + 4 host
                  alt="Switch üres MAC-címtáblával – négy csatlakoztatott PC"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
                Switch bekapcsolás után: a MAC-címtábla még üres
              </p>
            </div>

            <p className="mt-6 italic text-gray-600 dark:text-gray-400">
              Megjegyzés: A MAC-címtáblát néha CAM-táblának (Content Addressable Memory) is hívják.
            </p>
          </section>

          {/* 7.3.2 A switch tanulási és továbbítási folyamatai */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              2. Tanulás és továbbítás – hogyan működik?
            </h2>

            <p className="mb-4">
              A switch két fő dolgot csinál:
            </p>

            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Tanulás</strong>: Minden bejövő keret forrás MAC-címét és bejövő portját megnézi.
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Ha új MAC-cím → hozzáadja a táblához a porttal együtt</li>
                  <li>Ha már van → frissíti az időzítőt (általában 5 percig él egy bejegyzés)</li>
                  <li>Ha ugyanaz a MAC másik porton → frissíti (mozgás esetén)</li>
                </ul>
              </li>

              <li>
                <strong>Továbbítás</strong>: A cél MAC-cím alapján dönt:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Ha ismeri a cél MAC-t → csak a megfelelő portra küldi</li>
                  <li>Ha nem ismeri → minden portra kiküldi (flooding), kivéve a bejövő portot</li>
                </ul>
              </li>
            </ol>

            {/* Tanulási folyamat ábra – PC-A küld PC-D-nek */}
            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="relative w-full aspect-4/3 md:aspect-video rounded-lg overflow-hidden mx-auto max-w-4xl">
                <Image
                  src={Img2}  // Tedd be ide a képet: PC-A küld, switch tanul PC-A MAC-jét
                  alt="Switch tanulási folyamat: PC-A keretet küld, switch hozzáadja a táblához"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic text-center">
                PC-A küld keretet → switch hozzáadja PC-A MAC-címét a 1-es porthoz
              </p>
            </div>

            <p className="mt-6 font-medium">
              Példa: Ha PC-D válaszol PC-A-nak, a switch látja PC-D MAC-jét a 4-es porton → hozzáadja a táblához.
            </p>
          </section>

          {/* 7.3.3 Keretek szűrése */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              3. Keretek szűrése – hogyan spórol időt és sávszélességet?
            </h2>

            <p className="mb-4">
              Ha a switch már ismeri a cél MAC-címet a táblázatból, csak a megfelelő portra küldi a keretet – ez szűrés (filtering).
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Ismert cél MAC → közvetlen továbbítás (egy portra)</li>
              <li>Ismeretlen cél MAC → flooding (minden portra, kivéve bejövő)</li>
              <li>Ha a forrás és cél ugyanazon a porton van → eldobja (nem küldi vissza)</li>
            </ul>

            <p className="mt-6 font-medium">
              Ezért sokkal hatékonyabb a switch, mint a régi hub – csak oda küldi az adatot, ahova kell.
            </p>
          </section>
        </article>

        {/* Következő teaser */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Következő: 7.3 – Switch kapcsolási módok és sebességek
          </p>
          <Link
            href="/modules/7/7-3"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-blue-600 text-white hover:bg-blue-700 transition-colors
              shadow-md hover:shadow-lg
            "
          >
            Tovább a kapcsolási módokhoz <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}