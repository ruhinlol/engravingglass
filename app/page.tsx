import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProcessSteps from "@/components/ProcessSteps";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ThemeProvider } from "@/components/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors">
        <Nav />
        <main>
          <Hero />

          {/* ── Məhsul Kataloqu & Şəkilləri ── */}
          <section
            id="kataloq"
            className="border-t border-[var(--border-color)] px-5 py-20 transition-colors md:py-28"
          >
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[var(--accent-amber)] uppercase">
                    Eksklüziv Seçimlər
                  </span>
                  <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                    Məhsul Kolleksiyası
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                  Qravür üçün yüksək keyfiyyətli kristal şüşə və təbii ağacdan hazırlanmış lüks qablaşdırma dəstləri.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                <CategoryCard
                  type="whiskey"
                  title="Viski dəstləri"
                  description="Fərdi monoqram və gerb həkki ilə kristal dekanter və 2 ədəd faset kəsimli viski qədəhi, qoz ağacı qutusunda."
                  badge="Lüks Qutu Dəsti"
                  imageSrc="/images/cat_whiskey.jpg"
                />
                <CategoryCard
                  type="wine"
                  title="Şərab & şampan qədəhləri"
                  description="Toy, nişan, yubiley və doğum günləri üçün fərdi ad və xüsusi tarix yazılmış zərif kristal qədəhlər."
                  badge="Özəl Günlər Üçün"
                  imageSrc="/images/cat_wine.jpg"
                />
                <CategoryCard
                  type="corporate"
                  title="Korporativ hədiyyələr"
                  description="Şirkətinizin loqosu və tərəfdaşlarınızın adı ilə fərdiləşdirilmiş VIP dekanter və qələm aksessuar dəstləri."
                  badge="Toplu & VIP Korporativ"
                  imageSrc="/images/cat_corporate.jpg"
                />
              </div>
            </div>
          </section>

          <ProcessSteps />
          <QuoteForm />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
