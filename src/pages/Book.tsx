import { useState } from "react";
import { Calendar, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { CLINIC, SERVICES } from "@/lib/clinic";

export default function BookPage() {
  const [form, setForm] = useState<{ name: string; phone: string; service: string; date: string; note: string }>({ name: "", phone: "", service: SERVICES[0].title, date: "", note: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'd like to book an appointment at Saklecha's Dental.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred date: ${form.date || "Anytime"}\nNote: ${form.note || "—"}`,
    );
    window.open(`https://wa.me/${CLINIC.whatsapp}?text=${msg}`, "_blank");
  }

  return (
    <div>
      <section className="py-12 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Book an Appointment</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Fill the form and we'll confirm your slot on WhatsApp within minutes.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-8">
          <form onSubmit={submit} className="md:col-span-3 bg-white rounded-3xl border border-border p-6 md:p-8 shadow-[var(--shadow-card)] space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground">Your Name *</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input mt-1" placeholder="Full name" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Phone Number *</label>
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input mt-1" placeholder="+91…" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Service</label>
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input mt-1">
                {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                <option>General Consultation</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Preferred Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input mt-1" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Note (optional)</label>
              <textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} rows={3} className="input mt-1" placeholder="Anything we should know?" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-semibold">
              <MessageCircle className="w-5 h-5" /> Confirm on WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center">By submitting, you'll be redirected to WhatsApp with your details prefilled.</p>
          </form>

          <aside className="md:col-span-2 space-y-4">
            <div className="bg-primary-soft/60 rounded-3xl p-6 border border-primary/10">
              <div className="text-sm font-semibold text-primary-deep">Quick Contact</div>
              <a href={`tel:${CLINIC.phoneRaw}`} className="mt-3 flex items-center gap-2 text-foreground"><Phone className="w-4 h-4 text-primary" /> {CLINIC.phone}</a>
              <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noreferrer" className="mt-2 flex items-center gap-2 text-foreground"><MessageCircle className="w-4 h-4 text-primary" /> WhatsApp Chat</a>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-border">
              <div className="text-sm font-semibold text-foreground">Why book with us</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {["Same-day appointments", "No waiting room queues", "Honest, transparent pricing", "Family-friendly clinic"].map((l) => (
                  <li key={l} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {l}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-border">
              <div className="text-sm font-semibold text-foreground flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Clinic Hours</div>
              {CLINIC.hours.map((h) => (
                <div key={h.day} className="mt-2 text-sm text-foreground"><span className="font-semibold">{h.day}:</span> {h.time}</div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}