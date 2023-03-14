const chalk = require('chalk');
const figlet = require('figlet');

  // 模版使用提示
  function showTemplateHelp() {
    console.log(`\r\nSuccessfully created project ${chalk.cyan(this.projectName)}`);
    console.log(`\r\n  cd ${chalk.cyan(this.projectName)}\r\n`);
    console.log("  npm install");
    console.log("  npm run dev\r\n");
    console.log(`
        \r\n
        ${chalk.green.bold(
        figlet.textSync("SUCCESS", {
            font: "isometric4",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        })
    )}
    `)
}

module.exports = {
    showTemplateHelp
}