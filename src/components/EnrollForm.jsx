import { useEffect, useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { sendEnrollment } from '../lib/telegram'

const initial = {
  fullName: '',
  phone: '',
  telegram: '',
  age: '',
  course: '',
  level: '',
  format: '',
  note: '',
}

export default function EnrollForm({ selectedCourse }) {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (selectedCourse) {
      setForm((prev) => ({ ...prev, course: selectedCourse }))
    }
  }, [selectedCourse])

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setStatus('loading')
    try {
      const result = await sendEnrollment(form)
      setStatus(result.simulated ? 'simulated' : 'success')
      setForm(initial)
    } catch {
      setStatus('idle')
      setError('Arizani yuborishda xatolik yuz berdi. Iltimos, birozdan so‘ng qayta urinib ko‘ring.')
    }
  }

  if (status === 'success' || status === 'simulated') {
    return (
      <section id="yozilish" className="px-5 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-xl rounded-[2rem] border border-lilac/30 bg-white p-8 text-center soft-shadow"
        >
          <CheckCircle2 className="mx-auto text-plum" size={42} />
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink">Ariza qabul qilindi</h2>
          <p className="mt-3 text-ink-soft">
            {status === 'simulated'
              ? 'Hozircha Telegram token ulanmagan, shuning uchun ariza sinov rejimida qabul qilindi. Haqiqiy yuborish uchun .env fayliga bot ma’lumotlarini qo‘ying.'
              : 'Rahmat! Arizangiz Telegram orqali repetitorga yuborildi. Tez orada siz bilan bog‘lanamiz.'}
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-6 rounded-full bg-plum px-6 py-3 text-sm font-semibold text-white"
          >
            Yana ariza yuborish
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="yozilish" className="px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-[2rem] border border-lilac/25 bg-white/90 p-6 soft-shadow sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-kr text-sm tracking-[0.2em] text-plum">신청하기</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Kursga yozilish
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Formani to‘ldiring — ariza repetitorning Telegramiga yuboriladi. Barcha maydonlarni
            aniq yozing, shunda dars vaqti va dastur tezroq moslanadi.
          </p>
          <div className="mt-8 hidden rounded-[1.4rem] bg-gradient-to-br from-blush via-lavender to-white p-6 lg:block">
            <p className="font-display text-2xl text-ink">Birinchi qadam — tanishuv.</p>
            <p className="mt-2 text-sm text-ink-soft">
              Sizning darajangiz, maqsadingiz va qulay vaqtingiz asosida dars rejasini birga
              tuzamiz.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="text-sm font-medium text-ink">
            Ism va familiya
            <input
              required
              className="input-field mt-1.5"
              placeholder="Masalan: Dilnoza Karimova"
              value={form.fullName}
              onChange={update('fullName')}
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-ink">
              Telefon raqami
              <input
                required
                type="tel"
                className="input-field mt-1.5"
                placeholder="+998 XX XXX XX XX"
                value={form.phone}
                onChange={update('phone')}
              />
            </label>
            <label className="text-sm font-medium text-ink">
              Telegram username
              <input
                required
                className="input-field mt-1.5"
                placeholder="@username"
                value={form.telegram}
                onChange={update('telegram')}
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-ink">
              Yosh
              <input
                required
                type="number"
                min="7"
                max="80"
                className="input-field mt-1.5"
                placeholder="Masalan: 16"
                value={form.age}
                onChange={update('age')}
              />
            </label>
            <label className="text-sm font-medium text-ink">
              Qaysi kursga yozilmoqchisiz?
              <select
                required
                className="input-field mt-1.5"
                value={form.course}
                onChange={update('course')}
              >
                <option value="">Tanlang</option>
                <option value="TOPIK I">TOPIK I (1–2급)</option>
                <option value="TOPIK II">TOPIK II (3–6급)</option>
              </select>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-ink">
              Hozirgi koreys tili darajasi
              <select
                required
                className="input-field mt-1.5"
                value={form.level}
                onChange={update('level')}
              >
                <option value="">Tanlang</option>
                <option value="Noldan">Noldan / umuman o‘qimaganman</option>
                <option value="Boshlangich">Boshlang‘ich (한글)</option>
                <option value="TOPIK I darajasida">TOPIK I darajasida</option>
                <option value="TOPIK II darajasida">TOPIK II darajasida</option>
              </select>
            </label>
            <label className="text-sm font-medium text-ink">
              Dars shakli
              <select
                required
                className="input-field mt-1.5"
                value={form.format}
                onChange={update('format')}
              >
                <option value="">Tanlang</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </label>
          </div>
          <label className="text-sm font-medium text-ink">
            Qo‘shimcha izoh
            <textarea
              rows={4}
              className="input-field mt-1.5 resize-none"
              placeholder="Maqsadingiz, qulay vaqtingiz yoki savolingiz..."
              value={form.note}
              onChange={update('note')}
            />
          </label>

          {error && <p className="text-sm text-rose-700">{error}</p>}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-plum py-3.5 text-sm font-semibold text-white transition hover:bg-plum-deep disabled:opacity-70"
          >
            {status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            Arizani yuborish
          </button>
        </form>
      </div>
    </section>
  )
}
