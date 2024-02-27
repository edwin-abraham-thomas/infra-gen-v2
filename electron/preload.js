const { ipcRenderer, contextBridge } = require("electron");


contextBridge.exposeInMainWorld('api', {
    test: 'testvalue',
    getSystemInfo: () => ipcRenderer.invoke('get-system-info')
})