import { BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import { HangulWatermark, Petal } from './ui/Decor'
import TutorPortrait from './ui/TutorPortrait'

export default function Hero() {
  return (
    <section id="bosh" className="relative overflow-hidden pt-28 sm:pt-32">
      <Petal className="absolute top-24 left-6 h-16 w-16 text-rose/40 sm:left-16" />
      <Petal className="absolute right-10 top-40 h-10 w-10 rotate-45 text-lilac/50" />
      <HangulWatermark className="absolute -right-6 top-28 text-[88px] leading-none sm:text-[140px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24">
        <div>
          <motion.p
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-lilac/30 bg-white/70 px-3 py-1.5 text-xs font-medium tracking-wide text-plum"
          >
            <span className="font-kr">TOPIK I · TOPIK II</span>
            <span className="h-1 w-1 rounded-full bg-rose" />
            Individual repetitorlik
          </motion.p>

          <motion.h1
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-[2.15rem] leading-[1.15] font-semibold text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Koreys tilini o‘rganing va TOPIK sertifikati sari ilk qadamingizni qo‘ying!
          </motion.h1>

          <motion.p
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            TOPIK I va TOPIK II imtihonlariga individual yondashuv va samarali darslar orqali
            tayyorlaning.
          </motion.p>

          <motion.div
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#kurslar"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-lilac/40 bg-white px-6 py-3.5 text-sm font-semibold text-plum transition hover:bg-lavender"
            >
              <BookOpen size={18} />
              Kurslarni ko‘rish
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.98, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blush via-lavender to-white blur-2xl" />
          <figure className="relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/80 p-3 soft-shadow">
            <div className="overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-lavender to-blush">
              {site.tutor.photo ? (
                <img
                  src={site.tutor.photo}
                  alt={`${site.tutor.name} — Korean Class repetitori`}
                  className="h-[420px] w-full object-cover object-top sm:h-[460px]"
                />
              ) : (
                <TutorPortrait className="h-[420px] w-full sm:h-[460px]" />
              )}
            </div>
            <figcaption className="flex items-center justify-between px-3 py-4">
              <div>
                <p className="font-display text-xl font-semibold text-ink">{site.tutor.name}</p>
                <p className="text-sm text-ink-soft">
                  {site.tutor.age} yosh · Koreys tili repetitori
                </p>
              </div>
              <span className="font-kr rounded-full bg-lavender px-3 py-1 text-sm text-plum">
                선생님
              </span>
            </figcaption>
          </figure>
          {site.tutor.photoNote && (
            <p className="relative mt-3 text-center text-xs text-ink-soft/80">
              {site.tutor.photoNote}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
