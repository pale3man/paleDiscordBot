const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  // .addStringOption((option) =>
  //   option.setName("input").setDescription("The input to echo back")
  // )
  // .addChannelOption((option) =>
  //   option.setName("channel").setDescription("The channel to echo into")
  // ),

  async execute(interaction) {
    await interaction.reply("마귀가 들렸네");

    // await interaction.reply('Pong!');
    // await wait(2000);
    // await interaction.editReply('Pong again!');
    // ephemeral => 본인만 확인할 수 있는 메시지 (남이 굳이 확인할 필요가 없는...)
    //   await interaction.deferReply({ ephemeral: true });
    //   await wait(4000);
    //   // deferReply => 생각 중
    //   // editReply => 이후에 답변 수정, deferReply를 쓰기 위해서는 이후 editReply로 수정해야 함
    //   await interaction.editReply("Pong!");
    //   await wait(2000);
    //   await interaction.deleteReply();
    //   await interaction.followUp({ content: "Pong again!", ephemeral: true });
  },
};
