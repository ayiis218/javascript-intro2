let triangle = 5;
let data = typeof triangle !== 'number' || triangle <= 0;
if (data) {
   console.log('Data harus berupa number dan harus lebih dari nol');
} else {
   for (let i = triangle; i > 0; i--) {
      let result = ' ';
      for (let j = 1; j <= i; j++) {
         result += j + ' ';
      }
      console.log(result);
   }
}
