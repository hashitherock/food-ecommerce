(function() {
  'use strict';

	/* ====Sticky Navbar Start==== */
  $(function(){
    var myNav = $('.navbar');
    $(window).scroll(function(){
     if($(window).scrollTop() <= 50){
      myNav.removeClass('sticky-nav');
    }else{
      myNav.addClass('sticky-nav');
    }
  })
  })
	/* ====Sticky Navbar End==== */

  /* ====Mobile Navigation Start==== */
    // Get all the navigation links with dropdown
  const dropdownLinks = document.querySelectorAll('.mobile-navigation-menu li.dropdown > a');

// Add click event listeners to the links
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const parentListItem = this.parentElement;
      const dropdown = parentListItem.querySelector('ul.dropdown-menu');


    // Toggle the dropdown visibility
      dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
      

    // Toggle the plus/minus icon
      parentListItem.classList.toggle('open');
    });
  });
  /* ====Mobile Navigation End==== */

	/* ====Button (Scrolling Bottom to Top) Start==== */
  var mybtn = document.getElementById('scroll-bottom-top');
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
     document.body.scrollTop > 50 ||
     document.documentElement.scrollTop > 50
     ) {
     mybtn.style.opacity = '1';
 } 
 else {
  mybtn.style.opacity = '0';
}
}
mybtn.addEventListener('click', topFunction);

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
/* ====Button (Scrolling Bottom to Top) End==== */

/* ====Student Review Section Start==== */
$('#hot-deal-discountProduct').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 30,
  items:3,
  dots: false,
  smartSpeed:1000,
  responsive:{
    0:{
      items:1
    },
    480:{
      items:1,
      nav:false
    },
    768:{
      items:1
    }
  }
})

/* ====Student Review Section End==== */

/* ====Product Quicview Mini==== */
$('#product-quickView-mini, #product-quickView-mini2').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1000,
  adaptiveHeight: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      autoplay: false
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      autoplay: false
    }
  }
  ]
});
/* ====Product Quicview Mini==== */

 /* ====Testimonail Start==== */
$('#testimonial-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  adaptiveHeight: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: false
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: false
    }
  }
  ]
});
/* ====Testimonail End==== */


/* ====Quantity Cart Start==== */
const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const quantityInput = document.getElementById('quantity-input');
    const addToCartBtn = document.getElementById('add-to-cart-btn');

    let quantity = 1;

    function updateQuantityDisplay() {
      quantityInput.value = quantity;
    }

    decreaseBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
      }
    });

    increaseBtn.addEventListener('click', () => {
      quantity++;
      updateQuantityDisplay();
    });

    quantityInput.addEventListener('change', () => {
      const inputQuantity = parseInt(quantityInput.value);
      if (!isNaN(inputQuantity) && inputQuantity >= 1) {
        quantity = inputQuantity;
      } else {
        updateQuantityDisplay();
      }
    });

    addToCartBtn.addEventListener('click', () => {
    // Replace this with your actual cart logic
      alert(`Added ${quantity} item(s) to the cart.`);
    });

  // Initialize quantity display on page load
    updateQuantityDisplay();

/* ====Quantity Cart End==== */


 







})()