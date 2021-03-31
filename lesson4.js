'use strict'
// Homework lesson 4

// Упражнение 1

let numer = +prompt("Введите число от 0 до 999");

function getUnitsTensHundereds(numer) {
    if (!Number.isInteger(numer) || numer < 0 || numer > 999) {
        console.log('Переданное число находится вне диапазона [0 .. 999].');
        return {};
    }

    return {
        units: numer % 10,
        hundereds: Math.floor(numer / 100),
        tens: Math.floor(numer / 10) % 10,
    };
}

console.log(getUnitsTensHundereds(numer));


// Упражнение 1.1
// es5
// a)

function Product(name, price) {
    this.name = name;
    this.price = Number(prompt('Введите стоимость товара'));
}
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};
const product = new Product('Продукт', null);
product.make25PercentDiscount();
console.log(product);

// es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = Number(prompt('Введите стоимость товара'));
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}
const product = new Product('Продукт', null);
product.make25PercentDiscount();
console.log(product);


// Упражнение 1.2
// es5
// b)

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function () {
    this.text = String(prompt('Введите текст'));
};
const post = new Post('Alex', null, '12 october');
post.edit();
console.log(post);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const attachment = new AttachedPost('Oleg', null, '13 october');
console.log(attachment);
attachment.makeTextHighlighted();
attachment.edit();
console.log(attachment);

// es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit() {
        this.text = String(prompt('Введите текст'));
    }
}
const post = new Post('Alex', null, '12 october');
post.edit();
console.log(post);

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attachment = new AttachedPost('Oleg', null, '13 october');
console.log(attachment);
attachment.makeTextHighlighted();
attachment.edit();
console.log(attachment);
