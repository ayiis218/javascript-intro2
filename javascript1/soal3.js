let printSegitiga = 5
let data = typeof printSegitiga !== 'number' || printSegitiga == 0
if (data) {
    console.log('Data harus berupa number dan harus lebih dari nol')
} else {
    for (i=printSegitiga; i > 0; i--){
        let dta =' '
        for (j=1; j<=i; j++){
            dta += j + ' '  
        }
        console.log(dta)
    }
}