var Book = /** @class */ (function () {
    function Book(id, name, author) {
        this.id = id;
        this.name = name;
        this.author = author;
    }
    Book.prototype.details = function () {
        console.log(this.id, this.name, this.author);
    };
    return Book;
}());
var book = new Book(1, 'Harry Potter', 'Sten Lee');
console.log(book);
function func(x, y) { }
var btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', function (e) {
    console.log(e.target);
});
