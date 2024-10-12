"use strict";
function popupFn() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popupDialog").style.display = "block";
}
function closeFn() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupDialog").style.display = "none";
}

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  //   // if (scrollHeight > navHeight) {
  //   //   navbar.classList.add("fixed-nav");
  //   // } else {
  //   //   navbar.classList.remove("fixed-nav");
  //   // }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// menu items
const menu = [
  {
    id: 1,
    title: "pancakes",
    category: "breakfast",
    price: 7.25,
    img: "assets/pancakes.jpg",
    desc: `choices of Chocolate-filled with caramelised banana OR Fluffy American pancakes with cherry-berry syrup. `,
  },
  {
    id: 2,
    title: "eggs benedict",
    category: "breakfast",
    price: 8.55,
    img: "assets/eggs benedict.jpg",
    desc: `consisting of two halves of an English muffin, each topped with Canadian bacon, a poached egg, and hollandaise sauce. `,
  },
  {
    id: 3,
    title: "English breakfast",
    category: "breakfast",
    price: 8.25,
    img: "assets/english breakfast.jpg",
    desc: `contain: sausages, back bacon, eggs, tomatoes, mushrooms, fried bread, and beans. `,
  },
  {
    id: 4,
    title: "bacon sandwich",
    category: "breakfast",
    price: 6.75,
    img: "assets/bacon sandwich.jpg",
    desc: `sandwich made with cooked bacon, butter, and sometimes ketchup or brown sauce, served hot on bread. `,
  },
  {
    id: 5,
    title: "regular coffee",
    category: "coffee",
    price: 2.55,
    img: "assets/regular coffee.jpg",
    desc: `made from commodity-grade coffee beans that are machine-harvested and processed in large quantities. `,
  },
  {
    id: 6,
    title: "americano",
    category: "coffee",
    price: 4.25,
    img: "assets/americano.jpg",
    desc: `The layer of crema on top of an Americano is mostly for appearance, as it doesn't add much flavor. `,
  },
  {
    id: 7,
    title: "cappuccino",
    category: "coffee",
    price: 5.25,
    img: "assets/cappuccino.jpg",
    desc: `an espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam. `,
  },
  {
    id: 8,
    title: "expresso",
    category: "coffee",
    price: 5.25,
    img: "assets/expresso.jpg",
    desc: `a concentrated form of coffee brewed with high pressure, hot water and finely ground coffee beans.  `,
  },
  {
    id: 9,
    title: "cheesecake",
    category: "desserts",
    price: 3.55,
    img: "assets/cheesecake.jpg",
    desc: `consisting of a creamy filling usually containing cheese baked in a pastry or pressed-crumb shell. `,
  },
  {
    id: 10,
    title: "carrot cake",
    category: "desserts",
    price: 3.75,
    img: "assets/carrot cake.jpg",
    desc: `sweet and moist spice cake, full of cut carrots and toasted nuts, and covered in cream cheese icing. `,
  },
  {
    id: 11,
    title: "tiramisu cake",
    category: "desserts",
    price: 4.55,
    img: "assets/tiramisu.jpg",
    desc: `an Italian dessert consisting of layers of sponge cake soaked in coffee and brandy or liqueur with powdered chocolate and mascarpone cheese. `,
  },
  {
    id: 12,
    title: "chocolate cake",
    category: "desserts",
    price: 4.55,
    img: "assets/chocolate cake.jpg",
    desc: `Chocolate cake or chocolate gâteau (from French: gâteau au chocolat) is a cake flavored with melted chocolate, cocoa powder, or both. `,
  },
];
const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

//filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      // console.log(menuItem.category);
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    // console.log(menuCategory);
    if (
      category === "breakfast" ||
      category === "coffee" ||
      category === "desserts"
    ) {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.slice(0, 4).map(function (item) {
    return `<article class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">£${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
