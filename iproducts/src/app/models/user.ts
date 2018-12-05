import { Product } from './product';

export class User {

    public products = new Array<Product>();
    public age = new Date();

    constructor(public name) {

    }

    public sayHello() {
        console.log(this.name + ' says hello');
    }
}
