"use client";

import { useRouter } from "next/navigation";
import { Network, Clock } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { modules } from "@/lib/modules";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="
      min-h-screen 
      bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 
      dark:from-[#0d1117] dark:via-[#0a0e15] dark:to-[#05070f] 
      text-gray-900 dark:text-white
      transition-colors duration-300
    ">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16 gap-6">
          <div>
            <h1 className="
              text-4xl sm:text-5xl font-bold tracking-tight 
              bg-linear-to-r from-blue-600 to-cyan-600 
              dark:from-blue-400 dark:to-cyan-400 
              bg-clip-text text-transparent
            ">
              CCNA 200-301
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Érthetőbben, emberibben, ábrákkal és magyarázatokkal
            </p>
          </div>

          <ThemeToggle />
        </div>

        {/* Modul kártyák */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {modules.map((mod) => {
            const isOff = mod.off === true;

            const cardClasses = `
              group relative overflow-hidden rounded-2xl p-7 md:p-8
              bg-white dark:bg-gray-900/60
              border border-gray-200 dark:border-gray-700/60
              shadow-sm dark:shadow-lg dark:shadow-black/20
              transition-all duration-400
              ${isOff 
                ? 'opacity-60 cursor-not-allowed' 
                : 'hover:shadow-md dark:hover:shadow-blue-900/30 hover:border-blue-400 dark:hover:border-blue-600/50 hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer'
              }
            `;

            const content = (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <div className="
                    w-16 h-16 rounded-xl flex items-center justify-center
                    bg-blue-50 dark:bg-blue-950/40
                    border border-blue-200/50 dark:border-blue-800/40
                  ">
                    <Network size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="
                    text-5xl font-black text-gray-300 dark:text-gray-700/70
                    group-hover:text-blue-500 dark:group-hover:text-blue-500/80
                    transition-colors
                  ">
                    {mod.id}
                  </div>
                </div>

                <h2 className="
                  text-2xl font-bold mb-3 
                  text-gray-800 dark:text-gray-100 
                  ${!isOff && 'group-hover:text-blue-700 dark:group-hover:text-blue-300'}
                  transition-colors
                ">
                  {mod.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
                  {mod.description || "Alapoktól gyakorlatig – érthető magyarázatok, sok ábra és példa"}
                </p>

                <div className="flex items-center justify-between text-sm">
                  {isOff ? (
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                      <Clock size={16} />
                      <span>Készülőben</span>
                    </div>
                  ) : (
                    <span className="text-transparent"> </span> // helykitöltő
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
                <div key={mod.id} className={cardClasses}>
                  {content}
                </div>
              );
            }

            return (
              <button
                key={mod.id}
                onClick={() => router.push(`/modules/${mod.slug}`)}
                className={cardClasses}
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}