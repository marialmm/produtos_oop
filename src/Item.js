export default class Item {
    constructor(category, description, price) {
        if (this.constructor === Item){
            throw new Error("Can't instantiate abstract class!")
        }
        this.category = category;
        this.description = description;
        this.price = price;
    }
}