// src/lib/modules.ts

export interface ModuleInfo {
  id: number;
  slug: string;
  title: string;
  description: string;
}

export const modules: ModuleInfo[] = [
  {
    id: 1,
    slug: "1",
    title: "1. modul",
    description: "A hálózat fogalma, típusai és alapvető felépítése a mai világban",
  },
  {
    id: 2,
    slug: "2",
    title: "2. modul",
    description: "Switch-ek és végberendezések alapbeállítása Cisco eszközökön",
  },
  {
    id: 3,
    slug: "3",
    title: "3. modul",
    description: "Hálózati protokollok és modellek (OSI és TCP/IP) érthetően",
  },
  {
    id: 4,
    slug: "4",
    title: "4. modul",
    description: "Fizikai réteg: kábelek, csatlakozók, jelátvitel és szabványok",
  },
  {
    id: 5,
    slug: "5",
    title: "5. modul",
    description: "Számrendszerek (bináris, hexadecimális) és konverziók gyakorlatban",
  },
  {
    id: 6,
    slug: "6",
    title: "6. modul",
    description: "Adatkapcsolati réteg: keretek, MAC-címek és hibajavítás alapjai",
  },
  {
    id: 7,
    slug: "7",
    title: "7. modul",
    description: "Ethernet kapcsolás: keretek, MAC-tábla, switch működése lépésről lépésre",
  },
  {
    id: 8,
    slug: "8",
    title: "8. modul",
    description: "Hálózati réteg: IP címek, útválasztás és routerek alapjai",
  },
  {
    id: 9,
    slug: "9",
    title: "9. modul",
    description: "Címfeloldás: ARP, RARP és a MAC–IP kapcsolat működése",
  },
  {
    id: 10,
    slug: "10",
    title: "10. modul",
    description: "Alapvető router konfiguráció és alapértelmezett útvonal beállítása",
  },
  {
    id: 11,
    slug: "11",
    title: "11. modul",
    description: "IPv4 címzés: osztályok, alhálózatok és CIDR részletesen",
  },
  {
    id: 12,
    slug: "12",
    title: "12. modul",
    description: "IPv6 címzés: felépítés, típusok és az átállás gyakorlati lépései",
  },
  {
    id: 13,
    slug: "13",
    title: "13. modul",
    description: "ICMP protokoll: ping, traceroute és hibajelzések működése",
  },
  {
    id: 14,
    slug: "14",
    title: "14. modul",
    description: "Szállítási réteg: TCP és UDP működése, portok és megbízhatóság",
  },
  {
    id: 15,
    slug: "15",
    title: "15. modul",
    description: "Alkalmazási réteg protokollok: HTTP, DNS, DHCP, FTP és mások",
  },
  {
    id: 16,
    slug: "16",
    title: "16. modul",
    description: "Hálózatbiztonsági alapok: fenyegetések, tűzfalak és alapvető védelem",
  },
  {
    id: 17,
    slug: "17",
    title: "17. modul",
    description: "Kisméretű hálózat teljes felépítése és konfigurálása gyakorlatban",
  },
];