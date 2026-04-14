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

type Athlete = {
  name: string;
  category: string;
  event: string;
  height: string;
  weight: string;
  score: number;
  bestStatLabel: string;
  bestStatValue: string;
  bestStatMeaning: string;
  insight: string;
  nextEventMeet: string;
  nextEventName: string;
  nextEventDate: string;
  nextEventTime: string;
};

const athletes: Athlete[] = [
  {
    name: "Mondo Duplantis",
    category: "Field",
    event: "Pole Vault",
    height: `5'11"`,
    weight: "181 lbs",
    score: 28,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "6.05m",
    bestStatMeaning: "An elite vault that puts him among the best pole vaulters in the world.",
    insight: "A fan favorite and one of the most dominant athletes in track and field.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Pole Vault Final",
    nextEventDate: "June 4",
    nextEventTime: "11:20 AM PST",
  },
  {
    name: "Cole Hocker",
    category: "Distance",
    event: "1500m / Mile",
    height: `6'0"`,
    weight: "150 lbs",
    score: 22,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "3:31.12",
    bestStatMeaning: "A world-class 1500m time that shows he can compete with the best middle-distance runners.",
    insight: "Known for tactical racing and a strong kick at the end.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "1500m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:05 PM PST",
  },
  {
    name: "Katie Moon",
    category: "Field",
    event: "Pole Vault",
    height: `6'1"`,
    weight: "154 lbs",
    score: 18,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "4.80m",
    bestStatMeaning: "A championship-level vault that consistently puts her in podium contention.",
    insight: "One of the most reliable vaulters in big-pressure finals.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Pole Vault Final",
    nextEventDate: "June 4",
    nextEventTime: "10:40 AM PST",
  },
  {
    name: "Rai Benjamin",
    category: "Sprint",
    event: "400m Hurdles",
    height: `6'3"`,
    weight: "170 lbs",
    score: 24,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "46.82",
    bestStatMeaning: "A top-tier 400m hurdles time and the kind of performance that wins major global meets.",
    insight: "Explosive over the last 150m and one of the top hurdle racers in the world.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "400m Hurdles Final",
    nextEventDate: "June 4",
    nextEventTime: "1:10 PM PST",
  },
  {
    name: "Ryan Crouser",
    category: "Field",
    event: "Shot Put",
    height: `6'7"`,
    weight: "320 lbs",
    score: 20,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "22.91m",
    bestStatMeaning: "An enormous throw that signals world-leading strength and consistency.",
    insight: "One of the most dominant throwers of his generation.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Shot Put Final",
    nextEventDate: "June 4",
    nextEventTime: "9:55 AM PST",
  },
  {
    name: "Grant Fisher",
    category: "Distance",
    event: "5000m / 10,000m",
    height: `5'11"`,
    weight: "132 lbs",
    score: 12,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "12:46.96",
    bestStatMeaning: "A very fast 5000m result that shows top-end international fitness.",
    insight: "Strong pace management and excellent endurance over long championship races.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "5000m Final",
    nextEventDate: "June 4",
    nextEventTime: "2:00 PM PST",
  },
  {
    name: "Anna Hall",
    category: "Multi-Event",
    event: "Heptathlon",
    height: `6'0"`,
    weight: "160 lbs",
    score: 15,
    bestStatLabel: "Best Recent Score",
    bestStatValue: "6423 pts",
    bestStatMeaning: "A high heptathlon score showing strength across multiple events, not just one.",
    insight: "One of the most versatile athletes in the sport.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Heptathlon Session 1",
    nextEventDate: "June 5",
    nextEventTime: "8:30 AM PST",
  },
  {
    name: "Gabby Thomas",
    category: "Sprint",
    event: "200m / 100m",
    height: `5'9"`,
    weight: "128 lbs",
    score: 19,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "21.78",
    bestStatMeaning: "An elite 200m time that puts her among the fastest women in the world.",
    insight: "Smooth, powerful running style with world-class top speed.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "200m Final",
    nextEventDate: "June 4",
    nextEventTime: "1:45 PM PST",
  },
  {
    name: "Melissa Jefferson-Wooden",
    category: "Sprint",
    event: "100m",
    height: `5'3"`,
    weight: "121 lbs",
    score: 11,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "10.80",
    bestStatMeaning: "An excellent 100m sprint time that makes her dangerous in any final.",
    insight: "Fast out of the blocks and built for explosive races.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "100m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:40 PM PST",
  },
  {
    name: "Emmanouil Karalis",
    category: "Field",
    event: "Pole Vault",
    height: `6'0"`,
    weight: "165 lbs",
    score: 9,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "5.92m",
    bestStatMeaning: "A high-level vault that puts him in strong international form.",
    insight: "A rising contender who can surprise at big meets.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Pole Vault Final",
    nextEventDate: "June 4",
    nextEventTime: "11:20 AM PST",
  },
  {
    name: "Joe Kovacs",
    category: "Field",
    event: "Shot Put",
    height: `6'0"`,
    weight: "295 lbs",
    score: 10,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "22.68m",
    bestStatMeaning: "A huge throw that keeps him in the conversation for wins at elite meets.",
    insight: "A veteran thrower who delivers in big competitions.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Shot Put Final",
    nextEventDate: "June 4",
    nextEventTime: "9:55 AM PST",
  },
  {
    name: "Tara Davis-Woodhall",
    category: "Field",
    event: "Long Jump",
    height: `5'4"`,
    weight: "128 lbs",
    score: 13,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "7.07m",
    bestStatMeaning: "A standout long jump performance that signals world-level medal potential.",
    insight: "A dynamic athlete with star power and explosive pop.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Long Jump Final",
    nextEventDate: "June 4",
    nextEventTime: "10:10 AM PST",
  },
  {
    name: "Noah Lyles",
    category: "Sprint",
    event: "100m / 200m",
    height: `5'11"`,
    weight: "154 lbs",
    score: 17,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "19.52",
    bestStatMeaning: "One of the fastest 200m times in the world and the kind of mark fans should watch closely.",
    insight: "A headline athlete who brings both speed and personality.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "200m Final",
    nextEventDate: "June 4",
    nextEventTime: "1:45 PM PST",
  },
  {
    name: "Karsten Warholm",
    category: "Sprint",
    event: "400m Hurdles",
    height: `6'2"`,
    weight: "176 lbs",
    score: 14,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "46.70",
    bestStatMeaning: "An elite hurdles result that signals real winning potential every time he races.",
    insight: "Aggressive, fearless racer with huge upside in finals.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "400m Hurdles Final",
    nextEventDate: "June 4",
    nextEventTime: "1:10 PM PST",
  },
  {
    name: "Valarie Allman",
    category: "Field",
    event: "Discus",
    height: `6'0"`,
    weight: "170 lbs",
    score: 8,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "69.80m",
    bestStatMeaning: "A very strong discus distance that makes her one of the most dangerous throwers in the field.",
    insight: "Technically sharp and consistently competitive against top throwers.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Discus Final",
    nextEventDate: "June 4",
    nextEventTime: "9:15 AM PST",
  },
];

export default function TeamMondoPage() {
  return (
    <main
      className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-(--font-dm-sans)`}
    >
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <svg viewBox="0 0 1600 1200" className="h-full w-full">
            <defs>
              <radialGradient id="teamGlow" cx="74%" cy="18%" r="50%">
                <stop offset="0%" stopColor="rgba(155,94,255,0.22)" />
                <stop offset="45%" stopColor="rgba(59,127,255,0.10)" />
                <stop offset="100%" stopColor="rgba(10,10,10,0)" />
              </radialGradient>
            </defs>
            <rect width="1600" height="1200" fill="url(#teamGlow)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="rounded-full bg-[rgba(155,94,255,0.14)] px-4 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#9B5EFF]">
              Team Mondo
            </div>
            <Link href="/dashboard-fans" className="font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#9B5EFF] transition-colors hover:text-[#f5f0e8]">
              Back to Fan Dashboard
            </Link>
          </div>

          <section className="border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px] sm:p-8">
            <h1 className="font-(--font-anton) text-[clamp(40px,6vw,88px)] uppercase leading-[0.92] tracking-[-1px]">
              <span className="block">Team</span>
              <span className="block text-[#9B5EFF]">Mondo</span>
            </h1>
            <p className="mt-4 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#b8b4ae]">
              Managed by Mondo Duplantis
            </p>
            <p className="mt-5 max-w-170 text-[16px] font-light leading-7 text-[#c6c2bc]">
              A high-upside team built around field-event dominance, versatile stars, and athletes who can score in major finals.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-[rgba(155,94,255,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#9B5EFF]">
              Top 10 athletes count toward team score
            </div>
          </section>

          <section className="mt-8 grid gap-4">
            {athletes.map((athlete, index) => (
              <article key={athlete.name} className="border border-[rgba(245,240,232,0.10)] bg-[rgba(245,240,232,0.03)] p-5 sm:p-6">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                  <div className="xl:max-w-110">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <div className="bg-[rgba(155,94,255,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#9B5EFF]">
                        Athlete {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="border border-[rgba(245,240,232,0.12)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#b8b4ae]">
                        {athlete.category}
                      </div>
                    </div>

                    <h2 className="font-(--font-anton) text-[34px] uppercase leading-none tracking-[0.4px]">
                      {athlete.name}
                    </h2>

                    <p className="mt-3 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#9B5EFF]">
                      {athlete.event}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 bg-[rgba(155,94,255,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#9B5EFF]">
                      Season Score
                      <span className="font-(--font-anton) text-[22px] leading-none text-[#f5f0e8]">
                        +{athlete.score}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="border border-[rgba(245,240,232,0.12)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[1.5px] text-[#b8b4ae]">
                        Height: {athlete.height}
                      </span>
                      <span className="border border-[rgba(245,240,232,0.12)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[1.5px] text-[#b8b4ae]">
                        Weight: {athlete.weight}
                      </span>
                    </div>

                    <div className="mt-6">
                      <div className="mb-2 font-(--font-space-mono) text-[10px] uppercase tracking-[1.8px] text-[#9c9892]">
                        Why This Athlete Matters
                      </div>
                      <p className="text-[15px] font-light leading-7 text-[#c6c2bc]">{athlete.insight}</p>
                    </div>
                  </div>

                  <div className="grid w-full gap-4 xl:max-w-130">
                    <div className="border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.025)] p-4">
                      <div className="font-(--font-space-mono) text-[10px] uppercase tracking-[1.8px] text-[#9c9892]">
                        Key Performance
                      </div>
                      <div className="mt-3 font-(--font-anton) text-[32px] leading-none text-[#9B5EFF]">
                        {athlete.bestStatValue}
                      </div>
                      <div className="mt-2 font-(--font-space-mono) text-[10px] uppercase tracking-[1.5px] text-[#b8b4ae]">
                        {athlete.bestStatLabel}
                      </div>
                      <p className="mt-3 text-[14px] font-light leading-6 text-[#c6c2bc]">
                        {athlete.bestStatMeaning}
                      </p>
                    </div>

                    <div className="border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.025)] p-4">
                      <div className="font-(--font-space-mono) text-[10px] uppercase tracking-[1.8px] text-[#9c9892]">
                        Next Event
                      </div>
                      <div className="mt-3 font-(--font-anton) text-[26px] leading-none text-[#f5f0e8]">
                        {athlete.nextEventName}
                      </div>
                      <div className="mt-2 text-[14px] font-light leading-6 text-[#c6c2bc]">
                        {athlete.nextEventMeet}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="bg-[rgba(59,127,255,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[1.5px] text-[#3B7FFF]">
                          {athlete.nextEventDate}
                        </span>
                        <span className="bg-[rgba(255,49,49,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[1.5px] text-[#FF3131]">
                          {athlete.nextEventTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}