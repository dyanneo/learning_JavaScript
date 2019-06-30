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
    
};