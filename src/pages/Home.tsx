import { Link } from "react-router-dom";
import { Star, Phone, Calendar, ShieldCheck, Sparkles, HeartPulse, Clock, BadgeIndianRupee, Stethoscope, Smile, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import heroSmile from "@/assets/hero-smile.jpg";
import teamDoctors from "@/assets/team-doctors.jpg";
import clinicChair from "@/assets/clinic-chair.jpg";
import clinicTreatment from "@/assets/clinic-treatment.jpg";
import clinicPediatric from "@/assets/clinic-pediatric.jpg";
import clinicPatient from "@/assets/clinic-patient.jpg";
import drInternational from "@/assets/dr-international.jpg";
import { CLINIC, SERVICES } from "@/lib/clinic";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SERVICE_IMAGES: Record<string, string> = {
  "root-canal": clinicTreatment,
  braces: clinicPatient,
  "dental-implants": drInternational,
  "teeth-whitening": heroSmile,
  "tooth-extraction": clinicChair,
  "pediatric-dentistry": clinicPediatric,
  dentures: teamDoctors,
  "smile-makeover": heroSmile,
};

const WHY_US = [
  { icon: Sparkles, title: "Modern Equipment", desc: "Digital X-ray, RVG, rotary endodontics & sterile setup." },
  { icon: Stethoscope, title: "Experienced Dentists", desc: "MDS specialists with 5+ years of clinical excellence." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Transparent rates, easy EMI options on major treatments." },
  { icon: HeartPulse, title: "Pain-Free Treatment", desc: "Latest anaesthesia techniques for a comfortable visit." },
  { icon: ShieldCheck, title: "Hygienic Clinic", desc: "Hospital-grade sterilisation & single-use disposables." },
  { icon: Clock, title: "Emergency Support", desc: "Same-day appointments for dental emergencies." },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", text: "Got my braces done here — friendly staff and absolutely painless visits. My smile changed completely!", rating: 5 },
  { name: "Rahul Verma", text: "Best implant clinic in Indore. Dr. Saklecha explained everything and the procedure was smooth.", rating: 5 },
  { name: "Anita Joshi", text: "Took my 6-year-old here. The doctors are so patient with kids. Highly recommended.", rating: 5 },
  { name: "Mohit Agrawal", text: "Single-sitting root canal — I was nervous but felt nothing. Very professional setup.", rating: 5 },
];

const FAQS = [
  { q: "Do I need an appointment or can I walk in?", a: "We strongly recommend booking an appointment to minimise wait time. Walk-ins are accepted subject to availability." },
  { q: "Is the treatment painful?", a: "All treatments are performed under effective local anaesthesia. Most patients report no pain at all." },
  { q: "Do you accept insurance / EMI?", a: "Yes, we offer flexible EMI options for braces, implants and smile makeovers." },
  { q: "How long does a typical visit take?", a: "Consultations take 15–20 minutes. Treatment time varies by procedure and is discussed upfront." },
  { q: "Is the clinic safe and hygienic?", a: "Absolutely. We follow hospital-grade sterilisation protocols and use single-use disposables wherever possible." },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-primary/20 text-xs font-medium text-primary-deep">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" /> 4.9★ on Google · 2000+ Happy Patients
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
              Your Smile, <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">Our Priority</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              Indore's most trusted dental, braces and implant centre. Painless treatment, modern equipment and honest pricing — all under one roof.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link to="/book" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-semibold shadow-[var(--shadow-soft)] hover:opacity-95 transition">
                <Calendar className="w-5 h-5" /> Book Appointment
              </Link>
              <a href={`tel:${CLINIC.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary-deep font-semibold border border-primary/20 hover:bg-primary-soft transition">
                <Phone className="w-5 h-5" /> Call {CLINIC.phone}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Painless Care</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Same-Day Implants</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-card)] border border-white/60">
              <img src={heroSmile} alt="Confident smiling patient at Saklecha's Dental Clinic Indore" className="w-full h-[420px] md:h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-3 sm:left-6 bg-white rounded-2xl shadow-[var(--shadow-card)] p-4 flex items-center gap-3 border border-border">
              <div className="w-11 h-11 rounded-full bg-primary-soft flex items-center justify-center"><Smile className="w-6 h-6 text-primary-deep" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Happy Patients</div>
                <div className="text-base font-bold text-foreground">{CLINIC.patients}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { v: CLINIC.experience, l: "Years Experience" },
            { v: CLINIC.patients, l: "Happy Patients" },
            { v: `${CLINIC.rating}★`, l: "Google Rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl md:text-3xl font-bold text-primary-deep">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our Services</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">Complete Dental Care, One Roof</h2>
            <p className="mt-3 text-muted-foreground">From routine check-ups to full smile makeovers — delivered with care and precision.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/services" className="group flex flex-col bg-white rounded-2xl border border-border overflow-hidden hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-primary-soft">
                  <img src={SERVICE_IMAGES[s.slug]} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground leading-tight">{s.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-2 flex-1">{s.short}</p>
                  <div className="mt-3 inline-flex items-center text-xs sm:text-sm font-semibold text-primary">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-soft/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Why Choose Us</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">Indore Trusts Saklecha's</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {WHY_US.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-border hover:shadow-[var(--shadow-card)] transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center text-primary-foreground"><f.icon className="w-6 h-6" /></div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our Clinic</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">A Modern, Welcoming Space</h2>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-primary inline-flex items-center gap-1">View Gallery <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[clinicChair, clinicTreatment, clinicPediatric, teamDoctors].map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl bg-muted ${i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}`}>
                <img src={src} alt={`Clinic ${i + 1}`} loading="lazy" className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${i === 0 ? "h-64 md:h-full" : "h-32 md:h-48"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] order-2 md:order-1">
            <img src={teamDoctors} alt="Doctors at Saklecha's Dental Clinic" loading="lazy" className="w-full h-[420px] object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">About the Clinic</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">Specialist-Led Care You Can Trust</h2>
            <p className="mt-4 text-muted-foreground">
              Located on Pipliyahana Road in Indore, Saklecha's Dental and Braces Clinic & Implant Centre brings together specialist orthodontists, implantologists and cosmetic dentists under one roof.
            </p>
            <ul className="mt-6 space-y-3">
              {["Internationally trained dental team", "Digital diagnostics & treatment planning", "Family-friendly, transparent pricing"].map((l) => (
                <li key={l} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {l}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-semibold text-sm">
              More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-soft/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Patient Stories</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">Trusted by Google Reviews</h2>
            <div className="mt-3 inline-flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              <span className="ml-2 text-sm text-muted-foreground">4.9 / 5 from happy patients</span>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-border">
                <div className="flex gap-0.5 text-amber-500">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <p className="mt-3 text-sm text-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-4 text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">Verified Patient</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">FAQ</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 md:p-14 text-center text-primary-foreground shadow-[var(--shadow-card)]" style={{ background: "var(--gradient-primary)" }}>
            <h2 className="text-3xl md:text-4xl font-bold">Ready for a Healthier Smile?</h2>
            <p className="mt-3 opacity-90 max-w-xl mx-auto">Book your appointment in under a minute. Same-day slots usually available.</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/book" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary-deep font-semibold">
                <Calendar className="w-5 h-5" /> Book Appointment
              </Link>
              <a href={`tel:${CLINIC.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/40 text-white font-semibold">
                <Phone className="w-5 h-5" /> {CLINIC.phone}
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm opacity-90">
              <MapPin className="w-4 h-4" /> {CLINIC.address}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}