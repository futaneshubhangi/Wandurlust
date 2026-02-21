// ================= BOOTSTRAP FORM VALIDATION =================
(function () {
  'use strict';

  // Fetch all forms we want to apply validation to
  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

console.log("✅ Validation script loaded");


// ================= TAX TOGGLE (GST + / night) =================

const taxSwitch = document.getElementById("taxSwitch");

if (taxSwitch) {
  taxSwitch.addEventListener("change", () => {
    const prices = document.querySelectorAll(".index-price");

    prices.forEach(priceEl => {
      const basePrice = Number(priceEl.dataset.price);
      if (!basePrice) return;

      const gstAmount = Math.round(basePrice * 0.18);

      if (taxSwitch.checked) {
        // Show original + GST + / night
        priceEl.innerHTML = `
          ₹ ${basePrice.toLocaleString("en-IN")}
          <span class="price-unit">
            + ₹ ${gstAmount.toLocaleString("en-IN")} GST / night
          </span>
        `;
      } else {
        // Original price
        priceEl.innerHTML = `
          ₹ ${basePrice.toLocaleString("en-IN")}
          <span class="price-unit">/ night</span>
        `;
      }
    });
  });
}