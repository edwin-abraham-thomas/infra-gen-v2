const { app, BrowserWindow, Menu } = require("electron");
const env = process.env.ELECTRON_APP_ENV;
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1024,
    height: 576,
    backgroundColor: "#ffffff",
    autoHideMenuBar: true,
  });

  if (env && env.trim() === "production") {
    win.loadURL(`file://${__dirname}/dist/infra-gen/browser/index.html`);
  } else {
    win.loadURL("http://localhost:4200/");
  }

  // // uncomment below to open the DevTools.
  // win.webContents.openDevTools();

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
