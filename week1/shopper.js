var shopper = {
    first_name: "John",
    last_name : "Henry",
    age       : 20,
    customer  : 001,
    Adult     : true,
    grocery_cart: [ "milk", "eggs", "bread"],
    full_name : function() {
        return this.first_name + " " + this.last_name;
      }
    };
console.log(shopper.full_name());