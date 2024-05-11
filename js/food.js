const cats = [
    {
        name: "Burger",
        img: "./css/img/147679-burger-non-veg-photos-king-hq-image-free.png",
        products: [
            {
                name: "Cheese Burger",
                waight: "120g",
                price: "13$",
                img: "./css/img/147679-burger-non-veg-photos-king-hq-image-free.png",
                quantity: 0
            },
            {
                name: "chicken-deluxe",
                waight: "120g",
                price: "13$",
                img: "./css/img/147679-burger-non-veg-photos-king-hq-image-free.png",
                quantity: 0
            },
            {
                name: "spicy chicken",
                waight: "120g",
                price: "18$",
                img: "./css/img/147679-burger-non-veg-photos-king-hq-image-free.png",
                quantity: 0
            },
            {
                name: "big jhon",
                waight: "120g",
                price: "20$",
                img: "./css/img/147679-burger-non-veg-photos-king-hq-image-free.png",
                quantity: 0
            },
            {
                name: "Cheese Burger",
                waight: "120g",
                price: "13$",
                img: "./css/img/147679-burger-non-veg-photos-king-hq-image-free.png",
                quantity: 0
            },
            {
                name: "Cheese Burger",
                waight: "120g",
                price: "13$",
                img: "./css/img/147679-burger-non-veg-photos-king-hq-image-free.png",
                quantity: 0
            },
        ]
    }
];

const opcont = document.querySelector(".options-container");
const cat = document.querySelector(".food_container");
const apply = document.querySelector(".overlay");
const meal = document.querySelector(".meal");

function optionsrender() {
    const head = document.querySelector(".head");
    head.innerHTML = `
    <div class="back" onclick="catShow()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
        </svg>
    </div>
    <div class="title">
        <h1>Burger</h1>
        <div class="title-icon">
            <img src="./css/img/147679-burger-non-veg-photos-king-hq-image-free.png" alt="">
        </div>
    </div>
    <div class="order" onclick="showtotal()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
    </div>
    `;

    cats[0].products.forEach((product, index) => {
        opcont.innerHTML += `
            <div class="option col-12 col-md-6 col-lg-4" onclick="showapply(${index})">
                <img src="${product.img}" alt="">
                <h2>${product.name}</h2>
                <span class="waight">${product.waight}</span>
                <span class="price">${product.price}</span>
            </div>`;
    });

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('mouseover', () => {
            option.querySelector('.price').style.color = '#e6e5e4';
        });
        option.addEventListener('mouseout', () => {
            option.querySelector('.price').style.color = '#ffc400';
        });
    });
}

function catOptionsShow() {
    cat.style.display = 'none';
    optionsrender();
}

function catShow() {
    cat.style.display = "flex";
    opcont.innerHTML = "";
    document.querySelector(".head").innerHTML = "";
}

const quantity = document.querySelector(".quant");
let numOfOrder = 1;

function showapply(index) {
    const product = cats[0].products[index];
    apply.style.display = "flex";
    quantity.textContent = product.quantity;
    meal.innerHTML = ` <div class="meal-img">
    <img src="${product.img}" alt="">
    </div>
    <span class="meal-name">${product.name}</span>
    <span class="meal-waight"> ${product.waight}</span>
    <span class="meal-price">${product.price}</span>`;

    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");

    plus.onclick = () => {
        product.quantity++;
        quantity.textContent = product.quantity;
    };

    minus.onclick = () => {
        if (product.quantity > 0) {
            product.quantity--;
            quantity.textContent = product.quantity;
        }
        if (product.quantity == 0) {
            apply.style.display = "none";
        }
    };
    const applybutton = document.querySelector(".apply-order button");
    const orders = document.querySelector(".all-orders");
    const totalprice = document.querySelector(".total-price span");
    let total = 0;
    
    applybutton.addEventListener('click', () => {
        orders.innerHTML = ""; 
    
        cats[0].products.forEach(product => {
            if (product.quantity > 0) {
                orders.innerHTML += `
                    <div class="order-total">
                        <img src="${product.img}" alt="">
                        <span class="meal-info-name">${product.name}</span>
                        <div class="meal-info">
                            <span class="meal-info-quant">x${product.quantity}</span>
                            <span class="meal-info-price"> total : ${product.quantity * parseInt(product.price)} $</span>
                        </div>
                    </div>
                `;
                total += product.quantity * parseInt(product.price);
            }
        });
    
        totalprice.textContent = "total : "+ total + "$";
        apply.style.display = "none";
    });
    
}

const close = document.querySelector(".close");
close.addEventListener('click', () => {
    apply.style.display = "none";
});



const totalPart = document.querySelector(".overlay-total")
const wallet =document.querySelector(".order")
const totalcloses = document.querySelector(".order-close")


function hidetotal(){
    totalPart.style.display = "none";
   
}

function showtotal(){
    totalPart.style.display = "flex";
    
}






