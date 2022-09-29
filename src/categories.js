import Item from "./Item";
import TaxItem from "./TaxItem";

export class Beer extends TaxItem {
    constructor(description, price) {
        super("Beer", description, price);
    }

    getTax() {
        return 0.2;
    }
}

export class Cigar extends TaxItem {
    constructor(description, price) {
        super("Cigar", description, price);
    }

    getTax() {
        return 0.25;
    }
}

export class Eletronics extends TaxItem {
    constructor(description, price) {
        super("Eletronics", description, price);
    }

    getTax() {
        return 0.3;
    }
}

export class Water extends Item {
    constructor(description, price) {
        super("Water", description, price);
    }
}
