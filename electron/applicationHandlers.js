const { channels } = require("./channels.js");

function addHandlers(ipcMain) {
  ipcMain.handle(channels.heathCheck, async (event, args) => {
    return true;
  });
}

exports.addHandlers = addHandlers;
