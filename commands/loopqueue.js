const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

module.exports = {
  name: "loopqueue",
  description: "Lặp cả hàng chờ",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["lq", "repeatqueue", "rq"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (!player)
      return client.sendTime(
        message.channel,
        "🖕 | **Không có bài nào đang mở cả...**"
      );
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "🖕 | **Mày phải vào room mới dùng được lệnh này.!**"
      );
    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return client.sendTime(
        message.channel,
        ":x: | **Mày phải cùng voice với tao đãaa**"
      );

    if (player.queueRepeat) {
      player.setQueueRepeat(false);
      client.sendTime(message.channel, `:repeat: Queue Loop \`disabled\``);
    } else {
      player.setQueueRepeat(true);
      client.sendTime(message.channel, `:repeat: Queue Loop \`enabled\``);
    }
  },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      let player = await client.Manager.get(interaction.guild_id);
      const guild = client.guilds.cache.get(interaction.guild_id);
      const member = guild.members.cache.get(interaction.member.user.id);
      const voiceChannel = member.voice.channel;
      let awaitchannel = client.channels.cache.get(interaction.channel_id); /// thanks Reyansh for this idea ;-;
      if (!player)
        return client.sendTime(
          interaction,
          "🖕 | **Không có bài nào đang mở cả...**"
        );
      if (!member.voice.channel)
        return client.sendTime(
          interaction,
          "🖕 | **Mày phải vào room mới dùng được lệnh này.**"
        );
      if (
        guild.me.voice.channel &&
        !guild.me.voice.channel.equals(voiceChannel)
      )
        return client.sendTime(
          interaction,
          ":x: | **Mày phải cùng voice với tao đãaa**"
        );

      if (player.queueRepeat) {
        player.setQueueRepeat(false);
        client.sendTime(interaction, `:repeat: **Queue Loop** \`disabled\``);
      } else {
        player.setQueueRepeat(true);
        client.sendTime(interaction, `:repeat: **Queue Loop** \`enabled\``);
      }
      console.log(interaction.data);
    },
  },
};
