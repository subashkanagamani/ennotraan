import { createFileRoute } from "@tanstack/react-router";
import { InstitutionPage } from "@/components/institution-page";
import { schools } from "@/content/institutions";

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      { title: schools.meta.title },
      { name: "description", content: schools.meta.description },
      { property: "og:title", content: schools.meta.title },
      { property: "og:description", content: schools.meta.description },
    ],
  }),
  component: () => <InstitutionPage content={schools} />,
});
