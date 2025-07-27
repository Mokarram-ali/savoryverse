const content = document.getElementById('content');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const cartItems = [];

function renderCart() {
  let cartHTML = `
    <div class="services-section fade-in">
      <h2 style="margin-bottom: 25px;">🛒 Your Cart</h2>
      ${cartItems.length === 0 ? `<p style="font-size: 18px;">No items yet... Start adding deliciousness! 😋</p>` : ''}
      <div class="cart-items">
        ${cartItems.map((item, index) => `
          <div class="cart-card">
            <div class="cart-img" style="background-image: url('${item.img || './Assets/food-placeholder.jpg'}');"></div>
            <div style="flex: 1;">
              <span class="cart-dish">${item.name}</span>
            </div>
            <div style="display: flex; gap: 15px; align-items: center;">
              <span class="cart-price">₹${item.price}</span>
              <button class="remove-btn" title="Remove from cart" data-index="${index}">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      ${cartItems.length > 0 ? `
        <div class="cart-total">
          <span>Total:</span>
          <span>₹${cartItems.reduce((acc, item) => acc + item.price, 0)}</span>
        </div>
        <div style="text-align: center; margin-top: 30px;">
          <button class="purchase-btn">Complete Purchase <i class="fa-solid fa-check-to-slot"></i></button>
        </div>
      ` : ''}
    </div>
  `;

  content.innerHTML = cartHTML;
}

function generateCards(title, items, theme) {
  return `
    <h2>${title}</h2>
    <div class="card-container fade-in">
      ${items.map(item => `
        <div class="card ${theme}">
          <div class="image" style="background-image: url('${item.img}');"></div>
          <h4>${item.name}</h4>
          <p class="price">${item.price}</p>
          <button class="purchase-btn" 
              data-name="${item.name}" 
              data-price="${item.price.replace(/[₹\s]/g, '')}" 
              data-img="${item.img}">
           Add to Cart <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>`).join('')}
    </div>`;
}

function generateCard(name, price, img) {
  return `
    <div class="card">
      <div class="image" style="background-image: url('${img}');"></div>
      <h4>${name}</h4>
      <p class="price">${price}</p>
      <button class="purchase-btn" 
              data-name="${name}" 
              data-price="${price.replace(/[₹\s]/g, '')}" 
              data-img="${img}">
        Add to Cart <i class="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  `;
}

const sections = {
  home: {
  html: `
    <section class="home-section">
      <div class="hero">
        <h1 class="hero-title">Welcome to <span>SavoryVerse</span></h1>
        <p class="tagline">Where every flavor tells a story!</p>
        <button class="cta-btn" onclick="document.querySelector('aside li[data-section=veg]').click()">View Menu</button>
      </div>

      <div class="featured-dishes">
        <h2>🍽️ Featured Dishes</h2>
        <div class="dish-preview-list">
          <div class="dish-card">
            <img src="./Hero/Veg/paneer_tikka.png" alt="Featured Dish 1">
            <h3>Paneer Tikka</h3>
          </div>
          <div class="dish-card">
            <img src="./Hero/Non veg/spicy_grilled_chicken.png" alt="Featured Dish 2">
            <h3>Spicy Grilled Chicken</h3>
          </div>
          <div class="dish-card">
            <img src="./Hero/Dessert/chocolate_cake.png" alt="Featured Dish 3">
            <h3>Chocolate Cake</h3>
          </div>
          <div class="dish-card">
            <img src="./Hero/Ice Cream/strawberry_swirl.png" alt="Featured Dish 3">
            <h3>Strawberry Swirl</h3>
          </div>
        </div>
      </div>

      <div class="info-section">
        <div class="hours">
          <h2>Hours</h2>
          <p>Mon–Fri: 10am – 10pm<br>Sat–Sun: 9am – 11pm</p>
        </div>
        <div class="contact">
          <h2>Contact Us</h2>
          <p>Email: support@savoryverse.com<br>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div class="testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>“Absolutely delicious! The best dining experience I've had in ages!”</blockquote>
        <blockquote>“Their seafood section is just <span class="chef-kiss">*chef's kiss* 👨‍🍳👌</span>”</blockquote>
      </div>

      <div class="why-choose-us">
        <h2>🌟 Why Choose SavoryVerse?</h2>
        <div class="choose-cards">
          <div class="choose-card">
            <i class="fa-solid fa-seedling"></i>
            <h3>Fresh Ingredients</h3>
            <p>We source the best and freshest ingredients to ensure every bite is full of flavor.</p>
          </div>
          <div class="choose-card">
            <i class="fa-solid fa-utensils"></i>
            <h3>Expert Chefs</h3>
            <p>Our chefs bring years of experience and love into each dish served to you.</p>
          </div>
          <div class="choose-card">
            <i class="fa-solid fa-thumbs-up"></i>
            <h3>Customer Satisfaction</h3>
            <p>Your happiness is our top priority — we guarantee a delightful dining journey.</p>
          </div>
        </div>
      </div>

      <div class="popular-categories">
        <h2>🍱 Popular Categories</h2>
        <div class="category-links">
          <button data-section="veg" onclick="document.querySelector('aside li[data-section=veg]').click()">Veg</button>
          <button data-section="nonveg" onclick="document.querySelector('aside li[data-section=nonveg]').click()">Non-Veg</button>
          <button data-section="dessert" onclick="document.querySelector('aside li[data-section=dessert]').click()">Dessert</button>
          <button data-section="icecream" onclick="document.querySelector('aside li[data-section=icecream]').click()">Ice-Cream</button>
        </div>
      </div>

      <div class="newsletter">
        <h2>📬 Stay in the Flavor Loop!</h2>
        <p>Subscribe to receive exclusive updates, discounts, and special offers from SavoryVerse.</p>
        <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Subscribed! 📨')">
          <input type="email" placeholder="Enter your email..." required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
    `,
    theme: 'theme-home',
  },
  about: {
    html: `
      <div class="about-container">
        <div class="about-text">
          <h2>👨‍🍳 About Us</h2>
          <p>
            Welcome to <strong>SavoryVerse</strong> – where every bite tells a story. Born from a passion for flavor and a love for good food, 
            SavoryVerse is not just a restaurant — it's a celebration of culinary artistry. 🌟
          </p>
          <p>
            Whether you're a fan of sizzling street snacks, comforting homestyle meals, indulgent desserts, or refreshing cold drinks, 
            we’ve got a table for you. Our hand-crafted menu brings together the best of traditional flavors and modern taste — all served 
            with warmth and love. ❤️
          </p>
          <p>
            From the moment you browse our site to the last bite of your meal, we want your journey with SavoryVerse to be memorable, 
            flavorful, and truly satisfying. Thank you for being part of our story. 🌍🍴
          </p>
          <p style="margin-top: 20px; font-weight: bold;">
            — Team SavoryVerse
          </p>
        </div>
        <div class="about-image">
          <div class="circle-img"></div>
        </div>
      </div>
    `,
    theme: 'default-theme'
  },
  services: {
    html: `
      <div class="services-section">
        <h2>🛎️ Our Services</h2>
        <div class="service-cards">
          <div class="service-card">
            <div class="service-icon">🍽️</div>
            <h3>Dine-In</h3>
            <p>Experience comfort and ambiance in our cozy seating area — perfect for families, friends, or solo foodies.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🛵</div>
            <h3>Home Delivery</h3>
            <p>Fast, fresh, and right to your doorstep. We deliver happiness wrapped in flavor!</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🥡</div>
            <h3>Takeaway</h3>
            <p>Grab your favorites on the go — all packed with care and ready when you are.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🎉</div>
            <h3>Event Catering</h3>
            <p>Planning a party? We bring the full SavoryVerse experience to your special events.</p>
          </div>
        </div>
      </div>
    `,
    theme: 'default-theme'
  },
  contact: {
    html: `
      <div class="contact-section">
        <h2>📬 Contact Us</h2>
        <p>If you’ve got questions, suggestions, or just want to say hi — we’d love to hear from you!</p>
        <form class="contact-form">
          <div class="form-group">
            <label for="email">📧 Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
          </div>
          <div class="form-group">
            <label for="message">💬 Your Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    `,
    theme: 'default-theme'
  },
  cart: {
    html: `
      <div class="services-section">
        <h2>🛒 My Cart</h2>
        <p>Your selected items will appear here. Cart functionality coming soon!</p>
      </div>
    `,
    theme: 'default-theme'
  },
  veg: {
    html: generateCards('🌿 Veg Delights – Pure Taste, Pure Bliss', [
      { name: 'Paneer Tikka', price: '₹199' , img: './Hero/Veg/paneer_tikka.png' },
      { name: 'Veg Biryani', price: '₹159' , img: './Hero/Veg/veg_biryani.png' },
      { name: 'Palak Paneer', price: '₹179' , img: './Hero/Veg/palak_paneer.png' },
      { name: 'Paneer Butter Masala', price: '₹199' , img: './Hero/Veg/paneer_butter_masala.png' },
      { name: 'Shahi Paneer', price: '₹209' , img: './Hero/Veg/shahi_paneer.png' },
      { name: 'Veg Handi', price: '₹179' , img: './Hero/Veg/veg_handi.png' },
      { name: 'Dal Makhani', price: '₹149' , img: './Hero/Veg/dal_makhani.png' },
      { name: 'Aloo Gobi', price: '₹139' , img: './Hero/Veg/aloo_gobi.png' },
      { name: 'Chole Masala', price: '₹129' , img: './Hero/Veg/chole_masala.png' },
      { name: 'Baingan Bharta', price: '₹139' , img: './Hero/Veg/baingan_bharta.png' },
      { name: 'Mix Veg Curry', price: '₹159' , img: './Hero/Veg/mix_veg_curry.png' },
      { name: 'Kadhai Paneer', price: '₹189' , img: './Hero/Veg/kadhai_paneer.png' },
      { name: 'Veg Kofta', price: '₹169' , img: './Hero/Veg/veg_kofta.png' },
      { name: 'Veg Pulao', price: '₹129' , img: './Hero/Veg/veg_pulao.png' },
      { name: 'Jeera Rice', price: '₹99' , img: './Hero/Veg/jeera_rice.png' }
    ], 'veg'),
    theme: 'theme-veg'
  },
  nonveg: {
    html: generateCards('🔥 Non-Veg Feast – Royal & Spicy', [
      { name: 'Chicken Curry', price: '₹249' , img: './Hero/Non Veg/chicken_curry.png' },
      { name: 'Mutton Kabab', price: '₹299' , img: './Hero/Non Veg/mutton_kabab.png' },
      { name: 'Butter Chicken', price: '₹269' , img: './Hero/Non Veg/butter_chicken.png' },
      { name: 'Chicken Tikka Masala', price: '₹259' , img: './Hero/Non Veg/chicken_tikka_masala.png' },
      { name: 'Mutton Rogan Josh', price: '₹299' , img: './Hero/Non Veg/mutton_rogan_josh.png' },
      { name: 'Chicken Korma', price: '₹239' , img: './Hero/Non Veg/chicken_korma.png' },
      { name: 'Mutton Biryani', price: '₹289' , img: './Hero/Non Veg/mutton_biryani.png' },
      { name: 'Chicken Biryani', price: '₹229' , img: './Hero/Non Veg/chicken_biryani.png' },
      { name: 'Tandoori Chicken (Half)', price: '₹199' , img: './Hero/Non Veg/tandoori_chicken(half).png' },
      { name: 'Tandoori Chicken (Full)', price: '₹349' , img: './Hero/Non Veg/tandoori_chicken(full).png' },
      { name: 'Egg Curry', price: '₹149' , img: './Hero/Non Veg/egg_curry.png' },
      { name: 'Bhuna Chicken', price: '₹219' , img: './Hero/Non Veg/bhuna_chicken.png' },
      { name: 'Mutton Keema Pav', price: '₹199' , img: './Hero/Non Veg/mutton_keema_pav.png' },
      { name: 'Spicy Grilled Chicken', price: '₹249' , img: './Hero/Non Veg/spicy_grilled_chicken.png' },
      { name: 'Hyderabadi Dum Chicken', price: '₹269' , img: './Hero/Non Veg/hyderabadi_dum_chicken.png' },
      { name: 'Masala Fried Chicken', price: '₹229' , img: './Hero/Non Veg/masala_fried_chicken.png' },
      { name: 'Afghani Chicken', price: '₹289' , img: './Hero/Non Veg/afghani_chicken.png' },
      { name: 'Chicken Changezi', price: '₹289' , img: './Hero/Non Veg/chicken_changezi.png' }
    ], 'nonveg'),
    theme: 'theme-nonveg'
  },
  seafood: {
    html: generateCards('🌊 Seafood Sensations – Fresh from the Coast', [
      { name: 'Grilled Fish', price: '₹279' , img: './Hero/Sea food/grilled_fish.png' },
      { name: 'Prawns Masala', price: '₹259' , img: './Hero/Sea food/prawns_masala.png' },
      { name: 'Crab Curry', price: '₹299' , img: './Hero/Sea food/crab_curry.png' },
      { name: 'Tandoori Pomfret', price: '₹349' , img: './Hero/Sea food/tandoori_pomfret.png' },
      { name: 'Fish Curry (Goan Style)', price: '₹259' , img: './Hero/Sea food/fish_curry(goan).png' },
      { name: 'Butter Garlic Prawns', price: '₹319' , img: './Hero/Sea food/butter_garlic_prawns.png' },
      { name: 'Fish Biryani', price: '₹269' , img: './Hero/Sea food/fish_biryani.png' },
      { name: 'Grilled Salmon', price: '₹349' , img: './Hero/Sea food/grilled_salmon.png' },
      { name: 'Fish Tikka', price: '₹279' , img: './Hero/Sea food/fish_tikka.png' },
      { name: 'Lobster Thermidor', price: '₹499' , img: './Hero/Sea food/lobster_thermidor.png' },
      { name: 'Chilli Prawns', price: '₹289' , img: './Hero/Sea food/chilli_prawns.png' },
      { name: 'Bengali Fish Curry', price: '₹279' , img: './Hero/Sea food/bengali_fish_curry.png' },
      { name: 'Tandoori Surmai', price: '₹369' , img: './Hero/Sea food/tandoori_surmai.png' }
    ], 'seafood'),
    theme: 'theme-seafood'
  },
  dessert: {
    html: generateCards('🍯 Dessert Chamber – Where Sweet Dreams Live', [
      { name: 'Chocolate Cake', price: '₹120' , img: './Hero/Dessert/chocolate_cake.png' },
      { name: 'Gulab Jamun (2 pcs)', price: '₹60' , img: './Hero/Dessert/gulab_jamun.png' },
      { name: 'Ice Cream Sundae', price: '₹90' , img: './Hero/Dessert/ice_cream_sundae.png' },
      { name: 'Brownie with Ice Cream', price: '₹140' , img: './Hero/Dessert/brownie_ice_cream.png' },
      { name: 'Shahi Tukda', price: '₹99' , img: './Hero/Dessert/shahi_tukda.png' },
      { name: 'Kesar Pista Kulfi', price: '₹80' , img: './Hero/Dessert/kesar_pista_kulfi.png' },
      { name: 'Strawberry Cheesecake', price: '₹160' , img: './Hero/Dessert/strawberry_cheesecake.png' },
      { name: 'Moong Dal Halwa', price: '₹90' , img: './Hero/Dessert/moong_dal_halwa.png' },
      { name: 'Caramel Custard', price: '₹120' , img: './Hero/Dessert/caramel_custard.png' }
    ], 'dessert'),
    theme: 'theme-dessert'
  },
  icecream: {
    html: generateCards('🍨 Scoops of Heaven – Chill & Thrill', [
      { name: 'Classic Vanilla', price: '₹60' , img: './Hero/Ice cream/classic_vanilla.png' },
      { name: 'Strawberry Swirl', price: '₹70' , img: './Hero/Ice cream/strawberry_swirl.png' },
      { name: 'Butterscotch Crunch', price: '₹70' , img: './Hero/Ice cream/butterscotch_crunch.png' },
      { name: 'Belgian Chocolate', price: '₹90' , img: './Hero/Ice cream/belgian_chocolate.png' },
      { name: 'Mango Tango', price: '₹80' , img: './Hero/Ice cream/mango_tango.png' },
      { name: 'Black Currant Delight', price: '₹85' , img: './Hero/Ice cream/black_currant_delight.png' },
      { name: 'Cookies & Cream', price: '₹95' , img: './Hero/Ice cream/cookies_cream.png' },
      { name: 'Choco Chip', price: '₹80' , img: './Hero/Ice cream/choco_chip.png' },
      { name: 'Roasted Almond Fudge', price: '₹90' , img: './Hero/Ice cream/roasted_almond_fudge.png' },
      { name: 'Paan Ice Cream', price: '₹65' , img: './Hero/Ice cream/paan_ice_cream.png' }
    ], 'icecream'),
    theme: 'theme-icecream'
  },
  snacks: {
    html: generateCards('🍟 Snack Station – Crunch, Munch & Power Punch!', [
      { name: 'Samosa (2 pcs)', price: '₹20' , img: './Hero/Snacks/samosa.png' },
      { name: 'Pakora', price: '₹30' , img: './Hero/Snacks/pakora.png' },
      { name: 'Nachos', price: '₹50' , img: './Hero/Snacks/nachos.png' },
      { name: 'Aloo Tikki', price: '₹25' , img: './Hero/Snacks/aloo_tikki.png' },
      { name: 'Masala Fries', price: '₹60' , img: './Hero/Snacks/masala_fries.png' },
      { name: 'Cheese Corn Balls', price: '₹75' , img: './Hero/Snacks/cheese_corn_balls.png' },
      { name: 'Veg Spring Rolls', price: '₹80' , img: './Hero/Snacks/veg_spring_rolls.png' },
      { name: 'Paneer Pakora', price: '₹70' , img: './Hero/Snacks/paneer_pakora.png' },
      { name: 'Bread Rolls (Stuffed)', price: '₹50' , img: './Hero/Snacks/bread_rolls.png' },
      { name: 'Hakka Noodles (Half Plate)', price: '₹85' , img: './Hero/Snacks/hakka_noodles.png' },
      { name: 'Veg Sandwich', price: '₹60' , img: './Hero/Snacks/veg_sandwich.png' },
      { name: 'Pav Bhaji', price: '₹90' , img: './Hero/Snacks/pav_bhaji.png' }
    ], 'snacks'),
    theme: 'theme-snacks'
  },
  colddrink: {
    html: generateCards('🥤 Cold Drink Den – Sip, Chill, Repeat', [
      { name: 'Classic Pepsi (300ml)', price: '₹40' , img: './Hero/Cold drink/classic_pepsi.png' },
      { name: 'Coca Cola (300ml)', price: '₹40' , img: './Hero/Cold drink/coca_cola.png' },
      { name: 'Sprite (300ml)', price: '₹40' , img: './Hero/Cold drink/sprite.webp' },
      { name: 'Lemon Iced Tea', price: '₹50' , img: './Hero/Cold drink/lemon_iced_tea.png' },
      { name: 'Masala Soda', price: '₹35' , img: './Hero/Cold drink/masala_soda.png' },
      { name: 'Virgin Mojito', price: '₹70' , img: './Hero/Cold drink/virgin_mojito.png' },
      { name: 'Blue Lagoon', price: '₹90' , img: './Hero/Cold drink/blue_lagoon.png' },
      { name: 'Strawberry Mocktail', price: '₹85' , img: './Hero/Cold drink/strawberry_mocktail.png' },
      { name: 'Mango Slush', price: '₹60' , img: './Hero/Cold drink/mango_slush.png' },
      { name: 'Aam Panna', price: '₹55' , img: './Hero/Cold drink/aam_panna.png' },
      { name: 'Mint Lemonade', price: '₹50' , img: './Hero/Cold drink/mint_lemonade.png' },
      { name: 'Rose Milk Shake', price: '₹70' , img: './Hero/Cold drink/rose_milkshake.png' },
      { name: 'Chocolate Shake', price: '₹80' , img: './Hero/Cold drink/chocolate_shake.png' },
      { name: 'Oreo Frappe', price: '₹90' , img: './Hero/Cold drink/oreo_frappe.png' }
    ], 'colddrink'),
    theme: 'theme-colddrink'
  },
  cart: {
    html: '', 
    theme: 'default-theme'
  }
};

document.querySelectorAll('[data-section]').forEach(elem => {
  elem.addEventListener('click', () => {
    const key = elem.getAttribute('data-section');

    if (key === 'cart') {
      renderCart();
    } else {
      const { html, theme } = sections[key];
      content.innerHTML = html;

      body.className = '';
      header.className = '';
      footer.className = '';

      body.classList.add(theme);
      header.classList.add(theme);
      footer.classList.add(theme);
    }

    document.querySelectorAll('aside li').forEach(li => li.classList.remove('active'));
    if (elem.tagName === 'LI' && elem.closest('aside')) {
      elem.classList.add('active');
    }
  });
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('purchase-btn') && e.target.dataset.name) {
    const name = e.target.dataset.name;
    const price = parseInt(e.target.dataset.price);
    const img = e.target.dataset.img || './Assets/food-placeholder.jpg';
    cartItems.push({ name, price, img });
    alert(`${name} added to cart! 🛒`);
  }

  if (e.target.classList.contains('purchase-btn') && !e.target.dataset.name) {
    alert("Thank you for your purchase! 🎉");
    cartItems.length = 0;
    renderCart();
  }

  if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
    const index = parseInt(e.target.dataset.index || e.target.closest('.remove-btn').dataset.index);
    cartItems.splice(index, 1);
    renderCart();
  }

});

document.addEventListener('submit', function (e) {
  if (e.target.classList.contains('contact-form')) {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will get back to you soon. ✨');
    e.target.reset();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const { html, theme } = sections.home;
  content.innerHTML = html;

  body.className = '';
  header.className = '';
  footer.className = '';

  body.classList.add(theme);
  header.classList.add(theme);
  footer.classList.add(theme);
});