"use client";

import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

import Img1 from "@/app/images/7/7-0/1.png";
import Img2 from "@/app/images/7/7-0/2.png";
import Img3 from "@/app/images/7/7-0/3.png";
import Img4 from "@/app/images/7/7-0/4.png";

export default function Almodul70() {
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
            7.0 Ethernet keret
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Görgess lefelé – lépésről lépésre megnézzük, hogyan néz ki egy Ethernet keret, és miért fontos ez a 2. rétegben.
          </p>
        </header>

        {/* Tartalom */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* 7.1.1 Ethernet beágyazás */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              1. Ethernet beágyazás – hol helyezkedik el?
            </h2>

            <p className="mb-4">
              Az Ethernet a mai vezetékes LAN-ok leggyakoribb technológiája (a másik a vezeték nélküli WLAN). Vezetékes kommunikációt használ: csavart érpár kábel, optikai szál vagy akár koaxiális kábel.
            </p>

            <p className="mb-4">
              Az Ethernet az OSI-modell két rétegében dolgozik:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Adatkapcsolati réteg (2. réteg)</strong> – keretek, MAC-címek</li>
              <li><strong>Fizikai réteg (1. réteg)</strong> – jelek, kábelek, sebességek</li>
            </ul>

            <p className="mt-6 font-medium">
              Támogatott sebességek (IEEE 802.3 szabványok):
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>10 Mbit/s (klasszikus Ethernet)</li>
              <li>100 Mbit/s (Fast Ethernet)</li>
              <li>1000 Mbit/s (Gigabit Ethernet)</li>
              <li>10 Gbit/s, 40 Gbit/s, 100 Gbit/s (mai nagysebességű hálózatok)</li>
            </ul>

            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm text-center">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mx-auto max-w-4xl">
                <Image
                  src={Img1}
                  alt="Ethernet az OSI-modellben – LLC és MAC alrétegek"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
                Ethernet az OSI-modellben: 802.2 (LLC) + 802.3 (MAC + fizikai)
              </p>
            </div>
          </section>

          {/* 7.1.2 Az adatkapcsolati réteg alrétegei */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              2. Az adatkapcsolati réteg két alrétege
            </h2>

            <p className="mb-4">
              Az IEEE 802 szabványok (köztük az Ethernet) az adatkapcsolati réteget két részre bontja:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-blue-50/70 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800/40">
                <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-300">LLC alréteg (IEEE 802.2)</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Felső rétegek (3. réteg) és alsó rétegek között közvetít</li>
                  <li>Meghatározza, melyik hálózati protokoll (IPv4, IPv6 stb.) használja a keretet</li>
                  <li>Engedi, hogy ugyanazon a hálózati kártyán több protokoll fusson</li>
                </ul>
              </div>

              <div className="p-6 bg-cyan-50/70 dark:bg-cyan-950/30 rounded-xl border border-cyan-200 dark:border-cyan-800/40">
                <h3 className="text-xl font-bold mb-3 text-cyan-700 dark:text-cyan-300">MAC alréteg (IEEE 802.3)</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hardverben valósul meg (hálózati kártya)</li>
                  <li>Adatok beágyazása keretbe</li>
                  <li>Címzés (MAC-címek)</li>
                  <li>Közeghozzáférés-vezérlés (ki beszélhet éppen)</li>
                </ul>
              </div>
            </div>

            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mx-auto max-w-4xl">
                <Image
                  src={Img2}
                  alt="LLC és MAC alrétegek az OSI-modellben"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic text-center">
                LLC (802.2) + MAC (802.3) – Ethernet és más technológiák
              </p>
            </div>
          </section>

          {/* 7.1.3 MAC-alréteg */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              3. MAC-alréteg feladatai
            </h2>

            <p className="mb-4">
              A MAC-alréteg két fő dolgot csinál:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-green-50/70 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-800/40">
                <h3 className="text-xl font-bold mb-3 text-green-700 dark:text-green-300">Adatbeágyazás</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ethernet keret létrehozása</li>
                  <li>Forrás és cél MAC-cím hozzáadása</li>
                  <li>Hibajelzés (FCS – Frame Check Sequence)</li>
                </ul>
              </div>

              <div className="p-6 bg-purple-50/70 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800/40">
                <h3 className="text-xl font-bold mb-3 text-purple-700 dark:text-purple-300">Közeghozzáférés</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Szabályozza, ki küldhet adatot a közegen</li>
                  <li>Régebben: CSMA/CD (ütközéskezelés fél-duplexben)</li>
                  <li>Ma: switch-ek teljes duplex módban – nincs ütközés, nincs CSMA/CD</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7.1.4 Az Ethernet keretek mezői + táblázat */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              4. Az Ethernet keret mezői
            </h2>

            <p className="mb-6">
              Az Ethernet keret minimális mérete 64 bájt, maximális 1518 bájt (előtag nélkül). Ha kisebb, mint 64 bájt → <strong>runt</strong> (eldobják). Ha nagyobb adat → <strong>jumbo frame</strong> (sok switch támogatja).
            </p>

            {/* Keret ábra */}
            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="relative w-full aspect-4/3 md:aspect-video rounded-lg overflow-hidden mx-auto max-w-4xl">
                <Image
                  src={Img4}
                  alt="Ethernet keret mezői és méretei"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
                Ethernet keret felépítése (64–1518 bájt)
              </p>
            </div>

            {/* Táblázat – a te mező leírásod alapján */}
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Mező</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Leírás</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Előtag és keretkezdő mezők</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                      Szinkronizálás + jelzi, hogy jön a keret (8 bájt összesen). Nem számít a keret méretébe.
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/40">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Cél MAC-cím</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                      6 bájt – a fogadó eszköz MAC-címe (unicast, multicast vagy broadcast).
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Forrás MAC-cím</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                      6 bájt – a küldő eszköz MAC-címe.
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/40">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Típus/Hossz mező</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                      2 bájt – ha ≥ 0x0600 → EtherType (pl. 0x0800 = IPv4, 0x86DD = IPv6, 0x0806 = ARP).
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Adat (payload)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                      46–1500 bájt – a felsőbb rétegből jövő adat (pl. IP csomag). Ha kisebb, padding-gel kiegészítik 64 bájtra.
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/40">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Keretellenőrző mező (FCS)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                      4 bájt – CRC-32 ellenőrző összeg. Ha nem egyezik, a keretet eldobják (hibás adat).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 italic text-gray-600 dark:text-gray-400">
              Megjegyzés: A minimális 64 bájt azért kell, hogy az ütközésészlelés (CSMA/CD) működjön fél-duplex módban. Ma már switch-ekkel teljes duplex van → nincs ütközés.
            </p>
          </section>
        </article>

        {/* Következő teaser */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Következő: 7.1 – Ethernet MAC-címek
          </p>
          <Link
            href="/modules/7/7-1"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-blue-600 text-white hover:bg-blue-700 transition-colors
              shadow-md hover:shadow-lg
            "
          >
            Tovább a MAC-címekhez <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}