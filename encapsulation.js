var Book = /** @class */ (function () {
    function Book(id, name, author) {
        this.id = id;
        this.name = name;
        this.author = author;
    }
    Book.prototype.details = function () {
        console.log(this.id, this.name, this.author);
    };
    Book.prototype.authorInfo = function () {
        console.log('Author is ', this.author);
    };
    return Book;
}());
var book = new Book(1, 'Harry Potter', 'Sten Lee');
book.details();
var btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
    btn.innerText = 'Clicked';
    document.getElementById('h1').innerHTML += ' Stuff';
});
