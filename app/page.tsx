
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  event: string;
  initials: string;
  avatarClass: string;
};

type Team = {
  name: string;
  manager: string;
  athletes: string[];
  accent: string;
};

const managers: Manager[] = [
  {
    name: "Mondo Duplantis",
    event: "Pole Vault",
    initials: "MD",
    avatarClass: "bg-[#9B5EFF] text-[#0a0a0a]",
  },
  {
    name: "Gabby Thomas",
    event: "200m / 4x100",
    initials: "GT",
    avatarClass: "bg-[#FF3131] text-[#f5f0e8]",
  },
  {
    name: "Noah Lyles",
    event: "100m / 200m",
    initials: "NL",
    avatarClass: "bg-[#1248E0] text-[#f5f0e8]",
  },
  {
    name: "Grant Fisher",
    event: "Distance",
    initials: "GF",
    avatarClass: "bg-[#00D26A] text-[#0a0a0a]",
  },
  {
    name: "Anna Hall",
    event: "Heptathlon",
    initials: "AH",
    avatarClass: "bg-[#FF6B1A] text-[#0a0a0a]",
  },
];

const teams: Team[] = [
  {
    name: "Team Mondo",
    manager: "Mondo Duplantis",
    athletes: ["Cole Hocker", "Katie Moon", "Rai Benjamin"],
    accent: "border-t-[#9B5EFF] hover:border-[#9B5EFF]",
  },
  {
    name: "Team Gabby",
    manager: "Gabby Thomas",
    athletes: ["Melissa Jefferson-Wooden", "Anna Hall", "Joe Kovacs"],
    accent: "border-t-[#FF3131] hover:border-[#FF3131]",
  },
  {
    name: "Team Noah",
    manager: "Noah Lyles",
    athletes: ["Grant Fisher", "Tara Davis-Woodhall", "Emmanouil Karalis"],
    accent: "border-t-[#3B7FFF] hover:border-[#3B7FFF]",
  },
  {
    name: "Team Rai",
    manager: "Rai Benjamin",
    athletes: ["Ryan Crouser", "Karsten Warholm", "Gabby Thomas"],
    accent: "border-t-[#00D26A] hover:border-[#00D26A]",
  },
];

export default function FielddayPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      requestAnimationFrame(() => {
        setRing({ x: e.clientX - 12, y: e.clientY - 12 });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} bg-[#0a0a0a] text-[#f5f0e8] overflow-x-hidden scroll-smooth cursor-none font-(--font-dm-sans)`}
    >
      <div
        className="pointer-events-none fixed z-9999 h-3 w-3 rounded-full bg-[#9B5EFF] mix-blend-difference transition-transform duration-150 ease-out"
        style={{ left: mouse.x - 6, top: mouse.y - 6 }}
      />
      <div
        className="pointer-events-none fixed z-9998 h-9 w-9 rounded-full border border-[#9B5EFF] mix-blend-difference transition-all duration-300"
        style={{ left: ring.x, top: ring.y }}
      />

      <nav className="fixed left-0 right-0 top-0 z-100 flex items-center justify-between px-12 py-5 mix-blend-normal">
        <a
          href="#"
          className="font-(--font-anton) text-[22px] tracking-[4px] text-[#9B5EFF] no-underline"
        >
          FIELDDAY
        </a>

        <ul className="hidden list-none items-center gap-9 md:flex">
          {[
            ["How It Works", "#how-it-works"],
            ["Managers", "#managers"],
            ["Teams", "#teams"],
          ].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#bab7b1] no-underline transition-colors duration-200 hover:text-[#9B5EFF]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Link href="/signup">
          <button className="bg-[#9B5EFF] px-5.5 py-2.5 font-bold text-[11px] uppercase tracking-[2px] text-[#0a0a0a] transition duration-200 hover:scale-[1.03] hover:bg-[#f5f0e8]">
            Sign Up
          </button>
        </Link>
      </nav>

      <section className="relative grid min-h-screen overflow-hidden lg:grid-cols-2">
        <div className="relative z-2 flex flex-col justify-center px-12 pb-20 pt-35">
          <div className="mb-7 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#9B5EFF]">
            <span className="block h-0.5 w-8 bg-[#9B5EFF]" />
            Fantasy Track &amp; Field
          </div>

          <h1 className="mb-9 font-(--font-anton) text-[clamp(72px,8vw,120px)] uppercase leading-[0.92] tracking-[-1px]">
            <span className="block">Own The</span>
            <span className="block text-[#9B5EFF]">Season</span>
            <span className="block text-transparent [WebkitTextStroke:2px_#f5f0e8]">
              Live
            </span>
          </h1>

          <p className="mb-12 max-w-100 text-[17px] font-light leading-[1.65] text-[#c6c2bc]">
            Build your squad, follow elite athlete managers, and score points in
            real time during the Diamond League season.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button className="btn-primary relative overflow-hidden px-10 py-4.5 font-(--font-anton) text-base uppercase tracking-[3px] text-[#0a0a0a] transition-transform duration-200 hover:-translate-y-0.5">
              Pick Your Team
            </button>
            <button className="border border-[rgba(245,240,232,0.3)] bg-transparent px-8 py-4.5 font-(--font-space-mono) text-xs uppercase tracking-[2px] text-[#f5f0e8] transition-colors duration-200 hover:border-[#f5f0e8] hover:text-[#9B5EFF]">
              See How It Works
            </button>
          </div>

          <div className="mt-16 flex gap-10 border-t border-[rgba(245,240,232,0.1)] pt-10">
            {[
              ["4", "Athlete Managers"],
              ["15", "Athletes Per Team"],
              ["06.01", "Soft Launch"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-(--font-anton) text-4xl leading-none text-[#9B5EFF]">
                  {num}
                </div>
                <div className="mt-1 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#a3a09a]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 800 1000" className="h-full w-full">
              <defs>
                <radialGradient id="heroGlow" cx="70%" cy="30%" r="55%">
                  <stop offset="0%" stopColor="rgba(155,94,255,0.18)" />
                  <stop offset="100%" stopColor="rgba(10,10,10,0)" />
                </radialGradient>
              </defs>
              <rect width="800" height="1000" fill="url(#heroGlow)" />
              <g opacity="0.1" stroke="#f5f0e8" fill="none">
                <path d="M700 0 Q540 220 610 1000" strokeWidth="1" />
                <path d="M760 0 Q600 240 670 1000" strokeWidth="1" />
                <path d="M640 0 Q480 210 550 1000" strokeWidth="1" />
              </g>
            </svg>
          </div>

          <div className="pointer-events-none absolute -right-[5%] -top-[10%] h-[120%] w-[55%] -skew-x-6 bg-[rgba(255,224,48,0.03)]" />
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-linear-to-t from-[rgba(255,224,48,0.04)] to-transparent" />

          <div className="absolute bottom-10 left-5 right-5 h-45">
            <svg viewBox="0 0 900 180" className="h-full w-full">
              <g fill="none" stroke="rgba(245,240,232,0.22)" strokeWidth="2">
                <path d="M-40 160 C 180 40, 520 40, 940 160" />
                <path d="M-40 135 C 180 15, 520 15, 940 135" />
                <path d="M-40 110 C 180 -10, 520 -10, 940 110" />
                <path d="M-40 85 C 180 -35, 520 -35, 940 85" />
              </g>
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-100 w-75">
              {[
                {
                  name: "Gabby Thomas",
                  event: "Sprints",
                  points: "128",
                  top: "top-0 left-0",
                  border: "border-t-[3px] border-t-[#9B5EFF]",
                  delay: "0s",
                },
                {
                  name: "Mondo Duplantis",
                  event: "Pole Vault",
                  points: "114",
                  top: "top-20 left-[60px]",
                  border: "border-t-[3px] border-t-[#FF3131]",
                  delay: "1s",
                },
                {
                  name: "Grant Fisher",
                  event: "Distance",
                  points: "106",
                  top: "top-40 left-5",
                  border: "border-t-[3px] border-t-[#3B7FFF]",
                  delay: "2s",
                },
              ].map((card) => (
                <div
                  key={card.name}
                  className={`athlete-card-hero absolute w-55 border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px] ${card.top} ${card.border}`}
                  style={{ animationDelay: card.delay }}
                >
                  <div className="mb-1 font-(--font-anton) text-lg tracking-[1px]">
                    {card.name}
                  </div>
                  <div className="mb-4 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#9B5EFF]">
                    {card.event}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-(--font-anton) text-[32px] text-[#9B5EFF]">
                      {card.points}
                    </div>
                    <div className="font-(--font-space-mono) text-[10px] uppercase tracking-[1px] text-[#a3a09a]">
                      Total Pts
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative px-12 py-30">
        <div className="mb-5 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#9B5EFF]">
          <span className="block h-0.5 w-6 bg-[#9B5EFF]" />
          How It Works
        </div>
        <h2 className="mb-16 font-(--font-anton) text-[clamp(40px,5vw,72px)] uppercase leading-[0.95]">
          Pick. Follow. <br /> Score.
        </h2>

        <div className="grid gap-0.5 lg:grid-cols-3">
          {[
            {
              num: "01",
              iconClass: "bg-[#9B5EFF]",
              icon: "⚑",
              title: "Choose A Manager",
              desc: "Fans sign up, explore athlete managers, and pick the team they want to ride with for the season.",
            },
            {
              num: "02",
              iconClass: "bg-[#FF3131]",
              icon: "↗",
              title: "Track Live Results",
              desc: "Scores update around real competition data, giving fans an easy way to follow every major moment.",
            },
            {
              num: "03",
              iconClass: "bg-[#1248E0]",
              icon: "★",
              title: "Win Experiences",
              desc: "Top-performing teams unlock prizes, event tickets, fan experiences, and special access throughout the year.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="group relative overflow-hidden border border-[rgba(245,240,232,0.08)] bg-[rgba(245,240,232,0.03)] px-9 py-12 transition-colors duration-300 hover:bg-[rgba(245,240,232,0.06)]"
              data-num={step.num}
            >
              <div className="pointer-events-none absolute -right-5 -top-5 font-(--font-anton) text-[120px] leading-none opacity-[0.04]">
                {step.num}
              </div>
              <div
                className={`mb-7 flex h-12 w-12 items-center justify-center text-2xl text-[#0a0a0a] ${step.iconClass}`}
              >
                {step.icon}
              </div>
              <h3 className="mb-4 font-(--font-anton) text-2xl uppercase tracking-[1px]">
                {step.title}
              </h3>
              <p className="text-[15px] font-light leading-[1.7] text-[#afaba5]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="managers"
        className="overflow-hidden bg-[#f5f0e8] py-30 text-[#0a0a0a]"
      >
        <div className="px-12">
          <div className="mb-5 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#FF3131]">
            <span className="block h-0.5 w-6 bg-[#FF3131]" />
            Athlete Managers
          </div>
          <h2 className="font-(--font-anton) text-[clamp(40px,5vw,72px)] uppercase leading-[0.95]">
            The People <br /> Picking The Teams
          </h2>
        </div>

        <div className="mt-14 overflow-hidden border-y-2 border-[#0a0a0a] py-8">
          <div className="managers-marquee flex w-max gap-0">
            {[...managers, ...managers].map((manager, idx) => (
              <div
                key={`${manager.name}-${idx}`}
                className="inline-flex whitespace-nowrap border-r-2 border-[#0a0a0a] px-8 py-2 pl-2"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-full font-(--font-anton) text-lg ${manager.avatarClass}`}
                  >
                    {manager.initials}
                  </div>
                  <div>
                    <div className="font-(--font-anton) text-xl tracking-[0.5px]">
                      {manager.name}
                    </div>
                    <div className="font-(--font-space-mono) text-[10px] uppercase tracking-[1px] text-[#97948f]">
                      {manager.event}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teams" className="relative overflow-hidden px-12 py-30">
        <div className="mb-5 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#9B5EFF]">
          <span className="block h-0.5 w-6 bg-[#9B5EFF]" />
          Teams
        </div>
        <h2 className="font-(--font-anton) text-[clamp(40px,5vw,72px)] uppercase leading-[0.95]">
          Follow Your <br /> Favorite Squad
        </h2>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {teams.map((team) => (
            <div
              key={team.name}
              className={`group relative overflow-hidden border border-[rgba(245,240,232,0.1)] bg-[rgba(245,240,232,0.03)] px-6 py-8 transition duration-300 hover:-translate-y-1.5 ${team.accent}`}
            >
              <div className="mb-3 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#9B5EFF]">
                Managed By {team.manager}
              </div>
              <h3 className="mb-5 font-(--font-anton) text-[30px] uppercase leading-none tracking-[0.5px]">
                {team.name}
              </h3>
              <div className="space-y-3">
                {team.athletes.map((athlete) => (
                  <div
                    key={athlete}
                    className="border-b border-[rgba(245,240,232,0.08)] pb-3 font-(--font-space-mono) text-xs uppercase tracking-[1.5px] text-[#c6c2bc]"
                  >
                    {athlete}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .btn-primary::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #ff3131;
          transform: translateX(-101%);
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }

        .btn-primary:hover::after {
          transform: translateX(0);
        }

        .athlete-card-hero {
          animation: floatCard 4s ease-in-out infinite;
        }

        .managers-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1024px) {
          :global(body) {
            cursor: auto;
          }
        }
      `}</style>
    </div>
  );
}
