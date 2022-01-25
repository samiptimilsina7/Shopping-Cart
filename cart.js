const totalPage=()=>{
    // console.log('button was clicked')
    document.querySelector(".sliding-form").classList.add('transition')
    // document.querySelector(".header").classList.add('color-change')
    // document.querySelector(".product-section").classList.add('color-change')
}

const closePage=()=>{
    document.querySelector(".sliding-form").classList.remove('transition')
    // document.querySelector(".header").classList.remove('color-change')
    // document.querySelector(".product-section").classList.remove('color-change')
}

let products=[
{
    id:1,
    image: "./images/pen.png",
    name:"Aurora Diamante Fountain Pen",
    price:2299
},
{
    id:2,
    image: "./images/toothbrush.jpg",
    name:"Sensodine",
    price:189
},
{
    id:3,
    image: "./images/book.jpg",
    name:"Harry Potter",
    price:560
},
{
    id:4,
    image: "./images/table.jpg",
    name:"EKEA Table",
    price:510
},
{
    id:5,
    image: "./images/shoes.jpg",
    name:"Gucci Shoes",
    price:2500
},
{
    id:6,
    image: "./images/comb.jpg.crdownload",
    name:"Vintage Comb",
    price:12500
}]; //products is what is seen in home page
let sum=0;
let inCartItems=[]; //after adding to cart, the cart items is seen on the cart billing area

function displayProducts(){
    products.forEach((product,index)=>{
        document.querySelector(".products-boxes").innerHTML+=`
        <div class="product-box">
            <div class="image-button">
                <img src=${product.image} alt="product photo">
                <button onclick="addCart(${product.id})">
                    <i class="fas fa-cart-plus"></i>
                    <p>ADD TO CART</p>
                </button>
            </div>
        <p class="product-name">${product.name}</p>
        <p class="product-price">Rs ${product.price}</span></p>
        </div>
        ` 
    })
}

displayProducts();





// productNames.forEach((product,index)=>{
//     object1+={product:product.innerHTML}
// })

// productPrices.forEach((product)=>{
//     object2={price:product.innerHTML}
// })

// products={...productNames, ...productPrices};

const addCart=(id)=>{
    // console.log(index)
    sumProducts(id);
    displayCartSelection(id); 
    // inCartItems.push({image:products[index].image,name:products[index].name,price:products[index].price,index:index})
    // console.log(inCartItems) //want to alter inCartItems in remove section
}

// function sumProducts(id){
//     sum+=products.map((product)=>{
//         if (product.id==id){
//             return product.price
//         }
//     })
//     console.log(sum)
//     // sum+=products[index].price
//     // document.querySelector(".sliding-form h3").innerHTML="Your total: "+sum //add sum
//     // console.log('hey'+index)
// }

function sumProducts(id){
    products.forEach((product)=>{
        if (product.id==id){
            sum+= product.price
        }
    })
    document.querySelector(".sliding-form h3").innerHTML="Your total: "+sum //add sum
}

// function displayCartSelection(index){
//     document.querySelector(".brought-items").innerHTML+=`  
//     <div class=".brought-items-content">
//         <img src=${products[index].image} alt="product photo">
//         <div class="brought-items-details">
//             <h4>${products[index].name}</h4>
//             <h5>${products[index].price}</h5>
//             <span onclick="removeCartProduct(${index})">remove</span>
//         </div>
//         <div class="increment-decrement">
//             <i class="fas fa-chevron-up"></i>
//             <p>Count</p>
//             <i class="fas fa-chevron-down"></i>
//         </div>
//     </div>
//     ` //displays the items in the cart billing area
// }

// const removeCartProduct=(_index)=>{
//     inCartItems=inCartItems.filter(product=>product.index!==_index)
//     // console.log(inCartItems)
//     document.querySelector(".brought-items").innerHTML='' //clears the cart billing area
//     // sum=0;
//     sum-=products[_index].price //decreases the sum by using the products array
//     inCartItems.forEach(product=>displayCartSelection(product.index))
//     document.querySelector(".sliding-form h3").innerHTML="Your total: "+sum //add sum
// }


