const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shuffle",
  description: "Xáo trộn hàng đợi",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["shuff"],
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
    if (!player.queue || !player.queue.length || player.queue.length === 0)
      return client.sendTime(
        message.channel,
        "🖕 | **Not enough songs in the queue to shuffle!**"
      );
    player.queue.shuffle();
    await client.sendTime(message.channel, "✅ | Shuffled the queue!");
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
          ":x: | **Mày phải cùng voice với tao đãaa**"
        );

      let player = await client.Manager.get(interaction.guild_id);
      if (!player)
        return client.sendTime(
          interaction.channel,
          "🖕 | **Không có bài nào đang mở cả...**"
        );
      if (!player.queue || !player.queue.length || player.queue.length === 0)
        return client.sendTime(
          interaction,
          "🖕 | **Not enough songs in the queue to shuffle!**"
        );
      player.queue.shuffle();
      client.sendTime(interaction, "✅ | Shuffled the queue!");
    },
  },
};
