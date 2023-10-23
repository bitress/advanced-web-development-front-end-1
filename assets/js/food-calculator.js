var alcel = {
    Utils: {},
    iceCreamFlavours: [{
        name: 'Vanilla',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGRgYHBwaGBgaHBgYGBgYGhgaGhkYGhkcIS4lHCErHxgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHDQkISs0NDQ0NDQ0NDQ0NTQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0Nf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EAEEQAAEDAgQDBAcECAUFAAAAAAEAAhEDIQQSMUEFUWEicYGREzKhscHR8AYUUuEVQmJykqKy0iMzU4LCFkNz4vH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACERAQEAAgMBAAMBAQEAAAAAAAABAhEDITESIkFRE7Fh/9oADAMBAAIRAxEAPwD64EZUCBVQCUAUVEBlQIFQBAUCooUCBMoigARSpigSnqVcqWCCU7XoHVT5lWoFBnaOyUKEq5oULQEUYUVZBTyiIilJRQRRRBAYUQRCKBUaoQlYgdRRREGVCVEoKBlEFAgDnQi0ooIIFM0ohBAVFAggCKUJS+UDMcJRJVQN0zCinJQKICiBJsFAwnVNlTFBAUFAgEBhFBRAUCioEEhAKSgEDFIEX6FVtBIDpvGmyC1RU/eAgiNCiqfiWghpIk6DcpmVAbboGzKShKKAygiUEBlQqBBAUCUUCUEASvarA1MWIrO1mqeITBkTfVHKoACoVAEVURApkrkAQF00KIqKIBFEBEJXSoEVHtkQi0QEVERCstfChzS2SO4kLUgQorm/ohnN38RUW7KoiFfhwTmgZhod07GQjCaVQCo1BFqAgIkoIoIpCgRaJQDIToVa1gCaICU6LNrWkJQdCBN4Ucye4KbVnc/tEXzdRaNoWLG4vJEOMxMRte+vRPi8SGuLS3UQXcx0jRcZ1NuaSMw7yCIEtuNdlyud8bmLs4DirHgCQDsdj8lvL4Er54/CtpmGve0z2RLcnWCb6ddl6ThHEX+o8ZR+pLmkmPWbbktYclvWUZzxk7jv0ngifemKysxU2AJKsbVPI+S7OUu1qCUP6FEPB0hFOEFAhCCFAhMUCgCKUIkIoNKKRrQjogiiOZBEV4eqXTIgA2vqrCsmAnL3rWQpPFvo2UhKBdFVDOJ8EVXVqNYJd+ZXKxPEC6wsOSJctOk/EtbvJ6K7BVS4F20wF50Plei4cP8ADb1BPmSpUxy3WhyUpyFFHRWQlqG0azrCqxNch7WjeST0VwCxvdsXWnOfhs1SHNGQAQbhxPXuj2rk42q9rntAdlZv0ibHeF6J4+uq5uNFisXHTUryeOxLtZn2j2rNQxBc5rssFtswMRBBsNOR5XV3GKWTtD1XGCNmu2joVhwz7wNFzyy+ZtvGbr3+DxYcwOkMuRfeLkg76qO4gCbSdlysS3sMYwX0zmQLwTPmuxwzCNY0Ze07dxufyTDPLK/9MsccYeXZSYPduue/FQ4/RXZqG0c9e5M0hwgjSxXoxklcct2OXS4gRr7V0KdcOVXEsNnaACAQZkifBc99N1OIOYb20PUXXXqud+sf/Y7Kix4bFArYCppZlsCgi5LKKKkKFRAJUUUQVtZlgNVxRaBZByBSUteqGNzO0G3Mpw1cHjWKzOyjRth80tTK6ijE4wvcSfAKlrlllWsKy5W7amuXp+GOmm3ujyJC8owr1HCR/hNsRrr36jojWHrYSkc6xRcdzsqhXbuQJ5mPBZyyk9rvJTuYD2kxSEnML2jT3XTJCq3rn4ttvrVdFywYkWWcljzOPAcXMcTleIO3aix8DdcHAsh+V3cfJd7iTLzyuuawA1MwHIx1yiV58q64x0sdxRtSs1tN8UqQh7zZvK3Ow2Xp8LiW5GlhzAgZTMyDoZXyihg3VKppZoYHnMBa06DrcL6nw+hkgQBYBotYDfzWeG5brXJJJHQps5678/FUB5zuEWMe6Fqa3dJUYvX5Hn/bM58Fc/iGI9G4W7LhaPct9UXXG47Jpa3a9sdxsVPrS6Oa4ILmkSLkaEjfxXSwGLDxqvMYbEgPaHaOMT4b+5aMNihTrlgNiZaNxMSPNdOPOZdOPJPmyzx6qVAVW90EH8Q9o/I+xFo3vdbaOXaKEpQ63sRaUBlRSSogNMmBm1i6cpWsMyTIiw5c00RrzUVXXqZWudyHt0Xkaj5JK9Xj703xy+K8i9SuWdVlOwpqVHNcqz0bQoxqr8BVY10uaXAaAc9ivXzoVxeC4KwqOFv1B/yPwXaadVNu2GNkK4A6rzlWi84h2btNb6rtA1pExGhPXou/iGE7TGg0EpKTSRLhfcajz3Xl58JyWTzXb08eXzujQbAVzjfuSOtrbkkMkwNviukvzNMWb7O7SVgxT7G1o9Y7eC6D2k7x4SfAqiphGuHabm/eJPs0VymV8MbJ68TxXiDfUJbbWDreYP0dFzqeJDQXk6AunuuvoLeHU22bTYO5jRHsWDEcAw72ZX02wZBgFhvtLYOi43hy/rpOTH+PE/Y2iXuNXUkk36un67l9KwgsJ10K4GF4CyiCKLiJEAOuJ2g6+9djA9hoadRreZPMnda48Lje0zymXjcTCZ7lS56VlSfqxXfblotdu642OFiDoV2neqQPr6lcfFgEho8Vmw3pwq+CyPDom7YPISfms/EmH79h3DR4cD3tgj3nyXU4tUhneWtH8XyXLpvz4umP9NjnHvcYHs96vHNZ6jjyZbx7e2rPtS6vj+Sp8lY5x2A+SxuqTWps/wBNhe7o94ytHlnWwruuPhgFm9E4VM+Y5bCJt5J62JDACQbmLXhSlWDxmbIHURoo0vlRV+kHNRBsaiQkaE2ZAHtkEHQ2PivHYygWPcw7HzGxXtFzeKYD0gkes3T9ocvkozljt5ipWyCBrujwmmatQNPqi7u4beNgsnEgQSDY7rp/Zohrc27vcDosW6m2MZvKR65hTys7Hyr2uUlegUptomQeLKZeEY21nF+XKLQcw2trHitwEaJKbYHXdWqceNxn5XdXKy+FKBUgpBUEgGxOnVbtQlRs+5VkeEnbynvV41KoEOeQDoBItvKzSOdiXGZgiSY6RZJ94y2O/gPFaX5gPGPf+Sw4qvlEEA9CPFZ20qrYx7DYtLXGGmTb9nruhj+NtpAjMC7L2GgSS7ZoBI6brK4tLSBYHblyPevF4So4491WoHNNEZAwukF50c2dGkZXd8eGMtzyrjq19KwrstFoDy8mXOfaXuJueQvaNojZZqrpMdL9/esdTF2awHQBB+IDWlzjEX6d5WpXLO7rHxjFMZ23kZaYzdS7YALnfZA5WVMbW/XeSxu7yPVYOk3XMdQfi4rYgmnhZzNbpUr3sGA6NO7+tp26+GqmtVY3KAxgGVjbNYwaNHU8+q7YTXblZ9WR67hFJwYXvu+oc7uk6DuAhdBzkvyQfzXR0YseCQPP4XT4B/ZIjTfa6eoZkRqI8VXhsJBMnXlKzrva7/HTRlcgmzDn7Sgqy6UKQopCKJKR/NOpCDl8U4UyuPwvizvmN159mFqYeA9tgSA4XaZMi+3ceS9c9sFTNIgiQs5Y7iTq7c3B4qRH1C30quyz1eGsddhLD008lKeFe0iYI0JHLxXL5yjpMpW4PTpQ5Alb1oOlfOyAfug9x2UvcIAruHrAeBv4hYOMucabsupBg/htYiLzN1pzEu6AX70mGo5GkFxdJJE6NB2C4X6u8f1d9uk1O3Br8dq0WzVGYltsmhiN4sbytH2exGeakyX9ZtyWTEvbXqBgjs7955dU7MIKchrjrcC2W35Lh9Z43e9yO3zjZry13hQ5mYObxiIWTHUszXWmffz71x6Nd5rsp+keBBJuDMR2bi2syvSOpWAFgBEnbqu/Fy/6S6jjnh8+15ipTy9y87xuiG1mVokkZT3tu2eep8l67GBjZzPa1oPe42A002nVef4jxjDizafpCDINT1Z55dD4yu047lO3nucxu5VnCA57pg5dXPNmDvcbT0VXEsXQY4wTXfyfHomnnlA7fjbouHj+MValnPho0Y2zQOUBYGvJW8eKTuueXL/HQxWNfUcXPcXOO/LoBsF6jgmE9GwOcDmqX0JgC4HTmuN9muEmq+T6rbuPuHivZVsVkdlY2cok5pa2IsGuXTLUjXHLbt0A8mIFuflsmIWXCYgPbAuRdwm4Jvvt1V7jpaOusCOSNs+Pb2bOLSJdmaJIDROkX5eKy4DEkNcS5zy0i5IBDTYxlFyIJhaMa0EHM8NblOZxtA1kkEWsVzcLlzDtloO4MAz6oNtDZZt1Y1jNytv3lnN/8D/kgj93f+N/8n9qCu2dPRhEpSEwCgIUQhRFRzZWdzYWhB7ZVZs2zyiHkIPEKslVjxb6bmFDUbyVBKRzlfmH1Y05xGqUuERJWRzlU5ynxKf6WNwc0LPjGNeAC8gDlG6wvesr3lP8sfNM3myjTTwlFjswc6YjUbeCV+KotJMSTcySZK5tZ6wVnJOHD+JefL+uriePAGWtE84AMd642M45Ud+tCyVisdVamMnjFzyvtV4nFOdqSe9YHvJV7wq8qrO1TWrbgsKXm3junwWDe9waxsn3DmV7CjwoU2BrC1zie24yHEjRjARAbrvNuqzbqN4Y/V7HDYSoxuWm/KwkRDWOa6QLucQTM8jb2rpYt4D3AjUAzsZEGP4Vn4NLGPiBF8kQQ7KS4nv+C24nC5m9k3gATZsctFz1ubeyaxuhw+Fa05g0kkR2sttDqbrWHDlHiB7lmr1XtYHBmd1gWtIBOxIJF/GFoaO8eAW5NMW7Y8e+GPFhYiSCRJ0BPisVChDm5ngOjMG2kidYO1lZx98MJJIFrjeCDBBsZGkrNgatBlSocwBeZzE5Q5wmxJ3HlyWbJtZbJdOvnP7P14qLmf8AUOG5/wAj/wC1RXpO3rD9XRaUp1TAKAqIGUUE3UlK5wTSgR7VRUpwtBQKsSzbE5VOK1Ppg6LM9kKyueU0pe5UvKseqHlbjnVb3LK9ytqFZnlViqKpWGqtjysdZ6rDDVcsrwtOIeAJWCtigBKig8LXwrhb6zrdlg9Z8EjuA3K8tjuMmYbppPPuXtuB8U7IbaGgWMC+XYdL3lY2644f16jhuHZRYGsa79p0Xd1mx8FrouysEvzc3nUySdBbouPQqTGYH1bvEkAneIIg8gfALV6UZXZ3iBOgJI8BaI2KO86ec4t9sGMqPNOm85JY+pl/wwZIJcJBdfder4PxMYiiysycr2gw4Zb7kTqvLcUwlAOawMOUNzODi7KHOItlEC0+EyvTYCq1lJjGwBkECwgFoOg02ssz1q+Nge4DQeFx9aJ6dSTl5QNb6axskFXS+xjaSo5rXG46DXvNx3Kh6zezA5789N15htNpgVR6QGMxcdAOYAh3ivS1GBoEG3VzjECdz0XEw+FecmcEueM7ydMwPqgC2wEbCNVmtR1fubfwN8v/AFUVf34fhf5BRNRNvREe/wCvemQ2RlEQoSiSllASFGi6koOKCOKR7kXFVuKokqlzE5KWUZrLVYsdRhXSfBCzVaZGxPdB9isyjlljXMqrHVct+IIGsjQXDhcmAJI3JhYcSzu8wtyz+udxy/jDWqLm4qvYrViKTzoD4An3Bc+twuo7aOpttO9/YlyiTHK/pycXjgBErzeP4gSdfBd79EOdXfScbNZm7O57NpOoh02uuVxrhAZVygWIY4b2MgTOpOUrllm74cXfbmYfDueQ46be5eu4Swsi2u8dZtHcU3CuHDI3WxdPSHkfAldehhY9kdxTG/trL3Tfg3na0TETEnmATczf3c7cM8vdJc0NY8C7nOLzlzD+phiBfmph6F9NI5LoYNrg0DNAm4ETIMXt0WiGoUw6z8jjbK4kOgZgSAPxWF10mOPgD7htfxVYb2gZAsR4mDOvRXsFzciYda19Dt0CNncSGz05p2U9LaCDOp3JUFMGDcwRc38ferSzeBJIkxtMD66oI6lcdJ7tI+K5xrj0jGNAkh7jqcrQctuXa26FdQs7vJefZSyVHvE5nOgnKO0AIHIEkQs5XS4zbo+kZ+H681Fi+9nkop9L8V60IpXFEKsiQlTFKgRxuLbG/LT68ESpKqcDb4z8FQxclJRc5IVGQKQH8kXmyBKBXJCU5KqL4dEWj1pHrTERry80NMvEqgawk6Ag/wAJDifYnxEz4rJxKX4erHZ7FS7tQQHD4LoVAFNrpjfTMLM6hf65WK6ZZdV+j17/AGfQIRnTy9HCNNepa7A0aa5w3ryY0ea5v2m4ewRUcSHAAANAlzQ5skde37O9dzhIzYnESc05cptduepliLRlygdAs32uwxLGuEWDrcpiD10I/wBwWL5a6SflHN4BTLm1QY7Lg60WzNuPMFdv7tEjuP11sufwSmWvxGUZ+wxzR6ucxoJ6yF38O1zu05mW3ZGYOsNDb94hXC9JyY/krw+HEm3y1Kso0xBAEi94tcyb+JWl1O0c4HiTH5q17CNI2HcJE+xbZ0LGbwbd3zVkGQYtcecH4Ilo9o67q2JPQHzt+aqw2WBcm31pCYCzQefukj3IN9bbTxube4qx2re//iVFBcbF4Qlwe4lwL3dk+qA1pgxzhntXdB+vgs1c6CPWcLHQ7x5AlSzay6U/oyny/kp/2qI/pA82+X5qJqH06zgiEOSIVRHKuUzwq2oI4pXFEpHiQQDBO/JASkLRrF9CbTHJJScYh0yNzEu62sjKJUcgFJQlERJO/MfmiTIKVyDnY1p+71W7ltUA7Cc8Tda6ZlrTe4m+0o1h2XdQfcUMK3sM/daR5BZs21KtaLzzHzSxeRyHx+aY/NK2fYO+b/krGXHweHy4qplMNaxoyiA2HQRYaR2o71bxzCB9F+mZrS4GOQMjxEjxWilhy2q99oeGRGvZBBkRbVJRZUFSoXuOQRkFvVgEkHvkeamutN772wYDAuZiakthjmAMOxvca7cuvctlJzvTPYfVFNhbYWJcZv8A7Vsyjs29XTuMfJUsrNLyGm92uHIi+/PmprSW77XuFx0M/D4qqq93pWNtkLXk88wyx4QVe0Xvyj2hBrQYO7SRPQj/AOeS0kW6/XIo0TLR1E+d49qRgueiZjrDpbyMKqsYCCb2tA/D8+asbfmqi7p9Sma4ye/4D80FgKocA5zXWhpMk63EW6I5JmTr7NEWEG0iAfOAgw+ibyH8IUXQyN5DyUU1Tp0AgFFFQh1Su0UUQI5IVFECFA/H4FRREB2iDN/rYKKIhXfH4oOUUUCP08PgEuH9UdwUURoXahOooqyyD/Nf+43+p6uqa/XVBRRqi74/8Vgp/wCcf3D/AFNUUUpP23lEfEKKKoLdT4JqOnif6iooqp3/ABHvTt37/koogV2q5XAv+9/5n+9RRS+xf06yiii0j//Z',
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
        image: 'https://feelslikehomeblog.com/wp-content/uploads/2022/02/Mint-Chocolate-Chip-Ice-Cream-recipe-FB.png',
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