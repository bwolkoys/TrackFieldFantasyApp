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
    name: "Gabby Thomas",
    category: "Sprint",
    event: "200m / 100m",
    height: `5'9"`,
    weight: "128 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "21.78",
    bestStatMeaning: "A world-class 200m time that signals she can win against almost anyone in the field.",
    insight: "Smooth, efficient runner with elite speed and big-race confidence.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "200m Final",
    nextEventDate: "June 4",
    nextEventTime: "1:45 PM PST",
  },
  {
    name: "Noah Lyles",
    category: "Sprint",
    event: "100m / 200m",
    height: `5'11"`,
    weight: "154 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "19.52",
    bestStatMeaning: "One of the fastest 200m performances in the world and a major indicator of title-winning form.",
    insight: "A marquee sprinter with star power, closing speed, and big scoring potential.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "200m Final",
    nextEventDate: "June 4",
    nextEventTime: "1:45 PM PST",
  },
  {
    name: "Sha'Carri Richardson",
    category: "Sprint",
    event: "100m / 200m",
    height: `5'1"`,
    weight: "119 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "10.71",
    bestStatMeaning: "An elite 100m sprint that puts her among the fastest women in the world.",
    insight: "Explosive acceleration and huge fan appeal every time she steps on the track.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "100m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:40 PM PST",
  },
  {
    name: "Josh Kerr",
    category: "Distance",
    event: "1500m / Mile",
    height: `6'0"`,
    weight: "150 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "3:29.38",
    bestStatMeaning: "An elite 1500m result showing he can contend for wins in top international fields.",
    insight: "A tactically sharp racer with a dangerous finishing kick.",
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
    bestStatMeaning: "One of the best hurdle times in the world and a mark that usually wins or contends for the win.",
    insight: "Fast, technically clean hurdler who scores consistently at big meets.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "110m Hurdles Final",
    nextEventDate: "June 4",
    nextEventTime: "12:55 PM PST",
  },
  {
    name: "Yared Nuguse",
    category: "Distance",
    event: "1500m / Mile",
    height: `6'0"`,
    weight: "145 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "3:43.97",
    bestStatMeaning: "A top-level mile result that shows he belongs with the very best middle-distance runners.",
    insight: "Calm racer with strong pacing and a world-class final lap.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "1500m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:05 PM PST",
  },
  {
    name: "Ryan Crouser",
    category: "Field",
    event: "Shot Put",
    height: `6'7"`,
    weight: "320 lbs",
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "22.91m",
    bestStatMeaning: "A huge throw that signals world-leading strength and championship-level consistency.",
    insight: "One of the safest high-scoring field-event athletes in the world.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Shot Put Final",
    nextEventDate: "June 4",
    nextEventTime: "9:55 AM PST",
  },
  {
    name: "Anna Hall",
    category: "Multi-Event",
    event: "Heptathlon",
    height: `6'0"`,
    weight: "160 lbs",
    bestStatLabel: "Best Recent Score",
    bestStatValue: "6423 pts",
    bestStatMeaning: "A very strong all-around score that reflects success across multiple events.",
    insight: "Versatile and dynamic, with the ability to score in many different ways.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Heptathlon Session 1",
    nextEventDate: "June 5",
    nextEventTime: "8:30 AM PST",
  },
  {
    name: "Cole Hocker",
    category: "Distance",
    event: "1500m / Mile",
    height: `6'0"`,
    weight: "150 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "3:31.12",
    bestStatMeaning: "A world-class middle-distance time that keeps him in the mix for major wins.",
    insight: "Patient racer who can stay close and close hard when it matters.",
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
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "4.80m",
    bestStatMeaning: "A championship-level vault that makes her a contender at every major competition.",
    insight: "A composed vaulter who handles finals extremely well.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Pole Vault Final",
    nextEventDate: "June 4",
    nextEventTime: "10:40 AM PST",
  },
  {
    name: "Joe Kovacs",
    category: "Field",
    event: "Shot Put",
    height: `6'0"`,
    weight: "295 lbs",
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "22.68m",
    bestStatMeaning: "An elite-level shot put distance that can absolutely score big points.",
    insight: "Veteran thrower with experience and big-meet upside.",
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
    bestStatLabel: "Best Recent Time",
    bestStatValue: "12:46.96",
    bestStatMeaning: "A top-end 5000m performance showing elite distance racing form.",
    insight: "Reliable, tough distance racer with excellent endurance and pacing.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "5000m Final",
    nextEventDate: "June 4",
    nextEventTime: "2:00 PM PST",
  },
  {
    name: "Tara Davis-Woodhall",
    category: "Field",
    event: "Long Jump",
    height: `5'4"`,
    weight: "128 lbs",
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "7.07m",
    bestStatMeaning: "A top long jump mark that signals strong medal potential.",
    insight: "A high-energy competitor with huge upside in major finals.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Long Jump Final",
    nextEventDate: "June 4",
    nextEventTime: "10:10 AM PST",
  },
  {
    name: "Melissa Jefferson-Wooden",
    category: "Sprint",
    event: "100m",
    height: `5'3"`,
    weight: "121 lbs",
    bestStatLabel: "Best Recent Time",
    bestStatValue: "10.80",
    bestStatMeaning: "A very fast 100m that keeps her right in the mix for podium-level performances.",
    insight: "Explosive and dangerous in any short sprint final.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "100m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:40 PM PST",
  },
  {
    name: "Mondo Duplantis",
    category: "Field",
    event: "Pole Vault",
    height: `5'11"`,
    weight: "181 lbs",
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "6.05m",
    bestStatMeaning: "A massive vault that puts him clearly among the best in the sport.",
    insight: "A dominant athlete who gives this roster major field-event strength.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Pole Vault Final",
    nextEventDate: "June 4",
    nextEventTime: "11:20 AM PST",
  },
];

export default function TeamGabbyPage() {
  return (
    <main
      className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-(--font-dm-sans)`}
    >
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <svg viewBox="0 0 1600 1200" className="h-full w-full">
            <defs>
              <radialGradient id="teamGlowGabby" cx="74%" cy="18%" r="50%">
                <stop offset="0%" stopColor="rgba(255,49,49,0.22)" />
                <stop offset="45%" stopColor="rgba(59,127,255,0.10)" />
                <stop offset="100%" stopColor="rgba(10,10,10,0)" />
              </radialGradient>
            </defs>
            <rect width="1600" height="1200" fill="url(#teamGlowGabby)" />
            <g fill="none" stroke="rgba(245,240,232,0.07)" strokeWidth="1.2">
              <path d="M1310 -40 Q1040 300 1160 1240" />
              <path d="M1400 -40 Q1130 300 1250 1240" />
              <path d="M1220 -40 Q950 300 1070 1240" />
            </g>
          </svg>
        </div>

        <div className="pointer-events-none absolute -right-[10%] -top-[10%] h-[120%] w-[34%] -skew-x-[8deg] bg-[rgba(255,49,49,0.04)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/dashboard-fans"
              className="font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#FF3131] transition-colors hover:text-[#f5f0e8]"
            >
              Back to Fan Dashboard
            </Link>

            <div className="rounded-full bg-[rgba(255,49,49,0.14)] px-4 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#FF3131]">
              Team Gabby
            </div>
          </div>

          <section className="border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px] sm:p-8">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <div className="mb-5 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#FF3131]">
                  <span className="block h-0.5 w-8 bg-[#FF3131]" />
                  Fan Team View
                </div>

                <h1 className="font-(--font-anton) text-[clamp(40px,6vw,88px)] uppercase leading-[0.92] tracking-[-1px]">
                  <span className="block">Team</span>
                  <span className="block text-[#FF3131]">Gabby</span>
                </h1>

                <p className="mt-4 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#b8b4ae]">
                  Managed by Gabby Thomas
                </p>

                <p className="mt-5 max-w-170 text-[16px] font-light leading-7 text-[#c6c2bc]">
                  A sprint-heavy roster with major star power, explosive speed, and several athletes who can win high-profile finals.
                  This page makes it easier for casual fans to understand what each athlete does and why they matter.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <InfoMetric label="Roster Size" value="15" accent="#FF3131" />
                <InfoMetric label="Fans Following" value="4,360" accent="#9B5EFF" />
                <InfoMetric label="Team Style" value="Speed" accent="#3B7FFF" />
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
                      <div className="bg-[rgba(255,49,49,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#FF3131]">
                        Athlete {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="border border-[rgba(245,240,232,0.12)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#b8b4ae]">
                        {athlete.category}
                      </div>
                    </div>

                    <h2 className="font-(--font-anton) text-[34px] uppercase leading-none tracking-[0.4px]">
                      {athlete.name}
                    </h2>

                    <p className="mt-3 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#FF3131]">
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
                      <div className="mt-3 font-(--font-anton) text-[32px] leading-none text-[#FF3131]">
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