import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import lamp from "@/assets/lamp.jpg";
import { CtaBand } from "@/components/cta-band";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { problems, steps } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ennotraan — small habits, big achievements" },
      {
        name: "description",
        content:
          "A free, screen-free board and private parent app that helps families build good daily habits, one honest day at a time.",
      },
      { property: "og:title", content: "Ennotraan — small habits, big achievements" },
      {
        property: "og:description",
        content:
          "A free, screen-free way for families to build good daily habits. No data on children, no leaderboards, no cost.",
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
            Free, screen-free habits for the whole family
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
              That is all it takes to raise a confident child.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Ennotraan is a simple board and a private app that helps your family build good daily
            habits, without putting a screen in your child's hands. It is offered free, as a small
            contribution to healthier homes, not as a business selling to children.
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
          className="relative"
        >
          <div className="absolute left-[24%] top-[58%] h-28 w-28 rounded-full bg-primary/30 blur-2xl flame-glow" />
          <motion.img
            src={lamp}
            alt="A hand lighting a small oil lamp"
            width={1024}
            height={1024}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full rounded-[2rem] mix-blend-multiply"
          />
        </motion.div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Every home is fighting the same quiet battle
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Homework, sleep, screen time, chores. Parents repeat the same battle every single day,
            and it wears everyone out. What is missing is not willpower. It is a simple, honest way
            to notice effort and make it feel worthwhile.
          </p>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-2xl border border-border bg-card/70 p-7 backdrop-blur-sm"
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Belief */}
      <section className="relative overflow-hidden bg-ink px-6 py-28 text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[100px] drift-slow"
        />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <span aria-hidden className="block font-display text-7xl leading-none text-gold opacity-80">
            &ldquo;
          </span>
          <blockquote className="mt-4 text-2xl leading-relaxed sm:text-3xl">
            Raising a child well is not just something that happens. It is a daily practice of
            caring, one honest day at a time.
          </blockquote>
          <p className="mt-8 text-sm italic opacity-70">
            Based on Thirukkural 70, an old Tamil verse about parenting as a daily practice, not a
            one-time event.
          </p>
        </Reveal>
      </section>

      {/* Three steps preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Three simple steps. Nothing new for your child to learn.
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
