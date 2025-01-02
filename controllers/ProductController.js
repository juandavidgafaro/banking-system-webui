import BaseController from './BaseController.js';
import Product from '../models/Product.js';

export default class ProductController extends BaseController {

    constructor() {
        super(); 
        this.urlBase = "https://localhost:44315/api/v1/Product";
    }

    async create(data) {
        const product = this.#buildProduct(data);

        let productCreatedId = await this.postRequest(this.urlBase, product);
        
        return productCreatedId;
    }

    async cancel(data) {

        let transactionSerial = await this.patchRequest(this.#buildCancellationURL(data));
        
        return transactionSerial;
    }

    async calculateInterest(data) {
        debugger;

        let resultBalance = await this.postRequest(this.#buildCalculateInterestURL(), data);
        
        return resultBalance;
    }

    #buildProduct(data) {
        const product = new Product(
            data.type, 
            data.termMonths,
            data.initialBalance,
            data.monthlyInterestPercentage,
            data.clientId
        );

        return product;
    }

    #buildCancellationURL(data) {
        return `${this.urlBase}/${data}/Cancel`;
    }

    #buildCalculateInterestURL() {
        return `${this.urlBase}/CalculateInterest`;
    }
}


