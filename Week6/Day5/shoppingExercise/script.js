// # Exercise

// Create a shopping List

// 3. Using a self invoking function, and using the DOM - 
// add the products to the page and make them clickable.

// 4. The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage. Each item is an object containing the name of the product and the price.
// 5. When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor) and it will redirect him to another HTML page. This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought and the total price he needs to pay as well as a "Submit payment" Button
// 6. When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.


const products = [
        {
            id: 0,
            name: "Deluxe Bicycle",
            url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
            price: 499.98
        },
        {
            id: 1,
            name: "Super Deluxe bagpack",
            url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
            price: 134.99
        },
        {
            id: 2,
            name: "Super Duper Scooter",
            url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
            price: 1090.95
        },
        {
            id: 3,
            name: "Smartphone",
            url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
            price: 399.99
        }
    ];

//self invoking function
(function () {
    const container = document.getElementById("container")
    products.forEach(prod => {
        const {name,url,price} = prod;
        //create the elements 
        const cardProduct = document.createElement("div");
        const imgProduct = document.createElement("img");
        const nameProduct = document.createElement("p");
        nameProduct.id = "name";
        const priceProduct = document.createElement("p");
        priceProduct.id = "price";
        const btnProduct = document.createElement("button");
        btnProduct.addEventListener("click", addProduct)

        //detail the elements
        imgProduct.setAttribute("src", url);
        imgProduct.style.width = "50%";
        const textName = document.createTextNode(name);
        const textPrice = document.createTextNode(price);
        const textBtn = document.createTextNode("click here");
        nameProduct.appendChild(textName);
        priceProduct.appendChild(textPrice);
        btnProduct.appendChild(textBtn);

        //append all the element to cardProduct
        cardProduct.style.border = "2px solid black";
        cardProduct.appendChild(imgProduct);
        cardProduct.appendChild(nameProduct);
        cardProduct.appendChild(priceProduct);
        cardProduct.appendChild(btnProduct);

        // append the card to the container
        container.appendChild(cardProduct);
    })
})()

let allProducts = JSON.parse(localStorage.getItem("products")) || []

function addProduct (event) {
    const priceP = event.target.parentElement.children[1].textContent;
    const nameP = event.target.parentElement.children[2].textContent;
    //create obj
    const objProduct = {
        name:nameP,
        price:priceP
    }
    //push to array
    allProducts.push(objProduct);
    //add to localstorage
    localStorage.setItem("products", JSON.stringify(allProducts))
}