import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";
import { getPost, posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    return {
      meta: post
        ? [
            { title: `${post.title} — Quick Tech Systems` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
            { property: "og:image", content: post.img },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: post.img },
          ]
        : [{ title: "Article — Quick Tech Systems" }],
    };
  },
  notFoundComponent: () => (
    <div className="container-swiss py-32 text-center">
      <p className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">404</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight">Article not found</h1>
      <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-primary">
        <ArrowLeft size={14} /> Back to journal
      </Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article>
      {/* Header */}
      <header className="hairline-b">
        <div className="container-swiss pt-20 md:pt-28 pb-12 md:pb-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-primary">
            <ArrowLeft size={12} /> Journal
          </Link>
          <div className="mt-8">
            <SectionLabel>{post.tag}</SectionLabel>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl tracking-tight font-medium leading-[0.98] max-w-4xl">
            {post.title}
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span>{post.date}</span>
            <span className="size-1 rounded-full bg-muted-foreground/50" />
            <span>{post.readTime} read</span>
            <span className="size-1 rounded-full bg-muted-foreground/50" />
            <span>{post.author}</span>
          </div>
        </div>
      </header>

      {/* Cover */}
      <div className="hairline-b">
        <div className="container-swiss py-10">
          <div className="aspect-[16/7] overflow-hidden bg-muted">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Body */}
      <section>
        <div className="container-swiss py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-32 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground space-y-3">
                <div>
                  <div className="text-foreground/50">Filed under</div>
                  <div className="mt-1 text-foreground">{post.tag}</div>
                </div>
                <div>
                  <div className="text-foreground/50">By</div>
                  <div className="mt-1 text-foreground normal-case tracking-normal">{post.author}</div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 lg:col-start-5 max-w-2xl">
              {post.body.map((b, i) => {
                if (b.type === "h2")
                  return (
                    <h2 key={i} className="mt-12 text-2xl md:text-3xl font-medium tracking-tight">
                      {b.text}
                    </h2>
                  );
                if (b.type === "ul")
                  return (
                    <ul key={i} className="mt-6 space-y-3">
                      {b.items?.map((it) => (
                        <li key={it} className="flex gap-3 text-base text-foreground/80 leading-relaxed">
                          <span className="mt-2.5 size-1 shrink-0 bg-primary" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                if (b.type === "quote")
                  return (
                    <blockquote
                      key={i}
                      className="mt-10 border-l-2 border-primary pl-6 py-2 text-xl md:text-2xl font-medium tracking-tight italic text-foreground/90"
                    >
                      {b.text}
                    </blockquote>
                  );
                return (
                  <p key={i} className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed">
                    {b.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Other posts */}
      <section className="hairline-t">
        <div className="container-swiss py-20">
          <SectionLabel>Continue reading</SectionLabel>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {others.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-4 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {p.tag} · {p.date}
                </div>
                <h3 className="mt-2 text-2xl font-medium tracking-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read article <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
