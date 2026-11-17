//Memanggil elemen tombol menggunakan ID 'sapaButton' yang sama persis dengan HTML
const tombolSapa = document.getElementById('sapaButton');

//Menambahkan aksi ketika tombol diklik
tombolSapa.addEventListener('click',function() {
  alert('Halo! Terima kasih sudah berkunjung');
});
