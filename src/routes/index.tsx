import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import lamp from "@/assets/lamp.jpg";
import familyHabits from "@/assets/family-habits.jpg";
import { CtaBand } from "@/components/cta-band";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { beliefs, problemsAdults, problemsParents, steps } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ennotraan — one small habit a day, screen-free and free" },
      {
        name: "description",
        content:
          "A 100% free, screen-free way to build good habits. A physical board plus a private parent app for disciplined children, empowered parents, and self-driven adults.",
      },
      { property: "og:title", content: "Ennotraan — one small habit a day, screen-free and free" },
      {
        property: "og:description",
        content:
          "Build lifelong daily habits for every generation at home, without placing a screen in your child's hands. Offered completely free.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-14 md:grid-cols-2 md:pt-20"
      >
        <motion.div style={{ opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full border border-leaf/30 bg-leaf/10 px-4 py-1.5 text-sm text-leaf"
          >
            A 100% free, screen-free way to build good habits and a family digital detox
          </motion.p>
          <h1 className="mt-6 text-4xl leading-[1.12] sm:text-5xl md:text-[3.5rem]">
            {"One small habit a day.".split(" ").map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="block text-shimmer"
            >
              Disciplined children, empowered parents, self-driven adults.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Ennotraan pairs a simple, physical board with a private app to build lifelong daily
            habits for every generation at home, without placing a screen in your child's hands. It
            gives parents a scientific tool to ease the hardship of everyday parenting, and gives
            adults a structured system to become true masters of their own lives. Offered completely
            free as our humble contribution toward healthier, bonded homes, never as a business
            selling to children.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/join"
              className="rounded-full bg-primary px-7 py-3.5 text-primary-foreground shadow-soft transition-transform hover:scale-[1.04]"
            >
              Join free, no cost ever
            </Link>
            <Link
              to="/how-it-works"
              className="rounded-full border border-border bg-background/60 px-7 py-3.5 text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              See how it works
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y, scale }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate"
        >
          <div className="absolute -left-8 -top-7 h-24 w-24 rounded-[2rem] bg-coral/75 float-gentle" />
          <div className="absolute -bottom-7 -right-5 h-28 w-28 rounded-full bg-gold/75 drift-slow" />
          <div className="absolute -right-7 top-16 h-14 w-14 rounded-full bg-mint orbit-slow" />
          <motion.img
            src={familyHabits}
            alt="A mother and daughter enjoying their daily habit-board ritual"
            width={1400}
            height={1000}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[7/6] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <motion.img src={lamp} alt="A hand lighting a small oil lamp" width={1024} height={1024} loading="lazy" animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -bottom-8 -left-8 hidden w-32 rounded-2xl border-4 border-background shadow-soft sm:block" />
        </motion.div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="max-w-3xl text-3xl sm:text-4xl">
            Every home is fighting a quiet battle, not from a lack of love or effort, but a lack of
            the right tool.
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <h3 className="text-sm uppercase tracking-[0.18em] text-leaf">
            For parents and children
          </h3>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Parents today give everything they have to nurture, guide, and protect their children,
            enduring the heavy penance of endless daily coordination. Yet the same exhausting
            battles over screen time, sleep, and routines repeat every single day. The issue is not
            a lack of parental willpower or child potential; it is that parents are forced to fight
            modern digital distractions without a scientific, screen-free tool designed to support
            them. Worst of all, conventional solutions offer more screen time and gadgets to solve a
            screen-time problem.
          </p>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
          {problemsParents.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <h4 className="text-xl">{item.title}</h4>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-16">
          <h3 className="text-sm uppercase tracking-[0.18em] text-leaf">
            For adults and self-discipline
          </h3>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            For adults striving for personal growth, fitness, and professional mastery, the struggle
            is equally real. We start every week with strong intentions, only to be pulled away by
            constant notifications, fragmented focus, and superficial apps that treat
            self-improvement like a game rather than a life practice. Without a tangible anchor to
            track daily consistency away from screens, personal goals slip away.
          </p>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
          {problemsAdults.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <h4 className="text-xl">{item.title}</h4>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Belief */}
      <section className="relative overflow-hidden bg-ink px-6 py-28 text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/30 blur-[100px] drift-slow"
        />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <span aria-hidden className="block font-display text-7xl leading-none text-gold opacity-80">
            &ldquo;
          </span>
          <blockquote className="mt-4 text-2xl leading-relaxed sm:text-3xl">
            What it means to raise a child well is not something that just happens. It is a daily
            practice of caring, one honest day at a time.
          </blockquote>
          <p className="mt-8 text-sm italic opacity-70">
            Inspired by Thirukkural 70, a timeless Tamil insight: raising a virtuous child is not a
            one-time achievement, but a daily practice of intentional care.
          </p>
        </Reveal>
      </section>

      {/* Beliefs */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Empowering parents with trust, flexibility, and age-appropriate science.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className={`h-full rounded-2xl p-7 shadow-soft ${item.title.length % 3 === 0 ? "bg-mint" : item.title.length % 2 === 0 ? "bg-lilac" : "bg-sky"}`}>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Three steps preview */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <h2 className="max-w-3xl text-3xl sm:text-4xl">
            Three simple steps to meliorate parental penance and build lifelong child habits.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <span className="font-display text-5xl text-primary">{index + 1}</span>
              <h3 className="mt-4 text-xl">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-12">
          <Link to="/how-it-works" className="text-primary underline-offset-4 hover:underline">
            Read the full walkthrough →
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
