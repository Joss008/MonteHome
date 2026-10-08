"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Cotización", href: "#cotizacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const contactHref = whatsappUrl("Hola Monte Home, me gustaría solicitar una cotización.") ?? site.instagramUrl;

  return (
    <>
      <header className="fixed left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-line">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="#inicio" className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.png"
              alt=""
              width={57}
              height={32}
              className="h-7 w-auto sm:h-8"
              priority
            />
            <span className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-ink" style={{ fontFamily: "var(--font-cormorant)" }}>
                Monte Home
              </span>
              <span className="hidden sm:inline text-[10px] tracking-[0.2em] uppercase text-accent-deep">
                Decoración
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-ink-soft hover:text-ink transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Monte Home"
              className="text-ink-soft hover:text-accent-deep transition-colors p-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href={contactHref}
              target={contactHref.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-accent text-ink px-5 py-2 rounded-full font-semibold text-sm hover:bg-accent-light transition-colors"
            >
              {whatsappUrl() ? "WhatsApp" : "Cotizar"}
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menú"
              className="md:hidden text-ink-soft hover:text-ink p-2"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-scene-900 border-b border-line p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-ink-soft hover:text-ink py-2 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contactHref}
              target={contactHref.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block bg-accent text-ink text-center py-3 rounded-full font-semibold text-sm"
            >
              {whatsappUrl() ? "Escribir por WhatsApp" : "Solicitar cotización"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
