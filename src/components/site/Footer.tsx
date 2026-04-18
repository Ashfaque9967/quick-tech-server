import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline-t mt-32 bg-background">
      <div className="container-swiss py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2.5 bg-primary" aria-hidden />
              <span className="text-[15px] font-medium tracking-tight">
                Northrack<span className="text-muted-foreground">/IN</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Enterprise server infrastructure, parts, leasing, and 24/7 support across India.
            </p>
            <p className="mt-6 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              ISO 9001 · ISO 27001
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary">Server Parts</Link></li>
              <li><Link to="/services" className="hover:text-primary">Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-primary">Leasing</Link></li>
              <li><Link to="/services" className="hover:text-primary">24/7 Support</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>support@northrack.in</li>
              <li>+91 80 4000 1200</li>
              <li className="text-muted-foreground">Bengaluru · Mumbai · Delhi · Chennai</li>
            </ul>
          </div>
        </div>

        <div className="hairline-t mt-14 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            © {year} Northrack Infrastructure Pvt. Ltd.
          </p>
          <div className="flex gap-6 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
