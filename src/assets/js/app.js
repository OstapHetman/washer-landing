const phoneMask = new IMask(document.getElementById("phone_number"), {
  mask: "+{38} (000) 000-00-00"
});

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a.smooth-scroll").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

const catalogBtns = document.querySelectorAll(".catalog_btn");
const modalHidden = document.querySelector("#catalog_product_hidden");
catalogBtns.forEach(btn => {
  btn.addEventListener("click", function(event) {
    let productName = event.target.getAttribute("data-name");
    modalHidden.value = productName;
  });
});
