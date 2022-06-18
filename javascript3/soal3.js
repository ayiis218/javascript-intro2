// PROGRAM 1
const fs = require('fs')

const dataAlbum = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            fs.readFile('daftarLagu.txt', 'utf8', (err, res) => {
                if (err) {
                    reject(new Error('Sorry Data Not Found'))
                } else {
                    resolve(res)   
                }
            })
        }, 4000)
    })
}

dataAlbum()
  .then(res => console.log('Daftar Album: ', res))
  .catch(err => console.log(err, message))


// PROGRAM 2
const dataHobi = (hobby) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (typeof hobby !== "string") {
                reject(new Error("Data yang anda input harus String"))
            } else {
                const data = [
                    { id: 001, nama: 'Rafi', hobi: 'musik' },
                    { id: 002, nama: 'Ridho', hobi: 'musik' },
                    { id: 003, nama: 'Rifa', hobi: 'membaca buku' },
                    { id: 004, nama: 'rey', hobi: 'traveling' },
                    { id: 005, nama: 'ronal', hobi: 'game' },
                    { id: 006, nama: 'riki', hobi: 'musik' },
                    { id: 007, nama: 'reski', hobi: 'game' }
                ]
                
                let tampil = data.filter((x) => { 
                    return x.hobi.toLowerCase() === hobby.toLowerCase() 
                })
                    if (tampil) {
                        resolve (tampil)
                    } else {
                        reject(new Error('Hobby tersebut tidak ada'))
                    }
            }
        }, 2000)
    })
}

dataHobi('game')
    .then((res) => console.log(`Data dengan hobby tersebut adalah: `, res))
    .catch((err) => console.log(err.message))
