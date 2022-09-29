import Item from "./Item";

export default class TaxItem extends Item {
    constructor(category, description, price) {
        super(category, description, price);
        if (this.constructor === TaxItem) {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    getTax() {
        throw new Error("Method getTax() must be implemented!");
    }

    calculateTax() {
        return this.price * this.getTax();
    }
}
