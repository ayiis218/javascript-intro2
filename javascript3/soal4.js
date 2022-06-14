const fetch = require ('node-fetch')
const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

// Method Axios
const dataApi = (api) => {
    try {
        if (!api) {
            throw Error('Periksa kembali data atau URL kosong')
        } else {
            axios.get(api)
            .then( res => {
                res.data.map(item => console.log(item.name))
            })
        } 
    }catch (err) {
        console.log(`Error : ${err.message}`)
    }
}
dataApi(url)

// Method fetch
const dataApi2 = (api) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            try {
                if (!api) {
                    throw Error('Periksa kembali data atau URL kosong')
                } else {
                    resolve()
                } 
            }catch (err) {
                reject(err)
            }
        }, 4000)
    })
}
dataApi2(url)
    fetch(url)
    .then(res => res.json())
    .then(json => json.filter((index) => console.log(index.name)))
