const cekHariKerja = (day) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         try {
            if (typeof day !== 'string') {
               throw Error('Input salah periksa kembali');
            } else {
               const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
               let check = dataDay.find((item) => {
                  return item.toLowerCase() === day.toLowerCase();
               });
               if (check) {
                  resolve(check);
               } else {
                  reject(new Error('Hari ini bukan hari kerja'));
               }
            }
         } catch (error) {
            reject(error);
         }
      }, 4000);
   });
};

cekHariKerja('senin')
   .then((res) => console.log(res, 'Selamat Bekerja'))
   .catch((err) => console.log(err.message));

/* 
Then catch
Then : Menampilkan hasil jika kondisi yang dijalankan sukses.
Catch : Menangkap hasil jika kondisi yang dijalankan gagal.


Try Catch
Try : Menampung program yang akan dilakukan pengecekan.
Catch : Menangkap pesan error dari blok try.
*/
