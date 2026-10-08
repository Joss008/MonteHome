import { formatPrice } from "@/lib/format";
import { products, quote, site, whatsappUrl } from "@/lib/site";

const contactHref = whatsappUrl(
  "Hola Monte Home, quiero cotizar sus productos. ¿Me pueden ayudar?"
) ?? site.instagramUrl;

const stats = [
  { num: "2", label: "Productos disponibles" },
  { num: "5-7", label: "Días de entrega" },
  { num: "20%", label: "Adelanto para iniciar" },
  { num: "100%", label: "Medidas a medida" },
];

const steps = [
  { num: "01", title: "Eliges", desc: "Explora nuestros productos y elige los que mejor transforman tu espacio." },
  { num: "02", title: "Coordinamos", desc: "Definimos medidas, acabados, entrega y forma de pago contigo." },
  { num: "03", title: "Recibes", desc: "Producimos tu pedido y lo entregamos en 5 a 7 días hábiles." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section id="inicio" className="relative w-full min-h-screen overflow-hidden scroll-mt-16 bg-scene-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/producto1.jpeg)" }}
        />
        <div className="absolute inset-0 bg-white/80 lg:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left pt-20">
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-accent-deep">
                {site.name}
              </span>
              <h1
                className="font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <span className="text-ink block">Muebles y decoración</span>
                <span className="block mt-1 text-accent-deep">para transformar tus espacios</span>
              </h1>
              <p className="text-ink-soft text-base sm:text-lg max-w-xl leading-relaxed pt-2">
                Diseños en madera hechos a la medida de tu hogar. Piezas simples, cálidas y funcionales,
                listas para entregarse en 5 a 7 días hábiles.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#productos"
                  className="bg-accent hover:bg-accent-light text-ink font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 active:scale-[0.97]"
                >
                  VER PRODUCTOS
                </a>
                <a
                  href="#cotizacion"
                  className="border border-line-strong text-ink hover:bg-scene-700 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200"
                >
                  VER COTIZACIÓN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-scene-900 border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-accent-deep" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {stat.num}
                </p>
                <p className="text-ink-mute text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase block mb-4 text-accent-deep">
            Catálogo
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.95] max-w-4xl text-ink"
            style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "-0.03em" }}
          >
            Nuestros <span className="text-accent-deep">productos</span>
          </h2>
          <div className="section-divider mt-8 mb-8" />
          <p className="text-ink-soft text-sm sm:text-base leading-relaxed max-w-lg mb-16">
            Dos piezas en madera natural, diseñadas para ordenar, decorar y dar vida a tus espacios.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {products.map((product) => (
              <article
                key={product.code}
                className="group relative bg-scene-800 rounded-2xl overflow-hidden border border-line hover:border-accent hover:shadow-[0_24px_50px_-30px_rgba(20,26,38,0.45)] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white/85 backdrop-blur-sm border border-accent text-accent-deep">
                      {product.code}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3
                    className="text-ink text-xl sm:text-2xl font-semibold leading-tight mb-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-ink-soft text-sm leading-relaxed mb-4">{product.shortDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-scene-700 border border-line text-ink-soft"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end justify-between gap-4 pt-4 border-t border-line">
                    <div>
                      <p className="text-ink-mute text-[10px] uppercase tracking-[0.15em] mb-1">
                        PVP sin IGV
                      </p>
                      <p className="text-accent-deep font-bold text-xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <a
                      href={contactHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-ink px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-light transition-colors"
                    >
                      Cotizar
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section id="cotizacion" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 bg-scene-900 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase block mb-4 text-accent-deep">
                Cotización
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-normal text-ink mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Referencia <span className="text-accent-deep">{quote.reference}</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                Cotización emitida el {quote.date} con validez de {quote.validity}. Precios en {quote.currency}.
                Atención a cargo de {site.attention}.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Tiempo de entrega", value: quote.delivery },
                  { label: "Condición de pago", value: quote.payment },
                  { label: "Envío", value: quote.shipping },
                  { label: "Personalización", value: quote.customization },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <span className="text-ink-mute text-xs uppercase tracking-[0.15em] sm:w-40 shrink-0 pt-0.5">
                      {item.label}
                    </span>
                    <span className="text-ink-soft text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              <a
                href={quote.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-line-strong text-ink hover:bg-scene-700 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200"
              >
                DESCARGAR COTIZACIÓN (PDF)
              </a>
            </div>

            <div className="bg-scene-800 rounded-2xl border border-line p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-line">
                <span className="text-ink-mute text-xs uppercase tracking-[0.2em]">Detalle</span>
                <span className="text-accent-deep text-xs font-semibold">{quote.reference}</span>
              </div>

              <div className="space-y-5 mb-6">
                {products.map((product) => (
                  <div key={product.code} className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0 border border-line"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-ink-mute text-[10px] uppercase tracking-[0.15em]">{product.code}</p>
                      <p className="text-ink text-sm leading-snug truncate">{product.name}</p>
                    </div>
                    <p className="text-ink text-sm font-semibold shrink-0">{formatPrice(product.price)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-line text-sm">
                <div className="flex justify-between text-ink-soft">
                  <span>Neto</span>
                  <span>S/ {quote.net}</span>
                </div>
                <div className="flex justify-between text-ink-soft">
                  <span>IGV 18%</span>
                  <span>S/ {quote.igv}</span>
                </div>
                <div className="flex justify-between text-ink font-semibold text-base pt-3 border-t border-line">
                  <span>Total</span>
                  <span className="text-accent-deep" style={{ fontFamily: "var(--font-cormorant)" }}>
                    S/ {quote.total}
                  </span>
                </div>
              </div>

              <p className="text-ink-mute text-[11px] leading-relaxed mt-6">
                Precios referenciales de la cotización {quote.reference}. Validez de {quote.validity} desde su
                emisión. Medidas y acabados sujetos a coordinación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 bg-scene-950">
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase block mb-4 text-accent-deep">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-ink mb-16" style={{ fontFamily: "var(--font-cormorant)" }}>
            ¿Cómo trabajamos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.num}>
                <span className="text-accent-deep text-sm font-medium tracking-[0.2em]">{step.num}</span>
                <div className="section-divider mt-3 mb-4" />
                <h3 className="text-xl font-semibold text-ink mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {step.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACTO */}
      <section id="contacto" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/producto2.jpeg)" }} />
        <div className="absolute inset-0 bg-white/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase block mb-4 text-accent-deep">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-ink mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-ink-soft mb-8 max-w-xl mx-auto">
            Escríbenos y coordinamos medidas, acabados y entrega. Cotización personalizada sin compromiso.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={contactHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-ink px-8 py-3.5 rounded-full font-semibold hover:bg-accent-light transition-colors"
            >
              {whatsappUrl() ? "Escribir por WhatsApp" : `Escribir a @${site.instagram}`}
            </a>
            <a
              href={quote.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line-strong text-ink hover:bg-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Descargar cotización
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
