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
const dataHobby = (hobby) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (typeof hobby !== "string") {
                reject(new Error("Data yang anda input harus String"))
            } else {
                const data = [
                    { id: 001, name: 'Rafi', hobby: 'musik' },
                    { id: 002, name: 'Ridho', hobby: 'musik' },
                    { id: 003, name: 'Rifa', hobby: 'membaca buku' },
                    { id: 004, name: 'rey', hobby: 'traveling' },
                    { id: 005, name: 'ronal', hobby: 'game' },
                    { id: 006, name: 'riki', hobby: 'musik' },
                    { id: 007, name: 'reski', hobby: 'game' }
                ]
                
                let show = data.filter((x) => { 
                    return x.hobby.toLowerCase() === hobby.toLowerCase() 
                })
                    if (show) {
                        resolve (show)
                    } else {
                        reject(new Error('Hobby tersebut tidak ada'))
                    }
            }
        }, 2000)
    })
}

dataHobby('game')
    .then((res) => console.log(`Data dengan hobby tersebut adalah: `, res))
    .catch((err) => console.log(err.message))
