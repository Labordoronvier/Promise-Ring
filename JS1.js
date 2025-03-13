function addToCart() {
    alert("The ring has been added to your cart!");
}

document.addEventListener("DOMContentLoaded", function() {
    const ringImage = document.querySelector(".about img");
    
    ringImage.addEventListener("mouseover", function() {
        ringImage.style.transition = "transform 1s ease-in-out";
        ringImage.style.transform = "rotate(360deg)";
    });

    ringImage.addEventListener("mouseout", function() {
        ringImage.style.transition = "transform 1s ease-in-out";
        ringImage.style.transform = "rotate(0deg)";
    });
});
