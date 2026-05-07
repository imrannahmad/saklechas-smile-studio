import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-bold">{CLINIC.name}</div>
          <p className="mt-3 text-sm opacity-85 max-w-md">
            Indore's trusted dental, braces and implant centre. Modern equipment,
            painless treatment and honest pricing — for your whole family.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><MessageCircle className="w-5 h-5" /></a>
            <a href={CLINIC.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider opacity-70">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="opacity-90 hover:opacity-100">Services</Link></li>
            <li><Link to="/about" className="opacity-90 hover:opacity-100">About</Link></li>
            <li><Link to="/gallery" className="opacity-90 hover:opacity-100">Gallery</Link></li>
            <li><Link to="/contact" className="opacity-90 hover:opacity-100">Contact</Link></li>
            <li><Link to="/book" className="opacity-90 hover:opacity-100">Book Appointment</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider opacity-70">Reach Us</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /><span>{CLINIC.address}</span></li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /><a href={`tel:${CLINIC.phoneRaw}`}>{CLINIC.phone}</a></li>
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" /><span>Mon–Sat: 10AM–2PM, 5PM–9PM</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs opacity-70 flex flex-col sm:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</div>
          <div>Indore, Madhya Pradesh</div>
        </div>
      </div>
    </footer>
  );
}