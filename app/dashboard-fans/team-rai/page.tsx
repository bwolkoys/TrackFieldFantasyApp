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
    name: "Rai Benjamin",
    category: "Sprint",
    event: "400m Hurdles",
    height: `6'3"`,
    weight: "170 lbs",
    score: 24,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "46.82",
    bestStatMeaning: "A world-class hurdles mark and the kind of time that can win global finals.",
    insight: "Explosive hurdler with elite rhythm and exceptional closing speed.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "400m Hurdles Final",
    nextEventDate: "June 4",
    nextEventTime: "1:10 PM PST",
  },
  {
    name: "Karsten Warholm",
    category: "Sprint",
    event: "400m Hurdles",
    height: `6'2"`,
    weight: "176 lbs",
    score: 23,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "46.70",
    bestStatMeaning: "An elite hurdle time that signals real title-winning form.",
    insight: "Aggressive racer who brings intensity and big scoring upside every time out.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "400m Hurdles Final",
    nextEventDate: "June 4",
    nextEventTime: "1:10 PM PST",
  },
  {
    name: "Sydney McLaughlin-Levrone",
    category: "Sprint",
    event: "400m / 400m Hurdles",
    height: `5'9"`,
    weight: "132 lbs",
    score: 20,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "50.68",
    bestStatMeaning: "A very strong 400m performance that highlights elite speed and range.",
    insight: "One of the sport’s biggest stars with massive scoring potential and fan appeal.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "400m Final",
    nextEventDate: "June 4",
    nextEventTime: "1:25 PM PST",
  },
  {
    name: "Joe Kovacs",
    category: "Field",
    event: "Shot Put",
    height: `6'0"`,
    weight: "295 lbs",
    score: 12,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "22.68m",
    bestStatMeaning: "A huge shot put result that keeps him competitive for wins at elite meets.",
    insight: "Experienced thrower with proven big-stage performance.",
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
    bestStatMeaning: "An elite long jump distance that puts her right in the mix at world-class meets.",
    insight: "A dynamic, fan-friendly athlete with explosive ability and major upside.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Long Jump Final",
    nextEventDate: "June 4",
    nextEventTime: "10:10 AM PST",
  },
  {
    name: "Valarie Allman",
    category: "Field",
    event: "Discus",
    height: `6'0"`,
    weight: "170 lbs",
    score: 11,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "69.80m",
    bestStatMeaning: "A massive discus throw that shows true world-level form.",
    insight: "One of the strongest field-event scorers on the roster.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Discus Final",
    nextEventDate: "June 4",
    nextEventTime: "9:15 AM PST",
  },
  {
    name: "Noah Lyles",
    category: "Sprint",
    event: "100m / 200m",
    height: `5'11"`,
    weight: "154 lbs",
    score: 16,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "19.52",
    bestStatMeaning: "An elite 200m time and one of the clearest signs of top-end sprint form.",
    insight: "A major point threat with elite speed and star presence.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "200m Final",
    nextEventDate: "June 4",
    nextEventTime: "1:45 PM PST",
  },
  {
    name: "Gabby Thomas",
    category: "Sprint",
    event: "200m / 100m",
    height: `5'9"`,
    weight: "128 lbs",
    score: 15,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "21.78",
    bestStatMeaning: "A world-class 200m result that makes her a major sprint scorer.",
    insight: "Consistent, efficient sprinter with a high podium ceiling.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "200m Final",
    nextEventDate: "June 4",
    nextEventTime: "1:45 PM PST",
  },
  {
    name: "Grant Fisher",
    category: "Distance",
    event: "5000m / 10,000m",
    height: `5'11"`,
    weight: "132 lbs",
    score: 8,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "12:46.96",
    bestStatMeaning: "A top-level distance mark showing he can hang with the best over long races.",
    insight: "Disciplined distance athlete with excellent toughness and endurance.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "5000m Final",
    nextEventDate: "June 4",
    nextEventTime: "2:00 PM PST",
  },
  {
    name: "Cole Hocker",
    category: "Distance",
    event: "1500m / Mile",
    height: `6'0"`,
    weight: "150 lbs",
    score: 9,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "3:31.12",
    bestStatMeaning: "A strong middle-distance result that keeps him in the conversation at elite meets.",
    insight: "Tactical racer with a strong kick and good fan-watchability.",
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
    score: 7,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "22.91m",
    bestStatMeaning: "A huge throw that makes him one of the strongest field-event anchors possible.",
    insight: "A dominant scorer in shot put with exceptional consistency.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Shot Put Final",
    nextEventDate: "June 4",
    nextEventTime: "9:55 AM PST",
  },
  {
    name: "Mondo Duplantis",
    category: "Field",
    event: "Pole Vault",
    height: `5'11"`,
    weight: "181 lbs",
    score: 14,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "6.05m",
    bestStatMeaning: "An elite vault that gives this roster serious field-event firepower.",
    insight: "A superstar vaulter who can create separation in fantasy-style scoring.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Pole Vault Final",
    nextEventDate: "June 4",
    nextEventTime: "11:20 AM PST",
  },
  {
    name: "Katie Moon",
    category: "Field",
    event: "Pole Vault",
    height: `6'1"`,
    weight: "154 lbs",
    score: 8,
    bestStatLabel: "Best Recent Mark",
    bestStatValue: "4.80m",
    bestStatMeaning: "A high-end vault that makes her a dependable medal-level threat.",
    insight: "Excellent composure in big moments and a steady point earner.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Pole Vault Final",
    nextEventDate: "June 4",
    nextEventTime: "10:40 AM PST",
  },
  {
    name: "Anna Hall",
    category: "Multi-Event",
    event: "Heptathlon",
    height: `6'0"`,
    weight: "160 lbs",
    score: 10,
    bestStatLabel: "Best Recent Score",
    bestStatValue: "6423 pts",
    bestStatMeaning: "A strong all-around total showing she contributes across multiple disciplines.",
    insight: "Versatile athlete with broad scoring paths and strong upside.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "Heptathlon Session 1",
    nextEventDate: "June 5",
    nextEventTime: "8:30 AM PST",
  },
  {
    name: "Melissa Jefferson-Wooden",
    category: "Sprint",
    event: "100m",
    height: `5'3"`,
    weight: "121 lbs",
    score: 9,
    bestStatLabel: "Best Recent Time",
    bestStatValue: "10.80",
    bestStatMeaning: "A fast 100m sprint that makes her an immediate scoring factor.",
    insight: "Short sprint specialist with elite acceleration and sharp upside.",
    nextEventMeet: "Rome Diamond League",
    nextEventName: "100m Final",
    nextEventDate: "June 4",
    nextEventTime: "12:40 PM PST",
  },
];

export default function TeamRaiPage() {
  return (
    <main
      className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-(--font-dm-sans)`}
    >
      <div className="relative isolate overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="rounded-full bg-[rgba(0,210,106,0.14)] px-4 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#00D26A]">
              Team Rai
            </div>
            <Link href="/dashboard-fans" className="font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#00D26A] transition-colors hover:text-[#f5f0e8]">
              Back to Fan Dashboard
            </Link>
          </div>

          <section className="border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px] sm:p-8">
            <h1 className="font-(--font-anton) text-[clamp(40px,6vw,88px)] uppercase leading-[0.92] tracking-[-1px]">
              <span className="block">Team</span>
              <span className="block text-[#00D26A]">Rai</span>
            </h1>
            <p className="mt-4 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#b8b4ae]">
              Managed by Rai Benjamin
            </p>
            <p className="mt-5 max-w-170 text-[16px] font-light leading-7 text-[#c6c2bc]">
              A balanced, championship-style roster with high-end hurdlers, elite field-event athletes, and several stars who can score across different disciplines.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-[rgba(0,210,106,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#00D26A]">
              Top 10 athletes count toward team score
            </div>
          </section>

          <section className="mt-8 grid gap-4">
            {athletes.map((athlete, index) => (
              <article key={athlete.name} className="border border-[rgba(245,240,232,0.10)] bg-[rgba(245,240,232,0.03)] p-5 sm:p-6">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                  <div className="xl:max-w-110">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <div className="bg-[rgba(0,210,106,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#00D26A]">
                        Athlete {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="border border-[rgba(245,240,232,0.12)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#b8b4ae]">
                        {athlete.category}
                      </div>
                    </div>

                    <h2 className="font-(--font-anton) text-[34px] uppercase leading-none tracking-[0.4px]">
                      {athlete.name}
                    </h2>

                    <p className="mt-3 font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#00D26A]">
                      {athlete.event}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 bg-[rgba(0,210,106,0.14)] px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#00D26A]">
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
                      <div className="mt-3 font-(--font-anton) text-[32px] leading-none text-[#00D26A]">
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