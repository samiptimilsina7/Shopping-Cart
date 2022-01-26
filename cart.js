const totalPage=()=>{
    // console.log('button was clicked')
    document.querySelector(".sliding-form").classList.add('transition')
    // document.querySelector("body").classList.add('color-change')
    // document.querySelector(".header").classList.add('color-change')
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
    name:"Aurora Diamante Pen",
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
// let count=0; //counts the increment and decrement and passes it to the count value


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


// const addCart=(id)=>{

//     inCartItems.map((product)=>{
//         if (product.id==id){
//             product.count+=1
//             sumProducts();
//             displayCartSelection();
//             return
//             inCartItems.push
//         }
//     })

//     products.forEach((product)=>{
//         if (product.id==id){
//             inCartItems.push({id:product.id,image:product.image,name:product.name,price:product.price, count:1})
//         }   
//         //made count 1 as cart items added should be 1 not 0 cause it is added, imo
//     }) //pushing products selected to cart items

//     sumProducts();

//     displayCartSelection(); //next step to pass in cart items and loop it so no need to pass id value
// }

const addCart=(id)=>{

    let checkProductInCart = inCartItems.filter(item => item.id == id);
    
    let itemToBeAdded = products.filter((item) => item.id == id);
    console.log(itemToBeAdded)
    
    if (checkProductInCart.length > 0) {
    
        inCartItems.map((product) => {
    
            if (product.id == id) {
    
                product.count += 1
    
                sumProducts();
    
                displayCartSelection();
    
            }
        })
    }
    
    else {
    
            inCartItems.push({
        
            ...itemToBeAdded[0],
        
            count: 1,
    
            });
    
        sumProducts();
        
        displayCartSelection(); //next step to pass in cart items and loop it so no need to pass id value
        }
    
}

function sumProducts(){
    sum=0
    inCartItems.forEach((product)=>{
        sum+= product.price*product.count
    })
    document.querySelector(".sliding-form h3").innerHTML="Your total: "+sum //add sum
}

function displayCartSelection(){
    document.querySelector(".brought-items").innerHTML='' //clears the cart billing area so that the product cant be seen twice when adding next product

    inCartItems.map(product=>{
        document.querySelector(".brought-items").innerHTML+=`  
        <div class="brought-items-content">
            <img src=${product.image} alt="product photo">
            <div class="brought-items-details">
                <h4>${product.name}</h4>
                <h5>Rs ${product.price}</h5>
                <span onclick="removeCartProduct(${product.id})">remove</span>
            </div>
            <div class="increment-decrement">
                <i class="fas fa-chevron-up" onclick="increaseQuantity(${product.id})"></i>
                <p>${product.count}</p>
                <i class="fas fa-chevron-down" onclick="decreaseQuantity(${product.id})"></i>
            </div>
        </div>
        ` //displays only the cart items in the cart billing area
    }) 
}

const removeCartProduct=(id)=>{
    inCartItems=inCartItems.filter(product=>product.id!==id)
    console.log(inCartItems)

    displayCartSelection();

    sumProducts();
}

const increaseQuantity=(id)=>{
    // inCartItems.forEach((product)=>{
    //     count=0
    // })
    inCartItems.forEach((product)=>{
        if (product.id==id){
            product.count+=1
            // let arrayIndex=product.id-1
            // document.querySelectorAll(".increment-decrement p")[arrayIndex].innerHTML=product.count
            // // document.querySelector(".increment-decrement p").innerHTML=product.count  
        }
    })
    displayCartSelection(); //changed the ".increment-decrement p" to product.count so every +1 is displayed again
    sumProducts()
    // count+=1
} //increase the quantitiy amount on clicking the ^ option

// const decreaseQuantity=(id)=>{
//     // count=document.querySelector(".increment-decrement p").innerHTML
//     count-=1
//     document.querySelector(".increment-decrement p").innerHTML=count
// } //decrease the quantity amount on clicking the V option

const decreaseQuantity=(id)=>{
    inCartItems.forEach((product)=>{
        if (product.id==id) {
            product.count-=1
            if (product.count<1) {
                removeCartProduct(id)
            }
        }
    })

    displayCartSelection();
    sumProducts();
}

