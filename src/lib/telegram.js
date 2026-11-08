const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

export function formatEnrollmentMessage(data) {
  return [
    '🆕 Yangi kurs arizasi — Korean Class',
    '',
    `👤 Ism: ${data.fullName}`,
    `📞 Telefon: ${data.phone}`,
    `✈️ Telegram: ${data.telegram}`,
    `🎂 Yosh: ${data.age}`,
    `📚 Kurs: ${data.course}`,
    `🇰🇷 Hozirgi daraja: ${data.level}`,
    `💻 Dars shakli: ${data.format}`,
    `📝 Izoh: ${data.note || '—'}`,
  ].join('\n')
}

export async function sendEnrollment(data) {
  const text = formatEnrollmentMessage(data)

  if (!BOT_TOKEN || !CHAT_ID) {
    await new Promise((resolve) => setTimeout(resolve, 700))
    console.info('[Korean Class] Telegram token yo‘q. Ariza lokalda qabul qilindi:\n', text)
    return { ok: true, simulated: true }
  }

  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
    }),
  })

  if (!response.ok) {
    throw new Error('Telegramga yuborish muvaffaqiyatsiz tugadi')
  }

  return { ok: true, simulated: false }
}
