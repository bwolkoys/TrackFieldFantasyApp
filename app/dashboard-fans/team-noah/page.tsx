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
    name: "Noah Lyles",
    category: "Sprint",
    event: "100m / 200m",
    height: `5'11"`,
    weight: "154 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "19.52",
    bestStatMeaning: "A truly elite 200m time and one of the strongest sprint indicators in the sport.",
    insight: "Headline athlete with the ability to score big and draw fan attention instantly.",
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
    bestStatLabel: "Best Recent Time",
    bestStatValue: "10.80",
    bestStatMeaning: "A very fast 100m result showing she can compete with the top short sprinters.",
    insight: "Excellent acceleration and strong scoring upside in straight sprint events.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "100m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:40 PM PST",
  },
  {
    name: "Kenny Bednarek",
    category: "Sprint",
    event: "200m / 100m",
    height: `5'11"`,
    weight: "165 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "19.67",
    bestStatMeaning: "A world-class 200m time that keeps him right near the front of elite sprint fields.",
    insight: "Strong medal threat with a smooth stride and consistent big-meet form.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "200m Final",
    nextEventDate: "June 4",
    nextEventTime: "1:45 PM PST",
  },
  {
    name: "Fred Kerley",
    category: "Sprint",
    event: "100m / 200m / 400m",
    height: `6'3"`,
    weight: "207 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "9.88",
    bestStatMeaning: "An elite 100m mark showing top-end sprint power and major scoring potential.",
    insight: "Versatile sprint athlete with raw speed and a strong championship résumé.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "100m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:40 PM PST",
  },
  {
    name: "Valarie Allman",
    category: "Field",
    event: "Discus",
    height: `6'0"`,
    weight: "170 lbs",
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "69.80m",
    bestStatMeaning: "A huge discus throw that puts her among the top throwers in the world.",
    insight: "A powerful, reliable scorer with real winning potential in field events.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Discus Final",
    nextEventDate: "June 4",
    nextEventTime: "9:15 AM PST",
  },
  {
    name: "Anna Hall",
    category: "Multi-Event",
    event: "Heptathlon",
    height: `6'0"`,
    weight: "160 lbs",
    bestStatLabel: "Best Recent Score",
    bestStatValue: "6423 pts",
    bestStatMeaning: "A strong overall heptathlon score that reflects elite all-around ability.",
    insight: "Versatile and exciting, with multiple paths to scoring well.",
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
    bestStatLabel: "Best Recent Time",
    bestStatValue: "21.78",
    bestStatMeaning: "An elite 200m sprint that makes her one of the biggest point threats on the roster.",
    insight: "Fast, efficient, and highly dependable in major sprint races.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "200m Final",
    nextEventDate: "June 4",
    nextEventTime: "1:45 PM PST",
  },
  {
    name: "Rai Benjamin",
    category: "Sprint",
    event: "400m Hurdles",
    height: `6'3"`,
    weight: "170 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "46.82",
    bestStatMeaning: "A world-class hurdles result and exactly the kind of mark that wins major races.",
    insight: "Long-striding hurdler with elite finishing strength.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "400m Hurdles Final",
    nextEventDate: "June 4",
    nextEventTime: "1:10 PM PST",
  },
  {
    name: "Josh Kerr",
    category: "Distance",
    event: "1500m / Mile",
    height: `6'0"`,
    weight: "150 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "3:29.38",
    bestStatMeaning: "A top global 1500m result showing elite form and sharp racing fitness.",
    insight: "Smart racer with a dangerous final 200m in close races.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "1500m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:05 PM PST",
  },
  {
    name: "Cole Hocker",
    category: "Distance",
    event: "1500m / Mile",
    height: `6'0"`,
    weight: "150 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "3:31.12",
    bestStatMeaning: "A strong middle-distance performance that keeps him in contention at top meets.",
    insight: "Patient runner who can close hard when the pace gets tactical.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "1500m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:05 PM PST",
  },
  {
    name: "Grant Holloway",
    category: "Sprint",
    event: "110m Hurdles",
    height: `6'2"`,
    weight: "190 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "12.86",
    bestStatMeaning: "An elite hurdle time that makes him a favorite nearly every time he races.",
    insight: "Technically sharp hurdler with consistent top-end speed.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "110m Hurdles Final",
    nextEventDate: "June 4",
    nextEventTime: "12:55 PM PST",
  },
  {
    name: "Ryan Crouser",
    category: "Field",
    event: "Shot Put",
    height: `6'7"`,
    weight: "320 lbs",
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "22.91m",
    bestStatMeaning: "A giant throw and one of the best field-event marks on any team.",
    insight: "A high-floor, high-ceiling scorer in shot put.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Shot Put Final",
    nextEventDate: "June 4",
    nextEventTime: "9:55 AM PST",
  },
  {
    name: "Katie Moon",
    category: "Field",
    event: "Pole Vault",
    height: `6'1"`,
    weight: "154 lbs",
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "4.80m",
    bestStatMeaning: "A championship-level vault that signals real podium potential.",
    insight: "Strong under pressure and a dependable finals performer.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Pole Vault Final",
    nextEventDate: "June 4",
    nextEventTime: "10:40 AM PST",
  },
  {
    name: "Tara Davis-Woodhall",
    category: "Field",
    event: "Long Jump",
    height: `5'4"`,
    weight: "128 lbs",
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "7.07m",
    bestStatMeaning: "A top long jump result that makes her a major threat in any final.",
    insight: "Explosive and exciting, with huge fan appeal and scoring upside.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Long Jump Final",
    nextEventDate: "June 4",
    nextEventTime: "10:10 AM PST",
  },
  {
    name: "Grant Fisher",
    category: "Distance",
    event: "5000m / 10,000m",
    height: `5'11"`,
    weight: "132 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "12:46.96",
    bestStatMeaning: "A high-level distance mark that shows elite stamina and top racing form.",
    insight: "Tough, disciplined distance athlete who rarely fades late.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "5000m Final",
    nextEventDate: "June 4",
    nextEventTime: "2:00 PM PST",
  },
];

export default function TeamNoahPage() {
  return (
    <main
      className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-(--font-dm-sans)`}
    >
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <svg viewBox="0 0 1600 1200" className="h-full w-full">
            <defs>
              <radialGradient id="teamGlowNoah" cx="74%" cy="18%" r="50%">
                <stop offset="0%" stopColor="rgba(59,127,255,0.22)" />
                <stop offset="45%" stopColor="rgba(155,94,255,0.10)" />
                <stop offset="100%" stopColor="rgba(10,10,10,0)" />
              </radialGradient>
            </defs>
            <rect width="1600" height="1200" fill="url(#teamGlowNoah)" />
            <g fill="none" stroke="rgba(245,240,232,0.07)" strokeWidth="1.2">
              <path d="M1310 -40 Q1040 300 1160 1240" />
              <path d="M1400 -40 Q1130 300 1250 1240" />
              <path d="M1220 -40 Q950 300 1070 1240" />
            </g>
          </svg>
        </div>

        <div className="pointer-events-none absolute -right-[10%] -top-[10%] h-[120%] w-[34%] -skew-x-[8deg] bg-[rgba(59,127,255,0.04)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/dashboard-fans"
              className="font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#3B7FFF] transition-colors hover:text-[#f5f0e8]"
            >
              Back to Fan Dashboard
            </Link>

            <div className="rounded-full bg-[rgba(59,127,255,0.14)] px-4 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#3B7FFF]">
              Team Noah
            </div>
          </div>

          <section className="border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px] sm:p-8">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <div className="mb-5 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#3B7FFF]">
                  <span className="block h-0.5 w-8 bg-[#3B7FFF]" />
                  Fan Team View
                </div>

                <h1 className="font-(--font-anton) text-[clamp(40px,6vw,88px)] uppercase leading-[0.92] tracking-[-1px]">
                  <span className="block">Team</span>
                  <span className="block text-[#3B7FFF]">Noah</span>
                </h1>

                <p className="mt-4 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#b8b4ae]">
                  Managed by Noah Lyles
                </p>

                <p className="mt-5 max-w-170 text-[16px] font-light leading-7 text-[#c6c2bc]">
                  A high-energy team built around headline sprint names, big personalities, and athletes with strong upside in both track and field events.
                  This page helps fans understand the roster quickly without needing to know the sport deeply already.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <InfoMetric label="Roster Size" value="15" accent="#3B7FFF" />
                <InfoMetric label="Fans Following" value="3,988" accent="#9B5EFF" />
                <InfoMetric label="Team Style" value="Star Power" accent="#FF3131" />
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-4">
            {athletes.map((athlete, index) => (
              <article
                key={athlete.name}
                className="border border-[rgba(245,240,232,0.10)] bg-[rgba(245,240,232,0.03)] p-5 sm:p-6"
              >
                <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                  <div className="xl:max-w-110">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <div className="bg-[rgba(59,127,255,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#3B7FFF]">
                        Athlete {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="border border-[rgba(245,240,232,0.12)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#b8b4ae]">
                        {athlete.category}
                      </div>
                    </div>

                    <h2 className="font-(--font-anton) text-[34px] uppercase leading-none tracking-[0.4px]">
                      {athlete.name}
                    </h2>

                    <p className="mt-3 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#3B7FFF]">
                      {athlete.event}
                    </p>

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
                      <div className="mt-3 font-(--font-anton) text-[32px] leading-none text-[#3B7FFF]">
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

function InfoMetric({
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
      <div className="mt-2 font-(--font-anton) text-[30px] leading-none" style={{ color: accent }}>
        {value}
      </div>
    </div>
  );
}