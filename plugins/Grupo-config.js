let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `------------------------------------------------------------------------------------------------------------
𝐀𝐝𝐫𝐢𝐞𝐥 𝐁𝐨𝐭
*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*
✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ 
${usedPrefix + command} abrir*
${usedPrefix + command} cerrar*

------------------------------------------------------------------------------------------------------------

𝐀𝐝𝐫𝐢𝐞𝐥 𝐁𝐨𝐭
*[❗]WRONG FORMAT!!*
*✨EXAMPLE✨*
${usedPrefix + command} *open*
${usedPrefix + command} *close*
------------------------------------------------------------------------------------------------------------`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] 𝙂𝙍𝙐𝙋𝙊 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘿𝙊 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀*\n\n\n*[ ✔ ] GROUP CONFIGURED CORRECTLY*')}
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
