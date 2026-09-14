import { motion } from "motion/react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import type { InstitutionContent } from "@/content/institutions";
import schoolImage from "@/assets/schools-hero.jpg.asset.json";
import collegeImage from "@/assets/colleges-hero.jpg.asset.json";
import corporateImage from "@/assets/corporates-hero.jpg.asset.json";

const images = {
  schools: { src: schoolImage.url, width: 1370, height: 1148, alt: "Schoolchildren using the Ennotraan daily routine evaluation board in class" },
  colleges: { src: collegeImage.url, width: 1370, height: 1148, alt: "College students using the Ennotraan daily routine evaluation board on campus" },
  corporates: { src: corporateImage.url, width: 1371, height: 1148, alt: "Professionals using the Ennotraan daily routine evaluation board in the workplace" },
};

export function InstitutionPage({ content }: { content: InstitutionContent }) {
  const image = images[content.image];
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} image={image} />


      <section className="mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl">{content.firstSectionTitle}</h2>
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
          <h2 className="text-2xl sm:text-3xl">{content.secondSectionTitle}</h2>
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
