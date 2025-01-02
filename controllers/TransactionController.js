import ProductController from './ProductController.js';
import Transaction from '../models/Transaction.js';

export default class TransactionController extends ProductController {

    constructor() {
        super();
    }

    async create(data) {
        const transaction = this.#buildTrasaction(data);

        let transactionId = await this.postRequest(this.#buildURLbyTransaction(data), transaction);
        
        return transactionId;
    }

    #buildTrasaction(data) {
        const transaction = new Transaction(
            data.amount
        );

        return transaction;
    }

    #buildURLbyTransaction(data) {
        return fullUrl = `${this.urlBase}/${data.productId}/${data.operation}`;
    }
}