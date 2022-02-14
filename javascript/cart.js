const outputQuantity = document.querySelector(".quantityOutput");
const increaseQuantity = document.querySelector(".quantityIncrease");
const decreaseQuantity = document.querySelector(".quantityDecrease");

var quantity = 1;
decreaseQuantity.disabled = true;
// for (let i = 0; i < NodeList.length; i++) {}
increaseQuantity.addEventListener("click", () => {
    {
        decreaseQuantity.addEventListener("click", () => {
            if (quantity === 1) {
                decreaseQuantity.disabled = true;
            }
        });

    }
    quantity += 1;
    outputQuantity.innerHTML = quantity;
    if (quantity > 1) {
        decreaseQuantity.disabled = false;
    }
});
decreaseQuantity.addEventListener("click", () => {
    {

        if (quantity >= 1) {
            decreaseQuantity.disabled = false;
        }
    }

    quantity -= 1;
    outputQuantity.innerHTML = quantity;
});