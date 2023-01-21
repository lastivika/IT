// import { IProduct } from "./product-interface";

// export const products: IProduct[] = [
//     {
//         title: 'Burger',
//         description: "550 Cal.",
//         id: 1,
//         img: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
//         price: 3
//     },

//     {
//         title: 'Iphone14',
//         description: "bla bla Iphone",
//         id: 1,
//         img: 'data:image/jpeg;base64,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',
//         price: 100
//     }
// ]


// <ul class="dropdown-menu">
//               <li><a class="dropdown-item" href="#">Breakfast</a></li>
//               <li><a class="dropdown-item" href="#">Burgers</a></li>
//               <li><a class="dropdown-item" href="#">Chicken & Fish Sandwiches</a></li>
//               <li><a class="dropdown-item" href="#">McNuggets & Meals</a></li>
//               <li><a class="dropdown-item" href="#">Fies & Sides</a></li>
//               <li><a class="dropdown-item" href="#">Happy Meal</a></li>
//               <li><a class="dropdown-item" href="#">McCafé Coffees</a></li>
//               <li><a class="dropdown-item" href="#">Sweet & Treats</a></li>
//               <li><a class="dropdown-item" href="#">Beverages</a></li>
//             </ul>


import { IProduct } from "./product-interface";

export const burgers:IProduct[] =[
    {
        title: 'Big Mac',
        description: "550 Cal.",
        id: 1,
        img: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-4-product-tile-desktop',
        price: 3,
    },
    {
        title: 'Quarter Pounder with Cheese',
        description: '520 Cal.',
        id: 2,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 8,
    },
    {
        title: 'Double Quarter Pounder with Cheese',
        description: '740 Cal.',
        id: 3,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 7,
    },
    {
        title: 'Quarter Pounder with Cheese Deluxe',
        description: '630 Cal.',
        id: 4,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4282_QuarterPounderCheeseDeluxe_Shredded_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 10,
    },
    {
        title: 'McDouble',
        description: '400 Cal.',
        id: 5,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/202002_0592_McDouble_Alt_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 10,
    },
    {
        title: 'Quarter Pounder with Cheese Bacon',
        description: '630 Cal.',
        id: 6,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4295-005_BaconQPC_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 11
    },
    {
        title: 'Cheeseburger',
        description: '300 Cal.',
        id: 7,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 12,
    },    
    {
        title: 'Double Cheeseburger',
        description: '450 Cal.',
        id: 8,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_0004_DoubleCheeseburger_Alt_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 25,
    },
    {
        title: 'Hamburger: The Classic McDonalds Burger',
        description: '250 Cal.',
        id: 9,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_2https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0001_Hamburger_Alt_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 25,
    }
]

export const soda:IProduct[] =[
    {
        title: 'Coca-Cola',
        description: '150 Cal.',
        id: 1,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0521_MediumCoke_Glass_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 7,
    },
    {
        title: 'Sprite',
        description: '140 Cal.',
        id: 2,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_0721_MediumSprite_Glass_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 7,
    },
    {
        title: 'Dr Pepper',
        description: '40 Cal.',
        id: 3,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_201905_0421_MediumDrPepper_Glass_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 89,
    },
    {
        title: 'Fanta Orange',
        description: '150 Cal.',
        id: 4,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_201909_1262_MediumFantaOrange_Glass_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 4,
    },
    {
        title: 'Diet Coke',
        description: '0 Cal.',
        id: 5,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0652_MediumDietCoke_Glass_2_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 18,
    },
    {
        title: 'Hi-C® Orange Lavaburst',
        description: '160 Cal.',
        id: 6,
        img:'https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0621_MediumHi-COrange_832x472:product-header-mobile?wid=823&hei=472&dpr=off',
        price: 24,
    }
]
// export const coffee:IProduct[] =[
//     {
//         title: 'Maple leaf necklace',
//         material: 'Gold',
//         id: 1,
//         img:'https://i.pinimg.com/564x/09/0f/2d/090f2dfed010992c3dcd5b927797919f.jpg',
//         price: 73,
//     },
//     {
//         title: 'Wolf necklace',
//         material: 'Stainless steel',
//         id: 2,
//         img:'https://i.pinimg.com/236x/52/36/6a/52366affbe83c8968f7494c9b155f190.jpg',
//         price: 10,
//     },
//     {
//         title: 'Nature heart necklace',
//         material: 'Polymer clay',
//         id: 3,
//         img:'https://i.pinimg.com/236x/eb/35/ef/eb35ef3c3d1c972dcdc89a6719205d9d.jpg',
//         price: 4,
//     },
//     {
//         title: 'Grape necklace',
//         material: 'Сopper',
//         id: 4,
//         img:'https://i.pinimg.com/236x/03/18/2a/03182a5cadfe06beba1179a5f677bab6.jpg',
//         price: 6,
//     },
//     {
//         title: 'Hands holding crystal necklace',
//         material: 'Gold',
//         id: 5,
//         img:'https://i.pinimg.com/564x/47/6f/6c/476f6ce45c625759c6b2182bef8c9886.jpg',
//         price: 87,
//     },
//     {
//         title: 'Pomegranate necklace',
//         material: 'Gold',
//         id: 6,
//         img:'https://i.pinimg.com/236x/4c/a2/96/4ca296a2669465272b7265b6ba104cc3.jpg',
//         price: 86,
//     },
//     {
//         title: 'Black crystal & snake necklace',
//         material: 'Silver',
//         id: 7,
//         img:'https://i.pinimg.com/564x/7a/f9/51/7af951fb11fbb2c8f61fd48954338e77.jpg',
//         price: 21,
//     },
//     {
//         title: 'Octopus necklace',
//         material: 'Silver',
//         id: 8,
//         img:'https://i.pinimg.com/564x/47/4e/82/474e828162f8425c8112d2759423a1c3.jpg',
//         price: 27,
//     },
//     {
//         title: 'Dragon holding space necklace',
//         material: 'Silver',
//         id: 9,
//         img:'https://i.pinimg.com/236x/94/90/49/949049ff1209be2f69dd29762a7abf37.jpg',
//         price: 32,
//     },
// ] 