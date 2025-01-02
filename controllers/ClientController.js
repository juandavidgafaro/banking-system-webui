import BaseController from './BaseController.js';
import Client from '../models/Client.js';

export default class ClientController extends BaseController {

    constructor() {
        super(); 
        this.urlBase = "https://localhost:44315/api/v1/Client";
    }

    async create(data) {
        const client = this.#buildClient(data);

        let clientCreatedId = await this.postRequest(this.urlBase, client);
        
        return clientCreatedId;
    }

    #buildClient(data) {
        const client = new Client(
            data.name, 
            data.identificationNumber,
            data.identificationType,
            data.personType,
            data.country,
            data.legalRepresentative
        );

        return client;
    }
}
