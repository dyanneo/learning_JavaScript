const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      // console.log("top of get appetizers");
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
    },
    set mains(mainIn) {
      this._courses.mains = mainIn;
    }, 
    set desserts(dessertIn) {
      this._courses.desserts = dessertIn;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
};
menu.addDishToCourse('appetizers', 'Salad', 5.00);
menu.addDishToCourse('appetizers', 'Shrimp cocktail', 8.00);
menu.addDishToCourse('appetizers', 'Wings', 7.00);

menu.addDishToCourse('mains', 'Steak', 15.00);
menu.addDishToCourse('mains', 'Seafood', 18.00);
menu.addDishToCourse('mains', 'Pasta', 11.00);

menu.addDishToCourse('desserts', 'Pie', 4.00);
menu.addDishToCourse('desserts', 'Cake', 4.50);
menu.addDishToCourse('desserts', 'Ice cream', 3.00);

console.log(menu.courses);