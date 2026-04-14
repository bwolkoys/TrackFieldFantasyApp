"use client";

import Link from "next/link";
import { Anton, DM_Sans, Space_Mono } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

type Manager = {
  name: string;
  shortName: string;
  accent: string;
  teamName: string;
  score: number;
  fans: string;
  identity: string;
  quote: string;
  href: string;
};

type Standing = {
  rank: number;
  team: string;
  score: number;
  summary: string;
  accent: string;
};

type Highlight = {
  athlete: string;
  summary: string;
  image: string;
};

const managers: Manager[] = [
  {
    name: "Mondo Duplantis",
    shortName: "MD",
    accent: "#9B5EFF",
    image: "",
    teamName: "Team Mondo",
    score: 124,
    fans: "4,821",
    identity: "Built for power events and clutch performances",
    quote:
      "Big moments matter. I built this team to score when the pressure is highest.",
    href: "/dashboard-fans/team-mondo",
  },
  {
    name: "Gabby Thomas",
    shortName: "GT",
    accent: "#FF3131",
    teamName: "Team Gabby",
    score: 118,
    fans: "4,360",
    identity: "Speed-first roster with major upside",
    quote: "I wanted a team that could light up the track from the gun.",
    href: "/dashboard-fans/team-gabby",
  },
  {
    name: "Noah Lyles",
    shortName: "NL",
    accent: "#3B7FFF",
    teamName: "Team Noah",
    score: 110,
    fans: "3,988",
    identity: "Star power, speed, and big-race energy",
    quote: "This team is built to make noise every time they line up.",
    href: "/dashboard-fans/team-noah",
  },
  {
    name: "Rai Benjamin",
    shortName: "RB",
    accent: "#00D26A",
    teamName: "Team Rai",
    score: 102,
    fans: "3,524",
    identity: "Depth, balance, and championship mentality",
    quote: "I drafted a team that can win points in every kind of meet.",
    href: "/dashboard-fans/team-rai",
  },
];

const standings: Standing[] = [
  {
    rank: 1,
    team: "Team Mondo",
    score: 124,
    summary: "Power events, vault dominance, and major finals upside.",
    accent: "#9B5EFF",
  },
  {
    rank: 2,
    team: "Team Gabby",
    score: 118,
    summary: "Explosive sprint points and elite short-race firepower.",
    accent: "#FF3131",
  },
  {
    rank: 3,
    team: "Team Noah",
    score: 110,
    summary: "Big names, big personalities, and high-ceiling scorers.",
    accent: "#3B7FFF",
  },
  {
    rank: 4,
    team: "Team Rai",
    score: 102,
    summary: "Balanced roster depth with championship-level consistency.",
    accent: "#00D26A",
  },
];

const highlights: Highlight[] = [
  {
    athlete: "Noah Lyles",
    summary: "Sprint superstar. Watch the finishes that change the standings.",
    image: "#3B7FFF",
  },
  {
    athlete: "Gabby Thomas",
    summary: "Smooth speed, huge races, and high-value points.",
    image: "#FF3131",
  },
  {
    athlete: "Rai Benjamin",
    summary: "One of the most dangerous closers in the sport.",
    image: "#00D26A",
  },
  {
    athlete: "Mondo Duplantis",
    summary: "Big-air moments that can swing an entire week.",
    image: "#9B5EFF",
  },
];

export default function HomePage() {
  return (
    <main
      className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f5f0e8] font-(--font-dm-sans)`}
    >
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <svg viewBox="0 0 1600 1600" className="h-full w-full">
            <defs>
              <radialGradient id="homepageGlow" cx="72%" cy="16%" r="46%">
                <stop offset="0%" stopColor="rgba(155,94,255,0.22)" />
                <stop offset="45%" stopColor="rgba(59,127,255,0.12)" />
                <stop offset="100%" stopColor="rgba(10,10,10,0)" />
              </radialGradient>
            </defs>
            <rect width="1600" height="1600" fill="url(#homepageGlow)" />
            <g fill="none" stroke="rgba(245,240,232,0.06)" strokeWidth="1.2">
              <path d="M1320 -40 Q1080 340 1200 1640" />
              <path d="M1410 -40 Q1170 340 1290 1640" />
              <path d="M1230 -40 Q990 340 1110 1640" />
            </g>
          </svg>
        </div>

        <div className="pointer-events-none absolute -right-[8%] -top-[8%] h-[120%] w-[34%] -skew-x-[8deg] bg-[rgba(255,224,48,0.04)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <nav className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="font-(--font-anton) text-[22px] tracking-[4px] text-[#9B5EFF] no-underline"
            >
              FIELDDAY
            </Link>

            <div className="hidden sm:flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="bg-[#9B5EFF] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[2px] text-[#0a0a0a] transition duration-200 hover:scale-[1.03] hover:bg-[#f5f0e8]"
              >
                Choose Your Team
              </Link>
            </div>
          </nav>

          <section className="grid min-h-[88vh] items-center gap-10 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-8">
            <div>
              <div className="mb-6 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#9B5EFF]">
                <span className="block h-0.5 w-8 bg-[#9B5EFF]" />
                Fantasy Track &amp; Field
              </div>

              <h1 className="font-(--font-anton) text-[clamp(56px,8vw,118px)] uppercase leading-[0.9] tracking-[-1px]">
                <span className="block">Pick Your Squad.</span>
                <span className="block text-[#9B5EFF]"> Own The Track.</span>
              </h1>

              <p className="mt-7 max-w-170 text-[17px] font-light leading-8 text-[#c6c2bc]">
                Follow athlete-managed teams, track real-world performances, and
                back your squad all season long. Every sprint, jump, throw, and
                finish can change the standings.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/signup"
                  className="bg-[#9B5EFF] px-6 py-4 text-[11px] font-bold uppercase tracking-[2px] text-[#0a0a0a] transition duration-200 hover:scale-[1.03] hover:bg-[#f5f0e8]"
                >
                  Choose Your Team
                </Link>
                <a
                  href="#managers"
                  className="border border-[rgba(245,240,232,0.16)] px-6 py-4 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#f5f0e8] transition-colors hover:border-[#f5f0e8] hover:text-[#9B5EFF]"
                >
                  Meet the Managers
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-10 border-t border-[rgba(245,240,232,0.1)] pt-8">
                <HeroMetric
                  value="4"
                  label="Athlete Managers"
                  accent="#9B5EFF"
                />
                <HeroMetric
                  value="60"
                  label="Athletes Drafted"
                  accent="#FF3131"
                />
                <HeroMetric
                  value="06.01"
                  label="Soft Launch"
                  accent="#3B7FFF"
                />
              </div>
            </div>

            <div className="grid gap-4">
              <FeatureCard
                accent="#9B5EFF"
                label="Current Leader"
                title="Team Mondo — 124 pts"
                description="Built for power events, vault dominance, and major final moments."
              />
              <FeatureCard
                accent="#FF3131"
                label="Manager Quote"
                title="“I wanted a team that could light up the track from the start.”"
                description="Gabby Thomas on building a speed-first roster with major upside."
              />
              {/* <FeatureCard
                accent="#3B7FFF"
                label="Next Meet"
                title="Rome Diamond League — June 4"
                description="The first major competition activation where managers’ athletes start scoring live."
              /> */}
            </div>
          </section>

          <section className="py-16" id="how-it-works">
            <SectionIntro
              label="How It Works"
              title="Pick. Follow. Score."
              description="Built for both die-hard track fans and people discovering the sport for the first time."
            />

            <div className="mt-12 grid gap-0.5 lg:grid-cols-3">
              <HowItWorksCard
                number="01"
                accent="#9B5EFF"
                title="Choose A Manager"
                description="Back one of four athlete-led teams for the season."
              />
              <HowItWorksCard
                number="02"
                accent="#FF3131"
                title="Track Every Meet"
                description="Real performances across Diamond League events drive fantasy points."
              />
              <HowItWorksCard
                number="03"
                accent="#3B7FFF"
                title="Win With Your Squad"
                description="Follow standings, watch your athletes score, and stay in the race all season."
              />
            </div>
          </section>

          <section className="py-16 scroll-mt-24" id="managers">
            <SectionIntro
              label="Choose Your Manager"
              title="Four Captains. Four Team Identities. One League."
              description="Each fan follows one athlete manager for the season. Compare the teams, check their current score, and choose who you want to ride with."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.athlete}
                  className="group block border border-[rgba(245,240,232,0.10)] bg-[rgba(245,240,232,0.03)] p-5 transition-colors hover:bg-[rgba(245,240,232,0.05)]"
                >
                  <div
                    className="mb-5 h-44 w-full bg-[rgba(245,240,232,0.03)]"
                    style={{
                      boxShadow: `inset 0 0 0 1px rgba(245,240,232,0.08), inset 0 0 120px ${highlight.image}22`,
                    }}
                  />
                  <h3 className="font-(--font-anton) text-[28px] uppercase leading-none tracking-[0.4px]">
                    {highlight.athlete}
                  </h3>
                  <p className="mt-4 text-[15px] font-light leading-7 text-[#c6c2bc]">
                    {highlight.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16">
            <SectionIntro
              label="Fan Rewards"
              title="Follow Your Team. Unlock The Experience."
              description="Following a team is more than just points. Fans will have access to giveaways, special experiences, and future rewards tied to the season."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <RewardCard title="Event Tickets" />
              <RewardCard title="League Experiences" />
              <RewardCard title="Gala Invitations" />
              <RewardCard title="Special Fan Rewards" />
            </div>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-7 text-[#c6c2bc]">
              More than a fantasy game — this is your inside track to the sport.
            </p>
          </section>

          <section className="py-16" id="standings">
            <SectionIntro
              label="League Standings"
              title="Where The Season Stands Right Now"
              description="The top 10 athletes on each team count toward the total score, so every result matters."
            />

            <div className="mt-12 grid gap-4">
              {standings.map((standing) => (
                <div
                  key={standing.team}
                  className="group block border hover:bg-[rgba(245,240,232,0.05)] border-[rgba(245,240,232,0.10)] bg-[rgba(245,240,232,0.03)] p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-(--font-anton) text-[24px] text-[#0a0a0a]"
                        style={{ backgroundColor: standing.accent }}
                      >
                        {standing.rank}
                      </div>

                      <div>
                        <h3 className="font-(--font-anton) text-[30px] uppercase leading-none tracking-[0.4px]">
                          {standing.team}
                        </h3>
                        <p className="mt-2 text-[15px] font-light leading-7 text-[#c6c2bc]">
                          {standing.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#8f8b85]">
                          Team Score
                        </div>
                        <div
                          className="mt-2 font-(--font-anton) text-[34px] leading-none"
                          style={{ color: standing.accent }}
                        >
                          {standing.score}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16">
            <SectionIntro
              label="Why It Hits Different"
              title="Track And Field, Rebuilt As A Fantasy Sport"
              description=""
            />

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              <StatementCard
                accent="#9B5EFF"
                title="Turn Diamond League drama into fantasy glory"
                body="Watch the world’s best chase points for themselves and for your squad all year long."
              />
              <StatementCard
                accent="#FF3131"
                title="From blocks to finish line, every race matters"
                body="Every event can swing the standings and reshape the season."
              />
              <StatementCard
                accent="#3B7FFF"
                title="Relays, records, and rivalry"
                body="Experience track and field like a team sport, with strategy, momentum, and manager-led competition."
              />
              <StatementCard
                accent="#00D26A"
                title="No offseason, just speed"
                body="Stay connected to the athletes, the points, and the storylines meet after meet."
              />
            </div>
          </section>


          <section className="py-20">
            <div className="border border-[rgba(245,240,232,0.10)] bg-[rgba(245,240,232,0.03)] p-8 sm:p-10">
              <div className="max-w-4xl">
                <div className="mb-5 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#9B5EFF]">
                  Final Call
                </div>
                <h2 className="font-(--font-anton) text-[clamp(38px,5vw,74px)] uppercase leading-[0.95] tracking-[-1px]">
                  Pick Your Team Before The Next Meet.
                </h2>
                <p className="mt-6 max-w-170 text-[17px] font-light leading-8 text-[#c6c2bc]">
                  Join the league, follow your manager, and track every point
                  from opening race to final standings.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/signup"
                    className="bg-[#9B5EFF] px-6 py-4 text-[11px] font-bold uppercase tracking-[2px] text-[#0a0a0a] transition duration-200 hover:scale-[1.03] hover:bg-[#f5f0e8]"
                  >
                    Choose Your Team
                  </Link>
                  <a
                    href="#standings"
                    className="border border-[rgba(245,240,232,0.16)] px-6 py-4 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#f5f0e8] transition-colors hover:border-[#f5f0e8] hover:text-[#9B5EFF]"
                  >
                    View League Standings
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl">
      <div className="mb-5 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#9B5EFF]">
        <span className="block h-0.5 w-8 bg-[#9B5EFF]" />
        {label}
      </div>
      <h2 className="font-(--font-anton) text-[clamp(38px,5vw,74px)] uppercase leading-[0.95] tracking-[-1px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-170 text-[16px] font-light leading-8 text-[#c6c2bc]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function HeroMetric({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div>
      <div
        className="font-(--font-anton) text-[36px] leading-none"
        style={{ color: accent }}
      >
        {value}
      </div>
      <div className="mt-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#8f8b85]">
        {label}
      </div>
    </div>
  );
}

function FeatureCard({
  accent,
  label,
  title,
  description,
}: {
  accent: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="border border-[rgba(245,240,232,0.10)] bg-[rgba(245,240,232,0.04)] p-5 backdrop-blur-[10px]"
      style={{ borderTop: `4px solid ${accent}` }}
    >
      <div
        className="font-(--font-space-mono) text-[10px] uppercase tracking-[2px]"
        style={{ color: accent }}
      >
        {label}
      </div>
      <div className="mt-4 font-(--font-anton) text-[28px] uppercase leading-none tracking-[0.4px]">
        {title}
      </div>
      <p className="mt-4 text-[15px] font-light leading-7 text-[#c6c2bc]">
        {description}
      </p>
    </div>
  );
}

function HowItWorksCard({
  number,
  accent,
  title,
  description,
}: {
  number: string;
  accent: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.03)] px-9 py-12">
      <div className="pointer-events-none absolute -right-5 -top-5 font-(--font-anton) text-[120px] leading-none opacity-[0.04]">
        {number}
      </div>
      <div
        className="mb-7 inline-flex px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px]"
        style={{ backgroundColor: `${accent}1F`, color: accent }}
      >
        {number}
      </div>
      <h3 className="font-(--font-anton) text-[28px] uppercase leading-none tracking-[0.4px]">
        {title}
      </h3>
      <p className="mt-5 text-[15px] font-light leading-7 text-[#c6c2bc]">
        {description}
      </p>
    </div>
  );
}

function StatementCard({
  accent,
  title,
  body,
}: {
  accent: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="border border-[rgba(245,240,232,0.10)] bg-[rgba(245,240,232,0.03)] p-6"
      style={{ borderTop: `4px solid ${accent}` }}
    >
      <h3 className="font-(--font-anton) text-[32px] uppercase leading-none tracking-[0.4px]">
        {title}
      </h3>
      <p className="mt-5 text-[15px] font-light leading-7 text-[#c6c2bc]">
        {body}
      </p>
    </div>
  );
}

function RewardCard({ title }: { title: string }) {
  return (
    <div className="border border-[rgba(245,240,232,0.10)] bg-[rgba(245,240,232,0.03)] p-5">
      <div className="font-(--font-anton) text-[28px] uppercase leading-none tracking-[0.4px]">
        {title}
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
      <div
        className="mt-2 font-(--font-anton) text-[30px] leading-none"
        style={{ color: accent }}
      >
        {value}
      </div>
    </div>
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
      <div
        className="mt-2 font-(--font-anton) text-[34px] leading-none"
        style={{ color: accent }}
      >
        {value}
      </div>
    </div>
  );
}
