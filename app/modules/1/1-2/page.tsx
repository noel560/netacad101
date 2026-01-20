"use client";

import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

import Img1 from "@/app/images/1/1-2/1.png";
import Img2 from "@/app/images/1/1-2/fizikai.png";
import Img3 from "@/app/images/1/1-2/logikai.png";

export default function Almodul12() {
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
            1.2 A hálózatok megjelenítése
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Görgess lefelé – megtanuljuk, hogyan rajzoljuk le a hálózatot, és miért fontos ez a tervezéshez és hibakereséshez.
          </p>
        </header>

        {/* Tartalom */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* 1.3.1 A hálózatok megjelenítése */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              1. Szimbólumok és alapfogalmak a hálózati ábrákon
            </h2>

            <p className="mb-4">
              A hálózattervezőknek és rendszergazdáknak gyorsan át kell látniuk, hogyan néz ki egy hálózat: mi csatlakozik mihez, hol vannak az eszközök, milyen kábelekkel kötik össze őket.
            </p>

            <p className="mb-4">
              Erre szolgálnak a <strong>hálózati diagramok</strong> (topológiai ábrák). Ezek speciális szimbólumokat használnak az eszközök és kapcsolatok jelölésére.
            </p>

            {/* Szimbólumok ábrája */}
            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="relative w-full aspect-4/3 md:aspect-video rounded-lg overflow-hidden mx-auto max-w-4xl">
                <Image
                  src={Img1}  // Tedd be ide a saját képedet public/images/1/1-2/network-symbols.png néven
                  alt="Hálózati szimbólumok: végberendezések, közvetítő eszközök, média"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
                Tipikus hálózati szimbólumok: végberendezések (PC, telefon), közvetítő eszközök (switch, router) és média (kábel, wireless)
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Fontos kifejezések</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>NIC (Network Interface Card)</strong> – hálózati kártya: fizikailag csatlakoztatja az eszközt a hálózathoz</li>
              <li><strong>Fizikai port</strong> – aljzat/eszközön lévő csatlakozó, ahova kábel megy</li>
              <li><strong>Interfész</strong> – routeren speciális port, ami más hálózatokhoz csatlakozik (pl. G0/0, G0/1)</li>
            </ul>

            <p className="mt-4 italic text-gray-600 dark:text-gray-400">
              Megjegyzés: A "port" és "interfész" szavakat sokszor felcserélve használják.
            </p>
          </section>

          {/* 1.3.2 Topológiai ábrák */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              2. Topológiai ábrák típusai
            </h2>

            <p className="mb-4">
              A topológiai ábrák vizuális térképet adnak a hálózatról. Két fő típus létezik:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              {/* Fizikai topológia */}
              <div className="p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                  Fizikai topológiai ábra
                </h3>
                <p className="mb-4">
                  Megmutatja az eszközök valós fizikai elhelyezkedését: hol vannak a szobákban, rack-eken, milyen kábelekkel kötik össze őket.
                </p>

                <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={Img2}  // Tedd be a saját fizikai topológia képedet
                    alt="Fizikai hálózati topológia ábra: szobák, rack-ek, eszközök elhelyezkedése"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 italic text-center">
                  Példa: szerver szoba (2158), IT iroda (2159), osztálytermek – eszközök rack-enként
                </p>
              </div>

              {/* Logikai topológia */}
              <div className="p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-300">
                  Logikai topológiai ábra
                </h3>
                <p className="mb-4">
                  Megmutatja az eszközöket, portokat, IP-cím tartományokat és hogyan kapcsolódnak logikailag – nem érdekli a fizikai hely.
                </p>

                <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={Img3}  // Tedd be a saját logikai topológia képedet
                    alt="Logikai hálózati topológia ábra: router portok, hálózati címek, kapcsolódások"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 italic text-center">
                  Példa: router (R1) portjai (G0/0, G0/1), hálózatok (192.168.10.0, stb.)
                </p>
              </div>
            </div>

            <p className="mt-6">
              <strong>Miért fontos ez?</strong> A fizikai ábra segít a kábelhúzáshoz és hibakereséshez a helyszínen. A logikai ábra segít megérteni az IP-címzést és útválasztást – ez vizsgán és valós munkában is kulcsfontosságú.
            </p>

            <p className="mt-4 italic text-gray-600 dark:text-gray-400">
              Ha több példát szeretnél látni, keress rá: "network topology diagrams Cisco" – rengeteg hasonló ábrát találsz.
            </p>
          </section>
        </article>

        {/* Következő teaser */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Következő: 1.3 – Gyakori hálózattípusok
          </p>
          <Link
            href="/modules/1/1-3"  // ha már van következő, különben hagyd ki
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-blue-600 text-white hover:bg-blue-700 transition-colors
              shadow-md hover:shadow-lg
            "
          >
            Következő almodul <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}