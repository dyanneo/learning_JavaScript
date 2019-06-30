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
console.log(menu.courses);