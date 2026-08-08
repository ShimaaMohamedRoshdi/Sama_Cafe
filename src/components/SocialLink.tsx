import { motion } from 'framer-motion'
import { ArrowUpLeft } from 'lucide-react'
import type { SocialLink as SocialLinkItem } from '../content'

type SocialLinkProps = {
  link: SocialLinkItem
}

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function SocialLink({ link }: SocialLinkProps) {
  const Icon = link.icon

  return (
    <motion.a
      variants={linkVariants}
      whileHover="hover"
      initial="initial"
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring' as const, stiffness: 350, damping: 22 }}
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-[#83cfca]/30 bg-[linear-gradient(135deg,#fffdf9_0%,#f7f0e4_100%)] p-4 text-sm font-semibold text-[#1f1914] shadow-[0_4px_16px_rgba(45,32,23,0.04)] transition-all duration-300 hover:border-[#2c8c87] hover:bg-white hover:shadow-[0_12px_32px_rgba(53,125,121,0.18)]"
    >
      {/* Animated Sheen Background Layer */}
      <motion.div
        variants={{
          initial: { x: '-100%', opacity: 0 },
          hover: { x: '220%', opacity: 1 },
        }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="pointer-events-none absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#83cfca]/30 to-transparent skew-x-[-20deg]"
      />

      <div className="flex items-center gap-3">
        <motion.span
          variants={{
            initial: { rotate: 0, scale: 1 },
            hover: { rotate: 12, scale: 1.15 },
          }}
          transition={{ type: 'spring' as const, stiffness: 400, damping: 15 }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7f6] border border-[#83cfca]/40 text-[#2c8c87] shadow-xs transition-colors group-hover:bg-[#2c8c87] group-hover:text-white"
        >
          <Icon size={18} />
        </motion.span>
        <span className="text-base font-bold text-[#2d2017] transition-colors group-hover:text-[#2c8c87]">
          {link.label}
        </span>
      </div>

      <motion.div
        variants={{
          initial: { x: 0, y: 0 },
          hover: { x: -3, y: -3 },
        }}
        transition={{ duration: 0.2 }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf7f6] text-[#2c8c87] transition group-hover:bg-[#2c8c87] group-hover:text-white"
      >
        <ArrowUpLeft size={16} />
      </motion.div>
    </motion.a>
  )
}
