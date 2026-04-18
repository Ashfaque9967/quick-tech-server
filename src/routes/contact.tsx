import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Quick Tech Systems" },
      { name: "description", content: "Request a quote, raise a support ticket, or speak with an engineer. Offices in Bengaluru, Mumbai, Delhi, and Chennai." },
      { property: "og:title", content: "Contact — Quick Tech Systems" },
      { property: "og:description", content: "Speak with an engineer. 24/7 NOC across India." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Bengaluru", role: "HQ + NOC", line: "Whitefield, KA" },
  { city: "Mumbai", role: "West Region", line: "BKC, MH" },
  { city: "Delhi NCR", role: "North Region", line: "Gurugram, HR" },
  { city: "Chennai", role: "South Region", line: "Guindy, TN" },
];

function ContactPage() {
  return (
    <div>
      <section className="hairline-b">
        <div className="container-swiss pt-20 md:pt-28 pb-16 md:pb-20">
          <SectionLabel index="—">Contact</SectionLabel>
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium leading-[0.95] max-w-4xl">
            Talk to an <span className="text-primary">engineer.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Quotes within one business day. Critical incidents acknowledged in under 15 minutes — any time, any day.
          </p>
        </div>
      </section>

      <section className="hairline-b">
        <div className="container-swiss py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-medium tracking-tight">Send a request</h2>
            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Name" name="name" />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div>
                <label className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="mt-2 w-full bg-transparent border-b border-border-strong py-3 text-base focus:outline-none focus:border-primary resize-none"
                  placeholder="Tell us what you need…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 h-12 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Submit request <ArrowUpRight size={16} />
              </button>
            </form>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-2xl font-medium tracking-tight">Direct lines</h2>
            <ul className="mt-8 hairline-t">
              <Row k="Sales" v="sales@quicktech.in" />
              <Row k="Support (24/7)" v="+91 80 4000 1200" />
              <Row k="Press" v="press@quicktech.in" />
            </ul>

            <h3 className="mt-12 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Offices</h3>
            <ul className="mt-4 hairline-t">
              {offices.map((o) => (
                <li key={o.city} className="flex items-center justify-between py-4 hairline-b">
                  <div>
                    <div className="text-base font-medium">{o.city}</div>
                    <div className="text-sm text-muted-foreground">{o.line}</div>
                  </div>
                  <span className="text-mono text-[11px] text-muted-foreground">{o.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full bg-transparent border-b border-border-strong py-3 text-base focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-center justify-between py-4 hairline-b">
      <span className="text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{k}</span>
      <span className="text-base">{v}</span>
    </li>
  );
}
