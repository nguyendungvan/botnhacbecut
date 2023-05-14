const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "disconnect",
  description: "Dừng lại ngay, dừng, dừng",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["leave", "exit", "quit", "dc", "stop"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "🖕 | **Mày phải trong voice mới sử dụng được lệnh này**"
      );
    if (!player)
      return client.sendTime(
        message.channel,
        "🖕 | **Không có bài nào đang mở cả...**"
      );
    await client.sendTime(message.channel, ":notes: | **Disconnected!**");
    await message.react("✅");
    player.destroy();
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
      const guild = client.guilds.cache.get(interaction.guild_id);
      const member = guild.members.cache.get(interaction.member.user.id);

      if (!member.voice.channel)
        return client.sendTime(
          interaction,
          "🖕 | **Mày phải vào room mới dùng được lệnh này.**"
        );
      if (
        guild.me.voice.channel &&
        !guild.me.voice.channel.equals(member.voice.channel)
      )
        return client.sendTime(
          interaction,
          `🖕 | **You must be in ${guild.me.voice.channel} to use this command.**`
        );

      let player = await client.Manager.get(interaction.guild_id);
      if (!player)
        return client.sendTime(
          interaction,
          "🖕 | **Không có bài nào đang mở cả...**"
        );
      player.destroy();
      client.sendTime(interaction, ":notes: | **Disconnected!**");
    },
  },
};
