import { Send } from 'lucide-react'
import { site } from '../data/site'

export default function Contact() {
  const { contact } = site

  return (
    <section id="aloqa" className="px-5 pb-28 sm:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-plum via-plum-deep to-[#3d2756] p-8 text-white sm:p-12">
        <p className="font-kr text-sm tracking-[0.2em] text-petal">연락하기</p>
        <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Bog‘lanish</h2>
        <p className="mt-3 max-w-xl text-white/80">
          Savolingiz bormi? Telegram orqali yozing.
        </p>

        <div className="mt-8 max-w-md">
          <a
            href={contact.telegram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 backdrop-blur transition hover:bg-white/16"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-plum">
              <Send size={18} />
            </span>
            <span>
              <span className="block text-sm text-white/70">Telegram</span>
              <span className="font-medium">{contact.telegramLabel}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
