import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpLeft, BadgeCheck, Coffee, MapPin, Sparkles, Trophy } from 'lucide-react'
import BranchCard from './components/BranchCard'
import SamaMenu from './pages/SamaMenu'
import SocialLink from './components/SocialLink'
import { brand, branches, footerLinks, loyaltyNote, placeholderNote, quickActions, socialLinks } from './content'
import logo from './assests/logo.jpeg'
import bannerBg from './assests/sama_cafe2.webp'
import Banner from './components/Banner'
const pageVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const riseIn = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export default function App() {
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/menu')) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fffdf9_0%,#f7f0e4_45%,#efe5d4_100%)] text-stone-900">
        <Banner logo={logo} backgroundImage={bannerBg} />
        <SamaMenu />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,#fffdf9_0%,#f7f0e4_45%,#efe5d4_100%)] text-[#1f1914] selection:bg-[#2c8c87] selection:text-white">
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <section className="relative overflow-hidden rounded-[36px] border border-[#83cfca]/30 bg-[#fffdf9]/95 p-6 shadow-[0_24px_70px_rgba(45,32,23,0.08)] backdrop-blur-md sm:p-8 lg:p-10">
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.04, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(131,207,202,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(45,32,23,0.08),transparent_32%)]"
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#83cfca]/20 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[#2d2017]/8 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div
              variants={riseIn}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.45 }}
              className="flex flex-col gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex w-fit items-center gap-3 rounded-full border border-[#83cfca]/40 bg-[#eaf7f6]/90 px-4 py-2 text-sm font-extrabold text-[#2c8c87] shadow-xs backdrop-blur-sm"
              >
                <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#83cfca]/60 bg-white shadow-xs">
                  <img src={logo} alt="Sama Cafe logo" className="h-full w-full object-cover" />
                </span>
                <span className="tracking-wide">{brand.name}</span>
                <Sparkles size={14} className="text-[#83cfca] animate-pulse" />
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-4xl font-black leading-[1.08] tracking-[-0.02em] text-[#1f1914] sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-[#2d2017] via-[#2c8c87] to-[#1c1c1c] bg-clip-text text-transparent">
                    {brand.heroTitle}
                  </span>
                </h1>
                <p className="max-w-xl text-lg leading-8 font-medium text-[#6e6459] sm:text-xl sm:leading-9">
                  {brand.heroText}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#2d2017] via-[#2c8c87] to-[#1c1c1c] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:shadow-[#2c8c87]/25"
                >
                  <span>استكشف المنيو</span>
                  <ArrowLeft size={17} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
                  href="https://linktr.ee/universal-login#/register?utm_source=linktree&utm_medium=profile&utm_content=samacafe.sa&utm_campaign=cyucta&dropInVariant=not-in&onboardingVariant=new_install"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#83cfca]/50 bg-[#eaf7f6] px-6 py-3.5 text-sm font-bold text-[#2c8c87] shadow-xs transition-all duration-200 hover:border-[#2c8c87] hover:bg-[#83cfca]/20 hover:shadow-md"
                >
                  <span>Join samacafe.sa on Linktree</span>
                  <ArrowUpLeft size={17} className="text-[#2c8c87]" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
                  href="#branches"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[rgba(184,138,76,0.25)] bg-white/90 px-6 py-3.5 text-sm font-bold text-[#2d2017] shadow-xs transition-all duration-200 hover:border-[#2c8c87] hover:text-[#2c8c87] hover:shadow-md"
                >
                  <span>فروعنا</span>
                  <MapPin size={17} className="text-[#2c8c87]" />
                </motion.a>
              </div>

              <div className="rounded-2xl border border-[#83cfca]/20 bg-[#eaf7f6]/40 px-4 py-3 text-sm font-medium leading-7 text-[#6e6459] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xs">
                {placeholderNote}
              </div>

              <div className="grid gap-3.5 sm:grid-cols-3">
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
                  className="relative overflow-hidden rounded-2xl border border-[#83cfca]/30 bg-gradient-to-br from-white to-[#eaf7f6]/60 p-4 shadow-[0_8px_24px_rgba(45,32,23,0.04)]"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2d2017] via-[#2c8c87] to-[#83cfca]" />
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2c8c87]">الفروع</p>
                  <p className="mt-1 text-2xl font-black text-[#2d2017]">{branches.length} فروع</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
                  className="relative overflow-hidden rounded-2xl border border-[#83cfca]/30 bg-gradient-to-br from-white to-[#eaf7f6]/60 p-4 shadow-[0_8px_24px_rgba(45,32,23,0.04)]"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2d2017] via-[#2c8c87] to-[#83cfca]" />
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2c8c87]">المنيو</p>
                  <p className="mt-1 text-xl font-black text-[#2d2017]">QR مباشر</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
                  className="relative overflow-hidden rounded-2xl border border-[#83cfca]/30 bg-gradient-to-br from-white to-[#eaf7f6]/60 p-4 shadow-[0_8px_24px_rgba(45,32,23,0.04)]"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2d2017] via-[#2c8c87] to-[#83cfca]" />
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2c8c87]">الهوية</p>
                  <p className="mt-1 text-xl font-black text-[#2d2017]">قهوة مختصة</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-[32px] border border-[#83cfca]/30 bg-[linear-gradient(145deg,#fffdf9_0%,#f7f0e4_100%)] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_16px_50px_rgba(45,32,23,0.06)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#2c8c87]">Sama Cafe</p>
                  <h2 className="mt-1.5 text-2xl font-bold text-[#2d2017]">قهوة مختصة بأجواء راقية</h2>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-full bg-white p-2.5 shadow-md border border-[#83cfca]/40"
                >
                  <img src={logo} alt="Sama Cafe logo" className="h-12 w-12 rounded-full object-cover" />
                </motion.div>
              </div>

              <div className="mt-8 grid gap-3.5">
                {quickActions.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.title}
                      whileHover="hover"
                      initial="initial"
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring' as const, stiffness: 350, damping: 22 }}
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noreferrer' : undefined}
                      className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-[#83cfca]/30 bg-white/95 px-5 py-4 text-right shadow-[0_4px_16px_rgba(45,32,23,0.04)] transition-all duration-300 hover:border-[#2c8c87] hover:shadow-[0_10px_30px_rgba(53,125,121,0.16)]"
                    >
                      <motion.div
                        variants={{
                          initial: { x: '-100%', opacity: 0 },
                          hover: { x: '220%', opacity: 1 },
                        }}
                        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                        className="pointer-events-none absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#83cfca]/30 to-transparent skew-x-[-20deg]"
                      />
                      <div className="flex items-center gap-3.5 z-10">
                        <motion.span
                          variants={{
                            initial: { rotate: 0, scale: 1 },
                            hover: { rotate: 12, scale: 1.15 },
                          }}
                          transition={{ type: 'spring' as const, stiffness: 400, damping: 15 }}
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7f6] border border-[#83cfca]/40 text-[#2c8c87] shadow-xs transition-colors group-hover:bg-[#2c8c87] group-hover:text-white"
                        >
                          <Icon size={19} />
                        </motion.span>
                        <span className="text-base font-bold text-[#2d2017] transition-colors group-hover:text-[#2c8c87]">{item.title}</span>
                      </div>
                      <motion.div
                        variants={{
                          initial: { x: 0, y: 0 },
                          hover: { x: -3, y: -3 },
                        }}
                        transition={{ duration: 0.2 }}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf7f6] text-[#2c8c87] transition group-hover:bg-[#2c8c87] group-hover:text-white z-10"
                      >
                        <ArrowUpLeft size={16} />
                      </motion.div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="branches" className="rounded-[36px] border border-stone-200/80 bg-white/95 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-amber-800">الفروع</p>
              <h2 className="mt-2 text-3xl font-black text-stone-900 sm:text-4xl">تصفح فروع سما كافيه</h2>
            </div>
            <p className="max-w-xl text-sm font-medium leading-7 text-stone-600">اختر أقرب فرع لك وابدأ رحلتك مع القهوة المختصة.</p>
          </div>

          <motion.div variants={pageVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {branches.map((branch) => (
              <BranchCard key={branch.name} branch={branch} />
            ))}
          </motion.div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] border border-[#83cfca]/30 bg-white/95 p-6 shadow-[0_16px_50px_rgba(45,32,23,0.05)] sm:p-7">
            <div className="flex items-center gap-2.5 text-[#2c8c87]">
              <BadgeCheck size={20} />
              <h2 className="text-2xl font-black text-[#2d2017]">تابعنا على وسائل التواصل</h2>
            </div>
            <motion.div variants={pageVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-5 grid gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} link={link} />
              ))}
            </motion.div>
          </div>

          <motion.div
            id="loyalty"
            whileHover={{ y: -2 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#e6dec8] bg-[#fbf7f1] p-5 text-[#2b211c] shadow-[0_6px_24px_rgba(43,33,28,0.04)] transition-all duration-300 hover:border-[#2c8c87] hover:shadow-[0_16px_40px_rgba(44,140,135,0.12)] sm:p-6"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2b211c] via-[#2c8c87] to-[#83cfca]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-[#2c8c87]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf7f6] border border-[#83cfca]/40 text-[#2c8c87]">
                    <Trophy size={16} />
                  </span>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#2c8c87]">برنامج الولاء</p>
                </div>
                <h2 className="mt-3 text-xl font-black sm:text-2xl text-[#2b211c]">انضم إلى برنامج الولاء</h2>
                <p className="mt-2 max-w-md text-xs font-medium leading-5 text-[#655a4e] sm:text-sm sm:leading-6">{loyaltyNote}</p>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
                href="https://loyapro.com/c-r/Mjg1MQ==?fbclid=PAVERFWAQNsPJleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadN_aAgebmqEHwEqXJZ5nQEIgQRuTUFujp_qK2KX0-RjZFRqEl5QOlh8XPfSg_aem_NsXK07nCR2MAUUO6dECebQ"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-[#357d79] px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-[#276360] hover:shadow-[0_8px_24px_rgba(53,125,121,0.28)] sm:text-sm"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft size={15} />
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="mt-6 border-t border-stone-200/80 bg-white/90 px-4 py-8 text-sm text-stone-600 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-amber-300 bg-white shadow-sm">
                <img src={logo} alt="Sama Cafe logo" className="h-full w-full object-cover" />
              </span>
              <div>
                <p className="text-base font-extrabold text-stone-900">{brand.name}</p>
                <p className="mt-0.5 text-xs text-stone-500 font-medium">{brand.tagline}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5 font-semibold">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noreferrer' : undefined}
                className="transition-colors hover:text-amber-800"
              >
                {link.label}
              </a>
            ))}
            <a href="https://www.instagram.com/samacafe.sa/" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-800">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
