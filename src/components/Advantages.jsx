import { UserRound, Lightbulb, ClipboardCheck, Wifi } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: UserRound,
    title: 'Individual yondashuv',
    text: 'Dars sur’ati, mavzular va mashqlar aynan sizning darajangizga moslanadi.',
  },
  {
    icon: Lightbulb,
    title: 'Tushunarli darslar',
    text: 'Grammatika va so‘zlar murakkab qoidalarsiz, sodda misollar bilan tushuntiriladi.',
  },
  {
    icon: ClipboardCheck,
    title: 'TOPIK formatidagi mashqlar',
    text: '듣기, 읽기, 쓰기 bo‘limlari imtihon shaklida mashq qilinadi.',
  },
  {
    icon: Wifi,
    title: 'Qulay online ta’lim',
    text: 'Uyda, maktabdan keyin yoki ishdan so‘ng — darsni o‘zingizga qulay vaqtda olasiz.',
  },
]

export default function Advantages() {
  return (
    <section id="afzalliklar" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-kr text-sm tracking-[0.2em] text-plum">왜 우리인가요?</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Nima uchun aynan biz?
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-[1.6rem] border border-lilac/20 bg-white p-6 soft-shadow"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blush to-lavender text-plum">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
