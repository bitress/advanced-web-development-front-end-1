var alcel = {
    Utils: {},
    iceCreamFlavours: [{
        name: 'Vanilla',
        image: 'https://previews.123rf.com/images/gtranquillity/gtranquillity1509/gtranquillity150900003/44829643-vanilla-ice-cream-scoop-scooped-out-of-container-with-untensil.jpg',
        price: '₱50.00',
        description: 'This creamy, delicious classic vanilla ice cream puts the "oh!" in pie a la mode. Our rich vanilla ice cream delivery is the perfect sidekick to almost any dessert, but is also perfectly delightful on its own. Made with real cream, our rich and smooth vanilla ice cream turns any day into a celebration.',
    },
    {
        name: 'Mango',
        image: 'https://culinaryshades.com/wp-content/uploads/2022/03/mango-ice-cream-sqr01-500x500.jpg',
        price: '₱50.00',
        description: 'Mango Ice Cream is rich, creamy, and bursting with fresh mango flavor.',
    },
    {
        name: 'Mint',
        image: 'https://www.willflyforfood.net/wp-content/uploads/2022/05/ice-cream-flavors-mint-chocolate-chip.jpg.webp',
        price: '₱50.00',
        description: 'Summer pool parties call for ice cream, especially the creamy, chilly blast of mint. It’s just the right amount of sweet and better than a blast of air conditioning to cool the family off. Brrrr. Delicious.',
    }]
}


alcel.Utils.calculate = function() {
    const selectedSize = document.querySelector('input[name="iceCreamSize"]:checked');
    const selectedToppings = document.querySelectorAll('input[name="topping"]:checked');
    const quantity = document.getElementById("quantity");
    const pricePlaceholder = document.getElementById("total_price");
  
    let totalToppingPrice = 0;
    let finalPrice = 0;
  
    let sizePrice = parseInt(selectedSize.value);
  
    totalToppingPrice += sizePrice;
  
    selectedToppings.forEach(checkbox => {
      totalToppingPrice += parseInt(checkbox.value);
    });
  
    finalPrice = parseInt(quantity.value) * totalToppingPrice;
  
    pricePlaceholder.textContent = `₱${finalPrice}`;
  }
  
  function incrementQuantity() {
    const quantity = document.getElementById("quantity");
    quantity.value = parseInt(quantity.value) + 1;
    alcel.Utils.calculate();
  }
  
  function decrementQuantity() {
    const quantity = document.getElementById("quantity");
    if (parseInt(quantity.value) > 1) {
      quantity.value = parseInt(quantity.value) - 1;
      alcel.Utils.calculate();
    }
  }
  
alcel.Utils.updateIceCreamPlaceholder = function(radio) {
    const flavour = radio.value;

       const selectedFlavor = alcel.iceCreamFlavours.find(flavorInfo => flavorInfo.name === flavour);

       const iceCreamImage = document.querySelector('.icecream-image img');
       const iceCreamName = document.querySelector('.icecream-name h3');
       const iceCreamPrice = document.querySelector('.icecream-price');
       const iceCreamDescription = document.querySelector('.icecream-description p');
   
       if (selectedFlavor) {
           iceCreamImage.src = selectedFlavor.image;
           iceCreamName.textContent = selectedFlavor.name;
           iceCreamPrice.textContent = selectedFlavor.price;
           iceCreamDescription.textContent = selectedFlavor.description;
       }


}