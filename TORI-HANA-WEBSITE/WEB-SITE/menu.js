document.addEventListener('DOMContentLoaded', function () {
  let cart = [];

  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const contadorEl = document.getElementById('contador');
    const badgeEl = document.getElementById('cart-count-badge');
    const cartItemsEl = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    if (contadorEl) contadorEl.textContent = totalItems;
    if (badgeEl) badgeEl.textContent = totalItems;

    if (cartItemsEl && totalPriceEl) {
      if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p style="text-align:center; color:#888;">Tu carrito está vacío</p>';
        totalPriceEl.textContent = '$0.00';
      } else {
        let html = '';
        cart.forEach(item => {
          const subtotal = item.price * item.quantity;
          html += `
            <div class="cart-item">
              <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div>$${item.price.toFixed(2)} × ${item.quantity}</div>
              </div>
              <div class="cart-item-price">$${subtotal.toFixed(2)}</div>
            </div>
          `;
        });
        cartItemsEl.innerHTML = html;
        totalPriceEl.textContent = `$${totalAmount.toFixed(2)}`;
      }
    }
  }

  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 3000);
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.menu-card');
      const nameEl = card.querySelector('.menu-info h3');
      const price = parseFloat(this.getAttribute('data-price'));
      
      if (!nameEl || isNaN(price)) return;

      const name = nameEl.textContent.trim();
      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      updateCartUI();
      showToast(`"${name}" agregado al carrito`);

      this.classList.add('added');
      setTimeout(() => this.classList.remove('added'), 600);
    });
  });

  document.querySelectorAll('.btn-small').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.promo-card');
      const nameEl = card.querySelector('.promo-content h3');
      if (!nameEl) return;

      const name = nameEl.textContent.trim();
      let price = 10;
      if (name.includes('Sushi Especial')) price = 12;
      if (name.includes('Takoyaki Doble')) price = 7;

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      updateCartUI();
      showToast(`"${name}" agregado al carrito`);

      const original = this.textContent;
      this.textContent = '✓ Agregado';
      this.style.backgroundColor = '#c24a4a';
      this.style.color = 'white';
      setTimeout(() => {
        this.textContent = original;
        this.style.backgroundColor = '';
        this.style.color = '';
      }, 1500);
    });
  });

  const cartToggle = document.getElementById('cart-toggle');
  const cartModal = document.getElementById('cart-modal');
  const closeCart = document.getElementById('close-cart');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (cartToggle && cartModal) {
    cartToggle.addEventListener('click', () => cartModal.style.display = 'block');
  }

  if (closeCart && cartModal) {
    closeCart.addEventListener('click', () => cartModal.style.display = 'none');
    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) cartModal.style.display = 'none';
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Tu carrito está vacío');
      } else {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        alert(`✅ ¡Gracias por tu pedido!\nTotal: $${total.toFixed(2)}`);
      }
    });
  }
});