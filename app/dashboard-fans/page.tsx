"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Anton, DM_Sans, Space_Mono } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

type Team = {
  id: string;
  teamName: string;
  manager: string;
  eventFocus: string;
  accent: string;
  fanCount: number;
  athletes: string[];
};

const teams: Team[] = [
  {
    id: "team-mondo",
    teamName: "Team Mondo",
    manager: "Mondo Duplantis",
    eventFocus: "Power + precision picks",
    accent: "#9B5EFF",
    fanCount: 4821,
    athletes: [
      "Mondo Duplantis",
      "Cole Hocker",
      "Katie Moon",
      "Rai Benjamin",
      "Ryan Crouser",
      "Grant Fisher",
    ],
  },
  {
    id: "team-gabby",
    teamName: "Team Gabby",
    manager: "Gabby Thomas",
    eventFocus: "Sprint-heavy favorites",
    accent: "#FF3131",
    fanCount: 4360,
    athletes: [
      "Gabby Thomas",
      "Noah Lyles",
      "Sha'Carri Richardson",
      "Josh Kerr",
      "Grant Holloway",
      "Yared Nuguse",
    ],
  },
  {
    id: "team-noah",
    teamName: "Team Noah",
    manager: "Noah Lyles",
    eventFocus: "Big personalities, big points",
    accent: "#3B7FFF",
    fanCount: 3988,
    athletes: [
      "Noah Lyles",
      "Melissa Jefferson-Wooden",
      "Kenny Bednarek",
      "Fred Kerley",
      "Valarie Allman",
      "Anna Hall",
    ],
  },
  {
    id: "team-rai",
    teamName: "Team Rai",
    manager: "Rai Benjamin",
    eventFocus: "Championship depth",
    accent: "#00D26A",
    fanCount: 3524,
    athletes: [
      "Rai Benjamin",
      "Karsten Warholm",
      "Sydney McLaughlin-Levrone",
      "Joe Kovacs",
      "Tara Davis-Woodhall",
      "Valarie Allman",
    ],
  },
];

export default function FanDashboardPage() {
  const [selectedTeamId, setSelectedTeamId] = useState<string>(teams[0].id);

  const selectedTeam = useMemo(
    () => teams.find((team) => team.id === selectedTeamId) ?? teams[0],
    [selectedTeamId]
  );

  return (
    <main
      className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-(--font-dm-sans)`}
    >
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <svg viewBox="0 0 1600 1200" className="h-full w-full">
            <defs>
              <radialGradient id="fanDashboardGlow" cx="75%" cy="18%" r="48%">
                <stop offset="0%" stopColor="rgba(155,94,255,0.22)" />
                <stop offset="45%" stopColor="rgba(59,127,255,0.12)" />
                <stop offset="100%" stopColor="rgba(10,10,10,0)" />
              </radialGradient>
            </defs>
            <rect width="1600" height="1200" fill="url(#fanDashboardGlow)" />
            <g fill="none" stroke="rgba(245,240,232,0.07)" strokeWidth="1.2">
              <path d="M1310 -40 Q1040 300 1160 1240" />
              <path d="M1400 -40 Q1130 300 1250 1240" />
              <path d="M1220 -40 Q950 300 1070 1240" />
            </g>
          </svg>
        </div>

        <div className="pointer-events-none absolute -right-[10%] -top-[10%] h-[120%] w-[34%] -skew-x-[8deg] bg-[rgba(255,224,48,0.04)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <header className="flex flex-col gap-6 border-b border-[rgba(245,240,232,0.08)] pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#9B5EFF]">
                <span className="block h-0.5 w-8 bg-[#9B5EFF]" />
                Fan Dashboard
              </div>
              <h1 className="font-(--font-anton) text-[clamp(44px,6vw,88px)] uppercase leading-[0.92] tracking-[-1px]">
                <span className="block">Choose The</span>
                <span className="block text-[#9B5EFF]">Team You’ll</span>
                <span className="block text-transparent [WebkitTextStroke:2px_#f5f0e8]">Follow</span>
              </h1>
              <p className="mt-5 max-w-170 text-[16px] font-light leading-7 text-[#c6c2bc]">
                Explore all four manager teams, compare the rosters, and select one team to follow for the season.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <MetricCard label="Available Teams" value="4" accent="#9B5EFF" />
              <MetricCard label="Managers" value="4" accent="#FF3131" />
              <MetricCard label="Season Selection" value="Open" accent="#3B7FFF" />
            </div>
          </header>

          <section className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 lg:grid-cols-2">
              {teams.map((team) => {
                const isSelected = selectedTeam.id === team.id;

                return (
                  <section
                    key={team.id}
                    className={`relative overflow-hidden border bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px] transition duration-200 ${
                      isSelected
                        ? "border-[rgba(245,240,232,0.22)] shadow-[0_0_0_1px_rgba(245,240,232,0.08)]"
                        : "border-[rgba(245,240,232,0.12)]"
                    }`}
                    style={{ borderTop: `4px solid ${team.accent}` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          className="mb-3 inline-flex items-center gap-2 px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px]"
                          style={{ backgroundColor: `${team.accent}1F`, color: team.accent }}
                        >
                          {team.eventFocus}
                        </div>
                        <h2 className="font-(--font-anton) text-[30px] uppercase leading-none tracking-[0.4px]">
                          {team.teamName}
                        </h2>
                        <p className="mt-3 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#b8b4ae]">
                          Managed by {team.manager}
                        </p>
                      </div>

                      <div
                        className="flex h-12 min-w-12 items-center justify-center rounded-full font-(--font-anton) text-[20px] text-[#0a0a0a]"
                        style={{ backgroundColor: team.accent }}
                      >
                        {team.manager
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <StatPill label="Fans Following" value={team.fanCount.toLocaleString()} accent={team.accent} />
                      <StatPill label="Roster Size" value="15" accent={team.accent} />
                    </div>

                    <div className="mt-6">
                      <div className="mb-3 font-(--font-space-mono) text-[10px] uppercase tracking-[1.8px] text-[#9c9892]">
                        Featured Athletes
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {team.athletes.map((athlete) => (
                          <div
                            key={athlete}
                            className="border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.025)] px-3 py-3 font-(--font-space-mono) text-[11px] uppercase tracking-[1.3px] text-[#f5f0e8]"
                          >
                            {athlete}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedTeamId(team.id)}
                        className="bg-[#f5f0e8] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[2px] text-[#0a0a0a] transition duration-200 hover:scale-[1.03]"
                      >
                        View Team
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedTeamId(team.id)}
                        className="border border-[rgba(245,240,232,0.16)] px-5 py-3.5 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#f5f0e8] transition-colors hover:border-[#f5f0e8]"
                        style={{ color: isSelected ? team.accent : undefined }}
                      >
                        {isSelected ? "Selected Team" : "Follow This Team"}
                      </button>
                    </div>
                  </section>
                );
              })}
            </div>

            <aside className="h-fit border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px] sm:p-7">
              <div
                className="mb-4 inline-flex items-center gap-2 px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px]"
                style={{ backgroundColor: `${selectedTeam.accent}1F`, color: selectedTeam.accent }}
              >
                Your Current Selection
              </div>

              <h2 className="font-(--font-anton) text-[38px] uppercase leading-none tracking-[0.5px]">
                {selectedTeam.teamName}
              </h2>
              <p className="mt-3 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#b8b4ae]">
                Managed by {selectedTeam.manager}
              </p>

              <p className="mt-5 text-[15px] font-light leading-7 text-[#bab7b1]">
                This is the team you’re set to follow for the season. You’ll receive schedule updates, scoring alerts, and giveaways connected to this manager’s roster.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <StatPill label="Fans On Team" value={selectedTeam.fanCount.toLocaleString()} accent={selectedTeam.accent} />
                <StatPill label="Roster Slots" value="15" accent={selectedTeam.accent} />
              </div>

              <div className="mt-6">
                <div className="mb-3 font-(--font-space-mono) text-[10px] uppercase tracking-[1.8px] text-[#9c9892]">
                  Team Snapshot
                </div>
                <div className="space-y-2">
                  {selectedTeam.athletes.map((athlete, index) => (
                    <div
                      key={athlete}
                      className="flex items-center gap-3 border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.025)] px-3 py-3"
                    >
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold uppercase tracking-[1px] text-[#0a0a0a]"
                        style={{ backgroundColor: selectedTeam.accent }}
                      >
                        {index + 1}
                      </div>
                      <div className="font-(--font-space-mono) text-[11px] uppercase tracking-[1.3px] text-[#f5f0e8]">
                        {athlete}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[2px] text-[#0a0a0a] transition duration-200 hover:scale-[1.03]"
                  style={{ backgroundColor: selectedTeam.accent }}
                >
                  Confirm Team Selection
                </button>

                <Link
                  href="/"
                  className="border border-[rgba(245,240,232,0.16)] px-5 py-3.5 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#f5f0e8] transition-colors hover:border-[#f5f0e8] hover:text-[#9B5EFF]"
                >
                  Back Home
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}

function MetricCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.03)] px-5 py-4">
      <div className="font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#9c9892]">
        {label}
      </div>
      <div className="mt-2 font-(--font-anton) text-[34px] leading-none" style={{ color: accent }}>
        {value}
      </div>
    </div>
  );
}

function StatPill({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.025)] px-4 py-4">
      <div className="font-(--font-space-mono) text-[10px] uppercase tracking-[1.8px] text-[#9c9892]">
        {label}
      </div>
      <div className="mt-2 font-(--font-anton) text-[30px] leading-none" style={{ color: accent }}>
        {value}
      </div>
    </div>
  );
}
