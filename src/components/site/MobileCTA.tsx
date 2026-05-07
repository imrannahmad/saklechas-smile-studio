import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { CLINIC } from "@/lib/clinic";

export function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a href={`tel:${CLINIC.phoneRaw}`} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-soft text-primary-deep font-semibold text-sm">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <Link to="/book" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-semibold text-sm">
          <Calendar className="w-4 h-4" /> Book
        </Link>
      </div>
    </div>
  );
}