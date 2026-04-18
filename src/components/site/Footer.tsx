import { Link } from "@tanstack/react-router";

function RackPattern() {
  // Stylised rack-unit SVG pattern: stacked 1U slots with status LEDs.
  const units = Array.from({ length: 14 });
  return (
    <svg
      viewBox="0 0 320 480"
      className="w-full h-full"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Frame */}
      <rect x="6" y="6" width="308" height="468" fill="none" stroke="currentColor" strokeOpacity="0.5" />
      <line x1="20" y1="6" x2="20" y2="474" stroke="currentColor" strokeOpacity="0.25" />
      <line x1="300" y1="6" x2="300" y2="474" stroke="currentColor" strokeOpacity="0.25" />

      {units.map((_, i) => {
        const y = 18 + i * 32;
        const led = i % 4 === 0;
        const drive = i % 3 === 0;
        return (
          <g key={i}>
            <rect x="22" y={y} width="276" height="28" fill="none" stroke="currentColor" strokeOpacity="0.35" />
            {/* Vent slats */}
            {Array.from({ length: 18 }).map((__, k) => (
              <line
                key={k}
                x1={32 + k * 14}
                y1={y + 8}
                x2={32 + k * 14}
                y2={y + 20}
                stroke="currentColor"
                strokeOpacity="0.18"
              />
            ))}
            {/* Drive bays */}
            {drive && (
              <>
                <rect x="32" y={y + 6} width="40" height="16" fill="none" stroke="currentColor" strokeOpacity="0.55" />
                <rect x="78" y={y + 6} width="40" height="16" fill="none" stroke="currentColor" strokeOpacity="0.55" />
              </>
            )}
            {/* LEDs */}
            <circle cx="282" cy={y + 14} r="2" fill={led ? "var(--primary)" : "currentColor"} fillOpacity={led ? 1 : 0.4} />
            <circle cx="290" cy={y + 14} r="2" fill="currentColor" fillOpacity="0.3" />
          </g>
        );
      })}
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline-t mt-32 bg-foreground text-background relative overflow-hidden">
      {/* Ticker */}
      <div className="border-b border-background/15 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[ticker_40s_linear_infinite] py-3 text-mono text-[11px] uppercase tracking-[0.2em] text-background/60">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-8 pr-8">
              {[
                "★ Genuine OEM parts",
                "24 / 7 NOC",
                "ISO 9001 · 27001",
                "4 hr SLA · metros",
                "Dell · HPE · Cisco · IBM · Lenovo",
                "AMC · Leasing · Repair",
                "Bengaluru · Mumbai · Delhi · Chennai",
              ].map((t) => (
                <span key={t} className="flex items-center gap-8">
                  <span>{t}</span>
                  <span className="text-primary">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-swiss relative py-20">
        {/* Big wordmark */}
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-background/50">
              ◐ Quick Tech Systems · Est. 2014 · India
            </div>
            <h2 className="mt-6 text-[18vw] lg:text-[10vw] leading-[0.85] tracking-tighter font-medium">
              Quick<span className="text-primary">.</span>
              <br />
              Tech.
            </h2>
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <div className="aspect-[2/3] w-full max-w-[260px] ml-auto text-background/70">
              <RackPattern />
            </div>
            <p className="mt-4 text-right text-mono text-[10px] uppercase tracking-[0.18em] text-background/50">
              Fig. 02 — Rack / 42U
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-12 gap-10 border-t border-background/15 pt-12">
          <div className="col-span-2 md:col-span-4">
            <p className="max-w-xs text-sm text-background/70 leading-relaxed">
              Enterprise server infrastructure, parts, leasing, and 24/7 support across India.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-mono text-[10px] uppercase tracking-[0.18em] text-background/50">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-mono text-[10px] uppercase tracking-[0.18em] text-background/50">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Server Parts</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Leasing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">24/7 Support</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-mono text-[10px] uppercase tracking-[0.18em] text-background/50">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>support@quicktech.in</li>
              <li>+91 80 4000 1200</li>
              <li className="text-background/60">Bengaluru · Mumbai · Delhi · Chennai</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-background/15 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-background/50">
            © {year} Quick Tech Systems Pvt. Ltd. — ISO 9001 · ISO 27001
          </p>
          <div className="flex gap-6 text-mono text-[10px] uppercase tracking-[0.18em] text-background/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
