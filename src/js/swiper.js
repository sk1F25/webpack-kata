export function sliderSwiper () {
  let brandSwiper = 0;
  let repairSwiper = 0;
  let priceSwiper = 0;

  window.addEventListener('resize', windowResize);
  swiperInit();
  windowResize();

  function swiperInit() {
    if (!brandSwiper) {
      brandSwiper = new Swiper(".brand-swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".brands-pagination",
          clickable: true,
        },
      });
    } if (!repairSwiper) {
      repairSwiper = new Swiper(".repair-swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".repair-pagination",
          clickable: true,
        },
      });
    } if (!priceSwiper) {
      priceSwiper = new Swiper(".price-swiper", {
          slidesPerView: "auto",
          spaceBetween: 16,
          pagination: {
            el: ".table-pagination",
            clickable: true,
          },
        });
    }
  }

  function windowResize() {
    if (document.documentElement.clientWidth < 768) {
      swiperInit();
    } else {
      swiperDestroy();
    }
  }

  function swiperDestroy() {
      brandSwiper.destroy();
      brandSwiper.disable();
      brandSwiper = 0;

      repairSwiper.destroy();
      repairSwiper.disable();
      repairSwiper = 0;

      priceSwiper.destroy();
      priceSwiper.disable();
      priceSwiper = 0;
    }
}
