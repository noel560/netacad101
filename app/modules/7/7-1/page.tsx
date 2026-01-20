"use client";

import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

import Img1 from "@/app/images/7/7-1/1.png";

export default function Almodul71() {
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
            7.1 Ethernet MAC-címek
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Görgess lefelé – megtanuljuk, mi az a MAC-cím, hogyan épül fel, miért hexadecimális, és hogyan használjuk a keretekben.
          </p>
        </header>

        {/* Tartalom */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* 7.2.1 Hexadecimális számrendszer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              1. Hexadecimális számrendszer – miért használjuk MAC-címeknél?
            </h2>

            <p className="mb-4">
              Az IPv4 címeket decimálisan írjuk (pl. 192.168.1.1), de a MAC-címek és IPv6 címek hexadecimálisak (tizenhatos számrendszer). Ehhez jól kell tudni a bináris-decimális-hex konverziót.
            </p>

            <p className="mb-4">
              A hexadecimális rendszer 16 jelet használ: 0–9 és A–F (A=10, B=11, ..., F=15).
            </p>

            <p className="font-medium mt-6">
              4 bit = 1 hex jegy → 48 bites MAC-cím = 12 hex jegy (6 bájt)
            </p>

            {/* Szebb táblázat – ugyanaz a stílus, mint a 7.0 keret táblázat */}
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                <thead>
                  <tr className="bg-linear-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <th className="border border-gray-300 dark:border-gray-700 px-6 py-4 text-left font-semibold text-gray-800 dark:text-gray-200">
                      Decimális
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-6 py-4 text-left font-semibold text-gray-800 dark:text-gray-200">
                      Bináris (4 bit)
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-6 py-4 text-left font-semibold text-gray-800 dark:text-gray-200">
                      Hex
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { dec: 0, bin: "0000", hex: "0" },
                    { dec: 1, bin: "0001", hex: "1" },
                    { dec: 2, bin: "0010", hex: "2" },
                    { dec: 3, bin: "0011", hex: "3" },
                    { dec: 4, bin: "0100", hex: "4" },
                    { dec: 5, bin: "0101", hex: "5" },
                    { dec: 6, bin: "0110", hex: "6" },
                    { dec: 7, bin: "0111", hex: "7" },
                    { dec: 8, bin: "1000", hex: "8" },
                    { dec: 9, bin: "1001", hex: "9" },
                    { dec: 10, bin: "1010", hex: "A" },
                    { dec: 11, bin: "1011", hex: "B" },
                    { dec: 12, bin: "1100", hex: "C" },
                    { dec: 13, bin: "1101", hex: "D" },
                    { dec: 14, bin: "1110", hex: "E" },
                    { dec: 15, bin: "1111", hex: "F" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`${
                        i % 2 === 0 ? "bg-white dark:bg-gray-900/60" : "bg-gray-50 dark:bg-gray-900/40"
                      } hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors`}
                    >
                      <td className="border border-gray-300 dark:border-gray-700 px-6 py-4">{row.dec}</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-6 py-4 font-mono">{row.bin}</td>
                      <td className="border border-gray-300 dark:border-gray-700 px-6 py-4 font-mono">{row.hex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6">
              8 bit (1 bájt) = 00–FF hex. Például bináris 00001010 = hex 0A.
            </p>

            <p className="mt-4">
              Hexadecimálisat gyakran 0x előtaggal írjuk (pl. 0x0A), vagy H betűvel a végén (pl. 0AH).
            </p>
          </section>

          {/* 7.2.2 Ethernet MAC-címek */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              2. Ethernet MAC-cím felépítése
            </h2>

            <p className="mb-4">
              Egy Ethernet LAN-ban minden eszköz ugyanahhoz a közeghez csatlakozik, ezért a MAC-cím biztosítja, hogy a keret a megfelelő hálózati kártyához (NIC) érkezzen.
            </p>

            <p className="mb-4">
              MAC-cím = 48 bit = 6 bájt = 12 hex jegy (pl. 00-60-2F-3A-07-BC)
            </p>

            {/* Ha van ábra a felépítésről */}
            <div className="my-8 p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm text-center">
              <p className="text-gray-500 dark:text-gray-400 italic mb-4">
                <Image src={Img1} alt="MAC-cím felépítése" width={800} height={300} className="mx-auto rounded-lg" />
              </p>
              {/* Példa: */}
              {/* <Image src="/images/7/7-1/mac-felépítés.png" alt="MAC-cím felépítése" width={800} height={300} className="mx-auto rounded-lg" /> */}
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Hogyan lesz egyedi?</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Az IEEE ad minden gyártónak egyedi 24 bites OUI-t (első 3 bájt / 6 hex jegy).</li>
              <li>A gyártó a maradék 24 bitet (utolsó 6 hex jegy) egyedileg osztja ki.</li>
              <li>Példa: Cisco OUI = 00-60-2F → teljes cím: 00-60-2F-3A-07-BC</li>
            </ul>

            <p className="mt-6">
              <strong>Megjegyzés:</strong> Ma már szoftveresen is megváltoztatható a MAC-cím, ezért nem 100% biztonságos rá szűrni.
            </p>
          </section>

          {/* 7.2.3 Keret feldolgozása */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              3. Hogyan dolgozza fel egy eszköz a keretet?
            </h2>

            <p className="mb-4">
              A hálózati kártya induláskor bemásolja a MAC-címét a ROM-ból a RAM-ba.
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>Összehasonlítja a keretben lévő <strong>cél MAC-címet</strong> a saját MAC-címével</li>
              <li>Ha nem egyezik → eldobja</li>
              <li>Ha egyezik (vagy broadcast/multicast) → átadja a felsőbb rétegnek</li>
            </ol>

            <p className="mt-6 italic text-gray-600 dark:text-gray-400">
              Megjegyzés: Broadcast (FF-FF-FF-FF-FF-FF) vagy multicast kereteket minden eszköz elfogadja és feldolgozza.
            </p>
          </section>

          {/* 7.2.4 Unicast */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              4. Egyedi címzés (unicast)
            </h2>

            <p className="mb-4">
              Egyetlen eszköznek küldünk keretet → unicast MAC-cím.
            </p>

            <p className="mb-4">
              Példa: Egy PC weboldalt kér egy szervertől → unicast MAC + unicast IP.
            </p>

            <p className="mt-6">
              <strong>Címfeloldás:</strong> ARP (IPv4) vagy ND (IPv6) – IP-címből MAC-címet keres.
            </p>
          </section>

          {/* 7.2.5 Broadcast */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              5. Szórásos (broadcast) MAC-cím
            </h2>

            <p className="mb-4">
              Minden eszköznek küldünk → cél MAC = <strong>FF-FF-FF-FF-FF-FF</strong>.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Switch minden portra továbbítja (kivéve a bejövő portot)</li>
              <li>Router nem továbbítja</li>
              <li>Használatos pl. ARP-kérésnél, DHCP-nél</li>
            </ul>
          </section>

          {/* 7.2.6 Multicast */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
              6. Csoportos címzés (multicast)
            </h2>

            <p className="mb-4">
              Csak bizonyos eszközcsoportnak küldünk → cél MAC 01-00-5E-vel kezdődik (IPv4) vagy 33-33-al (IPv6).
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Switch elárasztja, hacsak nincs multicast filtering</li>
              <li>Router továbbíthatja, ha konfigurálva van</li>
              <li>Használatos videó streaming, routing protokollok</li>
            </ul>

            <p className="mt-6">
              Forrás MAC mindig unicast – soha nem multicast vagy broadcast.
            </p>
          </section>
        </article>

        {/* Következő teaser */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Következő: 7.2 – MAC-címtábla és kerettovábbítás
          </p>
          <Link
            href="/modules/7/7-2"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-blue-600 text-white hover:bg-blue-700 transition-colors
              shadow-md hover:shadow-lg
            "
          >
            Tovább a MAC-táblához <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}