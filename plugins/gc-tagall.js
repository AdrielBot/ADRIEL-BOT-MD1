let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*@adriel_bot* ${pesan}`
let teks = `*𝙍𝙀𝙑𝙄𝙑𝘼𝙉 𝘽𝙊𝙏𝙎 𝙇𝙊𝙎 𝙄𝙉𝙑𝙊𝘾𝙊*\n\n ${oi}\n\n🫶🏻🐻‍❄️ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂\n`
for (let mem of participants) {
teks += `🐻‍❄️➤  @${mem.id.split('@')[0]}\n`}
teks += `*🐾│𝐀𝐝𝐫𝐢𝐞𝐥𝐁𝐨𝐭*\n\n*<3*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes|fantasmas|adornos|plantas)$/i
handler.admin = true
handler.group = true
export default handler
