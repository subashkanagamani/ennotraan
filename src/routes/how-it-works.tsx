import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { steps } from "@/content/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Ennotraan works — three simple steps" },
      {
        name: "description",
        content:
          "Choose the habit, mark it done on a paper board, and let a parent log it in a private app. Three steps, no screen for your child.",
      },
      { property: "og:title", content: "How Ennotraan works — three simple steps" },
      {
        property: "og:description",
        content:
          "A paper board for your child, a private app for the parent, and a real reward earned slowly over a month.",
      },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Three simple steps. Nothing new for your child to learn."
        intro="No app for your child, no logins, no notifications. Just a board on the wall and one honest minute from a parent each day."
      />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="relative">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[1.65rem] top-4 hidden h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-primary via-gold to-leaf md:block"
          />
          <StaggerGroup className="grid gap-10">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="flex gap-6 rounded-3xl border border-border/70 bg-card/70 p-7 backdrop-blur-sm sm:p-9"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-2xl">{step.title}</h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-3xl bg-blush p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl">What your child never touches</h2>
          <ul className="mt-6 grid gap-3 text-lg text-foreground/80 sm:grid-cols-2">
            {["No app on their phone", "No account or password", "No notifications", "No screen time as a reward"].map(
              (item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </section>

      <CtaBand
        title="Start with two habits this week."
        body="Join free and we will help you set up the board with your family."
      />
    </>
  );
}
