import Image from "next/image";
import { Activity, ArrowRight, Check, ChevronDown, Clock, Flame, Play, X } from "lucide-react";
import { NhScoreGauge } from "@/components/NhScoreGauge";
import type { FeatureCard, Pillar, Testimonial } from "@/types/nickhaasmann";

const navItems = ["Testimonials", "NH System", "Vision", "Transformations"];

const testimonials: Testimonial[] = [
  { name: "RAF CAMORA", role: "Meistgestreamter Musiker DACH", duration: "1:31", image: "/images/nickhaasmann/asset-21-d43aa714.png" },
  { name: "KIAN HOSS", role: "#1 Crypto & Finanzexperte & #1 Podcast DACH", duration: "1:55", image: "/images/nickhaasmann/asset-23-ff81b99c.png" },
  { name: "LARRY LIU", role: "CEO 4KEYS | FORBES 30Under30", duration: "2:53", image: "/images/nickhaasmann/asset-27-18c3dcba.png" },
  { name: "VARVARA OSIT", role: "Private Aviation, CEO Angelsky", image: "/images/nickhaasmann/asset-28-129e6e42.png" },
  { name: "KATARZYNA KIJOWSKA", role: "Beauty Fashion Travel Influencer", image: "/images/nickhaasmann/asset-29-575a79e8.webp" },
  { name: "SAMIRA DADASHI", role: "Singer & Host", image: "/images/nickhaasmann/asset-25-66033fec.webp" },
];

const features: FeatureCard[] = [
  { title: "Endlose Energie", description: "Dank Lifestyle & Hormon-Optimierung wirst du jeden Tag energiegeladen sein.", variant: "bolt" },
  { title: "Schritt-für-Schritt", description: "Kein Overload an Information und Schluss mit dem Blindflug. Du bekommst einen klaren Fahrplan.", variant: "calendar" },
  { title: "Nie Wieder Schlafprobleme", description: "Wir analysieren und optimieren deinen Schlaf, damit du komplett erholt aufwachst.", variant: "sleep" },
  { title: "Unterstützung 24/7", description: "Wir stehen dir mit unserer Unterstützung immer zur Seite. Du kannst jederzeit Fragen stellen.", variant: "chat" },
  { title: "Endlich Fit & Athletisch", description: "Erreiche deine körperliche & mentale Topform. 100% individuell an dich angepasst.", variant: "fitness" },
  { title: "Messbarer Fortschritt", description: "Gesundheits- und Leistungs-KPIs ersetzen Zufall, Meinungen und Rätselraten.", variant: "metric" },
];

const pillars: Pillar[] = [
  { eyebrow: "Säule 1", title: "Schlaf & Erholung", description: "75% deines Lebenserfolgs hängt von deinem Energielevel ab. Wie gut du schläfst, beeinflusst dieses Energielevel zu 80%!" },
  { eyebrow: "Säule 2", title: "Ernährung & Supplements", description: "Die ideale Diät führt dich in deinem gegenwärtigen Zustand schnell und effizient deinem aktuellen Ziel näher." },
  { eyebrow: "Säule 3", title: "Training & Bewegung", description: "Training ist die Durchführung eines strukturierten Programmes zur Leistungssteigerung." },
  { eyebrow: "Säule 4", title: "Mindset & Stressmanagement", description: "Mindset ist die Basis um langfristig spielerisch auf Höchstleistung zu performen." },
  { eyebrow: "Säule 5", title: "Lifestyle & Umwelteinflüsse", description: "Umweltbedingungen wie Toxine und Schwermetalle können deine Höchstleistung beeinträchtigen." },
];

const gallery = [
  "/images/nickhaasmann/asset-38-5cc0fd09.jpeg",
  "/images/nickhaasmann/asset-39-6d5cfde3.jpg",
  "/images/nickhaasmann/asset-40-a15ea73f.webp",
  "/images/nickhaasmann/asset-41-fcfb4f62.webp",
  "/images/nickhaasmann/asset-42-3697fcb0.webp",
  "/images/nickhaasmann/asset-43-ebad89b8.webp",
];

const faq = [
  "Was unterscheidet Nick vom Rest des Marktes?",
  "Was macht Nick genau?",
  "Was macht Nick so außergewöhnlich?",
  "Wie schnell kann ich Resultate erzielen?",
  "Was sind die Kriterien für eine Zusammenarbeit?",
  "Benötige ich ein Fitnessstudio?",
  "Ich habe einen sehr vollen Terminkalender. Wie lässt sich das Coaching anpassen, wenn meine Zeit begrenzt ist?",
  "Gibt es zusätzliche Kosten, die auf mich zukommen durch das Coaching?",
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(1120px,calc(100%-24px))] items-center justify-between gap-4 rounded-full border border-white/10 bg-[#0f0d0d]/85 px-4 py-3 text-xs text-white/70 shadow-2xl shadow-black/40 backdrop-blur md:px-6">
      <a href="#top" className="flex items-center gap-2 font-semibold text-white">
        <span className="grid size-9 place-items-center rounded-full bg-white text-black">NH</span>
      </a>
      <nav className="hidden items-center gap-7 md:flex">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-white">
            {item}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <a href="#cta" className="hidden rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-primary md:inline-flex">
          zur kostenlosen Beratung
        </a>
        <a href="#nh-system" className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:bg-primary hover:text-white">
          NH Score
        </a>
      </div>
    </header>
  );
}

function CtaButton({ children = "kostenlose Beratung buchen" }: { children?: string }) {
  return (
    <a href="#cta" className="nh-button group">
      {children}
      <span className="ml-3 flex -space-x-2 text-white/80">
        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="nh-eyebrow">{eyebrow}</span>
      <h2 className="nh-title mt-5">{title}</h2>
      {copy ? <p className="nh-copy mt-6">{copy}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="nh-grid-lines relative isolate overflow-hidden pt-32 md:pt-40">
      <div className="absolute left-1/2 top-24 -z-10 size-[680px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
      <div className="nh-section grid min-h-[820px] items-center gap-12 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="nh-eyebrow">datenbasiertes Gesundheits- und Fitness-Coaching</span>
          <h1 className="mt-6 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-5xl font-semibold tracking-[-0.075em] text-transparent md:text-[82px] md:leading-[0.95]">
            Werde der CEO deiner Gesundheit & Performance.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Absolute High-Performer wie RAF Camora und Kiarash “Hoss” Hossainpour schwören auf das NH-SYSTEM von Nick Haasmann.
          </p>
          <div className="mt-8 flex flex-col items-center gap-5">
            <CtaButton />
            <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">wenig Plätze Verfügbar</span>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-[1fr_1.15fr_1fr] md:items-end">
          <ProofMiniCard />
          <div className="nh-card relative mx-auto aspect-[1.02] w-full max-w-[450px] overflow-hidden border-primary/20">
            <Image src="/images/nickhaasmann/asset-20-92a8678f.webp" alt="Nick Haasmann Coaching Visual" fill className="object-cover" priority />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-7 text-left">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">NH System</p>
              <p className="mt-2 text-2xl font-semibold">Endlich fit & athletisch</p>
            </div>
          </div>
          <ProofMiniCard mirrored />
        </div>
      </div>
    </section>
  );
}

function ProofMiniCard({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <div className="nh-card mx-auto max-w-sm p-5 text-left">
      <div className="flex items-center gap-3">
        <Image src={mirrored ? "/images/nickhaasmann/asset-19-759b53c8.jpg" : "/images/nickhaasmann/asset-18-c1dbcae4.jpg"} alt="Kunden Avatar" width={42} height={42} className="rounded-full" />
        <div>
          <p className="font-semibold">@Varvara Osit</p>
          <p className="text-xs text-white/45">Kann ich nur weiterempfehlen</p>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold leading-6">Danke Nick! Endlich fit & athletisch. Form meines Lebens.</p>
    </div>
  );
}

function HighPerformers() {
  return (
    <section className="nh-section grid items-center gap-12 md:grid-cols-2">
      {[testimonials[0], testimonials[1]].map((person) => (
        <div key={person.name} className="nh-card relative h-[430px] overflow-hidden p-6">
          <Image src={person.image} alt={person.name} fill className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808] via-[#0a0808]/25 to-transparent" />
          <div className="absolute inset-x-6 bottom-6">
            <p className="text-3xl font-semibold tracking-tight">{person.name}</p>
            <p className="mt-2 text-white/60">{person.role}</p>
          </div>
        </div>
      ))}
      <div className="md:col-span-2 mx-auto max-w-3xl text-center">
        <h2 className="nh-title">High-Performer schwören auf das NH-SYSTEM</h2>
        <p className="nh-copy mt-6">Topform durch datenbasierte Optimierung deiner Gesundheit. Kein Blindflug mehr. Konstanter, nachvollziehbarer Fortschritt deiner Gesundheits & Leistungs-KPIs.</p>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    ["Keine Zeit", "Jeder von uns hat die gleiche Menge an Zeit zur Verfügung. Du kannst deine Zeit entweder verbringen oder sie investieren."],
    ["Kein Individuelles System", "Kein auf dich angepasstes System, sondern Methoden, die nicht nachhaltig funktionieren da die Individualität fehlt."],
    ["Keine Vertrauensperson", "Keine Ansprechperson mit echter Expertise die alle Bereiche abdeckt, statt sich rein auf das Training zu fokussieren."],
  ];
  return (
    <section className="nh-section" id="vision">
      <SectionHeading eyebrow="Das Problem" title="Warum die Meisten scheitern.." />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map(([title, copy]) => (
          <div key={title} className="nh-card p-7">
            <Clock className="size-10 text-primary" />
            <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
            <p className="mt-4 leading-7 text-white/55">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="nh-section" id="testimonials">
      <SectionHeading eyebrow="Testimonials" title="Das sagen Kunden" copy="Nick geniesst seit Jahren einen ausgezeichneten Ruf, aber überzeuge dich selbst wieso diese Elite ihres Fachs Nick ihre Gesundheit blind anvertrauen" />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="nh-card relative h-[500px] overflow-hidden">
            <Image src={item.image} alt={item.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="mt-2 min-h-11 text-sm text-white/60">{item.role}</p>
              {item.duration ? <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-black"><Play className="size-3 fill-black" /> PLAY {item.duration}</span> : null}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center"><a className="rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-primary" href="#cta">mehr Erfolgsstories</a></div>
    </section>
  );
}

function FeatureVisual({ variant }: { variant: FeatureCard["variant"] }) {
  if (variant === "calendar") {
    return <div className="grid grid-cols-4 gap-2 text-center text-xs text-white/55">{["Februar", "März", "April", "May"].map((m) => <div key={m} className="rounded-2xl border border-white/10 p-3"><b className="block text-white">{m}</b><span>3 10 17 24</span></div>)}</div>;
  }
  if (variant === "chat") {
    return <div className="space-y-3 text-xs"><p className="w-3/4 rounded-2xl bg-white/10 p-3">mein Schlaf & Energielevel ist aktuell sehr schlecht...</p><p className="ml-auto w-4/5 rounded-2xl bg-primary p-3 text-white">hier eine Step by Step Anleitung und ein paar Tipps</p><p className="rounded-2xl bg-white/10 p-3">macht Sinn - Danke!!</p></div>;
  }
  if (variant === "sleep") {
    return <NhScoreGauge />;
  }
  if (variant === "fitness") {
    return <Image src="/images/nickhaasmann/asset-30-07169c45.png" alt="Fitness" width={260} height={180} className="mx-auto rounded-3xl object-cover" />;
  }
  return <div className="grid h-48 place-items-center rounded-[28px] border border-white/10 bg-[radial-gradient(circle,rgb(255_68_51/.26),transparent_60%)]"><Flame className="size-20 text-primary" /></div>;
}

function Benefits() {
  return (
    <section className="nh-section">
      <SectionHeading eyebrow="Vorteile" title="Wir verhelfen Menschen die außergewöhnliches vollbringen möchten" />
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.title} className="nh-card min-h-[420px] p-7">
            <FeatureVisual variant={feature.variant} />
            <h3 className="mt-8 text-2xl font-semibold">{feature.title}</h3>
            <p className="mt-4 leading-7 text-white/58">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Transformations() {
  return (
    <section className="overflow-hidden py-20" id="transformations">
      <div className="nh-section py-0">
        <SectionHeading eyebrow="Transformations" title="Erstaunliche Transformationen Dein neues Leben beginnt hier" copy="Mit dem NH-SYSTEM zum Erfolg. Ein verbessertes Erscheinungsbild als beeindruckender Nebeneffekt deiner ganzheitlichen Transformation." />
      </div>
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {gallery.concat(gallery.slice(0, 3)).map((src, index) => (
            <div key={`${src}-${index}`} className="nh-card relative h-64 overflow-hidden md:h-80">
              <Image src={src} alt="Transformation" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-6 text-center"><a href="#cta" className="nh-button">Transformationen bestaunen</a></div>
      </div>
    </section>
  );
}

function Lifestyle() {
  const items = [
    ["10 Hours", "4 Hours", "hoher Zeitinvest & Cardiotraining", "durch das NH-SYSTEM wirst du 71% Trainingszeit sparen"],
    ["0%", "kcal", "Kalorien zählen & strikte Diäten", "0% Kalorienzählen und keine strengen Diäten"],
    ["125%", "better", "Verlust von Lebensqualität", "Deine Lebensqualität wird durchschnittlich um 125% verbessert."],
  ];
  return (
    <section className="nh-section">
      <SectionHeading eyebrow="Lebensqualität verbessern" title="Das NH-SYSTEM erspart dir folgendes" copy="steigere deine Energie und Lebensqualität mit effizientem Training und einfacher Ernährung, ohne strenge Restriktionen und unnötigem Kalorienzählen" />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(([a, b, title, copy]) => (
          <div key={title} className="nh-card p-7 text-center">
            <div className="mx-auto grid size-44 place-items-center rounded-full border border-green-400/20 bg-green-400/10">
              <div><p className="text-4xl font-semibold text-green-400">{a}</p><p className="text-sm text-white/45">{b}</p></div>
            </div>
            <h3 className="mt-8 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NhSystem() {
  return (
    <section className="nh-section" id="nh-system">
      <SectionHeading eyebrow="Das NH-SYSTEM" title="Verbessert DEIN Leben." copy="Messbar abgeleitet von Daten & nicht durch Zufall oder Meinungen." />
      <div className="relative mx-auto max-w-4xl space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/35 before:to-transparent md:before:left-1/2">
        {pillars.map((pillar, index) => (
          <article key={pillar.title} className={`relative grid gap-6 md:grid-cols-2 ${index % 2 ? "md:text-left" : "md:text-right"}`}>
            <div className={index % 2 ? "hidden md:block" : ""} />
            <div className="nh-card ml-10 p-6 md:ml-0">
              <p className="text-sm font-semibold text-primary">{pillar.eyebrow}</p>
              <h3 className="mt-2 text-2xl font-semibold">{pillar.title}</h3>
              <p className="mt-4 leading-7 text-white/58">{pillar.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-20 max-w-3xl text-center">
        <h3 className="nh-title">Kontinuierliche Verbesserung</h3>
        <p className="nh-copy mt-5">&quot;Entscheidend ist nicht, was du einmal tust, sondern das, was du kontinuierlich verbesserst und regelmäßig ausführst.&quot;</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {["Testen", "Analysieren", "Optimieren"].map((title) => <div key={title} className="nh-card p-6"><Activity className="size-8 text-primary" /><h4 className="mt-6 text-xl font-semibold">{title}</h4><p className="mt-3 text-white/55">{title === "Testen" ? "Umfassende Testbatterie deines aktuellen Gesundheits & Fitnesszustandes" : title === "Analysieren" ? "Testanalysen für maßgeschneiderte Optimierungen deines Plans" : "kontinuierliches optimieren der Strategien für optimale, nachhaltige Erfolge"}</p></div>)}
      </div>
    </section>
  );
}

function Coach() {
  return (
    <section className="nh-section grid items-start gap-10 md:grid-cols-[1fr_0.9fr]">
      <div>
        <span className="nh-eyebrow">DEIN COACH</span>
        <h2 className="nh-title mt-5">Nick Haasmann. Dein CEO rund um deine Fitness & Gesundheit</h2>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {["+ 326 Leben verbessert", "+ 12 Jahre Erfahrung", "24 % Erfolgsquote", "Leidenschaft"].map((stat) => <div key={stat} className="nh-card p-5 text-2xl font-semibold">{stat}</div>)}
        </div>
        <div className="mt-8 space-y-4 text-white/65">
          <p>14 facher judo Staatmeister</p>
          <p>20+ Jahre Erfahrung aus dem Spitzensport</p>
          <p>Creative Director & Co-Founder Galaxy Fitness Club</p>
          <p>3500qm Fitness Tempel in Wien</p>
        </div>
      </div>
      <div className="nh-card overflow-hidden">
        <Image src="/images/nickhaasmann/asset-37-bdf284dd.jpg" alt="Nick Haasmann" width={620} height={820} className="h-[620px] w-full object-cover object-top" />
        <div className="p-6"><h3 className="text-2xl font-semibold">Nick Haasmann</h3><p className="mt-2 text-white/55">CEO NH Consulting / NH Training Club</p></div>
      </div>
    </section>
  );
}

function Comparison() {
  const badCoach = ["unerfahrene Coaches", "minimale Weiterbildung", "kein Support", "kcal Zählen & Cardio", "kein datenbasierter Ansatz", "wenig Erfolgsstories", "jeder wird betreut"];
  const good = ["+12 Jahre Erfahrung und Track Record", "+250.000€ in Weiterbildung investiert", "24/7 Support & Hilfe", "Kontinuierliche Wissensvermittlung", "Datenbasierter Ansatz (NH-SYSTEM)", "+1000 Leben erfolgreich verbessert", "Die erfolgreichsten Personen vertrauen Nick"];
  const badApp = ["0815 Standard Pläne", "keine Individualisierung", "Motivationsprobleme", "Kein Persönliches Feedback", "Technische Probleme", "Unpersönliche Erfahrung", "keine soziale Interaktion"];
  return (
    <section className="nh-section text-center">
      <h2 className="nh-title">How you do anything is how you do everything</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <CompareColumn title="0815 COACH" items={badCoach} negative />
        <CompareColumn title="NICK HAASMANN" items={good} />
        <CompareColumn title="0815 APP" items={badApp} negative />
      </div>
      <div className="mt-10"><CtaButton>Analyse sichern</CtaButton></div>
    </section>
  );
}

function CompareColumn({ title, items, negative = false }: { title: string; items: string[]; negative?: boolean }) {
  return (
    <div className={`nh-card p-6 text-left ${negative ? "opacity-80" : "border-primary/40"}`}>
      <h3 className="text-center text-xl font-semibold">{title}</h3>
      <div className="mt-8 space-y-5">
        {items.map((item) => <p key={item} className="flex gap-3 text-sm text-white/65">{negative ? <X className="size-5 shrink-0 text-primary" /> : <Check className="size-5 shrink-0 text-green-400" />}<span>{item}</span></p>)}
      </div>
    </div>
  );
}

function Faq() {
  return (
    <section className="nh-section">
      <SectionHeading eyebrow="FAQ's" title="Häufig gestellte Fragen" />
      <div className="mx-auto max-w-3xl space-y-3">
        {faq.map((question, index) => (
          <details key={question} className="nh-card group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
              {question}
              <ChevronDown className="size-5 transition group-open:rotate-180" />
            </summary>
            <p className="mt-4 leading-7 text-white/55">{index === 0 ? "Nick verbindet Daten, Erfahrung aus dem Spitzensport, Lifestyle-Optimierung und persönliche Betreuung zu einem individuellen System." : "Das Coaching wird individuell an deinen Alltag, deine Ziele und deine aktuellen Gesundheitsdaten angepasst."}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="cta" className="nh-section grid items-center gap-10 md:grid-cols-[0.9fr_1fr]">
      <div className="space-y-8">
        <ProofMiniCard />
        <h2 className="nh-title">Warte nicht noch ein Jahr. Deine Gesundheit wartet auch nicht...</h2>
        <div className="flex flex-col items-start gap-4"><CtaButton>kostenlose Beratung</CtaButton><span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">wenig Plätze Verfügbar</span></div>
      </div>
      <div className="nh-card relative min-h-[560px] overflow-hidden">
        <Image src="/images/nickhaasmann/asset-45-778420ac.webp" alt="CTA" fill className="object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgb(255_68_51/.22),transparent_45%),linear-gradient(to_top,#0a0808,transparent_60%)]" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-white/50 md:flex-row">
        <div className="flex items-center gap-6"><span className="font-semibold text-white">NH</span>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-white">{item}</a>)}</div>
        <p>Copyright © 2024 Nick Haasmann. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <HighPerformers />
      <Problem />
      <Testimonials />
      <Benefits />
      <Transformations />
      <Lifestyle />
      <NhSystem />
      <Coach />
      <Comparison />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
