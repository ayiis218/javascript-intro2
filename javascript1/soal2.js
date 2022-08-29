let indonesian = 90;
let english = 89;
let mathematics = 20;
let ipa = 69;

let score = mathematics || indonesian || english || ipa;
let string = typeof score === 'number';
let range = score <= 0 || score > 100;
let amount = indonesian + english + mathematics + ipa;

if (!string) {
   console.log('Nilai input harus bersifat number');
} else if (range) {
   console.log('Nilai harus antara 0 - 100');
} else {
   let average = amount / 4;
   console.log(`Nilai rata-rata = ${average}`);

   if (average >= 90) {
      console.log('Grade = A');
   } else if (average >= 80) {
      console.log('Grade = B');
   } else if (average >= 70) {
      console.log('Grade = C');
   } else if (average >= 60) {
      console.log('Grade = D');
   } else {
      console.log('Grade = E');
   }
}
