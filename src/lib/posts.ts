import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export type Post = {
  slug: string;
  img: string;
  tag: string;
  date: string;
  readTime: string;
  author: string;
  title: string;
  excerpt: string;
  body: { type: "p" | "h2" | "ul" | "quote"; text?: string; items?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "uptime-tier-3",
    img: blog1,
    tag: "Datacenter",
    date: "12 Mar 2025",
    readTime: "7 min",
    author: "R. Mehta · Principal Engineer",
    title: "Designing for 99.999% uptime in tier-3 facilities",
    excerpt:
      "How redundancy planning and predictive maintenance keep mission-critical workloads online.",
    body: [
      {
        type: "p",
        text: "Five nines of availability — 99.999% — translates to roughly five minutes and fifteen seconds of unplanned downtime per year. In a tier-3 facility, where concurrent maintainability is the contractual baseline rather than an aspiration, hitting that number is less about heroic recovery and more about boring, repeatable engineering discipline.",
      },
      { type: "h2", text: "Start with the failure domain map" },
      {
        type: "p",
        text: "Before we touch a single server, we map every dependency: feed A vs feed B power paths, A/B network fabrics, cooling loops, and the physical zones each rack belongs to. A workload that lives across two racks but shares one PDU is not redundant — it is a single failure pretending to be two.",
      },
      { type: "h2", text: "The four levers that actually move the needle" },
      {
        type: "ul",
        items: [
          "N+1 power and cooling at the rack level — verified by quarterly transfer tests, not vendor PDFs.",
          "Active/active networking with sub-second BFD timers, so a fabric event is a hiccup, not an incident.",
          "Predictive failure analytics on drives, fans, and PSUs — replace before the SMART trip, not after.",
          "Runbook automation for the boring 80%: firmware drift checks, log rotation, certificate renewal.",
        ],
      },
      { type: "h2", text: "Predictive maintenance is cheaper than heroics" },
      {
        type: "p",
        text: "Across our managed fleet of roughly 4,200 chassis, drives flagged by predictive analytics fail within 30 days about 71% of the time. Replacing them on a planned window — at 02:00 on a Tuesday, not 14:00 on a Friday — turns a P1 incident into a five-line maintenance ticket.",
      },
      {
        type: "quote",
        text: "Uptime is a side effect of discipline. The teams that hit five nines are the ones that find their problems boring.",
      },
      { type: "h2", text: "What we recommend for new tier-3 deployments" },
      {
        type: "p",
        text: "Budget for a 12-week burn-in period. Run synthetic load against the full A+B failover surface — yank a feed, fail a switch, kill a cooling unit — and measure recovery as observed, not as designed. The number you walk away with is the only one your customers will ever experience.",
      },
    ],
  },
  {
    slug: "rdimm-vs-lrdimm",
    img: blog2,
    tag: "Hardware",
    date: "28 Feb 2025",
    readTime: "6 min",
    author: "S. Iyer · Solutions Architect",
    title: "Choosing memory: RDIMM vs LRDIMM in dense workloads",
    excerpt:
      "A practical buyer's guide for memory selection in modern dual-socket platforms.",
    body: [
      {
        type: "p",
        text: "Memory is the second-most expensive line item in a modern server build, and the one most often specified by inertia rather than analysis. The choice between RDIMM and LRDIMM looks like a small detail on a quote, but on a 24-DIMM dual-socket box it can swing your TCO by 18–22% over a five-year horizon.",
      },
      { type: "h2", text: "The short version" },
      {
        type: "ul",
        items: [
          "RDIMM — lower latency, lower cost per GB, the default for ≤ 256 GB per socket.",
          "LRDIMM — higher capacity ceiling, better signal integrity at 3 DPC, the right call above ~512 GB per socket.",
          "MRDIMM (where supported) — emerging option for AI inference and in-memory analytics; verify platform compatibility first.",
        ],
      },
      { type: "h2", text: "Where the actual break-even sits" },
      {
        type: "p",
        text: "On current-generation Xeon and EPYC platforms, RDIMM at 2 DPC is almost always the right answer for general virtualisation and database workloads. The argument for LRDIMM kicks in when you need 64 GB+ modules at 3 DPC and your workload is bandwidth-bound rather than latency-bound — typically large in-memory caches, SAP HANA, or columnar analytics.",
      },
      { type: "h2", text: "Three mistakes we see every month" },
      {
        type: "ul",
        items: [
          "Mixing DIMM ranks across channels — kills interleaving and silently halves bandwidth.",
          "Populating 3 DPC with RDIMMs and wondering why memory speed dropped to 2400 MT/s.",
          "Buying maxed-out LRDIMMs on a host that will only ever run 12 vCPUs of workload.",
        ],
      },
      {
        type: "quote",
        text: "Spec the memory for the workload, not the chassis. The most expensive DIMM is the one you didn't need.",
      },
      { type: "h2", text: "Our default recipe" },
      {
        type: "p",
        text: "For a balanced virtualisation host, we ship RDIMM 64 GB modules at 2 DPC across all channels — 1 TB total, full bandwidth, ECC enabled, mirrored DIMMs disabled, and patrol scrub set to weekly. It is unsexy, it is correct, and it is what survives a five-year refresh cycle without surprises.",
      },
    ],
  },
  {
    slug: "cabling-discipline",
    img: blog3,
    tag: "Operations",
    date: "14 Feb 2025",
    readTime: "5 min",
    author: "A. Nair · Field Operations Lead",
    title: "Cabling discipline as a reliability strategy",
    excerpt:
      "Why structured cabling pays back in MTTR, airflow, and audit readiness.",
    body: [
      {
        type: "p",
        text: "Walk into any datacenter and you can tell, within ten seconds, how the team operates. The cabling will tell you. Tidy bends, labelled both ends, colour by VLAN, slack managed in the rear channel — that's a team that runs change windows on time. A bird's nest behind the rack is a team that is one outage away from a very long Saturday.",
      },
      { type: "h2", text: "Why this is an SLA conversation, not an aesthetic one" },
      {
        type: "p",
        text: "Mean time to repair is dominated by two things: how fast you can identify the right cable, and how fast you can replace it without disturbing its neighbours. Unlabelled cables add 8–12 minutes to every patch operation. Multiply that across a fleet of 400 ports and a quarterly change cadence and the cost is real.",
      },
      { type: "h2", text: "The standards we enforce on every install" },
      {
        type: "ul",
        items: [
          "Both ends labelled with origin/destination/port — printed, not handwritten.",
          "Colour code: yellow = production, blue = management, red = OOB, green = storage.",
          "Bend radius respected — no Velcro pulled tight, no zip-ties at all.",
          "Slack managed in the rear vertical channel, never coiled inside the chassis.",
          "Patch panels documented in the same source of truth as the rack diagram.",
        ],
      },
      { type: "h2", text: "Airflow is a cabling problem in disguise" },
      {
        type: "p",
        text: "A poorly-dressed bundle behind a 1U server can lift exhaust temperatures by 4–6 °C. That is enough to push fan speeds into the next tier, accelerate component wear, and add measurable kWh to your monthly bill. Tidy cabling is a thermal optimisation, not just a visual one.",
      },
      {
        type: "quote",
        text: "Show me your cabling and I'll tell you your MTTR. The two are the same number, dressed differently.",
      },
      { type: "h2", text: "Audit readiness as a free side effect" },
      {
        type: "p",
        text: "ISO 27001 and SOC 2 auditors love structured cabling for the same reason we do — it is evidence of process. A rack that is consistently dressed, labelled, and documented is a rack that passes a walk-through without a single follow-up question.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
