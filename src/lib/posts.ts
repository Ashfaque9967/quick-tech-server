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
        text: "Achieving 99.999% uptime — commonly known as \u201Cfive nines\u201D — is the gold standard for mission-critical infrastructure. It translates to just over five minutes of downtime per year, a margin so tight that even minor disruptions can have outsized consequences. For Tier-3 data centers, which are designed to be concurrently maintainable, reaching this level of reliability requires a deliberate blend of redundancy planning, operational discipline, and increasingly, predictive intelligence.",
      },
      {
        type: "p",
        text: "This article explores how modern Tier-3 facilities are engineered and operated to approach five-nines availability, and why redundancy and predictive maintenance are at the core of that mission.",
      },
      { type: "h2", text: "Understanding Tier-3: the foundation of high availability" },
      {
        type: "p",
        text: "Tier-3 data centers are defined by their ability to undergo maintenance without shutting down operations. Unlike Tier-1 or Tier-2 facilities, they incorporate multiple independent distribution paths for power and cooling — though only one path is typically active at a time.",
      },
      {
        type: "ul",
        items: [
          "N+1 redundancy for critical components (power, cooling, etc.)",
          "Concurrent maintainability, allowing planned maintenance without downtime",
          "Multiple power and cooling distribution paths",
          "Robust monitoring and control systems",
        ],
      },
      {
        type: "p",
        text: "However, Tier-3 alone does not guarantee five-nines uptime. It provides the structural foundation — but the execution determines the outcome.",
      },
      { type: "h2", text: "Redundancy planning: eliminating single points of failure" },
      {
        type: "p",
        text: "At the heart of five-nines design is the principle of no single point of failure (SPOF). Every critical system must have a backup that can seamlessly take over without impacting operations.",
      },
      { type: "h2", text: "1. Power infrastructure redundancy" },
      {
        type: "p",
        text: "Power continuity is non-negotiable. Tier-3 facilities typically implement:",
      },
      {
        type: "ul",
        items: [
          "Dual utility feeds from independent substations",
          "Uninterruptible Power Supplies (UPS) in N+1 or 2N configurations",
          "Backup generators with sufficient fuel reserves for extended outages",
          "Automatic Transfer Switches (ATS) for seamless failover",
        ],
      },
      {
        type: "p",
        text: "Advanced facilities also use distributed redundant UPS architectures, reducing the blast radius of any single failure.",
      },
      { type: "h2", text: "2. Cooling system resilience" },
      {
        type: "p",
        text: "Thermal management is just as critical as power. Overheating can bring down systems in minutes.",
      },
      {
        type: "ul",
        items: [
          "N+1 chillers and CRAC/CRAH units",
          "Hot aisle/cold aisle containment for efficiency and isolation",
          "Redundant piping loops and pumps",
          "Real-time thermal monitoring",
        ],
      },
      {
        type: "p",
        text: "Modern designs increasingly adopt liquid cooling and AI-driven airflow optimization to improve reliability under high-density workloads.",
      },
      { type: "h2", text: "3. Network redundancy" },
      {
        type: "p",
        text: "Connectivity must remain uninterrupted even during hardware or provider failures.",
      },
      {
        type: "ul",
        items: [
          "Multiple ISPs with diverse routing paths",
          "Redundant core and edge switches",
          "Automatic failover protocols (BGP, SD-WAN)",
          "Geographically diverse interconnection points",
        ],
      },
      { type: "h2", text: "Predictive maintenance: moving beyond reactive operations" },
      {
        type: "p",
        text: "Traditional maintenance models rely on scheduled servicing or reactive fixes. Both approaches fall short when aiming for five-nines uptime. Enter predictive maintenance, powered by data and analytics.",
      },
      { type: "h2", text: "1. Sensor-driven monitoring" },
      {
        type: "p",
        text: "Modern data centers deploy thousands of sensors across infrastructure:",
      },
      {
        type: "ul",
        items: [
          "Temperature, humidity, and airflow",
          "Power load and voltage fluctuations",
          "Vibration and mechanical stress in equipment",
          "Fuel levels and generator performance",
        ],
      },
      {
        type: "p",
        text: "This data feeds into centralized monitoring platforms in real time.",
      },
      { type: "h2", text: "2. AI and machine learning insights" },
      {
        type: "p",
        text: "Machine learning models analyze historical and real-time data to:",
      },
      {
        type: "ul",
        items: [
          "Detect anomalies before they escalate",
          "Predict component failures (e.g., battery degradation, fan wear)",
          "Recommend proactive interventions",
        ],
      },
      {
        type: "p",
        text: "For example, identifying subtle changes in UPS battery performance can prevent a catastrophic failure during an outage event.",
      },
      { type: "h2", text: "3. Condition-based maintenance" },
      {
        type: "p",
        text: "Instead of fixed schedules, maintenance is triggered by actual equipment condition:",
      },
      {
        type: "ul",
        items: [
          "Replace components only when degradation is detected",
          "Reduce unnecessary downtime from over-maintenance",
          "Optimize operational costs without compromising reliability",
        ],
      },
      { type: "h2", text: "Operational excellence: the human factor" },
      {
        type: "p",
        text: "Even the most advanced infrastructure can fail without disciplined operations.",
      },
      {
        type: "ul",
        items: [
          "Standard Operating Procedures (SOPs) — clearly documented processes for maintenance, incident response, and escalation, updated regularly based on lessons learned.",
          "Training and simulation — routine drills for failure scenarios (power loss, cooling failure, cyber incidents) and cross-team coordination exercises.",
          "Change management — strict controls on configuration changes, risk assessment before implementation, and rollback strategies in place.",
        ],
      },
      {
        type: "quote",
        text: "Human error remains one of the leading causes of downtime — rigorous processes are essential to mitigate it.",
      },
      { type: "h2", text: "Designing for failure: embracing resilience" },
      {
        type: "p",
        text: "Paradoxically, achieving near-perfect uptime requires assuming that failures will happen.",
      },
      {
        type: "ul",
        items: [
          "Fault isolation — segment systems to prevent cascading failures; use microgrids and modular infrastructure blocks.",
          "Rapid recovery mechanisms — automated failover systems and self-healing software-defined infrastructure.",
          "Chaos testing — inspired by hyperscale cloud providers, some operators intentionally introduce failures to test resilience and response times.",
        ],
      },
      { type: "h2", text: "The role of automation and DCIM" },
      {
        type: "p",
        text: "Data Center Infrastructure Management (DCIM) tools provide a unified view of operations:",
      },
      {
        type: "ul",
        items: [
          "Real-time dashboards for power, cooling, and capacity",
          "Predictive analytics integration",
          "Automated alerts and response workflows",
        ],
      },
      {
        type: "p",
        text: "Automation reduces response times and minimizes human intervention during critical events.",
      },
      { type: "h2", text: "Balancing cost and reliability" },
      {
        type: "p",
        text: "Achieving five-nines uptime is expensive. Each additional \u201Cnine\u201D increases complexity and cost exponentially. Organizations must evaluate the business impact of downtime, the cost of redundancy versus potential losses, and any regulatory and compliance requirements. For many enterprises, Tier-3 with enhanced operational practices offers the optimal balance between cost and reliability.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Designing for 99.999% uptime in Tier-3 data centers is not about a single technology or strategy — it\u2019s about layered resilience. Redundant infrastructure eliminates single points of failure, while predictive maintenance ensures systems remain healthy before issues arise.",
      },
      {
        type: "p",
        text: "When combined with disciplined operations and intelligent automation, Tier-3 facilities can push the boundaries of availability, keeping mission-critical workloads online in an increasingly always-on world. The path to five nines is complex — but with the right design philosophy, it is entirely achievable.",
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
