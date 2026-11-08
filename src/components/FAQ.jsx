import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    q: 'Koreys tilini noldan o‘rgansa bo‘ladimi?',
    a: 'Ha. TOPIK I kursi hangul, oddiy suhbat, asosiy grammatika va 듣기 / 읽기 mashqlaridan boshlanadi. Noldan kelgan o‘quvchilar uchun sur’at alohida moslanadi.',
  },
  {
    q: 'TOPIK I qancha davom etadi?',
    a: 'Davomiylik o‘quvchining boshlang‘ich darajasi va dars soniga bog‘liq. Aniq muddatni shu yerga yozing yoki arizada so‘rang — reja individual tuziladi.',
  },
  {
    q: 'TOPIK II ga tayyorlanish mumkinmi?',
    a: 'Ha. TOPIK II kursida 듣기, 읽기, 쓰기, 어휘 va 문법 bo‘yicha chuqurroq ishlanadi. Hozirgi darajangizni formida belgilang — dastur shunga qarab tuziladi.',
  },
  {
    q: 'Darslar qanday formatda o‘tiladi?',
    a: 'Darslar offline, individual tarzda o‘tiladi.',
  },
  {
    q: 'Dars narxi qancha?',
    a: 'Narx dars davomiyligi, formati va kursga qarab belgilanadi. Kurs kartalaridagi narx joyiga haqiqiy summani yozing yoki ariza yuborganingizdan so‘ng aniq aytib beriladi.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-center font-kr text-sm tracking-[0.2em] text-plum">자주 묻는 질문</p>
        <h2 className="mt-2 text-center font-display text-4xl font-semibold text-ink sm:text-5xl">
          Ko‘p beriladigan savollar
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const active = open === i
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-lilac/25 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-ink">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-plum transition ${active ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
