/*
Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: 
    author (string), 
    title (string), 
    pages (number), 
    isCheckedOut (boolean, initially false), and 
    ratings (array, initially empty).
Getters: all properties have a getter
Methods: 
    .getAverageRating(), 
    .toggleCheckOutStatus(), and 
    .addRating()

    Movie
Properties: 
    director (string), 
    title (string), 
    runTime (number), 
    isCheckedOut (boolean, initially false), and 
    ratings (array, initially empty)
Getters: all properties have a getter
Methods: 
    .getAverageRating(), 
    .toggleCheckOutStatus(), and 
    .addRating()

CD
Properties: 
    artist (string), 
    title (string), 
    isCheckedOut (boolean, initially false), and 
    ratings (array, initially empty), 
    songs (array of strings)
Getters: all properties have a getter
Methods: 
    .getAverageRating(), 
    .toggleCheckOutStatus(), and 
    .addRating()
*/

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [1,3,5];
    }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    if (this._isCheckedOut) {
      !this._isCheckedOut;
    } else {
      this._isCheckedOut = true;
    }
  }
  
  set isCheckedOut(out) {
    this._isCheckedOut = out;
  }

  getAverageRating() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const ratingsList = this.ratings;
    const reduced = ratingsList.reduce(reducer);
    const avgRating = reduced / ratingsList.length;
    return avgRating;
  }
  addRating(num) {
    this._ratings.push(num);
  }
}
class Book extends Media {
    constructor(title,author,pages) {
        super(title);
        this._author = author;
        this._pages = pages;

    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
class Movie extends Media {
    constructor(title,director,runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;

    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

historyOfEverything = new Book('A Short History of Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything);
/*
const book = new Media('The Mists of Avalon');
console.log(book.getAverageRating());
*/