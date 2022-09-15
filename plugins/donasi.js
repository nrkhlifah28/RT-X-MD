let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [089618728196]
│ • Dana [089618728196]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [087892870587]
│ • Pulsa [087892870587]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
