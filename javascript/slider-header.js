const productData = [
    {
        title: 'Điểm nhấn cho phong cách',
        imageLeft: '/assets/images/slider-header/sm-img-1.jpeg',
        imageRight: '/assets/images/slider-header/img-1.jpeg',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        title: 'Tự tin gặp gỡ',
        imageLeft: '/assets/images/slider-header/sm-img-2.jpeg',
        imageRight: '/assets/images/slider-header/img-2.jpeg',
        des: 'possimus dolore illum, eveniet voluptatem libero soluta laboriosam adipisci optio culpa!'
    },
    {
        title: 'Năng động ngày mới',
        imageLeft: '/assets/images/slider-header/sm-img-3.jpeg',
        imageRight: '/assets/images/slider-header/img-3.jpeg',
        des: 'libero soluta laboriosam adipisci optio culpa! Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
]

const nextBtn = document.querySelector('.next-btn');
let smImgContainer = document.querySelector('.sm-product-img-container');
let smImg = document.querySelector('.sm-product-img');
let smProductDes = document.querySelector('.sm-product-des');

let productImgContainer = document.querySelector('.product-img-container');
let productImg = document.querySelector('.product-img');
let backdropImg = document.querySelector('.backdrop-img');

let productDetail = document.querySelector('.product-detail');
let productTitle = document.querySelector('.product-title');
let productDes = document.querySelector('.product-des');

let currentProduct = 0;

nextBtn.addEventListener('click', ()=>{
    if(currentProduct >= productData.length - 1){
        currentProduct = 0;
    }else {
        currentProduct++;
    }

    smImgContainer.classList.add('slide');
    productImgContainer.classList.add('slide');
    backdropImg.classList.add('slide-fade');
    productDetail.classList.add('slide-fade');

    setTimeout(() => {
        productTitle.innerHTML = productData[currentProduct].title;
        productDes.innerHTML = productData[currentProduct].des;
        smImg.src = productData[currentProduct].imageLeft;
        productImg.src = backdropImg.src = productData[currentProduct].imageRight;
    }, 500);

    setTimeout(() => {
        smImgContainer.classList.remove('slide');
        productImgContainer.classList.remove('slide');
        backdropImg.classList.remove('slide-fade');
        productDetail.classList.remove('slide-fade');
    }, 1000);
})