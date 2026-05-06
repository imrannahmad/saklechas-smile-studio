import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import clinicChair from "@/assets/clinic-chair.jpg";
import clinicTreatment from "@/assets/clinic-treatment.jpg";
import clinicPediatric from "@/assets/clinic-pediatric.jpg";
import clinicPatient from "@/assets/clinic-patient.jpg";
import teamDoctors from "@/assets/team-doctors.jpg";
import drInternational from "@/assets/dr-international.jpg";
import drConference from "@/assets/dr-conference.jpg";
import conferenceDoctors from "@/assets/conference-doctors.jpg";
import conferenceGroup from "@/assets/conference-group.jpg";
import conferenceTeam from "@/assets/conference-team.jpg";
import heroSmile from "@/assets/hero-smile.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Clinic Gallery — Saklecha's Dental, Indore" },
      { name: "description", content: "Take a look inside Saklecha's Dental & Implant Centre — modern equipment, hygienic setup and our specialist team." },
      { property: "og:title", content: "Clinic Gallery — Saklecha's Dental" },
      { property: "og:description", content: "Modern, welcoming dental clinic in Indore." },
    ],
  }),
  component: GalleryPage,
});

const IMAGES = [
  { src: clinicChair, alt: "Modern dental chair" },
  { src: clinicTreatment, alt: "Patient under treatment" },
  { src: clinicPediatric, alt: "Pediatric dental care" },
  { src: clinicPatient, alt: "Happy patient" },
  { src: teamDoctors, alt: "Doctors team" },
  { src: drInternational, alt: "Dr Saklecha international training" },
  { src: drConference, alt: "Dental conference" },
  { src: conferenceDoctors, alt: "Conference doctors" },
  { src: conferenceGroup, alt: "Conference group" },
  { src: conferenceTeam, alt: "Conference team" },
  { src: heroSmile, alt: "Confident smile" },
];

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <section className="py-12 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Clinic Gallery</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A peek inside our modern dental clinic in Indore.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {IMAGES.map((img, i) => (
              <button key={i} onClick={() => setOpen(i)} className="group overflow-hidden rounded-2xl bg-muted aspect-square">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-4 right-4 text-white/90 hover:text-white" onClick={() => setOpen(null)} aria-label="Close"><X className="w-8 h-8" /></button>
          <img src={IMAGES[open].src} alt={IMAGES[open].alt} className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl" />
        </div>
      )}
    </div>
  );
}