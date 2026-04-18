import { Link } from "@tanstack/react-router";

function HorizontalRack() {
  // Wide horizontal server rack: stacked 1U servers spanning full width
  const units = Array.from({ length: 10 });
  return (
    <svg
      viewBox="0 0 1600 220"
      className="w-full h-auto"
      aria-hidden
      preserveAspectRatio="none"
    >
      {/* Outer chassis */}
      <rect x="2" y="2" width="1596" height="216" fill="none" stroke="currentColor" strokeOpacity="0.5" />
      {/* Vertical rails */}
      <line x1="22" y1="2" x2="22" y2="218" stroke="currentColor" strokeOpacity="0.3" />
      <line x1="1578" y1="2" x2="1578" y2="218" stroke="currentColor" strokeOpacity="0.3" />

      {units.map((_, i) => {
        const y = 12 + i * 20;
        const ledOn = i % 3 === 0;
        const drives = i % 2 === 0;
        return (
          <g key={i}>
            {/* 1U slot */}
            <rect x="26" y={y} width="1548" height="16" fill="none" stroke="currentColor" strokeOpacity="0.3" />
            {/* Drive bays on left */}
            {drives &&
              Array.from({ length: 12 }).map((__, k) => (
                <rect
                  key={k}
                  x={32 + k * 28}
                  y={y + 3}
                  width="22"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.45"
                />
              ))}
            {/* Vent slats centre */}
            {!drives &&
              Array.from({ length: 80 }).map((__, k) => (
                <line
                  key={k}
                  x1={400 + k * 12}
                  y1={y + 4}
                  x2={400 + k * 12}
                  y2={y + 12}
                  stroke="currentColor"
                  strokeOpacity="0.18"
                />
              ))}
            {/* Status block + LEDs on right */}
            <rect x="1480" y={y + 3} width="60" height="10" fill="none" stroke="currentColor" strokeOpacity="0.35" />
            <circle cx="1552" cy={y + 8} r="2.2" fill={ledOn ? "var(--primary)" : "currentColor"} fillOpacity={ledOn ? 1 : 0.35} />
            <circle cx="1562" cy={y + 8} r="2.2" fill="currentColor" fillOpacity="0.3" />
            <circle cx="1572" cy={y + 8} r="2.2" fill="currentColor" fillOpacity="0.3" />
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

      {/* Horizontal rack strip */}
      <div className="border-b border-background/15">
        <div className="container-swiss py-6">
          <div className="flex items-center justify-between text-mono text-[10px] uppercase tracking-[0.2em] text-background/50 mb-3">
            <span>◐ Rack 42U / Bengaluru — DC01</span>
            <span className="hidden sm:inline">Status — Nominal · 99.997% uptime</span>
            <span>FIG. 02</span>
          </div>
          <div className="text-background/60">
            <HorizontalRack />
          </div>
        </div>
      </div>

      <div className="container-swiss relative py-20">
        {/* Big wordmark */}
        <div>
          <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-background/50">
            ◐ Quick Tech Systems · Est. 2014 · India
          </div>
          <h2 className="mt-6 text-[18vw] lg:text-[14vw] leading-[0.85] tracking-tighter font-medium">
            Quick Tech<span className="text-primary">.</span>
          </h2>
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
              <li><Link to="/blog" className="hover:text-primary transition-colors">Journal</Link></li>
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
