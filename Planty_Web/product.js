
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const buyNowButtons = document.querySelectorAll('.buy-now');
const cartPopup = document.getElementById('cart-popup');
const closePopupBtn = document.getElementById('close-popup');
const popupMessage = document.getElementById('popup-message');


function showCartPopup(productName) {
  popupMessage.textContent = `${productName} has been added to your cart!`;
  cartPopup.style.display = 'block';

  setTimeout(function () {
    cartPopup.style.display = 'none';
  }, 3000);
}


addToCartButtons.forEach(button => {
  button.addEventListener('click', function () {
    const product = button.closest('.product');
    const productName = product.querySelector('h3').textContent;
    showCartPopup(productName);
  });
});


buyNowButtons.forEach(button => {
  button.addEventListener('click', function () {
    const product = button.closest('.product');
    const productName = product.querySelector('h3').textContent;

    alert(`Redirecting to checkout for ${productName}...`);
  
  });
});


closePopupBtn.addEventListener('click', function () {
  cartPopup.style.display = 'none';
});
