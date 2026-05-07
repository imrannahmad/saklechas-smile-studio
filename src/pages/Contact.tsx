import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export default function ContactPage() {
  return (
    <div>
      <section className="py-12 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">We'd love to hear from you. Call, WhatsApp or drop by the clinic.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a href={`tel:${CLINIC.phoneRaw}`} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border hover:shadow-[var(--shadow-card)] transition">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary-deep"><Phone className="w-6 h-6" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Call us</div>
                <div className="text-lg font-semibold text-foreground">{CLINIC.phone}</div>
              </div>
            </a>
            <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border hover:shadow-[var(--shadow-card)] transition">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary-deep"><MessageCircle className="w-6 h-6" /></div>
              <div>
                <div className="text-sm text-muted-foreground">WhatsApp</div>
                <div className="text-lg font-semibold text-foreground">Chat with us instantly</div>
              </div>
            </a>
            <a href={CLINIC.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border hover:shadow-[var(--shadow-card)] transition">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary-deep"><MapPin className="w-6 h-6" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Visit</div>
                <div className="text-base font-semibold text-foreground">{CLINIC.address}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary-deep"><Clock className="w-6 h-6" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Hours</div>
                {CLINIC.hours.map((h) => (
                  <div key={h.day} className="text-sm text-foreground"><span className="font-semibold">{h.day}:</span> {h.time}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)] min-h-[420px]">
            <iframe
              title="Saklecha's Dental Map"
              src={CLINIC.mapsEmbed}
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}