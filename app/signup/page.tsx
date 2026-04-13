"use client";

import { useState } from "react";
import Link from "next/link";
import { Anton, DM_Sans, Space_Mono } from "next/font/google";
import { useRouter } from "next/navigation";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

type FormMode = "fans" | "managers";
const TEST_MANAGER = {
  email: "manager@test.com",
  password: "admin123",
};

const TEST_FAN = {
  email: "fan@test.com",
  password: "123456",
};



export default function SignupPage() {
  const [mode, setMode] = useState<FormMode>("fans");

  return (
    <main
      className={`${anton.variable} ${dmSans.variable} ${spaceMono.variable} min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-(--font-dm-sans)`}
    >
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <svg viewBox="0 0 1440 1024" className="h-full w-full">
            <defs>
              <radialGradient id="signupGlow" cx="72%" cy="22%" r="50%">
                <stop offset="0%" stopColor="rgba(155,94,255,0.25)" />
                <stop offset="45%" stopColor="rgba(59,127,255,0.12)" />
                <stop offset="100%" stopColor="rgba(10,10,10,0)" />
              </radialGradient>
            </defs>
            <rect width="1440" height="1024" fill="url(#signupGlow)" />
            <g fill="none" stroke="rgba(245,240,232,0.08)" strokeWidth="1.2">
              <path d="M1180 -40 Q940 260 1040 1080" />
              <path d="M1260 -40 Q1020 260 1120 1080" />
              <path d="M1100 -40 Q860 260 960 1080" />
            </g>
          </svg>
        </div>

        <div className="pointer-events-none absolute -right-[8%] -top-[8%] h-[120%] w-[38%] -skew-x-[8deg] bg-[rgba(255,224,48,0.04)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10 lg:px-12">
          <header className="flex items-center justify-between py-3">
            <Link
              href="/"
              className="font-(--font-anton) text-[22px] tracking-[4px] text-[#9B5EFF] no-underline"
            >
              FIELDDAY
            </Link>

            <Link
              href="/"
              className="font-(--font-space-mono) text-[11px] uppercase tracking-[2px] text-[#bab7b1] transition-colors duration-200 hover:text-[#9B5EFF]"
            >
              Back Home
            </Link>
          </header>

          <section className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="max-w-140">
              <div className="mb-7 flex items-center gap-3 font-(--font-space-mono) text-[11px] uppercase tracking-[4px] text-[#9B5EFF]">
                <span className="block h-0.5 w-8 bg-[#9B5EFF]" />
                Join Fieldday
              </div>

              <h1 className="mb-8 font-(--font-anton) text-[clamp(54px,7vw,102px)] uppercase leading-[0.92] tracking-[-1px]">
                <span className="block">Choose</span>
                <span className="block text-[#9B5EFF]">Yours</span>
                <span className="block text-transparent [WebkitTextStroke:2px_#f5f0e8]">Access</span>
              </h1>

              <p className="max-w-115 text-[17px] font-light leading-[1.7] text-[#c6c2bc]">
                Fans can sign up to follow a manager’s team, get competition updates, and unlock prizes. Managers can sign in to access their private dashboard and manage their roster.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setMode("fans")}
                  className={`border px-5 py-5 text-left transition duration-200 ${
                    mode === "fans"
                      ? "border-[#9B5EFF] bg-[rgba(155,94,255,0.10)]"
                      : "border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.03)] hover:border-[#9B5EFF]"
                  }`}
                >
                  <div className="mb-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#9B5EFF]">
                    Fan Access
                  </div>
                  <div className="font-(--font-anton) text-[28px] uppercase leading-none">Sign Up</div>
                  <p className="mt-3 text-sm leading-6 text-[#bcb8b2]">
                    Create an account, choose a team, and follow the season live.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setMode("managers")}
                  className={`border px-5 py-5 text-left transition duration-200 ${
                    mode === "managers"
                      ? "border-[#FF3131] bg-[rgba(255,49,49,0.10)]"
                      : "border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.03)] hover:border-[#FF3131]"
                  }`}
                >
                  <div className="mb-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#FF3131]">
                    Manager Access
                  </div>
                  <div className="font-(--font-anton) text-[28px] uppercase leading-none">Sign In</div>
                  <p className="mt-3 text-sm leading-6 text-[#bcb8b2]">
                    Access your private dashboard to review athletes and manage your team.
                  </p>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-8 hidden h-[78%] w-px bg-[rgba(245,240,232,0.08)] lg:block" />

              <div className="relative overflow-hidden border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.04)] p-6 backdrop-blur-[10px] sm:p-8 lg:p-10">
                <div
                  className={`mb-6 inline-flex items-center gap-2 px-3 py-2 font-(--font-space-mono) text-[10px] uppercase tracking-[2px] ${
                    mode === "fans"
                      ? "bg-[rgba(155,94,255,0.12)] text-[#9B5EFF]"
                      : "bg-[rgba(255,49,49,0.12)] text-[#FF3131]"
                  }`}
                >
                  {mode === "fans" ? "Fan Registration" : "Manager Portal"}
                </div>

                {mode === "fans" ? <FanSignupForm /> : <ManagerSigninForm />}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function FanSignupForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill out all fields");
      return;
    }

    router.push("/dashboard-fans");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <h2 className="font-(--font-anton) text-[40px] uppercase leading-[0.95]">
          Fan Sign Up
        </h2>
        <p className="mt-3 max-w-115 text-[15px] font-light leading-7 text-[#bab7b1]">
          Join the first wave of fans, follow a manager’s team, and get updates on schedules, points, and giveaways.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="First Name" htmlFor="fan-first-name">
          <input
            id="fan-first-name"
            type="text"
            placeholder=""
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClassName}
          />
        </FormField>

        <FormField label="Last Name" htmlFor="fan-last-name">
          <input
            id="fan-last-name"
            type="text"
            placeholder=""
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClassName}
          />
        </FormField>
      </div>

      <FormField label="Email" htmlFor="fan-email">
        <input
          id="fan-email"
          type="email"
          placeholder="fan@test.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClassName}
        />
      </FormField>

      <FormField label="Create Password" htmlFor="fan-password">
        <input
          id="fan-password"
          type="password"
          placeholder="123456"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClassName}
        />
      </FormField>

      <button
        type="submit"
        className="relative overflow-hidden bg-[#9B5EFF] px-10 py-4.5 font-(--font-anton) text-base uppercase tracking-[3px] text-[#0a0a0a] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5f0e8]"
      >
        Create Fan Account
      </button>
    </form>
  );
}

function ManagerSigninForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === TEST_MANAGER.email && password === TEST_MANAGER.password) {
      router.push("/dashboard-managers");
    } else {
      alert("Invalid manager credentials");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <h2 className="font-(--font-anton) text-[40px] uppercase leading-[0.95]">
          Manager Sign In
        </h2>
        <p className="mt-3 max-w-115 text-[15px] font-light leading-7 text-[#bab7b1]">
          Sign in to access your private manager portal, view your athletes, and manage your team selections.
        </p>
      </div>

      <FormField label="Manager Email" htmlFor="manager-email">
        <input
          id="manager-email"
          type="email"
          placeholder="manager@test.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClassName}
        />
      </FormField>

      <FormField label="Password" htmlFor="manager-password">
        <input
          id="manager-password"
          type="password"
          placeholder="admin123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClassName}
        />
      </FormField>

      <div className="flex items-center justify-between gap-4 text-sm text-[#bcb8b2]">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border border-[rgba(245,240,232,0.3)] bg-transparent accent-[#FF3131]"
          />
          <span>Remember me</span>
        </label>
        <button
          type="button"
          className="font-(--font-space-mono) text-[10px] uppercase tracking-[1.5px] text-[#FF3131] transition-colors hover:text-[#f5f0e8]"
        >
          Forgot Password
        </button>
      </div>

      <button
        type="submit"
        className="bg-[#FF3131] px-10 py-4.5 font-(--font-anton) text-base uppercase tracking-[3px] text-[#0a0a0a] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5f0e8]"
      >
        Sign In As Manager
      </button>
    </form>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-(--font-space-mono) text-[10px] uppercase tracking-[2px] text-[#9c9892]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClassName =
  "w-full border border-[rgba(245,240,232,0.12)] bg-[rgba(245,240,232,0.03)] px-4 py-[16px] text-[15px] text-[#f5f0e8] outline-none transition duration-200 placeholder:text-[#7f7b75] focus:border-[#9B5EFF] focus:bg-[rgba(245,240,232,0.05)]";
