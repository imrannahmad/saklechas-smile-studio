import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center text-primary-foreground font-bold shadow-[var(--shadow-soft)]">
            S
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-foreground">Saklecha's Dental</div>
            <div className="text-[10px] text-muted-foreground hidden sm:block">Braces & Implant Centre</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 text-sm font-semibold text-primary rounded-md"
                  : "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${CLINIC.phoneRaw}`} className="text-sm font-medium text-foreground inline-flex items-center gap-1.5 hover:text-primary">
            <Phone className="w-4 h-4" /> {CLINIC.phone}
          </a>
          <Link to="/book" className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary-deep text-primary-foreground text-sm font-semibold shadow-[var(--shadow-soft)] hover:opacity-95 transition">
            Book Appointment
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2 text-foreground" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                end={l.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-3 rounded-lg text-base font-semibold text-primary bg-primary-soft"
                    : "px-3 py-3 rounded-lg text-base font-medium text-foreground hover:bg-primary-soft"
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-full bg-gradient-to-r from-primary to-primary-deep text-primary-foreground font-semibold">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}