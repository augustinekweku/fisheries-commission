import Script from "next/script";

const CustomScript = () => {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        type="text/javascript"
      ></Script>
      <Script src="/assets/js/bootstrap.min.js" type="text/javascript"></Script>
      <Script
        src="/assets/js/jquery.fancybox.min.js"
        type="text/javascript"
      ></Script>

      <Script
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/vendor/php-email-form/validate.js"
        type="text/javascript"
      ></Script>
      <Script src="/assets/vendor/aos/aos.js" type="text/javascript"></Script>
      <Script
        src="/assets/vendor/glightbox/js/glightbox.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
        type="text/javascript"
      ></Script>
      <Script
        src="/assets/vendor/swiper/swiper-bundle.min.js"
        type="text/javascript"
      ></Script>
      <Script src="/assets/js/main.js" type="text/javascript"></Script>
    </>
  );
};

export default CustomScript;
