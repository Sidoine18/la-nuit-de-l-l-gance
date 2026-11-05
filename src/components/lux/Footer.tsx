import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Youtube } from "lucide-react";
import { contact, credit, footerNav, site, social } from "@/config/site";
import { Ornament } from "./primitives";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain relative border-t border-border bg-ink">
      <div className="container-lux py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="inline-block">
              <span className="block font-display text-4xl italic text-ivory">La Nuit</span>
              <span className="font-numeral text-xs tracking-[0.4em] text-gold">DE L'ÉLÉGANCE</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.tagline}. Un événement organisé par {site.organizer}.</p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={`tel:${contact.phoneLink}`} className="inline-flex items-center gap-3 text-ivory hover:text-gold">
                <Phone size={16} className="text-gold" /> {contact.phoneDisplay}
              </a>
              {contact.email && <a href={`mailto:${contact.email}`} className="text-ivory hover:text-gold">{contact.email}</a>}
            </div>
            <div className="mt-6 flex gap-3">
              {social.facebook && <SocialLink href={social.facebook} label="Facebook"><Facebook size={16} /></SocialLink>}
              {social.instagram && <SocialLink href={social.instagram} label="Instagram"><Instagram size={16} /></SocialLink>}
              {social.youtube && <SocialLink href={social.youtube} label="YouTube"><Youtube size={16} /></SocialLink>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="eyebrow mb-5">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}><Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-ivory">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Ornament className="my-12" />
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground md:flex-row md:text-left">
          <p>© {year} {site.name} · {site.organizer}. Tous droits réservés.</p>
          <p className="tracking-[0.15em]">
            Site conçu par{" "}
            <a href={credit.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline-offset-4 transition-colors hover:text-ivory hover:underline">
              {credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-primary-foreground">
      {children}
    </a>
  );
}
