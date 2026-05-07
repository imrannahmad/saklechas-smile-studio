import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { SERVICES, SERVICE_FAQS } from "@/lib/clinic";
import heroSmile from "@/assets/hero-smile.jpg";
import teamDoctors from "@/assets/team-doctors.jpg";
import clinicChair from "@/assets/clinic-chair.jpg";
import clinicTreatment from "@/assets/clinic-treatment.jpg";
import clinicPediatric from "@/assets/clinic-pediatric.jpg";
import clinicPatient from "@/assets/clinic-patient.jpg";
import drInternational from "@/assets/dr-international.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const IMAGES: Record<string, string> = {
  "root-canal": clinicTreatment,
  braces: clinicPatient,
  "dental-implants": drInternational,
  "teeth-whitening": heroSmile,
  "tooth-extraction": clinicChair,
  "pediatric-dentistry": clinicPediatric,
  dentures: teamDoctors,
  "smile-makeover": heroSmile,
};

export default function ServicesPage() {
  return (
    <div>
      <section className="py-12 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Dental Services</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Specialist-led treatments for every member of your family — delivered painlessly with the latest technology.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-20">
          {SERVICES.map((s, idx) => (
            <div key={s.slug} id={s.slug} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
                <img src={IMAGES[s.slug]} alt={s.title} loading="lazy" className="w-full h-72 md:h-[420px] object-cover" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">Service</div>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.short}</p>
                <ul className="mt-5 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{b}</span></li>
                  ))}
                </ul>
                {SERVICE_FAQS[s.slug] && (
                  <Accordion type="single" collapsible className="mt-6">
                    {SERVICE_FAQS[s.slug].map((f, i) => (
                      <AccordionItem key={i} value={`${s.slug}-${i}`}>
                        <AccordionTrigger className="text-left text-sm font-semibold">{f.q}</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
                <Link to="/book" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-semibold text-sm">
                  <Calendar className="w-4 h-4" /> Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}