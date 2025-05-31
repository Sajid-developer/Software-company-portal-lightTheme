console.warn("Its working fine...");

let swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });