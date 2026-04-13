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

type Team = {
  id: string;
  teamName: string;
  manager: string;
  accent: string;
  fanCount: number;
  rank: number;
  athletes: string[];
};

const teams: Team[] = [
  {
    id: "team-mondo",
    teamName: "Team Mondo",
    manager: "Mondo Duplantis",
    accent: "#9B5EFF",
    fanCount: 4821,
    rank: 1,
    athletes: [
      "Mondo Duplantis",
      "Cole Hocker",
      "Katie Moon",
      "Rai Benjamin",
      "Ryan Crouser",
      "Grant Fisher",
      "Anna Hall",
      "Gabby Thomas",
      "Melissa Jefferson-Wooden",
      "Emmanouil Karalis",
      "Joe Kovacs",
      "Tara Davis-Woodhall",
      "Noah Lyles",
      "Karsten Warholm",
      "Valarie Allman",
    ],
  },
  {
    id: "team-gabby",
    teamName: "Team Gabby",
    manager: "Gabby Thomas",
    accent: "#FF3131",
    fanCount: 4360,
    rank: 2,
    athletes: [
      "Gabby Thomas",
      "Noah Lyles",
      "Rai Benjamin",
      "Cole Hocker",
      "Katie Moon",
      "Sha'Carri Richardson",
      "Josh Kerr",
      "Ryan Crouser",
      "Anna Hall",
      "Grant Holloway",
      "Yared Nuguse",
      "Tara Davis-Woodhall",
      "Grant Fisher",
      "Mondo Duplantis",
      "Joe Kovacs",
    ],
  },
  {
    id: "team-noah",
    teamName: "Team Noah",
    manager: "Noah Lyles",
    accent: "#3B7FFF",
    fanCount: 3988,
    rank: 3,
    athletes: [
      "Noah Lyles",
      "Gabby Thomas",
      "Melissa Jefferson-Wooden",
      "Kenny Bednarek",
      "Fred Kerley",
      "Rai Benjamin",
      "Josh Kerr",
      "Cole Hocker",
      "Grant Holloway",
      "Ryan Crouser",
      "Valarie Allman",
      "Tara Davis-Woodhall",
      "Katie Moon",
      "Anna Hall",
      "Grant Fisher",
    ],
  },
  {
    id: "team-rai",
    teamName: "Team Rai",
    manager: "Rai Benjamin",
    accent: "#00D26A",
    fanCount: 3524,
    rank: 4,
    athletes: [
      "Rai Benjamin",
      "Karsten Warholm",
      "Noah Lyles",
      "Gabby Thomas",
      "Sydney McLaughlin-Levrone",
      "Grant Fisher",
      "Cole Hocker",
      "Ryan Crouser",
      "Joe Kovacs",
      "Mondo Duplantis",
      "Katie Moon",
      "Anna Hall",
      "Tara Davis-Woodhall",
      "Melissa Jefferson-Wooden",
      "Valarie Allman",
    ],
  },
];

export default function ManagerDashboardPage() {
  return (
    <main
      className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-(--font-dm-sans)`}
    >
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <svg viewBox="0 0 1600 1200" className="h-full w-full">
            <defs>
              <radialGradient id="dashboardGlow" cx="75%" cy="20%" r="50%">
                <stop offset="0%" stopColor="rgba(155,94,255,0.22)" />
                <stop offset="45%" stopColor="rgba(59,127,255,0.12)" />
                <stop offset="100%" stopColor="rgba(10,10,10,0)" />
              </radialGradient>
            </defs>
            <rect width="1600" height="1200" fill="url(#dashboardGlow)" />
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
                Manager Dashboard
              </div>
              <h1 className="font-(--font-anton) text-[clamp(44px,6vw,88px)] uppercase leading-[0.92] tracking-[-1px]">
                <span className="block">Team</span>
                <span className="block text-[#9B5EFF]">Selection</span>
                <span className="block text-transparent [WebkitTextStroke:2px_#f5f0e8]">Overview</span>
              </h1>
              <p className="mt-5 max-w-170 text-[16px] font-light leading-7 text-[#c6c2bc]">
                Review the four active teams, check each 15-athlete roster, and see how many fans have selected each team to follow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <MetricCard label="Active Teams" value="4" accent="#9B5EFF" />
              <MetricCard label="Total Athletes" value="60" accent="#FF3131" />
              <MetricCard label="Total Fan Picks" value="16,693" accent="#3B7FFF" />
            </div>
          </header>

          <section className="mt-10 grid gap-6 xl:grid-cols-2">
            {teams.map((team) => (
              <section
                key={team.id}
                className="relative overflow-hidden border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px] sm:p-7"
                style={{ borderTop: `4px solid ${team.accent}` }}
              >
                <div className="absolute right-5 top-5 font-(--font-anton) text-[96px] leading-none text-white/5">
                  {team.rank}
                </div>

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div
                        className="mb-3 inline-flex items-center gap-2 px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px]"
                        style={{ backgroundColor: `${team.accent}1F`, color: team.accent }}
                      >
                        Rank #{team.rank}
                      </div>
                      <h2 className="font-(--font-anton) text-[34px] uppercase leading-none tracking-[0.5px]">
                        {team.teamName}
                      </h2>
                      <p className="mt-3 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#b8b4ae]">
                        Managed by {team.manager}
                      </p>
                    </div>

                    <div className="grid min-w-[52.5 gap-3 sm:grid-cols-2 md:grid-cols-1">
                      <StatPill label="Fans Picking Team" value={team.fanCount.toLocaleString()} accent={team.accent} />
                      <StatPill label="Athletes On Roster" value={team.athletes.length.toString()} accent={team.accent} />
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#9c9892]">
                        15-Player Roster
                      </h3>
                      <button
                        type="button"
                        className="font-(--font-space-mono) text-[10px] uppercase tracking-[1.5px] text-[#9B5EFF] transition-colors hover:text-[#f5f0e8]"
                      >
                        View Details
                      </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {team.athletes.map((athlete, index) => (
                        <div
                          key={athlete}
                          className="flex items-center gap-3 border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.025)] px-3 py-3"
                        >
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold uppercase tracking-[1px] text-[#0a0a0a]"
                            style={{ backgroundColor: team.accent }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="min-w-0">
                            <div className="truncate font-(--font-space-mono) text-[11px] uppercase tracking-[1.3px] text-[#f5f0e8]">
                              {athlete}
                            </div>
                            <div className="mt-1 text-xs text-[#8f8b85]">Track &amp; Field Athlete</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </section>

          <section className="mt-10 border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.03)] p-6 sm:p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-3 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#9B5EFF]">
                  Quick Actions
                </div>
                <h2 className="font-(--font-anton) text-[32px] uppercase leading-none">Manager Tools</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/signup"
                  className="border border-[rgba(245,240,232,0.16)] px-5 py-3.5 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#f5f0e8] transition-colors hover:border-[#f5f0e8] hover:text-[#9B5EFF]"
                >
                  Invite Fans
                </Link>
                <button
                  type="button"
                  className="bg-[#9B5EFF] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[2px] text-[#0a0a0a] transition duration-200 hover:scale-[1.03] hover:bg-[#f5f0e8]"
                >
                  Export Team Data
                </button>
              </div>
            </div>
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
