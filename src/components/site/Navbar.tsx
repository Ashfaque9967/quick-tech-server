import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services & Brands" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/70 backdrop-blur-xl backdrop-saturate-150 border-b border-rule shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Top status rail */}
      <div className="hidden md:block border-b border-rule/60">
        <div className="container-swiss flex h-7 items-center justify-between text-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              NOC · Online
            </span>
            <span className="hidden lg:inline">SLA · 4 hr metro</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline">IN · 14 cities</span>
            <span>+91 80 4000 1200</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-swiss grid grid-cols-12 items-center h-16">
        {/* Logo: QTS mark + wordmark */}
        <Link to="/" className="col-span-8 md:col-span-3 flex items-center gap-2.5 group">
          <span className="relative inline-flex h-7 items-center bg-foreground text-background px-1.5 font-mono text-[12px] font-semibold tracking-tight">
            <span className="text-primary">Q</span>TS
            <span className="ml-1 size-1 rounded-full bg-primary group-hover:animate-pulse" />
          </span>
          <span className="hidden sm:inline text-[14px] font-medium tracking-tight leading-none">
            Quick Tech<span className="text-muted-foreground"> · Systems</span>
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex col-span-6 items-center justify-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link group relative px-3 h-10 inline-flex items-center gap-1.5 text-[13px] tracking-tight text-foreground/60 hover:text-foreground transition-colors"
              activeProps={{ className: "!text-foreground font-medium is-active" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              <span className="size-1 rounded-full bg-primary opacity-0 [.is-active_&]:opacity-100 transition-opacity" />
              <span>{l.label}</span>
              <span className="absolute left-3 right-3 -bottom-px h-px bg-primary origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 [.is-active_&]:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex col-span-3 items-center justify-end">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-foreground text-background pl-4 pr-1 h-10 text-[12px] font-medium tracking-tight hover:bg-primary transition-colors"
          >
            Request Quote
            <span className="inline-flex items-center justify-center size-8 bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden col-span-4 justify-self-end p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-rule bg-background">
          <div className="container-swiss py-6 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3 border-b border-rule/60 text-base text-foreground/70"
                activeProps={{ className: "!text-primary font-medium is-active-m" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                <span className="block w-1 h-5 bg-primary origin-center scale-y-0 [.is-active-m_&]:scale-y-100 transition-transform" />
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 bg-foreground text-background px-4 h-12 text-sm font-medium"
            >
              Request Quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
