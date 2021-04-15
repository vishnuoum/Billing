const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')



let win

function createWindow() {
    // win.maximize()
    win = new BrowserWindow({ show: false })
    win.loadURL(path.join(__dirname, 'files/index.html'))
    win.setTitle("Admin")
    win.setMenuBarVisibility(false)
    // win.setIcon(path.join(__dirname, '/icon/logo.ico'))
    // win.setMenu(null)
    win.maximize()
    win.show(true)
}
app.on('ready', createWindow)
