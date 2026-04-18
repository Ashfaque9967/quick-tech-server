import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Quick Tech Systems" },
      { name: "description", content: "Quick Tech Systems is an Indian enterprise infrastructure firm specialising in server parts, maintenance, leasing, and 24/7 support." },
      { property: "og:title", content: "About — Quick Tech Systems" },
      { property: "og:description", content: "Indian enterprise infrastructure firm — engineers, not call centres." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="hairline-b">
        <div className="container-swiss pt-20 md:pt-28 pb-16 md:pb-20">
          <SectionLabel index="—">About</SectionLabel>
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium leading-[0.95] max-w-4xl">
            An Indian firm of <span className="text-primary">infrastructure engineers.</span>
          </h1>
        </div>
      </section>

      <section className="hairline-b">
        <div className="container-swiss py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionLabel index="01">Mandate</SectionLabel>
          </div>
          <div className="lg:col-span-8 max-w-2xl space-y-6 text-lg leading-relaxed">
            <p>
              Founded in 2011 in Bengaluru, Quick Tech Systems was built on a simple premise: enterprise infrastructure is too critical to be handled by ticket queues and unfamiliar voices.
            </p>
            <p className="text-muted-foreground">
              Today we operate a 24/7 NOC, four regional service hubs, and a parts inventory worth over ₹40 crore — supporting more than 500 enterprises across banking, manufacturing, healthcare, and government.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-swiss py-20 md:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 hairline-t hairline-b">
            {[
              ["2011", "Founded"],
              ["14", "Cities"],
              ["180+", "Engineers"],
              ["500+", "Clients"],
            ].map(([k, v]) => (
              <div key={v} className="py-10 px-2 md:px-6 border-r border-rule last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:last-child]:border-r-0">
                <div className="text-4xl md:text-6xl font-medium tracking-tight">{k}</div>
                <div className="mt-2 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
