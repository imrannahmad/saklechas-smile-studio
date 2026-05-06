import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Award, Users, Stethoscope, ArrowRight } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import teamDoctors from "@/assets/team-doctors.jpg";
import drInternational from "@/assets/dr-international.jpg";
import drConference from "@/assets/dr-conference.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Saklecha's Dental & Implant Centre — Indore" },
      { name: "description", content: "Meet the specialist team behind Indore's most trusted dental, braces and implant clinic. Internationally trained, family-friendly care." },
      { property: "og:title", content: "About Saklecha's Dental — Indore" },
      { property: "og:description", content: "Specialist-led dental care with international training and modern protocols." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Stethoscope, title: "Specialist-Led", desc: "MDS specialists in orthodontics, implantology and cosmetic dentistry." },
  { icon: Award, title: "Internationally Trained", desc: "Continuous learning at global dental conferences and workshops." },
  { icon: Users, title: "Family-Friendly", desc: "Gentle care for kids, adults and seniors — all under one roof." },
];

function AboutPage() {
  return (
    <div>
      <section className="py-12 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">About Us</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Caring for Indore's Smiles</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{CLINIC.name} — where modern dentistry meets warm, personalised care.</p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={teamDoctors} alt="Saklecha's Dental team" loading="lazy" className="w-full h-[420px] object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Located on Pipliyahana Road, Indore, Saklecha's Dental and Braces Clinic & Implant Centre is led by a team of specialist dentists with over 5 years of clinical excellence. We've treated 2000+ happy patients with painless, ethical, and result-driven dentistry.
            </p>
            <p className="mt-3 text-muted-foreground">
              Our philosophy is simple — honest advice, modern equipment, and treatment plans built around YOU. From a child's first dental visit to advanced full-mouth implants, every patient gets the same level of attention.
            </p>
            <ul className="mt-6 space-y-3">
              {["Digital X-ray & RVG diagnostics", "Single-sitting RCT with rotary endodontics", "Same-day dental implants", "Hospital-grade sterilisation"].map((l) => (
                <li key={l} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {l}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-primary-soft/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Stand For</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center text-primary-foreground"><v.icon className="w-6 h-6" /></div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden"><img src={drInternational} alt="Dr Saklecha at international dental conference" loading="lazy" className="w-full h-72 md:h-96 object-cover" /></div>
          <div className="rounded-3xl overflow-hidden"><img src={drConference} alt="Dental team at training conference" loading="lazy" className="w-full h-72 md:h-96 object-cover" /></div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground">Visit us today</h2>
          <p className="mt-3 text-muted-foreground">{CLINIC.address}</p>
          <Link to="/book" className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-semibold">Book Appointment <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}