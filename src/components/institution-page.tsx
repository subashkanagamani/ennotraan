import { motion } from "motion/react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import type { InstitutionContent } from "@/content/institutions";
import schoolImage from "@/assets/schools-habits.jpg";
import collegeImage from "@/assets/college-habits.jpg";
import workplaceImage from "@/assets/workplace-habits.jpg";

const images = {
  schools: { src: schoolImage, alt: "Schoolchildren and their teacher enjoying a shared habit-board activity" },
  colleges: { src: collegeImage, alt: "College students building goals together on campus" },
  corporates: { src: workplaceImage, alt: "Professionals sharing a positive team habit activity" },
};

export function InstitutionPage({ content }: { content: InstitutionContent }) {
  const image = images[content.image];
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} />

      <Reveal className="mx-auto max-w-6xl px-6 pb-14">
        <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
          <img src={image.src} alt={image.alt} width={1400} height={900} className="aspect-[14/7] w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-primary via-coral to-gold" />
          <motion.div aria-hidden animate={{ x: [0, 18, 0], y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute right-6 top-6 h-14 w-14 rounded-full border-[10px] border-background/80" />
        </div>
      </Reveal>

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
                className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft"
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
                className={`h-full rounded-2xl p-8 shadow-soft ${i === 0 ? "bg-sky" : i === 1 ? "bg-lilac" : "bg-mint"}`}
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
        <Reveal className="rounded-[2rem] border border-primary/15 bg-secondary p-8 sm:p-12">
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
