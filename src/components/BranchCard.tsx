import { motion } from 'framer-motion'
import { ArrowUpLeft, Coffee, MapPin, Navigation } from 'lucide-react'
import type { Branch } from '../content'

type BranchCardProps = {
  branch: Branch
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 24,
    },
  },
}

export default function BranchCard({ branch }: BranchCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring' as const, stiffness: 350, damping: 22 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#e6dec8] bg-white shadow-[0_6px_24px_rgba(43,33,28,0.04)] transition-all duration-300 hover:border-[#2c8c87] hover:shadow-[0_16px_40px_rgba(44,140,135,0.12)]"
    >
      {/* Top Banner Header - Clean Soft Cream with Top Tiffany Accent Line */}
      <div className="relative h-16 w-full overflow-hidden bg-[#fbf7f1] border-b border-[#eee6d8] px-5 py-3 flex items-center justify-between">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2b211c] via-[#2c8c87] to-[#83cfca]" />

        <div className="flex items-center gap-2 text-[#2b211c]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eaf7f6] border border-[#83cfca]/40 text-[#2c8c87]">
            <Coffee size={14} />
          </span>
          <span className="text-xs font-extrabold tracking-wider uppercase text-[#2b211c]">سما كافيه</span>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#83cfca]/30 bg-[#eaf7f6] px-3 py-1 text-[11px] font-extrabold text-[#2c8c87]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2c8c87] animate-pulse" />
          {branch.area}
        </span>

        {/* Subtle Sheen */}
        <motion.div
          variants={{
            initial: { x: '-100%', opacity: 0 },
            hover: { x: '220%', opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="pointer-events-none absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
        />
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-black text-[#2b211c] leading-snug transition-colors group-hover:text-[#2c8c87]">
              {branch.name}
            </h3>
            <motion.div
              variants={{
                initial: { rotate: 0, scale: 1 },
                hover: { rotate: 10, scale: 1.1 },
              }}
              transition={{ type: 'spring' as const, stiffness: 400, damping: 15 }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f8efe2] border border-[#e6dec8] text-[#2b211c] transition-colors group-hover:bg-[#2c8c87] group-hover:text-white group-hover:border-[#2c8c87]"
            >
              <MapPin size={17} />
            </motion.div>
          </div>

          <div className="mt-3.5 rounded-xl border border-[#eee6d8] bg-[#fbf7f1]/70 p-3">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#2c8c87]">العنوان والموقع</p>
            <p className="mt-1 text-xs font-medium text-[#655a4e] leading-relaxed">
              تفضل بزيارة هذا الفرع واستمتع بأجود أنواع القهوة المختصة بأجواء راقية ومميزة.
            </p>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          href={branch.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#357d79] px-4 py-3 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-[#276360] hover:shadow-[0_8px_24px_rgba(53,125,121,0.28)]"
        >
          <Navigation size={14} className="text-white" />
          <span>عرض الموقع على Google Maps</span>
          <motion.div
            variants={{
              initial: { x: 0, y: 0 },
              hover: { x: -2, y: -2 },
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpLeft size={15} />
          </motion.div>
        </motion.a>
      </div>
    </motion.article>
  )
}
