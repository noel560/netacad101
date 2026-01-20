"use client";

import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

import intermediaryImg from "@/app/images/1/1-1/intermediary.png";
import clientServerImg from "@/app/images/1/1-1/clientserver.png";
import printerImg from "@/app/images/1/1-1/printer.png"

export default function Almodul11() {
  return (
    <div
      className="
      min-h-screen 
      bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 
      dark:from-[#0d1117] dark:via-[#0a0e15] dark:to-[#05070f] 
      text-gray-900 dark:text-white
      transition-colors duration-300
    "
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 md:py-16">
        {/* Header: Vissza + Cím + ThemeToggle */}
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

          <h1
            className="
            text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight 
            bg-linear-to-r from-blue-600 to-cyan-600 
            dark:from-blue-400 dark:to-cyan-400 
            bg-clip-text text-transparent mb-4
          "
          >
            1.1 A hálózatok részei
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Görgess lefelé – lépésről lépésre megmutatjuk, miből áll egy
            hálózat, és hol találod ezeket otthon vagy az iskolában.
          </p>
        </header>

        {/* Tananyag tartalom – prose stílus + custom Tailwind */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* 1.2.1 Állomások */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              1. Állomások (végberendezések / hostok)
            </h2>

            <p>
              Ha csatlakozni akarsz az internethez vagy bármilyen hálózathoz,
              először a saját eszközödet (telefont, laptopot, tabletet) kell
              bekötni. Ezeket az eszközöket hívjuk <strong>állomásoknak</strong>{" "}
              (végberendezés, host).
            </p>

            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                Minden állomásnak van <strong>IP-címe</strong> – ez olyan, mint
                a házszám a hálózaton belül.
              </li>
              <li>
                Az IP-cím alapján tudja a hálózat, ki kicsoda, és hova kell
                küldeni az adatokat.
              </li>
              <li>
                Két fő típus:
                <ul className="list-circle pl-6 mt-2 space-y-2">
                  <li>
                    <strong>Kliens</strong> – kérdez (pl. böngésző, email
                    program, Spotify app)
                  </li>
                  <li>
                    <strong>Szerver</strong> – válaszol, szolgáltat (pl.
                    weboldal, email szerver, Netflix szerver)
                  </li>
                </ul>
              </li>
            </ul>

            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <p className="text-center italic text-gray-600 dark:text-gray-400 mb-4">
                <Image
                  src={clientServerImg}
                  alt=""
                  width={1200}
                  height={675}
                  className="object-contain"
                  priority={false}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </p>
              <p className="text-sm text-center text-gray-500 dark:text-gray-500">
                Egy kliens (pl. a te böngésződ) kér egy weboldalt, a szerver
                elküldi a választ.
              </p>
            </div>

            <p className="mt-6">
              <strong>Gyakorlat otthon:</strong> Nyisd meg a Beállítások →
              Hálózat → Wi-Fi részleteit – ott látod az IP-címedet. Ez az
              állomásod "házszámja".
            </p>
          </section>

          {/* 1.2.2 Egyenrangú hálózatok */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              2. Egyenrangú (peer-to-peer) hálózatok
            </h2>

            <p>
              Nem mindig van külön szerver és kliens. Otthoni hálózatban gyakran
              minden számítógép egyszerre tud szerver és kliens lenni – ezt
              hívjuk <strong>peer-to-peer</strong> hálózatnak.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-green-50/70 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-800/40">
                <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-300">
                  Előnyök
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Könnyen beállítható</li>
                  <li>Nincs szükség drága szerverre</li>
                  <li>Alacsony költség</li>
                  <li>Jó fájlmegosztásra, nyomtató megosztásra</li>
                </ul>
              </div>

              <div className="p-6 bg-red-50/70 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-800/40">
                <h3 className="text-xl font-semibold mb-3 text-red-700 dark:text-red-300">
                  Hátrányok
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nincs központi adminisztráció</li>
                  <li>Kevesebb biztonság</li>
                  <li>Nem skálázódik jól (nagy hálózatban lassul)</li>
                  <li>Egy gép túlterhelődhet, ha sokan használják</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 1.2.3 Végberendezések – adatok útja */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              3. Végberendezések szerepe az adatáramlásban
            </h2>

            <p>
              A hálózaton áramló adatok mindig egy végberendezéstől indulnak és
              egy végberendezésnél érnek véget.
            </p>

            <div className="my-8 p-6 bg-blue-50/50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800/40 text-center">
              <p className="text-lg font-medium">
                Adat indul → áthalad a hálózaton → megérkezik a célhoz
              </p>
            </div>
          </section>

          {/* 1.2.4 Közvetítő eszközök */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              4. Közvetítő eszközök
            </h2>

            <p>
              Ezek kötik össze a végberendezéseket, és döntenek arról, merre
              menjen az adat (router, switch, stb.).
            </p>

            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>Újragenerálják és továbbítják a jelet</li>
              <li>Útvonalakat tartanak karban</li>
              <li>Hibákat jeleznek</li>
              <li>Prioritás szerint irányítanak</li>
              <li>Biztonsági szabályokat alkalmaznak (pl. tűzfal)</li>
            </ul>

            <div className="my-8 p-6 bg-purple-50/50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800/40">
              <p className="text-center italic">
                <Image
                  src={intermediaryImg}
                  alt="Közvetítő hálózati eszközök ábrája"
                  width={1200}   // eredeti kép szélessége (kb. érték, a te képed alapján állítsd)
                  height={675}
                  className="object-contain"
                  priority={false} // ha nem az első kép az oldalon, false maradhat
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </p>
            </div>

            <p className="mt-4 font-medium">
              <strong>Megjegyzés:</strong> Minden közvetítő eszköz valamilyen
              szinten ismétlő (repeater) is – újragenerálja a jelet.
            </p>
          </section>

          {/* 1.2.5 Hálózati átviteli közeg */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              5. Átviteli közeg (media)
            </h2>

            <p>Három fő típus létezik ma:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="p-6 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800/40 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Rézkábel (twisted pair)
                </h3>
                <p>Elektromos impulzusok</p>
              </div>
              <div className="p-6 bg-cyan-50/70 dark:bg-cyan-950/30 rounded-xl border border-cyan-200 dark:border-cyan-800/40 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Üvegszál (fiber-optic)
                </h3>
                <p>Fényimpulzusok</p>
              </div>
              <div className="p-6 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800/40 text-center">
                <h3 className="text-xl font-semibold mb-3">Vezeték nélküli</h3>
                <p>Elektromágneses hullámok</p>
              </div>
            </div>

            <p className="font-medium mt-6">Mit nézzünk, ha választunk?</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Milyen messzire kell vinni a jelet?</li>
              <li>
                Milyen környezetbe tesszük (por, nedvesség, interferencia)?
              </li>
              <li>Mennyi adat, milyen sebességgel?</li>
              <li>Mennyi a költség (anyag + telepítés)?</li>
            </ul>
          </section>
        </article>

        {/* Következő almodul teaser */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Következő: 1.2 – A hálózat részei (folytatás)
          </p>
          <Link
            href="/modules/1/1-2" // ha már megvan, különben hagyd ki vagy kommenteld ki
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
