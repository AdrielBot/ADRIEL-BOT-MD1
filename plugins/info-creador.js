let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭─「➻❥ *owner* ➻❥」
│➯ 𝙰𝙳𝚁𝙸𝙴𝙻-𝙱𝙾𝚃
│➯Wa.me/59168683798 (CREADOR)
│➯Wa.me/59168683798 (CREADOR) 
│➯Wa.me/59168683798 (CREADOR)
│➯Wa.me/59168683798 (CREADOR)
╰───────────────╯`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/AdrielBot` },
'mimetype': `application/${document}`,
'fileName': `ADRIEL-BOT🗣️`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/AdrielBot',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl':'https://instagram.com/adriel_bot?igshid=MTk0NTkyODZkYg==' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
handler.register = true
export default handler
