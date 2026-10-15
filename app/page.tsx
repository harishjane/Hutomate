import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Workflow,
  Mic,
  Network,
  Zap,
  Check,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Bot,
    title: "AI Agents",
    description:
      "Intelligent systems that execute tasks, support decisions, and help your business operate more efficiently.",
    tags: ["AI assistants", "Task automation"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect applications, eliminate repetitive work, and create workflows that run smoothly.",
    tags: ["Process automation", "Integrations"],
  },
  {
    number: "03",
    icon: Mic,
    title: "Voice AI",
    description:
      "Natural voice agents that handle conversations, qualify leads, and support your customers.",
    tags: ["Inbound & outbound", "Voice agents"],
  },
  {
    number: "04",
    icon: Network,
    title: "Custom AI Solutions",
    description:
      "Purpose-built intelligent systems designed around your processes and business requirements.",
    tags: ["Custom systems", "API integrations"],
  },
];

const industries = [
  "Healthcare",
  "Real Estate",
  "E-commerce",
  "Finance",
  "Professional Services",
  "Hospitality",
  "Manufacturing",
  "And many more",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171717]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-xl font-semibold text-white">
              h
            </span>

            <span className="text-[23px] font-semibold tracking-[-1.2px]">
              hutomate<span className="text-blue-600">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            <Link href="#solutions" className="nav-link">
              Solutions
            </Link>

            <Link href="#products" className="nav-link">
              Products
            </Link>

            <Link href="#industries" className="nav-link">
              Industries
            </Link>

            <Link href="#about" className="nav-link">
              About
            </Link>
          </nav>

          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700 sm:flex"
          >
            Let's talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute right-[-180px] top-[-100px] h-[550px] w-[550px] rounded-full bg-blue-100/60 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 pb-24 pt-20 md:pb-28 md:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-medium text-neutral-600">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              INTELLIGENT AUTOMATION FOR MODERN BUSINESS
            </div>

            <h1 className="max-w-[720px] text-[48px] font-medium leading-[1.06] tracking-[-3px] sm:text-6xl lg:text-[76px]">
              Less manual work.
              <br />
              <span className="text-neutral-400">More room to</span>
              <br />
              <span className="text-blue-700">move forward.</span>
            </h1>

            <p className="mt-7 max-w-[510px] text-base leading-8 text-neutral-600 sm:text-lg">
              We build intelligent automation systems that connect your
              operations, eliminate repetitive work, and help your business
              achieve more.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#solutions"
                className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
              >
                <span>Explore our solutions</span>
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-4 text-sm font-medium text-black transition-colors duration-300 hover:border-black hover:bg-neutral-50"
              >
                Let's talk <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-3 text-sm text-neutral-500">
              <div className="flex -space-x-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-[10px] font-medium">
                  AI
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm">
                  ⚡
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-neutral-200 text-sm">
                  ↗
                </span>
              </div>

              <span>Built around the way your business works.</span>
            </div>
          </div>

          {/* Automation visual */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative aspect-square max-h-[530px] overflow-hidden rounded-[32px] border border-black/[0.06] bg-[#fafafa] p-5 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.15),transparent_55%)]" />

              <div className="absolute left-7 right-7 top-7 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400 sm:text-xs sm:tracking-[0.2em]">
                  Connected intelligence
                </span>

                <span className="flex items-center gap-2 text-[10px] text-neutral-500 sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  System ready
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[190px] w-[190px] rounded-full border border-blue-200/80 sm:h-[320px] sm:w-[320px]" />

                <div className="absolute h-[155px] w-[155px] rounded-full border border-blue-300/70 sm:h-[250px] sm:w-[250px]" />

                {/* Central brand */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[26px] bg-black text-white shadow-[0_20px_70px_rgba(37,99,235,0.22)] sm:h-32 sm:w-32 sm:rounded-[30px]">
                  <div className="text-center">
                    <Zap className="mx-auto mb-1" size={28} />

                    <span className="text-[10px] font-medium tracking-wide sm:text-xs">
                      HUTOMATE
                    </span>
                  </div>
                </div>

                {/* AI Agents */}
                <div className="absolute left-[3%] top-[29%] flex items-center gap-2 rounded-xl border border-black/[0.06] bg-white p-2 shadow-lg shadow-black/[0.04] sm:left-[7%] sm:gap-3 sm:rounded-2xl sm:p-3.5">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-700 sm:rounded-xl">
                    <Bot size={18} />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold sm:text-xs">
                      AI Agents
                    </p>

                    <p className="mt-1 text-[9px] text-neutral-500 sm:text-[10px]">
                      Intelligent tasks
                    </p>
                  </div>
                </div>

                {/* Workflows */}
                <div className="absolute right-[2%] top-[39%] flex items-center gap-2 rounded-xl border border-black/[0.06] bg-white p-2 shadow-lg shadow-black/[0.04] sm:right-[5%] sm:gap-3 sm:rounded-2xl sm:p-3.5">
                  <div className="rounded-lg bg-violet-50 p-2 text-violet-700 sm:rounded-xl">
                    <Workflow size={18} />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold sm:text-xs">
                      Workflows
                    </p>

                    <p className="mt-1 text-[9px] text-neutral-500 sm:text-[10px]">
                      Connected systems
                    </p>
                  </div>
                </div>

                {/* Integrations */}
                <div className="absolute bottom-[23%] left-[3%] flex items-center gap-2 rounded-xl border border-black/[0.06] bg-white p-2 shadow-lg shadow-black/[0.04] sm:left-[8%] sm:gap-3 sm:rounded-2xl sm:p-3.5">
                  <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700 sm:rounded-xl">
                    <Network size={18} />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold sm:text-xs">
                      Integrations
                    </p>

                    <p className="mt-1 text-[9px] text-neutral-500 sm:text-[10px]">
                      Tools that connect
                    </p>
                  </div>
                </div>

                {/* Voice AI */}
                <div className="absolute bottom-[18%] right-[3%] flex items-center gap-2 rounded-xl border border-black/[0.06] bg-white p-2 shadow-lg shadow-black/[0.04] sm:right-[7%] sm:gap-3 sm:rounded-2xl sm:p-3.5">
                  <div className="rounded-lg bg-orange-50 p-2 text-orange-700 sm:rounded-xl">
                    <Mic size={18} />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold sm:text-xs">
                      Voice AI
                    </p>

                    <p className="mt-1 text-[9px] text-neutral-500 sm:text-[10px]">
                      Natural conversations
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-7 text-[9px] uppercase tracking-[0.16em] text-neutral-400 sm:left-8 sm:text-[10px] sm:tracking-[0.18em]">
                One connected ecosystem
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning strip */}
      <section className="border-y border-black/[0.07] bg-[#fafafa]">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center lg:px-10">
          <p className="text-sm font-medium text-neutral-500">
            One partner. Connected solutions. Better operations.
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-neutral-400">
            <span>AI-powered</span>
            <span>Process-driven</span>
            <span>Business-focused</span>
            <span>Built to scale</span>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="scroll-mt-24 px-6 py-24 md:py-32 lg:px-10"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="section-label">WHAT WE DO</p>

              <h2 className="section-title mt-5 max-w-[700px]">
                Smarter systems.
                <br />
                <span className="text-neutral-400">
                  Stronger businesses.
                </span>
              </h2>
            </div>

            <p className="max-w-[390px] pb-2 text-base leading-7 text-neutral-600">
              We combine AI, automation, and connected technology to solve
              real operational challenges—not just add more software.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex min-h-[330px] flex-col rounded-[24px] border border-black/[0.08] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 transition group-hover:bg-blue-50 group-hover:text-blue-700">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs text-neutral-400">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-9 text-xl font-medium tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {service.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1.5 text-[10px] text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="scroll-mt-24 bg-[#f7f8fa] px-6 py-24 md:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="section-label">OUR PRODUCTS</p>

            <h2 className="section-title mt-5">
              Purpose-built tools.
              <br />
              <span className="text-neutral-400">Real-world impact.</span>
            </h2>

            <p className="mt-6 max-w-[520px] leading-7 text-neutral-600">
              Our products bring intelligent automation into everyday
              business operations. Each solution addresses a specific need
              while fitting into a bigger, connected ecosystem.
            </p>

            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-sm font-medium transition hover:border-blue-700 hover:text-blue-700"
            >
              Discuss a solution <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-[28px] border border-black/[0.07] bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                <Mic size={25} />
              </div>

              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                One of our products
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-medium tracking-tight">
              Conversations, intelligently handled.
            </h3>

            <p className="mt-4 leading-7 text-neutral-600">
              Voice agents designed to manage calls, respond to customer
              inquiries, qualify opportunities, and support business
              communication.
            </p>

            <div className="mt-8 space-y-4 border-t border-black/[0.07] pt-6">
              {[
                "Inbound and outbound call handling",
                "Natural conversational experiences",
                "Connected workflows and business systems",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-neutral-700"
                >
                  <Check size={17} className="shrink-0 text-blue-700" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#f7f8fa] p-4">
              <p className="text-xs leading-5 text-neutral-500">
                Voice AI is one part of the Hutomate ecosystem. Our broader
                focus is intelligent automation across business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        className="scroll-mt-24 px-6 py-24 md:py-32 lg:px-10"
      >
        <div className="mx-auto max-w-[1320px]">
          <p className="section-label">INDUSTRIES WE WORK WITH</p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="section-title">
                Different industries.
                <br />
                <span className="text-neutral-400">
                  One smarter approach.
                </span>
              </h2>

              <p className="mt-6 max-w-[440px] leading-7 text-neutral-600">
                Every business has different challenges. We design automation
                around your workflows, your customers, and the way your
                organization operates.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className="flex items-center justify-between rounded-xl border border-black/[0.08] px-5 py-5 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <span className="text-sm font-medium">{industry}</span>

                  <ArrowUpRight
                    size={17}
                    className={
                      index === industries.length - 1
                        ? "text-blue-700"
                        : "text-neutral-400"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 bg-black px-6 py-24 text-white md:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-blue-400">
              THE HUTOMATE APPROACH
            </p>

            <h2 className="mt-6 max-w-[800px] text-4xl font-medium leading-tight tracking-[-1.8px] sm:text-5xl lg:text-6xl">
              Automation should make business simpler, not more complicated.
            </h2>
          </div>

          <div>
            <p className="leading-7 text-neutral-400">
              We focus on understanding your processes first, then identifying
              where AI and automation can create meaningful value. The goal is
              technology that works for your business.
            </p>

            <Link
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-medium text-black transition hover:bg-blue-100"
            >
              Work with Hutomate <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 py-24 md:py-32 lg:px-10"
      >
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[30px] bg-[#f5f7fb] px-7 py-14 sm:px-12 md:py-20 lg:px-20">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-label">
                LET&apos;S BUILD SOMETHING BETTER
              </p>

              <h2 className="mt-5 max-w-[760px] text-4xl font-medium leading-tight tracking-[-2px] sm:text-5xl lg:text-6xl">
                Your next step toward smarter operations starts here.
              </h2>

              <p className="mt-5 max-w-[530px] leading-7 text-neutral-600">
                Tell us what slows your business down. Let&apos;s explore how
                automation could help.
              </p>
            </div>

            <Link
              href="mailto:hello@hutomate.com"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Start a conversation <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.08] px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            hutomate<span className="text-blue-700">.</span>
          </Link>

          <p className="text-xs text-neutral-500">
            Intelligent automation for modern business.
          </p>

          <div className="flex items-center gap-5 text-xs text-neutral-500">
            <Link href="#solutions" className="hover:text-black">
              Solutions
            </Link>

            <Link href="#products" className="hover:text-black">
              Products
            </Link>

            <Link href="#contact" className="hover:text-black">
              Contact
            </Link>
          </div>

          <p className="text-xs text-neutral-400">
            © 2026 Hutomate
          </p>
        </div>
      </footer>

      {/* Back to top */}
      <a
        href="#"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg transition hover:-translate-y-1"
      >
        <ArrowDown size={19} className="rotate-180" />
      </a>
    </main>
  );
}