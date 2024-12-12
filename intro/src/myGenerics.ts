const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(val: T): T {
  return val;
}

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database{
    connnection: string;
    username: string;
    password: string;
}
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, {connnection: '3', username: '3', password: '3'});

interface Quiz{
    name: string;
    type: string;
}
interface Course{
    name: string;
    author: string;
    subject: string;
}
class Sellable<T>{
    public cart: T[] = [];
    addToCart(product: T){
        this.cart.push(product);
    }
}
