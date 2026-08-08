import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, X, ChevronLeft, Sparkles, Languages, Star, ChevronUp, ShoppingBag, Share2 } from "lucide-react";
import { menuSections, brand } from "../content";
import logo from "../assests/logo.jpeg";
import "./SamaMenu.css";

type MenuItem = {
  name: string;
  price: string;
  image: string;
  note?: string;
};

type MenuSection = {
  title: string;
  subtitle: string;
  note: string;
  accent: string;
  items: MenuItem[];
};

const sections = menuSections as MenuSection[];

const categoryIcons: Record<string, string> = {
  "المشروبات الساخنة": "☕",
  "المشروبات الباردة": "🧊",
  "المشروبات الخاصة": "✨",
  "الحلويات": "🍰",
  "بوكسات للمشاركة": "📦",
  "آيس كريم": "🍦",
  "القهوة المختصة": "🫘",
  "Sama Collection": "☕",
  "ساندويتش": "🥐",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function SamaMenu() {
  const [activeCategory, setActiveCategory] = useState(sections[0]?.title ?? "");
  const [search, setSearch] = useState("");
  const [arabic, setArabic] = useState(true);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [showBackTop, setShowBackTop] = useState(false);

  // Handle scroll for back-to-top button and active category tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 300);

      const sectionElements = sections.map((section) =>
        document.getElementById(`category-${section.title}`)
      );

      const currentSection = sectionElements.find((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 220 && rect.bottom > 100;
      });

      if (currentSection) {
        const sectionTitle = currentSection.id.replace("category-", "");
        setActiveCategory(sectionTitle);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredSections = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return sections;

    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          `${item.name} ${item.note ?? ""}`.toLowerCase().includes(term)
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [search]);

  const scrollToSection = (title: string) => {
    setActiveCategory(title);
    const element = document.getElementById(`category-${title}`);
    if (element) {
      const yOffset = -130;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sama-menu" dir={arabic ? "rtl" : "ltr"}>
      {/* Ambient Lighting Background */}
      <div className="page-noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Sticky Toolbar: Search & Language & Categories */}
      <section className="menu-toolbar">
        <div className="toolbar-inner">
          <div className="toolbar-top-row">
            <div className="search-box">
              <Search size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={arabic ? "ابحث عن مشروبك أو حلوتك المفضلة..." : "Search menu items..."}
                autoComplete="off"
              />
              {search && (
                <button onClick={() => setSearch("")} aria-label="Clear search">
                  <X size={14} />
                </button>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="lang-toggle-btn"
              onClick={() => setArabic((value) => !value)}
              aria-label="Change language"
            >
              <Languages size={15} />
              <span>{arabic ? "English" : "العربية"}</span>
            </motion.button>
          </div>

          <nav className="category-nav" aria-label="Menu categories">
            {sections.map((section) => {
              const icon = categoryIcons[section.title] || "☕";
              const isActive = activeCategory === section.title;

              return (
                <motion.button
                  key={section.title}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className={`category-tab ${isActive ? "active" : ""}`}
                  onClick={() => scrollToSection(section.title)}
                >
                  <span className="tab-icon">{icon}</span>
                  <span className="tab-title">{section.title}</span>
                  <span className="tab-count">{section.items.length}</span>
                </motion.button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Main Menu Grid */}
      <main className="menu-content">
        {filteredSections.map((section) => (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="menu-section"
            id={`category-${section.title}`}
            key={section.title}
          >
            <div className="section-heading">
              <div className="section-main">
                <div className="section-badge">
                  <span className="badge-icon">
                    {categoryIcons[section.title] || "☕"}
                  </span>
                  <span className="badge-text">
                    {arabic ? "قائمة المنتجات" : "CATEGORY"}
                  </span>
                </div>
                <h2>{section.title}</h2>
                <p className="section-subtitle">{section.subtitle}</p>
              </div>

              <div className="stats-circle">
                <strong>{section.items.length}</strong>
                <span>{arabic ? "صنف" : "ITEMS"}</span>
              </div>
            </div>

            <div className="section-divider" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              className="items-grid"
            >
              {section.items.map((item, index) => {
                const isCardActive = activeCard === `${section.title}-${item.name}-${index}`;
                return (
                  <motion.button
                    variants={cardVariants}
                    whileHover={{ y: -4, scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring" as const, stiffness: 350, damping: 22 }}
                    className={`menu-item ${isCardActive ? "has-active-layer" : ""}`}
                    key={`${section.title}-${item.name}-${index}`}
                    onClick={() => setActiveCard(isCardActive ? null : `${section.title}-${item.name}-${index}`)}
                  >
                    <div className="item-image-wrap">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => {
                          // Fallback if image fails to load
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80";
                        }}
                      />
                      {index === 0 && (
                        <div className="item-badge">
                          {arabic ? "الأكثر طلباً" : "POPULAR"}
                        </div>
                      )}
                      <div className="view-item">
                        <Sparkles size={13} />
                      </div>
                    </div>

                    <div className="item-info">
                      <div className="item-topline">
                        <h3>{item.name}</h3>
                      </div>
                      {item.note && <p>{item.note}</p>}
                      <div className="item-bottom">
                        <strong>{item.price}</strong>
                        <div className="details-label">
                          <span>{arabic ? "التفاصيل" : "Details"}</span>
                          <ChevronLeft size={12} />
                        </div>
                      </div>
                    </div>

                    {/* Inline Card Half-Layer Overlay (Appears ONLY on click) */}
                    <AnimatePresence>
                      {isCardActive && (
                        <motion.div
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          exit={{ y: "100%", opacity: 0 }}
                          transition={{ type: "spring" as const, stiffness: 350, damping: 26 }}
                          className="card-inline-half-layer"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <div className="half-layer-header">
                            <div className="half-layer-badge">
                              <Sparkles size={11} />
                              <span>{arabic ? "تفاصيل الصنف" : "ITEM DETAILS"}</span>
                            </div>
                            <button
                              className="half-layer-close"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveCard(null);
                              }}
                              aria-label="Close layer"
                            >
                              <X size={14} />
                            </button>
                          </div>

                          <div className="half-layer-body">
                            <h4>{item.name}</h4>
                            <p>{item.note || (arabic ? "مشروب ممتاز ومحضر خصيصاً في سما كافيه بأعلى جودة." : "Premium specialty item crafted at Sama Cafe.")}</p>
                          </div>

                          <div className="half-layer-footer">
                            <span className="half-layer-price">{item.price}</span>
                            <button
                              className="half-layer-done-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveCard(null);
                              }}
                            >
                              {arabic ? "تم" : "Done"}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.section>
        ))}

        {filteredSections.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="empty-state"
          >
            <div className="empty-icon">🔍</div>
            <h2>{arabic ? "لم نجد نتائج مطابقة" : "No Results Found"}</h2>
            <p>
              {arabic
                ? "تأكد من كتابة اسم المشروب بشكل صحيح أو تصفح الأقسام أعلاه."
                : "Check your search term or browse the categories above."}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearch("")}
            >
              {arabic ? "إعادة عرض الكل" : "Reset Search"}
            </motion.button>
          </motion.div>
        )}
      </main>

      {/* Menu Page Footer */}
      <footer className="menu-footer">
        <div className="menu-footer-inner">
          <div className="footer-brand-col">
            <div className="footer-logo-wrap">
              <span className="footer-logo-circle">
                <img src={logo} alt="Sama Cafe logo" className="footer-logo-img" />
              </span>
              <div>
                <h3 className="footer-brand-name">{brand.name}</h3>
                <p className="footer-brand-tagline">{brand.tagline}</p>
              </div>
            </div>
          </div>

          <div className="footer-links-col">
            <a href="/" className="footer-link">
              {arabic ? "الرئيسية" : "Home"}
            </a>
            <a href="https://samacafe.sa/" target="_blank" rel="noreferrer" className="footer-link">
              {arabic ? "الموقع الرسمي" : "Official Website"}
            </a>
            <a href="/#branches" className="footer-link">
              {arabic ? "الفروع" : "Branches"}
            </a>
            <a
              href="https://loyapro.com/c-r/Mjg1MQ==?fbclid=PAVERFWAQNsPJleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadN_aAgebmqEHwEqXJZ5nQEIgQRuTUFujp_qK2KX0-RjZFRqEl5QOlh8XPfSg_aem_NsXK07nCR2MAUUO6dECebQ"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              {arabic ? "برنامج الولاء" : "Loyalty Program"}
            </a>
            <a href="https://www.instagram.com/samacafe.sa/" target="_blank" rel="noreferrer" className="footer-link">
              Instagram
            </a>
          </div>
        </div>

        <div className="menu-footer-bottom">
          <p>© {new Date().getFullYear()} {brand.name}. {arabic ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}