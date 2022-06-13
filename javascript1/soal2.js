let bhsIndo = 90
let bhsInggris = 89
let matematika = 80
let ipa = 69

let nilai = matematika || bhsIndo || bhsInggris || ipa
let string = typeof nilai !== 'number'
let range = nilai <= 0 && nilai > 100
let jumlah = bhsIndo + bhsInggris + matematika + ipa

if (string) {
    console.log('Nilai input harus bersifat number')
} else if (range) {
    console.log('Nilai harus antara 0 - 100')
} else {
    let rata2 = jumlah / 4
    console.log (`Nilai rata-rata = ${rata2}`)

    if ( rata2 >= 90) {
        console.log('Grade = A')
    } else if ( rata2 >= 80 ) {
         console.log('Grade = B')
    } else if ( rata2 >= 70 ) {
        console.log('Grade = C')
    } else if ( rata2 >= 60 ) {
        console.log('Grade = D')
    } else {
        console.log ('Grade = E')
    }
}