var fs=require('fs')
var source=fs.readFileSync('../buffer/201612061027321.png')
fs.writeFileSync('steam_copy_logo.png',source)