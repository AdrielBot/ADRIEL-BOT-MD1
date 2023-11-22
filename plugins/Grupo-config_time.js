let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn)
          throw false
  }
  let isClose = {
	  'open': 'not_announcement',
	  'buka': 'not_announcement',
      'on': 'not_announcement',
	  '1': 'not_announcement',
	  'close': 'announcement',
	  'tutup': 'announcement',
      'off': 'announcement',
      '0': 'announcement',
  }[(args[0] || '')]
  if (isClose === undefined) {
	  let caption = `------------------------------------------------------------------------------------------------------------
𝐀𝐝𝐫𝐢𝐞𝐥 𝐁𝐨𝐭
*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*
✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ 
${usedPrefix + command} open 1*
${usedPrefix + command} close 1*
📌 *_Ejemplo de uso:_* *${usedPrefix + command} close 1*
*_🌿 𝙋𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙚𝙨𝙩𝙚 𝙘𝙚𝙧𝙧𝙖𝙙𝙤 𝙪𝙣𝙖 𝙝𝙤𝙧𝙖._*

------------------------------------------------------------------------------------------------------------

𝐀𝐝𝐫𝐢𝐞𝐥 𝐁𝐨𝐭
*[❗]WRONG FORMAT!!*
*✨EXAMPLE✨*
${usedPrefix + command} open 1*
${usedPrefix + command} close 1*
📌 *_Use example:_* *${usedPrefix + command} close 1*
*_🌿 𝙁𝙤𝙧 𝙩𝙝𝙚 𝙜𝙧𝙤𝙪𝙥 𝙩𝙤 𝙗𝙚 𝙘𝙡𝙤𝙨𝙚𝙙 𝙤𝙣 𝙩𝙞𝙢𝙚._*

------------------------------------------------------------------------------------------------------------`
      m.reply(caption)
	  throw false
  }
  let timeoutset = 86400000 * args[1] / 24
  await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
	  m.reply(`⚠️ *_Grupo ${isClose == 'announcement' ? 'cerrado' : 'abierto'} ${args[1] ? `durante *${clockString(timeoutset)}_*` : ''}`)
  })
  if (args[1]) {
	 setTimeout(async () => {
            await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
		    conn.reply(m.chat, `${isClose == 'not_announcement' ? '*𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊🔒, ¡𝘼𝙃𝙊𝙍𝘼 𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙉𝙑𝙄𝘼𝙍 𝙈𝙀𝙉𝙎𝘼𝙅𝙀𝙎!*' : '*𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙎𝙀 𝙃𝘼 𝘼𝘽𝙄𝙀𝙍𝙏𝙊🔓, ¡𝘼𝙃𝙊𝙍𝘼 𝙏𝙊𝘿𝙊𝙎 𝙇𝙊𝙎 𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙉𝙑𝙄𝘼𝙍 𝙈𝙀𝙉𝙎𝘼𝙅𝙀𝙎!*'}!`)
	    })
        }, timeoutset)
  }
  }
handler.help = ['grouptime *<open/close>* *<número>*']
handler.tags = ['group']
handler.command = /^(grouptime|gctime)$/i

handler.botAdmin = true
handler.group = true 
handler.register = true
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}


