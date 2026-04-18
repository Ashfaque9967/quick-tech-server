import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Quick Tech Systems" },
      { name: "description", content: "Field notes on datacenter operations, server hardware, and enterprise infrastructure strategy." },
      { property: "og:title", content: "Journal — Quick Tech Systems" },
      { property: "og:description", content: "Field notes on datacenter operations and server hardware." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { img: blog1, tag: "Datacenter", date: "12 Mar 2025", title: "Designing for 99.999% uptime in tier-3 facilities", excerpt: "How redundancy planning and predictive maintenance keep mission-critical workloads online." },
  { img: blog2, tag: "Hardware", date: "28 Feb 2025", title: "Choosing memory: RDIMM vs LRDIMM in dense workloads", excerpt: "A practical buyer's guide for memory selection in modern dual-socket platforms." },
  { img: blog3, tag: "Operations", date: "14 Feb 2025", title: "Cabling discipline as a reliability strategy", excerpt: "Why structured cabling pays back in MTTR, airflow, and audit readiness." },
];

function BlogPage() {
  return (
    <div>
      <section className="hairline-b">
        <div className="container-swiss pt-20 md:pt-28 pb-16 md:pb-20">
          <SectionLabel index="—">Journal</SectionLabel>
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium leading-[0.95] max-w-4xl">
            Notes from <span className="text-primary">the field.</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="container-swiss py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((p, i) => (
              <article key={p.title} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{p.tag}</span>
                  <span>{p.date}</span>
                </div>
                <h2 className="mt-3 text-xl font-medium tracking-tight leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read more <ArrowUpRight size={14} />
                </Link>
                <span className="sr-only">Article {i + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
