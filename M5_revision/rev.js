class Book {
  constructor(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
  }

   getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, Price: ${this.price}`
  }
}
const book = new Book("R.D.sharma","Rd",2000);
// console.log(book.author);


class UserProfie{
  constructor(username){
    this.username= username;
  }

  get
}