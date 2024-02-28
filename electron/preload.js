const { ipcRenderer, contextBridge } = require("electron");
const { channels } = require("./channels.js");

contextBridge.exposeInMainWorld("api", {
  healthCheck: () => ipcRenderer.invoke(channels.heathCheck),
});
