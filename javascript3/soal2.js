const getMonth = (callback) => {
    setTimeout (() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
        'Juli', 'Agustus', 'September', 'oktober', 'November', 'Desember']
        
        if (!error) {
            callback (null, month)
        } else {
            callback (new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

const tampil = (error, bulan) => {
    if (error) {
        console.log(error)
    } else {
        bulan.map((index) => console.log(index))
    }
}
getMonth(tampil)