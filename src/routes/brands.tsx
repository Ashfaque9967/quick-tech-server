import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands — Quick Tech Systems" },
      { name: "description", content: "Genuine parts and certified service for Dell, HPE, Lenovo, Cisco, IBM, and Supermicro platforms." },
      { property: "og:title", content: "Brands — Quick Tech Systems" },
      { property: "og:description", content: "Authorised support across major enterprise server platforms." },
    ],
  }),
  component: BrandsPage,
});

const brands = [
  { name: "Dell", line: "PowerEdge R / T / C series" },
  { name: "HPE", line: "ProLiant Gen10, Gen11" },
  { name: "Lenovo", line: "ThinkSystem SR / ST" },
  { name: "Cisco", line: "UCS B / C / X series" },
  { name: "IBM", line: "Power Systems" },
  { name: "Supermicro", line: "SuperServer, A+ lines" },
];

function BrandsPage() {
  return (
    <div>
      <section className="hairline-b">
        <div className="container-swiss pt-20 md:pt-28 pb-16 md:pb-20">
          <SectionLabel index="—">Brands</SectionLabel>
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium leading-[0.95] max-w-4xl">
            Every major <span className="text-primary">platform.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            We carry inventory and certified engineers across the platforms that run Indian enterprise.
          </p>
        </div>
      </section>

      <section>
        <div className="container-swiss py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hairline-t hairline-b">
            {brands.map((b, i) => (
              <div
                key={b.name}
                className="group p-10 border-r border-b border-rule [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(2n)]:border-r"
              >
                <div className="flex items-center justify-between mb-12">
                  <span className="text-mono text-[11px] text-muted-foreground">0{i + 1}</span>
                  <span className="size-1.5 bg-primary rounded-full" aria-hidden />
                </div>
                <div className="text-3xl font-medium tracking-tight text-muted-foreground/70 group-hover:text-primary transition-colors">
                  {b.name}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{b.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
