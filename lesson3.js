'use strict';

// Homework lesson 3

// Упражение 1

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + ' - это ноль');
    }
    else if (i % 2 == 0) {
        console.log(i + ' - это чётное число');
    }
    else {
        console.log(i + ' - это нечётное число');
    }
}

// Упражнение 2
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        }, {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },]
};

console.log(post.author);
console.log(post.comments[0]['rating']['dislikes']);
console.log(post.comments[1]['userId']);
console.log(post.comments[1]['text']);


// // Упражнение 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    }, {
        id: 1,
        price: 1000,
    },
];

products.forEach(item => {
    item.price = item.price - item.price * 0.15;
});

// Упражнение 4

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",]
    }, {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
// Получаем товары у которых есть фото
const photoOfproducts = products.filter(goods => "photos" in goods && goods.photos.length > 0);

console.log(photoOfproducts);

// Сортировка товаров по цене
const sortingOfGoodsByPrice = products.sort(function (product1, product2) {
    return product1.price - product2.price
});
console.log(sortingOfGoodsByPrice);
