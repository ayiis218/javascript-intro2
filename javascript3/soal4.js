const fetch = require('node-fetch');
const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/users';

// Method Axios
const dataApi = (api) => {
   console.log('data axios :');
   try {
      if (!api) {
         throw Error('Periksa kembali data atau URL kosong');
      } else {
         axios
            .get(api)
            .then((res) => {
               console.log(res.data.map((item) => item.name));
            })
            .catch((err) => {
               err.message;
            })
            .finally(() => {
               console.log('\ndata fetch: ');
            });
      }
   } catch (err) {
      console.log(`Error : ${err.message}`);
   }
};
dataApi(url);

// Method fetch
const dataApi2 = async (api) => {
   try {
      if (!api) {
         throw Error('Periksa kembali data atau URL kosong');
      } else {
         const res = await fetch(api);
         const data = await res.json();
         console.log(data.map((item) => item.name));
      }
   } catch (err) {
      console.log(`Error : ${err.message}`);
   }
};

dataApi2(url);
