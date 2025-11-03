let quantity = document.getElementById("quantity");
let totalCost = document.getElementById("totalCost");
quantity.addEventListener("input", function() {
    let userQuantity = Number(quantity.value) * 5;
    totalCost.textContent = `Total: $${userQuantity.toFixed(2)}`;
});