import { motion } from 'framer-motion'
import { site } from '../data/site'

export default function Courses() {
  return (
    <section id="kurslar" className="relative px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-kr text-sm tracking-[0.2em] text-plum">과정</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">Kurslar</h2>
          <p className="mt-4 text-ink-soft">
            Har bir kurs TOPIK bo‘limlari asosida tuzilgan. Daraja, muddat va narxni o‘zingizga mos
            qilib belgilashingiz mumkin.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {site.courses.map((course, i) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden rounded-[1.8rem] border border-lilac/25 bg-white p-6 soft-shadow sm:p-8"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${course.accent}`}
              />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-kr text-sm text-plum">{course.hangul}</p>
                  <h3 className="font-display text-3xl font-semibold text-ink">
                    {course.title}{' '}
                    <span className="font-kr text-2xl text-lilac">({course.level})</span>
                  </h3>
                </div>
                <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold text-plum">
                  {course.level}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{course.summary}</p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {course.modules.map((mod) => (
                  <li
                    key={mod.kr}
                    className="flex items-center gap-3 rounded-2xl bg-cream px-3 py-2.5"
                  >
                    <span className="font-kr grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lavender text-sm font-semibold text-plum">
                      {mod.kr}
                    </span>
                    <span className="text-sm text-ink">{mod.uz}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 space-y-2 text-sm">
                <div className="flex flex-col gap-1 rounded-2xl border border-lilac/20 px-4 py-3 sm:flex-row sm:justify-between">
                  <dt className="text-ink-soft">O‘qitish shakli</dt>
                  <dd className="font-medium text-ink">{course.format}</dd>
                </div>
                <div className="flex flex-col gap-1 rounded-2xl border border-lilac/20 px-4 py-3 sm:flex-row sm:justify-between">
                  <dt className="text-ink-soft">Davomiyligi</dt>
                  <dd className="font-medium text-ink">{course.duration}</dd>
                </div>
                <div className="flex flex-col gap-1 rounded-2xl bg-lavender/70 px-4 py-3 sm:flex-row sm:justify-between">
                  <dt className="text-plum">Narxi</dt>
                  <dd className="font-semibold text-plum">{course.price}</dd>
                </div>
              </dl>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
