class ClientController {
    static registerClient(formValues) {
        const { name, id, type, product, repName, repId, repPhone } = formValues;

        let legalRepresentative = null;
        if (type === 'business') {
            if (!repName || !repId || !repPhone) {
                throw new Error('Please complete all fields for the legal representative.');
            }
            legalRepresentative = new LegalRepresentative(repName, repId, repPhone);
        }

        const client = new Client(name, id, type, product, legalRepresentative);
        return client;
    }

    static generateMessage(client) {
        let message = `Client registered:\nName: ${client.name}\nID: ${client.id}\nType: ${client.type}\nProduct: ${client.product}`;

        if (client.type === 'business' && client.legalRepresentative) {
            message += `\nLegal Representative:\n  Name: ${client.legalRepresentative.name}\n  ID: ${client.legalRepresentative.id}\n  Phone: ${client.legalRepresentative.phone}`;
        }

        return message;
    }
}