import { Send } from 'lucide-react'
import { navLinks, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-lilac/20 bg-white px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_0.8fr]">
        <div>
          <a href="#bosh" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-rose to-lilac text-sm font-semibold text-white">
              한
            </span>
            <span className="font-display text-xl font-semibold">{site.brand}</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            TOPIK I imtihoniga individual yondashuvdagi koreys tili darslari.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Navigatsiya</p>
          <div className="mt-3 grid gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-ink-soft hover:text-plum">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Ijtimoiy tarmoqlar</p>
          <div className="mt-3 flex gap-3">
            <a
              href={site.contact.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="grid h-10 w-10 place-items-center rounded-full bg-lavender text-plum"
            >
              <Send size={16} />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} {site.brand}. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  )
}
