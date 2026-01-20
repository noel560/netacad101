"use client";

import Link from "next/link";
import { ChevronLeft, Network, Clock } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

type Tema = {
  slug: string;
  title: string;
  shortDesc: string;
  off?: boolean;
};

const temak: Tema[] = [
  {
    slug: "7-0",
    title: "7.0. Ethernet keret",
    shortDesc: "Az Ethernet alrétegek kapcsolata a keret mezőivel.",
  },
  {
    slug: "7-1",
    title: "7.1. Ethernet MAC-cimek",
    shortDesc: "Az Ethernet MAC-címek leírása.",
  },
  {
    slug: "7-2",
    title: "7.2. MAC-cimtábla",
    shortDesc: "A kapcsoló MAC-címtáblájának felépítése és a kerettovábbítás.",
  },
  {
    slug: "7-3",
    title: "7.3. Switch kapcsolasi módok es sebességek",
    shortDesc: "Kapcsolási módszerek és portbeállítások ismertetése 2. rétegbeli switcheken.",
  },
];

export default function Modul7() {
  return (
    <div className="
      min-h-screen 
      bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 
      dark:from-[#0d1117] dark:via-[#0a0e15] dark:to-[#05070f] 
      text-gray-900 dark:text-white
      transition-colors duration-300
    ">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-16">
        {/* Header / Vissza + Cím + Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16 gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link
              href="/"
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
              Főoldal
            </Link>

            <h1 className="
              text-4xl sm:text-5xl font-bold tracking-tight 
              bg-linear-to-r from-blue-600 to-cyan-600 
              dark:from-blue-400 dark:to-cyan-400 
              bg-clip-text text-transparent
            ">
              7. modul
            </h1>
          </div>

          <ThemeToggle />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800 dark:text-gray-100">
            Ethernet kapcsolás: keretek, MAC-tábla, switch működése lépésről lépésre
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Kattints egy almodulra a részletes, érthető tananyagért – lépésről lépésre magyarázatokkal és ábrákkal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {temak.map((tema) => {
            const isOff = tema.off === true;

            const cardClasses = `
              group relative overflow-hidden rounded-2xl p-7 md:p-8
              bg-white dark:bg-gray-900/60
              border border-gray-200 dark:border-gray-700/60
              shadow-sm dark:shadow-lg dark:shadow-black/20
              hover:shadow-md dark:hover:shadow-blue-900/30
              hover:border-blue-400 dark:hover:border-blue-600/50
              transition-all duration-400 hover:-translate-y-1.5 active:scale-[0.98]
              ${isOff ? 'opacity-60 cursor-not-allowed' : ''}
            `;

            const content = (
              <>
                <h3 className="
                  text-2xl font-bold mb-3 
                  text-gray-800 dark:text-gray-100 
                  group-hover:text-blue-700 dark:group-hover:text-blue-300
                  transition-colors
                ">
                  {tema.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
                  {tema.shortDesc}
                </p>

                <div className="flex items-center justify-between text-sm">
                  {isOff ? (
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                      <Clock size={16} />
                      <span>Készülőben</span>
                    </div>
                  ) : (
                    <span className="text-transparent"> </span>
                  )}
                  {!isOff && (
                    <span className="
                      text-blue-600 dark:text-blue-400 
                      group-hover:text-blue-700 dark:group-hover:text-blue-300
                      transition-colors flex items-center gap-1.5 font-medium
                    ">
                      Elkezdés →
                    </span>
                  )}
                </div>
              </>
            );

            if (isOff) {
              return (
                <div key={tema.slug} className={cardClasses}>
                  {content}
                </div>
              );
            }

            return (
              <Link
                key={tema.slug}
                href={`/modules/7/${tema.slug}`}
                className={cardClasses}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}