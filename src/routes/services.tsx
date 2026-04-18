import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, Wrench, Server, Headphones, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Brands — Quick Tech Systems" },
      { name: "description", content: "Server parts, maintenance, leasing, and 24/7 support across Dell, HPE, Lenovo, Cisco, IBM, and Supermicro platforms." },
      { property: "og:title", content: "Services & Brands — Quick Tech Systems" },
      { property: "og:description", content: "Parts, maintenance, leasing, and 24/7 support across major enterprise platforms." },
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

const brands = [
  { name: "Dell", line: "PowerEdge R / T / C series" },
  { name: "HPE", line: "ProLiant Gen10, Gen11" },
  { name: "Lenovo", line: "ThinkSystem SR / ST" },
  { name: "Cisco", line: "UCS B / C / X series" },
  { name: "IBM", line: "Power Systems" },
  { name: "Supermicro", line: "SuperServer, A+ lines" },
];

function ServicesPage() {
  return (
    <div>
      <section className="hairline-b">
        <div className="container-swiss pt-20 md:pt-28 pb-16 md:pb-20">
          <SectionLabel>Services & Brands</SectionLabel>
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium leading-[0.95] max-w-4xl">
            Operational excellence, <span className="text-primary">end to end.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            From individual components to fully-managed fleets — Quick Tech Systems delivers a single accountable partner for your server estate, across every major platform.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="container-swiss">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 md:py-20 hairline-b">
                <div className="lg:col-span-2">
                  <span className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">0{i + 1}</span>
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

      {/* BRANDS — sticky heading + 2 col list */}
      <section className="hairline-b bg-card">
        <div className="container-swiss py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionLabel>Brands</SectionLabel>
                <h2 className="mt-6 text-4xl md:text-6xl tracking-tight font-medium leading-[1.0]">
                  Brands <br /> we <span className="text-primary">support.</span>
                </h2>
                <p className="mt-6 text-muted-foreground max-w-md">
                  Authorised access to genuine parts and certified service across every leading enterprise platform — with traceable inventory and OEM-compliant procedures.
                </p>
                <div className="mt-8 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  06 vendors · 14 cities · 24/7
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 hairline-t">
                {brands.map((b, i) => (
                  <div
                    key={b.name}
                    className={`group relative p-8 border-b border-rule sm:[&:nth-child(odd)]:border-r ${
                      i >= brands.length - 2 ? "sm:[&:nth-last-child(-n+2)]:border-b-0" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-3xl md:text-4xl font-medium tracking-tight text-foreground/80 group-hover:text-primary transition-colors">
                        {b.name}
                      </span>
                      <span className="size-1.5 bg-primary rounded-full mt-3" aria-hidden />
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">{b.line}</p>
                    <ArrowUpRight
                      size={14}
                      className="absolute bottom-6 right-6 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
