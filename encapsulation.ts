type idType = number | string;

class Book {
	id: idType;
	name: string;
	author: string;

	constructor(id: idType, name: string, author: string) {
		this.id = id;
		this.name = name;
		this.author = author;
	}

	details() {
		console.log(this.id, this.name, this.author);
	}

	authorInfo() {
		console.log('Author is ', this.author);
	}
}

const book: Book = new Book(1, 'Harry Potter', 'Sten Lee');
book.details();

const btn = document.querySelector('button')! as HTMLElement;

btn.addEventListener('click', e => {
	btn.innerText = 'Clicked';
	document.getElementById('h1')!.innerHTML += ' Stuff';
});
