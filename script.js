document.getElementById('scan-now').addEventListener('click', function() {
    document.getElementById('scan_image').scrollIntoView({ behavior: 'smooth' });
});

function openProductDetail(productId) {
    window.location.href = `product_detail.html?id=${productId}`;
}

for (let i = 1; i <= 15; i++) {
    // Mengambil elemen produk berdasarkan ID
    const productElement = document.getElementById(`product${i}`);
    
    // Pastikan elemen produk ada sebelum menambahkan event listener
    if (productElement) {
        productElement.addEventListener("click", function() {
            openProductDetail(i);  // Redirect ke detail produk dengan ID yang sesuai
        });
    }
}
