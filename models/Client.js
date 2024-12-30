class Client {
    constructor(name, id, type, product, legalRepresentative = null) {
        this.name = name;
        this.id = id;
        this.type = type;
        this.product = product;
        this.legalRepresentative = legalRepresentative;
    }
}