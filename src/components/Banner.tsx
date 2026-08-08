import { motion } from 'framer-motion'
import {
  Link2,
  MapPin,
  MessageCircle,
  Music2,
  Star,
  UserRound,
  type LucideIcon,
} from 'lucide-react'

function Instagram({
  size = 24,
  strokeWidth = 2,
  fill = 'none',
  className = '',
}: {
  size?: number | string
  strokeWidth?: number | string
  fill?: string
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

import type { SocialLink as SocialLinkItem } from '../content'

import defaultBg from '../assests/sama_cafe2.webp'
import defaultLogo from '../assests/logo.jpeg'

type BannerProps = {
  logo?: string
  backgroundImage?: string
  socialLinks?: SocialLinkItem[]
}

const socialIcons: Record<string, LucideIcon | React.ComponentType<any>> = {
  Instagram,
  TikTok: Music2,
  Snapchat: MessageCircle,
  WhatsApp: MessageCircle,
}

export default function Banner({
  logo = defaultLogo,
  backgroundImage = defaultBg,
  socialLinks = [],
}: BannerProps) {
  return (
    <section
      dir="rtl"
      className="relative mx-auto w-full overflow-hidden bg-[#ffffff] shadow-sm"
    >
      {/* =====================================================
          TOP IMAGE / COVER
      ===================================================== */}

      <div className="relative flex items-center justify-center bg-white overflow-hidden h-[180px] sm:h-[240px] md:h-[300px]">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt="Sama Cafe"
            className="h-full w-full object-contain object-bottom"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8d3c9]" />

            <div className="absolute left-[20%] top-[20%] h-20 w-20 rounded-full border-[3px] border-[#1c1c1c]" />

            <div className="absolute right-[18%] top-[30%] h-16 w-16 rounded-full border-[3px] border-[#1c1c1c]" />

            <div className="relative z-10 text-center">
              <SparkleDecoration />
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          BRAND SECTION
      ===================================================== */}

      <div className="relative bg-[#83cfca] px-6 pb-8 pt-14 sm:px-10 sm:pb-10 sm:pt-16">
        {/* =================================================
            LOGO
        ================================================= */}

        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white p-1 shadow-md ring-4 ring-white/90 sm:h-28 sm:w-28 overflow-hidden">
            {logo ? (
              <img
                src={logo}
                alt="Sama Cafe Logo"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <div className="text-center">
                <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center">
                  <CoffeeLogo />
                </div>

                <p className="text-[8px] font-bold tracking-[0.28em] text-[#151515]">
                  SAMA CAFE
                </p>
              </div>
            )}
          </div>
        </div>

        {/* =================================================
            BRAND NAME
        ================================================= */}

        <div className="mx-auto max-w-xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[Arial,sans-serif] text-4xl font-medium tracking-tight text-[#101010] sm:text-5xl"
          >
            سما كافيه
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mt-1 text-3xl font-medium tracking-tight text-[#101010] sm:text-4xl"
          >
            Sama Cafe
          </motion.h2>
        </div>

        {/* =================================================
            SOCIAL / QUICK ICONS
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-30"
        >
          {/* Rating / Feedback */}
          <BannerIcon
            icon={Star}
            label="Rating"
            href="https://sama-cafe.yallaqrcodes.com/branch/1/feedback"
            external
          />

          {/* Location */}
          <BannerIcon
            icon={MapPin}
            label="Location"
            href="https://maps.app.goo.gl/Z1UGzebkHTM2AQG56"
            external
          />

          {/* TikTok */}
          <BannerIcon
            icon={Music2}
            label="TikTok"
            href="https://www.tiktok.com/@samacafe.sa"
            external
          />

          {/* Snapchat */}
          <BannerIcon
            icon={MessageCircle}
            label="Snapchat"
            href="https://www.snapchat.com/add/samacafe.sa/"
            external
          />

          {/* Instagram */}
          <BannerIcon
            icon={Instagram}
            label="Instagram"
            href="https://www.instagram.com/samacafe.sa/"
            external
          />

          {/* WhatsApp */}
          <BannerIcon
            icon={MessageCircle}
            label="WhatsApp"
            href="https://api.whatsapp.com/send/?phone=9660557941885&text&type=phone_number&app_absent=0"
            external
          />

          {/* Website */}
          <BannerIcon
            icon={Link2}
            label="Website"
            href="https://samacafe.sa/"
            external
          />
        </motion.div>

        {/* =================================================
            OPTIONAL SOCIAL LINKS FROM CONTENT
        ================================================= */}

        {socialLinks.length > 0 && (
          <div className="mt-5 flex justify-center gap-3 relative z-30">
            {socialLinks.map((social) => {
              const Icon =
                socialIcons[social.label] || social.icon || UserRound

              return (
                <a
                  key={social.label}
                  href={social.href || "https://sama-cafe.yallaqrcodes.com/branch/1/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-[#ffffff] shadow-sm transition hover:bg-white/40 hover:scale-105 cursor-pointer pointer-events-auto"
                >
                  <Icon size={20} strokeWidth={1.8} />
                </a>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

/* =========================================================
   BANNER ICON
========================================================= */

type BannerIconProps = {
  icon: LucideIcon | React.ComponentType<any>
  label: string
  href: string
  external?: boolean
}

function BannerIcon({
  icon: Icon,
  label,
  href,
  external = true,
}: BannerIconProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      title={label}
      whileHover={{
        y: -3,
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="relative z-30 flex h-10 w-10 items-center justify-center rounded-full text-white bg-black/10 hover:bg-black/25 shadow-sm transition cursor-pointer pointer-events-auto"
    >
      <Icon
        size={24}
        strokeWidth={2}
        fill={
          label === 'Rating'
            ? 'currentColor'
            : 'none'
        }
      />
    </motion.a>
  )
}

/* =========================================================
   SIMPLE DECORATION
========================================================= */

function SparkleDecoration() {
  return (
    <div className="relative h-40 w-56">
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#1c1c1c]" />

      <div className="absolute left-[30%] top-[30%] h-12 w-12 rounded-full border-[3px] border-[#1c1c1c]" />

      <div className="absolute right-[25%] top-[20%] h-8 w-8 rounded-full bg-[#82cfca]" />

      <div className="absolute bottom-[18%] left-[20%] h-4 w-4 rounded-full bg-[#f4df20]" />
    </div>
  )
}

/* =========================================================
   SIMPLE SAMA CAFE LOGO FALLBACK
========================================================= */

function CoffeeLogo() {
  return (
    <div className="relative h-10 w-10">
      <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#111]" />

      <div className="absolute left-[3px] top-[18px] h-[2px] w-9 rotate-[-25deg] bg-[#111]" />

      <div className="absolute left-[12px] top-[6px] h-3 w-3 rounded-full bg-[#f3dc21]" />
    </div>
  )
}