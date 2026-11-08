import { useId } from 'react'

export default function TutorPortrait({ className = '' }) {
  const uid = useId().replace(/:/g, '')
  const sky = `${uid}-sky`
  const hair = `${uid}-hair`
  const skin = `${uid}-skin`
  const shirt = `${uid}-shirt`

  return (
    <svg
      viewBox="0 0 640 800"
      className={className}
      role="img"
      aria-label="Repetitor portreti uchun illustratsiya"
    >
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EFE7FB" />
          <stop offset="100%" stopColor="#F7DCE8" />
        </linearGradient>
        <linearGradient id={hair} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A353C" />
          <stop offset="100%" stopColor="#23181C" />
        </linearGradient>
        <linearGradient id={skin} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8DCCE" />
          <stop offset="100%" stopColor="#E7B7A4" />
        </linearGradient>
        <linearGradient id={shirt} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6E7F2" />
          <stop offset="100%" stopColor="#E8C4DC" />
        </linearGradient>
      </defs>
      <rect width="640" height="800" fill={`url(#${sky})`} />
      <circle cx="520" cy="90" r="78" fill="#fff" opacity="0.35" />
      <circle cx="86" cy="150" r="40" fill="#E8A8C0" opacity="0.4" />
      <text x="40" y="80" fill="#B89AD4" opacity="0.55" fontFamily="Noto Sans KR, sans-serif" fontSize="40">
        한글
      </text>

      <ellipse cx="320" cy="742" rx="180" ry="26" fill="#6B4A8A" opacity="0.1" />
      <path d="M150 800c24-168 78-238 170-238s146 70 170 238" fill={`url(#${shirt})`} />
      <path d="M248 562c22 22 48 34 72 34s50-12 72-34c-10 52-42 96-72 96s-62-44-72-96z" fill="#D9A8C8" />
      <path d="M292 428c8 50 16 74 28 74s20-24 28-74" fill={`url(#${skin})`} />
      <path
        d="M186 338c10-150 74-224 134-224s124 74 134 224c10 96-16 186-40 220-32-84-54-154-94-154s-62 70-94 154c-24-34-50-124-40-220z"
        fill={`url(#${hair})`}
      />
      <ellipse cx="320" cy="338" rx="96" ry="114" fill={`url(#${skin})`} />
      <path
        d="M226 298c22-96 62-128 96-134 36-6 74 22 96 94 6 22-12 28-24 10-20-22-34-36-52-30-22 6-30 36-50 42-18 6-44-12-66 18z"
        fill={`url(#${hair})`}
      />
      <circle cx="246" cy="284" r="9" fill="#E8A8C0" />
      <circle cx="246" cy="284" r="4" fill="#fff" />
      <path d="M268 318c14-9 32-9 40 1" stroke="#2A2235" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M332 318c14-9 32-9 40 1" stroke="#2A2235" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <ellipse cx="286" cy="344" rx="11" ry="13" fill="#2A2235" />
      <ellipse cx="354" cy="344" rx="11" ry="13" fill="#2A2235" />
      <circle cx="289" cy="340" r="3.2" fill="#fff" />
      <circle cx="357" cy="340" r="3.2" fill="#fff" />
      <ellipse cx="266" cy="372" rx="18" ry="9" fill="#F0A8B8" opacity="0.5" />
      <ellipse cx="374" cy="372" rx="18" ry="9" fill="#F0A8B8" opacity="0.5" />
      <path d="M298 394c10 14 34 14 44 0" stroke="#C47A86" strokeWidth="3.2" fill="none" strokeLinecap="round" />

      <g transform="translate(402 478)">
        <rect width="156" height="116" rx="12" fill="#6B4A8A" />
        <rect x="10" y="12" width="136" height="92" rx="7" fill="#FFF9FC" />
        <text
          x="78"
          y="64"
          textAnchor="middle"
          fill="#6B4A8A"
          fontFamily="Noto Sans KR, sans-serif"
          fontSize="22"
          fontWeight="600"
        >
          TOPIK
        </text>
      </g>
    </svg>
  )
}
