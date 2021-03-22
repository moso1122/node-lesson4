const fs = require('fs')
const os = require('os')
const path = require('path')

const info = os.userInfo()
fs.writeFile(`${info.username}.txt`,JSON.stringify(info),(err)=>{
    if (err) {
        throw err
    }
})

fs.rename(`${info.username}.txt`,'10_11_15_32_13.txt',(err)=>{
    if (err) {
        throw err
    }
})

fs.readFile('homework3.txt','utf-8',(err,data)=>{
    const splited_text = data.split(',').join(' ')
    fs.writeFile('replace.txt',splited_text,(err)=>{
        if (err) {
            throw err
        }
    })
})

const web=['html','css','js','txt']
fs.mkdir('web',(err)=>{
    if (err) {
        throw err
    }
})
web.forEach((data,index)=>{
    fs.writeFile(`web/${data}.${data}`,data,(err)=>{
        if (err) {
            throw err
        }
    })
})
