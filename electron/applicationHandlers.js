function addHandlers(ipcMain) {
  ipcMain.handle("health-check", async (event, args) => {
    return true;
  });
}

exports.addHandlers = addHandlers;
