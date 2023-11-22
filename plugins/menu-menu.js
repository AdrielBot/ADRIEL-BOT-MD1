import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen2
//let vn = './Plugins/Audios/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = 
*╭━━❍𝐀𝐃𝐑𝐈𝐄𝐋-𝐁𝐎𝐓❍━━╮*
*┃ ╭━━━━━━━━━━━━━━━━╮*
*┃ ┃ ╭┈────────────╮*
*┃ ┃ │❍  𝐌𝐄𝐍𝐔 ❍*
*┃ ┃ ╰┈────────────╯*
*┃ ╰━━━━━━━━━━━━━━━━╯*
*┣━━━▢ ❤𝐇𝐎𝐋𝐀, ${username}❤*•
*┃╭━━━━━━━━━━━━━━━━╾•*
*┃┃  ❍ ${ucapan()} ❍*
*┃┣━━━━━━━━━━━━━━━━╾•*
*┃┃ ▢ 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 » ${vs}*
*┃┃ ▢ 𝙁𝙀𝘾𝙃𝘼 » ${week}, ${date}*
*┃┃ ▢ 𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏𝙄𝙑𝙊 » ${uptime}*
*┃┃ ▢ 𝙇𝙀𝙉𝙂𝙐𝘼𝙅𝙀 » 𝐄𝐒𝐏𝐀𝐍̃𝐎𝐋*
*┃┃ ▢ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 » ${Object.keys(global.db.data.users).length}*
*┃╰━━━━━━━━━━━━━━━━╾•*
*╰━━━╼𝐀𝐝𝐫𝐢𝐞𝐥𝐁𝐨𝐭𝖙╾━━━╯*`.trim()

let menuB = `
*═〔 INFO DEL USUARIO 〕⬣═*
*║👤 𝙉𝙊𝙈𝘽𝙍𝙀: ${username}*
*║🧰 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼 ➟ ${exp}*
*║⚓ 𝙍𝘼𝙉𝙂𝙊 ➟* ${role}*
*║💎 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 ➟ ${limit}*
*║👾 𝘼𝘿𝙍𝙄-𝘾𝙊𝙄𝙉𝙎 ➟ ${adricoins}*
*╰══*════════════

┌──「📦𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍」─
├📂 _${usedPrefix}grupos_
└────ׂ─ׂ─ׂ─ׂ───

╭───「📦𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍」─
│➯ *.minar gana xp*
│➯ *.minar2 gana Diamantes*
│➯ *.minar3 gana Hades-Coins*
│➯ *.claim reclama tu recompensa diaria exp*
│➯ *.darxp recompensa diaria exp*
│➯ *.coffer un cofre de recompensas diarias*
│➯ *para ver tus diamantes usa el comando*
│➯ *.bal*
│➯ *puedes comprar diamantes usando los comandos* 
│➯ *.bus <cantidad>* 
│➯ *.busyall te cobra Hades-Coins*
│➯ *.bur <cantidad>*
│➯ *.buryall te cobra Tokens*
│➯ *.buy <cantidad>*
│➯ *.buyall te cobra experiencia*
│➯ *puedes dar diamantes o experiencia a otra persona con los comandos* 
│➯ *.transfer limit mas <cantidad>*
│➯ *.transfer exp mas <cantidad>*
│➯ *tambien puedes robar experiencia o diamantes a otra persona con los comandos*
│➯ *.robar roba experiencia*
│➯ *.robardiamantes roba diamantes*
╰───────────────╯

╰───────────────╯`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu)$/i
handler.exp = 50
handler.fail = null
handler.register = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
