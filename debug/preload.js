
const {ipcRenderer,contextBridge}= require("electron")

contextBridge.exposeInMainWorld("api",{
    send: ()=>{
        ipcRenderer.send("saveFile")
    }
})