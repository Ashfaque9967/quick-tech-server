import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";
import { posts } from "@/lib/posts";

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

function BlogPage() {
  return (
    <div>
      <section className="hairline-b">
        <div className="container-swiss pt-20 md:pt-28 pb-16 md:pb-20">
          <SectionLabel>Journal</SectionLabel>
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium leading-[0.95] max-w-4xl">
            Notes from <span className="text-primary">the field.</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="container-swiss py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((p, i) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
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
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read more <ArrowUpRight size={14} />
                </span>
                <span className="sr-only">Article {i + 1}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
