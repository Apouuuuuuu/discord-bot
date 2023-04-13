const Discord = require("discord.js")

module.exports = {

    name: "tarifen",
    description: "Envoit l'embed du tarif anglais",
    permission: Discord.PermissionFlagsBits.BanMembers,
    dm: false,
    category: "🔰・Modération",
    options: [],

    async run(bot, message, args) {



        
        let Embed = new Discord.EmbedBuilder()
        .setColor(bot.colorUtile)
        .setTitle("Pricing")
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
        .setDescription("Pricing of various services")
        .addFields(
            { name: '<:leagueoflegends:1092428088173932654> **__League of Legends__**', value: ' ' },
            { name: '<:unranked:1092466987533340753> Unranked account lvl 30 1 skin of choice', value: '4€'},
            { name: '<:unranked:1092466987533340753> Unranked account lvl 30 2 skins of choice', value: '5€'},
            { name: '<:ironlol:1092429545979777095> Iron 4 account', value: '25€'},
            { name: '<:goldlol:1092429535212998726> Gold account', value: '10€'},
            { name: '<:platlol:1092429540845953086> Platinum account', value: '24€'},
            { name: '<:diamondlol:1092429533598195742> Diamond account', value: '45€'},  
            { name: '<:valorant:1092458404137681048> **__Valorant__**', value: ' ' },
            { name: '<:unranked:1092466987533340753> Compte unranked 100 skins', value: '39€'},  
            { name: '<:unranked:1092466987533340753> Compte unranked 50 skins', value: '29€'},  
            { name: '<:unranked:1092466987533340753> Compte unranked 10 skins', value: '17€'},
            { name: '<:valoplatinum3:1092386589004537946> Platinum account', value: '20€'},  
            { name: '<:valodiamond3:1092386593882525796> Diamond account', value: '47€'},  
            { name: '<:valoascendant3:1092386586047557662> Ascendant account', value: '65€'},
            { name: '<:europe:1095974176717803601>**__Region avaible__**', value: 'BR LAS LAN TR RU OCE NA EUNE EUW'},  
            { name: '<:shoppingcart:1092385345078820924> **__Buy__**', value: '<#1091261839674986506>'},  
        )
        .setImage("https://cdn.discordapp.com/attachments/1091340701402411069/1092465554448711730/image.png")
        .setTimestamp()
        .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic: true})})

    
        await message.reply({embeds: [Embed]})
    }
}