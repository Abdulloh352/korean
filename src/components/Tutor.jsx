import { Award, BookHeart, Sparkle } from 'lucide-react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import TutorPortrait from './ui/TutorPortrait'

export default function Tutor() {
  const { tutor } = site

  return (
    <section id="repetitor" className="px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2rem] border border-lilac/25 bg-white/80 p-6 soft-shadow sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blush blur-2xl" />
          {tutor.photo ? (
            <img
              src={tutor.photo}
              alt={tutor.name}
              className="relative h-[420px] w-full rounded-[1.6rem] object-cover object-top"
            />
          ) : (
            <TutorPortrait className="relative h-[420px] w-full rounded-[1.6rem]" />
          )}
        </motion.div>

        <div>
          <p className="font-kr text-sm tracking-[0.2em] text-plum">선생님 소개</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Repetitor haqida
          </h2>
          <p className="mt-2 font-display text-2xl text-plum">{tutor.name}</p>
          <p className="text-xs text-ink-soft">{tutor.namePlaceholder}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-blush px-3 py-1 text-sm font-medium text-plum">
              {tutor.age} yosh
            </span>
            <span className="rounded-full bg-lavender px-3 py-1 text-sm font-medium text-plum">
              {tutor.experienceYearsLabel}: {tutor.experienceYears}
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-ink-soft">{tutor.bio}</p>

          <div className="mt-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
              <BookHeart size={16} className="text-plum" />
              O‘qitish metodikasi
            </h3>
            <ul className="mt-3 space-y-2">
              {tutor.methodology.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-soft">
                  <Sparkle size={16} className="mt-0.5 shrink-0 text-rose" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {tutor.certificates.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-dashed border-lilac/50 bg-cream px-4 py-4"
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Award size={16} className="text-plum" />
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
