import Image from "next/image";
import Link from "next/link";
import { products, site, quote, whatsappUrl } from "@/lib/site";

export default function Footer() {
  const wa = whatsappUrl("Hola Monte Home, me gustaría una cotización.");

  return (
    <footer className="bg-scene-900 border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4">
              <Image
                src="/logo-lockup.png"
                alt="Monte Home"
                width={1093}
                height={607}
                className="w-40 sm:w-48 h-auto"
              />
            </h3>
            <p className="text-ink-mute text-sm leading-relaxed mb-4">{site.tagline}.</p>
            <div className="flex gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center text-ink-mute hover:text-accent-deep hover:border-accent transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center text-ink-mute hover:text-accent-deep hover:border-accent transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-ink font-semibold text-sm mb-4">Productos</h4>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.code}>
                  <a href="#productos" className="text-ink-mute text-sm hover:text-accent-deep transition-colors">
                    {product.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#cotizacion" className="text-ink-mute text-sm hover:text-accent-deep transition-colors">
                  Ver cotización
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-ink-mute">
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-deep transition-colors">
                  @{site.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Atención: {site.attention}
              </li>
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Moneda: {quote.currency}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink font-semibold text-sm mb-4">Condiciones</h4>
            <ul className="space-y-2.5 text-sm text-ink-mute">
              <li>Entrega: <span className="text-ink-soft">5 a 7 días hábiles</span></li>
              <li>Pago: <span className="text-ink-soft">20% adelanto / 80% contra entrega</span></li>
              <li>Personalización de medidas y acabados</li>
              <li>
                <Link href={quote.pdf} target="_blank" className="text-accent-deep hover:text-accent-deeper transition-colors">
                  Descargar cotización (PDF)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-mute text-xs">
            &copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-ink-mute">
            <a href="#productos" className="hover:text-ink transition-colors">Productos</a>
            <a href="#cotizacion" className="hover:text-ink transition-colors">Cotización</a>
            <a href="#contacto" className="hover:text-ink transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
