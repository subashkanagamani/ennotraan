import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm tracking-[0.18em] text-leaf uppercase"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 max-w-4xl text-4xl leading-[1.12] sm:text-5xl md:text-[3.4rem]"
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
        >
          {intro}
        </motion.p>
      )}
      {children}
    </section>
  );
}
