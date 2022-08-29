let data = {
   id: 1,
   name: ' Leanne Graham',
   username: 'Bret',
   email: 'Sincere@april.biz',
   address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipCode: '92998-3874',
   },
   phone: '1-770-736-8031 x56442',
   website: 'hildegard.org',
};
// a. spread oprator
const spread = {
   ...data,
   name: 'Ayi Solahudin',
   email: 'ayiis.218@gmail.com',
   hobby: 'webtoon',
};
console.log(spread);

// b. destructuring
const { street, city } = data.address;

console.log(`Street = ${street} \nCity = ${city}`);
