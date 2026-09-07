import { motion } from "motion/react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import type { InstitutionContent } from "@/content/institutions";

export function InstitutionPage({ content }: { content: InstitutionContent }) {
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl">What gets in the way today</h2>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
          {content.challenges.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="h-full rounded-3xl border border-border bg-card/70 p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/75">{item.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl">How the programme runs</h2>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
          {content.program.map((step, i) => (
            <StaggerItem key={step.title} className="h-full">
              <motion.div
                whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -0.6 : 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="h-full rounded-3xl bg-blush p-8 shadow-soft"
              >
                <span className="font-display text-4xl text-primary">{i + 1}</span>
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/75">{step.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Reveal className="rounded-[2.5rem] border border-border bg-card/70 p-8 backdrop-blur-sm sm:p-12">
          <h2 className="text-2xl sm:text-3xl">What you can expect</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {content.outcomes.map((line) => (
              <li key={line} className="flex gap-3 leading-relaxed text-muted-foreground">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-leaf" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBand title={content.ctaTitle} body={content.ctaBody} />
    </>
  );
}
