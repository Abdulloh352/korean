export function Petal({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path
        d="M40 8c6 12 8 20 8 28s-2 16-8 28c-6-12-8-20-8-28s2-16 8-28Z"
        fill="currentColor"
      />
      <path
        d="M12 40c12-6 20-8 28-8s16 2 28 8c-12 6-20 8-28 8s-16-2-28-8Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  )
}

export function HangulWatermark({ text = '한국어', className = '' }) {
  return (
    <p
      className={`font-kr pointer-events-none select-none font-semibold tracking-widest text-plum/10 ${className}`}
    >
      {text}
    </p>
  )
}
