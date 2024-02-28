const { app, BrowserWindow, ipcMain } = require("electron");
const { join } = require("path");
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1024,
    height: 576,
    backgroundColor: "#ffffff",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: join(__dirname, `./preload.js`),
    },
  });

  win.loadFile(join(__dirname, `../dist/infra-gen/browser/index.html`));

  // uncomment below to open the DevTools.
  win.webContents.openDevTools();

  // Event when the window is closed.
  win.on("closed", function () {
    win = null;
  });
}
// Create window on electron intialization
app.on("ready", () => {
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS specific close process
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // macOS specific close process
  if (win === null) {
    createWindow();
  }
});

const appHandlers = require("./applicationHandlers.js");
appHandlers.addHandlers(ipcMain);
