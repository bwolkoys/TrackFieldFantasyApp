"use client";

import Link from "next/link";
import { Anton, DM_Sans, Space_Mono } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const players = [
  { name: "Noah Lyles", height: `5'11"`, weight: "154 lbs", stats: ["19.52 — 200m", "9.83 — 100m", "20.01 — DL"] },
  { name: "Melissa Jefferson-Wooden", height: `5'3"`, weight: "121 lbs", stats: ["10.80 — 100m", "7.04 — 60m", "22.15 — 200m"] },
  { name: "Kenny Bednarek", height: `5'11"`, weight: "165 lbs", stats: ["19.67 — 200m", "10.01 — 100m", "20.04 — Rome"] },
  { name: "Fred Kerley", height: `6'3"`, weight: "207 lbs", stats: ["9.88 — 100m", "19.76 — 200m", "44.74 — 400m"] },
  { name: "Valarie Allman", height: `6'0"`, weight: "170 lbs", stats: ["69.80m — Discus", "68.44m — Rome", "67.92m — Trials"] },
  { name: "Anna Hall", height: `6'0"`, weight: "160 lbs", stats: ["6423 — Hep", "13.12 — 100mH", "1.88m — HJ"] },
  { name: "Gabby Thomas", height: `5'9"`, weight: "128 lbs", stats: ["21.78 — 200m", "10.92 — 100m", "49.68 — 400m"] },
  { name: "Rai Benjamin", height: `6'3"`, weight: "170 lbs", stats: ["46.82 — 400mH", "44.21 — 400m", "47.03 — Rome"] },
  { name: "Josh Kerr", height: `6'0"`, weight: "150 lbs", stats: ["3:29.38 — 1500m", "3:45.34 — Mile", "7:30.11 — 3000m"] },
  { name: "Cole Hocker", height: `6'0"`, weight: "150 lbs", stats: ["3:31.12 — 1500m", "3:50.40 — Mile", "13:10.22 — 5000m"] },
  { name: "Grant Holloway", height: `6'2"`, weight: "190 lbs", stats: ["12.86 — 110mH", "7.27 — 60mH", "13.01 — Oslo"] },
  { name: "Ryan Crouser", height: `6'7"`, weight: "320 lbs", stats: ["22.91m — Shot Put", "22.70m — Prefontaine", "22.43m — Trials"] },
  { name: "Katie Moon", height: `6'1"`, weight: "154 lbs", stats: ["4.80m — PV", "4.73m — Trials", "4.71m — Stockholm"] },
  { name: "Tara Davis-Woodhall", height: `5'4"`, weight: "128 lbs", stats: ["7.07m — LJ", "6.99m — Trials", "6.92m — Rome"] },
  { name: "Grant Fisher", height: `5'11"`, weight: "132 lbs", stats: ["12:46.96 — 5000m", "26:33.84 — 10,000m", "7:28.48 — 3000m"] },
];

export default function TeamNoahPage() {
  return (
    <main className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-(--font-dm-sans)`}>
      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/dashboard-fans" className="font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#3B7FFF]">
            Back to Fan Dashboard
          </Link>
          <div className="rounded-full bg-[rgba(59,127,255,0.14)] px-4 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#3B7FFF]">
            Team Noah
          </div>
        </div>

        <div className="border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px]">
          <h1 className="font-(--font-anton) text-[clamp(40px,6vw,82px)] uppercase leading-[0.92] tracking-[-1px]">
            Team Noah
          </h1>
          <p className="mt-3 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#b8b4ae]">
            Managed by Noah Lyles
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {players.map((player, index) => (
            <div key={player.name} className="border border-[rgba(245,240,232,0.1)] bg-[rgba(245,240,232,0.03)] p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="mb-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#3B7FFF]">
                    Athlete {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-(--font-anton) text-[32px] uppercase leading-none">{player.name}</h2>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="border border-[rgba(245,240,232,0.12)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[1.5px] text-[#b8b4ae]">
                      Height: {player.height}
                    </span>
                    <span className="border border-[rgba(245,240,232,0.12)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[1.5px] text-[#b8b4ae]">
                      Weight: {player.weight}
                    </span>
                  </div>
                </div>

                <div className="w-full max-w-120">
                  <div className="mb-3 font-(--font-space-mono) text-[10px] uppercase tracking-[1.8px] text-[#9c9892]">
                    Past Few Meets
                  </div>
                  <div className="grid gap-2">
                    {player.stats.map((stat) => (
                      <div key={stat} className="border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.025)] px-4 py-3 font-(--font-space-mono) text-[11px] uppercase tracking-[1.3px] text-[#f5f0e8]">
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}