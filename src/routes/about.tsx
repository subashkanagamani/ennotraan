import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Why we built Ennotraan — powered by purpose, not profit" },
      {
        name: "description",
        content:
          "Ennotraan is offered completely free to families. We sustain operations through modest referral commissions from reward reimbursement partners, never child data or ads.",
      },
      {
        property: "og:title",
        content: "Why we built Ennotraan — powered by purpose, not profit",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "If we ever must choose between what is good for society and what is good for a business, society comes first, always.",
      },
      { name: "twitter:card", content: "summary_large_image" },
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
    title: "Never monetised through children",
    body: "No child data, no ads, no hidden fees. The platform is sustained by partner referrals, not by families.",
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
        eyebrow="Why we built this"
        title="Offered completely free, powered by purpose, not profit off children."
        intro="Ennotraan is offered completely free to families because we believe every household deserves a simple, honest tool to build good habits and reclaim digital balance."
      />

      <section className="relative overflow-hidden bg-primary px-6 py-24 text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-coral/45 blur-[100px] drift-slow"
        />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xl leading-relaxed sm:text-2xl">
            This began as a heartfelt mission to help families cope with screens, and it stays true
            to that purpose. If we ever must choose between what is good for society and what is
            good for a business, society comes first, always.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <p>
            To keep the platform completely free for every home, we sustain our operations by
            earning modest referral commissions through our reward reimbursement partners, trusted
            brands offering family-friendly discounts when discipline points are redeemed. We never
            monetise through child data, ads, or hidden fees.
          </p>
        </Reveal>
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <StaggerItem key={value.title} className="h-full">
              <div className={`h-full rounded-2xl border border-border p-8 shadow-soft ${index === 0 ? "bg-sky" : index === 1 ? "bg-lilac" : "bg-mint"}`}>
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
