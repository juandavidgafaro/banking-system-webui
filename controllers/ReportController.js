import ProductController from './ProductController.js';

export default class ReportController extends ProductController {

    static reportsType = ["TopTenClientsByProductBalance", "AverageBalanceByProductType"];

    constructor() {
        super();
    }

    async getTopTenClientsByProductBalance() {

        debugger;
        let fullUrl = `${this.urlBase}/${ReportController.reportsType[0]}`;
        let data = await this.getRequest(fullUrl);
        debugger;
        return data;
    }

    async getAverageBalanceByProductType() {

        let fullUrl = `${this.urlBase}/${ReportController.reportsType[1]}`;
        let data = await this.getRequest(fullUrl);
        
        return data;
    }
}