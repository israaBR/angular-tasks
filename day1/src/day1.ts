//! Task 1
interface IProduct {
  id: number;
  productName: string;
  price: number;
  description: string;
  hasDiscount: () => boolean;
  discount: () => number;
  show: () => string;
}

class Product implements IProduct {
  constructor(
    public id: number,
    public productName: string,
    public price: number,
    public description: string
  ) {}
  hasDiscount(): boolean {
    return true;
  }
  discount(): number {
    if (this.hasDiscount()) return (10 / 100) * this.price;
    else return 0;
  }
  show(): string {
    return `id:${this.id}, name:${this.productName}, price:${this.price}, description:${this.description}`;
  }
}

function showDetails(products: IProduct[]): void {
  products.forEach((product) => {
    console.log(
      product.id,
      product.productName,
      product.price,
      product.description
    );
  });
}

let p1 = new Product(1, "first", 20, "this is the first product");

let p2 = new Product(2, "second", 30, "this is the second product");
console.log(p2.discount());

let p3 = new Product(3, "third", 40, "this is the third product");
console.log(p3.show());

let p4 = new Product(4, "fourth", 50, "this is the fourth product");

let productsArray: IProduct[] = [p1, p2, p3, p4];

showDetails(productsArray);

//!--------------------------------------------------------------------------------------------

//! Task 2
let numbersArray: number[] = [1, 2, 3];

let StringsNumbersArray: (string | number)[] = [1, 2, "str"];

let customVariables: number | boolean = false;
customVariables = 3;

let customfunction = function (par1: any, par2: any) {
  return par1 + par2;
};

interface IEmployee {
  readonly id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
}
class Employee implements IEmployee {
  constructor(
    readonly id: number,
    public name: string,
    readonly username: string,
    public email: string,
    public address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: { lat: string; lng: string };
    }
  ) {}
  viewAddress() {
    return `street: ${this.address.street}, suite: ${this.address.suite}, city: ${this.address.city},
     zipcode: ${this.address.zipcode}, geo: lat ${this.address.geo.lat}, lng ${this.address.geo.lng}`;
  }
}
class Manager extends Employee {}

let manager = new Manager(1, "Leanne Graham", "Bret", "Sincere@april.biz", {
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipcode: "92998-3874",
  geo: { lat: "-37.3159", lng: "81.1496" },
});

console.log(manager.viewAddress());
