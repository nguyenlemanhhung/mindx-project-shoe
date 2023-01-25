// const imgContainer = document.querySelector(".showCase > div");
// const img = document.querySelector(".showCase img");
// const shadow = document.querySelector(".showCase > div");

// const thumb = document.querySelector(".thumbs img");
// const titleOverlay = document.querySelector(".titleOverlay");
// const title = document.querySelector(".titleText");
// const desc = document.querySelector(".description");

// const sizes = document.querySelectorAll(".sizes > li");
// const stars = document.querySelectorAll(".stars span");
// const price = document.querySelector(".price");
// const colorBtn = document.querySelectorAll(".color");

// const pag = document.querySelectorAll(".pag");
// const pre = document.querySelector(".arr-left");
// const next = document.querySelector(".arr-right");
// const shoeNum = document.querySelector(".shoe-num");
// const shoeTotal = document.querySelector(".shoe-total");


// let id = 1;
// let colorType = 1;
// let shoe = 1;

// const colors = [
//     [
//         "ae001b",
//         "#111111"
//     ],
//     [
//         "linear-gradient(0deg, orange, red)",
//         "#bda08e"
//     ],
//     [
//         "linear-gradient(0deg, #00b8ea 0%, #e6882d 50%, #e56da6 100%)",
//         "linear-gradient(0deg, #dae766, #b2afaa"
//     ]
// ];
// const prices = ["150", "250", "175"];
// const names = [
//     [
//         "red nike jordan max aura 3",
//         "black nike jordan max aura 3"
//     ],
//     [
//         "black/orange nike air max 95",
//         "beige/gray nike air max 95"
//     ],
//     [
//         "colorful noke jordan delta 2 sp",
//         "gray noke jordan delta 2 sp"
//     ],
// ];

// const descriptions = [
//     [
//         "red nike jordan max aura 3. Perferendis delectus dolore voluptate corporis earum, dolor accusamus incidunt quis dignissimos magnam, adipisci veniam? Maxime corporis totam dolorum, molestias laudantium officiis facere."
//     ],
//     [
//         "nike air max 95. Perferendis delectus dolore voluptate corporis earum, dolor accusamus incidunt quis dignissimos magnam, adipisci veniam? Maxime corporis totam dolorum, molestias laudantium officiis facere."
//     ],
//     [
//         "noke jordan delta 2 sp. Perferendis delectus dolore voluptate corporis earum, dolor accusamus incidunt quis dignissimos magnam, adipisci veniam? Maxime corporis totam dolorum, molestias laudantium officiis facere."
//     ]
// ];
// const ratings = [4, 5, 3];

// function getImage(imgType, shoe, colorType, id, extension){
//     return "assets/images/products/" +
//     imgType + "/shoe" + shoe + "-" +
//     colorType + "/img" + id + "." + extension;
// }
// function resetActive(element, elementClass, i){
//     for (let i = 0; i < element.length; i++){
//         element[i].classList.remove(elementClass + "-active");
//     }
//     element[i].classList.add(elementClass + "-active");
// }
// //chaning img
// for (let i = 0; i < thumb.length; i++){
//     thumb[i].addEventListener("click", (e) => { 
//         id = i + 1;
//         img.src = getImage("showcase", shoe, colorType, id, "png");
//         resetActive(thumb, "thumb", i);
//         AnimationEffect(imgContainer, 550, "fade 500ms ease-in-out")
//     });
// }
// //chaning size
// for (let i = 0; i <sizes.length; i++){
//     sizes[i].addEventListener("click", (e)=>{
//         resetActive(sizes, "size", i)
//     });
// }