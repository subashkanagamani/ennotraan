import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { ages } from "@/content/site";

export const Route = createFileRoute("/for-everyone")({
  head: () => ({
    meta: [
      { title: "For every age — Ennotraan habits at 20, 30 or 60" },
      {
        name: "description",
        content:
          "One board, one app, any age. The same simple method helps anyone keep a promise to themselves, from the gym at 25 to a daily walk at 65.",
      },
      { property: "og:title", content: "For every age — Ennotraan habits at 20, 30 or 60" },
      {
        property: "og:description",
        content: "One board. One app. Any age, any goal. Built for families first, useful for everyone.",
      },
    ],
  }),
  component: ForEveryone,
});

function ForEveryone() {
  return (
    <>
      <PageHero
        eyebrow="For everyone"
        title="One board. One app. Any age, any goal."
        intro="We built this for families first, then realised the same simple method helps anyone keep a promise to themselves."
      />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {ages.map((group, i) => (
            <StaggerItem key={group.title} className="h-full">
              <motion.div
                whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -0.6 : 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="h-full rounded-3xl bg-blush p-8 shadow-soft"
              >
                <h2 className="text-xl">{group.title}</h2>
                <ul className="mt-5 grid gap-2.5 text-foreground/80">
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex gap-3"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CtaBand
        title="Whatever the age, the habit starts today."
        body="Join free and set up your first board with someone you care about."
      />
    </>
  );
}
