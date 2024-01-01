const {BrowserWindow,app, ipcMain}= require("electron");
const path = require("path");
// Import the createMenu function from your menu module
const{createMenu} =require("./menu")

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    //   nodeIntegration: true,
    },
  });
  
  mainWindow.webContents.openDevTools(); //自动打开开发者工具
  mainWindow.loadFile("index.html");
  createMenu()// 调用菜单创建函数
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform!== "darwin") app.quit();
});  

ipcMain.on("saveFile", (event, arg) => {
    console.log("dd");
});
