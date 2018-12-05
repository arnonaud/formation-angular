export class Product {
    constructor(
        public name?: string, 
        public price?: number,
        public soldOut?: boolean
    ) {
        this.soldOut = false;
    }

    public toggleSoldOut() {
        this.soldOut = !this.soldOut;
    }
}
