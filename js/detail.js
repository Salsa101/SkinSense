// Ambil parameter ID dari URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fungsi untuk mengubah rating menjadi bintang
function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < rating; i++) {
    stars += '<i class="fa-solid fa-star"></i>';
  }
  return stars;
}

// Fetch data dari file JSON
fetch('../product.json')
  .then(response => response.json())
  .then(products => {
    // Cari produk berdasarkan ID
    const product = products.find(p => p.id == productId);

    if (product) {
      // Isi konten HTML dengan data produk
      document.getElementById('product-image').src = product.image;
      document.getElementById('product-title').innerText = product.name;
      document.getElementById('product-description').innerText = product.description;
      document.getElementById('product-price').innerText = product.price;
      document.getElementById('reviews-count').innerText = `${product.reviews} Reviews`;

      // Generate rating stars
      const ratingElement = document.getElementById('product-rating');
      ratingElement.innerHTML = generateStars(product.rating) + ` <span>${product.reviews} Reviews</span>`;
    } else {
      // Jika produk tidak ditemukan
      document.getElementById('product_detail').innerHTML = `<p>Produk tidak ditemukan.</p>`;
    }
  })
  .catch(error => console.error('Error fetching product data:', error));
