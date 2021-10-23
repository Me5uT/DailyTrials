interface IShoppingCart {
  item: string;
  price: number;
  quantity: number;
  total: () => number;
}

const myCart: IShoppingCart[] = [
  {
    item: "Egg",
    price: 1,
    quantity: 15,
    total: function () {
      return this.price * this.quantity;
    },
  },
  {
    item: "Bread",
    price: 3,
    quantity: 1,
    total: function () {
      return this.price * this.quantity;
    },
  },
  {
    item: "Milk",
    price: 5,
    quantity: 1,
    total: function () {
      return this.price * this.quantity;
    },
  },
  {
    item: "Chocolate",
    price: 5,
    quantity: 2,
    total: function () {
      return this.price * this.quantity;
    },
  },
];

const totalShoppingFee = myCart
  .map((product) => product.total())
  .reduce((totalPrice, productPrice) => totalPrice + productPrice);

console.log("totalShoppingFee", totalShoppingFee); // output 33
