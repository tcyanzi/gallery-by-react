var fs =require('fs')
var readStram=fs.createReadStream('node-v6.9.2-x64.msi')
var writeStram=fs.createWriteStream('node-v6.msi')
readStram.on('data',function (chunk) {
    if(writeStram.write(chunk)==false){
        console.log('still cached')
        readStram.pause()
    }
})
readStram.on('end',function () {
    writeStram.end()
})
writeStram.on('drain',function () {
    console.log('date drains')
    readStram.resume()
})