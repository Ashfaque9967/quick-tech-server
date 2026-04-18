import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Cpu, Wrench, Server, Headphones } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quick Tech Systems — Reliable Server Infrastructure. Nationwide Support." },
      { name: "description", content: "Enterprise-grade server parts, maintenance, and leasing across India. 24/7 expert support for Dell, HP, Lenovo, Cisco, and IBM." },
      { property: "og:title", content: "Quick Tech Systems — Server Infrastructure & 24/7 Support" },
      { property: "og:description", content: "Enterprise server parts, maintenance, and leasing across India." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Cpu, title: "Server Parts Sales", desc: "Genuine OEM and certified refurbished components — CPUs, memory, drives, NICs, and more." },
  { icon: Wrench, title: "Server Maintenance", desc: "Proactive AMC, on-site repairs, firmware management, and end-of-life extension." },
  { icon: Server, title: "Server Leasing", desc: "Flexible short and long-term rentals for HPC, virtualisation, and disaster recovery." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock NOC with 4-hour response SLAs across major Indian metros." },
];

const reasons = [
  { n: "01", t: "Nationwide Coverage", d: "Field engineers in 14 cities." },
  { n: "02", t: "24/7 Expert Support", d: "Always-on NOC, year-round." },
  { n: "03", t: "Fast Response", d: "4-hour on-site SLA in metros." },
  { n: "04", t: "Genuine Parts Only", d: "OEM-traceable inventory." },
  { n: "05", t: "Cost-Effective Leasing", d: "OPEX-friendly contracts." },
  { n: "06", t: "Experienced Engineers", d: "Avg. 12+ years in datacenter ops." },
];

const posts = [
  { slug: "uptime-tier-3", img: blog1, tag: "Datacenter", title: "Designing for 99.999% uptime in tier-3 facilities", excerpt: "How redundancy planning and predictive maintenance keep mission-critical workloads online." },
  { slug: "rdimm-vs-lrdimm", img: blog2, tag: "Hardware", title: "Choosing memory: RDIMM vs LRDIMM in dense workloads", excerpt: "A practical buyer's guide for memory selection in modern dual-socket platforms." },
  { slug: "cabling-discipline", img: blog3, tag: "Operations", title: "Cabling discipline as a reliability strategy", excerpt: "Why structured cabling pays back in MTTR, airflow, and audit readiness." },
];

function Home() {
  return (
    <div className="text-foreground">
      {/* HERO — typographic, no image */}
      <section className="hairline-b relative overflow-hidden">
        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="container-swiss relative pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="reveal">
            <SectionLabel>Infrastructure · IN</SectionLabel>
          </div>

          {/* Massive type */}
          <h1 className="mt-10 reveal font-medium tracking-tighter leading-[0.86]">
            <span className="block text-[15vw] md:text-[13vw] lg:text-[11.5vw]">
              Reliable
            </span>
            <span className="block text-[15vw] md:text-[13vw] lg:text-[11.5vw] -mt-2 md:-mt-4">
              <span className="inline-flex items-baseline gap-3 md:gap-6">
                <span className="text-primary italic font-light">server*</span>
                <span className="text-muted-foreground/30 text-[6vw] md:text-[3vw] font-mono not-italic font-normal -translate-y-2">
                  /rak/
                </span>
              </span>
            </span>
            <span className="block text-[15vw] md:text-[13vw] lg:text-[11.5vw] -mt-2 md:-mt-4">
              infrastructure.
            </span>
          </h1>

          {/* Subtext row */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 reveal" style={{ animationDelay: "120ms" }}>
            <div className="lg:col-span-5 lg:col-start-1">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                * Engineered. Maintained. Leased. — Nationwide.
              </p>
              <p className="mt-4 text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
                We supply, maintain, and lease enterprise-grade server components across India — backed by 24/7 expert engineers and 4-hour SLAs.
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-7">
              <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                ◐ Currently online
              </div>
              <div className="mt-4 flex flex-col gap-1 text-sm text-foreground/80">
                <div className="flex justify-between border-b border-rule py-2">
                  <span>NOC · Bengaluru</span>
                  <span className="text-primary text-mono text-[11px]">99.997%</span>
                </div>
                <div className="flex justify-between border-b border-rule py-2">
                  <span>Cities served</span>
                  <span className="text-mono text-[11px]">14</span>
                </div>
                <div className="flex justify-between border-b border-rule py-2">
                  <span>SLA · metros</span>
                  <span className="text-mono text-[11px]">4 hr</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 lg:col-start-11 flex lg:flex-col gap-3 lg:items-stretch">
              <Link to="/contact" className="flex-1 lg:flex-none inline-flex items-center justify-between gap-2 bg-primary text-primary-foreground px-4 h-12 text-sm font-medium hover:bg-primary/90 transition-colors">
                Get a Quote <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="flex-1 lg:flex-none inline-flex items-center justify-between gap-2 border border-border-strong px-4 h-12 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 hairline-t hairline-b">
            {[
              ["14", "Cities served"],
              ["24/7", "NOC operations"],
              ["4 hr", "On-site SLA"],
              ["500+", "Enterprise clients"],
            ].map(([k, v]) => (
              <div key={v} className="py-8 px-2 md:px-6 border-r border-rule last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:last-child]:border-r-0">
                <div className="text-3xl md:text-5xl font-medium tracking-tight">{k}</div>
                <div className="mt-2 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="hairline-b">
        <div className="container-swiss py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-4">
              <SectionLabel>Services</SectionLabel>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl tracking-tight font-medium leading-[1.05] max-w-2xl">
                Four disciplines, one operational standard.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 hairline-t">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative p-8 border-b md:border-b-0 md:border-r border-rule last:border-r-0 hover:bg-card transition-colors"
                >
                  <Icon size={28} strokeWidth={1.25} className="text-foreground group-hover:text-primary transition-colors" />
                  <h3 className="mt-12 text-xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-10 inline-flex items-center gap-1.5 text-mono text-[11px] uppercase tracking-[0.14em] text-foreground">
                    Learn more <ArrowUpRight size={12} />
                  </div>
                  <span className="absolute left-0 bottom-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="hairline-b">
        <div className="container-swiss py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-4">
              <SectionLabel>Why us</SectionLabel>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl tracking-tight font-medium leading-[1.05] max-w-2xl">
                Engineered for enterprises that cannot afford downtime.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hairline-t">
            {reasons.map((r) => (
              <div key={r.n} className="p-8 border-b border-r border-rule [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
                <div className="flex items-baseline gap-4">
                  <span className="text-mono text-[11px] text-primary">{r.n}</span>
                  <h3 className="text-xl font-medium tracking-tight">{r.t}</h3>
                </div>
                <p className="mt-3 ml-9 text-sm text-muted-foreground leading-relaxed max-w-xs">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="hairline-b">
        <div className="container-swiss py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-4">
              <SectionLabel>Journal</SectionLabel>
            </div>
            <div className="lg:col-span-8 flex items-end justify-between gap-6">
              <h2 className="text-3xl md:text-5xl tracking-tight font-medium leading-[1.05] max-w-xl">
                Notes from the field.
              </h2>
              <Link to="/blog" className="hidden md:inline-flex items-center gap-1.5 text-mono text-[11px] uppercase tracking-[0.14em] hover:text-primary">
                All articles <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {posts.map((p) => (
              <Link key={p.title} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {p.tag}
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-tight leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read more <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-swiss py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <SectionLabel>Engage</SectionLabel>
              <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl tracking-tight font-medium leading-[1.0]">
                Talk to an engineer, <br /> not a call centre.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link to="/contact" className="inline-flex items-center justify-between bg-primary text-primary-foreground px-5 h-14 text-sm font-medium hover:bg-primary/90 transition-colors">
                Request a quote <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-between border border-border-strong px-5 h-14 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                See services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
