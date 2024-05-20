let menuItem = document.querySelectorAll(".meni-item");

function active(i){
    menuItem.forEach((item)=> item.classList.remove('active'));
    i.classList.add('active');
}

let productsObj =[
    {
        id:0,
        title: 'Forest',
        price: 200,
        image: '../images/p1.jpg'

    },
    {
        id:2,
        title: 'Forest Kie',
        price: 200,
        image: '../images/p5.jpg'

    },
    {
        id:1,
        title: 'Tree',
        price: 400,
        image: '../images/p2.jpg'

    },
    {
        id:3,
        title: 'Breeze',
        price: 300,
        image: '../images/p3.jpg'

    },
    {
        id:4,
        title: 'Forest Road',
        price: 200,
        image: '../images/p4.jpg'

    }
]
let slideImages = [
    '../images/p1.jpg',
    '../images/p2.jpg',
    '../images/p3.jpg',
    '../images/p4.jpg',
    '../images/p5.jpg'
    
]

let productDiv = document.querySelector('.products');
productsObj.forEach((product) => {
    let productItemDiv = document.createElement('div');
    productItemDiv.classList.add('product-item');
    productItemDiv.innerHTML = `
    <img src="${product.image}" alt="forest" class="product-image">
    <h3 class="product-title">${product.title}</h3>
    <p class="product-price">$${product.price} </p>
    `;
    productDiv.appendChild(productItemDiv);
    // productDiv.innerHTML += `
    // <div class="product-item">
    //     <img src="${product.image}" alt="forest" class="product-image">
    //     <h3 class="product-title">${product.title}</h3>
    //     <p class="product-price">$${product.price} </p>
    //     <button class="cart-button" type="button" onclick="addToCart()">Add to Cart</button>
    // </div>
    // `;
})



