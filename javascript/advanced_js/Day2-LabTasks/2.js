// Book object constructor function
function Book(title, numofChapters, author, numofPages, publisher, numofCopies) {
    this.title = title;
    this.numofChapters = numofChapters;
    this.author = author;
    this.numofPages = numofPages;
    this.publisher = publisher;
    this.numofCopies = numofCopies || 1; // default to 1 copy
    // Book.numOfBooks++;
}
  
//   // class property to keep track of the number of created books
//   Book.numOfBooks = Book.numOfBooks || 0;
//   Book.numOfBooks++;

// // class method to retrieve the number of created books
// Book.getNumOfBooks = function() {
// return Book.numOfBooks;
// }
  
// Box object constructor function
function Box(height, width, length, material, content) {
this.height = height;
this.width = width;
this.length = length;
this.material = material;
this.content = content || [];
this.getContent = function(){
  return this.content;
}
}

// method to add a book to the box's content array
Box.prototype.addBook = function(book) {
    if (!(book instanceof Book)) {
      throw new Error('book must be an instance of Book');
    }
      this.content.push(book);
  }
  

// method to count the number of books in the box
Box.prototype.countBooks = function() {
return this.content.length;
}

Box.prototype.valueOf = function() {
  return this.content.length;
};
var box1 = new Box(10, 10, 10, "Cardboard");
var box2 = new Box(10, 10, 10, "Plastic");
var box3 = new Box(10, 10, 10, "Metal");
var book1 = new Book("Book 1", 10, "Author 1", 200, "Publisher 1", 1);
var book2 = new Book("Book 2", 12, "Author 2", 300, "Publisher 2", 2);
var book3 = new Book("Book 3", 14, "Author 3", 400, "Publisher 3", 6);
box1.addBook(book1);
box1.addBook(book2);
box2.addBook(book3);
box3.addBook(book1);
box3.addBook(book2);
var totalBooks = box1 + box2 + box3;
console.log("Total number of books: " + totalBooks);


// Box.prototype.valueOf = function() {
//   var totalBooks = 0;
//   for (var i = 0; i < this.content.length; i++) {
//     totalBooks += this.content[i].numofCopies;
//   }
//   return totalBooks;
// };
// var box1 = new Box(10, 10, 10, "Cardboard");
// var box2 = new Box(10, 10, 10, "Cardboard");
// var box3 = new Box(10, 10, 10, "Cardboard");
// box1.addBook(new Book("Book 1", 10, "Author 1", 200, "Publisher 1", 1));
// box2.addBook(new Book("Book 2", 12, "Author 2", 300, "Publisher 2", 2));
// box3.addBook(new Book("Book 3", 14, "Author 3", 400, "Publisher 3", 6));
// var totalBooks = box1 + box2 + box3;
// console.log(totalBooks); // output: 9

Box.prototype.countAllCopies = function() {
  var totalCopies = 0;
  for (var i = 0; i < this.content.length; i++) {
    totalCopies += this.content[i].numofCopies;
  }
  return totalCopies;
}


// method to remove a book from the box's content array
Box.prototype.removeBook = function(book) {
  var bookFound = false;
  for (var i = 0; i < this.content.length; i++) {
    if (this.content[i] === book) {
      bookFound = true;
      this.content[i].numofCopies--;

      if (this.content[i].numofCopies > 1){
        console.log("There are "+ book.numofCopies +" copies remain of " + book.title +" in this box.");
      }

      if (this.content[i].numofCopies === 1){
        console.log("There is only 1 copy remains of " + book.title +" in this box.");
      }

      if (this.content[i].numofCopies === 0) {
        console.log("No more copies of " + book.title +" in this box!");
        this.content.splice(i, 1);
      }
      break;
    }
  }
  if (bookFound === false){
      console.log("No copies of " + book.title + " found to be removed!");
  }
}


// var book1 = new Book("Book 1", 10, "Author 1", 200, "Publisher 1", 1);
// var book2 = new Book("Book 2", 12, "Author 2", 300, "Publisher 2", 2);
// var book3 = new Book("Book 3", 14, "Author 3", 400, "Publisher 3", 6);
// var box = new Box(10, 10, 10, "Cardboard");
// box.addBook(book1); // adds 1 copy of book1 to the box
// box.addBook(book2); // adds 4 copies of book2 to the box
// box.addBook(book3); // adds 6 copies of book2 to the box
// box.removeBook(book1);
// box.removeBook(book1);
// box.removeBook(book2);
// console.log(box.countBooks()); // output: 2
// console.log(box.countAllCopies()); // output: 10
// console.log(box.getContent());