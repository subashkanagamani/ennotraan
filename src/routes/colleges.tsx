import { createFileRoute } from "@tanstack/react-router";
import { InstitutionPage } from "@/components/institution-page";
import { colleges } from "@/content/institutions";

export const Route = createFileRoute("/colleges")({
  head: () => ({
    meta: [
      { title: colleges.meta.title },
      { name: "description", content: colleges.meta.description },
      { property: "og:title", content: colleges.meta.title },
      { property: "og:description", content: colleges.meta.description },
    ],
  }),
  component: () => <InstitutionPage content={colleges} />,
});
