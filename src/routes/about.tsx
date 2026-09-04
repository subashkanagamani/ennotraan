import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Why we built Ennotraan — for families, not profit" },
      {
        name: "description",
        content:
          "Ennotraan is a free social initiative by PPLMeliorate Services Private Limited, a recognised startup in Tamil Nadu, built for families rather than profit.",
      },
      { property: "og:title", content: "Why we built Ennotraan — for families, not profit" },
      {
        property: "og:description",
        content:
          "If we ever have to choose between what is good for a child and what is good for a business, the child comes first, always.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Free, and staying free",
    body: "There is no paid tier waiting behind the door. Families pay nothing, today or ever.",
  },
  {
    title: "The child comes first",
    body: "Every decision is tested against one question: is this good for the child in the home?",
  },
  {
    title: "Built slowly, properly",
    body: "We are opening to families in small numbers so we can build this carefully before we grow.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Why we built it"
        title="This was built for families, not for profit."
        intro="Ennotraan is offered free because we believe every family deserves a simple, honest tool to build good habits, not because we expect something back."
      />

      <section className="relative overflow-hidden bg-leaf px-6 py-24 text-leaf-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-gold/25 blur-[100px] drift-slow"
        />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xl leading-relaxed sm:text-2xl">
            This began as a small idea to help households cope with screens, and it stays true to
            that purpose. If we ever have to choose between what is good for a child and what is
            good for a business, the child comes first, always.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <StaggerItem key={value.title} className="h-full">
              <div className="h-full rounded-3xl border border-border bg-card/70 p-8 backdrop-blur-sm">
                <h2 className="text-xl">{value.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-14 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          <p>
            Ennotraan is a social initiative by PPLMeliorate Services Private Limited, a recognised
            startup in Tamil Nadu. To talk to us directly, reach Saravanan Ganesan on{" "}
            <a href="tel:+917092023733" className="text-primary underline-offset-4 hover:underline">
              +91 70920 23733
            </a>{" "}
            or{" "}
            <a
              href="mailto:info@pplmeliorate.com"
              className="text-primary underline-offset-4 hover:underline"
            >
              info@pplmeliorate.com
            </a>
            .
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
