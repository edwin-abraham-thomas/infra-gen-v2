const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  healthCheck: () => ipcRenderer.invoke("health-check"),
});
