const menuBest = [
    {
      id: 1,
      title: "비 클린 톤업선",
      category: "best",
      price: 12.500,
      img: "./img/best/Me_best01.png",
    },
    {
        id: 2,
        title: "카카두c 토닝 패드",
        category: "best",
        price: 24.000,
        img: "./img/best/Me_best02.png",
    },
    {
        id: 3,
        title: "쌀 막걸리 클렌징 폼 120ml",
        category: "best",
        price: 9.800,
        img: "./img/best/Me_best03.png",
    },
    {
        id: 4,
        title: "숲 진정 수분 크림",
        category: "best",
        price: 21.000,
        img: "./img/best/Me_best04.png",
    },    
];

const menuNew = [
    {
        id: 5,
        title: "메이플세라 비건 립 버터",
        category: "new",
        price: 14.000,
        img: "./img/best/Me_new01.png",
    },
    {
        id: 6,
        title: "쌀 막걸리 세라마이드 크림",
        category: "new",
        price: 35.000,
        img: "./img/best/Me_new02.png",
    },
    {
        id: 7,
        title: "쌀 막걸리 클렌징 폼 120ml",
        category: "new",
        price: 9.800,
        img: "./img/best/Me_new03.png",
    },
    {
        id: 8,
        title: "메이플세라 비건 핸드 버터",
        category: "new",
        price: 12.000,
        img: "./img/best/Me_new04.png",
    },    
];

const btns = document.querySelectorAll(".p_btn");
const btnContainer = document.querySelector(".PM_btn");
const sectionContainer = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menuBest);
})

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id
        console.log(category);
    });

    if(category === menuBest){
        
    }
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){

        return `<ul class="products product_bests section-center" id="productBests">
        <li class="all_product product_list product_B">
            <div class="img">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="txt">
                <h4>${item.title}</h4>
            </div>
            <div class="price">
                <span class="circle">50%</span>
                <p>${item.price}<span class="pr">25,000</span></p>
            </div>
            <div class="add">
                <h5>⭐4.7 / 리뷰 354</h5>
                <span class="circle2">
                    <div class="icon"></div>
                </span>
            </div>
        </li>
        </ul>`;
    });
    displayMenu = displayMenu.join("");
    sectionContainer.innerHTML = displayMenu;
}