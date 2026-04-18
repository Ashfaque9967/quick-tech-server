import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, Wrench, Server, Headphones, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Northrack" },
      { name: "description", content: "Server parts sales, maintenance, leasing, and 24/7 enterprise support across India." },
      { property: "og:title", content: "Services — Northrack" },
      { property: "og:description", content: "Parts, maintenance, leasing, and 24/7 support." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Cpu, title: "Server Parts Sales", desc: "Genuine OEM and certified refurbished components — CPUs, memory, drives, NICs, and more.", points: ["Same-day dispatch", "OEM traceability", "All major platforms"] },
  { icon: Wrench, title: "Server Maintenance", desc: "Proactive AMC, on-site repairs, firmware management, and end-of-life extension.", points: ["Annual contracts", "Pre-failure analytics", "Quarterly health audits"] },
  { icon: Server, title: "Server Leasing", desc: "Flexible short and long-term rentals for HPC, virtualisation, and disaster recovery.", points: ["3 to 36 month terms", "OPEX friendly", "Buyout options"] },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock NOC with 4-hour response SLAs across major Indian metros.", points: ["NOC in Bengaluru", "4-hr metro SLA", "Dedicated TAM"] },
];

function ServicesPage() {
  return (
    <div>
      <section className="hairline-b">
        <div className="container-swiss pt-20 md:pt-28 pb-16 md:pb-20">
          <SectionLabel index="—">Services</SectionLabel>
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium leading-[0.95] max-w-4xl">
            Operational excellence, <span className="text-primary">end to end.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            From individual components to fully-managed fleets — Northrack delivers a single accountable partner for your server estate.
          </p>
        </div>
      </section>

      <section>
        <div className="container-swiss">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 md:py-20 hairline-b">
                <div className="lg:col-span-2">
                  <span className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">0{i + 1} / 04</span>
                </div>
                <div className="lg:col-span-5">
                  <Icon size={36} strokeWidth={1.25} className="text-primary mb-8" />
                  <h2 className="text-3xl md:text-5xl tracking-tight font-medium leading-[1.05]">{s.title}</h2>
                  <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">{s.desc}</p>
                </div>
                <div className="lg:col-span-5">
                  <ul className="hairline-t">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center justify-between py-4 hairline-b">
                        <span className="text-base">{p}</span>
                        <span className="text-mono text-[11px] text-muted-foreground">INCLUDED</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-primary">
                    Request details <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
