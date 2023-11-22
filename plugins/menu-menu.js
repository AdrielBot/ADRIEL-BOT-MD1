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

╭───「🗺️𝙈𝘼𝙋𝘼𝙎 𝘿𝙀 𝙁𝙁」───
│
│➯💟 .vs8 Lista de 8 vs 8 
│➯💟 .vs12 Lista de 12 vs 12
│➯💟 .vs16 Lista de 16 vs 16
│➯💟 .vs20 Lista de 20 vs 20
│➯💟 .vs24 Lista de 24 vs 24
│➯💟 .fem18 Lista de VS 18🇦🇷
│➯💟 .fem19 Lista de VS 19🇦🇷
│➯💟 .fem20 Lista de VS 20🇦🇷
│➯💟 .fem21 Lista de VS 21🇦🇷
│➯💟 .fem22 Lista de VS 22🇦🇷
│➯💟 .fem23 Lista de VS 23🇦🇷
│➯💟 .fem00 Lista de VS 00🇦🇷
│➯💟 .masc18 Lista de VS 18🇦🇷
│➯💟 .masc19 Lista de VS 19🇦🇷
│➯💟 .masc20 Lista de VS 20🇦🇷
│➯💟 .masc21 Lista de VS 21🇦🇷
│➯💟 .masc22 Lista de VS 22🇦🇷
│➯💟 .masc23 Lista de VS 23🇦🇷
│➯💟 .masc00 Lista de VS 00🇦🇷
╰─────────────────╯

‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╭───「𝙄𝙉𝙁𝙊 𝘿𝙀𝙇 𝘽𝙊𝙏」───
│
│➯💟 .terminosycondiciones
│➯💟 .grupos
│➯💟 .estado
│➯💟 .infobot
│➯💟 .speedtest
│➯💟 .donar
│➯💟 .script
│➯💟 Bot (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰─────────────────╯

╭───「𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙀𝙇 𝘽𝙊𝙏」───
│
│➯ ඬ⃟ 👽 .join <enlace / link / url>
╰─────────────────╯

‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎╭───「𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙊 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍」───
│
│➯🤖 .enable restrict
│➯🤖 .disable restrict
│➯🤖 .enable autoread
│➯🤖 .disable autoread
│➯🤖 .enable antispam
│➯🤖 .disable antispam
│➯🤖 .enable anticall
│➯🤖 .disable anticall
│➯🤖 .enable modoia
│➯🤖 .disable modoia
│➯🤖 .enable audios_bot
│➯🤖 .disable audios_bot
│➯🤖 .enable antiprivado
│➯🤖 .disable antiprivado
│➯🤖 .enable welcome
│➯🤖 .disable welcome 
╰─────────────────╯  

┏━━━━━━━━━━━━━━━━┓
┃ < JUEGOS />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎖️ .mates <noob / easy / medium / hard / extreme /impossible /impossible2>
┣ ඬ⃟ 🎖️ .fake <texto1> <@tag> <texto2>
┣ ඬ⃟ 🎖️ .ppt <papel / tijera /piedra>
┣ ඬ⃟ 🎖️ .prostituto <nombre / @tag>
┣ ඬ⃟ 🎖️ .prostituta <nombre / @tag>
┣ ඬ⃟ 🎖️ .gay2 <nombre / @tag>
┣ ඬ⃟ 🎖️ .lesbiana <nombre / @tag>
┣ ඬ⃟ 🎖️ .pajero <nombre / @tag>
┣ ඬ⃟ 🎖️ .pajera <nombre / @tag>
┣ ඬ⃟ 🎖️ .puto <nombre / @tag>
┣ ඬ⃟ 🎖️ .puta <nombre / @tag>
┣ ඬ⃟ 🎖️ .manco <nombre / @tag>
┣ ඬ⃟ 🎖️ .manca <nombre / @tag>
┣ ඬ⃟ 🎖️ .rata <nombre / @tag>
┣ ඬ⃟ 🎖️ .love <nombre / @tag>
┣ ඬ⃟ 🎖️ .doxear <nombre / @tag>
┣ ඬ⃟ 🎖️ .pregunta <texto>
┣ ඬ⃟ 🎖️ .suitpvp <@tag>
┣ ඬ⃟ 🎖️ .slot <apuesta>
┣ ඬ⃟ 🎖️ .ttt <nombre sala>
┣ ඬ⃟ 🎖️ .delttt
┣ ඬ⃟ 🎖️ .acertijo
┣ ඬ⃟ 🎖️ .simi <texto>
┣ ඬ⃟ 🎖️ .top <texto>
┣ ඬ⃟ 🎖️ .topgays
┣ ඬ⃟ 🎖️ .topotakus
┣ ඬ⃟ 🎖️ .formarpareja
┣ ඬ⃟ 🎖️ .verdad
┣ ඬ⃟ 🎖️ .reto
┣ ඬ⃟ 🎖️ .cancion
┣ ඬ⃟ 🎖️ .pista
┣ ඬ⃟ 🎖️ .akinator
┣ ඬ⃟ 🎖️ .wordfind
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < ACTIVAR O DESACTIVAR GRUPOS />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ .enable welcome
┣ ඬ⃟ ☑️ .disable welcome
┣ ඬ⃟ ☑️ .enable modohorny
┣ ඬ⃟ ☑️ .disable modohorny
┣ ඬ⃟ ☑️ .enable antilink
┣ ඬ⃟ ☑️ .disable antilink
┣ ඬ⃟ ☑️ .enable antilink2
┣ ඬ⃟ ☑️ .disable antilink2
┣ ඬ⃟ ☑️ .enable detect
┣ ඬ⃟ ☑️ .disable detect
┣ ඬ⃟ ☑️ .enable audios
┣ ඬ⃟ ☑️ .disable audios
┣ ඬ⃟ ☑️ .enable autosticker
┣ ඬ⃟ ☑️ .disable autosticker
┣ ඬ⃟ ☑️ .enable antiviewonce
┣ ඬ⃟ ☑️ .disable antiviewonce
┣ ඬ⃟ ☑️ .enable antitoxic
┣ ඬ⃟ ☑️ .disable antitoxic
┣ ඬ⃟ ☑️ .enable antitraba
┣ ඬ⃟ ☑️ .disable antitraba
┣ ඬ⃟ ☑️ .enable antiarabes
┣ ඬ⃟ ☑️ .disable antiarabes
┣ ඬ⃟ ☑️ .enable modoadmin
┣ ඬ⃟ ☑️ .disable modoadmin
┣ ඬ⃟ ☑️ .enable antidelete
┣ ඬ⃟ ☑️ .disable antidelete
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓de
┣ < REPORTAR ERRORES />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 .reporte <texto>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < DESCARGAS />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 .instagram <enlace / link / url>
┣ ඬ⃟ 📥 .mediafire <enlace / link / url>
┣ ඬ⃟ 📥 .gitclone <enlace / link / url>
┣ ඬ⃟ 📥 .gdrive <enlace / link / url>
┣ ඬ⃟ 📥 .tiktok <enlace / link / url>
┣ ඬ⃟ 📥 .tiktokimg <enlace / link / url>
┣ ඬ⃟ 📥 .xnxxdl <enlace / link / url>
┣ ඬ⃟ 📥 .xvideosdl <enlace / link / url>
┣ ඬ⃟ 📥 .twitter <enlace / link / url>
┣ ඬ⃟ 📥 .fb <enlace / link / url>
┣ ඬ⃟ 📥 .ytshort <enlace / link / url>
┣ ඬ⃟ 📥 .ytmp3 <enlace / link / url>
┣ ඬ⃟ 📥 .ytmp4 <enlace / link / url>
┣ ඬ⃟ 📥 .ytmp3doc <enlace / link / url>
┣ ඬ⃟ 📥 .ytmp4doc <enlace / link / url>
┣ ඬ⃟ 📥 .videodoc <enlace / link / url>
┣ ඬ⃟ 📥 .dapk2 <enlace / link / url>
┣ ඬ⃟ 📥 .stickerpack <enlace / link / url>
┣ ඬ⃟ 📥 .play <texto>
┣ ඬ⃟ 📥 .play2 <texto>
┣ ඬ⃟ 📥 .play.1 <texto>
┣ ඬ⃟ 📥 .play.2 <texto>
┣ ඬ⃟ 📥 .playdoc <texto>
┣ ඬ⃟ 📥 .playdoc2 <texto>
┣ ඬ⃟ 📥 .playlist <texto>
┣ ඬ⃟ 📥 .spotify <texto>
┣ ඬ⃟ 📥 .ringtone <texto>
┣ ඬ⃟ 📥 .soundcloud <texto>
┣ ඬ⃟ 📥 .imagen <texto>
┣ ඬ⃟ 📥 .pinterest <texto>
┣ ඬ⃟ 📥 .wallpaper <texto>
┣ ඬ⃟ 📥 .pptiktok <nombre de usuario>
┣ ඬ⃟ 📥 .igstalk <nombre de usuario>
┣ ඬ⃟ 📥 .igstory <nombre de usuario>
┣ ඬ⃟ 📥 .tiktokstalk <username>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < BUSCADORES />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 .githubsearch <texto>
┣ ඬ⃟ 🔍 .pelisplus <texto>
┣ ඬ⃟ 🔍 .modapk <texto>
┣ ඬ⃟ 🔍 .stickersearch <texto>
┣ ඬ⃟ 🔍 .stickersearch2 <texto>
┣ ඬ⃟ 🔍 .xnxxsearch <texto>
┣ ඬ⃟ 🔍 .animeinfo <texto>
┣ ඬ⃟ 🔍 .google <texto>
┣ ඬ⃟ 🔍 .letra <texto>
┣ ඬ⃟ 🔍 .wikipedia <texto>
┣ ඬ⃟ 🔍 .ytsearch <texto>
┣ ඬ⃟ 🔍 .playstore <texto>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < GRUPOS /> 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 .add <numero>
┣ ඬ⃟ 💎 .kick <@tag>
┣ ඬ⃟ 💎 .kick2 <@tag>
┣ ඬ⃟ 💎 .listanum <texto>
┣ ඬ⃟ 💎 .kicknum <texto>
┣ ඬ⃟ 💎 .grupo <abrir / cerrar>
┣ ඬ⃟ 💎 .grouptime <opcion> <tiempo>
┣ ඬ⃟ 💎 .promote <@tag>
┣ ඬ⃟ 💎 .demote <@tag>
┣ ඬ⃟ 💎 admins <texto> (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 .demote <@tag>
┣ ඬ⃟ 💎 .infogroup
┣ ඬ⃟ 💎 .resetlink
┣ ඬ⃟ 💎 .link
┣ ඬ⃟ 💎 .setname <texto>
┣ ඬ⃟ 💎 .setdesc <texto>
┣ ඬ⃟ 💎 .invocar <texto>
┣ ඬ⃟ 💎 .setwelcome <texto>
┣ ඬ⃟ 💎 .setbye <texto>
┣ ඬ⃟ 💎 .hidetag <texto>
┣ ඬ⃟ 💎 .hidetag <audio>
┣ ඬ⃟ 💎 .hidetag <video>
┣ ඬ⃟ 💎 .hidetag <imagen>
┣ ඬ⃟ 💎 .warn <@tag>
┣ ඬ⃟ 💎 .unwarn <@tag>
┣ ඬ⃟ 💎 .listwarn
┣ ඬ⃟ 💎 .fantasmas
┣ ඬ⃟ 💎 .destraba
┣ ඬ⃟ 💎 .setpp <imagen>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < CONVERTIDORES />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 .toanime <imagen>
┣ ඬ⃟ 🧧 .togifaud <video>
┣ ඬ⃟ 🧧 .toimg <sticker>
┣ ඬ⃟ 🧧 .tomp3 <video>
┣ ඬ⃟ 🧧 .tomp3 <nota de voz>
┣ ඬ⃟ 🧧 .toptt <video / audio>
┣ ඬ⃟ 🧧 .tovideo <sticker>
┣ ඬ⃟ 🧧 .tourl <video / imagen / audio>
┣ ඬ⃟ 🧧 .tts <idioma> <texto>
┣ ඬ⃟ 🧧 .tts <efecto> <texto>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <  EFECTOS Y LOGOS />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ .logos <efecto> <texto>
┣ ඬ⃟ 🖍️ .logochristmas <texto>
┣ ඬ⃟ 🖍️ .logocorazon <texto>
┣ ඬ⃟ 🖍️ .ytcomment <texto>
┣ ඬ⃟ 🖍️ .hornycard <@tag>
┣ ඬ⃟ 🖍️ .simpcard <@tag>
┣ ඬ⃟ 🖍️ .lolice <@tag>
┣ ඬ⃟ 🖍️ .itssostupid
┣ ඬ⃟ 🖍️ .pixelar
┣ ඬ⃟ 🖍️ .blur
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < FRASES Y TEXTOS />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 .piropo
┣ ඬ⃟ 🥀 .consejo
┣ ඬ⃟ 🥀 .fraseromantica
┣ ඬ⃟ 🥀 .historiaromantica
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < MENU DE ANIMES />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧿 .menuanimes
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < RANDOM />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 .kpop <blackpink / exo / bts>
┣ ඬ⃟ 👾 .cristianoronaldo
┣ ඬ⃟ 👾 .messi
┣ ඬ⃟ 👾 .cat
┣ ඬ⃟ 👾 .dog
┣ ඬ⃟ 👾 .meme
┣ ඬ⃟ 👾 .itzy
┣ ඬ⃟ 👾 .blackpink
┣ ඬ⃟ 👾 .navidad
┣ ඬ⃟ 👾 .wpmontaña
┣ ඬ⃟ 👾 .pubg
┣ ඬ⃟ 👾 .wpgaming
┣ ඬ⃟ 👾 .wpaesthetic
┣ ඬ⃟ 👾 .wpaesthetic2
┣ ඬ⃟ 👾 .wprandom
┣ ඬ⃟ 👾 .wallhp
┣ ඬ⃟ 👾 .wpvehiculo
┣ ඬ⃟ 👾 .wpmoto
┣ ඬ⃟ 👾 .coffee
┣ ඬ⃟ 👾 .pentol
┣ ඬ⃟ 👾 .caricatura
┣ ඬ⃟ 👾 .ciberespacio
┣ ඬ⃟ 👾 .technology
┣ ඬ⃟ 👾 .doraemon
┣ ඬ⃟ 👾 .hacker
┣ ඬ⃟ 👾 .planeta
┣ ඬ⃟ 👾 .randomprofile
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < COMANDOS 🔞 />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔞 .labiblia
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < EFECTOS DE AUDIOS />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 .bass
┣ ඬ⃟ 🎤 .blown
┣ ඬ⃟ 🎤 .deep
┣ ඬ⃟ 🎤 .earrape
┣ ඬ⃟ 🎤 .fast
┣ ඬ⃟ 🎤 .fat
┣ ඬ⃟ 🎤 .nightcore
┣ ඬ⃟ 🎤 .reverse
┣ ඬ⃟ 🎤 .robot
┣ ඬ⃟ 🎤 .slow
┣ ඬ⃟ 🎤 .smooth
┣ ඬ⃟ 🎤 .tupai
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < CHAT ANONIMO />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📳 .start
┣ ඬ⃟ 📳 .next
┣ ඬ⃟ 📳 .leave
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < MENU DE AUDIOS />   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔊 .menuaudios
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < HERRAMIENTAS />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ .inspect <link wa_gc>
┣ ඬ⃟ 🛠️ .chatgpt <texto>
┣ ඬ⃟ 🛠️ _.delchatgpt
┣ ඬ⃟ 🛠️ .gptvoz <texto>
┣ ඬ⃟ 🛠️ .dall-e <texto>
┣ ඬ⃟ 🛠️ .spamwa <numero|texto|cantidad>
┣ ඬ⃟ 🛠️ .tamaño <cantidad> <imagen / video>
┣ ඬ⃟ 🛠️ .readviewonce <imagen / video>
┣ ඬ⃟ 🛠️ .clima <país> <ciudad>
┣ ඬ⃟ 🛠️ .encuesta <texto1|texto2...>
┣ ඬ⃟ 🛠️ .afk <motivo>
┣ ඬ⃟ 🛠️ .ocr <responde a imagen>
┣ ඬ⃟ 🛠️ .hd <responde a imagen>
┣ ඬ⃟ 🛠️ .acortar <enlace / link / url>
┣ ඬ⃟ 🛠️ .calc <operacion math>
┣ ඬ⃟ 🛠️ .del <mensaje>
┣ ඬ⃟ 🛠️ .whatmusic <audio>
┣ ඬ⃟ 🛠️ .readqr <imagen (QR)>
┣ ඬ⃟ 🛠️ .qrcode <texto>
┣ ඬ⃟ 🛠️ .readmore <texto1| texto2>
┣ ඬ⃟ 🛠️ .styletext <texto>
┣ ඬ⃟ 🛠️ .traducir <texto>
┣ ඬ⃟ 🛠️ .nowa <numero>
┣ ඬ⃟ 🛠️ .covid <pais>
┣ ඬ⃟ 🛠️ .horario
┣ ඬ⃟ 🛠️ .dropmail
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < ECONOMIA DEL BOT />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💵 .adventure
┣ ඬ⃟ 💵 .cazar
┣ ඬ⃟ 💵 .cofre
┣ ඬ⃟ 💵 .balance
┣ ඬ⃟ 💵 .claim
┣ ඬ⃟ 💵 .heal
┣ ඬ⃟ 💵 .lb
┣ ඬ⃟ 💵 .levelup
┣ ඬ⃟ 💵 .myns
┣ ඬ⃟ 💵 .perfil
┣ ඬ⃟ 💵 .work
┣ ඬ⃟ 💵 .minar
┣ ඬ⃟ 💵 .minar2
┣ ඬ⃟ 💵 .buy
┣ ඬ⃟ 💵 .buyall
┣ ඬ⃟ 💵 .verificar
┣ ඬ⃟ 💵 .robar <cantidad> <@tag>
┣ ඬ⃟ 💵 .transfer <tipo> <cantidad> <@tag>
┣ ඬ⃟ 💵 .unreg <numero de serie>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < STICKERS />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 .sticker <responder a imagen o video>
┣ ඬ⃟ 👽 .sticker <enlace / link / url>
┣ ඬ⃟ 👽 .sticker2 <responder a imagen o video>
┣ ඬ⃟ 👽 .sticker2 <enlace / link / url>
┣ ඬ⃟ 👽 .s <responder a imagen o video>
┣ ඬ⃟ 👽 .s <enlace / link / url>
┣ ඬ⃟ 👽 .emojimix <emoji 1>&<emoji 2>
┣ ඬ⃟ 👽 .scircle <imagen>
┣ ඬ⃟ 👽 .sremovebg <imagen>
┣ ඬ⃟ 👽 .semoji <tipo> <emoji>
┣ ඬ⃟ 👽 .qc <texto>
┣ ඬ⃟ 👽 .attp <texto>
┣ ඬ⃟ 👽 .attp2 <texto>
┣ ඬ⃟ 👽 .attp3 <texto>
┣ ඬ⃟ 👽 .ttp <texto>
┣ ඬ⃟ 👽 .ttp2 <texto>
┣ ඬ⃟ 👽 .ttp3 <texto>
┣ ඬ⃟ 👽 .ttp4 <texto>
┣ ඬ⃟ 👽 .ttp5 <texto>
┣ ඬ⃟ 👽 .pat <@tag>
┣ ඬ⃟ 👽 .slap <@tag>
┣ ඬ⃟ 👽 .kiss <@tag>
┣ ඬ⃟ 👽 .dado
┣ ඬ⃟ 👽 .wm <packname> <author>
┣ ඬ⃟ 👽 .stickermarker <efecto> <imagen>
┣ ඬ⃟ 👽 .stickerfilter <efecto> <imagen>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ < OWNER Y MODERADORES />
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 > <funcion>
┣ ඬ⃟ 👑 => <funcion>
┣ ඬ⃟ 👑 $ <funcion>
┣ ඬ⃟ 👑 .setprefix <prefijo>
┣ ඬ⃟ 👑 .resetprefix
┣ ඬ⃟ 👑 .autoadmin
┣ ඬ⃟ 👑 .grouplist
┣ ඬ⃟ 👑 .chetar
┣ ඬ⃟ 👑 .leavegc
┣ ඬ⃟ 👑 .cajafuerte
┣ ඬ⃟ 👑 .blocklist
┣ ඬ⃟ 👑 .addowner <@tag / numero>
┣ ඬ⃟ 👑 .delowner <@tag / numero>
┣ ඬ⃟ 👑 .block <@tag / numero>
┣ ඬ⃟ 👑 .unblock <@tag / numero>
┣ ඬ⃟ 👑 .enable restrict
┣ ඬ⃟ 👑 .disable restrict
┣ ඬ⃟ 👑 .enable autoread
┣ ඬ⃟ 👑 .disable autoread
┣ ඬ⃟ 👑 .enable public
┣ ඬ⃟ 👑 .disable public
┣ ඬ⃟ 👑 .enable pconly
┣ ඬ⃟ 👑 .disable pconly
┣ ඬ⃟ 👑 .enable gconly
┣ ඬ⃟ 👑 .disable gconly
┣ ඬ⃟ 👑 .enable anticall
┣ ඬ⃟ 👑 .disable anticall
┣ ඬ⃟ 👑 .enable antiprivado
┣ ඬ⃟ 👑 .disable antiprivado
┣ ඬ⃟ 👑 .enable modejadibot
┣ ඬ⃟ 👑 .disable modejadibot
┣ ඬ⃟ 👑 .enable audios_bot
┣ ඬ⃟ 👑 .disable audios_bot
┣ ඬ⃟ 👑 .enable antispam
┣ ඬ⃟ 👑 .disable antispam
┣ ඬ⃟ 👑 .msg <texto>
┣ ඬ⃟ 👑 .banchat
┣ ඬ⃟ 👑 .unbanchat
┣ ඬ⃟ 👑 .resetuser <@tag>
┣ ඬ⃟ 👑 .banuser <@tag>
┣ ඬ⃟ 👑 .unbanuser <@tag>
┣ ඬ⃟ 👑 .dardiamantes <@tag> <cantidad>
┣ ඬ⃟ 👑 .añadirxp <@tag> <cantidad>
┣ ඬ⃟ 👑 .banuser <@tag>
┣ ඬ⃟ 👑 .bc <texto>
┣ ඬ⃟ 👑 .bcchats <texto>
┣ ඬ⃟ 👑 .bcgc <texto>
┣ ඬ⃟ 👑 .bcgc2 <audio>
┣ ඬ⃟ 👑 .bcgc2 <video>
┣ ඬ⃟ 👑 .bcgc2 <imagen>
┣ ඬ⃟ 👑 .bcbot <texto>
┣ ඬ⃟ 👑 .cleartpm
┣ ඬ⃟ 👑 .restart
┣ ඬ⃟ 👑 .update
┣ ඬ⃟ 👑 .banlist
┣ ඬ⃟ 👑 .addprem <@tag> <tiempo>
┣ ඬ⃟ 👑 .addprem2 <@tag> <tiempo>
┣ ඬ⃟ 👑 .addprem3 <@tag> <tiempo>
┣ ඬ⃟ 👑 .addprem4 <@tag> <tiempo>
┣ ඬ⃟ 👑 .delprem <@tag>
┣ ඬ⃟ 👑 .listcmd
┣ ඬ⃟ 👑 .setppbot <responder a imagen>
┣ ඬ⃟ 👑 .addcmd <texto> <responder a sticker/imagen>
┣ ඬ⃟ 👑 .delcmd <responder a sticker/imagen con comando o texto asignado>
┣ ඬ⃟ 👑 _.saveimage
┣ ඬ⃟ 👑 _.viewimage
┗━━━━━━━━━━━━━━━━┛`.trim()
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
