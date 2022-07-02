import products from "./products.js"


let cartArr = [];

let isThere = false

console.log(cartArr);

let addHere = document.getElementById("addHere")

let btn1 = document.getElementById("btn1")

let inp1 = document.getElementById("inp1")


let btn2 = document.getElementById("btn2")

let inp2 = document.getElementById("inp2")


let btn3 = document.getElementById("btn3")

let inp3 = document.getElementById("inp3")


let btn4 = document.getElementById("btn4")

let inp4 = document.getElementById("inp4")


let btn5 = document.getElementById("btn5")

let inp5 = document.getElementById("inp5")


let btn6 = document.getElementById("btn6")

let inp6 = document.getElementById("inp6")


let btn7 = document.getElementById("btn7")

let inp7 = document.getElementById("inp7")


let btn8 = document.getElementById("btn8")

let inp8 = document.getElementById("inp8")


let btn9 = document.getElementById("btn9")

let inp9 = document.getElementById("inp9")

 
 let ele;
function perform(x,y){
        let val = parseInt(x.value)
        let quant = parseInt(y.value)
         isThere = cartArr.some(l => l == val)

        console.log(isThere);
        if(isThere){
            alert("aldready the element is present in the cart, plz remove and try again");
        }
        else{
            products.forEach(e =>{
                if(e.id == val){
                    cartArr.push(e.id)
                    console.log(cartArr);
                    ele = document.createElement("div")
                    ele.className = "product";
                    
                    ele.innerHTML += `<h3>${e.fName}</h3>`
                    ele.innerHTML += `<span>Qty: ${quant}</span>`
                    
                    ele.innerHTML += `<span>price : Rs. ${quant * e.price}</span>`
                    ele.innerHTML += `<button value="1" id = "rmvbtn${val}">Remove</button>`
                    
                    addHere.innerHTML += ele.outerHTML;

                    let rmvbtn1 = document.getElementById("rmvbtn1")

                    let rmvbtn2 = document.getElementById("rmvbtn2")

                    console.log(rmvbtn1);
                    console.log(rmvbtn2);
                }
            })
        }
        
        // rmvbtn1.addEventListener("click",function(){
        //     console.log(rmvbtn1.value);
        //     console.log(ele);
        //     ele.innerHTML = "";
        // })
        // console.log( (x.value))
        
}

// perform(btn1)
// let [pr1,pr2,pr3,pr4,pr5,pr6,pr7,pr8,pr9] = 


btn1.addEventListener("click",function(){perform(btn1,inp1)})

btn2.addEventListener("click",function(){perform(btn2,inp2)})

btn3.addEventListener("click",function(){perform(btn3,inp3)})

btn4.addEventListener("click",function(){perform(btn4,inp4)})

btn5.addEventListener("click",function(){perform(btn5,inp5)})

btn6.addEventListener("click",function(){perform(btn6,inp6)})

btn7.addEventListener("click",function(){perform(btn7,inp7)})

btn8.addEventListener("click",function(){perform(btn8,inp8)})

btn9.addEventListener("click",function(){perform(btn9,inp9)})

/* <h4>Product1</h4>
                <div class="form">
                  <p>Quantity</p>
                  <p></p><br><br>
                  <p>price</p>
                  <p></p><br><br>
                  <button class="rmv-btn">REMOVE</button> */


// let rmvBtn = document.getElementsByClassName("rmv-btn")

// console.log(rmvBtn);


// for(e of rmvBtn){
//     e.addEventListener("click",function(){
//         console.log("button clicked");
//     })
// }

//  rmvBtn.forEach(e => {
//     let button = e
//     button.addEventListener("click",function(){
//         console.log("button clicked");
//     })
//  });