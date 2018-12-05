import { Product } from '../models/product';

export abstract class GenericProductsService {
    public abstract getAllProducts() : Array<Product>;
    public abstract addProduct(product: Product);
    public abstract goFilter(value: number);
    public abstract add(product: Product);
    public abstract getProductsByName(name: string): Product[];
}
